# NLP Insights

The NLP Insights feature helps you gain in-depth insights into the analytics data and assess your AI Agent’s performance in identifying and executing tasks. You can improve your AI Agent’s performance based on the insights. 

**To view the NLP Insights dashboard, follow the steps**: 


1. Click **Analytics** on the left navigation pane. The Analytics panel is displayed with the list of reports.
<img src="../images/navigating-to-nlp.png" alt="Navigating to NLP" title="Navigating to NLP" style="border: 1px solid gray; zoom:80%;"/> 

2. Click the **NLP Insights** under the **Automation** section of the **Analytics** panel. The **NLP Insights dashboard** is displayed on the right side of the page.
3. Select appropriate filters on the dashboard and click **Apply**.

The **NLP Insights** page shows the specific information in the following sections:

* Intent Found: Number of identified intents
* Intent Not Found: Number of unidentified intents
* Unhandled Utterances: Number of unhandled utterances
* Pinned: Pinned NLP Insight records. Specific records are pinned to highlight them for easy access and viewing.

In the latest version of the Platform, the **NLP Insights** section retains only the NLP-related analytics data for task identification. The new Task Execution Logs section displays the analytics data related to a AI Agent’s task execution.


## NLP Analytics Fields

The following fields are available for NLP Analytics:


### Intent Found

An intent refers to the goal the customer has in mind when typing in a question or comment. The  phrases used to express the intent are called user utterances. The Intent Found tab includes all the user utterances identified by the platform. 

!!! note

    You need to check for false positives in scenarios where the utterance is wrongly identified for an intent.


See the following table and features section to know more:

   <img src="../images/intent-found-1.png" alt="Intent Found" title="Intent Found" style="border: 1px solid gray; zoom:80%;"/>

The following is an example of Intent Found:

_User: I want to know my order confirmation_

_AI Agents: Would you like to switch to Track Order_

_User: Yes_

_AI Agents: Let’s log you in. \
      How would you like to go ahead – Log in or Guest?_

In the above conversation, the user utterance of _‘knowing the order confirmation status’_ is recognized by the AI Agents and successfully mapped to the Track Order intent.

**Description of the Intent Found Fields**

The following table lists the fields on the Intent Fount tab with descriptions:


<table>
  <tr>
   <td><strong>FIELDS</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Utterances
   </td>
   <td>The utterances that are identified by the AI Agents. The details on the tab are grouped by utterances based on similarity by default. To turn off grouping by utterance, click the <strong>Utterances </strong>header and disable the <strong>Group by Utterances</strong> option.
   </td>
  </tr>
  <tr>
   <td>Intent
   </td>
   <td>The intent/task that is identified. The details on the tab can be grouped by intent. By default, the  <strong>Group by Intent </strong>option is turned off. To turn it on, click the <strong>Intent </strong>header and enable the <strong>Group by Intent </strong>option.
<p>
If the intent has been identified through a Dialog Task, this column displays the task’s name. If the intent is answered using the Answer from Document feature, this column mentions <strong>Answer from Documents</strong>.
   </td>
  </tr>
    <tr>
   <td>Category
   </td>
   <td>The Fulfillment Types are Single Intent, Multi Intent, Small Talk, Conversation Event, and Generate Answer.
   </td>
  </tr>
  <tr>
   <td>Traits
   </td>
   <td>All the traits that are identified for the listed utterances. The details on the tab can be grouped by traits. By default, the  <strong>Group by Traits </strong>option is turned off. To turn it ON, click the <strong>Traits </strong>header and enable the <strong>Group by Traits </strong>option.
<p>
This information is available for the data generated <span style="text-decoration:underline;">after June 1, 2021</span>.
   </td>
  </tr>
  <tr>
   <td>UserID
   </td>
   <td>The UserID of the end user related to the conversation. You can view the metrics based on either <strong>Kore User ID</strong> or <strong>Channel User ID</strong>.
<p>
Channel-specific IDs are shown only for the users who have interacted with the AI Agents during the selected period.
   </td>
  </tr>
  <tr>
   <td>Language
   </td>
   <td>The language in which the conversation occurred.
<p>
If it is a multi-lingual AI Agents, you can select specific languages to filter the conversations that occurred in those languages. The page shows the conversations that occurred in all enabled languages by default.
   </td>
  </tr>
  <tr>
   <td>Date & Time
   </td>
   <td>The date and time of the chat. You can sort the data by either <strong>Newest to Oldest </strong>or <strong>Oldest to Newest</strong>.
   </td>
  </tr>
</table>



### Intent Not Found

Intent Not Found includes all the user utterances that the platform is not able to identify with a dialog task or FAQ either due to invalid training, less training data, or the intent unavailability in the AI Agents.

See the following table and Features section to know more:

<img src="../images/Intent-not-found.png" alt="Intent not Found" title="Intent not Found" style="border: 1px solid gray; zoom:80%;"/>


Example of Intent Not Found: 

_User: I want to know my account statement_

_AI Agents: I’m sorry, I did not recognize the value you have entered. Please select a value from the list._

In the above conversation, the AI Agent does not recognize the user utterance of _‘knowing the account statement’_. It could be due to invalid training, less training, or unavailability of intents in the AI Agents.

**Description of Intent Not Found Fields**

The following table lists the fields on the Intent Not Found tab with descriptions:


<table>
  <tr>
   <td><strong>FIELDS</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Utterances
   </td>
   <td>The utterances that are not identified by the AI Agents. The details on the tab are grouped by utterances based on similarity by default. To turn off grouping by utterance, click the <strong>Utterances </strong>header and disable the <strong>Group by Utterances</strong> option.
   </td>
  </tr>
      <tr>
   <td>Category
   </td>
   <td>The Fulfillment Types are Single Intent, Multi Intent, Small Talk, Conversation Event, and Generate Answer.
   </td>
  </tr>
  <tr>
   <td>Traits
   </td>
   <td>All the traits that are identified for the listed utterances. The details on the tab can be grouped by traits. By default, the  <strong>Group by Traits </strong>option is turned off. To turn it on, click the <strong>Traits </strong>header and enable the <strong>Group by Traits </strong>option.
<p>
This information is available for data generated <span style="text-decoration:underline;">after June 1, 2021</span>.
   </td>
  </tr>
  <tr>
   <td>UserID
   </td>
   <td>The UserID of the end user related to the conversation. You can view the metrics based on either <strong>Kore User id</strong> or <strong>Channel User Id</strong>.
<p>
Channel-specific ids are shown only for the users who have interacted with the AI Agents during the selected period.
   </td>
  </tr>
  <tr>
   <td>Language
   </td>
   <td>The language in which the conversation occurred.
<p>
If it is a multi-lingual AI Agents, you can select specific languages to filter the conversations that occurred in those languages. The page shows the conversations that occurred in all enabled languages by default.
   </td>
  </tr>
  <tr>
   <td>Date & Time
   </td>
   <td>The date and time of the chat. You can sort the data by either <strong>Newest to Oldest</strong> or <strong>Oldest to Newest</strong>.
   </td>
  </tr>
</table>



### Unhandled Utterances

The Unhandled Utterances help analyze the unidentified inputs received from the users during a task execution at an **entity node, message node**, or **confirmation** node. These insights allow you to identify the need for additional training or new intents and enhance the existing NLU model of the AI Agents.

In an unhandled utterance, the following new fields are available:



* **Prompt Type** – A prompt type could be either an **Entity** node, **Message** node, or a **Confirmation** node.
* **Node Name**– Name of the node in which the utterance is not handled
* **Task Name** – Name of the task in which the utterances are unidentified on an entity, message, or confirmation nodes.

   <img src="../images/unhandled-utterances.png" alt="Unhandled Utterances" title="Unhandled Utterances" style="border: 1px solid gray; zoom:80%;"/>


* Group by functionality is available for **_Utterances, Traits, Prompt Type, Task Name, and Node Name_**

!!! note

    The unhandled utterances are available for all conversations with product version 9.3 or higher.


See the following table and Features section to know more.

Unhandled Utterance Examples

The following examples show the conversations between the AI Agents and user, with unhandled utterances captured at **Entity**, **Message**, and **Confirmation** nodes.

**At an Entity Node**:

For example, when the user provides an invalid input at entity or confirmation nodes as follows:

```
User: I want my account statement

AI Agents: Please enter your Customer Id

User: Where do I find it?

AI Agents: Sorry, that is an incorrect input. Please enter your Customer Id

```

In the above conversation, if the AI Agent doesn’t recognize _“where to find customer id”_ as an intent or entity, then this utterance is  categorized under Unhandled Utterances.

**At a Message Node**:

For example, when the user provides an invalid input at a message node as follows:

```
User: I want to book a flight for today

AI Agents: Enter the flight number

User: 12434

AI Agents: Enter number of seats required
User: 3 

AI Agents: Your flight is booked. Would you like to:
   * Book a Hotel 
   * Book a sightseeing tour

User: I want to Cancel the Flight

AI Agents: I’m sorry, I don’t understand. Please enter again.
```

In the above conversation, if the AI Agent doesn’t recognize the intent name “cancel flight” as an input at the message node. The intent identification fails and the utterance is categorized under Unhandled Utterances.

**At Confirmation Node**:

For example, when the user provides an invalid input at a confirmation node as follows:

```
AI Agents: How may I help you

User: I want to book a flight

AI Agents: Enter the number of seats

User: 2

AI Agents: Please confirm if you want two seats

User: I want to hire a cab

AI Agents: I cannot understand it, can you rephrase it

```

In the preceding conversation, when a user enters ‘I want to hire a cab’ at the confirmation node, it is not recognized and logged under Unhandled Utterances.

**Description of Unhandled Utterances Fields**

The following table lists the fields on the Unhandled Utterances tab with descriptions:


<table>
  <tr>
   <td><strong>FIELDS</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Utterances
   </td>
   <td>The unhandled utterances for which the inputs received are unidentified. The details in the tab are grouped by utterances based on similarity by default. To turn off grouping by utterance, click the <strong>Utterances </strong>header and disable the <strong>Group by Utterances</strong> option.
   </td>
  </tr>
  <tr>
   <td>Traits
   </td>
   <td>All the traits that are identified for the listed utterances. The details in the tab can be grouped by traits. By default, the  <strong>Group by Traits </strong>option is turned off. To turn it on, click the <strong>Traits </strong>header and enable the <strong>Group by Traits </strong>option.
<p>
This information is available for analytics generated after<span style="text-decoration:underline;"> June 1, 2021</span>.
   </td>
  </tr>
  <tr>
   <td>Prompt Type
   </td>
   <td>A prompt type could be either an <strong>Entity </strong>node, <strong>Message </strong>node, or a <strong>Confirmation </strong>node. To turn on grouping by Prompt Type, click the <strong>Prompt Type </strong>header and enable the <strong>Group by Prompt Type </strong>option.
   </td>
  </tr>
  <tr>
   <td>Task Name
   </td>
   <td>The task that is identified for the user utterance. To turn on grouping by task name, click the <strong>Task Name </strong>header and enable the <strong>Group by Task </strong>option.
   </td>
  </tr>
  <tr>
   <td>Node Name
   </td>
   <td>The name of the service or script or WebHook within the task that got executed in response to the user utterance. To turn on grouping by node names to which these scripts or services belong, click the <strong>Node Name </strong>header and turn on the <strong>Group by NodeName </strong>option.
   </td>
  </tr>
  <tr>
   <td>UserID
   </td>
   <td>The UserID of the end user related to the conversation. You can view the metrics based on either <strong>Kore User id</strong> or <strong>Channel User Id</strong>.
<p>
Channel-specific ids are shown only for the users who have interacted with the AI Agents during the selected period.
   </td>
  </tr>
  <tr>
   <td>Language
   </td>
   <td>The language in which the conversation occurred.
<p>
If it is a multi-lingual AI Agents, you can select specific languages to filter the conversations that occurred in those languages. The page shows the conversations that occurred in all enabled languages by default.
   </td>
  </tr>
  <tr>
   <td>Date & Time
   </td>
   <td>The date and time of the chat. You can sort the data by either <strong>Newest to Oldest </strong>or <strong>Oldest to Newest</strong>.
   </td>
  </tr>
</table>



### Pinned

Any records from Identified and Unidentified Intents, or Unhandled Utterances tabs that are pinned are displayed in the Pinned tab. 

**Description of Pinned Fields**

The following table lists the fields on the Pinned tab with descriptions:


<table>
  <tr>
   <td><strong>FIELDS</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Utterances
   </td>
   <td>The pinned utterances are displayed here. The details in the tab are grouped by utterances based on similarity by default. To turn off grouping by utterance, click the <strong>Utterances </strong>header and disable the <strong>Group by Utterances</strong> option.
   </td>
  </tr>
  <tr>
   <td>Intent
   </td>
   <td>The intent associated with the pinned utterance. The details in the tab can be grouped by Intents. By default, the  <strong>Group by Intent </strong>option is turned off. To turn it on, click the <strong>Intent </strong>header and enable the <strong>Group by Intent </strong>option.
   </td>
  </tr>
  <tr>
   <td>Type of Issue
   </td>
   <td>Shows the reason for failure in case of Task Failure records.
<p>
To know the usual type of issues, see Failed Task – Type of Issues.
   </td>
  </tr>
  <tr>
   <td>UserID
   </td>
   <td>The UserID of the end user related to the conversation. You can view the metrics based on either <strong>Kore User id</strong> or <strong>Channel User Id</strong>.
<p>
Channel-specific ids are shown only for the users who have interacted with the AI Agents during the selected period.
   </td>
  </tr>
  <tr>
   <td>Language
   </td>
   <td>The language in which the conversation occurred.
<p>
If it is a multi-lingual AI Agents, you can select specific languages to filter the conversations that occurred in those languages. The page shows the conversations that occurred in all enabled languages by default.
   </td>
  </tr>
  <tr>
   <td>Date & Time
   </td>
   <td>The date and time of the chat. You can sort the data by either <strong>Newest to Oldest </strong>or <strong>Oldest to Newest</strong>.
   </td>
  </tr>
</table>



## NLP Insights Analysis

The following sections describe more about the options available on NLP Insights page and the analysis of the records captured here.

### Features

The following list details the features available in NLP Insights for Intent Found, Intent Not Found, and Unhandled Utterances.

* You can filter the information based on various criteria such as User Utterances, Intent, user id (Kore user id or channel-specific unique id), date-period, the channel of use, language, etc. You can also filter records based on multiple custom tags. See Filter Criteria to know more.
* Complete meta-information is stored for later analysis, including the original user utterance, the channel of communication, entities extracted (if any), custom tags applied, detailed NLP analysis with scores returned from each engine, and the ranking and resolver scores.
* Ability to view the chat transcript to the point of the user utterance. This also gives the option to view the user profile and the details of that user’s conversation sessions.
* You have an option to train the utterance.  The utterance will be marked once trained.
* Any important record you want to mark, track later, or both can be pinned. They appear on  the **Pinned** tab.
* Sorting feature is available for Date and Time (Oldest to Newest, Newest to Oldest). You can export the insights data as a CSV file.

   <img src="../images/NLP-insights-analysis.png" alt="NLP Insights Analysis" title="NLP Insights Analysis" style="border: 1px solid gray; zoom:80%;"/>

!!! note

    The NLP Insights page shows the conversations from the last 24 hours by default. You can filter the insights for a selected period – use the Date drop-down to select 24 hours, the last 7 days, or a custom period.


### Fields Matrix

The following matrix shows the availability of fields on each tab of NLP Insights:


<table>
  <tr>
   <td><strong>FIELDS</strong>
   </td>
   <td><strong>INTENT FOUND</strong>
   </td>
   <td><strong>INTENT NOT FOUND</strong>
   </td>
   <td><strong>UNHANDLED UTTERANCES</strong>
   </td>
   <td><strong>PINNED</strong>
   </td>
  </tr>
  <tr>
   <td>Utterances
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Intent
   </td>
   <td>✔
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Traits
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>UserID
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Language
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Date & Time
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Prompt Type
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Task Name
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Node Name
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Failure Point
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Type of Issue
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>✔
   </td>
  </tr>
  <tr>
   <td>Type
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Total Runs
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Success%
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>2XX Responses
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Non 2XX Responses
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Avg Response Time
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Log
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Debug Point
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
  <tr>
   <td>Channel
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
   <td>X
   </td>
  </tr>
</table>



### Filter Criteria

You can filter the information on the Insights page using various filters. You can save the entered filter criteria and set it as the default filter using **Save as Default Filter**.

The filter criteria differ slightly between different tabs. The relevant filters are applied when you switch between the tabs on the Insights Page. See Dashboard Filter Criteria to know more details.


### Detailed View

For all the user utterances listed on the various tabs such as Intent Found, Intent Not Found, Unhandled Utterances, etc., you can open more details of the user session by clicking the respective record. The record shows the information on the following sub-tabs: Details, NLP Analysis, and Chat History.


### Details

The Details tab shows the basic details of the session along with a JSON file that includes the NLP analysis for the conversation.

<img src="../images/Filter-criteria-details.png" alt="Filter Criteria Details" title="Filter Criteria Details" style="border: 1px solid gray; zoom:80%;"/>


If the intent has been answered from a document, this section provides the following details:


* Information on the Intent not being identified by the ML, FM, and KG engines. Hence, the user utterance is answered directly from the document.
* The answer presented to the user.
* The document from which the answer was provided.
* A Similarity Score for how similar the user query is to the document content.
* An option to add the query to the Knowledge Graph as an FAQ.

   <img src="../images/Filter-criteria-details-1.png" alt="Filter Criteria Details" title="Filter Criteria Details" style="border: 1px solid gray; zoom:80%;"/>


### NLP Analysis

This tab provides a visual representation of the NLP Analysis, including intent scoring and selection.  See Testing and Training an AI Agents and Ranking and Resolver for more information.

   <img src="../images/NLP-analysis.png" alt="NLP Analysis" title="NLP Analysis" style="border: 1px solid gray; zoom:80%;"/>


### Chat History

On the Chat History tab, you can access the exact message or conversation for which the record is logged. It shows the entire chat history of the user session.

   <img src="../images/chat-history.png" alt="Chat History" title="Chat History" style="border: 1px solid gray; zoom:80%;"/>

Chat History provides visibility into the user information by capturing the following details:

 * **User Profile**: Provides a 360-degree view of the user and their usage metrics.
* **User Conversation Sessions**: Lists all the sessions of the user in the given period with the selected utterance section expanded.
* **Go to Selected Utterance**: When you click this icon, the selected utterance is highlighted in orange (see the preceding screenshot).
* **X-Trace Id**: A unique ID assigned to each incoming message. The ID is also included in all the logs maintained by the Platform.
* **K-Trace Id**: This is Kore’s monitoring trace ID. This ID is useful for debugging purposes.

When you hover over the message, the info icon appears. Click the **Info** icon to view the **Message Id** associated with the message.
<img src="../images/chat-history-1.png" alt="Chat History-1" title="Chat History-1" style="border: 1px solid gray; zoom:60%;">

* Click the **Message Id** to view the **X-Trace Id** and **K-Trace Id** associated with a message in the Chat History.  
<img src="../images/xtraceid.png" alt="Chat History-2" title="Chat History-2" style="border: 1px solid gray; zoom:60%;">

   !!! note

      The **X-Trace Id** and **K-Trace Id** are retained in the logs for 30 days. Once expired, you see a tooltip message as ‘`Trace records for this message are not available`‘.


The following user information details are displayed on the **Chat History** tab:


<table>
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
   <td>User id assigned by the platform
   </td>
  </tr>
  <tr>
   <td>Channel Data
   </td>
   <td>Data received from the channel, that is the information available in the User Context.
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
   <td>Last time the user interacted with the AI Agents.
   </td>
  </tr>
  <tr>
   <td>Total Conversation Sessions
   </td>
   <td>The total number of interactive and non-interactive sessions registered by the user from the beginning of time.
   </td>
  </tr>
  <tr>
   <td>Total Conversation Sessions in the Last 30 Days
   </td>
   <td>The total number of interactive and non-interactive sessions registered by the user in the last 30 days.
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>*The next few attributes are not displayed if there is no interaction by the user in the last 30 days</strong>
   </td>
  </tr>
  <tr>
   <td>Last 30 Days’ Intent Detection Rate
   </td>
   <td>(Total identified intents / (Total identified intents + unidentified utterances)) * 100 for the utterances over the last 30 days
   </td>
  </tr>
  <tr>
   <td>Intents Requested
   </td>
   <td>Total identified intents + unidentified utterances
   </td>
  </tr>
  <tr>
   <td>Intents Identified
   </td>
   <td>Total intents identified
   </td>
  </tr>
  <tr>
   <td>Last 30 Days Goal Completion Rate
   </td>
   <td>(Tasks success tasks / (Total success tasks + total failed tasks) ) * 100 for the tasks over the last 30 days
   </td>
  </tr>
  <tr>
   <td>Tasks Initiated
   </td>
   <td>Total success tasks + total failed tasks
   </td>
  </tr>
  <tr>
   <td>Tasks Completed
   </td>
   <td>Tasks successfully completed
   </td>
  </tr>
  <tr>
   <td>Recent Conversation Flows
   </td>
   <td>Top 10 popular conversation flows executed by the user in the last 30 days. Popular flows are determined by the number of instances, for which the conversation flow is executed.
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
   <td>Channel in which the session is initiated.
   </td>
  </tr>
  <tr>
   <td>Agent Transfer Tag
   </td>
   <td>The session where the user is transferred to an agent. Sessions should be considered even if the user returns to the AI Agents.
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
   <td>Intents Unidentified
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
   <td>Indicates the point of agent transfer at the last message before transfer.
   </td>
  </tr>
  <tr>
   <td>Drop Off
   </td>
   <td>Indicate the point of drop off at the last message before dropping off.
   </td>
  </tr>
</table>


**Advanced Performance Details**

Clicking a service or script or WebHook name opens the advanced details dialog for the service, which lists each instance of its run along with separate tabs for successful and failed runs. Analyzing the average response time of different runs gives you insights into any aberrations in the service or script execution. Click any row to open the JSON response associated with the service or script run.



## DialogGPT NLP Insights Analysis

DialogGPT Analytics provides structured insights into how the system processes user inputs, detects intents, qualifies responses, and orchestrates conversations. It allows users to monitor intent classification, chunk qualification, response generation, and chat history, improving tracking, debugging, and compliance.

Analytics also includes the DialogGPT-ConversationOrchestrator model output Fulfillment Type as a category, enabling developers to filter user inputs by triggered intents and review NLP details for deeper analysis. By accessing detailed logs and performance data, users can fine-tune interactions, identify bottlenecks, and enhance response accuracy, ensuring continuous improvement in conversational experiences.


### Query Rephrasing

The system enhances user input through query rephrasing while preserving intent and improving recognition and response accuracy. It normalizes complex or ambiguous queries, correctly interprets synonymous variations, and enhances model comprehension by reducing inconsistencies.



### Chunk Qualification

After rephrasing the user input, the system evaluates multiple response sources to identify the most relevant response chunks. It filters responses from **Dialogs, Search, and FAQs**, ensuring accurate and contextually appropriate results.

This section displays key details, including the model used, processed user input, processing time, number of qualified chunks, similarity thresholds, and proximity thresholds. Users can also view all qualified chunks for further analysis.  
<img src="../images/gpt-chunk-qualification.png" alt="Chunk Qualification" title="Chunk Qualification" style="border: 1px solid gray; zoom:60%;">


### Conversation Orchestrator

After the system qualifies relevant response chunks, the **Conversation Orchestrator** determines the optimal fulfillment path for generating responses. It supports both **Single-Intent** and **Multiple-Intent** categorization, ensuring structured and contextually relevant replies.

This section displays key details, including the model and prompt used, processing time, and matched intents. Users can also access the complete request and response logs for deeper analysis and troubleshooting.  
<img src="../images/gpt-cononversation-orchestrator.png" alt="Conversation Orchestrator" title="Conversation Orchestrator" style="border: 1px solid gray; zoom:60%;">

### Chat History

The Chat History tab allows you to access the exact message or conversation for which the record is logged. It also shows the entire chat history of the user session, as well as the intent and intent category.  
<img src="../images/gp-chathistory.png" alt="Chat History" title="Chat History" style="border: 1px solid gray; zoom:60%;">


## Train the AI Agents

You can train the specific intents and utterances from the Intent Found, Intent Not Found, and Unhandled Utterances tabs. To do so, hover over a row in any of these tabs, and click the **Train **icon. It opens the Test & Train page, where you can train the AI Agents. For more information, see  Testing and Training an AI Agent.


## Data Export

You can export the data present on the NLP Insights page to a CSV file, by clicking the Export icon on the top right corner of the page.

<img src="../images/data-export.png" alt="Data-Export" title="Data-Export" style="border: 1px solid gray; zoom:80%;"/>


Once you click the icon, the export process starts, and you can see the progress in the Status Tracker dock. The export file is downloaded to your local **Downloads** folder. The downloaded file has the information specific to the selected tab and a detailed analysis based on the selected filters.

These records also include the Meta Tag information.
