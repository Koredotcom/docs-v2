[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Import to an Existing Tool API

This API enables users to import configurations, datasets, or updates into an existing tool, allowing modifications without creating a new one. It ensures seamless integration by updating the tool with the provided tool data, flow data, and environment variables files.

After triggering the import, the response returns a <code>dockStatusId</code>. Use this ID to call the [Get Dock Status API](../apis-list/get-dock-status.md){:target="_blank"} and verify the status of the tool import process.

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
   <td><code>https://{host}/api/public/tools/:{toolId}/import</code>
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
   <td>The environment URL. For example, <code>https://agent-platform.domain.ai/</code></td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>
    <strong>toolId</strong>
   </td>
   <td>The tool ID of the tool being imported 
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Request

```js
curl --location 'https://{host}/api/public/tools/a-fbxxxxxf4-20x5-58xb-8b94-00xxxxxxxx5/import' 
--header 'x-api-key: kg-90xxxxx5-9xxe-5xxf-9xx7-9f4xxxxxxxx4-55xxxxx4-axx9-4xx2-axx2-fbcxxxxxxxxa' 
--header 'Content-Type: application/json' 
--data '{
    "toolDataFileId": "67xxxxxxxxxxxxxxxxxxxxxc",
    "flowDataFileId": "67xxxxxxxxxxxxxxxxxxxxxx2",
    "envVariablesFileId": "67xxxxxxxxxxxxxxxxxxxxx2"
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
   <td>The identifier for the tool data file being imported.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>flowDataFileId</strong>
   </td>
   <td>The identifier for the flow data file.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>envVariablesFileId</strong>
   </td>
   <td>The identifier for the environment variables file.
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
   "status": "SUCCESS"
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
   <td>The unique identifier to track the status of action. E.g. import, export, deploy, etc.
   </td>
   <td>String
   </td>
   <td>e.g., ds-c6xxxxx5-dxxd-5xxf-9xxd-0xxxxx6xxxx8
   </td>
  </tr>
  <tr>
   <td><strong>toolId</strong>
   </td>
   <td>The unique identifier for the tool.
   </td>
   <td>String
   </td>
   <td>e.g., a-8xxxxxbe-6xxe-5xx1-8xxc-bxxxxxx80xx6
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
   <td>The action being performed on the tool/model.
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
