# Creating Audit Allocations

The allocation creation process follows a three-step workflow that provides precise control over interaction selection, assignment criteria, and evaluator assignment. Each step builds on the previous step and guides you from initial setup to final assignment.

## Access My Allocations

Navigate to **Quality AI** > **ANALYZE** > **My Allocations**.  
<img src="../allocations/images/create-allocations.png" alt="Create Allocations" title="Create Allocations" style="border: 1px solid gray; zoom:80%;">

### Step 1: Settings

The Settings step establishes the foundation for your allocation by defining the evaluation scope, selecting the appropriate form, and filtering the interactions of specific agents to evaluate.

**Configure Basic Information**

Begin by defining the core parameters of your allocation:

1. **Name**: Enter a descriptive name that clearly identifies the allocation purpose and makes it easy to locate later.

1. **Description**: Add optional context about the allocation's purpose, special focus areas, or evaluation priorities to help team members understand the intent.

1. **Date Range**: Specify the date range for interactions you want to evaluate, ensuring you capture the relevant conversation window.

1. **Evaluation Form**: Choose a form that guides auditors in reviewing and assessing assigned interactions. The form also determines which queues appear in subsequent filters, as each form links to specific queues in the system configuration.

1. **Languages**: Choose the languages for this allocation. Select specific languages when creating audits for auditors who evaluate only certain languages, or select all languages for comprehensive coverage. The system displays the total interaction count that matches your language selections.

1. **Queue**: Select the queue associated with your chosen evaluation form.  
<img src="../allocations/images/queue-selection.png" alt="Queue Selection" title="Queue Selection" style="border: 1px solid gray; zoom:80%;">

**Filter by Agents or Agent Groups**

Narrow your allocation scope to specific team members or groups:

**Agents Filter**

* Select individual agents from the dropdown.

* Choose multiple agents to evaluate interactions across your team.

* Leave empty to include all agents in the selected queues.

**Agent Groups Filter**

* Select pre-configured agent groups for bulk selection.

* Useful for team-based evaluations or audits of organizational units.

* Combine with individual agent selection if needed.   
<img src="../allocations/images/agents-and-agent-groups-selection.png" alt="Agent and Agent Groups Selection" title="Agent and Agent Groups Selection" style="border: 1px solid gray; zoom:80%;">

The interaction count updates automatically as you adjust your selections, showing exactly how many interactions match your criteria.

* Select **Next** to proceed to the Allocation step.

### Step 2: Allocation Type

The Allocation step determines how you select interactions from your filtered pool. Choose between Random for unbiased sampling or Custom for targeted evaluations based on specific criteria.   
<img src="../allocations/images/allocation-type.png" alt="Allocation Type" title="Allocation Type" style="border: 1px solid gray; zoom:80%;">

#### Random Allocation

Random allocation uses statistical sampling to guarantee impartial selection of interactions among your filtered agents. This technique ensures representative coverage while giving you control over the sample size through two different assignment strategies.   
<img src="../allocations/images/random-allocation.png" alt="Random Allocation" title="Random Allocation" style="border: 1px solid gray; zoom:80%;">

**Configure Random Sampling**

1. Select the **Random** option.

1. Enable channels for evaluation:

    * **Voice**: Toggle on to include phone interactions.

    * **Chat**: Toggle on to include chat interactions.

    * **Both Voice & Chat**: Enable both toggles for comprehensive channel coverage.

1. Select your **Assignment Logic**: 

    * **Percentage Per Agent**

        1. Allocates a consistent percentage of each agent's interactions.
        
        1. Ensures proportional representation across agents with different interaction volumes.
        
    * **Interactions Per Agent**

        1. Assigns a fixed number of interactions to each agent.
        
        1. Provides uniform sample sizes regardless of agent volume.
        
1. Enter your desired percentage or interaction count based on your selected logic. The system displays two helpful metrics:

    * **Average per Agent**: Displays the equivalent value in the opposite metric (if you enter a percentage, it shows average interaction count, and vice versa).

    * **Total Interactions**: Updates in real-time to show the total number of interactions selected by this configuration.

#### Custom Allocation

Custom allocation gives you precise control over interaction selection by applying specific filters to target particular scenarios, topics, sentiment ranges, or performance metrics. This method works well for focused evaluations that target known issues or validate Auto QA accuracy in specific situations.   
<img src="../allocations/images/custom-allocation.png" alt="Custom Allocation" title="Custom Allocation" style="border: 1px solid gray; zoom:80%;">

**Configure Custom Allocation**

1. Select the **Custom** option. Choose how you'll define your custom criteria.

1. **Saved Filter**

    * Select from the filters you previously saved in Conversation Mining.

    * Applies all filter criteria configured in that saved filter.

    * Ideal for recurring audit focuses or standard evaluation scenarios.

1. **Quick Filter**

    * Configure a filter directly in the allocation workflow.

    * Access the same comprehensive filter options available in Conversation Mining.

    * Perfect for one-time allocations without cluttering your saved filter library.     
    <img src="../allocations/images/custom-quick-filter.png" alt="Quick Filter" title="Quick Filter" style="border: 1px solid gray; zoom:80%;">

##### Quick Filter Creation

Select **Create Filter** to access the quick filter builder. You can refine your interaction selection using criteria organized into four categories.

<img src="../allocations/images/quick-filters.png" alt="Quick Filter Creation" title="Quick Filter Creation" style="border: 1px solid gray; zoom:80%;">

**Experience Filters:** Target interactions based on customer experience metrics, including sentiment trends from opening to closing, emotional indicators, average waiting time, sentiment scores, Customer Satisfaction Score (CSAT) ratings, detected intents, conversation topics, and churn risk indicators.

**Behavior Filters:** Focus on agent performance by filtering for specific metrics, empathy scores, crutch word usage, agent playbook adherence, and Kore evaluation scores.

**Keyword Filters:** Include or exclude interactions containing specific keywords or phrases, allowing you to focus on particular conversation content or avoid irrelevant discussions.

**Efficiency Filters:** Select interactions based on operational metrics such as Average Handle Time (AHT), handling time ranges, deviations from standard AHT, and number of transfers.

The total interaction count updates dynamically as you adjust your filter criteria, showing exactly how many interactions match your selection parameters.

**Custom Allocation with Per-Agent Control**

After defining your custom filters, you can further refine your allocation:

* Apply per-agent sampling to your filtered results.

* Specify percentage or interaction count per agent within the filtered set.

* Combine targeted filtering with proportional sampling for precise control

**Example**: Filter for interactions with sentiment scores less than 3, then sample 5% per agent from the filtered results to focus evaluations on low-satisfaction situations. 

* Select **Next** to proceed to the Assignment step.

### Step 3: Assignment

The Assignment step completes your allocation by distributing the selected interactions across your auditor team. This final configuration ensures balanced workload distribution and activates the allocation for evaluation.    
<img src="../allocations/images/assignment.png" alt="Assignment" title="Assignment" style="border: 1px solid gray; zoom:80%;">

**Assign Auditors**

1. Select the **Search Auditors** dropdown to assign team members to evaluate interactions.

1. Choose multiple auditors to distribute the evaluation workload. Consider these factors when selecting auditors.

**Configure Distribution**

1. Enter the **Allocation Percentage** for each selected auditor. The percentage determines what portion of the total interactions each auditor receives.

1. Review the **Interactions** column, which automatically calculates the exact interaction count for each auditor based on your percentage input. Example: 100 total interactions with three auditors

    * Auditor A: 40% = 40 interactions
    * Auditor B: 30% = 30 interactions
    * Auditor C: 30% = 30 interactions

1. Adjust percentages until they total exactly 100%. The **Create** button remains disabled until your allocation percentages sum to 100%, ensuring complete interaction coverage.

**Finalize and Create**

1. Review your complete allocation configuration:

    * Settings: Form, languages, agents, and agent groups.
    * Allocation: Method (Random or Custom), filters, and total interactions.
    * Assignment: Auditors and their distribution percentages.

2. Select **Create** to activate the allocation.

The system immediately assigns interactions to the selected auditors, making them visible in each auditor's **Assigned to Me** tab. Auditors can begin evaluating their assigned interactions right away.

**Post-Creation**

After creating the allocation:

* The allocation appears in your **My Allocations** tab.

* Auditors see their assigned interactions in **Assigned to Me**.

* You can track completion progress in real-time.

* Edit the allocation anytime to reassign pending interactions.

## Use Case Example: Managing Auditor Availability During Peak Season

**Scenario**: A QA Manager creates a monthly random sample allocation for 15 auditors. Three days later, two auditors report unexpected leave, leaving 40 pending interactions unassigned during the busiest month of the year.

**Step-by-Step Process**:

1. **Identify the Issue**

    * Open **My Allocations** tab.

    * Locate the "December 2024 Monthly Sample" allocation.

    * Notice completed count showing slow progress.

    * Review the auditor list and confirm that two auditors haven't started their assignments.

1. **Access Edit Capability**

    * Select **Edit** from the Actions menu.

    * Review current allocation showing:

        * Auditor John: 20 interactions assigned, 0 completed, 20 pending.

        * Auditor Doe: 20 interactions assigned, 0 completed, 20 pending.

        * The other 13 auditors: Various completion rates.

1. **Reassign Pending Work**

    * Select checkboxes for Auditor John and Auditor Doe.

    * System identifies 40 total pending interactions to reassign.

    * Select **Add New Auditors** to access available team members.

    * Select three auditors with lighter workloads: C, P, R.

1. **Configure New Distribution**

    * Assign 35% to C (14 interactions)
    * Assign 35% to P (14 interactions)
    * Assign 30% to R (12 interactions)
    * Verify total reaches 100%

1. **Complete Reassignment**

    * Select **Update** to apply changes.
    * System redistributes 40 pending interactions.
    * C, P, and R immediately see new assignments in their **Assigned to Me** tabs.
    * Original auditors' completed work remains unchanged.

**Outcome**: Critical monthly audit maintains schedule despite staffing disruption. No interactions lost or duplicated, completed evaluations preserved, and workload balanced across available team members.


