--8<-- "includes/ccai-api-back-link.md"

# Update an Agent Group

To update a particular agent group with the given `streamId` and `agentGroupId`.

| **Method**      | PUT                                                               |
|-------------|-------------------------------------------------------------------|
| **Endpoint**    | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/agent-groups/{{agentGroupId}}` |
| **Content Type**| `application/json`                                                |
| **Authorization** | `auth: {{JWT}}`                      <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token)                            |
| **API Scope**   | SmartAssist Analytics                                            |

## Path Parameters

| **Parameter** | **Description**                                                                                  | **Type**           |
|-----------|----------------------------------------------------------------------------------------------|----------------|
| host      | Environment URL, for example, `https://platform.kore.ai`                                     | string, required |
| streamId     | The application ID.               | string, required |
| id        | The Agent Group id.                                                                          | string, required |

## Sample Request

```
curl --location --request POST 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/agent-groups/{{agentGroupId}}' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
      --data-raw '
     {
      "name": "US West Coast team",
      "description": "US west coast team handles west side.",
      "managers": [
        {
            "userId": "u-cc128d1c-a846-5acb-b075-9fc49a73xxxx",
            "accessLevel": "full"
        }
      ]
     }'
```

## Body Parameters

| **Parameter**  | **Description**                                                     | **Type**           |
|------------|-----------------------------------------------------------------|----------------|
| name       | Name of the Agent Group up to 50 characters long.              | string, required |
| description| A brief description of the agent Group up to 50 characters long.| string, required |
| managers   | An Array of Objects with the following details                 | required       |
| userId     | The User Id.                                                    | string, required |
| accessLevel| The access level can be: [full, view]                          | string, required |

## Sample Response

```
{
    "name": "US West Coast team",
    "description": "US west coast team handles west side.",
    "managers": [
        {
            "userId": "u-cc128d1c-a846-5acb-b075-9fc49a73xxxx",
            "accessLevel": "full"
        }
    ]
}
```