# Queues & Agents Dashboard

The Queues & Agents dashboard displays the Overview, Efficiency, Agent Performance, and Queue Performance metrics for the selected period.

**To view the Queues & Agents dashboard, follow the steps**:

1. Select **Analytics** on the left navigation pane. The **Analytics** panel displays with the list of reports.

    <img src="../images/navigating-to-queues-agents-report.png" alt="Navigating to Queues Agents Report" title="Navigating to Queues Agents Report" style="border: 1px solid gray; zoom:80%;"/>

2. Select **Queues & Agents** under the **Contact Center** section of the **Analytics** panel. The **Queues & Agents** dashboard displays on the right side of the page.

## Time Selection

You can filter Queues & Agents data for a specific time range. You can choose a particular time range and select Apply.

<img src="../images/time-selection.png" alt="Time Selection" title="Time Selection" style="border: 1px solid gray; zoom:80%;"/>

## Filters

To avoid repeatedly filtering your choices, you can create and save multiple filters on the Queues & Agents tab.

### Create Filter

1. Select **Filter**.

2. Select **New Filter**.

3. Select the Queues, Channels, Direction, and Agents.

    <img src="../images/create-filter-3.png" alt="Create Filters 3" title="Create Filters 3" style="border: 1px solid gray; zoom:80%;"/>

   Select from the following available options:

   * Clear: Clears the selection.
   * Save & Apply: Saves the filter, and it appears when selected.
   * Apply: Applied for one instance and not saved.

4. Select **Save & Apply**.

5. On the pop-up window, enter a name for the filter and select **Save & Apply**.

A confirmation message displays, and creates the filter.

### Edit Filter

Steps to edit a filter:

1. Select the **Filters** tab. The **Saved Filter** name appears.

2. Select **Edit**.

3. Make the necessary changes and select **Save & Apply**.

A confirmation message displays, and updates the filter.

### Copy Filter

1. Select **Duplicate**.

2. On the **Rename Filter** window, enter a name for the filter and select **Save**.

A confirmation displays and creates a copy of the filter.

### Mark as Default

1. Select **Mark as Default**.

2. A confirmation message displays and marks the filter as default.

### Delete Filter

1. Select **Delete**.

2. A Delete Filter message appears. Select **Delete**.

A confirmation message displays and deletes the filter.

## Overview of Incoming Conversations

This section displays the metrics for all conversations (phone, chat, and email):

* Total Conversations-Total conversation count for the selected time range.
* In Queue-Count conversations in a queue.
* Ongoing-Count of ongoing conversations.
* Idle-Count of Idle conversations.
* Expired-Count of expired conversations.
* Closed-Count of closed conversations.

COMPARE: The COMPARE toggle compares all historical metrics over a previous equal-sized time range. For example, if the Average Handle Time is 12m 2s for the last 30 days the previous Average Handle Time was 6m 1s. If you select Compare, an increase of 50% over the last 30 days displays.

Transfer Rate-Percentage of transferred conversations.

Abandon Rate-Percentage of abandoned conversations.

Clicking the percentage value on the Abandon Rate widget shows the following information:

* `Abandoned while in Queue`-Count of conversations (NNNN) that were abandoned while waiting in the queue.
* `Abandoned while with Agent`-Count of conversations (NNNN) that where abandoned while being attended by an Agent.

    <img src="../images/abandon-rate.png" alt="Abandon Rate" title="Abandon Rate" style="border: 1px solid gray; zoom:80%;"/>

The formula for measuring the Abandon Count:

* For Digital Channels:
`Abandon Count` = User Abandons While Waiting in Queue + Conversations With Agent that went through the Idle-Expired Sequence.
* For Voice Channels:
`Abandon Count` = User Abandons While Waiting in Queue + Conversations With Agent where User Disconnects While Agent has put the call on hold.

Overdue-This live metric shows the number of conversations in the overdue state. It displays the number based on all the conversations associated with the selected queues and agents.

System Terminations: Count of conversations terminated by the System. This metric appears based on selected queues only. Clicking on the number displays the details of the system terminations.

<img src="../images/system-terminations.png" alt="System Terminations" title="System Terminations" style="border: 1px solid gray; zoom:80%;"/>

Average Speed to Answer-The average time it takes an agent to respond to a conversation assigned to them.

Average Handling Time-The average handling time of the conversations.

Queue Load-Displays the current load on the system as a percentage of its capacity. This is a live metric.

Resolved Rate-Percentage of resolved conversations.

<img src="../images/resolved-rate.png" alt="Resolved Rate" title="Resolved Rate" style="border: 1px solid gray; zoom:80%;"/>

## Efficiency

This section displays individual metrics for all conversations (call, chat, email):

Voice Metrics: The following voice conversation metrics appear in this section:

* Average Speed to Answer  
* Average Handle Time  
* Average Pick-up Time  
* Average Engagement time  
* Average Talk Time  
* Average Mute/Hold Time  

Chat Metrics: The following chat conversation metrics appear in this section: 

* Average Speed to Answer  
* Average Handle Time  
* Average First Response Time  
* Average Agent Response Time  
* Average Customer Response Time  

Transfers: The following transfer metrics appear in this section: 

* Transfer Rate  
* Transfer Rate  
* Call Transfers  
* Chat Transfers

**Skills In Queue**: Displays counts per skill of all conversations in the queue (active or waiting).

**Top Skills**: Displays the number of conversations per skill for the selected time range.

Conversations by &lt; List-of-all-Disposition Sets>: Displays the Conversations by &lt;List-of-all-Disposition-Sets> to let users to select a Disposition Set from the list.

* The Resolution Disposition Set is marked as default and appears as the default option in Disposition & Notes on the Live Interactions pane of the Agent Console. For additional information on Disposition Sets, refer to Disposition Sets.

* The multi-colored progress bar appears only for the codes in the selected Disposition Set.
* Separate progress bars appear under each Disposition Code.

**Average Satisfaction Rating**: Displays the customer satisfaction rating based on the count of survey responses.

   <img src="../images/average-satisfaction-rating.png" alt="Average Satisfaction Rating" title="Average Satisfaction Rating" style="border: 1px solid gray; zoom:80%;"/>

**Customer Satisfaction by Channel**: This section displays channel-wise customer satisfaction metrics based on survey responses.

   <img src="../images/customer-satisfaction-by-channel.png" alt="Customer Satisfaction by Channel" title="Customer Satisfaction by Channel" style="border: 1px solid gray; zoom:80%;"/>

## Agent Performance

This section displays agent performance metrics for all conversations (call, chat, e-mail).

   <img src="../images/agent-performance.png" alt="Agent Performance" title="Agent Performance" style="border: 1px solid gray; zoom:80%;"/>

<table>
  <tr>
   <td colspan="2" >Agent Performance Metrics
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Offered
   </td>
   <td>Number of conversations that were assigned to the agent.
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Answered
   </td>
   <td>Number of conversations answered by the agent.
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Unanswered
   </td>
   <td>Number of conversations assigned but not answered by the agent.
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Abandoned
   </td>
   <td>Number of conversations where the user dropped off while conversing with the agent.
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Transferred
   </td>
   <td>Number of conversations that got transferred by the agent.
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Logged In
   </td>
   <td>Agent Login time between start and end filters.
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Closed/Hour
   </td>
   <td>Number of conversations closed per hour.
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>AHT
   </td>
   <td>Average Handle Time of the conversation by the agent.
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>CSAT
   </td>
   <td>Average CSAT score the of agent.
   </td>
   <td>NA
   </td>
  </tr>
</table>

## Queue Performance

This section displays queue performance metrics for all conversations (call, chat, e-mail).

   <img src="../images/queue-performance.png" alt="Queue Performance" title="Queue Performance" style="border: 1px solid gray; zoom:80%;"/>

<table>
  <tr>
   <td colspan="3" >Queue Performance Metrics
   </td>
  <tr>
   <td>Incoming
   </td>
   <td>NA
   </td>
   <td>Incoming = InQueue + Active + Idle + Expired + Completed + Transferred Out (The Q&A dashboard shows all transferred, even those back to the same queue).

   Completed = AbandonedInQueue + SystemTerminated + All-Conversations-With-Resolutions.

   **Note**: This formula is applicable when a call doesn't return to the same queue multiple times. If it does, it gets counted multiple times and doesn't add up correctly.

   **Question**. Does the Incoming count include Inbound and Outbound calls?<br>
   **Answer**: Yes, if the conversations (calls/chats) entered that queue.

   **Question**. Is the Incoming call count taken from the queue?<br>
   **Answer**: Yes. However, for `No-Filters`, the incoming call count includes conversations directly transferred from the AI Agents to the Agent, without entering a queue.
   </td>
  </tr>
  <tr>
   <td>Answered
   </td>
   <td>NA
   </td>
   <td>Number of conversations answered by the agent in the queue.
   </td>
  </tr>
  <tr>
   <td>Abandoned
   </td>
   <td>NA
   </td>
   <td>Number of conversations where the user dropped off while conversing with the agent in the queue.
   </td>
  </tr>
  <tr>
   <td>Transferred
   </td>
   <td>NA
   </td>
   <td>Number of conversations that got transferred from the queue.
   </td>
  </tr>
  <tr>
   <td>Voicemails
   </td>
   <td>NA
   </td>
   <td>Number of voicemails in the queue.
   </td>
  </tr>
  <tr>
   <td>Terminated
   </td>
   <td>NA
   </td>
   <td>Conversations (call/chat) terminated by the system.

This can happen when no agents are available, outside of working hours, voice gateway failures, network errors, or other errors.
   </td>
  </tr>
  <tr>
   <td>Closed
   </td>
   <td>NA
   </td>
   <td>Conversations (calls/chats) that an agent has properly closed.

The agent ends the conversation, performs any After-call work, assigns dispositions, writes any notes, and clicks “Close."
   </td>
  </tr>
  <tr>
   <td>ASA
   </td>
   <td>NA
   </td>
   <td>Average Speed to Answer by the agent in the queue.
   </td>
  </tr>
  <tr>
   <td>AHT
   </td>
   <td>NA
   </td>
   <td>Average Handle Time of conversation by the agent in the queue.
   </td>
  </tr>
  <tr>
   <td>CSAT
   </td>
   <td>NA
   </td>
   <td>Average CSAT score in the queue.
   </td>
  </tr>
</table>

## About Queues and Agents Fields

<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Filtered by Queues</strong>
   </td>
   <td><strong>Filtered by Agents</strong>
   </td>
  </tr>
  <tr>
   <td>Total Conversations
   </td>
   <td>The number of conversations that have entered a queue.
   </td>
   <td>The number of interactions that an agent <em>accepts</em>.
   </td>
  </tr>
  <tr>
   <td>In Queue (live)
   </td>
   <td>The number of conversations currently waiting in a queue.
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Ongoing (live)
   </td>
   <td>Conversations that are in progress with agents from this queue.
   </td>
   <td>Conversations that are in progress with selected agents.
   </td>
  </tr>
  <tr>
   <td>Idle (live)
   </td>
   <td>Conversations where the customer is silent for a configured period (for example, 5 minutes).
   </td>
   <td>Conversations where the customer is silent for a configured period (for example, 5 minutes).
   </td>
  </tr>
  <tr>
   <td>Expired (live)
   </td>
   <td>Conversations where the customer is silent for a configured period (for example, 10 minutes).
   </td>
   <td>Conversations where the customer is silent for a configured period (for example, 10 minutes).
   </td>
  </tr>
  <tr>
   <td>Closed
   </td>
   <td>The number of interactions that entered the queue and were ended by an agent in the queue, or closed by the system while in the queue.
   </td>
   <td>The number of interactions ended by a selected agent.
   </td>
  </tr>
  <tr>
   <td>Transfer Rate
   </td>
   <td>Formula = Transfers / (Total Conversations) x 100 Transfers = Number of interactions where an Agent in this queue transferred the call (to another Agent, or to a queue).
   </td>
   <td>Formula = Transfers / (Total Conversations) x 100 Transfers = Number of interactions where a selected Agent transferred the call (to another Agent, or to a queue).
   </td>
  </tr>
  <tr>
   <td>Abandon Rate
   </td>
   <td>Formula = Abandonments / Closed x 100 Abandonments = Number of Interactions where the end-user prematurely terminates the call. All interactions that were abandoned while in the selected queue, or while being handled by an agent in the queue.
   </td>
   <td>Formula = Abandonments / Closed x 100 Abandonments = Number of Interactions where the end-user prematurely terminates the call. All interactions that had been abandoned while being handled by the selected agent.
   </td>
  </tr>
  <tr>
   <td>Average Speed to Answer
   </td>
   <td>Formula = Sum of (Queue Wait time) / Closed Queue Wait time For each interaction = Accepted (by Agent) time-Queue Entry Time.
   </td>
   <td>Formula = Sum of (Queue Wait time) / Closed Queue Wait time For each interaction = Accepted (by Agent) time <em>–</em> Queue Entry Time.
   </td>
  </tr>
  <tr>
   <td>Average Handle Time
   </td>
   <td>Formula = For All Calls (Talk time + Hold Time + ACW time)

For Chats, Hold Time = 0.0

ACW time = Time spent in post-call work by the Agent.
   </td>
   <td>Formula = For All Calls (Talk time + Hold Time + ACW time) For Chats, Hold Time = 0.0

ACW time = Time spent in post-call work by the Agent.
   </td>
  </tr>
  <tr>
   <td>Queue Load
   </td>
   <td>Formula: 100 x (Number of interactions in Active or Waiting states <em>divided</em> by Handling Capacity of All Agents in Queue).
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Resolved Rate
   </td>
   <td>The number of calls resolved in the queue <em>/</em> the number of Closed calls. This number is misleading if you are using non-default disposition sets.
   </td>
   <td>The number of calls resolved by this agent / the number of Closed calls. This number is misleading if you are using non-default disposition sets.
   </td>
  </tr>
  <tr>
   <td>Idle (live)
   </td>
   <td>Conversations where the customer has been silent for a configured period (for example, 5 minutes).
   </td>
   <td>Conversations where the customer has been silent for a configured period (for example, 5 minutes).
   </td>
  </tr>
  <tr>
   <td colspan="2" >Voice Metrics
   </td>
  </tr>
  <tr>
   <td>Average Speed to Answer
   </td>
   <td>Formula = Sum of (Queue Wait time) across all conversations / Closed Queue Wait time For each interaction = Accepted (by Agent) time-Queue Entry Time.
   </td>
   <td>Formula = Sum of (Queue Wait time) across all conversations / Closed Queue Wait time For each interaction = Accepted (by Agent) time-Queue Entry Time.
   </td>
  </tr>
  <tr>
   <td>Average Handle Time
   </td>
   <td>Formula: Handle Time of Each Interaction / Number of Closed Interactions.

Handle Time = Talk Time + Hold Time + ACW time.
   </td>
   <td>Formula: Handle Time of Each Interaction / Number of Closed Interactions.

Handle Time = Talk Time + Hold Time + ACW time
   </td>
  </tr>
  <tr>
   <td>Average Pick-up Time
   </td>
   <td>Formula: Pick-up time of each Interaction / Number of Closed Interactions. For interaction in a queue, Pick Up Time = Time when Agent Accepted-Time when Agent was Assigned the interaction.
   </td>
   <td>Formula: Pick-up time of each Interaction / Number of Closed Interactions. For interaction in a queue, Pick Up Time = Time when Agent Accepted-Time when Agent was Assigned the interaction.
   </td>
  </tr>
  <tr>
   <td>Average Engagement Time
   </td>
   <td>Engagement Time = Talk Time + Hold Time.
   </td>
   <td>Engagement Time = Talk Time + Hold Time.
   </td>
  </tr>
  <tr>
   <td>Average Talk Time
   </td>
   <td>Average talk time across all voice calls.

Talk time = Time for which the agent and caller were in active conversation.
   </td>
   <td>Average talk time across all voice calls.

Talk time = Time for which the agent and caller were in active conversation.
   </td>
  </tr>
  <tr>
   <td>Average Speed to Answer
   </td>
   <td>Formula = Sum of (Queue Wait time) across all conversations / Closed Queue Wait time For each interaction = Accepted (by Agent) time-Queue Entry Time.
   </td>
   <td>Formula = Sum of (Queue Wait time) across all conversations / Closed Queue Wait time For each interaction = Accepted (by Agent) time-Queue Entry Time.
   </td>
  </tr>
  <tr>
   <td>Average Mute/Hold Time
   </td>
   <td>Average hold time across all voice calls.
   </td>
   <td>Average hold time across all voice calls.
   </td>
  </tr>
  <tr>
   <td colspan="2" >Chat Metrics
   </td>
  </tr>
  <tr>
   <td>Average Speed to Answer
   </td>
   <td>Formula = Sum of (Queue Wait time) across all conversations / Closed Queue Wait time For each interaction = Accepted (by Agent) time-Queue Entry Time.
   </td>
   <td>Formula = Sum of (Queue Wait time) across all conversations / Closed Queue Wait time For each interaction = Accepted (by Agent) time-Queue Entry Time.
   </td>
  </tr>
  <tr>
   <td>Average Handle Time
   </td>
   <td>Formula: Handle Time of Each Interaction / Number of Closed Interactions.

Handle Time = Talk Time + ACW time.
   </td>
   <td>Formula: Handle Time of Each Interaction / Number of Closed Interactions.

Handle Time = Talk Time + ACW time.
   </td>
  </tr>
  <tr>
   <td>Average First Response Time
   </td>
   <td>Formula: First Response Time of Each Interaction / Number of Closed Interactions.

First Response Time = From the time the Agent accepted the Interaction to the time the Agent responded with their first message.
   </td>
   <td>Formula: First Response Time of Each Interaction / Number of Closed Interactions.

First Response Time = From the time the Agent accepted the Interaction to the time the Agent responded with their first message.
   </td>
  </tr>
  <tr>
   <td>Average Agent Response Time
   </td>
   <td>Average of all durations between a Customer’s message on a chat, to the corresponding response from the Agent.

When there is a continuous stream of messages from either party, the earliest message is taken into account for calculation.
   </td>
   <td>Average of all durations between a Customer’s message on a chat, to the corresponding response from the Agent.

When there is a continuous stream of messages from either party, the earliest message is taken into account for calculation.
   </td>
  </tr>
  <tr>
   <td>Average Customer Response Time
   </td>
   <td>Average of all durations between an Agent’s message on a chat, to the next message from the end user.

When there is a continuous stream of messages from either party, the earliest message is taken into account for calculation.
   </td>
   <td>Average of all durations between an Agent’s message on a chat, to the next message from the end user.

When there is a continuous stream of messages from either party, the earliest message is taken into account for calculation.
   </td>
  </tr>
  <tr>
   <td colspan="2" >
   </td>
  </tr>
  <tr>
   <td>Transfer Rate
   </td>
   <td>The number of conversations transferred from the queue (even if it's to the same queue) / Total Conversations.
   </td>
   <td>The number of conversations transferred from the Agent / Total Conversations.
   </td>
  </tr>
  <tr>
   <td>Total Transfers
   </td>
   <td>The number of conversations transferred from the queue (even if it's to the same queue).
   </td>
   <td>The number of conversations transferred from the Agent.
   </td>
  </tr>
  <tr>
   <td>Call Transfers
   </td>
   <td>Fraction of Total Transfers (above) from voice calls.
   </td>
   <td>Fraction of Total Transfers (above) from voice calls.
   </td>
  </tr>
  <tr>
   <td>Chat Transfers
   </td>
   <td>Fraction of Total Transfers (above) from digital channels.
   </td>
   <td>Fraction of Total Transfers (above) from digital channels.
   </td>
  </tr>
  <tr>
   <td>Skills in Queue (live)
   </td>
   <td>The number of conversations in a selected queue (active or waiting) associated with each skill. Top 5 skills shown.
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Top Skills
   </td>
   <td>The number of closed conversations entering selected queues associated with each skill.
   </td>
   <td>The number of closed conversations accepted by selected agents associated with each skill.
   </td>
  </tr>
  <tr>
   <td>Conversations by &lt;Disposition Set>
   </td>
   <td>The number of closed conversations that were assigned a particular disposition code. Given that a conversation may be assigned to multiple disposition codes (one from each Set), changing the Disposition Set will show a different set of codes and the number of conversations associated with them.
   </td>
   <td>The number of closed conversations that were assigned a particular disposition code. Given that a conversation may be assigned to multiple disposition codes (one from each Set), changing the Disposition Set will show a different set of codes and the number of conversations associated with them.
   </td>
  </tr>
  <tr>
   <td>Average Satisfaction Rating
   </td>
   <td>Formula: Sum of all CSAT ratings given / Number of conversations where a CSAT rating was given.
   </td>
   <td>Formula: Sum of all CSAT ratings given / Number of conversations where a CSAT rating was given.
   </td>
  </tr>
  <tr>
   <td>Customer Satisfaction by Channel
   </td>
   <td>Average CSAT rating <em>by Channel</em>.
   </td>
   <td>Average CSAT rating <em>by Channel</em>.
   </td>
  </tr>
</table>