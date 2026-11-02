# Evidence: route-by-tool-result-or-memory

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-by-tool-result-or-memory.md`
**Published copy:** `agent-platform/abl/how-to/route-by-tool-result-or-memory.mdx`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/route-by-tool-result-or-memory-2026-11-01-review.md`
**Topic:** 3.4 - How to route conversations based on tool results or memory values
**Workflow:** Refresh against `release_Artemis_1.9.0` (HEAD `9b7b268cc61`). Previous scan: `hotfix_Artemis_1.8.1` (evidence 2026-10-20). The branches do not share a lineage. Every claim was re-read in 1.9.0 source.
**Verdict:** update-needed

## Validation harness

- `validate.mjs` (`validateABL`) for ABL blocks. Scratch files in `.../scratchpad/t34/`.
- Real 1.9.0 `routing-primitive-executor.ts` and `null-safe-eval.ts` run through a stub loader (`.../scratchpad/t33/ev.mjs`, `ns.mjs`) with the real compiler evaluator. Route `WHEN` cases in `t34/cases34.json`. Lifecycle `CALL ... WHEN` cases through `nullSafeEvaluateCondition` with `failClosedOnEvaluationError`.
- IR dump (`t34/ir2.mjs`) for block 1 and block 6.
- The code repo was not modified. No end-to-end session ran.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`executeOnStart`, ~14640 to 14790) | `SET` first, then the top-level `CALL` guarded by `call_when`, then language directives, then branches. A failed `CALL` is logged and startup continues. The code comment says `WHEN` runs after `SET`. |
| `apps/runtime/src/services/execution/lifecycle-call-condition.ts` | Guard for the lifecycle `CALL`. Uses `nullSafeEvaluateCondition` with fail-closed. An unevaluable guard skips the call. Emits `dsl_lifecycle_call_condition`. |
| `packages/compiler/src/platform/ir/compiler.ts` (~1739, `compileStartConfig`) | `routing.rules` priority is `idx + 1`. `PRIORITY:` is never compiled. IR dump shows `on_start.call_spec` and `call_when`. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`checkDeterministicRouting`, ~26820) | Pre-route. Sorts by `priority`, skips literal `true`, defers `intent.*` rules for a multi-intent supervisor, returns the first `deterministic_pass`. |
| `apps/runtime/src/services/runtime-executor.ts` (~26540 to 26640) | Runs the pre-route on each customer message before the reasoning loop. Skipped for `resume_intent` replay and autonomous resume. |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | Outcome kinds. Missing dotted fields become `null` (`enrichContextForNestedPaths`). 1.9.0 adds comment masking only. |
| `apps/runtime/src/services/pipeline/null-safe-eval.ts` | Evaluator. 1.9.0 diff is an import move and a `withHeldNamespacesForOptions` argument. |
| `packages/compiler/src/platform/constructs/routing-condition-classifier.ts` | `isNaturalLanguageRoutingHint`: whitespace and not structured. 1.9.0 normalizes comment trivia first. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`resolveHandoffPassFieldValue`, ~5094) | `PASS` reads the parent value by exact key, then by dotted path. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`. |
| `apps/runtime/src/services/execution/memory-integration.ts` (`memory_init`, ~487 to 543), `memory-executor.ts` | No diff from 1.8.1. Session start loads readable persistent paths and runs `RECALL`. |
| `packages/compiler/src/platform/ir/validate-ir.ts` (~1600) | `INERT_PERSISTENT_MEMORY_DECLARATION`. |
| `apps/runtime/src/services/execution/agent-execution-role.ts`, `reasoning-executor.ts` (~7044, ~18052) | `ROLE: router` allows routing and clarification tools only. A text-only answer is retried. |
| `apps/runtime/src/services/execution/deterministic-handoff.ts` (~101) | `deterministic_routing` event: `target`, `condition`, `priority`, `agent`. |
| `apps/runtime/src/services/execution/routing-executor.ts` (~10817) | `handoff_condition_check` for a model-selected route. |
| `agent-platform/abl-reference/` (secondary) | Not re-read this round. |

## Drift analysis (1.8.1 to 1.9.0)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| `ON_START` order | No change. `SET`, then `CALL`. New comment: the call `WHEN` runs after `SET`. | None. `SET` after `CALL` stays a mistake row. |
| Lifecycle call guard | `lifecycle-call-condition.ts` differs by a comment only. Fail-closed. | `session.customerId IS SET` skips the call when absent (harness). Added a mistake row: `!= ""` does not skip. |
| Route `WHEN` evaluation | Comment masking added. Outcome kinds and null enrichment unchanged. | `IS SET` hazard confirmed. `!= ""` shows the same hazard. Mistake row extended. |
| Pre-route | Unchanged in intent. | "Evaluated in authored order" holds. |
| `PRIORITY:` | Ignored in 1.9.0 and 1.8.1. The 2026-10-20 article said it reorders routes and the lowest number runs first. | Corrected. Statement, mistake row, and troubleshooting row changed. |
| Execution role | `hasCoordinationExecutionRole` accepts IR `1.3`. No change to router behavior. | Router role added to the example. |
| Memory variation | No code diff. `INERT_PERSISTENT_MEMORY_DECLARATION` still fires without `RECALL` (harness `m1`). | None. |
| `PASS` | Same key then dotted-path resolution. A dotted name compiles to its root (IR). | None. |
| `handoff_completed`, `ON_RETURN` | Exist. This article does not use them. | None. |
| Language detection, `SET_INTERACTION_LANGUAGE` | New in 1.9.0. Not used by this topic. | None. |
| `executionFailureFallback` (ABLP-5739 follow-up) | Localizes the generic failure line for a failed handoff. | None. |
| Comments in `WHEN` | `//` outside quotes is a comment. Comment-only fails. This article writes no comments in `WHEN`. | None. |
| 1.8.x hotfix backports | The published article uses no 1.8.1-only behavior. ABLP-6128 is not mentioned. | None. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Route on a field of an `ON_START` `CALL ... AS` result | yes | IR dump. `checkDeterministicRouting`. Evaluator pass and fail. | covered (minimal example) |
| Skip the lookup when no identity (`CALL ... WHEN`) | yes | `session.customerId IS SET`: true with a value, false when absent (`ns.mjs`). | covered |
| Skip guard written as `!= ""` | no | `session.customerId != ""` is true when absent. | covered (new mistake row) |
| Route on persistent memory loaded at session start | yes | `memory_init`. Block 7 compiles. | covered (variation) |
| Plain-language last route as a fallback for missing data | yes | `semantic_deferred`. | covered |
| Pass the lookup result with `PASS` | yes | `resolveHandoffPassFieldValue`. IR: `pass: [{name: profile}]`. | covered (variation) |
| Flat copies with `SET` after `CALL` | no | `executeOnStart` runs `SET` first. Compiles silently (`m4`). | covered (mistake) |
| `IS SET` or `!= ""` on a dotted tool field in a route | misleading | Evaluator: pass for missing, `{}`, `null`. | covered (mistake) |
| Tool failure or skipped lookup | yes | `executeOnStart` catch. Missing `profile` is `deterministic_fail`. | covered |
| `PRIORITY` reorders routes | no | IR priority is the position. `PRIORITY: 5` compiles and has no effect. | covered (corrected, mistake row) |
| `ROLE: router` for forced routing | yes | `agent-execution-role.ts`, `reasoning-executor.ts`. Block 1 IR: `role: router`. | covered (example and checklist) |
| `ENABLED_WHEN` on a route that depends on lookup data | gap | Not verified whether `ON_START` data counts. | out of scope: availability is a separate topic |
| `DELEGATE` instead of `HANDOFF` to route by data | yes | `checkDeterministicRouting` returns `delegateConfig`. | out of scope: belongs to a delegate topic |
| Model-chosen route guarded by a data condition | yes | `handoff_condition_check`. | covered (verification event) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code reading and the real evaluator on sample contexts. No end-to-end run. | covered | State in open questions. |
| Required companion resources identified | Four stand-in specialists. Tool binding stated as a project assumption. | covered | None. |
| Referenced variables have sources | `session.customerId`: channel authentication. `profile`: tool result. `user.loyalty_tier`: earlier `REMEMBER` or memory API, stated as an assumption. | covered | None. |
| Fallback, failure, ambiguity behavior verified | Tool failure, anonymous session, missing field, wrong type, router role. | covered | None. |
| Customer verification path defined | Six sessions and four trace events. | covered | None. |
| Production readiness checklist included | Present. Router and order items updated. | covered | None. |

## Example validation

Harness: `validate.mjs`. Blocks extracted by script from the proposed article. Negative control: the supervisor alone reports 12 `INVALID_ROUTING_TARGET` or `INVALID_HANDOFF_TARGET` errors.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Tool_Result_Routing_Supervisor` | full-document (with blocks 2 to 5) | `validate.mjs` with companions | pass | none | changed: `BEHAVIOR: ROLE: router` added |
| Blocks 2 to 5 stand-in agents | full-document | `validate.mjs` | pass | none | kept |
| Block 6 `HANDOFF` with `PASS: [profile]` | section-snippet | Block 1 with its Premium entry replaced, plus companions | pass | none | kept |
| Block 7 `Remembered_Tier_Supervisor` | full-document (with Premium and Standard stand-ins) | `validate.mjs` with companions | pass | none | kept |

Extra checks: removing `RECALL` from block 7 gives `INERT_PERSISTENT_MEMORY_DECLARATION`. IR for block 1: `execution_policy.role: router`, `call_when: session.customerId IS SET`, priorities 1 to 4 in authored order. A `SET` that copies `profile.tier` compiles with no diagnostic.

## Runtime semantics checks (real 1.9.0 evaluator)

| Check | Result |
| ----- | ------ |
| `profile.fraud_risk == "high"` with `profile.fraud_risk = high` | `deterministic_pass` |
| Same condition with no `profile`, `profile = {}`, `profile = null`, or `{__error: ...}` | `deterministic_fail` |
| `profile.has_open_case == true` with boolean `true`, and with the string `"true"` | pass, fail |
| Plain text of the standard route, quoted or not | `semantic_deferred` |
| Quoted text with uppercase `AND`, or with `>` | `deterministic_fail` (evaluated as an expression) |
| `profile.tier IS SET` with no `profile`, `profile = {}`, `tier = null` | `deterministic_pass` (hazard) |
| `tier IS SET` (flat) with no value or `null` | false |
| `profile.tier != ""` with `tier = null` or no `profile` | `deterministic_pass` (hazard) |
| `user.loyalty_tier == "gold"` with a flat key, a nested object, and no value | pass, pass, fail |
| Lifecycle guard `session.customerId IS SET` with a value, absent, and `null` | true, false, true |
| Lifecycle guard `session.customerId != ""` with the value absent | true (does not skip) |
| IR: routes without `PRIORITY` | priorities 1 to 4 in authored order |
| IR: `PRIORITY: 5` on a route | compiles, priority stays the position |
| IR: `PASS: [profile.tier, profile.fraud_risk]` | compiles to `pass: [{name: profile}]` |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | The published `PRIORITY` claim was wrong. Corrected from the IR dump. Added the `!= ""` guard check. | 5 |
| Depth of conceptual explanation | 4 | Router role and order rule explained before the example. | 5 |
| Readability and usability | 4 | Two bullets and three table rows added. | 4 |
| Coverage of examples | 4 | Router role added. All blocks validated. | 5 |
| Search and discovery quality | 4 | Title and headings keep "tool result", "profile lookup", "remembered state". | 4 |
| Completeness of workflow and failure modes | 4 | Skip guard, router role, order rule. | 5 |
| Customer/partner self-service readiness | 4 | Companion agents and variable sources stated. | 4 |
| Scenario comprehensiveness | 4 | `PRIORITY` and skip-guard variants. `ENABLED_WHEN` and `DELEGATE` scoped out. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass (minimum 4)

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighboring constructs? | pass | `ON_START`, `CALL`, `AS`, `call_when`, `checkDeterministicRouting`, `routing.rules`, `PASS`, `RECALL`, `PERSISTENT`, `PRIORITY`, `ENABLED_WHEN`, `ROLE: router`. |
| Identified every authoring style, alias, default, fallback? | pass | Tool lookup, memory recall, `PASS`, plain-language fallback, router role. |
| Distinguished optional from required sections? | pass | The plain-language fallback, `PASS`, and `ROLE: router` are optional. The tool `ON_START` call is required for the lookup variant. |
| Explained reasoning-layer guidance? | pass | Plain-language route stays with the model. |
| Avoided making a preferred pattern the only pattern? | pass | Two data sources in a table. `PASS` noted. |
| Could a customer build this another supported way? | pass | `DELEGATE` and `ENABLED_WHEN` exist. Scoped out with a reason. |
| Evidence if asked "are you not considering all scenarios?" | pass | Variant map and evaluator table. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | `SET` and `CALL` order, route order, missing-value behavior, skip-guard and `IS SET` hazards are tested in the real evaluator. | None. |
| Senior content writer | ready | Table of sources first, short bullets, no dashes, active voice. | None. |
| Product manager/customer enablement | ready | Six verification sessions, anonymous and failure paths, router role in the example. | None. |

## Documentation discrepancies for human review

- Cross-article: the published and draft 3.4 article say `PRIORITY` changes the order. The code ignores it. The 3.3 article already says so. The proposal fixes 3.4.
- The 2026-10-20 evidence for 3.4 recorded "`PRIORITY` is now mentioned" and "the lowest number runs first". That entry is wrong.
- Published `.mdx` differs from the draft in format only: frontmatter with `sidebarTitle`, a Back badge, `yaml` fences (blocks 1 and 7 have `expandable=true`), and no Related HowTos section.
- `profile.tier IS SET` and `profile.tier != ""` pass in a route `WHEN` when the field is missing or null. A flat `tier IS SET` fails for null. Product should confirm the intent. The article steers readers to comparisons.
- `run-auth-profile-lookup-on-start.md` uses `accountProfile.display_name IS SET` in an `ON_START` branch `IF`. That path uses a different evaluator and was not tested here. Check it.
- Public reference calls `EXPECT_RETURN` the primary keyword and `RETURN` an alias. The parser maps both to one field. This article uses `RETURN`, like the refreshed 1.x and 2.x articles.
- Cross-article: this article now sets `ROLE: router`. Check that 3.5 (fallback agent) and the design-supervisor article describe the same fallback behavior.

## Open questions

- No end-to-end session run. Claims rely on code and the real evaluator.
- Confirm that `ON_START` data is available to an `ENABLED_WHEN` condition. The article does not use it.
- Confirm the customer-facing name of `session.customerId` for the channels you document.
- Persistent memory for an anonymous session: the article says the stored value is empty. The runtime falls back to `default_value` when no fact store exists. A live test would confirm.
