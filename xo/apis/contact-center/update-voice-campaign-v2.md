--8<-- "includes/ccai-api-back-link.md"

# Update Voice Campaign by ID-v2

Use this API to update the configuration details of an existing voice campaign using the dialing mode. This operation allows you to modify metadata, dialing strategies, schedules, and other runtime parameters.

| **Method** | **PUT** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}?accountId={{accountId}}&campaignType=sms` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
|  `streamId` | The Application ID. | string, required |
| `campaignId` | Unique ID of the campaign. For example: `cd-ed19e3c7-3682-5e72-a839-af9e0711xxxx` | string, required |

## Query Parameter

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `campaignType` | Type of Campaign. Use `"voice"` | string, required |

## Sample Request

```
curl --location --request PUT 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}?accountId={{accountId}}&campaignType=sms' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'accountid: {{accountId}}' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--data '{
    "name": "Product Feedback Voice Campaign-3.5",
    "description": "This voice campaign collects quick feedback on recent purchases. It asks brief questions on satisfaction, usage, and suggestions to help improve future products and customer experience.qqq2",
    "contactLists": [
        "CL Only 2020 Dec 4"
    ],
    "dncLists": {
        "name": "DNC CL Dec 4"
    },
    "priority": "5",
    "dialingMode": "Agentless",
    "dialingStrategy": {
        "callerId": {
            "phoneNumber": "+148465xxxxx"
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
        },
        "dialingOrder": "FIFO",
        "maxAttemptsPerRecord": 3,
        "defaultRetryPeriod": 10,
        "maxRingTime": 30
    },
    "schedule": {
        "isSchedulingEnabled": false
    },
    "experienceFlowName": "Voice Survey Entry Flow",
    "campaignType": "voice"

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
| `name` | Name of the campaign. Used to identify it in Kore.ai. The name must be a maximum of 48 characters | string, required |
| `description` | Description of the campaign’s objective. The description must be a maximum of 256 characters | string, required |
| `contactLists` | List of contact list names. These must already exist. At least one contact list name is required | array[string], required |
| `dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object, required |
| `dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string, required |
| `priority` | Campaign priority. Higher values indicate higher execution priority. Priority must be one of the following: 1, 2, 3, 4, or 5 | string, required |
| `dialingMode` | Dialing mode defines how calls are handled. Valid values are: Agentless, 'Progressive', or Preview. | string, required |
|  |  |  |
| `dialingStrategy.callerId.phoneNumber` | Caller ID number to display when calling. Must be a verified number. | string, required |
| `dialingStrategy.callingHours.frequency` | Frequency of calling hours must be one of: 'WEEKLY', 'DAILY', or 'CUSTOM' | string, required |
| `dialingStrategy.callingHours.timezone` | Timezone in which calling hours should be enforced, for example, "Asia/Kolkata". | string, required |
| `dialingStrategy.callingHours.days` | List of allowed calling time blocks. Each object should include: </br>• day: 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU' </br>• start: "9:00 AM" </br>• end: "6:00 PM" | array[object], required |
| `dialingStrategy.dialingOrder` | Order in which contacts are dialed: "FIFO" (First-In-First-Out) or "LIFO". | string, required |
| `dialingStrategy.maxAttemptsPerRecord` | Maximum number of call attempts per contact. Minimum is 1 and maximum is 100 | number, required |
| `dialingStrategy.defaultRetryPeriod` | Time (in minutes) to wait between retries. Must be between 1 and 1440 | number, required |
| `dialingStrategy.maxRingTime` | Max time (in seconds) the phone should ring before disconnecting. Must be between 5 and 120 | number, required |
| `queue_name` | Name of the agent queue used for connecting calls in the campaign. | string, required |
| `maxSkips` | Number of contact skips allowed for agents in preview mode before the record is flagged. | number, required |
| `campaignType` | Type of campaign. Must be either 'voice' or 'sms' | string, required |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Product Feedback Voice Campaign-3.5 details updated successfully",
    "id": "cd-10c85a3-57a3-4d2d-aad4-b09344axxxxx",
    "data": {
        "_id": "cd-10c85a3-57a3-4d2d-aad4-b09344axxxxx",
        "name": "Product Feedback Voice Campaign-3.5",
        "lname": "product feedback voice campaign-3.5",
        "description": "3This voice campaign collects quick feedback on recent purchases. It asks brief questions on satisfaction, usage, and suggestions to help improve future products and customer experience.qqq2",
        "dncLists": {
            "id": "cl-68b802a-2b99-4245-8eea-6d322a8xxxxx",
            "name": "DNC CL Dec 4"
        },
        "priority": "5",
        "dialingMode": "Agentless",
        "dialingStrategy": {
            "callerId": {
                "phoneNumber": "+148465xxxxx"
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
        "maxSkips": 1,
        "isFiltersEnabled": false,
        "createdAt": "2025-12-04T09:51:32.985Z",
        "updatedAt": "2025-12-04T11:19:47.030Z",
        "schedule": {
            "isSchedulingEnabled": false,
            "isRecurrenceEnabled": false
        },
        "experienceFlow": "cf-ecfa3927-eabc-52c4-8373-8a0b75dxxxxx",
        "contactLists": [
            "CL Only 2020 Dec 4"
        ]
    }
}

```
## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Indicates the overall response status. Example: `"success"` | string |
| `message` | Descriptive message about the result. | string |
| `id` | Unique identifier of the campaign (also repeated in `data.id`). | string |
| `data` | Contains the campaign configuration details. | object |
| `data.name` | Display name of the campaign. | String |
| `data.lname` | Lowercase name of the campaign, used internally. | string |
| `data.description` | Description of the campaign purpose and functionality. | string |
| `data.dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object, required |
| `data.dncLists.id` | Unique identifier of the contact list in the DNC list. | string (UUID) |
| `data.dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string |
| `data.priority` | Campaign priority level. | string |
| `data.dialingMode` | Dialing mode used for the campaign. Example: `"Preview"` | string |
| `data.dialingStrategy` | Defines dialing strategy configuration. | object |
| `data.dialingStrategy.callerId.phoneNumber` | Caller ID phone number used for outbound calls. | string |
| `data.dialingStrategy.callingHours` | Defines the allowed calling hours and schedule. | object |
| `data.dialingStrategy.callingHours.frequency` | Calling frequency. Example: `"WEEKLY"` | string |
| `data.dialingStrategy.callingHours.days` | Daily schedules with start/end time and day. | array of object |
| `data.dialingStrategy.callingHours.days[].start` | Start time of calling window. (hh:mm AM/PM) | string |
| `data.dialingStrategy.callingHours.days[].end` | End time of calling window. (hh:mm AM/PM) | string |
| `data.dialingStrategy.callingHours.days[].day` | Day of the week. (2-letter) Example: `"MO"`, `"TU"` | string |
| `data.dialingStrategy.callingHours.timezone` | Timezone used for the calling schedule. Example: `"Asia/Kolkata"` | string |
| `data.dialingStrategy.dialingOrder` | Order in which records are dialed. Example: `"FIFO"` | string |
| `data.dialingStrategy.maxAttemptsPerRecord` | Maximum retry attempts for each record. | integer |
| `data.dialingStrategy.defaultRetryPeriod` | Default wait time between retries. (minutes) | integer |
| `data.dialingStrategy.maxRingTime` | Maximum ring time before hanging up. (seconds) | integer |
| `data.status` | Current state of the campaign. Example: `"Ready"` | string |
| `data.maxSkips` | Maximum allowed skips for contacts in the dialing list. | integer |
| `data.createdAt` | Campaign creation timestamp. (ISO 8601) | string |
| `data.updatedAt` | Last updated timestamp. (ISO 8601) | string |
| `data.schedule` | Schedule configuration for the campaign. | object |
| `data.schedule.isSchedulingEnabled` | Indicates whether campaign scheduling is enabled. | boolean |
| `data.schedule.isRecurrenceEnabled` | Indicates whether campaign recurrence is enabled. | boolean |
| `data.id` | Unique identifier for the campaign. | string |
| `data.contactLists` | Names of associated contact lists. | array of string | 