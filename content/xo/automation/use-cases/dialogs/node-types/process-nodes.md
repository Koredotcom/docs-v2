# Process Nodes

You use Process nodes to connect a Dialog Task to a Process App that's created in the Platform.

The setup of a Process node in a Dialog Task involves the following steps:

## Add the Node

To add a Process node, follow the steps:

1. **Select the AI Agent** that you want to work with.
2. **Open the Dialog Task** to which you want to add the node. 
3. **Add the Process node**. The node configuration panel opens automatically, with the **Component Properties** tab selected.

    <img src="../images/process-node.png" alt="Process node" title="Process node" style="border:1px solid gray;zoom:70%;">

## Configure the Node

### Component Properties

!!! Note

    Any changes in this tab affects all instances of this process. Proceed with caution.

The Component Properties tab lets you modify configurations of this process across all instances in all dialogs as follows:

1. Enter a **Name and Display Name** for the Process node. Node names can't have spaces.
2. **Select a Type**. You can choose one of the following:
    1. **Trigger**: The node triggers the Process App.
    2. **Send Bot Response to Process App**: The node sends the Bot Response to the Process App, which can then use it to complete other configured tasks.
    3. **Get Process Tasks**: The node retrieves process tasks from within the Process App, then includes these tasks within the current Dialog Task.
3. **Choose a Process App** to connect the node to. 
4. In the **Variable Namespaces** section, associate the variable namespaces to execute this node and its transitions. This option is available only when you enable the variable namespace for the AI Agent. You can go with the task level settings or customize it for this node. For more information, refer to [Managing Namespaces](../../../../app-settings/managing-namespace.md){:target="_blank"}.

<img src="../images/process-node-component-properties.png" alt="Process node - Component properties" title="Process node - Component Properties" style="border:1px solid gray;zoom:70%;">
    
### Connection Properties

You can write conditional statements based on the values of any Entity or Context Objects in the dialog task, or you can use Intents for transitions. 

!!! Note

    * Connection properties can be seen and accessed only if this is the bottommost node of a sequence.
    * The conditions configured here are applicable only for this instance and doesn't affect this node when used in any other dialog.

To set up node connection conditions, follow the steps in [Adding IF-Else Conditions to Node Connections](../node-connections/nodes-conditions.md){:target="_blank"}.

<img src="../images/process-node-connection-properties.png" alt="Process node - Connection properties" title="Process node - Connection Properties" style="border:1px solid gray;zoom:70%;">  

The Connection Path property offers three default variants:

1. Not Connected - No specific next node defined.
2. End of Dialog - Explicitly ends the current dialog
3. Return to Flow - Terminates the Dialog Task and returns control to the Flow Builder. The Flow Builder resumes from the next node.
    * Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context.
    It has two deflection types - ‘ Automation’ and ‘Agent Transfer’.  
    <img src="../images/deflect-to-chat1.png" alt="Deflect to Chat" title="Deflect to Chat" style="border:1px solid gray;zoom:70%;">


!!! Note

    Deflect to Chat works only with Kore Voice Gateway Channels (Phone number or SIP Transfer).
