# Show recovery prompts when validation fails

Use this pattern to control what a customer hears after a rejected value, and what the agent does when the customer keeps failing.

## Concept

A rejected value is never stored. The field stays missing and the agent asks again. Recovery has three layers. Set each one on purpose.

| Layer                  | You control                                      | Setting                            |
| ---------------------- | ------------------------------------------------ | ---------------------------------- |
| 1. The re-ask wording  | What the customer hears after one rejected value | `MESSAGES` keys, or `retry_prompt` |
| 2. The per-field limit | When one field has failed too often              | `max_retries` and `ON_ERROR`       |
| 3. The per-step limit  | When a step has asked too often                  | `MAX_ATTEMPTS` and `ON_EXHAUSTED`  |

Without layers 2 and 3, a customer who cannot supply a value is asked again on every turn. Nothing ends the loop unless you set a limit.

For the type reasons the runtime gives by default, see [Validate collected fields by type](/agent-platform/abl/how-to/validate-fields-by-type).

### Pick the layer

| Situation                                                                    | Use                                                                                                                                 |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| The default reason is fine but the wording must match your brand or language | `MESSAGES`                                                                                                                          |
| One field has a format rule, and the customer needs a hint                   | `validate:` plus `retry_prompt`                                                                                                     |
| One field must lead to a person or a fallback after repeated failure         | `max_retries` plus an `ON_ERROR` handler                                                                                            |
| The whole step must end after several failed turns, for any reason           | `MAX_ATTEMPTS` plus `ON_EXHAUSTED`                                                                                                  |
| The customer must be able to change a value already given                    | `CORRECTIONS: true` on the step. See [Collect information inside a FLOW step](/agent-platform/abl/how-to/collect-with-flow-gather). |

## Minimal working example

An agent collects a work email. After two failed attempts, it tells the customer and escalates.

`agents/work-email-verifier.agent.abl`

```yaml
AGENT: Work_Email_Verifier

GOAL: "Collect a valid work email and book a follow-up."

PERSONA: "You are a concise scheduling assistant."

ON_ERROR:
  validation_error:
    SUBTYPE: max_retries_exceeded
    RESPOND: "I could not read that email address, so I am connecting you to a person."
    THEN: ESCALATE with REASON: "Customer could not provide a valid work email"

ESCALATE:
  triggers:
    - WHEN: "The customer asks to speak to a person"
      REASON: "Customer asked for a person"
      PRIORITY: medium

FLOW:
  entry_point: collect_email
  steps:
    - collect_email
    - booked

  collect_email:
    REASONING: false
    GATHER:
      - work_email:
          type: string
          prompt: "What is your work email?"
          validate: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$"
          validation_process: REGEX
          retry_prompt: "Use an address like name@company.com."
          max_retries: 2
    THEN: booked

  booked:
    REASONING: false
    RESPOND: "Booked a follow-up. We will write to {{work_email}}."
    THEN: COMPLETE
```

Variable sources:

- `work_email` is a `GATHER` field. The customer supplies it.
- `booked` reads `work_email`.

Companion resources:

- The `ESCALATE` block routes to your project's default human-agent connection. Replace the trigger and routing with your own. See [When to escalate a conversation to a human](/agent-platform/abl/how-to/escalate-to-human).

What the customer experiences:

1. The first invalid answer gets "Use an address like name@company.com." This text replaces the whole re-ask.
2. The second invalid answer reaches `max_retries: 2`. The agent says the `RESPOND` line and escalates.
3. A valid answer at any point stores the email and moves to `booked`.

## How it works

### The re-ask wording

| Where the field is                                            | Source of the re-ask text                                                                                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| A `FLOW` step with `REASONING: false` and a `validate:` rule  | `retry_prompt` if set. It replaces the whole re-ask. Otherwise a reason from `MESSAGES` or the default, then the field prompt. |
| A `FLOW` step with `REASONING: false` and no `validate:` rule | A reason from `MESSAGES` or the default, then the field prompt. `retry_prompt` is not allowed here.                            |
| A top-level `GATHER`                                          | The model words the re-ask. It sees the failed fields, the reason, and the `retry_prompt` when one is set.                     |

`retry_prompt`, `max_retries`, and `validation_process` need a `validate:` rule. Without one, validation fails with `GATHER_VALIDATION_RULE_REQUIRED`.

### Reason text and language

The reason comes from the first source that has text for the customer's language:

1. The project message catalog.
2. The agent `MESSAGES` block.
3. The built-in English default.

A customer whose language is not English and has no catalog or `MESSAGES` text hears only the field prompt. The English reason is left out on purpose. Add text for every language you support.

An LLM validator reason is shown as written. An LLM validation that fails without a reason uses `gather_invalid_value`.

### The per-field limit

`max_retries` counts failed validations of one field. The count starts at 1 on the first failure.

| Event                             | Result                                                                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| A value fails a `validate:` rule  | The field's failure count goes up by 1.                                                                                   |
| The count reaches `max_retries`   | The runtime records the field as exceeded and writes a `validation_max_retries` trace event. It does this once per field. |
| In a `FLOW` step, the same moment | The runtime looks for an `ON_ERROR` handler for `validation_error` with subtype `max_retries_exceeded`.                   |
| The field gets a valid value      | The count, the retry prompt, and the exceeded mark for that field are cleared.                                            |

Only fields with a `validate:` rule are counted. A field with no `validate:` rule is never counted, even when its type check rejects a value. Use `MAX_ATTEMPTS` to limit those.

In a top-level `GATHER`, `max_retries` only records the count and writes the trace event. No handler runs. Use a `FLOW` step when the agent must act on the limit.

### What the handler can do

An `ON_ERROR` handler for `validation_error` takes these actions in a `FLOW` step.

| `THEN`       | Effect                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ESCALATE`   | Sends the `RESPOND` line, then escalates. With `with REASON: "..."`, the reason goes on the task. Without a reason, it is "Validation failed for `<field>`". |
| `COMPLETE`   | Sends the `RESPOND` line and ends the conversation.                                                                                                          |
| `RETRY_STEP` | Sends the `RESPOND` line, or "Please provide: `<field>`", and asks again.                                                                                    |
| `CONTINUE`   | Runs `SET` assignments. The step stays active and keeps asking.                                                                                              |

With no matching handler, the runtime applies the default handler and the step stays active. The customer keeps being asked. The failure count keeps rising, and the handler runs only once.

### The per-step limit

`MAX_ATTEMPTS` counts customer turns that leave a required field of the step missing. A rejected value leaves its field missing, so it counts. When the count reaches the limit, the flow moves to `ON_EXHAUSTED`. Both settings are needed. With only one, the runtime ignores both.

A `FLOW` step that asks the customer a question and has neither a `max_retries` handler nor `MAX_ATTEMPTS` has no exit.

## Common variations

### Move to a fallback step after several failed turns

Use `MAX_ATTEMPTS` when the failure is not tied to one field. The fallback can offer another channel or escalate.

`agents/reference-code-collector.agent.abl`

```yaml
AGENT: Reference_Code_Collector

GOAL: "Collect a reference code, or move to a manual check."

PERSONA: "You are a concise support assistant."

ESCALATE:
  triggers:
    - WHEN: "The customer asks to speak to a person"
      REASON: "Customer asked for a person"
      PRIORITY: medium

FLOW:
  entry_point: collect_reference
  steps:
    - collect_reference
    - manual_check
    - done

  collect_reference:
    REASONING: false
    MAX_ATTEMPTS: 3
    ON_EXHAUSTED: manual_check
    GATHER:
      - reference_code:
          type: string
          prompt: "What is your reference code?"
          validate: "^[A-Z]{3}-[0-9]{4}$"
          validation_process: REGEX
          retry_prompt: "A reference code looks like ABC-1234."
    THEN: done

  manual_check:
    REASONING: false
    RESPOND: "I could not verify the code. A specialist will check your case manually."
    THEN: ESCALATE with REASON: "Reference code could not be verified" PRIORITY medium

  done:
    REASONING: false
    RESPOND: "Reference {{reference_code}} recorded."
    THEN: COMPLETE
```

Variable sources:

- `reference_code` is a `GATHER` field. The customer supplies it.
- `done` reads `reference_code`.

### Override the reason text

Set the `MESSAGES` keys from [Validate collected fields by type](/agent-platform/abl/how-to/validate-fields-by-type). Use `gather_invalid_value` for rejections that no type key covers.

`agents/callback-messages.agent.abl`

```yaml
AGENT: Callback_Messages

GOAL: "Collect a callback number."

PERSONA: "You are a concise scheduling assistant."

MESSAGES:
  gather_invalid_phone: "Please share a full mobile number with the area code."
  gather_invalid_value: "That answer does not look right. Please try again."

FLOW:
  entry_point: ask
  steps:
    - ask
    - done

  ask:
    REASONING: false
    GATHER:
      - mobile: required
        type: phone
        prompt: "What mobile number should we call?"
    THEN: done

  done:
    REASONING: false
    RESPOND: "Calling {{mobile}}."
    THEN: COMPLETE
```

### Model-led recovery in a top-level GATHER

This is a section snippet. The model words the re-ask and sees the `retry_prompt` as a hint. After three failures the runtime writes the `validation_max_retries` event. It does not stop the agent.

```yaml
GATHER:
  account_number:
    prompt: "What is your account number?"
    type: string
    required: true
    validate: "^[0-9]{8}$"
    retry_prompt: "An account number is eight digits."
    max_retries: 3
```

To make the agent act on the limit, collect the field in a `FLOW` step.

### Sensitive fields

A `sensitive: true` field never quotes the rejected value in its reason, in the trace, or in logs. Write `retry_prompt` text that does not repeat the value either.

## Verification

Test in a session and open the trace.

| Agent                                            | Customer says                              | Expected result                                                               |
| ------------------------------------------------ | ------------------------------------------ | ----------------------------------------------------------------------------- |
| Work_Email_Verifier                              | "email bad"                                | The agent says "Use an address like name@company.com." The field stays unset. |
| Work_Email_Verifier                              | A second invalid answer                    | The agent says the `RESPOND` line and escalates.                              |
| Work_Email_Verifier                              | One invalid answer, then "ann@company.com" | `work_email` is stored and the flow moves to `booked`. No escalation.         |
| Reference_Code_Collector                         | Three answers that are not a code          | The flow moves to `manual_check` and escalates.                               |
| Callback_Messages                                | "12345"                                    | The `gather_invalid_phone` text, then the prompt.                             |
| Callback_Messages, French caller, no French text | "12345"                                    | Only the prompt. No English reason.                                           |

What to check in the trace:

- `validation_max_retries` shows the field, the failure count, and the limit.
- `agent_error_handled` shows the `validation_error` subtype, the action, and the field. It appears in `FLOW` steps only.
- `flow_step_attempts_exhausted` shows the step, the attempts, and the `ON_EXHAUSTED` target.
- The session values `_validation_retries` and `_validation_exceeded` show per-field counts and exceeded fields.

## Production readiness checklist

- Every step that asks for a validated field has an exit: a `max_retries` handler, `MAX_ATTEMPTS` with `ON_EXHAUSTED`, or both.
- The exit leads somewhere real. The `ESCALATE` block has routing to a live queue, or the fallback step offers another way forward.
- `retry_prompt` tells the customer what a good answer looks like. It does not say "invalid".
- `MESSAGES` has text for every supported language.
- Fields that hold personal data are `sensitive: true`.
- Tests cover one failure then success, repeated failure, a limit that is reached, and a customer who asks for a person.
- Monitoring alerts on `validation_max_retries` and `flow_step_attempts_exhausted`. A rising count points to a rule that is too strict.

## Common mistakes

| Mistake                                                     | Why it happens                        | How to avoid it                                                                            |
| ----------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------ |
| Setting `max_retries` and expecting the conversation to end | The count alone changes nothing.      | Add an `ON_ERROR` handler for `validation_error` with `SUBTYPE: max_retries_exceeded`.     |
| Using `max_retries` in a top-level `GATHER` to escalate     | The trace event looks like an action. | Use a `FLOW` step. In a top-level `GATHER` the event is a record only.                     |
| `max_retries` on a type-only field                          | The type check is a validation.       | `max_retries` needs a `validate:` rule. Use `MAX_ATTEMPTS` to limit type failures.         |
| `MAX_ATTEMPTS` without `ON_EXHAUSTED`                       | One setting looks enough.             | Set both. With one, the runtime ignores the limit.                                         |
| A handler with `THEN: CONTINUE` and no exit                 | Continue looks safe.                  | The step stays active and keeps asking. Use `ESCALATE`, `COMPLETE`, or add `MAX_ATTEMPTS`. |
| `retry_prompt` that repeats the rejected value              | The prompt is friendly.               | Do not echo input. A `sensitive` field's value must not appear.                            |

## Troubleshooting

| Symptom                                                   | Likely cause                                                                  | What to check                                                        |
| --------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| The agent never stops asking                              | No exit is set, or the handler uses `CONTINUE`                                | Add `MAX_ATTEMPTS` with `ON_EXHAUSTED`, or a handler that escalates. |
| `validation_max_retries` appears but nothing else happens | The field is in a top-level `GATHER`, or no `validation_error` handler exists | Move the field to a `FLOW` step. Add the handler.                    |
| The handler ran once and not again                        | By design. It runs the first time the count reaches the limit.                | Read `_validation_exceeded`.                                         |
| `max_retries` does not count a failed value               | The value failed the type check, not a `validate:` rule                       | Add a `validate:` rule, or use `MAX_ATTEMPTS`.                       |
| `ON_EXHAUSTED` never fires                                | `MAX_ATTEMPTS` is missing, or below 1                                         | Set both settings. `MAX_ATTEMPTS` must be 1 or more.                 |
| The re-ask shows no reason for a non-English caller       | No text for that language                                                     | Add the `MESSAGES` key or the catalog entry.                         |
| `GATHER_VALIDATION_RULE_REQUIRED`                         | `retry_prompt`, `max_retries`, or `validation_process` without `validate:`    | Add `validate:` or remove the setting.                               |
| Escalation shows "Validation failed for work_email"       | The handler has no `with REASON` text                                         | Add `with REASON: "..."` to the `THEN`.                              |

## Related HowTos

- [Validate collected fields by type](/agent-platform/abl/how-to/validate-fields-by-type)
- [Collect information inside a FLOW step](/agent-platform/abl/how-to/collect-with-flow-gather)
- [When to escalate a conversation to a human](/agent-platform/abl/how-to/escalate-to-human)
- [Collect sensitive or PII fields safely](/agent-platform/abl/how-to/collect-sensitive-pii-fields)
