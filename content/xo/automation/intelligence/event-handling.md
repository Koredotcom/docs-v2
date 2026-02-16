
# Intent Events

Define the behavior of the AI Agent during intent identification from user utterances to customize the user experience.

## Intent not Identified 

When an AI Agent cannot understand the user’s intent, this event determines the subsequent behavior. You can choose one of the following options:

* **Show a standard message from the standard responses**. [Learn more](../intelligence/conversation-management/standard-responses.md){target="_blank"}.
* **Automatically run a dialog task**. You can use the dropdown to select the task you want to run.
    <img src="../images/intent-not-available-event.png" alt="intent not available" title="intent not available" style="border: 1px solid gray; zoom:75%;">

## Ambiguous Intents Identified 

When the NLP engine identifies ambiguous intents from user utterances, by default, the AI Agent displays a list of those intents during the conversation and requests the user to make a selection.

This default behavior is ideal for most of the use cases. However, using the Ambiguous Intents Identified event, you can customize this behavior for specific use cases. The event is triggered in the following scenarios:

* Two or more ‘definite’ intents are identified.
* Two or more ‘possible’ intents are identified and their scores lie within the defined proximity thresholds.
* Only low-confidence intents are identified from the Knowledge Graph, and no other intents are identified from other engines.

You can build custom business logic to analyze ambiguous intents, define appropriate conversation flow using a Dialog Task, and associate it with the Ambiguous Intents Identified event. 

By customizing the flow, you can avoid displaying ambiguous intents to the end user and redirect the conversation to the desired task. You can use the `koreUtil.getAmbiguousIntents()` function to retrieve the list of ambiguous intents and their confidence scores. For more information on the function, click [here](../../apis/automation/koreutil-libraries.md#koreutilgetambiguousintents).

<img src="../images/ambiguous-intents-event-window.png" alt="ambiguous intents event" title="ambiguous intents event" style="border: 1px solid gray; zoom:75%;">

### Event Configuration

To configure the Ambiguous Intents Identified event follow these steps:

1. Go to **Conversation Intelligence > Events > Intent Events**. By default, this event is disabled for all existing and new AI Agents.
2. Click **Configure** to enable the event.
    <img src="../images/configure-intent-events.png" alt="configure intent events" title="configure intent events" style="border: 1px solid gray; zoom:75%;">

    !!!note
        If not enabled, the list of ambiguous intents is presented to the user during the conversation.

3. You can select the following options in the Configuration panel:
    * **Present all the qualified intents to the end-user for disambiguation**: This is the default selection in which the standard response related to the ambiguous intent(s) is presented. [Learn more](../intelligence/conversation-management/standard-responses.md).

    * **Automatically run a Dialog Task**: This option lets you select a Dialog Task. Select this option if you want to build custom business logic to analyze the ambiguous intents, define appropriate conversation flow using a Dialog Task, and associate it with the Ambiguous Intents Identified event. [Learn more](../../automation/use-cases/dialogs/dialog-tasks-overview.md). 
    <img src="../images/ambiguous-intents-identified.png" alt="ambiguous intents identified" title="ambiguous intents identified" style="border: 1px solid gray; zoom:75%;"></li></ul>

4. Click the button **Save & Enable** to enable the event.

    !!! note 
        
        During the conversation with your AI Agent, if there are ambiguous intents, a message is displayed in the Debug Log that Multiple intents are identified, and the **Ambiguous Intents Identified event is initiated**.

    <img src="../images/multiple-intents-identified.png" alt="multiple intents identified" title="multiple intents identified" style="border: 1px solid gray; zoom:75%;">

### Interruption Management

When the event is enabled, interruption behavior is handled as defined at the node, dialog, or app level for ambiguous intents.

The only exception is when you select the Continue the current task and add a new task to the follow-up task list option. The conversation continues as is with the current task, and any interrupting task will not be added to the follow-up list. [Learn more](../intelligence/conversation-management/manage-interruptions.md){target="_blank"}.

## Variable Namespaces

You can configure Variable Namespaces for Events by going to **More Options** > **Manage Variable Namespaces** at the top of the **Events** screen.

You can use the _Manage Variable Namespaces_ to associate the Variable Namespaces to be used with the Events. This option will be visible only when the Variable Namespace is enabled for the AI Agent. For more information. [Learn more](../../app-settings/managing-namespace.md){target="_blank"}.

<img src="../images/manage-namespaces-event-handling-window.png" alt="manage namespaces" title="manage namespaces" style="border: 1px solid gray; zoom:75%;">
