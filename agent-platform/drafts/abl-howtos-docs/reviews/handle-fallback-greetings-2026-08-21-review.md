# HowTo Review: handle-fallback-greetings

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/handle-fallback-greetings.md`
**Topic:** 2.8 - How to handle empty-state and fallback greetings
**Verdict:** no-change

## Proposed changes

None. This article's central claim — that a top-level `ON_START RESPOND` acts as the fallback when `BRANCHES` don't match, and that a malformed branch condition fails closed rather than erroring — was independently re-verified against current runtime code (`apps/runtime/src/services/execution/flow-step-executor.ts:898-931`) and is exactly accurate. Unlike three sibling articles in this same topic (2.2, 2.6, 2.7), this article does not use the invalid `session.interaction.current.channel` path — its `session.interaction.current.language` reference is a real, valid field.

## Evidence

| Claim                                                      | Current evidence                                                                                      | Impact            |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------- |
| Top-level `ON_START RESPOND` acts as the BRANCHES fallback | `apps/runtime/src/services/execution/flow-step-executor.ts:898-931` (`topLevelResponseConfig` return) | Confirms accuracy |
| `session.interaction.current.language` is a valid field    | `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts`                      | Confirms accuracy |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/handle-fallback-greetings-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Files to update after approval

None — no change to `articles/handle-fallback-greetings.md` is proposed.
