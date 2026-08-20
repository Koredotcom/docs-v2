# How to route users by detected intent

Intent routing is the basic supervisor pattern: one entry agent classifies what the user is trying to do, then hands the conversation to the specialist that owns that work. In ABL, the executable routing surface is `HANDOFF`. `INTENTS` tells the classifier what categories exist, and each `HANDOFF` entry decides which specialist receives the conversation.

Use this when the user request belongs to one clear business domain such as billing, technical support, cancellation, or fallback triage.

## How the pattern works

1. The supervisor receives the user message and keeps ownership until a route matches.
2. Intent categories, runtime context, gathered values, or tool results provide the routing evidence.
3. `HANDOFF` entries are evaluated in the authored order and the matching child receives only the declared context.
4. If the child is temporary, it returns through `ON_RETURN`; if it owns the conversation, it remains the active agent.

## Design choices

- Use deterministic expressions such as `intent.category == "billing"` when the classifier writes a known category.
- Use quoted natural-language `WHEN` text when the route is semantic and should be reasoned over by the model.
- Pass only the fields the child needs; keep the summary short enough for a specialist to start without rereading the full transcript.

## Validated example

```abl
SUPERVISOR: Intent_Routing_Supervisor
GOAL: "Route customer requests to the specialist that owns the detected intent"

INTENTS:
  billing: "Questions about invoices, payment status, unpaid balances, or payment methods."
  technical_support: "Problems with product access, errors, setup, or troubleshooting."
  cancellation: "Requests to cancel, downgrade, or stop renewal."
  fallback: "Requests that do not clearly match a supported specialist."

HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, account_id, conversation_summary]
      summary: "Customer needs billing help."

  - TO: Technical_Support_Agent
    WHEN: intent.category == "technical_support"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, product_area, error_summary]
      summary: "Customer needs technical support."

  - TO: Retention_Agent
    WHEN: intent.category == "cancellation"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, account_id, cancellation_reason]
      summary: "Customer is asking to cancel or downgrade."

  - TO: General_Service_Agent
    WHEN: "the user request is unclear or does not match billing, technical support, or cancellation"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, conversation_summary]
      summary: "Customer needs general service triage."

AGENT: Billing_Agent
GOAL: "Resolve billing requests"

AGENT: Technical_Support_Agent
GOAL: "Resolve technical support requests"

AGENT: Retention_Agent
GOAL: "Handle cancellation and downgrade conversations"

AGENT: General_Service_Agent
GOAL: "Clarify and route unsupported requests"
```

## Common variations

- Add a fallback handoff for requests outside your supported intent set.
- Add `EXPECT_RETURN: true` only when the specialist should return to the supervisor.
- Add `CONTEXT.set` when a parent must normalize a routing value before passing it.

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

- Do not author a `ROUTING:` section; the parser points authors to `HANDOFF:` entries.
- Do not leave semantic prose unquoted if it can be mistaken for an expression.
- Do not route every unmatched request to a specialist just because it is the closest label.

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to decide when to delegate, hand off, or use a workflow
- How to pass context between agents
