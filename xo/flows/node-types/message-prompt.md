# Message Prompt Node

This node can be used to provide automated responses to customers.

## Configure the Node

### General Settings

Click the **General Settings** icon and provide the following information:
<img src="./../images/general-settings-message-prompt.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

1. A **Custom Name** to identify the node.
2. For **Your Message to User**, choose the message that will be played or displayed to the customer via the IVR. Select one of the following options from under **Choose your message type**:

    1. **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
        1. Click **+ Create New** to create a new prompt to be played out for the Text to Speech message type. Enter a name for your message, and type its contents.
        2. Click **+ Add Another** to define multiple message types for the prompt message to be played to the customer. In this case, one message will be randomly selected and played during runtime.  
    <img src="./../images/text-to-speech-message-prompt.png" alt="Text to Speech" title="Text to Speech" style="border: 1px solid gray; zoom:70%;">
    2. **Audio File**: In the text field, type a new message to be played to the customer or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played.
    <img src="./../images/audio-file-message-prompt.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:70%;">
    3. **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
    <img src="./../images/link-message-prompt.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:70%;">
    4. **Go to node**: Select the node to which you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.

### Pass Data from Experience Flow to Dialog in a Child Bot

You can use a script to access data from an experience flow and pass it to a dialog in a child bot. The script node of the experience flow sets a variable using information from the current user session. This variable is then stored in the user session with a key using userSessionUtils. [Learn more](../node-types/utils.md#pass-data-from-experience-flow-to-dialog-in-a-child-bot).
