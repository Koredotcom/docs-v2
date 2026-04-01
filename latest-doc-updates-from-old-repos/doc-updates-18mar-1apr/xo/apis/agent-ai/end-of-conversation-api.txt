--8<-- "includes/agentai-api-back-link.md"

# End of Conversation API

Use this API to notify Agent AI when a conversation terminates. This triggers configured post-conversation actions, such as cleanup and state reset. Invoke the API only once at the final termination of the call, whether it ends normally or unexpectedly, to ensure accurate event handling and prevent duplicate processing.

| **Field**        | **Value**                                                                 |
|------------------|---------------------------------------------------------------------------|
| **Method**       | POST                                                                      |
| **Endpoint**     | `https://{{host}}/agentai/api/v1/hooks/{{botId}}`                        |
| **Content Type** | `application/json`                                                        |
| **Authorization**| `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md/#generating-the-jwt-token) |

### Path Parameters

| **Parameter** | **Required** | **Description** |
|--------------|-------------|-----------------|
| `host`      | Yes         | The environment URL. For example, `https://platform.kore.ai`. |
| `botId`     | Yes         | AI Agent ID or Stream ID. You can access it from the General Settings page of the AI Agent. |

### Sample Request

```
curl --location 'https://{{host}}/agentai/api/v1/hooks/st-56fbfece-0293-55a3-9154-7e3e19xxxxxx' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjcy1jNjM1NzcxYi05MmY5LTUxNzQtODRkNC1iNTNmNzZhMzgyNDMiLCJleHAiOjE3NzA4NzA3OTg5NDksImFwcElkIjoiY3MtYzYzNTc3MWItOTJmOS01MTc0LTg0ZDQtYjUzZjc2YTM4MjQzIiwiYXVkIjoiaHR0cHM6Ly9pZHByb3h5LmtvcmUuYWkvYXV0aG9yaXplIiwiaXNzIjoiY3MtYzYzNTc3MWItOTJmOS01MTc0LTg0ZDQtYjUzZjc2YTM4MjQzIiwiaWF0IjoxNzcwNzg0Mzk4OTUwfQ.RrIoLQW9yTfTh0WSYazvZpLpXpaMYVX_OmWnBFdnW9E' \
--header 'Content-Type: application/json' \
--data '{
    "botId": "st-56fbfece-0293-55a3-9154-7e3e19xxxxxx",
    "conversationId": "atesta-mlxxxxxx",
    "events": [{
            "name": "END_OF_CONVERSATION",
            "reason": "agent_initiated",
            "language": "en",
            "experience": "voice",
            "participant": {
                "identity": "agent1",
                "name": "Agent AI",
                "type": "agent",
                "customFields": {
                    "agentEmail": "qqqqqq",
                    "queueId": "1694",
                    "queueName": "queue11"
                }
            }
    }]
}'
```

### Body Parameters

| **Parameter** | **Description** | **Mandate** |
|---------------|-----------------|-------------|
| `conversationId` | Unique identifier of the conversation. | Required |
| `botId` | Unique identifier of the bot. | Required |
| `events` | List of events to be triggered. | Required |
| `events[].name` | Name of the event. For example, `"END_OF_CONVERSATION"`. | Required |
| `events[].reason` | Reason for ending the conversation (for example, `agent_initiated`). | Required |
| `events[].language` | Language of the conversation (for example, `en`). | Required |
| `events[].experience` | Interaction type (for example, `voice`, `chat`). | Required |
| `events[].participant` | Participant details associated with the event. | Required |
| `events[].participant.identity` | Unique participant identifier. | Required |
| `events[].participant.name` | Display name of the participant. | Required |
| `events[].participant.type` | Participant type (for example, `agent`). | Required |
| `events[].participant.customFields` | Custom metadata associated with the participant. | Optional |
| `events[].participant.customFields.agentEmail` | Agent email identifier. | Optional |
| `events[].participant.customFields.queueId` | Queue identifier. | Optional |
| `events[].participant.customFields.queueName` | Queue name. | Optional |

### Sample Response

```
{
   "STATUS": "OK"
}
```