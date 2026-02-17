# Logic Node

The Logic Node provides a simpler experience to developers, facilitating the use of context variables and the definition of complex transition conditions. Its two primary features are:

1. Ability to manage variables and values of variables in the context object.
2. Ability to define nested transition conditions.

This article shows you how to add and configure the Logic node. 


## Add the Node

The setup of a logic node in a dialog task involves the following steps:

1. Open the dialog task to which you want to add the Logic node.
2. Add the Logic node in the designated place. For steps on adding nodes, [refer here](../using-the-dialog-builder-tool.md){:target="_blank"}.

    !!! note    

        You can add a logic node within an existing sequence or outside any existing sequence. If you add it outside, a new, untitled sequence will automatically get created containing the new logic node.

3. The Logic node is displayed with the **Component Properties** tab selected by default.

    <img src="../images/logic-node-img1.png" alt="Logic node - Add node" title="Logic node - Add node" style="border:1px solid gray;zoom:70%;">


## Configure the Node

### Component Properties

!!! Note

    All changes made to the Component Properties tab will affect all instances of the Logic node, across Dialog Tasks. 


To configure the Component Properties tab, please follow the steps below:

1. On the **Component Properties** tab, you can modify the **Name** and **Display Name**.
2. Use the **Manage Context Variables** section to set the context variables by entering a key-value pair. Use the full path of the variable in the _key_ field i.e. ```context.BotUserSession.<variable_name>.```
3. In the **Variable Namespaces** section (v8.0), associate the variable namespaces to execute this node and its transitions. This option is visible only when the variable namespace is enabled for the assistant. You can go with the task level settings or customize it for this node. For more information, refer to [Managing Namespace](../../../../app-settings/managing-namespace.md){:target="_blank"}.

<img src="../images/logic-node-img2-component-properties.png" alt="Logic node - Component Properties" title="Logic node - Component Properties" style="border:1px solid gray;zoom:70%;">


### Instance Properties

!!! Note

    The settings in the Instance Properties tab are specific to the current dialog task and do not reflect in other dialog tasks that use this node.

Use the Instance Properties to define any user tags that you want to set.

1. On the Logic node properties panel, click the **Instance Properties** tab.
2. Under the **Custom Tags** section, add tags to build custom profiles of your AI Agent’s conversations. [Click here for more](../../../../analytics/automation/custom-dashboard/custom-meta-tags.md){:target="_blank"}.

    <img src="../images/logic-node-img3-instance-properties.png" alt="Logic node - Instance Properties" title="Logic node - Instance Properties" style="border:1px solid gray;zoom:70%;">


### Connections Properties

!!! Note
    
    * Connection properties can be seen and accessed only if this is the bottommost node of a sequence.
    * The conditions configured here are applicable only for this instance and will not affect this node when being used in any other dialog.

To set up node connection conditions, please follow the steps outlined in [Adding IF-Else Conditions to Node Connections. ](../node-connections/nodes-conditions.md){:target="_blank"}

<img src="../images/logic-node-img4-connection-properties.png" alt="Logic node - Connection Properties" title="Logic node - Connection Properties" style="border:1px solid gray;zoom:70%;">

The Connection Path property offers three default variants:

1. Not Connected - No specific next node is defined
2. End of Dialog - Explicitly ends the current dialog
3. Return to Flow - Terminates the Dialog Task and returns control to the Flow Builder. The Flow Builder resumes from the next node.
    * Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context.
    It has two deflection types - ‘ Automation’ and ‘Agent Transfer’.  
    <img src="../images/deflect-to-chat1.png" alt="Deflect to Chat" title="Deflect to Chat" style="border:1px solid gray;zoom:70%;">


!!! Note

    Deflect to Chat works only with Kore Voice Gateway Channels (Phone number or SIP Transfer).