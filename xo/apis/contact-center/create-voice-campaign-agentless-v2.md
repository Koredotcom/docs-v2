--8<-- "includes/ccai-api-back-link.md"

# Create Voice Campaign API - Agentless Mode - v2

Use this API to create a new outbound voice campaign with agentless dialing mode. 

| **Method** | **POST** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign?accountId={{accountId}}\&campaignType=voice` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign management  |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |

## Query Parameter

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `accountId` | Unique account identifier. | string, required |
| `campaignType` | Type of Campaign. Use `"voice"` | string, required |

## Sample request 

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign?accountId={{accountId}}&campaignType=voice' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'accountid: {{accountId}}' \
--header 'iid: {{streamId}}' \
--data '{
    "name": "Product Feedback Voice Campaign-3.41",
    "description": "This voice campaign collects quick feedback on recent purchases. It asks brief questions on satisfaction, usage, and suggestions to help improve future products and customer experience.",
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
    "enableMachineDetect": "no",
    "campaignType": "voice"

}'
```

## Header Parameters

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | string, required |
| `accountId` | Unique account identifier. | string, required |
| `iid` | The Application Id. | string, required |

## Request Parameters

| **Parameter** | **Description** | **Type/Required** |
| :---- | :---- | :---- |
| `name` | Name of the campaign. Used to identify it in the platform. The name must be a maximum of 48 characters. | string, required |
| `description` | Description of the campaign's purpose. Helpful for internal context. The description must be a maximum of 256 characters. | string, required |
| `contactLists` | List of contact list names  | array[string], required |
| `dncLists` | Contains the contact lists added under the Do Not Call (DNC) list. | object, required |
| `dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string, required |
| `priority` | Campaign priority. Higher values indicate higher execution priority. Priority must be one of the following: 1, 2, 3, 4, or 5. | string, required |
| `dialingMode` | Dialing mode defines how calls are handled. Valid values are: Agentless, Progressive, or Preview. | string, required |
| `dialingStrategy.callerId.phoneNumber` | Phone number shown as the caller ID to the recipient. | string, required |
| `dialingStrategy.callingHours.frequency` | Frequency of calling hours. Must be one of: WEEKLY, DAILY, or CUSTOM. | string, required |
| `dialingStrategy.callingHours.timezone` | Timezone used for enforcing calling windows. | string, required |
| `dialingStrategy.callingHours.days` | List of allowed calling time blocks. Each object should include: day (MO, TU, WE, TH, FR, SA, SU), start (for example, 9:00 AM), and end (for example, 6:00 PM). You can define multiple entries for different days and time slots. | array[object], required |
| `dialingStrategy.dialingOrder` | Order of dialing, such as First In First Out (FIFO) or Last In First Out (LIFO). | string, required |
| `dialingStrategy.maxAttemptsPerRecord` | Maximum number of call attempts per contact. Must be between 1 and 100. | number, required |
| `dialingStrategy.defaultRetryPeriod` | Time in minutes to wait between retries. Must be between 1 and 1440. | number, required |
| `dialingStrategy.maxRingTime` | Maximum ring duration in seconds before disconnecting. Must be between 5 and 120. | number, required |
| `experienceFlowName` | Name of the voice flow (bot or IVR) used to interact with the user. | string, required |
| `enableMachineDetect` | Enables detection of answering machines/voicemails. Valid values are: no (disable AMD), detect (detect machine and trigger flow), disconnect (detect machine and disconnect the call). | string, required |
| `campaignType` | Type of campaign. Must be either voice or sms. | string, required |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Product Feedback Voice Campaign-3.41 creation in progress",
    "data": {
        "name": "Product Feedback Voice Campaign-3.41",
        "lname": "product feedback voice campaign-3.41",
        "description": "This voice campaign collects quick feedback on recent purchases. It asks brief questions on satisfaction, usage, and suggestions to help improve future products and customer experience.",
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
        "experienceFlow": "cf-ecfa3927-eabc-52c4-8373-8a0b75dxxxxx",
        "status": "Preparing",
        "isFiltersEnabled": false,
        "createdAt": "2025-12-08T05:29:38.298Z",
        "updatedAt": "2025-12-08T05:29:38.298Z",
        "id": "cd-9e14b72-88cc-4544-9a98-7aee9b7xxxxx",
        "contactLists": [
            "CL Only 2020 Dec 4"
        ],
        "enableMachineDetect": false
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
| `data.dncLists` | Contains the names of people who are in DND mode. | object, required |
| data.dncLists.id | Unique identifier of the person in the DNC list. | string (UUID) |
| data.dncLists.name | The name of the person who is in the DNC list | string |
| `data.priority` | Campaign priority level. | string |
| `data.dialingMode` | Dialing mode used for the campaign. Example: `"Agentless"` | string |
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
| `data.experienceFlow` | Identifier of the experience flow used for automation. | string |
| `data.status` | Current state of the campaign. Example: `"Preparing"` | string |
| `data.createdAt` | Campaign creation timestamp. (ISO 8601\) | string |
| `data.updatedAt` | Last updated timestamp. (ISO 8601\) | string |
| `data.id` | Unique identifier for the campaign. | string |
| `data.contactLists` | Names of associated contact lists. | array of string |
| `data.enableMachineDetect` | Indicates whether machine detection is enabled. | boolean |
