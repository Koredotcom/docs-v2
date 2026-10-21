# HowTo Review: switch-active-agent

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/switch-active-agent.md`
**Topic:** 3.8 - How to switch the active agent during a conversation
**Verdict:** update-needed

## Proposed changes

- Correct the ownership rule: only `HANDOFF` changes the active agent. `DELEGATE` does not.
- Replace the self-declared authentication gate with a `customer_id` gate whose child collects a real value, and keep the flag pattern as a validated variation.
- Explain `resume_intent` (default message, depth limit, `resume_with`) and `MAP` direction.
- Add the `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` and `UNKNOWN_HANDOFF_RETURN_FIELD` errors.
- Make verification steps name `handoff`, `handoff_return_handler`, and `resume_intent` fields.

### Deleted or replaced content

- Replaced the `is_authenticated` boolean gather ("Is the customer authenticated?"). Reason: the customer approves themselves.
- Removed the sentence that `DELEGATE` is an alternative for the temporary gate. Reason: a delegate child cannot wait for customer input.
- Removed the Related HowTos entry "How to pass specific fields between agents". Reason: no such file exists in `articles/`.
- Removed the note that trace conditions show the literal authored text. Reason: not needed. The trace shows `evaluatedContext` instead.

## Evidence

Full evidence: `agent-platform/drafts/abl-howtos-docs/evidence/switch-active-agent-2026-10-20-evidence.md`. Code branch: `hotfix_Artemis_1.8.1`. Previous refresh: `hotfix_Artemis_1.4.4`.

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| `RETURN: false` ends the parent thread. `RETURN: true` waits | `routing-executor.ts` 12140-12175 | Concept table |
| `DELEGATE` does not switch the active agent and cannot gather input | Harness error `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED`. Public reference lines 617-660 | Corrected |
| `MAP` copies child key to parent key. The child must produce the field | `routing-executor.ts` 6240-6330. Harness error `UNKNOWN_HANDOFF_RETURN_FIELD` | Added |
| `resume_intent` replays the original handoff message once | `routing-executor.ts` 5602-5700, 6660, 6960-7120 | New explanation |
| `!= true` is true when unset. `!= ""` is true when unset | Harness `cond2.mjs` and `cond3.mjs` | Guidance |
## Quality scorecard summary

Minimum score 4 on every criterion. Gate result: pass. Red-team verdict: pass. Persona verdicts: architect ready, writer ready, product ready. Details are in the evidence file.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/switch-active-agent.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/switch-active-agent-2026-10-20-evidence.md`
- `agent-platform/abl/how-to/switch-active-agent.mdx` (published page)

## Proposed full article

````markdown
# How to switch the active agent during a conversation

Use this when a supervisor should stop answering and let a specialist own the next turn, or when a temporary gate must run first.

## Concept

The active agent is the agent that answers the customer. Only `HANDOFF` changes it. Each route sets how long the change lasts.

| Setting | What happens | Use when |
| ------- | ------------ | -------- |
| `RETURN: false` | The specialist becomes the active agent. The supervisor thread ends. No return path exists. | The specialist owns the rest of the conversation. |
| `RETURN: true` | The specialist runs as a child. The supervisor waits. Control comes back when the child completes or returns. | The child does one bounded job, such as collecting a value. |

`DELEGATE` does not switch the active agent. It runs a sub-task and the calling agent stays active. A delegate child cannot wait for customer input, so a gate that asks the customer a question needs `RETURN: true`.

A permanent specialist keeps the conversation until it completes, escalates, or hands off. Give it its own `HANDOFF` entries when it must switch again.

## Minimal working example: a gate, then a permanent switch

The supervisor sends every request to `Customer_Lookup_Agent` until `customer_id` is set. The gate returns the ID and replays the original request. The supervisor then hands off for good.

This example is a project-level set. `Account_Service_Agent` and `Billing_Agent` are short stand-ins for your real specialists.

```abl
SUPERVISOR: Account_Supervisor
GOAL: "Identify the customer first, then pass the conversation to the specialist who owns the request"

MEMORY:
  session:
    - customer_id
      TYPE: string
      DESCRIPTION: "Customer identifier collected by the lookup agent."

INTENTS:
  account_service: "Profile, address, or password changes."
  billing: "Charges, invoices, refunds, or payment methods."

HANDOFF:
  - TO: Customer_Lookup_Agent
    WHEN: customer_id IS NOT SET
    SUMMARY: "Collect the customer ID before any account work."
    RETURN: true
    ON_RETURN:
      action: resume_intent
      MAP:
        customer_id: customer_id

  - TO: Account_Service_Agent
    WHEN: intent.category == "account_service" AND customer_id IS SET
    PASS: [customer_id]
    SUMMARY: "Account service agent now owns the conversation."
    RETURN: false

  - TO: Billing_Agent
    WHEN: intent.category == "billing" AND customer_id IS SET
    PASS: [customer_id]
    SUMMARY: "Billing agent now owns the conversation."
    RETURN: false

AGENT: Customer_Lookup_Agent
GOAL: "Collect the customer ID and return it to the supervisor"

GATHER:
  customer_id:
    PROMPT: "What is your customer ID?"
    TYPE: string
    REQUIRED: true

COMPLETE:
  - WHEN: customer_id IS SET
    RESPOND: "Thanks. I have your customer ID."

AGENT: Account_Service_Agent
GOAL: "Resolve profile, address, and password requests"

AGENT: Billing_Agent
GOAL: "Resolve billing requests"
```

## How it works

1. `customer_id IS NOT SET` is true until the ID exists. The runtime checks this condition before the model runs, so the first message goes to the gate.
2. The gate is a child (`RETURN: true`). The supervisor waits and the child talks to the customer.
3. When `customer_id IS SET`, the child completes and returns. `MAP` copies the child field on the left into the supervisor variable on the right.
4. `ON_RETURN` with `action: resume_intent` replays the message that caused the handoff. The supervisor routes it again. The replay depth limit is one.
5. `customer_id IS SET` is now true. The supervisor model picks the account or billing route. `RETURN: false` ends the supervisor thread, and the specialist answers from then on.

`IS SET` and `IS NOT SET` handle an empty variable. Do not compare an empty variable with `!= ""`. That comparison is true when the value is missing.

A route without `HISTORY` passes the full conversation history. A project default can change this value.

## Common variations

### Gate on a verified flag

An authentication gate follows the same shape. Gate on a flag and map the flag back. Replace the first `HANDOFF` entry with this entry.

```abl
HANDOFF:
  - TO: Authentication_Agent
    WHEN: is_authenticated != true
    SUMMARY: "Verify the customer before account work."
    RETURN: true
    ON_RETURN:
      action: resume_intent
      MAP:
        is_authenticated: is_authenticated
```

`is_authenticated != true` is true when the variable is empty or false. Declare `is_authenticated` as a `boolean` in `MEMORY`. Change the other two routes to read `is_authenticated == true`.

`Authentication_Agent` must declare or set `is_authenticated`. Otherwise the compiler reports `UNKNOWN_HANDOFF_RETURN_FIELD` for the `MAP` line. Set the flag from a verification tool result. Never set it from what the customer says about themselves.

### Choose which message the supervisor replays

`ON_RETURN` takes `resume_with`. Add it under `action`. The default is `original_handoff_utterance`, the message that started the handoff. The other values are `latest_child_user_utterance`, `latest_session_user_utterance`, and `forwarded_return_message`.

### Temporary child that does not replay

Use `action: continue` when the supervisor should carry on without routing again. The child still returns its mapped fields.

## Verification

1. Start a new session and send "I want to change my address". Expect `Customer_Lookup_Agent` to ask for the ID. The `handoff` event shows `returnExpected: true` and `reasonCode: handoff_return_expected`.
2. Send an ID. Expect `handoff_return_handler` with `mappedFields: ["customer_id"]`, then a `resume_intent` event.
3. Expect a second `handoff` event to `Account_Service_Agent` with `returnExpected: false` and `reasonCode: handoff_permanent`.
4. Send a billing request in a new session and give an ID. Expect `Billing_Agent`.
5. Send another message. Expect the specialist to answer. The supervisor does not see it.

## Production readiness checklist

- Every `TO` target exists. Replace the stand-in specialists with real agents.
- `MAP` names a child field that the child sets, and a supervisor variable that the routes read.
- A route or a direct answer covers requests that match neither category.
- Flags that gate access come from a tool result or an identity service.
- Each route sets `RETURN` on purpose.
- Each `PASS` list holds only what the target needs.
- Tests cover a new session, a returning customer with the ID set, an unknown request, and a customer who leaves the gate unanswered.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Switching the active agent by setting a variable | Session state and ownership look alike. | Change the active agent with `HANDOFF`. |
| Using `RETURN: true` for a specialist that should own the conversation | The gate pattern is copied. | Use `RETURN: false` for permanent ownership. |
| Using `DELEGATE` for a gate that asks the customer | A delegate looks like a temporary call. | Use `RETURN: true`. The compiler reports `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED`. |
| Mapping to a name the supervisor never reads | The `MAP` sides are reversed or misspelled. | Write `child_field: supervisor_variable`. |
| Setting a gate flag from the customer's own words | A gather field is the easy source. | Set the flag from a verification result. |
| Passing every field to every specialist | One `PASS` list is reused. | Pass only what each target needs. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The conversation never leaves `Customer_Lookup_Agent` | The child never completes, or `MAP` writes the wrong variable. | The child `COMPLETE` condition and `handoff_return_handler` `mappedFields`. |
| Every turn returns to the gate | The supervisor variable stays empty. | The right side of `MAP` and the `WHEN` variable. |
| No second route after the gate returns | The replay found no matching category, or a route is switched off. | `resume_intent`, `handoff_condition_check`, and `ENABLED_WHEN` on the routes. |
| The replay does not happen | `action` is `continue`, or the replay depth limit of one was reached. | `ON_RETURN` and the `resume_intent` event `reasonCode`. |
| The compile fails with `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` | A `DELEGATE` child has a required `GATHER` field. | Change the route to `HANDOFF` with `RETURN: true`. |
| The specialist asks for what the customer already said | The route passes no field, or the history is limited. | `PASS`, `HISTORY`, and the specialist `GATHER`. |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to route unclear or unsupported requests to a fallback agent
- How to debug routing decisions in traces
````
