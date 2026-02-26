[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Import a New Tool API

This API imports a new tool by providing the necessary **file IDs**, ensuring all the necessary configurations, including the tool’s flow data, app definitions, and environment variables are correctly imported. After triggering the import, the response returns a `dockStatusId`. Use this ID to call the [Get Dock Status API](../apis-list/get-dock-status.md) and verify the successful import of the tool.

To import a tool, follow the steps below:

1. **Upload Files**: Use the [File Upload API](./upload-file-api.md) to upload the files for the flow definition, app definition, and environment variables. [Learn more](../../ai-agents/tools/import-a-tool.md#import-to-create-a-new-tool). This API returns unique **file IDs** for each file. 
2. **Import the Tool**: Call the [Import Tools API](../apis-list/import-a-new-tool.md) using the retrieved **file IDs** along with the tool name.
3. **Track import Status**: The API response returns a `dockStatusId` that helps monitor the import progress using the [Get Dock Status API](../apis-list/get-dock-status.md).

| Method | POST |
| --- | --- |
| Endpoint | `https://{host}/api/public/tools/import` |
| Content Type | application/json |
| Authorization | `X-api-key` - The API key used for authentication. |

**Where can I find the API key?**

To use the API, you will need an API key. [Learn more](../../apis/overview.md#how-to-create-the-api-key).

## Query Parameters

| PARAMETER | DESCRIPTION | TYPE | REQUIRED/OPTIONAL |
| --- | --- | --- | --- |
| host | The environment URL. For example, `https://agent-platform.domain.ai/` | String | Required |

## Sample Request

```js
curl --location 'https://{host}/api/public/tools/import' 
--header 'x-api-key: kg-90xxxxx5-9xxe-5xxf-9xx7-9xxxxxxxxxx4-55xxxxx4-axx9-4xx2-axx2-fxxxxxxxxxxa' 
--header 'Content-Type: application/json' 
--data '{
    "toolDataFileId": "67bxxxxxxxxxxxxxxxxxxxxc",
    "flowDataFileId": "67bxxxxxxxxxxxxxxxxxxxx2",
    "envVariablesFileId": "67bxxxxxxxxxxxxxxxxxxxxx2",
    "toolName":"Staging Tool"
}'
```

## Body Parameters

| PARAMETER | DESCRIPTION | TYPE | REQUIRED/OPTIONAL |
| --- | --- | --- | --- |
| toolDataFileId | The `file ID` for the tool data file. | String | Required |
| flowDataFileId | The `file ID` for the flow data file. | String | Required |
| envVariablesFileId | The` file ID `for the environment variables | String | Optional |
| toolName | The name of the tool. | String | Required |

## Sample Response

```js
{
   "dockStatusId": "{dockStatusId}",
   "toolId": "{toolId}",
   "jobType": "TOOLS",
   "action": "IMPORT",
   "status": "IN_PROGRESS"
}
```

## Response Parameters

| PARAMETER | DESCRIPTION | TYPE | SAMPLE VALUE |
| --- | --- | --- | --- |
| dockStatusId | The unique identifier to track the status of the import action. | String | Example: ds-cxxxxxx5-dxxd-5xxf-9xxd-0xxxxx6c5xx8 |
| toolId | The unique identifier for the tool. | String | Example: a-8xxxxxxe-6xxe-5xx1-8xxc-b3xxxxx80xx6 |
| jobType | The type of job being performed. | String | <em>TOOLS</em> |
| action | The action that's performed on the tool/model. | String | <em>IMPORT </em> |
| status | The current status of the job. | String | <em>IN_PROGRESS</em>, <em>SUCCESS</em>, or <em>FAILED</em> |
