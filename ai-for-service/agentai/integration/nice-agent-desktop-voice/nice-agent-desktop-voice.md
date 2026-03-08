This document provides detailed instructions on the integration process of the Kore.ai Agent AI widget into the NICE Agent Desktop environment. It offers step-by-step guidance to ensure a smooth and efficient setup process. This integration supports all the features of Agent AI such as Automation, [Agent Coaching](./../../agent-experience/agent-realtime-coaching.md){:target="_blank"}, [Agent Playbook](./../../agent-experience/playbook.md){:target="_blank"}, [Sentiment Analysis](./../../agent-experience/agent-assist-widget-v3.md){:target="_blank"}, and [Transcription](./../../agent-experience/agent-assist-widget-v3.md#transcript-tab){:target="_blank"} along with end-of-call summary and Custom Data passing, such as agent name and ID, to the Agent AI widget.

## Shared Responsibilities

### NICE CXOne Admin

* **ACD Configuration**: CXOne customers are responsible for creating and mapping skills within the ACD system to ensure proper routing of interactions.
* **Campaign Setup**: Customers must set up campaigns, including specifying routing and agent availability, on the CXOne platform.
* **Agent Assist Hub Configuration**: CXOne customers are responsible for configuring the Agent Assist Hub settings within NICE Studio.

### Kore.ai Admin

**Provide Studio Script for Voice**: Kore.ai will assist in setting up the Studio Script to ensure seamless integration with the CXOne platform.

## Prerequisites

* NICE CX administrators with access to a NICE CX account, privileges to set up the following configurations, and the ability to receive calls on the agent desktop.
* [NICE CX Studio](https://help.nice-incontact.com/content/studio/studio.htm){:target="_blank"} installed on your windows device.
* Agent Assist Hub enabled for your account. Contact your NICE CX representative. Note that  this requires an extra license cost.
* Access to Kore Agent AI application and familiarity with creating and configuring a Kore AI Agent.
* Kore.ai App credentials such as Agent AI Widget URL, Bot ID, Client ID, Client Secret, Account ID, and SIP URI. 
* Ensure that Voice Interaction Streams are enabled via NICE. 

## Definitions

| **Section**                                                       | **Key**                                        | **Definition**                                                                                                                          | **Reference**                                                                                                                                                                                                                                                      |
|-------------------------------------------------------------------|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NICE CX Integration Hubs > Add Agent Assist App                   | <span id="AAurl">Agent AI URL</span>           | The domain of Agent AI.                                                                                                                 | - If it is legacy Agent AI, the URL is [https://agentassist.kore.ai](https://agentassist.kore.ai).<br>- If it is UXO, the URL is [https://platform.kore.ai](https://platform.kore.ai).<br>- If it is on-prem, the URL is the origin where your Agent AI is hosted. |
| NICE CX Studio > Import the Voice Script and Configure Parameters | AgentAssistWidgetURL                           | URL that points to the Agent AI widget.<br>For example: `https://agentassist.kore.ai/koreagentassist-sdk-v3/UI/agentassist-iframe.html` | Channels > Chat section of the [Agent AI](https://platform.kore.ai/) configuration portal.                                                                                                                                                                         |
| NICE CX Studio > Import the Voice Script and Configure Parameters | BotId                                          | A unique identifier assigned to an AI Agent.                                                                                            | Channels > Chat section of the [Agent AI](https://platform.kore.ai/) configuration portal.                                                                                                                                                                         |
| NICE CX Studio > Import the Voice Script and Configure Parameters | ClientId                                       | An identifier provided to a client application.                                                                                         | Channels > Chat section of the [Agent AI](https://platform.kore.ai/) configuration portal.                                                                                                                                                                         |
| NICE CX Studio > Import the Voice Script and Configure Parameters | ClientSecret                                   | A secret key or password associated with the ClientId.                                                                                  | Channels > Chat section of the [Agent AI](https://platform.kore.ai/) configuration portal.                                                                                                                                                                         |
| NICE CX Integration Hubs > Add Agent Assist Hub                   | AccountID                                      | A unique identifier assigned to an account.                                                                                             | Channels > Chat section of the [Agent AI](https://platform.kore.ai/) configuration portal.                                                                                                                                                                         |
| NICE CX Integration Hubs > Add Agent Assist Hub                   | <span id="KVG">Kore Voice Gateway (KVG)</span> | For SaaS in the US region, the value is `wss://savg-webserver.kore.ai`.<br>For on-prem, refer to the corresponding host.                |                                                                                                                                                                                                                                                                    |

**Region Specific URLs**

|            |                                  |                               |                                     |                                                                           |
|------------|----------------------------------|-------------------------------|-------------------------------------|---------------------------------------------------------------------------|
| **Region** | **Agent AI URL**                 | **UXO URL**                   | **WSS URL**                         | **DNS**                                                                   |
| US         | `https://agentassist.kore.ai`    | `https://platform.kore.ai`    | `wss://savg-webserver.kore.ai`      | `@savg-us-prod-sbc-in-nlb-0d9a4c651955ff47.elb.us-east-1.amazonaws.com`   |
| JP         | `https://agentassist-jp.kore.ai` | `https://jp-platform.kore.ai` | `wss://jp-savg-audiosocket.kore.ai` | `@savg-jp-prod-int-nlb-3989d946fc1ced3b.elb.ap-northeast-1.amazonaws.com` |

## Configuration Steps

This section explains the configuration steps needed to integrate Kore Agent AI with NICE MAX Desktop.

- [Shared Responsibilities](#shared-responsibilities)
  - [NICE CXOne Admin](#nice-cxone-admin)
  - [Kore.ai Admin](#koreai-admin)
- [Prerequisites](#prerequisites)
- [Definitions](#definitions)
- [Configuration Steps](#configuration-steps)
  - [Step 1: Nice CX Integration Hubs \> Add Agent Assist Hub](#step-1-nice-cx-integration-hubs-add-agent-assist-hub)
  - [Step 2: NICE CX Studio \> Import the Voice Script and Configure Parameters](#step-2-nice-cx-studio-import-the-voice-script-and-configure-parameters)
  - [Step 3: NICE CX Setup \> Attach Point of Contact with Voice Script](#step-3-nice-cx-setup-attach-point-of-contact-with-voice-script)
- [Voice Simulation](#voice-simulation)

### Step 1: Nice CX Integration Hubs > Add Agent Assist Hub

1. Sign in to your NICE account with the user name and password provided by the NICE customer support.
2. Click the **Applications Launcher** button.  
    <img src="../images/app_launcher_button_1.png" alt="app_launcher_button" title="app_launcher_button" style="border: 1px solid gray; zoom:80%;">

3. A menu opens from the left side of the page. Click **OTHERS** > **Automation & AI**.  
    <img src="../images/automation_ai_2.png" alt="automation_ai" title="automation_ai" style="border: 1px solid gray; zoom:80%;">

4. Click **Agent Assist Hub** > **Add Agent Assist App**.  
    <img src="../images/add_agentassist_app_3.png" alt="add_agentassist_app" title="add_agentassist_app" style="border: 1px solid gray; zoom:80%;">

5. Enter the name of the Agent Assist App in the **AGENT ASSIST APP NAME** field.
6. Select **Custom Agent Assist Endpoints**.
7. Click **Next**.  
    <img src="../images/custom_agent_assist_endpoints_4.png" alt="custom_agent_assist_endpoints" title="custom_agent_assist_endpoints" style="border: 1px solid gray; zoom:80%;">

8. Add the following settings with config parameters:
    1. **Agent UI Option**: No Assist Panel shown to agent
    2. **App Title**: Kore AA (this is not a visible UI)
    3. **Participants**: Both  
    <img src="../images/config_parameters_5.png" alt="config_parameters" title="config_parameters" style="border: 1px solid gray; zoom:80%;">

    4. **Audio Relay Endpoint**: <a href="#KVG">{[Kore Voice Gateway(KVG)]}</a>/audiosocket/nice?sipuri=&lt;Bot SIP URI>&lt;DNS>&token=&lt;Token>&botId=&lt;Bot ID>&accountId=&lt;Account ID>&agentassist=true
        1. **Bot SIP URI**: **Agent AI** > **Flows & Channels** > **Channels** > **Voice Gateway** > **SIP Numbers** > **Configure SIP Trunk** page.  
        <img src="../images/bot_sip_uri_6.png" alt="bot_sip_uri" title="bot_sip_uri" style="border: 1px solid gray; zoom:80%;">

        2. **Bot ID and Account ID**: **Agent AI** > **Flows & Channels** > **Channels** > **Digital** > **Web/Mobile Client** page.  
            <img src="../images/botid_accountid_7.png" alt="botid_accountid" title="botid_accountid" style="border: 1px solid gray; zoom:80%;">

        3. **Token**: Create a JSON Web Token on jwt.io with the following details:
            * Payload: {“appId”: &lt;Bot Client ID>}
            * Header: {“alg”: “HS256″,”typ”: “JWT”}
            * Secret: Bot Client Secret.

9. Click **Create**.

### Step 2: NICE CX Studio > Import the Voice Script and Configure Parameters

1. Download the [script for voice](https://bitbucket.org/koreteam1/integration_sharedresources/src/main/nicecx/Nice%20Agent%20Desktop/Nice%20CX%20Agent%20Desktop%20AA%20Voice%20Script.json?raw=true){:target="_blank"} from the Kore.ai NICE integration repository.
2. Open the NICE CX Studio app from your desktop.
3. Click **File** > **Import from File**.
4. Select the downloaded script for voice. It looks like the following screenshot:  
    <img src="../images/voice_script_8.png" alt="voice_script" title="voice_script" style="border: 1px solid gray; zoom:80%;">

5. Double-click the **Generate Iframe Params** tile.  
    <img src="../images/generate_iframe_params_9.png" alt="generate_iframe_params" title="generate_iframe_params" style="border: 1px solid gray; zoom:80%;"> 

    <img src="../images/iframe_params_script_10.png" alt="iframe_params_script" title="iframe_params_script" style="border: 1px solid gray; zoom:80%;">

6. Update the values for the corresponding parameters:
    1. **Kore.ai parameters**:
        * Bot Client ID
        * Bot Client Secret
        * Bot ID
        * Agent AI Widget URL
        * Bot Language Code – “en” is set as the default language. Refer to [this doc](./../../agent-experience/supported-languages.md){:target="_blank"} to provide the language code for your AI Agent’s language.
    2. **Custom Data**: The “customdata” object in the script can be used to pass information to the Kore AI Agent. During runtime, this custom data is accessible in the UserContext of the AI Agent. Refer to *“[Access Custom Data in Agent AI Bot](./../../agent-experience/access-custom-data-in-agent-ai.md)”*{:target="_blank"} for instructions on how to access custom data in the AI Agent. 
    
    Include your data in the customdata object (one key-value pair per line). For example: `customdata.agentName="Agent" `and `customdata.agentID="1234"`

7. Double-click the **PopURL** tile.  
    <img src="../images/popurl_tile_11.png" alt="popurl_tile" title="popurl_tile" style="border: 1px solid gray; zoom:80%;">

8. In the PopURL, update the URL with the following values:
    3. <a href="#AAurl">{[Agent AI URL]}</a>/integrations/nice/iframe/?params={scriptparamsjson}
    4. Tab Title: Kore AgentAI (change as per your requirement)
    5. Pop Destination: Contact Panel (it will be preset for imported script)
9. Double-click the **Agent Assist** tile.  
    <img src="../images/agent_assist_tile_12.png" alt="agent_assist_tile" title="agent_assist_tile" style="border: 1px solid gray; zoom:80%;">

10. Select the checkbox against the Agent Assist instance you created in the above step.  
    <img src="../images/agent_assist_instance_checkbox_13.png" alt="agent_assist_instance_checkbox" title="agent_assist_instance_checkbox" style="border: 1px solid gray; zoom:80%;">

11. Click **Yes**.  
    <img src="../images/studio_action_14.png" alt="studio_action" title="studio_action" style="border: 1px solid gray; zoom:80%;">

12. After selecting Agent Assist, click the **close** button on the bottom-right corner of the page.  

    !!! note

        Do not click the “X” button to close the window as this will not save the changes.

### Step 3: NICE CX Setup > Attach Point of Contact with Voice Script

1. Go to the **NICE** home page.
2. Click the **Application Launcher** button.
3. Click **ACD**.
4. Click **Points of Contact**.
5. Click the number you want to attach with AgentAssist.
6. Click **Edit**.
7. Change the script based on your needs.
8. Click **Done** to save it.  

    !!! note

        To view the summary pop-up in the Agent AI widget, you must assign a disposition to the skill. If you don’t, the voice screen automatically closes once the session ends.

## Voice Simulation

1. Go to the **NICE** home page.
2. Click **Application Launcher** > **Agent**.  
    <img src="../images/app_launcher_15.png" alt="app_launcher" title="app_launcher" style="border: 1px solid gray; zoom:80%;">

3. Select **Integrated Softphone**, and click **Launch**.  
<img src="../images/integrated_softphone_16.png" alt="integrated_softphone" title="integrated_softphone" style="border: 1px solid gray; zoom:80%;">

4. Change the status to **Available**.  
    <img src="../images/available_status_17.png" alt="available_status" title="available_status" style="border: 1px solid gray; zoom:80%;">

5. Go back to the **NICE** home page, and click **Application Launcher** > **ACD**.
6. Click **Points of Contact**.
7. Click the Voice Point of Contact you have created.  
    <img src="../images/point_of_contact_18.png" alt="point_of_contact" title="point_of_contact" style="border: 1px solid gray; zoom:80%;">

8. Copy the **Phone Number**, and initiate the call.
9. A voice request appears on the NICE Agent desktop. Click **Accept**.  
    <img src="../images/accept_voice_call_19.png" alt="accept_voice_call" title="accept_voice_call" style="border: 1px solid gray; zoom:80%;">

10. The Kore AgentAI widget loads inside the contact panel.  
<img src="../images/agentai_widget_20.png" alt="agentai_widget" title="agentai_widget" style="border: 1px solid gray; zoom:80%;">

11. Click **Hang Up** to disconnect the call.  
<img src="../images/hang_up_voice_calls_21.png" alt="hang_up_voice_calls" title="hang_up_voice_calls" style="border: 1px solid gray; zoom:80%;">

12. The Call summary pop-up gets triggered at the end of the call session.  
<img src="../images/call_summary_popup_22.png" alt="call_summary_popup" title="call_summary_popup" style="border: 1px solid gray; zoom:80%;">

13. Select the disposition, copy the summary, and paste it in the NOTES for future reference.
14. Click **Save** > **Close**.  
    <img src="../images/save_close_summary_23.png" alt="save_close_summary" title="save_close_summary" style="border: 1px solid gray; zoom:80%;">

