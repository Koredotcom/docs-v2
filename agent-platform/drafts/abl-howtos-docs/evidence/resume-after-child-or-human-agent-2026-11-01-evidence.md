# Evidence: resume-after-child-or-human-agent

**Date:** 2026-11-01
**Article draft:** `agent-platform/drafts/abl-howtos-docs/reviews/resume-after-child-or-human-agent-2026-11-01-draft.md`
**Topic:** 4.10 - How to resume after a child agent or human agent completes
**Workflow:** Article Creation Workflow, new topic, against `release_Artemis_1.9.0` (read-only)
**Verdict:** review_pending (all gates pass)

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseHandoff` ~8860-9100, `HANDOFF_ON_RETURN_KEYS` 1429, `parseDelegateConfig` 8603-8700, `parseOnHumanComplete` 9920) | `ON_RETURN` keys ACTION, HANDLER, RESUME_WITH, MAP, SET. HANDOFF `TIMEOUT` is stored as `asyncTimeout`. No `ON_TIMEOUT` for HANDOFF. DELEGATE reads `ON_FAILURE`, not `ON_FAIL`. |
| `packages/core/src/types/agent-based.ts` (1895-1960) | `HandoffOnReturnConfig`, `HandoffConfig` has no `timeout` or `onTimeout`. |
| `packages/compiler/src/platform/ir/compiler.ts` (3925-3950, 3956-3985, 1520) | Handoff lowering sets `asyncTimeout`, never `timeout` or `on_timeout`. `session_timeout_ms` from `session_idle_timeout`. |
| `packages/compiler/src/platform/ir/validate-ir.ts` (3885-3925), `validate-coordination-config.ts` | Reserved variable names rejected in `map` targets. `INVALID_HANDOFF_TIMEOUT_ACTION` exists for IR `on_timeout`. |
| `apps/runtime/src/services/execution/types.ts` (`tryThreadReturn` ~7000-7330) | Child thread `completed`. Parent `active`. Map branch vs copy-all-gathered-keys branch. Execution-tree memory return. History projection. `handoff_timeout` check at return time. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`handleReturnToParent` 23460-23560, `resolveHandoffOnReturnBehavior` 4067, `selectHandoffResumeIntentMessage` 5990, `applyHandoffOnReturnEffects` 6554, `shouldPreserveResolvedReturnValue` 6498, `MAX_RESUME_INTENT_DEPTH` 7177 and use 7591, `findCompletedPermanentHandoffParent` 1897, `handleDelegate` 20172-21110, `mapDelegateReturns` 28615, `handleDelegateFailure` 28876, `handleHandoffFailure` 29169, handoff timeout fields 12832 and 16440, `handoff_completed` emit 10057-10153) | Return mechanics. Replay depth. Allowlist and rejection rules. Delegate timeout, wait, and failure behavior. |
| `apps/runtime/src/services/execution/handoff-completion-record.ts` | `handoff_completed` outcomes: success, rejected, blocked, error, timeout. |
| `apps/runtime/src/services/execution/lifecycle-dispatcher.ts` (604-640) | Replay decision. Depth gate. |
| `apps/runtime/src/services/runtime-executor.ts` (`resolveReturnReplayBehavior` 726, `MAX_RESUME_INTENT_RETURN_BUBBLE_DEPTH` 527, flow return block 25080-25330, escalation pause check 21310-21370, transfer intercept 23760-24040, closeout 24312-24340, `clearEscalationStateForBotResume` 3531, `resolveEscalation` 32874) | Replay with no `ON_RETURN`. Four-level bubble limit for flow returns. Pause message. Forwarding to desk. Closeout. Inbox resolution. |
| `apps/runtime/src/services/execution/turn-exit-predicates.ts` | `isActiveTransferInterceptTurn` (needs `transferInitiated` and `isEscalated`). Closeout predicates. Escalated placeholder reply. |
| `apps/runtime/src/services/execution/types.ts` (361-375) | 5 minute closeout window. Closeout phrases. |
| `apps/runtime/src/services/agent-transfer/index.ts` (1080-1260), `post-agent-policy.ts`, `runtime-transfer-end.ts`, `provider-lifecycle.ts` | Agent disconnect handling. `return` resumes. Anything else completes the runtime session. Default `end`. Survey retention. ACW handling. |
| `apps/runtime/src/services/escalation/resolution-handler.ts`, `routes/sessions.ts` (8538-8640), `routes/human-tasks.ts` (1150-1230), `server.ts` (2525-2565) | Resolve API behavior and statuses. Inbox response clears the flag. |
| `apps/runtime/src/services/sla-checker.ts` | Task due handling. |
| `apps/runtime/src/services/execution/mongo-suspension-store.ts`, `routing-executor.ts` (23360-23420) | Pause record created with 7 day expiry when `on_human_complete` has entries. |
| `packages/agent-transfer/src/config/defaults.ts`, `session/types.ts` | Transfer record TTL defaults (two copies differ for email). |
| `packages/compiler/src/platform/constants.ts` | `__return_to_parent__` system tool. |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` | Allowed secondary source. Cross-checked. |
| Other agents' scratch files in `scratchpad/handoff-return/` | Read for working `ON_RETURN` syntax only. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| `EXPECT_RETURN: true` child completes (`COMPLETE`), parent resumes | yes | `tryThreadReturn` | covered |
| Child hands back before completing (`__return_to_parent__`), thread waits and stays resumable | yes | `handleReturnToParent` | covered |
| `RETURN` alias of `EXPECT_RETURN` | yes | parser keys | out of scope: owned by 4.5. Alias noted in reference. |
| No `ON_RETURN`: parent resumes, forwarded message routes as `resume_intent` | yes | `resolveReturnReplayBehavior` | covered |
| `ON_RETURN` string form (built-in action or handler name) | yes | `resolveHandoffOnReturnBehavior` | out of scope: owned by 4.5. Object form covered. |
| `action: continue` | yes | validators, `flowReturnShouldKeepParentOpen` | covered (variation) |
| `action: resume_intent` with `resume_with` (four values) | yes | `selectHandoffResumeIntentMessage` | covered (minimal example and table) |
| One replay per return, depth gates (1 reasoning, 4 flow bubble) | yes | `MAX_RESUME_INTENT_DEPTH`, `MAX_RESUME_INTENT_RETURN_BUBBLE_DEPTH`, trace `resume_intent_depth_limit` | covered |
| Sensitive forwarded utterance not forwarded | yes | `handleReturnToParent` (`isSensitiveResumeUtterance`) | covered |
| `map` is the allowlist; no `map` copies every gathered child key | yes | `tryThreadReturn` branches | covered |
| Empty returned value does not overwrite a resolved parent value | yes | `shouldPreserveResolvedReturnValue` | covered |
| Reserved or immutable system target rejects all return effects including `RESPOND` | yes | `applyHandoffOnReturnEffects` (`hasInvalidReturnEffectTarget`), `assertMutableSystemMemoryKey`, validate-ir reserved name check | covered |
| `set`, `clear`, `RETURN_HANDLERS` (`respond`, `resume_intent`) | yes | `resolveHandoffOnReturnBehavior`, `applyHandoffOnReturnEffects` | `set` covered. Named handlers out of scope: owned by 4.5. |
| Execution-tree memory returns automatically | yes | `tryThreadReturn` | covered |
| Child replies added to parent history | yes | `tryThreadReturn` | covered |
| `RETURN: false` child hands back to completed direct parent (1.9.0) | yes | `findCompletedPermanentHandoffParent` | covered (variation) |
| Delegate result mapping (`RETURNS`), `USE_RESULT` | yes | `mapDelegateReturns`, `handleDelegate` | `RETURNS` covered. `USE_RESULT` out of scope: owned by 4.7. |
| Delegate cannot wait for customer input | yes | `getUnsupportedDelegateWaitReason`, trace `delegate_wait_unsupported` | covered |
| Delegate declared `RETURNS` with no returned values fails | yes | `delegate_return_contract_unsatisfied` | covered |
| Delegate timeout and default | yes | `handleDelegate` (`delegateTimeoutMs` or `timeoutMs` or 30000) | covered |
| Delegate `ON_FAILURE` continue, respond, escalate (flag only); `ON_FAIL` ignored | yes | `handleDelegateFailure`, parser `case 'ON_FAILURE'` only, harness `t_onfail` compiles clean | covered |
| Delegate `retry` failure action | gap | Core type has `retry`. IR `on_failure` allows continue, escalate, respond only. Handler has no retry case. | not covered: unconfirmed |
| Returnable handoff timeout and `on_timeout` | gap, not authorable | Runtime and validator support IR `timeout` and `on_timeout`. Compiler never sets them. Parser maps `TIMEOUT` to `asyncTimeout`. | covered as "no timeout setting in ABL". Flag for review. |
| Async remote handoff wait limit (`ASYNC_TIMEOUT` or `TIMEOUT`) | yes | routing-executor 17805 | covered (timeouts table). Remote detail out of scope: remote A2A topics. |
| `handoff_completed` outcomes and fields | yes | `handoff-completion-record.ts` | covered (verification) |
| Human desk: `post_agent` return or end, default end | yes | `post-agent-policy.ts`, `index.ts` 1217, schema, project settings enum | covered |
| `post_agent: csat` | gap | `postAgentAction` type allows `csat` in `TransferPayload`. Routing IR and project settings accept return and end only. | not covered |
| Desk disconnect clears flags, resumes escalated thread, closeout window | yes | `applyTransferEndToRuntimeSession`, runtime-executor 24312 | covered |
| SmartAssist survey keeps the session open | yes | `shouldRetainRuntimeForWebhookSurvey` | covered |
| Wrap-up (ACW) after disconnect | yes | `index.ts` ACW handler, `completeAcwIfReady` | covered (one sentence) |
| Customer messages while at desk forwarded to person | yes | runtime-executor 23760 (`transfer_active`) | covered |
| Inbox task response clears escalated state, adds `[Human Agent <name>]: ...` | yes | `RuntimeExecutor.resolveEscalation`, `human-tasks.ts` 1196 | covered |
| Resolve API completes task and pause, returns action, does not run it | yes | `resolution-handler.ts`, `sessions.ts` 8541 | covered |
| `on_human_complete` conditions: only `decision ==`, `decision !=`, `always`, `*`; default `continue` | yes | `evaluateCondition`, `evaluateOnHumanComplete` | covered |
| Pause message for each customer message while the pause is active; 7 day expiry | yes | runtime-executor 21310-21370, routing-executor 23380 | covered |
| Task due after 24 hours, SLA chain, expiry; resolve of expired returns `ESCALATION_NOT_RESOLVABLE` | yes | routing-executor 21915, `sla-checker.ts`, `resolution-handler.ts` | covered |
| Escalated placeholder reply `[HUMAN AGENT] Message received` when no live transfer | yes | `buildEscalatedSessionMockResponse`, `isEscalatedMockReplyTurn` | covered (troubleshooting) |
| Voice call transfer and resume | gap | Voice escalation moves the call leg. Return behavior not traced. | not covered: voice topic |
| Child escalates while the parent waits | partial | Thread status `escalated`, reset to `active` on desk return. Parent path not traced. | covered by one sentence ("the agent that escalated resumes") |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `tryThreadReturn`, `applyHandoffOnReturnEffects`, `handleDelegate`, agent-transfer disconnect handler, resolve API read in source. | covered | Resolve API followed by a customer message not traced to a cleared flag. See uncertainty. |
| Required companion resources identified | Every parent has its child defined. The `check_refund_policy` tool and `support_desk` connection are stated as assumptions. | covered | None. |
| Referenced variables have sources | Map keys come from child `GATHER` fields or `SET`. Parent variables declared in `MEMORY`. | covered | None. |
| Fallback/failure/ambiguity behavior verified | Delegate wait, missing values, timeout, failure policies. Reserved target rejection. Expired task. Placeholder reply. | covered | Handoff timeout is not authorable. Reported. |
| Customer verification path defined | Ten verification steps with trace events. | covered | None. |
| Production readiness checklist included | Ten items. | covered | None. |

## Example validation

Harness: `hr/validate.mjs` through `v.sh`, run from `/tmp`. Scratch folder: `scratchpad/resume-after-return/`. Validated as one project per group.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1-3 (`Order_Support_Supervisor`, `Identity_Verification_Agent`, `Order_Status_Agent`) | full-document | `v.sh resume-after-return r_sup r_child r_order` | pass | none (first draft warned W801 and `MISSING_VARIABLE_PRODUCER_WARNING`. Removed `PASS` and the unsourced variable.) | kept |
| Blocks 4-5 (`Loan_Desk_Agent`, `Income_Capture_Agent`) | full-document | `r_cont r_income` | pass | none | kept |
| Blocks 6-7 (`Order_Desk_Agent`, `Refund_Checker_Agent`) | full-document | `d_parent d_child` | pass | none (first draft warned `MISSING_PARAM_DESCRIPTION` and `SIDE_EFFECT_TOOL_WITHOUT_CONFIRMATION`. Added tool attributes.) | kept |
| Block 8 (`Refund_Approval_Agent`, `post_agent: return`) | full-document | `h_return` | pass | none | kept |
| Block 9 (`Fraud_Desk_Agent`, `post_agent: end`) | full-document | `h_end` | pass | none | kept |
| Block 10 (`Claims_Review_Agent`, `on_human_complete`) | full-document | `h_complete` | pass | none | kept |
| Blocks 11-12 (`Account_Hub`, `Settings_Agent`) | full-document | `b_hub b_settings` | pass | none | kept |
| Negative: DELEGATE `ON_FAIL: escalate` | n/a | `t_onfail d_child` | compiles clean, line ignored | no diagnostic | confirms article statement |
| Negative: HANDOFF `TIMEOUT` and `ON_TIMEOUT` | n/a | `t_to r_income` | compiles, no diagnostic | none | supports "no timeout setting" |

Block text in the draft matches the validated scratch files (checked with a script).

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Dropped the reference claim that `on_human_complete` runs actions. Replaced `human.*` conditions with `decision`. | 5 |
| Depth of conceptual explanation | 4 | Four-path table before ABL. `map` allowlist rule explained. | 5 |
| Readability and usability | 4 | Tables for lookups. Sentences under 25 words. | 4 |
| Coverage of examples | 4 | Seven validated example groups. Two negative probes. | 5 |
| Search and discovery quality | 4 | Headings and symptoms use `post_agent`, `resume_intent`, `on_human_complete`, `map`, error codes. | 5 |
| Completeness of workflow and failure modes | 4 | Delegate wait, missing values, timeout. Expired task. Resolve statuses. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Assumptions stated. | 4 |
| Scenario comprehensiveness | 4 | Every `yes` row covered or scoped out with a reason. Gaps recorded. | 4 |
| Article completeness | 5 | All template sections. | 5 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, types, compiler, runtime, tests, and examples? | pass | See source list. Unit tests were not run. Behavior read from source and probed with the harness. |
| Did I search synonyms and neighboring constructs? | pass | Searched `ON_RETURN`, `on_return`, `return_to_parent`, `tryThreadReturn`, `resume_intent`, `RETURN_HANDLERS`, `DELEGATE`, `post_agent`, `on_human_complete`, `resolveEscalation`, `isEscalated`, `recentTransferEndedAt`. |
| Did I identify every authoring style, alias, default, fallback? | pass | `RETURN`/`EXPECT_RETURN`, string and object `ON_RETURN`, defaults for `resume_with`, `post_agent`, delegate timeout. |
| Did I separate optional helpers from required config? | pass | `ON_RETURN` is optional. `map` optional. |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Child hands back through its model. |
| Did I avoid one-pattern bias? | pass | Four return paths plus a one-way hand back. |
| Could a customer build this another way that the article misses? | fix-needed, then accepted | Named `RETURN_HANDLERS`. Owned by 4.5. Voice and delegate retry recorded as gaps. |
| Exact evidence if asked "are you not considering all scenarios"? | pass | Variant map above. |

**Coverage verdict:** pass (gaps recorded)

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Distinguishes the three human-completion paths. Calls out that the resolve API does not run the action. | None. |
| Senior content writer | ready | Concept first. Walkthrough after the minimal example. Tables carry the lookups. | None. |
| Product manager/customer enablement | ready | Production checklist names concrete settings. Troubleshooting covers likely searches. | None. |

## Doc bugs and discrepancies for human review

1. The reference and several examples write `on_human_complete` conditions as `human.resolved == true`. The resolve handler matches only `decision == "x"`, `decision != "x"`, `always`, and `*`.
2. The reference says `on_human_complete` actions (`COMPLETE`, `HANDOFF`, `RESPOND`) run. The handler returns the action string. No code in the runtime runs it.
3. The reference lists `ON_FAIL` for `DELEGATE`. The text parser reads only `ON_FAILURE`. `ON_FAIL` compiles with no diagnostic and is ignored.
4. The reference lists `retry` for delegate failure. The compiled failure action allows continue, escalate, respond only.
5. Runtime and validator support a returnable-handoff timeout (`timeout`, `on_timeout`, default action `escalate`). The compiler never sets these fields. `TIMEOUT` on a handoff becomes `asyncTimeout`. The reference note ("timeout path after an accepted returnable handoff") describes an unreachable path.
6. The runtime checks a handoff timeout only when the child returns, and `escalate` only sets the flag.
7. `post_agent: csat` exists in the transfer payload type. Routing and project settings accept `return` and `end` only.
8. Transfer record TTL defaults differ: email is 86400 in `session/types.ts` and 14400 in `config/defaults.ts`.
9. After the resolve API call, no code clears `isEscalated`. After the inbox response path, `resolveEscalation` clears it. Confirm the intended flow for the resolve API.
10. The task brief names `harness/validate.mjs`. The working harness is `hr/validate.mjs`.

## Uncertainty

- Behavior after the resolve API call when the session had no live transfer (item 9).
- Voice return behavior.
- Whether a child escalation returns control to the waiting parent.
