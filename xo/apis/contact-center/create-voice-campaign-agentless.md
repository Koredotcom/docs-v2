--8<-- "includes/ccai-api-back-link.md"

# Create Voice Campaign API - Agentless Mode

Use this API to create a new outbound voice campaign with agentless dialing mode.

| **Method**        | POST                                                                                                                                                                                                                        |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Endpoint**      | `https://{{host}}/agentassist/api/v1/public/{{IId}}/campaign?campaignType=voice`                                                                                                     |
| **Content-Type**  | `application/json`                                                                                                                                                                                                            |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).                                                                                 |
| **API Scope**     | Campaign Management                                                                                                                                                                                                           |

## Path Parameters

| **Parameter** | **Description** | **Type** |
|---------------|------------------|----------|
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `IId` | The Application ID. | string, required |

## Query Parameter

| **Parameter**   | **Description**                                  | **Type**           |
|-----------------|--------------------------------------------------|--------------------|
| `campaignType`  | Type of Campaign. Use `"sms"`                    | string, required |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{botId}}/campaign?campaignType=voice' \
--header 'auth: <token>>' \
--header 'Content-Type: application/json' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14b9xxxx' \
--header 'accountId: 67777ce93e25326494e9xxxx' \
--data '{
    "name": "Product Feedback Voice Campaign",
    "description": "This voice campaign collects quick feedback on recent purchases. It asks brief questions on satisfaction, usage, and suggestions to help improve future products and customer experience.",
    "contactLists": [
        "Recent Buyers - Q2 2025"
    ],
    "priority": "5",
    "dialingMode": "Agentless",
    "dialingStrategy": {
        "callerId": {
            "phoneNumber": "+15101234567"
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
    "enableMachineDetect": false,
    "campaignType": "voice"
}'
```

## Headers

| **Header** | **Description**                   | **Required/Optional** |
|------------|-----------------------------------|------------------------|
| `auth`     | JWT token for authentication.     | required               |
| `iid`     | The Application Id.     | required               |
| `accountId`     | The Account Id.     | required               |

## Body Parameters

| **Parameter**                              | **Description**                                                                                                                                                                                                                              | **Type**                  |
|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| `name`                                     | Name of the campaign. Used to identify it in the Kore.ai platform. The name must be a maximum of 48 characters.                                                                                                                         | string, required      |
| `description`                              | Description of the campaign's purpose. Helpful for internal context. The description must be a maximum of 256 characters.                                                                                                               | string, required      |
| `contactLists`                             | List of contact list names (must be created beforehand in Kore.ai).                                                                                                                                                                     | array[string], required |
| `priority`                                 | Campaign priority. Higher values indicate higher execution priority. Priority must be one of the following: 1, 2, 3, 4, or 5.                                                                                                            | string, required      |
| `dialingMode`                              | Dialing mode defines how calls are handled. Valid values are: Agentless, Progressive, or Preview.                                                                                                                                        | string, required      |
| `dialingStrategy.callerId.phoneNumber`     | Phone number shown as the caller ID to the recipient.                                                                                                                                                                                    | string, required      |
| `dialingStrategy.callingHours.frequency`   | Frequency of calling hours. Must be one of: WEEKLY, DAILY, or CUSTOM.                                                                                                                                                                   | string, required      |
| `dialingStrategy.callingHours.timezone`    | Timezone used for enforcing calling windows.                                                                                                                                                           | string, required      |
| `dialingStrategy.callingHours.days`        | List of allowed calling time blocks. Each object should include: day (MO, TU, WE, TH, FR, SA, SU), start (for example, 9:00 AM), and end (for example, 6:00 PM). You can define multiple entries for different days and time slots.                   | array[object], required |
| `dialingStrategy.dialingOrder`             | Order of dialing, such as First In First Out (FIFO) or Last In First Out (LIFO).                                                                                                                                                                                                  | string, required      |
| `dialingStrategy.maxAttemptsPerRecord`     | Maximum number of call attempts per contact. Must be between 1 and 100.                                                                                                                                                                 | number, required      |
| `dialingStrategy.defaultRetryPeriod`       | Time in minutes to wait between retries. Must be between 1 and 1440.                                                                                                                                                                    | number, required      |
| `dialingStrategy.maxRingTime`              | Maximum ring duration in seconds before disconnecting. Must be between 5 and 120.                                                                                                                                                       | number, required      |
| `experienceFlowName`                       | Name of the voice flow (bot or IVR) used to interact with the user.                                                                                                                                                                     | string, required      |
| `enableMachineDetect`                      | Enables detection of answering machines or voicemails. Valid values: true or false.                                                                                                                                                     | boolean, required     |
| `campaignType`                             | Type of campaign. Must be either voice or sms.                                                                                                                                                                                           | string, required      |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Product Feedback Voice Campaign creation in progress",
    "data": {
        "name": "Product Feedback Voice Campaign",
        "lname": "product feedback voice campaign",
        "description": "This voice campaign collects quick feedback on recent purchases. It asks brief questions on satisfaction, usage, and suggestions to help improve future products and customer experience.",
        "priority": "5",
        "dialingMode": "Agentless",
        "dialingStrategy": {
            "callerId": {
                "phoneNumber": "+15123456789"
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
            "maxRingTime": 30
        },
        "experienceFlow": "cf-ecfa3927-eabc-52c4-8373-8a0b75d57955",
        "status": "Preparing",
        "createdAt": "2025-06-26T10:31:37.861Z",
        "updatedAt": "2025-06-26T10:31:37.861Z",
        "id": "cd-34696b5-94e3-4e6e-a40a-505ca005xxxx",
        "contactLists": [
            "Recent Buyers - Q2 2025"
        ],
        "enableMachineDetect": false
    }
}
```

## Response Body Parameters

| **Parameter**                                              | **Description**                                                                 | **Type**                    |
|--------------------------------------------------------|-----------------------------------------------------------------------------|-------------------------|
| `status`                                               | Indicates the overall response status. Example: `"success"`                | string                  |
| `message`                                              | Descriptive message about the result.                                      | string                  |
| `data`                                                 | Contains the campaign configuration details.                               | object                  |
| `data.name`                                            | Display name of the campaign.                                              | string                  |
| `data.lname`                                           | Lowercase name of the campaign, used internally.                           | string                  |
| `data.description`                                     | Description of the campaign purpose and functionality.                     | string                  |
| `data.priority`                                        | Campaign priority level.                                                   | string                  |
| `data.dialingMode`                                     | Dialing mode used for the campaign. Example: `"Agentless"`                | string                  |
| `data.dialingStrategy`                                 | Defines dialing strategy configuration.                                    | object                  |
| `data.dialingStrategy.callerId.phoneNumber`            | Caller ID phone number used for outbound calls.                            | string                  |
| `data.dialingStrategy.callingHours`                    | Defines the allowed calling hours and schedule.                            | object                  |
| `data.dialingStrategy.callingHours.frequency`          | Calling frequency. Example: `"WEEKLY"`                                     | string                  |
| `data.dialingStrategy.callingHours.days`               | Daily schedules with start/end time and day.                               | array of object         |
| `data.dialingStrategy.callingHours.days[].start`       | Start time of calling window.  (hh:mm AM/PM)                                             | string    |
| `data.dialingStrategy.callingHours.days[].end`         | End time of calling window. (hh:mm AM/PM)                                               | string     |
| `data.dialingStrategy.callingHours.days[].day`         | Day of the week. (2-letter) Example: `"MO"`, `"TU"`                                   | string        |
| `data.dialingStrategy.callingHours.timezone`           | Timezone used for the calling schedule. Example: `"Asia/Kolkata"`         | string                  |
| `data.dialingStrategy.dialingOrder`                    | Order in which records are dialed. Example: `"FIFO"`                       | string                  |
| `data.dialingStrategy.maxAttemptsPerRecord`            | Maximum retry attempts for each record.                                    | integer                 |
| `data.dialingStrategy.defaultRetryPeriod`              | Default wait time between retries. (minutes)                                        | integer        |
| `data.dialingStrategy.maxRingTime`                     | Maximum ring time before hanging up. (seconds)                                      | integer        |
| `data.experienceFlow`                                  | Identifier of the experience flow used for automation.                     | string                  |
| `data.status`                                          | Current state of the campaign. Example: `"Preparing"`                      | string                  |
| `data.createdAt`                                       | Campaign creation timestamp. (ISO 8601)                                               | string       |
| `data.updatedAt`                                       | Last updated timestamp. (ISO 8601)                                                     | string      |
| `data.id`                                              | Unique identifier for the campaign.                                        | string                  |
| `data.contactLists`                                    | Names of associated contact lists.                                         | array of string         |
| `data.enableMachineDetect`                             | Indicates whether machine detection is enabled.                            | boolean                 |
