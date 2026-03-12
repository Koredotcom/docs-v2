
# Generative AI Features

## Overview

The Generative AI features improve design-time and runtime capabilities, accelerating an AI Agent development and enhancing performance. LLM-powered functionalities streamline the development process, reducing time and effort while boosting overall efficiency.

By default, all the features are disabled. To enable the feature, select the model, prompt, and then toggle the status to enable it. You can also change the model, its prompts, and the respective settings.
		
### Enable Feature

Steps to enable the feature:


1. Navigate to **Generative AI Tools** > **GenAI Features**.  
<img src="../images/genai-features-home.png" alt="GenAI Features" title="GenAI Features" style="border: 1px solid gray; zoom:70%;"> 

2. Select the **Model** and **Prompt** from the drop-down list for a feature. 
3. Turn on the Status toggle. The success message is displayed.

		

	
### Product Filter

Smart filtering in the features section is based on the context from which the users access the Generative AI menu. This shows the relevant feature options for that product (for example, Automation, Search, Agent, Contact Center). The users can easily add/remove this filter as needed.  
<img src="../images/filter-and-search.png" alt="Product Level Filter" title="Product Level Filter" style="border: 1px solid gray; zoom:70%;"> 
	

### Feature Search Functionality

A dedicated search feature functionality to enable quick and efficient discovery of GenAI features across the entire the Platform. This enhancement streamlines navigation, minimizes search time, and improves overall user efficiency by providing direct access to key tools and options.
			


## Change Settings for a Model

Choose the option below based on the model for which you want to change the settings:


### Change Settings for a Pre-built Model

			

You can change the selected model’s settings if required. **In most cases**, **the default settings work fine**.

Follow these steps:



1. Go to **Generative AI Tools** > **GenAI Features**.
2. Open **Advance Settings** using the feature gear icon. The **Advance Settings** dialog box is displayed.  
<img src="../images/advance-settings.png" alt="Advance Settings" title="Advance Settings" style="border: 1px solid gray; zoom:70%;"> 


Adjusting the settings allows you to fine-tune the model’s behavior to meet your needs. The default settings work fine for most cases. You can tweak the settings and find the right balance for your use case. A few settings are common in the features, and a few are feature-specific:

* **Model**: The selected model for which the settings are displayed.
* **Instructions or Context**: Add feature/use case-specific instructions or context to guide the model.
* **Temperature**: The setting controls the randomness of the model’s output. A higher temperature, like 0.8 or above, can result in unexpected, creative, and less relevant responses. On the other hand, a lower temperature, like 0.5 or below, makes the output more focused and relevant.
* **Max Tokens**: It indicates the total number of tokens used in the API call to the model. It affects the cost and the time taken to receive a response. A token can be as short as one character or as long as one word, depending on the text.
* **Number of Previous User Inputs**: Indicates how many previous user messages you send to the model as context for rephrasing the response sent through the respective node. For example, 5 means that the previous 5 responses are sent as context.
* **Additional Instructions**: Add specific instructions on how the system rephrases prompts. You can create a persona, ask it to rephrase in a particular tone, etc.
* **Similarity Threshold**: The Similarity Threshold is applicable for the Answer from Docs feature. This threshold refers to the similarity between the user utterance and the document chunks. The Platform shortlists all chunks that are above the threshold and sends these chunks to the LLMs to auto generate the responses. Define a suitable threshold that works best for your use case. Setting a higher threshold limits the number of chunks and may not generate any result. Setting a lower threshold might qualify too many chunks and might dilute the response.

		
### Change Settings for a Custom Model

	

		

			

For a custom model, you can only change the post-processor script to adjust the actual response with the expected response.

Follow these steps:



1. Go to **Generative AI Tools** > **GenAI Features**.
2. Click the feature **Settings** (gear) icon. 

3. Click **Edit**. The Actual Response is displayed. 


    ![alt_text](images/cpf(5).png  )
    

4. Click **Configure**. The Post Processor Script is displayed. 


    ![alt_text](images/cpf(7).png  )

5. Modify the script and click **Save & Test**. The Response is displayed. 




    ![alt_text](images/cpf(6).png  )

6. Click **Save**.
7. (Only for Agent Node) Enter the **Exit Scenario Key-Value** and **AI Agent Response Key fields**. Click **Save**.
The Exit Scenario Key-Value fields help identify when to end the interaction with the GenAI model and return to the dialog flow. An AI Agent Response Key is available in the response payload to display the AI Agent's response to the user.
    ![alt_text](images/image1-8.png  )



## Automation AI - GenAI Features


* **Agent Node**: This feature lets you build an AI Agent using LLMs, Tool calling, and generative AI. It supports entity collection, context handling, multilingual conversations, and external integrations—enabling dynamic, human-like interactions for employees and customers.
* **Prompt Node**: Leverage this node to unlock the power of Generative AI with your prompts, enabling you to build creative and custom use cases.
* **Repeat Responses**: Use LLM to reiterate the last app responses when the Repeat App Response event is triggered.
* **Rephrase Responses**: Enhance end-user experience with empathetic and contextual app responses.
* **Rephrase User Query**: Improve intent detection and entity extraction by enriching the user query with relevant details from the ongoing conversation context.
* **Zero-shot ML Model**: Uses the Open AI LLM model for intent identification during run time based on semantic similarity.
* **Few-shot ML Model**: Uses the Platform hosted embeddings for intent identification during run time based on semantic similarity.
* **Automatic Dialog Generation**: This feature helps build production-ready dialog tasks automatically by briefly describing the task. A preview of the generated dialog is available and lets you modify the intent description and create multiple integrations of the dialog.
* **Conversation Test Cases Suggestion**: The Platform suggests simulated user inputs covering various scenarios from an end-user perspective at every test step. You can use these suggestions to create test suites.
* **Conversation Summary**: Implements the Conversation Summary public API to fetch the details of the entire conversation between the customer and the an AI Agent or human agent. This API leverages an open-source LLM to summarize conversations.
* **NLP Batch Test Cases Suggestion**: The Platform generates NLP test cases for every intent, including entity checks. You only need to create test suites in the Builder using the generated testing utterances.
* **Training Utterance Suggestions**: Generate high-quality training data quickly and easily with the Platform’s suggested utterances for each intent. Review and add the suggestions as needed to create a powerful training set for your app.    
* **Use Case Suggestions**: Uses the Open AI LLM model to generate use cases during an AI Agent creation journey.



Learn more about [Automation AI - GenAI Features](genai-features-automationai.md).

## Search AI - GenAI Features

* **Answer Generation**: This feature helps generate an answer to the user question based on the data ingested into the Search AI application.

* **Enrich Chunks with LLM**: This feature helps leverage the capabilities of an external LLM to refine, update, or enrich the chunks extracted from the ingested content. 

- **Metadata Extractor Agent**: This feature is used to extracts relevant sources and fields from a query, map them to structured data, and apply filters or boosts for accurate retrieval. This is particularly useful for data from third party applications.  
- **Query Rephrase for Advanced Search API**: This feature is used to add contextual information to the user queries and enhance them for relevance. 

- **Query Transformation**: This feature is used to identify key terms within a query, removing noise and prioritizing relevant documents.

* **Rephrase User Query**: Improve intent detection and entity extraction by enriching the user query with relevant details from the ongoing conversation context.

- **Result Type Classification**: This feature is used in Agentic RAG to determine whether the user seeks a specific answer or a list of search results in response to the query.

* **Transform Documents with LLM**: Use LLM to transform documents ingested into Search AI.

* **Vector Generation - Image**: Generate visual embeddings for ingested image content and user queries, enabling the system to retrieve relevant images and provide accurate responses to end-user queries.

* **Vector Generation - Text**: Generate embeddings for the ingested textual content and user queries, enabling the system to retrieve relevant information and provide accurate responses.


Learn more about [Search AI - GenAI Features](genai-features-searchai.md).

## Agent AI - GenAI Features


* **Agent Coaching**: Generate agent best responses based on the conversation history and current message to support agent coaching.
* **Conversation Summary**: Create conversation summaries during chat transfers or create closing notes of conversations between users and agents.
* **Generating Opposite Utterance Suggestions**: Use LLM models for generating opposite utterances during design time.
* **Generating Similar Answer Suggestions**: Use LLM models for generating similar answers during design time based on semantic similarity.
* **Generating Similar Utterance Suggestions**: Use LLM models for generating similar utterances during design time based on semantic similarity.
* **Sentiment Analysis**: Identify customer sentiment across agent conversations through Quality AI using LLMs.


Learn more about [Agent AI - GenAI Features](genai-features-agentai.md).



## Contact Center AI - GenAI Features

* **Agent Response Rephrasing**: Generate agent best responses based on the conversation history and current message to support agent coaching.
* **Conversation Summary**: Create conversation summaries during chat transfers or create closing notes of conversations between users and agents.
* **Disposition Prediction for Agent Wrap-Up**: Auto-suggest disposition codes based on conversation context and disposition metadata.
* **Sentiment Analysis**: Identify customer sentiment across agent conversations through Quality AI using LLMs.


Learn more about [Contact Center AI - GenAI Features](genai-features-contactcenterai.md).

## Quality AI - GenAI Features

* **Advanced Topic Discovery based on Custom Taxonomy and Resolution Detection**: Extract topics and intents from agent conversations detect resolution of agent conversations to discover levers based on customer sentiment, Handle Time and Resolution and quickly surface trends and anomalies based on these outcomes.

- **Agent Empathy Identification**: Identify Agent empathy instances where customers have expressed negative sentiment through Quality AI using LLMs.
- **By Hold Adherence**: This feature detects when an agent places a user on hold and resumes the conversation.
- **By Transfer Adherence**: This feature identifies whether the agent informs the customer about the transfer.
- **By Value Adherence validation for Quality AI**: Validates data adherence by comparing extracted metric values against reference data using multilingual LLM analysis. Performs precise value matching and returns binary adherence scores for each metric.
- **By Value metric extraction for Quality AI**: Extract by value metric from user/agent/bot messages through Quality AI using LLMs.  
- **Churn & Escalation Identification**: Identify customer churn risk and escalation intents across agent conversations through Quality AI using LLMs.
- **Conversation Phase Identification**: Post conversation phase identification for phase level sentiment insights. 
- **Crutch Word Usage Detection**: Use LLMs to detect agent crutch word usage in customer conversations through Quality AI.  
- **Default Script Adherence**: Determine agent adherence to default script steps across greeting, branding, privacy policy, customer verification, hold etiquette and call closing through Quality AI's conversation Intelligence dashboard using LLMs.
- **GenAI-based agent answer adherence and customer trigger detection**:  Use LLMs to check for agent adherence and customer trigger detection without configuring utterances and training.
- **Generating Similar QM Utterance Suggestions**: Use LLM models for generating similar utterances during design time based on semantic similarity.
- **Post Conversation Sentiment Analysis**: Generate post-interaction sentiment and emotion moment insights for agent conversations from Quality AI using LLMs. 
- **Sentiment Analysis**: Identify customer sentiment across agent conversations through Quality AI using LLMs. 
- **Topic Modelling**: Extract popular Topics and Intents that customers discuss across agent conversations through Quality AI using LLMs.


Learn more about [Quality AI - GenAI Features](genai-features-qualityai.md).
