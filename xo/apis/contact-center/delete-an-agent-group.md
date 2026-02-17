--8<-- "includes/ccai-api-back-link.md"

# Delete an Agent Group

To delete the particular agent group with the given `streamId` and `agentGroupId`.

| **Method**       | DELETE                                                                                                  |
|------------------|--------------------------------------------------------------------------------------------------------|
| **Endpoint**     | `https://{{host}}/agentassist/api/v1/public/{{botId}}/agent-groups/{{id}}`                          |
| **Content Type** | `application/json`                                                                                     |
| **Authorization**| `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope**    | SmartAssist Analytics                                                                                  |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                               | **TYPE**         |
|---------------|---------------------------------------------------------------|------------------|
| host          | Environment URL, for example, `https://platform.kore.ai`      | string, required |
| streamId         | botId or streamId. You can get it from the App Settings page. | string, required |
| id            | The Agent Group id.                                            | string, required |

## Sample Request

```
curl --location --request DELETE \
     'https://{{host}}/agentassist/api/v1/public/{{botId}}/agent-groups/{{id}}' \
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