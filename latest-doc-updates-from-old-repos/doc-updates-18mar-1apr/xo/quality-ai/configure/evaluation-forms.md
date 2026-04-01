# Evaluation Forms

Evaluation Forms enable QA Managers to create standardized assessments for Voice and Chat interactions. Each form aligns scoring with operational goals and ensures consistent, compliant evaluations across agent queues. 

Each queue supports one evaluation form per channel. QA Managers can mark specific metrics for manual scoring and exclude them from agent attributes and scorecard calculations. They can also set a minimum duration threshold to exclude short or incomplete contacts from AutoQA scoring and quality metrics.


## Key Features and Capabilities

* **Multi-language Support**: Deliver evaluations with localized metrics for global teams.

* **Flexible Scoring Types**: Use percentage-based scoring for simple forms or points-based scoring for complex forms.

* **Advanced Scoring Options**: Highlight critical issues with negative scoring, fatal metrics, and pass-score thresholds.

* **Channel-Specific Configuration**: Configure Voice and Chat independently.

* **Queue and Channel Assignment**: Assign forms to specific queues and channels.

* **AutoQA and Manual Audits**: Evaluate interactions automatically and manually.

* **Minimum Duration Threshold**: Exclude contacts that are too short for evaluation.


## Evaluation Forms Structure

An evaluation form includes:

* **Evaluation Forms**: Defines the overall scoring structure, scoring type, language, channel, pass threshold, and queue assignments.

* **Assignments**: Maps the queues and conversation sources.

* **Evaluation Metrics**: Defines the individual quality parameters used to measure agent performance.

### How It Works 

QA Managers create evaluation forms with weighted metrics (100% for percentage-based forms or flexible points for points-based forms). The system assigns these forms to specific queues and channels for auditing and AutoQA scoring.

## Access Evaluation Forms

Navigate to **Quality AI** > **CONFIGURE** > **Evaluation Forms** to view and manage evaluation forms.    
<img src="../evaluation-criteria/evaluation-forms/images/evaluation-forms.png" alt="Evaluation Forms Tab" title="Evaluation Forms Tab" style="border: 1px solid gray; zoom:80%;">

## Evaluation Forms Elements 

The Evaluation Forms displays the following elements:

* **Name**: Name of the evaluation form.

* **Description**: A short description of the form.

* **Queues**: Show assigned and not assigned queues.

* **Channel**: Channel mode assigned to the form (Voice or Chat).

* **Created By**: Display the form creator.

* **Pass Score**: Show the minimum score required to pass. 

* **Status**: Enable or disable scoring. 

* **Search**: Find evaluation forms by name.

    !!! Note

        Enable Auto QA in the Quality AI **Settings** before creating evaluation forms.

## Create a New Evaluation Form

Creating an evaluation form involves three sections:

1. General Settings

1. Assignments

1. Evaluation Metrics

### General Settings Configuration

This section defines the basic details of the evaluation form.

Steps to configure general settings:

Steps to create a new evaluation form:  

1. Select the **Evaluation Forms** tab.   

1. Select the **+ New Evaluation Forms**. 

1. Enter a **Name** and **Description** (optional).

1. Select the required Language.

1. Select a **Channel** type. 

    * **Chat**: Displays only Chat-relevant metrics. Excludes speech-based and Voice-specific Playbook metrics.

    * **Voice**: Displays all applicable Voice-related metrics, including speech and Playbook metrics.

    The selected channel determines which metrics are available for configuration.

1. Select a **Scoring Type**: **Percentage** or **Points**. 
 
1. (Optional) Toggle on to **Set the minimum duration required to complete evaluations**.

1. Enter a threshold value in minutes (**MIN**) and seconds (**SEC**). 

1. Set a minimum **Pass Score** required for agents.

1. Select **Next.**

This maintains consistent evaluation standards, regardless of the scoring type you select.         

6. Select **Next**.    
<img src="../evaluation-criteria/evaluation-forms/images/add-new-eva-forms2.png" alt="General Settings Configuration" title="General Settings Configuration" style="border: 1px solid gray; zoom:80%;">

### Assignments Configuration

Assign queues to the evaluation form and define the conversation source for evaluation.

#### Queues and Conversation Source Configuration

You can assign available queues and define the conversation source for evaluation.

Steps to configure assignments:

1. Search and select available queues.

1. Select **Add Queues** to assign them to the evaluation form.

1. Add or remove the listed queue assignments as required. 

1. Select the **Conversation Source** options as required.

    * **Quality AI Express**: Enables Quality AI Express-based interaction processing.

    * **CCAI Integration**: Configures Quality AI to ingest conversation data from CCAI.

    * **Agent AI Integration**: Enables Quality AI to process interactions received from Agent AI.

1. Select **Next**.    
   <img src="../evaluation-criteria/evaluation-forms/images/config-queues.png" alt="Edit Metrics" title="Edit Metrics" style="border: 1px solid gray; zoom:50%;">

#### Conversation Source Options

* **Quality AI Express**: Enables Quality AI Express-based interaction processing.

* **CCAI Integration**: Configures Quality AI to ingest conversation data from CCAI.

* **Agent AI Integration**: Enables Quality AI to process interactions received from Agent AI.

    !!! Note

        If you assign CCAI or AgentAI queues together with QualityAI Express queues in the same evaluation form, the system makes By Playbook and By Dialog metrics unavailable for selection.

**Queue Assignment Rules**

* Assign only one form per queue per channel.

* Display only accessible queues.

* Disable By Playbook and By Dialog metrics when you select CCAI or AgentAI with Quality AI Express.


### Evaluation Metrics Configuration

Evaluation metrics define the criteria used for audits and AutoQA scoring. Manual metrics are human-scored and assess qualitative aspects such as tone, empathy, and judgment.

#### Evaluation Form Assignment

When you add evaluation metrics to a form, the system lists them in the Evaluation Metrics section. Each metric represents a quality parameter used to evaluate agent performance during audits or AutoQA scoring.

Steps to configure evaluation metrics:

1. Search and select the required metrics, then add them to the form.    

1. Add the selected metrics to the form. 

1. Select **Edit** to configure each metric.

1. Choose the correct **Response** that defines what constitutes a match for this metric.

1. Assign a metric **Weightage** based on the selected scoring type:
    
    * **Percentage**: Enter a percentage value.   
    
    * **Points**: Enter a points value. 

1. Choose the correct **Response** and **Outcome** scoring that defines what constitutes a match for this metric.

1. Reorder metrics to control their display sequence in the audit interface.

1. Remove metrics that are no longer required.   

The system automatically calculates and displays the total positive and negative points configured for the evaluation form.   
<img src="../evaluation-criteria/evaluation-forms/images/points-scoring.png" alt="Points Metrics" title="Points Metrics" style="border: 1px solid gray; zoom:100%;">

#### Outcome Configuration

For each metric, define the outcomes (for example, **Yes** or **No**) and assign a positive, zero, or negative weight based on the expected response. A matching response receives positive weight, while a non-matching response receives zero or negative weight (if configured).

1. Toggle on **Fatal Error** for this metric if it's compliance-critical (optional).

1. Select **Create** to finalize the form creation. 

The system automatically calculates and displays the total positive and negative points configured for the evaluation form.


!!! Note

    Manual metrics apply only to points-based forms and do not affect agent attributes or scorecards. 


**Important Behavior**

* Metric availability depends on language, channel, and conversation source.

* The system displays only metrics supported across all selected languages and the chosen channel.

* The system automatically calculates total scores.

* Turning off the minimum duration toggle means all contacts get included in the evaluation, regardless of how long they lasted.

* The system excludes manual metrics from agent attributes and scorecard calculations.

### Metric Card Configuration.

#### Trigger Scoring Disabled

When trigger scoring is off, the metric card displays the following controls:

* **Weightage**: Enter a numeric percentage for the metric's contribution to the form's total score.

* **Fatal Error Toggle**: Mark this outcome as a fatal error, which fails the entire evaluation if the metric isn't adhered to.

##### Trigger Scoring Enabled

When trigger scoring is on, the metric card expands to show outcome-level sub-weight controls. 

* **Outcome**: **Yes** and **No** for each with a Weightage input field. 	

* **Correct Response**: Available on specific outcome rows to mark the expected correct response. 	

* **Fatal Error Toggle**: Marks a non-adherent outcome as a fatal error.

    !!! Note

        You can’t assign negative weightage at the form level when trigger scoring is enabled. Configure all negative scoring in the sub-weight fields within the metric.


#### Outcome Configuration

For each metric, define the outcomes (for example, Yes or No) and assign a positive, zero, or negative weight based on the expected response. A matching response receives positive weight, while a non-matching response receives zero or negative weight (if configured).	

#### How Minimum Duration Threshold Works

The minimum duration threshold defines the shortest contact duration that qualifies for AutoQA evaluation on an evaluation form or agent scorecard. The system checks the contact duration vs. the threshold configured on the scorecard before scoring begins. 

The system evaluates contact duration before scoring.

| Contact Duration          | Status Assigned       | Result                                       |
|---------------------------|-----------------------|---------------------------------------------|
| Meets or exceeds threshold | —                     | Evaluated normally.                         |
| Falls below threshold      | Below Threshold       | Excluded from scoring and quality metrics. |
| Duration Unresolved        | Duration unavailable  | Excluded from evaluation.                  |


### Duration Calculation By Channel

| Channel                  | Duration Measured As                                 |
|--------------------------|-----------------------------------------------------|
| Voice                    | Full call duration, including hold time.           |
| Chat                     | Time between the first and last message timestamps.|
| Quality AI Express (FTP) | Based on the `start_time` and `end_time` fields.   |


!!! Note

    * The system may exclude a contact for one scorecard but evaluate it for another if their thresholds differ. 

    * Leave disabled to evaluate all contacts. 

    * Supervisors can manually evaluate excluded contacts.


#### Scoring Type Selection

Scoring type determines how you assign weights to evaluation metrics.

   * **Percentage-Based**: 

      * Assign metric weights as percentages.
      * Metric weight must equal 100%.
      * Best for smaller forms (fewer than 20 metrics).

   * **Points-Based**: 

      * Assign metric weights as points.
      * No upper limit on total positive points.
      * Total negative points must not exceed total positive points.
      * Recommended for complex forms with 20 or more metrics (ideal for 40+).
      * Supports Manual Evaluation metrics for human scoring.

#### Switching Scoring Type

* Clear all existing metric weights.

* Reconfigure all metrics after switching the scoring type.

* Confirm the warning prompt before switching.

### Scoring Formula (Points-Based)

**Kore Evaluation Score** = [∑(Myi × Wyi) - ∑(Mni × Wni) / ∑(Wyi)] × 100
Where: 

* **Myi, Wyi** = Adhered metrics and positive points.

* **Mni, Wni** = Non-adhered metrics and negative points.

### Scoring Systems Comparison

Quality AI supports two scoring methods: Percentage-Based and Points-Based.

| Feature               | Percentage-based                                                                 | Points-based                                                                 |
|----------------------|----------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| Best for             | Fewer than 20 metrics                                                           | 20 or more metrics                                                          |
| Total weight         | Must equal 100%                                                                 | No fixed maximum                                                            |
| Scalability          | Limited                                                                          | High                                                                         |
| Weight per metric    | Decreases as metrics increase (for example, 40 metrics ≈ 2.5% each)             | Assign any point value based on importance                                  |
| Weight precision     | May require fractional values (for example, 2.5%)                                | Uses whole-number allocation (for example, 50 points for critical metrics)  |
| Negative scoring     | Managed within 100% structure                                                    | Negative points allowed; cannot exceed total positive points                |
| Final evaluation score | Direct percentage (0–100)                                                      | Normalized to percentage (0–100)                                            |

### Weight Assignment Rules By Scoring Type

| Configuration               | Percentage-based                                                                 | Points-based                                                                 |
|-----------------------------|----------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| If Correct Response = Yes   | Positive % for Yes; zero or negative % for No                                   | Positive points for Yes; zero or negative points for No                     |
| If Correct Response = No    | Positive % for No; zero or negative % for Yes                                   | Positive points for No; zero or negative points for Yes                     |
| Validation                  | Total positive weight must equal 100%; negative weight allowed within the 100% structure | No upper limit on total positive points; total negative points ≤ total positive points |
| Manual Evaluation metrics   | Not supported                                                                   | Supported                                                                   |

### Fatal Error Behavior

Fatal error configuration is identical for both scoring types. When a fatal metric fails:

* The final score becomes 0.

* The system ignores all other metric scores.

* Mark the interaction as failed.


### Managing Evaluation Forms

This section guides you through editing and updating the existing evaluation forms.

#### Edit Existing Evaluation Forms

Steps to edit the existing evaluation forms:

1. Select the three-dot (⋮) menu to **Edit** and update the required details.

1. Select **Update**. 


### Switch the Scoring Type

Changing the scoring type clears all existing weights and requires you to reconfigure metrics. Make sure the percentage totals 100%, and the points meet validation rules.

### Language Configuration Warnings

Changes to language settings can affect speech recognition accuracy and metric results.

#### Unsupported Language Error (Form-Level)

This error occurs when you add a new language to a form, but one or more associated metrics don't support it. The system blocks the update until all metrics support the selected language.

**Example**: Adding Hindi to a form configured with metrics that support only English and Dutch triggers this error.

To resolve this, perform the following actions:


1. Review the language configuration for each metric used in the form.
2. Update each metric to support the new language (for example, Hindi).
3. Verify that all required metrics support the language.
4. Add the language to the form after updating all metrics.

#### Metric-Level Language Limitation

This warning appears when you add or update a metric that doesn't support a language configured on the form.

To resolve this:

1. Configure the required language on the metric, or
2. Select a metric that supports all languages configured on the form.


### Channel Mode Change 

When you switch the channel between Voice and Chat, a warning appears. The system automatically deletes speech-based metrics when you switch channels.

To resolve a channel mode change:

1. Update the remaining metrics to support the new channel.
2. Adjust the corresponding weights for proper evaluation.
3. Select **Update** to save the changes.


### Delete an Evaluation Form

Before you delete a metric used in an evaluation form:

1. Remove the metric from all associated evaluation forms.
2. Assign any attributes linked to the metric to a different metric.
3. Delete the metric after you resolve all dependencies.

!!! Note

    If the metric is used in any evaluation form, the system displays a warning that you must resolve before deletion proceeds.

### Language Selection Behavior

Evaluation forms support multi-language selection. The system applies an AND condition across all selected languages. 

* The system displays only By-Question metrics configured for all selected languages.
* For example, if you select English and Dutch, the system shows only metrics available in both languages.