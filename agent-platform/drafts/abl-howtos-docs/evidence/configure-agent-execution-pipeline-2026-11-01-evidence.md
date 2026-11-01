# Evidence: configure-agent-execution-pipeline

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/configure-agent-execution-pipeline.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/configure-agent-execution-pipeline-2026-11-01-review.md`
**Topic:** 1.11 - How to configure EXECUTION.pipeline models, modes, thresholds, and fallbacks
**Workflow:** Refresh against `release_Artemis_1.9.0` (previous refresh: `hotfix_Artemis_1.8.1`, evidence `evidence/configure-agent-execution-pipeline-2026-10-19-evidence.md`)

## Source files inspected

All files in the 2026-10-19 evidence for 1.10 and 1.11 were re-read at `release_Artemis_1.9.0`. Additional files for this refresh:

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/pipeline/tool-filter.ts` (196 to 215, 400 to 475) | `isPinnedTurnToolName`, `noDomainToolSelected` fallback, `reason` field. |
| `apps/runtime/src/services/pipeline/config.ts`, `types.ts` | `parentReturn` resolution and defaults. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (5635 to 5990) | Return threshold and ambiguity logic. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (12060 to 12090) | Pinned tools kept on every turn. |
| `packages/shared/src/validation/project-runtime-config.ts` (640 to 690) | Project schema with `parentReturn`. Ranges unchanged. |
| `packages/compiler/src/platform/ir/project-runtime-config.ts` (`mapParentReturnConfig`) | Project to IR mapping. |
| `packages/core/src/parser/agent-based-parser.ts` (~11040 to 11115), `abl-schema.json` | ABL parsing of `parentReturn`. |
| `apps/studio/src/components/settings/RuntimeConfigTab.tsx` (5790 to 6030) | Studio labels and `max={50}` on Max Tools. |

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
| Resolution order: project gate, agent opt-out, agent then project then default | unchanged |
| Defaults table (mode parallel, 0.85, maxTools 6, 0.85, 0.5, flags true) | unchanged (`DEFAULT_PIPELINE_CONFIG`) |
| Ranges: thresholds 0 to 1, `maxTools` 1 to 100, 500 keywords of 200 characters | unchanged in the zod schema. Studio input caps `maxTools` at 50 (also in 1.8.1). |
| Pipeline model: Default uses `tool_selection`, workspace model with connection, `model` in ABL ignored, fallback rules | unchanged (`model-resolver.ts`, Studio) |
| Parallel versus sequential semantics | unchanged |
| `programmaticThreshold` only gates decline. `guidedThreshold` floor | unchanged (`tiered-resolver.ts`) |
| Keyword veto word sources | unchanged |
| Tool filter: domain tools only, skip with no domain tools, 10 second timeout, fewer than 2 tools falls back, size budget | unchanged. New: empty or pinned-only selection falls back. |
| Circuit breaker 3 failures, 60 seconds. `pipeline_classifier_unavailable` | unchanged |
| Default handoff history `full` | unchanged (`contract-source-data.ts`) |
| Events `pipeline_classify`, `pipeline_filter`, `pipeline_tiered_action` | unchanged |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Minimal enablement (`enabled`, `mode`, `shortCircuit`) | yes | `config.ts`, parser | covered |
| Full tuning (`toolFilter`, `keywordVeto`, `intentBridge`, `parentReturn`) | yes | parser, `config.ts` | covered, example extended |
| `mode` parallel versus sequential | yes | reasoning-executor, Studio text | covered |
| Agent opt-out | yes | `config.ts` | covered |
| Field precedence agent, project, defaults | yes | `config.ts` | covered |
| Project defaults and ranges | yes | zod schema, `mapPipelineConfig` | covered |
| Pipeline model default or tenant, with connection | yes | `model-resolver.ts`, Studio | covered |
| ABL `model` field | no, ignored | `config.ts` | covered as mistake |
| `shortCircuit.confidenceThreshold` | yes | `shouldShortCircuit` | covered |
| `programmaticThreshold`, `guidedThreshold`, `outOfScopeDecline`, `multiIntentSignal` | yes | `tiered-resolver.ts` | covered |
| Keyword veto words and tool-name words | yes | `checkKeywordVeto` | covered |
| Tool filter behavior and fallbacks, including no-domain-tool fallback | yes | `tool-filter.ts` | covered, updated |
| Circuit breaker and classifier unavailable | yes | `circuit-breaker.ts` | covered |
| Intent bridge disabled | yes | `intentBridge.enabled` | partly covered (defaults table) |
| `parentReturn.minConfidence` at agent and project level | yes (new) | `config.ts`, `flow-step-executor.ts` 5756, schema | covered (new section) |
| `parentReturn.ignoreAmbiguous` | yes (new) | `flow-step-executor.ts` 5870 | covered |
| Studio controls for `parentReturn` | yes (new) | `RuntimeConfigTab.tsx` 5985 to 6025 | covered |
| Decision provider tier | gap | `source: 'decision_provider'` | out of scope |
| YAML snake_case aliases | yes | `yaml-parser.ts`, schema | out of scope: article teaches ABL |
| `tenantModelRef` portable reference | yes | shared schema | out of scope: import and export |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `config.ts`, `tiered-resolver.ts`, `tool-filter.ts`, `flow-step-executor.ts`, `runtime-executor.ts` | covered | none |
| Required companion resources identified | Specialists defined for both examples. `INTENTS` declared. Project enablement and model stated | covered | none |
| Referenced variables have sources | `intent.category` from classifier over `INTENTS` | covered | none |
| Fallback, failure, ambiguity behavior verified | Fallbacks section, breaker, tool filter fallbacks, ambiguity rule | covered | none |
| Customer verification path defined | Boundary utterances plus `pipeline_classify`, `pipeline_filter`, `pipeline_tiered_action`, `digression` | covered | none |
| Production readiness checklist included | present | covered | none |

## Example validation

Harness: `node .../scratchpad/harness/validate.mjs`, run from `/tmp`, files in `.../scratchpad/pipeline-1-10-1-11/`. Each router and its specialists validate as one project.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Order_Router` | full-document (project set with blocks 2 and 3) | `validate.mjs c1 c2 c3` | pass | none | kept |
| Blocks 2 and 3 `Order_Status_Agent`, `Order_Returns_Agent` | full-document | same run | pass | none | kept |
| Block 4 `Insurance_Router` with new `parentReturn` block (`c4n.abl`) | full-document (project set with blocks 5 to 7) | `validate.mjs c4n c5 c6 c7` | pass | none | changed: added `parentReturn` |
| Blocks 5 to 7 `Claims_Agent`, `Benefits_Agent`, `Escalation_Agent` | full-document | same run | pass | none | kept |

The original block 4 (`c4.abl`) also passes. A control file with `minConfidence: 1.5` (`c4bad.abl`) fails with `EXECUTION_PIPELINE_PARENT_RETURN_CONFIDENCE_RANGE`, which proves the parser reads the new block.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Parser, AST, schema, IR, project schema, runtime, Studio. Tests named, not run (`RuntimeConfigTab.parent-return.test.tsx`). |
| Did I search synonyms and neighboring constructs? | pass | `parentReturn`, `ignoreAmbiguous`, `no_domain_tool_selected`, `isPinnedTurnToolName`, `explicitNoTools`, `maxTools`. |
| Did I identify every authoring style, alias, default, fallback? | pass | Defaults table extended. YAML aliases scoped out. |
| Did I separate optional helpers from required configuration? | pass | Project-only and agent settings separated. |
| Did I explain how the reasoning layer uses guidance? | pass | Guided hints and hidden tools. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Variations table. |
| Could a customer build the scenario another way the article misses? | pass | Project-only configuration is stated. |
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Return threshold order, supervisor-side read, and pipeline gate match code. Tool filter fallback matches ABLP-6030. | None. |
| Senior content writer | ready | New section follows the tuning order. Table rows are short. | None. |
| Product manager/customer enablement | ready | Studio labels named. Verification uses the `digression` event. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Added `parentReturn` and tool filter claims with code evidence. | 5 |
| Depth of conceptual explanation | 4 | Added the return threshold concept and resolution order. | 5 |
| Readability and usability | 4 | Short section, table rows. | 4 |
| Coverage of examples | 3 | Extended the full example and validated it. | 4 |
| Search and discovery quality | 4 | Added Studio labels and troubleshooting rows. | 5 |
| Completeness of workflow and failure modes | 4 | Added the no-domain-tool fallback and return failure rows. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. | 4 |
| Scenario comprehensiveness | 3 | Added `parentReturn` variants. | 4 |
| Article completeness | 5 | None needed. | 5 |

**Gate result:** pass. Minimum final score: 4.

## Doc discrepancies for human review

- Studio **Max Tools** caps at 50. The project schema allows 100. Confirm the intended maximum with engineering.
- Studio describes the default return threshold as `0.5`. The runtime has a `0.7` fallback that applies only when the compiled IR has no `min_confidence`. Confirm no path reaches it.
- Studio labels the Reasoning Pipeline section experimental. Confirm the wording for 1.9.0.
- Related link `choose-the-right-pipeline-type` (topic 25.1) still has no article file. The article does not link to it.
- Events `pipeline_short_circuit`, `pipeline_keyword_veto`, and `pipeline_out_of_scope_decline` are declared and not emitted.

## Open questions

- Should the article cover Studio steps in detail? It names the section and labels only.
- Should `tenantModelRef` for project import and export be documented?
- Should `parentReturn` get its own article, or stay in this one?
