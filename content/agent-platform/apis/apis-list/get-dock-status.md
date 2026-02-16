[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Get Dock Status API

This API allows users to track the status of ongoing or completed jobs related to tools or models. After triggering operations like **import**, **export**, **deploy**, or **undeploy**, this api is used to get real-time updates on progress, success, or failure, enabling efficient monitoring of execution.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{host}/api/public/dock-status/{<i>dockStatusId</i>}</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td>application/json</td>
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


## QPath Parameters

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
   <td><strong>dockStatusId</strong>
   </td>
   <td>The dock status ID that's received in the response.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Request

```js
curl --location 'https://{host}/api/public/dock-status/ds-24xxxxx3-0xxc-5xx5-axx3-c19xxxxxxxx8' 
--header 'x-api-key: kg-abxxxxx7-5xx3-5xx8-bxxb-9xxxx'
```

## Body Parameters

No parameters are passed.

## Sample Response

```js
{
   "_id": "{id}",
   "toolId": "{toolid}",
   "jobType": "{jobtype}",
   "action": "{action}",
   "status": "{status}"
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
   <td><strong>SAMPLE VALUE(S)</strong>
   </td>
  </tr>
  <tr>
   <td><b>_id</b>
   </td>
   <td>The unique identifier for the dock status.
   </td>
   <td>String
   </td>
   <td>ds-c6xxxxx5-dxxd-5xxf-9xxd-0xxxxx6xxxx8
   </td>
  </tr>
  <tr>
   <td><b>toolId</b>
   </td>
   <td>The unique identifier for the tool.
   </td>
   <td>String
   </td>
   <td>a-8xxxxxbe-6xxe-5xx1-8xxc-bxxxxxx80xx6
   </td>
  </tr>
  <tr>
   <td><b>jobType</b>
   </td>
   <td>Type of job being performed.
   </td>
   <td>String
   </td>
   <td><em>TOOLS</em>, <em>MODELS</em>, or <em>GUARDRAILS</em>
   </td>
  </tr>
  <tr>
   <td><b>action</b>
   </td>
   <td>The action being performed on the tool/model.
   </td>
   <td>String
   </td>
   <td>I<em>IMPORT</em>, <em>EXPORT</em>, <em>DEPLOY</em>, or <em>UNDEPLOY</em>
   </td>
  </tr>
  <tr>
   <td><b>status</b>
   </td>
   <td>The current status of the job.
   </td>
   <td>String
   </td>
   <td><em>IN_PROGRESS</em>, <em>SUCCESS</em>, or <em>FAILED</em>
   </td>
  </tr>
</table>
