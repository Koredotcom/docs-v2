# Campaign Management

Outbound campaigns are reshaping how businesses connect with their audience. These campaigns proactively reach out to a curated list of individuals, following predefined rules. At the core of this process, calls are orchestrated based on the information available in a contact list. Outbound campaigns infuse a personalized touch by crafting scripts that shape the agent's interaction.  

!!! Note

    Campaigns do not come enabled by default for all accounts. Contact Support to enable campaigns for your account.

You can access Campaigns by going to **Contact Center AI** > **Campaigns** > **Proactive Outreach** > **Campaign Management**.  
<img src="../images/campaigns-page-main.png" alt="Campaigns Main Page" title="Campaigns Main Page" style="border: 1px solid gray; zoom:80%;"/>

Enable the "Outbound Voice Campaigns" permission in the [User Permissions](../../../user-management/role-management.md#agent) for agents who will handle campaign calls in the queue.

!!! Note

    Agents need to be configured to either inbound or outbound, as agent blending is not currently available.

## Voice Campaigns

The following details of the voice campaigns are shown in a table:  
<img src="../images/voice-campaigns-details.png" alt="Campaigns Table Top Panel" title="Campaigns Table Top Panel" style="border: 1px solid gray; zoom:80%;"/>

* **Name** - Campaign name and Type.
* **Actions** - Play/Pause/Replay, Stop, Edit, Clone campaign.
* **Priority** - Priority of the campaign from 1 to 5 (1 being the lowest). The default priority is 5.
* **Status** - Status of the campaign.

    * **Ready**: When a manual campaign is saved and ready to run.
    * **Active**: The campaign has started and is running.
    * **Paused**: The campaign is paused.
    * **Rerun**: Rerun the campaign.
    * **Completed**: The campaign has exhausted calling all numbers or the campaign has reached its scheduled end date.

* **Progress** - Progress of the campaign. The count refreshes every 5 seconds.
* **Contact List** - The call list that is dialed.
* **Connection** - The following details are displayed based on the dialer type:
    * **Agentless dialer**- The Flow name selected while creating or editing a campaign is shown. For example, the default Conversational Input voice Flow.
    * **Progressive dialer** - The Queue name selected while creating or editing a campaign is shown. For example, the default Sales Queue.
    * **Preview dialer** - Displays the Queue name selected for the campaign. Agents receive call records based on idle time and can review customer details before starting the call.
* **Last Run** - The date when the campaign was run last.
* **Last updated** - Date when the campaign was last updated.

    !!! Note

        The Campaigns module is only available on accounts configured with Voice Gateway. If an account is configured with AudioCodes or the mapped gateway is switched from AudioCodes to Voice Gateway, then the Campaigns module is unavailable.

### Sorting Order

The default sort is based on the **Run Time**.

Users can also sort based on **Priority**.

* Ascending (↑): Priority 5 → 1
* Descending (↓): Priority 1 → 5

### Agentless Dialer

Agentless Dialer maintains a queue of leads to be dialed and can automatically dial a new phone number. The dialer initiates an outbound call to the selected phone number and when a call is answered, the dialer connects the call to the configured voice experience flow. The dialer can detect answering machines or voicemail and reschedule the call by sending the call status to the campaign manager. If a call goes unanswered or reaches a voicemail with Answering Machine Detection (AMD) turned on, the dialer disconnects the call and automatically dials the following number on the list.

Metrics and call statistics, such as the number of calls made, call duration, and call outcomes are generated for monitoring and reporting purposes.

Campaign managers can customize the dialing pace, allowing them to set the number of simultaneous calls dialed at any time.

To create a campaign when Agentless Dialing Mode is selected:

* Select the **Start Flow** associated with the campaign. [Learn more](../../../flows/create-flows.md#the-start-flows).  
<img src="../images/start-flow.png" alt="Start Flow" title="Start Flow" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        * You can turn on Answering Machine Detection toggle if you want the system to determine whether the outbound call was received by an answering machine.

        * Using the agentless dialer, you can configure the [Automation Node](../../../flows/node-types/automation.md) making this dialer a differentiator from our competitors. 

### Progressive Dialer

A progressive dialer is an outbound calling system that enhances the efficiency and productivity of agents. The dialer automatically calls the next number in a pre-defined queue immediately after agents complete their current calls. It ensures that one call is made for each available agent. For example, if 10 agents are free, it initiates 10 calls simultaneously.

A progressive dialer connects the agent to the call only if a human answers, filtering out voicemails and busy lines. This gives agents time to review contextual information about the person they're about to contact, although they can't control who they speak to or the time they have for review.

The dialer efficiently manages lead allocation based on agent availability. It tracks agents’ statuses, ensuring the most idle agent receives the next call. It provides metrics and call statistics, such as the number of calls made, call duration, and call outcomes essential for monitoring and reporting.

To create a campaign when Progressive Dialing Mode is selected:

* Select the **Queue** to which the calls will be routed. [Learn more](../../routing/queues/queue-management.md)  
    <img src="../images/select-queue.png" alt="Select Queue" title="Select Queue" style="border: 1px solid gray; zoom:70%;">

!!! Note

    You can turn on Answering Machine Detection toggle if you want the system to determine whether the outbound call was received by an answering machine.

#### Progressive Dialer Call Handling

When the dialer selects a contact from the list, it dials the number and upon successful connection with the contact, the interaction is assigned to an agent. The CUSTOMER INFO widget displays the customer's information. the interaction appears on the [Conversation Tray](../../../console/conversation-tray.md) along with the campaign name.  
<img src="../images/dialing.png" alt="Dialing" title="Dialing" style="border: 1px solid gray; zoom:60%;">

During the call the agent can Mute, place the call on Hold, or end the interaction.  

<img src="../images/call-connected.png" alt="Call Connected" title="Call Connected" style="border: 1px solid gray; zoom:60%;">

Dispositions are displayed to the agent when the call ends.  
<img src="../images/dispositions.png" alt="Dispositions" title="Dispositions" style="border: 1px solid gray; zoom:60%;">

!!! Note

    Below is the dialing logic when the same agents are assigned multiple campaigns.

    * If the campaigns have different priorities, the dialer first dials contacts in campaigns with higher priority and then campaigns with lower priority.

    * If the campaigns have the same priority then it randomly selects contacts from the campaigns and assigns them to agents.

    * Say there are two campaigns with Priority 5 and one campaign with Priority 4, the dialer first randomly dials contacts from the two Priority 5 campaigns and after completing all contacts from these two campaigns it dials contacts from the Priority 4 campaign.

### Preview Dialer

A preview dialer is a dialing system used in outbound calling campaigns that provide agents with a call information preview. This lets agents to review recipient details, such as name, account history, etc., ensuring a more personalized and informed conversation. Unlike predictive dialers, preview dialers offer agents control over when to initiate the call, improving the quality of interactions. Preview dialers facilitate seamless access to customer data and efficient call management, making them ideal for campaigns requiring a personal touch.

The dialer is designed to efficiently manage outbound calling campaigns by assigning call records to available agents, ensuring optimal agent utilization, and adhering to defined dialing rules and compliance standards. Following are the details on the dialer logic, agent assignment, call handling, and skip logic.

The dialer app reads the records in the list and assigns them to an available agent. The dialer checks agent availability in the queue to assign the record list for a campaign. The dialer prioritizes agents based on their idle time, ensuring the most idle agents get assigned records first.

To create a campaign when Preview Dialing Mode is selected:

* Select the **Queue** to which the calls will be routed. [Learn more](../../routing/queues/queue-management.md#queues).
* Enter the **Maximum Skips** allowed for an assigned record. The skip settings are configured at the campaign level for each campaign the agent is part of.  
<img src="../images/dialing-mode-preview.png" alt="Dialing Mode Preview Dialer" title="Dialing Mode Preview Dialer" style="border: 1px solid gray; zoom:70%;">

#### Preview Dialer Call Handling

The agent is presented with one contact with an option for the Agent to Dial the number or Skip. Agents have a default 30-second timer to either dial or skip the call. If the agent dials within 30 seconds, the call is dialed to the contact. If the agent skips within 30 seconds, the interaction is removed from the agent and reassigned. Skipped contacts follow the retry logic based on the maximum attempts configured. The maximum number of skips allowed per agent can be configured for each campaign. When the system reaches the skip limit, the skip option is no longer be available for that campaign instance. If the agent neither dials nor skips within the 30-second window, the call is automatically dialed. The Customer Info widget displays the customer's information. The interaction appears on the [Conversation Tray](../../../console/conversation-tray.md) along with the campaign name from which the call or contact is generated.  
<img src="../images/preview-call.png" alt="Preview Call" title="Preview Call" style="border: 1px solid gray; zoom:70%;">

When an agent dials a number, that number becomes unavailable to other agents. When a call is connected, the number isn't dialed again for the duration of the campaign. During the call the agent can Mute, place the call on Hold, or end the interaction. All outbound calls are recorded in the same way as inbound calls to ensure quality and compliance.  
<img src="../images/call-options.png" alt="Call Options" title="Call Options" style="border: 1px solid gray; zoom:70%;">

Dispositions are displayed to the agent when the call ends.  
<img src="../images/disposition-and-notes.png" alt="Disposition & Notes" title="Disposition & Notes" style="border: 1px solid gray; zoom:70%;">

A campaign automatically ends once all numbers are connected. If a call isn't connected, the dialing rules, such as retry waiting periods are checked. The number is redialed after all other records have been attempted. The maximum number of attempts for each contact is set. For example, If a contact's max attempt is 1, it won't be retried. If it's 2, the contact is marked as Retry = yes and is retried as per the configured logic.

!!! Note

    For all voice campaigns (agentless, progressive, and preview), experience flows and caller IDs (phone numbers) are decoupled. The phone number used as the caller ID for a campaign does not need to be linked to the attached experience flow. It can be an independent number or a number associated with a different experience flow. To use [phone numbers](../../../channels/voice-gateway/configure-voice-gateway.md#buy-new-phone-number) or [SIP numbers](../../../channels/voice-gateway/configure-voice-gateway.md#sip-trunk-setup) in a campaign, the Outbound option must be enabled for those numbers. All outbound-enabled numbers appear in the campaign configuration drop-down list.

### Redirect Agents to Console

For Preview and Progressive Voice Campaigns, when a call initiates while the allocated agent isn't on the console, the system shows a notification and redirects the agent to the console after 5 seconds.

### Power Dialer

Power Dialing uses a pacing ratio to place multiple outbound calls for each available agent and reduce call abandonment. When a campaign starts in Power Dialer mode or when the campaign configuration changes, the system re-fetches the contact lists, re-runs the filters, scrubs contacts against the Global DNC list, and scrubs them against any campaign-specific DNC lists. In this mode, the system determines how many phone numbers to dial based on the configured pacing ratio and the number of available outbound agents in the campaign queue who aren't assigned to calls. The system selects contacts based on priority, number of previous attempts, and Call-me-later or Agent Call-me-later flags within ±10 minutes of the requested time, with optional consideration for historical answer rates and conversion history. During campaign creation or editing, selecting Power as the dialing mode displays options to select a queue and configure the pacing ratio, which defaults to 2 and supports values up to 10. The Power Dialer connects the agent as the system dials the customer and doesn't consider voicemail detection or busy lines.

#### Power Dialer Call Handling

1. When an agent becomes available in a phone campaign that uses the Power Dialer, the system dials multiple contacts based on the configured pacing ratio.  
2. The system reserves the agent during dialing and prevents outbound calls, inbound calls, application exit, and status changes.  
3. The system displays a message when establishing  a connection.  
    <img src="../images/connecting.png" alt="Connecting" title="Connecting" style="border: 1px solid gray; zoom:70%;">
4. While this screen appears, the system sets the agent status to System Busy. If System Busy isn't configured, the system sets the status to Busy.  
5. If the system determines that no campaign calls are available for the agent, the console displays. If a customer answers and the system connects a call, the call is automatically accepted and shown in the conversation tray.  
    <img src="../images/connection-established.png" alt="Call Connected" title="Call Connected" style="border: 1px solid gray; zoom:70%;">

### Filters

Campaign Managers can create, duplicate, mark as default, delete and edit filters for the campaigns.

#### Create a Filter

Steps to create a filter:

1. Select **Filters**.

2. Select **+ Add New Filter**.

3. Select the **Status**, **Priority**, and **Dialing Mode**, and choose their respective sub-filters.  
    <img src="../images/filter-by-voice.png" alt="Filter by" title="Filter by" style="border: 1px solid gray; zoom:70%;">

    Select from the available options:  

    * **Clear All** - Clears all selections.  
    * **Save & Apply** - Saves the filter, and it appears when selected.  
    * **Apply** - Applied for one instance and not saved.  

4. Select **Save & Apply**.

5. On the pop-up window, enter a name  (up to 20 characters) for the filter and select **Save & Apply**.  
        <img src="../images/save-filter-voice.png" alt="Save Filter" title="Save Filter" style="border: 1px solid gray; zoom:70%;">  

    Turn on the **Make this the default view toggle** to view the filter as the default filter on the voice campaigns tab.  
        <img src="../images/default-view-voice.png" alt="Default View" title="Default View" style="border: 1px solid gray; zoom:70%;"> 

6. Select the **Filters** dropdown to view Saved Filters. Hover over the saved filter to view the following options:

    * Duplicate
    * Mark as Default
    * Delete
    * Edit  
        <img src="../images/saved-filters-voice-campaign.png" alt="Saved Filter Options" title="Saved Filter Options" style="border: 1px solid gray; zoom:70%;"> 

#### Duplicate a Filter

Steps to duplicate a Filter:

1. Select **Duplicate**.  

2. Enter a name for the duplicate filter and select **Save**.  
    <img src="../images/rename-filter-voice.png" alt="Rename Filter" title="Rename Filter" style="border: 1px solid gray; zoom:70%;">

    A notification appears, creating the duplicate filter with the same attributes as the original filter.  
        <img src="../images/duplicate-filter-voice.png" alt="Duplicate Filter" title="Duplicate Filter" style="border: 1px solid gray; zoom:70%;">

#### Mark as Default

Step to mark a filter as default:

1. Select **Mark as Default**. A notification appears, and marks the filter as default.  
    <img src="../images/default-voice.png" alt="Default" title="Default" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        Clicking the Mark as Default again un-marks the filter.

#### Delete a Filter

Steps to delete a filter:

1. Select **Delete**.

2. Select **Delete** on the confirmation pop-up.

#### Edit a Filter

Steps to edit a filter:

1. Select **Edit**.

2. Make the necessary changes and select **Save & Apply**. A confirmation appears, and updates the filter.

### Create Voice Campaigns

Steps to create Voice campaigns:

1. On the **Voice** tab, select **+ New Campaign**.

2. The **New Voice Campaign** dialog box appears. Under the **General** tab, enter the following details:
    * **Campaign Name**
    * **Description**
    * Select the contact lists to dial for the campaign from the dropdown, then select **Done**.

        !!! Notes

            * Only 1 DNC list can be selected per campaign.
            * The contact list is automatically scrubbed against the DNC list after the Campaign is saved.

    * Select the **Priority** from the drop-down list.  
    * Select the **Dialing Mode** from the drop-down list.

3. Under the Choose Contact tab, enter the following details:

    * Select contact lists that have matching fields and belong to the same source type.  
    * Turn on the Filter Contact List Columns toggle and configure the filter conditions. The Test Filter option appears when you add dynamic filters, and using it's optional.  
    * Select the DNC List from the drop-down.  
    * Select the mapping list from the drop-down menu (optional).  

4. Select **Save**.  
    <img src="../images/choose-contact-voice.png" alt="Choose Contact" title="Choose Contact" style="border: 1px solid gray; zoom:70%;">

5. Under the **Outreach Strategy** tab, enter the following details:

    * **Caller ID**: Select the caller ID to display for the campaign.  
    * **Dialing Order**: Choose the order of dialing the phone numbers.  
    * **Max Attempts Per Contact**: Enter the count for the maximum number of attempts by the dialer to call each phone number in the campaign.  
    * **Default Retry Period**: Select the retry duration (in minutes) if an unsuccessful connection with a contact.  
    * **Max Ring Time**: Select the duration (in seconds) that a call rings until it's disconnected.  
    * **Contactable Timings**: Add the contactable timings (day of the week/time) when the dialer dials the calls. 

        !!! Note

            * Calls are dialed to contacts based on the calling hours and timezone configured here, irrespective of the campaign's start and stop time.  

            * The Caller ID dropdown for all campaigns (Agentless, Preview, and Progressive) displays all phone numbers—SIP or non-SIP—that are registered with this bot and configured as outbound-only or inbound-outbound.

6. Select **Save**.

### Schedule Voice Campaigns

Scheduling lets precise control over when your messages deliver. You can seamlessly plan campaigns to coincide with peak engagement times, ensuring maximum impact. Whether daily, weekly, Monthly, or Yearly, tailor your schedule to optimize outreach and enhance audience responsiveness. Scheduling a campaign activates the campaign at a designated date and time.

Steps to schedule a Campaign:

1. Select the **Schedule** tab and turn on the **Schedule Campaign** toggle.
    <img src="../images/schedule-campaign-toggle.png" alt="Schedule campaign Toggle" title="Schedule Campaign Toggle" style="border: 1px solid gray; zoom:80%;"/>

2. Select the campaign **Start Date & Time**. **End Date & Time** is optional.
    <img src="../images/start-and-end-time.png" alt="Start & End time" title="Start & End Time" style="border: 1px solid gray; zoom:80%;"/>

3. Select the **Time Zone** to dial the campaign.  
    <img src="../images/timezone-dropdown.png" alt="Timezone" title="Timezone" style="border: 1px solid gray; zoom:80%;"/>

4. Turn on the Recurrence toggle if you want the campaign to recur at defined intervals. You can select Daily, Weekly, Monthly, or Yearly recurrence.

    **Every “Enter Value” days** is a subset of what you select, Daily, Weekly, Monthly, or Yearly.

    !!! Note

        When a Scheduled campaign completes the first occurrence, it considers that run as complete so on the next recurrence it starts reaching the contacts freshly.
        For example, If a campaign is scheduled to run every week on Monday then on the first occurrence of Monday, the dialer dials as many contacts as it can and then treat the contact list as completed. The next Monday the dialer again considers dialing all contacts in the list.

5. Turning on the Allow Recurrence Precedence toggle gives the recurrence start and end time precedence over Contactable timings.
For example, if Contactable Timings are 9:00 AM to 6:00 PM but the user selects Recurrence Start Time as 8:00 AM, the campaign starts contacting from 8:00 AM.  
    <img src="../images/allow-recurrence-precedence.png" alt="Allow Recurrence Precedence" title="Allow Recurrence Precedence" style="border: 1px solid gray; zoom:80%;"/>

6. Start **Save**. The system creates a campaign per the configured schedule.

    !!! Notes

        * When a timezone is selected in the 'Contactable Timings' section, it automatically becomes the default timezone for scheduling in the 'Schedule' section. However, campaign managers can choose a different timezone from the dropdown if necessary.
        
        * When a campaign is scheduled, it becomes active at the specified date and time. However, the contacts are dialed according to the 'Contactable Timings' time and timezone settings.
        
        * To ensure accuracy, the contacts are scrubbed again 15 minutes before the scheduled time of a campaign.
        
        * A scheduled campaign automatically runs at the scheduled date/time but the contacts are dialed as per the contactable timings and timezone. Clicking the Run button for a scheduled campaign displays an error message.

### Stop a Scheduled Campaign

Select **Stop** under actions. Stopping a scheduled campaign ends the instance of that campaign.  
<img src="../images/stop-scheduled-campaign.png" alt="Stop" title="Stop" style="border: 1px solid gray; zoom:80%;"/>

A confirmation message displays. Select **Stop**.

### Dispositions

The dispositions tab defines the retry mechanism for dispositions considered as not fully attempted.

Steps to configure disposition retry logic:

1. Select **+ Add Disposition Retry**.  
2. Configure the required details, and then select ✓ to save the logic.  
    <img src="../images/map-dispositions.png" alt="Dispositions Tab" title="Dispositions Tab" style="border: 1px solid gray; zoom:70%;">

    !!! note "Map Dispositions to Positive Outcomes"
     
        Campaign managers can mark specific dispositions as Positive Final Outcomes. The system saves these selections and uses them in campaign scoring to provide more accurate and meaningful conversion metrics in analytics.

#### Current Disposition Counts

* This table shows Current Disposition Counts.  
* Displays counts for all dispositions in the Default Disposition Set.  
* Shows counts for:  
    * The active campaign, or  
    * The last run when viewing a completed campaign.  
        <img src="../images/dispositions-table.png" alt="Dispositions Table" title="Dispositions Table" style="border: 1px solid gray; zoom:80%;"/>

### Edit a Voice Campaign

Editing a voice campaign lets you to make changes to the campaign per your needs.

Steps to edit a campaign:

1. Select the ⋮ icon beside the campaign name and select **Edit**.  

2. A pop-up window appears. Do the required changes and select **Save**.  
    <img src="../images/edit-campaign-window.png" alt="Edit and Save Campaign" title="Edit and save Campaign" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        You cannot edit a campaign that in Active status. For campaigns in other statuses, you can edit limited fields.

### Clone a Voice Campaign

Cloning a voice campaign creates a replica of the original campaign. This is useful when two or more similar campaigns run simultaneously.

Steps to clone a campaign:

1. Select the ⋮ icon beside the campaign name and select **Clone**.  
    <img src="../images/clone-campaign.png" alt="Clone Campaign" title="Clone Campaign" style="border: 1px solid gray; zoom:80%;"/>
2. The system creates a cloned campaign.  

    !!! Note

        The system does not clone the original campaign's schedule configuration.  
    <img src="../images/cloned-campaigns.png" alt="Cloned Campaign" title="Cloned Campaign" style="border: 1px solid gray; zoom:80%;"/>

### Stop a Voice Campaign

Stopping a voice campaign resets the data, and creates a new instance of the campaign when you rerun the campaign.

Steps to stop a campaign:

1. Select **Stop** under **ACTIONS** for the campaign you want to stop.  
    <img src="../images/stop-campaign-button.png" alt="Stop Campaign" title="Stop Campaign" style="border: 1px solid gray; zoom:80%;"/>

2. A **Stop Campaign** confirmation pop-up window appears. Select **Stop**.  
    <img src="../images/stop-campaign-confirmation.png" alt="Stop Campaign Confirmation" title="Stop Campaign Confirmation" style="border: 1px solid gray; zoom:80%;"/>

### Delete a Voice Campaign

You can delete a voice campaign if the campaign has served its purpose or is no longer required.

Steps to delete a campaign:

1. Select ⋮ icon beside the campaign name and select **Delete**.

2. A **Delete Campaign** confirmation pop-up window appears. Select **Delete**.  
    <img src="../images/delete-campaign-confirmation.png" alt="Delete Campaign Confirmation" title="Delete Campaign Confirmation" style="border: 1px solid gray; zoom:80%;"/>

3. The system deletes the campaign

### Run Voice Campaigns

You can run a voice campaign by selecting the **Play** button.  
<img src="../images/run-campaign-button.png" alt="Run Campaign" title="Run Campaign" style="border: 1px solid gray; zoom:80%;"/>

When the campaign runs, you can pause or stop it. You can also rerun a completed campaign.

!!! Note

    * A phone number, queue, and flow must be attached to run a voice campaign.  

    * For Active, Future-Scheduled, and Paused campaigns, linked phone numbers and experience flows cannot be deleted.