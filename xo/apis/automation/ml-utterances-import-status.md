--8<-- "includes/automationai-api-back-link.md"

# ML Utterances Import Status API

To get the status of the ML utterances import request made through Import ML Utterances API.


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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/mlimport/status/{{MLutteranceID}}</code>
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

<li>Admin Console: Test and Train > Utterances Import
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
   <td><strong>BotID</strong>
   </td>
   <td>The <em>Stream ID</em> of the bot to import the ML Utterances.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>MLutteranceID</strong>
   </td>
   <td>The ID generated in the format Bir-xxxxxxx-xxx-xxxx-xxxxx-xxxxxxxxxx when calling the <a href="../import-ml-utterances/">ML Utterances Import API</a>.
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Request


```json
curl -X GET 'https://{{host}}/api/public/bot/{{BotID}}/mlimport/status/{{MLutteranceID}}' \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json' \
```

## Body Parameters

No Body Parameters are passed.

## Sample Response


```json
{
    "_id": "bxx-7xxxxxxe-5xxb-5xx5-bxx5-88xxxxxxxxxx",
    "status": "success",
    "streamId": "sx-6exxxxxx-5xx1-5xx0-bxx8-8cxxxxxxxxxx",
    "createdBy": "u-5dxxxxxx-bxx1-5xx0-axx8-2exxxxxxxxxx",
    "requestType": "MLimport",
    "statusLogs": [],
    "createdOn": "2019-06-27T12:03:30.748Z",
    "__v": 0,
    "message": "File imported completed. 1 utterances copied successfully"
}
```