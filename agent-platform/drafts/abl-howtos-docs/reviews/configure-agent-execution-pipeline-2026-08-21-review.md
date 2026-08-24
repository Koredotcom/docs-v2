# HowTo Review: configure-agent-execution-pipeline

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/configure-agent-execution-pipeline.md`
**Topic:** 1.11 - How to configure EXECUTION.pipeline models, modes, thresholds, and fallbacks
**Verdict:** update-needed

## Proposed changes

- Add a note that the `HANDOFF` entries in the full configuration example omit `HISTORY`, so each specialist now receives the full conversation history by default (`full`, changed from `auto`).

`toolFilter`/`maxTools` (the field not already covered by topic 1.10's evidence) was independently confirmed current, along with all shared pipeline fields.

## Evidence

| Claim                                           | Current evidence                                                                           | Impact                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------- |
| `toolFilter`/`maxTools` are current             | `packages/core/src/types/agent-based.ts`, `packages/core/src/parser/agent-based-parser.ts` | Confirms no syntax fix needed |
| HANDOFF history default changed `auto` → `full` | `packages/compiler/src/platform/contracts/contract-source-data.ts:3`, ABLP-3301            | Add note                      |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/configure-agent-execution-pipeline-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted insertion, not a full rewrite)

Insert this sentence at the end of the existing "How it works" section (after "...production values should be tuned from real traffic."):

```markdown
Since none of the `HANDOFF` entries in the full configuration example declare `HISTORY`, each specialist now receives the full conversation history by default (the current platform default when `HISTORY` is omitted).
```

No other part of the article needs to change.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/configure-agent-execution-pipeline.md` (single sentence insertion, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/configure-agent-execution-pipeline-2026-08-21-evidence.md` (already current)
