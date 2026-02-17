# Agent Transfer Node

The Agent Transfer node allows transferring control from an existing automated contact flow to a live human agent based on a defined trigger. The node acts as a bridge between automated and human-assisted interactions within a contact center or conversational AI system. It provides the necessary configuration options to manage the transfer process, ensure an optimal customer experience during the transition, and handle any errors or exceptions that may arise.

## Configure the Node

### General Settings

Click the **General Settings** icon and provide the following information:
<img src="../images/agent-transfer-node.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

1. A **Custom Name** to identify the node.
2. **Agent Transfer Options**: Select one of the following options:
    1. **Play a message and Transfer to an Agent**: You can use this option to play a message to the user and transfer the conversation to an Agent.

        1. Click **+ Create New** to create a new message for the user. Enter a name for your message and type its contents.
        2. Define multiple message types for the prompt to be played to the customer by clicking **+ Add Another**. In this case, one message will be randomly selected and played during runtime.  
        <img src="../images/user-message.png" alt="User Message" title="User Message" style="border: 1px solid gray; zoom:70%;">

    2. **Run a Specific Dialog, then do an Agent Transfer**: Use this option to run a specific dialog that ends with an agent transfer.  

        <img src="../images/dialog.png" alt="Dialog" title="Dialog" style="border: 1px solid gray; zoom:70%;">

        !!! Note

            Ensure that the selected dialog is a preprocessing task, not a prompting task. Prompting tasks are not allowed, as they can prevent the Agent Transfer from executing properly.

### Transfer to Agents

In the **Transfer to Agents** section, configure the following:

1. Select the required **Skills** from the list. This way, you can define the routing logic that directs the customer to a specific agent with the skills;
2. Select  “**No, I want to override with adding specific Agents**” to route the transfer to a specific agent by overriding the existing skills. Select an **Agent** from the dropdown list.  
    <img src="../images/choose-skills.png" alt="Transfer to Agents" title="Transfer to Agents" style="border: 1px solid gray; zoom:70%;">

### Waiting Experience

Click the **Waiting Experience** icon to configure the customer’s **Waiting Experience** for the current **Agent Transfer** flow as follows:  
<img src="../images/waiting-experience-updated.png" alt="Waiting experience" title="Waiting Experience" style="border: 1px solid gray; zoom:70%;">

Choose whether to use the **Default Waiting Experience** or override it. Clicking **Override** activates the field and allows you to select from a dropdown list of available options.  
<img src="../images/override.png" alt="Override" title="Override" style="border: 1px solid gray; zoom:70%;">

**In Queue Flow**: This flow type can be attached to the Agent Transfer node.

* It modifies the Agent Transfer node in the Experience Flows to enable users to select a flow.
* This flow type runs simultaneously with Waiting Experiences.
* This flow executes whenever the associated interaction enters a queue, including transfers into a queue.
* This flow does not trigger during transfers between agents.

The result of this flow type is always an agent transfer.  
<img src="../images/in-queue-flow.png" alt="In Queue Flow" title="In Queue Flow" style="border: 1px solid gray; zoom:70%;">

**Agent AI Settings**: Enabling this setting allows you to configure Agent AI behavior for key events during the contact's conversation with the agent. 
Turn on the toggle to trigger Agent AI when the contact initially connects with an agent, and select the App and Automation to use.  
<img src="../images/agent-ai-settings.png" alt="In Queue Flow" title="In Queue Flow" style="border: 1px solid gray; zoom:70%;">

### Error Handling

Use this section to handle system errors during customer interactions.
<img src="../images/error-prompt-updated.png" alt="Error Handling" title="Error Handling" style="border: 1px solid gray; zoom:70%;">

* **Your Message to User**: Choose the message type from _Text to Speech, Link, or audio_; then, type the message, upload an audio file (mp3 and .wav formats are only supported for audio files), or provide a URL to the error message that will be played out to the caller when a system error occurs. If the message is not configured, the default system message is played. See [General Settings](#general-settings) for a detailed explanation of these features.
* **Go to node**: Select the node to which you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.