--8<-- "includes/ccai-reports-back-link.md"

# Agent Chat Metrics Report

## Generating the Agent Chat Metrics Report

The Agent Chat Metrics Report is a daily summary of agent performance metrics that are particularly relevant to chat conversations.

Steps to generate the Agent Chat Metrics Report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, choose the **Agent Chat Metrics Report**.
3. Enter the **Report Name** and **Report Description**.
4. Select a **Time Period**.
5. Select **Data Filters**.
6. Select Report Generation and choose from the following options:
    * Schedule
        * Run On Demand
        * Schedule
        * Run On Demand
        * Schedule
            * You can create up to six schedules (only one if you select Hourly)  
                <img src="../images/schedule-options.png" alt="Schedule Options" title="Schedule Options" style="border: 1px solid gray; zoom:70%;">
    * Select Format
        * PDF
        * CSV
    * Send To (single email address or a mailing list).
7. Click **Create**.
8. The Agent Chat Metrics Report is generated.  
<img src="../images/agent-chat-metrics-report-created.png" alt="Agent Chat Metrics Report Created" title="Agent Chat Metrics Report Created" style="border: 1px solid gray; zoom:100%;">

9. Click the **Run** icon next to the instance of the report.  
<img src="../images/run-agent-chat-metrics-report.png" alt="Run Agent Chat Metrics Report" title="Run Agent Chat Metrics Report" style="border: 1px solid gray; zoom:100%;">

While generating reports you have two options, Run On Demand and Schedule.

**Run On Demand**: While creating a new report or editing an existing report, the schedule of the report can be set to run on demand.

**Schedule**: While creating a new report or editing an existing report, the schedule of the report can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later then it will automatically be generated on the scheduled day and time without the need to click Run.

10. Click the **PDF/Page** icon and generate the output of that report, as shown below.  
<img src="../images/pdf-agent-chat-metrics-report.png" alt="Agent Chat Metrics Report PDF" title="Agent Chat Metrics Report PDF" style="border: 1px solid gray; zoom:100%;">

    !!! Note

        The red dot beside the report indicates that it was generated within the last 24 hours. You can download, save, and view the report in PDF format.

The Agent Chat Metrics Report is generated and is available for download.  
<img src="../images/agent-chat-metrics-report-output.png" alt="Agent Chat Metrics Report Output" title="Agent Chat Metrics Report Output" style="border: 1px solid gray; zoom:100%;">

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
   <td>Incoming
   </td>
   <td>All conversations that were offered to this agent.
   </td>
   <td>NNN (345)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Accepted
   </td>
   <td>All accepted conversations by this agent.
   </td>
   <td>NNN (345)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Abandoned
   </td>
   <td>All abandoned conversations by callers while interacting with this agent.
   </td>
   <td>NNN (345)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Transferred
   </td>
   <td>The number of conversations that were transferred by this Agent.
   </td>
   <td>NNN (345)
   </td>
   <td>SUM
   </td>
   <td>SUM
   </td>
  </tr>
  <tr>
   <td>Average Duration
   </td>
   <td>Average Duration of conversations, while interacting with this agent.
   </td>
   <td>“NN:NN:NN” (00:00:11)
   </td>
   <td>AVG
   </td>
   <td>AVG
   </td>
  </tr>
  <tr>
   <td>FRT
   </td>
   <td>Average First Response Time – from the time the agent accepts a conversation to the time the Agent makes their first response to the end user.
   </td>
   <td>“NN:NN:NN” (00:00:11)
   </td>
   <td>AVG
   </td>
   <td>AVG
   </td>
  </tr>
  <tr>
   <td>Average Response Time
   </td>
   <td>Average of Response Time – Latency in each response between this agent and the external user.
   </td>
   <td>“NN:NN:NN” (00:00:11)
   </td>
   <td>AVG
   </td>
   <td>AVG
   </td>
  </tr>
  <tr>
   <td>Average ACW
   </td>
   <td>Average of After Contact Work that this agent performed for all conversations.
   </td>
   <td>“NN:NN:NN” (00:00:11)
   </td>
   <td>AVG
   </td>
   <td>AVG
   </td>
  </tr>
  <tr>
   <td>Average CSAT
   </td>
   <td>Average Customer Satisfaction score (between 1 to 5).
   </td>
   <td>N.NN (3.28)
   </td>
   <td>AVG
   </td>
   <td>AVG
   </td>
  </tr>
</table>

#### Related Link

* [Reports List](../reports/reports-list.md)