# How to design supervisor routing priority and mandatory gates

A supervisor can combine hard gates and semantic routes. Hard gates are deterministic expressions that must run before the model chooses a business route, such as authentication. Semantic routes are natural-language or intent-based conditions that choose the best specialist after the mandatory gates are satisfied.

Use this when some routes must always be checked first: authentication, fraud review, regulatory consent, high-priority escalation, or channel safety gates.

## How the pattern works

1. The supervisor receives the user message and keeps ownership until a route matches.
2. Intent categories, runtime context, gathered values, or tool results provide the routing evidence.
3. `HANDOFF` entries are evaluated in the authored order and the matching child receives only the declared context.
4. If the child is temporary, it returns through `ON_RETURN`; if it owns the conversation, it remains the active agent.

## Design choices

- Put mandatory gates first in `HANDOFF` so they are evaluated before ordinary service routes.
- Use `EXPECT_RETURN: true` and `ON_RETURN: action: resume_intent` when the gate should return and let the supervisor reprocess the original user intent.
- Use quoted natural-language conditions for priority routes whose evidence comes from business context rather than a local ABL field.

## Validated example

```abl
SUPERVISOR: Priority_Routing_Supervisor
GOAL: "Apply mandatory gates before semantic routing"

INTENTS:
  account_help: "Account access, profile, or settings requests."
  billing: "Billing, invoice, or payment requests."
  support: "General product support requests."

MEMORY:
  SESSION:
    - is_authenticated

HANDOFF:
  - TO: Authentication_Agent
    WHEN: is_authenticated != true
    EXPECT_RETURN: true
    CONTEXT:
      pass: [customer_id]
      summary: "Authenticate the customer before handling account or billing data."
    ON_RETURN:
      action: resume_intent
      MAP:
        is_authenticated: is_authenticated

  - TO: Priority_Care_Agent
    WHEN: "the customer is platinum or strategic and asks for escalation"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, customer_tier, conversation_summary]
      summary: "High-priority customer asked for escalation."

  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer needs billing help."

  - TO: Account_Agent
    WHEN: intent.category == "account_help"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id]
      summary: "Customer needs account help."

  - TO: Support_Agent
    WHEN: intent.category == "support"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, conversation_summary]
      summary: "Customer needs product support."

AGENT: Authentication_Agent
GOAL: "Authenticate customers"

GATHER:
  is_authenticated:
    TYPE: boolean
    PROMPT: "Is the customer authenticated?"
    REQUIRED: true

COMPLETE:
  - WHEN: is_authenticated IS SET
    RESPOND: "Authentication result captured."

AGENT: Priority_Care_Agent
GOAL: "Handle priority escalations"

AGENT: Billing_Agent
GOAL: "Resolve billing requests"

AGENT: Account_Agent
GOAL: "Resolve account requests"

AGENT: Support_Agent
GOAL: "Resolve support requests"
```

## Common variations

- Authentication gate before account or billing specialists.
- VIP escalation route before ordinary queue routing.
- Compliance gate before claims, payment, or health-data specialists.

## Verification

- Parse the ABL and confirm there are no parser errors or parser warnings.
- Compile the ABL and confirm there are no compiler errors or compiler warnings.
- Test at least one matching utterance for each route and one utterance for the fallback or clarification path.
- Inspect traces for the selected target, condition result, passed context, and return behavior when `EXPECT_RETURN: true` is used.

## Production checklist

- Every specialist route has a clear owner and a concise context summary.
- Deterministic conditions use declared, gathered, tool-result, runtime, or returned fields.
- Semantic conditions are quoted as natural-language `WHEN` text.
- Temporary child agents produce every field mapped in `ON_RETURN`.
- Fallback behavior is explicit and does not hide missing intent coverage.

## Common mistakes

- Do not make the specialist responsible for checking a mandatory parent gate.
- Do not map returned fields unless the child agent actually declares or produces them.
- Do not use an unquoted expression for externally supplied values unless those fields are declared or set in the ABL.

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to decide when to delegate, hand off, or use a workflow
- How to pass context between agents
