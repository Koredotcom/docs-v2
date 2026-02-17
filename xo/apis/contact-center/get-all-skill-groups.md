--8<-- "includes/ccai-api-back-link.md"

# Get All Skill Groups

To retrieve the list of skills groups with the given `streamId`.

| **Method**          | GET                                                                  |
|-----------------|----------------------------------------------------------------------|
| **Endpoint**        | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/skill-groups` |
| **Content Type**    | `application/json`                                                   |
| **Authorization**   | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**       | SmartAssist Analytics                                                 |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                            | **TYPE**          |
|-----------|--------------------------------------------------------|---------------|
| host      | Environment URL, for example, `https://platform.kore.ai` | string, required |
| streamId     | botId or streamId. You can get it from the App Settings page. | string, required |

## Sample Request

```
curl --location --request GET 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/skill-groups' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
```

## Sample Response

```
{
    "results": [
        {
            "id": "620b814ca2344f1caa8cxxxx",
            "name": "Account Management",
            "description": "Manage Account and its Settings",
            "color": "#f0f0f0"
        }
    ],
    "page": 1,
    "limit": 10,
    "hasMore": true,
    "totalPages": 1,
    "totalResults": 1
}
```