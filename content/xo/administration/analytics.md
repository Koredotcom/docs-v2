# Analytics for Admin

The Analytics module provides the history of all administrative tasks with attributes such as **User Name**, **User Email** **Date/Time**, and **Description** for an event. You can review the **Audit Report** page to analyze admin users, custom admins, and user events such as log on, log off, and changes to system settings.

The following illustration shows an example of the **Analytics** module with the **Audit Report** page displayed.

<img src="../images/analytics-img1.png" alt="Analytics - Audit Reports" title="Analytics - Audit Reports" style="border: 1px solid gray;zoom:70%;"/>

## Viewing System and User Events

On the **Audit Report** page in the Kore.ai Admin Console in the **Analytics** module, you can view the Kore.ai system and user-generated events. For example, a system-generated event could be a periodic Microsoft® Active Directory® Sync. An example of a user-generated event could be the addition of a new user.

Using the filters on the **Audit Report** page you can select event categories, events, and time periods to drill down and filter events as needed. Kore.ai audit reports also list error messages that can help you troubleshoot system issues or when you create a Kore.ai service request.

### Using the Search Field

The list of entries in an admin console table can be very large depending on the size of your company, for example, a list of users. To find one or more specific users or groups, in the **Search** field, enter at least three characters to begin find-as-you-type.

!!! Note

    The number of search terms in a search query is unlimited, however, no more than the first 20 characters of each search term is used to return search results.

To view all entries, clear the search field, and then press the **Enter** key.

### Filter Options

You can narrow the list of events by date range, user/app, category, and name.

**Date Filter** can be set to

* past 24 hours – default selection;
* past 7 days; or
* Custom range by selecting the start and end dates.

**Event Filter** can be set by clicking the Filters button and then setting:

* the **User Name/App Name** field to narrow the events triggered either by a specific user or by a specific app.
* the **Event Category** field to show **All** events or select a specific category from the drop-down list.
* Based on the **Event Category** field selected, you can choose **All** or a specific event by name in the **Event Name** filter.

<img src="../images/analytics-img2.png" alt="Event filter options" title="Event filter options" style="border: 1px solid gray;zoom:70%;"/>

### Export Options

* The **export** icon can be used to Export the audit reports in CSV format.

### Record Details

By clicking on any entry you get to view further details pertaining to below:

<img src="../images/analytics-img3.png" alt="Record details" title="Record details" style="border: 1px solid gray;zoom:70%;"/>

<img src="../images/analytics-img4.png" alt="Export search" title="Export search" style="border: 1px solid gray;zoom:70%;"/>


!!! Note

    The Audit Report contains system and user events for several Kore.ai products. To drill down further than Event Categories, use the Search for Description field, which lets you add one more criterion to the filter. To get XO Platform data, search for App Builder" exactly; the Search field is case-sensitive. For more complex filtering, we recommend exporting the report and using a spreadsheet editor.

### Audit Report Details

The audit report is categorized by event category and event name. The following table lists these categories and a brief description as to what even qualifies against each category.

<table border="1">
  <tr>
   <td><strong>EVENT TYPE</strong>
   </td>
   <td><strong>EVENT DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>User Created
   </td>
   <td>When a user account is created.
   </td>
  </tr>
  <tr>
   <td>User Modified
   </td>
   <td>When a user profile is updated.
   </td>
  </tr>
  <tr>
   <td>User Deleted
   </td>
   <td>When a user account is deleted.
   </td>
  </tr>
  <tr>
   <td>Group Created
   </td>
   <td>When a group is created.
   </td>
  </tr>
  <tr>
   <td>Group Updated
   </td>
   <td>When a group is updated.
   </td>
  </tr>
  <tr>
   <td>Group Deleted
   </td>
   <td>When a group is deleted.
   </td>
  </tr>
  <tr>
   <td>Users Added to Group
   </td>
   <td>When users are added to a group.
   </td>
  </tr>
  <tr>
   <td>Groups Added to Group
   </td>
   <td>When groups are added to a group.
   </td>
  </tr>
  <tr>
   <td>Users Removed from Group
   </td>
   <td>When users are removed from a group.
   </td>
  </tr>
  <tr>
   <td>Groups Removed from Group
   </td>
   <td>When groups are removed from a group.
   </td>
  </tr>
  <tr>
   <td>Admin Role Assigned to Users
   </td>
   <td>When a user is assigned an admin role.
   </td>
  </tr>
  <tr>
   <td>Admin Role Deleted for Users
   </td>
   <td>When a user is unassigned from an admin role.
   </td>
  </tr>
  <tr>
   <td>Bot Role Assigned to Users
   </td>
   <td>When a bot role is assigned to users.
   </td>
  </tr>
  <tr>
   <td>Bot Role Deleted for Users
   </td>
   <td>When a bot role is deleted for a user.
   </td>
  </tr>
  <tr>
   <td>Role Created
   </td>
   <td>When the custom admin role, and/or bot role is created.
   </td>
  </tr>
  <tr>
   <td>Role Updated
   </td>
   <td>When custom admin role, and/or bot role details are updated.
   </td>
  </tr>
  <tr>
   <td>Role Permissions Updated
   </td>
   <td>When master and/or custom admin role, and/or bot role permissions are updated.
   </td>
  </tr>
  <tr>
   <td>Role Deleted
   </td>
   <td>When the custom admin role, and/or bot role is deleted.
   </td>
  </tr>
  <tr>
   <td>Role Assigned to Groups
   </td>
   <td>When a master and/or custom admin role, and/or bot role are assigned to groups.
   </td>
  </tr>
  <tr>
   <td>Role Assigned to Users
   </td>
   <td>When a master and/or custom admin role, and/or bot role are assigned to groups.
   </td>
  </tr>
  <tr>
   <td>Role Deleted for Users
   </td>
   <td>When master and/or custom admin role, and/or bot role are deleted for Users
   </td>
  </tr>
  <tr>
   <td>Role Deleted for Groups
   </td>
   <td>When master and/or custom admin role, and/or bot role are deleted for groups
   </td>
  </tr>
  <tr>
   <td>Kore Connector Modified
   </td>
   <td>When connector details are modified.
   </td>
  </tr>
  <tr>
   <td>Kore Connector Status
   </td>
   <td>When connector status changes.
   </td>
  </tr>
  <tr>
   <td>Kore Connector Deleted
   </td>
   <td>When a connector is deleted.
   </td>
  </tr>
  <tr>
   <td>Kore Connector Certificate
   </td>
   <td>When a connector certificate is generated.
   </td>
  </tr>
  <tr>
   <td>App Created
   </td>
   <td>When an app is created.
   </td>
  </tr>
  <tr>
   <td>App Modified
   </td>
   <td>When the client secret for the app is reset.
   </td>
  </tr>
  <tr>
   <td>App Deleted
   </td>
   <td>When an app is deleted.
   </td>
  </tr>
  <tr>
   <td>App Scopes Assigned
   </td>
   <td>When app scopes are assigned.
   </td>
  </tr>
  <tr>
   <td>App Scopes Modified
   </td>
   <td>When app scopes are modified.
   </td>
  </tr>
  <tr>
   <td>App Scopes Deleted
   </td>
   <td>When app scopes are deleted.
   </td>
  </tr>
  <tr>
   <td>Settings Modified
   </td>
   <td>When context persistence settings are modified.
   </td>
  </tr>
  <tr>
   <td>Bot Deployment Approved
   </td>
   <td>When a bot deployment request is approved.
   </td>
  </tr>
  <tr>
   <td>Bot Deployment Rejected
   </td>
   <td>When a bot deployment request is rejected.
   </td>
  </tr>
  <tr>
   <td>Bot Deployment Settings
   </td>
   <td>When settings for Deployment Requests and/or Enterprise Bot Assignments are modified.
   </td>
  </tr>
  <tr>
   <td>Bot Task Suspended
   </td>
   <td>When a task is suspended.
   </td>
  </tr>
  <tr>
   <td>Bot Task Activated
   </td>
   <td>When a task is activated.
   </td>
  </tr>
  <tr>
   <td>Bot Owner
   </td>
   <td>When the bot owner changes for the bot.
   </td>
  </tr>
  <tr>
   <td>Bot Auto Approve
   </td>
   <td>When auto approve settings have changed.
   </td>
  </tr>
  <tr>
   <td>Bot Channels Modified
   </td>
   <td>When a channel is enabled or disabled for the bot.
   </td>
  </tr>
  <tr>
   <td>Bot Task Assignment
   </td>
   <td>When tasks are assigned or unassigned for users/groups or when task assignment settings change.
   </td>
  </tr>
  <tr>
   <td>User Enrollment Preferences
   </td>
   <td>When the self signup setting for enterprise users changes.
   </td>
  </tr>
  <tr>
   <td>Accept Enrollment Request
   </td>
   <td>When an enrollment request is accepted.
   </td>
  </tr>
  <tr>
   <td>Reject Enrollment Request
   </td>
   <td>When an enrollment request is rejected.
   </td>
  </tr>
  <tr>
   <td>Kill Session
   </td>
   <td>When a session is killed. Includes details of both the user whose session was killed and the user who killed the session.
   </td>
  </tr>
  <tr>
   <td>Access Chat History
   </td>
   <td>When a chat history by a user is viewed. Also captured is the conversation session id.
   </td>
  </tr>
  <tr>
   <td>Download Chat History
   </td>
   <td>When a chat history by a user is downloaded. Also captured is the conversation session id.
   </td>
  </tr>
</table>

## Viewing Chat History

You can view Chat History for all deployed bots from the **Analytics > Bot Chat History** section of the Kore.ai Admin Console.

<img src="../images/analytics-img5.png" alt="Analytics - Bot Chat History" title="Analytics - Bot Chat History" style="border: 1px solid gray;zoom:70%;"/>

Click a specific chat to display the chat conversation or history. You can jump to the specific user’s previous and next conversation sessions if available.

### Bot Chat History Page Columns

To sort the list of column values, click the **Arrow Up** <img src="../images/analytics-img6.png">icon or **Arrow Down** <img src="../images/analytics-img7.png">icon to the right of a column name.

The following list describes the columns displayed in the admin console table.

<table border="1">
  <tr>
   <td><strong>COLUMN</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Bot Name
   </td>
   <td>Name of the Bot in chat.
   </td>
  </tr>
  <tr>
   <td>Timestamp
   </td>
   <td>The date and time of the chat in YYY-MM-DD HH:MM AM/PM, for example, 2015-09-11 02:10 PM. It is displayed in the selected Time Zone.
   </td>
  </tr>
  <tr>
   <td>Channel
   </td>
   <td>Channel on which the Chat occurred.
   </td>
  </tr>
  <tr>
   <td>Language
   </td>
   <td>Language of the Chat.
   </td>
  </tr>
  <tr>
   <td>User
   </td>
   <td>The user name and id who initiated the chat can be either one of the following:
<ul>

<li>Platform (Kore.ai) generated user id assigned to every unique visitor who has interacted with the bot.

<li>Unique user identities as provided by the respective channels enabled for a bot.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Export
   </td>
   <td>Option to Export the individual Chat in Excel or PDF format.
   </td>
  </tr>
</table>

### About the Action Bar

This section describes the controls on the **Action** bar on the **Chat History** page.

##### Using the Time Zone Field

The time against the chat history would be displayed in the **Time Zone** selected. By default, it is set to _Local_. You can change it using the **Change** link and then selecting the appropriate zone.

##### Using the Search Field

The list of entries in an admin console table can be very large depending on the size of your company, for example, a list of users. To find one or more specific users or groups, enter at least three characters in the Search field to begin find-as-you-type.

!!! Note

    The number of search terms in a search query is unlimited, however, no more than the first 20 characters of each search term is used to return search results.

To view all entries, clear the search field, and then press the **Enter** key.


##### Select Timestamp

Set the duration for which the Chat History needs to be retrieved:

* 7 Days.
* 24 hours – default setting.
* Custom – Select the start and end dates.

##### Export

You can use the export icon next to the Filters option to export the Chat History (Sessions) results in the CSV format.


##### Filters

Filter based on:

* the **Bot** you want to track; you can select multiple bots.
* the **User** initiating the Chat – can be _Kore generated user id_ or _channel assigned user id_. This option is available only if a single bot is selected from the previous selection.
* **conversation types** can be either one or both of the following:
    * _interactive sessions_ – conversations that include one or more messages from the user.
    * _non-interactive sessions_ – conversations that do not include any message from the user.

* **Channel** of interaction
* **Language** of interaction

**Meta tags** added at a message, user, or session levels. Multiple tag filters can be applied in a _‘AND’_ condition. This option is available only when at least one bot is selected.

The export file of Chat History (session-level) will include the details of the applicable tags.

<img src="../images/analytics-img8.png" alt="Export file of Chat History" title="Export file of Chat History" style="border: 1px solid gray;zoom:70%;"/>


### Chat History Details

Chat History provides visibility into the user information with the inclusion of the following functionality:

* **User Profile**: Provides a 360-degree view of the user along with their usage metrics;
* **User Conversation Sessions**: Lists out all the sessions of the user in the given period with the selected utterance section expanded.
* **Trace ID**: A unique ID assigned to each incoming message. The Id is also included in all the logs maintained by the Platform. To see the associated Trace ID for an incoming message, hover over the message, click the Info icon, and then click the Message Id to view the Trace ID. 

<img src="../images/analytics-img9.png" alt="Chat History details" title="Chat History details" style="border: 1px solid gray;zoom:70%;"/>

!!! Note

    The Trace ID is retained in the logs for 30 days. Once the Trace ID is expired, you see a tooltip message as 
        
    ‘`Trace Id: Trace records for this message are not available`‘.

Click on any chat history to see these options. Following are the user information details provided:


<table border="1">
  <tr>
   <td><strong>FUNCTIONALITY</strong>
   </td>
   <td><strong>ATTRIBUTE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="14" >User Profile
   </td>
   <td>Kore User ID
   </td>
   <td>User id assigned by the platform.
   </td>
  </tr>
  <tr>
   <td>Channel Data
   </td>
   <td>Data received from the channel i.e. the information that is available in User Context.
   </td>
  </tr>
  <tr>
   <td>User Meta Tags
   </td>
   <td>The total number of meta tags associated with the user and key-value pairs for the most recent ones.
   </td>
  </tr>
  <tr>
   <td>Latest Interaction
   </td>
   <td>Last time the user interacted with the bot.
   </td>
  </tr>
  <tr>
   <td>Total Conversation Sessions
   </td>
   <td>The total number of interactive and non-interactive sessions registered by the user from the beginning of time.
   </td>
  </tr>
  <tr>
   <td>Total Conversation Sessions in Last 30 Days
   </td>
   <td>The total number of interactive and non-interactive sessions registered by the user in the last 30 days.
   </td>
  </tr>
  <tr>
   <td colspan="2" >*The next few attributes will not be displayed if there is no interaction by the user in the last 30 days
   </td>
  </tr>
  <tr>
   <td>Last 30 Days’ Intent Detection Rate
   </td>
   <td>(Total identified intents / (Total identified intents + unidentified utterances)) * 100 for the utterances over the last 30 days.
   </td>
  </tr>
  <tr>
   <td>Intents Requested
   </td>
   <td>Total identified intents + unidentified utterances.
   </td>
  </tr>
  <tr>
   <td>Intents Identified
   </td>
   <td>Total intents identified.
   </td>
  </tr>
  <tr>
   <td>Last 30 Days Goal Completion Rate
   </td>
   <td>(Total success tasks / (Total success tasks + total failed tasks) ) * 100 for the tasks over the last 30 days.
   </td>
  </tr>
  <tr>
   <td>Tasks Initiated
   </td>
   <td>Total success tasks + total failed tasks.
   </td>
  </tr>
  <tr>
   <td>Tasks Completed
   </td>
   <td>Tasks successfully completed.
   </td>
  </tr>
  <tr>
   <td>Recent Conversation Flows
   </td>
   <td>Top 10 popular conversation flows executed by the user in the last 30 days. Popular flows are determined by the number of instances that the flow was executed.
   </td>
  </tr>
  <tr>
   <td rowspan="16" >User Conversation Sessions
   </td>
   <td colspan="2" ><strong>Session Attributes</strong>
   </td>
  </tr>
  <tr>
   <td>Session Start
   </td>
   <td>Session start date and time.
   </td>
  </tr>
  <tr>
   <td>Session End
   </td>
   <td>Session end date and time.
   </td>
  </tr>
  <tr>
   <td>Channel
   </td>
   <td>Channel in which the session was initiated.
   </td>
  </tr>
  <tr>
   <td>Agent Transfer Tag
   </td>
   <td>The session where the user was transferred to an agent. Sessions should be considered even if the user returns to the bot.
   </td>
  </tr>
  <tr>
   <td>Drop Off Tag
   </td>
   <td>The session where the user dropped off.
   </td>
  </tr>
  <tr>
   <td>Total Success Tasks
   </td>
   <td>Count of tasks successfully completed in the session.
   </td>
  </tr>
  <tr>
   <td>Total Failed Tasks
   </td>
   <td>Count of tasks failed in the session.
   </td>
  </tr>
  <tr>
   <td>Intents Identified
   </td>
   <td>Count of intents successfully identified in the session.
   </td>
  </tr>
  <tr>
   <td>Intents Not Identified
   </td>
   <td>Count of intents unidentified in the session and list of unidentified intents.
   </td>
  </tr>
  <tr>
   <td>Conversation Path
   </td>
   <td>The series of tasks initiated by the user in the session.
   </td>
  </tr>
  <tr>
   <td>Session Meta Tags
   </td>
   <td>Count of the session meta tags used with the details of the most recent custom meta tags displayed.
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Conversation Transcript</strong>
   </td>
  </tr>
  <tr>
   <td>Message Meta Tags
   </td>
   <td>The chat transcript is annotated with message tags for messages with meta-tags associated with them.
   </td>
  </tr>
  <tr>
   <td>Agent Transfer
   </td>
   <td>Indicates the point of agent transfer at the last message prior to transfer.
   </td>
  </tr>
  <tr>
   <td>Drop Off
   </td>
   <td>Indicates the point of drop off at the last message prior to dropping off.
   </td>
  </tr>
</table>