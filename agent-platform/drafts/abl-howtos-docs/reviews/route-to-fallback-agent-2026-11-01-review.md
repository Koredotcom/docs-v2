# HowTo Review: route-to-fallback-agent

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-to-fallback-agent.md`
**Topic:** 3.5 - How to route unclear or unsupported requests to a fallback agent
**Verdict:** update-needed

Target release: Artemis 1.9.0 (`release_Artemis_1.9.0`). Previous scan: `hotfix_Artemis_1.8.1`. Risk level: low. Examples are unchanged and all validate on 1.9.0.

## Proposed changes

- Concept: add that plain-language `WHEN` text must be quoted. Outside quotes, `//` starts a comment, and a comment-only `WHEN` fails to compile. New in 1.9.0.
- How it works: correct the claim that the supervisor never offers the fallback again during the replay. The platform hides only a fallback that returned without finishing. A fallback that ends with `COMPLETE` stays offered.
- How it works: add the replay depth limit. A second return in the same turn does not replay.
- How it works: add that the supervisor hides a route whose plain-session `WHEN` is false during the replay. A route that reads `intent` stays offered.
- How it works: add that a `__return_to_parent__` message becomes the replay text when `RESUME_WITH` is not set.
- Verification: add the `handoff_completed` trace event (new in 1.9.0) and the `resume_intent_depth_limit` reason code.
- Troubleshooting: add a row for a customer who reaches the triage agent twice in a row.

## Deleted content

| Deleted text | Reason |
| ------------ | ------ |
| "During the replay, the supervisor does not offer the fallback route again, so the customer cannot loop back to it." | The code hides only a child that did not finish. The sentence was wrong for a fallback that ends with `COMPLETE`. The corrected bullets replace it. |

## Differences between the draft and the published copy

The published `.mdx` matches the `articles/` draft in text. It differs in format only: frontmatter, a back badge, `yaml` fences instead of `abl`, and no Related HowTos section. The proposed text below is in draft format. Apply the same format changes when publishing.

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| A `//` outside quotes is a comment in `WHEN`. A comment-only `WHEN` fails to compile. | `routing-primitive-executor.ts` (`maskConditionLineComments`, `isCommentOnlyCondition`). Harness: comment-only gives `WHEN is required`. URL in quotes compiles. | One sentence added. |
| Replay hides only a child whose latest thread is not `completed`. | `prompt-builder.ts` `resolveResumeReplayHiddenRouteAgents`. `tryThreadReturn` sets `completed`. A `return_to_parent` action sets `waiting` (`routing-executor.ts` ~14700). Same code in 1.8.1. | Article bullet corrected. |
| One replay for each return. | `MAX_RESUME_INTENT_DEPTH = 1`, depth check at `routing-executor.ts` 7590, `resume_intent_depth_limit` reason code. | Bullet and trace note added. |
| A `__return_to_parent__` message is replayed when `RESUME_WITH` is unset. | `selectHandoffResumeIntentMessage`, `forwarded_return_message` branch. Identical in 1.8.1. | One sentence added. |
| `handoff_completed` reports `outcome` and `durationMs`. | `handoff-completion-record.ts`. New in 1.9.0. | Verification bullet added. |
| Deterministic routing is skipped during a replay. | `runtime-executor.ts` ~26555. | No change. |
| `ON_RETURN` is wired. `RESUME_WITH` and `MAP` work as described. | Parser, `dispatchHandoffOnReturnBehavior`, `applyHandoffOnReturnEffects`. | No change. |
| `EXECUTION.pipeline.parentReturn` is a separate return path. | `flow-step-executor.ts` precheck, `pipeline/config.ts`. | Not added. Flagged. |
| `executionFailureFallback` applies to `ON_START` handoffs. | `on-start-handoff.ts`. | Not relevant. |
| All six full-document and snippet blocks pass on 1.9.0. | `validate.mjs`, zero errors and zero warnings. | Examples kept. |

## Scores

All criteria score 4 or 5. Grounding 5, depth 5, readability 5, examples 5, search 4, workflow and failure modes 5, self-service 4, comprehensiveness 4, completeness 5. Persona review: all three ready. Details are in `evidence/route-to-fallback-agent-2026-11-01-evidence.md`.

## Human review items

- The 1.8.1 hide claim was wrong. Confirm the corrected wording.
- The example fallback can be offered again in the replay. Product may want a loop guard.
- `EXECUTION.pipeline.parentReturn` has no HowTo coverage.
- `RETURN` and `EXPECT_RETURN` convention differs between the reference and the HowTos.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/route-to-fallback-agent.md`
- `agent-platform/abl/how-to/route-to-fallback-agent.mdx`
- `agent-platform/drafts/abl-howtos-docs/evidence/route-to-fallback-agent-2026-11-01-evidence.md`

## Proposed article text

# How to route unclear or unsupported requests to a fallback agent

Use this pattern when the supervisor cannot choose a specialist, or when the customer asks for something outside the supported intents. A fallback agent clarifies the request or explains the limit. It does not absorb every request.

## Concept

Write the clear routes first, such as intent categories or data conditions. Write one quoted plain-language route last for requests that are vague, unsupported, or in conflict.

The fallback agent can end in one of two ways.

| Outcome | Settings | Use when |
| ------- | -------- | -------- |
| Clarify, then route again | `RETURN: true` with `ON_RETURN` set to `resume_intent` | A short question lets a specialist take the request. |
| Explain and stop | `RETURN: false` | The request is out of scope and the fallback can finish the conversation or hand it to a person. |

A plain-language `WHEN` is guidance for the model. Quote it. The model chooses the fallback route when the request fits that text. Outside quotes, `//` starts a comment, and a `WHEN` that holds only a comment fails to compile. A supervisor without a `BEHAVIOR` block can also answer directly instead of choosing any route. Set `BEHAVIOR` with `ROLE: router` when every message must reach a route. A router can also ask the customer one question when no route fits.

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
- `ON_RETURN` with `ACTION: resume_intent` makes the supervisor route again after the return. `RESUME_WITH: latest_child_user_utterance` replays the customer's answer to the triage question. Without `RESUME_WITH`, the supervisor replays the original message, which was the vague one. If the fallback hands the customer back with `__return_to_parent__` and a message, the supervisor replays that message instead.
- The platform replays at most once for each return. A second return in the same turn does not replay again.
- The platform does not run deterministic routing during the replay. The model chooses among the routes still offered.
- During the replay, the supervisor hides a fallback that returned without finishing, such as one that handed the customer back with `__return_to_parent__`. A fallback that finished with a `COMPLETE` condition stays offered, so a still-vague answer can reach it again.
- During the replay, the supervisor also hides a route whose `WHEN` reads a plain session variable and is false. A route that reads `intent` stays offered.
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
- `handoff_completed` for each handoff attempt. Read `outcome` (`success`, `rejected`, `blocked`, `error`, or `timeout`), `cause`, and `durationMs`.
- `resume_intent`. Check `resumeWith`, `resumeMessageSource`, and `resumeMessage` to see which text the supervisor replayed. A `reasonCode` of `resume_intent_depth_limit` means the platform skipped a second replay.
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
| The customer reaches the triage agent twice in a row | The fallback finished with `COMPLETE`, so the replay offers it again and the model chose it. | The reply to the triage question. Add a route for that answer, or tighten the fallback `WHEN`. |
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
