# Autonomous Agents

Autonomous Agents are AI-powered agents that leverage Agent Platform to autonomously manage complex business tasks and workflows. These agents can rapidly respond to evolving business requirements and circumstances in real time by employing adaptive algorithms for dynamic decision-making. They can significantly increase your organization's operational efficiency and decision-making capabilities by integrating artificial intelligence with business process automation.

## Creating Autonomous Agent

The creation of a new Autonomous Agent follows a structured, four-step process designed to ensure proper configuration and deployment.

Follow these steps to create a new Autonomous Agent:

1. Access the Admin Console:
    * Navigate to **AI Agents** in the left pane.
    * Select **Autonomous Agents** to view the list of existing agents.
2. Initiate Agent Creation:
    * Click **+Create Agent** on the Autonomous Agents page.
    * The **Agent Creation Wizard** guides you through the setup process.
    <img src="../images/Advance_Agentic_App_1.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">
3. Details and Purpose: Define your agent's name and purpose for optimal performance.
    * **Icon**: Choose from the predefined icon library or upload a custom icon.
    * **Agent Name**: Enter a unique and meaningful name for your agent.
    * **Purpose of agent**: Define the intended functionality of the agent for query routing and training. This field specifies both the default prompt and sample queries that help the system in correctly routing user queries to the appropriate agent.
4. Configure Autonomous Agent: The configuration step establishes the technical foundation of your agent through API integration.  

     Define API fields as per the details below: In the Define Autonomous API section, select between **Sync Mode** and **Async Mode**, depending on the requirements of your interactions.

       1.  **Sync Mode**: In sync mode, users receive immediate responses. This
        mode doesn’t require a POST URL or access token, making it simple for
        quick interactions. However, sync mode includes a 60-second timeout, so
        it’s best suited for autonomous that can be completed within that
        timeframe.

       2.  **Async Mode:** In async mode, the setup is more flexible and is ideal
        for cases that may take longer than 60 seconds. This mode requires a
        POST URL and the agent’s access token to be specified in the Autonomous agent
        endpoint. Once the agent completes its process, Autonomous posts the response
        back to the specified endpoint.

     For Async Mode, enter the **POST URL** and **Access token**.
     <img src="../images/async.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

     * **URL**: Enter the endpoint URL of the agent obtained from the Agentic Platform.
  
     * **Method**: Enter the type of request you want to make.
  
     * **Headers**: Specify the information that helps to customize your API request. These are like special instructions that come with your request, such as authentication tokens or specifying the type of data you're sending. You can add multiple headers as needed.
  
     * **Query String**: Specify additional information attached to the end of your URL to filter or customize your request.
  
     * **Body Type**: Enter the format of the data you are sending with your request. Common types include JSON, or Raw. This tells the API how to interpret the information you're sending.
  
     * **Content Type**: Enter a specific label that tells the API what kind of data you are sending.

     Curl Import: For existing APIs, use the CURL Import functionality to automatically populate API configuration, refer [Environment](https://docs.kore.ai/agent-platform/ai-agents/agentic-apps/deployment/app-deployment/) to learn more about retrieving cURL of AI Agent from Agent Platform.

     1. Click **Curl Import** to open the import interface.
     2. Paste your CURL command into the text box.
     3. Click **Import** to extract API details.
     <img src="../images/Advance_Agentic_App_2.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

5. Appearance and Behavior: The **Appearance and Behavior** section displays sample queries to test the agent’s behavior.
     1. Click **+Add Query** to input additional test queries.
     2. Enable **Allow End User Notification** toggle to enable notification configuration and agent trigger setup, For detailed instructions, refer [Notifications](../custom-agents/notify-api.md)</a>.
     3. Enable **Clear End-User Chat History** toggle to automatically delete the agent's chat history for end users after a specified period.
     4. Once validated, click **Publish** to move to the final step.
     <img src="../images/Advance_Agentic_App_3.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

6. Publish: Publish your agent and define access permissions and enablement.

**Specify publishing details**:

* **Publish To**: Define access permissions:
    * **Everyone in the Account**: Make the agent available to all users.
    * **Limited Users**: Grant access to specific workspace users or groups added in publish settings of workspace.
* **Enablement Type**: Configure how users interact with the agent:
    * **Always Enabled**: The agent remains active and cannot be disabled.
    * **Users Choice**: Users can enable or disable the agent as needed.

7. Click **Publish** to make the agent available. The agent appears in the **Autonomous Agent List** on the Admin Console page.

## Import existing Autonomous Agent

To import an existing Autonomous Agent:

1. Click the **Import** **Agent** button located in the upper-right corner.
2. Select the .ZIP file of the existing agent.
3. Click **Import** to complete the process. The imported agent will appear on the Autonomous Agent page.

!!!note

    You cannot directly import agents exported from the Agent Platform. Only Autonomous Agents that were originally created and exported from application can be imported using this feature.

## Usage

Autonomous Agents integrate seamlessly with the Agent Platform to provide intelligent, automated assistance for business tasks. You can trigger an agent from the **Compose bar > Agents > agent tab**. Here's how they operate in practice:

When deployed, the Autonomous Agent appears as an interactive agent within the AI Work interface. As shown in the example screenshot, users can engage in natural conversations with the agent to accomplish specific tasks. The agent understands the context, process requests, and provides relevant responses based on its configured capabilities.

<img src="../images/Advance_Agentic_App_5.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">
