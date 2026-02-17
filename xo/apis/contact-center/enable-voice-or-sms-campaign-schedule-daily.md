--8<-- "includes/ccai-api-back-link.md"

# Enable Daily Scheduling of Voice or SMS Campaigns

Use this API to schedule a recurring daily Voice or SMS campaign.

| METHOD | POST |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/schedule?enableSchedule=true&campaignName={{campaignName}}` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Campaign Management |

## Path Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | BotId or StreamId. You can access it from the App Settings page of the bot. | string, required |

## Query Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
| :---- | :---- | :---- |
| `enableSchedule` | Enable a campaign schedule with either Daily or Weekly recurrence patterns. Set it to `true.`  | Boolean, required |
| `campaignName` | The name of the Voice or SMS campaign. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/schedule?enableSchedule=true&campaignName={{campaignName}}' \
--header 'auth: {{jwt_token}}' \
--header 'Content-Type: application/json' \
--header 'accountid: {{accountId}}' \
--header 'iid: {{iid}}' \
--data '{
    "startDateTime": "2026-01-27 18:29:00",
    "endDateTime": "2026-02-27 18:29:00",
    "recurrenceObject": {
        "recurType": "Daily",
        "dailyDetails": {
            "onceEveryNdays": 1
        }
    }
}'
```

## Request Headers

| **Header** | **Description** | **Type/Required** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | String, required |
| `accountId` | The account ID associated with the API request. | String, required |
| `Content-Type` | The format in which the request payload is sent to the server. Example:  `application/json` | String, required |
| `iid` | BotId or StreamId. You can access it from the App Settings page of the bot. | String, required |

## Body Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
| :---- | :---- | :---- |
| `startDateTime` | The campaign’s start date and time. Format: `YYYY-MM-DD HH:mm:ss`. | string (Date-Time), required |
| `endDateTime` | The campaign's end date and time. Format: `YYYY-MM-DD HH:mm:ss`. Must be greater than both current time and startDateTime. | string (Date-Time), required |
| `recurrenceObject` | Contains the recurrence configuration of a campaign. | object, required |
| `recurrenceObject.recurType` | Recurrence type for the campaign. For example, Daily or Weekly |  |
| `recurrenceObject.dailyDetails` | Daily recurrence configuration. Required when `recurType` is `Daily`. | object, required |
| `recurrenceObject.dailyDetails.onceEveryNdays` | Specifies the campaign runs once every N days. For example, `1` \= every day, `2` \= every alternate day and so on. | Integer, required |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Agentless Voice | Product Feedback | Jan 9 scheduled successfully",
    "id": "cd-671b3bd-a7a1-4709-bd6a-70803e3xxxxx"
}
```

## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Indicates the response status. Example, success | string |
| `message` | Descriptive message about the result. | string |
| `id` | Unique identifier of the successfully scheduled voice or SMS campaign. | string |