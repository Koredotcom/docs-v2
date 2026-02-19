
--8<-- "includes/automationai-api-back-link.md"

# ML Utterances Import API

To import the ML Utterances into a bot.


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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/mlimport</code>
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

<li>App Builder: Utterances Import

<li>Admin Console: Test > Utterances Import and Train
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
curl -X POST 'https://{{host}}/api/public/bot/{{bot ID}}/mlimport' \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json' \
  -d '{
    "fileName":"MLUtterances.json",
    "fileId": "5beed4fd0b9a4b740c09dca2"
  }'
```

## Body Parameters

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
   <td><strong>fileName</strong>
   </td>
   <td>The full name of the ML Utterances file to be imported.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>fileID</strong>
   </td>
   <td>The ID of the imported file (provided by the cloud service where the file is uploaded).
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Response

```json
{
    "status": "pending",
    "streamId": "sx-6exxxxxx-5xx1-5xx0-b9xx-8cxxxxxxxxxx",
    "createdBy": "u-5dxxxxxxxxxxx-5xx0-a3xx-2exxxxxxxxxx",
    "requestType": "MLimport",
    "_id": "bxx-7exxxxxx-5xxb-51xx-bxx5-88xxxxxxxxxx",
    "statusLogs": [],
    "createdOn": "2019-06-27T12:03:30.748Z",
    "__v": 0
}
```
