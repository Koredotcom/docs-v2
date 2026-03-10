--8<-- "includes/digital-channels-back-link.md"

# Adding the Skype for Business Channel

To set up Skype for Business as a channel, you must register a Bot Channel service in Azure and enable a webhook for the platform to receive messages. To enable Skype for Business, follow the below steps:



1. **Register a Bot Channel** – Log in to the Azure portal and register a app channel.
2. **Create Microsoft ID and Password** – You must add all the app details and create the Microsoft ID and Password.
3. **Enable Skype for Business** – After registering the app, enable the channel.
4. **Publish Channel** – After the channel is enabled and all configurations are verified, publish the app to make it available for developers.

To add Skype for Business channel, follow the below steps:



1. In the **Bots** section of the App Builder, click the app you want to add the **Skype for Business** channel to.
2. On the **Channels** tab, click the **Skype for Business** icon. The **Skype for Business Channel** page is displayed.
3. In a new browser tab, log in to the Azure portal to register a app channel.
4. On the left pane, click **+ Create a Resource**. On the search window, search and select **Bot Channels Registration**.
5. On the new **Bot Channel Service** creation page, click **Create** and proceed to the next screen to enter the details.
![Bot Channel Service](images/skype.png "Bot Channel Service")

6. Enter all the required details to register the app channel. Copy the **Webhook URL** from the **Configurations** tab of the Skype for Business channel page on the builder and provide it in the **Messaging Endpoint** field.
![skype channel](images/skype1.png "skype channel")

7. Click **Create** to complete the registration. After successful creation, you are redirected to the Dashboard of your Azure account.
8. To create **Microsoft App ID** and **password** from your Azure Dashboard, select the resource that you have created in the previous steps. You are redirected to the details page of the new resource that you have created.
![Microsoft App ID](images/skype2.png "Microsoft App ID")

9. On the left pane, click **Settings** > **Manage** next to the **Microsoft App ID** field. You are redirected to a new browser tab to manage your app credentials.
![manage ID](images/skype3.png "manage ID")

10. Click **Generate New Password** to create a new password for your app. Make a note of the password displayed on the window and enter it in the **Configurations** tab of this window.
11. Click **Ok** to go back to the previous screen. Make a note of the **App ID** and enter it in the **Configuration** tab of the channel page.
12. Click **Save** at the end of the page to save your changes.
![save configuration](images/skype5.png "save configuration")

13. To enable Skype for Business, go to your Azure portal and click **Channels** on the left pane of your app. Select **Skype for Business**.
14. You are redirected to the channel information page and the channel is enabled. Proceed to the next step to add this app to your Skype for Business Tenant account.
![skype business](images/skype6.png "skype business")

15. The Tenant Administrator of your Skype for Business Online environment has to add this app to your enterprise Skype for Business account. Refer to [instructions](https://skypeappregistration.azurewebsites.net/bot/370430e7-4a7f-4765-8ace-4dd8139b1866) from Microsoft Bot Framework to add this app to your enterprise Skype for Business account.
16. After these instructions are executed, end-users of your enterprise can find this app in their Skype for Business contacts list and start chatting with the app.