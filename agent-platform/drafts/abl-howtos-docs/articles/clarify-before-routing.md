# How to clarify before routing to a specialist agent

Use this when a request is short, vague, or missing the one detail that decides which specialist owns it.

## Concept

Clarifying means the customer answers one question before a route is chosen. ABL has three ways to ask. Pick by who controls the question.

| Approach | Who asks | Use when |
| -------- | -------- | -------- |
| Router supervisor | The model, through a built-in clarification action | Any wording is acceptable and the categories are easy to describe in plain language. |
| Entry agent with an enum `GATHER` in a `FLOW` step | The runtime, as a scripted step | You need a fixed list of answers, validation, and routes that do not depend on the model. |
| Fallback specialist | A specialist agent | Clarification needs several questions. See the fallback agent HowTo. |

A `GATHER` block on a supervisor does not pause the conversation to ask a question. The supervisor model chooses a route on every turn. A supervisor `GATHER` field fills from the routing call, and only when the field sets `infer: true`. A route `WHEN` that reads a supervisor `GATHER` field stays false while the field is empty. The runtime then refuses the route. Use one of the approaches in the table instead.

## Minimal working example: router supervisor

A `router` supervisor cannot answer in text. When no route fits the request, the model calls a built-in clarification action with one question. The runtime sends that question to the customer and ends the turn. The next message goes through routing again.

This example is a project-level set. The two specialists are short stand-ins for your real agents.

```abl
SUPERVISOR: Support_Router
GOAL: "Route each request to billing or technical support, and ask one question when the request does not say which"
PERSONA: "Brief and polite. Ask only for the detail that decides the specialist."

BEHAVIOR:
  ROLE: router

INTENTS:
  billing: "Charges, invoices, refunds, or payment methods."
  technical_support: "Errors, outages, or product setup problems."

HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    RETURN: false
    SUMMARY: "Customer needs help with a billing question."

  - TO: Technical_Support_Agent
    WHEN: intent.category == "technical_support"
    RETURN: false
    SUMMARY: "Customer needs help with a technical problem."

AGENT: Billing_Agent
GOAL: "Resolve billing questions"

AGENT: Technical_Support_Agent
GOAL: "Resolve technical problems"
```

## How the router asks

- `INTENTS:` lists the categories. A `WHEN` that reads `intent.category` makes the model state a category when it calls the route.
- The model sees the clarification action next to the routes. It uses the action only when no route fits. The action takes one `message`, which is the question.
- The `PERSONA` text shapes how the question reads. The action has no other settings.
- The runtime offers the action only to supervisors with `BEHAVIOR: ROLE: router` and at least one route. A supervisor with no `BEHAVIOR` block can answer in text, so it asks in plain words and has no action.
- A route with no `HISTORY` passes the full conversation history. The specialist sees the question and the answer. A project default can change this value.
- The question does not set any variable. The customer's answer is a normal message.

## Ask with a fixed list of answers

Use an entry agent when the answer must be one of a known set. This example is a separate project. It replaces the router supervisor. The runtime asks the prompt, waits, and checks the answer against `OPTIONS`. When the step ends, the runtime checks each route `WHEN` in order. The first true route runs.

```abl
AGENT: Support_Entry_Agent
GOAL: "Ask which kind of help the customer needs, then send them to the matching specialist"
PERSONA: "Brief and polite"

HANDOFF:
  - TO: Billing_Agent
    WHEN: route_topic == "billing"
    PASS: [route_topic]
    SUMMARY: "Customer chose billing."
    RETURN: false
  - TO: Technical_Support_Agent
    WHEN: route_topic == "technical_support"
    PASS: [route_topic]
    SUMMARY: "Customer chose technical support."
    RETURN: false
  - TO: General_Service_Agent
    WHEN: route_topic == "other"
    PASS: [route_topic]
    SUMMARY: "Customer chose something else and needs triage."
    RETURN: false

FLOW:
  entry_point: ask_topic
  steps:
    - ask_topic

ask_topic:
  REASONING: false
  GATHER:
    route_topic:
      PROMPT: "What do you need help with: billing, technical_support, or other?"
      TYPE: enum
      OPTIONS: [billing, technical_support, other]
      REQUIRED: true
  THEN: COMPLETE

AGENT: Billing_Agent
GOAL: "Resolve billing questions"

AGENT: Technical_Support_Agent
GOAL: "Resolve technical problems"

AGENT: General_Service_Agent
GOAL: "Ask follow-up questions and route unsupported requests"
```

- `route_topic` comes from the `GATHER` field. Each route reads it and passes it on.
- An answer outside `OPTIONS` fails validation. The step asks again and no route runs.
- Give every option a route. A valid value with no matching route reaches `THEN: COMPLETE` and the session ends.
- The `other` option is the way out for unsupported requests. Point it at an agent that can triage.
- A quoted plain-language `WHEN` never matches in this scripted check. Use exact values here.

## Ask which of several requests to handle first

A message can hold more than one request. Multi-intent handling is on by default. The default `primary_queue` strategy serves the main request and queues the others. To ask the customer instead, set the strategy on the router supervisor. Add this block before the first `AGENT:` line of the router example.

```abl
MULTI_INTENT:
  strategy: disambiguate
  max_intents: 2
```

The runtime shows the choices and waits for the customer to pick one. See the multiple intents HowTo for the other strategies.

## Write quoted fallback text carefully

A quoted `WHEN` such as `WHEN: "the request does not fit any listed category"` is guidance for the model. It works when the model picks that route. It never routes on its own.

The runtime reads a quoted phrase as an expression when it has an uppercase `AND`, `OR`, or `NOT`. The same happens with a comparison symbol or a word such as `contains`. Write fallback text in lowercase words with no symbols.

## Verification

Router supervisor:

1. Send "I need help". Expect one question and no handoff. The trace shows a `tool_call` named `__clarify_routing__`.
2. Answer "I was charged twice". Expect a handoff to `Billing_Agent`. The trace shows `handoff_condition_check` with `result: true`.
3. Send "My app shows error 500". Expect `Technical_Support_Agent` with no question.

Entry agent:

1. Start a session. Expect the `route_topic` prompt.
2. Answer "pizza". Expect a validation message and the prompt again. No `handoff` event appears.
3. Answer "billing". Expect a `handoff` event to `Billing_Agent` with `reasonCode: handoff_permanent`. The preceding `handoff_condition_check` shows `source: flow_transition` and `currentStep: ask_topic`.
4. Repeat with `technical_support` and `other`.

## Production readiness checklist

- Every route target exists and has a clear owner.
- The router supervisor has `BEHAVIOR: ROLE: router`. Without it, no clarification action exists.
- Every category in a `WHEN` is declared in `INTENTS:`.
- Every `OPTIONS` value in the entry agent has a route.
- One route leads to an agent that handles unsupported requests.
- Tests cover a clear request, a vague request, an invalid answer, and a message with two requests.
- Quoted fallback text uses lowercase words and no comparison symbols.
- The trace shows the question or the validation message before the handoff.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Putting the clarification `GATHER` on a supervisor | The field looks like a question step. | Use a router supervisor or an entry agent with a `FLOW` step. |
| Routing on a supervisor `GATHER` field | The route `WHEN` reads a value the supervisor never stored. | Route on `intent.category`, or gather the field in an entry agent. |
| Expecting a router with no `BEHAVIOR` block to use the action | The action needs the `router` role. | Set `BEHAVIOR: ROLE: router`. |
| Leaving an `OPTIONS` value with no route | The list and the routes drift apart. | Compare the two lists on every change. |
| Asking a long form | Extra fields feel safe. | Ask for the one value that decides ownership. |
| Writing `AND` or `OR` in uppercase inside quoted text | The phrase reads like plain language. | Use lowercase words. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The supervisor never asks a question | The supervisor is not a `router`, or a route always fits. | The `BEHAVIOR` block, `INTENTS:` text, and route wording. |
| The supervisor routes with no question for a vague request | The category descriptions are broad. | Narrow the `INTENTS:` descriptions. |
| The trace says `Handoff to X blocked: WHEN condition not met` | The route reads a field that is not set. | `handoff_condition_check` `evaluatedContext` and `route_condition_unresolved`. |
| The entry agent asks again after a valid answer | The answer is not an exact `OPTIONS` value. | The `OPTIONS` list and the prompt wording. |
| The session ends after the answer | No route matches the value. | Add a route for every `OPTIONS` value. |
| The specialist asks for what the customer already said | The route passes no field, or the history is limited. | `PASS`, `HISTORY`, and the specialist `GATHER`. |
| A fallback route behaves unpredictably | The quoted text has uppercase `AND`, `OR`, or `NOT`. | Rewrite the phrase in lowercase words. |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to route unclear or unsupported requests to a fallback agent
- How to handle messages that contain multiple user intents
- How to debug routing decisions in traces
