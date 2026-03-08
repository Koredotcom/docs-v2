# Agent AI Chat Integration with Five9

This document provides step-by-step instructions for integrating the Agent AI widget into the Five9 Agent Desktop. It covers the full integration process, ensuring a smooth setup and enabling all Agent AI features, including Automation, [Agent Coaching](./../../agent-experience/agent-realtime-coaching.md){:target="_blank"}, [Agent Playbook](./../../agent-experience/playbook.md){:target="_blank"}, [Sentiment Analysis](./../../agent-experience/agent-assist-widget-v3.md){:target="_blank"}, and end-of-call summaries.

## Prerequisites

Administrators having access to a Five9 Admin Console and with privileges to set up the following configurations:

* Five9 Chat enabled for your instance. Contact your Five9 representative.
* Kore Administrators having access to [Kore.ai](https://agentassist.kore.ai/){:target="_blank"} Agent AI instance and familiarity with creating and configuring a Kore AI Agent.
* Kore.ai App credentials such as Account ID. Read [this doc](./../../../channels/adding-channels-to-your-bot.md){:target="_blank"} for a walkthrough.

## Definitions

| **Key** | **Definition** | **Reference** |
|----------|----------------|---------------|
| <span id="pookie">Agent AI URL</span> | The domain of the Agent AI. | - If it is legacy Agent AI, the URL is [https://agentassist.kore.ai](https://agentassist.kore.ai){:target="_blank"}.<br> - If it is UXO, the URL is [https://platform.kore.ai](https://platform.kore.ai){:target="_blank"}.<br> - If it is on-prem, the URL is the origin where your Agent AI is hosted. |
| Connector | The Five9 Connector is utilized for displaying the Agent AI iframe within the Five9 Agent Desktop. |  |
| Account ID | A unique identifier for an account. | Available under **Channels** > **Chat** in the [Agent AI](https://agentassist.kore.ai){:target="_blank"} configuration portal. |
| BotLanguageCode | The language configured in the Kore AI Agent. | Refer to the [Supported Languages](../../agent-experience/supported-languages.md){:target="_blank"} document for the language code of all supported languages. |
| Queue Identifier | A unique identifier in the Data Table used to fetch AI Agent details at run time. It can be a skill name or a campaign name. |  |

## Configurations on Kore Agent AI

* [Capture Agent AI Bot Mapping for Skills or Campaigns](#capture-agent-ai-bot-mapping-for-skills-or-campaigns)

## Configurations on the Five9 Admin Console

* [Create Connector](#create-connector)
* [Five9 Account Setup to get Incoming Chat Requests](#five9-account-setup-to-get-incoming-chat-requests)

### Capture Agent AI Bot Mapping for Skills or Campaigns

[Third-Party Configuration](../../configuration/third-party-configuration.md){:target="_blank"} maps Agent AI bots to specific skills or campaigns. Within this configuration, you can define the bot's language, custom data, or secure custom data.

For example, if you want Agent AI Bot1 to be associated with Skill1, and Agent AI Bot2 with Skill2, you need to: 

* Create a record in Third-Party Configuration for Agent AI Bot1, setting the Queue Identifier to Skill1. 
* Create a record in Third-Party Configuration for Agent AI Bot2, setting the Queue Identifier to Skill2. 

This setup ensures the correct Agent AI widget is rendered for the conversations routed based on the defined skill or campaign. 

!!! notes

    * Custom Data and Secure Custom Data are currently not supported for the Five9 Chat integration.
    * One Skill or Campaign can not be mapped to multiple Agent AI bots. 

Refer to the [doc](../../configuration/third-party-configuration.md){:target="_blank"} for instructions on creating records in Third-Party Configuration for an Agent AI Bot. 

**Example**: 

You have a skill named **Chat_Skill**, that handles incoming chat requests, and you want the Agent AI widget to render for conversations routed to this skill. You must create the following details of the Third-Party Configuration record in your Agent AI account:  
<img src="../images/create-record.png" alt="create-record" title="create-record" style="border: 1px solid gray; zoom:80%;">  

<img src="../images/create-record-add-values.png" alt="create-record-add-values" title="create-record-add-values" style="border: 1px solid gray; zoom:80%;">  

!!! note

    The **Values** should be **base64 encoded**. 

<img src="../images/third-party-configuration.png" alt="third-party-configuration" title="third-party-configuration" style="border: 1px solid gray; zoom:80%;">  

!!! note

    Ensure the **Third-Party Configuration** setting is enabled in **Agent AI** > **Configurations** > **Widget Settings** > **Agent AI Settings** > **Agent AI General Settings**.  

<img src="../images/enable-third-party-configuration.png" alt="enable-third-party-configuration" title="enable-third-party-configuration" style="border: 1px solid gray; zoom:80%;">  

## Create Connector

1. Sign in to [Five9 Administrator Console](https://admin.us.five9.net/){:target="_blank"}.
2. Search for “connectors” in the search bar, and select **Connectors**.  
    <img src="../images/connectors_9.png" alt="connectors" title="connectors" style="border: 1px solid gray; zoom:80%;"> 

3. Click the **Create** button. 
    <img src="../images/create-connectors_10.png" alt="create-connectors" title="create-connectors" style="border: 1px solid gray; zoom:80%;"> 

    <img src="../images/create-new-connectors_11.png" alt="create-new-connectors" title="create-new-connectors" style="border: 1px solid gray; zoom:80%;"> 

4. Provide a name in the **Connector Name** field.
5. The URL should be {<a href="#pookie">[Agent AI]</a>}/integrations/five9/
6. The method should be GET. 
    <img src="../images/create-new-connector-get-method_12.png" alt="create-new-connector-get-method" title="create-new-connector-get-method" style="border: 1px solid gray; zoom:80%;">  

7. Click **Next**. 
    <img src="../images/create-new-connector-next_13.png" alt="create-new-connector-next" title="create-new-connector-next" style="border: 1px solid gray; zoom:80%;"> 

8. In the **Parameters** section, click the **Add** dropdown and select **Field**. 
    <img src="../images/create-new-connector-param_14.png" alt="create-new-connector-param" title="create-new-connector-param" style="border: 1px solid gray; zoom:80%;"> 

9. Select **session_id**, **domain_id**, **id**, **skill_name/campaign_name** (choose either skill_name or campaign_name, depending on which is used to map the bot in Agent AI), and click **Ok**. 
    <img src="../images/add-field_15.png" alt="add-field" title="add-field" style="border: 1px solid gray; zoom:80%;"> 
    
    <img src="../images/add-field-ok_16.png" alt="add-field-ok" title="add-field-ok" style="border: 1px solid gray; zoom:80%;"> 

10. Click the **Edit** icon against the parameters and change as per the following:
    * domain_id -> Domain ID
    * id -> Agent ID
    * session_id -> conversationid
    * skill_name/campaign_name -> identifiers 
        <img src="../images/changing-parameters_17.png" alt="changing-parameters" title="changing-parameters" style="border: 1px solid gray; zoom:80%;"> 

11. In the **Parameters** section, click the **Add** dropdown and select **Constant**. 
    <img src="../images/parameters-add-constant_18.png" alt="parameters-add-constant" title="parameters-add-constant" style="border: 1px solid gray; zoom:80%;"> 

12. Enter **Name** as **accountid** and the **Value** should be the **accountid** of your Agent AI account. You can find this ID by navigating to the **Agent AI** > **Flows & Channels** > **Channels** > **Digital** > **Web/Mobile Client** > **JWT App Details**. Refer to this [doc](../../../channels/add-web-mobile-client.md){:target="_blank"}.  

    <img src="../images/add-constant.png" alt="add-constant" title="add-constant" style="border: 1px solid gray; zoom:80%;"> 

13. Click **Ok** > **Next**. 
    <img src="../images/ok-next_20.png" alt="ok-next" title="ok-next" style="border: 1px solid gray; zoom:80%;"> 

14. By default, **Call** is selected for **Trigger Event** and **On Call Accepted** is selected for **On Call Event**. Select **Chat** for **Trigger Event**, and the **On Chat Arrival** appears for **On Chat Event**.
15. Click **Done**. 
    <img src="../images/create-new-connector-done_21.png" alt="create-new-connector-done" title="create-new-connector-done" style="border: 1px solid gray; zoom:80%;"> 

## Five9 Account Setup to get Incoming Chat Requests

* Create a skill, and add agents with Chat/SMS Channel enabled to the skill by following [this doc](https://documentation.five9.com/bundle/admin-console/page/admin-console/skills/_ch-user-skills.htm){:target="_blank"}.
* Create a chat profile by following [this doc](https://documentation.five9.com/bundle/digital-engagement/page/digital-engagement/digital-in-admin-console/digital-components/chat-profiles.htm){:target="_blank"}.
* Create IVR Script by following [this doc](https://documentation.five9.com/bundle/ivr-admin/page/ivr-admin/examples/creating-an-ivr-script.htm){:target="_blank"}. 
    <img src="../images/ivr-script_22.png" alt="ivr-script" title="ivr-script" style="border: 1px solid gray; zoom:80%;"> 

### Create Inbound Campaign

1. Sign in to the [Admin Console](https://admin.us.five9.net/){:target="_blank"}.
2. Search for campaigns, and select **Campaigns**. 
    <img src="../images/search-campaigns_23.png" alt="search-campaigns" title="search-campaigns" style="border: 1px solid gray; zoom:80%;"> 

    <img src="../images/select-campaigns_24.png" alt="select-campaigns" title="select-campaigns" style="border: 1px solid gray; zoom:80%;"> 

3. Click **Create**.
4. Select **Inbound**, and click **Continue**. 
    <img src="../images/create-campaign_25.png" alt="create-campaign" title="create-campaign" style="border: 1px solid gray; zoom:80%;"> 

    <img src="../images/new-campaign_26.png" alt="new-campaign" title="new-campaign" style="border: 1px solid gray; zoom:80%;"> 

5. Enter the following details: 
    1. Enter a **campaign name**.
    2. Enter a **campaign description**.
    3. Click **Chat Profile,** and either select the chat profile you created in the previous step or choose SystemDefault. 

        !!! note
            You must have the necessary permission to view campaign profiles. An error message displays if you don't have the required permission.

    4. **Voice Lines**: Enter the number of lines to dedicate to voice traffic. This is the maximum number of phone lines or ports to support the calls allotted to this campaign.
    5. **Text Interactions**: Enter the number of lines to dedicate to text interactions. 
    
        This setting runs IVR scripts for chat or email campaigns, and determines how many IVR sessions can run the IVR script concurrently. For example, if 10 customers are in a chat campaign, and the number of text channels is set to 5, then only 5 of those customer interactions use the IVR script, and the other 5 route to the chat campaign's default skill without any scripting logic.

    6. Enter the **usage threshold percentage**. This is the maximum percentage of lines in use that triggers a notification when reaching this threshold.
    7. Enter **email addresses for threshold notifications**. Use semicolons to delimit a list.
    8. Enter the number of lines to dedicate to **Visual IVR (VIVR) sessions**. This setting runs an IVR script using a web browser URL, but instead of TTS prompts playing audio (as in a voice call), it displays the actual TTS text. A voice caller and a VIVR caller get the same IVR flow and experience; one uses voice, and the other uses a browser screen for online viewing. For more information about VIVR, see the [Interactive Voice Response (IVR)](https://documentation.five9.com/bundle/ivr-admin/page/ivr-admin/landing-ivr-admin.htm){:target="_blank"} admin guide.
    9. Click **Next**.  
        <img src="../images/new-campaign-next_27.png" alt="new-campaign-next" title="new-campaign-next" style="border: 1px solid gray; zoom:80%;"> 

6. Do not select anything in the **Numbers** section, and click **Next**.
7. Click **Default Script**, and select the default IVR Script or the IVR Script created in the previous step.
8. Click **Next**. 
    <img src="../images/new-campaign-default-script_28.png" alt="new-campaign-default-script" title="new-campaign-default-script" style="border: 1px solid gray; zoom:80%;"> 

9. Click **Digital Skill**, and either select the skill created in the previous step or the Default Skill.
10. Click **Create**. 
    <img src="../images/new-campaign-digital-script_29.png" alt="new-campaign-digital-script" title="new-campaign-digital-script" style="border: 1px solid gray; zoom:80%;"> 

    !!! note
        After the inbound campaign is created successfully, start the campaign. Refer to the [Manage Campaigns](https://documentation.five9.com/bundle/admin-console/page/admin-console/campaigns/managing-campaigns.htm){:target="_blank"} doc for help. 

## Chat Simulation

1. Open [Script Generator](https://app.five9.com/five9_clients/consoles_latest/Generator/index.html){:target="_blank"}.
2. Enter your Five9 account domain name in the **Domain** field and the chat inbound campaign name in the **Profiles** field. 
    <img src="../images/chat-simulation-1_30.png" alt="chat-simulation-1" title="chat-simulation-1" style="border: 1px solid gray; zoom:80%;"> 

3. Scroll down, and click **Preview on Page**. 
    <img src="../images/chat-preview-on-page_31.png" alt="chat-preview-on-page" title="chat-preview-on-page" style="border: 1px solid gray; zoom:80%;"> 

4. Enter values in the **Name** and **Question** fields.
5. Click **Start Chat**. 
    <img src="../images/start-chat_32.png" alt="start-chat" title="start-chat" style="border: 1px solid gray; zoom:80%;"> 

6. Open the **Five9 Agent Desktop,** and change the status to **Ready (Text)**.
7. The request arrives on the desktop. Click the **lock** icon to accept the interaction. 
    <img src="../images/accept-interaction_33.png" alt="accept-interaction" title="accept-interaction" style="border: 1px solid gray; zoom:80%;"> 

8. Once the interaction is accepted, the connector opens by default where the Agent AI widget is rendered. 
    <img src="../images/agentai-widget_34.png" alt="agentai-widget" title="agentai-widget" style="border: 1px solid gray; zoom:80%;"> 

9. Click the **send** button to send a message to the customer. The message gets copied to the clipboard, if you click the **copy** button.
10. When the agent or customer ends the chat, the chat summary appears in the Agent AI widget. 
    <img src="../images/chat-summary_35.png" alt="chat-summary" title="chat-summary" style="border: 1px solid gray; zoom:80%;"> 

## Integration Limitations

* Custom Data and Secure Custom Data passing is not supported.
* Internal Transfers are not supported as the widget can’t be rendered for other agents joining the conversation, as the Five9 connector is getting disabled for other agents.
* **Concurrent Chats Limitation**: Customer messages or summary events for a specific chat are delivered to the Agent AI widget only when that chat window is active. If the agent navigates to a different chat, any new messages or events of the previous chat will not be captured and delivered to the widget.