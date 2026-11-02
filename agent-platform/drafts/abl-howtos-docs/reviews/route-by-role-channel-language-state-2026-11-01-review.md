# HowTo Review: route-by-role-channel-language-state

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-by-role-channel-language-state.md`
**Published copy:** `agent-platform/abl/how-to/route-by-role-channel-language-state.mdx`
**Topic:** 3.3 - How to route users by role, channel, language, or session state
**Verdict:** update-needed
**Target release:** Artemis 1.9.0 (`release_Artemis_1.9.0`). Previous scan: `hotfix_Artemis_1.8.1`.
**Risk level:** medium. The ordering and verification text changes. Examples keep their shape.

## Proposed changes

- Rewrite the Concept, Order and ties, and How it works sections. On each customer message, `checkDeterministicRouting` returns the first true expression route before the model runs. The old text said the model chooses between true routes. This is a correction found in this refresh. It does not come from 1.9.0.
- Add `BEHAVIOR: ROLE: router` to the minimal example. State that the model chooses a `WHEN: true` route and that the default supervisor can answer in text.
- Rewrite Verification. Pre-routed routes emit `deterministic_routing`. `handoff_condition_check` fires only for a route the model calls. Add `language_detection` and `handoff_completed` steps.
- Add a "Route on detected language" variation for `session.languageDetection` (new in 1.9.0, ABLP-6522). Add a table row, a mistake row, a troubleshooting row, and a checklist item.
- Add one paragraph on the `before_turn` `SET_INTERACTION_LANGUAGE` override. It commits after the pre-route check.
- Add a note that `resume_intent` replay skips the pre-route check, and that a missing child value makes the first route fire again.
- Update the `WHEN` and `ENABLED_WHEN` table and the troubleshooting rows to match the new ordering.
- Deleted content: the sentence "The platform evaluates it without the model, and it refuses the route when the expression is false" (wrong for the pre-route, replaced). The paragraph "The supervisor model then chooses among the routes, and the platform enforces each route's `WHEN` when the model calls it" (replaced). The paragraph on ties with `[Priority N]` and the model choosing (wrong, replaced). How it works step 7 "The `WHEN: true` route is always available. It receives any request that the other routes do not take" (wrong, replaced). Verification steps 1 and 2 naming `handoff_condition_check` for a pre-routed route (wrong, replaced). The troubleshooting cause "The model chose between true routes" and the checklist item "Overlapping routes are ordered, or their conditions exclude each other" (replaced by first-true-wins wording). The troubleshooting row cause "There is no `WHEN: true` route" (extended).
- Kept without change: values table, channel and voice guidance, role trust guidance, combine conditions, locale, state from a child, `ENABLED_WHEN`, `ON_FAILURE`, mistakes about `channel.name`, `PRIORITY`, `IS NOT SET`, and `map`.

## Differences between the draft, the published page, and the proposal

- Draft and published `.mdx` have identical text. The published page differs in format only: frontmatter with `sidebarTitle`, a Back badge, `yaml` code fences (the first has `expandable=true`), and no Related HowTos section.
- The proposal keeps the draft format (`abl` fences, Related HowTos). After approval, apply the text to the `.mdx` with its frontmatter, badge, and `yaml` fences.
- Both the draft and the published page carry the wrong ordering text, the `handoff_condition_check` verification, and the always-available `WHEN: true` claim.
- 1.8.x hotfix check: the article does not depend on ABLP-6128 or any other 1.8.1-only behavior. No backport claim needs removal.

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| First true expression route wins before the model | `routing-executor.ts` `checkDeterministicRouting` (~26820). Called at `runtime-executor.ts` ~26558. IR `routing.rules` built from `HANDOFF` (IR dump). | Ordering text rewritten. |
| `WHEN: true` and plain-language routes skip the pre-route check | Same function skips literal `true`. Evaluator returns `semantic_deferred` for plain text. | New How it works step. |
| `PRIORITY:` is ignored | `compiler.ts` ~1747 `priority: idx + 1`. `PRIORITY: 9` gives priority 1. | Statement kept. |
| Pre-routed route emits `deterministic_routing`, not `handoff_condition_check` | `deterministic-handoff.ts` ~101. `handoff_condition_check` at `routing-executor.ts` ~10817 is the model path. | Verification rewritten. |
| `ROLE: router` stops text answers | `reasoning-executor.ts` ~7044 and ~18052. Default supervisor has `direct_response_allowed: true`. | Router role in example. |
| `session.languageDetection` is readable in `WHEN` | Evaluator pass and fail. Block 8 compiles with no warning. Stored before pre-route (`runtime-executor.ts` ~22342 versus ~26558). | New variation. |
| Detection fields and statuses | `types.ts` (`LANGUAGE_DETECTION_STATUSES`, session value). | Field table. |
| Hook override commits after pre-route | `reasoning-executor.ts` ~14261 claim. `hook-language-actions.ts` `claimTurnHooksAndCommitLanguage`. | One paragraph. |
| Caller data still reaches `session.*` | `runtime-executor.ts` `initialData`. `languageDetection` key is stripped from caller data. | Role guidance unchanged. |
| Channel manifest unchanged | Same keys as 1.8.1. Nine `isVoice` entries. | `IN` list unchanged. |
| `//` comments in `WHEN` | Trailing comment compiles. Comment-only fails. | No article change. |
| Error codes still fire | `n1` `ENABLED_WHEN_SEMANTIC_REFERENCE`, `n2` `UNDEFINED_CONDITION_VAR`, `n3` `CEL_CONDITION_UNRESOLVED_CALL`, `n5` `UNKNOWN_HANDOFF_RETURN_FIELD`, `n6` `INVALID_HANDOFF_FAILURE_ACTION`. | Statements kept. |

## Quality scorecard

| Criterion | Final score |
| --------- | ----------- |
| Grounding in the code | 4 |
| Depth of conceptual explanation | 5 |
| Readability and usability | 4 |
| Coverage of examples | 4 |
| Search and discovery quality | 5 |
| Completeness of workflow and failure modes | 4 |
| Customer/partner self-service readiness | 4 |
| Scenario comprehensiveness | 4 |
| Article completeness | 5 |

Example validation: all 11 blocks pass with zero errors. Full evidence in `agent-platform/drafts/abl-howtos-docs/evidence/route-by-role-channel-language-state-2026-11-01-evidence.md`.

## Items for human review

- 3.4 says `PRIORITY` reorders routes. The code ignores it. The 3.4 refresh fixes this.
- The hook-override paragraph rests on code order, not a live session. Confirm with engineering.
- The article does not name the project language detection setting. Add the UI label if you know it.
- Channel value for a pre-routed route has no trace field. The article points to `handoff_condition_check` on the model path.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/route-by-role-channel-language-state.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/route-by-role-channel-language-state-2026-11-01-evidence.md`
- `agent-platform/abl/how-to/route-by-role-channel-language-state.mdx` (published page)

## Proposed article text

# How to route by role, channel, language, and session state

Use this pattern when the same request must reach a different agent by channel, language, user role, or session state.

## Concept

A `HANDOFF` route can test any value in the session data. Write the test as an expression in `WHEN`.

On each customer message, the platform checks the routes in the order you write them. It does this before the model reasons. The first route with a true expression takes the conversation. The model does not run for that message.

The check skips a `WHEN: true` route and a route with a plain-language `WHEN`. The model can still call them. When no expression route is true, the model runs. The platform evaluates the `WHEN` of any route the model calls, and it refuses the route when the expression is false.

Context routing differs from intent routing in one way. The classifier does not run when the supervisor has no `intent.category` condition and no `INTENTS:` section.

Two tools control which routes can fire.

| Tool | What it does |
| ---- | ------------ |
| `WHEN` | Takes the conversation when true. Refuses a route that the model calls when false. |
| `ENABLED_WHEN` | Removes the route from the check and from the model's choices while the condition is false. |

### Values you can test

| Value | Path | Notes |
| ----- | ---- | ----- |
| Channel | `session.channel` | The channel type, such as `web_chat`, `voice`, `whatsapp`, or `api`. The value is `digital` when the channel sets none. |
| Language | `session.interaction.current.language` | The primary language code, such as `es`. |
| Locale | `session.interaction.current.locale` | The full tag, such as `es-MX`. |
| Time zone | `session.interaction.current.timezone` | An IANA name, such as `America/Mexico_City`. |
| Detected language | `session.languageDetection.language` | The language of the customer's message. Present only when the project turns on language detection. See [Route on detected language](#route-on-detected-language). |
| Identity | `session.identityTier` | `0` anonymous, `1` asserted, `2` verified. |
| Role, tier, entitlements | `session.<name>` | Caller data from your channel or SDK. Also readable as `<name>`. |
| State | A session variable | A gathered field, a value mapped back from a child, or a value you set. |

The platform provides channel, language, locale, time zone, and identity. It provides no role. Your channel, SDK, or a lookup must supply the role. Treat caller data from a browser as unverified. Pair a role test with `session.identityTier == 2`.

Use `session.channel` for the channel. The paths `channel.name` and `system.channel` belong to other features. They do not resolve in a `HANDOFF` `WHEN`, and `channel.name` compiles without a warning. The path `session.interaction.current.channel` does not exist.

Voice has several channel types: `voice`, `voice_twilio`, `voice_livekit`, `voice_realtime`, `voice_pipeline`, `voice_vxml`, `korevg`, `audiocodes`, and `genesys_audio_connector`. A test for `"voice"` matches only the first one. Use `IN [...]` to match the family.

### Order and ties

The position of an entry sets its priority. The first entry has the highest priority. The `PRIORITY:` field is read and then ignored.

Several expression routes can be true at once, for example a Spanish speaker on a voice channel. The first true route in the list wins. The model does not choose between them. Put the most specific route first. See [Combine conditions](#combine-conditions).

## Minimal working example

This supervisor routes verified administrators, Spanish speakers, and voice callers. A `WHEN: true` route handles everyone else. Put the supervisor and all agents in the same project. The target agents are short stand-ins.

`agents/context-routing-supervisor.agent.abl`

```abl
SUPERVISOR: Context_Routing_Supervisor
GOAL: "Route each customer by role, language, and channel, then fall back to standard service"

BEHAVIOR:
  ROLE: router

HANDOFF:
  # Role: verified administrators only.
  - TO: Admin_Support_Agent
    WHEN: session.identityTier == 2 AND session.user_role == "admin"
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Verified administrator needs privileged support."

  # Language: Spanish speakers.
  - TO: Spanish_Service_Agent
    WHEN: session.interaction.current.language == "es"
    CONTEXT:
      pass: [customer_id]
      summary: "Customer should be served in Spanish."

  # Channel: voice callers.
  - TO: Voice_Support_Agent
    WHEN: session.channel IN ["voice", "voice_twilio", "voice_livekit", "voice_realtime", "voice_pipeline", "voice_vxml", "korevg", "audiocodes", "genesys_audio_connector"]
    CONTEXT:
      pass: [customer_id]
      summary: "Voice caller needs short spoken answers."

  # Fallback: everyone else.
  - TO: Standard_Service_Agent
    WHEN: true
    CONTEXT:
      pass: [customer_id]
      summary: "Customer needs standard service."
```

`agents/admin-support-agent.agent.abl`

```abl
AGENT: Admin_Support_Agent
GOAL: "Handle privileged support requests from verified administrators"
```

`agents/spanish-service-agent.agent.abl`

```abl
AGENT: Spanish_Service_Agent
GOAL: "Serve customers in Spanish"
```

`agents/voice-support-agent.agent.abl`

```abl
AGENT: Voice_Support_Agent
GOAL: "Serve voice callers with short spoken answers"
```

`agents/standard-service-agent.agent.abl`

```abl
AGENT: Standard_Service_Agent
GOAL: "Handle standard support requests"
```

Project-local assumptions:

- `session.user_role` is caller data that your SDK or channel sends, for example the value `admin`.
- `customer_id` and `account_id` follow the same rules as in How to route users by detected intent. The platform passes the supervisor's value when it has one. Otherwise the model fills the field from the conversation.

## How it works

1. The supervisor keeps the conversation until a route fires.
2. On each customer message, the platform checks the expression routes in the order you wrote them. It skips `WHEN: true` routes, plain-language routes, and routes that `ENABLED_WHEN` hides.
3. The first true route takes the conversation. The model does not run.
4. When no expression route is true, the model runs. The model can call any available route. The platform evaluates that route's `WHEN` at the call and refuses a false one.
5. The target receives the `PASS` values, the `summary`, and the history that `history` allows. The default is `full`.
6. With `EXPECT_RETURN: false`, the target keeps the conversation. With `EXPECT_RETURN: true`, the supervisor resumes when the target returns.
7. A missing value makes a test false. `session.user_role == "admin"` is false when the role is absent.
8. The model chooses the `WHEN: true` route. With `ROLE: router`, the supervisor must call a route or ask one question. Without `BEHAVIOR`, the supervisor can answer in text instead.

A route without an `intent.category` test never reads the category.

## Common variations

### Combine conditions

Join tests with `AND` and `OR`. Put the combined route before the single-test routes. Here, Spanish voice callers reach a dedicated agent.

```abl
  - TO: Spanish_Voice_Agent
    WHEN: session.channel == "voice" AND session.interaction.current.language == "es"
    CONTEXT:
      pass: [customer_id]
      summary: "Spanish-speaking voice caller."

  - TO: Voice_Support_Agent
    WHEN: session.channel == "voice"
    CONTEXT:
      pass: [customer_id]
      summary: "Voice caller needs short spoken answers."
```

Do not join a test with a quoted phrase. In `session.channel == "voice" AND "the user is a VIP"`, the compiler warns with `CEL_CONDITION_UNRESOLVED_CALL`. At runtime the phrase is a string that is always true, so the route fires for every voice caller. Test a field instead, for example `session.customer_tier == "vip"`.

### Route on locale

Use the locale when the dialect matters.

```abl
  - TO: Mexico_Service_Agent
    WHEN: session.interaction.current.locale == "es-MX"
    CONTEXT:
      pass: [customer_id]
      summary: "Mexican Spanish customer."
```

### Route on detected language

Use the detected language when the customer's words decide the language, not the channel or profile setting. This needs the project setting for language detection. With the setting off, the value is absent and every test on it is false.

```abl
  - TO: Spanish_Service_Agent
    WHEN: session.languageDetection.status == "detected" AND session.languageDetection.language == "es"
    CONTEXT:
      pass: [customer_id]
      summary: "Customer wrote in Spanish."
```

The platform detects the language of each customer message. It stores the result before it checks the routes, so the route reads the current message.

| Field | Meaning |
| ----- | ------- |
| `status` | `detected`, `low_confidence`, `no_language`, `failed`, `unavailable`, or `skipped`. |
| `language` | The language tag, only when `status` is `detected`. |
| `confidence` | A number from 0 to 1. |
| `candidate` | The best guess when `status` is `low_confidence`. |

The project settings set the confidence threshold, the minimum text length, and the allowed languages. A message that is too short, a keypad entry, or secure input does not give a `detected` status.

An agent hook can also set the language with `SET_INTERACTION_LANGUAGE`. That changes `session.interaction.current.language` only when the agent's `before_turn` hook runs. The check on the same message still reads the earlier value. Route on `session.languageDetection` for a decision on the current message.

### Route on state that a child returns

Use `EXPECT_RETURN: true` when another agent collects the value first. This route asks for a language preference once. It then routes on the answer.

```abl
  - TO: Language_Choice_Agent
    WHEN: preferred_language IS NOT SET
    EXPECT_RETURN: true
    CONTEXT:
      summary: "Ask the customer which language they prefer."
      history: none
    ON_RETURN:
      action: resume_intent
      map:
        chosen_language: preferred_language
    ON_FAILURE: RESPOND "I could not check your language preference. Please try again."

  - TO: Spanish_Service_Agent
    WHEN: preferred_language == "es"
    CONTEXT:
      pass: [customer_id]
      summary: "Customer chose Spanish."
```

`map` copies the child's `chosen_language` into the supervisor's `preferred_language`. Write the child field first. The child must gather or produce `chosen_language`. Without a value, the first route fires again on the next message.

After the child returns, `resume_intent` replays the customer's request. The replay skips the check, so the model picks the route, and the route's `WHEN` still applies. The next customer message goes through the check again.

Use `IS NOT SET` on a plain variable such as `preferred_language`. Do not use it on a dotted path such as `session.interaction.current.language`. The path holds a null value when the language is unknown, and `IS NOT SET` is false for null.

### Hide a route on other channels

Add `ENABLED_WHEN` when a channel must never see a route. The route is out of the check and out of the model's choices while the condition is false.

```abl
  - TO: Voice_Support_Agent
    WHEN: session.channel IN ["voice", "voice_twilio"]
    ENABLED_WHEN: session.channel IN ["voice", "voice_twilio"]
    CONTEXT:
      pass: [customer_id]
      summary: "Voice caller needs short spoken answers."
```

Write `ENABLED_WHEN` as an expression over data that exists before the turn. A condition that reads `intent` or plain language fails to compile with `ENABLED_WHEN_SEMANTIC_REFERENCE`. A condition that reads a missing value counts as false.

### Add ON_FAILURE

`ON_FAILURE` runs when the handoff fails before the target accepts it.

```abl
  - TO: Voice_Support_Agent
    WHEN: session.channel == "voice"
    CONTEXT:
      pass: [customer_id]
      summary: "Voice caller."
    ON_FAILURE: RESPOND "I cannot reach the voice team right now. I will help you directly."
```

The values are `CONTINUE`, `ESCALATE`, and `RESPOND "message"`. A bare quoted string fails with `INVALID_HANDOFF_FAILURE_ACTION`.

## Verification

1. Start a voice session and send a message. Open the trace. Find the `deterministic_routing` event. Confirm `target` is `Voice_Support_Agent` and `condition` shows the voice test.
2. If the route does not fire, the model path runs. Find the `handoff_condition_check` event for a route the model called. Read `evaluatedContext` to see the value of `session.channel` that your channel reports.
3. Send a Spanish message on a web channel. Confirm `deterministic_routing` names `Spanish_Service_Agent`. For the detected-language route, find the `language_detection` event. Confirm `status` is `detected`.
4. Start a session with caller data `user_role` set to `admin` and an identity tier of `2`. Confirm `Admin_Support_Agent`. Repeat with tier `0`. Confirm the route does not fire.
5. Send a message that matches no condition. Confirm the model calls `Standard_Service_Agent`. Find its `handoff_condition_check` event.
6. For a route with `EXPECT_RETURN: true`, find the `handoff_completed` event. Read `outcome` and `durationMs`.
7. Check that each target receives the `pass` values and the summary.

## Production readiness checklist

- Every value in a `WHEN` has a source: the platform, caller data, a lookup, or a child's return.
- Role tests also require a verified identity, for example `session.identityTier == 2`.
- Channel tests list every channel type in the family, or you confirm the exact value in a trace.
- Overlapping routes are ordered with the most specific route first.
- A `WHEN: true` route covers every other message, and `BEHAVIOR` with `ROLE: router` stops the supervisor from answering in text.
- Detected-language routes test `status`. A fallback route handles the case where detection is off.
- Quoted phrases never appear inside an `AND` or `OR` test.
- `ON_FAILURE` is set on routes where a missing target must produce a reply.
- Tests cover each channel, each language, each role, and one message with no match.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Using `channel.name` or `system.channel` in a route. | Other features use these paths. | Use `session.channel`. |
| Using `session.interaction.current.channel`. | The channel seems to belong to the interaction. | The path does not exist. Use `session.channel`. |
| Testing `session.channel == "voice"` for all voice. | Voice looks like one channel. | Use `IN [...]` with the voice channel types. |
| Trusting a role from the browser. | The role is easy to read from caller data. | Add `session.identityTier == 2`, or look the role up on the server. |
| Joining a test with a quoted phrase. | The phrase seems to add a semantic check. | The phrase is always true. Test a field. |
| Setting `PRIORITY:` to resolve overlaps. | The field looks like it orders routes. | The platform ignores it. Reorder the entries. |
| Expecting the model to choose between two true routes. | The model reads the route descriptions. | The first true expression route wins. Order the entries. |
| Putting the broad route first. | The order looks like a list of equals. | The broad route wins every time. Put the specific route first. |
| Using `IS NOT SET` on `session.interaction.current.language`. | The language can be unknown. | Compare the value, or test a plain variable. |
| Routing on `session.languageDetection` with detection off. | The path reads like a built-in value. | Turn on the project setting, and keep a fallback route. |
| Writing `map` as `parent: child`. | The parent field seems to come first. | Write `child: parent`. The compiler reports `UNKNOWN_HANDOFF_RETURN_FIELD`. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The channel route never fires. | The channel type differs from your test. | `session.channel` in `evaluatedContext`. Compare it with your list. |
| The language route never fires. | The language is unresolved or differs. | `session.interaction.current.language`. The value is the primary code, such as `es`, not `es-MX`. |
| The detected-language route never fires. | Detection is off, or the status is not `detected`. | The `language_detection` event: `status`, `reason`, and `language`. |
| The role route never fires. | The role or the identity tier is missing. | The caller data and `session.identityTier`. |
| The role route fires for the wrong user. | The route tests only the caller's role. | Add `session.identityTier == 2`. |
| A voice route fires for every caller. | A quoted phrase sits inside an `AND` test. | The `WHEN` text. Replace the phrase with a field test. |
| Two routes could match, and the wrong one runs. | An earlier route is also true. | The entry order. The first true route wins. Move the specific route up. |
| A route is missing from the model's choices. | `ENABLED_WHEN` is false or reads a missing value. | The `ENABLED_WHEN` expression and its data. |
| No route matches and the supervisor answers directly. | The supervisor has no `ROLE: router`, or no `WHEN: true` route. | Add a fallback route and `BEHAVIOR` with `ROLE: router`. |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to route users by detected intent
- How to route by tool result, profile lookup, or remembered state
- How to use behavior profiles to change agent behavior by context
- How to debug routing decisions in traces
