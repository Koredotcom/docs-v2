# How to handle messages that contain multiple user intents

Multi-intent routing handles a single message such as “check my balance, pay my bill, and update my address.” ABL exposes `MULTI_INTENT` so the supervisor can queue, sequence, fan out, or ask the user to disambiguate depending on strategy and relationship between intents.

Use this when customers naturally bundle tasks and the experience should not drop secondary intents.

## How the pattern works

1. The supervisor receives the user message and keeps ownership until a route matches.
2. Intent categories, runtime context, gathered values, or tool results provide the routing evidence.
3. `HANDOFF` entries are evaluated in the authored order and the matching child receives only the declared context.
4. If the child is temporary, it returns through `ON_RETURN`; if it owns the conversation, it remains the active agent.

## Design choices

- `primary_queue` handles the best intent first and queues alternatives.
- `sequential` queues all detected work in order when later intents depend on earlier results.
- `parallel` is only safe for supervisor fan-out to independent agent targets; runtime downgrades unsafe cases.
- `disambiguate` asks the user to choose when detected intents are ambiguous.

## Validated example

```abl
SUPERVISOR: Multi_Intent_Service_Supervisor
GOAL: "Handle messages that contain more than one customer intent"

MULTI_INTENT:
  enabled: true
  strategy: primary_queue
  max_intents: 3
  confidence_threshold: 0.6
  queue_max_age_ms: 600000

INTENTS:
  check_balance: "Customer wants account balance."
  pay_bill: "Customer wants to pay a bill."
  update_address: "Customer wants to change address."

HANDOFF:
  - TO: Balance_Agent
    WHEN: intent.category == "check_balance"
    EXPECT_RETURN: true
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer wants to check balance."

  - TO: Bill_Payment_Agent
    WHEN: intent.category == "pay_bill"
    EXPECT_RETURN: true
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer wants to pay a bill."

  - TO: Address_Update_Agent
    WHEN: intent.category == "update_address"
    EXPECT_RETURN: true
    CONTEXT:
      pass: [customer_id]
      summary: "Customer wants to update address."

AGENT: Balance_Agent
GOAL: "Handle balance requests"

AGENT: Bill_Payment_Agent
GOAL: "Handle bill payment"

AGENT: Address_Update_Agent
GOAL: "Handle address changes"
```

## Common variations

- Primary intent plus queued alternatives.
- Sequential dependent work such as authenticate, then payment, then confirmation.
- Parallel supervisor fan-out for independent service tasks.

## Verification

- Parse the ABL and confirm there are no parser errors or parser warnings.
- Compile the ABL and confirm there are no compiler errors or compiler warnings.
- Test at least one matching utterance for each route and one utterance for the fallback or clarification path.
- Inspect traces for the selected target, condition result, passed context, and return behavior when `EXPECT_RETURN: true` is used.

## Production checklist

- Every specialist route has a clear owner and a concise context summary.
- Deterministic conditions use declared, gathered, tool-result, runtime, or returned fields.
- Semantic conditions are quoted as natural-language `WHEN` text.
- Temporary child agents produce every field mapped in `ON_RETURN`.
- Fallback behavior is explicit and does not hide missing intent coverage.

## Common mistakes

- Do not enable parallel fan-out for dependent work.
- Do not set `max_intents` so high that the user loses control of the conversation.
- Do not assume queued intents survive forever; queue age is configurable.

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to decide when to delegate, hand off, or use a workflow
- How to pass context between agents
