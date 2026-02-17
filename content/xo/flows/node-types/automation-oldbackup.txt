# Automation Node

The Automation Node helps run a specific dialog (conversation flow) built within the Automation AI app. Its primary purpose is to enable automation functionality for a particular use case configured within the Automation AI app or virtual assistant.

The Automation Node allows you to run a pre-defined dialog or have the bot dynamically determine the next steps based on user input and intent recognition. It provides configuration options for setting up different execution modes, handling timeouts and errors, and defining the flow after automation is completed or transferred to a human agent.

## Configure the Node

### General Settings

Click the **General Settings** icon and provide the following information:
<img src="./../images/general-settings-automation.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

1. Enter a **Custom Name** by which to identify the node.
2. Next, **Choose an app** to enable the automation functionality for a specific use case configured in the app.
3. Under **Execution Mode**, you can select one of the following:
    1. **Run a Specific Dialog**: Select this option to run a specific dialog. The selected dialog will be executed when this node is triggered. Click the **Dialog** dropdown to select a dialog.
    <img src="./../images/run-a-specific-dialog.png" alt="Run a Specific Dialog" title="Run a Specific Dialog" style="border: 1px solid gray; zoom:70%;">

    2. **Run based on User Input**: Select this option to take a user input and let the bot decide what to do based on the intent recognized in the user utterance.
        1. **Your Message to User**: The message that will be played or displayed to the user. Select one of the following options from under **Choose your message type**:
            1. **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
                1. Create a new prompt message to be played out for the Text to Speech message type by clicking **+ Create New**. Enter a name for your message, and type its contents.
                2. Define multiple message types for the prompt to be played to the customer by clicking **+ Add Another**. In this case, one message will be randomly selected and played during runtime.  
            <img src="./../images/text-to-speech-automation.png" alt="Text to Speech" title="Text to Speech" style="border: 1px solid gray; zoom:70%;">

            2. **Audio File**: In the text field, type a new message to be played to the customer or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played.  
            <img src="./../images/audio-file-automation.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:70%;">

            3. **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
            <img src="./../images/link-automation.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:70%;">

### Connection Rules

* **On Return from Automation**: If automation has successfully handed off to flow, under **Go to node**, select the node to which you want to direct the error handling flow and define the system behavior. You can select a node type to create the node or identify and select an existing node.
<img src="./../images/on-return-from-automation.png" alt="On Return From Automation" title="Link" style="border: 1px solid gray; zoom:70%;">

* **On Agent Transfer**: If automation has been handed off for agent transfer, under **Go to node**, select the node to which you want to direct the error handling flow and define the system behavior. You can select a node type to create the node or identify and select an existing node.
<img src="./../images/on-agent-transfer.png" alt="On Agent Transfer" title="On Agent Transfer" style="border: 1px solid gray; zoom:70%;">

### Timeout

Set up the **Timeout** flow by defining the following fields:

1. Under **Timeout,** type the wait time in seconds, after which a timeout event will occur.
    1. **Your Message to User**: From the **Choose your message type** dropdown list, select an option from _Text to Speech, Link, or audio_; then, type the message and upload an audio file (.mp3 and .wav formats are only supported for audio files), or provide a URL to the error message to be played to the customer when a timeout event occurs. See [General Settings](#general-settings) for details on these options.
2. Under **Advanced Control**, configure the following:
    2. **Number of Tries**: Type the limit for the maximum number of retries allowed for a customer to key in the input.
    3. **Action after Exceeding Retries**: Select the node to direct the flow to after a timeout has occurred.  
<img src="./../images/timeout-automation.png" alt="Timeout" title="Timeout" style="border: 1px solid gray; zoom:70%;">

### Error Handling

Use this section to handle system errors during customer interactions.
<img src="./../images/error-handling-automation.png" alt="Error Handling" title="Error Handling" style="border: 1px solid gray; zoom:70%;">

* **Your Message to User**: The message that will be played or displayed to the customer. Select one of the following options from under **Choose your message type**:
    * **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
        * Create a new prompt message to be played out for the Text to Speech message type by clicking **+ Create New**. Enter a name for your message, and type its contents.
        * Define multiple message types for the prompt to be played to the customer by clicking **+ Add Another**. In this case, one message will be randomly selected and played during runtime.  
    <img src="./../images/text-to-speech-automation.png" alt="Text to Speech" title="Text to Speech" style="border: 1px solid gray; zoom:70%;">

    * **Audio File**: In the text field, type a new message to be played to the customer or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played.
    <img src="./../images/audio-file-automation.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:70%;">

    * **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
    <img src="./../images/link-automation.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:70%;">

* **Go to node**: Select the node to which you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.