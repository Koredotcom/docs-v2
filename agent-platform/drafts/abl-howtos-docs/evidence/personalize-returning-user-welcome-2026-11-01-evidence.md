# Evidence: personalize-returning-user-welcome

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/personalize-returning-user-welcome.md`
**Published copy:** `agent-platform/abl/how-to/personalize-returning-user-welcome.mdx`
**Topic:** 2.3 - How to personalize a welcome message for returning users
**Workflow:** Refresh against `release_Artemis_1.9.0` (HEAD `9b7b268cc61`). Previous refresh: 2026-10-20 (`hotfix_Artemis_1.8.1`).
**Code repo:** `/Users/Prabhat.Singh/Documents/GitHub/artimus-bitbucket-src/abl-platform` (read only).
**Verdict:** no-change
**Validation harness:** scratchpad `harness/validate.mjs` (`validateABL`), plus `harness/cond3.mjs` (`evaluateConditionDual` with `failClosedOnEvaluationError`). Scratch files in `scratchpad/t23/`.

Note on the diff base: `release_Artemis_1.9.0` does not descend from `hotfix_Artemis_1.8.1` (merge base `15eeb40ef77`). The diff only located files. Every claim below was re-read in the 1.9.0 source.

## Source files inspected (1.9.0)

| File | What was verified |
| ---- | ----------------- |
| `apps/runtime/src/services/execution/flow-step-executor.ts` `executeOnStart` (14628) | Order: `SET`, guarded `CALL`, language directives, branch selection, `RESPOND`, branch `DO:` list, `DELEGATE`. `CALL` runs through `executeConfiguredToolInvocation` with `useGuardrails: false`, then `bindToolInvocationResult`. A thrown error is logged and `ON_START` continues. |
| `flow-step-executor.ts` `selectOnStartResponseConfig` (1338) | First branch whose condition holds wins. Emits `dsl_on_start_branch` with `matched: true` and `branchIndex`, or `matched: false` when none holds. A throwing condition emits `dsl_on_start_branch_error` and the next branch is tried. Same as 1.8.1. |
| `flow-step-executor.ts` `renderOnStartResponse` (1535), `renderOnStartWelcomeText` (1568) | Render with `audience: customer_visible`. `packages/shared/src/prompts/template-engine.ts` `resolveMissingVariableMode` returns `empty` for that audience, so a missing placeholder renders as empty text. |
| `flow-step-executor.ts` `resolveLifecycleToolResultAssistantMessage` (3294) | Without an authored response, a non-empty string `content` becomes the welcome. An `__error` result never qualifies. Trace: `dsl_respond` with `source: on_start_tool_result`. |
| `flow-step-executor.ts` `shouldEmitOnStartProactivePayload` (3276), `apps/runtime/src/channels/channel-behavior-contract.ts` | `on_start` and `on_start_and_async_updates` deliver the welcome. `channel_native`, `none`, and `async_updates` do not. `dsl_on_start_skipped` records the skip. Unchanged since 1.8.1. |
| `flow-step-executor.ts` `protectAuthoredAssistantText` (3168) | Welcome text passes through `protectSessionOutputForUser`. Delivery text and history text can differ. |
| `apps/runtime/src/services/execution/lifecycle-call-condition.ts` | `call_when` gates only the tool call. Fails closed when the guard is not a string or cannot be evaluated. Emits `dsl_lifecycle_call_condition`. 1.9.0 adds only a comment about a private session capability. |
| `packages/compiler/src/platform/constructs/dual-evaluator.ts` `failsClosed`, `evaluateConditionDual` | With `failClosedOnEvaluationError`, only `expression_too_long` and a missing key inside a CEL macro (`has`, `exists`) throw. A plain `!= ""` on a missing key falls back to the legacy evaluator and returns true. |
| `apps/runtime/src/services/pipeline/null-safe-eval.ts` `enrichContextForDottedPathState` | A flat dotted key such as `user.first_name` is mirrored into the nested `user` object before evaluation. This answers the open question from 2026-10-20 by code reading. |
| `apps/runtime/src/services/runtime-executor.ts` 8877-8950 | `callerData` is filtered with `guardReservedKeys`, then spread into `session`. `CallerContext` fields spread next. Platform fields (`channel`, `sessionId`, `userId`, `tenantId`, `projectId`) win. `applyRuntimePersonalizationContext` also writes flat keys and a nested `user.*` mirror. |
| `apps/runtime/src/services/execution/personalization-context.ts` | Reserved roots include `session`, `tenant_id`, `user_id`, `session_id`, `project_id`. 1.9.0 adds `_runtime`, `_config_secret_keys`, and a config source marker. None affects the article. |
| `apps/runtime/src/services/runtime-executor.ts` 10156, 10300 | `initializeAllMemory` (runs `session:start` recall) runs before `executeOnStart`. A matched branch welcome (`responseSource: on_start_branch`) owns the startup turn. |
| `apps/runtime/src/services/execution/memory-integration.ts` `initializeAllMemory` (435), `executeRecallForEvents` (1302) | `memory_recall` lists `acceptedKeys` only. `memory_recall_result` at verbose level lists `factsRejected`. Needs `session.factStore` and a user ID. |
| `apps/runtime/src/services/execution/memory-executor.ts` `inject_context` | Injects only found facts. |
| `packages/core/src/parser/agent-based-parser.ts` | `W496` for a sibling `WHEN`. `hints.timeout` read with `parseInt`. |
| Tests | `apps/runtime/src/__tests__/lifecycle-call-when.test.ts` (new 1.9.0 case covers held `config` and `env` reads in a lifecycle guard). |

## Drift analysis (1.8.1 to 1.9.0)

| Area | Change | Article impact |
| ---- | ------ | -------------- |
| `executeOnStart`, branch selection, welcome render | No behavioral change. Line numbers moved. | None. |
| `lifecycle-call-condition.ts` | Comment only. | None. |
| `personalization-context.ts` | Three new reserved root keys (`_runtime`, `_config_secret_keys`, config source marker). | None. The article names `session` and `tenant_id` as examples only. |
| Lifecycle guard reads of `config.*` and `env.*` | 1.9.0 test shows a guard can read held config and env values. Source comment cites ABLP-4499. | None. Out of scope for personalization. Not added. |
| Evaluator (`dual-evaluator`, `cel-evaluator`, `null-safe-eval`) | Large 1.9.0 changes (long conditions, quote handling). Re-ran the guard checks. Results match 1.8.1. | None. |
| Channel behavior contract | No diff. | None. |
| Hotfix-only behavior | `authored-secret-copy` and private-copy hardening (ABLP-6411) exist only in 1.8.1. The article describes none of it. | No 1.8.x backport claim found in the article. |

Flagged for the 1.8.x branch only: the article contains no behavior that needs a 1.8.x-only hotfix.

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Startup `CALL` with `WITH` and `AS`, branch on the result | yes | `executeOnStart`; validate-clean block 1 | covered |
| `CALL` `WHEN` guard on `IS SET` | yes | `lifecycle-call-condition.ts`; harness `IS SET` false on empty session, true with value | covered |
| Lookup failure falls back to generic welcome | yes | `bindToolInvocationResult` binds the error result; `profile.first_name IS SET` false for `{__error}` | covered |
| Missing placeholder renders empty | yes | `template-engine.ts` `resolveMissingVariableMode` | covered |
| `!= ""` is not a missing-value guard | yes | harness: `true` on empty `session`, also with fail-closed option | covered |
| Host app data as `session.<key>` | yes | `runtime-executor.ts` 8877-8918 | covered |
| Host app data as bare `<key>` or `user.<key>` | yes | `applyRuntimePersonalizationContext` flat and `user.*` keys | out of scope: the article teaches `session.<key>` only. The 2.4 article names the bare form. |
| Persistent memory recall at `session:start` | yes | `initializeAllMemory`; block 3 compiles clean | covered |
| Tool `content` as welcome text | yes | `resolveLifecycleToolResultAssistantMessage` | covered |
| `DELEGATE` or handoff on start for returning users | yes | `executeOnStart` | out of scope: 2.5 |
| Authentication before personalization | yes | topic 2.4 | out of scope: 2.4, linked |
| Personal data protection of welcome text | yes | `protectAuthoredAssistantText` | covered in one sentence |
| Welcome suppressed on `channel_native` and `none` channels | yes | `shouldEmitOnStartProactivePayload`; `dsl_on_start_skipped` | covered (concept paragraph, troubleshooting, verification step 7) |
| Branch condition that throws | yes | `dsl_on_start_branch_error`, next branch tried | gap accepted: edge case. The `ELSE` branch still catches it. |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code read of `executeOnStart`, branch selection, render. Guard behavior executed in the harness. No end-to-end runtime run (runtime dependencies such as `piscina` are not installed in the harness). | covered | State in open questions. |
| Required companion resources identified | `lookup_profile` binding, `member_id` from host app, stored `user.first_name` | covered, marked as project-local assumptions | none |
| Referenced variables have sources | `profile` from `AS`; `session.member_id` and `session.plan_tier` from host app; `user.first_name` from recall; `content` from tool | covered | none |
| Fallback, failure, ambiguity behavior verified | Missing value, failed lookup, guard skip, `ELSE` branch | covered | none |
| Customer verification path defined | Seven steps with trace names, all emitted in 1.9.0 code | covered | none |
| Production readiness checklist included | Present | covered | none |

## Example validation

Command: `cd /tmp && node .../scratchpad/harness/validate.mjs <block>.abl` on 1.9.0 sources. Blocks extracted by script to `scratchpad/t23/b1.abl` to `b4.abl`.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Returning_User_Welcome_Agent` | full-document | parse + compile | pass | none | kept |
| Block 2 `Caller_Data_Welcome_Agent` | full-document | parse + compile | pass | none | kept |
| Block 3 `Memory_Welcome_Agent` | full-document | parse + compile | pass | none | kept |
| Block 4 `Tool_Welcome_Agent` | full-document | parse + compile | pass | none | kept |
| Negative: `WITH` and `AS` beside `CALL` (`n1.abl`) | negative control | parse + compile | `E203` x2, `W496` | expected | cited in mistakes |
| Negative: `WHEN` beside `CALL` (`n2.abl`) | negative control | parse + compile | `W496` | expected | cited in mistakes and troubleshooting |

Condition checks (`evaluateConditionDual`, 1.9.0): `session.member_id IS SET` is false for `{session:{}}` and true with a value. `session.member_id != ""` is true for an empty `session`, with and without the fail-closed option. `profile.first_name IS SET` is false for `{__error}` and true for `{first_name:"Ana"}`.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. `examples/ai4h-payer/agents/welcome_agent.agent.abl` also uses `ON_START`. |
| Searched synonyms and neighbors? | pass | `ON_START CALL`, `AS`, `call_when`, `callerData`, `customAttributes`, `inject_context`, `content`, `proactiveDelivery`, `renderOnStartWelcomeText`. |
| Every authoring style and fallback? | pass | Four sources in a decision table. |
| Optional versus required? | pass | Guard and fallback are recommended, not required. |
| Free-form guidance? | n/a | Deterministic startup mechanics. |
| Preferred pattern presented as the only one? | pass | Four sources. |
| Another supported way not mentioned? | pass | Handoff and delegate on start scoped to 2.5. Bare and `user.*` caller keys noted as out of scope. |
| Lesson: bare quoted natural-language condition | pass | The article uses no natural-language conditions. |
| Lesson: quoted timeout | n/a | No timeout in the article. |
| Settings compiled, not only parsed | pass | Compile-clean and IR fields read in 2026-10-20 evidence. No compiler change for `ON_START` in 1.9.0. |
| Trace names emitted in 1.9.0 | pass | `dsl_lifecycle_call_condition`, `dsl_on_start_branch`, `dsl_respond`, `dsl_on_start_skipped`, `memory_recall`, `tool_call_start` all found. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Failure path, guard, and memory ordering match 1.9.0. Sources of every variable are stated. Browser values flagged as unverified. | None. Memory variation is code-path verified only. |
| Senior content writer | ready | Decision table first. Short examples. Mistakes map to symptoms. No dashes. | None. |
| Product manager/customer enablement | ready | Three test cases: value present, value missing, lookup failure. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 5 | Re-read every claim in 1.9.0. No text change needed. | 5 |
| Depth of conceptual explanation | 5 | None. | 5 |
| Readability and usability | 5 | None. | 5 |
| Coverage of examples | 4 | All four blocks re-validated on 1.9.0. | 4 |
| Search and discovery quality | 5 | None. | 5 |
| Completeness of workflow and failure modes | 5 | None. | 5 |
| Customer/partner self-service readiness | 4 | None. | 4 |
| Scenario comprehensiveness | 4 | None. | 4 |
| Article completeness | 5 | None. | 5 |

**Gate result:** pass. Minimum score 4.

## Doc discrepancies for human review

| Item | Detail |
| ---- | ------ |
| Draft versus published `.mdx` | The `.mdx` has frontmatter (`title`, `sidebarTitle`), a "Back to how-to guides" badge, and `yaml` fences (two with `expandable=true`) instead of `abl` fences. The `.mdx` has no "Related HowTos" section. The body text is otherwise identical. |
| Related HowTos link style | The draft links use `.md` relative paths. The 2.4 draft lists related items as plain text. Decide one style. |
| Reference `lifecycle-and-hooks.mdx` | Lines 88 and 93 guard a `CALL` with `ani_national != ""` and `member_id != ""`. A missing value evaluates `!= ""` to true in 1.9.0, so the guard does not skip the call. Use `IS SET`. |
| Reference gap | The reference does not describe the tool `content` welcome fallback (`on_start_tool_result`). |
| Reference gap | The reference does not say that an unresolved `{{placeholder}}` in the welcome renders as empty text. |
| Reference versus code | `lifecycle-and-hooks.mdx` line 196 calls `ON_START_HANDOFF_TARGET_INVALID` a compile error. Code emits a warning. Not part of this article. |

## Open questions

- No end-to-end run was possible. `user.first_name IS SET` after recall relies on `enrichContextForDottedPathState` code reading.
- Confirm with engineering whether a failed startup `CALL` should emit a customer-filterable trace event. Today the runtime logs it and emits the tool error events.
