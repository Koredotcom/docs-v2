# Performance Dashboard

After you publish the AI Agents, you can monitor its performance using the Performance dashboard. This dashboard provides insights into metrics such as the number of intents identified, tasks completed successfully, and any service or script failures that occur during interactions. You can use these insights to identify areas where your AI Agents needs improvement. For example, if you see that many intents are not identified, you can train the AI Agents for those unidentified intents.

**To view the Performance dashboard, follow the steps**: 


1. Click **Analytics** on the left navigation pane. The Analytics panel is displayed with the list of reports.

    <img src="../images/performance-dashboard-overview.png" alt="Performance Dashboard Overview" title="Performance Dashboard Overview" style="border: 1px solid gray; zoom:80%;"/>

2. Click **Performance Dashboard** under the **Automation** section of the **Analytics** panel. The **Performance Dashboard** is displayed on the right side of the page.

3. Select appropriate filters on the dashboard and click **Apply**.

    <img src="../images/performance-dashboard.png" alt="Performance Dashboard" title="Performance Dashboard" style="border: 1px solid gray; zoom:100%;">


## Performance Dashboard Metrics

The Performance Dashboard provides insights to understand the AI Agents’s NLP performance and integration metrics. The Performance Dashboard is categorized into four categories to identify how an AI Agent performs. These categories are mentioned below:


### Intent Identification Rate

This section of the dashboard provides information on the number of intents that were classified and unclassified. An intent refers to the goal the customer has in mind when typing in a question or comment. While entity refers to the modifier the customer uses to describe an issue, intent is _“What they really mean”_. To know more about intents refer here.

Below are the widgets that are used to provide insights:


<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Intent Identification Rate
   </td>
   <td>A scorecard that displays the percentage and the number of intents that were identified in a duration. It also displays the percentage increase or decrease in identifying intents from the last selected period.
   </td>
  </tr>
  <tr>
   <td>Intent Identification Trend
   </td>
   <td>A line chart that displays the total number of intents that were classified by the AI Agents versus the total number of intents that were unclassified by the AI Agents over a period of time.
   </td>
  </tr>
  <tr>
   <td>Popular Intents
   </td>
   <td>Displays a table with data insights on the number of times the AI Agents identified the given intent from the user utterances in active and closed conversations.
<p>
The following fields are displayed:
<ul>

<li><strong>Intent Name</strong>: Name of the identified intent.

<li><strong>Utterance Group</strong>: The cluster name where similar utterances are grouped to which the identified intent is mapped.

<li><strong>Count</strong>: The count of identified utterances.

<p>
<strong>Note</strong>: Clicking an intent name row displays a drill-down view of the relevant utterances, channel, user ID, Date and time, and chat history.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Popular Unidentified Utterances
   </td>
   <td>A table that displays the number of utterances that did not identify an intent. The utterances are grouped by their similarity. 
   </td>
  </tr>
</table>



### Goal Completion Rate

The goal completion metrics show how many tasks an AI Agent completes and fails within a selected time. The [failed tasks](task-execution-logs.md#failed-task) include both abandoned and incomplete tasks. The task is any interaction like Dialog, FAQs, or alerts. [Learn more.](../../administration/analytics.md#chat-history-details)

Listed below are the widgets that could help in providing information about these details:


<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Goal Completion Rate
   </td>
   <td>A scorecard that displays the percentage and the number of task executions that were successfully completed in a duration. It also displays the percentage increase or decrease in completing tasks from the last selected period.
   </td>
  </tr>
  <tr>
   <td>Goal Completion Trend
   </td>
   <td>A line chart that plots the successful and failed task executions over a period of time.
   </td>
  </tr>
  <tr>
   <td>Task Performance
   </td>
   <td>A table that provides insights into the number of successful and failed task executions per task for a selected duration.
   </td>
  </tr>
  <tr>
   <td>Failure Point Analysis
   </td>
   <td>A table that displays the number of times a task has failed at various nodes.
   </td>
  </tr>
</table>



### API Execution Rate

This section of the dashboard provides information on the number of APIs that were successfully executed and failed. While configuring a dialog task often there are needs to use a Service node that is used to make REST or SOAP requests to a third party web-services. To know more about service nodes refer here.

Below are the widgets that are used to provide information about API performance:


<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>API Performance Rate
   </td>
   <td>A scorecard that displays the percentage and the number of service calls that were executed successfully. It also displays the percentage increase or decrease of APIs that were executed successfully from the last selected period.
   </td>
  </tr>
  <tr>
   <td>Service Execution Trend
   </td>
   <td>A line chart that plots the trend of successful and failed service execution over a period of time.
   </td>
  </tr>
  <tr>
   <td>Service Performance
   </td>
   <td>A table that displays the number of times a service node is executed, its status, and the average response time of executing the API.
   </td>
  </tr>
</table>



### Script Execution Rate

This section of the dashboard provides information on the number of Scripts that were successfully executed and failed. A **Script** allows you to write JavaScript code in a dialog task. To know more about script nodes please refer here.

Below are the widgets that are used to provide information about Script performance.


<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Script Performance Rate
   </td>
   <td>A scorecard that displays the percentage and the number of scripts that were executed successfully. It also displays the percentage increase or decrease of Scripts that were executed successfully from the last selected period.
   </td>
  </tr>
  <tr>
   <td>Script Execution Trend
   </td>
   <td>A line chart that plots the trend of successful and failed script execution over a period of time.
   </td>
  </tr>
  <tr>
   <td>Script Performance
   </td>
   <td>A table that displays the number of times a script node is executed, its status, and the average response time executing the script.
   </td>
  </tr>
</table>



## Filter Criteria

The Performance Analytics Dashboard data can be viewed based on specific filter criteria that can be selected. Learn more.