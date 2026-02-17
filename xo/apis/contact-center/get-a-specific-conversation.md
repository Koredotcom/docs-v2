--8<-- "includes/ccai-api-back-link.md"

# Get a specific Conversation

Get a particular conversation by providing the Conversation Id.

| **Method**       | GET                                                                                          |
|--------------|----------------------------------------------------------------------------------------------|
| **Endpoint**     | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/conversations/{{conversationId}}` |
| **Content Type** | `application/json`                                                                          |
| **Authorization** | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token)                                                                           |
| **API Scope**    | SmartAssist Analytics                                                                       |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                      | **TYPE**           |
|-----------|--------------------------------------------------|----------------|
| host      | The Environment URL. For example, `https://platform.kore.ai` | string, required |
| streamId  | botId or streamId. You can get it from the App Settings page. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/conversations/{{conversationId}}' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'accountId: {{YOUR_accountId}}'
```

## Query Parameters

| **PARAMETER**       | **DESCRIPTION**                                                                                                                                                                   | **TYPE**           |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| conversationId  | A specific conversationId. This will fetch the records from that conversation. In case only the specific conversation is required, set the limit to 1. This field cannot be used in combination with dateFrom and dateTo. | string, required |

## Sample Response

```
{
    "participants": [
        {
            "queueId": "qu-241a4d7-e5d0-45a9-8032-82384505xxxx",
            "queueStartTime": "2023-05-22T04:55:05.350Z",
            "queueName": "Default Queue",
            "agentId": "u-b19cd89e-6533-59af-b491-eec9bf8fxxxx",
            "name": "John Doe",
            "status": "INACTIVE",
            "assignedAt": "2023-05-22T04:55:05.452Z",
            "startTimeStamp": "2023-05-22T04:55:07.718Z",
            "endTimeStamp": "2023-05-22T05:29:14.043Z",
            "isTransferred": false,
            "onInterrupt": true
        }
    ],
    "transferDetails": [
        {
            "fromQueue": "qu-241a4d7-e5d0-45a9-8032-82384505xxxx",
            "fromAgent": "u-b19cd89e-6533-59af-b491-eec9bf8fxxxx",
            "transferredType": "QUEUE",
            "transferredTo": [
                {
                    "id": "qu-241a4d7-e5d0-45a9-8032-82384505xxxx",
                    "name": "Default Queue",
                    "type": "QUEUE"
                }
            ],
            "transferredBy": "u-b19cd89e-6533-59af-b491-eec9bf8fxxxx",
            "priority": "HIGHEST",
            "transferredAt": "2023-05-22T05:29:14.007Z",
            "isManager": false
        }
    ],
    "waitTime": 3369,
    "isProactiveAgentAssistEnabled": true,
    "status": "CLOSED",
    "callbackOpted": false,
    "contactFlow": [],
    "surveyRequired": "YES",
    "isDeveloper": false,
    "_id": "c-3c04346-e522-4c53-9e03-c9566d85xxxx",
    "orgId": "o-ca23f4c5-cc3e-586d-90e6-8375bf2dxxxx",
    "userId": "u-aa15c0f4-7f78-5912-8713-f5cd1c3exxxx",
    "accountId": "637368b4a1d039e34ba6xxxx",
    "botId": "st-3bf09bef-f979-5489-b337-f465bd5dxxxx",
    "source": "rtm",
    "botSessionId": "646af57bcc41e5bfbd5exxxx",
    "language": "en",
    "keyIntentName": "TalkToAgent",
    "keyIntentUserInput": "I want to talk to an agent",
    "agentDesktopMeta": {
        "pagesVisited": [
            {
                "page": "Kore.ai Web Client",
                "timestamp": "2023-05-18T03:36:25.601Z",
                "timespent": 350312.351
            }
        ]
    },
    "conversationType": "messaging",
    "priority": 5,
    "queues": [
        {
            "type": "ASSIGNED",
            "status": "INACTIVE",
            "isPreferredAgentTimeoutExpired": true,
            "id": "qu-241a4d7-e5d0-45a9-8032-82384505xxxx",
            "name": "Default Queue",
            "startTime": "2023-05-22T04:55:05.350Z"
        },
        {
            "type": "TRANSFERRED",
            "status": "ACTIVE",
            "isPreferredAgentTimeoutExpired": true,
            "id": "qu-241a4d7-e5d0-45a9-8032-82384505xxxx",
            "startTime": "2023-05-22T05:29:14.007Z",
            "name": "Default Queue"
        }
    ],
    "startTime": "2023-05-22T04:55:05.351Z",
    "endTime": "2023-05-22T05:29:14.086Z",
    "formData": [],
    "timestampValue": 1684731305351,
    "createdAt": "2023-05-22T04:55:05.354Z",
    "updatedAt": "2023-05-22T05:29:24.067Z",
    "__v": 0,
    "skills": [],
    "acceptedAt": "2023-05-22T04:55:07.718Z",
    "notes": [],
    "dispositions": {
        "metaStatus": "SYSTEM_DROP_OFF",
        "status": "DROP-OFF",
        "remarks": "I'm sorry. It seems like there are no agents that can help you at this time. Reach out us a bit later.",
        "dispositionSets": null
    },
    "userInfo": {
        "workinghours": {
            "workdays": "mon,tue,wed,thu,fri",
            "workstart": "8:00 AM",
            "workend": "5:00 PM"
        },
        "profImage": "no-avatar",
        "jTitle": "",
        "dept": "",
        "profColour": "#ff4500",
        "activationStatus": "active",
        "firstName": "",
        "lastName": "",
        "orgId": "o-e31a1a45-c24a-5074-b4b7-d44396e6xxxx",
        "_id": "u-aa15c0f4-7f78-5912-8713-f5cd1c3exxxx",
        "identities": [
            {
                "val": "cs-b6296994-21c9-5108-9dee-1ab3dbbdxxxx/dc5680b0-a4a4-4ed1-afe7-fa77bda4f1586736bed4-850f-41cf-8baf-2eb88574xxxx",
                "type": "mapped"
            }
        ],
        "agentTransferConfig": {
            "skillsIds": [],
            "overrideAgents": false,
            "overrideValues": [],
            "assistEvents": {
                "startEvent": {
                    "isEnabled": true,
                    "botId": "st-ba0fcf10-b687-53b0-ad16-16cbacf2xxxx",
                    "dialogId": "dg-dea45cdd-c731-522e-a1dd-f5d5aaccxxxx",
                    "dialogRefId": "6f3688aa-f41b-5d6e-8444-e27c6c22xxxx"
                }
            },
            "automationBotId": "st-ba0fcf10-b687-53b0-ad16-16cbacf2xxxx",
            "lastIntentName": "TalkToAgent",
            "lastIntentuserInput": "I want to talk to an agent",
            "dialog_tone": []
        },
        "city": "Raha Gaon",
        "country": "India",
        "isp": "Bharti Airtel Ltd. AS for GPRS Service",
        "ipAddress": "106.203.156.168",
        "queue": "qu-241a4d7-e5d0-45a9-8032-82384505xxxx",
        "hostDomain": "https://platform.kore.ai",
        "os": "Windows",
        "device": "NA"
    }
}
```

## Response Body Parameters

| **PARAMETER**                  | **DESCRIPTION**                                                      | **TYPE**     |
|----------------------------|------------------------------------------------------------------|----------|
| transferDetails            | Transfer details of the conversation.                            | array    |
| waitTime                   | The wait time for the conversation in milliseconds.             | integer  |
| isProactiveAgentAssistEnabled | Whether proactive AgentAI is enabled for the conversation. | boolean  |
| callbackOpted              | Whether callback is opted for the conversation.                  | boolean  |
| contactFlow                | Contact flow information for the conversation.                  | array    |
| surveyRequired             | Whether a survey is required for the conversation.               | boolean  |
| isDeveloper                | Whether the user is a developer.                                | boolean  |
| id                         | The conversation Id.                                             | integer  |
| userId                     | The ID of the user associated with the conversation.             | string   |
| source                     | The source of the conversation.                                  | string   |
| botSessionId               | The ID of the bot session associated with the conversation.      | string   |
| keyIntentName              | The key intent for the conversation.                             | string   |
| keyIntentUserInput         | The user input associated with the key intent for the conversation. | string |
| agentDesktopMeta           | Additional metadata related to the agent desktop.                | object   |
| conversationType           | The type of conversation (for example, messaging).               | string   |
| priority                   | The priority level of the conversation.                          | string   |
| queues                     | Queue details for the conversation.                             | array    |
| startTime                  | The start time of the conversation.                              | string   |
| endTime                    | The end time of the conversation.                                | string   |
| formData                   | Form data associated with the conversation.                       | array    |
| timestampValue             | The timestamp value of the conversation.                         | integer  |
| createdAt                  | The creation time of the conversation.                           | string   |
| updatedAt                  | Last updated time of the conversation.                           | string   |
| skills                     | The skills associated with the conversation.                     | array    |
| acceptedAt                 | The time when the conversation was accepted.                     | string   |
| notes                      | Notes associated with the conversation.                          | array    |
| dispositions               | Disposition details for the conversation.                        | object   |
| userInfo                   | User information associated with the conversation.               | object   |