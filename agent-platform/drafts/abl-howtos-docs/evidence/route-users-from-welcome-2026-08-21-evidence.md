# Evidence: route-users-from-welcome

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-users-from-welcome.md`
**Topic:** 2.5 - How to route users from the welcome experience to the right agent
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                             | Purpose                                                                                                                                                                                              |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apps/runtime/src/__tests__/fixtures/orchestration/action-handoff-parent.abl`    | Confirms `AGENT:` (not just `SUPERVISOR:`) combined with top-level `HANDOFF:` **and** `FLOW:` in the same file is a real, currently-used pattern — validates this article's core structural approach |
| Same BUTTON/ACTIONS evidence as topic 2.1                                        | Confirms the welcome ACTIONS syntax is current                                                                                                                                                       |     |
| `packages/core/src/parser/agent-based-parser.ts` (GATHER field parsing)          | Confirms `PROMPT`/`TYPE`/`REQUIRED` GATHER field syntax is current at both top level and flow-step level                                                                                             |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` (ABLP-3301) | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'` — all HANDOFF entries in both examples omit `HISTORY`                                                                                                    |

## Scenario and variant map

| Scenario or variant                                                                    | Supported?                                                             | Evidence                                                      | Article coverage                                                                                                                                             |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `AGENT:` (not `SUPERVISOR:`) with top-level `HANDOFF:` + `FLOW:`                       | yes, confirmed via real fixture                                        | `action-handoff-parent.abl`                                   | Covered accurately — a customer might reasonably wonder if `HANDOFF` requires `SUPERVISOR:`; it does not                                                     |
| Top-level `GATHER: startup_choice` declared again inside the flow step's own `GATHER:` | plausible but not independently confirmed as intentional vs. redundant | No fixture found with an identical pattern to compare against | Worth a one-line clarification of why the field is declared at both levels (schema declaration vs. in-flow collection), or simplification to declare it once |
| Startup-context routing (`ON_START SET` + `HANDOFF WHEN`)                              | yes                                                                    | Same pattern confirmed in topics 2.2/2.3                      | Covered                                                                                                                                                      |
| HANDOFF history default now `full`                                                     | yes                                                                    | ABLP-3301                                                     | Not mentioned; all HANDOFF entries omit HISTORY                                                                                                              |

## Operational readiness map

| Requirement                                  | Evidence                                                                                            | Article coverage | Gap or action                    |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------- |
| Runtime behavior verified                    | AGENT+HANDOFF+FLOW combination confirmed via real fixture                                           | Covered          | None                             |
| Required companion resources identified      | Billing_Agent, Returns_Agent, Claims_Agent, General_Service_Agent all defined                       | Covered          | None                             |
| Referenced variables have sources            | `startup_choice` gathered; `account_id`/`member_id` passed but not declared (minimal-example scope) | Minor gap        | Note as project-local assumption |
| Fallback/failure/ambiguity behavior verified | "Common mistakes"/"Troubleshooting" cover unmatched routes and missing targets                      | Covered          | None                             |
| Customer verification path defined           | Concrete per-choice testing plus an explicit unknown-choice test                                    | Covered          | None                             |
| Production readiness checklist included      | Present and specific                                                                                | Covered          | Add HANDOFF history default note |

## Example validation

| Article block                                                              | Classification           | Validation method                                             | Result | Warnings or errors                                                                                               | Action                               |
| -------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Blocks 1-3 (Welcome_Router_Agent + Billing_Agent + Returns_Agent)          | full-document (as a set) | Close reading against real AGENT+HANDOFF+FLOW fixture pattern | pass   | Duplicate `startup_choice` GATHER declaration (top-level and flow-step) is unusual but not confirmed as an error | Keep; optionally clarify or simplify |
| Blocks 4-6 (Welcome_Context_Router + Claims_Agent + General_Service_Agent) | full-document (as a set) | Close reading                                                 | pass   | `member_id` has no declared source (minimal-example scope)                                                       | Keep; note as project-local          |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-07-03 to 2026-08-21)

| Drift item                                                               | Impact on article                                                                   | Action         |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | -------------- |
| HANDOFF history default `auto` → `full` (ABLP-3301)                      | Both examples' HANDOFF entries omit HISTORY                                         | Add brief note |
| Auto-guard, root-level guard fix, delegate guard fix, `INITIAL:` keyword | Not applicable — no compound guard conditions relevant here, no DELEGATE, no MEMORY | None           |

## Red-team coverage pass

| Question                                                                   | Result     | Evidence or correction                                                                                                                       |
| -------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass       | Real orchestration fixtures, agent-based-parser.ts (GATHER), contract-source-data.ts                                                         |
| Did I search synonyms/neighboring constructs?                              | pass       | AGENT+HANDOFF combination, GATHER at multiple scopes, ACTIONS/BUTTON                                                                         |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass       | Confirmed HANDOFF is not restricted to SUPERVISOR                                                                                            |
| Did I distinguish optional vs required sections?                           | fix-needed | The dual top-level+flow-step GATHER declaration for the same field isn't explained — a customer could reasonably wonder if both are required |
| Did I explain reasoning-layer guidance where supported?                    | n/a        | This article is about deterministic welcome routing                                                                                          |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass       | Button-based and channel-context-based routing both presented                                                                                |
| Could a customer build this another code-supported way not mentioned?      | pass       | No gap found                                                                                                                                 |
| If asked "are you not considering all scenarios?" what would I show?       | —          | action-handoff-parent.abl fixture evidence above                                                                                             |

**Coverage verdict:** fix-needed (minor — HANDOFF history default note, dual-GATHER clarification)

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                                        | Required improvements                                                                                     |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | AGENT+HANDOFF+FLOW combination independently verified against a real fixture rather than assumed | 1. Add HANDOFF history default note. 2. Clarify or simplify the dual `startup_choice` GATHER declaration. |
| Senior content writer               | ready             | Clear button-vs-typed-fallback guidance                                                          | None blocking                                                                                             |
| Product manager/customer enablement | ready             | The "test an unknown choice" verification step is exactly the right non-obvious check            | None blocking                                                                                             |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                                  | Final score |
| ------------------------------------------ | ------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Verified AGENT+HANDOFF+FLOW combination against a real fixture; added HANDOFF history default note | 5           |
| Depth of conceptual explanation            | 4             | Clarified the dual GATHER declaration                                                              | 4           |
| Readability and usability                  | 5             | None needed                                                                                        | 5           |
| Coverage of examples                       | 4             | None needed                                                                                        | 4           |
| Search and discovery quality               | 4             | None needed                                                                                        | 4           |
| Completeness of workflow and failure modes | 4             | None needed                                                                                        | 4           |
| Customer/partner self-service readiness    | 4             | Noted project-local assumptions                                                                    | 4           |
| Scenario comprehensiveness                 | 4             | None needed                                                                                        | 4           |
| Article completeness                       | 5             | None needed                                                                                        | 5           |

**Gate result:** pass (after minor proposed changes)
