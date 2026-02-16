# IVR Digit Input Node

The IVR Digit Input node records a non-IVR menu interaction. It is used during dynamic interactions when the caller needs to provide input such as a phone number or the last four digits of their credit card to proceed. You can configure the condition for receiving the input, the _Go to node_ if the condition is satisfied (success flow), the timeout value in seconds for the contact’s response/input, and the error-handling use cases. You can implement this node within your Flows.

## Configure the Node

### General Settings

Click the **General Settings** icon and provide the following information:
<img src="./../images/general-settings-ivr-digit.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

* A **Custom Name** to identify the node.
* **Your Message to User**: The message to be played to the customer via the IVR. Select one of the following options from under **Choose your message type**:
    * **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
        * Create a new prompt message to be played out for the **Text to Speech** message type by clicking **+ Create New**. Enter a name for your message, and type its contents.
        * Define multiple message types for the prompt message to be played to the customer by clicking **+ Add Another**. In this case, one message will be randomly selected and played during runtime.  

        <img src="./../images/text-to-speech-ivr-digit.png" alt="Text-to-Speech" title="Text-to-Speech" style="border: 1px solid gray; zoom:70%;">

    * **Audio File**: In the text field, type a new message to be played to the customer or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played.
    <img src="./../images/audio-file-ivr-digit.png" alt="Audio File" title="Audio File" style="border: 1px solid gray; zoom:70%;">
    * **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
    <img src="./../images/link-ivr-digit.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:70%;">

### Condition

Conditions allow you to set the parameters based on which the digit input is recorded. Click the **Condition** icon to define the input conditions by providing values for the following fields:

* **Maximum length of digit**: Define the limit for the number of digits a caller can input, after which the conditional message is played.
* **Ending Keypress**: Define the key to delimit or indicate the end of the caller’s input. For example, when “**#**” is pressed, it indicates that the caller has completed keying in their input.
* Define the **On success** flow by selecting a node from the **Go to node** dropdown list. If the condition is satisfied, the flow is directed to the selected node from the current node.  
<img src="./../images/condition.png" alt="Condition" title="Condition" style="border: 1px solid gray; zoom:70%;">

### Timeout

Set up the **Timeout** flow by defining the following fields:

1. Under **Timeout**, type the wait time in seconds, after which a timeout event will occur.
    1. **Your Message to User**: From the **Choose your message type** dropdown list, select an option from _Text to Speech, Link, or audio_; then, type the message, and upload an audio file (.mp3 and .wav formats are only supported for audio files), or provide a URL to the error message to be played to the customer when a timeout event occurs. See [General Settings](#general-settings) for details on these options.
2. Under **Advanced Control**, configure the following:
    2. **Number of Tries**: Type the limit for the maximum number of retries allowed for a customer to key in the input.
    3. **Action after Exceeding Retries**: Select the node to direct the flow to after a timeout has occurred.  
<img src="./../images/timeout-ivr-digit.png" alt="Timeout" title="Timeout" style="border: 1px solid gray; zoom:70%;">

### Wrong Input

This tab allows you to configure the flow when the caller provides a wrong digit input.

1. **Your Message to User**: From the **Choose your message type** dropdown list, select an option from _Text to Speech, Link, or audio_; then, type the message, and upload an audio file ( .mp3 and .wav formats are only supported for audio files), or provide a URL to the error message to be played to the customer when a timeout event occurs. See [General Settings](#general-settings) for details on these options.
2. Under **Advanced Control** > **Number of Tries**, type the maximum number of retries or the allowed limit for a customer to key in the correct input.
3. Under **Advanced Control** > **Action after Exceeding Retries**, select the node to direct the flow after the wrong input retries have exceeded. Select a node type to create the node or identify and select an existing node.  
<img src="./../images/wrong-input-ivr-digit.png" alt="Wrong Input" title="Wrong Input" style="border: 1px solid gray; zoom:70%;">

### Error Handling

Error Handling is available under the **Wrong Input** tab. Use this section to handle system errors that occur during a call.

Define the following fields that determine how system errors will be handled during runtime:

* **Your Message to User**: Choose the message type from _Text to Speech, Link, or audio_; then, type the message, upload an audio file (mp3 and .wav formats are only supported for audio files), or provide a URL to the error message that will be played out to the caller when a system error occurs. See [General Settings](#general-settings) for a detailed explanation of these features.
* **Go to node**: Select the node to which you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.  
<img src="./../images/error-handling-ivr-digit.png" alt="Error Handling" title="Error Handling" style="border: 1px solid gray; zoom:70%;">

### Store Digit Input

Once the caller listens to the IVR message, they must key in their input. The Contact Center AI receives this and stores it as a variable under a script task.  

The Context Variable syntax is the following:

```
Context.steps.<<context_node_name>>
```

For example,

```
context.steps.IVRDigitInput
```

To define the script task that will store the input from this IVR Digit Input node, follow these steps:

1. Under the _IVR Digit Input_ node, add a Script Task node.
2. Under **General Settings** > **Define** a script, add `steps.nodename`
(For example, `steps.IVRDigitInput`).
<img src="./../images/script-task-ivr-digit.png" alt="Script Task" title="Script" style="border: 1px solid gray; zoom:70%;">
