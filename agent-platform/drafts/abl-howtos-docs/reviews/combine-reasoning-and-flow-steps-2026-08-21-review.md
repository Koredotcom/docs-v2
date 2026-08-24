# HowTo Review: combine-reasoning-and-flow-steps

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/combine-reasoning-and-flow-steps.md`
**Topic:** 1.5 - How to combine reasoning steps with deterministic FLOW steps
**Verdict:** no-change

## Proposed changes

None. This article has no `SUPERVISOR`/`HANDOFF`/`DELEGATE`/`MEMORY` content, so it is unaffected by every confirmed drift item from this refresh round. Its central claim — that the old agent-level `MODE:` pattern is deprecated in favor of per-step `REASONING: true/false` — was independently re-verified against current type definitions and remains accurate (`MODE is deleted from ABL`, per `packages/core/src/types/agent-based.ts:18-22`).

## Evidence

| Claim                                                                         | Current evidence                                                                                          | Impact                                             |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Legacy `MODE:` pattern is deleted/deprecated, `REASONING` per step is current | `packages/core/src/types/agent-based.ts:18-22,1896`; `packages/core/src/parser/agent-based-parser.ts:475` | Confirms the article's central warning is accurate |
| `REASONING`/`GATHER`/`SET`/`THEN` field syntax is current                     | Same evidence base as topic 1.1                                                                           | No changes needed                                  |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/combine-reasoning-and-flow-steps-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Files to update after approval

None — no change to `articles/combine-reasoning-and-flow-steps.md` is proposed.
