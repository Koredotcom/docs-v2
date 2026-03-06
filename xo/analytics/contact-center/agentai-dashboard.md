# Agent AI Widget Dashboard Overview

The Agent AI Dashboard displays performance metrics of the Agent AI widget and the behavioral trends of the end users (agents and customers). You can filter data by channel or time period. Metrics include total sessions, widget suggestions, relevant suggestions, average widget suggestions used per session, help content and automation agents used to resolve customer issues, search behavior of agents, automation performance results, agent feedback via likes and dislikes, and the overall widget performance feedback (satisfied and unsatisfied percentage).

To view the Dashboard, sign in to [platform](https://platform.kore.ai/){:target="_blank"}, and select **Agent AI** > **Analytics** > **Contact Center** > **Agent AI**.  
<img src="../agentai-dashboard-images/agent-ai-dashboard-1.png" alt="agent-ai-dashboard" title="agent-ai-dashboard" style="border: 1px solid gray; zoom:80%;">

## Dashboard Filters

The Agent AI Dashboard lets you filter the dashboard data over a period of time and of a specific channel.

## Filter by Time Period

You can filter data based on a selected time duration. Select the **Calendar** icon at the top, select one of the options from the list, and then select **Apply**.  
<img src="../agentai-dashboard-images/dashboard-filters-2.png" alt="dashboard-filters" title="dashboard-filters" style="border: 1px solid gray; zoom:80%;">

* **Today**: Default value. It shows data until the present time (minute).
* **Yesterday**: Data of the previous day.
* **Last 7 Days**: Data of the last one week.
* **Last 15 Days**: Data of the last 15 days.
* **Last 30 Days**: Data of the last 30 days.
* **Custom Range**: Data of the selected “From” and “To” dates. This duration shouldn’t exceed 60 days.

## Filter by Channel

The default setting of the Agent AI Dashboard shows the combined data of all three channels–Voice, Chat, and Email. To filter data by channel, select the **All Channels** button on the top-right corner, and then select against a channel to select or clear it from the dropdown list.  
<img src="../agentai-dashboard-images/dashboard-channel-filters-3.png" alt="dashboard-channel-filters" title="dashboard-channel-filters" style="border: 1px solid gray; zoom:60%;">

### Data on Widget Performance and Agent/Customer Behavior

This section lets you view and filter the Agent AI Widget’s performance data.

## Total Sessions

It indicates the total number of uninterrupted interactions between the AI Agents and the end user (customer or agent) over a selected time period on a selected channel. Each session has been set for 15 minutes. If a session lasts beyond 15 minutes but less than 30 minutes, it gets calculated as two sessions. The red superscripted percentage with an arrow symbol indicates a decrease, and the green one indicates an increase in the percentage of number of sessions over a selected time period over a previous session. For example, a number 532 and a 5.2% with a red downwards arrow implies 532 sessions over the interval shown (say, a week) and a 5.2% decrease over the previous week.  
<img src="../agentai-dashboard-images/dashboard-total-sessions-4.png" alt="dashboard-total-sessions" title="dashboard-total-sessions" style="border: 1px solid gray; zoom:40%;">

## Total Suggestions

It indicates the total number of suggestions from the Agent AI Widget (for example, “ask customer” and “tell customer”) to the agent. These suggestions include answers, automations, and FAQs. The red and green percentages indicate a decrease and increase in numbers, similar to the [Total Sessions](#total-sessions) section.  
<img src="../agentai-dashboard-images/dashboard-total-suggestions-5.png" alt="dashboard-total-suggestions" title="dashboard-total-suggestions" style="border: 1px solid gray; zoom:60%;">

## Relevant Suggestions

The percentage of suggestions used by agents. This number is derived by dividing the total suggestions used by agents with the total suggestions, multiplied by 100.  
<img src="../agentai-dashboard-images/dashboard-relevant-suggestions-6.png" alt="dashboard-relevant-suggestions" title="dashboard-relevant-suggestions" style="border: 1px solid gray; zoom:40%;">

## Average Suggestions Used per Session

The average number of suggestions used per each session. This number is derived by dividing the total number of Agent AI Widget suggestions by the number of sessions.  
<img src="../agentai-dashboard-images/dashboard-average-suggestions-used-7.png" alt="dashboard-average-suggestions-used" title="dashboard-average-suggestions-used" style="border: 1px solid gray; zoom:80%;">

## What are Your Customers Looking for

This section shows which Answers, FAQs, Dialogue Tasks, web suggestions, and other data sources are used to fulfill a customer’s needs. This list appears in popularity order–the most used item appears at the top. You can filter data based on values as All, Agent Initiated, and Agent AI Suggested values, with the default selection being All. You have four tabs at the top–All, Answers, FAQs, Automations, and Others–with All being the default tab. Select the respective tabs to view the top four Answers, FAQs, Automations, or others. Each item on the list has a number on its right that indicates the number of times that item has been invoked or used, and the percentage value is the number of times invoked or used divided by the number of times invoked for each tab.  
<img src="../agentai-dashboard-images/dashboard-what-are-customers-looking-for-8.png" alt="what-are-customers-looking-for" title="what-are-customers-looking-for" style="border: 1px solid gray; zoom:60%;">

## What are your Agents looking for

This section shows what the agents are searching for. Agent AI gets this data through the **Ask a question** search box. Every time an agent enters an item in this search box, Agent AI records the data. The **Total Search Requests** shows the number of times agents have had search requests. The green and red percentage colors with an arrow symbol are similar to the [Total Sessions](#total-sessions) section. By default, the data is displayed in WordCloud, and you can change it to Tabular form.  
<img src="../agentai-dashboard-images/dashboard-what-are-agents-looking-for-9.png" alt="what-are-agents-looking-for" title="what-are-agents-looking-for" style="border: 1px solid gray; zoom:80%;">

## Automation Performance

This section shows the performance results (successfully completed, error encountered, terminated, etc.) of all Agent AI automations. The data is represented on a pie chart. To read the data, use the following pointers:

* The number at the center of the pie chart depicts the total number of all automation invocations.
* The pie chart is divided into three color-coded sections–Successfully Completed (green), Terminated or Error (red), and Other (dark blue).
* Hover over any section of the pie chart to see the top three automations of that result, with invocations percentage over total invocations.
* On the right, you find the total number and percentage out of the sum total for each item.  
<img src="../agentai-dashboard-images/dashboard-automation-performance-data-10.png" alt="automation-performance-data" title="automation-performance-data" style="border: 1px solid gray; zoom:80%;">

## Agent Feedback

This section shows the top three most disliked automations by agents in descending order of dislike percentage. Agent AI gets this data by capturing the likes or dislikes at the end of a dialog task. You can have a detailed summary of Agent Feedback for dialog tasks, including “Not Helpful” feedback and Additional Comments. The detailed view of the “Not Helpful” feedback includes Responses, Additional Comments, and Counts. You must select **View All** to view further details of a dialog task.

* Select a **dialog task** under **Automation Name**.
* Select the **eye-like** icon under **Additional Comments** to access all comments linked to their conversation IDs.
* Select the **Conversation ID** link to go to the respective conversation.
* Select the **Counts** number to access the **Conversation ID**, **Date**, **Time**, and **Agent Name/ID**.
* Use the “search” button to find conversations by agent name, agent ID, or conversation ID.
* If the agent’s name is provided, the agent column appears for searching; otherwise, the conversation ID is available.  
<img src="../agentai-dashboard-images/dashboard-agent-feedback-data-11.png" alt="agent-feedback-data" title="agent-feedback-data" style="border: 1px solid gray; zoom:80%;">

## Average Widget Usage (Third-Party Agent Desktop)

This feature gives a graphical representation of the average amount of time agents spend on the Agent AI widget and is applicable only for the third-party agent desktops. You can use the Compare button to compare the data you have selected for a time period in an “n-1” formula. For example, if you have selected “30 days,” last 30 days’ data is compared with the previous 30 days’ data.  
<img src="../agentai-dashboard-images/average-widget-usage-12.png" alt="average-widget-usage" title="average-widget-usage" style="border: 1px solid gray; zoom:80%;">

## Overall Widget Feedback

The **Overall Widget Feedback** section provides a summary of agent feedback on the Agent AI widget. It shows the Total Feedback, Participation Rate percentage, and the Satisfied versus Unsatisfied feedback percentage. At the individual conversation level, it provides details such as agent names, feedback reasons, comments, and conversation transcripts. This information helps administrators monitor agent experience, track areas where the widget performs well, and prioritize improvements to enhance usability and effectiveness.  
<img src="../agentai-dashboard-images/Dashboard-overall-widget-feedback.png" alt="Dashboard-overall-widget-feedback" title="Dashboard-overall-widget-feedback" style="border: 1px solid gray; zoom:80%;">  

In the above screenshot:  

* The first section on the left shows the total number of agent feedback responses for the selected time period, along with the number and percentage of satisfied and unsatisfied feedback. Hovering over the color-coded chart (yellow for unsatisfied and green for satisfied) displays the same details. The percentages are calculated using the following formulas:
    * **Unsatisfied**(%) = (Total unsatisfied feedback ÷ Total feedback) × 100
    * **Satisfied**(%) = (Total satisfied feedback ÷ Total feedback) × 100
* The second section on the top-right shows the Participation Rate, Satisfied, and Unsatisfied percentages. Note that you must count multiple feedback entries for a conversation as one while calculating the Participation Rate percentage. The formula is:
    * **Participation Rate** (%) = (Conversations with feedback ÷ Total conversations) x 100
* The third section shows conversation IDs, the number of agent feedback responses, and the percentage of satisfied and unsatisfied feedback for each conversation.
    * To view the details of a conversation, select the **external link icon** next to a conversation ID.  
     <img src="../agentai-dashboard-images/dashboard-conversation-details.png" alt="Dashboard-conversation-details" title="Dashboard-conversation-details" style="border: 1px solid gray; zoom:80%;">  
    * Details such as agent name, selected feedback reason, and added comments display along with the actual conversation:  
        <img src="../agentai-dashboard-images/dashboard-conversationid-level-feedback-details.png" alt="dashboard-conversationid-level-feedback-details" title="dashboard-conversationid-level-feedback-details" style="border: 1px solid gray; zoom:80%;">
