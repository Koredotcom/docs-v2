# Evidence: choose-reasoning-agent-or-flow

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/choose-reasoning-agent-or-flow.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/choose-reasoning-agent-or-flow-2026-11-01-review.md`
**Topic:** 1.1 - How to choose between a reasoning agent and a FLOW-based agent
**Workflow:** Refresh against `release_Artemis_1.9.0`. The previous scan used `hotfix_Artemis_1.8.1`.
**Verdict:** update-needed

## Validation harness

The harness is the scratchpad validator from the 2026-10-19 run. It calls `validateABL` (`packages/compiler/src/platform/ir/validate-ir.ts`) on a copy of `release_Artemis_1.9.0` code. The copy runs `parseAgentBasedABL`, `compileABLtoIR`, and the IR validators. Command: `node harness/validate.mjs a.abl` from `/tmp`. Scratch files are in `scratchpad/topic-1-1/`. The code repo was not modified and no branch was switched. Runtime services were not started, so runtime behavior is close-read. The condition evaluator (`evaluateConditionDual`) was called directly in a scratch script.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (step property cases near lines 3980 to 4040) | `MAX_TURNS`, `CONTEXT_UPDATES` list form, `FLOW_CONTEXT_UPDATES_INVALID` |
| `packages/core/src/diagnostics/registry.data.ts` (`E200`, `W217`, `W218`, `W498`, `FLOW_CONTEXT_UPDATES_INVALID`) | Message text and meaning |
| `packages/compiler/src/platform/ir/compiler.ts` (lines 1440 to 1475, 5640 to 5660) | `REASONING_CONTEXT_UPDATES_INVALID`, `max_turns` default 10, `goal` lowering |
| `packages/compiler/src/platform/ir/schema.ts` (`ReasoningZoneIR`, line 4047) | `context_updates` now `boolean or string[]` |
| `packages/compiler/src/platform/ir/validate-ir.ts` (lines 2125 to 2152) | Attempt contract |
| `packages/compiler/src/platform/ir/validate-field-refs.ts` | `UNUSED_REQUIRED_GATHER_FIELD`, undefined-variable warnings |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (reasoning zone block lines 23415 to 24300, `exitReadsOnlyActionOutcomeState` line 2392, `isRoutingOnlyExitGate` line 4559, `transitionIfStepAttemptsExhausted`) | Exit evaluation, exit prompt, attempts, settlement on handoff return and agent entry |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (lines 11071 to 11074, 22358) | `maxIterations` and the empty-answer fallback |
| `apps/runtime/src/services/execution/execution-failure-fallback.ts`, `customer-visible-fallbacks.ts`, `packages/compiler/src/platform/constants.ts` | `max_iterations` message key and default text |
| `apps/runtime/src/services/execution/reasoning-context-write-policy.ts` | `CONTEXT_UPDATES` policy resolution |
| `apps/runtime/src/services/execution/session-authority.ts`, `session-model-writers.ts` | Exit provenance check |
| `examples/ai4hc-payer-provider/agents/claim_information_agent.agent.abl` | `REASONING: true`, `GATHER`, `EXIT_WHEN: member_id IS SET`, `MAX_TURNS: 3` (unchanged since 1.8.1) |

Tests inspected: `packages/compiler/src/__tests__/context-updates-compilation.test.ts` (file present), `packages/core/src/__tests__/parser-contract-hardening.test.ts` (`E200` message).

## Drift analysis (1.8.1 to 1.9.0)

Size of change (`git diff --stat hotfix_Artemis_1.8.1 HEAD`): `flow-step-executor.ts` 3276 lines, `reasoning-executor.ts` 2898, `agent-based-parser.ts` 1363, `compiler.ts` 896, `validate-ir.ts` 391, `session-authority.ts` 294, `schema.ts` 214. All article claims were re-verified against current code.

| Item | Finding | Impact |
| ---- | ------- | ------ |
| `CONTEXT_UPDATES` on a reasoning step | 1.8.1 accepted `true` or `false` only. 1.9.0 adds an exact field list and the error `REASONING_CONTEXT_UPDATES_INVALID` (ABLP-6070). An empty list blocks model writes | New article note and troubleshooting rows |
| Exit instruction to the model | 1.9.0 adds the exit line only when the expression reads a writable variable. It names only the permitted fields when a list applies (`flow-step-executor.ts` near line 23846) | Backs the `CONTEXT_UPDATES` note |
| `EXIT_WHEN` evaluation | Unchanged in kind. A quoted phrase still evaluates to true. Compile gives no warning (harness `q1`) | Mistake row stays valid |
| `EXIT_WHEN: always` | Documented in runtime comments. Evaluates true. Runtime skips the model write request | Added to exit table |
| Exit settlement without a model pass | New paths settle `EXIT_WHEN` on handoff return and on agent entry for pure routing gates, only for runtime-authored facts (ABLP-5120, ABLP-5137) | Not an article topic. Belongs to routing articles |
| Exit provenance check | `runtimeConditionAuthority` returns verified unless the project uses explicit model writers (`session-model-writers.ts`) | Ordinary agents are unaffected. No article change |
| Attempts | Still one charge per customer message per reasoning step. Unchanged contract | No change |
| Empty answer fallback | The loop's generic failure line is now localizable through `max_iterations` (ABLP-5739) | One sentence added |
| Behavior profiles | Matched agent profiles now reach FLOW reasoning steps. Step `PERSONA` or `USE BEHAVIOR_PROFILE` gives `W498` (ABLP-6016) | Sentence and mistake row added |
| Step header diagnostics | `W217` for a header not read as a step. `W218` for a property set twice (ABLP-6463) | Troubleshooting rows added |
| `E200` text | Now ends with a period | Troubleshooting row quotes the stem only |
| `REASONING` required, default `MAX_TURNS` 10, attempt contract | Unchanged | No change |
| Other new warnings in the diff | `FLOW_CHECK_*` (ABLP-5476), `FLOW_ON_RESULT_CONSUMED_INPUT_REFERENCE` (ABLP-6464), `SET_LITERAL_FAILS_FIELD_VALIDATION` (ABLP-5714), `GATHER_DTMF_REASONING_UNSUPPORTED` | Out of scope for this decision article. Covered by flow and gather topics |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Reasoning agent, no `FLOW:` | yes | Block 1 compiles clean on 1.9.0 | covered, labeled partial |
| `FLOW` with `REASONING: false` steps and step `GATHER` | yes | Block 2 clean | covered |
| `FLOW` with bounded `REASONING: true` step and `EXIT_WHEN` expression | yes | Block 3 clean. Exit code near line 24114 | covered |
| `REASONING: true` step with `THEN` and no `EXIT_WHEN` | yes | One pass, then `THEN` (`flow-step-executor.ts` near line 24280) | covered (exit table) |
| `EXIT_WHEN: always` | yes | Runtime comment near line 23842. Evaluator returns true. Harness `q2` clean | covered (exit table) |
| `EXIT_WHEN` as a quoted phrase | no (counts as true) | Evaluator returns true. Harness `q1` compiles without warning | covered as a mistake |
| `MAX_ATTEMPTS` plus `ON_EXHAUSTED` on a reasoning step | yes | `validate-ir.ts` lines 2125 to 2152. Harness `q5` error | covered |
| `MAX_TURNS` iteration cap, default 10, empty-answer fallback | yes | `compiler.ts` 5657. `reasoning-executor.ts` 22358. Harness `m1` clean | covered |
| `CONTEXT_UPDATES: false`, `[]`, or field list on a reasoning step | yes | Parser, compiler lines 1450 to 1475. Harness `q3` error, `q4` clean, `c1` clean | covered (new) |
| Step-level `PERSONA` or `USE BEHAVIOR_PROFILE` | no (ignored with `W498`) | Harness `w1` gives `W498` | covered (new) |
| Top-level step layout and layout nested under `FLOW:` | yes | Same IR from both (2026-10-19 harness run). Parser unchanged for this | covered |
| `REASONING` required on every step | yes | Registry `E200` | covered |
| Terminal flow targets `complete` and `ESCALATE WITH REASON ...` | yes | `parseFlowTerminalTarget` | out of scope: needs a configured human transfer, covered by escalation articles |
| Step-level `BEHAVIOR:` text and `AVAILABLE_TOOLS` in a reasoning step | yes | Parser cases | out of scope: topic 1.5 |
| Workflow as a tool for durable work | yes | Tool type `workflow` in `agent-based.ts` | covered by a decision row and a mistake row |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Exit evaluation, attempt charge, exit prompt, and fallback read in `flow-step-executor.ts` and `reasoning-executor.ts` | covered | Close-read, not run |
| Required companion resources identified | Every example is a single self-contained agent. No tools, auth profiles, or knowledge bases are referenced | covered | None |
| Referenced variables have sources | `support_path` and `account_id` come from step `GATHER`. `policy_topic` and `serial_number` come from `GATHER`. `CONTEXT_UPDATES` text names `MEMORY.session` as the declaration point | covered | None |
| Fallback/failure/ambiguity behavior verified | `handle_unclear` through `ON_EXHAUSTED`. `max_iterations` message at the iteration cap | covered | `ESCALATE` terminal target out of scope |
| Customer verification path defined | Six steps with utterances and trace event names | covered | None |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Policy_QA_Agent) | full-document | `validateABL` harness, 1.9.0 | pass | none | kept, labeled partial |
| Block 2 (Warranty_Intake_Agent) | full-document | `validateABL` harness | pass | none | kept |
| Block 3 (Support_Intake_Agent) | full-document | `validateABL` harness | pass | none | kept |

Command: `cd /tmp; node <scratchpad>/harness/validate.mjs <scratchpad>/topic-1-1/b<N>.abl`. Result: three blocks, zero errors, zero warnings. Extra probes for new claims: `q1` quoted phrase (clean), `q2` `always` (clean), `q3` undeclared list field (error `REASONING_CONTEXT_UPDATES_INVALID`), `q4` `CONTEXT_UPDATES: false` (clean), `q5` only `MAX_ATTEMPTS` (error), `w1` step `PERSONA` plus duplicate `EXIT_WHEN` (`W498`, `W218`), `c1` list with declared field (compiles, warning `W801` because the model write has no static source), `m1` `max_iterations` message (clean). The article adds no new code block.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Source table above |
| Did I search for synonyms and neighboring constructs? | pass | `EXIT_WHEN`, `exit_when`, `always`, `COMPLETE_WHEN`, `MAX_TURNS`, `max_iterations`, `MAX_ATTEMPTS`, `ON_EXHAUSTED`, `CONTEXT_UPDATES`, `THEN`, `REASONING`, `PERSONA`, `BEHAVIOR_PROFILE` |
| Did I identify every authoring style, shorthand, legacy alias, default, and fallback? | pass | Two FLOW layouts, `always`, `CONTEXT_UPDATES` forms, default 10 iterations, empty-answer fallback |
| Did I distinguish optional helper sections from required executable configuration? | pass | `REASONING` required. `PERSONA`, `LIMITATIONS`, `CONTEXT_UPDATES`, `MESSAGES` optional |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Step `GOAL` guides the model. `EXIT_WHEN` is an expression. Both stated |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Decision table keeps four choices |
| Could a customer build the scenario another supported way? | pass | `COMPLETE_WHEN` alias, `ESCALATE` target, step tools noted in the scenario map as out of scope |
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map above |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Exit rules, write limits, and fallback match the executor. Failure path exists | None blocking. Runtime paths are close-read, not run |
| Senior content writer | ready | Concept first, exit table, short sentences, no dashes | None |
| Product manager/customer enablement | ready | Decision table, verification with utterances, new warnings searchable by code | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-verified every claim. Added claims for `CONTEXT_UPDATES`, `W498`, `max_iterations` with harness proof | 5 |
| Depth of conceptual explanation | 4 | Added who can write the exit value and where persona comes from | 5 |
| Readability and usability | 4 | Short bullets for `CONTEXT_UPDATES`. One sentence per rule | 5 |
| Coverage of examples | 4 | No new block needed. Probes validated each new claim | 4 |
| Search and discovery quality | 4 | Added codes `REASONING_CONTEXT_UPDATES_INVALID`, `W498`, `W217`, `W218` | 5 |
| Completeness of workflow and failure modes | 4 | Added the iteration-cap message and a no-exit cause | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Trace and code names only | 5 |
| Scenario comprehensiveness | 4 | Added `always`, `CONTEXT_UPDATES`, persona rule | 4 |
| Article completeness | 5 | All template parts present | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- Compile gives no warning for a quoted phrase in `EXIT_WHEN`. Still open from 2026-10-19. Consider a compiler diagnostic. This is a product question.
- The `CONTEXT_UPDATES` list example is not shown as a code block. A model-written field with no `GATHER`, `SET`, or tool source gives `W801` on compile. Decide whether to add a block and explain the warning.
- The public reference `agent-platform/abl/reference/flow.mdx` (lines 159 to 200) already documents `CONTEXT_UPDATES`, and `errors-and-warnings.mdx` documents `W498`. It labels the list form "new in 1.8.2". The 1.8.1 hotfix branch parses only `true` or `false`, so the list form is new relative to the 1.8.1 scan.
- The reasoning-agent example still ends once `policy_topic` is set. It stays labeled partial.

## Open questions

- Resolved from the public reference (`flow.mdx`, line 169): authored `GATHER` extraction, `SET`, and `on_result` mappings are not affected by `CONTEXT_UPDATES`. The article relies on this. The runtime path was not run end to end.
- A step-level `GATHER` inside `REASONING: true` still lacks documented prompt ownership between model and runtime. Carried over from 2026-10-19.
