# Evidence: use-agent-execution-pipeline

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-agent-execution-pipeline.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/use-agent-execution-pipeline-2026-11-01-review.md`
**Topic:** 1.10 - How to use EXECUTION.pipeline for agent routing, classification, and short-circuiting
**Workflow:** Refresh against `release_Artemis_1.9.0` (previous refresh: `hotfix_Artemis_1.8.1`, evidence `evidence/use-agent-execution-pipeline-2026-10-19-evidence.md`)

## Source files inspected

All files listed in the 2026-10-19 evidence were re-read at `release_Artemis_1.9.0`. Additional files for this refresh:

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/pipeline/config.ts` (`resolveParentReturnConfig`) | `parentReturn` resolution: agent, project, default. |
| `apps/runtime/src/services/pipeline/types.ts` (`ParentReturnConfig`) | `ignoreAmbiguous` default false. `minConfidence` unset by default. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (5635 to 5990, 6137 to 6330) | Parent route precheck, threshold, ambiguity rule, pipeline gate. |
| `apps/runtime/src/services/runtime-executor.ts` (16590 to 16700) | Reroute before the child turn, `digression` trace event. |
| `apps/runtime/src/services/pipeline/parent-route-classification-carrier.ts` | One classifier call per turn. |
| `packages/core/src/parser/agent-based-parser.ts` (~11040 to 11115), `packages/core/src/schema/abl-schema.json` | Parser and schema for `parentReturn`. |
| `apps/studio/src/components/settings/RuntimeConfigTab.tsx` (5790 to 6030) | Studio labels. |
| `apps/runtime/src/services/pipeline/routing-resolver.ts` (27 to 46) | Lexical fallback policy default `when_unavailable`. |

Tests were not run. The repo has no linked `node_modules`.

## Drift analysis (hotfix_Artemis_1.8.1 to release_Artemis_1.9.0)

Commands: `git diff --stat` and `git log hotfix_Artemis_1.8.1..HEAD` on `apps/runtime/src/services/pipeline`, `packages/core/src/types/agent-based.ts`, `packages/core/src/parser/agent-based-parser.ts`, `packages/compiler/src/platform/ir/project-runtime-config.ts`, `packages/shared/src/validation/project-runtime-config.ts`, `apps/studio/src/components/settings/RuntimeConfigTab.tsx`, and `apps/runtime/src/services/execution/supervisor-route-catalog.ts`. Unchanged since 1.8.1: `tiered-resolver.ts`, `routing-resolver.ts`, `circuit-breaker.ts`, `classifier-unavailable.ts`, `pipeline/index.ts`, `shouldShortCircuit`, `checkKeywordVeto`, `MAX_CLASSIFIER_CONTEXT_MESSAGES = 4`, defaults in `DEFAULT_PIPELINE_CONFIG`.

| Drift item | Evidence | Impact on article | Action |
| ---------- | -------- | ----------------- | ------ |
| New `EXECUTION.pipeline.parentReturn` block with `minConfidence` (0 to 1) and `ignoreAmbiguous` | `agent-based.ts` `ExecutionPipelineParentReturnAST`, `agent-based-parser.ts` ~11061, `yaml-parser.ts` 2291, `abl-schema.json` 695 and 895, diagnostic `EXECUTION_PIPELINE_PARENT_RETURN_CONFIDENCE_RANGE` | New agent-level setting | Documented in both articles |
| Project `pipeline.parentReturn` (null clears a stored value) | `project-runtime-config.ts` (shared) 678, compiler `mapParentReturnConfig`, DB model, route `project-runtime-config.ts` 684 | New project-level setting | Documented |
| Parent return resolution: supervisor block, then project, then supervisor intent `min_confidence` (compiled default 0.5) | `pipeline/config.ts` `resolveParentReturnConfig`, `flow-step-executor.ts` 5756 to 5773, `compiler/constants.ts` `DEFAULT_MIN_CONFIDENCE = 0.5` | Return threshold is now tunable | Documented. Source labels `agent`, `project`, `supervisor_intents` appear in trace. |
| `ignoreAmbiguous` keeps the specialist when the classifier relationship is `ambiguous`, with no lexical rescue | `flow-step-executor.ts` 5870 to 5885 | New behavior | Documented |
| Parent return runs only when the pipeline is enabled for the supervisor and the circuit is closed | `detectParentSupervisorRoute` 6137 and the `pipelineConfig.enabled` gate | Precondition | Documented |
| Below-threshold reply stays with the specialist under the default lexical policy `when_unavailable` | `routing-resolver.ts` 27 to 46, `flow-step-executor.ts` 5906 to 5925 | Edge detail | Documented as "unless the lexical fallback policy allows a keyword match" |
| Trace: `digression` event with `action: return_to_parent`, `classifierConfidence`, `classifierThreshold`, `classifierThresholdSource` | `runtime-executor.ts` 16640, `toGatherInterruptTrace` | New verification path | Added to verification and troubleshooting |
| Studio labels: Custom Return Threshold, Return Threshold, Keep Ambiguous Replies With Specialist | `RuntimeConfigTab.tsx` 5985 to 6025 | New UI | Documented in 1.11 |
| Tool filter: an empty selection or a selection of only pinned tools now keeps the full domain tool set (ABLP-6030). Trace `pipeline_filter` gains `reason: no_domain_tool_selected` | `tool-filter.ts` 196 to 215, 410 to 470, `types.ts` 205 | Changes fallback list | Documented in 1.11. `explicitNoTools` is now observability only. |
| Classifier request fingerprint and per-turn reuse of the parent-route answer (ABLP-6548) | `parent-route-classification-carrier.ts` | Internal. One classifier call per turn. | Not documented. |
| `preserveRequestOrder` for governed multi-intent plans (`canPreserveDetectedRequestOrder`) | `intent-bridge.ts`, `classifier.ts` prompt | Applies to governed plans only | Out of scope, recorded |
| Sequential multi-intent notices (`multi_intent_sequential_start`, `_transition`) (ABLP-6512) | `merge.ts` | Belongs to the multi-intent article | Out of scope, recorded |
| Decision model "stay" reason (`decision_model_stay`) skips the child classifier (ABLP-6036) | `runtime-contract.ts`, `classifier-stay.ts` | Behind Decision Models | Out of scope, still a gap |
| First-turn supervisor MULTI_INTENT classifier fallback widened (`legacyAuthoredMultiIntentFallback`) | `reasoning-executor.ts` ~11740 | Runs when the project pipeline is off | Out of scope, recorded |
| `serviceTier` passed to pipeline model generation (ABLP-6639) | `model-resolver.ts` 479 | Model parameter detail | Not documented |
| Condition evaluation reads held secrets only when the expression names them (ABLP-4499) | `null-safe-eval.ts` | No routing syntax change | None |
| Classifier prompt, zod schema, owner-reply and gather-reply classifiers changed | `classifier.ts` (556 lines), `owner-reply-classifier.ts`, `gather-reply-classifier.ts` | Other classifier lanes. The global routing classifier keeps its categories, confidence, and relationship output. | None |
| Refactor of route catalog into `resolveExplicitSupervisorRouteCatalog` | `supervisor-route-catalog.ts` | No behavior change for authored `INTENTS` | None |
| Project `connectionId` and tenant model fields, `modelSource` | `project-runtime-config.ts` (shared) | Unchanged | None |
| Studio `Max Tools` input has `max={50}` while the project schema allows 100 | `RuntimeConfigTab.tsx` 5890 and 1.8.1 line 5075 | Present in both versions | Noted in 1.11 and reported for review |

## Re-verification of existing article claims

| Claim | Result at 1.9.0 |
| ----- | --------------- |
| Project gate, agent opt-out, tool model default | unchanged (`config.ts`) |
| Classifier sees current message and last 4 messages, PII redacted | unchanged (`MAX_CLASSIFIER_CONTEXT_MESSAGES = 4`) |
| Short-circuit conditions and default 0.85 | unchanged (`shouldShortCircuit`) |
| Veto: whole word, case-insensitive, tool name parts of 3 or more characters, handoff and delegate tools excluded | unchanged |
| Tier table, escalation targets never hidden, decline needs `LIMITATIONS`, skipped after handoff | unchanged (`tiered-resolver.ts`) |
| `model` field ignored, quoted `WHEN` cannot route | unchanged |
| Events `pipeline_classify`, `pipeline_tiered_action`, `pipeline_routing_resolve`, `pipeline_classifier_unavailable` exist | unchanged. `pipeline_short_circuit`, `pipeline_keyword_veto`, `pipeline_out_of_scope_decline` still unused as trace events. A `pipeline_intent_bridge` event with `source: pipeline_short_circuit` is now emitted. |
| Circuit breaker 3 failures, 60 seconds | unchanged |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Single-intent short-circuit to a `HANDOFF` target | yes | `shouldShortCircuit`, reasoning-executor | covered |
| Short-circuit to a `DELEGATE` target | yes | `isPipelineDelegateRoute` | covered |
| Keyword veto from configured keywords and tool name parts | yes | `checkKeywordVeto` | covered |
| Intent bridge: out-of-scope decline, guided, autonomous | yes | `tiered-resolver.ts` | covered |
| Multi-intent signal and plan | yes | `intent-bridge.ts`, reasoning-executor | covered |
| Disable short-circuit, keep classifier | yes | `shortCircuit.enabled` | covered |
| Agent opt-out and project master gate | yes | `config.ts` | covered |
| Model selection in ABL | no, ignored | `config.ts` | covered as mistake |
| Categories from `INTENTS` | yes | `supervisor-route-catalog.ts` | covered |
| Categories derived from `intent.category` conditions | yes | `deriveIntentCategoriesFromRoutingRules` | partly covered (article shows `INTENTS`) |
| Plain-language quoted `WHEN` cannot route | no | `nullSafeEvaluateCondition` | covered as mistake |
| Classifier failure and circuit breaker | yes | `circuit-breaker.ts`, `classifier-unavailable.ts` | covered |
| Return from active specialist to supervisor by classifier (`parentReturn`) | yes (new) | `flow-step-executor.ts` 5756, `runtime-executor.ts` 16622 | covered (new section) |
| Decision provider tier | gap | `source: 'decision_provider'` | out of scope: separate feature |
| First-turn MULTI_INTENT classifier fallback | yes | `supervisorOnlyClassifierFallbackEligible` | out of scope: multi-intent article |
| Governed multi-intent request order | yes | `preserveRequestOrder` | out of scope: governed plans |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `flow-step-executor.ts`, `runtime-executor.ts`, `config.ts`, existing pipeline files | covered | none |
| Required companion resources identified | Three specialists defined. `INTENTS` and `LIMITATIONS` present. Project enablement and model stated | covered | none |
| Referenced variables have sources | `intent.category` from classifier over `INTENTS` | covered | none |
| Fallback, failure, ambiguity behavior verified | `general` category, autonomous tier, breaker, unavailable event, ambiguous reply rule | covered | none |
| Customer verification path defined | Utterances plus `pipeline_classify`, `pipeline_tiered_action`, `pipeline_routing_resolve`, `digression` | covered | none |
| Production readiness checklist included | present | covered | none |

## Example validation

Harness: `node .../scratchpad/harness/validate.mjs`, run from `/tmp`, files in `.../scratchpad/pipeline-1-10-1-11/`. The four article blocks validate as one project.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Support_Router` | full-document (project set with blocks 2 to 4) | `validate.mjs u1 u2 u3 u4` | pass | none | kept |
| Block 2 `Billing_Agent` | full-document | same run | pass | none | kept |
| Block 3 `Technical_Support_Agent` | full-document | same run | pass | none | kept |
| Block 4 `General_Fallback_Agent` | full-document | same run | pass | none | kept |

The proposed update adds no new `abl` block. The `parentReturn` syntax is validated in the 1.11 evidence (`c4n.abl`). An out-of-range `minConfidence: 1.5` returns `EXECUTION_PIPELINE_PARENT_RETURN_CONFIDENCE_RANGE`, which confirms that the parser reads the block.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Parser, AST, schema, IR, project config, runtime pipeline, executors, Studio. Tests listed by name only, not run (`RuntimeConfigTab.parent-return.test.tsx`, `classifier-llm-call-trace.ablp-6763.test.ts`). |
| Did I search synonyms and neighboring constructs? | pass | `parentReturn`, `ignoreAmbiguous`, `return_to_parent`, `digression`, `classifier_ambiguous`, `intent.category`, `INTENTS`. |
| Did I identify every authoring style, alias, default, fallback? | pass | ABL camelCase, YAML snake_case aliases (out of scope), defaults, fallbacks. |
| Did I separate optional helpers from required configuration? | pass | Requirements section. |
| Did I explain how the reasoning layer uses guidance? | pass | Guided tier. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Delegate routes, short-circuit off, `parentReturn` covered. |
| Could a customer build the scenario another way the article misses? | pass | Native intent bridge and decision provider listed as out of scope. |
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | New return path matches code, including pipeline gate and ambiguity rule. | None. |
| Senior content writer | ready | New section is short with one table. Placed after related sections. | None. |
| Product manager/customer enablement | ready | Verification and troubleshooting cover "caller stays with specialist". | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Added `parentReturn` claims with code evidence. Re-verified all existing claims. | 5 |
| Depth of conceptual explanation | 4 | Added the specialist return path. | 5 |
| Readability and usability | 4 | One short section and one table. | 4 |
| Coverage of examples | 4 | No new block needed. Existing blocks pass. `parentReturn` example lives in 1.11. | 4 |
| Search and discovery quality | 4 | Added troubleshooting phrase and trace event names. | 5 |
| Completeness of workflow and failure modes | 4 | Added specialist return failure rows. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. | 4 |
| Scenario comprehensiveness | 3 | Added `parentReturn` variant. | 4 |
| Article completeness | 5 | None needed. | 5 |

**Gate result:** pass. Minimum final score: 4.

## Doc discrepancies for human review

- Studio calls the pipeline experimental. Confirm the wording is still right for 1.9.0.
- Events `pipeline_short_circuit`, `pipeline_keyword_veto`, `pipeline_multi_intent`, `pipeline_multi_intent_short_circuit`, and `pipeline_out_of_scope_decline` are declared in `pipeline/types.ts` and still not emitted as trace events.
- Studio describes the default return threshold as `0.5`. The runtime falls back to `0.7` only when the compiled IR carries no `min_confidence` (`DEFAULT_PARENT_SUPERVISOR_ROUTE_CONFIDENCE`). The compiler always sets 0.5, so 0.5 applies in practice.
- Other published articles may use quoted plain-language `WHEN` routes or `model:` in `EXECUTION.pipeline`.

## Open questions

- Should the Decision Models routing provider tier get its own section? It can skip the confidence threshold.
- Should the lexical fallback policy that can override a below-threshold return be explained here?
