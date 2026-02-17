# Understanding Views and Permissions

Audit Allocations presents different interfaces depending on your permissions:

**For Users with Allocation Creation Permission**

You see two tabs that provide complete allocation lifecycle management:

* **My Allocations**: Track and manage all allocations you've created, with options to edit assignments and monitor completion progress.

* **Assigned to Me**: View interactions that other managers have assigned to you for evaluation.

**For Users without Allocation Creation Permission**

You see a single tab focused on your evaluation work:

* **Assigned to Me**: Access all interactions assigned to you by QA managers or supervisors.

## My Allocations

The **My Allocations** tab serves as your central dashboard for managing all audit assignments you've created. This view provides complete visibility into allocation status, completion progress, and auditor assignments, with powerful tools for editing and monitoring your team's evaluation work.   
<img src="../allocations/images/my-allocations.png" alt="My Allocations" title="My Allocations" style="border: 1px solid gray; zoom:80%;">

### Allocation Overview

The **My Allocations** tab displays comprehensive information about each allocation you've created:

| Column        | Description                                                     |
|--------------|-----------------------------------------------------------------|
| Name          | The allocation identifier you created                            |
| **Description**   | Description for the allocation                                   |
| **Auditor**       | List of auditors assigned                                        |
| **Created On**    | Date of creation                                                 |
| **Interaction**   | Number of interactions                                           |
| **Status**        | Overall allocation state (Completed / In Progress)               |
| **Actions**       | Management options (View Logic, Edit)                             |

### View Logic

The View Logic action reveals the complete configuration behind your allocation, showing exactly which criteria and filters determined the interaction selection. This transparency helps you understand allocation composition and replicate successful audit strategies.   
<img src="../allocations/images/view-logic-actions.png" alt="View Logic Actions" title="View Logic Actions" style="border: 1px solid gray; zoom:80%;">

* Select **View Logic** from the Actions menu to see:

* **Date Range**: Date range for selected interactions
* **Evaluation Form**: The specific form template used for evaluating interactions in this allocation.
* **Languages**: Language filters applied to narrow interaction selection.
* **Queues**: Selected queues or all queues.
* **Agents/Agent Groups**: Specific agents or groups included.
* **Allocation Type**: Random or Custom method used.
* **Channel Settings**: Voice, Chat, or both channels.
* **Assignment Logic**: Distribution method - Percentage-based (% of interactions per agent) or fixed interaction count per agent.
* **Custom Filters**: Applied filters for custom allocations.

### Edit Allocation

The Edit Allocation capability addresses one of the most common operational challenges in manual QA, adapting to auditor availability changes. This feature lets you redistribute pending work without disrupting completed evaluations or forcing you to create entirely new allocations.  
<img src="../allocations/images/my-allocations.png" alt="My Allocations" title="My Allocations" style="border: 1px solid gray; zoom:80%;">

**When to Use Edit Allocation?**

Use this feature when you need to:

* Reassign interactions from auditors who are on leave or unavailable.
* Balance workload when some auditors complete their assignments faster than others.
* Add new auditors to help complete an allocation.
* Update the allocation name or description for better organization.

**Edit Allocation Process**

1. Select **Edit** from the Actions menu for the allocation you want to modify.

1. Update the **Name** or **Description** if needed.

1. Review the current auditor assignments, which display:
    * Auditor names
    * Total interactions assigned to each auditor
    * Completed interactions count
    * Pending interactions count
1. Select the auditors you want to reassign interactions from by checking their boxes. You can only reassign pending interactions. Completed evaluations remain with the original auditor.

1. Choose reassignment options:
    * **Redistribute Among Existing Auditors**: Assign pending interactions to auditors in this allocation.

    * **Add New Auditors**: Include additional team members to help complete the allocation.

1. Specify the allocation percentage for each auditor receiving redistributed interactions. The system automatically calculates interaction counts based on your percentage inputs and the total pending interactions.

1. Select **Update** to apply your changes.

### Create New Allocation

Select **New Audit Allocation** to start the allocation creation process. The system guides you through three sequential steps: Settings, Allocation, and Assignment.

## Assigned to Me

The Assigned to Me tab displays all interactions that managers or supervisors have assigned to you for manual evaluation. This focused view helps you efficiently work through your audit queue while tracking your progress and organizing your evaluation work.   
<img src="../allocations/images/assign-to-me.png" alt="Assign To Me" title="Assign To Me" style="border: 1px solid gray; zoom:80%;">

### Interaction List Structure

The Assigned to Me table provides essential information for each interaction awaiting evaluation:

| Column                 | Description                                                                                                   |
|------------------------|---------------------------------------------------------------------------------------------------------------|
| **Name**                   | Allocation Name                                                                                                |
| **Agent**                  | The agent who handled the interaction                                                                          |
| **Assigned Date**           | Shows the date the system created the allocation                                                                                |
| **Evaluation Form**         | Form to use for evaluation                                                                                     |
| **Kore Evaluation Score**   | Auto QA score if available                                                                                     |
| **Emotions**               | Detected customer emotions throughout the interaction (for example, frustrated, satisfied, neutral).                |
| **Moments**                | Key moments identified in the interaction (for example, escalation points, resolution moments, critical exchanges).  |
| **Sentiment Score**        | Overall sentiment analysis of the customer's experience (positive, negative, neutral, with numerical scoring).|

### Filter and Search

Use the **Filters** button to narrow your assigned interactions:

* **Allocation Name**: Filter by specific allocation names using the search dropdown.
* **Date Range**: Focus on interactions from specific time periods.
* **Agent**: View interactions for specific agents.
* **Queue**: Filter by queue assignments.
* **Evaluation Form**: See interactions using specific forms.

### Evaluation Workflow   

<img src="../allocations/images/evaluation-workflow.png" alt="Evaluation Workflow" title="Evaluation Workflow" style="border: 1px solid gray; zoom:80%;">   

Complete your assigned evaluations following this process:

1. Select the **Evaluate** action for an interaction to open the full conversation view.
2. Review the complete interaction thread with all available context:
    * Customer-agent conversation flow
    * Interaction metadata (duration, channel, queue)
    * Auto QA scores and insights
    * Topic identification and sentiment analysis
3. Use the assigned Evaluation Form to score each criterion.
4. Save your evaluation when complete.
5. The interaction automatically removes from your Assigned to Me list after you submit your evaluation.


