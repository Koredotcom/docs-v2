--8<-- "includes/qualityai-api-back-link.md"

# Auto QA Reporting API

This API provides reporting interaction level, Auto QA scoring and qualification of metrics relevant to the interaction based on the form associated with the Quality AI.  

| **METHOD**       | **POST** |
|------------------|----------|
| Endpoint         | `https://{{host}}//qualityai/api/v1/public/qualitymanagement/app/{{streamId}}` |
| Content Type     | `application/json` |
| Authorization    | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| API Scope        | Quality AI<br>See [Associate API Scopes](../automation/api-introduction.md#associating-api-scopes){:target="_blank"} |

## Header Parameters

| PARAMETER  | DESCRIPTION                                                                                  | TYPE            |
|------------|----------------------------------------------------------------------------------------------|-----------------|
| `Content-Type`       | `application/json`                        | `string`, required|
|`accountId`  | The Account ID. For example, `67a9ca06cf0e510a8632xxxx`                                       | `string`, required|
| `orgId`  | The unique identifier of the organization.            | `string`, required |
| `auth` | JWT token used for authentication.                    |`string`, required |


## Path Parameters

| PARAMETER  | DESCRIPTION                                                                                  | TYPE            |
|------------|----------------------------------------------------------------------------------------------|-----------------|
| `host`       | Environment URL. For example, [https://platform.kore.ai/](https://platform.kore.ai/)                                               | `string`, required|
| `streamId`  | `botId` or `streamId`. You can get it from the App Settings page.                                                            | `string`, required|


## Sample Request

```
curl --location https://{{host}}/qualityai/api/v1/public/qualitymanagement/app/{{streamId}}/scorereporting' \
--header 'accountId: {{accountId}}' \
--header 'auth: {{authToken}}' \
--header 'Content-Type: application/json' \
--header 'orgId: o-da5be4e0-8fbb-5229-ac20-9b1384ebxxxx' \
--body '{
"offset": 0,
"startDate": "2025-02-21 00:17:54",
"endDate": "2025-02-21 23:36:35",
"limit": 100
}'

```

## Body Parameters

| PARAMETER   | DESCRIPTION                                                                                                                                 | TYPE                 |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| `offset`    | The number of responses to skip. The default value is `0` (for example, `10`).                                                              | `integer`, optional  |
| `startDate` | The start date to include records. Use the UTC-based date format `YYYY-MM-DDTHH:MM:SS.NNNZ` (for example, `2025-12-18T11:33:12.724Z`).     | `string`, required  |
| `endDate`   | The end date to include records. Use the UTC-based date format `YYYY-MM-DDTHH:MM:SS.NNNZ` (for example, `2025-12-18T11:33:12.904Z`).       | `string`, required  |
| `limit`     | The maximum number of conversation records to return. The default value is `100`.                                                         | `integer`, optional  |


## Sample Response

```
{
    "results": [
        {
            "conversationId": "c-3d97d6e-509c-4746-8e5d-85298b38xxxx",
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "Agent ID": "a-03ab958-03cd-4eb9-a9b5-7cd442e5xxxx",
                    "Agent Name": "John Doe"
                }
            ],
            "koreEvalutionScore": 80,
            "Language": "English",
            "Metrics": [
                {
                    "Metric ID": "em-1c929a75-73a8-5f74-ae92-d11f3086xxxx",
                    "Metric Name": "AU - Agent response back with information",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-810ebfde-c2d5-58bf-a971-2e48beecxxxx",
                    "Metric Name": "CU - Customer issue followup by agent",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-048f6359-b612-54a9-b978-5bae94e8xxxx",
                    "Metric Name": "CrossTalk",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-edff1e44-e8c2-5432-a5af-255c243axxxx",
                    "Metric Name": "DeadAir",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "NO",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-e911550c-f2fd-5d96-ba1f-dfa15dbexxxx",
                    "Metric Name": "Greeting Complaince Rate",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-167c3b4a-9324-5636-b74e-22f7ccbcxxxx",
                    "Metric Name": "Proper Sign-off",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-a476a5cd-fb8c-5c48-961f-dc15089dxxxx",
                    "Metric Name": "Resolution Complaince - confirmation of Resolution provided",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-0098b0e1-8445-59a3-af20-3cee2cf3xxxx",
                    "Metric Name": "SRV",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "NO",
                    "isFatalError": false
                }
            ]
        },
        {
            "conversationId": "c-bc03069-37da-4a48-b599-e1eaaa47xxxx",
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "Agent ID": "a-1ab766c-15cb-4c88-8919-048aabcaxxxx",
                    "Agent Name": "John Doe"
                }
            ],
            "koreEvalutionScore": 47,
            "Language": "English",
            "Metrics": [
                {
                    "Metric ID": "em-1c929a75-73a8-5f74-ae92-d11f3086xxxx",
                    "Metric Name": "AU - Agent response back with information",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "NO",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-810ebfde-c2d5-58bf-a971-2e48beecxxxx",
                    "Metric Name": "CU - Customer issue followup by agent",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "NA",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-048f6359-b612-54a9-b978-5bae94e8xxxx",
                    "Metric Name": "CrossTalk",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-edff1e44-e8c2-5432-a5af-255c243axxxx",
                    "Metric Name": "DeadAir",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "NO",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-e911550c-f2fd-5d96-ba1f-dfa15dbexxxx",
                    "Metric Name": "Greeting Complaince Rate",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-167c3b4a-9324-5636-b74e-22f7ccbc",
                    "Metric Name": "Proper Sign-off",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-a476a5cd-fb8c-5c48-961f-dc15089d3a45",
                    "Metric Name": "Resolution Complaince - confirmation of Resolution provided",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "NO",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-0098b0e1-8445-59a3-af20-3cee2cf3xxxx",
                    "Metric Name": "SRV",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "NO",
                    "isFatalError": false
                }
            ]
        },
        {
            "conversationId": "c-9a00d98-7ee8-4b39-82a5-e94ae142xxxx",
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "Agent ID": "a-03ab958-03cd-4eb9-a9b5-7cd442e5xxxx",
                    "Agent Name": "John SVC"
                }
            ],
            "koreEvalutionScore": 80,
            "Language": "English",
            "Metrics": [
                {
                    "Metric ID": "em-1c929a75-73a8-5f74-ae92-d11f3086xxxx",
                    "Metric Name": "AU - Agent response back with information",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-810ebfde-c2d5-58bf-a971-2e48beecxxxx",
                    "Metric Name": "CU - Customer issue followup by agent",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-048f6359-b612-54a9-b978-5bae94e8xxxx",
                    "Metric Name": "CrossTalk",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-edff1e44-e8c2-5432-a5af-255c243axxxx",
                    "Metric Name": "DeadAir",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "NO",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-e911550c-f2fd-5d96-ba1f-dfa15dbexxxx",
                    "Metric Name": "Greeting Complaince Rate",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-167c3b4a-9324-5636-b74e-22f7ccbcxxxx",
                    "Metric Name": "Proper Sign-off",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-a476a5cd-fb8c-5c48-961f-dc15089dxxxx",
                    "Metric Name": "Resolution Complaince - confirmation of Resolution provided",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-0098b0e1-8445-59a3-af20-3cee2cf3xxxx",
                    "Metric Name": "SRV",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "NO",
                    "isFatalError": false
                }
            ]
        },
        {
            "conversationId": "c-4e25b3e-06b1-4537-88de-d44ae292xxxx",
            "customConversationId": "umafeb2102",
            "Queues": [
                {
                    "Queue ID": "qu-a9e7697-12de-4842-84d9-072dce60xxxx",
                    "Queue Name": "Feb21 Queue"
                }
            ],
            "Agents": [
                {
                    "Agent ID": "a-b82b6e3-1a0c-4e82-b385-c7778389xxxx",
                    "Agent Name": "John Doe"
                }
            ],
            "Language": "English",
            "Metrics": []
        },
        {
            "conversationId": "c-6469ecb-6a00-4c4d-a0b4-196e8362xxxx",
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "Agent ID": "a-1ab766c-15cb-4c88-8919-048aabcaxxxx",
                    "Agent Name": "Matthew Agent"
                }
            ],
            "koreEvalutionScore": 50,
            "Language": "English",
            "Metrics": [
                {
                    "Metric ID": "em-1c929a75-73a8-5f74-ae92-d11f3086xxxx",
                    "Metric Name": "AU - Agent response back with information",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "NA",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-810ebfde-c2d5-58bf-a971-2e48beecxxxx",
                    "Metric Name": "CU - Customer issue followup by agent",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "NA",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-048f6359-b612-54a9-b978-5bae94e8xxxx",
                    "Metric Name": "CrossTalk",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-edff1e44-e8c2-5432-a5af-255c243axxxx",
                    "Metric Name": "DeadAir",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-e911550c-f2fd-5d96-ba1f-dfa15dbexxxx",
                    "Metric Name": "Greeting Complaince Rate",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-167c3b4a-9324-5636-b74e-22f7ccbcxxxx",
                    "Metric Name": "Proper Sign-off",
                    "Metric Weight": 15,
                    "Metric Negative Weight": 0,
                    "Qualification": "NO",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-a476a5cd-fb8c-5c48-961f-dc15089dxxxx",
                    "Metric Name": "Resolution Complaince - confirmation of Resolution provided",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "NO",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-0098b0e1-8445-59a3-af20-3cee2cf3xxxx",
                    "Metric Name": "SRV",
                    "Metric Weight": 10,
                    "Metric Negative Weight": 0,
                    "Qualification": "NO",
                    "isFatalError": false
                }
            ]
        },
        {
            "conversationId": "c-5008281-1139-4490-9423-ed7c3437xxxx",
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "Agent ID": "a-978b84b-621c-44e6-95da-0dba27aaxxxx",
                    "Agent Name": "John Doe"
                }
            ],
            "koreEvalutionScore": null,
            "Language": "Dutch",
            "Metrics": [
                {
                    "Metric ID": "em-1c929a75-73a8-5f74-ae92-d11f3086xxxx",
                    "Metric Name": "AU - Agent response back with information",
                    "Metric Weight": 40,
                    "Metric Negative Weight": 0,
                    "Qualification": "NA",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-810ebfde-c2d5-58bf-a971-2e48beecxxxx",
                    "Metric Name": "CU - Customer issue followup by agent",
                    "Metric Weight": 40,
                    "Metric Negative Weight": 0,
                    "Qualification": "NA",
                    "isFatalError": false
                },
                {
                    "Metric ID": "em-02525d85-681b-51de-9290-22929269xxxx",
                    "Metric Name": "Playbook1",
                    "Metric Weight": 20,
                    "Metric Negative Weight": 0,
                    "Qualification": "NA",
                    "isFatalError": false
                }
            ]
        }
    ],
    "totalResults": 37,
    "hasMore": false,
    "totalPages": 1
}

```

## Response Body Parameters

| PARAMETER           | DESCRIPTION                                                                                           | TYPE    |
|---------------------|-----------------------------------------------------------------------------------------------------|---------|
| `conversationId`      | The conversation ID of the record.                                                                   | `string`  |
| `customConversationId`  | Custom identifier for the conversation (optional).                                                     | `string`  |
| `queues`              | An array of queue objects.                                                        | `array`  |
| `Queue ID`            | Unique identifier for the queue.                                                          | `string`  |
| `Queue Name`          | Name of the queue.conversation.                                                   | `string`  |
| `Agents`              | An array of agents who have participated in the conversation.                                                   | `string`  |
| `Agent ID`            | Unique identifier for the agent.                                                          | `string`  |
| `Agent Name`          | Name of the agent.                    | `string`  |
| `koreEvaluationScore`  | Evaluation score for the conversation.                                                   | `number`  |
| `Metrics`              | An array of metric objects.                                                        | `array`   |
| `Metric ID`           | Unique identifier for the metric.                                                         | `string`  |
| `Metric Name`         | The metric name used to measure or evaluate the conversation.                                                   | `string`  |
| `Metric Weight`       | Weight assigned to the metric.        | `number` |
| `Metric Negative Weight`  | Negative weight assigned to the metric.                                                         | `number` |
| `Qualification`       | Qualification status (YES/NO/NA).                                                            | `string` |
| `isFatalError`       | Indicates if this metric is a fatal error.                                                          | `boolean` |
| `customConversationId`       | Custom identifier for the conversation (optional).                                                      | `string` |
