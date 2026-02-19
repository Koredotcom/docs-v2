# Check Business Hours Node

This node selects the working hours and decides the next Go to node to trigger when a customer query is incoming during or outside business hours.

## Configure the Node

### General Settings

Click the **General Settings** icon and provide the following information:
<img src="./../images/general-settings-check-business-hours.png" alt="Check Business Hours" title="Check Business Hours" style="border: 1px solid gray; zoom:70%;">

* A **Custom Name** to identify the node.
* Under **Hours of Operation**, select the hours of operation from the drop-down. **Default Hours of Operation** is auto-created. You can [add more hours of operation](../../contactcenter/configurations/hours-of-operation/manage-hours-of-operation.md#add-hours-of-operation) if necessary.
*  For **inside working hours**, you can define a success path by selecting a node from the Go to node dropdown list. If a customer query is incoming during working hours, the flow is directed to the selected node from the current node.
* Similarly, for **Outside working hours**, you can define the path by selecting a node from the Go to node dropdown. If a customer query is incoming outside working hours, the flow is directed to the selected node from the current node.

After setting up the node, your flow will look similar to the example below:
<img src="./../images/check-business-hours-flow.png" alt="Check Business Hours Flow" title="Check Business Hours Flow" style="border: 1px solid gray; zoom:70%;">

### Error Handling

Use this section to handle system errors during customer interactions.
<img src="./../images/error-handling-check-business-hours.png" alt="Error Handling" title="Error Handling" style="border: 1px solid gray; zoom:70%;">

* **Your Message to User**: The message that will be played or displayed to the customer. Select one of the following options from under **Choose your message type**:
    * **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
        * Click **+ Create New** to create a new prompt message to be played out for the Text to Speech message type. Enter a name for your message, and type its contents.
        * Click **+ Add Another** to define multiple message types for the prompt message to be played to the customer. In this case, one message will be randomly selected and played during runtime.  
    <img src="./../images/text-to-speech-check-business-hours.png" alt="Text to Speech" title="Text to Speech" style="border: 1px solid gray; zoom:70%;">

    * **Audio File**: In the text field, type a new message to be played to the customer or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played.
    <img src="./../images/audio-file-check-business-hours.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:70%;">

    * **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
    <img src="./../images/link-check-business-hours.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:70%;">

* **Go to node**: Select the node to which you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.