# How to design a supervisor that routes users to specialist agents

Use this guide when one conversational entry point must identify what the user needs, choose the right specialist, and pass enough context for that specialist to continue.

## Concept

A supervisor is the front door for a multi-agent experience. Its job is to understand the request, choose the right owner, and transfer context. It does not solve every problem.

A specialist agent owns one business capability. A good specialist has a narrow goal, the right tools or data access, clear limitations, and a completion path.

Routing connects the user request to the correct owner. In ABL, the executable route is `HANDOFF`. The platform ignores the optional `AGENTS:` roster. Keep it only for readability.

A project has one supervisor. A second `SUPERVISOR` in the same project fails to compile with error `E728`.

## How routing works

Each `HANDOFF` entry becomes a routing action named `handoff_to_<Target>`. The supervisor model chooses among these actions on every turn.

- The `SUMMARY` and the `WHEN` text appear in the action description. A `WHEN` written as plain language is guidance for the model.
- A `WHEN` written as an expression is enforced. The platform checks it before it transfers the conversation and refuses the route when the condition is not met.
- Each `PASS` field becomes a typed input on the action. The model fills it from what the customer already said.
- When a `WHEN` reads `intent.category`, the action also requires the model to state the category. `INTENTS:` lists the categories and their descriptions.
- `ENABLED_WHEN` removes a route from the model's choices while the condition is false.

## Decision guide: routing condition styles

| Style                     | Example                                   | Use when                                                |
| ------------------------- | ----------------------------------------- | ------------------------------------------------------- |
| Declared intent category  | `WHEN: intent.category == "order_status"` | You want stable route labels for testing and reporting. |
| Structured condition      | `WHEN: customer_id IS SET`                | The route depends on known fields or variables.         |
| Quoted semantic condition | `WHEN: "the user is asking for a refund"` | The route is best described as plain-language guidance. |
| Always available          | `WHEN: true`                              | One route must stay available as the default.           |

Quote plain-language conditions. Unquoted text is read as variable names and produces undefined-variable warnings.

A quoted phrase is treated as an expression when it contains uppercase `AND`, `OR`, or `NOT`, a comparison symbol such as `>` or `==`, or the words `contains`, `matches`, `startsWith`, or `endsWith`. The platform then evaluates the phrase instead of using it as guidance. Write plain-language conditions in lowercase words and avoid those symbols.

## Minimal working example: support supervisor project

This example is a project-level set. Put the supervisor and target agents in the same project. The specialists are short stand-ins for your real agents.

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

`HANDOFF` targets are machine agents. `Live_Agent` reaches a person through `ESCALATE`. Escalation reaches a person only when the project has a human-agent connection and the `ESCALATE` block has a `routing` block with `connection`, `queue`, or `skills`. When a `routing` list has no matching entry, no transfer starts. See the [ESCALATE reference](/agent-platform/abl/reference/multi-agent-and-supervisor#escalate).

The supervisor lists `customer_id` as a `PASS` field. The model fills it from what the customer said. Each specialist also gathers `customer_id`, so a missing value is requested again. Do not depend on a supervisor `GATHER` to stop routing. `RETURN: true` on account support means bounded specialist work can return to the supervisor. `RETURN: false` on order status and live agent means the target keeps ownership.

If a `HANDOFF` entry omits `HISTORY`, the specialist receives the full conversation history. A project-level coordination default can change this value. Set `HISTORY` on the entry to use `summary_only`, `none`, `auto`, or the last few messages for that route.

`INTENTS:` is optional. Without it, the compiler takes the categories from the `intent.category` comparisons in your `WHEN` rules. When `INTENTS:` exists, the compiler warns with `UNDECLARED_INTENT_CATEGORY` if a `WHEN` uses a category that `INTENTS:` does not declare. This catches typos such as `"acount"`.

## Common variations

### Plain-language routing variation

Use quoted semantic conditions when business users can describe a route more clearly in natural language than as a strict expression. Treat this as an alternative supervisor project. Do not add it to a project that already has a supervisor, because two supervisors fail with `E728`.

`agents/billing-supervisor.agent.abl`

```abl
SUPERVISOR: Billing_Supervisor
GOAL: "Route billing questions to the right specialist"

HANDOFF:
  - TO: Pending_Payments
    WHEN: "user is asking about payment status, unpaid balance, invoice due date, or how to pay"
    SUMMARY: "Customer needs help with pending payments or payment instructions"
  - TO: Refund_Guidance
    WHEN: "user is asking about a refund, reimbursement, returned payment, claim payout, or refund timeline"
    SUMMARY: "Customer needs refund guidance or refund status help"
```

`agents/pending-payments.agent.abl`

```abl
AGENT: Pending_Payments
GOAL: "Help customers understand pending payments and payment instructions"
```

`agents/refund-guidance.agent.abl`

```abl
AGENT: Refund_Guidance
GOAL: "Help customers understand refund status and refund next steps"
```

Keep semantic routes distinct. If two routes could match the same request, customers may experience inconsistent routing.

### Supervisor role variation

A supervisor without a `BEHAVIOR:` block can answer the customer directly and can use `DELEGATE`. Set a role to make the intent explicit. Add this block to the support supervisor above.

```abl
BEHAVIOR:
  ROLE: router
```

| Role           | What it does                                                                                                                                  |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `router`       | Only routes. The supervisor gets a built-in action to ask the customer one question when no route fits. It needs at least one `HANDOFF` and cannot use `DELEGATE`. |
| `orchestrator` | Routes and can answer directly. It is the only role that can use `DELEGATE`.                                                                  |

A supervisor accepts only these two roles. The value `assistant` fails to compile.

### Route availability variation

Use `ENABLED_WHEN` when a route must exist only under a known condition, such as a channel. While the condition is false, the model does not see the route, and a call to it is refused. Add this to the account entry in the support supervisor.

```abl
HANDOFF:
  - TO: Account_Support_Agent
    WHEN: intent.category == "account"
    ENABLED_WHEN: channel.name == "voice"
    ON_FAILURE: RESPOND "Account help is not available in this channel."
    PASS: [customer_id]
    SUMMARY: "Customer needs account or password support"
    RETURN: true
```

Write `ENABLED_WHEN` as an expression over data the platform knows. A plain-language `ENABLED_WHEN` fails to compile with `ENABLED_WHEN_SEMANTIC_REFERENCE`. A condition that reads a missing value counts as false. If every route has `ENABLED_WHEN`, the compiler warns with `ENABLED_WHEN_ALL_DISABLED_RISK` because all routes can switch off. Read the channel through `channel.name`. Use the channel name your project reports in traces. Voice variants can have their own names, such as `voice_twilio`.

### Multiple requests variation

Multi-intent handling is on by default. With the default `primary_queue` strategy, the supervisor serves the main request first and queues the others. To ask the customer which request to handle first, set the strategy. Add this block to the support supervisor.

```abl
MULTI_INTENT:
  strategy: disambiguate
  max_intents: 2
```

## Designing the context package

Every handoff should answer three questions.

| Question                           | Design guidance                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------- |
| What does the target need to know? | Pass only useful fields, such as `customer_id`, `order_id`, `issue_summary`, or `transfer_reason`. |
| Why is the transfer happening?     | Use `SUMMARY` so the target starts with a concise reason.                                          |
| Should control come back?          | Use `RETURN: true` for bounded specialist work and `RETURN: false` for permanent transfer.         |

Do not pass every field by default. Pass the context the target needs to continue safely.

## Fallback and ambiguity design

Do not rely on the roster as a fallback. If the model selects no route, the supervisor stays active. A supervisor with no role can answer directly. A `router` supervisor can ask the customer one question to find the right route.

For production supervisors:

- Add a route for human help, unsupported requests, or unclear requests.
- Use one `WHEN: true` route as the always-available default when one specialist can take every leftover request.
- Make route descriptions mutually exclusive.
- Add test utterances that intentionally look ambiguous.
- Inspect traces to confirm the selected handoff target.
- Decide how multiple requests in one message should behave, and set `MULTI_INTENT` if the default does not fit.

## Verification

1. Validate the supervisor and all target agents together.
2. Send: "I forgot my password." Expect `Account_Support_Agent`.
3. Send: "Where is my order?" Expect `Order_Status_Agent`.
4. Send: "I need to talk to someone." Expect `Live_Agent` and an escalation.
5. Check `handoff_context_pass_resolved` in the trace. Confirm `customer_id` appears when the customer stated it, and that the specialist asks for it when the customer did not.
6. Inspect every `handoff_condition_check` entry for the turn. Confirm the matched route and the skipped routes.
7. Inspect trace output for return behavior and the history strategy.

## Production readiness checklist

- Every `TO` target exists and has a clear owner.
- Every `PASS` field is populated before handoff or requested again by the target.
- Every route has a distinct condition and summary.
- A human or fallback route exists, and a human-agent transfer is configured for your channels.
- The project has exactly one `SUPERVISOR`.
- Every category in a `WHEN` is declared in `INTENTS:`, and the compile shows no `UNDECLARED_INTENT_CATEGORY` warning.
- Route tests cover success, no-match, ambiguous, and escalation paths.
- Trace output is reviewed for each route before go-live.
- Support owners agree on what `RETURN: true` and `RETURN: false` mean for their customer journey.

## Common mistakes

| Mistake                              | Why it happens                                                    | How to avoid it                                                      |
| ------------------------------------ | ----------------------------------------------------------------- | -------------------------------------------------------------------- |
| Treating `AGENTS:` as routing        | The roster looks like configuration.                              | Add `HANDOFF` entries. The platform ignores `AGENTS:`.               |
| Passing unavailable context          | The route references a field that was never gathered or produced. | Gather it, read it from memory, or remove it from `PASS`.            |
| Omitting fallback                    | Happy-path routing looks complete.                                | Add human, unsupported, or clarification handling.                   |
| Overlapping route conditions         | Business categories are not mutually exclusive.                   | Test ambiguous utterances and tighten route descriptions.            |
| Writing `AND` or `OR` in quoted text | The phrase reads like plain language.                             | Use lowercase words, or write a real expression without quotes.      |
| Adding a second supervisor           | A variation looks like a separate entry point.                    | Keep one `SUPERVISOR` per project. Error `E728` flags a second one.  |
| Handing off to a stub for human help | `HANDOFF` targets are machine agents.                             | Route to an agent that declares `ESCALATE`.                          |

## Troubleshooting

| Symptom                                       | Likely cause                                                       | What to check                                                                  |
| --------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| No transfer happens                           | No handoff route was selected.                                     | Check `HANDOFF`, `WHEN`, intent category, and fallback coverage.               |
| Wrong target receives the user                | Route conditions overlap.                                          | Rewrite conditions and add route-specific test utterances.                     |
| Target asks for information already collected | Context was not passed or field names differ.                      | Check `PASS`, target `GATHER`, and `handoff_context_pass_resolved`.            |
| A plain-language route never matches          | The quoted text contains `AND`, `OR`, `NOT`, or a comparison.      | Rewrite the phrase in lowercase words.                                         |
| Warning `UNDECLARED_INTENT_CATEGORY`          | A `WHEN` uses a category that `INTENTS:` does not list.            | Fix the spelling or add the category to `INTENTS:`.                            |
| Error `E728`                                  | The project has more than one `SUPERVISOR`.                        | Keep one supervisor and move the other routes into it.                         |
| A route is missing from the model's choices   | `ENABLED_WHEN` is false or reads a missing value.                  | Check the `ENABLED_WHEN` expression and the data it reads.                     |
| The customer asked for a person and nothing happened | The target has no `ESCALATE` block, no `routing` block, or no human-agent connection. | Check the `ESCALATE` block, its `routing` entries, and the human-agent connection.                |

## Related HowTos

- How to decide whether to build one agent or multiple specialist agents
- How to route users by detected intent
- How to route unclear or unsupported requests to a fallback agent
- How to handle messages that contain multiple user intents
- How to debug routing decisions in traces
