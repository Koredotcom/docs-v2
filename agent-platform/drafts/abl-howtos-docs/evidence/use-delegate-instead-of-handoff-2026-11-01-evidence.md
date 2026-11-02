# Evidence: use-delegate-instead-of-handoff

**Date:** 2026-11-01
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/use-delegate-instead-of-handoff-2026-11-01-draft.md`
**Topic:** 4.2 - When to use DELEGATE instead of HANDOFF
**Workflow:** New article against `release_Artemis_1.9.0` (read-only). No prior article, draft, or evidence.

## Validation harness

Same as 4.1. `validateABL` bundled to `scratchpad/handoff-vs-delegate/validate.mjs`, run from `/tmp`. Blocks extracted from the draft and validated as one project. Runtime not started.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseDelegateConfig` 8603-8700) | Parsed keys only. No `ON_FAIL`, no `FAILURE_MESSAGE`, no `RETURN`. `TO` and `AGENT` alias. `INPUT` and `PASS` alias. `PURPOSE` and `SUMMARY` alias |
| `packages/compiler/src/platform/ir/compiler.ts` (1359, 2326, 3894, 4643) | Orchestrator-only rule. `__delegate__` system tool. `compileFailureHandling` default `continue`. `RESPOND "<msg>"` form |
| `packages/compiler/src/platform/ir/validate-coordination-config.ts` (186-197) | `INVALID_DELEGATE_FAILURE_ACTION`. `INVALID_TIMEOUT_SYNTAX` |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts` (152-380, 381-500) | `UNKNOWN_DELEGATE_RETURN_FIELD` (warning), `DELEGATE_CHILD_HANDOFF_UNSUPPORTED`, `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` |
| `packages/compiler/src/platform/ir/delegate-result-contract.ts` | `resolveDelegateUseResultMemoryKey`: identifier is the target key, blank gives `delegate_result`, text with spaces gives null. Type names in `RETURNS` read as a schema |
| `packages/compiler/src/platform/constructs/executors/delegate-executor.ts` (98-200) | Self, cycle, depth 10, `WHEN`, registry. Expression `WHEN` is a guard. Natural-language `WHEN` passes only when model-selected |
| `apps/runtime/src/services/execution/routing-executor.ts` (`handleDelegate` 20172, 20500-20960, `handleDelegateFailure` 28876, `checkAuthoredDelegateContinuations` 26498, `resolveDelegateOutputPolicy` 3199, `getUnsupportedDelegateWaitReason` 5381, `mapDelegateReturns` use at 20905) | Own child session. Output suppressed. Parent synthesizes. Failure switch: `respond`, `escalate`, `continue`. Missing `RETURNS` values throw. Continuation runs each entry once |
| `apps/runtime/src/services/execution/prompt-builder.ts` (5600, 5862) | `delegate_to_<Agent>` tool. Description uses `PURPOSE`, `WHEN` |
| Tests `handoff-delegate-return-semantics.test.ts` (515, 578, 634, 699, 806, 868), `handoff-delegate-terminal-semantics.test.ts`, `delegate-returns-allowlist.test.ts` | Returning delegate maps output and parent answers. Child output does not leak. Interactive child fails closed. Child terminal handoff rejected |
| `examples/telco/agents/incident_manager.agent.abl`, `examples/travel/agents/booking_manager.agent.abl`, `examples/flow-test/agents/hotel_booking.agent.abl` | Real `DELEGATE` usage with `ON_FAILURE` |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` | Reference cross-check |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Hidden one-shot sub-task with `INPUT` and `RETURNS` | yes | `handleDelegate`. Test 515. Blocks 1 and 2 clean | covered |
| Model-selected call with expression `WHEN` guard | yes | `DelegateExecutor.validate` step 4. `delegate_to_` tool | covered |
| Natural-language `WHEN` as guidance | yes | `allowNaturalLanguageWhen: isModelSelectedDelegate` | covered |
| Authored dispatch after a returned child | yes | `checkAuthoredDelegateContinuations`, once per entry | covered |
| `ON_START` delegate and flow `DO` delegate | yes | Evidence `use-on-start-welcome`. Test 515 flow form | out of scope, linked to 4.7 |
| Parallel delegates | yes | Reference concurrency note | out of scope, linked to 4.8 |
| `ON_FAILURE` `continue`, `respond`, `escalate` | yes | `handleDelegateFailure`. Harness `v_cont`, `v_esc` clean | covered |
| `ON_FAILURE: retry`, `ON_FAIL`, `FAILURE_MESSAGE` | no | `n_retry` gives `INVALID_DELEGATE_FAILURE_ACTION`. `n_onfail` compiles clean (key ignored) | covered as mistakes |
| `TIMEOUT` forms | yes | `n_timeout` gives `INVALID_TIMEOUT_SYNTAX`. Default falls back to runtime config, then 30000 ms | covered |
| `USE_RESULT` identifier, omitted, text | yes | `delegate-result-contract.ts`. Harness `n_useresult`, `n_nouse` clean | covered |
| Role rules (`router`, `assistant`, none, `orchestrator`) | yes | `compiler.ts` 1359. Harness `n_router`, `n_assistant` | covered |
| Child constraints (gather, terminal handoff, cycle, depth, self) | yes | validators and `DelegateExecutor` | covered |
| Delegate then handoff on result | yes | Block 3 to 6 clean. Test 699 | covered |
| `ENABLED_WHEN` on delegate | yes | Parser 8645. Not harness-tested here | covered in one sentence |
| `MEMORY_GRANTS`, `EXPERIENCE_MODE`, remote delegate | yes | Parser keys | out of scope, stated by omission. Experience mode other than the default does not show child output (`finalAnswerOwner` is always `parent`) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `handleDelegate`, `handleDelegateFailure`, tests 515, 578, 806 | covered | Runtime not started |
| Required companion resources identified | Child, tool, specialists defined. Tool binding marked as project-local assumption | covered | None |
| Referenced variables have sources | `applicant_id` from `GATHER`. `credit_band` from `RETURNS`. `screening_clear` from `RETURNS`. `credit_result` from `USE_RESULT` | covered | None |
| Fallback, failure, ambiguity behavior verified | Failure table. Cycle and depth. Interactive child. Missing returns | covered | Same-`WHEN` handoff and delegate ambiguity (`resolveProtectedEvalCoordination` returns null) not covered |
| Customer verification path defined | `delegate_start`, `delegate_complete` `success`, parent values, no `handoff` event | covered | Field `success` taken from `handleDelegateFailure` and test 515 |
| Production readiness checklist included | Checklist section | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 and 2 (loan agent, credit check) | full-document set | `validateABL`, one project | pass | none | kept |
| Blocks 3 to 6 (transfer desk, screening, payment, compliance) | full-document set | `validateABL`, one project | pass | none | kept |
| All 6 blocks in one project | n/a | `validateABL` | pass | none | kept |

Earlier iterations raised `MISSING_PARAM_DESCRIPTION`, `W801`, `MISSING_VARIABLE_PRODUCER_WARNING`, and `UNUSED_REQUIRED_GATHER_FIELD`. All were fixed in the examples.

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Rules table from validators. Dropped unsupported reference claims | 5 |
| Depth of conceptual explanation | 4 | Comparison table and start mechanics before ABL | 5 |
| Readability and usability | 4 | Answer first. Tables for rules | 4 |
| Coverage of examples | 3 | Added combined delegate then handoff example | 4 |
| Search and discovery quality | 4 | Error codes in troubleshooting | 4 |
| Completeness of workflow and failure modes | 3 | Failure table, timeout, cycle, missing return | 4 |
| Customer/partner self-service readiness | 4 | No repo paths. Tool binding stated | 4 |
| Scenario comprehensiveness | 4 | Scoped rows with reasons | 4 |
| Article completeness | 5 | All template sections | 5 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, type, compiler, runtime, tests, examples? | pass | See source table |
| Searched synonyms and neighbors? | pass | `DELEGATE`, `delegate_to_`, `RETURNS`, `USE_RESULT`, `ON_FAILURE`, `delegateStack`, `RETURN: true` flow form |
| Every authoring style, alias, default? | pass | `TO`/`AGENT`, `PASS`/`INPUT`, `SUMMARY`/`PURPOSE`, default `continue` |
| Optional vs required separated? | pass | Validator makes `USE_RESULT` optional. Article says omit is allowed |
| Preferred pattern not the only one? | pass | `HANDOFF` and flow-step delegate named |
| Another supported way not mentioned? | pass | `MEMORY_GRANTS`, remote, `EXPERIENCE_MODE` not shown | 
| Evidence for "are you not considering all scenarios"? | pass | Variant map above |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Rules match validators. Failure behavior verified | None |
| Senior content writer | ready | Short sentences. Decision first | None |
| Product manager/customer enablement | ready | Clear criteria and mistakes table | None |

## Doc bugs and discrepancies for human review

| Item | Detail |
| ---- | ------ |
| `ON_FAIL` and `FAILURE_MESSAGE` | Reference documents them for `DELEGATE`. The parser ignores both. The working form is `ON_FAILURE: RESPOND "<message>"` |
| `retry` strategy | Reference lists `retry` with a count. The validator rejects it (`INVALID_DELEGATE_FAILURE_ACTION`) |
| `USE_RESULT` | Reference calls it instructions for interpreting the result. Runtime uses only an identifier as the target variable. Text has no effect |
| Role table | Reference says `assistant` can `DELEGATE`. The compiler rejects it |
| `EXPERIENCE_MODE` on `DELEGATE` | Reference allows `visible_handoff`. Runtime `finalAnswerOwner` is always `parent`, so child output stays suppressed. Needs product confirmation |
| Evaluation order | Reference order (ESCALATE, HANDOFF, DELEGATE, COMPLETE) not verified |

## Uncertainty

Initial delegate selection on a normal turn is model-owned in the code read. A pipeline "protected eval" path can select a delegate deterministically. It is not covered. The article says the model calls the tool on a normal turn.
