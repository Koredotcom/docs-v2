# Agent AI VOice Integration with CX Cloud From Genesys and Salesforce

[CX Cloud from Genesys and Salesforce](https://appexchange.salesforce.com/appxListingDetail?listingId=7f59a36f-86c0-4cac-b8af-2c1722ede4d1&channel=recommended){:target="_blank"} is a unified AI-powered customer experience and relationship management solution that integrates Genesys Cloud CX and Salesforce Service Cloud. It allows you to connect Genesys Cloud as a contact center in Service Cloud.

Kore Agent AI leverages Kore.ai’s Platform capabilities along with generative AI and LLMs to enhance agent productivity and elevate customer satisfaction. It uses features like real-time coaching, and seamless integration with popular CCaaS software and offers automated task streamlining, smart replies, sentiment tracking, automated guidance, summarized conversations, and deep integration with enterprise systems. To ensure consistency and accuracy, it has features like the Playbooks and Kore.ai’s advanced information retrieval system.

This document guides Salesforce administrators through the setup and configuration of the Kore Agent AI solution, allowing agents to access the Genesys Cloud features.

## Prerequisites

Before integrating Agent AI with Salesforce Genesys CTI, the following prerequisites must be met:

* In Salesforce
    * Must enable Service Cloud Voice license for the Salesforce organization.
    * Install [CX Cloud from Genesys and Salesforce](https://appexchange.salesforce.com/appxListingDetail?listingId=7f59a36f-86c0-4cac-b8af-2c1722ede4d1){:target="_blank"} package.
    * Install [Kore Agent AI Salesforce](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000HSGlnUAH){:target="_blank"} package.
* In Genesys
    * Install [Genesys AudioHook](https://appfoundry.genesys.com/filter/genesyscloud/listing/a3ff6a99-d866-4734-ab7a-16cff2e4308c){:target="_blank"} from AppFoundry.
* Browser Compatibility Check
    * Supports Chrome


## Set up Genesys Adapter in Salesforce Org

Follow this [Genesys documentation](https://help.mypurecloud.com/articles/about-cx-cloud-from-genesys-and-salesforce/){:target="_blank"} to set up Genesys as a contact center inside a Salesforce org.

Once you successfully complete the configuration steps in the above link, you can accept calls to a Genesys number within Salesforce using the Omnichannel utility tool. Then, proceed with the next steps.

!!! note

    Omnichannel presence status will be synchronized with Genesys agent’s presence status (for example, **Available for Voice** in Omnichannel is similar to **On Queue** in Genesys Cloud).

### Additional Steps

These are the mandatory manual steps for Kore Agent AI integration with Salesforce Service Cloud Voice with Genesys as partner telephony. You must create a **custom field** inside the Salesforce **Voice Call** object for synchronizing Genesys call attributes. Here, you create a custom field that populates with the Genesys Interaction ID when an agent accepts a call via Omnichannel.

The two major steps involved here are:

#### Step 1: Create a custom field inside Voice Call object

1. Sign in to **Salesforce**.
2. Click the **Gear** icon > **Setup**.
3. Search with **Object Manager**, and click it.  
<img src="../images/object-manager-1.png" alt="object-manager" title="object-manager" style="border: 1px solid gray; zoom:80%;"/> 

4. Click to open the **Voice Call** object.
5. Click **Fields & Relationships**.
6. Click **New** to create a new field.  
<img src="../images/new-fields-and-relationships-2.png" alt="new-fields-and-relationships" title="new-fields-and-relationships" style="border: 1px solid gray; zoom:80%;"/> 

7. Select the **Data Type** as **Text**, and then click **Next**.  
<img src="../images/new-custom-field-3.png" alt="new-custom-field" title="new-custom-field" style="border: 1px solid gray; zoom:80%;"/> 

8. Enter the **Field Label** value as **KAA_interaction_id** and **Length** as **255**.  

    !!! note

        The custom field name inside the Voice Call object must be **KAA_interaction_id** (don’t rename it).  
        
    <img src="../images/custom-field-details-4.png" alt="custom-field-details" title="custom-field-details" style="border: 1px solid gray; zoom:80%;"/>

9. Click **Next**, and then click **Save**.

#### Step 2: Synchronize call attribute with Salesforce Voice Call Record

1. Click the **App Launcher** icon, and type **CX Cloud Genesys Settings** in the search box.  
   <img src="../images/cx-cloud-genesys-settings-page-5.png" alt="cx-cloud-genesys-settings-page" title="cx-cloud-genesys-settings-page" style="border: 1px solid gray; zoom:80%;"/> 

2. Click the **Configure** button of **Voice for Salesforce Service Cloud** in the **CHANNELS** section.  
<img src="../images/cx-cloud-from-genesys-and-salesforce-6.png" alt="cx-cloud-from-genesys-and-salesforce" title="cx-cloud-from-genesys-and-salesforce" style="border: 1px solid gray; zoom:80%;"/>

3. Click **Configure Contact Centers**.  
<img src="../images/configure-contact-centers-7.png" alt="configure-contact-centers" title="configure-contact-centers" style="border: 1px solid gray; zoom:80%;"/> 

4. Scroll down to **Genesys Cloud Conversation Field Mapping**.
5. Click the **+** button to add the mapping.
6. Enter **Conversation.ConversationId** in the **Conversation Attributes** field, and select [KAA_interaction_id](#step-1-create-a-custom-field-inside-voice-call-object) from the **Salesforce Fields** dropdown list. (Follow [configure Genesys setting](https://help.mypurecloud.com/articles/configure-genesys-admin-settings/){:target="_blank"}.)  
<img src="../images/genesys-cloud-conversation-field-mapping-8.png" alt="genesys-cloud-conversation-field-mapping" title="genesys-cloud-conversation-field-mapping" style="border: 1px solid gray; zoom:80%;"/>

7. Click **Save**.

### Custom Data

In this integration, any custom field present in the Voice Call object will be part of the Kore Agent AI custom data. For populating a few dynamic fields from Genesys to Salesforce, follow this document: [Synchronize call attributes with Salesforce VoiceCall records for CX Cloud from Genesys and Salesforce](https://help.mypurecloud.com/articles/synchronize-call-attributes-with-salesforce-activity-records-for-cx-cloud-from-genesys-and-salesforce/){:target="_blank"}

## Install Agent AI Package

The installation process of the Kore Agent AI package is a simple, 3-step process. Follow these steps to install the package:

1. Visit [Salesforce AppExchange](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000HSGlnUAH){:target="_blank"}.  
<img src="../images/salesforce-app-exchange-9.png" alt="salesforce-app-exchange" title="salesforce-app-exchange" style="border: 1px solid gray; zoom:80%;"/> 

2. Select one of the three available options–**Install for Admins Only**, **Install for All Users**, or **Install for Specific Profiles**.
3. Click **Install**.  
<img src="../images/install-koreai-agentassist-10.png" alt="install-koreai-agentassist" title="install-koreai-agentassist" style="border: 1px solid gray; zoom:80%;"/>

## Configure Agent AI for Salesforce

This section explains the post-installation steps of Agent AI integration with Salesforce.

### Enable Agent AI Access to Administrators and Agents

1. Click the **Gear** icon > **Setup**.
2. Enter “Permission Sets” in the search box.
3. Click **Permission Sets** in the suggestions list, and then select the alphabet **C**.  
<img src="../images/permission-sets-11.png" alt="permission-sets" title="permission-sets" style="border: 1px solid gray; zoom:80%;"/>

4. Assign the Permission Set:
    1. For admins, assign both **CTI_Kore Agent Assist Admin Permission Set** and **CTI_Kore Agent Assist Permission Set**.
    2. For agents, assign **CTI_Kore Agent Assist Permission Set**.  

        !!! note
        
            The admin role has higher permissions, including write and delete, on KoreAgentAssist Configuration Object and KoreAgentAssist Feature Configuration Object, and view access for AgentAssistApexLCController Apex. Call Summary is unavailable on the CTI_Kore Agent Assist Admin Permission Set. 

    3. **CTI_Kore Agent Assist Admin Permission Set**: Provide full access to Kore AgentAssist objects.
    4. **CTI_Kore Agent Assist Permission Set**: Provide read/write access to Kore AgentAssist objects.
    5. Call Summary is unavailable on the CTI_Kore Agent Assist Admin Permission Set. 

5. Click the required permission set, and then click **Manage Assignments**.  
<img src="../images/manage-assignments-12.png" alt="manage-assignments" title="manage-assignments" style="border: 1px solid gray; zoom:80%;"/>  

6. Select the agent/users or profiles needing access to this package.
7. Click **Next** > **Assign**, and then click **Done**.  
<img src="../images/agent-assist-permission-set-next-13.png" alt="agent-assist-permission-set-next" title="agent-assist-permission-set-next" style="border: 1px solid gray; zoom:80%;"/> 

    <img src="../images/agent-assist-permission-set-assign-14.png" alt="agent-assist-permission-set-assign" title="agent-assist-permission-set-assign" style="border: 1px solid gray; zoom:80%;"/> 

### Enable Kore Agent AI Package Features

1. Click the **App Launcher** icon, and search with **Kore** in the search field.
2. Click **Kore Agent AI Feature Configuration** from the suggestions list.  
<img src="../images/kore-agent-assist-feature-configuration-15.png" alt="kore-agent-assist-feature-configuration" title="kore-agent-assist-feature-configuration" style="border: 1px solid gray; zoom:80%;"/> 
3. Click the **New** button on the top-right, and select the features in the package you want to use. 

   * **Configuration Name**: Provide a name for the configuration you are creating.
   * **CTI Provider**: Skip this field.
   * **Salesforce OmniChannel Solution**: “Chat and Voice” or “Voice” (based on your license).
   * **Active**: Only one feature configuration will be active, and the active configuration will be considered at runtime.

4. Click **Save**.  
<img src="../images/save-kore-agent-assist-feature-configuration-16.png" alt="save-kore-agent-assist-feature-configuration" title="save-kore-agent-assist-feature-configuration" style="border: 1px solid gray; zoom:80%;"/>  

1. Click the **Edit** button, if you want to edit the existing feature configurations.  
<img src="../images/edit-genesys-new-adapter-17.png" alt="edit-genesys-new-adapter" title="edit-genesys-new-adapter" style="border: 1px solid gray; zoom:80%;"/> 

### Set up Widget Configuration

1. Click the **App Launcher** icon on the top-left, and type **Kore Agent AI Configuration** in the search bar.
2. Click **Kore Agent AI Configuration** from the suggestions list.  
<img src="../images/open-agent-assist-configuration-18.png" alt="open-agent-assist-configuration" title="open-agent-assist-configuration" style="border: 1px solid gray; zoom:80%;"/> 
	
3. Click the **New** button for providing configurations.  
<img src="../images/new-agent-assist-configuration-19.png" alt="new-agent-assist-configuration" title="new-agent-assist-configuration" style="border: 1px solid gray; zoom:80%;"/> 

4. Select the language you want to enable for the Agent AI widget. By default, the language is English.
5. Provide all the details in the text boxes, and click **Save**.  
<img src="../images/agent-assist-configuration-details-20.png" alt="agent-assist-configuration-details" title="agent-assist-configuration-details" style="border: 1px solid gray; zoom:80%;"/>  

    !!! note

        In the Agent AI URL field, use the URL from **Agent AI** > **Flows & Channels** > **Channels** > **Digital** > **Web/Mobile Client** of your Agent AI instance.  

    <img src="../images/web-mobile-client-21.png" alt="web-mobile-client" title="web-mobile-client" style="border: 1px solid gray; zoom:80%;"/>  

    !!! note

        Only one configuration is active, which is used at runtime.

### Create Agent Presence Status

1. Click the **Gear** icon > **Setup**.
2. Type **Presence Statuses** in the **quick search** box, and then click **Presence Statuses** from the suggestions list.
3. Click the **New** button.  
<img src="../images/new-presence-status-22.png" alt="new-presence-status" title="new-presence-status" style="border: 1px solid gray; zoom:80%;"/> 

4. Enter the **Status Name**, and select **Status Options**.
5. Select the **Service Channels**, and click **Save**.  
<img src="../images/save-presence-status-23.png" alt="save-presence-status" title="save-presence-status" style="border: 1px solid gray; zoom:80%;"/>  

### Place the Widget in the Voice Calls Record page

1. Click the **App Launcher** icon, and search with **Voice Calls** in the search field.  
<img src="../images/voice-calls-app-launcher-24.png" alt="voice-calls-app-launcher" title="voice-calls-app-launcher" style="border: 1px solid gray; zoom:80%;"/>  

2. Open any voice call record page, and click the **gear** icon.  
<img src="../images/voice-calls-record-25.png" alt="voice-calls-record" title="voice-calls-record" style="border: 1px solid gray; zoom:80%;"/> 

3. Click **Edit Page**.  
<img src="../images/edit-a-voice-call-record-26.png" alt="edit-a-voice-call-record" title="edit-a-voice-call-record" style="border: 1px solid gray; zoom:80%;"/> 

4. In the **search** box, search for **koreAgentAssistVoice**. Components are visible under the **Custom-Managed** section. 
5. Drag the component to the screen at the required location, and adjust it’s height and width, as required.  
<img src="../images/kore-agent-assist-voice-27.png" alt="kore-agent-assist-voice" title="kore-agent-assist-voice" style="border: 1px solid gray; zoom:80%;"/>  

6. Click **Save**.

## Configure Genesys

### Generate Genesys OAuth Credentials

1. Sign in to **Genesys Cloud**.
2. Go to **Admin** > **Integrations** > **OAuth**.  
<img src="../images/genesys-cloud-oauth-28.png" alt="genesys-cloud-oauth" title="genesys-cloud-oauth" style="border: 1px solid gray; zoom:80%;"/> 

3. Click **Add Client**.  
<img src="../images/oauth-add-client-29.png" alt="oauth-add-client" title="oauth-add-client" style="border: 1px solid gray; zoom:80%;"/> 

4. Enter relevant values in the **App Name**, **Description**, and **Token Duration** fields.
5. Select **Client Credentials** in the **Grant Types** field.  
<img src="../images/client-credentials-30.png" alt="client-credentials" title="client-credentials" style="border: 1px solid gray; zoom:80%;"/> 

6. After saving the configuration, you get the Client ID and Client Secret of the created OAuth client.
7. Save the **Client ID** and **Client Secret** values.
8. Follow this [documentation](https://help.mypurecloud.com/articles/configure-oauth-settings/){:target="_blank"} for the rest of the steps related to configuring OAuth settings.

### Configure AudioHook

If you are using Kore-managed transcriptions, the final step is to install AudioHook for voice streaming. The AudioHook integration requires specific configuration values to support Agent Ai configuration.

1. Sign in to **Genesys Cloud**.
2. Go to **Admin** > **Integrations** > **Integrations**.
3. Enter **audiohook** in the search box to check for any existing instances of AudioHooks.  
<img src="../images/genesys-cloud-integrations-audiohook-31.png" alt="genesys-cloud-integrations-audiohook" title="genesys-cloud-integrations-audiohook" style="border: 1px solid gray; zoom:80%;"/>  

4. Click the **Integrations** button on the top-right corner to install a new AudioHook app.  
<img src="../images/genesys-cloud-audiohook-integrations-32.png" alt="genesys-cloud-audiohook-integrations-32" title="genesys-cloud-audiohook-integrations-32" style="border: 1px solid gray; zoom:80%;"/>  

5. Enter “audio” in the search box.  
<img src="../images/audiohook-monitor-33.png" alt="audiohook-monitor" title="audiohook-monitor" style="border: 1px solid gray; zoom:80%;"/> 

6. Install **Audiohook Monitor**, and then go to the **Configuration** tab.  
<img src="../images/audiohook-monitor-configuration-34.png" alt="audiohook-monitor-configuration" title="audiohook-monitor-configuration" style="border: 1px solid gray; zoom:80%;"/> 

    1. For **Channel**, select “both” from the **Value** dropdown list.
    2. The **Connection URI** format should be similar to the following: \
       wss://[savg-webserver.kore.ai/audiosocket/genesys/?sipuri=xxx&token=xxx&botId=xxx&accountId=xxx&agentassist=true]  
        1. Get `sipuri=sip:<sip-string>` from the **Agent AI** > **Flows & Channels** > **Channels** > **Voice Gateway** > **SIP Numbers** > **Configure SIP Trunk** page.  
        <img src="../images/sip-identifier-35.png" alt="sip-identifier" title="sip-identifier" style="border: 1px solid gray; zoom:80%;"/> 

        2. Use the following references from **Agent AI** > **Flows & Channels** > **Channels** > **Digital** > **Web/Mobile Client** page to fetch **Bot ID**, **Account ID**, **Client ID**, and **Client Secret** (for token generation).  
        <img src="../images/agent-ai-botid-client-id-client-secret-36.png" alt="agent-ai-botid-client-id-client-secret" title="agent-ai-botid-client-id-client-secret" style="border: 1px solid gray; zoom:80%;"/>  

        3. Follow the steps of [Using XO Platform APIs](../../../apis/automation/api-introduction.md#generating-the-jwt-token), Kore.ai Documentation, to generate the token (token= &lt;token>.) 

7. Add credentials in the **Credentials** tab.  
<img src="../images/credentials-tab-37.png" alt="credentials-tab" title="credentials-tab" style="border: 1px solid gray; zoom:80%;"/>  

    1. Refer to Step-6, and enter the **Client ID** and **Client Secret** credentials in the **API Key** and **Client Secret** fields respectively. These credentials are used to validate the audio stream signature by Kore.
    2. Click **OK**. 

8. Click **Save**.

## Add Omni-Channel to the Utility bar

1. Click the **Gear** icon, and enter “App Manager” in the search box.
2. Click **APP Manager** from the suggestions list.
3. Search for the **Service Console** or **lightning app**(reference [Documentation](https://help.mypurecloud.com/articles/create-a-lightning-app-for-managing-cx-cloud-from-genesys-and-salesforce-integration/){:target="_blank"}) you created, and click the dropdown list against it.
4. Click the **Edit** button.  
<img src="../images/lightning-experience-app-manager-38.png" alt="lightning-experience-app-manager" title="lightning-experience-app-manager" style="border: 1px solid gray; zoom:80%;"/> 

5. Click **Utility Items (Desktop Only)** > **Add Utility Item**.
6. Search for **Omni-Channel** and **Genesys Cloud CX Utility**.  
<img src="../images/omnichannel-genesys-cloud-cx-utility-39.png" alt="omnichannel-genesys-cloud-cx-utility" title="omnichannel-genesys-cloud-cx-utility" style="border: 1px solid gray; zoom:80%;"/> 

7. Rename the label, if required, and then click **Save**.

## Post-installation Validation

1. Click the **App Launcher** icon, and type **Service Console **/** Lightning app** created by you in the search bar.
2. Select **Service Console** from the suggestions list.
3. At the bottom of the page, in the **Utility Bar**, you can find **Omni-Channel**. Click it, change the status to **Available for Voice**.
4. A pop-up window to sign in into the Genesys account appears. Sign in to Genesys.  
<img src="../images/genesys-cloud-signin-page-40.png" alt="genesys-cloud-signin-page" title="genesys-cloud-signin-page" style="border: 1px solid gray; zoom:80%;"/>  

5. When a user calls an agent, a voice call record page pops up automatically. The agent receives the call by clicking the **tick mark** button, as highlighted in the following screenshot:  
<img src="../images/receive-a-call-41.png" alt="receive-a-call" title="receive-a-call" style="border: 1px solid gray; zoom:80%;"/>  

6. Once the agent accepts the call, the following screen (a voice call record page) appears, with the **Kore Agent AI** widget displayed on the right side.  
<img src="../images/kore-agentai-widget-42.png" alt="kore-agentai-widget" title="kore-agentai-widget" style="border: 1px solid gray; zoom:80%;"/> 

7. The conversation between the agent and the user appears as transcripts in Agent AI. If any of the user’s words match with the words in the library, automations are displayed in the Agent AI widget. Based on user response, Agent AI displays the next automations.  
<img src="../images/agent-ai-widget-transcripts-automations-43.png" alt="agent-ai-widget-transcripts-automations" title="agent-ai-widget-transcripts-automations" style="border: 1px solid gray; zoom:80%;"/>  

8. Once the conversation ends, disconnect the call by clicking the **End Call** button, and in the wrap-up select the default wrap-up code, and **Submit**.  
<img src="../images/ending-a-call-44.png" alt="ending-a-call" title="ending-a-call" style="border: 1px solid gray; zoom:80%;"/>  

9. A pop-up window shows the conversation summary. To save it in Salesforce, click the **Submit** button.
10. On submitting the summary, it gets stored inside one of the custom objects. To access the summary, search inside **App Launcher** > **Kore NonCTI AgentAI Conversation Summary**.  
<img src="../images/kore-noncti-agentai-conversation-summary-45.png" alt="kore-noncti-agentai-conversation-summary" title="kore-noncti-agentai-conversation-summary" style="border: 1px solid gray; zoom:80%;"/>  

