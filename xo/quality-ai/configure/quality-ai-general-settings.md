# Quality AI General Settings

The Quality AI General Settings lets you configure and manage features that enhance agent performance and maintain compliance. You can set up agent scorecards, create evaluation forms, and use bookmarks to highlight key conversation points. These settings help improve customer interactions and streamline quality management.

Supervisors or administrators can manage Auto QA scoring, agent access to interactions, and auditor anonymity at the app level. They can configure agents view only manually audited interactions, Auto QA–scored interactions, or both, and control whether auditor identities are visible, maintaining privacy according to company policies.

## Access Quality AI General Settings 

Navigate to **Quality AI** > **CONFIGURE** > **Settings** > **Quality AI General Settings**.   
<img src="../settings/images/qm-setting.png" alt="QM Settings" title="QM Settings" style="border: 1px solid gray; zoom:60%;">

The Quality AI General Settings include: 

### Auto QA

The Auto QA feature enables automated evaluation using configured forms. When disabled, automated QA scores, Conversation Mining, Dashboards, and Evaluation Forms are hidden.

#### Enable Auto QA

1. Expand **Quality AI General Settings**.  
<img src="../settings/images/auto-qa.png" alt="Auto QA" title="Auto QA" style="border: 1px solid gray; zoom:90%;">

2. Turn on **Auto QA**.

3. Select **Save** to save the settings. 

**Benefits of enabling Auto QA**

* Access Dashboards (Fail Statistics, Performance Monitor), Adherence Heatmap, Conversation Mining, Agent Leaderboard, Coaching Monitor, Evaluation Forms, and Metrics. 

* Receive scored interactions even when Conversation Intelligence is disabled.

* Enable Conversation Intelligence without enabling Auto QA.

* Auto QA operates independently of Conversation Intelligence.

    !!! Note

        Only administrators can enable Auto QA. By default, it is off. Disabling Auto QA hides Agent Scorecards and bookmarks, regardless of user permissions.
    
When you enable the **Auto QA**, the following screen shows to create and configure evaluation forms.

<img src="../settings/images/qa-settings-eva-forms.png" alt="Create and Config Evaluation Forms" title="Create and Config Evaluation Forms" style="border: 1px solid gray; zoom:60%;">

!!! Note

    When a user with Auto QA permissions turns off the Auto QA toggle in Settings, the Agent Scorecard and bookmarks are disabled, regardless of the user's access to the Agent Scorecard and QA features.

#### Disable Auto QA

1. Turn off the **Auto QA** toggle.  
2. Select **Confirm** and **Save**.

!!! Note

    If you disable the Auto QA, the automated QA scoring is disabled across the entire app and all queues within it.
    
### Agent Score Card

Agent Scorecards enable scoring at the agent level using evaluation forms. Users with proper permissions can enable or disable this feature.

#### Enable Agent Score Card

1. Expand the **Quality AI General Settings**.

   <img src="../settings/quality-ai-general-settings/images/sett-agent-scorecard.png" alt="Agent Scorecard Set" title="Agent Scorecard Set" style="border: 1px solid gray; zoom:60%;">

2. Turn on Agent Scorecard.

3. Select **Save**

**Features available**:
Agent Leaderboard, Dashboard (Fail Statistics, Performance Monitor, Agent Leaderboard), Coaching Monitor, and Agent Scorecards.

When you enable the **Agent Score Card**, it lets you view the new Agent Scorecard.    
<img src="../settings/images/settings-enable-agent-scorecard.png" alt="Auto QA" title="Auto QA" style="border: 1px solid gray; zoom:60%;">

#### Disable Agent Score Card

1. Turn off **Agent Score Card**.  

1. Select **Save**.

    !!! Note

        Disabling this feature disables automated agent scoring across the application and all queues.

### Bookmarks

Bookmarks let you tag interactions (calls, messages) for easy reference in Conversation Mining and dashboards.

#### Enable Bookmarks

1. Expand the **Quality AI General Settings**.  
<img src="../settings/images/settings-bookmarks.png" alt="Bookmark" title="Bookmark" style="border: 1px solid gray; zoom:70%;">

2. Turn on **Bookmarks** to add a new bookmark. Enabling this option lets you view features, such as in **Conversation Mining** (Interactions) and **Dashboard** > **Agent Leaderboard** (Evaluation).

3. Select **Add Bookmark**.     
<img src="../settings/images/settings-new-bookmarks.png" alt="Bookmarks" title="Bookmarks" style="border: 1px solid gray; zoom:100%;">

4. Enter the **Bookmarks** name for the assigned interactions.
5. Select a **Color** for the added bookmarks.
6. Select **Save**.

#### Disable Bookmarks

Steps to disable Bookmarks:

1. Turn off **Bookmarks** toggle.   

1. Select **Confirm**.

1. Select **Save**.

!!! Note
    
    Deleting a bookmark removes only the tag, not the associated interactions.

## Agent Access to Scored Interactions

Agents can view scored interactions to improve performance. By default, this feature is off. When enabled, this option adds a new tab next to the **Overview** tab on the agent dashboard. 

Agents can use it to view scored interactions audited by a supervisor. Access is available via **My Dashboard** > **Overview** > **Evaluation**.     
<img src="../settings/quality-ai-general-settings/images/my-dashboard-evaluation.png" alt="Evaluation" title="Evaluation" style="border: 1px solid gray; zoom:100%;">

Agent Access to Scored Interactions includes two options: 

1. **Only manually audited interactions**: Agents view only interactions that supervisors audit manually.
     
2. **Manually audited interactions and Auto QA scored interactions**: Agents view both Auto QA–scored interactions and supervisor-audited interactions.      
<img src="../settings/quality-ai-general-settings/images/agent-access-to-scorecard.png" alt="Agent Access to Scored Interactions" title="Agent Access to Scored Interactions" style="border: 1px solid gray; zoom:80%;">
 
Refer to the [Available Interactions Based on Access Settings](../analyze/my-dashboard-agent-view.md#available-interactions-based-on-access-settings).

### Agent Dashboard Insights

Controls visibility of agents Sentiment and Resolution metrics on their Agent Dashboard at the application level.

* **Disabled (default)**: Agents can't view sentiment charts, resolution metrics, or topic-level insights. Their dashboard shows only standard information such as coaching assignments, scorecards, and performance data. 

* **Enabled**: Agents can view additional insights, including sentiment trends, topic-level sentiment, resolution rates, and drill-down metrics.   
   
    <img src="../settings/quality-ai-general-settings/images/agent-dashboard-insights.png" alt="Agent Access to Scored Interactions" title="Agent Access to Scored Interactions" style="border: 1px solid gray; zoom:100%;">

    These insights match supervisor views but apply only to the agent’s own conversations and settings.

### AI Justification and Evidence

This setting lets agents view AI-generated justifications and supporting evidence for each question and metric. The system displays details by question, value, and AI Agent metric type so that agents understand how the AI calculates scores and evaluations.

### Audit Settings

Audit settings control agent visibility and privacy: 

1. **Allow agents to view AI-generated emotions and sentiment insights**: Agents can view AI-generated emotional indicators and sentiment scores for each interaction. These insights help agents understand customer tone, identify issues, and improve evaluations. When off, agents can't access emotional or sentiment data in the audit view.

2. **Hide Auditor Details for Agent**: Turn this setting on to hide auditor identity details from evaluated agents. This setting protects privacy and reduces bias. When active, the system displays Anonymous instead of the auditor’s name.

### Manual Audit

Supervisors select additional metric types for comprehensive manual quality evaluations.

#### Audit Speech Metrics

**Purpose**: Provide comprehensive speech analysis capabilities for quality assurance and agent development.

* If **By Speech** is on, auditors enter responses for each speech metric (for example, clarity, tone, pace).

* If **By Playbook** is on:

    * For **By Step**: Show each step and let the auditor input responses step-wise.

    * For **the entire Playbook**: Show consolidated evaluation interface.

* All tabs support radio buttons or input fields for auditor responses.

#### Audit Playbook Metrics

Evaluate agent adherence to defined conversation playbooks and structured interaction protocols. Measure speech-related performance indicators during audits.

**For Non-Audited Interactions**

* Agents can only view a non-editable single status:

    * Executed

    * Not Executed

    * Not Applicable

**For Manually Audited Interactions**

* Agents can view only:

    * Unselected radio buttons

    * The supervisor-selected response highlighted
