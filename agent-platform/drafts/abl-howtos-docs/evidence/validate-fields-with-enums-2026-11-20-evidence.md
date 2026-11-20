# Evidence: validate-fields-with-enums

**Date:** 2026-11-20
**Topic:** 8.2 - How to validate fields with enums and allowed values
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/validate-fields-with-enums-2026-11-20-draft.md`
**Release:** `hotfix_Artemis_1.10.1` (code repo read-only, branch head `856cf05a449`)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

- Compile: `validateABL` bundle (`node v.mjs <file>`), files `82_*.abl`.
- Parser: `parseAgentBasedABL` bundle (`82_parse.mjs`, `82_q.mjs`) to read the parsed `options`.
- Runtime: `validateExtractedValue`, `normalizeByType`, `validateField` bundle (`rt.mjs`), probes `82_p.mjs`, `82_p2.mjs`.
- No live session. Re-ask copy rests on `ablp-5713-gather-reask-reason-copy.test.ts` (enum case, `OPTIONS: [1111, 2222]`). Enum rewrite rejection rests on `reasoning-executor-guards.test.ts` (~28860-29010, 31092).

## Source files inspected

| File                                                                                                                   | Purpose                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `packages/core/src/parser/agent-based-parser.ts` (3128-3146, 7399-7430, 14421-14446, 7068-7071, 15185-15260)           | `options` inline (no quote strip) and list (quote strip) forms, `enum_set`, ENTITIES `VALUES`/`SYNONYMS`.                    |
| `packages/compiler/src/platform/ir/compiler.ts` (2820-2845, 3100-3190, 3210-3235)                                      | `parseGatherEnumValidation`, `enumValues` precedence, `entity_ref` conflict and unresolved errors, enum validation lowering. |
| `apps/runtime/src/services/execution/extraction-validation.ts` (225-250, `validateExtractedValue` enum branches)       | `normalizeEnumValue`: exact, case-insensitive, synonym. No fuzzy.                                                            |
| `apps/runtime/src/services/execution/itn.ts` (268-284)                                                                 | Enum normalization in the first stage.                                                                                       |
| `apps/runtime/src/services/execution/ner-stages/stage-resolution.ts` (60-120, 195-202)                                 | `isLLMEnumRewriteAuthorized`; extraction hints grant rewrite permission.                                                     |
| `apps/runtime/src/services/execution/gather-rejection-reasons.ts`                                                      | `gather_invalid_option` and default text.                                                                                    |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (27860-28000)                                              | Global GATHER: failed fields returned to the model.                                                                          |
| `packages/compiler/src/platform/constructs/utils.ts` (778-784)                                                         | `validateField` enum rule: case-sensitive, pipe-joined.                                                                      |
| `apps/runtime/src/__tests__/execution/ablp-5713-gather-reask-reason-copy.test.ts`, `reasoning-executor-guards.test.ts` | Pinned behavior.                                                                                                             |

## Scenario and variant map

| Scenario or variant                                                    | Supported?                     | Evidence                                                 | Article coverage                                   |
| ---------------------------------------------------------------------- | ------------------------------ | -------------------------------------------------------- | -------------------------------------------------- |
| `type: enum` + inline `options`                                        | yes                            | parser 7399; probe 82_d                                  | covered                                            |
| `options` block list                                                   | yes                            | parser 7408-7430; 82_snip compiles                       | covered                                            |
| Inline quoted options keep quote marks                                 | yes (gotcha)                   | parser output `["\"iPhone\""]`; `82_p2` rejects "iPhone" | covered as rule and mistake                        |
| Block list quoted options strip quotes                                 | yes                            | 82_e output `["red","green"]`; list regex                | covered                                            |
| `semantics.enum_set`                                                   | yes                            | parser 7068; compiler 3115; 82_real                      | covered                                            |
| `options` beats `enum_set`                                             | yes                            | compiler `f.options?.length ? ... : enumSet`             | covered                                            |
| `validate: enum(a, b)` on string field                                 | yes                            | `parseGatherEnumValidation`; 82_real                     | covered                                            |
| Quoted values in `enum(...)` keep quotes                               | yes (code)                     | split/trim only, no strip                                | covered, not run                                   |
| Entity `VALUES` + `SYNONYMS` via `entity_ref`                          | yes                            | compiler 3118-3135; 82_real                              | covered                                            |
| `entity_ref` with `type`/`options`                                     | error                          | 82_c: `GATHER_ENTITY_REF_CONFLICT`                       | covered                                            |
| Unresolved `entity_ref`                                                | error                          | 82_c: `GATHER_ENTITY_REF_UNRESOLVED`                     | covered                                            |
| `type: enum` without options                                           | yes, silent accept             | 82_c no diagnostic; `82_p` "no options"                  | covered                                            |
| Exact, case-insensitive, synonym order                                 | yes                            | `normalizeEnumValue`; `82_p`                             | covered                                            |
| Substring and near-miss rejected                                       | yes                            | `82_p`: "the pro plan", "pr"                             | covered                                            |
| Surrounding whitespace not trimmed at this stage                       | yes                            | `82_p` `"  pro "` rejected                               | not covered (extraction normally trims; low value) |
| Synonym key not in options ignored                                     | yes                            | `82_p` last row                                          | covered                                            |
| `list: true` enum                                                      | yes                            | `82_p` list probe                                        | covered                                            |
| LLM enum rewrite blocked unless source = option/synonym or hints exist | yes                            | `isLLMEnumRewriteAuthorized`; guards test                | covered                                            |
| `extraction_hints` authorizes rewrite                                  | yes                            | stage-resolution 117-120; guards test 28885              | covered                                            |
| FLOW `REASONING: false` re-ask copy, `MESSAGES` override               | yes                            | ablp-5713 tests                                          | covered                                            |
| Global GATHER re-ask via model and VALIDATION_ERROR                    | yes                            | reasoning-executor 27990                                 | covered                                            |
| Enum in ENTITIES-only (NLU entities) path                              | yes                            | entity pipeline                                          | out of scope; entities article                     |
| `valuesOrigin: lookup` skips enum rejection                            | yes                            | stage-resolution 236                                     | out of scope; article 8.4                          |
| Allowed values listed in the re-ask                                    | no (default reason lists none) | gather-rejection-reasons                                 | covered                                            |
| Fuzzy enum matching                                                    | no                             | normalizeEnumValue comment                               | pointer to 8.5                                     |

## Example validation

| Article block                                      | Classification  | Validation method                                      | Result                              | Warnings or errors    | Action           |
| -------------------------------------------------- | --------------- | ------------------------------------------------------ | ----------------------------------- | --------------------- | ---------------- |
| Ticket_Priority                                    | full-document   | `validateABL` (82_min)                                 | pass                                | none                  | kept             |
| Plan_Change                                        | full-document   | `validateABL` (82_real)                                | pass                                | none                  | kept             |
| Laptop_Support                                     | full-document   | `validateABL` (82_b)                                   | pass                                | none                  | kept             |
| Device hint snippet                                | section-snippet | wrapped as Device_Support (82_hint)                    | pass                                | none                  | kept             |
| `MESSAGES` snippet                                 | section-snippet | same construct validated in Callback_Booking (8.1, b2) | pass                                | none                  | kept             |
| Quoted-options and bad-mix probes (not in article) | full-document   | 82_a first form, 82_c                                  | compile ok; 82_c errors as expected | `GATHER_ENTITY_REF_*` | used as evidence |

## Operational readiness map

| Requirement                                  | Evidence                                                   | Article coverage | Gap or action                                             |
| -------------------------------------------- | ---------------------------------------------------------- | ---------------- | --------------------------------------------------------- |
| Runtime behavior verified                    | Real normalizer run; tests read                            | covered          | No live session.                                          |
| Required companion resources identified      | Only `ENTITIES`, `GATHER`, `COMPLETE`, `FLOW`, `MESSAGES`. | covered          | none                                                      |
| Referenced variables have sources            | "Variable sources" under full examples                     | covered          | none                                                      |
| Fallback/failure/ambiguity behavior verified | Rejection, rewrite block, re-ask paths                     | covered          | Exhaustion behavior is article 8.9.                       |
| Customer verification path defined           | Utterance table and trace error text                       | covered          | "my MacBook" hint row depends on model behavior; not run. |
| Production readiness checklist included      | yes                                                        | covered          | none                                                      |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                 | Final score |
| ------------------------------------------ | ------------- | ------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Reworded the rewrite rule to match code exactly.  | 4           |
| Depth of conceptual explanation            | 4             | Match order and stored-value rule.                | 4           |
| Readability and usability                  | 4             | Declaration-form table.                           | 4           |
| Coverage of examples                       | 4             | Three full documents, validated.                  | 4           |
| Search and discovery quality               | 4             | Troubleshooting uses error text.                  | 4           |
| Completeness of workflow and failure modes | 4             | Rejected-value section, trace error.              | 4           |
| Customer/partner self-service readiness    | 4             | No repo paths.                                    | 4           |
| Scenario comprehensiveness                 | 4             | Fuzzy, lookup, entities scoped out with pointers. | 4           |
| Article completeness                       | 4             | All template sections.                            | 4           |

**Gate result:** pass, with gaps below.

## Red-team coverage pass

| Question                                                                                                  | Result | Evidence or correction               |
| --------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------ |
| Inspected parser, types, compiler, runtime, tests, examples?                                              | pass   | Source table.                        |
| Searched neighbors (`options`, `enum_set`, `SYNONYMS`, `entity_ref`, `extraction_hints`, `valuesOrigin`)? | pass   | Found lookup origin, scoped out.     |
| Every authoring style covered?                                                                            | pass   | Five declaration forms.              |
| Optional versus required distinguished?                                                                   | pass   | `options` required for `type: enum`. |
| Free-form guidance path explained?                                                                        | pass   | Hints section.                       |
| Preferred pattern shown as only one?                                                                      | pass   | Table of forms.                      |
| Another supported way not mentioned?                                                                      | pass   | NLU entities and lookups pointed to. |
| Evidence if asked                                                                                         | pass   | Variant map.                         |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                      | Required improvements                                      |
| ----------------------------------- | ----------------- | -------------------------------------------------------------- | ---------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Quote-mark gotcha found and proven; rewrite rule matches code. | Live run to confirm the hint row and global GATHER re-ask. |
| Senior content writer               | ready             | Short, answer first, tables.                                   | none                                                       |
| Product manager/customer enablement | ready             | Decision guidance toward synonyms, hints, lookups.             | none                                                       |

## Known gaps and ambiguity (needs user decision)

- **G1. Quote marks in inline `options`.** `options: ["a", "b"]` keeps the quotes in values (`GATHER`, global and FLOW). Many published examples and the Studio reference use quoted inline lists. The article follows the code. Confirm whether this is a parser bug to report.
- **G2. `type: enum` with no `options`** compiles silently and accepts any value. Possible product gap.
- **G3.** Hint-based mapping relies on model behavior, so the "my MacBook" row is not deterministic.
