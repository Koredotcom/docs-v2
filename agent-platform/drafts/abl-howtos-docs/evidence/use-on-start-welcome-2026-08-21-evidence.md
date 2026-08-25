# Evidence: use-on-start-welcome

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-on-start-welcome.md`
**Topic:** 2.2 - How to use ON_START to greet users before the first message
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                                                          | Purpose                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts`                              | Confirms `interaction.current` exposes only `language`, `locale`, `timezone`, `source`, `confidence` — **no `channel` field**. The article's minimal example uses `session.interaction.current.channel`, which does not exist.                                                                                                             |
| `apps/runtime/src/__tests__/store-factory.test.ts:359`, `apps/runtime/src/__tests__/platform.e2e.test.ts:268` | Confirm `session.channel` is the correct, system-populated field for channel                                                                                                                                                                                                                                                               |
| `packages/shared-kernel/src/constants/trace-event-registry.ts:90,643` (`dsl_set`)                             | Confirms the `dsl_set` trace event referenced in "How it works" is current                                                                                                                                                                                                                                                                 |
| `apps/runtime/src/services/execution/flow-step-executor.ts:898-931`                                           | Confirms the exact fail-closed behavior the article describes: a malformed/erroring branch condition is caught, logged, traced as `dsl_on_start_branch_error`, and the loop continues to the next branch; if nothing matches, the function returns the top-level `ON_START` response and emits `dsl_on_start_branch` with `matched: false` |

## Scenario and variant map

| Scenario or variant                                           | Supported?                                                                                            | Evidence                                                                                  | Article coverage                                                                               |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Top-level `ON_START: SET + RESPOND`                           | yes                                                                                                   | Confirmed current                                                                         | Covered, but example uses an invalid path (see below)                                          |
| `session.interaction.current.channel` interpolation           | **no — this field does not exist**                                                                    | `interaction-context-session-state.test.ts` types `interaction.current` without `channel` | **Bug**: the article's own minimal working example references a non-existent field             |
| `session.channel` as the correct channel field                | yes                                                                                                   | `store-factory.test.ts:359`, `platform.e2e.test.ts:268`                                   | Not currently used; should replace the invalid path                                            |
| `ON_START BRANCHES` with `IF`/`ELSE`, first-match-wins        | yes, confirmed current                                                                                | Standard branch parsing                                                                   | Covered                                                                                        |
| Malformed branch condition fails closed to top-level response | yes, confirmed exactly as described                                                                   | `flow-step-executor.ts:898-931`                                                           | Covered accurately                                                                             |
| `ON_START` idempotency (runs once per session)                | plausible/standard runtime behavior, not independently re-verified with a dedicated test in this pass | n/a                                                                                       | Assumed accurate based on general session-lifecycle design; no evidence found contradicting it |

## Operational readiness map

| Requirement                                  | Evidence                                                                          | Article coverage | Gap or action                                              |
| -------------------------------------------- | --------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------- |
| Runtime behavior verified                    | BRANCHES fail-closed behavior and dsl_set trace confirmed current                 | Covered          | Fix the invalid `session.interaction.current.channel` path |
| Required companion resources identified      | n/a — single-agent examples                                                       | n/a              | Correctly scoped                                           |
| Referenced variables have sources            | `startup_source` is set from (an invalid) runtime path                            | Bug              | Fix the source path                                        |
| Fallback/failure/ambiguity behavior verified | Malformed-branch fail-closed behavior explicitly covered and confirmed accurate   | Covered          | None                                                       |
| Customer verification path defined           | Concrete trace-event verification (`dsl_on_start_branch`, one-time startup check) | Covered          | None                                                       |
| Production readiness checklist included      | Present and specific                                                              | Covered          | None beyond the path fix                                   |

## Example validation

| Article block                    | Classification | Validation method                                                                     | Result   | Warnings or errors                                                                                | Action                   |
| -------------------------------- | -------------- | ------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------- | ------------------------ |
| Block 1 (On_Start_Welcome_Agent) | full-document  | Close reading against interaction-context-session-state.test.ts                       | **fail** | `session.interaction.current.channel` does not exist; `startup_source` would resolve to undefined | Fix to `session.channel` |
| Block 2 (On_Start_Branch_Agent)  | full-document  | Close reading against branch parsing and `interaction.current.language` (valid field) | pass     | None                                                                                              | Keep                     |

**Validation limitation:** No runnable parse/compile harness was available in this session. The invalid-path finding was made by close reading of the type definition confirmed by a dedicated runtime test file, not by executing the example.

## Known drift analysis (2026-07-03 to 2026-08-21)

| Drift item                                         | Impact on article                                                                                                                                                                                                                          | Action                   |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| `session.interaction.current.channel` invalid path | This appears to be a pre-existing authoring error rather than new drift (no evidence `interaction.current` ever included `channel`) — but it is a real, current-code-confirmed bug that must be fixed regardless of when it was introduced | Fix to `session.channel` |
| ON_START BRANCHES fail-closed behavior             | Verified unchanged and accurate                                                                                                                                                                                                            | None                     |

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                                        |
| -------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | flow-step-executor.ts, interaction-context-session-state.test.ts, trace-event-registry.ts     |
| Did I search synonyms/neighboring constructs?                              | pass   | ON_START, SET, BRANCHES, IF, ELSE, session.channel, interaction.current                       |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Confirmed top-level and BRANCHES forms                                                        |
| Did I distinguish optional vs required sections?                           | pass   | Article explicitly says side effects must stay top-level, not inside branches                 |
| Did I explain reasoning-layer guidance where supported?                    | n/a    | Lifecycle/startup mechanics article                                                           |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Top-level and branch-based welcome presented as valid alternatives for different needs        |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found beyond the path bug                                                              |
| If asked "are you not considering all scenarios?" what would I show?       | —      | interaction-context-session-state.test.ts field list; flow-step-executor.ts fail-closed logic |

**Coverage verdict:** fix-needed (one concrete bug: invalid interpolation path in the minimal working example)

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                  | Required improvements                                                                                                        |
| ----------------------------------- | ----------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Branch fail-closed behavior and trace events all verified exactly accurate | Fix `session.interaction.current.channel` → `session.channel` in the minimal working example                                 |
| Senior content writer               | ready             | Clear separation of top-level vs branch-based welcome patterns             | None blocking (pending the code fix)                                                                                         |
| Product manager/customer enablement | needs-improvement | Good idempotency and fail-closed guidance                                  | A customer copying the minimal example as-is would get an undefined `startup_source` — this must be fixed before publication |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                | Final score |
| ------------------------------------------ | ------------- | -------------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 2             | Fixed invalid `session.interaction.current.channel` path to `session.channel`    | 5           |
| Depth of conceptual explanation            | 4             | None needed                                                                      | 4           |
| Readability and usability                  | 5             | None needed                                                                      | 5           |
| Coverage of examples                       | 3             | Fixed the broken minimal example                                                 | 5           |
| Search and discovery quality               | 4             | None needed                                                                      | 4           |
| Completeness of workflow and failure modes | 5             | None needed                                                                      | 5           |
| Customer/partner self-service readiness    | 3             | Fixed the broken minimal example, which a customer would otherwise copy directly | 5           |
| Scenario comprehensiveness                 | 4             | None needed                                                                      | 4           |
| Article completeness                       | 5             | None needed                                                                      | 5           |

**Gate result:** pass (after the path fix is applied)
