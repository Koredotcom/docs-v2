[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Undeploy a Tool API

This API undeploys a tool that's deployed in an environment. 

The API response includes the tool ID, dock status ID and the tool undeployment status. After receiving the response, use the `dockStatusId` to call the [Get Dock Status API](../apis-list/get-dock-status.md) and verify the status of the task.


| Method | POST |
| --- | --- |
| Endpoint | `https://{host}/api/public/tools/:{<em>toolId</em>}/undeploy` |
| Content Type | application/json |
| Authorization | `X-api-key` - The API key used for authentication. |

**Where can I find the API key?**

To use the API, you will need an API key. [Learn more](../../apis/overview.md#how-to-create-the-api-key).

## Path Parameters

| PARAMETER | DESCRIPTION | TYPE | REQUIRED/OPTIONAL |
| --- | --- | --- | --- |
| host | The environment URL. For example, `https://agent-platform.domain.ai/` | String | Required |
| toolId | The unique identifier of the tool being undeployed. | String | Required |

## Sample Request

```js
curl --location --request POST 'https://{host}/api/public/tools/a-0xxxxxxxxxxxxxxxxxxe/undeploy' \
--header 'x-api-key: kg-axxxxxxx-5xx3-5xx8-bxxb-9xxxxxxxxxx-ebxxxxxxxxxxx3'
```

## Body Parameters

No parameters are passed.

## Sample Response

```js
{
   "dockStatusId": "ds-exxxxxx7-2xx8-5xxc-axx7-cxx73xxxxxx1",
   "toolId": "a-4xxxxxx9-fxx9-5xx7-axx7-9xxfdxxxxxxb",
   "jobType": "TOOLS",
   "action": "UNDEPLOY",
   "status": "SUCCESS"
}
```

## Response Parameters

| PARAMETER | DESCRIPTION | TYPE |
| --- | --- | --- |
| dockStatusId | The unique identifier for tracking the tool undeployment status. | String |
| toolId | The unique identifier of the tool being undeployed. | String |
| jobType | The type of job being performed (“<em>TOOLS</em>”). | String |
| action | The action being performed ("<em>UNDEPLOY</em>"). | String |
| status | The undeployment status ("<em>SUCCESS</em>", "<i>IN_PROGRESS</i>", or <em>"FAILED</em>"). | String |
