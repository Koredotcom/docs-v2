# Workflow Agent

The Workflow Agent allows users to integrate tools in Agent Platform to deliver precise, contextually relevant responses to user queries in real time. This streamlined approach simplifies the process of creating intelligent agents, enabling businesses to deploy solutions quickly and efficiently.

The Agent leverages APIs and combines retrieval and generation techniques to provide accurate and contextually relevant answers to user queries. These highly configurable agents allow users to select and fine-tune models from various options within the Workflow platform. Once configured, these agents dynamically adapt to user inputs, providing real-time, intelligent responses.

You can create a new agent or import an existing one.

-   [Import existing Workflow agent](#import-existing-workflow-agent)

-   [Create Workflow agent](#create-workflow-agent)

## Import existing Workflow agent

To import an existing Workflow agent:

1. Click the **Import Agent** button located in the upper-right corner.
<img src="../images/import-workflow.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

1. Select the .ZIP file of the existing agent.
<img src="../images/import-workflow-agent.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

1. Click **Import** to complete the process. The imported agent will appear on the Workflow Agents page.

## Create Workflow Agent

To create a Workflow Agent, follow the steps outlined below:

1. In the **Admin Console**, click **AI Agents** from the left pane, and then select **Workflow Agents**. A list of available workflow agents will be displayed.
<img src="../images/AI_agent_workflow.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

1. On the Workflow Agents page, click **+Create Agent**.
<img src="../images/create_agent.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

1. The **Workflow** / **Workflow Agent creation** wizard will take you through the following steps:

     - [Step 1: Define the purpose of the Agent](#step-1-details-and-purpose)

     - [Step 2: Configure Workflow Flow](#step-2-configure-workflow-flow)

     - [Step 3: Preview the configuration](#step-3-appearance-and-behavior)

     - [Step 4: Publish the Agent](#step-4-publish)

### Step 1: Details and Purpose

Provide a suitable and unique name for the agent and describe the purpose of the
agent. Defining the agent’s purpose enables to accurately recognize the agent’s capabilities and effectively utilize them to respond to user queries aligned with the specified intent. It is essential to clearly outline the specific use cases for which the agent is designed.

For instance, if an agent called "Sales Buddy" is created to handle user queries, specifying its purpose helps this agent whenever a user sends a query related to any cross-sell or upsell product.

<img src="../images/detail_and_purpose_workflow.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

### Step 2: Configure Workflow Flow

You must integrate **Workflow Flow** with the **Workflow** platform and create a
channel. To set up a channel and complete the integration process, follow the
steps outlined below:

1.  In the Define Workflow API section, select between **Sync Mode** and **Async
    Mode**, depending on the requirements of your interactions.

    1.  **Sync Mode**: In sync mode, users receive immediate responses. This
        mode doesn’t require a POST URL or access token, making it simple for
        quick interactions. However, sync mode includes a 60-second timeout, so
        it’s best suited for workflow that can be completed within that
        timeframe.

    2.  **Async Mode:** In async mode, the setup is more flexible and is ideal
        for cases that may take longer than 60 seconds. This mode requires a
        POST URL and the agent’s access token to be specified in the Workflow agent
        endpoint. Once the agent completes its process, Workflow posts the response
        back to the specified endpoint.

2.  For Async Mode, enter the **POST URL** and **Access token**.
<img src="../images/async.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

To configure async mode with the Workflow Platform, copy the **POST URL** and **Access Token** from the agent, then follow the steps outlined below.

1.  Navigate to the Workflow Platform. Open the agent you want to add the channels to.

2.  On the **Agents** tab, click the name of the agent that you want to integrate and then click **Agent endpoint** in the left  navigation.

3.  Select the **Async push** to enable asynchronous response handling and click the settings icon next to the **Async push** option.
<img src="../images/async_push.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

4.  Next, paste the copied **POST URL** and **Access Token** into the appropriate fields on the **Sync/Async mode setup** page.  

5.  Click **Save** to save the configuration.
6.   Next, on the **Define API** page, click on the **CURL Import**
    option.
7.  The **Import URL** dialog is displayed.
    To get the curl, follow the steps outlined below:

    1.  Navigate to the Workflow Platform. Open the agent you want to add the
        channels to.

    2.  On the **Agents** tab, click the name of the agent that you want to
        integrate and then click **Agent endpoint** in the left
        navigation.

    3.  Copy the appropriate cURL to use in the platform to complete the
        integration. Use the sync cURL for sync mode and the async cURL for asyn
        mode.

8.  In the **Import URL,**  paste the **cURL**  that you have fetched from the
    Workflow Agent.

9.  Click **Import** to add the cURL

10. Click **Run** to fetch the API details.  

11. After fetching the API details, enter the API key value. To get the API key:

    1.  Navigate to the Workflow Platform. On the **Agents** tab, click on the agent
        that you want to integrate.

    2.  In the left navigation, click **API Keys**, then select **Create new
        key**.

    3.  In the popup window, click on the **Generate Key** button. Once the API
        key is generated, click **Copy and Close** to copy the key and to exit.

12. In the API key value field, paste the key that you have copied from the Workflow
    Agent and click **Continue**.

13. The API response output displays all the keys received in the response. These keys are used to map the specific value that should be shown to the end user.
<img src="../images/response.png" alt="Admin Console" title="Admin Console" style="border: 1px solid gray; zoom:70%;">

14. Click **Continue** to move to the next step.

### Step 3: Appearance and Behavior

The **Appearance and Behavior** section displays sample queries to test the agent’s behavior.

1. Click **+Add Query** to input additional test queries.
2. Enable **Allow End User Notification** toggle to enable notification configuration and agent trigger setup, For detailed instructions, refer to , refer [Notifications](../custom-agents/notify-api.md).
3. Enable **Clear End-User Chat History** toggle to automatically delete the agent's chat history for end users after a specified period.
4. Once validated, click **Publish** to move to the final step.

### Step 4: Publish

Publish your agent and define access permissions and enablement.

**Specify publishing details**:

* **Publish To**: Define access permissions:
    * **Everyone in the Account**: Make the agent available to all users.
    * **Limited Users**: Grant access to specific workspace users or groups added in publish settings of workspace.
* **Enablement Type**: Configure how users interact with the agent:
    * **Always Enabled**: The agent remains active and cannot be disabled.
    * **Users Choice**: Users can enable or disable the agent as needed.

Note: The publishing options are defined in the Workspace settings. For additional information, [Workspace](../Administration/workspace.md).

##  Manage Input and Output

In Workflow, Agent Flows provide a structured way to manage input and output
variables that control data flow and context throughout the agent's execution.

-   **Input Variables:** The input variables provide initial data to the agent
    flow.

-   **Output Variables:** The output variables store and make accessible the
    derived values from the flow. You must define output variables to capture
    the results you want to return from the agent.

Once input and output variables are defined in the Workflow Flow, they become
accessible throughout the flow and will be automatically displayed in “AI for
Work”. This makes it easy to view and manage the data exchange between the agent
and the connected platform.

## User Interaction with Sync and Async Flows

The end-user experience varies between sync and async flows in the Workflow Agent,
offering flexibility in response times and delivery methods.

In **sync mode**, users can expect immediate responses. After selecting the
appropriate agent, users simply enter a query and receive a real-time answer
displayed within the current interface. This real-time interaction is ideal for
scenarios requiring quick responses, as the system processes the request and
displays the output directly within the current session. This mode is ideal for
cases where the file processing can be completed within a short timeframe (up to
60 seconds), allowing users to quickly retrieve answers.

In **async mode**, the process accommodates more complex queries that may
require additional processing time. Users still select an agent and enter their
queries. However, instead of receiving immediate results, they are
notified in a notification section once the query is processed. This approach
makes async mode particularly suited to cases where the query might take more
than 60 seconds to execute.