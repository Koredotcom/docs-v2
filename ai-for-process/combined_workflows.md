


<!-- Seems to be missing from docs. Nodes.mdx has basic coverage. -->

# Doc Intelligence Node - Automate Data Extraction

The Doc Intelligence Node enables document analysis and information extraction within workflows. It allows workflows to analyze documents using AI engines such as Docling, OpenAI, Anthropic, or Azure. Users can configure the node to process files from a static URL or workflow context variable, select the appropriate engine, and define engine-specific options to extract structured data or insights.

This capability is useful for workflows that involve invoices, receipts, identity documents, contracts, or other documents that require automated extraction and downstream processing.

## Key Capabilities

* **Engine selection**: Choose between Docling, OpenAI, Anthropic, or Azure to process the document with the AI engine best suited for your use case.
* **File input flexibility**: Input can be a static URL or a dynamic workflow context variable, allowing seamless integration with upstream steps.
* **Async processing**: Executes document processing asynchronously, allowing workflows to continue without waiting for the extraction to finish (engine support may vary).
* **Structured data extraction**: For engines that support structured output, the node can generate structured data automatically for downstream consumption.

## Common Use Cases

* **Invoice and receipt processing**: Automatically extract key fields including amounts, dates, and vendor information from financial documents.
* **Identity document verification**: Extract structured data from IDs, passports, or business cards to automate validation steps.
* **Contract analysis**: Identify key clauses, dates, or parties in contracts for automated tracking or review.
* **Compliance checks**: Ensure sensitive documents are correctly analyzed, and key information is captured for auditing.

## How it Works

The Doc Intelligence Node acts as an automated document-processing point within a workflow. When a workflow reaches this node, the selected AI engine analyzes the document and extracts relevant information or structured data. The node processes the document using the selected engine and returns extracted text or structured data. Workflow execution continues based on the node’s configuration and engine capabilities.

The extracted information is then made available for downstream workflow steps, enabling automation of decision-making, data entry, or reporting. Built-in error handling and engine configuration checks ensure that the node functions reliably and provides traceability into the processing results.

<img src="../images/doc_node_how_it_works.png" alt="Doc Intelligence node" title="Doc Intelligence node"/>

This allows workflows to seamlessly incorporate document intelligence, turning unstructured documents into actionable data with minimal manual intervention.

## Add and Configure a Doc Intelligence Node

The Doc Intelligence Node allows you to integrate automated document processing into your workflow. Use this procedure to add the node to your canvas and configure its properties.

**Before you begin**

* Open your workflow and add the Doc node to the workflow canvas. [Learn more about adding nodes](../manage-flow-nodes.md#add-nodes)
* Ensure that at least one AI engine (Docling, OpenAI, Anthropic, or Azure) is configured in your workspace if you plan to use it for processing.

**Steps to configure a Doc Intelligence node:**

Begin by opening the Doc node’s properties panel and giving it a clear, descriptive name, such as InvoiceProcessing or IDExtraction, then follow the steps below:

### 1. Provide File Input

* Enter the **File URL** in the input field. You can use either:
    * A static URL
    * A workflow context variable to pass the document dynamically from upstream steps.

### 2. Select Engine

* Choose the AI engine for processing: **Docling**, **OpenAI**, **Anthropic**, or **Azure**.
* Engine-specific configuration options appear based on your selection.
* If the selected engine is not configured, the system prompts you to set it up and redirects you to the appropriate configuration page.

<img src="../images/doc_node_panel.png" alt="Doc node panel" title="Doc node panel"/>

### 3. Configure Engine Settings

Configure engine-specific options to control how the document is processed. 

Options include Async execution, which processes the document in the background without blocking the workflow, and Structured data extraction, which generates machine-readable outputs for downstream nodes.

| Engine                     | Default settings                              | Notes |
|----------------------------|-----------------------------------------------|-------|
| **Docling**                | Async enabled        | The model dropdown shows all configured Docling connections. |
| **OpenAI**                 | Async enabled        | Only configured OpenAI models are listed. Model timeout: 30–360 sec (default 300). |
| **Anthropic**              | Async enabled        | Only configured Anthropic models are listed. Model timeout: 30–360 sec (default 300). |
| **Azure Doc Intelligence** | Async enabled, structured data always enabled | Prebuilt models are available by default. |

<img src="../images/doc_node_config.png" alt="Doc node panel" title="Doc node panel"/>

For information about supported file types, file size limits, and available models by engine, see [Engine support and limits](../types-of-nodes/doc-intelligence-node.md#engine-support-and-limits).


### 4. Test the Flow

Run the flow and verify the flow behaves as expected and fix any errors.

The Debug panel displays logs, extracted text, structured data, and metadata based on your node configuration.

<img src="../images/debug_panel.png" alt="Doc node panel" title="Doc node panel"/>

## Access the Node’s Output

The Doc Intelligence Node output is stored in the workflow context for downstream nodes.

Use the syntax: `{{context.steps.DocNodeName.output}}`

Output may include:

* Extracted text
* Structured data (if enabled)
* Page or document metadata




## Engine Support and Limits

This section describes the supported file types, models, and size limits for each engine used in the Doc Intelligence node.

### Supported file types and size limits

| Engine                     | Supported file types     | Max file size         |
|---------------------------|---------------------------|------------------------|
| **Azure Document Intelligence** | PDF, DOCX, PPTX            | 50 MB                 |
| **OpenAI**                | PDF only                   | 512 MB                |
| **Anthropic Claude**      | PDF only                   | 32 MB                 |
| **Docling**               | PDF, DOCX, PPTX            | 100 MB (extendable)   |


###  Supported models and configurations

| Engine                       | Default model                   | Available models                                                                 | Configuration                        |
|------------------------------|----------------------------------|----------------------------------------------------------------------------------|--------------------------------------|
| **Azure Document Intelligence** | prebuilt-layout                 | Azure prebuilt models                                                            | Not configurable                     |
| **OpenAI**                   | gpt-4o-mini                      | gpt-4o, gpt-4o-mini, gpt-4.1                                                     | Temperature (0–2), max_tokens        |
| **Anthropic Claude**         | claude-3-5-sonnet-20241022       | claude-sonnet-4-20250514, claude-3-5-sonnet-20241022                            | Temperature (0–1), max_tokens        |
| **Docling**                  | Service-based                    | No model selection                                                               | Service-managed                      |



<!-- The above seems to be missing from docs -->








<!-- Documented in /ai-for-process/nodes.mdx -->
# DocSearch Node – Power Your Flows with Context-Driven Search

The DocSearch Node is a Retrieval-Augmented Generation (RAG)-powered component that enhances the real-time discovery and retrieval of information chunks from available resources through an established Search AI app connection. Indexed and high-quality content is fetched from your Sources repository, enabling fast, precise, and context-aware responses to user queries.

## Key Capabilities

* **RAG-Powered Search**: Combines traditional retrieval (search, databases) with generative LLMs as follows:
    * **Retrieval & Pre-processing**: Queries indexed content using advanced algorithms, then refines results through tokenization and filtering. 
    * **Grounded Generation**: Integrates refined results with LLMs for accurate and context-rich responses. 
* **Seamless SearchAI Integration**: Connects to your Search AI app to query indexed documents and return results via the Answer Generation engine.
* **Dynamic Query Support**: Supports static and dynamic inputs for flexible, context-aware search automation.
* **Meta Filter Configuration**: Use optional meta filters to refine results, or search across all linked documents by default.
* **User Redirection Option**: Redirect users to the full Search AI App for a more comprehensive search experience when needed.
* **Precision and Personalization**: Delivers context-aware, intent-driven responses aligned to the query, ensuring accurate, relevant, and user-specific outcomes.
* **Flow Integration**: Seamlessly connect DocSearch with other nodes to pass queries and process responses.

## Common Use Cases

* **Document Retrieval**: Retrieve relevant content from indexed sources, such as manuals, policies, or help articles, based on user queries.
* **Contextual Answer Generation**: Deliver AI-generated responses grounded in retrieved documents using the RAG framework.
* **Knowledge Base Search**: Search internal wikis, technical docs, or training material with support for dynamic inputs and filters.
* **User Query Handling**: Accept real-time input queries from other nodes to personalize search results in the workflow context.

## Example Use Case

A retail bank uses the **DocSearch Node** to automate responses to frequently asked questions about loans, accounts, and card services. When a user asks, `What documents are required to apply for a home loan based on my income?`, the node dynamically passes the query to a connected Search AI App, which searches, indexes, and fetches relevant information chunks from internal resources such as loan policy documents, eligibility criteria, and process guidelines. It then returns a precise, context-aware response, reducing call center load and improving self-service efficiency.

## How It Works

The **DocSearch Node** integrates seamlessly into your workflows, accepting user queries as static text or dynamic variables referencing other node outputs. It connects to a pre-configured Search AI App on the platform to retrieve relevant content from your Sources repository using a Retrieval-Augmented Generation (RAG) framework. You can define meta filters manually or fetch them via the Answer Generation API to generate refined, context-aware responses. The node fully integrates within the canvas and optionally allows redirection to the full Search AI interface.

<img src="../images/how-doc-search-works.png" alt="how doc search works" title="how doc search works"/>

In this document, you will learn how to add and configure DocSearch Nodes with Search AI connections, set up query inputs and meta filters, handle response outputs, and test the search-driven interactions within your automation flows.

## Steps to Add and Configure the Node

Configuring the DocSearch Node consists of the following steps:

1. [Set up a Search AI application and the information source for AI for Process integration](../types-of-nodes/docsearch-node.md#step-1-set-up-search-ai-app).
2. [Link the Search AI application in AI for Process](../types-of-nodes/docsearch-node.md#step-2-link-the-search-ai-app-in-ai-for-process).
3. [Add and configure the DocSearch node](../types-of-nodes/docsearch-node.md#step-3-add-and-configure-a-docsearch-node).
4. [Test the Workflow](../types-of-nodes/docsearch-node.md#step-4-test-the-flow) you have built.

## Step 1: Set up Search AI App

The integration of Search AI with AI for Process involves setting up a Search AI application, configuring it for integration, and modifying AI for Process to interact with Search AI in response to specific conditions or events. Search AI provides REST APIs that enable seamless interaction with any application.

Follow the detailed steps [here](https://docs.kore.ai/xo/apis/automation/api-introduction/#creating-and-managing-jwt-apps-in-xo-platform) to complete the configuration.

<Note>To receive answers from Search AI, you must enable the **Answer Generation** option under the API scopes section.</Note>

## Step 2: Link the Search AI App in AI for Process

After fetching the Search AI application credentials, configuring the source, and enabling the channel communication via API, you must link the app in AI for Process. 

**Steps to integrate Search AI in AI for Process**

* Log in to your AI for Process account. Click **Settings**.
* Click **Integrations** on the left navigation menu.
* Scroll down to **Search AI** and click **Add connection**.

    <img src="./../images/link-an-app.png" alt="link an app" title="link an app"/>

* In the **Search AI** window, provide the required information that you copied from the Search AI app in [Step 1](./docsearch-node.md#step-1-set-up-search-ai-app).

* Click **Test** to test the connection.
* If the connection is successful, click **Save**.
  <img src="./../images/searchai-connection-form.png" alt="searchai connection form" title="searchai connection form"/>

  A success message is displayed and the connection is listed for Search AI.
   <img src="./../images/listed-connection.png" alt="listed connection" title="listed connection"/>

  If the connection fails with the following message, check and re-enter the correct Search AI app credentials.

  <img src="./../images/connection-failure.png" alt="connection failure" title="connection failure"/>

  <div class="admonition note">
  <p class="admonition-title">Note</p>
  <p>We support connections through Search AI. You must provide `https://platform.kore.ai` for the **Search AI URL** field.</p></div>

## Step 3: Add and Configure a DocSearch Node

### Step 3(A): Open Workflow Builder

* Log in AI for Process modules top menu and click **Workflows**.

* Select your workflow and click **Go to Flow**.

### Step 3(B): Add the Node

Click **DocSearch** > **+ New DocSearch** on the **Assets** panel. Alternatively, click **DocSearch** in the bottom panel.

  <img src="./../images/add-docsearch-node.png" alt="add doc search node" title="add doc search node"/>

### Step 3(C): Configure the Node

* To provide a unique name, right-click the node and click **Rename** since the node is provided a default name.

    <img src="./../images/rename-docsearch-node.png" alt="rename node" title="rename node"/>

    Alternatively, click the node and change the value for **Node Name** in the configuration panel.

    <img src="./../images/node-name.png" alt="node name" title="node name"/>

* Add the input for the <b>Query</b> field to capture the user's search query. 
  
  To accept dynamic inputs, either configure an input variable in the <b>Start</b> node or use the <a href="../../perform-other-actions-on-the-flow-builder/manage-input-and-output/#adding-input-variables" >Manage Input Variables</a> feature.</p>

  You can also add plain text for hard-coded inputs like "<i>What does the McKinsey report forecast for Q3 in 2025 based on historic data taken in the past 3 years</i>."
   <img src="./../images/context-input.png" alt="query field" title="query field"/>
   
* Select the <b>Search AI connection</b> you set up in <a href="#step-2-link-the-search-ai-app-in-ai-for-process" >Step 2</a> on the AI for Process integration page.
   <img src="./../images/searchai-connection.png" alt="search ai connection" title="search ai connection"/>

   <div class="admonition note">
   <p class="admonition-title">Note</p>
   <p>Use search to look up and select the required connection.</p></div>

  To set up a new connection, click **+ New Connection**. This will redirect you to the AI for Process Integrations page. Follow the steps mentioned [here](./docsearch-node.md#step-2-link-the-search-ai-app-in-ai-for-process) to complete the integration.

* (Optional) Set <b>Meta filters</b> (click the expansion arrow to access the editor) to define rules that will narrow down the search results. For example, if the sources have multiple files, you can define the specific file names to look up in the meta filters code. <a href="https://docs.kore.ai/xo/apis/searchai/answer-generation/#body-parameters" >Learn more</a>.
<img src="./../images/set-meta-filters.png" alt="set meta filters" title="set meta filters"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>If you don't provide any meta filters, the query is applied to all the documents uploaded to that connection.</li>
<li>The filters can be a context variable in the flow depending on the builder’s requirement.</li></ul></p></div>

<p><b>Managing Errors</b></p>

Appropriate canvas-level errors are displayed (in the error log) when you add a new node. You can view and fix the errors by clicking the <b>warning</b> icon.

   <img src="../images/docsearch-run-flow.png" alt="click run button" title="click run button"/>

## Step 4: Test the Flow

To run and test the flow, follow the steps below:

* Click the **Run Flow** button at the top-right corner of the flow builder.
  <img src="../images/docsearch-run-flow.png" alt="click run button" title="click run button"/>

* (Optional) Add the value for **Input Variable** if you have configured it to test the flow in **Step 5** of [this](../types-of-nodes/docsearch-node.md#step-3-add-and-configure-a-docsearch-node) section. Otherwise, go directly to the next step.

* Click <b>Generate Output</b>.

     <img src="../images/input-and-generate-output-docsearch.png" alt="generate output" title="generate output"/>

   The **Debug** window displays the flow log and execution status of each node on the canvas, starting from the **Start** node to the **End** node, along with the result shown in the **Output** window. [Learn more](../../../workflows/workflow-builder/perform-other-actions-on-the-flow-builder/run-the-flow.md) about running the workflow.

<Note> The answer (extracted chunks) from the node can be accessed via the context variable (key) in the output path. This key is dynamic and depends on the API response. The format is `{{context.steps.<<<b>nodename</b>>>.dynamicpath}}`. For example, it could be `context.steps.DocSearch.response.response.answer` in one case or `context.steps.DocSearch.response.response.response.answer` in another. Check the sample response from Search AI to find the correct key that holds the content. Use that key in your workflow. You may also need to extract multiple chunks from different keys.</Note>

## Related Links

* [Manage Nodes in Workflow](../manage-flow-nodes.md) - Add and manage nodes on the canvas.
* [Run Workflow](../perform-other-actions-on-the-flow-builder/run-the-flow.md) - Run and test an workflow in real time.


<!-- Documented in /ai-for-process/nodes.mdx -->
# End Node - Automate Workflow Completion

End nodes let you display the flow's outputs upon success or an error message in case of failure.

## Add and Configure an End Node

Setting up an End node in a workflow involves adding the node at the appropriate location in the flow and configuring various node properties.

Steps to add and configure the node:

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.
  <img src="../images/access-workflows.png" alt="access workflows" title="access workflows"/>

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the End Node

* In the workflow builder, click the “**+**” icon on any existing node on the canvas and select **End** from the pop-up menu. 
* Alternatively, drag the **End** node from the Assets panel onto the canvas.

### Step 3: Configure the Node

* Click the added node to open its properties dialog box. The General Settings for the node are displayed.  
<img src="./../images/end-node-configure.png" alt="Configure End Node" title="Configure End Node"/>

* Enter or select the following information:

    * **Custom Name**: Enter an appropriate name for the node.
    
    * **Name (key)**: Select a key from the drop-down list. All defined keys in the Manage Output section are displayed here. You can select a variable and assign a value to it. (You can also add a new key. For more information, see [Manage Input and Output variable](./../perform-other-actions-on-the-flow-builder/manage-input-and-output.md).)  
    <img src="./../images/select-a-key.png" alt="Select a Key" title="Select a Key"/>
    
    * **Value**: Select an appropriate variable or node as the value. Enter “{{context.” and select the node/variable from the list and then close the braces with “}}”.
    
        Example: `{{context.steps.summarization.output}}`

        <img src="./../images/end-node-success-output.png" alt="Configure End Node" title="Configure End Node"/>

        !!! note

            Adding at least one output variable is required for each end node.

If you want to show multiple outputs or messages, click **Add a Key** to add the key and value details for the same.

### Step 4: Test the Workflow

Finally, test the workflow and fix any issues found. Click the **Run Flow** button at the top-right corner of the workflow builder and follow the onscreen instructions.

!!! failure "Standard Error"

    When the value for the output variable is not defined, a list of unresolved outputs is displayed.




<!-- Documented in /ai-for-process/nodes.mdx -->
# Function Node - Empower Workflows with Custom Code

The Function node is a powerful component that enables you to extend your automation flows with custom business logic and data processing capabilities. By embedding JavaScript or Python code directly into your workflows, you can manipulate variables in ways that preset nodes can't achieve. Configuration options provide you the ability to specify input and output variables and write corresponding execution code.

## Key Capabilities

* **Custom Script Execution**: Write and execute JavaScript or Python code inline or leverage pre-deployed custom functions.
* **Dynamic Data Processing**: Transform, validate, and manipulate data flowing through your automation.
* **Reusable Functions**: Import and use pre-built functions from your organization's script library.


## Common Use Cases

* **Data Transformation**: Convert data formats, parse JSON/XML, or restructure information between nodes.
* **Business Logic Implementation**: Apply custom validation rules, calculations, or decision-making logic.
* **Text Processing**: Perform string manipulation, regex operations, or natural language processing.
* **Mathematical Operations**: Execute complex calculations or statistical analysis on your data.


## How It Works

The Function Node integrates seamlessly into your workflows, accepting inputs from previous nodes and passing processed outputs to subsequent nodes. You can either write code directly in the built-in editor or reference custom functions from deployed scripts. The node supports both static and dynamic inputs through context variables, making it adaptable to various automation scenarios.

<img src="./../images/function_node_new.png" alt="Function Node" title="Function Node"/>

In this document, you will learn how to add Function nodes to your flows, configure them with custom code or functions, handle inputs and outputs, and test your implementations.


## Add and Configure a Function Node

Setting up a Function node includes adding it at the appropriate location in the flow and configuring its properties.

Steps to add and configure the node:

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the Function Node

* In the flow builder, click the “**+**” icon on any existing node on the canvas and select **Function** from the pop-up menu. 
* Alternatively, drag the **Function** node from the Assets panel onto the canvas.

### Step 3: Configure the Node

Click the added node to open its properties dialog box. The **General Settings** for the node are displayed.  
<img src="./../images/configure-function-node.png" alt="Configure Function Node" title="Configure Function Node"/>

Enter or select the following information:

* **Node Name**: Enter an appropriate name for the node based on its functionality or purpose.

* Select one of the following options to define and execute a function within the node:

    * **Write Code**: Write a custom code in the built-in editor for the function you want to execute. [Learn more](../types-of-nodes/function-node.md#using-write-code).
    * **Custom Function**: Use a custom function from an imported and deployed script. [Learn more](../types-of-nodes/function-node.md#execute-a-custom-function).

    For the above options, you can define a script in JavaScript or Python with specific logic, static or dynamic input arguments, and output values.
    

### Step 4: Add Connections

Click the **Connections** icon in the left navigation and select **Go to Node** for success and failure conditions.

<img src="./../images/function-node-connections.png" alt="Configure Connection Settings" title="Configure Connection Settings"/></ol>

* **On Success** > **Go to Node**: After the current node is successfully executed, go to a selected node in the flow to execute next. For example, you can go to an AI node to use the processed data from the Function node.
* **On Failure** > **Go to Node**: If the execution of the current node fails, go to an appropriate node having a custom error message configured for this node.

### Step 5: Test the Flow

Finally, test the flow and fix any issues found.

!!! failure "Standard Errors"

    You can see compilation and runtime errors, if any, during the execution of the script/node.

## Define and Execute a Function For The Node

The node provides two options to define and execute its function:

### Using Write Code

To write a custom function code from scratch (define its logic and flow), follow the steps below:

1. Select the **Write Code** option and click the **Expand** icon to open the script editor.
<img src="../images/define-a-script-window.png" alt="define a script window" title="define a script window"/>

2. Follow the steps below to complete the process.

    * Select the required coding format in the script editor.
      <img src="../images/select-coding-format.png" alt="coding format" title="coding format"/>

    * Use [these](../types-of-nodes/function-node.md#syntaxes-for-the-context-input) syntaxes to define the code in JavaScript or Python. You can add [static](../types-of-nodes/function-node.md#define-static-input-variables) or [dynamic](../types-of-nodes/function-node.md#define-dynamic-input-variables) input variables in the code to generate the output.
        <img src="../images/dynamic-context.png" alt="dynamic context" title="dynamic context"/>

    * Click <b>Run</b> in the script editor to test the function.
        <img src="../images/run-script.png" alt="run script" title="run script"/>
    
    The script editor has the following tabs representing the code components:

    <ul><li><b>Context Input</b>: Displays the context input(s) fetched from the <b>Start</b> node or the static inputs in the code.</li>
    <img src="../images/context-ip.png" alt="context input" title="context input"/></ul>
    <ul><li><b>Context Output</b>: Displays the output generated by the script.</li>
    <img src="../images/context-output.png" alt="context output" title="context output"/></ul>
    <ul><li><b>Log</b>: Displays the code execution log, including the output or error(s).</li>
    <img src="../images/logs.png" alt="logs" title="logs"/></ul>

#### Using Static or Dynamic Values in the Script

##### Define Static Input Variables

1. In the script editor, select the coding format from the dropdown.
2. Define the input variables and their values as shown below.
<img src="../images/static-code.png" alt="static code" title="static code"/>

##### Define Dynamic Input Variables

1. In the script editor, select the coding format from the dropdown.
2. Define the input variables and define dynamic values using context variables in the [defined format](../types-of-nodes/function-node.md#context-variables-for-dynamic-inputs), as shown below.

**JavaScript**

<img src="../images/dynamic-inputs-js.png" alt="dynamic inputs js" title="dynamic inputs js"/>

**Python**

<img src="../images/dynamic-inputs-python.png" alt="dynamic inputs py" title="dynamic inputs py"/>

#### Context Variables for Dynamic Inputs

Before you [run the flow](#step-3-run-the-workflow), provide clear instructions for the model to follow by [adding the input variable(s)](#dynamic-inputs) using **context variables**. Context variables allow you to include dynamic values in the script that a node executes to generate its output. The JSON code editor supports both **JavaScript** and **Python** formats.

#### Syntaxes for the Context Input

**JavaScript**

The recommended syntax to fetch dynamic variables using JS in the context input is: `{{context.steps.Start.variable-name}}` 

For example, `context.steps.Start.Q3balance`

**Python**

The recommended syntax to fetch dynamic variables using Python in the context input is: `{{context["steps"]["Start"]["variable-name"]}}` 

For example, `context["steps"]["Start"]["Q3balance"]`

The above syntaxes fetch the variable “*Q3balance*” that you define in the **Start** node. [Learn more](../types-of-nodes/function-node.md#dynamic-inputs).

<!--
### Using Agent Memory in the script

Memory Stores in Agentic Apps enable agents to retain, access, and manipulate information during a session or across sessions. The data stored in memory can be extremely useful for providing context and state persistence within the workflows. The Function node supports accessing agent memory, allowing you to create dynamic, context-aware, and stateful logic directly within the node.

**When to Use**

Some of the common use cases include:

* Retaining and reusing information across different steps in an agent execution.
* Enabling conditional logic based on past user interactions or stored data.
* Sharing data between workflows without explicitly passing it as input parameters.

#### Memory Store Data Format

Data is stored in the memory stores in JSON format and follows the [JSON Schema specification](https://json-schema.org/). Always check the schema of the memory store you are accessing to ensure that your set/get operations match the defined field names and data types.

#### Syntax to Manage Agent Memory in Function Node

1. **Get Content from agent memory**

    Syntax: get_content (memory_store_name, projections Optional)

    * memory_store_name(string): The technical name of the memory store.
    * projections (optional): JSON object specifying the fields to retrieve. If omitted, the entire record is returned.

    Example: To fetch the content of the notes field from a memory store, my-notes, use the following code:

    ```
    STORE_NAME = "my-notes"

    retrieved = memory.get_content( memory_store_name=STORE_NAME, projections= {  note: 1, timestamp: 0  }) 
    ```

2. **Set Contents to Agent Memory**

    Syntax: set_content (memory_store_name, content)

    * memory_store_name(string): The technical name of the memory store.
    * content: Content to be set to the memory store.

	Example: To set a new note to the memory store, my-notes, use the following code:

    ```
	STORE_NAME = "my-notes"

    memory.set_content( memory_store_name=STORE_NAME, content={"note": "Learned about memory services today.", "timestamp": "2025-05-15T10:00:00Z"} )
    ```

3. **Delete Contents of Agent Memory Store**

    Syntax: delete_content (memory_store_name)

    Example: To delete the contents of the memory store, my-notes, use the following code:

    ```
    STORE_NAME = "my-notes"

    memory.delete_content( memory_store_name=STORE_NAME)    
    ```

**Points to Note:**

* Memory stores can be accessed as per their defined scope.
* Use projections to use the memory store efficiently.
* Refer to the schema of the memory store for field names and data types.
* Handle error conditions.

-->

### Execute a Custom Function 

Selecting **Custom Function** invokes a function from an imported and deployed script when running the node flow. The steps to set it up are summarized below:

1. [Step 1: Select a Script](../types-of-nodes/function-node.md#step-1-select-a-script).
2. [Step 2: Select a Function from the Script](../types-of-nodes/function-node.md#step-2-select-a-function-from-the-script).
3. [Step 3: Map the Input Arguments.](../types-of-nodes/function-node.md#step-3-map-input-arguments).
4. [Step 4: Test the Script and Function Configuration](../types-of-nodes/function-node.md#step-4-test-the-script-and-function-configuration).

#### Step 1: Select a Script

To select a custom script deployed in your account, follow the steps below:

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The deployed scripts are listed under <b>Settings</b> > <b>Manage custom scripts</b>. <a href="../../../../../settings/monitoring/monitoring-custom-scripts/" >Learn more</a>.</p>
</div>

1. Select the **Custom function** option for the **Function** node.
2. Select a deployed script from the list to invoke its function by specifying the **Script name**. 
   <img src="../images/select-deployed-script.png" alt="select deployed script" title="select deployed script"/>

   If no scripts are deployed, the following message is displayed.    

   <img src="../images/no-scripts-deployed.png" alt="no scripts deployed" title="no scripts deployed"/>

To deploy a custom script, follow the steps below:

* Click **Deploy custom scripts**.
* The system navigates to the **Settings** > **Manage custom scripts** page.
* Follow the steps mentioned [here](../../../settings/manage-custom-scripts/custom-scripts.md#import-and-deploy-a-custom-script) to deploy a custom script.

   Once an existing or new script is deployed (after a project is imported), it appears in the **Script name** list for the **Function** node.

#### Step 2: Select a Function from the Script

To select a function the node must execute, follow the steps below:

1.  Choose the function the node should invoke from the list for **Function name**.
    <img src="../images/select-function.png" alt="select function" title="select function"/> 

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p><ul><li>All the functions defined in the main file are automatically listed in the dropdown.</li>
    <li>Only one function can be selected at a time.</li>
    <li>Functions from undeployed or draft script versions cannot be selected. Only deployed scripts are supported.</li>
    <li>You can look up a specific function using the <b>search</b> option.</li>
    <img src="../images/search-function.png" alt="search function" title="search function"/></ul></p>
    </div>
 
When you select a function, the **Input Arguments** section appears. Arguments are automatically detected from the script and filled in the UI for you if specified in the function. If not, you must add values for each input parameter defined in the function, as discussed below.

#### Step 3: Map Input Arguments

The next step is to map input arguments of the selected function to static or dynamic values based on the selected data type, as discussed below.

<Note>By default, all arguments passed to the function are currently sent as 'string'. If your function requires other data types, please select the required type from the data type dropdown list in the <b>Input Arguments</b> section. The supported types include <i>String</i>, <i>Number</i>, <i>JSON</i>, and <i>Boolean</i> </Note>

   <img src="../images/data-type-dropdown.png" alt="select data type" title="select data type"/>

**Key Considerations**

* Input parameters of the function in the script’s main file are automatically detected and displayed as fields in the UI.
* You must select the correct data type for the argument from the dropdown, based on its function definition. If the chosen data type does not match, a data mismatch error will occur.
* You can assign either static or dynamic values to the input fields using context variables. These values are validated against the selected data type to detect any mismatches. Use the format mentioned here for dynamic values.

    **Static values**

    Type the values in the text field.

    <img src="../images/static-values.png" alt="static values" title="static values"/>

    **Dynamic Values**

    To map dynamic values, type the context object format and select the appropriate variable(s) from the suggestions, as shown in the example below. 
    <img src="../images/map-dynamic-values.png" alt="dynamic values" title="dynamic values"/>

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p><ul><li>When double curly braces “<code>{{</code>“ are typed in the value field, suggestions for context objects appear.</li>
    <li>These suggestions list all context objects available for the flow in a list.</li>
    <li>You can also search from the list to select.</li>
    <li>The <b>Add</b> button lets you dynamically pass arguments to your function. The coding language must support additional arguments, and these should be defined at the function parameter level. If the function doesn't support additional arguments, the operation may fail.</li></ul></p>
    </div>

* Input argument mapping is required for deployment. You can test the function and workflow, but you cannot deploy until the mapping errors shown below are fixed. 
 <img src="../images/input-validation.png" alt="input validation error" title="input validation error"/>
 
#### Step 4: Test the Script and Function Configuration

To test the custom function configuration, follow these steps:

1. Click the **Test** button in the **General Settings** panel.
   
     <img src="../images/click-test-button.png" alt="click test" title="click test"/>

<ol start="2"><li>In the <b>Input</b> panel, enter values to test the code. Configured values appear by default, but you can edit or reset them as needed.</li>
<li>Click <b>Execute</b> to run the function with the configured input arguments.</li></ol>


### Results Panel

In this example, for a Banking workflow, the `appendCustomerName` function from the `GenerateFullName` script is executed with `firstName` and `lastName` as input arguments. The function combines them to generate the full name. After execution, the following details appear in the Results panel:

**Input**

All the configured input parameters and their values are displayed in this section.

**Edit Input**

To edit inputs for the function and re-execute tests, click **Edit input**.
<img src="../images/edit-input.png" alt="edit input" title="edit input"/>
 
**Output**

From the Output API response, the **result** (of the function code) and **function run ID keys** from the container are shown in this section. The time taken to generate the output is also displayed. 

Click the **Copy** icon to copy the output.

**Success Scenario** 

<img src="../images/success-scenario.png" alt="success scenario" title="success scenario"/>


**Error Scenario**

<img src="../images/error-scenario.png" alt="error scenario" title="error scenario"/>

**Key Considerations**

* Successful API calls return output values from the script.
* The function’s **result key** value from the script is saved to the function node’s output (End node) as <code>{{context.steps.functionnodename.output}}</code>.
* Errors are displayed in the panel if an API request fails. The error logs are also displayed.
<img src="../images/function-error-logs.png" alt="error logs" title="error logs"/>

* The function’s **error/stderr** value from the script is saved to the function node’s output (End node) as <code>{{context.steps.functionnodename.error}}</code>.

**Logs**

The **Logs** section displays success and error logs from function execution to support debugging.

Values under the `stdout` and `stderr` keys are shown here.
<img src="../images/logs-screen.png" alt="logs screen" title="logs screen"/>

After testing the custom function, the final step is to run and test the complete flow. [Learn more](../types-of-nodes/function-node.md#test-the-node-flow).

## Test the Node Flow 

After adding and configuring the node as mentioned [here](../types-of-nodes/function-node.md#add-and-configure-a-function-node), follow the steps below to test the flow:

### Step 1: Add Static or Dynamic Inputs

### Static Inputs

To run the flow for static inputs, follow the steps below:

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>In this case, you do not need to add input variables using the <b>Start</b> node.</p>
</div>

1. Manually enter the required static input arguments and their values in the script editor. [Learn more](../types-of-nodes/function-node.md#define-static-input-variables).
2. Click the **Run Flow** button at the top-right corner of the flow builder.

### Dynamic Inputs

To run the flow for dynamic inputs, follow the steps below:

1. Click the **Input** tab of the **Start** node, and click **Add Input Variable** to configure the input for the flow’s test run. [Learn more](../perform-other-actions-on-the-flow-builder/manage-input-and-output.md#adding-input-variables).

<img src="../images/add-input-variable-button.png" alt="add input variable" title="add input variable"/>

<ol start="2"><li>Add the <b>Name(key)</b> value, select the data type for <b>Type</b>, and provide a description in the <b>Enter input variable</b> window. For example, in the banking flow, to get the sum of two balances, one in Q3 and the other in Q4, you must define two input variables, “<i>Q3balance</i>” and “<i>Q4balance</i>,” as shown below.
<img src="../images/add-input-vars-function-node.png" alt="add input var" title="add input var"/></li>
<li>Click <b>Save</b>.</li></ol>

Once you define the input variables, you must [add the output variable(s)](../types-of-nodes/function-node.md#step-2-add-the-output-variable) and [run the flow](#step-3-run-the-workflow).

<div class="admonition note">
<p class="admonition-title">Important</p>
<p><ul><li>You can use the <b>Start</b> node’s input variables as context variables in the script editor to accept dynamic values and generate the output. To refer to the input variable, follow the syntax mentioned <a href="#syntaxes-for-the-context-input" >here</a>.</li>
<li>Once you run the node’s flow, the result gets stored in the output variable of the <b>Start</b> node. Additionally, this key is mapped to the <b>End</b> node, where you can define its value.</li>
<img src="../images/output-variable-start-node.png" alt="end node key" title="end node key"/></ul></p></div>

### Step 2: Add the Output Variable

To define the output variable, follow the steps below:

<ol><li>Select the <b>Start</b> node and click the <b>Output</b> tab.</li>
<img src="../images/output-tab.png" alt="output tab" title="output tab"/></ol>
<ol start="2"><li>Click <b>Add Output Variable</b>.</li>
<li>Enter the value for <b>Name (key)</b> and select the data type for <b>Type</b>.</li>
<li>Click <b>Save</b>.</li>
<img src="../images/save-output-variable-window.png" alt="save output variable" title="save output variable"/></ol>

### Step 3: Run the Workflow

To run and test the workflow, follow the steps below:

1. Click the **Run Flow** button at the top-right corner of the flow builder.
<img src="../images/run-flow-function-node.png" alt="run flow" title="run flow"/>  

2. (Optional) Provide input to test the flow if you have configured it in the **Start** node. Otherwise, go directly to the next step.
3. Click **Generate Output**.

    <img src="../images/generate-output-function-node.png" alt="generate output" title="generate output"/>  


The **Debug** window generates the flow log and results for the given input(s), as shown below. [Learn more](../perform-other-actions-on-the-flow-builder/run-the-flow.md) about running the workflow. 

<img src="../images/debug-log-function-node.png" alt="debug log" title="debug log"/>  

## Access the Function Node’s Output

The node’s output is stored in a context variable. You can access the variable using the syntax: 
`{{context.steps.FunctionNodeName.output}`

For example, <code><em>context.steps.Bankingnode.output</em></code>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>AI for Process can automatically recognize variables and outputs. To do so, type "<code>context.steps.</code>" and you will see the available variables, nodes, and node outputs.</p>
</div>

## Import, Export, and Share a Workflow with Function Node

**Import a Workflow**

When you import a workflow, a *.zip* package is imported from your local system with the flow definition, app definition, and environment variables JSON files from another environment. [Learn more](../../import-a-workflow.md).

If the workflow contains a Function node, its configuration is automatically fetched and populated in the new environment (workflows automation) where the workflow is being imported.

### Script Linking Behavior

* If the same script is already deployed in the new environment, the Function node is automatically linked (auto-linking). 

* If the script isn't deployed, validation errors are shown to help identify missing or unresolved scripts.

   <img src="../images/import-validation.png" alt="import validation" title="import validation"/> 

**Export a Workflow**

When you export a workflow that contains a Function node, its configuration should be available in the `callflow.json` file within the exported package. [Learn more](../../export-a-workflow.md).

The following confirmation window is displayed before the export begins.

<img src="../images/export-checklist.png" alt="debug log" title="debug log"/> 

Do one of the following:

* If you’re unsure, click **Let me check**.
* If all necessary components such as AI models, linked workflows, and custom scripts or functions are already in place, click **Yes, I will take care**.

**Share a workflow**

When you share a workflow with another user within the same account, all configurations of the Function node are retained and available to the recipient as well.

## Related Links

* **Supported Libraries** - [Learn more](../types-of-nodes/script-libraries.md) about the list of supported libraries in the script editor of the Function node.

<!-- Documented in /ai-for-process/nodes.mdx -->
# Human Node – Pause for Review and Approval

The Human Node introduces a human-in-the-loop capability within automation workflows. It allows workflows to pause and incorporate human judgment into automated processes. Designated users can review, approve, or provide input before the workflow continues, ensuring critical steps are validated, decisions are accurate, and compliance requirements are met. This capability is especially useful when certain decisions cannot be automated and require manual validation, oversight, or confirmation.

## Key Capabilities

* Customizable Input Requests – Send approval requests with fields tailored to collect the exact information or decision required from reviewers.
* Timeout Handling – Define how the workflow behaves if no response is received within the specified time (for example, *Terminate* or *Skip and Continue*).
* Error Handling – Configure what happens if the request fails to send or an unexpected error occurs during execution.
* Inbox Integration – All Human-in-the-Loop (HITL) approval requests are routed automatically to the reviewers’ Inbox (Personal or Group tab) for action and tracking. [Learn more](../../inbox.md).

## Common Use Cases

* Approval Workflows – Route requests for manager approval (e.g., expenses, leave, procurement).
* Quality Assurance – Insert a human checkpoint to validate AI-generated or automated outputs before publishing.
* Compliance Checks – Require manual review for sensitive or regulated steps.
* Exception Handling – Escalate unusual or edge cases to a reviewer for decision-making.

## How it Works

The Human Node serves as a flexible pause point within an automated workflow, enabling seamless integration of human decisions. When the workflow reaches this node, it sends an approval request to the assigned user’s Inbox.

The execution behavior depends on the workflow’s endpoint configuration:

* In Sync mode,  the workflow starts, sends the request to the human, waits for the human’s input, and generates the output — all within the timeout set at the endpoint.
* In Async mode,  the workflow sends an immediate acknowledgement and continues execution. The Human node automatically delivers the approval request to the configured reviewer through the platform’s Inbox. The workflow continues once the reviewer responds or the configured timeout is reached.

Built-in mechanisms handle timeouts, duplicate or late responses, and delivery failures to ensure the workflow progresses as configured. This provides visibility and traceability into decisions through the Debug Panel without disrupting the overall flow.

In this document, you’ll learn how to add a Human node to your canvas, configure approval requests for reviewers, define input fields, and customize timeout and error-handling behavior within the workflow.

## Add and Configure a Human Node

The Human node introduces a manual review checkpoint within a workflow. When the workflow reaches this node, it sends an approval request to the designated reviewers and then resumes execution based on the response/timeout/failure condition.

**Before you begin**

Open your workflow and add the Human node to the canvas. [Learn more about adding nodes](../manage-flow-nodes.md#add-nodes).

**Steps to configure a Human node**:

Click the Human node to open its properties dialog box. You can rename the node (for example, ManagerApproval, QualityCheck) or add a description to provide context. 

### 1. Select Request Destination

The **Send & wait for response** field specifies where the request will be sent for human review.

* Select **Account Inbox** as the destination.
* Choose one of the following options:
    * **Everyone:** Send the approval request to all workspace members.
    * **Specific Users:** Restrict the request to selected users. Enter their email addresses in the **Select User (email)** field. Only members within the current workspace are suggested.
* When the flow execution reaches the Human node, an approval request is automatically sent to the reviewer’s **Inbox**.

For details on how to view, assign, and act on approval requests, see **[Inbox](../../inbox.md)**. 

<img src="../images/workflow_everyone.png" alt="Human Node" title="Human Node"/>

### 2. Configure the Review Note

Define how the request will appear to the reviewer:

* **Subject line** - Email subject or message title.
* **Message body** - Instructions or context for the reviewer. The context is resolved at run-time.

<img src="../images/workflow_reviewnote.png" alt="Human Node" title="Human Node"/>

### 3. Configure Timeout Behavior

In the Wait for response field, choose how long the node should wait for a response:

* **No timeout** – Workflow waits indefinitely until the reviewer responds.
* **Set timeout** – Default 120 seconds (you can customize the value and unit: seconds, minutes, hours, days).

<img src="../images/workflow_wait for response.png" alt="Human Node" title="Human Node"/>

### 4. Define Node Outcomes

In the **Add Connection** tab, specify how the workflow proceeds after the review step ends.

The Human node supports multiple outcome paths that determine how the workflow proceeds after human input. These paths can now be configured based on reviewer decisions or system conditions.

**Outcome Paths and Behavior**


<table>
  <tr>
   <td><strong>Path</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Trigger Condition</strong>
   </td>
  </tr>
  <tr>
   <td><strong>On Approval</strong>
   </td>
   <td>Workflow continues to the next configured node when the reviewer accepts or approves the request.
<p>
In the <strong>On Approve</strong> field, select the next node in the flow.
   </td>
   <td>The reviewer selects “Accept” or equivalent approval value.
   </td>
  </tr>
  <tr>
   <td><strong>On Decline</strong>
   </td>
   <td>Workflow follows a defined rejection or alternate path when the reviewer declines or rejects the request.
<p>
In the <strong>On Decline</strong> field, select the next node in the flow.
   </td>
   <td>The reviewer selects “Decline” or equivalent rejection value.
   </td>
  </tr>
  <tr>
   <td><strong>On Timeout</strong>
   </td>
   <td>Workflow diverts to the configured timeout path if no response is received within the defined wait period.
<p>
Select one of the options:
<p>
<strong>Terminate flow</strong> (default): Flow ends via the attached End node.
<strong>Skip</strong>: Continue with <code>null/NA</code> output and move to the next configured node.
   </td>
   <td>A timeout occurs before a human response.
   </td>
  </tr>
  <tr>
   <td><strong>On Failure</strong>
   </td>
   <td>Workflow transitions to a distinct error-handling path when an error occurs (for example, a network issue or a delivery failure).
<p>
Select a fallback node to continue execution.
Supports parallel branching.
   </td>
   <td>Request delivery or system error.
   </td>
  </tr>
</table>

Once configured, the Human node pauses workflow execution at the defined step, sends the approval request to the reviewer’s Inbox, and resumes automatically based on the reviewer’s decision or timeout configuration. [Learn more](../../inbox.md)

## Testing the Flow with Inbox Approvals

Once you configure a Human node in a workflow, you can test how approval requests appear and behave in the Inbox during runtime. This validation step ensures that both the workflow logic and Human-in-the-Loop (HITL) interactions work as expected.

**Step 1: Run the Flow**

1. In the Flow Builder, click **Run Flow** to start execution.
2. The **Debug Panel** opens automatically and shows each node’s runtime behavior.
3. When the workflow reaches a Human node, an approval request is automatically generated and sent to the configured reviewers’ Inbox:
    * **Personal tab** – For requests assigned to yourself.
    * **Group tab** – For requests assigned to a set of users or the whole workspace. If the request is sent to a group, users must first assign it to themselves from the **Group** tab before taking action to approve or reject.

[Learn more about Inbox.](../../inbox.md)

**Step 2: Review and Act on the Request**

1. In the platform’s top navigation bar, open the **Inbox**.
2. Locate the new request under the **Pending for Approval** filter.
3. Open the request to view its **subject**, **description**, and **message**.
4. Review the provided details, then click **Approve** or **Decline**. You can optionally add comments before submitting your decision.

Once submitted:

* The request is removed from the pending list.
* Its status updates automatically in both the **Inbox** and **Workflow Monitor**.
* If the request was part of a group, it is marked as completed for all group members. 

**Step 3: Verify Results in Workflow Monitor**

1. Open **Workflow Monitor** from the left navigation menu.
2. Locate your test workflow run.
3. Click the run entry to open detailed execution logs.
4. Confirm that:
    * The Human node shows the correct approval status (Approved, Declined, or Expired).
    * The flow continues along the expected path (for example, Success, Timeout, or Failure).

This confirms that the Human node and Inbox integration are configured correctly.

**Step 4: Validate Reviewer Responses in Context Variables**

When the reviewer responds, the Human node captures the input and makes it available for downstream nodes in the workflow.

You can access this data using context variables:

 `{{context.steps.<NodeName>.output}}`
`

## Notes

* **Inside Loops** – If the Human node is inside a loop, the loop will not move to the next iteration until a human response is received. This ensures each cycle gets explicit approval/input.
* **In Parallel Branches** – When used in parallel branches, the branch merge will wait for the Human node to complete. This prevents the workflow from merging prematurely.


<!-- Documented in /ai-for-process/nodes.mdx -->
# Image to Text Node – Streamline Document Processing with OCR Automation

The **Image to Text** node is a versatile multimodal component that enables you to extract information from images and generate text-based outputs within your automation flows. By processing uploaded images alongside user-defined prompts, the node can describe visuals, answer image-related questions, or extract embedded text. It leverages external LLM models such as OpenAI and Anthropic for advanced image interpretation and text generation, making it ideal for automating workflows that involve visual content analysis.

## Key Capabilities

* **Image Understanding with Prompts**: Generate detailed descriptions, perform accurate OCR, or answer image-specific questions using natural language prompts.

* **OCR and Text Extraction**: Automatically extract embedded text from images, including scanned documents, screenshots, and photos.

* **Multi-Model Support**: Leverage external LLM models like OpenAI and Anthropic for flexible, high-quality image interpretation.


## Common Use Cases

* **Document Digitization**: Extract text from scanned documents, receipts, or invoices for archiving or processing. 

* **Image-Based Content Moderation**: Detect and review text content embedded in images to ensure compliance with relevant regulations. 

* **Multilingual OCR**: Convert printed or handwritten text from images into machine-readable text across multiple languages. 

* **Knowledge Extraction**: Use natural language prompts to pull relevant information from diagrams, posters, or infographics and answer questions based on their content.

## Example Use Case

A sample use case involves an insurance company evaluating vehicle damage to streamline the claim assessment process. The **Image to Text** node analyzes the uploaded image of the damaged vehicle using a natural language prompt like "*Analyze the uploaded image of the vehicle and identify which parts show visible damage. Choose the affected components from the following list: {{context.parts_list}}*.." It identifies impacted parts and estimates repair costs, helping automate claim verification and compensation decisions. 

## How it Works

The **Image to Text** node integrates smoothly into your workflows by accepting image file URLs and generating descriptive or structured text output for downstream nodes. You can configure the node by selecting a supported model and providing a valid image URL in PNG, JPEG, or JPG format. Use the System Prompt to define the model’s role (for example, insurance evaluator), and the Prompt to specify the task, such as answering a question or extracting details. Prompts support dynamic context variables, enabling flexible, data-driven automation scenarios.

<img src="../images/how-image-to-text-works.png" alt="how image to text works" title="how image to text works"/>

In this document, you will learn how to add the node to your flows, configure it with supported models, define system and user prompts, handle image inputs via URL, and pass the generated responses to downstream nodes for further processing.

## Add and Configure an Image to Text Node

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Before proceeding, you must add an external LLM to your account.</p>
</div>

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.
  <img src="../images/access-workflows.png" alt="access workflows" title="access workflows"/>

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the Node

* Click the "**+**" icon for **Image to Text** under **AI** in the **Assets** panel. Alternatively, drag the node from the panel onto the canvas. You can also click **AI** in the pop-up menu and click **Image to text**.
  <img src="../images/access-image-to-text-node.png" alt="access node" title="access node"/>

### Step 3: Configure the Node

* Click the added node to open its properties dialog box. The **General Settings** for the node are displayed.
  <img src="../images/properties-panel-open.png" alt="properties panel" title="properties panel"/>

* Enter or select the following **General Settings**:

     * <b>Node Name</b>: Enter an appropriate name for the node. For example, “<i>InsuranceEvaluation</i>.”
     * Select a model from the list of configured models.

       <div class="admonition note">
       <p class="admonition-title">Note</p>
       <p>Only the <b>OpenAI (gpt-4o and gpt-4o-mini)</b> and <b>Anthropic (Claude Sonnet Vision)</b> models are supported.</p>
       </div>

    * Provide the <code>File URL</code> of the public repository where your image file exists or is returned by the Upload File API at the workflow endpoint.

      <div class="admonition note">
      <p class="admonition-title">Key Considerations</p>
      <p><ul><li>The user can provide only one file URL at a time for processing.</li>
      <li>The file source url must be valid for the node to function properly.</li>
      <li>Only PNG, JPEG, and JPG file formats are supported.</li>
      <li>Except for image input handling, the OCR node functions like the existing AI node.</li>
      <li>Sending images and related settings are handled by the File Upload API.</li>
      <li>Image input preprocessing is supported in the following formats:</li>
     <ul><li>Binary, base64-encoded for Anthropic models.</li>
     <li>Both binary, base64-encoded, and image URLs for OpenAI models.</li></ul></p></div>

* <b>System Prompt</b>: System prompts guide the model’s behavior and response style. Enter a system prompt to define its role for your use case. For example: "<i>You are a vehicle insurance assistant that analyzes uploaded vehicle images to assess damage and estimate repair costs in USD</i>."
* <b>Prompt</b>: User prompts define specific questions or requests for the model. Provide clear instructions for the model to follow, using context variables for dynamic inputs in the syntax: <code>{{context.variable_name}}</code>. <b>Example:</b> "<i>Check the image provided for the damaged parts in the car and select what parts are affected from the list below - <code>{{context.parts_list}}</code></i>."</li>
         <img src="../images/configuration-set.png" alt="configurations tab" title="configurations tab"/>

* **Response JSON schema**:  Define a JSON schema for structured responses. This step is optional and depends on the selected model.   
      
    You can define a JSON schema to structure the model's response if the chosen model supports the response format. By default, if no schema is provided, the model will respond with plain text.
       
    Supported JSON schema types include: String, Boolean, Number, Integer, Object, Array, Enum, and anyOf. Ensure the schema follows the standard outlined here: [Defining JSON schema](../perform-other-actions-on-the-flow-builder/defining-json.md). 
    
    If the schema is invalid or mismatched, errors will be logged, and you must resolve them before proceeding.  
    
    For more information about how the model parses the response and separates keys from the content body, see: [Structured Response Parsing and Context Sharing in Workflows](../perform-other-actions-on-the-flow-builder/model_response_parsing.md).

* Click the <b>Connections</b> icon and select the <b>Go to Node</b> for success and failure conditions.
   
     <img src="../images/connections-configuration.png" alt="connections tab" title="connections tab"/>

    * <b>On Success</b> > <b>Go to Node</b>: After the current node is successfully executed, go to a selected node in the flow to execute next, such as an AI node, Function node, Condition node, API node, or End node.
    * <b>On Failure</b> > <b>Go to Node</b>: If the execution of the current node fails, go to the End node to display any custom error message from the <b>Image to Text</b> node.
    
* Finally, test the flow and fix any issues found. Click the <b>Run Flow</b> button at the top-right corner of the flow builder and follow the onscreen instructions.
<img src="../images/click-run.png" alt="click run" title="click run"/>

!!! Failure "Standard Error"

    When the Model is not selected, the prompt details are not provided, or both, the following error message is displayed: “Proper data needs to be provided in the LLM node”.
    


<!-- Documented in /ai-for-process/nodes.mdx -->
# Integration Node – Enhance Workflows with External Services

The **Integration Node** is a powerful and flexible component that acts as a run-time engine for securely connecting to third-party services, enabling seamless data exchange and automation through configured actions and auto-generated JSON. It leverages pre-configured connections and authentication methods to serve as a bridge between your workflow and external platforms, supporting actions such as exporting data from a site or fetching broken back links within your automation without any coding effort.

## Key Capabilities

* **No-Code Service Integration**: Embed prebuilt third-party services or actions into your automation flow without writing any code.
* **Secure Connections**: Leverage tested and authenticated connections to ensure secure data exchange with external services.
* **Flexible Configuration**: Customize the node directly on the Workflow canvas and seamlessly connect it with other nodes to fit your automation needs.


## Common Use Cases

* **CRM & Marketing Automation**: Connect CRM systems with marketing platforms to trigger personalized campaigns based on customer data and behavior, such as automatically launching email sequences when a lead is captured.
* **Workflow Automation**: Automate tasks across apps, such as creating a project task when a support ticket is raised.
* **Payment Gateways**: Securely process online transactions through integrated third-party payment providers.
* **SaaS Integrations**: Enable seamless connections between SaaS workflows (for example, CRM, email marketing, e-commerce) to streamline daily workflows.


## Example Use Case

Let’s consider an example where the **Integration Node** can be used to automate the tracking of broken back links for a website. The workflow begins with a manual input of the target URL via the Start node. The Integration Node connects to a third-party SEO workflow (for example, Ahrefs) and calls an API to fetch back link data filtered for broken links.

Using pre-configured authentication, the request returns a structured response with broken URLs, referring pages, and status codes. This data is then passed to the next node for formatting or further use.

Results can be emailed, mapped to a dashboard, or used to trigger follow-up actions—streamlining SEO monitoring, reducing manual efforts, and enabling quick fixes.

## How It Works

The **Integration Node** integrates seamlessly into your workflows, using configured connections and authentication mechanisms to securely interact with external services. It accepts inputs from previous nodes, executes third-party actions based on the selected service and parameters, and passes results to subsequent nodes. You can configure actions through the UI, use context variables for dynamic inputs, and customize prebuilt JSON code, making it ideal for automating a wide range of integration scenarios.

<img src="../images/how-integration-node-works.png" alt="how integration node works" title="how integration node works"/>

In this document, you will learn how to add Integration Nodes to your workflows, configure them with connections and action parameters, handle inputs and outputs, and test your implementations.

## Prerequisites

* You must add at least one service provider connection before configuring the node by clicking <b>+ Add Connection</b>. The system redirects to <b>Settings</b> -> <b>Integrations</b> page. Follow the steps [here](../../../settings/integrations/about-integrations.md#add-a-connection-to-set-up-integration) to complete the process.
* Always test the selected connection in the <b>Settings</b> console to ensure successful integration. [Learn more](../../../settings/integrations/about-integrations.md#test-connection).

## Add and Configure an Integration Node

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.
  <img src="../images/access-workflows.png" alt="access workflows" title="access workflows"/>

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the Node

* Click **Integration** > **+ New Integration** in the **Assets** panel. Alternatively, drag the node from the panel onto the canvas. You can also click **Integration** in the pop-up menu.
  <img src="../images/add-int-node.png" alt="add node" title="add node"/>

### Step 3: Configure the Node

* In the **Integration** window, either search for the required service or select from the listed options. [See](../../../settings/integrations/about-integrations.md#supported-integrations) the list of supported pre-built integrations.
   <img src="../images/integrations-list.png" alt="integrations list" title="integrations list"/>

* Click the added node to open its properties dialog box. The **General Settings** for the node are displayed.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>The node uses the service provider’s name by default. You can rename the node if needed.</p>
    </div>

* Enter or select inputs for the following fields:
     * <b>Node Name</b>: Enter an appropriate name for the node. For example, “<i>Ahrefslinkbuilder</i>” (Only letters and numbers are allowed).
     * <b>Connection Name</b>: Select a connection from the listed options. The list includes all the active connections you have added and configured under <b>Settings</b> > <b>Integrations</b>.
      <img src="../images/select-connection-name.png" alt="select connection" title="select connection"/>

* Click <b>Add Action</b> to add and configure the required actions or tasks from the service provider.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>Only one action can be added and configured at a time.</p>
    </div>

    <img src="../images/add-action-click.png" alt="click add action" title="click add action"/>  

* In the <b>Add Action</b> window, select the required action to be linked to the node.
   <img src="../images/add-action.png" alt="add action" title="add action"/>

* In the action settings window, add inputs for the action fields and click <b>Save</b>. These parameters define how the action is executed for the connection.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>The action parameters vary depending on the specific action and provider. See the tooltip for more information.</p></div>

    <img src="../images/action-parameters.png" alt="action parameters" title="action parameters"/>
     
* The added action is listed in the <b>General Properties</b> window of the node. This action is applied to all the connections available for the provider.
   <img src="../images/integration-gen-properties.png" alt="gen properties" title="gen properties"/>

* Click the <b>Connections</b> icon and select <b>Go to Node</b> for success and failure conditions.
     * <b>On Success</b> > <b>Go to Node</b>: After the current node is successfully executed, go to a selected node in the flow to execute next, such as an AI node, Function node, Condition node, API node, or End node.
     * <b>On Failure</b> > <b>Go to Node</b>: If the execution of the current node fails, go to the End node to display any custom error message from the AI node.
     <img src="../images/success-failure-flow.png" alt="node flow" title="node flow"/>

    The node connects to the service using the selected connection and performs the configured action when the flow is run.

    The **next step** is to configure and test the flow for the node. [Learn more](./integration-node.md#add-and-configure-an-integration-node).

## Manage Actions

You can either **change** or **edit** an action for an integration. However, you **cannot delete** a configured action directly. To remove an action, you must add a **new node** and configure it with a different action.

### Change Action

To configure a different action, click the **Change Action** button.
<img src="../images/change-action.png" alt="change action" title="change action"/>

Then, select another action in the **Change Action** window.     

<img src="../images/select-action-change.png" alt="select action" title="select action"/>

<div class="admonition warning">
<p class="admonition-title">Caution</p>
<p>If you change or replace the existing action, any configuration changes made to the previous action will be lost.</p>
</div>

The new action replaces the existing one for the connection. Please configure the action parameters for this action to work properly.

### Edit Action

To modify the parameters for an action, follow the steps below:

<ol><li>Click the <b>Edit</b> icon.</li>
<img src="../images/edit-action.png" alt="edit action" title="edit action"/></ol>
<ol start="2"><li>Modify the required values and click <b>Save</b>.</li></ol>

### View the JSON Code

In addition to defining action parameters in the configuration window, you can view the related JSON code.

To access the code, enable the **JSON switch** at the top right of the action configuration window. 

<img src="../images/enable-json.png" alt="enable json" title="enable json"/>

This opens a **code viewer** where you can view the JSON that defines the current action and copy the code. The Integration node executes this action code for the connection when you run the flow. 

<img src="../images/json-code-viewer.png" alt="json code viewer" title="json code viewer"/>

## Test the Flow for the Node

After adding and configuring the node as mentioned [here](./integration-node.md#add-and-configure-an-integration-node), follow the steps below to test the flow.


### Step 1: (Optional) Add Input Variable(s)

* Click the <b>Input</b> tab of the <b>Start</b> node, and click <b>Add Input Variable</b> to configure the input for the flow’s test run. <a href="../../perform-other-actions-on-the-flow-builder/manage-input-and-output/#adding-input-variables" >Learn more</a>
    
    <img src="../images/start-node-io.png" alt="start node io" title="start node io"/>

* In the <b>Enter input variable</b> window, select the appropriate data type for the <b>Type</b> field to define the input variable.
* Click <b>Save</b>.

Add all the required input variables to run the flow in the **Input** section of the **Start** node. 

<img src="../images/add-input-var-integration.png" alt="add input variable" title="add input variable"/>

### Step 2: Add Output Variable(s)

This step is required because the **Start node** must have at least one **output parameter** linked to the node.

* Click the <b>Start</b> node and select the <b>Output</b> tab.
* Click <b>Add Output Variable</b>.
  
    <img src="../images/add-op-var.png" alt="add output variable" title="add output variable"/>

* Enter the value for <b>Name (key)</b> and select <i>String</i> for <b>Type</b>.
* Click <b>Save</b>. <a href="#access-the-nodes-output" >Learn more</a> about accessing the node’s output.
<img src="../images/output-variable.png" alt="op variable" title="op variable"/>

### Step 3: Run the Flow

<div class="admonition note">
<p class="admonition-title">Important</p>
<p>Before running the flow, resolve the workflow errors that appear when you click the <b>Warning</b> icon.</p>
</div>

  <img src="../images/check-errors.png" alt="errors" title="errors"/>

To run and test the flow, follow the steps below:

* Click the **Run Flow** button at the top-right corner of the flow builder. 
    <img src="../images/click-run-flow.png" alt="click run flow" title="click run flow"/>

* (Optional) Add the value for the **Input Variable** if you have configured it to test the flow. Otherwise, go directly to the next step.
* Click **Generate Output**.
   
   <img src="../images/click-generate-op.png" alt="click settings" title="click settings"/>
 

The **Debug** window generates the flow log and output from the inputs provided. [Learn more](../perform-other-actions-on-the-flow-builder/run-the-flow.md) about running the workflow.

## Access the Node’s Output

The node’s output is stored in a context variable. You can access the variable using the following syntax: `{{context.steps.IntegrationNodeName.output}}`

<div class="admonition note">
<p class="admonition-title">Important</p>
<p>AI for Process can automatically recognize variables and outputs. To do so, type "<code>context.steps.</code>" and you will see available variables and nodes, including the nodes' outputs.</p>
</div>

