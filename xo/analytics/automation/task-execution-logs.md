# Task Execution Logs

The **Task Execution Logs** feature helps you gain in-depth insights into the task execution-related data and assess your AI Agent’s performance in executing tasks. 

**To view the Task Execution Logs dashboard, follow the steps**: 



1. Click **Analytics** on the left navigation pane. The Analytics panel is displayed with the list of reports.
    
    <img src="../images/navigating-to-task-execution-logs.png" alt="Navigating to Task Execution Logs" title="Navigating to Task Execution Logs" style="border: 1px solid gray; zoom:80%;"/>


2. Click the **Task Execution Logs** under the **Automation** section of the **Analytics** panel. The **Task Execution Logs dashboard** is displayed on the right side of the page.
3. Select appropriate filters on the dashboard and click **Apply**.

The **Task Execution Logs** page shows information specific to task execution in the following sections:

* **Failed Task**: Indicates the number of unsuccessful tasks.
* **API Calls**: Displays all the Service node and Webhook node executions-related data, and the number of failed services during AI Agents interactions.
* **Script Execution**: Displays analytics data for all the script node executions and the number of failed scripts during AI Agents interactions.
* **Debug Log**: Custom Debug logs include user conversations from across all channels for analyzing your AI Agents.
* **Pinned**: Pinned Task Execution Logs records. Specific records are pinned to highlight them for easy access and viewing.


## Task Execution Logs Fields

The **Task Execution Logs** page displays the following fields specific to task execution:


### Failed Task

In a scenario where all the user utterances are successfully mapped to an intent, but the task cannot be completed for some reason, then such utterances are listed under this tab. You can group them based on task and failure types to analyze and solve issues with the AI Agents.

See the following table and the Features section to know more:

<img src="../images/failed-tasks.png" alt="Failed Tasks" title="Failed Tasks" style="border: 1px solid gray; zoom:80%;"/>


### Failed Task – Type of Issues

Different types of issues that occur during a Failed Task are listed as follows:



* Task aborted by user
* Alternate task initiated
* Chat Interface refreshed
* Human-agent transfer
* Authorization attempt failure – Max attempts reached
* Incorrect entity failure – Max attempts reached
* Script failure
* Service failure
* Inactivity or External Events (from ver8.0) – when the conversation session and as a result, the in-progress task is closed due to inactivity or external events.

**Description of Failed Task Fields**

The following table lists the fields on the **Failed Task** tab with descriptions:


<table>
  <tr>
   <td><strong>FIELDS</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Utterances
   </td>
   <td>The utterances are successfully mapped to an intent, but still, the task failed due to some issue. The details in the tab are grouped by utterances based on similarity by default. To turn off grouping by utterance, click the <strong>Utterances </strong>header and turn off the <strong>Group by Utterances</strong> option.
   </td>
  </tr>
  <tr>
   <td>Task Name
   </td>
   <td>The task that is identified for the user utterance. To turn on grouping by task name, click the <strong>Task Name </strong>header and enable the <strong>Group by Task </strong>option.
   </td>
  </tr>
  <tr>
   <td>Failure Point
   </td>
   <td>Nodes or points in the task execution journey where the failure occurred, resulting in the task cancellation or user drop. Click an entry to view the complete conversation for that session with markers to identify the intent detection utterance and the failure/drop-out point. Depending on the task type, clicking Failure Point shows more details.
   </td>
  </tr>
  <tr>
   <td>Type of Issue
   </td>
   <td>Shows the reason for failure in case of Task Failure records.
   </td>
  </tr>
  <tr>
   <td>UserID
   </td>
   <td>The UserID of the end user related to the conversation. You can view the metrics based on either <strong>Kore User ID</strong> or <strong>Channel User ID</strong>.
<p>
Channel-specific IDs are shown only for the users who have interacted with the AI Agents during the selected period.
   </td>
  </tr>
  <tr>
   <td>Language
   </td>
   <td>The language in which the conversation occurred.
<p>
If it is a multi-lingual AI Agents, you can select specific languages to filter the conversations that occurred in those languages. The page shows the conversations that occurred in all enabled languages by default.
   </td>
  </tr>
  <tr>
   <td>Date & Time
   </td>
   <td>The date and time of the chat. You can sort the data by either <strong>Newest to Oldest</strong> or <strong>Oldest to Newest</strong>.
   </td>
  </tr>
</table>



### Performance

Developers can monitor all the scripts and API services across the AI Agent’s tasks from a single window. The performance tab displays information related to the backend performance of the AI Agent in two sections, namely **API Calls** and **Script Execution**. The platform stores the following meta-information:


### API Calls

The API Calls section provides information on the API calls execution performance based on the following metrics:



* Node name, type, and task name
* Success %
* The total number of calls with 200 responses and the total number of calls with a non-200 response. You can view the actual response code from the details page that opens when you click the service row.
* Average Response times

**Description of the API Calls Fields**

The following table lists the fields in the API Calls section with their descriptions:


<table>
  <tr>
   <td><strong>FIELDS</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Node Name
   </td>
   <td>The name of the service or script or Webhook within the task that was executed in response to the user utterance. To turn on grouping by components to which these scripts or services belong, click the <strong>Node Name </strong>header and turn on the <strong>Group by NodeName </strong>option.
   </td>
  </tr>
  <tr>
   <td>Type
   </td>
   <td>Shows whether it is a script or service or Webhook.
<p>
Webhook details are included from ver 7.0.
   </td>
  </tr>
  <tr>
   <td>Task Name
   </td>
   <td>The task that is identified for the user utterance. To turn on grouping by task name, click the <strong>Task Name </strong>header and enable the <strong>Group by Task </strong>option.
   </td>
  </tr>
  <tr>
   <td>Success%
   </td>
   <td>The percentage of the service or script runs that got executed successfully.
   </td>
  </tr>
  <tr>
   <td>2XX Responses
   </td>
   <td>The percentage of the service or script runs that returned a 2xx response.
   </td>
  </tr>
  <tr>
   <td>Non 2XX Responses
   </td>
   <td>The percentage of the service or script runs that returned a non-2xx response.
   </td>
  </tr>
  <tr>
   <td>Avg Response Time
   </td>
   <td>The average response time of the script or service in the total number of runs.
<p>
This can be sorted from <strong>High to Low</strong> or<strong> Low to High</strong> under the <strong>Performance </strong>tab.
   </td>
  </tr>
  <tr>
   <td>Status Code
   </td>
   <td>Filter service executions based on the status codes. From the <strong>More Filters </strong>drop-down menu > <strong>Status Code</strong>, you can choose one or more status codes:
<ul>

<li>Success status code: 200 

<li>Non-success status code: 304, 400, 401, 403, 404, 408, 409, 500, 502, 503, and 504

<p>

<img src="../images/more-filters.png" alt="More Filters" title="Returning Users" style="border: 1px solid gray; zoom:80%;"/>


</li>
</ul>
   </td>
  </tr>
</table>



### Script Execution

The Script Execution section provides information on the AI Agent’s script execution performance based on the following metrics:



* Node name and task name
* Success %
* Average Response times
* Appropriate alerts if a script or a service is failing consecutively

**Description of the Script Execution Fields**

The following table lists the fields in the Script Execution section with their descriptions:


<table>
  <tr>
   <td><strong>FIELDS</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Node Name
   </td>
   <td>The name of the service or script or Webhook within the task that was executed in response to the user utterance. To turn on grouping by components to which these scripts or services belong, click the <strong>Node Name </strong>header and turn on the <strong>Group by NodeName </strong>option.
   </td>
  </tr>
  <tr>
   <td>Task Name
   </td>
   <td>The task that is identified for the user utterance. To turn on grouping by task name, click the <strong>Task Name </strong>header and enable the <strong>Group by Task </strong>option.
   </td>
  </tr>
  <tr>
   <td>Success%
   </td>
   <td>The percentage of the service or script runs that got executed successfully.
   </td>
  </tr>
  <tr>
   <td>Avg Response Time
   </td>
   <td>The average response time of the script or service in the total number of runs.
<p>
This can be sorted from <strong>High to Low</strong> or<strong> Low to High</strong> under the <strong>Performance </strong>tab.
   </td>
  </tr>
</table>

### Debug Log

Any custom debug statements that you entered in the Script node using the script `koreDebugger.log("debug statement>")`are displayed on this tab. Debug statements should be in a string format. The logs include the user conversation from across all channels. You can use them for AI Agents analysis, especially in case of failures during user interaction.

The details include the following:


* The actual statement that you have defined at the time of AI Agents definition.
* Date and time of logging
* Channel
* User ID (along with channel-specific ID)
* Language of interaction
* Task name, if available

You can also view the details of the chat history associated with the session. To view more details, follow the steps:



1. Click a logged record.
2. On the corresponding window, you can find the **Details** and **Chat History** tabs.
3. Under the **Details** tab, you can find the _task name_, _channel_, _language_, and _flow_.
4. Click the **Chat History** tab. You can find the chat transcript where the log is recorded.
    1. If the debug log is generated from an AI Agent message, you are navigated to that specific message in the chat transcript.
    2. If the debug log is not part of the AI Agents message, you are navigated to the latest message added before the debug statement.

For universal AI Agents, the debug statements from the universal and linked AI Agents are included in the logs. The debug logs also include the error messages related to  BotKit, for example, when the platform could not reach the BotKit or when the BotKit did not acknowledge the message sent by the platform. The message includes details like the <code><em>&lt;endpoint></em>, <em>&lt;error code></em>,</code> and <code><em>&lt;response time>.</em></code>

**Description of Debug Log Fields**

The following table lists the fields on the Debug Log tab with descriptions:


<table>
  <tr>
   <td><strong>FIELDS</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Log
   </td>
   <td>Description of the debug log. For example, getIndex is not defined.
   </td>
  </tr>
  <tr>
   <td>Task Name
   </td>
   <td>The task that is identified for the user utterance. To turn on grouping by task name, click the <strong>Task Name </strong>header and enable the <strong>Group by Task </strong>option.
   </td>
  </tr>
  <tr>
   <td>Debug Point 
   </td>
   <td>The point or node in the conversation where the error is identified. For example, buildDataForCarousel
   </td>
  </tr>
  <tr>
   <td>Channel
   </td>
   <td>A specific channel where the conversation occurred.
   </td>
  </tr>
  <tr>
   <td>Language
   </td>
   <td>The language in which the conversation occurred.
<p>
If it is a multi-lingual AI Agents, you can select specific languages to filter the conversations that occurred in those languages. The page shows the conversations that occurred in all enabled languages by default.
   </td>
  </tr>
  <tr>
   <td>UserID
   </td>
   <td>The UserID of the end user related to the conversation. You can view the metrics based on either <strong>Kore User ID</strong> or <strong>Channel User ID</strong>.
<p>
Channel-specific IDs are shown only for the users who have interacted with the AI Agents during the selected period.
   </td>
  </tr>
  <tr>
   <td>Date & Time
   </td>
   <td>The date and time of the chat. You can sort the data by either <strong>Newest to Oldest</strong> or <strong>Oldest to Newest</strong>.
   </td>
  </tr>
</table>



### Pinned

Any records from the **Failed Tasks**, **API Calls**, and **Script Execution** sections that are pinned are displayed here. The fields available in the Pinned section under **Task Execution Logs** are listed here as well. However, they pertain to Task Execution Logs. Learn more.


### Storage Limitations

The platform imposes restrictions on the number of log statements retained per AI Agents. The limit is a combination of volume and period:



* Only the latest 700 statements per AI Agents are stored.
* Statements older than 7 days are removed.


## Task Execution Logs Analysis

The following sections describe more about the options available on the Task Execution Logs page and the analysis of the records captured here.


### Features

The following list details the features available for Task Execution Logs including Failed Tasks, API Calls, Script Execution, and Debug Log.

* You can filter the information based on various criteria such as User Utterances, Intent, user ID (Kore user ID or channel-specific unique ID), date period, channel of use, language, and so on. You can also filter records based on multiple custom tags. See Filter Criteria to know more.
* Complete meta-information is stored for later analysis, including the original user utterance, the channel of communication, entities extracted (if any), custom tags applied, and detailed Task Execution Logs.
* Any important record you want to mark, track later, or both can be pinned which appears on the **Pinned** tab.
* The sorting feature is available for Date and Time (Oldest to Newest, Newest to Oldest). You can export the insights data as a CSV file.


### Fields Matrix

The following matrix shows the availability of fields on each tab of the Task Execution Log dashboard:


<table>
  <tr>
   <td><strong>FIELD</strong>
   </td>
   <td><strong>FAILED TASKS</strong>
   </td>
   <td><strong>API CALLS</strong>
   </td>
   <td><strong>SCRIPT EXECUTION</strong>
   </td>
   <td><strong>PINNED</strong>
   </td>
   <td><strong>DEBUG LOG</strong>
   </td>
  </tr>
  <tr>
   <td>Utterances
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Intent
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Traits
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>UserID
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Language
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Date & Time
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Prompt Type
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Task Name
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Node Name
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Failure Point
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Type of Issue
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Type
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Total Runs
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Success%
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>2XX Responses
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Non 2XX Responses
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Avg Response Time
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Log
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Debug Point
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Channel
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
  </tr>
</table>
