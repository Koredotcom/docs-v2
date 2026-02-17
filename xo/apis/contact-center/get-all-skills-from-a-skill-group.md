--8<-- "includes/ccai-api-back-link.md"

# Get All Skills from a Skill Group

To retrieve the list of skills with the given `streamId` and `SkillGroupId`.

| **Method**        | GET                                    |
|---------------|----------------------------------------|
| **Endpoint**      | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/skill-groups/{{skillGroupId}}/skills?limit=10&page=1` |
| **Content Type**  | `application/json`                     |
| **Authorization** | `auth: {{JWT}}`   <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token)                     |
| **API Scope**     | SmartAssist Analytics                  |

## Path Parameters

| **Parameter**     | **Description**                                                      | **Type**         |
|:---------------|:------------------------------------------------------------------|:--------------|
| `host`         | Environment URL, for example, `https://platform.kore.ai`          | string, required |
| `streamId`     | botId or streamId. You can get it from the App Settings page.     | string, required |
| `skillGroupId` | Id of the Skill Group.                                            | string, required |

## Query Parameters

| **Parameter** | **Description**                                                     | **Type**              |
| :--------- | :--------------------------------------------------------------- | :----------------- |
| `page`      | Page number to retrieve. Starts from `1`. Default value is `1`. | integer, optional |
| `limit`     | Number of records to return per page. Default value is `10`.    | integer, optional |


## Sample Request

```
curl --location --request GET 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/skill-groups/{{skillGroupId}}/skills?limit=10&page=1' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
```

## Sample Response

```
{
    "results": [
        {
            "id": "sk-87679",
            "name": "Account Management",
            "description": "Manage Account and its Settings",
            "agents": 15,
            "skillGroupId": "sg-4372"
        }
    ],
    "page": 1,
    "limit": 10,
    "hasMore": true,
    "totalPages": 1,
    "totalResults": 1
}
```