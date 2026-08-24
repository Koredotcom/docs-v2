# HowTo Review: run-auth-profile-lookup-on-start

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/run-auth-profile-lookup-on-start.md`
**Topic:** 2.4 - How to run an authentication or profile lookup during welcome
**Verdict:** update-needed

## Proposed changes

- **Risk-based correctness fix:** the "Guard the welcome when identity is missing" example uses `WHEN: session.account_id != ""` to detect whether identity is present. An unset session variable is injected as `null` (not `""`), and this codebase's own tests never rely on `!= ""` alone to detect an unset value — every real usage found (`reported-runtime-regressions.test.ts:487`, `pre-refactor/constraint-evaluation.test.ts:39`, `pre-refactor/constraint-guardrails.test.ts:32`) explicitly pairs it with `!= null` or `IS NOT SET`. Since this is precisely the article's security-relevant guard (whether to expose "I found your account context" before identity is verified), the condition should be changed to `session.account_id IS SET` — the idiomatic, unambiguous presence check already used elsewhere in this doc set.

No runnable CEL harness was available to directly execute `null != ""` and confirm the exact boolean outcome, so this is recorded as a risk-based fix rather than a confirmed crash — but `IS SET` is strictly safer and matches the codebase's own established pattern regardless of the precise cross-type comparison result.

## Evidence

| Claim                                                                   | Current evidence                                                                                                                                                                                | Impact                                                        |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Unset context variables are injected as `null`, not `""`                | `packages/compiler/src/platform/constructs/dual-evaluator.ts`                                                                                                                                   | Establishes why `!= ""` is not proven to catch the unset case |
| Every real internal usage pairs `!= ""` with `!= null`/`IS NOT SET`     | `apps/runtime/src/__tests__/reported-runtime-regressions.test.ts:487`, `apps/runtime/src/__tests__/execution/pre-refactor/constraint-evaluation.test.ts:39`, `constraint-guardrails.test.ts:32` | Strongly supports the fix                                     |
| `IS SET` is the idiomatic presence check used elsewhere in this doc set | Other articles in this refresh batch (`switch-active-agent`, `route-by-user-intent`)                                                                                                            | Recommends consistency                                        |
| CALL failure handling and TOOLS declaration are current                 | Same evidence as topic 2.3                                                                                                                                                                      | No change needed for these                                    |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/run-auth-profile-lookup-on-start-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard.

## Proposed change (targeted fix, not a full rewrite)

Change the "Guard the welcome when identity is missing" example's condition from:

```abl
  BRANCHES:
    - IF: session.account_id != ""
      RESPOND: "Welcome. I found your account context."
```

to:

```abl
  BRANCHES:
    - IF: session.account_id IS SET
      RESPOND: "Welcome. I found your account context."
```

No other part of the article needs to change.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/run-auth-profile-lookup-on-start.md` (one-line condition fix, shown above)
- `agent-platform/drafts/abl-howtos-docs/evidence/run-auth-profile-lookup-on-start-2026-08-21-evidence.md` (already current)
