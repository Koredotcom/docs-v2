# Check Agent Availability Node

This node checks agent availability based on skills and decides the next node to run within the experience flow.

!!!Note

    Please be aware that the Check Agent Availability node is experimental and may be deprecated in a future release.

## Configure the Node

### General Settings

Click the **General Settings** icon and provide the following information:
<img src="./../images/general-settings-agent-availability.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

1. Provide a **Custom Name** by which to identify the node.
2. In the **Choose Skills** drop-down, specify the skills or skill groups which you want to check agent availability for.
3. Select the **Check for specific agents** checkbox to search for specific agents in the text field. This will restrict the node to only checking availability among the selected agents.

    !!!Note

        You can check agent availability either based on skills or agents. Both criteria cannot be used together.
4. Under **Output**, you can select nodes to define the following:
    1. **The success path (If an agent is available)**: The flow is directed to the selected node from the current node if an available is found, according to the criteria set above.
    2. **The failure path (If no agent is available)**: The flow is directed to the selected node from the current node if an available agent is not found, according to the criteria set above.

After providing node connections within the Output section, your flow might look similar to the example below, with both the success and the failure paths drawn on the canvas.
<img src="./../images/check-agent-availability.png" alt="Check Agent Availability" title="Check Agent Availability" style="border: 1px solid gray; zoom:70%;">

### Error Handling

Use this section to handle system errors during customer interactions.
<img src="./../images/error-handling-agent-availability.png" alt="Error Handling" title="Error Handling" style="border: 1px solid gray; zoom:70%;">

* **Your Message to User**: The message that will be played or displayed to the customer. Select one of the following options from under **Choose your message type**:
    * **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
        * Create a new prompt message to be played out for the **Text to Speech** message type by clicking **+ Create New**. Enter a name for your message, and type its contents.
        * Define multiple message types for the prompt message to be played to the customer by clicking **+ Add Another**. In this case, one message will be randomly selected and played during runtime.  
    <img src="./../images/text-to-speech-agent-availability.png" alt="Text to Speech" title="Text to Speech" style="border: 1px solid gray; zoom:70%;">
    * **Audio File**: You can type a new message to be played to the customer in the text field or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played.
    <img src="./../images/audio-file-check-agent-availability.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:70%;">
    * **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
    <img src="./../images/link-agent-availability.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:70%;">

* **Go to node**: Select the node to which you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.  

   <img src="./../images/go-to-node-agent-availability.png" alt="Go to Node" title="Go to Node" style="border: 1px solid gray; zoom:70%;">
