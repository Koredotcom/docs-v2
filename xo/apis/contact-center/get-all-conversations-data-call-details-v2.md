--8<-- "includes/ccai-api-back-link.md"

# Get All Conversations Data - Call Details-v2

To retrieve the raw data for all conversations in a detailed view. The days’ range can't be more than seven days.

| **Method** | POST |
|--------|------|
| **Endpoint** | `https://{{host}}/agentassist/api/public/analytics/account/{{accountId}}/v2/interactionDetails?offset=0&limit=100`<br>`https://{{host}}/agentassist/api/public/analytics/account/{{accountId}}/v2/calldetails` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | SmartAssist Analytics |

## Path Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
|-----------|-------------|------|
| host | Environment URL, for example, `https://platform.kore.ai` | string, required |
| accountId | The Account Id | string, required |

## Query Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
|-----------|-------------|------|
| limit | Specifies the number of conversation records to retrieve, with a maximum limit of 100. For example, 50 | integer, optional |
| offset | Defines the number of pages to skip or retrieve. Defaults to 0 if unspecified, with a maximum value of 10. For example, 10 | integer, optional |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/public/analytics/account/{{accountId}}/v2/callDetails?offset=0&limit=100' \
--header 'accept: application/json, text/plain, /' \
--header 'content-type: application/json;charset=UTF-8' \
--header 'auth: <token>' \
--header 'iId: st-22af7012-341f-54b8-af49-afdcd6c1xxxx' \
--data '{
"startDate":"2025-09-30",
"endDate":"2025-09-30",
"selectedFields": [
        "skills",
        "customerinfo",
        "userleveltags",
        "sessionleveltags"
    ],
"queues":[],
"channels": [],
"timeZoneOffset":-330
}'

```

## Request Header Parameters

| **Header**        | **Description**                                             | **Optional/Required** |
|-------------------|-------------------------------------------------------------|-----------------------|
| accept            | Desired response format (for example, application/json)                   | Optional              |
| accept-language   | Preferred response language (for example, en-US)             | Optional              |
| accountId         | Unique account identifier                                    | Required              |
| app-language      | Application display language (for example, en)               | Optional              |
| content-type      | Request body format (application/json;charset=UTF-8)         | Required              |
| referer           | Source application name (for example, smartassist)           | Optional              |
| auth              | JWT authentication token                                     | Required              |
| IId               | Stream or application id                                     | Required              |

## Request Body Parameters

| Parameter        | Description                                                                                                                                                                                                                                                                                                                                                 | Type                    |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| **startDate**    | The start date from which records are considered. <br> Format: `yyyy-mm-dd HH24:mm:ss` <br> Example: `2022-08-25 07:20:15`                                                                                                                                                                                                                                   | DateTime, required      |
| **endDate**      | The end date up to which records are considered. <br> Format: `yyyy-mm-dd HH24:mm:ss` <br> Example: `2022-08-25 18:20:15`                                                                                                                                                                                                                                   | DateTime, required      |
| **timeZoneOffset** | The time zone offset. <br> Examples: `-330`, `630`, `-500` <br> **Note:** For US/New York, the offset is `300`. Use a minus sign for time zones east of GMT; no sign for time zones west of GMT.                                                                                                                                                             | number, required        |
| **selectedFields** | Specifies which data fields to include in the API response. <br> `skills` - Returns the agent’s areas of expertise or capabilities. <br> `customerinfo` - Includes key customer details such as email, first name, last name, phone number, and other details <br> `userleveltags` - Returns tags assigned at the individual user level for categorization or filtering <br> `sessionleveltags` - Returns tags associated with a specific session or conversation instance. | array[string], optional |
| **channels**     | The channels to include. <br> Example: `['rtm', 'voice']`                                                                                                                                                                                                                                                                                                    | array[string], optional |
| **queues**       | The list of queue IDs in the instance bots.                                                                                                                                                                                                                                                                                                                  | array[string], optional |

## Sample Response

```
{
    "numResults": 10,
    "data": [
        {
            "sessionId": "68db745779cb8cebd651xxxx",
            "channel": "Web/Mobile Client",
            "sessionStartTime": "2025-09-30T11:40:31",
            "sessionEndTime": "2025-09-30T11:40:42",
            "botId": "st-1d7611fa-908a-5f0c-8871-f7ea97a0xxxx",
            "userId": "u-ae9c9170-7a27-5cf5-89ab-e345d9e7xxxx",
            "channelSpecificUserId": "john.doe@example.com",
            "orgId": "o-5a0da1e4-2df3-5cec-9ee4-af0b2efdxxxx",
            "smartStatus": "CLOSED AT BOT",
            "reason": "",
            "disconnectingEvent": "",
            "errorDetails": "",
            "finalStatus": "BotResolved",
            "automationBotIDs": [
                "st-e5c6ae6b-c388-5acd-93b7-bada87a7xxxx"
            ]
        },
        {
            "sessionId": "68db74b379cb8cebd651xxxx",
            "channel": "Web/Mobile Client",
            "sessionStartTime": "2025-09-30T11:42:03",
            "sessionEndTime": "2025-09-30T11:42:16",
            "botId": "st-1d7611fa-908a-5f0c-8871-f7ea97a0xxxx",
            "userId": "u-ae9c9170-7a27-5cf5-89ab-e345d9e7xxxx",
            "channelSpecificUserId": "jane.doe@example.com",
            "orgId": "o-5a0da1e4-2df3-5cec-9ee4-af0b2efdxxxx",
            "smartStatus": "CLOSED AT BOT",
            "reason": "",
            "disconnectingEvent": "",
            "errorDetails": "",
            "finalStatus": "BotResolved",
            "automationBotIDs": [
                "st-e5c6ae6b-c388-5acd-93b7-bada87a7xxxx"
            ]
        },
        {
            "sessionId": "68db74e179cb8cebd651xxxx",
            "channel": "Web/Mobile Client",
            "sessionStartTime": "2025-09-30T11:42:49",
            "sessionEndTime": "2025-09-30T11:42:56",
            "botId": "st-1d7611fa-908a-5f0c-8871-f7ea97a0xxxx",
            "userId": "u-ae9c9170-7a27-5cf5-89ab-e345d9e7xxxx",
            "channelSpecificUserId": "john.doe@example.com",
            "orgId": "o-5a0da1e4-2df3-5cec-9ee4-af0b2efdxxxx",
            "smartStatus": "CLOSED AT BOT",
            "reason": "",
            "disconnectingEvent": "",
            "errorDetails": "",
            "finalStatus": "BotResolved",
            "automationBotIDs": [
                "st-e5c6ae6b-c388-5acd-93b7-bada87a7xxxx"
            ]
        },
        {
            "conversationId": "c-b48e690-7d7c-4e72-9855-a669d688xxxx",
            "sessionId": "68db819479cb8cebd651xxxx",
            "channel": "Voice",
            "isVoicemail": "NO",
            "Direction": "Inbound",
            "finalStatus": "CLOSED",
            "smartStatus": "CLOSED",
            "reason": "Requires Supervisor Attention",
            "disconnectingEvent": "Agent Hangup",
            "errorDetails": "",
            "botId": "st-1d7611fa-908a-5f0c-8871-f7ea97a0xxxx",
            "dispositions": [
                "Requires Supervisor Attention"
            ],
            "dispositionRemarks": [
                "The customer requested to pay their bill. The bot acknowledged the request and informed the customer that an agent would be required to assist with the bill payment. The bot asked the customer to hold while connecting to an available agent. The agent then joined the conversation and greeted the customer."
            ],
            "metaInfo": {
                "caller": "+13213xxxxx",
                "callee": "+13343xxxxx",
                "callerHost": "54.172.60.2",
                "userId": "u-4245d01e-6124-587a-85b2-939fe3cfxxxx",
                "dialedNumber": "+13343xxxxx",
                "agentTransferConfig": {
                    "skillsIds": [
                        "6834045b2e9b90fa31c8xxxx",
                        "6834045b2e9b90fa31c8xxxx"
                    ],
                    "overrideAgents": false,
                    "overrideValues": [],
                    "assistEvents": {
                        "startEvent": {
                            "isEnabled": false
                        }
                    },
                    "automationBotId": "st-e5c6ae6b-c388-5acd-93b7-bada87a7xxxx",
                    "lastIntentName": "Pay Bill",
                    "lastIntentuserInput": "Can you pay my bill?",
                    "dialog_tone": [],
                    "accountId": "674daf4bc9d17f4dc070xxxx"
                },
                "workinghours": {
                    "workdays": "mon,tue,wed,thu,fri",
                    "workstart": "8:00 AM",
                    "workend": "5:00 PM"
                },
                "profImage": "no-avatar",
                "profColour": "#ff4500",
                "jTitle": "",
                "dept": "",
                "activationStatus": "active",
                "firstName": "",
                "lastName": "",
                "orgId": "o-2b41857b-a1cb-5862-8faf-e3d99c3axxxx",
                "_id": "u-4245d01e-6124-587a-85b2-939fe3cfxxxx",
                "accountId": "60625df27092898e35d9xxxx",
                "identities": [
                    {
                        "val": "cs-259844d3-7827-5f33-ae7c-9d790e6d7548/9884fdd7-8546-4db8-bb66-5a7fef18xxxx",
                        "type": "mapped"
                    },
                    {
                        "val": "674daf4bc9d17f4dc07034a4/korevg/9884fdd7-8546-4db8-bb66-5a7fef18xxxx",
                        "type": "mapped"
                    }
                ],
                "transcribeConfig": {
                    "transcribe": true
                }
            },
            "sessionStartTime": "2025-09-30T12:37:00",
            "sessionEndTime": "2025-09-30T12:38:06",
            "channelSpecificUserId": "674daf4bc9d17f4dc070xxxx/korevg/9884fdd7-8546-4db8-bb66-5a7fef18xxxx",
            "userId": "u-4245d01e-6124-587a-85b2-939fe3cfxxxx",
            "destinations": [
                {
                    "destinationType": "QueueEntry",
                    "queueId": "qu-7a58cc5-0599-4609-817c-873d8384xxxx",
                    "queueName": "Default Queue",
                    "CallbackOpted": false,
                    "EnterTime": "2025-09-30T12:37:11",
                    "respondingAgent": {
                        "agentId": "u-e3f58196-0f28-5419-9601-dc136e8dxxxx",
                        "agentNotes": [
                            "The customer requested to pay their bill. The bot acknowledged the request and informed the customer that an agent would be required to assist with the bill payment. The bot asked the customer to hold while connecting to an available agent. The agent then joined the conversation and greeted the customer."
                        ],
                        "destinationType": "AgentSegment",
                        "status": "Answered",
                        "firstResponseTime": "2025-09-30T12:37:20",
                        "firstResponseDuration": 0,
                        "interactionEndTime": "2025-09-30T12:38:09",
                        "interactionDuration": 49,
                        "afterCallWorkDuration": 4,
                        "afterCallWorkEndTime": "2025-09-30T12:38:13",
                        "ConsultingAgents": [
                            {
                                "name": "+919550xxxxx",
                                "acceptedTime": "2025-09-30T12:37:51",
                                "assignedAt": "2025-09-30T12:37:44",
                                "consultingEndTime": "2025-09-30T12:38:02"
                            }
                        ],
                        "JoinedUsers": [],
                        "email": "john.doe@example.com",
                        "name": "John Doe",
                        "acceptedTime": "2025-09-30T12:37:20",
                        "assignedAt": "2025-09-30T12:37:16"
                    }
                }
            ],
            "automationBotIDs": [
                "st-e5c6ae6b-c388-5acd-93b7-bada87a7xxxx"
            ]
        },
        {
            "conversationId": "c-c880eb2-0a78-416e-a5b6-b210d033xxxx",
            "sessionId": "68db79e679cb8cebd651xxxx",
            "channel": "Voice",
            "isVoicemail": "NO",
            "Direction": "Inbound",
            "finalStatus": "CLOSED",
            "smartStatus": "CLOSED",
            "reason": "Requires Supervisor Attention",
            "disconnectingEvent": "Bot Hangup",
            "errorDetails": "",
            "botId": "st-1d7611fa-908a-5f0c-8871-f7ea97a0xxxx",
            "dispositions": [
                "Requires Supervisor Attention"
            ],
            "dispositionRemarks": [
                "The customer requested to pay their bill. The bot acknowledged the request and informed the customer that an agent would be required to assist with the bill payment process. The customer agreed to hold, and the bot connected them to an available agent. The agent then took over the conversation."
            ],
            "metaInfo": {
                "caller": "+13213xxxxx",
                "callee": "+133434xxxxx",
                "callerHost": "54.xxx.xx.1",
                "userId": "u-c1ca58fb-2208-52f8-9f9c-d542316exxxx",
                "dialedNumber": "+133434xxxxx",
                "agentTransferConfig": {
                    "skillsIds": [
                        "6834045b2e9b90fa31c8xxxx",
                        "6834045b2e9b90fa31c8xxxx"
                    ],
                    "overrideAgents": false,
                    "overrideValues": [],
                    "assistEvents": {
                        "startEvent": {
                            "isEnabled": false
                        }
                    },
                    "automationBotId": "st-e5c6ae6b-c388-5acd-93b7-bada87a7xxxx",
                    "lastIntentName": "Pay Bill",
                    "lastIntentuserInput": "Can you  pay my bill?",
                    "dialog_tone": [],
                    "accountId": "674daf4bc9d17f4dc070xxxx"
                },
                "workinghours": {
                    "workdays": "mon,tue,wed,thu,fri",
                    "workstart": "8:00 AM",
                    "workend": "5:00 PM"
                },
                "profImage": "no-avatar",
                "profColour": "#ff4500",
                "jTitle": "",
                "dept": "",
                "activationStatus": "active",
                "firstName": "",
                "lastName": "",
                "orgId": "o-2b41857b-a1cb-5862-8faf-e3d99c3axxxx",
                "_id": "u-c1ca58fb-2208-52f8-9f9c-d542316exxxx",
                "accountId": "60625df27092898e35d9xxxx",
                "identities": [
                    {
                        "val": "cs-259844d3-7827-5f33-ae7c-9d790e6dxxxx/c246a41e-91c1-418f-a4c3-a5d4ad59xxxx",
                        "type": "mapped"
                    },
                    {
                        "val": "674daf4bc9d17f4dc070xxxx/korevg/c246a41e-91c1-418f-a4c3-a5d4ad59xxxx",
                        "type": "mapped"
                    }
                ],
                "transcribeConfig": {
                    "transcribe": true
                }
            },
            "sessionStartTime": "2025-09-30T12:04:14",
            "sessionEndTime": "2025-09-30T12:06:08",
            "channelSpecificUserId": "674daf4bc9d17f4dc070xxxx/korevg/c246a41e-91c1-418f-a4c3-a5d4ad59xxxx",
            "userId": "u-c1ca58fb-2208-52f8-9f9c-d542316exxxx",
            "destinations": [
                {
                    "destinationType": "QueueEntry",
                    "queueId": "qu-7a58cc5-0599-4609-817c-873d8384xxxx",
                    "queueName": "Default Queue",
                    "CallbackOpted": true,
                    "CallbackOptedTime": "2025-09-30T06:34:48.810Z",
                    "userCallbackAcceptTime": "2025-09-30T06:35:00.589Z",
                    "EnterTime": "2025-09-30T12:04:23",
                    "respondingAgent": {
                        "agentId": "u-e3f58196-0f28-5419-9601-dc136e8dxxxx",
                        "agentNotes": [
                            "The customer requested to pay their bill. The bot acknowledged the request and informed the customer that an agent would be required to assist with the bill payment process. The customer agreed to hold, and the bot connected them to an available agent. The agent then took over the conversation."
                        ],
                        "destinationType": "AgentSegment",
                        "status": "Answered",
                        "firstResponseTime": "2025-09-30T12:05:00",
                        "firstResponseDuration": 0,
                        "interactionEndTime": "2025-09-30T12:06:10",
                        "interactionDuration": 70,
                        "afterCallWorkDuration": 3,
                        "afterCallWorkEndTime": "2025-09-30T12:06:13",
                        "ConsultingAgents": [
                            {
                                "name": "Jane Doe",
                                "acceptedTime": "2025-09-30T12:05:45",
                                "assignedAt": "2025-09-30T12:05:36",
                                "consultingEndTime": "2025-09-30T12:05:58"
                            }
                        ],
                        "JoinedUsers": [],
                        "email": "john.doe@example.com",
                        "name": "John Doe",
                        "acceptedTime": "2025-09-30T12:05:00",
                        "assignedAt": "2025-09-30T12:04:48"
                    }
                }
            ],
            "automationBotIDs": [
                "st-e5c6ae6b-c388-5acd-93b7-bada87a7xxxx"
            ]
        },
{
            "conversationId": "c-252425a-903a-469e-b16d-eee318e3xxxx",
            "sessionId": "68dcfba48d99cc7cd125xxxx",
            "channel": "Web/Mobile Client",
            "isVoicemail": "NO",
            "Direction": "Inbound",
            "skills": [],
            "finalStatus": "CLOSED",
            "smartStatus": "CLOSED",
            "reason": "",
            "disconnectingEvent": "Agent Closed",
            "botId": "st-df029793-114e-55ab-9d80-8777af8axxxx",
            "dispositions": [],
            "dispositionRemarks": [],
            "metaInfo": {
                "firstName": "John",
                "lastName": "Doe",
                "email": "john.doe@example.com",
                "phoneNumber": "150551xxxxx",
                "identities": [
                    {
                        "val": "cs-ddee2921-797d-5751-8786-bf06xxxx/22f2681a-23d9-420a-9852-5bdab917afd61f1ce2a8-b737-48ee-89b3-bfeeacb3xxxx",
                        "type": "mapped"
                    }
                ],
                "agentTransferConfig": {
                    "overrideAgents": false,
                    "overrideValues": [],
                    "assistEvents": {
                        "startEvent": {
                            "botId": "st-df029793-114e-55ab-9d80-8777af8axxxx",
                            "isEnabled": false
                        }
                    },
                    "automationBotId": "st-df029793-114e-55ab-9d80-8777af8axxxx",
                    "lastIntentName": "agent transfer",
                    "dialog_tone": []
                },
                "ipAddress": "123.xxx.xx.xxx",
                "hostDomain": "https://eu-platform.kore.ai",
                "os": "Windows"
            },
            "customerinfo": {
                "CustomerPhone": "1234567890",
                "CenterPhone": "",
                "CustomerFirstName": "Jane",
                "CustomerLastName": "Doe",
                "CustomerEmail": "jane.doe@example.com"
            },
            "sessionStartTime": "2025-10-01T15:30:04",
            "sessionEndTime": "2025-10-01T15:31:01",
            "channelSpecificUserId": "cs-ddee2921-797d-5751-8786-bf060407xxxx/22f2681a-23d9-420a-9852-5bdab917afd61f1ce2a8-b737-48ee-89b3-bfeeacb3xxxx",
            "userId": "u-fb8994f9-3a52-58ed-8f73-81204e7xxxx",
            "destinations": [
                {
                    "destinationType": "QueueEntry",
                    "queueId": "qu-577416d-3745-40e7-904c-85ba1a04xxxx",
                    "queueName": "Default Queue",
                    "CallbackOpted": false,
                    "EnterTime": "2025-10-01T15:30:23",
                    "nonRespondingAgents": [
                        {
                            "agentId": "u-3ea001b4-664a-58b6-8108-b8bca375xxxx",
                            "agentNotes": [
                                "The customer requested to connect with an agent. The bot acknowledged the request and initiated the transfer process, asking the customer to hold."
                            ],
                            "destinationType": "AgentSegment",
                            "email": "john.doe@example.com",
                            "name": "John Doe",
                            "assignedAt": "2025-10-01T15:30:35",
                            "nonResponseEvent": "Supervisor Reassigned"
                        }
                    ]
                },
                {
                    "agentId": "u-3ea001b4-664a-58b6-8108-b8bca375xxxx",
                    "agentNotes": [
                        "The customer requested to connect with an agent. The bot acknowledged the request and initiated the transfer process, asking the customer to hold."
                    ],
                    "destinationType": "AgentSegment",
                    "status": "Answered",
                    "interactionEndTime": "2025-10-01T15:31:00",
                    "interactionDuration": 15,
                    "afterCallWorkDuration": 32,
                    "afterCallWorkEndTime": "2025-10-01T15:31:32",
                    "ConsultingAgents": [],
                    "JoinedUsers": [],
                    "email": "jane.doe@example.com",
                    "name": "Jane Doe",
                    "acceptedTime": "2025-10-01T15:30:45",
                    "assignedAt": "2025-10-01T15:30:42"
                }
            ],
            "userleveltags": [],
            "sessionleveltags": []
        }
    ]
}
```

## Response Parameters

| Parameter Name | Type and Format | Description | Example |
|-----------------|-----------------|-------------|---------|
| conversationId | type-prefixed-guid | An ID generated by SmartAssist for this conversation. | c-7b08889-539d-408d-a3e6-9e6ae059xxxx |
| sessionId | internal value | A bot-generated ID for this conversation. | 63bd199c197b3646dadexxxx |
| channel | character string | Name of the channel. Values-Web/Mobile Client, System Mail, or Voice. | Web / Mobile Client |
| sessionStartTime | YYYY-MM-DDTHH SS | Start time of the session. | 2023-01-10 2:25:54 |
| sessionEndTime | YYYY-MM-DDTHH SS | End time of the session. | 2023-01-10 2:25:54 |
| botId | type-prefixed-guid | Identifier of the bot involved. | st-ae8470ab-8ecb-51fb-8e13-c87dc66fxxxx |
| userId | type-prefixed-guid | SmartAssist’s own generated user ID. | u-8413fd99-4ded-5f6d-8c1a-176dc66xxxx |
| channelSpecificUserId | no known format | User ID passed by the channel. | jane.doe@example.com |
| orgId | type-prefixed-guid | The organization ID. | o-5a0da1e4-2df3-5cec-9ee4-af0b2efdxxxx |
| smartStatus | String | The live status of the session. | CLOSED |
| Reason | character string | The reason for the status. | NO AGENTS AVAILABLE |
| disconnectingEvent | character string | The final event leading to the conversation ending. | System Hangup |
| errorDetails | String | Details of any error that occurred. | — |
| finalStatus | character string | Completion status of the conversation. | CLOSED or BotResolved |
| automationBotIDs | Array | List of automation bots involved in the session. | [ "st-e5c6ae6b-c388-5acd-93b7-bada87axxxx" ] |
| isVoicemail | Boolean | Indicates if the session was a voicemail. | NO |
| Direction | String | Direction of the call. Values: Inbound, Outbound. | Inbound |
| dispositions | array of strings | Disposition assigned to the conversation. | [ "Requires Supervisor Attention" ] |
| dispositionRemarks | array of strings | Remarks or notes related to the disposition from the agent. | [ "CUSTOMER needs help with Products and Sales. AGENT will connect her with an agent." ] |
| metaInfo | object | Contains custom information, set by automation. | — |
| metaInfo.caller | string | Phone number of the caller. | +132136xxxxx |
| metaInfo.callee | string | Phone number of the callee. | +133434xxxxx |
| metaInfo.callerHost | string | IP address of the caller. | 54.xxx.xx.2 |
| metaInfo.userId | string | Unique identifier of the user. | u-4245d01e-6124-587a-85b2-939fe3cfxxxx |
| metaInfo.dialedNumber | string | Number dialed by the caller. | +1234567890 |
| metaInfo.agentTransferConfig | object | Contains configuration for agent transfer including skills, bot, and last intent. | — |
| metaInfo.agentTransferConfig.skillsIds | array | ID of each skill of the agent handling this conversation. | [ "6834045b2e9b90fa31c8xxxx", "6834045b2e9b90fa31c8xxxx" ] |
| metaInfo.agentTransferConfig.overrideAgents | boolean | Indicates whether agent override is enabled. | false |
| metaInfo.agentTransferConfig.overrideValues | array | Custom override values for agent transfer. | — |
| metaInfo.agentTransferConfig.assistEvents | object | Configuration for assist-related events. | — |
| metaInfo.agentTransferConfig.assistEvents.startEvent | object | Configuration details for the assist start event. | — |
| metaInfo.agentTransferConfig.assistEvents.startEvent.startEvent.isEnabled | boolean | Indicates whether the assist start event is enabled. | false |
| metaInfo.agentTransferConfig.lastIntentName | string | Last intent posted to the bot by the user. | Pay Bill |
| metaInfo.agentTransferConfig.lastIntentuserInput | string | Input posted by the user. | Can you pay my bill? |
| metaInfo.agentTransferConfig.dialog_tone | array | Dialog tone settings. | — |
| metaInfo.agentTransferConfig.accountId | string | Agent account ID for transfer configuration. | 674daf4bc9d17f4dc070xxxx |
| metaInfo.ipAddress | String | IP address from which the user accessed the session. | 103.xxx.xxx.xxx |
| metaInfo.hostDomain | String | Domain of the platform instance handling the interaction. | `https://eu-platform.kore.ai` |
| metaInfo.os | String | Operating system of the user’s device. | Windows |
| metaInfo.customerinfo | Object | Contains customer details captured during the session. | — |
| metaInfo.customerinfo.CustomerPhone | String | Customer’s phone number. | 1234567890 |
| metaInfo.customerinfo.CenterPhone | String | Contact number of the service center. | "" |
| metaInfo.customerinfo.CustomerFirstName | String | Customer’s first name. | Jimmy |
| metaInfo.customerinfo.CustomerLastName | String | Customer’s last name. | Doe |
| metaInfo.customerinfo.CustomerEmail | String | Customer’s email address. | jane.doe@example.com |
| metaInfo.workinghours | object | Defines the agent’s working days and hours. | — |
| metaInfo.workinghours.workdays | String | The working days of the agent. | mon,tue,wed,thu,fri |
| metaInfo.workinghours.workstart | String | The time when the agent begins accepting calls. | 8:00 AM |
| metaInfo.workinghours.workend | String | The time when the agent stops accepting calls. | 5:00 PM |
| metaInfo.profImage | string | Profile image of the agent. | no-avatar |
| metaInfo.profColour | String | Profile color code. | #ff4500 |
| metaInfo.jTitle | String | Job title of the agent. | — |
| metaInfo.dept | String | Department of the agent. | — |
| metaInfo.activationStatus | String | The activation status of agent. | active |
| metaInfo.firstName | String | The first name of the agent. | — |
| metaInfo.lastName | String | The last name of the agent. | — |
| metaInfo._id | String | Internal identifier for the user object. | u-c1ca58fb-2208-52f8-9f9c-d542316exxxx |
| metaInfo.identities | Array of objects | Contains the list of mapped identities for the user. | — |
| metaInfo.identities.val | string | Mapped identity value. | cs-259844d3-7827-5f33-ae7c-9d790e6dxxxx/c246a41e-91c1-418f-a4c3-a5d4ad59xxxx |
| metaInfo.identities.type | string | Type of identity mapping. | mapped |
| metaInfo.transcribeConfig | object | Configuration for call transcription. | — |
| metaInfo.transcribeConfig.transcribe | Boolean | Indicates whether transcription is enabled for the session. | true |
| destinations | array of objects | One object for each Queue or Agent that the call was transferred to. | — |
| destinations.destinationType | String | Destination for any transfer-distinguishes direct-to-agent vs. queue. | QueueEntry |
| destinations.queueId | type-prefixed-guid | SmartAssist’s internal ID for the Queue. | qu-123dbe9-c752-464d-a9be-1d0e43b6xxxx |
| destinations.queueName | character string | Name of the queue. | Residential-Sales |
| destinations.CallbackOpted | Boolean | Indicates whether the customer opted for a callback. | True |
| destinations.CallbackOptedTime | String (ISO 8601 datetime) | Timestamp when the customer opted for the callback (only if CallbackOpted = true). | 2025-09-30T06:34:48.810Z |
| destinations.userCallbackAcceptTime | String (ISO 8601 datetime) | Timestamp when the customer accepted the callback initiated by the agent (only if CallbackOpted = true). | 2025-09-30T06:35:00.589Z |
| destinations.EnterTime | String (ISO 8601 datetime) | Time at which this conversation entered this queue. | 2023-01-10 2:25:54 |
| destinations.respondingAgent | object | Details of the responding agent. | — |
| destinations.respondingAgent.agentId | type-prefixed-guid | SmartAssist’s internal ID for the agent. | u-f3a11f62-57d7-5a9f-a071-787650b1xxxx |
| destinations.respondingAgent.agentNotes | array of strings | Notes provided by the agent. | ["CUSTOMER has a problem with Products and Sales. She needs an agent to help her."] |
| destinations.respondingAgent.destinationType | string | Type of agent destination. | AgentSegment |
| destinations.respondingAgent.status | string | Status of the conversation with this respondingAgent. | Answered |
| destinations.respondingAgent.firstResponseTime | YYYY-MM-DDTHH SS | The time at which this agent first responded. | 2023-01-10 2:25:54 |
| destinations.respondingAgent.firstResponseDuration | integer | Duration in seconds, from Agent acceptance to first response. | 20 |
| destinations.respondingAgent.interactionEndTime | YYYY-MM-DDTHH SS | The time at which interaction with this agent ended. | 2023-01-10 2:25:54 |
| destinations.respondingAgent.interactionDuration | integer | Duration in seconds from Agent acceptance to last utterance. | 51 |
| destinations.respondingAgent.afterCallWorkDuration | integer | Duration in seconds of post-call work of this agent. | 8 |
| destinations.respondingAgent.afterCallWorkEndTime | YYYY-MM-DDTHH SS | Time when this agent completed post-call work. | 2023-01-10 2:25:54 |
| destinations.respondingAgent.ConsultingAgents | array of objects | Contains details of internal/external agents to whom the call was transferred. | — |
| destinations.respondingAgent.ConsultingAgents.isMerged | Boolean | Indicates whether the agent’s record is merged with another. | True |
| destinations.respondingAgent.ConsultingAgents.name | string | Name or phone number of the external agent. | +919550xxxxxx |
| destinations.respondingAgent.ConsultingAgents.acceptedTime | String (ISO 8601 datetime) | Timestamp when external agent accepted the call. | 2025-09-30T12:05:45 |
| destinations.respondingAgent.ConsultingAgents.assignedAt | String (ISO 8601 datetime) | Timestamp when the call was assigned to the external agent. | 2025-09-30T12:05:36 |
| destinations.respondingAgent.ConsultingAgents.consultingEndTime | String (ISO 8601 datetime) | Timestamp when the call ended. | 2025-09-30T12:05:58 |
| destinations.respondingAgent.JoinedUsers | array | Users who joined the call. | — |
| destinations.respondingAgent.email | string | Agent’s email address. | jane.doe@example.com |
| destinations.respondingAgent.name | character string | Agent’s name. | jane doe |
| destinations.respondingAgent.assignedAt | YYYY-MM-DDTHH SS | Time at which this contact was assigned to this Agent. | 2023-01-10 2:25:54 |
| destinations.respondingAgent.acceptedTime | YYYY-MM-DDTHH SS | Time at which this Agent accepted the contact. | 2023-01-10 2:25:54 |
| destinations.nonRespondingAgents | Array of objects | Details of agents assigned but didn't respond. | — |
| destinations.nonRespondingAgents.agentId | String | Unique identifier of non-responding agent. | u-3ea001b4-664a-58b6-8108-b8bca375xxxx |
| destinations.nonRespondingAgents.agentNotes | Array of Strings | Notes or remarks for the interaction. | The customer initiated a conversation with the bot for various requests, including connecting to an agent. |
| destinations.nonRespondingAgents.destinationType | String | Segment type of the interaction. | AgentSegment |
| destinations.nonRespondingAgents.email | String | Email address of the agent. | jane.doe@example.com |
| destinations.nonRespondingAgents.name | String | Full name of the assigned agent. | Jane doe |
| destinations.nonRespondingAgents.assignedAt | String (ISO 8601 datetime) | Timestamp when the agent was assigned. | 2025-10-01T13:08:55 |
| destinations.nonRespondingAgents.nonResponseEvent | String | Reason the agent didn't respond. | Ignored |
| userleveltags | array of tag objects | All user-level tags associated with this session. | {"name": "accountnum","value": "121413243141234132"} |
| sessionleveltags | array of tag objects | All session-level tags associated with this session. | {"name": "audioCodesCallDisconnect","value": "1"} |