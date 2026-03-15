--8<-- "includes/ccai-reports-back-link.md"

# Skill Metrics Daily Report

## Generating Skill Metrics Daily Report

The Skill Metrics Daily Report provides a daily summary of performance based on conversation skills. This report groups data by Skill and Day, with no grouping by channel or direction. 

To generate a Skill Metrics Daily Report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, choose the **Skill Metrics Daily Report**.
3. Enter the **Report Name** and **Report Description**.
4. Select a **Time Period**.
5. Select **Data Filters** (Direction, Channels, Skills).
6. Select Report Generation and choose from the following options:
    * Schedule
        * Run On Demand
        * Schedule
            * You can create up to six schedules (only one if you select Hourly).  
                <img src="../images/schedule-options.png" alt="Schedule Options" title="Schedule Options" style="border: 1px solid gray; zoom:70%;">
    * Select Format
        * CSV
    * Send To (single email address or mailing list)
7. Click **Create**.  
    <img src="../images/create-report-skills-metrics.png" alt="Create Report" title="Create Report" style="border: 1px solid gray; zoom:70%;">

8. An instance of the Skill Metrics Daily Report is generated.    
    <img src="../images/report-created-skill-metrics.png" alt="Report Created" title="Report Created" style="border: 1px solid gray; zoom:70%;">

9. Click the **Run** icon next to the instance of the report.    
    <img src="../images/run-skill-metrics-report.png" alt="Run Report" title="Run Report" style="border: 1px solid gray; zoom:70%;">  

    While generating reports, you have two options: Run On Demand and Schedule.  
    **Run On Demand**: While creating a new report or editing an existing report, the schedule of the report can be set to run on demand.  
    **Schedule**: While creating a new report or editing an existing report, the schedule of the report can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later, then it will automatically be generated on the scheduled day and time without the need to click Run.

10. Click the CSV icon and generate the output of that report, as shown below.    
<img src="../images/csv-skill-metrics.png" alt="Generate Output" title="Generate Output" style="border: 1px solid gray; zoom:70%;">  

    !!! Note

        The red dot beside the report indicates that it was generated within the last 24 hours. You can download, save, and view the report in CSV format.

    The Skill Metrics Daily Report is generated.  
        <img src="../images/csv-output-skill-metrics-daily.png" alt="Report Output" title="Report Output" style="border: 1px solid gray; zoom:70%;">

### About Report Fields

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Example</strong>
   </td>
  </tr>
  <tr>
   <td>Skill
   </td>
   <td>Name of the skill from each skill associated with conversations.
   </td>
   <td>"Technical Support"
   </td>
  </tr>
  <tr>
   <td>Date
   </td>
   <td>Date in the time zone specified in report configuration.
   </td>
   <td>03/27/2025
   </td>
  </tr>
  <tr>
   <td>Incoming
   </td>
   <td>Number of incoming conversations into the SmartAssist queues.
   </td>
   <td>250
   </td>
  </tr>
  <tr>
   <td>Answered
   </td>
   <td>Number of conversations accepted by Agents.
   </td>
   <td>230
   </td>
  </tr>
  <tr>
   <td>After Call Work (ACW)
   </td>
   <td>Number of conversations with non-zero ACW time.
   </td>
   <td>180
   </td>
  </tr>
  <tr>
   <td>Total ACW time
   </td>
   <td>Total duration of ACW time spent across all conversations.
   </td>
   <td>89:35:49.000
   </td>
  </tr>
  <tr>
   <td>Avg ACW time
   </td>
   <td>Average ACW across all conversations (divided by ACW).
   </td>
   <td>89:35:49.000
   </td>
  </tr>
  <tr>
   <td>Holds
   </td>
   <td>Number of holds across all answered conversations.
   </td>
   <td>75
   </td>
  </tr>
  <tr>
   <td>Total Hold Duration
   </td>
   <td>Total duration of all holds across all conversations.
   </td>
   <td>7:16:09
   </td>
  </tr>
  <tr>
   <td>Avg Hold Duration
   </td>
   <td>Total Hold Duration / Answered.
   </td>
   <td>3:08:04
   </td>
  </tr>
  <tr>
   <td>Total Talk Time
   </td>
   <td>Total time between Agent and Customer - hold time - snooze time.
   </td>
   <td>0:28:53
   </td>
  </tr>
  <tr>
   <td>Avg Talk Time
   </td>
   <td>Total Talk Time / Answered.
   </td>
   <td>0:05:47
   </td>
  </tr>
  <tr>
   <td>Total Handle Time
   </td>
   <td>Sum of (Total time between Agent and Customer (Start to End) + ACW time).
   </td>
   <td>90:05:30
   </td>
  </tr>
  <tr>
   <td>Avg Handle Time
   </td>
   <td>Total Handle Time / Answered.
   </td>
   <td>18:01:06
   </td>
  </tr>
  <tr>
   <td>Avg CSAT
   </td>
   <td>CSAT in numbers (1-5) / sessions.
   </td>
   <td>4.2
   </td>
  </tr>
</table>