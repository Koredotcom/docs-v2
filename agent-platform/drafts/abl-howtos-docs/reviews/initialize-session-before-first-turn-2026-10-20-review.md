# HowTo Review: initialize-session-before-first-turn

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/initialize-session-before-first-turn.md`
**Topic:** 2.6 - How to initialize session variables before the first user turn
**Verdict:** update-needed
**Code branch:** `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`)
**Risk level:** medium. Examples and runtime claims change. Pattern and scope stay the same.

## Proposed changes

- Add an options table: `INITIAL`, `ON_START SET`, `ON_START CALL`, branch `DO: SET`, `SET_INTERACTION_LANGUAGE`.
- Add the run order, the entry-agent-only scope, lazy-start behavior, and reconnect behavior.
- Add a table of readable start paths: `session.channel`, identifiers, identity values, caller data, `session.interaction.current.*`.
- Change the examples so the entry flow waits for input. The old examples ended the flow at the first step, so the session completed at start.
- Add variations: declared `INITIAL` default (with `W801` explained), branch `DO: SET`, voice language pin. Keep the constants variation with a quoting warning.
- Re-verified `session.channel` (lesson 2). `channel.name` and `system.channel` do not resolve in `ON_START`.
- Add troubleshooting for empty paths, `W801`, specialist visibility, and suppressed channels.

## Deletions

- Old minimal example (`Session_Init_Agent` with `RESPOND: "Session is ready."` and a single completing step): replaced by a version that gathers input first.
- Old `Metadata_Init_Agent` example: kept with a gathering flow.
- Old sentence "`SET` assignments run before `RESPOND`. Assignment values are resolved against runtime session values.": expanded into bullets.
- Old checklist item "Reset counters intentionally when a new session starts": removed. The runtime does not rerun `ON_START` per turn. Use `INITIAL` and `RESET` for resets.
- Old verification line "inspect session values after initialization": replaced by trace-based steps.

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| SET before CALL before RESPOND | `executeOnStart` | Order list |
| `session.channel` is a session-namespace field | `runtime-executor.ts` `initialData`; harness | Paths table |
| Unquoted word resolves a variable of that name | Harness: `home` with `{home:"X"}` returns `X` | Constants variation |
| ON_START runs for the entry agent only | One caller of `executeOnStart`; test INT-13 | Concept, mistakes |
| `INITIAL` materialized at creation; `W801` warns if nothing writes it | `memory-integration.ts`; harness `W801` | `INITIAL` variation |
| Language override needs a voice policy | `interaction-language-override.ts` | Language variation |
| SET runs when the welcome is suppressed | `executeOnStart` order; test INT-5 | How it works |

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/initialize-session-before-first-turn.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/initialize-session-before-first-turn-2026-10-20-evidence.md`

## Proposed full article

````markdown
# How to initialize session variables before the first user turn

Use this pattern when flow steps, routing, templates, or tools need known session values before the user says anything.

## Concept

ABL gives you several places to seed session values. Pick the one that matches where the value comes from.

| Need | Use | When it runs |
| ---- | --- | ------------ |
| A fixed default | `MEMORY` `SESSION` with `INITIAL` | When the session is created, before `ON_START`. |
| A value copied or computed from session context | `ON_START` `SET` | At start, before the welcome. |
| A value from a tool | `ON_START` `CALL` with `AS` | At start, after `SET`, before the welcome. |
| A value for one branch only | `SET` in a branch `DO:` list | After the welcome. |
| The reply language on a voice channel | `SET_INTERACTION_LANGUAGE` | After `SET` and `CALL`, before the branches. |

`ON_START` runs these steps in order:

1. `SET` assignments.
2. The top-level `CALL`.
3. Interaction language directives.
4. `BRANCHES` conditions and the welcome `RESPOND`.
5. The matched branch `DO:` list.

`ON_START` runs once per session, for the entry agent only. A specialist reached by handoff never runs its own `ON_START`. `ON_START` also runs when the first user message starts the session, before the runtime processes that message. A reconnect to an initialized session does not run it again.

Keep initialization deterministic. Use it for values that exist at start. Collect values from the user with `GATHER`.

### Values you can read at start

| Path | Value |
| ---- | ----- |
| `session.channel` | The channel type, such as `web_chat` or `voice`. `digital` when the channel sets none. |
| `session.sessionId`, `session.userId`, `session.tenantId`, `session.projectId` | Platform identifiers. |
| `session.customerId`, `session.identityTier` | Identity values, when the channel supplies them. |
| `session.<name>` | A value the channel passes as caller data. Also readable as `<name>`. |
| `session.interaction.current.language` | The resolved language. Also `locale` and `timezone`. |

A path with no value resolves to nothing. A template then renders it as empty text.

## Minimal working example

```abl
AGENT: Session_Init_Agent
GOAL: "Initialize session values before the first flow step"

ON_START:
  SET: retry_count = 0
  SET: channel_name = session.channel
  SET: preferred_language = session.interaction.current.language
  RESPOND: "Welcome."

FLOW:
  entry_point: ask_order
  steps:
    - ask_order
    - show_context

ask_order:
  REASONING: false
  GATHER:
    order_id:
      PROMPT: "What is your order number?"
      TYPE: string
      REQUIRED: true
  THEN: show_context

show_context:
  REASONING: false
  RESPOND: "Order {{order_id}} on channel {{channel_name}}, language {{preferred_language}}, retries {{retry_count}}."
  THEN: COMPLETE
```

## How it works

- `SET` assignments run before `RESPOND`, in the order you write them.
- A numeric or boolean constant keeps its type. `0` stays a number.
- A top-level `RESPOND` is a prelude. The entry flow step still runs at start and asks for the order number.
- The flow reads the initialized values from the first step on.
- `SET` runs on every channel. Some channels, such as Slack, WhatsApp, and API, do not deliver the welcome. The values are still set.
- You can write several assignments under one `SET:` line, one per line.
- An unresolved path leaves the variable empty.

## Common variations

### Initialize constants

Quote text constants. An unquoted word that matches a session variable name reads that variable. An unquoted word with no match is stored as text.

```abl
AGENT: Metadata_Init_Agent
GOAL: "Copy startup metadata into session variables and use them in the flow"

ON_START:
  SET: campaign_id = "summer-renewal"
  SET: landing_page = "member portal"
  RESPOND: "Welcome from the {{landing_page}}."

FLOW:
  entry_point: ask_topic
  steps:
    - ask_topic
    - confirm

ask_topic:
  REASONING: false
  GATHER:
    topic:
      PROMPT: "What do you need help with?"
      TYPE: string
      REQUIRED: true
  THEN: confirm

confirm:
  REASONING: false
  RESPOND: "Campaign {{campaign_id}} is active. I will help with {{topic}}."
  THEN: COMPLETE
```

In a real project, copy values such as a campaign marker from trusted caller data, for example `SET: campaign_id = session.campaign_id`.

### Declare a default with INITIAL

Use `INITIAL` for a fixed default. The runtime writes it when it creates the session. It also fills the variable when an agent activates and the variable is still missing.

```abl
AGENT: Session_Defaults_Agent
GOAL: "Seed a retry counter with a declared default and count attempts in the flow"

MEMORY:
  SESSION:
    - retry_count
      TYPE: number
      INITIAL: 0

ON_START:
  SET: channel_name = session.channel
  RESPOND: "Welcome."

FLOW:
  entry_point: ask_order
  steps:
    - ask_order
    - show_attempt

ask_order:
  REASONING: false
  GATHER:
    order_id:
      PROMPT: "What is your order number?"
      TYPE: string
      REQUIRED: true
  THEN: show_attempt

show_attempt:
  REASONING: false
  SET: retry_count = retry_count + 1
  RESPOND: "Order {{order_id}} on channel {{channel_name}}. Attempt {{retry_count}}."
  THEN: COMPLETE
```

A variable that has only an `INITIAL` value and no other writer triggers the `W801` warning. Write the variable somewhere, as the `SET` in `show_attempt` does.

### Set a value for one branch

`SET` in a branch `DO:` list runs after the welcome, so the welcome cannot read it. The compiler reports `ON_START_BRANCH_DO_ACTIVATED` as an informational warning.

```abl
AGENT: Branch_Init_Agent
GOAL: "Set a reply mode at session start based on the channel"
PERSONA: "Concise assistant"

ON_START:
  BRANCHES:
    - IF: session.channel == "voice"
      RESPOND: "Thanks for calling. How can I help?"
      DO:
        - SET: reply_mode = "voice"
    - ELSE:
      RESPOND: "Welcome. How can I help?"
      DO:
        - SET: reply_mode = "text"
```

### Pin the reply language on a voice channel

`SET_INTERACTION_LANGUAGE` applies only on a voice channel that has a supported-language list. On other channels the override is not applied, and the trace shows the reason.

```abl
AGENT: Language_Init_Agent
GOAL: "Pin the reply language at session start"
PERSONA: "Concise assistant"

ON_START:
  SET_INTERACTION_LANGUAGE: "fr-FR"
  RESPOND: "Bonjour. Comment puis-je vous aider ?"
```

## Verification

1. Start a session. In the trace, find one `dsl_set` event for each top-level `SET`, with `source: on_start`.
2. Answer the first question. Confirm the final reply shows the initialized values.
3. Start a session on a second channel. Confirm `channel_name` changes.
4. For `SET_INTERACTION_LANGUAGE`, look for the `interaction_language_override_changed` event.
5. Reconnect to the same session. Confirm `ON_START` does not run again.

## Production readiness checklist

- Initialize only values available before the first user turn.
- Quote text constants.
- Keep names consistent with later `WHEN`, `PASS`, and template references.
- Set shared values in the entry agent. Pass them to specialists with `PASS`.
- Avoid writing sensitive values unless the flow needs them.
- Trace every startup assignment during validation.
- Test each target channel, including channels that do not deliver the welcome.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Setting a value the runtime does not have yet | Startup runs before the first user turn. | Use `SET` only for constants and existing context. |
| Leaving a text constant unquoted | A word that matches a variable name reads that variable. | Quote text constants. |
| Putting initialization in a specialist's `ON_START` | `ON_START` runs for the entry agent only. | Initialize in the entry agent, or use `INITIAL`. |
| Reading a branch `DO:` value in the welcome | The `DO:` list runs after the welcome. | Use top-level `SET` for values the welcome needs. |
| Using different names later in the flow | Startup names are easy to rename. | Reuse the exact names in templates, `WHEN`, `PASS`, and tools. |
| Collecting user input with startup `SET` | Initialization and data collection get mixed. | Use `GATHER` for user-provided values. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| A variable renders as empty text | The path has no value at start. | The path in the table above. Whether the channel sends the caller data. |
| `preferred_language` is empty | No source set a language. | The agent language, the contact preference, the channel setting, and the project default. |
| `W801` on a `MEMORY` variable | Only `INITIAL` writes it. | Add a writer, or drop the declaration. |
| The value is correct in the trace but missing in a specialist | The specialist did not receive it. | The `PASS` list on the `HANDOFF` entry. |
| The language override is not applied | The channel is not voice, or the language is not in the supported list. | The `interaction_language_override_changed` event. |
| No welcome appears but `SET` ran | The channel does not deliver the `ON_START` response. | The `dsl_on_start_skipped` event. |

## Related HowTos

- How to use ON_START to greet users before the first message.
- How to run an authentication or profile lookup during welcome.
- How to design channel-specific welcome experiences.
- How to route users from the welcome experience to the right agent.
````
