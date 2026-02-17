# Supervisor View with Agent-Specific Dashboard

The Agent-Specific Dashboard provides detailed Sentiment and Resolution insights at the L3 topic level, giving supervisors and agents a deeper view into performance and coaching needs. Each agent receives a personalized dashboard that supervisors can use to assess key metrics, identify areas of improvement, and create targeted coaching plans. Supervisors can filter data by Language, [Date Range](../analyze/dashboard.md#date-range){:target="_blank"}, and [Channel](../analyze/dashboard.md#channel){:target="_blank"} (voice or chat) to analyze performance trends and focus on the most relevant interactions. 

## Access Agent Dashboard

A supervisor can access the agent-specific dashboard in the following ways:

**Approach 1:**

1. Navigate to **Quality AI** > **ANALYZE** > **Dashboard** > **Agent Leaderboard**.  
<img src="../agent-leaderboard/images/dashboard-agent-leaderboard-view.png" alt="Overview" title="Overview" style="border: 1px solid gray; zoom:100%;">  

2. From the **Agent Leaderboard** section, select any agent to view the agent-specific dashboard **Overview** screen.  
<img src="../agent-leaderboard/images/dashboard-supervisor-view.png" alt="Overview" title="Overview" style="border: 1px solid gray; zoom:100%;">

**Approach 2:**

1. Navigate to **Quality AI** > **ANALYZE** > **Agent Leaderboard**.   
<img src="../agent-leaderboard/images/agent-leaderboard-agent-selection.png" alt="Agent Leaderboard" title="Agent Leaderboard" style="border: 1px solid gray; zoom:100%;">

2. From the **Agent Leaderboard** section, select any agent to view the following agent-specific dashboard **Overview** screen.   
<img src="../agent-leaderboard/images/agent-leaderboard-supervisor-overview.png" alt="Overview" title="Overview" style="border: 1px solid gray; zoom:100%;">

    !!! note

        Only authorized users can view automated scores and access QA features. 
        To enable this functionality, go to **Quality AI** > **Settings** and turn on the following toggle options:

        * **Auto QA**, 
    
        * **Agent Score Card**
    
        * **Agent Access to Scored Interactions** 
    
The **Overview** tab provides the supervisor’s view of the agent dashboard for each agent and includes the following: 

### Filter Options

The Dashboard metrics lets you filter and refine the data displayed across the entire Agent Dashboard.

#### All Languages

You can search and filter by language across the dashboard and apply the language-specific metrics. You can select more than one language or all languages simultaneously. The system calculates these metrics using the languages configured at the evaluation metric level under **Language Settings**.  

!!! note

    By default, all languages are selected when the **All Languages** filter is applied. Metrics are only displayed for languages configured at the evaluation metric level under **Configuration** > **Settings**.

Applying a language filter updates the following widget metrics to show data for the selected languages.

* **Total Audits**: Shows audit count only for selected languages.

* **Avg. Audits per Agent:** Updates to show average for selected languages.

* **Evaluation Score** (Manual vs. Auto QA Score): Updates both Manual and Auto QA scores for selected languages.

* **Fail Statistics (Evaluation Form)**: Shows failure data for selected languages.

* **Performance Monitor (Evaluation Form)**: Updates performance metrics for selected languages.

### Agent Performance Metrics

The following metrics help evaluate agent performance and coaching progress, filtered by selected languages and date range:

* **Total Interactions**: Displays the total interactions completed by the agent during the selected time.     
    <img src="../agent-leaderboard/images/total-interactions.png" alt="Scorecard Trend" title="Scorecard Trend" style="border: 1px solid gray; zoom:100%;">

* **Kore Evaluation Score**: Displays the average Kore evaluation score of the agent for the calls they have completed during the selected date range.    
    <img src="../agent-leaderboard/images/kore-evaluation-score.png" alt="Kore Evaluation Score" title="Kore Evaluation Score" style="border: 1px solid gray; zoom:100%;">

* **No. of Supervisor Audits**: Displays the total number of manual audits completed for the interactions completed by that agent for the selected date range.     
    <img src="../agent-leaderboard/images/No-of-supervisor-audits.png" alt="No. of Supervisor Audits" title="No. of Supervisor Audits" style="border: 1px solid gray; zoom:100%;">

* **Supervisor Audit Score**: Displays the Average manual audit score for the audited interactions for the selected date range.     
    <img src="../agent-leaderboard/images/supervisor-audit-score.png" alt="Supervisor Audit Score" title="Supervisor Audit Score" style="border: 1px solid gray; zoom:100%;">

* **Total Coaching Assignments**: Displays the total number of coaching sessions assigned to the agent over a selected date range.     
    <img src="../agent-leaderboard/images/total-coaching-assignments.png" alt="Total Coaching Assignments" title="Total Coaching Assignments" style="border: 1px solid gray; zoom:100%;">

* **No. of Fails**: Displays the total number of scorecard failures for the agent over a selected date range.    
    <img src="../agent-leaderboard/images/No-of-fails.png" alt="No. of Fails" title="No. of Fails" style="border: 1px solid gray; zoom:100%;">

* **Fatal Interactions**: Displays an agent’s interactions that failed critical compliance or quality checks during a selected date range, helping supervisors to identify and address high-risk cases.         
    <img src="..//agent-leaderboard/images/fatal-interactions.png" alt="Fatal Interactions" title="Fatal Interactions" style="border: 1px solid gray; zoom:80%;">

### Coaching Insights

* **Select Scorecard**: Lets you choose specific scorecard templates to filter the Coaching Insights analysis and populate metrics of that scorecard type. 

* **Strongest Attributes**: Based on the scorecard selected, it displays the bottom five attributes with the lowest scores from the agent’s scorecards during the specified date range. The system shows only attributes with scores under 80 as areas for improvement.     
<img src="../agent-leaderboard/images/strongest-attributes.png" alt="Coaching Insights" title="Coaching Insights" style="border: 1px solid gray; zoom:80%;">

* **Opportunity Areas**: The system displays the bottom five attributes with the lowest scores from the agent’s scorecards during the selected date range and shows only attributes with scores under 80 as areas for improvement.    
    <img src="../agent-dashboard/images/scorecard-selection-for-coaching-insights.png" alt="Opportunity Areas" title="Opportunity Areas" style="border: 1px solid gray; zoom:80%;">

### Sentiment Insights

This feature provides supervisors with a quick, visual understanding of agent sentiment across all assigned conversations. It highlights overall sentiment performance and identifies the best and worst customer experience areas using color-coded charts and topic-level breakdowns. This helps supervisors spot issues, provide guided coaching, and improve service quality.

Supervisors can view:

* **Average Sentiment Score**: Shows the agent’s average sentiment score across all topics, including positive and negative interaction counts and trend indicators.

* **Top 5 Highest Sentiment L3 Topics**: Shows the agent’s top five L3 topics with the highest sentiment in descending order.

* **Top 5 Lowest Sentiment L3 Topics**: Shows the agent’s top five L3 topics with the lowest-sentiment L3 topics in ascending order.

* **Clear Visual Breakdowns**: Shows the topic-level counts, sentiment splits, and insights when you hover over the doughnut chart.

* **Color-Coded Patterns**: Shows the visual patterns (green = positive, red = negative) for instant understanding of customer mood.
 
* **Drill-Down Insights**:

    * **View All Topics**: Opens the Topic Discovery page with all filters pre-applied.

    * **View Conversations**: Opens the Conversation Mining page filtered to the exact topic selected. 

    * **Identify Performance Gaps**: Provides a comparison view to identify the highest and the lowest sentiment.

    * **Spot Coaching Opportunities**: Enables you to make informed decisions based on negative sentiment drivers or recurring customer frustrations.

    * **Monitor Trends**: Lets you track agent sentiment patterns in conversation.   
    <img src="../dashboard/images/sentiment-insights.png" alt="Sentiment Insights" title="Sentiment Insights" style="border: 1px solid gray; zoom:80%;">

### Resolution Insights

This feature helps supervisors assess how well an agent resolves customer issues. It displays the agent’s average resolution rate and highlights the top 5 highest and lowest resolution L3 topics.

Supervisors can view the following details:

* **Average Resolution Rate**: Shows the agent’s overall average resolution rate across all conversations and topics.

* **Top 5 Highest Resolution L3 Topics**: Displays the agent’s top 5 L3 topics with the highest resolution rates, in descending order.

* **Top 5 Lowest Resolution L3 Topics**: Displays the agent’s bottom 5 L3 topics with the lowest resolution rates in ascending order.

* **Resolved/Unresolved Breakdown**: Provides conversation counts and percentages for resolved and unresolved conversations for each topic.

* **Drill-Down Insights**:

    * **View All Topics**: Navigates to Topic Discovery with the selected topic and automatically applied filters.

    * **View Conversations**: Navigates to Conversation Mining with the exact topic and filters pre-applied.   
    <img src="../dashboard/images/resolution-insights.png" alt="Resolution Insights" title="Resolution Insights" style="border: 1px solid gray; zoom:80%;">

* **Identify Performance Gaps**: Provides a comparison view to identify the highest vs. the lowest resolution rates.

### Coaching Assignments

This feature displays all coaching assignments given to an agent within the agent dashboard. Supervisors can track scorecard performance trends over time to assess progress or decline and take appropriate action through targeted coaching.   
<img src="../agent-leaderboard/images/coaching-assignments.png" alt="Coaching Assignments" title="Coaching Assignments" style="border: 1px solid gray; zoom:80%;">

The Coaching Assignments include the following items:

* **Agents**: This displays the name of the Coaching assignment agent.

* **Coaching Area**: This displays all the attributes selected or designated as coaching areas for that assignment.  

* **Assigned Date**: This displays the date of the assigned coaching session.

* **Follow-up Date**: This displays the assigned date as a follow-up date for that coaching assignment.

* **Status**: This displays three types of status for the coaching assignment, calculated based on the number of interactions opened out of those assigned (including both interactions marked for coaching and best responses) for that assignment as follows:

    * **Start Now**: This indicates that the coaching is ready to start.
    
        !!! note
            
            This option is only visible for agents.
       
    * **Yet to start**: Interactions for an assignment are to start.

        !!! note
            
            This option is only visible for supervisors.

    * **In Progress**: This shows the total number of interactions selected for that coaching assignment.

    * **Completed**: All interactions selected through for that assignment.

For more information, see [Coaching Assignments - Supervisor View and Creation](../coach/coaching-assignments-supervisor-view-and-creation.md){:target="_blank"}. 

#### Scorecard Trend

The Scorecard Trend feature displays an agent’s assigned scorecards and highlights performance trends over Daily, Weekly, and Monthly intervals. This lets supervisors track attribute-level scoring patterns based on the scorecard and language selected. This also enables you to identify progress or decline and make informed coaching decisions. 

#### All Languages 

This functionality supports multilingual performance monitoring, enabling supervisors to compare agent performance across languages and generate better coaching insights. Each scorecard supports independent language settings, separate from the global dashboard language. This enables flexible multilingual configuration across the platform.

* The language filter within a scorecard displays only the configured languages.

* When you select a scorecard, all associated languages are automatically selected.

* Agents can assign different languages to different scorecards, allowing for localized tracking and analysis.  
<img src="../agent-dashboard/images/my-dashboard-scorecard-trend.png" alt="Scorecard Trend" title="Scorecard Trend" style="border: 1px solid gray; zoom:60%;">

!!! Note

    In the [**Settings**](../configure/quality-ai-general-settings.md){:target="_blank"}), if the administrator or app owner has disabled the Agent Scorecard for a particular agent, then that agent and its supervisor cannot view this feature in the Dashboard. 

#### Avg. Scorecard Score

From the agent side, the scorecard trend widget displays the average scorecard for the selected time range and the scoring trend at an attribute level across the following time ranges in a tabular view.

When you select a scorecard, the system shows the agent’s average score for the chosen date range. If you haven't added any conversations after assigning, the scorecard doesn't show a score for that agent. When conversations exist, the scorecard appears in the dropdown for scorecard trends.

#### Attributes

It displays all agent attributes included in the scorecard and the average score for each attribute within the selected date range filter.

Select the date range based on the following criteria:

* **Daily**: Last 7 days from the current date.

* **Weekly**: Last 7 weeks from the current week of the year.

* **Monthly**: Last 7 months from the current month.

