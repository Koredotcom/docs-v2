[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Undeploy a Model API

This API undeploys a model from the environment. The API response includes the model ID, model undeployment status, and the dockStatusId. After receiving the response, use the `dockStatusId` to call the [Get Dock Status API](../apis-list/get-dock-status.md) and verify successful model undeployment.


| Method | POST |
| --- | --- |
| Endpoint |  `https://{host}/api/public/models/:{<i>modelId</i>}/undeploy` |
| Content Type | application/json |
| Authorization | `X-api-key` - The API key used for authentication. |

**Where can I find the API key?**

To use the API, you will need an API key. [Learn more](../../apis/overview.md#how-to-create-the-api-key).

## Path Parameters

| PARAMETER | DESCRIPTION | TYPE | REQUIRED/OPTIONAL |
| --- | --- | --- | --- |
| host | The environment URL. For example, `https://agent-platform.domain.ai/` | String | Required |
| modelId | The unique identifier of the model to deploy. | String | Required |

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

| PARAMETER | DESCRIPTION | TYPE |
| --- | --- | --- |
| dockStatusId | The unique identifier to track the model undeployment status. | String |
| modelId | The unique identifier for the model. | String |
| jobType | Type of job being performed (“<em>MODELS</em>”). | String |
| action | The action performed on the model, that is “<em>UNDEPLOY</em>”). | String |
| status | The current status of the job ("<em>SUCCESS</em>", "<em>IN_PROGRESS</em>", or "<em>FAILED</em>"). | String |
