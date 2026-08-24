# How to run an authentication or profile lookup during welcome

Use this pattern when the first turn should use authenticated context, such as account status or display name.

## Concept

Authentication and profile lookup are different responsibilities. Authentication establishes who the user is and what context the session can trust. A profile lookup reads business data for that identity. `ON_START` can call a read-only profile tool after the session already has the identity value needed by that tool.

Do not use a welcome message to reveal sensitive information before identity is verified. If the identity is missing, greet generically and ask the user to sign in before account-specific actions.

## Minimal working example

```abl
AGENT: Auth_Profile_Lookup_Start_Agent
GOAL: "Load account context during startup before asking the first question"

TOOLS:
  get_account_profile(accountId: string) -> {content: string, account_status: string, display_name: string}
    description: "Read the account profile for the authenticated user"
    side_effects: false
    confirm: never
    params:
      accountId:
        description: "Authenticated account identifier supplied by the channel session"

ON_START:
  CALL: get_account_profile
    WITH:
      accountId: session.account_id
    AS: accountProfile
  RESPOND: "Hello {{accountProfile.display_name}}. Your account is {{accountProfile.account_status}}."

FLOW:
  entry_point: service_menu
  steps:
    - service_menu

service_menu:
  REASONING: false
  RESPOND: "Would you like billing help, service help, or account help?"
  THEN: COMPLETE
```

## How it works

`session.account_id` must already exist in runtime session context. `ON_START` calls the tool, binds the result as `accountProfile`, and then uses the profile fields in the welcome response.

## Common variations

### Guard the welcome when identity is missing

```abl
AGENT: Auth_Gated_Welcome_Agent
GOAL: "Welcome authenticated users and avoid exposing account data before identity is present"

ON_START:
  BRANCHES:
    - IF: session.account_id IS SET
      RESPOND: "Welcome. I found your account context."
    - ELSE:
      RESPOND: "Welcome. Please sign in before account-specific actions."

FLOW:
  entry_point: next
  steps:
    - next

next:
  REASONING: false
  RESPOND: "How can I help?"
  THEN: COMPLETE
```

## Verification

Test two sessions: one with `session.account_id`, and one without it. The authenticated session should call the profile tool and render the account-aware welcome. The unauthenticated session should not expose account-specific data.

## Common mistakes

| Mistake                                             | Why it happens                                                  | How to avoid it                                                                                      |
| --------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Using `ON_START` as the authentication step         | Profile lookup and authentication are easy to conflate.         | Authenticate before account-specific startup copy, then use `ON_START` to read safe profile context. |
| Passing an empty account id to the lookup tool      | The channel session did not supply identity.                    | Add a missing-identity branch and test anonymous sessions.                                           |
| Returning sensitive account details in the greeting | The first turn feels like a convenient place for account state. | Keep the welcome high-level and move sensitive details behind verified flows.                        |

## Troubleshooting

If the tool input is empty, inspect how the channel or authentication layer populates the session identity. If startup lookup adds latency, keep the welcome generic and move expensive profile calls into the first account-specific flow.

## Production readiness checklist

- Require verified identity before account-specific responses.
- Make profile lookup tools read-only.
- Keep sensitive account details out of the welcome.
- Include a fallback for anonymous or partially authenticated users.
- Trace startup tool calls and profile lookup failures.
