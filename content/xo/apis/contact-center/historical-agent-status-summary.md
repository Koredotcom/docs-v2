--8<-- "includes/ccai-api-back-link.md"

# Historical Agent Status Summary

To retrieve the self reported status (available, busy, away, etc.) and ACD status (interacting, idle) of every agent for each bucket in the given time interval.

| **Method**       | POST                                                          |
|--------------|---------------------------------------------------------------|
| **Endpoint**     | `https://{{host}}/agentassist/api/public/analytics/1.1/account/{{accountId}}/userstatus` |
| **Content Type** | `application/json`                                            |
| Authorization| `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**    | SmartAssist Analytics                                         |

## Query Parameters

| **Parameter**  | **Description**                                    | **Type**        |
|------------|------------------------------------------------|-------------|
| Host       | The Environment URL. For example, `https://platform.kore.ai` | string, required |
| accountId  | The accountId                                 | string, required |
| limit      | Number of agents to be displayed in the response. Default: 50. Example: 50 | integer, optional |
| offset     | Number of response documents needed to be skipped. Default: 0 | integer, optional |

## Sample Request

```
curl --location --request POST 'https://{{host}}/agentassist/api/public/analytics/account/{{accountId}}/userstatus' \
--header 'auth: {jwt-code}' \
--header 'Content-Type: application/json' \
--header 'IId: {{IId}}' \
--data-raw '{
"filter":{
 "agents":["jsmith@domain.com","username@domain.com"],
 "dateFilter":{
  "startDate":"2022-08-25",
  "endDate":"2022-08-26",
  "timeZoneOffSet": -330
  }
 },
 "granularity":PT30M
}
```

## Request Header Parameters

| **Header**      | **Description**                         | **Type**                         |
|------------------|-----------------------------------------|-------------------------------------------|
| `auth`          | JWT authentication token. For example, `{jwt-code}`     |      required                        |
| `Content-Type`  | Request body format. For example, `application/json` |  required                      |
| `IId`           | Stream or application ID. For example, `st-e19dd469-90f5-5655-b0b2-858de901xxxx`    | required |

## Request Body Parameters

| **Parameter**    | **Description**                                                            | **Type**      |
|--------------|------------------------------------------------------------------------|-----------|
| filter       | Object with agents and date filter as the fields. It contains the following details to filter the result set. | Required  |
| agents       | The Email Ids of the agents.                                           | string, optional |
| dateFilter   | Object with start date, end date, and time zone offset as the fields. It contains the following details to filter the result set. | required  |
| startDate    | The start date from which the records need to be considered. The date format is: `yyyy-mm-dd`. For example, `2022-08-25`. | date, required |
| endDate      | The end date from which the records need to be considered. The date format is: `yyyy-mm-dd`. For example, `2022-08-25`. | date, required |
| timeZoneOffSet | The time zone offset. For example, `-330,630,-500`.                     | number, optional |
| granularity  | The ISO-8601 format is the input. For example, `PT15M, PT30M, PT1H, PT2H, PT4H, PT8H, PT12H, PT24H`. | String, Required |

## Sample Response

```
{
    "hasMore": true,
    "limit": 50,
    "offset": 0,
    "data": [
        {
            "userId": "u-0572f8c7-970b-5c78-ab20-e9c1a10fxxxx",
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "customId": "101010",
            "timeInterval": []
        },
        {
            "userId": "u-05ca6ec1-05d3-5915-b874-29f24aa4xxxx",
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "jane.doe@example.com",
            "customId": "",
            "timeInterval": []
        },
        {
            "userId": "u-0dbab89e-b373-5dd2-8a9b-cf2d8e54xxxx",
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "customId": "",
            "timeInterval": []
        },
        {
            "userId": "u-22948759-ced0-5cca-bbd3-abd91946xxxx",
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "jane.doe@example.com",
            "customId": "12",
            "timeInterval": []
        },
        {
            "userId": "u-22ebdbd2-64b5-5ba9-9285-754276ecxxxx",
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "customId": "",
            "timeInterval": []
        },
        {
            "userId": "u-29f05090-1440-5c80-8096-7eb47c07xxxx",
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "jane.doe@example.com",
            "customId": "065582",
            "timeInterval": []
        },
        {
            "userId": "u-2b991240-7f3e-53a1-a09c-aba82a4cxxxx",
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "customId": "505951",
            "timeInterval": [
                {
                    "startTime": "2022-12-12T00:00:00Z",
                    "endTime": "2022-12-12T00:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T00:30:00Z",
                    "endTime": "2022-12-12T01:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T01:00:00Z",
                    "endTime": "2022-12-12T01:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T01:30:00Z",
                    "endTime": "2022-12-12T02:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T02:00:00Z",
                    "endTime": "2022-12-12T02:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T02:30:00Z",
                    "endTime": "2022-12-12T03:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T03:00:00Z",
                    "endTime": "2022-12-12T03:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T03:30:00Z",
                    "endTime": "2022-12-12T04:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T04:00:00Z",
                    "endTime": "2022-12-12T04:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T04:30:00Z",
                    "endTime": "2022-12-12T05:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T05:00:00Z",
                    "endTime": "2022-12-12T05:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T05:30:00Z",
                    "endTime": "2022-12-12T06:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T06:00:00Z",
                    "endTime": "2022-12-12T06:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T06:30:00Z",
                    "endTime": "2022-12-12T07:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T07:00:00Z",
                    "endTime": "2022-12-12T07:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T07:30:00Z",
                    "endTime": "2022-12-12T08:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T08:00:00Z",
                    "endTime": "2022-12-12T08:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T08:30:00Z",
                    "endTime": "2022-12-12T09:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T09:00:00Z",
                    "endTime": "2022-12-12T09:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T09:30:00Z",
                    "endTime": "2022-12-12T10:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T10:00:00Z",
                    "endTime": "2022-12-12T10:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T10:30:00Z",
                    "endTime": "2022-12-12T11:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T11:00:00Z",
                    "endTime": "2022-12-12T11:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T11:30:00Z",
                    "endTime": "2022-12-12T12:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T12:00:00Z",
                    "endTime": "2022-12-12T12:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T12:30:00Z",
                    "endTime": "2022-12-12T13:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T13:00:00Z",
                    "endTime": "2022-12-12T13:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T13:30:00Z",
                    "endTime": "2022-12-12T14:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T14:00:00Z",
                    "endTime": "2022-12-12T14:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T14:30:00Z",
                    "endTime": "2022-12-12T15:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T15:00:00Z",
                    "endTime": "2022-12-12T15:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-12T15:30:00Z",
                    "endTime": "2022-12-12T16:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "919 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "565 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "354 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T16:00:00Z",
                    "endTime": "2022-12-12T16:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T16:30:00Z",
                    "endTime": "2022-12-12T17:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "71 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "1729 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T17:00:00Z",
                    "endTime": "2022-12-12T17:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "821 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "979 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T17:30:00Z",
                    "endTime": "2022-12-12T18:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "0 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T18:00:00Z",
                    "endTime": "2022-12-12T18:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "1561 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "239 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T18:30:00Z",
                    "endTime": "2022-12-12T19:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "628 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "94 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "534 sec"
                            }
                        },
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1172 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1172 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T19:00:00Z",
                    "endTime": "2022-12-12T19:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "887 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "887 sec"
                            }
                        },
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "913 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "350 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "563 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T19:30:00Z",
                    "endTime": "2022-12-12T20:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "1401 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "399 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T20:00:00Z",
                    "endTime": "2022-12-12T20:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "0 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T20:30:00Z",
                    "endTime": "2022-12-12T21:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "0 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T21:00:00Z",
                    "endTime": "2022-12-12T21:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "0 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T21:30:00Z",
                    "endTime": "2022-12-12T22:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "0 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T22:00:00Z",
                    "endTime": "2022-12-12T22:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "0 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T22:30:00Z",
                    "endTime": "2022-12-12T23:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "87 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "87 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1713 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1713 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T23:00:00Z",
                    "endTime": "2022-12-12T23:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-12T23:30:00Z",
                    "endTime": "2022-12-13T00:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T00:00:00Z",
                    "endTime": "2022-12-13T00:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T00:30:00Z",
                    "endTime": "2022-12-13T01:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T01:00:00Z",
                    "endTime": "2022-12-13T01:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T01:30:00Z",
                    "endTime": "2022-12-13T02:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T02:00:00Z",
                    "endTime": "2022-12-13T02:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T02:30:00Z",
                    "endTime": "2022-12-13T03:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T03:00:00Z",
                    "endTime": "2022-12-13T03:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T03:30:00Z",
                    "endTime": "2022-12-13T04:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T04:00:00Z",
                    "endTime": "2022-12-13T04:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T04:30:00Z",
                    "endTime": "2022-12-13T05:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T05:00:00Z",
                    "endTime": "2022-12-13T05:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T05:30:00Z",
                    "endTime": "2022-12-13T06:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T06:00:00Z",
                    "endTime": "2022-12-13T06:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T06:30:00Z",
                    "endTime": "2022-12-13T07:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T07:00:00Z",
                    "endTime": "2022-12-13T07:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T07:30:00Z",
                    "endTime": "2022-12-13T08:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T08:00:00Z",
                    "endTime": "2022-12-13T08:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T08:30:00Z",
                    "endTime": "2022-12-13T09:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T09:00:00Z",
                    "endTime": "2022-12-13T09:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T09:30:00Z",
                    "endTime": "2022-12-13T10:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T10:00:00Z",
                    "endTime": "2022-12-13T10:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T10:30:00Z",
                    "endTime": "2022-12-13T11:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T11:00:00Z",
                    "endTime": "2022-12-13T11:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T11:30:00Z",
                    "endTime": "2022-12-13T12:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T12:00:00Z",
                    "endTime": "2022-12-13T12:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T12:30:00Z",
                    "endTime": "2022-12-13T13:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T13:00:00Z",
                    "endTime": "2022-12-13T13:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T13:30:00Z",
                    "endTime": "2022-12-13T14:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T14:00:00Z",
                    "endTime": "2022-12-13T14:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T14:30:00Z",
                    "endTime": "2022-12-13T15:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T15:00:00Z",
                    "endTime": "2022-12-13T15:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T15:30:00Z",
                    "endTime": "2022-12-13T16:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T16:00:00Z",
                    "endTime": "2022-12-13T16:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T16:30:00Z",
                    "endTime": "2022-12-13T17:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T17:00:00Z",
                    "endTime": "2022-12-13T17:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1800 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T17:30:00Z",
                    "endTime": "2022-12-13T18:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Away",
                            "stats": {
                                "sum": "1762 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Away:Idle",
                            "stats": {
                                "sum": "0 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AWAY:Interacting",
                            "stats": {
                                "sum": "1762 sec"
                            }
                        },
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "38 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "38 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "0 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T18:00:00Z",
                    "endTime": "2022-12-13T18:30:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                           "value": "Available",
                            "stats": {
                                "sum": "800 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "764 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "37 sec"
                            }
                        }
                    ]
                },
                {
                    "startTime": "2022-12-13T18:30:00Z",
                    "endTime": "2022-12-13T19:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-13T19:00:00Z",
                    "endTime": "2022-12-13T19:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-13T19:30:00Z",
                    "endTime": "2022-12-13T20:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-13T20:00:00Z",
                    "endTime": "2022-12-13T20:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-13T20:30:00Z",
                    "endTime": "2022-12-13T21:00:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-13T21:00:00Z",
                    "endTime": "2022-12-13T21:30:00Z",
                    "status": []
                },
                {
                    "startTime": "2022-12-13T21:30:00Z",
                    "endTime": "2022-12-13T22:00:00Z",
                    "status": [
                        {
                            "metric": "AgentStatus",
                            "value": "Available",
                            "stats": {
                                "sum": "864 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "Available:Idle",
                            "stats": {
                                "sum": "864 sec"
                            }
                        },
                        {
                            "metric": "AgentState",
                            "value": "AVAILABLE:Interacting",
                            "stats": {
                                "sum": "0 sec"
                            }
                        }
                    ]
             
                  }, 
            ] 
        }  
    ]
}          
```