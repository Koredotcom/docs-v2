# Agentic Copilot: Enhancing Efficiency, Control, and Customer Experience 

The Agentic Copilot is a powerful extension of the Agent AI widget that automates end-to-end customer conversations while keeping human agents fully in control. It enables Agent AI to proactively send contextual, empathetic responses without requiring manual input. Agents can supervise every interaction, cancel or override automated replies, edit responses, use the “[Custom Tab](../../configuration/widget-theming-layout-customization.md#add-a-custom-tab){:target="_blank"}” to manually run dialog tasks, and perform LLM-powered searches—allowing them to focus on service quality rather than repetitive tasks. 

Agentic Copilot blends automation with human judgment, delivering fast, accurate, and personalized support at scale. It boosts agent productivity while keeping service empathetic and high quality. The LLM is constantly learning; hence, first call resolution (FCR) improves with better suggestions. Agents can now handle multiple conversations simultaneously.  

## Key Benefits

* [Scalable Efficiency](#scalable-efficiency): Automates routine interactions, enabling agents to manage multiple customer conversations in parallel with less effort. 
* [Human Supervision - Absolute Control](#human-supervision-with-absolute-control): Agents can pause, cancel, override, or edit any automated message before it’s sent—ensuring quality assurance at all times. 
* [Proactive Engagement](#proactive-engagement): Agent AI can initiate and respond to conversations based on context, reducing wait times and improving customer satisfaction.  
* [Contextual Intelligence](#contextual-intelligence): Agentic Copilot uses real-time data and workflow logic to generate accurate, contextual replies. It can:  
    * Prompt users for inputs  
    * Extract entities from messages  
    * Dynamically adapt responses using tool calling—triggering external APIs or business systems for up-to-date information (for example, pricing, availability, customer status).  
* [Personalized and Empathetic Responses](#empathetic-and-personalized-responses): Understands the conversation context and responds in a natural, empathetic tone—creating a more human-like experience. 
* [Robust Fail-Safes](#robust-fail-safes): In case of data delays or message generation issues, agents can intervene using pause-to-send controls. The system disables auto-send if a response fails.  

### Proactive Engagement 

Agentic Copilot allows Agent AI to automatically initiate and respond to customer conversations. For example, when a customer asks, *"Can you help me plan my visit?"*, the contextual Agentic responses start generating through the widget and routes the query to the Agentic platform, which determines and prepares the most suitable response.  
<img src="../images/contextual-responses-1.png" alt="contextual-responses" title="contextual-responses" style="border: 1px solid gray; zoom:80%;">  

### Human Supervision with Absolute Control 

Although responses are automated, agents retain complete authority: 

* They can **pause or stop** the auto-send function at any point.  
* A **configurable timer** controls how long to wait before a response is automatically sent to customers, allowing time for review or intervention. 
* Agents can modify or approve responses, ensuring quality assurance.  

### Contextual Intelligence 

Agentic Copilot uses advanced prompt engineering and workflow logic to maintain high-quality, contextual communication. It:  

* Prompts users for key inputs. In the [above instance](#proactive-engagement), it asks for travel preferences, style, group type, and season.  
* Extracts relevant entities from responses.  
* Dynamically adapts replies using real-time data through external APIs.  

### Empathetic and Personalized Responses 

Since the system understands the context, the responses are empathetic and personalized. For example, if a customer has unaccounted fund deductions, it empathizes with the customer and assures them of a speedy resolution.  

### Scalable Efficiency 

Agentic Copilot handles routine tasks on its own, letting agents focus on supervision instead of conversation. This speeds up responses and reduces mental effort, improving the overall customer experience.  

### Robust Fail-Safes 

If there's a delay in getting real-time data, the pause-to-send feature lets agents step in and take over—ensuring smooth and timely responses.  

## Getting Started 

This section lets you configure and manage the Agentic Copilot apps. You can configure, test, and save multiple apps simultaneously. Once configured, link these apps with Agent AI to have autonomous, end-to-end task execution.  

### Configuring an Agentic Copilot app 

Follow these steps to configure an Agentic Copilot app: 

1. Sign in to [AI for Service](https://platform.kore.ai/){:target="_blank"}. 
2. Go to **Agent AI** > **Configurations** > **Linked Services**, and click **Agentic Configuration**. 
3. Click **+ Add Agentic Copilot App**.  
<img src="../images/add-an-agentic-copilot-app-2.png" alt="add-an-agentic-copilot-app" title="add-an-agentic-copilot-app" style="border: 1px solid gray; zoom:80%;">  

4. Enter the following information under the **App Information** section: 
    * **App Name**: Enter a name for the new app. For example, Travel Agent. The character limit is set to 50. 
    * **Domain URL**: Enter the Agentic platform’s host URL. For example, agent-platform.kore.ai.  
    * **Environment**: Enter the environment name as configured in the “Environment” section of the Agentic Platform.  
    * **App ID**: Enter the Agentic app ID in use.  
    * **API Key**: Enter the API key as configured in the “API Keys” section of the Agentic Platform.  
5. Click **Test Connection & Save**. The configured app is saved and gets connected.  
<img src="../images/test-connect-app-3.png" alt="test-connect-app" title="test-connect-app" style="border: 1px solid gray; zoom:80%;">  

### Deleting an Agentic Copilot app  

In this section, you can delete a configured app. When deleted, the connected apps automatically get disabled from the Agent AI widget.  

Follow these steps to delete a configured app:  

1. Click the “Delete” button for an app.  
2. Click **Delete** on the confirmation screen.  
<img src="../images/delete-app-4.png" alt="delete-app" title="delete-app" style="border: 1px solid gray; zoom:80%;">  

    !!! note

        You can’t delete an in-use Agentic app; the "Delete" button appears disabled, and a badge indicates the app is in use. 

### Enabling Agentic Copilot in Agent AI 

The Agentic Copilot feature enables you to have autonomous, end-to-end task execution. Agents monitor the conversations and can cancel, override, or edit the messages. In this section, you can select a language, enable/disable this feature, select an app, select to auto send messages, and set a timer (up to 10 seconds) for auto sending messages. 

#### Steps to set channel-specific preferences 

1. Sign in to [AI for Service](https://platform.kore.ai/){:target="_blank"}. 
2. Go to **Agent AI** > **Configurations** > **Widget Settings**. 
3. Click to expand **Agent AI Channel Specific Settings** on the **Agent AI Settings** page.
4. Select a channel in the **Select channel** list. 
5. Click the toggle against **Agent AI Channel Specific Settings** to enable it (if disabled). 
6. For the **Agentic Copilot** feature: 
    1. Select a language from the language list. 
    2. Click the toggle to **Enable**/**Disable** the Agentic Copilot feature. 
    3. Select an **app** from the **Select Agentic App** list. 
    4. Click to select the **Allow auto send Message** option. Clearing this option cancels all unsent or new Agentic messages. 
    5. Set the timer for the **Set message delay before auto send** field by using the slider. You can set a delay up to a maximum of 60 seconds.  
    <img src="../images/agentic-copilot-setting-6.png" alt="agentic-copilot-setting" title="agentic-copilot-setting" style="border: 1px solid gray; zoom:80%;">  

## Agentic Copilot in Runtime 

The Agentic Copilot runs end-to-end conversations autonomously, with Agents supervising the conversations. Agents can cancel, override, or edit the Agentic conversations, as needed.  

In the Agent AI widget, the Assist tab displays the Agentic Copilot messages. After the configured Welcome Events are executed, the Assist tab displays the message “*Agentic Copilot is actively listening to your conversation and ready to assist automatically.*”  
<img src="../images/agentic-copilot-listening-7.png" alt="agentic-copilot-listening" title="agentic-copilot-listening" style="border: 1px solid gray; zoom:80%;">   

The messages appear with a “Sending” button that delays auto sending up to 10 seconds (based on the time set in the **Set message delay before auto send** field of the **Agent AI Widget Settings** section). During this time, Agents can click “X” beside the **Sending** button to cancel auto send and then manually send or copy the messages. The following screenshot shows the Auto-Send functionality button in progress along with the **Override** button:  
<img src="../images/agentic-messages-in-runtime-8.png" alt="agentic-messages-in-runtime" title="agentic-messages-in-runtime" style="border: 1px solid gray; zoom:80%;">  

* To cancel auto sending, click “X” beside the **Sending** button:  
<img src="../images/agentic-messages-control-9.png" alt="agentic-messages-control" title="agentic-messages-control" style="border: 1px solid gray; zoom:80%;">   

    * Click the “Copy” icon to copy the message to the **Chat Response** field. 
    * Click the **Send** button to send the message manually. 
    * Click **Override** to discard the Agentic prompt and enter your own response manually. 
    * To stop/resume the “Auto-Send” function, click the “Stop/Resume” icon in the top-right corner of the Agent AI widget, next to the “Pause/Resume” icon.  
    * To pause or resume the Agentic app function, click the “Pause/Resume” icon in the top-right corner of the Agent AI widget.  
* When the **Allow Auto Send Message** feature is enabled, the timer for each Agentic response starts only after the previous message is sent. 
* If the view doesn’t auto-scroll to the latest message, an **arrow** appears at the bottom-right, showing the number of stacked Agentic messages. Click the **arrow** to scroll to the latest messages. 
* To regenerate a failed Agentic response, double-click the corresponding customer message.  
* If Agentic Copilot fails to send a response, the auto-send feature is disabled automatically.  
* For messages outside the app’s defined scope, Agentic indicates it is not trained to respond.  

**Search Tab**: The Search tab displays Agentic Results (search results of Agentic Copilot).  
<img src="../images/agentic-enabled-search-function-10.png" alt="agentic-enabled-search-function" title="agentic-enabled-search-function" style="border: 1px solid gray; zoom:80%;">   

