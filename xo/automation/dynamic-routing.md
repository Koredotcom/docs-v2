

# Dynamic Routing Capability Powered by DialogGPT


A Dynamic Routing serves as a single entry point for users to access multiple specialized apps. It acts as a central hub that intelligently routes user queries to the most appropriate underlying app based on the user's intent.

You can expand the functionality of your AI for Service 11 app to encompass the Dynamic Routing capabilities by linking it to one or more other apps using the Automation Node within Flows. This feature is powered by DialogGPT, an intelligent agentic orchestrator leveraging Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs).

DialogGPT significantly improves the accuracy of intent detection and eliminates the traditional requirement for extensive utterance-based training. DialogGPT intelligently analyzes user input, taking into account the conversation history and current context, to route the request to the most relevant linked app during runtime. 


## Key Concepts

### Autonomy Level for Automation AI

The Automation Node has been enhanced with two levels of autonomy based on your automation needs. Following are the two options:

* **Orchestrated Autonomy**: Structured conversation flows powered by DialogGPT’s intent identification expand the app’s Dynamic Routing capabilities, allowing you to link multiple automation apps to streamline orchestration. 
* **Full Autonomy**: Agent Platform-powered automation that independently handles entire conversation flows, adapting to situations without predefined paths.

### Parent App and Linked Apps

* The **Parent App** independently manages its own dialogs, FAQs, and Knowledge base and orchestrates the dialogs and FAQs of its linked apps. It uses DialogGPT to dynamically route user input to the appropriate linked app based on detected intents.
* **Linked Apps** are the apps connected to the parent app. They contribute their dialogs and FAQs to support the parent app's intent resolution and orchestration.

For example, imagine you have four apps: App1, App2, App3, and App4. When you link App2, App3, and App4 to App1, App1 becomes the parent app, while App2, App3, and App4 function as the standard/linked apps.

When an app is linked, the parent app generates an index of the dialogs and FAQs from the linked apps. These embeddings include metadata, such as the dialog name, description, app name, app description, and fulfillment type.

Once you link apps in the Automation Node, they remain associated with other flows. As a result, each parent app supports only one specific combination of linked apps, ensuring consistent configuration and functionality.

When a session is initiated through the Parent App, the API receives complete context, including details from both the Parent App and its Linked Apps. This is the expected and intended behavior.  

However, if the session is initiated directly with a Linked App, the Parent App remains unaware of this session. Since the API in the Parent App does not have the context of the Linked App, these details cannot be extracted. APIs configured at the Parent App level do not automatically capture interactions that have been explicitly initiated at the Linked App level.

### App Indexes

The Dynamic Routing maintains two key indexes:

* **Configured App Index**: This index represents the app's in-development version. It is created when apps are first linked and updated using "Sync Updates" after making changes.
* **Published App Index**: It represents the live, user-facing version of the app. It is created when the parent app is published and automatically updated when linked apps are published.

### DialogGPT

DialogGPT is an advanced Intent Detection and Conversation Management module that uses techniques like embedding-based retrieval and Generative AI models. Its key capabilities include:


* Training-free intent detection.
* Embedding-based matching of user input to relevant app content.
* LLM-powered identification of fulfillment type (actions, answers, multiple intents, etc.).
* Automated event handling to trigger appropriate responses.
* Intelligent routing of requests to linked apps.
* Resolution of ambiguous intents through clarifying questions.

## Key features

* Link Multiple Apps via Automation Node: The Automation Node in Experience Flows has been enhanced to support linking multiple apps and using DialogGPT for intent identification.
* Indexing Linked App Content: Dialog and FAQ chunks from linked apps are indexed in the parent app after linking. Search AI knowledge is supported only in the parent app by default.
* Embedding-Based Matching: User input and content from linked apps (dialogs, FAQs, search documents) are converted into embeddings with metadata. The platform then retrieves the top-matching chunks based on semantic similarity.
* LLM-Powered Intent Resolution: An LLM resolves the shortlisted chunks and determines the winning intent. It could be an Intent, Multiple Intents, Answers, FAQs, Conversation Intents, Ambiguous Intents, or Small Talk.
* Automated Event Handling: Default platform-provided event handlers are triggered based on the fulfillment type, ensuring smooth user interactions and dialog execution.
* Clarifying Questions for Ambiguous Intents: When ambiguous intents are detected, clarifying questions are triggered for disambiguation
* Simplified Training: There is no need for training utterances or invocation phrases for AI Agent qualification. However, providing complete dialog descriptions is required for more accurate intent identification. 


## How the Dynamic Routing Works

The Dynamic Routing leverages DialogGPT and Language Models (LLM) to understand user queries, identify intents, and provide relevant responses by dynamically routing requests to the appropriate linked app. Here's an overview of how it works:



1. App Linking and Indexing:
    * When an app is linked to a parent app, the parent app generates an index of the linked app's dialogs and FAQs.
    * The parent app also indexes its own knowledge documents.
    * The indexes include metadata such as dialog name, description, app name, app description, and fulfillment type.
2. User Query Processing:
    * When a user enters a query, DialogGPT converts it into an embedding.
    * DialogGPT compares the user-input embedding with the stored embeddings to find the most semantically similar chunks.
3. Intent Identification:
    * The user input and the most relevant chunks are sent to the LLM.
    * The LLM analyzes this information to identify the most appropriate intent behind the user's query.
4. Fulfillment and Response: Based on the identified intent, the Dynamic Routing determines the appropriate fulfillment type and generates a response. This can involve:
    * Executing a dialog.
    * Providing an answer from FAQs or knowledge documents.
    * Handling multiple intents.
    * Clarifying ambiguous intents by asking the user for more information.
    * Engaging in small talk when appropriate.


## Setting Up a Dynamic Routing

The Automation Node allows you to link multiple apps within your accessible workspace. An app can be linked only if it contains at least one dialog. To configure a Dynamic Routing functionality, you must have access to at least two apps within the same workspace.

Before proceeding, ensure that DialogGPT is enabled. For details, see [How to Enable DialogGPT](dialog-gpt-based-orchestration.md). To explore supported models, see [Model Configuration](../generative-ai-tools/dgpt-conversation-orchestration.md#model-configurations).

Step to set up a Dynamic Routing:



1. Navigate to **Flows & Channels** > **Flows** > **Start Flows** > **Welcome Chat Flow**. Click the **Automation Node**.  
<img src="../images/ua2.png" alt="Dynamic Routing" title="Dynamic Routing" style="border: 1px solid gray; zoom:80%;"> 

2. On the Component Properties tab, select Autonomy Level as **Orchestrated Autonomy**.
3. In the Automation AI Options section, select **Use GenAI to dynamically route to linked apps**. If DialogGPT is disabled, follow the onscreen instructions to enable it.
3. Use the [Message Prompt](../flows/node-types/message-prompt.md) if required.
4. Click **+Link Apps**. The available apps to link are displayed.  
<img src="../images/link-apps.png" alt="Dynamic Routing" title="Dynamic Routing" style="border: 1px solid gray; zoom:80%;"> 

5. Select the app(s) and click **Save**. The success message is displayed.
6. To link more app, click **+Link App**. To unlink the apps, click unlink icon next to the app.  
<img src="../images/ua3.png" alt="Dynamic Routing" title="Dynamic Routing" style="border: 1px solid gray; zoom:80%;"> 

7. To unlink the app, click the unlink icon next to it.  
<img src="../images/image3.png" alt="Dynamic Routing" title="Dynamic Routing" style="border: 1px solid gray; zoom:80%;"> 



## Managing App Updates


### Publishing Dynamic Routing Functionality

Publishing the Dynamic Routing functionality with DialogGPT follows a structured process for which the parent app generates two indexes, i.e. Configured App Index and Published App Index. Keeping the configured and published indexes in sync is essential for maintaining seamless functionality.

To learn more about the In-development and Published app, see [Publication Statuses](../deploy/publishing-bot.md).

!!! Note

    * All the dialog/FAQ updates and app linking/unlinking are done in the development version, as the published version of the app allows no changes.
    * The Platform uses the parent app's embedding model to generate the index of dialogs, FAQs, and search document embeddings.


### First-Time Publishing of Apps

After linking the apps, you must publish both the linked and parent apps. This initial publishing generates the **Published App Index**, which becomes available to users. It is recommended that you publish the linked app first.


### Synchronizing Subsequent App Updates

After publishing the apps, when you add or update dialogs or FAQs in the linked apps, the system displays a **Sync Updates** notification in the linked app. You manually click **Sync Updates** to refresh the **Configured App Index**. When you finalize and publish the dialog or FAQ, the **Published App Index** updates automatically to reflect the changes.

If you add or update dialogs or FAQs in the parent app or link a new app to it, you must also sync updates in the parent app to refresh its **Configured** **App Index**. Once the update is complete, publish the newly linked and parent apps to ensure the **Published App Index** is updated accordingly.


## Best Practices



* Ensure DialogGPT is enabled before setting up the Dynamic Routing.
* Publish linked apps before publishing the parent app.
* Use "Sync Updates" and re-publish apps whenever you make changes to keep indexes in sync.


## FAQs

**When do I need to trigger the "Sync Updates" option manually?**

When you create or update new dialogs or FAQs, you must manually trigger Sync Updates to refresh the configured app index. Consequently, you must publish the updated app so users can access the latest changes.

**Will publishing a dialog automatically update the app index?**

There are two types of indexes: the configured app index and the published app index. When you add or update the dialog, you must use the Sync Updates option to update the configured app index. When you publish the dialog, the published app index is automatically updated.

**How are dialogs and FAQs synchronized between Parent Apps and Linked Apps?**

All their dialogs and FAQs are indexed in the configured app index when the apps are linked.

**What happens if I add a new dialog to a Linked App?**

If you add a new dialog to a Linked App:

* A Sync Updates notification will appear in the linked app.
* Click Sync Updated to refresh the configured app index.
* The published index is automatically updated once the linked app dialog is published.

**What is the difference between configured and published indexes?**

* **Configured App Index**: Represents the in-development or configured version of the app, created when the app is linked.
* **Published App Index**: Represents the live, user-facing version of the app created when you publish the parent app.

**What happens if linked apps are not published during the Publish process?**

If the linked apps are not published during the Publish process, a warning will inform the user to publish the linked apps. If the user decides to proceed, only the linked apps that have already been published will be re-indexed.
