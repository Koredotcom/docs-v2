--8<-- "includes/ccai-api-back-link.md"

# Update SMS Campaign API

Use this API to update an existing SMS campaign using the format, contact lists, experience flow, and dialing strategy.

| **Method**       | PUT                                                                                                                                                                                                  |
 |------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| **Endpoint**     | `https://{host}/agentassist/api/v1/public/{{IID}}/campaign/{{campaignId}}?campaignType=sms`                                                                   |
| **Content-Type** | `application/json`                                                                                                                                                                                        |
| **Authorization**| `auth: {{JWT}}`  <br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).                                                                 |
| **API Scope**    | Campaign Management                                                                                                                                                                                       |

## Path Parameters

| **Parameter** | **Description**                                                                                                         | **Type**         |
|---------------|-------------------------------------------------------------------------------------------------------------------------|------------------|
| `host`        | Environment URL. For example: `https://platform.kore.ai`                                                                | string, required |
| `IId`    | The Application ID.                                | string, required |
| `campaignId`  | Unique ID of the campaign to be updated. For example: `cd-ed19e3c7-3682-5e72-a839-af9e0711xxxx`                         | string, required |

## Query Parameter

| **Parameter**   | **Description**                                  | **Type**         |
|-----------------|--------------------------------------------------|------------------|
| `campaignType`  | Type of campaign. Use `"sms"`.                   | string, required |

## Sample Request

```
curl --location --request PUT 'https://{{host}}/agentassist/api/v1/public/{{IID}}/campaign/{{campaignID}}?campaignType=sms' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14b9xxxx' \
--header 'accountId: 67777ce93e25326494e9xxxx' \
--data '{
    "name": "Interactive Support SMS Campaign",
    "description": "Updated: This campaign sends an SMS with a link or instructions to interact with a Kore.ai bot. Customers can check order status, raise tickets, or get help—all via chat-enabled SMS.",
    "contactLists": [
     "Renewal Due - May/June 2025"
    ],
    "priority": "5",
    "format": "advanced",
    "campaignType": "sms",
    "dialingStrategy": {
        "callerId": {
            "phoneNumber": "+919876543210"
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

| **Header** | **Description**                   | **Required/Optional** |
|------------|-----------------------------------|------------------------|
| `auth`     | JWT token for authentication.     | required               |
| `iid`     | The Application Id.     | required               |
| `accountId`     | The Account Id.     | required               |

## Body Parameters

| **Parameter**                             | **Description**                                                                                                                                              | **Type**                    |
|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| `name`                                  | Name of the SMS campaign. Used to identify the campaign across the platform. Max 48 characters.                                                         | string, required        |
| `description`                           | Description explaining the campaign’s objective (for example, enabling user interaction via SMS). Max 256 characters.                                           | string, required        |
| `contactLists`                          | Names of predefined contact lists this campaign will target. At least one contact list name is required.                                                | array[string], required |
| `priority`                              | Campaign priority. Higher values indicate higher execution priority. Must be one of: 1, 2, 3, 4, or 5.                                                   | string, required        |
| `format`                                | Message format type. `"advanced"` is typically used when personalized content or bot links are included.                                                | string, required        |
| `campaignType`                          | Type of campaign. Must be either `'voice'` or `'sms'`.                                                                                                   | string, required        |
| `dialingStrategy.callerId.phoneNumber`  | Phone number or sender ID used to send the SMS. Must be registered with the provider.                                                                   | string, required        |
| `dialingStrategy.callingHours.frequency`| Frequency of calling hours. Allowed values: `'WEEKLY'`, `'DAILY'`, or `'CUSTOM'`.                                                                       | string, required        |
| `dialingStrategy.callingHours.timezone` | Timezone used to enforce sending hours. Example: `"Asia/Kolkata"`.                                                     | string, required        |
| `dialingStrategy.callingHours.days`     | Array of allowed days and time blocks for sending SMS. Each entry includes: `day`, `start` (for example, `"9:00 AM"`), and `end` (for example, `"6:00 PM"`). Multiple allowed. | array[object], required |
| `experienceFlowName`                    | Name of the Kore.ai experience flow (bot flow) triggered via SMS for interactive support.                                                               | string, required        |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Interactive Support SMS Campaign details updated successfully",
    "data": {
        "_id": "cd-3aefda80-f98e-5f4f-ad41-92803abbxxxx",
        "name": "Interactive Support SMS Campaign",
        "lname": "interactive support sms campaign",
        "description": "Updated: This campaign sends an SMS with a link or instructions to interact with a Kore.ai bot. Customers can check order status, raise tickets, or get help—all via chat-enabled SMS.",
        "status": "Ready",
        "priority": "5",
        "dialingStrategy": {
            "callerId": {
                "phoneNumber": "+919876543210"
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
        "experienceFlow": "cf-67447605-115e-5dd2-a676-e158cf3bxxxx",
        "createdAt": "2025-06-27T09:25:53.320Z",
        "updatedAt": "2025-06-27T09:31:56.940Z",
        "schedule": {
            "isSchedulingEnabled": false,
            "isRecurrenceEnabled": false
        },
        "contactLists": [
            "Renewal Due - May/June 2025"
        ],
        "enableMachineDetect": false,
        "format": "advanced"
    }
}
```

## Response Body Parameters

| **Parameter**                              | **Description**                                                                                 | **Type**    |
|-------------------------------------------|-------------------------------------------------------------------------------------------------|-------------|
| `_id`                                      | Unique identifier for the campaign.                                                             | string      |
| `name`                                     | Campaign name.                                                                                  | string      |
| `lname`                                    | Lowercase version of campaign name.                                                             | string      |
| `description`                              | Campaign description.                                                                           | string      |
| `status`                                   | Current campaign status. For example: `Ready`.                                                  | string      |
| `priority`                                 | Campaign priority. For example: `5`.                                                            | string      |
| `dialingStrategy`                          | Dialing configuration for the campaign.                                                         | object      |
| `dialingStrategy.callerId`                 | Caller ID configuration.                                                                        | object      |
| `dialingStrategy.callerId.phoneNumber`     | Caller phone number in E.164 format.                                                            | string      |
| `dialingStrategy.callingHours`            | Allowed calling hours.                                                                          | object      |
| `dialingStrategy.callingHours.frequency`   | Frequency of calls. For example: `WEEKLY`.                                                      | string      |
| `dialingStrategy.callingHours.timezone`    | Time zone used for calling hours.                                                               | string      |
| `dialingStrategy.callingHours.days`        | List of daily calling windows.                                                                  | array       |
| `dialingStrategy.callingHours.days.day`    | Day of the week (for example, `MO`, `TU`).                                                             | string      |
| `dialingStrategy.callingHours.days.start`  | Start time (for example, `9:00 AM`).                                                                   | string      |
| `dialingStrategy.callingHours.days.end`    | End time (for example, `6:00 PM`).                                                                     | string      |
| `experienceFlow`                           | Experience flow ID assigned.                                                                    | string      |
| `totalMessagesSent`                        | Count of messages sent.                                                                         | integer     |
| `direction`                                | Campaign format type. For example: `advanced`.                                                  | string      |
| `createdAt`                                | Campaign creation timestamp in ISO format.                                                      | string      |
| `updatedAt`                                | Last update timestamp in ISO format.                                                            | string      |
| `schedule`                                 | Scheduling settings for the campaign.                                                           | object      |
| `schedule.isSchedulingEnabled`             | Indicates if scheduling is enabled for the campaign.                                            | boolean     |
| `schedule.isRecurrenceEnabled`             | Indicates if the campaign repeats automatically (daily, weekly, etc.).                          | boolean     |
| `campaignInstanceId`                       | Internal campaign instance identifier. For example: `cid-b1c6849b-b40f-550e-ace7-xxxx`          | string      |
| `contactLists`                             | List of contact list names used in the campaign.                                                | array       |
| `enableMachineDetect`                      | Indicates if machine detection is enabled (not applicable for SMS).                             | boolean     |
| `data.format`                     | Specifies the message format (for example, `advanced`).                  | string  |