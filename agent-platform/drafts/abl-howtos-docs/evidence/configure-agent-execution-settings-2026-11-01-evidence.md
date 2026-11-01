# Evidence: configure-agent-execution-settings

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/configure-agent-execution-settings.md`
**Topic:** 1.8 - How to configure model, timeout, and execution settings for an agent
**Workflow:** Refresh against `release_Artemis_1.9.0` (target release). Previous scan: `hotfix_Artemis_1.8.1`, evidence `configure-agent-execution-settings-2026-10-19-evidence.md`.
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/configure-agent-execution-settings-2026-11-01-review.md`

## Branch relationship

`release_Artemis_1.9.0` is not a descendant of `hotfix_Artemis_1.8.1`. The merge base is `15eeb40ef77`. A diff between the two shows hotfix-only commits as removals. For this topic the diff touches no hotfix-only EXECUTION behavior. Every claim below is checked against the 1.9.0 source.

## Source files inspected

| File (code repo) | Purpose |
| ---------------- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseExecutionConfig` line 10883, helpers `parseExecutionParameterNumber`, `parseExecutionNestedBlock`, `parseExecutionCompactionBlock`) | Key list and value rules. Function body diffed against 1.8.1: only `pipeline.parentReturn` is new. Helper functions are byte-identical. |
| `packages/core/src/types/agent-based.ts` (`ExecutionConfigAST`) | Typed AST. No EXECUTION key change. |
| `packages/compiler/src/platform/ir/schema.ts` (`ExecutionConfig`) | IR shape. Diff against 1.8.1: only `pipeline.parentReturn` added. |
| `packages/compiler/src/platform/ir/compiler.ts` (`authoredLlmTimeoutMs` near line 1292, execution lowering near line 1548, `resolveConfigVariables` near line 7724) | Timeout warnings unchanged. `conversation_history_window` is still not lowered. New `runtime_config_models` metadata for public `{{config.KEY}}` templates in `model`, `fallback_model`, and `models`. |
| `packages/compiler/src/platform/constants.ts` | `DEFAULT_TOOL_TIMEOUT_MS` 30000 (shared-kernel), `MAX_TOOL_TIMEOUT_MS` 120000, `MAX_AUTHORED_LLM_TIMEOUT_MS` 120000, `DEFAULT_SESSION_TIMEOUT_MS`. Only a system tool constant is new. |
| `apps/runtime/src/services/llm/llm-timeout-policy.ts` | Unchanged. Effective timeout is the minimum of the authored value, the server cap, any operation timeout, and the remaining turn budget. |
| `apps/runtime/src/services/execution/tool-timeout-policy.ts` | Per-tool timeout wins, cap 120000. New `resolveSecureDeliveryTimeoutMs` (secure input delivery, 10000 default) is out of scope. |
| `apps/runtime/src/services/execution/execution-coordinator.ts` | No diff. Queue default 10, concurrent default 5, `QUEUE_FULL`. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`DEFAULT_MAX_FLOW_ITERATIONS` 1500 line 905, `getMaxFlowIterations` line 2088, counter line 9112, `FLOW_ITERATION_LIMIT_EXHAUSTED` line 9098, `conversation_history_window` read line 16260) | Same semantics. Counter `_flow_transition_count` is session-wide and never reset. History window read stays an extraction-only extension field. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (`DEFAULT_MAX_TOOL_ITERATIONS` 10 line 6143, `execution.max_iterations` line 11072) | Reasoning iteration default. |
| `apps/runtime/src/services/llm/model-resolution.ts` (chain comment lines 4 and 2958, `findDslSelectedProjectBinding` line 3360, enforced selection near line 3225) | Changed: a DSL model that maps to one TenantModel selected on several connections now resolves. See drift table. |
| `apps/runtime/src/services/execution/llm-wiring.ts` (`hasDeclaredModelResolutionContext` line 412) | Only runtime reader of `fallback_model`. Unchanged. |
| `apps/runtime/src/services/session/config-source-session.ts`, `apps/runtime/src/config/config-source.ts` | Per-turn rebinding of public `{{config.KEY}}` model templates, behind a resolver flag. |
| `apps/runtime/src/__tests__/execution/runtime-flow-semantics-matrix.test.ts` (line 21858) | Session-wide flow counter test. Present on HEAD. |

## Drift analysis 1.8.1 to 1.9.0

| Change | Evidence | Impact on article |
| ------ | -------- | ----------------- |
| Restricted project: a DSL model name that identifies one selected TenantModel on several connections now resolves, using the model's default binding or the persisted connection priority. `DSL_MODEL_AMBIGUOUS` now means more than one distinct selected model. | `findDslSelectedProjectBinding`, diff of `model-resolution.ts` | Updated "Model selection" paragraph. |
| In an enforced project, agent Model Config temperature, max tokens, and hyper parameters are applied after `EXECUTION` values. | `model-resolution.ts` near line 3283 (`parameters` spread order). Same ordering existed in 1.8.1. | The 2026-10-19 article said `EXECUTION` sampling values still apply. Corrected with the Model Config exception. |
| New `serviceTier` model parameter (ABLP-6639) for the direct OpenAI provider. | `model-resolution.ts` | Not authorable in `EXECUTION`. No parser key. No article change. |
| `EXECUTION.pipeline.parentReturn` (`minConfidence` 0 to 1, `ignoreAmbiguous`), new error `EXECUTION_PIPELINE_PARENT_RETURN_CONFIDENCE_RANGE`. | Parser diff, schema diff | Belongs to the pipeline articles. Not in this article. Listed in open questions. |
| `{{config.KEY}}` templates in `model`, `fallback_model`, and `models` are kept as `runtime_config_models` metadata and re-rendered each turn when the config source resolver flag is on. | `compiler.ts` near line 7724, `config-source-session.ts` | Not added. Flag-gated and project-config specific. Listed in open questions. |
| Execution IR versions 1.2 and 1.3 treated alike for execution role. | `execution-policy.ts` | None. |
| No change to parser keys, defaults, timeouts, queue and concurrency defaults, flow limit, reasoning limit. | Parser body diff, `execution-coordinator.ts` no diff | All table values re-verified. |
| `conversation_history_window` still parsed but not lowered. | Harness IR: AST has 12, IR `execution` has no field. | Mistake row stays. |
| `fallback_model` still has no runtime failover path. | `rg fallback_model apps/runtime/src`: only `llm-wiring.ts` and `config-source-session.ts` | Statement stays. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| snake_case keys | yes | Parser | covered |
| camelCase keys (`maxQueueDepth`) | yes | Key normalization. Harness b1: IR has `max_queue_depth` 20 and `max_concurrent_messages` 3. | covered |
| `max_iterations` alias | yes | Harness neg2: IR `max_iterations` 6 | covered |
| Model and sampling settings | yes | Parser, harness IR | covered |
| Timeouts (`tool_timeout`, `llm_timeout`, `session_idle_timeout`) | yes | Harness b1: `tool_timeout_ms` 8000, `llm_timeout_ms` 15000, `sessionLifecycle.idleSeconds` 1800 | covered |
| `llm_timeout` outside 1 to 120000 | yes (warning) | Harness neg2: `AGENT_LLM_TIMEOUT_EXCEEDS_INTERACTIVE_CAP` | covered |
| Loop limits | yes | Runtime | covered |
| Concurrency (`serial`, `preemptive`, `parallel`, queue depth, parallel limit) | yes | `execution-coordinator.ts` | covered |
| Invalid `concurrency` value | silently ignored | Harness neg2: IR has no `concurrency` | covered |
| Thinking (`enable_thinking`, `thinking_budget`) | yes | Harness b1 | covered |
| `fallback_model` | yes (compiled, no runtime failover) | `llm-wiring.ts` | covered with a plain statement |
| `models` operation models | yes | Harness b2: IR `operation_models` | covered with example |
| `compaction_threshold`, `token_budget` | yes | Harness b2, neg2 | covered |
| `compaction:` block | yes | Parser | out of scope (own article) |
| `voice:` block and `voice_latency_target` | yes | Harness b3: `voice_latency_target_ms` 800, `llm_timeout_ms` 8000 | covered |
| `pipeline:` block including `parentReturn` | yes | Parser | out of scope (pipeline articles) |
| `inline_gather` | yes | Parser | out of scope (gather articles) |
| `escalation_recheck_after_tools`, `guardrail_builtins`, `set_expression_failure` | yes | Harness neg2: `W497` for `maybe`, IR `set_expression_failure` | covered in one paragraph |
| `conversation_history_window` | gap (parsed, not compiled) | Harness neg2 | covered as a mistake |
| Top-level `MODEL:` and `MODE:` | no (errors) | Harness neg1: `E103`, `E560` | covered |
| `top_p` out of range | no (error) | Harness neg2: `E564` | covered |
| Restricted project model mapping with several connections | yes | `findDslSelectedProjectBinding` | covered (updated) |
| `{{config.KEY}}` in model values | yes | `compiler.ts` line 7724 | gap in article: out of scope, open question |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Coordinator, timeout policies, flow executor, model resolution | covered | none |
| Required companion resources identified | Model names must exist in the project. The article says so. | covered | none |
| Referenced variables have sources | No session variables in examples | covered (n/a) | none |
| Fallback/failure/ambiguity behavior verified | `QUEUE_FULL`, `FLOW_ITERATION_LIMIT_EXHAUSTED`, `llm_timeout` clamp, `model_access:dsl_model_fallback`, `fallback_model` not wired | covered | Human review of the `fallback_model` statement (carried over) |
| Customer verification path defined | Validate, timeout tests, queue test, trace for model, Model Config comparison, longest-journey flow test | covered | none |
| Production readiness checklist included | Present | covered | none |

## Example validation

Harness: `validate.mjs` from the session scratchpad on 1.9.0 package sources. Run from `/tmp`. Scratch files in `scratchpad/t18/`. IR inspection with `scratchpad/t18/ir.mjs` (parse plus `compileABLtoIR`).

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (`Enterprise_Support_Agent`) | full-document | `validate.mjs b1.abl`, IR inspection | pass | none. IR: `max_flow_iterations` 12, `max_queue_depth` 20, `max_concurrent_messages` 3, `concurrency` preemptive. | kept |
| Block 2 (`Claims_Review_Agent`, `models:`) | full-document | same | pass | none. IR `operation_models` for `extraction` and `summarization`. | kept |
| Block 3 (`Voice_Billing_Agent`, `voice:`) | full-document | same | pass | none. IR `voice_latency_target_ms` 800, `llm_timeout_ms` 8000. | kept |

Other checks on 1.9.0:

| Input | Result |
| ----- | ------ |
| `MODEL: gpt-4.1` and `MODE: reasoning` at top level | `E103`, `E560` |
| `top_p: 1.5` | `E564` |
| `llm_timeout: 200000` | `AGENT_LLM_TIMEOUT_EXCEEDS_INTERACTIVE_CAP` warning. IR keeps 200000 with source `authored`. The runtime clamps to 120000. |
| `concurrency: fast` | No diagnostic. IR has no `concurrency`. |
| `max_iterations: 6` | IR `max_iterations` 6 |
| `conversation_history_window: 12` | AST has 12. IR `execution` does not. |
| `escalation_recheck_after_tools: maybe` | `W497` |
| `set_expression_failure: keep_text`, `token_budget: 50000` | IR carries both |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Files above. Parser function body diffed line by line against 1.8.1. |
| Did I search synonyms and neighboring constructs? | pass | `fallback_model`, `conversation_history_window`, `max_iterations`, `operation_models`, `runtime_config_models`, `serviceTier`, `failover`, `timeouts`. |
| Did I identify every supported style, alias, default, and fallback? | pass | Aliases, defaults, silent ignores listed. |
| Did I distinguish optional from required configuration? | pass | Article says to keep settings minimal. |
| Did I explain how the runtime uses free-form guidance? | pass (n/a) | None in this surface. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Four archetypes and pipeline pointer. |
| Could a customer build the scenario another supported way? | pass | Project-level model selection and deployment overrides named. `{{config.KEY}}` model templates not named, recorded as open question. |
| If asked "Are you not considering all scenarios?", what would I show? | pass | Scenario map. Gaps are scoped out with reasons. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Defaults match runtime constants. Model resolution paragraph matches 1.9.0 code. Model Config precedence is stated. | none |
| Senior content writer | ready | Table scannable. Short added sentences. | none |
| Product manager/customer enablement | ready | Explains why a different model or temperature runs in a restricted project. | none |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Updated model selection to 1.9.0. Corrected the Model Config precedence claim. | 5 |
| Depth of conceptual explanation | 5 | Added connection selection and effective timeout rule. | 5 |
| Readability and usability | 4 | Kept structure. | 4 |
| Coverage of examples | 4 | Revalidated all three blocks on 1.9.0. | 4 |
| Search and discovery quality | 4 | Added a troubleshooting row for temperature and token mismatch. | 5 |
| Completeness of workflow and failure modes | 4 | Added Model Config comparison to verification. | 5 |
| Customer/partner self-service readiness | 5 | No repo paths. | 5 |
| Scenario comprehensiveness | 4 | `compaction:`, `inline_gather`, `pipeline`, and `{{config.KEY}}` stay scoped out. | 4 |
| Article completeness | 5 | Template sections present. | 5 |

**Minimum final score:** 4

**Gate result:** pass

## Doc discrepancies for human review

- Carried over: `conversation_history_window` is parsed and documented in the schema but the compiler drops it. Runtime reads it from the compiled `execution` object, which never holds it, so the default of 2 always applies.
- Carried over: `fallback_model` compiles but no runtime path fails over to it. Confirm the intended behavior.
- Carried over: the `schema.ts` comment says `max_concurrent_messages` defaults to 3. The coordinator uses 5.
- The article example `max_flow_iterations: 12` is safe only for an agent without a flow. Consider removing the line.
- New: in an enforced project, agent Model Config temperature and max tokens override `EXECUTION` values. The previous article said `EXECUTION` values still apply. Confirm that Model Config precedence is the intended product behavior.

## Open questions

- Should the article cover `{{config.KEY}}` templates in `model`, `fallback_model`, and `models`? The runtime re-renders them each turn when the config source resolver flag is on.
- Should `EXECUTION.pipeline.parentReturn` appear in the pipeline articles? It is new in 1.9.0.
- Should the article cover the `compaction:` block and `inline_gather`?
