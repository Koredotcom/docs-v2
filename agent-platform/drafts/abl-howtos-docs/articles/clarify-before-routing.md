# How to clarify before routing to a specialist agent

Clarification is the right pattern when the supervisor has too little information to select a specialist. Instead of guessing, gather one routing field, then use deterministic handoff conditions over the clarified answer.

Use this when a request is short, ambiguous, overloaded, or missing the one field that determines ownership.

## How the pattern works

1. The supervisor receives the user message and keeps ownership until a route matches.
2. Intent categories, runtime context, gathered values, or tool results provide the routing evidence.
3. `HANDOFF` entries are evaluated in the authored order and the matching child receives only the declared context.
4. If the child is temporary, it returns through `ON_RETURN`; if it owns the conversation, it remains the active agent.

## Design choices

- Gather the smallest routing field needed to make a decision.
- Route deterministically from the gathered value.
- Keep a semantic fallback for unsupported or still-unclear answers.

## Validated example

```abl
SUPERVISOR: Clarify_Before_Routing_Supervisor
GOAL: "Collect one routing decision before selecting a specialist"

GATHER:
  route_topic:
    TYPE: string
    PROMPT: "What do you need help with: billing, technical support, cancellation, or something else?"
    REQUIRED: true

HANDOFF:
  - TO: Billing_Agent
    WHEN: route_topic == "billing"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, route_topic]
      summary: "Customer clarified that this is a billing request."

  - TO: Technical_Support_Agent
    WHEN: route_topic == "technical support"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, route_topic]
      summary: "Customer clarified that this is a technical support request."

  - TO: General_Service_Agent
    WHEN: "the clarified route topic is unsupported or still unclear"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, route_topic]
      summary: "Customer still needs triage."

AGENT: Billing_Agent
GOAL: "Resolve billing requests"

AGENT: Technical_Support_Agent
GOAL: "Resolve technical support requests"

AGENT: General_Service_Agent
GOAL: "Clarify and route unsupported requests"
```

## Common variations

- Global gather before any specialist route.
- Fallback agent gathers clarification and returns to the supervisor.
- Multi-intent disambiguation when several valid routes are detected.

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

- Do not ask for a long form when one routing question is enough.
- Do not clarify after handing off if the supervisor owns routing.
- Do not forget fallback for answers outside the expected values.

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to decide when to delegate, hand off, or use a workflow
- How to pass context between agents
