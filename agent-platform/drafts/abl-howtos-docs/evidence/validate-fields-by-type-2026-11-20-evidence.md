# Evidence: validate-fields-by-type

**Date:** 2026-11-20
**Topic:** 8.1 - How to validate collected fields by type
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/validate-fields-by-type-2026-11-20-draft.md`
**Release:** `hotfix_Artemis_1.10.1` (code repo read-only, branch head `856cf05a449`)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

- Compile: `validateABL` from `packages/compiler/src/platform/ir/validate-ir.ts`, bundled with esbuild (workspace aliases, npm deps installed in the scratchpad). Command: `node v.mjs <file>.abl`.
- Runtime functions: `validateExtractedValue` (`extraction-validation.ts`), `normalizeByType` (`itn.ts`), `validateField` (`constructs/utils.ts`), bundled with esbuild. `@abl/compiler/platform` logger and the response-boundary helper were stubbed. The sensitive-field redaction path is therefore not exercised by the harness. It is claimed from code and the ABLP-5713 test only.
- No live runtime session was run. Re-ask wording for FLOW steps rests on `ablp-5713-gather-reask-reason-copy.test.ts`.

## Source files inspected

| File                                                                              | Purpose                                                                                                                            |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `apps/runtime/src/services/execution/extraction-validation.ts`                    | `validateExtractedValue`, `validateExtractedBatch`, normalizers, list and range handling, sensitive-field messages.                |
| `apps/runtime/src/services/execution/itn.ts` (`normalizeByType`)                  | First normalization stage: spoken numbers, leading-number salvage, boolean phrases, email, phone region from locale.               |
| `apps/runtime/src/services/execution/intrinsic-validation.ts`                     | Entity-pipeline type checks (`validateIntrinsic`). Same rules, same pass-through default.                                          |
| `apps/runtime/src/services/execution/ner-stages/stage-resolution.ts` (150-360)    | Order: ITN, type check, temporal direction, temporal backstop, authored rule. Reason codes.                                        |
| `apps/runtime/src/services/execution/gather-rejection-reasons.ts`                 | Reason codes, `MESSAGES` keys, English defaults.                                                                                   |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (27860-28000)         | Global GATHER path: type check, post-type rule, retry counter, `validation_max_retries`, `VALIDATION_ERROR` tool result.           |
| `apps/runtime/src/services/execution/entity-slot-assignment.ts` (27, 122)         | Post-type rule types: `pattern`, `range`, `enum`.                                                                                  |
| `apps/runtime/src/services/execution/value-write-policy.ts` (165-200)             | Direct SET validation uses `validateField`.                                                                                        |
| `packages/core/src/parser/agent-based-parser.ts` (7140-7470, 15185-15210)         | GATHER field keys; `type` kept as raw text; known entity types.                                                                    |
| `packages/core/src/types/agent-based.ts` (1640-1665)                              | `GatherFieldSemantics.temporal`.                                                                                                   |
| `packages/compiler/src/platform/ir/compiler.ts` (303-315, 2790-2850, 3100-3290)   | `INTRINSIC_VALIDATED_TYPES`, `resolveValidationType`, `parseGatherEnumValidation`, regex safety at compile, `validation` lowering. |
| `packages/compiler/src/platform/ir/schema.ts` (3191)                              | `ValidationRule` types.                                                                                                            |
| `packages/compiler/src/platform/constructs/utils.ts` (721-830)                    | `validateField`: pattern, range, enum, custom, llm, intrinsic.                                                                     |
| `packages/compiler/src/platform/utils/{date,phone}-extraction.ts`                 | Date and phone parsing.                                                                                                            |
| `apps/runtime/src/__tests__/execution/ablp-5713-gather-reask-reason-copy.test.ts` | Pins FLOW re-ask copy, `MESSAGES` override, `retry_prompt` override, sensitive, locale.                                            |
| `examples/retirement-service-demo/agents/contribution_manager.agent.abl`          | Uses `validate: min(18)`. See gap G1.                                                                                              |
| `apps/studio/content/abl-reference/gather.mdx` (cross-check only)                 | Lists `min()`, `max()`, `email()`, `pattern()`. No claim rests on it. See gap G1.                                                  |

## Scenario and variant map

| Scenario or variant                                                  | Supported?          | Evidence                                                                         | Article coverage                                                       |
| -------------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `string`, `text`, `free_text` pass-through; object or array rejected | yes                 | `validateExtractedValue` case `string`; harness `string {a:1}` rejected          | covered                                                                |
| `integer` with truncation, spoken numbers, "8 guests", "1,200"       | yes                 | `itn.ts` 155-176; harness `twelve`=12, `8 guests`=8, `10.9`=10, `1,200`=1200     | covered                                                                |
| `number`, `float`                                                    | yes                 | `itn.ts` 177-198                                                                 | covered                                                                |
| `currency` to number, code dropped                                   | yes                 | `normalizeCurrency` doc comment; harness `$49.99`, `250 USD`                     | covered                                                                |
| `boolean` core words and wider extraction-stage phrases              | yes                 | `TRUTHY_VALUES`, `itn.ts` 285-330; harness `ok`, `sure`, `not now`               | covered                                                                |
| `date`, `datetime` natural language to ISO                           | yes                 | `normalizeDate`; harness `next friday`, `tomorrow`, `march 3rd 2025`             | covered                                                                |
| `temporal: future/past/any` direction check                          | yes                 | `stage-resolution.ts` 258-285; `agent-based.ts` 1659                             | covered (past and future in examples)                                  |
| `email` lowercased                                                   | yes                 | harness                                                                          | covered                                                                |
| `phone` to E.164, 7-15 digits, region from locale                    | yes                 | harness `(415) 555-0100`; `itn.ts` 241-254                                       | covered                                                                |
| `enum` via `options`                                                 | yes                 | `normalizeEnumValue`                                                             | out of scope here; separate article 8.2                                |
| `location`                                                           | yes                 | pass-through case                                                                | covered                                                                |
| `ordinal`                                                            | yes (ITN only)      | `itn.ts` 199-221; `gather-rejection-reasons.ts`                                  | out of scope. Not a documented GATHER type. Verify before documenting. |
| Unknown or misspelled type                                           | yes, silent         | harness b4: `colour`, `Integer` compile with no diagnostics                      | covered as a mistake                                                   |
| `list: true`                                                         | yes                 | `validateExtractedValue` list branch; harness `1, 2, 3` on integer list rejected | covered                                                                |
| `range: true`                                                        | yes                 | range branch; harness low/high                                                   | covered                                                                |
| `validate:` regex                                                    | yes                 | compiler 3210-3230; `validateField` pattern                                      | covered                                                                |
| `validate: enum(...)`                                                | yes                 | `parseGatherEnumValidation`                                                      | covered, brief                                                         |
| `validate:` regex on a numeric field                                 | yes, always fails   | harness: `validateField(12345, pattern)` returns the error                       | covered as a mistake                                                   |
| `validate: min()`, `max()`, `email()`, `pattern()`                   | no                  | No parser or runtime handler. Read as regex. Harness: `min(18)` rejects 25       | covered as a mistake. See G1                                           |
| `validation_process: CODE`                                           | gap                 | `validateField` `custom` passes; no runtime evaluator found                      | not covered. See G2                                                    |
| `validation_process: LLM`                                            | yes                 | `llm-field-validator.ts`; test line 250                                          | out of scope here (fail-open noted in file header)                     |
| `retry_prompt`, `max_retries` need `validate:`                       | yes                 | Harness b2 first run: `GATHER_VALIDATION_RULE_REQUIRED`                          | covered                                                                |
| Sensitive field messages hide the value                              | yes (code and test) | `quotedValue`, `gotValue`; test "SENSITIVE phone"                                | covered                                                                |
| External lookup validation                                           | yes                 | `applyLookupValidationToExtractedValues`                                         | out of scope. Article 8.4                                              |

## Example validation

| Article block                     | Classification  | Validation method                         | Result                                               | Warnings or errors                           | Action            |
| --------------------------------- | --------------- | ----------------------------------------- | ---------------------------------------------------- | -------------------------------------------- | ----------------- |
| Minimal (Newsletter_Signup)       | full-document   | `validateABL` (b0.abl)                    | pass                                                 | none                                         | kept              |
| Realistic (Warranty_Claim_Intake) | full-document   | `validateABL` (b1.abl)                    | pass                                                 | none                                         | kept              |
| Callback_Booking                  | full-document   | `validateABL` (b2.abl)                    | pass after removing `retry_prompt` from `party_size` | first run: `GATHER_VALIDATION_RULE_REQUIRED` | fixed, then pass  |
| Ranges and lists                  | section-snippet | wrapped in `Budget_Collector` (b5.abl)    | pass                                                 | none                                         | kept              |
| Rule on top of type               | section-snippet | wrapped in `Order_Lookup_Intake` (b3.abl) | pass                                                 | none                                         | kept              |
| Type probe (not in article)       | full-document   | b4.abl                                    | pass, no diagnostics                                 | none                                         | used for evidence |
| `(a+)+$` regex (not in article)   | full-document   | b-probe                                   | error: unsafe regex rejected at compile              | `AGENT_COMPILATION_FAILED`                   | used for evidence |

## Operational readiness map

| Requirement                                  | Evidence                                                                                                                       | Article coverage | Gap or action                                                 |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------- | ------------------------------------------------------------- |
| Runtime behavior verified                    | Real `validateExtractedValue`, `normalizeByType`, `validateField` run in harness; reasoning-executor and stage-resolution read | covered          | No live session. Run one before publication.                  |
| Required companion resources identified      | Examples use only `GATHER`, `COMPLETE`, `FLOW`, `MESSAGES`. No tools, agents, or auth.                                         | covered          | none                                                          |
| Referenced variables have sources            | "Variable sources" lists under each full example                                                                               | covered          | none                                                          |
| Fallback/failure/ambiguity behavior verified | Rejected value dropped, field stays missing, re-ask; `max_retries` trace                                                       | covered          | The behavior after `max_retries` is out of scope. Article 8.9 |
| Customer verification path defined           | Utterance table plus trace events                                                                                              | covered          | The date-direction row rests on code, not a run.              |
| Production readiness checklist included      | Yes                                                                                                                            | covered          | none                                                          |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                                       | Final score |
| ------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Removed an unverified "asks again without end" claim. Softened the list claim to the verified behavior. | 4           |
| Depth of conceptual explanation            | 4             | Added the five-step order and the where-it-runs table.                                                  | 4           |
| Readability and usability                  | 4             | Answer first; tables for types and reasons.                                                             | 4           |
| Coverage of examples                       | 4             | Two full documents plus three snippets, all validated.                                                  | 4           |
| Search and discovery quality               | 4             | Title and troubleshooting use customer wording ("rejected", "asks again").                              | 4           |
| Completeness of workflow and failure modes | 4             | Added mistakes, troubleshooting, trace checks.                                                          | 4           |
| Customer/partner self-service readiness    | 4             | No repo paths in the article.                                                                           | 4           |
| Scenario comprehensiveness                 | 4             | Enum, LLM, lookup, `CODE` scoped out or gapped with reasons.                                            | 4           |
| Article completeness                       | 4             | All template sections present.                                                                          | 4           |

**Gate result:** pass, with open gaps G1 and G2 flagged for the reviewer.

## Red-team coverage pass

| Question                                                                                               | Result            | Evidence or correction                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inspected parser, types, compiler, runtime, tests, examples?                                           | pass              | See source table.                                                                                                                                               |
| Searched neighbors (`validate`, `validation`, `intrinsic`, `retry_prompt`, `semantics`, entity types)? | pass              | Found `ENTITIES` and `entity_ref` path. Not covered here; belongs to the entities article.                                                                      |
| Every authoring style and default covered?                                                             | pass              | `GATHER` map form, FLOW list form, `validate`/`validation` alias, `options`, `semantics.enum_set` noted in enum scope-out.                                      |
| Optional helpers versus required config distinguished?                                                 | pass              | `validate:` is optional on top of `type`.                                                                                                                       |
| Free-form guidance path explained?                                                                     | pass              | Global GATHER: model words the re-ask.                                                                                                                          |
| Preferred pattern presented as the only one?                                                           | pass              | Type, rule, `enum`, entity, LLM all named.                                                                                                                      |
| Could a customer build this another way?                                                               | fix-needed, noted | `ENTITIES` with `entity_ref` gives the same checks. Add a one-line pointer once 7.x entities article is linked. Already linked via extract-common-entity-types. |
| Evidence if asked "Are you not considering all scenarios?"                                             | pass              | Variant map above.                                                                                                                                              |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                       | Required improvements                                                                                                      |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Real normalizer outputs, correct order of checks, honest limits on `validate:`. | Run one live session to confirm the date-direction row and the global GATHER re-ask. Resolve G1 and G2 before publication. |
| Senior content writer               | ready             | Answer first, two tables, short mistakes list.                                  | none                                                                                                                       |
| Product manager/customer enablement | needs-improvement | Verification table is actionable.                                               | Decide how to handle the numeric-bound gap: customers will search "minimum value". Article 8.7 should cover it.            |

Improvement applied: the production checklist now names the numeric-bound limit under Common mistakes. Residual items need the user's decision, not more code reading.

## Known gaps and ambiguity (needs user decision)

- **G1. Reference-doc mismatch.** `apps/studio/content/abl-reference/gather.mdx` and the `retirement-service-demo` example use `validate: min(18)`. In the code, a `validate:` string that is not `enum(...)` is compiled as a regular expression (`compiler.ts` ~3210-3230). The harness shows `min(18)` rejects the number 25. The article follows the code. Confirm with the product owner whether `min()`, `max()`, `email()`, and `pattern()` are planned, or whether the reference page is wrong.
- **G2. `validation_process: CODE`.** The compiler lowers it to type `custom`. `validateField` returns no error for `custom`, and no evaluator was found. The article does not mention `CODE`.
- **G3. Boolean word lists differ by stage.** The extraction stage accepts "ok", "sure", "decline", "not now". The later type check accepts only yes/no/true/false/y/n/1/0. The article states both.
- **G4. `ordinal` type** appears in the normalizer and reason codes but not in the parser's known entity types. Not documented.
