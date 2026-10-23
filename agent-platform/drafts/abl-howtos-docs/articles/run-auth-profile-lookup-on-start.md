# How to run an authentication or profile lookup during welcome

Use this pattern when the first assistant message needs the signed-in user's identity, such as a display name or account status.

## Concept

Authentication and profile lookup are separate jobs. The channel authenticates the user before the session starts. A profile lookup reads business data for that identity. `ON_START` can call a read-only lookup tool before the welcome renders.

The runtime puts the authentication result in the `session` namespace when the channel supplies it.

| Value | Meaning |
| ----- | ------- |
| `session.customerId` | The customer identifier. Present only when the channel resolved one. |
| `session.identityTier` | `0` for anonymous. `1` for an identity asserted by a provider or webhook. `2` after HMAC, OAuth, email link, or OTP verification. |
| `session.verificationMethod` | The method the channel used, such as `otp` or `oauth`. |
| `session.<name>` | A value the channel passes as caller data, such as `account_id`. Also readable as `<name>`. |

Treat caller data from a browser as unverified. Use `session.identityTier` for decisions that need a verified identity. Do not reveal sensitive data before identity is verified. Greet generically when the identity is missing.

`ON_START` runs these steps in order:

1. `SET` assignments.
2. The top-level `CALL`, only when its `WHEN` guard is true.
3. Interaction language directives.
4. `BRANCHES` conditions. The first match supplies the welcome.
5. The welcome `RESPOND`.
6. The matched branch `DO:` list.

A top-level `CALL` finishes before the branch conditions and the welcome. Both can read its result. A `CALL` inside a branch `DO:` list runs after the welcome, so the welcome cannot use its result.

The welcome waits for the tool. Keep the tool fast and set `hints.timeout` as a number of milliseconds.

## Minimal working example

This example calls a profile tool only for a signed-in customer. It shows a generic welcome in every other case.

```abl
AGENT: Account_Welcome_Agent
GOAL: "Greet the customer by name when the session has a verified identity, then help with billing, service, and account questions"
PERSONA: "Friendly account assistant"

TOOLS:
  get_account_profile(customerId: string) -> {account_status: string, display_name: string}
    description: "Read the account profile for the signed-in customer"
    side_effects: false
    confirm: never
    hints:
      timeout: 5000
    params:
      customerId:
        description: "Customer identifier from the verified session"

ON_START:
  CALL: get_account_profile
    WITH:
      customerId: session.customerId
    AS: accountProfile
    WHEN: session.customerId IS SET
  BRANCHES:
    - IF: accountProfile.display_name IS SET
      RESPOND: "Hello {{accountProfile.display_name}}. Your account is {{accountProfile.account_status}}. How can I help?"
    - ELSE:
      RESPOND: "Welcome. Sign in to see your account details. How can I help?"
```

The tool needs an execution binding in your project, such as an HTTP endpoint. This example assumes that binding exists.

## How it works

- `WHEN: session.customerId IS SET` skips the lookup for anonymous users. Indent `WHEN` under `CALL`. A sibling `WHEN` is ignored and the parser warns.
- `AS: accountProfile` stores the tool result. If the tool fails or does not run, `accountProfile.display_name` stays unset.
- The first branch matches only when `display_name` is set. Otherwise the `ELSE` branch shows a generic welcome.
- Without the branch guard, a missing field renders as empty text, for example "Hello . Your account is .".
- A matched branch owns the startup turn. In a FLOW agent, the entry step runs on the first user message instead of at start.

## Common variations

### Gate on identity without a lookup

Use this when the welcome only needs to know whether the user is verified.

```abl
AGENT: Identity_Gate_Agent
GOAL: "Welcome verified customers and ask anonymous users to sign in before account actions"
PERSONA: "Friendly account assistant"

ON_START:
  BRANCHES:
    - IF: session.identityTier == 2
      RESPOND: "Welcome back. Your identity is verified. How can I help?"
    - ELSE:
      RESPOND: "Welcome. Please sign in before account-specific actions."
```

### Prefetch the profile after the welcome

Use a branch `DO:` list when the welcome does not need the profile. The welcome renders first. The call then fills `accountProfile` for the first turn.

```abl
AGENT: Verified_Welcome_Agent
GOAL: "Welcome verified customers and load the profile for the first question"
PERSONA: "Friendly account assistant"

TOOLS:
  get_account_profile(customerId: string) -> {account_status: string, display_name: string}
    description: "Read the account profile for the signed-in customer"
    side_effects: false
    confirm: never
    params:
      customerId:
        description: "Customer identifier from the verified session"

ON_START:
  BRANCHES:
    - IF: session.identityTier == 2
      RESPOND: "Welcome back. Your identity is verified."
      DO:
        - CALL: get_account_profile
          WITH:
            customerId: session.customerId
          AS: accountProfile
    - ELSE:
      RESPOND: "Welcome. Please sign in before account-specific actions."
```

If the call fails, the list stops and the welcome stays as shown. The compiler reports `ON_START_BRANCH_DO_ACTIVATED` as an informational warning. It confirms that the list runs at session start.

### Look up by a channel-supplied identifier

If the channel passes an account ID as caller data, use `session.account_id` in both `WITH` and `WHEN`. Check the exact key name your channel sends.

## Verification

Run three sessions and inspect the trace for each.

1. Start as a verified user. Expect the personalized welcome. In the trace, `dsl_lifecycle_call_condition` shows `matched: true`, and `dsl_call` shows `source: on_start_with`. Then `tool_call_start`, `tool_result`, `dsl_on_start_branch`, and `dsl_respond` appear.
2. Start anonymously. Expect the generic welcome. `dsl_lifecycle_call_condition` shows `matched: false`, and no `dsl_call` event appears.
3. Start as a verified user while the tool fails. Expect the generic welcome. `dsl_on_start_branch` shows the `ELSE` branch.

Check that no account detail appears in the anonymous transcript.

## Production readiness checklist

- Bind `get_account_profile` to a read-only endpoint in the project.
- Return only the fields the welcome needs.
- Set `hints.timeout` as a plain number of milliseconds.
- Keep a generic `ELSE` welcome for anonymous users and tool failures.
- Test verified, anonymous, tool failure, and tool timeout sessions.
- Confirm the target channel delivers the `ON_START` welcome.
- Trace the startup tool call and review lookup failures.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Guarding with `!= ""` | A missing value is null, and `null != ""` is true. | Use `IS SET`. |
| Writing the guard as a quoted sentence | A quoted sentence with no operator is always true. | Write a comparison or `IS SET`. |
| Returning a field named `content` | With no welcome text, the runtime shows a string `content` field to the user. | Always author a `RESPOND` or an `ELSE` branch. Do not return sensitive text in `content`. |
| No `ELSE` branch | A missing profile field renders as empty text. | Add a generic `ELSE` welcome. |
| Quoting a timeout, such as `"10s"` | The parser reads only plain numbers. `"10s"` is ignored. `10s` reads as 10 milliseconds. | Use milliseconds, such as `5000`. |
| Using `ON_START` as the authentication step | Profile lookup and authentication are easy to conflate. | Authenticate in the channel. Use `ON_START` to read safe profile context. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The welcome reads "Hello . Your account is ." | The lookup did not run or failed, and no branch guards the fields. | Add the `IS SET` branch. Check `dsl_lifecycle_call_condition` and `tool_result`. |
| The tool is never called | The `WHEN` guard is false, or `WHEN` is not indented under `CALL`. | `session.customerId` in the session values. The `W496` parser warning. |
| The lookup runs for anonymous users | The guard uses `!= ""` or a quoted sentence. | Rewrite the guard with `IS SET`. |
| The user sees raw tool text | The tool returns a `content` field and no welcome text rendered. | Add an `ELSE` branch. Rename the field. |
| No welcome appears on Slack, WhatsApp, Microsoft Teams, email, or API channels | These channels do not deliver the `ON_START` response. `SET` and `CALL` still run. | The `dsl_on_start_skipped` trace event. |
| The welcome is slow | The tool is slow. | `hints.timeout`. Move expensive calls to the first account-specific step. |

## Related HowTos

- How to use ON_START to greet users before the first message.
- How to personalize a welcome message for returning users.
- How to design channel-specific welcome experiences.
- How to handle empty-state and fallback greetings.
- How to initialize session variables before the first user turn.
