--8<-- "includes/ccai-api-back-link.md"

# Delete SMS Campaign API

Use this API to delete an active SMS campaign for a given stream ID and campaign ID.

| **Method**       | DELETE                                                                                                                                                                                                    |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Endpoint**     | `https://{{host}}agentassist/api/v1/public/{{IId}}/campaign/{{campaignType}}?campaignType=sms`                                                                   |
| **Content-Type** | `application/json`                                                                                                                                                                                         |
| **Authorization**| `auth: {{JWT}}`  <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token)                                                                |
| **API Scope**    | Campaign Management                                                                                                                                                                                        |

## Path Parameters

| **Parameter** | **Description**                                                                      | **Type**         |
|---------------|--------------------------------------------------------------------------------------|------------------|
| `host`          | Environment URL, for example, `https://platform.kore.ai`                              | string, required |
| `IId`      | The Application ID.     | string, required |
| `campaignId`   | Unique identifier of the campaign to trigger.                                        | string, required |

## Query Parameter

| **Parameter** | **Description** | **Type** |
|---------------|------------------|-----------|
| `campaignType` | Type of Campaign. Use `"sms"` | string, required |

## Sample Request

```
curl --location --request DELETE 'https://{{host}}/agentassist/api/v1/public/{{botId}}/campaign/{{campaignType}}?campaignType=sms' \
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
  "message": "Campaign Interactive Support SMS Campaign deleted successfully",
  "data": {
    "_id": "cd-3aefda80-f98e-5f4f-ad41-92803abbxxxx",
    "name": "Interactive Support SMS Campaign",
    "lname": "interactive support sms campaign",
    "description": "This campaign sends an SMS with a link or instructions to interact with a Kore.ai bot. Customers can check order status, raise tickets, or get help—all via chat-enabled SMS.",
    "priority": "5",
    "format": "advanced",
    "dialingStrategy": {
      "callerId": {
        "phoneNumber": "+91987654321"
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
    "status": "Stopped",
    "createdAt": "2025-06-27T09:25:53.320Z",
    "updatedAt": "2025-06-27T09:31:56.940Z",
    "schedule": {
      "isSchedulingEnabled": false,
      "isRecurrenceEnabled": false
    },
    "campaignInstanceId": "cid-xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "contactLists": [
      "Renewal Due - May/June 2025"
    ]
  }
}
```

## Response Body Parameters

| **Parameter**                                                | **Description**                                                                                              | **Type**            |
|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-----------------|
| `status`                                                 | Indicates the success or failure of the request.                                                         | string          |
| `message`                                                | Response message providing details about the result.                                                     | string          |
| `data`                                                   | Object containing the SMS campaign details.                                                              | object          |
| `data._id`                                               | Unique identifier for the campaign. (UUID)                                                                      | string   |
| `data.name`                                              | Display name of the SMS campaign.                                                                        | string          |
| `data.lname`                                             | Lowercase or internal name of the campaign.                                                              | string          |
| `data.description`                                       | Description of the campaign objective and functionality.                                                 | string          |
| `data.priority`                                          | Priority level of the campaign.                                                                          | number|
| `data.format`                                            | Format of the SMS campaign (for example, basic, advanced).                                                      | string          |
| `data.dialingStrategy`                                   | Object containing dialing strategy settings.                                                             | object          |
| `data.dialingStrategy.callerId.phoneNumber`              | Phone number used as the caller ID for the SMS campaign.                                                 | string          |
| `data.dialingStrategy.callingHours.frequency`            | Frequency at which the campaign runs (for example, `DAILY`, `WEEKLY`).                                              | string          |
| `data.dialingStrategy.callingHours.timezone`             | Time zone used for the campaign’s calling hours.                                                         | string          |
| `data.dialingStrategy.callingHours.days`                 | Array of day-wise calling hour configurations.                                                           | array   |
| `data.dialingStrategy.callingHours.days[].day`           | Day of the week when the campaign runs. (Enum)                                                                 | string    |
| `data.dialingStrategy.callingHours.days[].start`         | Start time for SMS campaign activity on the given day. (Time)                                                  | string    |
| `data.dialingStrategy.callingHours.days[].end`           | End time for SMS campaign activity on the given day. (Time)                                                    | string    |
| `data.experienceFlow`                                    | ID of the bot experience flow used in the SMS campaign. (UUID)                                                 | string    |
| `data.status`                                            | Current status of the campaign (for example, `Ready`, `Stopped`).                                                   | String          |
| `data.createdAt`                                         | ISO timestamp when the campaign was created. (ISO 8601)                                                            | string |
| `data.updatedAt`                                         | ISO timestamp when the campaign was last updated. (ISO 8601)                                                       | string |
| `data.schedule`                                          | Object containing scheduling preferences.                                                                | object          |
| `data.schedule.isSchedulingEnabled`                      | Indicates whether scheduling is enabled.                                                                 | boolean         |
| `data.schedule.isRecurrenceEnabled`                      | Indicates whether recurrence is enabled.                                                                 | boolean         |
| `data.campaignInstanceId`                                | Unique identifier for the specific instance of the campaign. (UUID)                                           | string    |
| `data.contactLists`                                      | List of contact group names associated with the campaign.                                                | array  |