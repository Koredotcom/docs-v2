# HowTo Review: route-users-from-welcome

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-users-from-welcome.md`
**Topic:** 2.5 - How to route users from the welcome experience to the right agent
**Verdict:** update-needed

## Proposed changes

- Add a note that the `HANDOFF` entries in both examples omit `HISTORY`, so each specialist now receives the full conversation history by default (`full`, changed from `auto`).
- Clarify why `startup_choice` is declared both as a top-level `GATHER` and again inside the `capture_choice` flow step — a customer could reasonably read this as redundant or as two different fields that happen to share a name. The article should state explicitly whether the top-level declaration is a schema/type declaration referenced by `HANDOFF` and the flow-step `GATHER` is what actually triggers collection at that point, or whether one of the two declarations should simply be removed.

The core structural pattern — a plain `AGENT:` (not `SUPERVISOR:`) combining a top-level `HANDOFF:` block with its own `FLOW:` — was specifically verified against a real runtime test fixture (`action-handoff-parent.abl`) rather than assumed, and is confirmed valid.

## Evidence

| Claim                                                                       | Current evidence                                                                          | Impact                                               |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `AGENT:` + top-level `HANDOFF:` + `FLOW:` together is valid                 | `apps/runtime/src/__tests__/fixtures/orchestration/action-handoff-parent.abl`             | Confirms the article's core structure, no fix needed |
| HANDOFF history default changed `auto` → `full`                             | `packages/compiler/src/platform/contracts/contract-source-data.ts:3`, ABLP-3301           | Add note                                             |
| Dual top-level + flow-step `GATHER` for the same field name isn't explained | No comparable fixture found either confirming or ruling out this exact double-declaration | Add a clarifying note                                |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/route-users-from-welcome-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted insertion, not a full rewrite)

Insert this paragraph immediately after the existing "How it works" sentence "The specialist agents are included so the compiler and deployment can resolve the targets.":

```markdown
`startup_choice` is declared both at the top level and inside `capture_choice`. Keep only the flow-step `GATHER` if the field is only ever collected inside that step; a top-level declaration is only needed if `HANDOFF` conditions must reference the field before the flow step that collects it has run in a given turn. When in doubt, declare the field once, in the flow step that actually collects it.
```

And insert this sentence at the end of the same "How it works" section:

```markdown
Since neither `HANDOFF` example above declares `HISTORY`, each specialist now receives the full conversation history by default (the current platform default when `HISTORY` is omitted).
```

No other part of the article needs to change.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/route-users-from-welcome.md` (two paragraph insertions, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/route-users-from-welcome-2026-08-21-evidence.md` (already current)
