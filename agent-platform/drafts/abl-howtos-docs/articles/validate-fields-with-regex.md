# Validate fields with regex or custom patterns

Add `validate: "<regex>"` to a text `GATHER` field to accept only values that match. Add `extraction_pattern` to pull the value out of a longer sentence first.

## Concept

ABL has two regex settings. They do different jobs.

| Setting              | Job                                            | Runs on                       | Needs a match to continue?                                           |
| -------------------- | ---------------------------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| `validate:`          | Accept or reject the collected value.          | The value after type checks.  | Yes. A value with no match is rejected and the agent asks again.     |
| `extraction_pattern` | Find the value inside what the customer typed. | The customer's whole message. | No. With no match, the field is not filled and the agent asks again. |

Use `validate:` for formats that a [field type](/agent-platform/abl/how-to/validate-fields-by-type) cannot express, such as an order number or a ZIP code. Use `extraction_pattern` when customers wrap the value in words, such as "my order is AB123456, please check".

Three rules decide whether a pattern works:

- **A `validate:` pattern matches anywhere in the value.** `[A-Z]{2}[0-9]{6}` accepts "xx AB123456 yy". Anchor with `^` and `$` to require the whole value.
- **Patterns run on a safe engine.** Lookahead `(?=`, lookbehind, and backreferences such as `\1` are not supported. Nested quantifiers such as `(a+)+` are rejected.
- **Patterns test text only.** On an `integer`, `number`, or `boolean` field, the stored value is not text, so the rule always fails. Put the rule on a `string` field.

## Minimal working example

An order-status agent accepts an order number of two capital letters and six digits, and a US ZIP code.

`agents/order-status-intake.agent.abl`

```yaml
AGENT: Order_Status_Intake

GOAL: "Collect an order number and a ZIP code, then confirm the lookup request."

PERSONA: "You are a concise support assistant."

GATHER:
  order_number:
    prompt: "What is your order number? It is two letters followed by six digits."
    type: string
    required: true
    validate: "^[A-Z]{2}[0-9]{6}$"
    retry_prompt: "An order number is two letters and six digits, for example AB123456."
    max_retries: 3

  zip_code:
    prompt: "What is the ZIP code on the order?"
    type: string
    required: true
    validate: "^[0-9]{5}(-[0-9]{4})?$"
    retry_prompt: "Enter a 5-digit ZIP code, or 5 digits, a dash, and 4 digits."

COMPLETE:
  - WHEN: order_number IS SET AND zip_code IS SET
    RESPOND: "Looking up order {{order_number}} for ZIP {{zip_code}}."
```

Variable sources:

- `order_number` and `zip_code` are `GATHER` fields. The customer supplies both.
- `COMPLETE` reads both in its condition and reply.
- This agent stops at a confirmation message. A real agent passes the two values to a lookup tool that you define in your project.

Write the regex with single backslashes, such as `\d`. ABL does not unescape the text between the quotes.

## How it works

1. The customer replies. The runtime extracts a value for the field.
2. The runtime applies the field type. A `string` accepts any text.
3. The runtime tests the value against `validate:`.
4. A match stores the value. No match drops the value, and the field stays missing.
5. The agent asks again. `retry_prompt` is the re-ask text for the field. `max_retries` counts failures for that field and records a `validation_max_retries` trace event when the limit is reached.

At compile time the compiler checks every pattern:

| Check                       | Limit                            | Result when it fails                     |
| --------------------------- | -------------------------------- | ---------------------------------------- |
| Valid and supported syntax  | No lookaround, no backreferences | Compile error `AGENT_COMPILATION_FAILED` |
| Nested quantifiers          | `(a+)+` and similar              | Compile error                            |
| `extraction_pattern` length | 500 characters                   | Compile error                            |
| `validate:` length          | Longer than 500 characters       | Compile error                            |

Matching is case-sensitive. Add `(?i)` at the start for a case-insensitive match. A value with a trailing newline does not match a pattern that ends in `$`.

`validation_process: REGEX` is the default for a `validate:` rule. You can omit it. `validation_process: LLM` replaces the regex with a model judgment and is not covered here.

## Common variations

### Pull the value out of a sentence

Set `extraction_pattern` and `strategy: pattern`. The runtime then finds the value with your regex alone, with no model call. Keep `validate:` as the final gate.

`agents/ticket-lookup.agent.abl`

```yaml
AGENT: Ticket_Lookup

GOAL: "Pull a ticket ID out of what the customer says and confirm it."

PERSONA: "You are a concise support assistant."

FLOW:
  entry_point: ask_ticket
  steps:
    - ask_ticket
    - confirm

  ask_ticket:
    REASONING: false
    GATHER:
      - ticket_id: required
        type: string
        prompt: "What is your ticket ID? It looks like TKT-123456."
        extraction_pattern: "\bTKT-[0-9]{6}\b"
        strategy: pattern
        validate: "^TKT-[0-9]{6}$"
        retry_prompt: "A ticket ID starts with TKT- and has six digits."
        max_retries: 3
    THEN: confirm

  confirm:
    REASONING: false
    RESPOND: "Found ticket {{ticket_id}}."
    THEN: COMPLETE
```

"It is TKT-123456, thanks" fills `ticket_id` with `TKT-123456`. "tkt-123456" does not match, because the extraction pattern is case-sensitive.

`strategy:` accepts `auto`, `ml`, `llm`, `hybrid`, and `pattern`. Any other word is compile error `E170`. `hybrid` is an old name for `auto`.

### Capture one part of a match

Wrap the part you want in parentheses and set `extraction_group` to its number. Group `0` is the whole match and is the default. A group number the pattern does not have falls back to the whole match.

This is a section snippet.

```yaml
GATHER:
  ticket_number:
    prompt: "What is your ticket number?"
    type: string
    required: true
    extraction_pattern: "ticket (?:id|number)\s*:?\s*(TKT-[0-9]{6})"
    extraction_group: 1
    strategy: pattern
    validate: "^TKT-[0-9]{6}$"
```

"ticket number: TKT-123456" fills the field with `TKT-123456`. A bare "TKT-123456" does not match, because this pattern requires the words before it.

### Share a pattern across fields with ENTITIES

Declare the pattern once in `ENTITIES` and point fields at it with `entity_ref`. The entity `PATTERN` is used as the field's extraction pattern. It does not reject values by itself, so keep `validate:` on the field.

This is a section snippet.

```yaml
ENTITIES:
  order_number:
    TYPE: pattern
    PATTERN: "[A-Z]{2}[0-9]{6}"

GATHER:
  order_number:
    prompt: "Order number?"
    entity_ref: order_number
    required: true
    validate: "^[A-Z]{2}[0-9]{6}$"
```

### Hide the value

Set `sensitive: true` on a field that holds personal data. Rejection messages and traces then leave out the value. See [Collect sensitive or PII fields safely](/agent-platform/abl/how-to/collect-sensitive-pii-fields).

## Verification

Send these messages in a test session, then open the trace.

| Agent               | Customer says              | Expected result                                         |
| ------------------- | -------------------------- | ------------------------------------------------------- |
| Order_Status_Intake | "AB123456"                 | `order_number` is stored.                               |
| Order_Status_Intake | "ab123456"                 | Rejected. The agent shows the `retry_prompt`.           |
| Order_Status_Intake | "order AB123456"           | Rejected. The anchors require the whole value to match. |
| Order_Status_Intake | "12345-6789" for ZIP       | `zip_code` is stored.                                   |
| Ticket_Lookup       | "it is TKT-123456, thanks" | `ticket_id` is `TKT-123456`.                            |
| Ticket_Lookup       | "tkt-123456"               | Not extracted. The agent asks again.                    |
| Ticket_Lookup       | Three bad answers          | A `validation_max_retries` event names `ticket_id`.     |

Check in the trace:

- The extracted candidate for the field, with the stage `pattern`.
- The validation error for a rejected value.
- The stored value in the session data.

## Production readiness checklist

- Every `validate:` pattern starts with `^` and ends with `$`, unless a partial match is intended.
- Rules sit on `string` fields only.
- Each pattern was tested with a good value, a wrong-case value, a too-long value, and a value with extra words.
- Every field with `validate:` also has a `retry_prompt` that shows an example of a good value.
- You chose what happens after `max_retries`: escalation, a handoff, or a graceful end.
- Patterns with `extraction_pattern` and `validate:` agree on case.
- Fields with personal data set `sensitive: true`.
- Downstream tools accept the format you validate.

## Common mistakes

| Mistake                                                                       | Why it happens                                                                        | How to avoid it                                                                           |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Pattern without `^` and `$`                                                   | Regex tools often show full-value matches. `validate:` matches anywhere in the value. | Anchor the pattern.                                                                       |
| Regex on an `integer` field                                                   | The runtime stores a number, and the rule tests text.                                 | Use a `string` field. Convert later if you need a number.                                 |
| Lookahead or backreference                                                    | Common in other regex engines.                                                        | Rewrite without them. The compiler reports the construct.                                 |
| `\\d` with double backslashes                                                 | Other languages need them in strings. ABL does not unescape.                          | Write `\d`.                                                                               |
| `validate: min(18)` or `email()`                                              | Some pages list these forms. The compiler reads them as regex text.                   | Use a regex, a field type, or `enum(...)`.                                                |
| `extraction_pattern` is case-sensitive but `validate:` is not, or the reverse | Each setting has its own pattern.                                                     | Use the same case rules in both.                                                          |
| `retry_prompt` with no `validate:`                                            | The prompt reads like a type-level setting.                                           | Add a `validate:` rule. The compiler reports `GATHER_VALIDATION_RULE_REQUIRED` otherwise. |

## Troubleshooting

| Symptom                                            | Likely cause                                                            | What to check                                                        |
| -------------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Compile error about an unsafe or unsupported regex | Nested quantifier, lookaround, backreference, or broken syntax          | Read the message. It names the construct.                            |
| Compile error about length                         | Pattern over 500 characters                                             | Split the rule or simplify it.                                       |
| Every answer is rejected                           | Regex on a number field, or a mis-escaped pattern                       | Use a `string` field. Check for `\\`.                                |
| "xx AB123456" is accepted                          | No anchors                                                              | Add `^` and `$`.                                                     |
| A valid value is rejected after extraction         | Extraction is case-insensitive, validation is not                       | Align the case rules.                                                |
| `extraction_pattern` never fills the field         | No match, or the wrong group number                                     | Test the pattern against a sample message. Check `extraction_group`. |
| Compile error `E170`                               | Misspelled `strategy:`                                                  | Use `auto`, `ml`, `llm`, `hybrid`, or `pattern`.                     |
| Pattern is silently skipped at runtime             | Message over 10,000 characters, or a pattern that fails the safe engine | Keep patterns simple and test with long input.                       |

## Related HowTos

- [Validate collected fields by type](/agent-platform/abl/how-to/validate-fields-by-type)
- [Validate fields with enums and allowed values](/agent-platform/abl/how-to/validate-fields-with-enums)
- [Extract pattern-based values](/agent-platform/abl/how-to/extract-pattern-based-values)
- [Collect sensitive or PII fields safely](/agent-platform/abl/how-to/collect-sensitive-pii-fields)
