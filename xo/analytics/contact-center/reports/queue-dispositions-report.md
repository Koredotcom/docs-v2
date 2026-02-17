--8<-- "includes/ccai-reports-back-link.md"

# Queue Dispositions Report

### Generating the Queue Dispositions Report

The Queue Dispositions Report is a detailed report on sessions and duration for each code in a disposition set.

Steps to generate the Queue Dispositions Report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, choose the **Queue Dispositions Report**.
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
8. The Queue Disposition Report is generated.  
<img src="../images/queue-dispositions-report-created.png" alt="Queue Dispositions Report Created" title="Queue Dispositions Report Created" style="border: 1px solid gray; zoom:100%;">

9. Click the **Run** icon next to the instance of the report.  
<img src="../images/run-queue-dispositions-report.png" alt="Run Queue Dispositions Report" title="Run Agent Queue Dispositions Report" style="border: 1px solid gray; zoom:100%;">

While generating reports you have two options, Run On Demand and Schedule.

**Run On Demand**: While creating a new report or editing an existing report, the schedule of the report can be set to run on demand.

**Schedule**: While creating a new report or editing an existing report, the schedule of the report can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later then it will automatically be generated on the scheduled day and time without the need to click Run.

10. First, the report object is configured (as PDF) and then the report output is generated as PDF. Click the **PDF/Page** icon to download the report.  
<img src="../images/pdf-queue-dispositions-report.png" alt="Queue Dispositions Report PDF" title="Queue Dispositions Report PDF" style="border: 1px solid gray; zoom:100%;">

    !!! Note

        The red dot beside the report indicates that it was generated within the last 24 hours. You can download, save, and view the report in PDF format.

The Queue Dispositions Report is generated and is available for download.  
<img src="../images/queue-dispositions-report-output.png" alt="Queue Dispositions Report Output" title="Queue Dispositions Report Output" style="border: 1px solid gray; zoom:100%;">

### About Report Fields

<table>
  <tr>
   <td><strong>FIELD</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>EXAMPLE</strong>
   </td>
   <td><strong>TOTAL</strong>
   </td>
  </tr>
  <tr>
   <td>Disposition Code
   </td>
   <td>Each disposition code in a disposition set (Key).
   </td>
   <td>Resolved
   </td>
   <td>Not Applicable (NA)
   </td>
  </tr>
  <tr>
   <td>Sessions
   </td>
   <td>The number of conversations that were assigned this code.
   </td>
   <td>NNN (123)
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>% Total
   </td>
   <td>The number of conversations assigned this code / Total number of conversations.
   </td>
   <td>NN (83)
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Call Length – Total
   </td>
   <td>The total length of all conversations that were assigned this code.
   </td>
   <td>“00:45:52”
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Call Length – Average
   </td>
   <td>Total Length / Number of sessions.
   </td>
   <td>“00:45:52”
   </td>
   <td>AVG
   </td>
  </tr>
  <tr>
   <td>Call Length – % Total
   </td>
   <td>Total length for this code / Total length for this set.
   </td>
   <td>NN (23)
   </td>
   <td>NA
   </td>
  </tr>
</table>

#### Related Link

* [Reports List](../reports/reports-list.md)