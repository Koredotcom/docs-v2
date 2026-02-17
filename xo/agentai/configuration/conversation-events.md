The Conversation Events section lets you configure events that trigger automatically at the beginning and end of a conversation. Here, you can configure the Welcome and Exit Events. 

* **Welcome Events**: You can configure dialog tasks and greeting messages that automatically trigger when a conversation is assigned to an agent.
* **Exit Events**: You can configure dialog tasks or conversation summary that automatically runs when the end-of-conversation event triggers.

## Welcome Events

Welcome Events are pre-configured messages or prompts that are automatically triggered when a conversation is assigned to an agent in the Agent AI widget. Welcome Events guide agents to handle inquiries effectively by streamlining workflows, lowering their Average Handle Times (AHT), reducing repetition, and contributing to enhanced customer satisfaction.

Managers can configure Welcome Events to provide consistent and relevant information to agents at the start of a conversation. These events can be used for chat, voice, and email interactions.

On the Welcome Events page, you can configure the welcome experience when the Agent AI widget is launched by defining the Welcome Event activities for agents. It has three sections:

* Configure On-Connect Dialog Task
* Configure Greeting Messages
* Priority Settings

### Configure On-Connect Dialog Task

In this section, you can select a pre-configured dialog task and channel and choose to extract intents from the selected dialog task when the Agent AI widget is launched.

#### Steps to Configure the On-Connect Dialog Task

1. Sign in to **AI for Service**.
2. Click **Product Switcher** > **Agent AI**.  
   <img src="../welcome-events-images/select-agent-ai.png" alt="select-agent-ai" title="select-agent-ai" style="border: 1px solid gray; zoom:80%;">
3. Click the **Agent AI** icon from the left menu.
4. Click **CONFIGURATION** > **Conversation Events** > **Welcome Events**.
5. Click to expand the **Configure On-Connect Dialog Task** section.
6. Click the **toggle** button to enable it (if it’s in **Disabled** status).
7. Select a channel—**Chat**, **Voice**, or **Email**.
8. Select a configured dialog task from the **Select Dialog** list.
9. Select the **Extract intents from On Connect Dialog task** radio button. 

    !!! note
        When enabled, the system terminates the current dialog and uses the message node's content to identify the Next Best Actions (suggestions) upon encountering it. Ensure the dialog flow contains only one message node, preferably at the end.  

10. Click **Save**.  
   <img src="../welcome-events-images/conversation-events.png" alt="conversation-events" title="conversation-events" style="border: 1px solid gray; zoom:80%;">

### Configure Greeting Messages

In this section, you can customize greeting messages at the beginning of the conversation. Also, you can add new greeting messages and copy existing greeting messages for agents to use when communicating with customers through the Agent AI widget. You can edit, delete, enable, or disable existing messages.

#### Steps to Configure Greeting Messages

1. Click **CONFIGURATION** > **Conversation events** > **Welcome Events**.
2. Click to expand the **Configure Greeting Messages** section.
3. Click the **toggle** button to enable it (if it’s in **Disabled** status).
4. Select a channel—**Chat**,**Voice**, or **Email**.
5. Select a language. The app's language appears by default.
6. Click **+ Add Message** > **New Messages** to add a new greeting message.  
   <img src="../welcome-events-images/adding-new-greeting-messages-2.png" alt="adding-new-greeting-messages" title="adding-new-greeting-messages" style="border: 1px solid gray; zoom:80%;"> 
7. Enter the new greeting message in the **Message** box and click **Add**.  
   <img src="../welcome-events-images/configure-and-add-new-greeting-message-3.png" alt="configure-and-add-new-greeting-message" title="configure-and-add-new-greeting-message" style="border: 1px solid gray; zoom:60%;">

      The new greeting message gets added to the list of existing messages.

8. Click **+ Add Message** > **Copy from Chat** to copy existing messages in **Chat**. 

    !!! note
        **Copy from Voice** appears for the Chat channel and **Copy from Chat** appears for the Voice channel.  
         
      <img src="../welcome-events-images/copying-from-chat-messages-4.png" alt="copying-from-chat-messages" title="copying-from-chat-messages" style="border: 1px solid gray; zoom:80%;"> 
      
      a. Select the **Welcome Messages** button to select all the existing messages or select individual messages one by one.
      
      b. Click **Confirm**.

      All selected messages appear in the list of existing messages.

9. Click **Display Random Message** to enable all configured messages and randomly display any three on the agent’s screen.  
   <img src="../welcome-events-images/display-random-message-and-select-message-language-5.png" alt="display-random-message-and-select-message-language" title="display-random-message-and-select-message-language" style="border: 1px solid gray; zoom:80%;">  

10. Click the **down-arrow** to change message language.
11. Click the **edit** button against an existing message to modify it.
12. Make the changes and click **Update**.
13. Click the **delete** button against an existing message to delete it. On the **Delete Message** popup, click **Yes**.
14. Click the **enable** or **disable** toggle against a message to enable or disable it.
15. Click **Save**.

### Priority Settings

In this section, you can select what to run first between the dialog tasks and greeting messages.

#### Steps to Set Priority

1. Click **CONFIGURATION** > **Welcome Events**.
2. Click to expand the **Priority Settings** section.
3. Select the radio button **On-Connect Dialog Task** or **Greeting Messages**  
   <img src="../welcome-events-images/priority-settings-6.png" alt="priority-settings" title="priority-settings" style="border: 1px solid gray; zoom:80%;">  
4. Click **Save**. 

    !!! note
        If **Agentic Copilot** is enabled in **Widget Settings** > **Agent AI Channel Specific Settings**, the message *"Whenever Agentic Copilot is enabled, it will run after the configured Welcome Events"* appears in the **Priority Settings** section:  

## Exit Events 

Exit Events mark the end of a customer interaction. This section lets you configure a dialog task, conversation summary, or an Agentic app to run automatically when the end-of-conversation event triggers. While multiple options are available, you must select one of the following combinations: 

* **Configure End of Conversation Dialog Task** + **Conversation Summary (OOTB Kore Summarization)**
* **Conversation Summary** + **Configure End of Conversation Agentic App**  

### Configure End of Conversation Dialog Task 

This section lets you select a dialog task to run automatically when an exit event triggers at the end of a conversation. To enable this, you must disable both the **Conversation Summary**> **Custom Dialog Task** and **Configure End of Conversation Agentic App** options. 

#### Steps to Configure End-of-Conversation Dialog Task 

1. Sign in to **AI for Service** > **Agent AI**.
2. Go to **Configurations** > **Conversation Events**.  
3. Click **Exit Events**.  
   <img src="../welcome-events-images/exit-events-1.png" alt="exit-events" title="exit-events" style="border: 1px solid gray; zoom:80%;">  

4. Select a channel—**Chat**, **Voice**, or **Email**. 
5. Click the toggle to enable **Configure End of conversation Dialog Task**.  
   * The following confirmation message appears, if the **Conversation Summary** > **Custom Dialog Task** was enabled:  
    <img src="../welcome-events-images/disable-custom-summarization-2.png" alt="disable-custom-summarization" title="disable-custom-summarization" style="border: 1px solid gray; zoom:80%;">  

       !!! note

           For new accounts, the **Conversation Summary** > **OOTB Kore Summarization** is enabled by default.  

   * The following confirmation message appears, if the **Configure End of Conversation Agentic App** was enabled:  
    <img src="../welcome-events-images/disable-agentic-exit-events-3.png" alt="disable-agentic-exit-events" title="disable-agentic-exit-events" style="border: 1px solid gray; zoom:80%;">  

6. Click **Yes, Proceed**. 
7. Click to expand the **Configure End of conversation Dialog Task** section. 
8. Select a dialog task from the **Select Dialog** dropdown list.  
   <img src="../welcome-events-images/select-dialog-4.png" alt="select-dialog" title="select-dialog" style="border: 1px solid gray; zoom:80%;">  
9. Click **Save**. 

### Conversation Summary

This section lets you configure how to autogenerate a conversation summary at the end of a conversation. Agents can copy the summary and save it into the **Notes** or **Remark** field while closing the conversation. To use the Custom Dialog Task option, you must disable the **Configure End of Conversation Dialog Task** setting. You can select one of the following options:

* **OOTB Kore Summarization**: Kore’s default auto summarization.  
* **Custom Dialog Task**: Lets you select a custom dialog task to customize the Conversation Summary. Click [here](../configuration/configure-auto-summarization-with-custom-dialog-tasks.md){:target="_blank"} to learn more about customizing the summarization process. This field displays a list of dialog tasks or child apps based on app selection at the app level. At the app level, if you have selected:  
   * **Universal App**: The backend logic detects it and populates its associated Child Apps. You can expand each Child App to view and select its dialog task.  
   * **Child App/Normal/Singular App**: The Dialog Tasks list displays dialogs linked to the selected app, and you can select any from the displayed list.  

!!! note

    Conversation Summary configuration is applicable only for third-party agent desktops.

#### Steps to set Conversation Summary 

1. Sign in to **AI for Service** > **Agent AI**.
2. Go to **Configurations** > **Conversation Events**.
3. Click **Exit Events**.
4. Select a channel—**Chat**, **Voice**, or **Email**.
5. Click the toggle to enable **Conversation Summary**.
6. Select either **OOTB Kore Summarization** or **Custom Dialog Task**.
    1. If you select **Custom Dialog Task**, the following confirmation message appears (if the **Configure End of Conversation Dialog Task was enabled**):  
    <img src="../welcome-events-images/disable-end-of-conversation-5.png" alt="disable-end-of-conversation" title="disable-end-of-conversation" style="border: 1px solid gray; zoom:80%;">   

    2. Click **Yes, Proceed**.
    3. Select a **dialog task** from the **Select Dialog** dropdown list:  
    <img src="../welcome-events-images/custom-dialog-task-6.png" alt="custom-dialog-task" title="custom-dialog-task" style="border: 1px solid gray; zoom:80%;">   

7. Select or clear the **Show Submit button** option. 
8. Click **Save**. 

### Configure End of Conversation Agentic App 

This section lets you select an Agentic App to trigger when a conversation ends. You can select either the same app used in Agentic Copilot or a different Agentic App. This toggle is disabled unless **Agentic Copilot** is enabled in **Widget Settings > Agent AI Channel Specific Settings**. Enabling it disables the **Configure End of Conversation Dialog Task** setting. The following options are available: 

* **Use same app as Agentic Copilot**: Uses the same app configured for Agentic Copilot.
* **Select a different Agentic App**: Displays a dropdown list of available Agentic Apps (excluding the app used by Agentic Copilot).  

#### Steps to Configure End of Conversation Agentic App  

1. Sign in to **AI for Service** > **Agent AI**.
2. Go to **Configurations** > **Conversation Events**.
3. Click **Exit Events**.
4. Select a channel—**Chat**, **Voice**, or **Email**.
5. Click the toggle to enable **Configure End of Conversation Agentic App**.
6. The following confirmation message appears, if **Configure End of Conversation Dialog Task** was enabled.  
<img src="../welcome-events-images/disable-end-of-conversation-dialog-task-7.png" alt="disable-end-of-conversation-dialog-task" title="disable-end-of-conversation-dialog-task" style="border: 1px solid gray; zoom:80%;">  

7. Click **Yes, Proceed**.
8. Select **Use same app as Agentic Copilot** or **Select a different Agentic App** option.  
    1. If you select the **Select a different Agentic App** option, the following screenshot appears:  
      <img src="../welcome-events-images/different-agentic-app-8.png" alt="different-agentic-app" title="different-agentic-app" style="border: 1px solid gray; zoom:80%;">  
    2. Select an **Agentic App** from the dropdown list.  
9. Click **Save**. 