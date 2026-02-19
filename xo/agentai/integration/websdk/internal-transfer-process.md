# Internal Transfers – SDK Integration Guide

This document explains how to use the `internalTransfer` method from the Agent AI SDK to handle different types of internal transfers during a conversation in the contact center desktop application.  
It includes **context, rationale, and payload examples** for all scenarios: **Initial Request**, **Cold Transfers**, **Warm Transfers**, and **Redial Scenarios**.

## When to trigger

* For all types of **entry** events, such as cold, warm, or no-transfer scenarios, the `internalTransfer` method should be invoked when the SDK emits the **ON_SOCKET_CONNECTION** event.
* The desktop application must listen for this event and call the method with the appropriate data.
* For exit events, the desktop can directly invoke the `internalTransfer` method when an agent leaves the conversation.

**Example:**
```
chatWindowInstance.on('ON_SOCKET_CONNECTION', (data) => {
  const transferData = {
    "transfertype": "NA",
    "transition": "entry",
    "participant": {
      "identity": "agentId1",
      "name": "AgentName1",
      "type": "agent"
    }
  };
  aaWindowInstance.internalTransfer(transferData);
});
```

## Background and Context

In a typical contact center environment:  

* A customer conversation is first handled by one agent.  
* Depending on the nature of the issue, the conversation may be **transferred internally** to another agent or may involve multiple agents at once.  
* Sometimes, a conversation session can **drop abruptly** and later reconnect to the same conversation (redial scenario).  

The Agent AI SDK must always be aware of:

* Who currently handles the conversation
* When an agent joins or leaves a conversation
* Special events like redials, so that it can:
    * Maintain **context** of the conversation across transfers
    * Provide **relevant suggestions** to the active agent
    * Ensure analytics and reporting remain accurate

All these transitions are communicated to the SDK via:

You must send an event whenever:

* An agent joins or leaves a conversation
* A transfer occurs (cold or warm)
* A redial event reconnects the conversation

## Types of Transfers

The SDK recognizes the following transfer types:

* **Initial Request (No Transfer)**: The first agent accepts the conversation.
* **Cold Transfer**: Conversation moves entirely from one agent to another—only one agent is active at a time.
* **Warm Transfer**: A new agent joins while others remain in the conversation—multiple agents may be active.
* **Redial Scenario**: If an ongoing conversation ends abruptly (for example, due to a network issue) but reconnects later to the **same conversation**, we must notify the SDK that the same agent rejoined.

!!! note

    The **conversation ID remains constant** throughout all these events to ensure continuity in Agent AI’s context.

## Sending Transfer Events

Use the following method to notify the SDK of transfer-related events:

Where `data` should include:

* `Transfertype`: type of transfer
* `Transition`: whether the agent is entering or exiting
* `Participant`: details of the agent involved

## Field Reference Table

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Example Value</strong>
   </td>
  </tr>
  <tr>
   <td><code>transfertype</code>
   </td>
   <td>String
   </td>
   <td>Type of transfer:
<p>
• <code>"NA"</code> – for first entry and final exit
<p>
• <code>"cold"</code> – for cold transfers
<p>
• <code>"warm"</code> – for warm transfers
<p>
• <code>"redial"</code> – for reconnecting to the same conversation after an abrupt end
   </td>
   <td><code>"NA"</code> / <code>"cold"</code> / <code>"warm"</code> / <code>"redial"</code>
   </td>
  </tr>
  <tr>
   <td><code>transition</code>
   </td>
   <td>String
   </td>
   <td>Action:
<p>
• <code>"entry"</code> – when an agent joins
<p>
• <code>"exit"</code> – when an agent leaves
   </td>
   <td><code>"entry"</code> / <code>"exit"</code>
   </td>
  </tr>
  <tr>
   <td><code>participant</code>
   </td>
   <td>Object
   </td>
   <td>Information about the agent involved in the event
   </td>
   <td><code>{...}</code>
   </td>
  </tr>
  <tr>
   <td><code>participant.identity</code>
   </td>
   <td>String
   </td>
   <td>Unique ID of the agent
   </td>
   <td><code>"agentId1"</code>
   </td>
  </tr>
  <tr>
   <td><code>participant.name</code>
   </td>
   <td>String
   </td>
   <td>Agent’s display name
   </td>
   <td><code>"AgentName1"</code>
   </td>
  </tr>
  <tr>
   <td><code>participant.type</code>
   </td>
   <td>String
   </td>
   <td>Type of participant (always <code>"agent"</code> in these scenarios)
   </td>
   <td><code>"agent"</code>
   </td>
  </tr>
</table>

## Detailed Scenarios

Here are the scenarios in detail, with their purpose and sample payloads:

### Initial Request (No Transfer)

When the customer connects with the first agent, we do not know whether a transfer will occur later.  
To establish the conversation in the SDK, we must send an **initial entry event**.
```
const data = {
  "transfertype": "NA",
  "transition": "entry",
  "participant": {
    "identity": "agentId1",
    "name": "AgentName1",
    "type": "agent"
  }
}
aaWindowInstance.internalTransfer(data);
```
**Explanation**:

* `transfertype: "NA"` → no transfer yet
* `transition: "entry"` → agent has entered the conversation

### Cold Transfer

This occurs when the conversation is **moved completely** from one agent to another.  
At any time, only **one agent** is in the conversation.

#### **New Agent Joins**

```
const data = {
  "transfertype": "cold",
  "transition": "entry",
  "participant": {
    "identity": "agentId2",
    "name": "AgentName2",
    "type": "agent"
  }
}
aaWindowInstance.internalTransfer(data);
```

#### Previous Agent Leaves

```
const data = {
  "transfertype": "cold",
  "transition": "exit",
  "participant": {
    "identity": "agentId1",
    "name": "AgentName1",
    "type": "agent"
  }
}
aaWindowInstance.internalTransfer(data);
```
Repeat the same pattern if there are more transfers.

### Warm Transfer

This occurs when **one or more additional agents join** while others remain in the conversation.  
Multiple agents can be active at once.

#### Agent Joins

```
const data = {
  "transfertype": "warm",
  "transition": "entry",
  "participant": {
    "identity": "agentId2",
    "name": "AgentName2",
    "type": "agent"
  }
}
aaWindowInstance.internalTransfer(data);
```

#### Agent Leaves (Not the Last Agent)

```
const data = {
  "transfertype": "warm",
  "transition": "exit",
  "participant": {
    "identity": "agentId2",
    "name": "AgentName2",
    "type": "agent"
  }
}
aaWindowInstance.internalTransfer(data);
```

#### Final Agent Leaves at End of Conversation

```
const data = {
  "transfertype": "NA",
  "transition": "exit",
  "participant": {
    "identity": "agentId1",
    "name": "AgentName1",
    "type": "agent"
  }
}
aaWindowInstance.internalTransfer(data);
```

### Redial Scenario

Sometimes a conversation session ends abruptly due to technical issues (like network drop), but later **reconnects to the same ongoing conversation**.  
In this case, the desktop needs to inform the SDK that it is **rejoining the same conversation** to avoid creating new segments.

Payload for Redial Entry:
```
const data = {
  "transfertype": "redial",
  "transition": "entry",
  "participant": {
    "identity": "<agent identity>",
    "name": "<agent name>",
    "type": "agent"
  }
}
aaWindowInstance.internalTransfer(data);
```
**Key Points**:

* This prevents creating multiple redundant segments for the same conversation.
* The redial event lets the SDK understand that this is a continuation of the previous session.

## Conversation Flow Examples

### Cold Transfer Flow

In this scenario, Agent 1 accepts the call and redirects it to Agent 2 and later Agent 3 gets the call.

* Customer connects to **Agent 1** → `NA` + `entry  
`
* Agent 1 exits the conversation
    * Agent 1 → `cold` + `exit`
* Accepted by **Agent 2**
    * Agent 2 → `cold` + `entry`
* Agent 2 exits the conversation
    * Agent 2 → `cold` + `exit`
* Accepted by **Agent 3**
    * Agent 3 → `cold` + `entry`
* Conversation ends → Last agent → NA + exit

### Warm Transfer Flow

* Customer connects to **Agent 1** → `NA` + `entry`
* **Agent 1 invites Agent 2 as a consultant**
* **Agent 2 joins** → `warm` + `entry`
* **Agent 1 invites Agent 3 as a consultant**
* **Agent 3 joins** → `warm` + `entry`
* **Agent 2 leaves** → `warm` + `exit`
* **Agent 3 leaves** → `warm` + `exit`
* Conversation ends → **Agent 1 exits** → `NA` + `exit`

### **Redial Scenario**

* Customer connects to **Agent 1** → `NA` + `entry`

1. Conversation drops unexpectedly
    * Agent reconnects to the same conversation → `redial` + `entry`
2. Conversation continues without creating a new segment
    * Conversation ends → **Agent 1 exits** → `NA` + `exit`

## Key Takeaways

* Always send the correct transfer events when agents join or leave.
* Keep the **conversation ID consistent** for the whole conversation.
* Use:
    * `NA` for the **first agent entry** and **last agent exit**
    * `cold` for **Conversation handovers**
    * `warm` for **multi-agent participation**
    * `redial` for **reconnections to the same conversation** after an abrupt end.
* This ensures the Agent AI SDK accurately tracks the conversation lifecycle and delivers relevant context to active agents.

!!! notes

    * In Internal Warm Transfer, Agent AI Welcome Event (any Dialog) does not trigger in any of the channels (Chat, Voice, Email).
    * In Warm Transfer, only the first agent must perform the dialog tasks one at a time. In the conversation, the other agent should behave passively.