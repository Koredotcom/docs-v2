--8<-- "includes/ccai-api-back-link.md"

# Start Voice Campaign API-v2

Use this API to start an active Voice campaign for a given stream ID and campaign ID.

| **Method** | **POST** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/api/v2/public/{{streamID}}/campaign/trigger/{{campaignId}}?accountId={{accountId}}\&campaignType=voice\&trigger=play` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |
| `campaignId` | Unique identifier of the campaign to trigger. | string, required |

## Query Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `campaignType` | Type of campaign. Use `"voice"` for voice campaign. | string, required |
| `trigger` | Action to perform. Use `"play"` to start. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/api/v2/public/{{streamID}}/campaign/trigger/{{campaignId}}?accountId={{accountId}}&campaignType=voice&trigger=play' \
--header 'auth: <token>' \
--header 'accountid: 67777ce93e25326494xxxxx' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--header 'Content-Type: application/json' \
--data '{}
'
```

## Headers

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `iid` | The Application Id. | required |
| `accountId` | The Account Id. | required |

## Sample Response

```
{
    "status": "Active",
    "message": "Campaign Started",
    "totalCallsCompleted": 0,
    "updatedAt": "2025-12-05T11:56:13.241Z",
    "campaignInstanceId": "cid-835ee4a-697e-4846-8340-7e3e301xxxxx"
}
```

## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Indicates the current status of the campaign. For example, `Active` | string |
| `message` | Success confirmation message. For example, `Campaign Started` | string |
| `totalCallsCompleted` | Number of completed calls at the time of starting the campaign. | number |
| `updatedAt` | ISO timestamp when the campaign was activated. | string |
| `campaignInstanceId` | ID of the specific campaign instance that was started.  | string |