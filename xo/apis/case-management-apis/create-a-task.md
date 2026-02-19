--8<-- "includes/cm-api-back-link.md"

# Create a task API

This API allows you to create a new task within the case management system.

| **METHOD**        | **POST**                                                                                                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Endpoint**      | [`https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/createTask`](https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/createTask) |
| **Content Type**  | `application/json`                                                                                                                                             |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).                    |
| **[API Scope](../automation/api-introduction.md#associating-api-scopes)**     | Case Management Configuration.                                                                                                                                 |



## Path parameters

| **Parameter** | **Description**                                                                                                                                          | **Type**         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `host`        | Environment URL. For example, [https://platform.kore.ai/](https://platform.kore.ai/)                                                                     | string, required |
| `streamId`    | Bot identifier or Stream identifier. You can access it from the General Settings page of the bot. For example, `st-084d3c5e-376a-559f-9987-a012bb2bxxxx` | string, required |


## Header parameters

| **Parameter** | **Description**                                                                                 | **Type**             |
| ------------- | ----------------------------------------------------------------------------------------------- | -------------------- |
| `accountId`   | The account identifier associated with the API request. For example, `6639f7bd58c97ffac03bxxxx` | string, not required |


**Request sample**

```
curl --location 'https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/createTask' \
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
    "caseId": "ci-31d9184-d64d-42d9-8c75-5edba531xxxx",
    "caseRefId": "CS000131",
    "taskTmp": "ttm-16623a9-c63c-4bda-b1e4-14754939xxxx",
    "name": "This is demo task",
    "userInfo": {
        "_id": "u-fd371c0a-3168-5a02-83dd-f4ba5597xxxx",
        "name": "dummy",
        "emailId": "dummy@mailinator.com"
    },
    "source": "rtm"
}'
```

## Request body parameters

| **Parameter** | **Description**                                                                                          | **Type**            |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------------------- |
| `caseId`      | Unique case identifier                                                                                   | string, required    |
| `caseRefId`   | Case reference identifier                                                                                | string, required    |
| `taskTmp`     | Unique task template identifier                                                                          | string, required    |
| `userInfo`    | User information object                                                                                  | object, required    |
| `_id`         | Unique user identifier. If you do not include `_id`, you must provide either `emailId` or `phoneNumber`. | string, optional    |
| `name`        | User's name                                                                                              | string, required    |
| `emailId`     | User's email address (mandatory if `_id` is not entered)                                                 | string, optional    |
| `phoneNumber` | User's phone number (mandatory if `_id` is not entered)                                                  | string, optional    |
| `source`      | Source of the case (for example, `rtm`)                                                                  | string, required    |
| `desc`        | Task description                                                                                         | string, required    |
| `name`        | Task name                                                                                                | string, conditional |


**Response sample**

```
{
    "caseId": "ci-31d9184-d64d-42d9-8c75-5edba531xxxx",
    "caseRefId": "CS000131",
    "taskTmp": "jbhk",
    "name": "This is demo task",
    "lname": "this is demo task",
    "tags": [],
    "userInfo": {
        "_id": "u-fd371c0a-3168-5a02-83dd-f4ba5597xxxx",
        "name": "dummy"
    },
    "sessIds": [],
    "accountId": "{{accountId}}",
    "iId": "st-084d3c5e-376a-559f-9987-a012bb2bxxxx",
    "orgId": "o-85e72576-06a6-5c0b-8844-25fa0cd6xxxx",
    "convIds": [],
    "status": {
        "_id": "sts-a3ed479-e945-4b59-a0c0-4369472axxxx",
        "name": "Open",
        "statusCategory": "open"
    },
    "source": "rtm",
    "conversationType": "TASK",
    "fields": [
        {
            "_id": "fd-0c85264-e40d-48b9-ab6a-896e09adxxxx",
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
            "dataType": "datetime"
        },
        {
            "_id": "fd-9d30e02-0147-4077-9daa-c480c8d1xxxx",
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
            "dataType": "textarea"
        },
        {
            "_id": "fd-7a49002-b492-413d-9c9d-bde3da27xxxx",
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
            "dataType": "input"
        }
    ],
    "participants": [],
    "priority": {
        "_id": "pr-cad98ea-d89c-489b-acc7-e86341e5xxxx",
        "name": "Medium",
        "color": "#16A34A",
        "score": 10
    },
    "refId": "TS000102",
    "assigneeType": "unassigned",
    "isCustTsk": false,
    "isActive": true,
    "attachments": [],
    "feedback": [],
    "createdBy": {
        "name": "John Doe",
        "_id": "u-9471a3c6-d950-5720-a812-fbc1ac9fxxxx",
        "profImage": "no-avatar"
    },
    "updatedBy": {
        "name": "John Doe",
        "_id": "u-9471a3c6-d950-5720-a812-fbc1ac9fxxxx",
        "profImage": "no-avatar"
    },
    "timestampValue": 1749032280681,
    "activityIds": [],
    "commentIds": [],
    "resolutionCmts": [],
    "isBreached": false,
    "queues": [],
    "channel": [],
    "createdAt": "2025-06-04T10:18:00.725Z",
    "updatedAt": "2025-06-04T10:18:00.725Z",
    "_id": "ti-73acd32-0123-4114-9891-00a950aaxxxx",
    "currAssignee": {},
    "ETA": ""
}
```
