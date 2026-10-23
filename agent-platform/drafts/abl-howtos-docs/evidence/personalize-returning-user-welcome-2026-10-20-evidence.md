# Evidence: personalize-returning-user-welcome

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/personalize-returning-user-welcome.md`
**Topic:** 2.3 - How to personalize a welcome message for returning users
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. Previous refresh: 2026-08-21 (`hotfix_Artemis_1.4.4`).
**Code repo:** `/Users/Prabhat.Singh/Documents/GitHub/artimus-bitbucket-src/abl-platform` (read only).
**Validation harness:** scratchpad `.../scratchpad/h2/` (`entry.ts` for `validateABL`, `ir.ts`, `cond.ts`).

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/flow-step-executor.ts` `executeOnStart` (13652-14000) | `CALL` runs through `executeConfiguredToolInvocation` with `useGuardrails: false`, then `bindToolInvocationResult`. A thrown error is logged and `ON_START` continues. A hook or constraint result ends `ON_START` with that result. |
| `flow-step-executor.ts` `bindToolInvocationResult` (13171-13310) | Binds the result to the `AS` key even when the result is an error object. |
| `flow-step-executor.ts` `renderOnStartResponse` (1426), `renderOnStartWelcomeText` (1450-1480) | Unresolved `{{placeholder}}` renders as an empty string for customer-visible text. The code comment states this and explains why. |
| `flow-step-executor.ts` `resolveLifecycleToolResultAssistantMessage` (3099) | Without an authored response, a non-empty string `content` in the `CALL` result becomes the welcome (`dsl_respond`, `source: on_start_tool_result`). An `__error` result never qualifies. |
| `apps/runtime/src/services/execution/lifecycle-call-condition.ts` | `call_when` guard gates only the tool call. Fails closed. Emits `dsl_lifecycle_call_condition`. |
| `apps/runtime/src/services/runtime-executor.ts` 8244-8312 | Caller data from the host app is filtered and spread into the `session` namespace, and into flat session values. Reserved keys (`session`, `tenant_id`, `user_id`, and others) are skipped. |
| `apps/runtime/src/services/execution/personalization-context.ts` | `RESERVED_PERSONALIZATION_ROOT_KEYS`, `applyRuntimePersonalizationContext`. Keys starting with `user.` also materialize under `user`. |
| `apps/runtime/src/websocket/sdk-handler.ts` 5745-6051 | Web SDK passes `userContext.customAttributes` as `callerData`. |
| `apps/runtime/src/services/execution/memory-integration.ts` `initializeAllMemory` (435), `executeRecallForEvents` (1302) | `session:start` recall runs before `ON_START`. Injects values, emits `memory_recall` with `injectedKeys`. Needs `session.factStore` and a user ID. |
| `apps/runtime/src/services/execution/memory-executor.ts` 100-160 | `inject_context` reads each path from the fact store and injects only found facts. |
| `flow-step-executor.ts` `protectAuthoredAssistantText` (2973) | Welcome text passes through `protectSessionOutputForUser`. Delivery text and history text can differ. |
| `packages/core/src/parser/call-with-block.ts` | New in 1.8. Nested `WITH:` blocks keep structure. Scalar leaves stay raw text. |
| `packages/compiler/src/platform/ir/validate-ir.ts` | Warns `MISSING_PARAM_DESCRIPTION`, `SIDE_EFFECT_TOOL_WITHOUT_CONFIRMATION`, `MISSING_VARIABLE_PRODUCER_WARNING`. |
| Tests: `lifecycle-call-when.test.ts` | Guarded `ON_START` lookup runs only for a real value. |

## Drift analysis (1.4.4 to 1.8.1)

| Area | Change | Article impact |
| ---- | ------ | -------------- |
| `CALL` `WHEN` guard | New. Fails closed, traced. | Used in the minimal example. New mistake and troubleshooting rows. |
| Nested `WITH:` blocks | New collector keeps nesting. | No example change. Scalars behave as before. |
| `ON_START` branches with `AS` values | Unchanged grammar. Branch `IF` can read `AS` results. | Used for the fallback branch. |
| Tool result `content` as welcome | Present in 1.4.4 and 1.8.1. The 2026-08-21 article declared `content` but never explained it. | New variation. |
| Startup output and welcome provenance | New `startup-output.ts`. | Evidence only. |
| Eager and lazy start, channel suppression | Present in 1.4.4 (`dsl_on_start_skipped`, lazy suppression). The old articles never explained them. | One paragraph in Concept. Details in 2.1. |
| Source of `session.member_id` | The 2026-08-21 article called it channel metadata. Code shows it comes from host app caller data. | Concept table and minimal example now state the source. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Startup `CALL` with `WITH` and `AS`, branch on result | yes | `executeOnStart`; IR dump of `ex/v2.abl` | covered |
| `CALL` `WHEN` guard on `IS SET` | yes | `lifecycle-call-condition.ts`; IR `call_when` | covered |
| Lookup failure falls back to generic welcome | yes | `bindToolInvocationResult` binds the error result; `first_name IS SET` is false (harness) | covered |
| Missing placeholder renders empty | yes | code comment at `renderOnStartWelcomeText` | covered |
| `!= ""` is not a missing-value guard | yes | harness: `session.member_id != ""` on empty context returns true | covered |
| Host app data as `session.<key>` | yes | `runtime-executor.ts` 8264-8290; harness condition checks | covered |
| Persistent memory recall at `session:start` | yes | `initializeAllMemory`; `ex/v10.abl` compiles clean | covered |
| Tool `content` as welcome text | yes | `resolveLifecycleToolResultAssistantMessage` | covered |
| Startup `SET` of a constant as "segment" | yes | published example | removed: a constant does not personalize. Replaced by host app data. |
| `DELEGATE` or handoff on start for returning users | yes | `executeOnStart` | out of scope: 2.5 |
| Authentication before personalization | yes | `run-auth-profile-lookup-on-start` | out of scope: 2.4. Linked. |
| PII protection of welcome text | yes | `protectAuthoredAssistantText` | covered in one sentence |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code read. No end-to-end run. | covered | Tool binding to a backend is a project assumption. |
| Required companion resources identified | `lookup_profile` binding; `member_id` from host app; stored `user.first_name` for memory | covered, marked as project-local assumptions | none |
| Referenced variables have sources | `profile` from `AS`; `session.member_id` and `session.plan_tier` from host app; `user.first_name` from recall; `content` from tool | covered | none |
| Fallback, failure, ambiguity behavior verified | Missing value, failed lookup, guard skip | covered | none |
| Customer verification path defined | Seven steps with trace names | covered | none |
| Production readiness checklist included | Present | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Published block 1 (Returning_User_Welcome_Agent) | full-document | parse + compile | pass | none | replaced: the entry step used `RESPOND` then `THEN: COMPLETE`; no fallback for a failed lookup; no guard for a missing ID |
| Published block 2 (Segment_Welcome_Agent) | full-document | parse + compile | pass | none | removed: hard-coded constant, no real source |
| New block 1 (Returning_User_Welcome_Agent) | full-document | parse + compile, IR dump | pass | none | kept |
| New block 2 (Caller_Data_Welcome_Agent) | full-document | parse + compile | pass | none | kept. First draft used bare `plan_tier` and warned `MISSING_VARIABLE_PRODUCER_WARNING`. Changed to `session.plan_tier`, which compiles clean. |
| New block 3 (Memory_Welcome_Agent) | full-document | parse + compile | pass | none | kept |
| New block 4 (Tool_Welcome_Agent) | full-document | parse + compile | pass | none | kept |
| Negative checks | n/a | harness | `E203` for `WITH` or `AS` beside `CALL`; `W496` for `WHEN` beside `CALL` | n/a | cited in mistakes and troubleshooting |

Condition checks (`evaluateConditionDual`): `profile.first_name IS SET` is false for an error object and true for `{first_name: "Ana"}`. `session.plan_tier IS SET` is false for an empty session namespace. `session.member_id != ""` on an empty context returns true.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighbors? | pass | `ON_START CALL`, `AS`, `call_when`, `callerData`, `customAttributes`, `inject_context`, `content`. |
| Every authoring style and fallback? | pass | Four sources shown. |
| Optional versus required? | pass | Guard and fallback shown as recommended, not required. |
| Free-form guidance? | n/a | |
| Preferred pattern presented as the only one? | pass | Four sources in a decision table. |
| Another supported way not mentioned? | pass | Handoff and delegate on start are scoped out to 2.5. |
| Lesson 1: bare quoted natural-language condition | pass | No natural-language conditions. |
| Lesson 2: channel value path | n/a | No channel reads. |
| Lesson 3: quoted `TIMEOUT` | n/a | No timeouts declared. A tool timeout is project configuration. |
| Lesson 4: HANDOFF history default | n/a | |
| Lesson 5: ESCALATE | n/a | |
| Lesson 6: settings compiled | pass | IR dump shows `call_spec.with`, `call_spec.as`, `call_when`, `branches`. |
| Lesson 7: trace names emitted | pass | `dsl_lifecycle_call_condition` (`lifecycle-call-condition.ts`), `dsl_on_start_branch`, `dsl_respond` with `on_start_tool_result`, `memory_recall` (`memory-integration.ts` 1371), `tool_call_start` (registry). |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Failure path and guard match code. Sources of every variable are stated. Browser values are flagged as unverified. | None. Memory variation is code-path verified only. |
| Senior content writer | ready | Decision table first. Short examples. Mistakes map to symptoms. | None. |
| Product manager/customer enablement | ready | Partners get three test cases: value present, missing, lookup failure. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Sources traced to `runtime-executor.ts` and `memory-integration.ts`; harness checks | 5 |
| Depth of conceptual explanation | 3 | Source decision table; empty-placeholder rule | 5 |
| Readability and usability | 4 | Tables and numbered verification | 5 |
| Coverage of examples | 3 | Replaced session-ending example; added three sources | 4 |
| Search and discovery quality | 4 | Symptoms and trace names | 5 |
| Completeness of workflow and failure modes | 3 | Guard, failed lookup, missing value | 5 |
| Customer/partner self-service readiness | 3 | Companion resources and sources stated | 4 |
| Scenario comprehensiveness | 3 | All `yes` rows covered or scoped out | 4 |
| Article completeness | 4 | Related HowTos added | 5 |

**Gate result:** pass. Minimum score 4.

## Doc discrepancies for human review

| Item | Detail |
| ---- | ------ |
| Published example flaw | Entry step ended the session. See the 2.1 evidence for the list of other affected articles. |
| Published claim corrected | "If the tool fails, the runtime logs the startup call error and continues" is accurate for a thrown error. Tool errors usually return an error result. The runtime binds that result to `AS`, so fields are unset. The article now describes the observable behavior. |
| Published claim corrected | The 2026-08-21 article implied `session.member_id` comes from "channel metadata". It comes from caller data that the host app sends when it creates the session. |
| Code versus reference | Reference `lifecycle-and-hooks.mdx` shows `ON_START` `CALL: check_returning_user()` with `{{user.name}}` and no source for `user.name`. The reference does not explain that an unresolved placeholder renders as empty text. |
| Reference gap | The reference does not describe the tool `content` welcome fallback (`on_start_tool_result`). |
| Reference note kept | The public reference warns that browser-asserted caller data is not verified. The article repeats the warning. |

## Open questions

- Confirm that `user.first_name IS SET` resolves after `inject_context` stores the key as a flat dotted path. `nullSafeEvaluateCondition` enriches flat dotted keys (`enrichContextForDottedPathState`), but no end-to-end run was possible.
- Confirm with engineering whether a failed `CALL` should emit a trace event that customers can filter on. Today the runtime logs the failure and emits the tool error events only.
