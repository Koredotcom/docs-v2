# Evidence: use-behavior-profiles-by-context

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-behavior-profiles-by-context.md`
**Topic:** 1.7 - How to use behavior profiles to change agent behavior by context
**Workflow:** Refresh against `release_Artemis_1.9.0` (target release). Previous scan: `hotfix_Artemis_1.8.1`, evidence `use-behavior-profiles-by-context-2026-10-19-evidence.md`.
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/use-behavior-profiles-by-context-2026-11-01-review.md`

## Branch relationship

`release_Artemis_1.9.0` is not a descendant of `hotfix_Artemis_1.8.1`. The merge base is `15eeb40ef77`. The hotfix branch holds 275 commits that the release branch lacks, and the release branch holds 3351 commits that the hotfix lacks. A `git diff` between the two therefore shows hotfix-only changes as removals. This refresh checks every claim against the 1.9.0 source, not only the diff.

## Source files inspected

| File (code repo) | Purpose |
| ---------------- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`INLINE_PROFILE_KEYWORDS` line 1759, `parseBehaviorProfile` line 15926, `E130` line 16102, `E131` and `E132` lines 16742 to 16745, `W498` sites lines 2617 and 14118) | Inline versus standalone handling. Required `PRIORITY` and `WHEN`. New `W498` for `USE BEHAVIOR_PROFILE:` or `PERSONA:` inside a flow step or other step. |
| `packages/core/src/types/agent-based.ts` | Typed AST. |
| `packages/compiler/src/platform/ir/compile-behavior-profile.ts` | `compileBehaviorProfile` now returns `warnings` (profile `CONVERSATION` listening warnings, ABLP-6250). Codes `PROFILE_PRIORITY_CONFLICT`, `PROFILE_UNKNOWN_TOOL`, `PROFILE_INVALID_WHEN` unchanged. |
| `packages/compiler/src/platform/ir/compile-conversation-behavior.ts` | `listeningLevel: 'profile'` wording for `listening.dtmf` and `listening.asr` warnings. |
| `apps/runtime/src/services/execution/profile-resolver.ts` | `assembleProfileContext`, `resolveActiveProfiles`, `buildEffectiveConfig`. In 1.9.0 the context holds only `channel`, `caller`, `session`, `interaction`, `env`. |
| `apps/runtime/src/services/execution/effective-config-lifecycle.ts`, `initial-agent-profile-resolution.ts` | Both call `assembleProfileContext` without a runtime expression context. |
| `apps/runtime/src/services/execution/session-interaction-context-refresh.ts`, `runtime-executor.ts` (line 8955), `profile-resolver.ts` (`extractProfileInteractionContextFromMetadata`) | Source of `interaction.*` values: explicit interaction context, contact preferences, agent default, session metadata, message metadata. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (line 14145 on) | Per-turn re-evaluation. Trace events `behavior_profile_applied` and `profile_resolution`. |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`buildEffectiveConfigPromptSections` line 1456, `buildReasoningStepProfilePromptSections` line 1652) | Profile text sections. New function for FLOW reasoning steps. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (near line 23801) | FLOW `REASONING: true` step prompt includes matched profile sections (ABLP-6016). |
| `packages/compiler/src/platform/constructs/cel-evaluator.ts` | Unknown variable throws. New bounded long-condition path and dependency analysis. No change for short `WHEN` text. |
| `apps/runtime/src/channels/manifest.ts` | No diff. `channel.name` values unchanged. |

## Drift analysis 1.8.1 to 1.9.0

| Change | Evidence | Impact on article |
| ------ | -------- | ----------------- |
| Session variables are not readable in `WHEN` in 1.9.0. The 1.8.1 hotfix (PR #4896, ABLP-6128) added `runtimeContext` spread into the profile context. HEAD has no `runtimeContext`, no `buildRuntimeExpressionContext` call in `effective-config-lifecycle.ts`, and the test file `behavior-profile-runtime-context.test.ts` does not exist on HEAD. | `git diff`, `git ls-tree HEAD`, harness: `repeat_contact == true` throws `Unknown variable`. | Breaking for the published article. The minimal example `recovery_mode` and the "session variables" row would never match in 1.9.0. Rewritten. |
| `WHEN` over `MEMORY`, `SET` values, and tool results | Same cause. | Removed from the article. Stated as unsupported. |
| Matched profile text applies to FLOW `REASONING: true` steps (ABLP-6016, PR #5032). | `buildReasoningStepProfilePromptSections`, `flow-step-executor.ts` near line 23801. | New sentence and verification step. |
| `W498`: `USE BEHAVIOR_PROFILE:` inside a flow step is ignored with a warning. | Parser lines 2617 and 14118. Harness: W498 reported. | New sentence, mistake row, troubleshooting row. |
| Profile `CONVERSATION` block: listening warnings reported at profile level (ABLP-6250). | `compile-behavior-profile.ts`. | No article change. The article does not detail `CONVERSATION` fields. |
| Profile `WHEN` evaluation no longer takes PII options (hotfix-only change absent). | `resolveActiveProfiles` signature. | None for customers. |
| `USE_BEHAVIOR_PROFILE` underscore spelling | Parser line 775. | No change (unchanged from 1.8.1). |
| Inline `BEHAVIOR_PROFILE` ends a preceding `GATHER` block (ABLP-6250). | Parser `GATHER` terminator list. | No article change. |
| Long `WHEN` conditions (over 4096 characters) can evaluate through a bounded path (ABLP-6462). | `cel-evaluator.ts`, `admitLongCondition`. | Not covered. Out of scope. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Inline profile (`PRIORITY`, `WHEN`, `INSTRUCTIONS`, `CONVERSATION`) | yes | `INLINE_PROFILE_KEYWORDS`. Harness: inline `VOICE:` gives `E105`. | covered |
| Standalone profile attached with `USE BEHAVIOR_PROFILE:` | yes | Harness blocks 2 and 3 pass. | covered |
| Standalone sections `CONSTRAINTS`, `RESPONSE`, `VOICE`, `TOOLS` | yes | `parseBehaviorProfile`, harness block 4 | covered |
| Standalone sections `GATHER`, `FLOW` | yes | `buildEffectiveConfig`, `PROFILE_UNKNOWN_STEP`, `PROFILE_FLOW_CONFLICT` | covered in merge table, no example |
| Profile `CONVERSATION` block | yes | Parser, compiler | covered in tables |
| `PRIORITY` ordering and merge | yes | `resolveActiveProfiles`, `buildEffectiveConfig` | covered |
| Duplicate priority on attached profiles | yes (error) | Harness: `PROFILE_PRIORITY_CONFLICT` | covered |
| Duplicate priority on inline profiles | yes (no error) | Harness: two inline profiles with priority 5 compile with no diagnostics | covered as an instruction to use unique priorities |
| `WHEN` over `channel`, `caller`, `session`, `interaction`, `env` | yes | `assembleProfileContext` | covered (`channel.region`, `provider`, `number_type`, `tags` and `env.deployment_region` added) |
| `WHEN` over session variables, `MEMORY`, tool results | no in 1.9.0 | Harness: throws `Unknown variable` | covered as unsupported |
| `WHEN: true` always-on | yes | Harness block `n_always` passes. Parser default. | covered (new variation) |
| `WHEN` operators `AND`, `OR`, `NOT`, `&&`, `\|\|`, `!` | yes | `normalizeToCel` | covered |
| `===` in `WHEN` | no (error) | Harness: `PROFILE_INVALID_WHEN` | covered |
| Per-turn re-evaluation, trace events | yes | `reasoning-executor.ts` | covered |
| Profile text in FLOW `REASONING: true` steps | yes | `flow-step-executor.ts`, `prompt-builder.ts` | covered (new) |
| `USE BEHAVIOR_PROFILE:` inside a flow step | no (`W498`, ignored) | Harness | covered (new) |
| `interaction.*` supply path | yes | Interaction context, session metadata, message metadata | covered |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `profile-resolver.ts`, `reasoning-executor.ts`, `prompt-builder.ts`, harness CEL evaluation | covered | none |
| Required companion resources identified | Standalone example pairs a profile with an agent. The `TOOLS HIDE` variation states that the agent declares `show_carousel`. | covered | none |
| Referenced variables have sources | Minimal example uses `interaction.sentiment_label` (integration supplied) and `caller.is_authenticated` (caller identity). The article states both sources. | covered | none |
| Fallback/failure/ambiguity behavior verified | Names outside the context fail and the profile is skipped. Overlap merges. Unknown tool and duplicate priority fail compilation. | covered | none |
| Customer verification path defined | Validate, match and non-match sessions, interaction value test, trace events, overlap test, FLOW step test | covered | none |
| Production readiness checklist included | Present and updated | covered | none |

## Example validation

Harness: `validate.mjs` from the session scratchpad. It runs `validateABL` on the 1.9.0 package sources (compiler and core copied from `release_Artemis_1.9.0`). Run from `/tmp`. Scratch files are in `scratchpad/t17/`. Condition evaluation used `evaluateCelCondition` from `cel-evaluator.ts` (`scratchpad/t17/eval.mjs`) with a context shaped like `assembleProfileContext`.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (`Support_Assistant`, proposed `WHEN` with `interaction.sentiment_label` and `caller.is_authenticated`) | full-document | `validate.mjs b1new.abl` | pass | none | changed (old `WHEN` read session variables) |
| Block 1 as published (session variable `WHEN`) | full-document | `validate.mjs b1.abl` | pass at compile time | none. Runtime evaluation throws. | replaced |
| Block 2 (`voice_support_mode`) with block 3 (`Voice_Support_Assistant`) | full-document set | `validate.mjs b2.abl b3.abl` | pass | none | kept |
| Block 4 (`whatsapp_compact`) with harness agent `WhatsApp_Assistant` that declares `show_carousel` | section-snippet (standalone profile) | `validate.mjs b4.abl b4agent.abl` | pass | Two harness agent tool warnings (`MISSING_PARAM_DESCRIPTION`, `SIDE_EFFECT_TOOL_WITHOUT_CONFIRMATION`). No profile warnings. | kept |

Negative and evaluation checks on 1.9.0:

| Input | Result |
| ----- | ------ |
| `channel == "sms"` against `channel.name = twilio_sms` | false |
| `channel.name == "twilio_sms"` | true |
| `sentiment == "frustrated" OR repeat_contact == true` | throws `Unknown variable: repeat_contact`. Profile skipped. |
| `repeat_contact == true` | throws `Unknown variable`. |
| `interaction.sentiment_label == "frustrated" OR caller.is_authenticated == false` with unauthenticated caller | true |
| `WHEN: true` | true. Compiles with no diagnostics. |
| `channel.name === "voice"` | `PROFILE_INVALID_WHEN` at compile time. |
| Inline profile containing `VOICE:` | `E105`, and `E131` for a following profile without `PRIORITY` |
| Two attached profiles with priority 8, one hiding unknown tool `nope` | `PROFILE_PRIORITY_CONFLICT`, `PROFILE_UNKNOWN_TOOL` |
| Two inline profiles with priority 5 | no diagnostics |
| `USE BEHAVIOR_PROFILE:` inside a flow step | `W498` warning |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Files above. Tests present on HEAD: `profile-resolver.test.ts`, `behavior-profile.e2e.test.ts`, `behavior-profiles-per-turn.test.ts`. The session-variable test file is absent. |
| Did I search synonyms and neighboring constructs? | pass | `BEHAVIOR_PROFILE`, `USE_BEHAVIOR_PROFILE`, `runtimeContext`, `buildRuntimeExpressionContext`, `buildReasoningStepProfilePromptSections`, `W498`. |
| Did I identify every supported authoring style, alias, default, and fallback? | pass | Inline, standalone, underscore spelling, `WHEN: true`. |
| Did I distinguish optional helper sections from required configuration? | pass | `PRIORITY` and `WHEN` required. |
| Did I explain how the reasoning layer uses free-form guidance? | pass | `INSTRUCTIONS` and `CONSTRAINTS` text reaches the agent prompt and FLOW reasoning steps. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Inline and standalone shown with a decision rule. |
| Could a customer build the scenario another way the article omits? | pass | `GATHER`, `FLOW`, `TOOLS ADD` appear in tables. |
| If asked "Are you not considering all scenarios?", what evidence would I show? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Every `WHEN` example evaluates on 1.9.0. Unsupported session variable access is stated. FLOW reasoning step behavior is stated. | none |
| Senior content writer | ready | Goal first. Tables before examples. Short sentences. | none |
| Product manager/customer enablement | ready | Troubleshooting maps codes to fixes. The article names who supplies each interaction value. | none |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Removed session variable claims that 1.9.0 code does not support. Added FLOW step and `W498` behavior. | 5 |
| Depth of conceptual explanation | 4 | Added interaction value sourcing and FLOW step reach. | 5 |
| Readability and usability | 4 | Kept structure. Short sentences. | 4 |
| Coverage of examples | 3 | Replaced the non-matching example. All blocks validated. | 4 |
| Search and discovery quality | 4 | Added `W498` and `PROFILE_INVALID_WHEN` rows. | 5 |
| Completeness of workflow and failure modes | 4 | Added interaction value test and unsupported name failure. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Sources stated. | 5 |
| Scenario comprehensiveness | 4 | Added `WHEN: true`, FLOW reach, `W498`. | 4 |
| Article completeness | 5 | Template sections present. | 5 |

**Minimum final score:** 4

**Gate result:** pass

## Doc discrepancies for human review

- The published article (written for 1.8.1) says `WHEN` reads session variables. 1.9.0 does not. The hotfix backport ABLP-6128 (PR #4896) is absent from `release_Artemis_1.9.0`. Confirm with engineering whether 1.9.0 intentionally lacks it or a forward-port is pending. If the forward-port lands, restore the session variable text.
- The hotfix commit message says it backports "accepted profile state" to 1.8.1, which implies the feature exists on develop. The release branch does not contain it. This ordering needs confirmation.
- Two inline profiles with the same priority compile without error. Carried over from the previous refresh.
- `interaction.sentiment_label` has no platform producer. The article now states that the integration supplies it. Confirm the supported API field names for session creation and message metadata with the product team.

## Open questions

- Should the article show the exact API payload for supplying `interaction` values? Field names are accepted in several shapes (`sentiment_label`, `sentimentLabel`, `sentiment.label`). The article does not name an endpoint.
- Should the article cover profile `CONVERSATION` fields? Out of scope here.
