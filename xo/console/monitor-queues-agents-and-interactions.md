# Monitor Queues, Agents, Interactions, and Service Levels

To access the **Monitor** section, you must be an _App Owner, App developer, App Tester,_ or _Supervisor_; or have the _Monitor Console –_ permission set to _Yes_. See [Role Management](../user-management/role-management.md#permissions) for more.

The **Monitor** tab lets you monitor live conversations between agents and customers and displays four views: **Queues**, **Agents**, and **Interactions**.

1. The **Queues** section displays the conversation summary between agents and customers per queue. You only have access to the queues you are part of; and to the agents assigned to the same queues as you.
2. The **Agents** section lets you view agent performance metrics and monitor agent-specific live conversations. Listed agents belong to the same queues you are also assigned to.
3. The **Interactions** section displays all interactions live in Contact Center AI and assigned to agents on the console.

    !!! Note

        Your Monitor access is restricted to the Queues that you are assigned to.
4. A pop-up message appears when the user selects the **Monitor** tab if the Contact Center Permissions are disabled for them.  
    <img src="../images/monitor-tab-disabled-user.png" alt="Disabled User" title="Disabled User" style="border: 1px solid gray; zoom:80%;"/>

## Queues

In this section, you can see all the assigned queues. The dashboard shows the number of conversations waiting, the number of engaged conversations, and a summary of agents assigned to the queue along with their current status. The supervisor can see the average wait time, max wait time (an indicator of peak load handling capacity), and drop-off rate.

Selecting the sort icon enables you to sort the columns in ascending/descending order. The default sorting is by Queue Name.

To monitor the agents:

* On the **Monitor** tab, select the **Queue** tab.  
    <img src="../images/queues-tab.png" alt="Queues Tab" title="Queues Tab" style="border: 1px solid gray; zoom:80%;"/>

* On the left menu, select a queue that you want to view.  
    <img src="../images/queue-name.png" alt="Queue Name" title="Queue Name" style="border: 1px solid gray; zoom:80%;"/>

* The queue screen appears as shown:  
    <img src="../images/queues-details.png" alt="Queue Details" title="Queue Details" style="border: 1px solid gray; zoom:70%;">

* Select the agent name. The detailed screen of the agent conversation opens up on the right.  

    **Chat**, **Messaging**, and **Voice**:  

    The assigned agent’s name appears immediately upon assignment, even if the agent hasn't sent a response.  
    <img src="../images/agent-assigned.png" alt="Agent Assigned" title="Agent Assigned" style="border: 1px solid gray; zoom:70%;">

### Filter

#### Create a Filter

1. Select the **Filter** option.  
    <img src="../images/filter-button.png" alt="Filter" title="Filter" style="border: 1px solid gray; zoom:80%;"/> 

2. Select **New Filter**.  
    <img src="../images/new-filter.png" alt="New Filter" title="New Filter" style="border: 1px solid gray; zoom:80%;"/> 

3. Select the **Queues**, **Channels**, **Type**, **State**, and **Languages**.

    !!! Note

        You can select from agent groups (list of agents), search for agents, and select from dynamic sub-filters.    
    <img src="../images/filter-options-queues.png" alt="Filter By" title="Filter By" style="border: 1px solid gray; zoom:80%;"/>  

    Select from the following options:  

    * **Clear** - Clears the selection.  
    * **Save & Apply** - Saves the filter, and it appears when selected.  
    * **Apply** - Applied for one instance and not saved.
4. Select **Save & Apply**.

5. On the pop-up window, enter a name (up to 20 characters) for the filter and select **Save & Apply**.  
    <img src="../images/save-and-apply.png" alt="Save & Apply" title="Save & Apply" style="border: 1px solid gray; zoom:80%;"/>  

    A confirmation message appears and saves the filter.

6. Select Saved Filters. By default, the system shows the following:

    * The Waiting with Agents and Waiting in Queue quick filters are pre-selected. These filters can be edited and deleted.  
        <img src="../images/default-filters.png" alt="Default Filters" title="Default Filters" style="border: 1px solid gray; zoom:80%;"/> 
    * You can select up to four quick filters. Quick filters appear along with unsaved filters.
    * If you set a filter as default but isn't selected as a quick filter, the system treats it as a quick filter.
    * You can't disable a quick filter while it's a default filter. To disable the quick filter, first remove the default filter.

#### Edit Filter

Steps to edit a filter:

1. Select the **Filters** tab. The Saved Filter name appears.  
    <img src="../images/saved-filters.png" alt="Saved Filters" title="Saved Filters" style="border: 1px solid gray; zoom:80%;"/> 

2. Select **Edit**.  
    <img src="../images/edit-button.png" alt="Edit" title="Edit" style="border: 1px solid gray; zoom:80%;"/> 

3. Make the necessary changes and select **Save & Apply**.  
    <img src="../images/edit-queue-filters.png" alt="Save and Apply" title="Save and Apply" style="border: 1px solid gray; zoom:80%;"/>  

    A confirmation message displays and updates the filter.

#### Copy Filter

1. Select **Duplicate**.

2. On the Rename Filter window, enter a name for the filter and select **Save**.  
    <img src="../images/save-copy.png" alt="Save" title="Save" style="border: 1px solid gray; zoom:80%;"/>

    A confirmation displays and creates a copy of the filter.

#### Mark as Default

1. Select **Mark as Default**.  
    <img src="../images/mark-as-default.png" alt="Mark as Default" title="Mark as Default" style="border: 1px solid gray; zoom:80%;"/>

    A confirmation message displays and marks the filter as default.

#### Delete Filter

1. Select **Delete**.  
    <img src="../images/delete-saved-filter.png" alt="Delete" title="Delete" style="border: 1px solid gray; zoom:80%;"/>

2. A Delete Filter message appears. Select **Delete**.  
    <img src="../images/delete-filter-confirmation.png" alt="Delete Confirmation" title="Delete Confirmation" style="border: 1px solid gray; zoom:80%;"/>  

    A confirmation message displays and deletes the filter.

### Join a Conversation

Supervisors can monitor live conversations between agents and customers. The supervisor can view the agent engagement metrics of the agent. At any point, the supervisor can view details of the agent-customer conversation, or the supervisor can manually assign the agent to another available agent.

### Manually Assign Conversations from the Queue to an Agent

Steps to assign a conversation from the queue to an agent (including themselves):

1. Select the conversation from the Queue on the right pane and select **Assign**.  
    <img src="../images/assign.png" alt="Assign" title="Assign" style="border: 1px solid gray; zoom:80%;"/> 

2. A pop-up appears. Select the agent and assign the conversation to that agent.  
    <img src="../images/manual-assignment.png" alt="Manual Assignment" title="Manual Assignment" style="border: 1px solid gray; zoom:60%;">

3. Select Mark as priority (optional) and select **Assign**.  
    <img src="../images/assign-to-agent.png" alt="Assign to Agent" title="Assign to Agent" style="border: 1px solid gray; zoom:60%;">

    !!! Note

        Manual assignments ignore skill-based routing and restrictions related to the maximum number of slots.

### Change Queue for a Conversation

Supervisors can change the queue for a conversation. They can move a conversation to a different queue and prioritize it by placing it at the top.

Steps to change the queue for a conversation:

1. Go to **MONITOR** > **QUEUES**.

2. Select a queue and then select the conversation.  
    <img src="../images/select-conversation.png" alt="Select Conversation" title="Select Conversation" style="border: 1px solid gray; zoom:70%;">

3. Select **Change Queue**.  
    <img src="../images/change-queues.png" alt="Change Queue" title="Change Queue" style="border: 1px solid gray; zoom:70%;">

4. On the Change Queue pop-up window, select the **Change Queue from** drop-down, select a queue, and then select Change Queue. Select Mark as priority to place the conversation at the top of the list in the destination queue.  
    <img src="../images/change-queue-from.png" alt="Change Queue Window" title="Change Queue Window" style="border: 1px solid gray; zoom:70%;">

    !!! Notes

        * On transferring a conversation, the count of waiting conversations decreases in the original queue and increases in the destination queue.
        * By default, the position of the conversation in the queue is determined based on the conversation’s arrival time in the original queue.
        * Transferring a conversation from the current queue to a different queue is recorded for reporting purposes.

### View Voicemails

When a call converts to a voicemail, it displays in the Monitor tab. Supervisors can view voicemails in waiting status and `Assign` to an agent or `Change Queue.`

## Transfer all Calls/Chats/Emails in Agent Queue

Supervisors can transfer or end multiple conversations at once across all supported digital channels, including chat, email, and voice. It improves workload management by allowing bulk actions directly from the Monitor tab. By default, the option is disabled for Agents and Custom roles. Supervisors, Admins, Owners, and App Developers can access the feature when permissions are explicitly granted—role-based permissions control access.

Steps to transfer all Calls/Chats/Emails in the Agent Queue:

1. Open the **Monitor** tab.
2. Select a queue. A panel appears with all active and waiting conversations.
3. Select ⋮ menu in the top corner of the panel.
4. Choose one of the following options:
    * Transfer Conversation
    * Force Close  
        <img src="../images/transfer-options (2).png" alt="Transfer Options" title="Transfer Options" style="border: 1px solid gray; zoom:70%;">

### Transfer Conversations to a Queue

1. Selecting Transfer Conversations activates multi-selection mode.
2. Select the Queue option and select one or more conversations. An option to select all or clear the selection is available.  
    <img src="../images/select-queue-option.png" alt="Select Queue" title="Select Queue" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        At least one conversation must be selected to proceed.

3. A bottom action bar appears, displaying a `Transfer` option.
4. From the queue dropdown, choose a destination queue.  
    <img src="../images/choose-queue.png" alt="Choose Queue" title="Choose Queue" style="border: 1px solid gray; zoom:70%;">
5. Select **Transfer**. The selected conversations are reassigned to the chosen queue.  
    <img src="../images/transfer-queue-button.png" alt="Transfer to Queue" title="Transfer to Queue" style="border: 1px solid gray; zoom:70%;">

!!! note

    If a conversation in the queue honors the agent wait time, it is not available for bulk transfer.

### Force Close

1. Selecting Force Close activates multi-selection mode.
2. Select one or more conversations.

    !!! Note

        * At least one conversation must be selected to proceed.  
        * When a conversation is force-closed—either individually or through a bulk action—a system-generated disposition is automatically attached to the conversation. This behavior applies to both indefinite and timed slot release scenarios.  
        * If an agent has already selected a disposition for a conversation before it is force-closed, the agent-selected disposition isn't saved. The system-generated disposition is applied instead.

3. A bottom action bar appears, displaying a Force Close icon.
4. Select **Force Close**.  
    <img src="../images/force-close.png" alt="Force Close" title="Force Close" style="border: 1px solid gray; zoom:70%;">
5. A confirmation pop-up displays. Select **Confirm**. The selected conversations close across their respective channels.  
    <img src="../images/confirm-close.png" alt="Confirm Close" title="Confirm Close" style="border: 1px solid gray; zoom:70%;">

#### Post-Action Behavior

After completing the transfer or end actions, the interface:

* Exits selection mode.  
* Updates the conversation list.  

## Agents

You can check agent details and monitor and intervene in ongoing conversations. Agents in this section restrict to those assigned to the same queues as you. A list of conversations handled by the agents appear with parameters such as state, load, first response, average response, Average Handle Time (AHT), etc.

Selecting the sort icon enables you to sort the columns in ascending or descending order. The default sorting is by State.

!!! Note

    Sorting is unavailable for automation interactions. Removing offline agents improves performance when sorting by load, but offline agents aren't visible in this mode.

The following metrics and their total counts appear:

* **Completed**: Count of interactions completed and closed by the agent.
* **Transferred**: Count of interactions an agent has transferred to a queue or another agent.
* **Rejected**: Count of interactions explicitly rejected by an agent.
* **Unanswered**: Count of interactions assigned to an agent where the agent didn't pick up the interaction within the acceptance timeout.  

The channel selection status appears on the Agents tab beside the Agent’s name. Active channels appear in Green and the disabled channels appear in Gray color.  
<img src="../images/agents-tab.png" alt="Agents Tab" title="Agents Tab" style="border: 1px solid gray; zoom:80%;"/>  
If an agent selects a channel and logs out at the end of the day, the previously selected channel persists when the agent starts a new session. Active channels appear in green, while disabled channels appear in gray for the supervisor.

* Hovering over an agent’s name displays a pop-up with the following information:

    * Agent status (for example, Available, Busy, Inactive).
    * Agent Name and profile icon, email ID, phone number, role.
    * Skills assigned to the agent.
    * Queues associated with the agent.
    * Agent Groups the agent is part of.  
        <img src="../images/agent-name-hover.png" alt="Agent Name Hover" title="Agents Name Hover" style="border: 1px solid gray; zoom:80%;"/>  

* The load capacity indicator displays the agent’s overall load capacity. Hovering over the load shows the channel-wise load capacity-for example, Live Chat ⅔ (2 slots out of 3 defined slots engaged) and the total digital conversation limit.  
    <img src="../images/load-capacity-indication.png" alt="Load Capacity Indicator" title="Load Capacity Indicator" style="border: 1px solid gray; zoom:80%;"/>

* On the monitor tab, select an agent on the left side. The supervisor can view the agent’s ongoing conversation on the right and check the engagement metrics.  
    <img src="../images/agents-details.png" alt="Engagement Metrics" title="Engagement Metrics" style="border: 1px solid gray; zoom:80%;"/>

* On the right window, Select the agent’s name. Another window opens to the right. To check the agent engagement metrics, on the right window, select the down arrow:  

    **Chat**, **Messaging**, and **Voice**:

    <img src="../images/engagement-metric.png" alt="Agent Engagement Metrics" title="Agent Engagement Metrics" style="border: 1px solid gray; zoom:80%;"/>  

    **Email**:  

    <img src="../images/email-metrics.png" alt="Email Metrics" title="Email Metrics" style="border: 1px solid gray; zoom:70%;">

* For a selected agent, the supervisor can check the agent profile, chat with the agent, change the queue, and assign the conversation to other agents:  
    <img src="../images/agents-assign-change-queues.png" alt="Assign, Change Queue" title="Assign, Change Queue" style="border: 1px solid gray; zoom:80%;"/>

### Filters

#### Create Filter

1. Select **Filter**.  
    <img src="../images/agents-filter-button.png" alt="Filter" title="Filter" style="border: 1px solid gray; zoom:80%;"/>

2. Select **New Filter**. 

3. Select the **Status**, **Agents**, **Skills**, and **Roles**.  

    Select from the available options:

    * **Clear** - Clears the selection.
    * **Save & Apply** - Saves the filter, and it appears when selected.
    * **Apply** - Applied for one instance and not saved.

4. Select **Save & Apply**.  

5. On the pop-up window, enter a name (up to 20 characters) for the filter and select Save & Apply.  
    <img src="../images/save-and-apply.png" alt="Save & Apply" title="Save & Apply" style="border: 1px solid gray; zoom:80%;"/>  

    A confirmation message appears and saves the filter.

6. Select Saved Filters. By default, the system shows the following:

    * The Waiting with Agents and Waiting in Queue quick filters are pre-selected. These filters are editable and can deletable.  
        <img src="../images/agents-default-filters.png" alt="Default Filters" title="Default Filters" style="border: 1px solid gray; zoom:80%;"/> 
    * You can select up to four quick filters. Quick filters appear along with unsaved filters.
    * If you set a default filter but not select it as a quick filter, the system treats it as a quick filter.
    * You can't disable a quick filter while it's a default filter. To disable the quick filter, first remove the default filter.

#### Edit a Filter

Steps to edit a filter:

1. Select the **Filters** tab. The Saved Filter name appears.  
    <img src="../images/saved-filters.png" alt="Saved Filters" title="Saved Filters" style="border: 1px solid gray; zoom:80%;"/>  

2. Select **Edit**.  
    <img src="../images/edit-button.png" alt="Edit" title="Edit" style="border: 1px solid gray; zoom:80%;"/>

3. Make the necessary changes and select **Save & Apply**.  

    A confirmation message appears and updates the filter.

#### Copy a Filter

1. Select **Duplicate**.  
    <img src="../images/duplicate-button.png" alt="Duplicate" title="Duplicate" style="border: 1px solid gray; zoom:80%;"/>

2. On the Rename Filter window, enter a name for the filter and select **Save**.
    
    A confirmation appears and creates a copy of the filter.

#### Mark as Default

1. Select **Mark as Default**.  
<img src="../images/mark-as-default.png" alt="Mark as Default" title="Mark as Default" style="border: 1px solid gray; zoom:80%;"/>

    A confirmation message appears and marks the filter as default.

#### Delete a Filter

1. Select **Delete**.  
<img src="../images/delete-saved-filter.png" alt="Delete" title="Delete" style="border: 1px solid gray; zoom:80%;"/>

2. A Delete Filter message appears. select **Delete**.  

    A confirmation message appears and deletes the filter.

### Auto Refresh When Applying Filters

When a supervisor applies a filter, the page refreshes at fixed intervals to verify real-time data accuracy. For example, changes in agent status appear after the auto refresh, keeping the data up to date.
The page refreshes every 10 seconds to update data changes. Supervisors can pause updates by selecting **Pause**.  
<img src="../images/pause-button.png" alt="Pause Refresh" title="Pause refresh" style="border: 1px solid gray; zoom:80%;"/>  

Selecting **Play** resumes updates.  
<img src="../images/resume-button.png" alt="Resume Refresh" title="Resume refresh" style="border: 1px solid gray; zoom:80%;"/>  

A confirmation appears on completing the refresh, and shows the updated data.  
<img src="../images/filter-updated.png" alt="Filter Updated" title="Filter Updated" style="border: 1px solid gray; zoom:80%;"/>  

!!! Note

    The system doesn't immediately update changes to the data (for example, new interactions and status changes). These changes appear after the next auto-refresh.

## Transfer all Calls/Chats/Emails to a Human Agent

Supervisors can transfer or end multiple conversations at once across all supported digital channels, including chat, email, and voice. It improves workload management by allowing bulk actions directly from the Monitor tab. By default, the option is disabled for Agents and Custom roles. Supervisors, Admins, Owners, and App Developers can access the feature when permissions are explicitly granted—role-based permissions control access.

### Transfer Conversations to a Human Agent

Steps to transfer all Calls/Chats/Emails in the Agent Queue:

1. Open the **Monitor** tab.
2. Select a Agents tab. A panel appears with all active and waiting conversations.
3. Select ⋮ in the top corner of the panel.
4. Choose one of the following options:
    * Transfer Conversation
    * Force Close  

5. Selecting Transfer Conversations activates multi-selection mode.
6. Select Agent and select one or more conversations.  
    <img src="../images/select-agent-option.png" alt="Select Agent" title="Select Agent" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        At least one conversation must be selected to proceed.

7. A bottom action bar appears, displaying a **"Transfer"** option.
8. From the agent dropdown, choose an agent.  
    <img src="../images/choose-agent.png" alt="Choose Agent" title="Choose Agent" style="border: 1px solid gray; zoom:70%;">
9. Select **Transfer**. The system reassigns the selected conversations to the chosen queue.  
    <img src="../images/transfer-agent-button.png" alt="Transfer to Agent" title="Transfer to Agent" style="border: 1px solid gray; zoom:70%;">

!!! note

    * Conversations cannot be transferred when the agent is on a live call.  
    * Conversations cannot be transferred to offline agents.  
    * Blended agents must be configured to transfer digital and voice conversations together.  
    * A pop-up appears when a conversation is transferred to an agent who has reached full capacity. Select Transfer to assign the conversation to the agent.  
    * Conversations in the TERMINATED, TRANSIENT_DROPOFF, and TRANSIENT_CLOSED states cannot be transferred or selected. A disabled cursor appears on hover, and these conversations are excluded when users click Select All.

### Force Close

1. Selecting Force Close activates multi-selection mode.
2. Select one or more conversations.

    !!! Note

        * At least one conversation must be selected to proceed.  
        * When a conversation is force-closed—either individually or through a bulk action—a system-generated disposition is automatically attached to the conversation. This behavior applies to both indefinite and timed slot release scenarios.  
        * If an agent has already selected a disposition for a conversation before it is force-closed, the agent-selected disposition is saved. The system-generated disposition are applied instead.

3. A bottom action bar appears, displaying a Force Close option.
4. Select **Force Close**.  
    <img src="../images/force-close.png" alt="Force Close" title="Force Close" style="border: 1px solid gray; zoom:70%;">
    
5. A confirmation pop-up is displays. Select **Confirm**. The selected conversations close across their respective channels. 

#### Post-Action Behavior

After completing the transfer or end actions, the interface:

* Exits selection mode.  
* Updates the conversation list.  

### Check Profile

You can access the profile by either selecting the agent or hovering over the agent.

Steps to check the agent profile:

There are three tabs, Profile tab, Settings tab, and Queue & Skills tab.

1. On the Profile tab, check or edit the profile of the agent.
2. Select **Save**.

### Settings Tab

On the Settings tab, you can configure the chat experience and voice experience settings.  
<img src="../images/settings-tab.png" alt="Filters Refreshed" title="Filters Refreshed" style="border: 1px solid gray; zoom:60%;">

For chat experience, you can enable chat settings. If enabled you can define the properties of the chat request, for example, max chats = 5. You can choose the language and the proficiency level.  
<img src="../images/chat-experience.png" alt="Filters Refreshed" title="Filters Refreshed" style="border: 1px solid gray; zoom:60%;">

Similarly, for voice experience, you can enable voice settings. If enabled, you can define the properties of the voice request. You can choose the language and the proficiency level.

### Queues & Skills Tab

On the Queues & Skills tab, you can configure the Queues and Skills settings.  
<img src="../images/queues-and-skills.png" alt="Filters Refreshed" title="Filters Refreshed" style="border: 1px solid gray; zoom:60%;">

### Queues

You can select the default queue and the preferred queue.  
<img src="../images/select-preferred.png" alt="Select Preferred" title="Select Preferred" style="border: 1px solid gray; zoom:70%;">

### Skills

You can select the Proficiency level of the skill.  
<img src="../images/skill-proficiency.png" alt="Skills" title="Skills" style="border: 1px solid gray; zoom:70%;">

### Chat with an Agent

To chat with an Agent:

* Select the Chat option. A pop-up chat window appears, where the supervisor can type messages for the agent.  
    <img src="../images/chat-agent.png" alt="Chat With Agent" title="Chat With Agent" style="border: 1px solid gray; zoom:60%;">

### Mark Offline

You can mark an agent as offline to prevent assigning the agent to any other customers.  
<img src="../images/mark-agent-offline.png" alt="Mark Agent Offline" title="Mark Agent Offline" style="border: 1px solid gray; zoom:60%;">

### Logout

Force Logout is a feature that lets the agent to free up and the ongoing customer engagements can be re-assigned to other agents.  
<img src="../images/force-logout.png" alt="Force Logout Agent" title="Force Logout Agent" style="border: 1px solid gray; zoom:50%;">

### Join a Conversation

Supervisors can monitor live conversations between agents and customers. The supervisor can view the agent engagement metrics of the agent. At any point, the supervisor can Join a conversation (conference) and view details of the agent-customer conversation.

Steps to Join a conversation:

1. On the right pane, select **Join Conversation**.  
    <img src="../images/join-conversation.png" alt="Join Conversation" title="Join Conversation" style="border: 1px solid gray; zoom:70%;">

2. A confirmation pop-up appears. Select **Confirm** to join.

### Listen and Whisper [Voice Calls]

Listen and Whisper functionalities enhance supervisors’ oversight and support capabilities in real-time voice conversations.

Listen: This lets supervisors to discreetly monitor live voice conversations between agents and customers. By enabling this feature, supervisors can stay informed about ongoing interactions without participating directly, ensuring they're always aware of the dialogue and can step in if necessary.

Whisper: This functionality provides a means for supervisors to give real-time guidance to agents without the customer hearing the communication. Supervisors can use the whisper functionality to offer immediate support or corrective instructions, enhancing the agent’s performance and the overall quality of customer interaction.

Steps to Listen and Whisper Voice Conversations:

1. Go to **MONITOR** > **AGENTS** > Select the conversation that you want to Listen to & Whisper.  

    A conference icon displays if multiple participants are on the call. The Listen & Whisper and Join options are disabled.  
    <img src="../images/participants.png" alt="Participants" title="Participants" style="border: 1px solid gray; zoom:70%;">  

2. Select **Listen & Whisper**. 

3. You can listen to the conversation between the customer and the agent. Select **Whisper to Agent** to whisper to the agent.  
<img src="../images/listening.png" alt="Whisper to Agent" title="Whisper to Agent" style="border: 1px solid gray; zoom:70%;">

    A confirmation displays that whisper mode is enabled.  

    When a supervisor whispers, an indication appears at the top of the live interaction, and the transcript displays in yellow.  
    <img src="../images/whispering.png" alt="Console Whisper Input" title="Console Whisper Input" style="border: 1px solid gray; zoom:70%;">

5. Select **Stop Whispering** to end the Listen and Whisper Session.  
    <img src="../images/stop-whispering.png" alt="Stop Whispering" title="Stop Whispering" style="border: 1px solid gray; zoom:70%;">  
    When a supervisor stops listening to a conversation, the message Listen session ended displays.  
    <img src="../images/listen-session-ended.png" alt="Listen Session Ended" title="Listen Session Ended" style="border: 1px solid gray; zoom:70%;">  
    The transcripts aren't real-time. Select the **Refresh** icon to refresh the transcript.  
    <img src="../images/transcripts.png" alt="Transcripts" title="Transcripts" style="border: 1px solid gray; zoom:70%;">

## Interactions

You can view all live interactions on the Contact Center AI console. This view includes only interactions that involve agent transfers. Selecting the sort icon lets you to sort the columns in ascending/descending order. A summary of the interactions view is as follows:  
<img src="../images/interaction-tab.png" alt="Interactions Tab" title="Interactions Tab" style="border: 1px solid gray; zoom:80%;"/>

!!! Note

    Agents are not listed in Agent Transfers when the Chat and Email channel slots are set to zero.

### Manually Assign Conversations to an Agent and Change Queue

Supervisors can assign conversations to an agent, and change queues for conversations. Select an Ongoing conversation to view the Assign and Change Queue options.  
<img src="../images/manually-assign-change-queue.png" alt="Manually Assign/Change Queue" title="Manually Assign/Change Queue" style="border: 1px solid gray; zoom:80%;"/>

Supervisors can also view an agent’s engagement metrics.

### Manually Assign a Bot-led Conversation to an Agent or Queue

Supervisors can assign bot-led conversations to an agent or a queue. To do so, select an Ongoing conversation and then select **Assign**.  
<img src="../images/assign-button-bot-led-conversation.png" alt="Manually Assign/Change Queue" title="Manually Assign/Change Queue" style="border: 1px solid gray; zoom:80%;"/>

In the Assign Conversation pop-up window, select Agent/Queue, select the agent or queue from the dropdown, mark as priority if required, turn on the message to customer toggle if you want to send a message to the customer, and select **Assign**.  
<img src="../images/assign-bot-led-conversation.png" alt="Assign/Change Queue (Bot-Led Conversation)" title="Assign/Change Queue (Bot-Led Conversation)" style="border: 1px solid gray; zoom:80%;"/>

### Filters

#### Create Filter

1. Select **Filter**.  
    <img src="../images/filter-interactions.png" alt="Filter" title="Filter" style="border: 1px solid gray; zoom:80%;"/>

2. Select **New Filter**.

3. Select the **Status**, **Agents** (bot-led interactions disabled), **Skills**, **Queues**, **Channels**, **Type**, and **Language**.  
    <img src="../images/interaction-filter.png" alt="Filter Options" title="Filter Options" style="border: 1px solid gray; zoom:80%;"/>  
    Select the **Status**, **Participants** (bot-led interactions enabled), **Skills**, **Queues**, **Channels**, **Type**, and **Language**.  
        <img src="../images/participant-filter.png" alt="Filter Options" title="Filter Options" style="border: 1px solid gray; zoom:80%;"/>  
    
    !!! Note

        Bot-led interactions don't appear by default, even when bot-led interaction permission is enabled for a role. To view these interactions, supervisors must explicitly select 'Automation' or 'Automation/Agents' from the Participant filter. The default setting remains "Agent" regardless of permission settings to prevent supervisors from being overwhelmed with automation conversations. This keeps automation conversations hidden unless specifically requested while maintaining the flexibility to include them when needed.

    Select from the available options:

    * **Clear** - Clears the selection.  
    * **Save & Apply** - Saves the filter, and it appears when selected.  
    * **Apply** - Applied for one instance and not saved.  

4. Select **Save & Apply**.

5. On the pop-up window, enter a name (up to 20 characters) for the filter and select **Save & Apply**.  
    <img src="../images/save-and-apply.png" alt="Save & Apply" title="Save & Apply" style="border: 1px solid gray; zoom:80%;"/>

    A confirmation message displays and creates the filter.

6. Select Saved Filters. By default, the system shows the following:

    * The Waiting with Agents and Waiting in Queue quick filters are pre-selected. These filters are editable and can be deleted.  
        <img src="../images/interactions-default-filters.png" alt="Default Filters" title="Default Filters" style="border: 1px solid gray; zoom:80%;"/> 
    * You can select up to four quick filters. Quick filters appear along with unsaved filters.
    * If you set a filter as the default but not selected as a quick filter, the system treats it as a quick filter.
    * You can't disable a quick filter while it's applied as a default filter. To disable the quick filter, first remove the default filter.

#### Edit Filter

Steps to edit a filter:

1. Select the **Filters** tab. The Saved Filter name appears.  
    <img src="../images/saved-filters.png" alt="Saved Filters" title="Saved Filters" style="border: 1px solid gray; zoom:80%;"/>

2. Select **Edit**.  

3. Make the necessary changes and select **Save & Apply**.  

    A confirmation message displays and updates the filter.

#### Copy Filter

1. Select **Duplicate**.  

2. On the Rename Filter window, enter a name for the filter and select **Save**.  
    <img src="../images/save-copy.png" alt="Save Copy" title="Save Copy" style="border: 1px solid gray; zoom:80%;"/>

    A confirmation displays and creates a copy of the filter.

#### Mark as Default

1. Select **Mark as Default**.  

2. A confirmation message displays and marks the filter as default.

#### Delete Filter

1. Select **Delete**.  
    <img src="../images/delete-saved-filter.png" alt="Delete" title="Delete" style="border: 1px solid gray; zoom:80%;"/>

2. A Delete Filter message appears. Select **Delete**.  
    <img src="../images/delete-filter-confirmation.png" alt="Delete Confirmation" title="Delete Confirmation" style="border: 1px solid gray; zoom:80%;"/>

    A confirmation message displays and deletes the filter.

## Service Levels

This section enables supervisors to  monitor service-level targets based on specific needs.

To monitor service levels, go to Console > Monitor > SERVICE LEVELS.  
<img src="../images/service-levels-dashboard.png" alt="Service Levels Dashboard" title="Service Levels Dashboard" style="border: 1px solid gray; zoom:80%;"/>

The dashboard displays the following information:

**Queues**: Name of the queue for which the system shows the service levels.

**Average Speed to Answer (ASA)**: The average time it takes for agents to answer inbound customer contacts (such as calls or chats) after they enter the queue. It measures the responsiveness of the contact center.

**Response Service Level (SL)**: The percentage of inbound customer contacts answered by agents within a predefined threshold time. It reflects how consistently the contact center meets its response time targets.

**Abandonment Rate**: The percentage of inbound customer contacts (calls, chats, or emails) that customers disconnect or leave before reaching an agent or completing self-service.

**Transfer Rate**: The percentage of customer contacts that agents transfer to another agent, department, or queue after initially answering the interaction.

### Filters

Supervisors can create, edit, copy, mark as default, and delete filters to customize the view of service level metrics.

For information on configuring Service Levels, refer to [SLAs & Alerts](../contactcenter/performance-management/slas-and-alerts.md).