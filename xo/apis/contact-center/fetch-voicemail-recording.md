--8<-- "includes/ccai-api-back-link.md"

# Fetch Voicemail Recording

This API facilitates the downloading of voicemail recordings. The API provides an S3-hosted URL where the voicemail recording can be accessed.

| Method       | GET |
|-------------|-----|
| Endpoint    | `https://{{host}}/api/public/bot/{{botId}}/voicemail?sessionId={{sessionId}}&transcription=true` |
| Content Type | `application/json` |
| Authorization | `auth: {{JWT}}`  <br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| API Scope   | SmartAssist Voicemail |

## Path Parameters

| PARAMETER | DESCRIPTION | TYPE |
|-----------|-------------|------|
| host      | Environment URL, for example, `https://platform.kore.ai` | string, required |
| botId     | botId or streamId. You can get it from the App Settings page. | string, required |

## Query Parameters

| PARAMETER    | DESCRIPTION  | TYPE |
|-------------|-------------|------|
| sessionId   | The unique identifier for the session record. You can access it from the conversation logs. | string, required |
| transcription | Controls whether the API returns text transcriptions of the voicemail messages. When set to `true`, the response includes machine-generated transcripts for each voicemail. | boolean, required |

## Sample Request

```
curl --location 'https://{{host}}/api/public/bot/{{botId}}/voicemail?sessionId=67aa38026e199c8f470exxxx&transcription=true' \
--header 'auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLTQ0YTIzOTNmLTk4MTEtNWY3Mi04NGUyLTM0YTY4MzI4N2I1ZCJ9.kW9tN1gTUW7QjFrHvwBp-EcRu8QhBK223Xi2NgZxxxx' \
--data ''
```

## Sample Response

```
{
   "status": "success",
   "voicemail recording": [
       {
           "fileName": "voicemail_67aa38026e199c8f470exxxx.wav",
           "fileUrl": "https://agentassist-az.korebots.com/api/getMediaStream/smartassistrecording/UAT/o-2b41857b-a1cb-5862-8faf-e3d99c3axxxx/st-b110e148-7428-5295-960b-099e8167xxxx/2025/10-02-2025/f-71f45a0e-da5a-5989-8a73-341a199bxxxx.wav?e=1739359482&n=3757551799&s=IldYeks0dFNacGtWbjJicGpNNU5KL0ZNUWtWZVhUQm9yelFMeVk2SDdkcWM9xxxx"
       }
   ],
   "transcriptions": [
       {
           "_id": "ms-dbd18b09-a8d5-54f3-a936-f694d6adxxxx",
               "botId": "st-6cbdca58-bf5e-5d9b-bc21-cb37bef2xxxx",
               "type": "incoming",
               "status": "received",
               "channels": [
                   {
                       "handle": {
                           "userId": "u-353e231f-f6d7-5de2-bd88-5323235fxxxx",
                           "taskBotId": "st-6cbdca58-bf5e-5d9b-bc21-cb37bef2xxxx"
                       },
                       "from": "u-353e231f-f6d7-5de2-bd88-5323235fxxxx",
                       "botInfo": {
                           "chatBot": "SmartAssist",
                           "taskBotId": "st-6cbdca58-bf5e-5d9b-bc21-cb37bef2xxxx"
                       },
                       "type": "korevg",
                       "cc": [
                           "",
                           ""
                       ],
                       "bcc": [
                           "",
                           ""
                       ]
                   }
               ],
               "components": [
                   {
                       "_id": "cp-73136603-181e-587a-a9b8-99a65595xxxx",
                       "cT": "text",
                       "data": {
                           "text": "Hi, this is voicemail testing."
                       },
                       "thumbnails": []
                   }
               ],
               "createdBy": "u-353e231f-f6d7-5de2-bd88-5323235fxxxx",
               "createdOn": "2025-02-11T13:57:42.032Z",
               "lmodifiedBy": "u-353e231f-f6d7-5de2-bd88-5323235fxxxx",
               "lmodifiedOn": "2025-02-11T13:57:42.032Z",
               "sessionId": "67ab573f3685d1ba9954xxxx",
               "isBB": 0,
               "isD": 0,
               "ms": 1,
               "chnl": "korevg",
               "lang": "en",
               "sT": 1,
               "author": {
                   "id": "u-353e231f-f6d7-5de2-bd88-5323235fxxxx",
                   "type": "VOICEMAIL"
               },
               "__lModifiedOn__": "2025-02-11T13:57:42.000Z",
               "timestampValue": 1739282262039,
               "__v": 0,
               "resourceid": "messagestore"
           }
   ]
}
```

## Response Body Parameters

| STATUS | DESCRIPTION | TYPE |
|--------|------------|------|
| status | The status of the API request. For example, "success". | string |
| voicemail_recording | An array of voicemail recording objects. | array |
| voicemail_recording[].fileName | The name of the voicemail audio file. | string |
| voicemail_recording[].fileUrl | The URL to stream/download the voicemail recording. | string |
| transcriptions | An array of transcription objects for the voicemail messages. | array |
| transcriptions[]._id | Unique identifier for the transcription. | string |
| transcriptions[].botId | Identifier of the bot that processed the voicemail. | string |
| transcriptions[].type | Type of message. For example, "incoming". | string |
| transcriptions[].status | Status of the transcription. For example, "received". | string |
| transcriptions[].channels | Array of channel information objects. | array |
| transcriptions[].components | Array of message component objects. | array |
| transcriptions[].components[].cT | Component type. For example, "text". | string |
| transcriptions[].components[].data.text | The transcribed text of the voicemail. | string |
| transcriptions[].createdOn | The timestamp of when the transcription was created. | string |
| transcriptions[].lmodifiedOn | The timestamp of when the transcription was last modified. | string |
| transcriptions[].sessionId | Unique session identifier. | string |
| transcriptions[].lang | Language code of the transcription. Example: "en". | string |
| transcriptions[].author | Information about the voicemail author. | object |
| transcriptions[].author.id | Unique identifier of the author. | string |
| transcriptions[].author.type | Type of the author. For example, "VOICEMAIL". | string |