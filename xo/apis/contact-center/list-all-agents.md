--8<-- "includes/ccai-api-back-link.md"

# List All Agents

To retrieve the list of all agents with the given `streamId`.

| **Method**       | GET                                                     |
|--------------|---------------------------------------------------------|
| **Endpoint**     | `https://smartassist.kore.ai/agentassist/api/v1/public/{streamId}/organizations/{orgId}/agents?page=1&includeQueues=True` |
| **Content Type** | `application/json`                                      |
| **Authorization**| `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**    | SmartAssist Analytics                                   |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                                             | **TYPE**          |
|-----------|-------------------------------------------------------------------------|---------------|
| host      | Environment URL, for example, `https://platform.kore.ai`               | string, required |
| streamId     | botId or streamId. You can get it from the App Settings page. | string, required |
| orgId     | The organization Id.                                                    | string, required |

## Query Parameters

| **PARAMETER**      | **DESCRIPTION**                            | **TYPE**           |
|----------------|----------------------------------------|----------------|
| page           | The page number to return. Default is 1. | integer, optional |
| includeQueues  | Whether to include queues in the response. | boolean, optional |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/organizations/{{orgId}}/agents?page=1&includeQueues=True' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}'
--header 'accountId: {{YOUR_accountId}}'
```

## Sample Response

```
{
    "results": [
        {
            "status": "ACTIVE",
            "userId": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
            "orgId": "o-0b9c4fa7-6f16-5605-abb7-62c46bf3xxxx",
            "accountId": "6201eaad257a163e989axxxx",
            "agentGroups": [
                {
                    "groupId": "ag-b6a6178-e35e-47cc-9a40-900956c0xxxx",
                    "accessLevel": "full",
                    "role": "manager",
                    "groupName": "Default Group"
                },
                {
                    "groupId": "ag-30ecdc8-19d2-40e8-a0b9-e9387319xxxx",
                    "accessLevel": "full",
                    "role": "manager",
                    "groupName": "New Group"
                }
            ],
            "canSupportChat": true,
            "maxChatSupport": 5,
            "chatLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": true,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": true,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "canSupportVoice": true,
            "voiceLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": true,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": true,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "createdBy": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
            "onlineStatus": "Offline",
            "onlineStatusType": "OFFLINE",
            "hoursOfOperationId": "6201ead21e06473c153cxxxx",
            "roleId": "6201eaad257a163e989axxxx",
            "createdAt": "2022-02-08T04:00:19.156Z",
            "updatedAt": "2023-05-11T07:29:25.278Z",
            "lastOnlineAt": "2023-05-11T07:29:25.278Z",
            "desktopLayouts": [
                {
                    "isDefault": false,
                    "id": "ly-ca5231e-9b44-4b39-ac8d-0b36202axxxx"
                },
                {
                    "isDefault": true,
                    "id": "ly-92d92b7-4798-419a-a719-07aab1a6xxxx"
                },
                {
                    "isDefault": false,
                    "id": "ly-b0ed0dc-7dec-4d7c-8933-78797a22xxxx"
                }
            ],
            "attachmentsEnabled": true,
            "emojisEnabled": true,
            "isAccountOwner": true,
            "sipURI": "sip:supportuat94@smartassist-agent-np.kore.ai:5060",
            "id": "a-1353078-d362-4d5e-95ed-554056e7xxxx",
            "emailId": "john.doe@domain.com",
            "firstName": "John",
            "lastName": "Doe",
            "nickName": "John",
            "phoneNumber": "221421421421",
            "profImage": "no-avatar",
            "skills": [
                {
                    "userId": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
                    "skillId": "641847bf731b5d4baa2dxxxx",
                    "proficiencyLevel": "average",
                    "name": "Blue Skill",
                    "skillGroupId": "6201ead21e06473c153cxxxx",
                    "skillGroupName": "Default SkillGroup",
                    "skillGroupColor": "#D2000D",
                    "id": "641847bf731b5d4baa2dxxxx"
                },
                {
                    "userId": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
                    "skillId": "641847d1731b5d4baa2dxxxx",
                    "proficiencyLevel": "average",
                    "name": "Red Skill",
                    "skillGroupId": "6201ead21e06473c153cxxxx",
                    "skillGroupName": "Default SkillGroup",
                    "skillGroupColor": "#D2000D",
                    "id": "641847d1731b5d4baa2dxxxx"
                },
                {
                    "skillId": "6201ead31e06473c153cxxxx",
                    "userId": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
                    "proficiencyLevel": "expert",
                    "name": "Default Skill",
                    "skillGroupId": "6201ead21e06473c153cxxxx",
                    "skillGroupName": "Default SkillGroup",
                    "skillGroupColor": "#D2000D",
                    "id": "6201ead31e06473c153cxxxx"
                }
            ],
            "queues": [
                {
                    "name": "Default Queue",
                    "description": "queue description",
                    "agents": [
                        {
                            "isPreferredAgent": true,
                            "userId": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx"
                        }
                    ],
                    "id": "qu-53c78e9-d249-477e-a472-9426e25dxxxx"
                },
                {
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx"
                        }
                    ],
                    "name": "Test Queue",
                    "description": "121242",
                    "id": "qu-3066a40-5b85-4ee5-9a8e-6bd8002xxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx"
                        }
                    ],
                    "name": "Test Queue 6090",
                    "id": "qu-b3b13c5-271a-4599-ab38-9e44acc4xxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx"
                        }
                    ],
                    "name": "Sample Queue4",
                    "id": "qu-d937893-c788-45d0-9da8-23490287xxxx"
                }
            ],
            "role": "Administrator"
        },
        {
            "status": "ACTIVE",
            "hoursOfOperationId": "6201ead21e06473c153cxxxx",
            "canSupportChat": true,
            "maxChatSupport": 20,
            "roleId": "6389e47741afba5c08bfxxxx",
            "chatLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                }
            ],
            "canSupportVoice": true,
            "voiceLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                }
            ],
            "userId": "u-70b19d34-e795-5059-b687-484c0bcxxxx",
            "accountId": "6201eaad257a163e989axxxx",
            "createdBy": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
            "orgId": "o-0b9c4fa7-6f16-5605-abb7-62c46bf3xxxx",
            "agentGroups": [
                {
                    "groupId": "ag-b6a6178-e35e-47cc-9a40-900956c0xxxx",
                    "role": "manager",
                    "accessLevel": "view",
                    "groupName": "Default Group"
                }
            ],
            "createdAt": "2022-03-15T12:40:33.177Z",
            "updatedAt": "2023-03-06T05:55:20.517Z",
            "onlineStatus": "Offline",
            "onlineStatusType": "OFFLINE",
            "lastOnlineAt": "2023-03-06T05:55:20.517Z",
            "attachmentsEnabled": true,
            "emojisEnabled": true,
            "id": "a-898331c-c9e6-4918-9501-6c262619xxxx",
            "emailId": "jane.doe@domain.com",
            "firstName": "Jane",
            "lastName": "Doe",
            "nickName": "Jane",
            "phoneNumber": "9000011111",
            "profImage": "no-avatar",
            "skills": [],
            "queues": [
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-70b19d34-e795-5059-b687-484c0bc1xxxx"
                        }
                    ],
                    "name": "Test Queue 6090",
                    "id": "qu-b3b13c5-271a-4599-ab38-9e44accxxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-70b19d34-e795-5059-b687-484c0bc1xxxx
                        }
                    ],
                    "name": "Sample Queue4",
                    "id": "qu-d937893-c788-45d0-9da8-23490287xxxx"
                }
            ],
            "role": "Agent"
        },
        {
            "status": "ACTIVE",
            "hoursOfOperationId": "6201ead21e06473c153cxxxx",
            "canSupportChat": true,
            "maxChatSupport": 5,
            "roleId": "6389e47741afba5c08bfxxxx",
            "chatLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                }
            ],
            "canSupportVoice": true,
            "voiceLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                }
            ],
            "userId": "u-16a7d3ce-1545-51a0-aa34-ce9de873xxxx",
            "accountId": "6201eaad257a163e989xxxx",
            "createdBy": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
            "orgId": "o-0b9c4fa7-6f16-5605-abb7-62c46bf3xxxx",
            "agentGroups": [
                {
                    "groupId": "ag-b6a6178-e35e-47cc-9a40-900956c0xxxx",
                    "role": "agent",
                    "groupName": "Default Group"
                }
            ],
            "createdAt": "2022-03-22T05:12:26.645Z",
            "updatedAt": "2023-03-06T05:55:20.583Z",
            "onlineStatus": "Offline",
            "onlineStatusType": "OFFLINE",
            "lastOnlineAt": "2023-03-06T05:55:20.583Z",
            "attachmentsEnabled": true,
            "emojisEnabled": true,
            "id": "a-9c4b773-14ba-4295-8cc1-569036a8xxxx",
            "emailId": "john.smith@domain.com",
            "firstName": "John",
            "lastName": "Smith",
            "nickName": "John",
            "phoneNumber": "12343112352",
            "profImage": "no-avatar",
            "skills": [
                {
                    "skillId": "6201ead31e06473c153cxxxx",
                    "userId": "u-16a7d3ce-1545-51a0-aa34-ce9de87xxxx",
                    "proficiencyLevel": "expert",
                    "name": "Default Skill",
                    "skillGroupId": "6201ead21e06473c153cxxxx",
                    "skillGroupName": "Default SkillGroup",
                    "skillGroupColor": "#D2000D",
                    "id": "6201ead31e06473c153xxxx"
                }
            ],
            "queues": [
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-16a7d3ce-1545-51a0-aa34-ce9de873xxxx"
                        }
                    ],
                    "name": "Test Queue 6090",
                    "id": "qu-b3b13c5-271a-4599-ab38-9e44acc4xxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-16a7d3ce-1545-51a0-aa34-ce9de873xxxx"
                        }
                    ],
                    "name": "Sample Queue4",
                    "id": "qu-d937893-c788-45d0-9da8-23490287xxxx"
                }
            ],
            "role": "Agent"
        },
        {
            "status": "ACTIVE",
            "hoursOfOperationId": "6201ead21e06473c153cxxxx",
            "canSupportChat": true,
            "maxChatSupport": 5,
            "roleId": "6389e47741afba5c08bxxxx",
            "chatLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                }
            ],
            "canSupportVoice": true,
            "voiceLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                }
            ],
            "userId": "u-1a97d394-5cba-5c8b-93be-599c548dxxxx",
            "accountId": "6201eaad257a163e989axxxx",
            "createdBy": "u-c8a51563-bae4-5730-bc2e-4a83889xxxx",
            "orgId": "o-0b9c4fa7-6f16-5605-abb7-62c46bfxxxx",
            "agentGroups": [
                {
                    "groupId": "ag-b6a6178-e35e-47cc-9a40-900956c0xxxx",
                    "role": "agent",
                    "groupName": "Default Group"
                }
            ],
            "createdAt": "2022-05-31T12:56:04.376Z",
            "updatedAt": "2023-03-06T05:55:20.610Z",
            "onlineStatus": "Offline",
            "onlineStatusType": "OFFLINE",
            "lastOnlineAt": "2023-03-06T05:55:20.610Z",
            "attachmentsEnabled": true,
            "emojisEnabled": true,
            "id": "a-397ca96-3c55-4b85-ab36-2b707d2xxxx",
            "emailId": "clark.kent@domain.com",
            "firstName": "Clark",
            "lastName": "Kent",
            "nickName": "Clark",
            "phoneNumber": "9000022222",
            "profImage": "no-avatar",
            "skills": [
                {
                    "skillId": "6201ead31e06473c153xxxxx",
                    "userId": "u-1a97d394-5cba-5c8b-93be-599c548xxxx",
                    "proficiencyLevel": "expert",
                    "name": "Default Skill",
                    "skillGroupId": "6201ead21e06473c153cxxxx",
                    "skillGroupName": "Default SkillGroup",
                    "skillGroupColor": "#D2000D",
                    "id": "6201ead31e06473c153xxxx"
                }
            ],
            "queues": [
                {
                    "name": "Default Queue",
                    "description": "queue description",
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-1a97d394-5cba-5c8b-93be-599c548dxxxx"
                        }
                    ],
                    "id": "qu-53c78e9-d249-477e-a472-9426e25dxxxx"
                },
                {
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-1a97d394-5cba-5c8b-93be-599c548dxxxx"
                        }
                    ],
                    "name": "Test Queue",
                    "description": "121242",
                    "id": "qu-3066a40-5b85-4ee5-9a8e-6bd80028xxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-1a97d394-5cba-5c8b-93be-599c548dxxxx"
                        }
                    ],
                    "name": "Test Queue 6090",
                    "id": "qu-b3b13c5-271a-4599-ab38-9e44acc4xxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-1a97d394-5cba-5c8b-93be-599c548dxxxx"
                        }
                    ],
                    "name": "Sample Queue4",
                    "id": "qu-d937893-c788-45d0-9da8-23490287xxxx"
                }
            ],
            "role": "Agent"
        },
        {
            "status": "ACTIVE",
            "hoursOfOperationId": "6201ead21e06473c153cxxxx",
            "canSupportChat": true,
            "maxChatSupport": 5,
            "roleId": "6389e47741afba5c08bfxxxx",
            "chatLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "canSupportVoice": true,
            "voiceLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "userId": "u-fd23bb5e-9d3b-50c6-83d0-a73857d9xxxx",
            "accountId": "6201eaad257a163e989axxxx",
            "createdBy": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
            "orgId": "o-0b9c4fa7-6f16-5605-abb7-62c46bf3xxxx",
            "agentGroups": [
                {
                    "groupId": "ag-b6a6178-e35e-47cc-9a40-900956c0xxxx",
                    "role": "manager",
                    "accessLevel": "full",
                    "groupName": "Default Group"
                }
            ],
            "createdAt": "2022-05-31T14:47:14.819Z",
            "updatedAt": "2023-05-10T16:04:30.609Z",
            "onlineStatus": "Offline",
            "onlineStatusType": "OFFLINE",
            "lastOnlineAt": "2023-05-10T16:04:30.608Z",
            "desktopLayouts": [
                {
                    "isDefault": true,
                    "id": "ly-ca5231e-9b44-4b39-ac8d-0b36202axxxx"
                },
                {
                    "isDefault": false,
                    "id": "ly-4c5be1d-6ca9-49ac-ac54-578e0e09xxxx"
                },
                {
                    "isDefault": false,
                    "id": "ly-9e304bb-cb55-443e-96ab-14640b75xxxx"
                }
            ],
            "attachmentsEnabled": true,
            "emojisEnabled": true,
            "id": "a-5978284-a164-41d2-b1d5-b22b1d91xxxx",
            "emailId": "lois.lane@domain.com",
            "firstName": "Lois",
            "lastName": "Lane",
            "nickName": "LLane",
            "phoneNumber": "12353673712",
            "profImage": "no-avatar",
            "skills": [
                {
                    "skillId": "6201ead31e06473c153cxxxx",
                    "userId": "u-fd23bb5e-9d3b-50c6-83d0-a73857d9xxxx",
                    "proficiencyLevel": "expert",
                    "name": "Default Skill",
                    "skillGroupId": "6201ead21e06473c153cxxxx",
                    "skillGroupName": "Default SkillGroup",
                    "skillGroupColor": "#D2000D",
                    "id": "6201ead31e06473c153cxxxx"
                }
            ],
            "queues": [
                {
                    "name": "Default Queue",
                    "description": "queue description",
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-fd23bb5e-9d3b-50c6-83d0-a73857d9xxxx"
                        }
                    ],
                    "id": "qu-53c78e9-d249-477e-a472-9426e25xxxx"
                },
                {
                    "agents": [
                        {
                            "isPreferredAgent": true,
                            "userId": "u-fd23bb5e-9d3b-50c6-83d0-a73857d9xxxx"
                        }
                    ],
                    "name": "Test Queue",
                    "description": "121242",
                    "id": "qu-3066a40-5b85-4ee5-9a8e-6bd80028xxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-fd23bb5e-9d3b-50c6-83d0-a73857d9xxxx"
                        }
                    ],
                    "name": "Sample Queue4",
                    "id": "qu-d937893-c788-45d0-9da8-23490287xxxx"
                }
            ],
            "role": "Agent"
        },
        {
            "status": "ACTIVE",
            "canSupportChat": true,
            "maxChatSupport": 5,
            "roleId": "6389e47741afba5c08bfxxxx",
            "chatLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "canSupportVoice": true,
            "voiceLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "desktopLayouts": [],
            "userId": "u-13d6ff42-13ae-5f6c-a430-c46ad25cxxxx",
            "accountId": "6201eaad257a163e989xxxx",
            "createdBy": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
            "orgId": "o-0b9c4fa7-6f16-5605-abb7-62c46bf3xxxx",
            "agentGroups": [
                {
                    "groupId": "ag-b6a6178-e35e-47cc-9a40-900956c0xxxx",
                    "role": "agent",
                    "groupName": "Default Group"
                }
            ],
            "lastOnlineAt": "2023-03-06T05:55:20.546Z",
            "createdAt": "2022-10-19T09:34:17.290Z",
            "updatedAt": "2023-03-06T05:55:20.546Z",
            "onlineStatus": "Offline",
            "onlineStatusType": "OFFLINE",
            "attachmentsEnabled": true,
            "emojisEnabled": true,
            "id": "a-4088962-3642-40ae-88dc-c578d48cxxxx",
            "emailId": "henry.higgins@domain.com",
            "firstName": "Henry",
            "lastName": "Higgins",
            "nickName": "Henry",
            "phoneNumber": "121212124151",
            "profImage": "no-avatar",
            "skills": [
                {
                    "skillId": "6201ead31e06473c153cxxxx",
                    "userId": "u-13d6ff42-13ae-5f6c-a430-c46ad25xxxx",
                    "proficiencyLevel": "expert",
                    "name": "Default Skill",
                    "skillGroupId": "6201ead21e06473c153cxxxx",
                    "skillGroupName": "Default SkillGroup",
                    "skillGroupColor": "#D2000D",
                    "id": "6201ead31e06473c153c5c99"
                }
            ],
            "queues": [
                {
                    "name": "Default Queue",
                    "description": "queue description",
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-13d6ff42-13ae-5f6c-a430-c46ad25cxxxx"
                        }
                    ],
                    "id": "qu-53c78e9-d249-477e-a472-9426e25dxxxx"
                },
                {
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-13d6ff42-13ae-5f6c-a430-c46ad25cxxxx"
                        }
                    ],
                    "name": "Test Queue",
                    "description": "121242",
                    "id": "qu-3066a40-5b85-4ee5-9a8e-6bd80028xxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-13d6ff42-13ae-5f6c-a430-c46ad25cxxxx"
                        }
                    ],
                    "name": "Test Queue 6090",
                    "id": "qu-b3b13c5-271a-4599-ab38-9e44acc4xxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-13d6ff42-13ae-5f6c-a430-c46ad25cxxxx"
                        }
                    ],
                    "name": "Sample Queue4",
                    "id": "qu-d937893-c788-45d0-9da8-23490287xxxx"
                }
            ],
            "role": "Agent"
        },
        {
            "status": "ACTIVE",
            "canSupportChat": true,
            "maxChatSupport": 5,
            "roleId": "6389e47741afba5c08bfxxxx",
            "chatLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "canSupportVoice": true,
            "voiceLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "desktopLayouts": [
                {
                    "isDefault": false,
                    "id": "ly-9e304bb-cb55-443e-96ab-14640b75xxxx"
                }
            ],
            "userId": "u-62ae8e9d-2768-56a3-bc92-7abbc4bexxxx",
            "accountId": "6201eaad257a163e989axxxx",
            "createdBy": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
            "orgId": "o-0b9c4fa7-6f16-5605-abb7-62c46bfxxxx",
            "agentGroups": [
                {
                    "groupId": "ag-30ecdc8-19d2-40e8-a0b9-e9387319xxxx",
                    "role": "agent",
                    "groupName": "New Group"
                }
            ],
            "lastOnlineAt": "2023-03-06T05:55:20.628Z",
            "createdAt": "2022-11-01T10:49:33.148Z",
            "updatedAt": "2023-03-06T05:55:20.628Z",
            "onlineStatus": "Offline",
            "onlineStatusType": "OFFLINE",
            "attachmentsEnabled": true,
            "emojisEnabled": true,
            "id": "a-1aba421-7d05-41a5-a47a-daa45065xxxx",
            "emailId": "jane.doe@example.com",
            "firstName": "Jane",
            "lastName": "Doe",
            "nickName": "JDoe",
            "profImage": "no-avatar",
            "skills": [
                {
                    "skillId": "6201ead31e06473c153cxxxx",
                    "userId": "u-62ae8e9d-2768-56a3-bc92-7abbc4bexxxx",
                    "proficiencyLevel": "expert",
                    "name": "Default Skill",
                    "skillGroupId": "6201ead21e06473c153cxxxx",
                    "skillGroupName": "Default SkillGroup",
                    "skillGroupColor": "#D2000D",
                    "id": "6201ead31e06473c153cxxxx"
                }
            ],
            "queues": [
                {
                    "name": "Default Queue",
                    "description": "queue description",
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-62ae8e9d-2768-56a3-bc92-7abbc4bexxxx"
                        }
                    ],
                    "id": "qu-53c78e9-d249-477e-a472-9426e25dxxxx"
                },
                {
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-62ae8e9d-2768-56a3-bc92-7abbc4bexxxx"
                        }
                    ],
                    "name": "Test Queue",
                    "description": "121242",
                    "id": "qu-3066a40-5b85-4ee5-9a8e-6bd80028xxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-62ae8e9d-2768-56a3-bc92-7abbc4bexxxx"
                        }
                    ],
                    "name": "Sample Queue4",
                    "id": "qu-d937893-c788-45d0-9da8-23490287xxxx"
                }
            ],
            "role": "Agent"
        },
        {
            "status": "ACTIVE",
            "userId": "u-81191025-27fa-574b-b5ce-f91aa5b4xxxx",
            "orgId": "o-0b9c4fa7-6f16-5605-abb7-62c46bf3xxxx",
            "accountId": "6201eaad257a163e989axxxx",
            "agentGroups": [
                {
                    "groupId": "ag-b6a6178-e35e-47cc-9a40-900956c0xxxx",
                    "role": "agent",
                    "groupName": "Default Group"
                }
            ],
            "canSupportChat": true,
            "maxChatSupport": 5,
            "chatLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                }
            ],
            "canSupportVoice": true,
            "voiceLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                }
            ],
            "createdBy": "u-81191025-27fa-574b-b5ce-f91aa5b4xxxx",
            "onlineStatus": "Offline",
            "onlineStatusType": "OFFLINE",
            "hoursOfOperationId": "6201ead21e06473c153cxxxx",
            "roleId": "6389e47741afba5c08bxxxx",
            "lastOnlineAt": "2023-03-06T05:55:20.644Z",
            "desktopLayouts": [],
            "createdAt": "2022-11-07T08:45:02.797Z",
            "updatedAt": "2023-03-06T05:55:20.644Z",
            "attachmentsEnabled": true,
            "emojisEnabled": true,
            "id": "a-e53ad77-1b44-424c-933e-30474ad3xxxx",
            "emailId": "rita_book@domain.com",
            "firstName": "Rita",
            "lastName": "Book",
            "nickName": "Rita",
            "profImage": "no-avatar",
            "skills": [
                {
                    "skillId": "6201ead31e06473c153cxxxx",
                    "userId": "u-81191025-27fa-574b-b5ce-f91aa5b4xxxx",
                    "proficiencyLevel": "expert",
                    "name": "Default Skill",
                    "skillGroupId": "6201ead21e06473c153cxxxx",
                    "skillGroupName": "Default SkillGroup",
                    "skillGroupColor": "#D2000D",
                    "id": "6201ead31e06473c153cxxxx"
                }
            ],
            "queues": [
                {
                    "name": "Default Queue",
                    "description": "queue description",
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-81191025-27fa-574b-b5ce-f91aa5b4xxxx"
                        }
                    ],
                    "id": "qu-53c78e9-d249-477e-a472-9426e25dxxxx"
                },
                {
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-81191025-27fa-574b-b5ce-f91aa5b4xxxx"
                        }
                    ],
                    "name": "Test Queue",
                    "description": "121242",
                    "id": "qu-3066a40-5b85-4ee5-9a8e-6bd80028xxxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-81191025-27fa-574b-b5ce-f91aa5b4xxxx"
                        }
                    ],
                    "name": "Sample Queue4",
                    "id": "qu-d937893-c788-45d0-9da8-23490287xxxx"
                }
            ],
            "role": "Agent"
        },
        {
            "status": "ACTIVE",
            "canSupportChat": true,
            "maxChatSupport": 5,
            "roleId": "6201eaad257a163e989axxxx",
            "chatLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "canSupportVoice": false,
            "voiceLanguageSupport": [
                {
                    "isActive": false,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "desktopLayouts": [
                {
                    "isDefault": true,
                    "id": "ly-86ed061-3a2e-4aa0-bcb8-3ec12959xxxx"
                }
            ],
            "userId": "u-8f00dfd6-bcc3-5b60-ad3f-f644d51xxxx",
            "accountId": "6201eaad257a163e989axxxx",
            "createdBy": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
            "orgId": "o-0b9c4fa7-6f16-5605-abb7-62c46bf3xxxx",
            "agentGroups": [
                {
                    "groupId": "ag-30ecdc8-19d2-40e8-a0b9-e938731xxxx",
                    "role": "agent",
                    "groupName": "New Group"
                }
            ],
            "lastOnlineAt": "2023-03-06T05:55:20.658Z",
            "createdAt": "2022-11-07T08:49:51.424Z",
            "updatedAt": "2023-03-06T05:55:20.659Z",
            "onlineStatus": "Offline",
            "onlineStatusType": "OFFLINE",
            "attachmentsEnabled": true,
            "emojisEnabled": true,
            "id": "a-b62392d-80c9-4569-9e93-bc286e90xxxx",
            "emailId": "john.doe@example.com",
            "firstName": "John",
            "lastName": "Doe",
            "nickName": "Doe",
            "profImage": "no-avatar",
            "skills": [],
            "queues": [
                {
                    "name": "Default Queue",
                    "description": "queue description",
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-8f00dfd6-bcc3-5b60-ad3f-f644d51dxxxx"
                        }
                    ],
                    "id": "qu-53c78e9-d249-477e-a472-9426e25dxxxx"
                },
                {
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-8f00dfd6-bcc3-5b60-ad3f-f644d51xxxx"
                        }
                    ],
                    "name": "Test Queue",
                    "description": "121242",
                    "id": "qu-3066a40-5b85-4ee5-9a8e-6bd80028xxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-8f00dfd6-bcc3-5b60-ad3f-f644d51dxxxx"
                        }
                    ],
                    "name": "Sample Queue4",
                    "id": "qu-d937893-c788-45d0-9da8-23490287xxxx"
                }
            ],
            "role": "Administrator"
        },
        {
            "status": "ACTIVE",
            "canSupportChat": true,
            "maxChatSupport": 5,
            "roleId": "6201eaad257a163e989axxxx",
            "chatLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "canSupportVoice": true,
            "voiceLanguageSupport": [
                {
                    "isActive": true,
                    "language": "en",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "de",
                    "proficiency": "expert"
                },
                {
                    "isActive": false,
                    "language": "es",
                    "proficiency": "expert"
                }
            ],
            "desktopLayouts": [
                {
                    "isDefault": true,
                    "id": "ly-83307ec-0d70-42c7-bd72-7bb36be9xxxx"
                }
            ],
            "userId": "u-954811d9-92b5-50f5-aa00-b6d6640bxxxx",
            "accountId": "6201eaad257a163e989axxxx",
            "createdBy": "u-c8a51563-bae4-5730-bc2e-4a838898xxxx",
            "orgId": "o-0b9c4fa7-6f16-5605-abb7-62c46bf3xxxx",
            "agentGroups": [
                {
                    "groupId": "ag-30ecdc8-19d2-40e8-a0b9-e9387319xxxx",
                    "role": "agent",
                    "groupName": "New Group"
                }
            ],
            "lastOnlineAt": "2023-03-06T05:55:20.673Z",
            "createdAt": "2022-11-07T08:51:25.625Z",
            "updatedAt": "2023-03-06T05:55:20.673Z",
            "onlineStatus": "Offline",
            "onlineStatusType": "OFFLINE",
            "attachmentsEnabled": true,
            "emojisEnabled": true,
            "id": "a-d647ca1-1e2a-4663-8457-32a89ec3xxxx",
            "emailId": "melody.sunshine@domain.com",
            "firstName": "Melody",
            "lastName": "Sunshine",
            "nickName": "Melody",
            "phoneNumber": "535252345234",
            "profImage": "no-avatar",
            "skills": [],
            "queues": [
                {
                    "name": "Default Queue",
                    "description": "queue description",
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-954811d9-92b5-50f5-aa00-b6d6640bxxxx"
                        }
                    ],
                    "id": "qu-53c78e9-d249-477e-a472-9426e25xxxx"
                },
                {
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-954811d9-92b5-50f5-aa00-b6d6640xxxx"
                        }
                    ],
                    "name": "Test Queue",
                    "description": "121242",
                    "id": "qu-3066a40-5b85-4ee5-9a8e-6bd80028xxxx"
                },
                {
                    "agentGroups": [],
                    "agents": [
                        {
                            "isPreferredAgent": false,
                            "userId": "u-954811d9-92b5-50f5-aa00-b6d6640bxxxx"
                        }
                    ],
                    "name": "Sample Queue4",
                    "id": "qu-d937893-c788-45d0-9da8-23490287xxxx"
                }
            ],
            "role": "Administrator"
        }
    ],
    "skip": 0,
    "limit": 10,
    "hasMore": false,
    "totalPages": 1,
    "totalResults": 10
}
```

## Response Body Parameters

| **PARAMETER**   | **DESCRIPTION**                            | **TYPE**            |
|-------------|----------------------------------------|-----------------|
| id          | The ID of the agent.                   | string          |
| name        | The name of the agent.                 | string          |
| email       | The email address of the agent.        | string          |
| phoneNumber | The phone number of the agent.         | string          |
| isActive    | Whether the agent is active or not.    | boolean         |
| queues      | A list of queues the agent is assigned, if ‘includeQueues’ is set to true in the request. | object (Optional) |