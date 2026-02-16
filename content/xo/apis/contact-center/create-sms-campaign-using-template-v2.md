--8<-- "includes/ccai-api-back-link.md"

# Create SMS Campaign (Using Template) API-v2

Use this API to create an SMS campaign using a predefined message template.

| **Method** | **POST** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign?accountId={{accountId}}\&campaignType=sms` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`<br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |

## Query Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `campaignType` | Type of Campaign. Use `"sms"`. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign?accountId={{accountId}}&campaignType=sms' \
--header 'auth: <token>' \
--header 'accountid: 67777ce93e25326494exxxxx' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--data '{
    "name": "Billing Alert Template Campaign-21",
    "description": "Uses a pre-approved message template to alert customers about pending bills. Includes dynamic fields for customer name, due date, and bill amount",
    "contactLists": [
        "CL Only 2020 Dec 4"
    ],
    "dncLists": {
        "name": "testdnc"
    },
    "campaignType": "sms",
    "priority": "5",
    "format": "simple",
    "message": {
        "template_name": "Welcome",
        "message": "VGhpcyBpcyBhIHJlbWluZGVyIHRoYXQgeW91ciBwYXltZW50IGlzIGR1ZSBzb29uLiBQbGVhc2UgY29tcGxldGUgdGhlIHBheW1lbnQgb24gdGltZSB0byBhdm9pZCBhbnkgc2VydmljZSBpbnRlcnJ1cHRpb24uIFZpc2l0IHlvdXIgYWNjb3VudCB0byBwYXkgbm93Lg%xxxxx"
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
| `description` | Description of the campaign’s purpose. Helpful for internal reference. Max 256 characters. | string, required |
| `contactLists` | List of contact list names that will receive the message. Must already exist. At least one required. | array of strings, required |
| `data.dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object, optional |
| `data.dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string, optional |
| `campaignType` | Type of campaign. Must be either `'voice'` or `'sms'`. | string, required |
| `priority` | Campaign priority. Higher values indicate higher execution priority. Allowed values: 1, 2, 3, 4, 5. | string, required |
| `format` | Format of the SMS. `'simple'` = plain template without personalization logic. | string, required |
| `message.template_name` | Name of the pre-approved message template to use. | string, required |
| `message.message` | Base64-encoded message body to be sent. Should match the registered template body exactly. | string (Base64), required |
| `dialingStrategy.callerId.phoneNumber` | Sender phone number or ID used to send SMS. Must be approved and linked to your SMS provider. | string, required |
| `dialingStrategy.callingHours.frequency` | Frequency of calling hours. Allowed values: `'WEEKLY'`, `'DAILY'`, `'CUSTOM'`. | string, required |
| `dialingStrategy.callingHours.timezone` | Timezone used to interpret calling hours. Example: `"Asia/Kolkata"`. | string, required |
| `dialingStrategy.callingHours.days` | List of day/time ranges when messaging is allowed. Each object includes: `day`, `start` (for example, "9:00 AM"), `end` (for example, "6:00 PM"). Multiple blocks allowed. | array of objects, required |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Billing Alert Template Campaign-21 creation in progress",
    "data": {
        "_id": "cd-99f05887-5638-59ef-90d9-5dc9ebdxxxxx",
        "name": "Billing Alert Template Campaign-21",
        "lname": "billing alert template campaign-21",
        "description": "Uses a pre-approved message template to alert customers about pending bills. Includes dynamic fields for customer name, due date, and bill amount",
        "status": "Ready",
        "dncLists": {
            "name": "testdnc"
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
            "template_name": "Welcome",
            "message": "R3JlZXRpbmdzLCA8Rmlyc3QgTmFtZT4hIFdlJ3JlIHRocmlsbGVkIHRvIGhhdmUgeW91IGpvaW4gdXMuIEFjY2VzcyBvdXIgdG9wIHRocmVlIGJlZ2lubmVyJ3MgdGlwcyBieSBjbGlja2luZyBvbiB0aGlzIGxpbms6IGh0dHBzOi8veW91cndlYnNpdGUuY29tL3RpcHMuIElmIHlvdSBoYXZlIGFueSBpbnF1aXJpZXMsIGRvbid0IGhlc2l0YXRlIHRvIHNlbmQgdXMgYSByZXBseSByaWdodCBoZXJxxxxx",
            "templateId": "cmt-88fcd16f-bdb2-4d4d-8a2c-0324c7fxxxxx"
        },
        "isImported": false,
        "isFiltersEnabled": false,
        "createdAt": "2025-12-05T08:08:45.668Z",
        "updatedAt": "2025-12-05T08:08:57.490Z",
        "schedule": {
            "isSchedulingEnabled": false
        },
        "contactLists": [
            "CL Only 2020 Dec 4"
        ],
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