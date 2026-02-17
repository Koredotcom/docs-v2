# Dialog Node

The Dialog Node lets you start a new dialog task within an existing dialog task if the user intent changes.

For example, let us consider a travel assistant that has the following three dialog tasks:

* Flight Availability,
* Book a Flight,
* Book a Hotel.

While handling a user’s intention to check for Flight Availability, your AI Agent can detect a new user intention to Book a Flight. When this detection occurs, the AI Agent can switch from checking flight availability to booking a flight, by invoking the dialog task that specifically handles the Book a Flight intent.


## Key Features

The key features of dialog nodes are listed below:

* The ability to carry data from the current dialog task to the target dialog task as _entity pre-assignments_, described in a later section.
* When a target dialog task is invoked, the current dialog flow begins at the root intent of the new dialog task. If you write transitions for the dialog node, then the flow returns to the source dialog task after completing the target. If you do not write transitions, the dialog task ends after executing the target dialog task. This differs from an optional User Intent node, where the dialog flow processes a related user intent and then continues in the same dialog task thereafter.


## Add the Node

Setting up an dialog node in a dialog task involves the following steps:

1. Open the dialog task that you want to add the node to.
2. Add a **Dialog** node in the designated place. [Read more about adding nodes](../using-the-dialog-builder-tool.md){:target="_blank"}.

<img src="../images/dialog-task-node-img1.png" alt="Dialog node" title="Dialog node" style="border:1px solid gray;zoom:70%;">


## Configure the Node

### Component Properties

Once you place your node on the canvas, the dialog window is displayed with the **Component Properties** tab selected by default.

The configurations you set up or edit in the **Component Properties** tab reflect in all the dialog tasks that use this node.

On the **Component Properties** tab, you can modify:
    
1. The **Name,**
2. The **Display Name**,
3. The **Description**.

<img src="../images/dialog-task-node-img2.png" alt="Dialog node - Component properties" title="Dialog node - Component properties" style="border:1px solid gray;zoom:70%;">


### NLP Properties

The NLP Properties are related to the underlying intent associated with a dialog. You can add these properties here or in the NLP – Training section. They are used to train the machine learning model to help improve intent identification for the dialog task. These properties are not used to execute this node in the flow.

To improve intent identification for the dialog task, add or define the following properties: 

1. **Machine Learning** settings to provide user utterances to improve the detection of this intent. [Learn more](../../../natural-language/training/machine-learning-engine.md){:target="_blank"}.
2. **Patterns and Rules** to capture this intent if the user’s utterance contains these specific patterns or matches the rule. [Learn more](../../../natural-language/training/fundamental-meaning.md#manage-patterns-and-rules){:target="_blank"}.
3. **Bot Synonyms** or related phrases for the user intent. [Learn more](../../../natural-language/training/fundamental-meaning.md#manage-synonyms){:target="_blank"}.
4. **Manage Context** tags as preconditions to identify the intent and define the output context to be set when this task is initiated. [Learn more](../../../intelligence/context-management.md){:target="_blank"}.

<img src="../images/dialog-task-node-img3-nlp-properties1.png" alt="Dialog node - NLP properties" title="Dialog node - NLP properties" style="border:1px solid gray;zoom:50%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../images/dialog-task-node-img4-nlp-properties2.png" alt="Dialog node - NLP properties" title="Dialog node - NLP properties" style="border:1px solid gray;zoom:50%;">


### Connections Properties

!!! Note

    If the node is at the bottom in the sequence, then only the connection property is visible.

Click the **Connections** tab and set the transition properties to determine the node in the dialog task to execute next. You can write the conditional statements based on the values of any Entity or Context Objects in the dialog task, or you can use intents for transitions. If you have defined the _Transition Property_ as _End of Dialog_, then these settings are ignored.

!!! Note

    The conditions configured here are applicable only for this instance and will not affect the node when being used in any other dialog.

To set up component connection conditions, please follow the steps outlined in [Adding IF-Else Conditions to Node Connections.](../node-connections/nodes-conditions.md){:target="_blank"}

<img src="../images/dialog-task-node-img5.png" alt="Dialog node - Connection properties" title="Dialog node - Connection properties" style="border:1px solid gray;zoom:70%;">

The Connection Path property offers three default variants:

1. Not Connected - No specific next node is defined
2. End of Dialog - Explicitly ends the current dialog
3. Return to Flow - Terminates the Dialog Task and returns control to the Flow Builder. The Flow Builder resumes from the next node.
    * Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context.
    It has two deflection types - ‘ Automation’ and ‘Agent Transfer’.  
    <img src="../images/deflect-to-chat1.png" alt="Deflect to Chat" title="Deflect to Chat" style="border:1px solid gray;zoom:70%;">


!!! Note

    Deflect to Chat works only with Kore Voice Gateway Channels (Phone number or SIP Transfer).


### Instance Properties

Under the **Instance Properties** tab, you can configure the instance specific fields for the selected intent node. These settings are applicable only if you are connecting an existing intent node and only for the selected node instance and will not affect other dialog tasks that may invoke the node you are working with. Here is how to configure this section:

In the **Entity Pre-Assignments** section, you can pre-assign values from this session or node data to the entities required by the Dialog Task. Any remaining required values are handled by the sub-intent.  ([see below for details](#entity-pre-assignments)) If you want to reset the values, you need to use the keyword _“null”_, spaces would be ignored by the platform.

In the **Entity Post-Assignments** section, there is a list of entities available in the current task with an option to add custom variables. These entities are assigned with values from the linked dialogs session data. For example, _context.entities._ lists the entities from the linked sub-dialog for selection. The values are assigned once the linked dialog execution is complete.

!!! Important Notes

    * This option is available only if the Transition Options is set to return to the current node on task completion.  
    * Currently, there is a limitation when using URL entity types. URL values with http as opposed to https or without the www suffix will not work. If you want to reset the values, you need to use the keyword "null", spaces would be ignored by the platform.  
    * Many dialog transitions without user interference can lead to infinite dialog looping. To prevent such a situation, the AI Agent displays the error, 'Sorry something went wrong and I cannot complete your request now,' after 25 such transitions, as shown in the following screenshot. This error is displayed when the dialog nodes are connected either in a loop or in a linear manner.

<img src="../images/dialog-task-node-img6.png" alt="Dialog node - Instance properties" title="Dialog node - Instance properties" style="border:1px solid gray;zoom:70%;">

In the **Transition Options** section, you can define the flow to be followed once the task completes. You can choose from two options:

* Initiate the linked Dialog Task, and once complete, return to this node.
* End the current task and initiate the linked Dialog Task.

Click **Advanced Controls** to set up the below-listed options:

1. **Interruptions Behavior**
    1. **Use the task level _Interruptions Behavior_ Setting**: The AI Agent refers to the **Interruptions Behavior** settings set at the dialog task level.
    2. **Customize for this node**: By configuring this option you can customize the **Interruptions Behavior** settings for this node. Read the [Interruption Handling and Context Switching](../../../intelligence/conversation-management/manage-interruptions.md){:target="_blank"} article for more information.

2. **Custom Tags** defines tags to build custom profiles of your app conversations. [See here for more](../../../../analytics/automation/custom-dashboard/custom-meta-tags.md){:target="_blank"}. You can add tags for the following:
    1. **Message –** Define custom tags to be added to the current message in the conversation.
    2. **User –** Define custom tags to be added to the user’s profile information.
    3. **Session –** Define custom tags to be added to the current conversation session.

<img src="../images/dialog-task-node-img7.png" alt="Dialog node - Instance properties" title="Dialog node - Instance properties" style="border:1px solid gray;zoom:50%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../images/dialog-task-node-img8.png" alt="Dialog node - Instance properties" title="Dialog node - Instance properties" style="border:1px solid gray;zoom:50%;">


#### Entity Pre-Assignments

You can pre-populate data for the destination dialog task by:

* Adding values to the entity keys.
* Adding additional custom keys and values to pass data from the current dialog task `Context` object to the destination dialog task as needed.

By default, entity nodes defined in the target dialog task are displayed as key/value pairs. You can then define values for associated entities or add custom keys and values as needed using session and context variables.

Transitioning from the source dialog task to the destination dialog task occurs at the runtime when the user input matches one of any linked dialog tasks. When you map more than one dialog task, you can define which dialog tasks are displayed to the end-users using conditional transitions.

When you call another dialog task, you want to carry information from the first dialog task to the next dialog task. For example, customer information collected in a _Book a Flight_ dialog task is passed to the _Book a Hotel_ dialog task.

You can use the `mappedIntents` variable in the `Context` object which holds the reference of the intent nodes as well as the context of the source dialog task as shown in the following JSON syntax:

```
{ 'title': 'title of the link', 'link':' url for the link' ,'postbackpayload': 'system generated payload'}
```

For example, a link to `GetEmail` in the `Context` object can be:

```
{
   "title":"GetEmail",
   "link":"https://app.collab.ai/wf/1.1/market/users/bots/st-bb1eb3da-cfa7-5244-b241-b5042d333e76/dialogue/dg-15fd2927-219c-5795-b038-5b830718bea7/execute?nodeId=message2&contextId=dcx-f9bae173-4d69-53e4-9aa7-21e89aae776d&intent=GetEmail",
   "postbackpayload":"MappedDialog_dc-f7b42932-dc06-53ac-92c0-1db706794f91_dg-15fd2927-219c-5795-b038-5b830718bea7_dcx-f9bae173-4d69-53e4-9aa7-21e89aae776d"
}
```

You can access and present these variables in a prompt message to a user to display a list of mapped dialog tasks with the link, or as a list of choices. You can pass the source dialog context to the target dialog task even if the source dialog task is no longer actively using the Context object.

The value for the `postbackpayload` key is generated by the Platform and is used in some channels, such as _Facebook_ and _Slack, _which defines when a link or choice is made for a target dialog task.

Use the flag, `'reuseEntityWords: true',` as part of the pre-conditions to enable entity values extracted in a parent dialog to be automatically available and reused in downstream dialogs without needing to prompt the user again. [Learn more](dynamic-intent-node.md#entity-pre-assignments).

<hr>

**Related Links**  

* [Using Session and Context Variables in Tasks](../../using-session-and-context-variables.md)  
* [Context Object](../../../intelligence/context-object.md)