--8<-- "includes/ccai-api-back-link.md"

# Agent Status Details

To show the self-reported status (available, busy, away, etc.) in the given time interval.

| **METHOD**   | **POST**                                                                                   |
|--------------|---------------------------------------------------------------------------------------------|
| **Endpoint** | `https://{{host}}/agentassist/api/public/analytics/account/{{accountId}}/agentstatusdetails` |
| **Content Type** | `application/json`                                                            |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).  |
| **API Scope** | SmartAssist Analytics                                                                       |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                          | **TYPE**            |
|---------------|----------------------------------------------------------|---------------------|
| host          | The Environment URL. For example, `https://platform.kore.ai` | string, required    |
| accountId     | The Account Id.                                          | string, required    |

## Query Parameters

| **PARAMETER** | **DESCRIPTION**                                         | **TYPE**         |
|---------------|---------------------------------------------------------|------------------|
| limit         | Default is 50, Maximum is 50 – applied to the agent counts | Number, Optional |
| offset        | Default is 0.                                           | number, optional |

## Sample Request

```
curl --location --request POST 'https://{{host}}/agentassist/api/public/analytics/account/63f07d26f04465685df4xxxx/agentstatusdetails?limit=8&offset=0' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'iId: st-e19dd469-90f5-5655-b0b2-858de901xxxx' \
--data-raw '{
"filter":{
"dateFilter":{
"date": "2023-04-13",
"timeZoneOffSet" : -330
  }
 }
}'
```

## Request Header Parameters

| **Header**      | **Description**                         | **Type**                         |
|------------------|-----------------------------------------|-------------------------------------------|
| `Content-Type`  | Request body format. For example, `application/json` |  required                      |
| `iId`           | Stream or application id. For example, `st-e19dd469-90f5-5655-b0b2-858de901xxxx`    | required |

## Request Body Parameters

| **PARAMETER**      | **DESCRIPTION**                                                                                                                                            | **TYPE**        |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| filter             | Object with agents and date filter as the fields.                                                                                                           | string, required|
| agents             | The Email Ids of the agents.                                                                                                                                | String, Optional|
| dateFilter         | Object with start date, end date, and time zone offset as the fields. It contains the following details to filter the result set.                           | number, required|
| startDate          | The start date from which the records need to be considered. The date format is: `yyyy-mm-dd`. For example, `2022-08-25`                                    | date, required  |
| endDate            | The end date from which the records need to be considered. The date format is: `yyyy-mm-dd`. For example, `2022-08-25`                                      | date, required  |
| timeZoneOffSet     | The time zone offset. For example, `-330, 630, -500`. If a user is in US/New York then the timeZoneOffset would be 300. Use the '-' sign for negative numbers and no sign for positive numbers. For timeZones east of GMT use the '-' sign, and for timeZones west of GMT don’t use any sign. | Number, Required|

## Sample Response

```
{
   "hasMore": false,
   "limit": 3,
   "offset": 2,
   "data": [
       {
           "userId": "u-388b2b2a-264d-511d-918e-f746e5e1xxxx",
           "firstName": "John",
           "lastName": "Doe",
           "email": "john.doe@example.com"
       },
       {
           "userId": "u-fee373f7-8685-5f9b-b359-1e890ccdxxxx",
           "firstName": "Jane",
           "lastName": "Doe",
           "email": "jane.doe@example.com"
       },
       {
           "userId": "u-fdc72ca0-a35d-57ff-bcb3-a33904a4xxxx",
           "firstName": "",
           "lastName": "",
           "email": "john.doe1@example.com",
            "customId": "123456"
           "status": [
               {
                   "primaryStatus": "AVAILABLE",
                   "secondaryStatus": "AVAILABLE",
                   "startTime": "2023-03-09T13:20:38",
                   "endTime": "2023-03-10T21:37:42",
                   "duration": "32:17:04"
               },
               {
                   "primaryStatus": "AVAILABLE",
                   "secondaryStatus": "AVAILABLE",
                   "startTime": "2023-03-10T21:37:42",
                   "endTime": "2023-03-10T21:38:52",
                   "duration": "00:01:10"
               },
               {
                   "primaryStatus": "BUSY",
                   "secondaryStatus": "BUSY",
                   "startTime": "2023-03-10T21:38:52",
                   "endTime": "2023-03-10T21:39:48",
                   "duration": "00:00:55"
               },
               {
                   "primaryStatus": "AVAILABLE",
                   "secondaryStatus": "AVAILABLE",
                   "startTime": "2023-03-10T21:40:17",
                   "endTime": "2023-03-10T21:40:28",
                   "duration": "00:00:11"
               },
               {
                   "primaryStatus": "AVAILABLE",
                   "secondaryStatus": "AVAILABLE",
                   "startTime": "2023-03-10T21:42:49",
                   "endTime": "2023-03-10T21:44:05",
                   "duration": "00:01:16"
               },
               {
                   "primaryStatus": "AVAILABLE",
                   "secondaryStatus": "AVAILABLE",
                   "startTime": "2023-03-10T21:44:48",
                   "endTime": "2023-03-10T21:45:09",
                   "duration": "00:00:21"
               },
               {
                   "primaryStatus": "AVAILABLE",
                   "secondaryStatus": "AVAILABLE",
                   "startTime": "2023-03-10T21:46:42",
                   "endTime": "2023-03-10T21:51:02",
                   "duration": "00:04:20"
               },
               {
                   "primaryStatus": "BUSY",
                   "secondaryStatus": "NBK",
                   "startTime": "2023-03-10T21:51:02",
                   "endTime": "-",
                   "duration": "-"
               }
           ]
       }
   ]
}
```