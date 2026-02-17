# Web Socket Connect & RTM

Kore.ai SDK libraries use the WebSocket channel to communicate with the Platform. When using the Kore Platform SDKs, only the JWT token must be generated and passed to the client SDK.

## Initializing

This section describes how the Kore.ai SDKs initialize a WebSocket session and is for reference only.

### Prerequisites

* Make sure to register the client app.
* Generate the Client ID and Secret Key in the Platform.

### **Step1**

The JWT is generated on the server side using client app credentials and user information. The JWT is passed to the client app.

### **Step 2**

The client app exchanges the JWT token for the `accessToken` on the Platform using the following Platform endpoint. \
`POST \
https://{{APIHost}}/api/1.1/oAuth/token/jwtgrant`

This section describes how to format the request to post a message in a chat with the `/api/1.1/oAuth/token/jwtgrant` endpoint based on the following JSON syntax.
```json
{
    "assertion": "{{JWT Token}}",
    "botInfo": {
        "chatBot": "{{Bot Name}}",
        "taskBotId": "st-f74a3430-3b19-55a3-be41-1ab1a35cxxxx"
    }
}
```

#### **Sample cURL**

```json
curl 'https://{{APIHost}}/api/1.1/oAuth/token/jwtgrant' \
  -H 'content-type: application/json'  \
  --data-binary '{"assertion":"{JWT Token}}","botInfo":{"chatBot":"{{Bot Name}}","taskBotId":"st-f74a3430-3b19-55a3-be41-1ab1a35cxxxx"}}
```

#### Response

The following sample JSON response shows the `accessToken` and the user associated with that token.

```javascript
{
  "authorization": {
        "accessToken": "ZdV2OL_UZ_MvHog-rs8k9KJFNWBICvquSc3xxxxxxx_-", // access token to user at /api/rtm
        "token_type": "bearer",
        "expiresDate": "2019-06-28T06:52:23.160Z",       //expiry date for access token
        "issuedDate": "2019-02-28T06:52:23.160Z"        //access token issuedDate
    },
    "userInfo": {
        "userId": "u-4f6c68e0-551a-5dd9-a33a-1af3dc9cxxxx",        // user id which is unique for the user and can be used at bot messages api
        "accountId": "5c66514d09ab3565debxxxxx",        // account id in which the user is present
        "orgId": "o-88aad7f1-0d32-5765-93d7-f40c8040xxxx",        // organization id of the user
        "identity": "cs-5b08ed1e-5fa7-5aaa-9c21-28bf8c90xxxx/admin1212@qakore.xyz",        //identity of user from the channel perspective
        "enrollType": "free",        //Enrollment type (Free/ Paid etc)
        "managedBy": "5c66514d09ab3565debxxxxa",        //(The account id)
        "fName": "",        //first name of the user (fetched if the user is registered on the Platform)
        "lName": ""        //last name of the user (fetched if the user is registered on the Platform)
    }
}
```

### **Step 3**

The client app acquires the WebSocket URL using the following endpoint.

```json
POST
https://{{APIHost}}/api/1.1/rtm/start
```
This section describes how to format the request to get the web socket URL with the `/api/1.1/rtm/start` endpoint based on the following JSON syntax.

!!!note
   
    This URL is short-lived and expires in 30 seconds. You must ensure it is used to connect before expiration.

```json
{
    "botInfo": {
        "chatBot": "Twitter",
        "taskBotId": "st-f74a3430-3b19-55a3-be41-1ab1a35cxxxx"
    }
}
```
The `accessToken` is passed in the `bearer` parameter in the Authorization header.

#### **Sample cURL**


```json
curl 'https://{{APIHost}}/api/1.1/rtm/start' \
  -H 'content-type: application/json' \
  -H 'Authorization: bearer {{accessToken}}' \
  --data-binary '{"botInfo":{"chatBot":"{{Bot Name}}","taskBotId":"st-f74a3430-3b19-55a3-be41-1ab1a35cxxxx"}'
```

#### Response

The following sample JSON response shows the WebSocket URL.


```json
{
  "url":"wss://xxx.yyy.com:443/rtm/bot?sid=GhKrtrEC61g7hAnmvKAVnJIHG0DSxxxx"
}
```

## RTM Channel Events

The following real-time events can be exchanged between the client app and the Kore.ai Platform

### RTM Client Events

This section describes the RTM Client Event JSON responses sent to the Platform from the client app over a WebSocket.

**Event Type:** `/bot.message`

**Description:** Triggered when a user posts a message. The following payload is used to send a user-typed message to the Platform.

```json
{
    "clientMessageId": 1466692440896,
    "message": {
        "body": "Here is the message.",
        "attachments": [

      ]
    },
    "resourceid": "/bot.message",
    "botInfo": {
        "chatBot": "CNN",
        "taskBotId": "st-8aaf0939-c34a-5976-8e2e-5c91e685xxxx"
    },
    "id": 1466692440896
}
```

### RTM Server Events

This section describes the RTM Server Event JSON responses sent to the client app over a WebSocket.

**Event Type:`ack`**

**Description:** An acknowledgment is sent whenever an event is received from the client app.

The following payload is used to acknowledge an event from the client app.

```json
{
    "ok": true,
    "replyto": 1466692440896,
    "message": "delivered",
    "type": "ack"
}
```

**Event Type:** `bot_response`

**Description:** An acknowledgment is sent whenever a message is processed from the client app.

The following payload is sent when a message from the client app is processed.

```json
{
    "type": "bot_response",
    "from": "bot",
    "message": [
        {
            "type": "text",
            "cInfo": {
                "body": " Hi.  "
            }
      }
   ],
    "botInfo": {
        "chatBot": "CNN",
        "taskBotId": "st-8aaf0939-c34a-5976-8e2e-5c91e685xxxx"
    },
    "createdOn": "2016-06-23T14:34:00.025Z",
    "icon": "https://devbots.kore.com/api/getMediaStream/market/f-683e82be-fc25-5921-bf41-4104780f71c2.png"
}
```

**Event Type:** `user_message`

**Description:** Sent to the client app when a user enters and sends a message to the server from another simultaneous session.

The following sample payload is sent to the client app.


```json
{
    "botInfo": {
        "chatBot": "CNN",
        "taskBotId": "st-8aaf0939-c34a-5976-8e2e-5c91e685xxxx"
    },
    "from": "self",
    "message": {
        "body": "how are you doing ",
        "attachments": []
    },
    "id": 1466692871803,
    "type": "user_message"
}
```

## Bot Status Event

The following bot user event is exchanged and triggered between the client app and the  Platform when a bot is active.

This section describes the Bot Status Event JSON responses sent to the Platform from the client app over a WebSocket.

**Event Type:** `/bot_active`

**Description:** Triggered when a WebSocket connection is established with the bot.

The following payload is used to send a response message to the Platform.


```json
{ 
  "type": "bot_active", 
  "from": "bot", 
   "botInfo": { "chatBot": "John", 
   "taskBotId": "st-2e2663f4-bc07-583a-b244-3d8e41d3xxxx" }, 
   "sessionId": "642d2f34f7eb45387a7xxxx", "formMetaInfo": 
{ 
   "isSecured": true, 
    "formLinkExpiry": 300, 
     "submitExpiry": 600
}, 
"traceId": "4a663e27051cxxxx" 
}
```
**Event Type:** /`botKitUnreachable`

**Description:** Send notification to the WebSDK channel as a WebSocket event when the BotKit is unreachable. 

By default, the notification says, “‘Sorry, there was an error in continuing the conversation. Please retry.” Developers can customize the message to make it more contextual or language specific for the end users.

The following payload is used to send a response message to the Platform.


```json
{
  "type": "botKitUnreachable",
  "from": "bot",
  "botInfo": {
    "chatBot": "new bot hangouts",
    "taskBotId": "st-f3ad01a6-a034-519a-84ab-40043a4cxxxx",
    "botType": "default",
    "remoteAddress": "115.114.88.222",
    "hostDomain": "https://bots.kore.ai",
    "os": "Linux",
    "device": "Other",
    "userId": "u-f6b20c0b-c7bd-57e1-a762-d9a0590axxxx"
  }
  "message": "Sorry, there was an error in continuing the conversation. Please retry.",
  "traceId": "c070f2b7de24xxxx",
  "timestamp": 1693394943443
} 
```

## Form Events

The following form events are exchanged and triggered between the client app and the  Platform when a form based dialog task is invoked.

This section describes the Form Event JSON responses sent to the Platform from the client app over a WebSocket.

**Event Type:** `/form_delivered`

**Description:** Triggered when a form is delivered to a user.

The following payload is used to send a response message to the Platform.


```json
{ 
  "type": "form_delivered", 
  "from": "bot", 
   "botInfo": { 
      "chatBot": "John", 
      "taskBotId": "st-2e2663f4-bc07-583a-b244-3d8e41d3xxxx" 
    }, 
   "sessionId": "642d2f34f7eb45387a7bxxxx", "formMetaInfo": 
      { 
        "isSecured": true, 
        "formLinkExpiry": 300, 
        "submitExpiry": 600
      }, 
    "traceId": "4a663e27051cxxxx" 
} 
```

**Event Type:** `/form_submitted`

**Description:** Triggered when a form is submitted by a user.

The following payload is used to send a response message to the XO Platform.


```json
{
  "type": "form_submitted",
  "from": "bot",
  "botInfo": {
    "chatBot": "John",
    "taskBotId": "st-2e2663f4-bc07-583a-b244-3d8e41d3xxxx"
  },
  "sessionId": "642d2f34f7eb45387a7bxxxx",
  "formMetaInfo": {
    "isSecured": true,
    "formLinkExpiry": 300,
    "submitExpiry": 600
  },
  "traceId": "4a663e27051cxxxx"
}
```
**Event Type:** `/form_failure`

**Description:** Triggered when a form fails for any reason.

The following payload is used to send a response message to the XO Platform.

```json
{
  "type": "form_failure",
  "from": "bot",
  "botInfo": {
    "chatBot": "John",
    "taskBotId": "st-2e2663f4-bc07-583a-b244-3d8e41d3xxxx"
  },
  "sessionId": "642d2f34f7eb45387a7bxxxx",
  "formMetaInfo": {
    "isSecured": true,
    "formLinkExpiry": 300,
    "submitExpiry": 600
  },
  "traceId": "4a663e27051cxxxx"
}
```

## Session Events

The following session events are exchanged and triggered between the client app and the Platform when a session is invoked.

This section describes the Session Event JSON responses sent to the Kore.ai XO Platform from the client app over a WebSocket.

**Event Type:** `/session_start`

**Description:** Triggered when a session starts using an On-Connect event or message.

The session starts in the following scenarios:

* When the On-Connect is enabled to open, refresh and disable a chat window.
* A message sent after 15 mins.
* A message is sent after the idle timeout mentioned in Manage Sessions.

The following payload is used to send a response message to the Platform.

```json
{
  "type": "session_start",
  "from": "bot",
  "botInfo": {
    "chatBot": "jarvis_new_import",
    "taskBotId": "st-496bf3e4-63de-5635-8fcb-db1f9356xxxx",
    "hostDomain": "https://localhost",
    "os": "Linux",
    "device": "Other"
  },
  "sessionId": "6426bf7e916562382331xxxx",
  "traceId": "a33d81825f3bxxxx"
}
```
**Event Type:** `/session_end`

**Description:** Triggered when a session ends using an On-Connect event.

The session ends in the following scenarios:

* When the On-Connect is enabled to close, refresh and disable a chat window.
* A session timeout after 15 mins.

The following payload is used to send a response message to the Platform.

```json
{
  "type": "session_end",
  "from": "bot",
  "botInfo": {
    "chatBot": "jarvis_new_import",
    "taskBotId": "st-496bf3e4-63de-5635-8fcb-db1f9356xxxx",
    "hostDomain": "https://localhost",
    "os": "Linux",
    "device": "Other"
  },
  "sessionId": "6426bf7e916562382331xxxx",
  "traceId": "a33d81825f3bxxxx"
}
```

## Agent Transfer Events

The following agent transfer events are exchanged and triggered between the client app and the Platform when an agent is invoked. For more information, see the [Agent Transfer Overview](../app-settings/integrations/agents/agent-transfer-integrations.md) article.

This section describes the Agent Transfer Event JSON responses sent to the Platform from the client app over a WebSocket.

**Event Type:** `/agent_session_start`

**Description:** Triggered when the chat is handed off to an agent.

The following payload is used to send a response message to the Platform.

```json
{
  "type": "agent_session_start",
  "from": "bot",
  "botInfo": {
    "chatBot": "John",
    "taskBotId": "st-2e2663f4-bc07-583a-b244-3d8e41d3xxxx"
  },
  "sessionId": "642d2f34f7eb45387a7bxxxx",
  "formMetaInfo": {
    "isSecured": true,
    "formLinkExpiry": 300,
    "submitExpiry": 600
  },
  "traceId": "4a663e27051cxxxx"
}
```

**Event Type:** `/agent_session_end`

**Description:** Triggered when the conversation with the agent is ended.

The following payload is used to send a response message to the Platform.

```json
{
  "type": "agent_session_end",
  "from": "bot",
  "botInfo": {
    "chatBot": "John",
    "taskBotId": "st-2e2663f4-bc07-583a-b244-3d8e41d3xxxx"
  },
  "sessionId": "642d2f34f7eb45387a7bxxxx",
  "formMetaInfo": {
    "isSecured": true,
    "formLinkExpiry": 300,
    "submitExpiry": 600
  },
  "traceId": "4a663e27051cxxxx"
}
```

## User Input Event

The following user input event is exchanged and triggered between the client app and the Platform when the user input is required.

This section describes the User Input Event JSON responses sent to the Platform from the client app over a WebSocket.

**Event Type:** `/waiting_for_user_input`

**Description:** Triggered when the VA is waiting for user input. The input can come from an Entity, Confirmation, and Standard Responses.

The following payload is used to send a response message to the Platform.

```json
{
  "type": "waiting_for_user_input",
  "from": "bot",
  "botInfo": {
    "chatBot": "John",
    "taskBotId": "st-2e2663f4-bc07-583a-b244-3d8e41d3xxxx"
  },
  "sessionId": "642d2f34f7eb45387a7bxxxx",
  "formMetaInfo": {
    "isSecured": true,
    "formLinkExpiry": 300,
    "submitExpiry": 600
  },
  "traceId": "4a663e27051cxxxx"
}
```

## Get Conversation History

The client app requests the Platform endpoint `/api/botmessages/rtm?botId={{botId}}` using the access token as generated in Step 2 above to get the previous messages exchanged between the user and the chatbot. The response from the mentioned endpoint can be used to display the conversation history in the chat window. This section describes how to format the request to get the web socket URL with the `/api/botmessages/rtm` endpoint based on the following JSON syntax.

```json
GET https://{{APIHost}}/api/botmessages/rtm?botId={{botId}}
```

**Query Parameters**:

* botId(mandatory) : Bot ID, can be accessed from the bot’s General Settings page.
* skip/offset (optional) : The number of messages to be skipped.
* limit (optional) : The number of messages to be fetched.
* The `accessToken` to be passed along with bearer as the Authorization parameter in the header

**Sample cURL**

```json
curl 'https://{{APIHost}}/api/botmessages/rtm?botId={{botId}}&limit=10' \
  -H 'accept: application/json' \
  -H 'Authorization: bearer -{{accessToken}}' \
  -H 'content-type: application/json'
```
**Sample Response**

```json
{
  "total": 2,
  "moreAvailable": false,
  "messages": [
    {
      "_id": "ms-8a83d099-dd93-5b6b-836b-ac77bdfexxxx",
      "channels": [
        {
          "type": "rtm"
        }
      ],
      "type": "incoming",
      "status": "sent to cs",
      "createdBy": "u-211f287f-17c8-51ac-b768-15c68e19xxxx",
      "lmodifiedBy": "u-211f287f-17c8-51ac-b768-15c68e19xxxx",
      "lmodifiedOn": "2019-12-03T05:07:44.008Z",
      "botId": "st-2f579dbf-9dc1-548c-972f-f19d3316xxxx",
      "orgId": "o-44741779-1971-5ab9-a0f7-aaf4e21dxxxx",
      "accountId": "5a675150ff600b3d7665xxxx",
      "isBB": 0,
      "ms": 1,
      "chnl": "rtm",
      "components": [
        {
          "_id": "cp-1edc5033-a9cb-5011-8b2b-5986b7faxxxx",
          "cT": "text",
          "data": {
            "text": "Hi"
          },
          "thumbnails": []
        }
      ],
      "createdOn": "2019-12-03T05:07:44.097Z",
      "timestampValue": 1575349664097,
      "__v": 0,
      "lang": "en",
      "sessionId": "5de5eda04cdcff145752xxxx",
      "nodeType": 0,
      "tr0_I": "dg-61e5609f-76e7-5c42-b66f-7bb8b3af2433:intent0",
      "tr0_O": "dg-61e5609f-76e7-5c42-b66f-7bb8b3af2433:entity1:4a04988ee640428d1847fc433081xxxx",
      "tr0_T": "0",
      "tr_isSS": 1,
      "resourceid": "messagestore",
      "tags": {
        "messageTags": [],
        "userTags": [],
        "sessionTags": []
      }
    },
    {
      "_id": "ms-80e8dbf3-ca69-5ee2-a2c1-1c6a7010xxxx",
      "channels": [
        {
          "type": "rtm"
        }
      ],
      "type": "outgoing",
      "status": "pending",
      "lmodifiedOn": "2019-12-03T05:07:45.165Z",
      "createdBy": "u-211f287f-17c8-51ac-b768-15c68e19xxxx",
      "components": [
        {
          "_id": "cp-209a0641-130b-57ce-b0d3-d6516910xxxx",
          "cT": "text",
          "data": {
            "text": "Please enter the text to comment on the issue"
          },
          "thumbnails": []
        }
      ],
      "botId": "st-2f579dbf-9dc1-548c-972f-f19d3316xxxx",
      "orgId": "o-44741779-1971-5ab9-a0f7-aaf4e21dxxxx",
      "accountId": "5a675150ff600b3d7665xxxx",
      "tN": "Add Comment to Issue",
      "isBB": 0,
      "ms": 1,
      "chnl": "rtm",
      "lang": "en",
      "createdOn": "2019-12-03T05:07:45.171Z",
      "timestampValue": 1575349665171,
      "__v": 0,
      "sessionId": "5de5eda04cdcff145752xxxx",
      "resourceid": "messagestore",
      "tags": {
        "messageTags": [],
        "userTags": [],
        "sessionTags": []
      }
    }
  ]
}
```

## WebSocket Error Scenarios

This section describes the various error code responses sent to the Platform from the client app over a WebSocket.

<table>
  <tr>
   <td><strong>ERROR CODE</strong>
   </td>
   <td><strong>REASON</strong>
   </td>
  </tr>
  <tr>
   <td>1002
   </td>
   <td>When protocol error occurs.
   </td>
  </tr>
  <tr>
   <td>1005
   </td>
   <td>When a user closes the chat window or reconnects with the bot.
   </td>
  </tr>
  <tr>
   <td>1006
   </td>
   <td>When the server restarts.
   </td>
  </tr>
  <tr>
   <td>1007
   </td>
   <td>When bot finds non-utf-8 kind of messages instead of text messages.
   </td>
  </tr>
  <tr>
   <td>1008
   </td>
   <td>When any of the following scenarios occurs:
<ul>

<li>Exceeds user rate limit

<li>Bot suspended

<li>User blocked

<li>Channel user ID is blocked
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>1011
   </td>
   <td>When any unhandled exceptions come up when the WebSocket connection is up and running.
   </td>
  </tr>
  <tr>
   <td>1009
   </td>
   <td>When the payload size is larger than the maximum limit.
   </td>
  </tr>
</table>

## Next Steps

The Platform API endpoints and RTM events can be used with your client app or Kore.ai Bot SDKs. For more information, see the [Kore.ai Bots SDK](./tutorials/web-sdk.md).
