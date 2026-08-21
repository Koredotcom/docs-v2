# HowTo Review: route-by-role-channel-language-state

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-by-role-channel-language-state.md`
**Topic:** 3.3 - Route by role, channel, language, and session state
**Verdict:** update-needed

## Proposed changes

- **CRITICAL: Fix channel context path.** `session.interaction.current.channel` does not exist. The `InteractionContext` type has only `language`, `locale`, and `timezone`. The correct path for channel is `session.channel`, set from `channelType` at session initialization (`apps/runtime/src/services/execution/types.ts:2601-2604`).
- **Note the HANDOFF history default.** Since ABLP-3301 (~2026-08-04), the default `history` strategy when omitted is `full` (previously `auto`). All four handoffs in the article omit `history:`, so children receive full conversation history. The article must state this.
- **Add variable sourcing.** Variables listed in `pass:` (`customer_id`, `entry_channel`, `repeated_failures`, `conversation_summary`, `user_language`, `user_role`, `account_id`) have no stated source. Per the companion-resource rule, the article must state how each is populated (gathered, ON_START SET, tool output, memory, caller context, etc.).
- **Explain deterministic vs semantic WHEN evaluation.** The article uses both structured conditions (`session.channel == "voice"`) and natural-language text (`"the user is an administrator..."`), but does not explain how the runtime handles each. Structured conditions are evaluated deterministically; NL text is model-deferred.
- **Mention flat CONTEXT shorthand.** The parser supports `PASS:`, `SUMMARY:`, `HISTORY:` as direct siblings of the HANDOFF entry without a `CONTEXT:` wrapper. The reference docs confirm this at `multi-agent-and-supervisor.mdx:457`.
- **Cover no-match behavior.** When no HANDOFF WHEN condition matches, the supervisor retains ownership. The article should explain this.
- **Improve verification and production checklist.** Replace generic "parse and compile" guidance with specific trace events and variable-sourcing checks.
- **Add ON_FAILURE mention.** HANDOFF supports `ON_FAILURE` for pre-dispatch failures. The article should note this for production readiness.
- **Expand common variations with actual examples.** The current "Common variations" section is a bullet list with no ABL code.
- **Fix Related HowTos.** Use existing article file references, not free-text titles.

## Evidence

| Claim                                                                      | Current evidence                                                                                                                                                                                                                       | Impact                                                                   |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `session.interaction.current.channel == "voice"` is a valid WHEN condition | WRONG. `InteractionContext` (`shared-kernel/types/index.ts:198-205`) has no `channel` field. Correct path: `session.channel` (set at `types.ts:2601-2604`). Tests confirm: `yaml-parser.test.ts:2382` uses `session.channel == "web"`. | **Critical** -- customers copying this will route on a non-existent path |
| Omitting `history:` gives the child "only the declared context" (implied)  | WRONG. `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'` (`contract-source-data.ts:3`). Children receive the full parent conversation history by default.                                                                                    | **High** -- mischaracterizes what the child agent sees                   |
| PASS variables are ready to use                                            | UNVERIFIED. No source stated for `customer_id`, `entry_channel`, `repeated_failures`, `conversation_summary`, `user_language`, `user_role`, `account_id`.                                                                              | **Medium** -- companion-resource rule violation                          |
| Semantic WHEN text is equivalent to deterministic conditions               | MISLEADING. `evaluateRoutingPrimitiveWhen` (routing-primitive-executor.ts:187-263) treats NL text as `semantic_deferred`, delegating to the model. Structured conditions are evaluated deterministically.                              | **Medium** -- customer may not understand routing reliability difference |

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/route-by-role-channel-language-state.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/route-by-role-channel-language-state-2026-08-21-evidence.md`

---

## Proposed replacement article body

````markdown
# How to route by role, channel, language, and session state

Enterprise routing often depends on more than intent. A voice caller may need a different path than a web user, a Spanish-speaking user may need a language-specific specialist, and an administrator may need a privileged-support queue. ABL lets a supervisor combine deterministic context paths and semantic conditions in the same `HANDOFF` list to route on channel, locale, role, entitlement, failure count, or session state.

Use this when the same user intent must branch by channel, language, role, or current session state.

## Concept

A supervisor evaluates `HANDOFF` entries in authored order. Each entry has a `WHEN` condition that can be either:

- **Deterministic**: a structured expression referencing session data values, such as `session.channel == "voice"` or `session.interaction.current.language == "es"`. The runtime evaluates these against session state and produces a boolean result without involving the model.
- **Semantic**: a natural-language description of when the route should activate, such as `"the user is an administrator and the account is locked"`. The runtime defers these to the model, which decides based on conversation context.

You can mix both in the same HANDOFF list. Deterministic conditions are reliable for known, platform-provided values. Semantic conditions are flexible for signals that come from conversation context, identity systems, or policy rules that are not yet in structured session data.

When no HANDOFF condition matches, the supervisor retains ownership and may respond directly or re-prompt the user. Always include a catch-all route or ensure the supervisor has a meaningful direct-response capability.

### Key context paths

| Path                                   | Source                                                                                                    | Type                                     | Example                                                                |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| `session.channel`                      | Set at session initialization from the channel type (e.g., `web`, `voice`, `web_chat`, `api`)             | deterministic                            | `session.channel == "voice"`                                           |
| `session.interaction.current.language` | Resolved from the interaction context (message, session preference, channel, project, or agent default)   | deterministic                            | `session.interaction.current.language == "es"`                         |
| `session.interaction.current.locale`   | Resolved alongside language                                                                               | deterministic                            | `session.interaction.current.locale == "es-MX"`                        |
| `session.interaction.current.timezone` | Resolved alongside language                                                                               | deterministic                            | `session.interaction.current.timezone == "America/Mexico_City"`        |
| User role, account state, entitlements | Not platform-provided; must be populated via ON_START SET, GATHER, tool output, caller context, or memory | semantic or deterministic (if populated) | `"the user is an administrator"` or `user_role == "admin"` if gathered |

### History default

When a HANDOFF entry omits the `history` property, the child agent receives the **full** parent conversation history. This is the platform default. To limit what the child sees, set `history` explicitly:

- `full` (default when omitted): complete parent conversation history
- `auto`: uses the handoff summary when available, otherwise the last 5 messages
- `summary_only`: only the summary text, no raw messages
- `none`: no history
- `{ mode: last_n, count: <n> }`: the last N messages

## Minimal working example

This supervisor routes by channel, language, role, and a general fallback. Each variable in `pass` must be populated before routing -- typically via `ON_START SET`, `GATHER`, a tool call, or caller context from the SDK/channel.

```abl
SUPERVISOR: Context_Aware_Routing_Supervisor
GOAL: "Route by user role, channel, language, and session state"

HANDOFF:
  - TO: Voice_Escalation_Agent
    WHEN: session.channel == "voice"
    EXPECT_RETURN: false
    PASS: [customer_id, conversation_summary]
    SUMMARY: "Voice caller routed to voice-specific handling."
    HISTORY: auto

  - TO: Spanish_Service_Agent
    WHEN: session.interaction.current.language == "es"
    EXPECT_RETURN: false
    PASS: [customer_id, conversation_summary]
    SUMMARY: "Customer should be served in Spanish."

  - TO: Admin_Support_Agent
    WHEN: "the user is an administrator and the account is locked or requires privileged support"
    EXPECT_RETURN: false
    PASS: [customer_id, account_id]
    SUMMARY: "Admin user needs account lock support."

  - TO: Standard_Service_Agent
    WHEN: "the user needs ordinary support and no channel, language, role, or state override applies"
    EXPECT_RETURN: false
    PASS: [customer_id, conversation_summary]
    SUMMARY: "Customer needs standard service."

AGENT: Voice_Escalation_Agent
GOAL: "Handle voice escalation"

AGENT: Spanish_Service_Agent
GOAL: "Handle Spanish-language service"

AGENT: Admin_Support_Agent
GOAL: "Handle administrator support"

AGENT: Standard_Service_Agent
GOAL: "Handle standard support"
```
````

**Variable sourcing assumptions:** `customer_id` and `account_id` are populated from caller context or an ON_START lookup. `conversation_summary` is a platform-provided session variable. These must exist in session data before the HANDOFF evaluates.

This example uses the flat CONTEXT shorthand (`PASS:`, `SUMMARY:`, `HISTORY:` as direct siblings of the HANDOFF entry). The nested `CONTEXT:` wrapper form is also supported:

```abl
  - TO: Voice_Escalation_Agent
    WHEN: session.channel == "voice"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, conversation_summary]
      summary: "Voice caller routed to voice-specific handling."
      history: auto
```

Both forms produce identical results.

## How it works

1. The supervisor receives the user message and evaluates HANDOFF entries in authored order.
2. For each entry, the runtime classifies the WHEN condition:
   - **Structured conditions** (containing operators like `==`, `!=`, `AND`, `OR`, `IS SET`, comparisons) are evaluated deterministically against session data values.
   - **Natural-language conditions** (free-form text without operators) are deferred to the model, which decides based on conversation context and the condition text.
3. The first matching handoff transfers control to the target agent. The target receives the declared `pass` variables, the `summary`, and conversation history according to the `history` strategy (default: `full`).
4. When `EXPECT_RETURN: false`, the child becomes the new active agent permanently. When `EXPECT_RETURN: true`, the child returns control to the supervisor via `ON_RETURN`.

## Common variations

### Combining deterministic and semantic conditions

You can combine a deterministic check with a semantic qualifier in a single WHEN using AND:

```abl
  - TO: VIP_Voice_Agent
    WHEN: session.channel == "voice" AND "the user is a VIP customer"
    EXPECT_RETURN: false
    PASS: [customer_id, vip_tier]
    SUMMARY: "VIP voice caller needs premium support."
```

The runtime evaluates the deterministic part first. If it passes, the semantic part is deferred to the model. Both must be true for the route to match.

### Routing on locale instead of language

```abl
  - TO: LatAm_Agent
    WHEN: session.interaction.current.locale == "es-MX"
    EXPECT_RETURN: false
    PASS: [customer_id]
    SUMMARY: "Mexican Spanish customer."
```

### Routing with explicit priority

Use `PRIORITY` to override authored-order evaluation. Lower values are evaluated first:

```abl
HANDOFF:
  - TO: Emergency_Agent
    WHEN: "the user reports an emergency or safety concern"
    PRIORITY: 1
    EXPECT_RETURN: false
    PASS: [customer_id]
    SUMMARY: "Emergency escalation."

  - TO: Standard_Agent
    WHEN: "the user needs general support"
    PRIORITY: 10
    EXPECT_RETURN: false
    PASS: [customer_id]
    SUMMARY: "Standard support."
```

### Return-expected handoff with ON_RETURN

When a specialist should return control after completing its task:

```abl
  - TO: Language_Detection_Agent
    WHEN: "the user's language is unclear from the initial message"
    EXPECT_RETURN: true
    PASS: [customer_id]
    SUMMARY: "Detect preferred language."
    ON_RETURN:
      MAP:
        detected_language: language_result
```

### Adding ON_FAILURE for robustness

```abl
  - TO: Voice_Escalation_Agent
    WHEN: session.channel == "voice"
    EXPECT_RETURN: false
    PASS: [customer_id]
    SUMMARY: "Voice caller."
    ON_FAILURE: "I'm unable to connect you to the voice team right now. Let me help you directly."
```

`ON_FAILURE` fires when the target agent cannot be found or the dispatch fails before the target accepts the handoff.

## Verification

- Validate the ABL document parses and compiles without errors or warnings.
- Send a test message from a voice channel and confirm the `Voice_Escalation_Agent` is selected. Inspect the trace for a `routing_primitive_when` event showing `kind: deterministic_pass` for the `session.channel == "voice"` condition.
- Send a test message with the interaction context language set to `es` and confirm the `Spanish_Service_Agent` is selected.
- Send a test message as an administrator (with role context populated) and confirm the `Admin_Support_Agent` is selected via model-deferred semantic evaluation.
- Send a test message that matches no specific override and confirm the `Standard_Service_Agent` is selected.
- Confirm that each target agent receives the expected `pass` variables and conversation history.

## Production readiness checklist

- Every variable in `pass` lists has a verified source: gathered field, ON_START SET, caller context, tool output, or memory. Variables that are not populated before routing will be passed as empty/null.
- Deterministic conditions use platform-provided paths (`session.channel`, `session.interaction.current.language`) or variables with known, reliable sources.
- Semantic conditions describe clear, unambiguous selection criteria. Vague conditions may cause inconsistent routing.
- The `history` default is `full` when omitted. If children should not see full history, set `history` explicitly on each handoff.
- A catch-all route or direct-response capability exists for messages that match no specific route.
- Each specialist agent is defined and reachable (either inline or as an imported agent reference).
- `ON_FAILURE` is set on critical routes where target unavailability must produce a user-facing message rather than silence.
- Route distinctness: each deterministic WHEN condition is mutually exclusive or ordered so the first match wins correctly. Overlapping semantic conditions may produce non-deterministic routing.

## Common mistakes

| Mistake                                                                    | Why it happens                                                                             | How to avoid it                                                                                                |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Using `session.interaction.current.channel` for channel routing            | Confusion between interaction context (language/locale/timezone) and session-level channel | Use `session.channel` for channel routing                                                                      |
| Assuming user role is in session data                                      | Role is not a platform-provided field                                                      | Populate role via ON_START lookup, GATHER, tool call, or caller context before routing                         |
| Omitting `history:` without realizing children get full history            | The default changed from `auto` to `full`                                                  | Set `history` explicitly when children should not see the full conversation                                    |
| Mixing unquoted NL text with expression operators                          | The condition classifier may treat it as a malformed structured expression                 | Quote NL routing text or ensure it has no `==`, `!=`, `AND`, `OR`, `IS SET` operators                          |
| Creating separate specialists for every channel when behavior is identical | Over-specialization adds maintenance cost                                                  | Only create channel-specific agents when the agent behavior genuinely differs                                  |
| Not populating PASS variables before routing                               | Variables passed as null/empty if not sourced                                              | Ensure each variable is set via ON_START, GATHER, tool, caller context, or memory before the HANDOFF evaluates |

## Troubleshooting

| Symptom                                         | Likely cause                                           | What to check                                                                                             |
| ----------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Channel condition never matches                 | Wrong context path or channel type string              | Confirm `session.channel` value in traces; common values are `web`, `voice`, `web_chat`, `api`, `digital` |
| Language condition never matches                | Interaction context not populated                      | Check `session.interaction.current.language` in traces; verify the channel or SDK sends language context  |
| Semantic WHEN routes inconsistently             | Model interprets NL condition differently across turns | Make the condition text more specific; consider adding a deterministic guard variable instead             |
| No route matches and the supervisor goes silent | No catch-all and `direct_response_allowed` is false    | Add a fallback HANDOFF with a broad semantic WHEN, or set the supervisor role to `orchestrator`           |
| Child agent does not have expected context      | Variables not populated before handoff                 | Verify each variable in `pass` is set before routing; check ON_START or GATHER ordering                   |
| Child agent receives too much history           | Default `history` is `full`                            | Set `history: summary_only` or `history: none` on the handoff entry                                       |

## Related HowTos

- [Design a supervisor that routes users to specialist agents](design-supervisor-routing-agent.md)
- [Route by user intent](route-by-user-intent.md)
- [Pass context between agents](switch-active-agent.md)
- [Route to a fallback agent](route-to-fallback-agent.md)
- [Debug routing traces](debug-routing-traces.md)

```

```
