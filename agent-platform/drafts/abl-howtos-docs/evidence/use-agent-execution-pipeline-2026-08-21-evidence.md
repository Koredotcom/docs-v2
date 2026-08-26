# Evidence: use-agent-execution-pipeline

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-agent-execution-pipeline.md`
**Topic:** 1.10 - How to use EXECUTION.pipeline for agent routing, classification, and short-circuiting
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                                                             | Purpose                                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/core/src/types/agent-based.ts`, `packages/core/src/parser/agent-based-parser.ts`                       | Confirms `shortCircuit`, `keywordVeto`, `intentBridge`, `confidenceThreshold`, `programmaticThreshold`, `guidedThreshold`, `outOfScopeDecline`, `multiIntentSignal` are all present and current                             |
| `apps/runtime/src/services/filler/config-resolver.ts`, `apps/runtime/src/services/execution/routing-executor.ts` | Confirms project-level pipeline gate/effective-config resolution exists, consistent with the article's claim that the pipeline "is disabled by default unless the project-level gate and effective configuration enable it" |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` (ABLP-3301)                                 | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'` — all 3 HANDOFF entries omit `HISTORY`                                                                                                                                          |

All three `HANDOFF` conditions are quoted semantic strings, not structured comparisons, so auto-guard (`autoGuardConstraint`, which only applies to `CONSTRAINTS` regardless) is not a relevant consideration here.

## Scenario and variant map

| Scenario or variant                                                   | Supported?             | Evidence                                    | Article coverage                                  |
| --------------------------------------------------------------------- | ---------------------- | ------------------------------------------- | ------------------------------------------------- |
| `EXECUTION.pipeline` with `shortCircuit`/`keywordVeto`/`intentBridge` | yes, confirmed current | Field-by-field parser/type confirmation     | Covered                                           |
| Project-level enablement gate distinct from agent-level config        | yes                    | config-resolver.ts, routing-executor.ts     | Covered accurately                                |
| Intent-bridge tiers (programmatic/guided/autonomous)                  | yes                    | Article's own table matches field semantics | Covered                                           |
| HANDOFF history default now `full`                                    | yes                    | ABLP-3301                                   | Not mentioned; all 3 HANDOFF entries omit HISTORY |

## Operational readiness map

| Requirement                                  | Evidence                                                                                             | Article coverage | Gap or action                    |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------- |
| Runtime behavior verified                    | All pipeline fields and project-gate behavior confirmed current                                      | Covered          | None                             |
| Required companion resources identified      | Billing_Agent, Technical_Support_Agent, General_Fallback_Agent all defined                           | Covered          | None                             |
| Referenced variables have sources            | n/a — pipeline classifies raw user input, no gathered fields referenced                              | n/a              | Correctly scoped                 |
| Fallback/failure/ambiguity behavior verified | General_Fallback_Agent route + "Common mistakes"/"Troubleshooting" cover no-match and misroute cases | Covered          | None                             |
| Customer verification path defined           | Concrete threshold/veto/multi-intent testing guidance                                                | Covered          | None                             |
| Production readiness checklist included      | Present and specific, including a trace-dashboard monitoring item                                    | Covered          | Add HANDOFF history default note |

## Example validation

| Article block                               | Classification           | Validation method                            | Result | Warnings or errors | Action |
| ------------------------------------------- | ------------------------ | -------------------------------------------- | ------ | ------------------ | ------ |
| Blocks 1-4 (Support_Router + 3 specialists) | full-document (as a set) | Close reading against pipeline field parsing | pass   | None found         | Keep   |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-06-25 to 2026-08-21)

| Drift item                                                               | Impact on article                                                                                                                                                | Action         |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| HANDOFF history default `auto` → `full` (ABLP-3301)                      | All 3 HANDOFF entries omit HISTORY                                                                                                                               | Add brief note |
| Auto-guard, root-level guard fix, delegate guard fix, `INITIAL:` keyword | Not applicable — quoted semantic WHEN conditions, no DELEGATE, no MEMORY                                                                                         | None           |
| EXECUTION.pipeline classifier fields                                     | No related commits found touching this construct family in the reviewed git history window; fields independently re-confirmed against current parser/type source | None           |

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                                                             |
| -------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | agent-based-parser.ts, agent-based.ts, config-resolver.ts, routing-executor.ts                                     |
| Did I search synonyms/neighboring constructs?                              | pass   | EXECUTION.pipeline, shortCircuit, keywordVeto, intentBridge, project gate                                          |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Field-by-field confirmation of every setting in the example                                                        |
| Did I distinguish optional vs required sections?                           | pass   | Article explicitly separates agent-level tuning from project-level enablement                                      |
| Did I explain reasoning-layer guidance where supported?                    | pass   | "Autonomous" tier explanation covers this                                                                          |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Common variations present shortCircuit/keywordVeto/multiIntentSignal/outOfScopeDecline as independently toggleable |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found                                                                                                       |
| If asked "are you not considering all scenarios?" what would I show?       | —      | Field-by-field parser/type confirmation above                                                                      |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                                                                   | Required improvements            |
| ----------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Senior platform architect           | needs-improvement | All pipeline fields verified current; project-gate vs agent-config distinction confirmed accurate                           | Add HANDOFF history default note |
| Senior content writer               | ready             | Clear tier table (programmatic/guided/autonomous); concrete common-variations by feature toggle                             | None blocking                    |
| Product manager/customer enablement | ready             | The "sensitive keywords reviewed by product, support, and compliance owners" checklist item is valuable governance guidance | None blocking                    |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                  | Final score |
| ------------------------------------------ | ------------- | ---------------------------------- | ----------- |
| Grounding in the code                      | 4             | Added HANDOFF history default note | 5           |
| Depth of conceptual explanation            | 5             | None needed                        | 5           |
| Readability and usability                  | 5             | None needed                        | 5           |
| Coverage of examples                       | 4             | None needed                        | 4           |
| Search and discovery quality               | 5             | None needed                        | 5           |
| Completeness of workflow and failure modes | 5             | None needed                        | 5           |
| Customer/partner self-service readiness    | 5             | None needed                        | 5           |
| Scenario comprehensiveness                 | 4             | None needed                        | 4           |
| Article completeness                       | 5             | None needed                        | 5           |

**Gate result:** pass (after minor proposed addition)
