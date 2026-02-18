# Waiting Flows

While customers wait for an agent to assist with their query via voice or chat, you can customize their waiting experience to maintain engagement and improve customer satisfaction.

## Key Features

You can configure the Waiting Experience within Contact Center AI using the following features:

* Routing rules based on agent skills.
* Message options for both voice and chat requests:
    * Initial message when a request is assigned to a queue.
    * Hold audio for calls,
    * Deliver Periodic messages while contacts wait-both for calls and chats.
* Message language configuration.
* Callback if the wait time exceeds a specified limit.
* Send a voicemail if the call wait duration exceeds a specified limit, the queue position is too long, or the estimated wait time exceeds a specified limit.

## The Waiting Flows Live Board

You can find the Waiting Flows Live Board by navigating to **Contact Center AI** > **Flows & Routing** > **Waiting Flows**.  
<img src="../images/waiting-flows-page.png" alt="Waiting Flows Page" title="Waiting Flows Page" style="border: 1px solid gray; zoom:80%;"/>

### The Waiting Flows Live Board features

The Waiting Flows section displays the following fields:

| **Field**     | **Description**                                                                                                                                               |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name          | The name of the Waiting Experience entry.                                                                                                                     |
| Skill Rule    | The skill rules configured for the entry. Conversations matching these skill rules go through the waiting experience configured in this entry. |
| Description   | The description of the Waiting Experience entry.                                                                                                              |
| Edit (Icon)   | This icon lets you access the configuration window for a Waiting Experience entry, where you can update the available options.                                 |

## Add Waiting Experience

Steps to add a new waiting experience:

1. Go to **Flows & Routing** > **Waiting Flows**.
2. Select **+ New Waiting Experience**.  
    <img src="../images/add-new-experience-flow.png" alt="Add New Waiting experience" title="Add New Waiting experience" style="border: 1px solid gray; zoom:80%;"/>

3. In the Add New Waiting Experience window, you can see three tabs:

    1. **Configuration**, where you can set up the name, description, and routing rules;
    2. **Call Experience**, where you can configure the Waiting Experience for customers who call;
    3. **Chat Experience**, where you can customize the Waiting Experience for chats.

### Configuration

The Configuration section lets you set up the basics of your Waiting Experience entry.  
<img src="../images/add-new-waiting-experience.png" alt="Waiting Experience Configuration" title="Waiting Experience Configuration" style="border: 1px solid gray; zoom:80%;"/>

#### Name and Description

Provide a **Name** and a brief **Description** of the Waiting Experience.  
<img src="../images/name-and-description.png" alt="Name and Description" title="Name and Description" style="border: 1px solid gray; zoom:80%;"/>

#### Routing Rules

Define the configuration rules for the **Skill Group** and **Skill** waiting queue constraints.

1. Select the Skill Group, then the Skill that the Waiting Experience matches;
2. Select the row-wise **+Add** option to add a new row to the existing **Routing Rule** (OR) condition and the **Delete** icon to delete a row;
3. Configure the **AND/OR** conditional logic by hovering over a rule row and toggling between the tabs, as shown in the demo;
4. To configure the _AND_ condition, select **+ Add**;
5. To remove a rule, select the **Delete** (**ⓧ**) icon next to the row. To delete a rule section, select the **Delete** icon next to it.  
    <img src="../images/routing-rules-demo.gif" alt="Routing Rules Demo" title="Routing Rules Demo" style="border: 1px solid gray; zoom:80%;"/>

    The system first filters all Waiting Experiences that match the conversation skills. It then sorts them by the number of routing rules in descending order to select the most specific Waiting Experience. If multiple Waiting Experiences have the same number of rules, the system selects the one created earliest.

    Example: For a conversation with `Skill A` and `Skill B`, if one Waiting Experience requires only `Skill A` and another requires both `Skill A` and `Skill B`, the system selects the latter because it has more routing rules and provides a more specific match.

### Call Experience

Select the **Call Experience** tab to configure the waiting experience for customers contacting you using the voice channel.  
<img src="../images/call-experience.gif" alt="Call Experience" title="Call Experience" style="border: 1px solid gray; zoom:80%;"/>

On the Call Experience page, configure the settings as follows:

#### Initial Message

This message plays to customers waiting in the queue and is enabled by default. You can change the language, select the desired language, edit the message, and select **Done**.  
<img src="../images/initial-message-call.png" alt="Initial Message" title="Initial Message" style="border: 1px solid gray; zoom:80%;"/>

#### Agent Transfers

This message plays to customers when they're transferred to an agent or a queue and is enabled by default. You can change the language, select the desired language, edit the message, and select **Done**.  
<img src="../images/agent-transfers-call.png" alt="Agent Transfers" title="Agent Transfers" style="border: 1px solid gray; zoom:80%;"/>

#### Hold Audio

This audio plays to the customers on hold. Select the audio you wish to play from the Hold Audio dropdown list.  
<img src="../images/hold-audio.png" alt="Hold Audio" title="Hold Audio" style="border: 1px solid gray; zoom:80%;"/>

#### Periodic Messages

These messages play periodically to the customers waiting in the queue or put on hold. To configure them, follow these steps:

1. Set the number of seconds within which the periodic message plays;
2. Set the play order as either _random_ or _sequential_;
3. Select the type of playback-either _once_ or _looped_;
4. Edit the message and change the language by clicking one of the language options. Select **✔** to save or select **x Close** to discard your changes;
5. To add another message, select **+ Add Another**;
6. To delete a message, select the **Delete** icon next to it.  
    <img src="../images/periodic-messages-call.png" alt="Periodic Messages" title="Periodic Messages" style="border: 1px solid gray; zoom:80%;"/>

Periodic messages also enable organizations to let their customers to view or listen to their Queue Position and Estimated Wait Time (EWT).

You can configure the following variables:

* **Queue Wait Time**: {{queue.waitTime}} min-This shows based on the average waiting time in the queue. The calculation refreshes every 15 minutes.
* **Queue Position**: {{queue.position}}

#### CallBack Option

If the wait time exceeds a set limit, you can offer or force a callback for waiting customers as follows:

1. **Enable** the option to activate it;
2. Set the **digit key** that customers press to be redirected to the callback service. Waiting customers can either be **Offered** or **Forced** to receive a callback based on the settings configured here;
3. Edit the chat deflection message in the textbox. Use the language tab to change languages. Select **✔** to save or select **x** to discard your changes.  
    <img src="../images/callback-option.png" alt="Callback Option" title="Callback Option" style="border: 1px solid gray; zoom:80%;"/>

#### Voicemail

You can offer or force a voicemail for waiting customers in the following scenarios:

* Call waiting duration is greater than `x` minutes.
* Queue position is greater than `x.`
* Estimated wait time is greater than `x` minutes.

Steps to offer or force voicemail:

1. Enable the option to activate it;
2. Set the digit key that customers press to be redirected to the voicemail service. Customers waiting in the queue can either be offered or forced to receive a callback based on the settings configured here;
3. Edit the message in the textbox. Use the language tab to change languages. Select **✔** to save or select **x** to discard your changes.  
    <img src="../images/voicemail.png" alt="Voicemail" title="Voicemail" style="border: 1px solid gray; zoom:80%;"/>

### Chat Experience

Select the **Chat Experience** tab to configure the waiting experience for customers contacting you through chat.  
<img src="../images/chat-experience.png" alt="Chat Experience Tab" title="Chat Experience Tab" style="border: 1px solid gray; zoom:80%;"/>

In the Chat Experience section, you can configure the following settings:

#### Initial Message

This message appears to the contact waiting in the queue. By default, the initial message is enabled.

To edit this text and language, type your custom message in the textbox and select a language. Select **✔ Done** to save, or select **x Close** to discard your changes. The initial message feature is enabled by default.  
<img src="../images/initial-message-chat.png" alt="Initial Message" title="Initial Message" style="border: 1px solid gray; zoom:80%;"/>

#### Agent Transfers

This message appears when the customer transfers to an agent or a queue. By default, the agent transfers feature is enabled.

To edit this text and language, type your custom message in the textbox and select a language. Select **✔ Done** to save or select **x Close** to discard your changes.  
<img src="../images/agent-transfers-chat.png" alt="Agent Transfers" title="Agent Transfers" style="border: 1px solid gray; zoom:80%;"/>

#### Periodic Messages

These messages are periodically displayed to customers waiting in the chat queue. Configure them as follows:

1. Set the number of seconds within which the periodic message appears;
2. Choose whether to display the messages randomly or sequentially;
3. Select whether the message appears _once_ or _looped_;
4. Edit the message and change the language by clicking one of the language options. Select **✔ Done** to save or select **x Close** to discard your changes;
5. To add another message, select **+ Add Another**;
6. To delete a message, select the **Delete** icon next to it.  
<img src="../images/periodic-messages-chat.png" alt="Periodic Messages" title="Periodic Messages" style="border: 1px solid gray; zoom:80%;"/>

### Save

Select **Save**  at the bottom of the Edit Waiting Experience window to save your configuration. You can save all your settings by selecting any tab.  
<img src="../images/save-experience.png" alt="Save Experience" title="Save Experience" style="border: 1px solid gray; zoom:80%;"/>

## Edit Waiting Flows

Steps to edit Waiting Flow configurations:

1. In the **Waiting Flows** section, select the **Edit** icon for the waiting experience entry you want to edit.  
<img src="../images/edit-experience.png" alt="Edit Experience" title="Edit Experience" style="border: 1px solid gray; zoom:80%;"/>

2. In the **Edit Waiting Experience** window, modify the configurations as required, and select **Save**.
3. A success confirmation message appears.  
<img src="../images/confirmation-message.png" alt="Edit Confirmation" title="Edit Confirmation" style="border: 1px solid gray; zoom:80%;"/>

## Delete Waiting Experience

Steps to delete a Waiting Experience entry:

1. In the **Waiting Flows** section, edit the entry you want to delete;
2. Select the **Delete** icon;  
    <img src="../images/delete-confirmation.png" alt="Delete Confirmation" title="Delete Confirmation" style="border: 1px solid gray; zoom:80%;"/>

3. Select **Yes** to confirm your choice.  

    !!! Note

        Deleted Waiting Flows can't be restored. Proceed with caution.
