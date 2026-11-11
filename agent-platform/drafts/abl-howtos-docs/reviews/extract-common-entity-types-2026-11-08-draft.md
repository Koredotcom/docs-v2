# Extract dates, numbers, locations, and free text

Use this pattern when a field must hold a normalized date, a number, a currency amount, a place, or an open-ended note, and you need to know exactly how each type is read.

## Concept

The `TYPE` of a field decides how the runtime reads and checks the customer's words. A date field turns "next Friday" into an ISO date. A number field turns "twenty five" into 25. A free text field keeps what the customer said.

| Type | What the runtime does |
| ---- | --------------------- |
| `string`, `text`, `free_text` | Keeps the text. An object or array is rejected. |
| `location` | Keeps the text. There is no geocoding or lookup. |
| `number`, `float` | Reads digits and spoken numbers. "twenty five" gives 25. "8 guests" gives 8. "1,200" gives 1200. |
| `integer` | Same as `number`, cut toward zero. |
| `currency` | Reads the amount and drops the symbol or code. The currency code is not stored. |
| `boolean` | Accepts true, yes, 1, y, sure, ok, and similar. Accepts false, no, 0, n, decline, and similar. Anything else is invalid. |
| `date`, `datetime` | Reads dates and relative phrases with a date parser, and returns an ISO date (`YYYY-MM-DD`). `datetime` is read the same way as `date`. |
| `email` | Trims, lowercases, and checks the shape. |
| `phone` | Returns an E.164 number. The default country is the US, or the country of the conversation locale. |
| `enum`, `pattern` | See [Use enum entities with synonyms](/agent-platform/abl/how-to/use-enum-entities-with-synonyms) and [Extract pattern-based values](/agent-platform/abl/how-to/extract-pattern-based-values). |

An unknown type compiles and passes the value through with no check. Check the spelling of each type.

## Minimal working example

An events agent collects a future date, a guest count, a budget, a city, and optional notes.

`agents/event-booking.agent.abl`

```abl
AGENT: Event_Booking
GOAL: "Collect the details of an event booking request."

PERSONA: "You are a concise events coordinator."

GATHER:
  event_date:
    PROMPT: "What date is the event?"
    TYPE: date
    SEMANTICS:
      temporal: future
  guests:
    PROMPT: "How many guests?"
    TYPE: integer
  budget:
    PROMPT: "What is your total budget?"
    TYPE: currency
  venue_city:
    PROMPT: "In which city?"
    TYPE: location
  special_requests:
    PROMPT: "Any special requests?"
    TYPE: free_text
    REQUIRED: false

COMPLETE:
  - WHEN: event_date IS SET AND guests IS SET AND budget IS SET AND venue_city IS SET
    RESPOND: "Booking request: {{guests}} guests in {{venue_city}} on {{event_date}}, budget {{budget}}. Notes: {{special_requests}}."
```

Variable sources:

- All five variables are `GATHER` fields that the customer supplies.
- The notes field is optional and can be empty in the reply.

## How it works

Dates:

- A date value is normalized to an ISO date, such as `2026-12-05`. An ISO date passes through unchanged. Relative phrases, such as "next Friday" and "in two weeks", resolve from the conversation date and time zone.
- `SEMANTICS` `temporal: future` rejects a date before today and moves a date without a year forward. `past` rejects a future date. `any` is the default. The rejection reason codes are `date_not_in_future` and `date_not_in_past`.
- `temporal` takes effect on `date` and `datetime` fields. Another value compiles but has no effect.
- A `datetime` field returns the date only, in the same `YYYY-MM-DD` form as `date`. The parser drops a time of day in the customer's words, so "tomorrow at 3pm" gives tomorrow's date. A value that already starts with a `YYYY-MM-DD` date passes through unchanged, with any time part the customer typed. A value that does not start with a date but that a standard date parser accepts also passes through as typed. To collect a time, add a separate `string` field with a `VALIDATE` rule for the format you need.

Numbers and amounts:

- The runtime reads spoken numbers when at least one field in the agent is numeric. A field of type `number`, `integer`, `float`, `phone`, or `currency` turns this on.
- A value like "8,5" is refused.
- A currency symbol or code is removed. Collect the currency code in a separate field when it matters.

Locations and free text:

- `location` and `free_text` keep the text as it was said. Set `lookup` in `SEMANTICS` to check a place against a list. See [Normalize user language into canonical values](/agent-platform/abl/how-to/normalize-user-language).
- To extract a structured address, use separate fields for the street, the city, and the postal code. The `components` setting only guides the model. It does not create an object.

Locale:

- The conversation locale sets the default country for phone numbers and the date reading.

When a value is invalid, the field is rejected with a reason code, such as `invalid_number`, `invalid_date`, `invalid_phone`, `invalid_currency`, or `invalid_option`. The agent asks again, using the `RETRY_PROMPT` if you set one.

## Common variations

### Date in the past

Set `temporal: past` for a birth date or an incident date.

```abl
GATHER:
  incident_date:
    PROMPT: "On what date did the incident happen?"
    TYPE: date
    SEMANTICS:
      temporal: past
```

This is a section snippet. Add it to an agent.

### Phone and email with a limited strategy

Set `TYPE: phone` or `TYPE: email`. Set `STRATEGY: pattern` to extract with the built-in pattern and skip the model.

### Range of numbers or dates

Add `RANGE: true` to collect a low and a high end. See [Collect lists, ranges, preferences, and attachments](/agent-platform/abl/how-to/collect-complex-field-shapes).

### Free text for notes

Use `free_text` with `REQUIRED: false` for a field you capture only when offered. A plain optional field is not extracted unless you set an extraction setting. See [Collect required and optional fields from users](/agent-platform/abl/how-to/collect-required-and-optional-fields).

## Verification

1. Run the validator. Expect no errors and no warnings.
2. Say "a party of twenty five in Lisbon on the first of next month, budget 8000 euros". Expect `guests` as 25, `venue_city` as `Lisbon`, `budget` as 8000, and an ISO date.
3. Say a past date for the event. Expect it to be refused, and the agent to ask again.
4. Say "8,5 guests". Expect the value to be refused.
5. In the trace, open the extraction resolution result. It lists the raw phrase and the normalized value.

## Production readiness checklist

- Every type name is spelled correctly. An unknown type skips checks.
- Every date field sets `temporal` when the direction matters.
- Currency fields have a separate currency code field when the code matters.
- The conversation locale is tested for phone and date fields.
- Tests cover spoken numbers, relative dates, a past date, and a missing value.
- Free text fields are optional, or have a retry rule.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Expecting the currency code to be stored | The type is called currency. | Add a separate field for the code. |
| Using `location` and expecting a valid place | The type name suggests a lookup. | Add a lookup table, or confirm the value. |
| Typing the type in the wrong case or a wrong name | The compiler accepts any text. | Use the exact type names in the table. |
| Using `temporal: soon` | The setting looks free-form. | Use `future`, `past`, or `any`. |
| Expecting an address object from `components` | The name suggests a structure. | Use separate fields. |
| Expecting `datetime` to keep the time of day | The type name suggests a time. | Collect the time in a separate field. A natural-language `datetime` returns the date only. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| A date is refused | The `temporal` direction does not fit. | The `SEMANTICS` setting and today's date. |
| A number field gets text | The type is misspelled, so no check runs. | The `TYPE` spelling. |
| The phone has the wrong country | The default country is the US. | The locale. |
| A spoken number is not read | No field in the agent is numeric. | At least one numeric-typed field. |
| The currency code is missing | The runtime drops it. | A separate code field. |
| A field is refused with `invalid_boolean` | The phrase is not in the accepted list. | The customer wording, and use an enum with synonyms. |

## Related HowTos

- [Define reusable entities for structured extraction](/agent-platform/abl/how-to/define-reusable-entities)
- [Extract pattern-based values like IDs and phone numbers](/agent-platform/abl/how-to/extract-pattern-based-values)
- [Normalize user language into canonical values](/agent-platform/abl/how-to/normalize-user-language)
- [Collect lists, ranges, preferences, and attachments](/agent-platform/abl/how-to/collect-complex-field-shapes)
- [Collect information with global GATHER](/agent-platform/abl/how-to/collect-with-global-gather)
