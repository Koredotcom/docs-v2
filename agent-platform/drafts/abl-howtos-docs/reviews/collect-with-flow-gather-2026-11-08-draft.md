# Collect information inside a FLOW step

Use this pattern when you need a fixed order of questions: collect a set of fields in one step, then move on to the next step.

## Concept

A `GATHER` inside a `FLOW` step belongs to that step. The step stays active until its required fields are filled. Then the flow moves to the next step with `THEN`.

This differs from a top-level `GATHER` in four ways:

| | Top-level `GATHER` | `GATHER` in a `FLOW` step |
| - | ------------------ | ------------------------- |
| Who decides what to ask | The model | The step. It asks for all missing required fields together. |
| Field syntax | Named blocks | A list of fields, a map, or an inline list |
| Order | Declaration order in the prompt | The step order |
| Corrections and attempt limits | Not available | `CORRECTIONS`, `MAX_ATTEMPTS`, and `ON_EXHAUSTED` |

Set `REASONING: false` on a collection step for deterministic behavior. Collect in one step and read the answer in the next step. This keeps the branching in `ON_INPUT` separate from the collection.

For the model-led alternative, see [Collect information with global GATHER](/agent-platform/abl/how-to/collect-with-global-gather).

## Minimal working example

An appointment agent collects contact details in one step and scheduling details in the next. The phone number and notes are optional.

`agents/appointment-booker.agent.abl`

```abl
AGENT: Appointment_Booker
GOAL: "Book a service appointment by collecting contact and scheduling details."

PERSONA: |
  Friendly scheduling assistant. Keep questions short.

FLOW:
  entry_point: collect_contact

  steps:
    - collect_contact
    - collect_schedule
    - confirm

  collect_contact:
    REASONING: false
    GATHER:
      - full_name: required
        prompt: "What is your full name?"
      - email: required
        type: email
        prompt: "What email address should we send the confirmation to?"
      - phone: optional
        type: phone
        prompt: "Is there a phone number we can reach you on?"
    THEN: collect_schedule

  collect_schedule:
    REASONING: false
    GATHER:
      - service_type: required
        type: enum
        options: [repair, installation, inspection]
        prompt: "Which service do you need: repair, installation, or inspection?"
      - preferred_date: required
        type: date
        prompt: "Which date works for you?"
        semantics:
          temporal: future
      - notes: optional
        prompt: "Any notes for the technician?"
    THEN: confirm

  confirm:
    REASONING: false
    RESPOND: "Thanks {{full_name}}. Booked {{service_type}} for {{preferred_date}}. A confirmation goes to {{email}}."
    THEN: COMPLETE
```

Variable sources:

- Every variable is a `GATHER` field. The customer supplies each one.
- The `confirm` step reads `full_name`, `service_type`, `preferred_date`, and `email`. The optional fields are not read there.

## How it works

1. The flow enters `collect_contact`. The step asks for the missing required fields. It joins the prompts, one per line, in declaration order.
2. The turn ends. The step waits for input.
3. The customer replies. The runtime extracts values for all the step's fields, required and optional, in one pass. A customer can give several values in one message.
4. The runtime validates the values and stores the good ones.
5. If required fields are still missing, the step asks again. The repeat uses the field's `retry_prompt`, then its `prompt`, then a fixed message.
6. When all required fields have values, the step falls through to its `THEN`.

Optional fields are never asked. The step checks only required fields. A step with only optional fields is complete on entry and passes straight through.

### Field forms

Inside a step, write each field in one of these forms. The keys are case-insensitive.

| Form | Example |
| ---- | ------- |
| List item with `required` or `optional` | `- email: required` followed by indented properties |
| List item with a default | `- notes: default=none` sets `required: false` and a default. The compiler warns `W822`. |
| Bare list item | `- email`. The field is required. |
| Map form | `email:` followed by indented properties |
| Inline | `GATHER: a, b` or `GATHER: [a, b]` |

### Inheriting a top-level field

A step field inherits the properties of a top-level `GATHER` field of the same name. The step overrides only the properties it sets.

A step field that sets nothing but `required` or `optional`, such as `- notes: optional`, does not override `required`. The inherited value stays. Add another property, such as a `prompt`, to override it.

## Common variations

### Inherit, correct, and confirm

Declare the fields once at the top level. Reference them in the step. Turn on `CORRECTIONS` so the customer can change a value that was already collected. Confirm in the next step with `ON_INPUT`.

`agents/card-replacement.agent.abl`

```abl
AGENT: Card_Replacement
GOAL: "Replace a lost or damaged card after the customer confirms the details."

PERSONA: |
  Calm banking assistant. Confirm details before acting.

GATHER:
  card_last4:
    prompt: "What are the last four digits of the card?"
    type: string
    validate: "^[0-9]{4}$"
    retry_prompt: "Enter exactly four digits."
    max_retries: 3
  replacement_reason:
    prompt: "Was the card lost, stolen, or damaged?"
    type: enum
    options: [lost, stolen, damaged]
  delivery_address:
    prompt: "What address should we ship the new card to?"
    type: string

FLOW:
  entry_point: collect_card

  steps:
    - collect_card
    - confirm
    - submit

  collect_card:
    REASONING: false
    GATHER:
      - card_last4: required
      - replacement_reason: required
      - delivery_address: required
    CORRECTIONS: true
    THEN: confirm

  confirm:
    REASONING: false
    RESPOND: "Replace card ending {{card_last4}} ({{replacement_reason}}) and ship to {{delivery_address}}. Say yes to confirm or no to change."
    ON_INPUT:
      - IF: input.contains("yes")
        THEN: submit
      - ELSE:
        RESPOND: "Okay, let us update the details."
        THEN: collect_card

  submit:
    REASONING: false
    RESPOND: "Your replacement card is on its way."
    THEN: COMPLETE
```

### Shape the step prompt

Set `PRESENT` for an introduction. Set `PROMPT` for the question text. Use `{{_missingList}}` or `{{_missing}}` for the names of the missing fields. See [Collect multiple fields across a natural conversation](/agent-platform/abl/how-to/collect-multiple-fields-naturally).

### Limit attempts

Set `MAX_ATTEMPTS` and `ON_EXHAUSTED` on the step. After that many failed collection attempts, the flow moves to the step you name. Use it to hand off to a person.

### Per-field retry limit

`max_retries` counts failed validations for one field. When it runs out, the flow follows `ON_ERROR` for `validation_error` with the subtype `max_retries_exceeded`.

## Verification

1. Run the validator. Expect no errors and no warnings.
2. Start the conversation. Expect the first step to ask for the name and the email together, and not for the phone number.
3. Reply with the name and the email in one message. Expect the flow to move to the schedule step.
4. Reply with an invalid email. Expect the step to ask again.
5. In the card example, say "no" at the confirmation. Expect the flow to return to `collect_card`.
6. In the trace, open the `dsl_prompt` events with the mode `gather`. `missingFields` lists what the step asked for.
7. Open the `dsl_collect` events with the mode `gather`. They list the extracted fields.

## Production readiness checklist

- Each collection step sets `REASONING: false`.
- Each step that must ask for a field marks it required.
- Each field has a `prompt`.
- Each step has a `THEN`, so the flow does not stall after collection.
- Collection and `ON_INPUT` branching are in separate steps.
- A step that can loop has `MAX_ATTEMPTS` and `ON_EXHAUSTED`.
- Tests cover all values in one message, one value at a time, a bad value, and a correction.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Expecting an optional field to be asked | The step lists it. | Make the field required, or ask for it in a separate prompt. Optional fields are only captured when volunteered. |
| Writing `- notes: optional` and expecting to override a required top-level field | The shorthand looks like an override. | Add another property, such as `prompt`. |
| Writing `- notes: optional # comment` | Comments are common. | Put comments on their own line. The comment makes the shorthand unreadable, and the field stays required. |
| Putting `ON_INPUT` in the same step as `GATHER` | It looks efficient. | Move branching to the next step. The compiler warns `FLOW_ON_INPUT_GATHER_ORDER_AMBIGUITY`. |
| Using `default=value` and expecting a clean compile | The shorthand sets `required: false`. | It always warns `W822`. Use a top-level `default` instead, or accept the warning. |
| Writing a multi-line `validate` block | YAML blocks look natural. | Write `validate` on one line. The block form is ignored with warning `W174`. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| A step passes without asking | All its fields are optional. | The field `required` values. |
| An optional field stays empty | The customer never volunteered it. | The extraction results in `dsl_collect`. |
| The step asks "Please provide the required information to continue." | The step has no prompt for the missing fields. | The field `prompt` values. |
| A field you marked optional is still required | It inherited `required` from a top-level field. | The top-level `GATHER` and the step field properties. |
| The flow loops forever | The customer cannot satisfy a field, and no limit is set. | `MAX_ATTEMPTS` and `ON_EXHAUSTED`. |
| The compile warns `FLOW_PROMPTLESS_ON_INPUT_UNMATCHED_TRAP` | A step with `ON_INPUT` has no prompt. | Add a prompt, or move the branching to a step that asks. |

## Related HowTos

- [Collect information with global GATHER](/agent-platform/abl/how-to/collect-with-global-gather)
- [Collect required and optional fields from users](/agent-platform/abl/how-to/collect-required-and-optional-fields)
- [Collect multiple fields across a natural conversation](/agent-platform/abl/how-to/collect-multiple-fields-naturally)
- [Progressively collect fields only when needed](/agent-platform/abl/how-to/progressively-collect-fields)
- [Confirm inferred values before using them](/agent-platform/abl/how-to/confirm-inferred-values)
- [Combine reasoning steps with FLOW steps](/agent-platform/abl/how-to/combine-reasoning-and-flow-steps)
