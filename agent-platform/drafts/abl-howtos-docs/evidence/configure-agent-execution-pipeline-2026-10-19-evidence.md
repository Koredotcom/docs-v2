# Evidence: configure-agent-execution-pipeline

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/configure-agent-execution-pipeline.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/configure-agent-execution-pipeline-2026-10-19-review.md`
**Topic:** 1.11 - How to configure EXECUTION.pipeline models, modes, thresholds, and fallbacks
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`)

## Source files inspected

The same set as `evidence/use-agent-execution-pipeline-2026-10-19-evidence.md`, plus:

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/pipeline/tool-filter.ts` | Domain-tool filtering, `MIN_FILTERED_TOOLS = 2`, 10 second timeout, size budget, full-set fallbacks. System, handoff, and delegate tools are excluded from the filter. |
| `apps/runtime/src/services/pipeline/model-resolver.ts` | `modelSource` `default` or `tenant`. Tenant failure falls back to the session default unless model access is enforced. |
| `apps/runtime/src/services/pipeline/index.ts` (`extractToolNames`) | Tool names that feed keyword veto exclude `__`, `handoff_to_`, and `delegate_to_` tools. |
| `packages/shared/src/validation/project-runtime-config.ts` | Ranges: thresholds 0 to 1, `maxTools` 1 to 100, keywords up to 500 and 200 characters. `tenantModelId` or `tenantModelRef` required for `modelSource: tenant`. |
| `packages/i18n/locales/en/studio.json` (`section_pipeline`, `field_pipeline_mode_description`, warnings) | Studio wording for mode, latency, circuit breaker, `tool_selection` model. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (13040 to 13330) | Parallel versus sequential execution, tool filter run conditions. |

## Drift analysis (hotfix_Artemis_1.4.4 to hotfix_Artemis_1.8.1)

| Drift item | Impact on article | Action |
| ---------- | ----------------- | ------ |
| Pipeline AST and parser fields unchanged | None | None |
| `connectionId` added to project pipeline model binding | Model section needs connection | Added |
| `tenantModelRef` write-time portable ref (never persisted) | Internal to import and export | Not documented, recorded |
| `RoutingMatch.primitive` and delegate routes | Route text | Mentioned in 1.10 |
| Classifier-unavailable behavior (no routing obligation) | Fallback section | Added |
| Older defect in both versions: article ties direct routing to `programmaticThreshold` | Wrong tuning guidance | Fixed |
| Older defect in both versions: `model` ignored | Example and "How it works" claim | Fixed |
| Older defect in both versions: minimal example has no routes, tools, or categories | Example does nothing | Replaced |
| Older defect in both versions: quoted plain-language `WHEN` cannot route in the pipeline | Full example routes | Rewrote |
| Related link `choose-the-right-pipeline-type` has no article file | Broken link | Removed, reported |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Minimal enablement (`enabled`, `mode`, `shortCircuit`) | yes | `config.ts`, parser | covered, example replaced |
| Full tuning (`toolFilter`, `keywordVeto`, `intentBridge`, `mode: parallel`) | yes | parser, `config.ts` | covered |
| `mode` parallel versus sequential semantics | yes | reasoning-executor 13276 to 13310, Studio text | covered |
| Agent opt-out over project enablement | yes | `config.ts` `agentAllowsPipeline` | covered |
| Field precedence agent, project, defaults | yes | `config.ts` | covered |
| Project defaults and ranges | yes | `DEFAULT_PIPELINE_CONFIG`, `mapPipelineConfig`, zod schema | covered (defaults table) |
| Pipeline model: default or tenant, with connection | yes | `model-resolver.ts`, `RuntimeConfigTab.tsx` | covered |
| ABL `model` field | no, ignored | `config.ts` | covered as a mistake |
| `shortCircuit.confidenceThreshold` | yes | `shouldShortCircuit` | covered |
| `programmaticThreshold` | yes, decline only | `tiered-resolver.ts` | covered |
| `guidedThreshold` | yes | `tiered-resolver.ts` | covered |
| `outOfScopeDecline` needs `LIMITATIONS` | yes | `hasLimitations` | covered |
| `multiIntentSignal` | yes | `tiered-resolver.ts` | covered |
| `keywordVeto` words and tool-name words | yes | `checkKeywordVeto` | covered |
| `toolFilter` behavior and fallbacks | yes | `tool-filter.ts` | covered |
| Circuit breaker | yes | `circuit-breaker.ts` | covered |
| Classifier unavailable event | yes | `classifier-unavailable.ts` | covered |
| Intent bridge disabled | yes | `intentBridge.enabled` gates tiers and intent state | partly covered: mentioned only through the setting table |
| Decision provider tier | gap | `source: 'decision_provider'` | out of scope |
| YAML snake_case aliases | yes | `yaml-parser.ts` | out of scope: the article teaches ABL syntax |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `config.ts`, `tiered-resolver.ts`, `tool-filter.ts`, `reasoning-executor.ts` | covered | none |
| Required companion resources identified | Specialists defined for both examples. `INTENTS` declared. Project enablement and pipeline model stated | covered | none |
| Referenced variables have sources | `intent.category` from classifier over `INTENTS` | covered | none |
| Fallback, failure, ambiguity behavior verified | Fallback section, breaker, unavailable event, tool filter fallbacks | covered | none |
| Customer verification path defined | Boundary utterances and emitted trace events (`pipeline_classify`, `pipeline_filter`, `pipeline_tiered_action`) | covered | none |
| Production readiness checklist included | present | covered | none |

## Example validation

Harness: same as the 1.10 evidence (`validateABL`, `tsx`, scratch `tsconfig`). Each example set is validated as one project.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Order_Router` | full-document (project set with blocks 2 and 3) | parse + compile | pass | none | replaced: old `Pipeline_Minimal_Agent` had no routes, tools, or categories, so the pipeline did nothing |
| Blocks 2 and 3 `Order_Status_Agent`, `Order_Returns_Agent` | full-document | parse + compile | pass | none | new |
| Block 4 `Insurance_Router` | full-document (project set with blocks 5 to 7) | parse + compile | pass | none | fixed: `INTENTS`, `intent.category` routes, `model` removed |
| Blocks 5 to 7 `Claims_Agent`, `Benefits_Agent`, `Escalation_Agent` | full-document | parse + compile | pass | none | kept |

Old article blocks (before edits): 0 errors and 0 warnings. They compile but the old minimal example was not operationally meaningful and the old full example could not route through the pipeline.

A router block alone reports `INVALID_ROUTING_TARGET` and `INVALID_HANDOFF_TARGET`. The targets are in the same project set in the article.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Same set as 1.10, plus tool filter, model resolver, project schema, Studio. Repo tests not run. |
| Did I search synonyms and neighboring constructs? | pass | `modelSource`, `tenantModelId`, `tool_selection`, `maxTools`, `MIN_FILTERED_TOOLS`, breaker. |
| Did I identify every authoring style, alias, default, and fallback? | pass | Defaults table, deprecated `model`, YAML aliases (scoped out), fallbacks. |
| Did I separate optional helpers from required configuration? | pass | Project-only settings versus agent settings. |
| Did I explain how the reasoning layer uses guidance? | pass | Guided hints and hidden tools. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Variations table covers short-circuit off, tool filter only, opt-out, decline. |
| Could a customer build the scenario another way the article misses? | pass | Project-level-only configuration with no agent block works and is stated in the resolution order. |
| If asked "are you not considering all scenarios?", what would I show? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Threshold roles are correct. Tool filter and model fallback rules match code. | None. |
| Senior content writer | ready | Defaults table and checklist scan well. Sections follow the tuning order. | None. |
| Product manager/customer enablement | ready | Fixes the main confusion about `model` and `programmaticThreshold`. Verification uses emitted events. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 2 | Fixed `model`, `programmaticThreshold`, and route claims. Added defaults, tool filter, model rules. | 5 |
| Depth of conceptual explanation | 4 | Added resolution order and per-setting roles. | 5 |
| Readability and usability | 4 | Defaults table and short sections. | 4 |
| Coverage of examples | 2 | Replaced the inert minimal example. Rewrote routes. Validated. | 4 |
| Search and discovery quality | 4 | Added troubleshooting rows with customer phrases. | 5 |
| Completeness of workflow and failure modes | 3 | Added fallbacks, breaker, tool filter fallbacks, model fallback. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Studio terms. | 4 |
| Scenario comprehensiveness | 3 | Added tool-filter-only, decline, project-only settings. | 4 |
| Article completeness | 5 | None needed. | 5 |

**Gate result:** pass. Minimum final score: 4.

## Doc discrepancies for human review

- Related link `choose-the-right-pipeline-type` (topic 25.1) has no article file. Removed from this article. Restore it when that article exists.
- The same `programmaticThreshold` misunderstanding may exist in other articles.
- The Studio Reasoning Pipeline section is labeled experimental. Confirm with the product owner.
- `pipeline_short_circuit`, `pipeline_keyword_veto`, and `pipeline_out_of_scope_decline` events are declared in `pipeline/types.ts` but never emitted.

## Open questions

- Should the article cover Studio steps in detail (screens and labels)? The article names the section and labels only.
- Should the article document `tenantModelRef` for project import and export?
