# Evidence: define-agent-responsibilities

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/define-agent-responsibilities.md`
**Topic:** 1.4 - How to define clear responsibilities for each enterprise agent
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                                                              | Purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/core/src/parser/agent-based-parser.ts:5006-5075` (`parseConstraints`, `CONSTRAINT_REQUIREMENT_PATTERN`) | Confirms a flat `- REQUIRE <expr>` / `ON_FAIL:` bullet directly under `CONSTRAINTS:` (no explicit phase label) is valid, current syntax — it defaults to an implicit `"always"` phase. The "plain list item" warning only fires for bullets that don't match `REQUIRE`/`WARN`/`LIMIT`/`RESTRICT`, which is not this article's case.                                                                                                                                                                                        |
| Same HANDOFF/PASS/SUMMARY/RETURN evidence as topics 1.2/1.3                                                       | This article reuses the same handoff pattern                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Same conclusions apply |
| `packages/compiler/src/platform/ir/compiler.ts:2414,2554` (`autoGuardConstraint`)                                 | Unlike the HANDOFF-only articles in this batch, this article's `CONSTRAINTS: - REQUIRE account_id IS SET` genuinely does go through `autoGuardConstraint` (it's the one construct that actually calls it). Per the function's own doc comment: "If the condition already contains IS NOT SET or IS SET, the author is handling guards explicitly — return as-is." Since the condition already contains `IS SET`, it is returned unchanged. No visible effect, but for a more precise reason than "HANDOFF isn't in scope." |

## Scenario and variant map

| Scenario or variant                                                      | Supported?                                                                                                            | Evidence                          | Article coverage                                  |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------- |
| Flat `CONSTRAINTS: - REQUIRE ... ON_FAIL: ...` (no phase label)          | yes, confirmed current, defaults to implicit `always` phase                                                           | `agent-based-parser.ts:5006-5075` | Covered, verified accurate                        |
| `HANDOFF` with `RETURN: false` for out-of-scope routing (billing, human) | yes                                                                                                                   | Same as 1.2/1.3                   | Covered                                           |
| HANDOFF history default now `full`                                       | yes                                                                                                                   | ABLP-3301                         | Not mentioned                                     |
| Auto-guarding of the `CONSTRAINTS: REQUIRE account_id IS SET` condition  | n/a — condition already contains `IS SET`, returned unchanged by `autoGuardConstraint`'s own explicit-guard exemption | compiler.ts:2554 doc comment      | Correctly not mentioned; no article change needed |

## Operational readiness map

| Requirement                                  | Evidence                                                                                         | Article coverage | Gap or action                    |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------- | -------------------------------- |
| Runtime behavior verified                    | CONSTRAINTS/REQUIRE/ON_FAIL and HANDOFF fields all confirmed current                             | Covered          | None                             |
| Required companion resources identified      | Billing_Support_Agent, Live_Agent both defined                                                   | Covered          | None                             |
| Referenced variables have sources            | `account_id`, `verification_method` both gathered before use                                     | Covered          | None                             |
| Fallback/failure/ambiguity behavior verified | `human_help` intent route covers ambiguous/unsupported case; `ON_FAIL` covers missing-field case | Covered          | None                             |
| Customer verification path defined           | Concrete utterance-based steps                                                                   | Covered          | None                             |
| Production readiness checklist included      | Present and thorough                                                                             | Covered          | Add HANDOFF history default note |

## Example validation

| Article block                                              | Classification           | Validation method                                 | Result | Warnings or errors | Action |
| ---------------------------------------------------------- | ------------------------ | ------------------------------------------------- | ------ | ------------------ | ------ |
| Blocks 1-3 (account-security agent + billing + live agent) | full-document (as a set) | Close reading against CONSTRAINTS/HANDOFF parsing | pass   | None               | Keep   |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-06-26 to 2026-08-21)

| Drift item                                                            | Impact on article                                                                                                             | Action                            |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| HANDOFF history default `auto` → `full` (ABLP-3301)                   | Both HANDOFF entries omit HISTORY                                                                                             | Add note                          |
| Auto-guard (`autoGuardConstraint`)                                    | Genuinely in scope here (CONSTRAINTS goes through it), but the condition already contains `IS SET` so it's returned unchanged | Not applicable; no article change |
| CONSTRAINTS/REQUIRE/ON_FAIL flat syntax                               | Verified unchanged and accurate                                                                                               | None                              |
| Root-level guard-variable fix, delegate guard fix, `INITIAL:` keyword | Not applicable                                                                                                                | None                              |

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                                                         |
| -------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | agent-based-parser.ts (CONSTRAINTS, HANDOFF), compiler.ts (autoGuardConstraint), auto-guard-constraint.test.ts |
| Did I search synonyms/neighboring constructs?                              | pass   | CONSTRAINTS, REQUIRE, WARN, LIMIT, RESTRICT, ON_FAIL, HANDOFF                                                  |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Confirmed flat-vs-phased CONSTRAINTS both work                                                                 |
| Did I distinguish optional vs required sections?                           | pass   | Article explicitly notes limitations alone are not hard enforcement                                            |
| Did I explain reasoning-layer guidance where supported?                    | n/a    | This article is about responsibility design, not semantic routing                                              |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Decision guide presents multiple valid design choices                                                          |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found                                                                                                   |
| If asked "are you not considering all scenarios?" what would I show?       | —      | CONSTRAINTS parser evidence above                                                                              |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                                                   | Required improvements            |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------------------------------- | -------------------------------- |
| Senior platform architect           | needs-improvement | CONSTRAINTS/REQUIRE/ON_FAIL and HANDOFF syntax verified current and accurate                | Add HANDOFF history default note |
| Senior content writer               | ready             | The responsibility worksheet and surface table are genuinely useful, well-organized content | None blocking                    |
| Product manager/customer enablement | ready             | Concrete, actionable; the weak-vs-strong goal comparison is effective                       | None blocking                    |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                                                                                                                      | Final score |
| ------------------------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Added HANDOFF history default note; precisely confirmed (not assumed) that this article's CONSTRAINTS condition is exempt from auto-guard rewriting because it already contains IS SET | 5           |
| Depth of conceptual explanation            | 5             | None needed                                                                                                                                                                            | 5           |
| Readability and usability                  | 5             | None needed                                                                                                                                                                            | 5           |
| Coverage of examples                       | 5             | None needed                                                                                                                                                                            | 5           |
| Search and discovery quality               | 5             | None needed                                                                                                                                                                            | 5           |
| Completeness of workflow and failure modes | 5             | None needed                                                                                                                                                                            | 5           |
| Customer/partner self-service readiness    | 5             | None needed                                                                                                                                                                            | 5           |
| Scenario comprehensiveness                 | 4             | None needed                                                                                                                                                                            | 4           |
| Article completeness                       | 5             | None needed                                                                                                                                                                            | 5           |

**Gate result:** pass (after minor proposed additions)
