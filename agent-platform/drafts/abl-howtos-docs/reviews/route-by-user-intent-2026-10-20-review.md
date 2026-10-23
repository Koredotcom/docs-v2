# HowTo Review: route-by-user-intent

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-by-user-intent.md`
**Topic:** 3.1 - How to route conversations based on user intent
**Verdict:** update-needed

## Proposed changes

- Replace the claim that `HANDOFF` entries are tested in authored order with a table of the three real paths: pipeline first true `WHEN`, model call with a `WHEN` guard, and first match after a child returns.
- Add condition styles. A quoted phrase is guidance for the model and is always true in the pipeline. Quoted routes go last.
- State that position is priority and that `PRIORITY:` is parsed and ignored. Delete the old `PRIORITY` variation.
- Split the single five-document example into five labeled files. Pasted into one file, the old block fails with `E101`.
- Delete the `MEMORY` block. Its map form declares nothing. Explain where `PASS` values come from instead.
- Replace the quoted fallback `WHEN` with `WHEN: true`. Move the plain-language route to its own variation.
- Show `last_n` as a block. Warn that the inline form is silently ignored.
- Explain `ON_RETURN` `map` direction (child to parent) and the default merge. Add `UNKNOWN_HANDOFF_RETURN_FIELD` and `HANDOFF_ON_RETURN_WITHOUT_RETURN`.
- Add a specific-before-general variation using `session.identityTier`.
- Qualify `ON_FAILURE: ESCALATE`. Add the bare-string compile error.
- Name emitted trace events and fields: `handoff_condition_check`, `handoff_context_pass_resolved`, `pipeline_classify`, `pipeline_routing_resolve`.
- Deleted content: the unquoted-WHEN troubleshooting row (merged into condition styles), the 'ungrounded pass fields' warning row (no such warning exists), the `MEMORY` block, the `PRIORITY` section, two Related HowTos titles with no file in `articles/` (decide when to delegate, pass context between agents).

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| Order of routes | `routing-resolver.ts` sorts by priority. `compiler.ts` sets `priority: idx + 1`. Guard in `routing-executor.ts` near 10100. | Concept rewritten. |
| `PRIORITY:` has no effect | Parsed to `config.priority`, not compiled. IR identical (harness). | Section deleted. |
| `map` is child to parent | `routing-executor.ts` near 14000. Reversed map gives `UNKNOWN_HANDOFF_RETURN_FIELD` (harness). | Explained. |
| Inline `last_n` is ignored | IR `history` undefined (harness). | Gotcha added. |
| Old example fails as one file | `E101` duplicate section (harness). | Five files. |
| Old `MEMORY` declares nothing | IR `memory.session = []` (harness). | Block deleted. |

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/route-by-user-intent.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/route-by-user-intent-2026-10-20-evidence.md`
- `agent-platform/abl/how-to/route-by-user-intent.mdx` (published page)

## Proposed full article

````markdown
# How to route users by detected intent

Use this pattern when a supervisor must work out what the customer wants and hand the conversation to the specialist that owns that work.

## Concept

Intent routing uses two ABL sections.

- `INTENTS:` lists the categories and describes each one. The descriptions guide the classifier and the supervisor model. The section is optional. Without it, the compiler takes the categories from the `intent.category` comparisons in your `WHEN` rules.
- `HANDOFF:` holds the routes. Each entry names a target agent, a `WHEN` condition, and the context the target receives.

A route reads the category through `intent.category`, for example `WHEN: intent.category == "billing"`.

### How the platform picks a route

| Situation | What decides the route |
| --------- | ---------------------- |
| The `EXECUTION.pipeline` classifier runs and is confident. | The platform tests the `HANDOFF` entries in authored order. The first `WHEN` that is true selects the target. The handoff happens without a reasoning turn. |
| The supervisor model chooses a route. | The model calls the route action and states the intent category. The platform checks the `WHEN` of that entry before it transfers the conversation. |
| A child that was expected to return finishes. | The platform tests the `HANDOFF` conditions again in authored order. The first match wins. |

The pipeline is optional. It runs only when the project enables it, the agent does not opt out, and a pipeline model is available. Without it, the model path decides. See How to use EXECUTION.pipeline for agent routing, classification, and short-circuiting.

### Condition styles

| Style | Example | Behavior |
| ----- | ------- | -------- |
| Expression | `intent.category == "billing"` | The platform enforces it. A route whose expression is false is refused. |
| Quoted plain-language phrase | `"the customer asks about a refund"` | Guidance for the model. The platform accepts the model's choice. |
| Always true | `true` | The route is always available. Use it for the fallback. |

Quote plain-language text. Unquoted text is read as variable names and produces undefined-variable warnings.

The pipeline evaluates a quoted phrase as a string that is always true. A quoted route placed above an `intent.category` route captures every message the pipeline classifies. Put quoted routes after the `intent.category` routes.

### Order is priority

The position of an entry in `HANDOFF:` sets its priority. The first entry has the highest priority. The model sees the position as `[Priority N]` in the route description. The `PRIORITY:` field is read and then ignored. Move the entry instead.

### Decisions for every route

- **History.** The target receives the full conversation history unless you set `history`. A project default can change that value. See [Control conversation history](#control-conversation-history-with-history).
- **Return.** `EXPECT_RETURN: false` is the default. The target keeps the conversation. `EXPECT_RETURN: true` pauses the supervisor until the target returns. See [Return to the supervisor with ON_RETURN](#return-to-the-supervisor-with-on_return).

## Minimal working example

This example is a project-level set. Put the supervisor and the four target agents in the same project. The targets are short stand-ins for your real agents.

`agents/intent-routing-supervisor.agent.abl`

```abl
SUPERVISOR: Intent_Routing_Supervisor
GOAL: "Route customer requests to the specialist that owns the detected intent"

INTENTS:
  billing: "Questions about invoices, payment status, unpaid balances, or payment methods."
  technical_support: "Problems with product access, errors, setup, or troubleshooting."
  cancellation: "Requests to cancel, downgrade, or stop renewal."

HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer needs billing help."

  - TO: Technical_Support_Agent
    WHEN: intent.category == "technical_support"
    CONTEXT:
      pass: [customer_id]
      summary: "Customer needs technical support."

  - TO: Retention_Agent
    WHEN: intent.category == "cancellation"
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer is asking to cancel or downgrade."

  - TO: General_Service_Agent
    WHEN: true
    CONTEXT:
      pass: [customer_id]
      summary: "The request did not match a specialist. Customer needs general service triage."
```

`agents/billing-agent.agent.abl`

```abl
AGENT: Billing_Agent
GOAL: "Resolve billing requests"
```

`agents/technical-support-agent.agent.abl`

```abl
AGENT: Technical_Support_Agent
GOAL: "Resolve technical support requests"
```

`agents/retention-agent.agent.abl`

```abl
AGENT: Retention_Agent
GOAL: "Handle cancellation and downgrade conversations"
```

`agents/general-service-agent.agent.abl`

```abl
AGENT: General_Service_Agent
GOAL: "Clarify and route requests that no specialist owns"
```

The platform fills each `PASS` field from the parent's data when the parent holds a value, for example from caller data or a gathered field. Otherwise the supervisor model fills it from what the customer said. When neither has a value, the target must collect it.

The `summary` text also supports `{{field}}` interpolation from the supervisor's data.

## How it works

1. The supervisor receives the message and keeps the conversation until a route fires.
2. The platform assigns an intent category. With the pipeline, the classifier assigns it. Without the pipeline, the model states it when it calls a route.
3. The platform checks the `WHEN` of the selected route. An expression must be true. A refused route returns a message to the model, which then tries another route or asks the customer.
4. The target receives the `PASS` values, the `summary`, and the history that the `history` setting allows.
5. With `EXPECT_RETURN: false`, the target keeps the conversation. With `EXPECT_RETURN: true`, the supervisor pauses and resumes when the target returns.
6. When no route fires, the supervisor stays active. The `WHEN: true` entry in the example is the fallback.

A chain of nested handoffs can reach a depth of 10 before the platform refuses the next one.

## Common variations

### Control conversation history with `history`

When the target does not need the full transcript, set `history` on the entry. Add it inside `CONTEXT:`.

```abl
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer needs billing help."
      history: summary_only
```

| Value | Behavior |
| ----- | -------- |
| `full` | Default. The target receives the complete parent history. |
| `auto` | The target receives the summary when one exists. Otherwise it receives the last 5 messages. |
| `none` | The target receives no history. It starts with the `PASS` values and the summary. |
| `summary_only` | The target receives only the summary text. |
| `last_n` | The target receives the last N messages. Write it as a block: `history:`, then `mode: last_n` and `count: 6` on indented lines. |

Write `last_n` as a block. The inline form `history: { mode: last_n, count: 6 }` compiles without a warning and has no effect, so the target receives the full history.

Use `summary_only` or `none` for a focused specialist. Use `full` when the target needs the whole record.

### Write context as sibling keys

`PASS`, `SUMMARY`, and `HISTORY` can sit directly under the entry instead of inside `CONTEXT:`. Both forms compile to the same route.

```abl
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    PASS: [customer_id, account_id]
    SUMMARY: "Customer needs billing help."
    HISTORY: summary_only
```

Use `CONTEXT:` when you also need `set` or `memory_grants`.

### Return to the supervisor with ON_RETURN

Use `EXPECT_RETURN: true` when a specialist does bounded work and the supervisor continues afterward. In this example, a verification agent returns before billing help starts.

```abl
  - TO: Verification_Agent
    WHEN: intent.category == "billing" AND verification_result != true
    EXPECT_RETURN: true
    CONTEXT:
      pass: [customer_id]
      summary: "Customer needs identity verification before billing help."
      history: summary_only
    ON_RETURN:
      action: resume_intent
      map:
        verified: verification_result

  - TO: Billing_Agent
    WHEN: intent.category == "billing" AND verification_result == true
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Verified customer needs billing help."
```

`map` copies a child field into a parent field. Write the child field first, then the parent field: `verified: verification_result` copies the child's `verified` into the parent's `verification_result`. The child must gather or produce `verified`. Without a `map`, the platform copies all gathered child data back.

`action: resume_intent` runs routing again against the original request with the returned context. `action: continue` resumes the supervisor's current flow.

`RETURN` is accepted as an older name for `EXPECT_RETURN`. `ON_RETURN` without `EXPECT_RETURN: true` produces the warning `HANDOFF_ON_RETURN_WITHOUT_RETURN`.

### Put specific routes before general routes

When two routes can match the same message, place the specific route first. The first entry has the highest priority.

```abl
  - TO: Account_Billing_Agent
    WHEN: intent.category == "billing" AND session.identityTier == 2
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Verified customer needs billing help."

  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    CONTEXT:
      pass: [customer_id]
      summary: "Unverified customer needs general billing information."
```

`session.identityTier` is `2` after the channel verifies the identity. The route is false for an anonymous customer, so that customer reaches `Billing_Agent`.

### Add a plain-language route

Use a quoted phrase for a request type that has no category. Place it after the `intent.category` routes.

```abl
  - TO: Refund_Specialist
    WHEN: "the customer asks about a refund, a returned payment, or a refund timeline"
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer needs refund help."
```

Keep the phrase in lowercase words. A quoted phrase that contains uppercase `AND`, `OR`, or `NOT`, a comparison symbol, or a word such as `contains` is read as an expression.

### Handle dispatch failures with ON_FAILURE

`ON_FAILURE` runs when the handoff fails before the target accepts it, for example when validation fails. It does not handle errors that the target raises later.

```abl
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer needs billing help."
    ON_FAILURE: RESPOND "I could not reach billing. Please try again in a moment."
```

| Value | Behavior |
| ----- | -------- |
| `CONTINUE` | The supervisor continues. This is the default. |
| `ESCALATE` | The session is marked as escalated. A person receives the conversation only when the project has a human-agent connection and an `ESCALATE` block with a `routing` block. See the [ESCALATE reference](/agent-platform/abl/reference/multi-agent-and-supervisor#escalate). |
| `RESPOND "message"` | The supervisor sends the message and continues. |

A bare quoted string such as `ON_FAILURE: "message"` fails to compile with `INVALID_HANDOFF_FAILURE_ACTION`.

## Verification

1. Send one test message for each category. Open the trace. Find the `handoff_condition_check` events for the turn. Confirm that the expected route has `result: true`.
2. Send a message that matches no category. Confirm that the `WHEN: true` route receives it.
3. When the pipeline is on, find the `pipeline_classify` and `pipeline_routing_resolve` events. Confirm the category and the matched route.
4. Open the target agent's session data. Confirm the `PASS` values and the summary. Check `handoff_context_pass_resolved` for values taken from the customer's message.
5. Check the history. With `full`, the target sees the full parent transcript. With `summary_only`, the target sees the summary only.
6. For `EXPECT_RETURN: true`, confirm the supervisor resumes and the mapped fields appear in the supervisor's session data.

## Production readiness checklist

- Every `TO` target exists in the project.
- Every `PASS` field has a source: parent data, caller data, a gathered field, or a value the customer states.
- Every `intent.category` value in a `WHEN` appears in `INTENTS:`. The compile shows no `UNDECLARED_INTENT_CATEGORY` warning.
- Specific routes come before general routes. Quoted routes come after `intent.category` routes.
- Each route sets `history` on purpose. The default `full` passes the whole transcript and uses more tokens.
- A `WHEN: true` fallback exists, or the supervisor can answer on its own.
- Critical routes have an `ON_FAILURE` policy.
- Every field in an `ON_RETURN` `map` exists in the child.
- Tests cover one message per category, one ambiguous message, and one message outside every category.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Writing a `ROUTING:` section. | Routing sounds like its own section. | The parser rejects `ROUTING:` with error `E104`. Use `HANDOFF:`. |
| Setting `PRIORITY:` to reorder routes. | The field looks like it controls order. | The platform ignores it. Reorder the entries. |
| Leaving a plain-language `WHEN` unquoted. | The text looks like a condition. | Quote the text. |
| Placing a quoted route above `intent.category` routes. | The pipeline treats a quoted phrase as true. | Put quoted routes last. |
| Expecting the child to start fresh. | The default history is `full`. | Set `history: none` or `summary_only`. |
| Writing `history: { mode: last_n, count: 6 }` on one line. | The inline form looks valid. | Write `mode` and `count` on indented lines. |
| Writing the `map` in the wrong direction. | The parent field seems to come first. | Write `child_field: parent_field`. The compiler reports `UNKNOWN_HANDOFF_RETURN_FIELD`. |
| Routing every unmatched request to the nearest specialist. | The route has no explicit fallback. | Add a `WHEN: true` fallback agent. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| A valid message reaches the wrong agent. | Two routes can match, and the earlier entry wins. | The entry order. Move the specific route up. |
| A route never fires. | The category is missing from `INTENTS:`, or the expression is false. | `UNDECLARED_INTENT_CATEGORY`, and `result` in `handoff_condition_check`. |
| The model reports that a handoff is blocked. | The route's expression is false for the current data. | The `condition` and `evaluatedContext` in `handoff_condition_check`. |
| The target sees the whole conversation. | `history` is omitted, so the default `full` applies. | `history` on the entry. |
| The target asks for a value that you passed. | The `PASS` field has no value in the parent. | Where the parent gets the value. Gather it or read it from caller data. |
| The supervisor does not resume after the child. | `EXPECT_RETURN` is `false` or omitted. | `EXPECT_RETURN: true` on the entry. |
| Mapped fields are missing after the return. | The `map` direction is reversed, or the child never sets the field. | `UNKNOWN_HANDOFF_RETURN_FIELD`, and the child's `GATHER` section. |
| A refund question reaches the fallback, not the refund route. | The quoted route is below a route that already matched, or the phrase reads as an expression. | The entry order and the phrase wording. |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to use EXECUTION.pipeline for agent routing, classification, and short-circuiting
- How to handle messages that contain multiple user intents
- How to route unclear or unsupported requests to a fallback agent
- How to debug routing decisions in traces
````
