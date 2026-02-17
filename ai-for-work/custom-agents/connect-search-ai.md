# Connect Search AI

The Search AI configuration establishes a connection to a dedicated search application that indexes your content and retrieves relevant information based on user queries. This approach excels at finding specific information across large document repositories and structured data sources.

To connect Search AI complete the following instructions:

1. Navigate to **Enterprise Knowledge** on the left pane.
2. Click **Configure** and then **Create New**.
3. Select **Search AI**.
4. The next step is to configure the Search AI app, which has the indexed content used for answer generation. Provide the following details for the connection. These details are available in the **Search AI app** on the **Credentials** page under the **Manage** tab, click **Dev Tools** and choose **Web/Mobile SDK** tab. Refer to [this](https://docs.kore.ai/xo/app-settings/dev-tools/kore-ai-web-sdk/) for more details.
    * **Source name**: Create a unique and descriptive name for this knowledge source to easily identify it in your Enterprise Knowledge configuration.
    * **Description**: Provide a brief explanation of what this source contains and its purpose within your knowledge ecosystem.
    * **URL**: Enter the endpoint URL for the Search AI service where API requests will be sent. This is typically provided in your Search AI documentation.
    * **App ID**: Application ID of the Search AI app.
    * **Client ID**: Client credentials generated in Search AI for interaction with the RAG Agent.
    * **Client Secret ID**: A secret key generated for secure interaction.
    * **Search ID**: Unique identifier of the client generated in Search AI.

You need to associate four [API Scope](https://docs.kore.ai/xo/apis/automation/api-introduction/) in your AI for Service platforms App's channel:

* Answer Generation
* Permission Entity Management
* Document Management
* Facets

!!! note
     These details are available in the **Search AI app** on the **Credentials** page under the **Manage** tab. Refer to [this](https://docs.kore.ai/xo/searchai/about-search-ai/) for more details.

**Access associated Apps**

Under the **AI search** agents, go to **Enterprise Knowledge**. Then, use the **Go to Search AI** option to access **the associated Search AI** app.

* [Configure the content sources](https://docs.kore.ai/searchassist/manage-content-sources/content-overview/) on the Search AI application.
* Fine-tune configurations to get appropriate responses.
* [Enable Answers](https://docs.kore.ai/searchassist/concepts/personalizing-results/about-answers/).
* Train the application.

On the following page in the Admin Console, you can view an overview of the content sources connected to the Enterprise Knowledge, such as uploaded files, indexed webpages, third-party content sources, etc. Each source's associated content or connection status is also indicated. For the third-party connectors, it also indicates the last sync time.
