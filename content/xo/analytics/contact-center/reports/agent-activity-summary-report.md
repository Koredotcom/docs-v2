--8<-- "includes/ccai-reports-back-link.md"

# Agent Activity Summary Report

## Generating the Agent Activity Summary Report

Agent Activity Summary report is a summary of agent time by status, calculated daily.

Steps to generate Agent Activity Summary report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, Select the Agent activity summary report.
3. Enter the **Report Name** and **Report Description**.
4. Select a **Time Period**.
5. Select **Data Filters**.
6. Select Report Generation and choose from the following options:
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
8. The **Agent Activity Summary Report** is generated.  
<img src="../images/agent-activity-summary-report-created.png" alt="Agent Activity Summary Report Created" title="Agent Activity Summary Report Created" style="border: 1px solid gray; zoom:100%;">

9. Click the **Run** icon as shown below to generate the report.  
<img src="../images/run-report.png" alt="Run Agent Activity Summary Report" title="Run Agent Activity Summary Report" style="border: 1px solid gray; zoom:100%;">

While generating reports you have two options, Run On Demand and Schedule.

**Run On Demand**: While creating a new report or editing an existing report, the schedule of the report can be set to run on demand.

**Schedule**: While creating a new report or editing an existing report, the schedule of the report can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later then it will automatically be generated on the scheduled day and time without the need to click Run.

10. First, the report object is configured (as pdf) and then the report output is generated as pdf.
Click the **PDF/Page** icon to download the report.  
<img src="../images/pdf-report-agent-activity-summary.png" alt="PDF Agent Activity Summary Report" title="PDF Agent Activity Summary Report" style="border: 1px solid gray; zoom:100%;">

    !!! Note

        The red dot beside the report indicates that it was generated within the last 24 hours. You can download, save, and view the report in PDF format.

The Agent Activity Report is generated and is available for download.  
<img src="../images/agent-activity-summary-report-output.png" alt="Agent Activity Summary Report Output" title="Agent Activity Summary Report Output" style="border: 1px solid gray; zoom:100%;">

### About Report Fields

<table>
  <tr>
   <td><strong>FIELD</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>EXAMPLE</strong>
   </td>
   <td><strong>WEEKLY SUMMARY</strong>
   </td>
   <td><strong>MONTHLY SUMMARY</strong>
   </td>
  </tr>
  <tr>
   <td>Date
   </td>
   <td>Date (12:00 am-11:59 pm) – all statistics accumulated by Date.
   </td>
   <td>“02/21/2023”
   </td>
   <td>Not Applicable (NA)
   </td>
   <td>Not Applicable (NA)
   </td>
  </tr>
  <tr>
   <td>Login
   </td>
   <td>First login event, if it exists.
   </td>
   <td>“11:50:57 PM”
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Logout
   </td>
   <td>Last logout event, if it exists.
   </td>
   <td>“11:50:57 PM”
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Available
   </td>
   <td>Time for which the Agent’s status was marked Available.
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Busy
   </td>
   <td>Time for which the Agent’s status was marked Busy.
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Away
   </td>
   <td>Time for which the Agent’s status was marked Away.
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Interacting
   </td>
   <td>Time for which the Agent was actually interacting (or engaged with post-call work).
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Idle
   </td>
   <td> Time for which the Agent was Idle – in other words, Available, but not handling any conversations.
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
</table>

#### Related Link

* [Reports List](../reports/reports-list.md)