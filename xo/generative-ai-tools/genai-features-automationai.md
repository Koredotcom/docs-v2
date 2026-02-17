# Generative AI Features - Automation AI

Utilize generative AI features to supercharge your AI Agent with powerful tools that enhance productivity, enable natural conversations, improve intent detection, analyze customer sentiment, and support agent performance, all working together to create seamless end-user experiences through intuitive design.

## Model Feature Matrix

The following table displays the features and the supported models. 

(✅ Supported | ❌ Not supported)

=== "Automation AI - Runtime Features"

    |Model|Agent Node|Prompt Node|Repeat Responses|Rephrase Responses|Rephrase User Query|Zero-shot ML Model|
    |:----:|:----:|:----:|:----:|:----:|:----:|:----:|
    |Azure OpenAI–<br>GPT-4 Turbo, GPT-4o, and GPT-4o mini|✅|✅|❌|✅|✅|✅|
    |OpenAI–<br>GPT-3.5 Turbo, GPT-4, GPT-4 Turbo, GPT-4o, and GPT-4o mini|✅|✅|✅|✅|✅|✅|
    |Provider's New LLM|✅|✅|❌|✅|✅|✅|
    |Custom LLM|✅|✅|❌|✅|✅|✅|
    |Amazon Bedrock|✅|✅|❌|✅|❌|❌|
    |Kore.ai XO GPT|❌|❌|❌|✅|✅|❌|


=== "Automation AI - Designtime Features"

    |Models|Automatic Dialog Generation|Conversation Test Case Suggestions|Conversation Summary|NLP Batch Test Case Suggestions|Training Utterance Suggestions|
    |:----:|:----:|:----:|:----:|:----:|:----:|
    |Azure OpenAI–<br>GPT-4 Turbo, GPT-4o, and GPT-4o mini|✅|✅|❌|✅|✅|
    |OpenAI–<br>GPT-3.5 Turbo, GPT-4, GPT-4 Turbo, GPT-4o, and GPT-4o mini |✅|✅|❌|✅|✅|
    |Provider's New LLM|✅|✅|❌|✅|✅|
    |Custom LLM|✅|✅|✅|✅|✅|
    |Amazon Bedrock|✅|✅|❌|✅|✅|
    |Kore.ai XO GPT|❌|❌|✅|❌|❌|


<hr>


**System Prompt Limitation**

The Platform does not provide system prompts in the following cases, so you must create a custom prompt:

* When using OpenAI GPT-4o mini or Azure OpenAI GPT-4o mini.
* When using Provider's New LLM.
* For the Rephrase User Query feature with OpenAI or Azure OpenAI models.





## Agent Node

When enabled, this feature lets you add an Agent Node to Dialog Tasks. This node allows you to collect Entities from end-users in a free-flowing conversation (in the selected English/Non-English App Language) using LLM and Generative AI in the background. You can define the entities to be collected as well as rules & scenarios in English and Non-English App languages. You can configure node properties just like any other node. You can also use the Agent Node across Dialog Tasks.

<img src="../images/agent-node.png" alt="Agent Node" title="Agent Node" style="border: 1px solid gray; zoom:70%;"> 



**Usage**

When creating or editing a Dialog Task that’s created manually or[ auto generated](../automation/use-cases/dialogs/using-the-dialog-builder-tool.md#auto-generated-dialog-tasks), you can find a node called Agent Node within your nodes list. 

When this feature is disabled, the node is unavailable within the Dialog Builder.[ Learn more](../automation/agent-node/working-with-agent-node.md).


## Prompt Node

This feature lets you define custom user prompts based on the conversation context and the response from the LLMs. You can define the subsequent conversation flow by selecting a specific AI model, tweaking its settings, and previewing the response for the prompt.

 

**Usage**



1. When building the Dialog Flow, click the **Gen AI**, and select the **Prompt Node** node. 
<img src="../images/genaiprompt.png" alt="Agent Node" title="Agent Node" style="border: 1px solid gray; zoom:70%;"> 

2. Configuring the Component Properties in the following sections helps set up the node:
    * **General Settings**: Provide **Name** and **Display Name** for the node and write your own OpenAI Prompt.
    * **Advanced Settings**: Fine-tune the model’s behavior and tweak its settings as required for the following:
        * Model
        * System Context
        * Temperature
        * Max Tokens
1. **Advanced** **Controls**: Select the maximum wait time (**Timeout**) to receive a response from the LLM and the app’s response (Timeout Error Handling) when a timeout error occurs.
2. When you add custom tags to the **current message**, **user profile**, and **session** under **Instance Properties**, you can build custom profiles for the app conversation. .
3. Configuring node connections on an instance lets you define the connection rules for the conversation using transition conditions. This lets the conversation follow specific paths based on the user’s input.

If this feature is disabled, you can't configure the ML model to build custom prompts using OpenAI for different use cases.[ Learn more](../automation/use-cases/dialogs/node-types/genai-prompt.md).


## Repeat Responses

This feature uses LLM to reiterate the recent app responses when the Repeat Response event is triggered. Platform user's can enable the event and customize the trigger conditions. This empowers end-users to ask the app to repeat its recent responses at any point during the conversation. Currently, this event is supported for IVR, Audiocodes, and Twilio Voice channels.



## Rephrase Responses


The Response Rephrasing feature in AI for Service improves an AI Agents
conversations by making them more natural, human-like, and emotionally intelligent. It supports rephrasing for both standard and structured content types, including JSON and JavaScript, and gives you flexible control over which parts of a conversation to rephrase.

The system sends all User Prompts, Error Prompts, and app Responses along with the conversation context, to the LLM. Responses are rephrased in English or the selected app language, using contextual and emotional cues to create a more empathetic and natural user experience.

The Default_V2 system prompt introduces support for advanced content formats and a wider range of response types, enabling more natural and consistent outputs. This prompt is available exclusively with the OpenAI GPT-4o model. Starting with the v10.14 release, all newly created custom prompts use the V2 format by default. Existing custom prompts remain fully functional and require no modifications.


### Node Level Configuration

Enable this option to send User Prompts, Error Prompts, and app Responses from Message, Entity, and Confirmation nodes to the LLM for rephrasing. This setting is off by default, allowing you to configure rephrasing at the node level. You can add instructions in English or any other supported app language.  
<img src="../images/rr-nodelevel.png" alt="Rephrase Responses" title="Rephrase Responses" style="border: 1px solid gray; zoom:70%;">



### Feature Level Advance Settings

Use the Advanced Settings panel to configure how the system rephrases responses using the LLM. These global settings help maintain tonal consistency and generate more natural, context-aware outputs throughout the conversation. When enabled, you can choose which types of responses to send to the LLM for rephrasing.



* **Messages, Entities, and Confirmation Nodes**: Allows you to enable or disable rephrasing.
    * **Rephrase at Node Level**: Applies rephrasing only to individual nodes where rephrasing is explicitly enabled.
    * **Rephrase All**: Applies rephrasing to all Message, Entity, and Confirmation nodes, regardless of their individual settings. If a node doesn’t have specific settings, the system uses the global or feature-level advanced settings such as model and prompt. Nodes with defined configurations continue to use their assigned settings.
* **Standard Responses**: Enables rephrasing for all Standard Responses across the app.
* **Events**: Enables rephrasing for all event-based responses across the app.
* **FAQs**: Enables rephrasing for all FAQ responses across the app.  
<img src="../images/rr-featurelevel.png" alt="Rephrase Responses" title="Rephrase Responses" style="border: 1px solid gray; zoom:70%;">


For more settings, see [Change Settings for a Pre-built Model](genai-features.md#change-settings-for-a-pre-built-model).




## Rephrase User Query

This feature helps improve intent detection and entity extraction by enriching the user query with relevant details from the ongoing user conversation.

When a user intent and entity are split across multiple utterances or through the conversation, the feature enriches the user query by rephrasing the user’s multiple queries during runtime. This enriched user query contains all the conversation details so the app can understand the actual meaning behind a user’s utterance. This enriched user query is fed to the natural language, improving accuracy by improving intent identification and entity extraction.

**Usage**

The LLM rephrases the query using one of the following methods depending on the scenario:

**Completeness**: The user query should be complete based on the conversation context so that the NLP can identify the right intent. If the user query is incomplete, the system urges the user to rephrase with more information.

For example: 
User: What is the weather forecast for New York tomorrow? 
App : It will be Sunny, with temperature ranging between 30–35 degrees Celsius. 
User: How about Orlando? 
App : Sorry, I can't understand. Can you please rephrase?

The query should be completed as “How about the weather forecast in Orlando tomorrow?”

**Co-referencing**: Coreference arises when multiple expressions or queries within text pertain to a common entity. In cases where a user’s query demonstrates incomplete coreference, the system prompts the user to rephrase the query with additional information. This enhances NLP’s ability to discern the correct intent and entities involved.

For example: 
User: I’ve been experiencing a persistent headache for the past week. 
App : I’m sorry to hear that. Have you been taking any medication for it? 
User: Yes, I’ve been taking ibuprofen, but it doesn’t seem to help much. 
App : I see. How often do you take ibuprofen? 
User: I take it every six hours 
App : I don’t understand. Can you tell me how often you take ibuprofen?

The co-reference in the user query should be expanded for NLP to identify the right intent and entities. The co-reference should be expanded as “I take ibuprofen every six hours.”

**Completeness and Co-referencing**: The following example illustrates completeness and co-referencing issues with the user’s input which triggers rephrasing.

For example: 
User: I want to apply for a personal loan.

App : Sure, I can help you. You’re eligible to take a personal loan of up to 20,000\$.

User: How about a Home loan? 
App : You’re eligible to apply for a home loan as well. You can avail up to 100,000\$. 
User: What about the interest rates of both loans?

The co-reference and the query have to be completed as “What's the interest rate of personal loan and home loan?

### Conversation History Length

This setting allows you to specify the number of recent messages sent to the LLM as context for the user query rephrasing feature. These messages include both user messages and an AI Agent messages. The default value is 5. However, the number of messages sent is limited to the session's conversation history, even if your set value is higher. 
You can access the Conversation History Length from **Rephrase User Query** > **Advanced Settings**.  

<img src="../images/conv-history.png" alt="Conversation History Length" title="Conversation History Length" style="border: 1px solid gray; zoom:70%;">

## Zero-shot Model

!!! note

    The Zero-shot model is production-ready in English but experimental in other languages. We advise caution before using it in production for non-English languages.

This feature help the ML Engine identify the relevant intents from user utterances based on semantic similarity. By identifying the logical intent during run time, this feature eliminates the need for training data. The Zero-shot ML model requires well-defined intents to work well. This training approach is well-suited for an AI Agent with relatively fewer intents and distinct use cases.

For the Zero-shot model feature, the Platform offers two template prompts for every supported model of Open AI and Azure Open AI. The template prompts are “Default” and “Zero-Shot-V2.” The “Zero-Shot-V2” is the advanced version of the “Default” template and is selected by default as you select the model. You can import both templates and create a custom prompt using them.

### Conversation History Length

!!! Note

    The conversation history length applies only to zero-shot v2 prompts.

This setting allows you to specify the number of recent messages sent to the LLM as context for the user query rephrasing feature. These messages include both user messages and an AI Agent messages. The default value is 10. However, the number of messages sent is limited to the session's conversation history, even if your set value is higher. You can access the Conversation History Length from feature **Advanced Settings**.  

<img src="../images/zsm-as.png" alt="Conversation History Length" title="Conversation History Length" style="border: 1px solid gray; zoom:70%;">

**Usage**

Before performing utterance testing, the user selects the **Zero-shot Model** Network Type. During utterance testing, the user provides a more descriptive input with a subject, object, and nouns. Once the test runs, the system identifies the most logical intent as the definitive match by comparing the following:



* User utterance input
* Intent names

The identified intent is then displayed as the matched intent.

If this feature is disabled, the system won’t identify and display the logical and matched intent during utterance testing.[ Learn more](../automation/natural-language/training/machine-learning-engine.md#zero-shot-model).

## Few-shot ML Model

The Few-shot model uses Kore Ai’s hosted embeddings to train an AI Agent based on intent names and training utterances. The model identifies the intents based on semantic similarity between user and training utterances.

!!! note

    The Few-shot model is production-ready in English but experimental in other languages. We advise caution before using it in production for non-English languages.

**Usage**

Before performing utterance testing, the user selects the **Few-Shot Model (Kore.ai Hosted Embeddings)** network type. 

During utterance testing, the user provides a more descriptive intent name with a subject, object, and nouns, as well as the training utterances. Once the test runs, the system identifies the most logical intent as the definitive match based on the following:



* The default configuration settings
* User utterance input
* Intent names

If this feature is disabled, the system won’t identify and display the logically matched intent during utterance testing.[ Learn more](../automation/natural-language/training/machine-learning-engine.md#few-shot-model-koreai-hosted-embeddings).


## Automatic Dialog Generation

This feature auto generates conversations and dialog flows in the selected language using the VA’s purpose and intent description provided (in English or the selected Non-English App Language) during the creation process. The Platform uses LLM and generative AI to create suitable Dialog Tasks for Conversation Design, Logic Building & Training by including the required nodes in the flow. 

You must provide an intent description, and the Platform handles the Conversation Generation for the Dialog Flow.

You can preview the conversation flow, view the App Action taken, improvise the intent description, and regenerate the conversation to make it more human-like.

The nodes and the flow for the Business Logic are automatically built for your conversation, and you only need to configure the flow transition.

The Platform auto defines the Entities, Prompts, Error Prompts, App Action nodes, Service Tasks, Request Definition, Connection Rules, and other parameters.





<img src="../images/cpf(1).gif" alt="Automatic Dialog Generation" title="Automatic Dialog Generation" style="border: 1px solid gray; zoom:70%;">

**Usage**

Once you enable this feature:



1. The Platform triggers the flow when you launch a task for the first time.
2. The Platform presents the intent description and an option to generate conversation.
3. You can preview the generated conversation, edit the description, and regenerate it.
4. The Platform sends the updated description to Generative AI in the background to get the new conversation.
5. Once you’re satisfied with the conversation, generate a dialog task.

If this feature is disabled, you won't have the option to auto generate a dialog flow when first launching a Dialog Task.

!!! note

    The Platform uses the configured API Key to authorize and generate the suggestions from OpenAI.



## Conversation Test Cases Suggestions

This feature provides a regression tool or a Playbook that creates a conversation test suite for each intent (new and old) in English or Non-English App language to evaluate the impact of the change on the conversation execution.


<img src="../images/cpf(2).gif" alt="Conversation Test Cases Suggestions" title="Conversation Test Cases Suggestions" style="border: 1px solid gray; zoom:70%;">



You can view input/utterance suggestions at every conversation step simulating the various input types and scenarios. This feature helps check if the task/intent is robust enough to handle random user utterances.

This feature also helps you predict and simulate the end user’s behavior and check if the AI Agent can execute all the defined flows by generating user responses and presenting any digressions from the specified intent.

**Usage**



1. You can create a test suite by recording a live conversation with an AI Agent by initiating the interaction or letting an AI Agent initiate it.
2. An icon displays to indicate the user input suggestions from Generative AI.
3. The Platform triggers OpenAI or Anthropic Claude-1 based on your model selection to generate suggestions for user input where expected in English or a Non-English App Language.
4. The Platform shares the following information with OpenAI/Anthropic to generate suggestions.

    * Randomly picked intents from the AI Agent (Dialog, FAQ),
    * Conversation flow,
    * Current Intent, if any,
    * Current node type:
        * For an entity node, the system sends the following:
            * Entity name,
            * Entity type,
            * Sample entity values. 
        * Types of user input scenarios:
            * Entities,
            * Without entities,
            * Different entity combinations in the user input,
            * Digression to another intent,
            * Trigger error scenarios.
    * You can regenerate suggestions if required.
    * You can accept the suggestions shown or type custom input at every step.
    * Create a Test Suite after stopping the recording and validating the model.

If the feature is disabled, the Platform doesn’t display the Generative AI suggestions icon and the suggestions themselves.[ Learn more.](../automation/testing/regression-testing/conversation-testing/create-a-test-suite.md#generated-user-response-suggestions)


## Conversation Summarization

This feature generates concise, natural language summaries of interactions between the an AI Agent, users, and human agents. It distills the key intents, entities, decisions, and outcomes into an easy-to-read synopsis. Companies can leverage conversation summarization to boost agent productivity, ensure process compliance, and create better contextual recommendations without having to read lengthy transaction histories. It's pre-integrated with Kore.ai’s Contact Center platform. It's also extensible to third-party applications via API integration.
!!! note

    For existing apps, by default, the feature is enabled with the XO GPT Model. For new apps, the feature is disabled.

This feature is broadly implemented in two scenarios discussed below:

**Scenario 1**

In a contact center environment, the customer interacting with an AI Agent may request to transfer to a live agent. During agent handoff, the agent must have the necessary context information and interaction history to assist the customers efficiently. The system generates the conversation transcript and interaction summary and routes it to the agent for better understanding.

An example of the usage: When Conversation Summary is enabled and the conversation is transferred to an agent in SmartAssist, the Conversation Summary is displayed on the Agent Console, as shown in the screenshot below.


<img src="../images/conversation-summary.png" alt="Conversation Summary" title="Conversation Summary" style="border: 1px solid gray; zoom:70%;">


**Usage**

The[ Conversation Summary](../apis/automation/conversation-summary.md) public API fetches the summary of the entire conversation included in the transcript. LLM and Generative AI are leveraged to provide a concise and informative conversation summary from the transcript.

**Scenario 2**

When closing a conversation request, contact centers require an agent to summarize the customer interaction and context in their closing notes to confirm that the issue has been resolved effectively. Closing notes help document the interactions, provide context for future interactions, support quality assurance efforts, and serve as references to deliver effective customer service.

**Usage** 

The system uses the[ Conversation Summary](../apis/automation/conversation-summary.md) public API to fetch the details of the entire conversation between the customer and an AI Agent or human agent. The API uses an open-source LLM to summarize conversations using a large number of sample conversation transcripts.




## NLP Batch Test Cases Suggestions

This feature lets you generate test cases based on the NLU Language selected, and add them to the test suite with minimum or no errors. You can give instructions in English or any Non-English App language you’ve selected. Additionally, in case of a Multilingual NLU, the system generates utterances in the language prompted by the user. For instance, if your instructions are in Hindi, the utterances are generated in Hindi.


**Usage**

1. When creating a New Test Suite, select **Add Manually** or **Upload Test Cases File** to add test cases. 
2. **Add Manually** creates an empty test suite where you can generate test cases and do the following:
    * Select a Dialog Task.
    * Based on the intent context, the Generative AI generates test cases you can review and add to or remove from the Test Suite.
1. When you click **Generate Test Cases**, the Platform sends Generative AI (OpenAI or Anthropic Claude-1 model based on your selection) the following information to generate test cases:
    * Intent
    * Entities
    * Probable entity value
    * Different scenarios to simulate end-user utterances,
    * Random training utterances and test cases that are generated to avoid duplicate test cases from Generative AI.

If this feature is disabled, you won't have the option to generate test cases during batch testing.[ Learn more.](../automation/testing/regression-testing/batch-testing.md#generating-test-cases-automatically)

## Training Utterance Suggestions

This feature generates a list of suggested training utterances and NER annotations based on the selected NLU language for each intent description and Dialog Flow, eliminating the need for manual creation.

<img src="../images/cpf(3).gif" alt="Training Utterance Suggestions" title="Training Utterance Suggestions" style="border: 1px solid gray; zoom:70%;">


**Usage**

The Platform can generate utterances in the NLU language to train your App.

Once you request to generate utterances for a given intent, the Platform provides utterance suggestions (in the selected NLU language) based on the following information: 



1. Intent
2. Entities and Entity Types
3. Probable entity values
4. Different scenarios for training utterances based on entities, a combination of entities, structurally different utterances, etc.

You can add/delete the suggested training utterances from the list or generate more suggestions.

If this feature is disabled, you won’t see the Suggestions tab on the training page.[ Learn more](../automation/use-cases/dialogs/using-the-dialog-builder-tool.md#auto-generated-dialog-tasks).
