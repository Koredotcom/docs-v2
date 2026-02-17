--8<-- "includes/automationai-api-back-link.md"

# ML Utterances Export Status API

To get the download link of the ML Utterances export copy.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/mlexport/status</code>
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
curl -X GET \
  'https://{{host}}/api/public/bot/{{bot ID}}/mlexport/status' \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json' \
```

## Body Parameters

No body parameters are passed.

## Sample Response


```json
{
    "_id": "dx-aaxxxxxx-bxxe-5xxc-bxxf-31xxxxxxxxxx",
    "status": "SUCCESS",
    "percentageComplete": 100,
    "streamId": "sx-6xxxxxx2-5xx1-5xx0-b9xx-8cxxxxxxxxxx",
    "createdBy": "u-5dxxxxxx-bxx1-5xx0-axx8-2exxxxxxxxxx",
    "jobType": "ML_UTTERANCE",
    "action": "EXPORT",
    "countOfDockStatuses": 1,
    "fileType": "CSV",
    "statusLogs": [],
    "lMod": "2019-06-27T06:49:15.726Z",
    "createdOn": "2019-06-27T06:49:15.572Z",
    "requestedTime": "2023-07-25T15:23:36.912Z",
    "__v": 0,
    "downloadUrl": ""
}
```
