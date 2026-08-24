# HowTo Review: use-on-start-welcome

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/use-on-start-welcome.md`
**Topic:** 2.2 - How to use ON_START to greet users before the first message
**Verdict:** update-needed

## Proposed changes

- **Correctness fix:** the minimal working example sets `startup_source = session.interaction.current.channel`, but `interaction.current` does not have a `channel` field (it exposes only `language`, `locale`, `timezone`, `source`, `confidence`, confirmed via `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts`). A customer copying this example would get `startup_source` set to `undefined`, and the first flow step's `"You reached us from {{startup_source}}."` would render with a missing value. Replace with `session.channel`, a confirmed, system-populated field.

Everything else in the article — `ON_START BRANCHES` first-match-wins evaluation, the malformed-condition fail-closed behavior, `dsl_set`/`dsl_on_start_branch` trace events — was independently re-verified against current runtime code and is accurate.

## Evidence

| Claim                                                             | Current evidence                                                                   | Impact                              |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------- |
| `session.interaction.current.channel` does not exist              | `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts`   | Fix required                        |
| `session.channel` is the correct field                            | `apps/runtime/src/__tests__/store-factory.test.ts:359`, `platform.e2e.test.ts:268` | Use as replacement                  |
| Malformed branch condition fails closed to the top-level response | `apps/runtime/src/services/execution/flow-step-executor.ts:898-931`                | Confirms accuracy, no change needed |
| `dsl_set` trace event is current                                  | `packages/shared-kernel/src/constants/trace-event-registry.ts:90,643`              | Confirms accuracy                   |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/use-on-start-welcome-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted fix, not a full rewrite)

Change the minimal working example's `SET` line from:

```abl
  SET: startup_source = session.interaction.current.channel
```

to:

```abl
  SET: startup_source = session.channel
```

No other part of the article needs to change.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/use-on-start-welcome.md` (one-line fix, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/use-on-start-welcome-2026-08-21-evidence.md` (already current)
