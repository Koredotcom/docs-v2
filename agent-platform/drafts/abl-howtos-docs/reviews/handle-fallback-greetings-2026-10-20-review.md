# HowTo Review: handle-fallback-greetings

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/handle-fallback-greetings.md`
**Topic:** 2.8 - How to handle empty-state and fallback greetings
**Verdict:** update-needed

## Proposed changes

- Added the decision table for four fallback mechanisms.
- Added: a branch-selected welcome (including `ELSE`) owns the startup turn; a top-level welcome flows into the first flow step.
- Corrected the malformed-condition claim: runtime skips the failing branch and tries the next. Authored syntax errors fail compilation.
- Added: plain-language conditions never match; empty `{{value}}` renders as an empty string; empty language falls to the fallback.
- Added two validated examples: `ELSE` branch, and optional name with `{{#if}}`.
- Added a table of pipeline voice, realtime voice, and Agent Assist fallback chains.
- Kept both original example blocks unchanged. Expanded verification, checklist, mistakes, and troubleshooting.

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| Authored malformed condition fails compile | Harness: `INVALID_CEL_SYNTAX` | Old troubleshooting text corrected. |
| Failing branch is skipped, next branch tried | `selectOnStartResponseConfig` loop, `dsl_on_start_branch_error` | Wording corrected. |
| Branch owns startup turn | `runtime-executor.ts` ~9650, `flow-on-start-imported-ir.test.ts` | New concept and troubleshooting rows. |
| Voice and Agent Assist chains | `voice-startup-greeting.ts`, `korevg-session.ts`, `welcome-text.ts` | New table. |

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/handle-fallback-greetings.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/handle-fallback-greetings-2026-10-20-evidence.md`

## Proposed full article

````markdown
# How to handle empty-state and fallback greetings

Use this pattern when startup data can be missing, no `ON_START` branch can match, or a channel does not deliver a proactive welcome.

## Concept

A fallback greeting is the safe default that keeps the first turn from feeling broken. You need one in three cases:

- No branch condition matches.
- A value that a branch or template reads is empty.
- The channel does not send the `ON_START` welcome.

ABL gives you four ways to write a fallback. Choose by what the greeting must do next.

| Goal                                                               | Use                                                      |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| Send a generic welcome, then run the first flow step in the same turn | A top-level `RESPOND` next to `BRANCHES`, with no `ELSE`  |
| Send a generic welcome as the whole startup turn                   | An `ELSE` branch                                         |
| Greet by name when the name exists, and generically when it does not | One `RESPOND` with a `{{#if}}` section                   |
| Send no proactive greeting                                         | No `ON_START`. In a flow agent, the first flow step speaks first. |

The difference between the first two rows matters when the agent has a `FLOW`. A branch-selected welcome, including `ELSE`, is the whole startup turn. The first flow step waits for the first customer message. A top-level `RESPOND` that no branch replaced is a prelude. The first flow step runs right after it, in the same turn.

Branch conditions must be expressions. A plain-language condition such as `"the customer is returning"` never matches. It also produces missing-variable warnings at compile time.

## Minimal working example

```abl
AGENT: Fallback_Greeting_Agent
GOAL: "Recover when startup conditions do not match"

ON_START:
  RESPOND: "Welcome. I can help with service, billing, or returns."
  BRANCHES:
    - IF: session.interaction.current.language == "fr"
      RESPOND: "Bonjour. Je peux vous aider avec le service, la facturation ou les retours."

FLOW:
  entry_point: ready
  steps:
    - ready

ready:
  REASONING: false
  RESPOND: "How can I help?"
  THEN: COMPLETE
```

`session.interaction.current.language` holds the language code the runtime resolved for the session. It comes from the session request, the contact profile, the channel, or the agent default language. It is empty when none of them supplies a language. An empty value never equals `"fr"`, so the fallback runs.

The `ready` step stands in for your own flow.

## How it works

The runtime runs `ON_START` in this order:

1. Top-level `SET` and `CALL` run first.
2. Branches are checked in order. The first matching branch wins.
3. If no branch matches, the runtime uses the top-level `RESPOND` and records a `dsl_on_start_branch` trace with `matched: false`.
4. If no branch matches and there is no top-level `RESPOND`, the runtime sends no welcome.

In the example, a French session gets only the French welcome. The `ready` step waits for the first customer message. Any other session gets the generic welcome followed by "How can I help?" in the same turn.

A condition that fails at run time is skipped. The runtime records a `dsl_on_start_branch_error` trace and checks the next branch. A condition with invalid syntax in authored ABL fails compilation with `INVALID_CEL_SYNTAX`, so it does not reach a customer.

In customer-visible text, a `{{name}}` that has no value renders as an empty string. "Welcome back, {{name}}." becomes "Welcome back, .". Use a `{{#if}}` section when the value can be missing.

## Common variations

### Start without ON_START

Use the first flow step as the greeting when the channel or product experience should not send proactive content.

```abl
AGENT: No_Startup_Handler_Agent
GOAL: "Start safely even without a proactive startup response"

FLOW:
  entry_point: first_prompt
  steps:
    - first_prompt

first_prompt:
  REASONING: false
  RESPOND: "Hello. What can I help you with?"
  THEN: COMPLETE
```

### Use an ELSE branch

Use `ELSE` when the generic welcome must replace the other branches and own the startup turn.

```abl
AGENT: Else_Greeting_Agent
GOAL: "Greet by language and keep a generic branch"

ON_START:
  BRANCHES:
    - IF: session.interaction.current.language == "fr"
      RESPOND: "Bonjour. Je peux vous aider avec le service, la facturation ou les retours."
    - ELSE:
      RESPOND: "Welcome. I can help with service, billing, or returns."

FLOW:
  entry_point: ready
  steps:
    - ready

ready:
  REASONING: false
  RESPOND: "How can I help?"
  THEN: COMPLETE
```

Both welcomes own the startup turn here. The `ready` step runs when the customer sends the first message. Put `ELSE` last. A top-level `HANDOFF` in `ON_START` never runs when an `ELSE` branch exists, and the compiler warns with `ON_START_HANDOFF_UNREACHABLE`.

### Greet by name only when the name exists

Use one `RESPOND` with a `{{#if}}` section when the personal part is optional. The `lookup_customer` tool is a project-local assumption. It needs an execution binding in your project and returns a `first_name` field when the profile has one.

```abl
AGENT: Optional_Name_Greeting_Agent
GOAL: "Greet by name only when the profile lookup returns a name"

TOOLS:
  lookup_customer() -> object
    description: "Return the customer profile for this session"
    confirm: never

ON_START:
  CALL: lookup_customer
    AS: profile
  RESPOND: "{{#if profile.first_name}}Welcome back, {{profile.first_name}}. {{/if}}How can I help?"

FLOW:
  entry_point: ready
  steps:
    - ready

ready:
  REASONING: false
  RESPOND: "Tell me what you need."
  THEN: COMPLETE
```

If the lookup fails or returns no name, the customer sees "How can I help?". If `ON_START` has no `RESPOND` and the tool returns a text `content` field, the runtime sends that text as the welcome. A `RESPOND` always takes priority over `content`.

### Know the channel fallbacks

Some channels apply their own fallback when `ON_START` provides no usable text.

| Channel                    | Fallback order                                                                                                                                  |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Pipeline voice (KoreVG)    | The channel Welcome Message, then the `ON_START` response, then the streamed startup text, then "Hello! How can I help you today?".            |
| Realtime voice (KoreVG)    | `VOICE` `PLAIN_TEXT`, `RESPOND`, `MESSAGE_KEY`, a flow step named `greet_*`, a `welcome` or `greeting` template or message, then the channel Welcome Message. If none exists, the voice provider opens with its own prompt-driven greeting. |
| Agent Assist               | The top-level `ON_START` `RESPOND`, then the `greeting` message, then "How can I help you?". Branch responses are not used unless the welcome is rendered through a session. |

Realtime voice never speaks a greeting that still contains an unresolved `{{placeholder}}`. Agent Assist skips it the same way.

## Verification

1. Start a session that matches a branch. Confirm the branch response and a `dsl_on_start_branch` trace with `matched: true`.
2. Start a session that matches no branch, for example with no language set. Confirm the fallback response and a `dsl_on_start_branch` trace with `matched: false`.
3. Start a session where the optional value is missing. Confirm the greeting has no empty gap such as "Welcome back, .".
4. Start a session without `ON_START`. Confirm the first flow step produces a clear first response.
5. On a channel that does not send the welcome, confirm a `dsl_on_start_skipped` trace. Confirm the first customer message still gets a response.

## Production readiness checklist

- Define a generic fallback with a top-level `RESPOND` or an `ELSE` branch.
- Keep fallback copy broad enough for unknown users.
- Do not put sensitive personalization in fallback text.
- Check that every value a condition reads has a source: a `SET`, a `CALL`, memory, or caller context.
- Test the branch match, the branch miss, and the missing-value cases.
- Test every deployed channel, including voice channels with a Welcome Message set.

## Common mistakes

| Mistake                                           | Why it happens                                             | How to avoid it                                                                      |
| ------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Omitting the generic fallback                     | Branch examples focus on the happy path.                   | Add a top-level `RESPOND`, an `ELSE` branch, or a safe first flow step.              |
| Expecting the first flow step after a branch      | A branch-selected welcome owns the startup turn.           | Use a top-level `RESPOND` if the flow must continue in the same turn.                |
| Writing a plain-language `IF:` condition          | The text reads like routing guidance.                      | Write an expression. Plain text never matches.                                       |
| Personalizing fallback text with unverified data  | Startup data can be missing or client-asserted.            | Keep fallback copy generic until identity and context are known.                     |
| Treating a branch miss as an error                | Branches are conditional by design.                        | Test the miss path and confirm the fallback response.                                |
| Using `{{name}}` without a guard                  | A missing value renders as an empty string.                | Wrap the personal part in a `{{#if}}` section.                                       |

## Troubleshooting

| Symptom                                       | Likely cause                                                                       | What to check                                                                    |
| --------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| No greeting appears                           | The channel does not send the `ON_START` welcome, or there is no top-level `RESPOND`. | Look for `dsl_on_start_skipped` and `dsl_on_start_branch` in the trace.          |
| The fallback shows when a branch should match | The condition reads a value that is empty at session start.                        | Check that a `SET`, `CALL`, or caller field produces the value before branches run. |
| A branch is skipped with an error trace       | The condition failed to evaluate at run time.                                      | Read the `dsl_on_start_branch_error` event for the condition and error.          |
| The first flow step did not run after the greeting | A branch-selected welcome owns the startup turn.                              | Send a customer message, or move the greeting to a top-level `RESPOND`.          |
| Greeting has a gap such as "Welcome back, ."  | A template value was empty.                                                        | Use a `{{#if}}` section.                                                         |
| Voice callers hear a different greeting       | A channel Welcome Message overrides it on pipeline voice.                          | Clear the Welcome Message in the channel configuration.                          |

## Related HowTos

- How to use ON_START to greet users before the first message
- How to personalize a welcome message for returning users
- How to design channel-specific welcome experiences
- How to route users from the welcome experience to the right agent
````
