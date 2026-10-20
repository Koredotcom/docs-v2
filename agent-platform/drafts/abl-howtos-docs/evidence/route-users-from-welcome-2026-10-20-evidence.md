# Evidence: route-users-from-welcome

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-users-from-welcome.md`
**Topic:** 2.5 - How to route users from the welcome experience to the right agent
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`, evidence dated 2026-08-21)
**Verdict:** update-needed

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/on-start-do-block.ts` | Branch `DO:` accepts `SET`, `CALL`, `HANDOFF`, `SET_INTERACTION_LANGUAGE`, `CLEAR_INTERACTION_LANGUAGE`. Other keys are dropped with `W381`. |
| `packages/core/src/parser/agent-based-parser.ts` (`parseOnStartHandoff`, `parseOnStartBranchDoBlock`) | Top-level `HANDOFF:` in ON_START. First one wins (`W382`). Option lines under it are reported (`W383`). Branch-level `HANDOFF:` key outside `DO:` warns (`W385`). |
| `packages/compiler/src/platform/ir/compiler.ts` (`compileStartConfig`) | `on_start.do = [{handoff}]` only when authored. Branch `do` lists compiled. |
| `packages/compiler/src/platform/ir/on-start-diagnostics.ts` | `ON_START_HANDOFF_ACTIVATED`, `ON_START_BRANCH_DO_ACTIVATED`, `ON_START_HANDOFF_UNREACHABLE` (ELSE hides the top-level handoff), `ON_START_DELEGATE_WITH_HANDOFF`, `ON_START_HANDOFF_TARGET_INVALID` (self, remote, undeclared, missing). All are warnings. |
| `apps/runtime/src/services/execution/on-start-handoff.ts` | List selection (`selectOnStartList`), run overrides (`callFailurePolicy: stop`, `failurePresentation: on_failure_only`), outcome classes, `dsl_on_start_handoff` payload, remote refusal. |
| `apps/runtime/src/services/execution/handoff-continuation-options.ts` | Start handoff options: `failureFallbackText: none`, `routeSelectedByStartData`, `routeSelectedByStartBranch`, autonomous start. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`runOnStartList`, `executeActionHandlerActions` handoff handler, `executeOnStart`) | Eager execution and lazy deferral (`_pendingOnStartHandoff`). Welcome renders before the list. |
| `apps/runtime/src/services/execution/deterministic-handoff.ts`, `lifecycle-dispatcher.ts` (`resolveDeterministicHandoffLifecycle`) | Lazy ON_START handoff consumed on the first turn. `checkDeterministicHandoff` is skipped for FLOW agents and supervisors. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`checkDeterministicHandoff`, `handleHandoff` WHEN guard, `when_blocked`) | A declared route `WHEN` guards the start handoff. Failure codes `condition_false`, `target_disabled`. |
| `apps/runtime/src/services/runtime-executor.ts` (~9590-9680, ~22690-22790, `resolveActionEventTurnInput`) | Eager vs lazy start. Matched-branch welcome owns the startup turn. A button action with no text becomes the turn input (`action_value` or `action_id`). |
| `apps/runtime/src/__tests__/execution/on-start-handoff-runtime.test.ts` | Eager, lazy, blocked, refused, remote, channel without proactive delivery, button first turn, FLOW entry, route WHEN at start and later, `ENABLED_WHEN`. |
| `apps/runtime/src/__tests__/execution/flow-initialization-handoff.test.ts` | A matching global HANDOFF `WHEN` is not evaluated during a startup flow transition (terminal or not). It is evaluated after user input. |
| `apps/runtime/src/__tests__/fixtures/orchestration/action-handoff-parent.abl` | AGENT with `HANDOFF:` and `FLOW:` together is valid. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`. |
| `apps/runtime/src/services/runtime-executor.ts` (~8260 `initialData`) and `personalization-context.ts` | Caller data lands under `session.*` and as flat keys (`appliedFlatKeys`). |
| Public reference `lifecycle-and-hooks.mdx` ("Start-time HANDOFF") and `multi-agent-and-supervisor.mdx` | Secondary cross-check. Conflicts listed below. |

## Drift analysis (1.4.4 to 1.8.1)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| Start-time handoff | New (ABLP-5578). Branch `DO: - HANDOFF` and top-level `HANDOFF:` in ON_START. | Becomes the primary pattern. The 2026-08-21 article had no start-time route. |
| Eager and lazy start | New activation model. Child waits for the first user message. | New "What happens at session start" section. |
| Outcome trace | `dsl_on_start_handoff` with `executed`, `blocked`, `failed`, `call_failed`, `superseded_by_tool_hook`, `skipped_mode`. | Verification and troubleshooting. |
| Failure policy | Refused start handoff shows only the route `ON_FAILURE`. | Production checklist, troubleshooting. |
| Existing example 2 | `SET: entry_topic = "claims"` plus route `WHEN` plus a flow step that ends with `THEN: COMPLETE`. Per `flow-initialization-handoff.test.ts`, the route `WHEN` is not evaluated during startup transitions, and a terminal bootstrap completes the session. | Example replaced. Reported as a doc bug. |
| Dual GATHER | Top-level `GATHER` duplicated the flow-step field. | Removed. The flow-step field is the only declaration. |
| `PASS: [account_id, ...]` | `account_id` had no source in the example. | Removed from `PASS`. |
| HANDOFF history default | Still `full`. | One bullet retained. |
| Channel contract | Welcome suppressed on `channel_native` and `none` channels. The start handoff still runs. | Production checklist and troubleshooting. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Branch `IF` on start data with `DO: - HANDOFF` | yes | Parser, IR, test "a matched branch hands off after its welcome" | covered (minimal example) |
| `ELSE` branch with `DO: - HANDOFF` as the fallback route | yes | Harness compile. `ON_START_BRANCH_DO_ACTIVATED` for the ELSE branch. | covered |
| Top-level `HANDOFF:` that runs when no branch matched | yes | `selectOnStartList`, test "the top-level handoff runs only when no branch matched" | covered (variation) |
| Top-level `HANDOFF:` decided by the route `WHEN` on start data | yes | Test "a top-level handoff gated by the route WHEN is decided by the start data" | covered (variation) |
| Route `WHEN` that a model alone could judge (natural language, `intent.*`) | yes, never met by top-level start handoff | Test "a top-level handoff whose WHEN only a model could judge is not met" | covered (variation text) |
| Eager start (no user message) | yes | Test eager block. Child `awaiting_user`. | covered |
| Lazy start (first message starts the session) | yes | Test lazy block, `runtime-executor.ts:22722` | covered |
| Realtime speech-to-speech | yes, handoff skipped | `buildOnStartCapabilities(allowHandoff: !realtimeS2S)`, outcome `skipped_mode` | covered |
| Remote (A2A) target | yes, always refused | `invokeHandoffOnFailureOnly`, outcome `failed` `remote_target_unsupported` | covered (mistakes) |
| Route `WHEN` false | yes, silent, entry keeps session | Test "a WHEN-blocked handoff keeps its blocked diagnostic" | covered |
| `ENABLED_WHEN` switched off | yes, route `ON_FAILURE` runs | Test `DISABLED_CASES`, outcome `blocked` `target_disabled` | covered (troubleshooting) |
| `ON_FAILURE` `RESPOND` / `CONTINUE` / `ESCALATE` on the start route | yes | Test `ON_FAILURE_CASES`. Reference confirms `ESCALATE`. | covered (checklist) |
| Failed branch `CALL` stops the list before the handoff | yes | Test "a failed list CALL stops the list before the handoff" | covered (troubleshooting) |
| Menu choice: flow `GATHER` plus route `WHEN` after user input | yes | `flow-initialization-handoff.test.ts` third test. Harness compile with enum field. | covered (variation) |
| Enum `GATHER` rejects other text | compile-level yes | IR dump: `validation.rule: billing|returns`, `error_message` set | covered. Runtime retry not executed. |
| Button press becomes turn input (`VALUE`, else id) | yes | `resolveActionEventTurnInput`, test "a first turn that is only a button" | covered (variation text) |
| Step-level `ON_ACTION` with `HANDOFF` for buttons | yes | `action-handoff-parent.abl` fixture | out of scope: belongs to a button-action topic; the enum menu covers the same need |
| Specialist `ON_START` | no, never runs | `executeOnStart` has one caller. Test INT-13. | covered |
| Route stays active after start (route `WHEN` on start data) | yes | Test "a route WHEN on start data stays a routing rule after the child returns" | covered |
| Start-only route (branch `IF` plus route without `WHEN`) | yes | Test "a branch IF with a route without WHEN makes the handoff start-only" | covered |
| `DELEGATE` at start | yes, but not a route | `ON_START_DELEGATE_WITH_HANDOFF` | out of scope: delegate is not a welcome route |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code reading plus the repository test suite named above. No runtime run (dependencies not installed in the harness). | covered | State in open questions. |
| Required companion resources identified | Every route target is defined in the article. `entry_topic` and `page_name` are stated as project-local caller data. | covered | None. |
| Referenced variables have sources | `session.entry_topic`, `session.page_name`: caller data. `startup_choice`: flow `GATHER`. | covered | None. |
| Fallback, failure, ambiguity behavior verified | ELSE fallback agent, blocked, refused, remote, realtime, call failed, unknown menu text. | covered | None. |
| Customer verification path defined | Trace order `dsl_on_start_branch`, `handoff`, `dsl_on_start_handoff`. Field values verified in tests. | covered | None. |
| Production readiness checklist included | Present. | covered | None. |

## Example validation

Harness: esbuild bundle of `validateABL` (`validate-ir.ts`) with `@abl/core`, built in the scratchpad under `h24/`. Blocks extracted by script. Routing documents are validated with their companion agents in the same compilation. Negative control: the router without its specialists reports six `INVALID_ROUTING_TARGET` or `INVALID_HANDOFF_TARGET` errors.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Welcome_Router_Agent` | full-document (set with blocks 2-4) | `validateABL` with companions | pass | 3 x `ON_START_BRANCH_DO_ACTIVATED` (intentional, informational, explained) | new |
| Blocks 2-4 `Claims_Agent`, `Billing_Agent`, `General_Service_Agent` | full-document | `validateABL` | pass | none | kept (reshaped) |
| Block 5 `Welcome_Menu_Agent` | full-document (with `Billing_Agent`, `Returns_Agent`) | `validateABL` with companions | pass | none | changed (enum field, no top-level GATHER) |
| Block 6 `Returns_Agent` | full-document | `validateABL` | pass | none | kept |
| Block 7 `Sales_Router_Agent` | full-document (with block 8) | `validateABL` with companion | pass | `ON_START_HANDOFF_ACTIVATED` (intentional, informational) | new |
| Block 8 `Sales_Agent` | full-document | `validateABL` | pass | none | new |

The 2026-08-21 blocks validated with zero errors, but the second set (`Welcome_Context_Router`) fails operationally (see drift analysis).

## Runtime semantics checks (harness, real runtime functions)

| Check | Result |
| ----- | ------ |
| `session.entry_topic == "claims"` with `session.entry_topic = claims` | true |
| Same condition with no `entry_topic` | false (ELSE branch is reached) |
| Flat `entry_topic == "claims"` with no flat key | false |
| `"user is signed in"` (quoted sentence in an `IF`) | true |
| Compile: enum GATHER with `OPTIONS` | `type: enum`, `enum_values`, validation `error_message` set |
| Compile: handoff `ON_FAILURE` omitted | compiled as `continue` |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighboring constructs? | pass | `HANDOFF`, `DO`, `routing`, `ON_ACTION`, `deterministic`, `pending`, `awaiting_user`, `delegate`. |
| Identified every authoring style, alias, default, fallback? | pass | Branch DO, top-level handoff, route WHEN, menu, button. `PASS`/`SUMMARY` shorthand confirmed in parser. |
| Distinguished optional from required sections? | pass | The route must be declared in `HANDOFF:` (required). `ON_FAILURE`, `PASS` optional. |
| Explained reasoning-layer guidance? | pass | Stated that natural-language route conditions are never met at start. A model-chosen route is a different topic (3.1). |
| Avoided making a preferred pattern the only pattern? | pass | Three signals in a table. |
| Could a customer build this another supported way? | pass | `ON_ACTION` handoff and supervisor routing exist. Scoped out with a reason. |
| Evidence if asked "are you not considering all scenarios?" | n/a | Variant map and test names. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Start semantics (eager, lazy, realtime), failure outcomes, route `WHEN` persistence, and the startup-transition rule are explicit and test-backed. | None. |
| Senior content writer | ready | Signal table first, then examples. Short sentences. No dashes. | None. |
| Product manager/customer enablement | ready | Fallback route in the example, per-case verification, escalation caveat, channel caveat. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 2 | Replaced the non-routing example. Cited eager and lazy contracts and tests. | 5 |
| Depth of conceptual explanation | 3 | Signal table and start semantics. | 5 |
| Readability and usability | 4 | Table of signals, short bullets. | 5 |
| Coverage of examples | 2 | New start-data example, menu with enum, top-level handoff. | 5 |
| Search and discovery quality | 4 | Added `ON_START HANDOFF`, `DO`, `BRANCHES` language. | 4 |
| Completeness of workflow and failure modes | 3 | Blocked, refused, remote, realtime, call failed. | 5 |
| Customer/partner self-service readiness | 4 | Companion agents defined. Project-local values stated. | 4 |
| Scenario comprehensiveness | 3 | Added every `yes` row or scoped it out. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass (minimum 4)

## Doc discrepancies for human review

1. Public reference vs code: `lifecycle-and-hooks.mdx` calls an undeclared start-handoff target a compile error. Code emits `ON_START_HANDOFF_TARGET_INVALID` as a warning.
2. Public reference vs test: the reference says a bare top-level `HANDOFF:` with no branches is "decided by that declared route's own `WHEN`". The test "a top-level handoff gated by the route WHEN" confirms this. It conflicts in spirit with `flow-initialization-handoff.test.ts`, where a global route `WHEN` is not evaluated during startup flow transitions. Both are correct for their constructs. The article states the distinction.
3. Previous article defect: `Welcome_Context_Router` hard-coded `SET: entry_topic = "claims"`, relied on a route `WHEN`, and ended the flow with `THEN: COMPLETE`. The route does not fire at start and the session completes. Replaced.
4. Previous article defect: duplicate `startup_choice` `GATHER` at agent level and step level. `PASS` listed `account_id` with no source.
5. The reference calls caller data from a browser "unverified". The article repeats this. Confirm the bootstrap endpoint name before publishing any link.
6. Other published articles (2.1, 2.2, 2.7, 2.8, 3.x routing) may carry the same "first step ends with `THEN: COMPLETE`" pattern. Review them.

## Open questions

- No end-to-end runtime run. Claims rely on code and repository tests.
- Enum `GATHER` retry behavior after invalid text was verified at compile level only.
- Confirm customer-facing wording for caller data (SDK `callerData` or custom attributes).
- The `ESCALATE` caveat follows the first-batch lesson and the reference. It was not re-run here.
