--8<-- "includes/ccai-api-back-link.md"

# Transfer Conversation To a Specific Agent or Queue

To retrieve the recording of a specific call using either the `userId` or `sessionId`.To transfer a conversation to a specific agent with the given `botSessionId` and `aId` (agentId) or queue using the `queueId`. Specific messages based on success or failure to transfer conversation are posted to the given `callbackUrl`. The `callbackUrl` helps track whether the transfer request succeeds or fails. This enables efficient handling of conversation transfers.

| **Method**   | POST                                                                                      |
|----------|-------------------------------------------------------------------------------------------|
| **Endpoint**| `https://{{host}}/agentassist/api/v1/public/{{streamId}}/assign-conversation` |
| **Content Type** | `application/json`                                                                          |
| **Authorization** | `auth: {{JWT}}`<br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Routing                                                                                   |

## Path Parameters

| **Parameter** | **Description**                                                                            | **Type**            |
|-----------|----------------------------------------------------------------------------------------|-----------------|
| host      | Environment URL, for example, `https://platform.kore.ai`                              | string, required|
| streamId  | botId or streamId. You can get it from the App Settings page.       | string, required|

## Query Parameters

Here is the HTML table converted to Markdown format:

| Parameter      | Description                                                                                       | Type               |
|----------------|---------------------------------------------------------------------------------------------------|--------------------|
| callbackUrl    | The URL in which message is posted. For example: `https://localhost:8009`                          | string, required   |
| orgId          | The orgId of the organization. For example: `o-fbfa482a-bf65-5386-963e-f00a8cc7xxxx`              | string, required   |
| aId            | The agent ID of the target agent. For example: `a-220172c-856e-4db6-a2d1-d4c2dabexxxx`            | string, required   |
| botSessionId   | The session ID of the bot. For example: `653a06c9aae89c5fbb4exxxx`                                | string, required   |
| queueId        | The queue ID of the target queue. For example: `qu-b5d3bb4-a1ac-4caa-9be6-55a5abc3xxxx`           | string, required   |

## Sample Requests

**Transfer to Agent**:

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/assign-conversation' \
--header 'auth: <token>' \
--header 'accountid: {{accountId}}' \
--header 'Content-Type: application/json' \
--data '{
"callbackUrl": "https://localhost:8009",
"orgId": "{{orgId}}",
"aId": "{{aId}}",
"botSessionId": "6538f8a3c9cf425ee5cfxxxx"
}'
```
**Transfer to Queue**:
```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/assign-conversation' \
--header 'auth: <token>' \
--header 'accountid: {{accountId}}' \
--header 'Content-Type: application/json' \
--data '{
"callbackUrl": "https://localhost:8009",
"orgId": "{{orgId}}",
"transferredType": "QUEUE",
"queueId": "{{queueId}}",
"botSessionId": "66c2f6939489bfffc791xxxx"
}'
```

## Sample Responses

**Transfer to Agent**:

```
{
sessionId: "6538f8a3c9cf425ee5cfxxxx",
agentId: "a-8cd2673-0cb7-462d-9453-0ee60e52xxxx",
status: "transferred",
requestCompletedAt: 1698825180041
}
```
**Transfer to Queue**:

```
{
sessionId: "6538f8a3c9cf425ee5cfxxxx",
queueId: "qu-b5d3bb4-a1ac-4caa-9be6-55a5abc3xxxx",
status: “transferred”,
requestCompletedAt: 1698825180041
}
```