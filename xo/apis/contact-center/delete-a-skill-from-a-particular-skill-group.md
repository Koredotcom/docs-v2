--8<-- "includes/ccai-api-back-link.md"

# Delete a Skill from a Particular Skill Group

To delete the particular skill with the given `botId` and `agentId`.

| **METHOD**   | **DELETE**                                                                                   |
|--------------|---------------------------------------------------------------------------------------------|
| **Endpoint** | `https://{{host}}/agentassist/api/v1/public/{{botId}}/skill-groups/{{skillGroupId}}/skills/{{skillId}}` |
| **Content Type** | `application/json`                                                            |
| **Authorization** | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | SmartAssist Analytics                                                                       |

## Path Parameters

| **PARAMETER**   | **DESCRIPTION**                                                                                           | **TYPE**        |
|----------------|-----------------------------------------------------------------------------------------------------------|-----------------|
| host           | Environment URL, for example, `https://platform.kore.ai`                                                 | string, required |
| streamId          | botId or streamId. You can get it from the App Settings page.                           | string, required |
| skillGroupId   | Id of the Skill Group.                                                                                     | string, required |
| skillId        | Id of the Skill.                                                                                           | string, required |

## Sample Request

```
curl --location --request DELETE \
     'https://{{host}}/agentassist/api/v1/public/{{botId}}/skill-groups/{{skillGroupId}}/skills/{{skillId}}' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
```