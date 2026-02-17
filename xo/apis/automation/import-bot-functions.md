--8<-- "includes/automationai-api-back-link.md"

# Import Bot Functions API

This API allows you to import bot functions from a specified file.

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
   <td><code>https://{{host}}/api/public/bot/botId/import/botfunctions</code>
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

<li>App Builder: Not Applicable

<li>Admin Console: Bot Definition > Bot Import
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
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
  </tr>
  <tr>
   <td>botID
   </td>
   <td>Required
   </td>
   <td>The Bot ID or Stream ID of the bot into which you want to import the functions. You can get it under <strong>General Settings</strong> on the App Builder.
   </td>
  </tr>
</table>


## Sample Request


```json
curl -X POST \
'https://{{host}}/api/public/bot/botId/import/botfunctions' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'content-type: application/json' \
--data '[{"fileName":"BotFunctions.js","fileId":"6565d8fea4fa7f2827b225f3"}]'
```

## Body Parameters

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
   <td>fileId
   </td>
   <td>Required
   </td>
   <td>The unique identifier (ID) of the file to be imported. This ID can be retrieved from the response of the <a href="../upload-file/">Upload File API </a>after uploading the Bot Functions file.
   </td>
  </tr>
  <tr>
   <td>fileName
   </td>
   <td>Required
   </td>
   <td>The name of the file containing the bot functions to import.
   </td>
  </tr>
</table>

## Sample Response

Success

```json
{
    "requestType": "BotImport",
    "status": "Success",
    "createdOn": "2023-11-28T12:14:59.215Z",
    "_id": "6565d9c378438bc41a6cfxxx",
    "createdBy": "u-37bc3853-76fd-5a25-b307-1af2e8f1bxxx",
    "__v": 0,
    "fileId": "6565d8fea4fa7f2827b225f3",
    "fileName": "BotFunctions.js"
}
```
Failure

```json
{
    "errors": [
        {
            "msg": "Invalid file id",
            "code": 400
        }
    ]
}
