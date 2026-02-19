# Salesforce Web Messaging Configuration (New Chat)

This document provides instructions on connecting your messaging channel to a website with a new embedded deployment on the Salesforce Omni-Channel Service Cloud with Agent AI.

## Prerequisites

* Developer or a Production Salesforce org
* Basic knowledge of Salesforce terminology
* Agent AI configured in your Salesforce app

## Steps to Configure Agent AI in Salesforce

1. Sign in to **Salesforce**.
2. Select **App Launcher**.
3. Type **config** in the **search bar**, and select **Kore Agent AI Configuration** from the displayed list.
4. Select **New** from the top-right corner of the page.  
    <img src="../images/kore-agentai-configuration.png" alt="kore-agentai-configuration" title="kore-agentai-configuration" style="border: 1px solid gray; zoom:80%;"/>   

5. Enter the required values in the **Agent AI URL**, **Bot ID**, **Client ID,** **Client Secret**, and **Language (bot language)** fields. To get these values: 
    1. Sign in to [AI for Service](https://platform.kore.ai/){:target="_blank"}.
    2. Go to **Agent AI** > **Flows & Channels** > **Digital**.
    3. Select **Web/Mobile Client** and expand the **JWT App Details** section.
    4. Select the **copy** buttons against the required fields.  
        <img src="../images/jwt-app-details-section.png" alt="jwt-app-details-section" title="jwt-app-details-section" style="border: 1px solid gray; zoom:80%;"/>   

6. Select **Include Einstein Bot and User Messages in Agent AI Context** to share Salesforce Einstein Bot–user conversation data with Agent AI as custom data.  

    Since the Einstein Bot runs natively on Salesforce, Agent AI does not automatically have access to the prior bot conversation. When this option is enabled, the bot–user conversation history is passed to the Agent AI widget, allowing it to maintain context and perform accurate intent recognition. The conversation messages are sent under the `userBotMessages` key. Any forms completed during the Einstein Bot interaction are stored in Salesforce as key–value pairs and are retrieved and included in the custom data. To control which conversation attributes are shared, see [Selecting conversation metadata](../../configuration/linked-services.md/#selecting-conversation-metadata){:target="_blank"}.  
7. Click **Save**.

## Enable Omni-Channel

1. Sign in to your organization.
2. Go to **Salesforce Service Setup**.
3. In the **quick find** box, search **Omni-Channel Settings**.
4. Select **Enable Omni-Channel**, and click **Save**.  
<img src="../images/enable-omnichannel-and-save-1.png" alt="enable-omnichannel-and-save" title="enable-omnichannel-and-save" style="border: 1px solid gray; zoom:80%;"/>

## Configure a Messaging Channel for Web Deployment

1. Sign in to your organization–if you are in **Salesforce Classic**, switch to **Lightning Experience**.
2. Follow [Configure an Enhanced Web Chat Deployment](https://help.salesforce.com/s/articleView?id=service.miaw_configure_web_deployment_1.htm&type=5){:target="_blank"} to configure your Embedded Service Deployment.

## Add the Omni-Channel Utility to your Lightning Application

1. Go to **Lightning Experience** > **Setup**.
2. Enter **App** in the **quick find** box.
3. Select **App Manager**.
4. Click the **dropdown list** next to the console app that you want to add Omni-Channel to (for example, Service Console), and click **Edit**.
5. Click **Utility Bar** > **Add**.
6. Click **Omni-Channel**.
7. Click **Save**.
8. Click **Done**.

## Enable Service Presence Status Access

1. Enter **Profile** in the **quick find** box, and then select **Profiles**.
2. Select **System Administrator**.
3. Edit **Enable Service Presence Status Access**, and assign **Presence Status Available** – **Chat**, **On Break**, and **Busy**.  
<img src="../images/presence-status-available-2.png" alt="presence-status-available" title="presence-status-available" style="border: 1px solid gray; zoom:80%;"/>

**Assign Permission Set License Agreement**

Users must have the following Permissions Set License Agreement to be configured to attend the incoming chat request as an agent:  

1. Go to **Setup** > **Users**, and click **Users**. 
<img src="../images/setup-users-3.png" alt="setup-users" title="setup-users" style="border: 1px solid gray; zoom:80%;"/>
2. Click a user name, and it opens up the **User Details** page.  
<img src="../images/user-details-page-4.png" alt="user-details-page" title="user-details-page" style="border: 1px solid gray; zoom:80%;"/>
3. Scroll down to the **Permission Set License Assignments** section, click **Edit Assignments**, and search for **Messaging User** and **Messaging for In-App and Web User**.
4. Enable these two, and click **Save**.  
<img src="../images/permission-set-license-assignments-5.png" alt="permission-set-license-assignments" title="permission-set-license-assignments" style="border: 1px solid gray; zoom:80%;"/>  

## Configuring the App

1. Select **App Launcher**.
2. Click the **tile** for the app that you want (**Service Console**, in this case).  
<img src="../images/app-tile-6.png" alt="app-tile" title="app-tile" style="border: 1px solid gray; zoom:80%;"/>

3. Click the **Omni-Channel** widget to set the agent online.  
<img src="../images/omni-channel-widget-online-7.png" alt="omni-channel-widget-online-7.png" title="omni-channel-widget-online-7.png" style="border: 1px solid gray; zoom:80%;"/>

## Testing the Chat

1. Go to **Service Console**, open the **Omni-Channel** widget, and set **Presence Status** to **Available – Chat**.  
<img src="../images/presence-status-available-chat-8.png" alt="presence-status-available-chat" title="presence-status-available-chat" style="border: 1px solid gray; zoom:80%;"/>

2. Open the **chat** from the **Chat Client**:
    1. Go to **Setup**, and type **Embedded** in the **quick find** box.
    2. Select **Embedded Service Deployments**.
    3. Click the **dropdown** list, and select **View**.  
    <img src="../images/embedded-service-deployments-view-9.png" alt="embedded-service-deployments-view" title="embedded-service-deployments-view" style="border: 1px solid gray; zoom:80%;"/>

    4. Click **Test Messaging** from the **Embedded Service Deployment Settings**.  
    <img src="../images/test-messaging-10.png" alt="test-messaging" title="test-messaging" style="border: 1px solid gray; zoom:80%;"/>

        1. It opens up a **Visualforce** page, and the bottom-right side of the page shows a chat popup button:  
        <img src="../images/chat-popup-button-11.png" alt="chat-popup-button" title="chat-popup-button" style="border: 1px solid gray; zoom:80%;"/>

        2. Click this **chat popup** button, and it expands and opens up a chat window, where you as a user can initiate a conversation. (If you get any error message on the browser console, see the [Troubleshooting steps](#troubleshooting-with-setup)).  
        <img src="../images/chat-window-12.png" alt="chat-window" title="chat-window" style="border: 1px solid gray; zoom:80%;"/>  
        3. Accept the chat in the **Salesforce Omni-Channel** inside the service console. Initially, it comes under the **New** tab.  
        <img src="../images/accept-chat-new-tab-13.png" alt="accept-chat-new-tab" title="accept-chat-new-tab" style="border: 1px solid gray; zoom:80%;"/>

        4. Once you accept the work item, it comes under the **My work** tab. Now, you can start a conversation with a customer. It pops up a new **Messaging Sessions** page for every new conversation.  
        <img src="../images/my-work-tab-14.png" alt="my-work-tab" title="my-work-tab" style="border: 1px solid gray; zoom:80%;"/>

3. Start the conversation.  
<img src="../images/start-conversation-15.png" alt="start-conversation" title="start-conversation" style="border: 1px solid gray; zoom:80%;"/>  

    <img src="../images/chat-conversation-16.png" alt="chat-conversation" title="chat-conversation" style="border: 1px solid gray; zoom:80%;"/>

## Troubleshooting with Setup

To troubleshoot common issues encountered during this configuration for the first time, follow the
[Troubleshoot Enhanced Chat Setup](https://help.salesforce.com/s/articleView?id=service.miaw_troubleshoot.htm&type=5){:target="_blank"} document. 
