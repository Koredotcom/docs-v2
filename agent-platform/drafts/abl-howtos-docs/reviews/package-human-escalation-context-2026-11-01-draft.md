# How to package context for human escalation

Use this pattern when an agent hands a conversation to a person and the person must start with the right details, queue, and priority.

## Concept

An `ESCALATE` block does two jobs. It decides when to escalate, and it decides what the person receives. [Escalate to a human agent](/agent-platform/abl/how-to/escalate-to-human) covers the first job. This guide covers the second.

The platform builds the package from five sources. Each source reaches a different place, so check the destination before you rely on a field.

| Source | Where it goes |
| ------ | ------------- |
| Trigger `REASON` and `PRIORITY` | The escalation task and the transfer to the human-agent desk. |
| `context_for_human` | The escalation task, the `escalation` trace event, and the `CONNECTOR_ACTION` input. It does not go to the desk. |
| Conversation history | The desk. The platform sends it with every desk transfer. |
| `routing.metadata` | The desk, as key-value pairs. |
| `routing.user_info` | SmartAssist desks only, as display context. |

The platform also sends the contact card and caller identity without any setting. See [What the desk receives automatically](#what-the-desk-receives-automatically). Every escalation also creates a task in the project's human task inbox, due 24 hours after creation.

Escalation reaches a person only when two things are true:

- The project has a human-agent connection.
- The `ESCALATE` block has a `routing` block with `connection`, `queue`, or `skills`.

Without both, the platform records the task and flags the session as escalated. It does not connect a person. See [Troubleshooting](#troubleshooting).

## Minimal working example

This agent escalates disputes above $500. It sends the case details to the billing queue.

Project-local assumptions: the project has a human-agent connection named `support_desk`, and the desk has a queue named `billing_disputes`.

```abl
AGENT: Billing_Dispute_Agent
GOAL: "Resolve billing disputes and hand disputes above the agent limit to a billing specialist"

MEMORY:
  session:
    - dispute_amount
      TYPE: number
      DESCRIPTION: "Disputed amount in dollars. Collected by this agent."
    - case_id
      TYPE: string
      DESCRIPTION: "Dispute case reference. Collected by this agent."

GATHER:
  dispute_amount:
    prompt: "How much are you disputing?"
    type: number
    required: true
  case_id:
    prompt: "What is your case reference?"
    type: string
    required: true

ESCALATE:
  triggers:
    - WHEN: dispute_amount > 500
      REASON: "Dispute above the agent limit needs a billing specialist"
      PRIORITY: high
      TAGS: [billing, dispute]

  context_for_human:
    - case_id
    - dispute_amount

  routing:
    connection: support_desk
    queue: "billing_disputes"
    skills: [billing]
    priority: 1
    post_agent: return
    metadata:
      case_id: "{{case_id}}"
      dispute_amount: "{{dispute_amount}}"

COMPLETE:
  - WHEN: case_id IS SET AND dispute_amount <= 500
    RESPOND: "I can resolve dispute {{case_id}} for you."
```

The agent collects `dispute_amount` and `case_id` with `GATHER`. The trigger fires when `dispute_amount` exceeds 500. The desk receives the reason, the priority, the queue, the skills, the conversation, and the case values in `metadata`.

## How it works

### Reason and priority

The reason is the `REASON` text of the trigger that fired. If the model starts the escalation, the model writes the reason. The reason must contain 5 to 500 characters. The platform shortens a longer reason to 500 characters and rejects a shorter one with `INVALID_ESCALATION_REASON`.

Priority is `low`, `medium`, `high`, or `critical`. A trigger can also use a number. The platform maps 0 or less to `critical`, 1 to `high`, 2 to `medium`, and 3 or more to `low`. An omitted priority becomes `medium`. A word outside the list in a trigger produces the warning `W351` and becomes `medium`.

The platform adds `reason` and `priority` to the metadata of every desk transfer. You cannot override these two keys in `routing.metadata`.

`routing.priority` is a separate number. It sets the priority of the queue entry at the desk.

### Context for the human

`context_for_human` lists session variable names. At escalation time, the platform copies the current value of each listed variable. It stores the copy in the escalation task, in the `escalation` trace event, and in the input of the `CONNECTOR_ACTION` call.

The list does not go to the desk transfer. To put a value in front of the person at the desk, add it to `routing.metadata` or, for SmartAssist, `routing.user_info`.

Keep these rules in mind:

- Each item is a variable name. An item written as `key: value` or `NAME: ...` produces the warning `W357`. The platform still treats the text as a variable name, so the value is missing.
- The names `conversation_history` and `conversation_summary` have no special meaning. They are ordinary variable names. List them only if your agent stores a variable with that name.
- A listed variable that has no value produces an `escalation_context_missing` trace event with the field names.
- An empty list sends only the agent name and the number of conversation turns.

### Conversation history

The platform sends the session conversation history with every desk transfer. You do not configure it in `ESCALATE`. It contains the customer, assistant, and system messages. It leaves out messages that the platform marks as internal. Each desk integration decides how to display it.

### What the desk receives automatically

The platform builds a contact card and a context snapshot from the session. You set nothing for these.

| Item | Source |
| ---- | ------ |
| Contact name, email, phone, customer ID | Caller context first, then the session variables `first_name`, `last_name`, `name`, `email`, `phone`, and `customer_id`. |
| Identity details | Customer ID, anonymous ID, identity tier, and verification method from the caller context. |
| Interaction details | Language, locale, and time zone of the interaction. |
| Session details | Channel, session ID, tenant ID, project ID, and session start time. |

Name your session variables `email`, `phone`, `first_name`, `last_name`, and `customer_id` when you want them on the contact card.

### Routing the package

| `routing` key | What it does |
| ------------- | ------------ |
| `connection` | Names the human-agent connection. Use the connector name or the connection ID. |
| `queue` | Names the target queue. A `{{variable}}` in the value resolves from the session. |
| `skills` | Lists the skills the person needs. |
| `priority` | Sets the numeric queue priority. |
| `post_agent` | Sets what happens when the person finishes: `return` or `end`. See [Resume after a child agent or human agent completes](/agent-platform/abl/how-to/resume-after-child-or-human-agent). |
| `metadata` | Sends key-value pairs to the desk. A `{{variable}}` resolves from the session when the escalation starts. |

A queue or metadata variable that resolves to nothing sends no value. The platform never sends the literal `{{...}}` text.

Some desks accept more keys, such as `named_agents`, `agent_matching_conditions`, `sub_type`, and `provider_config`. The receiving integration defines these. See the [ESCALATE reference](/agent-platform/abl/reference/multi-agent-and-supervisor#escalate).

### Masking and PII

The package carries values in three forms. Treat each form differently.

| Path | What the platform does with a PII value |
| ---- | --------------------------------------- |
| `context_for_human` | Copies the value as the session stores it. A value that the platform stored as a PII token stays a token. |
| `routing.metadata` | Forwards the value as the session stores it, including a token. |
| `routing.user_info` | Sends `[protected]` instead of a value that contains a token. |

With PII redaction on, the platform stores values that it recognizes as PII, and fields marked `sensitive: true`, as vault tokens. The default is on in staging and production. If the person needs to read a value, have the CRM tool return a masked value and store that. The compiler warns with `ESCALATE_ROUTING_USER_INFO_SENSITIVE_REFERENCE` when a `user_info` template reads a sensitive field.

Pass only the fields the person needs. The `escalation` trace event includes the context fields.

## Common variations

### Choose the desk by channel

Use a list under `routing` to send each channel to its own desk. The platform checks the entries in order and uses the first match. Write conditions with fields the platform can evaluate in code, such as `system.channel`. Free text is a compile error.

```abl
AGENT: Support_Dispute_Agent
GOAL: "Resolve billing disputes and route escalations by channel"

MEMORY:
  session:
    - dispute_amount
      TYPE: number
      DESCRIPTION: "Disputed amount in dollars. Collected by this agent."
    - case_id
      TYPE: string
      DESCRIPTION: "Dispute case reference. Collected by this agent."

GATHER:
  dispute_amount:
    prompt: "How much are you disputing?"
    type: number
    required: true
  case_id:
    prompt: "What is your case reference?"
    type: string
    required: true

ESCALATE:
  triggers:
    - WHEN: dispute_amount > 500
      REASON: "Dispute above the agent limit needs a billing specialist"
      PRIORITY: high

  context_for_human:
    - case_id
    - dispute_amount

  routing:
    - id: whatsapp_desk
      WHEN: system.channel == "whatsapp"
      connection: whatsapp_desk
      queue: "billing_whatsapp"
      metadata:
        case_id: "{{case_id}}"
    - id: default_desk
      WHEN: always
      connection: support_desk
      queue: "billing_disputes"
      skills: [billing]
      metadata:
        case_id: "{{case_id}}"

COMPLETE:
  - WHEN: case_id IS SET AND dispute_amount <= 500
    RESPOND: "I can resolve dispute {{case_id}} for you."
```

Add one trailing entry with `WHEN: always`. If no entry matches, the platform makes no desk transfer. It does not fall back to the project default connection for a list. The escalation task still exists. Only one default entry is allowed, and it must come last.

### Send display context to a SmartAssist desk

Add `user_info` to a SmartAssist connection. The platform sends the values as display context for the person. Set `user_info_in_custom_data: true` to copy them into `customData.userInfo` for flow routing.

```abl
AGENT: Claims_Agent
GOAL: "Handle claim questions and pass display context to a SmartAssist agent"

MEMORY:
  session:
    - claim_id
      TYPE: string
      DESCRIPTION: "Claim reference. Collected by this agent."
    - claim_segment
      TYPE: string
      DESCRIPTION: "Customer segment. Collected by this agent."

GATHER:
  claim_id:
    prompt: "What is your claim reference?"
    type: string
    required: true
  claim_segment:
    prompt: "Is this a standard or a priority claim?"
    type: string
    required: true

ESCALATE:
  triggers:
    - WHEN: claim_segment == "priority"
      REASON: "Priority claim customer needs a claims specialist"
      PRIORITY: high

  context_for_human:
    - claim_id
    - claim_segment

  routing:
    connection: smartassist
    queue: "claims"
    user_info:
      claim: "{{claim_id}}"
      segment: "{{claim_segment}}"
    user_info_in_custom_data: true
    metadata:
      claim_id: "{{claim_id}}"

COMPLETE:
  - WHEN: claim_id IS SET AND claim_segment != "priority"
    RESPOND: "I can help with claim {{claim_id}}."
```

The platform limits the package. It keeps at most 30 `user_info` keys. A key holds up to 64 bytes and a value up to 384 bytes. The whole package stays below 16 KB. The platform drops a value that is empty, unresolved, reserved, or not a scalar. It records only key names and reasons in the `handoff_context_keys_dropped` trace event, never values.

The platform stamps the package with `customData.artemis`. This stamp holds the session ID, agent name, channel, whether the identity is verified, the identity source, and an update time. Treat the values as a snapshot from the moment of escalation.

### Escalate from a flow step

A flow step that ends in `THEN: ESCALATE` runs the same escalation. The step has no trigger. The platform uses the default reason `Escalated via flow step transition` and the priority `medium` when the step carries none.

```abl
AGENT: Fraud_Review_Agent
GOAL: "Collect fraud details and hand confirmed fraud cases to a person"

MEMORY:
  session:
    - fraud_case_id
      TYPE: string
      DESCRIPTION: "Fraud case reference. Collected by this agent."
    - fraud_confirmed
      TYPE: boolean
      DESCRIPTION: "Whether the customer confirms the activity is fraud."

FLOW:
  entry_point: collect

  steps:
    - collect
    - decide
    - not_fraud

  collect:
    REASONING: false
    RESPOND: "I can help with that. I need two details."
    GATHER:
      fraud_case_id:
        prompt: "What is your fraud case reference?"
        type: string
        required: true
      fraud_confirmed:
        prompt: "Do you confirm the activity is fraud?"
        type: boolean
        required: true
    THEN: decide

  decide:
    REASONING: false
    ON_RESULT:
      - IF: fraud_confirmed == true
        THEN: ESCALATE
      - ELSE:
        THEN: not_fraud

  not_fraud:
    REASONING: false
    RESPOND: "Thanks. I recorded case {{fraud_case_id}} as not fraud."
    THEN: COMPLETE

ESCALATE:
  context_for_human:
    - fraud_case_id
    - fraud_confirmed

  routing:
    connection: support_desk
    queue: "fraud"
    skills: [fraud]
    metadata:
      fraud_case_id: "{{fraud_case_id}}"
```

An agent that reaches a flow `ESCALATE` step without an `ESCALATE` block only sets the escalated flag. It reaches no one.

### Let the model start the escalation

A trigger `WHEN` can be a quoted sentence. The model then decides when the sentence is true and calls the escalation tool with a reason and a priority. The model tool exists only when the block has at least one trigger.

```abl
AGENT: Policy_Agent
GOAL: "Answer policy questions and escalate when the customer asks for a person"

MEMORY:
  session:
    - policy_id
      TYPE: string
      DESCRIPTION: "Policy number. Collected by this agent."

GATHER:
  policy_id:
    prompt: "What is your policy number?"
    type: string
    required: false

ESCALATE:
  triggers:
    - WHEN: "the customer asks to speak with a person"
      REASON: "Customer requested a person"
      PRIORITY: medium

  context_for_human:
    - policy_id

  routing:
    connection: support_desk
    queue: "policy_service"
    skills: [policy]
    metadata:
      policy_id: "{{policy_id}}"
```

The model can pass only `reason` and `priority`. If other triggers use conditions the platform can evaluate in code, the platform rejects a model-started escalation when none of those triggers matched. The trace shows `ESCALATION_TRIGGER_NOT_MATCHED`.

### Open a ticket in an ITSM system

`CONNECTOR_ACTION` calls a connector action when the escalation starts. The call receives the context fields, the reason, the priority, the session ID, and the agent name. The platform stores the returned ticket ID and URL on the escalation task.

```abl
AGENT: Incident_Agent
GOAL: "Collect incident details and hand urgent incidents to a person"

MEMORY:
  session:
    - incident_id
      TYPE: string
      DESCRIPTION: "Incident reference. Collected by this agent."

GATHER:
  incident_id:
    prompt: "What is the incident reference?"
    type: string
    required: true

ESCALATE:
  triggers:
    - WHEN: incident_id IS SET
      REASON: "Urgent incident needs a person"
      PRIORITY: critical

  context_for_human:
    - incident_id

  routing:
    connection: support_desk
    queue: "incidents"

  CONNECTOR_ACTION: create_servicenow_incident
```

Project-local assumption: the project has a connector action named `create_servicenow_incident`. The call runs in the background with a 30 second limit. A failure is logged and does not stop the escalation.

### Voice calls

A voice escalation moves the call itself. It needs `routing.voice.call_transfer_type` set to `sip` or `pstn`. Without it, the escalation fails with `ESCALATION_VOICE_NOT_CONFIGURED` and the caller stays with the agent. Voice transfer settings are in the [ESCALATE reference](/agent-platform/abl/reference/multi-agent-and-supervisor#voice-transfer-settings).

## Verification

1. Validate the project. Check that no `W357`, `W351`, or `ESCALATE_ROUTING_*` warnings remain.
2. Start a test conversation. Send a message that makes the trigger true, such as a dispute of 800 dollars.
3. Open the session trace. Find the `escalation` event. Check the reason, the priority, and the context fields.
4. Find the `escalation_triggered` event. The field `hasAgentTransfer` shows that routing is configured. It does not prove that a transfer started.
5. Find the `agent_transfer_initiated` event. Check that `success` is `true`. If the event is missing, no transfer started.
6. At the desk, open the conversation. Check the queue, the priority, the history, the contact card, and the metadata keys.
7. For a routing list, repeat the test once for each channel. Find the `escalation_routing_check` events and check which entry matched.
8. For a SmartAssist desk, find the `handoff_context_keys_dropped` and `handoff_context_pii_suspected` events. Check that no expected key is dropped and no key holds personal data.
9. Rename the connection in a test project. Check that the task exists, that no `agent_transfer_initiated` event appears, and that later replies start with `[HUMAN AGENT]`. This shows you the failure path.

## Production readiness checklist

- The project has a human-agent connection, and each `connection` and `queue` in `ESCALATE` exists at the desk.
- Every variable in `context_for_human` and `routing.metadata` has a source: a `GATHER` field, a tool result, or a `SET` assignment.
- A routing list ends with a `WHEN: always` entry.
- The desk shows the history, the reason, and the priority for a test escalation on every channel you support.
- The `context_for_human` list holds no value the person does not need. The list does not reach the desk, but it reaches the task record, the trace, and the connector action.
- You know the failure paths. If the desk rejects the transfer, the customer gets the error message and the agent keeps the conversation. If no connection resolves, the escalation still succeeds without a transfer.
- You tested the case with no available person. Your desk defines the wait behavior with a flow policy.
- Monitoring watches for `escalation_rejected`, `escalation_routing_no_match`, `escalation_context_missing`, and transfer failure events.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Listing a field in `context_for_human` and expecting it on the desk screen. | The list sounds like the desk payload. | Copy the field into `routing.metadata`. Use `user_info` for SmartAssist. |
| Adding `conversation_history` to `context_for_human`. | The name looks like a built-in. | Remove it. The platform sends history with every desk transfer. |
| Writing `NAME`, `TEMPLATE`, or `INCLUDE` items. | Some docs show a structured item. | Write plain variable names. Build combined text in `routing.metadata`. |
| Writing `ON_FAILURE: ESCALATE` on a handoff and expecting a person. | The word matches the `ESCALATE` block. | Add an `ESCALATE` block and trigger it. The failure setting only flags the session. |
| Writing `ESCALATE` with no `routing` block. | The block compiles without it. | Add `routing` with `connection`, `queue`, or `skills`. |
| Passing a sensitive value in `metadata`. | The platform forwards `metadata` as stored. | Pass a masked value that your tool returns. |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| Replies start with `[HUMAN AGENT] Message received`. | The session is flagged as escalated, and no live transfer exists. | Look for the `agent_transfer_initiated` event. Add a `routing` block and a project connection. |
| The customer saw the escalation message, but no person joined. | The connection name did not resolve, the connector has no valid credentials, or the transfer service was unavailable. | Check the `connection` name against the connection list. Check the connector credentials. |
| The model tool call fails with `INVALID_ESCALATION_REASON`. | The model wrote a reason shorter than 5 characters. | Give the model a clear `REASON` in the trigger. |
| `INVALID_ESCALATION_PRIORITY` appears. | The model passed a priority outside the list. | Use `low`, `medium`, `high`, or `critical`. |
| `escalation_context_missing` lists fields. | A listed variable has no value yet. | Gather the variable before the trigger fires. |
| The desk shows `{{...}}` text or no value. | The variable had no value when the escalation started. | Check the variable source and the order of events. |
| The desk shows no `user_info` values. | The connection is not SmartAssist, or all keys were dropped. | Check the connection type and the `handoff_context_keys_dropped` event. |
| `ESCALATION_TRIGGER_NOT_MATCHED` appears. | The model started an escalation, but your code triggers did not match. | Fix the trigger conditions, or add a quoted-sentence trigger. |
| Routing falls to no desk on one channel. | A routing list has no matching entry and no default. | Add a final `WHEN: always` entry. Check `escalation_routing_no_match`. |
| `ESCALATION_ALREADY_IN_PROGRESS` appears. | A transfer is already active for the session. | Wait for the first transfer to finish. |

## Related HowTos

- [Escalate to a human agent](/agent-platform/abl/how-to/escalate-to-human)
- [Resume after a child agent or human agent completes](/agent-platform/abl/how-to/resume-after-child-or-human-agent)
- [Define clear responsibilities for each enterprise agent](/agent-platform/abl/how-to/define-agent-responsibilities)
- [Debug routing traces](/agent-platform/abl/how-to/debug-routing-traces)
