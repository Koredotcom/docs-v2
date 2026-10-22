# Evidence: choose-reasoning-agent-or-flow

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/choose-reasoning-agent-or-flow.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/choose-reasoning-agent-or-flow-2026-10-19-review.md`
**Topic:** 1.1 - How to choose between a reasoning agent and a FLOW-based agent
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. The previous refresh used `hotfix_Artemis_1.4.4`.
**Verdict:** update-needed

## Validation harness

A real parse and compile harness was built outside the code repo, in the session scratchpad. It copies `packages/core`, `packages/compiler`, and the workspace packages they import into a scratch folder. A Node loader transpiles TypeScript with `esbuild`, and `npm` installs the third-party dependencies. It calls `validateABL` from `packages/compiler/src/platform/ir/validate-ir.ts`, which runs `parseAgentBasedABL`, `compileABLtoIR`, and the IR validators. Sanity check: a deliberately broken file produced errors and warnings, so the harness reports problems. The code repo was not modified and no branch was switched.

Close reading covered runtime paths, because the runtime services were not started.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (FLOW parser, step properties `REASONING`, `GOAL`, `EXIT_WHEN`, `MAX_TURNS`, `MAX_ATTEMPTS`, `ON_EXHAUSTED`, `GATHER`) | Syntax and the parse error for a missing `REASONING` |
| `packages/compiler/src/platform/ir/compiler.ts` (`reasoning_zone` lowering near line 5249) | `goal: step.goal ?? ''`, `exit_when: step.exitWhen ?? step.completeWhen`, `max_turns: step.maxTurns ?? 10` |
| `packages/compiler/src/platform/ir/schema.ts` (`ReasoningZoneIR`, `FlowStep`) | Typed fields and defaults |
| `packages/compiler/src/platform/ir/validate-ir.ts` (attempt contract), `validate-field-refs.ts` (`exit_when` condition references) | `INVALID_FLOW_STEP_ATTEMPT_CONTRACT`, undefined-variable warnings |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (reasoning zone block near lines 21400 to 22300, `transitionIfStepAttemptsExhausted`, `recordFailedFlowStepAttempt`, `parseFlowTerminalTarget`) | Exit evaluation, attempts, terminal targets |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (`maxIterations`, lines 10640 and 15832) | Meaning of `MAX_TURNS` |
| `apps/runtime/src/services/pipeline/null-safe-eval.ts`, `packages/compiler/src/platform/constructs/dual-evaluator.ts` | Expression evaluation of `EXIT_WHEN` |
| `apps/runtime/src/services/execution/session-authority.ts` (`runtimeConditionAuthority`) | Exit conditions on model-written values |
| `examples/ai4hc-payer-provider/agents/claim_information_agent.agent.abl` | Real use of `REASONING: true` with `GATHER`, `EXIT_WHEN: member_id IS SET`, `MAX_TURNS: 3` |
| `packages/core/src/types/agent-based.ts` (tool type `workflow`, line 1128) | Workflow tools exist |

Tests and examples inspected: the `ai4hc-payer-provider` example, `packages/compiler/src/platform/ir/validate-authored-gate-facts.ts` (header comment on exit gates), and `packages/compiler/src/__tests__/constraint-control-flow.test.ts` (ESCALATE and GOTO forms).

## Drift analysis (1.4.4 to 1.8.1)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| Parser, compiler, runtime size | `agent-based-parser.ts` +7290 lines changed, `compiler.ts` +1984, `flow-step-executor.ts` +10378, `routing-executor.ts` +15901 | All claims re-verified against current code, not only the diff |
| `EXIT_WHEN` prompt instruction | In 1.4.4 the runtime always told the model "Exit condition: ...". In 1.8.1 it adds the line only when the expression reads session variables (`flow-step-executor.ts` near line 21808) | A plain-language `EXIT_WHEN` is now invisible to the model as well |
| `EXIT_WHEN` evaluation | Unchanged in kind: `nullSafeEvaluateCondition(exit_when, session values)` in both versions | Doc bug in the old example existed in 1.4.4 and the previous refresh missed it |
| New provenance rule for exit | `runtimeConditionAuthority` refuses an exit that reads values the model must not write (readonly or runtime-sourced) | Ordinary session values and `GATHER` fields still work. No article change |
| `REASONING` required per step | Present in both versions | Now stated in the article |
| Terminal targets | `complete` and `ESCALATE ...` accepted by `parseFlowTerminalTarget` | Not added to the article body. See scenario map |
| Pre-existing gap found | `MAX_TURNS` is an iteration cap, not a customer-turn cap | Article corrected |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Reasoning agent, no `FLOW:` | yes | Harness block 1 compiles clean. `COMPLETE` runs `checkCompletionConditions` then `executeComplete` | covered, labeled partial |
| `FLOW` with `REASONING: false` steps and step `GATHER` | yes | Harness block 2 clean. Step completes when required gather fields are set (`complete_when` comment in `schema.ts`) | covered |
| `FLOW` with bounded `REASONING: true` step, `EXIT_WHEN` expression | yes | Harness block 3 clean. Runtime exit evaluation read in `flow-step-executor.ts` | covered, example fixed |
| `REASONING: true` step with `THEN` and no `EXIT_WHEN` | yes | Runtime advances to `THEN` after one pass (`flow-step-executor.ts` near line 22210). Harness `t6` clean | covered (exit table) |
| `EXIT_WHEN` as a quoted phrase | no (does not work as judged text) | `evaluateConditionDual` of the quoted phrase returns `true` (harness run). Compile gives no warning | covered as a mistake |
| `MAX_ATTEMPTS` plus `ON_EXHAUSTED` on a reasoning step | yes | `attemptKind: 'reasoning_turn'`. Only one of the two gives `INVALID_FLOW_STEP_ATTEMPT_CONTRACT` (harness `t7`) | covered |
| `MAX_TURNS` iteration cap, default 10 | yes | `compiler.ts` `max_turns: step.maxTurns ?? 10`, `maxIterations` in the executor | covered |
| Top-level step layout and layout nested under `FLOW:` | yes | Same IR from both (harness `ir.mjs`) | covered (one sentence) |
| `REASONING` required on every step | yes | Parse error "must declare REASONING" | covered |
| Terminal flow targets `complete` and `ESCALATE WITH REASON ...` | yes | `parseFlowTerminalTarget`. Harness `t3b` compiles an `ON_EXHAUSTED: ESCALATE ...` | out of scope: needs a configured human transfer, covered by escalation articles |
| Step-level `BEHAVIOR:` text and `AVAILABLE_TOOLS` in a reasoning step | yes | Parser cases for `BEHAVIOR`, `AVAILABLE_TOOLS`; `ai4hc` example | out of scope: belongs to topic 1.5 |
| Workflow as a tool for durable work | yes | Tool type `workflow` in `agent-based.ts` | covered by a decision row and a mistake row, detail out of scope |
| Reasoning step with no `GOAL` | gap | Compiles clean, `goal` becomes an empty string | covered by the production checklist item |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Exit, attempts, iteration cap read in `flow-step-executor.ts` and `reasoning-executor.ts`. `EXIT_WHEN` truthiness run in the harness | covered | Runtime services not started, so exit behavior is close-read |
| Required companion resources identified | Examples are single files with no tools, targets, or auth | covered | The reasoning-agent example is labeled partial and says what to add |
| Referenced variables have sources | `support_path`, `account_id`, `serial_number`, `issue_description`, `policy_topic` come from step or agent `GATHER` | covered | None |
| Fallback, failure, ambiguity behavior verified | `MAX_ATTEMPTS` plus `ON_EXHAUSTED` to `handle_unclear`; harness `t3c` clean | covered | `handle_unclear` text is a stand-in for an escalation step |
| Customer verification path defined | Six steps with sample utterances and trace event names | covered | None |
| Production readiness checklist included | Present, includes exit expression and failure path items | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Policy_QA_Agent) | full-document | `validateABL` harness (parse, compile, IR validators) | pass | none | kept, labeled partial |
| Block 2 (Warranty_Intake_Agent) | full-document | `validateABL` harness | pass | none | kept |
| Block 3 (Support_Intake_Agent, rewritten) | full-document | `validateABL` harness | pass | none | rewritten, see review |
| Old block 3 (quoted `EXIT_WHEN`) | full-document | `validateABL` harness | pass, no warnings | Compiles clean but never waits for the "clear enough" state. Parse and compile do not catch it | replaced |

Command: `node --import ./reg.mjs val.mjs <review file>` in the scratchpad harness. Result: three blocks, zero errors, zero warnings.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Parser step properties, `ReasoningZoneIR`, compiler lowering, flow and reasoning executors, `ai4hc` example, compiler tests |
| Did I search for synonyms and neighboring constructs? | pass | `EXIT_WHEN`, `COMPLETE_WHEN`, `MAX_TURNS`, `MAX_ATTEMPTS`, `ON_EXHAUSTED`, `THEN`, `REASONING`, terminal targets |
| Did I identify every authoring style, shorthand, legacy alias, default, and fallback? | pass | Two FLOW layouts, `completeWhen` fallback for `exit_when`, default 10 iterations, `THEN` without `EXIT_WHEN` |
| Did I distinguish optional helper sections from required executable configuration? | pass | `REASONING` required, `PERSONA` and `LIMITATIONS` optional |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Step `GOAL` drives the model. `EXIT_WHEN` is not free-form. Both stated |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Decision table keeps four choices |
| Could a customer build the scenario another supported way? | pass | `COMPLETE_WHEN`, top-level or nested layout, and `ESCALATE` terminal target noted in the scenario map |
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | The scenario map above with file and harness evidence |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Exit rules match the executor. Failure path exists. Example no longer exits early | None blocking. Runtime paths are close-read, not run |
| Senior content writer | ready | Concept first, exit table, short sentences, no dashes | None |
| Product manager/customer enablement | ready | Clear decision table, verification with sample utterances, production checklist with failure path | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Found the `EXIT_WHEN` and `MAX_TURNS` errors. Rewrote claims to match executor code and harness runs | 5 |
| Depth of conceptual explanation | 4 | Added the exit table and the `GOAL` rule | 5 |
| Readability and usability | 4 | Short table, direct sentences | 5 |
| Coverage of examples | 3 | Replaced the broken example. Labeled the reasoning-agent example partial | 4 |
| Search and discovery quality | 4 | Added error and warning codes to troubleshooting | 5 |
| Completeness of workflow and failure modes | 3 | Added attempts, `ON_EXHAUSTED`, and a verification step for the failure path | 5 |
| Customer/partner self-service readiness | 4 | No repo paths in the article. Trace names only | 5 |
| Scenario comprehensiveness | 4 | Added layout styles and exit paths | 4 |
| Article completeness | 4 | Added Related HowTos | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- The reasoning-agent example ends the conversation once `policy_topic` is set. It never answers the question. It is labeled partial. Decide whether to replace it with an example that uses a tool, which needs a project tool definition.
- The previous evidence file (2026-08-21) marked the `EXIT_WHEN` example "verified accurate". Parse and compile cannot catch the early exit. Review other articles that use a quoted `EXIT_WHEN` phrase.
- Compile gives no warning for a quoted phrase in `EXIT_WHEN`. Consider a compiler diagnostic. This is a product question, not an article change.

## Open questions

- Should `MAX_TURNS` be renamed in the article's product vocabulary to "model iterations"? The article keeps the ABL keyword and explains its meaning.
- A step-level `GATHER` inside `REASONING: true` is shown in the platform example and compiles. The article does not document which gather prompts the model asks versus the runtime. Confirm with product before expanding.
