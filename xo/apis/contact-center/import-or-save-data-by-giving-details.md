--8<-- "includes/ccai-api-back-link.md"

# Import data by accountId and orgId

To save/import data which is one of (skillsGroups, Queues, StandardResponses, Waiting Experience) by giving details with `accountId` and `orgId`.

!!! Note

    This version will be deprecated soon. Please use [Version 2](./import-or-save-data-by-giving-details-v2.md) of this API.

| **Parameter**    | **Description**                                                            | **Type**      |
|--------------|------------------------------------------------------------------------|-----------|
| **Method**       | POST                                                                   |           |
| **Endpoint**     | `http://{{host}}/agentassist/api/public/analytics/{{botId}}/exportSmartAssistFunctionalities` |           |
| **Content Type** | `application/json`                                                     |           |
| **Authorization**| `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |           |
| **API Scope**    | SmartAssist Import and Export Feature                                   |           |

## Sample Request

```
curl --location 'http://{{host}}/agentassist/api/v1/public/{{botId}}/queues' \
--header 'accept: application/json' \
--header 'accountId: {{accountId}}' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--data '{
    "isActive": true,
    "isDefault": false,
    "name": "11111122",
    "isAdvancedRoutingEnabled": true,
    "description": "queue2",
    "orgId": "o-a5f1f5a9-2244-5bc7-adf8-bd5e6519xxxx",
    "hoursOfOperation": {
        "id": "649bdd219d557c241ad0xxxx",
        "name": ""
    },
    "agents": [
        {
            "userId": "u-be1f62a6-1ea6-59eb-8cae-831edd25xxxx",
            "isPreferredAgent": true,
            "aId": "a-ee9919b-9343-48eb-a951-1085e06cxxxx",
            "name": "John Doe",
            "id": ""
        }
    ],
    "skills": [{
"id": "123",
"name": "",
"isExpireEnabled": true,
"expireTime": {
"min": "1",
"sec": "0"
}
}],
    "agentGroups": [],
    "advancedSettings": {
        "preferredAgentTimeout": {
        
        },
        "isSkillMatchEnabled": true,
        "isAffinityMatchEnabled": true
    },
    "maxTimeout": {
        "min": 10,
        "sec": 0
    }
}'
```

## Body Parameters

| **PARAMETER**         | **DESCRIPTION**                            | **TYPE**          |
|-------------------|----------------------------------------|---------------|
| Data              | The data that is to be imported.       | string, required |
| MetaData.orgId   | This field should have an orgId.       | string, required |
| MetaData.accountId | This field should have an accountId.  | string, required |
| MetaData.type     | This field should have a type.         | string, required |
| MetaData.userId   | This field should have a userId.       | string, required |

## Sample Response

```
[
    {
        "status": "ACTIVE",
        "isDefault": true,
        "lname": "default waiting experience.",
        "configuration": {
            "description": "If no other wait experiences are defined or if contacts do not meet the conditions for other wait experiences, they will land into the default wait experience",
            "name": "Default Waiting Experience.",
            "routingRules": []
        },
        "callExperience": {
            "initialMessageSettings": {
                "locale": [
                    {
                        "message": "Please hold while I find the right agent for you.",
                        "language": "en",
                        "isActive": true
                    }
                ]
            },
            "agentTransferMessageSettings": {
                "locale": [
                    {
                        "message": "You are being transferred to another agent's queue. Please stand by.",
                        "language": "en",
                        "isActive": true
                    }
                ]
            },
            "holdAudio": {
                "name": "CantinaBand",
                "id": "667db6f93e9a1338e2cbxxxx"
            },
            "periodicMessageSettings": {
                "duration": 30,
                "order": "RANDOM",
                "play_style": "LOOPED",
                "messages": [
                    {
                        "order": 1,
                        "locale": [
                            {
                                "message": "All agents are currently busy with other customers. Your call is very important to us. Please continue to hold as I find the next available agent.",
                                "language": "en",
                                "isActive": true
                            }
                        ]
                    },
                    {
                        "order": 2,
                        "locale": [
                            {
                                "message": "All agents are currently busy. Please continue to hold for the next available agent.",
                                "language": "en",
                                "isActive": true
                            }
                        ]
                    },
                    {
                        "order": 3,
                        "locale": [
                            {
                                "message": "I apologize for the wait. All agents are busy with other customers. Please hold for the next available agent.",
                                "language": "en",
                                "isActive": true
                            }
                        ]
                    }
                ]
            },
            "chatDeflectionSettings": {
                "toneMap": 1,
                "estimatedWaitTime": 5,
                "timeToDeflect": 0.5,
                "locale": [
                    {
                        "message": "Rather than waiting for a voice agent, it might be much faster to get an agent on chat to help you. If you would like to switch to chat, press 1 anytime during your wait and i can help you with that.",
                        "language": "en",
                        "isActive": true
                    }
                ]
            },
            "callBackSettings": {
                "toneMap": 2,
                "estimatedWaitTime": 10,
                "timeToCallBack": 1,
                "operationType": "OFFER",
                "locale": [
                    {
                        "message": "Looks like it might take a while for an agent to become available. If you prefer, we could hold your place in the queue and call you back as soon as an agent becomes available. To choose the call back option, press 2 at anytime during your wait.",
                        "language": "en",
                        "isActive": true
                    }
                ]
            },
            "voiceMailSettings": {
                "locale": [
                    {
                        "message": "",
                        "language": "en",
                        "isActive": true
                    }
                ]
            },
            "initialMessageEnabled": false,
            "agentTransferMessageEnabled": true,
            "periodicMessageEnabled": true,
            "chatDeflectionEnabled": true,
            "callBackEnabled": true,
            "voiceMailEnabled": false
        },
        "chatExperience": {
            "initialMessageSettings": {
                "locale": [
                    {
                        "message": "Please hold while I find the right agent for you",
                        "language": "en",
                        "isActive": true
                    }
                ]
            },
            "agentTransferMessageSettings": {
                "locale": [
                    {
                        "message": "You are being transferred to another agent's queue. Please stand by.",
                        "language": "en",
                        "isActive": true
                    }
                ]
            },
            "periodicMessageSettings": {
                "duration": 10,
                "order": "RANDOM",
                "play_style": "LOOPED",
                "messages": [
                    {
                        "order": 1,
                        "locale": [
                            {
                                "message": "All our agents are currently busy. Please wait while we get the next available agent. Your position in the queue is {{queue.position}}",
                                "language": "en",
                                "isActive": true
                            }
                        ]
                    },
                    {
                        "order": 2,
                        "locale": [
                            {
                                "message": "All our agents are currently busy. Please wait while we get the next available agent. Your estimated wait time is {{queue.waitTime}} min.",
                                "language": "en",
                                "isActive": true
                            }
                        ]
                    },
                    {
                        "order": 3,
                        "locale": [
                            {
                                "message": "We apologize for the wait. All our agents are busy. Please wait while we get the next available agent.You are in {{queue.position}} position.Your estimated wait time is {{queue.waitTime}} min",
                                "language": "en",
                                "isActive": true
                            }
                        ]
                    }
                ]
            },
            "initialMessageEnabled": true,
            "agentTransferMessageEnabled": true,
            "periodicMessageEnabled": true
        },
        "updatedBy": "u-da9ca787-797d-53bf-9311-44fe23ffxxxx",
        "createdByAId": "a-48e9755-03b2-4751-81a6-15382c45xxxx",
        "iId": "st-9a5e4e7d-f540-5cb3-83ed-639cdc4dxxxx",
        "updatedByAId": "a-48e9755-03b2-4751-81a6-15382c45xxxx",
        "id": "we-c377680-66c0-480d-a76d-3d25b321xxxx",
        "agentGroups": [],
        "agents": []
    },
    {
        "status": "ACTIVE",
        "isDefault": false,
        "configuration": {
            "name": "CustomWaitingExperience",
            "description": "CustomWaitingExperience",
            "routingRules": [
                {
                    "steps": [
                        {
                            "values": [
                                "6380a0d4e855be638213xxxx"
                            ],
                            "entity": "6380a0d4e855be638213xxxx",
                            "order": 1,
                            "operator": "OR"
                        }
                    ],
                    "operator": "AND",
                    "order": 1
                }
            ]
        },
        "callExperience": {
            "initialMessageSettings": {
                "locale": [
                    {
                        "isActive": true,
                        "language": "en",
                        "message": "Please hold while I find the right agent for you."
                    },
                    {
                        "isActive": false,
                        "language": "es",
                        "message": ""
                    },
                    {
                        "isActive": false,
                        "language": "ar",
                        "message": ""
                    }
                ]
            },
            "agentTransferMessageSettings": {
                "locale": []
            },
            "holdAudio": {
                "name": "SmartAssist Default Hold Music",
                "id": "62323a29fa84b5264a3bxxxx"
            },
            "periodicMessageSettings": {
                "duration": 10,
                "order": "RANDOM",
                "play_style": "LOOPED",
                "messages": [
                    {
                        "order": 0,
                        "locale": [
                            {
                                "language": "en",
                                "isActive": true,
                                "message": "Please hold while I find the right agent for you."
                            },
                            {
                                "language": "es",
                                "isActive": false,
                                "message": ""
                            },
                            {
                                "language": "ar",
                                "isActive": false,
                                "message": ""
                            }
                        ]
                    }
                ]
            },
            "chatDeflectionSettings": {
                "toneMap": 1,
                "estimatedWaitTime": 10,
                "timeToDeflect": 5,
                "locale": [
                    {
                        "isActive": true,
                        "language": "en",
                        "message": "Rather than waiting for a voice agent, it might be much faster to get an agent on chat to help you. If you would like to switch to chat, press 1 anytime during your wait and i can help you with that."
                    },
                    {
                        "isActive": false,
                        "language": "es",
                        "message": ""
                    },
                    {
                        "isActive": false,
                        "language": "ar",
                        "message": ""
                    }
                ]
            },
            "callBackSettings": {
                "toneMap": 2,
                "estimatedWaitTime": 10,
                "timeToCallBack": 10,
                "locale": [
                    {
                        "isActive": true,
                        "language": "en",
                        "message": "Looks like it might take a while for an agent to become available. If you prefer, we could hold your place in the queue and call you back as soon as an agent becomes available. To choose the call back option, press 2 at anytime during your wait."
                    },
                    {
                        "isActive": false,
                        "language": "es",
                        "message": ""
                    },
                    {
                        "isActive": false,
                        "language": "ar",
                        "message": ""
                    }
                ],
                "operationType": "OFFER"
            },
            "voiceMailSettings": {
                "toneMap": 3,
                "callWaitingDurationEnabled": false,
                "callWaitingDuration": 20,
                "maxQueuePositionEnabled": false,
                "maxQueuePosition": 6,
                "estimatedWaitTimeEnabled": false,
                "estimatedWaitTime": 25,
                "locale": [
                    {
                        "isActive": true,
                        "language": "en",
                        "message": "Looks like it might take a while for an agent to become available. If you prefer, you may leave a voicemail that will be assigned to an agent. To choose to leave a voicemail press 3 at anytime during your wait."
                    },
                    {
                        "isActive": false,
                        "language": "es",
                        "message": ""
                    },
                    {
                        "isActive": false,
                        "language": "ar",
                        "message": ""
                    }
                ],
                "operationType": "OFFER"
            },
            "initialMessageEnabled": true,
            "periodicMessageEnabled": true,
            "chatDeflectionEnabled": false,
            "callBackEnabled": false,
            "voiceMailEnabled": false
        },
        "chatExperience": {
            "initialMessageSettings": {
                "locale": [
                    {
                        "isActive": true,
                        "language": "en",
                        "message": "Please hold while I find the right agent for you."
                    },
                    {
                        "isActive": false,
                        "language": "es",
                        "message": ""
                    },
                    {
                        "isActive": false,
                        "language": "ar",
                        "message": ""
                    }
                ]
            },
            "agentTransferMessageSettings": {
                "locale": []
            },
            "periodicMessageSettings": {
                "duration": 10,
                "order": "RANDOM",
                "play_style": "LOOPED",
                "messages": [
                    {
                        "order": 1,
                        "locale": [
                            {
                                "language": "en",
                                "isActive": true,
                                "message": "Please hold while I find the right agent for you."
                            },
                            {
                                "language": "es",
                                "isActive": false,
                                "message": ""
                            },
                            {
                                "language": "ar",
                                "isActive": false,
                                "message": ""
                            }
                        ]
                    }
                ]
            },
            "initialMessageEnabled": true,
            "periodicMessageEnabled": true
        },
        "lname": "doe",
        "iId": "st-9a5e4e7d-f540-5cb3-83ed-639cdc4dxxxx",
        "createdByAId": "a-48e9755-03b2-4751-81a6-15382c4xxxx",
        "id": "we-d7bb728-54b3-4c5e-b982-bb31e06axxxx",
        "agentGroups": [],
        "agents": []
    }
]
```