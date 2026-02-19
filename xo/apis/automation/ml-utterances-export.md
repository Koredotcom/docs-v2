--8<-- "includes/automationai-api-back-link.md"

# ML Utterances Export API

To export the ML utterances of a bot by creating a _request ID_ to generate the download link of the bot using the [ML Utterance Export Status API](ml-utterances-export-status.md).


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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/mlexport</code>
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

<li>App Builder: Utterances Export

<li>Admin Console: Test > Utterances Export and Train
</li>
</ul>
   </td>
  </tr>
</table>


## Query Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>MANDATE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>host</strong>
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>BotId</strong>
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
</table>


## Sample Request


```json
curl -X POST 'https://{{host}}/api/public/bot/{{bot_id}}/mlexport?state=configured&=&type=csv' \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json'
```

## Body Parameters

No body parameters are passed.


## Sample Response


```json
{
    "status": "IN_PROGRESS",
    "percentageComplete": 0,
    "streamId": "st-22184e1f-e116-5ed4-8741-7aec3be466d7",
    "jobType": "ML_UTTERANCE",
    "action": "EXPORT",
    "countOfDockStatuses": 1,
    "createdBy": "u-8214dc3a-c749-5d23-b8ad-2a21bfa396ca",
    "fileType": "CSV",
    "statusLogs": [],
    "_id": "ds-db32ec69-7f80-5873-890a-576fe585965f",
    "lMod": "2023-07-26T13:15:04.000Z",
    "createdOn": "2023-07-26T13:15:04.983Z",
    "requestedTime": "2023-07-26T13:15:04.984Z",
    "__v": 0
}
```