# Kore Agent AI with Salesforce NICE CX-CTI 

This document provides an overview of the setup and configuration process of the Agent AI widget with NICE CX Telephony using the Salesforce NICE CX CTI package.

**Use Case**: Show voice transcripts and provide next-best actions from a configured AI Agent, on the Agent AI widget, to agents when they receive a phone call from a customer.

When a customer calls a NICE CX phone number, the call is received on the Salesforce NICE CTI interface. Based on the customer’s phone number, the CTI rule matches the corresponding Salesforce object (such as Account/Contact/Case) and displays it to the agents. The incoming voice stream is shared with Voice Gateway, which in turn generates transcripts of the voice stream and displays them in the Agent AI widget embedded in the matched Salesforce object.

## Prerequisites

* The **[NICE CX Salesforce](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3000000B4BKsEAN){:target="_blank"}** package installed in your Salesforce org.
* **NICE CX** account set up and can receive calls on the **Salesforce Service Console** softphone.
* **NICE CX Studio** installed on your device.
* **Agent Assist Hub** enabled for your NICE CX account.
* [AgentAssist](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000HSGlnUAH){:target="_blank"} for Salesforce installed on your Salesforce account. (Salesforce AppExchange > Search for “Agent AI By Kore.ai, Inc.”)
* Have the AI Agent credentials saved separately. You need the Widget URL, Bot ID, Client ID, Client Secret, Account ID, and SIP URI. Read [Voice Gateway](../../../channels/voice-gateway/configure-voice-gateway.md#steps-to-configure-sip-trunk){:target="_blank"} and [Chat](../../../channels/add-web-mobile-client.md){:target="_blank"} for a walkthrough. 
* Ensure that Voice Interaction Streams are enabled via NICE. 

## Shared Responsibilities

<table>
  <tr>
   <td rowspan="2" ><strong>Activity</strong>
   </td>
   <td colspan="2" ><strong>Responsibility</strong>
   </td>
  </tr>
  <tr>
   <td><strong>CXOne Customer</strong>
   </td>
   <td><strong>Kore.ai</strong>
   </td>
  </tr>
  <tr>
   <td><strong>NICE One Platform</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>ACD Configuration
   </td>
   <td>
<ul>

<li>Skills creation and mapping</li>

<li>Hours of Operation</li>

<li>Points of Contact</li>

<li>Campaign</li>

<li>Customization of Scripts and attaching to Number/Chat PoC</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>CXOne Studio Script
   </td>
   <td>
<ul>

<li>Import the voice script and customize (only if needed).</li>

<li>Edit the Nodes and provide the Customized AI Agent details in the script.</li>
</ul>
   </td>
   <td>
<ul>

<li>Provisioning the studio script template</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Signal API Auth (only for chat)
   </td>
   <td>
<ul>

<li>Configure CXOne Authentication for accessing the CXOne Signal API from the AI Agent. 
Need signaling API key and secret.</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Agent Assist Hub
   </td>
   <td>
<ul>

<li>Configure NICE Studio Agent Assist</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>AI Agent Configuration</strong>
   </td>
   <td>
<ul>

<li>AI Agent creation</li>

<li>AI Agent Credentials generation</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>AI Agent Configuration</strong>
   </td>
   <td>
    AI Agent creation,
    AI Agent Credentials generation
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Salesforce Org</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Voice/Chat Configuration
   </td>
   <td>
<ul>

<li>Enabling NICE Calls/Chats on Salesforce with proper screen pop settings</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Installing the Agent AI Package
   </td>
   <td>
<ul>

<li>Installing the package</li>
</ul>
   </td>
   <td>
<ul>

<li>Providing the package URL</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Configuring the Agent AI Package
   </td>
   <td>
<ul>

<li>Validate prerequisite licenses</li>

<li>Configure AI Agent Details</li>

<li>Add NICE Signal Credentials (Only for Chat)</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>NICE CX
   </td>
   <td>
    Configure Salesforce Agent Settings, select Salesforce Object to embed the Agent AI widget.
   </td>
   <td>
   </td>
  </tr>
</table>

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
   <td>Set up NICE AgentAssist Hub to stream voice to Agent AI
   </td>
   <td><span id="AI URL">Agent AI URL</span>
   </td>
   <td>The domain of the Agent AI.
   </td>
   <td>
<ul>

<li>If it is legacy Agent AI, the URL is <a href="https://agentassist.kore.ai">https://agentassist.kore.ai</a>.</li>

<li>If it is UXO, URL is <a href="https://platform.kore.ai">https://platform.kore.ai</a>.</li>

<li>If it is on-prem, the URL is the origin where your Agent AI is hosted.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Agent AI  package setup and configuration
   </td>
   <td>AgentAssist Widget URL
   </td>
   <td>URL that points to the Agent AI widget.
<p>
For example, https://agentassist.kore.ai/koreagentassist-sdk-v3/UI/agentassist-iframe.html
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Agent AI package setup and configuration
   </td>
   <td>BotId
   </td>
   <td>A unique identifier assigned to an AI Agent.
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Agent AI package setup and configuration
   </td>
   <td>ClientId
   </td>
   <td>An identifier provided to a client application.
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Agent AI package setup and configuration
   </td>
   <td>ClientSecret
   </td>
   <td>A secret key or password associated with the ClientId.
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Set up NICE AgentAssist Hub to stream voice to Agent AI
   </td>
   <td>AccountID
   </td>
   <td>A unique identifier assigned to an account.
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Set up NICE AgentAssist Hub to stream voice to Agent AI
   </td>
   <td><span id="KVG">Voice Gateway(VG)</span>
   </td>
   <td>For Saas in the US region, the value is savg-webserver.kore.ai
<p>
For on-prem, refer to the corresponding host.<strong> </strong>
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

## Architecture Diagrams

### Chat

<img src="../images/chat-architecture.png" alt="chat-architecture" title="chat-architecture" style="border: 1px solid gray; zoom:80%;"/>

### Voice

<img src="../images/voice-architecture.png" alt="voice-architecture" title="voice-architecture" style="border: 1px solid gray; zoom:80%;"/>

## Set up Salesforce-NICE CTI package

Follow [this article](https://help.nice-incontact.com/content/agent/agentapplicationadministration/agentforsalesforce/installation.htm?TocPath=Agent%20Application%20Administration%7CAgent%20Application%20Administration%7CSalesforce%20Agent%20%7C_____3){:target="_blank"} to install and configure the NICE CTI package on your Salesforce account.

Topics included in the above article:

* Install Salesforce Agent
* Install the Salesforce Agent Package
* Assign Users to Your License
* Enable Salesforce Agent in Lightning Experience
* Configure Permission Sets For a Single User
* Configure Permission Sets For Multiple Users
* Configure the NICE CXone Call Center
* Assign Users to the NICE CXone Call Center
* Configure Softphone Layout
* Assign Profiles to the Softphone Layout
* Enable Click2Jack

## Set up NICE AgentAssist Hub to stream voice to Agent AI

This app will be used in the studio script.

1. Sign in to your **NICE account** with the username and password provided by the NICE customer support.
2. Click the **applications launcher** button. A menu opens from the left side of the page.  
<img src="../images/applications_launcher_button-1.png" alt="applications_launcher_button" title="applications_launcher_button" style="border: 1px solid gray; zoom:80%;"/>

3. Click **OTHERS** > **Automation & AI**.  
<img src="../images/automation_ai-2.png" alt="automation_ai" title="automation_ai" style="border: 1px solid gray; zoom:60%;">

4. Click **Agent Assist Hub** > **Add Agent Assist App**.  
<img src="../images/add_agentassist_app-3.png" alt="add_agentassist_app" title="add_agentassist_app" style="border: 1px solid gray; zoom:80%;"/>

5. Enter the name of the Agent Assist App in the **AGENT ASSIST APP NAME** field.
6. Select **Custom Agent Assist Endpoints**.
7. Click **Next**.  
<img src="../images/next-4.png" alt="next" title="next" style="border: 1px solid gray; zoom:80%;"/>

8. Add the following settings with config parameters provided by the Support team:
    * **Agent UI Option**: Available by default
    * **App URL**: <span style="text-decoration:underline;">{<a href="#AI URL">Agent AI URL</a>}</span>/integrations/nice/iframe/?params={scriptparams}
    * **App Title**: Kore Agent AI (change as needed)
    * **Participants**: Both
    * **Text Relay Endpoint**: (only for chat) {<a href="#AI URL">Agent AI URL</a>}/integrations/nice/relay/toKore  
    <img src="../images/configurations-5.png" alt="configurations" title="configurations" style="border: 1px solid gray; zoom:80%;"/>
    * **Audio Relay Endpoint**: {<a href="#KVG">Voice Gateway(VG)</a>}/audiosocket/nice?sipuri=&lt;Bot SIP URI>&token=&lt;Token>&botId=&lt;Bot ID>&accountId=&lt;Account ID>&agentassist=true  
    
        * **Bot SIP URI**: **Channels** > **Voice** section of the **[Agent AI](https://agentassist.kore.ai){:target="_blank"}** configuration portal.  
        <img src="../images/channels_voice-6.png" alt="channels_voice" title="channels_voice" style="border: 1px solid gray; zoom:80%;"/>
        * **Bot ID and Account ID**: **Channels** > **Chat** section of the **[Agent AI](https://agentassist.kore.ai){:target="_blank"}** configuration portal.  
        <img src="../images/channels-chat-7.png" alt="channels-chat" title="channels-chat" style="border: 1px solid gray; zoom:80%;"/>
        * **Token**: Create a JSON Web Token on [jwt.io](https://www.jwt.io) with the following details.
            * Payload: {"appId": &lt;Bot Client ID>}
            * Header: {"alg": "HS256","typ": "JWT"}
            * Secret: Your Kore.ai Client Secret.
    * Scroll down and add the following Configuration Parameters. (Only for Chat).  
    <img src="../images/configuration-parameters-8.png" alt="configuration-parameters" title="configuration-parameters" style="border: 1px solid gray; zoom:80%;"/>

9. Click **Create**

## Agent AI package setup and configuration

* Install **[Agent AI](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000HSGlnUAH){:target="_blank"}** on your Salesforce account.

### Set up the AgentAssist feature

1. Click the **app launcher**.  
<img src="../images/app-launcher-9.png" alt="app-launcher" title="app-launcher" style="border: 1px solid gray; zoom:80%;"/>

2. Type **kore** in the search box and select **Kore AgentAssist Feature Configuration** from the displayed list.  
<img src="../images/kore-agentassist-feature-configuration-10.png" alt="kore-agentassist-feature-configuration" title="kore-agentassist-feature-configuration" style="border: 1px solid gray; zoom:80%;"/>

3. Click **New** from the top-right corner of the page.  
<img src="../images/new-11.png" alt="new" title="new" style="border: 1px solid gray; zoom:80%;"/>

4. Type **Test Configuration** in the **Configuration Name** field.  
<img src="../images/test-configuration-12.png" alt="test-configuration" title="test-configuration" style="border: 1px solid gray; zoom:80%;"/>

5. Select **NICE inContact** in the **CTI Provider** list.  
<img src="../images/nice-incontact-13.png" alt="nice-incontact" title="nice-incontact" style="border: 1px solid gray; zoom:80%;"/>

6. Select **Active**, and click **Save**.  
<img src="../images/active-save-14.png" alt="active-save" title="active-save" style="border: 1px solid gray; zoom:80%;"/>

### Set up the AgentAssist Configuration

1. Click the **app launcher**.
2. Type **config** in the search box, and select **Kore AgentAssist Configuration** from the displayed list.

   <img src="../images/kore-agentassist-configuration-15.png" alt="kore-agentassist-configuration" title="kore-agentassist-configuration" style="border: 1px solid gray; zoom:80%;"/>

3. Click **New** from the top-right corner of the page.

4. Enter the required details. Note that you can fetch the **AgentAssist URL**, **Bot ID**, **Client ID**, and **Client Secret** details from the **[Agent AI](https://agentassist.kore.ai){:target="_blank"}** configuration portal.  
<img src="../images/configuration-portal-17.png" alt="configuration-portal" title="configuration-portal" style="border: 1px solid gray; zoom:80%;"/> 

   * Select a language in the **Language** dropdown list. The selected language corresponds to the language configured in the AI Agent.  
  
      <img src="../images/configuration-details-16.png" alt="free text" title="free text" style="border: 1px solid gray; zoom:80%;"/>

5. Select **Active** and click **Save**.

### Configure NICE CTI Data in Salesforce

1. Click the **app launcher** in Salesforce, and then go to **Salesforce Agent Settings**.
2. Sign in to your **NICE CX** account.
3. Ensure the **Store Salesforce Agent Script Variables** setting is enabled in the **Data Storage** section.
4. In the dropdown list, select a Salesforce object against which the Agent AI widget needs to be configured in its page layout.  
<img src="../images/salesforce-object-selection-18.png" alt="salesforce-object-selection" title="salesforce-object-selection" style="border: 1px solid gray; zoom:80%;"/>

### Configure Page layout to embed the Agent AI Widget to Salesforce object

Assuming the Account Object is mapped above, open the page layout for Account Object.

In the filter field, type **NiceCTI** and drag and drop the object onto the **Account Object** layout page.  
<img src="../images/nice-cti-19.png" alt="nice-cti" title="nice-cti" style="border: 1px solid gray; zoom:80%;"/>

### Configure a Visualforce Page to embed the Agent AI Widget (If Applicable)

#### Step-1: Create a Lightning Out App

Create a Lightning Out app, a special type of standalone Aura app:

1. Open the **Developer Console** from your **Salesforce** org.
2. Navigate to **File** > **New** > **Lightning Application**.
3. Fill in the **Name** and **Description** fields, and then click **Submit**.
4. Paste the following code into the editor, and save the **Lightning Application**:

```
<aura:application access="GLOBAL" extends="ltng:outApp">
    <!-- Lightning Web Component will be loaded here from Visualforce page -->
    <aura:dependency resource="KAA:niceCTIAgentAssistVoice" />
</aura:application>
```

#### Step-2: Create/Edit Visualforce Page

1. Either create a new Visualforce Page or open an existing one.
2. To create a new Visualforce Page, navigate to the **Setup** page > **Visualforce Pages,** and click **New**.
3. In the **Visualforce Markup** code editor, add `&lt;apex:includeLightning />` at the beginning of your Visualforce page. This component loads the JavaScript file that Lightning Components for Visualforce uses.
4. Paste the following code into the **Visualforce Markup** code editor at the desired location where you want the Agent AI widget to appear:

      ```
      <div id="lwc-container"></div>
      <script>
         // Initialize Lightning Out with the app you created
         $Lightning.use("c:LightningApplication", function() {
            // Create the LWC component inside the div container
            $Lightning.createComponent("KAA:niceCTIAgentAssistVoice", { height: '600px', width: '500px'}, "lwc-container");
         });
      </script>
      ```
    !!! note

        Replace **LightningApplication** with the name of the Lightning Out app you created in [Step-1](#step-1-create-a-lightning-out-app). Modify the **height** and **width** of the **niceCTIAgentAssistVoice** component according to your preference - these are the height and width of the Agent AI widget.

5. Click **Save**.

**Sample Visualforce Page:**

```
<apex:page >
    <apex:includeLightning />
    <h1>Hello !</h1>
    <p>Welcome to Kore.ai Visualforce page.</p>
    <div id="lwc-container"></div>
    <script>
        // Initialize Lightning Out with the app you created
        $Lightning.use("c:Kore_Lightning_App", function() {
            // Create the LWC component inside the div container
            $Lightning.createComponent("KAA:niceCTIAgentAssistVoice", { height: '600px', width: '500px'}, "lwc-container");
        });
    </script>
</apex:page>
```

Set this Visualforce page as the screen pop-up in the Softphone layouts of your Salesforce org, or create a Visualforce tab by following the instructions in this [document](https://help.salesforce.com/s/articleView?id=platform.pages_tabs_create.htm&type=5){:target="_blank"}.

### Configure an Aura Component to embed the Agent AI widget (If Applicable)

1. Either create a new Aura Component or open an existing one.
2. To create a new Aura Component, open **Developer Console** from your Salesforce org.
3. In the **Developer Console**, navigate to **File** > **New** > **LightningComponent**.
4. Fill in the **Name** and **Description** fields, and then click **Submit**.
5. Paste the following code into the editor at the desired location where you want the Agent AI widget to appear, and save the **Lightning Application**:

    ```
    <KAA:niceCTIAgentAssistVoice height="800px" width="500px" />
    ```

    !!! note

        Modify the **height** and **width** of the **niceCTIAgentAssistVoice** component according to your preference–these are the height and width of the Agent AI widget.

**Sample Aura Component:**

```
<aura:component implements="force:appHostable,flexipage:availableForAllPageTypes" access="global" >
    <h1>Hello! Kore Aura Component</h1>
    <KAA:niceCTIAgentAssistVoice height="800px" width="500px" />
    <h1>End of Aura Component</h1>
</aura:component>
```

Create a Lightning tab by following the instructions in this [document](https://help.salesforce.com/s/articleView?id=platform.creating_flexipage_tabs.htm&type=5){:target="_blank"}.

### <span id="OAuth">Enabling OAuth</span>

1. Go to **Setup** > **OAuth and OpenID Connect Settings** and enable **Allow OAuth Username-Password Flows**.     
<img src="../images/enable-allow-oauth-password-20.png" alt="enable-allow-oauth-password" title="enable-allow-oauth-password" style="border: 1px solid gray; zoom:80%;"/>

2. Create a connected Salesforce app and get the **Access Key** and **Access Token**. Follow [this guide](https://help.salesforce.com/s/articleView?id=sf.connected_app_client_credentials_setup.htm&language=en_US&type=5){:target="_blank"} for help.

## Additional Setup Steps for Chat

In addition to all the previous steps, two more steps are required for the Chat setup:

### NICE API credentials to be configured for Signaling API (Only for Chat)

Refer to [Manage Access Keys](https://help.nice-incontact.com/content/admin/security/manageaccesskeys.htm){:target="_blank"} to create access keys to use for signaling APIs.

The **Access Key Manager** page allows you to view all the access keys in your system.  
<img src="../images/access-key-manager-21.png" alt="access-key-manager" title="access-key-manager" style="border: 1px solid gray; zoom:80%;"/>

### Configure NICE API Credentials (Only for Chat)

1. Click the **app launcher**.
2. Type **nice** in the search box, and select **Nice Signal Credentials** from the displayed list.  

   <img src="../images/nice-signal-22.png" alt="nice-signal" title="nice-signal" style="border: 1px solid gray; zoom:80%;"/>

3. Click **New** from the top-right corner of the page.  

4. Add the required parameters:

   * **Credentials Set Name**: NICE CX credentials (change as needed)
   * **Proxy Tunnel Endpoint**: {<a href="#AI URL">Agent AI URL</a>}/integrations/nice/relay/toNice
   * **NICE CX Credentials**:

      * Nice Token Base URL: NICE Token Base URL is the Host URL of the login page.
      * Nice API URL: If the URL for ACD is `https://home-abc.nice-incontact.com`, then the API URL would be `https://api-abc.nice-incontact.com`. Also, it is necessary to use the URL without the trailing slash.
      * NiceCX Signal API Access Key (generated in the above step)
      * NiceCX Signal API Access Key Secret (generated in the above step)

5. Click **Save**.

## NICE CTI Studio Script for Salesforce

### For Voice

Import and configure the NICE Studio Script for Salesforce Integration.

Download Script For Voice: [kore.ai_nicecti_sf_voice.XML](https://bitbucket.org/koreteam1/integration_sharedresources/src/main/nicecx/kore_nicecti_sf_voice.XML){:target="_blank"}  
<img src="../images/nice-cti-studio-24.png" alt="nice-cti-studio" title="nice-cti-studio" style="border: 1px solid gray; zoom:80%;"/>

Open the Studio, import the above script, and customize as per the following table definition:

| **Node**       | **Activity**                                                    | **Fields Updated**                                                                                                      |
|----------------|-----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **Set Credentials**  | Update the credentials to connect to the Salesforce Org           | Salesforce_key (created in the [Enabling OAuth](#OAuth) step)<br>Salesforce_secret (created in the [Enabling OAuth](#OAuth) step)<br>Salesforce_username<br>Salesforce_password<br>AI Agent credentials (botid, clientid, clientsecret, baseurl, language)<br>**Note:** The password is your Salesforce password appended with your Security Token. Refer to [this guide](https://help.salesforce.com/s/articleView?id=sf.user_security_token.htm&type=5){:target="_blank"} for help. |
| **User Auth**        | Configure Salesforce org credentials and generate Oauth Token | salesforceBaseURI<br>**Note:** You can get it by running the following curl:<br><br> `curl –location –request POST ‘https://login.salesforce.com/services/oauth2/token?grant_type=password&client_id=<Salesforce Client ID>&client_secret=<Salesforce Client_Secret>&username=<Salesforce_Username>&password=<Salesforce Password + Salesforce Security Token>’` |
| **ReqAgent**         | Update Skill for Agent Routing                                 | Skill and other attributes as needed                                                                                      |
| **Custom Data**      | The **customdata** object in the script can be used to pass information to the AI Agent. During runtime, this custom data will be accessible in the UserContext of the AI Agent.<br>Refer to [Access Custom Data in Kore AI Agent](../../agent-experience/access-custom-data-in-agent-ai.md){:target="_blank"} for instructions on how to access custom data in the AI Agent. | Include your data in the customdata object (one key-value pair per line). For example:<br> `customdata.agentName="Agent"`<br> `customdata.agentID="{agentid}"` |
| **AgentAssist**      | Map the AgentAssist Hub Instance                                | Select the AgentAssist Hub app created in the above step.                                                                  |

**AgentAssist Hub Reference**:

Click the checkbox on the specific instance. Only one can be active.  
<img src="../images/agent-assist-hub-reference-25.png" alt="agent-assist-hub-reference" title="agent-assist-hub-reference" style="border: 1px solid gray; zoom:80%;"/>

After selecting the AgentAssist app, click the **Close** button in the bottom-right corner of the page.  
!!! note
    Do not click the **X** button to close the window, as this will not save the changes.

Save the **Studio Script** and make sure there are no errors on Save.

### For Chat

Import and configure the NICE Studio Script for Salesforce Integration.

Download Script For Chat: [kore.ai_nicecti_sf_chat.XML](https://bitbucket.org/koreteam1/integration_sharedresources/src/main/nicecx/kore_nicecti_sf_chat.XML){:target="_blank"}  
<img src="../images/nice-studio-script-for-chat-26.png" alt="nice-studio-script-for-chat" title="nice-studio-script-for-chat" style="border: 1px solid gray; zoom:80%;"/>  

<img src="../images/nice-studio-script-for-chat-27.png" alt="nice-studio-script-for-chat" title="nice-studio-script-for-chat" style="border: 1px solid gray; zoom:80%;"/>

Open the Studio, import the above script, and customize as per the following table definition:

| **Node**            | **Activity**                                                    | **Fields Updated**                                                                                                                                                                                                                                                                         |
|---------------------|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Salesforce Auth**  | Update the credentials to connect to the Salesforce Org              | - salesforceBaseURI<br>  **Note:** You can get it by running the following curl:<br> `curl –location –request POST ‘https://login.salesforce.com/services/oauth2/token?grant_type=password&client_id=<Salesforce Client ID>&client_secret=<Salesforce Client_Secret>&username=<Salesforce_Username>&password=<Salesforce Password + Salesforce Security Token>’`<br>- salesforcekey (created in the step [“Enabling OAuth”](#OAuth))<br>- salesforcesecret (created in the step [“Enabling OAuth”](#OAuth))<br>- salesforceusername<br>- salesforcepassword<br>-AI Agent credentials (botid, clientid, clientsecret, baseurl, language)<br>**Note:** The password is your Salesforce password appended with your Security Token. Refer to [this guide](https://help.salesforce.com/s/articleView?id=sf.user_security_token.htm&type=5) for help. |
| **ReqAgent**         | Update Skill for Agent Routing                                  | Skill and other attributes as needed                                                                                                                                                                                                                                                        |
| **Custom Data**      | The **customdata** object in the script can be used to pass information to the AI Agent. During runtime, this customdata will be accessible in the UserContext of the AI Agent.<br> Refer to [Access Custom Data in Kore AI Agent](../../agent-experience/access-custom-data-in-agent-ai.md){:target="_blank"} for instructions on how to access custom data in the AI Agent. | Include your data in the customdata object (one key-value pair per line). For example:<br> `customdata.agentName="Agent"`<br> `customdata.agentID="{agentid}"`                                                                                                            |
| **AgentAssist**      | Map the AgentAssist Hub Instance                                 | Select the AgentAssist Hub App created in the above step.                                                                                                                                                                          |


## NICE Account setup for Incoming Phone Call/Chat

On the **NICE Incontact** home page, click the **application launcher** button and select **ACD**.

**Create a Campaign**  
<img src="../images/create-campaign-28.png" alt="create-campaign" title="create-campaign" style="border: 1px solid gray; zoom:80%;"/>

**Create a Skill**  
<img src="../images/create-skill-29.png" alt="create-skill" title="create-skill" style="border: 1px solid gray; zoom:80%;"/>

**Create a Disposition**  
<img src="../images/create-disposition-30.png" alt="create-disposition" title="create-disposition" style="border: 1px solid gray; zoom:80%;"/>

**Create a new single Point of Contact (For Voice)**

* **Media Type** - Phone Call
* **Name** - &lt;Provide a name for the contact>
* **Point of Contact** - Select a provisioned NICE phone number.
* **Skill** - Select a predefined skill, else create one and select here.
* **Script** - From the dropdown list, select the **studio script** created for Salesforce-NICE CTI above.
* **IVR Reporting Enabled** - Select the **checkbox**.
* Click the **Create Point of Contact** button to save it.  
<img src="../images/create-point-of-contact-31.png" alt="create-point-of-contact" title="create-point-of-contact" style="border: 1px solid gray; zoom:80%;"/>

**Create a new single Point of Contact (For Chat)**

* **Media Type** - Chat
* **Name** - &lt;Provide a name for the contact>
* **Skill** - Select a predefined skill, else create one and select here.
* **Script** - From the dropdown list, select the studio script created for Salesforce-NICE CTI above.
* **IVR Reporting Enabled** - Select the **checkbox**.
* Click the **Create Point of Contact** button to save it.  
<img src="../images/create-point-of-contact2-32.png" alt="create-point-of-contact2" title="create-point-of-contact2" style="border: 1px solid gray; zoom:80%;"/>

## Make a Test Call / Chat

1. Sign in to the **Agent AI** account and prepare an AI Agent to handle agents’ queries.
2. Validate the AI Agent credentials are correctly mapped in the above settings.
3. Validate the AgentAssist URL is correctly mapped in the above settings.
4. Sign in to the **NICE-InContact** account, and check if the point of contact is properly configured.
5. Sign in to your **Salesforce** org.
6. From the **app launcher,** select **Service Console**.
7. Sign in with **NICE CX** credentials for the agent.   
8. Install the softphone: [https://help.nice-incontact.com/content/agent/cxoneagent/addcxawebrtcext.htm](https://help.nice-incontact.com/content/agent/cxoneagent/addcxawebrtcext.htm){:target="_blank"}  
   <img src="../images/install-softphone-33.png" alt="install-softphone" title="install-softphone" style="border: 1px solid gray; zoom:40%;">  

9. Refresh the screen, and click the **phone** icon on the status bar.
10. Select **Integrated Softphone**, and click **Connect**.  
<img src="../images/integrated-softphone-connect-35.png" alt="integrated-softphone-connect" title="integrated-softphone-connect" style="border: 1px solid gray; zoom:40%;">

11. Change the status to **Available**.  
<img src="../images/status-available-36.png" alt="status-available" title="status-available" style="border: 1px solid gray; zoom:40%;">  

      <img src="../images/status-available2-37.png" alt="status-available2" title="status-available2" style="border: 1px solid gray; zoom:40%;">

**For Call**:

1. Dial the **Point of Contact** phone number.
2. Accept the call.  
<img src="../images/accept-a-call-38.png" alt="accept-a-call" title="accept-a-call" style="border: 1px solid gray; zoom:50%;">

    1. The **Contact** page appears.  
    <img src="../images/contact-page-39.png" alt="contact-page" title="contact-page" style="border: 1px solid gray; zoom:80%;"/>

3. When the **End** button is clicked, the **Summary** is generated and displayed on the Agent AI widget.  
<img src="../images/summary-generation-40.png" alt="summary-generation" title="summary-generation" style="border: 1px solid gray; zoom:80%;"/>

4. Upon clicking the **Submit** button on the Agent AI widget, the Summary is stored in the Agent AI Conversation Summaries.  
<img src="../images/kore-agentai-conversation-summary-41.png" alt="kore-agentai-conversation-summary" title="kore-agentai-conversation-summary" style="border: 1px solid gray; zoom:80%;"/>

**For Chat:**

1. In the **Salesforce App Launcher**, search for **Nice Chats Handler** and select it.  
<img src="../images/nice-chat-handlers-42.png" alt="nice-chat-handlers" title="nice-chat-handlers" style="border: 1px solid gray; zoom:80%;"/>

    1. The following page opens and monitors active chats. It remains open for the Agent AI widget to render when an agent accepts a chat request.  
    <img src="../images/active-chat-43.png" alt="active-chat" title="active-chat" style="border: 1px solid gray; zoom:80%;"/>

2. Make a chat request by opening the **Point of Contact** link in the browser.  
<img src="../images/point-of-contact-chat-44.png" alt="point-of-contact-chat" title="point-of-contact-chat" style="border: 1px solid gray; zoom:80%;"/>

3. Send a message, and the chat request is sent to the agent.  
<img src="../images/chat-request-45.png" alt="chat-request" title="chat-request" style="border: 1px solid gray; zoom:80%;"/>

4. Click **Accept**.  
<img src="../images/accept-a-chat-46.png" alt="accept-a-chat" title="accept-a-chat" style="border: 1px solid gray; zoom:80%;"/>

5. The Agent AI widget opens for the ongoing chat conversation.  
<img src="../images/chat-conversation-page-47.png" alt="chat-conversation-page" title="chat-conversation-page" style="border: 1px solid gray; zoom:80%;"/>

6. When the **End** button is clicked, the Summary is generated and displayed on the Agent AI widget.  
<img src="../images/chat-summary-48.png" alt="chat-summary" title="chat-summary" style="border: 1px solid gray; zoom:80%;"/>

7. Upon clicking the **Submit** button in the Agent AI widget, the Summary is stored in the Agent AI Conversation Summaries.  
<img src="../images/chat-summary-in-agentai-49.png" alt="chat-summary-in-agentai" title="chat-summary-in-agentai" style="border: 1px solid gray; zoom:80%;"/>

8. When **Disposition** is selected and clicked **Save**, the Chat transcript is stored in Salesforce.  
<img src="../images/chat-transcript-in-salesforce-50.png" alt="chat-transcript-in-salesforce" title="chat-transcript-in-salesforce" style="border: 1px solid gray; zoom:80%;"/>  

      <img src="../images/chat-summary-in-salesforce-51.png" alt="chat-summary-in-salesforce" title="chat-summary-in-salesforce" style="border: 1px solid gray; zoom:80%;"/>
