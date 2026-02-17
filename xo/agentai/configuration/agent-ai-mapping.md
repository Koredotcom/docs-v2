# Agent AI Mapping 

The **Agent AI Mapping** feature allows administrators to assign **Agentic Copilot apps** and **Dialog Tasks** to specific queues. By mapping an Agentic Copilot app to a queue, administrators can enable end-to-end autonomous task execution for agents in that queue. Mapped Dialog Tasks appear in the **Assist** tab (Proactive mode) and the **Library** during runtime, ensuring that agents can access only the tasks relevant to their queue for a streamlined and focused experience. 

## Configure Agentic Copilot Apps

Configuring the Agentic Copilot app to a queue enables autonomous task execution for agents in that queue. This section describes how to configure this app for one or more queues.  

!!! note

    To configure this app, Agentic Copilot must be enabled in Widget Settings. If disabled, the following image appears, prompting you to click **Open Widget Settings**: 

<img src="../agent-ai-mapping-images/open-widget-settings.png" alt="open-widget-settings" title="open-widget-settings" style="border: 1px solid gray; zoom:80%;">   

### Steps to configure an Agentic Copilot app 

1. Click the pencil icon against a queue.
2. Select the **Agentic Copilot** tab.
3. Use the toggle to enable **Agentic Copilot**, (if disabled).
4. Click to select a **channel**—**Chat**, **Voice**, or **Email**.
5. Select a **language** from the language list. The language selected during queue creation appears by default, but you can change it if required.
6. Select one or multiple apps from the **Select Agentic App** dropdown list.
7. Click **Add selected**, if you have selected multiple apps.
8. Click to select the **Allow auto send Message** option. Clearing this option cancels all unsent or new Agentic messages.
9. Set the timer for the **Set message delay before auto send** field by using the slider. You can set it to a maximum of 60 seconds.
10. Click **Save**.  
    <img src="../agent-ai-mapping-images/configure-copilot-app.png" alt="configure-copilot-app" title="configure-copilot-app" style="border: 1px solid gray; zoom:80%;">  

    !!! note

        This feature is available only to Contact Center AI (CCAI) users at this time. 

## Add or Delete a Queue Configuration

The Agent AI Mapping section displays queues and agent information created in CCAI [Contact Center > Routing > Queues](../../contactcenter/routing/queues/queue-management.md){:target="_blank"}. This section describes how to add and delete queue configurations. 

To configure dialogs to  queues: 

1. Sign in to [Platform](https://platform.kore.ai/){:target="_blank"}.
2. Go to **Agent AI** > **Configurations** > **Agent AI Mapping**. 
3. Use the **Agent AI Mapping** toggle to enable it, if disabled. 
4. Click **Add Queue**.  
    <img src="../agent-ai-mapping-images/agent-ai-mapping-main-page.png" alt="agent-ai-mapping-main-page" title="agent-ai-mapping-main-page" style="border: 1px solid gray; zoom:80%;"> 

5. Select the **queue**/**queues** you want to add. Note that previously added queues do not appear in the selection list, unless you delete them from the Agent AI Mapping dashboard.  
    * To select all available queues, click the global checkbox beside the **Queues** header.
    * To search for an available queue, enter the **queue name** in the **search box**.  

6. Click **Add selected**.  
    <img src="../agent-ai-mapping-images/add-queue-page.png" alt="add-queue-page" title="add-queue-page" style="border: 1px solid gray; zoom:80%;">  

7. The new queue/queues appear in the list, with a warning message prompting to complete the configuration for them. Only the configured queues are available to agents at runtime.  
    <img src="../agent-ai-mapping-images/warning-message.png" alt="warning-message" title="warning-message" style="border: 1px solid gray; zoom:80%;">  

    !!! note

        Agents assigned to a queue during its creation appear by default, and the agent-to-queue assignment is controlled through CCAI. For more information, see [this](../../contactcenter/routing/queues/queue-management.md#assign-agents){:target="_blank"} section. 

To delete a queue, click the **delete** icon against it, and then click **Delete** on the confirmation message:  

<img src="../agent-ai-mapping-images/delete-queue.png" alt="delete-queue" title="delete-queue" style="border: 1px solid gray; zoom:80%;">  

## Configure Dialog Tasks

Only the configured Dialog Tasks appear in the **Assist** tab (Proactive mode) and the **Library** during runtime, ensuring agents access only the tasks relevant to their queue. This section describes the process of assigning dialog tasks to a queue. 

### Steps to configure a Dialog Task

1. Click the pencil icon against the new queue.  
2. Select the **Dialog Task** tab.  
2. Click to select a **channel**—**Chat**, **Voice**, or **Email**.
3. Select a **language** from the language list. The language selected during queue creation appears by default, but you can change it if required.
4. Select an app from the **Apps** list.  
5. Select one of the following options: 
    * **Allow Dialog Tasks**, if you want selected dialog tasks to appear at runtime.  
        1. Select the **dialog tasks** available for the app. 
        2. Click **Select All** to select all available dialog tasks. The number of selected dialog tasks appears next to the **Dialog Task** section. 
            <img src="../agent-ai-mapping-images/queue-configuration.png" alt="queue-configuration" title="queue-configuration" style="border: 1px solid gray; zoom:80%;">  
    * **Don’t Allow Dialog Tasks** if you don’t want dialog tasks to appear at runtime. If you select this option, the following message appears during runtime:   
        <img src="../agent-ai-mapping-images/no-dialogs.png" alt="free text" title="free text" style="border: 1px solid gray; zoom:80%;">    

3. Click **Save**.  

## Edit Queue Configuration

This section describes the process of editing an available queue configuration. To do that:

1. Click the pencil icon against a queue you want to modify.  
2. Select **Agentic Copilot** or **Dialog Task**.  
3. Make the necessary changes, and then click **Save**.  