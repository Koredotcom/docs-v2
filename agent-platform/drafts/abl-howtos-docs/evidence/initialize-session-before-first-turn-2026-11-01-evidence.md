# Evidence: initialize-session-before-first-turn

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/initialize-session-before-first-turn.md`
**Topic:** 2.6 - How to initialize session variables before the first user turn
**Workflow:** Refresh against `release_Artemis_1.9.0` (previous scan: `hotfix_Artemis_1.8.1`, evidence dated 2026-10-20)
**Verdict:** update-needed

## Source files inspected

Read first: `evidence/initialize-session-before-first-turn-2026-10-20-evidence.md`. Code root: `/Users/Prabhat.Singh/Documents/GitHub/artimus-bitbucket-src/abl-platform`. The branch does not descend from `hotfix_Artemis_1.8.1`. Every claim was re-read in 1.9.0.

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseOnStart`, `parseOnStartBranchDoBlock`) | `SET` single line and block. `E393`, `E394`, `E395`. Branch `DO:` drops other keys with `W380` or `W381`. |
| `packages/core/src/parser/on-start-do-block.ts` | Supported branch `DO:` keys. `onStartDoGuidance`: "Put the welcome in the branch RESPOND." |
| `packages/core/src/parser/interaction-language-value.ts` | Literal tag canonicalized at compile time. Dotted path, `{{template}}`, `${path}` become an expression resolved at runtime. |
| `packages/compiler/src/platform/ir/validate-ir.ts` (`reportAsOnStartDoWarnings`) | Invalid `SET` or `CALL` in branch `DO:` is `ON_START_DO_ACTION_INVALID`, a warning. |
| `packages/compiler/src/platform/ir/session-memory-population.ts` | `W801` sources. 1.9.0 adds `SAFE_DETAILS_AS` (ABLP-6050). `INITIAL` still not a source. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`executeOnStart`, `runOnStartList`) | Order: SET, CALL, language, branch selection, language preparation list, welcome, rest of list. `dsl_set` with `source: on_start`. `dsl_on_start_skipped`. |
| `apps/runtime/src/services/execution/on-start-handoff.ts` (`splitOnStartLanguagePreparation`) | Branch `DO:` actions up to the last language directive (before any `HANDOFF`) run before the welcome. |
| `apps/runtime/src/services/execution/interaction-language-override.ts` | 1.9.0 (ABLP-6522): opted-in project with no voice language list accepts any valid tag. Expression value for `SET_INTERACTION_LANGUAGE`. Reasons: `INVALID_INTERACTION_LANGUAGE`, `VOICE_LANGUAGE_OVERRIDE_UNAVAILABLE`, `VOICE_LANGUAGE_NOT_CONFIGURED`. Trace gains an optional `source`. |
| `apps/runtime/src/services/execution/authored-interaction-language.ts` | `isAuthoredInteractionLanguageEnabled`: `project_runtime_config.language_detection.enabled === true` and not a realtime turn. |
| `packages/compiler/src/platform/ir/project-runtime-config.ts` (`mapLanguageDetectionConfig`), `apps/studio/src/components/settings/RuntimeConfigTab.tsx` | The opt-in is a project Runtime Config section named "Language detection". |
| `apps/runtime/src/services/language-detection/session-value.ts` | Runtime-owned `session.languageDetection`. `omitLanguageDetectionValue` strips a caller value of that name. |
| `apps/runtime/src/services/runtime-executor.ts` (`initialData`) | `session.channel`, `sessionId`, `userId`, `tenantId`, `projectId`, `sessionPrincipalId`. Caller data and caller context spread under `session.*`. `_metadata` namespace from integration metadata. |
| `apps/runtime/src/services/session-metadata.ts` (`initializeSessionMetadata`) | `values._metadata`, set at session creation. |
| `apps/runtime/src/services/execution/memory-integration.ts` | `INITIAL` written at creation and at activation when missing. Unchanged. |
| `apps/runtime/src/__tests__/on-start-language-runtime.test.ts` | Branch `DO` `SET` plus `SET_INTERACTION_LANGUAGE` before the greeting. Rejects `de-DE` (not on list) and `{{missing_language}}`. `CLEAR` in a branch restores the default. A failed preparation `CALL` stops later actions. |
| `apps/runtime/src/services/execution/__tests__/on-start-language-preparation.test.ts` | Ordering rules for the preparation prefix. |
| `apps/runtime/src/__tests__/execution/on-start-handoff-runtime.test.ts` | INT-13 (child never runs `ON_START`), reconnect runs no list, branch `DO` `SET`. Identical to 1.8.1. |
| `agent-platform/abl/reference/lifecycle-and-hooks.mdx` | Allowed reference. States the language preparation rule. |

## Drift analysis (1.8.1 to 1.9.0)

| Area | Change in 1.9.0 | Impact on article |
| ---- | --------------- | ----------------- |
| `SET_INTERACTION_LANGUAGE` acceptance | New (ABLP-6522). With project language detection on and no voice list, any valid tag applies, on any non-realtime channel. Before, it needed a voice list. | Variation rewritten. Troubleshooting row and mistake updated. |
| Hotfix-only backports | None touch ON_START `SET`, `INITIAL`, or the session namespace. ABLP-6129 reverted. | No published claim comes from a hotfix-only backport. |
| `session` namespace | `session.sessionPrincipalId` present. `session.languageDetection` is runtime-owned. `_metadata.*` available. | Readable-paths table extended. |
| Language directives expression | Present in 1.8.1 and 1.9.0, undocumented in the article. | Documented (path and template forms). |
| Gap in 2026-10-20 article | A branch `DO:` prefix through its last language directive runs before the welcome. The article said the whole list runs after the welcome. | Order list and variation corrected. New example. |
| `W380`, `W381`, `ON_START_DO_ACTION_INVALID` | Present in 1.8.1 and 1.9.0, undocumented in the article. | Troubleshooting row and mistake added. |
| `INITIAL`, `W801`, `SET` order | Unchanged. | Kept. |
| Existing examples | All five blocks compile with the same results. | None. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Top-level `SET:` single line | yes | Parser, `executeOnStart` | covered (minimal example) |
| `SET:` block form | yes | Parser | covered |
| `SET` from `session.channel` | yes | `initialData` | covered |
| `SET` from `session.interaction.current.language` | yes | Interaction context | covered |
| `SET` constants | yes | Resolver | covered |
| Unquoted word reads a variable, else text | yes | Resolver | covered |
| `SET` from caller data `session.<name>` | yes | `initialData` | covered |
| `SET` from `_metadata.<name>` | yes | `initializeSessionMetadata` | covered (new table row) |
| `MEMORY` `SESSION` `INITIAL` | yes | `memory-integration.ts` | covered |
| `W801` for `INITIAL`-only variable | yes | Harness `neg1.abl` | covered |
| Branch `DO: - SET` after the welcome | yes | Parser, test | covered |
| Branch `DO:` prefix through last language directive before the welcome | yes | `splitOnStartLanguagePreparation`, `on-start-language-runtime.test.ts` | covered (new example) |
| Branch `DO:` other keys dropped (`W380`, `W381`) | yes | Harness `neg2.abl`, `neg4.abl` | covered (new mistake, troubleshooting) |
| `ON_START CALL ... AS` | yes | `executeOnStart` | covered (concept), detailed in 2.4 |
| `SET_INTERACTION_LANGUAGE` literal tag | yes | `parseInteractionLanguageValue` | covered |
| `SET_INTERACTION_LANGUAGE` path or template | yes | Parser, test | covered (new) |
| Language applies with a voice list or with project language detection on | yes | `setInteractionLanguageOverride` | covered (new) |
| `CLEAR_INTERACTION_LANGUAGE` | yes | Test "CLEAR in a branch restores the configured default" | covered (new sentence) |
| `SET` runs when the welcome is suppressed | yes | `executeOnStart` order | covered |
| Lazy start runs `ON_START` first | yes | `runtime-executor.ts` | covered |
| Reconnect does not rerun `ON_START` | yes | Test | covered |
| Specialist `ON_START` | no | One caller | covered |
| Arithmetic in `SET` | yes | Harness | covered (flow step `SET`) |
| Template syntax in `SET` | yes | Harness | out of scope: plain path form is enough |
| `SET_INTERACTION_LANGUAGE` in `HOOKS` | yes | `hook-interaction-language.test.ts`, ABLP-6522 | out of scope: hooks topic |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code reading, repository tests, compile validation. No end-to-end run. | covered | State in open questions. |
| Required companion resources identified | No tools or agents. `MEMORY` declared in the `INITIAL` example. | covered | None. |
| Referenced variables have sources | Readable-paths table. `order_id`, `topic` from flow `GATHER`. | covered | None. |
| Fallback, failure, ambiguity behavior verified | Missing path empty. Unquoted word. Suppressed channel. Language refusal reasons. | covered | None. |
| Customer verification path defined | `dsl_set`, second channel, reconnect, language event with `applied` and `reason`. | covered | None. |
| Production readiness checklist included | Present. | covered | None. |

## Example validation

Harness: `validate.mjs` (`validateABL` at 1.9.0), run from `/tmp`. Scratch files are under `scratchpad/t26f/`.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Session_Init_Agent` | full-document | `validateABL` | pass | none | kept |
| Block 2 `Metadata_Init_Agent` | full-document | `validateABL` | pass | none | kept |
| Block 3 `Session_Defaults_Agent` | full-document | `validateABL` | pass | none | kept |
| Block 4 `Branch_Init_Agent` | full-document | `validateABL` | pass | 2 x `ON_START_BRANCH_DO_ACTIVATED` (intentional, informational) | kept |
| Block 5 `Language_Init_Agent` | full-document | `validateABL` | pass | none | kept |
| Block 6 `Language_Branch_Agent` | full-document | `validateABL` | pass | 1 x `ON_START_BRANCH_DO_ACTIVATED` (intentional, informational) | new |

Negative controls: `INITIAL` with no writer gives `W801`. A `RESPOND` in branch `DO:` gives `W381`. A `CALL` with no `AS` gives `W380`. An invalid language literal gives `E394`.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighboring constructs? | pass | `SET`, `INITIAL`, `initial_value`, `before_agent`, `HOOKS`, `session namespace`, `_metadata`, `callerData`, `language_detection`, `splitOnStartLanguagePreparation`. |
| Identified every authoring style, alias, default, fallback? | pass | Single-line and block `SET`, `INITIAL`, branch `DO`, language path and template. |
| Distinguished optional from required sections? | pass | All optional. |
| Explained reasoning-layer guidance? | n/a | Deterministic initialization. |
| Avoided making a preferred pattern the only pattern? | pass | Concept table lists five options. |
| Could a customer build this another supported way? | pass | `before_agent` hook `SET`. Mentioned only as the earlier step. |
| Evidence if asked "are you not considering all scenarios?" | n/a | Variant map. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Seven-step order is exact. Language acceptance rules and refusal reasons are explicit. | None. |
| Senior content writer | ready | Option table first. Short sentences. No dashes. | None. |
| Product manager/customer enablement | ready | Readable-paths table, verification steps, new troubleshooting rows. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-read in 1.9.0. Corrected branch `DO:` ordering claim. | 5 |
| Depth of conceptual explanation | 4 | Seven-step order. Language acceptance rules. | 5 |
| Readability and usability | 5 | Bullets and short rows. | 5 |
| Coverage of examples | 4 | New `Language_Branch_Agent`. | 5 |
| Search and discovery quality | 4 | Added refusal reason names and `W380`, `W381`. | 4 |
| Completeness of workflow and failure modes | 4 | Refusal reasons, dropped `DO:` entries. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. | 4 |
| Scenario comprehensiveness | 4 | Every `yes` row covered or scoped out. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass (minimum 4)

## Doc discrepancies for human review

1. Published `.mdx` vs `articles/` draft: the `.mdx` has frontmatter, a back badge, and `yaml` code fences (`expandable=true` on blocks 1, 2, 3). It has no `## Related HowTos` section. Body text is otherwise identical.
2. The earlier article claimed the whole branch `DO:` list runs after the welcome. Code runs the prefix through the last language directive before it. The reference states the same rule. Fixed in the proposal.
3. Reference `memory-and-constraints.mdx` says `INITIAL` is "assigned when the session starts". The compiler still warns `W801` for an `INITIAL`-only variable. Consider noting this there.
4. Reference language section says a "reasoning agent with no FLOW" can resolve language at start. Code accepts the directive in any agent. It applies on a channel with a supported-language list, or when project language detection is on.
5. The Runtime Config "Language detection" setting is a project setting. Confirm the customer-facing name and the documented location before publishing.

## Open questions

- No end-to-end runtime run. Claims rely on code reading, repository tests, and compile validation.
- "The runtime sets `session.languageDetection` after a user message" comes from the session-value module and its turn ordering. It was not run.
- Confirm which caller-data key names channels send, so the `session.<name>` row can name them.
- `INITIAL` filling a missing variable on activation comes from `applySessionMemoryValues`. It was not run.
