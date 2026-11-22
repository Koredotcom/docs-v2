# Make one field depend on another field

Use `depends_on` to ask for a field only after another field has a value. Add `CORRECTIONS: true` in a `FLOW` step so that changing the first answer clears the answers that depend on it.

## Concept

A dependency links two fields. Three mechanisms create one. They answer different questions.

| You want                                | Use                                              | Behavior                                                    |
| --------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| "Ask B after A has a value"             | `activation: progressive` with `depends_on: [A]` | B stays inactive until A has a value.                       |
| "Ask B only when A has a certain value" | `activation:` with a `when:` condition           | B is active only while the condition is true.               |
| "Accept B only from a certain source"   | `satisfied_by`                                   | The runtime rejects a value that comes from another source. |

The first two control when a field is asked. The [progressive collection article](/agent-platform/abl/how-to/progressively-collect-fields) covers them in full. This article covers what that article does not: chains of dependencies, what happens when the customer changes an earlier answer, the compile-time checks, and source rules.

A dependency does not check a value. `depends_on: [country]` never tests that the region belongs to the country. To compare two values, see [Enforce business rules with constraints](/agent-platform/abl/how-to/enforce-business-constraints).

## Minimal working example

A delivery agent collects a location from the country down to the city. Each level depends on the one above. A customs ID is needed only outside the US. When the customer changes the country, the agent clears the region and city and asks again.

`agents/delivery-address-collector.agent.abl`

```yaml
AGENT: Delivery_Address_Collector

GOAL: "Collect a delivery location from the country down to the city and confirm it."

PERSONA: "You are a concise logistics assistant."

FLOW:
  entry_point: collect_location
  steps:
    - collect_location
    - confirm

  collect_location:
    REASONING: false
    GATHER:
      - country:
          type: string
          required: true
          prompt: "Which country should we deliver to?"
      - region:
          type: string
          required: true
          activation: progressive
          depends_on: [country]
          prompt: "Which state or region?"
      - city:
          type: string
          required: true
          activation: progressive
          depends_on: [region]
          prompt: "Which city?"
      - customs_id:
          type: string
          required: true
          activation:
            when: "country != 'US'"
          prompt: "What is the customs ID of the receiver?"
    CORRECTIONS: true
    THEN: confirm

  confirm:
    REASONING: false
    RESPOND: "Delivering to {{city}}, {{region}}, {{country}}. Customs ID: {{customs_id}}."
    THEN: COMPLETE
```

Variable sources:

- All variables are `GATHER` fields. The customer supplies each one.
- `confirm` reads all four. `customs_id` is empty for a US address.

## How it works

1. At the start of each turn, the runtime lists the active fields. A progressive field is active when every field in its `depends_on` list has a value.
2. The step asks for the active fields that are still missing. At first, only `country` is active.
3. A chain opens one level per answer: `country`, then `region`, then `city`.
4. A field has a value when it is not null, not undefined, and not an empty string.

### When the customer changes an earlier answer

This applies to a `FLOW` step with `CORRECTIONS: true`.

1. The runtime reads the reply with the already-collected fields included.
2. A valid value that differs from the stored one counts as a correction.
3. The runtime clears every field that depends on the corrected field, directly or through a chain. Changing `country` clears `region` and `city`.
4. A dependent that the customer re-gives in the same reply keeps its new value.
5. The agent says the field was updated and may ask again for the cleared fields. Override the wording with the `gather_correction_applied` and `gather_correction_dependents_cleared` keys in `MESSAGES`.
6. A correction that fails validation is rejected. The runtime clears that field and asks again.

Clearing follows `depends_on` only. A field gated by `when:` is not cleared. Its condition is checked again on the next turn.

### Compile-time checks

The compiler checks `depends_on` inside one `GATHER` block, at the top level or in one step.

| Code                     | Cause                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| `INVALID_DEPENDS_ON_REF` | A name in `depends_on` is not a field in the same block. The message lists the available fields. |
| `CIRCULAR_DEPENDS_ON`    | Fields depend on each other, for example `a → b → a`.                                            |

## Common variations

### Accept a value only from the customer

`satisfied_by` lists the sources allowed to fill a field: `user_input`, `authoritative_tool`, `system`. A value from any other source is rejected. Omit it to accept any source.

Use this when a field must come from the customer and must not be filled by a tool. Pair it with a dependency when the customer's answer only makes sense after an earlier one.

```yaml
AGENT: Refund_Approval_Intake

GOAL: "Collect a refund amount and the approval code issued by the billing system."

PERSONA: "You are a concise support assistant."

GATHER:
  refund_amount:
    prompt: "How much should we refund?"
    type: currency
    required: true

  approval_code:
    prompt: "What is the approval code?"
    type: string
    required: true
    activation: progressive
    depends_on: [refund_amount]
    satisfied_by: [user_input]

COMPLETE:
  - WHEN: refund_amount IS SET AND approval_code IS SET
    RESPOND: "Refund of {{refund_amount}} approved with code {{approval_code}}."
```

### Dependencies in a top-level GATHER

The same `depends_on` and `when:` rules work in a top-level `GATHER`. Clearing dependents after a change is not available there. It runs only in a `FLOW` step with `CORRECTIONS: true`. In a top-level `GATHER`, the runtime does not clear dependents for you.

## Verification

1. Run the validator. Expect no errors and no warnings.
2. Say "Germany". Expect the agent to ask for the region only.
3. Say "Bavaria". Expect a question for the city.
4. Say "Munich". Expect a question for the customs ID, because the country is not the US.
5. Say "Actually, the country is the US." Expect the agent to confirm the change and to ask again for the region and city. Expect no customs ID question.
6. Say "Texas" and "Austin". Expect the confirmation with the US address.
7. In the trace, find the `correction_invalidation` event. Its `correctedFields` and `invalidatedFields` show what was cleared.
8. For `Refund_Approval_Intake`, expect no approval code question until the amount is set.

## Production readiness checklist

- Every `depends_on` name exists in the same `GATHER` block.
- Every dependent field is read by `COMPLETE` or a later step.
- Steps that collect a chain set `CORRECTIONS: true`.
- Tests cover a change to each field that others depend on, including a field in the middle of a chain.
- A value that depends on another value, such as a region in a country, is checked by a lookup or a constraint. A dependency alone does not check it.
- `MESSAGES` text for the correction notices matches your brand voice and languages.

## Common mistakes

| Mistake                                                                | Why it happens                                                        | How to avoid it                                                                      |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Expecting `depends_on` to check that two values match                  | The word "depends" suggests a link between values.                    | It controls only when a field is asked. Use a constraint or lookup for value checks. |
| Setting `depends_on` on a required field with no `activation`          | The property looks like a gate on its own.                            | Add `activation: progressive`.                                                       |
| Expecting a changed answer to clear dependents in a top-level `GATHER` | The property is the same in both places. Only the `FLOW` step clears. | Use a `FLOW` step with `CORRECTIONS: true`.                                          |
| Listing a dependency across blocks                                     | Two steps collect related fields.                                     | `depends_on` names must be in the same block. Collect the pair in one step.          |
| Writing `depends_on` as a multi-line list                              | YAML lists look natural.                                              | Write `depends_on: [a, b]` on one line.                                              |
| A circular chain                                                       | Two fields each need the other first.                                 | Break the loop. One field must come first.                                           |

## Troubleshooting

| Symptom                                        | Likely cause                                                                                    | What to check                                                                         |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| A dependent field is never asked               | Its parent is never filled.                                                                     | The parent field and its validation.                                                  |
| The old region stays after the country changed | `CORRECTIONS` is off, or the field is in a top-level `GATHER`, where nothing clears dependents. | Use a `FLOW` step with `CORRECTIONS: true`.                                           |
| A field cleared that the customer just re-gave | The reply did not carry a valid value for it.                                                   | The `correction` events in the trace. A dependent re-given in the same reply is kept. |
| `INVALID_DEPENDS_ON_REF` at compile            | The name is misspelled or in another block.                                                     | The field names listed in the message.                                                |
| `CIRCULAR_DEPENDS_ON` at compile               | Fields depend on each other.                                                                    | The chain shown in the message.                                                       |
| A tool cannot fill a field                     | `satisfied_by` excludes the tool source.                                                        | Add `authoritative_tool` to the list, or fill the field from the customer.            |

## Related HowTos

- [Progressively collect fields only when needed](/agent-platform/abl/how-to/progressively-collect-fields)
- [Collect information inside a FLOW step](/agent-platform/abl/how-to/collect-with-flow-gather)
- [Enforce business rules with constraints](/agent-platform/abl/how-to/enforce-business-constraints)
- [Validate collected fields by type](/agent-platform/abl/how-to/validate-fields-by-type)
