# HowTo Review: choose-single-agent-or-specialists

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/choose-single-agent-or-specialists.md`
**Topic:** 1.2 - How to decide whether to build one agent or multiple specialist agents
**Verdict:** update-needed

## Proposed changes

This article's syntax is accurate and current across every construct used (`RETURN`/`EXPECT_RETURN` alias, shorthand `PASS`/`SUMMARY`, `AGENTS:` roster, `DELEGATE` fields). Only two small additions are needed:

- Add a note that the `HANDOFF` entries in the specialist example omit `HISTORY`, so each specialist now receives the full conversation history by default (`full`, changed from `auto`).

## Evidence

| Claim                                                                                                 | Current evidence                                                                                                   | Impact                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RETURN: true/false` is a current alias for `EXPECT_RETURN`                                           | `packages/core/src/parser/agent-based-parser.ts` (`case 'RETURN'`/`case 'EXPECT_RETURN'` both set `config.return`) | Confirms no syntax fix needed                                                                                                                         |
| HANDOFF history default changed `auto` → `full`                                                       | `packages/compiler/src/platform/contracts/contract-source-data.ts:3`, ABLP-3301                                    | Add note                                                                                                                                              |
| `autoGuardConstraint` only applies to `CONSTRAINTS`/`REQUIRE`, never to `HANDOFF`/`SUPERVISOR` `WHEN` | `packages/compiler/src/platform/ir/compiler.ts:2414` (its single caller, inside constraint compilation)            | Correction to an earlier draft of this review: no auto-guard note is added to the article, since it would have been inaccurate for HANDOFF conditions |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/choose-single-agent-or-specialists-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted insertion, not a full rewrite)

Insert this paragraph immediately after the existing `AGENTS:` is a readable roster... sentence (currently the last line before "## When to use handoff"):

```markdown
`AGENTS:` is a readable roster. `HANDOFF` is the executable routing surface. `customer_id` is gathered before handoff and passed to the specialists with `PASS`.

Since none of the `HANDOFF` entries above declare `HISTORY`, each specialist now receives the full conversation history by default (the current platform default when `HISTORY` is omitted).
```

No other part of the article needs to change — the rest of the content (concept, decision guide, all five example files, delegate section, verification, checklist, common mistakes, troubleshooting) remains accurate as written.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/choose-single-agent-or-specialists.md` (single paragraph insertion, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/choose-single-agent-or-specialists-2026-08-21-evidence.md` (already current)
