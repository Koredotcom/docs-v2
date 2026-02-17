# Conversation-driven Dialog Builder

Conversation Builder is a new dialog task editor which allows you to design and build a dialog task using conversational elements. It leverages the [Flow-based Dialog Task Builder](../../use-cases/dialogs/dialog-tasks-overview.md){target="_blank"}.

Developing the Dialog Task Builder involves manual effort in understanding and converting the conversation components into dialog components.

A Conversation-driven Dialog builder automatically converts conversation components into a Dialog Task. Designers can focus on visualizing the end-user conversation before building the dialog. Since the conversation flow is automatically generated, developers can focus on the more technical aspects. This not only reduces the development effort but also ensures that the AI Agent is closer to the actual design.

## Features

* An integrated approach for conversation designers (or business analysts) and developers to collaboratively build a dialog.
* Ability to define a custom, Gen-AI driven, or third-party based dialog template by providing just the intent name.
* Auto-generation of tasks, fine tuning the configurations and expand on top of the conversation flow to provide the necessary logic and fulfillment elements leading to a fully functional AI Agent.
* Improved usability and intuitiveness.
* Automatic sync between the views i.e changes to one view updates the other.

## New Dialog Builder

This is the new dialog builder with the options to drag and drop or add the necessary nodes. The entity, message, and other nodes along with the appropriate connections are generated automatically based on the conversation designed by the BA/conversation designer.

Developer can make configuration changes and add appropriate service calls etc. to make it a fully functional AI Agent.

You can access this view by clicking **Automation AI** > **Use Cases** > **Dialogs**.

<img src="../images/access-dialogs.png" alt="access dialogs" title="access dialogs" style="border: 1px solid gray; zoom:75%;">

## Create and Configure a Dialog

You can initiate a Conversation-driven Dialog Builder with the steps mentioned [here](../../use-cases/dialogs/using-the-dialog-builder-tool.md#create-a-dialog-task){target="_blank"}.

Configure the fields based on the option you select:

**(Option A): Start From Scratch**
    
  Enter the following and click **Proceed**.
<ul><li><b>Intent Name</b>: For example, "<i>Create Savings Account</i>."</li>
<li><b>Description</b>: Provide a description based on the intent for the dialog you're creating.</li>
<li><b>Intent Training</b> – Enter utterances that would trigger this intent.</li>
<li><b>More Options</b>: You can set the following options:</li>
     <ul><li><b>Customer Use Case</b>: Enable this option to make the use case available to the customer.</li>
     <li><b>Agent AI Use Case</b>: Enable this option to make the use case available on Agent AI for an agent and select one the following scenarios based on your requirement:</li>
       <ul><li><b>During Chats</b>: To manually or automatically trigger a use case by the agent when engaged with a customer in a chat based channel.</li>
       <li><b>During Email</b>: To manually or automatically trigger a use case by the agent when engaged with a customer in an email channel.</li>
       <li><b>During Calls</b>: To manually or automatically trigger a use case by the agent when engaged with a customer on a phone call.</li>
       <li><b>Launch By Menu</b>: To list the use case in the AgentAssist library allowing the agent to browse and find use case to trigger it.</li></ul>
     <li><b>Intent Settings</b>: You can set how the dialog task will be presented to the app based on the intent by selecting one of these options:</li>
       <ul><li><b>Sub intent dialog</b>: Task can be invoked only as a sub-task when another task is in progress. Task will not be presented as an app task when user requests for help.</li>
      <li><b>Hide from help</b>: Task will not be presented as an app task when the user requests for help. Users can invoke this task anytime while talking to the app.</li></ul>
      <li><b>Analytics - Containment Type</b>: When you leave a conversation without providing an input, then the platform considers that conversation as a <b>Drop Off</b>. Drop off also results in scenarios where the AI Agent asks input for feedback or when it asks if there is  ‘anything else’ with which it can help you. At times even if the tasks are helper tasks, they still lead to higher drop-off rates. To prevent this, while creating a dialog task you are provided with an option to configure the containment type as either drop-off or a self-service, when the user abandons the conversation. Based on the user abandonment type, select one of the following:</li>
    <ul><li><b>Abandonment as Self-Service</b>: Conversations abandoned by users while executing this Dialog are considered 'Self-service Conversations'. Other failures are considered 'Drop-off Conversations'.</li>
    <li><b>Abandonment as Drop Off</b>: Conversations abandoned by users or any failures during execution of this Dialog will be considered as Drop off.</li></ul>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>By default  'Abandonment as Drop Off' is selected as an option for Analytics – Containment Type. In this case, any conversation abandoned by the user is considered a drop-off during dialog execution.
If you select Abandonment as Self-Service, then any conversation abandoned by the user is considered a self-service conversation.  However, any script, service or any other failures are considered as drop-off conversations.</p></div>

<li><b>Conversation Context</b>: Define the conversation context based on the intent detection by choosing one of the following options:
<ul><li><b>Intent Preconditions</b>: The intent will be detected only if any of the context tags specified as pre-conditions are available in the context at the time of intent detection.</li>
<li><b>Context Output</b>: Define the context tags to be set in the context when this intent is initiated.</li></ul>
<img src="../images/create-custom-dialog.png" alt="create custom dialog" title="create custom dialog" style="border: 1px solid gray; zoom:75%;">
</ul></ul>

**(Option B): Gen AI**

Uses Gen AI to generate a dialog task from a preexisting template based on the intent you provide. Enter the following to generate the dialog and click **Generate**.

<ul><li><b>Intent Name</b>: For example, "<i>Create Savings Account</i>."
<li><b>Description</b>: Provide a description based on the intent for the dialog you're creating.</li></ul>
    
<img src="../images/gen-ai-based-dialog.png" alt="gen ai dialog" title="gen ai dialog" style="border: 1px solid gray; zoom:75%;">

A preview of the auto-generated dialog flow appears on the right pane. You can either click **Proceed** to create the dialog, or **Regenerate** to generate another dialog flow based on your intent.

<img src="../images/preview-gen-a-dalog.png" alt="gen ai dialog preview" title="gen ai dialog preview" style="border: 1px solid gray; zoom:75%;">

**(Option C): Marketplace**

To find and install a third-party dialog template out of 150+ categories and 30+ integrations, select **Marketplace**.
<img src="../images/market-place-dialogs.png" alt="marketplace dialogs" title="marketplace dialogs" style="border: 1px solid gray; zoom:75%;">

## Navigating Dialog Tasks

Please click [here](../../use-cases/dialogs/navigating-dialog-tasks.md){target="_blank"} to learn more.

## Dialog Builder Components

To learn more about the components available on the Dialog Builder Panel, click [here](../../use-cases/dialogs/navigating-dialog-tasks.md#dialog-task-builder-overview){target="_blank"}.

## Node Types

Please click [here](../../use-cases/dialogs/node-types/nodes-transitions.md#node-types){target="_blank"} to learn more about the node types supported on the Platform's Dialog Builder.