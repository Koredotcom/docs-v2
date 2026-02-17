--8<-- "includes/ccai-api-back-link.md"

# Get Campaign Status API

Retrieves the current status of a specific campaign using its campaign ID. Use this API to check whether a campaign is active, stopped, or in another state.

| **Method** | **POST** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}/status?accountId={{accountId}}&view=status` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |
| `campaignId` | Unique identifier of the campaign to trigger. | string, required |

## Query Parameter

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `view` | Value must be `status` to retrieve status only. | string, optional |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}/status?accountId={{accountId}}&view=status' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--header 'accountId: 67777ce93e25326494exxxxx' \
--header 'auth: <token>' \
--data '{}'


```

## Headers

| Header | Description | Required/Optional |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `iid` | The Application Id. | required |
| `accountId` | The Account Id. | required |

## Sample Response

```
{
    "status": "success",
    "data": {
        "id": "cd-469cba4-2597-471d-b5ed-02732c2xxxxx",
        "status": "Ready",
        "name": "Service Renewal Outreach Campaign6"
    }
}

```
## Response Parameters

| Parameter | Description | Type |
| :---- | :---- | :---- |
| `status` | API call result. Value: `"success"` or `"failure"`. | string |
| `data.id` | Campaign ID. | string |
| `data.status` | Current campaign status (for example, `Active`, `Stopped`). | string |
| `data.name` | The campaign name. | string |