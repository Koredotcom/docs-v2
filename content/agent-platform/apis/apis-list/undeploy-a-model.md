[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Undeploy a Model API

This API undeploys a model from the environment. The API response includes the model ID, model undeployment status, and the dockStatusId. After receiving the response, use the <code>dockStatusId</code> to call the [Get Dock Status API](../apis-list/get-dock-status.md){:target="_blank"} and verify successful model undeployment.


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
   <td><strong> </strong><code>https://{host}/api/public/models/:{<i>modelId</i>}/undeploy</code>
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
   <td><strong>modelId</strong>
   </td>
   <td>The unique identifier of the model to deploy.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Request

```js
curl --location --request POST 'https://{host}/api/public/models/cm-20xxxxxf-0xx9-5xx0-8xx1-81xxxxxxxx80/undeploy' 
--header 'x-api-key: kg-axxxxxxx-xxx-5xx8-bxxb-9xxxxxxxxxx-ebxxxxxx-5xxb-4xxb-9xx5-cxxxxxxxxx3'
```

## Body Parameters

No parameters are passed.

## Sample Response

```js
{
  "dock-statusId": "ds-d0xxxxxd-bxx9-5xx0-8xx5-5bxxxxxxxxx1",
  "modelId": "cm-77xxxxxb-exx9-5xxc-8xx6-52xxxxxxxxx1",
  "jobType": "MODELS",
  "action": "UNDEPLOY",
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
  </tr>
  <tr>
   <td><strong>dockStatusId</strong>
   </td>
   <td>The unique identifier to track the model undeployment status.
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
   <td>Type of job being performed (“<em>MODELS</em>”).
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>action</strong>
   </td>
   <td>The action performed on the model, i.e. “<em>UNDEPLOY</em>”).
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>status</strong>
   </td>
   <td>The current status of the job ("<em>SUCCESS</em>", "<em>IN_PROGRESS</em>", or "<em>FAILED</em>").
   </td>
   <td>String
   </td>
  </tr>
</table>
