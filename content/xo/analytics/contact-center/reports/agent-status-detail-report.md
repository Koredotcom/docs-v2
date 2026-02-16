--8<-- "includes/ccai-reports-back-link.md"

# Agent Status Detail Report

## Generating the Agent Status Detail Report

The Agent Status Detail Report is a detailed report on all status transitions over a date range.  

Steps to generate the Agent Status Detail Report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, choose the **Agent Status Detail Report**.
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
8. The **Agent Status Detail Report** is generated.  
<img src="../images/agent-status-detail-report-created.png" alt="Agent Status Detail Report Created" title="Agent Status Detail Report Created" style="border: 1px solid gray; zoom:100%;">

9. Click the **Run** icon next to the instance of the report.  
<img src="../images/run-agent-status-detail-report.png" alt="Run Agent Status Detail Report" title="Run Agent Status Detail Report" style="border: 1px solid gray; zoom:100%;">

While generating reports you have two options, Run On Demand and Schedule.

**Run On Demand**: While creating a new report or editing an existing report, the schedule of the report can be set to run on demand.

**Schedule**: While creating a new report or editing an existing report, the schedule of the report can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later then it will automatically be generated on the scheduled day and time without the need to click Run.

10. Click the **PDF/Page** icon to download the report.  
<img src="../images/pdf-agent-status-detail-report.png" alt="Agent Status Detail Report PDF" title="Agent Status Detail Report PDF" style="border: 1px solid gray; zoom:100%;">

    !!! Note

        The red dot beside the report indicates that it was generated within the last 24 hours. You can download, save, and view the report in PDF format.

The Agent Status Detail Report is generated and is available for download.  
<img src="../images/agent-status-detail-report-output.png" alt="Agent Status Detail Report Output" title="Agent Status Detail Report Output" style="border: 1px solid gray; zoom:100%;">

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
   <td>Begin
   </td>
   <td>DateTime at which the Agent begins their stay in a status.
   </td>
   <td>“01/06/23 15:57:17”
   </td>
  </tr>
  <tr>
   <td>End
   </td>
   <td>DateTime at which the Agent ends their stay in a status.
   </td>
   <td>“01/06/23 15:57:17”
   </td>
  </tr>
  <tr>
   <td>Standard Status
   </td>
   <td>Status according to the Standard Statuses in SmartAssist.
   </td>
   <td>Busy
   </td>
  </tr>
  <tr>
   <td>Custom Status
   </td>
   <td>Status according to the Custom Statuses configured by the Customer.
   </td>
   <td>Security Training
   </td>
  </tr>
  <tr>
   <td>Duration
   </td>
   <td>Time for which the Agent’s status was marked Busy.
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
  </tr>
</table>

#### Related Link

* [Reports List](../reports/reports-list.md)