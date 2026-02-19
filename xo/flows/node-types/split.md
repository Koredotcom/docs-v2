# Split Node

This node enables you to split incoming queries based on specific conditions to reduce inbound traffic. These conditions use context variables that define the scope of usage in the dialog task and intent transition conditions.

The syntax for defining a context variable is:

```
context.contextvariable.<< context variable name >>
```

For example, _intent_ is a context variable that defines the customer’s intent for a dialog. This variable can is defined in the condition as:

```
context.intent.<< intent name >>
```

The system manages the context variables from AI for Service. [Learn more](../../automation/intelligence/context-object.md).

!!! Note

    The split node is designed to support a maximum of 10 branches.

## Configure the Node

### General Settings

Select the **General Settings** icon and set up the following conditions:

1. A **Custom Name** to identify the node.
2. Under **_Execute branches where condition matches_**, define the _IF/ELSE-IF/ELSE_ conditions using context variables and the AND OR operator.
    * **_IF _**-Directs the flow on a specific path on meeting a specific criteria.  
    * **_ELSE-IF_**-This condition lets you configure another set of criteria for the flow to follow when the criteria in the initial If condition aren't met.  
    * **_ELSE_**-Directs the flow on a specific path if the set criteria aren't met.  
3. Under the first Action dropdown, select the Branch Name to route the logic to this branch when the conditions meet the criteria.
4. Select **_Add ELSE-IF_** to add another set of criteria for the flow to follow when the previous criteria are not met.
5. Under the second **Action** dropdown, select the branch name corresponding to the **_ELSE_** condition. The flow routes to this branch if the _IF/ELSE_-IF criteria aren't met.

    !!!Note

        The condition setup in Contact Center AI is similar to that of the Automation AI process. [Learn more](../../automation/use-cases/dialogs/node-connections/nodes-conditions.md).

You can delete a condition by selecting **Delete** icon next to it.
<img src="./../images/delete-branch.png" alt="Delete Branch" title="Delete Branch" style="border: 1px solid gray; zoom:70%;">

### Error Handling

Use this section to handle system errors during customer interactions.

* **Your Message to User**: The message that will be played or displayed to the customer. Select one of the following options from under **Choose your message type**:
    * **Text to speech**: This option allows you to transcribe text to speech. Type the text to be transcribed in the textbox or select an already configured message.
        * Create a new prompt message to be played out for the **Text to Speech** message type by clicking **+ Create New**. Enter a name for your message, and type its contents.
        * Define multiple message types for the prompt message to be played to the customer by clicking **+ Add Another**. In this case, one message will be randomly selected and played during runtime.  
    <img src="./../images/error-handling-spilt.png" alt="Text-to-Speech" title="Text-to-Speech" style="border: 1px solid gray; zoom:70%;">
    * **Audio File**: In the text field, type a new message to be played to the customer or click **+ Upload New** to upload an audio file (.mp3 or .wav format) with the message to be played.
    <img src="./../images/audio-file-spilt.png" alt="Audio File" title="Audio" style="border: 1px solid gray; zoom:70%;">
    * **Link**: Click **+ Create New** to add the text of the message you want to play to the customer and insert the URL of an audio file in .mp3 or .wav format. Click **+ Add Another** to add another message URL.  
    <img src="./../images/link-spilt.png" alt="Link" title="Link" style="border: 1px solid gray; zoom:70%;">

* **Go to node**: Select the node to which you want to direct the error handling flow and define the system behavior. You can create a new node by selecting a node type or identifying and selecting an existing node.  
<img src="./../images/go-to-node-spilt.png" alt="Go to Node" title="Go to Node" style="border: 1px solid gray; zoom:70%;">
