
# DialogGPT

DialogGPT is an intelligent, agentic orchestration engine that powers natural conversations at scale, providing autonomous orchestration across multiple topics through Dialog Tasks. This innovative solution perfectly balances defined business rules and the conversational fluidity your customers expect from an AI Agents. Using a powerful combination of text embeddings and generative models, it contextually understands user input and identifies optimal paths for request fulfillment. Setup is quick and effortless, as DialogGPT eliminates the need for training data by intelligently utilizing task names and descriptions for recognition. 

!!! Note "Enhanced Navigation for DialogGPT-based Apps"

    DialogGPT is now the default intent identification mode for AI for Service app creation. The redesigned navigation experience for DialogGPT-based apps enhances discoverability and streamlines the AI Agent creation process for users. The new [Playground](../automation/testing/playground.md) feature provides an integrated side-by-side view of Debug Logs and Talk to Bot for streamlined testing and debugging. [Learn more](../getting-started/dialoggpt-based-navigation.md).

## Key Features

* **Autonomous Decision Making**: Independently analyzes user inputs and identifies intents and execution order. 
* **Superior Intent Detection**: DialogGPT leverages zero-shot intent detection using Retrieval-Augmented Generation (RAG) and LLMs, enabling it to accurately identify user intents without relying on predefined training data.
* **Ambiguity Resolution**: DialogGPT efficiently resolves ambiguous intents by asking clarifying questions in real-time, ensuring accurate interpretation and seamless conversation flow.
* **Multi-intent Identification**: The system recognizes and processes multiple intents within a single user query, dynamically managing and prioritizing tasks based on dependencies and execution order.
* **Conversational Nuances Management**: DialogGPT handles conversational nuances such as pauses, repetitions, and restarts, adapting to the flow of conversation to provide a more natural, human-like interaction experience.
* **Dynamic Response Generation**: It generates responses grounded in the current context, utilizing user data, conversation history, and business rules to ensure each response is relevant and contextually appropriate.
* **Model Flexibility**: It supports a wide range of model options, allowing users to choose from commercial or custom models or XO GPT models, which are adaptable for various use cases. This flexibility ensures that DialogGPT can meet the unique needs of your project, no matter how complex or specialized.
* **Granular Intent Resolution**: It refines broad user queries into specific, actionable intents by leveraging domain knowledge graphs, ensuring more precise understanding and response generation.

## Key Benefits

* **Improved Customer Experience**: Customers enjoy more natural conversations with an AI Agents who understand the context and can simultaneously handle multiple requests.
* **Greater Accuracy**: The system better understands what customers request, even when requests are complex or industry-specific.
* **Lower Costs**: It reduces manual effort in building, training, and maintaining an AI Agents; it increases the self-service rate, minimizing transfers to human agents and lowering operational costs.


## How DialogGPT Works

DialogGPT is an agentic orchestrator, managing the entire conversation flow from intent identification to fulfillment. It enhances intent detection and conversation handling with zero training.  
<img src="../images/dialog-gpt-process.png" alt="DialogGPT" title="" style="border: 1px solid gray; zoom:70%;"> 


DialogGPT's functionality is built on a three-step process:

### Step 1: User Input and Chunk Shortlisting

DialogGPT processes user input and conversation history to identify relevant chunks. These chunks are segments of a dialog, FAQ, or Search AI embeddings stored in a vector database. It rephrases the input to optimize retrieval and uses a Retrieval-Augmented Generation (RAG) pipeline for precise chunk selection. This retrieval process operates independently of the Search AI pipeline, ensuring a streamlined and focused selection of relevant content.

!!! note

    From v11.15.1 release, only sub-intents relevant to the active dialog are appended to the dynamic variable {{dialogs_chunks}}, whereas previously, all sub-intents were indexed along with the top-level intent.


### Step 2: Intent Identification and Fulfillment Strategy

The Intelligent Conversation Orchestrator analyzes the retrieved chunks alongside the user input and conversation context. Using an LLM, it identifies the most appropriate intent, resolves ambiguities by ranking options or prompting the user for clarification, and determines dependencies and execution orders for multi-intent scenarios. System intents, like repeating, pausing, or ending conversations, are handled through pre-defined handlers. The orchestrator categorizes fulfillment strategies into a single intent, multiple intents, ambiguous intents, or system intents and selects the appropriate approach for execution.


### Step 3: Flow Management and Fulfillment

DialogGPT triggers the resolved intent with the appropriate fulfillment action. It executes dialog tasks or FAQs, generates responses for system intents using Answer Generation, and asks for clarification in case of ambiguous events. It handles multi-intent scenarios by executing tasks sequentially or in parallel, depending on dependencies. After the task is completed, the system delivers a contextually relevant response or fulfills the user’s requested action while adhering to enterprise business rules and interaction modes, such as text or voice.


## How to Enable DialogGPT

Before proceeding, ensure that the LLM powering the DialogGPT is successfully integrated. For more details on supported models, refer to the [Model Configurations](../generative-ai-tools/dgpt-conversation-orchestration.md#model-configurations) and see the [LLM Integration](../generative-ai-tools/models-library.md) documentation.

Steps:

1. Navigate to **Generative AI Tools** > **DialogGPT**.  
<img src="../images/gpt1.png" alt="DialogGPT" title="" style="border: 1px solid gray; zoom:70%;"> 

2. Click **Get Started**. The “Get Started with DialogGPT” screen is displayed.  
<img src="../images/gpt2.png" alt="DialogGPT" title="" style="border: 1px solid gray; zoom:70%;"> 


3. In the Conversation Types, select the conversation type that you want DialogGPT. 

    !!! note

        By default, Dialogs and FAQs are enabled and cannot be disabled.

4. In the **Model Configuration** section, select the **Model** that can be used to generate the embeddings.  
The embeddings model settings applies only to Dialogs and FAQs. For Knowledge from Search AI, the settings in the Search AI app applies.
5. (Optional) click Show Advanced Settings to view and adjust the Similarity Threshold and Proximity Threshold. In most cases, the default settings work fine.
6. (Only if Knowledge from Search AI is selected in step no 2 ) Define the maximum number of chunks to be shortlisted from Search AI. These chunks are send to the LLM for answer generation. The default value is 5. Click "Go to Search AI" to access the Search AI retrieval settings.
7. In the **Model Configuration** section, select the  **Conversation Management** **Model** and the **Prompt**, which determines the user intent and the execution plan.
7. (Optional) click Show Advanced Settings to view and set the Temperature, Max Tokens, and Conversation History Length. In most cases, the default settings work fine.
8. Click **Enable DialogGPT**. The DialogGPT home page is displayed.  
<img src="../images/gpt4.png" alt="DialogGPT" title="" style="border: 1px solid gray; zoom:70%;"> 
9. To disable DialogGPT, click the **More** icon (three dots) in the top right corner and then click Disable DialogGPT. The Disable DialogGPT pop-up is displayed.  
<img src="../images/gpt3.png" alt="DialogGPT" title="" style="border: 1px solid gray; zoom:70%;"> 

10. Click **Disable DialogGPT**. The confirmation message is displayed.

    !!! note

        Disabling the DialogGPT reverts the intent detection to the traditional NLU.


## Debug Logs

The Debug Logs offer detailed insights into the DialogGPT model's behavior and execution flow. They allow you to observe each step of the DialogGPT process and its outcomes. Logs include complete request and response details for every LLM call, clearly showing what happens at each stage. This information helps understand and analyze the DialogGPT’s decision-making and execution for better debugging and optimization.

When DialogGPT processes a user utterance, the debug logs capture key details such as:

* Shortlisted chunks (dialogs, FAQ, and Search AI)
* Resolved chunks
* Fulfillment type
* Exit path (intent identified, FAQ, or Answer)
* Prompt payload (in JSON format)
* Fulfillment details
* Source information if the fulfillment type is an Answer

<img src="../images/gpt9.png" alt="DialogGPT" title="" style="border: 1px solid gray; zoom:70%;"> 

