--8<-- "includes/ccai-api-back-link.md"

# Delete Call Recording API

This API is used to delete Voice Call Recordings. The response varies based on whether the execution is successful or not.

| **Method**        | DELETE                                                                                   |
|---------------|------------------------------------------------------------------------------------------|
| **Endpoints**     | `https://{{host}}/api/public/bot/{{botId}}/v2/recordings?sessionId={{sessionId}}` |
| **Content Type**  | `application/json`                                                                      |
| Authorization | `auth: {{JWT}}`<br>See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**     | Delete Recordings

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                    | **TYPE**           |
|-----------|------------------------------------------------|----------------|
| host      | Environment URL, for example, `https://platform.kore.ai` | string, required |
| botId | botId or streamId. You can get it from the App Settings page.| string, required |

## Query Parameter

| **PARAMETER** | **DESCRIPTION**                                    | **TYPE**           |
|-----------|------------------------------------------------|----------------|
| sessionId      | The unique identifier for the session record. You can access it from the conversation logs.  | string, required |

## Sample Request

```
curl --location --request DELETE 'https://{{host}}/api/1.1/public/bot/{{botID}}/recordings?sessionId=6627b9adb9af28711b78xxxx' \
--header 'auth: <token>>'
```

## Sample Request

```
{
   "message": "Call recordings deleted successfully",
   "sessionId": "66627b9adb9af28711b78xxxx"
}
```