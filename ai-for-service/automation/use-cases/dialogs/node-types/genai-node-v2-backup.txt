# Agent Node Overview

The **Agent Node** lets you leverage LLMs and generative AI with Tool calling to create sophisticated and versatile bots capable of handling complex tasks and providing dynamic, data-driven interactions. With its streamlined entity collection, contextual intelligence, multilingual support, and integration with external systems, the node empowers platform users to deliver exceptional human-like conversational experiences to their employees and customers.

## Key Features

* **Entity Collection**: The Agent Node simplifies the process of gathering entities within a conversation, reducing the need for multiple entity nodes. This streamlined approach enhances the user experience by making bot interactions more natural and user-friendly.
* **System Context, Business Rules, and Exit Scenarios**: The Agent Node incorporates system context, business rules, and predefined exit scenarios to ensure accurate and relevant responses. This contextual intelligence helps guide the conversation, handle various user inputs effectively, and maintain alignment with enterprise business rules.
* **Multilingual Support**: The Agent Node supports both English and non-English bot languages, enabling platform users to create virtual assistants that cater to a diverse user base and facilitate multilingual interactions.
* **Configuration Flexibility**: The Agent Node can be configured like any other node in the XO Platform, providing flexibility in its integration within dialog tasks. This allows platform users to seamlessly incorporate the Agent Node into their existing conversational flows.

### Enhanced Capabilities with Tool Calling

Tool calling is the ability to identify when external functions are needed, select appropriate ones, invoke them with correct parameters, process their outputs, and incorporate the results into responses.

* **Interaction with External Systems**: The introduction of tool calling expands the Agent Node's capabilities beyond text generation. It enables interaction with external systems and databases, facilitating real-time data retrieval, calculations, and system-specific operations. This integration allows for more dynamic and data-driven conversational experiences.
* **Dynamic Prompt Enhancement**: The Agent Node's prompt is enhanced to include tool definitions and contextual information. Based on user input and ongoing conversation, the language model can dynamically decide whether to generate text or call a tool. The dynamic prompt adaptation ensures that the virtual assistant provides the most appropriate response or action at each step of the interaction.

## Agent Node Runtime Behavior

During runtime, the Agent Node efficiently orchestrates interactions between the node, language model, and XO Platform to enable seamless user experiences and integration with external systems. You can work with this node like any other node within Dialog Tasks and invoke it within multiple tasks. 

During runtime, the node behaves as follows:

1. **Input Processing**: When the agent node receives user input, it processes it first through a Pre-Processor script. This script runs only once before the orchestration starts between the node and the platform. This script can perform tasks like formatting the input or extracting relevant information before sending the input to the language model.
2. **Entities Collection**:
    * The platform invokes the Generative AI model to understand the user input.
    * The platform uses the entities and business rules defined in the node configurations to understand user input and identify the required entity values.
    * The responses required to prompt/inform the user are automatically generated based on the conversation context.
    * The platform drives the conversation until all the defined entities are captured.
3. **Contextual Intents**
    * Contextual intents (Dialog or FAQs) recognized from user input continue to be honored according to the Interruption Settings defined in the bot definition.
    * Post completion of the contextual intents, the flows can return to the Agent Node.
4. **Language Model Decision**: The language model analyzes the processed user input and decides whether to respond with generated text or call a tool:
    * **Text Response**: If the language model determines that a text response is appropriate, it generates the response and sends it to the XO Platform. The platform then renders this response to the user.
    * **Tool Call Execution**: When the language model decides to call a tool, it sends a tool request to the XO Platform. The platform identifies the action linked to the called tool, which could be a script, service, or Search AI node. The XO Platform executes this action and retrieves the output.
5. **Output Appending**: Depending on the selected transition, the XO Platform may exit the node or append the output to the request prompt for enriched context and send the updated prompt back to the model for further processing.
6. **Post-Processing**: Before presenting the final output, the XO Platform passes the response from the language model through a Post-Processor script. This script runs every time a response is received. It allows further manipulation of the response, such as formatting the output or integrating it with other elements of the conversation.
7. **Exit Conditions**
    * The platform exits from the Agent Node when any of the defined exit conditions are met.
    * These conditions allow you to define scenarios that require a different path in the conversation, such as handing off to a human agent.
    * The platform can also exit the Agent Node when the user exceeds the maximum number of volleys (retries to capture the required entities).
8. **Iterative Process**: This process repeats for each conversation volley, ensuring the Agent Node dynamically adapts to user input and leverages the power of language models and external systems through tool calls.

### Entity Values and Outputs

* **Entity Values**: The platform stores the entity values in the [context object](../../../intelligence/context-object.md), and this information can be used to define the transitions or any other part of the bot configuration.
* **Conversation History**: The `LLM_Conversation_History` object stores the conversation history, tool history, and transactions between the platform and the model during a tool call. 
* **Node’s Output**: The Agent Node's output is stored as structured JSON in the [context object](../../../intelligence/context-object.md), making it accessible and usable throughout the entire dialog flow, even after the node is no longer active.
