[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Import a New Tool API

This API imports a new tool by providing the necessary **file IDs**, ensuring all the necessary configurations, including the tool’s flow data, app definitions, and environment variables are correctly imported. After triggering the import, the response returns a <code>dockStatusId</code>. Use this ID to call the [Get Dock Status API](../apis-list/get-dock-status.md) and verify the successful import of the tool.

To import a tool, follow the steps below:

1. **Upload Files**: Use the [File Upload API](./upload-file-api.md) to upload the files for the flow definition, app definition, and environment variables. [Learn more](../../ai-agents/tools/import-a-tool.md#import-to-create-a-new-tool). This API returns unique **file IDs** for each file. 
2. **Import the Tool**: Call the [Import Tools API](../apis-list/import-a-new-tool.md) using the retrieved **file IDs** along with the tool name.
3. **Track import Status**: The API response returns a <code>dockStatusId</code> that helps monitor the import progress using the [Get Dock Status API](../apis-list/get-dock-status.md).

<table>
  <tr>
   <td>
<strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{host}/api/public/tools/import</code>
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

**Where can I find the API key?**

To use the API, you will need an API key. [Learn more](../../apis/overview.md#how-to-create-the-api-key).

## Query Parameters

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
   <td><strong>toolDataFileId</strong>
   </td>
   <td>The <code>file ID</code> for the tool data file.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>flowDataFileId</strong>
   </td>
   <td>The <code>file ID</code> for the flow data file.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>envVariablesFileId</strong>
   </td>
   <td>The<code> file ID </code>for the environment variables
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>toolName</strong>
   </td>
   <td>The name of the tool.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
</table>

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

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>SAMPLE VALUE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>dockStatusId</strong>
   </td>
   <td>The unique identifier to track the status of the import action. 
   </td>
   <td>String
   </td>
   <td>Example: ds-cxxxxxx5-dxxd-5xxf-9xxd-0xxxxx6c5xx8
   </td>
  </tr>
  <tr>
   <td><strong>toolId</strong>
   </td>
   <td>The unique identifier for the tool.
   </td>
   <td>String
   </td>
   <td>Example: a-8xxxxxxe-6xxe-5xx1-8xxc-b3xxxxx80xx6
   </td>
  </tr>
  <tr>
   <td><strong>jobType</strong>
   </td>
   <td>The type of job being performed.
   </td>
   <td>String
   </td>
   <td><em>TOOLS</em>
   </td>
  </tr>
  <tr>
   <td><strong>action</strong>
   </td>
   <td>The action that's performed on the tool/model.
   </td>
   <td>String
   </td>
   <td><em>IMPORT </em>
   </td>
  </tr>
  <tr>
   <td><strong>status</strong>
   </td>
   <td>The current status of the job.
   </td>
   <td>String
   </td>
   <td><em>IN_PROGRESS</em>, <em>SUCCESS</em>, or <em>FAILED</em>
   </td>
  </tr>
</table>
