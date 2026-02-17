--8<-- "includes/automationai-api-back-link.md"

# Channel Enablement API

To initiate enable a channel for an AI Agent.

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
   <td><code>https://{{host}}/api/public/channels</code>
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

<li>App Builder: Not Applicable

<li>Admin Console: Channel Management
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
   <td>host
   </td>
   <td>The environment URL. For example, https://platform.kore.ai
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Request

**Sample Request for Web/Mobile channel**:


```json
curl --location --request POST 'https://{{host}}/api/public/channels' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "streamId": "st-xxxxfxxx-edxx-xxxx-xxbb-fxxxexxfxfcx",
    "channelDetails": {
        "displayName": "Web / Mobile Client",
        "type": "rtm",
        "app": {
           "clientId": "cs-xexxdxxx-xbbc-xxex-xxef-xxxxxxxxfxfx",
           "appName": "app_name"
        },
     "enable": true
    },
  "type": "rtm"
}'
```


**Sample Request for MS Teams channel**:


```json
curl --location --request POST 'https://{{host}}/api/public/channels' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "streamId": "st-4xx7ccxx-8xx5-5cxx-9xxf-5bxxxxxxxxxx",
    "channelDetails": {
       "botName": "Banking Bot",
       "enable": true,
       "type": "msteams",
       "appId": "cbabcxce-acxb-xxxx-axxf-xabxxxfexxxb",
       "appPassword": ""
     },
   "type": "msteams"
}'
```


**Sample Request for WebHook channel**:


```json
curl --location --request POST 'https://{{host}}/api/public/channels' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "streamId": "st-cxfaxxax-xexx-xxex-axxe-xxdxexxxfxex",
    "channelDetails": {
        "app": {
            "clientId": "cs-dxxcxxxc-Xxxx-xxxx-axxx-xxxxcxbexeax",
            "appName": "Banking Bot"
        },
     "createInstance": true,
     "type": "ivr",
     "displayName": "webhook1",
     "enable": true,
     "enablePolling": false,
     "isAsync": false,
    },
    "type": "ivr"
}'
```


**Sample Request for Slack channel**:


```json
curl --location --request POST 'https://{{host}}/api/public/channels' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
   "streamId": "st-1bxxxxxx-9xx0-5xxa-abxx-51xxxxxxxxxa",
   "channelDetails": {
       "displayName": "slack",
       "botName":"Banking Bot",
       "enable": true,
       "type": "slack",
       "accessToken": "xoxb-xxxxxxxx-xxxxxx-xxxxxxxxxxxxxxxxxxxxxZ",
       "clientId": "xxxxxx.xxxxxx",
       "clientSecret": "xxexxdxxxdxcxxbxacxxxdfxxxxxex",
       "verificationToken": "abcd"
   },
   "type": "slack"
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
   <td>streamId
   </td>
   <td>Stream or Bot ID – You can access it from the General Settings page of the bot.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>appName
   </td>
   <td>The app associated with this Bot, you can obtain it from the Manage Apps page of the bot
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>clientId
   </td>
   <td>The client id for the app associated with this Bot, you can obtain it from the Manage Apps page of the bot
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>Channel that you want to enable for this Bot. Following are the channel type details:
<ul>

<li>rtm – for Web/Mobile SDK

<li>slack – for Slack

<li>ivr – for WebHook

<li>msteams – for MS Teams
</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Response

The response from the platform depends on the channel being enabled.

Sample response for **web/mobile SDK**:


```json
{
    "displayName": "Web / Mobile Client",
    "type": "rtm",
    "enable": true,
    "notification": {
        "acl": []
    },
    "name": "Web/Mobile Client",
    "embedWebClientDetails": {
        "scriptTag": "",
        "cssTag": " 	",
        "domains": [],
        "apiKey": "d3be215756d94803b0a548e59xxxxxxxxxxxx873cec9e48eb918add573d738f2xxxx",
        "testAPIKey": "7e203670dc4d41d5bcc0d58xxxxxxxxxxxxc9438b45c1971c6e703582c88xxxxx",
        "chatURL": "https://platform.kore.ai/webclient/d3be215756d94803b0548e594c0e162a5b88e873cec9e48eb918add573d738f26stda",
        "isURLEnabled": true
    }
}
```

Sample response for **webhook channel**:


```json
{
    "streamId": "st-6f90cbdc-46c7-52f8-a388-8db39b0f4436",
    "channelDetails": {
        "app": {
             "clientId": "cs-ccaa5400-83b9-5a38-897d-0114d2aab521",
             "appName": "try"
        },
        "createInstance": true,
        "type": "ivr",
        "displayName": "webhook11",
        "enable": true,
        "isAsync": false
    },
    "type": "ivr"
}
```

Sample response for **Slack channel**:

```json
{
    "streamUserAccountId": "su-5d7c2d17-5fa2-58db-b2fc-83cfe259d14a",
    "type": "slack",
    "enable": true,
    "verificationToken": "a7365",
    "notification": {
        "acl": []
    },
    "name": "Slack"
}
```

Sample response for **MS Teams channel**:

```json
{
    "streamId": "st-6f90cbdc-46c7-52f8-a388-8db39b0f4436",
    "channelDetails": {
       "botName": "today",
       "enable": true,
       "type": "msteams",
       "appId": "e51678c4-3c92-4053-8d0e-f9173ec1136e",
       "appPassword": "DLu8Q~oB1BSUxxxxxUp.BWotfOqAagfPCOmxxxxx"
    },
    "type": "msteams"
}
```