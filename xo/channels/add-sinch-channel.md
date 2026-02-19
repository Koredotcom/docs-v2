--8<-- "includes/digital-channels-back-link.md"

# Adding the Sinch Channel

AI Agents built on the Platform can be deployed on the **Sinch Conversation API** platform. 

The **Sinch Conversation API** allows developers to create robust omnichannel messaging experiences across multiple interaction channels.

**Why Sinch Conversation API?**

* Provides support for message sending, conversation management, user authentication, and rich message formatting, empowering developers to deliver seamless and engaging user communication experiences.
* Offers built-in transcoding for smooth conversations across all supported channels, with optional full control over channel-specific features.
* Consolidates all conversation details into a single callback, streamlining integration with the XO Platform.

**Prerequisites**

* Access to the XO Platform App Builder. [Learn more](../getting-started/accessing-the-platform.md){:target="_blank"}.
* A working AI Agent on the Platform to test the channel enablement. [Learn more](../getting-started/guided-onboarding.md){:target="_blank"}.
* Enabling the Sinch Conversation API requires [signing up](https://dashboard.sinch.com/signup){:target="_blank"} on the Sinch developer dashboard.

To set up the channel, you must associate the AI Agent with a Sinch app and set up the required delivery channel. The steps to complete the channel enablement are summarized below:

1. [Capture the Sinch Project Access keys for Authentication](#step-1-capture-the-sinch-project-access-keys-for-authentication).
2. [Create an App](#step-2-create-an-app).
3. [Configure the Webhook URL](#step-3-configure-the-webhook-url).
4. [Configure the delivery channel](#step-4-configure-the-delivery-channel).
5. [Enable the Channel on the Platform](#step-5-enable-the-channel-on-the-xo-platform).

## Step 1: Capture the Sinch Project Access keys for Authentication

Once you create an account and log in, accept the terms and conditions and create your access key. 

The Conversation API uses OAuth2 tokens for authentication, which can be obtained from an OAuth2 token endpoint. To authenticate, a *client_id* (or **KEY ID**) and *client_secret* (or **KEY SECRET**) are used.  You can generate new Access Keys, each with a new **KEY ID** and **KEY SECRET**, at any time.

To create an access key, follow the steps below:

1. [Log in](https://dashboard.sinch.com/login){:target="_blank"} to your Sinch account and navigate to the developer dashboard.
2. Select **Settings** in the left menu and navigate to the **General Settings** screen.
3. Select **Access Keys** under **Settings** and navigate to the **Access Keys** screen.
<img src="../images/sinch-settings-access-keys.png" alt="access keys" title="access keys" style="border: 1px solid gray; zoom:75%;">
 
    This page shows your project(s) and corresponding Project ID(s) and a list of your Access keys and the corresponding KEY IDs.

<ol start="4"><li>In the top left corner of your screen, next to the <i>Sinch</i> logo, select the desired project from the <b>Project</b> dropdown.</li>
<li>Copy and save the <b>Project ID</b> of your project. Paste it into the relevant field on the XO Platform’s Sinch <b>Configurations</b> page.</li>

<img src="../images/copy-project-id.png" alt="copy project id" title="copy project id" style="border: 1px solid gray; zoom:75%;"></ol>

<p>You can also copy the <b>Project ID</b> by clicking <b>Conversation API</b> > <b>Overview</b> on the left menu.</p>

<img src="../images/conersation-api-overview.png" alt="conversation api" title="conversation api" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title"><b>Note</b></p>
<p>When you sign up for a Sinch account, a default project is created for you. Conversation API uses this project to group contacts and apps together. To create additional projects, contact your Sinch account manager for assistance.</p>
</div>

<ol start="6"><li>Click the <b>New Key</b> or <b>Create Access Key</b> button in the <b>Access Keys List</b> section.</li>

<li>Provide a display name for your access key in the <b>New Access Key</b> window, and click <b>Confirm</b>.
<img src="../images/new-sinch-access-key.png" alt="new access key" title="new access key" style="border: 1px solid gray; zoom:75%;"></li>

The <b>Key</b> is created, and the <i>Key ID</i> & <i>Key Secret</i> are generated as shown in the form below.

<img src="../images/key-id-and-secret.png" alt="key id and secret" title="key id and secret" style="border: 1px solid gray; zoom:75%;"></ol>

<ol start ="8"><li>Copy the <b>Key ID</b> and <b>Key Secret</b> and paste them into the relevant field on the XO Platform’s <b>Sinch Configurations</b> page.</li></ol>

<div class="admonition warning">
<p class="admonition-title"><b>Important</b></p>
<p>You must copy and store the generated <b>Key Secret</b>. You cannot retrieve it again once you’ve created the key.</p>
</div>

<ol start="9"><li>Click <b>Confirm</b>.</li></ol>

You are returned to the **Access Keys** page, where your new key is displayed in the **Access key list** section.

<div class="admonition note">
<p class="admonition-title"><b>Note</b></p>
<p>The <b>KEY SECRET</b> is only displayed when a new <i>Access key</i> is created.</p>
</div>




## Step 2: Create An App

The next step is to create and configure a **Conversation API** app to enable the channel.

Follow the steps below to create an app. Alternatively, you can use [API calls](https://developers.sinch.com/docs/conversation/api-reference/conversation/tag/App/#tag/App/operation/App_CreateApp){:target="_blank"} to create an app.

1. Select **Conversation API** > **Apps** on the left menu.
2. On the **Conversation Apps** page, click the **NewApp** button in the **Apps** section.

    <img src="../images/conversation-apps.png" alt="conversation apps" title="conversation apps" style="border: 1px solid gray; zoom:75%;">

3. In the **New App** form. Provide the app’s **Display Name** and select the region from the dropdown menu.

<div class="admonition note">
<p class="admonition-title"><b>Note</b></p>
<p><ul><li>The region you select determines where your Conversation API app is hosted and where its associated data is stored. Once a region is chosen for your app, it cannot be changed.</li>
<li>Based on the region selected, capture the <b>Sinch region Base URL</b> and provide it in the configuration tab of this page. <a href="https://developers.sinch.com/docs/conversation/api-reference#base-url" target="_blank">See</a> the list of Sinch region URLs.</li></p>
</div>

<img src="../images/new-app.png" alt="new app" title="new app" style="border: 1px solid gray; zoom:75%;">

<ol start="4"><li>Click <b>Create</b>.

The newly created APP is displayed in the <b>Apps</b> section.
<img src="../images/new-app-id.png" alt="new app id" title="new app id" style="border: 1px solid gray; zoom:75%;"></li>
<li>Click the <b>App Name</b> and go to the <b>App Details</b> screen.</li>
<li>Copy and save the <b>App ID</b> displayed in the <b>Configuration</b> section. Paste it into the relevant field on the XO Platform’s <b>Sinch Configurations</b> page.</li>
<img src="../images/copy-and-save-app-id.png" alt="copy and save app id" title="copy and save app id" style="border: 1px solid gray; zoom:75%;"></ol>

## Step 3: Configure the Webhook URL

To send and receive messages, you need to configure at least one channel using a webhook URL for your app. To configure, follow the steps below:

1. Select the App created by you on the **Apps** page.
2. Scroll down to the **Webhooks** section and click **Add Webhook**.
<img src="../images/add-sinch-webhook.png" alt="add webhook" title="add webhook" style="border: 1px solid gray; zoom:75%;">

The **New webhook** form is displayed.

<img src="../images/new-webhook-form.png" alt="new webhook form" title="new webhook form" style="border: 1px solid gray; zoom:75%;">

<ol start="3"><li>In the <b>Target type</b> dropdown, select <i>HTTP</i>.</li>
<li>In the <b>Target URL</b> field, copy and paste the <b>WebHook URL</b> value from the XO Platform’s <b>Channels</b> > <b>Sinch</b> > <b>Configurations</b> section.</li>
<li>In the <b>Secret token</b> field, copy and paste the value for <b>Verify Token</b> from the XO Platform’s <b>Channels</b> > <b>Sinch</b> > <b>Configurations</b> section. This token enables the webhook to validate against your chosen endpoint.</li>
<img src="../images/paste-in-sinch-configurations.png" alt="configure on xo" title="configure on xo" style="border: 1px solid gray; zoom:75%;"></ol>
<ol start="6"><li>In the <b>Triggers</b> dropdown, select all the triggers you want to add to the webhook.</li>
<li>Click <b>Create</b>.</li>
<img src="../images/click-create-webhook.png" alt="click create webhook" title="click create webhook" style="border: 1px solid gray; zoom:75%;"></ol>

The webhook is created and displayed in the <b>Webhooks</b> section of the app page.

<img src="../images/webhooks-section.png" alt="webhook listing" title="webhook listing" style="border: 1px solid gray; zoom:75%;">

## Step 4: Configure the Delivery Channel

Next, you must configure the delivery channel for the conversations with the steps given below:

1. Select the app you’ve created on the **Apps** page.
2. Scroll down to the **Setup Channels** section.

    <img src="../images/set-up-channels.png" alt="set up channels" title="set up channels" style="border: 1px solid gray; zoom:75%;">

3. Select the delivery channel you want to configure.
4. To set up the required channel, click the channel listing [here](https://developers.sinch.com/docs/conversation/channel-support/){:target="_blank"}.

## Step 5: Enable the Channel on the XO Platform

To enable the channel on the UXO Platform, follow the steps below:

<ol><li>Go to <b>Automation AI</b> > <b>Flows & Channels</b> on the left navigation menu.</li>
<li> Select <b>Digital</b> under <b>Channels</b>.</li>
<li> Click the <b>All</b> tab, and select <b>Sinch</b> in the <b>Enterprise Channels</b> section.</li>
 <img src="../images/select-sinch.png" alt="select Sinch" title="select Sinch" style="border: 1px solid gray; zoom:75%;"></ol>

<ol start="4"><li>Click the <b>Configurations</b> tab.</li>
<li>Copy the relevant field values from your <b>Sinch Conversation API</b> app and paste them into the relevant fields as follows:</li></ol>

* **Sinch Region Base URL**: Copied in Step 3 [here](#step-2-create-an-app){:target="_blank"}.

* **Project ID**: Copied in Step 5 [here](#step-1-capture-the-sinch-project-access-keys-for-authentication){:target="_blank"}.

* **Access Key Id** and **Access Key Secret**: Copied in Step 8 [here](#step-1-capture-the-sinch-project-access-keys-for-authentication){:target="_blank"}.

* **App ID**: Copied in Step 6 [here](#step-2-create-an-app){:target="_blank"}.

<ol start="5"><li>Select '<b>Yes</b>’ for <b>Enable Channel</b>.</li>
<li>Click <b>Save</b>.</li>
<img src="../images/xo-platform-sinch.png" alt="xo platform sinch configurations" title="xo platform sinch configurations" style="border: 1px solid gray; zoom:75%;"></ol>

After enabling the channel and verifying all the configurations, you can test the new channel integration by publishing your app. [Learn more](../deploy/publishing-bot.md){:target="_blank"}.

## Message Types

Conversation API uses generic message types to send the same message to multiple channels. In cases where the channel doesn’t natively support the message type, the message will be transcoded. The supported message types include:

* [Text](https://developers.sinch.com/docs/conversation/message-types/text-message/){:target="_blank"}
* [Media](https://developers.sinch.com/docs/conversation/message-types/media-message/){:target="_blank"}
* [Choice](https://developers.sinch.com/docs/conversation/message-types/choice-message/){:target="_blank"}
* [Card](https://developers.sinch.com/docs/conversation/message-types/card-message/){:target="_blank"}
* [Carousel](https://developers.sinch.com/docs/conversation/message-types/carousel-message/){:target="_blank"}
* [Location](https://developers.sinch.com/docs/conversation/message-types/location-message/){:target="_blank"}
* [List](https://developers.sinch.com/docs/conversation/message-types/list-message/){:target="_blank"}


## Message Templates

Sinch message templates are predefined, structured formats for sending recurring or standardized messages across channels like WhatsApp, SMS, and other supported platforms.

These templates ensure compliance with the channel’s messaging policies, especially for platforms like WhatsApp that require pre-approved templates for certain messages, such as notifications or service updates. Message templates can be used during AI Agent conversations to structure the messages. The default template types include:

* [Text](https://developers.sinch.com/docs/conversation/channel-support/whatsapp/template-support/#text-template){:target="_blank"}
* [Media (Document, Video, and Image)](https://developers.sinch.com/docs/conversation/channel-support/whatsapp/template-support/#media-template){:target="_blank"}
* [Location](https://developers.sinch.com/docs/conversation/channel-support/whatsapp/template-support/#location-template){:target="_blank"}
* [Interactive (Quick Reply and Call-to-action)](https://developers.sinch.com/docs/conversation/channel-support/whatsapp/template-support/#interactive-template){:target="_blank"}
* [Authentication](https://developers.sinch.com/docs/conversation/channel-support/whatsapp/template-support/#authentication-template){:target="_blank"}
* [Carousel](https://developers.sinch.com/docs/conversation/channel-support/whatsapp/template-support/#carousel-template){:target="_blank"}

For additional assistance with using Message Templates and Types for your Sinch channel on the Platform, please [contact](https://kore.ai/support/){:target="_blank"} our developer support team.

To learn more about working with messaging channels within the UXO Platform, please see [Channel Enablement.](adding-channels-to-your-bot.md){:target="_blank"}
