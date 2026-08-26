# HowTo Review: initialize-session-before-first-turn

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/initialize-session-before-first-turn.md`
**Topic:** 2.6 - How to initialize session variables before the first user turn
**Verdict:** update-needed

## Proposed changes

- **Correctness fix:** the minimal working example sets `channel_name = session.interaction.current.channel`, but `interaction.current` does not have a `channel` field (confirmed via `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts` — it exposes only `language`, `locale`, `timezone`, `source`, `confidence`). This is the same bug independently found in `use-on-start-welcome` (topic 2.2). Replace with `session.channel`. `preferred_language = session.interaction.current.language` on the next line is correct as written.

## Evidence

| Claim                                                | Current evidence                                                                   | Impact                         |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------ |
| `session.interaction.current.channel` does not exist | `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts`   | Fix required                   |
| `session.channel` is the correct field               | `apps/runtime/src/__tests__/store-factory.test.ts:359`, `platform.e2e.test.ts:268` | Use as replacement             |
| `session.interaction.current.language` is correct    | Same test file                                                                     | No change needed for this line |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/initialize-session-before-first-turn-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted fix, not a full rewrite)

Change the minimal working example's second `SET` line from:

```abl
  SET: channel_name = session.interaction.current.channel
```

to:

```abl
  SET: channel_name = session.channel
```

No other part of the article needs to change.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/initialize-session-before-first-turn.md` (one-line fix, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/initialize-session-before-first-turn-2026-08-21-evidence.md` (already current)
