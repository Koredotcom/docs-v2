# Lead Capture in HubSpot Using AI Agent

You can automate the capture of a lead’s details on chat channels by Installing the Lead Capture for HubSpot CRM. 

With the **Lead Capture** dialog template, you can collect user fields in a conversational format and automate the creation of leads in HubSpot.


## Getting Started

The XO Platform makes it simple to Install the Lead Capture template for HubSpot CRM, which automates the capture of a lead’s details on chat channels. Once the fields are captured, the system automatically creates a lead object in HubSpot.

The entire process consists of the following steps:

1. [Link your HubSpot account](#step-1-link-your-hubspot-account).
2. [Install the Lead Capture for HubSpot CRM](#step-2-install-the-lead-capture-template-for-hubspot-crm).
3. [Train and Test the Dialog Tasks](#step-3-train-the-chatbot-for-the-dialog-task-and-test-it).

### Step 1: Link your HubSpot Account

1. Click **Marketplace** in the left navigation and select **HubSpot** Integration. The HubSpot Integration dialog box is displayed.  
<img src="../images/marketplace_hubspot.png" alt="marketplace" title="marketplace" style="border: 1px solid gray; zoom:70%;">

2. Click **Install** at the top-right corner. The Instructions tab is highlighted. 

3. Switch to the **Authenticate and Install** tab - click the tab. The Authorization Details section is displayed.
4. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **_OAuth_** option.  
<img src="../images/authorization.png" alt="authorization" title="authorization" style="border: 1px solid gray; zoom:70%;">
 
**System Authorization**

Pre-authorize HubSpot integration with the necessary authorization credentials to obtain the token to access external services.

* Select **System** to enable the Kore.ai’s preconfigured HubSpot app and click **Authorize**.  
<img src="../images/system_authorization.png" alt="system_authorization" title="system_authorization" style="border: 1px solid gray; zoom:70%;">
 
 * Once you click **Authorize**, you are redirected to the HubSpot login page.
 * Enter your developer account credentials to successfully connect with your HubSpot Account.

**Custom Authorization**

Create your own custom authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s HubSpot app for authorization.

* Select the **Custom** to enable the custom authorization profile.
* Click the **Select Authorization** drop-down and select the **Create New** option.  
<img src="../images/custom_authorization.png" alt="custom_authorization" title="custom_authorization" style="border: 1px solid gray; zoom:70%;">

* Select the type of authorization mechanism. For example, select the **OAuth v2** option. To create custom OAuth profiles, see [Setting Up Authorization Using OAuth v2](../../app-settings/dev-tools/bot-authorization/setting-up-authorization-using-oauth-v2.md).  
<img src="../images/Oauth.png" alt="Oauth" title="Oauth" style="border: 1px solid gray; zoom:70%;">

* Enter the following authentication credentials for the OAuth v2 mechanism:
    * Call back URL
    * Identity Provider Name
    * Client ID
    * Client Secret Key
    * Authorization URL
    * Token Request URL
    * Scope
    * Refresh Token URL 

* Click **Save Auth** to save Authorization Profile
* Select the new **Authorization Profile,** which you created to enable integration.
* Click **Authorize**. You are navigated to “app.hubspot.com”.  
<img src="../images/hubspot_authorization.png" alt="hubspot_authorization" title="hubspot_authorization" style="border: 1px solid gray; zoom:70%;">

* Enter login credentials to successfully connect with your HubSpot Account.
* Once the authorization is successful, you will see a success message.
* Click **Proceed**. When you configure the action for the first time, the **Integration Installed Successfully** pop-up is displayed.

### Step 2: Install the Lead Capture Template for HubSpot CRM

1. Go to the **Marketplace** and select **Lead Capture** for HubSpot CRM Dialog Template.  
<img src="../images/marketplace_Leadcapture.png" alt="marketplace_Lead capture" title="marketplace_Lead capture" style="border: 1px solid gray; zoom:70%;">

2. The **Lead Capture** installation dialog box is displayed. Click **Install** to begin the installation.  
<img src="../images/install_leadcapture.png" alt="install_lead capture" title="install_lead capture" style="border: 1px solid gray; zoom:70%;">
 
3. Enter the following details in the Lead Capture dialog task.
    1. **Name:** Name of the dialog.
    2. **Description:** Description of the dialog.
    3. **Utterances:** Create utterances in all ways you expect customers to articulate a request, which will trigger the dialog.
    4. **Channel Experiences:** Define the experiences you want for this dialog for the channel types.
    5. **Lead Capture Setup:** Define the Lead Capture setup and the information to be captured.  
    <img src="../images/install_template.png" alt="install_template" title="install_template" style="border: 1px solid gray; zoom:70%;">
4. Click **Finish**.
5. Once the template is installed, a dialog task is auto-created. You can find it in the list of dialogs in **Automation AI** > **Use Cases** > **Dialogs**.  
<img src="../images/dialog-task.png" alt="dialog-task" title="dialog-task" style="border: 1px solid gray; zoom:70%;">

### Step 3: Train the Chatbot for the Dialog Task and Test it

1. Click the **Test** icon.
2. Choose a conversation type (Voice Conversation or Chat Conversation) to test the flow.
3. Click **Train** to complete the untrained utterances.
4. Follow the prompts in the App console to create a lead, as shown below.  
<img src="../images/appconsole.png" alt="app console" title="app console" style="border: 1px solid gray; zoom:70%;">
5. Enter all lead details when prompted by the Chatbot, as shown below:  
<img src="../images/lead_details.png" alt="lead_details" title="lead_details" style="border: 1px solid gray; zoom:70%;">

6. The new lead is created in HubSpot CRM. To view the lead, log in to HubSpot, click **CRM** in the left menu bar, and then select **Contacts**.  
<img src="..//images/Hubspot.png" alt="salesforce" title="salesforce" style="border: 1px solid gray; zoom:70%;">

7. [Publish your App](../../deploy/publishing-bot.md) so the end users can use this capability.