
# Dynamic Conversations Features

	

		

			

The Dynamic Conversations features boost your virtual assistant’s performance with LLM-powered runtime features designed to streamline development and reduce time and effort. By default, all the features are disabled. To enable the feature, select the model, prompt, and toggle the status to enable it. You can select another supported model for a feature if you have configured multiple models. You can also change the model, its prompts, and its settings.


Steps to enable the feature:



1. Navigate to **Generative AI Tools** > **GenAI Features** > **Dynamic Conversations**.
<img src="../images/dcfnew.png" alt="Dynamic Conversations" title="Dynamic Conversations" style="border: 1px solid gray; zoom:70%;"> 


   

    

2. Select the **Model** and **Prompt** from the drop-down list for a feature. 
3. Turn on the Status toggle. The success message is displayed.

		

	
## Product Filter

Smart filtering in the features section is based on the context from which the users access the Generative AI menu. This will only show the relevant feature options for that product (e.g., Automation, Search, Agent). The users can easily add/remove this filter as needed.


<img src="../images/dcf-productfilter.png" alt="Product Level Filter" title="Product Level Filter" style="border: 1px solid gray; zoom:70%;"> 
	

		

			


## Change Settings for a Model

Choose the option below based on the model for which you want to change the settings:

		

	


### Change Settings for a Pre-built Model

	

		

			

You can change the selected model’s settings if required. **In most cases**, **the default settings work fine**.

Follow these steps:



1. Go to **Generative AI Tools** > **GenAI Features** > **Dynamic Conversations**.
2. Hover over the feature to view the **Advance Settings** (gear) icon. 
<img src="../images/dcf-as.png" alt="Dynamic Conversations" title="Dynamic Conversations" style="border: 1px solid gray; zoom:70%;"> 


    
3. Click the **Advance Settings**. The **Advance Settings** dialog box is displayed.
<img src="../images/dcf(5).png" alt="Advance Settings" title="Advance Settings" style="border: 1px solid gray; zoom:70%;"> 
 





 



Adjusting the settings allows you to fine-tune the model’s behavior to meet your needs. The default settings work fine for most cases. You can tweak the settings and find the right balance for your use case. A few settings are common in the features, and a few are feature-specific:

* **Model**: The selected model for which the settings are displayed.
* **Instructions or Context**: Add feature/use case-specific instructions or context to guide the model.
* **Temperature**: The setting controls the randomness of the model’s output. A higher temperature, like 0.8 or above, can result in unexpected, creative, and less relevant responses. On the other hand, a lower temperature, like 0.5 or below, makes the output more focused and relevant.
* **Max Tokens**: It indicates the total number of tokens used in the API call to the model. It affects the cost and the time taken to receive a response. A token can be as short as one character or as long as one word, depending on the text.
* **Number of Previous User Inputs**: Indicates how many previous user messages should be sent to the model as context for rephrasing the response sent through the respective node. For example, 5 means that the previous 5 responses are sent as context.
* **Additional Instructions**: Add specific instructions on how prompts should be rephrased. You can create a persona, ask it to rephrase in a particular tone, etc.
* **Similarity Threshold**: The Similarity Threshold is applicable for the Answer from Docs feature. This threshold refers to the similarity between the user utterance and the document chunks. The platform shortlists all chunks that are above the threshold and sends these chunks to the LLMs to auto-generate the responses. Define a suitable threshold that works best for your use case. Setting a higher threshold limits the number of chunks and may not generate any result. Setting a lower threshold might qualify too many chunks and might dilute the response.

		
### Change Settings for a Custom Model

	

		

			

For a custom model, you can only change the post-processor script to adjust the actual response with the expected response.

Follow these steps:



1. Go to **Generative AI Tools** > **GenAI Features** > **Dynamic Conversations**.
2. Hover over the feature to view the **Settings** (gear) icon.
<img src="../images/image4-3-4.png" alt="Edit Settings" title="Edit Settings" style="border: 1px solid gray; zoom:70%;"> 


 

3. Click **Edit**. The Actual Response is displayed. 


    ![alt_text](images/cpf(5).png  )
    

4. Click **Configure**. The Post Processor Script is displayed. 


    ![alt_text](images/cpf(7).png  )

5. Modify the script and click **Save & Test**. The Response is displayed. 




    ![alt_text](images/cpf(6).png  )

6. Click **Save**.
7. (Only for Agent Node) Enter the **Exit Scenario Key-Value** and **Virtual Assistance Response Key fields**. Click **Save**.
The Exit Scenario Key-Value fields help identify when to end the interaction with the GenAI model and return to the dialog flow. A Virtual Assistance Response Key is available in the response payload to display the VA’s response to the user.
    ![alt_text](images/image1-8.png  )
	

	

		




## Model and Supported Features

The following table displays the features and the supported models. 

(✅ Supported | ❌ Not supported)



=== "Automation AI"

    |Model|Agent Node|Prompt Node|Repeat Responses|Rephrase Dialog Responses|Rephrase User Query|Zero-shot ML Model|
    |:----:|:----:|:----:|:----:|:----:|:----:|:----:|
    |Azure OpenAI – <br>GPT 4|✅|✅|✅|✅|❌|✅^|
    |Azure OpenAI – <br>GPT 4 Turbo, GPT 4o, and GPT-4o mini*|✅|✅|❌|✅|❌|✅|
    |OpenAI – <br>GPT 3.5 Turbo, GPT 4, GPT 4 Turbo, GPT 4o, and GPT-4o mini*|✅|✅|✅|✅|❌|✅^|
    |Provider's New LLM**|✅|✅|❌|✅|❌|✅|
    |Custom LLM|✅|✅|❌|✅|❌|✅|
    |Amazon Bedrock|✅|✅|❌|✅|❌|❌|
    |Kore.ai XO GPT|❌|❌|❌|✅|✅|❌|


=== "Search AI"

    |Model|Answer Generation|Vector Generation|Query Rephrasing|
    |:----:|:----:|:----:|:----:|
    |Azure OpenAI – <br>GPT 4, GPT 4 Turbo, GPT 4o, and GPT-4o mini*|✅|❌|❌|
    |OpenAI – <br>GPT 3.5 Turbo, GPT 4, GPT 4 Turbo, GPT 4o, and GPT-4o mini*|✅|❌|❌|
    |Provider's New LLM**|✅|❌|❌|
    |Custom LLM|✅|✅|❌|
    |Kore.ai XO GPT|✅|✅|✅|

=== "Agent AI"

    |Model|Agent Response Rephrasing|
    |:----:|:----:|
    |OpenAI – GPT 3.5 Turbo|✅|
<hr>


\^  Currently, the Zero-shot ML Model does not support batch testing when using GPT 4.

\* The OpenAI GPT-4o mini and Azure OpenAI GPT-4o mini do not include system prompts, but they can be used with custom prompts. 

\** To use the Provider's New LLM, you must create a custom prompt as system prompts are unavailable.



## Feature Details

### Agent Response Rephrasing
Agents will be able to choose the LLM to rephrase their responses in the following tones.

* **Formalize**: Allows agents to elevate the formality of their writing, making it suitable for business or any other formal contexts.
* **Friendly**: Offers suggestions and improvements to promote a friendly and approachable tone in text.
* **Expand**: Allows agents to elevate the formality of their writing, making it suitable for business or any other formal contexts.
* **Rephrase**: Allows agents to elevate the formality of their writing, making it suitable for business or any other formal contexts.


### Answer Generation

This feature helps generate an answer to the user question based on the data ingested into the Search AI application. The relevant data with a user query is inserted into the prompt, and the configured LLM responds with the answer. This answer is then formatted appropriately and presented to the user. [Learn more](../searchai/answer-configuration.md#answers-generation).

### Agent Node

When enabled, this feature lets you add an Agent Node to Dialog Tasks. This node allows you to collect Entities from end-users in a free-flowing conversation (in the selected English/Non-English Bot Language) using LLM and Generative AI in the background. You can define the entities to be collected as well as rules & scenarios in English and Non-English Bot languages. You can configure node properties just like any other node. You can also use the Agent Node across Dialog Tasks.

<img src="../images/genainode.png" alt="Agent Node" title="Agent Node" style="border: 1px solid gray; zoom:70%;"> 






**Usage**

When creating or editing a Dialog Task that’s created manually or[ auto-generated](../automation/use-cases/dialogs/using-the-dialog-builder-tool.md#auto-generated-dialog-tasks), you can find a node called Agent Node within your nodes list. 

When this feature is disabled, the node is unavailable within the Dialog Builder.[ Learn more](../automation/use-cases/dialogs/node-types/genai-node.md).


### Prompt Node

This feature lets you define custom user prompts based on the conversation context and the response from the LLMs. You can define the subsequent conversation flow by selecting a specific AI model, tweaking its settings, and previewing the response for the prompt.

 

**Usage**



1. When building the Dialog Flow, click the **“Gen AI”**, and select the **Prompt Node** node. 
<img src="../images/genaiprompt.png" alt="Agent Node" title="Agent Node" style="border: 1px solid gray; zoom:70%;"> 

2. Configuring the Component Properties in the following sections helps set up the node:
    * **General Settings**: Provide **Name** and **Display Name** for the node and write your own OpenAI Prompt.
    * **Advanced Settings**: Fine-tune the model’s behavior and tweak its settings as required for the following:
        * Model
        * System Context
        * Temperature
        * Max Tokens
1. **Advanced** **Controls**: Select the maximum wait time (**Timeout**) to receive a response from the LLM and the bot’s response (Timeout Error Handling) when a timeout error occurs.
2. When you add custom tags to the **current message**, **user profile**, and **session** under **Instance Properties**, you can build custom profiles for the bot conversation. .
3. Configuring node connections on an instance lets you define the connection rules for the conversation using transition conditions. This lets the conversation follow specific paths based on the user’s input.

If this feature is disabled, you cannot configure the ML model to build custom prompts using OpenAI for different use cases.[ Learn more](../automation/use-cases/dialogs/node-types/genai-prompt.md).


### Repeat Responses

This feature uses LLM to reiterate the recent bot responses when the Repeat Response event is triggered. Bot developers can enable the event and customize the trigger conditions. This empowers end-users to ask the bot to repeat its recent responses at any point during the conversation. Currently, this event is supported for IVR, Audiocodes, and Twilio Voice channels.[ Learn more](../automation/intelligence/event-handling.md#repeat-bot-response-event).



### Rephrase Dialog Responses

This feature sends all User Prompts, Error Prompts, and Bot Responses to the Generative AI along with the conversation context, which depends on the configured number of user inputs. Responses are rephrased in English or the selected Non-English Bot Language based on the context and user emotion, providing a more empathetic, natural, and contextual conversation experience to the end-user. You can give instructions (additional instructions) in English or any other bot language you select.





<img src="../images/dcf(1).gif" alt="Rephrase Dialog Responses" title="Rephrase Dialog Responses" style="border: 1px solid gray; zoom:70%;">

**Usage**

When configuring a Message, Entity, or Confirmation node, you can enable the **Rephrase Response** feature (disabled by default). This lets you set the number of user inputs sent to OpenAI/Anthropic Claude-1 based on the selected model as context for rephrasing the response sent through the node. You can choose between 0 and 5, where 0 means that no previous input is considered, while 5 means that the previous. 5 responses are sent as context.

When this feature is disabled, the Rephrase Response section is not visible within your node’s Component Properties.





![alt_text](images/dcf(3).png  )



### Rephrase User Query

This feature uses the[ Kore.ai XO GPT Model](xo-gpt-module.md). This model helps improve intent detection and entity extraction by enriching the user query with relevant details from the ongoing user conversation.

When a user intent and entity are split across multiple utterances or through the conversation, the feature enriches the user query by rephrasing the user’s multiple queries during runtime. This enriched user query contains all the conversation details so the bot can understand the actual meaning behind a user’s utterance. This enriched user query is fed to the natural language, improving accuracy by improving intent identification and entity extraction.

**Usage**

The LLM rephrases the query using one of the following methods depending on the scenario:

**Completeness**: The user query should be complete based on the conversation context so that the NLP can identify the right intent. If the user query is incomplete, the system urges the user to rephrase with more information.

For example: 
User: What is the weather forecast for New York tomorrow? 
Bot: It will be Sunny, with temperature ranging between 30 – 35 degrees Celsius. 
User: How about Orlando? 
Bot: Sorry, I cannot understand. Can you please rephrase?

The query should be completed as “How about the weather forecast in Orlando tomorrow?”.

**Co-referencing**: Coreference arises when multiple expressions or queries within text pertain to a common entity. In cases where a user’s query demonstrates incomplete coreference, the system prompts the user to rephrase the query with additional information. This enhances NLP’s ability to discern the correct intent and entities involved.

For example: 
User: I’ve been experiencing a persistent headache for the past week. 
Bot: I’m sorry to hear that. Have you been taking any medication for it? 
User: Yes, I’ve been taking ibuprofen, but it doesn’t seem to help much. 
Bot: I see. How often do you take ibuprofen? 
User: I take it every six hours 
Bot: I don’t understand. Can you tell me how often you take ibuprofen?

The co-reference in the user query should be expanded for NLP to identify the right intent and entities. The co-reference should be expanded as “I take ibuprofen every six hours”.

**Completeness and Co-referencing**: The following example illustrates completeness and co-referencing issues with the user’s input which triggers rephrasing.

For example: 
User: I want to apply for a personal loan.

Bot: Sure, I can help you. You’re eligible to take a personal loan of up to 20,000\$.

User: How about a Home loan? 
Bot: You’re eligible to apply for a home loan as well. You can avail up to 100,000\$. 
User: What about the interest rates of both loans?

The co-reference and the query have to be completed as “What is the interest rate of personal loan and home loan?

#### Conversation History Length
This setting allows you to specify the number of recent messages sent to the Kore.ai XO GPT model as context for the user query rephrasing feature. These messages include both user messages and virtual assistant (VA) messages. You can set any value greater than 1. However, the number of messages sent is limited to the session's conversation history, even if your set value is higher. The default value is 10.
You can access the Conversation History Length from **Repharse User Query** > **Advanced Settings**.
<img src="../images/ruq-ad.png" alt="Conversation History Length" title="Conversation History Length" style="border: 1px solid gray; zoom:70%;">

### Vector Generation

This feature helps create vector embeddings for all the ingested data in the Search AI application. When the user inputs a query, the query is converted into an embedding, and then a vector search is performed to get a list of relevant data from the ingested data. This relevant data is then sent to the answer generation feature.



### Zero-shot ML Model

This feature help the ML Engine identify the relevant intents from user utterances based on semantic similarity. By identifying the logical intent during run time, this feature eliminates the need for training data. The Zero-shot ML model requires well-defined intents to work well. This training approach is well-suited for virtual assistants with relatively fewer intents and distinct use cases.

For the Zero-shot model feature, the XO Platform offers two template prompts for every supported model of Open AI and Azure Open AI. The template prompts are “Default” and “Zero-Shot-V2”. The “Zero-Shot-V2” is the advanced version of the “Default” template and is selected by default as you select the model. You can import both templates and create a custom prompt using them.

!!! note

    The Zero-shot model is production-ready in English but experimental in other languages. We advise caution before using it in production for non-English languages.

**Usage**

Before performing utterance testing, the user selects the **Zero-shot Model** Network Type. During utterance testing, the user provides a more descriptive input with a subject, object, and nouns. Once the test runs, the system identifies the most logical intent as the definitive match by comparing the following:



* User utterance input
* Intent names

The identified intent is then displayed as the matched intent.

If this feature is disabled, the system won’t identify and display the logical and matched intent during utterance testing.[ Learn more](../automation/natural-language/training/machine-learning-engine.md#zero-shot-learning-model-with-openai).













### Few-shot ML Model

The Few-shot model uses Kore Ai’s hosted embeddings to train virtual assistants based on intent names and training utterances. The model identifies the intents based on semantic similarity between user and training utterances.

!!! note

    The Few-shot model is production-ready in English but experimental in other languages. We advise caution before using it in production for non-English languages.

**Usage**

Before performing utterance testing, the user selects the **Few-Shot Model (Kore.ai Hosted Embeddings)** network type. 

During utterance testing, the user provides a more descriptive intent name with a subject, object, and nouns, as well as the training utterances. Once the test runs, the system identifies the most logical intent as the definitive match based on the following:



* The default configuration settings
* User utterance input
* Intent names

If this feature is disabled, the system won’t identify and display the logically matched intent during utterance testing.[ Learn more](../automation/natural-language/training/machine-learning-engine.md#few-shot-model-koreai-hosted-embeddings).

		
