# Improve intent matching with domain glossary and embeddings

Use this pattern when the supervisor routes some requests to the wrong agent, and you need to know which settings improve matching and which ones do nothing.

## Concept

The language model classifier is the only semantic matcher for routing in production. It reads your intent descriptions. You improve routing by improving what it reads and by tuning the thresholds around it.

Two settings that other tools use for matching are not active in this release:

- Embeddings and a domain glossary in the `NLU:` section compile, but nothing in the runtime reads them.
- `NLU:` `intents:` with `EXAMPLES` or `EXAMPLES_FILE` is parsed and ignored.

A top-level `GLOSSARY:` section is a compile error, `E105`.

Use the settings below instead.

| Lever | What it improves | Where |
| ----- | ---------------- | ----- |
| Intent descriptions | The text the classifier reads for each category. The best lever. | `INTENTS:` |
| Tool names and descriptions | The classifier also reads your domain tools. | `TOOLS:` |
| Agent goal and limitations | The scope that the classifier uses. | `GOAL`, `LIMITATIONS` |
| Keyword patterns | A rescue match when the classifier is unavailable. | `NLU:` `categories:` |
| Thresholds | How confident a match must be to route directly. | `EXECUTION.pipeline`, `intent.confidence` in a route |
| Entity synonyms and hints | Matching of values inside a request. | `ENTITIES:` |
| Extraction mode | Which engine extracts values. | Project runtime configuration |

## Minimal working example

A help desk supervisor writes specific descriptions, adds a keyword fallback, raises the short-circuit threshold, and gates the billing route on confidence.

The specialists are short stand-ins in the same project. Replace them with your real agents.

`agents/help-desk.agent.abl`

```abl
SUPERVISOR: Help_Desk
GOAL: "Route billing and shipping requests with clear intent definitions and a keyword fallback."

INTENTS:
  LEXICAL_FALLBACK: when_unavailable
  billing_help: "Invoices, double charges, refunds, or changing a payment method."
  shipping_help: "Where a parcel is, delivery dates, tracking numbers, or a wrong address."

NLU:
  categories:
    - NAME: billing_help
      PATTERNS: ["invoice", "refund", "double charge"]
    - NAME: shipping_help
      PATTERNS: ["where is my parcel", "track my order"]

EXECUTION:
  pipeline:
    enabled: true
    shortCircuit:
      enabled: true
      confidenceThreshold: 0.9

HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing_help" AND intent.confidence >= 0.8
    RETURN: false
    SUMMARY: "Customer needs billing help."
  - TO: Shipping_Agent
    WHEN: intent.category == "shipping_help"
    RETURN: false
    SUMMARY: "Customer needs shipping help."
```

`agents/billing-agent.agent.abl`

```abl
AGENT: Billing_Agent
GOAL: "Answer billing questions."
COMPLETE:
  - WHEN: true
    RESPOND: "Billing handled."
```

`agents/shipping-agent.agent.abl`

```abl
AGENT: Shipping_Agent
GOAL: "Answer shipping questions."
COMPLETE:
  - WHEN: true
    RESPOND: "Shipping handled."
```

## How it works

### Write descriptions the classifier can separate

- State what each intent includes and what it excludes. "Not delivery or tracking" helps more than a longer list of examples.
- Use distinct vocabulary in each description.
- Keep each description to one quoted line. See [Define intents with examples and keyword patterns](/agent-platform/abl/how-to/define-intents-with-examples).
- Write clear tool descriptions. The classifier reads them.

### Keyword patterns

Patterns in `NLU:` `categories:` are a fallback. They run when the classifier is off or unavailable, and only when `LEXICAL_FALLBACK` allows it.

- Matching is by whole word or phrase, without regard to case. There is no stemming. Add each plural form.
- A keyword match sets `intent.category` with a fixed confidence of 0.5. That is below the default short-circuit threshold of 0.85.
- A pattern does not guide the language model. It reaches the model only as an "Examples:" description when the intent has no description.

### Thresholds

| Setting | Default | Effect |
| ------- | ------- | ------ |
| `shortCircuit.confidenceThreshold` | 0.85 | Routes straight to the target when a single intent reaches it. Raise it to send more messages to model reasoning. |
| `intentBridge.guidedThreshold` | 0.5 | The lowest confidence for guided routing. |
| `intentBridge.programmaticThreshold` | 0.85 | Used for the out-of-scope decline only. |
| `intent.confidence >= x` in a route | none | A per-route gate. A low-confidence match falls to the next route. |
| `pipeline.keywordVeto.keywords` | none | Blocks the short-circuit when the message holds a listed word or a tool name. |

Write the pipeline keys in camelCase in an agent file. The project runtime configuration holds the master switch, the classifier model, and the range-checked values from 0 to 1.

### Entity matching

Entity values match better with `SYNONYMS`, `VALUES`, `DESCRIPTION`, and `EXTRACTION_HINTS`. The project extraction mode sets the stages. The values are `auto`, `pattern_ml`, `ml`, `pattern_llm`, `llm`, and `pattern`. The project extraction confidence threshold defaults to 0.5. See [Use enum entities with synonyms](/agent-platform/abl/how-to/use-enum-entities-with-synonyms).

### Not available

These are not configurable in ABL today:

- Few-shot examples for the classifier.
- Per-intent keywords for the model.
- An embedding index.
- A classifier prompt, temperature, or timeout.
- A per-language classifier.
- A glossary that reaches the model.

A decision-model provider tier can run before the classifier. It is project configuration only, it is off by default, and a tenant flag controls it.

## Common variations

### Add keyword patterns for a safety net

Add `NLU:` `categories:` for the intents you must never miss. Keep `LEXICAL_FALLBACK: when_unavailable`.

### Gate a sensitive route on confidence

Write `intent.confidence >= 0.8` in the `WHEN` of a route that has a cost, such as a refund. A weaker match falls to the next route, such as a clarification.

### Turn the keyword fallback off

Set `LEXICAL_FALLBACK: never` when a keyword match is worse than no match.

## Verification

1. Run the validator on all three files. Expect no errors and no warnings.
2. Build a test set of 20 real messages per intent, plus 10 off-topic messages.
3. Run each message. In the trace, open `pipeline_classify` and record the category and confidence.
4. Open `pipeline_routing_resolve` to see which route matched.
5. Open `llm_call` for the raw classifier reply when a result looks wrong.
6. Change one description or threshold. Run the set again. Compare.
7. With the classifier off, say "refund please". Expect `pipeline_intent_bridge` with the source `native_lexical`.

The platform has no ABL setting to run intent accuracy tests. Keep your test set and compare trace results by hand or with your own script.

## Production readiness checklist

- Every description separates its intent from the closest one.
- Every intent has a test set, and the results are recorded.
- The short-circuit threshold is set from test data.
- Costly routes have an `intent.confidence` gate and a clarification route after them.
- Keyword patterns exist for the intents that must not be missed, in singular and plural forms.
- No setting in the `NLU:` section that the runtime ignores is relied on.
- Pipeline keys are camelCase.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Adding `EXAMPLES` or an embeddings block to `NLU:` | The reference lists them. | They have no runtime effect. Improve the descriptions. |
| Adding a `GLOSSARY:` section | Other tools have one. | It is a compile error. |
| Expecting patterns to guide the model | Patterns look like hints. | They are a fallback. Put meaning in the description. |
| Lowering thresholds to fix a miss | A lower value routes more. | Fix the description first. Test both sides of the threshold. |
| Expecting keyword matching to handle plurals | Search engines do. | Add each form. |
| Tuning on three examples | A few cases look enough. | Test at least 20 messages per intent. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The wrong agent gets a request | Two descriptions overlap. | `pipeline_classify` and the descriptions. |
| Many messages go to model reasoning | The short-circuit threshold is high. | `pipeline_tiered_action`. |
| A route never matches | Its confidence gate is too high. | `intent.confidence` in `pipeline_routing_resolve`. |
| Keywords never fire | The classifier is available, or `LEXICAL_FALLBACK` is `never`. | The fallback setting and the pipeline. |
| The compile warns `W463` | An intent line is unquoted, hyphenated, or has a comment. | The `INTENTS:` lines. |
| An entity value is not matched | The phrase is not a value, a synonym, or a hint. | The entity definition. |

## Related HowTos

- [Define intents with examples and keyword patterns](/agent-platform/abl/how-to/define-intents-with-examples)
- [Detect multiple intents in one user message](/agent-platform/abl/how-to/detect-multiple-intents)
- [Use enum entities with synonyms](/agent-platform/abl/how-to/use-enum-entities-with-synonyms)
- [Configure EXECUTION.pipeline models, modes, thresholds, and fallbacks](/agent-platform/abl/how-to/configure-agent-execution-pipeline)
- [Route users by detected intent](/agent-platform/abl/how-to/route-by-user-intent)
- [Debug routing decisions in traces](/agent-platform/abl/how-to/debug-routing-traces)
