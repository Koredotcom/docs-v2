# Evidence: use-fuzzy-matching

**Date:** 2026-11-20
**Topic:** 8.5 - How to use fuzzy matching for misspelled user input
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/use-fuzzy-matching-2026-11-20-draft.md`
**Release:** `hotfix_Artemis_1.10.1` (code repo read-only, branch head `856cf05a449`)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

- Compile: `validateABL` bundled with esbuild (`node v.mjs <file>`), files `85_*.abl`.
- Runtime: `fuzzyMatch` and `resolveInlineLookup` from `lookup-resolver.ts`, `matchScore`/`matchResult`/`matches` from `constructs/match-score.ts`, bundled as `85_rt.mjs` (database, SSRF, and logger imports stubbed). `validateExtractedValue` from the 8.1 bundle checked the enum case.
- No live session was run. FLOW confirmation behavior ("Did you mean", accept, decline) rests on code reading and `lookup-fuzzy-confirmation.test.ts`. `ON_RESULT` on a step with no `CALL` compiles clean, but its runtime evaluation was not run.

## Source files inspected

| File                                                                                                | Purpose                                                                                                  |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `apps/runtime/src/services/execution/lookup-resolver.ts`                                            | `fuzzyMatch`, `resolveInlineLookup`, `resolveLookup` (inline, collection, api), caches, candidate limit. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (4440-4515, 21296-21390, 25600-25730)   | `validateWithLookupTables`, FLOW confirmation request and reply handling, sensitive near-match rule.     |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (7042-7100)                             | Global GATHER path: near match dropped with a "close to" message.                                        |
| `apps/runtime/src/services/execution/lookup-table-merger.ts`                                        | Agent and project table merge; name conflict error.                                                      |
| `apps/runtime/src/config/lookup-collection-policy.ts`, `apps/runtime/env.registry.yaml` (2545-2570) | `LOOKUP_COLLECTION_FUZZY_CANDIDATE_LIMIT` default 500; cache TTL 5000 ms; list max 1000.                 |
| `packages/core/src/parser/agent-based-parser.ts` (15648-16030)                                      | `LOOKUP_TABLES` parser, E480-E489, W480, properties.                                                     |
| `packages/compiler/src/platform/ir/compiler.ts` (2027-2050)                                         | Lowering; agent default threshold 0.85.                                                                  |
| `packages/compiler/src/platform/ir/schema.ts` (3040-3050)                                           | `LookupTableIR`.                                                                                         |
| `packages/compiler/src/platform/ir/project-runtime-config.ts` (1415-1430)                           | Project table mapping; default threshold 0.8.                                                            |
| `packages/compiler/src/platform/ir/validate-ir.ts` (4377-4395, 690-880)                             | `AGENT_LOOKUP_TABLE_EXPERIMENTAL`; `MATCHES` infix and function warnings.                                |
| `apps/studio/src/components/settings/RuntimeConfigTab.tsx` (6013-6040, 8367-8600)                   | Studio Lookup Tables UI: fuzzy toggle, threshold 0-1, CSV/JSON upload up to 1 MB.                        |
| `packages/compiler/src/platform/constructs/match-score.ts`, `cel-functions.ts` (300-345)            | `MATCH_SCORE`, `MATCH_RESULT`, `MATCHES`: kinds, bands, fail-closed.                                     |
| `packages/compiler/src/platform/constructs/utils.ts` (70-140)                                       | Lexical intent matching is exact; no fuzzy.                                                              |
| `apps/runtime/src/services/execution/extraction-validation.ts` (`normalizeEnumValue`)               | Enum and synonym matching: exact, case-insensitive, synonyms.                                            |
| `apps/runtime/src/__tests__/lookup-fuzzy-confirmation.test.ts`                                      | Pins exact, case, fuzzy, no-match, non-fuzzy behavior.                                                   |
| `examples/`                                                                                         | No example uses `LOOKUP_TABLES`.                                                                         |
| `apps/studio/content/abl-reference/*`                                                               | Cross-check only. No claim rests on it.                                                                  |

## Scenario and variant map

| Scenario or variant                                              | Supported?    | Evidence                                                                                  | Article coverage                       |
| ---------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------- | -------------------------------------- |
| Inline lookup table with fuzzy match                             | yes           | `resolveInlineLookup`; harness: "Heathrw" 0.875                                           | covered                                |
| Collection lookup table with fuzzy match, 500-row candidate cap  | yes           | `resolveLookup` collection branch; env default 500                                        | covered                                |
| API lookup table                                                 | yes, no fuzzy | `resolveLookup` api branch returns no similarity                                          | covered                                |
| Exact match ignores case and returns table spelling              | yes           | `resolveInlineLookup`; harness `lax`                                                      | covered                                |
| Score formula and best-wins, first-wins-tie                      | yes           | `fuzzyMatch` source; harness values                                                       | covered                                |
| Threshold defaults: agent 0.85, project 0.8                      | yes           | compiler.ts 2047; project-runtime-config.ts 1425                                          | covered                                |
| Threshold range not validated                                    | yes           | compile with `fuzzy_threshold: 5` gives only the experimental warning; NaN gives no fuzzy | covered                                |
| FLOW "Did you mean" confirmation, accept, decline, unclear       | yes           | flow-step-executor 21296-21390, 25690-25715                                               | covered                                |
| Global GATHER near match dropped, model told "close to"          | yes           | reasoning-executor 7090-7100                                                              | covered                                |
| No match: value cleared, re-ask with "not a valid value"         | yes           | `validateWithLookupTables`                                                                | covered                                |
| Sensitive field near match treated as miss                       | yes           | flow-step-executor 4490-4500                                                              | covered                                |
| Missing table or misspelled `semantics.lookup`                   | yes, silent   | `if (!table) continue`; harness 85_d compiles with no diagnostic                          | covered as a mistake                   |
| Agent-local `LOOKUP_TABLES` and experimental warning             | yes           | validate-ir 4377; harness                                                                 | covered                                |
| Name conflict between agent and project table                    | yes           | lookup-table-merger                                                                       | covered                                |
| Quoted endpoint gives E485                                       | yes           | harness 85_c first run                                                                    | covered                                |
| W480 for more than 1,000 inline values with fuzzy                | yes           | parser 15720 (code only)                                                                  | covered, brief                         |
| Lookup value sampling for extraction (`listLookupValues`)        | yes           | lookup-resolver, flow-step-executor 17725                                                 | out of scope. Extraction guidance only |
| Enum, `options`, `validate: enum`, synonyms: exact only          | yes           | `normalizeEnumValue`; `validateExtractedValue` rejects "Heathrw"                          | covered (not fuzzy)                    |
| Lexical intent keywords exact only                               | yes           | utils.ts 70-140                                                                           | covered (not fuzzy)                    |
| Embeddings and glossary                                          | no, inactive  | published article improve-intent-matching                                                 | covered by link                        |
| `MATCHES`, `MATCH_RESULT`, `MATCH_SCORE` kinds and bands         | yes           | match-score.ts; harness 13 cases                                                          | covered                                |
| Match functions in `ON_RESULT` conditions                        | yes (compile) | 85_e compiles clean                                                                       | covered; runtime not run               |
| Match functions in `CONSTRAINTS` `REQUIRE` and `COMPLETE` `WHEN` | yes (compile) | `MATCH_RESULT` REQUIRE and `MATCHES` WHEN compile                                         | not shown, mention only                |
| Infix `MATCHES` regex versus function form                       | yes           | validate-ir warnings                                                                      | covered                                |
| LLM extractor tolerance of typos before lookup                   | gap           | not deterministic, no code contract                                                       | not claimed                            |
| Phonetic or soundex matching for lookup tables                   | no            | none found                                                                                | not claimed                            |
| `LOOKUP_TABLES` `map` values used at runtime                     | gap           | `map` only supplies keys as `values`; no value read found                                 | not covered                            |

## Example validation

| Article block                               | Classification                                  | Validation method                                          | Result                                              | Warnings or errors                                                   | Action                       |
| ------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------- |
| Project table JSON                          | illustrative-fragment (project config, not ABL) | Keys checked against `mapProjectRuntimeConfigDocumentToIR` | n/a                                                 | none                                                                 | labeled "not ABL" in article |
| Trip_Destination_Intake                     | full-document                                   | `validateABL` (85_a_proj.abl)                              | pass                                                | none                                                                 | kept                         |
| Trip_Destination_Global                     | full-document                                   | `validateABL` (85_b_proj.abl)                              | pass                                                | none                                                                 | kept                         |
| `LOOKUP_TABLES` snippet                     | section-snippet                                 | wrapped in 85_a.abl and 85_c.abl                           | pass                                                | `AGENT_LOOKUP_TABLE_EXPERIMENTAL`, intentional, explained in article | kept                         |
| Caller_Verification                         | full-document                                   | `validateABL` (85_e.abl)                                   | pass                                                | none after switching `ON_INPUT` to `ON_RESULT`                       | fixed, kept                  |
| Probe: `ON_INPUT` with `GATHER`             | not in article                                  | 85_e first version                                         | pass with `FLOW_ON_INPUT_GATHER_ORDER_AMBIGUITY`    | warning                                                              | restructured                 |
| Probe: promptless `ON_INPUT` after `GATHER` | not in article                                  | 85_e second version                                        | pass with `FLOW_ON_INPUT_GATE_AFTER_CONSUMED_INPUT` | warning                                                              | switched to `ON_RESULT`      |
| Probe: unknown lookup reference             | not in article                                  | 85_d.abl                                                   | pass, no diagnostic                                 | none                                                                 | recorded as gotcha           |
| Probe: quoted endpoint                      | not in article                                  | 85_c.abl                                                   | error `E485`                                        | error                                                                | recorded                     |
| Probe: `fuzzy_threshold: 5`                 | not in article                                  | 85_c.abl                                                   | pass, no diagnostic                                 | none                                                                 | recorded                     |

## Operational readiness map

| Requirement                                  | Evidence                                                                                            | Article coverage | Gap or action                                                                           |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| Runtime behavior verified                    | Real `fuzzyMatch`, `resolveInlineLookup`, `matchScore` run; confirmation flow read in code and test | covered          | Run a live session for the FLOW confirmation and `ON_RESULT` routing before publishing. |
| Required companion resources identified      | Project table in JSON fragment; `profile_name` marked project-local                                 | covered          | none                                                                                    |
| Referenced variables have sources            | "Variable sources" under each full example                                                          | covered          | none                                                                                    |
| Fallback/failure/ambiguity behavior verified | No match, decline, unclear, sensitive, retry, mismatch, missing                                     | covered          | Timeout of `api` source belongs to article 8.4.                                         |
| Customer verification path defined           | Utterance table plus trace events                                                                   | covered          | none                                                                                    |
| Production readiness checklist included      | Yes                                                                                                 | covered          | none                                                                                    |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                             | Final score |
| ------------------------------------------ | ------------- | ----------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Removed the unverified "below 0.5" figure; all scores come from harness runs. | 4           |
| Depth of conceptual explanation            | 4             | Added the two-mechanism decision table and the not-fuzzy list.                | 4           |
| Readability and usability                  | 4             | Answer first; tables for score, sources, functions.                           | 4           |
| Coverage of examples                       | 4             | Two lookup agents, one verification agent, two snippets.                      | 4           |
| Search and discovery quality               | 4             | Title and headings use "misspelled", "Did you mean", "fuzzy".                 | 4           |
| Completeness of workflow and failure modes | 4             | No match, decline, unclear, sensitive, 500-row cap, missing table.            | 4           |
| Customer/partner self-service readiness    | 4             | No repo paths in the article.                                                 | 4           |
| Scenario comprehensiveness                 | 4             | `map`, LLM tolerance, and value sampling scoped out or gapped.                | 4           |
| Article completeness                       | 4             | All template sections present.                                                | 4           |

**Gate result:** pass, with open items below.

## Red-team coverage pass

| Question                                                                                                      | Result | Evidence or correction                                           |
| ------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------- |
| Inspected parser, types, compiler, runtime, tests, examples?                                                  | pass   | Source table. No example uses lookups.                           |
| Searched neighbors (`fuzzy`, `levenshtein`, `similarity`, `synonym`, `glossary`, `embedding`, `match_score`)? | pass   | Found the match functions. Added as a second mechanism.          |
| Every authoring style, default, fallback covered?                                                             | pass   | Three sources, two scopes, two defaults.                         |
| Optional helpers versus required config distinguished?                                                        | pass   | Table plus `semantics.lookup` are both required.                 |
| Free-form guidance path explained?                                                                            | pass   | Global GATHER: the model words the question.                     |
| Preferred pattern presented as the only one?                                                                  | pass   | Enum with synonyms, `api` source, match functions all named.     |
| Could a customer build this another way not mentioned?                                                        | pass   | `extraction_hints` and entity synonyms are exact-only and noted. |
| Evidence if asked "Are you not considering all scenarios?"                                                    | pass   | Variant map above.                                               |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                    | Required improvements                                                            |
| ----------------------------------- | ----------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Exact scoring formula, thresholds, 500-row cap, silent missing-table gotcha. | Run one live session to confirm the "Did you mean" flow and `ON_RESULT` routing. |
| Senior content writer               | ready             | Answer first; decision table; short sections.                                | none                                                                             |
| Product manager/customer enablement | ready             | Clear choice between lookup table, enum with synonyms, and match functions.  | none                                                                             |

## Known gaps and ambiguity (needs user decision)

- **G1. Agent-local tables are experimental.** The compiler steers authors to project tables. The article leads with the project table, which an author creates in Studio or project config, not in ABL. Confirm that the Studio label for the section ("Lookup Tables" under runtime configuration) matches your docs.
- **G2. Threshold default differs:** 0.85 for an agent table, 0.8 for a project table. The article states both. Confirm whether the difference is intended.
- **G3. Threshold range is unchecked.** Values outside 0 to 1 compile and silently disable matching. Report as a product bug if unintended.
- **G4. Missing lookup table is silent.** A misspelled `semantics.lookup` name gives no diagnostic. Report as a product gap if unintended.
- **G5. The 500-row cap** for collection tables is an environment default (`LOOKUP_COLLECTION_FUZZY_CANDIDATE_LIMIT`). A deployment can change it. The article states the default.
- **G6. FLOW fuzzy wording is fixed English** and not overridable through `MESSAGES`. Confirm before telling multilingual customers.
