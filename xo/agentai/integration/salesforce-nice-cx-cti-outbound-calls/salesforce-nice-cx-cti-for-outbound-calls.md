# Salesforce NICE CX CTI for Outbound Calls

This document provides an overview of the setup and configuration process of the Kore Agent AI widget with NICE CX Telephony using the Salesforce NICE CX CTI package.

**Use Case**: Display voice transcripts and suggest next best actions from a configured AI Agent on the Kore Agent AI widget when agents place customer calls.

When agents place customer calls, based on the customer’s phone number CTI rule matches the corresponding Salesforce object (such as Account/Contact/Case) and displays to the agents. The  voice stream is shared with Kore Voice Gateway, which in turn generates transcripts of the voice stream and displays on the Agent AI widget embedded into the matched Salesforce object.

## Prerequisites

* The **[NICE CX Salesforce](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3000000B4BKsEAN){:target="_blank"}** package installed in your Salesforce org.
* **NICE CX** account set up and can initiate outbound calls on the **Salesforce Service Console** softphone.
* **NICE CX Studio** installed on your device.
* **Agent Assist Hub** enabled for your NICE CX account.
* **[Kore AgentAssist](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000HSGlnUAH){:target="_blank"}** for Salesforce installed on your Salesforce account. (Salesforce AppExchange > Search for “Agent AI By Kore.ai, Inc.”)
* Have the Kore AI Agent credentials saved separately. You need the Widget URL, Bot ID, Client ID, Client Secret, Account ID, and SIP URI. Read [Configure Voice Channel](./../../../channels/voice-gateway/configure-voice-gateway.md){:target="_blank"} and [Chat Channel](./../../../channels/adding-channels-to-your-bot.md){:target="_blank"} for a walkthrough. 
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

<li>Campaign</li>

<li>Customization of Scripts </li>
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
   <td><strong>Kore AI Agent Configuration</strong>
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
   <td><strong>Kore AI Agent Configuration</strong>
   </td>
   <td>AI Agent creation
<p>
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
   <td>Voice Configuration
   </td>
   <td>
<ul>

<li>Enabling NICE Outbound Calls on Salesforce with proper screen pop settings</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Installing Kore Agent AI Package
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
   <td>Configuring Kore Agent AI Package
   </td>
   <td>
<ul>

<li>Validate prerequisite licenses</li>

<li>Configure AI Agent Details</li>
</ul>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>NICE CX
   </td>
   <td>Configure Salesforce Agent Settings, select Salesforce Object to embed Kore Agent AI widget.
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
   <td>Set up NICE AgentAssist Hub to stream voice to Kore Agent AI
   </td>
   <td><span id="aiurl">Agent AI URL</span>
   </td>
   <td>The domain of the Agent AI.
   </td>
   <td>
<ul>

<li>If it is legacy Agent AI, URL is <a href="https://agentassist.kore.ai/">https://agentassist.kore.ai</a>.</li>

<li>If it is UXO, URL is <a href="https://platform.kore.ai/">https://platform.kore.ai</a>.</li>

<li>If it is on-prem, the URL is the origin where your Agent AI is hosted.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Kore Agent AI  package setup and configuration
   </td>
   <td>AgentAssist Widget URL
   </td>
   <td>URL that points to the Agent AI widget.
<p>
For example, https://agentassist.kore.ai/koreagentassist-sdk-v3/UI/agentassist-iframe.html
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai/">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Kore Agent AI package setup and configuration
   </td>
   <td>BotId
   </td>
   <td>A unique identifier assigned to an AI Agent.
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai/">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Kore Agent AI package setup and configuration
   </td>
   <td>ClientId
   </td>
   <td>An identifier provided to a client application.
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai/">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Kore Agent AI package setup and configuration
   </td>
   <td>ClientSecret
   </td>
   <td>A secret key or password associated with the ClientId.
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai/">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Set up NICE AgentAssist Hub to stream voice to Kore Agent AI
   </td>
   <td>AccountID
   </td>
   <td>A unique identifier assigned to an account.
   </td>
   <td><strong>Channels > Chat</strong> section of the <strong><a href="https://agentassist.kore.ai/">Agent AI</a></strong> configuration portal.
   </td>
  </tr>
  <tr>
   <td>Set up NICE AgentAssist Hub to stream voice to Kore Agent AI
   </td>
   <td><span id="kvg">Kore Voice Gateway(KVG)</span>
   </td>
   <td>For Saas in US region, value is savg-webserver.kore.ai
<p>
For on-prem, refer to the corresponding host.<strong> </strong>
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
   <td><a href="https://agentassist.kore.ai/">https://agentassist.kore.ai</a>
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
   <td><a href="https://agentassist-jp.kore.ai/">https://agentassist-jp.kore.ai</a>
   </td>
   <td><a href="https://jp-platform.kore.ai/">https://jp-platform.kore.ai</a> 
   </td>
   <td>wss://jp-savg-audiosocket.kore.ai
   </td>
   <td>@savg-jp-prod-int-nlb-3989d946fc1ced3b.elb.ap-northeast-1.amazonaws.com
   </td>
  </tr>
</table>

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

## Set up NICE AgentAssist Hub to stream voice to Kore Agent AI

This app will be used in studio script.

1. Sign in to your **NICE account** with the username and password provided by the NICE customer support.
2. Click the **applications launcher** button. A menu opens from the left side of the page. 
<img src="../images/app-launcher-button_1.png" alt="app-launcher-button" title="app-launcher-button" style="border: 1px solid gray; zoom:80%;"/> 
3. Click **OTHERS** > **Automation & AI**.  
<img src="../images/automation-ai_2.png" alt="automation-ai" title="automation-ai" style="border: 1px solid gray; zoom:80%;"/> 
4. Click **Agent Assist Hub** > **Add Agent Assist App**. 
<img src="../images/add-agentassist-app_3.png" alt="add-agentassist-app" title="add-agentassist-app" style="border: 1px solid gray; zoom:80%;"/> 
5. Enter the name of the Agent Assist App in the **AGENT ASSIST APP NAME** field.
6. Select **Custom Agent Assist Endpoints**.
7. Click **Next**.  
<img src="../images/create-new-agent-assistant_4.png" alt="create-new-agent-assistant" title="create-new-agent-assistant" style="border: 1px solid gray; zoom:80%;"/> 
8. Add the following settings with config parameters provided by the Kore.ai representative:
    1. **Agent UI Option**: Available by default
    2. **App URL**: {<a href="#aiurl">[Agent AI URL]</a>}/integrations/nice/iframe/?params={scriptparams}
    3. **App Title**: Kore Agent AI (change as needed)
    4. **Participants**: Both  
    <img src="../images/config-parameters_5.png" alt="config-parameters" title="config-parameters" style="border: 1px solid gray; zoom:80%;"/>  
    5. **Audio Relay Endpoint**: {<a href="#kvg">[Kore Voice Gateway]</a>(KVG)}/audiosocket/nice?sipuri=&lt;Bot SIP URI>&token=&lt;Token>&botId=&lt;Bot ID>&accountId=&lt;Account ID>&agentassist=true
        1. **Bot SIP URI**: **Flows & Channels** > **Channels** > **Voice Gateway** > **SIP Numbers** > **Configure SIP Trunk** > **Agent AI** section of the **[Agent AI](https://agentassist.kore.ai/){:target="_blank"}** configuration portal.  
        <img src="../images/configure-sip-trunk_6.png" alt="configure-sip-trunk" title="configure-sip-trunk" style="border: 1px solid gray; zoom:80%;"/> 
        2. **Bot ID and Account ID**: **Flows & Channels** > **Channels** > **Digital** > **Web/Mobile Client** > **JWT App Details** section of the **[Agent AI](https://agentassist.kore.ai/){:target="_blank"}** configuration portal.  
        <img src="../images/web-mobile-client_7.png" alt="web-mobile-client" title="web-mobile-client" style="border: 1px solid gray; zoom:80%;"/> 
        3. **Token**: Create a JSON Web Token on [jwt.io](https://www.jwt.io/){:target="_blank"} with the following details.
            1. Payload: {“appId”: &lt;Bot Client ID>}
            2. Header: {“alg”: “HS256″,”typ”: “JWT”}
            3. Secret: Your Kore.ai Client Secret.
9. Click **Create**.

## Kore Agent AI package setup and configuration

* Install **[Kore Agent AI](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000HSGlnUAH){:target="_blank"}** on your Salesforce account.

### Set up AgentAssist feature

1. Click the **app launcher**.  
<img src="../images/app-launcher_8.png" alt="app-launcher" title="app-launcher" style="border: 1px solid gray; zoom:80%;"/> 
2. Type “kore” in the search box and select **Kore AgentAssist Feature Configuration** from the displayed list.  
<img src="../images/kore-aa-feature-configuration_9.png" alt="kore-aa-feature-configuration" title="kore-aa-feature-configuration" style="border: 1px solid gray; zoom:80%;"/> 
3. Click **New** from the top-right corner of the page.  
<img src="../images/kore-aa-feature-configuration-new_10.png" alt="kore-aa-feature-configuration-new" title="free text" style="border: 1px solid gray; zoom:80%;"/> 
4. Type **Test Configuration** in the **Configuration Name** field.  
<img src="../images/test-configuration_11.png" alt="test-configuration" title="test-configuration" style="border: 1px solid gray; zoom:80%;"/> 
5. Select **NICE inContact** in the **CTI Provider** list.  
<img src="../images/cti-provider-list_12.png" alt="cti-provider-list" title="cti-provider-list" style="border: 1px solid gray; zoom:80%;"/> 
6. Select **Active**, and click **Save**.  
<img src="../images/active-save_13.png" alt="active-save" title="active-save" style="border: 1px solid gray; zoom:80%;"/> 

### Set up AgentAssist Configuration

1. Click the **app launcher**.
2. Type “config” in the search box and select **Kore AgentAssist Configuration** from the displayed list.  
<img src="../images/kore-aa-configuration_14.png" alt="kore-aa-configuration" title="kore-aa-configuration" style="border: 1px solid gray; zoom:80%;"/> 
3. Click **New** from the right-top corner of the page.
4. Enter the required details. Note that you can fetch the **AgentAssist URL**, **Bot ID**, **Client ID**, and **Client Secret** details from the **[Agent AI](https://agentassist.kore.ai/){:target="_blank"}** configuration portal.  
<img src="../images/web-mobile-client_15.png" alt="web-mobile-client" title="web-mobile-client" style="border: 1px solid gray; zoom:80%;"/>  
    - [ ] Select a language in the **Language** dropdown list. The selected language corresponds to the language configured in the AI Agent.  
    <img src="../images/kore-aa-config-page_16.png" alt="kore-aa-config-page" title="kore-aa-config-page" style="border: 1px solid gray; zoom:80%;"/>  
5. Select **Active**, and click **Save**. 

    !!! note
        If the language parameter is missing from the layout page after saving the configuration, either uninstall and reinstall the package or manually add the parameter by following these steps:  

   1. Go to the **Salesforce Setup** page > **Object Manager**. 
   2. Search for and select the **Kore AgentAssist Configuration** object. 
   3. On the left panel, click **Page Layouts**. 
   4. Open **KoreAgentAssistConfig Layout**, and drag the **Language parameter** on to the layout screen.  
      <img src="../images/aa-config-layout_17.png" alt="aa-config-layout" title="aa-config-layout" style="border: 1px solid gray; zoom:80%;"/> 

### Configure NICE CTI Data in Salesforce

1. Click the **app launcher** in Salesforce, and then go to **Salesforce Agent Settings**.
2. Sign in to your **NICE CX** account.
3. Ensure the **Store Salesforce Agent Script Variables** setting is enabled in the **Data Storage** section.
4. In the dropdown list, select a Salesforce object against which the Agent AI widget needs to be configured in its page layout.  
<img src="../images/salesforce-object_18.png" alt="salesforce-object" title="salesforce-object" style="border: 1px solid gray; zoom:80%;"/>  

### Configure Page layout to embed Kore Agent AI Widget to Salesforce object

Assuming the Account Object is mapped above, open the page layout for Account Object.

In the filter field, type “NiceCTI” and drag and drop the object onto the **Account Object** layout page.  
<img src="../images/account-object-layout_19.png" alt="account-object-layout" title="account-object-layout" style="border: 1px solid gray; zoom:80%;"/> 

### Configure a Visualforce Page to embed Kore Agent AI Widget (If Applicable)

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
2. To create a new Visualforce Page, navigate to the **Setup** page > **Visualforce Pages**, and click **New**.
3. In the **Visualforce Markup** code editor, add **&lt;apex:includeLightning />** at the beginning of your Visualforce page. This component loads the JavaScript file that Lightning Components for Visualforce uses. 

      Paste the following code into the **Visualforce Markup** code editor at the desired location where you want the Agent AI widget to appear:&lt;div id=”lwc-container”>&lt;/div>  

      `<script>`

      ```
      // Initialize Lightning Out with the app you created

      $Lightning.use("c:LightningApplication", function() {
      // Create the LWC component inside the div container

      $Lightning.createComponent("KAA:niceCTIAgentAssistVoice", { height: '600px', width: '500px'}, "lwc-container");
      });
      ```

      <code>&lt;/script> 
      </code> 

    !!! note

        Replace “LightningApplication” with the name of the Lightning Out app you created in [Step-1](#step-1-create-a-lightning-out-app). Modify the **height** and **width** of the **niceCTIAgentAssistVoice** component according to yur preference – these are the height and width of the Agent AI widget.  

4. Click **Save**.

**Sample Visualforce Page**:

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

Set this Visualforce page as the screen pop in the Softphone layouts of your Salesforce org, or create a Visualforce tab by following the instructions in this [document](https://help.salesforce.com/s/articleView?id=platform.pages_tabs_create.htm&type=5){:target="_blank"}.

### Configure an Aura Component to embed Kore Agent AI widget (If Applicable)

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

**Sample Aura Component**:

```
<aura:component implements="force:appHostable,flexipage:availableForAllPageTypes" access="global" >

    <h1>Hello! Kore Aura Component</h1>

    <KAA:niceCTIAgentAssistVoice height="800px" width="500px" />

    <h1>End of Aura Component</h1>

</aura:component>
```

Create a Lightning tab by following the instructions in this [document](https://help.salesforce.com/s/articleView?id=platform.creating_flexipage_tabs.htm&type=5){:target="_blank"}.

### Enabling OAuth

1. Go to **Setup** > **OAuth and OpenID Connect Settings** and enable **Allow OAuth Username-Password Flows**.      
<img src="../images/enable-allow-oauth-password-20.png" alt="enable-allow-oauth-password" title="enable-allow-oauth-password" style="border: 1px solid gray; zoom:80%;"/> 

2. Create a connected Salesforce app and get the **Access Key** and **Access Token**. Follow [this guide](https://help.salesforce.com/s/articleView?id=sf.connected_app_client_credentials_setup.htm&language=en_US&type=5){:target="_blank"} for help.

## NICE CTI Studio Script for Salesforce for Outbound Calls

Import and configure the NICE Studio Script for Salesforce Integration for Outbound Calls.

Download Script For Voice: [kore.ai-nicecti_aa_sf_outbound.XML](https://bitbucket.org/koreteam1/integration_sharedresources/src/main/nicecx/kore.ai%20-%20nicecti_aa_sf_outbound.XML){:target="_blank"}

<img src="../images/script-for-voice_21.png" alt="script-for-voice" title="script-for-voice" style="border: 1px solid gray; zoom:80%;"/> 

Open the Studio, import the above script, and customize as per the following table definition:

<table>
  <tr>
   <td><strong>Node</strong>
   </td>
   <td><strong>Activity</strong>
   </td>
   <td><strong>Fields Updated</strong>
   </td>
  </tr>
  <tr>
   <td>Set Credentials
   </td>
   <td>
<ul>

<li>Update the credentials to connect to Salesforce Org.</li>

<li>Update Kore AI Agent details.</li>

<li>The “customdata” object in the script can be used to pass information to the Kore AI Agent. During runtime, this custom data will be accessible in the UserContext of the AI Agent.</li> 
<ul>
 
<li>Refer to [Access Custom Data in Kore AI Agent](../../agent-experience/access-custom-data-in-agent-ai.md)” for instructions on how to access customdata in the AI Agent.</li> 
</ul></li> 
</ul>
   </td>
   <td>
<ul>

<li>Salesforce_key (created in step <em><a href="#enabling-oauth>“Enabling OAuth”</a></em>)</li>

<li>Salesforce_secret (created in step <em><a href="#enabling-oauth">“Enabling OAuth”</a></em>)</li>

<li>Salesforce_username</li>

<li>Salesforce_password  \
<strong>Note:</strong> The password is your Salesforce password appended with your Security Token. Refer to <a href="https://help.salesforce.com/s/articleView?id=sf.user_security_token.htm&type=5">this guide</a> for help.</li>

<li>Kore AI Agent credentials (botid, clientid, clientsecret, baseurl, language)
Include your data in the custom data object (one key-value pair per line). For example:</li>

<li><code>customdata.agentName="Agent"</code></li>

<li><code>customdata.agentID="{agentid}"</code></li>
</ul>
   </td>
  </tr>
  <tr>
   <td>User Auth
   </td>
   <td>Configure Salesforce org credentials and generate oauth Token
   </td>
   <td>salesforceBaseURI
<p>
<strong>Note:</strong> You can get it by running the following curl:
<p>
curl –location –request POST ‘https://login.salesforce.com/services/oauth2/token?grant_type=password&client_id=&lt;Salesforce Client ID>&client_secret=&lt;Salesforce Client_Secret>&username=&lt;Salesforce_Username>&password=&lt;Salesforce Password + Salesforce Security Token>’
   </td>
  </tr>
  <tr>
   <td>ReqAgent
   </td>
   <td>Update Skill for Agent Routing
   </td>
   <td>Skill and other attributes as needed
   </td>
  </tr>
  <tr>
   <td>AgentAssist
   </td>
   <td>Map the AgentAssist Hub Instance
   </td>
   <td>Select the AgentAssist Hub app created in the above step.
   </td>
  </tr>
</table>

**AgentAssist Hub Reference**:

Click the checkbox on the specific instance. Only one can be active.  
<img src="../images/agent-assist-hub-reference-22.png" alt="agent-assist-hub-reference" title="agent-assist-hub-reference" style="border: 1px solid gray; zoom:80%;"/> 

After selecting the AgentAssist app, click the **Close** button on the bottom-right corner of the page. 

!!! note
    Do not click the “X” button to close the window as this will not save the changes.

Save the **Studio Script** and make sure there are no errors on Save.

## NICE Account setup for Outbound Call

On the **NICE Incontact** home page, click the **application launcher** button and select **ACD**.

**Create a Campaign**

<img src="../images/create-campaign-23.png" alt="create-campaign" title="create-campaign" style="border: 1px solid gray; zoom:80%;"/>  

**Create a Skill**

<img src="../images/create-a-skill_24.png" alt="create-a-skill" title="create-a-skill" style="border: 1px solid gray; zoom:80%;"/> 

For Custom Script, select the NICE Studio Script created in the previous step.

**Create a Disposition**

<img src="../images/create-disposition-25.png" alt="create-disposition" title="create-disposition" style="border: 1px solid gray; zoom:80%;"/> 

## Important Notes

* If the Agent AI widget is embedded within the Salesforce popup page configured in Softphone Layout, **Agent AI Initiated Transcription** must be disabled for transcription to work correctly. This is because the widget loads before the customer accepts the call, and the audio stream is sent to Kore only after the call is accepted.  
<img src="../images/speech-recognition_26.png" alt="speech-recognition" title="speech-recognition" style="border: 1px solid gray; zoom:80%;"/> 

    However, if the Agent AI widget is embedded in a separate page that opens after the customer accepts the call, transcription will work even if **Agent AI Initiated Transcription** is disabled as the widget is being rendered after the customer accepts the call.

* Custom Data configured in the NICE Studio Script will be passed to the Agent AI widget only if the widget is embedded in a separate page that opens after the customer accepts the call. This is because the NICE Studio Script is triggered only once the call is accepted. Therefore, Custom Data will not work if the Agent AI widget is embedded within the Salesforce popup page configured in the Softphone layout.

## Test an Outbound Call

1. Sign in to the **Kore Agent AI** account and prepare a AI Agent to handle agents’ queries.
2. Validate the AI Agent credentials are correctly mapped in the above settings.
3. Validate the AgentAssist URL is correctly mapped in the above settings.
4. Sign in to the **NICE-Incontact** account, and check if the outbound skill is created properly.
5. Sign in to your **Salesforce** org.
6. From the **app launcher**, select **Service Console**.
7. Sign in with **NICE CX** credentials for the agent.  
<img src="../images/install-softphone-extension_27.png" alt="install-softphone-extension" title="install-softphone-extension" style="border: 1px solid gray; zoom:80%;"/>  

8. Install the softphone: [https://help.nice-incontact.com/content/agent/cxoneagent/addcxawebrtcext.htm \
](https://help.nice-incontact.com/content/agent/cxoneagent/addcxawebrtcext.htm){:target="_blank"}  
<img src="../images/install-softphone_28.png" alt="install-softphone" title="install-softphone" style="border: 1px solid gray; zoom:80%;"/>  
9. Refresh the screen, and click the **phone** icon on the status bar.
10. Select **Integrated Softphone**, and click **Connect**.  
<img src="../images/integrated-softphone-connect-29.png" alt="integrated-softphone-connect" title="integrated-softphone-connect" style="border: 1px solid gray; zoom:80%;"/> 
11. Change the status to **Available**.  
<img src="../images/status-available-30.png" alt="status-available" title="status-available" style="border: 1px solid gray; zoom:80%;"/>  

      <img src="../images/available-status_31.png" alt="available-status" title="available-status" style="border: 1px solid gray; zoom:80%;"/>  

12. Click **New**, and select **Call**.  
<img src="../images/new-call_32.png" alt="new-call" title="new-call" style="border: 1px solid gray; zoom:80%;"/>  

      <img src="../images/call-dialer_33.png" alt="call-dialer" title="call-dialer" style="border: 1px solid gray; zoom:80%;"/> 

13. The NICE Studio Script configured for outbound calls will be selected by default. If needed, you can manually select a different script from the dropdown menu.
14. Enter the phone number you wish to call, then click the **Call** button to initiate the call.  
<img src="../images/call-button_34.png" alt="call-button" title="call-button" style="border: 1px solid gray; zoom:80%;"/> 

15. The Salesforce popup page configured in the Softphone layout will open automatically—for example, a Contact page.  
<img src="../images/contact-page_35.png" alt="contact-page" title="contact-page" style="border: 1px solid gray; zoom:80%;"/> 

16. Once the customer accepts the call, transcription will begin automatically and will be displayed under the **Transcripts** tab in the Agent AI widget.  
<img src="../images/transcripts-tab_36.png" alt="transcripts" title="transcripts" style="border: 1px solid gray; zoom:80%;"/>  

17. When the **End** button is clicked, **Summary** is generated and displayed on the Agent AI widget.  
<img src="../images/summary_37.png" alt="summary" title="summary" style="border: 1px solid gray; zoom:80%;"/>  

18. Upon clicking the **Submit** button on the Agent AI widget, Summary is stored in the Kore Agent AI Conversation Summaries.  
<img src="../images/kore-agentai-conv-summaries_38.png" alt="kore-agentai-conv-summaries" title="kore-agentai-conv-summaries" style="border: 1px solid gray; zoom:80%;"/>  

## FAQ

**Q: Why are the transcripts not working in Agent AI widget?**

**A**: If the Agent AI widget is embedded within the Salesforce popup page configured in Softphone Layout, **Agent AI Initiated Transcription** must be disabled for transcription to work correctly.  
<img src="../images/disable-agent-ai-transcription_39.png" alt="disable-agent-ai-transcription" title="disable-agent-ai-transcription" style="border: 1px solid gray; zoom:80%;"/>  

**Q: Why is the custom data passing not working?**

**A**: Custom Data configured in the NICE Studio Script will be passed to the Agent AI widget only if the widget is embedded in a separate page that opens after the customer accepts the call. Custom Data will not work if the Agent AI widget is embedded within the Salesforce popup page configured in the Softphone layout.
