[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Export a Tool API

This API exports a tool's configuration and associated data, including its flow  for backup, sharing, or reuse. It allows users to generate an export of a specific tool along with its deployed call flow.

When an export request is initiated, the API triggers the export process and returns a <code>dockStatusId</code>, which can be used with the [Get Dock Status API](../apis-list/get-dock-status.md){:target="_blank"} to track the export progress. The API response also includes an <code>exportJobId</code> for tracking the specific export job.

Additionally, the response provides a **download URL**. Copy and paste this URL into a browser or API client to download the exported tool file.

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
   <td><code>https://{host}/api/public/tools/:{toolId}/export?flowId={callflowId}</code>
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

To use the API, you will need an API key. [Learn more](../../apis/overview.md#how-to-create-the-api-key){:target="_blank"}.

**How to obtain toolId or callflowId for the API?**

1. Follow the steps mentioned [here](../../ai-agents/tools/export-a-tool.md#steps-to-export-a-tool){:target="_blank"} to export a tool.
2. Open developer tools.
3. Select the **Network** tab.
<img src="../images/developer-tools.png" alt="developer tools" title="developer tools" style="border: 1px solid gray; zoom:60%;"/>
4. Monitor the Export API to capture <code>toolId</code> and <code>callflowId</code>.


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
   <td>The environment URL. For example, <code> https://agent-platform.domain.ai/</code>
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>toolId</strong>
   </td>
   <td>The tool ID of the tool being exported.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>callflowId</strong>
   </td>
   <td>The callflow ID for the deployed tool.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
</table>

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
   <td><strong>dockStatusId</strong>
   </td>
   <td>The unique identifier to track the status of the tool export process. 
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>toolId</strong>
   </td>
   <td>The unique identifier for the tool.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>jobType</strong>
   </td>
   <td>The type of job being performed.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>action</strong>
   </td>
   <td>The action that is performed on the tool.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>status</strong>
   </td>
   <td>The current status of the job.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>exportJobId</strong>
   </td>
   <td>The unique Identifier to track the specific export job.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>downloadURL</strong>
   </td>
   <td>The url to download the exported tool file.
   </td>
   <td>String
   </td>
  </tr>
</table>
