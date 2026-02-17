--8<-- "includes/ccai-api-back-link.md"

# Update a Skill Group

To update the particular skill group with the given `streamId` and `skillGroupId`.

| **Method**         | PUT                                                                                         |
|----------------|---------------------------------------------------------------------------------------------|
| **Endpoint**       | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/skill-groups/{{id}}`              |
| **Content Type**   | `application/json`                                                                         |
| **Authorization**  | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**      | SmartAssist Analytics                                                                      |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                               | **TYPE**         |
|-----------|-----------------------------------------------------------|--------------|
| host      | Environment URL, for example, `https://platform.kore.ai` | string, required |
| streamId     | botId or streamId. You can get it from the App Settings page.| string, required |

## Sample Request

```
curl --location --request POST 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/skill-groups/{{id}}' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
      --data-raw '{
      "name": "Account Management",
      "description": "Manage Account and its Settings",
      "color": "#f0f0f0"
   }'
```

## Body Parameters

| **PARAMETER**  | **DESCRIPTION**                                                      | **TYPE**          |
|------------|------------------------------------------------------------------|---------------|
| id         | Id of the skill Group which you can find with [GET /skill-groups](../contact-center/get-a-skill-group.md). Example: 620b814ca2344f1caa8cec99 | string, required |
| name       | Name of the skill Group.                                         | string, required |
| description| Brief description of the skill group up to 200 characters.        | string, optional |
| color      | Color id of the color you want for skill group up to 200 characters. Example: sg-4372 | string, optional |

## Sample Response

```
 {
    "id": "620b814ca2344f1caa8cxxxx",
    "name": "Account Management",
    "description": "Manage Account and its Settings",
    "color": "#f0f0f0"
  }
```