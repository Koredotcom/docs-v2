--8<-- "includes/ccai-api-back-link.md"

# Start SMS Campaign API-v2

Use this API to start an active SMS campaign for a given stream ID and campaign ID.

| **Method** | **POST** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamID}}/campaign/{{campaignId}}?campaignType=sms&trigger={{trigger}}` |
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
| `campaignType` | Type of campaign. Use `"sms"` for SMS. | string, required |
| `trigger` | Action to perform. Use `"play"` to start. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{IID}}/campaign/{{campaignId}}?campaignType=sms&trigger={{trigger}}' \
--header 'auth: <token>' \
--header 'accountid: 67777ce93e25326494exxxxx' \
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
    "updatedAt": "2025-12-05T12:05:23.765Z"
}

```
## Response Body Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Indicates the current status of the campaign. For example, Active | string |
| `message` | Success confirmation message. For example, Campaign Started | string |
| `updatedAt` | ISO timestamp when the campaign was activated. | string |