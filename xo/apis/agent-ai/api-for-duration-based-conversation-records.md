--8<-- "includes/agentai-api-back-link.md"

# Duration-Based Conversation Records

This API retrieves a paginated list of Agent AI conversation records within a specified date range. 

!!! note
    
    The maximum duration supported for the date range is 7 days.

| **Parameter**   | **Description** |
|------------------|-----------------|
| **Method**       | `POST` |
| **Endpoint**     | `https://{{host}}/agentassist/api/v1/public/{{botid}}/aaconversation` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`  <br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token){:target="_blank"} |
| **Scope**        | `AgentAssist Analytics`  <br> See [Associate API Scopes](../automation/api-introduction.md#associating-api-scopes){:target="_blank"} |

## Path Parameters

| **Parameter** | **Required** | **Description** |
|----------------|--------------|-----------------|
| `host` | Yes | The environment URL. For example, `https://platform.kore.ai`. |
| `botid` | Yes | The unique bot identifier. Example: `st-79a76d65-d540-5b33-96d5-9bf3eebxxxxx` |

## Header Parameters

| **Parameter** | **Type** | **Required** | **Description** |
|----------------|-----------|--------------|-----------------|
| `accountid` | String | Yes | Unique identifier of the customer account making the request. |

## Sample Body Parameters

| **Parameter** | **Type** | **Required** | **Description** |
|----------------|-----------|--------------|-----------------|
| `from` | String (YYYY-MM-DD) | Yes | Start date for fetching conversation records. |
| `to` | String (YYYY-MM-DD) | Yes | End date for fetching conversation records. |
| `page` | Integer | No | Page number for paginated results. Default: `1` |
| `limit` | Integer | No | Number of records per page. The maximum limit is `20`. |
| `includeHistory` | Boolean | No | If `true`, includes conversation history. Default: `false` |

## Sample Request

```
curl --location '[https://{{host}}/agentassist/api/v1/public/{{botid}}/aaconversation'](https://uat-agentassist-az.korebots.com/agentassist/api/v1/public/st-841b5cd4-6393-5561-9218-34e3c62f56c0/aaconversation?from=2025-10-13&to=2025-10-13%27) 
--header 'accountId: 660aafa0c0971e56e27xxxxx' 
--header 'auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLTU1ZDg4OGQzLTg1MDItNWI1OS1hNWNkLTMyOGMyZTJmYmIzZCJ9._C2kY7uD_1FIBnoHuIqj03pJ951EwCTh0mysOuVKMCI' 
--header 'Content-Type: application/json' 
--data '{

    "from": "2025-10-13",

    "to": "2025-10-13",

   "page": 2,

   "limit": 20,

   "includeHistory": false

}'
```

## Sample Response

```
{

    "results": [

        {

            "_id": "68ececc87a98f960ee0xxxxx",

            "convId": "UAT-Master-Bot-1xxxxx",

            "botId": "st-841b5cd4-6393-5561-9218-34e3c62xxxxx",

            "channelType": "voice",

            "isExtAD": **true**,

            "startTime": "2025-10-13T12:12:56.561Z",

            "aaSessionId": "68ececc803cec129ea9xxxxx",

            "aaUserId": "u-b92404aa-f0cd-541f-ad4a-9ed4dd8xxxxx"

        },

        {

            "_id": "68ecee337a98f960ee0xxxxx",

            "convId": "UAT-Master-Bot-1xxxxx",

            "botId": "st-841b5cd4-6393-5561-9218-34e3c62xxxxx",

            "channelType": "voice",

            "isExtAD": **true**,

            "startTime": "2025-10-13T12:18:59.357Z",

            "aaSessionId": "68ecee3303cec129ea9xxxxx",

            "aaUserId": "u-bae3f44c-4523-5eb5-b28e-01b9e24xxxxx"

        },

        

    ],

    "skip": 20,

    "limit": 20,

    "hasMore": **false**,

    "totalPages": 2,

    "totalResults": 29

}
```

## Response Body Parameters

| **Parameter** | **Type** | **Description** |
|----------------|-----------|-----------------|
| `results` | Array | List of conversation objects retrieved. |
| `results._id` | String | Unique identifier of the conversation document. |
| `results.convId` | String | Conversation identifier. |
| `results.botId` | String | Identifier of the bot handling the conversation. |
| `results.isExtAD` | Boolean | Indicates whether the conversation is external. |
| `results.startTime` | String (ISO 8601) | Timestamp when the conversation started. |
| `results.experience` | String | Experience type, for example, `chat`. |
| `results.aaSessionId` | String | (Optional) Agent AI session ID. |
| `results.aaUserId` | String | (Optional) Agent AI user ID. |
| `results.mbSessionId` | String | (Optional) Messaging backend session ID. |
| `results.mbUserId` | String | (Optional) Messaging backend user ID. |
| `results.messages` | Array | List of messages exchanged in the conversation. |
| `results.messages.botId` | String | Bot ID associated with the message. |
| `results.messages.type` | String | Type of message, for example, `incoming` or `outgoing`. |
| `results.messages.status` | String | Status of the message, for example, `pending`. |
| `results.messages.components` | Array | List of message components, such as text or media. |
| `results.messages.components._id` | String | Unique identifier of the message component. |
| `results.messages.components.cT` | String | Component type, for example, `text`. |
| `results.messages.components.data` | Object | Data of the component, for example, `{ "text": "hi" }`. |
| `results.messages.components.thumbnails` | Array | List of thumbnails (if any) associated with the component. |
| `results.messages.sT` | Integer | (Optional) Step or sequence number of the message. |
| `results.messages.author.type` | String | |
