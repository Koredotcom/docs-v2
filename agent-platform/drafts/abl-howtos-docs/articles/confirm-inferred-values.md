# Confirm inferred values before using them

Use this pattern when the agent infers a value from earlier customer messages and the customer must approve it before the agent acts on it.

## Concept

When a `FLOW` step infers a value, it can store the value at once or hold it until the customer agrees. The property `infer_confirm` decides. Its default is `true`, so the platform asks unless you turn it off.

| `infer_confirm` | What happens to an inferred value |
| --------------- | --------------------------------- |
| `true` (default) | The runtime holds the value and asks the customer to confirm. Conditions and `COMPLETE` do not see the value until the customer agrees. |
| `false` | The runtime stores the value at once. There is no question. |

Choose `true` for a value that triggers a payment, a booking, or a change to a record. Choose `false` for a low-risk value that the customer clearly stated. See [Infer values from conversation context](/agent-platform/abl/how-to/infer-values-from-context) for how inference finds the value.

Confirmation exists only in `FLOW` steps. A reasoning agent applies no confirmation.

## Minimal working example

A trip assistant infers the destination and party size from the first answer. The destination needs confirmation. The party size is stored at once.

```yaml
AGENT: Trip_Intake

GOAL: "Collect trip details and reuse what the customer already said."

PERSONA: "You are a concise travel assistant."

FLOW:
  entry_point: ask_purpose
  steps:
    - ask_purpose
    - collect_trip
    - done

  ask_purpose:
    REASONING: false
    GATHER:
      - purpose:
          type: string
          required: true
          prompt: "What can I help you with today?"
    THEN: collect_trip

  collect_trip:
    REASONING: false
    GATHER:
      - destination:
          type: string
          required: true
          infer: true
          infer_confirm: true
          infer_confidence: 0.85
          prompt: "Where are you travelling to?"
      - party_size:
          type: number
          required: true
          infer: true
          infer_confirm: false
          prompt: "How many people are travelling?"
    THEN: done

  done:
    REASONING: false
    RESPOND: "Trip to {{destination}} for {{party_size}} is ready for {{purpose}}."
    THEN: COMPLETE
```

Variable sources:

- `purpose` is asked in the first step.
- `destination` and `party_size` are inferred from earlier customer messages. The destination waits for confirmation. The party size does not.

## How it works

1. The `collect_trip` step starts and infers values from earlier messages.
2. The runtime writes the `party_size` value directly, because `infer_confirm` is `false`.
3. The runtime holds the `destination` value as pending. The pending value is not visible to `COMPLETE`, conditions, or later steps.
4. The step asks one confirmation question for all pending values, for example: "I'll assume destination: Lisbon. Does that work?"
5. The customer answers. The runtime reads the answer as one of three outcomes.

| Customer answer | Result |
| --------------- | ------ |
| Accepts | The runtime stores every pending value and goes on. |
| Declines | The runtime discards the pending values and asks the normal prompts. |
| Unclear | The runtime repeats the confirmation prompt and keeps the pending values. |

Rules that apply:

- The confirmation covers all pending fields at once. The customer cannot accept one and decline another.
- A typed correction after a decline, such as "No, Rome", is read as the answer to the same field. A bare "no" asks the normal prompt.
- The confirmation also accepts a button action whose ID starts with `inference_confirmation`, such as `inference_confirmation.accept` and `inference_confirmation.decline`.
- A field marked `sensitive` shows its value through the sensitive display rules in the confirmation text.
- The confirmation text is fixed. You cannot change its wording in ABL.
- An accepted value is written as a system write, not as customer input. A field with `satisfied_by: [user_input]` rejects it. The rejection is silent for the customer, and `inference_accepted` lists no fields. Add `system` to `satisfied_by`, or leave `satisfied_by` off a field that uses inference.

## Common variations

### Store without asking

Set `infer_confirm: false` on every inferred field when the customer clearly stated the values. See [Infer values from conversation context](/agent-platform/abl/how-to/infer-values-from-context).

### Mix confirmed and direct values

Use both settings in one step, as the example does. The runtime stores the direct values first. It then asks one question for the pending ones.

### Add your own confirmation step

Use `infer_confirm: false` and add a `FLOW` step that restates the value and asks for a yes or no. Choose this when you need custom wording or a per-field decision.

## Verification

1. Run the validator. Expect no errors and no warnings.
2. In the first turn, say "A trip to Lisbon for 3 people". Expect the agent to ask "I'll assume destination: Lisbon. Does that work?" and not ask for the party size.
3. Answer "yes". Expect the final reply to include the destination.
4. Repeat and answer "no, Rome". Expect the agent to use Rome.
5. Repeat and answer "no". Expect the agent to ask "Where are you travelling to?".
6. In the trace, open the `inference_confirmation_interaction` events. `decision` shows `accept`, `decline`, `defer`, or `unresolved`.
7. Check the `inference_accepted` and `inference_rejected` events for the field names.

## Production readiness checklist

- Each inferred field that has a business effect keeps `infer_confirm: true`.
- Each field sets `infer_confirm` on purpose, not by default.
- The step has a normal `prompt` for each field, because a decline returns to it.
- Tests cover accept, decline, decline with a correction, and an unclear answer.
- Buttons for the confirmation use the action IDs `inference_confirmation.accept` and `inference_confirmation.decline`, if your channel shows buttons.
- Sensitive fields follow [Collect sensitive or PII fields safely](/agent-platform/abl/how-to/collect-sensitive-pii-fields).

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Expecting silent reuse by default | The default is to confirm. | Write `infer_confirm: false` to skip the question. |
| Writing `infer_confirm: yes` or `"false"` | Other languages accept these. | Write lowercase `true` or `false`. Anything else reads as `false`. |
| Expecting per-field answers | The prompt lists all pending fields. | Split the fields into separate steps. |
| Reading a pending value in a condition | The value is held until accepted. | Read the field after the customer accepts. |
| Expecting confirmation on a reasoning agent | The properties compile there. | Use a `FLOW` step. |
| Combining `infer_confirm: true` with `satisfied_by: [user_input]` | Both limit the source of a value. | Include `system` in `satisfied_by`, or drop it. The accepted value is otherwise rejected. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The agent never asks to confirm | `infer_confirm` is `false`, or nothing was inferred. | The property value and the `prior_turn_inference` event. |
| The agent asks again after "yes" | The reply was unclear to the runtime. | `inference_confirmation_interaction` and the answer wording. |
| A bare "no" repeats the question | The runtime found no new value. | Ask the customer for the value, or add a prompt with a correction. |
| The value is missing in a condition | The confirmation is still pending. | The `pendingFields` list in the trace. |
| A button does nothing | The action ID does not start with `inference_confirmation`. | The action ID. |
| The customer accepts and the field stays empty | `satisfied_by` excludes `system`. | The field `satisfied_by` and the `data_mutation` event with the reason `provenance_class_not_allowed`. |

{{related}}

- [Infer values from conversation context](/agent-platform/abl/how-to/infer-values-from-context)
- [Silently extract values without asking the user](/agent-platform/abl/how-to/silently-extract-values)
- [Collect information inside a FLOW step](/agent-platform/abl/how-to/collect-with-flow-gather)
- [Collect sensitive or PII fields safely](/agent-platform/abl/how-to/collect-sensitive-pii-fields)
- [Collect required and optional fields from users](/agent-platform/abl/how-to/collect-required-and-optional-fields)
