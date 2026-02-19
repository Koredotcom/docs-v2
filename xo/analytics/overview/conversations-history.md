# Conversations History

The **Conversation History** dashboard allows you to review the transcripts of past conversations and label certain conversations for follow-up or further action.

The **Advanced Conversation Analytics** feature provides a more detailed view of the conversation, including events and custom tags, which can help you better understand the interaction between the customer and the AI Agents. Custom Tags can be reused across conversations for training purposes and for identifying areas where the AI Agents could improve.

**To view the Conversations History dashboard, follow the steps**: 

1.  Click **Analytics** on the left navigation pane. The Analytics panel is displayed with the list of reports.

    <img src="../images/navigating-to-conversations-history-dashboard.png" alt="Navigating to Conversations History Dashboard" title="Navigating to Conversations History Dashboard" style="border: 1px solid gray; zoom:80%;"/>

2. Click the **Conversations History dashboard** under the **Overview** section of the **Analytics** panel. The **Conversations History dashboard** is displayed on the right side of the page.
3. Select appropriate filters on the dashboard and click **Apply**.


## Filter Views Page

The **Filter Views** page is the preface or landing page displayed when you click the **Conversations History** left menu item. You can create and view prebuilt and custom filters, filter configurations, and descriptions on this page in addition to the following:

* View the available conversation filters and their configurations.
* Create a custom filter to view only the required data.
* Access the **Conversations History Dashboard** for the selected preset.

<img src="../images/filters-view-page.png" alt="Filters View Page" title="Filters View Page" style="border: 1px solid gray; zoom:80%;"/>

### Prebuilt Filters for Conversations History

As an analyst, you may need a customized view of the conversation’s history data based on specific conditional filters. This helps analyze conversations based on priority/criticality.

The Platform now supports **Prebuilt Filters** or **Presets** for the most common use-case scenarios. Presets reduce the developer’s efforts in skimming through each conversation to understand and tag them for a specific use case.

**How it works**

1. The system checks the configuration parameters and the filter conditions for a conversation session.
2. The conversation session is mapped to the respective filter automatically.
3. Based on the date range selected on the **Conversations History** Dashboard, the system fetches and displays the conversations that meet the Prebuilt Filters’ criteria.


### Types of Prebuilt Filters

The following table displays each preset’s filter name, predefined configuration parameters, and description. For more information on the configuration parameters, please click here.


<table>
  <tr>
   <td>Filter Name
   </td>
   <td>Configuration
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td><strong>All Conversations</strong> (default)
   </td>
   <td>
<ul>

<li><strong>Conversation Status</strong>: CLOSED

<li><strong>Containment Type</strong>: SELF-SERVICE

<li><strong>Is Developer</strong>: INCLUDE

<li><strong>Session Type</strong>: INTERACTIVE
</li>
</ul>
   </td>
   <td>Shows all the conversations made during the specified dates irrespective of the filter criteria selected on the dashboard.
<br>
<strong>Note</strong>: The user cannot edit the “<em>All Conversations</em>” view.
   </td>
  </tr>
  <tr>
   <td><strong>Conversations with Multiple Intent Identification Failures</strong>
   </td>
   <td>
<ul>

<li><strong>Conversation Status</strong>: CLOSED

<li><strong>Containment Type</strong>: SELF-SERVICE

<li><strong>isDeveloper</strong>: EXCLUDE

<li><strong>Session Type</strong>: INTERACTIVE

<li><strong>Events</strong>: Greater than equals to 2 intent identification failures.
</li>
</ul>
   </td>
   <td>Shows all the conversations with intents unidentified in a given date range.
   </td>
  </tr>
  <tr>
   <td><strong>Conversations with Multiple Entity Retries</strong>
   </td>
   <td>
<ul>

<li><strong>Conversation Status</strong>: CLOSED

<li><strong>Containment Type</strong>: SELF-SERVICE

<li><strong>isDeveloper</strong>: EXCLUDE

<li><strong>Session Type</strong>: INTERACTIVE

<li><strong>Events</strong>: Greater than equals to 2 entity retries.
</li>
</ul>
   </td>
   <td>Shows all the conversations with entity retries in a given date range.
   </td>
  </tr>
  <tr>
   <td><strong>Conversations with Multiple Confirmation Retries</strong>
   </td>
   <td>
<ul>

<li><strong>Conversation Status</strong>: CLOSED

<li><strong>Containment Type</strong>: SELF-SERVICE

<li><strong>isDeveloper</strong>: EXCLUDE

<li><strong>Session Type</strong>: INTERACTIVE

<li><strong>Events</strong>: Greater than equals to 2 confirmation retries.
</li>
</ul>
   </td>
   <td>Shows all the conversations with confirmation retries in a given date range.
   </td>
  </tr>
  <tr>
   <td><strong>Short Conversations resulting in User-Drop off</strong>
   </td>
   <td>
<ul>

<li><strong>Conversation Status</strong>: CLOSED

<li><strong>Containment Type</strong>: USER DROP-OFF

<li><strong>isDeveloper</strong>: EXCLUDE

<li><strong>Session Type</strong>: INTERACTIVE

<li><strong>Events</strong>: Greater than or equals to 2 confirmation retries.

<li><strong>Conversation Duration</strong>: Less than 30.
</li>
</ul>
   </td>
   <td>Shows all the conversations where users got dropped off and conversations that are less than 30 seconds.
   </td>
  </tr>
</table>

### Feedback Prebuilt Filter

The Platform supports the **Feedback** filter on the **Filter Views** panel to create custom feedback filters. Based on the filter criteria, the system groups and displays the conversations for the following parameters:

* **Feedback Survey Template Type**: Indicates if the selected type is **_NPS_**, **_CSAT_**, or **_Thumbs-up / Thumbs-down_**. Learn more.
* **Operator**: The conditional/logical operator that applies to the Feedback filter evaluation which includes one of the following:
    * Equals to
    * Less than or equals to
    * Greater than equals to
    * Greater than
    * Less than
* **Value**: The feedback survey score used for the conditional logic evaluation.

!!! note

    The conversations with different survey types can be grouped using the `OR` operator to satisfy multiple conditions.

### View Prebuilt Filters

To view the prebuilt filters, follow the steps:

1. On the **Conversations History** dashboard page, the prebuilt filters are categorized and listed under the **Filter Views** section.

    <img src="../images/view-prebuilt-filters-1.png" alt="View Prebuilt Filters-1" title="View Prebuilt Filters" style="border: 1px solid gray; zoom:80%;"/>

2. Click the **Read More** link corresponding to the name of the filter type to see the configuration details of each conversation filter type. 

    <img src="../images/view-prebuilt-filters-2.png" alt="View Prebuilt Filters-2" title="View Prebuilt Filters-1" style="border: 1px solid gray; zoom:80%;"/>

3. Click any prebuilt filter name to access the **Conversations History** panel where relevant data is displayed.

    <img src="../images/view-prebuilt-filters-3.png" alt="View Prebuilt Filters-3" title="View Prebuilt Filters-2" style="border: 1px solid gray; zoom:80%;"/>


### Create a Custom Conversation Filter

A **Conversation Filter** helps group and display selective conversation history data based on a specific criterion on the dashboard. 

**To add a custom filter, follow these steps**:

1. On the **Conversations History** page, click **+ Create Filter**.

    <img src="../images/create-conversation-filter-1.png" alt="Create Conversation Filter-1" title="Create Conversation Filter-1" style="border: 1px solid gray; zoom:80%;"/>


2. On the **Create Conversation Filter** panel, provide inputs for the following fields:

<table>
  <tr>
   <td>
    lD
   </td>
   <td>
    Configuration
   </td>
   <td>
    Description
   </td>
  </tr>
  <tr>
   <td>
    <strong>View Name</strong>
   </td>
   <td>
    N/A
   </td>
   <td>
    Enter the name of the filter that will be displayed on the dashboard.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Description</strong>
   </td>
   <td>
    N/A
   </td>
   <td>
    Enter the description for the filter that will be displayed on the dashboard.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Conversation Status</strong>
   </td>
   <td>
    The available options include:
<ol>
<li>All</li>
<li>Active</li>
<li>Closed</li></ol>
   </td>
   <td>
    Select <strong><em>All</em></strong> to view all conversations, <strong><em>Active</em></strong> to view ongoing conversations, and <strong><em>Closed</em></strong> to view conversations that have ended.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Containment Type</strong>
   </td>
   <td>
    The available options include:
<ol>

<li>Self-service</li>

<li>User Drop-off</li>

<li>Agent Transfer</li></ol>
   </td>
   <td>
    Select one of the following:
<ol>

<li><strong><em>Self-service</em></strong> to view only customer self-service conversations

<li><strong><em>User Drop-off</em></strong> to view only conversations where the user dropped off.

<li><strong><em>Agent Transfer</em></strong> to filter conversations with the agent transfer flow.
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td>
    <strong>Channels</strong>
   </td>
   <td>
    The available selection options include:
<ol>

<li>All Channels</li>

<li>Web/Mobile Client</li>

<li>Webhook</li>

<li>Other configured channels.</li>
</ol>
   </td>
   <td>
    Filters conversations using the enabled channels.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Languages</strong>
   </td>
   <td>
    The available selection options include:
<ol>

<li>All Languages

<li>English (default)

<li>Other configured languages
</li>
</ol>
   </td>
   <td>
    Filters conversations using the enabled languages.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Session Type</strong>
   </td>
   <td>
    The available selection options include:
<ol>

<li>All</li>

<li>Interactive</li>

<li>Non-interactive</li>
</ol>
   </td>
   <td>
    Filters conversations for conversations across all channels, only interactive channels, or only non-interactive channels based on the selected option.
   </td>
  </tr>
  <tr>
   <td>
    <strong>User ID</strong>
   </td>
   <td>
    The available selection options include:
<ol>

<li>Include</li>

<li>Exclude</li>
</ol>
   </td>
   <td>
    Filters conversations using the Platform user identities based on the inclusion or exclusion list.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Channel ID / Kore ID selection</strong>
   </td>
   <td>
    Toggle between the options.
   </td>
   <td>
    Filters conversations using either the <strong><em>Channel ID</em></strong> or <strong><em>Kore ID</em></strong>.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Task / Intent</strong>
   </td>
   <td>
    Select either all intents or specific configured intents.
   </td>
   <td>
    Filters conversations using all intents/tasks or specific tasks/intents identified during the conversation sessions.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Developer Interactions (IsDeveloper)</strong>
   </td>
   <td>
    The available selection options include:
<ol>

<li>Include

<li>Exclude
</li>
</ol>
   </td>
   <td>
    Filters conversations by including or excluding developer interactions based on the selected condition.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Time Zone</strong>
   </td>
   <td>
    Select from different global time zones.
   </td>
   <td>
    Filters conversations based on the time zone of the conversation session.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Conversation Duration</strong>
   </td>
   <td>
    The <strong>Conditional Filter</strong> options include:
<ol>

<li>Less than</li>

<li>Less than Equals to</li>

<li>Greater than</li>

<li>Greater than equals to</li>

<li>Equals to</li></ol>
<br>

    The <strong>Time units</strong> options include:
<ol>

<li>Seconds</li>

<li>Minutes</li>
</ol>
</li>
</ol>
   </td>
   <td>
    Filters conversations based on the conditional filters set for the conversation session duration in seconds/minutes.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Events</strong>
   </td>
   <td>
    The <strong>Conditional Filter</strong> options include:
<ol>

<li>Less than

<li>Less than Equals to

<li>Greater than

<li>Greater than equals to

<li>Equals to
<br>

    The <strong>Event Name</strong> options include:
<ol>

<li>Intent Identified

<li>Intent not Identified

<li>Success Task

<li>Fail Task

<li>Sentiment Event

<li>User Sentiment Type

<li>Entity Retry

<li>Confirmation Retry

<li>On Connect

<li>End of Conversation

<li>Debug Log

<li>Welcome

<li>Welcome Telegram

<li>Welcome Facebook

<li>Welcome Telephone

<li>Standard Response Interruption

<li>Message Node Interruption

<li>Optional Entity

<li>Script Node Failure

<li>Service Node Failure

<li>Agent Transfer
</li>
</ol>
</li>
</ol>
   </td>
   <td>
    Filters conversations based on the conditional filters set for the conversation session duration and the selected event.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Feedback</strong>
   </td>
   <td>
    The <strong>Feedback Type</strong> options include:
<ol>

<li>NPS

<li>CSAT

<li>Thumbs-up/Down
<br>

The <strong>Conditional Filter</strong> options include
<ol>

<li>Less than</li>

<li>Less than Equals to</li>

<li>Greater than</li>

<li>Greater than equals to</li>

<li>Equals to</li></ol>
<br>

    The options for <strong>Score</strong> include:
<ol>

<li><strong>NPS</strong>: Select a value between 0 and 10.

<li><strong>CSAT</strong>: Select a value between 0 and 5.

<li><strong>Thumbs-up/Down</strong>: Select either 0 or 1.
</li>
</ol>
</li>
</ol>
</li>
</ol>
   </td>
   <td>
    Filters conversations based on the feedback type, conditional filter, and feedback score selection.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Labels</strong>
   </td>
   <td>
    Select either all conversation labels or a specific configured label.
   </td>
   <td>
    Filters conversations based on the selected label(s).
   </td>
  </tr>
  <tr>
   <td>
    <strong>Custom Tags</strong>
   </td>
   <td>
    Select the <strong>key</strong> and type the <strong>value</strong> for the key to define the custom tag selection. You can combine multiple key-value pairs to define the custom tag selection.
   </td>
   <td>
    Filters conversations using custom tags added to the conversation for a <strong>key-value pair</strong> and the <strong><em>AND</em></strong> logical operator.
   </td>
  </tr>
</table>

<ol start="3"><li>Click <b>Save</b>.</li></ol>

<img src="../images/create-conversation-filter-2.png" alt="Create Conversation Filter-2" title="Create Conversation Filter-2" style="border: 1px solid gray; zoom:80%;"/>

The new custom filter is listed on the Filter Views page. The conversations are grouped and displayed Conversations History Dashboard based on the inputs provided on the Filter Views page.

**Edit a Conversation Filter**

You can edit one or more fields for an existing conversation filter. 

**To edit a conversation filter, follow the steps**:

 1. Click the custom filter on the **Filter Views** page.
 2. Click the **More Filters** dropdown list on the **Conversations History** panel.

    <img src="../images/edit-a-conversation-filter-1.png" alt="Edit a Conversation Filter 1" title="Edit a Conversation Filter 1" style="border: 1px solid gray; zoom:80%;"/>


 3. Modify the required fields on the **Edit Conversation Filter** window.
4. Click **Apply**.

    <img src="../images/edit-a-conversation-filter-2.png" alt="Edit a Conversation Filter 2" title="Edit a Conversation Filter 2" style="border: 1px solid gray; zoom:80%;"/> 


## Filter Criteria

You can customize the **Conversations History** data view by selecting the Filter Criteria on the dashboard. Please click to view the available filters.


## Conversations History Dashboard

The **Conversations History** Dashboard displays the following information for each conversation session that meets the defined filter condition(s) for the selected date range.

**Containment Type**

The following containment types affect the conversation flow and are displayed on top of the individual Conversations History details panel:


* **Self-service**: Indicates that the conversation (initiated by the user) with an AI Agent was successfully completed.
* **Agent Transfer**: Indicates that the conversation was transferred to a live agent using the Agent Transfer node in the Dialog Flow.
* **User Drop-off**: Indicates that the user stopped participating in the conversation before it was completed, either due to an error in the flow or some other reason.

    <img src="../images/containment-type.png" alt="Containment Type" title="Containment Type" style="border: 1px solid gray; zoom:80%;"/>


**Label**

A **custom label** helps identify conversations that require follow-up or indicate an action item for an analyst during the review.

<img src="../images/custom-label.png" alt="Custom Label" title="Custom Label" style="border: 1px solid gray; zoom:80%;"/>

**Add a Custom Label**

To add a custom label in addition to the default label for a conversation, follow the steps below:

1. Click the **+ Label** button on the **Conversations History** panel for the required conversation session.

    <img src="../images/add-a-custom-label-1.png" alt="Add a Custom Label-1" title="Add a Custom Label-1" style="border: 1px solid gray; zoom:80%;"/>

2. In the **Labels** window, scroll down and click **+ Add**.
3. Enter the **label name**, and click the **confirm** icon.

    !!! note

        You can select a different label color by clicking the color icon and using the color palette.

    <img src="../images/add-a-custom-label-2.png" alt="Add a Custom Label-2" title="Add a Custom Label-2" style="border: 1px solid gray; zoom:80%;"/>
4. Click **Save**.


**Manage a Custom Label**

**Edit**

You can edit or delete an existing custom label while adding a new label.

**To edit a label, follow the steps**:

 * Click the **+ Label** button on the **Conversations History** panel for the required conversation session.
* In the **Labels** window, click the **edit** icon for the label you want to modify.
* Make the changes and click the **confirm** icon.
* Click **Save**.

**Delete**

**To delete a label, follow the steps**:

* Click the **+ Label** button on the **Conversations History** panel for the required conversation session.
* In the **Labels** window, click the **delete** icon for the label you want to remove.
* Click **Save**.

**Other Conversation Parameters**

The **Channel, Language, Date**, and **conversation duration** are displayed at the top of the Conversation History analytics panel.

<img src="../images/other-conversation-parameters.png" alt="Other Conversation Parameters" title="Other Conversation Parameters" style="border: 1px solid gray; zoom:80%;"/>

### Conversation Summary

* **User Messages**: The number of messages sent by the user to the AI Agents.
* ** Messages**: The number of messages sent by the AI Agents to the user.
* **Intents Identified**: The number of user intents identified by the AI Agents during the conversation.
* **Intent Unidentified**: The number of utterances that did not result in any intent identification during the conversation.
* **Tasks Completed**: The number of tasks successfully completed by the AI Agents.
* **Failed Tasks**: The number of tasks that failed during the conversation.

<img src="../images/conversation-summary.png" alt="Conversation Summary" title="Conversation Summary" style="border: 1px solid gray; zoom:80%;"/>


### Conversation Events

**Conversation Events** indicate the sequence of occurrences during a conversation triggered by customer inputs and responses while interacting with a AI Agent. Each event can be categorized into regular and error-based occurrences. When analyzing a conversation flow, the user can identify the event type based on the following icons that are displayed for the relevant event.

<img src="../images/conversation-events.png" alt="Conversation Events" title="Conversation Events" style="border: 1px solid gray; zoom:80%;"/>

The list of events triggered during a conversation is displayed below.

**Intent Found**: Triggered when the AI Agents understands the user’s intent. The intent name identified is displayed.


<table>
  <tr>
   <td><strong>EVENT</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Intent Not Found</strong>
   </td>
   <td>Triggered when the AI Agents is unable to understand the user’s intent.
   </td>
  </tr>
  <tr>
   <td><strong>Agent Transfer</strong>
   </td>
   <td>Triggered when a live agent transfer is initiated during the conversation.
   </td>
  </tr>
  <tr>
   <td><strong>Entity Retry</strong>
   </td>
   <td>Triggered when the input provided by the user is not identified by the AI Agents and an input retry request to the customer.
   </td>
  </tr>
  <tr>
   <td><strong>Confirmation Retry</strong>
   </td>
   <td>Triggered when a confirmation request for a query or selection is generated from the AI Agents to the customer.
   </td>
  </tr>
  <tr>
   <td><strong>On Connect</strong>
   </td>
   <td>Triggered every time a customer invokes Web/Mobile SDK (a conversation is initiated on the channel).
   </td>
  </tr>
  <tr>
   <td><strong>Sentiment Event</strong>
   </td>
   <td>Triggered when a customer’s sentiment is identified during the conversation. The user sentiment type identified is displayed.
   </td>
  </tr>
  <tr>
   <td><strong>Welcome</strong>
   </td>
   <td>Triggered on receiving a message from the user when channel specific event is not configured.
   </td>
  </tr>
  <tr>
   <td><strong>Welcome Event Telegram</strong>
   </td>
   <td>Triggered on receiving a welcome event from Telegram.
   </td>
  </tr>
  <tr>
   <td><strong>Welcome Event Facebook</strong>
   </td>
   <td>Triggered on receiving a welcome event from Facebook Messenger.
   </td>
  </tr>
  <tr>
   <td><strong>Welcome Event Telephone</strong>
   </td>
   <td>Triggered on receiving a Telephone Call from any voice channel.
   </td>
  </tr>
  <tr>
   <td><strong>End</strong>
   </td>
   <td>Triggered on the closing of a conversation.
   </td>
  </tr>
  <tr>
   <td><strong>Debug Log</strong>
   </td>
   <td>Triggered when a debug log script runs for a script failure or service failure event.
   </td>
  </tr>
  <tr>
   <td><strong>Script Failure</strong>
   </td>
   <td>Triggered when a Script node failure occurs.
   </td>
  </tr>
  <tr>
   <td><strong>Service Failure</strong>
   </td>
   <td>Triggered when a service node failure occurs.
   </td>
  </tr>
  <tr>
   <td><strong>RCS Opt In</strong>
   </td>
   <td>Triggered on receiving Opt-In from the user for Rich Communication Services.
   </td>
  </tr>
  <tr>
   <td><strong>RCS Opt Out</strong>
   </td>
   <td>Triggered on receiving Opt-out from the user for Rich Communication Services.
   </td>
  </tr>
  <tr>
   <td><strong>User Message</strong>
   </td>
   <td>Triggered when a customer sends a message to the AI Agents on the channel.
   </td>
  </tr>
</table>

### Enriched Chat Transcript

The **Enriched Chat Transcript** feature provides a more detailed view of the conversation, with all the events associated with each message displayed in the chat transcript slider. This can be useful for understanding the conversation at a granular level and identifying any issues that may have arisen. It can also help train the AI Agents and improve its performance.

To view the Enriched Chat Transcript, enable the **Show Events** option (default setting) in the **Chat History** panel.

!!! note

    Disabling the Show Events option will display only the chat transcript without the events.


<img src="../images/enriched-chat-transcript-1.png" alt="Enriched Chat Transcript 1" title="Enriched Chat Transcript 1" style="border: 1px solid gray; zoom:80%;"/>


The **Event** labels that appear under **Conversation Events** are displayed against each chat text in the chat transcript slider. Click here to learn more about Conversational Events.

<img src="../images/enriched-chat-transcript-2.png" alt="Enriched Chat Transcript 2" title="Enriched Chat Transcript 2" style="border: 1px solid gray; zoom:80%;"/>


<img src="../images/enriched-chat-transcript-3.png" alt="Enriched Chat Transcript 3" title="Enriched Chat Transcript 3" style="border: 1px solid gray; zoom:80%;"/>

**Feedback User Type Label**

For conversations with the customer response to a feedback survey, the feedback user type label is added automatically based on the analytics data. This label indicates if a customer is a **_promote_** or a **_detractor_**.

Hovering the mouse on the label displays the following data:


* Number of feedback responses collected.
* Type of feedback survey.
* Customer type (result generated internally after the feedback is submitted).
* Feedback score.

<img src="../images/feedback-user-type-label.png" alt="Feedback User Type Label" title="Feedback User Type Label" style="border: 1px solid gray; zoom:80%;"/>

### User Details

To view the details of the agent that handled a conversation session, follow the steps below:

1. Click either **Conversation Summary** or **Conversation Event** on the dashboard.
2. On the landing page, click the **User Details** tab to view the following information:
    1. **User ID**: The unique ID assigned to the agent.
    2. **Channel Data**: The conversational channel where the interaction occurred.
    3. **Total Conversation Sessions**: The total number of conversations the agent has handled for the selected period.
    4. **Sessions in the Last 30 Days**: The number of conversations the agent handled in the date period that the used has selected within the last 30 days.
    5. **Last Interaction Date**: The date of the agent’s most recent customer interaction.
    6. **User Meta tags**: Used to identify important keywords in the conversation.

    <img src="../images/user-details.png" alt="User Details" title="User Details" style="border: 1px solid gray; zoom:80%;"/>


### Chat History

The chat conversation flow between the AI Agents and the customer is displayed in the **Chat History** panel, including events, actions, input requests, queries, and intent-based responses. Any failed tasks or exceptions that occurred during the conversation will also be displayed here.

The Enriched Chat Transcript is visible on the Chat History panel.

**To view Chat History, follow these steps**:

* Click an entry under **Conversation Summary** or an event under **Conversation Events** on the **Conversation History** dashboard.
* The Chat History window displays the conversation flow. In addition, the following information is displayed on the side pane:
    * **Date Filter** dropdown to select the period of Chat History.

        <img src="../images/chat-history-1.png" alt="Chat History 1" title="Chat History 1" style="border: 1px solid gray; zoom:80%;"/>

    * The date-wise information summary on the following:
        * Conversation channel.
        * Chat initiation event.
        * Chat Duration
        * Chat Start time and End time.
        * Conversation summary of the following metrics:
            * User messages
            * AI Agents messages
            * Intents identified
            * Intents Unidentified
            * Tasks completed
            * Failed Tasks
        * Language (of interaction)
        * Event labels tagged to the conversation history.
       
            <img src="../images/chat-history-2.png" alt="Chat History 2" title="Chat History 2" style="border: 1px solid gray; zoom:80%;"/>

        * X-Trace Id – A unique ID assigned to each incoming message. The ID is also included in all the logs maintained by the Platform. 
        * K-Trace Id – This is Kore’s monitoring trace ID. This ID is useful for debugging purposes.

        When you hover over the message, the info icon appears. Click the **Info** icon to view the **Message ID** associated with the message.
        
        <img src="../images/chat-history-3.png" alt="Chat History 3" title="Chat History 3" style="border: 1px solid gray; zoom:80%;"/>

        * Click the **Message Id** to view the **X-Trace Id** and **K-Trace Id** associated with a message in the Chat History.
        
        <img src="../images/xtraceid2.png" alt="Chat History 4" title="Chat History 4" style="border: 1px solid gray; zoom:80%;"/>


!!! note

    The **X-Trace Id** and **K-Trace Id** are retained in the logs for 30 days. Once expired, you see a tooltip message as ‘`Trace records for this message are not available`‘.

### Define Alternate Text for JavaScript Messages

The Platform uses the`{} JavaScript` tag in the Chat History for AI Agent messages and templates written using JavaScript. However, AI Agents designers can now add a context-specific **Alternate Text** to JavaScript messages/templates they define and explain the purpose more clearly. The added Alternate Text is displayed alongside the JavaScript message tag in the **Chat History** window for developers to get a better understanding of the message’s intent. 

The [Conversation History API](../../apis/automation/conversation-history.md) response includes a parameter `messages.tags.altText` which captures the **Alternate Text** value(s) configured in the JavaScript message or Web SDK template payload through the predefined function discussed below.

**How It Works**

1. Developer uses a predefined function in the syntax `tags.addAlternateText("value")` to add the Alternative Text to a JavaScript message or Web SDK template on any channel, including a Webhook.
2. The Alternate text indicating the JavaScript message/template’s purpose should be provided for the `value` parameter. For example, `tags.addAlternateText("Accounts Selection Message")`.

**Usage Example**

For a bank account creation task, the Platform renders a template in the end channel to prompt the user for account type selection. This requires the developer to define a JavaScript message specific to the channel.

The developer can generate an Alternate text like “_Accounts Selection Message_,” in the template code to indicate that the JavaScript message is for account type selection.

<img src="../images/js-editor-alternate-text.png" alt="JS template editor" title="JS template editor" style="border: 1px solid gray; zoom:75%;">

After the end user selects an account type, the Alternate message appears in the Chat History above the `{} JavaScript` tag.

<img src="../images/chat-history-alternate-message.png" alt="chat history alternate message" title="chat history alternate message" style="border: 1px solid gray; zoom:75%;">

**Important Considerations**

* You can define static and dynamic values for the alternate text.
* Alternate text can be defined for JavaScript messages in user prompts, error prompts, Small Talk, standard responses, FAQs, and events.
* The Platform assigns the latest to a message when you add multiple Alternate text values.
* In the **Chat History** window, the Platform substitutes the payload label with an alternative text tag for all channel templates, excluding the SDK Template.

### Message Tags

**Message Tags** help identify and categorize messages in the chat transcript. They add clarity and context to the conversation and can be reused across related conversations. System-defined message tags are provided by default, but users can create custom tags by defining a **key-value pair**. The key is used as an identifier for the specific message, and the value is the expected customer response to that message.

!!! IMPORTANT

    * You cannot add the same key to a message again.
    * A custom message tag can only be added and detached from a message and not edited.


**To add a custom message tag, follow the steps**:

1. Hover over the message transcript in the conversation where you wish to add the message tag.
2. Click **+Message Tag**.

    <img src="../images/message-tags-1.png" alt="Message Tags 1" title="Message Tags 1" style="border: 1px solid gray; zoom:80%;"/>

3. In the **Add Message Tag** window, enter the **Key** and **Value** in their respective text fields.

    <img src="../images/message-tags-2.png" alt="Message Tags 2" title="Message Tags 2" style="border: 1px solid gray; zoom:80%;"/>


4. Click **Save**. The new message tag is displayed below the message in the transcript slider.

    <img src="../images/message-tags-3.png" alt="Message Tags 3" title="Message Tags 3" style="border: 1px solid gray; zoom:80%;"/>


!!! note

    The custom message tag you create is available in the **Custom Tags Filters** section as one of the filtering criteria.


The **Feedback Survey** feature allows customers to provide feedback on their conversations with the AI Agents.

If enabled, the customer’s response to the survey will be displayed in the chat transcript under **Chat History**.

The system captures and displays a **feedback event label** `"End of Conversation: Survey Type"` on the chat transcript, indicating the end of the conversation and the survey type.

The response will be mapped to a **key-value** pair for the conversation timeline, which can be useful for analyzing the conversation and customer experience at a granular level. This information is useful to improve the AI Agent’s performance and enhance the customer experience.


<img src="../images/feedback-survey.png" alt="Feedback Survey" title="Feedback Survey" style="border: 1px solid gray; zoom:80%;"/>


The **Conversation Summary** displays the following information on the Feedback event:

1. The **Start Time** and **End Time**, along with the real-time counts for the following:
    1. User Messages
    2. AI Agents Messages
    3. Intents Identified
    4. Intents Unidentified
    5. Tasks Completed
    6. Failed Tasks

        <img src="../images/conversation-summary-1.png" alt="Conversation Summary 1" title="Conversation Summary 1" style="border: 1px solid gray; zoom:80%;"/>

2. The Feedback Event is based on the event timeline with **Key** and **Value**.
3. The **total number of feedback responses** collected for the session and the following:
    * Type of Feedback
    * Feedback response
    * Score