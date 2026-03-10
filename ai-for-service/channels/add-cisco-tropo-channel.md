--8<-- "includes/digital-channels-back-link.md"

# Adding the Cisco Tropo Channel


!!! note "Important Note"

      Tropo has been discontinued and is now part of Webex. You can use this integration only if you already have a Tropo account that was active prior to discontinuation.  Proceed with the channel setup only if you have a live Tropo account. You can click [here](https://www.cisco.com/c/en/us/services/acquisitions/tropo.html) to check for updates related to the Tropo service.


Adding the Cisco Tropo channel to your Kore.ai assistant is a three-step process to allow end-users to interact using their _Tropo_ accounts. To complete this procedure, you must already have a _Tropo_ account and be a member of a _Tropo_ team.


To get started, go to the XO Platform and select theAI Agent that you want to add the Cisco Tropo channel to, then follow the steps below. .


## Step 1: Configure your Tropo App

1. Log in and navigate to **My Apps.** 
2. Click on **Create New App.**  
<img src="../images/tropo-img1.png" alt="Create new app" title="Create new app" style="border: 1px solid gray; zoom:60%;">

3. Provide all the required information. Use the **Callback URL** available in the Configurations tab of the channel configuration page within the XO Platform, and provide it for defining the **Type of Application**.  


    !!! Note

        The Callback URL now includes the **_streamid_** in the API request to identify the AI Agent being accessed. When an incoming request is qualified with this identifier, it helps with traceability, troubleshooting, and remediation at the network level during anomalies like malicious calls or unusual app activity.

4. Click on **Create App** to complete the app creation. You will be redirected to the _Details_ page of your app.  
<img src="../images/tropo-img2.png" alt="App details" title="App details" style="border: 1px solid gray; zoom:60%;">

5. Make note of the _Application Name, Application Type_ and _Phone Number_ associated with your app, because you will need to provide them in the XO Platform, when configuring the channel.
6. Once the phone number is associated with the application, it can call the app to test using SIP client. Navigate to the **API Keys**  section, make note of the **_messaging_ API Key** so you can provide it within the XO Platform.  
<img src="../images/tropo-img3.png" alt="API Keys" title="API Keys" style="border: 1px solid gray; zoom:60%;">


## Step 2: Configure the Tropo Channel within the XO Platform

Next, navigate to the Configurations tab to review and complete the channel setup.

1. Select the assistant that you want to configure the Tropo channel for. 
2. Go to **Channels & Flows** > **Channels** > **Digital** > **All** and select **Cisco Tropo**. The channel setup window opens. 
3. Click **Next** or select the **Configurations** tab. 
4. Provide the app details you configured within Tropo: the **Application Name, Application Type** and **Phone Number**. 
5. Enter the **API Key** retrieved from within Tropo.
6. Choose whether you want to **send a VCF contact card** upon the installation of your AI Agent on this channel.
7. Select **Yes** and click **Save** to enable the channel.  
<img src="../images/tropo-img4.png" alt="Enable channel" title="Enable channel" style="border: 1px solid gray; zoom:60%;">

After the channel is enabled and all configurations are verified, you can optionally publish the assistant to make it available for end-users, with the new channel. Learn more about [Publishing your App](../deploy/publishing-bot.md).

To learn more about working with Channels within the Kore.ai XO Platform, please see [Channel Enablement.](../channels/adding-channels-to-your-bot.md)