# Evidence: use-on-start-welcome

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-on-start-welcome.md`
**Published copy:** `agent-platform/abl/how-to/use-on-start-welcome.mdx`
**Topic:** 2.2 - How to use ON_START to greet users before the first message
**Workflow:** Refresh against `release_Artemis_1.9.0`. Previous scan: 2026-10-20 (`hotfix_Artemis_1.8.1`).
**Code repo:** `/Users/Prabhat.Singh/Documents/GitHub/artimus-bitbucket-src/abl-platform` (read only).
**Validation harness:** `node .../scratchpad/harness/validate.mjs <file.abl>`, run from `/tmp`. Scratch files in `.../scratchpad/welcome/`.
**Branch caveat:** `release_Artemis_1.9.0` does not descend from `hotfix_Artemis_1.8.1`. The diff located changes only. Every claim was re-read in 1.9.0.

## Source files inspected (1.9.0)

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` `parseOnStart` (10443), `parseOnStartBranches` (10244), `parseOnStartBranchDoBlock` (10353), `parseOnStartHandoff` (10396) | Cases `respond`, `message_key`, `voice`, `formats`, `actions`, `branches`, `call`, `with`/`as` (`E203`), `when` (`W496`), `set` (`E393` when empty), language directives (`E394`, `E395`), `delegate`, `handoff`. Text diffed against 1.8.1: identical. |
| `packages/core/src/parser/on-start-do-block.ts`, `call-with-block.ts`, `interaction-language-value.ts` | `DO` entry rules. No diff against 1.8.1. |
| `packages/compiler/src/platform/ir/on-start-diagnostics.ts` | `ON_START_BRANCH_DO_ACTIVATED`, `ON_START_HANDOFF_ACTIVATED`, `ON_START_HANDOFF_UNREACHABLE`, `ON_START_DELEGATE_WITH_HANDOFF`, `ON_START_HANDOFF_TARGET_INVALID` (warning, line 186). No diff. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` `executeOnStart` (14628-15080) | Order: PII refresh, `dsl_on_start`, `SET`, `CALL` with `WHEN`, top-level language directive, branch selection, `DO` language prefix, welcome render and emit, `DO` remainder or handoff, `DELEGATE`. Byte-identical to 1.8.1. |
| `flow-step-executor.ts` `selectOnStartResponseConfig` (1338-1430) | First match wins. Error emits `dsl_on_start_branch_error` and tries the next branch. No match emits `dsl_on_start_branch` with `matched: false` and returns the top-level config. |
| `flow-step-executor.ts` delegate block in `executeOnStart` | Runs through `routing.handleDelegate` with `availabilityRoute: 'on_start'` and `whenNotMet: 'skip'`. A failed or refused delegate returns the starter plus the failure and owns the startup turn. |
| `apps/runtime/src/services/runtime-executor.ts` `initializeSessionOwned` (9839-10450) | Idempotent guard. Delegate, handoff, escalate results return before the entry step (10316-10330). Branch welcome with a renderable payload owns the turn (10331). |
| `runtime-executor.ts` lazy block (24410-24500) | Inbound message suppresses the welcome. |
| `apps/runtime/src/websocket/sdk-handler.ts` (3613-3650) | Web SDK initial message makes the start lazy. |
| `apps/runtime/src/services/execution/lifecycle-call-condition.ts` | `CALL` `WHEN` fails closed. 1.9.0 adds a comment only. |
| Tests: `on-start-branch-interaction-context.test.ts`, `on-start-language-runtime.test.ts`, `on-start-rich-content.e2e.test.ts`, `on-start-session-idempotency.e2e.test.ts` | Present in 1.9.0. |

## Drift analysis (1.8.1 to 1.9.0)

| Area | Change | Article impact |
| ---- | ------ | -------------- |
| Parser (`parseOnStart`, branches, `DO`, handoff) | No change. | None. |
| Diagnostics | No change in `on-start-diagnostics.ts` or `on-start-do-block.ts`. | None. |
| `executeOnStart` | No change. | None. |
| `CALL` `WHEN` | Comment only. | None. |
| `on-start-handoff.ts` | Failure result carries `executionFailureFallback` (ABLP-5739). | None for 2.2. Belongs to 2.5. |
| Hotfix-only commits on 1.8.1 | `1b7886a6fea` (KoreVG listener after protected welcome). Original fix is in 1.9.0. | None. |
| Published article gaps found (not release changes) | No mention of `E393`. No statement of how a failed `DELEGATE` affects the startup turn. Troubleshooting for "no welcome" omits the Web SDK initial message. | Added. See the review. |

No behavior in the published article comes from a 1.8.x hotfix backport that is missing in 1.9.0.

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Top-level `SET` then `RESPOND` | yes | `executeOnStart`; harness block 1 | covered |
| Empty `SET` or name with no value | no, error `E393` | harness `neg7.abl`, `neg8.abl` | covered (added) |
| Top-level `CALL` with `WITH`, `AS`, `WHEN` | yes | parser `call` case | covered in part table and mistakes; full example in 2.3 |
| `WITH` or `AS` beside `CALL` | no, error `E203` | harness `neg2.abl` | covered |
| `WHEN` beside `CALL` | ignored, warning `W496` | harness `neg5.abl` | covered |
| `BRANCHES` with `IF` and `ELSE` | yes | `selectOnStartResponseConfig`; harness block 2 | covered |
| `CONDITION:` as alias of `IF:` | yes | parser regex `(IF\|ELSE\|CONDITION)` | not shown. Low value. |
| No branch matches, top-level `RESPOND` used | yes | `selectOnStartResponseConfig` | covered |
| No branch matches, no top-level `RESPOND` | yes | `renderOnStartResponse` returns undefined | covered |
| Branch condition error skips the branch | yes | `dsl_on_start_branch_error` | covered |
| Branch `DO` with `SET`, `CALL`, `HANDOFF`, language | yes | `on-start-do-block.ts`; harness block 3 | covered |
| Branch `SET` or `CALL` directly | no, error `E380` | harness `neg1.abl` | covered |
| `DO` drops `RESPOND`, `DELEGATE` with `W381` | yes | harness `neg3.abl` | covered |
| Top-level `HANDOFF` and branch handoff | yes | `on-start-handoff.ts`; harness `neg6.abl` (`ON_START_HANDOFF_ACTIVATED`, `ON_START_HANDOFF_TARGET_INVALID`) | pointer to 2.5 |
| Top-level `DELEGATE` | yes | `executeOnStart` delegate block | covered (failure and skip rules added) |
| Interaction language directives | yes | `parseInteractionLanguageValue` | part table; detail in 2.7 |
| `ON_START` runs once | yes | `initializeSessionOwned` guard | covered |
| `session.interaction.current.language` before `ON_START` | yes | `initializeSessionOwned` refresh before `executeOnStart` | covered |
| `session.channel` | yes | runtime expression context | covered |
| Plain-English branch `IF` | no | harness `neg4.abl`: 5 `MISSING_VARIABLE_PRODUCER_WARNING`; runtime evaluates false | covered as mistake |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Order, branch selection, idempotency, delegate failure read in 1.9.0. No end-to-end run. | covered | none |
| Required companion resources identified | Examples use no tools or agents. Handoff and delegate text states the declaration rule. | covered | none |
| Referenced variables have sources | `startup_source` from `SET`; `session.channel` and `session.interaction.current.language` from the runtime; `entry_source` read by later turns. | covered | none |
| Fallback, failure, ambiguity behavior verified | No match, branch error, lazy start, failed delegate. | covered | none |
| Customer verification path defined | Seven steps with trace names. | covered | none |
| Production readiness checklist included | Present. | covered | none |

## Example validation

Harness: `validate.mjs` (parse, compile, cross-agent validation). Blocks unchanged from the 2026-10-20 draft.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (On_Start_Welcome_Agent) | full-document | parse + compile | pass | none | kept |
| Block 2 (On_Start_Branch_Agent) | full-document | parse + compile | pass | none | kept |
| Block 3 (On_Start_Do_Agent) | full-document | parse + compile | pass | 2 informational `ON_START_BRANCH_DO_ACTIVATED` | kept. Intentional. The article explains them. |
| Negative checks | n/a | harness `neg1` to `neg8` | `E380`, `E203`, `W381`, `W496`, `E393`, plain-English `IF` warnings, handoff target warning reproduced | n/a | cited in mistakes and troubleshooting |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighbors? | pass | `ON_START`, `on_start`, `BRANCHES`, `DO`, `HANDOFF`, `DELEGATE`, `CONDITION`, `SET_INTERACTION_LANGUAGE`, `E393`. |
| Every authoring style, alias, default, fallback? | pass | `CONDITION` alias recorded as not shown. |
| Optional versus required? | pass | Every part optional. |
| Free-form guidance? | n/a | |
| Preferred pattern presented as the only one? | pass | Top-level, branches, `DO`, handoff, delegate all named. |
| Another supported way not mentioned? | pass | Language directives and `MESSAGE_KEY` in the part table. |
| Lesson 1: bare quoted natural-language condition | pass | Evaluates false in `ON_START` branches. Mistake row exists. |
| Lesson 2: channel value path | pass | `session.channel` is correct in `ON_START`. Profiles use `channel.name`. |
| Lesson 3: quoted values ignored | n/a | |
| Lesson 4: HANDOFF history default | n/a | Pointer only. |
| Lesson 5: ESCALATE | n/a | A delegate that escalates owns the startup turn (`initializeSessionOwned` 10316). Article says failed or refused delegate. |
| Lesson 6: settings compiled | pass | Blocks compile. |
| Lesson 7: trace names emitted | pass | `dsl_on_start`, `dsl_set`, `dsl_on_start_branch`, `dsl_on_start_branch_error`, `dsl_respond`, `dsl_on_start_skipped` in `flow-step-executor.ts`. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Order table matches `executeOnStart`. Delegate failure rule matches `initializeSessionOwned`. | None. |
| Senior content writer | ready | Table first, short examples, mistakes map to diagnostics. | None. |
| Product manager/customer enablement | ready | Customers can diagnose `E380`, `E203`, `E393`, `W381`, `W496` without escalation. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-verified in 1.9.0; added `E393`, delegate rules. | 5 |
| Depth of conceptual explanation | 4 | Delegate failure and skip rules. | 5 |
| Readability and usability | 5 | Kept structure. | 5 |
| Coverage of examples | 4 | Blocks and negatives validated. | 4 |
| Search and discovery quality | 4 | `E393` in table. | 5 |
| Completeness of workflow and failure modes | 4 | Failed delegate; Web SDK lazy start. | 5 |
| Customer/partner self-service readiness | 5 | No repo paths in article. | 5 |
| Scenario comprehensiveness | 4 | All `yes` rows covered or pointed to 2.3, 2.5, 2.7. | 4 |
| Article completeness | 5 | All template parts present. | 5 |

**Gate result:** pass. Minimum score 4.

## Doc discrepancies for human review

| Item | Detail |
| ---- | ------ |
| Published `.mdx` versus draft | `.mdx` adds frontmatter, a Badge, `yaml` fences, and drops `Related HowTos`. Prose is identical. Port the edits into the `.mdx`. |
| Reference severity | `lifecycle-and-hooks.mdx` calls `ON_START_HANDOFF_TARGET_INVALID` a compile error. Code gives a warning. Follow code. |
| Reference property table | `ON_START properties` omits `HANDOFF`, `DO`, `SET_INTERACTION_LANGUAGE`, `CLEAR_INTERACTION_LANGUAGE`. |
| Reference `DELEGATE` claim | The reference says `DELEGATE` in an `ON_START` list is dropped. That matches the `DO` list. A top-level `DELEGATE` runs. The reference table also omits `DELEGATE` behavior details. |
| Reference branch-error claim | The reference says a malformed branch condition falls back to the top-level response. Code tries the next branch first. |
| Reference start table | The reference lists LiveKit as lazy. The channel contract lists `voice_livekit` as `on_start`. Effective behavior is lazy because LiveKit sends each utterance through `executeMessage`. |
| Entry steps that end the session | See the 2.1 evidence. Other articles use `RESPOND` then `THEN: COMPLETE` in entry steps. |

## Open questions

- Confirm which channels set `session.interaction.current.language` before the first message.
- Confirm that `DO` list `SET` values appear in the trace as `dsl_set`. `runOnStartList` was not read in full.
