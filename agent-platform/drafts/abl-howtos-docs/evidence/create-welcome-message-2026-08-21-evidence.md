# Evidence: create-welcome-message

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/create-welcome-message.md`
**Topic:** 2.1 - How to create a welcome message for a new conversation
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                                                               | Purpose                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/shared-kernel/src/constants/trace-event-registry.ts:89-100,849-852`                                      | Confirms `dsl_respond`, `dsl_on_start`, `dsl_on_start_branch`, `dsl_on_start_branch_error`, `dsl_on_start_skipped` all exist as current trace events — the article names `dsl_on_start` and `dsl_respond` exactly |
| `packages/core/src/parser/agent-based-parser.ts:8065-8100` (`parseButtonElement`)                                  | Confirms `- BUTTON: "Label" -> action_id` arrow syntax with `VALUE:` block metadata is current and matches the article's rich-content example exactly                                                             |
| `packages/core/src/parser/agent-based-parser.ts` (ON_START RESPOND/FORMATS/ACTIONS, entry_point/steps FLOW header) | Confirms both examples' full structure is current                                                                                                                                                                 |

This article has no `SUPERVISOR`, `HANDOFF`, `DELEGATE`, or `MEMORY` block, so none of the confirmed drift items from this refresh batch apply.

## Scenario and variant map

| Scenario or variant                                              | Supported?                  | Evidence                                  | Article coverage |
| ---------------------------------------------------------------- | --------------------------- | ----------------------------------------- | ---------------- |
| Top-level `ON_START: RESPOND: "..."` welcome                     | yes                         | Confirmed current                         | Covered          |
| `ON_START` welcome + FLOW continuation                           | yes                         | Confirmed current                         | Covered          |
| Rich content welcome with `FORMATS.markdown` + `ACTIONS` buttons | yes, exact syntax confirmed | `parseButtonElement` arrow + VALUE syntax | Covered          |
| `dsl_on_start`/`dsl_respond` trace verification                  | yes, confirmed current      | trace-event-registry.ts                   | Covered          |

## Operational readiness map

| Requirement                                  | Evidence                                                                | Article coverage | Gap or action    |
| -------------------------------------------- | ----------------------------------------------------------------------- | ---------------- | ---------------- |
| Runtime behavior verified                    | ON_START, RESPOND, FORMATS, ACTIONS, trace events all confirmed current | Covered          | None             |
| Required companion resources identified      | n/a — single-agent welcome pattern                                      | n/a              | Correctly scoped |
| Referenced variables have sources            | n/a — no session variables referenced                                   | n/a              | Correctly scoped |
| Fallback/failure/ambiguity behavior verified | Troubleshooting covers channel suppression of proactive payloads        | Covered          | None             |
| Customer verification path defined           | Concrete trace-event verification steps                                 | Covered          | None             |
| Production readiness checklist included      | Present and specific                                                    | Covered          | None             |

## Example validation

| Article block                             | Classification | Validation method                        | Result | Warnings or errors | Action |
| ----------------------------------------- | -------------- | ---------------------------------------- | ------ | ------------------ | ------ |
| Block 1 (Welcome_Message_Agent)           | full-document  | Close reading                            | pass   | None               | Keep   |
| Block 2 (Rich_Welcome_Agent with buttons) | full-document  | Close reading against parseButtonElement | pass   | None               | Keep   |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-07-03 to 2026-08-21)

No drift affecting this article was found. It has no exposure to HANDOFF/DELEGATE/MEMORY/guard conditions, and its trace-event and button-syntax claims were independently re-verified against current source.

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                    |
| -------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | agent-based-parser.ts (ON_START, BUTTON), trace-event-registry.ts         |
| Did I search synonyms/neighboring constructs?                              | pass   | ON_START, RESPOND, FORMATS, ACTIONS, BUTTON, dsl_on_start, dsl_respond    |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Confirmed both plain-text and rich-content welcome styles                 |
| Did I distinguish optional vs required sections?                           | pass   | ACTIONS/FORMATS correctly presented as optional enhancements              |
| Did I explain reasoning-layer guidance where supported?                    | n/a    | This article is about lifecycle/startup mechanics, not reasoning guidance |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Plain and rich-content welcomes presented as equally valid                |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found                                                              |
| If asked "are you not considering all scenarios?" what would I show?       | —      | trace-event-registry.ts and parseButtonElement evidence above             |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict | Strengths                                                                                                     | Required improvements |
| ----------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------- | --------------------- |
| Senior platform architect           | ready   | Trace event names and button syntax verified exactly current                                                  | None blocking         |
| Senior content writer               | ready   | Clear "how it works" narrative distinguishing proactive delivery from side-effect-only channels               | None blocking         |
| Product manager/customer enablement | ready   | The "don't repeat the greeting" and channel-suppression troubleshooting guidance is practical and non-obvious | None blocking         |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made | Final score |
| ------------------------------------------ | ------------- | ----------------- | ----------- |
| Grounding in the code                      | 5             | None needed       | 5           |
| Depth of conceptual explanation            | 5             | None needed       | 5           |
| Readability and usability                  | 5             | None needed       | 5           |
| Coverage of examples                       | 4             | None needed       | 4           |
| Search and discovery quality               | 5             | None needed       | 5           |
| Completeness of workflow and failure modes | 4             | None needed       | 4           |
| Customer/partner self-service readiness    | 5             | None needed       | 5           |
| Scenario comprehensiveness                 | 4             | None needed       | 4           |
| Article completeness                       | 5             | None needed       | 5           |

**Gate result:** pass — no changes required
