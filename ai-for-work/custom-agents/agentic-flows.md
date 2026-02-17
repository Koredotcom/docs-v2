# Agentic Flows

Agentic Flow enables the sequential execution of multiple AI agents to accomplish and automate complex tasks efficiently using AI agents. These flows streamline workflows by automating interactions and decision-making processes based on predefined logic and user input.

## Creating Agentic Flow

Follow these steps to create a new Agentic Flow:

1. Access the Admin Console
    * Navigate to **AI Agents** in the left pane.
    * Select **Agentic Flow** to view the list of existing flows.
    <img src="../images/Agentic_App_1.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

2. Initiate Agent Creation
    * Click **+Create Agent** on the Agentic Flow page.
    * The **Prompt Agentic Flow Creation Wizard** guides you through the setup process.
    <img src="../images/Agentic_App_2.png" alt="Admin Creation" title="Admin Creation" style="border: 1px solid gray; zoom:70%;">

### Step 1: Details and Purpose

Define your agent's name and purpose for optimal performance.

* **agent Name**: Enter a unique and meaningful name for your agent.
* **Purpose**: Defines the intended functionality of the agent for query routing and training. This field specifies both the default prompt and sample queries that help the system in correctly routing user queries to the appropriate flow.  
<img src="../images/Agentic_App_3.png" alt="Details and Purpose" title="Details and Purpose" style="border: 1px solid gray; zoom:70%;">

!!! note

    A well-defined purpose enhances the agent’s ability to correctly interpret and execute tasks, ensuring precise and effective responses to user queries.

### Step 2: Build Agentic Flow

Customize the agent's workflow using a prompt-based interface.

1. **Prompt**: A default prompt is auto-generated based on the agent’s purpose. This prompt can be customized using variables. Based on the defined purpose, the system automatically generates the necessary workflow steps to complete the task. For example, in a financial advisor workflow, performing research, checking who owns the shares, and deciding to sell or hold shares based on research.  
2. Click **Get Flow** to review.
3. Customize your flow as needed:
    * To add a step: Click **+ Add** button above or below any existing step.
    * To edit or delete a step: Hover on the step and find options to either edit or delete the step.
    * To reorder steps: Drag and drop steps to the desired position.
4. Click **Run** to execute all configured steps sequentially.
5. Click **Continue** to proceed to the next step.  

### Step 3: Appearance and Behavior

In the **Appearance and Behavior** section, a list of sample queries are displayed. If needed,
you can add additional queries by clicking the **+ Add Query** button. Enable **Clear End-User Chat History** toggle to automatically delete the agent's chat history for end users after a specified period. Once you're ready, click **Publish** to proceed to the next step. 

### Step 4: Publish

Publish your agent and define access permissions and enablement.

**Specify publishing details**:

* **Publish To**: Define access permissions:
    * **Everyone in the Account**: Make the agent available to all users.
    * **Limited Users**: Grant access to specific workspace users or groups added in publish settings of workspace.
* **Enablement Type**: Configure how users interact with the agent:
    * **Always Enabled**: The agent remains active and cannot be disabled.
    * **Users Choice**: Users can enable or disable the agent as needed.

!!! note

    The publishing options are defined in the Workspace settings. For additional information, [Workspace](../Administration/workspace.md).

**Finalize deployment**:

* Click **Publish** to make the agent available. The agent appears in the **Agentic Flow List** on the Admin Console page.

## Example Implementation: Finance Advisor

### Accessing the Finance Advisor agent

1. Locate the Finance Advisor:
    * Enter `Finance Advisor` in the search box at the **Home** page. The search results will display a matching flow.  
2. Review flow Configuration:
    * Upon accessing the Finance Advisor agent, you will see a structured sequence of agent flows.
    * Each flow represents a specific stage of financial analysis.
    * Options available for each flow:
        * **Add**: Include new analysis steps
        * **Edit**: Modify existing step
        * **Delete**: Remove a step
    * Click **Start** to execute the sequence of flows.  

### Flow Execution and Results

#### Step 1: Market Analysis Overview

The initial step employs the RAG (Retrieval Augmented Generation) agent to conduct a comprehensive analysis of NVIDIA's market performance. The agent processes indexed files to evaluate current market indicators and historical performance patterns.

#### Step 2: Company Share Owners

During the second step, the system uses the API agent to retrieve detailed ownership information from the client database. This procedure produces a comprehensive overview of existing shareholders, which includes institutional investors, individual stakeholders, and client portfolio allocations.

#### Step 3: Client Information and Risk Factor

The third step activates the Prompt agent to perform a thorough risk evaluation and develop strategic recommendations. Based on the consolidated data from previous steps, the agent formulates hold or sell recommendations.

#### Step 4: Compose an Email

The final step automatically generates a professional email that synthesizes all analyses and recommendations from the previous flows.

**Email Format**:

* Professional business format with clear sections.
* Data visualizations and tables where applicable.
* Formal closing with contact details.

!!! note

    The email can be edited and customized before sending to ensure it meets specific communication requirements and organizational standard.

    
