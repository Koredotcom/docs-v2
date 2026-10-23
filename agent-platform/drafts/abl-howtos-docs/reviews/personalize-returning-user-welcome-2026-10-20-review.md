# HowTo Review: personalize-returning-user-welcome

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/personalize-returning-user-welcome.md`
**Topic:** 2.3 - How to personalize a welcome message for returning users
**Verdict:** update-needed

## Proposed changes

- Fix the entry step that ended the session. The agent now uses reasoning with no `FLOW`.
- Add a `WHEN` guard on `CALL`, and a fallback branch that tests `profile.first_name IS SET`.
- State where `session.member_id` comes from: host application caller data.
- Explain that an unresolved `{{placeholder}}` renders as empty text, and that `!= ""` is not a missing-value guard.
- Remove the hard-coded segment example. Replace it with host application data, saved memory, and tool-written welcome variations.
- Add the privacy note, the unverified browser data note, and the three-case test plan.
- Add Related HowTos. All five files exist in `articles/`.

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| Missing placeholder renders empty | Comment in `renderOnStartWelcomeText`; `customer_visible` default | Concept and mistakes |
| `IS SET` fallback works, `!= ""` does not | Harness `evaluateConditionDual` results in the evidence file | Examples and mistakes |
| `session.<key>` carries host app data | `runtime-executor.ts` 8244-8290; `personalization-context.ts` | Variation 1 |
| `session:start` recall runs before `ON_START` | `initializeAllMemory` 435 before `executeOnStart` call at 9623 | Variation 2 |
| Tool `content` becomes the welcome with no `RESPOND` | `resolveLifecycleToolResultAssistantMessage` 3099 | Variation 3 |

## Risk level

MEDIUM. Examples change. Failure behavior is clearer.

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/personalize-returning-user-welcome-2026-10-20-evidence.md`.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/personalize-returning-user-welcome.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/personalize-returning-user-welcome-2026-10-20-evidence.md`

## Proposed full article

````markdown
# How to personalize a welcome message for returning users

Use this pattern when the agent should recognize a known user and make the first turn specific to that user.

## Concept

Personalization at startup has two parts: a source of user context and an `ON_START` welcome that uses it. Choose the source first.

| Source                          | Where the value comes from                                                                 | Use when                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| Startup tool call               | A tool that looks up the user, for example by member ID.                                   | The profile lives in a backend system.                    |
| Host application data           | Values the host application sends when it creates the session. They read as `session.<key>`. | The app already knows the user and sends a few fields.   |
| Saved memory                    | Persistent memory that a `session:start` recall loads before `ON_START` runs.              | The agent saved the value in an earlier session.          |
| Tool text as the welcome        | The `content` field of a startup tool result.                                              | The backend writes the whole welcome text.                |

Use only low-risk personalization in the welcome, such as a first name or a plan name. Do not show account details until the user proves identity. Values that a browser sends are not verified, so do not base access decisions on them.

Every source can be missing. A `{{placeholder}}` that has no value renders as empty text, so a missing name gives "Welcome back . You are on the  plan." Guard each personalized welcome with a branch that tests `IS SET`, and end with a generic `ELSE` branch.

Do not guard with `!= ""`. On a missing value that test returns true.

The welcome reaches the user only on channels that allow it, and only when the session starts before the first message. The `ON_START` tool call and `SET` run either way.

## Minimal working example

This agent looks up the member profile when the host application supplies `member_id`. It greets the member by name. It falls back to a generic welcome.

The example assumes two project-local resources. The host application sends `member_id` when it creates the session. The project binds `lookup_profile` to a real backend.

```abl
AGENT: Returning_User_Welcome_Agent
GOAL: "Help members with account and plan questions"

TOOLS:
  lookup_profile(memberId: string) -> {first_name: string, tier: string}
    description: "Look up the returning member's profile"
    side_effects: false
    confirm: never
    params:
      memberId:
        description: "Member identifier supplied by the host application at session start"

ON_START:
  CALL: lookup_profile
    WITH:
      memberId: session.member_id
    AS: profile
    WHEN: session.member_id IS SET
  BRANCHES:
    - IF: profile.first_name IS SET
      RESPOND: "Welcome back {{profile.first_name}}. You are on the {{profile.tier}} plan."
    - ELSE:
      RESPOND: "Welcome to Acme Support. How can I help?"
```

## How it works

The `WHEN` guard under `CALL` gates only the tool call. If `member_id` is missing, the runtime skips the call and still selects a branch. A guard that cannot evaluate also skips the call.

The runtime stores the tool result under `profile` because the call uses `AS: profile`. The first branch tests `profile.first_name`. It matches only when the lookup returned a name.

When the lookup fails, the welcome still renders. `profile.first_name` stays unset, so the `ELSE` branch runs. The runtime logs the failure and continues with the rest of `ON_START`.

The tool declares `side_effects: false` and `confirm: never`. A profile lookup at startup should not ask the user to approve a side effect.

The runtime applies session privacy protection to the welcome text before it sends the text and stores it in history. If your project redacts personal data, test the personalized welcome.

## Common variations

### Personalize from host application data

When the host application already knows the user, skip the tool. The host application sends values when it creates the session. The agent reads them as `session.<key>`. The key `plan_tier` below is an example.

```abl
AGENT: Caller_Data_Welcome_Agent
GOAL: "Help members with account and plan questions"

ON_START:
  BRANCHES:
    - IF: session.plan_tier == "premium"
      RESPOND: "Welcome back. Your priority support lane is ready."
    - IF: session.plan_tier IS SET
      RESPOND: "Welcome back. How can I help today?"
    - ELSE:
      RESPOND: "Welcome to Acme Support. How can I help today?"
```

Confirm in the trace that the session contains the key. The platform reserves some key names, such as `session` and `tenant_id`. It ignores them when the host application sends them.

### Personalize from saved memory

A `session:start` recall loads persistent memory before `ON_START` runs. The welcome can then read the value. The project needs a stored `user.first_name` for this user.

```abl
AGENT: Memory_Welcome_Agent
GOAL: "Help members with account and plan questions"

MEMORY:
  persistent:
    - user.first_name
      SCOPE: user
      TYPE: string
      ACCESS: read
  recall:
    - ON: session:start
      ACTION: inject_context
      PATHS: [user.first_name]
      INSTRUCTION: "Load the saved first name before the welcome"

ON_START:
  BRANCHES:
    - IF: user.first_name IS SET
      RESPOND: "Welcome back {{user.first_name}}. How can I help today?"
    - ELSE:
      RESPOND: "Welcome to Acme Support. How can I help today?"
```

### Let the tool write the welcome

When `ON_START` has no `RESPOND` and the startup tool returns a non-empty `content` string, the runtime sends that text as the welcome. A `RESPOND` always takes precedence. The tool must return `content` as a string.

```abl
AGENT: Tool_Welcome_Agent
GOAL: "Help members with account and plan questions"

TOOLS:
  get_welcome_text(memberId: string) -> {content: string}
    description: "Return the welcome text for the member"
    side_effects: false
    confirm: never
    params:
      memberId:
        description: "Member identifier supplied by the host application at session start"

ON_START:
  CALL: get_welcome_text
    WITH:
      memberId: session.member_id
```

## Verification

1. Start a session with `member_id` set. Confirm `dsl_lifecycle_call_condition` shows `matched: true` and a `tool_call_start` event follows.
2. Confirm the welcome shows the returned first name and plan. Check `dsl_on_start_branch` for the matched branch index.
3. Start a session without `member_id`. Confirm `matched: false` and the generic welcome.
4. Make the lookup fail, for example with an unknown member. Confirm the generic welcome appears.
5. For the memory variation, confirm a `memory_recall` event lists `user.first_name` in `injectedKeys`.
6. For the tool text variation, confirm `dsl_respond` shows `source: on_start_tool_result`.
7. Test the welcome on a channel that allows it. A suppressing channel or a lazy start does not show the text.

## Production readiness checklist

- Personalize with non-sensitive fields only.
- Make the startup lookup tool read-only, and bind it to a real backend.
- Define a description for every tool parameter.
- State where each personalized value comes from: tool result, host application data, or memory.
- Guard each personalized branch with `IS SET`, and keep a generic `ELSE` branch.
- Test three cases: value present, value missing, and lookup failure.
- Do not treat browser-supplied values as verified identity.
- Check how your project redacts personal data in the welcome.

## Common mistakes

| Mistake                                           | Why it happens                                            | How to avoid it                                                                 |
| ------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Showing sensitive account facts in the welcome    | Personalization is mistaken for authorization.            | Use only low-risk fields until identity and permissions are verified.           |
| Writing the welcome without a fallback            | The author assumes the lookup always succeeds.            | Add an `ELSE` branch that does not use the lookup result.                       |
| Guarding with `!= ""`                             | The test looks like a missing-value check.                | Use `IS SET`.                                                                   |
| Forgetting `AS` on the lookup                     | The welcome cannot read a named result.                   | Bind the result with `AS` and read fields from that name.                       |
| Writing `WHEN` beside `CALL`                      | The guard looks like a sibling field.                     | Indent `WHEN` under `CALL`. A sibling `WHEN` is ignored and the call always runs. |
| Assuming `session.member_id` always exists        | The platform does not create the value.                   | Have the host application send it, and guard the call with `WHEN`.              |

## Troubleshooting

| Symptom                                       | Likely cause                                                           | What to check                                                                          |
| --------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| The welcome shows an empty value              | A placeholder has no value.                                            | Check the tool result shape and the `AS` name. Add an `IS SET` branch.                 |
| The generic welcome always appears            | The guard skipped the call, or the lookup failed.                      | Check `dsl_lifecycle_call_condition` and the tool trace events.                        |
| The tool never runs                           | `member_id` is not in the session.                                     | Check what the host application sends when it creates the session.                     |
| The tool runs for every session               | `WHEN` sits beside `CALL`.                                             | Indent `WHEN` under `CALL`. Look for compile warning `W496`.                           |
| The memory variation shows the generic welcome | No saved value exists, or no user identity exists.                    | Look for a `memory_recall` event with the key in `injectedKeys`.                       |
| The tool text is not used as the welcome      | `ON_START` has a `RESPOND`, or the result has no `content` string.     | Remove `RESPOND`. Check the tool result for a non-empty `content` string.              |
| No welcome appears on one channel             | The channel suppresses the welcome, or the session started lazily.     | Look for `dsl_on_start_skipped` in the trace.                                          |

## Related HowTos

- [How to create a welcome message for a new conversation](create-welcome-message.md)
- [How to use ON_START to greet users before the first message](use-on-start-welcome.md)
- [How to run an authentication or profile lookup during welcome](run-auth-profile-lookup-on-start.md)
- [How to handle empty-state and fallback greetings](handle-fallback-greetings.md)
- [How to initialize session variables before the first user turn](initialize-session-before-first-turn.md)
````
