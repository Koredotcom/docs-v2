# Set Queue Node

Queues are the holding areas for digital and voice interactions waiting to be assigned to agents. The Set Queue node allows you to define and modify the Queue settings and default messages used in building the flow.

## Configure the Node

### General Settings

Click the **General Settings** icon and provide the following information:
<img src="./../images/error-handling-set-queue.png" alt="Set Queue" title="Set Queue" style="border: 1px solid gray; zoom:70%;">

1. A **Custom Name** to identify the node.
2. Select the **Integration Type**: Static List or Script:
    1. If you select the **Static List**, you can configure the following: 
        1. **Queue**: Select the queue that you want to apply to this node.
        2. **Priority**: Set the conversation priority within the assigned queue. Priorities range from 1 to 10, where 1 is the highest priority, and 10 is the lowest. The default value is 5 – Standard.

            !!! Note

                With the ability to prioritize, conversations will shuffle in the queue. This means that the number in the queue and wait time calculations will change for the customer as the priority of their conversation changes. Consider this scenario if you decide to play queue positions and wait time calculations in the waiting experience.

If you select **Script**, you can define the queue or conversation priority.
<img src="./../images/script-set-queue.png" alt="Script" title="Script" style="border: 1px solid gray; zoom:70%;">

Set the Queue as in the following example:

```
agentUtils.setQueue("queueID")
```

Set the Conversation Priority as follows:
```
`agentUtils.setPriority(priority&lt;Number>)`
```

Priority should be a valid number between 0 and 10 (both are inclusive). If an Invalid priority is provided, it will be ignored, and the default Priority (5) will be set for that conversation.

**Examples**:

_agentUtils.setPriority(0); // priority of 0 (highest priority) will be set_.

_agentUtils.setPriority(10); //  priority of 10 (Lowest Priority) will be set_.

_agentUtils.setPriority(7); // priority of 7 will be set_.

Under **Inside working hours**, select the **Go to node** that the node should take once it runs successfully during working hours. For this, set the node that should trigger after setting the queue.

For example, if the Go to node is set to Check Agent Availability, it will check for available agents based on their working hours.

Under **Outside working hours**, choose the **Go to node** that the node should take once it runs successfully outside working hours. For this, set the node that should trigger after setting the queue.

For example, if the Go to node is set to CheckBusinessHours, you can set the action to a message prompt to let customers know they have called outside working hours. [Learn more](../../contactcenter/configurations/hours-of-operation/manage-hours-of-operation.md).

### Error Handling

Use this section to handle system errors during customer interactions.
<img src="./../images/error-handling-set-queue.png" alt="Error Handling" title="Error Handling" style="border: 1px solid gray; zoom:70%;">

* **Your Message to User**: The message that will be played to the customer via the IVR. Select one of the following options from under **Choose your message type**:
    * **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
        * Click **+ Create New** to create a new prompt for the text-to-speech message type. Enter a name for your message and type its contents.
        * Click **+ Add Another** to define multiple message types for the prompt message to be played to the customer. In this case, one message will be randomly selected and played during runtime.  
    <img src="./../images/text-to-speech-set-queue.png" alt="Text to Speech" title="Text to Speech" style="border: 1px solid gray; zoom:70%;">
    * **Audio File**: You can type a new message to be played to the customer in the text field or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played;
    <img src="./../images/audio-file-set-queue.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:70%;">
    * **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
    <img src="./../images/link-set-queue.png" alt="Link" title="General Settings" style="border: 1px solid gray; zoom:70%;">
* **Go to node**: Select the node to which you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.