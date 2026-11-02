# Evidence: route-by-role-channel-language-state

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-by-role-channel-language-state.md`
**Published copy:** `agent-platform/abl/how-to/route-by-role-channel-language-state.mdx`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/route-by-role-channel-language-state-2026-11-01-review.md`
**Topic:** 3.3 - How to route users by role, channel, language, or session state
**Workflow:** Refresh against `release_Artemis_1.9.0` (HEAD `9b7b268cc61`). Previous scan: `hotfix_Artemis_1.8.1` (evidence 2026-10-20). The branches do not share a lineage, so the diff only located files. Every claim below was re-read in 1.9.0 source.
**Verdict:** update-needed

## Validation harness

- `validate.mjs` (`validateABL`) for ABL blocks. Scratch files in `.../scratchpad/t33/`.
- Real 1.9.0 `routing-primitive-executor.ts` and `null-safe-eval.ts` copied to `.../scratchpad/t33/rt/` and run with the real compiler evaluator (`evaluateRoutingPrimitiveWhen`, `nullSafeEvaluateCondition`). Only `pii-evaluation`, `@agent-platform/i18n`, and `piscina` were stubbed.
- IR dump (`ir.mjs`) for the supervisor in blocks 1 to 5.
- The code repo was not modified. Runtime services were not started. No end-to-end session ran.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/routing-executor.ts` (`checkDeterministicRouting`, ~26820) | Pre-route. Sorts `routing.rules` by `priority`, skips literal `true`, evaluates each with `evaluateRoutingPrimitiveWhen`, returns the first `deterministic_pass`. Needs `hasCoordinationExecutionRole`. |
| `apps/runtime/src/services/runtime-executor.ts` (~26540 to 26640) | Calls `checkDeterministicRouting` on each customer message before the reasoning loop. Skipped for `resume_intent` replay and autonomous resume. |
| `apps/runtime/src/services/execution/deterministic-handoff.ts` (~96 to 130) | Emits `deterministic_routing` with `target`, `condition`, `priority`. No `evaluatedContext`. |
| `apps/runtime/src/services/execution/routing-executor.ts` (~10817, ~11449) | `handoff_condition_check` is the model-selected route guard event. It carries `result`, `whenOutcome`, `evaluatedContext`. |
| `packages/compiler/src/platform/ir/compiler.ts` (~1739) | `routing.rules` from `doc.handoff`, `priority: idx + 1`. `PRIORITY:` is never compiled. IR dump confirms. |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | Outcome kinds. 1.9.0 adds comment masking (`maskConditionLineComments`, `isCommentOnlyCondition`). |
| `apps/runtime/src/services/execution/agent-execution-role.ts`, `reasoning-executor.ts` (~7044, ~18052) | `ROLE: router` allows only routing and clarification tools. An explicit router retries a text-only answer. Default supervisor has `direct_response_allowed: true`. |
| `apps/runtime/src/services/runtime-executor.ts` (`initialData` ~8891) | `session` namespace: caller data, `CallerContext` fields, then platform fields (`channel`, `sessionId`, ...). `omitLanguageDetectionValue` strips a caller-supplied `languageDetection`. |
| `apps/runtime/src/services/execution/personalization-context.ts` | Caller data flat keys. `session` and other reserved roots are guarded. |
| `apps/runtime/src/channels/manifest.ts` | Same keys as 1.8.1. Nine `isVoice: true` entries. |
| `apps/runtime/src/services/language-detection/` (`session-value.ts`, `turn-detection.ts`, `types.ts`, `status-mapper.ts`, `turn-admission.ts`) | New in 1.9.0 (ABLP-6522). Stores `session.languageDetection` before routing. Fields `status`, `reason`, `language`, `confidence`, `candidate`. |
| `apps/runtime/src/services/runtime-executor.ts` (~22342 to 22365) | Detection value stored, then the hook language early pass. This is before line 26558 (pre-route). |
| `apps/runtime/src/services/execution/hook-language-actions.ts`, `reasoning-executor.ts` (~14261) | `before_turn` `SET_INTERACTION_LANGUAGE` commits at the reasoning claim. This is after the pre-route check. |
| `apps/runtime/src/services/execution/interaction-language-override.ts` | With project detection on and no voice language list, any valid tag is accepted (ABLP-6522). Layer `dsl_override` ranks first in `interaction-context.ts`. |
| `packages/compiler/src/__tests__/ir/hook-interaction-language.test.ts` | Authoring form of the `before_turn` language actions. |
| `packages/compiler/src/platform/constructs/routing-condition-classifier.ts` | `isNaturalLanguageRoutingHint`. 1.9.0 normalizes comment trivia first. |
| `agent-platform/abl-reference/` (secondary) | Not re-read this round. Conflicts from 2026-10-20 still stand. |

## Drift analysis (1.8.1 to 1.9.0)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| Pre-route check | Code is unchanged in intent. The 2026-10-20 article did not describe it. It said the model chooses among true routes. | Article rewritten. First true expression route wins. This is a correction found in this refresh, not 1.9.0 drift. |
| `handoff_condition_check` for pre-routed routes | It is emitted only on the model-selected path. Pre-routed routes emit `deterministic_routing`. | Verification steps rewritten. |
| `PRIORITY:` | Ignored in 1.9.0 (IR priority is the position). | Statement kept. Cross-article conflict with 3.4 (see discrepancies). |
| Language detection (`session.languageDetection`) | New in 1.9.0. Project opt-in. Stored before the pre-route check. | New variation, table row, mistake row, troubleshooting row. |
| `SET_INTERACTION_LANGUAGE` in `HOOKS: before_turn` | New in 1.9.0. Commits after the pre-route check. Any valid tag accepted when detection is on and no voice list exists. | One paragraph. Route on `session.languageDetection` for same-message decisions. |
| Caller data into `session.*` | Unchanged. New guard blocks a caller-supplied `languageDetection` key. | Role guidance unchanged. |
| Comments in routing conditions | `//` outside quotes is a comment. A comment-only `WHEN` fails to compile (confirmed, harness `n7`). A trailing comment compiles clean (`n8`). | Article uses no comments in `WHEN`. No change. |
| Channel manifest | Same keys and nine voice types as 1.8.1. | None. |
| `IS NOT SET` on a dotted path | Evaluator result unchanged: false for null and for a missing path. | Statement kept. |
| Quoted phrase inside `AND` | Compiler warns `CEL_CONDITION_UNRESOLVED_CALL` (`n3`). Evaluator passes it when the first operand is true. | Statement kept. |
| `ENABLED_WHEN` | `ENABLED_WHEN_SEMANTIC_REFERENCE` still an error (`n1`). `routing-availability.ts` has no diff. | Statement kept. |
| `ON_RETURN` and `handoff_completed` | Both exist (`routing-executor.ts` ~10057, `handoff-completion-record.ts`). | Verification step added. |
| `UNKNOWN_HANDOFF_RETURN_FIELD` | Still reported for a reversed `map` (`n5`). | Statement kept. |
| `INVALID_HANDOFF_FAILURE_ACTION` | Still reported for a bare string (`n6`). | Statement kept. |
| 1.8.x hotfix backports | No behavior in the 2026-10-20 article depends on ABLP-6128 (behavior profile WHEN reading session variables). The article does not mention it. | None. |
| `executionFailureFallback` (ABLP-5739 follow-up, `deterministic-handoff.ts`) | Localizes the generic failure line for a failed handoff. Not authored in `ON_FAILURE`. | No change. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| `session.channel == "voice"` | yes | `deterministic_pass` with `session.channel` set. | covered |
| Voice family with `IN [...]` | yes | `deterministic_pass` for `voice_twilio`, fail for `web_chat`. Nine `isVoice` types. | covered |
| `channel.name`, `system.channel` in `WHEN` | no | `system.channel` gives `UNDEFINED_CONDITION_VAR` (`n2`). `channel.name` compiles with no warning (`n9`). | covered (mistakes) |
| `session.interaction.current.channel` | no | Type has no such field. | covered (concept) |
| Language `session.interaction.current.language == "es"` | yes | `deterministic_pass`, and fail for a missing or null value. | covered |
| Locale and time zone paths | yes | `deterministic_pass` for locale. | covered |
| Detected language `session.languageDetection.*` | yes | `deterministic_pass` for `detected` and `es`. Fail for missing value and for `low_confidence`. Compiles clean (block 8). | covered (new variation) |
| `SET_INTERACTION_LANGUAGE` hook override | yes | Test file and `hook-language-actions.ts`. Commits after pre-route. | covered (paragraph, no example) |
| `session.identityTier` | yes | Evaluator pass and fail. | covered |
| Role from caller data (`session.user_role`) | yes | Pass with tier 2. Fail with tier 0, with no role, and with a flat key outside `session`. | covered |
| Role from a lookup or `GATHER` | yes | Session variable path. | covered (table row) |
| State from a child return | yes | Block 9 compiles. `ON_RETURN` wired. Reversed `map` errors. | covered |
| Combined `AND`/`OR` conditions | yes | Evaluator pass. Block 6 compiles. | covered |
| Quoted phrase inside `AND` | no | Compiler warning. Evaluator passes it as true. | covered (warning) |
| `IS NOT SET` on a dotted path | no (unreliable) | Evaluator false for null and missing. | covered |
| `ENABLED_WHEN` by channel | yes | Block 10 compiles. | covered |
| Ties between true routes | yes | `checkDeterministicRouting` returns the first true route in position order. | covered (corrected) |
| `WHEN: true` fallback | yes | Skipped by pre-route. Reached by the model. `ROLE: router` retries a text answer. | covered (corrected) |
| `router` role | yes | `agent-execution-role.ts`, `reasoning-executor.ts`. Block 1 compiles. | covered |
| `ON_FAILURE` | yes | Block 11 compiles. Bare string errors. | covered |
| `PRIORITY:` | no | IR `priority: idx + 1`. `PRIORITY: 9` still yields 1. | covered (one sentence, mistake) |
| Behavior profiles by context | yes | Different feature. | out of scope: related article |
| Remote targets, `ASYNC` | yes | Parser. | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Real evaluator on sample contexts. Pre-route code read. Hook timing by code order. | covered | Not run end to end. |
| Required companion resources identified | Five-file project. Variation companions named. | covered | None. |
| Referenced variables have sources | Table "Values you can test". `session.user_role` labeled a project assumption. Detection value needs the project setting. | covered | None. |
| Fallback/failure/ambiguity behavior verified | `WHEN: true`, ordering, `ON_FAILURE`, `router` role, detection off. | covered | None. |
| Customer verification path defined | Seven steps. Events: `deterministic_routing`, `handoff_condition_check`, `language_detection`, `handoff_completed`. | covered | Channel value for a pre-routed route has no trace field. See open questions. |
| Production readiness checklist included | Nine items. | covered | None. |

## Example validation

Harness: `validate.mjs`. Blocks extracted by script from the proposed article. Variation snippets replace the entries of the block 1 supervisor, with a `WHEN: true` entry added, and are validated with the four stand-in agents.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 to 5 (supervisor plus four agents) | full-document set | `validate.mjs` together | pass | none | changed: `BEHAVIOR: ROLE: router` added to block 1 |
| Block 6 (combined channel and language) | section-snippet | Entries replaced, plus `Spanish_Voice_Agent` | pass | none | kept |
| Block 7 (locale) | section-snippet | Same, plus `Mexico_Service_Agent` | pass | none | kept |
| Block 8 (detected language) | section-snippet | Same | pass | none | new |
| Block 9 (state from a child return) | section-snippet | Same, plus `Language_Choice_Agent` | pass | `UNUSED_REQUIRED_GATHER_FIELD` in the harness stand-in child only. The article leaves the child to the reader. | kept |
| Block 10 (`ENABLED_WHEN`) | section-snippet | Same | pass | none | kept |
| Block 11 (`ON_FAILURE`) | section-snippet | Same | pass | none | kept |

Negative tests: `ENABLED_WHEN: intent.category == "voice"` gives `ENABLED_WHEN_SEMANTIC_REFERENCE`. `system.channel` gives `UNDEFINED_CONDITION_VAR`. A phrase inside `AND` gives `CEL_CONDITION_UNRESOLVED_CALL`. Reversed `map` gives `UNKNOWN_HANDOFF_RETURN_FIELD`. A bare `ON_FAILURE` string gives `INVALID_HANDOFF_FAILURE_ACTION`. `PRIORITY: 9` compiles and the IR priority stays 1. A comment-only `WHEN` fails to compile.

Evaluator results used in the article (real 1.9.0 `evaluateRoutingPrimitiveWhen`):

| Condition | Context | Result |
| --------- | ------- | ------ |
| `session.identityTier == 2 AND session.user_role == "admin"` | tier 2, role admin | `deterministic_pass` |
| Same | tier 0, or no role, or role outside `session` | `deterministic_fail` |
| `session.interaction.current.language == "es"` | `es`, or missing, or null | pass, fail, fail |
| `session.channel IN ["voice","voice_twilio"]` | `voice_twilio`, `web_chat` | pass, fail |
| `session.languageDetection.status == "detected" AND session.languageDetection.language == "es"` | detected `es`, no value, `low_confidence` | pass, fail, fail |
| `preferred_language IS NOT SET` | missing, `es` | pass, fail |
| `session.interaction.current.language IS NOT SET` | null, missing | fail, fail |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 2 | The published ordering and verification claims did not match `checkDeterministicRouting`. Rewritten from source and evaluator runs. Hook timing rests on code order. | 4 |
| Depth of conceptual explanation | 3 | Pre-route versus model path, `WHEN: true` and `router` role, detection fields. | 5 |
| Readability and usability | 4 | Kept structure. Short sentences. New field table. | 4 |
| Coverage of examples | 3 | New detected-language block. Router role in block 1. All blocks validated. | 4 |
| Search and discovery quality | 4 | Added detected language to the values table and troubleshooting. | 5 |
| Completeness of workflow and failure modes | 3 | Ordering, fallback, detection off, resume replay. | 4 |
| Customer/partner self-service readiness | 4 | Verification uses events that fire. Assumptions labeled. | 4 |
| Scenario comprehensiveness | 3 | Added detection and hook override. All `yes` rows covered or scoped out. | 4 |
| Article completeness | 5 | Template sections present. | 5 |

**Gate result:** pass (minimum score 4)

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, types, compiler, runtime, tests, and examples? | pass | See source table. Parser checked through the harness. |
| Did I search synonyms and neighboring constructs? | pass | `checkDeterministicRouting`, `routing.rules`, `languageDetection`, `SET_INTERACTION_LANGUAGE`, `interaction.current`, `identityTier`, `ENABLED_WHEN`, `ROLE: router`, `PRIORITY`. |
| Did I identify every authoring style, alias, default, and fallback? | pass | Expression, combined, `IN`, `WHEN: true`, `ENABLED_WHEN`, detection, hook override. |
| Did I separate helpers from executable configuration? | pass | `HANDOFF` and `ENABLED_WHEN` execute. The hook override is described, not required. |
| Did I explain how the reasoning layer uses guidance? | pass | Model path runs only when no expression route is true. |
| Did I avoid making one pattern the only one? | pass | Three guard styles. Profiles named as an alternative. |
| Could a customer build the scenario another supported way? | pass | Behavior profiles, `ON_START` branching, and flows are named or in related articles. |
| What evidence shows all scenarios are considered? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Correct pre-route order. Events match the code path. Hook timing stated. | None blocking. Channel value for a pre-routed route has no trace field. |
| Senior content writer | ready | Values table first. Short sections. New field table is compact. | None. |
| Product manager/customer enablement | ready | Seven verification steps. Detection-off behavior stated. | None. |

## Documentation discrepancies for human review

- Cross-article: 3.4 (`route-by-tool-result-or-memory`) says a `PRIORITY` value changes route order. In 1.9.0 and 1.8.1 `PRIORITY:` is ignored (`compiler.ts` ~1747). The 3.4 refresh fixes this. The published 3.4 page needs the same fix.
- The 2026-10-20 version of this article said the model chooses between true routes. `checkDeterministicRouting` returns the first true expression route before the model runs. The published page carries the old text.
- The 2026-10-20 verification named `handoff_condition_check` for a pre-routed route. That event fires only on the model path. Pre-routed routes emit `deterministic_routing`.
- Published `.mdx` differs from the draft in format only: frontmatter with `sidebarTitle`, a Back badge, `yaml` fences (the first one `expandable=true`), and no Related HowTos section. Text is otherwise identical.
- The published 1.3 article uses `ENABLED_WHEN: channel.name == "voice"`. `ENABLED_WHEN` reads session values, so the route would be disabled. Not re-checked this round.
- Public reference `multi-agent-and-supervisor.mdx` documents `ROUTING:` with `CONSTRAINTS: channels: [voice]`. The parser rejects `ROUTING:` with `E104`. Not re-checked this round.
- Compiler and runtime disagree on `a == "x" AND "phrase"`. The compiler warns it can never be true. The evaluator passes it. Engineering should reconcile.
- `IS NOT SET` is false for a null dotted path in the route evaluator. Engineering should confirm the intent.
- The `before_turn` language override commits after the pre-route check for a reasoning supervisor. If the pre-route fires, the pending commit is discarded at the handoff fork and the child commits on its own claim (`handoff-thread.integration.test.ts`). Product should confirm that authors expect this.

## Open questions

- Which `session.channel` strings do SDK channels send? `web` and `digital` are not manifest keys. A pre-routed route emits no event with the evaluated value. Only a model-called route shows `evaluatedContext`.
- The classifier sentence (no classifier without `intent.category` or `INTENTS:`) is carried over from the pipeline article and was not re-verified in 1.9.0.
- The customer-facing name of the project language detection setting is not in the source reviewed. The article says "the project setting for language detection".
- Hook timing for a flow-mode supervisor differs (`runtime-executor.ts` ~24771 claims before the flow step). The article covers a reasoning supervisor only.
- No end-to-end session run. Claims rely on code, repository tests, and the harness.
