--8<-- "includes/ccai-reports-back-link.md"

# Queue Chat Metrics Interval Report

## Generating the Queue Chat Metrics Interval Report

Queue Chat Metrics Interval Report is a summary of queue performance metrics that are particularly relevant to chat conversations, aggregated over configurable intervals (30-minute default).

Steps to generate the Queue Chat Metrics Report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, choose the **Queue Chat Metrics Interval Report**.
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
8. The Queue Chat Metrics Interval Report is generated.  
<img src="../images/queue-chat-metrics-interval-report-created.png" alt="Queue Chat Metrics Interval Report Created" title="Queue Chat Metrics Interval Report Created" style="border: 1px solid gray; zoom:100%;">

9. Click the **Run** icon next to the instance of the report.  
<img src="../images/run-queue-chat-metrics-interval-report.png" alt="Run Queue Chat Metrics Interval Report" title="Run Queue Chat Metrics Interval Report" style="border: 1px solid gray; zoom:100%;">

While generating reports you have two options, Run On Demand and Schedule.

**Run On Demand**: While creating a new report or editing an existing report, the schedule of the report can be set to run on demand.

**Schedule**: While creating a new report or editing an existing report, the schedule of the report can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later then it will automatically be generated on the scheduled day and time without the need to click Run.

10. Click the **PDF/Page** icon and generate the output of that report, as shown below.  
<img src="../images/pdf-queue-chat-metrics-interval-report.png" alt="Queue Chat Metrics Interval Report PDF" title="Queue Chat Metrics Interval Report PDF" style="border: 1px solid gray; zoom:100%;">

    !!! Note

        The red dot beside the report indicates that it was generated within the last 24 hours. You can download, save, and view the report in PDF format.

The Queue Chat Metrics Interval Report is generated and is available for download.  
<img src="../images/queue-chat-metrics-interval-report-output.png" alt="Queue Chat Metrics Interval Report Output" title="Queue Chat Metrics Interval Report Output" style="border: 1px solid gray; zoom:100%;">

### About Queue Chat Metrics Interval Report

<table>
  <tr>
   <td>Column Name
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>Date
   </td>
   <td>Date of the conversation
   </td>
  </tr>
  <tr>
   <td>Incoming
   </td>
   <td>Number of calls (add for summary)
   </td>
  </tr>
  <tr>
   <td>Accepted
   </td>
   <td>Number of calls (add for summary)
   </td>
  </tr>
  <tr>
   <td>Abandoned
   </td>
   <td>Number of calls (add for summary)
   </td>
  </tr>
  <tr>
   <td>Transferred
   </td>
   <td>Number of calls (add for summary)
   </td>
  </tr>
  <tr>
   <td>Avg Duration
   </td>
   <td>Total time of call (no ACW)/number of calls accepted (average for summary)
   </td>
  </tr>
  <tr>
   <td>Avg ACW
   </td>
   <td>Total time of ACW / number of calls accepted (average for summary)
   </td>
  </tr>
  <tr>
   <td>Avg Messages
   </td>
   <td>Total number of messages between callers and agents / number of calls accepted (average for summary)
   </td>
  </tr>
  <tr>
   <td>Avg Use Saved
   </td>
   <td>Total number of saved messages on all calls / number of calls accepted (average for the summary)
   </td>
  </tr>
  <tr>
   <td>CSAT
   </td>
   <td>Avg CSAT on all calls / number of calls with CSAT info. (average for summary)
   </td>
  </tr>
  <tr>
   <td>Concurrency
   </td>
   <td>Total handle time of all chats/total actual time spent on all chats
   </td>
  </tr>
</table>

#### Related Link

* [Reports List](../reports/reports-list.md)