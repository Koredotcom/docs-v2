--8<-- "includes/agentai-api-back-link.md"

# Conversation Summary Trigger API

This API triggers a conversation summary event in the Agent AI system. It is used to send event data related to a conversation to the specified AI Agent.

| **Method**       | POST                                                                 |
|------------------|----------------------------------------------------------------------|
| **Endpoint**     | `https://{{host}}/api/v1/public/bot/{{botId}}`                       |
| **Content Type** | `application/json`                                                   |
| **Authorization**| `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token){:target="_blank"} |

### Path Parameters

| **Parameter** | **Required** | **Description**                                                                 |
|---------------|--------------|---------------------------------------------------------------------------------|
| `host`        | Yes          | The environment URL. For example, `https://platform.kore.ai`.                   |
| `botId`       | Yes          | AI Agent ID or Stream ID. You can access it from the General Settings page of the AI Agent. |

### Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/hooks/st-c04e225f-a30b-5a0a-9524-a60ebdbxxxxx' \
--header 'Content-Type: application/json' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLTgyODgxOTVlLTE1YzYtNThiYy04NzBlLTE5OTJmNmQxOGI4NCJ9.g5uslyya9WRcD6M0UOEjR-FUPntrcyNNwInJcXxxxxx' \
--data '{
   "conversationId": "atesta-m03sxxxxx",
   "botId": "st-c04e225f-a30b-5a0a-9524-a60ebdbxxxxx",
   "events": [
       {
           "name": "TRIGGER_SUMMARY_EVENT",
           "data": {
               "language": "English",
               "locale": "en",
               "type": "post"
           }
       }
   ]
}
'
```

### Body Parameters

| **Parameter**          | **Description**                                                             | **Mandate** |
|------------------------|------------------------------------------------------------------------------|-------------|
| `conversationId`       | Unique identifier for the conversation.                                     | Required    |
| `botId`                | Unique identifier for the AI Agent.                                              | Required    |
| `events`               | List of events to be triggered.                                             | Required    |
| `eventsName`           | Name of the event. For example, `"TRIGGER_SUMMARY_EVENT"`.                  | Required    |
| `eventsData`           | Additional data for the event.                                              | Required    |
| `eventsDataLanguage`   | The language of the event. Example: `"English"`.                            | Required    |
| `eventsDataLocale`     | The locale of the event. Example: `"en"`.                                   | Required    |
| `eventsDataType`       | Type of the event. Example: `"post"`.                                       | Required    |

### Sample Response

```
{
    "STATUS": "OK"
}
```