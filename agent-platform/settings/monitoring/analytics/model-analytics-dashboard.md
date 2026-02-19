# Models Performance Analytics

The **Model Analytics Dashboard** is a comprehensive analysis and monitoring solution that provides unified performance tracking for [fine-tuned](../../../models/fine-tune-models/create-a-fine-tuned-model.md), [open-source](../../../models/open-source-models/configure-your-open-source-model.md), and [external models](../../../models/external-models/add-an-external-model-using-easy-integration.md) in your account. The dashboard measures and visualizes key performance indicators for the selected period, including:

* Model latency and response times
* Request success and failure rates
* Model scaling patterns and usage
* Credit consumption for deployments and fine-tuning

**Key Features**

* **Interactive graphs and widgets** with real-time data updates.
* **Global Timeline Filters** for account-wide performance analysis of the selected model type. [Learn more](../analytics/model-analytics-dashboard.md#global-timeline-filters).
* **Detailed Performance Filters** for model-specific metrics. [Learn more](../analytics/model-analytics-dashboard.md#model-performance-filters).
* **Expandable analytics widgets** for in-depth data exploration. [Learn more](../analytics/model-analytics-dashboard.md#expanded-widget-view).
* **Hover-enabled data points** for instant metric insights.
* Support for both hourly and daily performance trends.
* Dashboard **Refresh capability** to update the latest data on the dashboard.
<img src="../images/model-analytics-dashboard-refresh.png" alt="dashboard refresh" title="dashboard refresh" style="border: 1px solid gray; zoom:75%;"/>

* Widget-wise **Tooltip support** to get quick summaries of the monitored metrics.
* Ability to analyze model deployment and fine-tuning data based on the credit usage summary. 
* Indication of maximum replicas autoscaling threshold based on usage subscription for the account.

**Best Practices**

* Track latency and request statuses for all or specific models within a chosen category and period to make data-driven decisions.
* Analyze credit consumption for deployment and fine-tuning requests and the total number of models deployed and fine-tuned in your account.
* Apply time-based filters at both global and widget levels for focused and accurate analysis.
* Compare model performance over time by analyzing successful versus failed requests and identifying failure patterns.
* Decide on model scaling and usage based on the max replicas limit set for your account.

## Navigate to the Model Analytics Dashboard

To access the **Model Analytics** dashboard, follow the steps below:

1. [Navigate](../../../administration/overview.md#access-settings-console) to the **Settings** Console.
2. On the left menu, select **Monitoring** > **Analytics**.
3. Click the **Model Analytics** tab on the right-hand side screen.
<img src="../images/model-analysis-dashboard-access.png" alt="model analytics dashboard" title="model analytics dashboard" style="border: 1px solid gray; zoom:75%;"/>

The system loads the **Model Analytics** dashboard with data for the last 7 days, which is the default time range selection. You can select the required period to generate data.

## Key Performance Metrics

### Account-Level Metrics

The following metrics summarize the **credit usage** and **counts** for [fine-tuned](../../../models/fine-tune-models/create-a-fine-tuned-model.md), [open-source](../../../models/open-source-models/select-and-deploy-an-open-source-model.md), and [external models](../../../models/external-models/add-an-external-model-using-easy-integration.md) at the account level:

* **Credits consumed in deployment**: It shows the number of credits deducted from your account when deploying the model(s).
* **Credits consumed in fine-tuning**: It shows the number of credits deducted from your account when fine-tuning the model(s).
* **Number of Deployed Models**: The number of models deployed in your account.
* **Number of Fine-tuned models**: The count of the models fine-tuned in your account.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Hover over the "<b><i>i</i></b>" icon to view the information summary for the metric.</p>
</div>

<img src="../images/hover-over-icon.png" alt="hover over icon" title="hover over icon" style="border: 1px solid gray; zoom:75%;"/>

To generate and view the required model analytics data, use the **Global Timeline Filters**. [Learn more](../analytics/model-analytics-dashboard.md#global-timeline-filters).

### Model-specific Metrics

The following metrics help analyze the performance of the selected open-source/fine-tuned model and version in your account during the selected period:

* **Model Latency**: It shows the model version’s latency for each request when selecting a 24-hour or 7-day period. The average daily latency is displayed for date ranges longer than 7 days. [Learn more](../analytics/model-analytics-dashboard.md#model-latency).
* **Requests**: Depicts the success and failure trends of the requests the selected model version executes. Additionally, the widget displays the **total requests** and the **Avg. credits per request** (total credits consumed by the model / the total requests it receives). The graph depicts requests executed per day when you select a date range. For 24 hours, an hourly graph is shown. [Learn more](../analytics/model-analytics-dashboard.md#requests).
* **Model Scaling and Usage**: It shows the number of model replicas and hardware used to scale up or down during deployment. [Learn more](../analytics/model-analytics-dashboard.md#model-scaling-and-usage).

For **External Models**, the following performance metrics appear on the dashboard for the selected period:

* **Tokens**: Displays a bar chart depicting the number of input tokens provided to the model and the number of output tokens generated by the model. Please refer to Point 10 [here](../../../models/external-models/add-an-external-model-using-api-integration.md#add-an-external-model).
* **Model Latency**: It shows the model version’s latency for each request when selecting a 24-hour or 7-day period. The average daily latency is displayed for date ranges longer than 7 days. [Learn more](../analytics/model-analytics-dashboard.md#model-latency).
* **Requests**: Depicts the success and failure trends of the requests the selected model version executes. Additionally, the widget displays the **total requests** the model executes. The graph depicts requests executed per day when you select a date range. For 24 hours, an hourly graph is shown. [Learn more](../analytics/model-analytics-dashboard.md#requests).

To view the required data, use the [Global Timeline Filters](../analytics/model-analytics-dashboard.md#global-timeline-filters) and [Model Performance Filters](../analytics/model-analytics-dashboard.md#model-performance-filters). 

## Global Timeline Filters

Use the options on the top panel to generate account-level and model-level data for a specific period. [Learn more](../analytics/tools-analytics-dashboard.md#global-timeline-filters).

## Model Performance Filters

The following widget-level filters apply exclusively to model-specific metrics, providing real-time analytics when used with a [Global Timeline filter](../analytics/tools-analytics-dashboard.md#global-timeline-filters). The available filters depend on the selected  model type.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If multiple deployments exist for the same model name, they are listed along with their respective deployment timestamps.</p></div>

**Fine-tuned and Open-source Models**

* **Select Model (Model Name)**: Select the deployed model from the list to see the associated analytics data.
* **Select Deployment**: Choose the model’s deployment name from the list.
* **Select Filter (version)**: Choose the model’s deployment version from the list to view the associated data.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p><ul><li>If no versions exist for a model, the dropdown list is empty.</li>
    <li> By default, data for all model versions is displayed unless a specific version is selected.</li></ul></p></div>

    <img src="../images/fine-tuned-model-filters.png" alt="model name and version filter" title="model name and version filter" style="border: 1px solid gray; zoom:75%;"/>

**External Models**

* **Select Model (Model Name)**: Select the deployed model from the list to see the associated analytics data.
* **Select Connection**: Select the third-party service connection name for the external model.

    <img src="../images/external-model-filters.png" alt="model name and version filter" title="model name and version filter" style="border: 1px solid gray; zoom:75%;"/>

## How it Works

1. Select the required date/date range in the [Global Timeline Filter](../analytics/tools-analytics-dashboard.md#global-timeline-filters).
2. Select the tab for the required model type, like *Fine-tuned*, *Open-source*, or *External*.
3. For Fine-tuned or Open-source models, choose the *model name* and optionally the *deployment name* and *version*. Alternatively, for External Models, select the *model name* and *connection name* from the dropdown lists.
4. The widgets display an hourly graph for 24 hours per day and a daily graph for the respective metrics for a date range.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The widget shows data only for the duration that the model was deployed in your account. For instance, if Model A was active for 4 days last week and undeployed for the next 3 days, selecting a 7-day view will display data solely for those 4 active days and the associated request times.</li>
<li>The graph will show curves only when requests are processed by the model. If no requests are processed during an hour or day, no data points will appear.</li></ul></p></div>

## Model Performance Data Widgets

The **Model Analytics** dashboard displays the widgets given below to represent the [model-specific performance](../analytics/model-analytics-dashboard.md#model-specific-metrics) metrics. The graphs update automatically when a different model deployment version is selected.

### Model Latency

This widget is available for **Fine-tuned**, **Open-source**, and **External** models. It features a line graph illustrating the selected model version’s latency during the selected period in the [Global Timeline Filter](../analytics/model-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Latency** in milliseconds, and the X-axis indicates the **Date**. 

**Key Features**

* A blue line graph represents the **Latency** if the selected period is 24 hours or 7 days. The **Average Latency** graph is displayed when you select a date range above 7 days.
* The **Latency** (Y-axis) automatically scales according to the requests the model executes for the selected period.
* Hover over a data point on the line graph to view the latency for a specific request when selecting a 24-hour or 7-day period or the average latency for a specific date and time when using a longer date range. For example, you can check the latency for an individual request in the last 24 hours or the average latency (aggregated for all requests per day) on January 16, 2024, at 11:35 AM.

<img src="../images/hover-over-info.png" alt="hover over info" title="hover over info" style="border: 1px solid gray; zoom:75%;"/>

**Best Practices**

You can do the following to analyze model performance:

* **Latency Tracking and Trend Analysis**: Tracking latency over various periods offers valuable insights into performance trends, helping to identify peak usage and low-efficiency times. This helps further fine-tune your model for improved performance. 
* **Real-Time Monitoring and Comparative Analysis**: The widget enables real-time performance tracking and comparison of the deployed model versions, allowing you to quickly respond to sudden latency spikes and identify the best-performing option.
* **Track Credits Usage**: Track credit usage for model deployment and fine-tuning, based on average latency over time, to optimize resource allocation and manage costs efficiently.

### Requests

This widget is available for **Fine-tuned**, **Open-source**, and **External** models. It features two dynamic graphs illustrating successful and failed requests executed by the model during the selected period in the [Global Timeline Filter](../analytics/model-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Number of Requests**, and the X-axis indicates the selected **Date**.

**Key Features**

* Successful runs are displayed in green, and failed runs are shown in red.
* The **Number of Requests** (Y-axis) automatically scales to accommodate increased requests across different date selections.
* Hover over a data point on the success and failure line graphs to view the number of successful or failed requests at that specific date and time, as well as the total number of successful or failed requests executed by the model for the selected duration. For example, you can check the request counts at 11:25 AM on January 16, 2024. Additionally, the total number of successful or failed requests between January 1 and January 31 is displayed.
* **Total Requests** represents the total of successful and failed requests executed by the model during the selected period.
* **Avg. credits per request**: The value is calculated by dividing the total number of credits consumed by the model by the total number of responses generated by the model for the requests it processed.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Avg. credits per request is not displayed for external models.</p></div>

<img src="../images/requests-hover-info.png" alt="requests hover info" title="requests hover info" style="border: 1px solid gray; zoom:75%;"/>

**Best Practices**

You can do the following to analyze the model’s performance:

* **Performance Tracking**: By viewing successful and failed requests, you can monitor the model’s performance, identifying how often the model responds successfully versus when they fail for the same or different dates.
* **Trend Analysis**: Tracking requests across different periods provides insights into performance trends, identifying peak and low-performance periods.
* **Real-Time Monitoring**: The widget allows you to monitor model performance in real time, enabling quick responses to sudden spikes in failures or performance drops.
* **Comparative Assessment**: Evaluate the performance of different model versions to determine the most effective option.

### Model Scaling and Usage

This widget is available for **Fine-tuned** and **Open-source** models. It features a step graph illustrating the usage and scaling, meaning the number of replicas (with a specific [hardware configuration](../../../settings/billing/managing-usage-limits.md) deployed for the selected model version in the [Model Performance Filter](../analytics/model-analytics-dashboard.md#model-performance-filters) and the period in the [Global Timeline Filter](../analytics/tools-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Number of Replicas**, and the X-axis indicates the selected **Date**.

**Key Features**

* A blue step graph represents the **Number of Replicas** for the specified hardware configuration deployed in your account. It shows when fewer, more, or the same number of model replicas are deployed to generate responses.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>"<b>Multiple Hardware</b>" is displayed when replicas with more than one hardware configuration are deployed across a date range.</p></div>


* The Y-axis automatically adjusts based on the increase in the deployed replicas during the selected period.
* Each upward step in the graph represents the generation of additional model replicas, continuing until deployment is complete (indicated by the Max Replicas line). The downward steps show the undeployment of replicas.
* Hover over a data point on the step graph to view the timestamp, deployment version name, number of replicas, and hardware configuration deployed at that point by the model version. For example, you can check the replicas and hardware usage on January 16, 2024, at 11:35 AM for the last 30 days.

<img src="../images/model-scaling-hover-info.png" alt="model scaling hover info" title="model scaling hover info" style="border: 1px solid gray; zoom:75%;"/>

#### Maximum Replicas Limit for a Single-Day Selection

The **Model Scaling and Usage** widget displays the graph with the Y axis set up to the maximum number of replicas configured during the model deployment. This limit is indicated by a red line. 

<img src="../images/max-replicas.png" alt="max replicas" title="max replicas" style="border: 1px solid gray; zoom:75%;"/> 

**Best Practices**

* **Usage and Scaling Monitoring**: Track replica deployments over a specific period to identify spikes in usage, optimize hardware consumption, and manage credit usage effectively.
* **Resource Optimization**: Visualizing deployment trends helps spot inefficiencies, enabling you to fine-tune replica usage for greater efficiency.
* **Replica Limit Tracking**: This analysis lets you monitor scaling in relation to your account's replica limits, ensuring you stay within subscription thresholds.
* **Troubleshooting**: Analyzing deployment patterns can reveal issues or bottlenecks in your model, helping you quickly detect and resolve performance problems.
* **Trend Analysis**: Comparing replica deployments over time enables you to identify performance patterns, making it easier to make informed, data-driven decisions for scaling and optimization.

### Tokens

This widget is available exclusively for external models. It displays bar graphs showing the input tokens sent to the selected provider’s model for processing requests and the output tokens generated during the period selected using the [Global Timeline Filter](../analytics/tools-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Number of Tokens** (in *K* or thousands), and the X-axis indicates the selected **Date**.

**Key Features**

* A stacked bar graph illustrates the output and input tokens in two different shades, representing them as parts of the total number of tokens allocated to the model. This graph compares the number of output tokens generated and the input tokens provided to the model.
* The Y-axis automatically adjusts to reflect the increase in the number of tokens processed by the model.
* The widget displays the total sum of input and output tokens, as shown below.

<img src="../images/input-output-tokens.png" alt="input output tokens" title="input output tokens" style="border: 1px solid gray; zoom:75%;"/>

* Hover over a data point on the graph to view the timestamp and the input and output tokens processed at that point by the model version. For example, you can check the input and output token counts on January 16, 2024, at 11:35 AM for the last 30 days.
<img src="../images/tokens-hover-info.png" alt="tokens hover info" title="tokens hover info" style="border: 1px solid gray; zoom:75%;"/>

**Best Practices**

* **Performance Evaluation**: Understanding token counts helps assess the model's efficiency in processing input and generating output, i.e., fewer input tokens and higher output tokens.
* **Resource Management**: By tracking token usage, you can optimize credit consumption associated with tokens.
* **Model Tuning**: Analyzing input and output tokens can provide insights for fine-tuning the model and improving its accuracy and response relevance.
* **Identifying Bottlenecks**: Monitoring token counts helps proactively identify and troubleshoot potential bottlenecks in the model's processing pipeline.
* **Usage Trends**: Tracking token counts over time can reveal usage patterns, helping to forecast and adjust model deployments.
* **Scalability Insights**: Understanding token counts can guide scaling decisions, ensuring the model can handle varying loads effectively.

## Expanded Widget View

You can expand any widget on the **Model Analytics Dashboard** for a drill-down view of the analytics trends. Each expanded view enables you to apply widget-level filters, offering a focused analysis of model performance for that widget.

The widget-level filters include the following:

* [Global Timeline Filters](../analytics/tools-analytics-dashboard.md#global-timeline-filters) for all the model types.

* [Model Performance Filters](../analytics/model-analytics-dashboard.md#model-performance-filters) for Open-source and Fine-tuned models.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>Changes made to the filters in the expanded view of a widget do not affect the main dashboard or the global filters.</li>
<li>Hover over the required data point to view widget analytics data.</li></ul></p></div>

To expand a widget, hover over the top-right corner of the widget and click the **Double-arrow** icon.

<img src="../images/model-latency-info.png" alt="model latency expand arrow" title="model latency expand arrow" style="border: 1px solid gray; zoom:75%;"/>

The expanded views of all the widgets are shown below:

**Model Latency**

<img src="../images/model-latency-time-filter.png" alt="model latency time filter" title="model latency time filter" style="border: 1px solid gray; zoom:75%;"/>

**Requests**

<img src="../images/requests-expanded-view.png" alt="requests expanded view" title="requests expanded view" style="border: 1px solid gray; zoom:75%;"/>

**Model Scaling and Usage**

<img src="../images/model-scaling-and-usage-expanded-view.png" alt="model scaling expanded view" title="model scaling expanded view" style="border: 1px solid gray; zoom:75%;"/>

**Tokens**

<img src="../images/tokens-expanded-view.png" alt="tokens expanded view" title="tokens expanded view" style="border: 1px solid gray; zoom:75%;"/>

With intuitive data visualization and dynamic filtering capabilities, the **Model Analysis Dashboard** enables data-driven decisions for model optimization, resource allocation, and performance monitoring.

<hr/> 

**Related Resources**

* [Settings Console](../../../administration/overview.md) - about other Platform admin features.
* [Monitoring: Audit Logs](../audit-logs.md) - about tracking activities and events in your account.
* [Monitoring: Tools Analytics Dashboard](../analytics/tools-analytics-dashboard.md) - about getting actionable insights into tools’ performance.
