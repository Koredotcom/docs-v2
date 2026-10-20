# HowTo Review: route-to-fallback-agent

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-to-fallback-agent.md`
**Topic:** 3.5 - How to route unclear or unsupported requests to a fallback agent
**Verdict:** update-needed
**Code branch:** `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`)
**Risk level:** medium. The example behavior changes. The pattern and scope stay the same.

## Proposed changes

- Add `RESUME_WITH: latest_child_user_utterance` to the minimal example. Without it, the supervisor replays the original vague message.
- Give the fallback agent its own `GATHER` and `COMPLETE`. Remove the unsourced `PASS` lists. Use `RETURN: false` for the specialists.
- Add a table of the two outcomes. Add the direct-answer caveat for a supervisor without `BEHAVIOR`, and the `ROLE: router` fix.
- Add the replay rules: the supervisor does not offer the fallback again during the replay, deterministic routing is skipped, and the platform replays at most once.
- Rewrite the `MAP` variation as a full example. The supervisor declares the mapped variable and a route reads it. Add the sticky-value caveat.
- Add variations for `WHEN: true`, explain and stop (no return), and a human handoff with the `ESCALATE` caveat.
- Add `UNDECLARED_INTENT_CATEGORY` and the direct-answer symptom to troubleshooting. Add the `resume_intent` trace event to verification.

## Deletions

- The `PASS: [customer_id, account_id]` and `PASS: [customer_id, issue_summary]` and `conversation_summary` lists. None had a source.
- The sentence "declared here in the supervisor's own `MEMORY.SESSION`". The declaration was under the child.
- The old `Fallback_Triage_Agent` block with `MEMORY: SESSION: - clarified_intent` and `GATHER` for `clarified_intent`. Replaced by `clarified_request` and by the `area` enum in the `MAP` variation.
- The common-mistake row "Using literal `true` as the only route". Replaced by the `WHEN: true` variation, which explains what the platform does with it.
- The variation "Escalate to a human after repeated clarification failures". No verified counter drives it. Replaced by the `ESCALATE` variation.
- The troubleshooting row that told readers to confirm `ACTION: resume_intent` without naming `ON_RETURN`. Rewritten with the full key path.
- The related link "How to pass specific fields between agents". No such article exists in `articles/`.

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| Default replay is the original utterance | `selectHandoffResumeIntentMessage` | Example fixed |
| `RESUME_WITH: latest_child_user_utterance` is compiled | IR dump `resume_with` | Example |
| The replay hides the child that just returned | `prompt-builder.ts` B4, B20b | New bullet |
| Deterministic routing is skipped during a replay | `runtime-executor.ts` ~24794 | New bullet |
| One replay per return | `MAX_RESUME_INTENT_DEPTH = 1` | New bullet |
| `MAP` is child key to parent key | `applyHandoffOnReturnEffects` | `MAP` variation |
| `RETURN: false` child does not return | `tryThreadReturn` | Variation, mistake |
| `WHEN: true` is skipped before the model reasons | `checkDeterministicRouting` | Variation |
| Router role forces routing and adds a question tool | `prompt-builder.ts` | Concept |

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/route-to-fallback-agent.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/route-to-fallback-agent-2026-10-20-evidence.md`

## Proposed full article

````markdown
# How to route unclear or unsupported requests to a fallback agent

Use this pattern when the supervisor cannot choose a specialist, or when the customer asks for something outside the supported intents. A fallback agent clarifies the request or explains the limit. It does not absorb every request.

## Concept

Write the clear routes first, such as intent categories or data conditions. Write one quoted plain-language route last for requests that are vague, unsupported, or in conflict.

The fallback agent can end in one of two ways.

| Outcome | Settings | Use when |
| ------- | -------- | -------- |
| Clarify, then route again | `RETURN: true` with `ON_RETURN` set to `resume_intent` | A short question lets a specialist take the request. |
| Explain and stop | `RETURN: false` | The request is out of scope and the fallback can finish the conversation or hand it to a person. |

A plain-language `WHEN` is guidance for the model. The model chooses the fallback route when the request fits that text. A supervisor without a `BEHAVIOR` block can also answer directly instead of choosing any route. Set `BEHAVIOR` with `ROLE: router` when every message must reach a route. A router can also ask the customer one question when no route fits.

## Minimal working example

This supervisor sends billing and technical requests to specialists. It sends everything else to a triage agent. The triage agent asks one question, then returns control. The supervisor then routes the customer's answer.

```abl
SUPERVISOR: Fallback_Routing_Supervisor
GOAL: "Send clear requests to specialists and unclear requests to a fallback agent"

INTENTS:
  billing: "Billing and payment requests."
  technical_support: "Product troubleshooting requests."

HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    RETURN: false
    SUMMARY: "Customer needs billing help."

  - TO: Technical_Support_Agent
    WHEN: intent.category == "technical_support"
    RETURN: false
    SUMMARY: "Customer needs technical support."

  - TO: Fallback_Triage_Agent
    WHEN: "the request is vague, unsupported, conflicting, or missing enough information to choose a specialist"
    RETURN: true
    SUMMARY: "Ask which area the customer needs, then return so routing can resume."
    ON_RETURN:
      ACTION: resume_intent
      RESUME_WITH: latest_child_user_utterance
```

```abl
AGENT: Fallback_Triage_Agent
GOAL: "Find out whether the customer needs billing help or technical support"

GATHER:
  clarified_request:
    TYPE: string
    PROMPT: "Is this about billing or about a technical problem? Tell me a little more."
    REQUIRED: true

COMPLETE:
  - WHEN: clarified_request IS SET
    RESPOND: "Thanks. I am sending you to the right team."
```

These two stand-in specialists let the project compile. Replace them with your real agents.

```abl
AGENT: Billing_Agent
GOAL: "Resolve billing requests"
```

```abl
AGENT: Technical_Support_Agent
GOAL: "Resolve technical support requests"
```

## How it works

- The two specialist routes use `intent.category`. `INTENTS:` declares the categories. The model chooses the fallback route when neither category fits.
- The fallback agent asks its `GATHER` question. Its `COMPLETE` condition fires when `clarified_request` is set. Because the route has `RETURN: true`, control goes back to the supervisor.
- `ON_RETURN` with `ACTION: resume_intent` makes the supervisor route again after the return. `RESUME_WITH: latest_child_user_utterance` replays the customer's answer to the triage question. Without `RESUME_WITH`, the supervisor replays the original message, which was the vague one.
- During the replay, the supervisor does not offer the fallback route again, so the customer cannot loop back to it. The platform replays at most once for each return.
- The platform does not run deterministic routing during the replay. The model chooses among the routes still offered.
- If the triage question gets a sensitive reply, the platform replays the original message instead.
- A `HANDOFF` entry without `HISTORY` gives the specialist the full conversation history. A project-level coordination default can change this value.
- `ON_RETURN: "resume_intent"` is the short form. It uses the default replay of the original message.

## Common variations

### Map a returned value to the supervisor

Use `MAP` when a route condition must read what the fallback learned. `MAP` copies a child field to a parent variable. The left side is the child field. The right side is the parent variable.

```abl
SUPERVISOR: Mapped_Fallback_Supervisor
GOAL: "Route by a value the fallback agent returns"

MEMORY:
  SESSION:
    - clarified_area

INTENTS:
  billing: "Billing and payment requests."
  technical_support: "Product troubleshooting requests."

HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing" OR clarified_area == "billing"
    RETURN: false
    SUMMARY: "Customer needs billing help."

  - TO: Technical_Support_Agent
    WHEN: intent.category == "technical_support" OR clarified_area == "technical_support"
    RETURN: false
    SUMMARY: "Customer needs technical support."

  - TO: Fallback_Triage_Agent
    WHEN: "the request is vague, unsupported, conflicting, or missing enough information to choose a specialist"
    RETURN: true
    SUMMARY: "Ask which area the customer needs, then return so routing can resume."
    ON_RETURN:
      ACTION: resume_intent
      MAP:
        area: clarified_area
```

```abl
AGENT: Fallback_Triage_Agent
GOAL: "Find out whether the customer needs billing help or technical support"

GATHER:
  area:
    TYPE: enum
    OPTIONS: [billing, technical_support]
    PROMPT: "Is this about billing or technical_support?"
    REQUIRED: true

COMPLETE:
  - WHEN: area IS SET
    RESPOND: "Thanks. I am sending you to the right team."
```

The supervisor declares `clarified_area` in its own `MEMORY`. The mapped value stays in the session. A route that reads it keeps matching while the supervisor owns the conversation, so use it with specialists that keep the conversation (`RETURN: false`). If the child returns an empty value, the parent keeps its existing value.

### Always-available default route

Use `WHEN: true` on the last route when one agent can take every leftover request.

```abl
HANDOFF:
  - TO: Fallback_Triage_Agent
    WHEN: true
    RETURN: true
    SUMMARY: "Handle any request that no other route fits."
```

The platform does not evaluate a `true` route before the model reasons. The route stays available, and the model chooses it.

### Explain and stop

For an out-of-scope request, use `RETURN: false` on the fallback route and end the fallback agent with a `COMPLETE` condition. With `RETURN: false`, the fallback owns the conversation after the transfer. Without a `COMPLETE` condition or a human handoff, the customer cannot reach a specialist later in the same session.

### Hand the customer to a person

Route to an agent that declares `ESCALATE`. Escalation reaches a person only when the project has a human-agent connection and the `ESCALATE` block has a `routing` block with `connection`, `queue`, or `skills`. See the [ESCALATE reference](/agent-platform/abl/reference/multi-agent-and-supervisor#escalate).

## Verification

1. Validate the supervisor and all target agents together.
2. Send a clear billing message. Expect `Billing_Agent`.
3. Send a clear technical message. Expect `Technical_Support_Agent`.
4. Send a vague message, such as "I need help with my account." Expect `Fallback_Triage_Agent` and its question.
5. Answer the question. Expect a `resume_intent` trace event, and then the matching specialist.
6. Send an out-of-scope message. Expect the fallback route, not a specialist.

In the trace, check these events.

- `handoff_condition_check` for each route the model chose. Read `result` and `evaluatedContext`.
- `resume_intent`. Check `resumeWith`, `resumeMessageSource`, and `resumeMessage` to see which text the supervisor replayed.
- For the `MAP` variation, a `memory_error` event means the platform refused to write the mapped value.

## Production readiness checklist

- Every specialist route has an owner and a short `SUMMARY`.
- The fallback route is last, and its text is plain lowercase words.
- A returning fallback has `RESUME_WITH: latest_child_user_utterance`, or the supervisor has a route that reads the mapped value.
- Every `MAP` target is declared in the supervisor's `MEMORY`.
- A non-returning fallback ends with a `COMPLETE` condition or a human handoff.
- A human handoff has a human-agent connection and a `routing` block.
- Fallback traces are reviewed on a schedule. Add a real route for any request type that keeps landing there.
- Tests cover a clear request, a vague request, an out-of-scope request, and an answer to the triage question.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Replaying the original vague message | `ON_RETURN` is set without `RESUME_WITH`. | Set `RESUME_WITH: latest_child_user_utterance`. |
| Mapping a field the child never sets | The `MAP` key does not match a child field. | Use the exact child field name on the left side of `MAP`. |
| Mapping to an undeclared parent variable | The parent never declares it. | Declare the target in the supervisor's `MEMORY`. |
| Writing `AND` or `OR` in the quoted fallback text | The phrase reads like plain language. | Use lowercase words. The platform evaluates uppercase `AND`, `OR`, and `NOT` as an expression. |
| Letting the fallback hide missing coverage | The fallback always answers, so gaps go unnoticed. | Review fallback traces and add routes for recurring requests. |
| Using `RETURN: false` and no way out | The fallback owns the conversation after the transfer. | Add a `COMPLETE` condition or a human handoff. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The supervisor answers instead of using the fallback | The supervisor has no `BEHAVIOR` block, so it can answer directly. | Set `ROLE: router`, or make the fallback text match the request more closely. |
| After the triage question, the customer reaches the wrong specialist | The supervisor replayed the original vague message. | `resumeMessageSource` in the `resume_intent` event. Set `RESUME_WITH`. |
| The parent variable never changes | The `MAP` key does not match, or the child returned an empty value. | The child field name, and `memory_error` events. |
| Routing does not resume after the return | The route has `RETURN: false`, or `ON_RETURN` has no `ACTION: resume_intent`. | The route settings and the `resume_intent` event. |
| A specialist route falls through to the fallback | The intent category is not set, or the condition is false. | `handoff_condition_check` and `evaluatedContext`. |
| Warning `UNDECLARED_INTENT_CATEGORY` | A `WHEN` uses a category that `INTENTS:` does not list. | The spelling in `WHEN` and the `INTENTS:` list. |
| The specialist has more or less history than expected | `HISTORY` is omitted, so the default (`full`) applies. | Set an explicit `HISTORY` value. |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to route users by detected intent
- How to clarify before routing to a specialist agent
- How to handle messages that contain multiple user intents
- How to debug routing decisions in traces
````
