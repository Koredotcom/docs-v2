# HowTo Review: route-users-from-welcome

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-users-from-welcome.md`
**Topic:** 2.5 - How to route users from the welcome experience to the right agent
**Verdict:** update-needed

## Proposed changes

Release 1.9.0 does not change start-time routing behavior. The article stays accurate. The refresh adds four test-backed behaviors that the 2026-10-20 text omitted. No content is deleted.

- Concept, "What happens at session start": add a bullet. A route `WHEN` that only a model can decide does not block a branch-selected handoff. A `WHEN` that start data decides as false still blocks it.
- Variation "Route with a condition on start data": add one sentence. On a lazy start, the top-level route `WHEN` can also read the first user message.
- Verification: extend step 5 (no `ON_FAILURE` text for a false `WHEN`). Add step 6 for a switched-off route (`ENABLED_WHEN`).
- Production readiness checklist: write `ON_FAILURE` text, because a bare `RESPOND` shows nothing at start. Add `ON_FAILURE` to every route that `ENABLED_WHEN` can switch off, or the customer sees "That option is not available right now."
- Troubleshooting: extend the first row (a false `WHEN` is silent). Add a row for the default "That option is not available right now." line.

Deletions: none.

Differences between sources:

- The published `.mdx` differs from the `articles/` draft in frontmatter, a back badge, `yaml` code fences, and the missing `## Related HowTos` section. The proposed text below follows the draft and keeps Related HowTos. Apply the same edits to the `.mdx` and keep its frontmatter, badge, fences, and no Related HowTos.
- No later manual edits in the `.mdx` change the body.

Hotfix check: no published claim comes from a 1.8.x hotfix-only backport. ABLP-6129 (session-variable handoff) is reverted in 1.9.0 and the article never described it.

Risk: low. Text additions only. All eight code blocks compile on 1.9.0 with the same informational warnings.

Final scores: all criteria 4 or 5 (see evidence). Personas: all ready.

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| Model-only route `WHEN` does not block a branch-selected handoff | `on-start-handoff-runtime.test.ts` lines 1895-1990, both admission paths | New bullet |
| Lazy start route `WHEN` reads the first message | Test "on a lazy start the route WHEN sees the first message" | New sentence |
| `ENABLED_WHEN` off with no `ON_FAILURE` shows "That option is not available right now." | `DISABLED_CASES`, `customer-visible-fallbacks.ts:9` | New checklist item and row |
| Bare `ON_FAILURE: RESPOND` shows nothing at start | Test ON_FAILURE_CASES "respond without a message" | Checklist wording |
| Start handoff outcomes and trace fields | `on-start-handoff.ts` | Unchanged |
| 1.9.0 `executionFailureFallback` field | `on-start-handoff.ts`, `execution-failure-fallback.ts` | No article change |
| Undeclared target is a warning | Harness on 1.9.0 | Article correct. Reference says error. |

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/route-users-from-welcome.md`
- `agent-platform/abl/how-to/route-users-from-welcome.mdx` (same body edits, keep frontmatter, badge, fences)
- `agent-platform/drafts/abl-howtos-docs/evidence/route-users-from-welcome-2026-11-01-evidence.md`

## Proposed article text

# How to route users from the welcome experience to the right agent

Use this pattern when the first assistant turn should send users to a specialist agent. The route can run at session start from known data, or after the user picks an option.

## Concept

A welcome route needs a signal. The signal decides which specialist receives the conversation. ABL supports three signals.

| Signal | Construct | When the route runs |
| ------ | --------- | ------------------- |
| Start data, such as the page or campaign the user came from | `ON_START` `BRANCHES` with a `DO:` list that holds `HANDOFF` | At session start, before the user types. |
| A condition on start data that you keep on the route | A top-level `HANDOFF` in `ON_START` plus the route `WHEN` | At session start, when no branch matched. |
| The user's choice, from a button or typed text | A flow `GATHER` plus a route `WHEN` | After the user answers. |

Start data is a value the channel passes as caller data, such as `session.entry_topic`. Treat caller data from a browser as unverified. When the route has business impact, send the value from your own server.

Every `HANDOFF` target must be a local agent that the entry agent declares in its `HANDOFF:` section. Every target must exist in the project.

### What happens at session start

- **Eager start**: no user message exists yet, for example when a Web SDK client connects. The welcome shows. The specialist becomes active but does not run. The user's first message goes to the specialist.
- **Lazy start**: the first user message starts the session, for example over HTTP chat. The welcome does not show. The runtime forwards that first message to the specialist.
- **Realtime speech-to-speech sessions** never run the start-time handoff. The entry agent keeps the session.
- A matched branch welcome owns the start. In a FLOW entry agent, the entry step runs on the first user message.
- The specialist's own `ON_START` never runs. `ON_START` runs once per session, for the entry agent only.
- The route options come from the declared `HANDOFF` entry, such as `RETURN`, `PASS`, `SUMMARY`, and `ON_FAILURE`. The `DO:` line names only the target.
- A route without `HISTORY` passes the full conversation history by default.
- A route `WHEN` that only a model can decide, such as `intent.*`, does not block a branch-selected handoff. A `WHEN` that the start data decides as false still blocks it.

## Minimal working example

This example routes by entry topic at session start. Every case reaches a specialist, so no user is left without a route.

```abl
AGENT: Welcome_Router_Agent
GOAL: "Send customers to the specialist for the page they came from"
PERSONA: "Welcome router"

HANDOFF:
  - TO: Claims_Agent
    SUMMARY: "Customer came from the claims page"
    RETURN: false
  - TO: Billing_Agent
    SUMMARY: "Customer came from the billing page"
    RETURN: false
  - TO: General_Service_Agent
    SUMMARY: "Customer came from an unknown page"
    RETURN: false

ON_START:
  BRANCHES:
    - IF: session.entry_topic == "claims"
      RESPOND: "Welcome. I am connecting you to our claims team."
      DO:
        - HANDOFF: Claims_Agent
    - IF: session.entry_topic == "billing"
      RESPOND: "Welcome. I am connecting you to our billing team."
      DO:
        - HANDOFF: Billing_Agent
    - ELSE:
      RESPOND: "Welcome. I am connecting you to our service team."
      DO:
        - HANDOFF: General_Service_Agent
```

```abl
AGENT: Claims_Agent
GOAL: "Handle claims questions"

FLOW:
  entry_point: start
  steps:
    - start

start:
  REASONING: false
  RESPOND: "I can help with claims."
  THEN: COMPLETE
```

```abl
AGENT: Billing_Agent
GOAL: "Handle billing questions"

FLOW:
  entry_point: start
  steps:
    - start

start:
  REASONING: false
  RESPOND: "I can help with billing."
  THEN: COMPLETE
```

```abl
AGENT: General_Service_Agent
GOAL: "Handle general service questions"

FLOW:
  entry_point: start
  steps:
    - start

start:
  REASONING: false
  RESPOND: "I can help with general service."
  THEN: COMPLETE
```

`entry_topic` is project-local. Your channel must send it as caller data. The compiler reports `ON_START_BRANCH_DO_ACTIVATED` as an informational warning. It confirms that each `DO:` list runs at session start.

## How it works

The runtime checks the branches in order. The first matching branch supplies the welcome and the `DO:` list. The `ELSE` branch matches when no earlier branch does. The welcome renders first. The `HANDOFF` then runs through the normal handoff path.

The specialist `Claims_Agent` shows its first reply only after the user sends a message. On a lazy start, that message is the one that started the session.

## Common variations

### Route from a menu choice

Use this when no start data exists and the user picks an option. The enum field accepts only the listed values. Other text fails validation.

```abl
AGENT: Welcome_Menu_Agent
GOAL: "Let the user pick billing or returns and route to the matching specialist"

HANDOFF:
  - TO: Billing_Agent
    WHEN: startup_choice == "billing"
    PASS: [startup_choice]
    SUMMARY: "User chose billing from the welcome menu"
    RETURN: false
  - TO: Returns_Agent
    WHEN: startup_choice == "returns"
    PASS: [startup_choice]
    SUMMARY: "User chose returns from the welcome menu"
    RETURN: false

ON_START:
  RESPOND: "Welcome. Choose billing or returns."
    ACTIONS:
      - BUTTON: "Billing" -> billing
        VALUE: "billing"
      - BUTTON: "Returns" -> returns
        VALUE: "returns"

FLOW:
  entry_point: capture_choice
  steps:
    - capture_choice

capture_choice:
  REASONING: false
  GATHER:
    startup_choice:
      PROMPT: "Type billing or returns."
      TYPE: enum
      OPTIONS: [billing, returns]
      REQUIRED: true
  THEN: COMPLETE
```

```abl
AGENT: Returns_Agent
GOAL: "Handle returns questions"

FLOW:
  entry_point: start
  steps:
    - start

start:
  REASONING: false
  RESPOND: "I can help with returns."
  THEN: COMPLETE
```

This example reuses `Billing_Agent` from the minimal example. A button press with no matching handler becomes the user's input. The input is the button `VALUE`, or the button id when `VALUE` is empty. The runtime checks a route `WHEN` after the user's input, not during the startup steps.

### Route with a condition on start data

Use a top-level `HANDOFF` when one route depends on one start value. The route `WHEN` decides. It runs once at start, when no branch matched.

```abl
AGENT: Sales_Router_Agent
GOAL: "Send visitors who came from the sales page to Sales"
PERSONA: "Welcome router"

HANDOFF:
  - TO: Sales_Agent
    WHEN: session.page_name == "sales"
    RETURN: false
    ON_FAILURE: CONTINUE

ON_START:
  RESPOND: "Welcome."
  HANDOFF: Sales_Agent
```

```abl
AGENT: Sales_Agent
GOAL: "Handle sales questions"

FLOW:
  entry_point: start
  steps:
    - start

start:
  REASONING: false
  RESPOND: "I can help with sales."
  THEN: COMPLETE
```

The `WHEN` must be decidable from start data. On a lazy start, it can also read the first user message, for example `WHEN: input contains "sales"`. A natural language condition or an `intent.*` value never matches at start. The same `WHEN` stays true for the whole session. A later turn can route to the specialist again. To make the route start-only, put the condition in a branch `IF:` and leave the route `WHEN` unset.

## Verification

1. Start a session with `entry_topic` set to `claims`. Expect the claims welcome. In the trace, `dsl_on_start_branch` shows the matched branch, then `handoff`, then `dsl_on_start_handoff` with `outcome: executed`, `activation: awaiting_user`, and `startMode: eager`.
2. Send a first message. Expect `Claims_Agent` to answer it.
3. Repeat with `billing`. Then repeat with no `entry_topic`. Expect `General_Service_Agent`.
4. For the menu, click each button. Then type `billing`. Then type `other`. Expect the validation message for `other`.
5. For a blocked route, make the route `WHEN` false. Expect the entry agent to keep the session, with `outcome: blocked` and `reason: condition_false`. Expect no `ON_FAILURE` text.
6. For a switched-off route, make the `ENABLED_WHEN` condition false. Expect `outcome: blocked` and `reason: target_disabled`. Expect the `ON_FAILURE` text, or the default line when the route has none.

## Production readiness checklist

- Define every target agent and declare it in the entry agent's `HANDOFF:` section.
- Send start data from your server when the route has business impact.
- Keep an `ELSE` branch or a fallback agent for unknown values.
- Set `ON_FAILURE` on each route so a refused handoff shows the message you intend. Write the text, for example `ON_FAILURE: RESPOND "Sales is closed today."`. A bare `RESPOND` shows nothing at start.
- Add `ON_FAILURE` to every route that `ENABLED_WHEN` can switch off. Without it, the customer sees "That option is not available right now."
- Use `ESCALATE` in `ON_FAILURE` only when the project defines an `ESCALATE` block with a human-agent connection and routing. Without it, no person is reached.
- Pass only the fields the specialist needs.
- Test each start value, each button, an unknown value, and a blocked route.
- Confirm the target channel delivers the `ON_START` welcome. The handoff still runs when the welcome is suppressed.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Expecting a route `WHEN` to fire during the startup flow steps | The runtime checks flow routes after the user's input. A first step that ends with `THEN: COMPLETE` completes the session. | Use `ON_START` `DO: - HANDOFF` for start-time routes. |
| Naming a `HANDOFF` target that the agent does not declare | The `DO:` line names only the target. | Declare the target in the `HANDOFF:` section. The compiler warns `ON_START_HANDOFF_TARGET_INVALID`. |
| Writing the branch `IF:` as a quoted sentence | A quoted sentence with no operator is always true. | Compare a value, such as `session.entry_topic == "claims"`. |
| Routing to a remote (A2A) agent at start | A start-time handoff reaches local agents only. | Route to a local agent first. |
| Expecting the specialist's `ON_START` to run | `ON_START` runs for the entry agent only. | Set shared values in the entry agent. Pass them with `PASS`. |
| Showing buttons with no typed fallback | Some users type. | Gather the same value from text, with an enum field. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The user stays with the entry agent | The route `WHEN` is false, or the target is switched off by `ENABLED_WHEN`. A false `WHEN` is silent and shows no `ON_FAILURE` text. | `dsl_on_start_handoff` outcome and reason. |
| The customer sees "That option is not available right now." | `ENABLED_WHEN` switched the target off and the route has no `ON_FAILURE`. | The `availability_refused` trace. Add `ON_FAILURE: CONTINUE` for a silent start, or `RESPOND` with your own text. |
| The compiler reports a missing target | The specialist is not in the project. | Define or import the agent. |
| The welcome does not show but the handoff runs | The channel does not deliver `ON_START` responses. | `dsl_on_start_skipped` and the channel behavior. |
| The welcome shows but the specialist is silent | Eager start. The specialist waits for the first message. | Send a message. |
| No handoff on a realtime speech-to-speech call | Realtime sessions never run the start-time handoff. | The `skipped_mode` outcome. |
| The route repeats on a later turn | The route `WHEN` reads start data and stays true. | Move the condition to a branch `IF:`. |
| The handoff never starts and the trace shows `call_failed` | A `CALL` earlier in the branch `DO:` list failed and stopped the list. | The tool result. |

## Related HowTos

- How to use ON_START to greet users before the first message.
- How to create a welcome message for a new conversation.
- How to design channel-specific welcome experiences.
- How to route by role, channel, language, and session state.
- How to initialize session variables before the first user turn.
