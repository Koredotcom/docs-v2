# How to create a welcome message for a new conversation

Use this pattern when a conversation should open with a clear first message before the user asks for help.

## Concept

A welcome message is the first assistant-owned turn in a session. In ABL, the most direct way to author it is `ON_START`, because `ON_START` runs when the runtime initializes the session, before the first user message is processed.

Use a welcome message to orient the user, name the service, and make the first action obvious. Keep it short. If the same agent also has a `FLOW`, the top-level `ON_START` response behaves like a startup prelude: it can be emitted and the entry flow can continue. If an `ON_START` branch is selected, that branch owns the startup turn and the runtime can pause before the flow continues.

## Minimal working example

```abl
AGENT: Welcome_Message_Agent
GOAL: "Welcome the user and then continue to the first support step"

ON_START:
  RESPOND: "Welcome to Acme Support. I can help with orders, returns, billing, or account questions."

FLOW:
  entry_point: listen
  steps:
    - listen

listen:
  REASONING: false
  RESPOND: "What would you like help with today?"
  THEN: COMPLETE
```

## How it works

The runtime initializes the session, executes `ON_START`, emits the authored response when the channel supports proactive startup delivery, and then enters the flow entry step. The welcome response is also written into assistant history when it is delivered, so later reasoning can see what the user has already been told.

The first flow response should not repeat the welcome. Use it to ask the first useful question or show the first menu.

## Common variations

### Add buttons or rich content

Use actions when the channel can render buttons and you want the user to choose a common path immediately.

```abl
AGENT: Rich_Welcome_Agent
GOAL: "Welcome users with a card and a clear first action"

ON_START:
  RESPOND: "Welcome to Acme Support."
    FORMATS:
      markdown: |
        ## Welcome to Acme Support
        Choose a topic to begin.
    ACTIONS:
      - BUTTON: "Track an order" -> track_order
        VALUE: "track_order"
      - BUTTON: "Start a return" -> start_return
        VALUE: "start_return"

FLOW:
  entry_point: wait_for_choice
  steps:
    - wait_for_choice

wait_for_choice:
  REASONING: false
  RESPOND: "Select an option or describe your question."
  THEN: COMPLETE
```

## Verification

Start a new session and confirm that the welcome appears before the first user message. In traces, look for `dsl_on_start` followed by `dsl_respond` with `source: on_start`. If the flow also runs, the flow response should appear after the welcome.

## Common mistakes

| Mistake                                                           | Why it happens                                                    | How to avoid it                                                                            |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Repeating the same greeting in `ON_START` and the first flow step | Both are visible during startup on proactive channels.            | Make `ON_START` orient the user and make the first flow step ask the next useful question. |
| Putting long policy text in the welcome                           | The welcome becomes a wall of text before the user asks anything. | Keep startup copy short and move details into the next guided step.                        |
| Assuming every channel shows the proactive welcome                | Some channel contracts suppress startup payloads.                 | Test each channel and keep critical initialization separate from visible copy.             |

## Troubleshooting

If the welcome does not appear, check the channel contract. Some channels suppress proactive startup payloads and allow `ON_START` only for side effects. If the flow response repeats the welcome, move the greeting into `ON_START` and make the flow step ask the next question.

## Production readiness checklist

- Keep the welcome short enough for every channel.
- Include a useful next step, not only a greeting.
- Use rich content only when the target channel supports it.
- Verify traces for `dsl_on_start` and `dsl_respond`.
- Confirm the first flow step does not duplicate the startup message.
