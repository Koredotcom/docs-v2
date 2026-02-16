[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Import a Model API

The API imports a model in chunks into the Agent Platform environment. The import process includes the following steps and APIs:

* [Start Import Session](./import-a-model.md#start-import-session){:target="_blank"} - Import Model - Start Session API.
* [Upload Model in Chunks](./import-a-model.md#upload-model-in-chunks){:target="_blank"} - Import Model - Chunk Upload API.
* [Complete the Import Process](./import-a-model.md#complete-the-import-process){:target="_blank"} - Import Model- Completion API.

**Where can I find the API key?**

To use the API, you will need an API key. [Learn more](../../apis/overview.md#how-to-create-the-api-key){:target="_blank"}.

## Start Import Session

The **Import Model - Start Session API** is executed in this step. The API initializes the import session and returns a <code>Session Id</code> in the response which is used in the next two steps of the import process.

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
   <td><code>https://{host}/api/public/files/session/start</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><strong><code>X-api-key</code></strong> - The API key used for authentication.
   </td>
  </tr>
</table>

### Path Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td><strong>host</strong>
   </td>
   <td>The environment URL. For example, <code>https://agent-platform.domain.ai/</code>
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
</table>

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

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td><strong>fileContext</strong>
   </td>
   <td>Context of the file (for example, model/dataset).
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>totalChunks</strong>
   </td>
   <td>The number of chunks the file is divided into.
   </td>
   <td>Integer
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>fileExtension</strong>
   </td>
   <td>The extension of the file (for example, tar).
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>fileName</strong>
   </td>
   <td>Name of the file being uploaded. For example, “<em>example_model22.tar</em>”
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>fileSize</strong>
   </td>
   <td>The size of the file in bytes.
   </td>
   <td>Integer
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>isAdapter</strong>
   </td>
   <td>Indicates whether the file is an adapter model. The values include “<strong>True</strong>” or “<strong>False</strong>.”
   </td>
   <td>Boolean
   </td>
   <td>Optional
   </td>
  </tr>
</table>

### Sample Response

```js
{
   "sessionId": "dxxxxxx0-0xx2-4xx2-9xxd-5xxxxxxxxxx8",
   "expirationDate": "2025-02-05T11:58:03.638Z",
   "modelId": "cm-3xxxxxx6-axx6-5xx2-9xx6-0xxxxxxxxxx9"
}
```

### Response Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>sessionId</strong>
   </td>
   <td>The unique identifier of the import session.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>expirationDate</strong>
   </td>
   <td>The expiration date of the session.
   </td>
   <td>Date
   </td>
  </tr>
  <tr>
   <td><strong>modelId</strong>
   </td>
   <td>The unique identifier of the model.
   </td>
   <td>String
   </td>
  </tr>
</table>

## Upload Model in Chunks

The **Import Model - Chunk Upload** API uploads a file chunk for model import. The <code>sessionId</code> from the [Start Import Session API](./import-a-model.md#start-import-session){:target="_blank"} must be used here to upload the file in incrementing chunks identified by a unique <code>chunkNumber</code>.

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
   <td><code>https://{host}/api/public/files/session/{sessionId}</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><strong><code>X-api-key</code></strong> - The API key used for authentication.
   </td>
  </tr>
</table>

### Path Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td><strong>host</strong>
   </td>
   <td>The environment URL. For example, <code>https://agent-platform.domain.ai/</code>
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>sessionId</strong>
   </td>
   <td>The <code>Session Id</code> from the start import session API.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
</table>


### Sample Request

```js
curl --location 'https://{host}/api/public/files/session/5cxxxxxb-5xx5-4xxa-bxx1-35xxxxxxxxxe' 
--header 'x-api-key: kg-11xxxxx8-3xxf-5xxa-9xx7-0xxxxxxxxxx2-c9xxxxx8-6xx7-4xx5-axx6-5c6aacdxxxx' 
--header 'Content-Type: application/json' 
--form 'file=@"postman-cloud:///1exxxxx8-7xx4-4xx0-axx0-1dxxxxxxxxxd"' 
--form 'chunkNumber="0"'
```

### Body Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td><strong>file</strong>
   </td>
   <td>The file being uploaded.
   </td>
   <td>File
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>chunkNumber</strong>
   </td>
   <td>The uploaded chunk number.
   </td>
   <td>Number
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Response

```js
{
   "chunkNumber": "0",
   "sessionId": "dxxxxxx0-0xx2-4xx2-9xxd-51xxxxxxxxx8"
}
```

### Response Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>chunkNumber</strong>
   </td>
   <td>The uploaded chunk number.
   </td>
   <td>Number
   </td>
  </tr>
  <tr>
   <td><strong>sessionId</strong>
   </td>
   <td>The model import <code>Session Id</code>.
   </td>
   <td>String
   </td>
  </tr>
</table>

## Complete the Import Process

The **Import Model- Complete** API completes the model import process after all file chunks have been successfully uploaded. The <code> sessionId</code> from the [Start Import Session API](./import-a-model.md#start-import-session){:target="_blank"} must be used for this API.


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
   <td><code>https://{host}/api/public/files/session/{sessionId}/complete</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><strong><code>X-api-key</code></strong> - The API key used for authentication.
   </td>
  </tr>
</table>


### Path Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td><strong>host</strong>
   </td>
   <td>The environment URL. For example, <code>https://agent-platform.domain.ai/</code>
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>sessionId</strong>
   </td>
   <td>The <code>Session Id</code> from the <strong>Start Import Session</strong> API.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
</table>

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

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>dockstatusId</strong>
   </td>
   <td>The unique identifier to track the status of model import.
   </td>
   <td>String 
   </td>
  </tr>
  <tr>
   <td><strong>modelId</strong>
   </td>
   <td>The unique identifier of the model being imported.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>jobType</strong>
   </td>
   <td>Type of job being performed, <em>MODEL</em>
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>action</strong>
   </td>
   <td>The action performed on the model.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>status</strong>
   </td>
   <td>The current status of the job (<em>SUCCESS</em>, <em>IN_ PROGRESS</em>, or <em>FAILED</em>).
   </td>
   <td>String
   </td>
  </tr>
</table>
