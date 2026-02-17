# Sub-Intents & Follow-up Intents

Human conversations are dynamic since they tend to switch between intents and entities, often combining multiple things into one.

The Platform offers **Sub Intents** that are defined at the task level, and are the easiest way to shape dialog without having to manage context manually. This enables conversations to seamlessly branch into related intents as part of the primary intent, and work only within this context. An output context is added to the parent intent and an input context of the same name is added to the newly created child intent. Thus, the child intent can only be matched when the parent intent was matched during a previous portion of the conversation.

**Follow-up Intents** are helpful during the course of a dialog, a user utterance or intent cannot be attended to immediately. You can access such intents that come up during the execution of a different task, but that was never acted upon. These are stored in the _FollowupIntents_ array. You can then opt to ask users at the end of the dialog flow to select and perform tasks from a list of identified follow-up intents. You can also access this list to further train and refine their dialog flows.

## Sub Intents

There are three ways to define Sub Intents:

* **Add an Intent Node within the Dialog Task**: This intent is not available for any other dialog and since it is within the dialog, it is within its context. [Learn more](../use-cases/dialogs/node-types/working-with-the-user-intent-node.md){target="_blank"}.
* **Use an existing Dialog Task**: This intent can be used over multiple dialogs. You can define the dialog as Sub Intent-only dialog and it cannot be invoked by user utterance nor will it appear in the list of available tasks when the user says help. [Learn more](../use-cases/dialogs/node-types/working-with-the-dialog-node.md){target="_blank"}.
* **As linked Tasks**: The above two options are used when the sub intent is part of the dialog flow. For cases where the sub intent can be invoked by the user anywhere within the dialog, use the Manage Sub Intents and Exceptions option.

## Linked Task Exceptions 

To facilitate exceptions in switching between specific tasks, you can utilize the **Linked Tasks Exceptions** in dialog tasks. When you link a dialog task to another, you can define customized Hold and Resume properties to transition to that particular task. Additionally, you can write one or more conditional expressions using any entity values or context to ensure the Hold and Resume rules come into effect only if those conditions are met.

As a part of defining the exceptions, you can also define entity pre-assignments and post-assignments.

* Using **pre-assignments**, you can map the parameters in the current context that need to be pre-populated in the next intent. You can pass the current context values to the entities present in the linked task or define custom variables to pass the current context values.
* Using **post-assignments**, you can map the context values in the linked task back to the main task from where the linked task was invoked. You can pass the linked task context values to the entities present in the main task or define custom variables to pass the linked task context values. 

!!!note

    Post-assignment is applicable only when the main task is resumed

### Adding Exceptions

To add exceptions to transition to a specific task, follow the steps:

1. Open the dialog task whose settings you want to customize.
2. On the top-right of the Dialog Builder, click the **more** options icon and select **Manage Interruptions**.
3. On the Manage Interruptions page, click the **Add sub-intents or exceptions** link.
4. On the Add sub-intents or exceptions page, from the **Tasks** drop-down list, select a task to link. You can select multiple tasks.
5. Define the **Hold and Resume settings** from the list of options below and click **Save**.
6. The Manage Interruption Behavior page opens with the selected tasks listed under **Exceptions**.

Click [here](./conversation-management/manage-interruptions.md){target="_blank"} to learn how to manage interruptions.

<img src="../images/add-exceptions.png" alt="add exceptions" title="add exceptions" style="border: 1px solid gray; zoom:75%;">

### Adding Conditional Expressions

You can optionally **add conditional expressions** within which the transition should take place and **map parameters** for the selected task. 

To add conditional expressions, follow the below steps:

1. Click the name of the task under **Exceptions**.
2. Under **Interruption Precondition**, click **Add If Condition**.
3. Select the **Entity** or **Context** option based on which you want to define the condition.
4. Select an Entity or enter a Context as per your selection.
5. Select a **connector** from the list of options: _Exists_, _equals to_, _greater than equals to_, _less than equals to_, _not equal to_, _greater than_, or _less than_.
6. Under the **value** column, enter a comparative value.
7. To add more conditions, click **Add If**, and repeat steps 1-6. You can add any number of conditions. When you write multiple conditions, all the specified conditions must be met for the Hold and Resume settings to take effect.

!!!note "Important Considerations"

    1. Using exceptions, you can link the same target task to a source task multiple times by defining different pre-conditions. When you do so, the Platform executes the exceptions in the order they are defined.
    2. When none of the pre-conditions meet an exception, the Platform adds the intent to the Follow-up Intents array.
    3. The Platform evaluates the pre-conditions only when it encounters a user intent and tries to determine whether to execute it or not. It does not evaluate the pre-conditions when developers initiate the linked task through transitions or when the end-user chooses to run the task at the end of the dialog.

<img src="../images/interruption-precondition.png" alt="interruption precondition" title="interruption precondition" style="border: 1px solid gray; zoom:75%;">

## Parameter Mapping

To add entity pre-assignments, follow these steps after you enter conditional expressions for an exception:

1. On the Exception Task window, under the **Parameter Mapping** section, Entity pre-assignment lists the entities needed for the on-hold task.
2. Enter a direct value or a context reference next to an entity for which you want to pass a value.
3. To pass values through a variable, click **Add** **Key/Value** and enter a variable name and value.

To add entity post-assignments, follow these steps after you enter conditional expressions for an exception:

1. On the Exception Task window, under the **Entity post-assignment** section, you can see the list of entities in the current task.
2. Enter a direct value or a context reference next to an entity for which you want to pass a value.
3. To pass values to a variable, click **Add** **Key/Value** and enter a variable name and value. 
 
!!!note

    Post-assignment is applicable only when the main task is resumed.

If you want to reset the values, you need to use the keyword “null”, spaces would be ignored by the Platform.

<img src="../images/book-flight-example.png" alt="book flight example" title="book flight example" style="border: 1px solid gray; zoom:75%;">

## Follow-up Intents

Follow-up intents refer to intents that came up in user conversations during the execution of another task, but the assistant has not attended to. As a part of dialog task execution, the AI Agent captures all unattended interruptions and makes them accessible to the AI Agent in the _FollowupIntents_ array.

However, the AI Agent does not capture Follow-up Intent if you select the **Do not Hold and Resume** option at the node, task, or app level, whichever is applicable to the task flow.

You can enable the dialog task to present all the Follow-up tasks to the user at the end of the dialog so they can choose to execute any of them. To do so, follow these steps:

1. Open the dialog task whose settings you want to customize.
2. On the top-right of the Dialog Builder, click the **more** options icon and then click **Dialog Settings**.
3. The **Follow-up Task** section shows the following options:
<img src="../images/follow-up-task.png" alt="follow up task" title="follow up task" style="border: 1px solid gray; zoom:75%;">

<ul><li><b>Yes</b>, at the end of this dialog ask the user to select and perform a task from the <i>Follow-up task</i> list: Select this option to show all the unattended intents to the user at the end of the dialog. To customize the message sent to the user, click <b>Manager Response</b> next to the option.</li>
<li><b>No</b>, the <i>Follow-up task</i> list is handled as part of the node connections: This is the default option. If this option is active, the AI Agent does not present the Follow-up intents to the users at the end of the dialog. However, a developer can access this using the <i>FollowupIntents</i> array.</li></ul>