# Evidence: run-auth-profile-lookup-on-start

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/run-auth-profile-lookup-on-start.md`
**Published copy:** `agent-platform/abl/how-to/run-auth-profile-lookup-on-start.mdx`
**Topic:** 2.4 - How to run an authentication or profile lookup during welcome
**Workflow:** Refresh against `release_Artemis_1.9.0` (HEAD `9b7b268cc61`). Previous refresh: 2026-10-20 (`hotfix_Artemis_1.8.1`).
**Code repo:** `/Users/Prabhat.Singh/Documents/GitHub/artimus-bitbucket-src/abl-platform` (read only).
**Verdict:** no-change
**Validation harness:** scratchpad `harness/validate.mjs` (`validateABL`), `harness/cond3.mjs`. Scratch files in `scratchpad/t24/`.

Note on the diff base: `release_Artemis_1.9.0` does not descend from `hotfix_Artemis_1.8.1` (merge base `15eeb40ef77`). The diff only located files. Every claim below was re-read in the 1.9.0 source.

## Source files inspected (1.9.0)

| File | What was verified |
| ---- | ----------------- |
| `apps/runtime/src/services/execution/flow-step-executor.ts` `executeOnStart` (14628) | Order: `SET`, guarded `CALL`, language directives, branch selection and language preparation, welcome `RESPOND`, branch `DO:` list, `DELEGATE`. The welcome renders with `audience: customer_visible`. Top-level `CALL` binds before branch conditions. |
| `flow-step-executor.ts` `runOnStartList` (14507) | Branch `DO:` list runs after the welcome through the action-list handler. A failed list `CALL` sets `stopReason` and stops the list. The welcome is already delivered. |
| `flow-step-executor.ts` `selectOnStartResponseConfig` (1338) | Branch conditions evaluate against `session.data.values` after the `CALL`. Trace: `dsl_on_start_branch`. |
| `flow-step-executor.ts` `executeConfiguredToolInvocation` trace source (13110) | `dsl_call` carries `source: on_start_with` for the named `WITH` form. |
| `flow-step-executor.ts` `resolveLifecycleToolResultAssistantMessage` (3294) | A string `content` field becomes the welcome only when no `RESPOND` text renders. `__error` results never qualify. |
| `flow-step-executor.ts` `shouldEmitOnStartProactivePayload` (3276), `apps/runtime/src/channels/channel-behavior-contract.ts` | `slack`, `whatsapp`, `msteams`, `email` are `channel_native`. `api`, `http`, `workflow`, `ai4w`, `kore_agent_assist` are `none`. Welcome is dropped on those and `dsl_on_start_skipped` is emitted. `SET` and `CALL` still run. No diff since 1.8.1. |
| `apps/runtime/src/services/runtime-executor.ts` 10300-10345 | A branch-selected welcome (`responseSource: on_start_branch`) with renderable output returns as the startup turn. In a FLOW agent the entry step does not run at start. A top-level welcome is a prelude and the entry step still runs. |
| `apps/runtime/src/services/runtime-executor.ts` 8892-8955 | `session` namespace: caller data, then `CallerContext` fields (`customerId`, `identityTier`, `verificationMethod`, `contactDisplayName`), then platform fields. Flat caller keys are also written. |
| `packages/shared-auth/src/types/index.ts` `CallerContext` | `identityTier` and `verificationMethod` are required fields. 1.9.0 diff adds only `mcp_oauth` auth type and MCP fields on `TenantContextData`. |
| `apps/runtime/src/contexts/identity/**`, `packages/shared-auth/src/middleware/session-ownership.ts` | No diff since 1.8.1. Tier values: 2 for hmac, oauth, email_link, otp. 1 for webhook and provider. 0 for none. |
| `apps/runtime/src/services/execution/lifecycle-call-condition.ts` | Guard fails closed. Comment-only change in 1.9.0. |
| `packages/compiler/src/platform/constructs/dual-evaluator.ts` | Fail-closed throws only for `expression_too_long` and a missing key in a CEL macro. `!= ""` on a missing key returns true. |
| `packages/core/src/parser/agent-based-parser.ts` 12066 | `hints.timeout = parseInt(value, 10)`. A quoted value gives `NaN`. `10s` gives 10. |
| `packages/compiler/src/platform/constructs/executors/tool-binding-executor.ts` 1424 | `hints.timeout` is enforced per tool. |
| `packages/compiler/src/platform/ir/on-start-diagnostics.ts` | `ON_START_BRANCH_DO_ACTIVATED` at line 131 (no diff). |
| Tests: `apps/runtime/src/__tests__/execution/on-start-handoff-runtime.test.ts` (line 537 "a failed list CALL stops the list before the handoff"), `lifecycle-call-when.test.ts` | Failed list `CALL` and guard behavior still covered. |
| Reference `agent-platform/abl/reference/lifecycle-and-hooks.mdx` | Secondary cross-check only. Conflicts listed below. |

## Drift analysis (1.8.1 to 1.9.0)

| Area | Change | Article impact |
| ---- | ------ | -------------- |
| `ON_START` execution order and welcome ownership | No behavioral change. | None. |
| `lifecycle-call-condition.ts` | Comment only. | None. |
| `CallerContext` and identity verifiers | No change to `identityTier` or `verificationMethod`. | None. |
| Channel behavior contract | No change. | None. |
| `ON_START` diagnostics, parser `W496`, `W380` to `W388` | No change found. | None. |
| `ON_START` handoff result type | 1.9.0 adds `executionFailureFallback` (ABLP-5739) to a not-executed handoff result. | None. Handoff is out of scope here (2.5). |
| `session-memory-population.ts` | Adds `SAFE_DETAILS_AS` as a population source. | None. |
| Evaluator | Large 1.9.0 changes. Re-ran guard checks. Results match 1.8.1. | None. |
| Hotfix-only behavior | `authored-secret-copy` and private-copy hardening (ABLP-6411) exist only in 1.8.1. The article describes none of it. | No 1.8.x backport claim found. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Top-level `CALL` with `WITH` and `AS` before the welcome | yes | `executeOnStart`; block 1 compiles clean | covered (minimal example) |
| `CALL ... WHEN` guard indented under `CALL` | yes | `shouldRunLifecycleCall`; harness `IS SET` checks | covered |
| Sibling `WHEN` ignored with `W496` | yes | harness `n2.abl` gives `W496` | covered (how it works, troubleshooting) |
| `BRANCHES` on the tool result to guard the welcome | yes | `selectOnStartResponseConfig` after `CALL` | covered |
| Missing or failed lookup renders empty text | yes | `template-engine.ts` `resolveMissingVariableMode` | covered |
| Identity gate on `session.identityTier` without a lookup | yes | harness: `identityTier == 2` false on missing field, true on 2 | covered (variation) |
| Branch `DO: - CALL` after the welcome | yes | `runOnStartList`; block 3 gives `ON_START_BRANCH_DO_ACTIVATED` | covered (variation) |
| Channel-supplied identifier via caller data | yes | `runtime-executor.ts` 8897-8900 | covered (variation, text) |
| Tool result `content` used as welcome when no response text | yes | `resolveLifecycleToolResultAssistantMessage` | covered (mistake, troubleshooting) |
| Tool failure or throw | yes | `executeOnStart` try/catch logs and continues; `AS` binds the error result | covered |
| Tool timeout through `hints.timeout` (ms) | yes | parser line 12066, executor line 1424 | covered |
| `CALL` tool hook (`on_result.do`) can end `ON_START` | yes | test at `on-start-handoff-runtime.test.ts` 286 | out of scope: advanced hook behavior |
| Welcome suppressed on `channel_native` and `none` channels | yes | `shouldEmitOnStartProactivePayload` | covered |
| Authentication itself inside `ON_START` | no | No `ON_START` construct performs authentication | covered (concept) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code read of `executeOnStart`, `runOnStartList`, start sequence. Guard and compile behavior executed in the harness. No end-to-end run (runtime dependencies are not installed in the harness). | covered | State in open questions. |
| Required companion resources identified | `get_account_profile` needs a project execution binding. Stated in the article. | covered | none |
| Referenced variables have sources | `session.customerId`, `session.identityTier` from caller context. `accountProfile` from `AS`. | covered | none |
| Fallback, failure, ambiguity behavior verified | `ELSE` branch, tool failure, anonymous session, suppressed channel | covered | none |
| Customer verification path defined | Three sessions with named trace events, all emitted in 1.9.0 code | covered | none |
| Production readiness checklist included | Present | covered | none |

## Example validation

Command: `cd /tmp && node .../scratchpad/harness/validate.mjs <block>.abl` on 1.9.0 sources. Blocks extracted by script to `scratchpad/t24/b1.abl` to `b3.abl`.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Account_Welcome_Agent` | full-document | parse + compile | pass | none | kept |
| Block 2 `Identity_Gate_Agent` | full-document | parse + compile | pass | none | kept |
| Block 3 `Verified_Welcome_Agent` | full-document | parse + compile | pass | `ON_START_BRANCH_DO_ACTIVATED` (intentional, informational, explained in the article) | kept |

The "Look up by a channel-supplied identifier" variation has no code block, so nothing to validate.

## Runtime semantics checks (1.9.0, `evaluateConditionDual` with `failClosedOnEvaluationError`)

| Check | Result |
| ----- | ------ |
| `session.member_id != ""` with empty `session` | true (unsafe guard) |
| `session.account_id != ""` with empty `session` | true (unsafe guard) |
| `session.customerId IS SET` missing, present | false, true |
| `session.identityTier == 2` with missing field, with 2 | false, true |
| `"user is signed in"` (quoted sentence, no operator) | true |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | Parser, `StartConfig`, `executeOnStart`, `runOnStartList`, start sequence, `on-start-handoff-runtime.test.ts`, reference. |
| Searched synonyms and neighboring constructs? | pass | `CALL`, `WITH`, `AS`, `WHEN`, `call_when`, `DO`, `on_result`, `session.customerId`, `identityTier`, `callerContext`, `callerData`, `proactiveDelivery`. |
| Every authoring style, alias, default, fallback? | pass | Top-level `CALL`, guarded `CALL`, branch `DO` `CALL`, tool-result `content` fallback. The inline `CALL: tool(arg)` form is not shown. The named `WITH` form is the documented path. |
| Optional versus required sections? | pass | `WHEN`, `BRANCHES`, `hints` are optional. |
| Free-form guidance? | n/a | Deterministic startup mechanics. |
| Preferred pattern presented as the only one? | pass | Three variations. |
| Another supported way not mentioned? | pass | Tool `on_result` mappings and hooks scoped out. |
| Lesson: quoted timeout | pass | Mistake row covers `"10s"` and `10s`. |
| Trace names emitted in 1.9.0 | pass | `dsl_lifecycle_call_condition`, `dsl_call` (`on_start_with`), `tool_call_start`, `tool_result`, `dsl_on_start_branch`, `dsl_respond`, `dsl_on_start_skipped`. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Guard uses `IS SET`. Run order explicit and matches 1.9.0. Failure and anonymous paths covered. | None. |
| Senior content writer | ready | Concept first, short sentences, tables, no dashes. | None. |
| Product manager/customer enablement | ready | Three verification sessions. Clear production checklist. Channel suppression explained. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 5 | Re-read every claim in 1.9.0. No text change needed. | 5 |
| Depth of conceptual explanation | 5 | None. | 5 |
| Readability and usability | 5 | None. | 5 |
| Coverage of examples | 5 | All three blocks re-validated on 1.9.0. | 5 |
| Search and discovery quality | 4 | None. | 4 |
| Completeness of workflow and failure modes | 5 | None. | 5 |
| Customer/partner self-service readiness | 4 | None. | 4 |
| Scenario comprehensiveness | 4 | None. | 4 |
| Article completeness | 5 | None. | 5 |

**Gate result:** pass. Minimum score 4.

## Doc discrepancies for human review

| Item | Detail |
| ---- | ------ |
| Draft versus published `.mdx` | The `.mdx` has frontmatter (`title`, `sidebarTitle`), a "Back to how-to guides" badge, and `yaml` fences (two with `expandable=true`) instead of `abl` fences. The `.mdx` has no "Related HowTos" section. The body text is otherwise identical. |
| Related HowTos style | The draft lists related items as plain text. The 2.3 draft uses `.md` links. Decide one style. |
| Reference versus code | `lifecycle-and-hooks.mdx` line 196 says an undeclared `ON_START` handoff target is a compile error. Code emits `ON_START_HANDOFF_TARGET_INVALID` as a warning. |
| Reference versus code | `lifecycle-and-hooks.mdx` lines 88 and 93 use `WHEN: ani_national != ""` and `WHEN: member_id != ""`. These guards do not skip the call when the value is missing. Use `IS SET`. |
| Reference gap | The `ON_START` properties table omits `HANDOFF`, `DO`, `SET_INTERACTION_LANGUAGE`, and `CLEAR_INTERACTION_LANGUAGE`. |
| Cross-article | Articles 2.1, 2.2, 2.7, and 2.8 were not part of this task. They may use `!= ""` guards or end the entry flow at the first step. Review them. |

## Open questions

- Confirm customer-facing names for caller data (SDK `callerData` or custom attributes) and which key names channels send.
- Confirm that `session.identityTier` and `session.verificationMethod` are populated on rehydrated sessions. Code reading shows they come from caller context at session creation.
- The identity tier meaning comes from verifier code, not a customer-facing contract.
- No end-to-end runtime run was possible. Runtime claims rely on code reading and repository tests.
