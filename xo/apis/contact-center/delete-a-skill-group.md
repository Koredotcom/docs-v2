--8<-- "includes/ccai-api-back-link.md"

# Delete a Skill Group

To delete the particular skill group with the given `streamId` and `skillGroupId`.

| **Method**       | DELETE                                                         |
|------------------|----------------------------------------------------------------|
| **Endpoint**     | `https://{{host}}/agentassist/api/v1/public/{{botId}}/skill-groups/{{id}}` |
| **Content Type** | `application/json`                                             |
| **Authorization**| `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope**    | SmartAssist Analytics                                          |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                               | **TYPE**        |
|---------------|---------------------------------------------------------------|-----------------|
| `host`          | Environment URL, for example, `https://platform.kore.ai`     | string, required |
| `streamId`         | botId or streamId. You can get it from the App Settings page. | string, required |
| `id`            | The skill group id.                                           | string, required |

## Sample Request

```
curl --location --request DELETE \
     'https://{{host}}/agentassist/api/v1/public/{{botId}}/skill-groups/{{id}}' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
```