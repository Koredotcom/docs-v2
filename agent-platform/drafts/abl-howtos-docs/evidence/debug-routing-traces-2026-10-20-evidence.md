# Evidence: debug-routing-traces

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/debug-routing-traces.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/debug-routing-traces-2026-10-20-review.md`
**Topic:** 3.9 - How to debug routing decisions with traces and metadata
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. The previous evidence is `evidence/debug-routing-traces-2026-08-21-evidence.md` (against `hotfix_Artemis_1.4.4`).
**Verdict:** update-needed

## Validation harness

`validateABL` (`packages/compiler/src/platform/ir/validate-ir.ts`) bundled with `esbuild` from the code repo source into a scratchpad folder outside the repo (`.../scratchpad/w389/out.mjs`, reused from the earlier `w2728` bundle). It runs `parseAgentBasedABL`, `compileABLtoIR`, and the IR validators over a project. A second bundle (`outr.mjs`) exports `evaluateRoutingPrimitiveWhen` and `isNaturalLanguageRoutingHint` from `apps/runtime/src/services/execution/routing-primitive-executor.ts` and `routing-condition-classifier.ts`. Both ran with zero changes to the code repo and no branch switch (repo stays on `hotfix_Artemis_1.8.1`). Runtime services were not started. Runtime behavior is close-read from source and from existing tests.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/routing-executor.ts` (guard block 10040-10260, `checkHandoffConditions` 24830-25075, `emitRoutingPrimitiveUnresolvedTrace` 8660-8700, `handoff_context_pass_resolved` 11585-11610 and 4700-4800, `handoff_context_set_applied` 2520-2540, `handoff_return_handler` 6505-6540, `resume_intent` 7030-7070, `handoff` event 11455-11480, `handoff_failure` 9455-9500) | Emission sites, data fields, and `reasonCode` values |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | `whenOutcome` kinds: `deterministic_pass`, `deterministic_fail`, `semantic_deferred`, `missing_data` |
| `apps/runtime/src/services/execution/deterministic-handoff.ts` (new in 1.8.1) | `deterministic_routing` and `deterministic_handoff` emission, pre-model |
| `routing-executor.ts` `checkDeterministicRouting` and `checkDeterministicHandoff` (25346-25620) | Pre-model routing. Semantic rules skipped. Intent-scoped rules deferred under multi-intent (`deterministic_intent_routing_deferred_to_reasoning`) |
| `apps/runtime/src/services/execution/routing-surface-trace.ts` and `routing-availability-trace.ts` (both new in 1.8.1) | `routing_surface`, `availability_refused`, `handoff_condition_check` with `skipped: availability` |
| `apps/runtime/src/services/execution/trace-helpers.ts` (27-30, 245-352, 527-580, 640-680) | `VERBOSITY_LEVELS`, `EVENT_VERBOSITY`, `shouldEmitTrace`, `DECISION_KIND_VERBOSITY`, `emitDecisionEvent` |
| `apps/runtime/src/services/runtime-executor.ts` (8410) | `traceVerbosity: debug_websocket ? 'verbose' : 'standard'`. No other writer found in `apps/` or `packages/` |
| `apps/runtime/src/services/execution/multi-intent/multi-intent-router.ts`, `sequential-executor.ts` | Multi-intent events are `decision` events with `data.type` |
| `apps/runtime/src/services/execution/session-assignment-executor.ts` (470-540) | `_meta.*` assignment, `session_updated` with `target: custom_dimension`, warning on rejection |
| `apps/runtime/src/services/metadata/custom-dimensions.ts` | Dimension rules: key pattern, 256-char key, 1024-byte value, 50 keys, PII policy `protect` by default |
| `packages/shared-kernel/src/constants/trace-event-registry.ts`, `packages/shared-kernel/src/validation/custom-dimensions.ts`, `packages/shared-kernel/src/constants/project-settings.ts` | Registered events. Dimension constants |
| `apps/runtime/src/__tests__/execution/ablp-4844-flow-step-evaluation-cost.test.ts` (270-300) | `context` and `evaluatedContext` hold only the condition's variables |
| `apps/runtime/src/__tests__/route-admission/golden/__goldens__/handoff/gated-unset-tool_call.exact.json` | Blocked route tool result text |
| `packages/compiler/src/__tests__/ir/meta-set-surfaces-ir.test.ts` | `_meta.*` SET surfaces |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` (742-800) | Public reference cross-check |

## Drift analysis (1.4.4 to 1.8.1)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| `whenOutcome: deterministic_no_match` in the old article | Not a value in either version. The kinds are `deterministic_pass`, `deterministic_fail`, `semantic_deferred`, `missing_data` | Corrected. Table added |
| Verbosity claim | Old text said some routing events show only at `verbose` or `debug`. `handoff_condition_check` is `standard` in `EVENT_VERBOSITY`. Directly emitted events are not filtered. Runtime sets `verbose` for debug websocket sessions and `standard` otherwise | Corrected. The "raise verbosity" advice removed |
| `handoff_context_pass_resolved` | Fires only for `PASS` fields named `request`, `user_request`, `customer_request`, `query`, `message`, `utterance`, `latest_user_utterance`. Same in 1.4.4 | Old claim ("records the resolved pass values") corrected. Use the `handoff` event `context` |
| `route_condition_unresolved` | Fires in addition to the outcome, not instead of it (`deterministic_fail` still applies). A plain `==` against an unset variable is reported. `!= true`, `== null`, `IS NOT SET` are not | Wording corrected |
| Multi-intent events | Emitted as `decision` events with `data.type`. `multi_intent_queued`, `_plan_built`, `_target_resolved`, `_sequential`, `_parallel` are not registered event types | Table notes the `type` field |
| `routing_surface`, `availability_refused`, `skipped: availability` | New in 1.8.1 (ENABLED_WHEN) | New variation |
| Deterministic pre-routing | `deterministic-handoff.ts` is new. `deterministic_routing` and `deterministic_handoff` fire before the model for deterministic rules | Layers table |
| Custom dimension PII policy | New in 1.8.1 (`getDimensionAction`, default `protect`) | New row |
| History trace claim | Old text said the trace shows history fields. The handoff strategy goes to `handoffContext.__handoff_history_strategy`, not to a trace event | Removed |
| `session.channel` in `ON_START` | Kept. Earlier batch (2.x evidence) confirmed it | Example 1 kept |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Model-selected route check (`handoff_condition_check`, `decision`) | yes | `routing-executor.ts` 10150-10215 | covered |
| Authored-order check after a turn or flow step | yes | `checkHandoffConditions` | covered |
| Pre-model deterministic routing | yes | `deterministic-handoff.ts` | covered |
| Quoted plain-language `WHEN` outcome | yes | Harness `cond.mjs`: `semantic_deferred` | covered |
| Unset variable, `route_condition_unresolved` | yes | `getUnresolvedRoutingPrimitiveVariables` | covered |
| Flow-return suppression | yes | `handoff_condition_suppressed` at 25049 | covered |
| Blocked route (tool result and `decision` `blocked:`) | yes | Goldens | covered |
| `ENABLED_WHEN` events | yes | New trace files | covered (table) |
| Return events (`handoff_return_handler`, `resume_intent`) | yes | 6505, 7036 | covered |
| Router clarification `tool_call` | yes (close-read) | `reasoning-executor.ts` 27361 | covered |
| Multi-intent `decision` events | yes | Router and executor | covered |
| `_meta.*` dimensions and rules | yes | `custom-dimensions.ts` | covered |
| Admission failures (`handoff_failure`, `handoff_authority_denied`) | yes | 9455-9500, 9856 | covered (one row) |
| Trace verbosity levels | yes | `trace-helpers.ts` | covered (corrected) |
| Studio trace viewer UI | yes | `apps/studio` | out of scope: product UI, not ABL |
| `delegate` guard traces (`decision` kind `delegation`) | yes | 25240-25300 | out of scope: delegate HowTo |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Emission sites read. Evaluator outcomes run in the harness | covered | Event payloads not captured from a live session |
| Required companion resources identified | Supervisor plus three stand-in agents | covered | None |
| Referenced variables have sources | The example has no passed fields. `intent.category` comes from `INTENTS:`. `session.channel` is a platform value | covered | None |
| Fallback, failure, ambiguity behavior verified | Fallback route, blocked route, unresolved variable | covered | Blocked path is described, not exercised by the example |
| Customer verification path defined | Six steps with event names and fields | covered | None |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (supervisor + 3 agents) | full-document set | `node val.mjs --split v/debug-routing-traces-1.abl` | pass | none | kept. Removed the undeclared passed fields and the `ON_RETURN` on the fallback route (stub child would not return) |
| JSON sample | illustrative-fragment | Field names checked against the emitting code | n/a | n/a | Labeled "Fields are trimmed" |

Evaluator results used in the article (`node cond.mjs`): `"the clarified route topic is unsupported or still unclear"` gives `semantic_deferred`. `route_topic == "billing"` gives `deterministic_fail` when unset. `"the request is unclear OR ambiguous"` gives `deterministic_fail` (read as an expression). `intent.category == "billing"` with no intent gives `semantic_deferred` with `deferredVariables: ["intent.category"]`.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Source table |
| Did I search for synonyms and neighboring constructs? | pass | `handoff_condition`, `deterministic_`, `routing_surface`, `availability_`, `multi_intent_`, `_meta`, `customDimensions`, `traceVerbosity`, `decisionKind` |
| Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback? | pass | Three emitters of `handoff_condition_check`. Layers table |
| Did I distinguish optional helpers from required executable config? | pass | `_meta` is optional and not routing logic |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Layer 2 and the semantic variation |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Four layers |
| Could a customer debug the scenario another supported way? | pass | Studio trace viewer named out of scope | 
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Layers match the code. Outcome values exact. Narrow events called out | None blocking. Payloads are not from a live trace |
| Senior content writer | ready | Need-to-event table, short sentences, no dashes | None |
| Product manager/customer enablement | ready | Support can map a complaint to an event. `_meta` rules prevent silent failures | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 2 | Fixed `deterministic_no_match`, verbosity, pass-resolved claims. Evaluator run in the harness | 5 |
| Depth of conceptual explanation | 3 | Layers table | 4 |
| Readability and usability | 4 | Need-to-event table | 5 |
| Coverage of examples | 3 | Operationally clean example. JSON sample labeled | 4 |
| Search and discovery quality | 4 | Event names in headings and tables | 5 |
| Completeness of workflow and failure modes | 3 | Blocked, unresolved, hidden, return, multi-intent | 4 |
| Customer/partner self-service readiness | 4 | No repo paths | 4 |
| Scenario comprehensiveness | 3 | `ENABLED_WHEN`, pre-model, `_meta` rules | 4 |
| Article completeness | 4 | All template sections | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- Published `design-supervisor-routing-agent.md` (verification step 5 and a troubleshooting row) and `choose-single-agent-or-specialists.md` (step 5) tell readers to check `handoff_context_pass_resolved` for `customer_id`. The event fires only for request-text field names. They should point to the `handoff` event `context`. The `.mdx` pages carry the same text.
- Published `debug-routing-traces.mdx` line 87 repeats the old `handoff_context_pass_resolved` claim and `deterministic_no_match`.
- Public reference `multi-agent-and-supervisor.mdx` says `ENABLED_WHEN` is evaluated "once before any turn". The runtime builds a snapshot per decision and emits `routing_surface` per model turn. Confirm the intended wording with the reference owner.
- The public reference lists no trace event names for routing. No conflict found.

## Open questions

- Is there any customer setting for trace verbosity (project or API)? Search of `apps/` and `packages/` found only the `debug_websocket` default. The article says the runtime sets the level and gives no setting.
- Confirm the `_meta` write surfaces (flow steps, hooks, `ON_ERROR`, `ESCALATE`) at runtime. The compile-time test confirms them. Runtime was not run.
- Should the Studio trace viewer names for these events be added?
