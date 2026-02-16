--8<-- "includes/ccai-api-back-link.md"

# Get Conversation Details API

This API retrieves detailed information about a specific conversation session. It provides participant details, transfer history, queue activity, conversation status, notes, and dispositions.

| **Field**       | **Value** |
|------------------|-----------|
| **Method**       | GET |
| **Endpoint**     | `https://{{host}}/agentassist/api/v1/public/{{botId}}/conversations/sessions/{{sessionId}}` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**    | SmartAssist Analytics |

## Path Parameters

| **Parameter** | **Description** | **Type** |
|---------------|-----------------|-----------|
| `host`      | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `botId`     | Unique Bot ID (for example: `st-da6627e6-bb55-5e2f-80d3-92220e02xxxx`). | string, required |
| `sessionId` | Parent App Session ID (for example: `68a95e70fe5b8e806f8exxxx`). | string, required |

## Sample Request

```
curl --location --request GET 'https://{{host}}/agentassist/api/v1/public/{{botId}}/conversations/sessions/{{sessionId}}' \
--header 'accept: application/json, text/plain, */*' \
--header 'accept-language: en-US,en;q=0.9' \
--header 'accountid: {{accountId}}' \
--header 'app-language: en' \
--header 'content-type: application/json;charset=UTF-8' \
--header 'referer: https://staging-smartassist.kore.ai/smartassist/config/queues' \
--header 'auth: <JWT-token>' \
--data '{
    "startDate":"2024-10-24",
    "endDate":"2024-10-28",
    "timeZoneOffset": -330
}'
```

## Headers

| **Header**      | **Description** | **Type** |
|------------------|-----------------|-----------|
| `accept`        | Supported response type. Must be `application/json`. | string, required |
| `accountid`     | Identifies the customer account. | string, required |

## Request Body Parameters

| **Parameter**     | **Description** | **Type** |
|--------------------|-----------------|-----------|
| `startDate`       | Start date filter in `YYYY-MM-DD` format. | string, optional |
| `endDate`         | End date filter in `YYYY-MM-DD` format. | string, optional |
| `timeZoneOffset`  | Time zone offset in minutes (for IST use `-330`). | number, optional |


## Sample Response

```
{
  "_id": "c-ab4eb09-8dba-4db8-9176-b0ee670dxxxx",
  "participants": [
    {
      "queueId": "qu-a8203c2-aee7-4aa0-bb95-64e5c17exxxx",
      "queueStartTime": "2025-08-23T06:23:45.100Z",
      "queueName": "Default Queue",
      "agentId": "u-4149b5e5-9bbd-502d-b0ab-bfbd01d6xxxx",
      "name": "SmartAssist QA",
      "status": "INACTIVE",
      "assignedAt": "2025-08-23T06:23:45.595Z",
      "startTimeStamp": "2025-08-23T06:23:55.593Z",
      "conversationTransferred": true,
      "reason": "OVERDUE",
      "endTimeStamp": "2025-08-23T06:27:13.724Z"
    },
    {
      "queueId": "qu-a8203c2-aee7-4aa0-bb95-64e5c17exxxx",
      "queueStartTime": "2025-08-23T06:27:13.707Z",
      "queueName": "Default Queue",
      "agentId": "u-4149b5e5-9bbd-502d-b0ab-bfbd01d6xxxx",
      "name": "SmartAssist QA",
      "status": "ACTIVE",
      "assignedAt": "2025-08-23T06:33:49.658Z",
      "startTimeStamp": "2025-08-23T06:33:52.136Z",
      "endTimeStamp": "2025-08-23T06:33:54.960Z",
      "endedChat": true
    }
  ],
  "transferDetails": [
    {
      "fromQueue": "qu-a8203c2-aee7-4aa0-bb95-64e5c17exxxx",
      "transferredByAgentName": "SmartAssist QA",
      "transferredType": "QUEUE",
      "transferredTo": [
        {
          "id": "qu-a8203c2-aee7-4aa0-bb95-64e5c17exxxx",
          "name": "Default Queue",
          "type": "QUEUE"
        }
      ],
      "priority": "HIGHEST",
      "transferredAt": "2025-08-23T06:27:13.707Z",
      "systemTransferReason": "OVERDUE",
      "systemTransfer": true
    }
  ],
  "conversationType": "livechat",
  "status": "CLOSED",
  "summary": [
    "The customer was initially connected ... highest priority. The customer was asked to stand by while being transferred to the new queue."
  ],
  "dispositions": {
    "status": "Resolved",
    "remarks": "The customer was initially connected ... advising the customer to reach out again if further assistance is needed.",
    "dispositionSets": [
      { "dispositionsSet": "Resolution", "dispositionCodes": "Resolved" },
      { "dispositionsSet": "Custom", "dispositionCodes": "ThroughWeb" }
    ],
    "metaStatus": "AGENT_CLOSED"
  },
  "userInfo": {
    "firstName": "Test",
    "lastName": "User",
    "email": "john.doe@example.com",
    "phoneNumber": "9999999999",
    "activationStatus": "active"
  }
}
```

## Response Body Parameters

| **Parameter**       | **Description** | **Type** |
|----------------------|-----------------|-----------|
| `_id`               | Unique conversation ID. | String |
| `participants`      | List of agents or participants in the conversation. | Array |
| `transferDetails`   | Details of conversation transfer between queues/agents. | Array |
| `conversationType`  | Type of conversation (for example: `livechat`). | String |
| `status`            | Current conversation status (for example: `CLOSED`). | String |
| `summary`           | Generated summary of the conversation. | Array |
| `dispositions`      | Contains final status, remarks, and disposition codes. | Object |
| `userInfo`          | End-user profile details including name, email, phone, and status. | Object |
| `notes`             | Internal agent notes captured during the conversation. | Array |