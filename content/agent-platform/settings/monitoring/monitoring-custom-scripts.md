# Monitoring Custom Script Runs and Logs

**Monitoring Custom Scripts** provides comprehensive visibility into custom script performance on the Platform. It tracks executions across API nodes, Function nodes, and API calls for the selected period, enabling users to view run-level data, analyze logs, and monitor key metrics. Advanced filtering and search capabilities support precise analysis, effective troubleshooting, and proactive issue resolution.

**Key Benefits**

* **Detailed Performance Analysis**: Examine script performance across all executions with run metadata, input/output logs, and log-level details.
* **Usage Tracking**: Detect patterns in script usage and outcomes across multiple runs.
* **Performance Optimization**: Monitor key metrics to ensure optimal script performance.
* **Cost Control**: Analyze failure trends and consumption patterns for improved cost visibility.
* **Efficient Troubleshooting**: Identify and resolve issues using error tracking and detailed log information.


## Key Features

**Search and Filter Capabilities**

* **Column Filters**: View specific records by setting column values or combining filters with logical operators. [Learn more](../monitoring/monitoring-custom-scripts.md#columns-filtering){:target="_blank"}.
* **Time-based filters** Analyze script performance for specific dates or date ranges. [Learn more](../monitoring/monitoring-custom-scripts.md#time-based-filtering){:target="_blank"}.
* **Search Functionality** Look up script runs using Run ID and other searchable column fields.

**UI Features**

* **Tooltips**: Hover over metrics for additional information.
   <img src="../images/hover-over-metrics.png" alt="hover over metrics" title="hover over metrics" style="border: 1px solid gray; zoom:75%;">

* **ID Copying**: Click the copy icon when hovering over *Run ID* or *Log ID*. 
   <img src="../images/copy-run-id.png" alt="copy run id" title="copy run id" style="border: 1px solid gray; zoom:75%;">

* **Performance Analysis**: View hourly data for specific days or daily trends over time.
* **Script Selection**: Switch between scripts using the dropdown menu.
   <img src="../images/current-script-selection.png" alt="current selection" title="current selection" style="border: 1px solid gray; zoom:75%;">

* **Status Indicators**:
    * Green labels for successful runs.
    * Red labels for failed runs.
    * "*In Progress*" for currently deploying scripts

        <img src="../images/in-progress-deployments.png" alt="in progress" title="in progress" style="border: 1px solid gray; zoom:75%;">

* **Navigation**: Use arrow buttons or keyboard shortcuts (<code>K</code> for previous, <code>J</code> for next) to navigate records.
    <img src="../images/keyboard-shortcuts.png" alt="keyboard shortcuts" title="keyboard shortcuts" style="border: 1px solid gray; zoom:75%;">

* Click on each script run record to see the record-level view of the log based on the **Run ID**. [Learn more](../monitoring/monitoring-custom-scripts.md#record-view){:target="_blank"}.
* Click the **Logs** tab to view metrics and summary information on each run-based log recorded for the script.
* Log visibility depends on how the script is configured by the developer:
    * Failure runs **can generate logs if logging is implemented correctly**. 

    * For **in-progress** runs, logs using **default logging** appear only after the run completes. 

    * With the **custom <code>korelogger</code> library**, logs populate in real-time, with support for structured log levels (e.g., info, debug, error), making it ideal for live monitoring and debugging.

* Export runs and logs as a dataset in .csv format, based on the applied filters and selected date range for further analysis, editing, and debugging.


## Best Practices

* A script you want to analyze must be consumed either via API calls or through the execution of the API/Function node.
* Identify script runs with low or high response times and the overall P90 and P99 thresholds to isolate underperforming runs for further investigation.
* Analyze the source and source type of a script run to determine the cause for failure, delayed response time, and other performance issues.
* Analyze the input and output for each script run (identified by **Run ID**) using Log data like *Log ID*, *Log level*, *Log message*, and *Timestamp*.
* **Total Runs**, **Response Time** (P90 and P99), and **Failure Rate** for all script executions help uncover performance insights, diagnose errors, and optimize script usage.
* Use the input and output code editors available in the record view to analyze and troubleshoot the script run logs.
* Perform script tracing using the record view for a specific run. [Learn more](../monitoring/monitoring-custom-scripts.md#record-view){:target="_blank"}.


## Access Monitoring Custom Scripts

To access the feature, follow the steps below:

1. [Navigate](../../administration/overview.md#access-settings-console){:target="_blank"} to the **Settings** Console.
2. On the left menu, select **Monitoring** > **Custom scripts**.
   <img src="../images/access-custom-script-monitoring.png" alt="custom scripts monitoring" title="custom scripts monitoring" style="border: 1px solid gray; zoom:75%;">

3. For first-time access, select a script from the dropdown menu.
    
    <img src="../images/select-script.png" alt="select script" title="select script" style="border: 1px solid gray; zoom:75%;">

**Key Considerations** 

* At least one custom script must be deployed and executed via API call or API/Function node.
* If no custom script has been deployed and executed, or if it has been deployed but not yet executed, the following message is displayed. 
    
      <img src="../images/no-data-to-display.png" alt="no data" title="no data" style="border: 1px solid gray; zoom:75%;">

* If a previously deployed and executed script is undeployed, only the existing run-level and log data remain accessible. No new runs or logs will be generated unless the script is redeployed and executed again. 
 

The system loads the **Monitoring custom scripts** feature with data for the last week (from the current date), which is the default time range selection.

You can select the required date/date range to view the relevant data.

<img src="../images/one-week-default.png" alt="default calendar selection" title="default calendar selection" style="border: 1px solid gray; zoom:75%;">

## Custom Scripts Monitoring Information

This feature provides a centralized view of actionable insights into run-level and log-level details of the selected script that has been deployed and executed in your account. There are two sections to enable detailed analysis of each run and the associated execution logs:

* **All Runs:** Shows data for all script runs, including status, deployed version, response time, function, source, and more.
* **Logs:** Displays log details for the functions executed within the script, including input, output, errors, informational messages, and debug data.


### Customize Data View

The key features for customizing the data in the page include:

* **Script Name Filter**: Use this to select and view data for a specific script you want to monitor. You can also choose another deployed and executed script from the list to view its metrics and logs.
* **Time Selection Filter**: Required to analyze script runs data for a specific period in the past or current day. [Learn more](../monitoring/monitoring-custom-scripts.md#time-based-filtering){:target="_blank"}.
* **Filter By Option**: An optional multi-field, multi-level filter for targeted analysis of runs and logs. [Learn more](../monitoring/monitoring-custom-scripts.md#columns-filtering){:target="_blank"}.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>In the <b>All Runs</b> section, all column fields except <b>Executed On</b> can be used as filters.</li>
<li>In the <b>Logs</b> section, all column fields except <i>Timestamp</i> can be used as filters.</li></ul></p></div>

### All Runs Section

It displays performance metrics and run-level metadata to analyze the script’s performance.

#### Performance Metrics Summary

* **Total Runs**: Total executions since deployment, indicating usage and billing.
* **Response Time**:  The P90 and P99 response times indicate the thresholds below which 90% and 99% of responses fall, respectively, indicating script consistency. Lower values reflect reliable speed, while higher values suggest performance issues. For example,
    * If a script's P90 is 100 seconds, it means that 90% of the runs are completed within 100 seconds or less.
    * If a script’s P99 is 100 seconds, it means that 99% of the runs are completed within 100 seconds.
* **Failure Rate**: Indicates the number of script runs that failed with an error code out of the total runs executed since deployment. For example, 1 failure in 3 runs = 33.33%.

    <img src="../images/failure-rate.png" alt="failure rate" title="failure rate" style="border: 1px solid gray; zoom:75%;">


#### Run-level Metadata

This section displays a dynamic table with the following data indicating the run-level performance of the script. 

<table>
  <tr>
   <td><strong>Column Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Run ID</strong>
   </td>
   <td>Unique identifier for the script run.</td>
  </tr>
  <tr>
   <td><strong>Status</strong>
   </td>
   <td>Success, Failed, or In Progress.
   </td>
  </tr>
  <tr>
   <td><strong>Deployment Version</strong>
   </td>
   <td>Version number (increments with each deployment).
   </td>
  </tr>
  <tr>
   <td><strong>Response Time</strong>
   </td>
   <td>Execution duration (empty for failed/in-progress runs).
   </td>
  </tr>
  <tr>
   <td><strong>Function</strong>
   </td>
   <td>Executed function name.
   </td>
  </tr>
  <tr>
   <td><strong>Executed on</strong>
   </td>
   <td>Date and time of execution.
   </td>
  </tr>
  <tr>
   <td><strong>Source Type</strong>
   </td>
   <td>Tool (from tool flow) or API (from endpoint).
   </td>
  </tr>
  <tr>
   <td><strong>Source</strong>
   </td>
   <td>Name of the triggering source.</td>
  </tr>
</table>

### Logs Section

It provides insights into script execution through captured logs.


#### Performance Metrics Summary

The UI summarizes key metrics for the selected period, offering actionable insights into the logs captured during the script execution.

* **Total Logs**: The total number of logs recorded during the script’s execution.
   <img src="../images/total-logs.png" alt="total logs" title="total logs" style="border: 1px solid gray; zoom:75%;">


The **Total Logs** metric helps determine:

* **Script activity level** – how many actions or events were logged during execution? 

* **Debugging depth** – more logs can indicate detailed logging, which helps with debugging. 

* **Execution complexity** – a high number of logs may suggest the script performs multiple operations or involves several functions. 

* **Error visibility** – helps assess whether sufficient logging is available to trace issues or monitor script behavior effectively.


#### Log-level Metadata

This section displays a dynamic table with the following log-level data:


<table>
  <tr>
   <td><strong>Column</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Log ID</strong>
   </td>
   <td>Unique log identifier.</td>
  </tr>
  <tr>
   <td ><strong>Log level</strong>
   </td>
   <td>Stdout, Stderr, Info, Debug, Warning, or Error. <a href="#enhanced-logging-for-gvisor-monitoring">Learn more</a> about the supported logging options for the gVisor service.</td>
  </tr>
  <tr>
   <td><strong>Log Message</strong>
   </td>
   <td>Recorded message for specific actions.</td>
  </tr>
  <tr>
   <td><strong>Timestamp</strong>
   </td>
   <td>Date and time of log entry.</td>
  </tr>
  </table>

## Time-based Filtering

Use the time selection dropdown (displayed as "Custom") at the top-right of the page to view and monitor script runs/logs within a specific past period or the current day. This allows you to focus on specific runs to track changes or perform targeted debugging.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Data is displayed only if the selected script’s runs were executed during the selected period.</p></div>

[Learn more](../monitoring/audit-logs.md#time-based-audit-logs){:target="_blank"} about the calendar widget.

## Columns Filtering

You can narrow down the information displayed for custom script runs and logs by applying **custom column filters**. This functionality is similar to the **Filter** in the Audit Logs feature. [Learn more](../monitoring/audit-logs.md#filter-audit-logs){:target="_blank"}. 

Additionally, the filter for custom scripts includes the **contains** operator, which matches results that include a specific keyword or value you enter. For example, the following image depicts checking if the **Log message** contains the string “*Adding*.”  
 
<img src="../images/contains-adding.png" alt="contains adding" title="contains adding" style="border: 1px solid gray; zoom:75%;">


These filters allow you to select specific column values, compare the chosen or entered values, and apply logical operators across columns for multi-level filtering, providing targeted, custom data on the UI.

Filter customization streamlines tracking and debugging of script runs at a detailed level, enhancing the user experience.


### Steps to Add a Custom Filter

1. Select the **All runs** or **Logs** tab based on the data you want to filter.
2. Click the **Filter** icon on the top right.
3. Click **+ Add Filter**.
    
    <img src="../images/access-filter.png" alt="access filter" title="access filter" style="border: 1px solid gray; zoom:75%;">

5. In the **Filter By** window, select column, operator, and enter values.
   <img src="../images/choosing-filter.png" alt="choosing filter" title="choosing filter" style="border: 1px solid gray; zoom:75%;">
 
    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>You can enter multiple values in the <b>Enter Value</b> field by pressing the <i>Tab</i> key after each entry. The system will filter data based on all the entered values. </p></div>

    <img src="../images/apply-multiple-filters.png" alt="multiple filters" title="multiple filters" style="border: 1px solid gray; zoom:75%;">

<ol start="6"><li>Click <b>Apply</b>.</li></ol>

The UI displays all the relevant run and log records that align with the applied filter(s). The number of filters you have applied is displayed on the **Filter** icon.

### Multiple Filters

Users can combine filters using AND/OR operators for multi-level filtering. Note that AND/OR operators cannot be mixed in the same filter set. [Learn more](../monitoring/audit-logs.md#add-multiple-filters){:target="_blank"} about using multiple filters.

## Record View

The record view offers log-specific insights at the script run level after each execution, enabling faster debugging, better traceability, and more effective optimization of custom scripts.

**Key Features**

* **Focused Debugging**: Script execution logs help effectively isolate and troubleshoot issues.
* **Detailed Visibility**: Shows input, output, and log-level metadata, allowing in-depth analysis of what happened during the run.
* **Structured Layout**: Displays data in a clear and organized format, often with expandable sections in the JSON editors to facilitate easy inspection of values.
* **Actionable insights**:

    * Failures or performance bottlenecks.
    * Unexpected inputs or outputs.
    * Misconfigured logic or API responses.

* **Enhanced Usability**: With features such as keyboard navigation (e.g., J/K to switch records), copy-to-clipboard, expand/collapse, and scroll, users can efficiently explore logs.

### Steps to Access Record View

1. In the **All Runs** section, click the record you want to view.
2. The record view page is displayed with the following information: 

    * Run ID
    * Log-specific information, including the *Log ID*, *Log level*, *Log message*, and *timestamp*. [Learn more](../monitoring/monitoring-custom-scripts.md#log-level-metadata){:target="_blank"}.
    * JSON editors that display the script’s input and the function’s output, respectively. 
    * Navigation buttons.

       <img src="../images/record-view.png" alt="record view" title="record view" style="border: 1px solid gray; zoom:75%;">

## Enhanced Logging for gVisor Monitoring

The Platform offers two convenient logging options to help you effectively capture and monitor logs for your custom scripts: using default logging functions or a custom logging library (*korelogger*).

**Key Considerations**

* When using **default logging** (e.g., `print()` in Python or `console.log()` in JavaScript), logs appear in the **Logs** section only after the script execution completes (success or failure).
* **Custom logging** with the `korelogger` library enables real-time log streaming where logs are populated in the table as they're generated.
* We recommend using `korelogger` for its log-level control and immediate log visibility, which significantly improves monitoring and debugging efficiency.


### Option 1: Standard Logging (Simple Setup)

This method uses default logging functions such as:

* `print()` in Python 

* `console.log()` in JavaScript 


Logs generated using this method are captured and displayed under `stdout` during script execution. 

An example script and its output in Python are given below:


```
def check_print_function():
    print("Checking print function...")
    print("Print function is working!")
return
```

The output is captured in `stdout` as follows:

```
Checking print function...
Print function is working!
```

### Option 2: Advanced Logging with korelogger (Recommended for Monitoring)

The `korelogger` library is provided to users to enable detailed trace capture, supporting enhanced script monitoring and observability.

Additionally, the same logs are also captured in stdout in the following format: 

```
<LOG_LEVEL> :: <LOG_MESSAGE>
```

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The above log format can be modified as required.</p></div>

A sample script and its output, which uses the `korelogger` library in Python, are given below:

**Script**

```
import korelogger
def call_openai_chat(prompt):
    korelogger.debug("Debug log using korelogger")
    korelogger.info("Info log using korelogger")
    korelogger.warning("Warning log using korelogger")
    korelogger.error("Error log using korelogger")
    return
```

**Output captured in** `stdout`

```
DEBUG :: Debug log using korelogger
INFO :: Info log using korelogger
WARNING :: Warning log using korelogger
ERROR :: Error log using korelogger
```

**Log traces are pushed in the following format:**

```
{
    "name": "gvisor_info_log",
    "context": {
        "trace_id": "0x3453665abxxxxxxxxxxxxxxxxxxxxxxx",
        "span_id": "0x7e3xxxxxxxxxxxx",
        "trace_state": "[]"
    },
    "kind": "SpanKind.INTERNAL",
    "parent_id": null,
    "start_time": "2025-05-14T06:07:27.238927Z",
    "end_time": "2025-05-14T06:07:27.238966Z",
    "status": {
        "status_code": "UNSET"
    },
    "attributes": {
        "traceparent": "00-abxxxxxxxxxxxxxxxxxxxxxxxxxx0-12345xxxxxxxxxxxf-01",
        "run_id": "run_12345",
        "deployment_id": "deploy_67890",
        "source": "api_call",
        "source_type": "test",
        "log.message": "Using korelogger to log",
        "log.level": "INFO",
        "log.trace_id": "00-abcdef12345xxxxxxxxxxxxxxxxxxxx0-12345xxxxxxxxxxf-01",
        "log.meta.msg": "Using korelogger to log",
        "log.meta.pid": "41",
        "log.meta.logid": "4XXXXXX5-5XX0-4XX6-bXX8-4XXXXXXXXXX6"
    },
    "events": [],
    "links": [],
    "resource": {
        "attributes": {
            "service.name": "gvisor-py-normal",
            "service.instance.id": "4XXXXXX1-9XX9-4XXb-9XXc-aXXXXXXXXXX1",
            "deployment.environment": "rnd-gxxe.kxxe.ai"
        },
        "schema_url": ""
    }
}
```


Each log entry is organized using the following identifying markers for tracking and filtering:

* **traceparent** - Links related operations together.
* **run_id** - Identifies each script execution.
* **deployment_id** - Tracks which version of your script ran.
* **source** - Shows where the log came from.
* **source_type** - Categorizes the type of source.

Log messages and levels are available as `log.message` and <code>log.level</code> in the attributes field.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The structure of the attributes field can be modified as required.</p></div>


## Export Runs and Logs Data

Exporting **All Runs** and **Logs** data for the selected custom script downloads a `.csv` file in the configured schema, reflecting the selected date range and applied column filters. To export the dataset, follow the steps below:

1. Select the **All Runs** or **Logs** tab.
2. Click the **Ellipses** button, and select **Export** in the top-right corner.
3. A *CSV* file containing records of all runs or logs for the selected script is downloaded to the configured system location.

Once the data is exported, the following message is displayed.
<img src="../images/export-flow.png" alt="export flow" title="export flow" style="border: 1px solid gray; zoom:75%;"> 

If any error occurs during the export process, the following message is displayed: 

<img src="../images/export-err.png" alt="export error" title="export error" style="border: 1px solid gray; zoom:75%;">

The file name is automatically saved in the following formats:

* **Runs Data**: `<scriptname>_runs_data`. Example: Qbalance_runs_data.
* **Logs data**: `<scriptname>_logs_data`. Example: Qbalance_logs_data.

The export schema files include the dashboard data organized in the following format.

**Runs**

<img src="../images/runs-schema.png" alt="runs schema" title="runs schema" style="border: 1px solid gray; zoom:75%;">

**Logs**

<img src="../images/logs-schema.png" alt="logs schema" title="logs schema" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Each user’s export process is implemented separately, ensuring that one user's cancellations or adjustments do not interfere with another user’s export pipeline.</p></div>
