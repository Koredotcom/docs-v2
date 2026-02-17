--8<-- "includes/cm-api-back-link.md"

# Update a Case API

This API allows you to update an existing case in the case management system.

| **METHOD**        | **POST**                                                                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Endpoint**      | [`https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/updateCase/{{caseId}}`](https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/updateCase/{{caseId}}) |
| **Content Type**  | `application/json`                                                                                                                                                                   |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).                                          |
| **[API Scope](../automation/api-introduction.md#associating-api-scopes)**     | Case Management Configuration.                                                                                                                                                       |

## Path parameters

| **PARAMETER** | **DESCRIPTION**                                                                                                                                          | **TYPE**         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `host`        | Environment URL. For example, [https://platform.kore.ai/](https://platform.kore.ai/)                                                                     | string, required |
| `streamId`    | Bot identifier or Stream identifier. You can access it from the General Settings page of the bot. For example, `st-084d3c5e-376a-559f-9987-a012bb2bxxxx` | string, required |
| `caseId`      | Unique identifier of the case to update. For example, `ci-b4eaa6e-b3d9-4bb3-ae54-bb043b4axxxx`                                                           | string, required |


## Header parameters

| **PARAMETER** | **DESCRIPTION**                                                                                 | **TYPE**         |
| ------------- | ----------------------------------------------------------------------------------------------- | ---------------- |
| `accountId`   | The account identifier associated with the API request. For example, `6639f7bd58c97ffac03bxxxx` | string, required |


**Request sample**

```
curl --location 'https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/updateCase/{{caseId}}' \
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
--data-raw '{
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
  "accountId": "{{accountId}}",
  "iId": "st-5393141c-723b-579d-8265-27dd9b7fxxxx",
  "orgId": "o-a55026c9-2abd-5503-b212-5fba600axxxx",
  "status": {
    "_id": "sts-47a7230-2a07-4b84-879b-e792542cxxxx",
    "name": "Open",
    "lname": "open",
    "statusCategory": "open"
  },
  "priority": {
    "_id": "pr-9d1a24a-1385-45e9-818b-295eab5bxxxx",
    "name": "Medium",
    "lname": "medium",
    "desc": "Moderate urgency"
  },
  "refId": "CS000100",
  "isActive": true,
  "dueDate": 1748491380000
}'
```

## Request body parameters

| **PARAMETER**        | **DESCRIPTION**                                  | **TYPE**          |
| -------------------- | ------------------------------------------------ | ----------------- |
| `caseTmp`            | Unique case template identifier                  | string, optional  |
| `name`               | Case name                                        | string, optional  |
| `lname`              | Lowercase version or slug of the name            | string, optional  |
| `desc`               | Case description                                 | string, optional  |
| `tags`               | Array of tag strings                             | array, optional   |
| `userInfo`           | Info about the user who created or owns the case | object, optional  |
| `sessIds`            | Related session IDs                              | array, optional   |
| `accountId`          | Account identifier                               | string, optional  |
| `lid`                | Stream, instance, or session ID                  | string, optional  |
| `orgId`              | Organization identifier                          | string, optional  |
| `convIds`            | Related conversation IDs                         | array, optional   |
| `status`             | Current case status                              | object, optional  |
| `language`           | Case language code (for example, english)        | string, optional  |
| `source`             | Source of the case (for example, rtm)            | string, optional  |
| `conversationType`   | Type of conversation (expected case)             | string, optional  |
| `fields`             | Custom or system field definitions and values    | array, optional   |
| `participants`       | List of participant objects                      | array, optional   |
| `queues`             | List of queues assigned to the case              | array, optional   |
| `priority`           | Priority metadata (level, color, and so on)      | object, optional  |
| `refId`              | Case reference ID                                | string, optional  |
| `assigneeType`       | Assignment type (unassigned, queues, and so on)  | string, optional  |
| `isActive`           | Whether the case is active                       | boolean, optional |
| `taskIds`            | Array of associated task IDs                     | array, optional   |
| `attachments`        | Array of attachments                             | array, optional   |
| `feedback`           | Feedback data                                    | array, optional   |
| `createdBy`          | Creator information                              | object, optional  |
| `updatedBy`          | Last updated by info                             | object, optional  |
| `timestampValue`     | Timestamp (in ms) for tracking updates           | number, optional  |
| `activityIds`        | Related activity IDs                             | array, optional   |
| `commentIds`         | Related comment IDs                              | array, optional   |
| `resolutionCmts`     | Resolution comments                              | array, optional   |
| `dueDate`            | Case due date timestamp (in ms)                  | number, optional  |
| `isBreached`         | SLA breach flag                                  | boolean, optional |
| `supportCustomTasks` | Indicates support for custom tasks               | boolean, optional |
| `channel`            | Channels used (for example, chat, email)         | array, optional   |
| `createdAt`          | Case creation timestamp                          | string, optional  |
| `updatedAt`          | Last updated timestamp                           | string, optional  |
| `currAssignee`       | Current assigned agent information               | object, optional  |
| `ETA`                | Estimated time of resolution (ISO date string)   | string, optional  |


**Response sample**

```
{
  "_id": "ci-b4eaa6e-b3d9-4bb3-ae54-bb043b4axxxx",
  "caseTmp": "CaseTemplate1",
  "name": "This is demo case",
  "lname": "this is demo case",
  "userInfo": {
    "_id": "u-fd371c0a-3168-5a02-83dd-f4ba5597xxxx",
    "name": "john",
    "emailId": "uxoloacl@mailinator.com"
  },
  "accountId": "{{accountId}}",
  "status": {
    "_id": "sts-a3ed479-e945-4b59-a0c0-4369472axxxx",
    "name": "Open",
    "statusCategory": "open"
  },
  "priority": {
    "_id": "pr-cad98ea-d89c-489b-acc7-e86341e5xxxx",
    "name": "Medium",
    "desc": "Moderate urgency"
  },
  "refId": "CS00xxxx",
  "assigneeType": "queues",
  "isActive": true,
  "createdAt": "2025-06-04T08:17:35.419Z",
  "updatedAt": "2025-06-04T09:40:09.323Z",
  "ETA": ""
}
```
