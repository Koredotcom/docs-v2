# How to decide whether to build one agent or multiple specialist agents

Use this guide when one customer-facing experience could be implemented either as one broad agent or as a supervisor with multiple specialist agents.

## Concept

A single agent owns the conversation and the outcome. It can gather information, call tools, answer, and complete the request without transferring ownership.

A specialist design separates the front door from the business owners. A supervisor receives the user request, chooses the right owner, and uses `HANDOFF` when another agent should take over. A specialist owns one capability, such as account access, order status, billing, claims, device care, or employee benefits.

The design question is ownership. If one team, policy set, permission model, and success criteria can own the outcome, keep one agent. If different teams, tools, policies, or escalation paths own different parts of the experience, use specialists.

## Decision guide

| Question       | Prefer one agent when                            | Prefer specialists when                                             |
| -------------- | ------------------------------------------------ | ------------------------------------------------------------------- |
| Scope          | Requests are tightly related.                    | The entry point receives unrelated business requests.               |
| Tools and data | The same tools and permissions apply.            | Different topics need different tools or data access.               |
| Risk           | One policy set is enough.                        | Each topic has different compliance, escalation, or approval rules. |
| Ownership      | One team updates and tests the whole experience. | Different teams own different business outcomes.                    |
| Routing        | No transfer is needed.                           | The user needs to be routed to the right owner.                     |

Do not split agents just because a domain is large. Splitting adds routing, context-passing, target-agent readiness, testing, monitoring, and fallback design.

## Minimal working example: one agent owns the outcome

This example is one agent file. It is enough when order-status work has one owner and one required field.

```abl
AGENT: Order_Status_Agent
GOAL: "Answer order status and delivery questions"

LIMITATIONS:
  - "Cannot issue refunds"
  - "Cannot change fulfilled orders"

GATHER:
  order_id:
    prompt: "What is your order ID?"
    type: string
    required: true

COMPLETE:
  - WHEN: order_id IS SET
    RESPOND: "I can help check the status of order {{order_id}}."
```

Use this shape when the same agent can safely handle the full request. If refund, billing, or human escalation becomes part of the same entry point, add explicit boundaries or split ownership.

## Working example: supervisor with specialist agents

This example is a project-level set. The supervisor and all referenced specialists must exist in the same project.

`agents/support-supervisor.agent.abl`

```abl
SUPERVISOR: Support_Supervisor
GOAL: "Route support requests to the right specialist"

AGENTS:
  account: Account_Support_Agent
  orders: Order_Status_Agent
  human: Live_Agent

INTENTS:
  account: "Account access or password help"
  order_status: "Order tracking or delivery help"
  human_help: "User asks for a person or the request is unclear"

GATHER:
  customer_id:
    prompt: "What customer ID should I use for this request?"
    type: string
    required: true

HANDOFF:
  - TO: Account_Support_Agent
    WHEN: intent.category == "account"
    PASS: [customer_id]
    SUMMARY: "Customer needs account or password support"
    RETURN: true
  - TO: Order_Status_Agent
    WHEN: intent.category == "order_status"
    PASS: [customer_id]
    SUMMARY: "Customer needs order status or delivery support"
    RETURN: false
  - TO: Live_Agent
    WHEN: intent.category == "human_help"
    PASS: [customer_id]
    SUMMARY: "Customer asks for a person or the request is unclear"
    RETURN: false
```

`agents/account-support-agent.agent.abl`

```abl
AGENT: Account_Support_Agent
GOAL: "Resolve account access and password support requests"

GATHER:
  customer_id:
    prompt: "What customer ID should I use?"
    type: string
    required: true

COMPLETE:
  - WHEN: customer_id IS SET
    RESPOND: "I can continue account support for {{customer_id}}."
```

`agents/order-status-agent.agent.abl`

```abl
AGENT: Order_Status_Agent
GOAL: "Resolve order status and delivery support requests"

GATHER:
  customer_id:
    prompt: "What customer ID should I use?"
    type: string
    required: true

COMPLETE:
  - WHEN: customer_id IS SET
    RESPOND: "I can continue order support for {{customer_id}}."
```

`agents/live-agent.agent.abl`

```abl
AGENT: Live_Agent
GOAL: "Transfer the customer to a human support queue"

COMPLETE:
  - WHEN: true
    RESPOND: "I will connect you with a human support specialist."
```

`AGENTS:` is a readable roster. `HANDOFF` is the executable routing surface. `customer_id` is gathered before handoff and passed to the specialists with `PASS`.

## When to use handoff

Use `HANDOFF` when the target agent should own the next part of the conversation.

Use `RETURN: true` when the specialist should do bounded work and return control to the supervisor. Use `RETURN: false` when the target agent or human channel should keep ownership.

## When to use delegate

Use `DELEGATE` when the parent agent keeps the conversation but asks another agent for a result.

This example is a two-agent project set. The child produces `total_fee`, and the parent maps that result into `quoted_fee`.

`agents/booking-manager.agent.abl`

```abl
AGENT: Booking_Manager
GOAL: "Manage booking changes while keeping ownership of the customer conversation"

GATHER:
  booking_id:
    prompt: "What booking should I use?"
    type: string
    required: true

DELEGATE:
  - TO: Fee_Calculator
    WHEN: "the user asks for a booking change fee"
    PURPOSE: "Calculate the fee for the requested booking change"
    PASS: { booking_id: booking_id }
    RETURNS:
      total_fee: quoted_fee
    USE_RESULT: "Explain the fee before asking the user to confirm"
    TIMEOUT: "10s"
    ON_FAILURE: RESPOND "I could not calculate the fee right now."

COMPLETE:
  - WHEN: booking_id IS SET
    RESPOND: "I can manage booking changes for {{booking_id}}."
```

`agents/fee-calculator.agent.abl`

```abl
AGENT: Fee_Calculator
GOAL: "Calculate booking change fees for the booking manager"

FLOW:
  entry_point: calculate_fee
  steps:
    - calculate_fee

calculate_fee:
  REASONING: false
  SET: total_fee = "$25"
  RESPOND: "The estimated change fee is $25."
  THEN: complete

COMPLETE:
  - WHEN: total_fee IS SET
    RESPOND: "The estimated change fee is {{total_fee}}."
```

## Verification

1. Validate all files in the project together, not only the supervisor.
2. Send an account access utterance and confirm the selected tool or trace shows `handoff_to_Account_Support_Agent`.
3. Send an order-status utterance and confirm ownership moves to `Order_Status_Agent`.
4. Send "I need a person" or an unclear request and confirm the fallback route reaches `Live_Agent`.
5. For the delegate example, send "What would it cost to change this booking?" and confirm the parent stays active while `Fee_Calculator` returns `total_fee`.

## Production readiness checklist

- Every `HANDOFF TO` and `DELEGATE TO` target exists in the project or is configured as an external/remote agent.
- Every `PASS` field is gathered, read from memory, produced by a tool, or supplied by the channel before it is needed.
- Each route has a distinct business owner and success criteria.
- A fallback or human route exists for unclear, unsupported, or high-risk requests.
- Test utterances cover every route, delegate failure, and human escalation.
- Trace/debug review confirms selected route, target agent, return behavior, and context passed.

## Common mistakes

| Mistake                            | Why it happens                                                   | How to avoid it                                              |
| ---------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| Splitting too early                | A broad domain looks complex, but one owner can still handle it. | Split only when ownership, tools, policy, or risk differs.   |
| Listing agents without routing     | `AGENTS:` looks like it connects agents.                         | Add `HANDOFF` rules for executable transfer.                 |
| Passing fields with no source      | The route needs context that was never gathered or produced.     | Gather, remember, or tool-populate every passed field.       |
| Using handoff for a subtask result | The parent only needed a calculation or answer.                  | Use `DELEGATE` when the parent should keep the conversation. |

## Troubleshooting

| Symptom                              | Likely cause                                             | What to check                                                            |
| ------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------ |
| The supervisor stays active          | No handoff rule was selected.                            | Check `HANDOFF`, route conditions, intent categories, and fallback path. |
| A target cannot use passed context   | The field is missing or named differently.               | Check `PASS` field names and target-agent gathered fields.               |
| A delegate return is empty or warned | The child does not obviously produce the returned field. | Declare, gather, set, or tool-produce the child return field.            |
