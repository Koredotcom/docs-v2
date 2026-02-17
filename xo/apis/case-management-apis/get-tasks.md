--8<-- "includes/cm-api-back-link.md"

# Get Tasks API

The API enables you to retrieve task data from the case management system with required filters for status, priority, assignment, channels, and date ranges.

| **METHOD**        | **POST**                                                                                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Endpoint**      | [`https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/getTasks`](https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/getTasks) |
| **Content Type**  | `application/json`                                                                                                                                         |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).               |
| **[API Scope](../automation/api-introduction.md#associating-api-scopes)**     | Case Management Configuration.                                                                                                                             |

## Path parameters

| **PARAMETER** | **DESCRIPTION**                                                                                                                                          | **TYPE**         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `host`        | Environment URL. For example, [https://platform.kore.ai/](https://platform.kore.ai/)                                                                     | string, required |
| `streamId`    | Bot identifier or Stream identifier. You can access it from the General Settings page of the bot. For example, `st-084d3c5e-376a-559f-9987-a012bb2bxxxx` | string, required |

## Header parameters

| **PARAMETER** | **DESCRIPTION**                                                                                 | **TYPE**         |
| ------------- | ----------------------------------------------------------------------------------------------- | ---------------- |
| `accountId`   | The account identifier associated with the API request. For example, `6639f7bd58c97ffac03bxxxx` | string, required |

**Request sample**

```
curl --location 'https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/getTasks' \
--header 'AccountId: {{accountId}}' \
--header 'client-app: unified' \
--header 'X-Timezone-Offset: -330' \
--header 'auth: {{jwt-code}}' \
--header 'Content-Type: application/json;charset=UTF-8' \
--data '{
    "skip": 0,
    "limit": 50,
    "searchText": "",
    "unresolved": false,
    "unassigned": true,
    "mytask": false,
    "selectedColumns": [],
    "priority": ["Critical"],
    "agents": [],
    "status": ["In-Progress"],
    "customFields": [],
    "ETAlist": [],
    "channel": ["rtm"],
    "queues": [],
    "startDate": "2025-05-26T18:30:00.000Z",
    "endDate": "2025-05-27T18:29:59.999Z",
    "sortBy": { "dueDate": "desc" }
}'
```

## Request body parameters

| **PARAMETER** | **DESCRIPTION**                                                       | **TYPE**          |
| ------------- | --------------------------------------------------------------------- | ----------------- |
| `searchText`  | Searching for the name of the tasks                                   | string, optional  |
| `unresolved`  | Retrieves the tasks that are still unresolved                         | boolean, optional |
| `unassigned`  | Retrieves the tasks that are still unassigned                         | boolean, optional |
| `mycase`      | Retrieves the tasks that are still assigned to me                     | boolean, optional |
| `priority`    | List of priorities to filter the tasks; for example, high, medium     | array, optional   |
| `status`      | List of task statuses to filter by; for example, new, open            | array, optional   |
| `channel`     | List of communication channels to filter by; for example, email, chat | array, optional   |
| `queues`      | List of queues to filter cases by; for instance, SupportQueue1        | array, optional   |
| `startDate`   | Start date of the task (ISO 8601 format)                              | string, optional  |
| `endDate`     | End date of the task (ISO 8601 format)                                | string, optional  |
| `sortBy`      | Field to sort by; for example, createdDate                            | string, optional  |
| `dueDate`     | Filter by exact dueDate (ISO 8601 format)                             | string, optional  |


**Response sample**

```
{
  "results": [
    {
      "_id": "ti-c7c61c9-1392-45d3-b163-3622d737xxxx",
      "caseId": "ci-884ca36-6b0c-40bc-ba5c-bc8a8c6cxxxx",
      "caseRefId": "CS000108",
      "name": "This is demo task",
      "priority": { "name": "Medium", "color": "#16A34A" },
      "status": { "name": "Open", "statusCategory": "open" },
      "createdAt": "2025-05-28T12:05:38.807Z",
      "updatedAt": "2025-05-28T12:05:38.807Z"
    }
  ],
  "page": 1,
  "limit": 10,
  "hasMore": false,
  "totalPages": 1,
  "totalResults": 1
}
```
