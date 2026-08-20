# How to route users from the welcome experience to the right agent

Use this pattern when the first screen or first assistant turn should guide the user into the right specialist path.

## Concept

Welcome routing turns the first interaction into a routing signal. The signal can come from a button, an entry-page value copied into session context, or the user's first typed response. Once the signal is known, normal handoff routing should move the conversation to a specialist agent.

Do not reference a specialist agent unless it exists in the project. A routing example is only operational when the target agents are defined and the value used in `WHEN` is actually collected or set.

## Minimal working example

```abl
AGENT: Welcome_Router_Agent
GOAL: "Route users from the welcome experience to the right specialist"

GATHER:
  startup_choice:
    PROMPT: "Which option did you choose?"
    TYPE: string
    REQUIRED: true

HANDOFF:
  - TO: Billing_Agent
    WHEN: startup_choice == "billing"
    PASS: [account_id, startup_choice]
    SUMMARY: "User selected billing from the welcome experience"
  - TO: Returns_Agent
    WHEN: startup_choice == "returns"
    PASS: [account_id, startup_choice]
    SUMMARY: "User selected returns from the welcome experience"

ON_START:
  RESPOND: "Welcome. Choose billing or returns."
    ACTIONS:
      - BUTTON: "Billing" -> billing
        VALUE: "billing"
      - BUTTON: "Returns" -> returns
        VALUE: "returns"

FLOW:
  entry_point: capture_choice
  steps:
    - capture_choice

capture_choice:
  REASONING: false
  GATHER:
    startup_choice:
      PROMPT: "Which option did you choose?"
      TYPE: string
      REQUIRED: true
  THEN: COMPLETE
```

```abl
AGENT: Billing_Agent
GOAL: "Handle billing questions"

FLOW:
  entry_point: start
  steps:
    - start

start:
  REASONING: false
  RESPOND: "I can help with billing."
  THEN: COMPLETE
```

```abl
AGENT: Returns_Agent
GOAL: "Handle returns questions"

FLOW:
  entry_point: start
  steps:
    - start

start:
  REASONING: false
  RESPOND: "I can help with returns."
  THEN: COMPLETE
```

## How it works

The welcome message presents choices. The flow gathers `startup_choice`. The handoff conditions use that same field. The specialist agents are included so the compiler and deployment can resolve the targets.

## Common variations

### Route from a known entry topic

If the channel integration already knows the entry topic, copy it into a session variable during startup and route with that value.

```abl
AGENT: Welcome_Context_Router
GOAL: "Route from startup context when the channel passes an entry intent"

HANDOFF:
  - TO: Claims_Agent
    WHEN: entry_topic == "claims"
    PASS: [member_id, entry_topic]
    SUMMARY: "User entered from a claims landing page"
  - TO: General_Service_Agent
    WHEN: entry_topic == "general"
    PASS: [member_id, entry_topic]
    SUMMARY: "User needs general service"

ON_START:
  SET: entry_topic = "claims"
  RESPOND: "Welcome. I will get you to the right team."

FLOW:
  entry_point: continue
  steps:
    - continue

continue:
  REASONING: false
  RESPOND: "Tell me what you need help with."
  THEN: COMPLETE
```

```abl
AGENT: Claims_Agent
GOAL: "Handle claims questions"

FLOW:
  entry_point: start
  steps:
    - start

start:
  REASONING: false
  RESPOND: "I can help with claims."
  THEN: COMPLETE
```

```abl
AGENT: General_Service_Agent
GOAL: "Handle general service questions"

FLOW:
  entry_point: start
  steps:
    - start

start:
  REASONING: false
  RESPOND: "I can help with general service."
  THEN: COMPLETE
```

## Verification

Test each startup choice and confirm the expected handoff target. In traces, inspect the startup response, the collected or set routing value, and the handoff event. Also test an unknown choice and confirm the user is asked to clarify instead of being routed incorrectly.

## Common mistakes

| Mistake                                        | Why it happens                                   | How to avoid it                                                |
| ---------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------- |
| Referencing a route variable that is never set | Button labels and route conditions drift apart.  | Gather or set the exact value used in `WHEN`.                  |
| Showing buttons without a typed fallback       | Some users type instead of clicking.             | Let the flow gather the same route value from text.            |
| Omitting target agents from the project        | The supervisor example looks complete by itself. | Define every `TO` agent or state the project-local dependency. |

## Troubleshooting

If no route matches, verify that the variable in `WHEN` has the same name as the gathered or set value. If the compiler reports missing targets, define or import the specialist agents before validating the project.

## Production readiness checklist

- Define every target specialist agent.
- Make every routing variable traceable to `GATHER`, `SET`, channel context, or tool output.
- Add a fallback for unknown or ambiguous choices.
- Pass only the fields the specialist needs.
- Test each welcome option before publishing.
