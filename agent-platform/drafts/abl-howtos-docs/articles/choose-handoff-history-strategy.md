# Choose the right history strategy for handoff

Use this pattern when you must pick between `full`, `last_n`, `summary_only`, `auto`, and `none` for a handoff route.

## Concept

Each strategy trades context for risk. More history helps the target understand the customer. It also costs more tokens, and it can expose data the target does not need.

Start from what the target must know to do its job. Then give it the least history that covers that need.

| Strategy | The target receives | Choose it when |
| -------- | ------------------- | -------------- |
| `none` | No messages. | `PASS` fields carry everything the target needs. |
| `summary_only` | Your `SUMMARY` text. | The target needs the reason for the handoff, not the words. |
| `last_n` | The last N messages. | The target needs the recent exchange, such as the last question and answer. |
| `auto` | The summary, or the last 5 messages. | You want the platform to pick, and you accept the fallback. |
| `full` | The whole conversation. | The target must see the customer's exact words. |

`full` is the default when you omit `HISTORY`. Choose a strategy on purpose for each route.

How to decide:

1. Can `PASS` fields replace the history? If yes, use `none`.
2. Is a short brief enough? If yes, write a `SUMMARY` and use `summary_only`.
3. Does the target need the latest exchange? If yes, use `last_n`.
4. Does the target need the customer's exact words, or must it audit the whole conversation? If yes, use `full`.
5. Do you want the platform to choose between the summary and recent messages? Use `auto`. State in your tests which one you expect.

For the syntax and edge cases of each value, see [Pass full, recent, or no conversation history](/agent-platform/abl/how-to/choose-handoff-history-scope). For the summary, see [Pass a conversation summary during handoff](/agent-platform/abl/how-to/pass-summary-during-handoff).

## Minimal working example

A care router has four specialists. Each route uses the strategy that fits its target.

| Route | Strategy | Reason |
| ----- | -------- | ------ |
| Fraud | `summary_only` | The specialist needs the fact of the report, not the card details the customer typed. |
| Loan | `auto` | A summary is enough, and a short window is an acceptable fallback. |
| Complaint | `full` | The specialist must read the customer's exact words. |
| Address change | `none` | The customer reference is all the specialist needs. |

The specialists are short stand-ins in the same project. Replace them with your real agents.

`agents/care-hub.agent.abl`

```yaml
SUPERVISOR: Care_Hub
GOAL: "Route care requests and choose a history strategy for each specialist"

BEHAVIOR:
  role: router

INTENTS:
  card_fraud: "Unrecognized card transactions or a lost card."
  loan_question: "Questions about a loan balance or terms."
  complaint: "A complaint about service or a past experience."
  address_change: "A change of postal address."

MEMORY:
  session:
    - customer_ref
      TYPE: string
      DESCRIPTION: "Customer reference number."

GATHER:
  customer_ref:
    PROMPT: "What is your customer reference number?"
    TYPE: string
    REQUIRED: true

HANDOFF:
  - TO: Fraud_Agent
    WHEN: intent.category == "card_fraud" AND customer_ref IS SET
    PASS: [customer_ref]
    SUMMARY: "Customer {{customer_ref}} reports card fraud."
    HISTORY: summary_only
    RETURN: false

  - TO: Loan_Agent
    WHEN: intent.category == "loan_question" AND customer_ref IS SET
    PASS: [customer_ref]
    SUMMARY: "Customer {{customer_ref}} has a loan question."
    HISTORY: auto
    RETURN: false

  - TO: Complaint_Agent
    WHEN: intent.category == "complaint"
    PASS: [customer_ref]
    HISTORY: full
    RETURN: false

  - TO: Address_Agent
    WHEN: intent.category == "address_change" AND customer_ref IS SET
    PASS: [customer_ref]
    HISTORY: none
    RETURN: false
```

`agents/fraud-agent.agent.abl`

```yaml
AGENT: Fraud_Agent
GOAL: "Handle card fraud reports"

GATHER:
  customer_ref:
    PROMPT: "What is your customer reference number?"
    TYPE: string
    REQUIRED: true
  detail:
    PROMPT: "Tell me more about the request."
    TYPE: string
    REQUIRED: true

COMPLETE:
  - WHEN: detail IS SET
    RESPOND: "I recorded your request for customer {{customer_ref}}."
```

`Loan_Agent`, `Complaint_Agent`, and `Address_Agent` are the same file with a different `AGENT` and `GOAL`. Replace them with your real agents.

Variable sources:

- `customer_ref` is a `GATHER` field of the router. Each route passes it.
- `detail` is gathered by each specialist.

## How it works

The runtime resolves the strategy once, when it creates the target thread.

1. If the route sets `HISTORY`, the runtime uses it.
2. If not, the runtime uses the project-level default, when your deployment sets one.
3. If neither exists, the runtime uses `full`.

For `auto`, the runtime then decides:

- It sends the summary only when the route has a non-empty `SUMMARY` and the target runs on a model.
- Otherwise it sends the last 5 messages.
- When a pipeline short-circuit triggers the handoff, it sends the last 5 messages even if a summary exists.

The strategy also applies to remote agents and to the return trip of a returnable child. See [Preserve context when calling remote agents](/agent-platform/abl/how-to/preserve-context-for-remote-agents).

## Common variations

### Pair a short window with a summary

Use `last_5` with a `SUMMARY` when the target needs the brief and the latest exchange.

```yaml
HANDOFF:
  - TO: Loan_Agent
    WHEN: intent.category == "loan_question" AND customer_ref IS SET
    PASS: [customer_ref]
    SUMMARY: "Customer {{customer_ref}} has a loan question."
    HISTORY: last_5
    RETURN: false
```

This is a section snippet. It needs the router `GATHER` field from the minimal example.

### Raise the strictness for regulated data

Move a route from `full` to `none` or `summary_only` when earlier messages can hold personal or payment data. See [Minimize context for privacy and compliance](/agent-platform/abl/how-to/minimize-agent-context).

### Delegates have no history setting

A `DELEGATE` has no `HISTORY`. The sub-agent receives no conversation messages. It receives the `INPUT` fields and a few automatic session values. If a delegate needs context, map it in `INPUT`. See [Delegate and map the result](/agent-platform/abl/how-to/delegate-and-map-result).

## Verification

1. Run the validator on all five files. Expect no errors and no warnings.
2. For each route, send a request after two unrelated messages.
3. Fraud: expect the specialist to know the brief and nothing the customer typed earlier.
4. Loan: expect the specialist to know the brief. Expect it not to know earlier messages.
5. Complaint: expect the specialist to restate your earlier messages.
6. Address change: expect the specialist to know only the customer reference.
7. Check each `handoff` trace event for the right `to` agent.

## Production readiness checklist

- Each route states a strategy.
- Each strategy appears in a table of decisions that your team reviewed.
- Each `summary_only` and `auto` route has a `SUMMARY`.
- Each target passes its tests with exactly the history it receives.
- Routes that handle personal or payment data do not use `full` without a documented reason.
- Tests cover a long conversation for every route.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Leaving every route on the default | The default works in a demo. | Choose a strategy per route. |
| Using `auto` and assuming the summary always wins | `auto` falls back to 5 messages. | Use `summary_only` when you need exactly the summary. |
| Using `summary_only` with no `SUMMARY` | The route looks complete. | Add a `SUMMARY`. The compiler warns otherwise. |
| Using `none` and no `PASS` fields | History seems optional. | Pass the fields the target needs. |
| Using `full` to avoid design work | It never loses context. | Decide what the target needs. Send that. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The target repeats a question the customer answered | The strategy hides the answer, and `PASS` does not carry it. | The strategy and the `PASS` list. |
| The target mentions data it should not know | The route uses `full`, or the default applies. | The `HISTORY` line on the route. |
| `auto` behaves differently across routes | One target runs on a model and another does not. | The target type and the route `SUMMARY`. |
| Token use is high on one route | The route sends `full` on a long conversation. | The strategy and the conversation length. |

{{related}}

- [Pass full, recent, or no conversation history](/agent-platform/abl/how-to/choose-handoff-history-scope)
- [Pass a conversation summary during handoff](/agent-platform/abl/how-to/pass-summary-during-handoff)
- [Pass specific fields between agents](/agent-platform/abl/how-to/pass-fields-between-agents)
- [Minimize context for privacy and compliance](/agent-platform/abl/how-to/minimize-agent-context)
- [Preserve context when calling remote agents](/agent-platform/abl/how-to/preserve-context-for-remote-agents)
- [Debug missing or incorrect context after handoff](/agent-platform/abl/how-to/debug-handoff-context)
