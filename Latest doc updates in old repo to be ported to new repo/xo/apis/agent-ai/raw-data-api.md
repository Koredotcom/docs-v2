--8<-- "includes/agentai-api-back-link.md"

# Raw Data API v2

This updated version of the Raw Data API offers the following additional conversation data for deeper insights into Agent AI interactions and conversation flows:

* Feedback (reason code and feedback text in addition to like/dislike) from the agent.
* Complete generated answers with feedback
* Comprehensive agent activity tracking
* Full end-user utterances
* Dialog task execution details
* Agent search bar activity timing
* Name of the queue(XOCC desktop) involved in the conversation
* Number of times an agent uses the scroll up and scroll down buttons
* Names of the URLs an agent clicks 
* Total number of words or phrases suggested to the agent
* Total number of words or phrases accepted by the agent
* Total number of words or phrases entered by the agent
* Total number of words suggested for correction by the agent
* Total number of autocorrected words accepted by the agent
* Conversation Summary existence and agents reading or scrolling through it
* Filters such as Agent ID, Channel, Session ID, and Conversation ID
* Custom and Assist tab details
* Playbooks data: playbook type (primary and dynamic), stage and step details, scenario completion status, configuration-based triggers, step execution order, and step adherence validation
* Agent Coaching data: triggered coaching events, actions, and action adherence details
* Agentic feedback submitted by agents  

    !!! note
        
        Add the ```<code>&includeAgenticData=true</code>``` flag at the end of the cURL command to retrieve the Agentic feedback data.

| **Field**        | **Value**                                                                                                                                                                                                                       |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Method           | GET, POST                    <br>**Note**: Use GET for complete data, POST for filtered data.                                                                                                                          |
| Endpoint         | `https://{{host}}/agentassist/api/v1/public/{{streamid}}/v2/agentassistinteractions?from=YYYY-MM-DD-HH24:mm:SS&to=YYYY-MM-DD-HH24:mm:SS&offset=NNNNN&limit=0..100`                                                             |
| Content Type     | application/json                                                                                                                                                                                                                |
| Authorization    | auth: {{JWT}}<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token){:target="_blank"} {:target="_blank"}                                                                                                              |
| API Scope        | AgentAssist Analytics<br>See [Associate API Scopes](../automation/api-introduction.md#associating-api-scopes){:target="_blank"}                                                                                                                                                                                                           |

## Query Parameters

| PARAMETER                 | DESCRIPTION                                                                 | MANDATE  |
|----------------------------|-----------------------------------------------------------------------------|----------|
| from                       | Start date and time of the interactions in `YYYY-MM-DD HH24:mm:SS` format. | Required |
| to                         | End date and time of the interactions in `YYYY-MM-DD HH24:mm:SS` format.   | Required |
| includeAgenticData=true    | Include this flag to retrieve `agenticActivities` data.                    | Optional |


## Headers Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>MANDATE</strong>
   </td>
  </tr>
  <tr>
   <td>accountId
   </td>
   <td>The account ID associated with the API request.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>auth
   </td>
   <td>Authentication token in the format Bearer &lt;token>.
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Request

```
curl --location --max-time 15 --request GET '[https://{{host}}/agentassist/api/v1/public/st-eef6ef35-35e5-52d7-99d6-1e8ab7fxxxxxxx/agentassistinteractions?from=2026-02-25&to=2026-02-25&includeAgenticData=true'](https://staging-xo.korebots.com/agentassist/api/v1/public/st-eef6ef35-35e5-52d7-99d6-1e8ab7faa026/v2/agentassistinteractions?from=2026-02-25&to=2026-02-25&includeAgenticData=true%27) \ \
--header 'accountId: 664b33a620bd0892e[xxxxxxx](https://staging-xo.korebots.com/agentassist/api/v1/public/st-eef6ef35-35e5-52d7-99d6-1e8ab7faa026/v2/agentassistinteractions?from=2026-02-25&to=2026-02-25&includeAgenticData=true%27)' \ \
--header 'auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLTc0MmVmNjE1LTQ0MjUtNTRjNi1iMjgyLTQxMzAwOWI1YWJhOCJ9.CO0p0jJkVGsptm3ap2SIJrtImsOZVudIZkgR[xxxxxxx](https://staging-xo.korebots.com/agentassist/api/v1/public/st-eef6ef35-35e5-52d7-99d6-1e8ab7faa026/v2/agentassistinteractions?from=2026-02-25&to=2026-02-25&includeAgenticData=true%27)' \ \
--header 'Content-Type: application/json' \ \
--data '{

  "sessionIds":["685bc2a0b74c8d12b[xxxxxxx](https://staging-xo.korebots.com/agentassist/api/v1/public/st-eef6ef35-35e5-52d7-99d6-1e8ab7faa026/v2/agentassistinteractions?from=2026-02-25&to=2026-02-25&includeAgenticData=true%27)"]

}'

```

## Request Body Parameters

| **PARAMETER** | **DESCRIPTION**                                                                 | **MANDATE** |
|---------------|----------------------------------------------------------------------------------|-------------|
|`sessionIds`|Array of session IDs to filter specific AI Agent sessions.|Optional|

## Sample Response

```
"numResults": 3,
  "hasMore": false,
  "data": [
    {
      "conversationID": "conv-XXXXXXX",
      "botSessionID": "session-XXXXXXX",
      "channel": "chat",
      "segmentID": "ac-11111111-2222-3333-4444-555555555555",

      "agent": {
        "firstName": "REDACTED",
        "lastName": "REDACTED",
        "email": "redacted@example.com",
        "name": "REDACTED AGENT",
        "agentId": "agent-XXXX"
      },

      "tags": [
        {
          "type": "message",
          "name": "intent",
          "value": "refund_request",
          "messageID": "ms-aaaa1111-bbbb-2222-cccc-333333333333",
          "createdAt": "2026-02-25T09:33:25.937Z"
        }
      ],

      "segmentStartTime": "2026-02-25T09:33:10.120Z",
      "segmentEndTime": "2026-02-25T09:36:02.880Z",

      "agentActions": [
        {
          "actionType": "SearchBarEntry",
          "action": {
            "searchPhrase": "[REDACTED_QUERY]",
            "typingStartTime": "2026-02-25T09:33:30.120Z",
            "executionStartTime": "2026-02-25T09:33:30.500Z",
            "displayTime": "2026-02-25T09:33:32.000Z",
            "suggestionsShown": ["Suggestion 1", "Suggestion 2"],
            "suggestionUsed": 1,
            "phraseInput": "[REDACTED_INPUT]",
            "correctionsPresented": 2,
            "correctionsAccepted": 1,
            "countDisplayedAnswers": {
              "countDialogTasks": 1,
              "countFaqs": 0,
              "countAnswers": 1,
              "countFiles": 0,
              "countWebPages": 0,
              "countFromNonNativeDataSource": 0
            },
            "suggestions": {
              "dialogs": [
                { "name": "Cancel Account" }
              ],
              "answers": [
                {
                  "content": "[REDACTED_GENERATED_ANSWER]",
                  "positionId": "dg-1234567890",
                  "sources": [
                    {
                      "title": "Refund Policy",
                      "url": "https://example.com/refund"
                    }
                  ],
                  "internalFlag": false
                }
              ]
            }
          },
          "used": [
            {
              "targetType": "Answer",
              "target": {
                "answer": {
                  "status": "Sent",
                  "usedTime": "2026-02-25T09:33:40.000Z",
                  "showMoreClicked": false,
                  "answerLinkClicked": [],
                  "internalInfoMoreClicked": false,
                  "positionId": "dg-1234567890",
                  "feedback": {
                    "response": "up",
                    "reasonCode": ["Correct Intent"],
                    "comment": "[REDACTED]"
                  }
                }
              }
            }
          ]
        }
      ],

      "proActiveSuggestions": [
        {
          "utterance": "[REDACTED_CUSTOMER_UTTERANCE]",
          "suggestions": {
            "dialogs": [],
            "answers": []
          },
          "displayTime": "2026-02-25T09:33:20.000Z",
          "countDisplayedAnswers": {
            "countDialogTasks": 0,
            "countFaqs": 0,
            "countAnswers": 1,
            "countFiles": 0,
            "countWebPages": 0,
            "countFromNonNativeDataSource": 0
          },
          "used": []
        }
      ],

      "queueInfo": {
        "queueId": "qu-XXXX",
        "queueName": "SupportQueue"
      },

      "countScrollUp": 2,
      "countScrollDn": 3,
      "isWelcomeMsgRead": true,
      "linksClicked": [
        {
          "url": "https://example.com/help",
          "timestamp": "2026-02-25T09:34:00.000Z"
        }
      ],

      "playbookRuntimeData": [
        {
          "_id": "playbookRuntime-XXXX",
          "playbookId": "acl-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
          "type": "primary",
          "triggerType": "auto",
          "language": "en",
          "order": "sequential",
          "openedAt": "2026-02-25T09:33:15.221Z",
          "closedAt": "2026-02-25T09:34:03.254Z",
          "adheredSteps": 5,
          "adherenceRate": 100,
          "stages": [],
          "totalStages": { "stage-1": 3 }
        }
      ],

      "coachingRuntimeData": [
        {
          "_id": "coachingRuntime-XXXX",
          "ruleId": "acr-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
          "ruleName": "Greeting Compliance",
          "messageId": "ms-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
          "triggeredAt": "2026-02-25T09:33:25.430Z",
          "actionType": "nudge",
          "actionId": "action-XXXX",
          "expression": "positive",
          "message": {
            "title": "Use Standard Greeting",
            "body": "[REDACTED]"
          },
          "emails": [],
          "adherence": {
            "criteria": "Greeting template used"
          },
          "isAdhered": true,
          "adheredAt": "2026-02-25T09:33:42.430Z"
        }
      ],

      "agenticActivities": [
        {
          "utterance": "[REDACTED_CUSTOMER_UTTERANCE]",
          "requestId": "aa-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
          "requestTime": "2026-02-25T09:33:20.000Z",
          "reqStatus": "200",
          "response": [
            { "type": "suggestion", "content": "[REDACTED_RESPONSE]" }
          ],
          "responseTime": "2026-02-25T09:33:21.200Z",
          "resStatus": 200,
          "sessionInfo": {
            "botSessionID": "session-XXXXXXX"
          },
          "participantId": "participant-XXXX",
          "streaming": false,
          "usageDetails": {
            "usedType": "send"
          },
          "feedback": {
            "response": "up"
          }
        }
      ]
    },

    { "conversationID": "conv-XXXXXXX-2", "botSessionID": "session-XXXXXXX", "channel": "chat", "segmentID": "ac-22222222-3333-4444-5555-666666666666", "agent": { "agentId": "agent-XXXX" }, "tags": [], "segmentStartTime": "2026-02-25T10:00:00.000Z", "segmentEndTime": "2026-02-25T10:05:00.000Z", "agentActions": [], "proActiveSuggestions": [], "queueInfo": { "queueId": "qu-XXXX", "queueName": "SupportQueue" }, "countScrollUp": 0, "countScrollDn": 0, "isWelcomeMsgRead": true, "linksClicked": [], "playbookRuntimeData": [], "coachingRuntimeData": [], "agenticActivities": [] },

    { "conversationID": "conv-XXXXXXX-3", "botSessionID": "session-XXXXXXX", "channel": "chat", "segmentID": "ac-33333333-4444-5555-6666-777777777777", "agent": { "agentId": "agent-XXXX" }, "tags": [], "segmentStartTime": "2026-02-25T11:00:00.000Z", "segmentEndTime": "2026-02-25T11:02:00.000Z", "agentActions": [], "proActiveSuggestions": [], "queueInfo": { "queueId": "qu-XXXX", "queueName": "SupportQueue" }, "countScrollUp": 0, "countScrollDn": 0, "isWelcomeMsgRead": false, "linksClicked": [], "playbookRuntimeData": [], "coachingRuntimeData": [], "agenticActivities": [] }
  ]
}

```

## Response Body Parameters

| PARAMETER | TYPE AND FORMAT | DESCRIPTION AND EXAMPLE |
|------------|----------------|--------------------------|
| numResults | Integer | Number of results sent in this response. |
| hasMore | Boolean (True / False) | Indicates if more pages are available. Example: `false` |
| data | Array of segment objects | Each segment represents a portion of a conversation handled by one primary agent. |
| data[].conversationID | String | Unique ID of the conversation (from customer). |
| data[].botSessionID | Alphanumeric string | Unique session ID (from Kore). Example: `667fc3b587b5fd0fbf97d4de` |
| data[].channel | String | Channel name (from customer). Example: `chat` |
| data[].segmentID | Type-prefixed UUID | Unique segment ID prefixed with `ac-`. Example: `ac-de166b2-1e14-4141-9061-9bca0203b068` |
| data[].agent | Object | Primary agent servicing this segment. All fields optional except `agentId`. |
| data[].agent.firstName | String | Agent first name. Example: `John` |
| data[].agent.lastName | String | Agent last name. Example: `Smith` |
| data[].agent.email | Valid email string | Agent email address. Example: `john.smith@example.com` |
| data[].agent.name | String | Agent full name. Example: `John Smith` |
| data[].agent.agentId | String | Unique agent ID. Example: `jsmith01` |
| data[].tags | Array of tag objects | Tags emitted by AI Agent during this segment. |
| data[].tags[].type | String | Tag type: `user`, `message`, or `session`. |
| data[].tags[].name | String | Tag key (defined by AI Agent developer). |
| data[].tags[].value | String | Tag value. |
| data[].tags[].messageID | Type-prefixed UUID | Message ID prefixed with `ms-`. Example: `ms-de166b2-1e14-4141-9061-9bca0203b068` |
| data[].tags[].createdAt | Date: YYYY-MM-DDTHH24:mm:SS.NNNZ | UTC timestamp when tag was emitted. Example: `2024-06-29T08:37:35.937Z` |
| data[].segmentStartTime | Date (UTC) | Segment start time. Example: `2024-06-29T08:37:35.937Z` |
| data[].segmentEndTime | Date (UTC) | Segment end time. Example: `2024-06-29T08:37:35.937Z` |
| data[].agentActions | Array of objects | Agent actions (Search or DialogTask execution). |
| data[].agentActions[].actionType | String | Action type. Example: `SearchBarEntry`, `LibrarySelection` |
| data[].agentActions[].action | Object | Details of the search attempt (SearchBarEntry type). |
| data[].agentActions[].used | Array of objects | Objects used (Sent, Copied, Executed, Feedback, Clicked). |
| data[].agentActions[].used[].targetType | String | Type of used object. Example: `DialogTask`, `FAQ`, `Answer`, `File`, `WebPage`, `GeneralDataSource` |
| data[].agentActions[].used[].target | Object | Details of DialogTask or data source used. |
| data[].proActiveSuggestions | Array of objects | Suggestions proactively shown by Agent AI. |
| data[].proActiveSuggestions[].utterance | String | Customer utterance (redacted if enabled). Example: `What is my account balance?` |
| data[].proActiveSuggestions[].displayTime | Date (UTC) | Time suggestions were displayed. |
| data[].proActiveSuggestions[].countDisplayedAnswers | Object | Count of suggestions displayed by type. |
| data[].proActiveSuggestions[].countDisplayedAnswers.countDialogTasks | Integer | Number of DialogTasks suggested. |
| data[].proActiveSuggestions[].countDisplayedAnswers.countFaqs | Integer | Number of FAQs suggested. |
| data[].proActiveSuggestions[].countDisplayedAnswers.countAnswers | Integer | Number of Answers suggested. |
| data[].proActiveSuggestions[].countDisplayedAnswers.countFiles | Integer | Number of Files suggested. |
| data[].proActiveSuggestions[].countDisplayedAnswers.countWebPages | Integer | Number of Web pages suggested. |
| data[].proActiveSuggestions[].countDisplayedAnswers.countFromNonNativeDataSource | Integer | Suggestions from non-native data sources. |
| data[].proActiveSuggestions[].used | Array | Suggestions used (Sent, Copied, etc.). |
| data[].segment.playbookRuntimeData | Object | Playbook runtime execution data. |
| data[].playbookRuntimeData.playbookId | String | Playbook ID. Example: `acl-8eb5a68d-...` |
| data[].playbookRuntimeData.type | String | Playbook type. Example: `primary` |
| data[].playbookRuntimeData.triggerType | String | Trigger source. Example: `auto` |
| data[].playbookRuntimeData.openedAt | Date (UTC) | Playbook start time. |
| data[].playbookRuntimeData.closedAt | Date (UTC) | Playbook end time. |
| data[].playbookRuntimeData.adheredSteps | Integer | Steps adhered to. |
| data[].playbookRuntimeData.adherenceRate | Percentage | Overall adherence rate. |
| data[].coachingRuntimeData | Array | Coaching rule execution details. |
| data[].coachingRuntimeData.ruleId | String | Coaching rule ID. |
| data[].coachingRuntimeData.ruleName | String | Coaching rule name. |
| data[].coachingRuntimeData.triggeredAt | Date (UTC) | Time rule triggered. |
| data[].coachingRuntimeData.actionType | String | Coaching action type. Example: `nudge`, `hint` |
| data[].coachingRuntimeData.isAdhered | Boolean | Whether agent adhered. Example: `true` |
| data[].agenticActivities | Array | Agent AI request/response activity details. |
| data[].agenticActivities.utterance | String | User utterance sent to Agent AI. |
| data[].agenticActivities.requestId | String | Unique request ID. |
| data[].agenticActivities.reqStatus | String | HTTP request status. Example: `200` |
| data[].agenticActivities.responseTime | Date (UTC) | Time response received. |
| data[].agenticActivities.resStatus | Integer | HTTP response status code. Example: `200` |
| data[].agenticActivities.streaming | Boolean | Indicates if streaming was enabled. |
| queueInfo.queueId | String | Queue ID. Example: `qu-2335c1-8et33-33535-133535` |
| queueInfo.queueName | String | Queue name. Example: `CreditCard` |
| countScrollUp | Integer | Number of scroll-up clicks. |
| countScrollDn | Integer | Number of scroll-down clicks. |
| isWelcomeMsgRead | Boolean | Indicates if Welcome Message was read. |
| linksClicked | String | URLs clicked with timestamps. |