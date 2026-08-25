# HowTo Review: use-behavior-profiles-by-context

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-behavior-profiles-by-context.md`
**Topic:** 1.7 - How to use behavior profiles to change agent behavior by context
**Verdict:** no-change

## Proposed changes

None. This article has no `SUPERVISOR`/`HANDOFF`/`DELEGATE`/`MEMORY` content, so it is unaffected by every confirmed drift item from this refresh round. Its central claims — `PRIORITY`-based conflict resolution and `WHEN` condition evaluation for behavior profiles — were independently re-verified against current runtime code (`apps/runtime/src/services/execution/profile-resolver.ts`) and remain accurate. The article's compound OR condition (`sentiment == "frustrated" OR repeat_contact == true`) was specifically checked for auto-guard exposure and confirmed safe without any added note: `BEHAVIOR_PROFILE` `WHEN` uses CEL evaluation, a separate path from both HANDOFF routing and `CONSTRAINTS`' `autoGuardConstraint`.

## Evidence

| Claim                                                                              | Current evidence                                                      | Impact                                       |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------- |
| `PRIORITY`-based conflict resolution works as described                            | `apps/runtime/src/services/execution/profile-resolver.ts:486-488,561` | Confirms accuracy                            |
| `BEHAVIOR_PROFILE` `WHEN` uses CEL evaluation, unaffected by `autoGuardConstraint` | `profile-resolver.ts:472-473` (`evaluateCelCondition`)                | No note needed for the compound OR condition |
| Inline and standalone `BEHAVIOR_PROFILE` forms both current                        | `packages/core/src/parser/agent-based-parser.ts:833,982`              | Confirms accuracy                            |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/use-behavior-profiles-by-context-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Files to update after approval

None — no change to `articles/use-behavior-profiles-by-context.md` is proposed.
