# Evidence: enforce-business-constraints

**Date:** 2026-11-20
**Topic:** 8.7 - How to enforce business rules with constraints
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/enforce-business-constraints-2026-11-20-draft.md`
**Release:** `hotfix_Artemis_1.10.1` (code repo read-only, branch head `856cf05a449`)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

- Compile: `validateABL` bundled with esbuild (`node v.mjs <file>`; two-file runs with `vm.mjs`). Files use prefix `87_`.
- Runtime-core: `compileABLtoIR`, `checkConstraintsCore`, `evaluateConditionDual` bundled as `c87.mjs`. `r87.mjs` compiles each example and evaluates its lowered constraints against sample session values.
- Not exercised: the full runtime executors (`constraint-checker.ts`, reasoning and flow executors). Their behavior is read from code. No live session was run.

## Source files inspected

| File                                                                                    | Purpose                                                                                                                              |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `packages/core/src/parser/agent-based-parser.ts` (8695-8900; 4130-4150)                 | `parseConstraints`, `parseConstraintRequirement`, ON_FAIL block keys, `STEP_CONSTRAINTS`.                                            |
| `packages/core/src/parser/constraint-before.ts`                                         | Inline `WHEN`, `BEFORE`, `IMPLIES` splitting and order.                                                                              |
| `packages/core/src/types/agent-based.ts` (1900-1975)                                    | `ConstraintRequirement`, `ConstraintOnFailBlock`, `ConstraintAction`.                                                                |
| `packages/compiler/src/platform/ir/compiler.ts` (3528-3760, 3860-3990, 4062-4200, 6296) | `compileConstraints`, W823, W824, `autoGuardConstraint`, operator validation, `parseOnFail`, step constraints lowering.              |
| `packages/compiler/src/platform/ir/validate-ir.ts` (945-970)                            | `tool_args` / `guardrail_builtins` warning.                                                                                          |
| `packages/compiler/src/platform/constructs/executors/constraint-executor.ts` (221-310)  | `checkConstraintsCore`: guardrails first, then constraints; WARN never fails.                                                        |
| `apps/runtime/src/services/execution/constraint-checker.ts`                             | `checkConstraints`, `checkFlatConstraints`, checkpoint checks, repeat cap, backtrack limit, handoff handling, ungathered-field skip. |
| `apps/runtime/src/services/execution/{reasoning-executor.ts, flow-step-executor.ts}`    | Call sites (13280, 15379, 23308, 28045, 30096; 22540, 25732, 28342, 29745).                                                          |
| `apps/runtime/src/services/execution/{profile-resolver.ts, prompt-builder.ts}`          | `stepAdditionalConstraints` belongs to behavior profiles, not `STEP_CONSTRAINTS`.                                                    |
| `packages/language-service/src/serialize-yaml.ts`                                       | Only consumer of `reasoning_zone.constraints`.                                                                                       |

## Scenario and variant map

| Scenario or variant                                                                  | Supported?            | Evidence                                                              | Article coverage                            |
| ------------------------------------------------------------------------------------ | --------------------- | --------------------------------------------------------------------- | ------------------------------------------- |
| `- REQUIRE`, `- WARN`, `- LIMIT`, `- RESTRICT` (colon optional)                      | yes                   | `CONSTRAINT_REQUIREMENT_PATTERN`; harness                             | covered                                     |
| RESTRICT negates the condition                                                       | yes                   | compiler 3680; harness `87_b`                                         | covered                                     |
| WARN is non-blocking                                                                 | yes                   | `constraint-executor.ts` 301; harness (warnings count 1, result pass) | covered                                     |
| Flat list (phase `always`) and named phase (label only, W823)                        | yes                   | parser 8760; W823; harness `87_p1`                                    | covered                                     |
| Plain bullets ignored, `PLAIN_CONSTRAINT_LIST_ITEMS`                                 | yes                   | harness `87_p3`                                                       | covered                                     |
| Inline `WHEN` and `WHEN:` line                                                       | yes                   | parser; harness `87_g`, `87_p9`                                       | covered                                     |
| `IMPLIES` lowers to `NOT (A) OR (B)`                                                 | yes                   | `lowerImplies`; harness IR                                            | covered                                     |
| `BEFORE calling <tool>`                                                              | yes                   | `parseConstraintBeforeTarget`; harness `87_b` checkpoint run          | covered                                     |
| `BEFORE returning results` / `respond`                                               | yes                   | same file                                                             | mentioned in mistakes only (one line)       |
| `BEFORE` after `WHEN` on one line                                                    | no (error)            | harness: `INVALID_CEL_SYNTAX`                                         | covered                                     |
| `BEFORE <free text>`                                                                 | no effect, `W824`     | harness `87_p7`                                                       | covered                                     |
| Invalid operator `=<`                                                                | error                 | harness `87_p2`                                                       | covered                                     |
| ON_FAIL inline: text, `RESPOND`, `BLOCK`, `ESCALATE`, `HANDOFF`, `GOTO`, `REDACT`    | yes                   | `parseOnFail`                                                         | covered except `REDACT` (see gap G3)        |
| ON_FAIL block: RESPOND, CLEAR, COLLECT, GOTO, RETRY, THEN, MAX_REPEATS, ON_EXHAUSTED | yes                   | parser 8880-8940; harness `87_b`, `87_f` IR                           | covered except `RETRY` and `THEN` (see G3)  |
| `{{_abl_constraint_fail_count}}`                                                     | yes                   | `constraint-checker.ts` 190                                           | covered                                     |
| ON_FAIL missing: empty respond                                                       | yes                   | harness IR `87_p6`, result FAIL with message ""                       | covered                                     |
| `HANDOFF` target must exist                                                          | yes                   | harness `INVALID_HANDOFF_TARGET`                                      | covered                                     |
| Auto guard: `IS NOT SET OR`, OR-only unguarded, explicit IS SET respected            | yes                   | `autoGuardConstraint`; harness conditions                             | covered                                     |
| Runtime skips rules on ungathered GATHER fields                                      | yes                   | `checkFlatConstraints` 703-770                                        | covered (guard paragraph, trace event)      |
| Numeric bounds via `REQUIRE x >= a AND x <= b`                                       | yes                   | harness `87_a` run                                                    | covered                                     |
| `tool_args` with `guardrail_builtins`                                                | yes                   | validate-ir 950; harness `87_t`, `87_t2`                              | covered                                     |
| Evaluation points                                                                    | yes                   | call-site list above                                                  | covered (table)                             |
| Completion held by broken rule                                                       | yes                   | `shouldReleaseWithheldCompletion`, scope `completion`                 | covered (one row)                           |
| Goto loop limit, `MAX_BACKTRACKS_PER_STEP = 3`                                       | yes                   | constraint-checker 54                                                 | covered                                     |
| SUPERVISOR with CONSTRAINTS                                                          | yes (compiles)        | harness `87_s1`: `UNDEFINED_CONDITION_VAR`                            | covered, runtime not verified (G2)          |
| `STEP_CONSTRAINTS` (reasoning step)                                                  | parsed, not enforced  | no runtime reader found; only language-service serializers            | covered as note (G1)                        |
| Behavior-profile step constraints (`stepAdditionalConstraints`)                      | yes (other construct) | `profile-resolver.ts` 802                                             | out of scope. Profiles are a separate topic |
| YAML-form constraints (`yaml-parser.ts`)                                             | gap                   | not inspected                                                         | out of scope                                |
| Guardrails (GUARDRAILS section)                                                      | yes                   | `checkConstraintsCore`                                                | out of scope. Article 8.10                  |

## Example validation

| Article block               | Classification  | Validation method                       | Result                                                                                   | Warnings or errors                                                                                              | Action           |
| --------------------------- | --------------- | --------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------- |
| Loan_Intake                 | full-document   | `validateABL` (`87_a`) + `r87.mjs` runs | pass                                                                                     | none                                                                                                            | kept             |
| Refund_Agent                | full-document   | `validateABL` (`87_b`) + runs           | pass after reordering `BEFORE`/`WHEN`, completing the tool, removing the missing handoff | earlier runs: `INVALID_CEL_SYNTAX`, `W560` (`BEFORE:` on its own line), `INVALID_HANDOFF_TARGET`, tool warnings | fixed, then none |
| WHEN / IMPLIES snippet      | section-snippet | wrapped in `Order_Limits` (`87_g`)      | pass                                                                                     | none                                                                                                            | kept             |
| Seat_Booking                | full-document   | `validateABL` (`87_f`) + IR check       | pass                                                                                     | none                                                                                                            | kept             |
| Payout_Agent                | full-document   | `validateABL` (`87_t`) + runs           | pass                                                                                     | none                                                                                                            | kept             |
| Payout_Agent without opt-in | not in article  | `87_t2`                                 | `GUARDRAIL_BUILTIN_NOT_BOUND`                                                            | expected                                                                                                        | cited            |

`r87.mjs` results (lowered IR, `checkConstraintsCore`): age 17 fails; amount 500 and 60000 fail with escalate; 25000 passes; nothing gathered passes; checkpoint run: standard 300 fails with `collect_field`, standard 150 passes, premium 300 passes; premium 6000 fails; standard 1500 passes with one warning; `tool_args.amount` 50 passes, 0 and 20000 fail; off-checkpoint 20000 passes; `gold` + 11 fails IMPLIES, `silver` + 11 passes.

## Operational readiness map

| Requirement                                  | Evidence                                                                            | Article coverage | Gap or action                                                 |
| -------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------- |
| Runtime behavior verified                    | `checkConstraintsCore` on compiled IR; executors read                               | covered          | No live session. Re-ask after `COLLECT`/`GOTO` rests on code. |
| Required companion resources identified      | Refund and Payout examples define their tools; no handoff targets in full documents | covered          | none                                                          |
| Referenced variables have sources            | "Variable sources" under each full example                                          | covered          | none                                                          |
| Fallback/failure/ambiguity behavior verified | Empty ON_FAIL, loop limits, MAX_REPEATS, unset data                                 | covered          | none                                                          |
| Customer verification path defined           | Utterance table and trace events                                                    | covered          | Trace event names read from code.                             |
| Production readiness checklist included      | Yes                                                                                 | covered          | none                                                          |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                   | Final score |
| ------------------------------------------ | ------------- | ------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Dropped unverified claims on `REDACT`, `RETRY`, `THEN`.             | 4           |
| Depth of conceptual explanation            | 4             | Keyword table, guard explanation, evaluation-point table.           | 4           |
| Readability and usability                  | 4             | Answer first; tables.                                               | 4           |
| Coverage of examples                       | 4             | Four full documents and one snippet, all validated and run.         | 4           |
| Search and discovery quality               | 4             | Troubleshooting uses symptoms ("says nothing", "rule never fires"). | 4           |
| Completeness of workflow and failure modes | 4             | Missing ON_FAIL, loops, unset data, unsupported BEFORE targets.     | 4           |
| Customer/partner self-service readiness    | 4             | No repo paths.                                                      | 4           |
| Scenario comprehensiveness                 | 4             | `RETRY`, `THEN`, `REDACT`, YAML form scoped out as gaps.            | 4           |
| Article completeness                       | 4             | All template sections.                                              | 4           |

**Gate result:** pass, with gaps G1 to G4 flagged.

## Red-team coverage pass

| Question                                                                                          | Result     | Evidence or correction                                   |
| ------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------- |
| Inspected parser, types, compiler, runtime, tests, examples?                                      | pass       | Source table. Existing constraint tests not read.        |
| Neighbors searched (`GUARDRAILS`, `STEP_CONSTRAINTS`, profile constraints, `ESCALATE`, `BEFORE`)? | pass       | Found the profile constraint path; scoped out.           |
| Every authoring style covered?                                                                    | fix-needed | YAML form not inspected (G4).                            |
| Optional vs required distinguished?                                                               | pass       | ON_FAIL stated as effectively required.                  |
| Free-form guidance path explained?                                                                | pass       | `STEP_CONSTRAINTS` and `LIMITATIONS` text are not rules. |
| Preferred pattern shown as the only one?                                                          | pass       | Guardrails and field types named as alternatives.        |
| Could a customer build this another way?                                                          | pass       | Type checks, guardrails, flow `ON_INPUT` conditions.     |
| Evidence for "all scenarios"?                                                                     | pass       | Variant map.                                             |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                | Required improvements                                                                            |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Senior platform architect           | needs-improvement | Real compiled IR evaluated against sample data; clear evaluation points. | Run one live session for the `COLLECT`/`GOTO` re-ask and the tool checkpoint. Confirm G1 and G2. |
| Senior content writer               | ready             | Answer first; keyword table; tables for actions and mistakes.            | none                                                                                             |
| Product manager/customer enablement | ready             | Answers the numeric-bound question from 8.1. Clear verification table.   | none                                                                                             |

## Known gaps and ambiguity

- **G1.** `STEP_CONSTRAINTS` is parsed and lowered to `reasoning_zone.constraints` (text). No runtime reader was found; only YAML serializers read it. The article says it is not evaluated. Confirm with engineering.
- **G2.** SUPERVISOR `CONSTRAINTS` compile. Runtime evaluation on a supervisor session was not checked.
- **G3.** ON_FAIL `REDACT`, `RETRY`, and `THEN` are parsed but not tested or shown. Left out of the article.
- **G4.** The YAML authoring form of constraints (`yaml-parser.ts`) was not inspected.
- **G5.** Defect candidate: `ESCALATE "text"` in an inline `ON_FAIL` keeps a leading quote in the reason (the parser strips only the trailing quote). The article tells authors to write it unquoted.
- **G6.** Defect candidate: a `REQUIRE` with no `ON_FAIL` blocks with an empty message and no warning.
