# Evidence: design-supervisor-routing-agent

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-supervisor-routing-agent.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/design-supervisor-routing-agent-2026-10-19-review.md`
**Topic:** 1.3 - How to design a supervisor that routes users to specialist agents
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. The previous refresh used `hotfix_Artemis_1.4.4`.
**Verdict:** update-needed

## Validation harness

A real parse and compile harness was built in the session scratchpad, outside the code repo. It copies `packages/core`, `packages/compiler`, and the imported workspace packages, transpiles TypeScript with `esbuild` in a Node loader, and calls `validateABL` (`packages/compiler/src/platform/ir/validate-ir.ts`). That runs `parseAgentBasedABL`, `compileABLtoIR`, and the IR validators over a set of files as one project. A deliberately broken project produced errors and warnings, so the harness reports problems. The code repo was not modified and no branch was switched. Runtime services were not started, so runtime behavior is close-read.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`applyRouteCondition`, `parseHandoffConfig`, `parseSupervisorBehavior`, `parseAgentsSection`, `MULTI_INTENT:` dispatch) | HANDOFF fields including `ENABLED_WHEN`, `PRIORITY`, `ON_FAILURE`, `HISTORY`; `BEHAVIOR` role values; discarded `AGENTS:` |
| `packages/compiler/src/platform/ir/compiler.ts` (routing block near line 1590, `compileIntentClassification`, `validateDeclaredIntentCategories`, `isExplicitDefaultHandoffCondition`, role checks near 1195, `E728` near 590) | Routing IR, categories, role rules, one-supervisor error |
| `packages/compiler/src/platform/ir/schema.ts` (`RoutingConfig`, `IntentConfig`, multi-intent types) | IR fields and defaults |
| `packages/compiler/src/platform/ir/multi-intent-config.ts` | Multi-intent defaults |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts`, `validate-preflight.ts`, `validate-authored-gate-facts.ts` | Cross-agent and routing diagnostics |
| `packages/compiler/src/platform/constructs/routing-condition-classifier.ts` | Structured versus plain-language `WHEN` |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`buildHandoffDescription`, `buildHandoffInputSchema`, `handoffRequiresRouteIntent`, clarification action near line 4619, escalate action near 4713) | How handoffs reach the model |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | `WHEN` evaluation outcomes, unconditional guards |
| `apps/runtime/src/services/execution/routing-executor.ts` (`isHandoffRouteMatchedByCurrentContext`, `isLiveRoutingPrimitiveWhenMatched`, admission, `resolveHistoryStrategy`) | `WHEN` enforcement, history |
| `apps/runtime/src/services/execution/routing-availability.ts`, `route-admission/surface.ts` | `ENABLED_WHEN` semantics |
| `apps/runtime/src/services/execution/supervisor-route-catalog.ts` | Category vocabulary source |
| `apps/runtime/src/services/execution/agent-execution-role.ts`, `reasoning-executor.ts` (supervisor gather branches near lines 3146 and 11855) | Role resolution, supervisor `GATHER` handling |
| `examples/device-care-support/agents/device_care_supervisor.agent.abl` | Real supervisor with inferred intents, multi-category `WHEN`, `CONTEXT` form |

Tests inspected: `packages/compiler/src/__tests__/ir/enabled-when-validation.test.ts` (header).

## Drift analysis (1.4.4 to 1.8.1)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| `ENABLED_WHEN` | New in 1.8.1 for HANDOFF and DELEGATE. Compile checks `ENABLED_WHEN_SEMANTIC_REFERENCE` (error) and `ENABLED_WHEN_ALL_DISABLED_RISK` (warning) are new | New article section |
| `UNDECLARED_INTENT_CATEGORY` warning | New in 1.8.1 | Added to article |
| Router clarification action (`SUPERVISOR_ROUTING_CLARIFICATION_TOOL_NAME`) | New in 1.8.1 | Fallback section updated |
| Route admission and availability refactor | New in 1.8.1 (`route-admission/surface.ts`, `routing-availability.ts`) | `WHEN` and `ENABLED_WHEN` enforced when the model calls a route |
| History default | Value `full` unchanged. Project default override is in 1.8.1 code | Note rewritten |
| `E728` multiple supervisors | Present in both versions | Wording corrected. The old article said an entry supervisor could be declared. No such declaration exists in the compiler |
| `AGENTS:` discarded | Same in both versions | Wording corrected |
| Multi-intent defaults | `primary_queue`, enabled by default, same in both versions. 1.8.1 adds `advance_on_primary_response`, `completion_signal`, `list_other_requests` | Sentence replaced. New fields not documented here |
| Quoted-phrase classification | `routing-condition-classifier.ts` unchanged | Gotcha added to the article |
| Size of change | `routing-executor.ts` +15901 lines, `prompt-builder.ts` +3163, `compiler.ts` +1984, `agent-based-parser.ts` +7290 | Claims re-verified against current code |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Declared intent category routing (`intent.category == "x"` with `INTENTS:`) | yes | Harness clean. `handoffRequiresRouteIntent` adds the required `intent` input | covered |
| Inferred categories when `INTENTS:` is absent | yes | `extractIntentCategories` inferred branch. Harness `s_noint` clean | covered |
| Undeclared category warning | yes | `UNDECLARED_INTENT_CATEGORY` (harness `s_typo`) | covered |
| Structured field condition (`customer_id IS SET`) | yes | `evaluateRoutingPrimitiveWhen`. Unset ordinary field gives false | covered |
| Quoted plain-language `WHEN` | yes | Harness billing set clean. `isNaturalLanguageRoutingHint` | covered |
| Unquoted plain-language `WHEN` | yes, with warnings | Harness `s_unquoted`: 12 `UNDEFINED_CONDITION_VAR` warnings | covered |
| Quoted phrase with `AND`, `OR`, `NOT`, comparison, or keywords | yes (becomes an expression) | Classifier patterns. Harness `s_upper` compiles clean, so only the runtime shows it | covered (close-read) |
| `WHEN: true` always-available route, `default_agent` | yes | `UNCONDITIONAL_ROUTING_GUARDS`, `isExplicitDefaultHandoffCondition`. Harness `s_default` clean | covered |
| `RETURN: true` or `false` | yes | Parser, `buildHandoffDescription` | covered |
| `PASS` as typed inputs of the routing action | yes | `buildHandoffInputSchema` | covered |
| `HISTORY` modes and project default | yes | `resolveHistoryStrategy`. Harness `s_hist` clean | covered (one sentence) |
| Supervisor role `router` and `orchestrator` | yes | Harness `sup-router`, `sup-orch` clean. `role: router` plus `DELEGATE` gives `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR` | covered |
| No `BEHAVIOR` block | yes | IR `direct_response_allowed: true` (harness `ir4`) | covered |
| `ENABLED_WHEN` with `ON_FAILURE` | yes | Harness `sup-enabled` clean. Natural language gives error. All-conditional gives warning | covered |
| `MULTI_INTENT` with `strategy: disambiguate` | yes | Harness `sup-multi` clean. IR shows `multi_intent` | covered |
| `ESCALATE` as the human route | yes | Harness `live`, `live2` clean. Prompt builder adds escalate action | covered |
| One supervisor per project | yes | `E728` (harness) | covered |
| `PRIORITY` on a handoff, priority gates | yes | Parser `PRIORITY`, `[Priority N]` in action text | out of scope: covered by the priority gates article |
| `ON_RETURN`, `RETURN_HANDLERS` | yes | Parser | out of scope: return handling topics |
| `CONTEXT:` block form with `pass:` and `summary:` | yes | Parser, device-care example | out of scope: same data in a second form |
| Remote agent targets (`LOCATION`, `ENDPOINT`, `PROTOCOL`, `ASYNC`) | yes | Parser | out of scope: external agent topic |
| Flow-based or step-based supervisor routing | yes | `flow` plus `HANDOFF` in `compiler.ts` | out of scope: topic 1.5 and routing articles |
| Pipeline classifier categories (`EXECUTION.pipeline`) | yes | `supervisor-route-catalog.ts` | out of scope: topics 1.10 and 1.11 |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Routing action text, `PASS` inputs, admission, availability, role behavior read in the runtime files above | covered | Close-read, not run |
| Required companion resources identified | Supervisor, three specialists, and `Live_Agent` defined. Billing set defines both specialists. Human transfer labeled a project assumption | covered | None |
| Referenced variables have sources | `customer_id` is passed by the model and gathered again by each specialist | covered | Supervisor `GATHER` behavior is an open question |
| Fallback, failure, ambiguity behavior verified | `human_help` route, router clarification action, `WHEN: true` default, `MULTI_INTENT`, `ENABLED_WHEN` plus `ON_FAILURE` | covered | None |
| Customer verification path defined | Seven steps with utterances and trace event names | covered | None |
| Production readiness checklist included | Present, adds one-supervisor and category checks | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 to 4 (support supervisor plus three agents) | full-document set | `validateABL` harness, validated together | pass | none | block 4 (`Live_Agent`) rewritten |
| Blocks 5 to 7 (billing supervisor plus two agents) | full-document set | `validateABL` harness, validated together | pass | none | specialists reduced to a goal |
| Block 8 (`BEHAVIOR: ROLE: router`) | section-snippet | Appended to block 1, validated with blocks 2 to 4 | pass | none | new |
| Block 9 (`ENABLED_WHEN` entry) | section-snippet | Replaces the first `HANDOFF` entry of block 1, validated with blocks 2 to 4 | pass | none | new |
| Block 10 (`MULTI_INTENT`) | section-snippet | Appended to block 1, validated with blocks 2 to 4 | pass | none | new |
| Old blocks 4, 6, 7 (`COMPLETE` with `WHEN: true`) | full-document | `validateABL` harness | pass | none | replaced. They compile but print text and do not match the article's own advice |

Command: `node --import ./reg.mjs val.mjs <review file>` for the sets, and a wrapper script that builds the three snippet projects from the review file text. Result: zero errors and zero warnings in all seven projects. Support supervisor plus billing supervisor in one project gives `E728`, as documented.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | See source table |
| Did I search for synonyms and neighboring constructs? | pass | `HANDOFF`, `routing`, `condition`, `intent`, `prompt`, `handoff_to_`, `delegate`, `ENABLED_WHEN`, `BEHAVIOR`, `ESCALATE`, `MULTI_INTENT`, `AGENTS` |
| Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback? | pass | `RETURN` alias, `PASS` shorthand, `CONTEXT` form, inferred versus declared `INTENTS`, history default, direct response default |
| Did I distinguish optional helper sections from required executable configuration? | pass | `AGENTS:` ignored, `INTENTS:` optional, `HANDOFF` executable |
| Did I explain how the reasoning layer uses free-form guidance? | pass | "How routing works" section |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Four condition styles, two roles, optional variations |
| Could a customer build the scenario another supported way? | pass | `CONTEXT` form, flow-based routing, remote targets, and priority are listed as out of scope with reasons |
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map above |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Explains how routing actions, `PASS`, `WHEN`, and roles work at runtime. Compile errors named. Examples validated | None blocking. Supervisor `GATHER` behavior and channel values are flagged as open questions |
| Senior content writer | ready | Concept first, then mechanism, then examples. Short sentences. No dashes | None |
| Product manager/customer enablement | ready | Variations map to real choices (role, availability, multi-request). Troubleshooting names error codes | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Replaced the unverified unset-field and trace claims. Corrected `AGENTS:` and `E728`. Every new claim has a code or harness source | 5 |
| Depth of conceptual explanation | 4 | Added "How routing works" before the first example | 5 |
| Readability and usability | 4 | Tables for styles and roles, short variations | 5 |
| Coverage of examples | 3 | Added role, availability, and multi-request snippets. Replaced stub agents | 4 |
| Search and discovery quality | 4 | Error and warning codes in troubleshooting | 5 |
| Completeness of workflow and failure modes | 3 | Added router clarification, default route, `ENABLED_WHEN` failure policy, `E728` | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Project assumptions labeled | 5 |
| Scenario comprehensiveness | 4 | Added role, availability, history, multi-intent. Priority, return handling, remote targets scoped out | 4 |
| Article completeness | 4 | Added Related HowTos | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- The previous article and evidence said a project could declare an intended entry supervisor. The compiler has no such declaration. It reports `E728` for a second supervisor. Check whether the Studio project settings offer an entry agent choice and update the wording if so.
- The `ENABLED_WHEN` example now uses `channel.name == "voice"`. The public reference (`behavior-profiles.mdx` lines 98, 126, 131) documents `channel.name`, and routing entries use `system.channel`. `ENABLED_WHEN` evaluation with `channel.name` is not tested on 1.8.1. Test it before publishing.
- Published page `agent-platform/abl/how-to/design-supervisor-routing-agent.mdx` will need the same changes after approval.
- A quoted phrase that starts with a pattern like "customer in good standing" matches the classifier's `in` pattern and is treated as an expression. The article lists the main triggers only. Confirm whether to list this one.

## Open questions

- Does a supervisor `GATHER` with `required: true` ever stop routing? The runtime skips a separate extraction pass while routing actions exist (`planned_with_routing_tool`, `fused_with_routing_tool`). The article tells readers not to rely on it.
- Resolved from the public reference (2026-10-19). Public reference `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` (ESCALATE section, lines 825-1110): delivery needs a `routing` block (`connection`, `queue`, `skills`, `priority`, `post_agent`). A conditional `routing` list with no matching entry fails closed. The article now states this prerequisite and links to the ESCALATE reference.
- Should the article document the new multi-intent fields (`advance_on_primary_response`, `completion_signal`, `list_other_requests`)? The handle-multiple-intents article is the better home.


## Post-publication correction (2026-10-20)

- `ENABLED_WHEN: channel.name == "voice"` disables the route. Availability reads the thread's `data.values` (`routing-availability-snapshot.ts`), where only `session.channel` exists (`runtime-executor.ts` initialData). Tested with the real `resolveRoutingAvailability`: `channel.name` gives `enabled_when_missing_data` unless a `channel` object is present; `session.channel == "voice"` enables only on exactly `voice`; `session.channel IN ["voice","voice_twilio"]` enables both. Article and `.mdx` page now use `session.channel`.
- `handoff_context_pass_resolved` fires only when a `PASS` field is a current-turn input name (`request`, `message`, `utterance`, and similar) in `routing-executor.ts`. It never fires for `customer_id`. Article and `.mdx` verification steps now use the `handoff` event `context` and `handoff_context_seed` `seededFields` and `remainingWaitingFields`.
