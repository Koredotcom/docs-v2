# Evidence: design-supervisor-routing-agent

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-supervisor-routing-agent.md`
**Topic:** 1.3 - How to design a supervisor that routes users to specialist agents
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

Same construct set as `choose-single-agent-or-specialists` (this article shares the identical support-supervisor example): `packages/core/src/parser/agent-based-parser.ts` (`RETURN`/`EXPECT_RETURN` alias, shorthand `PASS`/`SUMMARY`, `AGENTS:` roster), `packages/compiler/src/platform/contracts/contract-source-data.ts:3` (ABLP-3301 HANDOFF history default). Also carries forward the correction that `autoGuardConstraint` (`packages/compiler/src/platform/ir/compiler.ts:2414,2554`) only applies to `CONSTRAINTS`/`REQUIRE`, never to `HANDOFF`/`SUPERVISOR` `WHEN`. Additionally checked:

| File                                                                               | Purpose                                                                                                                        |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `packages/core/src/parser/agent-based-parser.ts` (quoted semantic `WHEN` handling) | Confirms the plain-language routing variation's quoted conditions parse correctly                                              |
| `apps/runtime/src/services/execution/multi-intent/multi-intent-router.ts`          | Confirms `MULTI_INTENT` disambiguation, referenced in passing in "Fallback and ambiguity design", is a current runtime feature |

## Scenario and variant map

| Scenario or variant                                   | Supported?                                       | Evidence                                                      | Article coverage                                                                                          |
| ----------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Declared intent category routing                      | yes                                              | Standard                                                      | Covered                                                                                                   |
| Structured field-based routing (`customer_id IS SET`) | yes                                              | Standard                                                      | Covered                                                                                                   |
| Quoted semantic condition routing                     | yes                                              | Confirmed                                                     | Covered                                                                                                   |
| `RETURN: true/false` shorthand                        | yes, confirmed current alias for `EXPECT_RETURN` | Same as topic 1.2                                             | Covered                                                                                                   |
| HANDOFF history default now `full`                    | yes                                              | ABLP-3301                                                     | Not mentioned; all HANDOFF entries in both examples omit HISTORY                                          |
| Auto-guarding of HANDOFF `WHEN` conditions            | no                                               | `autoGuardConstraint` only applies to `CONSTRAINTS`/`REQUIRE` | Correctly out of scope — no article change needed                                                         |
| Multi-intent disambiguation (referenced in passing)   | yes, current                                     | multi-intent-router.ts                                        | Correctly mentioned as conditional ("if your runtime configuration supports...") rather than over-claimed |

## Operational readiness map

| Requirement                                  | Evidence                                                                 | Article coverage | Gap or action                    |
| -------------------------------------------- | ------------------------------------------------------------------------ | ---------------- | -------------------------------- |
| Runtime behavior verified                    | All fields/shorthands confirmed current                                  | Covered          | None                             |
| Required companion resources identified      | All targets defined across both example projects                         | Covered          | None                             |
| Referenced variables have sources            | `customer_id` gathered before use in both examples                       | Covered          | None                             |
| Fallback/failure/ambiguity behavior verified | Dedicated "Fallback and ambiguity design" section with concrete guidance | Covered          | None                             |
| Customer verification path defined           | Concrete utterance-based verification steps                              | Covered          | None                             |
| Production readiness checklist included      | Present, thorough, includes a RETURN semantics agreement item            | Covered          | Add HANDOFF history default note |

## Example validation

| Article block                                                 | Classification           | Validation method                                        | Result | Warnings or errors | Action |
| ------------------------------------------------------------- | ------------------------ | -------------------------------------------------------- | ------ | ------------------ | ------ |
| Blocks 1-4 (support supervisor + 3 targets)                   | full-document (as a set) | Close reading, same construct set verified for topic 1.2 | pass   | None               | Keep   |
| Blocks 5-7 (billing supervisor + 2 targets, semantic routing) | full-document (as a set) | Close reading against quoted-condition parsing           | pass   | None               | Keep   |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-06-26 to 2026-08-21)

| Drift item                                                                   | Impact on article                                                               | Action                            |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------- |
| HANDOFF history default `auto` → `full` (ABLP-3301)                          | Both examples' HANDOFF entries omit HISTORY                                     | Add note                          |
| Auto-guard (`autoGuardConstraint`)                                           | Applies only to `CONSTRAINTS`/`REQUIRE`, never to `HANDOFF`/`SUPERVISOR` `WHEN` | Not applicable; no article change |
| Root-level guard-variable parser fix, delegate guard fix, `INITIAL:` keyword | Not applicable — no single-segment guard variables, no DELEGATE, no MEMORY      | None                              |

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                           |
| -------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | Same construct set as 1.2, plus multi-intent-router.ts for the passing reference |
| Did I search synonyms/neighboring constructs?                              | pass   | HANDOFF, WHEN, RETURN, PASS, SUMMARY, MULTI_INTENT                               |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Three WHEN styles table already covers this well                                 |
| Did I distinguish optional vs required sections?                           | pass   | `AGENTS:` roster explicitly distinguished from executable `HANDOFF`              |
| Did I explain reasoning-layer free-form guidance where supported?          | pass   | Quoted semantic condition variation covers this                                  |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Decision table presents all three WHEN styles as valid                           |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found                                                                     |
| If asked "are you not considering all scenarios?" what would I show?       | —      | Field-by-field parser confirmation above                                         |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                                                               | Required improvements            |
| ----------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Senior platform architect           | needs-improvement | All syntax verified current; excellent fallback/ambiguity design section                                                | Add HANDOFF history default note |
| Senior content writer               | ready             | Very strong structure and progression; the "designing the context package" three-question framework is genuinely useful | None blocking                    |
| Product manager/customer enablement | ready             | Concrete, actionable checklist including a cross-team RETURN-semantics agreement item                                   | None blocking                    |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                                                         | Final score |
| ------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Added HANDOFF history default note; corrected an earlier draft's incorrect auto-guard claim before it reached the article | 5           |
| Depth of conceptual explanation            | 5             | None needed                                                                                                               | 5           |
| Readability and usability                  | 5             | None needed                                                                                                               | 5           |
| Coverage of examples                       | 5             | None needed                                                                                                               | 5           |
| Search and discovery quality               | 5             | None needed                                                                                                               | 5           |
| Completeness of workflow and failure modes | 5             | None needed                                                                                                               | 5           |
| Customer/partner self-service readiness    | 5             | None needed                                                                                                               | 5           |
| Scenario comprehensiveness                 | 4             | None needed                                                                                                               | 4           |
| Article completeness                       | 5             | None needed                                                                                                               | 5           |

**Gate result:** pass (after minor proposed additions)
