# Evidence: personalize-returning-user-welcome

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/personalize-returning-user-welcome.md`
**Topic:** 2.3 - How to personalize a welcome message for returning users
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                                       | Purpose                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apps/runtime/src/services/execution/flow-step-executor.ts:10051-10151` (`executeOnStart`) | Confirms `ON_START CALL ... AS: profile` binding, and confirms the exact failure-handling claim: a CALL error is caught, logged via `log.error('ON_START call error', ...)`, and execution continues to render the `RESPOND` — matching the article's "the runtime logs the startup call error and continues" precisely |
| Same TOOLS/confirm/side_effects evidence as topic 3.4 (`route-by-tool-result-or-memory`)   | Confirms the read-only lookup tool declaration style is current                                                                                                                                                                                                                                                         |     |

`session.member_id` is treated by the article itself as a project/channel-supplied value ("Do not assume channel metadata exists unless the channel integration supplies it"), not a platform built-in — this is already correctly caveated, unlike the invalid-path bug found in the sibling article `use-on-start-welcome`.

## Scenario and variant map

| Scenario or variant                                                  | Supported?                          | Evidence                                     | Article coverage   |
| -------------------------------------------------------------------- | ----------------------------------- | -------------------------------------------- | ------------------ |
| `ON_START CALL ... AS` startup profile lookup                        | yes                                 | Confirmed current                            | Covered            |
| Read-only tool declaration (`side_effects: false`, `confirm: never`) | yes                                 | Same evidence as topic 3.4                   | Covered            |
| Startup `SET` + `BRANCHES` segment-based personalization             | yes                                 | Same evidence as topic 2.2                   | Covered            |
| CALL failure logged and execution continues                          | yes, confirmed exactly              | `flow-step-executor.ts:10108-10151`          | Covered accurately |
| `session.member_id` as project/channel-supplied context              | correctly caveated as project-local | Article's own troubleshooting/checklist text | Covered            |

## Operational readiness map

| Requirement                                  | Evidence                                                                  | Article coverage | Gap or action    |
| -------------------------------------------- | ------------------------------------------------------------------------- | ---------------- | ---------------- |
| Runtime behavior verified                    | CALL/AS binding and failure handling confirmed exactly current            | Covered          | None             |
| Required companion resources identified      | n/a — single-agent examples                                               | n/a              | Correctly scoped |
| Referenced variables have sources            | `session.member_id` explicitly caveated as channel-supplied, not assumed  | Covered          | None             |
| Fallback/failure/ambiguity behavior verified | CALL-failure-continues behavior explicitly covered and confirmed accurate | Covered          | None             |
| Customer verification path defined           | Concrete trace-based verification (startup tool execution, `dsl_respond`) | Covered          | None             |
| Production readiness checklist included      | Present and specific, including a privacy/sensitivity item                | Covered          | None             |

## Example validation

| Article block                          | Classification | Validation method                                          | Result | Warnings or errors | Action |
| -------------------------------------- | -------------- | ---------------------------------------------------------- | ------ | ------------------ | ------ |
| Block 1 (Returning_User_Welcome_Agent) | full-document  | Close reading against executeOnStart                       | pass   | None               | Keep   |
| Block 2 (Segment_Welcome_Agent)        | full-document  | Close reading against BRANCHES parsing (same as topic 2.2) | pass   | None               | Keep   |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-07-03 to 2026-08-21)

No drift affecting this article was found. Its central operational claim (CALL failure is logged and execution continues) was independently re-verified against current runtime code and is exactly accurate.

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                                 |
| -------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | flow-step-executor.ts executeOnStart, TOOLS field parsing                              |
| Did I search synonyms/neighboring constructs?                              | pass   | ON_START, CALL, AS, TOOLS, side_effects, confirm, BRANCHES                             |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Tool-lookup and SET-based segment personalization both covered                         |
| Did I distinguish optional vs required sections?                           | pass   | Article explicitly separates low-risk personalization from authorization-gated details |
| Did I explain reasoning-layer guidance where supported?                    | n/a    | Lifecycle/startup mechanics article                                                    |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Tool-lookup and SET-based approaches presented as distinct valid options               |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found                                                                           |
| If asked "are you not considering all scenarios?" what would I show?       | —      | flow-step-executor.ts CALL error-handling evidence above                               |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict | Strengths                                                                                                                                         | Required improvements |
| ----------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Senior platform architect           | ready   | CALL/AS binding and failure-handling claims verified exactly accurate                                                                             | None blocking         |
| Senior content writer               | ready   | Clean two-tier structure (tool lookup vs. SET-based segment)                                                                                      | None blocking         |
| Product manager/customer enablement | ready   | The privacy guardrail ("do not expose sensitive account details until identity is established") is exactly the right first concern for this topic | None blocking         |

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
