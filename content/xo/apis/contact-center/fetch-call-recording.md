--8<-- "includes/ccai-api-back-link.md"

# Fetch Call Recording

To retrieve the recording of a specific call using either the `userId` or `sessionId`.

| **Method**    | GET                                                                           |
|-----------|-------------------------------------------------------------------------------|
| **Endpoints** | `https://{{host}}/api/public/bot/{{botId}}/recordings?{{userId}}`             |
|           | `https://{{host}}/api/public/bot/{{botId}}/recordings?{{sessionId}}`          |
| **Content Type** | `application/json`                                                           |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | SmartAssist Recordings                                                        |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                                           | **TYPE**            |
|-----------|-----------------------------------------------------------------------|-----------------|
| host      | Environment URL, for example, `https://platform.kore.ai`            | string, required|
| botId     | botId or streamId. You can get it from the App Settings page.| string, required|

## Query Parameters

| **PARAMETER** | **DESCRIPTION**                                                           | **TYPE**            |
|-----------|-----------------------------------------------------------------------|-----------------|
| userId    | The ID of the user whose conversation history will be accessed. It can be a user email id or an enterprise-assigned unique id. | string, required|
| sessionId | The unique identifier for the session record.                         | string, required|

## Sample Requests

```
curl --location --request GET '{{host}}/api/1.1/public/bot/{{botId}}/recordings?userId={{userId}}' \
--header 'auth: {{JWT_TOKEN}}'
curl --location --request GET '{{host}}/api/1.1/public/bot/{{botId}}/recordings?sessionId={{sessionId}}' \
--header 'auth: {{JWT_TOKEN}}'
```

## Sample Response

```
{
    "recording": [
        "data:audio/wav;base64,{encodedFileInTheSpecifiedFormat}"
    ]
}
```