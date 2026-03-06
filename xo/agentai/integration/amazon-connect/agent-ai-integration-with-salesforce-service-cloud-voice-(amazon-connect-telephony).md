# Agent AI Integration with Salesforce Service Cloud Voice (Amazon Connect Telephony)

The Agent AI integration with Salesforce Service Cloud Voice (Amazon Connect Telephony) combines Salesforce CRM with Amazon Connect’s telephony system. This integration enables agents to deliver efficient, personalized support through real-time AI-driven insights, suggestions, and automation. It leads to improved response times, customer satisfaction, and operational efficiency by streamlining workflows and providing quick access to critical information.

## Prerequisites

Before integrating Agent AI with Salesforce Service Cloud Voice, the following prerequisites must be met:

* In Salesforce
    * Service Cloud Voice license should be available.
    * [Kore Agent AI Salesforce](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000HSGlnUAH){:target="_blank"} package installed.
* In Kore
    * Agent AI admin permission is needed.

## Salesforce Service Cloud Voice Setup

1. Sign in to **Salesforce**.
2. Click the **Gear** icon > **Service Setup**.  
<img src="../images/service-setup-1.png" alt="service-setup" title="service-setup" style="border: 1px solid gray; zoom:80%;">

3. Type **amazon** in the quick search box, and then select **Amazon Setup** from the suggestions list.  
<img src="../images/amazon-setup-2.png" alt="amazon-setup" title="amazon-setup" style="border: 1px solid gray; zoom:80%;">

4. Select **Enable Omni-Channel**.  
<img src="../images/enable-omnichannel-3.png" alt="enable-omnichannel" title="enable-omnichannel" style="border: 1px solid gray; zoom:80%;">

5. Turn on the **Enable Service Cloud Voice** toggle.  
<img src="../images/enable-service-cloud-voice-4.png" alt="enable-service-cloud-voice" title="enable-service-cloud-voice" style="border: 1px solid gray; zoom:80%;">

6. You receive the following email for further steps:  
<img src="../images/email-notification-5.png" alt="email-notification" title="email-notification" style="border: 1px solid gray; zoom:80%;">

7. Reset the password for the **AWS account**.
8. Try turning on the **Service Cloud Voice** again; you receive the following email:  
<img src="../images/failure-email-6.png" alt="failure-email" title="failure-email" style="border: 1px solid gray; zoom:80%;">

9. Follow the steps provided in the email to proceed further. You receive the following email for successfully enabling the Service Cloud Voice:  
<img src="../images/successful-email-7.png" alt="successful-email" title="successful-email" style="border: 1px solid gray; zoom:80%;">

10. Sign in to the **AWS** account, and provide the **GST number** in the **Account** > **Tax Settings** page.
11. Click **Confirm Settings** under the **Register Tax Number** section.  
<img src="../images/register-tax-number-8.png" alt="register-tax-number" title="register-tax-number" style="border: 1px solid gray; zoom:80%;">

12. Click **Acknowledge**.  
<img src="../images/acknowledge-9.png" alt="acknowledge" title="acknowledge" style="border: 1px solid gray; zoom:80%;">

13. Click **New** to create an Amazon Contact Center from the **Salesforce Service Setup**. In turn, it creates the Amazon Connect instance for you in AWS.  
<img src="../images/salesforce-service-setup-10.png" alt="salesforce-service-setup" title="free text" style="border: 1px solid gray; zoom:80%;">

14. Open the **AWS Connect** instance:  
<img src="../images/aws-connect-instance-11.png" alt="aws-connect-instance" title="aws-connect-instance" style="border: 1px solid gray; zoom:80%;">

15. Sign in to the **AWS Connect** instance, and click **Manage Phone numbers** > **Claim a number**.  
<img src="../images/claim-a-phone-number-12.png" alt="claim-a-phone-number" title="claim-a-phone-number" style="border: 1px solid gray; zoom:80%;">

16. Go to **Salesforce Amazon Contact Center**, and map the contact center channels.  
<img src="../images/add-a-contact-center-channel-13.png" alt="add-a-contact-center-channel" title="add-a-contact-center-channel" style="border: 1px solid gray; zoom:80%;">

Refer to [Set Up Service Cloud Voice with Amazon Connect](https://help.salesforce.com/s/articleView?id=service.voice_turn_on_parent.htm&type=5){:target="_blank"} for help.

## Create Agent Presence Status

1. Click the **Gear** icon > **Setup**.
2. Type **Presence Statuses** in the quick search box, and then click **Presence Statuses** in suggestions.
3. Click the **New** button.  
<img src="../images/new-presence-status-14.png" alt="new-presence-status" title="new-presence-status" style="border: 1px solid gray; zoom:80%;">

4. Enter the **Status Name**, and select **Status Options**.
5. Select the **Service Channels**, and click **Save**.  
<img src="../images/save-a-new-presence-status-15.png" alt="save-a-new-presence-status" title="save-a-new-presence-status" style="border: 1px solid gray; zoom:80%;">

## Add Omnichannel to the Utility bar

1. Click the **Gear** icon, and enter “App Manager” in the search box.
2. Click **APP Manager** from the suggestions list.
3. Search for the **Service Console**, click the dropdown list against it, and click the **Edit** button.  
<img src="../images/edit-service-console-16.png" alt="edit-service-console" title="edit-service-console" style="border: 1px solid gray; zoom:80%;">

4. Click **Utility Items (Desktop Only)** > **Add Utility Item**.
5. Search for **Omni-Channel**, and select it.  
<img src="../images/select-omni-channel-17.png" alt="select-omni-channel" title="select-omni-channel" style="border: 1px solid gray; zoom:80%;">

6. Rename the label, if required, and then click **Save**.

Once the above configuration is complete, you can call the **Amazon Connect** number and accept it via the **Omnichannel** tool. Then, proceed with the next steps of this document.

## Install Agent AI Package

The installation process of the Kore Agent AI package is a simple, 3-step process. Follow these steps to install the package:

1. Visit [Salesforce AppExchange](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000HSGlnUAH){:target="_blank"}.  
<img src="../images/salesforce-app-exchange-18.png" alt="salesforce-app-exchange" title="salesforce-app-exchange" style="border: 1px solid gray; zoom:80%;">

2. Select one of the three available options–**Install for admins only**, **Install for All Users**, or **Install for specific Profiles**.
3. Click **Install**.  
<img src="../images/install-kore-agent-assist-19.png" alt="install-kore-agent-assist" title="install-kore-agent-assist" style="border: 1px solid gray; zoom:80%;">

## Configure Agent AI for Salesforce

This section explains the post-installation steps of Agent AI integration with Salesforce.

### Enable Kore Agent AI Package Features

1. Click the **app launcher**, and type **Kore** in the **quick search** box.
2. Click **Kore AgentAssist Feature Configuration** from the suggestions list.  
    <img src="../images/kore-agent-assist-feature-configuration-20.png" alt="kore-agent-assist-feature-configuration" title="kore-agent-assist-feature-configuration" style="border: 1px solid gray; zoom:80%;">

3. Click the **New** button in the top-right corner, and select the desired features in the package.

    * **Configuration Name:** Provide a name for the configuration you are creating.
    * **CTI Provider**: Skip this field.
    * **Salesforce OmniChannel Solution**: “Chat and Voice” or “Voice” (based on your license).
    * **Active**: Only one feature configuration will be active, and the active configuration will be considered at runtime.

4. Click **Save**.  
<img src="../images/save-agent-assist-feature-configuration-21.png" alt="save-agent-assist-feature-configuration" title="save-agent-assist-feature-configuration" style="border: 1px solid gray; zoom:80%;">

5. Click the **Edit** button, if you want to edit the existing feature configurations.  
<img src="../images/edit-feature-configuration-22.png" alt="edit-feature-configuration" title="edit-feature-configuration" style="border: 1px solid gray; zoom:80%;">

### Set up Widget Configuration

1. Click the **app launcher** in the top-left corner.
2. Type **Kore AgentAssist Configuration** in the quick search bar, and click **Kore AgentAssist Configuration** from the suggestions list.  
<img src="../images/kore-agent-assist-configuration-23.png" alt="kore-agent-assist-configuration" title="kore-agent-assist-configuration" style="border: 1px solid gray; zoom:80%;">

3. Click the **New** button for providing configurations.  
<img src="../images/new-configuration-24.png" alt="new-configuration" title="new-configuration" style="border: 1px solid gray; zoom:80%;">

4. Provide all the details in the text boxes, and click **Save**.  
<img src="../images/saving-new-configuration-25.png" alt="saving-new-configuration" title="saving-new-configuration" style="border: 1px solid gray; zoom:80%;"> 

    !!! note

        In the AgentAssist URL field, use the URL from **Agent AI** > **Flows & Channels** > **Channels** > **Digital** > **Web/Mobile Client** of your Agent AI instance.  

    <img src="../images/configuration-details-26.png" alt="configuration-details" title="configuration-details" style="border: 1px solid gray; zoom:80%;"> 

    !!! note

        Only one configuration is active and that configuration is used at runtime. 

5. Choose the language you want to enable for the Agent AI widget. By default, the language will be English.

### Place the Widget in the Voice Calls Record page

1. Click the **app launcher**, and search with **Voice Calls** in the quick search box.  
<img src="../images/voice-calls-27.png" alt="voice-calls" title="voice-calls" style="border: 1px solid gray; zoom:80%;"> 
2. Open any voice call record page, and click the **Gear** icon.  
<img src="../images/open-a-voice-call-record-28.png" alt="open-a-voice-call-record" title="open-a-voice-call-record" style="border: 1px solid gray; zoom:80%;">

3. Click **Edit Page**.  
<img src="../images/edit-voice-call-record-29.png" alt="edit-voice-call-record" title="edit-voice-call-record" style="border: 1px solid gray; zoom:80%;"> 

4. In the search box, search for **koreAgentAssistVoice**. Components are visible under the **Custom-Managed** section.
5. Drag the component to the screen at the required location and adjust height and width, as required.  
<img src="../images/kore-agent-assist-voice-screen-30.png" alt="kore-agent-assist-voice-screen" title="kore-agent-assist-voice-screen" style="border: 1px solid gray; zoom:80%;">

6. Click **Save**.

## Initiate the Voice

1. Click the **app launcher**, and type **Service Console** or **Lightning app** created by you in the quick search bar.
2. Select **Service Console** in the suggestions list.
3. At the bottom of the page, in the **Utility Bar**, you can find **Omni-Channel**. Click it, and change the status to **Available for Voice**.
4. When a user calls an agent, a voice call record page pops up automatically. The agent receives the call by clicking the **tick mark** button, as highlighted in the following image:  
<img src="../images/receiving-a-call-31.png" alt="receiving-a-call" title="receiving-a-call" style="border: 1px solid gray; zoom:80%;">

5. Once the agent accepts the call, the following screen (a voice call record page) appears, with the Kore Agent AI widget displayed on the right side.  
<img src="../images/voice-call-record-page-32.png" alt="voice-call-record-page" title="voice-call-record-page" style="border: 1px solid gray; zoom:80%;">
