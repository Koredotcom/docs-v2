--8<-- "includes/digital-channels-back-link.md"

# Adding the WhatsApp Business Messaging Channel

Users can select any of the following messaging partners to enable WhatsApp Business messaging:

- [Infobip](#adding-the-whatsapp-channel-using-infobip-application)
- [Gupshup](#adding-the-whatsapp-channel-using-gupshup-application)
- [Karix](#adding-the-whatsapp-channel-using-karix-application)
- [Netcore](#adding-the-whatsapp-channel-using-netcore-application)
- [WhatsApp Cloud API (native integration support)](#adding-the-whatsapp-channel-using-meta-cloud-api)

## Adding the WhatsApp Channel using Infobip Application

To complete this procedure, you must have an **Infobip** account. This is one of the messaging providers for enabling **WhatsApp Business Messaging** on the Platform.

Steps to configure **Infobip**:

1. Login to the **Infobip** developer portal.
2. On the left navigation menu, click the **Channels and Numbers** option and select the **WhatsApp** channel on the **Channel Essentials** panel.
<img src="../images/whatsapp.png" alt="infobip" title="infobip" style="border: 1px solid gray; zoom:70%;">

3. To configure a new number for the **Infobip** and **WhatsApp** messaging platforms’ integration, follow one of the steps given below:
    * Scan the QR code under **Overview** > **Connect** on the **WhatsApp** page on the Infobip portal using the camera or QR scanner on your mobile device.
    * Follow the instructions for steps 2 and 3 shown in the image below.
    <img src="../images/whatsapp1.png" alt="infobip integration" title="infobip integration" style="border: 1px solid gray; zoom:70%;">

    * Alternatively, add the number shown on the screen of the Infobip sender to your WhatsApp contacts.  
    <img src="../images/whatsapp2.png" alt="infobip sender" title="infobip sender" style="border: 1px solid gray; zoom:70%;">

    !!! note

        The mobile number must have the country code preceded by a plus (+) sign to activate the Infobip and WhatsApp connections.

4. After associating the number, select the **Senders** tab to view or edit the numbers for **WhatsApp** messaging.  
<img src="../images/whatsapp3.png" alt="infobip connection" title="infobip connection" style="border: 1px solid gray; zoom:70%;">


5. Click the **ellipses** icon under **Action** and select **Edit Configuration**.  
<img src="../images/whatsapp4.png" alt="edit infobip configuration" title="edit infobip configuration" style="border: 1px solid gray; zoom:70%;">

6. On the **Edit Configuration** page, click the **edit** icon, add the **URL for incoming messages** (copy the Webhook URL from the Platform under **Channels and Flows** > **Channels** > **Digital** > **All** > **WhatsApp Business Messaging** > **Configurations** tab) and click **Back**.
<img src="../images/whatsapp5.png" alt="deploy infobip" title="deploy infobip " style="border: 1px solid gray; zoom:70%;">

7. Next, to add Infobip’s **Base URL**, follow these steps:
   

    * On the Platform, go to **Channels and Flows** > **Channels** > **Digital** > **All** and click **WhatsApp Business Messaging**.
    * On the **WhatsApp Business Messaging** panel, click the **Configurations** tab and provide inputs for the following fields:
        * **Messaging Partner**: Select **Infobip** from the dropdown list.
        * **Phone Number**: Copy and paste the number displayed on the **Infobip** portal for your account under the **Connect** section (please refer to step 3). The Platform now supports **adding multiple phone numbers on the WhatsApp Messaging Channel** for the same AI Agent. The AI Agent responds to only the source number from which it receives the message rather than a common phone number. [Learn more](whatsapp-support-for-multiple-phone-numbers.md).
        * **Base URL**: Copy the Base URL from this page. Use this URL sends messages when the **WhatsApp Business Messaging** channel is enabled.
        <img src="../images/whatsapp7.png" alt="infobip messaging partner" title="infobip messaging partner" style="border: 1px solid gray; zoom:70%;">


        * **Username and Password**: The username and password of the **Infobip** account holder. Infobip’s API requires authentication and uses the basic authorization for sending and receiving messages over the API with these values.
        * **Webhook URL**: Copy the webhook URL provided in the configuration tab and update the same on the **Infobip developer portal** for Infobip to send the received messages from the subscriber (WhatsApp Business Messaging).
        <img src="../images/whatsapp8.png" alt="infobip API" title="infobip API" style="border: 1px solid gray; zoom:70%;">  

        * Enable **Proactive Notifications** to send relevant updates to the users without requiring them to initiate interaction with the app first.

        * Select **Yes** to enable the **WhatsApp Business Messaging** channel.
    * Click **Save** to complete the integration setup.
    <img src="../images/whatsapp9.png" alt="save infobip configuration" title="save infobip configuration" style="border: 1px solid gray; zoom:70%;">

    !!! note

          If you’re using the development sandbox on Infobip, once the channel is enabled and published, you will need to send messages in the format '[Keyword on infobip][User input]' For example, “Platform Hi”.



### Viewing WhatsApp Message Logs on Infobip

Once you’ve sent a message to **Infobip** using the **WhatsApp Business Messaging** channel, you can track the text, AI Agent responses, delivery status, and errors (if any) on your **Infobip** account under **Channels and Numbers** > **Channel Essentials** > **WhatsApp** > **Overview** > **View Logs**.

<img src="../images/whatsapp10.png" alt="view infobip logs" title="view infobip logs" style="border: 1px solid gray; zoom:70%;">

<img src="../images/whatsapp11.png" alt="infobip errors" title="infobip errors" style="border: 1px solid gray; zoom:70%;">


### Messaging Templates

WhatsApp for business communications supports the following messaging types for the Infobip channel:

* **Templates**: Formatted, non-editable, and pre-registered messages approved by WhatsApp.
* **Free-Form texts**: Free-flowing text messages.

The Platform now supports public APIs for WhatsApp templates on the Infobip channel. These templates structure the messages exchanged during AI Agent conversations. Since global UI/rich template formats aren't supported, the app designer should register the required templates with Infobip and get them approved.

The Platform automatically decides the payload to send to the channels after parsing Advanced Messages (JS) that include one of the following:

* **String**: The Platform uses a free-form text message template when the JS result is a string.
* **Object**: The Platform uses a message template when the JS result is an object.

**Additional Information**

* To learn more about creating and managing templates, please refer to this [link](https://www.infobip.com/docs/whatsapp/manage-connection#manage-templates-manage-senders).
* To know more about various message types and the structure of templates, please refer to this [link](https://www.infobip.com/docs/whatsapp/message-types#guidelines-amp-best-practices).
* To learn more about sending template messages, please refer to this [link](https://www.infobip.com/docs/api/whatsapp/whatsapp-outbound-messages/send-whatsapp-template-message).


## Adding the WhatsApp Channel Using GupShup Application

The Platform supports integration with **GupShup** to enable WhatsApp business as a channel. In this integration, the Platform provides a Webhook URL that GupShup calls during a conversation to enable events and exchange messages.

!!! note

      To enable WhatsApp Messaging on this channel, you must have a GupShup enterprise account.

The important steps in completing this channel enablement are as follows:

1. [Create a GupShup Application](#step-1-create-a-gupshup-application). 
2. [Configure the Channel Enablement](#step-2-configure-the-channel-enablement).

    * [Create a WABA (WhatsApp Business Account)](#step-2a-create-a-new-whatsapp-business-account).
    * [Set up the WABA Parameters on the Platform](#step-2b-set-up-the-waba-parameters-on-the-platform).
    * [Configure the Callback URL/Webhook URL](#step-2c-configure-the-callback-urlwebhook-url).

3. [Secure the Integration](#step-3-secure-the-integration).


### Step 1: Create a GupShup Application

The first step in the WhatsApp Messaging Channel integration is to create a GupShup application, To create an app, follow the steps below:

1. Log in to the [GupShup portal](https://www.gupshup.io/whatsapp/dashboard) and navigate to the **Dashboard → WhatsApp** section.  
<img src="../images/whatsapp12.png" alt="save gupshup application" title="save gupshup application" style="border: 1px solid gray; zoom:70%;">

2. Click the **+ Create App** button.  
<img src="../images/whatsapp13.png" alt="create gupshup app" title="create gupshup app" style="border: 1px solid gray; zoom:70%;">


3. On the **Create App** screen, click **Access API** to select the app type.  
<img src="../images/whatsapp14.png" alt="access gupshup api" title="access gupshup api" style="border: 1px solid gray; zoom:70%;">


4. Provide a unique name for the application and click **Submit**.  
<img src="../images/whatsapp15.png" alt="submit gupshup app" title="submit gupshup app" style="border: 1px solid gray; zoom:70%;">


5. For **_Step 2: Onboard your Users_**, click **Next**.  
<img src="../images/whatsapp16.png" alt="onboard gupshup " title="onboard gupshup " style="border: 1px solid gray; zoom:70%;">


### Step 2: Configure the Channel Enablement

To send messages to your GupShup users on the WhatsApp Business Messaging Channel, follow the steps below:


### Step 2a: Create a new WhatsApp Business Account

Once you have created a GupShup app, you need to create a **WABA** to set up the integration with a number. To create a WABA, follow the steps below:



1. Navigate to the WhatsApp Dashboard on your GupShup Developer Console.
2. Click the **Go Live** button of the desired app in the list.
<img src="../images/whatsapp17.png" alt="enable gupshup app" title="enable gupshup app" style="border: 1px solid gray; zoom:70%;">

3. On the **Let’s Get Started** window, select the **New Number** option under **Managed onboarding with Gupshup**.
4. Click **Proceed**.  
<img src="../images/whatsapp18.png" alt="add gupshup number" title="add gupshup number" style="border: 1px solid gray; zoom:70%;">

5. Enter your details to set up your WhatsApp Business account and click **Next**.
6. Follow all the instructions on the screen to **Setup the WhatsApp Account, Get WhatsApp Approvals**, and **Complete Verification**.
7. Once the platform verfies the account with your _Facebook Business ID_, it displays **WABA ID**, **Mobile number**, and **Password**.


### Step 2b: Set up the WABA Parameters on the Platform

To integrate your GupShup service using the WBM channel to the Platform, follow the steps below:

1. Copy the **Mobile number**, **WABA ID**, and the **Password** from the GupShup WhatsApp Dashboard.
2. On the App Builder, navigate to **Channels and Flows** > **Channels** > **Digital** > **All** > **WhatsApp Business Messaging**.
3. Click the **Configurations** tab on the **WhatsApp Business Messaging** window.
4. Select **GupShup** from the dropdown list for **Messaging Partner**.
5. Paste the copied values for **Mobile number**, **WABA ID**, and **Password** in the respective input fields.  <img src="../images/whatsapp19.png" alt="add gupshup WABA ID" title="add gupshup WABA ID" style="border: 1px solid gray; zoom:70%;">



### Step 2c: Configure the Callback URL/Webhook URL

To link to your app on the Platform to receive inbound messages/events, you must configure the **Callback/Webhook URL** on your **GupShup WhatsApp Dashboard**.

To set up the **Callback URL**, follow the steps below:


1. On the App Builder, navigate to **Channels and Flows** > **Channels** > **Digital** > **All** > **WhatsApp Business Messaging**.
2. Click the **Configurations** tab on the **WhatsApp Business Messaging** window.
3. Ensure you have selected **GupShup** for the **Messaging Partner** field. Click **Copy** to copy the **Webhook URL**.  
<img src="../images/whatsapp20.png" alt="enter gupshup webhook" title="enter gupshup webhook" style="border: 1px solid gray; zoom:70%;">

4. Navigate to your **GupShup WhatsApp Dashboard**.
5. Click the **Settings** icon for your app of type **Access API**.
<img src="../images/whatsapp21.png" alt="enter gupshup settings" title="enter gupshup settings" style="border: 1px solid gray; zoom:70%;">

6. On the **Settings** page, scroll down to the **Test Access API and set callback URL** section.
7. Click the **Callback URL / Link your Bot** tab.
8. Turn on the toggle switch and paste the **Webhook URL** you copied from the App Builder in the **Enter your Callback URL** input field.  
<img src="../images/whatsapp22.png" alt="test gupshup api" title="test gupshup api" style="border: 1px solid gray; zoom:70%;">

9. Click **Set**.

    Refer to this [link](https://www.gupshup.io/developer/docs/bot-platform/guide/whatsapp-api-documentation#setupcallbackURL) for more information on setting up the Callback/Webhook URL on the Gupshup Dashboard.

    !!! note

          Contact the Gupshup customer support team to help configure the webhook URL on GupShup and enable inbound messages to the app.


10. Once you set the callback successfully in the Platform **WhatsApp Business Messaging** window, follow the steps below:
    * (Optional) Enable the **Associate an App** option, if required, and follow the configuration steps.
    * Enable **Proactive Notifications** to send relevant updates to the users without requiring them to initiate interaction with the app first.
    * Select **YES** for the **Enable Channel** option.
    * Click **Save**.


### Step 3: Secure the Integration

The Webhook URL used on the WhatsApp Business Messaging Channel for GupShup is a public URL that may cause security vulnerabilities. The Platform enforces an authentication mechanism by securing the webhook URL and associating it with a App. The **Associate an App** feature serves this purpose.

This feature is available under **Channels and Flows** > **Channels** > **Digital** > **All** > **WhatsApp Business Messaging** > **Configurations**.

<img src="../images/whatsapp23.png" alt="secure gupshup integration" title="secure gupshup integration" style="border: 1px solid gray; zoom:70%;">


**How it Works:**

When you enable **Associate an App**, the following happens:



1. The **GupShup** (the Callback URL you configure under Settings) calls the URL where the channel passes the authorization token as the header information.
2. The Platform checks for the JWT Token of the associated app in the Header and accepts the Webhook API call(s).
3. However, if the Token is missing, the Platform rejects the incoming API call(s) and responds with an error code.

Once you enable **Associate an App**, you must manually select an app and configure it for the GupShup app (by clicking **Copy** and pasting the _Client ID_ and _Client Secret_ (shown above) from the Platform).

!!! note

    This channel configuration is not a part of the Import/Export feature. The user should manually enable the channel for the target App. The integration flow remains the same even with the App Association feature.


### Messaging Templates

As part of the GupShup WhatsApp channel integration, the Platform supports the following Gupshup outbound message types to provide an engaging, interactive end-user experience:



* **Templates:** WhatsApp-approved, pre-formatted messages that aren't editable.
* **Free-flowing**: Messages that support all media types as “free-form

You may have to switch between these message types depending on the timing and initiation of the chat.

Whether you are messaging clients inside the messaging window determines the type of message you send. When messaging customers outside of this window, you must follow pre-approved message template rules. [Learn more](https://docs.gupshup.io/docs/message-types-templates#message-templates).

Message templates for outbound messages play a crucial role in ensuring businesses adhere to WhatsApp policies when initiating communications. These templates come preformatted with predefined text, providing a structured framework for messages sent to end users. Their reusability is particularly valuable when sending the same message multiple times.

Instead of transmitting the actual message content, the template name serves as the identifier for the message content when sending a message template.

Templates can incorporate placeholders, allowing for the inclusion of values or customized information before sending the template message. Additionally, template headers may include media that provides more detailed information. Introducing buttons to messages further enhances interactivity and engagement.

Message templates typically consist of Header, Body, Footer, and Buttons. For detailed see [Gupshup docs](https://docs.gupshup.io/docs/whatsapp-message-types-outbound-templates#header)

The Document with Text template is also supported for outbound messages. With this template, developers can send a document along with informative text for end users to download.

The following is the sample template script:

'''
    var msg = {

    "type": "document",

    "message_text":"This is document caption",

    "caption":"This document talks about Gupshup features",

    "filename": "Developer.pdf",

    "document": {"url":"https://enterprise.smsgupshup.com/help/in/EnterpriseAPIDocument.pdf"}

    };

    print(JSON.stringify(msg))

'''

Prior to submitting notifications through the WhatsApp Business Solution or the WhatsApp Cloud Business Solution, it's imperative to create and register your message templates. This step ensures that the templates comply with WhatsApp’s review requirements, facilitating effective communication within the platform.

The Platform supports public APIs for the integration and utilization of WhatsApp Outbound Templates on the GupShup channel. Contact Support, our experts to learn more. 

### Support for WhatsApp Pay

The Platform supports WhatsApp Pay, a digital payment service that enables instant money transfers between banks through mobile devices using the Unified Payments Interface (UPI) system for the GupShup channel. GupShup, as a WhatsApp Business integration provider, supports outbound message types **Order Details [Text]** and **Order Status** templates, which are also supported on the Platform via APIs.

**How it Works:**

1. When the end user completes the transaction using the WhatsApp Pay template rendered on the WhatsApp channel, the Platform receives an inbound message.
2. The Inbound message is in the form of a JSON Object containing payment details and their respective status.
3. The Platform automatically decides the payload to send to the channels after parsing Advanced Messages (JS) that include one of the following:
    * **String**: Use a free-form text message template when the JS result returns a string.
    * **Object**: Use message template if the JS result is an object.
4. The Platform accepts this JSON object format as the **Composite** entity type and stores it in the context object under the respective entity.

The following sample shows a success payload:


```
 {
   "waNumber": "919XXXXXXXX3",
   "mobile": "919XXXXXXXX",
  "interactive": "{\"payment\":{\"transaction_id\":\"31706099xxxx\",\"reference_id\":\"fastag091-12xx\",\"total_amount\":{\"offset\":100,\"value\":300},\"currency\":\"INR\",\"transaction_type\":\"upi\",\"status\":\"success\"},\"type\":\"payment\"}",
  "name": "ɹɐʞsxxxxx sxxxxxɹɥS",
  "type": "interactive",
  "timestamp": "1687160320000"
}
```

### Error Response Codes

The table below outlines the various error status codes that may occur when receiving incoming requests through the Gupshup Whatsapp channel:

| Scenario                              | Status Code | Message                 |
|---------------------------------------|-------------|-------------------------|
| Authorization header is missing       | 401         | Access token not found  |
| Authorization header is incorrect     | 401         | Invalid access          |
| JSON request body is missing          | 500         | Internal Server Error   |
| Invalid “streamId” in the request URL | 500         | Internal Server Error   |
| Missing "mobile" field in the request body | 500         | Internal Server Error   |


## Adding the WhatsApp Channel Using Karix Application

To integrate **Karix** to your _WhatsApp Business Messaging_ channel and enable it for an app, you’ll need to perform the following setup under the **Configuration** tab.

!!! note

    To complete this procedure, you must already have a _Karix_ account. This is one of the messaging provider for enabling WhatsApp Business Messaging.

### Prerequisites

1. Gather the following details from the **Karix support team**.
    * Vendor
    * Account Key
    * From
2. Copy the _Webhook URL_ from the **Platform** and share it with the **Karix support team**. The Karix support team will need to configure this URL on their platform for a successful handshake between _Platform_ and _Karix_.

### Configuration Steps

On the WhatsApp Business Messaging platform, follow the below steps:

1. Select _Karix_ from the list for **Messaging Partner**.
2. Enter the **Phone Number** to map to the WhatsApp Business Messaging channel.
3. Provide the **Account Key** you’ve received from the Karix support team.
4. Provide the **Webhook URL** shared with the Karix support team.
5. Enable **Proactive Notifications** to send relevant updates to the users without requiring them to initiate interaction with the app first.
6. Select **Yes** for **Enable Channel**.
7. Click **Save**.  

<img src="../images/whatsapp24.png" alt="configure karix" title="configure karix" style="border: 1px solid gray; zoom:70%;">

## Adding the WhatsApp Channel using Netcore Application

Netcore CE uses API endpoints from [CPaaS](https://email.netcorecloud.com/){:target="_blank"} to connect with WhatsApp. To enable, WhatsApp through Netcore on the Platform, you must provide the WhatsApp phone number and API key in the **Channel Configurations** section and the Platform’s Webhook URL for the API callback in the CPaaS portal.

### Prerequisites

* An active WhatsApp Business account for your enterprise.
* An active CPaSS account with WhatsApp **enabled**.
* Selecting **Opt-in** is compulsory for WhatsApp communication, although there is a provision for bypassing Opt-in if necessary. [Learn more](https://cedocs.netcorecloud.com/docs/whatsapp#opt-in-mechanism-for-whatsapp){:target="_blank"}.

### Configuration Steps

To configure and enable WhatsApp using Netcore, follow the steps below:

### Step 1: Get the API Key

To begin WhatsApp integration via Netcore, copy the API Key from Netcore to the channel’s configuration page on the platform by following the steps below:

1. [Login](https://email.netcorecloud.com/){:target="_blank"} to your Netcore account using CPaaS.
2. On the left navigation menu, click **Settings** > **General Settings**.
3. Scroll down to the **Integrate API** section.
4. On the **Integrations** page, click on the **API** tab.
5. The system hides the API Key for security purposes. Click **Show**. The system will prompt you to enter your account password. Once you enter the password, the API key is accessible.
<img src="../images/whatsapp-api-key.png" alt="whatsapp api key" title="whatsapp api key" style="border: 1px solid gray; zoom:75%;">


<div class="admonition note">
<p class="admonition-title"><b>Note</b></p>
<p><ul><li>To create a new key, click <b>Create API Key</b>, enter a unique name, and click <b>Save</b>.</li>
<li>Your API key is auto generated; therefore, you can't edit it.</li>
<li>By default, the system activates your new API key (green check) after creation</li></ul></p>
</div>

<ol start="6"><li>Copy the <b>API key</b> value and save it for later use.</li></ol>

<div class="admonition warning">
<p class="admonition-title"><b>Important</b></p>
<p><ul><li>For security reasons, the platform shows the key only once; if you don't save it, you won’t be able to view or copy it again. Ensure to store your API key securely.</li>
<li>An API key is unique for each business number. An <b>Access Denied</b> error occurs while running the API key if used incorrectly.</li></ul></p>
</div>

### Step 2: Add Incoming Webhook URL

Next, set up the Webhook URL on Netcore for callback from the channel by following the steps below:

1. Login to the Platform.
2. From the home page, select the **App** you wish to integrate.
3. From the left navigation pane, select the **Flow and Channels > Digital > All > WhatsApp Business messaging**.
4. From the pop-up, under the Configurations, select the **Netcore** from the Messaging Partner drop-down.  
<img src="../images/messaging-dropdown.png" alt="messaging-dropdown" title="messaging-dropdown" style="border: 1px solid gray; zoom:70%;">

5. Copy the **Webhook URL**.  
<img src="../images/copy-webhook-url-netcore.png" alt="webhook url" title="webhook url" style="border: 1px solid gray; zoom:75%;">

6. [Login](https://email.netcorecloud.com/){:target="_blank"} to your Netcore account using CPaaS.
7. On the left navigation menu, click **Settings**.
8. Scroll down to the **Webhook Integration** section.
9. Under **Incoming webhook**, paste the webhook URL copied from the Platform.
10. Turn on the **Status** switch to enable the webhook.
<img src="../images/webhook-integration-netcore.png" alt="enable webhook" title="enable webhook" style="border: 1px solid gray; zoom:75%;">

### Step 3: Enable the Channel

Finally, enable the channel on the Platform to start receiving WhatsApp messages by following the steps below:

1. Navigate to **Deploy** > **Channels** > **WhatsApp Business Messaging** > **Configurations** page.
2. Select *Netcore* for **Messaging Partner**.
3. Add the registered WhatsApp Business Messaging phone number(s). The platform allows a maximum of 20 numbers.
4. Paste the API Key copied in step 6 [here](#step-1-get-the-api-key){:target="_blank"}.
5. Enable **Proactive Notifications** to send relevant updates to the users without requiring them to initiate interaction with   the app first.
6. Select “*Yes*” for **Enable Channel**.
7. Click **Save**.

    <img src="../images/enable-channel-netcore.png" alt="enable netcore" title="enable netcore" style="border: 1px solid gray; zoom:75%;">

The platform enables **WhatsApp Business Messaging channel using Netcore**.

## Adding the WhatsApp Channel Using Meta Cloud API

This integration uses Meta’s Cloud API for WhatsApp Business messaging that eliminates the need for third-party Business Solution Providers (BSPs) and enables businesses to access WhatsApp features directly through their account.

To enable WhatsApp integration on the Platform, you must provide the WhatsApp phone number and API key in the Channel Configurations section and the Platform’s Webhook URL for the API callback in the CPaaS portal.

**Key features:**

- Seamless management of templates, catalogs, conversational flows, and payments.
- Simplified account linking and configuration through Meta's developer platform.
- Enhanced operational efficiency and customer satisfaction.

### Configuration Steps

To configure and enable WhatsApp Native integration via Cloud API, pursue the following steps:

#### Step 1: Create your app

1. Log in to the [Meta Developer Portal](https://developers.facebook.com/){:target="_blank"} and click the **Apps** button.  
<img src="../images/App-button.png" alt="App-button" title="App-button" style="border: 1px solid gray; zoom:70%;">

2. Now, click **Create App** to create a new app or select an existing app.  
<img src="../images/create-app.png" alt="create-app" title="create-app" style="border: 1px solid gray; zoom:70%;">

3. Enter the details in the following tabs as per your business needs and click **Next** to create a WhatsApp Business Account (WABA):
    - App details
    - Use cases
    - Business
    - Requirements
    - Overview  
    <img src="../images/App-details.png" alt="App-details" title="App-details" style="border: 1px solid gray; zoom:70%;">

4. On the app in the app dashboard, Click on your created app.  
<img src="../images/Apps.png" alt="Apps" title="widget sdk configuration" style="border: 1px solid gray; zoom:70%;">

#### Step 2: Get Permanent Token, App ID, and App Secret

If you are opting for Permanent Authorization, get a Permanent Token. Refer [Creating a Permanent Access Token](https://developers.facebook.com/blog/post/2022/12/05/auth-tokens/). 



1. Go to [Business Settings](https://business.facebook.com/business/loginpage/).
2. Select the business account that associates with your app.
3. Below Users, click System Users.
4. Click Add.
5. Name the system user, choose Admin as the user role, and click Create System User.
6. Select the WhatsApp Business Messaging permission.
7. Click Generate New Token.
8. Copy and save your token.

If you are opting for Temporary Authorization: Retrieve App ID and App Secret.

1. Go to your **App Dashboard**.
2. Click the **App Settings** tab.
3. Under **App Settings**, select **Basic**.
4. Find and Copy the **App ID** and **App Secret ID** and paste it as required in the **Step 4** 

    !!! note

        Ensure that you enter details in all required columns. Without all the required fields, your app will not be approved by Meta.

    <img src="../images/App-settings-basic.png" alt="App-settings-basic" title="App-settings-basic" style="border: 1px solid gray; zoom:70%;">

#### Step 3: Configure the Callback URL

1. Click **Add product** under the Products section on the left navigation bar.

    !!! note

        The **Facebook Login for Business** is not available as default. Therefore, we recommends that you search for it to add under the My products section. Ignore, if it is already available. 

    <img src="../images/Products-add products.png" alt="Products-add products" title="Products-add products" style="border: 1px solid gray; zoom:70%;">

2. Now, click the **Settings** tab of Facebook Login for Business.  
<img src="../images/Facebook-settings.png" alt="Facebook-settings" title="Facebook-settings" style="border: 1px solid gray; zoom:70%;">

3. On the Settings page, enter the Valid OAuth Redirect URLs from the **Platform Configuration Page** as follows:

    a. Login to the Platform.

    b. From the home page, select the **App** you wish to integrate.

    c. In the left navigation, select the **Flow and Channels** and then click **Digital** > **All** > **WhatsApp Business Messaging**.

    d. On the **Configurations** tab, select the **WhatsApp Cloud API** from the Messaging Partner list.  
    <img src="../images/messaging-dropdown.png" alt="messaging-dropdown" title="messaging-dropdown" style="border: 1px solid gray; zoom:70%;">

    f. Copy the **Callback URL** from the **Platform Configuration Page** and paste it into the Valid OAuth Redirect URLs of App Setting page of Meta developer page.

    !!! note

          We recommends you verify the Callback URL using the Redirect URL Validator to ensure the accuracy of the path URL.  
    
    <img src="../images/Validauth-redirecturl.png" alt="Validauth-redirecturl" title="Validauth-redirecturl" style="border: 1px solid gray; zoom:70%;">



#### Step 4: Select Authorization Type

Enter the Phone Number ID and select the connection Authorization Type.



* If you select Temporary Authorization, enter the **App ID** and **App Secret ID** from step 2, and **Authorize** the channel. Temporary tokens expire every two months and require reauthorization to keep the channel active.  
<img src="../images/temporary-authorization.png" alt="Temporary Authorization" title="Temporary Authorization" style="border: 1px solid gray; zoom:70%;">

* If you select the Permanent Authorization, enter the **Permanent Token** from step 2 provided by the Meta. Refer [Creating a Permanent Access Token](https://developers.facebook.com/blog/post/2022/12/05/auth-tokens/).  
<img src="../images/permanent-token.png" alt="Permanent Authorization" title="Permanent Authorization" style="border: 1px solid gray; zoom:70%;">



 

#### Step 5: Verify the Webhook URL and Token

1. From the **Platform App builder Configuration Page**, copy the **URL** and **Token**.

    !!! note

        We recommends you verify the Token and Callback URL by publishing your application. This ensures your token and URL is valid.  

2. Paste them in the **Callback URL** and **Verify token** respectively of the **Configuration** section under the **WhatsApp** section in the left navigation bar.  
<img src="../images/Verify-save.png" alt="Verify-save" title="Verify-save" style="border: 1px solid gray; zoom:70%;">
    
3. Click **Verify and save**.
4. Now, from the Webhook fields, subscribe to the **messages** by enabling the toggle.

    !!!note

        We recommends you to select the latest version of the messaging app while subscribing.
            
    <img src="../images/Messages.png" alt="Messages" title="Messages" style="border: 1px solid gray; zoom:70%;">

#### Step 6: Enable the Channel

Finally, enable the channel on the Platform to start receiving WhatsApp messages by following the steps below:

1. Enable **Proactive Notifications** to send relevant updates to the users without requiring them to initiate interaction with   the app first.
2. Select “*Yes*” for **Enable Channel**.
3. Click **Save**.  