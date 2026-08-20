# How to switch the active agent during a conversation

Switching the active agent is done through handoff. `EXPECT_RETURN: false` transfers ownership to the child specialist. `EXPECT_RETURN: true` creates a temporary child thread that returns to the parent, often for authentication or qualification.

Use this when a supervisor should stop answering directly and let a specialist own the next turn, or when a temporary gate must run before the final specialist takes over.

## How the pattern works

1. The supervisor receives the user message and keeps ownership until a route matches.
2. Intent categories, runtime context, gathered values, or tool results provide the routing evidence.
3. `HANDOFF` entries are evaluated in the authored order and the matching child receives only the declared context.
4. If the child is temporary, it returns through `ON_RETURN`; if it owns the conversation, it remains the active agent.

## Design choices

- Use `EXPECT_RETURN: false` for ownership transfer.
- Use `EXPECT_RETURN: true` for temporary gating, then `ON_RETURN: resume_intent` to re-route.
- Pass a concise summary and the minimum fields needed by the child agent.

## Validated example

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

## Common variations

- Temporary authentication child returns to supervisor.
- Final billing or account specialist owns the conversation.
- Return handler maps child output into parent routing state.

## Verification

- Parse the ABL and confirm there are no parser errors or parser warnings.
- Compile the ABL and confirm there are no compiler errors or compiler warnings.
- Test at least one matching utterance for each route and one utterance for the fallback or clarification path.
- Inspect traces for the selected target, condition result, passed context, and return behavior when `EXPECT_RETURN: true` is used.

## Production checklist

- Every specialist route has a clear owner and a concise context summary.
- Deterministic conditions use declared, gathered, tool-result, runtime, or returned fields.
- Semantic conditions are quoted as natural-language `WHEN` text.
- Temporary child agents produce every field mapped in `ON_RETURN`.
- Fallback behavior is explicit and does not hide missing intent coverage.

## Common mistakes

- Do not try to switch active agent by setting a variable.
- Do not use return semantics when the child should own the rest of the conversation.
- Do not pass sensitive or irrelevant context to every child.

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to decide when to delegate, hand off, or use a workflow
- How to pass context between agents
