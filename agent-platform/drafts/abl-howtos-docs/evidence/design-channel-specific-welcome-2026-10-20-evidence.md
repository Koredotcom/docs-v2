# Evidence: design-channel-specific-welcome

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-channel-specific-welcome.md`
**Topic:** 2.7 - How to design channel-specific welcome experiences
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`, evidence dated 2026-08-21)

## Validation harness

Built outside the code repo in `/private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/b2bc1dfb-b8c5-45da-a8f1-9a78b40dd311/scratchpad/w2728/`. An esbuild plugin resolves `@abl/*` and `@agent-platform/*` to `packages/*/src` in the code repo (read-only). It bundles `validateABL` (`packages/compiler/src/platform/ir/validate-ir.ts`, runs `parseAgentBasedABL`, `compileABLtoIR`, and IR validators) and `compileABLtoIR`. A second bundle exposes `nullSafeEvaluateCondition` (`apps/runtime/src/services/pipeline/null-safe-eval.ts`) and `renderTemplate` (`packages/shared/src/prompts/template-engine.ts`) to test runtime condition and template behavior. Sanity check: an ABL file with a trailing `==` in a branch condition returns error `INVALID_CEL_SYNTAX`.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`executeOnStart`, `selectOnStartResponseConfig`, `renderOnStartResponse`, `shouldEmitOnStartProactivePayload`, `runOnStartList`) | Order of SET, CALL, language, branch selection, proactive delivery gate, `dsl_on_start_skipped`, branch DO list. |
| `apps/runtime/src/services/runtime-executor.ts` (~9470-9760, `initialData`) | `session.channel` is `options.channelType` (default `digital`). Branch-selected ON_START owns the startup turn. Top-level welcome flows into the entry flow step. |
| `apps/runtime/src/channels/channel-behavior-contract.ts` | Per channel `proactiveDelivery`, `richContent`, `voiceConfig` modes. |
| `apps/runtime/src/services/channel/outcome.ts` (`projectVoiceConfigForChannel`) | `plain_text_only`, `ignored`, `full` projections. |
| `packages/core/src/parser/agent-based-parser.ts` (`parseOnStart`, `parseOnStartBranches`, `parseOnStartBranchDoBlock`, `parseVoiceBlock`) | Branch syntax (`IF`, `CONDITION`, `ELSE`), E380 for SET/CALL beside RESPOND, DO list, scoped BARGE_IN placement. |
| `packages/core/src/parser/on-start-do-block.ts` | DO list allows SET, CALL, HANDOFF, language directives. Other actions dropped with W380 to W388. |
| `packages/compiler/src/platform/ir/on-start-diagnostics.ts` | `ON_START_BRANCH_DO_ACTIVATED`, `ON_START_HANDOFF_UNREACHABLE`, `ON_START_HANDOFF_ACTIVATED`, `ON_START_DELEGATE_WITH_HANDOFF`. |
| `packages/compiler/src/platform/ir/session-variable-names.ts`, `validate-ir.ts` | Session variable scan includes ON_START SET and branch DO SET. `INVALID_CEL_SYNTAX` and `MISSING_VARIABLE_PRODUCER_WARNING` on branch conditions. |
| `apps/runtime/src/services/voice/voice-startup-greeting.ts` | Realtime voice greeting precedence. VOICE PLAIN_TEXT wins over RESPOND. Channel Welcome Message is the last fallback. |
| `apps/runtime/src/services/voice/korevg/korevg-session.ts` (`resolveGreeting`, `configuredPipelineWelcomeMessage`) | Pipeline voice: configured Welcome Message replaces the ON_START greeting. |
| `apps/runtime/src/services/execution/conversation-behavior-resolver.ts` (`resolveScopedBargeInPolicy`) | Precedence: session barge-in off, authored RESPOND BARGE_IN, delivery policy, flow step, channel welcome setting. |
| `packages/shared/src/channels/channel-types.ts`, `apps/studio/src/components/deployments/channels/tabs/ConfigurationTab.tsx`, `theme-builder/SdkThemeBuilderPanel.tsx`, `packages/i18n/locales/en/studio.json` | Studio labels: Launcher welcome and Launcher message, Composer and Placeholder, Welcome Message, Allow caller to interrupt the welcome. |
| `apps/runtime/src/__tests__/execution/flow-on-start-imported-ir.test.ts`, `flow-step-executor-contract-matrix.test.ts` | Tests for branch-owned startup turn, fallback flow-through, malformed branch recovery. |
| `/Users/Prabhat.Singh/Documents/GitHub/docs-v2/agent-platform/abl/reference/lifecycle-and-hooks.mdx`, `behavior-profiles.mdx`, `rich-content.mdx`, `flow.mdx` | Secondary cross-check only. |

## Drift analysis (1.4.4 to 1.8.1)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| Branch `DO:` lists (`on-start-do-block.ts`, `parseOnStartBranchDoBlock`, `runOnStartList`) | New. Branch can run SET, CALL, HANDOFF after the welcome. | Old "Common mistakes" row said branches cannot carry side effects. Now sibling SET/CALL gives E380 and `DO:` is the supported form. Row rewritten and a validated example added. |
| ON_START diagnostics (`on-start-diagnostics.ts`) | New warnings for DO activation and unreachable handoff. | Added note on `ON_START_BRANCH_DO_ACTIVATED` warning in the DO example. |
| Branch condition validation (`validate-ir.ts`) | Authored branch conditions are CEL checked. Invalid syntax is a compile error. Plain-language text gives `MISSING_VARIABLE_PRODUCER_WARNING` and never matches. | Added mistake row for plain-language `IF:`. |
| Channel behavior contract | 47 lines changed since 1.4.4. Current contract used for the delivery table. | Article now lists channel values and delivery per channel instead of saying "some channels". |
| Voice greeting and pipeline Welcome Message | `voice-startup-greeting.ts` (PLAT-69776) and pipeline `resolveGreeting`. | New guidance on channel Welcome Message versus ON_START. |
| Protected welcome (`welcomeBargeIn`, `resolveScopedBargeInPolicy`) | New channel setting and precedence. | Added one bullet and troubleshooting context. |
| `session.interaction.current.*` | Exists in 1.8.1 session namespace. `session.channel` still the channel type. | Existing article already used `session.channel`. Re-verified. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Branch on `session.channel` through a SET variable | yes | IR on_start.set + branches; `nullSafeEvaluateCondition` returns true for `channel_name == "voice"` | covered (minimal example) |
| Branch directly on `session.channel` without SET | yes | Evaluation test: `session.channel == "voice"` true | covered (note, variation) |
| `session.channel IN [...]` for voice family | yes | Evaluation test true | covered (variation) |
| `channel.name` or `system.channel` in ON_START IF | no | Evaluation test false for both | covered (concept, mistakes) |
| `ELSE` branch (no condition) | yes | Parser regex `IF|ELSE|CONDITION`; IR branch without condition | covered |
| `CONDITION:` as alias of `IF:` | yes | Parser regex | out of scope (alias, adds no customer decision) |
| VOICE `PLAIN_TEXT` per branch | yes | IR `voice_config.plain_text` | covered |
| FORMATS (alias RICH_CONTENT) per branch | yes | IR `rich_content.markdown` for both spellings | covered (FORMATS in example) |
| Scoped `BARGE_IN` under branch RESPOND VOICE | yes | IR `barge_in`, `barge_in_source: respond`; `resolveScopedBargeInPolicy` | covered (one bullet) |
| SET/CALL beside RESPOND in a branch | no | E380 | covered (mistake row, DO variation) |
| Branch `DO:` with SET, CALL, HANDOFF | yes | `isSupportedOnStartDoAction`; IR `do`; validated example | covered (SET). CALL and HANDOFF out of scope: tool and companion agent needed, see 2.5 |
| Top-level SET before branch selection | yes | `executeOnStart` order | covered |
| Proactive delivery gate per channel | yes | `shouldEmitOnStartProactivePayload`, contract table | covered (table) |
| `dsl_on_start_skipped` on suppressed channels | yes | `flow-step-executor.ts` emit when payload existed; registry | covered |
| Channel launcher, placeholder text | yes | `SdkThemeBuilderPanel.tsx` | covered |
| Channel "connecting" status text | gap | No setting found in Studio theme builder or web-sdk | removed from article |
| Voice Welcome Message override (pipeline) vs fallback (realtime) | yes | `resolveGreeting`, `resolveVoiceStartupGreeting` | covered |
| Agent Assist welcome from ON_START | yes | `welcome-text.ts` | covered in 2.8 |
| Start-time handoff by channel | yes | branch DO HANDOFF | out of scope here, pointed to 2.5 |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `executeOnStart` read in full; runtime-executor startup path; condition evaluation run through harness | covered | none |
| Required companion resources identified | Single-agent examples, no tools or agents | covered | `ready` step labeled as stand-in |
| Referenced variables have sources | `channel_name` from SET of `session.channel`; `reply_style` from branch DO SET; `session.channel` runtime platform field | covered | none |
| Fallback/failure/ambiguity behavior verified | ELSE branch, suppressed channel trace, E380, plain-language condition | covered | none |
| Customer verification path defined | Trace events `dsl_set`, `dsl_on_start_branch`, `dsl_respond`, `dsl_on_start_skipped` all emitted in code | covered | none |
| Production readiness checklist included | Present | covered | none |

Trace names checked in code and `trace-event-registry.ts`: `dsl_on_start`, `dsl_on_start_branch`, `dsl_on_start_branch_error`, `dsl_on_start_skipped`, `dsl_respond`, `dsl_set`. All emitted.

## Lessons from batch 1, applied

1. Bare quoted natural-language condition: in ON_START, `stripWrappingQuotes` removes the quotes. The text is parsed as an expression, fails CEL, and evaluates false. It is not truthy. Documented as "never matches".
2. Channel value: `session.channel` for ON_START. `channel.name` is for behavior profile `WHEN` (reference `behavior-profiles.mdx`). `system.channel` is for escalation routing entries (`escalation-routing-validation.ts`). Neither resolves in ON_START (evaluation test false). The earlier published article already used `session.channel`. Re-verified correct.
3. Quoted timeouts: not used in this article.
4. HANDOFF history default: not used.
5. ESCALATE: not used.
6. Compiled, not only parsed: branch `voice_config`, `rich_content`, `do`, and `set` all appear in compiled IR.
7. Trace events: all checked.

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Channel_Welcome_Agent) | full-document | `validateABL` via harness | pass | none | kept unchanged |
| Block 2 (Voice_Family_Welcome_Agent) | full-document | `validateABL` | pass | none | new |
| Block 3 (Channel_Style_Agent) | full-document | `validateABL` | pass | 2 x `ON_START_BRANCH_DO_ACTIVATED`, informational by design, explained in the article | new |
| Block 4 (Launcher_Copy_Agent) | full-document | `validateABL` | pass | none | kept unchanged |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Parser, types, compiler, runtime, tests, examples inspected? | pass | Parser, IR, `executeOnStart`, runtime-executor, tests listed above |
| Synonyms and neighboring constructs searched? | pass | `session.channel`, `channel.name`, `system.channel`, `proactiveDelivery`, `welcomeMessage`, `welcomeBargeIn`, `messages.greeting` |
| Every authoring style, shorthand, alias, default, fallback? | pass | IF/CONDITION/ELSE, FORMATS/RICH_CONTENT, DO list, top-level SET, direct `session.channel` |
| Optional helpers vs required config distinguished? | pass | SET variable marked optional |
| Reasoning-layer guidance? | n/a | Deterministic lifecycle feature |
| Preferred pattern not presented as only pattern? | pass | Direct condition and variable forms both shown |
| Another code-supported way not mentioned? | pass | Branch HANDOFF by channel pointed to 2.5. Tool `content` greeting fallback is in 2.8 |
| Evidence if asked "are you not considering all scenarios"? | pass | Variant map above |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Delivery table from the channel contract. Branch ownership of the startup turn. Voice override behavior. | None blocking. Open question on exact voice channel scope of the Welcome Message override. |
| Senior content writer | ready | Goal first, table for scan, short sentences, mistakes and troubleshooting in tables. | None. |
| Product manager/customer enablement | ready | Explains why no welcome appears on messaging channels, and how to verify with traces. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Removed unverified "connecting status text". Added contract table, voice override, branch DO. | 5 |
| Depth of conceptual explanation | 3 | Added two-layer model, delivery gate, startup turn ownership. | 5 |
| Readability and usability | 4 | Delivery table, numbered order. | 5 |
| Coverage of examples | 3 | Added voice family IN and DO examples. All validated. | 5 |
| Search and discovery quality | 4 | Channel values and trace names added. | 4 |
| Completeness of workflow and failure modes | 3 | Added verification steps, E380, plain-language condition, suppressed channel behavior. | 5 |
| Customer/partner self-service readiness | 4 | No internal paths in article. | 5 |
| Scenario comprehensiveness | 3 | Direct `session.channel`, IN, DO, Welcome Message, barge-in. | 4 |
| Article completeness | 4 | All template sections present. | 5 |

**Gate result:** pass. Minimum final score 4.

## Doc discrepancies for human review

1. **Reference vs code, branch voice blocks.** `flow.mdx` says scoped `barge_in` on branch/handler voice blocks is rejected (`VOICE_BARGE_IN_ILLEGAL_PLACEMENT`). Code: a `VOICE` block nested under a branch `RESPOND` compiles clean and sets `barge_in` with `barge_in_source: respond`. A `VOICE` block as a direct sibling is also consumed as RESPOND metadata. The parser rejects only the direct `parseVoiceBlock` path with `allowScopedBargeIn: false`. The article follows code and states BARGE_IN only under RESPOND.
2. **Reference gap.** `lifecycle-and-hooks.mdx` does not state that a branch-selected welcome owns the startup turn while a top-level welcome flows into the first flow step. Code and tests confirm both.
3. **Reference gap.** The reference does not list `session.channel` values or which channels receive the `ON_START` response.
4. **Reference note on lazy start.** `lifecycle-and-hooks.mdx` says the welcome is not delivered on a lazy start (first message starts the session, for example HTTP chat). The article table lists `http` as not sent, consistent with that.
5. **E380 message text.** The error text says "Keep side effects at top-level ON_START" and does not mention the `DO:` list. A message update would help customers.
6. **Prior article text.** The published article said launcher, placeholder, and connecting text are channel configuration. No connecting text setting exists in Studio. Removed.

## Open questions

- Does the pipeline Welcome Message override apply to every channel that uses KoreVG pipeline voice, or only `voice_pipeline` and `genesys_audio_connector`? Code path is `korevg-session.ts`. The article says "pipeline voice channels".
- `web_chat` appears in the channel contract, but SDK sessions in code use `sdk_websocket`. Confirm `web_chat` is a live channel type.
