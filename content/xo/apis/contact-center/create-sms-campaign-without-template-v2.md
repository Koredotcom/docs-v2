--8<-- "includes/ccai-api-back-link.md"

# Create SMS Campaign (Without SMS Template) API - v2

Use this API to create an SMS campaign without a template.

| **Method** | POST |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign?accountId={{accountId}}\&campaignType=sms` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |

## Query Parameter

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `campaignType` | Type of Campaign. Use `"sms"` | string, required |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign?accountId={{accountId}}&campaignType=sms' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'accountid: 67777ce93e25326494exxxxx' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--data '{
    "name": "Event Reminder SMS Campaign71",
    "description": "Sends a one-time message to remind users about an upcoming event. No template or personalization is used—just a plain, direct message.",
    "contactLists": [
     "CL Only 2020 Dec 4"
    ],
    "dncLists": {
        "name": "DNC CL Dec 4"
    },
    "campaignType": "sms",
    "priority": "5",
    "format": "simple",
    "message": {
        "message": "TWVzc2FnZSBmb3IgeW91ciB0YXJnZXRlZCBjdXN0b21lcg%xxxxx"
    },
    "dialingStrategy": {
        "callerId": {
            "phoneNumber": "+9195616xxxxx"
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
    }
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
| `name` | Name of the SMS campaign. Used for identification and reporting. Max 48 characters. | string, required |
| `description` | Campaign description. Explains the purpose and behavior of the SMS blast. Max 256 characters. | string, required |
| `contactLists` | List of contact list names to target. Each must exist in the system. At least one required. | array\[string\], required |
| `data.dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object, optional |
| `data.dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string, optional |
| `campaignType` | Type of campaign. Must be either `'voice'` or `'sms'`. | string, required |
| `priority` | Campaign priority. Higher values indicate higher execution priority. Allowed values: 1, 2, 3, 4, 5\. | string, required |
| `format` | Format of the SMS message. `'simple'` or `'advanced'` means plain text without personalization. | string, required |
| `message.templateId` | Template ID for message content. If empty, no template is used. | string, optional |
| `message.message` | Actual message text sent to contacts. Must comply with telecom rules. | string, required |
| `dialingStrategy.callerId.phoneNumber` | Sender ID or SMS phone number. | string, required |
| `dialingStrategy.callingHours.frequency` | Frequency of calling hours. Allowed values: `'WEEKLY'`, `'DAILY'`, `'CUSTOM'`. | string, required |
| `dialingStrategy.callingHours.timezone` | Timezone used to enforce messaging hours. | string, required |
| `dialingStrategy.callingHours.days` | Time blocks when messages can be sent. Each object includes: `day`, `start` (for example, "9:00 AM"), `end` (for example, "6:00 PM"). Multiple entries allowed. | array\[object\], required |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Event Reminder SMS Campaign71 creation in progress",
    "data": {
        "_id": "cd-964e76d3-2e70-51a5-bd47-b09b4d4xxxxx",
        "name": "Event Reminder SMS Campaign71",
        "lname": "event reminder sms campaign71",
        "description": "Sends a one-time message to remind users about an upcoming event. No template or personalization is used—just a plain, direct message.",
        "status": "Ready",
        "dncLists": {
            "name": "DNC CL Dec 4"
        },
        "priority": "5",
        "dialingStrategy": {
            "callerId": {
                "phoneNumber": "+9195616xxxxx"
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
        "message": {
            "message": "TWVzc2FnZSBmb3IgeW91ciB0YXJnZXRlZCBjdXN0b21lcg%xxxxx"
        },
        "isImported": false,
        "isFiltersEnabled": false,
        "createdAt": "2025-12-05T08:05:51.709Z",
        "updatedAt": "2025-12-05T08:05:51.709Z",
        "schedule": {
            "isSchedulingEnabled": false
        },
        "contactLists": [
            "CL Only 2020 Dec 4"
        ]
        "format": "simple"
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
| `status` | Current campaign status. For example: Ready. | string |
| `data.dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object |
| `data.dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string |
| `priority` | Campaign priority. For example: 5 | string |
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
| `message` | Contains the Base64-encoded SMS content. | object |
| `message.message` | Base64-encoded SMS message string. | string |
| `totalMessagesSent` | Count of messages sent. | integer |
| `direction` | Campaign format type. For example: `simple`. | string |
| `createdAt` | Campaign creation timestamp in ISO format. | string |
| `updatedAt` | Last update timestamp in ISO format. | string |
| `schedule` | Scheduling settings for the campaign. | object |
| `schedule.isSchedulingEnabled` | Indicates if scheduling is enabled for the campaign. | boolean |
| `contactLists` | List of contact list names used in the campaign. | array |
| `data.format` | Specifies the message format (for example, `simple`). | string |

