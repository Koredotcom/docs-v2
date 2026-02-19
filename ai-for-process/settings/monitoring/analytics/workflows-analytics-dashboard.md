# Workflows Performance Analytics

The **Workflows Analytics Dashboard** offers a unified and comprehensive workflow for tracking and analyzing the performance of the deployed workflows and their specific versions within your account.

It provides valuable insights into metrics such as successful or failed workflow runs, **Average Response Times (ART)** to requests, and event-based node executions for all node types. [Learn more](../../../workflows/workflow-builder/manage-flow-nodes.md) about managing nodes in a workflow.

Key metrics are displayed intuitively using visually engaging graphs and dynamic widgets, which update based on the selected filters. 

**Key Features**

* **Global timeline Filters** provide a comprehensive view of performance across all workflows in your account. [Learn more](../analytics/workflows-analytics-dashboard.md#global-timeline-filters).

* **Workflow Performance Filters** offer a detailed analysis of individual runs, response times, and node executions during the selected period for the selected workflow and version. [Learn more](../analytics/workflows-analytics-dashboard.md#workflow-performance-filters).

* An **expanded view of analytics widgets** include filters to customize data display. [Learn more](../analytics/workflows-analytics-dashboard.md#expanded-widget-view).
* Hovering over a data point on the **dynamic and interactive line graph** reveals the real-time information for that specific period, providing a focused view of workflow performance.
* You can obtain **hourly performance analysis** for a workflow on a specific day or review **daily performance trends** when selecting a date range filter.
* Click the **Refresh icon** shown below to ensure you have the latest dashboard data available to make informed decisions.
<img src="../images/refresh-icon.png" alt="refresh icon" title="refresh icon" style="border: 1px solid gray; zoom:75%;">

* The dashboard offers **Tooltip** support for each widget to get quick summaries of the monitored metrics.
* You can analyze nodes execution data for a workflow based on the **rate limit** subscription for your account. Learn more.

**Best Practices**

* Make data-driven decisions by tracking runs and response times for all and specific workflows in the selected period.
* Analyze event-based node executions to track node types, execution frequency, and total events processed.
* Apply time-based filters at both global and widget levels for focused and accurate analysis.
* Compare workflow performance over time by analyzing successful versus failed runs, and identifying failure patterns.
* Prioritize node execution based on rate limits subscription for your account.

## Access the Workflows Analytics Dashboard

To access the **Workflows Analytics** dashboard, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings" style="border: 1px solid gray; zoom:75%;">

2. On the left menu, select **Monitoring** > **Analytics**.
3. Click the **Workflows Analytics** tab on the right-hand side screen.

The system loads the **Workflows Analytics** dashboard with data for the last 7 days, which is the **default time range selection**. You can select the required period to generate data.

## Key Performance Metrics

The **Workflows Analytics** Dashboard supports the following account and workflow-specific metrics to provide actionable insights.

### Account-Level Metrics

The following metrics summarize the counts for workflows, runs, and node executions at your account level:

* **Number of workflows**: The total number of workflows deployed within your account during the selected period. This includes workflows and all their versions managed by all the users of your account. 

    To view data for a specific workflow and its version deployed in your account, use the **Workflows Performance** filters. [Learn more](../analytics/workflows-analytics-dashboard.md#workflow-performance-filters).

* **Number of runs**: The total count of success and failure workflow runs or node executions completed by all deployed workflows in your account during the specified period. 

For detailed statistics on each status for the selected date/date range, see the **workflow Runs** widget. [Learn more](../analytics/workflows-analytics-dashboard.md#workflow-runs).

* **Number of times nodes are executed**: The event-driven execution counts for different node types during a workflow run. 

For detailed statistics on the total events and the runs executed by each node, see the **Nodes Execution** widget. [Learn more](../analytics/workflows-analytics-dashboard.md#nodes-execution).

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Hover over the "<b><i>i</i></b>" icon to view the information summary for the metric.</p></div>

<img src="../images/info-icon.png" alt="info icon" title="info icon" style="border: 1px solid gray; zoom:75%;">

To generate and view the required Workflows Analytics data, use the **Global Timeline Filters**. [Learn more](../analytics/workflows-analytics-dashboard.md#global-timeline-filters).

### Workflow-specific Metrics

The following metrics help analyze the performance of the selected workflow and version in your account during the selected period:

* **Workflow Runs**: Depicts the success and failure trends of the workflow runs the selected workflow version executes.
* **Avg. Workflow Response Time**: Displays the selected workflow version’s ART to the requests received during the selected period.
* **Nodes Execution**: Displays the event-based node execution graph for all the node types on a single day or across the selected date range. **Nodes are executed up to the rate limit threshold subscription for your account**.

To view the required data, use the [Global Timeline Filters](./workflows-analytics-dashboard.md#global-timeline-filters) and [Workflow Performance Filters](./workflows-analytics-dashboard.md#workflow-performance-filters). 

## Global Timeline Filters

To generate account-level and workflow-level data for a specific period, use the following options on the top panel:

* **24 hours**: Displays workflow data for all the hours in the past day.
* **7 days**: Displays workflow data for all the days in the past week.
* **30 days**: Displays workflow data for all the days in the past month.
* **90 days**: Displays workflow data for all the days in the past three months.
* **Custom**: Allows you to select a custom day or date range from the following calendar widget to view workflow data. Once you select the required period, click **Apply** to see the relevant data.
<img src="../images/global-timeline-filters.png" alt="global timeline filters" title="global timeline filters" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Key Considerations</p>
<p><ul><li>You can select only the current and past dates and not a future date.</li>
<li>You can view past data only up to one year from the current date.</li></ul></p></div>

**Single Date**

To select a single day, click the required date on the widget.
<img src="../images/single-date.png" alt="single date" title="single date" style="border: 1px solid gray; zoom:75%;">

**Date Range**

To select a custom date range, select the start and end dates on the widget.
<img src="../images/date-range.png" alt="date range" title="date range" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>Only consecutive dates can be selected for a date range. For example, alternate or random date selections aren't allowed.</li>
<li>Multiple date range selections aren't supported.</li></ul></p></div>

The other options you can select include:

* **This Month**: Displays data for the current month. For example, if today is 20 September, the data from 1 September to 20 September is displayed.
<img src="../images/this-month.png" alt="this month" title="this month" style="border: 1px solid gray; zoom:75%;">

* **Last Month**: Displays data for the past month. For example, if this month is September, the data from 1 August to 31 August is displayed.
<img src="../images/last-month.png" alt="last month" title="last month" style="border: 1px solid gray; zoom:75%;">

* **This Year**: Displays data for the current year. For example, if today is 20 September 2024, the data from 1 January 2024 to 20 September is displayed.
<img src="../images/this-year.png" alt="this year" title="this year" style="border: 1px solid gray; zoom:75%;">

* **Last Year**: Displays data for the previous year from 1 January 2023 to 31 December 2023.
<img src="../images/last-year.png" alt="last year" title="last year" style="border: 1px solid gray; zoom:75%;">

## Workflow Performance Filters

The following widget-level filters apply exclusively to [workflow-specific metrics](../analytics/workflows-analytics-dashboard.md#workflow-specific-metrics), providing real-time analytics when used with a [Global Timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters). 

* **Workflow Name**: Select the deployed workflow from the list to see the associated analytics data.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If two workflows with the same name are deployed at different times, they appear in the list with their respective deployment timestamps.</p></div>

<ul><li><b>workflow Version</b>: Choose the deployed workflow’s version from the list. If your account contains multiple versions of the same workflow, this feature provides targeted data for a specific version, such as testing or production.</li></ul>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If no versions exist for a workflow, the dropdown list is empty. By default, data for all workflow versions is displayed unless a specific version is selected.</p></div>

## Workflow Performance Data Widgets

The **Workflows Analytics** dashboard displays the widgets mentioned below to represent the [Workflow-specific performance metrics](../analytics/workflows-analytics-dashboard.md#workflow-specific-metrics). The graphs update automatically when a different workflow version is selected.

### How it Works

1. Select the required date/range in the [global timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters).
2. Select the **workflow Name** and (optional) **workflow Version**.
3. The widgets display an hourly graph for 24 hours on a single day and a daily graph for the respective metrics for a date range.

### workflow Runs

This widget features two dynamic graphs illustrating successful and failed requests executed by the workflow during the selected period in the [global timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Total Number of Requests**, while the X-axis indicates the **Date**. 

**Key Features**

* Successful runs are displayed in green, while failed runs are shown in red.
* The **Total Number of Requests** (Y-axis) automatically scales to accommodate runs executed across different date selections.
* Hover over a data point on the success and failure line graphs to view the counts for Total Requests and the successful and failed requests executed by the workflow at that specific date and time. For example, you can check the successful and unsuccessful request executions at 11:25 AM on January 16, 2024.
<img src="../images/tooltip-feature.png" alt="tooltip feature" title="tooltip feature" style="border: 1px solid gray; zoom:75%;">

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The widget shows data only for the duration that the workflow was deployed in your account. For instance, if workflow A was active for 4 days last week and undeployed for the next 3 days, selecting a 7-day view will display data solely for those 4 active days and the associated request times.</li>
<li>The graph will show curves only when requests are processed by the workflow. If no requests are processed during an hour or day, no data points will appear.</li></ul></p></div>

**Best Practices**

You can do the following to analyze workflow performance:

* **Performance Tracking**: By viewing successful and failed requests, you can monitor the workflow’s performance, identifying how often the workflow completes tasks successfully versus when they fail for the same or different dates.
* **Trend Analysis**: Tracking workflow runs across different periods provides insights into performance trends, identifying peak and low performance periods.
* **Real-Time Monitoring**: The widget allows you to monitor workflow performance in real-time, enabling quick responses to sudden spikes in failures or performance drops.
* **Comparative Assessment**: Evaluate the performance of different workflow versions to determine the most effective option.

### Avg. Workflow Response Time

This widget features a line graph illustrating the ART taken by the workflow version to execute each request during the selected period in the [global timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Avg. Response Time**, while the X-axis indicates the **Date**. 

**Key Features**

* A blue line graph represents the Average Response Time (ART) values for the selected period. If a single day is selected, the graph displays hourly ART values, while selecting a date range represents daily ART values.
* The **Avg. Response Time** (Y-axis) automatically scales to accommodate real-time response times per request.

**Best Practices**

You can do the following to analyze workflow performance:

**Single Day**

* View the average workflow response time for each hourly request within a day. For instance, if the workflow executes 100 requests between 12 PM and 1 PM, each with its own response time, the average of these values is represented by the graph line. Hover over the corresponding data point on the graph to view the ART for a specific hour. The tooltip shows the selected date & time, ART for the hour, and the no.of requests processed during that hour.
* View the overall ART, which is the total of the ART for all hours combined during the selected day.

<img src="../images/overall-art.png" alt="overall art" title="overall art" style="border: 1px solid gray; zoom:75%;">

**Date Range**

* View the ART of a workflow for requests processed daily over the specified date range. For example, if you select the date range between September 1 and September 30, the ART for each day is combined to show the graph line. Hover over the corresponding data point on the graph to see the ART for a specific date and time. The tooltip shows the selected date, ART for the day, and the no.of requests processed on that date.

* View the overall ART, which is the total of the ART for all days in the selected date range.
<img src="../images/overall-art-for-date-range.png" alt="overall art for date range" title="overall art for date range" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The system calculates the ART for all requests within each hour (hourly ART). It then combines the hourly ART for all hours daily to determine the Daily ART. Finally, the Daily ART values for the selected date range are aggregated to compute the overall ART.</p></div>

**Generic**

* **Performance Evaluation**: ART helps assess how quickly the workflow responds to requests during different periods, giving insights into overall efficiency.
* **Bottleneck Identification**: Sudden spikes in ART can highlight delays or inefficiencies, allowing for targeted troubleshooting.
* **Optimization**: Monitoring ART over time helps identify areas for improvement, leading to faster response times and optimized workflows.
* **Trend Analysis**: Tracking ART across different periods helps uncover patterns in workflow performance, providing data-driven opportunities for enhancement.
* **Comparative Assessment**: Evaluate the performance of different workflow versions to assess their response times to requests.

### Nodes Execution

This widget displays a line graph showing the number of nodes (including all node types) executed for each event run during a workflow for the selected workflow version and period (as selected in the [Global timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters)). The Y-axis represents the **Number of Nodes Executed**, while the X-axis shows the **Date**.

**Rate Limit**

The **Nodes Execution** widget displays a graph up to your account's maximum subscribed rate limit, indicated by a red line. For example, if your subscription allows 8,000 node executions, the graph will show data for a maximum of 8,000 nodes during the selected period. Once this limit is reached, an error message will appear, notifying you that the threshold has been reached and no further node executions can occur.

<img src="../images/nodes-execution-rate-limit.png" alt="rate limit" title="rate limit" style="border: 1px solid gray; zoom:75%;">

**Key Features**

<ul><li>A blue line graph represents the node executions for the selected period. If a single day is selected, the graph displays hourly node executions, while selecting a date range represents daily node executions.</li>
<li>The <b>Number of Nodes Executed</b> (Y-axis) is fixed and accommodates the maximum rate limit subscription.</li>
<li>A red line highlights the maximum rate limit.</li>
<li>Hover over the required data point on the graph to view the following information:</li></ul>
<ul><li><b>Total Events</b>: The number of node executions for the following nodes:</li></ul>

   * Start Node
   * [AI Node](../../../workflows/workflow-builder/types-of-nodes/ai-node.md)
   * [Function Node](../../../workflows/workflow-builder/types-of-nodes/function-node.md)
   * [Condition Node](../../../workflows/workflow-builder/types-of-nodes/condition-node.md)
   * [API Node](../../../workflows/workflow-builder/types-of-nodes/api-node.md)
   * [DocSearch Node](../../../workflows/workflow-builder/types-of-nodes/docsearch-node.md)
   * [End Node](../../../workflows/workflow-builder/types-of-nodes/end-node.md)

<p><b>Best Practices</b></p>

* **Performance Monitoring**: Track the number of nodes executed during each workflow, allowing you to assess the workflow's overall performance.
* **Resource Optimization**: Visualizing node execution trends can help you identify inefficient workflows or overused nodes, optimize resources, and enhance efficiency.
* **Rate Limit Tracking**: The analysis allows you to monitor node execution in relation to your account’s rate limits, helping you stay within subscription thresholds.
* **Troubleshooting**: Nodes execution patterns can highlight potential issues or bottlenecks in your workflows, making it easier to detect and resolve problems.
* **Trend Analysis**: By comparing node executions over time, you can identify performance trends and make data-driven decisions to improve workflow and response times.

## Expanded Widget View

You can expand any widget on the **Workflows Analytics Dashboard** for a drill down view of analytics trends. Each expanded view enables you to apply widget-level filters, offering a focused analysis of workflow performance for that widget.

The widget-level filters include the following:

* [Global timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters)
* [Workflow Performance Filters](../analytics/workflows-analytics-dashboard.md#workflow-performance-filters)

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>Changes made to the filters in the expanded view of a widget don't affect the main dashboard or the global filters.</li>
<li>Hover over the required data point to view widget analytics data.</li></ul></p></div>

To expand a widget, hover over the top-right corner of the widget, and click the **Double-arrow** icon.

<img src="../images/expand-widget-icon.png" alt="expand widget" title="expand widget" style="border: 1px solid gray; zoom:75%;">

The expanded views of all the widgets are shown below:

**Workflow Runs**

<img src="../images/agent-runs-expanded-view.png" alt="workflow runs expanded view" title="workflow runs expanded view" style="border: 1px solid gray; zoom:75%;">

**Avg. Workflow Response Time**

<img src="../images/avg-art-expanded-view.png" alt="average art expanded view" title="average art expanded view" style="border: 1px solid gray; zoom:75%;">

**Nodes Execution**

<img src="../images/nodes-execution-expanded-view.png" alt="nodes execution expanded view" title="nodes execution expanded view" style="border: 1px solid gray; zoom:75%;">

The **Workflows Analysis Dashboard** offers actionable and customized insights on the workflow performance metrics for various features in your account. 

## Related Information

* [Settings Console](../../overview.md)- Learn more about other workflow admin features.
* [Workflow Change Logs](../../../workflows/workflow-builder/workflow-canvas-change-log.md)- Track, audit, and review changes made to a workflow's flow.
* [Billing](../../billing/billing-and-usage.md)- Manage resource consumption for workflows, set limits, and track usage trends.
* [Monitoring: Audit Logs](../audit-logs.md)- Track activities and events in your account.
* [Monitoring: Model Analytics Dashboard](../analytics/model-analytics-dashboard.md)- Get actionable insights into model-specific metrics and optimize performance.