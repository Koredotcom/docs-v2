# Normalize user language into canonical values

Use this pattern when customers describe the same thing in different words, units, or spellings, and the agent must store one consistent value.

## Concept

Normalization turns what the customer said into the value your agent stores. The runtime applies several layers in order. You control each layer with a different setting.

| Layer | What it does | Setting |
| ----- | ------------ | ------- |
| Extraction | Finds a candidate value: pattern, then ML, then model, depending on the strategy. | `STRATEGY`, `EXTRACTION_PATTERN` |
| Type normalization | Turns spoken numbers, dates, phones, and currency into standard forms. | `TYPE` |
| Enum canonicalization | Maps synonyms to the canonical value, ignoring case. | `VALUES`, `SYNONYMS` |
| Lookup check | Matches a value against a reference list. | `SEMANTICS` `lookup` |
| Unit conversion | Converts a number from one unit to another. | `SEMANTICS` `unit`, `convert_to` |
| Validation | Rejects a value that fails a rule. | `VALIDATE` |

Pick the layer by what varies:

- Different words for one choice: use an enum with synonyms.
- Different forms of a number, a date, or a phone: set the `TYPE`.
- Different units: set `unit` and `convert_to`.
- Free-text names that must match a list: use a lookup.

There is no general text cleanup. The runtime does not trim, lowercase, or strip punctuation for `string` fields, except that it lowercases an `email` and matches enum values without regard to case.

## Minimal working example

A parcel quote agent reads the weight in kilograms and converts it to pounds for the pricing tool. It also checks the destination country against a list.

The `semantics lookup` name `supported_countries` refers to a project-level lookup table. That table is a project-local assumption. Create it in the project runtime configuration. See [Lookup tables](#lookup-tables). The tool is also a project-local assumption. Bind it to your pricing service in Project Tools.

```yaml
AGENT: Parcel_Quote
GOAL: "Collect the parcel weight and the destination country to quote a shipment."

PERSONA: "You are a concise shipping assistant."

TOOLS:
  quote_parcel(weight_lbs: number = null, country: string = null) -> {price: number}
    description: "Returns a shipping price for the parcel."
    effect: read_only
    parameters:
      weight_lbs:
        description: "Parcel weight in pounds."
      country:
        description: "Destination country."

FLOW:
  collect -> quote -> done

  collect:
    REASONING: false
    GATHER:
      - weight:
          type: number
          prompt: "How much does the parcel weigh?"
          required: true
          semantics:
            unit: kg
            convert_to: lbs
      - country:
          type: string
          prompt: "Which country is it going to?"
          required: true
          semantics:
            lookup: supported_countries
    THEN: quote

  quote:
    REASONING: false
    CALL: quote_parcel
      WITH:
        weight_lbs: "{{weight}}"
        country: "{{country}}"
      AS: quote_result
    THEN: done

  done:
    REASONING: false
    RESPOND: "Your quote to {{country}} is {{quote_result.price}}."
```

Variable sources:

- `weight` and `country` are `GATHER` fields that the customer supplies.
- `quote_result` comes from the tool call.

## How it works

Unit conversion:

- It runs inside `FLOW` step `GATHER` only. A top-level `GATHER` does not convert.
- It converts numbers only. A list or a range is skipped.
- The runtime keeps the original value under `_original.<field>`.
- A unit pair it does not support is skipped without an error.
- Supported units: temperature (celsius, fahrenheit, kelvin), distance (meters, km, miles, feet, yards), weight (grams, kg, lbs, ounces), time (seconds, minutes, hours, days), volume (ml, liters, gallons, cups), and currency (USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, MXN, BRL, KRW, SGD, HKD, SEK, NOK). Currency conversion uses static rates unless a live currency client is configured.

Spoken numbers:

- The runtime reads "twenty five" as 25, and "double oh seven" as digits, for numeric fields. It applies this when at least one field in the agent is numeric.

Synonyms:

- An enum entity maps each synonym to the canonical value. See [Use enum entities with synonyms](/agent-platform/abl/how-to/use-enum-entities-with-synonyms).

### Lookup tables

A lookup check compares the value with a reference list.

- An exact match, ignoring case, is stored with the casing of the table.
- A near match, found with a text similarity score, asks "Did you mean X?". The runtime never applies a near match without the customer's confirmation. The table setting `fuzzy_match` turns this on.
- A value with no match is an error, and the agent asks again.
- A small table is passed to the model as a list of allowed values. A large table gives the model a sample.
- For a `sensitive` field, a near match counts as a miss.

Tables come from two places. The project runtime configuration holds shared tables under `lookup_tables`. An agent can also declare `LOOKUP_TABLES:` in the file. The compiler marks that form as experimental with the warning `AGENT_LOOKUP_TABLE_EXPERIMENTAL`, and recommends the project tables. A table name uses lowercase letters, digits, and underscores. If a field names a table that does not exist, the runtime skips the check without an error.

## Common variations

### Agent-local lookup table

Declare the table in the agent when you cannot use project configuration. Expect the experimental warning.

```yaml
LOOKUP_TABLES:
  supported_countries:
    source: inline
    values: [Canada, Germany, Japan, Mexico, United Kingdom]
    case_sensitive: false
    fuzzy_match: true
```

This is a section snippet. Add it to the agent in the minimal example.

### Spoken numbers and phone numbers

Set `TYPE: number` or `TYPE: phone`. The runtime reads "oh" as 0 and "double" as a repeated digit. A phone becomes an E.164 number. See [Extract dates, numbers, locations, and free text](/agent-platform/abl/how-to/extract-common-entity-types).

### A synonym map for a choice

Use an enum entity when customers choose among a few options with many phrasings, such as delivery speeds.

## Verification

1. Run the validator. Expect no errors and no warnings.
2. Say "about 5 kilos, going to Germany". Expect `weight` to be about 11 pounds, and `country` to be `Germany`.
3. Say "Germnay". Expect the agent to ask "Did you mean Germany?" when the table has fuzzy matching on.
4. Say "Narnia". Expect an error and a new question.
5. In the trace, open the extraction resolution result for the raw phrase and the normalized value. Look for the lookup events `lookup_validation_failed`, `lookup_fuzzy_confirmation_requested`, and `lookup_fuzzy_accepted`.
6. Check the stored `_original.weight` value.

## Production readiness checklist

- Every conversion unit pair is on the supported list.
- Every conversion happens in a `FLOW` step.
- Every lookup table exists in the project, or in the agent, and its name matches.
- Fuzzy matching is on only where a wrong near match is harmless, because the customer confirms it.
- Tests cover a spoken number, a unit conversion, a near match, and a miss.
- Tables with more than 1000 values are tested for speed. The compiler warns `W480` for a large fuzzy table.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Setting `convert_to` in a top-level `GATHER` | The property parses there. | Collect in a `FLOW` step. |
| Converting a range or a list | The value looks numeric. | Convert a scalar, or convert after collection. |
| Expecting cleanup of text | "Normalize" suggests it. | Use an enum, a lookup, or `VALIDATE`. |
| Naming a missing lookup table | The name is a free string. | Create the table first. The check is skipped silently otherwise. |
| Expecting `fuzzy_match` to correct on its own | The name suggests it. | The customer confirms every near match. |
| Using an unsupported unit | The unit looks standard. | Check the supported list. The conversion is skipped. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The value is not converted | The field is in a top-level `GATHER`, or the unit pair is unsupported. | The field location and the units. |
| The lookup never rejects anything | The table name does not exist. | The table name. |
| The agent asks "Did you mean" for a good value | Fuzzy matching is on and the casing differs. | `case_sensitive` and the table values. |
| A spoken number is not read | No field in the agent is numeric. | The field types. |
| The compile warns `AGENT_LOOKUP_TABLE_EXPERIMENTAL` | The table is declared in the agent. | Move it to the project configuration. |

{{related}}

- [Use enum entities with synonyms](/agent-platform/abl/how-to/use-enum-entities-with-synonyms)
- [Extract dates, numbers, locations, and free text](/agent-platform/abl/how-to/extract-common-entity-types)
- [Extract pattern-based values like IDs and phone numbers](/agent-platform/abl/how-to/extract-pattern-based-values)
- [Define reusable entities for structured extraction](/agent-platform/abl/how-to/define-reusable-entities)
- [Collect information inside a FLOW step](/agent-platform/abl/how-to/collect-with-flow-gather)
