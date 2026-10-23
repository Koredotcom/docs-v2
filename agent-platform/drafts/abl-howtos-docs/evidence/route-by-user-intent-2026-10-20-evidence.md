# Evidence: route-by-user-intent

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-by-user-intent.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/route-by-user-intent-2026-10-20-review.md`
**Topic:** 3.1 - How to route conversations based on user intent
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. The previous refresh used `hotfix_Artemis_1.4.4`. The 2026-08-21 evidence ran no harness (it records "no runnable harness").
**Verdict:** update-needed

## Validation harness

A real harness lives in the session scratchpad (`.../scratchpad/s3/`), outside the code repo. It bundles `packages/core` and `packages/compiler` with `esbuild`, then calls `parseAgentBasedABL`, `compileABLtoIR`, and `validateABL` (`validate-ir.ts`) over a set of files as one project. A second bundle calls the runtime evaluators `evaluateRoutingPrimitiveWhen` (`routing-primitive-executor.ts`) and `nullSafeEvaluateCondition` (`pipeline/null-safe-eval.ts`) on sample contexts. Negative tests produced errors and warnings, so the harness reports problems. Runtime services were not started. Runtime behavior beyond the evaluators is close-read. The code repo was not modified and no branch was switched.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseHandoffConfig` near 7963, `applyRouteCondition`, ROUTING `E104`) | HANDOFF fields, shorthand `PASS`/`SUMMARY`/`HISTORY`, `PRIORITY` stored in `config.priority`, `MAP` stored as child key to parent key, inline `history` value lowercased as a plain string. |
| `packages/compiler/src/platform/ir/compiler.ts` (routing block near 1590, `compileOnReturnConfig` 3562, handoffs near 3615, `compileFailureHandling` 4252) | `priority: idx + 1` from position. `PRIORITY` not copied to IR. `on_failure` actions. `default_agent`. |
| `packages/compiler/src/platform/ir/validate-coordination-config.ts`, `validate-cross-agent.ts`, `validation-types.ts` | `UNKNOWN_HANDOFF_RETURN_FIELD`, `HANDOFF_ON_RETURN_WITHOUT_RETURN`, `INVALID_HANDOFF_FAILURE_ACTION`, `UNDECLARED_INTENT_CATEGORY`. |
| `apps/runtime/src/services/pipeline/routing-resolver.ts` | `resolveRouting` sorts by `priority`, first true `WHEN` wins, emits `pipeline_routing_resolve`. |
| `apps/runtime/src/services/pipeline/runtime-contract.ts` (`buildPipelineControlFlowRules`) and `reasoning-executor.ts` (`resolveCurrentIntentShortCircuitRoute`) | Pipeline short-circuit path. No filtering of quoted phrases. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`runHandoff` guard near 10100, `checkHandoffConditions` near 24830, `handleHandoffFailure` near 27740, `resolveHistoryStrategy` near 26658, return merge near 13990, `findSoleMatchingOtherHandoff` near 7965) | Model-selected route guard, ordered first-match check after a return, `ESCALATE` failure action, history default, `map` direction, default merge of gathered data. |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | `WHEN` outcomes: `deterministic_pass`, `deterministic_fail`, `semantic_deferred`, `missing_data`. `intent` is a semantic root. |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`buildHandoffTools`, `buildHandoffDescription`, `buildHandoffInputSchema`, `handoffRequiresRouteIntent`) | One action per target, `[Priority N]`, `Use when:` text, typed `PASS` inputs, required `intent` input. |
| `packages/compiler/src/platform/constructs/executors/handoff-executor.ts` | `MAX_HANDOFF_DEPTH = 10`, called from `routing-executor.ts` near 10272. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`, `DEFAULT_AUTO_HANDOFF_HISTORY_FALLBACK_LAST_N = 5`. |
| `apps/runtime/src/services/runtime-executor.ts` (`initialData` near 8259) | `session.identityTier` and caller data spread into the `session` namespace. |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` (secondary) | Public reference cross-check. See discrepancies. |

Tests and examples: `packages/compiler/src/__tests__/routing-default-agent.test.ts` (from the earlier run), `examples/travel/agents/traveldesk_supervisor.agent.abl` (supervisor with `intent.category` and `user.is_authenticated` conditions).

## Drift analysis (1.4.4 to 1.8.1)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| Route admission and availability | New in 1.8.1 (`route-admission/`, `routing-availability.ts`). The `WHEN` guard on model-selected calls is enforced there. | Article now explains guard behavior and the three paths. |
| `UNDECLARED_INTENT_CATEGORY` warning | New in 1.8.1. | Added to checklist and troubleshooting. |
| `MEMORY` block in the old example | The map form (`customer_id:` with `type:` and `source: session`) parses to an empty session list (harness IR `memory.session = []`). It declares nothing and gives no warning. The list form with `TYPE` declares the variable and produces the new warning `W801` when nothing populates it. | `MEMORY` block removed. `PASS` source rules explained instead. |
| `session.interaction.current.*` | New in 1.8.1 (`applyResolvedInteractionContextToSessionData`). | Used in the 3.3 article. |
| History default | `full`, unchanged. A project default (`coordination_defaults.defaultHistoryStrategy`) can override. | One sentence added. |
| `PRIORITY:` | Parsed in both versions, never compiled. `priority: idx + 1` in both versions. | The old "Set evaluation order with PRIORITY" section was wrong in both versions. Removed. |
| `MAP` direction | Child key to parent key in both versions. | Example kept and explained. |
| `ROUTING:` | `E104` in both versions. | Kept in mistakes. |
| Size of change | `routing-executor.ts` +15901 lines, `prompt-builder.ts` +3163, `compiler.ts` +1984, `agent-based-parser.ts` +7290. | All claims re-verified against current code. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| `INTENTS:` declared categories with `intent.category == "x"` | yes | Harness clean. `handoffRequiresRouteIntent`. | covered |
| Inferred categories when `INTENTS:` is absent | yes | Earlier evidence for 1.3 (`s_noint`). Compiler `compileIntentClassification`. | covered (one sentence) |
| Pipeline path (classifier, first true `WHEN` by position, short-circuit) | yes | `routing-resolver.ts`, `runtime-contract.ts`. Evaluator tests. | covered |
| Model-selected path with `WHEN` guard | yes | `routing-executor.ts` near 10100. Evaluator: missing intent gives `semantic_deferred`. | covered |
| First-match check after a child returns | yes | `checkHandoffConditions`, `selectedReason: 'first_match'`. | covered |
| Quoted plain-language `WHEN` | yes | `semantic_deferred` for all sample phrases. Harness clean. | covered (variation) |
| Quoted phrase is always true in the pipeline | yes | `nullSafeEvaluateCondition` returns true. No filter in `selectRouteSources`. | covered |
| `WHEN: true` fallback and `default_agent` | yes | IR `default_agent`. Harness clean. | covered |
| Nested `CONTEXT:` and sibling `PASS`/`SUMMARY`/`HISTORY` | yes | Parser. Harness clean. | covered |
| `PASS` value sources | yes | `routing-executor.ts` near 11540: parent data overrides model input. | covered |
| History `full`, `auto`, `none`, `summary_only`, `last_n` block | yes | IR `history` for each (harness). | covered |
| Inline `history: { mode: last_n, count: 6 }` | no (silently ignored) | IR `history` is undefined (harness `v1b`). | covered (gotcha) |
| `EXPECT_RETURN` and `RETURN` alias | yes | Parser. | covered |
| `ON_RETURN` `action`, `map` | yes | Parser, runtime merge near 14000. `UNKNOWN_HANDOFF_RETURN_FIELD` (harness). | covered |
| `ON_RETURN` default merge without `map` | yes | `routing-executor.ts` near 14115. | covered |
| `ON_RETURN` `handler`, `resume_with`, `set` | yes | Parser. | out of scope: return handling topic |
| `PRIORITY:` | no (parsed, discarded) | IR rules show `priority` 1..n by position (harness `t1`). | covered (not supported) |
| `ON_FAILURE` `CONTINUE`, `ESCALATE`, `RESPOND` | yes | `handleHandoffFailure`. Harness clean. | covered |
| Bare quoted `ON_FAILURE` | no | `INVALID_HANDOFF_FAILURE_ACTION` (harness `v4b`). | covered |
| `ROUTING:` section | no | `E104` (harness `rt`). | covered |
| `ENABLED_WHEN` | yes | Parser, `routing-availability.ts`. | out of scope: covered in 3.2, 3.3, and 1.3 |
| `MULTI_INTENT` | yes | Parser. | out of scope: multiple intents article |
| `DELEGATE` | yes | Parser. | out of scope |
| `LOCATION`, `ENDPOINT`, `PROTOCOL`, `ASYNC`, `EXPERIENCE_MODE`, `memory_grants`, `CONTEXT.set` | yes | Parser. | out of scope: advanced and remote targets |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Evaluators run on sample contexts. Guard, resolver, return merge close-read. | covered | Close-read, not run end to end. |
| Required companion resources identified | Five-file project defines supervisor and four targets. Verification, billing, and refund stand-ins are named in the variation text. | covered | Variation companions are described, not shown in full. |
| Referenced variables have sources | `PASS`: parent data, then model input. `session.identityTier`: caller context. `verification_result`: `map` target. | covered | None. |
| Fallback/failure/ambiguity behavior verified | `WHEN: true` fallback, `ON_FAILURE` table, refusal message, ordering. | covered | None. |
| Customer verification path defined | Six steps with named trace events. | covered | None. |
| Production readiness checklist included | Nine items. | covered | None. |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 to 5 (supervisor plus four agents) | full-document set | `validateABL` harness, validated together as five files (`chk.py`) | pass | none | rewritten. The old single block put five documents in one file and fails with `E101` when pasted. |
| Block 6 (`history` options) | section-snippet | Entry replaced in the supervisor, project validated | pass | none | kept |
| Block 7 (sibling context keys) | section-snippet | Same method | pass | none | kept |
| Block 8 (`ON_RETURN` with verification) | section-snippet | Same method, with a `Verification_Agent` that gathers `verified` | pass | none | kept |
| Block 9 (specific before general) | section-snippet | Same method, with `Account_Billing_Agent` | pass | none | new |
| Block 10 (plain-language route) | section-snippet | Same method, with `Refund_Specialist` | pass | none | new |
| Block 11 (`ON_FAILURE`) | section-snippet | Same method | pass | none | kept |

Negative tests: `ROUTING:` gives `E104`. A reversed `map` gives `UNKNOWN_HANDOFF_RETURN_FIELD` (error). `ON_RETURN` without `EXPECT_RETURN` gives `HANDOFF_ON_RETURN_WITHOUT_RETURN`. `ON_FAILURE: "text"` gives `INVALID_HANDOFF_FAILURE_ACTION`. An undeclared category gives `UNDECLARED_INTENT_CATEGORY`. A list-form `MEMORY` variable without a population source gives `W801`.

Evaluator results used in the article: `intent.category == "billing"` with no intent in context is `semantic_deferred`. With a matching intent it is `deterministic_pass`. `intent.category == "billing" AND session.identityTier == 2` with tier `0` is `deterministic_fail`. A quoted phrase is `semantic_deferred` in the route guard and `true` in `nullSafeEvaluateCondition`.

## Lessons check

| Lesson | Result |
| ------ | ------ |
| 1. Bare quoted `WHEN` is truthy in deterministic evaluators | Applied. Pipeline caveat added. |
| 2. Channel values | Not a topic here. `session.channel` is used in 3.3. |
| 3. Quoted `TIMEOUT` | Not used. |
| 4. History default `full` | Re-verified. |
| 5. `ESCALATE` reaches a person only with a connection and a `routing` block | Applied to `ON_FAILURE: ESCALATE`. Sets `session.isEscalated`. See open questions. |
| 6. Settings compiled, not only parsed | `PRIORITY` is parsed only. Applied. |
| 7. Trace events emitted | Used `handoff_condition_check`, `handoff_context_pass_resolved`, `pipeline_classify`, `pipeline_routing_resolve`. All emitted. `pipeline_short_circuit` is declared only and is not used. |
| 8. `!= ""` and `IS SET` | Not used in this article. |
| 9. `AGENTS:` discarded | Not used. |
| 10. `COMPLETE WHEN: true` stubs | Stand-ins have a goal only. |
| 11. Entry flow `THEN: COMPLETE` | Not applicable. |
| 12. `ENABLED_WHEN`, `UNDECLARED_INTENT_CATEGORY`, `MULTI_INTENT` | Covered by reference to other articles and the checklist. |
| 13. Delegate child input | Not applicable. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 2 | Removed the ordered first-match claim, the `PRIORITY` section, the inert `MEMORY` block, and the ungrounded-pass warning. Added three-path table. Every claim has a code or harness source. | 5 |
| Depth of conceptual explanation | 3 | Added path table, condition styles, order rule, pipeline caveat. | 5 |
| Readability and usability | 4 | Per-file examples, short tables. | 4 |
| Coverage of examples | 2 | Five-file project, six validated snippets. | 4 |
| Search and discovery quality | 4 | Error and warning codes in tables. | 5 |
| Completeness of workflow and failure modes | 3 | `ON_FAILURE` table, refusal behavior, fallback, depth limit. | 4 |
| Customer/partner self-service readiness | 3 | No repo paths. Companion stand-ins labeled. | 4 |
| Scenario comprehensiveness | 3 | All `yes` rows covered or scoped out with a reason. | 4 |
| Article completeness | 4 | Template sections present. | 5 |

**Gate result:** pass (minimum score 4)

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, types, compiler, runtime, tests, and examples? | pass | See source table. |
| Did I search synonyms and neighboring constructs? | pass | `HANDOFF`, `ROUTING`, `condition`, `intent`, `handoff_to_`, `delegate`, `PRIORITY`, `ENABLED_WHEN`, `MULTI_INTENT`, `history`, `ON_RETURN`. |
| Did I identify every authoring style, shorthand, alias, default, and fallback? | pass | Nested and sibling context, `RETURN` alias, history forms, `WHEN: true`, default merge. |
| Did I separate optional helpers from executable configuration? | pass | `INTENTS:` optional. `HANDOFF:` executable. |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Condition styles table and path table. |
| Did I avoid making one pattern sound like the only pattern? | pass | Three condition styles, two context forms, three paths. |
| Could a customer build the scenario another supported way? | pass | Pipeline-only, quoted routes, `DELEGATE`, `MULTI_INTENT` are named or scoped out. |
| What evidence shows all scenarios are considered? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | States the three evaluation paths, guard behavior, `map` direction, ignored `PRIORITY`, silent inline `last_n`. Examples validated as projects. | None blocking. End-to-end runtime run is not done. |
| Senior content writer | ready | Concept first, tables for decisions, short sentences, no dashes. | None. |
| Product manager/customer enablement | ready | Named trace events, error codes, checklist, fallback guidance. | None. |

## Documentation discrepancies for human review

- Public reference `multi-agent-and-supervisor.mdx` "Routing rules" (lines 59 to 183) documents `ROUTING:` with `NAME`, `PRIORITY`, `THEN`. The parser rejects `ROUTING:` with `E104` in 1.4.4 and 1.8.1.
- Public reference says HANDOFF `PRIORITY` is an "Evaluation priority" and "HANDOFF rules evaluated by priority (lower first)" (lines 432 and 1288). The compiler ignores `PRIORITY`. Position sets priority.
- Public reference history section lists `{ mode: last_n, count: <n> }`. The inline form compiles and has no effect. The block form works.
- Public reference `ON_RETURN` example uses `user.is_authenticated == false`. The `user` namespace is not verified in the routing context here.
- Published page `agent-platform/abl/how-to/route-by-user-intent.mdx` needs the same changes after approval.

## Open questions

- Does `ON_FAILURE: ESCALATE` on a supervisor reach a person without an `ESCALATE` block on the supervisor? The code sets `session.isEscalated` and a reason. The delivery path was not traced.
- Should `PRIORITY:` produce a warning, or should the compiler honor it? Engineering decision.
- The pipeline-on path was not run. The three-path table rests on code reading and evaluator tests.
