# HowTo Review: create-welcome-message

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/create-welcome-message.md`
**Topic:** 2.1 - How to create a welcome message for a new conversation
**Verdict:** no-change

## Proposed changes

None. This article has no `SUPERVISOR`/`HANDOFF`/`DELEGATE`/`MEMORY` content, so it is unaffected by every confirmed drift item from this refresh round. Its trace-event names (`dsl_on_start`, `dsl_respond`) and rich-content button syntax (`- BUTTON: "Label" -> action_id` with `VALUE:`) were independently re-verified against current source and remain exact.

## Evidence

| Claim                                                         | Current evidence                                                              | Impact            |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------- |
| `dsl_on_start`/`dsl_respond` trace events are current         | `packages/shared-kernel/src/constants/trace-event-registry.ts:89-100,849-852` | Confirms accuracy |
| `- BUTTON: "Label" -> action_id` / `VALUE:` syntax is current | `packages/core/src/parser/agent-based-parser.ts:8065-8100`                    | Confirms accuracy |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/create-welcome-message-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Files to update after approval

None — no change to `articles/create-welcome-message.md` is proposed.
