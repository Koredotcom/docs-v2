# HowTo Review: configure-agent-execution-settings

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/configure-agent-execution-settings.md`
**Topic:** 1.8 - How to configure model, timeout, and execution settings for an agent
**Verdict:** no-change

## Proposed changes

None. Every `EXECUTION` field in the article's example was individually verified against current parser source, including the two camelCase fields (`maxQueueDepth`, `maxConcurrentMessages`) that looked most likely to have drifted since they don't appear verbatim in the type definitions — they resolve correctly via the parser's key normalization (lowercasing + underscore stripping) to the same code path as their snake_case equivalents. The article's own claim that "the parser accepts both snake_case and some camelCase forms" is precisely accurate.

## Evidence

| Claim                                                                   | Current evidence                                                                          | Impact                                       |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------- |
| All EXECUTION field names in the example are current                    | `packages/core/src/parser/agent-based-parser.ts:7114-7156`                                | Confirms accuracy                            |
| camelCase forms (`maxQueueDepth`, `maxConcurrentMessages`) are accepted | Same file — case labels are normalized (lowercased, underscores stripped) before matching | Confirms the article's own explanatory claim |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/configure-agent-execution-settings-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Files to update after approval

None — no change to `articles/configure-agent-execution-settings.md` is proposed.
