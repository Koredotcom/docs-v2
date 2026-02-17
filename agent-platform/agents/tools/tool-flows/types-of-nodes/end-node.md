# End Node - Automate Workflow Completion

End nodes let you display the flow's outputs upon success or an error message in case of failure.

## Add and Configure an End Node

Setting up an End node in a tool flow involves adding the node at the appropriate location in the flow and configuring various node properties.

Steps to add and configure the node:

### Step 1: Open Flow Builder

* Log into the the Platform and select **Tools** under modules.
* Select your tool and select **Go to Flow**.

### Step 2: Add the End Node

* In the flow builder, click the “**+**” icon on any existing node on the canvas and select **End** from the pop-up menu. 
* Alternatively, drag the **End** node from the Assets panel onto the canvas.

### Step 3: Configure the Node

* Click the added node to open its properties dialog box. The General Settings for the node are displayed.  
<img src="./../images/end-node-configure.png" alt="Configure End Node" title="Configure End Node" style="border: 1px solid gray; zoom:80%;"/>

* Enter or select the following information:

    * **Custom Name**: Enter an appropriate name for the node.
    
    * **Name (key)**: Select a key from the drop-down list. All defined keys in the Manage Output section are displayed here. You can select a variable and assign a value to it. (You can also add a new key. For more information, see [Manage Input and Output variable](./../perform-other-actions-on-the-flow-builder/manage-input-and-output.md).)  
    <img src="./../images/select-a-key.png" alt="Select a Key" title="Select a Key" style="border: 1px solid gray; zoom:80%;"/>
    
    * **Value**: Select an appropriate variable or node as the value. Enter “{{context.” and select the node/variable from the list and then close the braces with “}}”.
    
        Example: `{{context.steps.summarization.output}}`

        <img src="./../images/end-node-success-output.png" alt="Configure End Node" title="Configure End Node" style="border: 1px solid gray; zoom:80%;"/>

        !!! note

            Adding at least one output variable is required for each end node.

If you want to show multiple outputs or messages, click **Add a Key** to add the key and value details for the same.

### Step 4: Test the Flow

Finally, test the flow and fix any issues found. Click the **Run Flow** button at the top-right corner of the flow builder and follow the onscreen instructions.

!!! failure "Standard Error"

    When the value for the output variable is not defined, a list of unresolved outputs is displayed.
