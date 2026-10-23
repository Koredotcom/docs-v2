# How to use ON_START to greet users before the first message

Use this pattern when the agent must run startup logic before the user sends the first turn.

## Concept

`ON_START` is the session-start handler. The runtime runs it once per session, before the agent processes user input. It does not run again on later messages.

Use `ON_START` for work that belongs to session startup: greeting the user, reading context, loading a profile, setting values, or choosing the first-turn experience. Do not use it for per-turn routing.

`ON_START` can hold these parts. The runtime runs them in this order.

| Order | Part                                                          | What it does                                                                                   |
| ----- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 1     | `SET`                                                         | Assigns session values.                                                                        |
| 2     | `CALL`                                                        | Calls a tool. Put `WITH`, `AS`, and `WHEN` under `CALL`.                                       |
| 3     | `SET_INTERACTION_LANGUAGE`, `CLEAR_INTERACTION_LANGUAGE`      | Sets or clears the response language before the welcome.                                       |
| 4     | `BRANCHES`                                                    | Selects one welcome with `IF` and `ELSE`. The first match wins.                                |
| 5     | `RESPOND`, with `FORMATS`, `ACTIONS`, `VOICE`, `MESSAGE_KEY`  | Sends the welcome.                                                                             |
| 6     | `DO` list in the selected branch, or a top-level `HANDOFF`    | Runs `SET`, `CALL`, and `HANDOFF` after the welcome.                                           |
| 7     | `DELEGATE`                                                    | Delegates to another agent.                                                                    |

The welcome reaches the user only on channels that allow it, and only when the session starts before the first message. The other parts run in every case. The welcome HowTo lists the channels.

## Minimal working example

This agent copies the channel into a session value, then uses the value in the welcome.

```abl
AGENT: On_Start_Welcome_Agent
GOAL: "Answer questions about orders, returns, and billing"

ON_START:
  SET: startup_source = session.channel
  RESPOND: "Hello. I am ready to help. You reached us from {{startup_source}}."
```

## How it works

`SET` runs before `RESPOND`. The welcome can read the values that `SET` assigns. The runtime emits a `dsl_set` event for each assignment and a `dsl_respond` event for the welcome.

`session.channel` holds the channel type, for example `web_chat`. It holds `digital` when the session has no channel type. Behavior profiles use a different value, `channel.name`.

`session.interaction.current.language` holds the resolved language. The runtime resolves it before `ON_START` runs.

This agent has no `FLOW`, so it answers each user message with reasoning after the welcome.

## Common variations

### Choose a welcome with branches

Branches run in order. The first matching branch wins. An `ELSE` branch is the default.

```abl
AGENT: On_Start_Branch_Agent
GOAL: "Answer questions about orders, returns, and billing"

ON_START:
  BRANCHES:
    - IF: session.interaction.current.language == "fr"
      RESPOND: "Bonjour. Comment puis-je vous aider ?"
    - ELSE:
      RESPOND: "Hello. How can I help?"
```

Write each `IF` as an expression. Plain English text does not match. A condition that cannot evaluate is skipped, and the trace shows `dsl_on_start_branch_error`.

If no branch matches, the runtime uses the top-level `RESPOND` when the agent has one. With no top-level `RESPOND`, the agent sends no welcome.

A branch welcome owns the startup turn. When the agent has a `FLOW`, the entry step does not run during startup.

### Run actions at startup with a DO list

A branch cannot hold `SET` or `CALL` directly. The compiler reports error `E380`. Put those actions in the branch `DO` list. The list runs after the welcome.

A `DO` list accepts `SET`, `CALL`, `HANDOFF`, `SET_INTERACTION_LANGUAGE`, and `CLEAR_INTERACTION_LANGUAGE`. The parser drops `RESPOND`, `DELEGATE`, and other actions with warning `W381`. Put the welcome text in the branch `RESPOND`.

```abl
AGENT: On_Start_Do_Agent
GOAL: "Answer questions about orders, returns, and billing"

ON_START:
  BRANCHES:
    - IF: session.channel == "web_chat"
      RESPOND: "Welcome. Chat with us any time."
      DO:
        - SET: entry_source = "web"
    - ELSE:
      RESPOND: "Hello. How can I help?"
      DO:
        - SET: entry_source = "other"
```

This snippet compiles with two informational warnings, `ON_START_BRANCH_DO_ACTIVATED`. They confirm that each `DO` list runs at session start. Later turns and tools can read `entry_source`.

### Hand off or delegate at startup

A top-level `HANDOFF: <Agent>`, or a `HANDOFF` entry in a branch `DO` list, starts a declared local agent at session start. A top-level `DELEGATE: <Agent>` delegates at startup. The agent must declare each handoff target in its own `HANDOFF` section. Otherwise the compiler warns `ON_START_HANDOFF_TARGET_INVALID`, and the runtime refuses the handoff. See the welcome routing HowTo for a complete example.

## Verification

1. Create sessions with different language values. Confirm the selected welcome changes.
2. Open the trace. Confirm `dsl_on_start`, then `dsl_set` with `source: on_start`.
3. Check `dsl_on_start_branch`. It shows the matched branch index and condition. It shows `matched: false` when no branch matches.
4. Confirm `dsl_respond` shows `source: on_start`. A branch welcome adds `responseSource: on_start_branch`.
5. Send a second message in the same session. Confirm the trace shows no second `dsl_on_start`.
6. Start a session over HTTP chat. Confirm `SET` runs and the welcome text does not appear.

## Production readiness checklist

- Put `SET` and `CALL` at the top level of `ON_START`, or in a branch `DO` list.
- Add an `ELSE` branch or a top-level `RESPOND` so every session gets a welcome.
- Branch only on values that exist before the first user turn.
- Keep startup setup separate from visible text. Some channels and lazy starts drop the text.
- Check the compiler output for `ON_START_BRANCH_DO_ACTIVATED` and make sure each `DO` list is intended.
- Test one session for each branch.

## Common mistakes

| Mistake                                                    | Why it happens                                    | How to avoid it                                                                          |
| ---------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Putting `SET` or `CALL` directly in a branch               | Branches look like small flow steps.              | Use the branch `DO` list.                                                                |
| Putting `WITH` or `AS` beside `CALL`                       | The lines look like sibling fields.               | Indent `WITH`, `AS`, and `WHEN` under `CALL`. Beside `CALL`, `WITH` and `AS` are errors. |
| Writing `WHEN` beside `CALL`                               | The guard looks like a sibling field.             | Indent `WHEN` under `CALL`. A sibling `WHEN` is ignored and the call always runs.        |
| Writing a branch `IF` in plain English                     | The text reads like a rule.                       | Write an expression, for example `session.channel == "web_chat"`.                        |
| Expecting startup to run on every message                  | `ON_START` is a session initialization handler.   | Use flow, handoff, or reasoning logic for per-turn behavior.                             |
| Branching on a value that does not exist yet               | The first user turn has not happened.             | Branch on session context, constants, memory recall, or values set during startup.       |

## Troubleshooting

| Symptom                                           | Likely cause                                                         | What to check                                                                               |
| ------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Compile error `E380`                              | A branch holds `SET` or `CALL` directly.                             | Move the action into the branch `DO` list.                                                  |
| Compile error `E203`                              | `WITH` or `AS` is not under `CALL`.                                  | Indent both lines under `CALL`.                                                             |
| Warning `W381`                                    | A `DO` list holds `RESPOND`, `DELEGATE`, or another dropped action.  | Move the welcome text to the branch `RESPOND`.                                              |
| Wrong welcome selected                            | A branch condition evaluates earlier than expected.                  | Compare the branch order. Check `dsl_on_start_branch` for the matched index.                |
| Branch skipped                                    | The condition failed to evaluate.                                    | Look for `dsl_on_start_branch_error` in the trace.                                          |
| No welcome, but `SET` values exist                | A lazy start or a suppressing channel dropped the text.              | Look for `dsl_on_start_skipped`, or check whether the first message created the session.    |
| The flow entry step does not run at startup       | A branch welcome owns the startup turn.                              | Check `dsl_on_start_branch`.                                                                |

## Related HowTos

- [How to create a welcome message for a new conversation](create-welcome-message.md)
- [How to personalize a welcome message for returning users](personalize-returning-user-welcome.md)
- [How to run an authentication or profile lookup during welcome](run-auth-profile-lookup-on-start.md)
- [How to route users from the welcome experience to the right agent](route-users-from-welcome.md)
- [How to initialize session variables before the first user turn](initialize-session-before-first-turn.md)
- [How to design channel-specific welcome experiences](design-channel-specific-welcome.md)
- [How to handle empty-state and fallback greetings](handle-fallback-greetings.md)
