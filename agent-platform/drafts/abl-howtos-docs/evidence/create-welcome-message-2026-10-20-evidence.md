# Evidence: create-welcome-message

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/create-welcome-message.md`
**Topic:** 2.1 - How to create a welcome message for a new conversation
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. Previous refresh: 2026-08-21 (`hotfix_Artemis_1.4.4`).
**Code repo:** `/Users/Prabhat.Singh/Documents/GitHub/artimus-bitbucket-src/abl-platform` (read only).
**Validation harness:** esbuild bundle of `validateABL` from `packages/compiler/src/platform/ir/validate-ir.ts`, built in the scratchpad (`.../scratchpad/h2/build.mjs`, `entry.ts`, `ir.ts`, `cond.ts`). The earlier `h` and `mine` harnesses no longer existed.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` `parseOnStart` (9576), `parseOnStartBranches` (9377), `parseOnStartBranchDoBlock` (9486), `parseOnStartHandoff` (9529) | Parses `RESPOND`, `FORMATS`, `ACTIONS`, `BRANCHES`, `DO`, `SET`, `CALL`, `HANDOFF`. Harness shows `RICH_CONTENT` under `RESPOND` also lands in `on_start.rich_content`. |
| `packages/core/src/parser/on-start-do-block.ts` | New in 1.8. Defines which actions a branch `DO` list runs (`SET`, `CALL`, `HANDOFF`, language) and drops the rest with `W381`. |
| `packages/compiler/src/platform/ir/on-start-diagnostics.ts` | New in 1.8. `ON_START_BRANCH_DO_ACTIVATED`, `ON_START_HANDOFF_*` diagnostics. All warnings. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` `executeOnStart` (13652), `shouldEmitOnStartProactivePayload` (3081), `selectOnStartResponseConfig` (1229), `renderOnStartResponse` (1426) | Order of SET, CALL, language, branch selection, welcome emit, history write, `dsl_on_start_skipped`. |
| `apps/runtime/src/services/runtime-executor.ts` `initializeSession` (9064; idempotent guard at 9194; memory and interaction refresh at 9477-9490; prelude versus branch ownership at 9631-9660; reasoning-mode return at 9756) | Eager start path. A branch welcome returns before the entry flow step runs. A top-level welcome flows through to the entry step. |
| `apps/runtime/src/services/runtime-executor.ts` `executeMessage` lazy ON_START block (22695-22770) and `services/execution/lifecycle-dispatcher.ts` `resolveLazyOnStartResult` (439) | Lazy start. With an inbound user message the renderable welcome is suppressed and history is restored (`lazy_on_start_response_suppressed`). |
| `apps/runtime/src/channels/channel-behavior-contract.ts` (`proactiveDelivery` per channel) | Source of the allow and suppress lists in the article. |
| `apps/runtime/src/websocket/sdk-handler.ts` (4857, 660) and `websocket/handler.ts` (5539) | Web SDK and web debug call `initializeSession` at connect (eager start). |
| `apps/runtime/src/services/execution/flow-step-executor.ts` `handleTerminalFlowTarget` (8155-8300) | A step that moves to `COMPLETE` sets `session.isComplete = true` and returns `sessionEnded: true`. |
| `packages/shared-kernel/src/constants/trace-event-registry.ts` (144-153, 1204-1208) | `dsl_on_start`, `dsl_on_start_branch`, `dsl_on_start_branch_error`, `dsl_on_start_handoff`, `dsl_on_start_skipped`, `dsl_respond`, `dsl_set` are registered and emitted. |
| `apps/runtime/src/__tests__/on-start-rich-content.e2e.test.ts`, `on-start-session-idempotency.e2e.test.ts` | Rich welcome with `FORMATS` and `ACTIONS`; once-per-session behavior; first message in a new session runs `ON_START` setup without swallowing the user turn. |

## Drift analysis (1.4.4 to 1.8.1)

| Area | Change | Article impact |
| ---- | ------ | -------------- |
| Channel behavior contract | 49 changed lines. Two channels were added: `a365` (`channel_native`) and `workflow` (`none`). Both suppress the welcome. Existing channels keep their `proactiveDelivery` values. Only `on_start` and `on_start_and_async_updates` deliver the welcome. | The old article said "some channels". The new article names every channel type and adds `a365` and `workflow`. |
| Startup output | New `startup-output.ts`, `on-start-handoff.ts`. Welcome history entries carry startup provenance. Lazy-start suppression (`suppress_renderable_init_result`) and `dsl_on_start_skipped` already existed in 1.4.4. | No article change. Evidence only. |
| `ON_START` `DO` lists and start-time handoff | New parser, compiler, and runtime paths. | Not in scope for 2.1. Covered by 2.2 and the welcome routing HowTo. |
| Trace registry | `dsl_on_start_handoff` added. Other `ON_START` events unchanged. | `dsl_on_start`, `dsl_respond` claims remain valid. |
| `ACTIONS` button syntax | `- BUTTON: "Label" -> id` with `VALUE:` still parses. IR shows `id`, `type: button`, `label`, `value`. | No change. |
| Flow completion | `THEN: COMPLETE` completes the session at once (`handleTerminalFlowTarget`). | Both published examples ended the session during startup. Fixed. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Top-level `ON_START: RESPOND` welcome | yes | `executeOnStart`; IR dump of `fin/2.1-b1.abl` | covered |
| Welcome then flow entry step (prelude) | yes | `initializeSession` 9631-9740 | covered |
| Branch welcome owns the startup turn | yes | `initializeSession` 9654-9658 | covered (concept) |
| Rich content with `FORMATS`; `RICH_CONTENT` alias | yes | IR dump `on_start.rich_content`; `ex/v1.abl` | covered |
| Buttons with `ACTIONS`, handled by `ACTION_HANDLERS` | yes | IR dump `on_start.actions.elements`; compile clean with handlers | covered |
| Welcome from agent with no `FLOW` | yes | `initializeSession` 9756 returns the `ON_START` result | covered |
| Eager start | yes | `sdk-handler.ts` 4857, `handler.ts` 5539 | covered |
| Lazy start drops the welcome, keeps `SET` and `CALL` | yes | `lifecycle-dispatcher.ts` 439, `runtime-executor.ts` 22738-22760 | covered |
| Channel suppression with `dsl_on_start_skipped` | yes | `executeOnStart` hasSuppressedProactivePayload block | covered |
| Agent Assist carries the welcome in its own envelope | yes | `renderOnStartWelcomeText`, `welcome-resolver.ts` | covered (one row) |
| `VOICE` payload, `MESSAGE_KEY` localization | yes | parser cases `voice`, `message_key` | out of scope: channel-specific copy belongs to 2.7. Linked. |
| `ON_START` tool result `content` as welcome | yes | `resolveLifecycleToolResultAssistantMessage` (3099) | out of scope here: covered in 2.3 |
| Start-time `HANDOFF`, `DELEGATE` | yes | `on-start-handoff.ts`, `executeOnStart` delegate block | out of scope here: 2.2 and 2.5 |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `executeOnStart`, `initializeSession`, `executeMessage` read. No end-to-end run. | covered | Button handler flow while a `GATHER` is waiting was not run end to end. Verification step 6 tests it. |
| Required companion resources identified | Handlers for each button ID; flow steps `ask_topic`, `confirm_topic` defined in the example | covered | none |
| Referenced variables have sources | `topic` is set by `GATHER` or by `ACTION_HANDLERS` `SET` | covered | none |
| Fallback, failure, ambiguity behavior verified | Suppressed channel, lazy start, branch ownership, entry-step completion | covered | none |
| Customer verification path defined | Seven numbered steps with trace names | covered | none |
| Production readiness checklist included | Present | covered | none |

## Example validation

Harness: `node out.mjs <file>` runs `validateABL` (parse, compile, cross-agent validation) on each extracted block.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Published block 1 (Welcome_Message_Agent) | full-document | parse + compile | pass | none | replaced: entry step used `RESPOND` then `THEN: COMPLETE`, which ends the session at startup |
| Published block 2 (Rich_Welcome_Agent) | full-document | parse + compile | pass | none | replaced: same completion defect, and buttons had no handlers |
| New block 1 (Welcome_Message_Agent) | full-document | parse + compile | pass | none | kept |
| New block 2 (Rich_Welcome_Agent) | full-document | parse + compile, IR dump | pass | none | kept |
| New block 3 (Reasoning_Welcome_Agent) | full-document | parse + compile | pass | none | kept |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighbors? | pass | `ON_START`, `onStart`, `on_start`, `initializeSession`, `proactiveDelivery`, `FORMATS`, `RICH_CONTENT`, `ACTIONS`, `ACTION_HANDLERS`. |
| Identified every authoring style, shorthand, default, fallback? | pass | Flow prelude, branch ownership, reasoning-only agent, lazy and eager. |
| Optional versus required? | pass | `FORMATS` and `ACTIONS` shown as optional. |
| Free-form guidance explained? | n/a | Lifecycle topic. |
| Preferred pattern presented as the only one? | pass | Flow and no-flow variations shown. |
| Other code-supported way not mentioned? | pass | `VOICE`, `MESSAGE_KEY`, tool `content`, handoff are named as covered elsewhere. |
| Lesson 1: bare quoted natural-language condition is truthy? | n/a | No conditions in this article. In `ON_START` branches, plain-English `IF` evaluates false (harness), covered in 2.2. |
| Lesson 2: channel value path? | pass | No channel reads in this article. |
| Lesson 3: quoted timeouts ignored? | n/a | No timeouts. |
| Lesson 4: HANDOFF history default? | n/a | No handoff here. |
| Lesson 5: ESCALATE reaches a person? | n/a | |
| Lesson 6: documented settings compiled? | pass | IR dump shows `respond`, `rich_content`, `actions` compiled. |
| Lesson 7: trace names emitted? | pass | Each name found in `flow-step-executor.ts` and registry. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Channel and start-type rules match the contract and dispatcher. Examples no longer end the session. | None. Flag the untested button-while-`GATHER` path in the report. |
| Senior content writer | ready | Concept leads with the decision. Tables replace prose. Short sentences. | None. |
| Product manager/customer enablement | ready | Customers learn why the welcome is missing on HTTP, Slack, and similar channels. Verification names concrete trace events. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Channel lists from the contract; lazy and eager paths cited; examples validated with a harness | 5 |
| Depth of conceptual explanation | 3 | Start type and channel decision tables; prelude versus branch ownership | 5 |
| Readability and usability | 4 | Tables and numbered steps | 5 |
| Coverage of examples | 3 | Fixed session-ending examples; added handlers and no-flow variation | 4 |
| Search and discovery quality | 4 | Channel types, trace names, symptoms in headings | 5 |
| Completeness of workflow and failure modes | 3 | Lazy start, suppressed channel, entry-step completion | 5 |
| Customer/partner self-service readiness | 4 | No repo paths in article | 5 |
| Scenario comprehensiveness | 3 | All `yes` rows covered or scoped out with a reason | 4 |
| Article completeness | 4 | Added Related HowTos (all files exist) | 5 |

**Gate result:** pass. Minimum score 4.

## Doc discrepancies for human review

| Item | Detail |
| ---- | ------ |
| Entry steps that end the session | Other articles use `RESPOND` then `THEN: COMPLETE` as the entry step: `use-on-start-welcome`, `personalize-returning-user-welcome` (fixed in this batch), plus `design-channel-specific-welcome`, `handle-fallback-greetings`, `initialize-session-before-first-turn`, `route-users-from-welcome`, `run-auth-profile-lookup-on-start`, `handle-multiple-intents`. With an eager start these sessions complete during startup. Review each. |
| Public reference gap | `lifecycle-and-hooks.mdx` describes lazy start only under start-time `HANDOFF`. Code also drops a plain welcome on a lazy start (`lazy_on_start_response_suppressed`). The reference does not list which channels suppress the welcome. |
| Public reference property table | The `ON_START properties` table in `lifecycle-and-hooks.mdx` omits `HANDOFF`, `DO`, `SET_INTERACTION_LANGUAGE`, and `CLEAR_INTERACTION_LANGUAGE`. The parser accepts all four. |
| Code versus reference | `lifecycle-and-hooks.mdx` calls `ON_START_HANDOFF_TARGET_INVALID` a compile error. Code emits a warning (`on-start-diagnostics.ts`, `validate-cross-agent.ts` comment "ON_START never gains an error"). Harness confirms a warning. Follow code. |

## Open questions

- Confirm with engineering that a button click during a waiting `GATHER` step reaches the matching `ACTION_HANDLERS` entry. Code and compile are clean, but no end-to-end run was possible.
- Confirm that voice channels in the "allows the welcome" row deliver the text on every start type. `voice_livekit` is a lazy start per the public reference.
