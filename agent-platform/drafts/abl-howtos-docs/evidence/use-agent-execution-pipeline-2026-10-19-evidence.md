# Evidence: use-agent-execution-pipeline

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-agent-execution-pipeline.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/use-agent-execution-pipeline-2026-10-19-review.md`
**Topic:** 1.10 - How to use EXECUTION.pipeline for agent routing, classification, and short-circuiting
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`)

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/types/agent-based.ts` (`ExecutionPipelineConfigAST`) | AST fields: `enabled`, `mode`, `model`, `shortCircuit`, `toolFilter`, `keywordVeto`, `intentBridge`. No `modelSource`. |
| `packages/core/src/parser/agent-based-parser.ts` (~10187) | Parses the `pipeline` block. Reads only `model` for model selection. Unknown keys are dropped. |
| `packages/core/src/parser/yaml-parser.ts` (`parseExecutionPipeline`) | YAML form accepts snake_case aliases. Same fields. |
| `packages/compiler/src/platform/ir/compiler.ts:1407` | Copies `doc.execution.pipeline` to IR unchanged. |
| `packages/compiler/src/platform/ir/schema.ts` (1663, 984) | IR agent pipeline has `model` marked `@deprecated`, plus `modelSource`, `tenantModelId`. |
| `packages/compiler/src/platform/ir/validate-preflight.ts` | `hasNativeIntentBridge` counts an enabled pipeline intent bridge as an executable route producer. |
| `packages/compiler/src/platform/ir/project-runtime-config.ts` (`mapPipelineConfig`) | Project defaults: `mode` parallel, shortCircuit on 0.85, toolFilter on 6, keywordVeto on, intentBridge on. |
| `packages/shared/src/validation/project-runtime-config.ts` (`pipelineConfigSchema`) | Project ranges and model fields. |
| `apps/runtime/src/services/pipeline/config.ts` | Resolution order. Project `enabled` is the master gate. Agent `enabled: false` is a veto. |
| `apps/runtime/src/services/pipeline/types.ts` | Defaults, tiered actions, trace event types. |
| `apps/runtime/src/services/pipeline/classifier.ts` (`shouldShortCircuit`, `checkKeywordVeto`) | Short-circuit rules and veto word sources. |
| `apps/runtime/src/services/pipeline/tiered-resolver.ts` | Tier rules. `programmaticThreshold` only gates decline. Decline needs `LIMITATIONS`. Escalation targets never hidden. |
| `apps/runtime/src/services/pipeline/routing-resolver.ts` | Resolves routes by evaluating `WHEN` against `intent.category`. |
| `apps/runtime/src/services/pipeline/runtime-contract.ts` | `shouldRunPipelineClassifier`: no categories means no classifier. Four-message context window. |
| `apps/runtime/src/services/pipeline/circuit-breaker.ts` | 3 failures, 60 second bypass, per tenant. |
| `apps/runtime/src/services/pipeline/intent-bridge.ts` | `resolveHighConfidenceMultiIntentMode`. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (11168 to 13400) | Orchestration, multi-intent plan, decline skip after handoff, event emission. |
| `apps/runtime/src/services/execution/supervisor-route-catalog.ts` | Category source: explicit `INTENTS`, else categories derived from `intent.category` conditions. |
| `apps/studio/src/components/settings/RuntimeConfigTab.tsx`, `packages/i18n/locales/en/studio.json` | Studio location and labels: Runtime Config, Reasoning Pipeline, Enable Pipeline, Pipeline Model. Marked experimental. |
| `packages/compiler/src/platform/constructs/dual-evaluator.ts` | Harness check of `WHEN` evaluation. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'` (unchanged). |

Tests were not run. The repo has no linked `node_modules`, so the repo test suite does not run.

## Drift analysis (hotfix_Artemis_1.4.4 to hotfix_Artemis_1.8.1)

`git diff --stat` shows large changes: `agent-based-parser.ts` (about 7,300 lines), `agent-based.ts` types (about 500), `project-runtime-config.ts` in the compiler and shared packages, and the pipeline runtime files (22 files).

| Drift item | Impact on article | Action |
| ---------- | ----------------- | ------ |
| Pipeline AST fields unchanged | None | None |
| Project-level `connectionId` and tenant model pairing added | Model is a project setting with a connection | Added model note |
| `config.ts` doc: first-turn supervisor MULTI_INTENT fallback classifies without enabling the full pipeline | Edge case outside this article | Recorded as gap |
| Decision provider tier (`source: 'decision_provider'`) can skip the confidence threshold | Internal tier behind Decision Models gate | Out of scope, recorded |
| `RoutingMatch.primitive` (handoff, delegate) added. Short-circuit can execute a `DELEGATE` route | Article said "route" only | Text covers handoff or delegate |
| Intent-bridge multi-intent plans (parallel, sequential) | Old text said multiple intents never act | Corrected |
| `pipeline_classifier_unavailable` event and no routing obligation on classifier failure | Failure behavior was missing | Added |
| Older defect, present in both versions: `model` is ignored | Example set `model: "gpt-4.1-mini"` | Removed, explained |
| Older defect, present in both versions: quoted plain-language `WHEN` cannot route in the pipeline | Example routes could not work | Rewrote examples |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Single-intent short-circuit to a `HANDOFF` target | yes | `shouldShortCircuit`, reasoning-executor handoff path | covered |
| Short-circuit to a `DELEGATE` target | yes | `isPipelineDelegateRoute`, `handleDelegate` path | covered (route text) |
| Keyword veto with configured keywords | yes | `checkKeywordVeto` | covered |
| Keyword veto from tool name parts | yes | `checkKeywordVeto` tool loop | covered |
| Intent bridge: out-of-scope decline | yes | `tiered-resolver.ts`, needs `LIMITATIONS`, skipped after handoff | covered |
| Intent bridge: guided hints, hidden handoff tools, escalation kept | yes | `resolveHiddenTools`, `isEscalationTarget` | covered |
| Intent bridge: autonomous fallback | yes | `tiered-resolver.ts` | covered |
| Multi-intent signal and multi-intent plan | yes | tiered-resolver, `resolveHighConfidenceMultiIntentMode`, reasoning-executor 12706 | covered |
| Disable short-circuit but keep classifier | yes | `shortCircuit.enabled` check | covered |
| Agent opt-out `enabled: false` | yes | `config.ts` | covered (requirements) |
| Project master gate | yes | `config.ts`, Studio | covered |
| Model selection in ABL | no, ignored | `config.ts`, `model-resolver.ts` | covered as a mistake |
| Categories from explicit `INTENTS` | yes | `supervisor-route-catalog.ts` | covered |
| Categories derived from `intent.category` conditions without `INTENTS` | yes | `deriveIntentCategoriesFromRoutingRules` | partly covered: article uses explicit `INTENTS` |
| Plain-language quoted `WHEN` as a pipeline route | no | harness: quoted sentence evaluates true, so it cannot select a target | covered as a mistake |
| Classifier failure, circuit breaker | yes | `classifier-unavailable.ts`, `circuit-breaker.ts` | covered |
| Decision provider routing tier | gap | `source: 'decision_provider'`, behind Decision Models | out of scope: separate feature |
| First-turn MULTI_INTENT supervisor classifier without full pipeline | yes | `supervisorOnlyClassifierFallbackEligible` | out of scope: documented in multi-intent article |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | reasoning-executor, classifier, tiered-resolver, config | covered | none |
| Required companion resources identified | `Billing_Agent`, `Technical_Support_Agent`, `General_Fallback_Agent` defined. `LIMITATIONS` and `INTENTS` added | covered | project enablement and model are stated as project assumptions |
| Referenced variables have sources | `intent.category` comes from the classifier over `INTENTS` | covered | none |
| Fallback, failure, ambiguity behavior verified | `general` category, autonomous fallback, circuit breaker, unavailable event | covered | none |
| Customer verification path defined | Utterances and trace events that exist in code | covered | `pipeline_short_circuit`, `pipeline_keyword_veto`, `pipeline_out_of_scope_decline` are declared but never emitted. Article uses events that are emitted. |
| Production readiness checklist included | present | covered | none |

## Example validation

Harness: `validateABL` from `packages/compiler/src/platform/ir/validate-ir.ts`, run with `tsx` against the source files of `hotfix_Artemis_1.8.1`. A scratch `tsconfig` in the session scratchpad maps the workspace packages to their sources and the external packages to `node_modules/.pnpm`. The repo was not modified. All four documents were validated as one project because the supervisor needs its targets to exist.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Support_Router` | full-document (project set with blocks 2 to 4) | parse + compile (`validateABL`) | pass | none | fixed: `INTENTS` and `intent.category` routes, `LIMITATIONS` added, `model` removed |
| Block 2 `Billing_Agent` | full-document | parse + compile | pass | none | kept |
| Block 3 `Technical_Support_Agent` | full-document | parse + compile | pass | none | kept |
| Block 4 `General_Fallback_Agent` | full-document | parse + compile | pass | none | kept |

Block 1 alone reports `INVALID_ROUTING_TARGET` and `INVALID_HANDOFF_TARGET` because the targets are absent. The article states that the targets are separate documents in the same project.

Old article blocks (before edits): the same harness reports 0 errors and 0 warnings. The old blocks compile but are not operationally meaningful. The compiled IR for the old block keeps `model: "gpt-4.1-mini"` and has no `LIMITATIONS`. The IR for the new block shows `source: "explicit"` categories (`billing`, `technical_support`, `general`), 3 routing rules with `intent.category` conditions, and the limitation text.

Harness check of `WHEN` evaluation (`evaluateConditionDual`, context `intent.category = "billing"`): a quoted sentence returns `true`. `intent.category == "billing"` returns `true`. `intent.category == "technical"` returns `false`. The runtime wrapper `nullSafeEvaluateCondition` was read, not run.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Parser, YAML parser, AST, IR schema, compiler, preflight, runtime pipeline, executor, Studio. Repo tests not run (no linked `node_modules`). |
| Did I search synonyms and neighboring constructs? | pass | `HANDOFF`, `DELEGATE`, `INTENTS`, `LIMITATIONS`, `MULTI_INTENT`, circuit breaker, decision provider, native intent bridge. |
| Did I identify every authoring style, shorthand, legacy alias, default, and fallback? | pass | YAML snake_case aliases, deprecated `model`, defaults, fallbacks. |
| Did I separate optional helpers from required configuration? | pass | Requirements section. |
| Did I explain how the reasoning layer uses guidance? | pass | Guided tier hints and hidden tools. |
| Did I avoid making a preferred pattern sound like the only pattern? | fix-needed, fixed | Added the `intent.category` without `INTENTS` option in evidence and kept explicit `INTENTS` as the shown pattern. Article now says conditions must use `intent.category`. |
| Could a customer build the scenario another way the article misses? | pass | Delegate route, shortCircuit off, native intent bridge without the pipeline are listed or scoped out. |
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Examples route through the real mechanism. Thresholds attributed to the right setting. Failure paths and breaker covered. | None. Open question recorded for the decision provider tier. |
| Senior content writer | ready | Goal first. Tables for parts, tiers, mistakes. Examples sit next to their explanation. | None. |
| Product manager/customer enablement | ready | Requirements section answers "why does nothing happen". Verification uses real trace events. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Fixed `model`, threshold, route, decline claims. Added code-backed rules. | 5 |
| Depth of conceptual explanation | 4 | Added parts table, requirements, resolution flow. | 5 |
| Readability and usability | 4 | Short sections and tables. | 4 |
| Coverage of examples | 2 | Rewrote examples to a working mechanism. Validated. | 4 |
| Search and discovery quality | 4 | Added troubleshooting phrases and the Studio labels. | 5 |
| Completeness of workflow and failure modes | 3 | Added failure behavior, breaker, unavailable event, decline preconditions. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Project steps named in Studio terms. | 4 |
| Scenario comprehensiveness | 3 | Added delegate, multi-intent plan, short-circuit off. | 4 |
| Article completeness | 5 | None needed. | 5 |

**Gate result:** pass. Minimum final score: 4.

## Doc discrepancies for human review

- `pipeline_short_circuit`, `pipeline_keyword_veto`, `pipeline_multi_intent`, `pipeline_multi_intent_short_circuit`, and `pipeline_out_of_scope_decline` appear in `pipeline/types.ts` but no code emits them. Confirm with engineering whether tracing for these is planned.
- The Studio text calls the pipeline experimental. The article mentions this. Confirm that wording is still right for customers.
- The article `design-supervisor-routing-agent` and `route-by-user-intent` use quoted plain-language fallback `WHEN` entries. In the pipeline these evaluate as true for any categorized intent. Review those articles for the same issue.
- Other published articles may show `model:` in `EXECUTION.pipeline`.

## Open questions

- Does the Decision Models routing provider tier need its own HowTo section? It can skip the confidence threshold.
- Should the first-turn `MULTI_INTENT` classifier fallback be described here? It runs when the project pipeline is off.
