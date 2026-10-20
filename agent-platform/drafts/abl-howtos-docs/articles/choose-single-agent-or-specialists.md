# How to decide whether to build one agent or multiple specialist agents

Use this guide when one customer-facing experience could be implemented either as one broad agent or as a supervisor with multiple specialist agents.

## Concept

A single agent owns the conversation and the outcome. It can gather information, call tools, answer, and complete the request without transferring ownership.

A specialist design separates the front door from the business owners. A supervisor receives the user request, chooses the right owner, and uses `HANDOFF` when another agent should take over. A specialist owns one capability, such as account access, order status, billing, claims, device care, or employee benefits.

The design question is ownership. If one team, policy set, permission model, and success criteria can own the outcome, keep one agent. If different teams, tools, policies, or escalation paths own different parts of the experience, use specialists.

## Decision guide

| Question                  | Prefer one agent when                            | Prefer specialists when                                             |
| ------------------------- | ------------------------------------------------ | ------------------------------------------------------------------- |
| Scope                     | Requests are tightly related.                    | The entry point receives unrelated business requests.               |
| Tools and data            | The same tools and permissions apply.            | Different topics need different tools or data access.               |
| Risk                      | One policy set is enough.                        | Each topic has different compliance, escalation, or approval rules. |
| Ownership                 | One team updates and tests the whole experience. | Different teams own different business outcomes.                    |
| Routing                   | No transfer is needed.                           | The user needs to be routed to the right owner.                     |
| Customer talks to the sub-task | No sub-task exists.                         | Use a `HANDOFF` when the specialist must ask the customer questions. Use a `DELEGATE` only for a one-shot result. |
| Human takeover            | A single `ESCALATE` rule is enough.              | Route to a small agent that owns the human transfer.                |

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

This example is a project-level set. The supervisor and all referenced specialists must exist in the same project. The specialists are short stand-ins. Replace their `COMPLETE` rules with your real business logic.

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
GOAL: "Tell the customer that a human specialist will take over, then escalate to the human support queue"

ESCALATE:
  context_for_human:
    - customer_id
```

`HANDOFF` is the executable routing surface. The platform ignores `AGENTS:`. It does not route and does not check the names, so keep it only as a readable roster. Each `HANDOFF` entry becomes a routing action the supervisor model can choose. The `WHEN` rule is checked before the transfer.

Each `PASS` field becomes a typed input on that routing action. The model fills it from what the customer already said. Each specialist also gathers `customer_id`, so a missing value is requested again. `Live_Agent` is a machine agent. It reaches a person through `ESCALATE`. Escalation reaches a person only when the project has a human-agent connection and the `ESCALATE` block has a `routing` block with `connection`, `queue`, or `skills`. See the [ESCALATE reference](/agent-platform/abl/reference/multi-agent-and-supervisor#escalate).

If a `HANDOFF` entry omits `HISTORY`, the specialist receives the full conversation history. A project-level coordination default can change this value. Set `HISTORY` on the entry when one route needs `summary_only`, `none`, `auto`, or the last few messages.

## When to use handoff

Use `HANDOFF` when the target agent should own the next part of the conversation, including when it must ask the customer questions.

Use `RETURN: true` when the specialist should do bounded work and return control to the supervisor. The specialist returns when its `COMPLETE` rule matches, or when it uses the built-in return action for a request outside its scope. Use `RETURN: false` when the target agent or human channel should keep ownership.

## When to use delegate

Use `DELEGATE` when the parent agent keeps the conversation but asks another agent for a one-shot result.

A delegate runs to completion and cannot wait for customer replies. Two rules follow from this:

- Map every required field of the child agent in `PASS`. Otherwise the compiler reports `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED`. If the child must ask the customer, use a `RETURN: true` handoff instead.
- A supervisor with `ROLE: router` cannot use `DELEGATE`. The compiler reports `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR`.

This example is a two-agent project set. The child produces `total_fee`, and the parent maps that result into `quoted_fee`. The parent completes only after the fee returns. The fixed `$25` fee is a stand-in. Replace it with a call to your fee tool.

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
    TIMEOUT: 10s
    ON_FAILURE: RESPOND "I could not calculate the fee right now."

COMPLETE:
  - WHEN: booking_id IS SET AND quoted_fee IS SET
    RESPOND: "The change fee for booking {{booking_id}} is {{quoted_fee}}."
```

`agents/fee-calculator.agent.abl`

```abl
AGENT: Fee_Calculator
GOAL: "Calculate booking change fees for the booking manager"

GATHER:
  booking_id:
    prompt: "What booking should I use?"
    type: string
    required: true

FLOW:
  entry_point: calculate_fee
  steps:
    - calculate_fee

calculate_fee:
  REASONING: false
  SET: total_fee = "$25"
  RESPOND: "The estimated change fee for booking {{booking_id}} is {{total_fee}}."
  THEN: complete

COMPLETE:
  - WHEN: total_fee IS SET
    RESPOND: "The estimated change fee for booking {{booking_id}} is {{total_fee}}."
```

Delegate settings to know:

- `RETURNS` maps a child value to a parent variable. If the child returns none of the declared values, the delegate fails and `ON_FAILURE` runs.
- `USE_RESULT` names a parent variable that stores the whole delegate result. Write a variable name, not an instruction. The platform ignores text with spaces.
- Write `TIMEOUT` without quotes, for example `10s`, `500ms`, or `2m`. A quoted value is ignored and the default of 30 seconds applies.
- `ON_FAILURE` accepts `continue`, `escalate`, or `RESPOND "text"`. The default is `continue`.

## Verification

1. Validate all files in the project together, not only the supervisor.
2. Send an account access utterance and confirm the trace shows `handoff_to_Account_Support_Agent` and that ownership moves to `Account_Support_Agent`.
3. Send an order-status utterance and confirm ownership moves to `Order_Status_Agent`.
4. Send "I need a person" and confirm the route reaches `Live_Agent` and that the model escalates.
5. Check `handoff_context_pass_resolved` in the trace. Confirm `customer_id` appears when the customer stated it.
6. For the delegate example, send "What would it cost to change this booking?" and confirm the trace shows `delegate_start` and `delegate_complete`, the parent stays active, and the reply includes the fee.
7. Force a delegate failure in a test project, for example with `TIMEOUT: 1ms`. Confirm the customer sees the `ON_FAILURE` text.

## Production readiness checklist

- Every `HANDOFF TO` and `DELEGATE TO` target exists in the project or is configured as an external or remote agent.
- Every `PASS` field is gathered, read from memory, produced by a tool, or supplied by the channel before it is needed.
- Every delegate child maps all its required fields in `PASS`.
- Each route has a distinct business owner and success criteria.
- A human route exists for unclear, unsupported, or high-risk requests, and a human-agent transfer is configured for your channels.
- Test utterances cover every route, delegate failure, delegate timeout, and human escalation.
- Trace review confirms selected route, target agent, return behavior, history strategy, and context passed.

## Common mistakes

| Mistake                                | Why it happens                                                   | How to avoid it                                                            |
| -------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Splitting too early                    | A broad domain looks complex, but one owner can still handle it. | Split only when ownership, tools, policy, or risk differs.                 |
| Listing agents without routing         | `AGENTS:` looks like it connects agents.                         | Add `HANDOFF` rules. The platform ignores `AGENTS:`.                       |
| Passing fields with no source          | The route needs context that was never gathered or produced.     | Gather, remember, or tool-populate every passed field.                     |
| Using handoff for a subtask result     | The parent only needed a calculation or answer.                  | Use `DELEGATE` when the parent should keep the conversation.               |
| Using delegate for a customer dialogue | The child needs answers from the customer.                       | Use a `RETURN: true` handoff. A delegate cannot wait for customer replies. |
| Writing an instruction in `USE_RESULT` | The name suggests guidance for the parent.                       | Write a variable name, or omit `USE_RESULT` and use `RETURNS`.             |
| Quoting `TIMEOUT`                      | Other values in the file use quotes.                             | Write `TIMEOUT: 10s` without quotes.                                       |

## Troubleshooting

| Symptom                                   | Likely cause                                              | What to check                                                                   |
| ----------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------- |
| The supervisor stays active               | No handoff rule was selected.                             | Check `HANDOFF`, route conditions, intent categories, and the human route.      |
| A target cannot use passed context        | The field is missing or named differently.                | Check `PASS` field names and target-agent gathered fields.                      |
| Compile error `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` | The delegate child has a required field that `PASS` does not map. | Map the field, make it optional, or switch to a `RETURN: true` handoff. |
| A delegate return is empty or warned      | The child does not produce the returned field.            | Declare, gather, set, or tool-produce the child return field. Check `RETURNS`.  |
| The delegate waits too long               | `TIMEOUT` is quoted and the default applies.              | Remove the quotes from `TIMEOUT`.                                               |
| The customer asked for a person and nothing happened | `Live_Agent` has no `ESCALATE` block, no `routing` block, or no human-agent connection. | Check the `ESCALATE` block, its `routing` entries, and the human-agent connection.            |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to define clear responsibilities for each enterprise agent
- How to route unclear or unsupported requests to a fallback agent
- How to choose between a reasoning agent and a FLOW-based agent
