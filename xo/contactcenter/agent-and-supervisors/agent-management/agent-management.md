# Agent Management

## Agent Groups

An Agent Group is a collection of agents based on skills, scopes, roles, functionalities, etc. Agents are assigned to groups to streamline customer service within Contact Center AI.

To find Agent Groups, go to Contact Center AI > Agent & Supervisors > Agent Management. All groups are visible on this page by default.  

### Agent Group Section Features

The Agent Group section includes the following features:

* You can use the Search field to find a group by name.
* Each group item shows the Group Name, Description, and the Number of Agents it includes.
* Clicking any group name reveals the agents who are part of it. Each agent entry shows the agent name, edit action, role, and assigned skills and queues. Learn more about [User Management](../../../user-management/manage-users.md).

### Pre-configured Groups

There are two pre-configured groups available:

* Unassigned is automatically selected in the Group drop down while creating a new user. The Unassigned group isn't considered for routing interactions.
* Default Group.

### Create an Agent Group

To create a new agent group, follow these steps:

1. On the Agent Groups page, select `Add Group`.  
<img src="../images/add-agent-group.png" alt="Add Group" title="Add Group" style="border: 1px solid gray; zoom:80%;">

2. In the New Group window, provide the input for the following fields:
    * `Group Name` - Enter the agent group name.
    * `Description` - Enter a brief description.
    * `Agent Status` - (Optional) Select statuses for the Agent Group. Agents in the group see the selected statuses along with the system-defined ones. The system shows only system statuses for the group when no agent statuses are selected.

### Add Agents to a Group

To add agents to a group, you either need to add a new agent to the Contact Center or edit an existing one to assign the group to them. Follow these steps to add an agent to a group:

1. Go to Agents and create or edit an agent.
2. On the profile, select the desired group.
3. Save the agent record.

To learn more about adding or editing agents, see [Edit a User](../../../user-management/manage-users.md#edit-a-user).

### Edit an Agent Group

To modify an agent group, follow these steps:

1. On the Agent Groups page, hover over the group that you want to edit, then select the `Edit` icon next to the group name;  
<img src="../images/edit-group-button.png" alt="Edit Group Name" title="Edit Group Name" style="border: 1px solid gray; zoom:80%;">

2. In the Edit Group window, make the required changes;
3. Select `Save`.

!!! Note

      You cannot change the name of the pre-configured groups: Unassigned and Default Group.

### Delete an Agent Group

To delete an agent group, follow these steps:

1. On the Agent Groups page, select the `Edit` icon next to the group you want to delete.
2. In the Edit Group window, select the `Delete Agent Group` icon.  

## Agent Status Management

This feature lets you display various statuses of an Agent–such as `available`, `offline`, `busy`, or `away` along with a brief description for each status. You can add new statuses and edit or delete the existing ones.

### The Agent Status Live Board

You can find the Agent Status section by going to Contact Center > Agent Management > Agent & Supervisors.

Here you can see a list of existing statuses, along with the following information:

* `Name`: The name of the status that's displayed within the Agent Console.
* `Actions`: The available action is to Edit the status entry.
* `Type`: The type of status, mentioning whether the agent is `Available`, `Away`, `Busy`, or `Offline` while setting the particular status.
* `Description`: A short description of the status.  

### System Busy Status without Blended Mode

Without Blended Mode, the System Busy status follows this logic:

* `For digital interactions`: It triggers when digital interaction concurrency reaches 100% of available slots.
* `For voice interactions`: It triggers when the single voice slot is occupied.
* `Combined`: Marks Agents on voice as System Busy for digital, and vice versa.

#### Key Changes with Blended Mode

Following are the key changes introduced with the Blended Mode:

1. Slot Treatment: Treatment of Voice as another interaction slot (not only digital slots).

2. System Busy Logic:

    * `Blended On`: Triggers when all voice + digital slots full
    * `Blended Off`: Triggers at 100% digital occupancy or voice slot full

3. Load Capacity: Calculated as (Occupied Voice or Max Voice) + (Occupied Digital or Max Digital)

#### Status Transitions

The system triggers the System Busy status differently based on whether Blended Mode is on or off.

* `Blended On`: System busy when all the slots are full (Voice + Digital).
* `Blended Off`: Traditional System Busy logic (100% digital or voice slot full).

#### Best Practices

* Configure appropriate slot allocations based on interaction volumes.
* Train agents on blended handling and multitasking strategies.
* Monitor load capacity to optimize staffing levels.
* Use reporting to track blended mode impact on KPIs.

### Create an Agent Status

To create a new agent status, follow these steps:

1. In the Agent Status section, select `+ New Status`.
2. In the New Status window, enter the following details:

    1. `Status Name`-Enter the status name.
    2. `Status Type`-Select the status type: `Away` or `Busy`.
    3. `Description`-Type in a brief description of the status.
    4. `Assign to Agent Groups`-Select the agent groups to assign the statuses. The system makes the status available to all agents in the selected groups. It's mandatory to add an agent group while creating a custom agent status.

3. Select `Add & Exit` to create the status and exit the window or select `Add & Stay` to create the status and continue to a new one.  
4. The status created successfully success message appears on-screen and the new status adds to the Agent Status list.  

### Edit an Agent Status

To edit an existing Agent status entry, follow these steps:

1. In the Agent Status section, select the `Edit` icon corresponding to the status entry that you want to modify.  
    <img src="../images/status-edit-button.png" alt="Status Edit Icon" title="Status Edit Icon" style="border: 1px solid gray; zoom:80%;">

2. In the Edit Status window, edit the Status Name, Status Type, and or Description, then select Update.  

    !!! note "Rename Default Agent Status"
     
        Administrators can rename default agent status (Available, Away, Busy) to match business terminology, with multilingual support. The system preserves the underlying status behavior and applies the updated labels consistently across the existing and historical data. The system uses system status labels as conditional statements across the codebase, and these labels affect multiple areas of the application. As a result, the system prevents users from creating custom statuses with system-reserved labels. The reserved labels are Available, Away, Busy, Offline, System Busy, System Away, and Login Prep.

3. The Status updated successfully message appears in the window and the modified values reflect in the [Agent Status](../../../console/manage-layout.md#agent-status) widget.  

### Delete an Agent Status

!!! Warning

      1. The default statuses (Available, Away, Busy, and Offline) cannot be deleted. Only custom statuses provide this option.
      2. Deleted Agent Status entries cannot be restored.

To delete an existing Agent Status entry, follow these steps:

1. In the Agent Status section, select the `Delete` icon corresponding to the status that you want to delete.
2. Select `Yes` to confirm.
3. A success message appears and the system removes the deleted agent status from the list.

### Configure Login Prep Status

Login Prep status ensures agents don't receive interactions immediately after they log in on the Console. This status provides agents with a designated time to prepare before they start receiving interactions. Administrators can enable and configure this status for their agents.

Steps to enable and configure Login Prep status:

1. The login prep status isn't available by default. Select `Edit` to enable login prep.
2. On the Edit Status window, turn on the toggle to Enabled.
    You can customize the following fields:
    * Status Name
    * Description
    * Message to Agent
        * Rule (default 30 seconds)
        * Message

3. Select `Update` to save the changes. A confirmation message appears.

    If enabled, the Login Prep becomes the default status for every new login for the agent. [Learn more](../../../console/interacting-with-customers.md#behavior-when-login-prep-status-is-enabled).

## Agent Settings

Agent Settings let you configure the settings that apply to all agents across Contact Center.

Go to Contact Center AI > Agent & Supervisors > Agent Management > Agent Settings to view and edit the following:

1. `Answer Mode`: These settings let you define how conversations get answered on each channel (Digital–Chats, Emails, and Voice).
2. `Conversation Status Control`: These options let you define how conversation status behaves and the messages triggered by status changes.
3. `Call Recording Control`: These settings let you configure call recording behavior. If enabled, you can further enable options to permit Human Agents and AI Agents to Pause/Resume call recording.
4. `Transfers`: This section lets you define settings related to External Transfers, Skill Match, and Transfer Destination Control.
5. `Skill Modification`: You can decide if the agents can modify skills attached to a conversation.
6. `Auto Logout & Auto Close Conversation`: Administrators can configure this setting to specify a period of inactivity for automatic agent logout and a conversation timeout to transition into After Call Work (ACW) mode.
7. `Snooze`: This setting enables agents to temporarily pause conversations that are waiting for a reply from the customer’s end or any necessary action or item on the agent’s side.
8. `Blended Agents`: The Blended Mode enables agents to handle voice and digital interactions simultaneously. It's designed to optimize agent capacity, improve efficiency, and align with modern contact center best practices.
9. `Additional Routing Configuration`: Administrators can select from the following routing options that complement existing routing configurations through queues.
    * Fairer Workload distribution.
    * Hold interaction in queue until the wait time expires.
10. `Enable Dial Tone Until Agent Connects`: This setting plays a dial tone to the customer until the system establishes the connection with the agent after the user hears the connected tone.
    The system groups these settings and presents them as closed groups when you first open the Settings screen. Select any group to view its corresponding options.

11. Total Digital Conversation Limit: This setting prevents digital overload by limiting the total number of active conversations across all channels.  

## Answer Mode

### Voice

* `Manual`: Agents must select `Accept` to begin their voice interaction with the next customer.
* `Auto`: Calls are auto answered. The agent doesn't need to select `Accept`.

### Chats

* `Manual`: Agents must select `Accept` to begin chatting with the next customer. Set the acceptance timeout for agents before a chat returns to the queue by entering the number of minutes and seconds.
* `Auto`: Chats are auto answered, and the agent doesn't need to select `Accept`. Set the first response timeout for agents to respond to new chats.

### Emails

* `Manual`: Agents must select `Accept` to begin their email interaction with the next customer. Set the acceptance timeout for agents before an email returns to the queue by entering the number of minutes and seconds.
* `Auto`: Emails are auto accepted, and the agent doesn't need to select `Accept`.  

### Explicit Reject

Turn on the toggle to add an explicit reject o incoming conversations. This applies only in manual acceptance mode. This toggle remains off by default.  

### Honor Agent Wait Before Queue Timeout  

When enabled:  

* If the system assigns a conversation to an agent and it enters the agent's wait state, the queue wait timeout doesn't trigger.  
* The conversation remains in the agent wait state until the agent wait timeout expires.
* After the agent wait timeout exceeds, the system checks the queue wait timeout condition.

When turned off (default):

* The queue wait timeout runs in parallel and may close the conversation even while it's in the agent wait state.  

## Conversation Status Control

The Conversation Status Control settings are available for the following channels: Live Chat, Messaging, Voice, and Emails.

Different statuses apply to each channel. Watch the short demo to see what these look like in Contact Center AI, and read the following sections for details on available statuses and their configuration.
<img src="../images/conversation-status-control-channels.gif" alt="Conversation Status Control" title="Conversation Status Control" style="border: 1px solid gray; zoom:80%;">

### Conversation Statuses by Channel (Live Chat, Messaging, and Voice)

Conversation statuses apply under specific conditions for certain channels. The table lists these items.

| **Status**                                   | **Applicability**                                                                 | **Channel**            | **Message**  | **Variables**                                                                 |
|----------------------------------------------|-----------------------------------------------------------------------------------|------------------------|--------------|-------------------------------------------------------------------------------|
| `On Waiting`                               | Enable/disable a command based user side chat termination                                                           | Messaging  | User Side Conversation End      | Configure `'{{endChat}}'` Variable |
|                                              |                                                                                   | Messaging                  | To User      | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name, Elapsed Time.            |
| `On Connect (Default Message(s))`                               | When the agent connects                                                           | Live Chat, Messaging.  | To User      | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name, Elapsed Time, Expired Time. |
|                                              |                                                                                   | Voice                  | To User      | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name.            |
| `On Connect (Queue  & Skill Specific Messages)`                   | When Queue, Skill, or both match the configured combination<br>(Highest-priority mapping. Supports granular targeting. Overrides Queue-only or Skill-only settings. When multiple entries exist for the same match level, the first one applies in the UI.) | Live Chat, Messaging, Voice.  | To User     | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name, Queue Name, Nick Name. |
| `Due Reminder For Agent`                   | If the agent’s response time is greater than the set percentile of overdue conversations | Live Chat, Messaging.  | To Agent     | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name, Elapsed Time, Expired Time. |
| `Overdue`                                  | If the agent hasn't responded for the set amount of time                         | Live Chat, Messaging.  | To Agent     | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name, Elapsed Time, Expired Time. |
| `Agent Inactivity`                         | If the agent hasn't responded to an overdue conversation for the set time        | Live Chat              | To Agent     | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name, Elapsed Time, Expired Time. |
| `Snooze`                                   | If agent marked the customer on Snooze                                            | Live Chat, Messaging.  | To User      | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name.           |
|                                              |                                                                                   |                        | To Agent     | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name.           |
| `On Agent Interruption`                    | If the agent disconnects                                             | Live Chat, Messaging.  | To User      | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name, Elapsed Time, Expired Time. |
| `On Customer Interruption after Agent Transfer` | If customer gets disconnected, conversations wait with agent     | Live Chat              | To Agent     | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name.           |
|                                              |                                                                                   |                        | To User      | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name            |
| `On Customer Interruption in Queue`        | If the customer gets disconnected, conversations wait in the queue |                        | To User      | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name            |
| `Idle Reminder For Customer`               | If the customer’s response time is greater than the set percentile of total idle customer conversations | Live Chat, Messaging.  | To User      | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name, Elapsed Time, Expired Time. |
| `Idle`                                     | If the customer hasn't responded for the set amount of time                      | Live Chat, Messaging.  | To User      | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name, Elapsed Time, Expired Time. |
| `Auto Expire`                              | If the customer’s response time is greater than the set amount of time            | Live Chat              | To User      | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name, Elapsed Time, Expired Time. |
|                                              |                                                                                   |                        | To Agent     | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name            |
| `On Close`                                 | If the agent closes the conversation                                              | Live Chat, Messaging.  | To User      | Agent Full Name, Agent First Name, Agent Last Name, Agent Nick Name, Elapsed Time, Expired Time. |

### Conversation Statuses by Channel (Email)

| **Status**                       | **Applicability**                     | **Channel** | **Message** | **Variables**                                                              |
|----------------------------------|---------------------------------------|-------------|-------------|----------------------------------------------------------------------------|
| `On Connect (Default Message(s))`                        | When the agent connects                                                   | Email       | To User    | Time Left to Inactivity, <br>Time Left to Expiry.|
| `On Connect (Queue  & Skill Specific Messages)`<br>(Acknowledgement Mail Mode)                          | When the Queue, Skill, or both match the configured combination<br>(Controlled through a toggle: “Send OnConnect Message Only for First Agent.” When enabled, the system sends the OnConnect message only once as an acknowledgment email. Subsequent agent assignments in the same email thread don't trigger OnConnect messages.)                                                    | Email       | To User    | Time Left to Inactivity, <br>Agent First Name, <br>Agent Last Name, <br>Agent Nick Name, <br>Queue Name, <br> Skill Name. |
| `Overdue`                          | If the agent hasn't responded for the set amount of time (in hours and minutes).                                                    | Email       | To Agent    | Elapsed Time, Expired Time, Time Left to Inactivity, Time Left to Expiry. |
| `Due Reminder for Agent Inactivity`| If the agent’s response time is under the set amount of time (in hours).                                     | Email | To Agent    | Elapsed Time, Expired Time, Time Left to Inactivity, Time it takes to move back to Queue, once it turns overdue if the agent hasn't responded for the set amount of time (in hours and minutes).|Email|To Agent| Elapsed Time, Expired Time, Time Left to Inactivity, Time Left to Expiry.|
| `Agent Offline`                    | If an agent gets disconnected, conversations wait in queue for a set amount of time (in hours and minutes).       | Email       | To Agent    |                                                                            |
| `Customer Idle`                    | If the customer hasn't responded for the set amount of time (in hours and minutes) since the last agent response.                  | Email       | To User     | Elapsed Time, Expired Time, Time Left to Inactivity, Time Left to Expiry. |
| `Due Reminder for Auto Expiry`     | If the customer’s response time is under the set amount of time (in hours) before Auto Expiry.                                      | Email       | To User     | Elapsed Time, Expired Time, Time Left to Inactivity, Time Left to Expiry. |
| `Auto Expire`                      | When the conversation turns idle if the customer doesn't respond for the set amount of time (in hours and minutes) the interaction expires. | Email       | To User     | Elapsed Time, Expired Time, Time Left to Inactivity, Time Left to Expiry. |
|                                  |                                                                                                                                     |             | To Agent    | Elapsed Time, Expired Time, Time Left to Inactivity, Time Left to Expiry. |
| `On Close`                         | If the agent closes the conversation.                                                                                         | Email       | To User     | Elapsed Time, Expired Time, Time Left to Inactivity, Time Left to Expiry. |

### Conversation Status Configuration

For each status, you can configure the following:

1. The response time after which the status triggers: Set this either as a percentage value of a total or as minutes and seconds.

    * The statuses for which you can set a percentage value are: `Due Reminder For Agent`, and `Idle Reminder For Customer`.  
    * The statuses that don't require percentile or response time configuration are: `On Connect`, `On Interruption`, and `On Close`.   
        <img src="../images/response-status.png" alt="Status Configuration" title="Status Configuration" style="border: 1px solid gray; zoom:80%;">     
        The following applies to emails:  
    * The statuses for which you can set a response time (in hours) are `Due Reminder for Agent Inactivity`, and `Due Reminder for Auto Expiry`.  
    * The status for which there is no response time is `On Close`.  
    * The statuses for which you can set a response time (in hours and minutes) are `Overdue`, `Agent Inactivity`, `Agent Offline`, `Customer Idle`, and `Auto Expire`.

    !!! note

        The configurable limit for Overdue, Agent Inactivity, and Auto Expire for the Email channel is 30 days.

2. The messaging goes out to either the user or the agent. Edit status messages by selecting the Edit icon under the Message column.  

    1. Each status lets you edit the message text, add variables and select the language.  
        <img src="../images/onconnect-other-channels.png" alt="Status Message Dialog Box" title="Status Message Dialog Box" style="border: 1px solid gray; zoom:80%;">

    2. To add a variable, place the cursor where you want to insert the variable, select the Variable field, then select the one you need. This adds a variable placeholder in your message text, which replaces with contextual information once the message reaches its recipient. You can select more than one variable within the same message.
    For example: `{{agentFirstName}}` becomes John.  
        <img src="../images/auto-expire-messaging.png" alt="Add Variable" title="Add Variable" style="border: 1px solid gray; zoom:80%;">  

See the tables in [Conversation Statuses by Channel (Live Chat, Messaging, and Voice)](#conversation-statuses-by-channel-live-chat-messaging-and-voice) and [Conversation Statuses by Channel (Email)](#conversation-statuses-by-channel-email) for details on available variables.

When you configure your Conversation Statuses and Messaging, select `Save`.  
<img src="../images/save-button.png" alt="Save Conversation Status" title="Save Conversation Status" style="border: 1px solid gray; zoom:80%;">

### Allow Agent to Pause/Resume

By default, the Allow Agent to Pause or Resume feature is disabled. However, admins can enable it for agents handling voice interactions, allowing them to pause the recording during the call.
<img src="../images/allow-agent-to-pause-resume.png" alt="Allow Agents to Pause/Resume Call Recording" title="Allow Agents to Pause/Resume Call Recording" style="border: 1px solid gray; zoom:80%;">

### Allow Assistant Dialogs to Pause or Resume

By default, the Allow Assistant to Pause/Resume feature isn't available. However, admins can enable it for AI Agents (automation) handling voice interactions, allowing them to pause the recording when collecting Personally Identifiable Information (PII).  
<img src="../images/allow-virtual-assistants-to-pause-resume.png" alt="Allow Assistant Dialogs to Pause/Resume Call Recording" title="Allow Assistant Dialogs to Pause/Resume Call Recording" style="border: 1px solid gray; zoom:80%;">

Recorded calls are available to supervisors on the Dashboard’s [Interactions](../../../analytics/overview/conversations.md#call-recording){:target="_blank"} tab. The system doesn't record interactions in the Interactions tab during the period when recording stops or pauses.

The system logs the changes to the Call Recording Control settings on the [Admin Console](../../../administration/adminconsole.md#accessing-the-admin-console) > Analytics > [Audit Report page](../../../administration/analytics.md#audit-report-details).

## Transfers

### Transfer to External Contacts

If enabled, this option lets agents to transfer ongoing customer calls to the external contacts list, via the Agent Console. See [Agent Console > Transfer Interactions](../../../console/interacting-with-customers.md#transfer-interactions){:target="_blank"} to learn more.  
<img src="../images/transfer-to-external-contacts.png" alt="Enable Transfer to External Contacts" title="Enable Transfer to External Contacts" style="border: 1px solid gray; zoom:80%;">

### Enforce Skill Match for Transfers

If enabled, the system considers skills while finding an agent, during a queue transfer. If disabled, the system ignores skills while finding an agent, during a queue transfer.  
<img src="../images/enforce-skill-match-for-transfers.png" alt="Enable Enforce Skill Match for Transfers" title="Enable Enforce Skill Match for Transfers" style="border: 1px solid gray; zoom:80%;">

### Transfer Destinations

Supervisors can decide where agents can transfer interactions:

* `Queues & Agents`: Agents can transfer interactions to queues and other individual agents.
* `Queues only`: Agents can transfer interactions only to queues.  
<img src="../images/transfer-destinations.png" alt="Transfer Destinations" title="Transfer Destinations" style="border: 1px solid gray; zoom:80%;">

## Skill Modification

If enabled, the system lets agents to modify skills attached to an interaction.

You can select from the following options:

* `Live Interaction`: Selecting this option lets agents modify skills from the skills bar on the Live Interaction window.
* `Transfer`: Selecting this option lets agents modify skills when transferring an interaction.  
* `Transfer`: Selecting this option lets agents modify skills when transferring an interaction.  
<img src="../images/skill-modification.png" alt="Skill Modification" title="Skill Modification" style="border: 1px solid gray; zoom:80%;">

## Auto Logout & Auto Close Conversation

This feature lets administrators to specify the period of inactivity for automatic agent logout and a conversation timeout to transition into ACW mode. By default, auto logout & auto close conversation is disabled.

Auto Logout  
<img src="../images/auto-logout-toggle.png" alt="Auto Logout" title="Auto Logout" style="border: 1px solid gray; zoom:80%;">

Enabling the setting lets administrators to configure the following rules:

`Auto Logout`: The period of inactivity after which auto logout occurs. The default setting is 8 hours.

`Due Reminder for Auto Logout`: The time duration before auto logout when the alert message appears.  
<img src="../images/configuring-auto-logout.png" alt="Configure Auto Logout" title="Configure Auto Logout" style="border: 1px solid gray; zoom:80%;">

Conversation Callback Timeout

If enabled, the conversation automatically moves to ACW mode after the timeout period if the agent remains inactive on the callback screen. 30 Seconds is the default selection, you can configure it between 10 seconds and 5 minutes.  
<img src="../images/conversation-callback-timeout.png" alt="Conversation Callback Timeout" title="Conversation Callback Timeout" style="border: 1px solid gray; zoom:80%;">

`Due Reminder for Auto Logout`: The time duration before auto logout when the alert message appears.  
<img src="../images/configuring-auto-logout.png" alt="Configure Auto Logout" title="Configure Auto Logout" style="border: 1px solid gray; zoom:80%;">

`Conversation Callback Timeout`

If enabled, the conversation automatically moves to ACW mode after the timeout period if the agent remains inactive on the callback screen. 30 Seconds is the default selection, you can configure it between 10 seconds and 5 minutes.  
<img src="../images/conversation-callback-timeout.png" alt="Conversation Callback Timeout" title="Conversation Callback Timeout" style="border: 1px solid gray; zoom:80%;">

## Snooze

This feature lets agents to temporarily pause conversations that are awaiting a customer response or require an action from the agent.

By default, the snooze functionality unavailable. Administrators can enable it by turning on the Snooze toggle.

When enabled, the following options are available:

* **Make Snooze Notes Mandatory**: When enabled, agents must add snooze notes before moving a conversation to snooze.  

* **Agent Logout with Snoozed Interactions**: This setting lets agents to log out even when they have snoozed interactions in their tray. Snoozed interactions remain in the agent’s personal inbox and resume when the agent logs in next. Administrators can select the applicable channels from the available options (Live Chat, Messaging, and Email).  

* **Reactivation of Snoozed Interactions on User Message**: When enabled, any incoming user message reactivates the snoozed conversation and moves it to an in-progress state. When disabled, user messages received during snooze don't reactivate the conversation until the agent manually resumes it. Administrators can select the applicable channels from the available options (Live Chat, Messaging, and Email).  
<img src="../images/snooze-default.png" alt="Snooze" title="Snooze" style="border: 1px solid gray; zoom:80%;">

## Blended Agents

Administrators can turn on the toggle to enable the functionality, allowing agents to handle both voice and digital interactions concurrently, optimizing agent capacity, improving efficiency, and aligning with modern contact center best practices. By default, the blended agents functionality unavailable. For details on blended mode changes, see [Key Changes with Blended Mode](../agent-management/agent-management.md#key-changes-with-blended-mode).  
<img src="../images/blended-agents-toggle.png" alt="Blended Agents Toggle" title="Blended Agents Toggle" style="border: 1px solid gray; zoom:80%;">

## Additional Routing Configuration

Administrators can select from the following routing options that complement existing routing configurations through queues.

`Fairer Workload distribution`: When enabled, this feature distributes tasks evenly across agents, which reduces overload, improves focus, and can decrease completion times.

`Hold interaction in queue until the wait time expires`: When enabled, interactions remain in the queue till the set queue max timeout, regardless of agent availability.

!!! note

    The configurable limit for the queue max timeout for the Email channel is 30 days. 

`Omit Language in Routing`: When enabled, the system ignores language during routing. Routing continues to consider skill, proficiency, availability, capacity, and other applicable parameters.

When disabled (Default), the system includes language as a routing criterion along with skill, proficiency, availability, and other parameters.  
<img src="../images/additional-routing-config.png" alt="Additional Routing Configuration" title="Additional Routing Configuration" style="border: 1px solid gray; zoom:80%;">

## Enable Dial Tone Until Agent Connects

By default, the enable dial tone until agent connects functionality is disabled. Administrators can turn on the toggle and select **Save** to enable the functionality. When enabled, a dial tone plays  until the connection with the agent establishes after the user hears a connected tone.  
<img src="../images/enable-dial-tone.png" alt="Enable Dial Tone Until Agents Connect" title="Enable Dial Tone Until Agents Connect" style="border: 1px solid gray; zoom:80%;">

## Total Digital Conversation Limit

This setting lets admins to configure a maximum total digital conversation limit for an agent while adhering to the configured per-channel limits. [Learn more](../../../user-management/manage-users.md).  

!!! Note

    You can set the total conversation limit for a user only from the User section. This setting is not available in the user profile under the Monitor tab.  

When the Total digital conversation limit is reached,  an agent moves to System Busy status. This setting is disabled by default.  
<img src="../images/total-digital-conversations-enable.png" alt="Enable Total Digital Conversations Limit" title="Enable Total Digital Conversations Limit" style="border: 1px solid gray; zoom:80%;">