# Infer values from conversation context

Use this pattern when the customer already said a value earlier in the conversation, and a later step must reuse it instead of asking again.

## Concept

Inference reads what the customer already said. When a `FLOW` step starts to collect a field, the runtime checks the recent customer messages. If a message holds the value with enough confidence, the runtime fills the field. The step then skips the question.

You opt in per field with `infer: true`.

| Setting | Default | What it does |
| ------- | ------- | ------------ |
| `infer` | `false` | Turns on inference for the field. |
| `infer_confidence` | `0.8` | Lowest confidence the runtime accepts. |
| `infer_confirm` | `true` | Asks the customer to confirm the value before it is stored. See [Confirm inferred values before using them](/agent-platform/abl/how-to/confirm-inferred-values). |

Inference is narrow. Know these limits before you rely on it:

- It runs only in a `FLOW` step, once, when the step first starts to collect.
- It reads the last few customer messages. It does not read assistant messages, tool results, or memory.
- On a reasoning agent, `infer: true` only changes which fields the extractor considers. `infer_confidence` and `infer_confirm` have no effect there.

To capture a value the customer states during the current step, use [silent extraction](/agent-platform/abl/how-to/silently-extract-values).

## Minimal working example

A trip assistant asks what the customer needs. The customer often names the destination and party size in that first answer. The next step reuses them and writes them without a confirmation question.

`agents/trip-intake.agent.abl`

```abl
AGENT: Trip_Intake

GOAL: "Collect trip details and reuse what the customer already said."

PERSONA: "You are a concise travel assistant."

EXECUTION:
  conversation_history_window: 4

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
          infer_confirm: false
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
- `destination` and `party_size` are inferred from earlier customer messages. If the runtime cannot infer one, the step asks its prompt.

## How it works

1. The first step collects `purpose`. The customer answers "A trip to Lisbon for 3 people".
2. The next step starts. The runtime scans the recent customer messages, newest first. It skips messages with no letter or digit.
3. It runs the normal extraction on those messages for the active fields that set `infer: true` and have no value yet. It handles at most 3 fields in one pass, in declaration order.
4. It accepts a value when the value is not empty and its confidence meets `infer_confidence`. When the extractor gives no score, the runtime accepts the value only if it comes from a span of the customer's text.
5. It stops scanning older messages once every opted-in field has a value.
6. It validates the accepted values like any other extracted value.
7. The step asks its normal prompt for every field that is still empty.

Settings that change the behavior:

- `EXECUTION` `conversation_history_window` sets how many recent messages the runtime scans. The default is 2 and the maximum is 10. A value of 0 turns inference off.
- A project-level inference setting can change the default confidence and confirm values, when your deployment sets one. Set the properties on the field so the behavior does not depend on a default.

## Common variations

### Confirm before storing

Leave `infer_confirm` at its default, `true`. The runtime then asks "I'll assume ... Does that work?" before it stores the value. See [Confirm inferred values before using them](/agent-platform/abl/how-to/confirm-inferred-values).

### Infer on a reasoning agent

A top-level `GATHER` field can set `infer: true`. This makes an optional field eligible for extraction and lets a model-sourced value satisfy completion. The agent does not apply a confidence limit or ask for confirmation. Pair it with `prompt_mode: extract_only` for a value the agent should never ask for.

`agents/support-router-intake.agent.abl`

```abl
AGENT: Support_Router_Intake

GOAL: "Capture the customer's order number and urgency from what they say."

PERSONA: "You are a concise support assistant."

GATHER:
  order_number:
    prompt: "What is your order number?"
    type: string
    required: true
    satisfied_by: [user_input]

  urgency:
    prompt: "How urgent is this?"
    type: string
    required: false
    infer: true
    infer_confidence: 0.9
    prompt_mode: extract_only
    options: [low, normal, high]

COMPLETE:
  - WHEN: order_number IS SET
    RESPOND: "Order {{order_number}} logged with {{urgency}} urgency."
```

### Turn inference off for one agent

Set `conversation_history_window: 0` in `EXECUTION`. Fields with `infer: true` are then asked normally.

## Verification

1. Run the validator. Expect no errors and no warnings.
2. In the first turn, say "I need a trip to Lisbon for 3 people". Expect the agent not to ask for the destination or the party size.
3. Repeat and say only "I need a trip". Expect the agent to ask for both.
4. Say a vague first message, such as "somewhere warm". Expect the agent to ask for the destination, because the confidence is below the limit.
5. In the trace, open the `dsl_collect` event with the mode `prior_turn_inference`. `appliedFields` lists the inferred fields. `pendingFields` lists fields that wait for confirmation.

## Production readiness checklist

- Each inferred field has a `prompt`, because the step asks it when inference fails.
- Each field sets `infer_confirm` on purpose.
- Each `infer_confidence` is a number from 0 to 1.
- The window covers the turns where customers state the value.
- Tests cover a clear statement, a vague statement, and no statement.
- Inferred values that can cause a financial or legal effect use `infer_confirm: true`.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Writing `infer: True` or `infer: yes` | Other languages accept these. | Write lowercase `true`. Anything else reads as `false` without an error. |
| Writing `infer_confidence: high` or a value above 1 | The compiler does not check the range. | Use a number from 0 to 1. A value above 1 never accepts an inference. |
| Setting `infer_confirm` without `infer: true` | The properties look independent. | Add `infer: true`. Without it the setting is ignored. |
| Expecting inference from tool results or memory | The name suggests any context. | Inference reads customer messages only. Use `SET` or a tool result for other sources. |
| Expecting inference on a later turn | The runtime runs it once at step entry. | Use silent extraction for values stated during the step. |
| Expecting a confidence limit on a reasoning agent | The properties compile there. | Use a `FLOW` step when you need the limit and the confirmation. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The step asks for a value the customer already gave | The confidence is below the limit, the window is 0, or the message is older than the window. | `infer_confidence`, `conversation_history_window`, and the `dsl_collect` event. |
| The runtime accepts a wrong value | The limit is too low, or the earlier message was ambiguous. | Raise `infer_confidence` or use `infer_confirm: true`. |
| Nothing is inferred | The field is not active, already has a value, or the agent has no model client. | The field activation, the value, and the agent model setup. |
| Only some opted-in fields are inferred | The pass handles 3 fields at most. | The number of `infer: true` fields in the step. |
| A reasoning agent ignores the confidence limit | The limit applies in `FLOW` steps only. | The agent type. |

## Related HowTos

- [Confirm inferred values before using them](/agent-platform/abl/how-to/confirm-inferred-values)
- [Silently extract values without asking the user](/agent-platform/abl/how-to/silently-extract-values)
- [Collect information inside a FLOW step](/agent-platform/abl/how-to/collect-with-flow-gather)
- [Collect multiple fields across a natural conversation](/agent-platform/abl/how-to/collect-multiple-fields-naturally)
- [Progressively collect fields only when needed](/agent-platform/abl/how-to/progressively-collect-fields)
