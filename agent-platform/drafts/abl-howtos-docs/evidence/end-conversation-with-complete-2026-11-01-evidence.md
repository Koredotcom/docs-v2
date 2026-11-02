# Evidence: end-conversation-with-complete

**Date:** 2026-11-01
**Article:** none yet. New topic.
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/end-conversation-with-complete-2026-11-01-draft.md`
**Topic:** 4.4 - How to end a conversation with COMPLETE
**Workflow:** Article Creation Workflow against `release_Artemis_1.9.0`. No prior article, draft, or evidence.
**Verdict:** draft ready for review

## Validation harness

`validateABL` (`packages/compiler/src/platform/ir/validate-ir.ts`) from the code repo source on `release_Artemis_1.9.0`. The earlier harness folder was empty at the start of this run, so the harness was rebuilt as `scratchpad/harness/run.sh` (`tsx` plus an ESM resolver hook that maps workspace packages to `src`). It calls the same `validateABL`. Scratch files are in `scratchpad/escalate-complete/` (`c*.abl`, `f1.abl`, `r*.abl`, `art44/b*.abl`). The code repo stayed read-only. Runtime services were not started.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/types/agent-based.ts` (2043-2072) | `CompleteCondition`: `when`, `respond`, `modelContext`, `store`, `set`, `terminal`, payload fields |
| `packages/core/src/parser/agent-based-parser.ts` (`parseComplete` 9929, `parseCompleteCondition` 9973) | Section grammar. Warnings W360, W361. E357 for a bad item. One-line `SET` only |
| `packages/compiler/src/platform/ir/schema.ts` (3460-3480) | `CompletionCondition` IR |
| `packages/compiler/src/platform/ir/compiler.ts` (5010 `parseErrorThen`) | `ON_ERROR` `THEN: COMPLETE` maps to `complete` |
| `packages/compiler/src/platform/ir/validate-ir.ts` (2031) | `COMPLETE` is a terminal flow target |
| `packages/compiler/src/platform/constructs/executors/complete-executor.ts` | `CompletionDetector.check`: first match wins, in order |
| `packages/compiler/src/platform/constants.ts` (143) | Default `conversation_complete` text |
| `apps/runtime/src/services/execution/routing-executor.ts` (`completionRefusedByConstraints` 25728, `checkCompletionConditions` 25795, `executePostTurnCompletion` 25899, `executeComplete` 29397) | Constraint gate. Check sources. SET, STORE, message rules, `sessionEnded`, `TERMINAL: false` loop guard |
| `apps/runtime/src/services/execution/constraint-checker.ts` (565-590, 670-690, 800-825) | Completion-scoped constraint check. Release after three withholds (`MAX_BACKTRACKS_PER_STEP = 3`) |
| `apps/runtime/src/services/execution/types.ts` (`tryThreadReturn` 7014-7400) | Child pop, `ON_RETURN.MAP` merge, `syncThreadToSession` resets `isComplete` |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`handleTerminalFlowTarget` 8738-8900, 9000-9130, 19630, 27170-27320, 22160) | `THEN: COMPLETE`. Handoff check first. Terminal step check. Loop-back check. Validation handler complete |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (13290, 29341-29400, 29755, 22329) | Delegate-return and `__set_context__` checks. Model complete action guards. `ON_ERROR` complete fallthrough |
| `apps/runtime/src/services/execution/prompt-builder.ts` (5085-5140) | Complete action offered only to tool-bearing `RETURN: true` children |
| `apps/runtime/src/services/execution/lifecycle-dispatcher.ts` (651) | Post-turn completion skipped after complete, handoff, escalate, return |
| `apps/runtime/src/services/runtime-executor.ts` (3495-3510, 5381-5427, 18555-18600, 24040-24075, 24309, 26780-26860) | Conversation-complete reply for later messages. Post-turn replacement of the model text. Reopen on `TERMINAL: false` |
| `apps/runtime/src/services/execution/turn-exit-predicates.ts` (88) | `isCompletedSessionReturn` |
| `apps/runtime/src/services/execution/handoff-completion-record.ts` | `handoff_completed` is per handoff attempt, not per child completion. Not used in the article |
| Tests: `__tests__/execution/flow-terminal-transition-matrix.test.ts` (initial step reaches `COMPLETE`, `ON_INPUT` branch), `execution/__tests__/runtime-control-flow-safety.test.ts` | Same-turn completion from a flow step |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` (1284-1360) | Public reference cross-check only |
| Published how-tos `create-welcome-message.mdx`, `clarify-before-routing.mdx`, `route-users-from-welcome.mdx`, `switch-active-agent.mdx` | Terminology and the entry-step `RESPOND` then `THEN: COMPLETE` pattern |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| `COMPLETE:` section with `- WHEN:` and `RESPOND` | yes | `parseCompleteCondition`. Harness `c1` clean | covered |
| Several conditions, first match wins | yes | `CompletionDetector.check` | covered |
| `WHEN` must be deterministic | yes | Harness `r2`: `PLAIN_ENGLISH_COMPLETE_WHEN` error. Quoted `"order_id IS SET"` compiles | covered |
| `RESPOND` text with `{{vars}}` | yes | `executeComplete` interpolation | covered |
| No `RESPOND`: default message on a root agent | yes | `executeComplete` `conversation_complete` | covered |
| No `RESPOND` on a returning child: silent return | yes | `returningChildWithoutMessage` 29470 | covered |
| `MESSAGES` `conversation_complete` override | yes | `executeComplete`. Harness `c6` clean | covered |
| `SET` on completion | yes, one-line form only | Parser. Harness `r1` and `c2` | covered |
| `STORE` snapshot | yes | `executeComplete` writes `_stored_<key>` | covered |
| `MODEL_CONTEXT` | yes | `executeComplete`. Harness `c6` | covered |
| Response payload blocks (`FORMATS`, `RICH_CONTENT`, `VOICE`, `ACTIONS`) | yes | `parseCompleteCondition` 10040-10060 | out of scope: rich content articles. Named in the W360 allowed list |
| `TERMINAL: false` and reopen | yes | `executeComplete`. `runtime-executor.ts` 24040. Harness `c2` clean | covered |
| `TERMINAL: false` loop guard `NON_TERMINAL_COMPLETION_NO_PROGRESS` | yes | `executeComplete` | covered |
| Flow `THEN: COMPLETE` ends in the same turn | yes | `handleTerminalFlowTarget`. Test matrix "initial flow step reaches COMPLETE". Harness `f1` clean | covered |
| `ON_INPUT` branch `THEN: COMPLETE` | yes | Test matrix | covered (listed in table) |
| Step `ON_EXHAUSTED: COMPLETE` | yes | `transitionIfStepAttemptsExhausted` 12501 | covered (listed in table) |
| Terminal flow step, no `THEN`: completion check only | yes | `flow-step-executor.ts` 27275 | covered |
| Loop-back pre-advance check only | yes | `flow-step-executor.ts` 27195-27230 | covered |
| `HANDOFF` conditions checked before completion at `THEN: COMPLETE` | yes | `handleTerminalFlowTarget` 8810. Skipped for a returning child | covered |
| Constraint gate: completion withheld, released after three | yes | `completionRefusedByConstraints`. `shouldReleaseWithheldCompletion`. Harness `c5` clean | covered |
| Checkpoints: post-turn, `__set_context__`, delegate return, `terminal_step`, `loop_back_pre_advance`, `flow_transition`, `action_handler_complete` | yes | `completion_check` `source` values in code | covered (three named in verification) |
| Post-turn completion replaces model text in reasoning mode | yes | `runtime-executor.ts` 26794-26830 | covered |
| Model finish action for tool-bearing `RETURN: true` child | yes | `prompt-builder.ts` 5085. `reasoning-executor.ts` 29341 | covered (table row) |
| Root agent or `RETURN: false`: session ends. Later messages get the complete reply | yes | `isCompletedSessionReturn`. `buildConversationCompleteResult` | covered |
| `RETURN: true` child: pop to parent, `MAP`, silent return | yes | `tryThreadReturn`. Harness `c4` set clean | covered |
| `RETURN: false` specialist hands back with `HANDOFF`, not `COMPLETE` | yes (1.9.0) | `findCompletedPermanentHandoffParent` `routing-executor.ts` 1897 | covered (link) |
| `ON_ERROR` `THEN: COMPLETE` | partial | Flow `GATHER` validation handler completes (`flow-step-executor.ts` 22160). Reasoning-mode handler does not complete (`reasoning-executor.ts` 22329) | covered for the verified case only |
| `FLOW` step named `COMPLETE` (explicit complete step) | yes (internal) | `explicit_complete_step` source at 19638 | out of scope: internal cursor path |
| Workflow node completion (`abandonSessionAfterTurn`) | yes | `runtime-executor.ts` 18590 | out of scope: workflow articles |
| `COMPLETE` interaction with `HANDOFF` history and `resume_intent` | yes | `tryThreadReturn` 7300+ | out of scope: owned by 4.5 and 4.10. Linked |
| YAML-form `complete:` | yes | `yaml-parser.ts` | out of scope: ABL line form only |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `executeComplete`, `checkCompletionConditions`, `handleTerminalFlowTarget`, `tryThreadReturn` read in full | covered | Runtime not started. Source and tests only |
| Required companion resources identified | Supervisor, `Customer_Lookup_Agent`, and `Account_Service_Agent` shown together. `Account_Service_Agent` marked a stand-in | covered | None |
| Referenced variables have sources | `payment_amount`, `order_id`, `customer_id`, `new_address`, `consent_given`, `refund_amount` are `GATHER`. `summary_shown` is set by `ON_START` `SET` and by the completion `SET` | covered | None |
| Fallback, failure, ambiguity behavior verified | Plain-English error, constraint hold and release, loop guard, first match, no `RESPOND` | covered | None |
| Customer verification path defined | `completion_check` `source`, `complete` decision, second-message reply, `handoff_return_handler` `mappedFields`, `completion_withheld_by_constraint` | covered | None |
| Production readiness checklist included | Section present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Payment_Agent` (minimal) | full-document | `validateABL` via harness (`art44/b1.abl`) | pass | none | kept |
| Block 2 `Order_Lookup_Agent` | full-document | harness `art44/b2.abl` | pass | none | kept |
| Blocks 3, 4, 5 supervisor, lookup child, service stand-in | full-document (validated as one project) | harness `art44/b3.abl art44/b4.abl art44/b5.abl` | pass | none | kept |
| Block 6 `Order_Status_Agent` | full-document | harness `art44/b6.abl` | pass | none | kept |
| Block 7 `Refund_Agent` | full-document | harness `art44/b7.abl` | pass | none | kept |
| Block 8 `Payment_Agent` with `STORE` and `MESSAGES` | full-document | harness `art44/b8.abl` | pass | none | kept |
| Probe `r1.abl` (block `SET`) | not in article | harness | warning W360 | The block form of `SET` is ignored | used for a mistake row and a doc bug |
| Probe `r2.abl` (plain-English `WHEN`) | not in article | harness | error `PLAIN_ENGLISH_COMPLETE_WHEN` | as stated | used for a mistake row |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Removed a wrong claim that `handoff_completed` fires at child completion. Removed an unverified `ON_ERROR` sentence. Checked the three-withhold release count | 5 |
| Depth of conceptual explanation | 4 | Role table first (root, child, non-terminal), then ways to complete, then checks and runtime steps | 5 |
| Readability and usability | 3 | Short tables. One idea per sentence. Closing-text rule stated once | 4 |
| Coverage of examples | 3 | Added flow, child return, `TERMINAL: false`, constraint hold, `STORE`, `MODEL_CONTEXT`, and `MESSAGES` examples. All validated | 5 |
| Search and discovery quality | 4 | Headings carry `COMPLETE`, `THEN: COMPLETE`, `TERMINAL: false`, and error codes | 4 |
| Completeness of workflow and failure modes | 3 | Added later-message reply, withheld completion, loop guard, silent child return, and troubleshooting rows | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Companion agents named. Checklist added | 4 |
| Scenario comprehensiveness | 3 | Every `yes` row covered or scoped out with a reason | 4 |
| Article completeness | 4 | All template sections present | 5 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | See source table |
| Did I search synonyms and neighbors? | pass | Searched `COMPLETE`, `completion`, `isComplete`, `sessionEnded`, `TERMINAL`, `__complete__`, `tryThreadReturn`, `RETURN_TO_PARENT`, `conversation_complete` |
| Did I find every authoring style, shorthand, alias, default, fallback? | pass | Section form, flow terminal, step exhausted, terminal step. Default message. One-line `SET` only. Block `SET` trap (W360) |
| Did I separate optional helpers from required config? | pass | `RESPOND`, `SET`, `STORE`, `TERMINAL`, `MODEL_CONTEXT` are optional. `WHEN` is required |
| Did I explain how the reasoning layer uses free-form guidance? | pass | `WHEN` is deterministic only. The model does not decide completion, except the child finish action |
| Did I avoid making one pattern sound like the only one? | pass | Section conditions, flow terminals, and the child finish action are all listed |
| Could a customer build the scenario another supported way? | pass | Workflow node completion and the explicit complete step are scoped out with reasons |
| What evidence for "are you not considering all scenarios"? | pass | Variant map above and the list of checkpoint sources in `checkCompletionConditions` callers |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Role table matches `tryThreadReturn` and `isCompletedSessionReturn`. Constraint gate and loop guard are covered. Trace names match code | None. Runtime was not started |
| Senior content writer | ready | Answer first. Role table before ABL. Short sentences. One topic per section | Long for a one-page target. Template sections drive the length |
| Product manager/customer enablement | ready | Production checklist covers children that never return and sessions that never end. Troubleshooting is by symptom | None |

## Doc bugs and discrepancies for human review

| Item | Detail |
| ---- | ------ |
| Reference `SET` block under `COMPLETE` | `multi-agent-and-supervisor.mdx` lines 1329-1331 show `SET:` with an indented `feedback_requested: "false"`. The line parser ignores it and warns W360 (probe `r1.abl`). The `TERMINAL: false` example then loops until the loop guard closes the session. The one-line form `SET: name = value` works |
| Reference note on a quoted `WHEN` | Compiles as documented. No discrepancy |
| `handoff_completed` | It is emitted per handoff attempt. It does not mark a child `COMPLETE`. Do not use it as a completion signal. Other drafts may assume it does |
| Post-turn completion replaces model text | In reasoning mode a matching `COMPLETE` replaces the model reply for that turn. If the condition has no `RESPOND`, the default message replaces the model text. The reference does not say this |
| `ON_ERROR` `THEN: COMPLETE` | Ends the agent for flow `GATHER` validation failures only. The reasoning-mode handler shows text and does not complete. The reference lists `complete` as a general handler action |
| Entry step `RESPOND` then `THEN: COMPLETE` | The step completes the agent in the same turn (test matrix). Published how-tos warn about it. The warning is accurate |

## Uncertainty

- Runtime was not started. Behavior rests on source and existing tests.
- When a flow step has both its own `RESPOND` and a matching `COMPLETE` condition with `RESPOND`, the article tells authors to keep the text in one place. The exact delivery order of both texts was not run.
- The `ON_ERROR` `THEN: COMPLETE` rule covers one verified case.
