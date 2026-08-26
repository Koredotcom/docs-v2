# HowTo Review: write-agent-goals-personas-instructions

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/write-agent-goals-personas-instructions.md`
**Topic:** 1.6 - How to write effective agent goals, personas, instructions, and limitations
**Verdict:** update-needed

## Proposed changes

- Add a note that the one `HANDOFF` entry omits `HISTORY`, so `Billing_Specialist` now receives the full conversation history by default (`full`, changed from `auto`).

Everything else is accurate: `PERSONA` (short and multiline), `LIMITATIONS`, `IDENTITY:` as an optional alternative grouping, and the quoted semantic `WHEN` boundary condition were all independently confirmed against current parser source.

## Evidence

| Claim                                                        | Current evidence                                                                | Impact           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------- | ---------------- |
| HANDOFF history default changed `auto` → `full`              | `packages/compiler/src/platform/contracts/contract-source-data.ts:3`, ABLP-3301 | Add note         |
| `IDENTITY:` is a current, valid alternative grouping section | `packages/core/src/parser/agent-based-parser.ts:982`                            | No change needed |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/write-agent-goals-personas-instructions-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted insertion, not a full rewrite)

Insert this sentence at the end of the existing "How it works" section (after "...preventing the wrong agent from taking a sensitive action."):

```markdown
Since the `HANDOFF` above omits `HISTORY`, `Billing_Specialist` now receives the full conversation history by default (the current platform default when `HISTORY` is omitted) — set an explicit `HISTORY` strategy if you want bounded or summary-only context instead.
```

No other part of the article needs to change.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/write-agent-goals-personas-instructions.md` (single sentence insertion, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/write-agent-goals-personas-instructions-2026-08-21-evidence.md` (already current)
