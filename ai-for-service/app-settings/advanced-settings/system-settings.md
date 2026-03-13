# System Settings

## Overview

The System Settings allow administrators to configure key platform features that control call handling, data management, and system behavior. From this section, administrators can manage Call Recording Control, configure whether calls are answered on the first Bot or AI Agent response, and set the Data Retention Period for stored information. These settings ensure consistent system operation, compliance with policies, and efficient handling of conversations.

Go to Automation AI > App Settings > Advanced Settings > System Settings to access and configure these functionalities.  
<img src="../images/system-settings.png" alt="System Settings Page" title="System Settings Page" style="border: 1px solid gray; zoom:70%;">

## Call Recording Control

By default, Contact Center AI records all voice interactions. Administrators can disable call recording for all voice interactions.

Steps to disable Call Recording Control:

1. Click **Call Recording Control**.  
<img src="../images/call-recording-control-option.png" alt="Call Recording Control" title="Call Recording Control" style="border: 1px solid gray; zoom:70%;">

    Turn off the toggle to disable call recording for all voice interactions.
    <img src="../images/call-recording-control.png" alt="Call Recording Control Disabled" title="Call Recording Control Disabled" style="border: 1px solid gray; zoom:70%;">

## Answer Call on First Bot/AI Agent Response

The feature plays a dial tone to the caller if there is a delay before the AI Agent delivers its first response on inbound calls. This improves the caller experience by indicating that the call is still connected, preventing confusion or the impression of a dropped call. Administrators can enable or disable this behavior using a configuration flag.

Steps to enable Answer Call on First Bot/AI Agent Response:

1. Click **Answer Call on First Bot Response**.  
    <img src="../images/answer-call-option.png" alt="Answer Call on AI Agent Response" title="Answer Call on AI Agent Response" style="border: 1px solid gray; zoom:70%;">

2. Turn on the toggle to enable the functionality.  
    <img src="../images/answer-call-bot-response.png" alt="Answer Call Enabled" title="Answer Call Enabled" style="border: 1px solid gray; zoom:70%;">

    When calls transfer from an existing telephony provider to platform, a connection event triggers once the call connects and the bot begins responding. In rare cases, the AI Agent’s response may be delayed due to processing or latency. This setting sends the connection event only when the AI Agent’s first response plays and plays a dial tone in the meantime, keeping callers engaged.

## Data Retention Period

The Data Retention Period feature allows administrators to configure how long voice call recordings are retained. Users can select retention periods ranging from 1 day to 7 years using a dropdown, with default values set by customer type. The feature includes email notifications for deletion reminders (optional, disabled if retention is less than 1 month) and mandatory deletion acknowledgements. All changes to retention settings and email preferences are recorded in audit logs, along with counts of successful or failed recording deletions. By default, new customers and applications have a retention period of 3 months, while existing customers retain recordings for 7 years. Only App Owners or Supervisors can modify these settings.

Steps to configure the data retention period.

1. Click **Data Retention Period**.  
    <img src="../images/data-retention-period-option.png" alt="Data Retention Period" title="Data Retention Period" style="border: 1px solid gray; zoom:70%;">

2. Select the required duration for data retention.
    
 Select the check box (optional) to enable email notifications, 5 days before deletion of voice call recordings. Email subscription is available only for retention periods above 30 days.  
    <img src="../images/define-data-retention-period.png" alt="Define Data Retention Period" title="Define Data Retention Period" style="border: 1px solid gray; zoom:70%;">

3. Click **Save** to apply the changes.