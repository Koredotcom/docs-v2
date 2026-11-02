# When to use DELEGATE instead of HANDOFF

Use this pattern when the calling agent keeps the conversation and needs a result from another agent. Choose `DELEGATE` for a hidden, one-shot sub-task.

## Concept

A `DELEGATE` is an internal call. The caller waits. The target runs in its own scope and receives only the `INPUT` fields. The target never speaks to the customer. The caller writes the final answer.

When the target finishes, `RETURNS` copies target fields into caller variables. The caller stays the active agent for the whole call.

| Question | `DELEGATE` | `HANDOFF` |
| -------- | ---------- | --------- |
| Who speaks to the customer? | The caller only. | The target. |
| Who owns the next turn? | The caller, always. | The target, or the caller after a returnable handoff ends. |
| Can the target ask the customer a question? | No. | Yes. |
| What does the target receive? | The `INPUT` fields. | `PASS` fields, `SUMMARY`, and history. |
| What comes back? | The `RETURNS` fields. | With `RETURN: true`, the `ON_RETURN` `MAP` fields. |
| Which trace events show it? | `delegate_start`, `delegate_complete`. | `handoff`, `handoff_completed`. |

Choose `DELEGATE` when all of these are true:

- The caller keeps the conversation.
- The target needs no customer input beyond what the caller passes.
- The caller needs a value back, such as a score, a status, or a flag.
- The customer does not need to see the target.

Choose `HANDOFF` when the target must talk to the customer. See [When to use HANDOFF instead of DELEGATE](/agent-platform/abl/how-to/use-handoff-instead-of-delegate).

### Rules the platform enforces

| Rule | What happens when you break it |
| ---- | ------------------------------ |
| Only an `orchestrator` declares `DELEGATE`. | An explicit `router` or `assistant` role fails with `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR`. |
| Map every required `GATHER` field of the target in `INPUT`. | The compile fails with `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED`. |
| The target has no permanent `HANDOFF`. | The compile fails with `DELEGATE_CHILD_HANDOFF_UNSUPPORTED`. A returning `HANDOFF` is allowed. |
| The target does not wait for the customer. | At run time the delegate fails. The error says to use `HANDOFF`. |
| `ON_FAILURE` is `continue`, `escalate`, or `respond`. | `retry` fails with `INVALID_DELEGATE_FAILURE_ACTION`. |
| `TIMEOUT` is milliseconds or ends in `ms`, `s`, or `m`. | The compile fails with `INVALID_TIMEOUT_SYNTAX`. |
| An agent cannot delegate to itself or to an agent already in the call chain. | The runtime blocks the call. |
| The call chain holds at most 10 agents. | The runtime blocks the call. |

### How a delegate starts

On a normal turn, the model calls the `delegate_to_<Agent>` tool. `PURPOSE` and `WHEN` describe the tool to the model.

An expression in `WHEN` is a hard guard. The runtime blocks the call when it is false. A quoted plain-language `WHEN` guides the model and does not block.

After a returned child, the runtime runs each authored delegate whose `WHEN` is true. Each entry runs once.

A delegate called from a flow step is out of scope here. See [Call a sub-agent and map its result back](/agent-platform/abl/how-to/delegate-and-map-result).

## Minimal working example

A loan agent collects the applicant ID. It delegates a credit lookup and tells the customer the band. The customer never sees the lookup agent.

The lookup tool needs an execution binding in your project, such as an HTTP endpoint. That binding is a project-local assumption.

`agents/loan-application-agent.agent.abl`

```abl
AGENT: Loan_Application_Agent
GOAL: "Collect the applicant ID and tell the applicant which credit band applies"

BEHAVIOR:
  role: orchestrator

GATHER:
  applicant_id:
    PROMPT: "What is your applicant ID?"
    TYPE: string
    REQUIRED: true

MEMORY:
  session:
    - credit_band
      TYPE: string
      DESCRIPTION: "Credit band returned by Credit_Check_Agent."

DELEGATE:
  - AGENT: Credit_Check_Agent
    WHEN: applicant_id IS SET AND credit_band IS NOT SET
    PURPOSE: "Look up the applicant credit band"
    INPUT:
      applicant_id: applicant_id
    RETURNS:
      credit_band: credit_band
    USE_RESULT: credit_result
    TIMEOUT: "10s"
    ON_FAILURE: RESPOND "I cannot check your credit band right now. Please try again later."

COMPLETE:
  - WHEN: credit_band IS SET
    RESPOND: "Your credit band is {{credit_band}}."
```

`agents/credit-check-agent.agent.abl`

```abl
AGENT: Credit_Check_Agent
GOAL: "Return the credit band for one applicant. This agent never talks to the customer."

TOOLS:
  get_credit_band(applicant_id: string) -> {band: string}
    description: "Return the credit band for an applicant ID."
    side_effects: false
    confirm: never
    params:
      applicant_id:
        description: "Applicant identifier to look up."

GATHER:
  applicant_id:
    PROMPT: "What is the applicant ID?"
    TYPE: string
    REQUIRED: true

MEMORY:
  session:
    - credit_band
      TYPE: string
      DESCRIPTION: "Band returned by the credit lookup tool."

FLOW:
  entry_point: lookup
  steps:
    - lookup

lookup:
  REASONING: false
  CALL: get_credit_band
    WITH:
      applicant_id: applicant_id
    AS: credit
  SET: credit_band = credit.band
  THEN: COMPLETE
```

## How it works

1. The customer gives the applicant ID. The `WHEN` expression becomes true.
2. The runtime starts `Credit_Check_Agent` in its own session scope. `INPUT` supplies `applicant_id`.
3. The child runs its flow, calls the tool, and sets `credit_band`. The child output stays hidden.
4. `RETURNS` copies `credit_band` from the child into the parent variable `credit_band`.
5. `USE_RESULT: credit_result` stores the full result under `credit_result`. If you omit `USE_RESULT`, the platform uses `delegate_result`. Text with spaces is not stored anywhere.
6. The parent `COMPLETE` rule fires and the parent answers.

If the child returns no mapped value, the delegate fails. `ON_FAILURE` then decides what happens.

| `ON_FAILURE` value | Behavior |
| ------------------ | -------- |
| `continue` | The caller continues without a result. This is the default. |
| `respond` | The caller sends the message in `RESPOND "<message>"`. Without a message, the platform sends a default line. |
| `escalate` | The session is marked as escalated. |

A `RETURNS` target that reads as a type name, such as `string` or `number`, is treated as a result schema and not as a variable. Name caller variables in lowercase.

## Common variations

### Delegate a hidden check, then hand off on the result

Use this when a silent check decides who owns the next step. The orchestrator screens the beneficiary. A clear result goes to the payment agent. A match goes to the compliance agent. Both routes are permanent, so the specialists talk to the customer.

`agents/transfer-desk-agent.agent.abl`

```abl
AGENT: Transfer_Desk_Agent
GOAL: "Collect transfer details, screen the beneficiary, then pass the customer to the owner of the next step"

BEHAVIOR:
  role: orchestrator

GATHER:
  beneficiary_name:
    PROMPT: "Who is the beneficiary?"
    TYPE: string
    REQUIRED: true
  beneficiary_country:
    PROMPT: "Which country is the beneficiary in?"
    TYPE: string
    REQUIRED: true

MEMORY:
  session:
    - screening_clear
      TYPE: boolean
      DESCRIPTION: "True when the screening check finds no match."

DELEGATE:
  - AGENT: Sanctions_Screening_Agent
    WHEN: beneficiary_name IS SET AND beneficiary_country IS SET AND screening_clear IS NOT SET
    PURPOSE: "Screen the beneficiary against the sanctions list"
    INPUT:
      name: beneficiary_name
      country: beneficiary_country
    RETURNS:
      cleared: screening_clear
    USE_RESULT: screening_result
    TIMEOUT: "15s"
    ON_FAILURE: RESPOND "I cannot complete the screening right now. Please try again later."

HANDOFF:
  - TO: Payment_Agent
    WHEN: screening_clear == true
    PASS: [beneficiary_name, beneficiary_country]
    SUMMARY: "Screening passed. Complete the payment details."
    RETURN: false

  - TO: Compliance_Review_Agent
    WHEN: screening_clear == false
    PASS: [beneficiary_name]
    SUMMARY: "Screening found a match. Explain the review process."
    RETURN: false
```

`agents/sanctions-screening-agent.agent.abl`

```abl
AGENT: Sanctions_Screening_Agent
GOAL: "Return a clear or not clear result for one beneficiary. This agent never talks to the customer."

TOOLS:
  screen_beneficiary(name: string, country: string) -> {clear: boolean}
    description: "Check a beneficiary against the sanctions list."
    side_effects: false
    confirm: never
    params:
      name:
        description: "Beneficiary name."
      country:
        description: "Beneficiary country."

GATHER:
  name:
    PROMPT: "Beneficiary name?"
    TYPE: string
    REQUIRED: true
  country:
    PROMPT: "Beneficiary country?"
    TYPE: string
    REQUIRED: true

MEMORY:
  session:
    - cleared
      TYPE: boolean
      DESCRIPTION: "Screening result."

FLOW:
  entry_point: screen
  steps:
    - screen

screen:
  REASONING: false
  CALL: screen_beneficiary
    WITH:
      name: name
      country: country
    AS: result
  SET: cleared = result.clear
  THEN: COMPLETE
```

`agents/payment-agent.agent.abl`

```abl
AGENT: Payment_Agent
GOAL: "Collect the amount and complete the transfer. Beneficiary details arrive from the transfer desk."

GATHER:
  beneficiary_name:
    PROMPT: "Who is the beneficiary?"
    TYPE: string
    REQUIRED: true
  beneficiary_country:
    PROMPT: "Which country is the beneficiary in?"
    TYPE: string
    REQUIRED: true
  amount:
    PROMPT: "How much do you want to send to {{beneficiary_name}} in {{beneficiary_country}}?"
    TYPE: number
    REQUIRED: true

COMPLETE:
  - WHEN: amount IS SET
    RESPOND: "I have your transfer request for {{amount}} to {{beneficiary_name}} in {{beneficiary_country}}."
```

`agents/compliance-review-agent.agent.abl`

```abl
AGENT: Compliance_Review_Agent
GOAL: "Explain that the transfer needs a compliance review and collect a contact email. Beneficiary details arrive from the transfer desk."

GATHER:
  beneficiary_name:
    PROMPT: "Who is the beneficiary?"
    TYPE: string
    REQUIRED: true
  contact_email:
    PROMPT: "Which email address should the compliance team use to contact you about {{beneficiary_name}}?"
    TYPE: string
    REQUIRED: true

COMPLETE:
  - WHEN: contact_email IS SET
    RESPOND: "The compliance team will contact you at {{contact_email}} about the transfer to {{beneficiary_name}}."
```

### Run several delegates at once

A single `DELEGATE` entry runs one sub-agent to completion. When a customer sends several independent requests in one message, multi-intent fan-out can run several delegates at the same time. See [Run multiple agents in parallel with multi-intent fan-out](/agent-platform/abl/how-to/parallel-multi-intent-fan-out).

### Withhold a delegate for some sessions

`ENABLED_WHEN` also applies to `DELEGATE` entries. It decides once per session whether the route exists.

## Verification

1. Give the applicant ID. Expect a `delegate_start` event for `Credit_Check_Agent`, then a `delegate_complete` event with `success: true`.
2. Expect the customer to see one answer from `Loan_Application_Agent`. The child output does not reach the customer.
3. Check the parent session values. Expect `credit_band` and `credit_result` to hold values.
4. Make the lookup tool fail. Expect `delegate_complete` with `success: false` and the `ON_FAILURE` message.
5. Expect no `handoff` event for the delegate. The active agent does not change.
6. For the transfer example, expect a `handoff` to `Payment_Agent` after `screening_clear` becomes true.

## Production readiness checklist

- The child declares every field that `RETURNS` names. The compiler warns with `UNKNOWN_DELEGATE_RETURN_FIELD` otherwise.
- The child has no required `GATHER` field that `INPUT` leaves unmapped.
- The lookup tool has an execution binding, a timeout, and no side effects.
- Each delegate sets `TIMEOUT` and `ON_FAILURE` on purpose.
- The caller covers the failure path. A `continue` failure leaves the result variable empty.
- Tests cover success, tool failure, timeout, and a missing input value.
- Trace checks confirm `delegate_complete` events with `success: true`.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Delegating to an agent that asks the customer a question | A delegate looks like a handoff that returns. | Use `HANDOFF` with `RETURN: true`. |
| Writing `ON_FAIL` or `FAILURE_MESSAGE` | Other constructs use similar names. | Write `ON_FAILURE: RESPOND "<message>"`. The parser ignores `ON_FAIL` and `FAILURE_MESSAGE`. |
| Writing `ON_FAILURE: retry` | Retry looks like a natural option. | Use `continue`, `respond`, or `escalate`. |
| Expecting free text in `USE_RESULT` to guide the model | The name suggests instructions. | Write a variable name. Text with spaces has no runtime effect. |
| Checking a result with `!= ""` | The guard looks safe. | Use `IS SET` and `IS NOT SET`. The `!= ""` check is true when the value is missing. |
| Putting `//` in a quoted `WHEN` expecting a comment | Comments work in code. | A `//` outside quotes is a comment. Inside quotes it is text. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The compile fails with `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR` | The agent role is `router` or `assistant`. | Set `role: orchestrator`. |
| The compile fails with `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` | The child has a required `GATHER` field with no `INPUT`. | Map the field in `INPUT` or use `HANDOFF`. |
| The compile fails with `DELEGATE_CHILD_HANDOFF_UNSUPPORTED` | The child has a permanent `HANDOFF`. | Move the transfer to the caller. |
| The delegate never runs | The `WHEN` expression is false, or the model did not call the tool. | The variables in `WHEN` and the `delegation` decision events. |
| The delegate fails after it starts | The child asked for input, returned no mapped value, or timed out. | The `delegate_complete` error and the child `RETURNS` fields. |
| The parent variable stays empty | `RETURNS` names a field the child never sets. | The `UNKNOWN_DELEGATE_RETURN_FIELD` warning and the child `SET` or tool output. |
| The call is blocked with a cycle message | The target is already in the call chain. | The delegate chain in the trace. |

## Related HowTos

- [When to use HANDOFF instead of DELEGATE](/agent-platform/abl/how-to/use-handoff-instead-of-delegate)
- [Call a sub-agent and map its result back](/agent-platform/abl/how-to/delegate-and-map-result)
- [Run multiple agents in parallel with multi-intent fan-out](/agent-platform/abl/how-to/parallel-multi-intent-fan-out)
- [Transfer control to another agent and return later](/agent-platform/abl/how-to/returnable-agent-handoff)
- [Switch the active agent during a conversation](/agent-platform/abl/how-to/switch-active-agent)
- [Escalate a conversation to a human](/agent-platform/abl/how-to/escalate-to-human)
- [Handle multiple intents](/agent-platform/abl/how-to/handle-multiple-intents)
- [Debug routing traces](/agent-platform/abl/how-to/debug-routing-traces)
