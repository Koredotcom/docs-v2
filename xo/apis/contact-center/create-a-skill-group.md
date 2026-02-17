--8<-- "includes/ccai-api-back-link.md"

# Create a Skill Group

To add a Skill Group with the given Stream Id.

| **METHOD**        | **POST**                                                              |
|---------------|-------------------------------------------------------------------|
| **Endpoint**      | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/skill-groups` |
| **Content Type**  | `application/json`                                               |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**     | SmartAssist Analytics                                            |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                                    | **TYPE**           |
|-----------|----------------------------------------------------------------|----------------|
| host      | Environment URL, for example, `https://platform.kore.ai`     | string, required |
| BotId     | BotId or StreamId. You can access it from the App Settings page of the bot. | string, required |

## Sample Request

```
curl --location --request POST 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/skill-groups' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
      --data-raw '{
      "name": "Premium Subscriptions",
      "description": "Skill Group For Premium SubScriptions.",
      "color": "#0f0f0f"
  }'
```

## Body Parameters

| **PARAMETER**  | **DESCRIPTION**                                                      | **TYPE**           |
|------------|------------------------------------------------------------------|----------------|
| name       | Name of the skill Group.                                         | String, Required |
| description| Brief description of the skill group up to 200 characters.        | string, optional |
| color      | Color ID you want for the skill group up to 200 characters. For example, sg-4372 | string, optional |

## Sample Response

```
 {
    "id": "620b814ca2344f1caa8cec99",
    "name": "Account Management",
    "description": "Manage Account and its Settings",
    "color": "#f0f0f0"
}
```