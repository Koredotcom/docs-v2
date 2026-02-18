# Dashboard

The campaign dashboard lets campaign managers to track the progress and other essential metrics related to campaigns.

To access dashboards, go to **Contact Center AI** > **Campaigns** > **Dashboard**.  
<img src="../images/dashboard-pagination.png" alt="Dashboard Page" title="Dashboard Page" style="border: 1px solid gray; zoom:80%;"/>

The following details related to campaigns appears on the dashboard:

1. **Campaign name** - Name of the campaign. For example: Campaign 1.
2. **Campaign type** - Agentless (Voice campaigns only)
3. **Progress** - Progress of the campaign. For example: 3 of 10.
4. **Status** - Ready, Active, Paused, Rerun, or Completed.
5. **Campaign Start Date and Time** - Date and Time when the campaign started. For example: Started on Sep 29, 2023 11:03 AM

Clicking any campaign displays detailed information related to the selected campaign.

### Voice Campaigns

<img src="../images/campaign-details-dashboard.png" alt="Voice Campaign Details" title="Voice Campaign Details" style="border: 1px solid gray; zoom:80%;"/>  

Campaign Name: Agentless

### Overview

This section displays the following information:

* **Progress** - Progress of the campaign.
* **Connected Calls** - Count and percentage of connected calls.
* **Unconnected Calls** - Count and percentage of unconnected calls, including calls that go into the retry state.
* **Avg. Call Duration** - Average Duration of all the connected calls in the campaign.
    <img src="../images/overview.png" alt="Overview" title="Overview" style="border: 1px solid gray; zoom:80%;"/>  

### Outcome

<img src="../images/outcome.png" alt="Outcome" title="Outcome" style="border: 1px solid gray; zoom:80%;"/>  

The Outcome section presents detailed insights into call dispositions for outbound dialer campaigns.

Outbound Dialer Disposition (Top 5)

* Displays the top five most frequent dispositions returned by the dialer.  
* Categories include Busy, Connected, Failed, No Answer, Answering Machine, DNC Excluded, Filter Skipped, and Retry Cancelled.  
* Each disposition appears along the horizontal axis.  
* The vertical axis shows the count for each disposition.  

Agent Disposition (Top 5)

* Displays the top five dispositions selected by agents after engaging with connected calls.  
* Categories include Unresolved, Requires Supervisor, Resolved, System Generated, and other custom dispositions.  
* The horizontal axis lists disposition names, and the vertical axis shows the count.  

### Disposition

The Dispositions vs. Attempts table shows how each outbound attempt is recorded against its final status. As a conversation moves through multiple attempts, the system counts only the latest outcome and maps it to the corresponding disposition–attempt combination.

Table Structure

* The X-axis lists all dispositions configured for the campaign.  
* The Y-axis lists attempt numbers, starting from 1.  
* The table appears for all campaigns, including campaigns in progress.  

The system counts only the latest attempt for each conversation. When a conversation moves to a new attempt, the previous attempt’s entry is removed. The table continuously updates to reflect the campaign’s real-time progress.

Calculation Rules

* Each latest attempt contributes one count to the cell that matches its disposition and attempt number.  
* Includes ongoing conversations based on their current attempt and disposition.  

Example workflow

* Attempt 1: Conversation C ends with Unanswered → the system counts it in (Unanswered, 1).  
* Attempt 2: The conversation reaches Needs-Terms-Explanation → the system removes it from (Unanswered, 1) and counts it in (Needs-Terms-Explanation, 2).  
* Attempt 3 (final): The conversation ends with Not Interested → the system removes it from (Needs-Terms-Explanation, 2) and counts it in (Not Interested, 3).  
    <img src="../images/dispositions.png" alt="Dispositions" title="Dispositions" style="border: 1px solid gray; zoom:70%;">

### Latest Execution

The Latest Execution view provides a consolidated list of all calls executed in the most recent campaign run. The view displays each call as a conversation entry and includes selectable fields, filtering options, and export capabilities.

This feature surfaces call-level data that the system previously exposed only through indirect dashboard views. It now presents a direct, campaign-scoped list of conversations associated with the campaign’s Call List.

Call List Data Scope

The Campaign’s Call List includes all phone numbers fetched from the associated Contact List. The system assigns a disposition to contacts eliminated before dialing:

* DNC excluded for numbers removed during scrubbing against the Do Not Call (DNC) list.  
* Filter excluded for numbers filtered out by campaign-specific filters.

Latest Execution Layout

The Latest Execution view displays the following:

* Phone Number  
* Number of Attempts (accumulated)  
* Priority  
* Start Time (for the previous or current call)  
* Duration (for the previous or current call)  
* End Time (for the previous or current call)  
* Agent (icon with hover tooltip showing the agent name)  
* Disposition  

    * Shows the agent-provided disposition when available.  
    * If the system doesn't receive a disposition from the agent, the view shows the last system status (for example, Unanswered, Unconnected, User Busy, Declined, AMD Detected, and others).  
    <img src="../images/latest-execution.png" alt="Latest Execution" title="Latest Execution" style="border: 1px solid gray; zoom:70%;">

#### Column Selector

The Column Selector lets users to customize the columns displayed in the list view.

The selector includes:

* All default fields.  
* First Name and Last Name.  
* Any additional mapped or unmapped fields from the Contact List.  

The system deselects additional mapped and unmapped fields by default.
<img src="../images/latest-execution-column-selector.png" alt="image-alt-text-for-accessibility" title="title-of-the-image" style="border: 1px solid gray; zoom:100%;">

### SMS Campaigns

<img src="../images/sms-campaign-detailed.png" alt="SMS Campaign Details" title="Voice Campaign Details" style="border: 1px solid gray; zoom:80%;"/>  

Campaign Name: Up-sell of Feature

#### Overview

This section displays the following information:

* **Progress** - Progress of the campaign.
* **Messages Delivered** - Total count of messages delivered in the campaign.
* **Delivery Rate** - The percentage of SMS sent and received by recipients (SMS received/SMS sent X 100).

#### Latest Execution

The Latest Execution view provides a consolidated list of all calls executed in the most recent campaign run. The view displays each call as a conversation entry and includes selectable fields, filtering options, and export capabilities.

This feature surfaces call-level data that the system previously exposed only through indirect dashboard views. It now presents a direct, campaign-scoped list of conversations associated with the campaign’s Call List.

Call List Data Scope

The Campaign’s Call List includes all phone numbers fetched from the associated Contact List. The system assigns a disposition to contacts eliminated before dialing:

* DNC excluded for numbers removed during scrubbing against the Do Not Call (DNC) list.  
* Filter excluded for numbers filtered out by campaign-specific filters.

Latest Execution Layout

The Latest Execution view displays the following:

* Phone Number  
* Number of Attempts (accumulated)  
* Priority  
* Start Time (for the previous or current call)  
* Duration (for the previous or current call)  
* End Time (for the previous or current call)  
* Agent (icon with hover tooltip showing the agent name)  
* Disposition  

    * Shows the agent-provided disposition when available.  
    * If the system doesn't receive a disposition from the agent, the view shows the last system status (for example, Unanswered, Unconnected, User Busy, Declined, AMD Detected, and others).  
    <img src="../images/latest-execution.png" alt="image-alt-text-for-accessibility" title="title-of-the-image" style="border: 1px solid gray; zoom:70%;">

#### Column Selector

The Field Selector allows users to customize the columns displayed in the list view.

The selector includes:

* All default fields.  
* First Name and Last Name.  
* Any additional mapped or unmapped fields from the Contact List.  

The system deselects additional mapped and unmapped fields by default.
<img src="../images/latest-execution-column-selector.png" alt="image-alt-text-for-accessibility" title="title-of-the-image" style="border: 1px solid gray; zoom:100%;">

#### Messages Delivered

This section displays the total count of messages delivered. You can select from the following options:

* Last 24 hours
* Last 07 days
* Last 30 days

Hovering over the hours/days shows the count of messages delivered and the delivery rate.  
<img src="../images/hover-over-details.png" alt="SMS Campaign Dashboard Hover" title="Voice Campaign Dashboard Hover" style="border: 1px solid gray; zoom:80%;"/> 

### Filter, Search, and Sort Latest Execution (Voice and SMS)

| Capability | Voice Campaigns | SMS Campaigns | Notes |
|------------|----------------|---------------|-------|
| Filtering  | - Disposition<br>- Priority<br>- Date-to-date range | - Date-to-date range | Filtering applies before search. |
| Search     | - Phone Number<br>- Last Name<br>- First Name | - Phone Number<br>- Last Name<br>- First Name | Search functions within the current filter. |
| Sorting    | - Initial sort by Start Time (most recent first)<br>- Sort by Priority<br>- Sort by Disposition | - Initial sort by Start Time (most recent first)<br>- Sort by Priority<br>- Sort by Disposition | Sorting applies after filtering and searching. |

Related Link

* [Dialer Campaign History Report](../../../analytics/contact-center/reports/dialer-campaign-history-report.md)