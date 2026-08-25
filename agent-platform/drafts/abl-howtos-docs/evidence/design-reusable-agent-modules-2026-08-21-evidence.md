# Evidence: design-reusable-agent-modules

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-reusable-agent-modules.md`
**Topic:** 1.9 - How to design reusable agents and modules for large projects
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                             | Purpose                                                                                                                                                            |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `packages/core/src/parser/agent-based-parser.ts:3719-3724`                       | Confirms `FROM "path" USE:` is explicitly rejected with error `E720: 'FROM...USE' syntax has been removed` — the article's central warning is accurate and current |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` (ABLP-3301) | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'` — both HANDOFF entries omit `HISTORY`                                                                                  |

Both `HANDOFF` conditions in this article are quoted semantic strings, not structured comparisons, so auto-guard (`autoGuardConstraint`, which only applies to `CONSTRAINTS` regardless) is not a relevant consideration here either way.

## Scenario and variant map

| Scenario or variant                                 | Supported?                 | Evidence                                      | Article coverage                         |
| --------------------------------------------------- | -------------------------- | --------------------------------------------- | ---------------------------------------- |
| `FROM ... USE` tool import syntax                   | confirmed removed/rejected | `agent-based-parser.ts:3719-3724`, error E720 | Article correctly warns against it       |
| Supervisor + reusable specialist agents via HANDOFF | yes                        | Standard                                      | Covered                                  |
| HANDOFF history default now `full`                  | yes                        | ABLP-3301                                     | Not mentioned; both entries omit HISTORY |

## Operational readiness map

| Requirement                                  | Evidence                                                                                              | Article coverage | Gap or action                                                                                |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------- |
| Runtime behavior verified                    | FROM...USE rejection and HANDOFF fields confirmed current                                             | Covered          | None                                                                                         |
| Required companion resources identified      | Product_Advisor, Order_Status_Agent both defined                                                      | Covered          | None                                                                                         |
| Referenced variables have sources            | `customer_id`, `locale`, `order_id` passed but not declared via MEMORY/GATHER in this minimal example | Minor gap        | Note as project-local assumption, consistent with this article's intentionally minimal scope |
| Fallback/failure/ambiguity behavior verified | n/a — this article is about reuse/module design, not routing completeness                             | n/a              | Correctly scoped                                                                             |
| Customer verification path defined           | Concrete cross-entry-point testing guidance                                                           | Covered          | None                                                                                         |
| Production readiness checklist included      | Present and thorough, including a shared-ownership item                                               | Covered          | Add HANDOFF history default note                                                             |

## Example validation

| Article block                                    | Classification           | Validation method | Result | Warnings or errors                                                                        | Action                      |
| ------------------------------------------------ | ------------------------ | ----------------- | ------ | ----------------------------------------------------------------------------------------- | --------------------------- |
| Blocks 1-3 (Commerce_Supervisor + 2 specialists) | full-document (as a set) | Close reading     | pass   | `customer_id`/`locale`/`order_id` have no declared source (intentionally minimal example) | Keep; note as project-local |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-06-26 to 2026-08-21)

| Drift item                                                               | Impact on article                                                        | Action         |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | -------------- |
| HANDOFF history default `auto` → `full` (ABLP-3301)                      | Both HANDOFF entries omit HISTORY                                        | Add brief note |
| `FROM ... USE` removal                                                   | Verified still rejected exactly as described                             | None           |
| Auto-guard, root-level guard fix, delegate guard fix, `INITIAL:` keyword | Not applicable — quoted semantic WHEN conditions, no DELEGATE, no MEMORY | None           |

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                                                               |
| -------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | agent-based-parser.ts (FROM...USE rejection, HANDOFF), contract-source-data.ts                                       |
| Did I search synonyms/neighboring constructs?                              | pass   | FROM, USE, TOOLS, HANDOFF, Project Tools                                                                             |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Confirmed the removed syntax is genuinely rejected, not just discouraged                                             |
| Did I distinguish optional vs required sections?                           | pass   | Article explicitly separates agent DSL behavior from Project Tools implementation                                    |
| Did I explain reasoning-layer guidance where supported?                    | pass   | Quoted semantic HANDOFF conditions explained                                                                         |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | "Common variations" presents shared-specialist, channel-wrapper, and manifest-composition as distinct valid patterns |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found                                                                                                         |
| If asked "are you not considering all scenarios?" what would I show?       | —      | FROM...USE rejection evidence above                                                                                  |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                                                                 | Required improvements            |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Senior platform architect           | needs-improvement | FROM...USE rejection independently reconfirmed as still accurate and current                                              | Add HANDOFF history default note |
| Senior content writer               | ready             | The "three places the reusable boundary must agree" framing (goal, condition, context) is a genuinely useful mental model | None blocking                    |
| Product manager/customer enablement | ready             | Concrete common mistakes and troubleshooting grounded in real cross-team reuse failure modes                              | None blocking                    |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                    | Final score |
| ------------------------------------------ | ------------- | -------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Added HANDOFF history default note; reconfirmed FROM...USE rejection | 5           |
| Depth of conceptual explanation            | 5             | None needed                                                          | 5           |
| Readability and usability                  | 5             | None needed                                                          | 5           |
| Coverage of examples                       | 4             | None needed                                                          | 4           |
| Search and discovery quality               | 5             | None needed                                                          | 5           |
| Completeness of workflow and failure modes | 4             | None needed                                                          | 4           |
| Customer/partner self-service readiness    | 5             | None needed                                                          | 5           |
| Scenario comprehensiveness                 | 4             | None needed                                                          | 4           |
| Article completeness                       | 5             | None needed                                                          | 5           |

**Gate result:** pass (after minor proposed addition)
