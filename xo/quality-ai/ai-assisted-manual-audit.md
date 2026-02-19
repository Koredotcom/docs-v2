# AI-Assisted Manual Audit

The AI-Assisted Manual Audit feature provides supervisors and quality assurance teams with an intelligent platform to evaluate agent-customer interactions across voice and chat channels. This combines artificial intelligence capabilities with manual oversight to streamline performance assessments, ensure compliance with quality standards, and enable data-driven coaching for continuous improvement. 

It combines AI-powered analysis with manual oversight to streamline quality assessments and enable targeted coaching.

Key features of the AI-Assisted Audit system include:

* **Conversation Insights**: Quick summary of key moments and outcomes.

* **Multi-language Support**: Evaluate interactions in multiple languages.

* **Topics & Intents**: Highlights what the conversation was about and the customer’s purpose.

* **Emotion Analysis**: Track emotional shifts and customer satisfaction throughout conversations.

* **Automated Quality Assurance**: Evaluate interactions against predefined quality parameters.

* **Comprehensive Audit Logs**: Maintain detailed logs of all evaluation activities.

## Prerequisites

Before using AI-Assisted Manual Audit, ensure you have:

* **AutoQA Permission**: Required to update metric type settings under Quality AI General Settings.

* **QA Access**: Needed for self-assignment and auditing capabilities.

* **Role-Based Access**: Appropriate permissions are assigned based on your organizational role.

## AI-Assisted Manual Audit Access 

Navigate to **Quality AI** > **ANALYZE** > **Conversation Mining** > **Audit Allocations**.  
<img src="../ai-assist-manual-edit/images/audit-allocations.png" alt="AI Assisted Manual Audit Page" title="AI Assisted Manual Audit Page" style="border: 1px solid gray; zoom:80%;"/>

## Interface overview

### Access Methods

Supervisors can access the audit screen in the following ways:

* **From Conversation Mining**: You can view all their queue conversations.

* **From Audit Allocation**: You can view all the conversations specifically assigned for evaluation.

### Primary Interface Tabs

This Audit screen comprises three primary tabs:

* **Audit Tab**

    * Main evaluation workspace with transcript and metrics.

    * Displays selected metrics as tabs with input capabilities.

    * Shows supervisor scores and agent view changes based on audit status.

    * Features updated audio playback visualizer.

* **Conversation Details Tab**: 

    * Interaction metadata and audit information.

    * Conversation details (Start Time, End Time, Agent name, Queue, Customer Phone number).

    * Audit details (Auditor Name, Audit Date, Audit Score, Kore Evaluation Score).

    * Agent identifiers (Call ID, Session ID, Channel User ID, Call Conversation ID, Agent Conversation ID).

* **Logs Tab**

    * Comprehensive audit trail and activity records.   

    * Records request and response data for GenAI-based adherence metrics.

    * Detailed activity logs including system events, user actions, outcome status, and evaluation progress.  

## Audit

The audit screen is divided into three main sections: 

* **Transcript**: Displays detailed agent conversation information, including the full dialogue from the interaction, enabling thorough review and verification. 

* **Audit Evaluation**: Displays the configured metrics related to the audit, providing a high-level summary and insights derived from AI analysis.

* **AI Overview**: Provides AI-powered insights through analysis widgets, helping supervisors quickly assess performance, compliance, and customer satisfaction without reading full transcripts. Users with Auto QA permissions can also choose which metric types to audit, such as By Speech or By Playbook, while By Question and By Value are always enabled. 

### Audit Evaluation

Provides the main evaluation interface with AI-driven components for efficient assessment across all metric types. 

### AI Overview

Displays conversation insights via AI-powered widgets, allowing supervisors to evaluate key metrics like performance, compliance, and sentiment.

#### Topics

Displays a list of all topics conversation subjects and themes (for example, Customer Support Process). This helps to assess conversation complexity and track topic trends.

* Supports multi-language topic identification.

* Topics extracted using AI natural language processing.

* Category-based performance analysis.

* Training need identification based on topic patterns.  
<img src="../ai-assist-manual-edit/images/topics.png" alt="Audit Screen" title="Audit Screen" style="border: 1px solid gray; zoom:80%;"/>

#### Intents

Captures customer purpose and desired outcomes.

* Analyzes conversation context, phrasing, and patterns.

* Displays each intent as individual chip. 

* Supports measuring intent resolution success rates.

* Helps understanding customer needs and goals.  
<img src="../ai-assist-manual-edit/images/intents.png" alt="Audit Screen" title="Audit Screen" style="border: 1px solid gray; zoom:80%;"/>

### Transcript

The Transcript section presents a unified timeline spanning the duration of both chat and voice interactions, visualizing both agents’ and customers' behavior events and their emotions. It supports real-time navigation to relevant audio with transcript details. 

#### Decision Process

1. **Auto QA**: AI/automated system reviews chat transcripts for keywords, phrases, patterns.

2. **Manual Review**: Auditors listen to calls or read chats for evaluation.

3. **View Chat**: Allows reviewers to check the actual conversation.

4. **AI Justification**: Provides reasoning for automated decisions.

#### Sentiment Analysis 

Displays overall conversation sentiment classification of customer or agent across the entire interaction. This provides a phase-level tracking (opening, development, and closing) with clear pattern recognition. Also, shows the agent's empathetic responses score.

* **Call Opening**: From agent transfer to issue identification: 

    * Customer describes support context or problem (support context).
            
    * **Development**: From issue identification to resolution discussion.

    * **Call Closing**: From resolution discussion to call termination.   
    <img src="../ai-assist-manual-edit/images/sentiment.png" alt="Audit Screen" title="Audit Screen" style="border: 1px solid gray; zoom:80%;"/>

#### Sentiment Ratio

Displays overall conversation sentiment classification. It shows sentiment distribution throughout the conversation, helping to identify whether the interaction improved or deteriorated over time with percentage ratio (Positive, Negative, and Neutral).

Sentiment Categories:

* **Positive**: Customer satisfaction, successful resolution.

* **Neutral**: Standard interaction without strong emotions.

* **Negative**: Dissatisfaction, unresolved issues.  
<img src="../ai-assist-manual-edit/images/sentiment-ratio.png" alt="Audit Screen" title="Audit Screen" style="border: 1px solid gray; zoom:80%;"/>

#### Sentiment Analysis Patterns

**Success Patterns**

* Pattern A (Negative → Positive): Customer satisfaction recovery.

* Pattern B (Positive → Positive): Consistent positive experience.

* Pattern C (Neutral → Positive): Effective positive experience creation.

**Risk Patterns**

* Pattern D (Positive → Negative): Service degradation requiring attention.

* Pattern E (Neutral → Negative): Missed opportunities or failures.

* Pattern F (Negative → Negative): Persistent dissatisfaction requiring escalation.

**Stable Patterns**

* Pattern G (Positive → Neutral): Adequate service delivery.

* Pattern H (Negative → Neutral): Partial improvement opportunity.

* Pattern I (Neutral → Neutral): Steady interaction without emotional impact.

**Resolution-Aware Scoring**

* Weighted algorithm prioritizing final customer sentiment.

* Exponential weighting to recent messages
Numerical scores (1-10 scale: 5=Neutral, 7=Positive).

* Final interaction outcome classification (Positive, Neutral, Negative).

#### Emotions or Emotion Analysis

Measures agent's empathetic responses. 
This ranks the agent and customer emotions analysis with timeline visualization with emotional states (anger, frustration, satisfaction) detected during a customer-agent interaction. 

**Agent Top Emotions** 

Tracks anger, fear, confusion, happiness, empathy, and patience levels with:

* Separate emotion timelines for agent and customer. 

* Percentage breakdown of emotional interactions.

* Emotions rank from highest to lowest by duration percentage.

* Top three emotions ranking for each party.

* Timeline visualization with emoticon indicators.  

**Tracked Emotions**

* **Patience**: Handling difficult situations calmly.

* **Happy**: Positive attitude and engagement.

* **Empathy**: Understanding and compassionate responses.

* **Confusion**: Uncertainty about processes or information.

* **Fear**: Anxiety or hesitation in responses
Anger: Frustration or irritation (coaching opportunity).

**Customer Top Emotions**

Monitors anger, fear, confusion, sadness, happiness, escalation, and churn risk with:

* Voice-based emotion detection and ranking.

* Interactive navigation to conversation segments.

* Tooltip details for emotion identification.

**Tracked Emotions**

* **Happy**: Satisfaction and positive experience.

* **Anger**: Frustration requiring attention.

* **Confusion**: Need for clarification.

* **Sadness**: Disappointment requiring empathy.

* **Fear**: Anxiety about products/services.

* **Escalation**: Rising frustration levels.

* **Churn Risk**: Departure probability indicators.      
<img src="../ai-assist-manual-edit/images/emotions.png" alt="Audit Screen" title="Audit Screen" style="border: 1px solid gray; zoom:80%;"/>

#### Configured Topics and Resolution

The AI Overview tab provides clear visibility into topics, sentiment, and resolution, enabling more effective QA and coaching with structured data and click-through navigation.

The AI Overview tab includes:

* **Configured Intents**: Intents detected based on your taxonomy.
* **Generated Intents**: Intents detected by the AI.
* **Overall Resolution**: The status of the conversation resolution.
* **Topic Sentiment**: Sentiment detected for each topic.

##### Interactive Intents and Sentiment

* **Clickable Configured Intents:** Select an intent to jump to the exact point in the transcript where it was detected.
* **Visual Sentiment Labels:** Each intent includes a color indicator (for example, green or red) to show positive, negative, or neutral sentiment.

##### Resolution Tracking

* **Clickable L3 Resolutions:** Select an L3 topic to view where and how its resolution was addressed in the transcript.   
<img src="../ai-assist-manual-edit/images/configured-topics.png" alt="Audit Screen" title="Audit Screen" style="border: 1px solid gray; zoom:80%;"/>

#### Generated Topics

Uses taxonomy-based topic discovery to expand analytics on the Audit Screen.

#### Enhanced Discovery

* Supports topic discovery and topic-level sentiment detection.
* Provides deeper insight into conversation details directly in the Audit Screen.

#### Sentiment Detection

* Displays sentiment for each discovered topic, showing positive, negative, or neutral tone.   
<img src="../ai-assist-manual-edit/images/generated-topics.png" alt="Audit Screen" title="Audit Screen" style="border: 1px solid gray; zoom:80%;"/>

### Scoring Logic

#### Resolution-Aware Scoring

Uses a weighted scoring algorithm that prioritizes final customer sentiment to better predict satisfaction and retention.

* Similarity ≥ threshold (Adhered)

* Similarity < threshold (Not Adhered)

* Trigger not detected ( N/A)

Example: 

* Each question is tied to a similarity threshold (for example, 60%).

* If an agent's response is greater than 60%, it is marked as adhered with full weight based on the number of questions (100%).

* Below the threshold = Not Adhered (0 weight).

* Questions marked Not Applicable are ignored in scoring.

#### Conversation Insights

This uses AI to give supervisors quick overviews of customer interactions by summarizing key events, outcomes, and important details without reviewing full transcripts or recordings. 

* **Customer Talk Ratio**: Percentage of total call duration customer is speaking.

* **Agent Talk Ratio**: Percentage of total call duration agent is speaking.

* **Silence Percentage**: Call time where neither party speaks (excludes hold time).

* **Speaking Rate**: Agent's speech speed (Words Per Minute - WPM calculation).   
<img src="../ai-assist-manual-edit/images/conversation-insights.png" alt="Audit Screen" title="Audit Screen" style="border: 1px solid gray; zoom:80%;"/>

!!! note

    This option appears only available for voice interactions. 

#### Agent Speech Insights

Displays Agent-specific performance data metrics.

* **Speaking Rate**: Words Per Minute value.

* **Crutch Words**: Filler word count ("um," "uh," "like").

* **Empathy Score**: Agent utterance empathy measurement.    
<img src="../ai-assist-manual-edit/images/agent-speech-insights.png" alt="Audit Screen" title="Audit Screen" style="border: 1px solid gray; zoom:80%;"/>

#### **Audit-Specific Conversation Detail View**

The Audit screen integrates keyword search functionality directly into the conversation evaluation workflow. Filters applied on the **Conversation Mining** page carry over to this Audit screen. The conversation detail view presents the full transcript of the call or chat.


| **Feature** | **Description** |
|--------------|-----------------|
| **Timeline Integration** | • Visual markers on the conversation timeline show exact keyword match positions, enabling quick timestamp-based navigation.<br>• Click the timeline marker to jump directly to that keyword match in the transcript for quick navigation.<br>• Links keywords to transcript locations, related QA questions, and their corresponding scores. |
| **Keyword Highlighting in Transcript** | • Keyword matches are automatically highlighted inline in the transcript, making it easy to spot relevant terms instantly.<br>• Highlights are color-coded (up to 8 distinct colors) to match timeline markers, aiding visual consistency.<br>• Excluded keywords are not highlighted. |
| **QA Question Mapping (Compliance) and Navigation** | • Keyword matches are linked to relevant QA questions and scoring impact in the AI Overview panel.<br>• Matches display speaker attribution and count (e.g., “Refund – Customer”, “Order – Agent”).<br>• Matches are clickable, enabling traceability and quick verification of required terms (e.g., compliance scripts and disclosures).<br>• Users can filter and navigate by keyword hits, speaker turns, or QA-mapped segments, improving evaluation efficiency. |
| **Enhanced Context Display** | • When a keyword is selected, the surrounding transcript is expanded.<br>• Displays speaker labels (Agent speech, Customer speech), sentiment, and QA impact for each match. |
| **Keyword Highlight in Audit View** | • Displays transcripts with keyword highlights and navigation.<br>• Helps auditors visually review conversations and assess QA relevance. |
| **Expand and Collapse View** | • Allows toggling of the *Keywords Found* panel:<br>&nbsp;&nbsp;– **Expanded View:** This keyword filter is active and fully visible with all keywords listed.<br>&nbsp;&nbsp;– **Collapsed View:** Only panel header shown, maximizing transcript space.<br>&nbsp;&nbsp;– **Hidden:** Panel not shown when no keyword filters are applied.<br>• **Default:** Expanded when keywords are filtered, collapsed when no keyword filters are active. |
| **Flexibility Keyword Filtering** | • Users can filter, navigate, and clear keywords without impacting other filters.<br>• Navigation supports viewing only specific keyword matches or filtering by speaker (Agent only or Customer only). |
| **Speaker Labels** | • Each speaker (Agent or Customer) is clearly labeled, helping users follow the dialogue flow seamlessly. |
| **AI Overview Panel** | • Displays keyword context and its relevance to QA evaluation.<br>• Highlights if the keyword relates to any compliance violations.<br>• Shows if keyword presence/absence affects question scoring.<br>• Shows sentiment at the time of keyword mention. |
| **Session Preservation** | • Filters are saved in the user session until manually cleared. |
| **Clear Filter Keywords** | • Removes all keyword filters (both include and exclude) from the transcript, but other filters (date, sentiment, QA score) remain active. |

<img src="../ai-assist-manual-edit/images/keyword-by-question-audit.png" alt="Audit-Specific Conversation" title="Audit-Specific Conversation" style="border: 1px solid gray; zoom:70%;"> 

#### By Question

The **By Question** section in the audit interface evaluates agent performance on specific inquiry types using configurable evaluation forms. Each criterion is scored individually, supported by AI-powered quality assurance, which ensures precision and consistency. This question-level approach supports targeted feedback and continuous process improvement. 

The By Question metrics features include the following:

* **Audit Progress Bar**

  * Located at the top right of the panel.

  * Shows completion percentage based on answered audit questions (completion status).

  * Reflects the total number of By Question metrics configured in a form.  
  <img src="../ai-assist-manual-edit/images/audit-progress-bar.png" alt="Audit Progress Bar" title="Audit Progress Bar" style="border: 1px solid gray; zoom:80%;"/>

#### Omission

This section highlights instances where the agent failed to follow configured or compliance elements, such as playbook steps or dialog tasks, during the interaction. It specifically identifies:

* Omitted playbook steps (for playbook metrics)
* Omitted dialog tasks (for dialog metrics)
* Only shown if relevant metrics exist

If no playbook or task-type metrics are configured for the interaction and evaluation form, the omissions section is not displayed. It helps evaluators quickly identify critical steps or tasks that were missed during the customer interaction.

**Violations**

This section highlights speech metric violations that occurred during the call. Examples include Cross Talk, Dead Air, and Speaking Rate Violation.

Each violation is displayed with a timestamp, allowing you to navigate directly to the point in the recording where the violation occurred. It enables quick identification and review of problematic areas in the interaction.  
<img src="../ai-assist-manual-edit/images/ai-assist-violation.png" alt="Violations" title="Violations" style="border: 1px solid gray; zoom:30%;">

#### By Playbook

The Playbook section of the interaction audit screen enables evaluators to assess adherence to configured playbook metrics. It displays:

* Each playbook metric with the **Entire Playbook** configuration.

* Configured minimum adherence for each metric.

* Observed adherence within the interaction.

* Missing steps (Playbook steps not completed during the interaction).

* Displays expected vs. observed steps.

This comprehensive view is presented in a dropdown format, providing evaluators full visibility of playbook adherence. It helps identify gaps between expected and actual performance, facilitating targeted feedback and improvement.

* The user can audit **Speech** and **Playbook** metrics once the following **Settings** audit options are enabled.

    * Audit Speech Metrics

    * Audit Playbook Metrics

* If the audit **Speech** and **Playbook** metrics are not enabled from the **Settings**, the metrics remain only for view mode.  
<img src="../ai-assist-manual-edit/images/playbook.png" alt="Playbook" title="Playbook" style="border: 1px solid gray; zoom:50%;">

#### By Value

This section tracks value-related metrics and activities during interaction evaluations. It enables advanced insights into agent behavior beyond predefined scripts. Follow the same requirements as specified for the **By Question** metrics.

It also tracks AI sentiment and emotion using GenAI and leverages Agent AI models for:

* Sentiment analysis

* Identifying key emotional moments

* Predictive analytics 

**Agent Adherence**

Display the following fields:

* **Source System Value**: Value obtained from the source system.

* **Agent Mentioned Value**: Value mentioned by the agent during the conversation
* **AI Justification**.

* **GenAI-based adherence**: Combine business rule validation with tolerance range analysis.

* **Custom script adherence**: Include the agent-mentioned value and business rule justification.

#### By AI Agent 

Delivers advanced sentiment analysis through GenAI features, enabling the **Post-Interaction Sentiment Analytics and Key Emotion Moments** option. This feature enhances post-interaction insights by analyzing agent conversations for deeper emotional and sentiment context. With the integration of **GenAI Copilot**, it leverages Quality AI with LLMs to generate detailed post-interaction sentiment analysis and highlight key emotional moments within conversations.

**Key Capabilities:**

* Real-time AI-driven analysis.

* Sentiment and emotion detection.

* Topic modeling and intent recognition.

* Predictive analytics for improved foresight.

* **AI Justification**

    When using GenAI for agent response detection in evaluations, display the following fields to justify AI-generated decisions:

    * Provide clear reasoning explaining the AI’s Yes/No outcome for agent answer detection (whether adhered/not adhered/not applicable with along with the observation time).

    * Include evidence of trigger presence or absence for dynamic adherence types.

    * Highlight specific agent behaviors that influenced the metric outcome.

    * Show timestamps for all relevant conversation segments to support transparency.

    * Helps auditors understand automated scoring decisions.    
      <img src="../ai-assist-manual-edit/images/ai-justification-by-questions.png" alt="Audit Progress Bar" title="Audit Progress Bar" style="border: 1px solid gray; zoom:80%;"/>

**Adherence Filter Status**

This feature allows supervisors or administrators to filter and sort compliance or adherence questions and their responses based on predefined metrics, facilitating detailed analysis and reporting. Questions are filtered based on adherence status to focus on specific areas of compliance.          

* **Adhered**: The response fully meets the compliance requirement.
* **Not Adhered**: The response does not meet the compliance requirement.
* **Not Applicable**: The question is not relevant to the specific context.	  
<img src="../ai-assist-manual-edit/images/conversation-filter.png" alt="Audit Progress Bar" title="Audit Progress Bar" style="border: 1px solid gray; zoom:80%;"/>

**Self-Assignment for Audit**

QA users (auditors or supervisors) can self-assign unclaimed interactions for auditing during the conversation review process. Interactions that are already audited, completed, or assigned to another user are not eligible for self-assignment. Once a QA user self-assigns an interaction, it is labeled as “Self-Assigned”, and no other user can reassign it.

**Assign to me**

Steps to Self-Assign an Interaction for Audit:

1. Navigate to the **Conversation Mining** page, where interactions are listed.

2. Select any agent interactions that is not audited or assigned.

3. Click the **Assign to Me** button. A success message confirms the audit allocation.   
<img src="../ai-assist-manual-edit/images/assign-to-me.png" alt="Audit Progress Bar" title="Audit Progress Bar" style="border: 1px solid gray; zoom:80%;"/>

    !!! note

        Only users with QA permission can add their feedback comments at any point in the conversation, regardless of the evaluation metrics.

4. The interaction is marked as **Self-Assigned** on the **Audit Allocations** page and becomes unavailable for reassignment by other users.

    !!! note

        Only unassigned and unaudited interactions are available for self-assignment.

#### Comments

This section displays all feedback provided by auditors during the evaluation process. It provides a comprehensive list of auditor-submitted notes for each interaction. All the submitted comments appear both in the Conversation **Transcript** and in the **Comments** tab, with commenter details shown based on privacy settings (For example, Hide Auditor Details).  
<img src="../ai-assist-manual-edit/images/anonymous.png" alt="Hide Auditor Details" title="Hide Auditor Details" style="border: 1px solid gray; zoom:80%;"/>

**Message-Level Comments**

At the message level, users with QA functionality access permissions can view a comment icon when hovering over individual messages.

**Commenting on Interactions**

1. Click the **Assign to Me** button to add your comment during the conversation.

2. Upon clicking the comment icon, a **Comment** icon appears when hovering over any message in the **Transcript** section.  
<img src="../ai-assist-manual-edit/images/comment-icon-selection.png" alt="Hide Auditor Details" title="Hide Auditor Details" style="border: 1px solid gray; zoom:80%;"/>
3. Click the **Comment** icon to add a comment title **(Name)** and **Comment** text (both are mandatory).    

4. Users can add or delete their submitted comments before submission.

5. Click **Send** to publish the added comment.  
<img src="../ai-assist-manual-edit/images/adding-comments-for-agents.png" alt="Hide Auditor Details" title="Hide Auditor Details" style="border: 1px solid gray; zoom:80%;"/>

6. After submitting a comment, a **success message** appears.

Once submitted, message-level comments are displayed:

* Inline within the **Transcript**, linked to the corresponding message.

* In the **Comments** tab, there are both the comment title and text, along with the commenter's details (visibility based on privacy settings).  
<img src="../ai-assist-manual-edit/images/click-though-navigation.png" alt="Hide Auditor Details" title="Hide Auditor Details" style="border: 1px solid gray; zoom:80%;"/>

    !!! note

        Auditors or supervisors can add their comments in the **By Question**, **By Value**, and in the **By AI Agents** question metrics, when they are self-assigning the audit to themselves. 

**Comment Types**:

Auditors or reviewers can provide two types of comments during the audit process:

* **Metric Comments**

These are added to specific evaluation criteria, for the **By Question**, **By Value**, or **By AI Agent** metrics, once the audit is self-assigned to them.

1. Click the **Assign to Me** button to enable or add your review comment during the conversation.

2. Click the **+ Add Comment**, a Comment box opens to enter your comment.  

3. Click the **Edit** or **Delete** your added Comment.  

4. Click **save** to save submitted comments.     
<img src="../ai-assist-manual-edit/images/add-new-metric-level-comment.png" alt="Hide Auditor Details" title="Hide Auditor Details" style="border: 1px solid gray; zoom:80%;"/>

* **Message Comments**: These are contextual comments added at the message level within the **Transcript** section of the **Audit** page. These comments support click-through navigation for quick review.  
<img src="../ai-assist-manual-edit/images/view-chat.png" alt="Hide Auditor Details" title="Hide Auditor Details" style="border: 1px solid gray; zoom:80%;"/>

**View Chat**

The **View Chat** functionality enhances the efficiency of the quality assurance process by allowing users to:

* Highlight the related question metric for added context.

* Instantly navigate to the relevant portion of the transcript and call recording.

* Correlate auditor feedback with specific moments in the interaction, enabling faster and more effective QA/auditor reviews.   
<img src="../ai-assist-manual-edit/images/added-comments-by-QA.png" alt="View Chat" title="View Chat" style="border: 1px solid gray; zoom:80%;"/>

!!! note

    Once an interaction is manually evaluated (all responses are selected and submitted) and finalized, you cannot re-audit the same interaction. 

**Click-Through Navigation for Comments**

All users, including agents without QA permissions, can:

* Click on a comment to navigate directly to the related message. 

* The system centers the commented message in the **Transcript** window.

* Enables fast access to feedback from Supervisors and QA auditors.
    
   This enables agents to view and navigate through message-level comments, which is available to all users, regardless of QA access permissions. This ensures that agents can benefit from comments added by QAs or Supervisors for learning and improvement.

**Review Near-Miss Scenarios (deterministic adherence)**

Near‑miss evaluations use predefined similarity thresholds to flag responses or utterances that closely resemble, but do not fully meet, adherence standards. Auditors review these “near‑miss” cases: situations where an agent’s performance was almost at the expected level but did not fully meet.

**How Near-Miss Works:**

* Evaluated only in Deterministic Adherence mode. 

* System uses predefined similarity thresholds to flag potential near-misses.

* When the **View** button is clicked:

    * The evaluation is marked **Yes** (highlighted in green).

    * The corresponding customer response is highlighted with the relevant context.

The system selects **By Question** metrics by default and prevents you from deselecting them. This default metric evaluates agent behavior question-by-question.    
<img src="../ai-assist-manual-edit/images/view-button.png" alt="View Chat" title="View Chat" style="border: 1px solid gray; zoom:80%;"/>

!!! note

    * Auditors can only audit the selected types. 
            
    * Supervisor score calculation includes all enabled metric types.

**Audit Submission Process**

By default, this option is disabled unless the interaction is assigned for audit through Audit Allocations. Once the Supervisor or Auditor clicks **Submit**, the Supervisor’s responses for the interaction’s evaluations are recorded, and the audit score is computed based on the Supervisor’s responses.

This comprehensive audit panel facilitates efficient evaluation and ensures thorough review of each interaction.

!!! note

    * Submit button is enabled only for interactions assigned to the user.

    * You must answer all the question metrics before submission.

When the evaluation form includes all the required metrics in the **Audit** page, the **Submit** button is enabled to complete and submit the audit. 

1. If By Question/By Value/By AI Agent metrics are present, you must: 

    * Select appropriate responses for all required audit questions to enable submit button.

    * Ensure the adherence percentage totals 100%.

2. Click **Submit** to assign the Interactions to others or themselves.  
<img src="../ai-assist-manual-edit/images/audit-submission.png" alt="View Chat" title="View Chat" style="border: 1px solid gray; zoom:80%;"/>

3. Once the Interaction is assigned, the corresponding Interaction is marked as **Self-Assigned** on the **Audit Allocations** page.

    1. The audited Interactions become unavailable for reassignment by other users on the **Interactions** page. 

    2. Once an interaction is fully evaluated and submitted, you cannot re-audit.

    3. Only the Interactions that are not assigned to others or already audited are available.

**Agent Scored Interactions**

Based on the **Agent Access to Scored Interactions** settings, the agents can view the following interaction types:

* **Only manually audited interactions**: Shows only **Supervisor Audit Score** interactions with Date & Time and Queues.

* **Manually audited and Auto QA scored interactions**: Shows **Kore Evaluation Score** (Auto QA), **Supervisor Audited Score** interactions, including Date & Time and Queues.

Each row lists a terminated interaction (by an agent), with columns:

* Date & Time

* Queues

* Auto QA Score (if Auto QA and manually audited interactions are accessible)

* Audit Score

* **Hide Auditor Details for Agent**

    * When toggled on, auditor details are anonymized in the audit screen. 

    * When toggled off, auditor details are visible in the audit screen.
      
    !!! note

        Only the supervisors can view the auditor details. The agents are restricted from viewing the auditor details.

**Evaluation Marking (Yes/No/N/A):** 

Auditors can check and review the following near-miss scenarios on the audit screen:

The form is evaluated based on the agent's performance and actions taken during a customer conversation. 

“Yes” is marked when:

* The agent clearly performed the required action.

* Evidence exists in the conversation/chat log.

* The requirement is fully met according to the standards specified.

* Example: Agent said, "Good morning, how can I help you?" → YES for greeting.

“No” is marked when:

* The agent failed to perform the required action.

* The action is taken, but not adequate (close to but not fully meeting the standard).

* Required information is not provided or incomplete.

* Example: Agent didn't ask for mobile number at all → NO.

“N/A” is marked when:

* The situation didn't arise or isn’t applicable. 

* The customer didn't request the specific information.

* The requirement couldn't be fulfilled due to circumstances.

* Example: When the customer never asked about interest rates → N/A for "Did agent inform interest rate values?"

## Search

This section provides a keyword search option across the entire transcript. You can quickly locate specific information or topics within the interaction by entering relevant keywords. It allows evaluators to efficiently find and assess particular points of interest in the conversation.   
<img src="../ai-assist-manual-edit/images/search.png" alt="Search" title="Search" style="border: 1px solid gray; zoom:80%;"/>

## Conversation Details

This page shows how to view the conversation history to evaluate interactions:

* Conversation Details, such as Start Time and End Time, Agent name, Queue, and Customer Phone number. 
* Audit Details, such as Auditor Name, Audit Date, Audit Score, and Kore Evaluation Score.
* Identifiers of the Agent, such as Call ID, Session ID, Channel User ID, Call Conversation ID, and Agent Conversation ID.  
<img src="../analyze/conversation-mining/images/conversation-mining-audit-view.png" alt="Audit Page" title="Audit Page" style="border: 1px solid gray; zoom:80%;"/>

## Logs

This tab provides a comprehensive audit trail for tracking the interaction-evaluation process. It records request and response data for each GenAI-based adherence metric. This interface displays detailed activity logs of agent interactions, including system events, user actions, outcome status for each metric, and evaluation progress.  
    <img src="../ai-assist-manual-edit/images/logs.png" alt="Audit Screen" title="Audit Screen" style="border: 1px solid gray; zoom:80%;"/>
