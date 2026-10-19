# Evidence: configure-agent-execution-settings

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/configure-agent-execution-settings.md`
**Topic:** 1.8 - How to configure model, timeout, and execution settings for an agent
**Workflow:** Refresh against branch `hotfix_Artemis_1.8.1`. Previous refresh baseline: `hotfix_Artemis_1.4.4`.
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/configure-agent-execution-settings-2026-10-19-review.md`

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseExecutionConfig` near line 9703, `E103` and `E560` near lines 1559 and 1820) | Full top-level key list. Key normalization removes underscores and lowercases. Sub-blocks `models`, `operation_models`, `voice`, `pipeline`, `compaction`. `E564` range checks. `W497` for bad boolean-like values. |
| `packages/core/src/types/agent-based.ts` (`ExecutionConfigAST`) | Typed AST. |
| `packages/compiler/src/platform/ir/compiler.ts` (lines 1160 to 1195, 1340 to 1410, `compileAgentSessionLifecycle`) | Lowering into `execution` IR. Timeout warnings. `conversation_history_window` is not lowered. |
| `packages/compiler/src/platform/ir/schema.ts` (`ExecutionConfig`, `OperationModelMap`) | IR shape and operation names. |
| `packages/compiler/src/platform/constants.ts` | `DEFAULT_TOOL_TIMEOUT_MS` 30000, `DEFAULT_LLM_TIMEOUT_MS` 30000 (compiler marker only), `MAX_AUTHORED_LLM_TIMEOUT_MS` 120000, `DEFAULT_SESSION_TIMEOUT_MS` 1800000, `VOICE_LATENCY_*`. |
| `packages/compiler/src/platform/ir/execution-policy.ts`, `project-runtime-config.ts` | Execution role helpers. Project voice latency profile overrides (`inline_gather`, model routing tiers). Not authored through `EXECUTION`. |
| `apps/runtime/src/services/llm/llm-timeout-policy.ts` | Effective `llm_timeout`: authored value capped at 120000, otherwise 120000. Server caps from environment. |
| `apps/runtime/src/services/execution/tool-timeout-policy.ts` | Per-tool timeout wins. Cap 120000. |
| `apps/runtime/src/services/execution/execution-coordinator.ts` | `concurrency` default `serial`. Queue default 10. Parallel limit default 5. `QUEUE_FULL`. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (`DEFAULT_MAX_TOOL_ITERATIONS` 10) | Reasoning iteration default. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`DEFAULT_MAX_FLOW_ITERATIONS` 1500, `getMaxFlowIterations`, transition counter, history window reads) | Flow limit and `FLOW_ITERATION_LIMIT_EXHAUSTED`. History window read only in extraction paths. |
| `apps/runtime/src/services/llm/model-resolution.ts` (resolution chain comment near line 2893, `resolveEnforcedProjectSelection`, `findDslSelectedProjectBinding`, `traceDslModelFallback`) | Model precedence and restricted project behavior. |
| `apps/runtime/src/services/execution/llm-wiring.ts` (`hasDeclaredModelResolutionContext`) | Only runtime reader of `fallback_model`. |
| `apps/runtime/src/services/llm/model-failover-policy.ts` | Project failover policy. Not connected to DSL `fallback_model`. |
| `apps/runtime/src/__tests__/execution/runtime-flow-semantics-matrix.test.ts` ("authored max flow iterations accumulates across customer turns") | Test evidence for session-wide flow counter. |
| `examples/retail/agents/retail_supervisor.agent.abl`, `examples/a2a-demo/agents/supervisor.agent.abl` | Real `EXECUTION` usage (`max_iterations`, `pipeline`). |

## Drift since hotfix_Artemis_1.4.4

| Change | Impact on article |
| ------ | ----------------- |
| New parser keys: `max_iterations` alias, `escalation_recheck_after_tools`, `guardrail_builtins`, `set_expression_failure`, `token_budget`, `compaction:` block, `E564` range checks. | Added to the settings table. `compaction:` block listed through `compaction_threshold` only. |
| New compiled fields: `sessionLifecycle.idleSeconds` (from `session_idle_timeout`), `timeouts.*_source`, `reasoning_effort` and sampling fields. | Table updated. |
| Model resolution: enforced projects map `EXECUTION.model` to selected project models (ABLP-4894, ABLP-5226). Agent model setting precedence (ABLP-5762). | New "Model selection" section. |
| `llm_timeout` interactive cap 120000 with compile warnings. Existed on the baseline (codes became `VALIDATION_CODES` entries). | Added limit. |
| `conversation_history_window`: parsed on both branches, never lowered by the compiler on either branch. | Setting removed from example. |

The 2026-08-21 refresh judged the article accurate by checking parser field names only. It did not check compiler lowering or runtime use. This refresh adds both.

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| snake_case keys | yes | Parser | covered |
| camelCase keys (`maxQueueDepth`) | yes | Key normalization, harness | covered |
| `max_iterations` alias | yes | Parser `case 'maxiterations'` | covered |
| Model and sampling settings (`model`, `temperature`, `max_tokens`, `top_p`, `top_k`, penalties, `seed`, `stop_sequences`, `verbosity`, `reasoning_effort`) | yes | Parser, compiler lowering | covered |
| Timeouts (`tool_timeout`, `llm_timeout`, `session_idle_timeout`) | yes | Compiler, `llm-timeout-policy.ts`, `tool-timeout-policy.ts` | covered |
| Loop limits (`max_reasoning_iterations`, `max_flow_iterations`) | yes | Runtime | covered |
| Concurrency (`serial`, `preemptive`, `parallel`, queue depth, parallel limit) | yes | `execution-coordinator.ts` | covered |
| Thinking (`enable_thinking`, `thinking_budget`) | yes | Parser, `model-resolution.ts` | covered |
| `fallback_model` | yes (parsed and compiled, no runtime failover found) | See files above | covered with a plain statement |
| `models` operation models | yes | Parser, `OperationModelMap`, resolution chain | covered with example |
| `compaction_threshold`, `token_budget` | yes | Parser, compiler | covered in table |
| `compaction:` block (`tool_results`, `prior_turns`, `prompt_context`) | yes | `parseExecutionCompactionBlock` | out of scope: compaction policy tuning needs its own article. Listed in open questions. |
| `voice:` block and `voice_latency_target` | yes | Parser, compiler, harness | covered with example |
| `pipeline:` block | yes | Parser | out of scope here, linked to the pipeline articles |
| `inline_gather` | yes | Parser, compiler | out of scope: gathering behavior belongs to the gather articles. Not listed in the table. Added to open questions. |
| `escalation_recheck_after_tools`, `guardrail_builtins`, `set_expression_failure` | yes | Parser, compiler | covered in one paragraph |
| `conversation_history_window` | gap (parsed, not compiled, no effect) | Harness: AST has it, IR does not | covered as a mistake |
| Top-level `MODEL:` and `MODE:` | no (errors) | `E103`, `E560`, harness | covered |
| Invalid enum values (`concurrency`, `reasoning_effort`, `verbosity`) | silently ignored | Parser switch | covered for `concurrency` and `reasoning_effort` |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Coordinator, timeout policies, flow executor, model resolution | covered | none |
| Required companion resources identified | Model names must exist in the project. The article says so. | covered | none |
| Referenced variables have sources | No session variables | covered (n/a) | none |
| Fallback/failure/ambiguity behavior verified | `QUEUE_FULL`, `FLOW_ITERATION_LIMIT_EXHAUSTED`, `llm_timeout` clamp, `model_access:dsl_model_fallback`, `fallback_model` not wired | covered | Human review of the `fallback_model` statement |
| Customer verification path defined | Validate, timeout tests, queue test, trace for model, longest-journey flow test | covered | none |
| Production readiness checklist included | Present and extended | covered | none |

## Example validation

Harness: copy of the repo packages loaded through a Node module loader that transpiles TypeScript sources with esbuild. It runs `validateABL`, `parseAgentBasedABL`, and `compileABLtoIR` on branch `hotfix_Artemis_1.8.1` sources. Harness files are in the session scratchpad, not in the repo.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (`Enterprise_Support_Agent`) | full-document | `validateABL`, parse, compile, IR inspection | pass | none | kept, `conversation_history_window` line removed |
| Block 2 (`Claims_Review_Agent`, `models:`) | full-document | same | pass | none. IR has `operation_models` for `extraction` and `summarization`. | added |
| Block 3 (`Voice_Billing_Agent`, `voice:`) | full-document | same | pass | none. IR has `voice_latency_target_ms` 800 and `llm_timeout_ms` 8000. | added |

Other harness checks:

| Input | Result |
| ----- | ------ |
| Original block 1 with `conversation_history_window: 12` | AST has `conversation_history_window: 12`. IR `execution` does not. |
| `llm_timeout: 200000` | Warning `AGENT_LLM_TIMEOUT_EXCEEDS_INTERACTIVE_CAP`. |
| `MODEL: gpt-4.1` and `MODE: reasoning` at top level | `E103` and `E560`. |
| `top_p: 1.5` | `E564`. |
| `concurrency: fast` | No diagnostic. IR `concurrency` empty. |
| `max_iterations: 6` | IR `max_iterations` is 6. |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Files above. The 2026-08-21 refresh stopped at the parser. Compiler lowering found the `conversation_history_window` gap. |
| Did I search synonyms and neighboring constructs? | pass | `fallback_model`, `fallbackModel`, `conversation_history_window`, `max_iterations`, `operation_models`, `models`, `failover`, `timeouts`. |
| Did I identify every supported style, shorthand, alias, default, and fallback? | pass | Aliases, defaults, silent ignores all listed. |
| Did I distinguish optional from required configuration? | pass | Article says to keep settings minimal. |
| Did I explain how the runtime uses free-form guidance? | pass (n/a) | No free-form guidance in this surface. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Four archetypes and the pipeline pointer. |
| Could a customer build the scenario another supported way? | pass | Project-level model selection and deployment overrides are named in "Model selection". Studio screens not described. |
| If asked "Are you not considering all scenarios?", what would I show? | pass | Scenario map above. Gaps are the `compaction:` block and `inline_gather`, scoped out with reasons. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Defaults and limits match runtime constants. Flow counter behavior matches a runtime test. Failure paths named with codes. | none |
| Senior content writer | ready | Settings table is scannable. Sections follow the template. Warnings sit next to the setting they affect. | none |
| Product manager/customer enablement | ready | The article tells a partner which settings to leave alone and how to test limits. The model fallback behavior in restricted projects removes a common support question. | none |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Removed a no-effect setting. Added defaults from runtime constants. Corrected the model resolution story. | 5 |
| Depth of conceptual explanation | 4 | Added model selection rules and flow counter semantics. | 5 |
| Readability and usability | 4 | Table carries defaults. Long behaviors moved to short paragraphs. | 4 |
| Coverage of examples | 3 | Added validated `models:` and `voice:` examples. | 4 |
| Search and discovery quality | 4 | Troubleshooting rows use error codes and event names. | 5 |
| Completeness of workflow and failure modes | 3 | Added queue, flow limit, timeout, and model fallback failure paths. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths in the article. | 5 |
| Scenario comprehensiveness | 3 | Covered every parser key except two scoped-out blocks. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Minimum final score:** 4

**Gate result:** pass

## Doc discrepancies for human review

- Product bug candidate: `conversation_history_window` is documented in the ABL schema and parsed, but the compiler drops it. Runtime reads it only for the extraction context window (default 2, maximum 10). Either lower it in `compiler.ts` or remove it from the parser and schema.
- Product bug candidate: `fallback_model` compiles but no runtime path uses it after model errors. Confirm the intended behavior before publishing the statement in the article.
- Code comment mismatch: `schema.ts` says the `max_concurrent_messages` default is 3. `execution-coordinator.ts` uses 5. The public reference (`agent-declaration.mdx` line 419) shows an example value of 3 and states no default. The article states the runtime value of 5, notes the reference example, and tells readers to set a value explicitly.
- The article example `max_flow_iterations: 12` is safe only for an agent without a flow. A flow agent hits the session-wide count after 12 transitions. The example kept the value because the agent has no flow. Consider removing the line.
- The 2026-08-21 evidence claimed that camelCase `maxQueueDepth` is accurate. That is true for parsing. The same evidence missed compile-time and runtime behavior.

## Open questions

- Should the article cover the `compaction:` block (tool result, prior turn, prompt context policies)? The parser supports it in detail.
- Should `inline_gather` appear in this article or in a gather article?
- Does Studio expose these settings in an editor tab? Screens were not verified.
