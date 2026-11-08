# Silently extract values without asking the user

Use this pattern when the customer may state a value on their own, such as a filter or an email address, and the agent must capture it without asking a question.

## Concept

A silent field is a `GATHER` field that the agent never asks for. The runtime reads the customer's messages and fills the field when it finds a matching value. If the customer never mentions it, the field stays empty and the conversation goes on.

You make a field silent with `prompt_mode: extract_only`. The default is `ask`.

| Setting | What the customer sees |
| ------- | ---------------------- |
| `prompt_mode: ask` (default) | The agent asks for the field when it is missing. |
| `prompt_mode: extract_only` | No question. The runtime fills the field only from what the customer says. |

A silent field needs no `prompt`. Add a `description` so the extractor knows what the value means. Add `options`, `extraction_hints`, or `extraction_pattern` to improve accuracy.

Always set `required: false` on a silent field. A field is required by default. A required silent field blocks completion, and the step has no question to ask for it.

## Minimal working example

A claims assistant asks for the member ID. It also listens for a claim status and a minimum amount. It never asks for them.

`agents/claims-filter-intake.agent.abl`

```yaml
AGENT: Claims_Filter_Intake

GOAL: "Collect a member ID and apply claim filters the caller mentions without asking for them."

PERSONA: "You are a concise claims assistant."

FLOW:
  entry_point: collect_member
  steps:
    - collect_member
    - confirm_request

  collect_member:
    REASONING: false
    GATHER:
      - member_id:
          type: string
          required: true
          prompt: "What is the member ID?"
      - claim_status:
          type: string
          required: false
          prompt_mode: extract_only
          description: "Claim status the caller wants to filter by."
          options: [submitted, denied, paid]
      - min_amount:
          type: string
          required: false
          prompt_mode: extract_only
          description: "Minimum claim amount the caller mentions, if any."
    THEN: confirm_request

  confirm_request:
    REASONING: false
    RESPOND: "Looking up claims for member {{member_id}}. Status filter: {{claim_status}}. Minimum amount: {{min_amount}}."
    THEN: COMPLETE
```

Variable sources:

- `member_id` is asked. The customer answers the prompt.
- `claim_status` and `min_amount` are filled only when the customer mentions them. They can stay empty.

## How it works

1. The step asks only for the customer-facing fields that are missing. Silent fields are left out of the question.
2. On each customer message the runtime tries to extract values for all active fields, silent fields included.
3. A silent field stays in the extraction scope even when the agent is collecting a different step. A top-level silent field is extracted in every `FLOW` step.
4. The runtime does not copy the whole message into a silent field.
5. Extracted values carry the source `inference` and the reason `ner_extracted`, and they are marked as grounded in the customer's words.

How the runtime extracts:

- `extraction_pattern` with an optional `extraction_group` (default 0) is the deterministic path. It uses a safe regular expression engine with no back-references and no lookaround. An unsafe pattern fails compilation.
- `strategy` sets the engine for one field: `auto`, `ml`, `llm`, `hybrid`, or `pattern`. `hybrid` is an alias of `auto`. A field without a strategy follows the project extraction mode. An unknown value is a compile error `E170`.
- The extractor needs a model client wired. Without one, a scripted flow falls back to plain collection.

## Common variations

### Silent field on a reasoning agent

A top-level `GATHER` extracts the silent field the same way. The reasoning agent's prompt still lists every field, including silent ones, as information to gather. The prompt says to ask for missing required fields. To keep the model from asking, set `required: false` and say so in the `GOAL`, as the example does.

`agents/order-support-intake.agent.abl`

```yaml
AGENT: Order_Support_Intake

GOAL: "Help a customer with an order. Capture the order number and any email they state without asking for the email."

PERSONA: "You are a concise support assistant."

GATHER:
  order_number:
    prompt: "What is your order number?"
    type: string
    required: true

  contact_email:
    prompt: "Contact email for the order."
    type: email
    required: false
    prompt_mode: extract_only

COMPLETE:
  - WHEN: order_number IS SET
    RESPOND: "Thanks. I have order {{order_number}} and email {{contact_email}} on file."
```

### Capture with a pattern

Add `extraction_pattern` when the value has a fixed shape, such as a ticket ID. The pattern needs no model call.

```yaml
GATHER:
  - ticket_id:
      type: string
      required: false
      prompt_mode: extract_only
      extraction_pattern: "TKT-[0-9]{6}"
      extraction_group: 0
```

This is a section snippet for a `FLOW` step. Place it inside a step.

### Router-derived routing state

A router can combine `infer: true` with `prompt_mode: extract_only` for a value that only its route conditions read. The router re-derives such a value on every routing call. See [Infer values from conversation context](/agent-platform/abl/how-to/infer-values-from-context).

## Verification

1. Run the validator. Expect no errors and no warnings.
2. Say "Look up member 4471". Expect the agent to ask nothing about the status or amount.
3. Say "Look up member 4471, denied claims over 500". Expect `claim_status` and `min_amount` to fill.
4. Check the final reply. The unmentioned filters must be empty in case 2.
5. In the trace, open the `dsl_collect` events. The `extracted` field lists the silent values.
6. Open the `gather_slot_ledger` events. Silent fields must not appear in `missingFields` when `required: false`.

## Production readiness checklist

- Every silent field sets `required: false`. On a reasoning agent, the `GOAL` also says not to ask for it.
- Every silent field has a `description`, and an enum field has `options`.
- A downstream step handles an empty silent field.
- A model client is configured for the agent.
- Tests cover a customer who states the value, a customer who does not, and a customer who states a different value later.
- Silent fields that hold personal data also follow [Collect sensitive or PII fields safely](/agent-platform/abl/how-to/collect-sensitive-pii-fields).

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Leaving out `required: false` | The field is silent, so it looks optional. | Write `required: false`. A required silent field blocks completion. |
| Expecting a question for a missing silent field | The field is in `GATHER`. | Use `prompt_mode: ask` if you need the question. |
| Expecting `extract_only` to hide the field from a reasoning agent | A `FLOW` step never asks for it. | Add a `GOAL` or `PERSONA` line that says not to ask. The model still sees the field in its list. |
| Typing a wrong `prompt_mode` value | The compiler accepts any text. | Use `ask` or `extract_only`. An unknown value is treated as `ask`. |
| Writing an unsafe regular expression | Back-references and lookaround are common. | Use a plain pattern. The compile fails otherwise. |
| Using the silent field in a reply without a fallback | The value can be empty. | Test the empty case, or add a condition. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| A flow step answers "Please provide the required information to continue." | A required silent field is missing and nothing else can be asked. | Set `required: false`. The trace shows `missing_extract_only_context`. |
| The silent field never fills | The customer's wording does not match, or no model client is wired. | `description`, `options`, `extraction_hints`, and the agent model setup. |
| The field fills with the wrong value | The description is too broad. | Narrow the `description` and add `extraction_hints`. |
| A reasoning agent asks for the silent field | The prompt lists the field, and a required field is reported as missing with the instruction to ask for it. | `required: false`, and a `GOAL` line that says not to ask for it. |
| The compile fails with `E170` | `strategy` has an unknown value. | Use `auto`, `ml`, `llm`, `hybrid`, or `pattern`. |

{{related}}

- [Collect information with global GATHER](/agent-platform/abl/how-to/collect-with-global-gather)
- [Collect information inside a FLOW step](/agent-platform/abl/how-to/collect-with-flow-gather)
- [Collect required and optional fields from users](/agent-platform/abl/how-to/collect-required-and-optional-fields)
- [Progressively collect fields only when needed](/agent-platform/abl/how-to/progressively-collect-fields)
- [Infer values from conversation context](/agent-platform/abl/how-to/infer-values-from-context)
- [Collect sensitive or PII fields safely](/agent-platform/abl/how-to/collect-sensitive-pii-fields)
