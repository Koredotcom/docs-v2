# Function Node - Empower Workflows with Custom Code

The Function node is a powerful component that enables you to extend your automation flows with custom business logic and data processing capabilities. By embedding JavaScript or Python code directly into your tool flows, you can manipulate variables in ways that preset nodes can't achieve. Configuration options provide you the ability to specify input and output variables and write corresponding execution code.

## Key Capabilities

* **Custom Script Execution**: Write and execute JavaScript or Python code inline or leverage pre-deployed custom functions.
* **Dynamic Data Processing**: Transform, validate, and manipulate data flowing through your automation.
* **Reusable Functions**: Import and use pre-built functions from your organization's script library.
* **Access Agent Memory**: Leverage Agent Memory to perform context-aware processing.


## Common Use Cases

* **Data Transformation**: Convert data formats, parse JSON/XML, or restructure information between nodes.
* **Business Logic Implementation**: Apply custom validation rules, calculations, or decision-making logic.
* **Text Processing**: Perform string manipulation, regex operations, or natural language processing.
* **Mathematical Operations**: Execute complex calculations or statistical analysis on your data.


## How It Works

The Function Node integrates seamlessly into your tool flows, accepting inputs from previous nodes and passing processed outputs to subsequent nodes. You can either write code directly in the built-in editor or reference custom functions from deployed scripts. The node supports both static and dynamic inputs through context variables, making it adaptable to various automation scenarios.

<img src="./../images/function_node_new.png" alt="Function Node" title="Function Node" style="border: 1px solid gray; zoom:40%;"/>

In this document, you will learn how to add Function nodes to your flows, configure them with custom code or functions, handle inputs and outputs, and test your implementations.


## Add and Configure a Function Node

Setting up a Function node includes adding it at the appropriate location in the flow and configuring its properties.

Steps to add and configure the node:

### Step 1: Open Flow Builder

* Log into the the Platform and select **Tools** under modules.
* Select your tool and select **Go to Flow**.

### Step 2: Add the Function Node

* In the flow builder, click the “**+**” icon on any existing node on the canvas and select **Function** from the pop-up menu. 
* Alternatively, drag the **Function** node from the Assets panel onto the canvas.

### Step 3: Configure the Node

Click the added node to open its properties dialog box. The **General Settings** for the node are displayed.  
<img src="./../images/configure-function-node.png" alt="Configure Function Node" title="Configure Function Node" style="border: 1px solid gray; zoom:80%;"/>

Enter or select the following information:

* **Node Name**: Enter an appropriate name for the node based on its functionality or purpose.

* Select one of the following options to define and execute a function within the node:

    * **Write Code**: Write a custom code in the built-in editor for the function you want to execute. [Learn more](../types-of-nodes/function-node.md#using-write-code).
    * **Custom Function**: Use a custom function from an imported and deployed script. [Learn more](../types-of-nodes/function-node.md#execute-a-custom-function).

    For the above options, you can define a script in JavaScript or Python with specific logic, static or dynamic input arguments, and output values.
    

### Step 4: Add Connections

Click the **Connections** icon in the left navigation and select **Go to Node** for success and failure conditions.

<img src="./../images/function-node-connections.png" alt="Configure Connection Settings" title="Configure Connection Settings" style="border: 1px solid gray; zoom:80%;"/></ol>

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
<img src="../images/define-a-script-window.png" alt="define a script window" title="define a script window" style="border: 1px solid gray; zoom:80%;"/>

2. Follow the steps below to complete the process.

    * Select the required coding format in the script editor.
      <img src="../images/select-coding-format.png" alt="coding format" title="coding format" style="border: 1px solid gray; zoom:80%;"/>

    * Use [these](../types-of-nodes/function-node.md#syntaxes-for-the-context-input) syntaxes to define the code in JavaScript or Python. You can add [static](../types-of-nodes/function-node.md#define-static-input-variables) or [dynamic](../types-of-nodes/function-node.md#define-dynamic-input-variables) input variables in the code to generate the output.
        <img src="../images/dynamic-context.png" alt="dynamic context" title="dynamic context" style="border: 1px solid gray; zoom:80%;"/>

    * Click <b>Run</b> in the script editor to test the function.
        <img src="../images/run-script.png" alt="run script" title="run script" style="border: 1px solid gray; zoom:80%;"/>
    
    The script editor has the following tabs representing the code components:

    <ul><li><b>Context Input</b>: Displays the context input(s) fetched from the <b>Start</b> node or the static inputs in the code.</li>
    <img src="../images/context-ip.png" alt="context input" title="context input" style="border: 1px solid gray; zoom:80%;"/></ul>
    <ul><li><b>Context Output</b>: Displays the output generated by the script.</li>
    <img src="../images/context-output.png" alt="context output" title="context output" style="border: 1px solid gray; zoom:80%;"/></ul>
    <ul><li><b>Log</b>: Displays the code execution log, including the output or error(s).</li>
    <img src="../images/logs.png" alt="logs" title="logs" style="border: 1px solid gray; zoom:80%;"/></ul>

#### Using Static or Dynamic Values in the Script

##### Define Static Input Variables

1. In the script editor, select the coding format from the dropdown.
2. Define the input variables and their values as shown below.
<img src="../images/static-code.png" alt="static code" title="static code" style="border: 1px solid gray; zoom:75%;"/>

##### Define Dynamic Input Variables

1. In the script editor, select the coding format from the dropdown.
2. Define the input variables and define dynamic values using context variables in the [defined format](../types-of-nodes/function-node.md#context-variables-for-dynamic-inputs), as shown below.

**JavaScript**

<img src="../images/dynamic-inputs-js.png" alt="dynamic inputs js" title="dynamic inputs js" style="border: 1px solid gray; zoom:75%;"/>

**Python**

<img src="../images/dynamic-inputs-python.png" alt="dynamic inputs py" title="dynamic inputs py" style="border: 1px solid gray; zoom:75%;"/>

#### Context Variables for Dynamic Inputs

Before you [run the flow](../types-of-nodes/function-node.md#step-3-run-the-tool-flow), provide clear instructions for the model to follow by [adding the input variable(s)](../types-of-nodes/function-node.md#dynamic-inputs) using **context variables**. Context variables allow you to include dynamic values in the script that a node executes to generate its output. The JSON code editor supports both **JavaScript** and **Python** formats.

#### Syntaxes for the Context Input

**JavaScript**

The recommended syntax to fetch dynamic variables using JS in the context input is: `{{context.steps.Start.variable-name}}` 

For example, `context.steps.Start.Q3balance`

**Python**

The recommended syntax to fetch dynamic variables using Python in the context input is: `{{context["steps"]["Start"]["variable-name"]}}` 

For example, `context["steps"]["Start"]["Q3balance"]`

The above syntaxes fetch the variable “*Q3balance*” that you define in the **Start** node. [Learn more](../types-of-nodes/function-node.md#dynamic-inputs).



### Using Agent Memory in the script

Memory Stores in Agentic Apps enable agents to retain, access, and manipulate information during a session or across sessions. The data stored in memory can be extremely useful for providing context and state persistence within the tools. The Function node supports accessing agent memory, allowing you to create dynamic, context-aware, and stateful logic directly within the node.

**When to Use**

Some of the common use cases include:

* Retaining and reusing information across different steps in an agent execution.
* Enabling conditional logic based on past user interactions or stored data.
* Sharing data between tools without explicitly passing it as input parameters.

[Learn More about Memory Stores.](../../../agentic-apps/memory-stores.md)

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
<p>The deployed scripts are listed under <b>Settings</b> > <b>Manage custom scripts</b>. <a href="../../../../../settings/monitoring/monitoring-custom-scripts/" target="_blank">Learn more</a>.</p>
</div>

1. Select the **Custom function** option for the **Function** node.
2. Select a deployed script from the list to invoke its function by specifying the **Script name**. 
   <img src="../images/select-deployed-script.png" alt="select deployed script" title="select deployed script" style="border: 1px solid gray; zoom:75%;"/>

   If no scripts are deployed, the following message is displayed.    

   <img src="../images/no-scripts-deployed.png" alt="no scripts deployed" title="no scripts deployed" style="border: 1px solid gray; zoom:75%;"/>

To deploy a custom script, follow the steps below:

* Click **Deploy custom scripts**.
* The system navigates to the **Settings** > **Manage custom scripts** page.
* Follow the steps mentioned [here](../../../../settings/manage-custom-scripts/custom-scripts.md#import-and-deploy-a-custom-script) to deploy a custom script.

   Once an existing or new script is deployed (after a project is imported), it appears in the **Script name** list for the **Function** node.

#### Step 2: Select a Function from the Script

To select a function the node must execute, follow the steps below:

1.  Choose the function the node should invoke from the list for **Function name**.
    <img src="../images/select-function.png" alt="select function" title="select function" style="border: 1px solid gray; zoom:75%;"/> 

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p><ul><li>All the functions defined in the main file are automatically listed in the dropdown.</li>
    <li>Only one function can be selected at a time.</li>
    <li>Functions from undeployed or draft script versions cannot be selected. Only deployed scripts are supported.</li>
    <li>You can look up a specific function using the <b>search</b> option.</li>
    <img src="../images/search-function.png" alt="search function" title="search function" style="border: 1px solid gray; zoom:75%;"/></ul></p>
    </div>
 
 
When you select a function, the **Input Arguments** section appears. Arguments are automatically detected from the script and filled in the UI for you if specified in the function. If not, you must add values for each input parameter defined in the function, as discussed below.

#### Step 3: Map Input Arguments

The next step is to map input arguments of the selected function to static or dynamic values based on the selected data type, as discussed below.

<div class="admonition note">
<p class="admonition-title">Important</p>
<p>By default, all arguments passed to the function are currently sent as 'string'. If your function requires other data types, please select the required type from the data type dropdown list in the <b>Input Arguments</b> section. The supported types include <i>String</i>, <i>Number</i>, <i>JSON</i>, and <i>Boolean</i>.</p>
</div>

   <img src="../images/data-type-dropdown.png" alt="select data type" title="select data type" style="border: 1px solid gray; zoom:75%;"/>

**Key Considerations**

* Input parameters of the function in the script’s main file are automatically detected and displayed as fields in the UI.
* You must select the correct data type for the argument from the dropdown, based on its function definition. If the chosen data type does not match, a data mismatch error will occur.
* You can assign either static or dynamic values to the input fields using context variables. These values are validated against the selected data type to detect any mismatches. Use the format mentioned here for dynamic values.

    **Static values**

    Type the values in the text field.

    <img src="../images/static-values.png" alt="static values" title="static values" style="border: 1px solid gray; zoom:75%;"/>

    **Dynamic Values**

    To map dynamic values, type the context object format and select the appropriate variable(s) from the suggestions, as shown in the example below. 
    <img src="../images/map-dynamic-values.png" alt="dynamic values" title="dynamic values" style="border: 1px solid gray; zoom:75%;"/>

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p><ul><li>When double curly braces “<code>{{</code>“ are typed in the value field, suggestions for context objects appear.</li>
    <li>These suggestions list all context objects available for the flow in a list.</li>
    <li>You can also search from the list to select.</li>
    <li>The <b>Add</b> button lets you dynamically pass arguments to your function. The coding language must support additional arguments, and these should be defined at the function parameter level. If the function does not support additional arguments, the operation may fail.</li></ul></p>
    </div>

* Input argument mapping is required for deployment. You can test the function and tool, but you cannot deploy until the mapping errors shown below are fixed. 
 <img src="../images/input-validation.png" alt="input validation error" title="input validation error" style="border: 1px solid gray; zoom:75%;"/>
 
#### Step 4: Test the Script and Function Configuration

To test the custom function configuration, follow the steps below:

1. Click the **Test** button in the **General Settings** panel.
   
     <img src="../images/click-test-button.png" alt="click test" title="click test" style="border: 1px solid gray; zoom:75%;"/>

<ol start="2"><li>In the <b>Input</b> panel, enter values to test the code. Configured values appear by default, but you can edit or reset them as needed.</li>
<li>Click <b>Execute</b> to run the function with the configured input arguments.</li></ol>


### Results Panel

In this example, for a Banking tool flow, the `appendCustomerName` function from the `GenerateFullName` script is executed with `firstName` and `lastName` as input arguments. The function combines them to generate the full name. After execution, the following details appear in the Results panel:

**Input**

All the configured input parameters and their values are displayed in this section.

**Edit Input**

To edit inputs for the function and re-execute tests, click **Edit input**.
<img src="../images/edit-input.png" alt="edit input" title="edit input" style="border: 1px solid gray; zoom:75%;"/>
 
**Output**

From the Output API response, the **result** (of the function code) and **function run ID keys** from the container are shown in this section. The time taken to generate the output is also displayed. 

Click the **Copy** icon to copy the output.

**Success Scenario** 

<img src="../images/success-scenario.png" alt="success scenario" title="success scenario" style="border: 1px solid gray; zoom:75%;"/>


**Error Scenario**

<img src="../images/error-scenario.png" alt="error scenario" title="error scenario" style="border: 1px solid gray; zoom:75%;"/>

**Key Considerations**

* Successful API calls return output values from the script.
* The function’s **result key** value from the script is saved to the function node’s output (End node) as <code>{{context.steps.functionnodename.output}}</code>.
* Errors are displayed in the panel if an API request fails. The error logs are also displayed.
<img src="../images/function-error-logs.png" alt="error logs" title="error logs" style="border: 1px solid gray; zoom:75%;"/>

* The function’s **error/stderr** value from the script is saved to the function node’s output (End node) as <code>{{context.steps.functionnodename.error}}</code>.

**Logs**

The **Logs** section displays success and error logs from function execution to support debugging.

Values under the `stdout` and `stderr` keys are shown here.
<img src="../images/logs-screen.png" alt="logs screen" title="logs screen" style="border: 1px solid gray; zoom:75%;"/>

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

1. Click the **Input** tab of the **Start** node, and click **Add Input Variable** to configure the input for the flow’s test run. [Learn more](../../tool-flows/perform-other-actions-on-the-flow-builder/manage-input-and-output.md#adding-input-variables).

<img src="../images/add-input-variable-button.png" alt="add input variable" title="add input variable" style="border: 1px solid gray; zoom:75%;"/>

<ol start="2"><li>Add the <b>Name(key)</b> value, select the data type for <b>Type</b>, and provide a description in the <b>Enter input variable</b> window. For example, in the banking flow, to get the sum of two balances, one in Q3 and the other in Q4, you must define two input variables, “<i>Q3balance</i>” and “<i>Q4balance</i>,” as shown below.
<img src="../images/add-input-vars-function-node.png" alt="add input var" title="add input var" style="border: 1px solid gray; zoom:75%;"/></li>
<li>Click <b>Save</b>.</li></ol>

Once you define the input variables, you must [add the output variable(s)](../types-of-nodes/function-node.md#step-2-add-the-output-variable) and [run the flow](../types-of-nodes/function-node.md#step-3-run-the-tool-flow).

<div class="admonition note">
<p class="admonition-title">Important</p>
<p><ul><li>You can use the <b>Start</b> node’s input variables as context variables in the script editor to accept dynamic values and generate the output. To refer to the input variable, follow the syntax mentioned <a href="#syntaxes-for-the-context-input" target="_blank">here</a>.</li>
<li>Once you run the node’s flow, the result gets stored in the output variable of the <b>Start</b> node. Additionally, this key is mapped to the <b>End</b> node, where you can define its value.</li>
<img src="../images/output-variable-start-node.png" alt="end node key" title="end node key" style="border: 1px solid gray; zoom:75%;"/></ul></p></div>

### Step 2: Add the Output Variable

To define the output variable, follow the steps below:

<ol><li>Select the <b>Start</b> node and click the <b>Output</b> tab.</li>
<img src="../images/output-tab.png" alt="output tab" title="output tab" style="border: 1px solid gray; zoom:75%;"/></ol>
<ol start="2"><li>Click <b>Add Output Variable</b>.</li>
<li>Enter the value for <b>Name (key)</b> and select the data type for <b>Type</b>.</li>
<li>Click <b>Save</b>.</li>
<img src="../images/save-output-variable-window.png" alt="save output variable" title="save output variable" style="border: 1px solid gray; zoom:75%;"/></ol>

### Step 3: Run the Tool Flow

To run and test the tool flow, follow the steps below:

1. Click the **Run Flow** button at the top-right corner of the flow builder.
<img src="../images/run-flow-function-node.png" alt="run flow" title="run flow" style="border: 1px solid gray; zoom:75%;"/>  

2. (Optional) Provide input to test the flow if you have configured it in the **Start** node. Otherwise, go directly to the next step.
3. Click **Generate Output**.

    <img src="../images/generate-output-function-node.png" alt="generate output" title="generate output" style="border: 1px solid gray; zoom:75%;"/>  


The **Debug** window generates the flow log and results for the given input(s), as shown below. [Learn more](../perform-other-actions-on-the-flow-builder/run-the-flow.md) about running the tool flow. 

<img src="../images/debug-log-function-node.png" alt="debug log" title="debug log" style="border: 1px solid gray; zoom:75%;"/>  

## Access the Function Node’s Output

The node’s output is stored in a context variable. You can access the variable using the syntax: 
`{{context.steps.FunctionNodeName.output}`

For example, <code><em>context.steps.Bankingnode.output</em></code>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The Platform can automatically recognize variables and outputs. To do so, type "<code>context.steps.</code>" and you will see the available variables, nodes, and node outputs.</p>
</div>

## Import, Export, and Share a Tool with Function Node

**Import a Tool**

When you import a tool, a *.zip* package is imported from your local system with the flow definition, app definition, and environment variables JSON files from another environment. [Learn more](../../import-a-tool.md).

If the tool contains a Function node, its configuration is automatically fetched and populated in the new environment (tools automation flow) where the tool is being imported.

### Script Linking Behavior

* If the same script is already deployed in the new environment, the Function node is automatically linked (auto-linking). 

* If the script is not deployed, validation errors are shown to help identify missing or unresolved scripts.

   <img src="../images/import-validation.png" alt="import validation" title="import validation" style="border: 1px solid gray; zoom:75%;"/> 

**Export a Tool**

When you export a tool that contains a Function node, its configuration should be available in the `callflow.json` file within the exported package. [Learn more](../../export-a-tool.md).

The following confirmation window is displayed before the export begins.

<img src="../images/export-checklist.png" alt="debug log" title="debug log" style="border: 1px solid gray; zoom:75%;"/> 

Do one of the following:

* If you’re unsure, click **Let me check**.
* If all necessary components such as AI models, linked tools, and custom scripts or functions are already in place, click **Yes, I will take care**.

**Share a Tool**

When you share a tool with another user within the same account, all configurations of the Function node are retained and available to the recipient as well.

<hr/> 

**Related resource**

* [Supported Libraries](../types-of-nodes/script-libraries.md) - list of supported libraries in the script editor of the Function node.
