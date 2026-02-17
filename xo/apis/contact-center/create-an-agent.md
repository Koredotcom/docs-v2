--8<-- "includes/ccai-api-back-link.md"

# Create an Agent

To add an agent with the given Stream Id.

| **METHOD**       | **POST**                                                         |
|--------------|--------------------------------------------------------------|
| **Endpoint**     | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/agents` |
| **Content Type** | `application/json`                                           |
| **Authorization**| `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**    | SmartAssist Analytics                                        |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                                                                         | **TYPE**        |
|-----------|-----------------------------------------------------------------------------------------------------|-------------|
| `host`      | Environment URL, for example, `https://platform.kore.ai`                                           | string, required |
| `streamId`    | botId or streamId. You can get it from the App Settings page.                    | string, required |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/agents' \
--header 'accept: application/json' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'accountid: {{accountId}}' \
--data-raw '{
    "emailId": "nov5uat@mailinator.com",
    "firstName": "nov05",
    "lastName": "agent3",
    "nickName": "agent three",
    "phoneNumber": "13456782345",
    "agentGroupId": "ag-c57b602-151a-41c8-8630-a1eae433xxxx",
    "canSupportChat": true,
    "maxChatSupport": 5,
    "canSupportVoice": true,
    "customId" : "A..Zxyz09!'''()*+,-./:;<=>?@[]^_`{|}",
    "roleId": "67654be356840f366e79xxxx",
    "chatLanguageSupport": [
        {
            "language": "en",
            "proficiency": "expert",
            "isActive": true
        }
    ],
    "voiceLanguageSupport": [
        {
            "language": "en",
            "proficiency": "expert",
            "isActive": true
        }
    ],
    "skills": [],
    "desktopLayouts": [],
"queues": [
    {
        "id": "qu-854eaa2-b0b6-4327-9008-723d7519xxxx",
        "isPreferredAgent": false
    }
],
"createDefaultLayoutAndAssign": true
}'
```

## Body Parameters

| **PARAMETER**                          | **DESCRIPTION**                                                                | **TYPE**                       |
| ---------------------------------- | -------------------------------------------------------------------------- | -------------------------- |
| `emailId`                          | Email address of the agent. Must be unique.                                | string, required           |
| `firstName`                        | First name of the agent.                                                   | string, required           |
| `lastName`                         | Last name of the agent.                                                    | string, required           |
| `nickName`                         | Nickname of the agent.                                                     | string, optional           |
| `phoneNumber`                      | Contact number of the agent.                                               | string, optional           |
| `agentGroupId`                     | Unique identifier of the agent group to which the agent belongs.           | string, optional           |
| `canSupportChat`                   | Defines if the agent can handle chat interactions.                         | boolean, optional          |
| `maxChatSupport`                   | Maximum number of simultaneous chats the agent can support.                | integer, optional          |
| `canSupportVoice`                  | Defines if the agent can handle voice interactions.                        | boolean, optional          |
| `customId`                         | Custom identifier for the agent. Supports special characters except space. | string, optional           |
| `roleId`                           | Identifier for the role assigned to the agent.                             | string, required           |
| `chatLanguageSupport`              | List of languages and proficiency levels supported for chat.               | array of Objects, optional |
| `chatLanguageSupport.language`     | Language code (for example, `"en"`).                                       | string, required           |
| `chatLanguageSupport.proficiency`  | Proficiency level in the language (for example, `"expert"`).               | string, required           |
| `chatLanguageSupport.isActive`     | Indicates if the language is active for the agent.                         | boolean, optional          |
| `voiceLanguageSupport`             | List of languages and proficiency levels supported for voice.              | array of Objects, optional |
| `voiceLanguageSupport.language`    | Language code (for example, `"en"`).                                       | string, required           |
| `voiceLanguageSupport.proficiency` | Proficiency level in the language (for example, `"expert"`).               | string, required           |
| `voiceLanguageSupport.isActive`    | Indicates if the language is active for the agent.                         | boolean, optional          |
| `skills`                           | List of skills assigned to the agent.                                      | array, optional            |
| `desktopLayouts`                   | List of desktop layouts assigned to the agent.                             | array, optional            |
| `queues`                           | List of queues assigned to the agent.                                      | array of Objects, optional |
| `queues.id`                        | Identifier of the queue.                                                   | string, required           |
| `queues.isPreferredAgent`          | Defines if the agent is the preferred agent for the queue.                 | boolean, optional          |
| `createDefaultLayoutAndAssign`     | Indicates whether to create and assign a default desktop layout.           | boolean, optional          |

## Sample Response

```
{
  "emailId": "nov5uat@mailinator.com",
    "firstName": "nov05",
    "lastName": "agent3",
    "nickName": "agent three",
  "phoneNumber": 13456782345,
  "profImage": "5ff233123124xxxx",
  "agentGroupId": "ag-3234fsdf2131241xxxx",
  "canSupportChat": true,
  "maxChatSupport": 5,
  "canSupportVoice": true,
  "attachmentsEnabled": true,
  "emojisEnabled": true,
  "roleId": "6ff233123124xxxx",
  "chatLanguageSupport": [
    {
      "language": "en",
      "proficiency": "expert",
      "isActive": true
    }
  ],
  "voiceLanguageSupport": [
    {
      "language": "es",
      "proficiency": "expert",
      "isActive": true
    }
  ],
  "skills": [
    {
      "skillId": "s-2122xxxx",
      "proficiencyLevel": "expert",
      "userId": "u-f9e37b9c-66d5-5525-9df1-da0edbeaxxxx",
      "createdBy": "u-f9e37b9c-66d5-5525-9df1-da0edbeaxxxx",
      "orgId": "o-cff7fba7-ebf6-5b01-81a3-42bd24faxxxx",
      "accountId": "62cd37c6f35860734283xxxx",
      "id": "62cd41c87e03db706718xxxx",
      "name": "Default Skill",
      "skillGroupName": "Default SkillGroup",
      "skillGroupColor": "#D2000D"
    }
  ],
  "desktopLayouts": [
    {
      "id": "ly-de35d82-7323-4420-b893-c35b5175xxxx",
      "isDefault": true
    }
  ],
  "queues": [
    {
      "id": "qu-80ac056-57db-420b-b937-9581dd20xxxx",
      "isPreferredAgent": true
    }
  ],
  "createDefaultLayoutAndAssign": true,
  "orgId": "o-89381108-2ea3-53a2-a422-b8992bbaxxxx",
  "userId": "u-021655cc-4cd6-524b-b42a-1bed8b5cxxxx",
  "callRegion": "JP",
  "maxDigitalChatSupport": 5,
  "maxEmailChatSupport": 5,
  "maxMessagingChatSupport": 5
}
```