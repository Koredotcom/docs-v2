--8<-- "includes/agentai-api-back-link.md"

# Hooks API for Internal Transfers

This API supports internal transfer events, reducing reliance on UI socket events. It captures transfer data initiated outside the UI, sends via API payloads, and displays in the Agent AI widget.

| Method         | POST |
|-------------------|-----------|
| Endpoint       | `https://{{host}}/agentassist/api/v1/hooks/{{botId}}` |
| Content Type   | `application/json` |
| Authorization  | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token){:target="_blank"} |

## Path Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>host</code>
   </td>
   <td>Yes
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>.
   </td>
  </tr>
  <tr>
   <td><code>botId</code>
   </td>
   <td>Yes
   </td>
   <td>Unique identifier of the bot.
   </td>
  </tr>
</table>

## Header Parameters

<table>
  <tr>
   <td><strong>Header</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>Content-Type</code>
   </td>
   <td>String
   </td>
   <td>Yes
   </td>
   <td>Indicates the media type of the request body. Set to <code>application/json</code>.
   </td>
  </tr>
  <tr>
   <td><code>token</code>
   </td>
   <td>String
   </td>
   <td>Yes
   </td>
   <td>Authentication token used to authorize the request.
   </td>
  </tr>
</table>

## Sample Request

```
curl --location 'https://platform.kore.ai///agentassist/api/v1/hooks/st-XXXX-XXXX-XXXX-XXXX' \
--header 'Content-Type: application/json' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLTYzNjNmY2JiLTMxMGUtNWIwNy05MWE5LWM2MTRjZDNjYmY2ZSJ9.H-JGmnWDBm2mFIw_PoMLQ5WLTPT_9-iFFPTLrHxxxxx' \
--data '{
   "conversationId": "c-xxxx",
   "botId": "st-XXXX-XXXX-XXXX-XXXX",
   "events": [
       {
           "name": "INTERNAL_TRANSFER_EVENT",
           "transfertype": "NA",
           "transition": "entry",
           "isExtAD": "true",
           "language": "language",
           "experience": "chat",
           "participant": {
               "identity": "xxxxxx",
               "name": "Agent ai",
               "type": "agent"
           }
       }
   ]
}'
```

## Request Body Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>conversationId</code>
   </td>
   <td>String
   </td>
   <td>Yes
   </td>
   <td>Unique identifier of the conversation.
   </td>
  </tr>
  <tr>
   <td><code>botId</code>
   </td>
   <td>String
   </td>
   <td>Yes
   </td>
   <td>Identifier of the bot associated with the event.
   </td>
  </tr>
  <tr>
   <td><code>events</code>
   </td>
   <td>Array of Objects
   </td>
   <td>Yes
   </td>
   <td>List of event objects that describe actions or state transitions.
   </td>
  </tr>
</table>

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>name</code>
   </td>
   <td>String
   </td>
   <td>Yes
   </td>
   <td>Name of the event. Example: <code>INTERNAL_TRANSFER_EVENT</code>.
   </td>
  </tr>
  <tr>
   <td><code>transfertype</code>
   </td>
   <td>String
   </td>
   <td>Yes
   </td>
   <td>Specifies the transfer type.
   </td>
  </tr>
  <tr>
   <td><code>transition</code>
   </td>
   <td>String
   </td>
   <td>Yes
   </td>
   <td>Indicates the event transition (for example, <code>entry</code>).
   </td>
  </tr>
  <tr>
   <td><code>isExtAD</code>
   </td>
   <td>String
   </td>
   <td>Yes
   </td>
   <td>Shows whether the transfer uses an external directory.
   </td>
  </tr>
  <tr>
   <td><code>language</code>
   </td>
   <td>String
   </td>
   <td>No
   </td>
   <td>Language used during the event.
   </td>
  </tr>
  <tr>
   <td><code>experience</code>
   </td>
   <td>String
   </td>
   <td>Yes
   </td>
   <td>Interaction mode. Example: <code>chat</code> or voice
   </td>
  </tr>
</table>

| Parameter                | Type   | Required | Description |
|--------------------------|--------|----------|-------------|
| participant              | Object | Yes      | Provides details about the participant involved in the event. |
| participant.identity     | String | Yes      | Unique identifier of the participant. |
| participant.name         | String | Yes      | Name of the participant. |
| participant.type         | String | Yes      | Type of participant. Example: `agent`. |
| participant.customFields | Object | No       | Required only when using the Kore Quality Module with Agent AI for post-call analysis. Includes the following fields:<br>• `agentEmail`<br>• `queueId`<br>• `queueName` |

## Types of Transfers

The Hooks API supports the following transfer types:

<table>
  <tr>
   <td><strong>Transfer Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>NA Transfer (No Transfer)
   </td>
   <td>The first agent accepts the conversation, or the last agent leaves the conversation.
   </td>
  </tr>
  <tr>
   <td>Cold Transfer
   </td>
   <td>Conversation moves from one agent to another—only one agent is active at a time.
   </td>
  </tr>
  <tr>
   <td>Warm Transfer
   </td>
   <td>A new agent joins while others remain in the conversation—multiple agents may be active.
   </td>
  </tr>
</table>

**Key principle**: The **conversation ID remains the same** throughout all these events to ensure continuity in Agent AI’s context.

### Sending Transfer Events

Use the following JavaScript code to send internal transfer events to the Agent AI backend.

```
async function sendInternalTransferEvent(payload) {
  await axios.post(
	`<baseurl>/agentassist/api/v1/hooks/<botId>`,
	payload,
	{
  	headers: {
    	token: jwt.sign(
      	{
        	appId: <clientId>,
      	},
      	<clientSecret>
    	),
  	},
	}
  );
}
```

Where the `payload` includes:

* `Transfertype`: The type of transfer
* `Transition`: Indicates whether the agent is entering or exiting
* `Participant`: Details of the agent involved

## Detailed Scenarios

Here are the scenarios in detail, with their purpose and sample payloads:

### NA Transfer (No Transfer)

When a customer connects with the first agent, it’s unknown whether a transfer will occur. In this case, the payload includes an **NA** entry event.
```
const payload = {
	conversationId: "atesta-xxxx",
	botId: "st-XXXX-XXXX-XXXX-XXXX",
	events: [
  	{
    	name: "INTERNAL_TRANSFER_EVENT",
    	transfertype: "NA",
    	transition: "entry",
    	isExtAD: true,
    	language: "en",
    	experience: "voice",
    	participant: {
      	identity: "agentId1",
      	name: "AgentName1",
      	type: "agent"
    	}
  	}
	]
  }
sendInternalTransferEvent(payload);
```

**Explanation**:

* `transfertype: "NA"`—No transfer has occurred yet.
* `transition: "entry"`—The agent has entered the conversation.

### Cold Transfer

This occurs when the conversation is **moved** from one agent to another.  
At any given time, only **one agent** is in the conversation.

**New Agent Joins**

```
const payload = {
	conversationId: "atesta-xxxx",
	botId: "st-XXXX-XXXX-XXXX-XXXX",
	events: [
  	{
    	name: "INTERNAL_TRANSFER_EVENT",
    	transfertype: "COLD",
    	transition: "entry",
    	isExtAD: true,
    	language: "en",
    	experience: "voice",
    	participant: {
      	identity: "agentId2",
      	name: "AgentName2",
      	type: "agent"
    	}
  	}
	]
  }
sendInternalTransferEvent(payload);
```

**Previous Agent Leaves**

```
const payload = {
	conversationId: "atesta-xxxx",
	botId: "st-XXXX-XXXX-XXXX-XXXX",
	events: [
  	{
    	name: "INTERNAL_TRANSFER_EVENT",
    	transfertype: "COLD",
    	transition: "exit",
    	isExtAD: true,
    	language: "en",
    	experience: "voice",
    	participant: {
      	identity: "agentId1",
      	name: "AgentName1",
      	type: "agent"
    	}
  	}
	]
  }
sendInternalTransferEvent(payload);
```

Repeat the same pattern if there are more transfers.

### Warm Transfer

This occurs when **one or more additional agents join** the conversation while others remain active.  
Multiple agents can participate and be active at the same time. 

#### Agent Joins

```
const payload = {
	conversationId: "atesta-xxxx",
	botId: "st-XXXX-XXXX-XXXX-XXXX",
	events: [
  	{
    	name: "INTERNAL_TRANSFER_EVENT",
    	transfertype: "WARM",
    	transition: "entry",
    	isExtAD: true,
    	language: "en",
    	experience: "voice",
    	participant: {
      	identity: "agentId3",
      	name: "AgentName3",
      	type: "agent"
    	}
  	}
	]
  }
sendInternalTransferEvent(payload);
```

#### Agent Leaves (Not the Last Agent)

```
const payload = {
	conversationId: "atesta-xxxx",
	botId: "st-XXXX-XXXX-XXXX-XXXX",
	events: [
  	{
    	name: "INTERNAL_TRANSFER_EVENT",
    	transfertype: "WARM",
    	transition: "exit",
    	isExtAD: true,
    	language: "en",
    	experience: "voice",
    	participant: {
      	identity: "agentId2",
      	name: "AgentName2",
      	type: "agent"
    	}
  	}
	]
  }
sendInternalTransferEvent(payload);
```

#### Final Agent Leaves at the End of the Conversation

```
const payload = {
	conversationId: "atesta-xxxx",
	botId: "st-XXXX-XXXX-XXXX-XXXX",
	events: [
  	{
    	name: "INTERNAL_TRANSFER_EVENT",
    	transfertype: "NA",
    	transition: "exit",
    	isExtAD: true,
    	language: "en",
    	experience: "voice",
    	participant: {
      	identity: "agentId3",
      	name: "AgentName3",
      	type: "agent"
    	}
  	}
	]
  }
sendInternalTransferEvent(payload);
```

### Cold Transfer Flow 

In this scenario, Agent-1 accepts the call and redirects it to Agent-2, and later Agent-3 gets the call.

* Customer connects to **Agent-1**—`NA` + `entry`
* Agent-1 exits the conversation
    * Agent 1—`cold` + `exit`
* Agent-2 accepts the conversation
    * Agent 2—`cold` + `entry`
* Agent-2 exits the conversation
    * Agent 2—`cold` + `exit`
* Agent-3 accepts the conversation
    * Agent 3—`cold` + `entry`
* Conversation ends—Last agent—`NA` + `exit`

### Warm Transfer Flow

* Customer connects to **Agent-1**—`NA` + `entry`
* **Agent-1 invites Agent-2 as a consultant**
* **Agent-2 joins**—`warm` + `entry`
* **Agent-1 invites Agent-3 as a consultant**
* **Agent-3 joins**—`warm` + `entry`
* **Agent-2 leaves**—`warm` + `exit`
* **Agent-3 leaves**—`warm` + `exit`
* Conversation ends—**Agent-1 exits**—`NA` + `exit`

Key Takeaways

* Always send the correct transfer events when agents join or leave.
* Maintain a consistent conversation ID throughout the conversation.
* Use:
    * `NA` for the **first agent entry** and **last agent exit**
    * `cold` for **Conversation handovers**
    * `warm` for **multi-agent participation**

## Sample Response

* If the request is successful, you get a `success response (200 OK).` 
* If the botId is incorrect, you get the following response (400 Bad Request):  

```
{
   "code":400,
   "message":"Linked bot details could not be found. Please verify that the botId provided in the request body is correct."
}
```
