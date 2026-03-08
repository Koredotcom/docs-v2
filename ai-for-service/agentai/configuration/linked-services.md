# Linked Services

The **Linked Services** section lets you integrate Agent AI with external services to enhance its capabilities. It includes the following subsections:

* **Search AI**: Use this integration to enhance Agent AI’s search capabilities across web and mobile platforms.
* **Agentic Configurations**: Use this integration to configure, manage, and connect Agentic Copilot apps for autonomous, end-to-end conversation management. 

## Search AI

Search AI provides an intelligent, contextual, and personalized search experience in every interaction across web and mobile channels. In this section, you can define how Agent AI performs search operations. 

### How Does It Work?

1. **Set up Search AI Apps**: Add all the segregated information sources (internal information, external information, and auto-suggestions) the targeted agents might need in their searches, like web pages, data, documents, and content from apps like ServiceNow and Confluence.
2. **Link Search AI with Agent AI**: Administrators can link up to three Search AI applications with Agent AI, as explained in this document. Once linked, Search AI content is automatically available for Agent AI as a service in runtime.
3. **View Search AI data in Agent AI**: In the Agent AI widget, agents can view relevant snippets and articles from the Search AI application, and Dialog Tasks and FAQs from the XO Platform or the Use Cases of the Agent AI application. 

### How Does It Help Agents?

When Agent AI is integrated with Search AI, data from all the sources configured in the Search AI application are accessible to agents via the **Agent AI widget** > **Search** tab. In the search results, Snippets and Articles are shown from the Search AI application, and Dialog Tasks and FAQs are shown from the Use Cases of the Agent AI application. Agents can quickly review the search results and share relevant information with the customers. This feature also enables sending internal notes to agents with important, agent-only information that can’t be sent or copied to customers.  

### How to Link Search AI with Agent AI?

Linking the Search AI application with Agent AI is a two-step process: 

1. **Enable the communication channel in Search AI for XO 10**: First, create client credentials in Search AI with these API scopes–Ingest Data, Live Search, Full Search, Advanced Search, and Auto Suggestions. Then, enable a communication channel. For more information, refer to the [Integrate SearchAssist with third-party applications](https://docs.kore.ai/searchassist/administration/integrate-searchassist-with-third-party-applications/){:target="_blank"} doc.  
2. **Use the client credentials to link the Search AI apps with Agent AI for XO 11**. 

### Configure Search AI

In this section, you can select the Search App and define the search functionality. The following options are available to select:

* **None**: Makes the Search AI functionality unavailable, and search results don’t appear on the widget.
* **Use only the inbuilt XO 11 Search App (AA Bot)**: Uses the built-in XO 11 Search AI app available with the current AI for Service app.
* **Configure multiple Search Apps across XO 10 or XO 11**: Lets you configure up to three custom Search AI apps across XO 10 or XO 11.  
<img src="../answers-configuration-images/search-ai-configuration-options.png" alt="search-ai-configuration" title="search-ai-configuration" style="border: 1px solid gray; zoom:80%;">   

#### None

Select this option to restrict the search capability to the configured bot. When you select it, the Agent AI widget shows the following search experience: 

* If you search for content unrelated to the bot, the **No Search Result Found** message appears.
* If your search matches information within the bot (for example, dialog tasks), a screenshot similar to the following appears:   
    <img src="../answers-configuration-images/none-searchai-config.png" alt="none-searchai-config" title="none-searchai-config" style="border: 1px solid gray; zoom:100%;">  

#### Use only the inbuilt XO 11 Search App (AA Bot)

Select this option to use the inbuilt Search AI app linked to your XO 11 sign-in app. Use this setting to select internal or external information sources and to customize how the app retrieves information and generates responses. 

**Steps to select the built-in XO 11 Search App**:

1. Sign in to [AI for Service](https://platform.kore.ai/){:target="_blank"}. 
2. Go to **Agent AI** > **Linked Services** > **Search AI**.
3. Select **Use only the inbuilt XO 11 Search App (AA Bot)**.
4. Expand the **Search App** section, select **Internal Information** or **External Information** in the **Use This App Settings for** field, and then select **Okay**.  
5. Expand the **Knowledge AI** section.   
    <img src="../answers-configuration-images/knowledge-ai-7.png" alt="knowledge-ai" title="knowledge-ai" style="border: 1px solid gray; zoom:100%;">  

    4. Turn on the **Knowledge Settings** toggle. (By default, it remains turned off.)
    5. Select a **channel** in the **Select channel** list.
    6. Refer to the [Knowledge AI](#knowledge-ai) section, and select the options under the **Search Results** and **Control expand behavior of Answers** sections.
    7. Select **Add Custom Meta Filter Script (Optional)** under **Advanced Search API Configuration**, Select **Add Script**, enter your script in the **Define Script** editor, and select **Save**.  

6. Select **Save**.  

!!! note 

    You must enable the **Answer Generation** option to use the  in-built XO 11 Search App. 

Steps to enable Answer Generation:   

1. Sign in to [AI for Service](https://platform.kore.ai/){:target="_blank"}. 
2. Go to **App Settings**, and select **Configurations** > **Dev Tools** > **API Scopes**. 
    <img src="../answers-configuration-images/app-settings-api-scope.jpg" alt="app-settings-api-scope" title="app-settings-api-scope" style="border: 1px solid gray; zoom:100%;"> 

3. Select the **edit** icon next to an existing JWT App.  

4. On the **Edit App Definition** page, scroll down and turn on the **Answer Generation** toggle. 
    <img src="../answers-configuration-images/enable-answer-generation.jpg" alt="enable-answer-generation" title="enable-answer-generation" style="border: 1px solid gray; zoom:60%;"> 

5. Select **Save**.

#### Configure multiple Search Apps across XO 10 or XO 11

Select this option to configure and enable up to three Search Apps across XO 10 or XO 11. This option lets you restrict the search capabilities for specific users. You can configure  these apps with the following scopes: 

* **Internal Information**: Use this feature to send only internal notes to agents. Agents can’t share these search results with customers because the **Send** and **Copy** buttons aren't available. The following screenshot shows internal information for the search term **national pension**:  
    <img src="../answers-configuration-images/internal-information-1.png" alt="internal-information" title="internal-information" style="border: 1px solid gray; zoom:50%;">

* **External Information**: Use this feature to fetch external information through the Search AI apps. This information includes **Send** and **Copy** buttons to let agents share it with customers.  
    <img src="../answers-configuration-images/external-information-2.png" alt="external-information" title="external-information" style="border: 1px solid gray; zoom:50%;">

* **Auto-Suggestions**: This feature helps agents find information faster by showing relevant past search entries as they type in the search bar. As an agent enters text in the Search bar, Search AI retrieves and displays matching search terms stored in the Search AI database, allowing agents to quickly select a suggestion instead of completing the query manually. The following screenshot shows auto-suggestions for the search term **pizza**:  
    <img src="../answers-configuration-images/auto-suggestions-3.png" alt="auto-suggestions" title="auto-suggestions" style="border: 1px solid gray; zoom:50%;">

**Steps to configure the Search AI apps**:

1. Sign in to [AI for Service](https://platform.kore.ai){:target="_blank"}.
2. Go to **Agent AI** > **Linked Services** > **Search AI**.  
3. Select the **Configure multiple Search Apps across XO 10 or XO 11** option.  
4. Select **+Add Search AI App**.  
    <img src="../answers-configuration-images/add-search-ai-app-5.png" alt="add-search-ai-app" title="add-search-ai-app" style="border: 1px solid gray; zoom:80%;">  
5. Enter a name for the Search AI app in the **Name** field.
6. Select the version (XO10 or XO11) for the app in the **Select Version** list.  
7. Select an option or options in the **Use This App Settings for** list. Refer to the **[Configuration Rules](#configuration-rules)** while selecting your options.   

    !!! note

        Auto-Suggestions option is not available for the XO11 app.

8. Enter the following client credentials generated by the Search AI application:
    * **Domain URL**: The Domain URL to be used for this specific search app.
    * **Stream ID**: The Stream ID to be used for this specific search app.
    * **Client ID**: The Client ID to be used for this specific search app.
    * **Client Secret**: The Client Secret to be used for this specific search app.  
9. Expand the **Knowledge AI** section (displays only if you have selected **Internal Information** or **External Information** in the **Use This App Settings for** field).  
    1. Turn on the toggle. (By default, it remains turned off.)
    2. Select a **channel** in the **Select channel** list.
    3. Refer to the [Knowledge AI](#knowledge-ai) section, and select the options under the **Search Results** and **Control expand behavior of Answers** sections.  
    4. Select **Add Custom Meta Filter Script (Optional)** under **Advanced Search API Configuration**, Select **Add Script**, enter your script in the **Define Script** editor, and select **Save**.   
    <img src="../answers-configuration-images/knowledge-ai-7.png" alt="knowledge-ai" title="knowledge-ai" style="border: 1px solid gray; zoom:80%;">  

10. Select **Test Connection & Save** to verify the configuration. The **Connection Established Successfully** message appears, if the connection is successful.
11. Add more Search AI apps, as required, by following the above steps. 

#### Configuration Rules

* Choose either **Internal Information** or **External Information** with **Auto-Suggestions**.
* **Internal** **Information** and **External Information** can’t be combined in one app.
* **Auto-Suggestions** can be configured only for XO 10 app.
* **Knowledge AI settings** are available only if you select either Internal Information or External Information. 

#### Knowledge AI

This section lets you gain access to the **Knowledge AI** features within the Agent AI widget during customer interactions. Here, you can set channel-specific display of Knowledge AI search results. It has the following sub-sections:

This section allows you to access the Knowledge AI features within the Agent AI widget during customer interactions. You can configure how Knowledge AI search results appear for each channel. It includes the following options: 

* **Search Results**: Controls how the Knowledge AI search results appear. Agents can select **Always Show**, **Show with XO results**, or **Show as a Fallback event**.
    * **Always Show**: Shows all results of Knowledge AI, regardless of bot intents. This is the default selection.
    * **Show with XO results**: Shows results of Knowledge AI only when relevant bot events, such as Dialog Tasks or FAQs, are detected.
    * **Show as a Fallback event**: Shows results of Knowledge AI as a fallback, only when no bot events are detected.
* **Advanced Search API Configuration**: It lets you optimize your search experience with the advanced Knowledge AI API configuration. Select this option to use your own API and configure how Knowledge AI should behave.
* **Control expand behavior of Answers**: It lets you set how many answers appear in the Agent AI widget. For example, if you select **3**, only three answers appear. The default is **4**, and the minimum is **2**.   

## Agentic Configurations

The Agentic Copilot app is an agent’s aide. Once you successfully configure and link an Agentic app with Agent AI, it manages end-to-end conversations autonomously. Agents supervise the conversations and focus more on the quality of service. They can cancel, override, or edit the Agentic conversations, as needed. Agents can also use the **custom tab** to run dialog tasks and perform LLM-powered searches.

This section lets you configure and manage the Agentic Copilot apps. You can configure, test, and save multiple apps simultaneously. Once configured, link these apps with Agent AI to have autonomous, end-to-end task execution.

### Configuring an Agentic Copilot app 

Configuring an Agentic Copilot app is a three-step process: 

* Entering the app details
* Selecting the required conversation metadata
* Adding custom metadata

#### Entering the app details

The first step in configuring an Agentic Copilot app is to enter the details of the app. Use the following details: 

* **App Name**: Enter a **name** for the new app. For example, Travel Agent. The character limit is set to 50.
* **Domain URL**: Enter the Agentic platform’s **host URL**. For example, [agent-platform.kore.ai](https://agent-platform.kore.ai/){:target="_blank"}. 
* **Environment**: Enter the **environment name** as configured in the **Environment** section of the Agentic Platform.
* **App ID**: Enter the **Agentic app ID** in use.
* **API Key**: Enter the **API key** as configured in the **API Keys** section of the Agentic Platform. 

#### Selecting conversation metadata

In this section, you can select from the available conversation metadata to pass to the Agentic Copilot app. This preserves context during conversation transfers from automation to human agents and enables Agentic Copilot to deliver relevant, context-aware responses. The following metadata is available to select: 

* **Landing Summary**: To pass the summary of the customer-bot conversation before the conversation is transferred to a human agent.
* **Agent-Customer Chat History**: To pass the conversation history of customer-human agent until the latest message.
* **Custom Data**: To pass the collected custom data.
* **Intermittent Summary**: To pass the agent-generated intermittent or mid conversation summary. 

#### Adding custom metadata

You can also add your custom metadata script in a code editor to pass to the Agentic Copilot app. The system validates and highlights the errors, if any, as you enter your script.

Follow these steps to configure an Agentic Copilot app: 

1. Sign in to [AI for Service](https://platform.kore.ai){:target="_blank"}. 
2. Go to **Agent AI** > **Configurations** > **Linked Services**> and select **Agentic Configuration**.
3. Select **+ Add Agentic Copilot App**. 
4. Enter the **app name**, **domain URL**, **environment name**, **app ID**, and **API Key** in their respective fields. For help, refer to the [Entering the app details](#entering-the-app-details) section.  
    <img src="../answers-configuration-images/agentic-configuration-app-info.png" alt="agentic-configuration-app-info" title="agentic-configuration-app-info" style="border: 1px solid gray; zoom:80%;"> 

5. Expand the **Pass Metadata** section, and select from the list that you want to pass.  
    <img src="../answers-configuration-images/choose-metadata-to-pass.png" alt="choose-metadata-to-pass" title="choose-metadata-to-pass" style="border: 1px solid gray; zoom:80%;">  
6. Expand the **Add Custom Metadata** section, and enter your custom metadata script in the code editor. You can enlarge the editor page or copy the script using the corresponding buttons.  
    <img src="../answers-configuration-images/add-custom-metadata.png" alt="add-custom-metadata" title="add-custom-metadata" style="border: 1px solid gray; zoom:80%;">  
7. Select **Test Connection & Save**. The configured app is saved and gets connected.  

### Deleting an Agentic Copilot app

This section lets you delete a preconfigured Agentic Copilot app. When deleted, the connected apps automatically get disabled from the Agent AI widget. Follow these steps to delete a configured app:

1. Select the **delete** button against a saved app.
2. Select **Delete** on the confirmation screen.   

    !!! note
        You can't delete an in-use Agentic app—the delete button is unavailable, and a badge indicates the app is in use: 

    <img src="../answers-configuration-images/linked-services.png" alt="linked-services" title="linked-services" style="border: 1px solid gray; zoom:80%;"> 
