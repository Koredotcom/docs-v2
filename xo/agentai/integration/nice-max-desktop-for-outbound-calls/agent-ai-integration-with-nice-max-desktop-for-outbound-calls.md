This document provides step-by-step instructions for integrating the Kore.ai Agent AI widget into the NICE MAX Desktop environment. This integration enables key Agent AI features such as Automation, [Agent Coaching](./../../agent-experience/agent-realtime-coaching.md){:target="_blank"}, [Agent Playbook](./../../agent-experience/playbook.md){:target="_blank"}, [Sentiment Analysis](./../../agent-experience/agent-assist-widget-v3.md){:target="_blank"},Transcription, along with end-of-call summary and Custom Data passing (such as agent name and ID) to the Agent AI widget.

## Shared Responsibilities

### NICE CXOne Admin

* **ACD Configuration**: CXOne customers are responsible for creating and mapping skills within the ACD system to ensure proper routing of interactions.
* **Campaign Setup**: Customers must set up campaigns, including specifying routing and agent availability, on the CXOne platform.
* **Agent Assist Hub Configuration**: CXOne customers are responsible for configuring the Agent Assist Hub settings within NICE Studio.

### Kore.ai Admin

* **Provide Studio Script for Outbound Voice**: Kore.ai will assist in provisioning the Studio script to ensure seamless integration with the CXOne platform.

## Prerequisites

* NiceCX administrator having access to a NICE CX Account, with privileges to set up the below configurations, and able to  make outbound calls on agent desktop.
* [NICE CX Studio](https://help.nice-incontact.com/content/studio/studio.htm){:target="_blank"} installed on your windows device.
* Agent Assist Hub enabled for your account. Contact your NICE CX representative. Note this requires an extra license cost.
* Access to Kore AgentAssist application and familiarity with creating and configuring a Kore AI Agent.
* Kore.ai App credentials such as Agent AI Widget URL, Bot ID, Client ID, Client Secret, Account ID and SIP URI. Read [Configure Voice Channel](./../../../channels/voice-gateway/configure-voice-gateway.md){:target="_blank"} and [Chat Channel](./../../../channels/adding-channels-to-your-bot.md){:target="_blank"} for a walkthrough. 
* Ensure that Voice Interaction Streams are enabled via NICE. 

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
   <td><span id="agentai">Agent AI URL</span>
   </td>
   <td>The domain of the Agent AI.
   </td>
   <td>
<ul>

<li>If it is legacy Agent AI, URL is <a href="https://agentassist.kore.ai">https://agentassist.kore.ai</a></li>

<li>If it is UXO, URL is <a href="https://platform.kore.ai">https://platform.kore.ai</a></li>

<li>If it is on-prem, the URL is the origin where your Agent AI is hosted.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>NICE CX Studio >  Outbound Voice Script and Configure Parameters
   </td>
   <td>AgentAssistWidgetURL
   </td>
   <td>URL that points to the Agent AI widget.
<p>
For example, https://agentassist.kore.ai/koreagentassist-sdk-v3/UI/agentassist-iframe.html
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai">Agent AI</a></strong> configuration portal.
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
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai">Agent AI</a></strong> configuration portal.
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
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai">Agent AI</a></strong> configuration portal.
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
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Nice CX Integration Hubs > Add Agent Assist App
   </td>
   <td>AccountID
   </td>
   <td>A unique identifier assigned to an account.
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Nice CX Integration Hubs > Add Agent Assist App
   </td>
   <td><span id="kvg">Kore Voice Gateway(KVG)</span>
   </td>
   <td>For Saas in US region, value is wss://savg-webserver.kore.ai
<p>
For on-prem, refer to corresponding host<strong> </strong>
   </td>
   <td>
   </td>
  </tr>
</table>

**Region Specific URLs**

<table>
  <tr>
   <td><strong>Region</strong>
   </td>
   <td><strong>Agent AI URL</strong>
   </td>
   <td><strong>UXO URL</strong>
   </td>
   <td><strong>WSS URL</strong>
   </td>
   <td><strong>DNS</strong>
   </td>
  </tr>
  <tr>
   <td>US
   </td>
   <td><a href="https://agentassist.kore.ai">https://agentassist.kore.ai</a>
   </td>
   <td><a href="https://platform.kore.ai">https://platform.kore.ai</a>
   </td>
   <td>wss://savg-webserver.kore.ai
   </td>
   <td>@savg-us-prod-sbc-in-nlb-0d9a4c651955ff47.elb.us-east-1.amazonaws.com
   </td>
  </tr>
  <tr>
   <td>JP
   </td>
   <td><a href="https://agentassist-jp.kore.ai">https://agentassist-jp.kore.ai</a>
   </td>
   <td><a href="https://jp-platform.kore.ai">https://jp-platform.kore.ai</a>
   </td>
   <td>wss://jp-savg-audiosocket.kore.ai
   </td>
   <td>@savg-jp-prod-int-nlb-3989d946fc1ced3b.elb.ap-northeast-1.amazonaws.com
   </td>
  </tr>
</table>

## Configuration Steps

This section explains the configuration steps needed to integrate Kore Agent AI with NICE MAX Desktop.

- [Shared Responsibilities](#shared-responsibilities)
  - [NICE CXOne Admin](#nice-cxone-admin)
  - [Kore.ai Admin](#koreai-admin)
- [Prerequisites](#prerequisites)
- [Definitions](#definitions)
- [Configuration Steps](#configuration-steps)
  - [Step 1: Nice CX Integration Hubs \> Add Agent Assist Hub](#step-1-nice-cx-integration-hubs-add-agent-assist-hub)
  - [Step 2: NICE CX Studio \> Import Outbound Voice Script and Configure Parameters](#step-2-nice-cx-studio-import-outbound-voice-script-and-configure-parameters)
  - [Step 3: NICE CX Account Setup for Outbound Call](#step-3-nice-cx-account-setup-for-outbound-call)
- [Outbound Call Simulation](#outbound-call-simulation)

### Step 1: Nice CX Integration Hubs > Add Agent Assist Hub

1. Sign in to your **NICE** account with the user name and password provided by the NICE customer support.
2. Click the **Applications Launcher** button.  
    <img src="../images/app-launcher-1.png" alt="app-launcher" title="app-launcher" style="border: 1px solid gray; zoom:80%;"/> 

3. A menu opens from the left side of the page. Click **OTHERS** > **Automation & AI**.  
    <img src="../images/automation-ai-2.png" alt="automation-ai" title="automation-ai" style="border: 1px solid gray; zoom:60%;"> 

4. Click **Agent Assist Hub** > **Add Agent Assist App**.  
    <img src="../images/add-agentassist-app-3.png" alt="add-agentassist-app" title="add-agentassist-app" style="border: 1px solid gray; zoom:60%;"> 

5. Enter the name of the **Agent Assist App** in the **AGENT ASSIST APP NAME** field.
6. Select **Custom Agent Assist Endpoints**.
7. Click **Next**.  
    <img src="../images/custom-agentassist-endpoints-4.png" alt="custom-agentassist-endpoints" title="custom-agentassist-endpoints" style="border: 1px solid gray; zoom:80%;"/> 

8. Add the following settings with config parameters:  
    * Agent UI Option: Available by default 
    * App URL: {<a href="#agentai">[Agent AI URL]</a>}/integrations/nice/iframe/?params={scriptparams}
    * App Title: Kore Agent AI (change as needed)
    * Participants: Both  
       <img src="../images/configuration-5.png" alt="configuration" title="configuration" style="border: 1px solid gray; zoom:80%;"/> 

    * Audio Relay Endpoint: {<a href="#kvg">[Kore Voice Gateway</a>(KVG)]}/audiosocket/nice?sipuri=&lt;Bot SIP URI>&lt;DNS>&token=&lt;Token>&botId=&lt;Bot ID>&accountId=&lt;Account ID>&agentassist=true
      * **Bot SIP URI**: **Flows & Channels** > **Channels** > **Voice Gateway** > **SIP Numbers** > **Configure SIP Trunk** > **Agent AI** section of the **[Agent AI](https://agentassist.kore.ai/){:target="_blank"}** configuration portal.  
       <img src="../images/configure-sip-trunk_6.png" alt="configure-sip-trunk" title="configure-sip-trunk" style="border: 1px solid gray; zoom:80%;"/> 

      * **Bot ID and Account ID**: **Flows & Channels** > **Channels** > **Digital** > **Web/Mobile Client** > **JWT App Details** section of the **[Agent AI](https://agentassist.kore.ai/){:target="_blank"}** configuration portal.  
       <img src="../images/web-mobile-client_7.png" alt="web-mobile-client" title="free text" style="border: 1px solid gray; zoom:80%;"/> 

      * Token: Create a **JSON Web Token** on [jwt.io](https://www.jwt.io/){:target="_blank"} with the following details:
        * Payload: {“appId”: &lt;Bot Client ID>}
        * Header: {“alg”: “HS256″,”typ”: “JWT”}
        * Secret: Bot Client Secret.  

9. Click **Create**.

### Step 2: NICE CX Studio > Import Outbound Voice Script and Configure Parameters

1. Download the  [script for outbound voice](https://bitbucket.org/koreteam1/integration_sharedresources/src/main/nicecx/MAX%20Outbound%20Voice%20Export.XML){:target="_blank"} from the **Kore.ai Nice integration** repository.
2. Open the **NICE CX Studio** app from your desktop.
3. Click **File** > **Import from File**.
4. Select the **downloaded script** for chat / voice.
5. Double-click the **Generate iframe params** tile. 
    <img src="../images/generate-iframe-params-8.png" alt="generate-iframe-params" title="generate-iframe-params" style="border: 1px solid gray; zoom:80%;"/> 

    <img src="../images/iframe-param-code-9.png" alt="iframe-param-code" title="iframe-param-code" style="border: 1px solid gray; zoom:80%;"/> 

6. Update the values for the corresponding parameters:
    1. Kore.ai Parameters
        1. Bot Client ID
        2. Bot Client Secret
        3. Bot ID
        4. Agent AI Widget URL
        5. Bot Language Code - “en” is set as the default language. Refer to this [doc](./../../agent-experience/supported-languages.md){:target="_blank"} to provide the language code for your AI Agent's language.
    2. Custom Data: The **customdata** object in the script can be used to pass information to the Kore AI Agent. During runtime, this customdata will be accessible in the UserContext of the AI Agent. Refer to *“[Access Custom Data in Agent AI Bot](./../../agent-experience/access-custom-data-in-agent-ai.md){:target="_blank"}”* for instructions on how to access customdata in the AI Agent. 
    Include your data in the customdata object (one key-value pair per line). For example:
        1. `customdata.agentName="Agent"`
        2. `customdata.agentID="1234"`
    3. NICE CX Credentials: Base region URL is the Host URL of the login page. If the URL for ACD is `https://home-abc.nice-incontact.com`, then the API URL would be `https://api-abc.nice-incontact.com`. Also, it is necessary to use the URLs without the trailing slash.
        1. NICE CX API Access Key
        2. NICE CX API Access Key Secret
        3. NICE CX API URL
        4. NICE CX Base Region URL 

            !!! note
                Refer to [Manage Access Keys](https://help.nice-incontact.com/content/admin/security/manageaccesskeys.htm){:target="_blank"} to create NICE CX API Access Key and NICE CX API Access Key Secret. 

7. Double-click the **Agent Assist** tile.  
    <img src="../images/agent-assist-tile-10.png" alt="agent-assist-tile" title="agent-assist-tile" style="border: 1px solid gray; zoom:80%;"/> 

8. Select the **checkbox** against the Agent Assist instance you created in the above step.  
    <img src="../images/agent-assist-instance-11.png" alt="agent-assist-instance" title="agent-assist-instance" style="border: 1px solid gray; zoom:80%;"/> 

9. Click **Yes**.  
    <img src="../images/agent-assist-app-12.png" alt="agent-assist-app" title="agent-assist-app" style="border: 1px solid gray; zoom:60%;"> 

10. After selecting **Agent Assist**, click the **Close** button on the bottom-right corner of the page.  

    !!! note

        Don't click the **X** button to close the window as this doesn't save the changes.  

### Step 3: NICE CX Account Setup for Outbound Call

On the **NICE Incontact** home page, click the **application launcher** button, and select **ACD**.

**Create a Campaign**  
<img src="../images/create-a-campaign-13.png" alt="create-a-campaign" title="create-a-campaign" style="border: 1px solid gray; zoom:80%;"/> 

**Create a Skill**   
<img src="../images/create-a-skill-14.png" alt="create-a-skill" title="create-a-skill" style="border: 1px solid gray; zoom:60%;"> 

For Custom Script, select the NICE Studio Script created in the previous step.

**Create a Disposition**  
<img src="../images/create-a-disposition-15.png" alt="create-a-disposition" title="create-a-disposition" style="border: 1px solid gray; zoom:80%;"/> 

## Outbound Call Simulation

1. Go to the **NICE** home page.
2. Click **Application Launcher** > **MAX**.  
    <img src="../images/integrated-softphone-16.png" alt="integrated-softphone" title="integrated-softphone" style="border: 1px solid gray; zoom:60%;"> 
3. Select **Integrated Softphone**, and click **Connect**. 
4. Change the status to **Available**.  
    <img src="../images/available-status-17.png" alt="available-status" title="available-status" style="border: 1px solid gray; zoom:60%;"> 

5. Click **New** at the bottom-left of the screen.  
    <img src="../images/new-contact-18.png" alt="new-contact" title="new-contact" style="border: 1px solid gray; zoom:80%;"/> 

6. Enter the number in the search bar and click on **Call** and select the outbound skill created in the previous step.  
    <img src="../images/new-call-19.png" alt="new-call" title="new-call" style="border: 1px solid gray; zoom:80%;"/> 

7. When the call is accepted by the customer, Agent AI widget will be loaded automatically.  
    <img src="../images/agent-ai-widget-20.png" alt="agent-ai-widget" title="agent-ai-widget" style="border: 1px solid gray; zoom:80%;"/> 

    <img src="../images/widget-21.png" alt="widget" title="widget" style="border: 1px solid gray; zoom:80%;"/> 

8. Click **Hang Up** to disconnect the call.  
    <img src="../images/hang-up-call-22.png" alt="hang-up-call" title="hang-up-call" style="border: 1px solid gray; zoom:80%;"/> 

9. Click **Hang Up** again to confirm disconnection of the call.
    1. The Call **summary** pop-up gets triggered at the end of the call session.
10. Select the **disposition,** and click **Save & Close**.  
    <img src="../images/summary-23.png" alt="summary" title="summary" style="border: 1px solid gray; zoom:80%;"/> 
