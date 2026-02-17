# Agent Leaderboard

This **Agent Leaderboard** helps auditors and managers track agent performance across queues and channels using aggregated metrics. It highlights top and bottom performers, supports targeted coaching, and ensures fair rankings by including both positive and negative scores for a clear view of each agent’s impact.

## Access Agent Leaderboard 

Navigate to **Quality AI** > **ANALYZE** > **Agent Leaderboard**.   
<img src="../agent-leaderboard/images/agent-leaderboard.png" alt="Agent Leaderboard" title="Agent Leaderboard" style="border: 1px solid gray; zoom:100%;">

### Automated Scoring Details

* Enabling the **Agent Scorecard** toggle allows users to view automated agent scoring and leaderboard metrics.

* If disabled, agents cannot start automated scoring or view these metrics.

* If a default scorecard is designated, the system displays the agent’s score based on that default scorecard. If no default is set, the system shows the average score from all applicable scorecards.

## Detailed Metrics 

The **Agent Leaderboard** shows all the agents across queues and channels, which includes the following list of items:

* **Agents**: This shows the agent name and queue that it belongs to.

* **Agent Score Card**: This shows the number of scorecards assigned to the agent and the agent score (across all queues).

* **Total Interactions**: This shows the total number of interactions or overall number of interactions terminated by the agent during the specified time period.

* **Kore Evaluation Score**: This shows the average Kore Evaluation Score against each interaction audited.

* **Supervisor Audit Score**: This shows the average manual audit score of the agents for the audited interactions during the specified time period.

* **Coaching Assignments**: This shows the number of coaching assignments or sessions assigned to the agent for the selected time period.

* **Fail Percentage**: This shows the failure percentage across all interactions.

* **Fatal Interactions**: This shows the fatal interactions count of all agents based on their performance to handle negative scores and leaderboard rankings. 

    !!! Note     
    
        * You must enable the **Agent Scorecard** toggle under **Quality AI General Settings** to activate automated agent scoring. If this setting is disabled, the **Agent Leaderboard** shows blank with no interactions. 
        
        * By default, all scorecards are selected. You can select multiple scorecards to view relevant metrics. Agent scores are aggregated from assigned scorecards. Changing the selection filters agents and scores accordingly, including agent search and selection.
        
        * Metrics are based on the selected date range, which defaults to past seven days.         

## Filter and Sort Types 

* **Sort**: This allows to sort agents by metrics, such as **Agent Scorecard**, **Total Interactions**, **Kore Evaluation Score**, **Supervisor Audit Score**, **Coaching Assignments**, and **Fail Percentage** to identify top or bottom performers.

* **Date and Time Range**: This allows a focused review of performance over specific periods. By default, the Agent Leaderboard calendar displays data of the last seven days.

* **Agent Search**: This allows search agents who are part of the same queues that an agent belongs to.

Filter: This allows you to filter more than one scorecards based on the selected language.

### Filter

Steps to apply language-driven filter,

1. In the **Agent Leaderboard**, click the **Filter** icon.  
<img src="../agent-leaderboard/images/language-driven-filter.png" alt="Filter" title="Filter" style="border: 1px solid gray; zoom:100%;">

1. Select the **Language** to load the agent scorecard associated with it.

1. Select required **Agent Scorecard** that you want to add.

1. Click **Apply**.

    !!! Note     
    
        Only scorecards configured for the available languages get populated in this.

## View Agent-Specific Dashboard Details 

This provides a personalized dashboard for each agent, accessible to both agents and supervisors. Supervisors can review key performance metrics filtered by language, date, and channel, identify coaching opportunities, and assign targeted coaching to improve individual agent performance.

Click an agent’s name on the leaderboard to view the **Agent Dashboard - Supervisor Overview**. This provides detailed performance insights and options to assign coaching sessions as needed.   
<img src="../agent-leaderboard/images/agent-leaderboard-supervisor-overview.png" alt="Agent Dashboard" title="Agent Dashboard" style="border: 1px solid gray; zoom:60%;">

For more information, see [Supervisor View with Agent-Specific Dashboard](../analyze/supervisor-view-agent-specific-dashboard.md) and [Agent Dashboard - Agent View](../analyze/my-dashboard-agent-view.md).