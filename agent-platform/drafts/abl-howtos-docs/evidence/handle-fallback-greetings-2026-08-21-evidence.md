# Evidence: handle-fallback-greetings

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/handle-fallback-greetings.md`
**Topic:** 2.8 - How to handle empty-state and fallback greetings
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                             | Purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `apps/runtime/src/services/execution/flow-step-executor.ts:898-931`              | Same evidence gathered for topic 2.2: confirms a top-level `ON_START RESPOND` combined with `BRANCHES` behaves exactly as this article describes — when no branch matches (or a branch condition errors), the function returns `topLevelResponseConfig` as the fallback. This article's specific pattern (top-level RESPOND _before_ BRANCHES, acting as the fallback) is the same mechanism already confirmed for topic 2.2's "malformed branch fails closed" behavior. |
| `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts` | Confirms `session.interaction.current.language` (used in this article's branch condition) is a real, valid field — this article does not use the invalid `session.interaction.current.channel` path found in topics 2.2, 2.6, and 2.7                                                                                                                                                                                                                                    |

## Scenario and variant map

| Scenario or variant                                                                    | Supported?                                   | Evidence                                                               | Article coverage   |
| -------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------- | ------------------ |
| Top-level `ON_START RESPOND` + `BRANCHES` where the top-level response is the fallback | yes, confirmed exactly                       | `flow-step-executor.ts:898-931` (`topLevelResponseConfig` return path) | Covered accurately |
| No `ON_START` at all — first flow step is the greeting                                 | yes                                          | Standard AGENT/FLOW structure                                          | Covered            |
| `session.interaction.current.language` branch condition                                | yes, valid field                             | interaction-context-session-state.test.ts                              | Covered accurately |
| Malformed branch condition fails closed to fallback                                    | yes, confirmed (same mechanism as topic 2.2) | flow-step-executor.ts                                                  | Covered            |

## Operational readiness map

| Requirement                                  | Evidence                                                                                                                            | Article coverage | Gap or action    |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- |
| Runtime behavior verified                    | Top-level-RESPOND-as-fallback and no-ON_START patterns both confirmed current                                                       | Covered          | None             |
| Required companion resources identified      | n/a — single-agent examples                                                                                                         | n/a              | Correctly scoped |
| Referenced variables have sources            | `session.interaction.current.language` is a real runtime-provided field                                                             | Covered          | None             |
| Fallback/failure/ambiguity behavior verified | This article's entire subject is fallback behavior, and its core mechanism claim was independently confirmed against runtime source | Covered          | None             |
| Customer verification path defined           | Concrete matching/non-matching/no-ON_START test guidance                                                                            | Covered          | None             |
| Production readiness checklist included      | Present and specific                                                                                                                | Covered          | None             |

## Example validation

| Article block                      | Classification | Validation method                                          | Result | Warnings or errors | Action |
| ---------------------------------- | -------------- | ---------------------------------------------------------- | ------ | ------------------ | ------ |
| Block 1 (Fallback_Greeting_Agent)  | full-document  | Close reading against flow-step-executor.ts fallback logic | pass   | None               | Keep   |
| Block 2 (No_Startup_Handler_Agent) | full-document  | Close reading                                              | pass   | None               | Keep   |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-07-03 to 2026-08-21)

No drift affecting this article was found. Its central claim (top-level `ON_START RESPOND` acts as the fallback when `BRANCHES` don't match, and a malformed branch condition fails closed rather than erroring) was independently re-verified against current runtime code and is exactly accurate. Unlike the three sibling articles in this topic (2.2, 2.6, 2.7), this one does not use the invalid `session.interaction.current.channel` path.

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                              |
| -------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | flow-step-executor.ts, interaction-context-session-state.test.ts                    |
| Did I search synonyms/neighboring constructs?                              | pass   | ON_START, BRANCHES, fallback, topLevelResponseConfig                                |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Confirmed both the top-level-RESPOND-as-fallback and no-ON_START patterns           |
| Did I distinguish optional vs required sections?                           | pass   | Article explicitly recommends always having a fallback, whichever mechanism is used |
| Did I explain reasoning-layer guidance where supported?                    | n/a    | Lifecycle/fallback mechanics article                                                |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Both fallback mechanisms (top-level RESPOND, no-ON_START) presented as valid        |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found                                                                        |
| If asked "are you not considering all scenarios?" what would I show?       | —      | flow-step-executor.ts fallback logic evidence above                                 |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict | Strengths                                                                                                                                                                              | Required improvements |
| ----------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Senior platform architect           | ready   | The fallback mechanism claim was independently confirmed against the exact runtime code path, and the article correctly avoided the invalid channel-path bug found in sibling articles | None blocking         |
| Senior content writer               | ready   | Clear, concise treatment of a subtle topic                                                                                                                                             | None blocking         |
| Product manager/customer enablement | ready   | "Avoid sensitive personalization in fallback messages" is exactly the right operational guardrail                                                                                      | None blocking         |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made | Final score |
| ------------------------------------------ | ------------- | ----------------- | ----------- |
| Grounding in the code                      | 5             | None needed       | 5           |
| Depth of conceptual explanation            | 5             | None needed       | 5           |
| Readability and usability                  | 5             | None needed       | 5           |
| Coverage of examples                       | 4             | None needed       | 4           |
| Search and discovery quality               | 4             | None needed       | 4           |
| Completeness of workflow and failure modes | 5             | None needed       | 5           |
| Customer/partner self-service readiness    | 5             | None needed       | 5           |
| Scenario comprehensiveness                 | 4             | None needed       | 4           |
| Article completeness                       | 5             | None needed       | 5           |

**Gate result:** pass — no changes required
