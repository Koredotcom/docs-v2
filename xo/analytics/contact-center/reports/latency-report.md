--8<-- "includes/ccai-reports-back-link.md"

# Latency Report [Beta]

## Generating the Latency Report

The Latency Report highlights calls exceeding a defined latency threshold. For example, supervisors can generate a report of all calls where the P90 end-to-end latency is greater than 500 milliseconds (ms).

!!! Note

    In this beta version, to generate Latency reports, enable capturing latency metrics by configuring these call control parameters:  
    `notifySttLatency = true`  
    `vadEnable = true`  
    `vadVendor = silero`

To generate a Latency Report:

1. On the Reports tab, Select **New Report**.
2. In the list of reports, choose the **Latency Report**.
3. Enter the **Report Name** and **Report Description**.
4. Select a **Duration**.
5. Select **Data Filters** from the following.

    | **P90 Values**         | **Threshold Values (ms)** |
    |------------------------|---------------------------|
    | P90 End-to-End Latency | For example, 200 ms       |
    | P90 ASR Latency        | For example, 200 ms       |
    | P90 Bot Response Time  | For example, 200 ms       |
    | P90 TTS Latency        | For example, 200 ms       |

!!! Note

    Each P90 value can be evaluated using the following conditions:  
    Greater than or equal to (≥), Less than or equal to (≤), Greater than (>), Less than (<), Equal to (=).

6. Select Report Generation and choose from the following options:
    * Schedule
        * Run On Demand
        * Schedule
            * You can create up to six schedules (only one if you select Hourly).  
                <img src="../images/schedule-options.png" alt="Schedule Options" title="Schedule Options" style="border: 1px solid gray; zoom:70%;">
    * Select Format
        * CSV
    * Send To (single email address or mailing list)
7. Select **Create**.  
    <img src="../images/create-latency-report.png" alt="Create Report" title="Create Report" style="border: 1px solid gray; zoom:70%;">
8. An instance of the Latency Report is generated.  
    <img src="../images/latency-report-created.png" alt="Report Created" title="Report Created" style="border: 1px solid gray; zoom:70%;">
9. Select the **Run** icon next to the instance of the report.  
    <img src="../images/run-latency-report.png" alt="Run Report" title="Run Report" style="border: 1px solid gray; zoom:70%;">

    While generating reports, you have two options: Run On Demand and Schedule.  

    * **Run On Demand**: When you create a new report or edit an existing one, you can set the report schedule to run on demand.
    * **Schedule**: If you schedule the report for a later time, the system automatically generates it on the scheduled day and time without requiring you to select Run.
10. Select the CSV icon and generate the output of that report, as follows.  
    <img src="../images/latency-report-csv.png" alt="Generate Output" title="Generate Output" style="border: 1px solid gray; zoom:70%;">

!!! Note

    The red dot beside the report indicates that it was generated within the last 24 hours. You can download, save, and view the report in CSV format.

11. The system generates the Latency Report.  
    <img src="../images/latency-report-csv-output.png" alt="Report Output" title="Report Output" style="border: 1px solid gray; zoom:70%;">

### About Report Fields

| **Field**                  | **Description**                                                                                           | **Example**               |
|-----------------------------|-----------------------------------------------------------------------------------------------------------|---------------------------|
| Session ID                  | Unique identifier for each interaction session.                                                           | `a12b34c56d`              |
| Start Time                  | Timestamp when the session started.                                                                       | `2025-09-24 10:56:34`     |
| Agent                       | Name of the agent handling the session.                                                                  | `John Doe`                |
| Agent Email                 | Email address of the agent.                                                                              | `john.doe@example.com`    |
| Queue Name                  | Name of the queue the interaction routes through.                                                     | `Support_Queue`           |
| Customer                    | Identifier or name of the customer involved in the session.                                               | `Jane Doe`                |
| Duration                    | Total time the session lasted.                                                                            | `00:12:45`                |
| P90 ASR Latency (ms)        | 90th percentile latency of Automatic Speech Recognition, in milliseconds. Indicates how long speech-to-text processing takes. | `250`                     |
| P90 Bot Latency (ms)        | 90th percentile latency for the bot’s response processing, in milliseconds. Shows system responsiveness.  | `120`                     |
| P90 TTS Latency (ms)        | 90th percentile latency of Text-to-Speech processing, in milliseconds. Represents the time to convert text into audio. | `180`                     |
| P90 End To End Latency (ms) | 90th percentile overall latency from customer speech to agent/bot reply, in milliseconds. Combines ASR, bot, and TTS processing times. | `600`                     |

#### Related Link

* [Download Latency Report](../../overview/conversations.md#exportdownload-recording-transcripts-latency-report-and-events)