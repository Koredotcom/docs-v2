--8<-- "includes/ccai-api-back-link.md"

# Hours of Operation API

To get the hours of operation by providing the `orgId` and `queueId`.

| **Method** | GET |
|------------|-----|
| **Endpoint** | `https://{{host}}/agentassist/api/public/organizations/{{orgId}}/operationshours/{{queueId}}` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Configuration |

## Path Parameters

| **Parameter** | **Description** | **Type** |
|-------------|---------------|------------|
| host | Environment URL, for example, `https://platform.kore.ai` | string, required |
| orgId | The unique identifier of the organization. <br> In the application, navigate to any screen and check the API response to locate the orgId. <br> After accessing the application, open the browser’s developer tools using **F12**, **Ctrl+Shift+J** (Windows/Linux), or **Cmd+Opt+J** (macOS). Alternatively, right-click on the page and select **Inspect** or **Inspect Element**, or use the browser’s menu to access the developer tab.| string, required |
| queueId | The unique identifier of the queue. | string, required |

## Sample Request

```
curl --location --request GET 'https://{{host}}/agentassist/api/public/organizations/{{orgId}}/operationshours/{{queueId}}' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'accountId: <accountId>'
--header 'IId: <IId>'
```

## Headers

| **Header** | **Description** | **Required/Optional** |
|-----------|---------------|---------------------|
| accountId | The account ID associated with the API request. | required |
| auth | JWT token for authentication. | required |
| IId | The appId or streamId. | required |

## Sample Response

```
{
    "name": "Default Hours of Operation(Auto Created)1",
    "standardDays": {
        "frequency": "WEEKLY",
        "days": [
            {
                "start": "9:00 AM",
                "end": "11:00 PM",
                "day": "SU"
            },
            {
                "start": "12:00 AM",
                "end": "11:59:59.999 PM",
                "day": "MO"
            },
            {
                "start": "12:00 AM",
                "end": "11:59:59.999 PM",
                "day": "TU"
            },
            {
                "start": "12:00 AM",
                "end": "11:00 PM",
                "day": "WE"
            },
            {
                "start": "12:00 AM",
                "end": "11:00 PM",
                "day": "TH"
            },
            {
                "start": "12:00 AM",
                "end": "11:00 PM",
                "day": "FR"
            },
            {
                "start": "12:00 AM",
                "end": "11:59:59.999 PM",
                "day": "SA"
            }
        ]
    },
    "specialDays": {
        "frequency": "YEARLY",
        "days": []
    },
    "status": "ACTIVE",
    "lname": "default hours of operation(auto created)1",
    "isDefault": true,
    "orgId": "o-ee9eb154-b7e9-5387-a4a9-bc027a60xxxx",
    "createdBy": "u-d59dd137-fd97-52c2-8e86-fe6b42caxxxx",
    "timezone": "Asia/Kolkata",
    "createdByAId": "a-c4c00d7-ebec-4e61-bb41-671c4e42xxxx",
    "iId": "st-e808d22c-fcbc-54b6-b450-6983ec2axxxx",
    "id": "63c0e807509f957d6601xxxx",
    "isHoursOfOperationValid": true
}
```

## Response Body Parameters

| **Parameter** | **Description** | **Type** |
|-------------|---------------|------------|
| name | Display the name of the hours of operation configuration. | string |
| lname | Lowercase version of the name. | string |
| standardDays | Configuration for regular operating hours. | object |
| _frequency | Frequency of the standard schedule (for example, "WEEKLY"). | string |
| _days | An array of daily schedule configurations. | array |
| _start | Start time in 12-hour format (for example, "9:00 AM"). | string |
| _end | End time in 12-hour format (for example, "11:00 PM"). | string |
| _day | Two-letter day code (SU, MO, TU, WE, TH, FR, SA). | string |
| specialDays | Configuration for special operating hours. | object |
| _frequency | Frequency of special schedules (for example, "YEARLY"). | string |
| _days | An array of special schedule configurations. | array |
| status | Current status of the configuration (for example, "ACTIVE") | string |
| isDefault | Indicates if this is the default hours of operation configuration | boolean |
| orgId | The unique identifier of the organization (format: o-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx). | string |
| createdBy | User ID of the creator (format: u-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | string |
| createdByAId | Creator's agent ID (format: a-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | string |
| timezone | Timezone in IANA format (for example, "Asia/Kolkata") | string |
| iId | Internal identifier (format: st-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | string |
| id | Unique identifier for the configuration. | string |
| isHoursOfOperationValid | Indicates if the hours of operation configuration is valid | boolean |