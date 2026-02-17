
# Conversation Logs

The **Conversation Logs** is a library of all conversations agents have with their customers. It lets you access and review past interactions, view agent names, copy conversation identifiers, view the overall sentiment, access voice call recordings, and view the overall widget feedback. You can also compare edited conversation summaries with their original versions. Additionally, you can create, edit, delete, and save search filters, and set a default filter.

## Accessing the Conversation Logs

Steps to access the Conversation Logs:

1. Sign in to [**AI for Service**](https://platform.kore.ai/){:target="_blank"}.
2. Go to **Agent AI** > **Analytics** > **Agent AI Logs**. The default view displays the conversation records of today.  
<img src="../conversation_logs/conversation-logs-1.png" alt="conversation_logs" title="conversation_logs" style="border: 1px solid gray; zoom:80%;"> 

3. Click the arrow next to **Conversation ID** or **Time** to sort this table accordingly.  
<img src="../conversation_logs/sorting-conversation-logs-through-id-or-time-2.png" alt="sorting-conversation-logs-through-id-or-time" title="sorting-conversation-logs-through-id-or-time" style="border: 1px solid gray; zoom:80%;">   

4. Click a **CONVERSATION ID** to view the corresponding conversation summary, edited summary (if any), identifiers, Voice Call Recording, overall widget feedback, and the conversation record.  

| **Field**          | **Description**                                                                                                  |
|--------------------|------------------------------------------------------------------------------------------------------------------|
| **Clear Filters**  | Removes all filters (Time and Custom) and returns to the default view (Today).                                   |
| **Conversation ID**| A unique identification number assigned to each conversation. It helps identify and track specific interactions. |
| **Time**           | The date and time when a conversation took place.                                                                |
| **Agent**          | Agents involved in a conversation.                                                                               |
| **Channel**        | The communication mode of the conversation—Voice or Chat. This information helps differentiate interaction types.|
| **Duration**       | The length of time a conversation lasted. It indicates how long it took to resolve customer queries.             |

!!! note

    Only the agents who participate in at least one conversation appear in the filter.  

### AI Summary

The AI Summary section displays the system-generated summary of a conversation. If the summary is edited, both the original and the edited versions are displayed for comparison. 

To view the conversation summary, click to expand the **AI Summary** section.

* The edited conversation summary appears with an “eye” symbol, clicking which shows the original summary. The following image shows an edited conversation summary along with the original summary and the conversation record:  
    <img src="../conversation_logs/edited-and-original-conversation-summary-4.png" alt="edited-and-original-conversation-summary" title="edited-and-original-conversation-summary" style="border: 1px solid gray; zoom:80%;">    

* The following image displays the error message for failed summary generation and the agent-entered summary:   
    <img src="../conversation_logs/failed-summary-error.png" alt="failed-summary-error" title="failed-summary-error" style="border: 1px solid gray; zoom:80%;">  

### Show Identifiers and other details

This section includes the following subsections: 

* **Identifiers**: Always available.
* **Voice Call Recording**: Appears only for voice channels.
* **Overall Widget Feedback**: Appears only when the widget has received feedback.

These subsections are hidden by default, and you must expand this section to view them.

#### Identifiers

Each conversation has a few unique identifiers that help track it. The Identifiers subsection includes these identifiers, allows you to copy them, and shows the overall sentiment of the conversation. It displays the following details: 

* **Widget Active Time**: Shows the duration of a conversation.
* **Session ID**: Shows the unique ID number assigned for each conversation. 
* **Bot ID**: Shows the unique identity number of the bot handling a conversation.
* **Conversation ID**: A unique identification number assigned to each conversation.
* **User ID**: A unique identifier for the customer participating in the conversation.
* **Overall Sentiment**: Shows the overall sentiment of the conversation—Positive, Neutral, or Negative. Hovering over this field shows the sentiment graph.

!!! notes

    * The Agent Coaching feature must be enabled for the Overall Sentiment appearance.
    * If Agentic Copilot is enabled, both Session ID and User ID display as N/A. 

**Steps to view the Identifiers subsection** 

1. Click to expand the **Show Identifiers and other details** section.
2. Click to expand the **Identifier** subsection.  
    <img src="../conversation_logs/identifiers.png" alt="identifiers" title="identifiers" style="border: 1px solid gray; zoom:80%;">  

3. Click the “copy” button against the Session ID, Conversation ID, Bot ID, and User ID fields.
4. Click the **Overall Sentiment** value field to view the **Sentiment Analysis** graph.

#### Voice Call Recording

This subsection appears only for the voice channel and displays the recorded voice calls (if any). You can play, pause, rewind, fast-forward, and download the recordings.  

!!! note
    This section appears only if call recordings are enabled.  

To view the voice call recording, click to expand the **Voice Call Recording** section.  
<img src="../conversation_logs/voice-call-recording-section.png" alt="voice-call-recording-section" title="voice-call-recording-section" style="border: 1px solid gray; zoom:80%;">  

  * Use the buttons to select **play speed**, **volume control**, **play**, **pause**, **rewind**, or **fast-forward** the recording.  
    <img src="../conversation_logs/call-recording-control-buttons.png" alt="call-recording-control-buttons" title="call-recording-control-buttons" style="border: 1px solid gray; zoom:80%;">  

  * To download the recording, click the **Download** button, and select one of the following options: 
    * **Download as a single file**: Select this option to download all call recording files as a single, merged file.  
    * **Download as separate files**: Select this option to download all call recording files as individual files.  
        <img src="../conversation_logs/download-voice-call-recording.png" alt="download-voice-call-recording" title="download-voice-call-recording" style="border: 1px solid gray; zoom:80%;">  

    * Select the files, and click **Download All**.  
* The following messages appear if errors occur while displaying the voice call recordings:
    * If the system can’t fetch the recordings:  
        <img src="../conversation_logs/cant-fetch-recording-error.png" alt="cant-fetch-recording-error" title="cant-fetch-recording-error" style="border: 1px solid gray; zoom:80%;">  

    * If recordings are unavailable:  
        <img src="../conversation_logs/unavailable-recording.png" alt="unavailable-recording" title="unavailable-recording" style="border: 1px solid gray; zoom:80%;">  

#### Overall Widget Feedback

This subsection appears only if the widget has received feedback from agents. It displays the total number and the details of the feedback—agent name, feedback reason, and other comments.

To view this subsection, click to expand **Overall Widget Feedback**.  

<img src="../conversation_logs/overall-widget-feedback.png" alt="overall-widget-feedback" title="overall-widget-feedback" style="border: 1px solid gray; zoom:80%;">  

## Filter Conversation Logs

This feature lets you quickly locate and review conversations with the help of filters. By default, the calendar is set to **Today**, displaying only the logs from the current date. You can search for a specific conversation by entering its Conversation ID in the search box.

This feature also lets you create and save custom filters based on channel type and agent name. You can set an existing filter as the default to apply automatically when you open the Conversation Logs. You can also edit or delete saved filters.

Steps to filter Conversation Logs:

1. Click the **Calendar** button in the right-upper corner.  
    <img src="../conversation_logs/calendar-button-conversation-logs-6.png" alt="calendar-button-conversation-logs" title="calendar-button-conversation-logs" style="border: 1px solid gray; zoom:80%;"> 

2. Select from the following options:
    1. Date Range
    2. Time Range  

3. Click **Apply**.

### Search by Conversation ID

Each conversation in the **Conversation Logs** has a unique **Conversation ID**. Use this ID to quickly find a specific conversation without scrolling or filtering.

**Steps to search through the Conversation ID**:

1. Go to **Conversation Logs**.
2. Locate the **Search by Conversation ID** search box in the upper-right corner of the page.
3. Enter the **Conversation ID** value in the search box.
4. Press the **Enter** key.  
    <img src="../conversation_logs/conversation-id.png" alt="conversation-id" title="conversation-id" style="border: 1px solid gray; zoom:80%;">

### Create a New Filter

You can create and save a custom filter based on channel type and agent name. The saved filter appears in the Filters list, which you can edit, delete, or set as the default filter. Unsaved filters appear as a draft named Unsaved Filter.

Steps to create a new filter:

1. Go to **Conversation Logs**.  
2. Click **Filters** in the upper-right corner.  
    <img src="../conversation_logs/logs-filter.png" alt="logs-filter" title="logs-filter" style="border: 1px solid gray; zoom:80%;">  

3. In the **New Filter** page:

    1. Select **Channel Type**-**Chat**, **Voice**, **Email**.

    2. Enter the first few letters of an agent’s email address—autocomplete displays the rest—and select it. To select multiple displayed addresses, click **Add Selected**.  
        <img src="../conversation_logs/agent-email-address.png" alt="agent-email-address" title="agent-email-address" style="border: 1px solid gray; zoom:80%;">  

    3. Click **Save & Apply**.  
        1. If you click **Apply**, the filter is saved as a draft named **Unsaved Filter**.  
            <img src="../conversation_logs/unsaved-filter.png" alt="unsaved-filter" title="unsaved-filter" style="border: 1px solid gray; zoom:80%;">  

    4. Enter a name, and click **Save**.  
        <img src="../conversation_logs/save-log-filter.png" alt="save-log-filter" title="save-log-filter" style="border: 1px solid gray; zoom:80%;">  

### Edit, Delete, or set as the Default

This section explains how to edit, delete, and set and clear default filters.

Steps to edit, delete, and set and clear default filters: 

1. Go to **Conversation Logs**.
2. Click the **Filters** list.  
    <img src="../conversation_logs/filters-list.png" alt="filters-list" title="filters-list" style="border: 1px solid gray; zoom:80%;">  

3. Click **Clear Filter** to clear the existing filter and display the entire conversation log.
4. Click **Filters** > **Saved Filter**, and select a filter.
    1. Click the **Mark as default** button to set this as the default filter.
    2. Click the **Edit** button to modify the existing channel types and agents of this filter.
    3. Click the **Delete** button to delete this filter.  
        <img src="../conversation_logs/saved-filters-actions.png" alt="saved-filters-actions" title="saved-filters-actions" style="border: 1px solid gray; zoom:80%;">  

    4. Click **Apply**.