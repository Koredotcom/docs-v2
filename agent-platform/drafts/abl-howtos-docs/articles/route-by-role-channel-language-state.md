# How to route by role, channel, language, and session state

Enterprise routing often depends on more than intent. A voice caller may need a different path than a web user, a Spanish user may need a language-specific specialist, and an administrator may need a privileged-support queue. ABL lets a supervisor combine runtime context paths and semantic conditions in the same `HANDOFF` list.

Use this when the same user intent must branch by channel, locale, role, entitlement, failure count, or current session state.

## How the pattern works

1. The supervisor receives the user message and keeps ownership until a route matches.
2. Intent categories, runtime context, gathered values, or tool results provide the routing evidence.
3. `HANDOFF` entries are evaluated in the authored order and the matching child receives only the declared context.
4. If the child is temporary, it returns through `ON_RETURN`; if it owns the conversation, it remains the active agent.

## Design choices

- Use deterministic context paths for values that are always present, such as `session.interaction.current.channel` or language.
- Use semantic `WHEN` text for role and state signals that are supplied by identity, CRM, or policy systems outside the article example.
- Keep the ordinary service route last so overrides get the first chance to match.

## Validated example

```abl
SUPERVISOR: Context_Aware_Routing_Supervisor
GOAL: "Route by user role, channel, language, and session state"

HANDOFF:
  - TO: Voice_Escalation_Agent
    WHEN: session.interaction.current.channel == "voice"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, entry_channel, repeated_failures, conversation_summary]
      summary: "Voice caller has repeated self-service failures."

  - TO: Spanish_Service_Agent
    WHEN: session.interaction.current.language == "es"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, user_language, conversation_summary]
      summary: "Customer should be served in Spanish."

  - TO: Admin_Support_Agent
    WHEN: "the user is an administrator and the account is locked or requires privileged support"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, user_role, account_id]
      summary: "Admin user needs account lock support."

  - TO: Standard_Service_Agent
    WHEN: "the user needs ordinary support and no channel, language, role, or state override applies"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, conversation_summary]
      summary: "Customer needs standard service."

AGENT: Voice_Escalation_Agent
GOAL: "Handle voice escalation"

AGENT: Spanish_Service_Agent
GOAL: "Handle Spanish-language service"

AGENT: Admin_Support_Agent
GOAL: "Handle administrator support"

AGENT: Standard_Service_Agent
GOAL: "Handle standard support"
```

## Common variations

- Voice escalation path when the channel is voice.
- Language-specific specialist path for non-default locales.
- Privileged support path for administrators or high-entitlement users.

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

- Do not assume a user role exists in session data unless an identity/profile step populated it.
- Do not mix language routing with translation policy without stating which specialist owns the language experience.
- Do not create separate specialists for every channel unless behavior actually differs.

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to decide when to delegate, hand off, or use a workflow
- How to pass context between agents
