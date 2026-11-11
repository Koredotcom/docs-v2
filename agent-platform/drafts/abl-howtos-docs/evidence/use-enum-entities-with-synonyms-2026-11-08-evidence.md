# Evidence: use-enum-entities-with-synonyms

**Date:** 2026-11-08
**Topic:** 7.2 - How to use enum entities with synonyms
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/use-enum-entities-with-synonyms-2026-11-08-draft.md`
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
| VALUES inline list | yes | parseInlineArray 15690 | covered |
| VALUES block list or trailing comment | no (silent) | Research harness | covered (mistake) |
| SYNONYMS map of inline lists | yes | parser 14618 | covered |
| SYNONYMS block list, flow map, hyphen or space key | no (silent) | Research harness | covered (mistake) |
| Quoted synonyms keep quotes in ENTITIES | yes (never match) | parser 14620-14624 | covered (mistake) |
| Match order exact, case-insensitive, synonym | yes | extraction-validation ~175-205 | covered |
| Rejected value message and invalid_option | yes | stage-resolution | covered |
| LLM rewrite needs grounding in synonym or hint | yes | stage-resolution 60-100 | covered |
| Duplicate synonym first wins; unknown canonical ignored | yes | Research harness | covered |
| NLU form accepts quotes and hyphen keys | yes | parser 15650-15671 | covered (variation) |
| Field OPTIONS alternative | yes | compiler 2800-2815; harness t2 | covered |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Source reading and research agent runs | covered | Run a live trace before publication. |
| Required companion resources identified | Companions defined or marked project-local in the article | covered | none |
| Referenced variables have sources | Variable sources list | covered | none |
| Fallback/failure/ambiguity behavior verified | Silent syntax traps, invalid option, ambiguous synonym | covered | none |
| Customer verification path defined | Verification steps | covered | none |
| Production readiness checklist included | Yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Delivery_Options) | full-document | parse + compile (w7/e2) | pass | none | kept |
| Block 2 (OPTIONS field) | section-snippet | wrapped (w7/t2) | pass | none | kept |

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

- Inline `options: ["a"]` quote retention was not re-verified by harness for the field form.
