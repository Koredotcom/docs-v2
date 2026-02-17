--8<-- "includes/ccai-api-back-link.md"

# Get All SMS Campaigns API

Use this API to retrieve all SMS campaign configurations associated with a specific account.

| **Method**         | POST                                                                                                                                                                                                                  |
 |------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| **Endpoint**       | `https://{{host}}/agentassist/api/v1/public/{{IID}}/campaign/getAllCampaignDetails`                                                                                                            |
| **Content-Type**   | `application/json`                                                                                                                                                                                                          |
| **Authorization**  | `auth: {{JWT}}`<br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).                                                                                 |
| **API Scope**      | Campaign Management                                                                                                                                                                                                         |

## Path Parameters

| **Parameter** | **Description**                                                                                     | **Type**           |
|---------------|-----------------------------------------------------------------------------------------------------|--------------------|
| `host`        | Environment URL. For example: `https://platform.kore.ai`                                            | string, required |
| `IId`    | the Application ID.              | string, required |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{IID}}/campaign/getAllCampaignDetails' \
--header 'auth: <token>' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14b9xxxx' \
--header 'accountId: 67777ce93e25326494e9xxxx' \
--header 'Content-Type: application/json' \
--data '{
  "limit": 50,
  "skip": 0,
  "page": 1,
  "startDate": "2025-05-29T18:30:00.000Z",
  "endDate" : "2025-06-27T18:29:59.999Z",
  "type" :"sms",
  "sortBy": {
    "createdAt": "desc"
  },
  "filters": {
    "status": ["Ready", "Stopped"],
    "priority": [5]
    "dialingMode": ["Progressive", "Preview"]
  }
}
'
```

## Headers

| **Header** | **Description**                   | **Required/Optional** |
|------------|-----------------------------------|------------------------|
| `auth`     | JWT token for authentication.     | required               |
| `iid`     | The Application Id.     | required               |
| `accountId`     | The Account Id.     | required               |

## Request Body Parameters

| **Parameter**           | **Description**                                                                                                                                         | **Type**                      |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| `skip`                | Pagination offset. Number of records to skip. Can be a number or an empty string.                                                                  | number, optional          |
| `page`                | Page number for paginated results. Can be a number or an empty string.                                                                             | number, optional          |
| `limit`               | Number of records to return per page. Can be a number or an empty string.                                                                          | number, optional          |
| `type`                | Type of campaign. Allowed values: "voice" or "sms".                                                                                            | string, required          |
| `startDate`           | Filter start timestamp in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ).                                                                            | string (ISO format), optional |
| `endDate`             | Filter end timestamp in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ).                                                                              | string (ISO format), optional |
| `sortBy.name`         | Sort by campaign name. Allowed values: "asc", "desc". Must be included if any sort field is used.                                              | string, optional          |
| `sortBy.createdAt`    | Sort by campaign creation date. Allowed values: "asc", "desc".                                                                                 | string, optional          |
| `sortBy.updatedAt`    | Sort by campaign update date. Allowed values: "asc", "desc".                                                                                   | string, optional          |
| `filters.status`      | Filter by campaign status. Allowed values: ['Active', 'Completed', 'Ready', 'Paused', 'Preparing', 'Stopped', 'Scheduled', 'Rescheduled'].      | array[string], optional   |
| `filters.priority`    | Filter by campaign priority. Allowed values: [1, 2, 3, 4, 5].                                                                                     | array[number], optional   |

## Sample Response

```
{
    "status": "success",
    "message": "Campaign  retrieved successfully",
    "data": {
        "results": [
            {
                "name": "Interactive Support SMS Campaign",
                "description": "Updated: This campaign sends an SMS with a link or instructions to interact with a Kore.ai bot. Customers can check order status, raise tickets, or get help—all via chat-enabled SMS.",
                "status": "Ready",
                "priority": "5",
                "experienceFlow": "cf-67447605-115e-5dd2-a676-e158cf3bxxxx",
                "createdAt": "2025-06-27T09:25:53.320Z",
                "updatedAt": "2025-06-27T09:31:56.940Z",
                "schedule": {
                    "isSchedulingEnabled": false,
                    "isRecurrenceEnabled": false
                },
                "id": "cd-3aefda80-f98e-5f4f-ad41-92803abbxxxx",
                "totalMessagesSent": 0,
                "campaignInstanceUpdatedAt": "2025-06-27T09:31:56.940Z",
                "campaignExecutionType": "NORMAL",
                "contactLists": [
                    "Renewal Due - May/June 2025"
                ],
                "format": "advanced"
            },
            {
                "name": "Event Reminder SMS Campaign",
                "description": "Sends a one-time message to remind users about an upcoming event. No template or personalization is used—just a plain, direct message.",
                "status": "Ready",
                "priority": "5",
                "message": {
                    "message": "Hi, This is just reminder for upcoming event"
                },
                "createdAt": "2025-06-27T08:54:23.418Z",
                "updatedAt": "2025-06-27T08:54:23.466Z",
                "schedule": {
                    "isSchedulingEnabled": false,
                    "isRecurrenceEnabled": false
                },
                "id": "cd-b124b013-95bd-5ff2-ad90-01b8f4eexxxx",
                "totalMessagesSent": 0,
                "campaignInstanceUpdatedAt": "2025-06-27T08:54:23.466Z",
                "campaignExecutionType": "NORMAL",
                "contactLists": [
                    "Renewal Due - May/June 2025"
                ],
                "format": "simple"
            }
        ],
        "skip": 0,
        "limit": 2,
        "hasMore": true,
        "totalPages": 4,
        "totalResults": 8
    }
}
```

## Response Body Parameters

| **Parameter**                         | **Description**                                                                                                     | **Type**                        |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------|-----------------------------|
| `status`                          | Status of the API response. Typically `success` or `error`.                                                     | string                      |
| `message`                         | Response message providing context about the operation.                                                         | string                      |
| `data`                            | Object containing the campaign results and pagination metadata.                                         | object                      |
| `data.results`                    | List of campaign objects returned in the current page.                                                          | array of objects            |
| `data.results[].name`             | Campaign name.                                                                                                  | string                      |
| `data.results[].description`      | Campaign description.                                                                                           | string                      |
| `data.results[].status`           | Campaign status. Example: `Ready`, `Stopped`.                                                                   | string                      |
| `data.results[].priority`         | Campaign priority level.                                                                                        | string                      |
| `data.results[].experienceFlow`   | ID of the associated experience flow (present only in advanced campaigns).                                      | string                      |
| `data.results[].message`          | Message body object (present only in simple SMS campaigns).                                                     | object                      |
| `data.results[].message.message`  | Plain message string sent in the SMS.                                                                           | string                      |
| `data.results[].createdAt`        | ISO timestamp of campaign creation. (ISO 8601 datetime)                                                                            | string   |
| `data.results[].updatedAt`        | ISO timestamp of last campaign update. (ISO 8601 datetime)                                                                         | string   |
| `data.results[].schedule`         | Schedule configuration.                                                                                         | object                      |
| `data.results[].schedule.isSchedulingEnabled` | Whether campaign scheduling is enabled.                                                                | boolean                     |
| `data.results[].schedule.isRecurrenceEnabled` | Whether recurring scheduling is enabled.                                                              | boolean                     |
| `data.results[].id`               | Unique ID of the campaign.                                                                                      | string                      |
| `data.results[].totalMessagesSent`| Number of messages successfully sent in the campaign.                                                           | integer                     |
| `data.results[].campaignInstanceUpdatedAt` | ISO timestamp of last campaign execution update. (ISO 8601 datetime)                                                      | string  |
| `data.results[].campaignExecutionType` | Type of execution. Example: `NORMAL`.                                                                | string                      |
| `data.results[].contactLists`     | Array of contact list names linked to the campaign.                                                             | array of strings            |
| `data.results[].format`           | Campaign format. Possible values: `simple`, `advanced`.                                                         | string                      |
| `data.skip`                       | Number of records skipped in the result set.                                                                    | integer                     |
| `data.limit`                      | Number of records returned per page.                                                                            | integer                     |
| `data.hasMore`                    | Flag indicating if more records are available.                                                                  | boolean                     |
| `data.totalPages`                 | Total number of pages available.                                                                                | integer                     |
| `data.totalResults`               | Total number of records matching the query.                                                                     | integer                     |