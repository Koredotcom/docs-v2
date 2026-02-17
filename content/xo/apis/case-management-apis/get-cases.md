--8<-- "includes/cm-api-back-link.md"

# Get Cases API

The API enables you to retrieve case data from the case management system with filtering, sorting, and pagination options.

| **METHOD**        | **POST**                                                                                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Endpoint**      | [`https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/getCases`](https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/getCases) |
| **Content Type**  | `application/json`                                                                                                                                         |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).              |
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


**Sample request**

```
curl --location --request POST 'https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/getCases' \
--header 'sec-ch-ua: "Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"' \
--header 'AccountId: {{accountId}}' \
--header 'client-app: unified' \
--header 'X-Timezone-Offset: -330' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'auth: {{jwt-code}}' \
--header 'state: configured' \
--header 'Iid: st-d140086f-4d0a-59fa-9d28-b5fc23e9xxxx' \
--header 'Content-Type: application/json;charset=UTF-8' \
--header 'Accept: application/json, text/plain, */*' \
--header 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' \
--header 'bot-language: en' \
--header 'app-language: en' \
--header 'Referer: http://localhost/builder/app/welcomeflows' \
--header 'sec-ch-ua-platform: "Linux"' \
--data '{
    "name": "Testing"
}'
```

## Request body parameters

| **PARAMETER** | **DESCRIPTION**                                                        | **TYPE**          |
| ------------- | ---------------------------------------------------------------------- | ----------------- |
| `searchText`  | Search text to filter cases by their name or title.                    | string, optional  |
| `unresolved`  | Retrieves the cases that are still unresolved.                         | boolean, optional |
| `unassigned`  | Retrieves the cases that are still unassigned.                         | boolean, optional |
| `mycase`      | Indicates whether the current case is assigned to the current user.    | boolean, optional |
| `priority`    | List of priorities to filter the cases; for example, high, medium.     | array, optional   |
| `status`      | List of case statuses to filter by; for example, new, open.            | array, optional   |
| `channel`     | List of communication channels to filter by; for example, email, chat. | array, optional   |
| `queues`      | List of queues to filter cases by; for instance, SupportQueue1.        | array, optional   |
| `startDate`   | Start date of the case (ISO 8601 format).                              | string, optional  |
| `endDate`     | End date of the case (ISO 8601 format).                                | string, optional  |
| `sortBy`      | Field to sort by; for example, createdDate.                            | string, optional  |
| `dueDate`     | Filter by exact dueDate (ISO 8601 format).                             | string, optional  |


**Response sample**

```
{
  "results": [
    {
      "_id": "ci-1a634e1-3d97-427e-8b23-9b7b0a40xxxx",
      "caseTmp": "one",
      "name": "case one",
      "lname": "case one",
      "desc": "this is case one",
      "tags": [],
      "userInfo": {
        "_id": "u-d0db86ae-8a26-51dd-a6d6-5d531c39xxxx",
        "name": "",
        "emailId": "goutham.898@gmail.com"
      },
      "sessIds": [],
      "accountId": "{{accountId}}",
      "iId": "st-5393141c-723b-579d-8265-27dd9b7fxxxx",
      "orgId": "o-a55026c9-2abd-5503-b212-5fba600axxxx",
      "convIds": [],
      "status": {
        "_id": "sts-47a7230-2a07-4b84-879b-e792542cxxxx",
        "name": "Open",
        "lname": "open",
        "statusCategory": "open",
        "type": "system",
        "desc": "When a new case/task is created",
        "isEnabled": true,
        "isActive": true
      },
      "source": "emailInst-873db2e1-0b9a-58b0-87d6-7b26c3c8xxxx",
      "language": "en",
      "conversationType": "CASE",
      "fields": [
        {
          "_id": "fd-a97ae13-ac3e-4496-b251-db594d8bxxxx",
          "show": true,
          "displayName": "Title",
          "lname": "title",
          "desc": "Title of the field",
          "isEnabled": true,
          "isActive": true,
          "metaData": {
            "type": "input",
            "displayName": "Title",
            "name": "title",
            "description": "Title of the field",
            "placeholder": "Enter title",
            "readOnly": false,
            "tooltipText": "Title of the field"
          },
          "type": "system",
          "required": true,
          "selectedValue": "case one"
        },
        {
          "_id": "fd-253e4de-ec52-4ec5-bcce-bc8157e9xxxx",
          "show": true,
          "displayName": "Description",
          "lname": "description",
          "desc": "Transcription based on the conversation summary",
          "isEnabled": true,
          "isActive": true,
          "metaData": {
            "type": "textarea",
            "displayName": "Description",
            "name": "description",
            "description": "Transcription based on the conversation summary",
            "placeholder": "Enter description",
            "readOnly": false,
            "tooltipText": "Transcription based on the conversation summary"
          },
          "type": "system",
          "required": true,
          "selectedValue": "this is case one"
        },
        {
          "_id": "fd-42bc982-d974-4d4a-851c-be952280xxxx",
          "show": true,
          "displayName": "Due Date",
          "lname": "due date",
          "desc": "Date/time to complete a case",
          "isEnabled": true,
          "isActive": true,
          "metaData": {
            "type": "datetime",
            "displayName": "Due Date",
            "name": "dueDate",
            "description": "Date/time to complete a case",
            "placeholder": "Enter date",
            "readOnly": false,
            "tooltipText": "Date/time to complete a case"
          },
          "type": "system",
          "required": true,
          "selectedValue": "2025-05-29T04:03:00.000Z"
        }
      ],
      "participants": [],
      "queues": [],
      "priority": {
        "_id": "pr-9d1a24a-1385-45e9-818b-295eab5bxxxx",
        "name": "Medium",
        "lname": "medium",
        "type": "system",
        "desc": "Moderate urgency",
        "color": "#16A34A",
        "isEnabled": true,
        "isActive": true,
        "score": 10
      },
      "refId": "CS000100",
      "assigneeType": "unassigned",
      "isActive": true,
      "taskIds": [
        "ti-909aa90-0416-4407-aa5b-d60dd99axxxx"
      ],
      "attachments": [],
      "feedback": [],
      "createdBy": {
        "name": "pachu 23",
        "_id": "u-429cc190-ccc9-57af-9421-a1ca84a2xxxx",
        "profImage": "no-avatar"
      },
      "updatedBy": {
        "name": "pachu 23",
        "_id": "u-429cc190-ccc9-57af-9421-a1ca84a2xxxx",
        "profImage": "no-avatar"
      },
      "timestampValue": 1748318622557,
      "activityIds": [],
      "commentIds": [],
      "resolutionCmts": [],
      "dueDate": 1748491380000,
      "isBreached": false,
      "supportCustomTasks": true,
      "channel": [],
      "createdAt": "2025-05-27T04:03:42.617Z",
      "updatedAt": "2025-05-27T04:03:42.666Z",
      "currAssignee": {},
      "ETA": "2025-05-29T04:03:00.000Z"
    }
  ],
  "page": 1,
  "limit": 50,
  "hasMore": false,
  "totalPages": 1,
  "totalResults": 1
}
```
