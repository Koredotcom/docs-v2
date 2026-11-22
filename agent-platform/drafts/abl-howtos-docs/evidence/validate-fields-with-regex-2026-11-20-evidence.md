# Evidence: validate-fields-with-regex

**Date:** 2026-11-20
**Topic:** 8.3 - How to validate fields with regex or custom patterns
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/validate-fields-with-regex-2026-11-20-draft.md`
**Release:** `hotfix_Artemis_1.10.1` (code repo read-only, branch head `856cf05a449`)
**Workflow:** New article. Builds on 8.1 harness (scratchpad `h/`, files prefixed `83_`).

## Validation harness

- Compile: `validateABL` bundle (`node v.mjs 83_<name>.abl`).
- Runtime: `validateField` (`constructs/utils.ts`) and `runPatternStage` (`ner-stages/stage-pattern.ts`) bundled in `rt.mjs`, with the real RE2 regex modules (the earlier logger stub is kept). No live session.

## Source files inspected

| File                                                                                        | Purpose                                                                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/core/src/parser/agent-based-parser.ts` (509-546, 7140-7200, 7620-7640, 3200-3225) | `validate`/`validation`, `extraction_pattern`, `extraction_group`, `strategy` parsing. No unescape of quoted text. `E170` for bad strategy. |
| `packages/compiler/src/platform/ir/compiler.ts` (2800-2880, 3225-3290, 6425-6445)           | `validateRegexAtCompile`, `validateExtractionPatternAtCompile`, `resolveValidationType`, lowering, JSON-schema `pattern`.                   |
| `packages/compiler/src/platform/ir/regex-safety.ts`                                         | 500-char limit, nested-quantifier detectors, RE2 compile check.                                                                             |
| `packages/compiler/src/platform/security/regex/policies.ts`                                 | `EXTRACTION_PATTERN` policy: 500 pattern, 10,000 input, RE2 only.                                                                           |
| `packages/compiler/src/platform/constructs/utils.ts` (721-760)                              | `validateField` pattern case: text only, unanchored search.                                                                                 |
| `apps/runtime/src/services/execution/ner-stages/stage-pattern.ts`                           | Pattern stage: group selection, fallback to group 0, built-in email/phone patterns, skips unsafe or long patterns.                          |
| `apps/runtime/src/services/execution/ner-strategy.ts`                                       | `pattern` = pattern stage only; `hybrid` = `auto`.                                                                                          |
| `apps/runtime/src/services/execution/ner-stages/stage-resolution.ts` (328-340)              | Authored rule enforced after type check.                                                                                                    |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (27860-28000)                   | Retry counters, `validation_max_retries`.                                                                                                   |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (17832, 30781)                  | Entity `PATTERN` used as extraction pattern.                                                                                                |
| `apps/runtime/src/__tests__/execution/ablp-5713-gather-reask-reason-copy.test.ts`           | `retry_prompt` with `validate` replaces re-ask.                                                                                             |

## Scenario and variant map

| Scenario or variant                                     | Supported?           | Evidence                                                                                                         | Article coverage                          |
| ------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `validate: "regex"` on string field                     | yes                  | Compile pass; `validateField` run                                                                                | covered                                   |
| `validation` alias for `validate`                       | yes                  | `getGatherValidationRule`                                                                                        | covered in 8.1; not repeated              |
| Unanchored match accepts substring                      | yes                  | Harness: `xx AB123456 yy` passes `[A-Z]{2}[0-9]{6}`                                                              | covered                                   |
| Case-sensitive, `(?i)` works                            | yes                  | Harness                                                                                                          | covered                                   |
| Trailing newline fails `$`                              | yes                  | Harness                                                                                                          | covered                                   |
| Regex on numeric/boolean value fails always             | yes                  | Harness: number 12345 fails; compile gives no warning                                                            | covered                                   |
| Lookahead, backreference, bad syntax                    | rejected at compile  | Probes `83_la`, `83_bad`                                                                                         | covered                                   |
| Nested quantifier                                       | rejected at compile  | Probes `83_ex` (extraction_pattern) and the 8.1 `(a+)+$` validate probe                                          | covered                                   |
| Pattern over 500 chars                                  | rejected at compile  | Probe `83_long`                                                                                                  | covered                                   |
| `validation_process: REGEX` explicit                    | yes                  | Probe `83_vp` pass; default type is `pattern`                                                                    | covered                                   |
| `validation_process: LLM`                               | yes                  | `resolveValidationType`                                                                                          | out of scope, noted                       |
| `validation_process: CODE`                              | gap                  | Not enforced (see 8.1 G2)                                                                                        | not covered                               |
| `retry_prompt`, `max_retries`                           | yes                  | Compile rule; reasoning-executor                                                                                 | covered                                   |
| `extraction_pattern`                                    | yes                  | `runPatternStage` runs                                                                                           | covered                                   |
| `extraction_group` incl. out-of-range fallback          | yes                  | Harness: group 5 falls back to whole match                                                                       | covered                                   |
| `strategy: pattern` and valid strategy list             | yes                  | `E170` probe `83_strat`                                                                                          | covered                                   |
| Multiple matches in one message                         | yes (two candidates) | Harness                                                                                                          | not stated; winner selection not verified |
| ENTITIES `PATTERN` with `entity_ref`                    | yes                  | Compile pass (`83_b3`); flow-step 17832, 30781                                                                   | covered, FLOW path verified only          |
| `TYPE: pattern` entity enforcing the pattern in GATHER  | gap                  | `validateExtractedValue` has no `pattern` case; enforcement exists only in `validateIntrinsic` (entity pipeline) | article says it does not reject by itself |
| Sensitive hides value                                   | yes                  | 8.1 evidence                                                                                                     | pointer only                              |
| `min()`, `max()`, `email()`, `pattern()` forms          | no                   | See 8.1 G1                                                                                                       | covered as a mistake                      |
| Regex `validate` sent to extraction schema as `pattern` | yes                  | `flow-step-executor.ts` 17440                                                                                    | not covered (internal)                    |

## Example validation

| Article block                 | Classification  | Validation method                                                    | Result    | Warnings or errors | Action                                           |
| ----------------------------- | --------------- | -------------------------------------------------------------------- | --------- | ------------------ | ------------------------------------------------ |
| Minimal (Order_Status_Intake) | full-document   | `validateABL` `83_b1.abl`                                            | pass      | none               | kept                                             |
| Ticket_Lookup                 | full-document   | `83_b2.abl`                                                          | pass      | none               | kept. Extraction checked with `runPatternStage`. |
| Capture group                 | section-snippet | wrapped `83_b4.abl`                                                  | pass      | none               | kept. Extraction checked.                        |
| ENTITIES share                | section-snippet | wrapped `83_b3.abl`                                                  | pass      | none               | kept                                             |
| Probes (not in article)       | full-document   | `83_la`, `83_bad`, `83_long`, `83_ex`, `83_strat`, `83_vp`, `83_num` | as mapped | expected errors    | evidence only                                    |

## Operational readiness map

| Requirement                                  | Evidence                                                              | Article coverage | Gap or action                                          |
| -------------------------------------------- | --------------------------------------------------------------------- | ---------------- | ------------------------------------------------------ |
| Runtime behavior verified                    | `validateField`, `runPatternStage` run on real code                   | covered          | No live session.                                       |
| Required companion resources identified      | None needed; the minimal agent notes the lookup tool is project-local | covered          | none                                                   |
| Referenced variables have sources            | Listed per example                                                    | covered          | none                                                   |
| Fallback/failure/ambiguity behavior verified | Reject, re-ask, no-match, group fallback                              | covered          | Behavior after `max_retries` belongs to 8.9.           |
| Customer verification path defined           | Utterance table, trace items                                          | covered          | Trace names `pattern` stage from code, not from a run. |
| Production readiness checklist included      | Yes                                                                   | covered          | none                                                   |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                              | Final score |
| ------------------------------------------ | ------------- | -------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Removed claims not run; marked ENTITIES path as FLOW-verified. | 4           |
| Depth of conceptual explanation            | 4             | Two-setting table, three rules first.                          | 4           |
| Readability and usability                  | 4             | Answer first.                                                  | 4           |
| Coverage of examples                       | 4             | Two full documents, two snippets, all validated.               | 4           |
| Search and discovery quality               | 4             | Customer wording in troubleshooting.                           | 4           |
| Completeness of workflow and failure modes | 4             | Compile limits and runtime skips listed.                       | 4           |
| Customer/partner self-service readiness    | 4             | No repo paths.                                                 | 4           |
| Scenario comprehensiveness                 | 4             | LLM and CODE scoped out with reasons.                          | 4           |
| Article completeness                       | 4             | All template sections.                                         | 4           |

**Gate result:** pass, with open gaps below.

## Red-team coverage pass

| Question                                                                                                  | Result | Evidence or correction                                                    |
| --------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------- |
| Parser, types, compiler, runtime, tests, examples inspected?                                              | pass   | Source table.                                                             |
| Neighbor constructs searched (`validation_process`, `pii_pattern_ref`, `TYPE: pattern`, guardrail regex)? | pass   | PII patterns and guardrail regex are separate surfaces; not covered here. |
| Authoring styles and defaults covered?                                                                    | pass   | Global map form, FLOW list form, ENTITIES.                                |
| Another way to build it?                                                                                  | pass   | Type, `enum(...)`, LLM validation named in 8.1 and here.                  |
| Evidence for "all scenarios?"                                                                             | pass   | Map above.                                                                |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                       | Required improvements                                                            |
| ----------------------------------- | ----------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Real engine behavior, honest limits.                            | Live session to confirm pattern-stage trace and the global-GATHER ENTITIES path. |
| Senior content writer               | ready             | Short, answer first.                                            | none                                                                             |
| Product manager/customer enablement | ready             | Anchoring and number-field mistakes are the top support causes. | none                                                                             |

## Known gaps (need decision)

- **G1.** Unverified: ENTITIES `PATTERN` extraction in a top-level (reasoning) GATHER. Verified only in the FLOW path.
- **G2.** `TYPE: pattern` entity enforcement is not applied in the GATHER type check. Article says so.
- **G3.** Reference docs list `pattern(regex)`; code does not implement it (same as 8.1 G1).
- **G4.** Backslash handling: ABL keeps text as written, so `\d` is correct. Confirm in Studio that the editor does not rewrite it.
