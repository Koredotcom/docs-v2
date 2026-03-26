# Tool Definition or Tool Calling



Tool calling is the ability to identify when external functions are needed, select appropriate ones, invoke them with correct parameters, process their outputs, and incorporate the results into responses.

* **Interaction with External Systems**: The introduction of tool calling expands the Agent Node's capabilities beyond text generation. It enables interaction with external systems and databases, facilitating real-time data retrieval, calculations, and system-specific operations. This integration allows for more dynamic and data-driven conversational experiences.
* **Dynamic Prompt Enhancement**: The Agent Node's prompt is enhanced to include tool definitions and contextual information. Based on user input and ongoing conversation, the language model can dynamically decide whether to generate text or call a tool. The dynamic prompt adaptation ensures that the AI Agent provides the most appropriate response or action at each step of the interaction.
* **Tool Calling with Streaming Responses**: The Agent Node supports tool calling with streaming, allowing the model to generate responses progressively for faster, more fluid user interactions. The Agent Node supports both tool calling and prompt streaming in custom JavaScript V2 prompts using the OpenAI or Azure OpenAI response format.

!!! Note "Agent Node Tool Calling and Streaming Support"

    * V1 Custom JavaScript Prompts: Supports tool calling and streaming as separate capabilities, but not simultaneously.
    * V2 Custom JavaScript Prompts: Supports both tool calling and streaming together using OpenAI/Azure OpenAI response format.



## Tool Configuration

To configure tools, navigate to [Agent Node > Component Properties > Tools](working-with-agent-node.md#tools){:target="_blank"} and click **+ Add**. This opens the **New Tool** creation window, where you define the following details for tool configuration:

* **Name**: Add a meaningful name that helps the language model identify the tool to call during the conversation. 
* **Description**: Provide a detailed explanation of what the tool does to help the language model understand when to call it.
* **Parameters**:Specify the inputs the tool needs to collect from the user. Define up to 10 parameters for each tool and mark them as mandatory or optional.  
    * **Name**: Enter the parameter name.
    * **Description**: Enter an appropriate description of the parameter.
    * **Type**: Select the parameter type (String, Boolean, or Integer). 
* **Actions**: These are the nodes that the Platform executes when the language model requests a tool call with the required parameters. Users can add up to 5 actions for each tool. These actions are chained and executed sequentially, where the output of one action becomes the input for the next.
    * **Node Type**: Select the node type (Service Node, Script Node, Search AI Node) from the dropdown.
    * **Node Name**: Select a new or existing node from the dropdown.
* **Response Path**: The final output from the action nodes is required to be added as a Response Path for the Platform to understand where to look for the actual response in the payload. Choose the specific key or path that defines the output.
* **Choose transition**: Define the behavior after tool execution:
    * **Default**: Send the response back to the LLM. It is mandatory to have a Response Path in this case.
    * **Exit Node**: Follow the transitions defined for the Agent Node.
    * **Jump to a Node**: You can jump to any node defined in the dialog. 


**Jump to a Node Transition**

The Jump-to-Node transition option enables the creation of sophisticated dialog workflows. It allows for dynamic branching based on tool execution results, significantly streamlining the design of complex conversation flows.

**Key Updates**:

* Added "Jump-to-Node" transition option for tools within the Agent node.
* Enables seamless navigation to specified target nodes following tool execution.
* Maintains complete session-level conversation history across all transitions.
* Supports transitions to both orphan nodes and sub-dialogs.
* Ensures full backward compatibility with existing tool configurations.

    <img src="../images/genai-node(18).png" alt="Tools" title="Tools" style="border: 1px solid gray; zoom:70%;">


## Related Links

* [Use Agent Node and Search AI to Generate Answers](../../how-tos/use-agentnode-and-searchai-to-generate-answers.md)