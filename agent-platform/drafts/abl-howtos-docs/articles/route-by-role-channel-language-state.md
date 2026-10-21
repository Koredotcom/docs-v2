# How to route by role, channel, language, and session state

Use this pattern when the same request must reach a different agent by channel, language, user role, or session state.

## Concept

A `HANDOFF` route can test any value in the session data. Write the test as an expression in `WHEN`. The platform evaluates it without the model, and it refuses the route when the expression is false.

Context routing differs from intent routing in one way. The classifier does not run when the supervisor has no `intent.category` condition and no `INTENTS:` section. The supervisor model then chooses among the routes, and the platform enforces each route's `WHEN` when the model calls it.

Two tools control which routes the model can reach.

| Tool | What it does |
| ---- | ------------ |
| `WHEN` | Refuses a route after the model calls it. |
| `ENABLED_WHEN` | Removes the route from the model's choices while the condition is false. |

### Values you can test

| Value | Path | Notes |
| ----- | ---- | ----- |
| Channel | `session.channel` | The channel type, such as `web_chat`, `voice`, `whatsapp`, or `api`. The value is `digital` when the channel sets none. |
| Language | `session.interaction.current.language` | The primary language code, such as `es`. |
| Locale | `session.interaction.current.locale` | The full tag, such as `es-MX`. |
| Time zone | `session.interaction.current.timezone` | An IANA name, such as `America/Mexico_City`. |
| Identity | `session.identityTier` | `0` anonymous, `1` asserted, `2` verified. |
| Role, tier, entitlements | `session.<name>` | Caller data from your channel or SDK. Also readable as `<name>`. |
| State | A session variable | A gathered field, a value mapped back from a child, or a value you set. |

The platform provides channel, language, locale, time zone, and identity. It provides no role. Your channel, SDK, or a lookup must supply the role. Treat caller data from a browser as unverified. Pair a role test with `session.identityTier == 2`.

Use `session.channel` for the channel. The paths `channel.name` and `system.channel` belong to other features. They do not resolve in a `HANDOFF` `WHEN`, and `channel.name` compiles without a warning. The path `session.interaction.current.channel` does not exist.

Voice has several channel types: `voice`, `voice_twilio`, `voice_livekit`, `voice_realtime`, `voice_pipeline`, `voice_vxml`, `korevg`, `audiocodes`, and `genesys_audio_connector`. A test for `"voice"` matches only the first one. Use `IN [...]` to match the family.

### Order and ties

The position of an entry sets its priority. The first entry has the highest priority. The `PRIORITY:` field is read and then ignored.

Several deterministic routes can be true at once, for example a Spanish speaker on a voice channel. The model then chooses, and the position shows as `[Priority N]` in each route description. To make the result certain, write exclusive conditions or put the combined route first. See [Combine conditions](#combine-conditions).

## Minimal working example

This supervisor routes verified administrators, Spanish speakers, and voice callers. A `WHEN: true` route handles everyone else. Put the supervisor and all agents in the same project. The target agents are short stand-ins.

`agents/context-routing-supervisor.agent.abl`

```abl
SUPERVISOR: Context_Routing_Supervisor
GOAL: "Route each customer by role, language, and channel, then fall back to standard service"

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
2. The model calls a route. The platform evaluates that route's `WHEN` against the session data.
3. A true expression admits the route. A false expression refuses it, and the model tries another route.
4. The target receives the `PASS` values, the `summary`, and the history that `history` allows. The default is `full`.
5. With `EXPECT_RETURN: false`, the target keeps the conversation. With `EXPECT_RETURN: true`, the supervisor resumes when the target returns.
6. A missing value makes a test false. `session.user_role == "admin"` is false when the role is absent.
7. The `WHEN: true` route is always available. It receives any request that the other routes do not take.

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

`map` copies the child's `chosen_language` into the supervisor's `preferred_language`. Write the child field first. The child must gather or produce `chosen_language`.

Use `IS NOT SET` on a plain variable such as `preferred_language`. Do not use it on a dotted path such as `session.interaction.current.language`. The path holds a null value when the language is unknown, and `IS NOT SET` is false for null.

### Hide a route on other channels

Add `ENABLED_WHEN` when a channel must never see a route. The model does not see the route while the condition is false.

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

1. Start a voice session and send a message. Open the trace. Find the `handoff_condition_check` event for the voice route. Confirm `result: true` and `whenOutcome: deterministic_pass`.
2. In the same event, read `evaluatedContext`. Confirm the value of `session.channel` that your channel reports.
3. Send a Spanish message on a web channel. Confirm `Spanish_Service_Agent`. Check `session.interaction.current.language` in the event.
4. Start a session with caller data `user_role` set to `admin` and an identity tier of `2`. Confirm `Admin_Support_Agent`. Repeat with tier `0`. Confirm the route is refused.
5. Send a message that matches no condition. Confirm `Standard_Service_Agent`.
6. Check that each target receives the `pass` values and the summary.

## Production readiness checklist

- Every value in a `WHEN` has a source: the platform, caller data, a lookup, or a child's return.
- Role tests also require a verified identity, for example `session.identityTier == 2`.
- Channel tests list every channel type in the family, or you confirm the exact value in a trace.
- Overlapping routes are ordered, or their conditions exclude each other.
- A `WHEN: true` route or an answering supervisor covers every other message.
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
| Using `IS NOT SET` on `session.interaction.current.language`. | The language can be unknown. | Compare the value, or test a plain variable. |
| Writing `map` as `parent: child`. | The parent field seems to come first. | Write `child: parent`. The compiler reports `UNKNOWN_HANDOFF_RETURN_FIELD`. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The channel route never fires. | The channel type differs from your test. | `session.channel` in `evaluatedContext`. Compare it with your list. |
| The language route never fires. | The language is unresolved or differs. | `session.interaction.current.language`. The value is the primary code, such as `es`, not `es-MX`. |
| The role route never fires. | The role or the identity tier is missing. | The caller data and `session.identityTier`. |
| The role route fires for the wrong user. | The route tests only the caller's role. | Add `session.identityTier == 2`. |
| A voice route fires for every caller. | A quoted phrase sits inside an `AND` test. | The `WHEN` text. Replace the phrase with a field test. |
| Two routes could match, and the wrong one runs. | The model chose between true routes. | The entry order. Make the conditions exclusive. |
| A route is missing from the model's choices. | `ENABLED_WHEN` is false or reads a missing value. | The `ENABLED_WHEN` expression and its data. |
| No route matches and the supervisor answers directly. | There is no `WHEN: true` route. | Add a fallback route. With the `router` role, the supervisor asks one question instead. |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to route users by detected intent
- How to route by tool result, profile lookup, or remembered state
- How to use behavior profiles to change agent behavior by context
- How to debug routing decisions in traces
