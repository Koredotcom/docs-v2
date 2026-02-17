--8<-- "includes/ccai-api-back-link.md"

# Delete a Specific Agent from a Particular Agent Group

To delete a particular agent with the given `streamId` and `agentId`.

| **Parameter**   | **Description**                                                                                                                                       |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Method**          | DELETE                                                                                                                                                |
| **Endpoint**        | `https://{{host}}/agentassist/api/v1/public/{{botId}}/agents/{{agentId}}`                                                                          |
| **Content Type**    | `application/json`                                                                                                                                    |
| **Authorization**   | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).                          |
| **API Scope**       | SmartAssist Analytics                                                                                                                                 |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                                                                               | **TYPE**          |
|---------------|---------------------------------------------------------------------------------------------------------------|-------------------|
| host          | Environment URL, for example, `https://platform.kore.ai`                                                     | string, required  |
| botId         | botId or streamId. You can get it from the App Settings page.                               | string, required  |
| agentId       | The Agent Id of the particular agent whose details are being retrieved.                                       | string, required  |

## Sample Request

```
curl --location --request DELETE \
     'https://{{host}}/agentassist/api/v1/public/{{botId}}/agents/{{agentId}}' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
```

## Sample Response

```
{
    "status": "ACTIVE",
    "agentAffinity": false,
    "canSupportChat": true,
    "maxChatSupport": 5,
    "roleId": "6344eb107b65bd738aa6xxxx",
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
    "desktopLayouts": [
        {
            "isDefault": true,
            "name": "Default Layout",
            "id": "ly-59736ed-eaac-40d6-8c5b-db294b10xxxx"
        },
        {
            "isDefault": false,
            "name": "test1",
            "id": "ly-2a591ae-5021-4e25-a9be-9997e585xxxx"
        }
    ],
    "userId": "u-cc128d1c-a846-5acb-b075-9fc49a73xxxx",
    "accountId": "633ffa91d784f471d0b8xxxx",
    "createdBy": "u-ca2cc57f-5c2b-5437-bb07-fe9020d88050",
    "orgId": "o-f7507858-f354-504a-b56b-39464fb0xxxx",
    "agentGroups": [
        {
            "groupId": "ag-bdc4010-e237-48e6-bb72-d3449a03xxxx",
            "role": "agent"
        }
    ],
    "lastOnlineAt": "2022-10-11T04:06:41.286Z",
    "createdAt": "2022-10-07T10:10:39.231Z",
    "updatedAt": "2022-10-12T10:48:53.418Z",
    "onlineStatus": "Available",
    "onlineStatusType": "AVAILABLE",
    "id": "a-1a36a7e-bb33-4bcc-ab7b-ac337738xxxx",
    "emailId": "test.agent01.octxx@domain.com",
    "firstName": "test",
    "lastName": "agent 01",
    "nickName": "test agent 01",
    "phoneNumber": "9123456xxxx",
    "profImage": "no-avatar",
    "sipURI": "sip:supportdevelopment2xx@52.4.142.1xx:5060",
    "skills": [
        {
            "skillId": "633ffac608f3a0745993xxxx",
            "proficiencyLevel": "expert",
            "userId": "u-cc128d1c-a846-5acb-b075-9fc49a73xxxx",
            "createdBy": "u-ca2cc57f-5c2b-5437-bb07-fe9020d8xxxx",
            "accountId": "633ffa91d784f471d0b8xxxx",
            "orgId": "o-f7507858-f354-504a-b56b-39464fb0xxxx",
            "createdAt": "2022-10-12T10:48:53.468Z",
            "updatedAt": "2022-10-12T10:48:53.468Z",
            "id": "63469b95b63e3c0ed3e3xxxx",
            "name": "Default Skill",
            "skillGroupName": "Default SkillGroup",
            "skillGroupColor": "#D2000D"
        }
    ],
    "queues": [
        {
            "id": "qu-353c014-96bb-4c3e-aebd-87a37927xxxx",
            "name": "Default Queue",
            "description": "queue description",
            "isPreferredAgent": true
        }
    ]
}
```