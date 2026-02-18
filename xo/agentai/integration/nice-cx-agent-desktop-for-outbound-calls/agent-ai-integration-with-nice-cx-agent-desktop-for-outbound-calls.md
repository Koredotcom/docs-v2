# Agent AI Integration with NICE CXone Agent Desktop for Outbound Calls

This document provides step-by-step instructions for integrating the Agent AI widget into the NICE Agent Desktop environment. This integration supports key Agent AI features such as Automation, [Agent Coaching](./../../agent-experience/agent-realtime-coaching.md){:target="_blank"}, [Agent Playbook](../../agent-experience/playbook.md){:target="_blank"}, [Sentiment Analysis](../../agent-experience/agent-assist-widget-v3.md){:target="_blank"}, and Transcription. It also supports end-of-call summary and custom data passing (such as agent name and ID) to the Agent AI widget.  

## Prerequisites

Before beginning the integration, ensure that you have the following: 

* NICE CXone
    * A NICE CXone administrator account with privileges to:
        * Configure automatic call distribution (ACD).
        * Create campaigns, skills, and dispositions.
        * Access NICE CX Studio and NICE Integration Hubs (Automation & AI >  Agent Assist Hub)
    * NICE CX Studio installed on your Windows system.
    * Agent Assist Hub available for your NICE CXone account. (Contact NICE Support; additional license cost applies.)
    * Ability to place outbound calls from NICE Agent Desktop.
    * Voice Interaction Streams available for your NICE environment.
* Agent AI
    * Access to the Agent AI application.
    * Access to the Agent AI configuration portal.
    * An existing Agent configured with:
        * Channels → Voice Gateway (KVG) set up
        * Channels → Web/Mobile (for Client ID, Client Secret, Bot ID)
    * Agent AI widget URL, Bot ID, Client ID, Client Secret, and Account ID.
    * SIP Trunk + SIP URI configured under **Agent AI** > **Flows & Channels** > **Voice Gateway** > **SIP Numbers** > **Configure SIP Trunk**.
    * Network/firewall rules that allow access to:
        * HTTPS: `platform.kore.ai` (or your on-prem host)
        * WSS (Voice WebSocket): `savg-webserver.kore.ai` or region equivalent. 

## Definitions

<table>
  <tr>
   <td><strong>Section</strong>
   </td>
   <td><strong>Key</strong>
   </td>
   <td><strong>Definition</strong>
   </td>
   <td><strong>Reference</strong>
   </td>
  </tr>
  <tr>
   <td>Nice CX Integration Hubs > Add Agent Assist App
   </td>
   <td>Agent AI URL
   </td>
   <td>The domain of the Agent AI widget.
   </td>
   <td>
<ul>

<li>URL is <a href="https://platform.kore.ai/">https://platform.kore.ai</a></li>

<li>If it is on-prem, the URL is the origin where your Agent AI widget is hosted.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>NICE CX Studio > Outbound Voice Script and Configure Parameters
   </td>
   <td>AgentAssistWidgetURL
   </td>
   <td>URL that points to the Agent AI widget.
<p>
For example, <a href="https://platform.kore.ai/koreagentassist-sdk-v3/UI/agentassist-iframe.html">https://platform.kore.ai/koreagentassist-sdk-v3/UI/agentassist-iframe.html</a> 
   </td>
   <td>Agent AI > Flows & Channels > Digital > Web/Mobile Client > JWT App Details
   </td>
  </tr>
  <tr>
   <td>Nice CX Integration Hubs > Add Agent Assist App
<p>
+
<p>
NICE CX Studio > Import Outbound Voice Script and Configure Parameters
   </td>
   <td>BotId
   </td>
   <td>A unique identifier assigned to an AI Agent.
   </td>
   <td>Agent AI > Flows & Channels > Digital > Web/Mobile Client > JWT App Details
   </td>
  </tr>
  <tr>
   <td>Nice CX Integration Hubs > Add Agent Assist App
<p>
+
<p>
NICE CX Studio > Import Outbound Voice Script and Configure Parameters
   </td>
   <td>ClientId
   </td>
   <td>An identifier provided to a client application.
   </td>
   <td>Agent AI > Flows & Channels > Digital > Web/Mobile Client > JWT App Details
   </td>
  </tr>
  <tr>
   <td>Nice CX Integration Hubs > Add Agent Assist App
<p>
+
<p>
NICE CX Studio > Import Outbound Voice Script and Configure Parameters
   </td>
   <td>ClientSecret
   </td>
   <td>A secret key or password associated with the ClientId.
   </td>
   <td>Agent AI > Flows & Channels > Digital > Web/Mobile Client > JWT App Details configuration portal.
   </td>
  </tr>
  <tr>
   <td>Nice CX Integration Hubs > Add Agent Assist App
   </td>
   <td>AccountID
   </td>
   <td>A unique identifier assigned to an account.
   </td>
   <td>Agent AI > Flows & Channels > Digital > Web/Mobile Client > JWT App Details
   </td>
  </tr>
  <tr>
   <td>Nice CX Integration Hubs > Add Agent Assist App
   </td>
   <td><span id="kvg">Voice Gateway (KVG)</span>
   </td>
   <td>For Saas in the US region, the value is wss://savg-webserver.kore.ai
<p>
For on-prem, refer to the corresponding host
   </td>
   <td>
   </td>
  </tr>
</table>

**Region-Specific URLs**

<table>
  <tr>
   <td><strong>Region</strong>
   </td>
   <td><strong>Agent AI URL</strong>
   </td>
   <td><strong>WSS URL</strong>
   </td>
   <td><strong>DNS</strong>
   </td>
  </tr>
  <tr>
   <td>US
   </td>
   <td><a href="https://platform.kore.ai/">https://platform.kore.ai</a>
   </td>
   <td>wss://savg-webserver.kore.ai
   </td>
   <td>@savg-us-prod-sbc-in-nlb-0d9a4c651955ff47.elb.us-east-1.amazonaws.com
   </td>
  </tr>
  <tr>
   <td>JP
   </td>
   <td><a href="https://jp-platform.kore.ai/">https://jp-platform.kore.ai</a>
   </td>
   <td>wss://jp-savg-audiosocket.kore.ai
   </td>
   <td>@savg-jp-prod-int-nlb-3989d946fc1ced3b.elb.ap-northeast-1.amazonaws.com
   </td>
  </tr>
</table> 

## Configuration Steps

This section explains the configuration steps you must complete to integrate Agent AI with NICE CXone Agent Desktop. 

* [NICE CX Integration Hubs, Add Agent Assist Hub](#step-1-nice-cx-integration-hubs-add-agent-assist-hub)
* [NICE CX Studio, Import Outbound Voice Script and Configure Parameters](#step-2-nice-cx-studio-import-outbound-voice-script-and-configure-parameters)
* [NICE CX Account Setup for Outbound Calls](#step-3-nice-cx-account-setup-for-outbound-calls)
* [Outbound Voice Simulation](#outbound-call-simulation) 

### Step 1: NICE CX Integration Hubs > Add Agent Assist Hub 

1. Sign in to your **NICE** account with the user name and password provided by the NICE Customer Support.
2. Select the **Applications Launcher** button.  
    <img src="../images/app-launcher-button-1.png" alt="app-launcher-button" title="app-launcher-button" style="border: 1px solid gray; zoom:80%;"/>  

3. Select **OTHERS** > **Automation & AI**.   
    <img src="../images/automation-ai-2.png" alt="automation-ai" title="automation-ai" style="border: 1px solid gray; zoom:60%;">  

4. Select **Agent Assist Hub** > **Add Agent Assist App**.
5. Enter the name of the **Agent Assist App** in the **AGENT ASSIST APP NAME** field.
6. Select **Custom Agent Assist Endpoints**.
7. Select **Next**.  
    <img src="../images/add-agentassist-app-3.png" alt="agentassist-app" title="agentassist-app" style="border: 1px solid gray; zoom:90%;">  

8. Add the following settings with config parameters:  
    * **Agent UI Option**: No Assist Panel shown to the agent
    * **App Title**: Agent AI (change as needed)
    * **Participants**: Both 
    * Turn on the **CTI EVENT** toggle.  
    <img src="../images/config-parameters-4.png" alt="config-parameters" title="config-parameters" style="border: 1px solid gray; zoom:80%;"/>  

    * **Audio Relay Endpoint**: {<a href="#kvg">[Kore Voice Gateway</a>(KVG)]}</a>/audiosocket/nice?sipuri=&lt;Bot SIP URI>&lt;DNS>&token=&lt;Token>&botId=&lt;Bot ID>&accountId=&lt;Account ID>&agentassist=true
        * **Bot SIP URI**: Flows & Channels > Channels > Voice Gateway > SIP Numbers > Configure SIP Trunk > Agent AI section of the **[Agent AI](https://platform.kore.ai/)** configuration portal.  
            <img src="../images/configure-sip-trunk-5.png" alt="configure-sip-trunk" title="configure-sip-trunk" style="border: 1px solid gray; zoom:80%;"/>  

        * **Bot ID and Account ID**: Flows & Channels > Channels > Digital > Web/Mobile Client > JWT App Details section of the **[Agent AI](https://platform.kore.ai/){:target="_blank"}** configuration portal.  
            <img src="../images/web-mobile-client-6.png" alt="web-mobile-client" title="web-mobile-client" style="border: 1px solid gray; zoom:70%;">  

        * **Token**: Create a **JSON Web Token** on [jwt.io](https://www.jwt.io/){:target="_blank"} with the following details:
            * Payload: {“appId”: &lt;Bot Client ID>}
            * Header: {“alg”: “HS256″,”typ”: “JWT”}
            * Secret: Bot Client Secret.  
            
9. Select **Create**. 

### Step 2: NICE CX Studio > Import Outbound Voice Script and Configure Parameters

1. Download the script for outbound voice from the Agent AI repository.
    * XML script [link](https://raw.githubusercontent.com/Koredotcom/korecc-twilio/refs/heads/master/Nice/NICE%20Agent%20Desktop%20Outbound%20Voice.XML){:target="_blank"}  
    * JSON script [link](https://raw.githubusercontent.com/Koredotcom/korecc-twilio/refs/heads/master/Nice/NICE%20Agent%20Desktop%20Outbound%20Voice.json){:target="_blank"}  
2. Open the **NICE CX Studio** app from your desktop.
3. Select **File** > **Import from File**.
4. Select the **downloaded outbound voice script**.
5. Double-click the **Generate iframe params** tile. 
    <img src="../images/generate-iframe-params-7.png" alt="generate-iframe-params" title="generate-iframe-params" style="border: 1px solid gray; zoom:80%;"/>  

    <img src="../images/script-8.png" alt="script" title="script" style="border: 1px solid gray; zoom:80%;"/>  

6. Update the values for the corresponding parameters:
    * Agent AI Parameters
        * Bot Client ID
        * Bot Client Secret
        * Bot ID
        * Agent AI Widget URL
        * Bot Language Code: **en** is set as the default language. Refer to the [Supported Languages](https://docs.kore.ai/xo/agentai/agent-experience/supported-languages/){:target="_blank"} doc to provide the language code for your AI Agent's language.
    * Custom Data: You can use the **customdata** object in the script to pass information to the AI Agent. At runtime, this customdata is accessible in the UserContext of the AI Agent. Refer to *[Access Custom Data in Agent AI Bot](../../agent-experience/access-custom-data-in-agent-ai.md){:target="_blank"}* for instructions on how to access customdata in the AI Agent. Include your data in the customdata object (one key-value pair per line). For example: 
        * `customdata.agentName="Agent"`
        * `customdata.agentID="{__agentid}"`
7. Double-click the **Agent Assist** tile.  
    <img src="../images/agent-assist-tile-9.png" alt="agent-assist-tile" title="agent-assist-tile" style="border: 1px solid gray; zoom:80%;"/>  

8. Select the **checkbox** next to the Agent Assist instance you created in the above step.  
    <img src="../images/agent-assist-instance-10.png" alt="agent-assist-instance" title="agent-assist-instance" style="border: 1px solid gray; zoom:80%;"/>   

9. Select **Yes**.
10. After selecting **Agent Assist**, select the **Close** button on the bottom-right corner of the page.  

    !!! note
        Do not select the **X** button to close the window, as this does not save the changes. 

### Step 3: NICE CX Account Setup for Outbound Calls 

Follow [Set Up Manual Outbound Voice](https://help.nicecxone.com/content/acd/channels/voice/setupmanualobvoice.htm){:target="_blank"} to set up Outbound Voice in NICE CXOne. 

During Skill creation, select the **NICE Studio Script** created in the previous step as the custom script. 

!!! note

    To view the summary pop-up in the Agent AI widget, you must select either **Automatic Wrap-up** or **Disposition** for the **Post Contact** setting of the skill. If you don’t select any, by default **None** is selected. The chat/voice screen automatically closes once the conversation ends.  

## Outbound Call Simulation 

1. Go to the **NICE** home page.
2. Select **Application Launcher** > **Agent**.
3. Select **Integrated Softphone**.
4. Select **Connect**.
5. Change the status to **Available**.  
    <img src="../images/integrated-softphone-available-11.png" alt="integrated-softphone-available" title="integrated-softphone-available" style="border: 1px solid gray; zoom:80%;"/>  

6. Select **New Outbound** at the top-left of the desktop.  
    <img src="../images/new-outbound-12.png" alt="new-outbound" title="new-outbound" style="border: 1px solid gray; zoom:80%;"/>   

7. Enter a phone number in the search bar, select **Voice** **Call**, and select the outbound skill created in the previous step.  
    <img src="../images/making-outbound-call-13.png" alt="making-outbound-call" title="making-outbound-call" style="border: 1px solid gray; zoom:80%;"/>  

8. Select the **Call** button.
9. When a customer accepts the call, the Agent AI widget loads automatically.  
    <img src="../images/widget-loading-automatically-14.png" alt="widget-loading-automatically" title="free text" style="border: 1px solid gray; zoom:80%;"/>  

10. Select **Hang Up** to disconnect the call.
11. The **call summary** pop-up is triggered at the end of the call session.
12. Select the disposition **(Submit or Copy)**, and select **Save & Close**.   
    <img src="../images/call-summary-15.png" alt="call-summary" title="call-summary" style="border: 1px solid gray; zoom:80%;"/>   
