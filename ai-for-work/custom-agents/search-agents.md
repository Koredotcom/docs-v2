# Search Agents

Search agents combine retrieval and generation techniques to provide accurate and contextually relevant answers to user queries. Search agents leverage existing knowledge bases to find and retrieve relevant information and then use LLM models to generate an accurate and precise response.

Users can connect SearchAI applications or Amazon Q Indices in Search Agents with a simple description. **Search** AI allows you to configure and index content from various knowledge bases, files, and websites in the application, which is then used to dynamically provide answers to user queries. Amazon Q indexes enterprise data in your AWS cloud, using 90+ connectors for AWS and non-AWS systems. This provides a comprehensive search across your organization's knowledge base while maintaining data sovereignty.

With Search AI, configure the application to index all relevant information from various sources, such as the company website, documentation sites, product guides, and FAQ pages. With Amazon Q, you can index the data in your own AWS cloud. Once the content source is configured, create a **RAG Agent** that can interact with your chosen search solution to retrieve and generate accurate, up-to-date information. This agent will respond to user queries that match with description or purpose given during agent creation. For use cases when a search index should act as the default knowledge repository (without a given description for intent), please connect it within [Enterprise Knowledge](../custom-agents/enterprise-knowledge.md).

### Prerequisites

Before creating a RAG Agent, ensure that your chosen search solution is configured accurately to enable the retrieval and generation of responses.

**For Search AI applications**, follow these steps to prepare:

* [Create a search AI](https://docs.kore.ai/searchassist/getting-started/build-and-publish-your-first-searchassist-app/) application.
* [Configure content sources](https://docs.kore.ai/searchassist/manage-content-sources/content-overview/) in the application.
* Fine-tune the application [search settings](https://docs.kore.ai/xo/searchai/chunk-browser/) to generate appropriate responses.
* [Enable Answers](https://docs.kore.ai/searchassist/concepts/personalizing-results/about-answers/).
* Train the application.
* Enable the [Client Channel for communication](https://docs.kore.ai/searchassist/administration/web-sdk-integration/#Step_1_Configure_Channel_and_credentials). Ensure that the appropriate API scope is enabled for the application.
* The Search AI application is ready for communication.

**For [Amazon Q](../integration/amazon-q.md) integration**, ensure you have:

* An existing Amazon Q Business application with indexed enterprise content.
* Appropriate AWS credentials and permissions.
* Access to AWS data accessor configuration details.

To create a Search Agent, go to the **Search Agents** section in the Admin Console and click on **Create Agent.**

The **RAG Agent creation** wizard will take you through the following steps:

1. Define the purpose of the agent and provide the details.
2. Provide the configuration details of the Search AI application or Amazon Q index to set up the interaction between the RAG Agent and your chosen search solution.
3. Review the Agent configuration and Sample Queries.
4. Publish the Agent.


### Step 1: Details and Purpose

Provide a suitable and unique **name** for the agent. Briefly describe the **purpose** of the agent. Defining the agent’s purpose enables the Orchestrator to accurately recognize the agent’s capabilities and effectively utilize them to respond to user queries aligned with the specified intent. It is essential to clearly outline the specific use cases for which the agent is designed so it can be accurately evoked by simple queries by users.

For instance, if an agent is designed to answer all the user queries related to HR policies, specifying it as the purpose helps the system use this agent whenever a user sends a query related to any HR policy.

<img src="../images/search_agents_1.png" alt="Details and Purpose" title="Details and Purpose" style="border: 1px solid gray; zoom:70%;">

### Step 2: Configure Search Index

The next step is to configure your search index, which contains the indexed content used for answer generation. Application allows flexible integration with different search solutions based on your enterprise search needs.

In the **Search Index Options**, you can choose between:

#### Option 1: Search AI

If you select **Search AI**, provide the following details for integration. These details are available in the **Search AI app** on the **Credentials** page under the **Manage** tab, click **Dev Tools,** and choose the **Web/Mobile SDK** tab. Refer to[ this](https://docs.kore.ai/xo/app-settings/dev-tools/kore-ai-web-sdk/) for more details.

* **URL**: Select your Search AI instance where the application is hosted.
* **App ID**: Application ID of the Search AI app.
* **Client ID**: Client credentials generated in Search AI for interaction with the RAG Agent.
* **Client Secret ID**: A secret key generated for secure interaction.
* **Search ID**: Unique identifier of the client generated in Search AI.

You need to associate four [API Scope](https://docs.kore.ai/xo/apis/automation/api-introduction/) in your AI for Service platform's App channel:

* Answer Generation
* Permission Entity Management
* Document Management
* Facets


#### Option 2: [Amazon Q](../integration/amazon-q.md)

If you select **Amazon Q**, you can integrate with your existing Amazon Q Index.

<img src="../images/search_agents_2.png" alt="Details and Purpose" title="Details and Purpose" style="border: 1px solid gray; zoom:70%;">

To configure Amazon Q integration:

1. Use the **Tenant ID** displayed in the configuration screen during AWS data accessor setup.
2. Fill in the following details from the AWS *Information for data accessor* section.
    * **Application ID**: The unique identifier of your Amazon Q Business application.
    * **Retriever ID**: The unique identifier of your Amazon Q Business retriever.
    * **Access Resource Name**: ARN for secure access to your Amazon Q resources.
    * **Application Location**: The AWS region where your Amazon Q Business application is deployed.
    * **IDC Location**: The AWS region where your AWS Identity Center instance is located.

<img src="../images/search_agents_3.png" alt="Details and Purpose" title="Details and Purpose" style="border: 1px solid gray; zoom:70%;">

### Step 3: Appearance and Behavior

In the **Appearance and Behavior** section, a list of sample queries is displayed. If needed, you can add additional queries by clicking the **+ Add Query** button. Enable the **Clear End-User Chat History** toggle to automatically delete the agent's chat history for end users after a specified period. Once you're ready, click **Publish** to proceed to the next step.

<img src="../images/search_agents_4.png" alt="Details and Purpose" title="Details and Purpose" style="border: 1px solid gray; zoom:70%;">

### Step 4: Publish

Publish your agent and define access permissions and enablement.

**Specify publishing details**:

* **Publish To**: Define access permissions:
    * **Everyone in the Account**: Make the agent available to all users.
    * **Limited Users**: Grant access to specific workspace users or groups added in the publish settings of the workspace.
* **Enablement Type**: Configure how users interact with the agent:
    * **Always Enabled**: The agent remains active and cannot be disabled.
    * **Users Choice**: Users can enable or disable the agent as needed.

!!! note
    The publishing options are defined in the Workspace settings. For additional information, refer to [Workspace](../workspace-management/account-workspace.md).
