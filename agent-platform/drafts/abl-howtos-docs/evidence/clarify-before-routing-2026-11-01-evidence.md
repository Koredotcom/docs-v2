# Evidence: clarify-before-routing

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/clarify-before-routing.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/clarify-before-routing-2026-11-01-review.md`
**Topic:** 3.7 - How to ask a clarification question before routing
**Workflow:** Refresh against `release_Artemis_1.9.0`. Previous evidence: `evidence/clarify-before-routing-2026-10-20-evidence.md` (against `hotfix_Artemis_1.8.1`).
**Verdict:** update-needed (small additions)

## Validation harness

`validateABL` (`packages/compiler/src/platform/ir/validate-ir.ts`) from the code repo source on `release_Artemis_1.9.0`, run through `scratchpad/harness/validate.mjs` from `/tmp`. A second script (`harness/ir.mjs`) compiles to IR and prints `execution_policy` and `routing.direct_response_allowed`. The code repo stays read-only on `release_Artemis_1.9.0`. Runtime services were not started. Runtime behavior is close-read from source and tests. Hotfix comparison used `git grep` on `hotfix_Artemis_1.8.1`, because the 1.9.0 branch does not descend from it.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/prompt-builder.ts` (5035-5062) | Adds `__clarify_routing__` when role is `router`, at least one route is visible, and the policy is explicit or `direct_response_allowed !== false`. Unchanged in shape from 1.8.1 |
| `apps/runtime/src/services/execution/supervisor-response-authority.ts` | `SUPERVISOR_ROUTING_CLARIFICATION_TOOL_NAME`, `direct_response` versus `routing_required` |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (29326-29340, 8070-8089, 11725-11765, 13060-13115, 17406) | The action returns the `message` as the reply and breaks the loop with `{ type: 'continue', clarification: true }`. Repair prompts name the action. New 1.9.0 multi-intent scope clarification path |
| `apps/runtime/src/services/execution/agent-execution-role.ts` | Role resolution. Harness `ir.mjs`: explicit `BEHAVIOR: ROLE: router` gives `role: router`, `direct_response_allowed: false`. No `BEHAVIOR` block gives `direct_response_allowed: true` and no `execution_policy` (orchestrator) |
| `apps/runtime/src/services/execution/routing-executor.ts` (`checkHandoffConditions` about 26200-26260, blocked text 8570-8590) | Authored-order check. Blocked route text `Handoff to X blocked: WHEN condition not met (...)` |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (8795-8830) | `checkHandoffConditions` runs with `source: 'flow_transition'` when a step ends. Some flow modes suppress handoffs whose `WHEN` reads user input scope. The article example reads a gathered field, so it is not affected |
| `apps/runtime/src/services/execution/multi-intent/multi-intent-router.ts` (446-481) | `disambiguate` strategy and header message |
| `packages/core/src/parser/condition-quotes.ts`, `agent-based-parser.ts` (`readRouteCondition`, `applyRouteCondition`, `stripTrailingConditionComment`) | Comment handling in route `WHEN` and `ENABLED_WHEN` |
| `packages/compiler/src/platform/constructs/routing-condition-classifier.ts` | 1.9.0 calls `normalizeRoutingConditionAtomTrivia` before the plain-language check. Classifier patterns unchanged |
| `apps/runtime/src/__tests__/execution/reasoning-executor-guards.test.ts` (7320, 8571-8680), `ablp-3293-producer-parity.test.ts` (786) | Tests for the clarification action |
| `apps/runtime/src/__tests__/ablp-5137/ablp-6271-*.test.ts`, `execution/ablp-6271-informational-question-contract.test.ts` | ABLP-6271 tests. Cover governed offer replies, pure decline responses, held proposal answers, informational question role. They concern the governed task-authority feature (`projectGovernedMode`), not router clarification. No article change |
| `examples/ai4h-payer/agents/welcome_agent.agent.abl` | Real supervisor with `FLOW` and one clarifying question (checked in 1.8.1 evidence) |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` | Public reference cross-check (unchanged since last run) |

## Drift analysis (1.8.1 to 1.9.0)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| Router action `__clarify_routing__` | Present in 1.9.0. Offered under the same conditions. Reply path unchanged. 12 references in 1.8.1, 15 in 1.9.0 | No change |
| Hotfix backport check | Every trace name and diagnostic in the article exists in 1.9.0 (`handoff_condition_check`, `route_condition_unresolved`, `handoff_return_handler`, `multi_intent_disambiguate`, `WHEN condition not met`). No behavior in the article is hotfix-only | No removal needed |
| Multi-intent scope clarification | New in 1.9.0 (`clarifyAuthoredMultiIntentBeforeRouting`, 0 references in 1.8.1). Gate: `legacyAuthoredMultiIntentFallback` (supervisor at thread 0, multi-intent enabled, governed mode off, conditional routes, more than one category) and `supervisorOnlyClassifierFallbackEligible` (first customer request, pipeline not enabled, intent bridge enabled). Fires when more than one in-scope request exists and one has an unknown category or a confidence below the multi-intent threshold. It removes routing tools for that turn and adds a "ask one concise question" prompt. Trace `decision` with `type: multi_intent_scope_clarification_required` | New paragraph in the multi-intent section. Close-read only |
| Route `WHEN` comments | `//` outside quotes is a comment. A comment-only `WHEN` gives compile error `WHEN is required`. Harness: trailing `// note` after a structured condition compiles clean. A full-line `// note` inside `HANDOFF:` compiles clean. Comment-only `WHEN:` gives `AGENT_COMPILATION_FAILED: WHEN is required` | One paragraph and one mistake row |
| Classifier | `isNaturalLanguageRoutingHint` now strips comment trivia first. The uppercase `AND`/`OR`/`NOT` rule is unchanged | No change |
| `handoff_completed` | New terminal record (`outcome`: success, rejected, blocked, error, timeout; `durationMs`). Emitted per handoff attempt | Not added to this article. Used in the 3.8 article |
| `ON_RETURN`, `RETURN: false` hand-back, `parentReturn`, `executionFailureFallback` | Not used by this article's examples. The router example uses `RETURN: false` routes whose specialists have no `HANDOFF` back | No impact |
| ABLP-6271 tests | Governed follow-up and offer-reply behavior. Not router clarification | No impact |
| Multi-intent defaults | `primary_queue`, enabled, unchanged. 1.9.0 adds more references to `advance_on_primary_response` and `list_other_requests` | Not documented here |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Router supervisor asks one question through `__clarify_routing__` | yes | `prompt-builder.ts` 5035-5062. Harness `ir.mjs`: `role: router` | covered (minimal example) |
| Orchestrator or no-`BEHAVIOR` supervisor asks in plain text | yes | Harness `ir.mjs`: no `BEHAVIOR` gives `direct_response_allowed: true`, no action | covered (one sentence) |
| Entry agent with enum `GATHER` in a `FLOW` step and deterministic routes | yes | `flow-step-executor.ts` 8795-8830. Validation block 2 clean | covered |
| Supervisor `GATHER` as a question step | no | Extraction skipped for router and orchestrator supervisors (`fused_with_routing_tool`, `planned_with_routing_tool`, `reasoning-executor.ts` 12469, 12485) | covered as warning and mistake row |
| Supervisor `GATHER` with `infer: true` filled by the routing call | yes, partial | `routing-executor.ts` 2609-2664. No end-to-end test with a `WHEN` on the field | covered (one sentence) |
| Fallback specialist that asks several questions | yes | Fallback article | out of scope: pointer to the fallback HowTo |
| Multi-intent `disambiguate` question | yes | `multi-intent-router.ts` 446-481. Harness `h3` clean | covered (snippet) |
| Multi-intent scope clarification (unknown category among several requests) | yes (new in 1.9.0) | `reasoning-executor.ts` 13060-13115 | covered (new paragraph) |
| Behavior profile `interaction.clarification` | yes | 33 references in both versions | out of scope: behavior profile topic |
| Quoted plain-language fallback route | yes (model-only) | `routing-primitive-executor.ts`, `isLiveRoutingPrimitiveWhenMatched` | covered |
| Comment syntax in route `WHEN` | yes | Harness `x`, `y`, `n` | covered (new) |
| `WHEN: true` default route | yes | Design article | out of scope |
| `ESCALATE` to a person | yes | Design article | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Router action, flow-transition routing, blocked-route text, multi-intent wait, scope clarification read in the files above | covered | Close-read, not run |
| Required companion resources identified | Both examples define every target agent (stand-ins labeled) | covered | None |
| Referenced variables have sources | `route_topic` comes from the flow `GATHER`. The router example passes no fields | covered | None |
| Fallback, failure, ambiguity behavior verified | Invalid answer re-asks. Unmatched enum value ends the session. `other` route. Disambiguate. Scope clarification | covered | None |
| Customer verification path defined | Utterances and trace events (`tool_call` `__clarify_routing__`, `handoff_condition_check`, `handoff`) | covered | `__clarify_routing__` appearing as a `tool_call` is close-read |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (router supervisor + 2 agents) | full-document set | `validate.mjs` on the three documents split at `SUPERVISOR:`/`AGENT:` lines | pass | none | kept |
| Block 2 (entry agent + 3 agents) | full-document set | same harness, four documents | pass | none | kept |
| Block 3 (`MULTI_INTENT`) | section-snippet | Appended to the block 1 supervisor (`t37/h3-1.abl`) | pass | none | kept |

Extra checks (not in article blocks): trailing `// exact match` after a structured `WHEN` compiles clean. Full-line `// Billing route` inside `HANDOFF:` compiles clean. Comment-only `WHEN:` fails with `WHEN is required`.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Source table |
| Did I search for synonyms and neighboring constructs? | pass | `clarif`, `__clarify_routing__`, `disambiguat`, `GATHER`, `infer`, `multi_intent_scope_clarification_required`, `interaction.clarification`, `ABLP-6271` |
| Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback? | pass | Router, orchestrator, flow gather, multi-intent (two paths), behavior profile (scoped out) |
| Did I distinguish optional helpers from required executable config? | pass | `PERSONA` and `INTENTS` shape the question. `BEHAVIOR: ROLE: router` is required for the action |
| Did I explain how the reasoning layer uses free-form guidance? | pass | "How the router asks" |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Three-row approach table |
| Could a customer build the scenario another supported way? | pass | Fallback specialist and behavior profile named |
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map above |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Router action, role condition, flow-transition routing, scope clarification gate named. Examples compile clean | Runtime test for scope clarification is open |
| Senior content writer | ready | Answer first, approach table, short sentences, no dashes | None |
| Product manager/customer enablement | ready | Customer picks by need. Verification lists utterances and trace events | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-verified every claim on 1.9.0. Added comment rule and scope clarification with file evidence | 5 |
| Depth of conceptual explanation | 4 | Scope clarification gate explained in one paragraph | 4 |
| Readability and usability | 5 | Kept structure. New text is short | 5 |
| Coverage of examples | 4 | Examples revalidated on 1.9.0 | 4 |
| Search and discovery quality | 4 | Added `multi_intent_scope_clarification_required`, `WHEN is required` | 4 |
| Completeness of workflow and failure modes | 4 | Added scope clarification and comment-only `WHEN` | 4 |
| Customer/partner self-service readiness | 4 | No repo paths in article | 4 |
| Scenario comprehensiveness | 4 | New 1.9.0 variant covered | 4 |
| Article completeness | 5 | All template sections present | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- Published `agent-platform/abl/how-to/clarify-before-routing.mdx` differs from `articles/clarify-before-routing.md` only in frontmatter, the back badge, `yaml` code fences in place of `abl`, and a missing Related HowTos section. The body text matches. The proposed text keeps the draft form.
- Published page still carries the same text as the draft. The 1.8.1 refresh is already applied. No 1.8.x-only behavior needs removal.
- Public reference (`multi-agent-and-supervisor.mdx`) says a supervisor does not gather directly. Agrees with this article.
- `//` comment rule applies to every routing article that shows `WHEN`. Other articles may need the same note.

## Open questions

- The scope clarification gate has several conditions (pipeline off, first request, intent bridge enabled). Confirm the wording with the product owner. No runtime test was run.
- `__clarify_routing__` shows as a `tool_call` in traces. Not confirmed against a live trace.
