--8<-- "includes/cm-api-back-link.md"

# Create a case API

This API lets you to create a new case in the case management system.

| **METHOD**        | **POST**                                                                                                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Endpoint**      | [`https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/createCase`](https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/createCase) |
| **Content Type**  | `application/json`                                                                                                                                             |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).                 |
| **[API Scope](../automation/api-introduction.md#associating-api-scopes)**     | Case Management Configuration.                                                                               

## Path parameters

| **PARAMETER** | **DESCRIPTION**                                                                                                                                          | **TYPE**         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| **host**      | Environment URL. For example, [https://platform.kore.ai/](https://platform.kore.ai/)                                                                     | string, required |
| **streamId**  | Bot identifier or Stream identifier. You can access it from the General Settings page of the bot. For example, `st-084d3c5e-376a-559f-9987-a012bb2bxxxx` | string, required |

## Header parameters

| **PARAMETER** | **DESCRIPTION**                                                                                 | **TYPE**             |
| ------------- | ----------------------------------------------------------------------------------------------- | -------------------- |
| **accountId** | The account identifier associated with the API request. For example, `6639f7bd58c97ffac03bxxxx` | string, not required |


**Request sample**

```
curl --location 'https://{{host}}/caseManagement/api/public/analytics/{{streamId}}/createCase' \
--header 'AccountId: {{accountId}}' \
--header 'auth: {{jwt-code}}' \
--header 'Iid: st-adad1d73-99af-52b3-a85d-0791763bxxxx' \
--header 'Content-Type: application/json;charset=UTF-8' \
--header 'bot-language: en' \
--header 'app-language: en' \
--data-raw '{
    "caseTmp": "ctm-d4e6152-4255-4c5c-ba6c-91dac5cdxxxx",
    "name": "This is demo case",
    "desc": "Demo case",
    "userInfo": {
        "_id": "u-fd371c0a-3168-5a02-83dd-f4ba5597xxxx",
        "name": "dummy"
    },
    "emailId": "dummy.898@gmail.com",
    "phoneNumber": "902398xxxx",
    "dueDate": "2026-09-04T14:15:00.000Z",
    "source": "rtm"
}'
```

## Request body parameters

| **PARAMETER**   | **DESCRIPTION**                                                                                     | **TYPE**         |
| --------------- | --------------------------------------------------------------------------------------------------- | ---------------- |
| **caseTmp**     | Unique case template identifier                                                                     | string, required |
| **name**        | Name or title of the case                                                                           | string, required |
| **desc**        | Case description                                                                                    | string, required |
| **userInfo**    | User information object containing user details                                                     | object, required |
| **id**          | Unique user identifier. If `id` isn’t provided, you must include either `emailId` or `phoneNumber`. | string, optional |
| **name**        | User’s name                                                                                         | string, optional |
| **emailId**     | User’s email address (mandatory if `id` isn’t present)                                              | string, required |
| **phoneNumber** | User’s phone number (mandatory if `id` isn’t present)                                               | string, required |
| **source**      | Source of the case (for example, `rtm`)                                                             | string, required |
| **desc**        | Task description                                                                                    | string, required |
| **dueDate**     | Due date of the case                                                                                | string, required |

**Response sample**

```
{
    "_id": "ci-6b83ac7-8245-4e5e-ac8c-9695b531xxxx",
    "caseTmp": "Sales",
    "name": "This is demo case",
    "lname": "this is demo case",
    "tags": [],
    "userInfo": {
        "_id": "u-fd371c0a-3168-5a02-83dd-f4ba5597xxxx",
        "name": "dummy",
        "emailId": "dummy@mailinator.com"
    },
    "sessIds": [],
    "accountId": "{{accountId}}",
    "iId": "st-d140086f-4d0a-59fa-9d28-b5fc23e9xxxx",
    "orgId": "o-734f0871-3217-515b-bd5f-36abef3cxxxx",
    "convIds": [],
    "status": {
        "_id": "sts-599163e-b869-4532-bbb3-c76a3d08xxxx",
        "name": "Open",
        "statusCategory": "open"
    },
    "source": "rtm",
    "language": "en",
    "conversationType": "CASE",
    "fields": [
        {
            "_id": "fd-3380ddb-a87d-4b25-8db6-5002e5c8xxxx",
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
            "dataType": "textarea",
            "selectedValue": ""
        },
        {
            "_id": "fd-7ab71aa-5da2-4cd1-a7ec-0e2468b8xxxx",
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
            "_id": "fd-a165979-63b6-498b-85b8-c48098edxxxx",
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
    "participants": [
        {
            "agentId": "u-320fa237-51be-5c46-a046-14e97c77xxxx",
            "aId": "a-005c549-c9a4-441e-adc2-781a3a01xxxx",
            "name": "dummy",
            "pStatus": "ACTIVE",
            "assignedAt": "2025-06-03T10:51:59.792Z"
        }
    ],
    "priority": {
        "_id": "pr-6189896-de68-4e02-8d56-813a68bdxxxx",
        "name": "Medium",
        "color": "#16A34A",
        "score": 10
    },
    "refId": "CS00xxxx",
    "assigneeType": "agent",
    "currAssignee": {
        "aId": "a-005c549-c9a4-441e-adc2-781a3a01xxxx",
        "name": "dummy",
        "agentId": "u-320fa237-51be-5c46-a046-14e97c77xxxx"
    },
    "tasks": [],
    "isActive": true,
    "taskIds": [],
    "attachments": [],
    "feedback": [],
    "createdBy": {
        "name": "dummy",
        "_id": "u-320fa237-51be-5c46-a046-14e97c77xxxx",
        "profImage": "no-avatar"
    },
    "updatedBy": {
        "name": "dummy",
        "_id": "u-320fa237-51be-5c46-a046-14e97c77xxxx",
        "profImage": "no-avatar"
    },
    "timestampValue": 1748947919675,
    "activityIds": [],
    "commentIds": [],
    "resolutionCmts": [],
    "isBreached": false,
    "supportCustomTasks": true,
    "queues": [],
    "channel": [],
    "createdAt": "2025-06-03T10:51:59.779Z",
    "updatedAt": "2025-06-03T10:51:59.794Z",
    "ETA": "2025-09-04T14:15:00.000Z"
}
```
