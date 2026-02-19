# Text to Text Node - Automate Text Transformation

The Text to Text node is part of the AI node family in the Workflow Builder, enabling the dynamic transformation of input text into a desired text output within a single workflow step. It leverages large language models (LLMs) to produce content that adheres to specific tone, structure, and instructions defined via prompts. This node is ideal for tasks involving summarization, rewriting, generation, and formatting of text data.

## Key Capabilities

* **Custom Prompt Execution**: Define specific behavior through human and system prompts or select from reusable templates in the Prompt hub.
* **LLM Model Selection**: Choose from pre-configured models with optional hyperparameter tuning (temperature, top-k, top-p, max tokens).
* **Structured Output Support**: Define JSON schemas for predictable and parsable responses from the model.
* **Prompt Templates & Versioning**: Load and customize prompt versions, with support for variable mapping and editing.
* **Workflow Calling Integration**: Enable the model to autonomously call external workflows during execution (if supported).
* **Timeout Configuration**: Control the duration for which the model can run before triggering a timeout error.

## Common Use Cases

* **Text Summarization**: Generate summaries from conversation transcripts, logs, or documents.
* **Tone or Style Adjustment**: Refine a message to convey a more professional, friendly, technical, or other desired tone.
* **Keyword-Based Generation**: Produce text using given inputs like names, topics, or key phrases.
* **Error Explanation or Log Analysis**: Extract, explain, or simplify technical content.
* **Content Rewriting**: Modify existing text to enhance clarity, structure, or purpose (for example, simplifying instructions).

## How It Works

Once placed in the workflow, the Text to Text node takes input from previous nodes and sends a prompt to the selected AI model. Based on your configuration—prompt, schema, and model settings—it returns a response to the context variable for use in the next step. Execution can optionally involve workflow calls, and success/failure paths allow routing based on the outcome.

<img src="../images/text_to_text_node_new.png" alt="Text to Text Node" title="Text to Text Node" style="border: 1px solid gray; zoom:60%;">

In this document, you will learn how to add the node to your flows, configure it with system and human prompts along with model settings, manage inputs and outputs, and test the generated text results.


## Add and Configure a Text to Text Node

Setting up a Text to Text node in a workflow involves adding the node at the appropriate location in the flow and configuring various node properties.

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.
  <img src="../images/access-workflows.png" alt="access workflows" title="access workflows" style="border: 1px solid gray; zoom:75%;">

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the Text to Text Node

* In the Workflow builder, click the “**+**” icon on any existing node on the canvas and select **AI** > **Text to Text** from the pop-up menu. 
* Alternatively, drag the **Text to Text** node under **AI** from the Assets panel onto the canvas.

### Step 3: Configure the Node

* Click the added node to open its properties dialog box. 
<img src="../images/configure-gen-ai-node.png" alt="Configure AI Node" title="Configure AI Node" style="border: 1px solid gray; zoom:75%;">

* Enter the following General Settings:

    1. **Node Name**: Enter an appropriate name for the node.

    2. **Prompt options**: Choose one of the following options:
        * **Write your own prompt**: If you select 'Write your own prompt’, follow these steps:
            * **System Prompt**: Enter the system prompt for your use case. System prompts help you assign a role to the model. For example, “Generate a summary of the transcription of a conversation in a maximum of 5 lines without returning any special characters".
            * **Prompt**: Provide the instructions that you want the model to follow. You can use context variables as mentioned below. For example, you can store the conversation transcript in a variable named “conversation” and pass it on in the prompt.  
            Syntax: `{{context.variable_name}}`
            Example: `{{context.conversation}}`  

        !!! note

            System Prompts: These are instructions to guide how the model should respond. They define the overall behavior or tone of the model. For example: "You are a helpful assistant."   
            Human Prompts: These are the questions or requests made by the user. They specify what the user wants the model to do or answer. For example: "Summarize this error log and tell me the likely cause of the issue."


        * **Choose a prompt from prompt hub:** If you select ‘Choose a prompt from prompt hub’, follow these steps:
            * Select your desired prompt and specific version from the **Prompt** and **Version** drop-down lists. Once selected, the prompt automatically populates in the **Prompt** field.  
            If the selected prompt version includes a defined response schema, it will be automatically loaded. Additionally, if the prompt was saved as a template with a schema, that schema will also be loaded when the template is selected.
    
            * To edit the prompt, click the **Customize** option. The ‘Custom Prompt’ view is displayed, where the prompt from Prompt Studio will be populated in both the system and human prompt fields. You can then modify the prompt while preserving the selected version.  

        <img src="./../images/choose_prompt_with_variables_fields.png" alt="Choose a prompt" title="Choose a prompt" style="border: 1px solid gray; zoom:70%;">      

        !!! note

            Importing a Prompt with Variables: If you import a prompt from Prompt Studio with set variables, you can add the necessary variables in the ‘Map Variables’ field for that AI node.

            Importing a Prompt without Variables: If you import a prompt from Prompt Studio that does not have variables, you must customize the prompt and manually add the variables. In this case, the "Map Variables" field does not appear, as the imported prompt has no variables to map.

    3. **Select Model**: Select a model from the list of configured models.
    Note that when you choose a prompt from the prompt hub, it will also fetch the preferred model and connection associated with that version if you specified one during the commit process.

    4. **Timeout**: Select the timeout duration from the allowed range. The allowed range is 30 to 180 seconds (3 minutes). The default is 60 seconds (1 minute). The node triggers a timeout error if the request is not completed within the selected time frame.    

        !!! note 

            Timeout precedence: Workflow timeout *is greater than* Node timeout *is greater than* Model timeout.

    5. **Response JSON schema**:  Define a JSON schema for structured responses. This step is optional and depends on the selected model.   
        You can define a JSON schema to structure the model's response if the chosen model supports the response format. By default, if no schema is provided, the model will respond with plain text.
        Supported JSON schema types include: String, Boolean, Number, Integer, Object, Array, Enum, and anyOf. Ensure the schema follows the standard outlined here: [Defining JSON schema](../perform-other-actions-on-the-flow-builder/defining-json.md). 
        If the schema is invalid or mismatched, errors will be logged, and you must resolve them before proceeding.  

        For more information about how the model parses the response and separates keys from the content body, see: [Structured Response Parsing and Context Sharing in Workflows](../perform-other-actions-on-the-flow-builder/model_response_parsing.md).

    6. **Model Configurations**: Use hyperparameters to fine-tune the AI model's behavior to suit your needs. While the default settings work well for most cases, you can adjust them to find the right balance for your use case.

        * **Temperature**: Controls the randomness of the model's responses. Higher values lead to more random outputs, while lower values result in more focused outputs.

        * **Top p**: Controls the diversity of the model's output by considering only the top tokens whose cumulative probability exceeds a threshold. Higher values produce more diverse outputs, while lower values result in more deterministic outputs.

        * **Top k**: Restricts the model from considering only the top k most probable next words when generating output. For example, if k=50, the model will randomly choose from the top 50 predictions at each step. This helps balance quality and diversity in the generated text. Higher top-k values encourage creativity and diversity, while lower values promote coherence and reliability.

        * **Max Tokens**: Sets the maximum length of the model's output. Lower values generate shorter responses, while higher values produce longer responses.

### Step 4: Add Connections

Click the **Connections** icon and select the **Go to Node** for success and failure conditions.

* **On Success** > **Go to Node**: After the current node is successfully executed, go to a selected node in the flow to execute next, such as an AI node, Function node, Condition node, API node, or End node.

* **On Failure** > **Go to Node**: If the execution of the current node fails, go to the End node to display any custom error message from the AI node.

    <img src="./../images/gen-ai-connections.png" alt="AI Actions" title="AI Actions" style="border: 1px solid gray; zoom:70%;">

### Step 5: Add Workflows

To add workflows, click the **Workflow Calling** icon. When you select a model that supports workflow calling, the ‘*workflow calling available*’ tab is displayed in the Properties panel. You can configure workflow calling settings from this tab.

!!! note

    When you attach workflows to the AI node, its details are sent to the model along with the request details. This enables the model to determine whether to resolve the input query, prompt, or request using its own knowledge or by calling the appropriate workflows. You can select up to three workflows for each AI node. 

* **Add Workflows**: Click **Add Workflows** to add a workflow.

* **Select workflows**: The Workflows dialog displays a list of workflows available in your account. Select the appropriate workflows and click **Add workflows**. Once added, the selected workflows will appear on the workflows tab, indicating that they have been successfully attached.

* **Configure workflow settings**:
    * In the Workflow configuration section, configure the following:
        * **Exit node execution after**: Specify the number of model calls to use as the exit criteria. For example, if you set this to 5 calls and the LLM continues making workflow calls without providing a final answer, the system will exit to the failure path.
    * In the Additional settings section, configure the following:
        * **workflow choice**: Select *Auto* or *Required*. This option determines whether the model will automatically decide when to make a workflow call (Auto), or if a workflow call is required every time (Required). The default setting is Auto.
        * **Parallel workflow calls**: Select *True* to enable the model to execute multiple workflow calls simultaneously. Select *False* if you want the model to execute workflow calls sequentially, optimizing for the best possible outcome.  
        
    <img src="./../images/tool_calling_configuration.png" alt="AI Actions" title="AI Actions" style="border: 1px solid gray; zoom:70%;">

### Step 6: Test the Flow

Finally, test the flow and fix any issues found. Click the **Run Flow** button at the top-right corner of the flow builder and follow the onscreen instructions.

!!! Failure "Standard Error"

    When the Model is not selected, the prompt details are not provided, or both, the following error message is displayed: “Proper data needs to be provided in the LLM node”.

## Access the AI Node’s Output

The node’s output is stored in a context variable. You can access the variable using the following syntax:
`{{context.steps.AINodeName.output}}`

!!! note

    AI for Process can automatically recognize variables and outputs. To do so, type "context.steps." and you will see available variables and nodes, including the nodes' outputs.