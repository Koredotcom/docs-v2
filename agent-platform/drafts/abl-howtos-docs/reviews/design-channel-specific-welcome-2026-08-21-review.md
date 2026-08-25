# HowTo Review: design-channel-specific-welcome

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-channel-specific-welcome.md`
**Topic:** 2.7 - How to design channel-specific welcome experiences
**Verdict:** update-needed

## Proposed changes

- **Correctness fix (high impact):** the minimal working example sets `channel_name = session.interaction.current.channel`, but `interaction.current` has no `channel` field (confirmed via `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts`). This is the same bug found in `use-on-start-welcome` (2.2) and `initialize-session-before-first-turn` (2.6), but here it's the most consequential: the article's entire voice-vs-text branch selection depends on `channel_name == "voice"` matching, and with the invalid path, `channel_name` would always be undefined — meaning voice callers would never reach the voice branch and would always get the text-channel `ELSE` response instead. Replace with `session.channel`.

## Evidence

| Claim                                                | Current evidence                                                                   | Impact             |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------ |
| `session.interaction.current.channel` does not exist | `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts`   | Fix required       |
| `session.channel` is the correct field               | `apps/runtime/src/__tests__/store-factory.test.ts:359`, `platform.e2e.test.ts:268` | Use as replacement |
| `VOICE: PLAIN_TEXT: "..."` syntax is current         | `packages/core/src/parser/agent-based-parser.ts:7762-7847`                         | No change needed   |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/design-channel-specific-welcome-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted fix, not a full rewrite)

Change the minimal working example's `SET` line from:

```abl
  SET: channel_name = session.interaction.current.channel
```

to:

```abl
  SET: channel_name = session.channel
```

No other part of the article needs to change.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/design-channel-specific-welcome.md` (one-line fix, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/design-channel-specific-welcome-2026-08-21-evidence.md` (already current)
