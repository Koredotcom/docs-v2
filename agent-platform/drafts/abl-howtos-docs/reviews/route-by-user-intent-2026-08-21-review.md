# HowTo Review: route-by-user-intent

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-by-user-intent.md`
**Topic:** 3.1 - Route users by detected intent
**Verdict:** update-needed

## Proposed changes

- Fix incorrect claim that child receives "only the declared context" -- the platform default history strategy is `full`, meaning the child receives the complete parent conversation unless `history` is explicitly set otherwise.
- Add MEMORY declarations to the example to ground `pass` variables (`customer_id`, `account_id`) and satisfy the companion-resource rule.
- Add Concept section with decision model for history strategy and return behavior.
- Add How it works section explaining runtime evaluation order, history passing, condition matching, and return semantics.
- Add five Common variations with code examples: history strategy control, shorthand CONTEXT syntax, EXPECT_RETURN with ON_RETURN, PRIORITY for evaluation order, ON_FAILURE for dispatch failures.
- Add history strategy decision table covering all five supported values (`full`, `auto`, `none`, `summary_only`, `{ mode: last_n, count: N }`).
- Note `RETURN` as legacy alias for `EXPECT_RETURN`.
- Convert Verification section from parse/compile checklist to behavioral testing guidance (test utterances, trace inspection, context/history validation).
- Convert Common mistakes from bullet list to table format per article template.
- Add Troubleshooting table (missing entirely from current article).
- Expand Production readiness checklist with history strategy choice, ON_FAILURE, handoff depth limit, and testing for no-match/ambiguous/failure paths.
- Simplify pass variable list (remove ungrounded `conversation_summary`, `product_area`, `error_summary`, `cancellation_reason`).

## Evidence

| Claim                                      | Current evidence                                                                                                                                                                                                                                     | Impact                                                                                                                                                     |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Child receives "only the declared context" | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'` in `contract-source-data.ts`; `resolveHistoryStrategy()` falls back to `full`; multiple test assertions confirm. Reference docs state `full` is "Platform default -- applied when `history` is omitted." | **Critical.** Customers will see unexpected conversation history in child agents and not understand why. Must correct to state that the default is `full`. |
| History strategy options exist             | `HistoryStrategy` type in `schema.ts` (lines 2562-2570) defines `auto`, `none`, `summary_only`, `full`, `{ last_n: number }`. `compileHistoryStrategy()` in `compiler.ts` (lines 3426-3462) compiles all five.                                       | **High.** Customers cannot make an informed choice about what history to pass without knowing the options.                                                 |
| Shorthand CONTEXT syntax is valid          | Parser lines 5662-5681 accept `pass`, `summary`, `history` as direct HANDOFF siblings. Reference docs line 457 confirms.                                                                                                                             | **Medium.** Customers using the shorthand form are not represented.                                                                                        |
| RETURN is legacy alias for EXPECT_RETURN   | Parser lines 5606-5610; reference docs line 441 state "The older `RETURN` keyword is still parsed for backward compatibility."                                                                                                                       | **Low.** Customers with legacy ABL files may use `RETURN` and not realize it maps to `EXPECT_RETURN`.                                                      |
| PRIORITY controls evaluation order         | Parser line 5602-5603; `HandoffConfig.priority` type; reference docs line 431: "Lower values are evaluated first."                                                                                                                                   | **Medium.** Customers with overlapping conditions have no way to control match order without this.                                                         |
| ON_FAILURE provides parent-side fallback   | Parser line 5611; `HandoffConfig.onFailure`; reference docs lines 543-559 define CONTINUE, ESCALATE, RESPOND strategies.                                                                                                                             | **High.** Customers have no documented recovery path for handoff dispatch failures.                                                                        |
| ON_RETURN structured block with map/action | Parser lines 5614-5660; reference docs lines 489-520 define action, handler, resume_with, map, set properties.                                                                                                                                       | **Medium.** Customers using EXPECT_RETURN:true cannot understand how to map child results back.                                                            |
| Pass variables must have declared sources  | Compiler validates pass fields against declared variables. Insurance example uses MEMORY declarations.                                                                                                                                               | **High.** Customers copying the example will get compiler warnings about ungrounded pass fields.                                                           |
| MAX_HANDOFF_DEPTH = 10                     | `handoff-executor.ts` line 23                                                                                                                                                                                                                        | **Low.** Production checklist should mention the depth limit.                                                                                              |

## Proposed replacement article body

````markdown
# How to route users by detected intent

Use this pattern when a supervisor agent classifies what the user is trying to do, then hands the conversation to the specialist that owns that work.

## Concept

Intent routing uses three ABL surfaces working together:

- **INTENTS** declares the classifier categories. Each category has a description that tells the model what kinds of requests belong to it.
- **HANDOFF** is the executable routing surface. Each entry names a target agent, the condition that triggers the handoff, and the context the child receives.
- **WHEN** conditions on each handoff entry can be deterministic expressions (`intent.category == "billing"`) or semantic natural-language text (`"the user request is unclear"`). The platform detects the form automatically: multi-word quoted text without structured operators routes through model reasoning; expressions with operators like `==` route through deterministic evaluation.

Two decisions shape every intent-routing supervisor:

1. **History strategy** -- By default, the child agent receives the full parent conversation history (`history: full`). This is the platform default when `history` is omitted. Choose `summary_only`, `none`, `auto`, or `last_n` when the child should see less. See [Common variations](#common-variations) for the options.
2. **Return behavior** -- `EXPECT_RETURN: false` (the default) transfers ownership permanently. `EXPECT_RETURN: true` pauses the parent and resumes it when the child returns. Use `ON_RETURN` to map child results back to parent variables.

## Minimal working example

```abl
SUPERVISOR: Intent_Routing_Supervisor
GOAL: "Route customer requests to the specialist that owns the detected intent"

MEMORY:
  customer_id:
    type: string
    source: session
  account_id:
    type: string
    source: session

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
    WHEN: "the user request is unclear or does not match billing, technical support, or cancellation"
    CONTEXT:
      pass: [customer_id]
      summary: "Customer needs general service triage."

AGENT: Billing_Agent
GOAL: "Resolve billing requests"

AGENT: Technical_Support_Agent
GOAL: "Resolve technical support requests"

AGENT: Retention_Agent
GOAL: "Handle cancellation and downgrade conversations"

AGENT: General_Service_Agent
GOAL: "Clarify and route unsupported requests"
```

The `MEMORY` section declares `customer_id` and `account_id` as session variables so the `pass` fields have a defined source. Any variable you pass must come from MEMORY, GATHER, a tool result, or runtime context.

## How it works

1. The supervisor receives the user message and retains ownership until a handoff condition matches.
2. The platform evaluates the INTENTS classifier against the user message, producing `intent.category`.
3. HANDOFF entries are evaluated in authored order (override with `PRIORITY` when needed). The first matching condition wins.
4. The matched child receives: the `pass` variables, the `summary` text, and conversation history controlled by the `history` strategy. When `history` is omitted, the child receives the **full parent conversation** -- this is the platform default (`full`).
5. If `EXPECT_RETURN: false` (the default), the child owns the conversation permanently. If `EXPECT_RETURN: true`, the child runs and returns control to the parent, optionally mapping result variables through `ON_RETURN`.
6. If no HANDOFF condition matches, the supervisor continues with its own GOAL. A semantic fallback entry (like the `General_Service_Agent` above) prevents unmatched requests from going unhandled.

## Common variations

### Control conversation history with `history`

When the child should not receive the full parent transcript, set `history` explicitly:

```abl
HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer needs billing help."
      history: summary_only
```

| Value                        | Behavior                                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| `full`                       | Platform default. The complete parent conversation history is passed.                     |
| `auto`                       | Uses the summary when available; falls back to the last 5 messages.                       |
| `none`                       | No conversation history. The child starts fresh with only `pass` variables and `summary`. |
| `summary_only`               | Only the `summary` text is passed -- no raw messages.                                     |
| `{ mode: last_n, count: N }` | The last N messages from the parent are passed.                                           |

Choose `summary_only` or `none` when the child is a focused specialist that should not be influenced by earlier conversation turns. Choose `full` (or omit) when the child needs the complete conversation record.

### Shorthand context syntax

`pass`, `summary`, and `history` can appear as direct siblings of the handoff entry instead of nested under `CONTEXT:`:

```abl
HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    pass: [customer_id, account_id]
    summary: "Customer needs billing help."
    history: summary_only
```

Both forms compile identically. The nested `CONTEXT:` form is preferred when you also need `set` or `memory_grants`.

### Return to the parent with ON_RETURN

When a specialist should report back to the supervisor after completing its task:

```abl
HANDOFF:
  - TO: Verification_Agent
    WHEN: intent.category == "verification_needed"
    EXPECT_RETURN: true
    CONTEXT:
      pass: [customer_id]
      summary: "Customer needs identity verification."
      history: summary_only
    ON_RETURN:
      action: continue
      map:
        verified: verification_result
```

`EXPECT_RETURN: true` pauses the parent. When the child returns, `ON_RETURN.map` copies child variables into the parent scope. `action: continue` resumes the parent's flow; `action: resume_intent` re-runs routing with the original user intent and the returned context.

The legacy keyword `RETURN` is accepted as an alias for `EXPECT_RETURN`.

### Set evaluation order with PRIORITY

When multiple handoff conditions could match the same utterance, use `PRIORITY` to control evaluation order. Lower values are evaluated first:

```abl
HANDOFF:
  - TO: Urgent_Support_Agent
    WHEN: intent.category == "technical_support" and priority_level == "urgent"
    PRIORITY: 0
    CONTEXT:
      pass: [customer_id]
      summary: "Urgent technical support request."

  - TO: Technical_Support_Agent
    WHEN: intent.category == "technical_support"
    PRIORITY: 1
    CONTEXT:
      pass: [customer_id]
      summary: "Technical support request."
```

Without `PRIORITY`, entries are evaluated in authored order.

### Handle dispatch failures with ON_FAILURE

`ON_FAILURE` defines what happens when the handoff dispatch itself fails -- for example, the target agent is not found or pre-transfer validation fails. It does not handle child-agent runtime errors.

```abl
HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer needs billing help."
    ON_FAILURE: ESCALATE
```

| Value               | Behavior                                          |
| ------------------- | ------------------------------------------------- |
| `CONTINUE`          | Silently continue in the current agent.           |
| `ESCALATE`          | Trigger human escalation.                         |
| `RESPOND "message"` | Send a message and continue in the current agent. |

## Verification

- Send a test utterance for each intent category and confirm the correct child agent is selected. Check the trace for the matched HANDOFF entry and the condition result.
- Send an ambiguous utterance and confirm the fallback entry handles it. Verify the trace shows the semantic WHEN evaluation.
- Inspect the trace for passed context: confirm `pass` variables are present in the child's session and the `summary` appears in the child's context.
- If `EXPECT_RETURN: true` is used, verify the parent resumes and `ON_RETURN.map` variables appear in the parent's session after the child returns.
- Verify the `history` strategy by checking what conversation messages the child receives. With `full` (or omitted), the child should see the complete parent transcript. With `summary_only`, the child should see only the summary text.

## Production readiness checklist

- Every specialist route has a clear owner and a concise context summary.
- Every `pass` variable has a declared source (MEMORY, GATHER, tool result, or runtime context).
- Deterministic conditions use declared fields; semantic conditions are quoted as natural-language `WHEN` text.
- Choose a `history` strategy appropriate for each child. The default `full` passes the entire parent transcript, which may include irrelevant turns and increase token usage.
- Add `ON_FAILURE` to critical handoff entries so dispatch failures have a defined recovery path.
- Fallback behavior is explicit and does not hide missing intent coverage.
- Test at least one utterance per intent category, one ambiguous utterance, and one utterance outside all categories.
- Temporary child agents (`EXPECT_RETURN: true`) produce every field mapped in `ON_RETURN`.
- Verify handoff depth does not exceed the platform limit of 10 nested handoffs.

## Common mistakes

| Mistake                                                   | Why it happens                                                       | How to avoid it                                                                                                                    |
| --------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Authoring a `ROUTING:` section                            | Confusion between conceptual routing and the ABL surface             | The parser rejects `ROUTING:` and points to `HANDOFF:`. Use `HANDOFF:` for all routing entries.                                    |
| Leaving semantic prose unquoted                           | The WHEN condition looks like an expression with undefined variables | Quote multi-word natural-language conditions so the platform routes them through model reasoning instead of expression evaluation. |
| Assuming the child starts with a blank slate              | The default history strategy is `full`, not `none`                   | Set `history: none` or `history: summary_only` explicitly when you want the child to start fresh.                                  |
| Passing variables without a declared source               | The variables compile but have no value at runtime                   | Declare every `pass` variable in MEMORY, GATHER, or as a tool/runtime output before referencing it.                                |
| Routing every unmatched request to the nearest specialist | No explicit fallback; the closest label absorbs unrelated requests   | Add a dedicated fallback agent with a semantic WHEN condition for unclear or unmatched requests.                                   |

## Troubleshooting

| Symptom                                                                                | Likely cause                                                          | What to check                                                                                                                           |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Child agent sees the full conversation even though only `pass` variables were declared | `history` defaults to `full` when omitted                             | Set `history: summary_only` or `history: none` in the CONTEXT block.                                                                    |
| Handoff never fires for a valid utterance                                              | WHEN condition uses an undefined variable or has a syntax error       | Check that the WHEN expression references a valid field (e.g. `intent.category`) and the INTENTS section defines the expected category. |
| Compiler warning about ungrounded pass fields                                          | `pass` variables are not declared in MEMORY, GATHER, or a tool output | Declare each variable source or mark it as a project-local runtime value.                                                               |
| Fallback agent handles requests that should match a specific intent                    | Intent categories overlap or the classifier description is ambiguous  | Refine INTENTS descriptions to be mutually exclusive; use `PRIORITY` to control evaluation order for overlapping conditions.            |
| Parent does not resume after child completes                                           | `EXPECT_RETURN` is set to `false` or omitted (default)                | Set `EXPECT_RETURN: true` on the handoff entry. Confirm the child agent completes and returns control.                                  |
| `ON_RETURN.map` variables are missing in parent scope                                  | Child agent does not produce the expected output variables            | Verify the child agent sets the mapped variables before returning.                                                                      |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to decide when to delegate, hand off, or use a workflow
- How to pass context between agents
````

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/route-by-user-intent.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/route-by-user-intent-2026-08-21-evidence.md`
