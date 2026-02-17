# IVR Menu Node

The IVR menu node allows you to create a standard IVR menu that can be presented to customers during inbound calls. Adding this node helps route the customer to the relevant call experience based on their key inputs.

For example, in the case of a travel agency, pressing ‘1’ will route the customer to the booking update flow, pressing ‘2’ will execute the booking cancellation flow, and so on.

## Configure the Node

### General Settings

Click the **General Settings** icon and provide the following information:
<img src="./../images/general-settings-ivr-menu.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

* A **Custom Name** to identify the node.
* **Your Message to User**: The message to be played to the customer via the IVR. Select one of the following options from under **Choose your message type**:
    * **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
        * Create a new prompt message to be played out for the **Text to Speech** message type by clicking **+ Create New**. Enter a name for your message, and type its contents.
        * Define multiple message types for the prompt message to be played to the customer by clicking **+ Add Another**. In this case, one message will be randomly selected and played during runtime.  
    <img src="./../images/text-to-speech-ivr-menu.png" alt="Text-to-Speech" title="Text-to-Speech" style="border: 1px solid gray; zoom:70%;">

    * **Audio File**: In the text field, type a new message to be played to the customer or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played.
    <img src="./../images/audio-file-ivr-menu.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:70%;">

    * **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
    <img src="./../images/link-ivr-menu.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:70%;">

    * Enable or disable **Barge In**.
        * Enabling **Barge In** lets the caller provide digit input before the prompt finishes playing.
        * Disabling **Barge In** prevents the customer from keying in their input before the prompt finishes playing.  
    <img src="./../images/barge-in.png" alt="Barge In" title="Barge In" style="border: 1px solid gray; zoom:70%;">

### Custom Exits

Click the **Custom Exits** icon to add one or more custom exit points for the contact flow.

For this, select the digit/key and the node to which it needs to be mapped. When mapping nodes, one of the following situations occurs:

* You can select a node type from the dropdown list; in this case, a new node of that type will be created and linked to your current IVR Menu node. You can configure this newly added node later.
* Alternatively, you can identify and select an existing node; in this case, the IVR Menu node will be connected to the selected node.  
<img src="./../images/custom-exits.png" alt="Custom Exits" title="Custom Exits" style="border: 1px solid gray; zoom:70%;">
* You can add multiple custom exits by clicking **+ Add Another** and selecting the required digit and the node.
* You can delete a custom exit by clicking the **Delete** (bin) icon on the right.  
<img src="./../images/delete-ivr-input.png" alt="Delete Custom Exit" title="Delete Custom Exit" style="border: 1px solid gray; zoom:70%;">

### Timeout

Click the **Timeout** icon to set up the timeout flow with the following fields:

* **TIMEOUT**: Type the wait time in seconds, after which a timeout event will occur.
* **Your Message to User**: From the **Choose your message type** dropdown list, select an option from _Text to Speech, Link, or audio_; then, type the message, and upload an audio file (.mp3 and .wav formats are only supported for audio files), or provide a URL to the error message to be played out to the customer when a timeout event occurs.
See [General Settings](#general-settings) for a detailed explanation of these features.
* Set the value for **Advanced Control** > **Number of Tries** by typing the maximum number of retries or the allowed limit for a customer to key in the input.
* Set the value for **Advanced Control** > **Action after Exceeding Retries** by selecting the node to direct the flow after a timeout has occurred.  
<img src="./../images/timeout-ivr-menu.png" alt="TIMEOUT" title="TIMEOUT" style="border: 1px solid gray; zoom:70%;">

### Wrong Input

This tab allows you to configure the flow when the caller provides a wrong input within the IVR.

1. Under **Advanced Control** > **Number of Tries**, type the maximum number of retries or the allowed limit for a customer to key in the correct input.
2. Under **Advanced Control** > **Action after Exceeding Retries**, select the node to direct the flow after the wrong input retries have exceeded. Select a node type to create the node or identify and select an existing node.  
<img src="./../images/wrong-input.png" alt="Wrong Input" title="Wrong Input" style="border: 1px solid gray; zoom:70%;">

### Error Handling

Error Handling is available under the **Wrong Input** tab. Use this section to handle system errors that occur during a call. Define the following fields that determine how system errors will be handled during runtime:

* **Your Message to User**: Choose the message type from _Text to Speech, Link, or audio_; then, type the message, upload an audio file (mp3 and .wav formats are only supported for audio files), or provide a URL to the error message that will be played out to the caller when a system error occurs. See [General Settings](#general-settings) for a detailed explanation of these features.
* **Go to node**: Select the node where you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.  
<img src="./../images/error-handling-ivr-menu.png" alt="Error Handling" title="Error Handling" style="border: 1px solid gray; zoom:70%;">
