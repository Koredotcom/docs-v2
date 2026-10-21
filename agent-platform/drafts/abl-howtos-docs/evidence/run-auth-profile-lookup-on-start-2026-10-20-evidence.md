# Evidence: run-auth-profile-lookup-on-start

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/run-auth-profile-lookup-on-start.md`
**Topic:** 2.4 - How to run an authentication or profile lookup during welcome
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`, evidence dated 2026-08-21)
**Verdict:** update-needed

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseOnStart`, `parseOnStartBranches`, `parseOnStartBranchDoBlock`, `parseOnStartHandoff`) | ON_START grammar. Top-level `CALL` with nested `WITH`, `AS`, `WHEN`. Sibling `WHEN` ignored with `W496`. Branch `DO:` allows `SET`, `CALL`, `HANDOFF`, language directives only. |
| `packages/core/src/parser/on-start-do-block.ts`, `call-with-block.ts`, `interaction-language-value.ts` | New since 1.4.4. DO-list entry filter (`W380`-`W388`), nested `WITH` blocks (ABLP-4507), language value parsing. |
| `packages/compiler/src/platform/ir/compiler.ts` (`compileStartConfig`) | `call_when`, `call_spec.with/as`, `do`, language fields are compiled, not only parsed. |
| `packages/compiler/src/platform/ir/on-start-diagnostics.ts`, `session-memory-population.ts`, `validate-ir.ts` | `ON_START_*` diagnostics. `W801` population sources include ON_START SET and branch DO. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`executeOnStart`, `runOnStartList`, `bindToolInvocationResult`, `renderOnStartResponse`, `resolveLifecycleToolResultAssistantMessage`) | Runtime order: SET, CALL (guarded), language, branch selection, RESPOND, branch DO list, DELEGATE. Welcome renders with `audience: customer_visible`. |
| `apps/runtime/src/services/execution/lifecycle-call-condition.ts` | New. `dsl_lifecycle_call_condition` trace. Guard fails closed on evaluation error. |
| `apps/runtime/src/services/runtime-executor.ts` (~8240-8300 `initialData`, ~9600-9680 start sequence) | `session` namespace content (`channel`, `sessionId`, caller context, caller data). Branch-selected welcome owns the startup turn. |
| `apps/runtime/src/channels/channel-behavior-contract.ts` | `proactiveDelivery` per channel. `channel_native` and `none` channels do not deliver the ON_START response. |
| `apps/runtime/src/contexts/identity/infrastructure/verifiers/*.ts`, `websocket/handler.ts:407-415`, `packages/shared-auth/src/middleware/session-ownership.ts` | `identityTier` values: 2 for hmac, oauth, email_link, otp. 1 for webhook and provider. 0 for none. |
| `packages/shared-auth/src/types/index.ts` (`CallerContext`) | Fields spread into `session.*`: `customerId`, `identityTier`, `verificationMethod`, `contactDisplayName`, and others. |
| `packages/compiler/src/platform/constructs/executors/tool-binding-executor.ts:1424`, `packages/core/src/parser/agent-based-parser.ts:11047` | `hints.timeout` is read with `parseInt`, compiled, and enforced per tool. |
| `apps/runtime/src/__tests__/execution/on-start-handoff-runtime.test.ts` | Failed list CALL stops the list. Channel without proactive delivery skips the welcome and keeps SET/CALL/list. Matched branch welcome owns start, FLOW entry waits. |
| Public reference `agent-platform/abl/reference/lifecycle-and-hooks.mdx` | Secondary cross-check only. Conflicts listed below. |

## Drift analysis (1.4.4 to 1.8.1)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| CALL guard | `call_when` and `dsl_lifecycle_call_condition` are new (`lifecycle-call-condition.ts`, `StartConfig.call_when`). | New variation. The article can skip the lookup for anonymous users. |
| Branch `DO:` list | New: `SET`, `CALL`, `HANDOFF`, language directives run after the welcome. A failed CALL stops the list. | New variation (prefetch). Explains why a list CALL cannot feed the welcome. |
| Handoff at start | New (ABLP-5578). Out of scope here. Covered in 2.5. | None. |
| ON_START DELEGATE | Now runs through the normal delegate path (ABLP-5153 D9). | None for this article. |
| Welcome ownership | Branch-selected welcome owns the startup turn. Top-level welcome is a prelude. | New "How it works" bullet. Old example used top-level RESPOND, so a missing field rendered blank. |
| Diagnostics | `W380`-`W388`, `W496`, `E380`, `E393`-`E395`, `ON_START_*`. | `W496` (sibling WHEN) added to troubleshooting. |
| `W801` | ON_START SET and branch DO CALL/SET count as population sources. | None. |
| Channel contract | Two entries now `none`, several `channel_native`. | Troubleshooting row for suppressed welcome. |
| Tool-result welcome fallback | Present. A string `content` result becomes the welcome when no response text renders. | New common mistake. The old minimal example returned `content`. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Top-level `CALL` with `WITH` and `AS` before the welcome | yes | `compileStartConfig`, `executeOnStart` (SET then CALL then branches) | covered (minimal example) |
| `CALL ... WHEN` guard, indented under CALL | yes | `call_when` in IR (harness dump), `shouldRunLifecycleCall` | covered |
| Sibling `WHEN` ignored with `W496` | yes | parser `case 'when'`, harness parse warning W496 | covered (how it works, troubleshooting) |
| `BRANCHES` on the tool result to guard the welcome | yes | `selectOnStartResponseConfig` evaluates against `session.data.values` after CALL | covered |
| Missing or failed lookup renders empty text in a top-level or branch RESPOND | yes | `interpolateTemplate` with `audience: customer_visible` returns `Hello . Your account is .` (harness) | covered |
| Identity gate on `session.identityTier` without a lookup | yes | harness cond tests, verifier tier assignments | covered (variation) |
| Branch `DO: - CALL` after the welcome | yes | `parseOnStartBranchDoBlock`, `runOnStartList`, test "a failed list CALL stops the list" | covered (variation) |
| Channel-supplied identifier via caller data (`session.<name>` and flat `<name>`) | yes | `initialData.session` spread, `applyRuntimePersonalizationContext` flat keys | covered (variation, text) |
| Tool result `content` field used as welcome when no response text | yes | `resolveLifecycleToolResultAssistantMessage`, `dsl_respond` source `on_start_tool_result` | covered (common mistake, troubleshooting) |
| Tool failure or throw | yes | `executeOnStart` try/catch logs and continues. `AS` binding writes the failed result. | covered |
| Tool timeout through `hints.timeout` (number of ms) | yes | IR dump: `hints.timeout: 5000`. Quoted `"10s"` is ignored. Unquoted `10s` parses to 10. | covered |
| ON_START `CALL` tool hook (`on_result.do`) can end ON_START | yes | test "a top-level CALL whose tool hook returns a result ends ON_START" | out of scope (advanced, other topic) |
| Welcome suppressed on `channel_native` and `none` channels, SET/CALL still run | yes | `shouldEmitOnStartProactivePayload`, `dsl_on_start_skipped` | covered (troubleshooting, checklist) |
| Authentication itself inside ON_START | no | Authentication is a channel concern. No ON_START construct performs it. | covered (concept) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code reading of `executeOnStart`, `bindToolInvocationResult`. Template and condition behavior executed in the harness. No end-to-end runtime run (runtime dependencies are not installed in the harness). | covered | State in open questions. |
| Required companion resources identified | Tool `get_account_profile` needs a project execution binding. The article says so. | covered | None. |
| Referenced variables have sources | `session.customerId`, `session.identityTier` from caller context. `accountProfile` from `AS`. | covered | None. |
| Fallback, failure, ambiguity behavior verified | ELSE branch, tool failure, anonymous session, suppressed channel. | covered | None. |
| Customer verification path defined | Three sessions with named trace events (`dsl_lifecycle_call_condition`, `dsl_call`, `tool_call_start`, `tool_result`, `dsl_on_start_branch`, `dsl_respond`). All emitted in code. | covered | None. |
| Production readiness checklist included | Present. | covered | None. |

## Example validation

Harness: esbuild bundle of `validateABL` from `packages/compiler/src/platform/ir/validate-ir.ts` and `@abl/core`, built in the scratchpad under `h24/`. The article blocks were extracted by script and validated with `node out24.mjs <files>`. Negative controls: a document with an unknown tool and an undeclared ON_START handoff target reports `UNDEFINED_TOOL_CALL` as an error and `ON_START_HANDOFF_TARGET_INVALID` as a warning.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Account_Welcome_Agent` | full-document | `validateABL` (parse + compile) | pass | none | new |
| Block 2 `Identity_Gate_Agent` | full-document | `validateABL` | pass | none | new |
| Block 3 `Verified_Welcome_Agent` | full-document | `validateABL` | pass | `ON_START_BRANCH_DO_ACTIVATED` (intentional, informational, explained in the article) | new |

The 2026-08-21 blocks (`Auth_Profile_Lookup_Start_Agent`, `Auth_Gated_Welcome_Agent`) also validated with zero errors and zero warnings, but they are replaced (see the review).

## Runtime semantics checks (harness, real runtime functions)

| Check | Result |
| ----- | ------ |
| `member_id != ""` with `member_id` missing | true (unsafe guard) |
| `session.account_id != ""` with empty `session` namespace | true (unsafe guard) |
| `session.customerId IS SET` missing, present | false, true |
| `session.identityTier == 2` with missing namespace field | false |
| `"user is signed in"` (quoted sentence, no operator) | true |
| `accountProfile.display_name IS SET` with `{}` and `{__error}` | false, false |
| `SET: x = session.channel` with `session.channel = web_chat` | `web_chat` |
| `channel.name`, `system.channel` in a SET context with `channel = web` | no value |
| Template `Hello {{p.display_name}}.` with `customer_visible` and `p` missing | `Hello .` |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | Parser, `StartConfig`, `compileStartConfig`, `executeOnStart`, `on-start-handoff-runtime.test.ts`, public reference. |
| Searched synonyms and neighboring constructs? | pass | `CALL`, `WITH`, `AS`, `WHEN`, `call_when`, `DO`, `on_result`, `lifecycle`, `session.customerId`, `identityTier`, `callerContext`, `callerData`. |
| Identified every authoring style, alias, default, fallback? | pass | Top-level CALL, guarded CALL, branch DO CALL, tool-result `content` fallback, inline `CALL: tool(arg)` form (not shown; named `WITH` form is the documented path). |
| Distinguished optional from required sections? | pass | `WHEN`, `BRANCHES`, `hints` are optional. |
| Explained how the reasoning layer uses free-form guidance? | n/a | Deterministic startup mechanics. |
| Avoided making a preferred pattern the only pattern? | pass | Three variations. |
| Could a customer build this another supported way? | pass | Tool `on_result` mappings and tool hooks can also act on the result. Marked out of scope. |
| Evidence if asked "are you not considering all scenarios?" | n/a | Scenario map above and the executed checks. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Guard uses `IS SET`. Order of operations is explicit. Failure and anonymous paths are tested. Silent blank-welcome failure is covered. | None. |
| Senior content writer | ready | Concept first, short sentences, tables for scanning, no dashes. | None. |
| Product manager/customer enablement | ready | Three verification sessions. Clear production checklist. Channel suppression is explained. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Replaced `session.account_id` assumption with platform identity fields. Verified guard, template and timeout behavior by execution. | 5 |
| Depth of conceptual explanation | 4 | Added identity table, runtime order, welcome ownership. | 5 |
| Readability and usability | 4 | Tables, numbered order, verification sessions. | 5 |
| Coverage of examples | 3 | Added identity gate and prefetch examples. Fixed blank-welcome example. | 5 |
| Search and discovery quality | 4 | Added troubleshooting for symptoms customers search. | 4 |
| Completeness of workflow and failure modes | 3 | Added failure, anonymous, suppressed channel, timeout. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Companion tool binding stated. | 4 |
| Scenario comprehensiveness | 3 | Added guarded CALL, branch DO CALL, tool-result fallback. | 4 |
| Article completeness | 4 | All template sections present. | 5 |

**Gate result:** pass (minimum 4)

## Doc discrepancies for human review

1. Public reference vs code: `lifecycle-and-hooks.mdx` says an undeclared ON_START handoff target "is a compile error (`ON_START_HANDOFF_TARGET_INVALID`)". Code emits it as a warning (`on-start-diagnostics.ts` `checkOnStartHandoffTargets`; harness shows it under warnings).
2. Public reference vs code: the "Guarding a CALL with WHEN" example uses `WHEN: ani_national != ""` and `member_id != ""`. A missing value evaluates `!= ""` to true, so the guard does not skip the call. Use `IS SET`.
3. Public reference: the ON_START properties table omits `HANDOFF`, `DO`, `SET_INTERACTION_LANGUAGE`, and `CLEAR_INTERACTION_LANGUAGE`. They appear in later sections.
4. Previous article defects (fixed in the proposal): the tool returned a `content` field, which becomes the welcome text when no response renders. The example had no guard for a failed lookup. `session.account_id` was not a platform field.
5. Other published welcome articles (2.1, 2.2, 2.3, 2.7, 2.8) were not part of this task. They may use `!= ""` guards or end the entry flow at the first step. Review them.

## Open questions

- Confirm customer-facing names for caller data (SDK `callerData` or custom attributes) and which key names channels send.
- Confirm that `session.identityTier` and `session.verificationMethod` are populated on rehydrated sessions. Code reading shows they come from caller context at session creation.
- The identity tier meaning comes from verifier code and `session-ownership.ts` comments, not from a customer-facing contract.
- No end-to-end runtime run was possible. Runtime claims rely on code reading and repository tests.
