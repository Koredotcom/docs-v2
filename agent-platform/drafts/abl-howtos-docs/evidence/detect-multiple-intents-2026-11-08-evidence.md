# Evidence: detect-multiple-intents

**Date:** 2026-11-08
**Topic:** 7.9 - How to detect multiple intents in one user message
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/detect-multiple-intents-2026-11-08-draft.md`
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
| Pipeline classifier list with relationship | yes | classifier.ts 340-421 | covered |
| Classifier input and output shape | yes | classifier.ts 253-345 | covered |
| Hallucinated category dropped; unreadable reply gives null intent | yes | 384-421 | covered |
| Relationship fallback rules | yes | intent-bridge 185-207 | covered |
| Tier 1 and tier 2 thresholds | yes | intent-bridge 212; tiered-resolver 90-120 | covered |
| `confidence_threshold` filter drops silently | yes | multi-intent-router 359-378 | covered |
| `max_intents` after detection | yes (code read) | multi-intent-router 440-456 | covered with caution |
| Pipeline master gate | yes | config.ts 52 | covered |
| Pipeline-off fallback conditions | yes | reasoning-executor 6964-6974 | covered |
| Flow ON_INPUT regex confidences | yes | flow-step-executor 10763-10830 | covered |
| Circuit breaker 3 failures, 60 s | yes | circuit-breaker 24-30 | covered |
| Route can read intent.category and confidence only | yes | routing-resolver 159-165 | covered |
| camelCase pipeline keys; snake_case dropped | yes | parser 11198-11260; harness | covered |
| MULTI_INTENT silent fallbacks (camelCase, unknown, empty) | yes | Research harness | covered |
| Embedding detection | no | setEmbeddingIntentIndex has no non-test caller | covered (stated) |
| Classifier-path parallel and sequential cap by max_intents | no cap (resolved) | `multi-intent-router.ts` 395-470: `fanOutTasks` map over all `executableIntents`; `alternatives: validAlternatives` (505-530) feed `buildSequentialMultiIntentTasks` (sequential-executor 417-433); only `queueEntries` (primary_queue and sequential queue) and the disambiguation menu are sliced by `max_intents`. No test pins a cap | covered |
| Stored project multi_intent.enabled seeding | gap | Not verified | wording says written in the agent |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Source reading and research agent runs | covered | Run a live trace before publication. |
| Required companion resources identified | Companions defined or marked project-local in the article | covered | none |
| Referenced variables have sources | Variable sources list | covered | none |
| Fallback/failure/ambiguity behavior verified | Classifier failure, low confidence, ambiguous relationship | covered | none |
| Customer verification path defined | Verification steps | covered | none |
| Production readiness checklist included | Yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Service_Desk) | full-document | parse + compile with companions (w7/m1) | pass | none | kept |
| Blocks 2-3 (specialists) | full-document | parse + compile | pass | none | kept |

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

- The published handle-multiple-intents article says `max_intents` filters classifier detection and that the fallback is on by default. Both are imprecise. Reported for human review.
- Several runtime paths are code-read only.
