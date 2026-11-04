# Evidence: design-channel-specific-welcome

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-channel-specific-welcome.md`
**Published copy:** `agent-platform/abl/how-to/design-channel-specific-welcome.mdx`
**Topic:** 2.7 - How to design channel-specific welcome experiences
**Workflow:** Refresh against `release_Artemis_1.9.0` (previous scan: `hotfix_Artemis_1.8.1`, evidence dated 2026-10-20)

## Validation harness

`validate.mjs` in the session scratchpad `harness/` folder. It loads `validateABL` from a copy of `packages/*/src` of the code repo (read-only), which runs the parser, `compileABLtoIR`, and IR validators. Scratch files are in `scratchpad/w2728b/`. Negative checks run: trailing `==` gives `INVALID_CEL_SYNTAX`; `SET` beside `RESPOND` in a branch gives `E380`; a plain-language `IF:` gives `MISSING_VARIABLE_PRODUCER_WARNING`; top-level `HANDOFF` with `ELSE` gives `ON_START_HANDOFF_UNREACHABLE`. The harness has no runtime app code (the `piscina` package is missing), so runtime condition evaluation is verified by reading `null-safe-eval.ts` and by tests, not by execution.

## Branch divergence check

`release_Artemis_1.9.0` does not descend from `hotfix_Artemis_1.8.1` (merge base `15eeb40ef77`). Method: diffed the 1.8.1 and 1.9.0 text of each ON_START function and re-read the 1.9.0 source.

- `selectOnStartResponseConfig`, `executeOnStart`, `runOnStartList`, `shouldEmitOnStartProactivePayload`, `renderOnStartResponse`, `resolveLifecycleToolResultAssistantMessage`: text identical in both branches.
- `channel-behavior-contract.ts`, `on-start-diagnostics.ts`, `voice-startup-greeting.ts`, `on-start-do-block.ts`, `welcome-text.ts`: no diff.
- Hotfix-only commits that touch ON_START or welcome behavior: `7a6b011130b` (ABLP-5578 ON_START routing gaps) and `1b7886a6fea` (ABLP-2446 protected welcome listener). Both have 1.9.0 equivalents (`aa798ee0853`, and `welcomeBargeIn`, `protectedWelcomeInputCounts`, `voice_welcome_policy_resolved` in `korevg-session.ts`). No behavior in the published article exists only in a 1.8.x backport.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`selectOnStartResponseConfig`, `executeOnStart`, `shouldEmitOnStartProactivePayload`, `runOnStartList`) | Order: top-level SET, CALL, global language directive, branch selection, DO preparation, welcome, rest of DO. Delivery gate. `dsl_on_start_skipped`. |
| `apps/runtime/src/services/execution/on-start-handoff.ts` (`selectOnStartList`, `splitOnStartLanguagePreparation`, `buildOnStartCapabilities`) | DO prefix through the last language directive runs before the welcome. Stops at HANDOFF. |
| `apps/runtime/src/services/runtime-executor.ts` (~8892, ~10290-10375) | `session.channel` is `options.channelType` (default `digital`). A branch response with a renderable payload owns the startup turn. |
| `apps/runtime/src/channels/channel-behavior-contract.ts` | `proactiveDelivery` and `voiceConfig` per channel. Delivery table re-derived: 12 channels send, 21 do not. |
| `apps/runtime/src/services/channel/outcome.ts` (`projectVoiceConfigForChannel`) | `plain_text_only`, `ignored`, `full`. |
| `packages/core/src/parser/agent-based-parser.ts` (~10262, ~10332), `on-start-do-block.ts`, `diagnostics/registry.data.ts` (E380) | Branch syntax, E380, DO keys: SET, CALL, HANDOFF, SET_INTERACTION_LANGUAGE, CLEAR_INTERACTION_LANGUAGE. |
| `packages/compiler/src/platform/ir/on-start-diagnostics.ts`, `validate-ir.ts` | `ON_START_BRANCH_DO_ACTIVATED`, `ON_START_HANDOFF_UNREACHABLE`, `INVALID_CEL_SYNTAX`. |
| `apps/runtime/src/services/voice/voice-startup-greeting.ts` | Realtime greeting precedence. |
| `apps/runtime/src/services/voice/korevg/korevg-session.ts` (`resolveGreeting`, `configuredPipelineWelcomeMessage`, `tryDispatchConnectGreetingAudio`, `voice_welcome_policy_resolved`) | Pipeline voice: Welcome Message first, clip dispatch, welcome policy trace. |
| `apps/runtime/src/services/voice/connect-greeting/resolve-connect-greeting.ts` | Clip guard order: capability, outbound call, signing, library, binding, clip present. |
| `apps/runtime/src/services/voice/korevg/openai-realtime-barge-in-policy.ts`, `packages/shared/src/channels/channel-types.ts` | New: realtime welcome interruption for OpenAI and Azure OpenAI. |
| `apps/studio/src/components/deployments/channels/tabs/ConfigurationTab.tsx`, `AdvancedVoiceBehaviourFields.tsx`, `packages/i18n/locales/en/studio.json` | Studio labels and defaults. |
| `apps/runtime/src/services/execution/conversation-behavior-resolver.ts` (`resolveScopedBargeInPolicy`) | Precedence: session barge-in off, authored RESPOND, delivery policy, flow step, channel welcome. |
| `apps/runtime/src/__tests__/on-start-language-runtime.test.ts`, `packages/core/src/__tests__/parser-on-start-language.test.ts`, `parser-on-start-do.test.ts` | Language directive order and rejection behavior. |
| `agent-platform/abl/reference/lifecycle-and-hooks.mdx` | Secondary cross-check. It confirms the DO prefix rule. |

## Drift analysis (1.8.1 to 1.9.0)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| ON_START execution (`executeOnStart` and helpers) | No change between 1.8.1 and 1.9.0. | Existing claims hold. |
| Channel delivery contract | No change. Table re-derived and matches. | Table kept. |
| Realtime welcome interruption (ABLP-6319, `channel-types.ts`, `openai-realtime-barge-in-policy.ts`, `AdvancedVoiceBehaviourFields.tsx`) | New in 1.9.0. OpenAI and Azure OpenAI realtime channels get an opt-in toggle (`welcomeBargeIn: true`, default off) that sends `llm.initialPromptBargein`. | Old article said the setting exists on pipeline channels only. New bullet added. |
| Pipeline welcome default (`applyDefaultWelcomeBargeInConfig`, `channel-connections.ts`) | New channels store `welcomeBargeIn: false`. Older channels without the field stay interruptible. Applies only while barge-in is active. | Pipeline bullet made precise. |
| Interaction language (`SET_INTERACTION_LANGUAGE` in ON_START and DO) | Exists in both branches. 1.9.0 adds project language detection (ABLP-6522) as a second acceptance path. Missed by the 2026-10-20 scan. | Order list and DO paragraph corrected. Language directives run before the welcome. |
| Greeting Audio (connect greeting) | Exists in the merge base (August 2026), so in both branches. Missed by earlier scans. | New bullet and troubleshooting row. |
| E380 diagnostic text | Registry `fixHint` now names the `DO:` list. | Doc discrepancy 5 from 2026-10-20 is resolved. |
| `interaction-context.ts`, `null-safe-eval.ts`, `template-engine.ts` | Small changes unrelated to welcome behavior (timezone rollback, held namespaces, escalation templates). | None. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Branch on `session.channel` through a SET variable | yes | `runtime-executor.ts` initialData; `executeOnStart` runs SET first | covered (minimal example) |
| Branch directly on `session.channel` | yes | Same source. Condition evaluated against session values | covered (note) |
| `session.channel IN [...]` for voice family | yes | CEL `IN`; validated example | covered |
| `channel.name` or `system.channel` in ON_START IF | no | Not in session values at ON_START | covered (concept, mistakes) |
| `ELSE` branch | yes | Parser regex `IF\|ELSE\|CONDITION`; selector treats missing condition as match | covered |
| `CONDITION:` alias of `IF:` | yes | Parser regex | out of scope (alias) |
| VOICE `PLAIN_TEXT` per branch | yes | IR `voice_config`; `projectVoiceConfigForChannel` | covered |
| FORMATS (alias RICH_CONTENT) per branch | yes | IR `rich_content` | covered |
| Scoped `BARGE_IN` under branch RESPOND VOICE | yes | `resolveScopedBargeInPolicy` | covered |
| SET/CALL beside RESPOND in a branch | no | E380 (harness run) | covered |
| Branch `DO:` with SET, CALL, HANDOFF | yes | `isSupportedOnStartDoAction`, `runOnStartList` | covered (SET). CALL and HANDOFF scoped out: tool and companion agent needed, see 2.5 |
| Language directives in `DO:` run before welcome | yes | `splitOnStartLanguagePreparation`, runtime test | covered (prose, new) |
| Top-level `SET_INTERACTION_LANGUAGE` before branch selection | yes | `executeOnStart` comment and test `global startup language is available when selecting the welcome branch` | covered (order list) |
| Failed DO `CALL` stops later actions, welcome stays | yes | Runtime test `a failed preparation CALL stops later actions` | covered (one sentence) |
| Top-level SET before branch selection | yes | `executeOnStart` order | covered |
| Proactive delivery gate per channel | yes | `shouldEmitOnStartProactivePayload`, contract | covered |
| `dsl_on_start_skipped` on suppressed channels | yes | `executeOnStart` | covered |
| Pipeline Welcome Message replaces ON_START greeting | yes | `resolveGreeting` | covered |
| Realtime voice greeting precedence | yes | `resolveVoiceStartupGreeting` | covered |
| Greeting Audio clip replaces ON_START on pipeline voice | yes | `tryDispatchConnectGreetingAudio`, Studio `connect_greeting_supersession` | covered (new) |
| Pipeline welcome interruption setting | yes | `resolveScopedBargeInPolicy`, `ConfigurationTab.tsx` | covered (updated) |
| Realtime welcome interruption (OpenAI, Azure OpenAI) | yes | `resolveRealtimeInitialPromptBargeIn` | covered (new) |
| Realtime welcome interruption on other providers | no | `isWelcomeBargeInUnsupportedRealtimeChannel` removes the field | covered (one sentence) |
| Lazy start (no proactive welcome on first-message start) | gap | Reference text only. Not re-verified in code | out of scope, see open questions |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `executeOnStart` read in full on 1.9.0. Runtime executor startup path. Tests for language order and DO failure | covered | Condition evaluation not executed (harness lacks runtime package). Read `null-safe-eval.ts` diff instead |
| Required companion resources identified | Examples use no tools or agents. `ready` step labeled as stand-in | covered | none |
| Referenced variables have sources | `channel_name` from SET of `session.channel`. `reply_style` from branch DO SET. `session.channel` runtime field | covered | none |
| Fallback/failure/ambiguity behavior verified | ELSE branch, suppressed channel trace, E380, plain-language condition, failed DO CALL, clip fallback to text | covered | none |
| Customer verification path defined | Seven steps. Trace names `dsl_set`, `dsl_on_start_branch`, `dsl_respond`, `dsl_on_start_skipped`, `voice_welcome_policy_resolved` exist in code | covered | none |
| Production readiness checklist included | Present, Greeting Audio added | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Channel_Welcome_Agent) | full-document | `validateABL` | pass | none | kept unchanged |
| Block 2 (Voice_Family_Welcome_Agent) | full-document | `validateABL` | pass | none | kept unchanged |
| Block 3 (Channel_Style_Agent) | full-document | `validateABL` | pass | 2 x `ON_START_BRANCH_DO_ACTIVATED`, informational, explained in the article | kept unchanged |
| Block 4 (Launcher_Copy_Agent) | full-document | `validateABL` | pass | none | kept unchanged |
| Scratch (Channel_Language_Agent, branch DO with SET and SET_INTERACTION_LANGUAGE) | full-document | `validateABL` | pass | 1 x `ON_START_BRANCH_DO_ACTIVATED` | not added to article. Language prose only, feature depends on language settings |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Parser, types, compiler, runtime, tests, examples inspected? | pass | Source table |
| Synonyms and neighboring constructs searched? | pass | `welcomeBargeIn`, `connectGreeting`, `initialPromptBargein`, `SET_INTERACTION_LANGUAGE`, `proactiveDelivery`, `messages.greeting` |
| Every authoring style, shorthand, alias, default, fallback? | pass | Two gaps found and fixed: language directive order and Greeting Audio |
| Optional helpers vs required config distinguished? | pass | SET variable marked optional |
| Reasoning-layer guidance? | n/a | Deterministic lifecycle feature |
| Preferred pattern not presented as only pattern? | pass | Variable and direct forms both shown |
| Another code-supported way not mentioned? | pass | Branch HANDOFF by channel points to 2.5. Tool `content` fallback is in 2.8 |
| Evidence if asked "are you not considering all scenarios"? | pass | Variant map above |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Delivery table from the contract. Correct execution order including language step. Voice override and interruption precedence. | None blocking. Open questions below. |
| Senior content writer | ready | Goal first, tables for scan, short sentences. | None. |
| Product manager/customer enablement | ready | Explains why voice callers hear another greeting. Names the three overrides. Verification by trace. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-verified against 1.9.0. Added realtime interruption and Greeting Audio from source. | 5 |
| Depth of conceptual explanation | 4 | Added language step to execution order. | 5 |
| Readability and usability | 5 | Kept structure. | 5 |
| Coverage of examples | 4 | All blocks validated on 1.9.0. | 5 |
| Search and discovery quality | 4 | Added Greeting Audio, Connect greeting, Welcome interruption terms. | 4 |
| Completeness of workflow and failure modes | 4 | Failed DO CALL, clip fallback, interruption troubleshooting row. | 5 |
| Customer/partner self-service readiness | 5 | No internal paths in article. | 5 |
| Scenario comprehensiveness | 3 | Language directives, Greeting Audio, realtime interruption added. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass. Minimum final score 4.

## Doc discrepancies for human review

1. **Published .mdx vs draft.** The `.mdx` adds frontmatter, a back badge, `yaml` fences (`expandable=true` on blocks 1 to 3), and drops the "Related HowTos" section. The proposed text keeps the draft form. Apply the `.mdx` conventions when publishing.
2. **Reference vs code, branch voice blocks (carried over).** `flow.mdx` says scoped `barge_in` on branch voice blocks is rejected. Code compiles a `VOICE` block nested under a branch `RESPOND`. The article follows code.
3. **Reference gap.** `lifecycle-and-hooks.mdx` does not state that a branch-selected welcome owns the startup turn.
4. **Reference gap.** The reference does not list `session.channel` values or channel delivery.
5. **Cross-article.** The language directive order (global directive before branches, DO prefix before welcome) applies to `use-on-start-welcome`, `personalize-returning-user-welcome`, and `handle-fallback-greetings`. Check those articles for the same gap.
6. **Cross-article.** Greeting Audio replaces the `ON_START` greeting on pipeline voice. Check `use-on-start-welcome` and `create-welcome-message` for voice guidance.
7. **Earlier scans missed** Greeting Audio and the language directives. Both exist in 1.8.1 too.

## Open questions

- Does the Welcome Message override apply to every KoreVG pipeline channel, or only `voice_pipeline` and the Genesys pipeline mode? Studio shows the field under pipeline speech config. The article says "pipeline voice channels".
- `web_chat` is in the channel contract. SDK sessions use `sdk_websocket`. Confirm `web_chat` is a live channel type.
- Greeting Audio is on unless `KOREVG_CONNECT_GREETING_ENABLED` is `false`. Confirm customers can bind clips in Artemis 1.9.0 without a deployment flag.
- Lazy start: the reference says no welcome on a first-message start. Not re-verified here. The "not sent" row for `http` is consistent with the contract.
