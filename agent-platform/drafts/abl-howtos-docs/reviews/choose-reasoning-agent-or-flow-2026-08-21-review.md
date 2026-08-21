# HowTo Review: choose-reasoning-agent-or-flow

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/choose-reasoning-agent-or-flow.md`
**Topic:** 1.1 - How to choose between a reasoning agent and a FLOW-based agent
**Verdict:** no-change

## Proposed changes

None. This article has no `SUPERVISOR`/`HANDOFF`/`DELEGATE`/`MEMORY` content, so it is unaffected by every confirmed drift item found in this refresh round (HANDOFF history default change, delegate WHEN guard fix, root-level guard-variable parser fix, `INITIAL:` session-memory keyword). Its core constructs — `FLOW` with `entry_point`/`steps:`, `REASONING: true/false`, `EXIT_WHEN`, `MAX_TURNS`, `GATHER`, `COMPLETE` — were all independently re-verified against current parser source and remain accurate.

## Evidence

| Claim                                                                                                                                        | Current evidence                                                                         | Impact                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------- |
| `FLOW: entry_point: ... steps: [...]` + flat top-level step blocks is a valid, current authoring style                                       | `packages/core/src/parser/agent-based-parser.ts:1120-1180`                               | Confirms the article's examples are accurate |
| `EXIT_WHEN`/`MAX_TURNS` are current, recognized bounded-reasoning-zone fields                                                                | `packages/core/src/parser/agent-based-parser.ts:1212-1213,1278-1279,2289,2292,2413-2414` | Confirms the third example is accurate       |
| Article has no exposure to any confirmed drift item (HANDOFF history default, delegate guard fix, root-guard parser fix, `INITIAL:` keyword) | No `SUPERVISOR`/`HANDOFF`/`DELEGATE`/`MEMORY` block anywhere in the article              | No changes needed                            |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/choose-reasoning-agent-or-flow-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard (all criteria at 4 or 5; gate result pass with no changes required).

## Files to update after approval

None — no change to `articles/choose-reasoning-agent-or-flow.md` is proposed. The evidence file above is the only new artifact from this refresh.
