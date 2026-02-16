--8<-- "includes/automationai-api-back-link.md"

# Install a Sample Bot API

To install a sample bot.


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
   <td><code>https://{{host}}/api/public/samplebots/{{botId}}/add</code>
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
<code>AccountId: {{accountId}}</code>
<p>
<code>userId: {{userId}}</code>
<p>
<code>bot-language : en</code>
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

<li>Admin Console: Bot Definition > Bot Create
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
   <td>The environment URL. for example, https://platform.kore.ai
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>BotID</strong>
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> which can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Request

```json
curl -X POST 'https://{{host}}/api/public/samplebots/{{bot_id}}/add' \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json' \
  -H 'AccountId: xexxbaxxxbxbxxxxxxxxcxfb' \
  -H 'userId: u-fbxxfxxx-axfd-xfcx-abxx-xcxxxxaxexxx' \
  -H 'bot-language: en 
```

## Body Parameters

No Body parameters are passed.

## Sample Response

```json
{
    "visibility": {
        "namespace": "private",
        "namespaceIds": [
            "u-fbxxxxxx-a5xx-5xx8-abxx-6cxxxxxxxxxx"
        ]
    },
    "languages": [],
    "screenShots": [],
    "downloadCount": 0,
    "alerts": [
        "l-bexxxxxx-dxxe-5xx1-84xx-c0xxxxxxxxxx"
    ],
    "actions": [],
    "dialogs": [
        "dg-cbxxxxxx-cxx4-5fxx-8xx6-b2xxxxxxxxxx",
        "dg-35xxxxxx-bxx7-58xx-bxxa-0bxxxxxxxxxx"
    ],
    "widgets": [],
    "panels": [],
    "forms": [],
    "categoryIds": [
        "451xxxxxxxxxxxxxxxxxxxxx"
    ],
    "class": [],
    "featured": false,
    "profileRequired": true,
    "sendVcf": false,
    "isNLEnabled": true,
    "interruptsEnabled": true,
    "state": "setup",
    "defaultLanguage": "en",
    "_id": "st-cxxxxxxe-exxe-5xx3-8xx0-2cxxxxxxxxxx",
    "modifiedOn": "2021-01-12T10:55:11.551Z",
    "sBannerColor": "#E44929",
    "bBannerColor": "#E44929",
    "createdOn": "2021-01-12T10:55:11.115Z",
    "createdBy": "u-fbxxxxxx-axxd-5xx8-axx4-6cxxxxxxxxxx",
    "lastModifiedBy": "u-fbxxxxxx-axxd-5fxx-axx4-6cxxxxxxxxxx",
    "accountId": "5e8xxxxxxxxxxxxxxxxxxxxx",
    "sharedBy": [],
    "__v": 0,
    "name": "Asana Sample_owner@example.com",
    "keywords": [],
    "originalName": "Asana Sample",
    "icon": "58fxxxxxxxxxxxxxxxxxxxxx",
    "color": "#E44929"
}
```