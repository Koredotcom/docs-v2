# How to design channel-specific welcome experiences

Use this pattern when web chat, voice, messaging, or API channels need different startup behavior.

## Concept

Channels do not deliver startup content the same way. The runtime sends the `ON_START` response only on channels that support proactive delivery. On the other channels, `ON_START` still runs its `SET`, `CALL`, and branch `DO:` actions, but the welcome text is not sent.

A channel-specific welcome has two layers:

- **Conversation welcome.** The `ON_START` response. You write it in ABL and vary it with `BRANCHES`.
- **Channel configuration.** Launcher message, input placeholder, and the voice Welcome Message. You set these in the channel settings in Studio.

Branch on `session.channel`. This value holds the channel type of the current session, for example `sdk_websocket` or `korevg`. Do not use `channel.name` or `system.channel` in an `ON_START` condition. Those names belong to behavior profiles and escalation routing entries. They do not resolve in `ON_START`, so the branch never matches.

| Welcome delivery                | `session.channel` values                                                                                                                                       |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ON_START` response sent        | `web_chat`, `sdk_websocket`, `web_debug`, `voice`, `voice_pipeline`, `voice_realtime`, `voice_twilio`, `voice_livekit`, `voice_vxml`, `korevg`, `audiocodes`, `genesys_audio_connector`. |
| `ON_START` response not sent    | `slack`, `whatsapp`, `msteams`, `a365`, `telegram`, `line`, `messenger`, `instagram`, `twilio_sms`, `zendesk`, `email`, `genesys`, `genesys_open_messaging`, `http_async`, `ai4w`, `kore_agent_assist`, `api`, `http`, `workflow`, `ag_ui`, `a2a`. |

The payload that reaches each channel also differs. Voice channels keep only `PLAIN_TEXT` from the `VOICE` block and drop rich content. `web_chat` ignores `VOICE`. `sdk_websocket` and `web_debug` accept the full `VOICE` block and rich content.

## Minimal working example

```abl
AGENT: Channel_Welcome_Agent
GOAL: "Adapt welcome copy by channel context"

ON_START:
  SET: channel_name = session.channel
  BRANCHES:
    - IF: channel_name == "voice"
      RESPOND: "Thanks for calling. Say billing, orders, or agent."
        VOICE:
          PLAIN_TEXT: "Thanks for calling. Say billing, orders, or agent."
    - ELSE:
      RESPOND: "Welcome. You can type billing, orders, or agent."
        FORMATS:
          markdown: |
            **Welcome.** Type a topic to begin.

FLOW:
  entry_point: ready
  steps:
    - ready

ready:
  REASONING: false
  RESPOND: "Ready."
  THEN: COMPLETE
```

The `ready` step stands in for your own flow. The `SET` line is optional. You can write `IF: session.channel == "voice"` and skip the variable.

## How it works

At session start, the runtime runs `ON_START` in this order:

1. Top-level `SET` and `CALL` run first. Branch conditions can read the values they set.
2. Branches are checked in order. The first matching branch wins. An `ELSE` branch has no condition and always matches.
3. The selected response is sent if the channel supports proactive delivery. Otherwise the runtime records a `dsl_on_start_skipped` trace.
4. The `DO:` list of the selected branch runs after the welcome.

With a `FLOW`, a branch-selected welcome is the whole startup turn. The first flow step waits for the first customer message. A top-level `RESPOND` that no branch replaced is different. The first flow step runs in the same turn, right after the welcome.

In the example, `channel_name == "voice"` matches only the SDK voice channel. Telephony and bridge channels use their own channel types, such as `korevg` or `voice_twilio`. The `ELSE` branch serves all of them.

## Common variations

### Match every voice channel

Use `IN` with the voice channel types your project deploys.

```abl
AGENT: Voice_Family_Welcome_Agent
GOAL: "Greet callers on any voice channel and chat users in text"

ON_START:
  BRANCHES:
    - IF: session.channel IN ["voice", "voice_pipeline", "voice_realtime", "voice_twilio", "voice_livekit", "voice_vxml", "korevg", "audiocodes", "genesys_audio_connector"]
      RESPOND: "Thanks for calling. Say billing, orders, or agent."
        VOICE:
          PLAIN_TEXT: "Thanks for calling. Say billing, orders, or agent."
    - ELSE:
      RESPOND: "Welcome. You can type billing, orders, or agent."

FLOW:
  entry_point: ready
  steps:
    - ready

ready:
  REASONING: false
  RESPOND: "Ready."
  THEN: COMPLETE
```

### Record the channel choice for later steps

Do not write `SET` or `CALL` beside `RESPOND` in a branch. That is a compile error (`E380`). Put the action in the branch `DO:` list. The list runs after the welcome and allows `SET`, `CALL`, and `HANDOFF`.

```abl
AGENT: Channel_Style_Agent
GOAL: "Welcome callers and chat users and record the reply style"

ON_START:
  BRANCHES:
    - IF: session.channel == "voice"
      RESPOND: "Thanks for calling."
      DO:
        - SET: reply_style = "short"
    - ELSE:
      RESPOND: "Welcome."
      DO:
        - SET: reply_style = "detailed"

FLOW:
  entry_point: ready
  steps:
    - ready

ready:
  REASONING: false
  RESPOND: "Reply style: {{reply_style}}."
  THEN: COMPLETE
```

The compiler reports an `ON_START_BRANCH_DO_ACTIVATED` warning for each `DO:` list. The warning confirms that the list runs at session start. A branch `DO:` list cannot change which branch is selected, because the runtime selects the branch first. To hand off by channel at start, see "How to route users from the welcome experience to the right agent".

### Keep channel configuration separate

```abl
AGENT: Launcher_Copy_Agent
GOAL: "Keep channel launcher copy separate from the ABL startup message"

ON_START:
  RESPOND: "Welcome inside the conversation."

FLOW:
  entry_point: ready
  steps:
    - ready

ready:
  REASONING: false
  RESPOND: "Ask a question to continue."
  THEN: COMPLETE
```

These settings live in the channel configuration, not in ABL:

- **Web SDK.** The theme settings hold the launcher message and the input placeholder.
- **Voice.** The Welcome Message field holds a channel-level greeting. On pipeline voice channels, a non-empty value replaces the `ON_START` greeting. Clear it to use `ON_START`. On realtime voice channels, the `ON_START` greeting wins and the Welcome Message is the last fallback.
- **Voice interruption.** Pipeline voice channels have an Allow caller to interrupt the welcome setting. A `BARGE_IN` value written under the `RESPOND` `VOICE` block takes priority over that setting.

## Verification

1. Start a session on each target channel.
2. Check the transcript against the delivery table. Channels in the "not sent" row show no `ON_START` welcome.
3. Open the trace. The `dsl_set` event for `channel_name` shows the channel value the runtime read.
4. Find the `dsl_on_start_branch` event. It shows the matched branch index.
5. Find the `dsl_respond` event with source `on_start`. It shows the text sent.
6. On a channel in the "not sent" row, confirm the `dsl_on_start_skipped` event and that `SET` and `DO:` side effects still ran.

## Production readiness checklist

- Test each deployed channel separately, including the voice channel types you use.
- Keep launcher copy and conversation copy distinct.
- Add an `ELSE` branch so every other channel gets a valid welcome.
- Use `PLAIN_TEXT` for voice wording. Use short voice greetings.
- Provide plain text with every rich content variant.
- Check that no voice channel has a Welcome Message that hides your `ON_START` greeting.
- Confirm async and API channels do not depend on a proactive welcome.

## Common mistakes

| Mistake                                                    | Why it happens                                                    | How to avoid it                                                                          |
| ---------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Treating launcher text as the ABL welcome                  | Both appear near session start in web chat.                       | Keep launcher copy in channel configuration and conversation copy in `ON_START`.         |
| Comparing `session.channel` to `"voice"` only              | Telephony channels use other channel types.                       | Use `IN` with every voice channel type you deploy.                                       |
| Using `channel.name` or `system.channel` in a branch `IF:` | Behavior profiles and routing entries use those names.            | Use `session.channel` in `ON_START`.                                                     |
| Writing a plain-language `IF:` condition                   | The condition looks like routing guidance.                        | Write an expression such as `session.channel == "voice"`. Plain text never matches.      |
| Writing `SET` or `CALL` beside `RESPOND` in a branch       | Branches carry responses.                                         | Use a branch `DO:` list, or run the action at top-level `ON_START`.                      |
| Writing one welcome for every channel                      | Text chat, voice, and async channels have different constraints.  | Branch on `session.channel` and test each deployed channel.                              |

## Troubleshooting

| Symptom                                       | Likely cause                                                                          | What to check                                                                           |
| --------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Welcome appears twice in web chat             | The launcher message and the `ON_START` response say the same thing.                  | Compare the launcher message with the `ON_START` text.                                  |
| No welcome on Slack, WhatsApp, email, or API  | The channel does not receive the `ON_START` response.                                 | Look for `dsl_on_start_skipped` in the trace.                                           |
| Callers hear a different greeting             | A pipeline voice channel has a Welcome Message set.                                   | Clear the Welcome Message in the channel configuration.                                 |
| The `ELSE` branch always runs                 | The channel value does not match the condition.                                       | Check the `dsl_set` trace for the real `session.channel` value.                         |
| Markdown or cards do not show on voice        | Voice channels keep only `PLAIN_TEXT`.                                                | Add a `VOICE` block with `PLAIN_TEXT`.                                                  |
| Voice greeting is too long                    | The welcome carries details meant for the next turn.                                  | Shorten the greeting and move details into the first flow step.                         |

## Related HowTos

- How to use ON_START to greet users before the first message
- How to create a welcome message for a new conversation
- How to route users from the welcome experience to the right agent
- How to handle empty-state and fallback greetings
