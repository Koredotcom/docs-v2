--8<-- "includes/ccai-reports-back-link.md"

# Agent Metrics Daily Report

## Generating the Agent Metrics Daily Report

The Agent Metrics Daily Report is a daily summary of agent performance metrics, by channel.

Steps to generate the Agent Metrics Daily Report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, choose the **Agent Metrics Daily Report**.
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
8. The **Agent Metrics Daily Report** is generated.  
<img src="../images/agent-metrics-daily-report-created.png" alt="Agent Metrics Daily Report Created" title="Agent Metrics Daily Report Created" style="border: 1px solid gray; zoom:100%;">

9. Click the **Run** icon next to the instance of the report.  
<img src="../images/run-agent-metrics-daily-report.png" alt=" Run Agent Metrics Daily Report" title="Run Agent Metrics Daily Report" style="border: 1px solid gray; zoom:100%;">

While generating reports you have two options, Run On Demand and Schedule.

**Run On Demand**: While creating a new report or editing an existing report, the schedule of the report can be set to run on demand.

**Schedule**: While creating a new report or editing an existing report, the schedule of the report can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later then it will automatically be generated on the scheduled day and time without the need to click Run.

10. First, the report object is configured (as PDF) and then the report output is generated as PDF. Click the **PDF/Page** icon to download the report.  
<img src="../images/pdf-agent-metrics-daily-report.png" alt="Agent Metrics Daily Report PDF" title="Agent Metrics Daily Report PDF" style="border: 1px solid gray; zoom:100%;">

    !!! Note

        The red dot beside the report indicates that it was generated within the last 24 hours. You can download, save, and view the report in PDF format.

The Agent Metrics Daily Report is generated and is available for download.  
<img src="../images/agent-metrics-daily-report-output.png" alt="Agent Metrics Daily Report Output" title="Agent Metrics Daily Report Output" style="border: 1px solid gray; zoom:100%;">

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
   <td>Date (12:00 am-11:59 pm) – figures grouped by Date and Channel.
   </td>
   <td>“2023-01-25”
   </td>
   <td>Not Applicable (NA)
   </td>
   <td>Not Applicable (NA)
   </td>
  </tr>
  <tr>
   <td>Channel
   </td>
   <td>Name of the Channel.
   </td>
   <td>Channel name (in words)
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Sessions
   </td>
   <td>Number of sessions the Agent was involved in – number of conversations accepted.
   </td>
   <td>NNN (84)
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Total ACW
   </td>
   <td>The amount of time the Agent spent in After Call Work (ACW).
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Average ACW
   </td>
   <td>Total ACW / Sessions.
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Holds
   </td>
   <td>The number of times the Agent placed conversations on hold.
   </td>
   <td>NNN (63)
   </td>
   <td>AVG
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Total Hold
   </td>
   <td>Total Amount of time the Agent placed conversations on hold.
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Average Hold
   </td>
   <td>Total Hold / Sessions.
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Total Handle
   </td>
   <td>The sum of all Handle times for each conversation by the Agent.
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Average Handle
   </td>
   <td>Total Handle / Sessions.
   </td>
   <td>NNN:NN:NN (“323:21:23”)
   </td>
   <td>AVG
   </td>
   <td>AVG
   </td>
  </tr>
  <tr>
   <td>Transfers
   </td>
   <td>The number of transferred conversations <em>from</em> the Agent.
   </td>
   <td>NNN (39)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Transfer %
   </td>
   <td>(Transfers / Sessions) * 100.
   </td>
   <td>NN % (38%)
   </td>
   <td>AVG
   </td>
   <td>AVG
   </td>
  </tr>
  <tr>
   <td>Average CSAT
   </td>
   <td>The sum of all CSAT values (1–5) / Number of Sessions with scores.
   </td>
   <td>N:NN (4.32)
   </td>
   <td>AVG
   </td>
   <td>AVG
   </td>
  </tr>
</table>

#### Related Link

* [Reports List](../reports/reports-list.md)