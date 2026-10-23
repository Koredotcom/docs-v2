# Evidence: handle-fallback-greetings

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/handle-fallback-greetings.md`
**Topic:** 2.8 - How to handle empty-state and fallback greetings
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`, evidence dated 2026-08-21)

## Validation harness

Same harness as 2.7 evidence: `/private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/b2bc1dfb-b8c5-45da-a8f1-9a78b40dd311/scratchpad/w2728/`. It runs `validateABL`, `compileABLtoIR`, `nullSafeEvaluateCondition`, and `renderTemplate` from the code repo source without modifying it. The earlier harness directories named in the task (`h`, `mine`) were empty or shared with other agents, so a new one was built.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`selectOnStartResponseConfig`, `executeOnStart`, `renderOnStartResponse`, `resolveLifecycleToolResultAssistantMessage`, `runOnStartList`) | Branch selection, miss fallback, error recovery, tool `content` fallback, DO list. |
| `apps/runtime/src/services/runtime-executor.ts` (~9590-9760) | Branch-selected response owns the startup turn. Top-level response is a prelude that flows into the entry flow step, including branch-miss fallbacks. |
| `apps/runtime/src/__tests__/execution/flow-on-start-imported-ir.test.ts`, `flow-step-executor-contract-matrix.test.ts` | Tests: miss falls back to top-level then runs `ready`; branch match does not run the flow step; malformed imported condition recovers to next branch with `dsl_on_start_branch_error`. |
| `apps/runtime/src/services/pipeline/null-safe-eval.ts` | Condition evaluation. Harness run: missing variable false, plain text false, `language IS SET` works. |
| `apps/runtime/src/services/execution/interaction-context.ts`, `session-interaction-context-refresh.ts`, `runtime-executor.ts` (~9485) | `session.interaction.current.language` is written to the session namespace before ON_START. Layers: explicit, message hint, session, contact, channel, agent, project, defaults. Value is `null` when none supplies it. |
| `packages/shared/src/prompts/template-engine.ts`, `value-resolution.ts` | Customer-visible templates render a missing variable as an empty string. `{{#if}}` sections work (harness). |
| `packages/compiler/src/platform/ir/on-start-diagnostics.ts` | `ON_START_HANDOFF_UNREACHABLE` when a top-level HANDOFF coexists with an ELSE branch. |
| `packages/compiler/src/platform/ir/validate-ir.ts` | `INVALID_CEL_SYNTAX` on authored branch condition. `MISSING_VARIABLE_PRODUCER_WARNING` on undeclared variables. |
| `apps/runtime/src/services/agent-assist/welcome-text.ts`, `welcome-resolver.ts` | Agent Assist chain: `on_start.respond`, `messages.greeting`, default "How can I help you?". Unresolved placeholders skipped. |
| `apps/runtime/src/services/voice/voice-startup-greeting.ts` | Realtime voice chain. `isSpeakableText` blocks unresolved placeholders. |
| `apps/runtime/src/services/voice/korevg/korevg-session.ts` (`resolveGreeting`) | Pipeline voice chain ending in "Hello! How can I help you today?". |
| `/Users/Prabhat.Singh/Documents/GitHub/docs-v2/agent-platform/abl/reference/lifecycle-and-hooks.mdx` | Secondary cross-check only. |

## Drift analysis (1.4.4 to 1.8.1)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| Authored malformed branch conditions | Now a compile error (`INVALID_CEL_SYNTAX`). Runtime skip applies to conditions that fail during evaluation. | Old text said "If a malformed branch condition is present, the runtime falls back". Rewritten: runtime skips and tries the next branch, not only the top-level fallback. Compile error for authored syntax errors. |
| Branch recovery behavior | On a failing branch, the loop `continue`s to the next branch. Old text implied a direct fallback. | Corrected in "How it works" and troubleshooting. |
| Plain-language `IF:` | Quotes are stripped, text evaluates false, warnings at compile. | New warning in concept and mistakes. |
| Branch-owned startup turn | Present in 1.4.4 code, never documented in the article. | Added concept paragraph, new decision table, mistake and troubleshooting rows. |
| ELSE with top-level HANDOFF | New diagnostic. | One sentence in the ELSE variation. |
| Voice and Agent Assist greeting chains (PLAT-69776) | New or changed. | New "Know the channel fallbacks" table. |
| Branch `DO:` lists | New. Not needed for a greeting fallback. | Out of scope, see 2.7 and 2.5. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Top-level RESPOND as fallback when no branch matches | yes | `selectOnStartResponseConfig` returns top-level config; test `unmatched string conditions fall back` | covered (minimal example) |
| Top-level fallback flows into entry flow step | yes | runtime-executor comment and test (`expectedResult: Ready.`) | covered |
| ELSE branch as fallback | yes | Parser, IR; `ON_START_HANDOFF_UNREACHABLE` | covered (variation) |
| Branch-selected response owns startup turn | yes | `responseSource === 'on_start_branch'` return; test expects no `Ready.` | covered |
| No ON_START, first flow step as greeting | yes | Flow runs entry step at init | covered (variation) |
| No ON_START, reasoning agent without flow | yes | Returns null; no greeting | covered in table (no proactive greeting) |
| Optional data with `{{#if}}` | yes | Harness `renderTemplate` outputs | covered (variation) |
| Missing `{{var}}` renders empty | yes | `resolveMissingVariableMode` | covered |
| Language value null falls to fallback | yes | `interaction-context.ts` `language ?? null`; harness false | covered |
| Condition fails at runtime, next branch tried | yes | `dsl_on_start_branch_error`, test | covered |
| Authored invalid syntax | yes (compile error) | Harness run `INVALID_CEL_SYNTAX` | covered |
| Plain-language condition | yes (never matches) | Harness false; warnings | covered |
| Tool `content` as welcome when no RESPOND | yes | `resolveLifecycleToolResultAssistantMessage`; test | covered (one sentence) |
| Channel does not send ON_START welcome | yes | `dsl_on_start_skipped` | covered (verification, troubleshooting) |
| Pipeline voice chain | yes | `resolveGreeting` | covered (table) |
| Realtime voice chain | yes | `resolveVoiceStartupGreeting` | covered (table) |
| Agent Assist chain | yes | `welcome-text.ts` | covered (table) |
| Top-level HANDOFF as no-match fallback | yes | `on-start-diagnostics.ts` | out of scope: needs companion agents, see 2.5. Mentioned with ELSE warning |
| ON_START DELEGATE as fallback | gap | Not a greeting fallback | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code read plus harness runs for condition and template behavior | covered | none |
| Required companion resources identified | `lookup_customer` marked as project-local assumption with a binding requirement | covered | none |
| Referenced variables have sources | `session.interaction.current.language` (runtime), `profile` from `CALL ... AS` | covered | none |
| Fallback/failure/ambiguity behavior verified | Miss, error, null, missing value, failed CALL | covered | none |
| Customer verification path defined | Five numbered steps with trace names | covered | none |
| Production readiness checklist included | Present | covered | none |

Trace names verified emitted: `dsl_on_start_branch`, `dsl_on_start_branch_error`, `dsl_on_start_skipped`.

## Lessons from batch 1, applied

1. Quoted natural-language condition: quotes stripped in ON_START, evaluates false, not truthy. Documented.
2. Channel value: not used as a condition here. Article 2.7 covers `session.channel`.
3. Quoted timeouts: not applicable.
4. HANDOFF history default: not applicable.
5. ESCALATE: not applicable.
6. Compiled, not only parsed: `INVALID_CEL_SYNTAX` shows branch conditions are checked at compile time.
7. Trace events: all three checked in code and registry.

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Fallback_Greeting_Agent) | full-document | `validateABL` | pass | none | kept unchanged |
| Block 2 (No_Startup_Handler_Agent) | full-document | `validateABL` | pass | none | kept unchanged |
| Block 3 (Else_Greeting_Agent) | full-document | `validateABL` | pass | none | new |
| Block 4 (Optional_Name_Greeting_Agent) | full-document | `validateABL` | pass | none (after adding `confirm: never`; without it `SIDE_EFFECT_TOOL_WITHOUT_CONFIRMATION` warns) | new |

Rendering of the Block 4 template checked with `renderTemplate`: no profile gives "How can I help?", `first_name: "Ana"` gives "Welcome back, Ana. How can I help?", empty or null name gives the generic text.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Parser, types, compiler, runtime, tests, examples inspected? | pass | See source table |
| Synonyms and neighboring constructs searched? | pass | `messages.greeting`, `greet_*` steps, `welcomeMessage`, `content` fallback, `isSpeakableText` |
| Every authoring style, shorthand, alias, default, fallback? | pass | Top-level, ELSE, none, `{{#if}}`, tool content, channel chains |
| Optional vs required distinguished? | pass | Decision table |
| Reasoning-layer guidance? | n/a | Deterministic feature |
| Preferred pattern not the only pattern? | pass | Four mechanisms in one table |
| Another supported way not mentioned? | pass | Top-level HANDOFF scoped out with reason |
| Evidence if asked "are you not considering all scenarios"? | pass | Variant map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Startup turn ownership, branch error recovery, channel chains match code. | None blocking. |
| Senior content writer | ready | Decision table first, short sentences, no filler. | None. |
| Product manager/customer enablement | ready | Customers can choose a mechanism and verify with five steps. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Fixed malformed-condition claim. Added chains from code. | 5 |
| Depth of conceptual explanation | 3 | Startup turn ownership and decision table. | 5 |
| Readability and usability | 4 | Tables, numbered order. | 5 |
| Coverage of examples | 3 | ELSE and optional name examples, validated. | 5 |
| Search and discovery quality | 4 | Error and trace names. | 4 |
| Completeness of workflow and failure modes | 3 | Miss, error, null, missing value, suppressed channel. | 5 |
| Customer/partner self-service readiness | 4 | No internal paths. | 5 |
| Scenario comprehensiveness | 3 | Channel fallbacks, tool content. | 4 |
| Article completeness | 4 | All template sections. | 5 |

**Gate result:** pass. Minimum final score 4.

## Doc discrepancies for human review

1. **Prior article claim corrected.** "A malformed branch condition makes the runtime fall back" is true only for run-time failures. Authored syntax errors fail compilation.
2. **Reference gap.** `lifecycle-and-hooks.mdx` does not document that a top-level `RESPOND` flows into the first flow step while a branch response owns the startup turn.
3. **Reference gap.** `session.interaction.current.language` is not in `abl/reference`. It is used by runtime tests, so it is supported.
4. **Reference vs code.** The reference says an `ELSE` branch makes a top-level `HANDOFF` unreachable. Code matches (`ON_START_HANDOFF_UNREACHABLE`). No conflict.
5. **Tool `content` fallback.** Not in the reference. Behavior confirmed in code and the contract-matrix test.

## Open questions

- Agent Assist table says branch responses are not used unless the welcome renders through a session. The condition is: templated `respond`, or an identified caller with an ON_START handoff (`shouldRenderWelcomeThroughSession`). Confirm the wording is enough for customers.
- The pipeline voice default "Hello! How can I help you today?" is hard-coded in `korevg-session.ts`. Confirm it is intended as a documented default.
