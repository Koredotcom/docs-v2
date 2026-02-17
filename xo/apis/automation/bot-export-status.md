--8<-- "includes/automationai-api-back-link.md"

# Bot Export – Status API

Gets the status of Bot Export request and also provides the download link of the bot export copy after the export is completed. Refer here for initiating [Bot Export API](bot-export.md).

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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/export/status</code>
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

<li>App Builder: Bot Export

<li>Admin Console: Bot Definition > Bot Export
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
   <td>The environment URL. For example,<code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>BotID</strong>
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
</table>


## Sample Request


```json
curl -X GET 'https://{{host}}/api/public/bot/{{BotID}}/export/status' \
  -H 'auth:  {{YOUR_JWT_ACCESS_TOKEN}}' \
```

## Body Parameters

No body parameters are passed.

## Sample Response

```json
{
    "_id": "ber-xxxxx-xxx-xxx-xxx-xxxxx",
    "botId": "st-xxxxx-xxx-xxx-xxx-xxxxx",
    "createdBy": "u-xxxxx-xxx-xxx-xxx-xxxxx",
    "exportType": "published",
    "requestType": "Botexport",
    "status": "success",
    "createdOn": "2018-12-05T07:18:40.028Z",
    "__v": 0,
    "downloadURL": "{{url}}",
    "fileId": "{{file-id}",
    "store": {
        "urlParams": "url-params"
    },
    "fileSize": "947"
}
