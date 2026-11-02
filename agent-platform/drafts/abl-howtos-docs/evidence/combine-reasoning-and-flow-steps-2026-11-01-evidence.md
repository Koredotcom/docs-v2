# Evidence: combine-reasoning-and-flow-steps

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/combine-reasoning-and-flow-steps.md`
**Topic:** 1.5 - How to combine reasoning steps with deterministic FLOW steps
**Workflow:** Refresh against `release_Artemis_1.9.0` (HEAD `9b7b268cc61`). Previous scan: `hotfix_Artemis_1.8.1`.

**Validation harness:** `validateABL()` from `packages/compiler/src/platform/ir/validate-ir.ts` at `release_Artemis_1.9.0`. It runs the parser, `compileABLtoIR`, and the IR validators. Command: `node <scratchpad>/harness/validate.mjs <files>`, run from `/tmp`. Scratch files: `/private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/9ea46136-0cae-4156-8653-b15e7af1a4e3/scratchpad/t15`. The code repo was not modified.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (post-parse FLOW check ~2200-2222; `MODE:` branch ~1843; `CONTEXT_UPDATES` case ~3994-4035; `W498` ~4106) | `E200`, `E201`, `W200`, `W201` unchanged. `E560` for `MODE:`. `CONTEXT_UPDATES` now parses `true`, `false`, or a YAML list. `W498` fires for a step-level `PERSONA`. |
| `packages/core/src/diagnostics/registry.data.ts` (`E200`, `E201`, `W200`, `W201`, `E560`, `W217`, `W218`, `W498`, `FLOW_CONTEXT_UPDATES_INVALID`) | Messages and meaning. `W217`, `W218`, `W498`, `FLOW_CONTEXT_UPDATES_INVALID` are new since 1.8.1. |
| `packages/core/src/types/agent-based.ts` (`FlowStep` ~966) | `contextUpdates?: boolean \| string[]`. |
| `packages/core/src/utils/reasoning-context-updates.ts` | `normalizeReasoningContextUpdates`: boolean passes, a list of non-empty strings is deduplicated and sorted, anything else is invalid. |
| `packages/compiler/src/platform/ir/compiler.ts` (~1455-1480 `REASONING_CONTEXT_UPDATES_INVALID`; ~5649-5660 `reasoning_zone`) | `reasoning_zone`: `goal`, `available_tools`, `context_updates`, `exit_when = exitWhen ?? completeWhen`, `max_turns = maxTurns ?? 10`, `constraints`. A list needs a `REASONING: true` step and declared `MEMORY.session` names. A list sets `ir_version` 1.3. |
| `apps/runtime/src/services/execution/reasoning-context-write-policy.ts` | `false` and `[]` disable the model write tool. A non-empty list enables it and limits the keys. |
| `apps/runtime/src/services/execution/prompt-builder.ts` (~4815-4850) | The exit-state fields offered to the model are the `EXIT_WHEN` references that pass the list filter. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (reasoning zone ~23690-24420; `recordFailedFlowStepAttempt` 2055; `transitionIfStepAttemptsExhausted` 12480) | Hold, exit, and advance logic. `reasoning_zone_then` at ~24318. Exit needs `exitMet`, verified authority, and `step.then`. `MAX_ATTEMPTS` counts only when `ON_EXHAUSTED` is set. Step prompt order: persona, limitations, behavior profiles, goal, constraints, turn instruction. |
| `apps/runtime/src/services/execution/session-authority.ts` (`runtimeConditionAuthority` 361) | Authority verification returns verified at once unless the project declares explicit `MODEL_WRITERS`. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (`maxIterations` ~1280) | `MAX_TURNS` is the iteration cap of one reasoning execution. |
| `packages/compiler/src/platform/constructs/executors/reasoning-zone-empty-message-gate.ts` | Unchanged since 1.8.1. |
| `packages/compiler/src/__tests__/step-context-scope.test.ts` | Tests for list scope, invalid keys, and lists on deterministic steps. |
| `examples/ai4hc-payer-provider/agents/plan_information_agent.agent.abl` | Unchanged since 1.8.1. |

## Drift analysis 1.8.1 to 1.9.0

Over parser, types, diagnostics, compiler IR, and flow-step executor: `flow-step-executor.ts` +2709 / -567, `reasoning-executor.ts` +2898 lines changed, `agent-based-parser.ts` +1363. Most of the churn covers voice, realtime, GATHER, and secure input. The reasoning-step contract the article teaches is unchanged. The items below affect it.

| Drift item | Impact on article | Action |
| ---------- | ----------------- | ------ |
| `CONTEXT_UPDATES` accepts a list of session field names (ABLP-6070). New errors `FLOW_CONTEXT_UPDATES_INVALID` (parse) and `REASONING_CONTEXT_UPDATES_INVALID` (compile). | Article said only "true or false". | Updated the settings table. Added a validated variation. Added table and troubleshooting rows. |
| `W498`: `PERSONA` or `USE BEHAVIOR_PROFILE` inside a step is ignored with a warning (ABLP-6016). | Not mentioned. | Added a concept sentence, table row, mistake row, troubleshooting row. |
| `W217` (misplaced step header) and `W218` (property set twice in a step). | Not mentioned. | Added table rows, one troubleshooting row, and the verification step. |
| Reasoning step prompt includes agent `LIMITATIONS` (ABLP-6654) and matched behavior profiles (ABLP-6016). Persona and constraints were already present. | Article did not explain what the model receives. | Added "What the model receives in a reasoning step". |
| `STEP_CONSTRAINTS` is a reasoning step setting (parser key existed in 1.8.1). | Missing from settings table. | Added a row. |
| Context-write refusal wording at reasoning steps (ABLP-6501, ABLP-6063). | Runtime messages only. | No article change. |
| `FLOW_ON_RESULT_CONSUMED_INPUT_REFERENCE` warning and `turn_input` (ABLP-6464). | The tool-result example reads `claim_result.success`, not `input`. No warning. | No change. |
| Authority verification of `EXIT_WHEN` facts applies only when the project uses `MODEL_WRITERS`. | Article names `READONLY` only. | Kept `READONLY` guidance. `MODEL_WRITERS` recorded as a gap. |
| Reasoning zone enter trace event gains `contextUpdateFields` when a list is set. | Article names the events only. | No change. |
| `reasoning_zone_then`, hold with `EXIT_WHEN`, attempt exhaustion, the `step.then` requirement, `MAX_TURNS` default 10. | Re-verified against current code. | Added the `THEN` requirement for `EXIT_WHEN` (code evidence: exit branch needs `step.then`). |
| `E200`, `E201`, `W200`, `W201`, `E560` text and triggers. | Re-verified, unchanged. | None. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Deterministic step (`REASONING: false`) with `GATHER`, `SET`, `CALL`, `THEN` | yes | Parser, harness | covered |
| Reasoning step (`REASONING: true`) with `GOAL`, `THEN` | yes | Parser, harness | covered |
| Reasoning step with `EXIT_WHEN` hold | yes | `flow-step-executor.ts` ~24100-24200 | covered |
| `EXIT_WHEN` without `THEN` never advances | yes | Exit branch requires `step.then` | covered (settings table, troubleshooting) |
| `MAX_TURNS` | yes | `compiler.ts` default 10 | covered |
| `MAX_ATTEMPTS` with `ON_EXHAUSTED` | yes | `recordFailedFlowStepAttempt` | covered |
| `AVAILABLE_TOOLS` (including `[]`) | yes | Compiler | covered |
| `CONTEXT_UPDATES: true` or `false` | yes | `resolveReasoningContextWritePolicy` | covered |
| `CONTEXT_UPDATES: [field, ...]` and `[]` | yes (new) | Parser, compiler, policy, tests | covered (new validated variation) |
| `CONTEXT_UPDATES` list on a deterministic step or with an undeclared field | no (error) | Harness: `REASONING_CONTEXT_UPDATES_INVALID` | covered |
| `STEP_CONSTRAINTS` | yes | Parser, `buildReasoningZoneSurface` | covered (new row) |
| Step `PERSONA` or `USE BEHAVIOR_PROFILE` | no (`W498`) | Harness | covered |
| Agent behavior profiles applied to reasoning steps | yes | `buildReasoningStepProfilePromptSections` | out of scope: owned by topic 1.7 |
| `RESPOND` on a reasoning step as a turn instruction | yes | `flow-step-executor.ts` ~23828 | covered (prompt list) |
| `COMPLETE_WHEN` as `EXIT_WHEN` fallback | yes | `exit_when = exitWhen ?? completeWhen` | gap, unchanged: serves `GATHER` |
| Agent-level `MODE:` | no, `E560` | Parser, harness | covered |
| Missing `REASONING` | no, `E200` | Harness | covered |
| `REASONING: true` without any goal | no, `E201` | Harness | covered |
| Goal or tools on a deterministic step | warning `W200`, `W201` | Harness | covered |
| Misplaced step header, repeated step property | warning `W217`, `W218` | Registry | covered |
| Reason first, collect first, reason after tool result | yes | Harness | covered |
| Hybrid reasoning plus `GATHER` in one step | yes | Executor | gap, unchanged |
| `MODEL_WRITERS` on session fields and `EXIT_WHEN` authority | yes | `session-authority.ts` | gap: mentioned nowhere in the article |
| `PRESENT` on a reasoning step | yes | Empty-message gate | out of scope: presentation detail |
| Legacy `STEPS:` format | yes, exempt from the `REASONING` check | Parser `hasFlowSection` gate | out of scope: legacy |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Reasoning-zone executor close-read at 1.9.0: single execution with `THEN`; hold with `EXIT_WHEN`; list policy | covered | No live runtime run |
| Required companion resources identified | Single-agent examples; `get_claim_status` marked as a project-local assumption | covered | None |
| Referenced variables have sources | `policy_id`, `claim_type` gathered; `claim_summary` set; `urgency` written by the model (declared in `MEMORY.session`) or by the fallback `SET`; the `CONTEXT_UPDATES` list names `urgency` | covered | None |
| Fallback/failure/ambiguity behavior verified | `MAX_ATTEMPTS` plus `ON_EXHAUSTED`; tool `ON_SUCCESS` else and `ON_FAIL` | covered | None |
| Customer verification path defined | Six steps with named trace events and warning codes | covered | None |
| Production readiness checklist included | Present; adds `THEN` and `CONTEXT_UPDATES` list items | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (`Claim_Intake_Agent`) | full-document | `validate.mjs` (parse + compile + IR validators) | pass | none | kept byte for byte |
| Block 2 (`Claim_Triage_Agent`, `EXIT_WHEN`) | full-document | same | pass | none | kept byte for byte |
| Block 3 (`assess_urgency` with `CONTEXT_UPDATES: [urgency]`) | section-snippet | Wrapped in block 2 in place of its `assess_urgency` step (`wrap3.abl`) | pass | none | new |
| Block 4 (`Claim_Status_Agent`, tool then reasoning) | full-document | same as block 1 | pass | none | kept byte for byte |
| Negative: `CONTEXT_UPDATES: [nothing_here]` | negative check | same | `REASONING_CONTEXT_UPDATES_INVALID` | as expected | cited |
| Negative: `CONTEXT_UPDATES` list on a `REASONING: false` step | negative check | same | `REASONING_CONTEXT_UPDATES_INVALID` | as expected | cited |
| Negative: `CONTEXT_UPDATES: maybe` | negative check | same | `FLOW_CONTEXT_UPDATES_INVALID` and `REASONING_CONTEXT_UPDATES_INVALID` | as expected | cited |
| Negative: step `PERSONA` | negative check | same | `W498` | as expected | cited |
| Negative: `MODE:`, goal on deterministic step, reasoning step with no goal, step with no `REASONING` | negative check | same | `E560`, `E124`, `E201`, `E200`, `W200`, `W201` | as expected | cited |
| Negative: `EXIT_WHEN` with no `THEN` | negative check | same | compiles; only `W801` for the unpopulated variable | no compile signal | runtime behavior from code, stated in the article |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | See sources |
| Did I search synonyms and neighboring constructs? | pass | `EXIT_WHEN`, `COMPLETE_WHEN`, `MAX_TURNS`, `MAX_ATTEMPTS`, `ON_EXHAUSTED`, `PRESENT`, `BEHAVIOR`, `CONTEXT_UPDATES`, `STEP_CONSTRAINTS`, `PERSONA`, `MODEL_WRITERS` |
| Did I identify every supported style, default, and fallback? | pass | Defaults: `max_turns` 10, `context_updates` true when omitted, no `REASONING` default |
| Did I separate optional helpers from required configuration? | pass | `REASONING` required; every other setting optional |
| Did I explain how the reasoning layer uses free-form guidance? | pass | New prompt-parts list; `EXIT_WHEN` text goes to the prompt; model writes via the context tool |
| Did I avoid making one pattern sound like the only pattern? | pass | Three orderings, `EXIT_WHEN` hold, list scope |
| Could a customer build this another supported way? | pass with gaps | Hybrid `GATHER` plus reasoning and `MODEL_WRITERS` recorded as gaps |
| What evidence answers "are you not considering all scenarios"? | n/a | Scenario map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Exit rules, authority, list scope, and prompt order match the 1.9.0 executor | None |
| Senior content writer | ready | Rules table first, prompt list is short, unchanged examples | None |
| Product manager/customer enablement | ready | New warning and error codes are searchable; the `THEN` and `CONTEXT_UPDATES` pitfalls are in troubleshooting | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-verified every claim at 1.9.0; added code-backed rows | 5 |
| Depth of conceptual explanation | 4 | Added the prompt-parts list and persona scope | 5 |
| Readability and usability | 4 | Kept structure; one new variation | 5 |
| Coverage of examples | 4 | Added a validated `CONTEXT_UPDATES` list snippet | 5 |
| Search and discovery quality | 4 | Named `W498`, `W217`, `W218`, and both context-update error codes | 5 |
| Completeness of workflow and failure modes | 4 | Added `THEN` requirement and list-scope failure | 5 |
| Customer/partner self-service readiness | 4 | No repo paths in the article | 5 |
| Scenario comprehensiveness | 4 | `MODEL_WRITERS` and hybrid `GATHER` stay as recorded gaps | 4 |
| Article completeness | 5 | None | 5 |

**Minimum final score:** 4
**Gate result:** pass

## Doc discrepancies for human review

- The published minimal example (`assess_urgency`) still asks a clarification question with `THEN` and no `EXIT_WHEN`. The runtime advances without waiting for the answer. The article states this. Decide whether to edit the example goal. Carried over from 2026-10-19.
- `EXIT_WHEN` without `THEN` has no compile warning in 1.9.0. The runtime never advances. Consider a product warning.
- The agent-level `PERSONA` and `LIMITATIONS` apply to reasoning steps. Topic 1.7 owns behavior profiles. Check that 1.7 states the `W498` rule.

## Open questions

- Confirm in a live session that a model write of `urgency` exits the zone when `CONTEXT_UPDATES: [urgency]` is set. Code and unit tests indicate it does.
- Authority verification of `EXIT_WHEN` facts applies only when a project uses `MODEL_WRITERS`. The article does not document `MODEL_WRITERS`.
- No live runtime was executed. Runtime claims come from a close read of the 1.9.0 executor.
