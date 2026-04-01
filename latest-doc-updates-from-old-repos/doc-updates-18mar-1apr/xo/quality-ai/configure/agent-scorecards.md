# Agent Scorecards

Agent Scorecards provide individualized performance evaluations for agents, focusing on critical areas such as sales proficiency and product expertise. Each scorecard uses predefined attributes linked to relevant performance metrics and supports negative weight penalties and fatal criteria scoring. Both scorecards and attributes support multilingual evaluations, enabling accurate and consistent assessments across different languages.

You can also set a minimum duration threshold on a scorecard to prevent short, incomplete, or abandoned contacts from entering AutoQA scoring. Contacts that fall below this threshold are excluded from evaluation and quality metrics.


## Key Capabilities

* **Individual Assessment**: Each agent receives evaluations based on applicable scorecards during call transfers.

* **Multiple Evaluations**: The system assesses agents using multiple scorecards per interaction.

* **Multilingual Support**: Attributes and scorecards support multilingual evaluations for diverse interactions.

* **Negative Weight Scoring**: Apply negative weights to key metric results to highlight their significance and impact on agent scores.

* **Fatal Criteria Parameters**: Mark non-compliance metrics as fatal, resulting in a zero score for the interaction.

* **Enterprise Quality Monitoring**: Supports advanced scoring models for enterprise-level quality assurance requirements.

## Access and Permissions

Navigate to **Quality AI** > **CONFIGURE** > **Agent Score Cards**.  
<img src="../agent-scorecards/images/agent-scorecard-landing-page.png" alt="Agent Score Card" title="Agent Score Card" style="border: 1px solid gray; zoom:70%;">


## Agent Scorecard Elements

The agent scorecard displays the following list of elements:

* **Name**: Name of the agent scorecard.

* **Agent Attribute**: Display a list of performance attributes assigned to the scorecard.

* **Assignee**: Show the agents or agent groups assigned to the scorecard.

* **Created By**: Display the name of the user who created the scorecard.

* **Pass Score**: Show the minimum score threshold required for an agent to pass.

* **Status**: Indicate whether the scorecard is Active or Inactive.

* **Search**: Find agent scorecard by name.

## Permission Types

A Supervisor has the following permission types for the agent scorecards:

  | **Permission**     | **Access level**                                              |
|-------------------|--------------------------------------------------------------|
| **Full Access**   | Create and edit agent scorecards and attributes.             |
| **View-only Access** | View existing agent scorecards and attributes.           |
| **No Access**     | No permissions to create or edit agent scorecards and attributes. |

!!! note

    Define agent attributes before creating scorecards, and enable the Agent Scorecards toggle in Quality AI Configuration Settings to access Agent Scorecards and Agent Attributes.


## Create a New Agent Scorecard

Creating an agent scorecard involves three steps:

1. General Settings

1. Agent Attributes

1. Assignments

### Configure General Settings

Configure the basic details and evaluation criteria for the scorecard.

1. Select **+ New Agent Score Card** displayed in the top-right corner. The General Settings tab opens by default.   
    <img src="../agent-scorecards/images/agent-scorecard-default-page.png" alt="New Agent Score Card" title="New Agent Score Card" style="border: 1px solid gray; zoom:70%;">

1. Enter the **Name** of the agent scorecard.

1. Enter a short **Description** of the scorecard (Optional).

1. Select the required Languages from the drop-down to load the associated evaluation metrics and attributes.

1. (Optional) Toggle on to **Set the minimum duration required to complete evaluations**.

1. Enter a threshold value in minutes (**MIN**) and seconds (**SEC**). 

1. Set the minimum **Pass Score** required for agents.

1. Select **Next**.  
    <img src="../agent-scorecards/images/add-new-agent-score-card-settings.png" alt="Agent Scorecards Settings" title="Agent Scorecards Settings" style="border: 1px solid gray; zoom:70%;">

    !!! note

        * Language selection controls which attributes and metrics are available.

        * Leave the duration toggle off to evaluate all contacts.
        
        * Default scorecards apply automatically to all agents.


### Configure Agent Attributes

Select and configure attributes that define agent performance scoring.


1. Search for the relevant agent attributes name. 

1. Select **Add Agent Attributes** to add them to the scorecard.     
<img src="../agent-scorecards/images/agent-attributes.png" alt="Add Agent Attributes" title="Add Agent Attributes" style="border: 1px solid gray; zoom:70%;"> 

1. Assign a **Weightage** to each attribute individually. 

1. Select **Next**.    
    <img src="../agent-scorecards/images/add-agent-attributes-weight.png" alt="Add Agent Attributes Weight" title="Add Agent Attributes Weight" style="border: 1px solid gray; zoom:70%;"> 
    
    !!! note

        * Only attributes matching the selected languages appear.

        * Each attribute contributes proportionally to the final score.

        * The **Next** button activates only when the total weightage across all selected attributes equals 100%.


### Configure Assignments

1. Assign the scorecard to agents and agent groups.

1. Select **Add Agents** and **Add Groups** as needed.
<img src="../agent-scorecards/images/assignments.png" alt="Assignments" title="Assignments" style="border: 1px solid gray; zoom:70%;"> 

1. Select Add Groups to include them.     
  <img src="../agent-scorecards/images/add-agent-group.png" alt="Add Agents" title="Add Agents" style="border: 1px solid gray; zoom:70%;"> 

1. Select **Create** to assign both the agent and the agent group to a relevant queue.  
    <img src="../agent-scorecards/images/add-agents.png" alt="Add Agents" title="Add Agents" style="border: 1px solid gray; zoom:70%;"> 

    !!! note

        Toggle the Scorecard Status to Active to begin agent-level scoring.        
    <img src="../agent-scorecards/images/newly-created-scorecard.png" alt="Newly Added Scorecard" title="Newly Added Scorecard" style="border: 1px solid gray; zoom:70%;"> 


### How Minimum Duration Threshold Works

The minimum duration threshold determines the shortest interaction that qualifies for AutoQA scoring.

| Contact Duration         | Status Assigned     | Result                                       |
|--------------------------|------------------|---------------------------------------------|
| Meets or exceeds threshold | —                | Evaluated normally.                         |
| Falls below threshold     | Below Threshold   | Excluded from scoring and quality metrics. |
| Duration Unresolved       | Duration unavailable | Excluded from evaluation.                 |

### Duration Calculation By Channel

| Channel                 | Duration Measured As                                |
|-------------------------|----------------------------------------------------|
| Voice                   | Full call duration, including hold time.          |
| Chat                    | Time between the first and last message timestamps. |
| Quality AI Express (FTP)| Based on the `start_time` and `end_time` fields. |

!!! note

    * Threshold changes apply only to new contacts ingested after the scorecard is saved.
    
    * Disabling the threshold evaluates all contacts as before.


### Manual Override

Supervisors with the appropriate permissions can manually evaluate contacts flagged as Below Threshold or Duration Unavailable. The system includes these manually evaluated contacts in quality metrics as normal

#### Versioning Behavior

The system versions threshold settings per scorecard. Updates apply only to contacts ingested after saving the scorecard. Historical contacts continue to use the previous threshold configuration.

#### Pass Score Logic

* Score ≥ Pass Score: Pass.

* Score < Pass Score: Fail.

* Total attribute weight must equal 100%.

## Manage Agent Scorecards

### View Scorecards

Each scorecard displays the following:

*** **Name: Displays the name of the agent or agent group.

* **Agent Attributes**: Displays the name of the selected agent attributes.

* **Assignee**: Shows the user name who assigned the scorecard.

* **Created By**: Displays the scorecard creator’s name.

* **Pass Score**: Displays the minimum score required to pass the evaluation.

* **Status**: Shows whether the scorecard status is Active or Inactive.

### Edit Agent Scorecards

Steps to edit the agent scorecard:

1. Select the vertical ellipse (⋮) on any existing scorecard.               
    <img src="../agent-scorecards/images/vertical-ellipsis-edit-button.png" alt="Vertical Ellipsis Edit Button" title="Vertical Ellipsis Edit Button" style="border: 1px solid gray; zoom:70%;"> 

2. Select **Edit** to update the existing agent scorecard details.  

3. Modify the required details.  

4. Select **Delete** only unassigned attributes or remove the scorecards before deletion.

5. Select **Update**.


### Delete Agent Scorecards

Steps to delete the agent scorecard:

1. Select the vertical ellipse (⋮) on any existing scorecard.               

1. Select Delete to remove the selected agent scorecard.


#### Scorecard Deletion 

**Deleting Agent Scorecard** 

When you delete an agent scorecard, you permanently lose all data linked to that scorecard, and you can't recover it. 

**Deleting Default Scorecard**

You can't delete the default scorecard directly. Before deleting any default scorecard, you must assign another scorecard as the default before deleting the current scorecard. Otherwise, the system displays a warning dialog.
    
### Language Configuration Warnings

#### Adding Languages

A warning appears if a new language isn't configured for existing metrics or attributes. You must configure metrics for that language first.

#### Deleting Languages

You can’t remove any languages linked to active scorecards or attributes until you clear those links. The system allows language modification only for attributes configured for the selected languages.




## Agent Attributes

This feature generates agent attributes by aggregating evaluation metrics to calculate an Agent Attribute Score, which highlights critical performance areas such as Professionalism and Product Knowledge. The system derives the score from evaluation metric data and filters the displayed attributes according to the scorecard’s language.

### Access Agent Attributes 

Navigate to **Quality AI** > **Configure** > **Agent Attributes**. 
<img src="../agent-scorecards/images/agent-attributes-default-screen.png" alt="Agent Attributes" title="Agent Attributes" style="border: 1px solid gray; zoom:70%;"> 

### Manage Agent Attributes


#### View Agent Attributes

Each agent attribute displays the following:

* **Name**: Shows the name of the agent attribute.

* **Description**: Shows the optional description added for the agent attribute.

* **Scorecard**: Shows the status of all scorecards.

#### Create a New Agent Attribute

Steps to create a new agent attribute:


Steps to create **New Agent Attribute**:

1. Navigate to the Agent Scorecards tab on the Agent Scorecards page.

1. Select **+ New Agent Attribute** displayed in the top-right corner.         
    <img src="../agent-scorecards/images/new-agent-attribute1.png" alt="New Agent Attribute" title="New Agent Attribute" style="border: 1px solid gray; zoom:70%;">

1. Enter the **Name** of the agent attribute.

1. Enter a short **Description** (optional).

1. Select a target **Language** to load the associated evaluation metrics and attributes. 

1. Search for relevant evaluation metrics and select the required ones.
<img src="../agent-scorecards/images/add-new-agent-attribute.png" alt="Add Evaluation Metrics" title="Add Evaluation Metrics" style="border: 1px solid gray; zoom:70%;"> 

1. Select **Add Evaluation Metrics** to assign them. 

1. Select each metric and configure the following:


1. Select **Edit** to configure the following:


| Setting              | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| Weightage            | Percentage contribution based on the metric's importance.                  |
| Correct Response     | Expected response that defines achieved behavior.                          |
| Outcome              | Specific outcomes (Yes / No / NA) with corresponding weight assignments.   |
| Negative Weight      | Negative weight applied to critical metric outcomes.                       |
| Fatal Criteria toggle| Marks the metric as fatal. A failed fatal metric sets the interaction score to zero. |


1. Verify that the total positive weightage equals 100%. 

1. Select **Create**. 


#### Metrics Weightage Reference

| Weightage type           | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| Total Positive Weightage  | Sum of all positive metric weightages. Example: Professional greeting (+5%), Problem resolution (+15%). |
| Total Negative Weightage  | Sum of all negative metric weightages. Example: Policy violation (−10%), Missed compliance step (−15%). |
| Individual Weightage      | Percentage contribution of each metric for the corresponding evaluation form. |
| Total Weightage           | Must equal 100% across all metrics.                                        |

#### Metric Configuration Rules

| Rule                     | Detail                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| By Question Metrics      | Define with Yes / No / NA outcomes and assign positive or negative weights based on the metric type. |
| Channel-specific Display | If the selected channel is Chat, only Chat-relevant metrics appear. Speech and Playbook metrics configured for Voice are not shown. |
| Fatal Criteria           | Interactions that meet the fatal criteria are scored zero and flagged for identification across features. A form can include multiple fatal criteria. |
| Negative Weight Limit    | The total negative points can’t exceed the total positive points.      |


### Manage Agent Attributes

#### Edit Agent Attributes

Steps to edit or update the agent attributes:

1. Select the three-dot (⋮) menu on the attribute you want to edit.      

2. Select **Edit**. The following screen appears to update existing agent attribute details.  
    
3. Modify the required field details.

1. Select **Update**.

#### Language Update Warnings

##### Adding A New Language

A warning appears if the new language isn’t configured for the current by-question metrics. Configure the new language on the listed metrics or select a language that supports the metrics.

##### Deleting A Language

The system displays a warning if the language is in use in other scorecards. Remove the language configuration from all associated scorecards before deleting it. The system blocks deletion if the language is in use.

 !!! note
            
    Only scorecards for the selected languages appear. You can remove or delete languages not linked to any scorecards.

#### Delete An Agent Attribute

1. Select the three-dot (⋮) menu on the attribute you want to delete.

1. Select **Delete**, and confirm the action in the warning dialog.

### Agent Attribute Deletion Warnings

| Scenario                     | Behavior                                                                 |
|------------------------------|-------------------------------------------------------------------------|
| Deleting any attribute       | The system permanently deletes all data linked to the attribute and does not allow recovery. |
| Deleting an assigned attribute | You can’t delete an attribute assigned to a scorecard. Remove it from the scorecard first. |
| Eligible for deletion        | You can delete only unassigned agent attributes.                       |


   
    


