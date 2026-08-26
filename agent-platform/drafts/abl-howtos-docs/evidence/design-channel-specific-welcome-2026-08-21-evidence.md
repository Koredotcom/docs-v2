# Evidence: design-channel-specific-welcome

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-channel-specific-welcome.md`
**Topic:** 2.7 - How to design channel-specific welcome experiences
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                                                         | Purpose                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts`                             | Confirms `interaction.current` has no `channel` field — this is the **third** article in this batch (after topics 2.2 and 2.6) with the identical `session.interaction.current.channel` bug, and this one is the most consequential since the whole example's branching logic depends on `channel_name` |
| `apps/runtime/src/__tests__/store-factory.test.ts:359`, `platform.e2e.test.ts:268`                           | Confirm `session.channel` is the correct field                                                                                                                                                                                                                                                          |
| `packages/core/src/parser/agent-based-parser.ts:7762-7847` (VOICE sub-block: SSML, INSTRUCTIONS, PLAIN_TEXT) | Confirms `VOICE: PLAIN_TEXT: "..."` is current, valid syntax                                                                                                                                                                                                                                            |
| `packages/shared-kernel/src/constants/trace-event-registry.ts:93` (`dsl_on_start_skipped`)                   | Confirms the trace event referenced in "Verification" is current                                                                                                                                                                                                                                        |

## Scenario and variant map

| Scenario or variant                                            | Supported?                    | Evidence                                    | Article coverage                                                                                                        |
| -------------------------------------------------------------- | ----------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `SET: channel_name = session.interaction.current.channel`      | **no — field does not exist** | Same bug as topics 2.2 and 2.6              | **Bug**, more consequential here since the entire voice/text branch selection depends on this value resolving correctly |
| `session.channel` as the correct field                         | yes                           | store-factory.test.ts, platform.e2e.test.ts | Should replace the invalid path                                                                                         |
| `ON_START BRANCHES` with `VOICE`/`FORMATS` payloads per branch | yes, confirmed current        | agent-based-parser.ts VOICE sub-block       | Covered accurately                                                                                                      |
| `dsl_on_start_skipped` trace for suppressed channels           | yes, confirmed current        | trace-event-registry.ts:93                  | Covered accurately                                                                                                      |

## Operational readiness map

| Requirement                                  | Evidence                                                             | Article coverage | Gap or action                                                                                                                 |
| -------------------------------------------- | -------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Runtime behavior verified                    | VOICE sub-block and trace events confirmed current                   | Covered          | Fix the invalid channel path — this is the most impactful instance of the bug since the branch condition itself depends on it |
| Required companion resources identified      | n/a — single-agent examples                                          | n/a              | Correctly scoped                                                                                                              |
| Referenced variables have sources            | `channel_name` sourced from an invalid path                          | Bug              | Fix                                                                                                                           |
| Fallback/failure/ambiguity behavior verified | `ELSE` branch and suppressed-channel handling covered                | Covered          | None beyond the fix                                                                                                           |
| Customer verification path defined           | Concrete per-channel testing and `dsl_on_start_skipped` verification | Covered          | None                                                                                                                          |
| Production readiness checklist included      | Present and specific                                                 | Covered          | None beyond the fix                                                                                                           |

## Example validation

| Article block                   | Classification | Validation method                                               | Result   | Warnings or errors                                                                                                                                                                                                                         | Action                   |
| ------------------------------- | -------------- | --------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| Block 1 (Channel_Welcome_Agent) | full-document  | Close reading against interaction-context-session-state.test.ts | **fail** | `session.interaction.current.channel` does not exist; the `channel_name == "voice"` branch condition would never match since `channel_name` resolves to undefined, meaning voice callers would always get the text-channel `ELSE` response | Fix to `session.channel` |
| Block 2 (Launcher_Copy_Agent)   | full-document  | Close reading                                                   | pass     | None                                                                                                                                                                                                                                       | Keep                     |

**Validation limitation:** No runnable parse/compile harness was available in this session. The invalid-path finding was made by close reading of the type definition confirmed by a dedicated runtime test file.

## Known drift analysis (2026-07-03 to 2026-08-21)

| Drift item                                         | Impact on article                                                                                                                           | Action                   |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `session.interaction.current.channel` invalid path | Same pre-existing authoring error as topics 2.2 and 2.6, here with the highest practical impact since the branch condition itself is broken | Fix to `session.channel` |

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                                            |
| -------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | interaction-context-session-state.test.ts, agent-based-parser.ts (VOICE), trace-event-registry.ts |
| Did I search synonyms/neighboring constructs?                              | pass   | session.channel, VOICE, PLAIN_TEXT, dsl_on_start_skipped                                          |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Confirmed VOICE/FORMATS branch-level payloads                                                     |
| Did I distinguish optional vs required sections?                           | pass   | Article explicitly separates launcher config from ABL conversation content                        |
| Did I explain reasoning-layer guidance where supported?                    | n/a    | Lifecycle/channel-adaptation mechanics article                                                    |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Branch-based and launcher-separation patterns both presented                                      |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found beyond the path bug                                                                  |
| If asked "are you not considering all scenarios?" what would I show?       | —      | interaction-context-session-state.test.ts field list                                              |

**Coverage verdict:** fix-needed (one concrete, high-impact bug — same class as topics 2.2 and 2.6, but here it breaks the example's core branching logic)

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                  | Required improvements                                                                                                                                                  |
| ----------------------------------- | ----------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | VOICE sub-block and trace events verified exactly accurate | Fix `session.interaction.current.channel` → `session.channel` — this one actually breaks the article's central branching logic, not just an interpolated display value |
| Senior content writer               | ready             | Excellent launcher-vs-conversation-content distinction     | None blocking (pending the fix)                                                                                                                                        |
| Product manager/customer enablement | needs-improvement | Good voice/text channel differentiation guidance           | A customer copying this example would find voice callers never reach the voice branch — must be fixed before publication                                               |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                             | Final score |
| ------------------------------------------ | ------------- | ----------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 2             | Fixed invalid `session.interaction.current.channel` path to `session.channel` | 5           |
| Depth of conceptual explanation            | 4             | None needed                                                                   | 4           |
| Readability and usability                  | 5             | None needed                                                                   | 5           |
| Coverage of examples                       | 2             | Fixed the broken branch condition, the article's central example              | 5           |
| Search and discovery quality               | 4             | None needed                                                                   | 4           |
| Completeness of workflow and failure modes | 4             | None needed                                                                   | 4           |
| Customer/partner self-service readiness    | 2             | Fixed a bug that broke the article's core teaching example                    | 5           |
| Scenario comprehensiveness                 | 4             | None needed                                                                   | 4           |
| Article completeness                       | 5             | None needed                                                                   | 5           |

**Gate result:** pass (after the path fix is applied)
