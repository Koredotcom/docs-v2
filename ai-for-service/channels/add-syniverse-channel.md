--8<-- "includes/digital-channels-back-link.md"

# Add the Syniverse Channel

To set up Syniverse as a channel, the developer needs to associate the AI Agent with a Syniverse app, set up a subscription, and enable the delivery events for this app. This document explains the steps to add the Syniverse as a channel to your AI Agent.


## Create an App

To create the Syniverse app, follow the steps below:

1. Log in to the [Syniverse developer portal](https://developer.syniverse.com/) and navigate to the **Applications** section.
2. Click **Create New** if you want to create your first app. If you want to access existing apps, click **Your App**.
<img src="../images/Syniverse1.png" alt="Syniverse channel" title="Syniverse channel" style="border: 1px solid gray; zoom:70%;">

3. In the **Create App** screen, enter the app name, description, select account, and click **Save**.
<img src="../images/Syniverse2.png" alt="Syniverse app" title="Syniverse app" style="border: 1px solid gray; zoom:70%;">


## Capture Auth Keys

Once you create an app, to capture Auth keys, follow the steps below:

1. Navigate to the created app in the **Applications** section and open the app.
2. Use the **Auth Keys** (see the following screenshot) to complete the configuration in the Kore.ai platform and send the SMS via AI Agent.
<img src="../images/Syniverse3.png" alt="Syniverse Auth Keys" title="Syniverse Auth Keys" style="border: 1px solid gray; zoom:70%;">


## Delivery Configurations

The next step is to configure how messages will be delivered via the Webhook URL configured on the XO Platform for Syniverse. To set up the delivery configurations, follow the steps below:

1. Navigate to the **Event Manager** on the top menu bar and select **Delivery Configurations**.
<img src="../images/Syniverse4.png" alt="Syniverse Delivery Configuration" title="Syniverse Delivery Configuration" style="border: 1px solid gray; zoom:70%;">


2.  If you want to use an existing delivery configuration to set up the app’s webhook URL, select one of the configurations from the displayed table (see the following screenshot), else, click **New Delivery Configuration**.
<img src="../images/Syniverse5.png" alt="Syniverse webhook URL" title="Syniverse webhook URL" style="border: 1px solid gray; zoom:70%;">

3. In the **Create Delivery Configuration** pop-up, enter the following values:
    * Provide a **Delivery Configuration Name**.
    * **Address**: Copy and paste the webhook URL value from the XO Platform’s Syniverse Channel **Configuration** section.
    * Set **Is Active:** to _Yes_.
4. Click **Create**.


## Subscriptions

To set up subscriptions, follow the steps below:


1. Navigate to the **Event Manager** on the top menu bar and select **Subscriptions**.
<img src="../images/Syniverse6.png" alt="Syniverse subscriptions" title="Syniverse subscriptions" style="border: 1px solid gray; zoom:70%;">  

2.  If there are existing subscriptions, select one from the table to set up the event subscription (see the following screenshot), else, click **New Subscription**.
<img src="../images/Syniverse7.png" alt="Syniverse channel" title="Syniverse channel" style="border: 1px solid gray; zoom:70%;">

3. In the **New Topic Subscription** pop-up, enter the following values:
    * **Topic**: Select **SCG Message** from the drop-down.
    * **Event Type**: Select **mo_message_received** from the drop-down.
    * **Delivery Configuration:** Select delivery configuration configured in the [Delivery Configurations](#delivery-configurations) section.
    * **Start Date**: Select a date from when this subscription has to be active.
    * **End Date:** Select an end date. Leave it blank if you want this event subscription to work for a lifetime.
 
4. Click **Create**.


## Capture Sender ID

To ensure that messages flow between the two systems, you should obtain the **Sender ID** from Syniverse, and provide it on the XO Platform. To obtain the **_Sender ID_**, follow the steps below:


1. Navigate to the **Voice and Messaging Console** on the top menu bar of your Syniverse Developer Portal account, and double click **Sender ID** from the **Messaging Accounts** in the left Navigation Menu. Click **+Purchase or Migrate Sender Address** button to purchase a new Sender ID.
2. Scroll down to **Alias**, and copy the value.
<img src="../images/Syniverse8.png" alt="Syniverse Messaging Accounts" title="Syniverse Messaging Accounts" style="border: 1px solid gray; zoom:70%;">

3. Paste this value in the **Syniverse** **Configurations** panel of the Kore.ai platform.
 <img src="../images/Syniverse8.png" alt="enable Syniverse channel" title="enable Syniverse channel" style="border: 1px solid gray; zoom:70%;">

4. Select **_Yes_** for **Enable Channel**.
5. Click **Save**.


## Configuring the Request and Response



* Internally, the XO Platform integration extracts and uses the <code><em>sender_id_alias</em></code> value (from Syniverse) in the API call to send the messages.
* To identify the source channel, the system trims the <code><em>sender_id_alias</em></code> from the format <code>Channel type_Channel ID (if present)_sending number</code>, and considers <strong>Channel Type</strong> as the source.
* To identify whether the request came through <em>Channel Id</em> or <em>Sender Id</em>, and also respond to Syniverse accordingly, the following is considered:
    * If the <code><em>sender_id_alias</em></code> has the format <code>Channel type_Channel ID_sending number</code>, then the request is from the Channel. This information is used to reply to the Channel. In this case, the <code>sender_id_id</code> field which contains the value of sender id is not used to respond.
    * If the <code><em>sender_id_alias</em></code> has the format <code>Channel type_sending number</code>, then the request is from the Sender Id. This information is used to reply to the Sender Id. In this case, the <code>sender_id_id</code> field is used to respond.
