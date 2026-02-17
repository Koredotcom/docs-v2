--8<-- "includes/ccai-api-back-link.md"

# Delete SMS Campaign API-v2

Use this API to delete an active SMS campaign for a given stream ID and campaign ID.

| **Method** | **DELETE** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}?accountId={{accountId}}&campaignType=sms` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
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
curl --location --request DELETE 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}?accountId={{accountId}}&campaignType=sms' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--header 'accountId: 67777ce93e25326494xxxxx' \
--header 'auth: <token>'

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
    "message": "Campaign Billing Alert Template Campaign-21212 deleted successfully",
    "data": {
        "_id": "cd-213cc43a-a340-5b89-a256-ff8da28xxxxx",
        "name": "Billing Alert Template Campaign-21212",
        "lname": "billing alert template campaign-21212",
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
        "createdAt": "2025-12-08T07:09:14.523Z",
        "updatedAt": "2025-12-08T07:09:31.423Z",
        "schedule": {
            "isSchedulingEnabled": false,
            "isRecurrenceEnabled": false
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
| `status` | Indicates the success or failure of the request. | string |
| `message` | Response message providing details about the result. | string |
| `data` | Object containing the SMS campaign details. | object |
| `data._id` | Unique identifier for the campaign. (UUID) | string |
| `data.name` | Display name of the SMS campaign. | string |
| `data.lname` | Lowercase or internal name of the campaign. | string |
| `data.description` | Description of the campaign objective and functionality. | string |
| `data.dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object |
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