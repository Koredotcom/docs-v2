--8<-- "includes/ccai-reports-back-link.md"

# Queue Metrics Summary Report

## Generating the Queue Metrics Summary Report

Queue Metrics Summary Report is a summary of queue load, and performance information calculated daily.

Steps to generate the Queue Metrics Summary Report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, choose the Queue Metrics Summary Report.
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
    * Send To (single email address or a mailing list).
7. Click **Create**.
8. The **Queue Metrics Summary Report** is generated.  
<img src="../images/queue-metrics-summary-report-created.png" alt="Queue Metrics Summary Report Created" title="Queue Metrics Summary Report Created" style="border: 1px solid gray; zoom:100%;">

9. Click the **Run** icon next to the instance of the report.  
<img src="../images/run-queue-metrics-summary-report.png" alt="Run Queue Metrics Summary Report" title="Run Queue Metrics Summary Report" style="border: 1px solid gray; zoom:100%;">

While generating reports you have two options, Run On Demand and Schedule.

**Run On Demand**: While creating a new report or editing an existing report, the schedule of the report can be set to run on demand.

**Schedule**: While creating a new report or editing an existing report, the schedule of the report can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later then it will automatically be generated on the scheduled day and time without the need to click Run.

10. Click the **PDF/Page** icon and generate the output of that report, as shown below.  
<img src="../images/queue-metrics-summary-report-pdf.png" alt="Queue Metrics Summary Report PDF" title="Queue Metrics Summary Report PDF" style="border: 1px solid gray; zoom:100%;">

    !!! Note

        The red dot beside the report indicates that it was generated within the last 24 hours. You can download, save, and view the report in PDF format.

The Queue Metrics Summary Report is generated and is available for download.  
<img src="../images/queue-metrics-summary-report-output.png" alt="Queue Metrics Summary Report Output" title="Queue Metrics Summary Report Output" style="border: 1px solid gray; zoom:100%;">

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
   <td>Date for which metrics are being consolidated.
   </td>
   <td>“01/31/2023”
   </td>
   <td>Not Applicable (NA)
   </td>
   <td>Not Applicable (NA)
   </td>
  </tr>
  <tr>
   <td>Offered
   </td>
   <td>All conversations that entered this queue.
   </td>
   <td>NNN (2)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Answered
   </td>
   <td>All conversations that were accepted by agents to this queue.
   </td>
   <td>NNN (2)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Abandoned
   </td>
   <td>All conversations that were abandoned by callers while in this queue or with agents.
   </td>
   <td>NNN (1)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Abandon %
   </td>
   <td>Number abandoned / Number offered x 100.
   </td>
   <td>NNN (50)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>ASA
   </td>
   <td>Average Speed to Answer – average wait time in a queue.
   </td>
   <td>“NN:NN:NN” (00:00:11)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Talk time
   </td>
   <td>Average Talk time – time agents in this queue spent interacting with the end user.
   </td>
   <td>“NN:NN:NN” (00:00:11)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>ACW
   </td>
   <td>The average duration of After Contact Work that each agent performed for calls on this queue.
   </td>
   <td>“NN:NN:NN” (00:00:11)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>AHT
   </td>
   <td>The Average Handle Time that each agent performed for calls on this queue.
   </td>
   <td>“NN:NN:NN” (00:00:11)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Hold time
   </td>
   <td>The average Hold time for all calls while in this queue.
   </td>
   <td>“NN:NN:NN” (00:00:11)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Transfers
   </td>
   <td>The number of conversations transferred from this queue.
   </td>
   <td>NNN (50)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Transfer %
   </td>
   <td>Number Transferred / Number Offered x 100.
   </td>
   <td>NN (6)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
</table>

#### Related Link

* [Reports List](../reports/reports-list.md)