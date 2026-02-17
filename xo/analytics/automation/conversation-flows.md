# Conversation Flows

Conversation Flows is a visual representation of the user journey. The user interactions with the AI Agents are analyzed by the platform to provide insights into the commonly used intents, paths traversed, and drop-off points.


!!! note

    The Conversation Flow feature is available only for the Published AI Agents.


The Conversation Flows provides the following views:


* **Intents Flow**: This view provides an aggregated view of how each of the AI Agents’s intents is executed. The intents are rolled up to the top level, irrespective of what stage of a conversation they were initiated by the users. For example, intents invoked at the beginning of a conversation as well as any other stage during the conversation are all rolled up to the top level. This is the default view when you navigate to Conversation Flows. The **View tasks by sessions** toggle should be turned OFF to access this view.
* **Session Flow**: This view provides the user journey across the different intents in the order they were executed during a conversation session. Every flow starts with the intent used to initiate a conversation session and is followed by the other intents invoked in that session. You must turn ON the **View Tasks by sessions** toggle to access this view.

**To view the Conversation Flows dashboard, follow the steps**: 



1. Click **Analytics** on the left navigation pane. The Analytics panel is displayed with the list of reports.

    <img src="../images/conversation-flows-dashboard.png" alt="Conversation Flows Dashboard" title="Conversation Flows Dashboard" style="border: 1px solid gray; zoom:80%;">

2. Click the **Conversation Flows dashboard** under the **Automation** section of the **Analytics** panel. The **Conversation Flows dashboard** is displayed on the right side of the page.
3. Select appropriate filters on the dashboard and click **Apply**.


By default, the Intents Flow is presented along with the intents. Selecting any node will expand the flow to present the subsequent nodes in that path.


<img src="../images/conversation-flows-1.png" alt="Conversation Flows" title="Conversation Flows" style="border: 1px solid gray; zoom:80%;">

You can select session-wise view by toggling the **View tasks by sessions** option.


<img src="../images/conversation-flows-2.png" alt="Conversation Flows" title="Conversation Flows" style="border: 1px solid gray; zoom:80%;">


## Purpose

The Conversation Flows can be used to identify the following:


* Popular utterances – Utterances that are used to invoke the AI Agents’s intents. Utterances are automatically grouped by similarity to provide a simplified view. 
* False Positives – A quick review of the utterance groups will help you in identifying utterances going to an incorrect intent. You can analyze these utterances and make the necessary training updates. 
* False Negatives – Utterances that did not result in any intent identification are presented as ‘Not Handled Utterances’. You can analyze these utterances and add them to the training corpus if required. 
* Popular Intents and Flows – Helps in understanding the popular intents of your users and the flows used to execute these intents
* Drop-off Points – Analyze the specific areas of the conversations that are resulting in drop-offs. A conversation is marked as a drop-off if the user has abandoned it without providing a valid input. 
* Agent Hand-offs – View the flows that are leading to agent hand-offs. Agent Hand-offs are conversations that result in navigating to the Agent Node from any of the Dialog Tasks.


## Key Features

The following are the details presented along with the flows:


<img src="../images/conversation-flows-3.png" alt="Conversation Flows" title="Conversation Flows" style="border: 1px solid gray; zoom:80%;">


* **Utterance Groups**: Every flow starts with an utterance from the user that initiated the conversation and expands to show further interactions. These utterances are grouped based on their similarity, ignoring the stop words and values for entities. These utterance nodes lead to one of the following intents:
    * Individual task intents,
    * FAQs,
    * Small Talk,
    * Help and
    * Not Handled utterances
* **Nodes**: are the individual points plotted on the conversation flow across various levels. Only the nodes that need input from the user are plotted on the graph. Following are the nodes that are plotted on the graph:
    * Intent Nodes: Includes Dialog as well as FAQ intents
    * Entity Nodes 
    * Confirmation Nodes 
    * User Input Nodes (using _on_intent_ transition) 
    * Message Nodes 
* **Node Details**: The following details are presented for each node:
    * **Percentage** of total utterances leading to this Node. Click on percentage to display the list of user utterances that triggered this Node;
    * **Node Name** will be the task/entity name with the following details displayed on hover over the Node:
        * **Conversation** and **Drop-offs** details,
        * **See Responses** shows the User’s response, where applicable, to this Node;
    * Percentage of Drop-offs where applicable
    * **Path Indicators** are visible on the path between two nodes, where applicable, indicating:
        * any Script/Service Nodes visited during the transition between the nodes;
        * any Tasks executed as part of the Hold and Resume scenarios.
* **Chat History** is viewed by clicking the utterance from the User Utterance window for either input (percentage) or response information.


## Filters

The Conversation Flows can be filtered using one or more of the following criteria:



* **Date Period** – Default is set to _Last 7 days_. You can change it to _24 Hrs_. You can also set the start and end dates using the _Custom_ option and by selecting the dates from the calendar.
* **Languages**  – In the case of multi-lang AI Agents, you can filter the conversation flows by selecting one or more languages from the presented drop-down list. The default is _All Languages._
* **Channels** – Selecting one or more channels the AI Agents was published on, you can filter the flow based upon the channel used by the user. The default is _All Channels_.
* **Custom Tags** – In case you have added any meta/custom tags to your AI Agents, you can filter based on the same. This requires the selecting of the Tag Name and the value for the tag you want to filter the conversations. By default, no tag is selected.


<img src="../images/conversational-flows-filters.png" alt="Conversational Flows Filters" title="Conversational Flows Filters" style="border: 1px solid gray; zoom:80%;">


