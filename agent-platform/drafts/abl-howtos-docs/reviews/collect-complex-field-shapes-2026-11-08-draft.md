# Collect lists, ranges, preferences, and attachments

Use this pattern when one value is not enough: a list of items, a low and high range, or a file the customer uploads.

## Concept

A `GATHER` field holds one scalar by default. Three properties change its shape. A separate construct handles files.

| You need | Use | Stored shape |
| -------- | --- | ------------ |
| Several items | `list: true` | An array |
| A low and a high | `range: true` | An object with `low` and `high` |
| A choice from a fixed set | `options`, or `entity_ref` | One of the values |
| Preferences | See [Preferences](#preferences) | Not a gather shape |
| A file or image | `AWAIT_ATTACHMENT` in a `FLOW` step | The attachment ID, as text |

Use only one shape property on a field. A field with both `list` and `range` compiles without a warning, and the list wins.

Write `list: true` and `range: true` in lowercase. `yes` and `True` read as `false` without an error.

## Minimal working example

A hotel search collects a nightly budget range, a list of amenities, and a room type. The room type uses a reusable entity.

The search tool is a project-local assumption. Bind it to your hotel search service in Project Tools.

`agents/hotel-search.agent.abl`

```abl
AGENT: HotelSearch
GOAL: "Collect hotel search criteria: nightly budget range, amenities, and room type."

ENTITIES:
  room_type:
    TYPE: enum
    VALUES: [single, double, suite]
    SYNONYMS:
      single: [solo, one bed]
      double: [two beds, twin]

TOOLS:
  search_hotels(budget_low: number = null, budget_high: number = null, amenities: string = null, room_type: string = null) -> {results: array}
    description: "Searches hotels that match the collected criteria."
    confirm: never

GATHER:
  budget:
    type: number
    prompt: "What is your nightly budget range?"
    range: true
    semantics:
      unit: USD
  amenities:
    type: string
    prompt: "Which amenities do you need? Name as many as you like."
    list: true
    required: false
  room:
    entity_ref: room_type
    prompt: "Which room type do you want?"
  rating:
    type: enum
    options: [any, three_star, four_star, five_star]
    prompt: "What minimum star rating do you want?"
    required: false

COMPLETE:
  - WHEN: budget.low IS SET AND budget.high IS SET AND room IS SET
    RESPOND: "Searching {{room}} rooms from {{budget.low}} to {{budget.high}} USD per night."
```

Variable sources:

- `budget`, `amenities`, `room`, and `rating` are `GATHER` fields. The customer supplies them.
- `COMPLETE` reads `budget.low`, `budget.high`, and `room`.

## How it works

How each shape is stored and checked:

- A list is an array. A single value is wrapped into a one-item array. A text value is split on commas, so "pool, gym" gives two items. A semicolon does not split.
- A range is an object with `low`, `high`, or both. At least one end is needed. Each end follows the field type, so a currency range of "$100 to $300" gives `100` and `300`. The runtime accepts `low` greater than `high`.
- An enum field accepts a value that matches an option exactly, then ignoring case, then through a synonym. It does not match approximately.
- An `entity_ref` field inherits the entity type, values, synonyms, and `sensitive` setting. A field that sets `entity_ref` and also `type` or `options` is a compile error `GATHER_ENTITY_REF_CONFLICT`. An unknown entity is a compile error `GATHER_ENTITY_REF_UNRESOLVED`.

How to read the value:

| In a template or condition | Result |
| -------------------------- | ------ |
| `{{budget.low}}` | `100` |
| `{{amenities}}` | The array as multi-line JSON, not a comma list. |
| `{{amenities[0]}}` or `{{amenities.length}}` | The first item, or the count. |
| `budget.low IS SET AND budget.high IS SET` | Tests both ends. `budget IS SET` is true when only one end is set. |
| `"pool" IN amenities` | Tests list membership. |
| `amenities CONTAINS "pool"` | Always false. `CONTAINS` works on text only. |
| `amenities IS SET` | True for an empty list. Test `amenities.length > 0`. |

A `{{#each}}` block does not iterate a list of strings. It works for a list of objects only. There is no join filter.

How the semantics block helps:

- `temporal: future` or `past` limits a date field to one side of today.
- `lookup` checks the value against a lookup table. A near match becomes a confirmation.
- `unit` with `convert_to` converts a number inside a `FLOW` step, and keeps the original. It does not convert in a top-level `GATHER`, and it skips lists and ranges.
- `format` and `components` guide extraction only. They do not create a structured object.
- `locale` and `kore_entity_type` carry metadata and have no effect on collection.

Do not put a `validate` rule on a list or range field. The rule applies to the whole value. A list with a pattern, and a range with a range rule, reject valid answers. The same applies to a multi-select enum: an enum rule from `options` accepts one value, so a list of two options fails.

## Common variations

### Range of dates and a unit conversion in a FLOW step

A `FLOW` step can convert units and collect a date range.

`agents/shipment-quote.agent.abl`

```abl
AGENT: ShipmentQuote
GOAL: "Collect parcel weight, package types, and a travel window to quote a shipment."

TOOLS:
  quote_shipment(weight_lbs: number = null, package_types: string = null, window_start: string = null, window_end: string = null) -> {price: number}
    description: "Returns a shipping price for the collected parcel details."
    confirm: never

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
      - package_types:
          type: enum
          options: [box, envelope, tube]
          prompt: "Which package type do you use?"
          required: true
      - ship_window:
          type: date
          prompt: "Between which dates can the parcel ship?"
          required: true
          range: true
          semantics:
            temporal: future
    THEN: quote

  quote:
    REASONING: false
    CALL: quote_shipment
      WITH:
        weight_lbs: "{{weight}}"
        package_types: "{{package_types}}"
        window_start: "{{ship_window.low}}"
        window_end: "{{ship_window.high}}"
      AS: quote_result
    THEN: done

  done:
    REASONING: false
    RESPOND: "Your quote is {{quote_result.price}}."
```

The converter supports temperature, distance, weight, time, volume, and currency units. A pair it does not support is skipped without an error.

### Enum values

Write enum options in the block form or without quotes. A one-line list with quotes keeps the quote marks in the stored values. `validate: enum(a, b)` splits on commas. A pipe makes one value.

### Preferences

`preferences: true` compiles, but it does not store a category object in the field. The field does not hold `accept`, `desire`, `avoid`, and `refuse` lists. A reasoning agent also scans each customer message for stated preferences. It saves them to memory under `preferences.accept`, `preferences.desire`, `preferences.avoid`, and `preferences.refuse` when the agent has a memory store. That scan runs on top-level `GATHER` fields only.

To keep preferences in the conversation, collect them as a `list: true` field for each category, or use `MEMORY` and `REMEMBER`.

### Attachments in a FLOW step

Use `AWAIT_ATTACHMENT` to wait for an upload. The step stores the first attachment ID in the named variable. A tool parameter named `attachment_id` is bound and checked against the available attachments.

`agents/id-upload.agent.abl`

```abl
AGENT: IdUpload
GOAL: "Collect a photo of the customer's ID and submit it for review."

TOOLS:
  submit_id_photo(attachment_id: string = null) -> {status: string}
    description: "Submits the uploaded ID photo for review."
    confirm: never

MEMORY:
  session:
    - id_photo
      TYPE: string
      DESCRIPTION: "ID of the uploaded ID photo."

FLOW:
  start -> ask_photo -> submit -> done

  start:
    REASONING: false
    SET: id_photo = ""
    THEN: ask_photo

  ask_photo:
    REASONING: false
    AWAIT_ATTACHMENT:
      name: id_photo
      prompt: "Please upload a photo of your ID."
      category: image
      required: true
      timeout: 300
      on_timeout: skipped
    THEN: submit

  submit:
    REASONING: false
    CALL: submit_id_photo
      WITH:
        attachment_id: "{{id_photo}}"
      AS: submit_result
    THEN: done

  done:
    REASONING: false
    RESPOND: "Thanks. I received your ID photo."

  skipped:
    REASONING: false
    RESPOND: "I did not receive a photo. You can start again at any time."
```

The `SET` in the `start` step gives the compiler a producer for `id_photo`. Without it, the compiler warns that nothing produces the variable.

Rules for `AWAIT_ATTACHMENT`:

- `category` is `image`, `document`, `audio`, or `video`. A wrong category is a compile error `INVALID_AWAIT_ATTACHMENT`.
- A file of the wrong category makes the step ask again. The trace outcome is `category_mismatch`.
- With `required: false`, a text message sets the variable to `null` and the flow moves on.
- With `timeout` in seconds and `on_timeout`, the flow moves to that step. Without `on_timeout`, the step replies that the upload timed out and keeps waiting.

### The ATTACHMENTS section

The `ATTACHMENTS:` section declares upload fields with a category, a size limit, allowed types, and processing flags. The keys are `prompt`, `category`, `required`, `max_size_mb`, `allowed_types`, `ocr_enabled`, `transcription_enabled`, and `key_frame_extraction`. Keys such as `allowed_mime_types` and `ocr` are ignored without an error. A category outside the four valid values is also accepted silently.

The section is a declaration only. The runtime does not read its size limit, allowed types, or processing flags. Uploads are limited by the project and tenant attachment settings: whether attachments are enabled, the maximum file size, the maximum files per session, the allowed MIME types, the PII policy, and the processing mode. Set these in the project settings for attachments. Use `AWAIT_ATTACHMENT` with a `category` to check the kind of file inside a flow.

## Verification

1. Run the validator on each file. Expect no errors and no warnings.
2. Say "Between 100 and 300 dollars, with a pool and a gym, in a double". Expect `budget.low` 100, `budget.high` 300, two amenities, and room `double`.
3. Say "around 200". Expect `COMPLETE` not to fire until both ends are set.
4. In the shipment example, say "5 kg". Expect the converted weight in pounds in the tool call.
5. In the upload example, send a document when an image is required. Expect the step to ask again.
6. Let the upload time out. Expect the `skipped` reply.
7. In the trace, open the `dsl_collect` events for the extracted values. Open the `await_attachment` events for the upload outcomes.

## Production readiness checklist

- Each field uses one shape property.
- No list or range field has a `validate` rule.
- Conditions test both ends of a range, and test `.length` for a list.
- Templates do not print a raw list. They print items, or the count.
- Enum options are in the block form, or unquoted.
- Each upload step has a timeout and an `on_timeout` route.
- Upload type, size, and count limits are set in the project attachment settings and tested.
- Tests cover a one-item list, an empty list, a one-ended range, and a reversed range.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Writing `list: yes` | Other languages accept it. | Write lowercase `true`. |
| Combining `list` and `range` | Both seem to apply. | Use one. |
| Adding `validate` to a list field | Validation looks harmless. | Remove it. The rule applies to the whole list. |
| Using `CONTAINS` on a list | It reads naturally. | Write `"item" IN list`. |
| Reading `range IS SET` | It looks like a full check. | Test `low` and `high`. |
| Expecting `preferences: true` to fill four lists | The documentation of the property suggests it. | Use list fields or `REMEMBER`. |
| Expecting unit conversion in a top-level `GATHER` | The property parses there. | Collect in a `FLOW` step. |
| Writing `allowed_mime_types` or `ocr` | Names look obvious. | Use `allowed_types` and `ocr_enabled`. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| A valid list is rejected | A `validate` rule or an enum rule applies to the whole list. | Remove `validate`. For a multi-select enum, collect as `string` with `list: true`. |
| A range stays unset | The customer gave one end, or the field also sets `list`. | The stored object and the shape properties. |
| A list prints as JSON | The template prints the whole array. | Print an item, or `.length`. |
| `{{#each}}` prints nothing | The list holds strings. | Use an index, or a list of objects. |
| An enum value is rejected | The value is not an exact or synonym match. | `options`, `SYNONYMS`, and the customer wording. |
| The compile fails with `GATHER_ENTITY_REF_CONFLICT` | `entity_ref` is set with `type` or `options`. | Remove `type` and `options`. |
| The compile warns that `id_photo` has no producer | Nothing sets the attachment variable. | Declare it in `MEMORY` and add a `SET` in an earlier step. |

## Related HowTos

- [Collect information with global GATHER](/agent-platform/abl/how-to/collect-with-global-gather)
- [Collect information inside a FLOW step](/agent-platform/abl/how-to/collect-with-flow-gather)
- [Collect required and optional fields from users](/agent-platform/abl/how-to/collect-required-and-optional-fields)
- [Collect sensitive or PII fields safely](/agent-platform/abl/how-to/collect-sensitive-pii-fields)
- [Collect multiple fields across a natural conversation](/agent-platform/abl/how-to/collect-multiple-fields-naturally)
