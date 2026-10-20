# Evidence: combine-reasoning-and-flow-steps

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/combine-reasoning-and-flow-steps.md`
**Topic:** 1.5 - How to combine reasoning steps with deterministic FLOW steps
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`, verdict no-change)

**Validation harness:** `validateABL()` from `packages/compiler/src/platform/ir/validate-ir.ts` at `hotfix_Artemis_1.8.1`. It runs `parseAgentBasedABL`, `compileABLtoIR`, and all IR validators. The code came from a read-only `git archive` of `hotfix_Artemis_1.8.1` into a scratch directory outside the repo, run with `tsx` and a tsconfig path map. Command: `npx tsx v.ts <files>`. Scratch path: `/private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/b2bc1dfb-b8c5-45da-a8f1-9a78b40dd311/scratchpad/h`. The code repo was not modified.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (post-parse FLOW check ~1910-1930; step `case 'REASONING'` ~3484; `case 'GOAL'`; FLOW step key list ~975-1040) | `E200`, `E201`, `W200`, `W201`; `REASONING` is true only when the value lowercases to `true`; step keys `EXIT_WHEN`, `MAX_TURNS`, `MAX_ATTEMPTS`, `ON_EXHAUSTED`, `AVAILABLE_TOOLS`, `CONTEXT_UPDATES`, `BEHAVIOR`, `STEP_CONSTRAINTS`, `COMPLETE_WHEN`. |
| `packages/core/src/diagnostics/registry.data.ts` (`E200`, `E201`, `W200`, `W201`, `E560`) | Exact messages and meaning. `E560`: `MODE:` is rejected. |
| `packages/core/src/types/agent-based.ts` (`FlowStep` ~879-1000) | Typed step fields. `onInput` is commented "legacy"; `onResult`, `do`, `onSuccess`, `onFailure` exist. |
| `packages/compiler/src/platform/ir/compiler.ts` (~5252-5262) | `reasoning_zone`: `goal`, `available_tools`, `context_updates`, `exit_when = exitWhen ?? completeWhen`, `max_turns = maxTurns ?? 10`, `constraints`. |
| `packages/compiler/src/platform/constructs/executors/reasoning-zone-empty-message-gate.ts` | Step with `PRESENT` parks; step with a goal executes at once; step with neither parks. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (~21458-22260, `transitionIfStepAttemptsExhausted` ~11625, `recordFailedFlowStepAttempt` ~1909, `emitFlowStepAdvance` ~774) | Reasoning-zone execution: with `THEN` and no `EXIT_WHEN`, the flow advances after one reasoning execution (`reasoning_zone_then`). With `EXIT_WHEN`, the zone stays until the condition holds and the exit authority is verified. `MAX_ATTEMPTS` counts only when `ON_EXHAUSTED` is also set. Trace events `flow_step_exit`, `flow_transition`, `reasoning_zone_enter`, `reasoning_zone_exit`, `flow_step_attempts_exhausted`. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (`maxIterations`) | `MAX_TURNS` becomes the iteration cap of one reasoning execution. |
| `apps/runtime/src/services/execution/session-authority.ts`, `readonly-session-fields.ts`, `authored-facts.ts` | An `EXIT_WHEN` fact is refused only if it is model-readonly or runtime-source-bound. A plain declared session field and a literal flow `SET` are not. |
| `packages/compiler/src/platform/ir/compiler.ts` `validateSessionMemoryDeclarations` (~3258) | `W801`: soft warning for a session variable with no population source. A flow `SET` counts as a source. |
| `apps/runtime/src/services/debug-integration.ts:383` | `flow_step_enter` trace event exists. |
| `examples/ai4hc-payer-provider/agents/plan_information_agent.agent.abl` | Real use of `REASONING: true` with `EXIT_WHEN`, `MAX_TURNS`, `AVAILABLE_TOOLS: []`. |
| `apps/runtime/src/__tests__/execution/flow-reasoning-zone-exit-boundary.test.ts` | Test fixtures with and without `EXIT_WHEN`. |

## Drift since `hotfix_Artemis_1.4.4`

Over parser, types, and IR: 64 files, +18434 / -3017. `flow-step-executor.ts` changed by about 10400 lines.

| Drift item | Impact on article | Action |
| ---------- | ----------------- | ------ |
| `MODE:` is an error with code `E560` (in 1.4.4 it was an error with no code). | Article said "Do not use the old MODE pattern". The effect is a hard error. | Reworded and named `E560`. |
| `E200`, `E201`, `W200`, `W201` now have registry codes and messages. | Article described them in prose only. | Added a rules table and troubleshooting rows. |
| Runtime emits `reasoning_zone_then` as the advance condition when a reasoning step follows `THEN` without `EXIT_WHEN`. It is absent from the 1.4.4 executor. | Article never said how a reasoning step ends. | Added "When a reasoning step ends". |
| New `flow_step_enter` and `reasoning_zone_enter` and `reasoning_zone_exit` events in the verification path. | Article said "step enter and exit events". | Named the events. |
| `DO:` ordered actions, `BEHAVIOR:`, `SECURE_INPUT:`, `AWAIT_ATTACHMENT:`, `TRANSFORM:` and other new step keys. | Not needed for this topic. | Out of scope, recorded as gap. |
| New authored-gate-fact validators (`validate-authored-gate-facts.ts`) | Warns for gate facts the model can write when read by `EXIT_WHEN` and also written by a handoff return or delegate. | Not triggered by the examples. Mentioned `READONLY` caution only. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Deterministic step (`REASONING: false`) with `GATHER`, `SET`, `CALL`, `THEN` | yes | Parser, harness | covered |
| Reasoning step (`REASONING: true`) with `GOAL`, `THEN` | yes | Parser, harness | covered |
| Reasoning step with `EXIT_WHEN` hold | yes | Compiler `exit_when`, runtime exit loop, example agent | covered (new variation, validated) |
| `MAX_TURNS` | yes | `compiler.ts` default 10; `maxIterations` | covered |
| `MAX_ATTEMPTS` with `ON_EXHAUSTED` on a reasoning step | yes | `transitionIfStepAttemptsExhausted`, attempt kind `reasoning_turn` | covered |
| `AVAILABLE_TOOLS` (including `[]`) | yes | Compiler, example agent | covered |
| `CONTEXT_UPDATES: false` | yes | `allowsReasoningZoneContextUpdates` | covered |
| `COMPLETE_WHEN` as an `EXIT_WHEN` fallback | yes | `exit_when = exitWhen ?? completeWhen` | not covered: `COMPLETE_WHEN` mainly serves `GATHER`; gap noted |
| Agent-level `MODE:` | no, rejected with `E560` | Parser | covered |
| Missing `REASONING` | no, `E200` | Parser | covered |
| `REASONING: true` without any goal | no, `E201` | Parser | covered |
| Goal or tools on a deterministic step | warning `W200`, `W201` | Parser | covered |
| Reason first, collect first, reason after tool result | yes, compositional | Harness | covered (tool variation validated) |
| `PRESENT` on a reasoning step | yes | Empty-message gate | out of scope: presentation detail |
| Legacy `STEPS:` format | yes, exempt from the `REASONING` check | Parser `hasFlowSection` gate | out of scope: legacy |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Reasoning-zone executor close-read: single execution with `THEN`; hold with `EXIT_WHEN` | covered | No runtime run possible here |
| Required companion resources identified | Single-agent examples; `get_claim_status` marked as a project-local assumption | covered | None |
| Referenced variables have sources | `policy_id`, `claim_type` gathered; `claim_summary` set; `urgency` written by the model or by the fallback `SET` | covered | None |
| Fallback/failure/ambiguity behavior verified | `MAX_ATTEMPTS` plus `ON_EXHAUSTED`; tool `ON_SUCCESS` else and `ON_FAIL` | covered | None |
| Customer verification path defined | Seven steps with named trace events | covered | None |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (`Claim_Intake_Agent`) | full-document | `validateABL` | pass | none | kept byte for byte |
| Block 2 (`Claim_Triage_Agent`, `EXIT_WHEN`) | full-document | `validateABL` | pass | none | new |
| Block 3 (`Claim_Status_Agent`, tool then reasoning) | full-document | `validateABL` | pass | none (tool has a description, `effect: read_only`, and a parameter description) | new |
| Negative: flow with a deterministic step that has `GOAL` and `AVAILABLE_TOOLS`, a reasoning step with no goal, a step with no `REASONING`, no agent `GOAL` | negative check | `validateABL` | `E124`, `E201`, `E200` errors; `W200`, `W201` warnings | as expected | cited in the rules table |
| Negative: `MODE: reasoning` | negative check | `validateABL` | `E560` | as expected | cited |

Note: an `EXIT_WHEN` variable that nothing populates raises `W801`. Block 2 avoids it with the `default_urgency` fallback `SET`. Without that step the harness reported `W801` for `urgency`.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | See sources |
| Did I search synonyms and neighboring constructs? | pass | `EXIT_WHEN`, `COMPLETE_WHEN`, `MAX_TURNS`, `MAX_ATTEMPTS`, `ON_EXHAUSTED`, `PRESENT`, `BEHAVIOR`, `CONTEXT_UPDATES` |
| Did I identify every supported style, default, and fallback? | pass | Default `max_turns` 10, default `context_updates` true, no `REASONING` default |
| Did I separate optional helpers from required configuration? | pass | `REASONING` required; every other setting optional |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Goal is the model objective; `EXIT_WHEN` text is added to the prompt; model writes via `__set_context__` |
| Did I avoid making one pattern sound like the only pattern? | pass | Three orderings plus `EXIT_WHEN` hold |
| Could a customer build this another supported way? | fix applied | A hold with `GATHER` inside a reasoning step exists in code (hybrid). Recorded as a gap, not documented |
| What evidence answers "are you not considering all scenarios"? | n/a | Scenario map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Ending rules for reasoning steps match the executor; fallback path shown | None |
| Senior content writer | ready | Rules table first, then example, then mechanics; short sentences | None |
| Product manager/customer enablement | ready | Error codes and symptoms searchable; production checklist names `EXIT_WHEN` and `MAX_ATTEMPTS` | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Corrected the claim that a goal alone makes a step wait; added `E560`, `reasoning_zone_then` | 5 |
| Depth of conceptual explanation | 3 | Added "When a reasoning step ends" and settings table | 5 |
| Readability and usability | 4 | Rules table, shorter sentences | 5 |
| Coverage of examples | 3 | Added validated `EXIT_WHEN` and tool-result examples | 5 |
| Search and discovery quality | 4 | Named all codes and trace events | 5 |
| Completeness of workflow and failure modes | 3 | Added attempt limit, exhaustion fallback, tool failure | 5 |
| Customer/partner self-service readiness | 4 | No repo paths in the article | 5 |
| Scenario comprehensiveness | 3 | Covered `EXIT_WHEN`, `MAX_TURNS`, `MAX_ATTEMPTS`, `CONTEXT_UPDATES`, `AVAILABLE_TOOLS` | 4 |
| Article completeness | 5 | None | 5 |

**Minimum final score:** 4
**Gate result:** pass

## Doc discrepancies for human review

- The published minimal example asks the model to "Ask one brief clarification question if needed" in `assess_urgency`, which has `THEN` and no `EXIT_WHEN`. The runtime advances after one reasoning execution, so the flow does not wait for the answer. The code block is kept unchanged. The article now explains this and points to the `EXIT_WHEN` variation. Decide whether to edit the example goal.
- The previous evidence called the article "no-change". That conclusion missed the reasoning step exit rules.
- Runtime behavior (single execution, `EXIT_WHEN` hold, attempt exhaustion) comes from a close read of `flow-step-executor.ts`. No runtime was executed.

## Open questions

- Block 2 relies on the model writing `urgency` through `__set_context__`. Confirm with a live session that a plain declared `MEMORY.session` field exits the zone. The authority code indicates it does.
- Hybrid reasoning plus `GATHER` in one step is supported in the executor. The article does not document it.
