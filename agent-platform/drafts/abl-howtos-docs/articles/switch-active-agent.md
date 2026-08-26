# How to switch the active agent during a conversation

Use this when a supervisor should stop answering directly and let a specialist own the next turn, or when a temporary gate must run before the final specialist takes over.

## Concept

Switching the active agent is done through `HANDOFF`. `EXPECT_RETURN: false` transfers ownership permanently to the child specialist — it becomes the active agent for the rest of the conversation. `EXPECT_RETURN: true` creates a temporary child thread that returns to the parent (via `ON_RETURN`), often for authentication or qualification — the supervisor stays the active agent in the long run, just pausing to delegate one sub-task.

The authentication-gate pattern below relies on one subtle but important behavior: on the very first turn, `is_authenticated` doesn't exist yet. The condition `is_authenticated != true` still correctly evaluates to `true` in that case — the runtime treats an undefined variable as not equal to `true` — so the gate fires and routes to `Authentication_Agent` before the variable is ever set. You don't need to special-case "unset" separately from "false."

## Minimal working example

```abl
SUPERVISOR: Active_Agent_Switch_Supervisor
GOAL: "Switch the active conversation owner to the right child agent"

HANDOFF:
  - TO: Authentication_Agent
    WHEN: is_authenticated != true
    EXPECT_RETURN: true
    CONTEXT:
      pass: [customer_id]
      summary: "Authenticate before account work."
    ON_RETURN:
      action: resume_intent
      MAP:
        is_authenticated: is_authenticated

  - TO: Account_Service_Agent
    WHEN: intent.category == "account_service" AND is_authenticated == true
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, account_id, conversation_summary]
      summary: "Account service agent now owns the conversation."

  - TO: Billing_Agent
    WHEN: intent.category == "billing" AND is_authenticated == true
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, account_id, conversation_summary]
      summary: "Billing agent now owns the conversation."

AGENT: Authentication_Agent
GOAL: "Authenticate customers and return to the supervisor"

GATHER:
  is_authenticated:
    TYPE: boolean
    PROMPT: "Is the customer authenticated?"
    REQUIRED: true

COMPLETE:
  - WHEN: is_authenticated IS SET
    RESPOND: "Authentication result captured."

AGENT: Account_Service_Agent
GOAL: "Own account service after routing"

AGENT: Billing_Agent
GOAL: "Own billing service after routing"
```

`customer_id`, `account_id`, and `conversation_summary` are shown as passed context with no declared source in this example — treat them as project-local assumptions and declare them via `MEMORY` in your actual project. This example also has no fallback route if neither `account_service` nor `billing` matches after authentication — see the fallback-routing HowTo before shipping this pattern as-is.

## How it works

- Before `is_authenticated` is ever set, `is_authenticated != true` evaluates to `true` (undefined is treated as not-equal-to-true), so the very first turn always routes to `Authentication_Agent`.
- `Authentication_Agent` is a temporary child (`EXPECT_RETURN: true`): it gathers `is_authenticated`, completes once that field `IS SET`, and `ON_RETURN` maps its result back into the supervisor's own `is_authenticated` variable and resumes intent routing.
- On the next pass through `HANDOFF`, `is_authenticated == true` now holds, so the compound conditions on `Account_Service_Agent`/`Billing_Agent` can match and transfer ownership permanently (`EXPECT_RETURN: false`).
- None of these conditions are rewritten by the compiler — equality comparisons like `is_authenticated == true` and `intent.category == "account_service"` handle an unset variable correctly on their own (they simply evaluate `false`), so the trace shows your literal authored condition text.
- Since `HISTORY` is omitted from every `HANDOFF`, each child (temporary or permanent) receives the full conversation history by default (the current platform default).
- If you'd rather run the authentication step as a sub-agent call than a full route/return cycle, `DELEGATE` is an alternative to `HANDOFF` + `EXPECT_RETURN: true` for this kind of temporary gate — see the delegate-vs-handoff decision HowTo for the tradeoffs.

## Common variations

- Temporary authentication child returns to supervisor (shown above).
- Final billing or account specialist owns the conversation permanently after the gate passes.
- A return handler maps child output into parent routing state (`MAP` above) so the next routing pass can use it.

## Verification

- Parse and compile the ABL and confirm there are no parser or compiler errors/warnings.
- Test an utterance on a fresh session (no `is_authenticated` set) and confirm it routes to `Authentication_Agent` first.
- After authentication completes, test an account-service and a billing utterance and confirm permanent ownership transfer in each case.
- Inspect the trace for the selected target, the evaluated condition (matches your literal authored text), and the `ON_RETURN`/`MAP` application after the authentication child returns.

## Production readiness checklist

- The auth gate correctly handles the unset case on turn one (no special-casing needed, but verify it in a real trace).
- `MAP` targets a variable the parent actually declares and routes on.
- A fallback route exists for intents that don't match `account_service` or `billing` after authentication — this example doesn't include one.
- Any variable assumed to already exist (like `customer_id` above) has a real declared source in your project.
- Temporary vs. permanent switching is chosen deliberately per route, not by accident.

## Common mistakes

| Mistake                                                                            | Why it happens                                          | How to avoid it                                                              |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Trying to switch the active agent by setting a variable                            | Confusing session state with conversation ownership     | Ownership only changes through `HANDOFF`/`DELEGATE`, never by setting a flag |
| Using `EXPECT_RETURN: true` when the child should own the rest of the conversation | Copy-pasting the auth-gate pattern for a different case | Use `EXPECT_RETURN: false` for permanent ownership transfer                  |
| Passing sensitive or irrelevant context to every child                             | Reusing one `CONTEXT.pass` list everywhere              | Pass only what each specific child needs                                     |

## Troubleshooting

| Symptom                                                                  | Likely cause                                                                                                  | What to check                                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| The conversation never leaves `Authentication_Agent`                     | `ON_RETURN`/`MAP` isn't correctly writing `is_authenticated` back to the parent, or the child never completes | Inspect the `handoff_return_handler` trace for the actual returned value                     |
| Every turn re-routes to `Authentication_Agent` even after authenticating | The mapped parent variable name doesn't match what the compound conditions check                              | Confirm `MAP`'s parent-side key exactly matches the variable used in later `WHEN` conditions |
| A route unexpectedly falls through with no match                         | No fallback route exists in this example for unmatched intents post-authentication                            | Add a fallback route (see the fallback-routing HowTo)                                        |
| Child agent has more/less conversation context than expected             | `HISTORY` omitted; current default (`full`) applied                                                           | Set an explicit `HISTORY` strategy if bounded/summary history is intended                    |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to route unclear requests to a fallback agent
- How to pass specific fields between agents
