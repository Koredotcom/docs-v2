--8<-- "includes/automationai-api-back-link.md"

# Task Execution-Based Containment Report API

This task-wise Containment Report offers a comparative analysis of the impact of task executions on overall containment. It breaks down task-wise successes and failures by containment type, including Drop-off, Self-service, and Agent Hand-off, providing a detailed overview for better understanding and decision-making.

<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>POST and GET
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td>It’s a combination of POST and GET methods. The POST method is used to set the filters and the GET method is used to fetch data as per the set filters.
<p>
<strong>Post Method</strong>: Set filters. The response contains the API Response ID (“<em>_id</em>”) 
<code>https://{{host}}/api/public/bot/{{botID}}/taskContainmentReport?skip={{skipValue}}&limit={{limitValue}}</code>
<p>
<strong>Get Method</strong>: Use the API Response ID (“<em>_id</em>”) to get data as per the set filters.   
<code>https://{{host}}/api/public/bot/{{botID}}/taskContainmentReport/status/{{<strong>_id</strong>}}</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td><code>application/json</code>
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><code>auth: {{JWT}}</code>
<p>
</a>
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Metrics

<li>Admin Console: Not Applicable
</li>
</ul>
   </td>
  </tr>
</table>

Refer [How to generate the JWT Token](../../apis/automation/api-introduction.md#generating-the-jwt-token).

## Path Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Required
   </td>
   <td>Environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
  </tr>
  <tr>
   <td>BotID
   </td>
   <td>Required
   </td>
   <td>Bot ID or Stream ID can be accessed from the <strong>General Settings</strong> page in the application.
   </td>
  </tr>
  <tr>
   <td>_id
   </td>
   <td>Required (only for GET)
   </td>
   <td>The API Response ID returned by the POST method in the response object; Use it in the GET method to get data as per the set filters via the POST method.
   </td>
  </tr>
  <tr>
    <td>skip</td>
    <td>Optional (Only for POST)</td>
    <td>The number of messages to be skipped</td>
  </tr>
  <tr>
    <td>limit</td>
    <td>Optional (Only for POST)</td>
    <td>The number of messages to be shown on each page.</td>
  </tr>
</table>


## Sample Request for the POST Method

The following sample request shows how to retrieve task-execution based analytics data for different containment types with specific filters. You can modify the type and filters parameters to retrieve different types of analytics data as needed.

```
curl --location 'https://{{host}}/api/public/bot/{{botId}}/taskContainmentReport?skip={{skipValue}}&limit={{limitValue}}' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "filters": {
        "dateFrom": "2024-04-22",
        "dateTo": "2024-04-30T00:00:00.000Z",
        "ConversationStatus": "Active",
        "ConversationType": "Interactive",
        "AggregationType": "Daily"
    }
}'
```

## Request Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>dateFrom
   </td>
   <td>Optional
   </td>
   <td>
<ul>

<li>The start time selected for the report generation.

<li>If not provided, the system considers 7 days prior to the <strong><em>dateTo value</em></strong>.

<li>The following formats are accepted: 
<ul>
 
<li><code>>yyyy-mm-dd</code>
 
<li><code>>yyyy-mm-ddThh:mm:ss.msZ</code>
</li> 
</ul>
</li> 
</ul>
   </td>
  </tr>
  <tr>
   <td>dateTo
   </td>
   <td>Optional
   </td>
   <td>
<ul>

<li>The end time selected for the report generation.

<li>If not provided,  the system considers 7 days after the <strong><em>dateFrom </em></strong>value. If <strong><em>dateFrom</em></strong> is also not provided then it is set to <strong>Today</strong>  and the timeframe considered is the previous 7 days from Today.

<li>The following formats are accepted: 
<ul>
 
<li><code>>yyyy-mm-dd</code>
 
<li><code>>yyyy-mm-ddThh:mm:ss.msZ</code>
</li> 
</ul>

<li>The maximum or allowed time range selection is 90 days.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>includeTaskName
   </td>
   <td>Optional
   </td>
   <td>An array of strings representing task names for which the execution report is generated. 
   </td>
  </tr>
  <tr>
   <td>ConversationType
   </td>
   <td>Optional
   </td>
   <td>The following conversation types for which data is available:
<ul>

<li>Interactive</li>

<li>Non-Interactive</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>ConversationStatus
   </td>
   <td>Optional
   </td>
   <td>The current conversation status, <strong><em>Active</em></strong>, or <strong><em>Closed</em>.</strong>
   </td>
  </tr>
  <tr>
   <td>AggregationType
   </td>
   <td>Optional
   </td>
   <td>One of the following report aggregation types:
<ul>

<li><em>Daily</em>: Generates daily reports. The allowed/maximum data range selection is 30 days.

<li><em>Cumulative: </em>Generates weekly, monthly, or custom date range reports.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>tags
   </td>
   <td>Optional
   </td>
   <td>Emitted custom tags represented as an array of objects to filter the task execution data.
   </td>
  </tr>
</table>

## Sample Response for the Post Method

The response returns the API Response ID "**_id**" (as highlighted in the sample payload below). Please make a note of this value to be used in the GET request.

<pre class="code-limit-200px">
{
   "status": "IN_PROGRESS",
   "percentageComplete": 0,
   "streamId": "st-9xxxxxx9-0xx9-5xxd-8xxa-7xxxxxxxxx56",
   "jobType": "TASK_EXECUTION_CONTAINMENT_REPORT",
   "action": "QUERY",
   "countOfDockStatuses": 1,
   "createdBy": "u-exxxxxx6-6xx1-5xx5-axx4-5xxxxxxxxxd2",
   "expireAt": "2024-03-08T12:30:46.247Z",
   "statusLogs": [],
   "_id": "<b>ds-9xxxxxxd-0xx4-5xx8-axx8-axxxxxxxd083</b>",
   "lMod": "2024-03-08T12:15:46.000Z",
   "createdOn": "2024-03-08T12:15:46.253Z",
   "requestedTime": "2024-03-08T12:15:46.253Z",
   "__v": 0
}
</pre>

## Response Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>Status of the task execution. Successful execution of a task is marked as ‘<em>Success</em>‘. Any failure in executing the task, including drop-off, is marked as a ‘<em>Failure.’</em>
   </td>
  </tr>
  <tr>
   <td>percentageComplete
   </td>
   <td>The percentage of task execution completed.
   </td>
  </tr>
  <tr>
   <td>streamId
   </td>
   <td>Can be accessed from the General Settings page of the application.
   </td>
  </tr>
  <tr>
   <td>jobType
   </td>
   <td>Task Execution Containment Report.
   </td>
  </tr>
  <tr>
   <td>action
   </td>
   <td>Query action for task execution.
   </td>
  </tr>
  <tr>
   <td>countOfDockStatuses
   </td>
   <td>The number of dock statuses generated for the task execution-based report.
   </td>
  </tr>
  <tr>
   <td>createdBy
   </td>
   <td>The user ID of the end user who created the task execution-based report.
   </td>
  </tr>
  <tr>
   <td>expireAt
   </td>
   <td>Task execution expiry timestamp.
   </td>
  </tr>
  <tr>
   <td>statusLogs
   </td>
   <td>An array of status logs for the task execution.
   </td>
  </tr>
  <tr>
   <td>_id
   </td>
   <td>The API Response ID.
   </td>
  </tr>
  <tr>
   <td>lMod
   </td>
   <td>The last modified time for the task execution-based report.
   </td>
  </tr>
  <tr>
   <td>createdOn
   </td>
   <td>The task execution-based report creation date.
   </td>
  </tr>
  <tr>
   <td>requestedTime
   </td>
   <td>The time of request for the task execution-based report.
   </td>
  </tr>
  <tr>
   <td>__v
   </td>
   <td>The field is used for internal purposes. No specific significance.
   </td>
  </tr>
</table>


## Sample Request for the GET Method

The <b>_id</b> generated by the POST method, (for example,  <b><i>ds-9xxxxxxd-0xx4-5xx8-axx8-axxxxxxxd083</i></b> shown in the sample POST response) should replace <code>{{_id}}</code> for the query parameter in the below GET Method.

```
curl --location 'https://{{host}}/api/public/bot/{{botID}}/taskContainmentReport/status/{{_id}}' 
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}'
```

## Sample Response for the GET Method


```
{
   "tasksExecutionReport": {
   "total": 8,
   "data": {
   "2024-03-07": [
       {
         "totalExecution": 1,
         "totalSession": 1,
         "selfServiceSessions": 1,
         "dropOffSessions": 0,
         "agentTransferSessions": 0,
         "dateRange": "2024-03-07",
         "taskType": "dialog",
         "taskName": "Tags 1",
         "Status": "success",
         "selfServiceSessionsInPercentage": 100,
         "dropOffSessionsInPercentage": 0,
         "agentTransferSessionsInPercentage": 0
      },
      {
         "totalExecution": 2,
         "totalSession": 2,
         "selfServiceSessions": 0,
         "dropOffSessions": 0,
         "agentTransferSessions": 2,
         "dateRange": "2024-03-07",
         "taskType": "dialog",
         "taskName": "Agent Transfer",
         "Status": "success",
         "selfServiceSessionsInPercentage": 0,
         "dropOffSessionsInPercentage": 0,
         "agentTransferSessionsInPercentage": 100
       },
       {
         "totalExecution": 12,
         "totalSession": 6,
         "selfServiceSessions": 2,
         "dropOffSessions": 2,
         "agentTransferSessions": 2,
         "dateRange": "2024-03-07",
         "taskType": "dialog",
         "taskName": "Age Predictor",
         "Status": "success",
         "selfServiceSessionsInPercentage": "33.33",
         "dropOffSessionsInPercentage": "33.33",
         "agentTransferSessionsInPercentage": "33.33"
       },
       {
         "totalExecution": 1,
         "totalSession": 1,
         "selfServiceSessions": 1,
         "dropOffSessions": 0,
         "agentTransferSessions": 0,
         "dateRange": "2024-03-07",
         "taskType": "dialog",
         "taskName": "Tags 2",
         "Status": "success",
         "selfServiceSessionsInPercentage": 100,
         "dropOffSessionsInPercentage": 0,
         "agentTransferSessionsInPercentage": 0
       },
       {
         "totalExecution": 1,
         "totalSession": 1,
         "selfServiceSessions": 1,
         "dropOffSessions": 0,
         "agentTransferSessions": 0,
         "dateRange": "2024-03-07",
         "taskType": "dialog",
         "taskName": "Phone Number Verification",
         "Status": "failtask",
         "selfServiceSessionsInPercentage": 100,
         "dropOffSessionsInPercentage": 0,
         "agentTransferSessionsInPercentage": 0
       },
       {
         "totalExecution": 1,
         "totalSession": 1,
         "selfServiceSessions": 0,
         "dropOffSessions": 1,
         "agentTransferSessions": 0,
         "dateRange": "2024-03-07",
         "taskType": "dialog",
         "taskName": "Create Booking",
         "Status": "failtask",
         "selfServiceSessionsInPercentage": 0,
         "dropOffSessionsInPercentage": 100,
         "agentTransferSessionsInPercentage": 0
       },
       {
         "totalExecution": 2,
         "totalSession": 2,
         "selfServiceSessions": 0,
         "dropOffSessions": 2,
         "agentTransferSessions": 0,
         "dateRange": "2024-03-07",
         "taskType": "dialog",
         "taskName": "Age Predictor",
         "Status": "failtask",
         "selfServiceSessionsInPercentage": 0,
         "dropOffSessionsInPercentage": 100,
         "agentTransferSessionsInPercentage": 0
       },
       {
         "totalExecution": 1,
         "totalSession": 1,
         "selfServiceSessions": 1,
         "dropOffSessions": 0,
         "agentTransferSessions": 0,
         "dateRange": "2024-03-07",
         "taskType": "dialog",
         "taskName": "Currency",
         "Status": "success",
         "selfServiceSessionsInPercentage": 100,
         "dropOffSessionsInPercentage": 0,
         "agentTransferSessionsInPercentage": 0
        }
      ]
    }
  },
  "status": "SUCCESS"
}
```


## Response Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>totalExecution
   </td>
   <td>The overall count of the successful or failed tasks executed for a conversation session.
   </td>
  </tr>
  <tr>
   <td>totalSession
   </td>
   <td>Total number of conversation sessions during which the specified task is executed.  
<p>
If a task is executed more than once within a single conversation session and yields different results, the session will be counted twice. For instance, if Task 1 is performed twice in the same conversation session, with one execution being successful and the other failing, this session will be counted under both the Success and Failure categories for Task 1.
   </td>
  </tr>
  <tr>
   <td>selfServiceSessions
   </td>
   <td>Total number of conversation sessions that are marked as Self-service during which the specified task is executed (Success or Failure).
<p>
Self-service sessions refer to the conversations that the AI Agent contains.
   </td>
  </tr>
  <tr>
   <td>dropOffSessions
   </td>
   <td>Total number of conversation sessions that are marked as Drop-off during which the specified task is executed (Success or Failure).
<p>
A session is classified as <em>Drop-off</em> when the user abandons the conversation in one of the following scenarios:
<ul>

<li>Leaves the conversation abruptly without completing the task.

<li>Leaves the conversation after the task resulted in a failure.

<li>The last utterance of the user does not detect any intent.

<li>The AI Agent stops responding due to any reason.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>agentTransferSessions
   </td>
   <td>The total number of conversation sessions marked as Agent Transfer during which the specified task is executed (Success or Failure).
<p>
A session is classified as an<em> Agent Transfer</em> if the conversation leads to an agent transfer in a session.
   </td>
  </tr>
  <tr>
   <td>dateRange
   </td>
   <td>The date range based on the selected “<em>dateFrom</em>” and “<em>dateTo</em>” values.
   </td>
  </tr>
  <tr>
   <td>taskType
   </td>
   <td>The type of task executed for a conversation session. The task executed can be a Dialog, Alert task, FAQ.
   </td>
  </tr>
  <tr>
   <td>taskName
   </td>
   <td>Name of the task executed, including Dialog Tasks, Alert Tasks, and FAQs.
   </td>
  </tr>
  <tr>
   <td>Status
   </td>
   <td>Tasks that are successfully executed are marked as ‘Success’. Unsuccessful tasks, including drop-off, are marked as ‘Failure’.
   </td>
  </tr>
  <tr>
   <td>selfServiceSessionsInPercentage
   </td>
   <td>The percentage of sessions that are classified as <em>Self-Service</em> out of the total number of sessions that are displayed for a task status.
   </td>
  </tr>
  <tr>
   <td>dropOffSessionsInPercentage
   </td>
   <td>The percentage of sessions that are classified as <em>drop-off</em> out of the total number of sessions that are displayed for a task status.
   </td>
  </tr>
  <tr>
   <td>agentTransferSessionsInPercentage
   </td>
   <td>The percentage of sessions that are classified as Agent Hand-off or transfer out of the total number of sessions that are displayed for a task status.
   </td>
  </tr>
</table>

