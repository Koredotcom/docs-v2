# Evidence: handle-fallback-greetings

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/handle-fallback-greetings.md`
**Published copy:** `agent-platform/abl/how-to/handle-fallback-greetings.mdx`
**Topic:** 2.8 - How to handle empty-state and fallback greetings
**Workflow:** Refresh against `release_Artemis_1.9.0` (previous scan: `hotfix_Artemis_1.8.1`, evidence dated 2026-10-20)

## Validation harness

Same harness as 2.7: `validate.mjs` in the session scratchpad `harness/` folder, run on `packages/*/src` of the code repo (read-only). Scratch files are in `scratchpad/w2728b/`. Negative checks: trailing `==` gives `INVALID_CEL_SYNTAX`; plain-language `IF:` gives four `MISSING_VARIABLE_PRODUCER_WARNING` entries. Runtime condition and template execution is not available in this harness (the `piscina` package is missing). Runtime claims rest on 1.9.0 source and tests. The 2026-10-20 harness run of `renderTemplate` and `nullSafeEvaluateCondition` still applies, because `template-engine.ts` and `null-safe-eval.ts` changed only in unrelated lines.

## Branch divergence check

`release_Artemis_1.9.0` does not descend from `hotfix_Artemis_1.8.1`. Method: diffed the 1.8.1 and 1.9.0 text of the ON_START functions and re-read 1.9.0.

- `selectOnStartResponseConfig`, `executeOnStart`, `runOnStartList`, `resolveLifecycleToolResultAssistantMessage`, `renderOnStartResponse`: identical in both branches.
- `voice-startup-greeting.ts`, `welcome-text.ts`, `welcome-resolver.ts`, `on-start-diagnostics.ts`: no diff.
- `korevg-session.ts` `resolveGreeting` and `configuredPipelineWelcomeMessage`: same chain in 1.9.0. The file has many unrelated changes.
- Hotfix-only commits touching ON_START (`7a6b011130b`, `1b7886a6fea`) have 1.9.0 equivalents. No behavior in the published article exists only in a 1.8.x backport.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`selectOnStartResponseConfig`, `executeOnStart`, `renderOnStartResponse`, `resolveLifecycleToolResultAssistantMessage`) | Branch selection, miss fallback to top-level RESPOND, error recovery, tool `content` fallback, order of SET, CALL, language, branches. |
| `apps/runtime/src/services/execution/on-start-handoff.ts` (`splitOnStartLanguagePreparation`) | Language directive preparation before the welcome. |
| `apps/runtime/src/services/runtime-executor.ts` (~10290-10375) | Branch-selected response owns the startup turn. Top-level response, including branch-miss fallback, flows into the entry flow step. |
| `apps/runtime/src/services/execution/interaction-context.ts`, `initial-agent-profile-resolution.ts` | `session.interaction.current.language` layers: explicit, message hint, session, contact, channel, agent default. `null` when none supplies one. Project default and platform defaults are not passed at start. |
| `apps/runtime/src/services/execution/interaction-language-override.ts`, `authored-interaction-language.ts` | Acceptance rules for `SET_INTERACTION_LANGUAGE`: invalid tag, voice language list, project language detection. Trace `interaction_language_override_changed`. |
| `apps/runtime/src/__tests__/on-start-language-runtime.test.ts` | Directive feeds the greeting. Unsupported or unresolved value is rejected and the previous language stays. Failed CALL stops later actions and keeps the fallback welcome. |
| `packages/shared/src/prompts/template-engine.ts` | Missing variable renders as empty string in customer-visible text. |
| `packages/compiler/src/platform/ir/on-start-diagnostics.ts`, `validate-ir.ts` | `ON_START_HANDOFF_UNREACHABLE`, `INVALID_CEL_SYNTAX`, `MISSING_VARIABLE_PRODUCER_WARNING`. |
| `apps/runtime/src/services/agent-assist/welcome-text.ts`, `welcome-resolver.ts` | Agent Assist chain: `on_start.respond`, `messages.greeting`, "How can I help you?". Templated or unresolved text skipped. |
| `apps/runtime/src/services/voice/voice-startup-greeting.ts` | Realtime voice chain. `isSpeakableText` blocks unresolved placeholders. |
| `apps/runtime/src/services/voice/korevg/korevg-session.ts` (`resolveGreeting`, `tryDispatchConnectGreetingAudio`) | Pipeline voice chain ending in "Hello! How can I help you today?". Greeting Audio clip dispatched first with the text chain as fallback. |
| `apps/runtime/src/services/voice/connect-greeting/resolve-connect-greeting.ts` | Clip guards: capability, outbound call, signing, library, binding, clip present. |
| `agent-platform/abl/reference/lifecycle-and-hooks.mdx` | Secondary cross-check for the language directive section. |

## Drift analysis (1.8.1 to 1.9.0)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| Branch selection, miss fallback, error recovery | No change. | Existing claims hold. |
| Top-level fallback flows into first flow step | No change. | Kept. |
| Tool `content` as welcome | No change. | Kept. |
| Channel greeting chains (realtime, Agent Assist) | No change. | Kept. |
| Pipeline voice chain | Same chain. Greeting Audio clip sits ahead of it (exists in both branches, missed earlier). | Table row extended. |
| Interaction language before branches | `SET_INTERACTION_LANGUAGE` runs before branch selection in both branches. 1.9.0 adds the project language detection acceptance path (ABLP-6522). Missed by the 2026-10-20 scan. | New variation with validated example. Order list gains a step. New verification step and troubleshooting row. |
| `session.interaction.current.language` sources | Re-verified. Same layers. | Kept. |
| `interaction-context.ts` | Timezone rollback change, unrelated. | None. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Top-level RESPOND as fallback when no branch matches | yes | `selectOnStartResponseConfig` returns top-level config | covered (minimal example) |
| Top-level fallback flows into entry flow step | yes | `runtime-executor.ts` ~10326 comment and condition | covered |
| ELSE branch as fallback | yes | Parser, IR, `ON_START_HANDOFF_UNREACHABLE` | covered |
| Branch-selected response owns startup turn | yes | `responseSource === 'on_start_branch'` return | covered |
| No ON_START, first flow step as greeting | yes | Flow runs entry step at init | covered |
| No ON_START, reasoning agent without flow | yes | `executeOnStart` returns null | covered (table) |
| Optional data with `{{#if}}` | yes | Template engine sections | covered |
| Missing `{{var}}` renders empty | yes | Template engine | covered |
| Language null falls to fallback | yes | `language ?? null` in `interaction-context.ts` | covered |
| Language set by `SET_INTERACTION_LANGUAGE` before branches | yes | `executeOnStart` ("Global language declarations resolve after startup SET/CALL, before branch selection"), runtime test | covered (new variation) |
| Rejected or empty language leaves language unchanged | yes | `setInteractionLanguageOverride` reasons, runtime test | covered (new) |
| Condition fails at runtime, next branch tried | yes | `dsl_on_start_branch_error` | covered |
| Authored invalid syntax | yes (compile error) | Harness `INVALID_CEL_SYNTAX` | covered |
| Plain-language condition | yes (never matches) | Harness warnings | covered |
| Tool `content` as welcome when no RESPOND | yes | `resolveLifecycleToolResultAssistantMessage` | covered |
| Channel does not send ON_START welcome | yes | `dsl_on_start_skipped` | covered |
| Pipeline voice chain | yes | `resolveGreeting` | covered |
| Greeting Audio clip ahead of the chain | yes | `tryDispatchConnectGreetingAudio` | covered (new) |
| Realtime voice chain | yes | `resolveVoiceStartupGreeting` | covered |
| Agent Assist chain | yes | `welcome-text.ts` | covered |
| Top-level HANDOFF as no-match fallback | yes | `on-start-diagnostics.ts` | out of scope: needs companion agents, see 2.5. Mentioned with ELSE warning |
| ON_START DELEGATE as fallback | gap | Not a greeting fallback | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | 1.9.0 `executeOnStart` read. Tests for language order, rejection, failed CALL | covered | Template and condition execution not re-run, files unchanged in relevant lines |
| Required companion resources identified | `lookup_customer` and `load_profile` marked project-local with binding requirement | covered | none |
| Referenced variables have sources | `session.interaction.current.language` and `.locale` (runtime), `profile` from `CALL ... AS` | covered | none |
| Fallback/failure/ambiguity behavior verified | Miss, error, null, missing value, failed CALL, rejected language | covered | none |
| Customer verification path defined | Six numbered steps with trace names. `interaction_language_override_changed` exists in registry and `interaction-language-override.ts` | covered | none |
| Production readiness checklist included | Present, Greeting Audio added | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Fallback_Greeting_Agent) | full-document | `validateABL` | pass | none | kept unchanged |
| Block 2 (No_Startup_Handler_Agent) | full-document | `validateABL` | pass | none | kept unchanged |
| Block 3 (Else_Greeting_Agent) | full-document | `validateABL` | pass | none | kept unchanged |
| Block 4 (Optional_Name_Greeting_Agent) | full-document | `validateABL` | pass | none | kept unchanged |
| Block 5 (Profile_Language_Greeting_Agent) | full-document | `validateABL` | pass | none (`confirm: never` set on tool) | new |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Parser, types, compiler, runtime, tests, examples inspected? | pass | Source table |
| Synonyms and neighboring constructs searched? | pass | `messages.greeting`, `greet_*`, `welcomeMessage`, `connectGreeting`, `SET_INTERACTION_LANGUAGE`, tool `content` |
| Every authoring style, shorthand, alias, default, fallback? | pass | Gap found and fixed: language directive variation |
| Optional vs required distinguished? | pass | Decision table |
| Reasoning-layer guidance? | n/a | Deterministic feature |
| Preferred pattern not the only pattern? | pass | Four mechanisms in one table, plus language variation |
| Another supported way not mentioned? | pass | Top-level HANDOFF scoped out with reason |
| Evidence if asked "are you not considering all scenarios"? | pass | Variant map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Startup turn ownership, branch error recovery, channel chains, language order match 1.9.0 code. | None blocking. See open questions. |
| Senior content writer | ready | Decision table first, short sentences, no filler. | None. |
| Product manager/customer enablement | ready | Customers choose a mechanism and verify with six steps. Language rejection is explained. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-verified on 1.9.0. Language variation from source and tests. | 5 |
| Depth of conceptual explanation | 4 | Language step in execution order. | 5 |
| Readability and usability | 5 | Kept structure. | 5 |
| Coverage of examples | 4 | New validated example. | 5 |
| Search and discovery quality | 4 | Added `SET_INTERACTION_LANGUAGE`, Greeting Audio terms. | 4 |
| Completeness of workflow and failure modes | 4 | Rejected language, verification step, troubleshooting row. | 5 |
| Customer/partner self-service readiness | 5 | No internal paths. | 5 |
| Scenario comprehensiveness | 3 | Language variation and clip row added. | 4 |
| Article completeness | 5 | All template sections. | 5 |

**Gate result:** pass. Minimum final score 4.

## Doc discrepancies for human review

1. **Published .mdx vs draft.** The `.mdx` adds frontmatter and a back badge, uses `yaml` fences (`expandable=true` on the last block), drops "Related HowTos", and wraps the "Welcome back, ." sample in backticks instead of quotes. The proposed text keeps the draft form.
2. **Reference gap.** `lifecycle-and-hooks.mdx` does not document that a top-level `RESPOND` flows into the first flow step while a branch response owns the startup turn.
3. **Reference gap.** `session.interaction.current.language` and `.locale` are not in `abl/reference`.
4. **Reference note.** The reference says language directives run "after top-level SET/CALL and before branch selection". Code and the runtime test agree.
5. **Cross-article.** The language directive order also belongs in `use-on-start-welcome` and `personalize-returning-user-welcome`. Check them.
6. **Earlier scans missed** the language directive variation and Greeting Audio. Both exist in 1.8.1 too.

## Open questions

- Acceptance rule for `SET_INTERACTION_LANGUAGE`: voice sessions use the channel language list. Other sessions need project language detection on (`language_detection.enabled`). Confirm this wording is enough for customers. The article does not name the setting label in Studio.
- `session.interaction.current.locale` for a language set by directive: runtime test asserts `fr-CA` for the locale. The `language` field value for `fr-CA` is not asserted, so the example branches on `locale`.
- Agent Assist table: branch responses are not used unless the welcome renders through a session (`shouldRenderWelcomeThroughSession`). Confirm the wording.
- The pipeline voice default "Hello! How can I help you today?" is hard-coded in `korevg-session.ts`. Confirm it is intended as a documented default.
