# HowTo Review: define-agent-responsibilities

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/define-agent-responsibilities.md`
**Topic:** 1.4 - How to define clear responsibilities for each enterprise agent
**Verdict:** update-needed

## Proposed changes

- Add a note that the `HANDOFF` entries omit `HISTORY`, so `Billing_Support_Agent` and `Live_Agent` now receive the full conversation history by default (`full`, changed from `auto`).

The flat `CONSTRAINTS: - REQUIRE account_id IS SET / ON_FAIL: ...` syntax (no explicit phase label) was specifically verified against the current parser and is accurate — it defaults to an implicit `"always"` phase and does not trigger the "plain constraint list item" warning. No other change is needed.

## Evidence

| Claim                                                                                                 | Current evidence                                                                | Impact                                                                                    |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Flat `CONSTRAINTS`/`REQUIRE`/`ON_FAIL` (no phase label) is valid, current syntax                      | `packages/core/src/parser/agent-based-parser.ts:5006-5075`                      | Confirms no syntax fix needed                                                             |
| HANDOFF history default changed `auto` → `full`                                                       | `packages/compiler/src/platform/contracts/contract-source-data.ts:3`, ABLP-3301 | Add note                                                                                  |
| `autoGuardConstraint` only applies to `CONSTRAINTS`/`REQUIRE`, never to `HANDOFF`/`SUPERVISOR` `WHEN` | `packages/compiler/src/platform/ir/compiler.ts:2414` (its single caller)        | Correction to an earlier draft of this review: no auto-guard note is added to the article |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/define-agent-responsibilities-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted insertion, not a full rewrite)

Insert this paragraph immediately after the existing sentence "The account-security agent owns identity verification and recovery. Billing and human assistance are outside that responsibility and are represented as handoff boundaries.":

```markdown
Since neither `HANDOFF` entry above declares `HISTORY`, each target now receives the full conversation history by default (the current platform default when `HISTORY` is omitted).
```

No other part of the article needs to change.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/define-agent-responsibilities.md` (single paragraph insertion, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/define-agent-responsibilities-2026-08-21-evidence.md` (already current)
