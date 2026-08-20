# How to use ON_START to greet users before the first message

Use this pattern when the agent must run startup logic before the user sends the first turn.

## Concept

`ON_START` is the session-start lifecycle handler. It can set session values, call a tool, choose a response branch, return voice or rich payloads, and delegate to another agent. It runs once per initialized runtime session and is idempotent: if the session is already initialized, startup does not run again.

Use `ON_START` for work that belongs to session initialization: greeting, reading channel context, loading a profile, setting counters, or selecting a first-turn experience. Do not use it as a replacement for normal per-turn routing.

## Minimal working example

```abl
AGENT: On_Start_Welcome_Agent
GOAL: "Run startup logic before the first user message"

ON_START:
  SET: startup_source = session.interaction.current.channel
  RESPOND: "Hello. I am ready to help."

FLOW:
  entry_point: first_step
  steps:
    - first_step

first_step:
  REASONING: false
  RESPOND: "You reached us from {{startup_source}}."
  THEN: COMPLETE
```

## How it works

`SET` executes before the response. That means values copied from runtime context can be interpolated into the welcome or into the first flow step. The runtime emits `dsl_set` traces for assignments and `dsl_respond` traces for the startup response.

## Common variations

### Choose a branch at startup

Branches are evaluated in order. The first matching branch wins. An `ELSE` branch is the default branch.

```abl
AGENT: On_Start_Branch_Agent
GOAL: "Choose the first welcome turn from session context"

ON_START:
  BRANCHES:
    - IF: session.interaction.current.language == "fr"
      RESPOND: "Bonjour. Comment puis-je vous aider ?"
    - ELSE:
      RESPOND: "Hello. How can I help?"

FLOW:
  entry_point: ready
  steps:
    - ready

ready:
  REASONING: false
  RESPOND: "Ready."
  THEN: COMPLETE
```

## Verification

Create sessions with different interaction language values and confirm the selected welcome changes. In traces, check `dsl_on_start_branch` for the matched branch index. Confirm `ON_START` runs once by sending a second message in the same session and checking that no second startup trace is emitted.

## Common mistakes

| Mistake                                     | Why it happens                               | How to avoid it                                                                           |
| ------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Putting `SET` or `CALL` inside a branch     | Branches look like mini flows.               | Keep side effects at top-level `ON_START`; use branches only to select startup responses. |
| Expecting startup to rerun on every message | `ON_START` is a session initialization hook. | Use normal flow, handoff, or reasoning logic for per-turn behavior.                       |
| Branching on values that do not exist yet   | The first user turn has not happened.        | Branch only on runtime context, constants, memory recall, or values set during startup.   |

## Troubleshooting

If a branch condition is malformed, the runtime fails closed and falls back to the top-level `ON_START` response when one exists. If no startup response is returned, the flow can still run from its entry point.

## Production readiness checklist

- Put side effects at top-level `ON_START`; branches can choose responses but cannot run `SET`, `CALL`, or `DELEGATE`.
- Use an `ELSE` branch or a top-level fallback response.
- Keep branch conditions based on values that are present before the first user turn.
- Validate traces for `dsl_on_start`, `dsl_set`, and `dsl_on_start_branch`.
