# Evidence: handle-multiple-intents

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/handle-multiple-intents.md`
**Published copy:** `agent-platform/abl/how-to/handle-multiple-intents.mdx`
**Topic:** 3.6 - How to handle messages that contain multiple user intents
**Workflow:** Refresh against `release_Artemis_1.9.0` (previous scan: `hotfix_Artemis_1.8.1`, evidence dated 2026-10-20)
**Verdict:** update-needed

`release_Artemis_1.9.0` does not descend from `hotfix_Artemis_1.8.1`. The diff only located files. Every claim in the article was re-read in the 1.9.0 source or re-run in the harness. No behavior in the article came from a 1.8.x hotfix backport that is missing in 1.9.0.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseMultiIntentSection` ~14960 to 15050) | Agent block keys. Codes `E460`, `E461`, `E462`. Governed keys give `E465`. The section parser logic did not change. |
| `packages/compiler/src/platform/ir/multi-intent-config.ts` | Defaults, ranges, strategies, `completion_signal`, governed project-only keys. Unchanged from 1.8.1. |
| `packages/compiler/src/platform/ir/compiler.ts` (`compileMultiIntentConfig`) | `MULTI_INTENT_INVALID_*` codes. Harness negative block reproduces them. |
| `packages/shared/src/validation/project-runtime-config.ts` | Project keys. `governed_tasks` is stored without a default. |
| `apps/studio/src/components/settings/RuntimeConfigTab.tsx` | Multi-intent section exists. `governed_tasks` shows `off` by default. |
| `apps/runtime/src/services/execution/multi-intent-strategy.ts` | `resolveStrategy` unchanged. `auto` never fans out. |
| `apps/runtime/src/services/execution/multi-intent/routing-call-strategy.ts` | New file. `resolveSupervisorToolCallStrategy` moved out of the router unchanged. `auto` or unsupported falls back to `primary_queue`. |
| `apps/runtime/src/services/execution/multi-intent/multi-intent-router.ts` (`buildSupervisorRoutingToolFanOutPlan` 1613, `emitPlanTrace` 323) | `maxIntents: intents.length` for supervisor calls. Trace fields `strategy`, `declaredStrategy`, `relationship`, `targets`. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (`resolveSupervisorParallelRoutingPolicy` 6922, `isRoutingToolCallAdmitted` 4519, plan build ~19060 to 19260) | Router role gate. Route guard (`WHEN`, `ENABLED_WHEN`) filters batch calls before a plan. |
| `apps/runtime/src/services/execution/agent-execution-role.ts` | `canCoordinateReturnedWork`. An explicit `router` cannot batch. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`detectMultipleIntents` 10727, call site ~20481) | Needs two or more conditional `ON_INPUT` branches that match. Skips `ELSE` and `THEN: COMPLETE`. `max_intents` applies. |
| `apps/runtime/src/services/execution/multi-intent/sequential-executor.ts` (about 335 lines changed) | New lead lines for each request. Failed task and all-failed rules unchanged. |
| `apps/runtime/src/services/execution/multi-intent/sequential-acknowledgements.ts` | New file (ABLP-6512). Start and transition lines. Kill switch environment variable. |
| `apps/runtime/src/services/pipeline/merge.ts` (~182 to 192) | Default texts for the two new messages. |
| `apps/runtime/src/__tests__/execution/ablp-6512-sequential-acknowledgements.test.ts` | Test of the lead lines, including the merge-model case. |
| `apps/runtime/src/services/execution/multi-intent/delivered-answer-boundary.ts`, `delivered-turn-outcome-resolver.ts` | Changes serve governed and manage paths. The legacy `primary_queue` boundary keeps its rules. |
| `apps/runtime/src/services/execution/multi-intent/list-other-requests.ts` | `other_requests` expansion. Governed `on` only. |
| `apps/runtime/src/services/execution/queued-intent-expiry.ts`, `intent-queue.ts` | Expiry trace `multi_intent_queue_retired` with `queued_intent_expired`. Unchanged. |
| `apps/runtime/src/services/execution/multi-intent/disambiguation-interaction-resolver.ts`, `multi-intent-types.ts` | Choice parsing, pause, resume, cancel. Unchanged. |
| `packages/compiler/src/platform/constants.ts` | Default message texts. Only a system tool entry changed. |
| `packages/shared-kernel/src/constants/trace-event-registry.ts` | Trace event names in the article exist. |
| Public reference `nlu.mdx` | Secondary cross-check only. |

## Drift analysis (1.8.1 to 1.9.0)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| Sequential lead lines (ABLP-6512) | New. The plan owner leads each request with one line. First request: the supervisor's own words beside its routing calls, if not already streamed, else `multi_intent_sequential_start`. Later requests: `multi_intent_sequential_transition`. Each line is told once, before the first visible output of that request. A merge-model reply carries no lead lines. A deployment setting turns the lines off. | New bullets in `sequential`. New `MESSAGES` keys and variable row. Verification step and troubleshooting row updated. |
| `multi_intent_sequential_task_failed` | Same event as 1.8.1. The article did not list it. | Added to the trace list. |
| Sequential failure text | The unserved post-return request now uses the `max_iterations` message resolution. The all-failed text is unchanged. | No customer-facing change. Noted. |
| Supervisor batches | Same rules. Plans include only calls that pass the route guard. A router role gets no batching. | None. |
| `routing-call-strategy.ts` | Code moved. Resolution table unchanged (harness-free source read of `resolveStrategy`). | None. |
| `auto` strategy | Unchanged. Independent resolves to `sequential`. | None. |
| Project-only governed keys | Same keys. `governed_tasks` defaults to `off`. `E465` unchanged (harness). | None. |
| `completion_signal`, `list_other_requests` | Same project-only behavior. Silent ignore in an agent block (harness: no diagnostic). | None. |
| `advance_on_primary_response` | Unchanged default `true`. | None. |
| Flow detection | Same rules. | None. |
| `MESSAGES` option default | Still `{{index}}. {{choice}}`. | None. |
| `HANDOFF` history default | Still `full`. | None. |
| Governed handling (`sequential-executor.ts`, `routing-executor.ts`, `reasoning-executor.ts`) | Large governed and manage changes. Off by default. The article lists governed keys as project settings only. | None. |
| Comment rule in `WHEN` | `//` outside quotes is a comment. Article routes use `intent.category == "..."` without comments. | None. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Supervisor, `primary_queue`, several routing calls in one turn | yes | `buildSupervisorRoutingToolFanOutPlan`, e2e tests | covered (minimal example) |
| Supervisor, `sequential` | yes | `sequential-executor.ts`, ABLP-6512 test | covered (with lead lines) |
| Supervisor, `parallel` | yes | `resolveSupervisorToolCallStrategy` | covered |
| Supervisor, `disambiguate` | yes | `buildSupervisorRoutingToolFanOutPlan` | covered |
| `auto` on a supervisor | yes | `resolveStrategy` | covered |
| Classifier path (execution pipeline) | yes | `reasoning-executor.ts` | covered (sources table) |
| Flow agent, two matching `ON_INPUT` branches | yes | `detectMultipleIntents` | covered (variation) |
| Flow agent, `sequential` or `parallel` | gap | Flow supervisor comment says a flow plan under those strategies runs as primary then queue. Not run. | out of scope |
| `enabled: false` | yes | `resolveSupervisorParallelRoutingPolicy` | covered |
| `ROLE: router` supervisor | yes, no batching | `canCoordinateReturnedWork` | covered |
| `unknown_relationship_strategy` | yes | `routing-call-strategy.ts` | covered |
| `advance_on_primary_response` | yes | `delivered-answer-boundary.ts` | covered |
| Project-only keys | yes | Schema, harness `E465` | covered (table) |
| Sequential lead lines and their `MESSAGES` keys | yes | `sequential-acknowledgements.ts`, harness compile | covered (new) |
| Governed multi-intent (`governed_tasks` on) | yes | `task-authority/*` | out of scope: separate topic, listed as project setting |
| `MESSAGES` keys and variables | yes | `constants.ts`, renderers, harness compile | covered |
| Offer buttons (accept, decline, defer) | yes | `multi_intent_offer_action_*` | out of scope: governed offers |
| Delegate targets in a plan | yes | `routingAction: delegate` | covered (one sentence) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code reading, the ABLP-6512 test, e2e tests, and harness compile. No live run with a model. | covered | State in open questions. |
| Required companion resources identified | Every example defines its agents. | covered | None. |
| Referenced variables have sources | No flat variables are passed. `MESSAGES` variables are listed, including `request`. | covered | None. |
| Fallback, failure, ambiguity behavior verified | Failed task, all-failed message, expiry, decline, `disambiguate`, input pause. | covered | None. |
| Customer verification path defined | Six steps and a list of trace events. | covered | None. |
| Production readiness checklist included | Present. | covered | None. |

## Example validation

Harness: `validate.mjs` (`validateABL`) over the 1.9.0 source copy, run from `/tmp`. Scratch files under `scratchpad/t36/` and `scratchpad/t36p/`. Blocks extracted by script from the proposed article.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Multi_Intent_Service_Supervisor` (with blocks 2 to 4) | full-document | `validateABL` with companions | pass | none | kept |
| Blocks 2 to 4 stand-in agents | full-document | `validateABL` | pass | none | kept |
| Block 5 `Sequential_Service_Supervisor` (with blocks 6, 7) | full-document | `validateABL` | pass | none | kept |
| Block 8 `Parallel_Service_Supervisor` (with blocks 9, 10) | full-document | `validateABL` | pass | none | kept |
| Block 11 `Auto_Router` (with blocks 12, 13) | full-document | `validateABL` | pass | none | kept |
| Block 14 `Support_Scripted_Agent` | full-document | `validateABL` | pass | none | kept |
| Block 15 `MESSAGES` (disambiguate) | section-snippet | Block 11 with `strategy: disambiguate` plus the block, plus companions | pass | none | kept |
| Block 16 `MESSAGES` (sequential lead lines) | section-snippet | Block 5 plus the block, plus companions | pass | none | new |

Negative control: block 5 with `strategy: fanout`, `max_intents: 11`, `enabled: maybe`, `governed_tasks`, `offer_policy`, `completion_signal`, `list_other_requests`. Result: `MULTI_INTENT_INVALID_STRATEGY`, `MULTI_INTENT_INVALID_MAX_INTENTS`, `E462`, and two `E465`. The agent block with `completion_signal` and `list_other_requests` gives no diagnostic, as the article states.

## Runtime semantics checks

| Check | Result |
| ----- | ------ |
| `resolveStrategy` (source read) | `auto`: independent `sequential`, dependent `sequential`, ambiguous `disambiguate`. `parallel` on a supervisor: independent stays, dependent `sequential`, ambiguous `disambiguate`. Other agents: `sequential`. Same as the article table. |
| `resolveSupervisorToolCallStrategy` (source read) | `auto` or an unsupported value falls back to `primary_queue`. For `auto`, the relationship comes from `unknown_relationship_strategy`. Same as the article text. |
| Default texts (`merge.ts`) | Start: "Let's take your requests one at a time, starting with: {{request}}". Transition: "Next, your other request: {{request}}". A trailing period is added when the line has no final punctuation. |
| Lead line gate (`sequential-acknowledgements.ts`) | Needs two or more tasks. Skipped when the kill switch is off or the supervisor's words were already streamed. |
| Merge model (`sequential-executor.ts` ~1380) | With a pipeline model, the lines are marked told and none is added to the joined answer. |

The runtime executor modules could not load in the harness because of missing optional packages. Runtime claims come from source reading and the existing tests.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighboring constructs? | pass | `MULTI_INTENT`, `intent_handling`, `fan_out`, `primary_queue`, `disambiguat`, `queue`, `other_requests`, `governed`, `handoff_to_`, `delegate_to_`, `sequential_start`, `acknowledgements`. |
| Identified every authoring style, alias, default, fallback? | pass | Agent keys, project-only keys, three sources, default strategy, lead lines. |
| Distinguished optional from required sections? | pass | `MULTI_INTENT:` and `MESSAGES:` are optional. |
| Explained reasoning-layer guidance? | pass | The model chooses routing calls. The strategy decides what happens. |
| Avoided making a preferred pattern the only pattern? | pass | Five strategies and three sources. |
| Could a customer build this another supported way? | pass | Governed mode and `list_other_requests` exist. Listed as project settings. |
| Evidence if asked "are you not considering all scenarios?" | n/a | Variant map. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Sources, resolution tables, router gate, project-only keys, lead-line rules and their limits are explicit. | None. |
| Senior content writer | ready | Table-led structure, short bullets, one example per strategy. | None. |
| Product manager/customer enablement | ready | Verification steps, trace events, error codes, lead-line expectation, when not to use `parallel`. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Lead lines grounded in source and test. All other claims re-read. | 5 |
| Depth of conceptual explanation | 4 | Lead-line rules and limits explained. | 5 |
| Readability and usability | 4 | Short bullets. | 4 |
| Coverage of examples | 4 | New `MESSAGES` example validated. | 5 |
| Search and discovery quality | 4 | Added message key names. | 4 |
| Completeness of workflow and failure modes | 4 | Troubleshooting row for missing lead lines. Failed-task trace added. | 5 |
| Customer/partner self-service readiness | 4 | No internal paths or environment variable names in the article. | 4 |
| Scenario comprehensiveness | 4 | Governed mode scoped out with a reason. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass (minimum 4)

## Doc discrepancies for human review

1. The article says the platform operator can turn the lead lines off. The switch is the runtime setting `MULTI_INTENT_SEQUENTIAL_ACKNOWLEDGEMENTS` (default on). The article does not name it. Decide whether customers can reach this setting and whether to document it.
2. Public reference vs code: `nlu.mdx` says the NLU pipeline detects multiple intents. Code has three sources. It also does not list `completion_signal`, `list_other_requests`, the governed keys, `E465`, or the sequential lead lines.
3. Behavior to confirm: `completion_signal` and `list_other_requests` in an agent `MULTI_INTENT:` block are ignored without a diagnostic. `E465` fires for governed keys only.
4. Behavior to confirm: `queue_max_age_ms: 0` passes validation. The article says "use a positive value".
5. Code comment: `multi-intent-strategy.ts` still says detection runs only on the flow path. The reasoning and pipeline paths also build plans. The comment is stale.
6. The compiler gives no warning for `MULTI_INTENT:` on a supervisor with `ROLE: router`. That supervisor cannot batch routing calls.
7. Customer-visible text: the unserved post-return request in a sequential plan now uses the `max_iterations` message resolution. The article does not describe this text. Confirm that is acceptable.
8. Published copy differs from the draft in format only: the `.mdx` has frontmatter, a back badge, `yaml` fences, and no Related HowTos section. Text is otherwise identical.

## Open questions

- No live run with a model. Strategy outcomes come from the e2e tests, the ABLP-6512 test, and the resolver source.
- Whether `max_intents` and `confidence_threshold` filter a supervisor's own routing calls. Source says no (`maxIntents: intents.length`). Please confirm.
- Whether a flow agent honors `sequential` and `parallel`. Not run.
- Governed multi-intent handling (`governed_tasks`) needs its own HowTo. It is only named here.
