# HowTo Review: design-supervisor-routing-agent

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-supervisor-routing-agent.md`
**Topic:** 1.3 - How to design a supervisor that routes users to specialist agents
**Verdict:** update-needed

## Proposed changes

Same two minor additions as `choose-single-agent-or-specialists` (this article shares its core example), applied at this article's own relevant location:

- Add a note that the `HANDOFF` entries omit `HISTORY`, so each specialist now receives the full conversation history by default (`full`, changed from `auto`).

Everything else — the three-style routing decision guide, the context-package design guidance, the fallback/ambiguity design section, and both example projects — is accurate and current.

## Evidence

| Claim                                                                                                 | Current evidence                                                                | Impact                                                                                    |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| HANDOFF history default changed `auto` → `full`                                                       | `packages/compiler/src/platform/contracts/contract-source-data.ts:3`, ABLP-3301 | Add note                                                                                  |
| `autoGuardConstraint` only applies to `CONSTRAINTS`/`REQUIRE`, never to `HANDOFF`/`SUPERVISOR` `WHEN` | `packages/compiler/src/platform/ir/compiler.ts:2414` (its single caller)        | Correction to an earlier draft of this review: no auto-guard note is added to the article |
| `RETURN`/`PASS`/`SUMMARY`/`AGENTS:` all confirmed current                                             | Same evidence as topic 1.2                                                      | No syntax fix needed                                                                      |
| Multi-intent disambiguation reference is accurate and appropriately hedged                            | `apps/runtime/src/services/execution/multi-intent/multi-intent-router.ts`       | No change needed                                                                          |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/design-supervisor-routing-agent-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted insertion, not a full rewrite)

Insert this paragraph immediately after the existing sentence "The supervisor gathers `customer_id`, then passes it with `PASS`. `RETURN: true` on account support means bounded specialist work can return to the supervisor. `RETURN: false` on order status and live agent means the target keeps ownership.":

```markdown
Since none of the `HANDOFF` entries above declare `HISTORY`, each specialist now receives the full conversation history by default (the current platform default when `HISTORY` is omitted).
```

No other part of the article needs to change.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/design-supervisor-routing-agent.md` (single paragraph insertion, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/design-supervisor-routing-agent-2026-08-21-evidence.md` (already current)
