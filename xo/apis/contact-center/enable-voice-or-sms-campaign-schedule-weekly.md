--8<-- "includes/ccai-api-back-link.md"

# Enable Weekly Scheduling of Voice or SMS Campaigns

Use this API to schedule a recurring weekly Voice or SMS campaign.

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
--header 'accountid: {{accountid}}' \
--header 'iid: {{iid}}' \
--data '{
    "startDateTime": "2026-01-1 18:29:00",
    "endDateTime": "2026-01-27 18:29:00",
    "recurrenceObject": {
        "recurType": "Weekly",
        "weeklyDetails": {
            "onceEveryNweeks": 1,
            "whichDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  }
}
}
```

## Request Headers

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `accountId` | The account ID associated with the API request. | required |
| `Content-Type` | The format in which the request payload is sent to the server  application/json. | required |
| `iid` | BotId or StreamId. You can access it from the App Settings page of the bot. | required |

## Body Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
| :---- | :---- | :---- |
| `startDateTime` | The campaign’s start date and time in `YYYY-MM-DD HH:mm:ss` format. | string (Date-Time), required |
| `endDateTime` | The campaign’s end date and time in `YYYY-MM-DD HH:mm:ss` format. Must be greater than both current time and startDateTime. | string (Date-Time), required |
| recurrenceObject | Contains the recurrence configuration of a campaign. | object, required |
| `recurrenceObject.recurType` | Recurrence type for the campaign. For example, Daily or Weekly. |  |
| `recurrenceObject.dailyDetails` | Daily recurrence configuration. Required when `recurType` is `Weekly`. | object, required |
| `recurrenceObject.dailyDetails.onceEveryNweeks` | Specifies the campaign runs once every N weeks. For example, `1` = every week, `2` = every alternate week. | integer, required |
| `recurrenceObject.dailyDetails.whichDays` | Days of the week on which the campaign runs. For example, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`. | array, required |

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
| `id` | Unique identifier of the successfully scheduled campaign. | string |