# Kore AI Agent (Voice Automation) Integration with Talkdesk

Talkdesk is a cloud-based contact center platform that helps businesses deliver exceptional customer experiences. It offers a wide range of features, including AI-powered automation, Omnichannel engagement, analytics and reporting, and industry-specific solutions. The Kore Voice Automation integration with Talkdesk leverages a websocket based approach to seamlessly enhance the functionality of Talkdesk’s contact center capabilities. This document explains the process of Kore AI Agent integration with Talkdesk.

## Architecture Diagram

<img src="../images/architecture-diagram-1.png" alt="architecture-diagram" title="architecture-diagram" style="border: 1px solid gray; zoom:80%;"/>

## Prerequisites

* Talkdesk account with voice automation studio flow.
* A Kore voice bot trained with few use cases.

## How it Works

The Kore AI Agent integration with Talkdesk operates as follows:

* **Setup**: Kore configures the integration by modifying bot details and voice stream URLs in Talkdesk's "Connect to autopilot - voice" flow.
* **Interaction**: When a customer contacts Talkdesk, audio streams are sent to Kore via the "Conversation Orchestrator" node under Talkdesk studio flow. Kore handles automation and sends bot responses back to Talkdesk.
* **Agent Handover**: If the customer requests for agent transfer, control returns to Talkdesk for human agent interaction.

This streamlined process enhances Talkdesk's contact center capabilities with our voice automation technology.

## Voice Automation Process

The following steps are initiated after a call is established between a user and Talkdesk:

1. The user audio is sent to the “Conversation Orchestrator” through the `Connect to Virtual Agent Voice` block within the Studio Flow.
2. The user audio is forwarded to the Voice Gateway (VG).
3. The VG transfers the WSS traffic to contact center using SIP over TLS or UDP.
4. Contact Center AI (CCAI) converts the speech to text and then sends it to the Bots Platform for identification.
5. The Bots Platform generates the appropriate response, and CCAI converts that response into speech.
6. CCAI returns the synthesized speech to Voice Gateway using SIP. Speech response is received by the “Connect to Virtual Agent Voice” block on Talkdesk.
7. The response is sent to the user.
8. At the end of automation, if an agent transfer is required, that's handled using the Talkdesk Studio Flow (optional).

## Configuration Steps

This section explains the configuration steps needed to integrate Kore AI Agent with Talkdesk.

### Step 1: Create and attach a Flow with a Phone Number

A Flow is a sequential process to help you define the end-to-end customer experience at a contact center. A well-designed flow aims to enhance customer satisfaction by ensuring efficiency, clarity, and personalized service throughout the entire journey. You can build flows using the Flow Designer. [Learn more.](../../../flows/create-flows.md){:target="_blank"}  
<img src="../images/flows-and-channels-phone-number-2.png" alt="flows-and-channels-phone-number" title="flows-and-channels-phone-number" style="border: 1px solid gray; zoom:80%;"/>  

!!! note

    This phone number is encrypted and used in WSS URL in Audio streaming.

### Step 2: Create a WSS URL

When a customer calls the Talkdesk phone number, the audio stream is directed to audiosocket and a call is initiated to the bot based on the number retrieved from the URL. The audio is streamed bidirectionally between the Kore bot and the Talkdesk end user.

Create a WSS URL with botID, token ID, and phone number used in the Flow:

wss://korevg-np.kore.ai/audiosocket/talkdesk/?sipuri=%2B173443xxxxx&token=xxxxxGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzL
TFiARYEDF4LTA0ZDktNTM3MC04NTI3LWFlNjNmMjk1YmJjZiJ9.2ozN9wKNPi3A4R8HPdPUfdqBTv-JgCsxnCCXlpGfUjw&botId=st-92bbcxxx-f5c3-5ea6-ab5e-d7ebea8xxxxx&accountId=xxxxxbef6ed51db7e930d75c&agentassist=false

* **Host**: Domain name (for example, korevg-np.kore.ai) of the server you are connecting to. savg-webserver.kore.ai
* **Path**: Specifies the specific resource or endpoint on the server you are connecting to. Here, it’s an audiosocket service for talkdesk, “/audiosocket/talkdesk/”
* **Query Parameters**:  Used to pass additional information to the server in the form of key-value pairs separated by “&” and are part of the URL after the “?.”
    * **sipuri** : The encoded phone number associated with the bot (for example, %2B1234456xxxx). [https://www.urlencoder.org/](https://www.urlencoder.org/){:target="_blank"}. Paste phone number here and copy the encoded value.
    * **token**: [JSON Web Token](https://jwt.io){:target="_blank"} encrypted with the client secret of the bot with the following payload:
        * {“appId”:”&lt;Client ID>”}
        * Client ID: From the Bot details
    * **botId**: Bot ID of the bot you want to use-for example, st-xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx.
    * **accountId**: Account ID of the bot owner. Unique identifier for an account.

### Step 3: Configure Audio Streaming Node in Talkdesk

Audio streaming is the primary component for enabling voice automation. It involves streaming Talkdesk audio to the Voice Stream URL (created in [Step-2](#step-2-create-a-wss-url)) over WSS using Conversation Orchestrator. Here’s a basic flow within the Talkdesk Studio:  
<img src="../images/talkdesk-studio-basic-flow-3.png" alt="talkdesk-studio-basic-flow" title="talkdesk-studio-basic-flow" style="border: 1px solid gray; zoom:80%;"/>

1. Download the [Studio Flow](https://raw.githubusercontent.com/Koredotcom/korecc-twilio/master/TalkDesk/SmartAssist/VoiceAutomation.json){:target="_blank"}, and then import it into the Talkdesk Studio. [Learn more](https://studio.talkdesk.com/docs/importing-and-exporting-flows#importing-a-flow){:target="_blank"}.
2. Click the **“Connect to Autopilot Voice**” block within the flow.
3. Enter the “Voice Stream URL” in the input field created in [Step-2](#step-2-create-a-wss-url).
4. Save and Publish the flow.

### Step 4: Configure Agent Escalation Node on Talkdesk

This section explains both the Kore and Talkdesk side configurations for Agent Escalation.

#### Kore Side Configuration

For Agent Transfer, configure **SIP BYE** in AI for Service by going to **Settings > Integrations > Agent Transfer > Voice > SIP Transfer > Configuration**:  
<img src="../images/sip-bye-settings.png" alt="sip-bye-settings" title="sip-bye-settings" style="border: 1px solid gray; zoom:80%;"/>

#### Talkdesk Side Configuration

For Voice Automation, Kore uses the "Connect to Autopilot Voice" node of Talkdesk. Check the Exits and Preferences of this node in the screenshot below.

On Agent Escalation, Kore creates variables that are populated to **Ring Groups** > **Variables** in the flow context. This lets you to use information collected from an external source. [Learn more](https://studio.talkdesk.com/docs/preferences-dial-agent){:target="_blank"}.  
<img src="../images/agent-escalation-node-exits-tab-4.png" alt="agent-escalation-node-exits-tab" title="agent-escalation-node-exits-tab" style="border: 1px solid gray; zoom:80%;"/>  

<img src="../images/agent-escalation-node-preferences-tab-5.png" alt="agent-escalation-node-preferences-tab" title="agent-escalation-node-preferences-tab" style="border: 1px solid gray; zoom:80%;"/>  

<img src="../images/agent-escalation-node-preferences-ring-group-6.png" alt="agent-escalation-node-preferences-ring-group" title="agent-escalation-node-preferences-ring-group" style="border: 1px solid gray; zoom:80%;"/>

!!! note

    Kore doesn’t pass any header information on Voice Automation Agent transfer. Talkdesk has a bidirectional streaming protocol. For requests of interactions to be escalated to human agents, Kore uses the "Agent Escalation" node of Talkdesk. [Learn more](https://support.talkdesk.com/hc/en-us/articles/9484798498587-Conversation-Orchestrator-Streaming-Bidirectional-Audio#:~:text=If%20you%20need%20the%20call%20to%20be%20escalated%20to%20a%20live%20agent%2C%20then%20configure%20the%20%E2%80%9CEscalation%E2%80%9D%20exit%20and%20add%20an%20Assignment%20and%20Dial%20component%20step){:target="_blank"}.

### Step 5: Testing the Studio Flow

Once your “Incoming call” flow is published, you can assign it to one or several phone numbers. A phone number, on the other hand, can only be assigned to one “Incoming call” flow. In this step, you can assign a phone number to the Talkdesk flow and test the automation. [Learn more](https://studio.talkdesk.com/docs/assigning-a-flow-to-a-number){:target="_blank"}.