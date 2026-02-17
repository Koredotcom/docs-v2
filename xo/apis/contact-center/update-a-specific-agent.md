--8<-- "includes/ccai-api-back-link.md"

# Update a Specific Agent

To update the details of a particular agent with the given `streamId` and `agentId`.

| **Method**      | PUT                                                         |
|-------------|-------------------------------------------------------------|
| **Endpoint**    | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/agents/{{agentId}}` |
| **Content Type**| `application/json`                                          |
| **Authorization** | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**   | SmartAssist Analytics                                       |

## Path Parameters

| **Parameter** | **Description**                                                                                            | **Type**         |
|-----------|--------------------------------------------------------------------------------------------------------|--------------|
| `host`      | Environment URL, for example, `https://platform.kore.ai`                                               | string, required |
| `streamId`     | botId or streamId. You can get it from the App Settings page.                        | string, required |
| `agentId`   | The Agent Id of the particular agent whose details are being retrieved.                                 | string, required |

## Sample Request

```
curl --location --request PUT 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/agents/{{agentId}}' \
--header 'accept: application/json' \
--header 'auth: <token>' \
--header 'accountId: {{accountId}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "aug08",
    "lastName": "agent1",
    "fullName": "aug08 agent1",
    "lFullName": "aug08 agent1",
    "emailId": "aug08agent1@yopmail.com",
    "nickName": "agent One",
    "phoneNumber": "134567890982",
    "userId": "u-4bd33510-057b-505b-820d-7de70816xxxx",
    "accountId": "67654be356840f366e79xxxx",
    "isAccountOwner": false,
    "orgId": "o-7fc14025-8feb-5b1b-889d-4a689f9dxxxx",
    "customId": "A..Zxyz09!'''()*+,-./:;<=>?@[]^_`{|}~2222212221212121219",
    "agentGroups": [
        {
            "groupId": "ag-c57b602-151a-41c8-8630-a1eae433xxxx",
            "role": "agent"
        }
    ],
    "canSupportChat": true,
    "canSupportCase": false,
    "canSupportVoiceMail": false,
    "chatLanguageSupport": [
        {
            "language": "en",
            "proficiency": "expert",
            "isActive": true
        }
    ],
    "canSupportVoice": true,
    "voiceLanguageSupport": [
        {
            "language": "en",
            "proficiency": "expert",
            "isActive": true
        }
    ],
    "attachmentsEnabled": true,
    "emojisEnabled": true,
    "createdBy": "u-e454bed4-1f28-5a19-83bb-b29cc237xxxx",
    "status": "ACTIVE",
    "roleId": "67654be356840f366e79xxxx",
    "iId": "st-ceb5fb14-37eb-54a8-a32d-1d751c10xxxx",
    "createdByAId": "a-ca6a70e-32d3-43bb-b7ee-d29995a0xxxx",
    "desktopLayouts": [
        {
            "id": "ly-c118776-315a-4b36-a0dc-00010296xxxx",
            "isDefault": true
        }
    ],
    "maxDigitalChatSupport": 5,
    "maxEmailChatSupport": 5,
    "maxMessagingChatSupport": 5,
    "markedAutoAway": false,
    "dAgentGroups": [],
    "caseLanguageSupport": [],
    "lastOnlineAt": "2025-08-05T06:42:06.414Z",
    "voiceSupport": [],
    "createdAt": "2025-08-05T06:42:06.414Z",
    "updatedAt": "2025-08-05T06:42:06.414Z",
    "id": "a-5892576-bb12-461b-a58a-637d1d21xxxx",
    "agentGroupId": "ag-c57b602-151a-41c8-8630-a1eae433xxxx",
    "queues": [],
    "skills": []
}'
```

## Body Parameters

| **Parameter**                          | **Description**                                                                | **Type**                        |
|------------------------------------|----------------------------------------------------------------------------|-----------------------------|
| `firstName`                        | First name of the agent.                                                   | string, required            |
| `lastName`                         | Last name of the agent.                                                    | string, required            |
| `fullName`                         | Full name of the agent (first name + last name).                           | string, optional            |
| `lFullName`                        | Localized full name of the agent.                                          | string, optional            |
| `emailId`                          | Email address of the agent. Must be unique.                                | string, required            |
| `nickName`                         | Nickname of the agent.                                                     | string, optional            |
| `phoneNumber`                      | Contact number of the agent.                                               | string, optional            |
| `userId`                           | Unique user identifier assigned to the agent.                              | string, required            |
| `accountId`                        | Unique identifier of the account.                                          | string, required            |
| `isAccountOwner`                   | Indicates if the agent is the account owner.                               | boolean, optional           |
| `orgId`                            | Identifier for the organization.                                           | string, required            |
| `customId`                         | Custom identifier for the agent. Supports special characters except space. | string, optional            |
| `agentGroups`                      | List of agent groups and roles assigned.                                   | array of Objects, optional  |
| `agentGroups.groupId`              | Unique identifier of the agent group.                                      | string, required            |
| `agentGroups.role`                 | Role of the agent within the group.                                        | string, required            |
| `canSupportChat`                   | Defines if the agent can handle chat interactions.                         | boolean, optional           |
| `canSupportCase`                   | Defines if the agent can handle case interactions.                         | boolean, optional           |
| `canSupportVoiceMail`              | Defines if the agent can handle voice mails.                               | boolean, optional           |
| `chatLanguageSupport`              | List of languages and proficiency levels supported for chat.               | array of Objects, optional  |
| `chatLanguageSupport.language`     | Language code (for example, `"en"`).                                       | string, required            |
| `chatLanguageSupport.proficiency`  | Proficiency level in the language.                                         | string, required            |
| `chatLanguageSupport.isActive`     | Indicates if the language is active.                                       | boolean, optional           |
| `canSupportVoice`                  | Defines if the agent can handle voice interactions.                        | boolean, optional           |
| `voiceLanguageSupport`             | List of languages and proficiency levels supported for voice.              | array of Objects, optional  |
| `voiceLanguageSupport.language`    | Language code (for example, `"en"`).                                       | string, required            |
| `voiceLanguageSupport.proficiency` | Proficiency level in the language.                                         | string, required            |
| `voiceLanguageSupport.isActive`    | Indicates if the language is active.                                       | boolean, optional           |
| `attachmentsEnabled`               | Defines if the agent can send/receive attachments.                         | boolean, optional           |
| `emojisEnabled`                    | Defines if the agent can use emojis.                                       | boolean, optional           |
| `createdBy`                        | Identifier of the user who created the agent record.                       | string, optional            |
| `status`                           | Current status of the agent (for example, `ACTIVE`).                       | string, Optional            |
| `roleId`                           | Identifier for the role assigned to the agent.                             | string, required            |
| `iId`                              | Instance identifier of the agent.                                          | string, required            |
| `createdByAId`                     | Identifier of the admin who created the agent record.                      | string, optional            |
| `desktopLayouts`                   | List of desktop layouts assigned to the agent.                             | array of Objects, optional  |
| `desktopLayouts.id`                | Identifier of the desktop layout.                                          | string, required            |
| `desktopLayouts.isDefault`         | Defines if the layout is the default.                                      | boolean, optional           |
| `maxDigitalChatSupport`            | Maximum number of simultaneous digital chats supported.                    | integer, optional           |
| `maxEmailChatSupport`              | Maximum number of simultaneous email chats supported.                      | integer, optional           |
| `maxMessagingChatSupport`          | Maximum number of simultaneous messaging chats supported.                  | integer, optional           |
| `markedAutoAway`                   | Indicates if the agent is auto marked away.                                | boolean, optional           |
| `dAgentGroups`                     | Deprecated/unused agent groups.                                            | array, optional             |
| `caseLanguageSupport`              | List of supported languages for case handling.                             | array, optional             |
| `lastOnlineAt`                     | Timestamp of when the agent was last online (ISO 8601).                               | string, optional |
| `voiceSupport`                     | List of voice support configurations.                                      | array, optional             |
| `createdAt`                        | Timestamp when the agent record was created (ISO 8601).                               | string, optional |
| `updatedAt`                        | Timestamp when the agent record was last updated (ISO 8601).                          | string, optional |
| `id`                               | Unique identifier of the agent.                                            | string, required            |
| `agentGroupId`                     | Identifier of the default agent group.                                     | string, required            |
| `queues`                           | List of queues assigned to the agent.                                      | array, optional             |
| `skills`                           | List of skills assigned to the agent.                                      | array, optional             |

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
  "createdBy": "u-ca2cc57f-5c2b-5437-bb07-fe9020d8xxx",
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