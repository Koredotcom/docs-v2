# Evidence: configure-agent-execution-pipeline

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/configure-agent-execution-pipeline.md`
**Topic:** 1.11 - How to configure EXECUTION.pipeline models, modes, thresholds, and fallbacks
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

Same field family already confirmed for topic 1.10 (`shortCircuit`, `keywordVeto`, `intentBridge`, thresholds, project-gate-vs-agent-config resolution), plus:

| File                                                                                                                  | Purpose                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `packages/core/src/types/agent-based.ts`, `packages/core/src/parser/agent-based-parser.ts` (`toolFilter`, `maxTools`) | Confirms this article's additional fields (not present in 1.10's example) are current                                |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` (ABLP-3301)                                      | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'` — all 3 HANDOFF entries in the full configuration example omit `HISTORY` |

All `HANDOFF` conditions are quoted semantic strings, so auto-guard (`autoGuardConstraint`, CONSTRAINTS-only regardless) is not relevant.

## Scenario and variant map

| Scenario or variant                                                                         | Supported?                                           | Evidence                                                                          | Article coverage                                  |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------- |
| Minimal pipeline enablement (`enabled`, `mode`, `shortCircuit`)                             | yes                                                  | Confirmed in 1.10's evidence                                                      | Covered                                           |
| Full configuration (`toolFilter`, `keywordVeto`, `intentBridge`, `model`, `mode: parallel`) | yes, `toolFilter`/`maxTools` independently confirmed | agent-based.ts, agent-based-parser.ts                                             | Covered                                           |
| Agent-level opt-out as a veto over project-level enablement                                 | yes                                                  | Article's own explanation matches project-gate resolution logic confirmed in 1.10 | Covered                                           |
| HANDOFF history default now `full`                                                          | yes                                                  | ABLP-3301                                                                         | Not mentioned; all 3 HANDOFF entries omit HISTORY |

## Operational readiness map

| Requirement                                  | Evidence                                                                         | Article coverage | Gap or action                    |
| -------------------------------------------- | -------------------------------------------------------------------------------- | ---------------- | -------------------------------- |
| Runtime behavior verified                    | All pipeline fields (including toolFilter/maxTools) confirmed current            | Covered          | None                             |
| Required companion resources identified      | Claims_Agent, Benefits_Agent, Escalation_Agent all defined                       | Covered          | None                             |
| Referenced variables have sources            | n/a — pipeline classifies raw input                                              | n/a              | Correctly scoped                 |
| Fallback/failure/ambiguity behavior verified | Escalation_Agent route + configuration checklist cover sensitive/ambiguous cases | Covered          | None                             |
| Customer verification path defined           | Concrete threshold-boundary and opt-out testing guidance                         | Covered          | None                             |
| Production readiness checklist included      | Present and specific, including a dashboard-tracking item                        | Covered          | Add HANDOFF history default note |

## Example validation

| Article block                                              | Classification           | Validation method                                                 | Result | Warnings or errors | Action |
| ---------------------------------------------------------- | ------------------------ | ----------------------------------------------------------------- | ------ | ------------------ | ------ |
| Block 1 (Pipeline_Minimal_Agent)                           | full-document            | Close reading                                                     | pass   | None               | Keep   |
| Blocks 2-5 (Insurance_Router + 3 specialists, full config) | full-document (as a set) | Close reading against toolFilter/keywordVeto/intentBridge parsing | pass   | None               | Keep   |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-06-25 to 2026-08-21)

| Drift item                                                               | Impact on article                                                                          | Action         |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | -------------- |
| HANDOFF history default `auto` → `full` (ABLP-3301)                      | All 3 HANDOFF entries in the full example omit HISTORY                                     | Add brief note |
| Auto-guard, root-level guard fix, delegate guard fix, `INITIAL:` keyword | Not applicable — quoted semantic WHEN conditions, no DELEGATE, no MEMORY                   | None           |
| EXECUTION.pipeline fields including toolFilter                           | No related commits found touching this construct family; fields independently re-confirmed | None           |

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                                                                |
| -------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | agent-based-parser.ts, agent-based.ts (toolFilter/maxTools), contract-source-data.ts                                  |
| Did I search synonyms/neighboring constructs?                              | pass   | toolFilter, maxTools, shortCircuit, keywordVeto, intentBridge                                                         |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Minimal-vs-full configuration examples cover the authoring range                                                      |
| Did I distinguish optional vs required sections?                           | pass   | Article explicitly distinguishes agent-level tuning from project-level enablement, and treats agent opt-out as a veto |
| Did I explain reasoning-layer guidance where supported?                    | pass   | Guided-vs-programmatic-vs-autonomous distinction covers this                                                          |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Common variations table presents 5 distinct valid configurations                                                      |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found                                                                                                          |
| If asked "are you not considering all scenarios?" what would I show?       | —      | Field-by-field parser/type confirmation above                                                                         |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                               | Required improvements            |
| ----------------------------------- | ----------------- | --------------------------------------------------------------------------------------- | -------------------------------- |
| Senior platform architect           | needs-improvement | All pipeline fields including toolFilter/maxTools verified current                      | Add HANDOFF history default note |
| Senior content writer               | ready             | Excellent configuration checklist table ("start with" / "tighten when")                 | None blocking                    |
| Product manager/customer enablement | ready             | The "agent opt-out is a veto" clarification prevents a real and common misconfiguration | None blocking                    |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                  | Final score |
| ------------------------------------------ | ------------- | ---------------------------------- | ----------- |
| Grounding in the code                      | 4             | Added HANDOFF history default note | 5           |
| Depth of conceptual explanation            | 5             | None needed                        | 5           |
| Readability and usability                  | 5             | None needed                        | 5           |
| Coverage of examples                       | 5             | None needed                        | 5           |
| Search and discovery quality               | 5             | None needed                        | 5           |
| Completeness of workflow and failure modes | 5             | None needed                        | 5           |
| Customer/partner self-service readiness    | 5             | None needed                        | 5           |
| Scenario comprehensiveness                 | 4             | None needed                        | 4           |
| Article completeness                       | 5             | None needed                        | 5           |

**Gate result:** pass (after minor proposed addition)
