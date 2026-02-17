--8<-- "includes/ccai-api-back-link.md"

# Export data by accountId and orgId (v2)

To get exported data which is one of (skillsGroups, Queues, StandardResponses, Waiting Experience) by giving details with account Id and orgId.

| **Field**         | **Value**                                                                                                                                                                                                                                       |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Method**        | GET                                                                                                                                                                                                                                              |
| **Endpoint**      | `https://{{host}}/agentassist/api/v1/public/analytics/{{botId}}/retrieveSmartAssistFunctionalities?accountId={{accountId}}&orgId={{orgId}}&type=skillGroups`                                                                                    |
| **Content Type**  | `application/json`                                                                                                                                                                                                                               |
| **Authorization** | `auth: {{JWT}}`  
See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token)                                                                                                                                         |
| **API Scope**     | SmartAssist Import and Export Feature                                                                                                                                                                                                            |

## Path Parameters

| **Parameter** | **Description**                                              | **Type**          |
|---------------|--------------------------------------------------------------|-------------------|
| `host`        | Environment URL, for example, `https://platform.kore.ai`     | String, Required  |
| `botId`       | botId or streamId. You can get it from the App Settings page.| String, Required  |

## Query Parameters

| **Parameter** | **Description**                                              | **Type**          |
|---------------|--------------------------------------------------------------|-------------------|
| `accountId`   | The account ID associated with the API request.              | String, Required  |
| `orgId`       | The unique identifier of the organization.                   | String, Required  |
| `type`        | Type of entity to retrieve. For example, `skillGroups`.      | String, Required  |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/analytics/{{botId}}/retrieveSmartAssistFunctionalities?accountId={{accountId}}&orgId={{orgId}}&type=skillGroups' \
--header 'auth: <YOUR_AUTH_TOKEN>' \
--header 'accountId: {{accountId}}'
```

## Request Header Parameters

| **Header**   | **Description**                                 | **Required/Optional** |
|--------------|-------------------------------------------------|-----------------------|
| `auth`       | JWT token for authentication.                   | Required              |
| `accountId`  | The account ID associated with the API request. | Required              |

## Sample Response

```
[
   {
       "_id": "6656d350463a7e1fc890xxxx",
       "name": "Default SkillGroup",
       "description": "Default SkillGroup(Auto Created).",
       "status": "ACTIVE",
       "color": "#D2000D",
       "skills": [
           {
               "_id": "6656d350463a7e1fc890xxxx",
               "name": "Default Skill",
               "isDefault": true,
               "description": "Default Skill(Auto Created).",
               "status": "ACTIVE",
               "lname": "default skill",
               "iId": "st-d76e4023-ba1e-52af-a144-248e92c4xxxx",
               "createdByAId": "a-2b5231b-2c32-4b6e-8b02-27118eb1xxxx"
           }
       ],
       "lname": "default skillgroup",
       "isDefault": true,
       "iId": "st-d76e4023-ba1e-52af-a144-248e92c4xxxx",
       "createdByAId": "a-2b5231b-2c32-4b6e-8b02-27118eb1xxxx",
       "agentGroups": [],
       "agents": []
   },
   {
       "_id": "667da4e5a5b993156876xxxx",
       "name": "AccountType",
       "description": "AccountType",
       "status": "ACTIVE",
       "color": "#09A624",
       "skills": [
           {
               "_id": "667da4f0a5b993156876xxxx",
               "name": "Salary",
               "isDefault": false,
               "description": "Salary",
               "status": "ACTIVE",
               "agents": [],
               "lname": "salary",
               "iId": "st-d76e4023-ba1e-52af-a144-248e92c4xxxx",
               "createdByAId": "a-2b5231b-2c32-4b6e-8b02-27118eb1xxxx"
           },
           {
               "_id": "667da4fb23ec62f9d6a4xxxx",
               "name": "Saving",
               "isDefault": false,
               "description": "Saving",
               "status": "ACTIVE",
               "agents": [],
               "lname": "saving",
               "iId": "st-d76e4023-ba1e-52af-a144-248e92c4xxxx",
               "createdByAId": "a-2b5231b-2c32-4b6e-8b02-27118eb1xxxx"
           },
           {
               "_id": "667da50523ec62f9d6a4xxxx",
               "name": "Checking",
               "isDefault": false,
               "description": "Checking",
               "status": "ACTIVE",
               "agents": [],
               "lname": "checking",
               "iId": "st-d76e4023-ba1e-52af-a144-248e92c4xxxx",
               "createdByAId": "a-2b5231b-2c32-4b6e-8b02-27118eb1xxxx"
           }
       ],
       "lname": "accounttype",
       "isDefault": false,
       "iId": "st-d76e4023-ba1e-52af-a144-248e92c4xxxx",
       "createdByAId": "a-2b5231b-2c32-4b6e-8b02-27118eb1xxxx",
       "agentGroups": [],
       "agents": []
   }
]
```

## Response Body Parameters

| **Parameter**            | **Description**                                                                                   | **Type**           |
|--------------------------|---------------------------------------------------------------------------------------------------|--------------------|
| `_id`                    | Unique identifier for the SkillGroup.                                                             | String, Required   |
| `name`                   | Display the name of the SkillGroup.                                                               | String, Required   |
| `description`            | Description of the SkillGroup.                                                                    | String, Optional   |
| `status`                 | Status of the SkillGroup (`ACTIVE`, `INACTIVE`).                                                  | String, Required   |
| `color`                  | Hex code representing the SkillGroup’s UI color.                                                  | String, Optional   |
| `lname`                  | Lowercase version of the SkillGroup name.                                                         | String, Optional   |
| `isDefault`              | Indicates if this is the default SkillGroup.                                                      | Boolean, Required  |
| `iId`                    | Stream or application ID. For example: `st-e19dd469-90f5-5655-b0b2-858de901xxxx`.                 | String, Required   |
| `createdByAId`           | ID of the agent or user who created the SkillGroup.                                               | String, Required   |
| `agentGroups`            | List of associated agent group IDs.                                                               | Array, Optional    |
| `agents`                 | List of associated agent IDs.                                                                     | Array, Optional    |
| `skills`                 | Array of Skill objects.                                                                           | Array, Optional    |
| `skills[].\_id`          | Unique identifier for the Skill.                                                                  | String, Required   |
| `skills[].name`          | Display name of the Skill.                                                                        | String, Required   |
| `skills[].isDefault`     | Indicates if this is the default Skill.                                                           | Boolean, Required  |
| `skills[].description`   | Description of the Skill.                                                                         | String, Optional   |
| `skills[].status`        | Status of the Skill (`ACTIVE`, `INACTIVE`).                                                       | String, Required   |
| `skills[].lname`         | Lowercase version of the Skill name.                                                              | String, Optional   |
| `skills[].iId`           | Stream or application ID associated with the Skill.                                               | String, Required   |
| `skills[].createdByAId`  | ID of the agent or user who created the Skill.                                                    | String, Required   |
| `skills[].agents`        | List of associated agent IDs.                                                                     | Array, Optional    |
