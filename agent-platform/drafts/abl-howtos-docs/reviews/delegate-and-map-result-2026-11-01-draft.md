# How to call a sub-agent and map its result back

Use this pattern when an agent needs a specialist to do one bounded job, return a result, and let the calling agent keep the conversation.

## Concept

`DELEGATE` calls another agent as a sub-agent. The caller pauses, the sub-agent runs to completion, and control returns to the caller with a result. The customer stays with the caller the whole time.

`HANDOFF` is different. A handoff moves the conversation to another agent. Use `DELEGATE` for a lookup, a check, or a calculation. Use a handoff when the other agent must talk to the customer. See [Use delegate instead of handoff](/agent-platform/abl/how-to/use-delegate-instead-of-handoff) and [Use handoff instead of delegate](/agent-platform/abl/how-to/use-handoff-instead-of-delegate) for the decision.

A delegate is a one-shot internal call. The sub-agent cannot wait for the customer to answer a question. If it asks for input, the call fails.

The pieces of a delegate fit together in this order:

1. **Declare.** The caller lists the sub-agent in a `DELEGATE:` section.
2. **Decide.** `WHEN` and `ENABLED_WHEN` decide whether the call is allowed.
3. **Send.** `INPUT` (also written `PASS`) copies caller values to the sub-agent.
4. **Run.** The sub-agent runs once, within a timeout.
5. **Map back.** `RETURNS` copies sub-agent values into caller variables. The full result is also stored in one variable.
6. **Fail safely.** `ON_FAILURE` decides what happens on a failure or timeout.

Three things start a delegate:

| Starter | Where you write it | Who decides to call |
| ------- | ------------------ | ------------------- |
| A model tool call | `DELEGATE:` section of a reasoning agent or supervisor | The agent model, when `WHEN` allows it |
| A flow step action | `DO:` list of a flow step | Your flow, always |
| Session start | `DELEGATE:` line in `ON_START:` | The platform, once at session start |

A `DELEGATE:` entry is the contract for all three. It sets `INPUT`, `RETURNS`, the timeout, and the failure policy.

## Minimal working example

The caller asks for an order number, calls a refund checker, and tells the customer the result. Both agents are complete. The `check_refund_policy` tool is a project-local assumption: bind it to your refund policy service in Project Tools.

```abl
AGENT: Refund_Checker
GOAL: "Decide refund eligibility for one order and return the decision"
PERSONA: "Precise refund policy checker"

TOOLS:
  check_refund_policy(order_id: string) -> {eligible: boolean, reason: string}
    description: "Look up the refund policy decision for an order"
    parameters:
      order_id:
        type: string
        description: "Order number to check"
        required: true
    confirm: never

GATHER:
  order_id:
    prompt: "Order number"
    type: string
    required: true

MEMORY:
  session:
    - eligible
    - reason

FLOW:
  entry_point: check_policy

  check_policy:
    REASONING: false
    CALL: check_refund_policy
      WITH:
        order_id: "{{order_id}}"
      AS: policy
    ON_SUCCESS:
      - ELSE:
        SET:
          eligible = policy.eligible
          reason = policy.reason
        THEN: COMPLETE
    ON_FAIL:
      RESPOND: "The refund policy service is unavailable."
      THEN: COMPLETE
```

```abl
AGENT: Order_Desk
GOAL: "Confirm refund eligibility for an order and tell the customer"
PERSONA: "Concise order support agent"

MEMORY:
  session:
    - refund_eligible
    - refund_reason
    - refund_check

DELEGATE:
  - TO: Refund_Checker
    WHEN: order_id IS SET
    PURPOSE: "Check whether the order qualifies for a refund"
    INPUT:
      order_id: order_id
    RETURNS:
      eligible: refund_eligible
      reason: refund_reason
    USE_RESULT: refund_check
    TIMEOUT: 20s
    ON_FAILURE: RESPOND "I cannot check refund eligibility right now. Please try again shortly."

FLOW:
  entry_point: ask_order

  ask_order:
    REASONING: false
    GATHER:
      - order_id:
          prompt: "What is your order number?"
          type: string
          required: true
    THEN: check_refund

  check_refund:
    REASONING: false
    DO:
      - DELEGATE: Refund_Checker
        RETURN: true
    THEN: tell_customer

  tell_customer:
    REASONING: false
    RESPOND: "Refund eligible: {{refund_eligible}}. Reason: {{refund_reason}}."
    THEN: COMPLETE
```

Variable sources:

- `order_id` is gathered by the caller in `ask_order`. `INPUT` copies it to the sub-agent, which declares it in `GATHER`.
- `eligible` and `reason` are session values that the sub-agent sets in its flow.
- `refund_eligible` and `refund_reason` are caller session values. `RETURNS` writes them. The `tell_customer` step uses them.
- `refund_check` receives the full result. See [The result envelope](#the-result-envelope).

Validate both files together. The caller alone fails validation because `Refund_Checker` is not in the compilation.

## How it works

### What the sub-agent receives

The platform starts a new thread for the sub-agent and passes three things:

- The values from `INPUT`. Each entry copies a caller variable to a sub-agent field. The source is a plain variable name or a dotted path such as `customer.id`.
- The instruction text. A model-selected delegate writes it. A flow delegate uses the current customer message.
- Session metadata that the caller already holds.

`INPUT` does not evaluate expressions. A value such as `quantity * 2` is not computed. Compilation warns with `CEL_IN_INPUT_MAPPING`. Compute the value with `SET` in an earlier step, then map the variable. A source that has no value is dropped, and the sub-agent field stays empty.

`DELEGATE` has no `HISTORY` setting and no `MAP` key. The parser ignores an unknown key without a message. If the sub-agent needs context, send it through `INPUT`.

If the sub-agent declares a required `GATHER` field, you must map it in `INPUT`. Otherwise validation fails with `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED`, because the sub-agent cannot ask the customer.

### The result envelope

When the sub-agent finishes, the platform builds one result object. It holds these fields:

| Field | Content |
| ----- | ------- |
| `response`, `responseText` | The text the sub-agent produced. |
| `responseData` | The parsed value when the response is JSON. |
| `returns` | The values that `RETURNS` mapped. |
| `action` | The sub-agent final action. |
| `richContent`, `voiceConfig`, `actions`, `renderables`, `citations` | Structured output, when present. |

`USE_RESULT` names the caller variable that stores this object. Write a plain variable name, such as `USE_RESULT: refund_check`. If you omit it, the object is stored in `delegate_result`. A value that is not a variable name, such as `"Present the fee breakdown"`, parses without a message and stores nothing.

### How RETURNS maps values

`RETURNS` has two forms.

**Map form.** Write `child_field: parent_variable`. The platform reads `child_field` from the result and assigns it to `parent_variable`. It looks in this order: a result field of that name, a key in the JSON response, the sub-agent session values, and the sub-agent state context. In the example, `eligible` is read from the sub-agent session values.

**Schema form.** Write `field: type`, such as `eligible: boolean`. Every entry must be a type: `string`, `number`, `integer`, `boolean`, `object`, `array`, `json`, `unknown`, a capitalized type name, or an array of one of these. The platform copies the values into the result `returns` field and does not write caller variables.

Rules that apply to both forms:

- A key that is missing in the sub-agent result is skipped.
- If `RETURNS` is declared and no key maps, the delegate fails with "completed without required return values". The failure path runs.
- An empty string never overwrites a caller variable that already holds a value. Return `null` to clear one on purpose.
- Compilation warns with `UNKNOWN_DELEGATE_RETURN_FIELD` when the sub-agent does not declare or produce the child field. Fix the name, or declare the field in the sub-agent.
- Each target variable must not be a reserved system name.

### The timeout

The timeout is chosen in this order:

1. `TIMEOUT` on the `DELEGATE:` entry.
2. The runtime delegate timeout, which the platform operator can set.
3. The general runtime timeout.
4. 30 seconds.

Write `TIMEOUT` as bare milliseconds or a number ending in `ms`, `s`, or `m`. Any other text, such as `soon`, fails validation with `INVALID_TIMEOUT_SYNTAX`. On timeout, the platform cancels the sub-agent, waits a short grace period for it to stop, and runs the failure policy.

### Conditions

`WHEN` decides whether this call is valid. A value that is an expression, such as `order_id IS SET`, is evaluated against caller data. A value written as natural language only guides the model. It passes only when the model chose the delegate.

Use `IS SET` to guard a call on a present value. A test such as `order_id != ""` does not skip the call when the variable is unset. A `//` outside quotes starts a comment inside `WHEN`. Text after it is not part of the condition.

`ENABLED_WHEN` decides whether the target is available at all. It must be a deterministic expression over session data, such as `caller.tier == "gold"`. Natural language and conditions that read the current customer turn fail with `ENABLED_WHEN_SEMANTIC_REFERENCE`. An empty `ENABLED_WHEN` fails with `ENABLED_WHEN_EMPTY`. When the target is disabled, the model does not see the delegate tool, and a flow or `ON_START` call is refused.

### Safety checks

The platform refuses a delegate to the calling agent, a delegate that would create a loop (A calls B calls A), a chain deeper than 10, and a target that does not exist. Each one runs the failure policy.

A role matters. An agent with `BEHAVIOR` role `router` cannot declare `DELEGATE`. Validation fails with `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR`. Use role `orchestrator`, or no role.

The sub-agent cannot end with a terminal handoff (`RETURN: false`). Validation fails with `DELEGATE_CHILD_HANDOFF_UNSUPPORTED`.

### Failure policy

`ON_FAILURE` accepts three actions:

| Value | Effect |
| ----- | ------ |
| `CONTINUE` (default) | The caller receives the failure and carries on. |
| `RESPOND "text"` | The caller sends the text to the customer. Without text, the platform sends a standard failure line. |
| `ESCALATE` | The conversation is marked as escalated with the reason "Delegate failed". |

Any other action, such as `RETRY 2`, fails validation with `INVALID_DELEGATE_FAILURE_ACTION`. A misspelled key such as `ON_FAIL:` is ignored without a message, so the default `CONTINUE` applies. Check the spelling.

What the failure does next depends on the starter:

- **Model tool call.** The model gets the failure as the tool result and can answer or try something else. A timeout, an escalation, or a `RESPOND` text ends the model loop for that turn.
- **Flow step action.** A failed delegate ends the step and sends a failure response. `ON_FAILURE` still applies: `RESPOND` text becomes the response, and `ESCALATE` escalates.
- **`ON_START`.** A failed or refused delegate ends the startup turn. A target switched off by `ENABLED_WHEN` with an authored `ON_FAILURE: CONTINUE` carries on instead.

## Common variations

### Model-selected delegate in a reasoning agent

Do not write a flow. The agent model sees a `delegate_to_Refund_Checker` tool, built from `PURPOSE`, `WHEN`, and the `INPUT` keys. The model calls it when `WHEN` allows. Use this when the model should decide whether the call is needed. This example reuses `Refund_Checker` from above.

```abl
AGENT: Order_Advisor
GOAL: "Answer order questions. Call the refund checker before you discuss refunds."
PERSONA: "Concise order support agent"

MEMORY:
  session:
    - order_id
    - refund_eligible
    - refund_reason

GATHER:
  order_id:
    prompt: "What is your order number?"
    type: string
    required: false

DELEGATE:
  - TO: Refund_Checker
    WHEN: order_id IS SET
    PURPOSE: "Check whether the order qualifies for a refund"
    INPUT:
      order_id: order_id
    RETURNS:
      eligible: refund_eligible
      reason: refund_reason
    TIMEOUT: 20s
    ON_FAILURE: ESCALATE
```

The model can only call a target that the agent declares. A call to any other name is refused with an error that lists the declared targets, and `ON_FAILURE` does not run. A supervisor declares `DELEGATE:` the same way. See [Design a supervisor routing agent](/agent-platform/abl/how-to/design-supervisor-routing-agent).

### Delegate at session start

Write `DELEGATE:` inside `ON_START:` to run a sub-agent once before the first turn. The target needs a `DELEGATE:` entry. The entry `WHEN` is evaluated at start. If it is not met, the platform skips the delegate silently and the start sequence continues. `INPUT` sources must exist at start, so set them in `ON_START` first. A `DELEGATE` written inside an `ON_START` `DO:` list is not a supported startup action.

```abl
AGENT: Start_Desk
GOAL: "Greet the customer after a refund pre-check"
PERSONA: "Concise order support agent"

MEMORY:
  session:
    - order_id
    - refund_eligible
    - refund_reason

DELEGATE:
  - TO: Refund_Checker
    WHEN: order_id IS SET
    INPUT:
      order_id: order_id
    RETURNS:
      eligible: refund_eligible
      reason: refund_reason
    ON_FAILURE: CONTINUE

ON_START:
  SET: order_id = _metadata.order_id
  RESPOND: "One moment while I check your order."
  DELEGATE: Refund_Checker

FLOW:
  entry_point: greet

  greet:
    REASONING: false
    RESPOND: "How can I help?"
    THEN: COMPLETE
```

The example assumes your channel passes `order_id` in session metadata. When `ON_START` combines `DELEGATE` with a start-time handoff, compilation warns with `ON_START_DELEGATE_WITH_HANDOFF`. Keep one of them. See [Use an ON_START welcome](/agent-platform/abl/how-to/use-on-start-welcome).

### Map the reply text with ON_RETURN

A flow step `DO:` action can add `ON_RETURN` with a `MAP`. The source keys read the result envelope. This is useful for the reply text. Set `RETURN: true` so the flow continues after the call. Without `RETURN: true`, the step ends after the delegate.

```abl
AGENT: Map_Desk
GOAL: "Show the refund checker reply"
PERSONA: "Concise order support agent"

MEMORY:
  session:
    - order_id
    - refund_summary

DELEGATE:
  - TO: Refund_Checker
    INPUT:
      order_id: order_id

FLOW:
  entry_point: ask

  ask:
    REASONING: false
    GATHER:
      - order_id:
          prompt: "What is your order number?"
          type: string
          required: true
    THEN: run

  run:
    REASONING: false
    DO:
      - DELEGATE: Refund_Checker
        RETURN: true
        ON_RETURN:
          MAP:
            response: refund_summary
    RESPOND: "{{refund_summary}}"
    THEN: COMPLETE
```

`RETURN` and `ON_RETURN` are the only keys allowed under a `DELEGATE` action. Any other key fails validation. A flow step action can name a target that has no `DELEGATE:` entry. It then has no `INPUT`, no `RETURNS`, and the default `CONTINUE` failure policy. Declare the entry.

### Typed result without caller variables

Use the schema form of `RETURNS` when you want a typed result in the envelope and no new caller variables.

```abl
DELEGATE:
  - TO: Refund_Checker
    INPUT:
      order_id: order_id
    RETURNS:
      eligible: boolean
      reason: string
```

### Limit availability with ENABLED_WHEN

```abl
DELEGATE:
  - TO: Refund_Checker
    ENABLED_WHEN: caller.tier == "gold"
    INPUT:
      order_id: order_id
```

For a refusal, the entry `ON_FAILURE` runs. With no `DELEGATE:` entry, the customer gets a standard "option unavailable" line. See [Route with supervisor priority](/agent-platform/abl/how-to/route-with-supervisor-priority) for related availability rules.

### Share memory with the sub-agent

`MEMORY_GRANTS` lists session or persistent memory paths that the sub-agent can read. Each path must be a declared memory path or in the `execution_tree` namespace. An undeclared path fails validation with `INVALID_HANDOFF_MEMORY_GRANT`. Grant the minimum. Prefer `INPUT` for plain values.

### Remote sub-agents

`LOCATION: REMOTE`, `ENDPOINT`, and `PROTOCOL` parse and compile on a `DELEGATE:` entry. Validation checks the endpoint URL and the timeout. At run time, the delegate path resolves only agents in your project. A remote target fails with "Agent not found". Use a `HANDOFF` entry with `LOCATION: REMOTE` for an external agent. See [Design reusable agents and modules](/agent-platform/abl/how-to/design-reusable-agent-modules).

## Verification

- Validate the caller and every sub-agent together. Confirm no `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` or `UNKNOWN_DELEGATE_RETURN_FIELD` messages remain.
- Test success. Send an order number that your tool accepts. Confirm the caller replies with the eligibility and reason, and that the caller session holds `refund_eligible` and `refund_reason`.
- Test a failed call. Make the tool fail or time out. Confirm the customer sees your `ON_FAILURE` text, or that the escalation starts.
- Test a missing value. Start without `order_id`. Confirm the `WHEN` guard blocks the call.
- Inspect the trace. Expect `delegate_start`, then `agent_lifecycle` (before and after), `thread_return`, and `delegate_complete`. On success, `delegate_complete` shows `success: true` and the result. On failure it shows `success: false` and the error text.
- For `RETURNS`, find the `delegate_return_mapping` decision events. Each shows the field, `set` or `overwrite`, and a redacted value. A `blocked` outcome means the platform refused the value.
- Look for a `delegate_return_contract_unsatisfied` decision. It means no `RETURNS` key mapped.
- For a timeout, expect `delegate_complete` with the error "Delegate timeout" and a `delegate_cancellation_grace` decision.
- For routing context, see [Debug routing traces](/agent-platform/abl/how-to/debug-routing-traces).

## Production readiness checklist

- Every sub-agent exists in the same project and has its tools bound and permissioned.
- Every required sub-agent `GATHER` field has an `INPUT` mapping.
- Every `INPUT` source has a value before the call.
- Every `RETURNS` child field exists in the sub-agent, and every parent variable is used by the caller.
- `TIMEOUT` fits the slowest tool in the sub-agent. Do not rely on the 30 second default for slow services.
- `ON_FAILURE` is set on purpose. Use `RESPOND` for customer-facing paths and `ESCALATE` where a human must act.
- No sub-agent asks the customer questions. Use a returning handoff for those.
- Tests cover success, missing input, tool failure, timeout, and a disabled target.
- Monitoring watches `delegate_complete` events with `success: false`.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Writing `USE_RESULT` as instructions | Older examples show a sentence | Write a variable name, or omit it for `delegate_result`. |
| Expecting `RETRY` | Other tools retry | Use `CONTINUE`, `RESPOND`, or `ESCALATE`. Handle retries in the flow. |
| Writing `ON_FAIL:` | The key looks right | Write `ON_FAILURE:`. A misspelled key is ignored without a message. |
| Using `!= ""` as a guard | It reads like a presence test | Use `IS SET`. |
| Computing values in `INPUT` | It looks like an expression field | Compute with `SET` first, then map the variable. |
| Calling a sub-agent that asks the customer a question | The child uses `GATHER` | Map every required field, or use a returning handoff. |
| Using `RETURNS` names the sub-agent never sets | The names look plausible | Check the `UNKNOWN_DELEGATE_RETURN_FIELD` warning. |
| Expecting history to pass | `HANDOFF` has `HISTORY` | Send needed context in `INPUT`. |
| Relying on remote `DELEGATE` | The syntax compiles | Use a remote `HANDOFF` for external agents. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| `INVALID_DELEGATE_TARGET` | The target is not in the compilation | Validate all agents together. Check the name. |
| `SELF_DELEGATE_TARGET` | The agent names itself | Name a different agent. |
| `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` | A required sub-agent field has no `INPUT` | Map the field, or make it optional. |
| `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR` | The caller has `BEHAVIOR` role `router` | Use role `orchestrator`. |
| `INVALID_DELEGATE_FAILURE_ACTION` | `ON_FAILURE` uses an unsupported action | Use `CONTINUE`, `RESPOND`, or `ESCALATE`. |
| `INVALID_TIMEOUT_SYNTAX` | `TIMEOUT` is not a number with a unit | Write `20s`, `500ms`, or `1m`. |
| Parent variable stays empty | The child never set the field, or the value was empty | Check `delegate_return_mapping` events and the child flow. |
| "completed without required return values" | No `RETURNS` key mapped | Make the sub-agent set at least one mapped field. |
| "Delegate timeout" | The sub-agent exceeded the timeout | Raise `TIMEOUT`, or speed up the sub-agent tool. |
| "Delegate child requested user input" | The sub-agent asks the customer | Map the field in `INPUT`, or use a returning handoff. |
| "Delegate cycle detected" | A calls B, and B calls A | Remove one of the delegates. |
| Delegate never runs in a reasoning agent | `WHEN` is false, or `ENABLED_WHEN` disabled it | Check `constraint_check` and `availability_refused` events. |
| `ON_START` shows no delegate result | `WHEN` was not met at start, so the call was skipped | Set the `INPUT` and `WHEN` values in `ON_START` first. |

## Related HowTos

- [Use delegate instead of handoff](/agent-platform/abl/how-to/use-delegate-instead-of-handoff)
- [Use handoff instead of delegate](/agent-platform/abl/how-to/use-handoff-instead-of-delegate)
- [Run multiple agents in parallel with multi-intent fan-out](/agent-platform/abl/how-to/parallel-multi-intent-fan-out)
- [Resume after a child or human agent](/agent-platform/abl/how-to/resume-after-child-or-human-agent)
- [Switch the active agent](/agent-platform/abl/how-to/switch-active-agent)
- [Design a supervisor routing agent](/agent-platform/abl/how-to/design-supervisor-routing-agent)
- [Debug routing traces](/agent-platform/abl/how-to/debug-routing-traces)
- [Use an ON_START welcome](/agent-platform/abl/how-to/use-on-start-welcome)
