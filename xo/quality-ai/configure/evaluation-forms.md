# Evaluation Overview

The evaluation phase of the Quality AI process improves customer experience by allowing QA managers to set tailored evaluation criteria for agents, aligning with each contact center's unique operational structure. It facilitates structured performance assessments across multiple channels, such as voice and chat.

For better handling of the evaluation criteria, this evaluation stage is divided into the following two sections:

* **Evaluation Forms**: Weighted configuration of evaluation metrics that determine conversation-level scoring criteria.

* **Evaluation Metrics**: Individual measurement parameters for quality assessment.

## Evaluation Forms

The evaluation forms are designed to check adherence to individual questions. They are a collection of metrics that let you score, audit, and interact (for Conversation Intelligence and Auto QA Scoring). Once these forms are created, you can assign them to the QM auditors as assessments for review compliance.

The evaluation form includes chosen metrics with customizable weights totaling 100%. The evaluation forms are configured and assigned to respective channels and queues for audit. Each queue in the Chat and Voice channels can host only one evaluation form.

### Key Features

* **Multi-language Support**: Delivers evaluations to different languages with relevant, localized metrics for accurate global team assessments.

* **Advanced Scoring Options**: Enables negative scoring, fatal criteria, and pass score thresholds to refine evaluations, highlighting critical issues.

* **Channel-Specific Configuration**: Allows customization of evaluation settings for voice and chat channels.

    !!! note

        You can assign only one evaluation form per queue in the **Chat** and **Voice** channels. 

## Access Evaluation Forms

Navigate to **Quality AI** > **CONFIGURE** > **Evaluation Forms**.    
<img src="../evaluation-criteria/evaluation-forms/images/evaluation-forms.png" alt="Evaluation Forms Tab" title="Evaluation Forms Tab" style="border: 1px solid gray; zoom:80%;">

## Creating and Configuring Evaluation Forms

The evaluation forms has the following options:

* **Name**: Shows the name of the evaluation form.

* **Description**: Shows a short description of the form.

* **Queues**: Shows the forms assigned and not assigned in the queue.

* **Channel**: Shows the assigned form channel mode (voice or chat interaction). Only one form is allowed for the audit. 

* **Created By**: Shows the form creator's name.

* **Pass Score**: Shows the set pass score percentage for the specified assigned forms and channels. The pass score is the minimum score that an agent needs to pass. 

* **Status**: Enables or disables scoring for the individual Evaluation Form. Note that you must enable this form to start scoring. 

* **Search**: Provides a quick search option to view and update the Evaluation Forms by name. 

    !!! note

        Enable Auto QA in the Quality AI Settings before creating evaluation forms.

### Create a New Evaluation Form

Steps to create a new evaluation form:  

1. Select the **Evaluation Forms** tab.   
   <img src="../evaluation-criteria/evaluation-forms/images/eva-form-tab-selection.png" alt="Evaluation Forms Tab" title="Evaluation Forms Tab" style="border: 1px solid gray; zoom:80%;">

2. Click the **+ New Evaluation Form** displayed in the upper-right corner.    
   <img src="../evaluation-criteria/evaluation-forms/images/new-eva-form-selection.png" alt="New Evaluation Forms" title="New Evaluation Forms" style="border: 1px solid gray; zoom:80%;">

### General Settings

This section configures the general settings for the new evaluation form.

Steps to configure general settings:

1. Enter a **Name** for the evaluation form.

2. Enter a short **Description** for the form (optional).

3. Select a **Language** from the dropdown list.   
<img src="../evaluation-criteria/evaluation-forms/images/add-new-eva-forms1.png" alt="General Settings Page1" title="General Settings Page1" style="border: 1px solid gray; zoom:50%;">

    !!! note

        To view **Agent Scorecards** and **Agent Attributes**, you must have to enable the **Agent Scorecards** toggle view in the **Settings** of Quality AI. 
        
        * Supports multi-language selection. 
        
        * Only **By‑Question** metrics that are configured for all selected languages are shown. 
        
        * An **AND** condition applies across the selected languages. 
        
        * The dropdown list displays only metrics that support all configured languages, not metrics supporting just one. For example: If **English** and **Dutch** languages are selected, only metrics available in both languages appear.       
   
4. Select a **Channel** mode for this form. 

    * **Channel-Specific Display**:

        * **Chat**: Displays only **Chat-relevant** metrics. Excludes speech-based and Voice-specific Playbook metrics.

        * **Voice**: Displays all applicable **Voice-related** metrics, including speech and Playbook metrics.

5. Set the minimum **Pass Score** percentage for the agent.    
   <img src="../evaluation-criteria/evaluation-forms/images/add-new-eva-forms2.png" alt="General Settings Page2" title="General Settings Page2" style="border: 1px solid gray; zoom:50%;">

 6. Click **Next** to move to the **Assignments** section.

### Assignments 

This section enables you to create and evaluate the assignments made.   
<img src="../evaluation-criteria/evaluation-forms/images/assignments-create.png" alt="Assignments Configuration" title="Assignments Configuration" style="border: 1px solid gray; zoom:50%;">

Steps to configure assignments:

1. Search for available queue options.

2. Click **Add Queues** to assign the assignment to queues.

3. You can add or remove the listed queue assignments if required.

    * **Queue-Specific Metrics Display with Conversation Source**:

        * **CCAI Integration**: Configures **Quality AI** to ingest conversation data from CCAI.

        * **Agent AI Integration**: Enables **Quality AI** to process interactions received from Agent AI.

    !!! note

        * Each queue can have only one form associated with a single channel. 
        
        * The search list displays accessible queues for assignment. 
   <img src="../evaluation-criteria/evaluation-forms/images/config-queues.png" alt="Add Queues" title="Add Queues" style="border: 1px solid gray; zoom:60%;">

4. Click **Create** to finalize the form creation. 

   **Form Assignments Rules**
   
   * Each queue can have only one Evaluation Form per channel (Voice or Chat).

   * The system automatically scores interactions when agents handle customer conversations.

   * Calculates scores based on metric outcomes and configured weights.

   * You must enable the form to start scoring.
    
### Evaluation Metrics 

This section lets you add and create evaluation metrics for each attribute configured and assigned to evaluation forms for the queue, interactions, and agents.    
<img src="../evaluation-criteria/evaluation-forms/images/eva-settings-metrics.png" alt="Evaluation Metrics Configuration" title="Evaluation Metrics Configuration" style="border: 1px solid gray; zoom:60%;">

 Steps to configure evaluation metrics:

1. Using the **Search** option, select the required evaluation metrics from the available options.   
   <img src="../evaluation-criteria/evaluation-forms/images/forms-search-metrics.png" alt="Search Metrics" title="Search Metrics" style="border: 1px solid gray; zoom:80%;">

2. Choose the **Evaluation Metrics** to assign to the corresponding queues and sources:

* For **CCAI** and **Agent AI** queues, all metrics are available. 

* For **Quality AI Express** queues (alone or in combination with **CCAI** or **Agent AI**), only **By Question** and **By Speech** metrics are allowed. 

3. Click **Edit** to assign weight to each agent attribute based on importance.    
<img src="../evaluation-criteria/evaluation-forms/images/add-new-eva-forms-edit.png" alt="Edit Metrics" title="Edit Metrics" style="border: 1px solid gray; zoom:80%;">

**Metric Type Validations by Conversation Source**

* Allows evaluation form configurations to include queue assignments and validate metric types based on the selected conversation source.

* Enables reordering of metrics after addition to control their display sequence in the **AI-Assisted Manual Audit** screen.

    !!! note

        The metrics list displays only metrics configured for all selected form languages or chosen channels.

4. Choose the **Correct Response** to identify the correct answer for validation. 

   * Enable validation of assigned weight based on the expected response:

      * If **Yes** is the correct response; only positive weight is allowed.
      
      * If **No** is the correct response; only zero or negative weight is allowed.    
      <img src="../evaluation-criteria/evaluation-forms/images/outcome-weight-response.png" alt="Correct Response" title="Correct Response" style="border: 1px solid gray; zoom:80%;">

5. Assign the **Weightage** percentage based on the correct response validation.

   * **Total Positive Weightage**: The sum of all positive metric weight. 

   * **Total Negative Weightage**: The sum of all negative metric weight. 

6. Indicates whether the agent’s response or behavior matches the expected standard defined by each metric. 

    * **Outcome**:

        * **Yes**: When the agent’s response (such as greeting a customer) matches the correct response, the system assigns positive weight to that metric. 

        * **No**: When the agent’s response (such as a rude response) does not match the correct response, the system assigns zero or negative weight accordingly.	

7. Toggle the **Fatal Error** if the metric is fatal and considered a critical failure in the response.    
   <img src="../evaluation-criteria/evaluation-forms/images/add-new-eva-forms-fatal-error.png" alt="Fatal Error" title="Fatal Error" style="border: 1px solid gray; zoom:80%;">
       
8. Click **Create** to finalize the form creation. 

## Advanced Configuration

### Scoring Logic     

Forms are evaluated using weighted metrics assigned to agents. If the total score meets or exceeds the configured pass percentage, the form receives a **Pass** status. Scores below the threshold result in a **Fail** status. The pass score is calculated based on these weighted metrics and the priority level assigned to each form, as determined by the supervisor.

### Configuration Logic 

Configuration logic is defined at the form level and directly influences how weight validation is applied. It supports both training-based and generation-based adherence detection methods. Validation is automatically enforced based on the designated Correct Response setting.

#### Logic Rules

**Positive Metrics** (**Correct Response** = **Yes**)

* **Yes**: Used for metrics where **Yes** represents successful adherence

* **Example**: Did the agent greet the customer?

* **Validation**: Only positive weights allowed for "Yes" responses

* **Scoring**: When agent greets customer = positive contribution to score

**Negative Metrics** (**Correct Response** = **No**)

* **No**: Used for metrics where **No** represents the desired behavior

* **Example**: Was the agent rude to the customer?

* **Validation**: Only positive weights allowed for **No** responses; zero or negative weights for **Yes** responses

* **Scoring**: When agent is not rude = positive contribution to score

#### Correct Response

The Correct Response configuration enables flexible scoring logic for metrics with both positive and negative connotations. This setting defines what constitutes the expected or desired outcome for each metric, which determines how weights are validated and applied.

**Purpose**: Training-based adherence detection is only checked if agents followed. Correct Response allows flexible scoring for both cases. This setup makes sure scoring matches business goals, whether tracking good or bad behavior.

### Weightage Rules

#### Weightage Validation

* If **Correct Response** = **Yes**: You can only assign positive weights to **Yes** outcomes, zero or negative weights to **No** outcomes.
   
* If **Correct Response** = **No**: You can only assign positive weights to **No** outcomes, zero or negative weights to **Yes** outcomes.

#### Weightage Configuration

When editing evaluation metrics, you can assign weights based on how important each one is to overall quality. These weights work with the Correct Response settings to ensure accurate scoring.

**Positive Weightage Requirements**

* Total positive weights across all metrics must equal 100%.

* Individual metrics can have positive values up to 100%.

* Distributed based on metric importance to overall evaluation.

**Negative Weightage Guidelines**

* No upper limit validation for negative weightages in configuration.

* Individual metrics can exceed -100 in setup.

* Negative weights can collectively exceed -100 across all metrics.

* Final conversation scores are automatically capped at -100 minimum.

#### Scoring Calculation

The system calculates conversation scores using weighted metrics. If a score goes below -100, it is capped at -100 to keep scoring consistent.

## Error Handling and Logic Enforcement

### Fatal Error Configuration

Fatal Error configuration identifies metrics that are crucial to compliance or functional requirements. When enabled, these metrics can override the entire conversation score regardless of other metric performance.

#### Fatal Error Criteria 

* A conversation is marked as a fatal error under any of the following conditions:

* The agent fails to follow the configured process throughout the conversation.

* The agent behaves rudely or unprofessionally during the entire interaction.

* The agent skips any safety-critical or mandatory steps.

* The agent fails to meet a metric designated as a fatal error.

Example: Did the agent provide the mandatory disclaimer in the conversation?

When a required disclaimer is not provided, the chosen metric is marked as a fatal error condition **No**, and the system automatically flags the entire conversation as a fatal error. Where the conversation score becomes zero, even if all other evaluation metrics are passed.

**Use Cases**: Compliance requirements, disclaimer delivery, critical functional requirements.

### Managing Existing Evaluation Forms

This section guides you through the process of updating (editing or deleting) an existing evaluation form.

#### Edit Existing Evaluation Forms

Steps to edit the existing evaluation forms:

1. Select a target evaluation form, and right-click on any existing forms.   
   <img src="../evaluation-criteria/evaluation-forms/images/update-evaluation-form.png" alt="Update Evaluation Form" title="Update Evaluation Form" style="border: 1px solid gray; zoom:80%;">

2. Click **Edit** to modify the selected form details.   
      <img src="../evaluation-criteria/evaluation-forms/images/edit-evaluation-form.png" alt="Edit Evaluation Form" title="Edit Evaluation Form" style="border: 1px solid gray; zoom:80%;">

3. Modify the required fields.   
   <img src="../evaluation-criteria/evaluation-forms/images/edit-eva-form-field-details.png" alt="Modify Evaluation Form" title="Modify Evaluation Form" style="border: 1px solid gray; zoom:50%;">

4. Click **Next** to update the required evaluation metrics fields.

5. Click **Next** to update the required assignments fields.

6. Click **Update** to save the modified fields.

#### Deleting Existing Evaluation Metrics

Steps to delete an evaluation metric:

1. Search and select evaluation metrics.    
   <img src="../evaluation-criteria/evaluation-forms/images/eva-metrics-delete.png" alt="Dead Air Warning" title="Dead Air Warning" style="border: 1px solid gray; zoom:50%;">   

2. Click **Delete** to display a warning dialog box prompting you to update the weights for the remaining metrics.     
   <img src="../evaluation-criteria/evaluation-forms/images/delete-eva-metric.png" alt="Delete Metrics" title="Delete Metrics" style="border: 1px solid gray; zoom:80%;">

3. Update the required metric weights as prompted.

4. Click **Next** to proceed to the **Assignments** section.

    !!! note

        Deleting a form results in the irreversible loss of all associated data.

## Warnings and Error Messages

### Language Configuration Warnings

This section describes the rules, warnings, and error messages related to adding or removing any languages in the evaluation form based on their metric and form level configurations.

#### Unsupported Language Error (Form-Level)

* If a form is currently configured to support **English** and **Dutch**, and all associated metrics are configured only for these two languages, adding **Hindi** to the form triggers a warning. This is because the child (By-Question) metrics do not yet support Hindi. Ensure that the metrics in the form support the new language before adding it to the form settings.

To resolve this, perform the following actions:

* Check the metric-level configuration of the new language (for example, Hindi). 

* Configure the new language with all the required metrics used in the form.

* Add the new language to each metric used in the form.

* Update the metrics to support the new language before you add the language to the form.

* Once all metrics support the language, add the language to the form.   
   <img src="../evaluation-criteria/evaluation-forms/images/edit-lang-config.png" alt="Language Configuration Error" title="Language Configuration Error" style="border: 1px solid gray; zoom:80%;">

#### Language Limitation on Adding New Language 

* This warning appears when you try to use metrics within a form that do not support a language already configured at the form level. For example, the form already includes a language, such as **Hindi**, but some metrics being added or updated are not configured to support Hindi.

To resolve this, do the following:

* **Option 1**: Configure the required language (for example, Hindi) for the selected metrics at the metric level.

* **Option 2**: Choose different metrics that are already configured to support the required language.

### Channel Mode Change Warning

* When you switch to any existing or preconfigured channel modes between **Voice** and **Chat**, a warning message appears related to the specific channel's associated metrics.

* The system automatically deletes speech-based metrics when you switch the channel from **Voice** to **Chat** or **Chat to Voice**. 

    To resolve this, perform the following actions:

    * You should update the remaining metrics and adjust their corresponding weights to correct proper evaluation.
    
    * Click **Update** to save the evaluation form changes once all the updates are done.    
      <img src="../evaluation-criteria/evaluation-forms/images/channel-update-error.png" alt="Channel Update Error" title="Channel Update Error" style="border: 1px solid gray; zoom:50%;">   

#### Speech Metric Addition Limitation

Evaluation forms support only one speech metric per subtype: **Crosstalk**, **Dead Air**, and **Speaking Rate**. Selecting a duplicate subtype in the Evaluation Metrics checkbox triggers an error message. 

!!! note

    * Only one metric of each type you can add at a time.  
        
    * You must remove or delete the existing metric of that type to proceed.

#### Speech Metric Errors

**Crosstalk Warning**     
<img src="../evaluation-criteria/evaluation-forms/images/crosstalk-error.png" alt="Crosstalk Warning" title="Crosstalk Warning" style="border: 1px solid gray; zoom:80%;">   

**Dead Air Warning**   
<img src="../evaluation-criteria/evaluation-forms/images/deadair-error.png" alt="Dead Air Warning" title="Dead Air Warning" style="border: 1px solid gray; zoom:80%;">   

**Speaking Rate** **Warning**   
<img src="../evaluation-criteria/evaluation-forms/images/speech-rate-error.png" alt="Dead Air Warning" title="Dead Air Warning" style="border: 1px solid gray; zoom:80%;">   