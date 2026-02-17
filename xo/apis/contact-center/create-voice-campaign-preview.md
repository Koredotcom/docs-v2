--8<-- "includes/ccai-api-back-link.md"

# Create Voice Campaign API - Preview Mode

Use this API to create a voice campaign that uses Preview dialing mode. In this mode, agents review contact information before initiating calls. The campaign routes answered calls to a specified agent queue.

| **Method**       | POST                                                                                                                                                         |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Endpoint**     | `https://{{host}}/agentassist/api/v1/public/{{IId}}/campaign?campaignType=voice`                                     |
| **Content-Type** | `application/json`                                                                                                                                           |
| **Authorization**| `auth: {{JWT}}`  <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token)                      |
| **API Scope**    | Campaign Management                                                                                                                                          |

## Path Parameters

| **Parameter** | **Description**                                                                                   | **Type**          |
|---------------|---------------------------------------------------------------------------------------------------|-------------------|
| `host`        | Environment URL, for example, `https://platform.kore.ai`                                          | string, required  |
| `IId`    | The Application ID.                  | string, required  |

## Query Parameter

| **Parameter**   | **Description**                              | **Type**          |
|------------------|----------------------------------------------|-------------------|
| `campaignType`   | Type of Campaign. Use `sms`.                 | string, required  |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{botId}}/campaign?campaignType=voice' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14b9xxxx' \
--header 'accountId: 67777ce93e25326494e9xxxx' \
--data '{
    "name": "Billing Reminder Voice Campaign",
    "description": "Progressive dialing campaign to remind customers about upcoming bill payments. Connects to an agent if available, else plays a recorded message",
    "contactLists": [
        "Recent Buyers - Q2 2025"
    ],
    "priority": "5",
    "dialingMode": "Preview",
    "dialingStrategy": {
        "callerId": {
            "phoneNumber": "+181234567"
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
    "enableMachineDetect": false,
    "maxSkips": 1,
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

| **Parameters**                               | **Description**                                                                                                                                                                                                                              | **Type**                    |
|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| `name`                                    | Name of the campaign. Used to identify it in Kore.ai. The name must be a maximum of 48 characters.                                                                                                                                       | string, required        |
| `description`                             | Description of the campaign’s objective. The description must be a maximum of 256 characters.                                                                                                                                            | string, required        |
| `contactLists`                            | List of contact list names. These must already exist. At least one contact list name is required.                                                                                                                                       | array[string], required |
| `priority`                                | Campaign priority. Higher values indicate higher execution priority. Priority must be one of the following: 1, 2, 3, 4, or 5.                                                                                                            | string, required        |
| `dialingMode`                             | Dialing mode defines how calls are handled. Valid values are: Agentless, Progressive, or Preview.                                                                                                                                       | string, required        |
| `dialingStrategy.callerId.phoneNumber`    | Caller ID number to display when calling. Must be a verified number.                                                                                                                                                                    | string, required        |
| `dialingStrategy.callingHours.frequency`  | Frequency of calling hours must be one of: WEEKLY, DAILY, or CUSTOM.                                                                                                                                                                    | string, required        |
| `dialingStrategy.callingHours.timezone`   | Timezone in which calling hours should be enforced, e.g., "Asia/Kolkata".                                                                                                                               | string, required        |
| `dialingStrategy.callingHours.days`       | List of allowed calling time blocks. Each object should include:<br>• day: 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'<br>• start: "9:00 AM"<br>• end: "6:00 PM"<br>You can define multiple entries to cover different days and time slots. | array[object], required |
| `dialingStrategy.dialingOrder`            | Order in which contacts are dialed: "FIFO" (First In First Out) or "LIFO" (Last In First Out).                                                                                                                                                              | string, required        |
| `dialingStrategy.maxAttemptsPerRecord`    | Maximum number of call attempts per contact. Minimum is 1 and maximum is 100.                                                                                                                                                           | number, required        |
| `dialingStrategy.defaultRetryPeriod`      | Time (in minutes) to wait between retries. Must be between 1 and 1440.                                                                                                                                                                  | number, required        |
| `dialingStrategy.maxRingTime`             | Max time (in seconds) the phone should ring before disconnecting. Must be between 5 and 120.                                                                                                                                            | number, required        |
| `queue_name`                              | Name of the agent queue used for connecting calls in the campaign.                                                                                                                                                                      | string, required        |
| `enableMachineDetect`                     | Enables detection of answering machines or voicemails. Valid values are true or false.                                                                                                                                                  | boolean, required       |
| `maxSkips`                                | Number of contact skips allowed for agents in preview mode before the record is flagged.                                                                                                                                                | number, required        |
| `campaignType`                            | Type of campaign. Must be either 'voice' or 'sms'.                                                                                                                                                                                      | string, required        |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Voice From API- With Preview Dialing Mode- 2 creation in progress",
    "id": "cd-c806ae6-8e00-4131-ba20-bc072038xxxx",
    "data": {
        "campId": "cd-c806ae6-8e00-4131-ba20-bc072038xxxx"
    }
}
```

## Response Body Parameters

| **Parameter**   | **Description**                                 | **Type**  |
|----------------|--------------------------------------------------|-----------|
| `status`       | Status of the operation (`success`).             | string    |
| `message`      | Descriptive message of the action result.        | string    |
| `id`           | Unique identifier for the campaign.              | string    |
| `data.campId`  | Unique ID of the campaign.                       | string    |