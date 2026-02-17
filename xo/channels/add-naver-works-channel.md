--8<-- "includes/digital-channels-back-link.md"

# Adding the Naver Works Channel

**Naver Works** is the business messaging channel for Naver Corporation, a prominent internet services company in South Korea. The channel can be used by anyone with a screen similar to Naver/LINE service. It allows communication with users on the **_LINE_** service and the Naver Works users from other companies.

The steps to configure Naver Works are summarized below:

* [Create an AI Agent on the Naver Works Developer Portal](#step-1-create-an-ai-agent-on-naver-works).
* [Add a Client Application on the portal](#step-2-add-a-client-app).
* [Authorize the AI Agent](#step-3-authorize-the-ai-agent).
* [Add the AI Agent](#step-4-add-the-ai-agent-on-the-line-works-admin-console) on the [Line Works Admin Console](https://account.line.biz/login?redirectUri=https%3A%2F%2Fdevelopers.line.biz%2Fconsole%2F).
* [Enable the channel on the Kore.ai XO Platform](#step-5-enable-the-channel).


### Step 1: Create an AI Agent on Naver Works

To set up Naver Works as a channel, you must create an AI Agent on Line works and enable a callback for the XO Platform to exchange messages. To create an AI Agent, follow the steps below:


1. Log in to [Line Works Developer Console](https://developers.worksmobile.com/) and click the **Bot** left menu item.
2. Click the **Register** button.  <img src="../images/naverworks.png" alt="naverworks integration" title="naverworks integration" style="border: 1px solid gray; zoom:70%;">

3. Enter all the mandatory fields.
4. Select **API 2.0** for **API Interface**.  <img src="../images/naverworks1.png" alt="naverworks API" title="naverworks API" style="border: 1px solid gray; zoom:70%;">

5. Click **Save**.

    !!! note

        Please add the registered AI Agent in the **Admin** section to conduct thorough testing. After adding the AI Agent, switch to Public to show all members.

The new AI Agent is listed on the **Bot** page.

<img src="../images/naverworks2.png" alt="naverworks API" title="naverworks bot page" style="border: 1px solid gray; zoom:70%;">



### Step 2: Add a Client App

The next step is to add a client application to integrate with the Kore.ai XO Platform using the app’s credentials. To add a client app, follow the steps below:

1. Navigate to **API 2.0** on the left menu of the **Line Works Developer Console**.
2. Click the **Add Client App** tab.  
<img src="../images/naverworks3.png" alt="naverworks developer console" title="naverworks developer console" style="border: 1px solid gray; zoom:70%;">


3. Add the App name and click **Confirm**.  
<img src="../images/naverworks4.png" alt="naverworks confirm" title="naverworks confirm" style="border: 1px solid gray; zoom:70%;">


4. On the **Manage client apps** page, copy the **_Client ID_** and **_Client Secret_** values displayed for the client app.  <img src="../images/naverworks5.png" alt="naverworks client secret" title="naverworks client secret" style="border: 1px solid gray; zoom:70%;">


5. On the Kore.ai XO Platform, navigate to **Channels & Flows** > **Channels** > **Digital** > **All** > **Naver Works**. 


6. Click the **Configurations** tab.

7. Paste these values for the **_Client ID_** and **_Client Secret_** fields.
    <img src="../images/naverworks7.png" alt="naverworks configuration" title="naverworks configuration" style="border: 1px solid gray; zoom:70%;">

    !!! note

        Please ensure to copy and paste the **_Bot ID_** from the **Line Works Developer Console** > **Bot** page to the Kore.ai XO Platform **Configurations** section of the **Naver Works** Channel.
        <img src="../images/naverworks8.png" alt="naverworks configuration" title="naverworks configuration" style="border: 1px solid gray; zoom:70%;">

8. Click the **Copy** button for the **_Redirect URL_** field.  <img src="../images/naverworks9.png" alt="enable naverworks configuration" title="enable naverworks configuration" style="border: 1px solid gray; zoom:70%;">

9. Paste the value on the **Manage Client Apps** page of the Line Works Developer Console, and click **Add**.
<img src="../images/naverworks10.png" alt="manage naverworks client" title="manage naverworks client" style="border: 1px solid gray; zoom:70%;">

10. Click **Manage** for the **OAuth Scopes** field.
11. Select the Bot API **read to and write** scope to access the app through the API on the **Select API Scope** window, and click **Save**.
<img src="../images/naverworks11.png" alt="naverworks OAuth scopes" title="naverworks OAuth scopes" style="border: 1px solid gray; zoom:70%;">

12. Click **Save** on the **Manage Client Apps** page.


### Step 3: Authorize the AI Agent

After adding the client app, the next step is to authorize the AI Agent to allow the integration with your Naver Works bot. To authorize, follow the steps below:


1. In the **Configurations** section for Naver Works on the Kore.ai XO Platform, click the **Authorize** button.  <img src="../images/naverworks12.png" alt="authorize naverworks" title="authorize naverworks" style="border: 1px solid gray; zoom:70%;">

2. The system redirects to the **Line Works Developer Console** to complete the AI Agent authorization.


### Step 4: Add the AI Agent on the Line Works Admin Console

To add the AI Agent to the Line Works Admin Console, follow the steps below:


1. Navigate to the [Line Works Admin Console](https://admin.worksmobile.com/).
2. Click **Service** on the left menu, and click the **Bot** option.
<img src="../images/naverworks13.png" alt="naverworks service" title="naverworks service" style="border: 1px solid gray; zoom:70%;">

3. In the **Add Bot** window, click the **Add Bot** button, select the required Bot from the list, and click **Add**.  <img src="../images/naverworks14.png" alt="add naverworks bot" title="add naverworks bot" style="border: 1px solid gray; zoom:70%;">


4. Set **_Public_** as the Bot visibility to make it searchable for all the users in the Naver Works Messenger with the steps below:

5. Click the required AI Agent on the **Bot** page.

6.  In the **Bot Info** window, click **Edit**.  
<img src="../images/naverworks15.png" alt="naverworks bot info" title="naverworks bot info" style="border: 1px solid gray; zoom:70%;">

7.  Select **_All_** for **Permission** and enable the **Visibility Setting** option.
<img src="../images/naverworks16.png" alt="naverworks permissions" title="naverworks permissions" style="border: 1px solid gray; zoom:70%;">

8. Click **Save**.


### Step 5: Enable the Channel

To complete the integration, you must enable the channel on the Kore.ai XO Platform. To enable Naver Works, follow the steps below:

1. In the **Configurations** section of the **Naver Works** channel, select **_YES_** for **Enable Channel**.
2. Click **Save**.  
<img src="../images/naverworks17.png" alt="enable naverworks channel" title="enable naverworks channel" style="border: 1px solid gray; zoom:70%;">
