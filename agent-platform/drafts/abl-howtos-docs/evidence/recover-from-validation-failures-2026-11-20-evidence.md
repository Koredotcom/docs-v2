# Evidence: recover-from-validation-failures

**Date:** 2026-11-20
**Topic:** 8.9 - How to show recovery prompts when validation fails
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/recover-from-validation-failures-2026-11-20-draft.md`
**Release:** `hotfix_Artemis_1.10.1` (code repo read-only, branch head `856cf05a449`)
**Workflow:** New article. No prior draft or evidence. Builds on 8.1 (`validate-fields-by-type`).

## Validation harness

`validateABL` bundled with esbuild in the scratchpad (same harness as 8.1). Command: `node v.mjs <file>.abl`. Files use the prefix `89_`. No live runtime session was run. Runtime behavior rests on code reading and on existing runtime tests.

## Source files inspected

| File                                                                                        | Purpose                                                                                                                                |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (18555-18690)                   | `trackValidationRetries`: counters, retry prompts, exceeded mark, `validation_max_retries`, `ON_ERROR` routing, `agent_error_handled`. |
| `flow-step-executor.ts` (2260-2320, 13585-13670)                                            | `MAX_ATTEMPTS` and `ON_EXHAUSTED`: both required, floor, counter, `flow_step_attempts_exhausted`, transition.                          |
| `flow-step-executor.ts` (2925-3070, 24594-24700)                                            | Pending `validation_error` handler, reset on success, consumption, `escalate`, `complete`, `retry_step` actions, default text.         |
| `flow-step-executor.ts` (23411, 24908, 25350, 25484, 26885, 27619)                          | Where a failed step attempt is charged.                                                                                                |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (27860-28000)                   | Top-level GATHER: counters, `validation_max_retries`, hints to the model. No handler routing.                                          |
| `apps/runtime/src/services/execution/error-handler-router.ts`                               | Handler resolution order: step, agent handlers, default handler.                                                                       |
| `apps/runtime/src/services/execution/gather-rejection-reasons.ts`                           | Reason codes, `MESSAGES` keys, locale chain, omitted note for non-English.                                                             |
| `packages/compiler/src/platform/ir/schema.ts` (3191, 3760-3782)                             | `ValidationRule`, `ErrorHandler.then` values.                                                                                          |
| `packages/compiler/src/platform/ir/compiler.ts` (3100-3290)                                 | Lowering of `validate`, `retry_prompt`, `max_retries`.                                                                                 |
| `packages/core/src/parser/agent-based-parser.ts` (505-530, 3440-3480)                       | Error handler types; `MAX_ATTEMPTS`, `ON_EXHAUSTED` parsing.                                                                           |
| `apps/runtime/src/__tests__/execution/runtime-flow-semantics-matrix.test.ts` (17800-18100)  | Handler with `CONTINUE`; no-handler default; counter clear on recovery; `MAX_ATTEMPTS` recovery.                                       |
| `apps/runtime/src/__tests__/execution/ablp-5462-5711-authored-escalation.test.ts` (424-622) | `validation_error` handler with `ESCALATE`, with and without an `ESCALATE` block.                                                      |
| `apps/runtime/src/__tests__/execution/ablp-5713-gather-reask-reason-copy.test.ts`           | Re-ask copy, `MESSAGES` override, `retry_prompt` override, sensitive, locale, LLM reason.                                              |
| `apps/runtime/src/__tests__/error-handler-integration.test.ts`                              | Type plus subtype handler matching.                                                                                                    |

## Scenario and variant map

| Scenario or variant                                                                | Supported?            | Evidence                                                                                               | Article coverage                                 |
| ---------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| `retry_prompt` replaces the whole re-ask (FLOW, `REASONING: false`)                | yes                   | ablp-5713 test; matrix test turn 1-3                                                                   | covered                                          |
| `retry_prompt` passed as hint to the model (top-level GATHER)                      | yes                   | reasoning-executor 27957                                                                               | covered                                          |
| `retry_prompt`, `max_retries`, `validation_process` need `validate:`               | yes                   | harness: `GATHER_VALIDATION_RULE_REQUIRED` (89_5)                                                      | covered                                          |
| `MESSAGES` `gather_invalid_*` overrides                                            | yes                   | gather-rejection-reasons.ts; ablp-5713                                                                 | covered (links to 8.1 for the table)             |
| Locale chain: catalog, agent `MESSAGES`, English default; non-English omits reason | yes                   | `resolveGatherRejectionNote`; ablp-5713 French cases                                                   | covered                                          |
| LLM validator reason shown as written; no reason gives `gather_invalid_value`      | yes                   | ablp-5713                                                                                              | covered, brief                                   |
| `max_retries` counter, exceeded mark, one-time trace                               | yes                   | `trackValidationRetries`; matrix test                                                                  | covered                                          |
| Counter cleared on valid value                                                     | yes                   | `resetValidationRetryStateForField`                                                                    | covered                                          |
| `validation_error` handler with `SUBTYPE: max_retries_exceeded`                    | yes                   | flow-step-executor 18650; ablp-5462-5711 test                                                          | covered                                          |
| Handler actions `ESCALATE`, `COMPLETE`, `RETRY_STEP`, `CONTINUE`                   | yes                   | code 24594-24700 (escalate, complete, retry_step); matrix test (continue); harness compile of all four | covered                                          |
| Handler actions `HANDOFF`, `BACKTRACK`                                             | gap                   | IR allows them; consume path handles only escalate, complete, retry_step                               | not covered                                      |
| No handler: default handler, step stays parked                                     | yes                   | matrix test "without authored ON_ERROR"                                                                | covered                                          |
| Handler fires once per field                                                       | yes                   | code 18629-18637                                                                                       | covered                                          |
| Top-level GATHER: count and trace only, no handler                                 | yes (by code absence) | reasoning-executor has no `resolveErrorHandler` for validation; grep found none                        | covered, flagged G2                              |
| Fields without `validate:` not counted by `max_retries`                            | yes                   | comment at 18563; `validationByField` index                                                            | covered                                          |
| `MAX_ATTEMPTS` plus `ON_EXHAUSTED`, both required                                  | yes                   | `recordFailedFlowStepAttempt`                                                                          | covered                                          |
| Step attempts charged on missing required field after a turn                       | yes (code)            | six call sites                                                                                         | covered, flagged G1                              |
| `CORRECTIONS: true`                                                                | yes                   | parser 3767; flow-step-executor 8099, 13928                                                            | pointer only, owned by 6.2                       |
| Sensitive fields: no value in reason, trace, logs                                  | yes                   | extraction-validation `quotedValue`; ablp-5713 sensitive test                                          | covered                                          |
| Escalation after exhaustion through `THEN: ESCALATE` flow terminal                 | yes                   | existing article escalate-to-human; test                                                               | covered in example 2                             |
| `ON_ERROR validation_error THEN: ESCALATE` reaches a human                         | yes in FLOW           | `dispatchAuthoredEscalation` (ABLP-5711), test "escalates"                                             | covered. Conflicts with existing article, see G3 |
| Step-level `ON_ERROR` for `validation_error`                                       | gap                   | router supports `currentStep.on_error`; the `trackValidationRetries` call passes no step               | not covered                                      |
| Entity pipeline or `ENTITIES` retry settings                                       | no                    | no retry settings found on entities                                                                    | out of scope                                     |

## Example validation

| Article block                                        | Classification           | Validation method                                | Result                                  | Warnings or errors                                               | Action                                                    |
| ---------------------------------------------------- | ------------------------ | ------------------------------------------------ | --------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------- |
| Minimal (Work_Email_Verifier)                        | full-document            | `validateABL` (89_1.abl)                         | pass                                    | first run: `UNDEFINED_CONDITION_VAR` for a deterministic trigger | fixed with a quoted prompt-only trigger, then no warnings |
| Fallback step (Reference_Code_Collector)             | full-document            | 89_2.abl                                         | pass                                    | same warning, fixed the same way                                 | kept                                                      |
| Override reason text (Callback_Messages)             | full-document            | 89_4.abl                                         | pass                                    | none                                                             | kept                                                      |
| Model-led recovery                                   | section-snippet          | wrapped in `Account_Number_Collector` (89_3.abl) | pass                                    | none                                                             | kept                                                      |
| `THEN` variants `RETRY_STEP`, `COMPLETE`, `CONTINUE` | not in article as blocks | 89_1 with the `THEN` swapped                     | pass                                    | none                                                             | used for evidence                                         |
| Retry without rule (not in article)                  | full-document            | 89_5.abl                                         | error `GATHER_VALIDATION_RULE_REQUIRED` | expected                                                         | used for evidence                                         |

## Operational readiness map

| Requirement                                  | Evidence                                                     | Article coverage | Gap or action                                                  |
| -------------------------------------------- | ------------------------------------------------------------ | ---------------- | -------------------------------------------------------------- |
| Runtime behavior verified                    | Matrix and escalation tests read; code read                  | covered          | No live run. See G1.                                           |
| Required companion resources identified      | `ESCALATE` block and routing named; no tools or other agents | covered          | Routing target is a project assumption, stated in the article. |
| Referenced variables have sources            | "Variable sources" under each full example                   | covered          | none                                                           |
| Fallback/failure/ambiguity behavior verified | No-handler parked, handler once, exhaustion transition       | covered          | G2 for top-level GATHER                                        |
| Customer verification path defined           | Utterance table and four trace events                        | covered          | none                                                           |
| Production readiness checklist included      | Yes                                                          | covered          | none                                                           |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                                                                          | Final score |
| ------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| Grounding in the code                      | 3             | Replaced two unverified claims (default limit, counter-based trigger). Narrowed the type-failure counting claim to match the code comment. | 4           |
| Depth of conceptual explanation            | 4             | Added the three-layer model and the pick-the-layer table.                                                                                  | 4           |
| Readability and usability                  | 4             | Answer first, tables over prose.                                                                                                           | 4           |
| Coverage of examples                       | 4             | Three full documents and one snippet, all validated.                                                                                       | 4           |
| Search and discovery quality               | 4             | Troubleshooting uses "never stops asking" and "retry prompt" wording.                                                                      | 4           |
| Completeness of workflow and failure modes | 4             | Added no-handler, once-only, and top-level GATHER behavior.                                                                                | 4           |
| Customer/partner self-service readiness    | 4             | Internal variable names appear only in the verification list.                                                                              | 4           |
| Scenario comprehensiveness                 | 4             | `HANDOFF` and `BACKTRACK` handler actions and step-level `ON_ERROR` are recorded as gaps.                                                  | 4           |
| Article completeness                       | 4             | All template sections present.                                                                                                             | 4           |

**Gate result:** pass, with gaps G1 to G3 flagged for the reviewer.

## Red-team coverage pass

| Question                                                                                        | Result            | Evidence or correction                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inspected parser, types, compiler, runtime, tests, examples?                                    | pass              | See source table.                                                                                                                                                           |
| Searched neighbors (`ON_ERROR`, `ON_EXHAUSTED`, `CORRECTIONS`, `_clarification_count`, repair)? | pass              | Found conversation-behavior clarification stages that change re-ask wording by count (`incrementClarificationCount`). Not covered: not authored per field. Add to G1 check. |
| Every authoring style, shorthand, alias covered?                                                | pass              | `validate`/`validation` alias, map and list field forms.                                                                                                                    |
| Optional helpers versus required config distinguished?                                          | pass              | `retry_prompt` is optional but needs `validate:`.                                                                                                                           |
| Free-form guidance path explained?                                                              | pass              | Top-level GATHER: model words the re-ask.                                                                                                                                   |
| Preferred pattern presented as the only one?                                                    | pass              | Three layers, three exits.                                                                                                                                                  |
| Could a customer build this another way?                                                        | fix-needed, noted | `CONSTRAINTS ... ON_FAIL` and guardrails can also stop a flow. Belongs to 8.7 and 8.10.                                                                                     |
| Evidence if asked "Are you not considering all scenarios?"                                      | pass              | Variant map above.                                                                                                                                                          |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                                        | Required improvements                                                                                 |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Handler once-only and parked-default are code-backed. Top-level GATHER limit is stated honestly. | Run live to confirm G1 (what a rejected value costs in `MAX_ATTEMPTS`). Resolve G3 before publishing. |
| Senior content writer               | ready             | Three-layer frame, short tables, answer first.                                                   | none                                                                                                  |
| Product manager/customer enablement | ready             | Production checklist ends on an exit and a monitored event.                                      | none                                                                                                  |

## Known gaps and ambiguity (needs user decision)

- **G1. Attempt counting.** The article says a rejected value counts toward `MAX_ATTEMPTS` because the field stays missing. Six call sites charge attempts on "still missing" paths, but no test pins the rejected-value case. Confirm with a live run. Also check whether the conversation-behavior repair stages (`incrementClarificationCount`) change the re-ask wording after repeated failures.
- **G2. Top-level GATHER has no limit action.** `max_retries` records only. This may be intended or a missing feature. The article states the current behavior.
- **G3. Conflict with a published-draft article.** `articles/escalate-to-human.md` says `ON_ERROR` with `THEN: ESCALATE` "reports an escalation, no transfer and no task". In 1.10.1, a `validation_error` handler with `THEN: ESCALATE` in a FLOW step dispatches a full authored escalation (ABLP-5711, tested). That article may be out of date for this path. It was written against 1.9.2. The new article follows the code and also shows the flow-terminal `THEN: ESCALATE` route.
- **G4. Handler actions `HANDOFF` and `BACKTRACK`** are in the IR but the consume path handles only `escalate`, `complete`, and `retry_step`. The article does not list them.
