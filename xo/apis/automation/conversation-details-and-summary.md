--8<-- "includes/automationai-api-back-link.md"

# Conversation Details and Summary API

To fetch the conversation details and conversation summary between the bot and the user or the user and the agent. This API supports pagination. You can specify skip and limit parameters to retrieve a certain number of messages at a time.

| Method         | POST |
|-------------------|-----------|
| Endpoint       | `https://{{host}}/api/public/bot/{{botId}}/conversationDetails` |
| Content Type   | `application/json` |
| Authorization  | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token){:target="_blank"} |
| API Scope      | App Builder: Chat History<br>See [Associate API Scopes](../automation/api-introduction.md#associating-api-scopes){:target="_blank"} |

## Path Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Required
   </td>
   <td>Environment URL, for example, https://platform.kore.ai
   </td>
  </tr>
  <tr>
   <td>botId
   </td>
   <td>Required
   </td>
   <td>Bot ID or Stream ID. You can access it from the General Settings page of the bot.
   </td>
  </tr>
</table>

## Sample Request

```json
curl --location --request POST 'https://platform.kore.ai/api/public/bot/st-86exxx8d-7021-5f2b-bf6c-8a1xxxxxb0/conversationDetails' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
"callId":"00001",
"isSummaryRequired":true
}'
```

## Request Body Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>skip/offset
   </td>
   <td>Optional
   </td>
   <td>The number of messages to be skipped.
   </td>
  </tr>
  <tr>
   <td>limit
   </td>
   <td>Optional
   </td>
   <td>The number of messages to be shown on each page.
   </td>
  </tr>
  <tr>
   <td>sessionId/callId
   </td>
   <td>Required
   </td>
   <td>Use a unique 'sessionId' or 'callId' to fetch the conversation details between the user and the bot. The 'callId' refers to the external call identifier provided by third-party agent desktops integrated with our platform, and it is different from the internal system-generated call IDs.

   </td>
  </tr>
  <tr>
   <td>conversationId                
   </td>
   <td>Required
   </td>
   <td>A unique identifier for the conversation you want to fetch the details.
    Use “conversationId” to get the conversation details between the user and the agent.
    Note: Use either “sessionId” or “conversationId.” If you use both the parameters, “sessionId” is considered.
   </td>
  </tr>
  <tr>
   <td>lang                
   </td>
   <td>optional
   </td>
   <td>The language in which the conversation summary should be returned.
   </td>
  </tr>
  <tr>
   <td>isSummaryRequired
   </td>
   <td>Optional
   </td>
   <td>Whether to provide an auto-generated summary of the conversation. Possible values are:
<ul>

<li><em>true</em>: Include the summary in the response.

<li><em>false</em>: Don’t include the summary in the response. This is the default value.
</li>
</ul>
   </td>
  </tr>
</table>

!!!note
    If the session ID is available, the call ID is not mandatory & vice versa. If both are present, the session ID is considered.


## Sample Response


```json
{
   "conversationInfo": {
       "userId": "u-c8c61885-85bb-xxxx-xxxx-6fd4a97c58f9",
       "callId": "9eb6c49e-f647-4c48-b31c-cc207e3a6080",
       "sessionStartTime": "2023-08-07T11:18:10.195Z",
       "agentHandOffTime": "2023-08-07T11:18:11.304Z",
       "userDetails": {
           "firstName": "",
           "lastName": "",
           "phoneNumber": null
       },
       "currentTask": "null",
       "sessionId": "64d0d2f2bxxxxxxxxa566d08"
   },
   "conversationFlow": [
       {
           "status": "completedTask",
           "messageStoreId": "xxx",
           "taskName": "ConnectToAgent"
       }
   ],
   "conversationHistory": [
       {
           "channels": [
               {
                   "type": "audiocodes"
               }
           ],
           "type": "outgoing",
           "status": "pending",
           "createdOn": "2023-08-07T11:18:10.337Z",
           "lmodifiedOn": "2023-08-07T11:18:10.337Z",
           "createdBy": "u-c8c61885-xxxx-xxxx-bf8e-6fd4a97c58f9",
           "components": [
               {
                   "_id": "cp-faacd4b7-xxxx-xxxx-aef8-455734582c33",
                   "cT": "text",
                   "data": {
                       "text": "Agent transfer initiated"
                   },
                   "thumbnails": []
               }
           ],
           "isBB": 0,
           "lang": "en",
           "iv": "e2DtaGM52TC9k+Q7EQpUig==",
           "ire": true,
           "timestampValue": 1691407090369,
           "sT": 0
       },
       {
           "channels": [
               {
                   "type": "audiocodes"
               }
           ],
           "type": "outgoing",
           "status": "pending",
           "createdOn": "2023-08-07T11:18:10.761Z",
           "lmodifiedOn": "2023-08-07T11:18:10.761Z",
           "createdBy": "u-c8c61885-85bb-xxxx-xxxx-6fd4a97c58f9",
           "components": [
               {
                   "_id": "cp-8fed6639-xxxx-xxxx-xxxx-7a4508d6a266",
                   "cT": "text",
                   "data": {
                       "text": "I will need to get an agent on the line to help you with that. Please hold while I find an available agent."
                   },
                   "thumbnails": []
               }
           ],
           "tN": "ConnectToAgent",
           "isBB": 0,
           "ms": 1,
           "lang": "en",
           "agentAssistDetails": {
               "streamId": "st-86ef3c8d-xxxx-xxxx-bf6c-8a14ec6fffb0",
               "srcChannel": "",
               "childBotStreamId": "st-86ef3c8d-xxxx-xxxx-bf6c-8a14ec6fffb0",
               "experience": "",
               "userInput": "ConnectToAgent"
           },
           "iv": "njinotGbS2aYa+JMqV9pbw==",
           "ire": true,
           "timestampValue": 1691407090768,
           "sT": 0
       },
       {
           "channels": [
               {
                   "type": "audiocodes"
               }
           ],
           "type": "ctrlmsg",
           "status": "received",
           "createdBy": "u-c8c61885-85bb-xxxx-xxxx-6fd4a97c58f9",
           "lmodifiedBy": "u-c8c61885-xxxx-xxxx-bf8e-6fd4a97c58f9",
           "lmodifiedOn": "2023-08-07T11:34:19.170Z",
           "isBB": 0,
           "ms": 4,
           "sT": 0,
           "components": [
               {
                   "_id": "cp-125ef7dd-xxxx-xxxx-8828-7f79db72b959",
                   "cT": "text",
                   "data": {
                       "text": "sending a ctrl message to CS"
                   },
                   "thumbnails": []
               }
           ],
           "iv": "muN3K1QJY9GhQYQ0qcahwg==",
           "ire": true,
           "createdOn": "2023-08-07T11:34:19.197Z",
           "timestampValue": 1691408059197
       }
   ],
   "summary": {
       "ConversationSummary": "agent will need to get an agent on the line to help customer with that.",
       "time": "2023-08-09T06:53:18.579Z"
   }
```