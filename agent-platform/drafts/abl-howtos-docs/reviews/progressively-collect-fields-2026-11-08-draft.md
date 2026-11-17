# Progressively collect fields only when needed

Use this pattern when a field makes sense only after another answer, so the customer does not see irrelevant questions.

## Concept

By default every required `GATHER` field is active from the start. The agent asks for all of them. A progressive field stays inactive until a rule says it applies. An inactive field is not asked and does not block completion.

You control activation with the `activation` property.

| `activation` value | The field is active when |
| ------------------ | ------------------------ |
| `required` (default) | Always. |
| `optional` | Always. The field never blocks completion, even if `required: true` is set. |
| `progressive` with `depends_on` | Every field in `depends_on` has a value. |
| `progressive` without `depends_on` | Always. |
| `activation:` with a `when:` condition | The condition is true. |

Use `depends_on` when the rule is "after these fields". Use `when` when the rule depends on a value, such as "only for international transfers".

Progressive collection works on a top-level `GATHER` section and on a `GATHER` inside a `FLOW` step. The property names are the same.

## Minimal working example

A travel agent asks for the destination first. It asks for the hotel class only after the destination is known. It asks for nights once the destination is set.

`agents/travel-booking.agent.abl`

```abl
AGENT: Travel_Booking

GOAL: "Book a hotel stay for a traveler."

GATHER:
  destination:
    prompt: "Where are you traveling?"
    type: string
    required: true

  hotel_class:
    prompt: "What hotel class do you want?"
    type: string
    required: true
    activation: progressive
    depends_on: [destination]

  nights:
    prompt: "How many nights?"
    type: number
    required: true
    activation:
      when: "destination IS SET"

COMPLETE:
  - WHEN: destination IS SET AND hotel_class IS SET AND nights IS SET
    RESPOND: "Booking {{hotel_class}} in {{destination}} for {{nights}} nights."
```

Variable sources:

- All three variables are `GATHER` fields. The customer answers each prompt.
- `COMPLETE` reads all three, so the compiler sees no unused field.

## How it works

1. The runtime computes the active fields at the start of each turn.
2. It extracts values only for active fields. A progressive field is not filled early, even when the customer's message contains a matching value, unless its dependency already has a value.
3. It skips inactive fields when it checks for completion. A gated field does not block `COMPLETE` until it becomes active.
4. In a `FLOW` step, the step prompt lists every active field that is still missing. The prompts appear in declaration order, one per line. A gated field appears in a later turn, after its dependencies fill.
5. A field counts as having a value when it is not null, not undefined, and not an empty string.

When the customer corrects a field that other fields depend on, the runtime clears the dependent fields and asks for them again. This applies to `FLOW` `GATHER` with corrections on.

## Common variations

### Progressive fields inside a FLOW step

Inside a `FLOW` step, `GATHER` uses a list of fields. A `when` condition can read any field value. Write option lists without quotes.

`agents/transfer-collector.agent.abl`

```abl
AGENT: Transfer_Collector

GOAL: "Collect the details of a funds transfer and confirm them."

PERSONA: "You are a concise banking assistant."

FLOW:
  entry_point: collect_transfer
  steps:
    - collect_transfer
    - confirm

  collect_transfer:
    REASONING: false
    GATHER:
      - transfer_type:
          type: string
          required: true
          options: [domestic, international]
          prompt: "Is this a domestic or international transfer?"
      - routing_number:
          type: string
          required: true
          activation: progressive
          depends_on: [transfer_type]
          prompt: "What is the routing number?"
      - swift_code:
          type: string
          required: true
          activation:
            when: "transfer_type == 'international'"
          prompt: "What is the SWIFT code?"
      - memo:
          type: string
          required: false
          activation: optional
          prompt: "Add a memo?"
    THEN: confirm

  confirm:
    REASONING: false
    RESPOND: "Transfer set up: {{transfer_type}}, routing {{routing_number}}, SWIFT {{swift_code}}, memo {{memo}}."
    THEN: COMPLETE
```

`swift_code` is active only when the transfer is international. A domestic transfer never asks for it.

### Gate by condition only

Use `when` alone when no single field decides the rule. The condition uses the same expression syntax as `COMPLETE` and `WHEN` conditions. The compiler reports `INVALID_CEL_SYNTAX` for a bad expression. It warns with `UNDEFINED_CONDITION_VAR` for a variable that nothing declares.

### Make a field optional

Use `activation: optional` for a field the customer may skip. The field never blocks completion. See [Collect required and optional fields from users](/agent-platform/abl/how-to/collect-required-and-optional-fields).

## Verification

1. Run the validator. Expect no errors and no warnings.
2. Start a conversation. Expect the agent to ask only for the destination.
3. Answer the destination. Expect the agent to ask for the hotel class and the nights.
4. In the transfer example, choose `domestic`. Expect no SWIFT question. Repeat with `international`. Expect the SWIFT question.
5. In the trace, open the `dsl_collect` events. Check which fields are active for the turn.
6. Open the `gather_slot_ledger` events with the phase `completion_check`. `missingFields` must list only active fields.
7. Correct the destination after the hotel class is set. Expect the hotel class to be asked again in a `FLOW` step.

## Production readiness checklist

- Every `depends_on` name exists in the same `GATHER` block.
- Every progressive field has a path that activates it, or `COMPLETE` does not need it.
- `COMPLETE` and the flow steps read every required field.
- Tests cover each branch of every `when` condition.
- Tests cover a customer who gives a later answer early, in the first message.
- Tests cover a correction of a field that others depend on.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Adding `depends_on` to a required field and expecting gating | `depends_on` reads like a rule on any field. | Set `activation: progressive`. A required field ignores `depends_on`. |
| Writing the condition on one line as `activation: { when: "..." }` | It looks like the block form. | Write `activation:` and then `when:` on the next line. The one-line form is stored as text and the field never activates. |
| Writing an unknown mode such as `activation: sometimes` | A typo passes the compiler in line-based ABL. | Use `required`, `optional`, `progressive`, or a `when` block. A required field with an unknown mode blocks completion. |
| Writing `depends_on` as a multi-line list | YAML lists look natural. | Write `depends_on: [a, b]` on one line. A multi-line list is misread without an error. |
| Capitalizing `Progressive` in a top-level `GATHER` | A `FLOW` step lowercases the value, so it works there. | Write the mode in lowercase. |
| Gating a field on a value that never arrives | The condition is never true. | Test the branch. An inactive field is skipped without a warning. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| A field is never asked | Its dependency or condition never becomes true. | The `depends_on` fields and the `when` text. |
| The conversation never completes | A required field has an invalid `activation` value. | The `activation` spelling and form. |
| The compile fails with `INVALID_DEPENDS_ON_REF` | `depends_on` names a field that is not in the same block. | The field names. The message lists the available fields. |
| The compile fails with `CIRCULAR_DEPENDS_ON` | Two fields depend on each other. | The `depends_on` chain. |
| A required field triggers `UNUSED_REQUIRED_GATHER_FIELD` | Nothing reads the field. | `COMPLETE`, flow steps, and route conditions. |
| A later field is asked in the same turn as an earlier one | Both are active and missing. | The `depends_on` list. A field without a gate is active at once. |

## Related HowTos

- [Collect information with global GATHER](/agent-platform/abl/how-to/collect-with-global-gather)
- [Collect information inside a FLOW step](/agent-platform/abl/how-to/collect-with-flow-gather)
- [Collect required and optional fields from users](/agent-platform/abl/how-to/collect-required-and-optional-fields)
- [Collect multiple fields across a natural conversation](/agent-platform/abl/how-to/collect-multiple-fields-naturally)
- [Silently extract values without asking the user](/agent-platform/abl/how-to/silently-extract-values)
- [Combine reasoning steps with FLOW steps](/agent-platform/abl/how-to/combine-reasoning-and-flow-steps)
