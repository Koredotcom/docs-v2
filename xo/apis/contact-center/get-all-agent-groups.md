--8<-- "includes/ccai-api-back-link.md"

# Get All Agent Groups

To retrieve the list of agent groups with the given `streamId`.

| **Method**   | GET                                          |
|----------|----------------------------------------------|
| **Endpoint** | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/agent-groups` |
| **Content Type** | `application/json`                          |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Configuration                        |

## Path Parameters

| **Parameter** | **Description**                                    | **Type**            |
|-----------|------------------------------------------------|-----------------|
| host      | Environment URL, for example, `https://platform.kore.ai` | string, required |
| streamId     |botId or streamId. You can get it from the App Settings page. | string, required |

## Sample Request

```
curl --location --request GET \
     'https://{{host}}/agentassist/api/v1/public/{{streamId}}/agent-groups' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
```

## Sample Response

```
{
    "results": [
        {
            "isDefault": true,
            "isUnassigned": false,
            "status": "ACTIVE",
            "name": "Default Group",
            "description": "Default Group (Auto Created).",
            "iId": "st-3bf09bef-f979-5489-b337-f465bd5dxxxx",
            "createdBy": "u-40d2bdc2-822a-51a2-bdcd-95bdf483xxxx",
            "orgId": "o-0f5df379-56f6-5d5f-beff-73d9dbeexxxx",
            "lname": "default group",
            "createdByAId": null,
            "createdAt": "2023-07-31T07:27:35.219Z",
            "updatedAt": "2023-07-31T07:27:35.219Z",
            "id": "ag-3921798-30ce-41b4-9ed4-3ad6725dxxxx",
            "totalAgents": 0,
            "managers": []
        }
    ],
    "skip": 0,
    "limit": 10,
    "hasMore": false,
    "totalPages": 0,
    "totalResults": 1
}
```