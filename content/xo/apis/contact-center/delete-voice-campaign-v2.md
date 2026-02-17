--8<-- "includes/ccai-api-back-link.md"

# Delete Voice Campaign API-v2

Use this API to delete an active voice campaign for a given stream ID and campaign ID.

| **Method** | **DELETE** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}?accountId={{accountId}}\&campaignType=voice` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
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
| `campaignType` | Type of Campaign. Use `"sms"` | string, required |

## Sample Request

```
curl --location --request DELETE 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}?accountId={{accountId}}&campaignType=voice' \
--header 'auth: <token>' \
--header 'accountid: 67777ce93e25326494exxxxx' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx'
```

## Headers

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | string, required |
| `iid` | The Application Id. | string, required |
| `accountId` | The Account Id. | string, required |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Service Renewal Outreach Campaign61 deleted successfully",
    "data": {
        "_id": "cd-a1e45a7-e8ba-4e97-a339-476ebc7xxxxx",
        "name": "Service Renewal Outreach Campaign61",
        "lname": "service renewal outreach campaign61",
        "description": "Connects customers with live agents to assist with upcoming service renewals using progressive dialing. Ensures personalized support and improved engagement.",
        "dncLists": {
            "id": "cl-68b802a-2b99-4245-8eea-6d322a8xxxxx",
            "name": "DNC CL Dec 4"
        },
        "priority": "5",
        "dialingMode": "Progressive",
        "dialingStrategy": {
            "callerId": {
                "phoneNumber": "+181633xxxxx"
            },
            "callingHours": {
                "frequency": "WEEKLY",
                "days": [
                    {
                        "start": "9:00 AM",
                        "end": "6:00 PM",
                        "day": "MO"
                    },
                    {
                        "start": "9:00 AM",
                        "end": "6:00 PM",
                        "day": "TU"
                    },
                    {
                        "start": "9:00 AM",
                        "end": "6:00 PM",
                        "day": "WE"
                    },
                    {
                        "start": "9:00 AM",
                        "end": "6:00 PM",
                        "day": "TH"
                    },
                    {
                        "start": "9:00 AM",
                        "end": "6:00 PM",
                        "day": "FR"
                    }
                ],
                "timezone": "Asia/Kolkata"
            },
            "dialingOrder": "FIFO",
            "maxAttemptsPerRecord": 3,
            "defaultRetryPeriod": 10,
            "maxRingTime": 30,
            "useSystemMappings": false
        },
        "status": "Ready",
        "isFiltersEnabled": false,
        "createdAt": "2025-12-04T10:50:56.762Z",
        "updatedAt": "2025-12-05T06:31:23.308Z",
        "schedule": {
            "isSchedulingEnabled": false,
            "isRecurrenceEnabled": false
        },
        "contactLists": [
            "CL Only 2020 Dec 4"
        ]
    }
}
```

## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Indicates the success or failure of the request. | string |
| `message` | Response message providing details about the result. | string |
| `data` | Object containing the SMS campaign details. | object |
| `data._id` | Unique identifier for the campaign. (UUID) | string |
| `data.name` | Display name of the SMS campaign. | string |
| `data.lname` | Lowercase or internal name of the campaign. | string |
| `data.description` | Description of the campaign objective and functionality. | string |
| `data.dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object |
| `data.dncLists.id` | Unique identifier of the contact list in the DNC list. | string (UUID) |
| `data.dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string |
| `data.priority` | Priority level of the campaign. | number |
| `data.format` | Format of the SMS campaign (for example, basic, advanced). | string |
| `data.dialingStrategy` | Object containing dialing strategy settings. | object |
| `data.dialingStrategy.callerId.phoneNumber` | Phone number used as the caller ID for the SMS campaign. | string |
| `data.dialingStrategy.callingHours.frequency` | Frequency at which the campaign runs (for example, `DAILY`, `WEEKLY`). | string |
| `data.dialingStrategy.callingHours.timezone` | Time zone used for the campaign’s calling hours. | string |
| `data.dialingStrategy.callingHours.days` | Array of day-wise calling hour configurations. | array |
| `data.dialingStrategy.callingHours.days[].day` | Day of the week when the campaign runs. (Enum) | string |
| `data.dialingStrategy.callingHours.days[].start` | Start time for SMS campaign activity on the given day. (Time) | string |
| `data.dialingStrategy.callingHours.days[].end` | End time for SMS campaign activity on the given day. (Time) | string |
| `data.experienceFlow` | ID of the bot experience flow used in the SMS campaign. (UUID) | string |
| `data.status` | Current status of the campaign (for example, `Ready`, `Stopped`). | String |
| `data.createdAt` | ISO timestamp when the campaign was created. (ISO 8601) | string |
| `data.updatedAt` | ISO timestamp when the campaign was last updated. (ISO 8601) | string |
| `data.schedule` | Object containing scheduling preferences. | object |
| `data.schedule.isSchedulingEnabled` | Indicates whether scheduling is enabled. | boolean |
| `data.schedule.isRecurrenceEnabled` | Indicates whether recurrence is enabled. | boolean |
| `data.campaignInstanceId` | Unique identifier for the specific instance of the campaign. (UUID) | string |
| `data.contactLists` | List of contact group names associated with the campaign. | array |