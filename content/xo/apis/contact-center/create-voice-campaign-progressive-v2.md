--8<-- "includes/ccai-api-back-link.md"

# Create Voice Campaign API - Progressive Mode-v2

Use this API to create a voice campaign with Progressive dialing mode that routes answered calls to live agents via a queue.

| **Method** | **POST** |
| :---- | :---- |
| **Endpoint** | `https://{{url}}/campaign/api/v2/public/{{streamId}}/campaign?accountId={{accountId}}&campaignType=voice` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |

## Query Parameter

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `campaignType` | Type of campaign. Use `“voice”` | string, required |

## Sample Request

```
curl --location 'https://{{url}}/campaign/api/v2/public/{{streamId}}/campaign?accountId={{accountId}}&campaignType=voice' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'accountid: {{accountId}}' \
--header 'iid: {{streamId}}' \
--data '{
    "name": "Service Renewal Outreach Campaign61",
    "description": "Connects customers with live agents to assist with upcoming service renewals using progressive dialing. Ensures personalized support and improved engagement.",
    "contactLists": [
        "CL Only 2020 Dec 4"
    ],
    "dncLists": {
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

    "queue_name": "Default Queue",
    "campaignType": "voice"
}'
```
## Headers

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | string, required |
| `IId` | The application ID| string, required |
| `accountId` | The Account Id. | required |

## Body Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `name` | Name of the campaign. Used to identify it in the Kore.ai platform. The name must be a maximum of 48 characters. | string, required |
| `description` | Description of the campaign’s purpose. Helps teams understand the goal. The description must be a maximum of 256 characters. | string, required |
| `contactLists` | List of contact list names to be dialed. Must exist in the system. At least one contact list name is required. | array[string], required |
| `dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object, required |
| `dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string, required |
| `priority` | Campaign priority. Higher values indicate higher execution priority. Priority must be one of the following: 1, 2, 3, 4, or 5. | string, required |
| `dialingMode` | Dialing mode defines how calls are handled. Valid values are: Agentless, Progressive, or Preview. | string, required |
| `dialingStrategy.callerId.phoneNumber` | Caller ID number shown to the recipient. Must be a verified number. | string, required |
| `dialingStrategy.callingHours.frequency` | Frequency of calling hours must be one of: WEEKLY, DAILY, or CUSTOM. | string, required |
| `dialingStrategy.callingHours.timezone` | Timezone in which calling hours are defined. | string, required |
| `dialingStrategy.callingHours.days` | List of allowed calling time blocks. Each object should include: • day: 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU' • start: "9:00 AM" • end: "6:00 PM" You can define multiple entries to cover different days and time slots. | array[object], required |
| `dialingStrategy.dialingOrder` | Order in which contacts are dialed: First In First Out (FIFO), Last In First Out (LIFO), etc. | string, required |
| `dialingStrategy.maxAttemptsPerRecord` | Maximum number of call attempts per contact. Minimum is 1 and maximum is 100. | number, required |
| `dialingStrategy.defaultRetryPeriod` | Time (in minutes) to wait between retries. Must be between 1 and 1440. | number, required |
| `dialingStrategy.maxRingTime` | Max time (in seconds) the phone should ring before disconnecting. Must be between 5 and 120. | number, required |
| `queue_name` | Name of the agent queue used to route calls when agents are needed. Required for Progressive dialing. | string, required |
| `campaignType` | Type of campaign. Must be either voice or sms. | string, required |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Service Renewal Outreach Campaign61 creation in progress",
    "data": {
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
        "status": "Preparing",
        "isFiltersEnabled": false,
        "createdAt": "2025-12-04T10:50:56.762Z",
        "updatedAt": "2025-12-04T10:50:56.762Z",
        "id": "cd-a1e45a7-e8ba-4e97-a339-476ebc7xxxxx",
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
| `data` | Contains the campaign configuration details. | object |
| `data.name` | Display name of the campaign. | string |
| `data.lname` | Lowercase name of the campaign, used internally. | string |
| `data.description` | Description of the campaign purpose and functionality. | string |
| `dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object, required |
| `data.dncLists.id` | Unique identifier of the contact list in the DNC list. | string (UUID) |
| `dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string |
| `data.priority` | Campaign priority level. | String |
| `data.dialingMode` | Dialing mode used for the campaign. Example: `"Progressive"` | string |
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
| `data.status` | Current state of the campaign. Example: `"Preparing"` | string |
| `data.createdAt` | Campaign creation timestamp. (ISO 8601) | string |
| `data.updatedAt` | Last updated timestamp. (ISO 8601) | string |
| `data.id` | Unique identifier for the campaign. | string |
| `data.contactLists` | Names of associated contact lists. | array of string  |