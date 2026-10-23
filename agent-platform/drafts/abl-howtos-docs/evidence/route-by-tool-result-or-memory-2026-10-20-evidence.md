# Evidence: route-by-tool-result-or-memory

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-by-tool-result-or-memory.md`
**Topic:** 3.4 - How to route conversations based on tool results or memory values
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`, evidence dated 2026-08-21)
**Verdict:** update-needed

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`executeOnStart`, ~13652-13760) | Order inside `ON_START`: `SET` first, then the top-level `CALL` (guarded by `WHEN`), then language directives, then branches. A failed `CALL` is logged and startup continues. |
| `packages/compiler/src/platform/ir/compiler.ts` (`compileStartConfig`) and IR dump | `on_start` compiles to `{call, call_spec: {tool, with, as}, set}`. The authored order of `CALL` and `SET` is not kept. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`checkDeterministicRouting`, ~25478-25640) | Supervisor pre-routing. Rules sorted by `priority` (lowest first), literal `true` rules skipped, `intent.*` rules deferred for a multi-intent supervisor. First `deterministic_pass` wins. |
| `apps/runtime/src/services/runtime-executor.ts` (~24794-24870) | `checkDeterministicRouting` runs on each user message before the reasoning loop. It is skipped for a `resume_intent` replay and an autonomous resume. |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` (`evaluateRoutingPrimitiveWhen`, `enrichContextForNestedPaths`, `EXPRESSION_SHAPED_ROUTING_GUARD`) | Outcome kinds `deterministic_pass`, `deterministic_fail`, `semantic_deferred`, `missing_data`. Missing dotted fields become `null` before evaluation. |
| `packages/compiler/src/platform/constructs/routing-condition-classifier.ts` | `isNaturalLanguageRoutingHint`: whitespace and not structured. |
| `apps/runtime/src/services/pipeline/null-safe-eval.ts` | Evaluator behind route `WHEN`. `IS SET` on a dotted path returns true for `null`. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`resolveHandoffPassFieldValue` ~4762, handoff PASS merge ~11580) | `PASS` reads the parent value by exact key, then by dotted path. `PASS` overrides model-supplied context. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`. |
| `apps/runtime/src/services/execution/memory-integration.ts` (`initializeAllMemory`, `loadPersistentDefaults`) and `memory-executor.ts` (`executeRecallInstructions`) | Session start loads readable persistent paths and runs `RECALL` at `session:start`. A missing fact falls back to `default_value`. |
| `packages/compiler/src/platform/ir/validate-ir.ts` (~1370-1425) | `INERT_PERSISTENT_MEMORY_DECLARATION` when an `ACCESS: read` path has no `RECALL inject_context` or memory grant. |
| `apps/runtime/src/services/execution/agent-execution-role.ts`, `prompt-builder.ts` (router clarification tool) | `ROLE: router` forces routing tool choice and adds a one-question tool. No `BEHAVIOR` block means direct answers are allowed. |
| `apps/runtime/src/services/execution/deterministic-handoff.ts` | Trace event `deterministic_routing` with `target`, `condition`, `priority`. |
| `apps/runtime/src/services/execution/routing-executor.ts` (~10150) | Trace event `handoff_condition_check` with `result`, `whenOutcome`, `evaluatedContext`. |
| Public reference `multi-agent-and-supervisor.mdx`, `memory-and-constraints.mdx` | Secondary cross-check. Conflicts listed below. |

## Drift analysis (1.4.4 to 1.8.1)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| `ON_START` order | No change. `SET` ran before `CALL` in 1.4.4 as well (`executeOnStart`, "Execute SET first"). | The published article copied `profile.*` into flat variables with a `SET` placed after the `CALL`. The copy is empty. This is an old defect, not drift. The `SET` is removed. |
| Route `WHEN` evaluation | `evaluateRoutingPrimitiveWhen` has outcome kinds and `enrichContextForNestedPaths`. Missing dotted fields become `null`. | Confirms "a missing value compares false". Adds the `IS SET` hazard on dotted fields. |
| Supervisor pre-routing | `checkDeterministicRouting` is the path that makes expression routes deterministic. | The "deterministic conditions" concept is correct. The article now says where it runs and in what order. |
| Route priority | Entries without `PRIORITY` get priority 1..n in authored order (IR dump). | "Evaluated in authored order" holds. `PRIORITY` is now mentioned. |
| `HANDOFF` history default | Still `full`. | One bullet kept. |
| Execution role | An explicit `BEHAVIOR` role compiles to IR 1.1 and changes direct-answer behavior. | New checklist item for `ROLE: router`. |
| `ENABLED_WHEN` and `UNDECLARED_INTENT_CATEGORY` | New in 1.8.1. | Not used by this article. No `INTENTS:` block, so the warning cannot fire. |
| Memory variation | The published article described a memory variation in one sentence, with no example. | New example with `PERSISTENT` and `RECALL`. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Route on a field of an `ON_START` `CALL ... AS` result | yes | IR dump, `checkDeterministicRouting`, harness evaluation | covered (minimal example) |
| Skip the lookup when no identity (`CALL ... WHEN`) | yes | `shouldRunLifecycleCall` in `executeOnStart`, refreshed 2.x article | covered |
| Route on persistent memory loaded at session start | yes | `initializeAllMemory`, `RECALL inject_context`, harness compile | covered (variation) |
| Plain-language last route as a fallback for missing data | yes | `evaluateRoutingPrimitiveWhen` returns `semantic_deferred` | covered |
| Pass the lookup result with `PASS` | yes | `resolveHandoffPassFieldValue`, IR dump (dotted name collapses to root) | covered (variation) |
| Flat copies with `SET` after `CALL` | no | `executeOnStart` runs `SET` first | covered (mistake) |
| `IS SET` on a dotted tool field | misleading | `nullSafeEvaluateCondition`: true for `null` | covered (mistake) |
| Tool failure or skipped lookup | yes | `executeOnStart` catch block, harness: missing `profile` is `deterministic_fail` | covered |
| `PRIORITY` reorders routes | yes | `checkDeterministicRouting` sort | covered (one sentence) |
| `ENABLED_WHEN` on a route that depends on lookup data | gap | The reference says it reads data known before the turn. Whether `ON_START` data counts was not verified. | out of scope: availability is a separate topic |
| `DELEGATE` instead of `HANDOFF` to route by data | yes | `checkDeterministicRouting` returns `delegateConfig` for delegate routes | out of scope: belongs to a delegate topic |
| Model-chosen route guarded by a data condition | yes | `handoff_condition_check`, `live_model_handoff_when` | covered (verification event) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code reading, repository tests, and real runtime functions run in a harness (see below). No end-to-end session run. | covered | State in open questions. |
| Required companion resources identified | Four stand-in specialists defined. The tool execution binding is stated as a project assumption. | covered | None. |
| Referenced variables have sources | `session.customerId`: channel authentication. `profile`: tool result. `user.loyalty_tier`: earlier `REMEMBER` or memory API, stated as an assumption. | covered | None. |
| Fallback, failure, ambiguity behavior verified | Tool failure, anonymous session, missing field, wrong type. | covered | None. |
| Customer verification path defined | Six sessions and four trace events. | covered | None. |
| Production readiness checklist included | Present. | covered | None. |

## Example validation

Harness: esbuild bundle of `validateABL` (`validate-ir.ts`), built in the scratchpad under `w3/`. Blocks extracted from the proposed article by script. Routing documents are validated with their companion agents. Negative control: the supervisor alone reports 12 `INVALID_ROUTING_TARGET` or `INVALID_HANDOFF_TARGET` errors.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Tool_Result_Routing_Supervisor` | full-document (with blocks 2 to 5) | `validateABL` with companions | pass | none | changed (typed return, `session.customerId`, no `SET`, no unsourced `PASS`) |
| Blocks 2 to 5 stand-in agents | full-document | `validateABL` | pass | none | kept (reshaped) |
| Block 6 `HANDOFF` with `PASS: [profile]` | section-snippet | Block 1 with its Premium entry replaced, plus companions | pass | none | new |
| Block 7 `Remembered_Tier_Supervisor` | full-document (with Premium and Standard stand-ins) | `validateABL` with companions | pass | none | new |

Extra checks: removing the `RECALL` from block 7 gives `INERT_PERSISTENT_MEMORY_DECLARATION`. Adding `BEHAVIOR` with `ROLE: router` to block 1 compiles with no diagnostics. IR dump confirms `side_effects: false`, `confirmation.require: never`, `hints.timeout: 5000`, and the typed `returns` object.

## Runtime semantics checks (harness, real runtime functions)

| Check | Result |
| ----- | ------ |
| `profile.fraud_risk == "high"` with `profile.fraud_risk = high` | `deterministic_pass` |
| Same condition with no `profile`, `profile = {}`, or `profile = null` | `deterministic_fail` |
| `profile.has_open_case == true` with boolean `true` | `deterministic_pass` |
| Same condition with the string `"true"` | `deterministic_fail` |
| Quoted text `"no fraud, open-case, or premium routing condition is matched"` | `semantic_deferred` (left to the model) |
| Quoted text with uppercase `OR` or `AND`, or `>` | `deterministic_fail` (evaluated as an expression) |
| `profile.tier IS SET` with no `profile`, `profile = {}`, `tier = null` | `deterministic_pass` (hazard) |
| `tier IS SET` (flat) with no value or `null` | false |
| `profile.tier != ""` with `tier = null` or missing | `deterministic_pass` (hazard) |
| `user.loyalty_tier == "gold"` with a flat key or a nested object | `deterministic_pass` |
| `user.loyalty_tier == "gold"` with no value | `deterministic_fail` |
| IR: routes without `PRIORITY` | priorities 1, 2, 3, 4 in authored order |
| IR: `PASS: [profile.tier, profile.fraud_risk]` | compiles to `pass: [{name: profile}]` |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighboring constructs? | pass | `ON_START`, `CALL`, `AS`, `deterministic`, `routing.rules`, `PASS`, `RECALL`, `PERSISTENT`, `ENABLED_WHEN`, `intent`. |
| Identified every authoring style, alias, default, fallback? | pass | Tool lookup, memory recall, `PASS`, `PRIORITY`, plain-language fallback. |
| Distinguished optional from required sections? | pass | The plain-language fallback and `PASS` are optional. The tool `ON_START` call is required for the lookup variant. |
| Explained reasoning-layer guidance? | pass | Plain-language route stays with the model. |
| Avoided making a preferred pattern the only pattern? | pass | Two data sources in a table. `PASS` and `PRIORITY` noted. |
| Could a customer build this another supported way? | pass | `DELEGATE` and `ENABLED_WHEN` exist. Scoped out with a reason. |
| Evidence if asked "are you not considering all scenarios?" | n/a | Variant map and harness table. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | `SET`/`CALL` order, route evaluation order, missing-value behavior, and the `IS SET` hazard are explicit and tested in the harness. | None. |
| Senior content writer | ready | Table of sources first, short bullets, no dashes, active voice. | None. |
| Product manager/customer enablement | ready | Six verification sessions, anonymous and failure paths, router role note. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 2 | Removed the empty `SET` copies. Added the evaluation path and harness checks. | 5 |
| Depth of conceptual explanation | 3 | Two data sources, evaluation order, missing-value rule. | 5 |
| Readability and usability | 4 | Source table, shorter bullets. | 5 |
| Coverage of examples | 2 | Typed tool, `session.customerId`, memory example, `PASS` snippet. | 5 |
| Search and discovery quality | 4 | Title and headings keep "tool result", "profile lookup", "remembered state". | 4 |
| Completeness of workflow and failure modes | 3 | Tool failure, anonymous session, wrong type. | 5 |
| Customer/partner self-service readiness | 3 | Companion agents and variable sources stated. | 4 |
| Scenario comprehensiveness | 3 | Added memory, `PASS`, `PRIORITY`. Scoped out `ENABLED_WHEN` and `DELEGATE`. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass (minimum 4)

## Doc discrepancies for human review

1. Old article defect: the example copied `profile.*` into flat variables with a `SET` after the `CALL`. `executeOnStart` runs `SET` first, so the copies were empty and `PASS` carried empty values. The same order applied in 1.4.4.
2. Old article defect: the claim "the comparison simply evaluates false, so you don't need `IS SET`" is right for `==`. But the old `-> object` return declared no fields, so the checklist item "fields present on the declared return shape" had nothing to check. The tool now has a typed return.
3. Code behavior to confirm: `profile.tier IS SET` passes in a route `WHEN` when `tier` is missing or `null`, because `enrichContextForNestedPaths` sets missing dotted fields to `null` and the evaluator treats `null` as set for a dotted path. A flat `tier IS SET` fails for `null`. Product should confirm whether this is intended. The article steers readers to comparisons.
4. Possible cross-article risk: `run-auth-profile-lookup-on-start.md` uses `accountProfile.display_name IS SET` in an `ON_START` branch `IF`. That path uses a different evaluator and was not tested here. Check it.
5. Public reference vs HowTos: the reference calls `EXPECT_RETURN` the primary keyword and `RETURN` an alias. The parser maps both to the same field. This article uses `RETURN`, like the refreshed 1.x and 2.x articles.
6. Public reference vs code: `memory-and-constraints.mdx` lists `INITIAL`, `DEFAULT_VALUE`, and lowercase `persistent:` forms. The article uses the uppercase block form that the parser tests use. No conflict found.

## Open questions

- No end-to-end session run. Claims rely on code, repository tests, and the harness.
- Confirm that `ON_START` data is available to an `ENABLED_WHEN` condition. The article does not use it.
- Confirm the customer-facing name of `session.customerId` for the channels you document.
- Persistent memory for an anonymous session: the article says the stored value is empty. The runtime path falls back to `default_value` when no fact store exists. A live test would confirm.
