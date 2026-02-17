--8<-- "includes/agentai-api-back-link.md"

# Control Transcription API

This API is used to control the transcription session of an AI Agent conversation. It lets you end an ongoing transcription session by sending the appropriate action.

| **Field**         | **Value** |
|-------------------|-----------|
| **Method**        | POST |
| **Endpoint**      | `https://{{host}}/api/1.1/public/bot/{{botid}}/control/transcription?conversationId={{conversationId}}` |
| **Content Type**  | `application/json` |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token){:target="_blank"}. |
| **API Scope**     | AgentAssist Transcription<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token){:target="_blank"} |

## Path Parameters

| **Parameter** | **Required/Optional** | **Description** |
|---------------|------------------------|------------------|
| `host`        | Required               | Environment URL, for example, `https://platform.kore.ai` |
| `botId`       | Required               | Unique ID of the AI Agent |

## Query Parameters

| **Parameter**     | **Required/Optional** | **Description**                          |
|-------------------|------------------------|------------------------------------------|
| `conversationId`  | Required               | Unique identifier of the AI Agent conversation |

## Sample Request

**For start action**

```
curl --location 'https://{{host}}/api/1.1/public/bot/st-4b8bb9d0-096d-56e5-b72f-f43ecf1xxxxx/control/transcription?conversationId=CAe8a34d2556235bcf0cbc51e98bbxxxxx' \
--header 'auth: {{JWT_TOKEN}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer xxxxOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiYXBwSWQiOiJjcy0zMWVhZDc5Zi0xNDhlLTVmZDUtOTdlNC1mZmI0ZmZjY2FhOTAifQ.b4eBlpjTEkywayWzmgXf-PeKC-6-suxxxxx' \
--data '{
    "action": "start"
    "agentId": "<AgentID>"
}
'
```

**For pause action**

```
curl --location 'https://{{host}}/api/1.1/public/bot/st-4b8bb9d0-096d-56e5-b72f-f43ecf1xxxxx/control/transcription?conversationId=CAe8a34d2556235bcf0cbc51e98bbxxxxx' \
--header 'auth: {{JWT_TOKEN}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer xxxxOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiYXBwSWQiOiJjcy0zMWVhZDc5Zi0xNDhlLTVmZDUtOTdlNC1mZmI0ZmZjY2FhOTAifQ.b4eBlpjTEkywayWzmgXf-PeKC-6-suxxxxx' \
--data '{
    "action": "pause",
    "agentId":"<Agent ID>",
    "handover": true
}
'
```

**For resume action**

```
curl --location 'https://{{host}}/api/1.1/public/bot/st-4b8bb9d0-096d-56e5-b72f-f43ecf1xxxxx/control/transcription?conversationId=CAe8a34d2556235bcf0cbc51e98bbxxxxx' \
--header 'auth: {{JWT_TOKEN}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer xxxxOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiYXBwSWQiOiJjcy0zMWVhZDc5Zi0xNDhlLTVmZDUtOTdlNC1mZmI0ZmZjY2FhOTAifQ.b4eBlpjTEkywayWzmgXf-PeKC-6-suxxxxx' \
--data '{
    "action": "resume",
    "agentId":"<Agent ID>"
}
'
```

**For end action**

```
curl --location 'https://{{host}}/api/1.1/public/bot/st-4b8bb9d0-096d-56e5-b72f-f43ecf1xxxxx/control/transcription?conversationId=CAe8a34d2556235bcf0cbc51e98bbxxxxx' \
--header 'auth: {{JWT_TOKEN}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer xxxxOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiYXBwSWQiOiJjcy0zMWVhZDc5Zi0xNDhlLTVmZDUtOTdlNC1mZmI0ZmZjY2FhOTAifQ.b4eBlpjTEkywayWzmgXf-PeKC-6-suxxxxx' \
--data '{
    "action": "end",
    "agentId":"<Agent ID>"
}
'
```

## Body Parameters

| **Parameter** | **Description** | **Mandate** |
|-----------|-------------|---------|
| `action` | The control actions to be performed. <br><br>**Available actions:**<br>`start` – Start the transcription session.<br> `pause`– Pause the transcription session.<br>`resume` – Resume the transcription session after a pause.<br>`end` – Terminate the transcription session.<br> | Required |
| `agentId` | A string of `agentId` values. | Required |
| `handover` | Indicates whether a conversation has been transferred to another agent (used with the `pause` action). <br><br>`true` – The agent transfers the call (e.g., cold transfer) and sends the "pause" event.<br>`false` – A normal hold by the agent (e.g., for consultation). | Required |

## Sample Response

```
{
    "status": "success"
}
```
