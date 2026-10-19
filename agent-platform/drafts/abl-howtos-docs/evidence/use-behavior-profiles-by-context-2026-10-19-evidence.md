# Evidence: use-behavior-profiles-by-context

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-behavior-profiles-by-context.md`
**Topic:** 1.7 - How to use behavior profiles to change agent behavior by context
**Workflow:** Refresh against branch `hotfix_Artemis_1.8.1`. Previous refresh baseline: `hotfix_Artemis_1.4.4`.
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/use-behavior-profiles-by-context-2026-10-19-review.md`

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`BEHAVIOR_PROFILE:` dispatch near line 1469, `USE BEHAVIOR_PROFILE:` near line 1744, `parseBehaviorProfile` near line 14794) | Inline versus standalone handling. `INLINE_PROFILE_KEYWORDS` is `PRIORITY`, `WHEN`, `INSTRUCTIONS`, `CONVERSATION`. Required `PRIORITY` (`E131`) and `WHEN` (`E132`). `PRIORITY` must be a non-negative integer (`E130`). Standalone sections: `CONSTRAINTS`, `RESPONSE`, `VOICE`, `TOOLS`, `GATHER`, `FLOW`. |
| `packages/core/src/types/agent-based.ts` (`BehaviorProfileAST`, `inlineBehaviorProfiles`, `useBehaviorProfiles`) | Typed AST for profiles. |
| `packages/compiler/src/platform/ir/compile-behavior-profile.ts` | `compileBehaviorProfile`, `attachProfilesToAgent`, `validateCelExpression`. Error codes `PROFILE_PRIORITY_CONFLICT`, `PROFILE_UNKNOWN_TOOL`, `PROFILE_UNKNOWN_STEP`, `PROFILE_INVALID_WHEN`, `PROFILE_NOT_FOUND`, `PROFILE_FLOW_CONFLICT`. |
| `packages/compiler/src/platform/ir/compiler.ts` (lines 595 to 700) | Standalone profiles compile first. Inline profiles compile from a synthetic document. Duplicate priority check runs for `USE` profiles only. |
| `apps/runtime/src/services/execution/profile-resolver.ts` | `assembleProfileContext` (context shape), `resolveActiveProfiles` (CEL evaluation, ascending sort, skip on error), `buildEffectiveConfig` (merge rules). |
| `apps/runtime/src/services/execution/effective-config-lifecycle.ts` | Context includes session variables (`buildRuntimeExpressionContext`) plus the built-in namespaces. |
| `apps/runtime/src/services/execution/runtime-expression-context.ts` | Session values, `session_id`, `project_id`, `tenant_id`, `user_id`, and `channel` string are exposed. The `channel` string is overwritten by the `channel` object in `assembleProfileContext`. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (near line 13400) | Per-turn re-evaluation. Trace events `profile_resolution` and `behavior_profile_applied`. |
| `apps/runtime/src/channels/manifest.ts` | `CHANNEL_MANIFEST` keys are the real `channel.name` values (`twilio_sms`, `voice`, `web_chat`, `whatsapp`, and others). |
| `packages/compiler/src/platform/constructs/cel-evaluator.ts` | `evaluateCelCondition` throws on unknown variables. No null injection. |
| `packages/core/src/__tests__/behavior-profile-parser.test.ts`, `inline-behavior-profile.test.ts`, `apps/runtime/src/__tests__/profile-resolver.test.ts`, `behavior-profile.e2e.test.ts` | Real usage of `channel.name`, `caller.is_authenticated`, standalone sections. |

## Drift since hotfix_Artemis_1.4.4

`git diff hotfix_Artemis_1.4.4..hotfix_Artemis_1.8.1` on `compile-behavior-profile.ts` and `profile-resolver.ts`:

| Change | Impact on article |
| ------ | ----------------- |
| `compile-behavior-profile.ts`: validation errors gain `VALIDATION_CODES.PROFILE_*` codes. Message text is unchanged. | Article can name the codes. |
| `compile-behavior-profile.ts`: profile `VOICE` compiles with `includeScopedBargeIn: false`. | Scoped barge-in is not allowed in profile `VOICE`. Not covered in the article (out of scope). |
| `profile-resolver.ts`: `runtimeContext` spread into the context, so session variables are readable in `WHEN`. Evaluation takes PII options and redacts the warning log. | Article states that session variables are readable. |
| `agent-based-parser.ts`: `USE BEHAVIOR_PROFILE` accepts `USE_BEHAVIOR_PROFILE` spelling (ABLP-3739). Profile `CONVERSATION` block parses with `E433` and `E435` diagnostics. | No article change. |

Pre-existing gaps in the 2026-08-21 article, found by this refresh:

- The examples `channel == "sms"` and `channel == "voice"` can never match. The 2026-08-21 refresh did not test them.
- The article says `PRIORITY` decides which profile wins. All matching profiles apply.
- The 2026-08-21 evidence claimed that OR conditions are safe for unset variables through "null injection". Profile `WHEN` calls `evaluateCelCondition` directly, and an unset variable throws. See harness results below.
- The article lists `RESPONSE`, `VOICE`, `TOOLS`, `GATHER`, and `FLOW` as profile changes without saying that inline profiles cannot use them.

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Inline profile in an agent file (`PRIORITY`, `WHEN`, `INSTRUCTIONS`, `CONVERSATION`) | yes | `INLINE_PROFILE_KEYWORDS`. Harness: inline `VOICE:` gives `E105`. | covered |
| Standalone profile file attached with `USE BEHAVIOR_PROFILE:` | yes | Parser, compiler `attachProfilesToAgent`. Harness block 2 and 3 pass. | covered |
| Standalone sections `CONSTRAINTS`, `RESPONSE`, `VOICE`, `TOOLS` (`HIDE`, `ADD`) | yes | `parseBehaviorProfile`, `behavior-profile-parser.test.ts` | covered (variation with `CONSTRAINTS`, `RESPONSE`, `TOOLS HIDE`; `VOICE` in the standalone example; `ADD` listed in the section table only) |
| Standalone sections `GATHER`, `FLOW` (`skip`, `overrides`, `insertions`, `replace`) | yes | `parseBehaviorProfile`, `buildEffectiveConfig`, `PROFILE_UNKNOWN_STEP`, `PROFILE_FLOW_CONFLICT` | covered in the merge table. No example. Scoped out of examples to keep the article short. |
| Profile `CONVERSATION` block | yes | Parser `E433`, `E435`. `resolveConversationBehavior`. | covered in the section and merge tables |
| `PRIORITY` ordering and merge semantics | yes | `resolveActiveProfiles`, `buildEffectiveConfig` | covered |
| Duplicate priority on attached profiles | yes (error) | `attachProfilesToAgent`. Harness: `PROFILE_PRIORITY_CONFLICT`. | covered |
| `WHEN` over built-in namespaces (`channel`, `caller`, `session`, `interaction`, `env`) | yes | `assembleProfileContext` | covered (`env` omitted from table, low value) |
| `WHEN` over session variables | yes | `effective-config-lifecycle.ts`. Harness evaluation with a set variable. | covered |
| `WHEN` over unset variable | yes (profile skipped) | Harness: throws. `resolveActiveProfiles` catch block logs a warning. | covered |
| `WHEN` operators `AND`, `OR`, `NOT` and `&&`, `||`, `!` | yes | `normalizeToCel` | covered |
| `===` in `WHEN` | no (error) | `validateCelExpression`. Harness: `PROFILE_INVALID_WHEN`. | covered |
| Per-turn re-evaluation and trace events | yes | `reasoning-executor.ts` | covered in verification |
| Mixed inline and standalone profiles on one agent | yes | `compiler.ts` steps 4 and 4b. Priority conflict check covers `USE` profiles only. | covered by the "unique priorities on each agent" rule |
| `interaction.*` values produced by the platform | gap | No runtime code writes `sentiment_label`. Values come from session interaction state or caller input. | covered as "your project supplies these values" |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `profile-resolver.ts`, `reasoning-executor.ts`, harness CEL evaluation (see below) | covered | none |
| Required companion resources identified | Standalone example pairs a profile with an agent. The `TOOLS HIDE` variation states that the agent must declare `show_carousel`. | covered | none |
| Referenced variables have sources | `sentiment` and `repeat_contact` are project values. The article says so and tells the reader to set them before the first turn. Built-in values are listed in the `WHEN` table. | covered | none |
| Fallback/failure/ambiguity behavior verified | Unset variable skips the profile. Overlap merges. Unknown tool and duplicate priority fail compilation. | covered | none |
| Customer verification path defined | Validate, match and non-match sessions, `profile_resolution` and `behavior_profile_applied` traces, overlap test, unset variable test | covered | none |
| Production readiness checklist included | Present, extended with unique priorities and variable sources | covered | none |

## Example validation

Harness: copy of the repo packages loaded through a Node module loader (`reg.mjs`, `hooks.mjs`) that transpiles TypeScript sources with esbuild. The harness runs `validateABL`, `parseAgentBasedABL`, and `compileABLtoIR` on branch `hotfix_Artemis_1.8.1` sources. Harness files are in the session scratchpad, not in the repo. Condition evaluation used `evaluateCelCondition` from `cel-evaluator.ts` with a context built like `assembleProfileContext`.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (`Support_Assistant`, two inline profiles) | full-document | `validateABL`, parse, `compileABLtoIR` | pass | none. Both profiles in IR with priority 10 and 3. | kept, `WHEN` of `concise_mode` fixed |
| Block 2 (`voice_support_mode`) with block 3 (`Voice_Support_Assistant`) | full-document set | same, validated together | pass | none. Profile attached with `voice` override present. | kept, `WHEN` fixed |
| Block 4 (`whatsapp_compact`) with a harness agent that declares `show_carousel` | section-snippet (standalone profile) | same | pass | Two warnings from the harness agent tool (`MISSING_PARAM_DESCRIPTION`, `SIDE_EFFECT_TOOL_WITHOUT_CONFIRMATION`). No profile warnings. | added |

Negative checks run in the harness:

| Input | Result |
| ----- | ------ |
| Original `WHEN: channel == "sms"` against context with `channel.name = twilio_sms` | false. `channel.name == "twilio_sms"` gives true. |
| `sentiment == "frustrated" OR repeat_contact == true` with neither variable set | throws `Unknown variable`. Profile skipped. |
| Same condition with only `repeat_contact: true` set | true |
| Same condition with only `sentiment: "calm"` set | throws. Profile skipped. |
| Same condition with both set and false | false |
| Inline profile containing `VOICE:` | `E105` unknown section, plus `E131` for the next profile without `PRIORITY` |
| Two attached profiles with priority 8 | `PROFILE_PRIORITY_CONFLICT` |
| `WHEN: channel.name === "voice"` | `PROFILE_INVALID_WHEN` |
| `HIDE: [nope]` with no such tool on the agent | `PROFILE_UNKNOWN_TOOL` |
| Profile without `WHEN` | `E132` |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime/prompt/tool execution, tests, and examples? | pass | Files listed above. Tests: `behavior-profile-parser.test.ts`, `inline-behavior-profile.test.ts`, `profile-resolver.test.ts`, `behavior-profile.e2e.test.ts`. |
| Did I search for synonyms and neighboring constructs? | pass | `BEHAVIOR_PROFILE`, `USE BEHAVIOR_PROFILE`, `USE_BEHAVIOR_PROFILE`, `behavior_profiles`, `PRIORITY`, `WHEN`, `profile_resolution`, `CONVERSATION` block. |
| Did I identify every supported authoring style, shorthand, alias, default, and fallback? | pass | Inline, standalone, underscore alias spelling, `WHEN: true` for always-on (parser default `when: 'true'`, `E132` fix hint). `WHEN: true` not shown in the article. Added to open items. |
| Did I distinguish optional helper sections from required executable configuration? | pass | `PRIORITY` and `WHEN` are required. Other sections are optional. |
| Did I explain how the reasoning layer uses free-form guidance? | pass | `INSTRUCTIONS` and `CONSTRAINTS` add text from every active profile. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Inline and standalone shown as two forms with a decision rule. |
| Could a customer build the scenario another code-supported way that the article omits? | pass | `FLOW` replace, `GATHER` overrides, and `TOOLS ADD` exist and appear in the merge and section tables without examples. |
| If asked "Are you not considering all scenarios?", what evidence would I show? | pass | Scenario map above with file evidence for each row. |

**Coverage verdict:** pass

## Persona simulation review

Run against the proposed article body only.

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | `WHEN` examples now evaluate as written. Merge rules match `buildEffectiveConfig`. Unset variable behavior is stated. | none |
| Senior content writer | ready | Starts with the goal. Two-form table before examples. Short sentences. | none |
| Product manager/customer enablement | ready | Troubleshooting maps error codes to fixes. Verification uses trace events a partner can read. | none |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Fixed two non-matching `WHEN` examples. Replaced the winner-takes-all claim. Removed the unsupported null-injection claim. | 5 |
| Depth of conceptual explanation | 4 | Added inline versus standalone table and merge table. | 5 |
| Readability and usability | 4 | Split tables. Shortened sentences. | 4 |
| Coverage of examples | 3 | Added the `TOOLS HIDE` and `RESPONSE` variation. Validated all blocks. | 4 |
| Search and discovery quality | 4 | Added error codes and trace event names to troubleshooting. | 5 |
| Completeness of workflow and failure modes | 3 | Added unset variable, duplicate priority, unknown tool, and inline section failures. | 5 |
| Customer/partner self-service readiness | 4 | Kept repo paths out of the article. Stated project-local assumptions. | 5 |
| Scenario comprehensiveness | 3 | Covered `GATHER`, `FLOW`, and `CONVERSATION` in tables. No example for `GATHER` and `FLOW`. | 4 |
| Article completeness | 5 | Template sections all present. | 5 |

**Minimum final score:** 4

**Gate result:** pass

## Doc discrepancies for human review

- The 2026-08-21 evidence file stated that OR conditions are safe through CEL null injection. The harness shows otherwise. Treat the 2026-08-21 evidence as superseded.
- The mixed inline and `USE` priority check gap: the compiler checks duplicate priority for `USE` profiles only. Two inline profiles with the same priority compile without error.
- `interaction.sentiment_label` has no producer in runtime code. Confirm with the product team how customers supply it, then add a sentence if there is a supported path.

## Open questions

- Should the article document `WHEN: true` for always-on profiles? The parser supports it and the `E132` fix hint recommends it.
- Studio may show profile names in a UI. The article does not cover Studio steps because this refresh did not verify them.
