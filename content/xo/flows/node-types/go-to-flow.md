# Go To Flow Node

This node helps navigate from a parent to a target flow already built in a specific part of the customer interaction.

## Configure the Node

### General Settings

Go to **General Settings** and provide the following:  
<img src="./../images/general-settings-go-to-flow.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

1. A **Custom Name** to identify the node.
2. In the **Transfer To** section, select the target flow from the dropdown list under **Choose a Flow**.

### Error Handling

Use this section to handle system errors during customer interactions.
<img src="./../images/error-handling-go-to-flow.png" alt="Error Handling" title="Error Handling" style="border: 1px solid gray; zoom:70%;">

* **Your Message to User**: This message plays to the customer via the IVR. Select one of the following options from under **Choose your message type**:
    * **Text to speech**: This option lets you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
        * Select **+ Create New** to create a new prompt for the text-to-speech message type. Enter a name for your message and type its contents.
        * Define multiple message types for the prompt message to be played to the customer by selecting **+ Add Another**. In this case, one message is randomly selected and played during runtime.  
    <img src="./../images/text-to-speech-go-to-flow.png" alt="Text to Speech" title="Text to Speech" style="border: 1px solid gray; zoom:70%;">
    * **Audio File**: You can type a new message to be played to the customer in the text field or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played;
    <img src="./../images/audio-file-go-to-flow.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:70%;">
    * **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
    <img src="./../images/link-go-to-flow.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:70%;">
* **Go to node**: Select the node to which you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.

    !!! note 
 
        The system does not override waiting experience utils configured in main flows with waiting experience overrides defined using utils inside GoTo flows.