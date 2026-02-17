--8<-- "includes/ccai-api-back-link.md"

# Get SMS Campaign API-v2

Use this API to fetch complete details of an existing SMS campaign using the campaign ID.

| **Method** | **GET** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}?accountId={{accountId}}` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL. For example: `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |
| `campaignId` | Unique ID of the campaign to be updated. For example: `cd-ed19e3c7-3682-5e72-a839-af9e0711xxxx` | string, required |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}?accountId={{accountId}}' \
--header 'auth: <token>' \
--header 'accountid: 67777ce93e25326494exxxxx' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx'
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
    "status": "success",
    "message": "Campaign Interactive Support SMS Campaign1212 retrieved successfully",
    "data": {
        "_id": "cd-e7110489-a30a-5d1e-80ee-f246cc8xxxxx",
        "name": "Interactive Support SMS Campaign1212",
        "lname": "interactive support sms campaign1212",
        "description": "This campaign sends an SMS with a link or instructions to interact with a bot. Customers can check order status, raise tickets, or get help—all via chat-enabled SMS.",
        "status": "Ready",
        "dncLists": {
            "name": "testdnc"
        },
        "priority": "5",
        "dialingStrategy": {
            "callerId": {
                "phoneNumber": "+9198607xxxxx"
            },
            "callingHours": {
                "frequency": "WEEKLY",
                "timezone": "Asia/Kolkata",
                "days": [
                    {
                        "day": "MO",
                        "start": "9:00 AM",
                        "end": "6:00 PM"
                    },
                    {
                        "day": "TU",
                        "start": "9:00 AM",
                        "end": "6:00 PM"
                    },
                    {
                        "day": "WE",
                        "start": "9:00 AM",
                        "end": "6:00 PM"
                    },
                    {
                        "day": "TH",
                        "start": "9:00 AM",
                        "end": "6:00 PM"
                    },
                    {
                        "day": "FR",
                        "start": "9:00 AM",
                        "end": "6:00 PM"
                    }
                ]
            }
        },
        "experienceFlow": "cf-67447605-115e-5dd2-a676-e158cf3xxxxx",
        "isImported": false,
        "isFiltersEnabled": false,
        "createdAt": "2025-12-05T08:16:19.398Z",
        "updatedAt": "2025-12-05T08:16:19.177Z",
        "schedule": {
            "isSchedulingEnabled": false,
            "isRecurrenceEnabled": false
        },
        "contactLists": [
            "CL Only 2020 Dec 4"
        ],
        "format": "advanced"
    }
}
```

## Response Body Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Overall status of the API response. Example: `"success"` | string |
| `message` | Response message indicating the result of the request. | string |
| `data` | Contains the campaign details. | object |
| `data._id` | Unique identifier of the campaign. | string |
| `data.name` | Campaign name (title-cased). | string |
| `data.lname` | Lowercased campaign name. | string |
| `data.description` | Detailed description of the campaign purpose and behavior. | string |
| `data.status` | Current status of the campaign. Example: `"Ready"` | string |
| `data.dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object |
| `data.dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string |
| `data.priority` | Priority level assigned to the campaign. | string |
| `data.dialingStrategy` | Configuration for dialing or communication strategy. | object |
| `data.dialingStrategy.callerId.phoneNumber` | Phone number used as the caller ID or sender ID. | string |
| `data.dialingStrategy.callingHours` | Campaign's operating schedule. | object |
| `data.dialingStrategy.callingHours.frequency` | Frequency for running the campaign. Example: `"WEEKLY"` | string |
| `data.dialingStrategy.callingHours.timezone` | Time zone for the calling hours. | string |
| `data.dialingStrategy.callingHours.days` | Days and time range when the campaign is active. | array of object |
| `data.dialingStrategy.callingHours.days[].day` | Day of the week when campaign runs. Example: `"MO"` | string |
| `data.dialingStrategy.callingHours.days[].start` | Campaign start time for the day. (HH:MM AM/PM) | string |
| `data.dialingStrategy.callingHours.days[].end` | Campaign end time for the day. (HH:MM AM/PM) | string |
| `data.experienceFlow` | Associated experience flow ID used by the campaign. | string |
| `data.createdAt` | Timestamp when the campaign was created. (ISO 8601) | string |
| `data.updatedAt` | Timestamp when the campaign was last updated. (ISO 8601) | string |
| `data.schedule` | Scheduling configuration for the campaign. | object |
| `data.schedule.isSchedulingEnabled` | Indicates whether the campaign has a scheduled start. | boolean |
| `data.schedule.isRecurrenceEnabled` | Indicates whether recurrence is enabled. | boolean |
| `data.contactLists` | Names of contact lists associated with the campaign. | array of string |
| `data.format` | Format of the campaign configuration. Example: `"advanced"` | string |