# Evidence: delegate-and-map-result (topic 4.7)

Date: 2026-11-01. Target: Artemis 1.9.0 (branch release_Artemis_1.9.0, read-only). Draft: reviews/delegate-and-map-result-2026-11-01-draft.md.

## Source files inspected

- packages/core/src/parser/agent-based-parser.ts (parseDelegate, parseDelegateConfig, readRouteCondition, applyRouteCondition, action-handler DELEGATE details, digression DELEGATE details)
- packages/core/src/types/agent-based.ts (DelegateConfig, DelegateFailureAction, StartConfig.delegate, ActionHandlerActionAST)
- packages/core/src/parser/on-start-diagnostics support: on-start-do-block.ts
- packages/core/src/diagnostics/registry.data.ts (W320, W321, E320, E387, E388, ROUTE_WHEN_MULTILINE_JOINED)
- packages/compiler/src/platform/ir/compiler.ts (compileCoordination, compileFailureHandling, __delegate__ system tool, role check)
- packages/compiler/src/platform/ir/delegate-result-contract.ts
- packages/compiler/src/platform/ir/validate-coordination-config.ts, validate-cross-agent.ts, validate-input-mappings.ts, validate-ir.ts, on-start-diagnostics.ts
- packages/compiler/src/platform/constructs/executors/delegate-executor.ts, timeout-utils.ts
- apps/runtime/src/services/execution/routing-executor.ts (handleDelegate, admitDelegateLegacy, executeDelegate, mapDelegateInput, mapDelegateReturns, buildDelegateReturnSource, buildDelegateResultEnvelope, handleDelegateFailure, getUnsupportedDelegateWaitReason, skippedDelegateWhenNotMet)
- apps/runtime/src/services/execution/flow-step-executor.ts (step DO delegate handler, applyDigressionReturnMap, buildFailedOrRefusedDelegateResult, ON_START delegate block)
- apps/runtime/src/services/execution/reasoning-executor.ts (delegate_to_ and __delegate__ branches, break rules)
- apps/runtime/src/services/execution/prompt-builder.ts (buildDelegateDescription, buildDelegateInputSchema)
- apps/runtime/src/services/execution/agent-lookup.ts (remote lookup uses HANDOFF only)
- apps/runtime/src/services/runtime-executor.ts (timeout defaults, RUNTIME_DELEGATE_TIMEOUT_MS)
- Tests and examples: apps/runtime/src/__tests__/execution/on-start-delegate-execution.test.ts, packages/compiler/src/__tests__/remote-agent-coordination.test.ts, examples/flow-test, examples/travel, examples/telco.

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| --- | --- | --- | --- |
| DELEGATE section, `- TO:` entry | yes | parseDelegate; `- AGENT:` legacy alias accepted; W320/W321 for bad entries | covered (TO; alias not shown) |
| Target must be single word | yes | regex `(\w+)`; W321 | covered in troubleshooting scope (not shown) |
| WHEN expression | yes | applyRouteCondition, evaluateRoutingPrimitiveWhen | covered |
| WHEN natural language (model hint) | yes | isLiveRoutingPrimitiveWhenMatched acceptModelSelectedSemanticHint | covered |
| `IS SET` vs `!= ""`; `//` comment in WHEN | yes | lead facts; n_when.abl compiles; parser comment strip | covered |
| ENABLED_WHEN | yes | validateEnabledWhenEntries; ENABLED_WHEN_EMPTY | covered |
| PURPOSE / SUMMARY alias | yes | parser case PURPOSE/SUMMARY | covered (PURPOSE) |
| INPUT / PASS alias, inline and block | yes | parser | covered |
| INPUT dot-path only, CEL warns | yes | mapDelegateInput; CEL_IN_INPUT_MAPPING | covered |
| RETURNS map form | yes | mapDelegateReturns | covered |
| RETURNS schema form | yes | isDelegateReturnSchemaMapping | covered |
| USE_RESULT variable, default delegate_result | yes | resolveDelegateUseResultMemoryKey | covered |
| USE_RESULT prose (legacy examples) | yes, stores nothing | key regex fails, null | covered |
| MAP on DELEGATE | no | not a DELEGATE key; MAP exists only under `ON_RETURN` of DO action | covered (stated) |
| HISTORY on DELEGATE | no | no key in parseDelegateConfig; unknown keys ignored | covered (stated) |
| TIMEOUT, default chain | yes | executeDelegate: entry, delegateTimeoutMs, timeoutMs, 30000 | covered |
| ON_FAILURE continue/respond/escalate | yes | handleDelegateFailure | covered |
| ON_FAILURE retry | no (error) | INVALID_DELEGATE_FAILURE_ACTION; neg_typo.abl | covered |
| ON_FAIL misspelling | silently ignored | no case in switch | covered |
| MEMORY_GRANTS | yes | parser, validateCoordinationMemoryGrants | covered (text only) |
| EXPERIENCE_MODE | yes | parser, resolveDelegateOutputPolicy | gap: not covered (out of scope, visibility tuning) |
| Flow step `DO: - DELEGATE` with RETURN/ON_RETURN MAP | yes | flow-step-executor delegate handler | covered |
| Flow step DELEGATE without RETURN true | yes | outcome break after delegate | covered |
| Flow DO delegate to undeclared target | compiles | n_flowundecl.abl clean | covered |
| ON_START `DELEGATE:` | yes | on-start-delegate-execution.test.ts | covered |
| ON_START DO DELEGATE | no (dropped) | UNSUPPORTED_ON_START_DO_KEYS | covered; harness showed no warning (see gaps) |
| ON_START failed/refused ends startup turn; unmet WHEN skipped | yes | flow-step-executor 14996-15060; test | covered |
| Model tool call delegate_to_X / __delegate__ | yes | reasoning-executor, prompt-builder | covered |
| Supervisor-level DELEGATE | yes | par_sup.abl clean | covered |
| Digression and ON_ACTION DELEGATE | yes | parser E262/E387/E388; validate-cross-agent INVALID_DELEGATE_TARGET | gap: mentioned only as the same action keys; not given separate example |
| Remote DELEGATE | parse/compile only | agent-lookup resolves remote from HANDOFF only; executeDelegate needs ir | covered (limitation) |
| Safety: self, cycle, depth 10, not found | yes | executeDelegate | covered |
| Role router cannot DELEGATE | yes | compiler.ts 1359 | covered |
| Child terminal handoff, child unmapped gather | yes (error) | validate-cross-agent | covered |
| Child asks for input | fails | getUnsupportedDelegateWaitReason | covered |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| --- | --- | --- | --- |
| Runtime behavior verified | executeDelegate read in full; on-start tests | covered | Not executed end to end |
| Required companion resources identified | Refund_Checker defined; tool marked project-local | covered | none |
| Referenced variables have sources | listed in article under the example | covered | none |
| Fallback/failure/ambiguity behavior verified | handleDelegateFailure, flow and ON_START paths | covered | none |
| Customer verification path defined | trace events delegate_start, delegate_complete, delegate_return_mapping, thread_return | covered | none |
| Production readiness checklist included | yes | covered | none |

## Example validation

Harness: scratchpad delegate-docs/run.sh (bundle of validateABL, files validated as one project). Companion Refund_Checker included in every run.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| --- | --- | --- | --- | --- | --- |
| Block 1 Refund_Checker | full-document | parse + compile with Order_Desk | pass | none | kept |
| Block 2 Order_Desk | full-document | parse + compile with Refund_Checker | pass | none | kept |
| Block 3 Order_Advisor | full-document | parse + compile | pass | none | kept |
| Block 4 Start_Desk | full-document | parse + compile | pass | none after SET added (earlier W801 on order_id fixed) | kept |
| Block 5 Map_Desk | full-document | parse + compile | pass | none | kept |
| Block 6 schema RETURNS | section-snippet | wrapped in Schema_Desk full file | pass | none | kept |
| Block 7 ENABLED_WHEN | section-snippet | wrapped in Enabled_Desk full file | pass with W801 on order_id in the harness wrapper only | wrapper lacks order_id source | kept |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --- | --- | --- | --- |
| Grounding in the code | 4 | Removed unverified history claim; stated MAP and HISTORY absent | 5 |
| Depth of conceptual explanation | 4 | Added pieces order, starter table | 5 |
| Readability and usability | 4 | Tables for envelope and failure | 4 |
| Coverage of examples | 4 | Added ON_START, ON_RETURN, schema, reasoning forms | 4 |
| Search and discovery quality | 4 | Error codes in troubleshooting | 4 |
| Completeness of workflow and failure modes | 4 | Starter-specific failure behavior | 4 |
| Customer/partner self-service readiness | 4 | No repo paths | 4 |
| Scenario comprehensiveness | 3 | Added remote, MEMORY_GRANTS, role, safety | 4 |
| Article completeness | 5 | Template sections present | 5 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| --- | --- | --- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | Listed above |
| Searched neighbors (handoff, fan_out, delegate_to_, ON_ACTION)? | pass | Fan-out moved to 4.8 |
| Every authoring style, alias, default, fallback? | fix-needed then pass | `- AGENT:` alias, EXPERIENCE_MODE, and ON_ACTION/digression forms noted as gaps |
| Optional vs required separated? | pass | Only TO is required |
| Reasoning-layer guidance explained? | pass | delegate_to_ tool, WHEN hint |
| Preferred pattern not the only one? | pass | Three starters shown |
| Another code-supported way missed? | pass | Digression/ON_ACTION DELEGATE with RETURN true exist; not detailed |
| Evidence for "not all scenarios"? | pass | Variant map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| --- | --- | --- | --- |
| Senior platform architect | ready | Failure paths per starter, timeout chain, limits | Confirm remote DELEGATE limitation with engineering |
| Senior content writer | ready | Answer first, tables, short sentences | none |
| Product manager/customer enablement | ready | Starter table, checklist, error-code troubleshooting | none |

## Doc bugs and discrepancies for human review

1. Existing reference examples show `USE_RESULT` as prose and `ON_FAIL` for DELEGATE. Code treats USE_RESULT as a variable name and ignores ON_FAIL silently. Repo examples (examples/travel, telco) also use prose.
2. Core type DelegateFailureAction includes `retry`, but validation rejects it.
3. DELEGATE with LOCATION: REMOTE compiles with no warning, but the runtime delegate path cannot run a remote agent.
4. Compile does not warn on a misspelled DELEGATE key (silently ignored).
5. A `DELEGATE` inside an ON_START `DO:` list is documented in code as dropped with a warning. The harness returned no warning for it. Verify with the CLI.

## Known gaps and uncertainty

- No end-to-end runtime run. Behavior is from code reading and unit tests.
- Child thread history isolation is not asserted in the article beyond "no HISTORY key".
- `W320`, `W321`, `E320` and `EXPERIENCE_MODE` not shown in the article.
