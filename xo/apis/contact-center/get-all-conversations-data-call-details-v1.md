--8<-- "includes/ccai-api-back-link.md"

# Get All Conversations Data – Call Details - v1

To retrieve the raw data for all conversations in a detailed view. The days’ range can't be more than seven days.

| **Method** | POST |
| ---- | ---- |
| **Endpoint** | `https://{{host}}/agentassist/api/public/analytics/account/{{accountId}}/calldetails?limit=100\&offset=0` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token](https://docs.kore.ai/xo/apis/automation/api-introduction/#generating-the-jwt-token) |
| **API Scope** | SmartAssist Analytics |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| ---- | ---- | ---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `accountId` | The Account ID | string, required |

## Query Parameters

| **Parameter** | **Description** | **Type** |
| ---- | ---- | ---- |
| `limit` | Specifies the number of conversation records to retrieve, with a maximum limit of 100. For example, 50 | integer, optional |
| `offset` | Defines the number of pages to skip or retrieve. Defaults to 0 if unspecified, with a maximum value of 10. For example, 10 | integer, optional |

## Sample Request  

``` 
curl --location 'https://{{host}}/agentassist/api/public/analytics/account/{{accountId}}/calldetails?limit=100&offset=0' \
--header 'authority: {{domain}}' \
--header 'accept: application/json, text/plain, /' \
--header 'accept-language: en-US,en;q=0.9' \
--header 'accountid: {{accountId}}' \
--header 'app-language: en' \
--header 'auth: <token>' \
--header 'bot-language: en' \
--header 'content-type: application/json;charset=UTF-8' \
--header 'cookie: _gcl_au=1.11502438879.1669621549; hubspotutk=ef24820cc39323476019ea81d073bc01; __hssrc=1; _hjSessionUser_1992177=eyJpZCI6ImYxYWQ2MWUyLTUxODItNWJjMy05ZGI1LWU1ZjE2ZmViYTE5YiIsImNyZWF0ZWQiOjE2Njk2MjE1NDzxxxxxsImV4aXN0aW5nIjp0cnVlfQ==; __hstc=59894770.ef24820cc39323476019ea81d073xxxx.1669621552766.1670332174995.1670395535267.15; _ga=GA1.2.174434293.1669621538; _ga_JW3PWR1JKY=GS1.11670419410.15.01670419410.0.0.0; mp_7888bdd5fedfd65f44bb9a3100faxxxx_mixpanel=%7B%22distinct_id%22%3A%20%22184f0fdd19c11-0ccd03f799cfb8-26021151-e1000-184f0fdd19da01%22%2C%22%24device_id%22%3A%20%22184f0fdd19c11-0ccd03f799cfb8-26021151-e1000-184f0fdd19da01%2xxxx' \
--header 'referer: https://uat-smartassist.kore.ai/smartassist/config/queues' \
--header 'sec-ch-ua: "Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'sec-ch-ua-platform: "Windows"' \
--header 'sec-fetch-dest: empty' \
--header 'sec-fetch-mode: cors' \
--header 'sec-fetch-site: same-origin' \
--header 'smartassist: true' \
--header 'state: configured' \
--header 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' \
--header 'x-request-id: 5912cf37-667a-484e-b075-2c42114dxxxx' \
--header 'x-timezone: Asia/Calcutta' \
--header 'x-timezone-offset: -330' \
--header 'iId: st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx' \
--data '{
"startDate":"2025-10-01",
"endDate":"2025-10-01",
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

## Header Parameters

| **Header** | **Description** | **Optional/Required** |
| ---- | ---- | ---- |
| accept | Desired response format (for example, application/json) | Optional |
| accept-language | Preferred response language (for example, en-US) | Optional |
| accountId | Unique account identifier | Required |
| app-language | Application display language (for example, en) | Optional |
| content-type | Request body format (application/json;charset=UTF-8) | Required |
| referer | Source application name | Optional |
| auth | JWT authentication token | Required |
| IId | Stream or application ID | Required |

## Request Body Parameters

| **Parameter**        | **Description**                                                                                                                   | **Type**                   |
|------------------|-------------------------------------------------------------------------------------------------------------------------------|------------------------|
| `startDate`    | The start date from which records are considered. The format is `yyyy-mm-dd HH24:mm:ss`. Example: `2022-08-25 07:20:15`.      | DateTime, required     |
| `endDate`      | The end date up to which records are considered. The format is `yyyy-mm-dd HH24:mm:ss`. Example: `2022-08-25 18:20:15`.       | DateTime, required     |
| `timeZoneOffset` | The time zone offset. Example values: `-330`, `630`, `-500`. <br>  | number, required       |
| `channels`     | The channels to include. Example: `['rtm', 'voice']`.                                                                         | array[string], optional |
| `selectedFields` | Specifies which data fields to include in the API response. <br> `skills` - Returns the agent’s areas of expertise or capabilities. <br> `customerinfo`-Includes key customer details such as email, first name, last name, phone number, and other details <br> `userleveltags`-Returns tags assigned at the individual user level for categorization or filtering <br> `sessionleveltags`-Returns tags associated with a specific session or conversation instance. | array[string], optional |
| `queues`       | The list of queue IDs in the instance bots.                                                                                   | array[string], optional |

## Sample Response

``` 
{
    "numResults": 14,
    "data": [
        {
            "sessionId": "68dc602b4afb07c72ac5xxxx",
            "channel": "Voice",
            "sessionStartTime": "2025-10-01T04:26:43",
            "sessionEndTime": "2025-10-01T04:26:45",
            "botId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
            "userId": "u-e91234e3-86f8-52af-b24e-deb534bexxxx",
            "channelSpecificUserId": "cs-65bc54d9-abd1-5e36-a210-9e461e98xxxx/dccacd01-483f-4b73-bdc1-5fa2c620xxxx",
            "orgId": "o-7fc14025-8feb-5b1b-889d-4a689f9dxxxx",
            "disconnectingEvent": "Bot Hangup",
            "finalStatus": "BotResolved",
            "customerinfo": {
                "CustomerPhone": "+132136xxxxx",
                "CenterPhone": "+198030xxxxx",
                "Direction": "Inbound",
                "CustomerFirstName": "",
                "CustomerLastName": "",
                "CustomerEmail": ""
            },
            "skills": [],
            "userleveltags": [],
            "sessionleveltags": [
                {
                    "name": "audioCodesCallDisconnect",
                    "value": "1"
                },
                {
                    "name": "callerNumber",
                    "value": "+132136xxxxx"
                },
                {
                    "name": "welcomeMessageTwilio",
                    "value": "1"
                }
            ]
        },
        {
            "sessionId": "68dc633561a7c9a92909xxxx",
            "channel": "Voice",
            "sessionStartTime": "2025-10-01T04:39:41",
            "sessionEndTime": "2025-10-01T04:39:43",
            "botId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
            "userId": "u-26e9f62f-6bdc-54c2-b10f-0ed30f88xxxx",
            "channelSpecificUserId": "cs-65bc54d9-abd1-5e36-a210-9e461e98xxxx/1d0a1233-5b15-4e2d-af15-8eec1c42xxxx",
            "orgId": "o-7fc14025-8feb-5b1b-889d-4a689f9dxxxx",
            "disconnectingEvent": "Bot Hangup",
            "finalStatus": "BotResolved",
            "customerinfo": {
                "CustomerPhone": "+132136xxxxx",
                "CenterPhone": "+198030xxxxx",
                "Direction": "Inbound",
                "CustomerFirstName": "",
                "CustomerLastName": "",
                "CustomerEmail": ""
            },
            "skills": [],
            "userleveltags": [],
            "sessionleveltags": [
                {
                    "name": "audioCodesCallDisconnect",
                    "value": "1"
                },
                {
                    "name": "callerNumber",
                    "value": "+132136xxxxx"
                },
                {
                    "name": "welcomeMessageTwilio",
                    "value": "1"
                }
            ]
        },
           {
            "conversationId": "c-a5bc17c-9657-4ea7-92e5-8b97eabbxxxx",
            "sessionId": "68dc8d9c4afb07c72ac5xxxx",
            "channel": "Voice",
            "skills": [],
            "finalStatus": "CLOSED",
            "disconnectingEvent": "User Hangup",
            "botId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
            "dispositions": [
                "Resolved"
            ],
            "dispositionRemarks": [],
            "metaInfo": {
                "caller": "+13213xxxxx",
                "callee": "+14176xxxxx",
                "callerHost": "54.244.51.2",
                "userId": "u-5828ec60-a890-5c00-9ebd-4c5e7480xxxx",
                "dialedNumber": "+141769xxxxx",
                "agentTransferConfig": {
                    "skillsIds": [],
                    "overrideAgents": false,
                    "overrideValues": [],
                    "assistEvents": {
                        "startEvent": {
                            "botId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
                            "isEnabled": false
                        }
                    },
                    "lastIntentName": "ConnectToAgent",
                    "automationBotId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
                    "accountId": "67654be356840f366e79xxxx"
                },
                "workinghours": {
                    "workdays": "mon,tue,wed,thu,fri",
                    "workstart": "8:00 AM",
                    "workend": "5:00 PM"
                },
                "profImage": "no-avatar",
                "profColour": "#add8e6",
                "jTitle": "",
                "dept": "",
                "activationStatus": "active",
                "firstName": "",
                "lastName": "",
                "orgId": "o-2b41857b-a1cb-5862-8faf-e3d99c3axxxx",
                "_id": "u-5828ec60-a890-5c00-9ebd-4c5e7480xxxx",
                "identities": [
                    {
                        "val": "cs-65bc54d9-abd1-5e36-a210-9e461e98xxxx/940fc503-3eef-420f-84da-7e0fcfdexxxx",
                        "type": "mapped"
                    },
                    {
                        "val": "67654be356840f366e79xxxx/korevg/940fc503-3eef-420f-84da-7e0fcfdexxxx",
                        "type": "mapped"
                    }
                ],
                "transcribeConfig": {
                    "transcribe": true
                }
            },
            "customerinfo": {
                "CustomerPhone": "+132136xxxxx",
                "CenterPhone": "+141769xxxxx",
                "CustomerFirstName": "",
                "CustomerLastName": "",
                "CustomerEmail": "",
                "Direction": "Inbound"
            },
            "sessionStartTime": "2025-10-01T07:40:36",
            "sessionEndTime": "2025-10-01T07:41:56",
            "channelSpecificUserId": "67654be356840f366e7xxxxx/korevg/940fc503-3eef-420f-84da-7e0fcfdxxxxx",
            "userId": "u-5828ec60-a890-5c00-9ebd-4c5e7480xxxx",
            "destinations": [
                {
                    "destinationType": "QueueEntry",
                    "queueId": "qu-e30b539-dd3c-4e10-90a9-354a3e72xxxx",
                    "queueName": "Default Queue",
                    "CallbackOpted": true,
                    "CallbackOptedTime": "2025-10-01T02:10:57.780Z",
                    "userCallbackAcceptTime": "2025-10-01T02:11:24.591Z",
                    "EnterTime": "2025-10-01T07:40:36",
                    "respondingAgent": {
                        "agentId": "u-13b82e29-91a3-5092-a7ba-b92c8527xxxx",
                        "agentNotes": [
                            "The bot initiated an external number agent transfer. However, no additional details or issues were addressed in the conversation."
                        ],
                        "destinationType": "AgentSegment",
                        "status": "Answered",
                        "firstResponseTime": "2025-10-01T07:41:23",
                        "firstResponseDuration": 0,
                        "interactionEndTime": "2025-10-01T07:41:59",
                        "interactionDuration": 36,
                        "afterCallWorkDuration": 4,
                        "afterCallWorkEndTime": "2025-10-01T07:42:04",
                        "email": "john.doe@example.com",
                        "name": "John Doe",
                        "acceptedTime": "2025-10-01T07:41:23",
                        "assignedAt": "2025-10-01T07:40:58"
                    }
                }
            ],
            "userleveltags": [],
            "sessionleveltags": [
                {
                    "name": "audioCodesCallDisconnect",
                    "value": "1"
                },
                {
                    "name": "callerNumber",
                    "value": "+132xxxxx"
                },
                {
                    "name": "voiceAgentTransferStart",
                    "value": "1"
                },
                {
                    "name": "welcomeMessageTwilio",
                    "value": "1"
                }
            ]
        },
      {
            "conversationId": "c-0149c76-6c27-40dd-a882-e0ec25cxxxxx",
            "sessionId": "6911d07426fef75d6549xxxx",
            "channel": "Web/Mobile Client",
            "skills": [],
            "finalStatus": "CLOSED",
            "disconnectingEvent": "Agent Closed",
            "botId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
            "dispositions": [
                "Requires Supervisor Attention"
            ],
            "dispositionRemarks": [
                "El cliente expresó inicialmente su tristeza, pero el bot no pudo encontrar una respuesta y le preguntó si necesitaba algo más. El cliente mencionó entonces que quería transferir dinero, a lo que el bot le preguntó si podía ayudarle en algo más. Tras una breve pausa, el bot agradeció al cliente su espera y lo puso en contacto con un agente. El agente finalizó la conversación, indicando que el problema se había resuelto."
            ],
            "metaInfo": {
                "firstName": "Jane",
                "lastName": "Doe",
                "email": "jane.doe@example.com",
                "phoneNumber": "150551xxxxx",
                "category": "i18n",
                "identities": [
                    {
                        "val": "cs-65bc54d9-abd1-5e36-a210-9e461e98xxxx/eeb8b197-938c-4c1b-933b-3cdfa61522fd38df39c2-d5c7-4194-962a-42e56e66xxxx",
                        "type": "mapped"
                    }
                ],
                "agentTransferConfig": {
                    "overrideAgents": false,
                    "overrideValues": [],
                    "assistEvents": {
                        "startEvent": {
                            "botId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
                            "isEnabled": false
                        }
                    },
                    "automationBotId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
                    "lastIntentName": "transfer money",
                    "dialog_tone": [
                        {
                            "tone_name": "sad",
                            "level": 2.5,
                            "count": 2,
                            "totalLevel": 5
                        },
                        {
                            "tone_name": "joy",
                            "level": -3,
                            "count": 2,
                            "totalLevel": -6
                        }
                    ],
                    "noAgentsFlowId": "cf-346373de-a8e6-5c3e-8387-c9eb75e2xxxx"
                },
                "ipAddress": "115.114.xx.xxx",
                "hostDomain": "https://example.com",
                "os": "Windows"
            },
            "customerinfo": {
                "CustomerPhone": "150551xxxxx",
                "CenterPhone": "",
                "CustomerFirstName": "John",
                "CustomerLastName": "Doe",
                "CustomerEmail": "john.doe@example.com",
                "Direction": "Inbound"
            },
            "sessionStartTime": "2025-11-10T17:15:56",
            "sessionEndTime": "2025-11-10T17:16:24",
            "channelSpecificUserId": "cs-65bc54d9-abd1-5e36-a210-9e461e98xxxx/eeb8b197-938c-4c1b-933b-3cdfa61522fd38df39c2-d5c7-4194-962a-42e56e66xxxx",
            "userId": "u-729677cb-8dc7-5c46-8964-1b54e21bxxxx",
            "destinations": [
                {
                    "destinationType": "QueueEntry",
                    "queueId": "qu-e30b539-dd3c-4e10-90a9-354a3e72xxxx",
                    "queueName": "Default Queue",
                    "CallbackOpted": false,
                    "EnterTime": "2025-11-10T17:16:19",
                    "respondingAgent": {
                        "agentId": "u-13b82e29-91a3-5092-a7ba-b92c8527xxxx",
                        "agentNotes": [
                            "The customer initially expressed sadness but the bot was unable to find an answer and asked if there was anything else it could assist with. The customer then mentioned wanting to transfer money, prompting the bot to ask if it could help further. After a brief pause, the bot thanked the customer for waiting and connected them with an agent. The agent then closed the conversation, indicating that the issue had been addressed.",
                            "El cliente expresó inicialmente su tristeza, pero el bot no pudo encontrar una respuesta y le preguntó si necesitaba algo más. El cliente mencionó entonces que quería transferir dinero, a lo que el bot le preguntó si podía ayudarle en algo más. Tras una breve pausa, el bot agradeció al cliente su espera y lo puso en contacto con un agente. El agente finalizó la conversación, indicando que el problema se había resuelto."
                        ],
                        "destinationType": "AgentSegment",
                        "status": "Answered",
                        "interactionEndTime": "2025-11-10T17:17:00",
                        "interactionDuration": 36,
                        "afterCallWorkDuration": 7,
                        "afterCallWorkEndTime": "2025-11-10T17:17:08",
                        "email": "john.doe@example.com",
                        "name": "John Doe",
                        "acceptedTime": "2025-11-10T17:16:24",
                        "assignedAt": "2025-11-10T17:16:20"
                    }
                }
            ],
            "userleveltags": [],
            "sessionleveltags": []
        },
        {
            "conversationId": "c-12052b7-a438-4275-809c-c6de663axxxx",
            "sessionId": "68dc657eba8a20f3da6bxxxx",
            "channel": "Voice",
            "skills": [],
            "finalStatus": "USER ABANDONED",
            "disconnectingEvent": "User Hangup",
            "botId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
            "dispositions": [],
            "dispositionRemarks": [],
            "metaInfo": {
                "caller": "+132136xxxxx",
                "callee": "+141769xxxxx",
                "callerHost": "54.244.xx.x",
                "userId": "u-d42af172-a6ab-524a-9105-d466ea70xxxx",
                "dialedNumber": "+141769xxxxx",
                "agentTransferConfig": {
                    "skillsIds": [],
                    "overrideAgents": false,
                    "overrideValues": [],
                    "assistEvents": {
                        "startEvent": {
                            "botId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
                            "isEnabled": false
                        }
                    },
                    "lastIntentName": "ConnectToAgent",
                    "automationBotId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
                    "accountId": "67654be356840f366e79xxxx"
                },
                "workinghours": {
                    "workdays": "mon,tue,wed,thu,fri",
                    "workstart": "8:00 AM",
                    "workend": "5:00 PM"
                },
                "profImage": "no-avatar",
                "profColour": "#40e0d0",
                "jTitle": "",
                "dept": "",
                "activationStatus": "active",
                "firstName": "",
                "lastName": "",
                "orgId": "o-2b41857b-a1cb-5862-8faf-e3d99c3axxxx",
                "_id": "u-d42af172-a6ab-524a-9105-d466ea70xxxx",
                "identities": [
                    {
                        "val": "cs-65bc54d9-abd1-5e36-a210-9e461e98xxxx/3e140b70-8814-4e2c-853e-6042e8f6xxxx",
                        "type": "mapped"
                    },
                    {
                        "val": "67654be356840f366e79xxxx/korevg/3e140b70-8814-4e2c-853e-6042e8f6xxxx",
                        "type": "mapped"
                    }
                ],
                "transcribeConfig": {
                    "transcribe": true
                }
            },
            "customerinfo": {
                "CustomerPhone": "+132136xxxxx",
                "CenterPhone": "+141769xxxxx",
                "CustomerFirstName": "",
                "CustomerLastName": "",
                "CustomerEmail": "",
                "Direction": "Inbound"
            },
            "sessionStartTime": "2025-10-01T04:49:26",
            "sessionEndTime": "2025-10-01T04:50:10",
            "channelSpecificUserId": "67654be356840f366e79xxxx/korevg/3e140b70-8814-4e2c-853e-6042e8f6xxxx",
            "userId": "u-d42af172-a6ab-524a-9105-d466ea70xxxx",
            "destinations": [],
            "userleveltags": [],
            "sessionleveltags": [
                {
                    "name": "audioCodesCallDisconnect",
                    "value": "1"
                },
                {
                    "name": "callerNumber",
                    "value": "+132136xxxxx"
                },
                {
                    "name": "voiceAgentTransferStart",
                    "value": "1"
                },
                {
                    "name": "welcomeMessageTwilio",
                    "value": "1"
                }
            ]
        },
         {
            "conversationId": "c-d33a57a-3132-4495-a427-a88b3d62xxxx",
            "sessionId": "68dc60644afb07c72ac5xxxx",
            "channel": "Voice",
            "skills": [],
            "finalStatus": "CLOSED",
            "disconnectingEvent": "Bot Hangup",
            "botId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
            "dispositions": [
                "DROP-OFF"
            ],
            "dispositionRemarks": [
                "-"
            ],
            "metaInfo": {
                "caller": "+132136xxxxx",
                "callee": "+141769xxxxx",
                "callerHost": "54.244.xx.x",
                "userId": "u-40f9b475-82e9-5393-8e0b-20882db0xxxx",
                "dialedNumber": "+141769xxxxx",
                "agentTransferConfig": {
                    "skillsIds": [],
                    "overrideAgents": false,
                    "overrideValues": [],
                    "assistEvents": {
                        "startEvent": {
                            "botId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
                            "isEnabled": false
                        }
                    },
                    "lastIntentName": "ConnectToAgent",
                    "automationBotId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
                    "accountId": "67654be356840f366e79xxxx"
                },
                "workinghours": {
                    "workdays": "mon,tue,wed,thu,fri",
                    "workstart": "8:00 AM",
                    "workend": "5:00 PM"
                },
                "profImage": "no-avatar",
                "profColour": "#2e8b57",
                "jTitle": "",
                "dept": "",
                "activationStatus": "active",
                "firstName": "",
                "lastName": "",
                "orgId": "o-2b41857b-a1cb-5862-8faf-e3d99c3axxxx",
                "_id": "u-40f9b475-82e9-5393-8e0b-20882db0xxxx",
                "identities": [
                    {
                        "val": "cs-65bc54d9-abd1-5e36-a210-9e461e98xxxx/c143b85d-591f-4c78-9f7a-1d9d6b4cxxxx",
                        "type": "mapped"
                    },
                    {
                        "val": "67654be356840f366e79xxxx/korevg/c143b85d-591f-4c78-9f7a-1d9d6b4cxxxx",
                        "type": "mapped"
                    }
                ],
                "transcribeConfig": {
                    "transcribe": true
                }
            },
            "customerinfo": {
                "CustomerPhone": "+132136xxxxx",
                "CenterPhone": "+141769xxxxx",
                "CustomerFirstName": "",
                "CustomerLastName": "",
                "CustomerEmail": "",
                "Direction": "Inbound"
            },
            "sessionStartTime": "2025-10-01T04:27:40",
            "sessionEndTime": "2025-10-01T04:31:58",
            "channelSpecificUserId": "67654be356840f366e79xxxx/korevg/c143b85d-591f-4c78-9f7a-1d9d6b4cxxxx",
            "userId": "u-40f9b475-82e9-5393-8e0b-20882db0xxxx",
            "destinations": [
                {
                    "destinationType": "QueueEntry",
                    "queueId": "qu-e30b539-dd3c-4e10-90a9-354a3e72xxxx",
                    "queueName": "Default Queue",
                    "CallbackOpted": false,
                    "EnterTime": "2025-10-01T04:27:41",
                    "nonRespondingAgents": [
                        {
                            "agentId": "u-e454bed4-1f28-5a19-83bb-b29cc237xxxx",
                            "agentNotes": [],
                            "email": "john.doe@example.com",
                            "name": "John",
                            "assignedAt": "2025-10-01T04:27:41"
                        }
                    ]
                }
            ],
            "userleveltags": [],
            "sessionleveltags": [
                {
                    "name": "audioCodesCallDisconnect",
                    "value": "1"
                },
                {
                    "name": "callerNumber",
                    "value": "+132136xxxxx"
                },
                {
                    "name": "voiceAgentTransferStart",
                    "value": "1"
                },
                {
                    "name": "welcomeMessageTwilio",
                    "value": "1"
                }
            ]
        },
        {
            "conversationId": "c-ebb8b71-1330-43e0-8e14-6358dd59xxxx",
            "sessionId": "68dc3e4a86490d51f20dxxxx",
            "channel": "Voice",
            "skills": [],
            "finalStatus": "CLOSED",
            "disconnectingEvent": "Agent Closed",
            "botId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
            "dispositions": [
                "Requires Supervisor Attention"
            ],
            "dispositionRemarks": [],
            "metaInfo": {
                "userId": "u-9e13de55-bba4-5052-8055-137b5955xxxx",
                "firstName": "John",
                "lastName": "Doe",
                "caller": "+185661xxxxx",
                "callee": "+9195501xxxxx",
                "countryCode": "91",
                "dialedNumber": "+185661xxxxx",
                "endUserNumber": "+9195501xxxxx",
                "agentTransferConfig": {
                    "automationBotId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx"
                }
            },
            "customerinfo": {
                "CustomerPhone": "+9195501xxxxx",
                "CenterPhone": "+185661xxxxx",
                "CustomerFirstName": "John",
                "CustomerLastName": "Doe",
                "CustomerEmail": "",
                "Direction": "Outbound"
            },
            "sessionStartTime": "2025-10-01T02:02:10",
            "sessionEndTime": "2025-10-01T02:03:49",
            "userId": "u-9e13de55-bba4-5052-8055-137b5955xxxx",
            "destinations": [
                {
                    "destinationType": "QueueEntry",
                    "queueId": "qu-e30b539-dd3c-4e10-90a9-354a3e72xxxx",
                    "respondingAgent": {
                        "agentId": "u-e454bed4-1f28-5a19-83bb-b29cc23xxxx",
                        "agentNotes": [],
                        "destinationType": "AgentSegment",
                        "status": "Answered",
                        "firstResponseTime": "2025-10-01T02:02:19",
                        "firstResponseDuration": 8,
                        "interactionEndTime": "2025-10-01T02:02:43",
                        "interactionDuration": 32,
                        "afterCallWorkDuration": 18,
                        "afterCallWorkEndTime": "2025-10-01T02:03:02",
                        "email": "john.doe@example.com",
                        "name": "John Doe",
                        "acceptedTime": "2025-10-01T02:02:11",
                        "assignedAt": "2025-10-01T02:02:10"
                    }
                }
            ],
            "userleveltags": [],
            "sessionleveltags": []
        }
    ]
}

``` 

## Response Parameters

| **Parameter** | **Type and Format** | **Description** | **Example** |
| ---- | ---- | ---- | ---- |
| `conversationId` | type-prefixed-guid | An ID generated for this conversation. | c-7b08889-539d-408d-a3e6-9e6ae059xxxx |
| `sessionId` | internal value | A bot-generated ID for this conversation. | 63bd199c197b3646dadexxxx |
| `channel` | character string | Name of the channel. Values-Web/Mobile Client, System Mail, or Voice. | Web / Mobile Client |
| `sessionStartTime` | YYYY-MM-DDTHH SS | Start time of the session. | 2023-01-10 2:25:54 |
| `sessionEndTime` | YYYY-MM-DDTHH SS | End time of the session. | 2023-01-10 2:25:54 |
| `botId` | type-prefixed-guid | Identifier of the bot involved. | st-ae8470ab-8ecb-51fb-8e13-c87dc66fxxxx |
| `userId` | type-prefixed-guid | A unique identifier for the user involved in the conversation. | u-8413fd99-4ded-5f6d-8c1a-176dc66xxxx |
| `channelSpecificUserId` | no known format | User ID passed by the channel. | `jane.doe@example.com` |
| `orgId` | type-prefixed-guid | The organization ID. | o-5a0da1e4-2df3-5cec-9ee4-af0b2efdxxxx |
| `disconnectingEvent` | character string | The final event leading to the conversation ending. | System Hangup |
| `finalStatus` | character string | Completion status of the conversation. | CLOSED or BotResolved |
| `automationBotIDs` | array | List of automation bots involved in the session. | [ "st-e5c6ae6b-c388-5acd-93b7-bada87a7xxxx"] |
| `dispositions` | array of strings | Disposition assigned to the conversation. | [ "Requires Supervisor Attention"] |
| `dispositionRemarks` | array of strings | Remarks or notes related to the disposition from the agent. | [ "CUSTOMER needs help with Products and Sales. AGENT will connect her with an agent." ] |
| `metaInfo` | object | Contains custom information set by automation. | — |
| `metaInfo.caller` | string | Phone number of the caller. | +132136xxxxx |
| `metaInfo.callee` | string | Phone number of the callee. | +133434xxxxx |
| `metaInfo.callerHost` | string | IP address of the caller. | 54.xxx.xx.2 |
| `metaInfo.userId` | string | Unique identifier of the user. | u-4245d01e-6124-587a-85b2-939fe3cfxxxx |
| `metaInfo.dialedNumber` | string | Number dialed by the caller. | +133434xxxxx |
| `metaInfo.agentTransferConfig` | object | Contains configuration for agent transfer, including skills, bot, and last intent. | — |
| `metaInfo.agentTransferConfig.skillsIds` | array | ID of each skill of the agent handling this conversation. | [ `6834045b2e9b90fa31c8xxxx`, `6834045b2e9b90fa31c8xxxx`] |
| `metaInfo.agentTransferConfig.overrideAgents` | boolean | Indicates whether agent override is enabled. | false |
| `metaInfo.agentTransferConfig.overrideValues` | array | Custom override values for agent transfer. | — |
| `metaInfo.agentTransferConfig.assistEvents` | object | Configuration for assist-related events. | — |
| `metaInfo.agentTransferConfig.assistEvents.startEvent` | object | Configuration details for the assist start event. | — |
| `metaInfo.agentTransferConfig.assistEvents.startEvent.startEvent.botID` | string | Identifier of the bot involved. | st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx |
| `metaInfo.agentTransferConfig.assistEvents.startEvent.startEvent.isEnabled` | boolean | Indicates whether the assist start event is enabled. | false |
| `metaInfo.agentTransferConfig.lastIntentName` | string | Last intent posted to the bot by the user. | Pay Bill |
| `metaInfo.agentTransferConfig.dialog_tone` | array of objects | Dialog tone settings. | — |
| `metaInfo.agentTransferConfig.dialog_tone.tone_name` | string | Name of the detected tone or emotion. | joy |
| `metaInfo.agentTransferConfig.dialog_tone.level` | number | Current intensity level of the tone. | -3 |
| `metaInfo.agentTransferConfig.dialog_tone.count` | integer | The number of times this tone was detected. | 2  |
| `metaInfo.agentTransferConfig.dialog_tone.totalLevel` | number | Cumulative tone intensity across occurrences. | -6 |
| `metaInfo.agentTransferConfig.noAgentsFlowId` | string | Flow ID to be triggered when no agents are available for transfer. | `cf-346373de-a8e6-5c3e-8387-c9eb75e2xxxx` |
| `metaInfo.agentTransferConfig.accountId` | string | Agent account ID for transfer configuration. | `674daf4bc9d17f4dc070xxxx` |
| `metaInfo.ipAddress` | string | IP address from which the user accessed the session. | `103.xxx.xxx.xxx` |
| `metaInfo.hostDomain` | string | Domain of the platform instance handling the interaction. | —  |
| `metaInfo.os` | string | The operating system of the user’s device. | Windows |
| `metaInfo.customerinfo` | object | Contains customer details captured during the session. | — |
| `metaInfo.customerinfo.CustomerPhone` | string | Customer’s phone number. | `1505515XXXX` |
| `metaInfo.customerinfo.CenterPhone` | string | Contact number of the service center. | —  |
| `metaInfo.customerinfo.CustomerFirstName` | string | Customer’s first name. | John |
| `metaInfo.customerinfo.CustomerLastName` | string | Customer’s last name. | Doe |
| `metaInfo.customerinfo.CustomerEmail` | string | Customer’s email address. | `john.doe@example.com` |
| `metaInfo.customerinfo.Direction` | string | Specifies the call direction. | Inbound |
| `metaInfo.workinghours` | object | Defines the agent’s working days and hours. | — |
| `metaInfo.workinghours.workdays` | string | The working days of the agent. | mon,tue,wed,thu,fri |
| `metaInfo.workinghours.workstart` | string | The time when the agent begins accepting calls. | 8:00 AM |
| `metaInfo.workinghours.workend` | string | The time when the agent stops accepting calls. | 5:00 PM |
| `metaInfo.profImage` | string | Profile image of the agent. | no-avatar |
| `metaInfo.profColour` | string | Profile color code. | #ff4500 |
| `metaInfo.jTitle` | string | Job title of the agent. | — |
| `metaInfo.dept` | string | Department of the agent. | — |
| `metaInfo.activationStatus` | String | The activation status of agents. | active |
| `metaInfo.firstName` | string | The first name of the agent. | — |
| `metaInfo.lastName` | string | The last name of the agent. | — |
| `metaInfo.orgId` | string | The organization ID. | `o-2b41857b-a1cb-5862-8faf-e3d99c3axxxx` |
| `metaInfo._id` | string | Internal identifier for the user object. | `u-c1ca58fb-2208-52f8-9f9c-d542316exxxx` |
| `metaInfo.identities` | array of objects | Contains the list of mapped identities for the user. | — |
| `metaInfo.identities.val` | string | Mapped identity value. | `cs-259844d3-7827-5f33-ae7c-9d790e6dxxxx`/`c246a41e-91c1-418f-a4c3-a5d4ad59xxxx` |
| `metaInfo.identities.type` | string | Type of identity mapping. | mapped |
| `metaInfo.transcribeConfig` | object | Configuration for call transcription. | — |
| `metaInfo.transcribeConfig.transcribe` | boolean | Indicates whether transcription is enabled for the session. | true |
| `destinations` | array of objects | One object for each Queue or Agent that the call was transferred to. | — |
| `destinations.destinationType` | string | Destination for any transfer-distinguishes direct-to-agent vs. queue. | QueueEntry |
| `destinations.queueId` | type-prefixed-guid | The internal ID for the Queue. | `qu-123dbe9-c752-464d-a9be-1d0e43b6xxxx` |
| `destinations.queueName` | character string | Name of the queue. | Residential-Sales |
| `destinations.CallbackOpted` | boolean | Indicates whether the customer opted for a callback. | True |
| `destinations.CallbackOptedTime` | string (ISO 8601 datetime) | Timestamp when the customer opted for the callback  (only if CallbackOpted = true). | `2025-09-30T06:34:48.810Z` |
| `destinations.userCallbackAcceptTime` | string (ISO 8601 datetime) | Timestamp when the customer accepted the callback initiated by the agent  (only if CallbackOpted = true). | `2025-09-30T06:35:00.589Z` |
| `destinations.EnterTime` | string (ISO 8601 datetime) | Time at which this conversation entered this queue. | `2023-01-10 2:25:54` |
| `destinations.respondingAgent` | object | Details of the responding agent. | — |
| `destinations.respondingAgent.agentId` | type-prefixed-guid | The internal ID for the agent. | `u-f3a11f62-57d7-5a9f-a071-787650b1xxxx` |
| `destinations.respondingAgent.agentNotes` | array of strings | Notes provided by the agent. | ["CUSTOMER has a problem with Products and Sales. She needs an agent to help her."] |
| `destinations.respondingAgent.destinationType` | string | Type of agent destination. | AgentSegment |
| `destinations.respondingAgent.status` | string | Status of the conversation with this respondingAgent. | Answered |
| `destinations.respondingAgent.firstResponseTime` | YYYY-MM-DDTHH SS | The time at which this agent first responded. | `2023-01-10 2:25:54` |
| `destinations.respondingAgent.firstResponseDuration` | integer | Duration in seconds, from Agent acceptance to first response. | 20 |
| `destinations.respondingAgent.interactionEndTime` | YYYY-MM-DDTHH SS | The time at which interaction with this agent ended. | `2023-01-10 2:25:54` |
| `destinations.respondingAgent.interactionDuration` | integer | Duration in seconds from Agent acceptance to last utterance. | 51 |
| `destinations.respondingAgent.afterCallWorkDuration` | integer | Duration in seconds of post-call work of this agent. | 8 |
| `destinations.respondingAgent.afterCallWorkEndTime` | YYYY-MM-DDTHH SS | Time when this agent completed post-call work. | `2023-01-10 2:25:54` |
| `destinations.respondingAgent.email` | string | Agent’s email address. | `jane.doe@example.com` |
| `destinations.respondingAgent.name`| character string | Agent’s name. | jane doe |
| `destinations.respondingAgent.assignedAt` | YYYY-MM-DDTHH SS | Time at which this contact was assigned to this Agent. | `2023-01-10 2:25:54` |
| `destinations.respondingAgent.acceptedTime` | YYYY-MM-DDTHH SS | Time at which this Agent accepted the contact. | `2023-01-10 2:25:54` |
| `destinations.nonRespondingAgents` | array of objects | Details of agents assigned, but didn't respond. | — |
| `destinations.nonRespondingAgents.agentId` | String | Unique identifier ofa  non-responding agent. | `u-3ea001b4-664a-58b6-8108-b8bca375xxxx` |
| `destinations.nonRespondingAgents.agentNotes` | array of Strings | Notes or remarks for the interaction. | The customer initiated a conversation with the bot for various requests, including connecting to an agent. |
| `destinations.nonRespondingAgents.destinationType` | string | Segment type of the interaction. | AgentSegment |
| `destinations.nonRespondingAgents.email` | string | Email address of the agent. | `jane.doe@example.com` |
| `destinations.nonRespondingAgents.name` | string | Full name of the assigned agent. | Jane doe |
| `destinations.nonRespondingAgents.assignedAt` | string (ISO 8601 datetime) | Timestamp when the agent was assigned. | 2025-10-01T13:08:55 |
| `destinations.nonRespondingAgents.nonResponseEvent` | string | The reason the agent didn't respond. | Ignored |
| `userleveltags` | array of tag objects | All user-level tags associated with this session. | {"name": "accountnum","value": "121413243141234132"} |
| `sessionleveltags` | array of tag objects | All session-level tags associated with this session. | {"name": "audioCodesCallDisconnect","value": "1"} |