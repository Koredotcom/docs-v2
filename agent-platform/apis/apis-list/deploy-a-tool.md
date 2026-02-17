[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Deploy a Tool API

This API deploys a specific tool into an environment. It allows the user to control the deployment process either synchronously or asynchronously, depending on the value of the <code>isAsync</code> parameter.

The API response includes the **tool ID** and the **tool deployment status**. After receiving the response, use the <code>dockStatusId</code> to call the [Get Dock Status API](../apis-list/get-dock-status.md) and verify the tool deployment status.


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
   <td><code>https://{host}/api/public/tools/:{<em>toolId</em>}/deploy</code>
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
   <td><strong>toolId</strong>
   </td>
   <td>The unique identifier of the tool being deployed.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Request

```js
curl --location 'https://{host}/api/public/tools/a-0xxxxxxxxxxxxxxxxxxe/deploy' 
--header 'x-api-key: kg-axxxxxxx-5xx3-5xx8-bxxb-9xxxxxxxxxxxb-9xx5-cxxxxxxxxx3' 
--header 'Content-Type: application/json' 
--data '{
  "isAsync": false
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
   <td><strong>isAsync</strong>
   </td>
   <td>Indicates if the deployment is asynchronous (true) or synchronous (false).
   </td>
   <td>Boolean
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Response

```js
{
   "dock-statusId": "ds-cxxxxxx8-exx2-5xx7-9xx6-30xxxxxxxxxe",
   "toolId": "a-49xxxxx9-fxx9-5xx7-axx7-9xxxxxxxxxxb",
   "jobType": "TOOLS",
   "action": "DEPLOY",
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
   <td>The unique identifier for tracking the tool deployment.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>toolId</strong>
   </td>
   <td>The unique identifier of the tool being deployed.
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>jobType</strong>
   </td>
   <td>The type of job being performed (“<em>TOOLS</em>”).
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>action</strong>
   </td>
   <td>The action being performed ("<em>DEPLOY</em>").
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td><strong>status</strong>
   </td>
   <td>The deployment status ("<em>SUCCESS</em>", "<em>IN_PROGRESS</em>", or "<em>FAILED</em>").
   </td>
   <td>String
   </td>
  </tr>
</table>
