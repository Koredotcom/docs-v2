# Voice Automation and Agent AI Integration with Genesys Cloud CX Agent Desktop via SIP INVITE

This document contains a step-by-step process of handing over a call (via SIP INVITE) initiated from Contact Center AI to Genesys Cloud CX, with Agent AI pre-installed on the Genesys Desktop. 

## Prerequisites 

* Contact Center AI, Automation AI, and Agent AI accounts with administrator access.
* Genesys Cloud CX account with admin role.
* Familiarity with creating Architect flow in Genesys.
* Familiarity with creating External trunk in Genesys.

## Contact Center AI Configuration for Automation 

- Create/Import App into Automation AI with specific use cases. 
- Purchase a Phone Number in the **Flows & Channels** > **Channels** > **Voice Gateway** > **Phone Numbers** section, under CCAI.
- Create Start/Exit Flows in CCAI. 

1. Sign in to **[AI for Service](https://platform.kore.ai/){:target="_blank"}**.  
2. Go to **Contact Center AI** > **Flows & Channels**.  
3. Click **Start Flows** > **+New Start Flow**. Follow [this doc](../../../flows/create-flows.md){:target="_blank"} to create a new flow.  
<img src="../images/new-start-flow-1.png" alt="new-start-flow" title="new-start-flow" style="border: 1px solid gray; zoom:80%;"/>  

4. In **Experience Flow**, add a **script node** and add the “*agentUtils.setAgentTranscribe({transcribe: true});”* code.  
<img src="../images/experience-flow-2.png" alt="experience-flow" title="experience-flow" style="border: 1px solid gray; zoom:80%;"/>   

5. Add an **Automation** node or select other nodes from **Flows** to set up your ideal flow for the conversation.  
6. Add an **Agent Transfer** node in Experience Flow for handing over the call to Genesys agents.   
    <img src="../images/add-node-in-experience-flo-3.png" alt="add-node-in-experience-flo" title="add-node-in-experience-flo" style="border: 1px solid gray; zoom:80%;"/>   

7. **Publish** the flow.   
    * Use **Test Flow** to check if the call is getting connected to the right flow. 

## Configure Agent Transfer 

1. Go to **App Settings** > **Integrations** > **Agent Transfer**.  
    <img src="../images/integrations-agent-transfer-4.png" alt="integrations-agent-transfer" title="integrations-agent-transfer" style="border: 1px solid gray; zoom:80%;"/>  

2. Click **Voice** > **SIP Transfer**. 

    **SIP Transfer Method** : SIP INVITE
    **SIP Transfer URI**: It should be in `sip:+[12345678999@koreSmartassist.byoc.mypurecloud.com` format, where `+12345678999` is a DID number created in Genesys and `koreSmartassist.byoc.mypurecloud.com` is the FQDN method of Genesys external trunk.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>The details of the above credentials are available in the [Genesys configuration](#step-5-trunk) section.</p>
    </div>  

    <img src="../images/sip-transfer-5.png" alt="sip-transfer" title="sip-transfer" style="border: 1px solid gray; zoom:80%;"/>  

    !!! note
        
        Using the SIP Invite method, you can pass these SIP headers to Genesys. Header keys must not contain spaces. Genesys allows reading up to 10 SIP headers using the **Get SIP Header** node in Architect/Callflow.

## Genesys Side Configuration for Agent Transfer  

### Step 1 – Queue 

If you haven’t created an agent queue to route live agent transfers, create one and add the necessary members. 

### Step 2 – Architect Flow  

#### Create an Inbound Call Flow 

In this section, create a new Inbound Call Flow to transfer the inbound calls from Genesys to CCAI.

1. Sign in to [Genesys Cloud](https://login.mypurecloud.com/#/authenticate-adv/org/kore){:target="_blank"}.  
2. Click **Admin** > **Architect**.  
    <img src="../images/admin-architect-6.png" alt="admin-architect" title="admin-architect" style="border: 1px solid gray; zoom:80%;"/>  

3. Click **+ Add** to add a new call flow.  
    <img src="../images/add-new-call-flow-7.png" alt="add-new-call-flow" title="add-new-call-flow" style="border: 1px solid gray; zoom:80%;"/>  

4. Enter a name and a description in the **Name** and **Description** fields. 
5. Click **Create Flow**.  
6. You can create the flow (Add tasks) in the **Main Menu** or create a **Reusable Task** and mark this task as **set this as the starting task** from the three-dot menu.  
7. After the **Start** node, add a **Get SIP Headers** node in the Architect Flow. 
    1. In the **SIP Headers** node, enter a descriptive name (optional). 
    2. For **SIP Header** **Names**, select the **Literal** and add the following items:
        * x-conversationid 
        * x-koresession-id 
    3. For storing the **SIP Headers Result**, enter the name as **Task.koreSIPheaders**:	 
    <img src="../images/store-sip-headers-result-9.png" alt="store-sip-headers-result" title="store-sip-headers-result" style="border: 1px solid gray; zoom:80%;"/>  

        <div class="admonition note">
        <p class="admonition-title">Note</p>
        <p>To find any node inside the Architect, click the **three vertical dots** of that node, and select **Search Toolbox**. </p>
        </div>  

8. The next node is **Set Participant Data** node in the **Architect Flow**.  
    1. Inside this node, give any descriptive name.   
    2. Click the **+** button to add a new **Attribute**.   
    3. Enter the Attribute name as **koreSIPHeaders** (don’t change the name; it has to be the same as mentioned here).    
    
    Assign the value **ToString(Task.koreSIPheaders)** to the above attribute (as an **Expression**).   

    <img src="../images/assign-value-as-expression-10.png" alt="assign-value-as-expression" title="assign-value-as-expression" style="border: 1px solid gray; zoom:80%;"/>   

9. Add at least one **Transfer to ACD** node and point it to the queue you want to use for agents.  
10. At the end of **Failure**, add a **Disconnect** node.  
11. Once the flow is ready, save and publish the Architect Flow.

    !!! note
    
        You can also extract and view all the available SIP headers here. Refer to the following screenshot for more details: 

    <img src="../images/sip-headers.png" alt="sip-headers" title="sip-headers" style="border: 1px solid gray; zoom:80%;"/> 
    
### Step 3 – DID Numbers  

You need a DID Number that is internally routable inside Genesys.   

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>This is combined with the trunk domain for the SIP Address used to INVITE the call to Genesys from the Kore Contact Center.</p>
</div> 

**DID Ranges**    

Create a new, single-number **DID Range** (keep start and end as the same number) that is not a typical external number. For example, +12223334444.  
<img src="../images/did-range-11.png" alt="did-range" title="did-range" style="border: 1px solid gray; zoom:80%;"/>  

For **Service Provider**, use **Internal** and add a comment on what the range is used for.    

**DID Assignments**    

Assign the number you created to the Call Route in [Step-4](#step-4-call-route). 

* Assignee Type: Call Flow
* DID Number: Your number 

### Step 4 – Call Route  

1. Click **Admin** > **Call Routing**.  
2. Click the **add** button to create a new call route.  
    <img src="../images/add-new-call-route-13.png" alt="add-new-call-route" title="add-new-call-route" style="border: 1px solid gray; zoom:80%;"/>   

    <img src="../images/create-call-route-14.png" alt="create-call-route" title="create-call-route" style="border: 1px solid gray; zoom:80%;"/>   

3. Set up a call route to map the DID Number created in [Step-3](#step-3-did-numbers) to the call flow created in [Step-2](#step-2-architect-flow).   

### Step 5 – Trunk  

Configure a trunk that connects the session border controller (SBC) for your region. To configure a trunk, use the following steps:  

1. Sign in to [Genesys Cloud](https://login.mypurecloud.com/#/authenticate-adv/org/kore){:target="_blank"} using your company credentials.   
2. Select **Architect**.   
3. Click **Admin** to open the Admin console.  
4. Either search with **External Trunks** or click **Telephony** > **External Trunks**.  
5. Click **+ Create New**.  
6. Enter a name for the **External Trunk Name** field. 
7. Select **BYOC Carrier** in the **Type** field. 
8. Select **Generic BYOC Carrier** as subtype.  
    <img src="../images/create-external-trunk-17.png" alt="create-external-trunk-17" title="create-external-trunk-17" style="border: 1px solid gray; zoom:80%;"/>  

9. Select **Kore Site** in the **Number Plan Site** dropdown list.  
    <img src="../images/number-plan-site-list-18.png" alt="number-plan-site-list" title="number-plan-site-list" style="border: 1px solid gray; zoom:80%;"/>  

10. Enter a unique name for **Inbound SIP Termination Identifier**.
11. The **Inbound Request-URI Reference** appears as:  
    <img src="../images/inbound-request-uri-reference-19.png" alt="inbound-request-uri-reference" title="inbound-request-uri-reference" style="border: 1px solid gray; zoom:80%;"/>   

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>You must add this FQDN Method URL (`sip:+xxxxxxxxxxx@koreSmartassist.byoc.mypurecloud.com`) to the Contact Center AI side **Agent Transfer** [step](#configure-agent-transfer).</p>
    </div>    

12. In the **SIP Access Control** field, add the AI for Service prod voice gateway IPs. This IP address varies based on the region:   

    * US Prod:  
        * 3.224.189.218  
        * 35.174.41.205  
    * AU Prod:  
        * 54.153.137.7   
        * 13.237.170.233      
    <img src="../images/sip-access-control-field-20.png" alt="sip-access-control-field" title="sip-access-control-field" style="border: 1px solid gray; zoom:80%;"/>    

13. Click to expand it **Media**, and enable **Recording**. 
14. Enable all the **Optional Recording** options. 
15. Select **Opus** from the **Codec** dropdown list. 
16. Select the **Dual channel** checkbox.  
    <img src="../images/dual-channel-checkbox-21.png" alt="dual-channel-checkbox" title="dual-channel-checkbox" style="border: 1px solid gray; zoom:80%;"/>   

17. In the **Protocol** section, expand it and enable **Conversation Headers**.  
    <img src="../images/protocol-conversation-headers-22.png" alt="protocol-conversation-headers" title="protocol-conversation-headers" style="border: 1px solid gray; zoom:80%;"/>   

18. Click **Save External Trunk**.  
    <img src="../images/save-external-trunk-23.png" alt="save-external-trunk" title="save-external-trunk" style="border: 1px solid gray; zoom:80%;"/>  
    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>
    * If **Media** > **Recording** is not enabled in the external trunk, end call summary of the Agent AI widget will be unavailable, as the middleware requires this setting to receive the **session end** event from Genesys.   
    * If **Protocol** > **Conversation Headers** is not enabled, the landing summary (User-Bot conversation history and summary) and real-time transcription in the Agent AI widget will not be available.</p>
    </div> 

## Agent AI Integration 

### Add the bot 

You must use the same automation bot that was used in the CCAI Automation Flow for automation.  
<img src="../images/web-mobile-client-24.png" alt="web-mobile-client" title="web-mobile-client" style="border: 1px solid gray; zoom:80%;"/>   

### Follow the documentation for Agent AI integration with Genesys  

Follow the steps of [Agent AI Integration with Genesys Cloud CX](../../../agentai/integration/genesys/agent-ai-integration-with-genesys-cloud-cx.md){:target="_blank"} for the Agent AI integration steps.   

**Configuration Notes**:  

1. While adding the Agent AI bot credentials in [Agent AI Integration with Genesys Cloud CX](../../../agentai/integration/genesys/agent-ai-integration-with-genesys-cloud-cx.md){:target="_blank"}, make sure to add the details of the bot added in the [previous step](#add-the-bot).  

2. In this step-4, add a new field in the Genesys data table with the following details:   
Name: **isSipInviteTransferFromKore**  
Data Type: **String**  
Value: **True**  
<img src="../images/genesys-data-table-25.png" alt="genesys-data-table" title="genesys-data-table" style="border: 1px solid gray; zoom:80%;"/>   

3. Do not configure **audiohook** or enable **audiohook monitor** in the queue level.
4. Do not add the **is Audiohook Enabled** field in the data table.   

## Test Your Integration  

Make a call to the [CCAI Number](#contact-center-ai-configuration-for-automation), purchased as part of the previous steps. After a successful Agent transfer of the call from CCAI to Genesys, the signed-in Genesys agent can accept incoming calls.   

1. Accept the call in Genesys by clicking the **Answer** button.   
<img src="../images/accept-call-in-genesys-26.png" alt="accept-call-in-genesys" title="accept-call-in-genesys" style="border: 1px solid gray; zoom:80%;"/>   

2. Click the available **Tools** section, and from there select the interaction widget you configured in the earlier [steps.](#follow-the-documentation-for-agent-ai-integration-with-genesys).   
<img src="../images/available-tools-27.png" alt="available-tools" title="available-tools" style="border: 1px solid gray; zoom:80%;"/>  

3. The Agent AI widget renders on the right side of the Genesys Agent desktop.  
<img src="../images/agent-ai-widget-28.png" alt="agent-ai-widget" title="agent-ai-widget" style="border: 1px solid gray; zoom:80%;"/>   

4. Click the **Transcript** tab to see the user-bot conversation history and a summary of the same. This tab also displays the real-time transcripts between the live agent and the user.  
<img src="../images/transcript-tab-29.png" alt="transcript-tab" title="transcript-tab" style="border: 1px solid gray; zoom:80%;"/>   

## Check the Interaction Details in CCAI Interaction   

You can view all interaction details between the user and the bot during the call and the conversation between the user and the live agent after agent transfer in the CCAI dashboard.   

1. Go to **CCAI** > **Analytics**.  
2. Click **Contact Center** > **Interactions**.  
3. Click the interaction you want to view.   
<img src="../images/interaction-to-view-30.png" alt="interaction-to-view" title="interaction-to-view" style="border: 1px solid gray; zoom:80%;"/>   
