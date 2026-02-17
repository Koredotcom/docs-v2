--8<-- "includes/ccai-api-back-link.md"

# Import data by accountId and orgId (v2)

To save/import data, which is one of (skillsGroups, Queues, StandardResponses, Waiting Experience), by giving details with the `accountId` and `orgId`.

| **Property**     | **Value**                                                                                                                                                                                                 |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Method**       | POST                                                                                                                                                                                                      |
| **Endpoint**     | `https://{{host}}/agentassist/api/v1/public/analytics/{{botId}}/storeSmartAssistFunctionalities?accountId={{accountId}}&orgId={{orgId}}&type=skillGroups`                                               |
| **Content Type** | `application/json`                                                                                                                                                                                        |
| **Authorization**| `auth: {{JWT}}`  
See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token)                                                                                                   |
| **API Scope**    | SmartAssist Import and Export Feature                                                                                                                                                                     |

## Path Parameters

| **Parameter** | **Description**                                               | **Type**          |
|---------------|---------------------------------------------------------------|-------------------|
| `host`        | Environment URL, for example, `https://platform.kore.ai`      | String, Required  |
| `botId`       | botId or streamId. You can get it from the App Settings page. | String, Required  |

## Query Parameters

| **Parameter** | **Description**                                              | **Type**          |
|---------------|--------------------------------------------------------------|-------------------|
| `accountId`   | The account ID associated with the API request.              | String, Required  |
| `orgId`       | The unique identifier of the organization.                   | String, Required  |
| `type`        | Type of entity to retrieve. For example, `skillGroups`.      | String, Required  |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/analytics/{{IId}}/storeSmartAssistFunctionalities?accountId={{accountId}}&orgId={{orgId}}&type=skillGroups' \
--header 'auth: <your-auth-token>' \
--header 'accountId: {{accountId}}' \
--header 'Content-Type: application/json' \
--data '{
  "data": [
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
    }
  ],
  "metaData": {
    "userId": "u-82e335e6-15c9-5ae3-bde4-8dfe7364xxxx",
    "orgId": "o-7d15bb88-f5bb-5449-9190-87a05553xxxx",
    "type": "skillGroups",
    "accountId": "67ee382b8226ebf4d953xxxx"
  }
}'
```

## Request Header Parameters

| **Header**       | **Description**                                   | **Type**   |
|------------------|---------------------------------------------------|------------|
| `auth`           | JWT token for authentication.                     | Required   |
| `accountId`      | The account ID associated with the API request.   | Required   |
| `Content-Type`   | `application/json`.                               | Required   |

## Body Parameters

| **Parameter**                     | **Description**                                               | **Type**          |
|----------------------------------|----------------------------------------------------------------|-------------------|
| `data`                           | The data that's imported.                                      | Array, Required   |
| `data[]->_id`                    | Unique identifier for the SkillGroup.                          | String, Required  |
| `data[]->name`                   | Display name of the SkillGroup.                                | String, Required  |
| `data[]->description`            | Description of the SkillGroup.                                 | String, Optional  |
| `data[]->status`                 | Status of the SkillGroup. Example: `ACTIVE`.                   | String, Required  |
| `data[]->color`                  | Hex color code for UI representation.                          | String, Optional  |
| `data[]->lname`                  | Lowercase name of the SkillGroup.                              | String, Optional  |
| `data[]->isDefault`              | Indicates if it's the default SkillGroup.                      | Boolean, Required |
| `data[]->iId`                    | Stream or application ID associated with the SkillGroup.       | String, Required  |
| `data[]->createdByAId`           | ID of the agent who created the SkillGroup.                    | String, Required  |
| `data[]->agentGroups`            | List of associated agent group IDs.                            | Array, Optional   |
| `data[]->agents`                 | List of agent IDs assigned to this SkillGroup.                 | Array, Optional   |
| `data[]->skills`                 | An array of Skill objects in the SkillGroup.                   | Array, Optional   |
| `data[]->skills[]->_id`          | Unique ID for the Skill.                                       | String, Required  |
| `data[]->skills[]->name`         | Name of the Skill.                                             | String, Required  |
| `data[]->skills[]->isDefault`    | Indicates if the Skill is the default.                         | Boolean, Required |
| `data[]->skills[]->description`  | Description of the Skill.                                      | String, Optional  |
| `data[]->skills[]->status`       | Status of the Skill. Example: `ACTIVE`.                        | String, Required  |
| `data[]->skills[]->lname`        | Lowercase name of the Skill.                                   | String, Optional  |
| `data[]->skills[]->iId`          | Stream or application ID associated with the Skill.            | String, Required  |
| `data[]->skills[]->createdByAId` | ID of the agent who created the Skill.                         | String, Required  |
| `data[]->skills[]->agents`       | Agents associated with the Skill.                              | Array, Optional   |
| `metaData->userId`               | ID of the user initiating the request.                         | String, Required  |
| `metaData->orgId`                | The organization ID.                                           | String, Required  |
| `metaData->type`                 | Type of functionality; must be `skillGroups`.                  | String, Required  |
| `metaData->accountId`            | Account ID associated with the SkillGroups.                    | String, Required  |

## Sample Response

```
{
    "msg": "Imported skill groups data successfully"
}
```