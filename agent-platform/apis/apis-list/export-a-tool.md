[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Export a Tool API

This API exports a tool's configuration and associated data, including its flow  for backup, sharing, or reuse. It allows users to generate an export of a specific tool along with its deployed call flow.

When an export request is initiated, the API triggers the export process and returns a `dockStatusId`, which can be used with the [Get Dock Status API](../apis-list/get-dock-status.md) to track the export progress. The API response also includes an `exportJobId` for tracking the specific export job.

Additionally, the response provides a **download URL**. Copy and paste this URL into a browser or API client to download the exported tool file.

| Method | POST |
| --- | --- |
| Endpoint | `https://{host}/api/public/tools/:{toolId}/export?flowId={callflowId}` |
| Content Type | application/json |
| Authorization | `X-api-key` - The API key used for authentication. |

**Where can I find the API key?**

To use the API, you will need an API key. [Learn more](../../apis/overview.md#how-to-create-the-api-key).

**How to obtain toolId or callflowId for the API?**

1. Follow the steps mentioned [here](../../ai-agents/tools/export-a-tool.md#steps-to-export-a-tool) to export a tool.
2. Open developer tools.
3. Select the **Network** tab.
<img src="../images/developer-tools.png" alt="developer tools" title="developer tools" style="border: 1px solid gray; zoom:60%;"/>
4. Monitor the Export API to capture `toolId` and `callflowId`.


## Query Parameters


| PARAMETER | DESCRIPTION | TYPE | REQUIRED/OPTIONAL |
| --- | --- | --- | --- |
| host | The environment URL. For example, ` https://agent-platform.domain.ai/` | String | Required |
| toolId | The tool ID of the tool being exported. | String | Required |
| callflowId | The callflow ID for the deployed tool. | String | Required |

## Sample Request

```js
curl --location --request POST 'https://{host}/api/public/tools/a-3xxxxxxxxxxxxxxxxxx3/export' 
--header 'x-api-key: kg-axxxxxxx-5xx3-5xx8-bxxb-9xxxxxxxxxx-ebxxxxxx-5xxb-4xxxxxxx3' 
--header 'Content-Type: application/json'
```

## Body Parameters

No parameters are passed.

## Sample Response

```js
{
   "dock-statusId": "ds-cxxxxxxf-8xx7-5xx9-8xxd-c2xxxxxxxxxd",
   "toolId": "a-4xxxxxx9-fxx9-5xx7-axx7-9xxxxxxxxxxb",
   "jobType": "TOOLS",
   "action": "EXPORT",
   "status": "IN_PROGRESS",
   "exportJobId": "tool-ej-25xxxxx2-bxx3-5xxc-8xx4-edxxxxxxxxxf"
"response": {
       "downloadUrl": " https://{host}/api/v1/account/xxxxxx"
  }
}
```

## Response Parameters

| PARAMETER | DESCRIPTION | TYPE |
| --- | --- | --- |
| dockStatusId | The unique identifier to track the status of the tool export process. | String |
| toolId | The unique identifier for the tool. | String |
| jobType | The type of job being performed. | String |
| action | The action that is performed on the tool. | String |
| status | The current status of the job. | String |
| exportJobId | The unique Identifier to track the specific export job. | String |
| downloadURL | The url to download the exported tool file. | String |
