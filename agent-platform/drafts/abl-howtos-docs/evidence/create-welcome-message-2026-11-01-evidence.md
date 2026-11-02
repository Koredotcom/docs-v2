# Evidence: create-welcome-message

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/create-welcome-message.md`
**Published copy:** `agent-platform/abl/how-to/create-welcome-message.mdx`
**Topic:** 2.1 - How to create a welcome message for a new conversation
**Workflow:** Refresh against `release_Artemis_1.9.0`. Previous scan: 2026-10-20 (`hotfix_Artemis_1.8.1`).
**Code repo:** `/Users/Prabhat.Singh/Documents/GitHub/artimus-bitbucket-src/abl-platform` (read only).
**Validation harness:** `node .../scratchpad/harness/validate.mjs <file.abl>`, run from `/tmp`. Scratch files in `.../scratchpad/welcome/`.
**Branch caveat:** `release_Artemis_1.9.0` does not descend from `hotfix_Artemis_1.8.1` (merge base `15eeb40ef77`). The diff was used to locate changes only. Each claim was re-read in the 1.9.0 source.

## Source files inspected (1.9.0)

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/channels/channel-behavior-contract.ts` | `proactiveDelivery` per channel. Rebuilt the allow and suppress lists from this file. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` `executeOnStart` (14628), `shouldEmitOnStartProactivePayload` (3276), `ON_START_PROACTIVE_DELIVERY_MODES` (921), `selectOnStartResponseConfig` (1338), `renderOnStartWelcomeText` (1558) | Order of `SET`, `CALL`, language, branch selection, welcome emit, history write, `dsl_on_start_skipped`. Body of `executeOnStart` is byte-identical to 1.8.1 (454 lines compared). |
| `apps/runtime/src/services/runtime-executor.ts` `initializeSessionOwned` (9839; idempotent guard 9862; `before_agent` hook; `executeOnStart` call 10300; branch ownership 10331; entry step 10350; reasoning-mode return 10442) | Eager start path. Branch welcome with a renderable payload returns before the entry step. Top-level welcome, including a branch miss, flows through to the entry step. |
| `runtime-executor.ts` lazy ON_START block (24410-24500) and `lifecycle-dispatcher.ts` `resolveLazyOnStartResult` (436) | Lazy start. With an inbound user message the renderable welcome is suppressed and history is restored (`lazy_on_start_response_suppressed`). |
| `apps/runtime/src/websocket/sdk-handler.ts` (3613-3650) | Web SDK. An initial message goes straight to `handleChatMessage` (lazy start). A blocking auth gate defers `ON_START`. Otherwise `scheduleSdkOnStart` fires it at connect. |
| `apps/runtime/src/websocket/handler.ts` (5623) | Web debug calls `initializeSession` at connect (eager start). |
| `apps/runtime/src/services/voice/livekit/runtime-llm-adapter.ts` | LiveKit calls `executeMessage` per utterance. No `initializeSession` at connect, so the start is lazy. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` `handleTerminalFlowTarget` (8729) | A `COMPLETE` target sets `session.isComplete = true` unless a handoff or completion condition takes over. |
| `packages/core/src/parser/agent-based-parser.ts` `parseOnStart` (10443), `parseOnStartBranches` (10244) | Identical to 1.8.1 (diffed). |
| `packages/core/src/parser/on-start-do-block.ts`, `packages/compiler/src/platform/ir/on-start-diagnostics.ts` | No diff against 1.8.1. |
| Tests: `on-start-rich-content.e2e.test.ts`, `on-start-session-idempotency.e2e.test.ts` | Present. Rich welcome and once-per-session behavior. |

## Drift analysis (1.8.1 to 1.9.0)

| Area | Change | Article impact |
| ---- | ------ | -------------- |
| Channel behavior contract | No change. 12 channels allow the welcome, 20 suppress it, `kore_agent_assist` uses its own envelope. Lists in the article match. | None. |
| `executeOnStart` | No change. | None. |
| `parseOnStart`, branch and `DO` parsers, diagnostics | No change. | None. |
| `initializeSessionOwned` | Same ordering and branch ownership rules. | None. |
| `lifecycle-dispatcher.ts` | Turn-end outcome gains `cancelled`. Lazy ON_START resolution unchanged. | None. |
| `startup-output.ts` | Adds `receiptSourceSessionId` and `bindForkStartupReceiptSource` for forked sessions. | None. Internal. |
| `on-start-handoff.ts` | Failure result carries `executionFailureFallback` (ABLP-5739). | None for 2.1. Relevant to 2.5. |
| Hotfix-only commits on 1.8.1 | `1b7886a6fea` (ABLP-2446) restores caller listening after a protected welcome on KoreVG. The original fix is in 1.9.0. | None. The article does not describe it. |
| Published article gaps found (not release changes) | The start-type table omits that a Web SDK initial message makes the start lazy and that LiveKit is lazy. The article omits the Web SDK blocking auth gate, the `before_agent` hook before `ON_START`, and that a branch miss still flows through. | Added. See the review. |

No behavior in the published article comes from a 1.8.x hotfix backport that is missing in 1.9.0.

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Top-level `ON_START: RESPOND` welcome | yes | `executeOnStart`; harness block 1 | covered |
| Welcome then flow entry step (prelude) | yes | `initializeSessionOwned` 10350-10440 | covered |
| Branch miss falls back to top-level `RESPOND`, still a prelude | yes | comment at 10324-10330; `selectOnStartResponseConfig` returns top-level config | covered (added) |
| Branch welcome owns the startup turn | yes | `initializeSessionOwned` 10331 | covered |
| Rich content with `FORMATS`; `RICH_CONTENT` alias | yes | harness block 2 | covered |
| Buttons with `ACTIONS` and `ACTION_HANDLERS` | yes | harness block 2 compiles clean | covered |
| Welcome from an agent with no `FLOW` | yes | `initializeSessionOwned` 10442 | covered |
| Eager start (web debug, Web SDK without initial message) | yes | `handler.ts` 5623, `sdk-handler.ts` 3646 | covered |
| Lazy start (HTTP chat, LiveKit, Web SDK with initial message) | yes | `runtime-executor.ts` 24410-24500, `sdk-handler.ts` 3613-3632, LiveKit adapter | covered (updated) |
| Web SDK blocking auth gate defers `ON_START` | yes | `sdk-handler.ts` 3636-3643 | covered (added) |
| `before_agent` hook runs before `ON_START` | yes | `initializeSessionOwned` before the `executeOnStart` call | covered (added) |
| Channel suppression with `dsl_on_start_skipped` | yes | `executeOnStart` `hasSuppressedProactivePayload` block | covered |
| Agent Assist carries the welcome in its own envelope | yes | `renderOnStartWelcomeText` | covered (one row) |
| `VOICE` payload, `MESSAGE_KEY` localization | yes | parser cases `voice`, `message_key` | out of scope: 2.7. Linked. |
| `ON_START` tool result `content` as welcome | yes | `resolveLifecycleToolResultAssistantMessage` | out of scope: 2.3 |
| Start-time `HANDOFF`, `DELEGATE` | yes | `on-start-handoff.ts`, `executeOnStart` | out of scope: 2.2 and 2.5 |
| Realtime speech-to-speech start | yes | `voice-startup-greeting.ts` resolves `ON_START` as the canonical greeting | out of scope: 2.7 (voice) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `executeOnStart`, `initializeSessionOwned`, lazy block, SDK handler read in 1.9.0. No end-to-end run. | covered | Button click during a waiting `GATHER` not run end to end. Verification step 6 tests it. |
| Required companion resources identified | Handlers for each button ID. Flow steps defined in each example. | covered | none |
| Referenced variables have sources | `topic` comes from `GATHER` or `ACTION_HANDLERS` `SET`. | covered | none |
| Fallback, failure, ambiguity behavior verified | Suppressed channel, lazy start, branch ownership, entry-step completion, auth gate. | covered | none |
| Customer verification path defined | Seven numbered steps with trace names. | covered | none |
| Production readiness checklist included | Present, plus the Web SDK initial-message test. | covered | none |

## Example validation

Harness: `validate.mjs` (parse, compile, cross-agent validation) on each fenced `abl` block extracted from the proposed article. The three blocks are unchanged from the 2026-10-20 draft.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Welcome_Message_Agent) | full-document | parse + compile | pass | none | kept |
| Block 2 (Rich_Welcome_Agent) | full-document | parse + compile | pass | none | kept |
| Block 3 (Reasoning_Welcome_Agent) | full-document | parse + compile | pass | none | kept |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighbors? | pass | `ON_START`, `on_start`, `initializeSession`, `isLazyOnStartTurn`, `proactiveDelivery`, `initialMessage`, `scheduleSdkOnStart`, `FORMATS`, `RICH_CONTENT`, `ACTIONS`. |
| Identified every authoring style, shorthand, default, fallback? | pass | Prelude, branch ownership, branch miss, no-flow agent, eager, lazy. |
| Optional versus required? | pass | `FORMATS` and `ACTIONS` shown as optional. |
| Free-form guidance explained? | n/a | Lifecycle topic. |
| Preferred pattern presented as the only one? | pass | Flow and no-flow variations shown. |
| Other code-supported way not mentioned? | pass | `VOICE`, `MESSAGE_KEY`, tool `content`, handoff named as covered elsewhere. |
| Lesson 1: bare quoted natural-language condition? | n/a | No conditions. |
| Lesson 2: channel value path? | pass | No channel reads. |
| Lesson 3: quoted timeouts ignored? | n/a | |
| Lesson 4: HANDOFF history default? | n/a | |
| Lesson 5: ESCALATE reaches a person? | n/a | |
| Lesson 6: documented settings compiled? | pass | Blocks compile clean. |
| Lesson 7: trace names emitted? | pass | `dsl_on_start`, `dsl_on_start_branch`, `dsl_on_start_skipped`, `dsl_respond`, `dsl_set` found in `flow-step-executor.ts` 14628-15000. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Start types now match SDK, LiveKit, and HTTP behavior. Auth gate and hook order stated. | None. Flag the untested button-while-`GATHER` path. |
| Senior content writer | ready | Answer first. Tables carry the rules. Short sentences. | None. |
| Product manager/customer enablement | ready | Customers learn why a Web SDK session with an initial message shows no welcome. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-verified in 1.9.0. Added SDK, LiveKit, auth gate, hook order. | 5 |
| Depth of conceptual explanation | 4 | Start type table corrected. Branch miss rule added. | 5 |
| Readability and usability | 5 | Kept structure. | 5 |
| Coverage of examples | 4 | Blocks validated. | 4 |
| Search and discovery quality | 4 | Channel names and trace names in tables. | 5 |
| Completeness of workflow and failure modes | 4 | Added Web SDK initial message and auth gate paths. | 5 |
| Customer/partner self-service readiness | 5 | No repo paths in article. | 5 |
| Scenario comprehensiveness | 4 | All `yes` rows covered or scoped out. | 4 |
| Article completeness | 5 | All template parts present. | 5 |

**Gate result:** pass. Minimum score 4.

## Doc discrepancies for human review

| Item | Detail |
| ---- | ------ |
| Published `.mdx` versus draft | `.mdx` adds frontmatter, a back-to-guides Badge, `yaml` code fences (`expandable=true` on blocks 1 and 2), and drops the `Related HowTos` section. Prose is otherwise identical. The proposed text keeps the draft form. Port the edits into the `.mdx` and keep its frontmatter, Badge, and fence style. |
| Entry steps that end the session | Other articles still use `RESPOND` then `THEN: COMPLETE` as an entry step (see the 2026-10-20 list). Review each. |
| `lifecycle-and-hooks.mdx` property table | The `ON_START properties` table omits `HANDOFF`, `DO`, `SET_INTERACTION_LANGUAGE`, and `CLEAR_INTERACTION_LANGUAGE`. |
| `lifecycle-and-hooks.mdx` severity | The reference calls `ON_START_HANDOFF_TARGET_INVALID` a compile error. Code emits a warning (`on-start-diagnostics.ts` line 186 text, harness confirms). |
| `lifecycle-and-hooks.mdx` start table | It lists LiveKit as lazy but the channel contract lists `voice_livekit` under `on_start`. The article's allow list follows the contract and now names LiveKit as a lazy start. |

## Open questions

- Confirm a button click during a waiting `GATHER` step reaches the matching `ACTION_HANDLERS` entry. No end-to-end run was possible.
- Confirm which voice channels in the allow row deliver the welcome on every start type. Realtime speech-to-speech uses a separate greeting resolver (`voice-startup-greeting.ts`).
