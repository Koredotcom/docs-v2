--8<-- "includes/ccai-api-back-link.md"

# Get an Agent Group

To get the details of a particular agent group with the given `IId` and `agentGroupId`.

| **Method**        | GET                                                              |
|---------------|------------------------------------------------------------------|
| **Endpoint**      | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/agent-groups/{{agentGroupId}}` |
| **Content Type**  | `application/json`                                              |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**     | SmartAssist Analytics                                           |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                                    | **TYPE**         |
|-----------|----------------------------------------------------------------|--------------|
| host      | Environment URL, for example, `https://platform.kore.ai`     | string, required |
| streamId     | The application ID. | string, required |
| id        | The Agent Group id.                                            | string, required |

## Sample Request

```
curl --location --request GET 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/agent-groups/{{agentGroupId}}' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
```

## Sample Response

```
{
    "id": "ag-9d1d5db-06b5-43a5-8a7c-87b12d93xxxx",
    "name": "US West Coast team",
    "description": "US west coast team handles west side",
    "managers": [
        {
            "firstName": "Charlie",
            "lastName": "Harper",
            "emailId": "username@domain.com",
            "accessLevel": "full",
            "skills": [
                {
                    "skillId": "s-21223123",
                    "proficiencyLevel": "expert"
                }
            ]
        }
    ]
}
```