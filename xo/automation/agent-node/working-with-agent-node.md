# Agent Node



The **Agent Node** lets you leverage LLMs and generative AI with Tool calling to build AI-powered, sophisticated, and versatile AI Agents capable of handling complex tasks and providing dynamic, data-driven interactions. With its streamlined entity collection, contextual intelligence, multilingual support, and integration with external systems, the node empowers platform users to deliver exceptional human-like conversational experiences to their employees and customers.

## Benefits

* **Entity Collection**: The Agent Node simplifies the process of gathering entities within a conversation, reducing the need for multiple entity nodes. This streamlined approach enhances the user experience by making AI Agent interactions more natural and user-friendly.
* **System Context, Business Rules, and Exit Scenarios**: The Agent Node incorporates system context, business rules, and predefined exit scenarios to ensure accurate and relevant responses. This contextual intelligence helps guide the conversation, handle various user inputs effectively, and maintain alignment with enterprise business rules.
* **Multilingual Support**: The Agent Node supports both English and non-English AI Agent languages, enabling platform users to create AI Agents that cater to a diverse user base and facilitate multilingual interactions.
* **Configuration Flexibility**: The Agent Node can be configured like any other node in the Platform, providing flexibility in its integration within dialog tasks. This allows platform users to seamlessly incorporate the Agent Node into their existing conversational flows.
* **Tool Calling**: Tool calling is the ability to identify when external functions are needed, select appropriate ones, invoke them with correct parameters, process their outputs, and incorporate the results into responses.
* **Tool Calling with Streaming Responses**: Tool calling with streaming, allowing the model to generate responses progressively for faster, more fluid user interactions.
* **Simplified V2 Prompt Setup**: The Custom Prompt page now features a Response Payload Format control (OpenAI, Azure OpenAI, or Custom) for automatic parsing, eliminating the need for manual Post-Processor setup in streaming configurations.
* **Rich UI Components**: The Agent Node can pass structured JSON responses from the LLM to client channels for rich UI presentation. When users enable the "Parse Rich Templates" option in custom prompt settings (available for V1 and V2 prompts), they can prompt the model to generate responses in structured JSON format. The Node passes these JSON payloads as structured responses to the platform, which then sends them as templates to client channels. The client channels render these templates as supported UI components such as cards, lists, tables, and suggestion chips, enabling visually engaging information display beyond plain text.

## Quick Start Guide


### Setup Agent Node


#### Model Configuration

The Agent Node supports variants of LLM, including OpenAI, Azure OpenAI, Amazon Bedrock, and Custom LLM. To learn more, see [Model and Supported Features](../../generative-ai-tools/genai-features.md#automation-ai-genai-features).


#### Prompt Setup

To learn more, see [Agent Node Prompt Setup](prompt-setup.md).



#### Configure Agent Node 

By default, the Agent Node is disabled. To enable the node, see [Enable GenAI Feature](../../generative-ai-tools/genai-features.md#enable-feature).

Add the node to a dialog task and configure the node's properties and tool calling capabilities.  

##### Add Agent Node to a Dialog Task

Steps to add an Agent Node to a Dialog Task:

1. Go to **Automation** > **Dialogs** and select the task that you are working with. 
2. You can add the **Agent Node** like any other node. You can find it in the main list of nodes.  
<img src="../images/canvas-agentnode.png" alt="image_tooltip" title="image_tooltip" style="border: 1px solid gray; zoom:70%;">


##### Component Properties

The component properties empower you to configure the following settings. The changes made within this section affect this node across all instances and dialog tasks.

It allows you to provide a **Name** and **Display Name** for the node. The node name cannot contain spaces.


<img src="../images/gennodecp1n.png" alt="Component Properties" title="Component Properties" style="border: 1px solid gray; zoom:70%;">


###### Model Configuration

Adjusting the settings allows you to fine-tune the model’s behavior to meet your needs. The default settings work fine for most cases. You can tweak the settings and find the right balance for your use case. A few settings are common in the features, and a few are feature-specific:


* **Model**: The selected model for which the settings are displayed.
* **Prompt/Instructions or Context**: Add feature/use case-specific instructions or context to guide the model.
* **Conversation History Length**: This setting allows you to specify the number of recent messages sent to the LLM as context. These messages include both user messages and AI Agent messages. The default value is 10. This conversation history can be seen from the debug logs. 
**Note**: Applicable only if you are using a custom prompt. 
* **Temperature**: The setting controls the randomness of the model’s output. A higher temperature, like 0.8 or above, can result in unexpected, creative, and less relevant responses. On the other hand, a lower temperature, like 0.5 or below, makes the output more focused and relevant.
* **Max Tokens**: It indicates the total number of tokens used in the API call to the model. It affects the cost and the time taken to receive a response. A token can be as short as one character or as long as one word, depending on the text.
* **Fallback Behavior**: Fallback behavior lets the system determine the optimal course of action on LLM call failure or the Guardrails are violated. You can select fallback behavior as:
    * Trigger the Task Execution Failure Event
    * Skip the current node and jump to a particular node. The system skips the node and transitions to the node the user selects. By default, ‘End of Dialog’ is selected.


###### Pre-Processor Script


This property helps execute a script as the first step when the Agent Node is reached. Use the script to manipulate data and incorporate it into rules or exit scenarios as required. The Pre-processor Script has the same properties as the Script Node. [Learn more](../../automation/use-cases/dialogs/node-types/working-with-the-script-node.md#configure-the-node){:target="_blank"}.

To define a pre-processor script, click **Define Script**, add the script you want to execute, and click **Save**. Enable **Auto Save** to save your work automatically after one second of inactivity. It must be re-enabled each time you open the editor.

<img src="../images/pre_processor.png" alt="Pre processor Script" title="Pre processor Script" style="border: 1px solid gray; zoom:70%;">


###### Entities

!!! note

    Entity collection is applicable only for V1 Prompts.
    
Specify the entities to be collected by LLM during runtime. In the Entities section, click **+ Add**, enter an **Entity Name,** and select the **Entity Type** from the drop-down list.

Most entity types are supported. Here are the exceptions: custom, composite, list of items (enumerated and lookup), and attachment. See [Entity Types](../../automation/use-cases/dialogs/entity-types.md){:target="_blank"} for more information.

<img src="../images/entitiesv2.png" alt="image_tooltip" title="image_tooltip" style="border: 1px solid gray; zoom:70%;">

###### System Context

Add a brief description of the use case context to guide the model.

###### Tools

Tools allow the Agent Node to interact with external services, fetching or posting data as needed. When called, they let language models perform tasks or obtain information by executing actions linked to Script, Service, or Search AI nodes. Users can add a maximum of 5 tools to each node.

Click **+ Add** to open the **New Tool** creation window. Refer [Tools Configuration](tools.md){:target="_blank"} for details on defining tools.

<img src="../images/genai-node(18).png" alt="Tools" title="Tools" style="border: 1px solid gray; zoom:70%;">


###### Rules

Add the business rules that the collected entities should respect. In the rules section, click **+ Add**, then enter a short and to-the-point sentence, such as:

* _The airport name should include the IATA Airport Code;_
* _The passenger’s name should include the last name._

There is a 250-character limit to the Rules field, and you can add a maximum of 5 rules.

<img src="../images/rulesv2.png" alt="Rules" title="Rules" style="border: 1px solid gray; zoom:70%;">

Example Business Rules:

* Policy_number must be exactly 10 digits.
* Incident_date must be within the last 30 days from current date.
* claim_type must be one of: auto, home, health, life.
* All required entities must be collected before submission.




###### Exit Scenarios

Specify the scenarios that should terminate entity collection and return to the dialog task. This means the node ends interaction with the generative AI model and returns to the dialog flow within the Platform. Well-defined exit scenarios create clear boundaries for conversations and improve the overall user experience.

Click **Add Scenario**, then enter short, clear, and to-the-point phrases that specifically tell the generative AI model when to exit and return to the dialog flow. For example, Exit when the user wants to book more than 5 tickets in a single booking and return `"max limit reached"`.

There is a 250-character limit to the Scenarios field, and you can add a maximum of 5 scenarios.

<img src="../images/exitv2.png" alt="Exit Scenarios" title="Exit Scenarios" style="border: 1px solid gray; zoom:70%;">

Common Exit Scenarios:

* User explicitly asks to end the conversation
* User has provided invalid information after 3 attempts
* All required entities have been collected
* User requests to speak with a human agent


###### Post-Processor Script

This property initiates the post-processor script after processing every user input as part of the Agent Node. Use the script to manipulate the response captured in the context variables just before exiting the Agent Node for both the success and exit scenarios. The Post-processor Script has the same properties as the Script Node. [Learn more](../../automation/use-cases/dialogs/node-types/working-with-the-script-node.md#configure-the-node){:target="_blank"}.

**Important Considerations**

If the Agent Node requires multiple user inputs, the post-processor is executed for every user input received.

To define a post-processor script, click **Define Script** and add the script you want to execute. 


##### Instance Properties

Configure the instance-specific fields for this node. These apply only for this instance and will not affect this adaptive dialog node when used in other tasks. You must configure Instance Properties for each task where this node is used.

<img src="../images/instancev2.png" alt="Instance Properties" title="Instance Properties" style="border: 1px solid gray; zoom:70%;">


###### User Input

Define how user input validation occurs for this node:


* **Number of Iterations Allowed**:  Set the maximum number of times a user is prompted for valid input, with a range of 1 to 25 iterations. The default is 10 iterations.
* **Behavior on Exceeding Retries**: Define what happens when the user exceeds the allowed retries. You can choose to either _End the Dialog_ or _Transition to a Node_ – in which case you can select the node to transition to.


###### Auto Correct

Toggle enable/disable the Auto Correct for spelling and other common errors.


###### Advanced Controls

Configure advanced controls for this node instance as follows:

**Intent Detection**

This applies only to String and Description entities: Select one of these options to determine the course of action if AI Agent encounters an entity as a part of the user utterance:

* **Accept input as entity value and discard the detected intent**: The AI Agent captures the user entry as a string or description and ignores the intent.
* **Prefer user input as intent and proceed with Hold & Resume settings (default)**: The user input is considered for intent detection, and the AI Agent proceeds according to the Hold & Resume settings.


**Interruptions Behavior**

To define the interruption handling at this node. You can select from the below options:

* **Use the task level ‘Interruptions Behavior’ setting**: The AI Agent refers to the **Interruptions Behavior** settings set at the dialog task level.
* **Customize for this node**: You can customize the **Interruptions Behavior** settings by selecting this option and configuring it. You can choose whether to allow interruptions or not, or to allow the end user to select the behavior. You can further customize Hold and Resume behavior. Read the [Interruption Handling and Context Switching](../../automation/intelligence/conversation-management/manage-interruptions.md){:target="_blank"} article for more information.

**Analytics-Containment Type:**   

Select one of the below options to determine how to treat user-abandoned conversations.

* **Use task-level default settings:** This refers to the Containment Type settings set at the dialog level.
* **Customize for this node:** You can customize the Containment Type for this node by selecting this option. You can choose whether to Self Service or Drop-off in case of user-abandoned conversations.

**Custom Tags**

Add Custom Meta Tags to the conversation flow to profile AI Agent-user conversations and derive business-critical insights from usage and execution metrics. You can define tags to be attached to messages, users, and sessions.  See [Custom Meta Tags](../../analytics/automation/custom-dashboard/custom-meta-tags.md){:target="_blank"} for details.



##### IVR Properties


Configure Voice Properties to streamline the user experience on voice channels. You can define prompts, grammar, and other call behavior parameters for the node. The Agent Node does not require initial prompts or error prompts. For more information, refer to the [Voice Call Settings Field Reference](../use-cases/dialogs/node-types/voice-call-properties.md).

!!! note

    Agent Nodes with streaming LLM prompts support IVR Properties for voice channel only.


##### Connections Properties

!!! note

    If the node is at the bottom of the sequence, then only the connection property is visible.

Define the transition conditions from this node. These conditions apply only to this instance and will not affect this node’s use in any other dialog. For a detailed setup guide, See [Adding IF-Else Conditions to Node Connections](../../automation/use-cases/dialogs/node-connections/nodes-conditions.md){:target="_blank"} for a detailed setup guide.

The Connection Path property offers three default variants:

1. Not Connected - No specific next node is defined
2. End of Dialog - Explicitly ends the current dialog
3. Return to Flow - Terminates the Dialog Task and returns control to the Flow Builder. The Flow Builder resumes from the next node.
    * Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context.
    It has two deflection types - ‘ Automation’ and ‘Agent Transfer’.  
    <img src="../images/deflect-to-chat1.png" alt="Deflect to Chat" title="Deflect to Chat" style="border:1px solid gray;zoom:70%;">


!!! Note

    Deflect to Chat works only with Kore Voice Gateway Channels (Phone number or SIP Transfer).



## Agent Node Execution


### Execution Flow

During runtime, the Agent Node efficiently orchestrates interactions between the node, language model, and Platform to enable seamless user experiences and integration with external systems. You can work with this node like any other node within Dialog Tasks and invoke it within multiple tasks. 

During runtime, the node behaves as follows:

1. **Input Processing**: When the agent node receives user input, it processes it first through a Pre-Processor script. This script runs only once before the orchestration starts between the node and the platform. This script can perform tasks like formatting the input or extracting relevant information before sending the input to the language model.
2. **Entities Collection**:
    * The platform invokes the Generative AI model to understand the user input.
    * The platform uses the entities and business rules defined in the node configurations to understand user input and identify the required entity values.
    * The responses required to prompt/inform the user are automatically generated based on the conversation context.
    * The platform drives the conversation until all the defined entities are captured.
3. **Contextual Intents**
    * Contextual intents (Dialog or FAQs) recognized from user input continue to be honored according to the Interruption Settings defined in the AI Agent definition.
    * Post completion of the contextual intents, the flows can return to the Agent Node.
4. **Language Model Decision**: The language model analyzes the processed user input and decides whether to respond with generated text or call a tool:
    * **Text Response**: If the language model determines that a text response is appropriate, it generates the response and sends it to the Platform. The platform then renders this response to the user.
    * **Tool Call Execution**: When the language model decides to call a tool, it sends a tool request to the AI Agent Platform. The platform identifies the action linked to the called tool, which could be a script, service, or Search AI node. The Platform executes this action and retrieves the output.
5. **Output Appending**: Depending on the selected transition, the Platform may exit the node or append the output to the request prompt for enriched context and send the updated prompt back to the model for further processing.
6. **Post-Processing**: Before presenting the final output, the Platform passes the response from the language model through a Post-Processor script. This script runs every time a response is received. It allows further manipulation of the response, such as formatting the output or integrating it with other elements of the conversation.
7. **Exit Conditions**
    * The platform exits from the Agent Node when any of the defined exit conditions are met.
    * These conditions allow you to define scenarios that require a different path in the conversation, such as handing off to a human agent.
    * The platform can also exit the Agent Node when the user exceeds the maximum number of volleys (retries to capture the required entities).
8. **Iterative Process**: This process repeats for each conversation volley, ensuring the Agent Node dynamically adapts to user input and leverages the power of language models and external systems through tool calls.

### Testing Agent Node/Debug Logs

The debug logs capture the entire execution flow, including the conversation history array and the tools being called. The conversation history array tracks the interaction between the user and the AI Agent, while the tool calls (`FundsTransfer`, `PayeesAvailableCheck`) represent the specific actions or functions invoked by the AI Agent to fulfill the user's request.

By examining the debug logs, users can trace the steps taken by the AI Agent, understand how it processes the user's input, and see how it interacts with different tools to complete the requested task. The logs provide crucial visibility into the underlying execution and are invaluable for debugging, monitoring, and gaining a deeper understanding of the AI Agent's behavior.

The debug logs on the left side of the screenshot below provide a comprehensive view of the execution flow and the interactions between the user, the AI Agent (Finance Buddy), and the underlying system. This detailed view ensures that you are fully informed about the process.

<img src="../images/tooldebug.png" alt="Essential keys" title="Essential keys" style="border: 1px solid gray; zoom:70%;">

Here's a step-by-step explanation of the execution captured in the debug logs:

1. The user initiates the conversation with Finance Buddy, requesting to transfer funds to the user.
2. Finance Buddy responds, asking how it can help the user.
3. The user expresses their intent to transfer funds to a person.
4. The Agent Node is initiated (`Agent node initiated`).
5. The Agent Node Request Response Details are captured in JSON format and contain the conversation history up to this point.
6. The tool execution (`FundsTransfer`) is initiated. This indicates that the AI Agent has determined that the tool needs to be called based on the user's request.
7. The AI Agent checks if the person (John Doe) is already registered as a payee in the user's account. To verify this, it calls the `PayeesAvailableCheck` tool.
8. The `PayeesAvailableCheck` tool completes execution, and the result is captured in the debug logs. The AI Agent determines that the person is registered as a payee.
9. The AI Agent informs the user that the person is registered as a payee and requests additional details to proceed with the fund transfer. It asks the user to select the transfer type (NEFT/IMPS/RTGS), provide the transfer amount, and confirm their account ID.
10. The user provides the requested information.
11. The AI Agent calls the `FundsTransfer` tool with the provided details to initiate the fund transfer.
12. The `FundsTransfer` tool completes execution, and the Agent Node captures the updated conversation history array in the request-response details.
13. The Platform exits the Agent node.

## Best Practices

To view recommended guidelines for using the agent node, see [Best Practices](best-practices.md).

## FAQs

To view commonly asked questions about the agent node, see [FAQs](faqs.md).