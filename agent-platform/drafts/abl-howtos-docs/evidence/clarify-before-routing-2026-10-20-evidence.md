# Evidence: clarify-before-routing

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/clarify-before-routing.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/clarify-before-routing-2026-10-20-review.md`
**Topic:** 3.7 - How to ask a clarification question before routing
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. The previous evidence is `evidence/clarify-before-routing-2026-08-21-evidence.md` (against `hotfix_Artemis_1.4.4`).
**Verdict:** update-needed

## Validation harness

`validateABL` (`packages/compiler/src/platform/ir/validate-ir.ts`) bundled with `esbuild` from the code repo source into a scratchpad folder outside the repo (`.../scratchpad/w389/out.mjs`, reused from the earlier `w2728` bundle). It runs `parseAgentBasedABL`, `compileABLtoIR`, and the IR validators over a project. A second bundle (`outr.mjs`) exports `evaluateRoutingPrimitiveWhen` and `isNaturalLanguageRoutingHint` from `apps/runtime/src/services/execution/routing-primitive-executor.ts` and `routing-condition-classifier.ts`. Both ran with zero changes to the code repo and no branch switch (repo stays on `hotfix_Artemis_1.8.1`). Runtime services were not started. Runtime behavior is close-read from source and from existing tests.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/prompt-builder.ts` (about lines 4546-4640) | Builds the model tools. Adds `__clarify_routing__` when `executionRole === 'router'`, at least one route tool is visible, and the policy is explicit or `direct_response_allowed !== false` |
| `apps/runtime/src/services/execution/supervisor-response-authority.ts` (new in 1.8.1) | Defines `SUPERVISOR_ROUTING_CLARIFICATION_TOOL_NAME = '__clarify_routing__'` and `direct_response` versus `routing_required` authority |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (lines 7690-7725, 27361-27375, 11852-11935, 819-846, 3150-3200) | Repair prompts name the clarification action. The action returns the `message` as the reply and breaks the loop with `{ type: 'continue', clarification: true }`. Supervisor `GATHER` handling skips the extraction pass with `fused_with_routing_tool` or `planned_with_routing_tool` |
| `apps/runtime/src/services/execution/agent-execution-role.ts` | Role resolution. No `BEHAVIOR` block gives `orchestrator` when `direct_response_allowed` is true |
| `apps/runtime/src/services/execution/routing-executor.ts` (`sanitizeSupervisorFusedHandoffContext` 2354-2480, `resolveDeclaredHandoffInputContext` 2215, guard block 10040-10260, `checkHandoffConditions` 24830-25075, `isLiveRoutingPrimitiveWhenMatched` 8096) | Routing-call inputs persist to supervisor values only for `infer: true` gather fields. A blocked route returns `Handoff to X blocked: WHEN condition not met`. The authored-order check never accepts a semantic hint |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | `evaluateRoutingPrimitiveWhen`: outcome kinds, quoted-expression unwrapping |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (8480-8500, 8200-8260) | `checkHandoffConditions` runs on `flow_transition` and before `checkCompletionConditions` when a step ends with `THEN: COMPLETE` |
| `apps/runtime/src/services/execution/multi-intent/multi-intent-router.ts` (1396-1440) | `disambiguate` strategy sets `waitingForInput: ['_disambiguation_choice']` and emits `multi_intent_disambiguate` |
| `packages/compiler/src/platform/ir/multi-intent-config.ts` | Strategies and defaults (`primary_queue`, enabled) |
| `packages/compiler/src/platform/constructs/routing-condition-classifier.ts` | Plain-language versus expression classifier. Unchanged since 1.4.4 |
| `apps/runtime/src/__tests__/execution/supervisor-handoff-tool-choice.test.ts` | Tests for `fused_with_routing_tool` and `planned_with_routing_tool`. The `planned` test uses `infer: false` and `WHEN: true` |
| `apps/runtime/src/__tests__/route-admission/golden/__goldens__/handoff/gated-unset-tool_call.exact.json` | Exact text of a blocked route result |
| `examples/ai4h-payer/agents/welcome_agent.agent.abl` | A real supervisor with `FLOW` and a reasoning step that asks one clarifying question |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` (lines 16, 290-326, 380-540) | Public reference cross-check |

## Drift analysis (1.4.4 to 1.8.1)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| Router clarification action `__clarify_routing__` | New in 1.8.1 (`supervisor-response-authority.ts` is a new file). Offered only to explicit-policy `router` supervisors with at least one route | New section. This is the primary clarification path now |
| Supervisor `GATHER` | The `fused_with_routing_tool` and `planned_with_routing_tool` skips and `sanitizeSupervisorFusedHandoffContext` exist in 1.4.4 as well. The old article claim "the top-level GATHER runs before any HANDOFF is evaluated" was already wrong | Claim removed. Replaced with the verified behavior and a warning |
| Quoted fallback `WHEN` | The authored-order check (`checkHandoffConditions`) calls `isLiveRoutingPrimitiveWhenMatched` without the model-selected flag, so a semantic hint returns false. It matches only when the model calls the route | Old fallback route example replaced. New section "Write quoted fallback carefully" |
| Case-sensitivity gotcha | `routing-condition-classifier.ts` has no diff. Harness: `"the request is unclear OR ambiguous"` gives `deterministic_fail` (an expression). Lowercase `or` gives `semantic_deferred` | Simplified to the user-visible rule. The internal explanation was removed |
| History default | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`. Project default can override (design article evidence) | One sentence |
| Multi-intent defaults | `primary_queue`, enabled. 1.8.1 adds `advance_on_primary_response`, `completion_signal`, `list_other_requests` | Disambiguate snippet kept. New fields not documented here |
| Size of change | `routing-executor.ts`, `prompt-builder.ts`, `reasoning-executor.ts` each changed by thousands of lines | Claims re-verified against current code, not only the diff |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Router supervisor asks one question through `__clarify_routing__` | yes | `prompt-builder.ts` 4614-4640. Harness `a2` clean (`execution_policy.role: router`, `direct_response_allowed: false`) | covered (minimal example) |
| Orchestrator or no-`BEHAVIOR` supervisor asks in plain text | yes | `agent-execution-role.ts`. Harness `a1` IR shows `direct_response_allowed: true` and no `execution_policy` | covered (one sentence) |
| Entry agent with enum `GATHER` in a `FLOW` step and deterministic routes | yes | `flow-step-executor.ts` 8200-8260. Harness `a3` clean. Same shape as the 2.x menu example | covered (second example) |
| `SUPERVISOR` as the entry agent with the same `FLOW` | yes (compile) | Harness `a3s` clean. Runtime not verified | out of scope: the article uses `AGENT` |
| Supervisor `GATHER` as a question step | no | `reasoning-executor.ts` 11852-11935 skips extraction. Values persist only for `infer: true` | covered as a warning and mistake row |
| Supervisor `GATHER` with `infer: true` filled by the routing call | yes, partial | `sanitizeSupervisorFusedHandoffContext`. Test `supervisor-handoff-tool-choice.test.ts` (fused). No end-to-end test with a `WHEN` on the field | covered in one sentence in Concept |
| Fallback specialist that asks several questions | yes | Fallback article | out of scope: pointer to the fallback HowTo |
| Multi-intent `disambiguate` question | yes | `multi-intent-router.ts` 1396. Harness `a2c` clean (`intent_handling.multi_intent.strategy: disambiguate`) | covered (snippet) |
| Behavior profile `interaction.clarification` (`mode`, `max_questions`, `assume_when_low_risk`) | yes | `conversation-behavior-resolver.ts` 409-419 adds prompt lines. `flow-step-executor.ts` 11616 uses `max_questions` for repeated gather prompts | out of scope: behavior profile topic (2.x/1.x). Listed as an open question |
| Quoted plain-language fallback route | yes (model-only) | `isLiveRoutingPrimitiveWhenMatched`. Harness `outr.mjs` | covered |
| `WHEN: true` default route | yes | Design article | out of scope: covered in the design and fallback articles |
| `ESCALATE` to a person | yes | Design article | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Router action, flow-transition routing, blocked-route text, multi-intent wait read in the files above | covered | Close-read, not run. See open questions |
| Required companion resources identified | Both examples define every target agent (stand-ins labeled) | covered | None |
| Referenced variables have sources | `route_topic` comes from the flow `GATHER`. The router example has no passed fields | covered | None |
| Fallback, failure, ambiguity behavior verified | Invalid answer re-asks. Unmatched enum value ends the session. `other` route. Disambiguate | covered | None |
| Customer verification path defined | Utterances and trace events (`tool_call` `__clarify_routing__`, `handoff_condition_check` with `source: flow_transition`, `handoff` `reasonCode`) | covered | `__clarify_routing__` appearing as a `tool_call` is close-read |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (router supervisor + 2 agents) | full-document set | `node val.mjs --split v/clarify-before-routing-1.abl` (split at `SUPERVISOR:`/`AGENT:` lines, validated as one project) | pass | none | kept |
| Block 2 (entry agent + 3 agents) | full-document set | same harness | pass | none | kept |
| Block 3 (`MULTI_INTENT`) | section-snippet | Inserted before the first `AGENT:` line of block 1 (`v/clarify-3-harness.abl`) | pass | none | kept |

Old article block: the supervisor with a `GATHER` field and a quoted fallback compiled clean (harness `a1`) but is not operationally meaningful on 1.8.1 (the `route_topic` conditions cannot be satisfied). Replaced.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Source table |
| Did I search for synonyms and neighboring constructs? | pass | `clarif`, `__clarify_routing__`, `disambiguat`, `GATHER`, `infer`, `fused_with_routing_tool`, `interaction.clarification`, `waitingForInput` |
| Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback? | pass | Router, orchestrator, flow gather, multi-intent, behavior profile (scoped out) |
| Did I distinguish optional helpers from required executable config? | pass | `PERSONA` and `INTENTS` shape the question. `BEHAVIOR: ROLE: router` is required for the action |
| Did I explain how the reasoning layer uses free-form guidance? | pass | "How the router asks" |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Three-row approach table |
| Could a customer build the scenario another supported way? | pass | Fallback specialist and behavior profile named, scoped out |
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map above |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Names the router action, role condition, flow-transition routing, and the supervisor `GATHER` limit. Examples compile clean | None blocking. Supervisor `GATHER` end-to-end behavior is an open question |
| Senior content writer | ready | Answer-first, approach table, short sentences, no dashes | None |
| Product manager/customer enablement | ready | Customer picks by need. Verification lists utterances and trace events. Troubleshooting table | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 2 | Removed unsupported supervisor `GATHER` claim. Added router action, flow-transition routing, quoted-hint behavior | 5 |
| Depth of conceptual explanation | 3 | Approach table and "How the router asks" | 4 |
| Readability and usability | 4 | Tables, short sentences | 5 |
| Coverage of examples | 2 | Two operationally meaningful full-document examples plus a snippet | 4 |
| Search and discovery quality | 4 | Added `__clarify_routing__`, `OPTIONS`, `disambiguate` | 4 |
| Completeness of workflow and failure modes | 3 | Invalid answer, unmatched value, vague request, two requests | 4 |
| Customer/partner self-service readiness | 4 | Stand-ins labeled. No repo paths | 4 |
| Scenario comprehensiveness | 3 | Added router, flow, multi-intent. Behavior profile scoped out | 4 |
| Article completeness | 4 | All template sections present | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- Old article and the published `clarify-before-routing.mdx` claim a supervisor `GATHER` runs before any `HANDOFF`. The code skips the extraction pass for router and orchestrator supervisors (`reasoning-executor.ts` 11852-11935). The public reference (`multi-agent-and-supervisor.mdx` line 16) says a supervisor does not gather information directly. The new article agrees with the reference.
- Public reference documents `EXPECT_RETURN` and nested `CONTEXT` as primary (lines 442-458). The refreshed 1.x and 2.x articles use `RETURN`, `PASS`, and `SUMMARY`. This article follows the refreshed articles.
- Published page `agent-platform/abl/how-to/clarify-before-routing.mdx` needs the same change after approval.

## Open questions

- Runtime test needed: a router supervisor with no fitting route calls `__clarify_routing__`, and a later `infer: true` supervisor `GATHER` field plus a `WHEN` on that field routes. Both are close-read only.
- `__clarify_routing__` shows in traces as a `tool_call` (action tool name begins with `__`). Not confirmed against a live trace.
- Should a behavior-profile `interaction.clarification` example be added here or kept in the behavior profiles HowTo?
