--8<-- "includes/ccai-api-back-link.md"

# Create an Agent Group

To add an agent with the given Stream Id.

| **METHOD**       | **POST**                                                             |
|--------------|------------------------------------------------------------------|
| **Endpoint**     | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/agent-groups` |
| **Content Type** | `application/json`                                               |
| **Authorization** | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**    | SmartAssist Analytics                                            |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                            | **TYPE**           |
|-----------|--------------------------------------------------------|----------------|
| host      | Environment URL, for example, `https://platform.kore.ai` | string, required |
| BotId     | BotId or StreamId. You can access it from the App Settings page of the bot. | string, required |

## Sample Request

```
curl --location --request POST 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/agent-groups' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
      --data-raw '
     {
      "name": "US West Coast team",
      "description": "US west coast team handles west side.",
     }'
```

## Body Parameters

| **PARAMETER**  | **DESCRIPTION**                                          | **TYPE**           |
|------------|------------------------------------------------------|----------------|
| name       | Name of the Agent Group up to 50 characters long.    | string, required |
| description| A brief description of the agent Group up to 50 characters long. | string, required |

## Sample Response

```
{
    "name": "US West Coast team",
    "description": "US west coast team handles west side.",
}
```