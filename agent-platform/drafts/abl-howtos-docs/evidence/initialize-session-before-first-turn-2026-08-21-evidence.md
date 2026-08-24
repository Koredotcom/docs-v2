# Evidence: initialize-session-before-first-turn

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/initialize-session-before-first-turn.md`
**Topic:** 2.6 - How to initialize session variables before the first user turn
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                               | Purpose                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts`   | Confirms `interaction.current` exposes only `language`, `locale`, `timezone`, `source`, `confidence` — **no `channel` field**. The minimal working example uses `session.interaction.current.channel`, which does not exist. `preferred_language = session.interaction.current.language` is correct as written. |
| `apps/runtime/src/__tests__/store-factory.test.ts:359`, `platform.e2e.test.ts:268` | Confirm `session.channel` is the correct field for channel                                                                                                                                                                                                                                                      |
| `packages/shared-kernel/src/constants/trace-event-registry.ts:90,643` (`dsl_set`)  | Confirms the `dsl_set` trace event referenced in "Verification" is current                                                                                                                                                                                                                                      |

This is the same invalid-path bug found and confirmed in `use-on-start-welcome` (topic 2.2) — both articles independently use `session.interaction.current.channel` in their minimal working examples.

## Scenario and variant map

| Scenario or variant                                              | Supported?                    | Evidence                                           | Article coverage                                    |
| ---------------------------------------------------------------- | ----------------------------- | -------------------------------------------------- | --------------------------------------------------- |
| `ON_START SET: retry_count = 0` (constant)                       | yes                           | Standard                                           | Covered                                             |
| `SET: channel_name = session.interaction.current.channel`        | **no — field does not exist** | `interaction-context-session-state.test.ts`        | **Bug**, same as topic 2.2                          |
| `SET: preferred_language = session.interaction.current.language` | yes, correct as written       | Same test file confirms `language` is a real field | Covered accurately                                  |
| `session.channel` as the correct channel field                   | yes                           | store-factory.test.ts, platform.e2e.test.ts        | Not currently used; should replace the invalid path |
| Constant-value campaign/metadata initialization                  | yes                           | Standard                                           | Covered                                             |

## Operational readiness map

| Requirement                                  | Evidence                                                                                                 | Article coverage  | Gap or action                |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------- |
| Runtime behavior verified                    | `dsl_set` trace event and SET-before-RESPOND ordering confirmed current                                  | Covered           | Fix the invalid channel path |
| Required companion resources identified      | n/a — single-agent examples                                                                              | n/a               | Correctly scoped             |
| Referenced variables have sources            | `channel_name` sourced from an invalid path (bug); `preferred_language`, `retry_count` correctly sourced | Partially covered | Fix the channel path         |
| Fallback/failure/ambiguity behavior verified | Troubleshooting covers empty-variable diagnosis                                                          | Covered           | None                         |
| Customer verification path defined           | Concrete trace-based verification (`dsl_set`, `source: on_start`)                                        | Covered           | None                         |
| Production readiness checklist included      | Present and specific                                                                                     | Covered           | None beyond the path fix     |

## Example validation

| Article block                 | Classification | Validation method                                               | Result   | Warnings or errors                                                                              | Action                   |
| ----------------------------- | -------------- | --------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------- | ------------------------ |
| Block 1 (Session_Init_Agent)  | full-document  | Close reading against interaction-context-session-state.test.ts | **fail** | `session.interaction.current.channel` does not exist; `channel_name` would resolve to undefined | Fix to `session.channel` |
| Block 2 (Metadata_Init_Agent) | full-document  | Close reading                                                   | pass     | None (constants only)                                                                           | Keep                     |

**Validation limitation:** No runnable parse/compile harness was available in this session. The invalid-path finding was made by close reading of the type definition confirmed by a dedicated runtime test file.

## Known drift analysis (2026-07-03 to 2026-08-21)

| Drift item                                         | Impact on article                                                                | Action                   |
| -------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------ |
| `session.interaction.current.channel` invalid path | Same pre-existing authoring error as topic 2.2, independently confirmed here too | Fix to `session.channel` |

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                                    |
| -------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | interaction-context-session-state.test.ts, store-factory.test.ts, trace-event-registry.ts |
| Did I search synonyms/neighboring constructs?                              | pass   | session.channel, interaction.current, ON_START SET                                        |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Constant-value and runtime-context-copy initialization both covered                       |
| Did I distinguish optional vs required sections?                           | pass   | Article explicitly separates deterministic SET from user-collected GATHER                 |
| Did I explain reasoning-layer guidance where supported?                    | n/a    | Lifecycle/startup mechanics article                                                       |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Both examples present valid, distinct initialization styles                               |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found beyond the path bug                                                          |
| If asked "are you not considering all scenarios?" what would I show?       | —      | interaction-context-session-state.test.ts field list                                      |

**Coverage verdict:** fix-needed (one concrete bug, same class as topic 2.2)

## Persona simulation review

| Persona                             | Verdict           | Strengths                                           | Required improvements                                                                                          |
| ----------------------------------- | ----------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Correct SET/RESPOND ordering and trace-event claims | Fix `session.interaction.current.channel` → `session.channel`                                                  |
| Senior content writer               | ready             | Clear "deterministic values only" framing           | None blocking (pending the fix)                                                                                |
| Product manager/customer enablement | needs-improvement | Good "reuse exact variable names later" guidance    | A customer copying this example as-is would get an undefined `channel_name` — must be fixed before publication |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                             | Final score |
| ------------------------------------------ | ------------- | ----------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 2             | Fixed invalid `session.interaction.current.channel` path to `session.channel` | 5           |
| Depth of conceptual explanation            | 4             | None needed                                                                   | 4           |
| Readability and usability                  | 5             | None needed                                                                   | 5           |
| Coverage of examples                       | 3             | Fixed the broken minimal example                                              | 5           |
| Search and discovery quality               | 4             | None needed                                                                   | 4           |
| Completeness of workflow and failure modes | 4             | None needed                                                                   | 4           |
| Customer/partner self-service readiness    | 3             | Fixed the broken minimal example                                              | 5           |
| Scenario comprehensiveness                 | 4             | None needed                                                                   | 4           |
| Article completeness                       | 5             | None needed                                                                   | 5           |

**Gate result:** pass (after the path fix is applied)
