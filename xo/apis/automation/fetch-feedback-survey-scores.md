--8<-- "includes/automationai-api-back-link.md"

# Feedback Survey API

To fetch the feedback survey scores provided by the user in the conversation with an AI Agent and push the data for visualization on the **Feedback Analytics** module using the **_Survey Type_** and **_Survey Name_**.

<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/saveFeedback</code>
<p>
 
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
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Metrics

<li>Admin Console: Bot Analytics > Feedback Analytics
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
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>host</strong>
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td><strong>BotId</strong>
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
<p>
<strong>Note</strong>: This is required only for App Builder API scope of Proactive Messages.
   </td>
   <td>string, required
   </td>
  </tr>
</table>



## Sample Request


```json
curl --location 'https://{{host}}/api/1.1/public/bot/{{botId}}/saveFeedback' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
"channelUId":"qatesting@vomoto.com",
"name":"Thumb",
"score":0,
"channel":"rtm",
"type":"THUMB",
"language":"en",
"message":""
}'
```



## Request Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
  </tr>
  <tr>
   <td>channelUId
   </td>
   <td>The ID of the user on the channel where the feedback survey was triggered. Can be the user’s email id or enterprise assigned unique id.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>name
   </td>
   <td>The name of the survey provided by the user.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>score
   </td>
   <td>The feedback survey score provided by the user as a response.
   </td>
   <td>number, required
   </td>
  </tr>
  <tr>
   <td>channel
   </td>
   <td>The channel used for the feedback survey.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>One of the feedback survey types THUMB, NPS, or CSAT.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>language
   </td>
   <td>The language in which the Feedback survey is triggered.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>message
   </td>
   <td>The message prompted to the user during the feedback survey.
   </td>
   <td>string, required
   </td>
  </tr>
</table>


 


## Sample Response


```json
{
"botId": "st-053cd130-f983-577a-8aad-2504xxxxxxxx",
"channel": "rtm",
"language": "en",
"score": 0,
"timestamp": "2023-03-23T07:07:43.538Z",
"createdOn": "2023-03-23T07:07:43.538Z",
"timestampValue": 1679555263538,
"type": "THUMB",
"name": "Thumb",
"channelUId": "qatesting@vomoto.com",
"orgId": "o-89b0abd5-19af-5017-a80a-xxxxxxc7a6xx",
"accountId": "60dbef1bc2f5c25106cdb57d",
"userId": "u-f5d97fb8-8767-5b6c-a28d-xxxxxx281exx",
"_id": "641bfabf0353f52d9xxxxxxx",
"__v": 0
}
```


## Response Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
  </tr>
  <tr>
   <td>botId
   </td>
   <td>The ID of the AI Agent for which feedback was given. You can access it from the <strong>General Settings</strong> page.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>channel
   </td>
   <td>The channel on which the user responds to the feedback survey.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>language
   </td>
   <td>The language in which the feedback survey is triggered.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>score
   </td>
   <td>The feedback score.
   </td>
   <td>number, required
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>Feedback response date converted into timestamp format.
   </td>
   <td>date (ISO Date format YYYY-MM-DDThh:mm:ss.mmmZ), required
   </td>
  </tr>
  <tr>
   <td>createdOn
   </td>
   <td>Feedback creation date converted into timestamp format.
   </td>
   <td>date (ISO Date format YYYY-MM-DDThh:mm:ss.mmmZ), required
   </td>
  </tr>
  <tr>
   <td>timestampValue
   </td>
   <td>Creation date converted into timestamp numeric format.
   </td>
   <td>number, required
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>The feedback survey type.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>name
   </td>
   <td>The feedback survey name.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>channelUId
   </td>
   <td>The end-user’s channel user identifier.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>orgId
   </td>
   <td>Organization id the bot belongs to.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>accountId
   </td>
   <td>Account id the bot belongs to.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>userId
   </td>
   <td>User id the bot belongs to.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>_Id
   </td>
   <td>Unique identifier for the message record.
   </td>
   <td>string, required
   </td>
  </tr>
  <tr>
   <td>__v
   </td>
   <td>The value is always 0. Does not have any significance as of now.
   </td>
   <td>integer, optional
   </td>
  </tr>
</table>

