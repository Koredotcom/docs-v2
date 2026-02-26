[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Import a Model API

The API imports a model in chunks into the Agent Platform environment. The import process includes the following steps and APIs:

* [Start Import Session](./import-a-model.md#start-import-session) - Import Model - Start Session API.
* [Upload Model in Chunks](./import-a-model.md#upload-model-in-chunks) - Import Model - Chunk Upload API.
* [Complete the Import Process](./import-a-model.md#complete-the-import-process) - Import Model- Completion API.

**Where can I find the API key?**

To use the API, you will need an API key. [Learn more](../../apis/overview.md#how-to-create-the-api-key).

## Start Import Session

The **Import Model - Start Session API** is executed in this step. The API initializes the import session and returns a `Session Id` in the response which is used in the next two steps of the import process.

| Method | POST |
| --- | --- |
| Endpoint | `https://{host}/api/public/files/session/start` |
| Content Type | application/json |
| Authorization | `X-api-key` - The API key used for authentication. |

### Path Parameters

| PARAMETER | DESCRIPTION | TYPE | REQUIRED/OPTIONAL |
| --- | --- | --- | --- |
| host | The environment URL. For example, `https://agent-platform.domain.ai/` | String | Required |

### Sample Request

```js
curl --location 'https://{host}/api/public/files/session/start' 
--header 'x-api-key: kg-1xxxxxx8-3xxf-5xxa-9xx7-0xxxxxxxxxx2-c9xxxxx8-6xx7-4xx5-axx6-5c6aacd8xxxx' 
--header 'Content-Type: application/json' 
--data '{
    "fileContext": "model",
    "totalChunks": 1,
    "fileExtension": "tar",
    "fileName": "sample-1.tar",
    "fileSize": 1100,
    "isAdapter": false
}'
```

### Body Parameters

| PARAMETER | DESCRIPTION | TYPE | REQUIRED/OPTIONAL |
| --- | --- | --- | --- |
| fileContext | Context of the file (for example, model/dataset). | String | Required |
| totalChunks | The number of chunks the file is divided into. | Integer | Required |
| fileExtension | The extension of the file (for example, tar). | String | Required |
| fileName | Name of the file being uploaded. For example, “<em>example_model22.tar</em>” | String | Required |
| fileSize | The size of the file in bytes. | Integer | Required |
| isAdapter | Indicates whether the file is an adapter model. The values include “True” or “False.” | Boolean | Optional |

### Sample Response

```js
{
   "sessionId": "dxxxxxx0-0xx2-4xx2-9xxd-5xxxxxxxxxx8",
   "expirationDate": "2025-02-05T11:58:03.638Z",
   "modelId": "cm-3xxxxxx6-axx6-5xx2-9xx6-0xxxxxxxxxx9"
}
```

### Response Parameters

| PARAMETER | DESCRIPTION | TYPE |
| --- | --- | --- |
| sessionId | The unique identifier of the import session. | String |
| expirationDate | The expiration date of the session. | Date |
| modelId | The unique identifier of the model. | String |

## Upload Model in Chunks

The **Import Model - Chunk Upload** API uploads a file chunk for model import. The `sessionId` from the [Start Import Session API](./import-a-model.md#start-import-session) must be used here to upload the file in incrementing chunks identified by a unique `chunkNumber`.

| Method | POST |
| --- | --- |
| Endpoint | `https://{host}/api/public/files/session/{sessionId}` |
| Content Type | application/json |
| Authorization | `X-api-key` - The API key used for authentication. |

### Path Parameters

| PARAMETER | DESCRIPTION | TYPE | REQUIRED/OPTIONAL |
| --- | --- | --- | --- |
| host | The environment URL. For example, `https://agent-platform.domain.ai/` | String | Required |
| sessionId | The `Session Id` from the start import session API. | String | Required |


### Sample Request

```js
curl --location 'https://{host}/api/public/files/session/5cxxxxxb-5xx5-4xxa-bxx1-35xxxxxxxxxe' 
--header 'x-api-key: kg-11xxxxx8-3xxf-5xxa-9xx7-0xxxxxxxxxx2-c9xxxxx8-6xx7-4xx5-axx6-5c6aacdxxxx' 
--header 'Content-Type: application/json' 
--form 'file=@"postman-cloud:///1exxxxx8-7xx4-4xx0-axx0-1dxxxxxxxxxd"' 
--form 'chunkNumber="0"'
```

### Body Parameters

| PARAMETER | DESCRIPTION | TYPE | REQUIRED/OPTIONAL |
| --- | --- | --- | --- |
| file | The file being uploaded. | File | Required |
| chunkNumber | The uploaded chunk number. | Number | Required |

### Sample Response

```js
{
   "chunkNumber": "0",
   "sessionId": "dxxxxxx0-0xx2-4xx2-9xxd-51xxxxxxxxx8"
}
```

### Response Parameters

| PARAMETER | DESCRIPTION | TYPE |
| --- | --- | --- |
| chunkNumber | The uploaded chunk number. | Number |
| sessionId | The model import `Session Id`. | String |

## Complete the Import Process

The **Import Model- Complete** API completes the model import process after all file chunks have been successfully uploaded. The ` sessionId` from the [Start Import Session API](./import-a-model.md#start-import-session) must be used for this API.


| Method | POST |
| --- | --- |
| Endpoint | `https://{host}/api/public/files/session/{sessionId}/complete` |
| Content Type | application/json |
| Authorization | `X-api-key` - The API key used for authentication. |


### Path Parameters

| PARAMETER | DESCRIPTION | TYPE | REQUIRED/OPTIONAL |
| --- | --- | --- | --- |
| host | The environment URL. For example, `https://agent-platform.domain.ai/` | String | Required |
| sessionId | The `Session Id` from the Start Import Session API. | String | Required |

### Sample Request

```js
curl --location --request POST 'https://{host}/api/public/files/session/5cxxxxxb-xxx5-4xxa-bxx1-35xxxxxxxxxe/complete' 
--header 'x-api-key: kg-11xxxxx8-xxxf-5xxa-9xx7-07dxxxx3xxx2-c9xxxxx8-6xx7-4xx5-axx6-5c6aaxxxxxx'
```

### Body Parameters

No parameters are passed.

### Sample Response

```js
{
  "dock-statusId": "ds-dxxxxxxd-bxx9-5xx0-8xx5-5bxxxxxxxxx1",
  "modelId": "cm-3xxxxxxa-bxx9-5xxf-axxc-73xxxxxxxxx2",
  "jobType": "MODELS",
  "action": "EXPORT",
  "status": "IN_PROGRESS"
}
```

### Response Parameters

| PARAMETER | DESCRIPTION | TYPE |
| --- | --- | --- |
| dockstatusId | The unique identifier to track the status of model import. | String |
| modelId | The unique identifier of the model being imported. | String |
| jobType | Type of job being performed, <em>MODEL</em> | String |
| action | The action performed on the model. | String |
| status | The current status of the job (<em>SUCCESS</em>, <em>IN_ PROGRESS</em>, or <em>FAILED</em>). | String |
