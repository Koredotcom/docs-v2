# Evidence: handle-multiple-intents

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/handle-multiple-intents.md`
**Topic:** 3.6 - How to handle messages that contain multiple user intents
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`, evidence dated 2026-08-21)
**Verdict:** update-needed

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseMultiIntentSection` ~13887-13965) | Agent block keys: `strategy`, `unknown_relationship_strategy`, `max_intents`, `confidence_threshold`, `queue_max_age_ms`, `enabled`, `advance_on_primary_response`. Governed keys give `E465`. Bad literals give `E460`, `E461`, `E462`. Other keys are ignored without a message. |
| `packages/core/src/types/agent-based.ts` (`MultiIntentConfig` ~2627, `MULTI_INTENT_PROJECT_ONLY_KEYS`) | AST fields. |
| `packages/compiler/src/platform/ir/compiler.ts` (`compileMultiIntentConfig` ~257-355) | Range and enum checks. Codes `MULTI_INTENT_INVALID_*`. Output `intent_handling.multi_intent`. |
| `packages/compiler/src/platform/ir/multi-intent-config.ts` | Defaults, ranges, project-only governed keys, `completion_signal`, `list_other_requests`. |
| `packages/shared/src/validation/project-runtime-config.ts` (`multiIntentConfigSchema` ~252) | Project-level keys. |
| `apps/studio/src/components/settings/RuntimeConfigTab.tsx` | A Multi-intent section exists in the Runtime Config tab. |
| `apps/runtime/src/services/execution/multi-intent/multi-intent-types.ts` (`resolveMultiIntentConfig`, `normalizeDisambiguateOptionTemplate`, `parseDisambiguationChoice`) | Precedence agent > project > platform. Old default option text treated as unset. Choice parsing. |
| `apps/runtime/src/services/execution/multi-intent-strategy.ts` | `resolveStrategy`: `auto` never fans out. `resolveSupervisorToolCallStrategy`. |
| `apps/runtime/src/services/execution/multi-intent/multi-intent-router.ts` (`resolveDetectedMultiIntentPlan` 376, `buildSupervisorRoutingToolFanOutPlan` 1613, `emitPlanTrace` 321, `buildDisambiguationOptionTemplateData` 81, `applyResolvedMultiIntentPlan` ~1300-1450) | Plan building, trace events, option variables, queue seeding. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (`resolveSupervisorParallelRoutingPolicy` ~6562, `disableParallelToolUse` ~16449, batch handling ~17900-18100, classifier path ~12700-12950, `buildFallbackDisambiguationMessage` ~7570) | Supervisor batches, router role gate, pipeline classifier path. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`detectMultipleIntents` 10043, `dispatchMultiIntentIfNeeded` 9982, call site ~18739) | Flow detection from two or more conditional `ON_INPUT` branches. |
| `apps/runtime/src/services/execution/multi-intent/sequential-executor.ts` | Sequential tasks, failed-task rule, all-failed message, 30 minute continuation. |
| `apps/runtime/src/services/execution/multi-intent/delivered-answer-boundary.ts`, `runtime-executor.ts` (~13064-15100) | `advance_on_primary_response`, delivered-answer boundary, offer surfacing, confirmation. |
| `apps/runtime/src/services/execution/multi-intent/disambiguation-interaction-resolver.ts` | Decisions: choice, pause, resume, cancel. Reprompt text. |
| `apps/runtime/src/services/execution/localized-messages.ts` (`renderQueuedIntentNoticeMessage` ~1098) | Notice and follow-up composition. `next_intent` variable. |
| `apps/runtime/src/services/execution/queued-intent-expiry.ts`, `intent-queue.ts` | Expiry and `multi_intent_queue_retired`. |
| `apps/runtime/src/services/execution/agent-execution-role.ts` and its test | `canCoordinateReturnedWork`: an explicit `router` role cannot coordinate returned work. |
| `packages/compiler/src/platform/constants.ts` (~159-195) | Default message texts. |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts` (~485) | `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED`. |
| `apps/runtime/src/__tests__/multi-agent-orchestration.e2e.test.ts` (ABLP-1918 at 1107; parallel at 528) | Supervisor `primary_queue` and `parallel` runs. |
| `apps/runtime/src/__tests__/reported-runtime-regressions.test.ts` (flow DSL 290 and 332; tests ~1896-2060) | Flow `primary_queue` and `disambiguate` runs. |
| Public reference `nlu.mdx` (Multi-intent handling) and `lifecycle-and-hooks.mdx` (`MESSAGES`) | Secondary cross-check. |

## Drift analysis (1.4.4 to 1.8.1)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| `auto` strategy | In 1.4.4: independent on a supervisor resolved to `parallel`. In 1.8.1: independent resolves to `sequential` for every agent type (ABLP-3293 stopgap). | The old article said independent intents on a supervisor resolve to `parallel`. Wrong now. `auto` never fans out. |
| Default `multi_intent_disambiguate_option` | Changed from `{{index}}. {{intent}} (confidence: {{confidence}})` to `{{index}}. {{choice}}`. The old text is treated as unset. | The old `MESSAGES` example used the old default, so it had no effect. New example and variable table. |
| New agent property | `advance_on_primary_response` (default `true`). | New row and explanation. |
| New project-only keys | `completion_signal`, `list_other_requests`, and governed keys (`governed_tasks`, `offer_policy`, `child_task_view`, `manage_safeguard`, `offer_resolver`). An agent block that names a governed key fails with `E465`. | New subsection and error row. |
| Disambiguation | Menu shows the customer's own request words (`{{choice}}`). Replies: number, exact text, button, semantic when a classifier is available, plus pause, resume, cancel. | Rewritten `disambiguate` text. |
| Supervisor batches | The supervisor model can return several routing calls. Strategy resolves after. An explicit `ROLE: router` supervisor gets no batching. Plans only include calls that pass the route guard. | New "sources" table. |
| `queue_max_age_ms` | Expiry traced as `multi_intent_queue_retired` (`queued_intent_expired`). | Verification and troubleshooting. |
| Sequential | Request failure does not stop the plan. Specialist input pauses the plan. 30 minute continuation. | New bullets. |
| `HANDOFF` history default | Still `full`. | One sentence kept. |
| `EXPECT_RETURN` vs `RETURN` | The parser treats both the same. | Removed the unsupported "legacy alias" mistake row. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Supervisor, `primary_queue`, several routing calls in one turn | yes | e2e ABLP-1918 (`Next: ...` offer, waiting for confirmation) | covered (minimal example) |
| Supervisor, `sequential` | yes | `sequential-executor.ts`, e2e tests, harness resolve | covered |
| Supervisor, `parallel` | yes | e2e test at 528, `resolveStrategy` | covered |
| Supervisor, `disambiguate` | yes | `buildSupervisorRoutingToolFanOutPlan`, resolver | covered |
| `auto` on a supervisor | yes | Harness: `auto` is `sequential` or `disambiguate` | covered |
| Classifier path (execution pipeline, intent bridge) | yes | `reasoning-executor.ts` ~12748 | covered (sources table) |
| Flow agent, two matching `ON_INPUT` branches | yes | Flow DSL tests, `detectMultipleIntents` | covered (variation) |
| Flow agent, `sequential` or `parallel` | gap | The flow supervisor comment says a flow plan under those strategies runs as primary-then-queue. A flow agent's behavior under `sequential` was not run. | out of scope |
| `enabled: false` | yes | `disableParallelToolUse`, flow guard | covered |
| `ROLE: router` supervisor | yes, no batching | `resolveSupervisorParallelRoutingPolicy`, harness IR | covered |
| `unknown_relationship_strategy` | yes | Harness matrix | covered |
| `advance_on_primary_response` | yes | `delivered-answer-boundary.ts`, reference | covered |
| Project-only keys | yes | Schema, `E465` harness | covered (table) |
| Governed multi-intent behavior (`governed_tasks` on) | yes | `task-authority/*` | out of scope: separate topic, listed as a project setting |
| `MESSAGES` keys and variables | yes | `constants.ts`, renderers, harness compile | covered |
| Offer replies (accept, decline, defer) buttons | yes | `multi_intent_offer_action_*` messages | out of scope: part of governed offers |
| Delegate targets in a plan | yes | `routingAction: delegate` | covered (one sentence) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code reading, e2e and regression tests, and real runtime functions in a harness. No live run with a model. | covered | State in open questions. |
| Required companion resources identified | Every example defines its agents. | covered | None. |
| Referenced variables have sources | No flat variables are passed. `MESSAGES` variables are listed. | covered | None. |
| Fallback, failure, ambiguity behavior verified | Failed task, all-failed message, expiry, decline, `disambiguate`, input pause. | covered | None. |
| Customer verification path defined | Six steps and a list of trace events. | covered | None. |
| Production readiness checklist included | Present. | covered | None. |

## Example validation

Harness: esbuild bundle of `validateABL`, built in the scratchpad under `w3/`. Blocks extracted by script. Negative controls: invalid strategy, range, boolean, and governed keys in one block.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Multi_Intent_Service_Supervisor` (with blocks 2 to 4) | full-document | `validateABL` with companions | pass | none | changed (no unsourced `PASS`, `SUMMARY`, `INTENTS` kept) |
| Blocks 2 to 4 stand-in agents | full-document | `validateABL` | pass | none | kept |
| Block 5 `Sequential_Service_Supervisor` (with blocks 6, 7) | full-document | `validateABL` | pass | none | replaced (the old flow example never matched two branches) |
| Block 8 `Parallel_Service_Supervisor` (with blocks 9, 10) | full-document | `validateABL` | pass | none | changed (added `INTENTS`, removed unsourced `PASS`) |
| Block 11 `Auto_Router` (with blocks 12, 13) | full-document | `validateABL` | pass | none | changed (`unknown_relationship_strategy: disambiguate`) |
| Block 14 `Support_Scripted_Agent` | full-document | `validateABL` | pass | none | new |
| Block 15 `MESSAGES` | section-snippet | Block 11 with `strategy: disambiguate` plus the block, plus companions | pass | none | changed (variables and default fixed) |

An earlier draft of the flow example used `SET: handled_intent = "billing"`. The validator then reported `MISSING_VARIABLE_PRODUCER_WARNING` because the IR stores the value without quotes. The final example omits the `SET`. The label then comes from the `THEN` target.

## Runtime semantics checks (harness, real runtime functions)

Strategy resolution for supervisor routing calls (`resolveSupervisorToolCallStrategy`):

| Declared | `unknown_relationship_strategy: parallel` | `sequential` | `disambiguate` |
| -------- | ----------------------------------------- | ------------ | -------------- |
| `primary_queue` | `primary_queue` | `primary_queue` | `primary_queue` |
| `sequential` | `sequential` | `sequential` | `sequential` |
| `parallel` | `parallel` | `sequential` | `disambiguate` |
| `disambiguate` | `disambiguate` | `disambiguate` | `disambiguate` |
| `auto` | `sequential` | `sequential` | `disambiguate` |

Classifier or flow path (`resolveStrategy`):

| Declared | Independent | Dependent | Ambiguous |
| -------- | ----------- | --------- | --------- |
| `auto` (any agent type) | `sequential` | `sequential` | `disambiguate` |
| `parallel` on supervisor | `parallel` | `sequential` | `disambiguate` |
| `parallel` on scripted agent | `sequential` | `sequential` | `disambiguate` |

Other checks:

| Check | Result |
| ----- | ------ |
| `resolveMultiIntentConfig` with agent `sequential` and project `parallel`, `max_intents: 5` | strategy `sequential`, `max_intents` 5 |
| Platform defaults | `enabled true`, `primary_queue`, `parallel`, 3, 0.6, 600000, `advance_on_primary_response true`, `completion_signal delivered_response`, `list_other_requests false` |
| `normalizeDisambiguateOptionTemplate` with the old default text | returns `{{index}}. {{choice}}` |
| `parseDisambiguationChoice("2")`, `("B")`, `("second")` over options a, b | index 1, index 1, null |
| Negative block: `strategy: fanout`, `max_intents: 11`, `confidence_threshold: 1.5`, `queue_max_age_ms: 4000000`, `enabled: maybe`, `governed_tasks`, `offer_policy` | `MULTI_INTENT_INVALID_STRATEGY`, `_MAX_INTENTS`, `_CONFIDENCE_THRESHOLD`, `_QUEUE_MAX_AGE_MS`, `E462`, two `E465` |
| Agent block with `completion_signal` and `list_other_requests` | No diagnostic. IR keeps only `advance_on_primary_response`. |
| Supervisor without `BEHAVIOR` | IR 1.0, `direct_response_allowed: true`. Batching allowed. |
| Supervisor with `BEHAVIOR: ROLE: router` | IR 1.1, explicit router. No batching. |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighboring constructs? | pass | `MULTI_INTENT`, `intent_handling`, `fan_out`, `primary_queue`, `disambiguat`, `queue`, `other_requests`, `governed`, `handoff_to_`, `delegate_to_`. |
| Identified every authoring style, alias, default, fallback? | pass | Agent keys, project-only keys, three sources, default strategy, `RETURN` and `EXPECT_RETURN`. |
| Distinguished optional from required sections? | pass | `MULTI_INTENT:` is optional. `MESSAGES:` is optional. |
| Explained reasoning-layer guidance? | pass | The model chooses routing calls. The strategy decides what happens. |
| Avoided making a preferred pattern the only pattern? | pass | All five strategies and three sources. |
| Could a customer build this another supported way? | pass | Governed mode and `list_other_requests` exist. Listed as project settings. |
| Evidence if asked "are you not considering all scenarios?" | n/a | Variant map and harness tables. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Sources, strategy resolution tables, router gate, project-only keys, and message normalization are explicit and checked in the harness. | None. |
| Senior content writer | ready | Table-led structure, short bullets, one example per strategy. | None. |
| Product manager/customer enablement | ready | Verification steps, trace events, error codes, and when not to use `parallel`. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 2 | Fixed `auto`, disambiguation default, queue behavior, sources. Removed unsupported advice. | 5 |
| Depth of conceptual explanation | 3 | Sources table and resolution tables. | 5 |
| Readability and usability | 4 | Properties and resolution in tables. | 4 |
| Coverage of examples | 2 | Replaced the non-multi-intent flow example. Added a working flow example. All examples validate. | 5 |
| Search and discovery quality | 4 | Kept error codes and trace names searchable. | 4 |
| Completeness of workflow and failure modes | 3 | Failed task, all-failed, expiry, decline, input pause, router gate. | 5 |
| Customer/partner self-service readiness | 3 | Stand-in agents defined. Project settings located in Studio. | 4 |
| Scenario comprehensiveness | 3 | Project-only keys, sources, resolution. Governed mode scoped out. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass (minimum 4)

## Doc discrepancies for human review

1. Old article defect: the `auto` text said independent intents on a supervisor resolve to `parallel`. Code resolves them to `sequential`.
2. Old article defect: the `MESSAGES` example for `multi_intent_disambiguate_option` equaled the 1.4.4 default. In 1.8.1 that exact text is treated as unset, so the "customization" had no effect.
3. Old article defect: the `Sequential_Support` flow example had one conditional `ON_INPUT` branch and an `ELSE`. Flow detection needs two or more matching conditional branches, so it never triggered multi-intent handling.
4. Old article claim without code support: "`max_intents` above 5 may degrade conversation quality". Removed.
5. Old article claim without code support: "`EXPECT_RETURN` is a legacy alias". The parser treats both the same. The public reference says the opposite (`EXPECT_RETURN` primary, `RETURN` alias). Decide one convention.
6. Public reference vs code: `nlu.mdx` says "the NLU pipeline detects and triages multiple intents". Code has three sources: supervisor routing calls, the pipeline classifier, and flow `ON_INPUT` branches. It also says `max_intents` is the maximum "to consider per message". For a supervisor's own routing calls it is not applied.
7. Public reference vs code: `nlu.mdx` does not list `completion_signal`, `list_other_requests`, or the governed keys, and does not mention `E465`. The reference `advance_on_primary_response` row matches the code.
8. Code behavior to confirm: `completion_signal` and `list_other_requests` in an agent `MULTI_INTENT:` block are ignored without a diagnostic. `E465` fires for governed keys only. A silent drop may surprise authors.
9. Code behavior to confirm: `queue_max_age_ms: 0` passes validation. `isOfferedIntentExpired` requires a positive value, but `pruneExpired(queue, 0)` treats every entry as expired. The article says "use a positive value".
10. Code comment: `multi-intent-strategy.ts` says detection is invoked only from the flow path. The reasoning and pipeline paths do call `resolveDetectedMultiIntentPlan`. The comment is stale.
11. The compiler gives no warning when `MULTI_INTENT:` sits on a supervisor with an explicit `ROLE: router`. That supervisor cannot batch routing calls, so the section has no effect for them. A compile warning would help.

## Open questions

- No live run with a model. Strategy outcomes come from the e2e tests, regression tests, and real resolver functions.
- Whether `max_intents` and `confidence_threshold` filter a supervisor's own routing calls. The code path (`buildSupervisorRoutingToolFanOutPlan`, `maxIntents: intents.length`) says no. Please confirm.
- Whether a flow agent honors `sequential` and `parallel`. The code comment for flow supervisors says a plan runs as primary-then-queue. Not run.
- Governed multi-intent handling (`governed_tasks`) needs its own HowTo. It is only named here.
