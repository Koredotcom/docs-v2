--8<-- "includes/ccai-reports-back-link.md"

# Interaction Details by Segment

## Generating Interaction Details by Segment Report

The Interaction Details by Segment Report is a comprehensive report that covers how all interactions were processed for each segment.

To generate Interaction Details by Segment Report:

1. On the Reports tab, click **New Report**.
2. In the list of reports, choose the **Interaction Details by Segment** report.
3. Enter the **Report Name** and **Report Description**.
4. Select a **Time Period**.
5. Select **Data Filters**.
6. Select **Report Generation** and choose from the following options:
    * Schedule
        * Run On Demand
        * Schedule
        * Run On Demand
        * Schedule
            * You can create up to six schedules (only one if you select Hourly).  
                <img src="../images/schedule-options.png" alt="Schedule Options" title="Schedule Options" style="border: 1px solid gray; zoom:70%;">
    * Select Format
        * CSV
    * Send To (single email address or a mailing list)
7. Click **Create**.  
    <img src="../images/segment-create-new-report.png" alt="Create Report" title="Create Report" style="border: 1px solid gray; zoom:100%;">

8. An instance of the Interaction Details by Segment report is generated.  
    <img src="../images/segment-report-created.png" alt="Report Created" title="Report Created" style="border: 1px solid gray; zoom:100%;">

9. Click the **Run** icon next to the instance of the report.  
    <img src="../images/segment-run-report-button.png" alt="Run Report" title="Run Report" style="border: 1px solid gray; zoom:100%;">  

    While generating reports you have two options, Run On Demand and Schedule.  
    **Run On Demand**: While creating a new report or editing an existing report, the schedule of the report can be set to run on demand.  
    **Schedule**: While creating a new report or editing an existing report, the schedule of the report can be changed. The use of the schedule is the standard way to generate a report. If the report is scheduled for later then it will automatically be generated on the scheduled day and time without the need to click Run.
10. Click the CSV icon and generate the output of that report, as shown below.
    <img src="../images/segment-download-csv.png" alt="Generate Report" title="Generate Report" style="border: 1px solid gray; zoom:100%;">  

    !!! Note

        The red dot beside the report indicates that the report has been generated within the last 24 hours. You can download, save, and view the report in CSV format.
 
The Agent Interaction Details report is generated and is available for download.

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
   <td>Session ID
   </td>
   <td>Session ID from the CCAI system
   </td>
   <td>cc-2024feb20-85421
   </td>
  </tr>
  <tr>
   <td>Direction
   </td>
   <td>"Inbound" or "Outbound"
   </td>
   <td>Inbound
   </td>
  </tr>
  <tr>
   <td>Channel
   </td>
   <td>Name of the channel (not channel type)
   </td>
   <td>Voice
   </td>
  </tr>
  <tr>
   <td>Customer
   </td>
   <td>Name, email, or phone number of the customer (in this order of preference)
   </td>
   <td>John Smith
   </td>
  </tr>
  <tr>
   <td>Support
   </td>
   <td><strong>For Voice Inbound:</strong> Number called by the customer (Support number)
<p>
<strong>For Voice Outbound:</strong> Number chosen by the agent to make the call
<p>
<strong>For Digital:</strong> Bot name
<p>
<strong>For SMS Outbound:</strong> SMS name or number used by agent or bot
<p>
<strong>For Email Outbound:</strong> Email address used by agent or bot
   </td>
   <td>+1-800-SUPPORT (Voice Inbound)
<p>
SalesBot (Digital)
<p>
support@company.com (Email)
   </td>
  </tr>
  <tr>
   <td>Queue Name
   </td>
   <td>Queue entered, if applicable (blank if none)
   </td>
   <td>Sales_Queue_US
   </td>
  </tr>
  <tr>
   <td>Queue Entry Time
   </td>
   <td>The time at which the interaction entered the queue
   </td>
   <td>2024-02-20 09:15:30
   </td>
  </tr>
  <tr>
   <td>Queue Exit Time
   </td>
   <td>The time at which this portion of the conversation exited the queue
   </td>
   <td>2024-02-20 09:17:45
   </td>
  </tr>
  <tr>
   <td>Queue Wait Time
   </td>
   <td>Wait time in queue (Duration - HH:mm: SS)
   </td>
   <td>00:02:15
   </td>
  </tr>
  <tr>
   <td>Agent Name
   </td>
   <td>Agent Name (blank if no agent, "BOT" if bot responded)
   </td>
   <td>Jane Doe
   </td>
  </tr>
  <tr>
   <td>Agent Custom Name
   </td>
   <td>Custom agent name (blank if no agent responded)
   </td>
   <td>Jane D.
   </td>
  </tr>
  <tr>
   <td>Agent Email
   </td>
   <td>Agent email (blank if no agent responded)
   </td>
   <td>jane.doe@company.com
   </td>
  </tr>
  <tr>
   <td>Segment ID
   </td>
   <td>Unique ID of the agent's portion of the segment (blank if no agent picked up)
   </td>
   <td>seg-20240220-1234
   </td>
  </tr>
  <tr>
   <td>Segment Start Time
   </td>
   <td>Start of this agent's segment (same format as Interactions Report)
   </td>
   <td>2024-02-20 09:17:45
   </td>
  </tr>
  <tr>
   <td>Segment End Time
   </td>
   <td>End of this agent's segment (standard time format)
   </td>
   <td>2024-02-20 09:32:15
   </td>
  </tr>
  <tr>
   <td>Talk Time
   </td>
   <td>Talk time for this agent's segment (HH:mm: SS)
   </td>
   <td>00:14:30
   </td>
  </tr>
  <tr>
   <td>Hold/Mute Time
   </td>
   <td>Hold or mute time for this agent's segment (HH:mm: SS)
   </td>
   <td>00:01:45
   </td>
  </tr>
  <tr>
   <td>Snooze Time
   </td>
   <td>Snooze time for this agent's segment (HH:mm: SS)
   </td>
   <td>00:00:00
   </td>
  </tr>
  <tr>
   <td>First Response Time
   </td>
   <td>Duration from agent acceptance to first message (HH:mm: SS)
   </td>
   <td>00:00:15
   </td>
  </tr>
  <tr>
   <td>Consultants
   </td>
   <td>Email IDs of all consultants for this agent's segment (pipe-delimited)
   </td>
   <td>tech.lead@company.com|supervisor@company.com
   </td>
  </tr>
  <tr>
   <td>Joined Users
   </td>
   <td>Email IDs of all users who joined during this agent's segment (pipe-delimited)
   </td>
   <td>quality.analyst@company.com|trainer@company.com
   </td>
  </tr>
  <tr>
   <td>Conversation Skills
   </td>
   <td>Placed in each segment of the conversation
   </td>
   <td>Technical Support L2
   </td>
  </tr>
  <tr>
   <td>Transferred In By
   </td>
   <td>• "System" if transferred due to queue wait timeout
<p>
• "Bot" if agent/queue transfer from bot
<p>
• Email of agent/supervisor if manually transferred from the bot
<p>
• Email of agent/supervisor who transferred
   </td>
   <td>Bot
   </td>
  </tr>
  <tr>
   <td>Transferred In Status
   </td>
   <td>Reason for transfer to queue or agent
   </td>
   <td>Overdue
   </td>
  </tr>
  <tr>
   <td>Status
   </td>
   <td>Final smartStatus (last segment only)
   </td>
   <td>Resolved
   </td>
  </tr>
  <tr>
   <td>Reason
   </td>
   <td>Reason code (last segment only)
   </td>
   <td>Technical Issue Fixed
   </td>
  </tr>
  <tr>
   <td>Disconnecting Event
   </td>
   <td>"System/Bot/User/Agent Hangup" (last segment only)
   </td>
   <td>Agent Hangup
   </td>
  </tr>
</table>

#### Related Link

* [Reports List](../reports/reports-list.md)