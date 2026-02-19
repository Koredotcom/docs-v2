
# Coaching Monitor

The Coaching Monitor feature enables supervisors to track and evaluate the coaching progress of all agents, ensuring coaching effectiveness and facilitating follow-up sessions to assess improvements in assigned attributes. It provides an overview of all coaching assignments assigned by the user and highlights the score trend of the agent attributes that were assigned for coaching, agent score trends, Kore evaluation score, and includes filters that allow supervisors to focus on particular areas of interest. This functionality also allows supervisors to engage in meaningful discussions without needing to examine each agent’s specific attributes in depth.

## Access Coaching Monitor

Navigate to **Quality AI** > **Coach** > **Coaching Monitor**.   
<img src="../coaching-monitor/images/coaching-monitor-landing-page.png" alt="Coaching Monitor" title="Coaching Monitor" style="border: 1px solid gray; zoom:80%;"/>

!!! note

    To track score trends for individual attributes in **Coaching Monitor** across all agents, you must enable **Auto QA** for automated scoring of interactions.

The **Coaching Monitor** page shows the following list of items:

* **Name**: This shows the agent name who has received the coaching assignments.
* **Assigned Date**: This shows the assigned date of the coaching session.
* **Follow-Up Date**: This refers to the scheduled date for a subsequent review or session after an initial coaching assignment.
* **Agent Attributes**: This shows all the listed agent attributes assigned for coaching, while you hover over it. For example, specific skills like product knowledge, compliance, etiquette, behaviors, or performance metrics that are being assessed during coaching sessions for an individual agent.
* **Agent Score Card**: This shows the default scorecard score of the agent. If the **Compare** toggle is enabled, the Spike/Dip indicator shows the trend of score from the coaching assigned date to the current date.
* **Kore Evaluation Score**: This shows the default Kore Evaluation score (Auto QA Score) for the interaction based on the relevant evaluation form. If the **Compare** toggle is enabled, the Spike/Dip indicator shows the trend of score from the coaching assigned date to the current date.
* **Compare**: This presents a detailed breakdown of each agent's coaching progress percentage Spike/Dip indicator (Agent Scorecard and Kore Evaluation Score), emphasizing specific attributes, evaluated by comparing the assigned date to the current date. By enabling this toggle option, you will get the following details on your screen.  

    <img src="../coaching-monitor/images/coaching-monitor-compare.png" alt="Compare" title="Compare" style="border: 1px solid gray; zoom:70%;">

* **Filter**: This provides you with the filter selection criteria.

## Filter Criteria

Upon clicking the **Filter** icon, you will get the following set of parameters to analyze coaching sessions.   
    <img src="../coaching-monitor/images/coaching-monitor-filter.png" alt="Filter" title="Filter" style="border: 1px solid gray; zoom:70%;">

* **Assigned Date**: This refers to the date when the coaching session or performance review was assigned to an agent. Where you need to select either the **Assigned Date** range or **Follow Up Date** range. By default, the assigned date is selected for the last 7 days. You can change and select the desired date range.  
<img src="../coaching-monitor/images/coaching-monitor-filter-assign-date.png" alt="Assigned Date" title="Assigned Date" style="border: 1px solid gray; zoom:70%;">

* **Follow Up Date**: This refers to the scheduled date for a follow-up session or review after the initial coaching. It ensures accountability and allows for the assessment of the agent's progress over time. By default, the current date is selected. You can change and select the desired date range.  
<img src="../coaching-monitor/images/coaching-monitor-filter-follow-up-date.png" alt="Follow Up Date" title="Follow Up Date" style="border: 1px solid gray; zoom:70%;">

* **Attributes**: This refers to specific agent attributes used to evaluate the agents' performance. In this, you can search, and multi-select the different scorecard attributes from the given drop-down list. These attributes are presented as tags that allow you to add and remove individual tags. 
* **Agent Group**: This allows filtering by specific groups of agents, which is based on levels of experience. It helps in targeting coaching efforts to particular agent groups. Provides you to search, and multi-select any agent groups as tags that allow you to add and remove individual tags.
* **Agents**:  This refers to individual agents who are being monitored for coaching. Filtering by agents enables supervisors to focus on specific performance issues or track progress. Provides you to search, and multi-select any agent as tags that allow you to add and remove individual tags.Search and multi-select.
* **Save**: Allows you to apply the same filters in subsequent sessions, and streamline the monitoring process.
* **Clear**: This resets or removes all previous filter selections. It allows you to start fresh, and create new filter combinations without using the previous selections stored.

## Agent Progress

When you click on a specific agent's record in the Coaching Monitor screen, the corresponding agent-specific Coaching Progress status gets displayed, where you can visualize the comparison progress between the previous coaching score with the current coaching score based on the attributes. 
    <img src="../coaching-monitor/images/coaching-monitor-agent-progress.png" alt="Agent Progress" title="Agent Progress" style="border: 1px solid gray; zoom:70%;">

You can view the following coaching progress metrics for the agent:

* All attributes assigned for coaching, along with the details for each attribute.
* Attribute score as of the assigned date (average over the past 7 days from the selected date).
* Current attribute score (average over the past 7 days from the current date).
* Spike/Dip indicator comparing the score at the assigned date to the current score.