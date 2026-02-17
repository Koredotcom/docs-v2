--8<-- "includes/ccai-reports-back-link.md"

# Queue Metrics Interval Report

## Generating the Queue Metrics Interval Report

The Queue Metrics Interval Report is a report of a queue’s metrics, shown at a level of granularity less than a day (15 minutes to 4 hours). It includes service level data, highlighting both met and unmet targets.

Steps to generate the Queue Metrics Interval Report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, choose the Queue Metrics Interval Report.
3. Enter the **Report Name** and **Report Description**.
4. Select the **Time Period**.
5. Select the **Data Filters**.
6. Select Report Generation and choose from the following options:
    * Schedule
        * Run On Demand
        * Schedule
            * You can create up to six schedules (only one if you select Hourly).  
                <img src="../images/schedule-options.png" alt="Schedule Options" title="Schedule Options" style="border: 1px solid gray; zoom:70%;">
    * Select Format
        * CSV
    * Send To (single email address or a mailing list)
7. Click **Create**.  
<img src="../images/create-report-queue-metrics-interval.png" alt="Create Report" title="Create Report" style="border: 1px solid gray; zoom:70%;">

8. The Queue Metrics Interval Report is generated.  
<img src="../images/report-generated-queue-metrics-interval.png" alt="Report Generated" title="Report Generated" style="border: 1px solid gray; zoom:100%;">

9. Click the **Run** icon next to the instance of the report.  
<img src="../images/run-report-queue-metrics-interval-report.png" alt="Run Report" title="Run Report" style="border: 1px solid gray; zoom:100%;">

    While generating reports, you have two options – Run On Demand and Schedule.

    **Run On Demand**: While creating a new report or editing an existing one, the report’s schedule can be run on demand.

    **Schedule**: While creating a new report or editing an existing report, the report’s schedule can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later, then it will automatically be generated on the scheduled day and time without the need to click Run.

10. Click the CSV icon and generate the output of that report, as shown below.  
<img src="../images/csv-icon-queue-metrics-interval.png" alt="CSV Icon" title="CSV Icon" style="border: 1px solid gray; zoom:100%;">

    !!! Note

        The red dot beside the report indicates that it was generated within the last 24 hours. You can download, save, and view the report in CSV format.

    The Queue Metrics Interval Report is generated and is available for download.  
    <img src="../images/csv-report-output-queue-metrics-interval.png" alt="CSV Output" title="CSV Output" style="border: 1px solid gray; zoom:90%;">

### About Report Fields

| **Field**                        | **Description**                                                                                                                      |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| **Key Fields**                   |                                                                                                                                    |
| Date                             | The date                                                                                                                           |
| Start Time                       | Start time of the interval (Format: NN am/pm)                                                                                       |
| Queue                            | Name of the queue                                                                                                                   |
| Channel                          | Channel type (Voice, Chat, etc.)                                                                                                    |
| **Data Fields**                  |                                                                                                                                    |
| Offered                          | Number of calls offered during this interval.                                                                                       |
| Answered                         | Number of calls answered during this interval.                                                                                      |
| Calls Answered within Threshold  | Number of calls answered within Required Service Level (RSL) time threshold.                                                                                |
| Calls Answered Beyond Threshold  | Number of calls answered after RSL time threshold. The answer event should be within the time bucket. |
| Abandoned in Queue               | Number of calls abandoned in this queue during this interval.                                                                      |
| Calls Abandoned within Threshold | Number of calls abandoned within RSL time threshold. The abandon event should be within the time bucket. |
| Calls Abandoned beyond Threshold | Number of calls abandoned after RSL time threshold. The abandon event should be within the time bucket. |
| Abandoned Time                   | The total time that abandoned-in-queue calls waited in this queue before being abandoned during this interval.|
| Average Abandoned Time           | The average time that abandoned-in-queue calls waited in this queue before being abandoned during this interval. The average denominator is the number of calls abandoned in a queue. |
| Transferred Out                  | Number of calls transferred from this queue to other queues during this interval.                                                  |
| Terminated                       | Number of calls terminated in this queue during this interval.                                                                     |
| Average Duration                 | The average duration of calls (from session start to session end) for all conversations completed in this interval, not counting ACW. |
| Average Talk Time                | Total talk time during this interval (excluding hold time, ACW, and snooze time) / The number of answered calls, for all conversations completed in this interval |
| Average ACW                      | Average ACW time for all conversations with non-zero ACW time, for all conversations completed in this interval.                    |
| Conversations with ACW           | Count of conversations with non-zero ACW time, for all conversations completed in this interval.                                    |
| ASA                              | Average speed to answer (average queue wait time) for all conversations completed in this interval.                                 |
| Average Handle Time              | Average handle time for all conversations completed in this interval.                                                              |
| Average Messages                 | Count of all messages for all conversations completed in this interval / Answered conversations                                     |
| Average Saved Messages           | Count of all saved (standard) messages for all conversations completed in this interval / Answered conversations                     |
| Average CSAT                     | Average CSAT on all calls / The number of calls with CSAT info, for all conversations completed in this interval                    |
| Service level %                  | Calls answered within the threshold / Offered calls                                                                                |