# Evidence: use-on-start-welcome

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-on-start-welcome.md`
**Topic:** 2.2 - How to use ON_START to greet users before the first message
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. Previous refresh: 2026-08-21 (`hotfix_Artemis_1.4.4`).
**Code repo:** `/Users/Prabhat.Singh/Documents/GitHub/artimus-bitbucket-src/abl-platform` (read only).
**Validation harness:** scratchpad `.../scratchpad/h2/` (`build.mjs`, `entry.ts` for `validateABL`, `ir.ts` for IR dumps, `cond.ts` for `evaluateConditionDual`).

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` `parseOnStart` (9576-9700) | Cases: `respond`, `message_key`, `voice`, `formats`, `actions`, `branches`, `call`, `set`, `set_interaction_language`, `clear_interaction_language`, `delegate`, `handoff`. `with` and `as` outside `CALL` give `E203`. A sibling `when` gives `W496`. |
| `agent-based-parser.ts` `parseOnStartBranches` (9377-9480) | Branch grammar `IF`, `ELSE`, `CONDITION`. A branch `set`, `call`, `delegate`, `then`, `with`, `as`, `clear` gives `E380`. A branch `handoff` gives `W385`. `do` goes to `parseOnStartBranchDoBlock`. |
| `agent-based-parser.ts` `parseOnStartBranchDoBlock` (9486-9522) | Keeps `SET`, `CALL`, `HANDOFF`, language actions. Drops `RESPOND`, `DELEGATE`, `GOTO`, `TRANSITION`, `THEN`, `COMPLETE`, `CLEAR`, `LOG` with `W381`. |
| `packages/core/src/parser/on-start-do-block.ts`, `call-with-block.ts`, `interaction-language-value.ts` | New in 1.8. `DO` entry rules, nested `WITH` blocks, literal or dynamic language values. |
| `packages/compiler/src/platform/ir/on-start-diagnostics.ts` | `ON_START_BRANCH_DO_ACTIVATED`, `ON_START_HANDOFF_ACTIVATED`, `ON_START_HANDOFF_UNREACHABLE`, `ON_START_DELEGATE_WITH_HANDOFF`, `ON_START_HANDOFF_TARGET_INVALID`. All warnings. |
| `packages/compiler/src/platform/ir/session-variable-names.ts` | `ON_START` `SET` keys and branch `DO` `SET` and `CALL AS` names count as session variables. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` `executeOnStart` (13652-14050) | Order: refresh PII context, `dsl_on_start` trace, `SET` (`dsl_set`, `source: on_start`), `CALL` with `WHEN` guard, top-level language directive, branch selection, `DO` language prefix, welcome render and emit, `DO` remainder or handoff, `DELEGATE`. |
| `flow-step-executor.ts` `selectOnStartResponseConfig` (1229-1310) | First matching branch wins. Evaluation error emits `dsl_on_start_branch_error` and moves to the next branch. No match emits `dsl_on_start_branch` with `matched: false` and returns the top-level response config. |
| `apps/runtime/src/services/runtime-executor.ts` `initializeSession` (9064-9790) | `session.initialized` guard makes it idempotent. Memory recall and interaction refresh run before `ON_START`. Branch welcome with renderable payload returns before the entry flow step. |
| `apps/runtime/src/services/execution/runtime-expression-context.ts` and `runtime-executor.ts` 8264-8290 | `session.channel` is a platform field set to the channel type, or `digital`. Caller data spreads into the `session` namespace. |
| `apps/runtime/src/services/execution/interaction-context.ts` 977-1016 | Writes `session.interaction.current.*` and aliases before `ON_START`. |
| `apps/runtime/src/services/execution/lifecycle-call-condition.ts` | `CALL` `WHEN` fails closed and emits `dsl_lifecycle_call_condition`. |
| Tests: `on-start-branch-interaction-context.test.ts`, `lifecycle-call-when.test.ts`, `on-start-language-runtime.test.ts`, `on-start-session-idempotency.e2e.test.ts`, `on-start-rich-content.e2e.test.ts` | Same constructs in runnable form: `SET` from `session.interaction.current.language`, branch on a `SET` value, guarded `CALL`, once-per-session, `DELEGATE` on start. |

## Drift analysis (1.4.4 to 1.8.1)

| Area | Change | Article impact |
| ---- | ------ | -------------- |
| Branch `DO:` lists | New. Branch can run `SET`, `CALL`, `HANDOFF` after the welcome. | The old claim "branches cannot run `SET`, `CALL`, or `DELEGATE`" is incomplete. Added a `DO` section. `DELEGATE` stays top-level only. |
| Start-time handoff | New top-level and branch `HANDOFF`. | Added a short pointer and the target-declaration rule. Full treatment belongs to 2.5. |
| `CALL` `WHEN` guard | New. Fails closed. | Covered in 2.3. Mentioned in the `CALL` row of the part table and in mistakes. |
| `SET_INTERACTION_LANGUAGE`, `CLEAR_INTERACTION_LANGUAGE` | New. | Added to the part table. Not expanded: belongs to channel-specific welcome (2.7). |
| `ON_START` `DELEGATE` | Now runs through the normal delegate path with failure policy (ABLP-5153 D9). | Listed as part 7. |
| New diagnostics | `E380`, `E203`, `W381`, `W496`, `ON_START_*` | Added to mistakes and troubleshooting. Harness reproduces each. |
| Eager and lazy start | Present in 1.4.4. A lazy start drops the welcome text. The old article never said so. | Added one sentence in Concept. Full rules are in 2.1. |
| Channel contract | `a365` and `workflow` channels added. Both suppress the welcome. | Pointer to 2.1. |
| `session.channel` | Still valid. Value is the channel type, for example `web_chat`. | Example 1 keeps `session.channel`. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Top-level `SET` then `RESPOND` | yes | `executeOnStart`; `fin/2.2-b1.abl` | covered |
| Top-level `CALL` with `WITH`, `AS`, `WHEN` | yes | parser `call` case; `lifecycle-call-condition.ts` | covered in part table and mistakes; full example in 2.3 |
| `BRANCHES` with `IF` and `ELSE` | yes | `selectOnStartResponseConfig` | covered |
| `CONDITION:` as alias of `IF:` | yes | regex `(IF\|ELSE\|CONDITION)` | not shown: the reference names it. Low value. |
| No branch matches, top-level `RESPOND` used | yes | `selectOnStartResponseConfig` returns top-level config | covered |
| No branch matches, no top-level `RESPOND` | yes | `renderOnStartResponse` returns undefined | covered |
| Branch condition error skips the branch | yes | `dsl_on_start_branch_error` | covered |
| Branch `DO` with `SET`, `CALL`, `HANDOFF`, language | yes | `on-start-do-block.ts` | covered (SET example; others named) |
| Branch `SET` or `CALL` directly | no, error `E380` | parser | covered as mistake |
| `DO` drops `RESPOND`, `DELEGATE` with `W381` | yes | harness `ex/w381.abl` | covered |
| Top-level `HANDOFF` and branch handoff | yes | `on-start-handoff.ts`, `on-start-diagnostics.ts` | pointer to 2.5 |
| Top-level `DELEGATE` | yes | `executeOnStart` delegate block; `on-start-rich-content.e2e.test.ts` | covered in one sentence |
| Interaction language directives | yes | `parseInteractionLanguageValue` | part table; detail in 2.7 |
| `ON_START` runs once | yes | `initializeSession` guard | covered |
| `session.interaction.current.language` before `ON_START` | yes | `runtime-executor.ts` 9485 then 9623 | covered |
| `session.channel` | yes | `runtime-executor.ts` 8264-8290 | covered |
| Plain-English branch `IF` | no | harness: evaluates false; compile warns `MISSING_VARIABLE_PRODUCER_WARNING` for each word | covered as mistake |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code read for order, branch selection, idempotency. No end-to-end run. | covered | none |
| Required companion resources identified | Examples use no tools or agents. Handoff pointer states the declaration rule. | covered | none |
| Referenced variables have sources | `startup_source` from `SET`; `session.channel` and `session.interaction.current.language` from the runtime; `entry_source` read by later turns | covered | none |
| Fallback, failure, ambiguity behavior verified | No match, branch error, lazy start | covered | none |
| Customer verification path defined | Six steps with trace names | covered | none |
| Production readiness checklist included | Present | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Published block 1 (On_Start_Welcome_Agent) | full-document | parse + compile | pass | none | replaced: entry step used `RESPOND` then `THEN: COMPLETE`, so the session ended during startup |
| Published block 2 (On_Start_Branch_Agent) | full-document | parse + compile | pass | none | replaced: the `ready` step completed the session on the first message |
| New block 1 (On_Start_Welcome_Agent) | full-document | parse + compile | pass | none | kept |
| New block 2 (On_Start_Branch_Agent) | full-document | parse + compile | pass | none | kept |
| New block 3 (On_Start_Do_Agent) | full-document | parse + compile | pass | 2 informational `ON_START_BRANCH_DO_ACTIVATED` | kept. Intentional: the diagnostics confirm each `DO` list runs at start. The article explains them. |
| Negative checks | n/a | harness | `E380` (branch `SET`), `E203` (`WITH`/`AS` beside `CALL`), `W496` (`WHEN` beside `CALL`), `W381` (`RESPOND` in `DO`) reproduced | n/a | cited in mistakes and troubleshooting |

Condition checks with `evaluateConditionDual`: `session.interaction.current.language == "fr"` is true for language `fr` and false when the namespace is empty. A plain-English condition returns false.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighbors? | pass | `ON_START`, `on_start`, `BRANCHES`, `DO`, `HANDOFF`, `DELEGATE`, `CONDITION`, `SET_INTERACTION_LANGUAGE`. |
| Every authoring style, alias, default, fallback? | pass | `CONDITION` alias recorded as not shown. |
| Optional versus required? | pass | Every part optional. |
| Free-form guidance? | n/a | |
| Preferred pattern presented as the only one? | pass | Top-level, branches, `DO`, handoff and delegate all named. |
| Another supported way not mentioned? | pass | Language directives and `MESSAGE_KEY` named in the part table. |
| Lesson 1: bare quoted natural-language condition | pass | In `ON_START` branches it evaluates false, not truthy. The runtime strips wrapping quotes and evaluates the text as an expression. Mistake row added. |
| Lesson 2: channel value path | pass | `session.channel` is correct inside `ON_START`. `channel.name` is for behavior-profile `WHEN`. `system.channel` is for escalation routing entries (`escalation-routing-validation.ts`). The article states `session.channel` and notes that profiles use `channel.name`. |
| Lesson 3: quoted values ignored | n/a | No timeouts. |
| Lesson 4: HANDOFF history default | n/a | Handoff is a pointer only. |
| Lesson 5: ESCALATE | n/a | |
| Lesson 6: settings compiled | pass | IR dump of `ex/v2.abl` shows `call_spec`, `call_when`, `branches`. |
| Lesson 7: trace names emitted | pass | `dsl_on_start`, `dsl_set`, `dsl_on_start_branch`, `dsl_on_start_branch_error`, `dsl_respond`, `dsl_on_start_skipped` all appear in `flow-step-executor.ts` and the registry. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Execution order table matches `executeOnStart`. Branch ownership and `DO` rules are accurate. | None. |
| Senior content writer | ready | Table first, then short examples. Mistakes map to real diagnostics. | None. |
| Product manager/customer enablement | ready | Customers can diagnose `E380`, `E203`, `W381`, and `W496` without escalation. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Order table, diagnostics, harness results | 5 |
| Depth of conceptual explanation | 3 | Part table with order; branch ownership | 5 |
| Readability and usability | 4 | Tables, short sentences | 5 |
| Coverage of examples | 3 | Replaced session-ending examples; added `DO` example | 4 |
| Search and discovery quality | 4 | Diagnostic codes in headings and tables | 5 |
| Completeness of workflow and failure modes | 3 | No-match, branch error, lazy start | 4 |
| Customer/partner self-service readiness | 4 | No repo paths in article | 5 |
| Scenario comprehensiveness | 3 | All `yes` rows covered or scoped to 2.3, 2.5, 2.7 | 4 |
| Article completeness | 4 | Related HowTos added | 5 |

**Gate result:** pass. Minimum score 4.

## Doc discrepancies for human review

| Item | Detail |
| ---- | ------ |
| Published example flaw | Both published examples used flow steps that complete the session. See the 2.1 evidence for the list of other affected articles. |
| Published claim removed | "Do not use `SET`, `CALL`, or `DELEGATE` inside branches" was true for direct branch fields only. 1.8 adds the `DO` list. |
| Code versus reference | `lifecycle-and-hooks.mdx` says `ON_START_HANDOFF_TARGET_INVALID` is a compile error. Code and harness give a warning. Follow code. |
| Reference omission | The `ON_START properties` table lacks `HANDOFF`, `DO`, `SET_INTERACTION_LANGUAGE`, `CLEAR_INTERACTION_LANGUAGE`. |
| Reference wording | `lifecycle-and-hooks.mdx` lists `RICH_CONTENT` for the property and says the `.agent.abl` keyword is `FORMATS:`. The parser also accepts `RICH_CONTENT:` under `RESPOND` (harness). |
| Reference claim | The reference says a malformed branch condition "fails closed and falls back to top-level `ON_START` response". Code skips the branch and tries the next one, then falls back to the top-level response after the last branch. The behavior matches only when the bad branch is the last. |
| Earlier article claim | The 2026-08-21 article said a malformed condition "falls back to the top-level `ON_START` response". Rewritten to match code. |

## Open questions

- `session.interaction.current.language` holds a language code such as `fr`. The value depends on the channel hint and the agent default language. Confirm which channels set it before the first message.
- Confirm that the `DO` list `SET` values appear in the trace as `dsl_set`. The code path for list execution (`runOnStartList`) was not read in full.
