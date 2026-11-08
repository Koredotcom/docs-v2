# Define reusable entities for structured extraction

Use this pattern when several fields, or several agents, must extract the same kind of value, such as a request type or a booking reference, with one shared definition.

## Concept

An entity is a named definition of a value: its type, its allowed values, its synonyms, and its pattern. You declare it once in the `ENTITIES:` section. A `GATHER` field binds to it with `ENTITY_REF`. The field then inherits the entity instead of repeating the same settings.

Use an entity when:

- Two or more fields extract the same kind of value.
- A value needs synonyms or a pattern that you want to maintain in one place.
- You want extraction hints that apply wherever the value is used.

Use plain `GATHER` properties when one field needs a simple type and nothing else. See [Collect information with global GATHER](/agent-platform/abl/how-to/collect-with-global-gather).

An entity belongs to the agent file that declares it. Declare the entity in each agent that uses it.

## Minimal working example

A refund assistant extracts a request type and a booking reference. Both are entities. Two `GATHER` fields bind to them.

`agents/refund-intake.agent.abl`

```abl
AGENT: Refund_Intake
GOAL: "Collect a refund request type and a booking reference, then confirm the case."

PERSONA: |
  Calm support agent. Ask one question at a time.

ENTITIES:
  request_type:
    TYPE: enum
    DESCRIPTION: "What the customer wants done with the booking."
    VALUES: [REFUND, EXCHANGE, CANCEL]
    SYNONYMS:
      REFUND: [money back, reimburse, refund]
      EXCHANGE: [swap, change my booking, exchange]
      CANCEL: [cancel, call it off]
    EXTRACTION_HINTS: ["I want my money back", "swap it for another date"]

  booking_ref:
    TYPE: pattern
    PATTERN: "[A-Z]{2}[0-9]{4,6}"
    DESCRIPTION: "Booking reference: two letters then four to six digits."

GATHER:
  request:
    ENTITY_REF: request_type
    PROMPT: "Do you want a refund, an exchange, or a cancellation?"
  booking:
    ENTITY_REF: booking_ref
    PROMPT: "What is your booking reference?"

COMPLETE:
  - WHEN: request IS SET AND booking IS SET
    RESPOND: "Logged {{request}} for booking {{booking}}."
```

Variable sources:

- `request` and `booking` are `GATHER` fields that the customer supplies.
- The entities supply the type, the allowed values, the synonyms, and the pattern.

## How it works

Entity properties. These are the only properties the parser reads:

| Property | Use |
| -------- | --- |
| `TYPE` | The value type. The default is `string`. See [Extract dates, numbers, locations, and free text](/agent-platform/abl/how-to/extract-common-entity-types). |
| `VALUES` | Allowed values of an `enum` entity. Write them in one line. |
| `SYNONYMS` | Alternative phrasings for each value. See [Use enum entities with synonyms](/agent-platform/abl/how-to/use-enum-entities-with-synonyms). |
| `PATTERN` | A regular expression. See [Extract pattern-based values](/agent-platform/abl/how-to/extract-pattern-based-values). |
| `DESCRIPTION` | A model-facing meaning of the value. |
| `EXTRACTION_HINTS` | Example phrasings that guide extraction. |
| `VALIDATION` | A validation description. |
| `SENSITIVE` | Marks the value as sensitive. Write lowercase `true` or `yes`. |

What a field inherits when it sets `ENTITY_REF`:

- The type, the allowed values, and the synonyms.
- The `sensitive` setting, unless the field sets its own.
- The pattern, description, and hints, which the runtime reads from the entity at extraction time.

A field can still set its own `PROMPT`, `DESCRIPTION`, and `EXTRACTION_HINTS`. The field description overrides the entity description. The field hints merge with the entity hints. An empty hint list on the field clears the inherited hints.

A field cannot set `TYPE` (other than `string`) or `OPTIONS` together with `ENTITY_REF`. That is a compile error `GATHER_ENTITY_REF_CONFLICT`. An unknown entity name is a compile error `GATHER_ENTITY_REF_UNRESOLVED`, and the compiler drops the field.

How the runtime uses entities:

1. The runtime extracts values from each customer message. It replaces the observed values on every turn.
2. It checks each value against the entity type.
3. It assigns a value to a field that is not yet filled. One unique value goes to the first field that references the entity.
4. Several values for one field trigger a clarification. Several values for several fields trigger a disambiguation.
5. Input longer than 10,000 characters skips extraction.

## Common variations

### Entities in a FLOW step

A `FLOW` step `GATHER` binds to entities the same way.

`agents/flow-refund.agent.abl`

```abl
AGENT: Flow_Refund
GOAL: "Collect a request type and a booking reference in a guided flow."

ENTITIES:
  request_type:
    TYPE: enum
    VALUES: [REFUND, EXCHANGE, CANCEL]
    SYNONYMS:
      REFUND: [money back, reimburse]
      CANCEL: [call it off]
  booking_ref:
    TYPE: pattern
    PATTERN: "[A-Z]{2}[0-9]{4,6}"

FLOW:
  entry_point: collect

  steps:
    - collect
    - done

  collect:
    REASONING: false
    GATHER:
      - request:
          ENTITY_REF: request_type
          PROMPT: "Refund, exchange or cancel?"
      - booking:
          ENTITY_REF: booking_ref
          PROMPT: "What is your booking reference?"
    THEN: done

  done:
    REASONING: false
    RESPOND: "Logged {{request}} for {{booking}}."
    THEN: COMPLETE
```

### Override the description on one field

Set `DESCRIPTION` on a field that uses the entity in a narrower way.

```abl
GATHER:
  request:
    ENTITY_REF: request_type
    DESCRIPTION: "What the customer wants done with the booking they just named."
    PROMPT: "Do you want a refund, an exchange, or a cancellation?"
```

This is a section snippet. It needs the entity from the minimal example.

### Entities in the NLU section

The `NLU:` section can also declare entities. Do not declare the same entity name in both `ENTITIES:` and `NLU:`. That is a compile error `ENTITY_DUPLICATE_DECLARATION`.

## Verification

1. Run the validator. Expect no errors and no warnings.
2. Say "I want my money back for booking AB12345". Expect `request` to fill as `REFUND` and `booking` as `AB12345`, with no questions.
3. Say only "I want to swap it". Expect `request` to fill as `EXCHANGE` and the agent to ask for the booking reference.
4. In the trace, open the `entity_observation` events for the values found. Open `entity_slot_assignment` for the field each value went to.
5. Open `entity_validation_intrinsic` to see a value that failed the type check.

## Production readiness checklist

- Every entity has a `DESCRIPTION`.
- Every enum entity has `VALUES` in one line.
- Every field with `ENTITY_REF` sets no `TYPE` or `OPTIONS`.
- The entity is declared in every agent that uses it.
- Each entity name is unique in the file.
- Tests cover a value stated in the first message, a value stated later, and an unknown value.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Writing `SYNONYM:` or `ALIASES:` | The names look natural. | Use `SYNONYMS`. An unknown property is ignored without a message. |
| Declaring the same entity name twice | The compiler does not check duplicates in `ENTITIES:`. | Keep names unique. |
| Setting `TYPE` or `OPTIONS` with `ENTITY_REF` | The field looks incomplete. | Remove them. The entity owns the type. |
| Writing `SENSITIVE: True` | Other languages accept it. | Write lowercase `true` or `yes`. Other spellings read as `false`. |
| Using two fields with one entity and one value | Both fields look equal. | Expect the first field to get the value. Use different entities when the roles differ. |
| Assuming an entity is shared across agents | The word "reusable" suggests it. | Declare it in each agent file. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The field never fills | The entity name in `ENTITY_REF` does not match. | The compile error `GATHER_ENTITY_REF_UNRESOLVED`. |
| An enum field accepts any value | The entity has no `VALUES`. | The `VALUES` line. |
| The compile warns `W172` | The `TYPE` spelling is unknown. | The type name. |
| The compile warns `W171` | Property keys are lowercase. | Write the keys in uppercase. |
| The second field stays empty | One value was assigned to the first field. | `entity_slot_assignment` in the trace. |
| A hint has no effect | The hints are on a field that does not use the entity, or the strategy skips model extraction. | The field `ENTITY_REF` and `STRATEGY`. |

## Related HowTos

- [Use enum entities with synonyms](/agent-platform/abl/how-to/use-enum-entities-with-synonyms)
- [Extract pattern-based values like IDs and phone numbers](/agent-platform/abl/how-to/extract-pattern-based-values)
- [Extract dates, numbers, locations, and free text](/agent-platform/abl/how-to/extract-common-entity-types)
- [Normalize user language into canonical values](/agent-platform/abl/how-to/normalize-user-language)
- [Collect information with global GATHER](/agent-platform/abl/how-to/collect-with-global-gather)
