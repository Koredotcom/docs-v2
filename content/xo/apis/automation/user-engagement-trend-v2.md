--8<-- "includes/automationai-api-back-link.md"

# User Engagement Trend API - v2

Retrieves engagement metrics for a specific app in a workspace over a chosen time period, including unique users, new users, returning users, and average user counts.

| **Field**          | **Value**                                                                 |
|----------------|-----------------------------------------------------------------------|
| Method         | POST                                                                  |
| Endpoint       | `https://{{host}}/api/public/bot/{{streamId}}/v2/userEngagementTrend?aggregation_type={{aggregation_type}}&start_date={{start_date}}&end_date={{end_date}}&conversationType={{conversationType}}&conversationStatus={{conversationStatus}}&timeZoneOffset=Asia/Kolkata` |
| Content Type   | application/json                                                      |
| Authorization  | auth: {{JWT}}. <br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token)                                                         |
| API Scope      | App Builder: User Engagement Trend <br> Admin Console: Not Applicable   |

## Path Parameters

| **PARAMETER** | **REQUIRED/OPTIONAL** | **DESCRIPTION** |
|-----------|-------------------|-------------|
| `host`      | Required          | Environment URL, for example, https://platform.kore.ai |
| `streamId`    | Required          | App ID or Stream ID. You can access it from the General Settings page of the app. |


## Query Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
|---------------|-----------------|----------|
| `aggregation_type` | Specifies the time-based aggregation level for the data. Allowed values are `daily` and `hourly`. If not specified, the aggregation type defaults to `hourly`. | string, optional |
| `start_date` | Specifies the start date for retrieving analytics data. The value must be in `YYYY-MM-DD` format. | string, required |
| `end_date` | Specifies the end date for retrieving analytics data. The value must be in `YYYY-MM-DD` format. | string, required |
| `conversationType` | Filters analytics data by conversation type. If not specified, the default value is `All`. Allowed values are `All`, `Interactive`, and `Non Interactive`. | string, optional |
| `conversationStatus` | Filters analytics data by conversation status. If not specified, the default value is `All`. Allowed values are `All`, `Active`, and `Closed`. | string, optional |
| `channels` | Filters analytics data by the specified channel. If not specified, the default value is `All`. | string, optional |
| `timeZoneOffset` | Time zone used to normalize and aggregate date and time values (for example, `Asia/Kolkata`). | string, optional |


## Sample Request


```json
curl --location --request POST 'https://{{host}}/api/public/bot/{{streamId}}/v2/userEngagementTrend?aggregation_type={{aggregation_type}}&start_date={{start_date}}&end_date={{end_date}}&conversationType={{conversationType}}&conversationStatus={{conversationStatus}}&timeZoneOffset=Asia%2FKolkata' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}'
```


## Sample Response

* **when aggregation_type = Daily**

```json
{
    "summary": {
        "uniqueUsers": 2,
        "newUsers": 2,
        "returningUsers": 0,
        "avgUniqueUsersPerDay": 0.4,
        "avgNewUsersPerDay": 0.4,
        "avgReturningUsersPerDay": 0
    },
    "uniqueUsersTrend": {
        "dataPoints": [
            {
                "date": "Dec 01 2025",
                "users": 0
            },
            {
                "date": "Dec 02 2025",
                "users": 0
            },
            {
                "date": "Dec 03 2025",
                "users": 1
            },
            {
                "date": "Dec 04 2025",
                "users": 1
            },
            {
                "date": "Dec 05 2025",
                "users": 0
            }
        ]
    },
    "newUsersTrend": {
        "dataPoints": [
            {
                "date": "Dec 01 2025",
                "users": 0
            },
            {
                "date": "Dec 02 2025",
                "users": 0
            },
            {
                "date": "Dec 03 2025",
                "users": 1
            },
            {
                "date": "Dec 04 2025",
                "users": 1
            },
            {
                "date": "Dec 05 2025",
                "users": 0
            }
        ]
    },
    "returningUsersTrend": {
        "dataPoints": [
            {
                "date": "Dec 01 2025",
                "users": 0
            },
            {
                "date": "Dec 02 2025",
                "users": 0
            },
            {
                "date": "Dec 03 2025",
                "users": 0
            },
            {
                "date": "Dec 04 2025",
                "users": 0
            },
            {
                "date": "Dec 05 2025",
                "users": 0
            }
        ]
    },
    "filters": {
        "start": "Dec 01 2025",
        "end": "Dec 05 2025",
        "conversationType": "all",
        "conversationStatus": "all",
        "aggregationType": "daily",
        "dataPointsCount": 5
    }
}
    
```

* **when aggregation_type = Hourly or empty or not specified**

```json
    {
    "summary": {
        "uniqueUsers": 2,
        "newUsers": 2,
        "returningUsers": 0,
        "avgUniqueUsersPerDay": 0.4,
        "avgNewUsersPerDay": 0.4,
        "avgReturningUsersPerDay": 0
    },
    "uniqueUsersTrend": {
        "dataPoints": [
            {
                "date": "Dec 01 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 02 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 03 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 1,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 04 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 1,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 05 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            }
        ]
    },
    "newUsersTrend": {
        "dataPoints": [
            {
                "date": "Dec 01 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 02 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 03 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 1,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 04 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 1,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 05 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            }
        ]
    },
    "returningUsersTrend": {
        "dataPoints": [
            {
                "date": "Dec 01 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 02 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 03 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 04 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            },
            {
                "date": "Dec 05 2025",
                "0 - 1": 0,
                "1 - 2": 0,
                "2 - 3": 0,
                "3 - 4": 0,
                "4 - 5": 0,
                "5 - 6": 0,
                "6 - 7": 0,
                "7 - 8": 0,
                "8 - 9": 0,
                "9 - 10": 0,
                "10 - 11": 0,
                "11 - 12": 0,
                "12 - 13": 0,
                "13 - 14": 0,
                "14 - 15": 0,
                "15 - 16": 0,
                "16 - 17": 0,
                "17 - 18": 0,
                "18 - 19": 0,
                "19 - 20": 0,
                "20 - 21": 0,
                "21 - 22": 0,
                "22 - 23": 0,
                "23 - 0": 0
            }
        ]
    },
    "filters": {
        "start": "Dec 01 2025",
        "end": "Dec 05 2025",
        "conversationType": "all",
        "conversationStatus": "all",
        "aggregationType": "hourly",
        "dataPointsCount": 5
    }
}
```

## Response Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
|----------|-------------|-----------|
| `summary` | Aggregated user metrics for the selected period. | Object |
| `summary.uniqueUsers` | Total number of unique users in the selected period. | Integer |
| `summary.newUsers` | Total number of new users in the selected period. | Integer |
| `summary.returningUsers` | Total number of returning users in the selected period. | Integer |
| `summary.avgUniqueUsersPerDay` | Average number of unique users per day for the selected period. | Number |
| `summary.avgNewUsersPerDay` | Average number of new users per day for the selected period. | Number |
| `summary.avgReturningUsersPerDay` | Average number of returning users per day for the selected period. | Number |
| `uniqueUsersTrend` | Trend data for unique users based on the selected aggregation type. | Object |
| `uniqueUsersTrend.dataPoints` | List of date-wise user engagement data points. | Array of Objects |
| `uniqueUsersTrend.dataPoints.date` | Date corresponding to the data point (formatted as `MMM DD YYYY`). | String |
| `uniqueUsersTrend.dataPoints.users` | Total count of unique users for the day. Displayed only when `aggregation_type` is `daily`. | Integer |
| `uniqueUsersTrend.dataPoints.<hour_range>` | Count of unique users within the specified hourly time range (for example, `17 - 18`). Displayed only when `aggregation_type` is `hourly`. | Integer |
| `newUsersTrend` | Trend data for new users based on the selected aggregation type. | Object |
| `newUsersTrend.dataPoints` | List of date-wise user engagement data points. | Array of Objects |
| `newUsersTrend.dataPoints.date` | Date corresponding to the data point (formatted as `MMM DD YYYY`). | String |
| `newUsersTrend.dataPoints.users` | Total count of new users for the day. Displayed only when `aggregation_type` is `daily`. | Integer |
| `newUsersTrend.dataPoints.<hour_range>` | Count of new users within the specified hourly time range. Displayed only when `aggregation_type` is `hourly`. | Integer |
| `returningUsersTrend` | Trend data for returning users based on the selected aggregation type. | Object |
| `returningUsersTrend.dataPoints` | List of date-wise user engagement data points. | Array of Objects |
| `returningUsersTrend.dataPoints.date` | Date corresponding to the data point (formatted as `MMM DD YYYY`). | String |
| `returningUsersTrend.dataPoints.users` | Total count of returning users for the day. Displayed only when `aggregation_type` is `daily`. | Integer |
| `returningUsersTrend.dataPoints.<hour_range>` | Count of returning users within the specified hourly time range. Displayed only when `aggregation_type` is `hourly`. | Integer |
| `filters` | Metadata describing the filters applied to generate the response. | Object |
| `filters.start` | Start date of the applied filter range. | String |
| `filters.end` | End date of the applied filter range. | String |
| `filters.conversationType` | Conversation type filter applied. | String |
| `filters.conversationStatus` | Conversation status filter applied. | String |
| `filters.aggregationType` | Aggregation level applied to the data (`daily` or `hourly`). | String |
| `filters.dataPointsCount` | Total number of data points returned in the response. | Integer |