# Form Node

The Form node lets you integrate [Digital Forms](../../digital-skills/digital-forms.md){:target="_blank"} with Dialog Tasks. This facilitates the presentation of forms to capture user inputs for specific use cases.

The primary purpose of the Form node is to represent a UI Form in the dialog task and make the form available for end-users on their channel. For example, let us consider a travel assistant that has a form to capture the customer details to make a new booking. During this process, you may want to use the form instead of prompting for each and every entity value.

## Add the Node

Before you can begin setting up a Form node, you need to have previously created a Digital Form to use within the node.

To add a form node to the dialog task, follow the below steps:

1. **Open the dialog task** to which you want to add the Form node.
2. **Add the Form node** in the designated place. To learn how to add nodes, please [click here](../using-the-dialog-builder-tool.md){:target="_blank"}. You will be shown a list of existing Digital Forms from which you can choose the one to add to this node.  
    
    <img src="../images/form-node-gif1.gif" alt="Add Form node" title="Add Form node" style="border:1px solid gray;zoom:70%;">

    !!! note

        You can add a form node within an existing sequence or outside any existing sequence. If you add it outside, a new, untitled sequence will automatically get created containing the new form node.

3. **Choose the Form Experience**: If you are offering your AI Agent on multiple channels, you can choose whether to enable the Digital Form Experience as the default experience on all these channels, or use a combination of Digital Form Experience and Conversation Experience.
    1. **Only UI Form**: Users will be presented the Digital Form Experience on all the channels that are enabled for the assistant that you are working with. This will create a Form Node and automatically open the Component Properties panel, where you can continue configuring the node.
    2. **Both Digital Form and Conversational Experience**: You can choose the channels on which the Digital Form Experience should be enabled and all other channels will use the Conversational Experience.
        
        <img src="../images/form-node-img2-choose-experience.png" alt="Choose form experience" title="Choose form experience" style="border:1px solid gray; zoom:70%;">

4. **Choose the channels** on which you want to offer the form experience. Note that you would get this option only if you select **Both Digital Form and Conversational Experience** as form experience.

    <img src="../images/form-node-img3-channels.png" alt="Choose channels to offer form experience" title="Choose channels to offer form experience" style="border:1px solid gray;zoom:70%;">

5. **By following this process, the Platform will automatically add a _Form Experience Transition_ node group,** which ramifies into the necessary Dialog Task and Form Node, to allow you to further customize the Form Experience and Conversation Experience for your channel selection. This Transition is composed of individual nodes, which you will need to configure separately, according to their respective node types.

    <img src="../images/form-node-img4.png" alt="tool tip" title="tool tip" style="border:1px solid gray;zoom:70%;">

## Configure the Node

This configuration applies to the Form Node Type – regardless of whether it is standalone by selecting Only UI Form during setup, or whether it is part of a Form & Conversation Experience.

### Component Properties

!!! Note

    The configurations you set up or modify in this section are reflected in all other dialog tasks that use this node.

The Form Component Properties allow you to configure a variety of settings and prompts related to your Form Node, as follows:

1. On the **Component Properties** tab, enter a **Name** and **Display Name** for the form node. Node names cannot contain spaces, but the Display Name can.
2. In the **User Prompts** text box, enter the prompt message that you want the user to see for this form. It should instruct the user to click on the link to initiate the form. It is not recommended to change the context variable reference (of the form {{context.form_node.formLink}})coded therein. You can enter channel-specific messages for user prompts. For more information, refer to [Using the Prompt Editor](../prompt-editor.md){:target="_blank"}.
3. In the **Error Prompts** text box, review the default error message, and if required modify it. For more information, refer to [Using the Prompt Editor](../prompt-editor.md){:target="_blank"}.
4. In the **Submit Prompts** text box, review the default message that is displayed after successful submission of the form, and if required, modify it. This message is applicable only when the UI Form is opened in a browser tab.  
Steps to personalize form submission prompt for **Mobile/Web SDK**:
    1. In the **Submit Prompts** section, click **+ Add**.  

    2. In the additional prompt editor, select **Web/Mobile Client**.
       
    3. Write or change the message as appropriate.

         <img src="../images/form-node-img7-change-message.png" alt="Change message" title="Change message" style="border:1px solid gray;zoom:70%;">

    For more information, refer to [Using the Prompt Editor](../prompt-editor.md){:target="_blank"}.

5. Under the **Web/Mobile SDK Form Behavior** section, you can set how the form is displayed. You can select:
    1. Open full page popup form – This is the default setting where the form opens as a full page on the SDK chat interface.
    2. Open inline form – The form opens as an inline form within the chat window.

6. Under **Submit Prompts for Web/Mobile SDK** section, you can choose the submit prompt to show for Web/Mobile SDK and select how the AI Agent handles the conversation when the user cancels the form.
Select the prompt to show on successful form submission. The options are:  
        a. Use Submit Prompts –  The custom message added in the prompt is shown.  
        b. Use default system response –  The following confirmation is shown – {{FormName}} Form is successfully submitted.
            
    <img src="../images/form-node-img8-submit-prompt-selection.png" alt="Select Submit prompt for Web/Mobile SDK" title="Select Submit prompt for Web/Mobile SDK" style="border:1px solid gray;zoom:70%;">

    !!! Note
    
        The target node has to be in the same dialog, you cannot make a jump to a target node outside the current dialog. The list of target nodes only shows the local nodes. If the target node is not present during runtime, the platform presents the error in continuing the conversation, and the task should get discarded.

### Instance Properties

Use the Instance Properties to define any user tags that you want to set.

!!! Note

    The settings in the Instance Properties tab are specific to the current dialog task and do not reflect in other dialog tasks that use this form node.

To configure this tab, please follow these steps:

1. On the Form window, click the **Instance Properties** tab.
2. In the **Form Cancellation Behavior** section, select how the AI Agent handles the conversation when the user cancels the form:  

    a. Discard the task and trigger End of Task Event – This is the default option.  
            
    <img src="../images/form-node-img9-form-cancellation-behavior.png" alt="Form cancellation behavior - End of task" title="Form cancellation behavior - End of task" style="border:1px solid gray;zoom:70%;">
 
    b. Continue with this task and transition to this node – In the **Unit Type** drop-down list, you can select any node present in the current dialog task.
            
    <img src="../images/form-node-img10-form-cancellation-behavior-continue-task.png" alt="Form cancellation behavior - Continue task" title="Form cancellation behavior - Continue task" style="border:1px solid gray;zoom:70%;">

 3. Under the **Custom Tags** section, add tags to build custom profiles of your conversations. [Click here for more](../../../../analytics/automation/custom-dashboard/custom-meta-tags.md){:target="_blank"}.

<img src="../images/form-node-img11-instance-properties.png" alt="Form node - Instance properties" title="Form node - Instance properties" style="border:1px solid gray;zoom:70%;">

### Connections Properties

!!! Note

    If the node is at the bottom in the sequence, then only the connection property is visible.

From the node’s **Connections** tab, you can determine the node in the dialog task to execute next. You can write the conditional statements based on the values of any Entity or Context Objects in the dialog task, or you can use intents for transitions.

!!! Note

    These conditions are applicable only for this instance and will not affect the node when being used in any other dialog.

For details on how to work with connection conditions, please see [Adding IF-Else Conditions to Node Connections. ](../node-connections/nodes-conditions.md){:target="_blank"}

The Connection Path property offers three default variants:

1. Not Connected - No specific next node is defined
2. End of Dialog - Explicitly ends the current dialog
3. Return to Flow - Terminates the Dialog Task and returns control to the Flow Builder. The Flow Builder resumes from the next node.
    * Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context.
    It has two deflection types - ‘ Automation’ and ‘Agent Transfer’.  
    <img src="../images/deflect-to-chat1.png" alt="Deflect to Chat" title="Deflect to Chat" style="border:1px solid gray;zoom:70%;">


!!! Note

    Deflect to Chat works only with Kore Voice Gateway Channels (Phone number or SIP Transfer).