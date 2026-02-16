--8<-- "includes/ccai-api-back-link.md"

# Get All SMS/Voice Campaigns API

Use this API to retrieve all SMS campaign configurations associated with a specific account.

| **Method** | **POST** |
| :---- | :---- |
| **Endpoint** | https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/getAllCampaignDetails?accountId={{accountId}} |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL. For example: `https://platform.kore.ai` | string, required |
| `IId` | the Application ID. | string, required |

## Sample Request for Voice Campaign 

Below is a sample request to retrieve all voice campaigns:

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/getAllCampaignDetails?accountId={{accountId}}' \
--header 'auth: <token>' \
--header 'accountid: 67777ce93e25326494exxxxx' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--header 'Content-Type: application/json' \
--data '{
  "limit": 50,
  "skip": 0,
  "page": 1,
  "startDate": "2025-12-01T00:00:00.000Z",
  "endDate" : "2025-12-04T00:00:00.000Z",
  "type" :"voice",
  "sortBy": {
    "createdAt": "desc"
  },
  "filters": {
    "status": ["Ready", "Stopped"],
    "priority": [5] ,
    "dialingMode": ["Progressive", "Preview"]
  }
}
'
```
## Sample Request for SMS Campaign 

Below is a sample request to retrieve all SMS campaigns:

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/getAllCampaignDetails?accountId={{accountId}}' \
--header 'auth: <token>' \
--header 'accountid: 67777ce93e25326494exxxxx' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--header 'Content-Type: application/json' \
--data '{
  "limit": 50,
  "skip": 0,
  "page": 1,
  "startDate": "2025-12-01T00:00:00.000Z",
  "endDate" : "2025-12-08T00:00:00.000Z",
  "type" :"sms",
  "sortBy": {
    "createdAt": "desc"
  },
  "filters": {
    "status": ["Ready", "Stopped"],
    "priority": [5] 
  }
}
'
```

## Headers

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `iid` | The Application Id. | required |
| `accountId` | The Account Id. | required |

## Request Body Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `skip` | Pagination offset. Number of records to skip. Can be a number or an empty string. | number, optional |
| `page` | Page number for paginated results. Can be a number or an empty string. | number, optional |
| `limit` | Number of records to return per page. Can be a number or an empty string. | number, optional |
| `type` | Type of campaign. Allowed values: "voice" or "sms". | string, required |
| `startDate` | Filter start timestamp in ISO 8601 format (YYYY-MM-DDTHHss.sssZ). | string (ISO format), optional |
| `endDate` | Filter end timestamp in ISO 8601 format (YYYY-MM-DDTHHss.sssZ). | string (ISO format), optional |
| `sortBy.name` | Sort by campaign name. Allowed values: "asc", "desc". Must be included if any sort field is used. | string, optional |
| `sortBy.createdAt` | Sort by campaign creation date. Allowed values: "asc", "desc". | string, optional |
| `sortBy.updatedAt` | Sort by campaign update date. Allowed values: "asc", "desc". | string, optional |
| `filters.status` | Filter by campaign status. Allowed values: ['Active', 'Completed', 'Ready', 'Paused', 'Preparing', 'Stopped', 'Scheduled', 'Rescheduled']. | array[string], optional |
| `filters.priority` | Filter by campaign priority. Allowed values: [1, 2, 3, 4, 5]. | array[number], optional |
| `filters.dialingMode` | Filter by dialing mode. Allowed values: `[`Progressive’`, ‘`Preview’]`. This parameter applies only to voice campaigns. | array[number], optional |

## Sample Response for Voice Campaign

The response provides all voice campaigns matching the request criteria.

```
{
    "status": "success",
    "message": "Campaign  retrieved successfully",
    "data": {
        "results": [
            {
                "_id": "cd-c1b940c-7012-4e7d-98d9-4707177xxxxx",
                "name": "Billing Reminder Voice Campaign123",
                "description": "Progressive dialing campaign to remind customers about upcoming bill payments. Connects to an agent if available, else plays a recorded message",
                "dncLists": {
                    "id": "cl-68b802a-2b99-4245-8eea-6d322a8xxxxx",
                    "name": "DNC CL Dec 4"
                },
                "priority": "5",
                "dialingMode": "Preview",
                "status": "Ready",
                "isFiltersEnabled": false,
                "createdAt": "2025-12-08T09:17:21.090Z",
                "updatedAt": "2025-12-08T09:17:37.927Z",
                "campaignInstanceUpdatedAt": "2025-12-08T09:17:37.927Z",
                "schedule": {
                    "isSchedulingEnabled": false
                },
                "connection": "Default Queue",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ]
            },
            {
                "_id": "cd-8615101-71da-445c-ad7e-187e695xxxxx",
                "name": "Service Renewal Outreach Campaign61",
                "description": "Connects customers with live agents to assist with upcoming service renewals using progressive dialing. Ensures personalized support and improved engagement.",
                "dncLists": {
                    "id": "cl-68b802a-2b99-4245-8eea-6d322a8xxxxx",
                    "name": "DNC CL Dec 4"
                },
                "priority": "5",
                "dialingMode": "Progressive",
                "status": "Ready",
                "isFiltersEnabled": false,
                "createdAt": "2025-12-08T07:19:58.279Z",
                "updatedAt": "2025-12-08T07:20:43.340Z",
                "schedule": {
                    "isSchedulingEnabled": false,
                    "isRecurrenceEnabled": false
                },
                "campaignInstanceUpdatedAt": "2025-12-08T07:20:43.340Z",
                "connection": "Default Queue",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ]
            },
            {
                "_id": "cd-54d2481-53bd-4903-a2c6-45b527dxxxxx",
                "name": "Billing Reminder Voice Campaign12",
                "description": "Progressive dialing campaign to remind customers about upcoming bill payments. Connects to an agent if available, else plays a recorded message",
                "dncLists": {
                    "id": "cl-68b802a-2b99-4245-8eea-6d322a8xxxxx",
                    "name": "DNC CL Dec 4"
                },
                "priority": "5",
                "dialingMode": "Preview",
                "status": "Ready",
                "isFiltersEnabled": false,
                "createdAt": "2025-12-08T05:11:18.054Z",
                "updatedAt": "2025-12-08T05:14:28.832Z",
                "schedule": {
                    "isSchedulingEnabled": false,
                    "isRecurrenceEnabled": false
                },
                "campaignInstanceUpdatedAt": "2025-12-08T05:14:28.832Z",
                "connection": "Default Queue",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ]
            },
            {
                "_id": "cd-b2c1690-0a1b-497c-9326-1bdd229xxxxx",
                "name": "Billing Reminder Voice Campaign1",
                "description": "Progressive dialing campaign to remind customers about upcoming bill payments. Connects to an agent if available, else plays a recorded message",
                "dncLists": {
                    "id": "cl-68b802a-2b99-4245-8eea-6d322a8xxxxx",
                    "name": "DNC CL Dec 4"
                },
                "priority": "5",
                "dialingMode": "Preview",
                "status": "Ready",
                "isFiltersEnabled": false,
                "createdAt": "2025-12-04T11:05:52.809Z",
                "updatedAt": "2025-12-04T11:05:52.911Z",
                "campaignInstanceUpdatedAt": "2025-12-04T11:05:52.911Z",
                "schedule": {
                    "isSchedulingEnabled": false
                },
                "connection": "Default Queue",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ]
            },
            {
                "_id": "cd-469cba4-2597-471d-b5ed-02732c2xxxxx",
                "name": "Service Renewal Outreach Campaign6",
                "description": "Connects customers with live agents to assist with upcoming service renewals using progressive dialing. Ensures personalized support and improved engagement.",
                "dncLists": {
                    "id": "cl-68b802a-2b99-4245-8eea-6d322a8xxxxx",
                    "name": "DNC CL Dec 4"
                },
                "priority": "5",
                "dialingMode": "Progressive",
                "status": "Ready",
                "isFiltersEnabled": false,
                "createdAt": "2025-12-04T09:51:08.181Z",
                "updatedAt": "2025-12-05T07:14:24.916Z",
                "schedule": {
                    "isSchedulingEnabled": false,
                    "isRecurrenceEnabled": false
                },
                "campaignInstanceUpdatedAt": "2025-12-05T07:14:24.916Z",
                "connection": "Default Queue",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ]
            }
        ],
        "skip": 0,
        "limit": 50,
        "hasMore": false,
        "totalPages": 1,
        "totalResults": 5
    }
}
```

## Response Body Parameters for Voice Campaign

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Status of the API response. Typically `success` or `error`. | string |
| `message` | Response message providing context about the operation. | string |
| `data` | Object containing the campaign results and pagination metadata. | object |
| `data.results` | List of campaign objects returned in the current page. | array of objects |
| `data.results[].id` | Unique ID of the campaign. | string |
| `data.results[].name` | Campaign name. | string |
| `data.results[].description` | Campaign description. | string |
| `data.results[].dncLists` | Contains the contact lists added under the Do Not Call (DNC) list | object |
| `data.results[].dncLists.id` | Unique identifier of the contact list in the DNC list. | string (UUID) |
| `data.results[].dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string |
| `data.results[].priority` | Campaign priority level. | string |
| `data.results[].dialingMode` | Dialing mode used for the voice campaign. This is shown only for voice campaigns. Example: `"Agentless"` | string |
| `data.results[].status` | Campaign status. Example: `Ready`, `Stopped`. | string |
| `data.results[].`isFiltersEnabled | Indicates whether campaign filters are enabled. | Boolean |
| `data.results[].createdAt` | ISO timestamp of campaign creation. (ISO 8601 datetime) | string |
| `data.results[].updatedAt` | ISO timestamp of last campaign update. (ISO 8601 datetime) | string |
| `data.results[].campaignInstanceUpdatedAt` | ISO timestamp of last campaign execution update. (ISO 8601 datetime) | string |
| `data.results[].schedule` | Schedule configuration. | object |
| `data.results[].schedule.isSchedulingEnabled` | Whether campaign scheduling is enabled. | boolean |
| `data.results[].schedule.isRecurrenceEnabled` | Whether recurring scheduling is enabled. | boolean |
| `data.results[].connection` | Name of the routing or queue connection linked to the campaign.Example:” `Default Queue”.` | string |
| `data.results[].contactLists` | Array of contact list names linked to the campaign. | array of strings |
| `data.skip` | Number of records skipped in the result set. | integer |
| `data.limit` | Number of records returned per page. | integer |
| `data.hasMore` | Flag indicating if more records are available. | boolean |
| `data.totalPages` | Total number of pages available. | integer |
| `data.totalResults` | Total number of records matching the query. | integer |

## Sample Response for SMS Campaign

The response provides all SMS campaigns matching the request criteria.

```
{
    "status": "success",
    "message": "Campaign  retrieved successfully",
    "data": {
        "results": [
            {
                "name": "Event Reminder SMS Campaign8",
                "description": "Sends a one-time message to remind users about an upcoming event. No template or personalization is used—just a plain, direct message.",
                "status": "Ready",
                "dncLists": {
                    "name": "DNC CL Dec 4"
                },
                "priority": "5",
                "message": {
                    "message": "TWVzc2FnZSBmb3IgeW91ciB0YXJnZXRlZCBjdXN0b21lcg%xxxxx"
                },
                "createdAt": "2025-12-05T09:31:52.281Z",
                "updatedAt": "2025-12-05T09:31:52.092Z",
                "schedule": {
                    "isSchedulingEnabled": false,
                    "isRecurrenceEnabled": false
                },
                "id": "cd-78d3f0a9-8f42-5d8c-af8d-d6a63eaxxxxx",
                "totalMessagesSent": 0,
                "campaignInstanceUpdatedAt": "2025-12-05T09:31:52.092Z",
                "campaignExecutionType": "NORMAL",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ],
                "format": "simple"
            },
            {
                "name": "Interactive Support SMS Campaign",
                "description": "Updated: This campaign sends an SMS with a link or instructions to interact with a Kore.ai bot. Customers can check order status, raise tickets, or get help—all via chat-enabled SMS.",
                "status": "Ready",
                "priority": "5",
                "experienceFlow": "cf-67447605-115e-5dd2-a676-e158cf3xxxxx",
                "createdAt": "2025-12-05T08:16:19.398Z",
                "updatedAt": "2025-12-05T08:57:17.709Z",
                "schedule": {
                    "isSchedulingEnabled": false,
                    "isRecurrenceEnabled": false
                },
                "id": "cd-e7110489-a30a-5d1e-80ee-f246cc8xxxxx",
                "totalMessagesSent": 0,
                "campaignInstanceUpdatedAt": "2025-12-05T08:57:17.709Z",
                "campaignExecutionType": "NORMAL",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ],
                "format": "advanced"
            },
            {
                "name": "Billing Alert Template Campaign-21",
                "description": "Uses a pre-approved message template to alert customers about pending bills. Includes dynamic fields for customer name, due date, and bill amount",
                "status": "Ready",
                "dncLists": {
                    "name": "testdnc"
                },
                "priority": "5",
                "message": {
                    "template_name": "Welcome",
                    "message": "R3JlZXRpbmdzLCA8Rmlyc3QgTmFtZT4hIFdlJ3JlIHRocmlsbGVkIHRvIGhhdmUgeW91IGpvaW4gdXMuIEFjY2VzcyBvdXIgdG9wIHRocmVlIGJlZ2lubmVyJ3MgdGlwcyBieSBjbGlja2luZyBvbiB0aGlzIGxpbms6IGh0dHBzOi8veW91cndlYnNpdGUuY29tL3RpcHMuIElmIHlvdSBoYXZlIGFueSBpbnF1aXJpZXMsIGRvbid0IGhlc2l0YXRlIHRvIHNlbmQgdXMgYSByZXBseSByaWdodCBoZXxxxxx",
                    "templateId": "cmt-88fcd16f-bdb2-4d4d-8a2c-0324c7fxxxxx"
                },
                "createdAt": "2025-12-05T08:08:45.668Z",
                "updatedAt": "2025-12-05T08:08:57.497Z",
                "schedule": {
                    "isSchedulingEnabled": false,
                    "isRecurrenceEnabled": false
                },
                "id": "cd-99f05887-5638-59ef-90d9-5dc9ebdxxxxx",
                "totalMessagesSent": 0,
                "campaignInstanceUpdatedAt": "2025-12-05T08:08:57.497Z",
                "campaignExecutionType": "NORMAL",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ],
                "format": "simple"
            },
            {
                "name": "Event Reminder SMS Campaign71",
                "description": "Sends a one-time message to remind users about an upcoming event. No template or personalization is used—just a plain, direct message.",
                "status": "Ready",
                "dncLists": {
                    "name": "DNC CL Dec 4"
                },
                "priority": "5",
                "message": {
                    "message": "TWVzc2FnZSBmb3IgeW91ciB0YXJnZXRlZCBjdXN0b21lcg%xxxxxx"
                },
                "createdAt": "2025-12-05T08:05:51.709Z",
                "updatedAt": "2025-12-05T08:05:51.520Z",
                "schedule": {
                    "isSchedulingEnabled": false,
                    "isRecurrenceEnabled": false
                },
                "id": "cd-964e76d3-2e70-51a5-bd47-b09b4d4xxxxx",
                "totalMessagesSent": 0,
                "campaignInstanceUpdatedAt": "2025-12-05T08:05:51.520Z",
                "campaignExecutionType": "NORMAL",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ],
                "format": "simple"
            },
            {
                "name": "Interactive Support SMS Campaign-updated11",
                "description": "This campaign sends an SMS with a link or instructions to interact with a Kore.ai bot. Customers can check order status, raise tickets, or get help—all via chat-enabled SMS.",
                "status": "Stopped",
                "dncLists": {
                    "name": "DNC CL Dec 4"
                },
                "priority": "5",
                "experienceFlow": "cf-67447605-115e-5dd2-a676-e158cf3xxxxx",
                "createdAt": "2025-12-04T09:45:52.303Z",
                "updatedAt": "2025-12-05T12:07:54.196Z",
                "schedule": {
                    "isSchedulingEnabled": false
                },
                "campaignInstanceId": "cid-c4ad0662-6c2e-58f7-9a2c-9da337dxxxxx",
                "id": "cd-e35c04a1-52f7-5a7e-86ba-c4a6101xxxxx",
                "totalMessagesSent": 0,
                "campaignInstanceUpdatedAt": "2025-12-05T12:07:54.203Z",
                "campaignExecutionType": "NORMAL",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ],
                "format": "advanced"
            },
            {
                "name": "Billing Alert Template Campaign-2",
                "description": "Uses a pre-approved message template to alert customers about pending bills. Includes dynamic fields for customer name, due date, and bill amount",
                "status": "Ready",
                "dncLists": {
                    "name": "testdnc"
                },
                "priority": "5",
                "message": {
                    "template_name": "Welcome",
                    "message": "R3JlZXRpbmdzLCA8Rmlyc3QgTmFtZT4hIFdlJ3JlIHRocmlsbGVkIHRvIGhhdmUgeW91IGpvaW4gdXMuIEFjY2VzcyBvdXIgdG9wIHRocmVlIGJlZ2lubmVyJ3MgdGlwcyBieSBjbGlja2luZyBvbiB0aGlzIGxpbms6IGh0dHBzOi8veW91cndlYnNpdGUuY29tL3RpcHMuIElmIHlvdSBoYXZlIGFueSBpbnF1aXJpZXMsIGRvbid0IGhlc2l0YXRlIHRvIHNlbmQgdXMgYSByZXBseSByaWdodCBoZXxxxxx",
                    "templateId": "cmt-88fcd16f-bdb2-4d4d-8a2c-0324c7fxxxxx"
                },
                "createdAt": "2025-12-04T09:45:43.932Z",
                "updatedAt": "2025-12-04T09:45:54.170Z",
                "schedule": {
                    "isSchedulingEnabled": false,
                    "isRecurrenceEnabled": false
                },
                "id": "cd-99d4074d-914e-5659-b4c1-09231b8xxxxx",
                "totalMessagesSent": 0,
                "campaignInstanceUpdatedAt": "2025-12-04T09:45:54.170Z",
                "campaignExecutionType": "NORMAL",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ],
                "format": "simple"
            },
            {
                "name": "Event Reminder SMS Campaign7",
                "description": "Sends a one-time message to remind users about an upcoming event. No template or personalization is used—just a plain, direct message.",
                "status": "Ready",
                "dncLists": {
                    "name": "DNC CL Dec 4"
                },
                "priority": "5",
                "message": {
                    "message": "TWVzc2FnZSBmb3IgeW91ciB0YXJnZXRlZCBjdXN0b21lcg%3xxxxx"
                },
                "createdAt": "2025-12-04T09:43:32.410Z",
                "updatedAt": "2025-12-04T09:43:32.068Z",
                "schedule": {
                    "isSchedulingEnabled": false,
                    "isRecurrenceEnabled": false
                },
                "id": "cd-0c172a6b-2a01-5247-8e96-4e28effxxxxx",
                "totalMessagesSent": 0,
                "campaignInstanceUpdatedAt": "2025-12-04T09:43:32.068Z",
                "campaignExecutionType": "NORMAL",
                "contactLists": [
                    "CL Only 2020 Dec 4"
                ],
                "format": "simple"
            }
        ],
        "skip": 0,
        "limit": 50,
        "hasMore": false,
        "totalPages": 1,
        "totalResults": 7
    }
}
```

## Response Body Parameters for SMS Campaign

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Status of the API response. Typically `success` or `error`. | string |
| `message` | Response message providing context about the operation. | string |
| `data` | Object containing the campaign results and pagination metadata. | object |
| `data.results` | List of campaign objects returned in the current page. | array of objects |
| `data.results[].name` | Campaign name. | string |
| `data.results[].description` | Campaign description. | string |
| `data.results[].status` | Campaign status. Example: `Ready`, `Stopped`. | string |
| `data.results[].dncLists` | Contains the contact lists added under the Do Not Call (DNC) list | object |
| `data.results[].dncLists.name` | The name of the contact list included in the Do Not Call (DNC) list. | string |
| `data.results[].experienceFlow` | ID of the associated experience flow. This is present only in advanced sms campaigns.  | string |
| `data.results[].priority` | Campaign priority level. | string |
| `data.results[].message` | Message body object (present only in simple SMS campaigns). | object |
| `data.results[].message.message` | Plain message string sent in the SMS. | string |
| `data.results[].createdAt` | ISO timestamp of campaign creation. (ISO 8601 datetime) | string |
| `data.results[].updatedAt` | ISO timestamp of last campaign update. (ISO 8601 datetime) | string |
| `data.results[].schedule` | Schedule configuration. | object |
| `data.results[].schedule.isSchedulingEnabled` | Whether campaign scheduling is enabled. | boolean |
| `data.results[].schedule.isRecurrenceEnabled` | Whether recurring scheduling is enabled. | boolean |
| `data.results[].id` | Unique ID of the campaign. | string |
| `data.results[].totalMessagesSent` | Number of messages successfully sent in the campaign. | integer |
| `data.results[].campaignInstanceUpdatedAt` | ISO timestamp of last campaign execution update. (ISO 8601 datetime) | string |
| `data.results[].campaignExecutionType` | Type of execution. Example: `NORMAL`. | string |
| `data.results[].contactLists` | Array of contact list names linked to the campaign. | array of strings |
| `data.results[].format` | Campaign format. Possible values: `simple`, `advanced`. | string |
| `data.skip` | Number of records skipped in the result set. | integer |
| `data.limit` | Number of records returned per page. | integer |
| `data.hasMore` | Flag indicating if more records are available. | boolean |
| `data.totalPages` | Total number of pages available. | integer |
| `data.totalResults` | Total number of records matching the query. | integer |