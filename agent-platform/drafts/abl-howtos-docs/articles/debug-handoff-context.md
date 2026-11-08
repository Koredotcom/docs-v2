# Debug missing or incorrect context after handoff

Use this pattern when a target agent asks for data you passed, ignores context you expected, or receives data you did not intend to send.

## Concept

A handoff builds context in stages. Each stage leaves a trace event. Debug in the same order: route, context sent, context accepted, history, return.

| Stage | Question | Trace event |
| ----- | -------- | ----------- |
| 1. Route | Did the right route fire? | `handoff`, `handoff_condition_check` |
| 2. Context sent | What did the route send? | `handoff` (the `context` field), `a2a_invocation_envelope` for a remote target |
| 3. Context accepted | Did the target treat each field as filled? | `handoff_context_seed` |
| 4. Assignments | Did `SET` and the current-message `PASS` run? | `handoff_context_set_applied`, `handoff_context_pass_resolved` |
| 5. Filtering | Did the platform drop a model-supplied value? | `decision` with `model_supplied_readonly_context_dropped`, `handoff_context_validation_rejected` |
| 6. History | How much history did the target start with? | `thread_resume` for a reused thread |
| 7. Return | Did child values reach the parent? | `handoff_return_handler`, `memory_error` |

Most missing-context problems come from three causes: a `PASS` name that does not match a caller variable, a target that does not declare the field, or a history setting that hides the answer.

## Minimal working example

A route passes `policy_no`, but the router variable is `policy_number`. The route compiles clean. The runtime skips the field because the caller holds no value under that name.

Broken route:

```yaml
HANDOFF:
  - TO: Auto_Claims_Agent
    WHEN: intent.category == "auto_claim" AND policy_number IS SET
    PASS: [policy_no]
    SUMMARY: "Customer reports an auto claim on policy {{policy_number}}."
    HISTORY: summary_only
    RETURN: false
```

Fixed route:

```yaml
HANDOFF:
  - TO: Auto_Claims_Agent
    WHEN: intent.category == "auto_claim" AND policy_number IS SET
    PASS: [policy_number]
    SUMMARY: "Customer reports an auto claim on policy {{policy_number}}."
    HISTORY: summary_only
    RETURN: false
```

Both blocks are section snippets. They need the router and `Auto_Claims_Agent` from [Pass specific fields between agents](/agent-platform/abl/how-to/pass-fields-between-agents).

How the trace shows the fault:

- The `handoff` event fires to `Auto_Claims_Agent`. The route is correct.
- The `handoff_context_seed` event lists no `policy_number` in `seededFields`. The reason code is `no_fields_seeded`.
- `remainingWaitingFields` lists `policy_number`. The target asks for it.

The fix is the field name. After the fix, `seededFields` lists `policy_number`.

## How it works

Read the events in this order.

### 1. Confirm the route

Find the `handoff` event. Check `to`, `returnExpected`, and `reasonCode`. If the wrong agent receives the handoff, or no handoff fires, use [Debug routing traces](/agent-platform/abl/how-to/debug-routing-traces).

### 2. Inspect what the route sent

The `handoff` event carries a `context` field. It holds the values that the route and the routing model supplied. Check each field you expect. For a remote target, check `contextKeys` in the `a2a_invocation_envelope` event.

A field is missing when:

- The `PASS` name does not match a caller variable. The runtime skips it without an error.
- The caller value is empty.
- The field is a gathered field that you did not name in `PASS`.

### 3. Check what the target accepted

The `handoff_context_seed` event shows two lists.

- `seededFields`: fields the target marked as filled.
- `remainingWaitingFields`: fields the target still asks for.

A passed field is not seeded when:

- The target does not declare it in `GATHER`, at agent level or in a `FLOW` step.
- The value is empty.
- The target field limits its sources with `SATISFIED_BY`, and the source of the passed value is not allowed. The value stays visible as context, and the target still asks.

### 4. Check assignments and the current message

`handoff_context_set_applied` lists the fields that the route `set` assigned. A field that resolved to no value is missing from the list.

`handoff_context_pass_resolved` appears when `PASS` filled a field from the customer's current message. It applies to the names `request`, `user_request`, `customer_request`, `query`, `message`, `utterance`, and `latest_user_utterance`.

### 5. Check what the platform dropped

- A model-supplied value for a read-only session field is dropped. The runtime records a `decision` event with `model_supplied_readonly_context_dropped` and the key names. Your `PASS` still sends the real value.
- When a supervisor model supplies a value for an `INFER` field and it fails the field's validation, the runtime records `handoff_context_validation_rejected` with the field names and errors.

### 6. Check history

The runtime copies history once, when it creates the target thread. If the target knows too much or too little, check the `HISTORY` line first. See [Pass full, recent, or no conversation history](/agent-platform/abl/how-to/choose-handoff-history-scope).

If the route returns to a child that is still waiting, the runtime resumes that child. The `thread_resume` event shows `preservedHistoryLength` and `preservedDataKeys`. The route's `HISTORY` does not run again. A new `PASS` value fills a blank child field or refreshes a value from an earlier handoff. It does not overwrite a value that the child gathered from the customer.

### 7. Check the return

The `handoff_return_handler` event lists `mappedFields`, `setFields`, and `clearedFields`. A `preservedMappedFields` list names parent fields that kept their value because the child returned an empty one. Compare `mappedFields` with your `MAP` entries. See [Map child-agent outputs back to parent-agent variables](/agent-platform/abl/how-to/map-child-agent-outputs).

If the parent cannot write a `MAP` or `SET` target, the runtime applies none of the return effects and records a `memory_error` event.

## Common variations

### A memory grant does not arrive

Check the compile result first. `INVALID_HANDOFF_MEMORY_GRANT` and `INVALID_HANDOFF_MEMORY_GRANT_ACCESS` explain most failures. Then check that the stored value exists. A path with no value and no default attaches nothing. See [Grant another agent access to memory](/agent-platform/abl/how-to/grant-memory-access-to-agent).

### The target sees data you did not pass

Check four sources: automatic values (`conversationSummary`, `user`, `gender`, `location`), values the routing model supplied, a `SET` assignment, and a memory grant. See [Minimize context for privacy and compliance](/agent-platform/abl/how-to/minimize-agent-context).

### A remote agent lacks context

Check `contextKeys` in the `a2a_invocation_envelope` event first. If the keys are present, the remote agent is not reading the A2A metadata. See [Preserve context when calling remote agents](/agent-platform/abl/how-to/preserve-context-for-remote-agents).

## Verification

1. Reproduce the problem in a test conversation with trace output on.
2. Walk the seven stages in order. Stop at the first stage that shows a fault.
3. Apply one fix.
4. Repeat the conversation. Expect the event for that stage to change.
5. Keep the conversation as a regression test.

For the broken route above, expect `seededFields` to be empty before the fix and to list `policy_number` after.

## Production readiness checklist

- Each handoff has a test that asserts `seededFields` for every passed field.
- Each returnable handoff has a test that asserts `mappedFields`.
- Each route that sends history has a test with a long conversation.
- Trace output is on in test environments.
- The team knows who reviews traces that carry personal data.
- Every `PASS` name is checked against the caller variable names in review.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Fixing the target prompt when the field never arrived | The symptom looks like a model problem. | Check `seededFields` before you edit a prompt. |
| Trusting a clean compile | A `PASS` name that matches no variable compiles clean. | Test the handoff and read `seededFields`. |
| Debugging the return before the send | Both are context problems. | Walk the stages in order. |
| Changing `HISTORY` to fix a missing field | History and fields are separate. | Check `PASS` first. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The target asks for a passed field | The name does not match, the value is empty, or the target does not declare the field. | `handoff` context and `handoff_context_seed`. |
| The field is in `context` but not in `seededFields` | The target lacks a `GATHER` field of that name, or `SATISFIED_BY` blocks the source. | The target `GATHER` and the field source. |
| A `SET` value is missing | The assignment resolved to no value, or `set` is outside `CONTEXT`. | `handoff_context_set_applied` and the route layout. |
| The target does not know earlier messages | The route sets `none`, `summary_only`, or a small window. | The `HISTORY` line. |
| The parent variable is empty after the child returns | `MAP` is missing or the child returned no value. | `handoff_return_handler`. |
| The return applies nothing | A `MAP` or `SET` target is not writable by the parent. | `memory_error` events. |
| A revisited child keeps an old value | The runtime resumed the waiting thread, and the child gathered that value from the customer. | `thread_resume` and `preservedDataKeys`. |

## Related HowTos

- [Debug routing traces](/agent-platform/abl/how-to/debug-routing-traces)
- [Pass specific fields between agents](/agent-platform/abl/how-to/pass-fields-between-agents)
- [Pass a conversation summary during handoff](/agent-platform/abl/how-to/pass-summary-during-handoff)
- [Pass full, recent, or no conversation history](/agent-platform/abl/how-to/choose-handoff-history-scope)
- [Map child-agent outputs back to parent-agent variables](/agent-platform/abl/how-to/map-child-agent-outputs)
- [Preserve context when calling remote agents](/agent-platform/abl/how-to/preserve-context-for-remote-agents)
