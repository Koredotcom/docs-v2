--8<-- "includes/agentai-api-back-link.md"

# Agent AI Webhook API — Conversation Events

Use the Hooks API to send conversation lifecycle events to Agent AI. This API supports:

* Internal transfer events (NA, cold, warm)
* Conversation summary trigger events
* End-of-conversation events
* User/Agent Message propagation 

Send all events to the same endpoint using the appropriate event name and payload structure.

| **Field** | **Value** |
|----------|-----------|
| **Method** | `POST` |
| **Endpoint** | https://{{host}}/agentassist/api/v1/hooks/{{botId}} |
| **Content-Type** | `application/json` |
| **Authorization Header** | `auth: {{JWT}}` <br> See [How to generate the JWT Token](https://docs.kore.ai/xo/apis/automation/api-introduction/#generating-the-jwt-token) |

## Path Parameters

| **Parameter** | **Required** | **Description** |
|--------------|--------------|-----------------|
| host | Yes | The environment URL. For example, `https://platform.kore.ai`. |
| botId | Yes | Unique identifier of the AI Agent (Stream ID). |

## Request Body

```
{

 "conversationId": "string",

 "botId": "string", \
 \
The following fields are mandatory in case of user/agent message events:

"query": "Price is too expensive", 

  "agentId": "xxxxx", 

  "experience": "chat",

  "author": {

    "type": "USER" // AGENT/USER based on message origin

  },

  "source": "genesys",

  "sendUserMessage": true,

  "sendAgentMessage": false,

  "language": "en"

Consider the following field for events such as internal transfer, end of conversation, or trigger summary.

 "events": [ { ... } ]

}
```

| **Field** | **Type** | **Required** | **Description** |
|----------|----------|--------------|-----------------|
| conversationId | String | Yes | Unique identifier of the conversation. Must remain the same throughout the lifecycle. |
| botId | String | Yes | AI Agent (Stream) ID. |
| query | String | Conditional | User or agent message content. Required for user/agent message events. |
| agentId | String | Conditional | Unique identifier of the agent sending or associated with the message. Required for message events. |
| experience | String | Conditional | Interaction type (for example, `chat` or `voice`). Required for message events. |
| author.type | String | Conditional | Indicates the message origin. Use `USER` or `AGENT`. Required for message events. |
| source | String | Conditional | Source platform of the message (for example, `genesys`). Required for message events. |
| sendUserMessage | Boolean | Conditional | Set to `true` to send user messages to Agent AI. |
| sendAgentMessage | Boolean | Conditional | Set to `true` to send agent messages to Agent AI. |
| language | String | Conditional | Language of the message or conversation (for example, `en`). |
| events | Array | Conditional | List of event objects. Required for event-driven scenarios such as internal transfer, summary trigger, or end of conversation. |

## Supported Events

### Internal Transfer Event

Tracks agent join and exit actions, including cold and warm transfers.

#### Event Name

INTERNAL_TRANSFER_EVENT

#### Event Structure

```
{

 "name": "INTERNAL_TRANSFER_EVENT",

 "transfertype": "NA | COLD | WARM",

 "transition": "entry | exit",

 "isExtAD": true,

 "language": "en",

 "experience": "chat | voice",

 "participant": {

   "identity": "string",

   "name": "string",

   "type": "agent",

   "customFields": {

     "agentEmail": "string",

     "queueId": "string",

     "queueName": "string"

   }

 }

}
```

#### Field Description

| **Field** | **Required** | **Description** |
|----------|--------------|-----------------|
| transfertype | Yes | Transfer type: `NA`, `COLD`, or `WARM`. |
| transition | Yes | `entry` when agent joins, `exit` when agent leaves. |
| isExtAD | Yes | Indicates whether an external directory is used. |
| language | No | Conversation language. |
| experience | Yes | Interaction type (`chat` or `voice`). |
| participant | Yes | Agent details. |
| participant.customFields | No | Required only when using the Quality Module for post-call analysis. |

#### Transfer Types

| **Type** | **When to Use** |
|----------|-----------------|
| NA | First agent entry and final agent exit. |
| COLD | One agent replaces another. Only one active agent at a time. |
| WARM | Multiple agents participate simultaneously. |

### Transfer Flow Scenarios

#### Cold Transfer Flow

In this scenario, Agent-1 accepts the call and redirects it to Agent-2, and later Agent-3 gets the call.

* Customer connects to Agent 1 → `NA` + `entry`
* Agent 1 exits the conversation → `cold` + `exit`
* Agent 2 accepts the conversation→ `cold` + `entry`
* Agent 2 exits the conversation → `cold` + `exit`
* Agent 3 accepts the conversation→ `cold` + `entry`
* Conversation ends → Last agent → `NA` + `exit`

#### Warm Transfer Flow

* Customer connects to Agent 1 → `NA` + `entry`
* Agent 1 invites Agent 2 as a consultant
* Agent 2 joins → `warm` + `entry`
* Agent 1 invites Agent 3 as a consultant
* Agent 3 joins → `warm` + `entry`
* Agent 2 leaves → `warm` + `exit`
* Agent 3 leaves → `warm` + `exit`
* Conversation ends → Agent 1 exits → `NA` + `exit`

#### Redial Scenario

* Customer connects to Agent 1 → `NA` + `entry`
    * Conversation drops unexpectedly
* Agent reconnects to the same conversation → `redial` + `entry`
    * Conversation continues without creating a new segment
* Conversation ends → Agent 1 exits → `NA` + `exit`

### Trigger Summary Event

Triggers the generation of a conversation summary.

#### Event Name

TRIGGER_SUMMARY_EVENT

#### Event Structure

```
{

 "name": "TRIGGER_SUMMARY_EVENT",

 "data": {

   "language": "English",

   "locale": "en",

   "type": "post"

 }

}
```

#### Field Description

| **Field** | **Required** | **Description** |
|----------|--------------|-----------------|
| data.language | Yes | Summary language (for example, English). |
| data.locale | Yes | Locale code (for example, en). |
| data.type | Yes | Summary type (for example, `post`). |

### End of Conversation Event

Notifies Agent AI that the conversation has terminated.

#### Event Name

END_OF_CONVERSATION

**Important**: Invoke this event **only once**, at the final termination of the conversation—whether normal or unexpected—to prevent duplicate processing.

#### Event Structure

```
{

 "name": "END_OF_CONVERSATION",

 "reason": "agent_initiated",

 "language": "en",

 "experience": "voice",

 "participant": {

   "identity": "string",

   "name": "string",

   "type": "agent",

   "customFields": {

     "agentEmail": "string",

     "queueId": "string",

     "queueName": "string"

   }

 }

}
```

#### Field Description

| **Field** | **Required** | **Description** |
|----------|--------------|-----------------|
| reason | Yes | Reason for termination (for example, `agent_initiated`). |
| language | Yes | Conversation language. |
| experience | Yes | Interaction type (`chat` or `voice`). |
| participant | Yes | Agent responsible for termination. |
| participant.customFields | No | Optional metadata. |

## Event Payload Examples

### 1. No Transfer – First Agent Accepts (INTERNAL_TRANSFER_EVENT)

This event triggers when the first agent accepts the customer interaction (not a transfer).

**Entry Scenario:** The system triggers this scenario when the Agent AI widget loads with transition as `entry` along with the agent details.

**Exit Scenario:** The system triggers this scenario at the end of the interaction with transition as `exit` along with the agent details.

```
{
    "events": [
        {
            "name": "INTERNAL_TRANSFER_EVENT",
            "transfertype": "NA",
            "transition": "entry",
            "isExtAD": "true",
            "language": "en",
            "experience": "voice",
            "participant": {
                "identity": "Agent1",
                "name": "Agent AI",
                "type": "agent",
                "customFields": {
                    "agentEmail": "TP000037111@xxxxbank.com",
                    "queueId": "1694",
                    "queueName": "Kore_UAT_AGT_EN"
                }
            }
        }
    ]
}
```

### 2. Cold Transfer – New Agent Joins (INTERNAL_TRANSFER_EVENT)

The system triggers this scenario when the internal conversation transfer happens between Agent-1 to Agent-2.

```
{
    "events": [
        {
            "name": "INTERNAL_TRANSFER_EVENT",
            "transfertype": "cold",
            "transition": "entry",
            "isExtAD": "true",
            "language": "en",
            "experience": "voice",
            "participant": {
                "identity": "Agent2",
                "name": "Agent AI",
                "type": "agent",
                "customFields": {
                    "agentEmail": "TP000037111@xxxxbank.com",
                    "queueId": "1694",
                    "queueName": "Kore_UAT_AGT_EN"
                }
            }
        }
    ]
}
```

### 3. Cold Transfer – Agent1 Exit (INTERNAL_TRANSFER_EVENT)

```
{
    "events": [
        {
            "name": "INTERNAL_TRANSFER_EVENT",
            "transfertype": "cold",
            "transition": "exit",
            "isExtAD": "true",
            "language": "en",
            "experience": "voice",
            "participant": {
                "identity": "Agent1",
                "name": "Agent AI",
                "type": "agent",
                "customFields": {
                    "agentEmail": "TP000037111@xxxxbank.com",
                    "queueId": "1694",
                    "queueName": "Kore_UAT_AGT_EN"
                }
            }
        }
    ]
}
```

### 4. Warm Transfer – Agent 2 Joins (INTERNAL_TRANSFER_EVENT)

The system triggers this scenario when one or multiple agents join the conversation as consultants.

```
{
    "events": [
        {
            "name": "INTERNAL_TRANSFER_EVENT",
            "transfertype": "warm",
            "transition": "entry",
            "isExtAD": "true",
            "language": "en",
            "experience": "voice",
            "participant": {
                "identity": "agent2",
                "name": "Agent AI2",
                "type": "agent",
                "customFields": {
                    "agentEmail": "TP000037111@xxxxbank.com",
                    "queueId": "1694",
                    "queueName": "Kore_UAT_AGT_EN"
                }
            }
        }
    ]
}
```

### 5. Warm Transfer – Agent-1 Leaves (INTERNAL_TRANSFER_EVENT)

```
{
    "events": [
        {
            "name": "INTERNAL_TRANSFER_EVENT",
            "transfertype": "warm",
            "transition": "exit",
            "isExtAD": "true",
            "language": "en",
            "experience": "voice",
            "participant": {
                "identity": "agent1",
                "name": "Agent AI",
                "type": "agent",
                "customFields": {
                    "agentEmail": "TP000037111@xxxxbank.com",
                    "queueId": "1694",
                    "queueName": "Kore_UAT_AGT_EN"
                }
            }
        }
    ]
}
```

### 6. Redial Scenario (INTERNAL_TRANSFER_EVENT)

Similar to the General Entry Scenario, this redundant operation creates multiple segments for the same agent with the initial segment start time.

```
{
    "events": [
        {
            "name": "INTERNAL_TRANSFER_EVENT",
            "transfertype": "redial",
            "transition": "entry",
            "reason": "agent_initiated",
            "language": "en",
            "experience": "voice",
            "participant": {
                "identity": "agent1",
                "name": "Agent AI",
                "type": "agent",
                "customFields": {
                    "agentEmail": "TP000037111@xxxxbank.com",
                    "queueId": "1694",
                    "queueName": "Kore_UAT_AGT_EN"
                }
            }
        }
    ]
}
```

**Sample cURL for Redial:**

```
curl --location 'https://ind-platform.kore.ai/api/v1/hooks/st-4beef2ed-bf1d-59e3-bd7f-5467f84dxxxx' \
--header 'Content-Type: application/json' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXxxxx...' \
--data '{
    "conversationId": "303030303333393234303137363037343631xxxx",
    "botId": "st-4beef2ed-bf1d-59e3-bd7f-5467f84dxxxx",
    "events": [
        {
            "name": "INTERNAL_TRANSFER_EVENT",
            "transfertype": "redial",
            "transition": "entry",
            "isExtAD": "true",
            "language": "en",
            "experience": "voice",
            "participant": {
                "identity": "731hssad",
                "name": "Agent AI",
                "type": "agent",
                "customFields": {
                    "agentEmail": "TP000037111@xxxxbank.com",
                    "queueId": "1694",
                    "queueName": "Kore_UAT_AGT_EN"
                }
            }
        }
    ]
}'
```

#### Standard Conversation Flow – Event Sequence

For any conversation lifecycle, the system must trigger the following events in the prescribed order to ensure accurate analytics, proper session tracking, and complete reporting within Kore.ai.

| **Step** | **Event** | **Transfer Type** | **Transition** | **Requirement** | **Description** |
|----------|----------|------------------|----------------|-----------------|-----------------|
| 1 | `INTERNAL_TRANSFER_EVENT` | `NA` | `entry` | **Mandatory** | Marks the beginning of the conversation when the first agent accepts the interaction. This is the starting point for all conversations. |
| 2 | `INTERNAL_TRANSFER_EVENT` | `cold` / `warm` | `entry` / `exit` | **Conditional** | Include this event only if internal transfers occur during the conversation. Each transfer (cold or warm) must include the appropriate entry and exit events for the respective agents. |
| 3 | `INTERNAL_TRANSFER_EVENT` | `NA` | `exit` | **Mandatory** | Marks the final agent's exit from the conversation. This must always be triggered before conversation closure. |
| 4 | `TRIGGER_SUMMARY_EVENT` | — | — | **Conditional** | Include this only if you need to generate a disposition summary. It triggers after the agent exits and before the conversation is formally closed. |
| 5 | `END_OF_CONVERSATION` | — | — | **Mandatory** | Signals the formal closure of the conversation. This must always be the final event in the sequence to ensure proper post-call analytics and Quality Management processing. |

**Key Rule**: Every conversation must begin with Step 1 and end with Steps 3 and 5 at minimum. The system triggers steps 2 and 4 based on the conversation context (for example, transfers or summary generation). 

#### Abrupt Conversation End (Redial) – Event Sequence

When a conversation drops unexpectedly (for example, due to a network failure or system disconnection), you must follow this event sequence to re-establish the session and close it properly. The `conversationId` remains the same as the original dropped call to maintain session continuity.

| **Step** | **Event** | **Transfer Type** | **Transition** | **Description** |
|----------|----------|------------------|----------------|-----------------|
| 1 | `INTERNAL_TRANSFER_EVENT` | `NA` | `exit` | Registers the agent's exit from the dropped conversation, formally closing the interrupted session. |
| 2 | `INTERNAL_TRANSFER_EVENT` | `redial` | `entry` | Marks the agent's re-entry into the same conversation after reconnection. This event is also applicable when an agent initiates a callback without a prior active conversation. |
| 3 | `INTERNAL_TRANSFER_EVENT` | `NA` | `exit` | Marks the agent's final exit once the reconnected conversation concludes. |
| 4 | `TRIGGER_SUMMARY_EVENT` | — | — | Triggers the generation of the Disposition Summary for the completed conversation. |
| 5 | `END_OF_CONVERSATION` | — | — | Signals the formal closure of the conversation, ensuring all post-call analytics and Quality Management data is captured. |

!!! note

    In a redial scenario, keep the **conversationId** the same as the original dropped call. This ensures the system treats the session as a continuation, not a new conversation, and preserves the full interaction history for analytics.

## Sample Request

```
curl --location 'https://platform.kore.ai/agentassist/api/v1/hooks/st-XXXX' \

--header 'Content-Type: application/json' \

--header 'token: &lt;JWT>' \

--data '{

 "conversationId": "c-12345",

 "botId": "st-XXXX",

 "events": [

   {

     "name": "INTERNAL_TRANSFER_EVENT",

     "transfertype": "NA",

     "transition": "entry",

     "isExtAD": true,

     "experience": "voice",

     "participant": {

       "identity": "agent1",

       "name": "Agent One",

       "type": "agent"

     }

   }

 ]

}'
```

## Responses

**Success**: ` 200 OK `

or

```
{

 "STATUS": "OK"

}
```

**Error (Invalid botId)**:

```
{

 "code": 400,

 "message": "Linked bot details could not be found. Please verify that the botId provided in the request body is correct."

}

```