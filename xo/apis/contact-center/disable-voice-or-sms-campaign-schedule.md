--8<-- "includes/ccai-api-back-link.md"

# Disable a Scheduled Voice or SMS Campaign API

Use this API to disable a previously scheduled Voice or SMS campaign.

| METHOD | POST |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/schedule?enableSchedule=false&campaignName={{campaignName}}` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Campaign Management |

## Query Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
| :---- | :---- | :---- |
| `enableSchedule` | Disable a campaign schedule with either Daily or Weekly recurrence patterns. Set it to `false`  | Boolean, required |
| `campaignName` | The name of the Voice or SMS campaign. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/schedule?enableSchedule=false&campaignName={{campaignName}}' \
--header 'auth: {{jwt_token}}' \
--header 'Content-Type: application/json' \
--header 'accountid: {{accountid}}' \
--header 'iid: {{iid}}' \
--data '{}'
```

## Request Headers

| **Header** | **Description** | **Type/Required** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | String, required |
| `accountId` | The account ID associated with the API request. | String, required |
| `Content-Type` | The format in which the request payload is sent to the server. Example:  `application/json` | String, required |
| `iid` | BotId or StreamId. You can access it from the App Settings page of the bot. | String, required |

### Sample Response

```
{  
    "status": "success",  
    "message": "Campaign Agentless Voice | Product Feedback | Jan 9 schedule has been disabled successfully",  
    "id": "cd-671b3bd-a7a1-4709-bd6a-70803e3xxxxx"  
}
```

## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Indicates the response status. Example, success | string |
| `message` | Descriptive message about the result. | string |
| `id` | Unique identifier of the Voice or SMS campaign that was successfully disabled. | string |