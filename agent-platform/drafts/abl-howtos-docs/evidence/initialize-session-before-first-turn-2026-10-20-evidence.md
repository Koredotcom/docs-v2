# Evidence: initialize-session-before-first-turn

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/initialize-session-before-first-turn.md`
**Topic:** 2.6 - How to initialize session variables before the first user turn
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`, evidence dated 2026-08-21)
**Verdict:** update-needed

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseOnStart`, `parseIndentedSetAssignments`) | `SET:` single line and block form. Values kept raw (`stripWrappingQuotes: false`). Empty `SET` is `E393`. `SET_INTERACTION_LANGUAGE` (`E394`), `CLEAR_INTERACTION_LANGUAGE` (`E395`). |
| `packages/core/src/parser/interaction-language-value.ts` | Literal BCP-47 values are canonicalized at compile time. Dotted paths and templates are resolved at runtime. |
| `packages/compiler/src/platform/ir/compiler.ts` (`compileStartConfig`) | `on_start.set`, `set_interaction_language` compiled (IR dump). |
| `packages/compiler/src/platform/ir/session-memory-population.ts`, `session-variable-names.ts`, `validate-session-model-writers.ts` | `W801` population sources include ON_START SET and branch `DO` SET/CALL. `INITIAL` seeds are deliberately not counted. Model-writer validation is unrelated to authored SET. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`executeOnStart`) | Order: SET, CALL, language, branch selection, RESPOND, branch list. `dsl_set` with `source: on_start`. SET runs before the channel delivery check. |
| `apps/runtime/src/services/runtime-executor.ts` (~8240-8300, ~9470-9660, ~22700) | `initialData.values.session` content. Memory init, `before_agent` hook, then ON_START. Lazy initialization before the first message is processed. |
| `apps/runtime/src/services/execution/memory-integration.ts` (`materializeSessionMemoryInitialValues`, `applySessionMemoryValues`) | `INITIAL` is written at session creation, and on activation when missing. |
| `apps/runtime/src/services/execution/runtime-expression-context.ts`, `value-resolution.ts`, `assignment-resolver.ts` | SET value resolution. Unquoted word resolves a variable, else stays text. Missing path resolves to nothing. |
| `apps/runtime/src/services/execution/interaction-context.ts` (`resolveInteractionContext`), `interaction-language-override.ts` | Language precedence. Override applies only with a supported-language policy (`VOICE_LANGUAGE_OVERRIDE_UNAVAILABLE`). Trace `interaction_language_override_changed`. |
| `apps/runtime/src/channels/channel-behavior-contract.ts` | Welcome suppression per channel. |
| `apps/runtime/src/__tests__/execution/on-start-handoff-runtime.test.ts` | INT-13 (child never runs `ON_START`), reconnect runs no list, branch `DO` SET. |
| Public reference `lifecycle-and-hooks.mdx`, `memory-and-constraints.mdx` | Secondary cross-check. |

## Drift analysis (1.4.4 to 1.8.1)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| Branch `DO:` `SET` | New. Runs after the welcome. | New variation and mistake. |
| `SET_INTERACTION_LANGUAGE` / `CLEAR_INTERACTION_LANGUAGE` in ON_START | New. | New variation, voice-scoped. |
| `session.interaction.current.*` | Present in the session namespace. | Kept. The 2026-08-21 article used `session.channel` already. Re-verified. |
| `session.channel` | `options.channelType` (default `digital`) in `initialData.values.session`. | Re-verified (lesson 2). `channel.name` and `system.channel` do not resolve in ON_START (harness). |
| Declared defaults | `INITIAL` materialized at session creation. `W801` ignores `INITIAL` as a population source. | New variation with the warning explained. |
| `W801` sources | Include ON_START SET and branch DO. | None. |
| ON_START scope | Entry agent only. Reconnect does not rerun. | New concept bullet and mistake. |
| SET order | Unchanged: SET first, then CALL, then RESPOND. | Kept. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Top-level `SET:` single-line assignments | yes | Parser, IR dump | covered (minimal example) |
| `SET:` block form with several assignments | yes | Parser, IR dump `{'retry_count': '0', 'reply_mode': '"text"'}` | covered (how it works) |
| SET from `session.channel` | yes | `initialData`, harness SET returns `web_chat` | covered |
| SET from `session.interaction.current.language` | yes | Harness SET returns `en` for a populated namespace, empty otherwise | covered |
| SET constants (quoted text, number, boolean) | yes | Harness: `0`, `"home"`, `true` | covered |
| Unquoted word reads a variable of that name, else stays text | yes | Harness: `home` with `home = X` returns `X`. Without, returns `home`. | covered (variation text, mistakes) |
| SET from caller data (`session.<name>`) | yes | `initialData`, `appliedFlatKeys` | covered (table, variation text) |
| `MEMORY` `SESSION` `INITIAL` default | yes | `materializeSessionMemoryInitialValues`, IR dump `initial_value: 0` | covered (variation) |
| `W801` for `INITIAL`-only variables | yes | Harness warning text | covered |
| Branch `DO: - SET` after the welcome | yes | Parser, IR, test "a branch DO: without HANDOFF runs SET and CALL" | covered (variation) |
| `ON_START CALL ... AS` to seed from a tool | yes | `executeOnStart` | covered (concept table), detailed in 2.4 |
| `SET_INTERACTION_LANGUAGE` | yes, voice with a supported-language policy | `setInteractionLanguageOverride` reasons | covered (variation) |
| SET runs when the welcome is suppressed | yes | `executeOnStart` order, test "a channel that forbids proactive output" | covered |
| Lazy start (first message starts the session) runs ON_START before the message | yes | `runtime-executor.ts:22700-22730` | covered |
| Reconnect does not rerun ON_START | yes | Test "suppressed ON_START and an initialized session run no list" | covered |
| Specialist `ON_START` | no, never runs | One caller of `executeOnStart` | covered |
| Expression arithmetic in SET (`retry_count + 1`) | yes | Harness returns `1` | covered (INITIAL example uses a flow step SET) |
| Template syntax in SET (`{{session.channel}}`) | yes | Harness returns `web_chat` | out of scope: the plain path form is enough |
| `CLEAR_INTERACTION_LANGUAGE` | yes | Parser | out of scope: reset is a rare need on a voice channel |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code reading plus harness execution of the real SET and template resolvers. No end-to-end runtime run. | covered | State in open questions. |
| Required companion resources identified | No tools or agents. `MEMORY` declared in the `INITIAL` example. | covered | None. |
| Referenced variables have sources | Table of readable paths. `order_id`, `topic` from flow `GATHER`. | covered | None. |
| Fallback, failure, ambiguity behavior verified | Missing path renders empty. Unquoted word. Suppressed channel. Language override refusal. | covered | None. |
| Customer verification path defined | `dsl_set` events, second channel, reconnect, language event. | covered | None. |
| Production readiness checklist included | Present. | covered | None. |

## Example validation

Harness: esbuild bundle of `validateABL` from `validate-ir.ts` with `@abl/core`, in the scratchpad under `h24/`. Blocks extracted by script and validated with `node out24.mjs`.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Session_Init_Agent` | full-document | `validateABL` | pass | none | changed (first step now gathers input so the flow does not complete at start) |
| Block 2 `Metadata_Init_Agent` | full-document | `validateABL` | pass | none | changed (same reason) |
| Block 3 `Session_Defaults_Agent` | full-document | `validateABL` | pass | none (an earlier draft with `INITIAL` and no writer gave `W801`; fixed with the flow `SET`) | new |
| Block 4 `Branch_Init_Agent` | full-document | `validateABL` | pass | 2 x `ON_START_BRANCH_DO_ACTIVATED` (intentional, informational, explained) | new |
| Block 5 `Language_Init_Agent` | full-document | `validateABL` | pass | none | new |

The 2026-08-21 blocks validated with zero errors, but each ended the flow at its first step. A top-level welcome flows into the entry step, so the session completed at start.

## Runtime semantics checks (harness, real runtime functions)

| Check | Result |
| ----- | ------ |
| `session.channel` with `{session:{channel:"web_chat"}}` | `web_chat` |
| `session.channel` with only a flat `channel` | no value |
| `channel.name`, `system.channel` | no value |
| `session.interaction.current.language` | `en` when present, empty when absent |
| `session.sessionId`, `session.userId` | value when present, empty when absent |
| `0`, `true`, `[]`, `"home"` | `0`, `true`, `[]`, `home` |
| `home` with `{home: "X"}` | `X` |
| `retry_count + 1` with `retry_count = 0` | `1` |
| `abl.coalesce(session.entry_topic, "general")` with empty namespace | `general` |
| Template `retries {{retry_count}}` with `0` | `retries 0` |
| Template with a missing variable, `customer_visible` | empty text |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighboring constructs? | pass | `SET`, `INITIAL`, `initial_value`, `RESET`, `before_agent`, `HOOKS`, `session namespace`, `callerData`. |
| Identified every authoring style, alias, default, fallback? | pass | Single-line and block `SET`, `INITIAL`, branch `DO`, language. `initial_value` is a legacy alias noted in the reference. |
| Distinguished optional from required sections? | pass | All optional. |
| Explained reasoning-layer guidance? | n/a | Deterministic initialization. |
| Avoided making a preferred pattern the only pattern? | pass | Concept table lists five options. |
| Could a customer build this another supported way? | pass | `before_agent` hook `SET` also seeds values. Mentioned only as the earlier step in the order, not documented here (hooks topic). |
| Evidence if asked "are you not considering all scenarios?" | n/a | Variant map. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Order, scope (entry agent only), suppressed-channel behavior, literal-versus-variable pitfall, `W801` explained. | None. |
| Senior content writer | ready | Option table first, short sentences, no dashes. | None. |
| Product manager/customer enablement | ready | Readable-paths table, verification steps, clear mistakes. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Verified path availability and SET semantics by execution. | 5 |
| Depth of conceptual explanation | 3 | Options table, order, scope. | 5 |
| Readability and usability | 4 | Tables and short bullets. | 5 |
| Coverage of examples | 3 | Examples now wait for input. Added `INITIAL`, branch `DO`, language. | 5 |
| Search and discovery quality | 4 | Added `INITIAL`, `SET_INTERACTION_LANGUAGE` terms. | 4 |
| Completeness of workflow and failure modes | 3 | Suppressed channel, empty path, refused language override. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. | 4 |
| Scenario comprehensiveness | 3 | Added every `yes` row or scoped it out. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass (minimum 4)

## Doc discrepancies for human review

1. Previous article defects (fixed in the proposal): both examples ended the entry flow at the first step with `THEN: COMPLETE`, so the session completed at start.
2. Public reference: `memory-and-constraints.mdx` says `INITIAL` is "assigned when the session starts". The compiler still warns `W801` for a variable with only an `INITIAL` value. Consider noting this.
3. Public reference: the language section says a "reasoning agent with no FLOW" can resolve the language at start. The compiler and runtime accept `SET_INTERACTION_LANGUAGE` in any agent. The runtime applies it only on a voice channel with a supported-language policy.
4. Public reference: the ON_START properties table omits `SET_INTERACTION_LANGUAGE` and `HANDOFF`.

## Open questions

- No end-to-end runtime run. Claims rely on code reading, repository tests, and harness execution of the SET, condition and template resolvers.
- Confirm which caller-data key names channels send, so the `session.<name>` row can name them.
- The statement that `INITIAL` also fills a missing variable on activation comes from `applySessionMemoryValues` (mode `activation`). It was not run.
