# Manage Input and Output

Tool flows allow you to define input and output variables, which become accessible as context objects throughout the execution of the flow.

* **Input Variables**: The input variables provide initial data to the tool flow. 
* **Output Variables**: The output variables store and make accessible the derived values from the flow. You must define output variables to capture the results you want to return from the tool.

## Using Variables in the Tool Flow

Once the input and output variables are defined, you can access these variables using the context object syntax and use them throughout the flow:

* Input variables are available immediately after the Start node. These variables can be accessed using the following syntax: `context.steps.Start.inputVariable`
* Output variables can be set in any node. For example, in the End node, you can select a defined output variable and assign it the result/output of an AI node using the following syntax: `{{context.steps.AInode.output}}`

## Adding Input Variables 

Steps to add input variables:

1. On the top of the Tool flow canvas, click the **Manage I/O** button.
Alternatively, you can click the **Start** node. The **Manage Input & Output** dialog is displayed.  
<img src="../images/adding_input_output_variables.png" alt="Manage Input Output Variables" title="Manage Input Output Variables" style="border: 1px solid gray; zoom:80%;"/>


2. On the **Input** tab, click the **+ Add input variable** button.

    The **Enter input variable** dialog is displayed.

    <img src="../images/enter-input-variable.png" alt="Enter Input Variable" title="Enter Input Variable" style="border: 1px solid gray; zoom:40%;"/>

3. In the **Name (key)** field, provide a name for the input variable. For example, Product_ID.

4. In the **Type** field, select a data type from the drop-down list - Text, Number, Boolean, JSON or Remote file.
If you want to make the data type mandatory, then enable the **Mandatory** toggle.

    * If you select the **Text**, **Number**, or **Boolean** data types, the **Default value** field appears. You can enable the **Default value** field to set a default value for the input variable.
        
    * If you select the **Remote file** data type, the **File url timeout** field appears. Enter the File URL timeout duration in minutes. The default File URL timeout is 5 minutes. You can set it to anywhere between 5 minutes and 7 days (10080 minutes).

        <img src="../images/url-timeout.png" alt="File URL timeout" title="File URL timeout" style="border: 1px solid gray; zoom:40%;"/>
 
    * If you select the **List of values (Enum)** data type, you can set predefined values that are allowed for tool input variables by clicking **Add Values +**.

        <img src="../images/enter-input-variable-window.png" alt="Enter Input Variable window" title="Enter Input Variable window" style="border: 1px solid gray; zoom:40%;"/>
 
        When you enable **Default value**, the defined values get listed in the dropdown for selection. The system validates the input against the defined enum values and provides an error message if an invalid value is provided.

        <img src="../images/add-default-key-value.png" alt="add default key value" title="add default key value" style="border: 1px solid gray; zoom:40%;"/>

    * If you select the **JSON** data type, a schema Box/JSON Editor appears, where you need to define the JSON schema for the input parameter. You must ensure to follow the supported JSON schema format standard as detailed here: [Defining JSON schema](../perform-other-actions-on-the-flow-builder/defining-json.md){:target="_blank"}.

        <img src="../images/json_schema.png" alt="defining json" title="defining json" style="border: 1px solid gray; zoom:60%;"/>
        
        In the **Default Value** field, set a default value for the specified field and validate it against the designated data type, ensuring consistency with the defined JSON schema. You must ensure that the default value matches the schema you’ve defined. If the JSON is invalid, the system will display the relevant error message and execution will fail.

5. Click **Save**. The input variable is displayed on the Input tab of the **Manage Input & Output** dialog. 
  
## Adding Output Variables 

Steps to add output variables:

1. On the top of the canvas of the Tools page, click the **Manage I/O** button. The **Manage Input & Output** dialog is displayed.

2. On the **Output** tab, click the **+ Add output variable** button. The **Enter output variable** dialog is displayed.  
 <img src="../images/enter-output-variable.png" alt="Enter Output Variable" title="Enter Output Variable" style="border: 1px solid gray; zoom:50%;"/>

3. In the **Name (key)** field, provide a name for the output variable.

4. In the **Type** field, select a data type from the drop-down list - **String**, **Number**, **JSON** or **Boolean**. This allows you to generate data in the defined type as the output parameter from a tool, making it compatible with downstream systems.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>The <b>Import</b> button is enabled when the required information is provided.</li>
<li>AI node models and guardrail configurations may not be available in the current account. Reconfigure them before running the tool.</li>
<li>If a type mismatch occurs, the endpoint still succeeds but includes a warning in the response along with the key name and the nature of the mismatch.</li>
<li>If one or more keys fail validation, the response includes warnings for the failed keys and outputs for the valid ones.</li></ul></p></div>

<ol start="5"><li>Click <b>Save</b>.</li>

The output variable is displayed on the Output tab of the <b>Manage Input & Output</b> dialog.</ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You can also add an output variable in the End node using the <b>Add a Key</b> option on the node's interface.</p></div>
