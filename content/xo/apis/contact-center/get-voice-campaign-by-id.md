--8<-- "includes/ccai-api-back-link.md"

# Get Voice Campaign API

Use this API to fetch complete details of an existing voice campaign using the campaign ID.

| **Method**        | PUT                                                                                                                                                         |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Endpoint**      | `https://{{host}}/agentassist/api/v1/public/{{IId}}/campaign/{{campaignId}}`                                                   |
| **Content-Type**  | `application/json`                                                                                                                                           |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token)                 |
| **API Scope**     | Campaign Management                                                                                                                                          |

## Path Parameters

| **Parameter** | **Description**                                                                                                         | **Type**         |
|---------------|-------------------------------------------------------------------------------------------------------------------------|------------------|
| `host`          | Environment URL, for example, `https://platform.kore.ai`                                                                 | string, required |
| `IId`      | The Application ID.                                      | string, required |
| `campaignId`    | Unique ID of the campaign to be updated. For example: `cd-ed19e3c7-3682-5e72-a839-af9e0711xxxx`                        | string, required |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{botId}}/campaign/{{campaignId}}' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14b9xxxx' \
--header 'accountId: 67777ce93e25326494e9xxxx' \
--header 'auth: <token>'
```

## Headers

| **Header** | **Description**                   | **Required/Optional** |
|------------|-----------------------------------|------------------------|
| `auth`     | JWT token for authentication.     | required               |
| `iid`     | The Application Id.     | required               |
| `accountId`     | The Account Id.     | required               |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign Interactive Support SMS Campaign retrieved successfully",
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

| **Parameter**                                          | **Description**                                                                                   | **Type**                  |
|---------------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------|
| `status`                                          | Overall status of the API response. Example: `"success"`                                      | string                |
| `message`                                         | Response message indicating the result of the request.                                        | string                |
| `data`                                            | Contains the campaign details.                                                                | object                |
| `data._id`                                        | Unique identifier of the campaign.                                                            | string                |
| `data.name`                                       | Campaign name (title-cased).                                                                  | string                |
| `data.lname`                                      | Lowercased campaign name.                                                                     | string                |
| `data.description`                                | Detailed description of the campaign purpose and behavior.                                    | string                |
| `data.status`                                     | Current status of the campaign. Example: `"Ready"`                                            | string                |
| `data.priority`                                   | Priority level assigned to the campaign.                                                      | string                |
| `data.dialingStrategy`                            | Configuration for dialing or communication strategy.                                          | object                |
| `data.dialingStrategy.callerId.phoneNumber`       | Phone number used as the caller ID or sender ID.                                              | string                |
| `data.dialingStrategy.callingHours`               | Campaign's operating schedule.                                                                | object                |
| `data.dialingStrategy.callingHours.frequency`     | Frequency for running the campaign. Example: `"WEEKLY"`                                       | string                |
| `data.dialingStrategy.callingHours.timezone`      | Time zone for the calling hours.                                                              | string                |
| `data.dialingStrategy.callingHours.days`          | Days and time range when the campaign is active.                                              | array of object       |
| `data.dialingStrategy.callingHours.days[].day`    | Day of the week when campaign runs. Example: `"MO"`                                           | string                |
| `data.dialingStrategy.callingHours.days[].start`  | Campaign start time for the day. (HH:MM AM/PM)                                                             | string   |
| `data.dialingStrategy.callingHours.days[].end`    | Campaign end time for the day. (HH:MM AM/PM)                                                                | string  |
| `data.experienceFlow`                             | Associated experience flow ID used by the campaign.                                           | string                |
| `data.createdAt`                                  | Timestamp when the campaign was created. (ISO 8601)                                                     | string      |
| `data.updatedAt`                                  | Timestamp when the campaign was last updated. (ISO 8601)                                                | string      |
| `data.schedule`                                   | Scheduling configuration for the campaign.                                                    | object                |
| `data.schedule.isSchedulingEnabled`               | Indicates whether the campaign has a scheduled start.                                         | boolean               |
| `data.schedule.isRecurrenceEnabled`               | Indicates whether recurrence is enabled.                                                      | boolean               |
| `data.contactLists`                               | Names of contact lists associated with the campaign.                                          | array of string       |
| `data.enableMachineDetect`                        | Whether machine detection is enabled for the campaign.                                        | boolean               |
| `data.format`                                     | Format of the campaign configuration. Example: `"advanced"`                                   | string                |