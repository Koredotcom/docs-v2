# Configuring the Intercom Agent

Intercom is a Customer Communications Platform. It shows you who is using your product or website and makes it easy to communicate. Kore.ai XO Platform’s Intercom Agent integration allows you to seamlessly hand-off the AI Agent conversations to your live agents on Intercom. 

This post provides the configuration steps to be followed to enable the Intercom Agent integration. Use the configurations provided below as general guidelines as there could be some differences based on the version of the Intercom that you are using. 


## Overview

Kore.ai’s agent serves as the central point of interaction for the users. In addition to its regular capabilities, the AI Agent acts as a proxy or intermediary between the users and the Intercom agents to handover conversations seamlessly. The AI Agent also allows you to integrate with the Intercom platform. The AI Agent facilitates the communication and interaction between the user and the Intercom agent using the chat module.


## Configuration

To configure the Intercom agent follow the instructions in the sections below.


### Step1: Create an App

To set up Intercom to receive messages, you will first need to create an app in Intercom.

1. Log in to the [https://app.intercom.com/a/apps/_/developer-hub](https://app.intercom.com/a/apps/_/developer-hub){:target="_blank"} with your intercom credentials.
2. Go to the App Store and click the **Build your own app**.

    <img src="../images/configuring-the-intercom-agent-img1.png" alt="App store -  Build your own app" title="App store -  Build your own app" style="border: 1px solid gray;">

3. In the App Store page, click the **Your Apps** menu on the top right corner.
4. Click **New App** and enter the following details to build an app:
    1. Enter the App name.
    2. Select the Kore.ai Workspace.

    <img src="../images/configuring-the-intercom-agent-img2.png" alt="App name and workspace" title="App name and workspace" style="border: 1px solid gray;">

5. Click **Create App**.


### Step2: Retrieve Access Token

1. Once you create the App, click on authentication and copy the **AccessToken** value.

    <img src="../images/configuring-the-intercom-agent-img3.png" alt="Retrieve access token value" title="Retrieve access token value" style="border: 1px solid gray;">

    !!! Note
    
        This token will be used to access your Intercom data via API.

2. Copy the Access Token and keep it for future use.


### Step 3: Configure a Webhook

1. To set up the webhook, Log in to your Intercom account.
2. From the main menu on the left, navigate to **Configure > Webhooks**.
3. Navigate back to Intercom Developer Hub, and
    1. To add a new webhook, click on the **Add Webhook** button.
    2. In the **New Webhook** form, you can enter the details for the new webhook.
    3. Copy the webhook URL listed under **Integrations → Agent Transfer → Intercom → Configuration**.
    4. Navigate back to Intercom and paste the copied Webhook URL in the **WebHook** field.

4. Under Webhook topics, navigate to **Select a Topic** and select the following topics:
    1. conversation.admin.closed
    2. conversation.admin.replied
    3. conversation.admin.assigned
    4. conversation.admin.single.created

5. Click on **Save** to preserve these settings
6. Click **Save**.


### Step4: Enable the Intercom Agent

1. Log in to the Kore.ai XO Platform [https://bots.kore.ai/botbuilder](https://bots.kore.ai/botbuilder){:target="_blank"}
2. Select an AI Agent for which you want to configure the Intercom agent. 
3. Navigate to **App Settings** > **Integrations** > **Agent Transfer** and click the **Intercom**.

4. Click the **Configurations** tab and enter the following credentials for the Intercom Agent:
    1. **Access Token**: The access token ID for the Intercom, which was copied step 2.
    2. **Webhook URL**: The WebHook URL found in the Kore.ai’s Intercom Agent Configuration page.

5. If you want to make Intercom as the default agent, enable the **Default Agent System for all bot channels** option.

    !!! Note
    
        This option will be available only when you have multiple agents configured for your AI Agent.

6. You can also customize the channel mapping by clicking the **Manage** link as shown below:

    <img src="../images/configuring-the-intercom-agent-img5.png" alt="Customize the channel mapping" title="Customize the channel mapping" style="border: 1px solid gray;">

7. Once you click **Manage**, you can map the channels which you want to use Intercom agent to handover the conversations. To learn more about channel enablement, read the[ Adding channels to your app](../../../channels/adding-channels-to-your-bot.md){:target="_blank"} article.

    <img src="../images/configuring-the-intercom-agent-img6.png" alt="Map channels to intercom agent" title="Map channels to intercom agent" style="border: 1px solid gray;">

8. After mapping channels, click **Done**.
9. Click **Save** to enable the Intercom agent.
10. Publish the App. For more information, see [Publishing an App](../../../deploy/publishing-bot.md){:target="_blank"}.


## Execution

This section helps you verify how the conversations from the Kore.ai XO Platform are being handed over to the Intercom agent after enabling it. 

To verify the data exchange between the Kore.ai’s agent and Intercom agent, follow these steps:

1. Open an app for which you have enabled the Intercom agent.
2. Create a new Agent Transfer Node task. For example, create a PlatformAgent task with the UserChats node and configure it to use the Intercom agent. For more information, read the [Agent Transfer Node](../../../automation/use-cases/dialogs/node-types/working-with-the-agent-transfer-node.md){:target="_blank"} article.

    <img src="../images/configuring-the-intercom-agent-img7.png" alt="New Agent Transfer node task" title="New Agent Transfer node task" style="border: 1px solid gray;">

3. Click the **Talk to Bot** icon to launch the app and enter **Help**.
4. Once you invoke the agent transfer dialog, the Intercom Developer Hub receives a notification alert.
5. When a user initiates the chat from the app, it transfers the conversation to the Intercom agent and sends a message to the user. Agent receives a notification about this on the Intercom.
6. Now the connection between Intercom agent and the user has been established and the conversation continues.

    <img src="../images/configuring-the-intercom-agent-img8.png" alt="Connection established between Intercom agent and user" title="Connection established between Intercom agent and user" style="border: 1px solid gray;">