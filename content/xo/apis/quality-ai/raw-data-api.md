--8<-- "includes/qualityai-api-back-link.md"

# Raw Data API

The Raw Data API now provides detailed Quality AI and Conversation Intelligence data at the interaction level, including quality metrics and analytics attributes. It also supports generated intents, offering L1–L3 topics with confidence scores, and sentiment and resolution for L3, replacing the previous intents and topics fields.

| **METHOD**     | **POST**                                                                                                                                       |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Endpoint       |`https://{{host}}/qualityai/api/v1/public/qualitymanagement/app/{{streamId}}/rawdata`|
| Content Type     | `application/json` |
| Authorization    | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). 
| API Scope        | Quality AI<br>See [Associate API Scopes](../automation/api-introduction.md#associating-api-scopes){:target="_blank"} |                                                                    || API Scope        | Quality AI<br>See [Associate API Scopes](../automation/api-introduction.md#associating-api-scopes){:target="_blank"} |                                                                    |

## Header Parameters


| **PARAMETER** | **DESCRIPTION**                                                                 | **OPTIONAL/REQUIRED**          |
|---------------|----------------------------------------------------------------------------------|-------------------|
| `Content-Type`        | `application/json`| `string`, required |
| `accountId`   | The Account ID. For example, `67a9ca06cf0e510a8632xxxx`                         | `string`, required |
| `orgId`   | The unique identifier of the organization.                         | `string`, required | 
| `auth`   | JWT token used for authentication.                         |`string`, required |


## Path Parameters


| **PARAMETER** | **DESCRIPTION**                                                                 | **TYPE**          |
|---------------|----------------------------------------------------------------------------------|-------------------|
| `host`        | Environment URL. For example, [https://platform.kore.ai/](https://platform.kore.ai/) | `string`, required |
| `streamId`   | `botId` or `streamId`. You can get it from the App Settings page.                         | `string`, required |


## Sample Request

```
curl --location `https://{{host}}/qualityai/api/v1/public/qualitymanagement/app/{{streamId}}/rawdata` \
  --header 'accountId: {{accountId}}' \
  --header 'auth: {{authToken}}' \
  --header 'Content-Type: application/json' \
  --header 'orgId: o-da5be4e0-8fbb-5229-ac20-9b1384ebxxxx' \
  --body '{
    "offset": 0,
    "startDate": "2025-06-12 00:17:54",
    "endDate": "2025-06-13 23:36:35",
    "limit": 10,
    "page": 1
    }'

```

## Body Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
|---------------|-----------------|----------|
| `offset` | The number of responses the documents need to skip before starting to return results. The default value is 0. For example, 10. | `integer`, required |
| `startDate` | Specify the start date to include records. Use the UTC-based date format: <br>`YYYY-MM-DDTHH24:MM:SS.NNNZ`<br>For example: `2025-12-18T11:31:14.722Z` | `string`, required |
| `endDate` | Specify the end date to include records. Use the UTC-based date format: <br>`YYYY-MM-DDTHH24:MM:SS.NNNZ`<br>For example: `2025-12-18T11:33:12.904Z` | `string`, required |
| `limit` | This sets the number of conversation records returned to the response, or the number of records to fetch is 10.  | `integer`, optional |
| `page` | Indicates the number of pages in the response; it's used for pagination. The default value is 1. | `integer`, optional |

## Sample Response	

```
{
    "results": [
        {
            "src": "rtm",
            "speechSpeed": [],
            "Conversation ID": "c-dummy-47bf4d70-b897-4862-8598-8eaadd3exxxx",
            "Conversation Start Time": "2025-06-12T05:28:23.137Z",
            "Conversation End Time": "2025-06-12T05:29:50.070Z",
            "Language": "English",
            "Duration": "86933 milliseconds",
            "Sentiment Score": 6.52,
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "agentId": "a-143ba59-7c2b-4043-91ee-23ed2540xxxx",
                    "Agent Name": "Grace Agent Agent",
                    "Agent Start Time": "2025-06-12T05:28:35.267Z"
                }
            ],
            "Kore Evaluation Score": 100,
            "IsChurnRiskObserved": true,
            "IsEscalationObserved": false,
            "Fatal Errors": 0,
            "Emotions": [
                "neutral",
                "optimism"
            ],
            "Taxonomy Resolution": "false",
            "Generated Intents": [
                {
                    "emotions": [
                        "gratitude"
                    ],
                    "intent": "inquiry",
                    "keywords": [
                        "help",
                        "questions"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 10
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "intent": "confirmation",
                    "keywords": [
                        "book",
                        "confirm",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6.5
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "topic": "flight booking",
                    "keywords": [
                        "book",
                        "flight",
                        "Amsterdam",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6
                }
            ]
        },
        {
            "src": "rtm",
            "speechSpeed": [],
            "Conversation ID": "c-dummy-e2f05ba1-88da-4dcc-a941-19deb366xxxx",
            "Conversation Start Time": "2025-06-12T05:28:23.137Z",
            "Conversation End Time": "2025-06-12T05:29:50.070Z",
            "Language": "English",
            "Duration": "86933 milliseconds",
            "Sentiment Score": 6.52,
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "agentId": "a-143ba59-7c2b-4043-91ee-23ed2540xxxx",
                    "Agent Name": "Grace Agent Agent",
                    "Agent Start Time": "2025-06-12T05:28:35.267Z"
                }
            ],
            "Kore Evaluation Score": 100,
            "IsChurnRiskObserved": true,
            "IsEscalationObserved": false,
            "Fatal Errors": 0,
            "Emotions": [
                "neutral",
                "optimism"
            ],
            "Taxonomy Resolution": "false",
            "Generated Intents": [
                {
                    "emotions": [
                        "gratitude"
                    ],
                    "intent": "inquiry",
                    "keywords": [
                        "help",
                        "questions"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 10
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "intent": "confirmation",
                    "keywords": [
                        "book",
                        "confirm",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6.5
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "topic": "flight booking",
                    "keywords": [
                        "book",
                        "flight",
                        "Amsterdam",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6
                }
            ]
        },
        {
            "src": "rtm",
            "speechSpeed": [],
            "Conversation ID": "c-dummy-ae989432-9d73-4774-8faa-881e336axxxx",
            "Conversation Start Time": "2025-06-12T05:28:23.137Z",
            "Conversation End Time": "2025-06-12T05:29:50.070Z",
            "Language": "English",
            "Duration": "86933 milliseconds",
            "Sentiment Score": 6.52,
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "agentId": "a-143ba59-7c2b-4043-91ee-23ed2540xxxx",
                    "Agent Name": "Grace Agent Agent",
                    "Agent Start Time": "2025-06-12T05:28:35.267Z"
                }
            ],
            "Kore Evaluation Score": 100,
            "IsChurnRiskObserved": true,
            "IsEscalationObserved": false,
            "Fatal Errors": 0,
            "Emotions": [
                "neutral",
                "optimism"
            ],
            "Taxonomy Resolution": "false",
            "Generated Intents": [
                {
                    "emotions": [
                        "gratitude"
                    ],
                    "intent": "inquiry",
                    "keywords": [
                        "help",
                        "questions"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 10
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "intent": "confirmation",
                    "keywords": [
                        "book",
                        "confirm",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6.5
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "topic": "flight booking",
                    "keywords": [
                        "book",
                        "flight",
                        "Amsterdam",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6
                }
            ]
        },
        {
            "src": "rtm",
            "speechSpeed": [],
            "Conversation ID": "c-dummy-28c5cf99-1a42-47c5-98f7-82763fb7xxxx",
            "Conversation Start Time": "2025-06-12T05:28:23.137Z",
            "Conversation End Time": "2025-06-12T05:29:50.070Z",
            "Language": "English",
            "Duration": "86933 milliseconds",
            "Sentiment Score": 6.52,
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "agentId": "a-143ba59-7c2b-4043-91ee-23ed2540xxxx",
                    "Agent Name": "Grace Agent Agent",
                    "Agent Start Time": "2025-06-12T05:28:35.267Z"
                }
            ],
            "Kore Evaluation Score": 100,
            "IsChurnRiskObserved": true,
            "IsEscalationObserved": false,
            "Fatal Errors": 0,
            "Emotions": [
                "neutral",
                "optimism"
            ],
            "Taxonomy Resolution": "false",
            "Generated Intents": [
                {
                    "emotions": [
                        "gratitude"
                    ],
                    "intent": "inquiry",
                    "keywords": [
                        "help",
                        "questions"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 10
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "intent": "confirmation",
                    "keywords": [
                        "book",
                        "confirm",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6.5
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "topic": "flight booking",
                    "keywords": [
                        "book",
                        "flight",
                        "Amsterdam",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6
                }
            ]
        },
        {
            "src": "rtm",
            "Conversation ID": "c-6d3aeb8-a3c5-470e-8e66-0273cb42xxxx",
            "Conversation Start Time": "2025-06-12T05:28:23.137Z",
            "Conversation End Time": "2025-06-12T05:29:50.070Z",
            "Language": "English",
            "Duration": "86933 milliseconds",
            "Sentiment Score": 6.52,
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "agentId": "a-143ba59-7c2b-4043-91ee-23ed2540xxxx",
                    "Agent Name": "Grace Agent Agent",
                    "Agent Start Time": "2025-06-12T05:28:35.267Z"
                }
            ],
            "Kore Evaluation Score": 100,
            "IsChurnRiskObserved": true,
            "IsEscalationObserved": false,
            "Fatal Errors": 0,
            "Emotions": [
                "neutral",
                "optimism"
            ],
            "Taxonomy Resolution": "false",
            "Speaking Rate": [],
            "Sentiment Pattern": {
                "start": "positive",
                "end": "positive"
            },
            "Customer emotions": [
                {
                    "emotion": "Happy",
                    "duration": 0,
                    "proportion": 100
                }
            ],
            "Agent emotions": [
                {
                    "emotion": "Happiness",
                    "duration": 0,
                    "proportion": 66.67
                },
                {
                    "emotion": "Patience",
                    "duration": 0,
                    "proportion": 33.33
                }
            ],
            "Sentiment Ratio": {
                "positive": 50,
                "neutral": 50,
                "negative": 0
            },
            "Metrics": [
                {
                    "Metric ID": "em-1c929a75-73a8-5f74-ae92-d11f3086xxxx",
                    "Metric Name": "AU - Agent response back with information",
                    "Metric Weight": 22,
                    "Metric Negative Weight": 12,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [
                        {
                            "message_id": "ms-aa12cde3-3e2c-51cc-8d71-ca6a9036xxxx",
                            "justification": "",
                            "timestamp": 1749706154852
                        }
                    ],
                    "justification": []
                },
                {
                    "Metric ID": "em-810ebfde-c2d5-58bf-a971-2e48beecxxxx",
                    "Metric Name": "CU - Customer issue followup by agent",
                    "Metric Weight": 21,
                    "Metric Negative Weight": 9,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": []
                },
                {
                    "Metric ID": "em-e911550c-f2fd-5d96-ba1f-dfa15dbexxxx",
                    "Metric Name": "Greeting Compliance Rate",
                    "Metric Weight": 11,
                    "Metric Negative Weight": 23,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": [
                        {
                            "message_id": "ms-3673d9ea-15e2-56bd-9687-9cfb7f26xxxx",
                            "justification": "",
                            "timestamp": 1749706133821
                        }
                    ]
                },
                {
                    "Metric ID": "em-167c3b4a-9324-5636-b74e-22f7ccbcxxxx",
                    "Metric Name": "Proper Sign-off",
                    "Metric Weight": 26,
                    "Metric Negative Weight": 23,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": [
                        {
                            "message_id": "ms-d26c9cab-1388-5c44-96d0-39465843xxxx",
                            "justification": "",
                            "timestamp": 1749706182096
                        }
                    ]
                },
                {
                    "Metric ID": "em-a476a5cd-fb8c-5c48-961f-dc15089dxxxx",
                    "Metric Name": "Resolution Complaince - confirmation of Resolution provided",
                    "Metric Weight": 20,
                    "Metric Negative Weight": 6,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": []
                },
                {
                    "Metric ID": "em-4d35387e-3e12-5904-a304-f7390ea0xxxx",
                    "Metric Name": "Static Price",
                    "Metric Weight": 0,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": [
                        {
                            "message_id": "ms-ddcbf192-7da3-5358-9e27-de56cd91xxxx",
                            "justification": "",
                            "timestamp": 1749706166439
                        }
                    ]
                }
            ],
            "Pass Score": 54,
            "IsPassed": true,
            "Generated Intents": [
                {
                    "emotions": [
                        "gratitude"
                    ],
                    "intent": "inquiry",
                    "keywords": [
                        "help",
                        "questions"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 10
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "intent": "confirmation",
                    "keywords": [
                        "book",
                        "confirm",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6.5
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "topic": "flight booking",
                    "keywords": [
                        "book",
                        "flight",
                        "Amsterdam",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6
                }
            ]
        },
        {
            "src": "rtm",
            "speechSpeed": [],
            "Conversation ID": "c-dummy-ad2905c4-6ec2-4a94-9f31-0fdcf4bdxxxx",
            "Conversation Start Time": "2025-06-12T05:28:23.137Z",
            "Conversation End Time": "2025-06-12T05:29:50.070Z",
            "Language": "English",
            "Duration": "86933 milliseconds",
            "Sentiment Score": 6.52,
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "agentId": "a-143ba59-7c2b-4043-91ee-23ed2540xxxx",
                    "Agent Name": "Grace Agent Agent",
                    "Agent Start Time": "2025-06-12T05:28:35.267Z"
                }
            ],
            "Kore Evaluation Score": 100,
            "IsChurnRiskObserved": true,
            "IsEscalationObserved": false,
            "Fatal Errors": 0,
            "Emotions": [
                "neutral",
                "optimism"
            ],
            "Taxonomy Resolution": "false",
            "Generated Intents": [
                {
                    "emotions": [
                        "gratitude"
                    ],
                    "intent": "inquiry",
                    "keywords": [
                        "help",
                        "questions"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 10
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "intent": "confirmation",
                    "keywords": [
                        "book",
                        "confirm",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6.5
                },
                {
                    "emotions": [
                        "optimism",
                        "neutral"
                    ],
                    "topic": "flight booking",
                    "keywords": [
                        "book",
                        "flight",
                        "Amsterdam",
                        "reservation"
                    ],
                    "Sentiment": "positive",
                    "Sentiment Score": 6
                }
            ]
        },
        {
            "src": "korevg",
            "Conversation ID": "c-bcb3610-0024-48da-81d4-d6521122xxxx",
            "Conversation Start Time": "2025-06-12T05:35:16.022Z",
            "Conversation End Time": "2025-06-12T05:37:32.823Z",
            "Language": "English",
            "Duration": "136801 milliseconds",
            "Sentiment Score": 7.18,
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "agentId": "a-143ba59-7c2b-4043-91ee-23ed2540xxxx",
                    "Agent Name": "Grace Agent Agent",
                    "Agent Start Time": "2025-06-12T05:35:19.481Z",
                    "Crutch Word Score": 9.3
                }
            ],
            "Kore Evaluation Score": 68,
            "IsChurnRiskObserved": true,
            "IsEscalationObserved": false,
            "Fatal Errors": 0,
            "Taxonomy Resolution": "false",
            "Customer talk ratio percentage": 10,
            "Agent talk ratio percentage": 18,
            "Silence percentage": 72,
            "Speaking Rate": [
                {
                    "nWords": 72,
                    "timeTaken": 21,
                    "average": 200.38,
                    "score": 10,
                    "source": "agent",
                    "sourceId": "u-1a06dfc5-2f36-5d7a-8c49-90b1952fxxxx"
                },
                {
                    "nWords": 41,
                    "timeTaken": 12,
                    "average": 205,
                    "score": 10,
                    "source": "customer",
                    "sourceId": "u-e06f717b-1c6d-5da1-aa2a-0c29000axxxx"
                }
            ],
            "Sentiment Pattern": {
                "start": "positive",
                "end": "positive"
            },
            "Customer emotions": [
                {
                    "emotion": "Happy",
                    "duration": 7079,
                    "proportion": 66.67
                },
                {
                    "emotion": "Confusion",
                    "duration": 3640,
                    "proportion": 33.33
                }
            ],
            "Agent emotions": [
                {
                    "emotion": "Patience",
                    "duration": 14318,
                    "proportion": 66.67
                },
                {
                    "emotion": "Happiness",
                    "duration": 5599,
                    "proportion": 33.33
                }
            ],
            "Sentiment Ratio": {
                "positive": 57,
                "neutral": 14,
                "negative": 29
            },
            "Metrics": [
                {
                    "Metric ID": "em-1c929a75-73a8-5f74-ae92-d11f3086xxxx",
                    "Metric Name": "AU - Agent response back with information",
                    "Metric Weight": 16,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [
                        {
                            "message_id": "ms-bec449af-b89a-564a-b6cf-a216544cxxxx",
                            "justification": "",
                            "timestamp": 1749706578266
                        }
                    ],
                    "justification": []
                },
                {
                    "Metric ID": "em-810ebfde-c2d5-58bf-a971-2e48beecxxxx",
                    "Metric Name": "CU - Customer issue followup by agent",
                    "Metric Weight": 17,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": []
                },
                {
                    "Metric ID": "em-048f6359-b612-54a9-b978-5bae94e8xxxx",
                    "Metric Name": "CrossTalk",
                    "Metric Weight": 12,
                    "Metric Negative Weight": 8,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": []
                },
                {
                    "Metric ID": "em-edff1e44-e8c2-5432-a5af-255c243axxxx",
                    "Metric Name": "DeadAir",
                    "Metric Weight": 11,
                    "Metric Negative Weight": 9,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": []
                },
                {
                    "Metric ID": "em-e911550c-f2fd-5d96-ba1f-dfa15dbexxxx",
                    "Metric Name": "Greeting Compliance Rate",
                    "Metric Weight": 12,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": [
                        {
                            "message_id": "ms-d67f1d26-abe2-5595-b3e0-1c43a9e2xxxx",
                            "justification": "",
                            "timestamp": 1749706528883
                        }
                    ]
                },
                {
                    "Metric ID": "em-167c3b4a-9324-5636-b74e-22f7ccbcxxxx",
                    "Metric Name": "Proper Sign-off",
                    "Metric Weight": 9,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": [
                        {
                            "message_id": "ms-91cce762-2f08-52f5-bb30-adfa61cbxxxx",
                            "justification": "",
                            "timestamp": 1749706645226
                        }
                    ]
                },
                {
                    "Metric ID": "em-a476a5cd-fb8c-5c48-961f-dc15089dxxxx",
                    "Metric Name": "Resolution Complaince - confirmation of Resolution provided",
                    "Metric Weight": 1,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": []
                },
                {
                    "Metric ID": "em-0098b0e1-8445-59a3-af20-3cee2cf3xxxx",
                    "Metric Name": "SRV",
                    "Metric Weight": 19,
                    "Metric Negative Weight": 13,
                    "Qualification": "NO",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": []
                },
                {
                    "Metric ID": "em-4d35387e-3e12-5904-a304-f7390ea0xxxx",
                    "Metric Name": "Static Price",
                    "Metric Weight": 3,
                    "Metric Negative Weight": 0,
                    "Qualification": "YES",
                    "isFatalError": false,
                    "triggerJustification": [],
                    "justification": [
                        {
                            "message_id": "ms-f639f959-e48d-5c89-8951-1488e25axxxx",
                            "justification": "",
                            "timestamp": 1749706624052
                        }
                    ]
                }
            ],
            "Pass Score": 40,
            "IsPassed": true
        },
        {
            "src": "korevg",
            "speechSpeed": [
                {
                    "nWords": 72,
                    "timeTaken": 21,
                    "average": 200.38,
                    "score": 10,
                    "source": "agent",
                    "sourceId": "u-1a06dfc5-2f36-5d7a-8c49-90b1952fxxxx"
                },
                {
                    "nWords": 41,
                    "timeTaken": 12,
                    "average": 205,
                    "score": 10,
                    "source": "customer",
                    "sourceId": "u-e06f717b-1c6d-5da1-aa2a-0c29000axxxx"
                }
            ],
            "Conversation ID": "c-dummy-562c2985-26ca-4f82-8cac-a5c4e5f8xxxx",
            "Conversation Start Time": "2025-06-12T05:35:16.022Z",
            "Conversation End Time": "2025-06-12T05:37:32.823Z",
            "Language": "English",
            "Duration": "136801 milliseconds",
            "Sentiment Score": 7.18,
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "agentId": "a-143ba59-7c2b-4043-91ee-23ed2540xxxx",
                    "Agent Name": "Grace Agent Agent",
                    "Agent Start Time": "2025-06-12T05:35:19.481Z",
                    "Crutch Word Score": 9.3
                }
            ],
            "Kore Evaluation Score": 68,
            "IsChurnRiskObserved": true,
            "IsEscalationObserved": false,
            "Fatal Errors": 0,
            "Taxonomy Resolution": "false"
        },
        {
            "src": "korevg",
            "speechSpeed": [
                {
                    "nWords": 72,
                    "timeTaken": 21,
                    "average": 200.38,
                    "score": 10,
                    "source": "agent",
                    "sourceId": "u-1a06dfc5-2f36-5d7a-8c49-90b1952fxxxx"
                },
                {
                    "nWords": 41,
                    "timeTaken": 12,
                    "average": 205,
                    "score": 10,
                    "source": "customer",
                    "sourceId": "u-e06f717b-1c6d-5da1-aa2a-0c29000axxxx"
                }
            ],
            "Conversation ID": "c-dummy-c5f7d725-e487-4abe-ad9a-d78e576axxxx",
            "Conversation Start Time": "2025-06-12T05:35:16.022Z",
            "Conversation End Time": "2025-06-12T05:37:32.823Z",
            "Language": "English",
            "Duration": "136801 milliseconds",
            "Sentiment Score": 7.18,
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "agentId": "a-143ba59-7c2b-4043-91ee-23ed2540xxxx",
                    "Agent Name": "Grace Agent Agent",
                    "Agent Start Time": "2025-06-12T05:35:19.481Z",
                    "Crutch Word Score": 9.3
                }
            ],
            "Kore Evaluation Score": 68,
            "IsChurnRiskObserved": true,
            "IsEscalationObserved": false,
            "Fatal Errors": 0,
            "Taxonomy Resolution": "false"
        },
        {
            "src": "korevg",
            "speechSpeed": [
                {
                    "nWords": 72,
                    "timeTaken": 21,
                    "average": 200.38,
                    "score": 10,
                    "source": "agent",
                    "sourceId": "u-1a06dfc5-2f36-5d7a-8c49-90b1952fxxxx"
                },
                {
                    "nWords": 41,
                    "timeTaken": 12,
                    "average": 205,
                    "score": 10,
                    "source": "customer",
                    "sourceId": "u-e06f717b-1c6d-5da1-aa2a-0c29000axxxx"
                }
            ],
            "Conversation ID": "c-dummy-123d0bd0-db66-4e21-996c-50125a81xxxx",
            "Conversation Start Time": "2025-06-12T05:35:16.022Z",
            "Conversation End Time": "2025-06-12T05:37:32.823Z",
            "Language": "English",
            "Duration": "136801 milliseconds",
            "Sentiment Score": 7.18,
            "Queues": [
                {
                    "Queue ID": "qu-ab7d46a-dd5c-41d8-8ce7-45302601xxxx",
                    "Queue Name": "Default Queue"
                }
            ],
            "Agents": [
                {
                    "agentId": "a-143ba59-7c2b-4043-91ee-23ed2540xxxx",
                    "Agent Name": "Grace Agent Agent",
                    "Agent Start Time": "2025-06-12T05:35:19.481Z",
                    "Crutch Word Score": 9.3
                }
            ],
            "Kore Evaluation Score": 68,
            "IsChurnRiskObserved": true,
            "IsEscalationObserved": false,
            "Fatal Errors": 0,
            "Taxonomy Resolution": "false"
        }
    ],
    "totalResults": 348,
    "hasMore": true,
    "totalPages": 35
}

```

## Response Body Parameters

| **PARAMETER**           | **DESCRIPTION**                                           | **TYPE** |
| ----------------------- | --------------------------------------------------------- | -------- |
| `src`                     | Source identifier (for example, "rtm", "korevg").                                                                  | `string`   |
| `speechSpeed`             | Speech speed data array.                     | `array`  |
| `Conversation ID`         | Unique conversation identifier.    | `string`   |
| `Conversation Start Time` | Timestamp when conversation started.           | `string`   |
| `Conversation End Time`   | Timestamp when conversation ended.             | `string`   |
| `Language`                | Language of the conversation.                                        | `string`   |
| `Duration`                | Duration of the conversation in milliseconds.             | `string`   |
| `Sentiment Score`         | Overall sentiment score.                                                 | `number`   |
| `Queues`                  | Queue information array.                       | `array`   |
| `Queue ID`                | Queue ID of the conversation.                             | `string`   |
| `Queue Name`              | The system assigns the queue name to the conversation.    | `string`   |
| `Agents`                  | An array of agents participated in the conversation.     | `string`   |
| `agentId`                 | Agent ID of the conversation.                             | `string`   |
| `Agent Name`              | Names of agents who participated in the conversation.     | `string`   |
| `Agent Start Time`        | Timestamp when the agent joined the interaction.          | `string`   |
| `Kore Evaluation Score`   | AI-calculated evaluation score for the conversation.      | `number`  |
| `IsChurnRiskObserved`     | Shows if the system detected churn risk.                  | `boolean`  |
| `IsEscalationObserved`    | Shows if the system observed an escalation.               | `boolean`  |
| `Fatal Errors`            | Number of fatal errors detected.                          | `number`  |
| `Emotions`                | Detected emotions for the conversation or agent responses.| `array`  |
| `Taxonomy Resolution`     | Taxonomy resolution status. | `string`  |
| `Sentiment Pattern`       | Sentiment pattern with start and end states. | `object`   |
| `Generated Intents`       | Array of generated intent objects.                                                 | `array`   |
| `start`                   | Sentiment at the beginning of the conversation.           | `string`   |
| `end`                     | Sentiment at the end of the conversation.                 | `string`   |
| `Customer emotions`       | Captures customer emotions with duration and proportion.  | `array`    |
| `emotion`                 | Detected emotion (for example, Patience).               | `string`   |
| `intent`                  | The primary intent of the conversation, detected or assigned by the system.                                                                               | `string` (optional)   |
| `keywords`                | List of important words or phrases extracted from the conversation for analysis.                                                                             | `array`   |
| `Sentiment`               | General sentiment classification for the conversation or agent response. Values: For example, "optimism", "neutral",                                                                            | `string`   |
| `Sentiment Score`         | Numeric score representing the overall sentiment of the conversation. Higher values indicate more positive sentiment.                                                                            | `number`   |
| `topic`                   | The overall topic or category of the conversation, used for reporting, analytics, or routing.                                                                | `string`(optional)   |
| `Speaking Rate`           | Speaking rate metrics.                                                                             | `array`   |
| `proportion`              | Emotion’s percentage share of the conversation.           | `number`  |
| `Agent emotions`          | Emotions detected specifically from the agent’s speech or messages during the conversation, with emotion type and intensity/score.                       | `array`  |
| `Sentiment Ratio`         | Ratio of positive, neutral, and negative sentiments.
           | `object`   |
| `positive`                | Percentage of positive sentiment.                         | `number`  |
| `neutral`                 | Detected emotion type. Neutral indicates emotionally balanced or calm interaction.                                                                          | `number`  |
| `negative`                | Percentage of negative sentiment.                         | `number`  |
| `Metrics`                 | Evaluation metrics array.                                                                              | `array`    |
| `Metric ID`               | Identifier for the metric.                                | `string`   |
| `Metric Name`             | Name of the metric.                                       | `string`   |
| `Metric Weight`           | Weightage for meeting the metric.                         | `number`  |
| `Metric Negative Weight`  | Penalty weight for failing the metric.                    | `number`  |
| `Qualification`           | Evaluation result (YES/NO/NA).                            | `string`   |
| `isFatalError`            | Indicates if this metric is a fatal error.                | `boolean`  |
| `triggerJustification`    | Trigger-based justifications.                             | `array`    |
| `justification`           | Evaluator-provided justifications.                        | `array`    |
| `message_id`              | Unique identifier of an individual message within a conversation (agent or customer message).                                                          | `string`    |
| `timestamp`               | The system recorded the date and time of the event or message.                                                                              | `number`    |
| `Pass Score`              | Overall pass score.                           | `number`  |
| `IsPassed`                | Indicates whether the conversation passed.                | `boolean`  |
| `Crutch Word Score`       | Score indicating the frequency or impact of crutch (filler) words used by the agent during the conversation.                                                 | `number` (optional)  |
| `Customer talk ratio percentage`     | Percentage of customer talk time.                                                                | `number`  |
| `Agent talk ratio percentage`       | Percentage of agent talk time.                                                 | `number`  |
| `Silence percentage`       | Percentage of silence time.                                                                             | `number`  |

