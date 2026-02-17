--8<-- "includes/ccai-api-back-link.md"

# Export data by accountId and orgId

To get exported data which is one of (skillsGroups, Queues, StandardResponses, Waiting Experience) by giving details with account Id and orgId.

!!! Note

    This version will be deprecated soon. Please use [Version 2](../contact-center/export-data-by-giving-details-v2.md) of this API.

| **PARAMETER** | **DESCRIPTION**                                                                                                          | **TYPE**         |
|---------------|--------------------------------------------------------------------------------------------------------------------------|------------------|
| **Method**        | GET                                                                                                                      |                  |
| **Endpoint**      | `http://{{host}}/agentassist/api/public/analytics/{{streamId}}/importSmartAssistFunctionalities?accountId=&orgId=&type=` |                  |
| **Content Type**  | `application/json`                                                                                                       |                  |
| **Authorization** | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).                     |                  |
| **API Scope**     | SmartAssist Import and Export Feature                                                                                    |                  |

## Query Parameters

| **PARAMETER** | **DESCRIPTION**                                                                                     | **TYPE**         |
|---------------|-----------------------------------------------------------------------------------------------------|------------------|
| host          | Environment URL, for example, `https://platform.kore.ai`                                            | string, required |
| AccountId     | The Account Id.                                                                                     | string, required |
| OrgId         | The Organization Id.                                                                                | String, Required |
| botId         | botId or streamId. You can get it from the App Settings page.                | string, required |

## Sample Request

```
curl --location --request GET 'https://{{host}}/agentassist/api/v1/public/analytics/{{botId}}/importSmartAssistFunctionalities?{{accountId}}&orgId={{orgId}}&type=skillGroups' \
--header 'Accept: application/json, text/plain, */*' 
--header 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8' 
--header 'AccountId: 63e0f303560867d78313xxxx' 
--header 'Authorization: bearer xxxxbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXBwSWQiOiJjcy05N2IwNDZlMy
1jYzA3LTVhMDEtYmYwNS1jYmZhNzAzMmFlY2IifQ.xv4hGyyqH9JAN8iPIMaxNgOqgr_2gfQGohu3aTCxxxx' 
--header 'Cache-Control: no-cache' 
--header 'Connection: keep-alive' 
--header 'Content-Type: application/json;charset=UTF-8' 
--header 'Pragma: no-cache' 
--header 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36' 
--header 'X-Timezone: Asia/Calcutta' 
--header 'X-Timezone-Offset: -330' 
--header 'app-language: en' 
--header 'bot-language: en' 
--header 'sec-ch-ua-platform: "Linux"' 
--header 'smartassist: true' 
--header 'state: configured'
--header 'auth: <token>'
```

## Sample Response

```
[
    {
        "_id": "6666a49c085d6b9b1905xxxx",
        "name": "Default SkillGroup",
        "description": "Default SkillGroup(Auto Created).",
        "status": "ACTIVE",
        "color": "#D2000D",
        "skills": [
            {
                "_id": "6666a49c085d6b9b1905xxxx",
                "name": "Default Skill",
                "isDefault": true,
                "description": "Default Skill(Auto Created).",
                "status": "ACTIVE",
                "lname": "default skill",
                "iId": "st-25c28277-bf42-5309-af41-15f8eb7exxxx",
                "createdByAId": "a-b6697a9-2c4c-4931-8798-161d0590xxxx"
            }
        ],
        "lname": "default skillgroup",
        "isDefault": true,
        "iId": "st-25c28277-bf42-5309-af41-15f8eb7exxxx",
        "createdByAId": "a-b6697a9-2c4c-4931-8798-161d0590xxxx",
        "agentGroups": [],
        "agents": []
    },
    {
        "_id": "67dbb2d456aec476d255xxxx",
        "name": "Default SkillGroup1",
        "description": "Default SkillGroup(Auto Created).",
        "status": "ACTIVE",
        "color": "#D2000D",
        "skills": [
            {
                "_id": "67dbb2d456aec476d255xxxx",
                "name": "Default Skill",
                "isDefault": true,
                "description": "Default Skill(Auto Created).",
                "status": "ACTIVE",
                "lname": "default skill",
                "iId": "st-25c28277-bf42-5309-af41-15f8eb7exxxx",
                "createdByAId": "a-b6697a9-2c4c-4931-8798-161d0590xxxx"
            }
        ],
        "lname": "default skillgroup1",
        "isDefault": true,
        "iId": "st-25c28277-bf42-5309-af41-15f8eb7exxxx",
        "createdByAId": "a-b6697a9-2c4c-4931-8798-161d0590xxxx",
        "agentGroups": [],
        "agents": []
    }
]
```

## Response Parameters

| **Parameter**         | **Type**     | **Description**                                                                 |
|-------------------|----------|-----------------------------------------------------------------------------|
| `_id`             | String   | Unique identifier of the skill group or skill.                              |
| `name`            | String   | Name of the skill group or skill.                                           |
| `description`     | String   | Description of the skill group or skill.                                    |
| `status`          | String   | Current status (for example, `ACTIVE`).                                            |
| `color`           | String   | Hex code representing the skill group’s color. (Skill Group only)           |
| `skills`          | Array    | List of skill objects associated with the skill group.                      |
| `isDefault`       | Boolean  | Indicates whether the skill group or skill is the default.                  |
| `lname`           | String   | Lowercase version of the name.                                              |
| `iId`             | String   | Stream or application id. For example, st-25c28277-bf42-5309-af41-15f8eb7exxxx                         |
| `createdByAId`    | String   | Identifier of the agent who created the skill group or skill.               |
| `agentGroups`     | Array    | List of agent group identifiers. (Skill Group only)                         |
| `agents`          | Array    | List of agent identifiers. (Skill Group only)                               |
