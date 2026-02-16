--8<-- "includes/cm-api-back-link.md"

# Update a Task API

This API lets you to update an existing task in the case management system.

| **METHOD**        | **POST**                                                                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Endpoint**      | [`https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/updateTask/{{taskId}}`](https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/updateTask/{{taskId}}) |
| **Content Type**  | `application/json`                                                                                                                                                                   |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).                                          |
| **[API Scope](../automation/api-introduction.md#associating-api-scopes)**     | Case Management Configuration.                                                                                                                                                       |

## Path parameters

| **Parameter** | **Description**                                                                                          | **Type**           |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------------------ |
| `host`        | Environment URL. For example, [https://platform.kore.ai/](https://platform.kore.ai/)                     | `string`, required |
| `streamId`    | Bot or Stream identifier (from bot General Settings). Example: `st-084d3c5e-376a-559f-xxxx-a012bbxxxxxx` | `string`, required |
| `taskId`      | Unique task identifier. Example: `ti-73acd32-0123-xxxx-9891-00a950xxxxxx`                                | `string`, required |

## Header parameters

| **Parameter** | **Description**                                                                         | **Type**           |
| ------------- | --------------------------------------------------------------------------------------- | ------------------ |
| `accountId`   | Account identifier associated with the API request. Example: `6639f7bd5xxxxffac03bxxxx` | `string`, required |


**Request sample**


```
curl --location 'https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/updateTask/{{taskId}}' \
--header 'sec-ch-ua: "Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"' \
--header 'AccountId: {{accountId}}' \
--header 'client-app: unified' \
--header 'X-Timezone-Offset: -330' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'auth: {{jwt-code}}' \
--header 'state: configured' \
--header 'Iid: st-084d3c5e-376a-559f-9987-a012bb2bxxxx' \
--header 'Content-Type: application/json;charset=UTF-8' \
--header 'Accept: application/json, text/plain, */*' \
--header 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' \
--header 'bot-language: en' \
--header 'app-language: en' \
--header 'Referer: http://localhost/builder/app/welcomeflows' \
--header 'sec-ch-ua-platform: "Linux"' \
--data '{
    "name": "Task Testing"
}'
```

## Request body parameters

| **Parameter**        | **Description**                               | **Type**            |
| -------------------- | --------------------------------------------- | ------------------- |
| `caseTmp`            | Unique task template identifier               | `string`, optional  |
| `name`               | Case name                                     | `string`, optional  |
| `lname`              | Lowercase version or slug of the name         | `string`, optional  |
| `desc`               | Task description                              | `string`, optional  |
| `tags`               | Array of tag strings                          | `array`, optional   |
| `userInfo`           | User info who created or owns the task        | `object`, optional  |
| `sessIds`            | Related session IDs                           | `array`, optional   |
| `accountId`          | Account identifier                            | `string`, optional  |
| `lid`                | Stream, instance, or session ID               | `string`, optional  |
| `orgId`              | Organization identifier                       | `string`, optional  |
| `convIds`            | Related conversation IDs                      | `array`, optional   |
| `status`             | Current task status                           | `object`, optional  |
| `language`           | Task language code (e.g., `english`)          | `string`, optional  |
| `source`             | Source of the task (e.g., `rtm`)              | `string`, optional  |
| `conversationType`   | Type of conversation                          | `string`, optional  |
| `fields`             | Custom or system field definitions and values | `array`, optional   |
| `participants`       | List of participants                          | `array`, optional   |
| `queues`             | Assigned queues                               | `array`, optional   |
| `priority`           | Priority metadata                             | `object`, optional  |
| `refId`              | Task reference ID                             | `string`, optional  |
| `assigneeType`       | Assignment type                               | `string`, optional  |
| `isActive`           | Whether the task is active                    | `boolean`, optional |
| `taskIds`            | Array of associated task IDs                  | `array`, optional   |
| `attachments`        | Array of attachments                          | `array`, optional   |
| `feedback`           | Feedback data                                 | `array`, optional   |
| `createdBy`          | Creator information                           | `object`, optional  |
| `updatedBy`          | Last updated by info                          | `object`, optional  |
| `timestampValue`     | Timestamp (ms) for tracking updates           | `number`, optional  |
| `activityIds`        | Related activity IDs                          | `array`, optional   |
| `commentIds`         | Related comment IDs                           | `array`, optional   |
| `resolutionCmts`     | Resolution comments                           | `array`, optional   |
| `dueDate`            | Due date timestamp (ms)                       | `number`, optional  |
| `isBreached`         | SLA breach flag                               | `boolean`, optional |
| `supportCustomTasks` | Support for custom tasks                      | `boolean`, optional |
| `channel`            | Channels used (e.g., chat, email)             | `array`, optional   |
| `createdAt`          | Task creation timestamp                       | `string`, optional  |
| `updatedAt`          | Last updated timestamp                        | `string`, optional  |
| `currAssignee`       | Current assigned agent                        | `object`, optional  |
| `ETA`                | Estimated resolution time (ISO)               | `string`, optional  |

**Response sample**

```
{
    "_id": "ti-73acd32-0123-4114-9891-00a950aaxxxx",
    "caseId": "ci-31d9184-d64d-42d9-8c75-5edba531xxxx",
    "caseRefId": "CS00xxxx",
    "taskTmp": "jbhk",
    "name": "Task Testing",
    "lname": "task testing",
    "tags": [],
    "userInfo": {
        "_id": "u-fd371c0a-3168-5a02-83dd-f4ba5597xxxx",
        "name": "dummy"
    },
    ...
    "ETA": ""
}
```
