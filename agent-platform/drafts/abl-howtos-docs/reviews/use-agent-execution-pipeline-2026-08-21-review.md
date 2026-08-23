# HowTo Review: use-agent-execution-pipeline

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-agent-execution-pipeline.md`
**Topic:** 1.10 - How to use EXECUTION.pipeline for agent routing, classification, and short-circuiting
**Verdict:** update-needed

## Proposed changes

- Add a note that the `HANDOFF` entries omit `HISTORY`, so each specialist now receives the full conversation history by default (`full`, changed from `auto`).

Every `EXECUTION.pipeline` field in the article (`shortCircuit`, `keywordVeto`, `intentBridge`, thresholds, `outOfScopeDecline`, `multiIntentSignal`) was individually re-confirmed against current parser/type source and remains accurate, as does the project-level-gate-vs-agent-config distinction.

## Evidence

| Claim                                           | Current evidence                                                                                                 | Impact                        |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| All `EXECUTION.pipeline` fields are current     | `packages/core/src/types/agent-based.ts`, `packages/core/src/parser/agent-based-parser.ts`                       | Confirms no syntax fix needed |
| Project-level gate distinct from agent config   | `apps/runtime/src/services/filler/config-resolver.ts`, `apps/runtime/src/services/execution/routing-executor.ts` | Confirms accuracy             |
| HANDOFF history default changed `auto` → `full` | `packages/compiler/src/platform/contracts/contract-source-data.ts:3`, ABLP-3301                                  | Add note                      |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/use-agent-execution-pipeline-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted insertion, not a full rewrite)

Insert this sentence at the end of the existing "How it works" section (after the `intentBridge` tier table):

```markdown
Since none of the `HANDOFF` entries above declare `HISTORY`, each specialist now receives the full conversation history by default (the current platform default when `HISTORY` is omitted).
```

No other part of the article needs to change.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/use-agent-execution-pipeline.md` (single sentence insertion, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/use-agent-execution-pipeline-2026-08-21-evidence.md` (already current)
