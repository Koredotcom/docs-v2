# Evidence: extract-pattern-based-values

**Date:** 2026-11-08
**Topic:** 7.3 - How to extract pattern-based values like IDs and phone numbers
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/extract-pattern-based-values-2026-11-08-draft.md`
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
| Entity `TYPE: pattern` with `PATTERN` | yes | parser 14688 | covered |
| Field `EXTRACTION_PATTERN` and `EXTRACTION_GROUP` | yes | parser 7324-7328 | covered |
| `VALIDATE` regex | yes | compiler 2937 | covered |
| Single versus double backslash | yes (double silently never matches) | Regex module test; harness dbl_backslash | covered |
| Search semantics, case-sensitive, anchors match nothing | yes | stage-pattern; regex test | covered |
| RE2 safety, 500 char limit, lookaround errors | yes | policies.ts 116; regex-safety.ts 31-52 | covered |
| Repeated group with plus or star rejected | yes | regex-safety 44-52 | covered |
| Group number fallback to whole match | yes | stage-pattern 225-246 | covered |
| Built-in email and phone patterns | yes | stage-pattern 105-160 | covered |
| `TYPE: pattern` does not enforce at resolution | yes | itn.ts and extraction-validation default branch | covered |
| Strategy precedence | yes | ner-strategy 80 | covered |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Source reading and research agent runs | covered | Run a live trace before publication. |
| Required companion resources identified | Companions defined or marked project-local in the article | covered | none |
| Referenced variables have sources | Variable sources list | covered | none |
| Fallback/failure/ambiguity behavior verified | No match, wrong format, unsafe pattern | covered | none |
| Customer verification path defined | Verification steps | covered | none |
| Production readiness checklist included | Yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Ticket_Lookup) | full-document | parse + compile (w7/e3) | pass | none | kept |

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

- The public nlu.mdx example uses a double backslash that never matches. Reported for human review.
- ENTITIES `VALIDATION` enforcement not traced.
