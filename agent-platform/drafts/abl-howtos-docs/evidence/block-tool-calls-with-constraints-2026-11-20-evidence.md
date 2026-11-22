# Evidence: block-tool-calls-with-constraints

**Date:** 2026-11-20
**Topic:** 8.8 - How to block tool calls when required data is missing
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/block-tool-calls-with-constraints-2026-11-20-draft.md`
**Release:** `hotfix_Artemis_1.10.1` (code repo read-only, branch head `856cf05a449`)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

- Compile: `validateABL` bundled with esbuild (`v.mjs <file>`). Files `88_a`, `88_b`, `88_c`, `88_d`, `88_e`, `88_f`, `88_g`, `88_h`, `88_i`.
- Runtime: the real `checkFlatConstraintsAtCheckpoint` and `executeConstraintViolation` (`constraint-checker.ts`) and `compileToResolvedAgent` (`execution/types.ts`), bundled as `88_rt.mjs`, driven by `88_p.mjs` with a minimal fake session (the same shape the repo's `ablp-3293` test uses).
- Not run: a live session through `reasoning-executor` or `flow-step-executor`, `tool-io-pipeline` (`process.before`), and the confirmation gate. Those rest on code reading.

## Source files inspected

| File                                                                                                                          | Purpose                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/core/src/parser/constraint-before.ts`                                                                               | `BEFORE` grammar: `calling`/`call`/`tool <name>`, `returning results`, unsupported.                                                                                                       |
| `packages/core/src/parser/agent-based-parser.ts` (8696-9010)                                                                  | `parseConstraints`, `parseConstraintRequirement`: REQUIRE, WARN, LIMIT, RESTRICT, WHEN, ON_FAIL inline and block (COLLECT, CLEAR, GOTO, RETRY, RESPOND, THEN, MAX_REPEATS, ON_EXHAUSTED). |
| `packages/core/src/types/agent-based.ts` (1912-1968)                                                                          | `ConstraintRequirement`, `ConstraintBeforeTarget`, `ConstraintAction`.                                                                                                                    |
| `packages/compiler/src/platform/ir/compiler.ts` (3620-3700, 4062-4200)                                                        | Constraint lowering (RESTRICT, WHEN, BEFORE guard, W823, W824), `parseOnFail`.                                                                                                            |
| `packages/compiler/src/platform/ir/validate-ir.ts` (900-1000, 2195-2260, 3145-3175)                                           | `tool_args` diagnostic, required-tool-param source check, confirmation warning.                                                                                                           |
| `packages/compiler/src/platform/constants.ts` (130-210)                                                                       | Default messages: `constraint_blocked`, `constraint_respond`, `tool_confirmation_request`.                                                                                                |
| `apps/runtime/src/services/execution/constraint-checker.ts`                                                                   | Checkpoint evaluation, `tool_args` injection, repeat cap, violation results.                                                                                                              |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (26810-26900, 29320-29360, 29780-29800, 30096-30140, 31105-31200) | Blocked-call path (`breakLoop`, `callerRecovery`), inline-gather gate, `process.before` outcomes, confirmation gate order.                                                                |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (7364-7392, 8283-8564, 14255-14300, 14700-14790, 28320-28370)     | FLOW CALL checkpoint, required-input guard, PARALLEL branch handling.                                                                                                                     |
| `apps/runtime/src/services/execution/tool-io-pipeline.ts`                                                                     | `process.before.require`, `on_fail` decisions, interactive default.                                                                                                                       |
| `packages/core/src/parser/tool-file-parser.ts` (855-935, 1075-1305)                                                           | `confirm`, `immutable`, `consent_*`, `process.before` and `on_fail` parsing.                                                                                                              |
| `apps/runtime/src/services/execution/tool-confirmation.ts`                                                                    | Snapshot, immutability, 5-minute TTL.                                                                                                                                                     |
| `apps/runtime/src/__tests__/execution/ablp-3293-tool-checkpoint-gather-deferral.test.ts`                                      | Pins that a missing field blocks the active tool checkpoint.                                                                                                                              |
| `examples/retirement-service-demo/tools/execute_contribution.tools.abl`                                                       | Real `process.before.require` and `confirm` usage.                                                                                                                                        |

## Scenario and variant map

| Scenario or variant                                                     | Supported?  | Evidence                                                                      | Article coverage                                                   |
| ----------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `REQUIRE cond BEFORE calling <tool>`                                    | yes         | Harness `88_a`: blocked or allowed per state                                  | covered                                                            |
| `BEFORE tool <name>` alias; `call`                                      | yes         | Regex in `constraint-before.ts`; `88_c` no warning                            | covered                                                            |
| `BEFORE returning results` (response checkpoint)                        | yes         | `constraint-before.ts`; harness "response checkpoint" allowed for a tool rule | out of scope: not a tool block. Named in the checklist only        |
| Unsupported `BEFORE` text                                               | yes (warns) | `88_c`: `W824`                                                                | covered                                                            |
| `RESTRICT`, `WARN`, `LIMIT` kinds                                       | yes         | Parser keyword map; harness `88_b` RESTRICT blocks, WARN allows               | covered (`LIMIT` not shown; same lowering as REQUIRE)              |
| `WHEN` clause, inline and indented                                      | yes         | Parser 8830-8880; harness `88_b`                                              | covered                                                            |
| `tool_args` built-in                                                    | yes, opt-in | `constraint-checker.ts` 296-305; harness `88_b`/`88_i`                        | covered                                                            |
| `ON_FAIL` RESPOND, BLOCK, ESCALATE, HANDOFF                             | yes         | `parseOnFail`; harness RESPOND, BLOCK, ESCALATE                               | covered. HANDOFF from code only                                    |
| `ESCALATE "text"` quote artifact                                        | yes         | Harness: reason `"Refund above 500 needs a supervisor`                        | covered as a mistake                                               |
| ON_FAIL block form COLLECT, GOTO, MAX_REPEATS, ON_EXHAUSTED             | yes         | Harness `88_b` repeats 1-4; `88_g` GOTO                                       | covered. CLEAR, RETRY, THEN not shown                              |
| FLOW `CALL` step gated                                                  | yes         | `flow-step-executor.ts` 28342; harness `88_g`                                 | covered                                                            |
| PARALLEL branch `CALL` gated, read-only check                           | yes         | `flow-step-executor.ts` 14272 comment                                         | covered (one sentence)                                             |
| `process.before.require` with `on_fail` forms                           | yes         | Parser; `tool-io-pipeline.ts`; compile `88_e`                                 | covered                                                            |
| Interactive default `reask`, async default `block`                      | yes         | `tool-io-pipeline.ts` 270-300, 810                                            | covered                                                            |
| `confirm: always / never / when_side_effects`, `immutable`, `consent_*` | yes         | Tool parser; `reasoning-executor.ts` 31160-31330                              | covered (`consent_*` named only in evidence)                       |
| Missing required tool input guard (FLOW CALL)                           | yes         | `flow-step-executor.ts` 7364, 8488                                            | covered (one paragraph)                                            |
| Reasoning-path guard for missing tool inputs                            | gap         | No equivalent found in `reasoning-executor.ts` besides `inline_gather`        | not claimed. See G2                                                |
| `inline_gather` gate (`GATHER_INCOMPLETE`)                              | yes         | `reasoning-executor.ts` 29326-29360; compile `88_h`                           | covered                                                            |
| `REQUIRED_TOOL_PARAM_WITHOUT_STRUCTURED_SOURCE` for handoff targets     | yes         | `validate-ir.ts` 2195-2260                                                    | out of scope: handoff context; belongs to context-passing articles |
| Guardrails `tool_input` kind                                            | yes         | `GuardrailDefinition.kind`                                                    | out of scope: article 8.10                                         |
| Auto-guard for constraints with checkpoints                             | no          | `compiler.ts`: skipped when checkpointed                                      | covered implicitly (`IS SET` is explicit)                          |

## Example validation

| Article block                              | Classification  | Validation method                                          | Result                                                  | Warnings or errors                                                                         | Action                                           |
| ------------------------------------------ | --------------- | ---------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| Refund_Agent                               | full-document   | `validateABL` (`88_a`) plus runtime checker, 7 cases       | pass                                                    | first draft warned `MISSING_PARAM_DESCRIPTION` and `SIDE_EFFECT_TOOL_WITHOUT_CONFIRMATION` | fixed: added `params` descriptions and `confirm` |
| Account_Change_Agent                       | full-document   | `validateABL` (`88_b`) plus checker, 7 cases and 4 repeats | pass                                                    | none                                                                                       | kept                                             |
| Order_Cancellation                         | full-document   | `validateABL` (`88_g`) plus checker                        | pass                                                    | first draft: `E203` for `WITH`/`AS` placement                                              | fixed: nested under `CALL:`                      |
| Transfer_Agent                             | full-document   | `validateABL` (`88_e`)                                     | pass                                                    | none                                                                                       | kept. Runtime path read only                     |
| `inline_gather` snippet                    | section-snippet | wrapped in `Inline_Gather_Probe` (`88_h`)                  | pass                                                    | none                                                                                       | kept                                             |
| Probes not in article                      | full-document   | `88_c`                                                     | pass with `W823`, `W824`, `GUARDRAIL_BUILTIN_NOT_BOUND` | expected                                                                                   | used for evidence                                |
| Probe `process.before` reading a bare name | full-document   | `88_f`                                                     | pass, no warning                                        | none                                                                                       | used for evidence                                |

## Runtime results (checker harness)

- `88_a`: nothing gathered blocks with the first message. Order and amount without confirmation blocks with the second. Amount 900 confirmed escalates. Amount 100 confirmed passes. A different tool and a response checkpoint pass.
- `88_b`: nothing gathered gives a collect action (fields `account_id`, `new_email`). Repeats 1 and 2 collect, 3 and 4 escalate with `Customer could not supply account details`. Region `eu` blocks without override and passes with it. `account_id == "ADMIN"` blocks with `BLOCK` text. A plus-address passes.
- `88_i`: with no `tool_args` supplied (builtins off), a rule reading `tool_args.region` blocks even when the value is `us`.
- `88_g`: an unconfirmed call returns the response and a `goto_step` action to `collect_details`.

## Operational readiness map

| Requirement                                  | Evidence                                                      | Article coverage | Gap or action                                    |
| -------------------------------------------- | ------------------------------------------------------------- | ---------------- | ------------------------------------------------ |
| Runtime behavior verified                    | Real checker run on four agents                               | covered          | No live loop run. See G1                         |
| Required companion resources identified      | Each tool is declared in the example and marked project-local | covered          | none                                             |
| Referenced variables have sources            | "Variable sources" under each example                         | covered          | none                                             |
| Fallback/failure/ambiguity behavior verified | Block, collect, escalate, repeat cap                          | covered          | `process.before` and confirmation from code only |
| Customer verification path defined           | Verification table and trace list                             | covered          | Trace event names rest on code, not a run        |
| Production readiness checklist included      | Yes                                                           | covered          | none                                             |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                                                  | Final score |
| ------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| Grounding in the code                      | 3             | Removed an unverified trace claim and an invented mistake row. Corrected `BEFORE` forms after reading the grammar. | 4           |
| Depth of conceptual explanation            | 4             | Added the four-mechanism table and order of checks.                                                                | 4           |
| Readability and usability                  | 4             | Tables for outcomes; short sections.                                                                               | 4           |
| Coverage of examples                       | 4             | Four full documents, one snippet, runtime results.                                                                 | 4           |
| Search and discovery quality               | 4             | Title and troubleshooting use "blocked", "refused", "missing".                                                     | 4           |
| Completeness of workflow and failure modes | 4             | Repeat cap, escalation, async default.                                                                             | 4           |
| Customer/partner self-service readiness    | 4             | No repo paths in the article.                                                                                      | 4           |
| Scenario comprehensiveness                 | 3             | Added `process.before`, `confirm`, `inline_gather`, FLOW, PARALLEL. Guardrails and handoff-param check scoped out. | 4           |
| Article completeness                       | 4             | All template sections.                                                                                             | 4           |

**Gate result:** pass, with open gaps G1-G3.

## Red-team coverage pass

| Question                                                                                                            | Result | Evidence or correction                                                                 |
| ------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------- |
| Inspected parser, types, compiler, runtime, tests, examples?                                                        | pass   | See source table.                                                                      |
| Searched neighbors (`BEFORE`, `REQUIRE`, `process.before`, `confirm`, `inline_gather`, `precondition`, guardrails)? | pass   | Found the FLOW required-input guard and `inline_gather`.                               |
| Every authoring style and default covered?                                                                          | pass   | `calling`, `call`, `tool`; ON_FAIL inline and block; interactive versus async default. |
| Optional helpers versus required config distinguished?                                                              | pass   | `guardrail_builtins` is required for `tool_args`.                                      |
| Reasoning-layer behavior explained?                                                                                 | pass   | Blocked call ends the turn; model does not reword.                                     |
| Preferred pattern presented as the only one?                                                                        | pass   | Four mechanisms compared.                                                              |
| Could a customer build this another way?                                                                            | pass   | Guardrails and COMPLETE gating exist; 8.10 covers guardrails.                          |
| Evidence if asked "Are you not considering all scenarios?"                                                          | pass   | Variant map.                                                                           |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                               | Required improvements                                                                                                 |
| ----------------------------------- | ----------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Real checker output, order of checks, async default.                    | Run a live session to confirm trace event names and that `ON_FAIL` text reaches the customer on voice. Resolve G1-G3. |
| Senior content writer               | ready             | Comparison table first, outcomes tabulated, no repo paths.              | none                                                                                                                  |
| Product manager/customer enablement | ready             | Clear choice between four mechanisms; verification table is actionable. | none                                                                                                                  |

## Known gaps and ambiguity

- **G1.** No live reasoning-loop run. The blocked-call result (`breakLoop`, authored text) is read from `executeConstraintViolationInLoop`, not executed.
- **G2.** The missing-required-input guard exists in FLOW `CALL` (`missingRequiredToolParams`). I found no matching guard for a model tool call in a reasoning agent, other than `inline_gather`. A reasoning agent relies on constraints or `inline_gather`. Confirm with engineering.
- **G3.** `ON_FAIL: ESCALATE "text"` leaves a stray opening quote in the reason (harness result). It looks like a parser quirk. Confirm whether to document the workaround or file a bug.
- **G4.** Trace event names `constraint_check`, `process_before_require`, `validation_max_retries` are taken from code, not from a recorded trace.
