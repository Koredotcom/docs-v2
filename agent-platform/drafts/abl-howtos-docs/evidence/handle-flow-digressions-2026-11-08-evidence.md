# Evidence: handle-flow-digressions

**Date:** 2026-11-08
**Topic:** 7.8 - How to handle digressions without losing the current flow
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/handle-flow-digressions-2026-11-08-draft.md`
**Release:** `hotfix_Artemis_1.9.2` (code repo read-only, branch head `cf1f637c7ed`)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

`validateABL` from `packages/compiler/src/platform/ir/validate-ir.ts` bundled with esbuild into `scratchpad/h/validate.mjs` (zod pin check disabled, database and mongoose stubbed, helper packages installed in the scratch folder). The scratchpad was reset once during this run and the harness was rebuilt. Command: `node validate.mjs <file>...`. Research agents also ran an IR dumper and regex module tests before the reset. The runtime was not started. Runtime claims come from source reading.

## Source files inspected

Line ranges are approximate. Re-check before citing a single line.

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts (ENTITIES 14500-14717, INTENTS 14724-14807, LOOKUP_TABLES 14951-15330, NLU 15450-15700, FLOW digressions and SUB_INTENTS 2409-2681, 3239-3312, 4427-4800, GATHER 6891-7470)` | Entity, intent, NLU, lookup, digression, sub-intent, and gather parsing. |
| `packages/core/src/types/agent-based.ts (IntentDefinition 2653, SubIntent 823-835)` | Types. |
| `packages/compiler/src/platform/ir/compiler.ts (entities 2570-2880, 3021-3070; intent classification 6340-6443; nlu 6829; sub-intents 6219-6237; units and attachments)` | Entity registry, entity_ref merge, intent categories, NLU lowering. |
| `packages/compiler/src/platform/ir/validate-ir.ts (272-330, 1872-1910), validate-field-refs.ts` | Digression and field diagnostics. |
| `packages/compiler/src/platform/security/regex/ (policies.ts, regex-safety.ts)` | Regex safety rules. |
| `packages/compiler/src/platform/constructs/utils.ts (33-225)` | Lexical intent matching. |
| `apps/runtime/src/services/execution/{entity-pipeline.ts, entity-observations.ts, slot-assignment.ts, entity-slot-assignment.ts, entity-trace-events.ts}` | Entity observation and slot assignment. |
| `apps/runtime/src/services/execution/{extraction-validation.ts, itn.ts, input-normalization.ts, temporal-date.ts, ner-pipeline.ts, ner-strategy.ts, ner-stages/*, lookup-resolver.ts}` | Normalization, enum canonicalization, pattern stage, lookup checks. |
| `apps/runtime/src/services/execution/{native-intent-bridge.ts, flow-escape-candidates.ts, flow-step-executor.ts (5159-5330, 10138-10690, 11196-11320, 20787-21120)}` | Lexical bridge, digression and sub-intent runtime. |
| `apps/runtime/src/services/pipeline/{classifier.ts, routing-resolver.ts, intent-bridge.ts, tiered-resolver.ts, config.ts, circuit-breaker.ts}, execution/{multi-intent-router.ts, scripted-multi-intent-metadata.ts, reasoning-executor.ts (13440-13640)}` | Classifier, thresholds, multi-intent detection. |
| `packages/compiler/src/platform/nlu/engine.ts (NLUEngine, DigitalRuntime)` | Legacy engine with no importer in apps. |
| `apps/runtime/src/__tests__/execution/{flow-intents-digressions.test.ts, native-intent-bridge.test.ts}` | Tests that pin digression queueing and lexical behavior. |
| `agent-platform/abl/reference/nlu.mdx, flow.mdx (public reference cross-check)` | Cross-check only. No claim rests on it. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Global and step digressions | yes | parser 2409, 2662 | covered |
| DO actions and order rules E260, E261, E264, E265 | yes | parser 4461-4800 | covered |
| HANDOFF must be declared in agent HANDOFF section | yes | validate-ir 1872-1910 | covered |
| DELEGATE needs RETURN true; HANDOFF RETURN true error | yes | validate-ir | covered |
| Duplicate intent, dangling GOTO | yes | validate-ir | covered |
| GOTO COMPLETE flagged by validator | yes | validate-ir | covered (mistake) |
| KEYWORDS one-line list; no KEYWORDS means semantic only | yes | utils.ts 96-120 | covered |
| CONDITION after a candidate match | yes | flow-step-executor | covered |
| Answer with interruption | yes | 11196-11320 | covered |
| Gather-locked queueing for GOTO and returning DELEGATE | yes | 4954-4970; test 329-462 | covered |
| Legacy flat form and W261 | yes | parser | covered |
| Queue dispatch after gather completes | yes (resolved) | `buildQueueableDigressionEntry` (flow-step-executor 4859-4920) creates a pending request with a flow-step or agent target; `enqueueGatherDeferredIntents` (11125-11165) writes it to the shared `session.intentQueue` limited by `max_intents`; post-completion block (27700-28030) retires expired entries (`queue_max_age_ms`), drops unavailable targets, appends the `multi_intent_queued_notice` text, opens an offer (`openQueuedIntentOffer`), traces `multi_intent_queue_surfaced`; accept dispatches the target (18940-19030), decline removes the entry (19182) | covered |
| Nesting limit | gap | Not read | not stated |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Source reading and research agent runs | covered | Run a live trace before publication. |
| Required companion resources identified | Companions defined or marked project-local in the article | covered | none |
| Referenced variables have sources | Variable sources list | covered | none |
| Fallback/failure/ambiguity behavior verified | Queued digression, missing resume, invalid ordering | covered | none |
| Customer verification path defined | Verification steps | covered | none |
| Production readiness checklist included | Yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Returns_Assistant) | full-document | parse + compile with Human_Support (w7/d1) | pass | none | kept. Sub-intents removed from the research example |
| Block 2 (Human_Support) | full-document | parse + compile | pass | none | kept |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Added silent-fallback table from harness and code reads | 4 |
| Depth of conceptual explanation | 4 | Kept | 4 |
| Readability and usability | 4 | Kept | 4 |
| Coverage of examples | 4 | Added variations for each supported form | 4 |
| Search and discovery quality | 4 | Kept | 4 |
| Completeness of workflow and failure modes | 3 | Added failure and gap rows | 4 |
| Customer/partner self-service readiness | 4 | Kept | 4 |
| Scenario comprehensiveness | 3 | Added defaults and edge values | 4 |
| Article completeness | 4 | Kept | 4 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | See source table. |
| Did I search synonyms and neighboring constructs? | pass | Searched entity, intent, NLU, sub-intent, digression, lexical, classifier, and pipeline terms. |
| Did I identify every authoring style, shorthand, alias, default, and fallback? | pass | Variant map rows. |
| Did I distinguish optional helpers from required configuration? | pass | Stated per row. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Alternatives stated. |
| Could a customer build the scenario another supported way? | pass | Linked or covered. |
| If asked 'are you not considering all scenarios?', what evidence would I show? | pass | The variant map. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Behavior matches code reads and harness runs. | Run live traces. |
| Senior content writer | ready | Scannable tables and short sentences. | none |
| Product manager/customer enablement | ready | Clear limits stated up front. | none |

## Known gaps and notes

- Resolved: queued digressions surface as an offer after the flow completes. Governed multi-intent mode (`isGovernedOn`) uses a different path that was not read.
