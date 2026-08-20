# How to debug routing decisions with traces and metadata

Routing must be observable. The runtime emits routing and handoff trace events, including condition checks and multi-intent decisions. You can also set `_meta.*` values in ABL so dashboards and trace filters can group related routing behavior.

Use this when support, QA, or partners need to understand why a user went to one specialist instead of another.

## How the pattern works

1. The supervisor receives the user message and keeps ownership until a route matches.
2. Intent categories, runtime context, gathered values, or tool results provide the routing evidence.
3. `HANDOFF` entries are evaluated in the authored order and the matching child receives only the declared context.
4. If the child is temporary, it returns through `ON_RETURN`; if it owns the conversation, it remains the active agent.

## Design choices

- Set stable `_meta.*` dimensions such as entry channel and routing version.
- Inspect `handoff_condition_check`, `deterministic_routing`, `deterministic_handoff`, and `multi_intent_*` events depending on the route type.
- Validate the selected target, condition result, context values, and returned child fields.

## Validated example

```abl
SUPERVISOR: Traceable_Routing_Supervisor
GOAL: "Make routing decisions easy to inspect in traces"

ON_START:
  SET:
    _meta.entry_channel = session.interaction.current.channel
    _meta.routing_version = "support-router-v3"

INTENTS:
  billing: "Billing and payment requests."
  technical_support: "Product troubleshooting requests."

HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, account_id, conversation_summary]
      summary: "Traceable billing route."

  - TO: Technical_Support_Agent
    WHEN: intent.category == "technical_support"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, issue_summary, conversation_summary]
      summary: "Traceable technical support route."

  - TO: Fallback_Triage_Agent
    WHEN: "the request does not clearly match billing or technical support"
    EXPECT_RETURN: true
    CONTEXT:
      pass: [customer_id, conversation_summary]
      summary: "Traceable fallback route."
    ON_RETURN:
      action: resume_intent

AGENT: Billing_Agent
GOAL: "Resolve billing requests"

AGENT: Technical_Support_Agent
GOAL: "Resolve technical support requests"

AGENT: Fallback_Triage_Agent
GOAL: "Clarify unclear requests"
```

## Common variations

- Debug deterministic route conditions.
- Debug semantic handoff conditions.
- Debug multi-intent queue, disambiguation, or fan-out decisions.

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

- Do not rely on ad hoc logs when trace events exist.
- Do not set high-cardinality metadata such as raw user utterance as a dashboard dimension.
- Do not debug only the chosen route; inspect skipped candidates and condition results.

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to decide when to delegate, hand off, or use a workflow
- How to pass context between agents
