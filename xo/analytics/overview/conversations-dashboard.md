# Conversations Dashboard

The Conversations Dashboard provides insights into how conversations are handled by your AI Agents. It shows how many conversations were successfully answered by the AI Agents, how many were transferred to agents, and how many were incomplete. You can also view other metrics, such as the trend of conversation sessions, the conversation path analysis, the session distribution by channel, and the AI Agent’s engagement grouped by self-service, drop-off, and agent transfer sessions.

**To view the Conversations dashboard, follow the steps**:


1. Click **Analytics** on the left navigation pane. The Analytics panel is displayed with the list of reports.
2. Click **Conversations Dashboard** under the **Overview** section of the **Analytics** panel. The Conversation dashboard is displayed on the right side of the page.
3. Select appropriate filters on the dashboard and click **Apply**.

  <img src="../images/conversation-sessions.png" alt="Conversations Dashboard"  title="Conversations Dashboard" style="border: 1px solid gray; zoom:100%;"> 
  
The Conversations Dashboard is organized into four categories based on the conversation behavior, explained below.


## Conversation Sessions

Conversation Sessions display the total number of conversations between the AI Agents and a user in a specific period of time. The session starts when a user sends a message and ends when the user indicates that the problem is solved, abandons the chat, or reaches the agent transfer node. For details on the metrics used in each widget/category, see the [Metrics Table](#metrics-table) section in this document.

<img src="../images/conversation-sessions.png" alt="Conversation Sessions"  title="Conversation Sessions" style="border: 1px solid gray; zoom:100%;">

## Self-service Rate

Self-service sessions refer to the conversations that the AI Agents contains. The **Self-service Rate** widget displays the percentage and total number of self-service conversations. It also shows the percentage increase or decrease in the self-service conversations from the last selected period. For example, if you select the past 24 hours’ data, the widget displays the percentage and total conversation sessions contained in the past 24 hours. Based on your selection, the widget can also display the rise or drop in the percentage of conversation sessions from the previous 24 hours. Any ongoing conversation is classified under Self-service conversation.

If a dialog task reaches the <em>End Of Dialog</em> node, the task is considered as completed and categorized as a self-service. There could be a scenario where an AI Agent is configured with either a <em>Welcome event</em> or an <em>On-Connect event</em>, and there are multiple messages sent by the AI Agents without any user interaction. In this case, the platform considers this task as contained and increases the self-service count. For details on the metrics used in each widget/category, see the [Metrics Table](#metrics-table) section in this document.

<img src="../images/self-service-rate.png" alt="Self-service Rate"  title="Self-service Rate" style="border: 1px solid gray; zoom:100%;">


## Drop-off Rate

A drop-off is a conversation session where the user abandons the conversation without completing the task. Below are a few scenarios where the conversations can lead to a drop-off:

* A user left the conversation midway without completing any task.
* The task ended as a failure.
* The last interaction/message resulted in an ‘intent not identified’ scenario.
* No response from the AI Agent.
* The user abandons the AI Agent during a live conversation.

The **Drop-off Rate** widget displays the percentage and the total number of drop-offs within a selected period. It also shows the percentage increase or decrease in the drop-off sessions from the last selected period. For details on the metrics used in each widget/category, see the [Metrics Table](./conversations-dashboard.md#metrics-table) section in this document.

<img src="../images/drop-off-rate.png" alt="Drop-off Rate"  title="Drop-off Rate" style="border: 1px solid gray; zoom:100%;">


## Agent Transfer Rate

Some conversations may require human assistance as the users can’t finish the tasks using the AI Agents. In such cases, the session is handed over to a human agent for help. When the conversation reaches the point where it’s transferred to an agent – the dialog reaches the agent transfer node, the platform considers this as an Agent Transfer session.

The **Agent Transfer Rate** widget displays the percentage and total number of agent transfers within the selected period. It also shows the percentage increase or decrease in the agent transfer sessions from the last selected period. For details on the metrics used in each widget/category, see the [Metrics Table](#metrics-table) section in this document.as

<img src="../images/agent-transfer-rate.png" alt="Agent Transfer Rate"  title="Agent Transfer Rate" style="border: 1px solid gray; zoom:100%;">

!!! note

    Unblu and IVR channels don’t need any Agent Transfer node to transfer the conversation to Agents.


## Metrics Table

Refer to the table below for the list of widgets present across each category on the Conversations Dashboard.

!!! note

    For a trend line chart, if the period is 24 hours, the X-axis shows hourly intervals. Otherwise, the axis shows daily intervals. The Y-axis shows the total number of sessions.


<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Conversation Session Trend
   </td>
   <td><p>A line chart that displays the conversation session over a period of time.</p>
<p><strong>Conversation Sessions</strong>: Displays the total conversations, self-service, drop-off, and agent transfer sessions over a period of time.</p>

<p><strong>Self-Service</strong>: Displays self-service versus total conversation line chart over a period of time.
</p>
<p><strong>Drop-Off</strong>: Displays drop-off versus total conversation line chart over a period of time.
</p>
<p><strong>Agent Transfer</strong>: Displays agent transfer versus total conversation line chart over a period of time.</p>
Scenarios considered as  'agent hand-off' sessions:
<ul>
<li>Customers transferred to agents without completing any task with the AI Agent - <strong>Total Agent Transfer</strong>.</li>
<li>Customers transferred to agents after successfully completing one or more tasks with the AI Agent - <strong>Sessions Transferred to Agents after Completion of 1 or More Tasks</strong>.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Message Trend
   </td>
   <td><p>A line chart that displays the total number of messages sent by the AI Agents versus the total number of messages received in the AI Agents over a time period.</p>
This metric is available only for the Conversation Session.
   </td>
  </tr>
  <tr>
   <td>Session Distributed by Channel
   </td>
   <td>Displays the number of sessions distributed across all the channels in a timeframe.
<br>
This metric is available only for the Conversation Session.
   </td>
  </tr>
  <tr>
   <td>Most Active Hours
   </td>
   <td><p>A bar chart that displays the most active hours in a day based on the number of conversations and number of messages.</p>
<p><strong>Conversation Sessions</strong>: Displays the total number of hours for self-service, drop-off, and agent transfer sessions over a period of time.</p>
<p><strong>Self-Service</strong>: Displays the total number of hours for self-service sessions distributed hourly.</p>
<p><strong>Drop-off:</strong> Displays the total number of hours for drop-off sessions distributed hourly.</p>
<p><strong>Agent Transfer</strong>: Displays the total number of hours for agent transfer sessions distributed hourly.</p> 
   </td>
  </tr>
  <tr>
   <td>Conversation Path Analysis
   </td>
   <td><p>A table showing every unique conversation path between the AI Agents and the users that has been executed over a period of time.</p>
<p><strong>Conversation Session</strong>: Displays the most popular conversation path.</p>
<p><strong>Self-Service</strong>: Displays the conversation path that leads to self-service.</p>
<p><strong>Drop-off</strong>: Displays the conversation path that leads to self-service.</p>
<p><strong>Agent Transfer</strong>: Displays the conversation path that leads to agent transfer.</p>
   </td>
  </tr>
  <tr>
   <td>Engagement Analysis
   </td>
   <td>An interactive bar chart that allows you to analyze the AI Agent’s engagement based on the number of messages exchanged, conversation duration, and task completion.
   </td>
  </tr>
  <tr>
   <td>Avg. Conversation per Day
   </td>
   <td><p>A scorecard that displays the average number of conversation sessions per day and comparison analysis for the selected period.</p>
<strong>Formula</strong>
<br>
Avg Conversation Per Day = Total Number of conversations / Number of days.
<br>
Comparison Analysis in % (Increase/Decrease)
<br>
This metric is available only for the Conversation Session.
   </td>
  </tr>
  <tr>
   <td>Average Conversation Per User
   </td>
   <td><p>A scorecard that displays the average number of conversations by user.</p>
<strong>Formula</strong>
<br>
Average Conversation Per User = Total number of conversations / Total number of users.
<br>
This metric is available only for the Conversation Session.
   </td>
  </tr>
  <tr>
   <td>Average Conversation Length
   </td>
   <td><p>A scorecard that displays the average duration of a conversation (in Minutes).</p> 
<strong>Formula</strong>
<br>
Average Conversation Length = Total conversation length / Total number of conversations.
<br>
Users may apply a filter on Session Status, and in such cases, the calculation is mentioned as below:
<br>
Conversation Length (for completed conversations) = Conversation End timestamp – Conversation Start timestamp.
<br>
Conversation Length (for ongoing conversations) = Dashboard Load timestamp – Conversation Start timestamp.
<br>
This metric is available only for the Conversation Session.
   </td>
  </tr>
  <tr>
   <td>Total  Messages
   </td>
   <td>A scorecard that displays the total number of messages received from the user and sent by the AI Agents. 
<br>
This metric is available only for the Conversation Session.
   </td>
  </tr>
  <tr>
   <td>Average Messages Per Session
   </td>
   <td><p>A scorecard that displays the average number of messages per session.</p>
<strong>Formula</strong>
<br>
Average Message Per Session = Total number of messages / Total number of sessions during the timeframe.
<br>
This metric is available only for the Conversation Session.
   </td>
  </tr>
</table>



## Filter Criteria

The Conversations data can be viewed based on specific filter criteria that can be selected. [Learn more](../dashboard-filters.md).


<table>
  <tr>
   <td><strong>Widget Type</strong>
   </td>
   <td><strong>Session Tags</strong>
   </td>
   <td><strong>User Tags</strong>
   </td>
   <td><strong>Message Tags</strong>
   </td>
  </tr>
  <tr>
   <td>Successful Tasks
   </td>
   <td>Applicable
   </td>
   <td>Applicable
   </td>
   <td>Not Applicable
   </td>
  </tr>
  <tr>
   <td>Sessions
   </td>
   <td>Applicable
   </td>
   <td>Applicable
   </td>
   <td>Not Applicable
   </td>
  </tr>
  <tr>
   <td>Messages & Conversation Sessions
   </td>
   <td>Applicable
   </td>
   <td>Applicable
   </td>
   <td>Applicable for Chats
   </td>
  </tr>
  <tr>
   <td>Intent Recognized vs. Failed
   </td>
   <td>Applicable
   </td>
   <td>Applicable
   </td>
   <td>Not Applicable
   </td>
  </tr>
  <tr>
   <td>Top Tasks
   </td>
   <td>Applicable
   </td>
   <td>Applicable
   </td>
   <td>Not Applicable
   </td>
  </tr>
  <tr>
   <td>Top Channels
   </td>
   <td>Applicable
   </td>
   <td>Applicable
   </td>
   <td>Not Applicable
   </td>
  </tr>
  <tr>
   <td>Agent Transfer
   </td>
   <td>Applicable
   </td>
   <td>Applicable
   </td>
   <td>Not Applicable
   </td>
  </tr>
</table>