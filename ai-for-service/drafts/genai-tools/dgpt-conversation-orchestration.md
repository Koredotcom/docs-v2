

# Conversation Orchestration

Conversation Orchestration in DialogGPT allows you to define and manage Conversation Types while configuring separate Chunk Shortlisting and Conversation Orchestration models. You can turn Intent Events and Conversation Events on or off and choose how each event is fulfilled (by overriding the default fulfillment), ensuring precise and adaptable conversation management that you can confidently rely on.  
This flexible system gives developers complete control over conversation management, ensuring the accuracy, relevance, and efficiency of user interactions.


<img src="../images/gpt4.png" alt="DialogGPT" title="" style="border: 1px solid gray; zoom:70%;"> 

## Conversation Types

It allows you to include the types of conversations that you want DialogGPT to handle in user interactions. The following are the supported conversation types. Dialogs and FAQs are enabled by default and can not be disabled.


* **Dialogs**: Dialogs are the AI Agents building blocks, enabling it to perform tasks and interact with users.
* **FAQs**: Pre-defined questions and answers that provide quick and informative responses to common inquiries.
* **Conversation Intents**: Common phrases in user interactions with An AI Agent.
* **Knowledge from Search AI**: Deliver answers directly from enterprise data sources for users’ questions.

To manage the conversation types, click **Settings**, turn the toggle on/off to enable/disable the conversation type and click **Save**.

<img src="../images/gpt5.png" alt="DialogGPT" title="" style="border: 1px solid gray; zoom:70%;"> 


## Model Configurations

Use the Model Configurations card to select the models for Shortlisting Relevant Chunks and Conversation Management (Orchestration).

* **Shortlisting Relevant Chunks**: **BGE-M3** is the supported and recommended model. You can adjust the Similarity Threshold and Proximity Threshold in the advanced settings. In most cases, the default settings work fine.

* **Maximum no. of Chunks to Shortlist (Knowledge from Search AI)**: Enter the maximum number of chunks to be shortlisted from Search AI. These chunks are send to the LLM for answer generation. The default value is 5. Click "[Go to Search AI](../searchai/retrieval.md)" to access the Search AI chunks retrieval settings.

* **Conversation Management**: The supported LLMs help detect user intent and create execution plans. You can configure advanced settings such as Temperature, Max Tokens, and Conversation History Length. The default settings are sufficient for most use cases. Support for major commercial models will be introduced in the coming months. However, you can always integrate your own model through the custom LLM integration option. Conversation Management supports the following LLMs:
    * OpenAI GPT-4o
    * OpenAI GPT-4o mini
    * Azure OpenAI GPT-4o
    * Amazon Bedrock
    * XO GPT - DialogGPT
  

To configure the model and settings, click **Settings**. Select the model, adjust the settings if necessary, and click **Save**.

<img src="../images/gpt6.png" alt="DialogGPT" title="" style="border: 1px solid gray; zoom:70%;"> 


## Fulfillment

There are two types of fulfillment events: intent events and conversation events. You can modify the fulfillment behavior for each event as needed. 

### Intent Events

The following is the intent event fulfillment behavior.

* **Intent not Identified**: Define the fulfillment when no user intent is identified in the user utterance. By default, the fallback task is triggered.
* **Ambiguous Intents Identified**: Define the flow when ambiguous intent is identified. You can configure how the system should handle such situations.
    * Present Qualified Intents (Default): Display a list of intents for the user to select or respond to. The task chosen (Dialog, FAQ, or Answer) is triggered.
    * Execute Dialog task: Select the dialog task to execute.
* **Answer Generation**: This event handles user inputs that need answers generated from Search AI documents. When Knowledge from Search AI is enabled in DialogGPT, the system activates the Answer Generation event and adds the default event handler to the App.

* **Multiple Intents**: Define Multi-Intent fulfillment logic when the Conversation Orchestrator detects multiple intents in a user’s utterance. Users can modify the predefined Multi-Intent fulfillment dialog, gaining greater control and flexibility. By default, the platform executes the predefined dialog (MultiIntent) to handle the Multi-Intent event.

To manage an intent, click the respective settings. Define the event configuration, use the toggle to enable/disable the intent type, and click save.

<img src="../images/gpt7.png" alt="DialogGPT" title="" style="border: 1px solid gray; zoom:70%;"> 


### Conversation Events

The system activates Conversation Events when you include Conversation Intents in the Conversation types. These pre-configured system features handle common phrases like holding, restarting, agent transfer, and ending a conversation. As a platform user, you can enable one or more Conversation Intents for a Conversation Event. You can select the fulfillment option for every event.

Supported Conversation Events:



* **Interaction Intents**: Handle actions like answering from context, holding, or refusing to answer. The default fulfillment method is ‘Executing a dialog task - ConversationEvent.’ 
* **Restart Conversation**: Triggers the welcome flow. The default fulfillment method is 'Ask for Confirmation' and then based on the user response, 'Restart the Conversation'.
* **Agent Transfer**: Transition the user to a human agent. The default fulfillment method is 'Ask for Confirmation' and then based on the user response 'Execute the Dialog Task - DefaultAgentTransfer'.
* **End Conversation**: Manage the termination of a conversation. The default fulfillment method is 'Ask for Confirmation' and then based on the user response, 'End the Conversation'.

To manage an intent, click the respective settings. Define the event configuration, use the toggle to enable/disable the intent type, and click save.

<img src="../images/gpt8.png" alt="DialogGPT" title="" style="border: 1px solid gray; zoom:70%;"> 

