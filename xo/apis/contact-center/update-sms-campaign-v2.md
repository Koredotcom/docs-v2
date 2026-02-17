--8<-- "includes/ccai-api-back-link.md"

# Update SMS Campaign API

Use this API to update an existing SMS campaign using the format, contact lists, experience flow, and dialing strategy.

| **Method** | **PUT** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}?accountId={{accountId}}\&campaignType=sms` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL. For example: `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |
| `campaignId` | Unique ID of the campaign. For example: `cd-ed19e3c7-3682-5e72-a839-af9e0711xxxx` | string, required |

## Query Parameter

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `campaignType` | Type of campaign. Use `"sms"`. | string, required |

## Sample Request

```
curl --location --request PUT 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}?accountId={{accountId}}&campaignType=sms' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--header 'accountId: 67777ce93e25326494exxxxx' \
--data '{
    "name": "Interactive Support SMS Campaign",
    "description": "Updated: This campaign sends an SMS with a link or instructions to interact with a bot. Customers can check order status, raise tickets, or get help—all via chat-enabled SMS.",
    "contactLists": [
     "CL Only 2020 Dec 4"
    ],
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
| `name` | Name of the SMS campaign. Used to identify the campaign across the platform. Max 48 characters. | string, required |
| `description` | Description explaining the campaign’s objective (for example, enabling user interaction via SMS). Max 256 characters. | string, required |
| `contactLists` | Names of predefined contact lists this campaign will target. At least one contact list name is required. | array[string], required |
| `priority` | Campaign priority. Higher values indicate higher execution priority. Must be one of: 1, 2, 3, 4, or 5. | string, required |
| `format` | Message format type. `"advanced"` is typically used when personalized content or bot links are included. | string, required |
| `campaignType` | Type of campaign. Must be either `'voice'` or `'sms'`. | string, required |
| `dialingStrategy.callerId.phoneNumber` | Phone number or sender ID used to send the SMS. Must be registered with the provider. | string, required |
| `dialingStrategy.callingHours.frequency` | Frequency of calling hours. Allowed values: `'WEEKLY'`, `'DAILY'`, or `'CUSTOM'`. | string, required |
| `dialingStrategy.callingHours.timezone` | Timezone used to enforce sending hours. Example: `"Asia/Kolkata"`. | string, required |
| `dialingStrategy.callingHours.days` | Array of allowed days and time blocks for sending SMS. Each entry includes: `day`, `start` (for example, `"9:00 AM"`), and `end` (for example, `"6:00 PM"`). Multiple allowed. | array[object], required |
| `experienceFlowName` | Name of the experience flow triggered via SMS for interactive support. | string, required |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Interactive Support SMS Campaign details updated successfully",
    "data": {
        "_id": "cd-e7110489-a30a-5d1e-80ee-f246cc8xxxxx",
        "name": "Interactive Support SMS Campaign",
        "lname": "interactive support sms campaign",
        "description": "Updated: This campaign sends an SMS with a link or instructions to interact with an AI Agent. Customers can check order status, raise tickets, or get help—all via chat-enabled SMS.",
        "status": "Ready",
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
        "updatedAt": "2025-12-05T08:57:17.709Z",
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
## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `_id` | Unique identifier for the campaign. | string |
| `name` | Campaign name. | string |
| `lname` | Lowercase version of campaign name. | string |
| `description` | Campaign description. | string |
| `status` | Current campaign status. For example: `Ready`. | string |
| `priority` | Campaign priority. For example: `5`. | string |
| `dialingStrategy` | Dialing configuration for the campaign. | object |
| `dialingStrategy.callerId` | Caller ID configuration. | object |
| `dialingStrategy.callerId.phoneNumber` | Caller phone number in E.164 format. | string |
| `dialingStrategy.callingHours` | Allowed calling hours. | object |
| `dialingStrategy.callingHours.frequency` | Frequency of calls. For example: `WEEKLY`. | string |
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
| `schedule.isRecurrenceEnabled` | Indicates if the campaign repeats automatically (daily, weekly, etc.). | boolean |
| `campaignInstanceId` | Internal campaign instance identifier. For example: `cid-b1c6849b-b40f-550e-ace7-xxxx` | string |
| `contactLists` | List of contact list names used in the campaign. | array |
| `data.format` | Specifies the message format (for example, `advanced`). | string |