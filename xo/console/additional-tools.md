# Additional Tools

## Agent AI Widget

The **Agent AI** widget displays the agent bot and automation options that provide real-time assistance to the agent.

* **Agent Bot**: Displays the list of _Next Action_ suggestions based on the current conversation status and other interaction parameters.  
    <img src="../images/agent-bot.png" alt="Agent Bot" title="Agent Bot" style="border: 1px solid gray; zoom:70%;">

* **Automations**: Displays a list of pre-configured automated messages that agents can send to the customer based on the intent — for example, a _Welcome_ message under General information or a _Bill Payment Status_ message under Payments.  
    <img src="../images/automations.png" alt="Automations" title="Automations" style="border: 1px solid gray; zoom:70%;">

* **Proactive suggestions**: Use this option to enable or disable Agent AI auto suggestions for the next action.  
    <img src="../images/proactive-suggestions.png" alt="Automations" title="Automations" style="border: 1px solid gray; zoom:70%;">

## Responses

Agents can send canned responses to customers based on their specific scenarios using the Responses widget.

Contact Center AI has default response categories that include:

* **Greeting**: Agents can send a welcome message like “Hello, How may I assist you?”
* **Conversational**: Agents can send general conversation responses like a follow-up and delay.
* **Closing**: Agents can send closing statements, feedback, request to fill up a survey, thank you, and chat again. They can also close the chat because of no response from the customer, etc.
* **Transfer**: Agents can transfer the interaction to a manager or alternate chat group.
* **Abuse**: Agents can use fair (initial) and final warning levels when the customer uses abusive language.
* **Privacy**: Agents can send permission-based service responses that enhance conversational privacy.

These are permission-based service responses that enhance conversational privacy.  
<img src="../images/responses.png" alt="Responses" title="Responses" style="border: 1px solid gray; zoom:70%;">

## User Info

You can view additional information about the customer in this section. If needed, you can customize this widget and add more information.

For instructions on customizing the User Info widget, refer to the [Set User Info ](../flows/node-types/utils.md#set-user-info)guide.
<img src="../images/user-info.png" alt="User Info" title="User Info" style="border: 1px solid gray; zoom:70%;">

## History

The Conversation History widget shows both inbound and outbound call records, using phone numbers as unique identifiers to link all historical transcripts when new conversations begin. Audio files in messages include download links for the streams. Regular agent-user conversations display as back-and-forth transcripts in the interaction tab. The History widget persists as long as transcripts remain in the database. Clicking any tile shows the complete transcript for that specific interaction. It displays the following details:

* Date, year, and time of the conversation.
* The total duration of the interaction.
* Channel icon of the interaction.
* Name of the automation use case and total wait time in seconds (specific to that use case).
* For each specific interaction, it shows the following information:
    * Duration
    * Wait time
    * Final status
    * Direction (Inbound/Outbound)  
        <img src="../images/history-tab.png" alt="History" title="History" style="border: 1px solid gray; zoom:70%;">

    !!! note "Wait Time"

        The widget displays the total time a customer waits before an agent is assigned. This includes the initial queue wait and any additional waits that occur during agent or queue transfers.

* Clicking the conversation displays the transcript.  
    <img src="../images/transcript.png" alt="Transcript" title="Transcript" style="border: 1px solid gray; zoom:70%;">

### Translate Historical Digital Conversations

This feature enables users to translate past digital interactions directly within the Chat History Tab, using the same controls as in the Live Agent Console. It allows viewing both the original and translated versions of messages, ensures consistent translations across the platform, and removes the need for external tools.

Steps to translate historical conversations:

1. Click the **History** tab to view past conversations.
2. Select the conversation you want to translate, and then click **Translate** on the Live Interaction pane.
3. Choose the desired language from the drop-down list.  
    <img src="../images/language-dropdown.png" alt="Select Language" title="Select Language" style="border: 1px solid gray; zoom:70%;">
4. The conversation appears in the selected language.  
    <img src="../images/translated-historical-conversation.png" alt="Translated Conversation" title="Translated Conversation" style="border: 1px solid gray; zoom:70%;">
5. Click **Original** to display the conversation in its original language.  
    <img src="../images/original-conversation.png" alt="Original Conversation" title="Original Conversation" style="border: 1px solid gray; zoom:70%;">

## Internal Chat with Other Agents or Supervisors

As an agent, you can initiate an Internal Chat conversation if you face a challenge in resolving a customer issue. The agent console allows you to chat with other agents or supervisors and get assistance. This feature facilitates faster query resolution and increases customer satisfaction. Follow the below steps to initiate an Internal Chat conversation:

1. Click the **Internal Chat** icon from the upper right corner of the Agent Console.  
    <img src="../images/internal-chat.png" alt="Internal Chat Icon" title="Internal Chat Icon" style="border: 1px solid gray; zoom:70%;">

2. A pop-up window will display the list of available agents. Select an agent by clicking the agent’s name to initiate an internal chat.  
    <img src="../images/internal-chat-window.png" alt="Internal Chat Window" title="RInternal Chat Window" style="border: 1px solid gray; zoom:70%;">

3. You can now use the internal chat to call and message another agent and send attachments.
    <img src="../images/call-button.png" alt="Internal Chat to Call" title="Internal Chat to Call" style="border: 1px solid gray; zoom:70%;">

### Translate Internal Chats

Contact Center administrators can enable translation for agents' internal chats. [Learn more](../contactcenter/configurations/settings/translation-configurations.md).

Steps to translate Internal chats:

1. Click the **Translate** button.  
    <img src="../images/translate-button.png" alt="Translate Button" title="Translate Button" style="border: 1px solid gray; zoom:70%;">

2. Select the language for chat translation. Click **Mark as Default** to set it as the default translation language.  
    <img src="../images/translation-language.png" alt="Mark as Default" title="Mark as Default" style="border: 1px solid gray; zoom:70%;">  

    The internal chat translates into the selected language.  
    <img src="../images/text-translated.png" alt="Text Translated" title="Text Translated" style="border: 1px solid gray; zoom:70%;">