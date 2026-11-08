# Define intents with examples and keyword patterns

Use this pattern when a supervisor must classify what the customer wants, and you need to write the definitions that drive that classification.

## Concept

An intent is a category the supervisor can route on. You declare it in the `INTENTS:` section. The supervisor's handoff rules then test `intent.category`.

Two things decide how well classification works:

| Source | What it gives the classifier | Where you write it |
| ------ | ---------------------------- | ------------------ |
| The intent description | The text the language model reads for each category. This is the main lever. | `INTENTS:` |
| Keyword patterns | A fallback match on exact words, used only when the classifier is unavailable. | `NLU:` `categories:` |

Know these limits before you write intents:

- `INTENTS:` takes a category name and an optional description. It has no examples, keywords, patterns, or priority properties.
- The language model sees the category name and the description. It never sees patterns.
- Keyword patterns come only from `NLU:` `categories:`.
- `NLU:` `intents:` (with `EXAMPLES`, `EXAMPLES_FILE`, and intent-level `PATTERNS`) is accepted by the compiler, but the runtime does not use it.

Write your examples inside the description, as phrases the model can learn from.

## Minimal working example

A front desk supervisor classifies two intents with descriptions and keyword patterns. It routes each intent to a specialist.

The specialists are short stand-ins in the same project. Replace them with your real agents.

`agents/support-front-desk.agent.abl`

```abl
SUPERVISOR: Support_Front_Desk
GOAL: "Identify what the customer needs and route to the right specialist."

PERSONA: |
  Calm front desk coordinator. Keep questions short.

INTENTS:
  LEXICAL_FALLBACK: when_unavailable
  billing_question: "Questions about invoices, charges, refunds, or payment methods"
  order_status: "Where an order is, delivery dates, tracking"
  human_help

NLU:
  categories:
    - NAME: billing_question
      PATTERNS: ["invoice", "refund", "double charge"]
    - NAME: order_status
      PATTERNS: ["where is my order", "track my package"]

HANDOFF:
  - TO: Billing_Specialist
    WHEN: intent.category == "billing_question"
    CONTEXT:
      summary: "Customer has a billing question."
    RETURN: false
  - TO: Order_Specialist
    WHEN: intent.category == "order_status"
    CONTEXT:
      summary: "Customer asks about an order."
    RETURN: false
```

`agents/billing-specialist.agent.abl`

```abl
AGENT: Billing_Specialist
GOAL: "Answer billing questions for the verified account."

COMPLETE:
  - WHEN: true
    RESPOND: "Billing handled."
```

`agents/order-specialist.agent.abl`

```abl
AGENT: Order_Specialist
GOAL: "Answer order status questions."

COMPLETE:
  - WHEN: true
    RESPOND: "Order handled."
```

Variable sources:

- `intent.category` is set by the classifier, or by the keyword fallback.
- `human_help` has no description and no route. Add a route if the supervisor must act on it.

## How it works

Syntax of `INTENTS:`:

| You write | Result |
| --------- | ------ |
| `name: "description"` | A category with a description. Single or double quotes work. |
| `name` on its own | A category with no description. |
| `- name: "description"` | The dash list form also works. |
| `name: description` without quotes | Warning `W463`. The category is dropped. |
| A name with a hyphen, such as `billing-help` | Warning `W463`. The category is dropped. |
| A trailing comment on the line | Warning `W463`. The category is dropped. |
| A block with `DESCRIPTION:`, `EXAMPLES:`, or `KEYWORDS:` under the name | Warning `W463` for each line. `DESCRIPTION:` is accepted as a category named `DESCRIPTION`. |
| `LEXICAL_FALLBACK: never`, `when_unavailable`, or `always` | Sets the keyword fallback policy. The default is `when_unavailable`. An invalid value gives `W460`. |
| A duplicate category | Warning `W462`. The first one wins. |
| Two `INTENTS:` sections | They merge. |

If every entry is invalid, the section silently becomes "inferred" mode. In that mode the compiler builds the category list from the values in your `WHEN` conditions, adds `greeting`, `farewell`, and `escalation`, and stops checking category spelling.

Syntax of the `NLU:` `categories:` list:

- Write `- NAME: category` and `PATTERNS: [...]` with uppercase keys. Lowercase keys are ignored.
- Write the pattern list on one line. A multi-line pattern list is silently empty.
- The `NAME` must match a category in `INTENTS:`, or it adds a new category.
- A trailing comment on `PATTERNS` corrupts the list. A comma inside a quoted pattern splits it.
- If an `INTENTS:` entry has no description, the compiler writes one from the patterns, as "Examples: invoice, refund".

How classification runs:

1. The classifier reads the message and the categories, with their descriptions, and returns a category and a confidence.
2. A category that is not in the list is dropped.
3. The supervisor evaluates its `HANDOFF` rules in order. The first true `WHEN` wins. `intent.category` and `intent.confidence` are available in the condition.
4. With a pipeline short-circuit, a single high-confidence category routes directly. See [Configure EXECUTION.pipeline models, modes, thresholds, and fallbacks](/agent-platform/abl/how-to/configure-agent-execution-pipeline).

The keyword fallback:

- It runs when the classifier is off or unavailable, subject to `LEXICAL_FALLBACK`.
- It matches whole words and phrases, without regard to case. It does not stem words or match plurals. "cancel order" does not match "cancel orders".
- When several patterns match, an exact match wins, then more words, then longer text, then the category declared first.
- Its confidence is a fixed 0.5. That is below the default short-circuit threshold of 0.85, so a keyword match sets `intent.category` for the routes but does not short-circuit.
- With `LEXICAL_FALLBACK: never`, no keyword rescue runs.

The platform has no priority setting for intents. Overlap is settled by the order of `HANDOFF` rules, and by the keyword ordering above.

## Common variations

### Write examples in the description

Put contrasting examples in the description. Name what the intent includes and what it does not.

```abl
INTENTS:
  billing_question: "Invoices, double charges, refunds, or changing a payment method. Not delivery or tracking."
  order_status: "Where a parcel is, delivery dates, tracking numbers. Not refunds."
```

This is a section snippet. Replace the `INTENTS:` section in the minimal example.

### Use only a description, no keywords

Leave out the `NLU:` section when the classifier is always on. Keywords matter only for the fallback.

### Gate a route on confidence

Add a condition to a route, such as `intent.category == "billing_question" AND intent.confidence >= 0.8`. A low-confidence match then falls to the next route.

### Declare categories from routes

An agent with no `INTENTS:` and no `NLU:` section infers categories from its `WHEN` values. Prefer an explicit `INTENTS:` section, because the compiler then warns about a mistyped category with `UNDECLARED_INTENT_CATEGORY`.

## Verification

1. Run the validator on all three files. Expect no errors and no warnings.
2. Say "I was charged twice for invoice 22". Expect a handoff to `Billing_Specialist`.
3. Say "where is my order". Expect a handoff to `Order_Specialist`.
4. In the trace, open the `pipeline_classify` event for the category and confidence. Open `pipeline_routing_resolve` for the rule that matched.
5. With the classifier off, say "refund please". Expect the `pipeline_intent_bridge` event with the source `native_lexical` and the matched pattern.
6. Say "refunds please" in the same setup. Expect no keyword match, because plurals do not match.

## Production readiness checklist

- Every description is quoted, one line, and states what the intent excludes.
- No category name contains a hyphen.
- No line has a trailing comment.
- `NLU:` `categories:` uses uppercase keys and one-line pattern lists.
- Every category used in a `WHEN` is declared. The compiler warns `UNDECLARED_INTENT_CATEGORY` otherwise.
- `LEXICAL_FALLBACK` is set on purpose.
- Tests cover a clear request, an overlapping request, an off-topic request, and a plural keyword.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Adding `EXAMPLES:` or `KEYWORDS:` under an intent | Other NLU tools have them. | Put examples in the description. Put keywords in `NLU:` `categories:`. |
| Leaving the description unquoted | YAML allows it. | Quote it. An unquoted description drops the category. |
| Using `NLU:` `intents:` for examples | The section looks like the place. | The runtime ignores it. |
| Expecting keywords to guide the model | Patterns look like hints. | The model reads the description only. |
| Expecting priority between intents | Routing tools have it. | Order the `HANDOFF` rules. |
| Writing a multi-line `PATTERNS` list | Lists look natural. | Write `PATTERNS: [a, b]` on one line. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The compile warns `W463` | A line in `INTENTS:` is unquoted, hyphenated, or has a comment. | The line named in the warning. |
| The compile warns `UNDECLARED_INTENT_CATEGORY` | A `WHEN` names a category that is not declared, or its entry was dropped. | The `INTENTS:` entries. |
| The wrong specialist gets the request | Two descriptions overlap, or the route order is wrong. | The descriptions and the `HANDOFF` order. |
| Keywords never fire | The classifier is available, or `LEXICAL_FALLBACK` is `never`. | The fallback setting and the pipeline. |
| A plural does not match | Keyword matching has no stemming. | Add each form to `PATTERNS`. |
| A category is missing from the model's list | The entry was dropped by `W463`. | The warnings. |

## Related HowTos

- [Route users by detected intent](/agent-platform/abl/how-to/route-by-user-intent)
- [Design a supervisor that routes users to specialist agents](/agent-platform/abl/how-to/design-supervisor-routing-agent)
- [Detect multiple intents in one user message](/agent-platform/abl/how-to/detect-multiple-intents)
- [Improve intent matching with domain glossary and embeddings](/agent-platform/abl/how-to/improve-intent-matching)
- [Configure EXECUTION.pipeline models, modes, thresholds, and fallbacks](/agent-platform/abl/how-to/configure-agent-execution-pipeline)
