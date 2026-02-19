# Agent AI Widget

The Agent AI is an AI powered solution to optimize contact center agent performance. It offers seamless assistance, promoting enhanced productivity and improved customer satisfaction. Its user-friendly interface and real-time support capabilities let agents effortlessly solve complex customer interactions.

The following features are available in the Agent AI widget:

* **Dialog Tasks**: Configured Use Cases that trigger when a customer’s utterance matches the content of a Dialog Task. Designed to help agents minimize manual typing by copy-pasting the relevant answers from the Dialog Tasks.
* **Playbooks**: Contact center agents are expected to provide the best customer experience despite high call volumes and complex interactions. To empower agents in this endeavor, Agent AI introduces the Playbook feature—a standard tool offering structured guidance for handling customer interactions.
* **Real-time Agent Coaching**: Real-time coaching for the agents based on the analysis of agent utterances and speech. You can set up specific utterances and speech patterns for Agent AI to take relevant actions, such as providing hints and nudges or emailing the manager when those patterns occur.
* **Real-time Sentiment Analysis**: Provides a continuous, time-based graph that displays the customer’s sentiment fluctuations. Agents get immediate visibility of the evolving emotional tone of the conversation and take proactive and empathetic responses.
* **Transcription**: Enhances agent accessibility and context by providing accurate transcriptions of user and agent voices during interactions. Offers a conversation overview and serves as the basis for automated Quality Assessment (QA). Agents receive a visual indicator when an intent is identified, improving real-time understanding and response. Also, agents in third-party desktops can pause and resume transcription to avoid recording PII data of customers.
* **Auto Summarization**: Automatically shortens lengthy information into concise summaries, enabling agents to respond promptly to customer inquiries. It helps agents quickly understand and make decisions.
* **Generate Summary**: Empowers agents to generate on-demand summary up to two times per agent, per conversation. This functionality is available even during agent transfers, allowing the receiving agent to regenerate a new summary and view the previous summary with timestamps.
* **Auto-Scroll Widget Content**: The system automatically navigates to the last message/content to display the latest message/content.
* **PII Redaction**: Securely removes Personally Identifiable Information (PII) from the agent's view and transcripts, ensuring a safe environment for customer interactions and compliance with privacy regulations.
* **Feedback**: Empowers agents to provide real-time feedback on suggestions. This continuous process forms a dynamic loop, allowing Machine Learning (ML) algorithms to continuously enhance and customize recommendations for accurate and contextually relevant outcomes.
* **Next Best Action**: Enhances the product by enabling seamless execution of Dialog Tasks for swift customer query resolution. The generative AI nodes and script nodes integration equips the system to efficiently communicate with external systems through API calls. This leads to improved customer experience and reduced necessity for frequent screen changes for agents. This allows agents to deliver contextually relevant next-best responses, contributing to a more streamlined and effective contact center operation.
* **Multi-language Support**: Provides multiple language support, enabling agents to switch between languages instantaneously. It ensures seamless communication with users in diverse linguistic environments. Agents can engage with customers in their preferred language, providing a more personalized and efficient support experience.
* **Knowledge AI**: Allows customization of Knowledge AI search result displays with control over search results presentation, the option to display auto suggestions in the Ask AgentAssist search bar, and optimization of the search experience through advanced Knowledge AI API configuration, offering both Basic and Advanced options.
* **Image or file attachment**: Allows image or file attachments during live conversations.
* **Theme selection**: Allows customization of the widget appearance by letting you select a Dark or Light theme.
* **In-line Digital Form**: Lets you easily collect customer information during live conversations.
* **Agentic Copilot**: The Agentic Copilot runs end-to-end conversations autonomously with Agents supervising the conversations. Agents can cancel, override, or edit the Agentic conversations, as needed. 

<img src="../widget-images/agent-assist-widget-v3-appearance.png" alt="agent-assist-widget-v3-appearance.png" title="agent-assist-widget-v3-appearance.png" style="border: 1px solid gray; zoom:80%;"/>

## Widget Tabs

The widget consists of five tabs—Search, My AI Agent (Bot), Assist, Transcript (for Voice channel), More–and two buttons (Settings and theme) to help agents perform different tasks and activities.

**Agent AI tabs**:

<img src="../WidgetContentUpdate_3.3.0/agent-assist-widget-tabs.png" alt="agent-assist-widget-tabs.png" title="agent-assist-widget-tabs.png" style="border: 1px solid gray; zoom:80%;"/>

### Search Tab

This tab shows all configured Dialog Tasks at the app level and also gives search capabilities, wherein agents can search Dialog Tasks, frequently asked questions (FAQ), Generative AI answers, web pages, files, and more. The content in this section automatically updates based on agent interactions. Agents can scroll through the list to view all available automations. Selecting the “Run with Agent input” button moves the Dialog Task to the **My AI Agent (Bot)** section, where it can be executed. The search functionality automatically updates the library list to match the search query. As you type, relevant words and phrases appear in real time.

<img src="../WidgetContentUpdate_3.3.0/updated-search-functionality.png" alt="updated-search-functionality" title="updated-search-functionality" style="border: 1px solid gray; zoom:80%;"/>

The following buttons are available in this section:

* **Run button**: For Dialog Tasks. Click to run a configured Dialog Task.
* **Run with Agent’s input**: Click this button to run a Dialog Task with agent’s input. The agent can customize the content and decide whether to send a dialog or not. Selecting this option automatically moves you to the My AI Agent (Bot) section.
* **Spyglass icon**: After entering the search content, click the “spyglass” icon in the search bar or press the “Enter” key to search.

#### Timeout, Server Errors, and No Search Results

The **Search** tab displays error messages for searches exceeding 10 seconds, dialog tasks not configured, and server issues.

* Timeout/dialog tasks not configured:  
<img src="../WidgetContentUpdate_3.3.0/timeout-first-time.png" alt="timeout-first-time" title="timeout-first-time" style="border: 1px solid gray; zoom:80%;"/>
* Search failing for the second consecutive time:  
<img src="../WidgetContentUpdate_3.3.0/timeout-second-time.png" alt="timeout-second-time" title="timeout-second-time" style="border: 1px solid gray; zoom:80%;"/>
* Server errors:  
<img src="../WidgetContentUpdate_3.3.0/server-error.png" alt="server-error" title="server-error" style="border: 1px solid gray; zoom:80%;"/>
* Dialog Tasks not found:  
<img src="../WidgetContentUpdate_3.3.0/dialog-tasks-not-found.png" alt="dialog-tasks-not-found" title="dialog-tasks-not-found" style="border: 1px solid gray; zoom:80%;"/>
* No matching search results:  
<img src="../WidgetContentUpdate_3.3.0/no-matching-search-results.png" alt="no-matching-search-results" title="no-matching-search-results" style="border: 1px solid gray; zoom:80%;"/>

### My AI Agent (Bot) Tab

My AI Agent (Bot) functionality allows agents to run the entire automation by themselves. Agents provide inputs to the app and obtain the desired results.

My AI Agent (Bot) tab displays the list of “next best action” suggestions for the agent based on the current conversation status and other interaction parameters.

<img src="../widget-images/mybot-tab.png" alt="mybot-tab.png" title="mybot-tab.png" style="border: 1px solid gray; zoom:80%;"/>

My AI Agent (Bot) functionality can be used in multiple circumstances (but not limited to): 

* If Automation fails, the agent can rerun it by providing inputs manually, which helps to reduce the average handle time (AHT) and makes it less frustrating for customers as they don’t have to repeat the same information.
* Agents can run My AI Agent (Bot) automation in parallel and seek information directly from the app.

### Assist Tab

The Assist tab is the primary interface for the agents. AgentAssist actively monitors conversations and offers assistance to agents. Through the Assist tab, customer intents in the form of Dialog Tasks, FAQs, KnowledgeAI, and Playbook are identified. Agents can run automation processes and send FAQs, Playbook body text, and Dialog Task text to users. The Assist tab displays Agentic Copilot messages, Dialog Tasks, Playbooks, Agent Coaching progression, a “bulb” icon (if there is a Dynamic Playbook match), and a summary generation button. For these features to be available, they should be configured on your device. This tab accepts file or image attachments during live conversations up to the size of 25 MB. If the file or image is not automatically detected, you can override and manually attach the file. It also features the "up" and "down" arrow buttons to scroll to the first and last messages in the Assist tab (these buttons appear only after the messages in the Assist tab are large enough to require a scroll bar). 

<img src="../widget-images/assist-tab.jpg" alt="assist-tab" title="assist-tab" style="border: 1px solid gray; zoom:80%;"/>  

The Assist tab facilitates the following:

* Guide agents through conversations by providing the best response suggestions.
* Display Agentic Copilot messages. After the configured **Welcome Events** are executed, the message *"Agentic Copilot is actively listening to your conversation and ready to assist automatically."* is displayed. 
    * Delays auto sending messages, allowing agents to cancel or manually send messages, and works across parallel chats.  
* Automatic retrieval of information from knowledge base (KB) based on user intent.
* Provide structured training and coaching to agents.
* Run app for customers based on customer-provided information.
* Provide a historical view to look at the previously executed automation.
* View Conversation History for chat conversations– The **History** tab shows the record of user-app interaction.
* Send/Copy button.
* Quickly scroll up and down to the first and last messages with the help of the **up**/**down** arrows.
* Feedback for Dialog Task and Knowledge AI.
* Attach files or images up to the size of 25 MB.
* Lets you collect customer information during live conversations through the In-line digital forms.
* Lets agents generate on-demand summary up to two times per agent, per conversation.

The Assist tab features the following:

* **Running Playbook stages:** Shows the total and adhered stages of a running playbook. For example, 1/3 means 1 out of 3 stages of a playbook has been adhered to.
* **Proceed to Close:** This button is available when a playbook is running. Clicking this button leads to a change in the playbook running status from Open to Close, and agents are prompted to ask if the customer needs any other help before ending the call.
* **Agentic Copilot messages**: The messages appear with a “Sending” button that delays auto-send for up to 10 seconds, based on the value set in the **Set message delay before auto send** field in the **Agent AI Widget Settings** section). During this time, Agents can click the **x** icon next to the **sending** button to cancel auto-send and choose to send or copy the message manually. 

    The auto-send functionality works uninterrupted across multiple parallel chats. The following screenshot shows the auto-send functionality button in progress along with the **Override** button:  
    <img src="../widget-images/agentic-app-in-widget.png" alt="agentic-app-in-widget" title="agentic-app-in-widget" style="border: 1px solid gray; zoom:80%;"/> 

   * To cancel auto sending, click “x” beside the “sending” button:  
    <img src="../widget-images/agentic-app-messages.png" alt="agentic-app-messages" title="agentic-app-messages" style="border: 1px solid gray; zoom:80%;"/> 

       * Click the “copy” icon to copy the message to the “chat response” field.
       * Click the “Send” button to send the message manually.
       * Click “Override” to discard the Agentic prompt and enter your own response manually.
       * To stop/resume the “auto send” function, click the “stop/resume” icon in the top-right corner of the Agent AI widget, next to the “pause/resume” icon.
       * To pause or resume the Agentic app function, click the “pause/resume” icon in the top-right corner of the Agent AI widget. 
   * When the **Allow Auto Send Message** feature is enabled, the timer for each Agentic response starts only after the previous message is sent.  
   * If the view doesn’t auto-scroll to the latest message, an **arrow** appears at the bottom-right, showing the number of stacked Agentic messages. Click the **arrow** to scroll to the latest messages.  
   * To regenerate a failed Agentic response, double-click the corresponding customer message.
   * If Agentic Copilot fails to send a response, the auto-send feature is disabled automatically.  
   * For messages outside the app’s defined scope, Agentic indicates it is not trained to respond. 

* **Playbook adherence button**: If a Playbook is running, adherence to a step happens automatically when the agent’s utterance matches exactly with the Playbook step adherence utterance. If it doesn’t match, the agent can click this button to indicate a step has been completed (adhered).
* **Send/Copy buttons**: These two buttons appear for Playbooks (if enabled) and Dialog Tasks. Click **Send** to send the exact message appearing on the widget, or click **Copy** to customize the message before sending it to the customer.
* **Up/down arrow buttons**: These buttons appear only after the messages in the Assist tab are large enough to require a scroll bar. Click the **up** and **down** arrows to go to the first and last messages respectively.
* **Resume button**: This button applies to the Playbooks and appears while switching to another playbook while one is already running.
* **List View**: This is an entity list button. When clicked, a pop-up displays a list of all entity entries present in the conversation.
* **Generate Summary**: This buttons lets agents generate on-demand summary up to two times per agent, per conversation.
* **Restart button**: When clicked, this button provides agents with two options: "Start over" and "Restart with Captured Inputs." These options allow agents to either restart the Dialog Task or continue it by providing input for each entity before restarting.
* **Termination button**: This button provides agents options to handle ongoing interactions effectively, allowing them to either terminate, cancel, or continue, which involves manual input of customer responses for entity responses.
    * **Option 1: Yes, Terminate**: Terminates the running Dialog Task and provides feedback.
    * **Option 2: No, Cancel**: Closes the pop-up with no actions taken.
    * **Option 3: Continue with Override Mode**: Agents manually enter the response to the customer’s conversation.
* **Maximize/Minimize button**: This button maximizes/minimizes the displayed page section.

#### Generate Summary

Agents can now click the **Generate Summary** button in the Assist tab to generate on-demand conversation summaries at any point during a conversation, up to two times per agent, per conversation. This functionality is available even during agent transfers, allowing the receiving agent to regenerate a new summary and view the previous summary with timestamps. Agents can also provide feedback for these summaries.

!!! note
    For this functionality, the **Generate Summary** toggle must be enabled in the **Widget Theming > Layout Customization > Assist Action Menu Layout** section. [Learn more](../configuration/widget-theming-layout-customization.md#assist-action-menu-layout){:target="_blank"}

The following screenshot shows the agent-generated summaries with timestamps along with the end-of-summary auto-generated summary:  
<img src="../widget-images/summary-generation.jpg" alt="summary-generation" title="summary-generation" style="border: 1px solid gray; zoom:80%;"/>

#### **Attachment Support**

AgentAssist accepts file or image attachments during live conversations. If the file or image is not automatically detected, you can override and manually attach the file. To maintain system efficiency, attachments are limited to one file at a time and must not exceed 25 MB in size.

If the file or image is automatically detected:

* A “waiting…” message appears, and upon successful attachment the file name is displayed in the input field and a “View” button appears to preview the file/image.  
<img src="../WidgetContentUpdate_3.3.0/automatic-detection-attachment_1.png" alt="automatic-detection-attachment" title="automatic-detection-attachment" style="border: 1px solid gray; zoom:80%;"/>

* Preview is confined within the widget, featuring a “back” button and a “close” icon.  
<img src="../WidgetContentUpdate_3.3.0/attachment-preview-back-and-close-buttons_2.png" alt="attachment-preview-back-and-close-buttons" title="attachment-preview-back-and-close-buttons" style="border: 1px solid gray; zoom:80%;"/>

If the file or image does not get detected:

* An “Override” option appears.
* Once you click “Override,” the “Choose File” option with an attachment icon appears. You can choose a file or an image from your local directory and reject or confirm the attachment by clicking the “close” sign or the “tick” mark.  
<img src="../WidgetContentUpdate_3.3.0/override-choose-file_3.png" alt="override-choose-file" title="override-choose-file" style="border: 1px solid gray; zoom:80%;"/>

Error Messages

The following error messages, along with an “exclamation” mark and count, appear during file/image attachment:

* For more than 25 MB file size:  
<img src="../WidgetContentUpdate_3.3.0/more-than-25mb-error_4.png" alt="more-than-25mb-error" title="more-than-25mb-error" style="border: 1px solid gray; zoom:80%;"/>

* For an unsupported file sent by the customer or attached by the agent:  
<img src="../WidgetContentUpdate_3.3.0/unsupported-file_5.png" alt="unsupported-file" title="unsupported-file" style="border: 1px solid gray; zoom:80%;"/>

#### **In-line Digital Form**

The in-line digital forms in the Assist tab lets you easily collect customer information during live conversations. To use this feature, configure the forms with dialog tasks, and select “Open inline form” in the Web/Mobile SDK Form Behavior setting.  
<img src="../WidgetContentUpdate_3.3.0/open-inline-form_6.png" alt="open-inline-form" title="open-inline-form" style="border: 1px solid gray; zoom:80%;"/>

The following features appear for in-line forms within the Assist tab:

1. Close icon: It appears on the top-right corner to let agents exit the form.
2. Confirmation option: It appears while closing the form to confirm if you want to discard the task.  
<img src="../WidgetContentUpdate_3.3.0/inline-form-confirmation-option_7.png" alt="inline-form-confirmation-option" title="inline-form-confirmation-option" style="border: 1px solid gray; zoom:80%;"/>

3. Fixed Frame Size: The form frame maintains a fixed height of 306 pixels.
4. Scrolling Capability: Scroll within the form frame to access and complete all form content.
5. Submit button: A sticky “Submit” button at the bottom of the form frame for easy access.  
<img src="../WidgetContentUpdate_3.3.0/inline-form-submit-button_8.png" alt="inline-form-submit-button" title="inline-form-submit-button" style="border: 1px solid gray; zoom:80%;"/>

Scenario Specific Configurations

Scenario 1: Third-Party Contact Center Applications

* You can’t send the form directly to the customers.
* You must manually fill out the forms once you open them.

Scenario 2: Smart Assist Application Suite

* You can send the form to the customers.
* You can send the form multiple times, but it can be accessed only once in its entirety.
* If the customer opens the form independently, you get an error message, preventing simultaneous access.  
<img src="../WidgetContentUpdate_3.3.0/inline-form-opening-error_9.png" alt="inline-form-opening-error" title="inline-form-opening-error" style="border: 1px solid gray; zoom:80%;"/>

### Transcript Tab

The Transcription feature is available only for the voice calls. When a call begins, the Transcript tab displays the real-time transcription of conversations between agents and customers in text format. The transcriptions are available for the agent throughout the session and provide a historical record for future reference. Agents can read through and copy/paste it. If the Auto-scroll Widget Content toggle is enabled in the Widget Settings page, the system automatically navigates to the last message content for new utterances. Agents can manually scroll up and down to read through the content.  
<img src="../widget-images/transcript-tab.png" alt="transcript-tab.png" title="transcript-tab.png" style="border: 1px solid gray; zoom:80%;"/>

### More Tab

The **More** (ellipsis) button lets agents share overall feedback on the Agent AI widget. Agents can select up to five positive or negative options and add comments (if the comment box is enabled). 
!!! note

    If the conversation is transferred, feedback from both agents is saved in the logs. 

#### Steps to Submit Overall Widget Feedback

1. Click the **More** (ellipsis) button > **Feedback**.  
    <img src="../widget-images/overall-widget-feedback-button.png" alt="overall-widget-feedback-button" title="overall-widget-feedback-button" style="border: 1px solid gray; zoom:80%;"/>  

2. Click one of the tabs—**Satisfied** or **Unsatisfied**. 

    !!! note

        Select **Satisfied** for positive and **Unsatisfied** for negative feedback messages.  

    <img src="../widget-images/positive-feedback.png" alt="positive-feedback" title="positive-feedback" style="border: 1px solid gray; zoom:80%;"/>  

3. Select the feedback messages from the list, and enter any additional comments. In the following screenshot, agent has selected the **Unsatisfied** tab, the **Irrelevant Dialogs** message, and entered a comment:  
    <img src="../widget-images/additional-comments.png" alt="widget-images/additional-comments" title="widget-images/additional-comments" style="border: 1px solid gray; zoom:80%;"/>  

4. Click **Submit**.

### Settings

The Settings tab gives you access to set:

* The listening mode of the app.
* Auto-scroll functionality of the content in the Assist, My AI Agent (Bot), and Transcript tabs.
* Available documents and FAQs.
* Option to choose a language.  
<img src="../WidgetContentUpdate_3.3.0/widget-settings-section.png" alt="settings-tab-updated" title="settings-tab-updated" style="border: 1px solid gray; zoom:80%;"/>

#### Proactive Mode

The Proactive Mode toggle allows you to put the app in listening mode. You can turn off the toggle if it is not working as expected.

#### Auto-Scroll Content

The Auto-Scroll Content toggle lets you manage the scrolling functionality of content in the Assist, My AI Agent (Bot), and Transcript tabs. You can turn on or off the toggle, as required.

#### Help & Support

This section gives you access to the available documentation, FAQs, and the Kore Academy courses. You can refer to these materials to answer questions or give reference to these to the customer.  

<img src="../widget-images/settings-tab-help&support.png" alt="settings-tab-help&support.png" title="settings-tab-help&support.png" style="border: 1px solid gray; zoom:80%;"/>

#### Language

This section lists the supported languages and lets you select a language of your choice. The selected language appears at the top of the section heading.

<img src="../widget-images/settings-tab-help&support-language.png" alt="settings-tab-help&support-language.png" title="settings-tab-help&support-language.png" style="border: 1px solid gray; zoom:80%;"/>

### **Theme Selection**

This section lets you customize the widget’s appearance with the help of a theme (dark or light). To select it, go to the widget’s Settings tab, and select Dark or Light.  
<img src="../WidgetContentUpdate_3.3.0/theme-icon.png" alt="widget-theme-selection" title="widget-theme-selection" style="border: 1px solid gray; zoom:80%;"/>

## Agent AI V2 vs V3 - Key Differences

Agent Ai V3 introduces many additional features and updates over Agent AI V2. This document highlights the differences visible on the user interface (UI) and at the feature-level.

### Difference in the UI

The following UI updates are done:

* **Tab Configuration**:
    * V2 features three tabs - **Assist**, **Library**, and **My AI Agent (Bot)** - and a search bar at the bottom.
    * V3 features four tabs - **Search**, **My AI Agent (Bot)**, **Assist**, and **Settings**.
* **Library Tab Transformation**: The **Library** tab in V2 has been transformed into the **Search** tab in V3.
* **Tab Placement**: In V2, tabs are positioned at the top but in V3 they are moved to the bottom of the screen.
* **Sentiment Analysis** **Display**: The **Sentiment Analysis** display is always visible in V3, but it was visible only upon a customer utterance match in V2. V3 has badges, an icon (for example, Positive, Negative and Neutral), and an emoji for every customer utterance. Clicking the badge takes you to the sentiment graph (as was the case in V2).
* **Proactive Button Location**: The **Proactive** button, earlier located at the top-right corner of the page in V2 has been moved to the **Settings** tab in V3.
* **Playbook Closure**: The **Proceed to Close** display for Playbooks in V2 has been replaced with a symbol in V3.
    * The **Widget Playbook** list in V2 displays only the Primary Playbooks and doesn’t display the Dynamic Playbooks.
    * The **Widget Playbook** list in V3 displays both the Primary and the Dynamic Playbooks.
* **Dialog Task Section:** The **Dialog Task** section in V2 has the customer’s utterance displayed at the top, but it is updated as a tool tip (accessible with a hover over the information icon) in V3.
    * **Additional Information in V3**: The **Dialog Task** section in V3 has additional information–**Wrong Suggestions?** feedback button.

**Agent AI V2**

<img src="../widget-images/agent-assist-widget-v2.png" alt="agent-assist-widget-v2.png" title="agent-assist-widget-v2.png" style="border: 1px solid gray; zoom:80%;"/>

**Agent AI V3**

<img src="../widget-images/agent-assist-widget-v3.png" alt="agent-assist-widget-v3.png" title="agent-assist-widget-v3.png" style="border: 1px solid gray; zoom:80%;"/>

### Differences at the Feature/Tab level

The following updates have been added at the feature level:

* **Dialog Task execution**: The Dialog Tasks in V2 had **Terminate** and **Override Input** buttons, but V3 has **List View**, **Restart**, **Terminate**, and **Maximize** functionality as symbols.

**Agent AI V2**

<img src="../widget-images/agentassist-v2-features-1.png" alt="agentassist-v2-features-1" title="agentassist-v2-features-1" style="border: 1px solid gray; zoom:80%;"/>

**Agent AI V3**

<img src="../widget-images/agent-assist-v3-features-tab-1.png" alt="agentassist-v3-features-2" title="agentassist-v3-features-2" style="border: 1px solid gray; zoom:80%;"/>

* The **Override Input** button in V2 and the input field under the running Dialog Task in V3 have the same functionality - prevent the widget from capturing the customer’s input. This functionality is useful when the agent has multiple conversations going on simultaneously. \

**Agent AI V2**

<img src="../widget-images/agent-assist-v2-features-2.png" alt="agent-assist-v2-features-2" title="agent-assist-v2-features-2" style="border: 1px solid gray; zoom:80%;"/>

**Agent AI V3**

<img src="../widget-images/agentassist-v3-features-2.png" alt="agentassist-v3-features-2" title="agentassist-v3-features-2" style="border: 1px solid gray; zoom:80%;"/>

### New Tab addition - Settings Tab

The **Settings** tab in V3 lets you to:

* Turn on/off the **Proactive mode**.
* Enable/Disable the **Auto-Scroll Content** toggle.
* Navigate to the **Documentation**, **FAQ**, and the **Kore Academy**.
* Select a language.