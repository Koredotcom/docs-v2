--8<-- "includes/automationai-api-back-link.md"

# FAQ Training Status API

To get the status of the FAQ training.


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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/faqs/train/status?language={{Lang}}&state={{state}}</code>
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

<li>App Builder: Train FAQ

<li>Admin Console: Test and Train > Train FAQ
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
   <td><strong>BotId</strong>
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>language</strong>
   </td>
   <td>The Bot language which is identified by the language acronym. For example, <em>en</em> for English and <em>de</em> for German. The user can set the default language of the bot.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>state</strong>
   </td>
   <td>The state of the bot – <em>configured</em> is set for the In-Development version and <em>published</em> for the Published version. The default setting is <em>configured</em>.
   </td>
   <td>Optional
   </td>
  </tr>
</table>


## Sample Request


```json
curl -X GET \
  'https://{{host}}/api/public/bot/{{bot_id}}/faqs/train/status?language=en' \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json' \
```

## Body Parameters

No body parameters are passed.

## Sample Response

**For successful training**


```json
{
    "_id": "5dxxxxxxxxxxxxxxxxxxxxxx",
    "message": "Success",
    "status": "success",
    "__v": 0,
    "modifiedOn": "2019-06-27T12:07:30.898Z",
    "lastModifiedBy": "u-5xxxxxxd-bxx1-5xx0-axx8-2exxxxxxxxxx"
}
```

**For training in-progress**


```json
{
    "_id": "5dxxxxxxxxxxxxxxxxxxxxxx",
    "message": "in-progress",
    "status": "in-progress",
    "__v": 0,
    "modifiedOn": "2019-06-27T12:07:30.898Z",
    "lastModifiedBy": "u-5xxxxxxd-bxx1-5xx0-axx8-2exxxxxxxxxx"
}
```


**For failed training**


```json
{
    "_id": "5dxxxxxxxxxxxxxxxxxxxxxx",
    "message": "failure",
    "status": "failure",
    "__v": 0,
    "modifiedOn": "2019-06-27T12:07:30.898Z",
    "lastModifiedBy": "u-5xxxxxxd-bxx1-5xx0-axx8-2exxxxxxxxxx"
}
```