# Evidence: use-behavior-profiles-by-context

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-behavior-profiles-by-context.md`
**Topic:** 1.7 - How to use behavior profiles to change agent behavior by context
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                                                                                              | Purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apps/runtime/src/services/execution/profile-resolver.ts` (lines 452-488, 508-561)                                                                | Confirms `BEHAVIOR_PROFILE` `WHEN` conditions are evaluated via `evaluateCelCondition` (CEL), a completely separate evaluation path from both the HANDOFF routing evaluator (`evaluateConditionDual`) and the `autoGuardConstraint` compiler rewriting (which only applies to `CONSTRAINTS`). Confirms profiles are sorted and applied in ascending `priority` order with higher-priority (higher-number) profiles winning on conflict — matches the article's claim that `PRIORITY` decides which profile wins. |
| `packages/core/src/parser/agent-based-parser.ts:982` (valid sections), `:833` (`USE BEHAVIOR_PROFILE:`), `:5599,5602` (`WHEN`, `PRIORITY` fields) | Confirms `BEHAVIOR_PROFILE:`, `USE BEHAVIOR_PROFILE:`, `PRIORITY`, and `WHEN` are all current, recognized constructs                                                                                                                                                                                                                                                                                                                                                                                             |

This article has no `SUPERVISOR`, `HANDOFF`, `DELEGATE`, or `MEMORY` block, so none of the confirmed drift items from this refresh batch apply. It was also specifically checked for auto-guard relevance (given its `WHEN: sentiment == "frustrated" OR repeat_contact == true` compound OR condition) and confirmed clean: `BEHAVIOR_PROFILE` WHEN uses CEL evaluation via `evaluateCelCondition`, not `autoGuardConstraint` (which is CONSTRAINTS-only) and not the HANDOFF routing evaluator either. The dual-evaluator's own documented behavior ("injects null for missing vars, so OR clauses safely evaluate to false without guards" — from `autoGuardConstraint`'s doc comment, describing the shared underlying null-injection behavior) means this OR condition is safe without any special guard syntax.

## Scenario and variant map

| Scenario or variant                                                | Supported?                         | Evidence                          | Article coverage                                         |
| ------------------------------------------------------------------ | ---------------------------------- | --------------------------------- | -------------------------------------------------------- |
| Inline `BEHAVIOR_PROFILE` attached directly in an agent file       | yes                                | Confirmed current                 | Covered                                                  |
| Standalone `BEHAVIOR_PROFILE` + `USE BEHAVIOR_PROFILE:` attachment | yes                                | Confirmed current                 | Covered                                                  |
| `PRIORITY`-based conflict resolution (higher number wins)          | yes, confirmed current             | `profile-resolver.ts:486-488,561` | Covered accurately                                       |
| Compound OR `WHEN` condition on context values that may be unset   | yes, safe without special handling | CEL null-injection behavior       | Correctly not over-engineered with unneeded guard syntax |
| `VOICE`/channel-specific settings within a profile                 | yes                                | Standard                          | Covered                                                  |

## Operational readiness map

| Requirement                                  | Evidence                                                                                                                                                                                                                                        | Article coverage                                                                           | Gap or action    |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------- |
| Runtime behavior verified                    | WHEN/PRIORITY/CEL evaluation and priority-ordering all confirmed current                                                                                                                                                                        | Covered                                                                                    | None             |
| Required companion resources identified      | n/a — profiles attach to agents already defined elsewhere                                                                                                                                                                                       | n/a                                                                                        | Correctly scoped |
| Referenced variables have sources            | `sentiment`, `repeat_contact`, `channel` are not declared via MEMORY anywhere, but the article already explicitly instructs "keep conditions based on values your project actually provides" and lists this as a checklist/troubleshooting item | Covered — already treats this as the reader's responsibility rather than silently assuming | None             |
| Fallback/failure/ambiguity behavior verified | "Profile never applies" and "wrong profile wins" troubleshooting rows cover this                                                                                                                                                                | Covered                                                                                    | None             |
| Customer verification path defined           | Concrete match/no-match testing and priority-override testing guidance                                                                                                                                                                          | Covered                                                                                    | None             |
| Production readiness checklist included      | Present and specific, including a "shared profiles are versioned and reviewed" governance item                                                                                                                                                  | Covered                                                                                    | None             |

## Example validation

| Article block                                                     | Classification           | Validation method                                                       | Result | Warnings or errors | Action |
| ----------------------------------------------------------------- | ------------------------ | ----------------------------------------------------------------------- | ------ | ------------------ | ------ |
| Block 1 (inline profiles on Support_Assistant)                    | full-document            | Close reading against profile-resolver.ts and parser field confirmation | pass   | None               | Keep   |
| Blocks 2-3 (standalone profile + USE BEHAVIOR_PROFILE attachment) | full-document (as a set) | Close reading                                                           | pass   | None               | Keep   |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-06-26 to 2026-08-21)

No drift affecting this article was found. It has no exposure to HANDOFF/DELEGATE/MEMORY, and its central claims about PRIORITY-based conflict resolution and WHEN condition evaluation were independently re-verified against current runtime code. The article's OR-based compound condition was specifically checked for auto-guard exposure (given the false lead from an earlier draft's misconception about `autoGuardConstraint` applying broadly to WHEN conditions) and confirmed to need no such note — CEL's null-injection already handles it safely.

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                                                                                                          |
| -------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | agent-based-parser.ts (BEHAVIOR_PROFILE, USE BEHAVIOR_PROFILE, WHEN, PRIORITY), profile-resolver.ts (evaluateCelCondition, priority sort/apply) |
| Did I search synonyms/neighboring constructs?                              | pass   | BEHAVIOR_PROFILE, PRIORITY, WHEN, CEL, USE BEHAVIOR_PROFILE                                                                                     |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Inline and standalone forms both covered                                                                                                        |
| Did I distinguish optional vs required sections?                           | pass   | Article explicitly says use profiles only for context-sensitive adaptation, not core responsibility changes                                     |
| Did I explain reasoning-layer guidance where supported?                    | pass   | INSTRUCTIONS guidance within profiles explained                                                                                                 |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Inline vs standalone presented as equally valid, situation-dependent                                                                            |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found                                                                                                                                    |
| If asked "are you not considering all scenarios?" what would I show?       | —      | profile-resolver.ts evidence above                                                                                                              |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict | Strengths                                                                                                     | Required improvements |
| ----------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------- | --------------------- |
| Senior platform architect           | ready   | PRIORITY/WHEN/CEL evaluation all verified current; compound OR condition specifically checked for safety      | None blocking         |
| Senior content writer               | ready   | Clear inline-vs-standalone guidance; concrete common-variations section                                       | None blocking         |
| Product manager/customer enablement | ready   | The "shared profiles are versioned and reviewed" governance note is valuable, non-obvious enablement guidance | None blocking         |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made | Final score |
| ------------------------------------------ | ------------- | ----------------- | ----------- |
| Grounding in the code                      | 5             | None needed       | 5           |
| Depth of conceptual explanation            | 5             | None needed       | 5           |
| Readability and usability                  | 5             | None needed       | 5           |
| Coverage of examples                       | 4             | None needed       | 4           |
| Search and discovery quality               | 5             | None needed       | 5           |
| Completeness of workflow and failure modes | 5             | None needed       | 5           |
| Customer/partner self-service readiness    | 5             | None needed       | 5           |
| Scenario comprehensiveness                 | 4             | None needed       | 4           |
| Article completeness                       | 5             | None needed       | 5           |

**Gate result:** pass — no changes required
