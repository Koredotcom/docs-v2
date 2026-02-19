# Agent AI Configuration for Salesforce OmniChannel Chat (Messaging)

This document explains the integration process of **OmniChannel Chat (Messaging)** with **Agent AI** in Salesforce. This integration delivers AI-powered suggestions, automated responses, and conversation summaries directly in the Salesforce console. It helps agents respond faster, improve accuracy, and maintain consistent communication.

## Prerequisites

* Enabled OmniChannel Chat
* Ability to complete chat conversations in Salesforce

## Steps to Configure OmniChannel Chat

1. Install the Kore [Agent AI package](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000HSGlnUAH){:target="_blank"} in the org.  
2. Configure the Agent AI package and features: 
    1. Click **App Launcher**.  
    <img src="../images/app-launcher-1.png" alt="app-launcher" title="app-launcher" style="border: 1px solid gray; zoom:80%;"/>  

    2. Type **kore** in the search bar, and select **Kore Agent AI Feature Configuration** from the displayed list.  
    <img src="../images/agentai-feature-configuration-2.png" alt="agentai-feature-configuration" title="agentai-feature-configuration" style="border: 1px solid gray; zoom:80%;"/> 

    3. Click **New** from the right-top corner of the page.
    4. Enter **Omnichannel Configuration** in the **Configuration Name** field. (You can enter any relevant name.)  
    <img src="../images/omnichannel-configuration-3.png" alt="omnichannel-configuration" title="omnichannel-configuration" style="border: 1px solid gray; zoom:80%;"/>  

    5. Keep the **CTI Provider** field as is. For an Omnichannel solution, selecting a CTI Provider is not required. 
    6. Select **Chat** or **Chat and Voice** from the **Salesforce OmniChannel Solution** list.  
    <img src="../images/salesforce-omnichannel-solution-4.png" alt="salesforce-omnichannel-solution" title="salesforce-omnichannel-solution" style="border: 1px solid gray; zoom:80%;"/> 

    7. Select **Active**.
    8. Click **Save**.  

3. Configuring Salesforce with Kore Agent AI credentials:
    1. Click **App Launcher**.
    2. Type **config** in the **search bar,** and select **Kore Agent AI Configuration** from the displayed list.
    3. Click **New** from the right-top corner of the page.
    4. Enter the required values in the **Agent AI URL**, **Bot ID**, **Client ID**, and **Client Secret** fields. To get these values:  
        1. Sign in to [AI for Service](https://platform.kore.ai/){:target="_blank"}.
        2. Go to **Flows & Channels** > **Channels**.
        3. Click **Digital** > **Web/Mobile Client**.
        4. Click to expand the **JWT App Details** section.
        5. Click the **Copy** buttons against the required fields.  
        <img src="../images/web-mobile-client-5.png" alt="web-mobile-client" title="web-mobile-client" style="border: 1px solid gray; zoom:80%;"/> 

    5. Select **Active**.
    6. Click **Save**.  
    <img src="../images/kore-agent-ai-configuration-6.png" alt="kore-agent-ai-configuration" title="kore-agent-ai-configuration" style="border: 1px solid gray; zoom:80%;"/> 

## Add Component to the page

1. Go to **App Launcher** and select **Chat Transcripts**. (This is required for old legacy chat.)  
<img src="../images/chat-transcripts-7.png" alt="chat-transcripts" title="chat-transcripts" style="border: 1px solid gray; zoom:80%;"/>  

2. Open any record of chat transcripts.  

    !!! note

        For new Salesforce chat (Salesforce in-app and web messaging), conversations are stored inside the **Messaging Sessions** page. Open **Messaging Sessions** records.   

    <img src="../images/messaging-sessions-record-8.png" alt="messaging-sessions-record" title="messaging-sessions-record" style="border: 1px solid gray; zoom:80%;"/>  

3. Edit the page by clicking the **gear** icon on the top-right corner.  
<img src="../images/edit-messaging-sessions-records-9.png" alt="edit-messaging-sessions-records" title="edit-messaging-sessions-records" style="border: 1px solid gray; zoom:80%;"/>  

    !!! note

        For new chat, open any **Messaging Session Record Page**, and then click **Edit Page**. 

    <img src="../images/editing-messaging-session-record-page-10.png" alt="editing-messaging-session-record-page" title="editing-messaging-session-record-page" style="border: 1px solid gray; zoom:80%;"/> 

4. Under **Custom – Managed** components, find the **OmniChannel_AgentAssistChat** component.  
<img src="../images/omnichannel-agentassist-chat-11.png" alt="omnichannel-agentassist-chat" title="omnichannel-agentassist-chat" style="border: 1px solid gray; zoom:80%;"/>  

    !!! note

        For new chat (web messaging), the **Edit Page** appears like the following screenshot:	

    <img src="../images/edit-page-for-new-chat-12.png" alt="edit-page-for-new-chat" title="edit-page-for-new-chat" style="border: 1px solid gray; zoom:80%;"/> 

5. Drag and drop the component (search with **OmniChannel_AgentAssistChat**) on the **Record** page.  
<img src="../images/component-on-record-page-13.png" alt="component-on-record-page" title="component-on-record-page" style="border: 1px solid gray; zoom:80%;"/>  

6. Click **Save**.
7. Click **Activate** and activate the page as per your requirement.
8. Go back to the **Service Console** and initiate another chat from the customer-facing or the demo web page. 

## Test your Solution

1. Go to the **Service Console** by searching for it in the **App Launcher**.  
<img src="../images/app-launcher-service-console-14.png" alt="app-launcher-service-console" title="app-launcher-service-console" style="border: 1px solid gray; zoom:80%;"/>  

2. In the utility bar, open **Omni-Channel** and set the presence status to **Available-Messaging** or **Available-Chat**, based on the incoming request type.  
<img src="../images/omnichannel-presence-status-15.png" alt="omnichannel-presence-status" title="omnichannel-presence-status" style="border: 1px solid gray; zoom:80%;"/>  

3. When Salesforce receives an incoming chat or messaging request, a notification appears. Click the **tick** **mark** icon to accept it.  
<img src="../images/accept-chat-or-messaging-request-16.png" alt="accept-chat-or-messaging-request" title="accept-chat-or-messaging-request" style="border: 1px solid gray; zoom:80%;"/>  

4. After you accept the incoming messaging request, the Agent AI widget appears on the **Messaging Session Record Page** or wherever you placed it in the [previous step](#add-component-to-the-page).  
<img src="../images/agent-ai-widget-17.png" alt="agent-ai-widget" title="agent-ai-widget" style="border: 1px solid gray; zoom:80%;"/> 

5. The Agent AI widget continues to monitor customer and agent messages and provides suggestions based on customer utterances.
6. When the agent clicks the **End Chat** button or the customer disconnects the session, a **summary** pop-up appears on the Agent AI widget.  
<img src="../images/widget-summary-18.png" alt="widget-summary" title="widget-summary" style="border: 1px solid gray; zoom:80%;"/>  

7. Click the **Submit** button to save the summary in one of the custom objects in Salesforce.  \
To access these summaries, search for **Kore NonCTI AgentAI Conversation Summary** in the **App Launcher**.  
<img src="../images/kore-noncti-agentai-conversation-summary-19.png" alt="kore-noncti-agentai-conversation-summary" title="kore-noncti-agentai-conversation-summary" style="border: 1px solid gray; zoom:80%;"/>  

    !!! note 

        The Agent AI widget now supports custom data. All custom field values available in the Messaging Session object in Salesforce are included as custom data in the Agent AI widget. Go through [this doc](./../../agent-experience/access-custom-data-in-agent-ai.md){:target="_blank"} to access custom data in Agent AI bot.   

    <img src="../images/custom-data-in-agentai-bot-20.png" alt="custom-data-in-agentai-bot" title="custom-data-in-agentai-bot" style="border: 1px solid gray; zoom:80%;"/>  
