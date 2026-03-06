# Kore Voice Automation Integration with Zoom Contact Center

**Zoom Contact Center (ZCC)** is an automation solution for enterprises to manage customer interactions across voice and chat channels. This Integration will  enable Voice automation through SIP Integration. **Kore.ai** now supports the Zoom Contact Center voice channel to integrate voice assistants.

This integration streamlines customer support, automates responses, and improves overall operational efficiency, leading to enhanced customer experiences and increased productivity.

## How it Works

Here’s a general overview of how voice assistant interactions work on the Zoom Contact Center:

* **Setup and Configuration**: Kore.ai sets up and configures the integration between their AI Agent and ZCC. This involves installing specific connectors provided by Zoom and configuring the settings to establish a connection.
* **Channel Integration**: Once the integration is set up, the AI Agent on Kore.ai can be configured to use ZCC as one of its communication channels (setting includes “Transfer form IVR” and “Agent Transfer”). This means that incoming customer inquiries can be handled through Zoom’s communication platform, which may include voice calls and then routed to Kore’s IVR for running voice automation.
* **Routing and Distribution**: When a customer initiates contact through ZCC and the call is received by Kore. Admins can use the Agent Transfer Node within the Kore platform to transfer the call back to ZCC if a human agent is required. Admins can also define appropriate SIP headers to provide the necessary information that can be used within ZCC to direct the interaction to the appropriate agents.
* **Agent Interaction**: The agent receives the customer interaction and responds to the customer using ZCC’s communication features, such as answering voice calls.

## Prerequisites

Please ensure you have the following before enabling this channel:

* A Zoom App Marketplace Developer account. Don’t have an account? Sign up [here](https://marketplace.zoom.us/){:target="_blank"}.
* Developer access to the XO Platform. Need Developer Access? [Contact us](https://kore.ai/contact-us/){:target="_blank"}.

## Setting up Zoom Contact Center

The important steps to set up the ZCC channel are summarized below:

1. Associate an App within an experience flow. [Know more](../../../flows/navigate-the-flow-designer.md){:target="_blank"}.
2. Configure “Transfer from IVR.”
3. Configure “Agent Transfer.”
4. Create a Bot Connector instance on Zoom App Marketplace to associate an AI Agent. 
5. Fetch Conversation Details and Summary.

## Architecture Diagram

<img src="../images/architecture-diagram-1.png" alt="architecture-diagram" title="architecture-diagram" style="border: 1px solid gray; zoom:80%;">

## Step 1: Associate an App within an experience flow. [Know more](../../../flows/create-flows.md){:target="_blank"}

If you have your App ready with you then you can use “Automation” Node in the flow and attach that App with the flow that you want to trigger upon transferring the call from ZCC to Kore AI Agent. Read more [here](../../../flows/node-types/automation.md){:target="_blank"}.

!!! note
    If you are using the older version “SmartAssist,” then use this [link](../../../flows/create-flows.md){:target="_blank"}.

## Step 2: Configure “Transfer from IVR”

You must configure **Transfer from IVR** to transfer a call from ZCC to Kore. Follow the steps below to make this configuration:

Go to **Flows & Channels** > **Channels** > **Voice Gateway**, and select **SIP Numbers** > **Configure SIP Trunk**.
<img src="../images/transfer-from-ivr-2.png" alt="transfer-from-ivr" title="transfer-from-ivr" style="border: 1px solid gray; zoom:80%;">

1. Select **Contact Center AI.** The **SIP URI** field auto populates and will be used to transfer the call from ZCC to Kore Voice Automation.
2. Copy the **Domain** name from the **Zoom Connector App** > **Configuration Details** and add it in the **Fully Qualified Domain Name** field.
3. Select **srv** from the **DNS Resolve Method (Optional)** list.
4. Copy the **DID Number** from the **Zoom Connector App** > **Configuration Details** and add it in the **DID Number** field.
5. Select **TLS** from the **SIP Transport Type** list.
6. Select **Pad Crypto**.
7. Click **Next**.
8. Select **Inbound** **Calls** and **Outbound Calls**.  
<img src="../images/forward-to-phone-number-3.png" alt="forward-to-phone-number" title="forward-to-phone-number" style="border: 1px solid gray; zoom:80%;">

9. Click **Save**.  

    !!! note
        Upon configuring the above SIP transfer configuration, you need to attach one flow created in Step 1 to this configuration.

10. Click **Attach Flow** and attach the flow created on step-1. For help, refer to [Attach Flow](../../../channels/voice-gateway/configure-voice-gateway.md#attach-flow){:target="_blank"}.  
<img src="../images/koreai-voice-gateway-4.png" alt="voice-gateway" title="voice-gateway" style="border: 1px solid gray; zoom:80%;">

## Step 3: Agent Transfer Configuration

After the customer interacts with the AI Agent, you can perform agent transfer from Kore AI Agent to ZCC through one of the following two approaches:

* Agent Transfer Node in Flow. [Read here ](../../../automation/use-cases/dialogs/node-types/working-with-the-agent-transfer-node.md){:target="_blank"}
* Agent Transfer Node in a Dialog Task

### 3.1 Agent Transfer Node in Experience Flow

3.1.1. Select **Agent Transfer** node from **Action**.  
<img src="../images/agent-transfer-node-5.png" alt="agent-transfer-node" title="agent-transfer-node" style="border: 1px solid gray; zoom:80%;">

3.1.2. Add configuration for **Agent Transfer** node.  
<img src="../images/adding-configuration-agent-transfer-node-6.png" alt="adding-configuration-agent-transfer-node" title="adding-configuration-agent-transfer-node" style="border: 1px solid gray; zoom:80%;">

3.1.3. After configuring the Agent Transfer node in Flow, head to **App Settings** > **Integration** > **Agent transfer** > **Voice** and create a new SIP transfer here. 

3.1.4. For ZCC, we are using **SIP BYE** for Agent Transfer.  
<img src="../images/sip-transfer-7.png" alt="sip-transfer" title="sip-transfer" style="border: 1px solid gray; zoom:80%;">

3.1.5. Configure SIP headers to be transferred to ZCC on Agent Transfer via SIP BYE.

### 3.2 Agent Transfer Node in a Dialog Task

Zoom users can also invoke agent transfer from the Dialog Task using a message node.

Add the following code on the message node for agent transfer:

!!! note
    Agent transfer can be to a number or any SIP URI.

var message = "Transferring Call to xxxx number";

var ReferTo = "+91xxxxxxxxxx";   // or sipUrl 

var headers = {

   "X-Reason" : "Call Received from Kore"

}

print(voiceUtils.refer(message,ExternalPhoneNumber,headers))

!!! note
    The following scenarios can be considered upon Agent Transfer:

### Scenario 1: Question Resolved, Customer Hangs Up

* **Given** that a customer’s query has been resolved by the voice bot,
* **When** the customer chooses to hang up directly,
* **Then** Zoom triggers a **SIP BYE**, Kore sends **ACK**, and no **SIP headers** are passed.

### Scenario 2: Question Resolved, Voice Bot Ends the Call

* **Given** that a customer’s query has been resolved by the voice bot,
* **When** the voice AI Agent ends the call,
* **Then** Kore should send the **kore-session_id** and **kore-bot_id** in the **INVITE’s 200 OK** response, **kore-reason(HangUp)** in the **SIP BYE** message, and any custom header configured in Voice Gateway.

### Scenario 3: Question Unresolved, Customer Needs Transfer to ZCC Agent

* **Given** that the customer’s query cannot be resolved by the voice bot,
* **When** the customer requests to speak with a live agent,
* **Then** Kore should send the **kore-session_id** and **kore-bot_id** in the **INVITE’s 200 OK** response and send **kore-reason(TransferToAgent)** in the **SIP BYE** message.

## Step 4: Create a Connection from ZCC to Kore IVA - Transfer from IVR (SIP Transfer)

1. Sign in to [Zoom App Marketplace](https://marketplace.zoom.us/apps){:target="_blank"} as an Admin.

2. Select **App Types** > **Connectors** from the left navigation filter menu, and navigate to the **Connectors** page, or simply type “kore.ai” in the **Search** field.
    
   <img src="../images/koreai-virtual-assistant-8.png" alt="virtual-assistant" title="virtual-assistant" style="border: 1px solid gray; zoom:80%;">  

   <img src="../images/koreai-virtual-assistant2-9.png" alt="virtual-assistant2" title="virtual-assistant2" style="border: 1px solid gray; zoom:80%;">

3. Select the **Kore.ai** connector, and navigate to the **Connector Details** screen.  
<img src="../images/connector-details-10.png" alt="connector-details" title="connector-details" style="border: 1px solid gray; zoom:80%;">

1. Click **Create Kore.ai Assistant Connector**, and navigate to the **Create Kore.ai Assistant Connector** screen.  
<img src="../images/create-koreai-virtual-assistant-connector-11.png" alt="create-virtual-assistant-connector" title="create-virtual-assistant-connector" style="border: 1px solid gray; zoom:80%;">

1. Enter a name in the **Connector Name** field, select “Voicebot” from the “Choose Bot Type” dropdown list, and then click **Next**.

2. Select the desired region for the voice AI Agent from the dropdown list to automatically populate the Base URL of the regional Kore platform.

3. Copy the **Bot ID**, **Client ID**, and **Client Secret** of your respective app on kore.ai. (Go to **Flows & Channel** > **Digital**. Under **Configured**, click **Configured Channels** > **Web/Mobile Client** > **JWT App Details.**)  
<img src="../images/web-mobile-client-screen-12.png" alt="web-mobile-client-screen" title="web-mobile-client-screen" style="border: 1px solid gray; zoom:80%;">

1. Paste them into the **Bot ID**, **Client ID**, and **Client Secret** fields under the **Authorization Parameters** section on the **Zoom Kore.ai Assistant Connector** page, and then click **Next**.  
<img src="../images/zoom-koreai-va-connector-13.png" alt="zoom-connector" title="zoom-connector" style="border: 1px solid gray; zoom:80%;">

1. Copy the **Domain Name** and **DID Number** from the **Zoom Kore.ai Assistant Connector** page.  
<img src="../images/domain-name-did-number-14.png" alt="domain-name-did-number" title="domain-name-did-number" style="border: 1px solid gray; zoom:80%;">

1.  Paste them into the **Assistant Connector** on **ZCC**.

2.  Click **Next** to authorize the **Kore.ai Chatbot Connector** with the Kore.ai platform.

After creating an Experience Flow, you must attach a DID Number to this flow. (Since Zoom integration is based on DID Number, you don’t need to purchase any number from Kore.)

## Step 5: Fetching Conversation Details and Summary

This section explains the process of fetching the details and summary of the conversation between the bot and the customer.

**Steps**

1. Sign in to **AI for Service**.
2. Go to **Contact Center AI** > **Analytics** > **Contact Center** > **Interactions** and ensure there are call records.  
<img src="../images/contact-center-interactions-15.png" alt="contact-center-interactions" title="contact-center-interactions" style="border: 1px solid gray; zoom:80%;">

3. Go to **Settings** > **App Settings** > **Dev Tools**, and click **API Scopes**.  
<img src="../images/api-scopes-16.png" alt="api-scopes" title="api-scopes" style="border: 1px solid gray; zoom:80%;">

4. Click **+ New Mapping**.
5. Select an **app name** under the **JWT App** list.  
<img src="../images/jwt-app-app-name-17.png" alt="jwt-app-app-name" title="jwt-app-app-name" style="border: 1px solid gray; zoom:80%;">

6. Enable the **Chat History** option under **Automation**.
7. Click **Save**.
8. Go to **Generative AI** > **Models Library**, locate **Kore.ai XO GPT**, and click **Enable Now.**  
<img src="../images/enable-koreai-xo-gpt-18.png" alt="enable-xo-gpt" title="enable-xo-gpt" style="border: 1px solid gray; zoom:80%;">

9. On the **Kore.ai XO GPT** page, select:
    
    9.1. Models.

    9.2. Fine-tuned model for Summarizing Conversation.

    9.3. Please read through the LLM & Generative Policy guidelines and provide your consent to enable the Integration.  
    <img src="../images/llm-genai-policy-guidelines-19.png" alt="llm-gen-policy-guidelines" title="llm-gen-policy-guidelines" style="border: 1px solid gray; zoom:80%;">

10. Click **Save**.
11. Go to **Generative AI** > **GenAI Features**.
12. Enable **Conversation Summary**. To enable, select a model from the **Select Model** list, and then click the **enable** toggle.
13. Go to **Deploy** > **Publish** and click **Proceed** to publish your bot.  
<img src="../images/publish-your-bot-20.png" alt="publish-your-bot" title="publish-your-bot" style="border: 1px solid gray; zoom:80%;">

14. Enter a comment in the **Comments** box, and click **Confirm**.  
<img src="../images/confirm-publishing-your-bot-21.png" alt="confirm-publishing-your-bot" title="confirm-publishing-your-bot" style="border: 1px solid gray; zoom:80%;">

    14.1 Close the message that confirms publishing of your AI Agent.  
    <img src="../images/closing-va-publishing-confirmation-message-22.png" alt="closing-va-publishing-confirmation-message" title="closing-va-publishing-confirmation-message" style="border: 1px solid gray; zoom:80%;">

15. Copy the **curl** from the [Conversation Details and Summary API](../../../apis/automation/conversation-details-and-summary.md){:target="_blank"}.
16. Go to **Postman**, paste the **curl** copied from the API, and then:

    16.1 Replace the **botID** with the **Bot ID** value copied from **AI for Service**.  
Follow these steps to get the **botID**:
        
     16.1.1 Sign in to **AI for Service**.
    
     16.1.2 Go to **Contact Center AI** > **Flows & Channels** > **Digital**.  
        <img src="../images/contact-center-flows-and-channels-digital-23.png" alt="contact-center-digital" title="contact-center-digital" style="border: 1px solid gray; zoom:80%;">

     16.1.3 Click **Web/Mobile Client** under **Configured**.
    
     16.1.4 On the **Web/Mobile Client** configuration page, click to expand the **JWT** **App Details** section.  
        <img src="../images/expand-jwt-app-details-24.png" alt="expand-jwt-app-details" title="expand-jwt-app-details" style="border: 1px solid gray; zoom:80%;">

     16.1.5 Scroll down to the **Bot ID** section, and click the **Copy** button to copy the **botID** value.
  
    16.2 Copy the **sessionID** from **AI for Service**.  
   Follow these steps to get the **sessionID**:
    
     16.2.1 Sign in to **AI for Service**.
    
     16.2.2 Go to **Contact Center AI** > **Analytics** > **Contact Center** > **Interactions**.
    
     16.2.3 Click the log for which you want to get the details.  
        <img src="../images/interaction-log-details-25.png" alt="interaction-log-details" title="interaction-log-details" style="border: 1px solid gray; zoom:80%;">
 
     16.2.4 On the **Insights to Logs** page, click **Identifiers**, and then click the **copy** symbol against the **Session ID** value.  
        <img src="../images/insights-to-logs-sessionid-26.png" alt="insights-to-logs-sessionid" title="insights-to-logs-sessionid" style="border: 1px solid gray; zoom:80%;">

    16.3 Generate and copy the **JWT token** by following [this document](../../../apis/automation/api-introduction.md#generating-the-jwt-token){:target="_blank"}.

17. Run the modified **curl** to get the conversation details and summary of a session.