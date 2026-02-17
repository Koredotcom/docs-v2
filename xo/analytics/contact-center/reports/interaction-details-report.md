--8<-- "includes/ccai-reports-back-link.md"

# Interaction Details Report

## Generating the Interaction Details Report

Interaction Details Report is a comprehensive report covering how all interactions were processed, by whom, and their final dispositions. This report contains the meta-data of each conversation, except the recording or transcript. A comma-separated list of all Disposition Codes assigned to that conversation is included in the CSV output file of the Interaction Details Report.

Steps to generate the Interaction Details Report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, choose the Interaction Details report.
3. Enter the **Report Name** and **Report Description**.
4. Select a **Time Period**.
5. Select **Data Filters**.
6. Select Report Generation and choose from the following options:
    * Schedule
        * Run On Demand
        * Schedule
        * Run On Demand
        * Schedule
            * You can create up to six schedules (only one if you select Hourly).  
                <img src="../images/schedule-options.png" alt="Schedule Options" title="Schedule Options" style="border: 1px solid gray; zoom:70%;">
    * Select Format
        * PDF
        * CSV
    * Send To (single email address or a mailing list)
7. Click **Create**.
8. The **Interaction Details Report** is generated.  
<img src="../images/interaction-details-report-generated.png" alt="Interaction Details Report Created" title="Interaction Details Report Created" style="border: 1px solid gray; zoom:100%;">

9. Click the **Run** icon next to the instance of the report.  
<img src="../images/run-interaction-details-report.png" alt="Run Interaction Details Report" title="Run Interaction Details Report" style="border: 1px solid gray; zoom:100%;">

While generating reports you have two options, Run On Demand and Schedule.

**Run On Demand**: While creating a new report or editing an existing report, the schedule of the report can be set to run on demand.

**Schedule**: While creating a new report or editing an existing report, the schedule of the report can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later then it will automatically be generated on the scheduled day and time without the need to click Run.

10. Click the **PDF/Page** icon to generate the output of that report.  
<img src="../images/pdf-interaction-details-report.png" alt="Interaction Details Report PDF" title="Interaction Details Report PDF" style="border: 1px solid gray; zoom:100%;">

    !!! Note

        The red dot beside the report indicates that it was generated within the last 24 hours. You can download, save, and view the report in PDF format.

The Agent Interaction Details report is generated and is available for download.  
<img src="../images/interaction-details-report-output.png" alt="Interaction Details Report Output" title="Interaction Details Report Output" style="border: 1px solid gray; zoom:100%;">

### About Report Fields

<table>
  <tr>
   <td><strong>FIELD</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>EXAMPLE</strong>
   </td>
  </tr>
  <tr>
   <td>Channel
   </td>
   <td>Name of the Channel.
   </td>
   <td>“Voice” or “Teams”
   </td>
  </tr>
  <tr>
   <td>Start Time
   </td>
   <td>DateTime at which the Session between Agent and End User started.
   </td>
   <td>“01/06/23 15:57:17”
   </td>
  </tr>
  <tr>
   <td>Agent
   </td>
   <td>Name of the first Agent.
   </td>
   <td>John Doe
   </td>
  </tr>
  <tr>
   <td>Customer
   </td>
   <td>Any Customer ID (including name), based on integration.
   </td>
   <td>Web/mobile user
   </td>
  </tr>
  <tr>
   <td>Duration
   </td>
   <td>Duration of the call.
   </td>
   <td>“323:21:23”
   </td>
  </tr>
  <tr>
   <td>Inbound/Outbound
   </td>
   <td>Whether it is an Inbound or an Outbound conversation.
   </td>
   <td>Inbound
   </td>
  </tr>
  <tr>
   <td>Disposition
   </td>
   <td>One of the dispositions (CSV contains all Dispositions).
   </td>
   <td>Resolved
   </td>
  </tr>
  <tr>
   <td>Queue Name
   </td>
   <td>Names of the Queues (CSV contains all Queue Names).
   </td>
   <td>Residential – Land
   </td>
  </tr>
  <tr>
   <td>Hold Duration
   </td>
   <td>Total duration for which the conversation was placed on hold.
   </td>
   <td>“12:34:56”
   </td>
  </tr>
  <tr>
   <td>ACW Duration
   </td>
   <td>The total duration of After Call Work (ACW) performed after the call.
   </td>
   <td>“12:34:56”
   </td>
  </tr>
  <tr>
   <td>Queue Wait Time
   </td>
   <td>The time for which each queue placed the conversation on wait (CSV contains all Queue Wait Times).
   </td>
   <td>“12:34:56”
   </td>
  </tr>
  <tr>
   <td>Assignments (CSV Format)
   </td>
   <td>The number of times this conversation has been assigned to any agent, irrespective of the queue.
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>Acceptances (CSV Format)
   </td>
   <td>The number of times this conversation has been accepted by any agent, irrespective of the queue.
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>SmartStatus (CSV Format)
   </td>
   <td>The Conversation status.
   </td>
   <td>Completed (AbandonedWithAgent)
   </td>
  </tr>
  <tr>
   <td>Reason (CSV Format)
   </td>
   <td>The reason for the status.
   </td>
   <td>Default Queue: Aug2Uat 2
   </td>
  </tr>
</table>



#### Related Link

* [Reports List](../reports/reports-list.md)