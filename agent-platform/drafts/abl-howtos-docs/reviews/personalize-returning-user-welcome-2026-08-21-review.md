# HowTo Review: personalize-returning-user-welcome

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/personalize-returning-user-welcome.md`
**Topic:** 2.3 - How to personalize a welcome message for returning users
**Verdict:** no-change

## Proposed changes

None. The article's central operational claim — that a startup `CALL` failure is logged and execution continues to render the welcome — was independently re-verified against current runtime code (`apps/runtime/src/services/execution/flow-step-executor.ts:10108-10151`) and is exactly accurate. `session.member_id` is already correctly caveated as a project/channel-supplied value rather than assumed as a platform built-in, unlike the sibling article `use-on-start-welcome`, which had a real invalid-path bug.

## Evidence

| Claim                                                                           | Current evidence                                                        | Impact            |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------- |
| CALL failure is logged and execution continues                                  | `apps/runtime/src/services/execution/flow-step-executor.ts:10108-10151` | Confirms accuracy |
| Read-only tool declaration (`side_effects: false`, `confirm: never`) is current | Same evidence as topic 3.4                                              | Confirms accuracy |
| Startup `SET` + `BRANCHES` pattern is current                                   | Same evidence as topic 2.2                                              | Confirms accuracy |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/personalize-returning-user-welcome-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Files to update after approval

None — no change to `articles/personalize-returning-user-welcome.md` is proposed.
