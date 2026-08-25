# HowTo Review: design-reusable-agent-modules

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-reusable-agent-modules.md`
**Topic:** 1.9 - How to design reusable agents and modules for large projects
**Verdict:** update-needed

## Proposed changes

- Add a note that the `HANDOFF` entries omit `HISTORY`, so `Product_Advisor` and `Order_Status_Agent` now receive the full conversation history by default (`full`, changed from `auto`).

The article's central technical claim — that `FROM ... USE` tool import syntax is removed and rejected — was independently reconfirmed against current parser source (`E720` error) and remains accurate.

## Evidence

| Claim                                           | Current evidence                                                                | Impact                    |
| ----------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------- |
| `FROM ... USE` is still rejected                | `packages/core/src/parser/agent-based-parser.ts:3719-3724` (E720 error)         | Confirms no change needed |
| HANDOFF history default changed `auto` → `full` | `packages/compiler/src/platform/contracts/contract-source-data.ts:3`, ABLP-3301 | Add note                  |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/design-reusable-agent-modules-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted insertion, not a full rewrite)

Insert this sentence at the end of the existing "How it works" section (after "...If those three disagree, reuse becomes fragile."):

```markdown
Since neither `HANDOFF` above declares `HISTORY`, each specialist now receives the full conversation history by default (the current platform default when `HISTORY` is omitted).
```

No other part of the article needs to change.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/design-reusable-agent-modules.md` (single sentence insertion, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/design-reusable-agent-modules-2026-08-21-evidence.md` (already current)
