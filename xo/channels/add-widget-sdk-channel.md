--8<-- "includes/digital-channels-back-link.md"

# Adding the Widget SDK Channel

The Widgets SDK channel allows you to host widgets for presenting information from your assistant and enabling interaction with end-users.

To add the Widget SDK Channel, you must first register, or create an app in the XO Platform. When you create an app, you are provisioning credentials for your application to communicate securely with Kore.ai servers. After you create an app, you can use that app registration in the configuration to add the Widget SDK Channel.

To add the Widget SDK channel

1. Open the assistant to which you want to add the Widget SDK channel.
2. Go to **Channels & Flows** > **Channels** > **Digital** > **All** > **Widget SDK**.
3. Navigate to the **Configurations** tab.
4. In the **Select App** drop-down list, select your existing app or click **Create App** to create a new one.
<img src="../images/sdk.png" alt="widget SDK channel configuration" title="widget sdk configuration" style="border: 1px solid gray; zoom:70%;">

5. In the **Name** field, enter the name for the app registration used in the XO Platform, for example, My App Registration.
6. Select one of these scopes for the app:
    * **Allow anonymous users to chat with the assistant**: enables anonymous users to interact with the assistant.
    * **Auto** register **new users on Kore.ai XO Platform**: Select to control the auto-user registration in Kore.ai if the user assertion is unknown.
7. In the JWT Signing **Algorithms Used For Client App Authentication** drop-down list, select one of the following security algorithms:
    * **RS256/RS512**: Select to enable the **Public Key**. _The Private key, used for encryption, is provided by the user, and the Public key, used for decryption, is provided by the Platform_. Both the keys have to be used for generating the token. The Public Key is used by the XO Platform to authenticate the client application.
    * **HS256/HS512**: Select to generate a **Secret Key** and a **Client ID**. The **Client ID** is required for app initialization, and the **Secret Key** is used by the XO Platform to authenticate the client application.
8. Optionally, In the **Push Notifications** section, click **Enable** and then specify a URL to send the notifications to.
9. Click **Create**. The app registration details appear.
<img src="../images/sdk1.png" alt="enable widget SDK channel" title="enable widget SDK channel" style="border: 1px solid gray; zoom:70%;">

10. To copy the app registration details to the clipboard for your application, you can click **Copy** for **Bot Name**, **Bot ID**, and **Client ID**. For **Client Secret**, click **View**, and then click **Copy**.
11. In the **Enable Channel** section, select **Yes** to enable the channel immediately after saving.
12. Click **Save** to save the settings and close the **Widget SDK Channel** page.

The _Channel Information updated successfully_ message is displayed on the top-right corner of the page.

Once enabled [see here](../sdk/tutorials/widget-sdk.md) for steps to integrate your AI Agent and your web application.

After enabling the channel and verifying all the configurations, you can optionally publish the assistant for the new channel. Learn more about[ Publishing your App](../deploy/publishing-bot.md).

To learn more about working with Channels within the Kore.ai XO Platform, please see [Channel Enablement.](../channels/adding-channels-to-your-bot.md)
