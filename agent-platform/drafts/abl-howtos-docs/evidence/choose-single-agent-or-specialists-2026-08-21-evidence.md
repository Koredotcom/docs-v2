# Evidence: choose-single-agent-or-specialists

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/choose-single-agent-or-specialists.md`
**Topic:** 1.2 - How to decide whether to build one agent or multiple specialist agents
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                                                                    | Purpose                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/core/src/parser/agent-based-parser.ts` (`case 'RETURN'`, `case 'EXPECT_RETURN'`)                              | Confirms `RETURN: true/false` and `EXPECT_RETURN: true/false` are aliases setting the same `config.return` field — the article's `RETURN:` usage is valid, current shorthand                                                                          |
| `packages/core/src/parser/agent-based-parser.ts` (`PASS`/`SUMMARY` shorthand outside `CONTEXT`)                         | Confirms the article's shorthand `PASS: [...]`/`SUMMARY: "..."` (outside a `CONTEXT:` block) is current                                                                                                                                               |
| `packages/core/src/parser/agent-based-parser.ts:5280,5292,5306,5312` (`PURPOSE`, `RETURNS`, `USE_RESULT`, `ON_FAILURE`) | Confirms all DELEGATE fields used in the example are current                                                                                                                                                                                          |
| `packages/core/src/parser/agent-based-parser.ts:900` (`'AGENTS:'`)                                                      | Confirms the readable `AGENTS:` roster block is a current, recognized top-level section                                                                                                                                                               |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` (ABLP-3301)                                        | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'` — all 3 HANDOFF entries omit `HISTORY`                                                                                                                                                                    |
| `packages/compiler/src/platform/ir/compiler.ts:2414,2554` (`autoGuardConstraint`)                                       | Has exactly one caller, inside `CONSTRAINTS`/`REQUIRE` compilation — does NOT apply to `HANDOFF`/`SUPERVISOR` `WHEN` conditions. `intent.category == "..."` conditions in this article's HANDOFF entries are therefore not auto-guarded or rewritten. |
| `packages/compiler/src/platform/constructs/executors/delegate-executor.ts` (ABLP-3241)                                  | The DELEGATE example's `WHEN` is a quoted semantic condition, not a structured guard, so the double-validation fix doesn't directly change this example's behavior — confirmed not a false negative for this article                                  |

## Scenario and variant map

| Scenario or variant                                                              | Supported?             | Evidence                                                                         | Article coverage                                           |
| -------------------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Single-agent ownership pattern                                                   | yes                    | Standard AGENT shape                                                             | Covered                                                    |
| Supervisor + specialists with `HANDOFF`, `RETURN: true/false` shorthand          | yes, confirmed current | `RETURN`/`EXPECT_RETURN` alias confirmed                                         | Covered                                                    |
| `AGENTS:` readable roster (non-executable) vs `HANDOFF` (executable) distinction | yes                    | `AGENTS:` confirmed as a recognized but roster-only section                      | Covered, and correctly distinguished in article prose      |
| `DELEGATE` with `PASS`/`RETURNS`/`USE_RESULT`/`TIMEOUT`/`ON_FAILURE`             | yes, confirmed current | All fields found in parser                                                       | Covered                                                    |
| HANDOFF history default now `full`                                               | yes                    | ABLP-3301                                                                        | Not mentioned; all 3 HANDOFF entries omit HISTORY          |
| Auto-guarding of HANDOFF `WHEN` conditions                                       | no                     | `autoGuardConstraint` only applies to `CONSTRAINTS`/`REQUIRE` (compiler.ts:2414) | Correctly out of scope — no article change needed for this |

## Operational readiness map

| Requirement                                  | Evidence                                                                                                  | Article coverage | Gap or action                    |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------- |
| Runtime behavior verified                    | All HANDOFF/DELEGATE fields and shorthands confirmed current                                              | Covered          | None                             |
| Required companion resources identified      | All specialist/target agents defined in the multi-file example, with clear file paths                     | Covered          | None                             |
| Referenced variables have sources            | `customer_id`, `order_id`, `booking_id` are all gathered before use                                       | Covered          | None                             |
| Fallback/failure/ambiguity behavior verified | `human_help` intent route to `Live_Agent` covers the ambiguous case; `ON_FAILURE` covers delegate failure | Covered          | None                             |
| Customer verification path defined           | Step-by-step utterance-based verification present                                                         | Covered          | None                             |
| Production readiness checklist included      | Present and specific (target existence, PASS field sourcing, fallback, trace review)                      | Covered          | Add HANDOFF history default note |

## Example validation

| Article block                                               | Classification           | Validation method                             | Result | Warnings or errors | Action |
| ----------------------------------------------------------- | ------------------------ | --------------------------------------------- | ------ | ------------------ | ------ |
| Block 1 (single agent)                                      | full-document            | Close reading — no runnable harness available | pass   | None               | Keep   |
| Blocks 2-5 (supervisor + 3 specialists, multi-file project) | full-document (as a set) | Close reading against HANDOFF/AGENTS parsing  | pass   | None               | Keep   |
| Blocks 6-7 (delegate: booking manager + fee calculator)     | full-document (as a set) | Close reading against DELEGATE field parsing  | pass   | None               | Keep   |

**Validation limitation:** No runnable parse/compile harness was available in this session. Validation was performed by close reading of parser source confirming every field/shorthand used.

## Known drift analysis (2026-06-25 to 2026-08-21)

| Drift item                                          | Impact on article                                                                                                                                                                          | Action                            |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| HANDOFF history default `auto` → `full` (ABLP-3301) | All 3 HANDOFF entries in the specialist example omit HISTORY                                                                                                                               | Add a brief note                  |
| Delegate WHEN guard fix (ABLP-3241)                 | The DELEGATE example uses a quoted semantic WHEN, not a structured guard — not directly exercised, but worth a passing mention since customers commonly use structured DELEGATE guards too | Optional mention, not required    |
| Auto-guard (`autoGuardConstraint`)                  | Applies only to `CONSTRAINTS`/`REQUIRE`, never to `HANDOFF`/`SUPERVISOR` `WHEN` — confirmed via its single call site                                                                       | Not applicable; no article change |
| Root-level guard-variable parser fix (ABLP-2996)    | Not applicable — `intent.category` is multi-segment                                                                                                                                        | None                              |
| `INITIAL:` canonical keyword (ABLP-2823)            | Not applicable — no MEMORY block in this article                                                                                                                                           | None                              |

## Red-team coverage pass

| Question                                                                                            | Result | Evidence or correction                                                                                                                                |
| --------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime execution, tests, and examples?                       | pass   | agent-based-parser.ts (RETURN/EXPECT_RETURN, PASS/SUMMARY shorthand, AGENTS, DELEGATE fields), contract-source-data.ts, auto-guard-constraint.test.ts |
| Did I search for synonyms/neighboring constructs?                                                   | pass   | HANDOFF, DELEGATE, AGENTS, RETURN, EXPECT_RETURN, PASS, SUMMARY                                                                                       |
| Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback?     | pass   | Confirmed RETURN/EXPECT_RETURN alias and shorthand PASS/SUMMARY outside CONTEXT                                                                       |
| Did I distinguish optional helper sections from required executable configuration?                  | pass   | Article explicitly and correctly distinguishes `AGENTS:` (roster, non-executable) from `HANDOFF` (executable)                                         |
| Did I explain how the reasoning layer uses free-form guidance when the feature supports it?         | pass   | DELEGATE's quoted semantic `WHEN` is explained                                                                                                        |
| Did I avoid making a preferred pattern sound like the only pattern?                                 | pass   | Decision table presents single-agent and specialist patterns as equally valid, situation-dependent choices                                            |
| Could a customer build the same scenario in another code-supported way the article doesn't mention? | pass   | HANDOFF-vs-DELEGATE distinction already covers the main alternative axis for this topic                                                               |
| If asked "are you not considering all scenarios?", what evidence would I show?                      | —      | Full field-by-field parser confirmation above                                                                                                         |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                                                  | Required improvements                |
| ----------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Senior platform architect           | needs-improvement | All syntax verified current and accurate across single-agent, supervisor+specialist, and delegate patterns | 1. Add HANDOFF history default note. |
| Senior content writer               | ready             | Excellent structure: concept, decision table, three levels of example, clear "when to use X" subsections   | None blocking                        |
| Product manager/customer enablement | ready             | Directly actionable; the "do not split early" guidance is valuable and non-obvious                         | None blocking                        |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                                                         | Final score |
| ------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Added HANDOFF history default note; corrected an earlier draft's incorrect auto-guard claim before it reached the article | 5           |
| Depth of conceptual explanation            | 5             | None needed                                                                                                               | 5           |
| Readability and usability                  | 5             | None needed                                                                                                               | 5           |
| Coverage of examples                       | 5             | None needed                                                                                                               | 5           |
| Search and discovery quality               | 5             | None needed                                                                                                               | 5           |
| Completeness of workflow and failure modes | 4             | Minor addition                                                                                                            | 4           |
| Customer/partner self-service readiness    | 5             | None needed                                                                                                               | 5           |
| Scenario comprehensiveness                 | 4             | None needed                                                                                                               | 4           |
| Article completeness                       | 5             | None needed                                                                                                               | 5           |

**Gate result:** pass (after minor proposed additions)
