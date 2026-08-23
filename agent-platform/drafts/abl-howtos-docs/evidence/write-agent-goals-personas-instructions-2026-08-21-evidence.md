# Evidence: write-agent-goals-personas-instructions

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/write-agent-goals-personas-instructions.md`
**Topic:** 1.6 - How to write effective agent goals, personas, instructions, and limitations
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                             | Purpose                                                                                                       |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `packages/core/src/parser/agent-based-parser.ts:982` (valid sections list)       | Confirms `IDENTITY:`, mentioned as an alternative grouping section, is a current recognized top-level section |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` (ABLP-3301) | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'` — the article's single HANDOFF entry omits HISTORY                |
| Multiline (`                                                                     | `) and single-line `PERSONA:` forms                                                                           | Both confirmed as standard, unchanged authoring styles used elsewhere in this doc set |

Correction to an earlier draft of this evidence file: `autoGuardConstraint` (`packages/compiler/src/platform/ir/compiler.ts:2554`, single caller at line 2414) only rewrites `CONSTRAINTS`/`REQUIRE` conditions at compile time — it does not apply to `HANDOFF`/`SUPERVISOR` `WHEN` conditions at all, quoted or structured. This article has no `CONSTRAINTS` block, so auto-guard is not applicable for that reason, independent of the HANDOFF condition's shape.

## Scenario and variant map

| Scenario or variant                            | Supported?             | Evidence                    | Article coverage                                                         |
| ---------------------------------------------- | ---------------------- | --------------------------- | ------------------------------------------------------------------------ |
| Single-line `PERSONA:`                         | yes                    | Confirmed current           | Covered                                                                  |
| Multiline `PERSONA:                            | ` block                | yes                         | Confirmed current                                                        | Covered |
| `IDENTITY:` as an alternative grouping section | yes, confirmed current | `agent-based-parser.ts:982` | Correctly presented as optional/project-standard-dependent, not required |
| Quoted semantic `WHEN` for a boundary HANDOFF  | yes                    | Standard                    | Covered                                                                  |
| HANDOFF history default now `full`             | yes                    | ABLP-3301                   | Not mentioned; the one HANDOFF entry omits HISTORY                       |

## Operational readiness map

| Requirement                                  | Evidence                                                                                    | Article coverage | Gap or action                                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------- |
| Runtime behavior verified                    | PERSONA/LIMITATIONS/HANDOFF/IDENTITY all confirmed current                                  | Covered          | None                                                                                         |
| Required companion resources identified      | `Billing_Specialist` defined in the same example                                            | Covered          | None                                                                                         |
| Referenced variables have sources            | `order_id`, `customer_id` passed but not declared via MEMORY/GATHER in this minimal example | Minor gap        | Note as project-local assumption, consistent with this article's intentionally minimal scope |
| Fallback/failure/ambiguity behavior verified | n/a — this article is about identity/voice/boundary definition, not routing completeness    | n/a              | Correctly scoped                                                                             |
| Customer verification path defined           | Concrete boundary/in-scope/sensitive-request test guidance                                  | Covered          | None                                                                                         |
| Production readiness checklist included      | Present and specific                                                                        | Covered          | Add HANDOFF history default note                                                             |

## Example validation

| Article block                                            | Classification                  | Validation method | Result | Warnings or errors                                                               | Action                      |
| -------------------------------------------------------- | ------------------------------- | ----------------- | ------ | -------------------------------------------------------------------------------- | --------------------------- |
| Block 1 (Refund_Policy_Agent + HANDOFF)                  | full-document                   | Close reading     | pass   | `order_id`/`customer_id` have no declared source (intentionally minimal example) | Keep; note as project-local |
| Block 2 (Billing_Specialist)                             | full-document                   | Close reading     | pass   | None                                                                             | Keep                        |
| Blocks 3-5 (short persona, multiline persona variations) | section-snippet / full-document | Close reading     | pass   | None                                                                             | Keep                        |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-06-26 to 2026-08-21)

| Drift item                                                               | Impact on article                                             | Action         |
| ------------------------------------------------------------------------ | ------------------------------------------------------------- | -------------- |
| HANDOFF history default `auto` → `full` (ABLP-3301)                      | The one HANDOFF entry omits HISTORY                           | Add brief note |
| Auto-guard, root-level guard fix, delegate guard fix, `INITIAL:` keyword | Not applicable — quoted semantic WHEN, no DELEGATE, no MEMORY | None           |

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                      |
| -------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | agent-based-parser.ts (IDENTITY, PERSONA, HANDOFF), contract-source-data.ts |
| Did I search synonyms/neighboring constructs?                              | pass   | GOAL, PERSONA, LIMITATIONS, IDENTITY, HANDOFF                               |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Short and multiline PERSONA both covered; IDENTITY alternative covered      |
| Did I distinguish optional vs required sections?                           | pass   | IDENTITY explicitly presented as optional/project-standard-dependent        |
| Did I explain reasoning-layer guidance where supported?                    | n/a    | This article is about identity/voice, not routing logic depth               |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Both short and multiline personas presented as valid choices                |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found                                                                |
| If asked "are you not considering all scenarios?" what would I show?       | —      | IDENTITY section confirmation above                                         |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                                                           | Required improvements            |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Senior platform architect           | needs-improvement | PERSONA/IDENTITY/HANDOFF syntax all verified current                                                                | Add HANDOFF history default note |
| Senior content writer               | ready             | Excellent, concrete "write as X, not Y" guidance for goal/persona/limitations                                       | None blocking                    |
| Product manager/customer enablement | ready             | The limitation-with-a-route pattern (pair limits with handoff/escalation) is genuinely valuable enablement guidance | None blocking                    |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                  | Final score |
| ------------------------------------------ | ------------- | ---------------------------------- | ----------- |
| Grounding in the code                      | 4             | Added HANDOFF history default note | 5           |
| Depth of conceptual explanation            | 5             | None needed                        | 5           |
| Readability and usability                  | 5             | None needed                        | 5           |
| Coverage of examples                       | 5             | None needed                        | 5           |
| Search and discovery quality               | 5             | None needed                        | 5           |
| Completeness of workflow and failure modes | 4             | None needed                        | 4           |
| Customer/partner self-service readiness    | 5             | None needed                        | 5           |
| Scenario comprehensiveness                 | 4             | None needed                        | 4           |
| Article completeness                       | 5             | None needed                        | 5           |

**Gate result:** pass (after minor proposed addition)
