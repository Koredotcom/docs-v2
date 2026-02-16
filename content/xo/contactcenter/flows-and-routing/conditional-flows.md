# Conditional Flows

The **Conditional Flows** feature lets you customize experiences for common events like welcome, transfer, or an unknown Intent.

Here, you can configure the interaction flow based on the customer’s behavior in three scenarios:

1. **Out of Hours Flow**: When the customer tries to connect to an agent outside of working hours.
2. **No Agents Available Flow**: When agents with specific skills, required by the customer, are unavailable.
3. **In Queue Flow**: When a customer is waiting in the queue for an agent transfer. [Learn more](../../flows/node-types/agent-transfer.md).

Contact Center AI provides default Call and Chat flows for “Out of Hours” and “No Agents Available” scenarios. However, you can change the default flow and the message to the customer based on the current conversation channel.

You can configure Conditional Flows by going to **Contact Center AI** > **Flows & Routing** > **Conditional Flows**.

## Voice Flows

The following sections describe the configuration of conditional flows for a voice interaction.

### Out Of Operational Hours Flow

This flow plays a voice message to the caller who tries to reach an agent outside of operational, working, or non-business hours. Out-of-operational hours are considered outside of your configured Hours of Operation.

Click **Default Out of Operational Hours Voice Flow** to configure the Out of Hours flow. You will be redirected to the flow builder.
 <img src="../images/default-out-of-hours-voice-flow.gif" alt="Default Out of Operational Hours Voice Flow" title="Default Out of Operational Hours Voice Flow" style="border: 1px solid gray; zoom:70%;">

In the **General Settings** of the End Flow node, a text area displays the default message a customer hears when attempting to reach an agent outside of operational hours. You can edit this message, change language, or add another message by clicking **+ Add Another**.
 <img src="../images/default-voice-message.png" alt="Default Out of Operational Hours Message" title="Default Out of Operational Hours Message" style="border: 1px solid gray; zoom:70%;">

#### Out of Operational Hours Message Behavior

* The system picks up the Out of Operational Hours message from the configured conditional flow.  
* If no conditional flow is configured, the system plays a default backend message.  
* Backend default messages are not editable.  
* Administrators can override the default message by creating a conditional flow and attaching it to their existing flow.

### No Agents Available Flow

You can set the message played to the customer if the available online agents don’t have the required skills.

Click **No Agents Available Voice Flow** to configure the Out of Hours flow. You will be redirected to the flow builder.
 <img src="../images/default-no-agents-available-voice-flow.gif" alt="Default No Agents Available Voice Flow" title="Default No Agents Available Voice Flow" style="border: 1px solid gray; zoom:70%;">

In the **General Settings** of the End Flow node, a text area displays the default message a customer hears when no agents are available. You can edit this message, change language, or add another message by clicking **+ Add Another**.
<img src="../images/no-agents-available-voice-flow-message.png" alt="No Agents Available Voice Flow Message" title="No Agents Available Voice Flow Message" style="border: 1px solid gray; zoom:70%;">

#### Configure a Custom Out of Operational Hours or No Agents Available Message

* Create a conditional flow.  
* Add an End Flow node within the conditional flow.  
* Configure a custom message to play during off-hours or when no agents are available.

### Click-to-Call Flow

The Click-to-Call flow lets website visitors initiate a voice call directly from the Web SDK using a button in the chat widget. This provides a seamless escalation path from self-service automation to live agents.  
<img src="../images/click-to-call-button.png" alt="Click to Call" title="Click to Call" style="border: 1px solid gray; zoom:70%;">

When enabled, users can start a voice call from:

* The website before interacting with the bot.  
* During an active conversation with the bot.  
* During a live chat with an agent (in this case, the chat agent receives a closure notification and moves to After Call Work).

!!! Note

    The click-to-call flow will appear in the conditional flows if it is turned on from [Theme & Design](../../channels/add-web-mobile-client.md#ai-agent-theme-design).

#### Configuring Click-to-Call Flows

* Click-to-Call launches a flow in the Flow Builder.  
    * A default flow is published automatically.  
    * It includes an Agent Transfer node and the message: _“Please wait while we connect you to an agent.”_  
    * If you remove the Agent Transfer node, the system warns you before publishing.

* Administrators can build advanced flows by adding:  
    * Script nodes      
    * Message prompts       
    * Business hours checks     
    * Queue assignments     
    * Agent availability checks     
    * Agent transfers       
    * End flow

* Administrators can create multiple Click-to-Call flows for different use cases.  
* Each flow has a unique Flow ID.  
* Developers pass the Flow ID in the Web SDK configuration or in SDK headers to control which flow is triggered.  
* SDK headers can also pass user metadata (for example, page URL) to support conditional logic.

#### Developer Setup

To connect the Web SDK with a Click-to-Call flow:

1. Get the Flow ID from the Flow Builder.  
2. Add the Flow ID and any required headers to the Web SDK configuration—for example, user ID, session ID, page name, page URL, etc.  
3. Deploy SDK updates using npm, script tag, or source modification.

#### Web SDK Implementation Methods

* NPM Package users can install the updated package using standard npm update procedures. [Learn more](https://github.com/Koredotcom/web-kore-sdk/tree/v3/dev?tab=readme-ov-file#-getting-started).  
* Script Tag Users can change the version number in the script tag reference. [Learn more](https://github.com/Koredotcom/web-kore-sdk/tree/v3/dev?tab=readme-ov-file#other-options).  
* Source Code modifiers can manually copy the changes to their modified version.  

!!! Note

    Any modifications made to the SDK source code are performed at your own risk. Custom modifications may not receive full support in future SDK updates.

#### How It Works

1. A Click-to-Call button appears in the chat widget.  
    <img src="../images/connect-to-voice-agent.png" alt="Connect to Agent" title="Connect to Agent" style="border: 1px solid gray; zoom:70%;">
2. When a user clicks the button, a pop-up for closing the conversation is displayed. Click **Confirm**.  
    <img src="../images/continue-to-voice-conversation.png" alt="Continue to Voice" title="Continue to Voice" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        If the user switches to Click-to-Call, the chat agent is redirected to the After Call Work (ACW) stage.

3. The system initiates a voice call to the contact center.  
    <img src="../images/call-connected.png" alt="Call Connected" title="Call Connected" style="border: 1px solid gray; zoom:70%;">  

    * Relevant context (such as chat transcript, user ID, session ID, and page URL) is passed to the agent.  
    * The call routes through a configurable Click-to-Call flow in the Experience Flow Builder. 

## Chat Flows

The following sections describe the configuration of conditional flows for a chat interaction.

### Out Of Operational Hours Flow

This flow sets the auto-response message during non-business hours for automated and live chats. Out-of-operational hours are considered outside of your configured Hours of Operation. To configure this feature, follow these steps:

#### Messaging

In the **General Settings** tab, "**MessagingAT**" is selected from the dropdown menu under **Your Message to User**". A message field displays the default auto-response message to customers attempting to reach agents during out-of-operational hours. You can edit this message, change language, or add another message by clicking **+ Add Another**.
<img src="../images/auto-response-message-out-of-hours.png" alt="Out of Operational Hours Chat Message" title="Out of Operational Hours Chat Message" style="border: 1px solid gray; zoom:70%;">

Select the In Queue Flow to add the customer to the waiting queue of an agent.

#### Live Chat

In the **General Settings** tab, "**endingLiveChatAndOther**" is selected from the dropdown menu under "**Your Message to User**". A message field displays the default auto-response message to customers attempting live chat with agents during out-of-operational hours. The chat will end after the message is displayed. You can edit this message, change language, or add another message by clicking **+ Add Another**.
<img src="../images/end-live-chat-out-of-hours.png" alt="Out of Operational Hours End Live Chat Message" title="Out of Operational Hours Chat End Live chat Message" style="border: 1px solid gray; zoom:70%;">

### No Agents Available Flow

You can set the message played to the customer if the available online agents don’t have the required skills.

Click **No Agents Available Chat Flow** to configure the Out of Hours flow. You will be redirected to the flow builder. To configure this feature, follow these steps:

#### Messaging

In the **General Settings** tab, "**messagingEnd**" is selected from the dropdown menu under "**Your Message to User**". A Message field displays the default auto-response message to customers when no agents are available. The chat will end after the message is displayed. You can edit this message, change language, or add another message by clicking **+ Add Another**.
<img src="../images/messaging-end.png" alt="No Agents available Messaging" title="No Agents Available Messaging" style="border: 1px solid gray; zoom:70%;">

#### Live Chat

In the **General Settings** tab, "**LiveChatEnd**" is selected from the dropdown menu under "**Your Message to User**". A message field displays the default auto-response message to customers when no agents are available. The chat will end after the message is displayed. You can edit this message, change language, or add another message by clicking **+ Add Another**.
<img src="../images/live-chat-end-flow.png" alt="Live Chat End Messaging" title="Live Chat End Messaging" style="border: 1px solid gray; zoom:70%;">

#### On Error

In the **General Settings** tab, "**error**" is selected from the dropdown menu under "**Your Message to User**". A message field displays the default auto-response message to customers in case of any error. The chat will end after the message is displayed. You can edit this message, change language, or add another message by clicking **+ Add Another**.
<img src="../images/error.png" alt="On Error Message" title="On Error Message" style="border: 1px solid gray; zoom:70%;">

### In Queue Transfer Flow

The In Queue Transfer Flow is a pre-defined routing scenario triggered when an interaction enters a queue before an agent transfer. This ensures an interaction is routed to the queue where agents have the required skills.

Steps to create an In Queue Transfer Flow:

1. Click **New**.
<img src="../images/new-button.png" alt="New Button" title="New Button" style="border: 1px solid gray; zoom:70%;">
2. Enter the **Conditional Flow Name** and **Description** in the **New Outbound Flow** window.
3. Select **In Queue Transfer Flow** from the **Flow Type** dropdown menu.
4. Select the Channel (Voice/Chat) and click **Create & Continue to Flow Design**.  
<img src="../images/new-outbound-flow.png" alt="New Outbound Flow Window" title="New Outbound Flow Window" style="border: 1px solid gray; zoom:70%;">
5. In the **Waiting Experience** tab, select a flow from the In Queue Flow dropdown menu.
<img src="../images/waiting-experience-in-queue-flow.png" alt="In Queue Flow" title="In Queue Flow" style="border: 1px solid gray; zoom:70%;">

!!! Note

    You can create your own Conditional Flows for No Agents Available and Out of Hours by following steps 1-4.

## Update Conditional Flows

To update a conditional flow, click the (**⋮**) icon and then click **Update**.
<img src="../images/update-conditional-flow.png" alt="Update Conditional Flow" title="Update Conditional Flow" style="border: 1px solid gray; zoom:70%;">

## Delete Conditional Flows

To update a conditional flow, click the (**⋮**) icon and then click **Delete**.
<img src="../images/delete-conditional-flow.png" alt="Delete Conditional Flow" title="Delete Conditional Flow" style="border: 1px solid gray; zoom:70%;">

A pop-up message is displayed, click **Delete**. The flow is deleted.
<img src="../images/delete-confirmation.png" alt="Delete Confirmation" title="Delete Confirmation" style="border: 1px solid gray; zoom:70%;">

!!! Note

    * You cannot restore a deleted conditional flow. Please proceed with caution.
    * Default flows cannot be deleted.