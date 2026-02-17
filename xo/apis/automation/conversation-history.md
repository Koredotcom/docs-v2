--8<-- "includes/automationai-api-back-link.md"

# Conversation History API

To fetch the conversational messages between the bot and user in reverse chronological order. This API supports pagination. You can provide offset/skip and limit to get a certain number of messages at a time.

!!! note

    The Conversation History API provides the time in UTC format.

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
   <td>This API has two versions for GET and POST methods. The v1 of the API includes messages associated with all tasks, and it has a maximum limit of 100 messages per request. The v2 of the API does not include the messages related to Alert and Action tasks, and it has a maximum limit of 10,000 messages per request.
<p>
<strong>GET Method</strong><p>Version 1: <p><code>https://{{host}}/api/public/bot/{{botId}}/getMessages?userId={{userId}}&limit=10&dateFrom=2023-05-20&dateTo=2023-05-25</code><p>Version 2: <p><code>https://{{host}}/api/public/bot/{{botId}}/getMessagesV2?userId={{userId}}&includeSecureForm=true</code>
<p>
<strong>Note</strong>: The GET method shows the RTM interactions by default. To get the channel-specific interaction, use the channelType parameter in the GET method. For the channelType parameter values, see <a href="#Request_Body_Parameters">Request Body Parameters</a> section.
<p>
<strong>POST Method</strong><p>Version 1:<p>
<code>https://{{host}}/api/public/bot/{{botId}}/getMessages </code>and <code>https://{{host}}/api/public/getMessages</code> for Admin Console.
<p>Version 2:<p>
<code>https://{{host}}/api/public/bot/{{botId}}/getMessagesV2</code>
   </td>
  </tr>
  <tr>
   <td><strong>accept-encoding</strong>
   </td>
   <td><code>gzip, deflate, br</code>
<p>
This allows the server to compress the response using any of these algorithms (gzip, deflate, or Brotli) before sending it back, which makes the response size smaller and faster to transmit over the network, thereby improving the overall performance of the API communication.
<p>
<strong>Note:</strong> We recommend using this header element in v2 of the GET and the POST methods.
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
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token.</a>
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Chat History \
OR

<li>Admin Console: Bot Analytics > Chat History
</li>
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
   <td>optional
   </td>
   <td>Bot ID or Stream ID. You can access it from the General Settings page of the bot.
   </td>
  </tr>
</table>



## Sample Request

**Sample Request for GET Method**

Version 1:


```json
curl -X GET \
'https://{{host}}/api/public/bot/{{botId}}/getMessages?userId={{userId}}&limit=10&dateFrom=2023-05-20&dateTo=2023-05-25' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}'
```


Version 2:


```json
curl --location 'https://{{host}}/api/public/bot/{{botId}}/getMessagesV2?userId={{userId}}&includeSecureForm=true' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json'
```


**Sample Request for POST method**

Version 1:


```json
curl -X POST \
  'https://{{host}}/api/public/bot/{{botId}}/getMessages' \
  --header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "userId"           : "u-xxxx-xxxxx-xxxx",
    "skip"             : 0,                           
    "limit"            : 100,                       
    "dateFrom"         : "2019-04-01",
    "dateTo"           : "2019-04-01",
    "channelType"      : "rcs",
    "sessionId"        : ["5eadxxxxxxxxxxxxx","5ebxxxxxxxxxxxxxxx"],
    "includeTraceId"  : "true"
    "tags"	       : {
    "and"    : [
		      {
		        "name"  : "tagname",
		        "values"  : ["tagvalue1","tagvalue2"],
                        "type"    : "tagtype"
                      },
                     {
                        "name"  : "tagname",
    		        "values"  : ["tagvalue1","tagvalue2"],
                        "type"    : "tagtype"  
                     }
                     ]	
                }
          }'
```


Version 2:


```json
 curl --location 'https://{{host}}/api/public/bot/{{botId}}/getMessagesV2' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "userId": "u-dd2d1106-0732-5f93-939c-8e423079xxxx"
    
    
}'
```

**Sample Request for specific call Ids**

The “call Id” is the unique identifier for a voice call. The user can retrieve voice conversation messages between a user and a bot for a specific call Id. This applies to the IVR, AudioCodes, and SAVG channels.

```json
curl --location \
 'https://{{host}}/api/public/bot/{{botId}}/getMessages?limit=50&dateTo=2025-06-26&callId={{callId}}&dateFrom=2025-06-23&channelType={{channelType}}' \
--header 'Content-Type: application/json' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' 

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
   <td>userId
   </td>
   <td>required for GET
<p>
optional for POST
   </td>
   <td>String
   </td>
   </td>
   <td>The ID of the user whose conversation history to access. Can be user email id or enterprise assigned unique id.
   </td>
  </tr>
  <tr>
   <td>skip/offset
   </td>
   <td>optional
   </td>
   <td>Number
   </td>   
   <td>The number of sessions to be skipped.
   </td>
  </tr>
  <tr>
   <td>limit
   </td>
   <td>optional
   </td>
   <td>Number
   </td>   
   <td>The number of messages to be shown on each page.
   </td>
  </tr>
  <tr>
   <td>channelType
   </td>
   <td>optional
   </td>
   <td>String   
   </td>
   <td>Channel type name for which you want to see the interactions; the default is “rtm” .
<p>
Accepted channel types are:
<ul>


<li>“msteams”,

<li>“twitter”,

<li>“spark”,

<li>“rtm”,

<li>“facebook”,

<li>“slack”,


<li>“kore”,

<li>“email”,

<li>“sms”,

<li>“wfacebook”,

<li>“ringcentral”,

<li>“jabber”,

<li>“yammer”,

<li>“alexa”,

<li>“twiliovoice”,

<li>“telegram”,

<li>“ivr”,

<li>“ivrVoice”,

<li>“smartassist”,

<li>“line”,

<li>“liveperson”,

<li>“googleactions”,

<li>“hangoutchat”,

<li>“mattermost”,

<li>“rcs”.

<p>
<strong>Note</strong>: In case of multi-webhook channel configuration, “ivr” gives the conversations for the first WebHook instance. For other WebHook instance, specify the<code>ivrInstID</code>, you can get it from the WebHook URL which is of the form: <code>{{host_url}}/chatbot/hooks/{{BotId}}/hookInstance/{{ivrInstID}}</code>
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>dateFrom
   </td>
   <td>optional
   </td>
   <td>Date
   </td>   
   <td>Accepts the yyyy-mm-dd date format.
<p>
(or) yyyy-mm-ddThh:mm:ss.msZ
<p>
eg:2019-04-01 (or) 2019-04-01T13:25:58.515ZIf not provided, calculated as 7 days behind <em>dateTo</em>.
<p>
<strong>Note</strong>: This field cannot be used in combination with msgId.
   </td>
  </tr>
  <tr>
   <td>dateTo
   </td>
   <td>optional
   </td>
   <td>Date
   </td>   
   <td>Accepts the yyyy-mm-dd date format.
<p>
(or) yyyy-mm-ddThh:mm:ss.msZ
<p>
eg:2019-04-01 (or) 2019-04-01 T13:26:05.598ZIf not provided, calculated as 7 days from <em>dateFrom</em>. If <em>dateFrom</em> is also not provided then set to <strong>Today</strong>.
<p>
<strong>Note</strong>: This field cannot be used in combination with msgId
   </td>
  </tr>
  <tr>
   <td>getAgentsInfo
   </td>
   <td>optional
   </td>
   <td>Boolean
   </td>   
   <td>Accepts true or false. If the value is true then the agent info is fetched and put in the author object of the agent. If the value is false or the field is not provided then agent info is not passed in the response.
   </td>
  </tr>
  <tr>
   <td>includeSecureForm
   </td>
   <td>required
   </td>
   <td>Boolean
   </td>   
   <td>Accepts true or false. Displays the form input submitted by the user.
   </td>
  </tr>
  <tr>
   <td>sessionId
   </td>
   <td>optional
   </td>
   <td>
   </td>   
   <td>A specific Session-Id if known. <a href="../get-sessions-history/">Refer here to obtain the session id.</a>
   </td>
  </tr>
</table>


!!! note

    The duration between _dateTo_ and _dateFrom_ should be less than 7 days, else an error will be thrown.


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
   <td>skip/offset
   </td>
   <td>optional
   </td>
   <td>
   </td>   
   <td>The number of sessions to be skipped.
   </td>
  </tr>
  <tr>
   <td>limit
   </td>
   <td>optional
   </td>
   <td>Number
   </td>   
   <td>The number of messages to be shown on each page.
   </td>
  </tr>
  <tr>
   <td>forward
   </td>
   <td>optional
   </td>
   <td>Boolean
   </td>   
   <td>Takes string values - "true" or "false". Specifies the direction of the messages to be retrieved.
<ul>

<li>If the value is "true", then the conversation history is retrieved in the order old to the most recent one.

<li>If the value is "false," then the conversation history is retrieved in reverse order, from the most recent to the oldest message.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>msgId
   </td>
   <td>optional
   </td>   
   <td>String
   </td>   
   <td>A specific Message-Id if known. This would fetch the records starting from that message either forward or backward depending upon the direction (see below) requested.
<p>
In case only the specific conversation is required, set the limit to 1
<p>
<span style="text-decoration:underline;">Note</span>: This field cannot be used in combination with dateFrom and dateTo.
   </td>
  </tr>
  <tr>
   <td>includeTraceId
   </td>
   <td>optional
   </td>
   <td>Boolean
   </td>   
   <td>Whether to include the trace ID in the response. A trace ID is a unique ID assigned to each incoming message.  Possible values of the parameter:
<ul>

<li><em>true</em>: Include the trace ID in the response.

<li><em>false</em>: Default value, indicates not to include the trace ID in the response.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>direction
   </td>
   <td>optional when msgId is given
   </td>
   <td>Number
   </td>   
   <td>
<ul>

<li>&lt;0 reverse

<li>=0 bidirectional

<li>>0 forward
Default direction is forward.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>sessionId
   </td>
   <td>optional
   </td>
   <td>Array
   </td>   
   <td>A specific Session-Id if known. <a href="../get-sessions-history/">Refer here to obtain the session id.</a>
   </td>
  </tr>
  <tr>
   <td>tags
   </td>
   <td>optional
   </td>
   <td>Object
   </td>   
   <td>Meta tags to filter the conversations.
   </td>
  </tr>
  <tr>
   <td>getAgentsInfo
   </td>
   <td>optional
   </td>
   <td>Boolean
   </td>   
   <td>Accepts true or false. If the value is true then the agent info is fetched and put in the author object of the agent. If the value is false or the field is not provided then agent info is not passed in the response.
   </td>
  </tr>
</table>

## Sample Response

**Sample response for the GET method**


```json
{
    "total": 6,
    "moreAvailable": false,
    "icon": "https://{{host}}/api/getMediaStream/market/f-7dc8cf3e-9876-5c30-b8f2-12b79e39xxxx.png?n=7388290499&s=IjVTTjhKV3ZIRDllOGZVMS9wdkVYOXV4R0xOWlpxxxxpYVlxVGlja0tGS0E9xxxx",
    "messages": [
        {
            "_id": "ms-171c2f3d-dcdc-50f7-bfce-aeaa026cxxxx",
            "botId": "st-1d7611fa-908a-5f0c-8871-f7ea97a0xxxx",
            "type": "outgoing",
            "status": "pending",
            "channels": [
                {
                    "type": "rtm"
                }
            ],
            "components": [
                {
                    "_id": "cp-59051b09-cfc9-53e0-a5de-204ad4c7xxxx",
                    "cT": "text",
                    "data": {
                        "text": "Please enter intent"
                    },
                    "thumbnails": []
                }
            ],
            "createdBy": "u-2dd69bdd-2592-5f97-b3b3-7ad0bdebxxxx",
            "createdOn": "2025-09-01T12:17:38.824Z",
            "timestampValue": 1756729058824,
            "lmodifiedBy": "u-2dd69bdd-2592-5f97-b3b3-7ad0bdebxxxx",
            "lmodifiedOn": "2025-09-01T12:17:38.824Z",
            "isBB": 0,
            "isD": 0,
            "chnl": "rtm",
            "lang": "en",
            "__lModifiedOn__": "2025-09-01T12:17:41.000Z",
            "__v": 0,
            "sT": 1,
            "sessionId": "68b58ee2a0c1153e10cexxxx",
            "resourceid": "messagestore",
            "tags": {
                "messageTags": [],
                "userTags": [],
                "sessionTags": [],
                "altText": []
            }
        },
        {
            "_id": "ms-a7280f90-1cda-5f19-8204-6cd26af7xxxx",
            "botId": "st-1d7611fa-908a-5f0c-8871-f7ea97a0xxxx",
            "type": "incoming",
            "status": "received",
            "orgId": "o-5a0da1e4-2df3-5cec-9ee4-af0b2efdxxxx",
            "accountId": "674daf4bc9d17f4dc070xxxx",
            "channels": [
                {
                    "type": "rtm",
                    "channelUId": "cs-259844d3-7827-5f33-ae7c-9d790e6d7548/83896956-09e8-4e72-ba10-01e4f996b92d3d6cf535-323b-4b1c-8443-4f80ef0fxxxx"
                }
            ],
            "components": [
                {
                    "_id": "cp-001b6069-9112-5d0d-bc6b-c6868f70xxxx",
                    "cT": "text",
                    "data": {
                        "text": "pay bill"
                    },
                    "thumbnails": []
                }
            ],
            "createdBy": "u-2dd69bdd-2592-5f97-b3b3-7ad0bdebxxxx",
            "createdOn": "2025-09-01T12:18:22.204Z",
            "timestampValue": 1756729102204,
            "lmodifiedBy": "u-2dd69bdd-2592-5f97-b3b3-7ad0bdebxxxx",
            "lmodifiedOn": "2025-09-01T12:18:22.204Z",
            "isBB": 0,
            "isD": 0,
            "chnl": "rtm",
            "lang": "en",
            "__lModifiedOn__": "2025-09-01T12:18:22.000Z",
            "__v": 0,
            "sT": 1,
            "sessionId": "68b58ee2a0c1153e10cexxxx",
            "resourceid": "messagestore",
            "tags": {
                "messageTags": [],
                "userTags": [],
                "sessionTags": [],
                "altText": []
            }
        },
        {
            "_id": "ms-631e4522-de35-5472-8cc8-5e8eb726xxxx",
            "botId": "st-1d7611fa-908a-5f0c-8871-f7ea97a0xxxx",
            "type": "outgoing",
            "status": "pending",
            "channels": [
                {
                    "type": "rtm"
                }
            ],
            "components": [
                {
                    "_id": "cp-2fdf576c-434f-5686-b2e1-e2341a3fxxxx",
                    "cT": "text",
                    "data": {
                        "text": "I am closing our current conversation as I have not received any input from you. We can start over when you need."
                    },
                    "thumbnails": []
                }
            ],
            "createdBy": "u-2dd69bdd-2592-5f97-b3b3-7ad0bdebxxxx",
            "createdOn": "2025-09-01T12:24:08.528Z",
            "timestampValue": 1756729448528,
            "lmodifiedBy": "u-2dd69bdd-2592-5f97-b3b3-7ad0bdebxxxx",
            "lmodifiedOn": "2025-09-01T12:24:08.528Z",
            "isBB": 0,
            "isD": 0,
            "chnl": "rtm",
            "lang": "en",
            "__lModifiedOn__": "2025-09-01T12:24:08.000Z",
            "__v": 0,
            "sT": 1,
            "sessionId": "68b58ee2a0c1153e10cexxxx",
            "resourceid": "messagestore",
            "tags": {
                "messageTags": [],
                "userTags": [],
                "sessionTags": [],
                "altText": []
            }
        }
    ]
}
```


**Sample Response from POST method**


```json
{
    "total": 10,
    "moreAvailable": false,
    "icon": "https://{{host}}/api/getMediaStream/market/f-129c0519-30a6-5c33-87d8-76491cf3xxxx.png?n=5493090268&s=Im9keng1NmVkcTN2bVN2OTJGNmxxxxJRdndHMVZCQVNxOTNaZnhiS3hhTTA9xxxx",
    "messages": [
        {
            "_id": "ms-d13ed8a4-b88e-5577-a661-f9263e0dxxxx",
            "botId": "st-54acfbf7-16a8-5ebd-b457-fc4fcd28xxxx",
            "type": "outgoing",
            "status": "pending",
            "channels": [
                {
                    "type": "rtm"
                }
            ],
            "components": [
                {
                    "_id": "cp-92c79906-280d-5ce3-a748-fe1aa60fxxxx",
                    "cT": "text",
                    "data": {
                        "text": ""
                    },
                    "thumbnails": []
                }
            ],
            "createdBy": "u-dd2d1106-0732-5f93-939c-8e423079xxxx",
            "createdOn": "2025-09-09T13:00:06.027Z",
            "timestampValue": 1757422806027,
            "lmodifiedBy": "u-dd2d1106-0732-5f93-939c-8e423079xxxx",
            "lmodifiedOn": "2025-09-09T13:00:06.027Z",
            "sessionId": "68c024b90f2c406b6e50xxxx",
            "isBB": 0,
            "isD": 0,
            "ms": 1,
            "chnl": "rtm",
            "lang": "en",
            "author": {
                "type": "EVENT"
            },
            "conversationId": "c-63ee303-97eb-45be-ad3d-d4ec5218xxxx",
            "isA": true,
            "__lModifiedOn__": "2025-09-09T13:02:27.000Z",
            "__v": 0,
            "sT": 1,
            "resourceid": "messagestore",
            "tags": {
                "messageTags": [],
                "userTags": [],
                "sessionTags": [],
                "altText": []
            }
        },
        {
            "_id": "ms-71229eb8-319e-5c8a-aa64-2690c67cxxxx",
            "botId": "st-54acfbf7-16a8-5ebd-b457-fc4fcd28xxxx",
            "type": "outgoing",
            "status": "opened",
            "orgId": "o-1f80fb1b-c3a7-5869-9189-e1f34b09xxxx",
            "accountId": "6769329ed730b47e3f47xxxx",
            "channels": [
                {
                    "type": "rtm"
                }
            ],
            "components": [
                {
                    "_id": "cp-c9f5f91d-ca20-592a-9cd5-92d50f89xxxx",
                    "cT": "text",
                    "data": {
                        "text": "{\"type\":\"template\",\"payload\":{\"template_type\":\"button\",\"text\":\"Test form\",\"buttons\":[{\"type\":\"url\",\"title\":\"Submit Data\",\"url\":\"https://{{host}}/api/1.1/UIFlow/forms/token?hash=42d5f0ac86c0c79b502bf70774838f8c9e0501ffb7203affe0bb4bdc0096xxxx&botLang=es\"}]},\"formData\":{\"formLink\":\"https://{{host}}/api/1.1/UIFlow/forms/token?hash=42d5f0ac86c0c79b502bf70774838f8c9e0501ffb7203affe0bb4bdc0096xxxx&botLang=es\",\"renderType\":\"pop-up\",\"formLinkExpiry\":300,\"submitExpiry\":600,\"formId\":\"frm-a568f475-2269-566c-8a86-0aa5a0f5xxxx\",\"name\":\"secureForm\",\"displayName\":\"Test form\"}}"
                    },
                    "thumbnails": []
                }
            ],
            "createdBy": "u-dd2d1106-0732-5f93-939c-8e423079xxxx",
            "createdOn": "2025-09-09T13:00:10.528Z",
            "timestampValue": 1757422810528,
            "lmodifiedBy": "u-dd2d1106-0732-5f93-939c-8e423079xxxx",
            "lmodifiedOn": "2025-09-09T13:00:10.528Z",
            "sessionId": "68c024b90f2c406b6e50xxxx",
            "isBB": 0,
            "isD": 0,
            "ms": 1,
            "chnl": "rtm",
            "lang": "en",
            "author": {
                "id": "u-ac66a8f2-5988-56d9-b54f-51a4ea6axxxx",
                "type": "FORM",
                "formId": "frm-a568f475-2269-566c-8a86-0aa5a0f5xxxx",
                "formName": "secureForm",
                "isSecuredForm": true,
                "aId": "a-551a805-04ab-4c08-88ab-c23eb5aaxxxx",
                "iId": "st-54acfbf7-16a8-5ebd-b457-fc4fcd28xxxx",
                "fId": "form-ba4db70-edd7-403a-8442-71925a73xxxx"
            },
            "conversationId": "c-63ee303-97eb-45be-ad3d-d4ec5218xxxx",
            "isA": true,
            "__lModifiedOn__": "2025-09-09T13:02:27.000Z",
            "__v": 0,
            "sT": 1,
            "resourceid": "messagestore",
            "tags": {
                "messageTags": [],
                "userTags": [],
                "sessionTags": [],
                "altText": []
            }
        },
        {
            "_id": "ms-20908599-37fe-5f99-b44a-40525a6axxxx",
            "botId": "st-54acfbf7-16a8-5ebd-b457-fc4fcd28xxxx",
            "type": "outgoing",
            "status": "pending",
            "orgId": "o-1f80fb1b-c3a7-5869-9189-e1f34b09xxxx",
            "accountId": "6769329ed730b47e3f47xxxx",
            "channels": [
                {
                    "type": "rtm"
                }
            ],
            "components": [
                {
                    "_id": "cp-8d894f4c-0d46-5bdb-81ee-47a9a086xxxx",
                    "cT": "text",
                    "data": {
                        "text": "{\"type\":\"template\",\"payload\":{\"template_type\":\"live_agent\",\"text\":\"Hace tiempo que no recibimos ningún mensaje tuyo. Proporcione una respuesta para mantener esta conversación activa.\"}}"
                    },
                    "thumbnails": []
                }
            ],
            "createdBy": "u-dd2d1106-0732-5f93-939c-8e423079xxxx",
            "createdOn": "2025-09-09T13:07:27.320Z",
            "timestampValue": 1757423247320,
            "lmodifiedBy": "u-dd2d1106-0732-5f93-939c-8e423079xxxx",
            "lmodifiedOn": "2025-09-09T13:07:27.320Z",
            "sessionId": "68c024b90f2c406b6e50xxxx",
            "isBB": 0,
            "isD": 0,
            "ms": 1,
            "chnl": "rtm",
            "lang": "en",
            "__lModifiedOn__": "2025-09-09T13:07:27.000Z",
            "__v": 0,
            "sT": 1,
            "resourceid": "messagestore",
            "tags": {
                "messageTags": [],
                "userTags": [],
                "sessionTags": [],
                "altText": []
            }
        }
    ]
}
```
**Sample Response for specific call Ids:**

```json
{
  "total": 9,
  "moreAvailable": false,
  "icon": "https://platform.korebots.com/api/getMediaStream/market/f-b1894f7b-ffc8-52bd-b4c9-efe326c7xxxx.png?n=1413421346&s=ImNqUEFLcGJFdE5ZSmN6WEdQaTFUN3Q3U1VGZGpBeElWNWRoSzdOd0c2dVE9Ig$$",
  "messages": [
    {
      "type": "outgoing",
      "text": "Hi how can i help",
      "timestamp": "2025-06-26T06:26:36.237Z"
    },
    {
      "type": "incoming",
      "text": "Help.",
      "timestamp": "2025-06-26T06:26:44.961Z"
    },
    {
      "type": "outgoing",
      "text": "Here are the tasks I can perform for you. \n a Book Flight \n b Order Food \n",
      "timestamp": "2025-06-26T06:26:45.302Z"
    },
    {
      "type": "incoming",
      "text": "Order food.",
      "timestamp": "2025-06-26T06:27:26.062Z"
    },
    {
      "type": "outgoing",
      "text": "Channel Level Standard Timeout Prompt",
      "timestamp": "2025-06-26T06:27:26.065Z"
    },
    {
      "type": "outgoing",
      "text": "Please provide your order",
      "timestamp": "2025-06-26T06:27:26.817Z"
    },
    {
      "type": "incoming",
      "text": "Register",
      "timestamp": "2025-06-26T06:28:52.424Z"
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
   <td>total
   </td>
   <td>Number
   </td>   
   <td>The total number of records identified as per the API request parameters. The response will include a maximum of X records. If more than X records are identified, then the ‘moreAvailable’ field in the response will have the value as ‘True’.
<p>
It is recommended to programmatically iterate the request by dynamically updating the values of the ‘skip’ and ‘limit’ parameters in the request.
   </td>
  </tr>
  <tr>
   <td>moreAvailable
   </td>
   <td>Boolean
   </td>   
   <td>Indicates if the API has returned all the records or if more are available, based on the pagination criteria.
<p>
<strong>True</strong> if more records are available. <strong>False</strong> if there are no more records to be retrieved.
   </td>
  </tr>
  <tr>
   <td>icon
   </td>
   <td>URL
   </td>   
   <td>The URL of the bot logo.
   </td>
  </tr>
  <tr>
   <td>messages
   </td>
   <td>Array
   </td>   
   <td>Contains complete information about the message.
   </td>
  </tr>
  <tr>
   <td>messages._id
   </td>
   <td>String
   </td>   
   <td>The unique identifier for the message record.
   </td>
  </tr>
  <tr>
   <td>messages.traceId
   </td>
   <td>String
   </td>   
   <td>A unique identifier associated with each incoming message.
<p>
<strong>Note</strong>: The <strong>Trace ID</strong> is retained in the logs for 30 days. Once the <strong>Trace ID</strong> is expired, you see a tooltip message as ‘<code>Trace Id: Trace records for this message are not available</code>‘.
   </td>
  </tr>
  <tr>
   <td>messages.type
   </td>
   <td>String
   </td>   
   <td>The message type – incoming (user input) or outgoing (bot response).
   </td>
  </tr>
  <tr>
   <td>messages.status
   </td>
   <td>String
   </td>   
   <td>Processing status of the message: received, queued, in progress, delivered, or pending.
   </td>
  </tr>
  <tr>
   <td>messages.lmodifiedOn
   </td>
   <td>Date
   </td>   
   <td>The last modified time for the record.
   </td>
  </tr>
  <tr>
   <td>messages.createdBy
   </td>
   <td>String
   </td>   
   <td>The user ID of the end user who was chatting with the bot.
   </td>
  </tr>
  <tr>
   <td>messages.channels
   </td>
   <td>Array
   </td>   
   <td>The channels object provides additional information about the channel through which the conversation was initiated.
   </td>
  </tr>
  <tr>
   <td>messages.channels.type
   </td>
   <td>String
   </td>   
   <td>Name of the channel through which the conversation is initiated. The default is ‘rtm’.
   </td>
  </tr>
  <tr>
   <td>messages.channels.channelUId
   </td>
   <td>String
   </td>   
   <td>The end-user’s identity provided by the channel.
   </td>
  </tr>
  <tr>
   <td>messages.components
   </td>
   <td>Array
   </td>   
   <td>Additional information about the message record.
   </td>
  </tr>
  <tr>
   <td>messages.components._id
   </td>
   <td>String
   </td>   
   <td>The unique id of the component.
   </td>
  </tr>
  <tr>
   <td>messages.components.cT
   </td>
   <td>String
   </td>   
   <td>Type of the user input (component type): text, audio, video, image, attachment, contact, task, filelink, location, email, alert, action, timeline, meeting, error, upgrade, NLResponse, or contextUpdate.
   </td>
  </tr>
  <tr>
   <td>messages.components.data
   </td>
   <td>Object
   </td>   
   <td>The data object.
   </td>
  </tr>
  <tr>
   <td>messages.components.data.text
   </td>
   <td>String
   </td>   
   <td>The message shown to the user or the bot, depending on the message type.
   </td>
  </tr>
  <tr>
   <td>messages.components.thumbnails
   </td>
   <td>Object
   </td>   
   <td>The thumbnails object.
   </td>
  </tr>
  <tr>
   <td>messages.components.thumbnails._id
   </td>
   <td>String
   </td>   
   <td>The unique id of the thumbnails.
   </td>
  </tr>
  <tr>
   <td>messages.components.thumbnails.width
   </td>
   <td>Number
   </td>   
   <td>The width of the thumbnails.
   </td>
  </tr>
  <tr>
   <td>messages.components.thumbnails.height
   </td>
   <td>Number
   </td>    
   <td>The height of the thumbnails.
   </td>
  </tr>
  <tr>
   <td>messages.components.thumbnails.size
   </td>
   <td>Number
   </td>    
   <td>The size of the thumbnails.
   </td>
  </tr>
  <tr>
   <td>messages.components.thumbnails.url
   </td>
   <td>URL
   </td>    
   <td>The URL of the thumbnails.
   </td>
  </tr>
  <tr>
   <td>messages.botId
   </td>
   <td>String
   </td>    
   <td>Bot ID or Stream ID.
   </td>
  </tr>
  <tr>
   <td>messages.orgId
   </td>
   <td>String
   </td>    
   <td>The organization ID to which the bot belongs to.
   </td>
  </tr>
  <tr>
   <td>messages.accountId
   </td>
   <td>String
   </td>    
   <td>The account id to which the bot belongs to.
   </td>
  </tr>
  <tr>
   <td>messages.isBB
   </td>
   <td>Number
   </td>    
   <td>Informs whether the conversation was initiated from the App Builder; 1 for Yes, 0 for No.
   </td>
  </tr>
  <tr>
   <td>messages.isD
   </td>
   <td>Number
   </td>    
   <td>Informs whether the conversation was initiated by a developer; 1 for Yes, 0 for No.
   </td>
  </tr>
  <tr>
   <td>messages.lang
   </td>
   <td>String
   </td>    
   <td>The conversation’s language.
   </td>
  </tr>
  <tr>
   <td>messages.ms
   </td>
   <td>Number
   </td>    
   <td>Message source; enum[0,1,2,3]; 0-task alert, 1-text, 2-task(action), and 3-others.
   </td>
  </tr>
  <tr>
   <td>messages.chnl
   </td>
   <td>String
   </td>    
   <td>The end user’s conversation channel.
   </td>
  </tr>
  <tr>
   <td>messages.createdOn
   </td>
   <td>Date
   </td>    
   <td>The record creation date.
   </td>
  </tr>
  <tr>
   <td>messages.timestampValue
   </td>
   <td>Number
   </td>    
   <td>The creation date converted into the timestamp format.
   </td>
  </tr>
  <tr>
   <td>messages.__v
   </td>
   <td>
   </td>   
   <td>The field is used for internal purposes. No specific significance.
   </td>
  </tr>
  <tr>
   <td>messages.resourceid
   </td>
   <td>
   </td>    
   <td>The field is used for internal purposes. No specific significance.
   </td>
  </tr>
  <tr>
   <td>messages.tags
   </td>
   <td>Object
   </td>    
   <td>Meta tags to filter the conversations.
   </td>
  </tr>
  <tr>
   <td>messages.tags.messageTags
   </td>
   <td>Array
   </td>    
   <td>Message tags object; custom tags added to the message in the conversation.
   </td>
  </tr>
  <tr>
   <td>messages.tags.messageTags.value
   </td>
   <td>Midex(User defined)
   </td>    
   <td>Tag’s value.
   </td>
  </tr>
  <tr>
   <td>messages.tags.messageTags.name
   </td>
   <td>String
   </td>   
   <td>Tag’s name.
   </td>
  </tr>
  <tr>
   <td>messages.tags.userTags
   </td>
   <td>Array
   </td>   
   <td>User tags object; custom tags added to the user’s profile information.
   </td>
  </tr>
  <tr>
   <td>messages.tags.userTags.value
   </td>
   <td>Midex(User defined)
   </td>     
   <td>Tag’s value.
   </td>
  </tr>
  <tr>
   <td>messages.tags.userTags.name
   </td>
   <td>String
   </td>   
   <td>Tag’s name.
   </td>
  </tr>
  <tr>
   <td>messages.tags.sessionTags
   </td>
   <td>Array
   </td>   
   <td>Session tags object; custom tags added to the conversation session.
   </td>
  </tr>
  <tr>
   <td>messages.tags.sessionTags.value
   </td>
   <td>Midex(User defined)
   </td>   
   <td>Tag’s value.
   </td>
  </tr>
  <tr>
   <td>messages.tags.sessionTags.name
   </td>
   <td>String
   </td>    
   <td>Tag’s name.
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>String
   </td>    
   <td>Author identifier (present for form authors).
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>String
   </td>    
   <td>Author type. Examples: `EVENT`, `FORM`, `SYSTEM`.
   </td>
  </tr>
  <tr>
   <td>formId
   </td>
   <td>String
   </td>    
   <td>Form identifier.
   </td>
  </tr>
  <tr>
   <td>formName
   </td>
   <td>String
   </td>    
   <td>Name of the form (if the author is a form).
   </td>
  </tr>
  <tr>
   <td>isSecuredForm
   </td>
   <td>Boolean
   </td>    
   <td>Indicates if the form is secured.
   </td>
  </tr>
  <tr>
   <td>aId
   </td>
   <td>String
   </td>    
   <td>Agent identifier (if applicable).
   </td>
  </tr>
  <tr>
   <td>iId
   </td>
   <td>String
   </td>    
   <td>Interaction or instance identifier (if applicable).
   </td>
  </tr>
  <tr>
   <td>fId
   </td>
   <td>String
   </td>    
   <td>Form instance identifier (if applicable).
   </td>
  </tr>
</table>

