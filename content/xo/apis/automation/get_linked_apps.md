--8<-- "includes/automationai-api-back-link.md"

# Get Linked Apps API

Use this API to retrieve all apps linked to a universal or parent app.

| METHOD | GET |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/api/1.1/public/bot/{{streamId}}/universalbot/link?language=en` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`<br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | App Builder: Get linked App details <br> Admin Console: Getlinkedbotdetails |

## Path Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | AppId or StreamId. You can access it from the App Settings page. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/api/1.1/public/bot/{{streamId}}/universalbot/link?language=en' \
--header 'sec-ch-ua-platform: "Linux"' \
--header 'sec-ch-ua: "Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"' \
--header 'X-TimeZone: Asia/Calcutta' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'bot-language: en' \
--header 'Accept: application/json, text/plain, /' \
--header 'state: configured' \
--header 'Content-Type: application/json;charset=UTF-8' \
--header 'Referer: https://{{host}}/builder/app/welcomeflows' \
--header 'app-language: en' \
--header 'client-app: unified' \
--header 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36' \
--header 'X-Timezone-Offset: -330' \
--header 'auth: {{jwt_token}}'
```

## Request Headers

| **Header** | **Description** | **Type/Required** |
| :---- | :---- | :---- |
| `sec-ch-ua-platform` | Indicates the client’s operating system platform. | string, optional|
| `sec-ch-ua` | Helps the server understand the client environment. | string, optional |
| `X-TimeZone` | Client’s time zone identifier | string, optional |
| `sec-ch-ua-mobile` | Specifies whether the request originates from a mobile device or a non-mobile device. | boolean, optional|
| `bot-language` | Preferred language of the bot or client application. | string, required |
| `Accept` | Defines the response content types that the client can process. | string, required |
| `state` | Represents the current application or workflow state. | string, required |
| `Content-Type` | Specifies the type of the request body. | string, required |
| `Referer` | Identifies the web page from which the request originated. | string (URL), optional |
| `app-language` | Application UI or processing language preference. | string, required |
| `client-app` | Identifies the source application making the request. | string, required |
| `User-Agent` | Full user agent string identifying the browser, engine, and operating system.  | string, optional |
| `X-Timezone-Offset` | Client’s offset from UTC in minutes.  | integer, optional |
| `auth` | Authentication credential or token used to authorize the request. | string, required |

## Sample Response

```
{
    "type": "unified",
    "appType": "unified",
    "isUXOUB": true,
    "isDialogGPTEnabled": true,
    "configuredLinkedApps": [
        {
            "_id": "st-a37e1091-a381-5c55-b498-2c2fbe6xxxxx",
            "name": "ABR",
            "defaultLanguage": "en",
            "appType": "unified",
            "type": "default",
            "status": 1,
            "isDialogGPTEnabled": false,
            "configuredVersion": 1765345178,
            "publishedVersion": "1744860968"
        },
        {
            "_id": "st-b3b69a51-13f5-50a5-9617-761c157xxxxx",
            "name": "Agent  App",
            "defaultLanguage": "en",
            "appType": "unified",
            "type": "default",
            "status": 1,
            "isDialogGPTEnabled": false,
            "configuredVersion": 1765345178,
            "publishedVersion": "1744860173"
        },
        {
            "_id": "st-ab605db2-5721-5c3a-91c9-a412a8exxxxx",
            "name": "Agent",
            "defaultLanguage": "en",
            "appType": "unified",
            "type": "default",
            "status": 1,
            "isDialogGPTEnabled": false,
            "configuredVersion": 1765345178,
            "publishedVersion": "1744860173"
        },
        {
            "_id": "st-c9de85bc-e4b9-5fc1-ac98-20df015xxxxx",
            "name": "AGdrails",
            "defaultLanguage": "en",
            "appType": "unified",
            "type": "default",
            "status": 1,
            "isDialogGPTEnabled": false,
            "configuredVersion": 1765345178,
            "publishedVersion": "1744860621"
        }
    ],
    "publishedLinkedApps": [
        {
            "_id": "st-a37e1091-a381-5c55-b498-2c2fbe6xxxxx",
            "name": "ABR",
            "defaultLanguage": "en",
            "appType": "unified",
            "type": "default",
            "status": 1,
            "isDialogGPTEnabled": false,
            "configuredVersion": 1765345178,
            "publishedVersion": "1744860968"
        },
        {
            "_id": "st-b3b69a51-13f5-50a5-9617-761c157xxxxx",
            "name": "Agent  App",
            "defaultLanguage": "en",
            "appType": "unified",
            "type": "default",
            "status": 1,
            "isDialogGPTEnabled": false,
            "configuredVersion": 1765345178,
            "publishedVersion": "1744860173"
        },
        {
            "_id": "st-ab605db2-5721-5c3a-91c9-a412a8exxxxx",
            "name": "Agent",
            "defaultLanguage": "en",
            "appType": "unified",
            "type": "default",
            "status": 1,
            "isDialogGPTEnabled": false,
            "configuredVersion": 1765345178,
            "publishedVersion": "1744860173"
        },
        {
            "_id": "st-c9de85bc-e4b9-5fc1-ac98-20df015xxxxx",
            "name": "AGdrails",
            "defaultLanguage": "en",
            "appType": "unified",
            "type": "default",
            "status": 1,
            "isDialogGPTEnabled": false,
            "configuredVersion": 1765345178,
            "publishedVersion": "1744860621"
        }
    ],
    "uxoUBConfigured": {
        "linkedApps": [
            "st-a37e1091-a381-5c55-b498-2c2fbe6xxxxx",
            "st-b3b69a51-13f5-50a5-9617-761c157xxxxx",
            "st-ab605db2-5721-5c3a-91c9-a412a8exxxxx",
            "st-c9de85bc-e4b9-5fc1-ac98-20df015xxxxx"
        ],
        "isUXOUB": true
    },
    "uxoUBPublished": {
        "linkedApps": [
            "st-a37e1091-a381-5c55-b498-2c2fbe6xxxxx",
            "st-b3b69a51-13f5-50a5-9617-761c157xxxxx",
            "st-ab605db2-5721-5c3a-91c9-a412a8exxxxx",
            "st-c9de85bc-e4b9-5fc1-ac98-20df015xxxxx"
        ],
        "isUXOUB": true
    }
}
```

## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `type` | Indicates the overall application category. | string |
| `appType` | Specifies the application type. For example, `unified`. | string |
|  `isUXOUB` | Indicates whether the UXO universal or parent app is enabled at the root level. | boolean |
|  `isDialogGPTEnabled` | Indicates whether DialogGPT functionality is enabled. | boolean |
|  `configuredLinkedApps` | List of applications currently in a configured (draft) state. | array of objects |
|  `configuredLinkedApps._id` | Unique identifier of the linked application. | string |
|  `configuredLinkedApps.name` | Display name of the application. | string |
|  `configuredLinkedApps.defaultLanguage` | Default language code of the application (for example, `en`). | string |
|  `configuredLinkedApps.appType` | Type of the linked application. | string |
|  `configuredLinkedApps.type` | Classification of the linked app. For example, `default`. | string |
|  `configuredLinkedApps.status` | Current status code of the application (for example, `1` = active). | integer |
|  `configuredLinkedApps.isDialogGPTEnabled` | Indicates whether DialogGPT is enabled for the linked application. | boolean |
|  `configuredLinkedApps.configuredVersion` | Latest configured (draft) version identifier or timestamp. | number |
|  `configuredLinkedApps.publishedVersion` | Latest published version identifier or timestamp. | string |
|  `publishedLinkedApps` | List of applications currently in a published state. | array of objects |
|  `configuredLinkedApps._id` | Unique identifier of the linked application in the configured state | string |
|  `configuredLinkedApps.name` | Display name of the application. | string |
|  `configuredLinkedApps.defaultLanguage` | Default language code of the application (for example, `en`). | string |
|  `configuredLinkedApps.appType` | Type of the linked application. | string |
|  `configuredLinkedApps.type` | Classification of the linked app. For example, default. | string |
|  `configuredLinkedApps.status` | Current status code of the application (for example, `1` \= active). | integer |
|  `configuredLinkedApps.isDialogGPTEnabled` | Indicates whether DialogGPT is enabled for the linked application. | boolean |
|  `configuredLinkedApps.configuredVersion` | Latest configured (draft) version identifier or timestamp. | number |
|  `configuredLinkedApps.publishedVersion` | Latest published version identifier or timestamp. | string |
|  `uxoUBConfigured` | UXO Universal or parent app configuration for the configured state. | object |
|  `uxoUBConfigured.linkedApps` |  List of linked application IDs associated with the UXO Universal or parent app.  | array[string] |
|  `uxoUBConfigured.isUXOUB` | Indicates whether the UXO universal or parent app is enabled for this state. | boolean |
|  `uxoUBPublished` | UXO Universal or parent app configuration for the published state. | object |
|  `uxoUBPublished.linkedApps` | List of linked application IDs associated with the UXO Universal or parent app. | array[string] |
|  `uxoUBPublished.isUXOUB` | Indicates whether the UXO universal or parent app is enabled for this state. | boolean |