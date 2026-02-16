[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Export a Model API

This API exports a trained AI model from the system. Once initiated, the export process runs in the background. Use the <code>dockStatusId</code> from the API response to call the [Get Dock Status API](../apis-list/get-dock-status.md){:target="_blank"} and track the export status.

Additionally, the response provides a **download URL**. Copy and paste this URL into a browser or API client to download the exported model’s file.

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
   <td><code>https://{host}/api/public/models/:{<em>modelId</em>}/export</code>
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

## Path Parameters

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
   <td>modelId
   </td>
   <td>The unique identifier of the model you want to export.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Request

```js
curl --location --request POST 'https://{host}/api/public/models/cm-dxxxxxxxxxxxxxxxxxx6/export' 
--header 'x-api-key: kg-axxxxxxx-5xx3-5xx8-xxx-9xxxxxxxxxx-ebxxxxxx-5xxb-4xxb-9xx5-cxxxxxxxxx3'
```



## Body Parameters

No parameters are passed.


## Sample Response

```js
{
  "_id": "ds-fxxxxxx0-6xxf-5xxb-9xxf-ebxxxxxxxxx0",
   "modelId": "cm-ddxxxxxb-0xxb-5xxe-bxx2-51xxxxxxxxx6",
   "jobType": "MODELS",
   "action": "EXPORT",
   "status": "SUCCESS",
   "percentageComplete": 100,
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
   <td>The unique identifier to track the status of action. For example: import, export, deploy, etc.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>modelId</strong>
   </td>
   <td>The unique identifier for the model.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>jobType</strong>
   </td>
   <td>Type of job being performed.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>action</strong>
   </td>
   <td>The action that is performed on the model.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>status</strong>
   </td>
   <td>The current status of the job (<em>IN_PROGRESS</em>, <em>SUCCESS</em>, or <em>FAILED</em>).
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>percentageComplete</strong>
   </td>
   <td>The percentage of the model export process that is complete.
   </td>
   <td>Number
   </td>
  </tr>
  <tr>
   <td><strong>downloadURL</strong>
   </td>
   <td>The URL to download the exported model file.
   </td>
   <td>String
   </td>
  </tr>
</table>
