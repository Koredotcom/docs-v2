--8<-- "includes/digital-channels-back-link.md"

# Adding the Hangouts Chat Channel

Adding Hangouts Chat as a channel to your Kore.ai assistant allows end-users to chat with it using Hangouts Chat. This article shows you how to set it up.


## Step 1: Enable the Google Chat API


1. Log into [Google Cloud.](https://console.developers.google.com/projectselector2/apis/dashboard?pli=1)
2. Click **Library**, in the left side menu.
<img src="../images/google_chat.png" alt="Library" title="Library" style="border: 1px solid gray; zoom:70%;">

3. Search and select the **Google Chat API**.
<img src="../images/google_chat1.png" alt="Google Chat" title="Google Chat" style="border: 1px solid gray; zoom:70%;">

4. Click **Enable**.
5. On enabling the API, you are redirected to the **Overview** page of the **Google Chat API**.
<img src="../images/google_chat2.png" alt="Google Chat API" title="Google Chat API" style="border: 1px solid gray; zoom:70%;">



## Step 2: Set Up the API in Google Cloud

To set up the Google Chat API, you need to create credentials first, then configure its details and functionality, as follows:

1. From the Credentials page, click **Create credentials** and select **Service account**.
<img src="../images/google_chat3.png" alt="create credentials" title="create credentials" style="border: 1px solid gray; zoom:70%;">

2. Provide a name for your service account, service account description, and click **Create and Continue**.
<img src="../images/google_chat4.png" alt="Library" title="Library" style="border: 1px solid gray; zoom:70%;">

3. Once the service account is created there are 2 optional steps:
    * _Grant this service account access to project_
    * _Grant users access to this service account_
4. Click on the **Done** button.
<img src="../images/google_chat5.png" alt="grant users" title="grant users" style="border: 1px solid gray; zoom:70%;">

5. Go to the **Configurations** section and provide all the required details like:
    * App name
    * Avatar URL
    * Description
    <img src="../images/google_chat6.png" alt="configurations" title="configurations" style="border: 1px solid gray; zoom:70%;">

6. Under **Functionality** choose both **Receive one-to-one messages** and **Join spaces and group conversations** options.
<img src="../images/google_chat7.png" alt="Library" title="Library" style="border: 1px solid gray; zoom:70%;">


7. Under **Connection Settings**:
    * Select the **App URL** option.
    * Go to the Kore.ai **Channels & Flows** > **Channels** > **Digital** > **All** > **Google Chat** > **Configurations** and copy the **Webhook URL**.
    * Go back to **Connections Settings in Google Cloud** and paste the Webhook URL
8. Select the appropriate option under **Permissions**.
<img src="../images/google_chat8.png" alt="permissions" title="permissions" style="border: 1px solid gray; zoom:70%;">


Next, we will be configuring the API keys that the XO Platform will use to connect to Google Chat.


## Step 3: Create API Keys

Once your service account has been created, you need to manage the keys corresponding to your API, as follows:


1. Navigate to the **Credentials** page and click on **Manage service accounts**.
<img src="../images/google_chat9.png" alt="Manage Service" title="Manage Service" style="border: 1px solid gray; zoom:70%;">

2. From the Manage service accounts page click the **Actions** button corresponding to your newly created account, then on **Manage keys**.
<img src="../images/google_chat10.png" alt="Manage Keys" title="Manage Keys" style="border: 1px solid gray; zoom:70%;">

3. From the **Manage Keys** page click on **Add Key** button, select **Create new key** from the drop down, select the JSON option, and click on **Create** button.
<img src="../images/google_chat11.png" alt="create new key" title="create new key" style="border: 1px solid gray; zoom:70%;">


A JSON file will be generated and you need to copy the _client_email_, and _private_key_ that needs to be input into the XO Platform. .


## Step 4: Configure the Hangouts Chat Channel

In the XO Platform, select the AI Agent you’re working with, then go to **Channels & Flows** > **Channels** > **Digital** > **All** > **Hangouts Chat** > **Configurations**.

1. Enter the following configuration details:
    1. **Client Email** – Copy the value of the _client_email_ field present in the credentials JSON file of your Service Account and enter it here.
    2. **Private Key** – Copy the value of the _private_key_ field present in the credentials JSON file of your Service Account and enter it here.

2. Enable **Proactive Notifications** to send  relevant updates to the users without requiring them to initiate interaction with the app first.

3. Select **Yes** and click **Save** to enable Hangouts Chat channel.
<img src="../images/google_chat12.png" alt="save channel" title="save channel" style="border: 1px solid gray; zoom:70%;">

After enabling the channel and verifying all the configurations, you can optionally publish the assistant for the new channel. Learn more about[ Publishing your App](../deploy/publishing-bot.md).

To learn more about working with Channels within the Kore.ai XO Platform, please see [Channel Enablement.](../channels/adding-channels-to-your-bot.md)
