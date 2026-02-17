# End Flow Node

This node allows you to define the message that will be played or displayed to the customer when the flow ends.

## Configure the Node

### General Settings

Click the **General Settings** icon and set up the following conditions:
<img src="./../images/general-settings-end-flow.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

1. A **Custom Name** to identify the node.
2. **Your Message to User**: The message that will be played to the customer via the IVR. Select one of the following options from under **Choose your message type**:
    1. **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
        1. Click **+ Create New** to create a new prompt for the text-to-speech message type. Enter a name for your message and type its contents.
        2. Click **+ Add Another** to define multiple message types for the prompt message to be played to the customer. In this case, one message will be randomly selected and played during runtime.  
    <img src="./../images/text-to-speech-end-flow.png" alt="Text to Speech" title="Text to Speech" style="border: 1px solid gray; zoom:70%;">
    2. **Audio File**: You can type a new message to be played to the customer in the text field or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played;
    <img src="./../images/audio-file-end-flow.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:70%;">
    3. **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
    <img src="./../images/link-end-flow.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:70%;">
3. **Go to node**: Select the node to which you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.