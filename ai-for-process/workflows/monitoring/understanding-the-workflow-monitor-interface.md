# Understanding Workflow Monitor

The Workflow Monitor capabilities are shown on the following tabs:

* **All runs**: It shows comprehensive data on all workflow run instances and provides a comprehensive record of all the endpoint calls made to the workflow. 

* **Model runs**: This tab shows specific data on AI node run instances, focusing on endpoint calls made to AI nodes within the workflow.

Both tabs include summary metrics at the top of the page, including total runs/requests, average response times (P90 and P99), and failure rates.

<img src="../images/new_agent_monitor.png" alt="All runs and Model runs tabs" title="All runs and Model runs tabs" style="border: 1px solid gray; zoom:80%;"/>

## All Runs

The All runs tab provides the following information for each workflow run:

* **Run ID**: The unique identifier for the flow.
* **Status**: The current state of the request. It displays one of the following statuses:
    * **In Progress**: The request is being processed.
    * **Waiting**: The request is outside of Agent Platform and is awaiting a response from the connected system (typically for API nodes in Async mode).
    * **Success**: The request has been completed successfully.
    * **Failed**: The request wasn't completed successfully.
* **Response time**: The duration the workflow takes to complete a request and provide an output.
* **Nodes executed**: The total number of nodes executed in the run.
* **Start time**: The time when the request is initiated.
* **End time**: The time the response is received.
* **Type**: Indicates the category of the trigger such as Event-based, Schedule-based, or API-based.
* **Source**: Indicates where the workflow was triggered. For example:
    * Event-based sources: The provider or service that triggered the workflow (e.g., Gmail). 
    * Schedule-based sources: Time-based triggers configured to run at specific intervals.

You can also see the following metrics on the top of the page: 

* **TOTAL RUNS**: The total number of workflow runs. 
* **RESPONSE TIME**: The average response time of all the workflow runs. It's measured by the following two metrics:
    * **P90**: This metric represents the response time below which 90% of the requests fall.
    * **P99**: This metric represents the response time below which 99% of the requests fall.
* **FAILURE RATE**: The percentage of failed runs.

These metrics are dependent on the selected date range, filters, and search criteria. When you apply a search, the metrics on the top of the page will be updated to reflect the specific request. Essentially, the displayed top metrics will vary based on the filters you apply. 

## 	Model Runs

Each AI node in the workflow is recorded as a separate request in the Model runs tab of the Workflow monitor page. For example, if three AI nodes are used in a workflow, three separate requests for each of the three AI nodes are displayed.

If your workflow doesn't have any AI nodes, this section will remain empty. Once you add AI nodes, the Model runs will begin to reflect here.

The Model runs tab provides the following information for each AI node call:

* **Request ID**: The unique identifier of the AI node request.
* **Status**: The current state of the request. It displays one of the following statuses: 
    * **In Progress**: The request is being processed.
    * **Waiting**: The request is outside of Agent Platform and is awaiting a response from the connected system (typically for API nodes in Async mode).
    * **Success**: The request has been completed successfully.
    * **Failed**: The request wasn't completed successfully.
* **Node name**: The name of the AI node.
* **Model name**: The model that's used for the AI node.
* **Connection or Deployment name**: The connection or deployment associated with the model. 
* **Response time**: The amount of time taken by the AI node to complete the request.
* **Start time**: The time when the AI node has started its execution.
* **End time**: The time when the AI node has completed its execution.

You can also see the following metrics on the top of the page:

* **TOTAL REQUESTS**: The total number of AI node requests.
* **RESPONSE TIME**: The average response time of all the AI node requests. It's measured by the following two metrics:
    * **P90**: This metric represents the response time below which 90% of the requests fall.
    * **P99**: This metric represents the response time below which 99% of the requests fall.
* **FAILURE RATE**: The percentage of instances in which the AI node has failed in execution.

These metrics are dependent on the selected date range, filters, and search criteria. When you apply a search, the metrics on the top of the page will be updated to reflect the specific request. Essentially, the displayed top metrics will vary based on the filters you apply.

## Viewing Detailed Run Information

Clicking each row in either the All runs tab or the Model runs tab opens a detailed view panel on the right. This view is similar to the Run dialog panel on the workflow canvas. [Learn more](../workflow-builder/perform-other-actions-on-the-flow-builder/run-the-flow.md).

<img src="../images/agent_monitor_viewing_run_information.png" alt="Viewing detailed run information" title="Viewing detailed run information" style="border: 1px solid gray; zoom:80%;"/>

The panel displays the following details:

*  **Run ID/Request ID**: The unique identifier for the flow.
* **Response Time**: The duration the workflow takes to complete a request and provide an output.
*  **Debug icon**: Clicking this icon displays the debug log details.
*  **Input**: The Input section displays the input sent to the workflow.
*  **Flow log**: The flow log section displays the information of each node.
    * **Success**: Displays the log as in the debug panel.
    * **Failure**: Displays failure details as in the debug panel.

        For AI nodes, when you expand the node you can see the information related to each node along with the scanner information.

*  **Output section**: The Output section displays the workflow's output (for successful runs). You can copy the output and view tokens.

    <img src="../images/agent_monitor_viewing_run_information_detailed.png" alt="Viewing detailed run information" title="Viewing detailed run information" style="border: 1px solid gray; zoom:80%;"/>


## Understanding the Impact of Timeouts on Workflow Endpoints

The impact of timeouts on workflow endpoints depends on whether the process is synchronous (Sync) or asynchronous (Async). **Sync** requests are handled and fulfilled immediately, while **Async** requests may pause and show a ‘Waiting’ status until a response is received. If the response time is longer or the timeout is set to infinite, the system will wait indefinitely until the external system responds.

Below are the four scenarios showing how timeouts affect the workflow endpoint, along with the corresponding status on the Workflow monitoring page:

**Workflow 'Sync' & API node 'Sync'**:

* Request immediately fulfilled, no specific message to the endpoint.
* 'In-progress' status while running.

**Workflow 'Sync' & API node 'Async' (API node timeout <  Sync timeout)**:

* Workflow API retrieves data, flow executes as 'In-progress' status, and the response is sent.
* External requests: Workflow execution is paused awaiting external’s systems response with 'Waiting' status, resumes to 'In-progress' when workflow execution resumes.

**Workflow 'Async' & API node 'Sync'**:

* Workflow executes, and the response is sent to the callback URL.
* 'In-progress' status while flow is running.

**Workflow 'Async' & API node 'Async' (API node timeout < Workflow Async timeout OR both are set to infinite)**:

* External requests: Workflow execution is paused awaiting external’s systems response with 'Waiting' status, resumes to 'In-progress' when workflow execution resumes.
* If the external system tries the same callback URL again, it will be notified that the request has already been fulfilled.


The timeout settings affect how long the system waits for responses and how it handles retries, ensuring proper status updates and communication with external systems. For more information on configuring timeouts, see [Configure a workflow](../configure-a-workflow.md) and [API Node](../workflow-builder/types-of-nodes/api-node.md).

## Searching and Filtering Information

### Manual Search

Use the search box in the top right corner of the Workflow monitor page to find specific runs or calls based on keywords.

### Time-based Search

Use the calendar option to search for runs or calls from a specific time period. You can  filter your search results by time period, whether it’s something from the last day, week, month, or year. 

Steps to use the time-based search:

1. Click the calendar button in the top right corner of the Workflow monitor page.

2. Select a predefined time range or set custom dates.

3. Click **Apply** to update the results.


### Custom Filters

Use the filter option to filter the information displayed in the Workflow monitor dashboard by applying custom filters. These filters allow you to select specific columns, apply operators such as **Is** **Equal To** or **Is Not Equal To,** and then specify the desired value.

You can also add multiple filters using AND/OR operators for more precise results.

Steps to use the filters:

1. Click the Filter icon.
2. Click **+ Add filter**.
3. Select options for Column, Operator, and Value.
4. Click **Apply**.

## Workflow Run Errors

In the **All runs** section, any error that occurs via the endpoint during an workflow run is displayed in a separate window for the specified *Run ID*.

To view detailed error information, click on the corresponding workflow run entry in the **Workflow Monitor** dashboard.


An error message includes the following information:

* HTTP status code returned by the web server as a response.
* A message describing the error.
* Suggestions to verify and manage the error.

### Error Categories

The errors are classified as follows:

* **Authorization:** An error that occurs during API key authorization of a workflow.
* **Data Validation:** Any discrepancy detected when validating input fields and API calls during a workflow run.
* **Content Filter:** Breaches of guardrail threshold limits during AI node execution.
* **Internal Server Error:** Technical issues encountered with the internal server.
* **Network**: Technical issues encountered with the network connectivity.

### Error Scenarios 

The table below lists the errors that can occur in the **Workflow Monitoring** dashboard, including the error categories and HTTP status codes:


<table>
  <tr>
   <td><strong>Error Scenario</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Category</strong>
   </td>
   <td><strong>HTTP Status Code</strong>
   </td>
  </tr>
  <tr>
   <td>Mandatory input field
   </td>
   <td>A mandatory input field is missing for the workflow run.
   </td>
   <td rowspan="4" >Data Validation
   </td>
   <td rowspan="3" >400 Bad Request
   </td>
  </tr>
  <tr>
   <td>Invalid data type for input field
   </td>
   <td>An incorrect data type is provided for a field input.
   </td>
  </tr>
  <tr>
   <td>Empty Input Object
   </td>
   <td>A field input is missing a value or has an empty value.
   </td>
  </tr>
  <tr>
   <td>Large Request Payload
   </td>
   <td>The request payload exceeds the server's size limit.
   </td>
   <td>413 Payload Too Large
   </td>
  </tr>
  <tr>
   <td>Any Server side issues
   </td>
   <td>A technical issue caused the server to fail.
   </td>
   <td>Internal Server
   </td>
   <td>500 Internal Server Error
   </td>
  </tr>
  <tr>
   <td>Network Issues:- Request timeout on the server
   </td>
   <td>Temporary network or Agent Platform server connection issue.
   </td>
   <td>Network
   </td>
   <td>408 Request Timeout
   </td>
  </tr>
  <tr>
   <td>Guardrail Failure
   </td>
   <td>The flow execution was aborted at the <strong>AI node</strong> due to a guardrail violation, as the risk score exceeded the threshold.
   </td>
   <td>Content Filter
   </td>
   <td>403 Forbidden
   </td>
  </tr>
</table>


