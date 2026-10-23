# How to handle messages that contain multiple user intents

Use this pattern when customers bundle several tasks in one message, such as "check my balance, pay my bill, and update my address". The `MULTI_INTENT:` section tells the agent how to detect those requests and in what order to handle them, so it does not drop the secondary ones.

## Concept

`MULTI_INTENT:` is a top-level section on an `AGENT:` or a `SUPERVISOR:`. Multi-intent handling is on by default. You add the section to change how the requests are handled.

Three layers set the values. The agent section wins over the project runtime configuration, and the project configuration wins over the platform defaults.

Three sources can find several requests in one message.

| Source | Applies to | Notes |
| ------ | ---------- | ----- |
| Several routing calls in one model turn | A supervisor with no `BEHAVIOR` block, or with `ROLE: orchestrator` | The supervisor model calls more than one `handoff_to_` or `delegate_to_` action. `max_intents` and `confidence_threshold` do not filter these calls. Each call must still pass its route `WHEN` and `ENABLED_WHEN`. |
| The classifier in the execution pipeline | Agents with the execution pipeline on | `max_intents` and `confidence_threshold` apply. The classifier also rates how the requests relate. |
| Two or more `ON_INPUT` branches that match one message | Flow agents | The branch conditions decide. `max_intents` applies. |

A supervisor with `ROLE: router` does not make several routing calls in one turn. It routes one request at a time.

The platform rates how the requests relate as `independent`, `dependent`, or `ambiguous`. The `auto` strategy and the `parallel` strategy use this rating.

## Minimal working example

This supervisor uses the default strategy, `primary_queue`. It handles the first request now and queues the others. The specialists are short stand-ins.

```abl
SUPERVISOR: Multi_Intent_Service_Supervisor
GOAL: "Handle messages that contain more than one customer request"

MULTI_INTENT:
  enabled: true
  strategy: primary_queue
  max_intents: 3
  confidence_threshold: 0.6
  queue_max_age_ms: 600000

INTENTS:
  check_balance: "Customer wants the account balance."
  pay_bill: "Customer wants to pay a bill."
  update_address: "Customer wants to change the address."

HANDOFF:
  - TO: Balance_Agent
    WHEN: intent.category == "check_balance"
    RETURN: true
    SUMMARY: "Customer wants to check the balance."

  - TO: Bill_Payment_Agent
    WHEN: intent.category == "pay_bill"
    RETURN: true
    SUMMARY: "Customer wants to pay a bill."

  - TO: Address_Update_Agent
    WHEN: intent.category == "update_address"
    RETURN: true
    SUMMARY: "Customer wants to update the address."
```

```abl
AGENT: Balance_Agent
GOAL: "Answer balance requests"
```

```abl
AGENT: Bill_Payment_Agent
GOAL: "Handle bill payments"
```

```abl
AGENT: Address_Update_Agent
GOAL: "Handle address changes"
```

Every property in `MULTI_INTENT:` is optional. The values above are the defaults.

Send "Check my balance and pay my bill." The supervisor routes to `Balance_Agent` first. When that specialist finishes its answer, the same reply ends with an offer for the second request, such as "Next: pay my bill. Would you like me to help with that?". The customer accepts or declines.

## How it works

1. A source in the table above finds two or more requests.
2. For the classifier and for flow branches, the platform drops requests below `confidence_threshold` and keeps at most `max_intents`.
3. The platform picks a strategy. The `auto` and `parallel` strategies adjust it by the relationship rating. The table below shows the result.
4. The platform dispatches the requests with that strategy.

A `HANDOFF` entry without `HISTORY` gives each specialist the full conversation history. A project-level coordination default can change this value.

## MULTI_INTENT properties

| Property | Type | Default | Valid range | Description |
| -------- | ---- | ------- | ----------- | ----------- |
| `enabled` | boolean | `true` | `true`, `false` | Turns multi-intent handling on or off. When it is off, a supervisor makes one routing call per turn. |
| `strategy` | string | `primary_queue` | `primary_queue`, `sequential`, `parallel`, `disambiguate`, `auto` | How the requests are handled. |
| `unknown_relationship_strategy` | string | `parallel` | `sequential`, `parallel`, `disambiguate` | The relationship to assume for several routing calls in one turn. `parallel` means independent, `sequential` means dependent, and `disambiguate` means ambiguous. |
| `max_intents` | integer | `3` | 1 to 10 | The most requests the platform keeps from one message. |
| `confidence_threshold` | number | `0.6` | 0.0 to 1.0 | The lowest confidence for a request to count. |
| `queue_max_age_ms` | integer | `600000` | 0 to 3600000 | How long a queued request waits before the platform drops it. Use a positive value. |
| `advance_on_primary_response` | boolean | `true` | `true`, `false` | Counts the first finished answer from the primary specialist as its completion, so the next offer appears in the same reply. Set `false` to wait for a completion condition or a return. |

An invalid value fails compilation. For example, `strategy: fanout` reports `MULTI_INTENT_INVALID_STRATEGY`, and `max_intents: 11` reports `MULTI_INTENT_INVALID_MAX_INTENTS`. The compiler ignores an unknown key without a message.

### Project-level settings

These settings exist only in the project runtime configuration. Set them in the Runtime Config tab of the Studio project settings, or through the runtime configuration API.

| Setting | Values | Effect |
| ------- | ------ | ------ |
| `completion_signal` | `delivered_response` (default), `task_signal` | What finishes a request. With `task_signal`, the specialist must signal that it is done. |
| `list_other_requests` | `false` (default), `true` | Lets one routing call list the customer's other requests. |
| `governed_tasks`, `offer_policy`, `child_task_view`, `manage_safeguard`, `offer_resolver` | Listed in the Runtime Config tab | Governed multi-intent handling. |

Do not write these keys in an agent `MULTI_INTENT:` section. `governed_tasks`, `offer_policy`, `child_task_view`, `manage_safeguard`, and `offer_resolver` fail with error `E465`. The compiler ignores `completion_signal` and `list_other_requests` in an agent section without a message.

## Strategy reference

### primary_queue (default)

The platform handles the first request now and queues the rest. After the primary specialist gives a finished answer, the reply ends with an offer for the next queued request. The customer can accept or decline. The platform asks before it runs any queued request. The platform drops a queued request after `queue_max_age_ms`.

### sequential

The platform runs the requests one at a time, in order. Each request gets the earlier results as context. Use it when a later request depends on an earlier one, such as confirming identity before paying a bill.

```abl
SUPERVISOR: Sequential_Service_Supervisor
GOAL: "Handle dependent requests in order"

MULTI_INTENT:
  strategy: sequential
  max_intents: 4
  confidence_threshold: 0.7

INTENTS:
  verify_identity: "Customer must confirm who they are."
  pay_bill: "Customer wants to pay a bill."

HANDOFF:
  - TO: Verification_Agent
    WHEN: intent.category == "verify_identity"
    RETURN: true
    SUMMARY: "Confirm the customer identity."

  - TO: Bill_Payment_Agent
    WHEN: intent.category == "pay_bill"
    RETURN: true
    SUMMARY: "Pay the bill after identity is confirmed."
```

```abl
AGENT: Verification_Agent
GOAL: "Confirm customer identity"
```

```abl
AGENT: Bill_Payment_Agent
GOAL: "Handle bill payments"
```

- A specialist that needs an answer from the customer pauses the plan. The customer's reply goes to that specialist, and the plan resumes after it.
- A failed request does not stop the plan. The reply reports the failure.
- If every request fails, the customer sees a fixed message asking to try again or to ask for one request at a time.

### parallel

The platform sends the requests to specialists at the same time and merges the answers into one reply. Use it only for a supervisor whose specialists answer without asking the customer questions. A specialist that must ask a question loses its branch in a fan-out. A `DELEGATE` child cannot wait for customer input at all, so use a `RETURN: true` handoff for a specialist that needs answers from the customer.

```abl
SUPERVISOR: Parallel_Service_Supervisor
GOAL: "Handle independent customer requests at the same time"

MULTI_INTENT:
  enabled: true
  strategy: parallel
  unknown_relationship_strategy: parallel

INTENTS:
  billing: "Billing and invoice questions."
  shipping: "Order delivery and tracking questions."

HANDOFF:
  - TO: Billing_Specialist
    WHEN: intent.category == "billing"
    RETURN: true
    SUMMARY: "Customer has a billing question."

  - TO: Shipping_Specialist
    WHEN: intent.category == "shipping"
    RETURN: true
    SUMMARY: "Customer has a shipping question."
```

```abl
AGENT: Billing_Specialist
GOAL: "Answer billing questions"
```

```abl
AGENT: Shipping_Specialist
GOAL: "Answer shipping questions"
```

The platform lowers `parallel` to a safer strategy when the requests are dependent or ambiguous. See [What the platform runs](#what-the-platform-runs).

### disambiguate

The platform lists the requests and asks which to handle first. The customer replies with the option number, the exact option text, a button, or a plain-language answer when a classifier is available. The customer can also reply "pause", "resume", or "cancel". The other options stay in the queue as offers. The platform asks before it runs any of them.

### auto

The platform decides from the relationship rating. `auto` never fans out. Write `strategy: parallel` when you want fan-out.

```abl
SUPERVISOR: Auto_Router
GOAL: "Route requests by how the customer's requests relate"

MULTI_INTENT:
  strategy: auto
  unknown_relationship_strategy: disambiguate
  max_intents: 5

INTENTS:
  billing: "Billing and payment questions."
  technical: "Technical support and troubleshooting."

HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    RETURN: true
    SUMMARY: "Billing question."

  - TO: Technical_Agent
    WHEN: intent.category == "technical"
    RETURN: true
    SUMMARY: "Technical question."
```

```abl
AGENT: Billing_Agent
GOAL: "Handle billing questions"
```

```abl
AGENT: Technical_Agent
GOAL: "Handle technical questions"
```

### What the platform runs

| Declared strategy | Independent | Dependent | Ambiguous |
| ----------------- | ----------- | --------- | --------- |
| `primary_queue`, `sequential`, `disambiguate` | As declared. | As declared. | As declared. |
| `parallel` on a supervisor | `parallel` | `sequential` | `disambiguate` |
| `parallel` on any other agent | `sequential` | `sequential` | `disambiguate` |
| `auto` | `sequential` | `sequential` | `disambiguate` |

For several routing calls in one turn, the rating comes from `unknown_relationship_strategy`. The default `parallel` rates them independent. So `strategy: auto` with the default runs `sequential`, and `strategy: auto` with `unknown_relationship_strategy: disambiguate` asks the customer.

## Common variations

### Flow agent with two matching branches

A flow agent detects several requests when two or more `ON_INPUT` branches on the current step match the same message. This agent asks which request to handle first.

```abl
AGENT: Support_Scripted_Agent
GOAL: "Handle billing and shipping requests in a scripted flow"

MULTI_INTENT:
  strategy: disambiguate
  max_intents: 2

FLOW:
  entry_point: detect
  steps:
    - detect
    - billing
    - shipping

detect:
  REASONING: false
  ON_INPUT:
    - IF: input contains "bill"
      THEN: billing
    - IF: input contains "ship"
      THEN: shipping
    - ELSE:
      RESPOND: "Please ask me about billing or shipping."
      THEN: COMPLETE

billing:
  REASONING: false
  RESPOND: "The billing team corrected the invoice."
  THEN: COMPLETE

shipping:
  REASONING: false
  RESPOND: "The shipping team confirmed the package is on schedule."
  THEN: COMPLETE
```

Send "Please fix my bill and also check the shipment." The agent lists "1. billing" and "2. shipping". Reply "2" to run the shipping step.

### Customize the prompts

Set the prompts in the `MESSAGES:` block. Add this block to a supervisor that uses `disambiguate`.

```abl
MESSAGES:
  multi_intent_disambiguate_header: "I see more than one request. Which should I handle first?"
  multi_intent_disambiguate_option: "Option {{index}}: {{choice}}"
  multi_intent_disambiguation_reprompt: "Reply with an option number, or say pause or cancel."
  multi_intent_disambiguation_paused: "I paused this choice. Tell me when to continue."
  multi_intent_disambiguation_cancelled: "I cancelled this choice."
  multi_intent_queued_notice: "I will handle your other requests after this one."
  multi_intent_queued_follow_up: "Next: {{next_intent}}. Should I continue?"
  multi_intent_queue_declined_ack: "Understood. What else can I help with?"
```

| Key | Variables |
| --- | --------- |
| `multi_intent_disambiguate_option` | `index`, `choice` (the customer's own words for the request), `label`, `intent`, `target`, `category`, `summary`, `confidence` (a whole-number percentage). |
| `multi_intent_queued_follow_up` | `next_intent`. |
| `multi_intent_queued_notice` | `next_intent`. If the notice uses the variable, it replaces the follow-up text. |

The platform default for `multi_intent_disambiguate_option` is `{{index}}. {{choice}}`. The text `{{index}}. {{intent}} (confidence: {{confidence}})` was the earlier default. The platform treats that exact text as unset and uses the current default. Write a different option text to override the default.

## Verification

1. Validate the supervisor and every target agent together.
2. Send "Check my balance and pay my bill." Expect the first specialist to answer, and an offer for the second request in the same reply.
3. Accept the offer. Expect the second specialist to answer.
4. Send one request. Expect normal routing with no offer.
5. For `disambiguate`, expect a numbered list. Reply with a number and expect that request to run.
6. For `sequential`, expect both answers, in order, in one reply.

In the trace, check these events.

- `multi_intent_plan_built` is a `decision` event. It shows `strategy`, `declaredStrategy`, `relationship`, and `targets`.
- `multi_intent_queued` and `multi_intent_queue_seeded` show the queued requests for `primary_queue`.
- `multi_intent_queue_surfaced` shows the offer. `multi_intent_queue_accepted` and `multi_intent_queue_declined` show the reply.
- `multi_intent_queue_retired` with `reasonCode` `queued_intent_expired` shows a dropped request.
- `multi_intent_disambiguate_choice` shows the option the customer chose.
- `multi_intent_sequential_executed` and `multi_intent_parallel_executed` are `decision` events for those strategies.

## Production readiness checklist

- Every route has an owner, a distinct condition, and a short `SUMMARY`.
- A `RETURN: true` specialist finishes its task, so the next request can start.
- Every route used in a multi-request plan passes its `WHEN` and `ENABLED_WHEN`. The platform drops a route that fails.
- `queue_max_age_ms` fits the length of a normal session.
- For `parallel`, every specialist answers without asking the customer a question.
- For `sequential`, a specialist that needs input can pause the plan, and your test covers it.
- For `auto`, tests cover the independent, dependent, and ambiguous cases.
- `MESSAGES:` text matches your brand voice.
- Tests cover a single request, a message below `confidence_threshold`, a declined offer, and an expired offer.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Expecting `auto` to fan out | The name suggests a smart choice. | Write `strategy: parallel`. `auto` never fans out. |
| Using `parallel` on a flow agent or a specialist that asks questions | Fan-out looks faster. | Use `sequential` or `primary_queue`. |
| Setting `strategy: parallel` and expecting it to hold | The rating is dependent or ambiguous. | Check the `strategy` in `multi_intent_plan_built`. |
| Writing the old default option text | It was copied from an older example. | Use a different text. The platform replaces the exact old default. |
| Writing `governed_tasks` or `offer_policy` in the agent section | They look like agent settings. | Set them in the project runtime configuration. The compiler reports `E465`. |
| Expecting `max_intents` to cap a supervisor's routing calls | The name suggests a hard limit. | It filters classifier and flow detection only. |
| Setting `ROLE: router` and expecting several requests per turn | A router routes one request at a time. | Remove `BEHAVIOR`, or use `ROLE: orchestrator`. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| A second request is never offered | The primary specialist asked a question, or `advance_on_primary_response` is `false`. | `multi_intent_delivered_turn_outcome` and the specialist's `COMPLETE` condition. |
| Requests run one after another when you set `parallel` | The agent is not a supervisor, or the rating is dependent or ambiguous. | `declaredStrategy` and `strategy` in `multi_intent_plan_built`. |
| No menu appears for `disambiguate` | The message produced one request. | `multi_intent_plan_built` and the number of `targets`. |
| A queued request disappears | It was older than `queue_max_age_ms`. | `multi_intent_queue_retired`. |
| Secondary requests are dropped | `confidence_threshold` is high or `max_intents` is low, for classifier or flow detection. | The values in `multi_intent_plan_built`. |
| The customer sees different option text | The `MESSAGES:` block is missing or used the old default. | The `MESSAGES:` block and the variables. |
| Compile error `MULTI_INTENT_INVALID_STRATEGY` | The strategy is not one of the five values. | The spelling of `strategy`. |
| Error `E465` | A project-only key is in the agent section. | Move the key to the project runtime configuration. |
| A supervisor never batches requests | `ROLE: router`, or `enabled: false`. | The `BEHAVIOR` block and `enabled`. |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to route users by detected intent
- How to clarify before routing to a specialist agent
- How to route unclear or unsupported requests to a fallback agent
- How to debug routing decisions in traces
