# Preserve context when calling remote agents

Use this pattern when you hand a conversation to an agent that runs outside your project over A2A, and that agent needs context from the conversation.

## Concept

A remote agent has no ABL definition in your project. The platform cannot seed its `GATHER` fields or read its memory. It receives one A2A message. That message carries the customer's text, the history you select, and a bounded context.

Context for a remote agent is a controlled export. Whatever you authorize leaves your platform.

| What the remote agent receives | How you control it |
| ------------------------------ | ------------------ |
| The customer message | The platform forwards the current request. |
| Earlier messages | `HISTORY`: `full`, `last_n`, or `none`. |
| Field values | `PASS`, `SET`, and the summary. |
| Stored memory values | `memory_grants`. |
| Control values `handoff_from` and `intent` | The platform adds them. |
| Values back from the remote agent | The remote agent returns them. `ON_RETURN` `MAP` copies them. |

Use a `HANDOFF` for a remote agent. A `DELEGATE` needs a local target. At run time a `DELEGATE` to a remote name fails with "Agent not found", and the delegate `ON_FAILURE` policy runs.

## Minimal working example

An intake router sends fraud reviews to a partner fraud service. The route passes the transaction ID, a short summary, and the last four messages. It sets a failure reply.

The partner endpoint is a project-local assumption. Replace the URL with your partner's A2A endpoint. The platform adds the credentials from your external agent registration.

`agents/intake-hub.agent.abl`

```yaml
SUPERVISOR: Intake_Hub
GOAL: "Send fraud reviews to the partner fraud service and share only what it needs"

BEHAVIOR:
  role: router

INTENTS:
  fraud_review: "The customer reports an unrecognized transaction."

MEMORY:
  session:
    - transaction_id
      TYPE: string
      DESCRIPTION: "Identifier of the disputed transaction."

GATHER:
  transaction_id:
    PROMPT: "Which transaction do you not recognize?"
    TYPE: string
    REQUIRED: true

HANDOFF:
  - TO: Partner_Fraud_Service
    WHEN: intent.category == "fraud_review" AND transaction_id IS SET
    PASS: [transaction_id]
    SUMMARY: "Customer disputes transaction {{transaction_id}}."
    HISTORY:
      mode: last_n
      count: 4
    LOCATION: remote
    ENDPOINT: "https://fraud.partner.example.com/a2a"
    PROTOCOL: a2a
    RETURN: true
    ON_FAILURE: RESPOND "The fraud service is unavailable. A specialist will contact you."
```

Variable sources:

- `transaction_id` is a `GATHER` field of the router. `PASS` copies it into the remote context.
- `Partner_Fraud_Service` has no file in your project. The `ENDPOINT` line defines it.

## How it works

1. The router selects the route and builds the context. `PASS`, `SET`, the summary, and memory grants apply as for a local handoff.
2. The runtime selects the history. `full` sends the whole conversation as stored. `last_n` sends the last N messages. `none` and `summary_only` send no messages. `auto` sends the summary only when the route has one and otherwise the last 5 messages.
3. The runtime projects the context to the keys the route authorized. It adds `handoff_from` and `intent`. It adds provenance for each key and the memory grants.
4. The runtime sends one A2A message. The history rides in the message metadata. The context rides in the metadata and in the platform envelope.
5. The runtime records an `a2a_invocation_envelope` trace event. Its `contextKeys` field lists the keys sent.
6. With `RETURN: true`, the parent waits. When the remote task completes, the runtime restores the parent, shows the remote reply, and applies `ON_RETURN`. `MAP` and `SET` run against the values the remote agent returned.

What the remote agent does not receive:

- Fields that you did not name in `PASS` or `SET`.
- Values the runtime copies automatically between local agents, unless the key is one of `conversationSummary`, `user`, `gender`, or `location`.
- Internal keys that start with an underscore.

Rules that apply:

- The platform checks the target URL before dispatch. An unsafe target fails with the code `remote_target_unsafe`.
- The history leaves your platform as stored. The PII redaction that protects model calls does not apply to history sent to a remote agent. Choose `none` or a small window when messages can hold personal data.
- The remote agent must understand the A2A metadata. It controls what it does with the history and context.
- The compiler does not check `ON_RETURN` `MAP` fields for a remote target, because it cannot see the remote agent. A mapped field that the remote agent does not return is skipped without an error.

## Common variations

### Send no history

Use this when `PASS` and the summary carry everything.

```yaml
HANDOFF:
  - TO: Partner_Fraud_Service
    WHEN: intent.category == "fraud_review" AND transaction_id IS SET
    PASS: [transaction_id]
    SUMMARY: "Customer disputes transaction {{transaction_id}}."
    HISTORY: none
    LOCATION: remote
    ENDPOINT: "https://fraud.partner.example.com/a2a"
    PROTOCOL: a2a
    RETURN: true
```

This is a section snippet. It needs the router `GATHER` field from the minimal example.

### Hand off permanently

Set `RETURN: false` when the remote agent owns the rest of the conversation. The router thread ends when the handoff starts.

### Run the remote agent asynchronously

Set `ASYNC: true` and `TIMEOUT` in seconds when the remote task takes long. The default is 300 seconds. Write the key as `TIMEOUT`. The text parser ignores `ASYNC_TIMEOUT` without a message. The remote agent must advertise push notifications. The platform must have its async infrastructure enabled. If either is missing, the handoff fails. The runtime does not fall back to a synchronous call.

```yaml
    ASYNC: true
    TIMEOUT: 3600
    RETURN: true
```

This is an illustrative fragment. Add these lines to the remote route. The runtime caps `TIMEOUT` at a platform maximum.

### Map values from the remote reply

A remote agent can return named values. It sends an A2A `data` part that holds a `returnValues` object, in the reply message, the task status message, or a task artifact. `MAP` reads the keys of that object. The key is the left side of the entry.

```yaml
HANDOFF:
  - TO: Partner_Fraud_Service
    WHEN: intent.category == "fraud_review" AND transaction_id IS SET
    PASS: [transaction_id]
    SUMMARY: "Customer disputes transaction {{transaction_id}}."
    HISTORY: none
    LOCATION: remote
    ENDPOINT: "https://fraud.partner.example.com/a2a"
    PROTOCOL: a2a
    RETURN: true
    ON_RETURN:
      action: continue
      MAP:
        verdict: fraud_verdict
```

This is a section snippet. It needs the router `GATHER` field from the minimal example and a `fraud_verdict` field in the router `MEMORY` section.

The partner must send a data part like this one. This is the partner's side, shown for reference.

```json
{ "kind": "data", "data": { "returnValues": { "verdict": "confirmed_fraud" } } }
```

Rules that apply:

- A `SET` entry in `ON_RETURN` can read the same values as `result.verdict`.
- A `returnValues` key that your `MAP` does not name is ignored.
- A reply with text only fills no mapped field. The parent still resumes.
- Agree on the key names with the partner. The platform cannot validate them at compile time.

### Share a stored value with the remote agent

A grant adds the path and its access level to the envelope. See [Grant another agent access to memory](/agent-platform/abl/how-to/grant-memory-access-to-agent). Grant only what the partner needs.

## Verification

1. Run the validator. Expect no errors and no warnings.
2. Send a fraud report and give the transaction ID.
3. Expect a `handoff` trace event to `Partner_Fraud_Service`.
4. Expect an `a2a_mode_resolved` event. Check the `mode` and the `reason`.
5. Expect an `a2a_invocation_envelope` event. `contextKeys` must list `transaction_id` and the summary key, plus `handoff_from` and `intent`. It must not list fields you did not authorize.
6. Check the partner's logs. The partner must receive the last four messages and no more.
7. Make the endpoint unreachable. Expect the reply from `ON_FAILURE`.

## Production readiness checklist

- The partner endpoint uses HTTPS and is registered with credentials.
- A data-sharing agreement covers the history and context you send.
- Each route sets `HISTORY` on purpose. Routes that can carry personal data use `none` or a small window.
- Each `PASS` list holds only what the partner needs.
- `ON_FAILURE` gives the customer a next step.
- Tests cover success, an unreachable partner, a slow partner, and a partner that rejects the task.
- Trace checks confirm `contextKeys` on every remote handoff.
- The team knows how the partner uses and stores the data.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Leaving `HISTORY` unset on a remote route | The default is `full`. | Set `HISTORY`. |
| Using `DELEGATE` for a remote agent | A delegate looks like a call to a service. | Use `HANDOFF`. |
| Expecting `MAP` to fill parent variables from a text-only remote reply | The remote agent returns no `returnValues` data part. | Agree on a `returnValues` object with the partner. |
| Expecting the remote agent to fill `GATHER` fields | A local target does. | Send values in the summary and context. The partner decides how to use them. |
| Setting `ASYNC: true` for a partner without push notifications | The flag looks harmless. | Confirm the partner capabilities first. |
| Writing `ASYNC_TIMEOUT` | Some references list that name. | Write `TIMEOUT`. The wait stays at the 300-second default otherwise. |
| Putting personal data in `SUMMARY` | The text leaves your platform. | Name the case, not the person. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| The partner asks for data you passed | The partner ignores the metadata, or the field is not in `contextKeys`. | The `a2a_invocation_envelope` event and the partner's A2A handling. |
| The handoff fails with `remote_target_unsafe` | The endpoint failed the safety check. | The endpoint URL. |
| The handoff fails with an authorization error | The external agent registration lacks valid credentials. | The registration and the credential type. |
| The handoff fails before the call with an async message | `ASYNC: true` needs async infrastructure and push notifications. | `a2a_mode_resolution_failed` and the partner agent card. |
| The partner receives more history than expected | The route uses `full` or has no `HISTORY`. | The `HISTORY` line. |
| `MAP` values never appear | The remote reply has no `returnValues` data part, or the key names differ from your `MAP`. | The reply payload and the `mappedFields` list in `handoff_return_handler`. |

{{related}}

- [Pass specific fields between agents](/agent-platform/abl/how-to/pass-fields-between-agents)
- [Pass full, recent, or no conversation history](/agent-platform/abl/how-to/choose-handoff-history-scope)
- [Minimize context for privacy and compliance](/agent-platform/abl/how-to/minimize-agent-context)
- [Grant another agent access to memory](/agent-platform/abl/how-to/grant-memory-access-to-agent)
- [Transfer control permanently to another agent](/agent-platform/abl/how-to/terminal-agent-handoff)
- [Debug missing or incorrect context after handoff](/agent-platform/abl/how-to/debug-handoff-context)
