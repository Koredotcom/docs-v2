# HowTo Review: route-with-supervisor-priority

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-with-supervisor-priority.md`
**Topic:** 3.2 - Routing and multi-agent orchestration / route-with-supervisor-priority
**Verdict:** update-needed

## Proposed changes

- **[Critical] Fix incorrect claim about child context**: Step 3 states "the matching child receives only the declared context." Since ABLP-3301 (~2026-08-04), omitting `HISTORY:` defaults to `full` -- the child receives the entire parent conversation history plus the declared PASS fields and summary. Updated to reflect this and added explicit `HISTORY: auto` to the auth gate example where summary-first behavior is intended.
- **[Critical] Add fallback route and ON_FAILURE**: The original article had no fallback route for unmatched messages and no ON_FAILURE strategy. Added a fallback handoff with `WHEN: true` and `ON_FAILURE: RESPOND` to relevant entries, both verified as supported constructs.
- **[Important] Declare PASS variables in SESSION memory or mark as project-local assumptions**: The original passes `customer_id`, `customer_tier`, `account_id`, `conversation_summary` without declaring them. Added these to MEMORY:SESSION and added a note about project-local assumptions.
- **[Important] Expand "How the pattern works" with history default explanation**: Explained the `full` default history strategy, the priority-from-authored-order compilation, and when to use explicit `HISTORY:` or `PRIORITY:` fields.
- **[Important] Add code examples to "Common variations"**: Each variation now has an ABL snippet showing the pattern, not just a bullet description.
- **[Important] Add troubleshooting table**: Common symptoms, causes, and what to check.
- **[Moderate] Add explicit PRIORITY variant**: Shows how to use the `PRIORITY:` field to override authored order.
- **[Moderate] Improve verification section**: Added trace inspection guidance and expected routing decisions.
- **[Moderate] Expand production readiness checklist**: Added history strategy awareness, variable declaration completeness, fallback path, and ON_FAILURE guidance.
- **[Minor] Note CONTEXT shorthand support**: Mentioned that PASS/SUMMARY can appear at HANDOFF top-level instead of nested under CONTEXT.

## Evidence

| Claim                                                            | Current evidence                                                                                                                                                                                                                                                                                                                                                                                                              | Impact                                                                                                                                        |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| "the matching child receives only the declared context"          | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'` in `packages/compiler/src/platform/contracts/contract-source-data.ts`; runtime `resolveHistoryStrategy()` in `apps/runtime/src/services/execution/routing-executor.ts` falls through to this default when `history` is omitted; test assertion `expect(DEFAULT_HANDOFF_HISTORY_STRATEGY).toBe('full')` in `apps/runtime/src/__tests__/sessions/session-threading-context.test.ts` | **Critical** -- customers will not know child agents receive full parent conversation history, risking context leakage in sensitive scenarios |
| Authored order determines evaluation priority                    | compiler.ts `priority: idx + 1` and routing-executor.ts `sorted = [...rules].sort((a, b) => (a.priority ?? Infinity) - (b.priority ?? Infinity))`                                                                                                                                                                                                                                                                             | Confirmed correct; article guidance to "put mandatory gates first" is sound                                                                   |
| `is_authenticated != true` guard expression                      | ABLP-2996 fix (commit `91bb41f26a`) corrected single-segment root-level variable emission in expression-parser.ts; test `['status', 'state["status"]']`                                                                                                                                                                                                                                                                       | The article's guard is now correct; previously would have generated malformed evaluator code                                                  |
| Quoted NL WHEN condition                                         | `isNaturalLanguageRoutingHint()` in `packages/compiler/src/platform/constructs/routing-condition-classifier.ts`; WHEN value preserved as-is by parser                                                                                                                                                                                                                                                                         | Confirmed valid                                                                                                                               |
| `resume_intent` ON_RETURN action                                 | `BUILTIN_HANDOFF_ON_RETURN_ACTIONS = new Set(['continue', 'resume_intent'])` in routing-executor.ts                                                                                                                                                                                                                                                                                                                           | Confirmed valid                                                                                                                               |
| ON_RETURN MAP validation                                         | `validate-cross-agent.ts` checks child field existence: "ON_RETURN maps child field ... but ... does not declare or obviously produce ..."                                                                                                                                                                                                                                                                                    | Confirmed valid; article's MAP uses `is_authenticated` which Authentication_Agent does produce via GATHER                                     |
| `INITIAL:` is canonical keyword                                  | Parser comment in agent-based-parser.ts: "INITIAL: is canonical; initial_value: is accepted as a legacy alias"                                                                                                                                                                                                                                                                                                                | No impact (article shows no initialization)                                                                                                   |
| Auto-guard applies to CONSTRAINTS, not HANDOFF WHEN              | `autoGuardConstraint()` called only in constraint compilation path in compiler.ts                                                                                                                                                                                                                                                                                                                                             | Not directly relevant to this article's WHEN conditions                                                                                       |
| PASS variables fall back to type=string if not in SESSION memory | `resolvePassFields()` in compiler.ts                                                                                                                                                                                                                                                                                                                                                                                          | Undeclared PASS vars will compile but lose type/description metadata                                                                          |
| No fallback route in original article                            | routing-executor.ts skips literal-true fallback rules during deterministic evaluation but uses them as reasoning fallback                                                                                                                                                                                                                                                                                                     | Gap -- unmatched messages have no explicit path                                                                                               |

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/route-with-supervisor-priority.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/route-with-supervisor-priority-2026-08-21-evidence.md`

---

## Proposed replacement article body

````markdown
# How to design supervisor routing with priority gates

Use this pattern when your supervisor must enforce mandatory checks -- authentication, fraud screening, regulatory consent, or VIP escalation -- before the reasoning model selects a business route.

## Concept

A supervisor with priority gates combines two routing modes in a single HANDOFF block:

- **Deterministic gates** use structured expressions (field comparisons, IS SET checks) and are evaluated first. They enforce hard requirements such as "the user must be authenticated before any account operation."
- **Semantic routes** use quoted natural-language conditions or intent-category comparisons and are evaluated after the gates pass. The reasoning model chooses the best specialist based on the user's intent.

The compiler assigns each HANDOFF entry an evaluation priority from its position in the authored list (first entry = highest priority). The runtime sorts entries by priority and evaluates them top to bottom, selecting the first match. Placing mandatory gates at the top of the HANDOFF block guarantees they are checked before any semantic route.

When a gate hands off with `EXPECT_RETURN: true`, the child agent runs and then returns control. The supervisor can then reprocess the original user intent (`action: resume_intent`) or continue where it left off (`action: continue`).

### History default

When you omit `HISTORY:` on a handoff, the platform default is `full` -- the child agent receives the entire parent conversation history. This is important to understand because:

- For temporary gate agents (authentication, compliance), you may want `HISTORY: auto` (summary-first, falling back to the last 5 messages) or `HISTORY: none` to avoid passing unnecessary context.
- For permanent ownership transfers (billing specialist), `full` is usually appropriate so the specialist has complete conversation context.

The supported history strategies are: `full` (default), `auto`, `none`, `summary_only`, and `{ mode: last_n, count: <n> }`.

## Minimal working example

```abl
SUPERVISOR: Priority_Routing_Supervisor
GOAL: "Apply mandatory gates before semantic routing"

INTENTS:
  account_help: "Account access, profile, or settings requests."
  billing: "Billing, invoice, or payment requests."
  support: "General product support requests."

MEMORY:
  SESSION:
    - is_authenticated
    - customer_id
    - customer_tier
    - account_id
    - conversation_summary

HANDOFF:
  # Gate 1: Authentication (highest priority, deterministic)
  - TO: Authentication_Agent
    WHEN: is_authenticated != true
    EXPECT_RETURN: true
    CONTEXT:
      pass: [customer_id]
      summary: "Authenticate the customer before handling account or billing data."
      history: auto
    ON_RETURN:
      action: resume_intent
      MAP:
        is_authenticated: is_authenticated

  # Gate 2: VIP escalation (semantic, checked before ordinary routes)
  - TO: Priority_Care_Agent
    WHEN: "the customer is platinum or strategic and asks for escalation"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, customer_tier, conversation_summary]
      summary: "High-priority customer asked for escalation."

  # Business routes (intent-based)
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, account_id]
      summary: "Customer needs billing help."
    ON_FAILURE: RESPOND "I was unable to connect you with billing. Let me try again."

  - TO: Account_Agent
    WHEN: intent.category == "account_help"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id]
      summary: "Customer needs account help."

  - TO: Support_Agent
    WHEN: intent.category == "support"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, conversation_summary]
      summary: "Customer needs product support."

  # Fallback (lowest priority, catches unmatched messages)
  - TO: Support_Agent
    WHEN: true
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id]
      summary: "No specific route matched. General support fallback."

AGENT: Authentication_Agent
GOAL: "Authenticate customers"

GATHER:
  is_authenticated:
    TYPE: boolean
    PROMPT: "Is the customer authenticated?"
    REQUIRED: true

COMPLETE:
  - WHEN: is_authenticated IS SET
    RESPOND: "Authentication result captured."

AGENT: Priority_Care_Agent
GOAL: "Handle priority escalations"

AGENT: Billing_Agent
GOAL: "Resolve billing requests"

AGENT: Account_Agent
GOAL: "Resolve account requests"

AGENT: Support_Agent
GOAL: "Resolve support requests"
```
````

## How it works

1. The supervisor receives the user message and keeps ownership until a route matches.
2. Intent categories, runtime context, gathered values, or tool results provide the routing evidence.
3. HANDOFF entries are evaluated in authored order (first = highest priority). The compiler assigns `priority: 1, 2, 3, ...` based on position, and the runtime sorts by priority (lower = first).
4. The first matching WHEN condition wins. Deterministic gates at the top of the list are always checked before semantic or intent-based routes below them.
5. When a handoff fires, the child agent receives the PASS fields, the summary, and conversation history according to the HISTORY strategy. The default strategy is `full` (entire parent history). Use `HISTORY: auto` or `HISTORY: none` when you want the gate agent to receive less context.
6. If the child is temporary (`EXPECT_RETURN: true`), it returns through `ON_RETURN`. The supervisor then either resumes intent routing (`action: resume_intent`) or continues its current flow (`action: continue`).
7. If the child owns the conversation (`EXPECT_RETURN: false`), it remains the active agent permanently.

## Common variations

### Authentication gate before account or billing specialists

Use `EXPECT_RETURN: true` with `ON_RETURN: action: resume_intent` so the supervisor reprocesses the original user intent after authentication completes. Set `HISTORY: auto` to give the auth agent only a summary instead of full conversation history.

```abl
HANDOFF:
  - TO: Auth_Gate
    WHEN: is_authenticated != true
    EXPECT_RETURN: true
    CONTEXT:
      pass: [session_token]
      summary: "Verify user identity before proceeding."
      history: auto
    ON_RETURN:
      action: resume_intent
      MAP:
        is_authenticated: auth_result
```

### VIP escalation route before ordinary queue routing

Place the VIP check after mandatory gates but before standard business routes. Use a quoted natural-language WHEN condition when the routing evidence comes from business context rather than a single ABL field.

```abl
HANDOFF:
  - TO: VIP_Concierge
    WHEN: "the customer has a platinum or enterprise tier and is requesting priority service"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, customer_tier, account_value]
      summary: "VIP customer requesting priority service."
```

### Compliance gate with explicit PRIORITY field

When you need to override the default authored-order priority, use the `PRIORITY:` field. Lower values are evaluated first.

```abl
HANDOFF:
  - TO: Compliance_Check
    WHEN: transaction_amount > 10000
    PRIORITY: 0
    EXPECT_RETURN: true
    CONTEXT:
      pass: [transaction_id, transaction_amount, customer_id]
      summary: "High-value transaction requires compliance review."
      history: none
    ON_RETURN:
      action: continue
      MAP:
        compliance_cleared: review_result

  - TO: Payment_Agent
    WHEN: intent.category == "payment"
    PRIORITY: 10
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, transaction_id]
      summary: "Process payment request."
```

### CONTEXT shorthand

PASS, SUMMARY, and HISTORY can also appear as direct siblings of the handoff entry instead of nested under CONTEXT. Both forms are equivalent.

```abl
HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    PASS: [customer_id, account_id]
    SUMMARY: "Customer needs billing help."
    HISTORY: full
    EXPECT_RETURN: false
```

## Verification

- Parse the ABL and confirm there are no parser errors or warnings.
- Compile the ABL and confirm there are no compiler errors. Review any warnings about undeclared field references -- these indicate variables that must be supplied at runtime from context, tool results, or project configuration.
- Test each routing path with a representative utterance:
  - For the authentication gate: send any message when `is_authenticated` is not set. Expect the supervisor to route to Authentication_Agent.
  - For the VIP route: send "I need to speak with someone about my enterprise account" when the customer tier is platinum. Expect Priority_Care_Agent.
  - For intent routes: send "I have a billing question" and confirm the Billing_Agent is selected.
  - For the fallback: send a message that does not match any defined intent. Confirm Support_Agent is selected as the fallback.
- After the auth gate returns, send a billing-related message and confirm the supervisor re-routes to Billing_Agent (validating `resume_intent` behavior).
- Inspect routing traces for: selected target, condition result, passed context fields, history strategy applied, and return behavior when `EXPECT_RETURN: true` is used.

## Production readiness checklist

- Every specialist route has a clear owner and a concise context summary.
- All variables referenced in PASS fields are declared in MEMORY:SESSION or are explicitly documented as project-local assumptions that will be populated at runtime.
- Deterministic conditions use declared, gathered, tool-result, runtime, or returned fields.
- Semantic conditions are quoted as natural-language WHEN text.
- Temporary child agents produce every field mapped in ON_RETURN.
- A fallback route with `WHEN: true` catches unmatched messages explicitly.
- ON_FAILURE is set on critical routes to handle dispatch failures gracefully.
- The HISTORY strategy is chosen deliberately for each handoff. Use `full` for permanent transfers, `auto` or `none` for temporary gates that should not receive full conversation context.
- Fallback behavior is explicit and does not hide missing intent coverage.
- Routes are tested with representative utterances for each path, including the fallback and the post-gate resume path.

## Common mistakes

| Mistake                                                                                             | Why it happens                                                                                                                  | How to avoid it                                                                                                                            |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Omitting HISTORY on a gate handoff and leaking full conversation context to a temporary child agent | The default HISTORY strategy is `full`, which passes the entire parent conversation to the child                                | Set `HISTORY: auto` or `HISTORY: none` on temporary gate agents that do not need the full conversation                                     |
| Making the specialist responsible for checking a mandatory parent gate                              | It seems simpler to let each child check auth, but this duplicates logic and risks inconsistency                                | Keep mandatory gates in the supervisor HANDOFF block, above all specialist routes                                                          |
| Mapping returned fields that the child agent does not produce                                       | ON_RETURN MAP references a field name that is not gathered, set, or returned by the child                                       | Ensure the child agent declares or produces every field referenced in ON_RETURN MAP                                                        |
| Using an unquoted expression for externally supplied values                                         | Unquoted conditions are parsed as structured expressions and may produce undefined-variable warnings                            | Use a quoted natural-language condition when the routing evidence is external business context, or declare the variables in MEMORY:SESSION |
| No fallback route for unmatched messages                                                            | All WHEN conditions are specific, so an unmatched message has no explicit path                                                  | Add a `WHEN: true` fallback as the last HANDOFF entry                                                                                      |
| PASS fields not declared in MEMORY:SESSION                                                          | The compiler resolves PASS fields from session memory for type/description metadata; undeclared fields fall back to type=string | Declare all PASS variables in MEMORY:SESSION for clear typing and documentation                                                            |

## Troubleshooting

| Symptom                                                              | Likely cause                                                                                                       | What to check                                                                                                       |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Gate agent fires on every message even after authentication succeeds | ON_RETURN MAP does not write back the gate result to the parent session variable                                   | Verify that the MAP key matches the child's output field and the parent's session variable name                     |
| Semantic route is selected before the deterministic gate             | The semantic route appears above the gate in the HANDOFF block (lower authored position = higher priority)         | Move mandatory gates to the top of the HANDOFF block                                                                |
| Child agent responds without conversation context                    | HISTORY is set to `none` or `summary_only`, or the summary is empty when using `auto`                              | Check the HISTORY strategy on the handoff entry; use `full` or provide a non-empty summary for `auto`               |
| Compiler warning about undeclared field reference in WHEN condition  | The variable in the WHEN expression is not in GATHER, MEMORY:SESSION, or built-in variables                        | Declare the variable in MEMORY:SESSION, or verify it will be supplied at runtime from context or tool results       |
| resume_intent does not re-route after gate return                    | The ON_RETURN action is set to `continue` instead of `resume_intent`, or the MAP does not update the gate variable | Set `action: resume_intent` in ON_RETURN and verify the MAP updates the condition variable (e.g., is_authenticated) |
| Unmatched messages produce no response                               | No fallback route exists in the HANDOFF block                                                                      | Add a `WHEN: true` fallback entry as the last HANDOFF entry                                                         |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to route conversations based on user intent
- How to route unclear requests to a fallback agent

```

```
