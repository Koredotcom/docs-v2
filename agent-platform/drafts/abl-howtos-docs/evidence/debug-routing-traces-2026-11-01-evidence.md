# Evidence: debug-routing-traces

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/debug-routing-traces.md`
**Published copy:** `agent-platform/abl/how-to/debug-routing-traces.mdx`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/debug-routing-traces-2026-11-01-review.md`
**Topic:** 3.9 - How to debug routing decisions with traces and metadata
**Workflow:** Refresh against `release_Artemis_1.9.0`. Previous evidence: `evidence/debug-routing-traces-2026-10-20-evidence.md` (against `hotfix_Artemis_1.8.1`).
**Verdict:** update-needed

## Validation harness

`validate.mjs` from the scratchpad harness, run from `/tmp`. Scratch files are in `.../scratchpad/debug-routing-traces/`. The tool needs one agent per file, so `block1.abl` is split into `b1_1.abl` to `b1_4.abl` and validated as one project. No change to the code repo. The repo stays on `release_Artemis_1.9.0`. Runtime services were not started. Runtime behavior is close-read from source.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/handoff-completion-record.ts` | `handoff_completed` fields, outcome enum, cause mapping, `durationMs` and `siblingIntentMs` |
| `apps/runtime/src/services/execution/routing-executor.ts` (`handleHandoff` 10040-10190, model-selected check 10800-10850, `handoff` event 12140, authored-order check 26270-26360, `seedPassedGatherValues` 1596-1730, `route_condition_unresolved` 9266) | Emission sites and fields |
| `apps/runtime/src/services/runtime-executor.ts` (16540-16650) | `digression` with `action: return_to_parent` |
| `apps/runtime/src/services/pipeline/types.ts`, `config.ts`, `flow-step-executor.ts` (5664-5880) | `parentReturn` (`minConfidence`, `ignoreAmbiguous`) |
| `apps/runtime/src/services/pipeline/tool-filter.ts` (458-470) | `pipeline_filter` with `reason: no_domain_tool_selected`. Tool selection, not routing. Not added |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` and `packages/core/src/parser/condition-quotes.ts` | `//` comment masking in `WHEN`, comment-only gives `missing_data` |
| `apps/runtime/src/services/execution/trace-helpers.ts` | `EVENT_VERBOSITY` (no entry for `handoff_completed`, default 1), new decision kinds |
| `apps/runtime/src/services/runtime-executor.ts` (9044) | `traceVerbosity` is `verbose` for `debug_websocket`, else `standard`. Only writer |
| `packages/shared-kernel/src/constants/trace-event-registry.ts` | Registered events, including `handoff_completed`, `digression`, `handoff_context_seed` |
| `apps/studio/src/components/observatory/interactions/handoff-completion.ts`, `format-utils.ts` | Studio reads `handoff_completed` for hop timing |
| `apps/runtime/src/services/execution/multi-intent/*.ts` | Multi-intent `decision` types still emitted |
| `apps/runtime/src/services/metadata/custom-dimensions.ts`, `packages/shared-kernel/src/validation/custom-dimensions.ts` | Dimension rules unchanged. PII default `protect` |
| `routing-surface-trace.ts`, `routing-availability-trace.ts`, `deterministic-handoff.ts` | Unchanged in substance from 1.8.1 |

## Drift analysis (1.8.1 to 1.9.0)

The branches diverge (merge base `15eeb40ef77`). Every claim below was re-read in 1.9.0.

| Item | Finding in 1.9.0 | Impact |
| ---- | ---------------- | ------ |
| `handoff_completed` | New. Not in `hotfix_Artemis_1.8.1` source. One record per `handleHandoff` attempt. `outcome` is `success`, `rejected`, `blocked`, `error`, `timeout`. Fields: `handoffId`, `sourceAgent`, `targetAgent`, `startedAt`, `durationMs`, optional `siblingIntentMs`, `parentHandoffId`, `decisionId`, `cause`, `code`, `detail`. Never carries the message or context | New section, need-row, troubleshooting row, verification step |
| `digression` | Exists in both versions. Fires on return to parent with `action: return_to_parent`, `intent`, `matched`, `target`, `rerouteError` when blocked | New need-row and variation. Article did not cover it |
| `handoff_context_seed` | Exists in both. `seededFields`, `remainingWaitingFields`, `gatheredFieldCount`, `reasonCode`. A repeat identical pass is skipped below `verbose` | New need-row and troubleshooting row |
| `pipeline_filter` `reason: no_domain_tool_selected` | New in 1.9.0. Tool selection, not routing | Not added. Out of scope |
| Declared but never emitted `pipeline_*` events | `pipeline_out_of_scope_decline` is typed in `pipeline/types.ts` and has no emitter. `pipeline_intent_bridge` is emitted (routing-executor 4430, 4538, 4670). The article names only `pipeline_intent_bridge` | No article change |
| `//` comments in `WHEN` | New. `maskConditionLineComments` strips comments outside quoted literals before evaluation. The trace `condition` keeps the authored text. A comment-only `WHEN` returns `missing_data`. A multiword plain-language span is not truncated | New note and common-mistake row |
| New decision kinds `handoff_context_keys_dropped`, `handoff_context_pii_suspected` | Emitted by `agent-transfer/handoff-context-assembly.ts`. Human agent transfer, not supervisor routing | Not added |
| `whenOutcome` values | Same four kinds | None |
| Verbosity | Same. Runtime sets the level. `handoff_completed` has no entry, so it defaults to `standard` | Stated in new section |
| `_meta` dimension rules | Same limits. `session-assignment-executor.ts` changes concern config namespace and GATHER write rejection | None |
| 1.8.x hotfix-only behavior in the published article | None found. Every event and rule in the article exists in 1.9.0 | None |
| Published `.mdx` | Body matches the `articles/` draft. Differences: frontmatter, back badge, `yaml expandable=true` fence, no Related HowTos list | Noted. No action |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Model-selected route check | yes | `routing-executor.ts` 10800-10850 | covered |
| Authored-order check | yes | 26270-26360 | covered |
| Pre-model deterministic routing | yes | `deterministic-handoff.ts` | covered |
| Plain-language `WHEN` outcome | yes | `routing-primitive-executor.ts` | covered |
| Unset variable, `route_condition_unresolved` | yes | 9266 | covered |
| Flow-return suppression | yes | 26344 | covered |
| Blocked route | yes | 10847 | covered |
| `ENABLED_WHEN` events | yes | trace files | covered |
| Return events | yes | 7033, 7593 | covered |
| Router clarification | yes | `reasoning-executor.ts` | covered |
| Multi-intent `decision` events | yes | `multi-intent/*.ts` | covered (list is not exhaustive, table says "Read the type field") |
| `_meta.*` dimensions | yes | `custom-dimensions.ts` | covered |
| Admission failures | yes | 10137 | covered |
| Handoff terminal record `handoff_completed` | yes | `handoff-completion-record.ts` | covered (new) |
| Return to parent `digression` | yes | `runtime-executor.ts` 16638 | covered (new) |
| Seeded pass fields `handoff_context_seed` | yes | 1713 | covered (new) |
| `//` comment in `WHEN` | yes | `condition-quotes.ts` | covered (new) |
| Studio trace viewer UI | yes | `apps/studio` | out of scope: product UI |
| `pipeline_filter` tool selection | yes | `tool-filter.ts` | out of scope: tool filtering is not routing |
| Delegate guard traces | yes | routing-executor | out of scope: delegate HowTo |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Emission sites read in 1.9.0 | covered | Not run live |
| Required companion resources identified | Example defines the supervisor and three agents | covered | None |
| Referenced variables have sources | `intent.category` from `INTENTS:`. `session.channel` in `ON_START` | covered | None |
| Fallback/failure/ambiguity behavior verified | `handoff_completed` outcomes, `handoff_failure`, `semantic_deferred` | covered | None |
| Customer verification path defined | Verification steps 1 to 6, now with `handoff_completed` | covered | None |
| Production readiness checklist included | Checklist | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (supervisor + 3 agents) | full-document set | `node validate.mjs b1_1..b1_4.abl` from `/tmp` | pass | none | kept unchanged |
| JSON sample | illustrative-fragment | Field names checked against `routing-executor.ts` 10817 | n/a | n/a | kept, labeled "Fields are trimmed" |
| Comment `WHEN` check (not in article) | full-document set | `node validate.mjs b2_1.abl b2_2.abl` | pass | none | confirms a `//` comment after an expression compiles. Not added as a block |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Source table |
| Did I search for synonyms and neighboring constructs? | pass | `handoff_completed`, `digression`, `handoff_context_seed`, `no_domain_tool_selected`, `parentReturn`, `pipeline_*`, `multi_intent_`, `_meta` |
| Did I identify every supported style, alias, default, and fallback? | pass | Layers table, variants map |
| Did I distinguish optional helpers from required config? | pass | `_meta` and `parentReturn` are optional |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Layer 2 and plain-language variation |
| Did I avoid making a preferred pattern sound like the only one? | pass | Four layers |
| Could a customer debug the scenario another supported way? | pass | Studio viewer scoped out. Studio reads `handoff_completed` for hop timing |
| What evidence for "are you not considering all scenarios?" | pass | Variant map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Outcome and cause values match `classifyHandoffResult`. Level and fields match code | Payloads are not from a live trace |
| Senior content writer | ready | Need-to-event table stays the entry point. Short sentences | None |
| Product manager/customer enablement | ready | Support can answer "did the handoff finish and how long" from one event | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Re-read every event in 1.9.0. Added new events from source | 5 |
| Depth of conceptual explanation | 4 | Return layer extended | 4 |
| Readability and usability | 4 | New rows in the existing table | 5 |
| Coverage of examples | 4 | Example unchanged and revalidated | 4 |
| Search and discovery quality | 3 | Event names in headings and tables | 5 |
| Completeness of workflow and failure modes | 3 | `handoff_completed` outcomes, `digression`, seed | 5 |
| Customer/partner self-service readiness | 4 | No repo paths | 4 |
| Scenario comprehensiveness | 3 | Three new variants, comment rule | 4 |
| Article completeness | 5 | All template sections kept | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- Published `design-supervisor-routing-agent` and `choose-single-agent-or-specialists` still tell readers to check `handoff_context_pass_resolved` for `customer_id` (from the 2026-10-20 review). Confirm they were fixed.
- The 2026-10-20 evidence said the published `.mdx` line 87 repeated old claims. The current `.mdx` body matches the refreshed draft, so that item is closed.
- `use-agent-execution-pipeline.mdx` documents `parentReturn`. This article mentions it in one sentence with no link. Add a root-relative link if the owner agrees.
- The public reference says `ENABLED_WHEN` is evaluated "once before any turn". The runtime emits `routing_surface` per model turn. Confirm the wording with the reference owner.
- The multi-intent `type` table lists 9 of the more than 20 emitted types. The article says to read `type`, so the list is a sample.

## Open questions

- Is there any customer trace verbosity setting? Search of `apps/` and `packages/` found only the `debug_websocket` default.
- Does the Studio trace viewer name `handoff_completed` in the UI? The code treats it as hop timing.
- `//` comment behavior in a plain-language `WHEN` was close-read only. The evaluator was not run in 1.9.0.
