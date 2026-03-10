--8<-- "includes/digital-channels-back-link.md"

# Adding the Facebook Messenger Channel

To add the Facebook Messenger channel to your AI Agent, you need a **Facebook Developer** account. With this account, you can configure the connection between Facebook Messenger and Kore.ai. Enabling the Facebook Messenger Channel on the App Builder helps your users chat with the AI Agent using their **Facebook** accounts.

The steps to enable this channel are simple and summarized below:



1. [Create and set up a Facebook Messenger App](#step-1-create-and-set-up-a-facebook-messenger-app).
2. [Configure the Webhook or Callback URL to send and receive messages](#step-2-configure-the-webhookcallback-url).
3. [Subscribe to the app on the Facebook page using the Client ID and Client Secret](#step-3-set-up-app-id-and-secret).
4. [Submit the App for Approval.](#step-4-submit-the-app-for-approval)
5. [Enable the channel and complete the configuration on the Kore.ai XO Platform](#step-5-enable-the-channel).


## Step 1: Create and Set up a Facebook Messenger App


1. Log in to the [Facebook Developer Portal](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fregister&event_type=click&last_nav_impression_id=0pWTvRHj057BWQ868&max_percent_page_viewed=65&max_viewport_height_px=657&max_viewport_width_px=1366&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fcreate-an-app%2F&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Ddevelopment%26path2%3Dcreate-an-app&region=apac&scrolled=true&session_id=0lMcuYhMqR7uUNlDe&site=developers) and click the **My Apps** top menu option.
<img src="../images/fbm.png" alt=" Facebook app" title="Facebook app" style="border: 1px solid gray; zoom:70%;">

    !!! note

        New users should [register](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fasync%2Fregistration&event_type=click&last_nav_impression_id=0z1et1xpn4nZpYCfR&max_percent_page_viewed=30&max_viewport_height_px=657&max_viewport_width_px=1366&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fregister%2F&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Ddevelopment%26path2%3Dregister&region=apac&scrolled=false&session_id=1SbEaGTlt1aWgLNff&site=developers) on the **Facebook Developer Portal**. [Learn more](https://developers.facebook.com/docs/development/register).

1. In the **My Apps** section, click **Create App**.
<img src="../images/fbm1.png" alt=" Facebook My apps" title="Facebook My apps" style="border: 1px solid gray; zoom:70%;">


2. In the **Select an App Type** window, select the **Business** tab, and click **Next**.
<img src="../images/fbm2.png" alt=" Facebook Business" title="Facebook Business" style="border: 1px solid gray; zoom:70%;">


3. In the **Details** section, enter the required details, and click **Create App**.
<img src="../images/fbm3.png" alt=" Facebook create app" title="Facebook create app" style="border: 1px solid gray; zoom:70%;">


4. Provide your account password in the **Please re-enter your password** window when prompted, and click **Submit**.
5. Your App is now created and you are redirected to the **Add products to your app** page.
6. Click **Set Up** on the **Messenger** tab.
<img src="../images/fbm4.png" alt=" Facebook add products" title="Facebook add products" style="border: 1px solid gray; zoom:70%;">


7. You now need to associate a page with the app. If you do not have a page, click **Create New Page** in the **Access Tokens** panel.
<img src="../images/fbm5.png" alt=" Facebook access token" title="Facebook access token" style="border: 1px solid gray; zoom:70%;">


8. Click **Add or Remove Pages** and follow the instructions to add your page.
<img src="../images/fbm6.png" alt=" Facebook remove pages" title="Facebook remove pages" style="border: 1px solid gray; zoom:70%;">


9. Click **Generate Token**.
<img src="../images/fbm7.png" alt=" Facebook generate token" title="Facebook generate token" style="border: 1px solid gray; zoom:70%;">


10. In the **Token Generated** window, select **I understand** and click **Copy** to copy the page Access Token.  <img src="../images/fbm8.png" alt=" Facebook generated token" title="Facebook generated token" style="border: 1px solid gray; zoom:70%;">


11. Click **Done**.
12. Copy the **Page ID** of the Facebook page.  <img src="../images/fbm9.png" alt=" Facebook configuration" title="Facebook configuration" style="border: 1px solid gray; zoom:70%;">



13. On the Kore.ai XO Platform, navigate to **Channels & Flows** > **Channels** > **Digital** > **All** > **Facebook Messenger**.

14. Click the **Configurations** tab, and paste the **Page Access Token** and **Page ID** values you’ve copied.  <img src="../images/fbm11.png" alt=" Facebook page access" title="Facebook page access" style="border: 1px solid gray; zoom:70%;">


15. Navigate to **Settings** > **Basic** and configure the **Privacy Policy URL** and **Terms of Service URL** fields for the app.
<img src="../images/fbm12.png" alt=" Facebook Privacy" title="Facebook Privacy" style="border: 1px solid gray; zoom:70%;">

16. Click **Save Changes**.
17. Enable the deployment of the app by changing **App Mode: Development** to **Live**.
<img src="../images/fbm13.png" alt=" Facebook Save Changes" title="Facebook Save Changes" style="border: 1px solid gray; zoom:70%;">




## Step 2: Configure the Webhook/Callback URL

To set up the webhook URL, follow the steps below:

1. Copy the **Webhook URL** and **Verify Token** from the Kore.ai XO Platform’s channel configuration panel.
<img src="../images/fbm14.png" alt=" Facebook Webhook URL" title="Facebook Webhook URL" style="border: 1px solid gray; zoom:70%;">


2. On the **Messenger Settings** page of the Facebook Developer Portal, click **Add Callback URL**.
<img src="../images/fbm15.png" alt="Copy Facebook Webhook URL" title="Copy Facebook Webhook URL" style="border: 1px solid gray; zoom:70%;">


3. Paste the copied values in the **Edit Callback URL** window, and click **Verify and Save**.
<img src="../images/fbm16.png" alt="Edit Facebook Callback URL" title="Edit Facebook Callback URL" style="border: 1px solid gray; zoom:70%;">

4. The _webhook URL_ is successfully set up.
5. Click **Add Subscriptions**.
<img src="../images/fbm17.png" alt="Facebook add subscriptions" title="Facebook add subscriptions" style="border: 1px solid gray; zoom:70%;">



6. Select **_messages_**, **_messaging_postbacks_**, **_messaging_optins_**, **_message_deliveries_**, and **_message_reads_** in the **Edit Page Subscriptions** window to select the webhook services.
<img src="../images/fbm18.png" alt="Facebook details" title="Facebook details" style="border: 1px solid gray; zoom:70%;">



7. Click **Save**.


## Step 3: Set up App ID and Secret

To configure the **Client ID** and **Client Secret** for the app, follow the steps below:



1. On the **Facebook Messenger Developer Portal**, navigate to **Settings** > **Basic**.
2. Copy the **_App ID_** and **_App Secret_** values.
<img src="../images/fbm19.png" alt="Facebook Messenger Developer" title="Facebook Messenger Developer" style="border: 1px solid gray; zoom:70%;">


3. On the Kore.ai App Builder, navigate to the **Configurations** section of the Facebook Messenger channel and paste these values in their respective fields.
<img src="../images/fbm20.png" alt="Facebook messenger channel" title="Facebook messenger channel" style="border: 1px solid gray; zoom:70%;">



## Step 4: Submit the App for Approval

Configure any other settings that Facebook might require, then submit the app for approval. [Learn more](https://developers.facebook.com/docs/messenger-platform/app-review#submission).

Once approved, you can enable the **Facebook Messenger** channel for your assistant with the steps mentioned below.


## Step 5: Enable the Channel

On the Kore.ai XO Platform, enable the **Facebook Messenger** channel to complete the integration. To enable follow the steps below:


1. Navigate to **Channels & Flows** > **Channels** > **Digital** > **All** > **Facebook Messenger**.
2. Click the **Configurations** tab, and select **_YES_** for **Enable Channel**.  <img src="../images/fbm21.png" alt="Enable Facebook channel" title="Enable Facebook channel" style="border: 1px solid gray; zoom:70%;">

3. Click **Save**.

After enabling the channel and verifying all the configurations, you can optionally publish the assistant for the new channel. Learn more about[ Publishing your App](../deploy/publishing-bot.md).

To learn more about working with Channels within the Kore.ai XO Platform, please see [Channel Enablement.](../channels/adding-channels-to-your-bot.md)
