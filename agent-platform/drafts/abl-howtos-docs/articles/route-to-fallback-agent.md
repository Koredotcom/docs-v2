# How to route unclear or unsupported requests to a fallback agent

A fallback agent is not a dumping ground; it is a specialist for clarification, unsupported requests, conflicting intents, and safe recovery. The fallback can either complete the conversation or return a clarified signal so the supervisor can resume routing.

Use this when the supervisor cannot confidently choose a specialist or when the user asks for something outside the supported intent catalog.

## How the pattern works

1. The supervisor receives the user message and keeps ownership until a route matches.
2. Intent categories, runtime context, gathered values, or tool results provide the routing evidence.
3. `HANDOFF` entries are evaluated in the authored order and the matching child receives only the declared context.
4. If the child is temporary, it returns through `ON_RETURN`; if it owns the conversation, it remains the active agent.

## Design choices

- Keep clear deterministic or intent routes first.
- Use a quoted semantic fallback condition for vague, unsupported, or conflicting requests.
- Use `EXPECT_RETURN: true` with `ON_RETURN: resume_intent` when fallback clarification should re-enter normal routing.

## Validated example

```abl
SUPERVISOR: Fallback_Routing_Supervisor
GOAL: "Send clear requests to specialists and unclear requests to a fallback agent"

INTENTS:
  billing: "Billing and payment requests."
  technical_support: "Product troubleshooting requests."

HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer needs billing help."

  - TO: Technical_Support_Agent
    WHEN: intent.category == "technical_support"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, issue_summary]
      summary: "Customer needs technical support."

  - TO: Fallback_Triage_Agent
    WHEN: "the request is vague, unsupported, conflicting, or missing enough information to choose a specialist"
    EXPECT_RETURN: true
    CONTEXT:
      pass: [customer_id, conversation_summary]
      summary: "Clarify the customer's request and return if a specialist can be chosen."
    ON_RETURN:
      action: resume_intent
      MAP:
        clarified_intent: clarified_intent

AGENT: Billing_Agent
GOAL: "Resolve billing requests"

AGENT: Technical_Support_Agent
GOAL: "Resolve technical support requests"

AGENT: Fallback_Triage_Agent
GOAL: "Clarify unsupported or ambiguous requests"

MEMORY:
  SESSION:
    - clarified_intent

GATHER:
  clarified_intent:
    TYPE: string
    PROMPT: "Which area should handle this request?"
    REQUIRED: true

COMPLETE:
  - WHEN: clarified_intent IS SET
    RESPOND: "Thanks, I captured the clarified route."
```

## Common variations

- Clarify and return to the supervisor.
- Complete unsupported requests with a safe explanation.
- Escalate fallback after repeated clarification failures.

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

- Do not use literal `true` as the only route unless you intentionally want a catch-all.
- Do not map a clarified field unless the fallback child produces it.
- Do not let fallback hide missing intent coverage; use trace review to add real routes later.

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to decide when to delegate, hand off, or use a workflow
- How to pass context between agents
