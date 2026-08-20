# How to route by tool result, profile lookup, or remembered state

Some routes cannot be selected from the user utterance alone. The supervisor first calls a lookup tool, binds the result, then routes using deterministic conditions over that result. This is the pattern for premium routing, existing-case routing, risk routing, entitlement routing, and remembered preference routing.

Use this when routing depends on customer profile, case status, fraud risk, policy coverage, entitlement, remembered preference, or any state loaded before the handoff.

## How the pattern works

1. The supervisor receives the user message and keeps ownership until a route matches.
2. Intent categories, runtime context, gathered values, or tool results provide the routing evidence.
3. `HANDOFF` entries are evaluated in the authored order and the matching child receives only the declared context.
4. If the child is temporary, it returns through `ON_RETURN`; if it owns the conversation, it remains the active agent.

## Design choices

- Declare the lookup tool with parameter descriptions and `side_effects: false` for read-only routing enrichment.
- Bind tool output with `AS` and route against fields such as `profile.fraud_risk`.
- Prefer deterministic expressions when the lookup returns structured values.

## Validated example

```abl
SUPERVISOR: Tool_Result_Routing_Supervisor
GOAL: "Look up customer state before selecting a specialist"

TOOLS:
  lookup_customer_profile(customer_id: string) -> object
    description: "Return customer tier, risk, and open-case status for routing."
    side_effects: false
    confirm: never
    params:
      customer_id:
        description: "Customer identifier to look up."

ON_START:
  CALL: lookup_customer_profile
    WITH:
      customer_id: customer_id
    AS: profile
  SET:
    profile_tier = profile.tier
    has_open_case = profile.has_open_case
    fraud_risk = profile.fraud_risk

HANDOFF:
  - TO: Fraud_Review_Agent
    WHEN: profile.fraud_risk == "high"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, profile_tier, fraud_risk]
      summary: "Customer profile indicates high fraud risk."

  - TO: Existing_Case_Agent
    WHEN: profile.has_open_case == true
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, profile_tier, has_open_case]
      summary: "Customer already has an open case."

  - TO: Premium_Service_Agent
    WHEN: profile.tier == "premium"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, profile_tier]
      summary: "Premium customer needs support."

  - TO: Standard_Service_Agent
    WHEN: "no fraud, open-case, or premium routing condition is matched"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id]
      summary: "Standard customer support route."

AGENT: Fraud_Review_Agent
GOAL: "Review fraud-risk requests"

AGENT: Existing_Case_Agent
GOAL: "Continue existing cases"

AGENT: Premium_Service_Agent
GOAL: "Serve premium customers"

AGENT: Standard_Service_Agent
GOAL: "Serve standard customers"
```

## Common variations

- Route existing cases to a continuation agent.
- Route premium customers to a premium care specialist.
- Route high-risk customers to fraud or compliance review before service.

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

- Do not call a side-effecting tool just to decide a route.
- Do not route on a copied variable if the result object can be referenced directly and validated.
- Do not pass the entire profile when the child only needs tier, risk, or case state.

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to decide when to delegate, hand off, or use a workflow
- How to pass context between agents
