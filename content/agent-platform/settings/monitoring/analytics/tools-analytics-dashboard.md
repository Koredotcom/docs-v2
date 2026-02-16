# Tools Performance Analytics

The **Tools Analytics Dashboard** offers a unified and comprehensive tool for tracking and analyzing the performance of the deployed tools and their specific versions within your account.

It provides valuable insights into metrics such as successful or failed tool runs, **Average Response Times (ART)** to requests, and event-based node executions for all node types. [Learn more](../../../ai-agents/tools/tool-flows/manage-flow-nodes.md){:target="_blank"} about managing nodes in a tool flow.

Key metrics are displayed intuitively using visually engaging graphs and dynamic widgets, which update based on the selected filters. 

**Key Features**

* **Global timeline Filters** provide a comprehensive view of performance across all tools in your account. [Learn more](../analytics/tools-analytics-dashboard.md#global-timeline-filters){:target="_blank"}.

* **Tool Performance Filters** offer a detailed analysis of individual runs, response times, and node executions during the selected period for the selected tool and version. [Learn more](../analytics/tools-analytics-dashboard.md#tool-performance-filters){:target="_blank"}.

* An **expanded view of analytics widgets** include filters to customize data display. [Learn more](../analytics/tools-analytics-dashboard.md#expanded-widget-view){:target="_blank"}.
* Hovering over a data point on the **dynamic and interactive line graph** reveals the real-time information for that specific period, providing a focused view of tool performance.
* You can obtain **hourly performance analysis** for a tool on a specific day or review **daily performance trends** when selecting a date range filter.
* Click the **Refresh icon** shown below to ensure you have the latest dashboard data available to make informed decisions.
<img src="../images/refresh-icon.png" alt="refresh icon" title="refresh icon" style="border: 1px solid gray; zoom:75%;"/>

* The dashboard offers **Tooltip** support for each widget to get quick summaries of the monitored metrics.
* You can analyze nodes execution data for a tool based on the **rate limit** subscription for your account. Learn more.

**Best Practices**

* Make data-driven decisions by tracking runs and response times for all and specific tools in the selected period.
* Analyze event-based node executions to track node types, execution frequency, and total events processed.
* Apply time-based filters at both global and widget levels for focused and accurate analysis.
* Compare tool performance over time by analyzing successful versus failed runs, and identifying failure patterns.
* Prioritize node execution based on rate limits subscription for your account.

## Navigate to the Tools Analytics Dashboard

To access the **Tools Analytics** dashboard, follow the steps below:

1. [Navigate](../../../administration/overview.md#access-settings-console){:target="_blank"} to the **Settings** Console.
2. On the left menu, select **Monitoring** > **Analytics**.
3. Click the **Tools Analytics** tab on the right-hand side screen.
<img src="../images/agents-analytics-tab.png" alt="tools analytics tab" title="tools analytics tab" style="border: 1px solid gray; zoom:75%;"/>

The system loads the **Tools Analytics** dashboard with data for the last 7 days, which is the **default time range selection**. You can select the required period to generate data.

## Key Performance Metrics

The **Tools Analytics** Dashboard supports the following account and tool-specific metrics to provide actionable insights.

### Account-Level Metrics

The following metrics summarize the counts for tools, runs, and node executions at your account level:

* **Number of tools**: The total number of tools deployed within your account during the selected period. This includes tools and all their versions managed by all the users of your account. 

    To view data for a specific tool and its version deployed in your account, use the **Tools Performance** filters. [Learn more](../analytics/tools-analytics-dashboard.md#tool-performance-filters){:target="_blank"}.

* **Number of runs**: The total count of success and failure tool flow runs or node executions completed by all deployed tools in your account during the specified period. 

For detailed statistics on each status for the selected date/date range, see the **Tool Runs** widget. [Learn more](../analytics/tools-analytics-dashboard.md#tool-runs){:target="_blank"}.

* **Number of times nodes are executed**: The event-driven execution counts for different node types during a tool run. 

For detailed statistics on the total events and the runs executed by each node, see the **Nodes Execution** widget. [Learn more](../analytics/tools-analytics-dashboard.md#nodes-execution){:target="_blank"}.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Hover over the "<b><i>i</i></b>" icon to view the information summary for the metric.</p></div>

<img src="../images/info-icon.png" alt="info icon" title="info icon" style="border: 1px solid gray; zoom:75%;"/>

To generate and view the required tools analytics data, use the **Global Timeline Filters**. [Learn more](../analytics/tools-analytics-dashboard.md#global-timeline-filters){:target="_blank"}.

### Tool-specific Metrics

The following metrics help analyze the performance of the selected tool and version in your account during the selected period:

* **Tool Runs**: Depicts the success and failure trends of the tool flow runs the selected tool version executes.
* **Avg. Tool Response Time**: Displays the selected tool version’s ART to the requests received during the selected period.
* **Nodes Execution**: Displays the event-based node execution graph for all the node types on a single day or across the selected date range. **Nodes are executed up to the rate limit threshold subscription for your account**.

To view the required data, use the [Global Timeline Filters](../analytics/tools-analytics-dashboard.md#global-timeline-filters){:target="_blank"} and [Tool Performance Filters](../analytics/tools-analytics-dashboard.md#tool-performance-filters){:target="_blank"}. 

## Global Timeline Filters

Use the top-panel filters to scope account- and tool-level data by time.

* **Preset ranges**: 24 hrs, 7 days, 30 days, and 90 days.
* **Custom range**: Select a single date or a continuous date range via the calendar, then click *Apply*.

     <img src="../images/global-timeline-filters.png" alt="global timeline filters" title="global timeline filters" style="border: 1px solid gray; zoom:75%;"/>

**Calendar Presets**

* **This Month**: From the 1st of the current month to today.

* **Last Month**: Full previous calendar month.

* **This Year**: From Jan 1 of the current year to today.

* **Last Year**: Full previous calendar year.

<div class="admonition note">
<p class="admonition-title">Constraints</p>
<p><ul><li>Only current and past dates are supported (no future dates).</li>
<li>Historical data is available up to one year back.</li>
<li>Date ranges must be consecutive; multiple or non-contiguous ranges aren’t supported.</li></ul></p>
</div>

## Tool Performance Filters

The following widget-level filters apply exclusively to [tool-specific metrics](../analytics/tools-analytics-dashboard.md#tool-specific-metrics){:target="_blank"}, providing real-time analytics when used with a [Global Timeline filter](../analytics/tools-analytics-dashboard.md#global-timeline-filters){:target="_blank"}. 

* **Tool Name**: Select the deployed tool from the list to see the associated analytics data.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If two tools with the same name are deployed at different times, they appear in the list with their respective deployment timestamps.</p></div>

<ul><li><b>Tool Version</b>: Choose the deployed tool’s version from the list. If your account contains multiple versions of the same tool, this feature provides targeted data for a specific version, such as testing or production.</li></ul>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If no versions exist for a tool, the dropdown list is empty. By default, data for all tool versions is displayed unless a specific version is selected.</p></div>

## Tool Performance Data Widgets

The **Tools Analytics** dashboard displays the widgets mentioned below to represent the [tool-specific performance metrics](../analytics/tools-analytics-dashboard.md#tool-specific-metrics){:target="_blank"}. The graphs update automatically when a different tool version is selected.

### How it Works

1. Select the required date/range in the [global timeline filter](../analytics/tools-analytics-dashboard.md#global-timeline-filters){:target="_blank"}.
2. Select the **Tool Name** and (optional) **Tool Version**.
3. The widgets display an hourly graph for 24 hours on a single day and a daily graph for the respective metrics for a date range.

### Tool Runs

This widget features two dynamic graphs illustrating successful and failed requests executed by the tool during the selected period in the [global timeline filter](../analytics/tools-analytics-dashboard.md#global-timeline-filters){:target="_blank"}. The Y-axis represents the **Total Number of Requests**, while the X-axis indicates the **Date**. 

**Key Features**

* Successful runs are displayed in green, while failed runs are shown in red.
* The **Total Number of Requests** (Y-axis) automatically scales to accommodate runs executed across different date selections.
* Hover over a data point on the success and failure line graphs to view the counts for Total Requests and the successful and failed requests executed by the tool at that specific date and time. For example, you can check the successful and unsuccessful request executions at 11:25 AM on January 16, 2024.
<img src="../images/tooltip-feature.png" alt="tooltip feature" title="tooltip feature" style="border: 1px solid gray; zoom:75%;"/>

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The widget shows data only for the duration that the tool was deployed in your account. For instance, if Tool A was active for 4 days last week and undeployed for the next 3 days, selecting a 7-day view will display data solely for those 4 active days and the associated request times.</li>
<li>The graph will show curves only when requests are processed by the tool. If no requests are processed during an hour or day, no data points will appear.</li></ul></p></div>

**Best Practices**

You can do the following to analyze tool performance:

* **Performance Tracking**: By viewing successful and failed requests, you can monitor the tool’s performance, identifying how often the tool completes tasks successfully versus when they fail for the same or different dates.
* **Trend Analysis**: Tracking tool runs across different periods provides insights into performance trends, identifying peak and low performance periods.
* **Real-Time Monitoring**: The widget allows you to monitor tool performance in real-time, enabling quick responses to sudden spikes in failures or performance drops.
* **Comparative Assessment**: Evaluate the performance of different tool versions to determine the most effective option.

### Avg. Tool Response Time

This widget features a line graph illustrating the ART taken by the tool version to execute each request during the selected period in the [global timeline filter](../analytics/tools-analytics-dashboard.md#global-timeline-filters){:target="_blank"}. The Y-axis represents the **Avg. Response Time**, while the X-axis indicates the **Date**. 

**Key Features**

* A blue line graph represents the Average Response Time (ART) values for the selected period. If a single day is selected, the graph displays hourly ART values, while selecting a date range represents daily ART values.
* The **Avg. Response Time** (Y-axis) automatically scales to accommodate real-time response times per request.

**Best Practices**

You can do the following to analyze tool performance:

**Single Day**

* View the average tool response time for each hourly request within a day. For instance, if the tool executes 100 requests between 12 PM and 1 PM, each with its own response time, the average of these values is represented by the graph line.  Hover over the corresponding data point on the graph to view the ART for a specific hour. The tooltip shows the selected date & time, ART for the hour, and the no.of requests processed during that hour.
* View the overall ART, which is the total of the ART for all hours combined during the selected day.

<img src="../images/overall-art.png" alt="overall art" title="overall art" style="border: 1px solid gray; zoom:75%;"/>

**Date Range**

* View the ART of a tool for requests processed daily over the specified date range. For example, if you select the date range between September 1 and September 30, the ART for each day is combined to show the graph line. Hover over the corresponding data point on the graph to see the ART for a specific date and time. The tooltip shows the selected date, ART for the day, and the no.of requests processed on that date.

* View the overall ART, which is the total of the ART for all days in the selected date range.
<img src="../images/overall-art-for-date-range.png" alt="overall art for date range" title="overall art for date range" style="border: 1px solid gray; zoom:75%;"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The system calculates the ART for all requests within each hour (hourly ART). It then combines the hourly ART for all hours daily to determine the Daily ART. Finally, the Daily ART values for the selected date range are aggregated to compute the overall ART.</p></div>

**Generic**

* **Performance Evaluation**: ART helps assess how quickly the tool responds to requests during different periods, giving insights into overall efficiency.
* **Bottleneck Identification**: Sudden spikes in ART can highlight delays or inefficiencies, allowing for targeted troubleshooting.
* **Optimization**: Monitoring ART over time helps identify areas for improvement, leading to faster response times and optimized workflows.
* **Trend Analysis**: Tracking ART across different periods helps uncover patterns in tool performance, providing data-driven opportunities for enhancement.
* **Comparative Assessment**: Evaluate the performance of different tool versions to assess their response times to requests.

### Nodes Execution

This widget displays a line graph showing the number of nodes (including all node types) executed for each event run during a tool flow for the selected tool version and period (as selected in the [Global timeline filter](../analytics/tools-analytics-dashboard.md#global-timeline-filters){:target="_blank"}. The Y-axis represents the **Number of Nodes Executed**, while the X-axis shows the **Date**.

**Rate Limit**

The **Nodes Execution** widget displays a graph up to your account's maximum subscribed rate limit, indicated by a red line. For example, if your subscription allows 8,000 node executions, the graph will show data for a maximum of 8,000 nodes during the selected period. Once this limit is reached, an error message will appear, notifying you that the threshold has been reached and no further node executions can occur.

<img src="../images/nodes-execution-rate-limit.png" alt="rate limit" title="rate limit" style="border: 1px solid gray; zoom:75%;"/>

**Key Features**

<ul><li>A blue line graph represents the node executions for the selected period. If a single day is selected, the graph displays hourly node executions, while selecting a date range represents daily node executions.</li>
<li>The <b>Number of Nodes Executed</b> (Y-axis) is fixed and accommodates the maximum rate limit subscription.</li>
<li>A red line highlights the maximum rate limit.</li>
<li>Hover over the required data point on the graph to view the following information:</li></ul>
<ul><li><b>Total Events</b>: The number of node executions for the following nodes:</li></ul>

   * Start Node
   * [AI Node](../../../ai-agents/tools/tool-flows/types-of-nodes/ai-node.md){:target="_blank"}
   * [Function Node](../../../ai-agents/tools/tool-flows/types-of-nodes/function-node.md){:target="_blank"}
   * [Condition Node](../../../ai-agents/tools/tool-flows/types-of-nodes/condition-node.md){:target="_blank"}
   * [API Node](../../../ai-agents/tools/tool-flows/types-of-nodes/api-node.md){:target="_blank"}
   * [DocSearch Node](../../../ai-agents/tools/tool-flows/types-of-nodes/docsearch-node.md){:target="_blank"}
   * [End Node](../../../ai-agents/tools/tool-flows/types-of-nodes/end-node.md){:target="_blank"}

<p><b>Best Practices</b></p>

* **Performance Monitoring**: Track the number of nodes executed during each tool flow, allowing you to assess the tool's overall performance.
* **Resource Optimization**: Visualizing node execution trends can help you identify inefficient workflows or overused nodes, optimize resources, and enhance efficiency.
* **Rate Limit Tracking**: The analysis allows you to monitor node execution in relation to your account’s rate limits, helping you stay within subscription thresholds.
* **Troubleshooting**: Nodes execution patterns can highlight potential issues or bottlenecks in your tool flows, making it easier to detect and resolve problems.
* **Trend Analysis**: By comparing node executions over time, you can identify performance trends and make data-driven decisions to improve tool flow and response times.

## Expanded Widget View

You can expand any widget on the **Tools Analytics Dashboard** for a drill down view of analytics trends. Each expanded view enables you to apply widget-level filters, offering a focused analysis of tool performance for that widget.

The widget-level filters include the following:

* [Global timeline filter](../analytics/tools-analytics-dashboard.md#global-timeline-filters){:target="_blank"}
* [Tool Performance Filters](../analytics/tools-analytics-dashboard.md#tool-performance-filters){:target="_blank"}

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>Changes made to the filters in the expanded view of a widget do not affect the main dashboard or the global filters.</li>
<li>Hover over the required data point to view widget analytics data.</li></ul></p></div>

To expand a widget, hover over the top-right corner of the widget, and click the **Double-arrow** icon.

<img src="../images/expand-widget-icon.png" alt="expand widget" title="expand widget" style="border: 1px solid gray; zoom:75%;"/>

The expanded views of all the widgets are shown below:

**Tool Runs**

<img src="../images/agent-runs-expanded-view.png" alt="tool runs expanded view" title="tool runs expanded view" style="border: 1px solid gray; zoom:75%;"/>

**Avg. Tool Response Time**

<img src="../images/avg-art-expanded-view.png" alt="average art expanded view" title="average art expanded view" style="border: 1px solid gray; zoom:75%;"/>

**Nodes Execution**

<img src="../images/nodes-execution-expanded-view.png" alt="nodes execution expanded view" title="nodes execution expanded view" style="border: 1px solid gray; zoom:75%;"/>

The **Tools Analysis Dashboard** offers actionable and customized insights on the tool performance metrics for various features in your account. 

<hr/> 

**Related Resources**

* [Settings Console](../../../administration/overview.md){:target="_blank"} - Learn more about other Tool Platform admin features.
* [Tool Flow Change Logs](../../../ai-agents/tools/tool-flows/tool-canvas-change-log.md){:target="_blank"} - Track, audit, and review changes made to a tool's flow.
* [Billing](../../billing/billing-and-usage.md){:target="_blank" }- Manage resource consumption for tools, set limits, and track usage trends.
* [Monitoring: Audit Logs](../audit-logs.md){:target="_blank"} - Track activities and events in your account.
* [Monitoring: Model Analytics Dashboard](../analytics/model-analytics-dashboard.md){:target="_blank"} - Get actionable insights into model-specific metrics and optimize performance.
