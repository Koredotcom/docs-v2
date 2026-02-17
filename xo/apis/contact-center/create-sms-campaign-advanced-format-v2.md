--8<-- "includes/ccai-api-back-link.md"

# Create SMS Campaign (Advanced Format) API-v2

Use this API to create an SMS campaign with advanced formatting using the specified experience flow and contact list.

| **Method** | **POST** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/api/v2/public/{{streamId}}/campaign?accountId={{accountId}}&campaignType=sms` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`<br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL. For example: `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |

## Query Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `campaignType` | Type of campaign. Use `"sms"`. | string, required |

## Sample Request

```
curl --location 'hhttps://{{host}}/api/v2/public/{{streamId}}/campaign?accountId={{accountId}}&campaignType=sms' \
--header 'auth: <token>' \
--header 'accountid: 67777ce93e25326494exxxxx' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--data '{
    "name": "Interactive Support SMS Campaign1212",
    "description": "This campaign sends an SMS with a link or instructions to interact with an AI Agent. Customers can check order status, raise tickets, or get help—all via chat-enabled SMS.",
    "contactLists": [
        "CL Only 2020 Dec 4"
    ],
    "dncLists": {
        "name": "testdnc"
    },
    "priority": "5",
    "format": "advanced",
    "campaignType": "sms",
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
    "schedule": {
        "isSchedulingEnabled": false
    },
    "experienceFlowName": "SMS Support Flow"
}'

```

## Headers

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `iid` | The Application Id. | required |
| `accountId` | The Account Id. | required |

## Body Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `name` | Name of the campaign. | string, required |
| `description` | Description of the campaign. | string, optional |
| `contactLists` | List of contact list names to use in the campaign. | array, required |
| `data.dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object, optional |
| `data.dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string, optional |
| `campaignType` | Type of campaign. Always `sms`. | string, required |
| `priority` | Campaign execution priority. For example, 5 | string, optional |
| `format` | Message format. Use `simple`. | string, required |
| `message` | Message content. | object, required |
| `message.templateId` | Template ID for pre-configured message. Leave empty for plain message. | string, optional |
| `message.message` | Base64-encoded message content. | string, required |
| `dialingStrategy` | Calling strategy. | object, required |
| `dialingStrategy.callerId` | Caller ID details. | object, required |
| `dialingStrategy.callerId.phoneNumber` | Caller’s phone number in E.164 format. | string, required |
| `dialingStrategy.callingHours` | Permitted days and times. | object, required |
| `dialingStrategy.callingHours.frequency` | Frequency type. For example: `WEEKLY`. | string, required |
| `dialingStrategy.callingHours.timezone` | Time zone for the campaign. For example: `Asia/Kolkata`. | string, required |
| `dialingStrategy.callingHours.days` | List of day/time windows. | array, required |
| `dialingStrategy.callingHours.days.day` | Day of the week (`MO`, `TU`, `WE`, etc.). | string, required |
| `dialingStrategy.callingHours.days.start` | Start time (for example, `9:00 AM`). | string, required |
| `dialingStrategy.callingHours.days.end` | End time (for example, `6:00 PM`). | string, required |
| `schedule` | Scheduling settings. | object, optional |
| `schedule.isSchedulingEnabled` | Set to `false` to trigger the campaign immediately. | boolean, optional |
| `experienceFlowName` | Name of the associated experience flow. | string, required |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Interactive Support SMS Campaign1212 creation in progress",
    "data": {
        "_id": "cd-e7110489-a30a-5d1e-80ee-f246cc8xxxxx",
        "name": "Interactive Support SMS Campaign1212",
        "lname": "interactive support sms campaign1212",
        "description": "This campaign sends an SMS with a link or instructions to interact with the AI Agent. Customers can check order status, raise tickets, or get help—all via chat-enabled SMS.",
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
        "updatedAt": "2025-12-05T08:16:19.398Z",
        "schedule": {
            "isSchedulingEnabled": false
        },
        "contactLists": [
            "CL Only 2020 Dec 4"
        ],
        "format": "advanced"
    }
}
```

## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `_id` | Unique identifier for the campaign. | string |
| `name` | Campaign name. | string |
| `lname` | Lowercase version of campaign name. | string |
| `description` | Campaign description. | string |
| `status` | Current campaign status. For example: `Ready`. | string |
| `data.dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object, optional |
| `data.dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string, optional |
| `priority` | Campaign priority. For example: `5`. | string |
| `dialingStrategy` | Dialing configuration for the campaign. | object |
| `dialingStrategy.callerId` | Caller ID configuration. | object |
| `dialingStrategy.callerId.phoneNumber` | Caller phone number in E.164 format. | string |
| `dialingStrategy.callingHours` | Allowed calling hours. | object |
| `dialingStrategy.callingHours.frequency` | Frequency of calls. Example: `WEEKLY`. | string |
| `dialingStrategy.callingHours.timezone` | Time zone used for calling hours. | string |
| `dialingStrategy.callingHours.days` | List of daily calling windows. | array |
| `dialingStrategy.callingHours.days.day` | Day of the week (for example, `MO`, `TU`). | string |
| `dialingStrategy.callingHours.days.start` | Start time (for example, `9:00 AM`). | string |
| `dialingStrategy.callingHours.days.end` | End time (for example, `6:00 PM`). | string |
| `experienceFlow` | Experience flow ID assigned. | string |
| `totalMessagesSent` | Count of messages sent. | integer |
| `direction` | Campaign format type. For example: `advanced`. | string |
| `createdAt` | Campaign creation timestamp in ISO format. | string |
| `updatedAt` | Last update timestamp in ISO format. | string |
| `schedule` | Scheduling settings for the campaign. | object |
| `schedule.isSchedulingEnabled` | Indicates if scheduling is enabled for the campaign. | boolean |
| `contactLists` | List of contact list names used in the campaign. | array |
| `data.format` | Specifies the message format (for example, `advanced`). | string |