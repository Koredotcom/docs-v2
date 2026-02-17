
# Kore.ai XO GPT Module

The new Kore.ai XO GPT module delivers fine-tuned large language models designed for enterprise conversational AI Agents. These models are optimized for accuracy, safety, and efficiency in production environments.

Current capabilities include Answer Generation, Conversation Summarization, User Query Rephrasing, AI Agent Response Rephrasing, Vector/Embedding Generation (Text and Image), and Intent Resolution (DialogGPT). Future updates will expand capabilities further, including Entity Co-referencing.





## Benefits of Using the Module

The XO GPT module offers fast, accurate AI responses with built-in security:

* **Better Accuracy**: The module leverages smaller foundation models, typically under 10 billion parameters, that have been explicitly fine-tuned for conversational AI Agents. The models achieve better accuracy, relevance, and Interpretability for production deployment by tuning smaller models rather than directly prompting larger generative models.

* **Faster Responses**: The models are relatively smaller and hosted along with the Platform. This results in faster response times, making them suitable for production use cases for digital and voice interactions.

* **Ready to Use**: Enterprises can rapidly deploy these pre-fine-tuned models to immediately realize value without needing in-house AI expertise and long tuning cycles.

* **Data Security and Privacy**: The models are fully integrated into the Platform, enabling the same enterprise-grade data confidentiality, privacy, and governance enforced across the Platform.


## Kore.ai’s Model Fine-Tuning Process

Fine-tuning is an iterative process of taking a pre-trained LLM and adapting it to perform conversational AI Agents tasks:

1. **Collect Data**: Gather a dataset relevant to the desired task. This dataset serves as the training material for fine-tuning the LLM.

2. **Select a base LLM**: Select a pre-trained LLM that best fits the task needs.

3. **Train**: Train the model to understand specific conversation patterns. The training process utilizes the task-specific dataset and involves adjusting the model’s parameters to grasp the nuances of the task.

4. **Test and Refine**: Evaluate the fine-tuned model on a separate validation dataset to ensure it performs well. If necessary, iterate through the fine-tuning process to achieve optimal results.


## Features Supported by the Module

The Kore.ai XO GPT module currently supports the following features:

* **Answer Generation**: This feature helps generate an answer to the user's question based on the data ingested into the Search AI application. Relevant data with a user query is inserted into the prompt, and XO GPT responds with the answer accordingly. This answer is then formatted appropriately and presented to the user. [Learn more](genai-features.md#search-ai-genai-features).

* **Conversation Summary**: This model generates concise, natural language summaries of interactions between the AI Agent, users, and human agents. It distills the key intents, entities, decisions, and outcomes into an easy-to-read synopsis. Enterprises can leverage conversation summarization to boost agent productivity, ensure process compliance, and create better contextual recommendations without reading lengthy transaction histories. It's pre-integrated with Kore.ai’s Contact Center platform and extensible to third-party applications via API integration. [Learn more](genai-features.md#automation-ai-genai-features).

* **DialogGPT - Conversation Orchestration**: This feature intelligently manages conversations, understands user intent, handles requests, seeks clarification when needed, and automatically deals with common conversational flows like pausing, repeating information, or restarting. When used in the universal app, it seamlessly routes conversations to the correct AI Agent based on the user's stated needs for organizations with multiple an AI Agent's. [Learn more](dgpt-conversation-orchestration.md).

* **Rephrase Dialog Responses**: This feature sends all User Prompts, Error Prompts, and an AI Agent Responses to XO GPT with the conversation context, which depends on the configured number of user inputs. Responses are rephrased based on the context and user emotion, providing the end user with a more empathetic, natural, and contextual conversation experience. [Learn more](genai-features.md#automation-ai-genai-features).

* **Rephrase User Query**: This XO GPT model utilizes the app domain knowledge and conversation history to expand and rephrase user queries for improved understanding by downstream NLP components. This includes better recognition of contextual intents, entity co-referencing, and more. [Learn more](genai-features.md#automation-ai-genai-features).

* **Vector Generation (Image & Text)**: This feature helps create vector embeddings for text and image data ingested data in the Search AI application. When the user inputs a query, the query is converted into an embedding, and then a vector search is performed to get a list of relevant data from the ingested data. This relevant data is then sent to the answer generation feature. [Learn more](genai-features.md#search-ai-genai-features).

