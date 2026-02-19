# SMS Campaigns

SMS campaigns use text messages to reach and engage a target audience for marketing, informational, or transactional purposes. These campaigns use the SMS channel to deliver concise, impactful messages directly to users' mobile phones. SMS campaigns are versatile and used for promotions, alerts, reminders, surveys, and customer support, offering businesses a direct and efficient way to communicate with their audience.

You can access Campaigns by going to **Campaign Management** > **SMS**.  
<img src="../images/sms-campaign-page.png" alt="SMS Campaigns Page" title="SMS Campaigns Page" style="border: 1px solid gray; zoom:80%;"/>

On this page, the following details of the SMS campaigns are shown in a table:  
<img src="../images/campaign-page-header-panel.png" alt="SMS Campaigns Header" title="SMS Campaigns Header" style="border: 1px solid gray; zoom:80%;"/>  

* **Campaign** - The campaign name.
* **Actions** - Play/Pause/Replay, Stop, Edit, Clone campaign.
* **Priority** - Priority of the campaign from 1 to 5 (1 being the lowest). The default priority is 5.
* **Status** - Status of the campaign.
    * **Ready**: When a manual campaign is saved and ready to run.
    * **Run as Emergency**: The campaign runs immediately, overriding any schedule and calling hours.
    * **Active**: The campaign is started and running.
    * **Paused**: The campaign is paused.
    * **Rerun**: Rerun the campaign.
    * **Completed**: The campaign has exhausted calling all numbers or the campaign has reached its scheduled end date.
* **Progress** - Progress of the campaign. The count refreshes every 5 seconds.
* **Contact List** - The call lists that will be dialed.
* **Schedule** - Start and End date when the campaign is scheduled to run.

To run SMS campaigns, you must configure the SMS channel first. [Learn more](../../../channels/add-sms-channel.md).

## Sorting Order

The default sort is based on the **Run Time**.

Users can also sort based on **Priority**.

* Ascending (↑): Priority 5 → 1
* Descending (↓): Priority 1 → 5

## Filters

Campaign Managers can create, duplicate, mark as default, delete and edit filters for the campaigns.

### Create a Filter

Steps to create a filter:

1. Click **Filters** in the top right corner.  
    <img src="../images/filters-dropdown.png" alt="Filters" title="Filters" style="border: 1px solid gray; zoom:70%;">

2. Click **+ Add New Filter**.  
    <img src="../images/add-new-filter.png" alt="Add Filter" title="Add Filter" style="border: 1px solid gray; zoom:70%;">

3. Select the **Status** and **Priority**, and choose their respective sub-filters.  
    <img src="../images/filter-by-sms.png" alt="Filter by" title="Filter by" style="border: 1px solid gray; zoom:70%;">

    Select from the available options below:  
    1. **Clear All**– Clears all selections.  
    2. **Save & Apply** – Saves the filter, and it appears when selected.  
    3. **Apply** – Applied for one instance and not saved.  

4. Click **Save & Apply**.

5. On the pop-up window, enter a name  (up to 20 characters) for the filter and click **Save & Apply**.  
        <img src="../images/save-filter-sms.png" alt="Save Filter" title="Save Filter" style="border: 1px solid gray; zoom:70%;">  

    Turn on the **Make this the default view toggle** to view the filter as the default filter on the voice campaigns tab.  
        <img src="../images/default-view-sms.png" alt="Default View" title="Default View" style="border: 1px solid gray; zoom:70%;"> 

6. Click the **Filters** dropdown to view Saved Filters. Hover over the saved filter to view the following options:
    1. Duplicate
    2. Mark as Default
    3. Delete
    4. Edit  
        <img src="../images/saved-filters-sms-campaign.png" alt="Saved Filter Options" title="Saved Filter Options" style="border: 1px solid gray; zoom:70%;"> 

#### Duplicate a Filter

Steps to duplicate a Filter:

1. Click **Duplicate**.  
    <img src="../images/duplicate-sms.png" alt="Duplicate" title="Duplicate" style="border: 1px solid gray; zoom:70%;">

2. Enter a name for the duplicate filter and click **Save**.  
    <img src="../images/rename-filter-sms.png" alt="Rename Filter" title="Rename Filter" style="border: 1px solid gray; zoom:70%;">

    A notification appears, creating the duplicate filter with the same attributes as the original filter.  
        <img src="../images/duplicate-filter-sms.png" alt="Duplicate Filter" title="Duplicate Filter" style="border: 1px solid gray; zoom:70%;">

#### Mark as Default

Step to mark a filter as default:

1. Select **Mark as Default**.  
    <img src="../images/mark-as-default-sms.png" alt="Mark as Default" title="Mark as Default" style="border: 1px solid gray; zoom:70%;">

    A notification appears, and the filter is marked as default.  
        <img src="../images/default-web.png" alt="Default" title="Default" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        Clicking the Mark as Default again will un-mark the filter.

#### Delete a Filter

Steps to delete a filter:

1. Select **Delete**.  
    <img src="../images/delete-web.png" alt="Delete" title="Delete" style="border: 1px solid gray; zoom:70%;">

2. Select **Delete** on the confirmation pop-up.

#### Edit a Filter

Steps to edit a filter:

1. Select **Edit**.  
    <img src="../images/edit-web.png" alt="Edit" title="Edit" style="border: 1px solid gray; zoom:70%;">

2. Make the necessary changes and select **Save & Apply**. A confirmation displays, and updates the filter.  
    <img src="../images/save-edited-filter-web.png" alt="Save Edited Filter" title="Save Edited Filter" style="border: 1px solid gray; zoom:70%;">

## Create SMS Campaigns

Steps to create an SMS campaign:

1. Select **+ New Campaign**.  
    <img src="../images/new-campaign-button-sms.png" alt="+ New Campaign" title="+ New Campaign" style="border: 1px solid gray; zoom:80%;"/>

2. The **New SMS Campaign** dialog box displays. Under the **General** tab, enter the following details:

    * **Campaign Name**: Enter a name for the campaign.
    * **Description**: Enter a description of the campaign.
    * **Contact Lists**: Select the contact lists that will be dialed, for the campaign from the drop-down list and then select **Done**. [Learn more](../list-management/list-management.md#contact-lists).
    * **DNC List**: Select the DNC List from the drop-down. [Learn more](../list-management/list-management.md#dnc-lists).
    * **Priority**: Select the priority for the campaign from the drop-down.  
    <img src="../images/general-tab-sms.png" alt="General Tab" title="General Tab" style="border: 1px solid gray; zoom:80%;"/>

3. On the **Message** tab, you can select from two available formats:

    * **Simple**: This format is useful for sending simple outbound messages. Select a template for the SMS campaign from the drop-down. Click the 🖉 icon to enter the message to be shared.  
        <img src="../images/simple-message.png" alt="Simple Message" title="Simple Message" style="border: 1px solid gray; zoom:80%;"/>

        !!! Note

            * Users can select system or custom templates and edit them for a particular campaign.
            * Editing a custom or system template modifies it for a specific campaign, and does not alter the original template. 
            * When a system or custom template is selected and the user chooses to edit it, the template selection drop-down resets to "None."

    * **Advanced**: This format is useful for two-way messaging (Inbound and Outbound) by linking to a start flow that contains dialog tasks. All the published start flows are displayed regardless of a number associated with them. This format can also be used to transfer to an agent using the attached flow. Select a start flow from the dropdown.  
        <img src="../images/advanced-message.png" alt="Advanced Message" title="Advanced Message" style="border: 1px solid gray; zoom:80%;"/>

4. Click **Save** after entering the message.  
    <img src="../images/save-message-sms.png" alt="Save Message" title="Save Message" style="border: 1px solid gray; zoom:80%;"/>

5. On the **Outreach Strategy** tab, first, select the Caller ID. Caller ID is the number that is used to send SMS, and the same number is displayed on the recipient's phone. All the numbers available in the app are available to be selected as the caller ID.  
In the Simple message format, the caller ID displays numbers configured for Outbound only, which are not linked to any flows.  
In the Advanced message format, businesses can establish two-way communication with their end customers. Using the Advanced message format, you can associate an SMS Flow that can take the end customers through an automation journey, run dialog tasks, and connect to live agents if required.

## Edit an SMS Campaign

Editing an SMS campaign allows you to make changes to the campaign as per your needs.

Steps to edit an SMS campaign:

1. Click the Ellipsis (**︙**) icon beside the campaign name and click **Edit**.  
    <img src="../images/edit-button-sms.png" alt="Edit Button" title="Edit Button" style="border: 1px solid gray; zoom:80%;"/>

2. A pop-up window is displayed. Do the required changes and click **Save**.  
    <img src="../images/save-edited-campaign-sms.png" alt="Save Edited Campaign" title="Save Edited campaign" style="border: 1px solid gray; zoom:70%;">

## Clone an SMS Campaign

Cloning an SMS campaign creates a replica of the original campaign. This is useful when two or more similar campaigns are run simultaneously.

Steps to clone an SMS campaign:

1. Click the Ellipsis (**⋮**) icon beside the campaign name and click **Clone**.  
    <img src="../images/clone-button-sms.png" alt="Clone Button" title="Clone Button" style="border: 1px solid gray; zoom:80%;"/>

2. A cloned copy of the original campaign is created.  
    <img src="../images/cloned-campaign-sms.png" alt="Cloned Campaign" title="Cloned Campaign" style="border: 1px solid gray; zoom:80%;"/>

## Delete an SMS Campaign

You can delete an SMS campaign if it has served its purpose or is no longer required.

Steps to delete an SMS campaign:

1. Click the Ellipsis (**⋮**) icon beside the campaign name and click **Delete**.  
    <img src="../images/delete-button-sms.png" alt="Delete Campaign Button" title="Delete Campaign Button" style="border: 1px solid gray; zoom:80%;"/>

2. A confirmation pop-up window appears. Click **Delete**.  
    <img src="../images/delete-campaign-confirmation-sms.png" alt="Delete Campaign Confirmation" title="Delete Campaign Confirmation" style="border: 1px solid gray; zoom:60%;">  

## Run SMS Campaigns

Running an SMS campaign changes the campaign status to **Active** and sends the configured message to the numbers in the contact lists. Campaigns run based on their configured priority.

Steps to run an SMS Campaign:

1. Click the **Play** button and then click **Run**.  
    <img src="../images/run-button.png" alt="Run Button" title="Run Button" style="border: 1px solid gray; zoom:70%;">  

    When the campaign runs, you can pause or stop it. You can also rerun a completed campaign.

## Run as Emergency

The campaign runs immediately, overriding any schedule and calling hours. It uses the available SMS capacity and starts instantly, regardless of whether contacts are listed or API-integrated. This campaign processes first at full capacity, followed by other high-priority campaigns and schedules. After completion, the schedule changes to manual if it was previously scheduled.

Steps to run an Emergency SMS Campaign:

1. Click the **Play** button and then click **Run as Emergency**.  
    <img src="../images/run-as-emergency.png" alt="Run as Emergency" title="Run as Emergency" style="border: 1px solid gray; zoom:70%;">

2. A pop-up alert appears. Click **Confirm** to proceed.  
    <img src="../images/emergency-campaign-alert.png" alt="Emergency Campaign Confirmation" title="Emergency Campaign Confirmation" style="border: 1px solid gray; zoom:70%;">

3. A warning appears at the top, and a warning icon is displayed next to the campaign name.  
<img src="../images/emergency-campaign-run.png" alt="Warning Notification" title="Warning Notification" style="border: 1px solid gray; zoom:70%;">  

    An emergency campaign cannot be paused or resumed; it can only be stopped and rerun. Users can manually stop an active emergency campaign. If rerun, the campaign resumes and completes sending SMS.

    If the contact list is a **.csv file**, the emergency campaign ends after sending an SMS to all contacts. If the contact list is **API-integrated**, the user must manually stop the campaign.

    Only one emergency campaign can run per workspace or account. If a user clicks **Run as Emergency** for another campaign, the system checks for an ongoing emergency campaign and displays a warning if one is in progress.  
    <img src="../images/currently-active-campaign-alert.png" alt="Alert Notification" title="Alert Notification" style="border: 1px solid gray; zoom:70%;">  

    !!! Notes

        * A user cannot run or rerun an ongoing active campaign as an emergency. To do so, they must stop the ongoing campaign and rerun it as an emergency.
        * A non-emergency campaign, once paused, can only be resumed as a non-emergency campaign.
        * If an error occurs during the API pull of contacts, ongoing campaigns remain active and are not impacted.

## Stop an SMS Campaign

Stopping an SMS resets the data, the campaign status changes to **Stopped**, and a new instance of the campaign is created when you rerun the campaign.

Steps to stop an SMS campaign:

1. Click the **Stop** button under **Actions** for the campaign you want to stop.  
    <img src="../images/stop-button.png" alt="Stop Button" title="Stop Button" style="border: 1px solid gray; zoom:80%;"/>

2. A confirmation pop-up window appears. Click **Stop**.  
    <img src="../images/stop-campaign-confirmation-sms.png" alt="Stop Campaign Confirmation" title="Stop Campaign Confirmation" style="border: 1px solid gray; zoom:80%;"/>
