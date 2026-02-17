--8<-- "includes/automationai-api-back-link.md"

# Conversation History API - Lightweight

The API provides a lightweight endpoint that returns chat transcripts without additional metadata or payload overhead. It supports high-volume retrieval and minimizes response size to reduce processing time and avoid rate limit issues.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>GET and POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td>This API has GET and POST methods. 
<p>
<strong>GET Method</strong>
<p>
<code>https://{{host}}>/api/public/bot/{{botId}}/messages-lite?userId={{userId}}&limit=5&skip=0&offset=0</code>
<p>
<strong>POST Method</strong>
<p>
<code>https://{{host}}/api/public/bot/{{botId}}/messages-lite</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td><code>application/json</code>
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><code>auth: {{JWT}}</code>
<p>
See <a href="https://docs.kore.ai/xo/apis/automation/api-introduction/#generating-the-jwt-token">How to generate the JWT Token.</a>
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Chat History \ OR</li>

<li>Admin Console: Bot Analytics > Chat History</li>
</ul>
   </td>
  </tr>
</table>



## Path Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>required
   </td>
   <td>Environment URL, for example, https://platform.kore.ai
   </td>
  </tr>
  <tr>
   <td>botId
   </td>
   <td>required
   </td>
   <td>Bot ID or Stream ID. You can access it on the bot's General Settings page.
   </td>
  </tr>
</table>



## Sample Request

**Sample Request for GET Method**


```
curl --location
'https://{{host}}/api/public/bot/{{botId}}/messages-lite?userId={{user
Id}}&limit=5&skip=0&offset=0'
--header 'accept: application/json'
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}'
```


**Sample Request for POST method**


```
curl --location
'https://{{host}}/api/public/bot/{{botId}}/messages-lite'
--header 'accept: application/json'
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}'
--header 'Content-Type: application/json'
--data '{ "userId": "u-xxxx-xxxxx-xxxx", "sessionId":
"5eadxxxxxxxxxxxxx", "dateFrom": "2019-04-01", "dateTo":
"2019-04-30", "channelType": "rtm", "type": [ "incoming",
"outgoing" ], "limit": 100, "skip": 0, "isDeveloper": false, }'
```



## Request Query Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><code>userId</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>Unique identifier of the user.
   </td>
  </tr>
  <tr>
   <td><code>limit</code>
   </td>
   <td>Optional
   </td>
   <td>Integer
   </td>
   <td>Maximum number of messages to return. Default is 5.
   </td>
  </tr>
  <tr>
   <td><code>skip</code>
   </td>
   <td>Optional
   </td>
   <td>Integer
   </td>
   <td>Number of records to skip before retrieving results.
   </td>
  </tr>
  <tr>
   <td><code>offset</code>
   </td>
   <td>Optional
   </td>
   <td>Integer
   </td>
   <td>Pagination offset value.
   </td>
  </tr>
</table>



## Request Body Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><code>userId</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>Unique identifier of the user.
   </td>
  </tr>
  <tr>
   <td><code>sessionId</code>
   </td>
   <td>Optional
   </td>
   <td>String
   </td>
   <td>Unique session identifier.
   </td>
  </tr>
  <tr>
   <td><code>dateFrom</code>
   </td>
   <td>Optional
   </td>
   <td>String 
   </td>
   <td>Start date for filtering messages. Format: <code>YYYY-MM-DD</code>.
   </td>
  </tr>
  <tr>
   <td><code>dateTo</code>
   </td>
   <td>Optional
   </td>
   <td>String (Date)
   </td>
   <td>End date for filtering messages. Format: <code>YYYY-MM-DD</code>.
   </td>
  </tr>
  <tr>
   <td><code>channelType</code>
   </td>
   <td>Optional
   </td>
   <td>String (Date)
   </td>
   <td>Source channel of the conversation. For example, <code>rtm</code>.
   </td>
  </tr>
  <tr>
   <td><code>type</code>
   </td>
   <td>Optional
   </td>
   <td>Array
   </td>
   <td>Message direction. Supports <code>incoming</code> or <code>outgoing</code>.
   </td>
  </tr>
  <tr>
   <td><code>limit</code>
   </td>
   <td>Optional
   </td>
   <td>Integer
   </td>
   <td>Maximum number of messages to return.
   </td>
  </tr>
  <tr>
   <td><code>skip</code>
   </td>
   <td>Optional
   </td>
   <td>Integer
   </td>
   <td>Number of records to skip before retrieving results.
   </td>
  </tr>
  <tr>
   <td><code>isDeveloper</code>
   </td>
   <td>Optional
   </td>
   <td>Boolean
   </td>
   <td>Indicates if the query runs in developer mode.
   </td>
  </tr>
</table>



## Sample Response

**Sample response for the GET method**


```
{
  "total": 120,
  "moreAvailable": true,
  "messages": [
    {
      "_id": "ms-221b1c28-b924-56be-aac7-2d28d5b5xxxx",
      "botId": "st-cb7818ab-5d92-5b27-95c4-503c1d94xxxx",
      "orgId": "o-a4577a81-97d7-53ba-aa0a-7b9d6a35xxxx",
      "accountId": "66eaa0843a8348c1e506xxxx",
      "type": "outgoing",
      "status": "pending",
      "createdBy": "u-dbb60272-982d-56ba-88f8-e647d7e6xxxx",
      "createdOn": "2025-11-11T05:05:46.526Z",
      "timestampValue": 1762837546526,
      "sessionId": "6912c08e55667c476791xxxx",
      "lang": "en",
      "chnl": "rtm",
      "components": [
        {
          "_id": "cp-53882b7c-a651-5a3d-ae81-ef04fbc5xxxx",
          "cT": "text",
          "data": {
            "text": "I am closing our current conversation as I have not received any   \ input from you. We can start over when you need."
          },
          "thumbnails": []
        }
      ],
      "channels": [
        {
          "from": "u-dbb60272-982d-56ba-88f8-e647d7e6xxxx"
        }
      ]
    },
    {
      "_id": "ms-fb4acded-b252-53bd-b8c8-91edda21xxxx",
      "botId": "st-cb7818ab-5d92-5b27-95c4-503c1d94xxxx",
      "orgId": "o-a4577a81-97d7-53ba-aa0a-7b9d6a35xxxx",
      "accountId": "66eaa0843a8348c1e506xxxx",
      "type": "incoming",
      "status": "received",
      "createdBy": "u-dbb60272-982d-56ba-88f8-e647d7e6xxxx",
      "createdOn": "2025-11-11T04:50:37.624Z",
      "timestampValue": 1762836637624,
      "sessionId": "6912c08e55667c476791xxxx",
      "lang": "en",
      "chnl": "rtm",
      "components": [
        {
          "_id": "cp-6b711fb2-0c82-5c08-a870-95ce4af4xxxx",
          "cT": "text",
          "data": {
            "text": "login"
          },
          "thumbnails": []
        }
      ],
      "channels": [
        {
          "from": "u-dbb60272-982d-56ba-88f8-e647d7e6xxxx",
          "channelUId": "john.doe@example.com"
        }
      ]
    }
  ]
}
```


**Sample Response from POST method**


```
{
  "total": 1234,
  "moreAvailable": true,
  "messages": [
    {
      "_id": "ms-fb4acded-b252-53bd-b8c8-91edda21xxxx",
      "botId": "st-cb7818ab-5d92-5b27-95c4-503c1d94xxxx",
      "orgId": "o-a4577a81-97d7-53ba-aa0a-7b9d6a35xxxx",
      "accountId": "66eaa0843a8348c1e506xxxx",
      "type": "incoming",
      "status": "received",
      "createdBy": "u-dbb60272-982d-56ba-88f8-e647d7e6xxxx",
      "createdOn": "2019-04-10T10:21:45.103Z",
      "timestampValue": 1554891705103,
      "sessionId": "6912c08e55667c476791xxxx",
      "lang": "en",
      "chnl": "rtm",
      "channels": [
        {
          "from": "john.doe@example.com",
          "to": "jane.doe@example.com",
          "channelUId": "john.doe@example.com"
        }
      ],
      "components": [
        {
          "_id": "cp-6b711fb2-0c82-5c08-a870-95ce4af4xxxx",
          "cT": "text",
          "data": {
            "additionalProp1": {}
          },
          "thumbnails": [
            {}
          ]
        }
      ]
    }
  ]
}
```



## Response Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><code>total</code>
   </td>
   <td>Integer
   </td>
   <td>Total number of messages that match the query.
   </td>
  </tr>
  <tr>
   <td><code>moreAvailable</code>
   </td>
   <td>Boolean
   </td>
   <td>Indicates whether more messages are available beyond the current response.
   </td>
  </tr>
  <tr>
   <td><code>messages</code>
   </td>
   <td>Array
   </td>
   <td>An array of message objects is returned in the response.
   </td>
  </tr>
  <tr>
   <td><code>_id</code>
   </td>
   <td>String
   </td>
   <td>Unique identifier of the message or component.
   </td>
  </tr>
  <tr>
   <td><code>botId</code>
   </td>
   <td>String
   </td>
   <td>Unique identifier of the bot associated with the message.
   </td>
  </tr>
  <tr>
   <td><code>orgId</code>
   </td>
   <td>String
   </td>
   <td>Identifier of the organization associated with the bot.
   </td>
  </tr>
  <tr>
   <td><code>accountId</code>
   </td>
   <td>String
   </td>
   <td>Identifier of the account under which the message was generated.
   </td>
  </tr>
  <tr>
   <td><code>type</code>
   </td>
   <td>String
   </td>
   <td>Direction of the message. Possible values: <code>incoming</code>, <code>outgoing</code>.
   </td>
  </tr>
  <tr>
   <td><code>status</code>
   </td>
   <td>String
   </td>
   <td>Current message status, such as <code>pending</code> or <code>received</code>.
   </td>
  </tr>
  <tr>
   <td><code>createdBy</code>
   </td>
   <td>String
   </td>
   <td>Identifier of the sender or system that created the message.
   </td>
  </tr>
  <tr>
   <td><code>createdOn</code>
   </td>
   <td>String (Date-Time)
   </td>
   <td>ISO 8601 timestamp when the message was created.
   </td>
  </tr>
  <tr>
   <td><code>timestampValue</code>
   </td>
   <td>Number
   </td>
   <td>Epoch timestamp of message creation.
   </td>
  </tr>
  <tr>
   <td><code>sessionId</code>
   </td>
   <td>String
   </td>
   <td>Unique ID of the session associated with the message.
   </td>
  </tr>
  <tr>
   <td><code>lang</code>
   </td>
   <td>String
   </td>
   <td>Language of the message content. For example, <code>en</code>.
   </td>
  </tr>
  <tr>
   <td><code>chnl</code>
   </td>
   <td>String
   </td>
   <td>Channel through which the message was sent (for example, <code>rtm</code>).
   </td>
  </tr>
  <tr>
   <td><code>components</code>
   </td>
   <td>Array
   </td>
   <td>An array containing one or more message components.
   </td>
  </tr>
  <tr>
   <td><code>channels</code>
   </td>
   <td>Array
   </td>
   <td>An array containing channel metadata for the sender and the recipient.
   </td>
  </tr>
  <tr>
   <td><code>cT</code>
   </td>
   <td>String
   </td>
   <td>Type of message component. For example, <code>text</code>.
   </td>
  </tr>
  <tr>
   <td><code>data</code>
   </td>
   <td>Object
   </td>
   <td>Object containing message content, such as text or structured data.
   </td>
  </tr>
  <tr>
   <td><code>thumbnails</code>
   </td>
   <td>Array
   </td>
   <td>An array of thumbnail objects if media is present.
   </td>
  </tr>
  <tr>
   <td><code>from</code>
   </td>
   <td>String
   </td>
   <td>Sender identifier at the channel level.
   </td>
  </tr>
  <tr>
   <td><code>to</code>
   </td>
   <td>String
   </td>
   <td>Recipient identifier (in POST responses).
   </td>
  </tr>
  <tr>
   <td><code>channelUId</code>
   </td>
   <td>String
   </td>
   <td>Channel-specific unique sender identifier.
   </td>
  </tr>
</table>
