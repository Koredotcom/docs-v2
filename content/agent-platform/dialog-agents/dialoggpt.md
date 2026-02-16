# DialogGPT - Dialog Agents Orchestration

DialogGPT is an intelligent orchestration engine that enables Dialog Agents to engage in natural, fluid conversations at scale. It autonomously manages the entire conversation flow from intent identification to fulfillment, allowing the agents to handle complex interactions without requiring extensive training data. The engine seamlessly balances predefined business rules with dynamic, context-aware responses. It leverages advanced text embeddings and generative models to interpret user input and determine the most appropriate path to fulfill each unique request.

DialogGPT intelligently recognizes and processes tasks based on their names and descriptions. This allows it to navigate intricate, multi-intent conversations with human-like proficiency, eliminating the need for the extensive training typically associated with conversation management solutions.

## Key Capabilities

* **Autonomous Decision Making**: Independently analyzes inputs and determines execution paths.
* **Zero-Shot Intent Detection**: Utilizes RAG and LLMs to accurately identify intents without requiring training data.
* **Ambiguity Resolution**: Efficiently resolves unclear intents through real-time clarification.
* **Multi-Intent Processing**: Recognizes and manages multiple intents within a single query.
* **Conversational Nuance Management**: Handles pauses, repetitions, and restarts naturally.
* **Dynamic Response Generation**: Creates contextually appropriate responses based on user data and history.
* **Model Flexibility**: Supports various model options, including commercial, custom, or XO GPT models.
* **Granular Intent Resolution**: Refines broad queries into specific, actionable intents using domain knowledge.

## Core Architecture and Functionality

DialogGPT operates through a structured three-step process:

<img src="../images/dialog-gpt-process.png" alt="DialogGPT Orchestration" title="DialogGPT Orchestration">


1. **User Input and Chunk Shortlisting**:
    
    * Processes user input and conversation history.
    * Identifies relevant chunks from dialog, FAQ, or Search AI embeddings stored in vector databases.
    * Rephrases input to optimize retrieval.
    * Uses Retrieval-Augmented Generation (RAG) for precise chunk selection.

2. **Intent Identification and Fulfillment Strategy**:
    
    * Analyzes retrieved chunks in conjunction with user input and conversation context.
    * Uses LLMs to identify appropriate intents.
    * Resolves ambiguities through ranking or user clarification.
    * Determines dependencies and execution orders for multi-intent scenarios.
    * Handles system intents through pre-defined handlers.
    * Categorizes and selects appropriate fulfillment strategies.

3. **Flow Management and Fulfillment**:
    
    * Triggers resolved intents with appropriate fulfillment actions.
    * Executes dialog tasks or FAQs.
    * Generates responses for system intents.
    * Manages multi-intent scenarios sequentially or in parallel.
    * Delivers contextually relevant responses while adhering to enterprise business rules.

[Learn more](https://docs.kore.ai/xo/generative-ai-tools/dialog-gpt/){:target="_blank"}.
