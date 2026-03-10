--8<-- "includes/digital-channels-back-link.md"

# Adding the Skype Channel

!!! important

    The Skype channel is now deprecated.

To add the Skype channel to your AI Agent, you need a developer _Microsoft Bot Framework_ account to configure the connection between Skype and the Platform. Adding the Skype channel is a three-step process to allow end-users to interact with your AI Agent. To add the Skype channel to your AI Agent, follow the below steps:



1. **Register the Bot** – In your _Microsoft Bot Framework_ developer account, you must register the  by adding all the app details and creating the **App ID** and **Password**. To register the bot, you must have created and registered for a free account in the [Microsoft Bot Framework](https://dev.botframework.com/) developer portal.
2. **Enable Channel** – After registering the app, you must enable the channel.
3. **Publish Channel** – After the channel is enabled and all configurations are verified, you must publish the app to make it available for developers.


## Add Skype Channel

To complete this procedure, you must have or register for a new developer account in the [Microsoft Bot Framework](https://dev.botframework.com/) developer portal.

1. In App Builder, under the **Bots** section, click the app you want to add the Skype channel to.
2. On the **Channels** tab, click the **Expand** icon for the **Skype** section. The **Skype Channel** page is displayed.
![Skype Channel](images/Skype-Channel1.png "Skype Channel")

3. Log in to the _Microsoft Bot Framework_ portal, and then click **Register a bot**.
4. On the **Register a bot** tab, under the **Bot profile** section, enter your **Bot Name**, **Bot handle**, and **Description**.
5. In the **Configuration** section, paste the **Webhook URL** from the Bot Builder into the **Messaging endpoint** field. For example, `https://bots.kore.ai/hooks/skype/st-2724c525-484b-55ca-a844-8d7dfa6b6b23`
6. Click **Create Microsoft App ID and password** as shown in the following illustration.
![register bot](images/Skype-Channel2.png "register bot")

7. On the **Generate App ID and password** page, click **Generate an app password to continue**.
8. Save the generated **Password** and the **App ID** to use later in the **Register the Bot** tab in Bot Builder for the **Skype Channel** page.
![generated app ID](images/Skype-Channel3.png "generated app ID")

      !!! note

        The only time the full password is displayed is when it is generated and displayed in the **Generate Password** dialog. Copy and save the password to a secure location until added to the **Skype Channel** page in App Builder.

9. Click **Finish and go back to Bot Framework**. The **Register a bot** tab is displayed.
10. To save your settings, agree to **Privacy statement**, **Terms of Use,** and **Code of Conduct**.
11. Click **Register**.
12. On the **Bot created** dialog, click **OK**. The **My bots** tab is displayed.
13. Optionally, click **Test** to check the connection to your bot. The _Endpoint authorization succeeded_ message is displayed.
14. In App Builder, on the **Register the Bot** tab, paste the **App ID** and **Password** you saved from the _Microsoft Bot Framework_ developer portal into the **APP ID** and **APP PASSWORD** fields.
15. Click **Next** as shown in the following illustration.
![test connection](images/Skype-Channel3.png "test connection")


16. On the **Enable Channel** tab, review how to edit the Skype channel settings in the [Microsoft Bot Framework](https://dev.botframework.com/) developer portal if needed, and then click **Next**. The **Publish Channel** tab is displayed.
17.  In the **Enable Channel** section, click **Yes** to enable the Skype channel for Kore.ai.
18. Click **Save**.

The channel configuration settings are saved and the **Skype** **Channel** page is closed.


# Edit Skype Channel

To edit the Skype channel, follow the below steps:


1. Hover over the channel to modify, and then click the **Settings** icon displayed to show the command menu displayed in the following illustration.
![settings](images/Skype-Channel4.png "settings")
2. Select one of the following commands to modify the channel:

  * **Edit** – Click to open the **Skype Channel** page.
  * **Disable/Enable** – Click **Disable** to temporarily disable the use of the Skype channel for your app.
  * **Enable** - When the channel is disabled, click **Enable** to enable use of the Skype channel.
  * **Delete** – Click **Delete**. On the **Delete Confirmation** dialog box, click **OK** to permanently delete the app channel configuration.

!!! warning

    This operation is permanent and cannot be undone.
