# User Intent Node

As an app developer, you typically create a task to resolve one primary user intent. Yet, user conversations can branch into related intents (follow-up or sub-intents) as a part of the primary intent.

Let us take a look into this sample conversation for a flight booking assistant:
AI Agent: _Hi, how may I help you today?_  
User: _Hey, what flight options have I got from LA to NYC?_  
AI Agent: _Sure, let me know the travel date._  
User: _Wait a minute, will it rain in NYC this Sunday?_  


The primary intent of this conversation is to book a flight ticket. But the user wants to know the weather forecast before completing the booking, which is a valid use case.

User Intent Nodes help you add a root intent, a follow-up or sub-intents to your dialog tasks. The flow for a follow-up intent is built within the same dialog task using transitions, and cannot be linked to external tasks. When the execution of a follow-up intent is completed, the conversation flow continues within the same dialog tasks based on the transitions you add.

!!! Note

    To start a new Dialog Task from an existing one, you can use the Dialog Task nodes.

Setting up a user intent node in a dialog task involves the following steps:


## Add the Node

1. Open the dialog task to which you want to add the user intent node.
2. Add a user intent node in the designated place. For steps on adding nodes, [please read more here](../using-the-dialog-builder-tool.md){:target="_blank"}.
3. The user intent window is displayed with the **Component Properties** tab selected by default.

<img src="../images/add-intent-node-img1.png" alt="Add intent node" title="Add intent node" style="border:1px solid gray;zoom:70%;">



## Configure the Node


### Component Properties

!!! Note

    The configurations you set up or edit in the Component Properties tab reflects in all the dialog tasks that use this node. These settings are the same for Intent and Sub-intent nodes.

On the **Component Properties** tab, you can modify:  

1. The **Name**,
2. The **Display Name**,
3. The **Description**.

<img src="../images/add-intent-node-img2.png" alt="Intent node Instance properties" title="Intent node Instance properties" style="border:1px solid gray;zoom:70%;">


### Instance Properties

Under the Instance Properties tab, you can configure the instance specific fields for the selected intent node. These settings are applicable only if you are connecting an existing intent node and only for the selected node instance, and will not affect other dialog tasks that may invoke the node you are working with.

You can add tags to build custom profiles of your AI Agent’s conversations. You can define a key and a value for each of the following:

1. Message – Define custom tags to be added to the current message in the conversation.
2. User – Define custom tags to be added to the user’s profile information.
3. Session – Define custom tags to be added to the current conversation session.

Here is an example of a dialog task that is connected as a subintent in a more complex one.

<img src="../images/add-intent-node-img3-instance-properties.png" alt="Intent node instance properties" title="Intent node instance properties" style="border:1px solid gray;zoom:70%;">


### NLP Properties

The NLP Properties are related to the underlying intent associated with a dialog. You can add these properties here or in the NLP – Training section. They are used to train the machine learning model to help improve intent identification for the dialog task. These properties are not used to execute this node in the flow.

To improve intent identification for the dialog task, add or define the following properties: 

1. **Machine Learning** settings to provide user utterances to improve the detection of this intent. [Learn more](../../../natural-language/training/machine-learning-engine.md){:target="_blank"}.
2. **Patterns and Rules** to capture this intent if the user’s utterance contains these specific patterns or matches the rule. [Learn more](../../../natural-language/training/fundamental-meaning.md#manage-patterns-and-rules){:target="_blank"}.
3. **Bot Synonyms** or related phrases for the user intent. [Learn more](../../../natural-language/training/fundamental-meaning.md#manage-synonyms){:target="_blank"}.
4. **Manage Context** tags as preconditions to identify the intent and define the output context to be set when this task is initiated. [Learn more](../../../intelligence/context-management.md){:target="_blank"}.

<img src="../images/add-intent-node-img4-nlp-properties1.png" alt="Intent node NLP properties" title="Intent node NLP properties" style="border:1px solid gray;zoom:60%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../images/add-intent-node-img5-nlp-properties2.png" alt="Intent node NLP properties" title="Intent node NLP properties" style="border:1px solid gray;zoom:60%;">


### Connections Properties

!!! Note

    If the node is at the bottom in the sequence, then only the connection property is visible.

Click the **Connections** tab and set the transition properties to determine the node in the dialog task to execute next.

Primary Intent nodes only allow you to select the next node to trigger.

If the Intent node you are working with does not represent the primary intent within the dialog task (if it follows another node), you can write conditional statements based on the values of any Entity or Context Objects in the dialog task, or you can use intents for transitions. For details on how to work with connection conditions, please see [Adding IF-Else Conditions to Node Connections.](../node-connections/nodes-conditions.md)

!!! Note

    These conditions are applicable only for this instance and will not affect this node when being used in any other dialog.

<img src="../images/add-intent-node-img6.png" alt="Intent node Connection properties" title="Intent node Connection properties" style="border:1px solid gray;zoom:70%;">  

The Connection Path property offers three default variants:

1. Not Connected - No specific next node is defined
2. End of Dialog - Explicitly ends the current dialog
3. Return to Flow - Terminates the Dialog Task and returns control to the Flow Builder. The Flow Builder resumes from the next node.
    * Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context.
    It has two deflection types - ‘ Automation’ and ‘Agent Transfer’.  
    <img src="../images/deflect-to-chat1.png" alt="Deflect to Chat" title="Deflect to Chat" style="border:1px solid gray;zoom:70%;">


!!! Note

    Deflect to Chat works only with Kore Voice Gateway Channels (Phone number or SIP Transfer).
