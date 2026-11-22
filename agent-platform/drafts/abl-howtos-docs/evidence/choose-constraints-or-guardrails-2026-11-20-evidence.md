# Evidence: choose-constraints-or-guardrails

**Date:** 2026-11-20
**Topic:** 8.10 - How to choose between constraints and guardrails
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/choose-constraints-or-guardrails-2026-11-20-draft.md`
**Release:** `hotfix_Artemis_1.10.1` (code repo read-only, branch head `856cf05a449`)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

`validateABL` from `packages/compiler/src/platform/ir/validate-ir.ts`, bundled with esbuild in the session scratchpad. Files use the prefix `810_`. No live runtime session was run. Runtime claims rest on code reading.

## Source files inspected

| File                                                                                                                           | Purpose                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `packages/core/src/parser/agent-based-parser.ts` (2005, 2077, 8694-8960, 14800-15060)                                          | `CONSTRAINTS` and `GUARDRAILS` parsers, `ON_FAIL` forms, guardrail properties, `GUARDRAIL_UNKNOWN_PROPERTY`.                   |
| `packages/core/src/types/agent-based.ts` (1900-2030)                                                                           | `ConstraintRequirement`, `ConstraintAction`, `GuardrailDefinition`.                                                            |
| `packages/compiler/src/platform/ir/compiler.ts` (3527-3720, 4062-4150)                                                         | Tier inference, `both` expansion, RESTRICT negation, WHEN implication, BEFORE lowering, W823, W824, auto-guard, `parseOnFail`. |
| `packages/compiler/src/platform/ir/guardrail-validator.ts`                                                                     | Allowed actions per kind, `fix` strategy warning, `maxReasks` bounds 1-5, kind-variable warning.                               |
| `packages/compiler/src/platform/ir/guardrail-action.ts`                                                                        | Action types, reask and fix fields.                                                                                            |
| `packages/compiler/src/platform/guardrails/cel-validation.ts`                                                                  | CEL syntax validation.                                                                                                         |
| `packages/compiler/src/platform/guardrails/tier1-evaluator.ts`, `tier3-evaluator.ts`, `pipeline.ts`, `strict-failmode-flag.ts` | CEL true means violation; fail-open on error; fail mode; tier ordering by priority.                                            |
| `packages/compiler/src/platform/constructs/executors/constraint-executor.ts`                                                   | Constraint check, guard semantics, checkpoint precondition, warning severity.                                                  |
| `apps/runtime/src/services/execution/constraint-checker.ts` (715-760)                                                          | Skips ungathered constraints except tool-call checkpoints; `constraint_guard_skipped`; guardrails routed to the pipeline.      |
| `apps/runtime/src/services/execution/{output-guardrails,flow-input-guardrails,guardrail-failure-policy,guardrail-decision}.ts` | Where guardrails run; fail-closed block messages.                                                                              |
| `apps/runtime/src/services/guardrails/trace-events.ts`                                                                         | Trace event names.                                                                                                             |
| `examples/guardrails/agents/{content_safety,pii_protection}.agent.abl`                                                         | Authoring examples.                                                                                                            |

## Scenario and variant map

| Scenario or variant                                                                    | Supported?            | Evidence                                                                                                                  | Article coverage                                                          |
| -------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `REQUIRE`, `LIMIT`, `RESTRICT`, `WARN`                                                 | yes                   | parser `CONSTRAINT_REQUIREMENT_PATTERN`; compiler RESTRICT negation                                                       | covered                                                                   |
| `WHEN` guard                                                                           | yes                   | compiler 3672                                                                                                             | covered                                                                   |
| `BEFORE calling <tool>` and `BEFORE returning results`                                 | yes                   | compiler 3679-3687                                                                                                        | covered                                                                   |
| Unsupported `BEFORE` text                                                              | yes (W824, no effect) | harness 810_e                                                                                                             | covered                                                                   |
| Named phases are labels                                                                | yes (W823)            | harness 810_h                                                                                                             | covered                                                                   |
| `ON_FAIL` string forms: RESPOND, ESCALATE, HANDOFF, BLOCK, REDACT, GOTO                | yes                   | `parseOnFail`                                                                                                             | covered                                                                   |
| `ON_FAIL` block: RESPOND, COLLECT, CLEAR, GOTO, RETRY, THEN, MAX_REPEATS, ON_EXHAUSTED | yes                   | parser 8880-8935                                                                                                          | covered by name; detail belongs to 8.7                                    |
| `HANDOFF` target must exist                                                            | yes                   | harness 810_v1 first run: `INVALID_HANDOFF_TARGET`                                                                        | covered                                                                   |
| Constraint skipped when a gathered field has no value                                  | yes                   | constraint-checker 730-760                                                                                                | covered                                                                   |
| Guardrail kinds input, output, both, tool_input, tool_output, handoff                  | yes                   | types; compiler `both` expansion                                                                                          | covered                                                                   |
| Three tiers: local CEL, model provider, LLM                                            | yes                   | compiler tier inference                                                                                                   | covered                                                                   |
| Guardrail CEL true means violation                                                     | yes                   | tier1-evaluator header                                                                                                    | covered                                                                   |
| Actions block, warn, redact, fix, reask, filter, escalate                              | yes                   | `ALLOWED_ACTIONS`                                                                                                         | covered                                                                   |
| `reask` output only; `fix`, `filter` not on handoff                                    | yes                   | harness 810_b                                                                                                             | covered                                                                   |
| `fix` needs `fix_strategy`                                                             | yes                   | harness 810_f                                                                                                             | covered                                                                   |
| `max_reasks` 1 to 5, default 2                                                         | yes                   | validator; `guardrail-action.ts`                                                                                          | covered                                                                   |
| `severity_actions`                                                                     | yes                   | compiler 3555-3570                                                                                                        | out of scope. Mentioned nowhere in the article; model and LLM tier detail |
| `streaming`, `streaming_interval`                                                      | yes                   | parser                                                                                                                    | out of scope                                                              |
| Kind-variable mismatch warning                                                         | yes                   | harness 810_c                                                                                                             | covered                                                                   |
| Invalid CEL syntax error                                                               | yes                   | harness 810_d                                                                                                             | covered                                                                   |
| Unknown guardrail property warning                                                     | yes                   | harness 810_g                                                                                                             | covered                                                                   |
| Fail-open on CEL error; fail-closed via policy `failMode`                              | yes                   | tier1 header; `guardrail-failure-policy.ts`                                                                               | covered                                                                   |
| `BEFORE` rule fails closed on evaluation error                                         | yes                   | `ConstraintCheckInfo.evaluationError` doc                                                                                 | covered                                                                   |
| Project-level policy guardrails (`PipelinePolicy.additionalGuardrails`)                | yes                   | `guardrail-failure-policy.ts`                                                                                             | mentioned as "project policy"; authoring surface out of scope             |
| Field `type` and `validate:`                                                           | yes                   | article 8.1 evidence                                                                                                      | covered by comparison and link                                            |
| `FLOW` `ON_INPUT`                                                                      | yes                   | prior articles                                                                                                            | covered by comparison                                                     |
| Reading `content` in a check                                                           | gap                   | compile comment says it needs `EXECUTION guardrail_builtins: true`; the validator comment says every kind binds `content` | not documented. See G2                                                    |

## Example validation

| Article block                                   | Classification  | Validation method                        | Result                                                          | Warnings or errors                                                                                                                                    | Action                                      |
| ----------------------------------------------- | --------------- | ---------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Refund_Assistant                                | full-document   | `validateABL` (810_a.abl)                | pass                                                            | none                                                                                                                                                  | kept                                        |
| Tier snippet (fix, tool_input, llm_check reask) | section-snippet | wrapped in Refund_Assistant (810_v2.abl) | pass                                                            | none                                                                                                                                                  | kept                                        |
| RESTRICT snippet                                | section-snippet | wrapped in Refund_Assistant (810_v1.abl) | pass after replacing `HANDOFF Refund_Supervisor` with `RESPOND` | first run `INVALID_HANDOFF_TARGET`                                                                                                                    | fixed                                       |
| Negative probes (not in article)                | full-document   | 810_b to 810_h                           | expected errors and warnings reproduced                         | `INVALID_GUARDRAIL_ACTION`, `GUARDRAIL_CHECK_WARNING`, `INVALID_CEL_SYNTAX`, `W824`, `GUARDRAIL_ACTION_WARNING`, `GUARDRAIL_UNKNOWN_PROPERTY`, `W823` | used in Common mistakes and Troubleshooting |

## Operational readiness map

| Requirement                                  | Evidence                                                                        | Article coverage | Gap or action                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------- |
| Runtime behavior verified                    | Code reading of constraint-checker, tier evaluators, pipeline                   | covered          | No live run. Run the verification table once before publication.           |
| Required companion resources identified      | `issue_refund` marked project-local; no handoff target used in the full example | covered          | none                                                                       |
| Referenced variables have sources            | "Variable sources" list; `input`/`output` bound by runtime                      | covered          | none                                                                       |
| Fallback/failure/ambiguity behavior verified | Fail-open and fail-closed table                                                 | covered          | Policy `failMode` authoring is outside ABL. Not verified in a project.     |
| Customer verification path defined           | Utterance table plus trace events                                               | covered          | The escalation outcome of a failed `BEFORE` rule rests on code, not a run. |
| Production readiness checklist included      | Yes                                                                             | covered          | none                                                                       |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                                                     | Final score |
| ------------------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Priority wording corrected after reading `pipeline.ts`. BEFORE exception added after reading `constraint-checker.ts`. | 4           |
| Depth of conceptual explanation            | 4             | Direction-of-condition and violation-outcome comparisons lead the article.                                            | 4           |
| Readability and usability                  | 4             | Comparison tables and one decision table.                                                                             | 4           |
| Coverage of examples                       | 4             | One full document, two snippets, all validated.                                                                       | 4           |
| Search and discovery quality               | 4             | Title and headings use "constraints" and "guardrails" as customers do.                                                | 4           |
| Completeness of workflow and failure modes | 4             | Fail-open and fail-closed table; troubleshooting.                                                                     | 4           |
| Customer/partner self-service readiness    | 4             | No repo paths in the article.                                                                                         | 4           |
| Scenario comprehensiveness                 | 4             | `severity_actions`, streaming, and `content` scoped out or gapped.                                                    | 4           |
| Article completeness                       | 4             | All template sections present, plus a decision table.                                                                 | 4           |

**Gate result:** pass, with open gaps G1 to G3.

## Red-team coverage pass

| Question                                                     | Result            | Evidence or correction                                                                                                   |
| ------------------------------------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Parser, types, compiler, runtime, tests, examples inspected? | pass              | Source table. No test files were read for this topic. See G3.                                                            |
| Neighboring constructs searched?                             | pass              | `LIMITATIONS` (prompt only, not enforced), `ESCALATE` triggers, `HOOKS` not covered.                                     |
| Every authoring style and fallback covered?                  | pass              | Constraint forms, guardrail tiers, defaults (`output`, `warn`, 100).                                                     |
| Optional versus required separated?                          | pass              | Guardrails and constraints are both optional.                                                                            |
| Free-form guidance path explained?                           | pass              | `LIMITATIONS` and persona text are not enforcement. The article says rules must be constraints.                          |
| Preferred pattern presented as the only one?                 | pass              | Four features compared; ESCALATE triggers named in related links only.                                                   |
| Could a customer solve it another way?                       | fix-needed, noted | The `ESCALATE:` section triggers can also stop a refund by amount. Not compared here. Add one row after 8.7 is reviewed. |
| Evidence if asked "Are you not considering all scenarios?"   | pass              | Variant map.                                                                                                             |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                  | Required improvements                                                             |
| ----------------------------------- | ----------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Condition-direction and fail-mode contrasts are accurate and rare in docs. | Run a live session for the BEFORE-tool block and the fail-open claim. Resolve G1. |
| Senior content writer               | ready             | Answer first, decision table, short rules.                                 | none                                                                              |
| Product manager/customer enablement | ready             | Customers get a clear rule of thumb and a combined example.                | none                                                                              |

## Known gaps and ambiguity

- **G1. Live behavior not run.** The "tool is not called above 500" and "local check passes on error" claims come from code, not a session.
- **G2. `content` variable.** Two code comments disagree on whether `content` works in a check without `guardrail_builtins: true`. The article avoids `content`.
- **G3. Tests not read.** The guardrail and constraint test suites were not inspected for this article. Add them before the next refresh.
- **G4. `ESCALATE:` triggers** are a fifth way to stop on a business condition. Not compared.
