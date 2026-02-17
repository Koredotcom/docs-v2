# Configuring the Drift Agent

Drift is a conversation cloud platform. It helps marketing and sales teams to connect with customers easily through the conversation chat module. Kore.ai XO Platform’s Drift Agent integration allows you to seamlessly hand off the AI Agent conversations to your live agents on Drift.

Use the configuration steps below as general guidelines to enable the Drift Agent integration. You may notice minor differences based on the version of the Drift you are using.


## Overview

Kore.ai’s AI Agent serves as the central point of interaction for the users. The AI Agent facilitates communication and interaction between the user and the Drift agent using the chat module. In addition to its regular capabilities, the AI Agent acts as a proxy or intermediary between the users and the Drift agents to hand over conversations seamlessly. The AI Agent also allows you to integrate with the Drift platform.


## Configuration

To configure the Drift agent, follow the instructions in the sections below.


### Step1: Create a Drift App

Create an external integration in Drift to receive messages.

1. Log in to [https://dev.drift.com/apps](https://dev.drift.com/apps){:target="_blank"} with your drift credentials.
2. Go to the App Store and click Create New App. To create an app, follow the instructions at [https://devdocs.drift.com/docs/quick-start](https://devdocs.drift.com/docs/quick-start){:target="_blank"}.

    <img src="../images/configuring-the-drift-agent-img1.png" alt="Drift Developer Platform" title="Drift Developer Platform" style="border: 1px solid gray;">

3. Once you have created the App, go to the **Settings > OAuth & Scopes** page.
4. Add the redirect URL. This URL is found on the **Configurations** tab of Kore.ai’s Drift Agent.
5. Paste the URL and click **Add**.

    <img src="../images/configuring-the-drift-agent-img2.png" alt="Add redirect URL" title="Add redirect URL" style="border: 1px solid gray;>

6. Select the WebHooks tab and add the Request URL, which is Kore.ai’s Drift Agent Webhook URL on the Configurations tab. Provide access to the following scopes for the Webhook as shown:
    1. new_message
    2. new_conversation
    3. conversation_status_updated
    4. conversation_inactive
    5. conversation_push
    6. chat_to_call for webhook

    <img src="../images/configuring-the-drift-agent-img3.png" alt="Request URL:Kore.ai’s Drift Agent Webhook URL" title="Request URL:Kore.ai’s Drift Agent Webhook URL" style="border: 1px solid gray;">

7. Click **Create App**.


### Step 2: Retrieve the Access Token

1. Once you have created the App, click the **Installing to Drift** link under the **Activate Your App** menu and copy the **Install App to Drift** to generate a non-expiring access token.

    <img src="../images/configuring-the-drift-agent-img4.png" alt="Generating access token" title="Generating access token" style="border: 1px solid gray;">

    !!! Note
    
        This token is used to access your Drift data via API.

2. Copy the Access Token and keep it for future use.


### Step 3: Retrieve the Verification Token

To set up the retrieve the verification token, follow these steps:

1. From the main menu on the left, navigate to **Settings > App Credentials**.
2. Copy the Client ID, Secret ID, and Verification Token.

    <img src="../images/configuring-the-drift-agent-img5.png" alt="App Creds - Copy Client ID, Secret ID, and Verification Token" title="App Creds - Copy Client ID, Secret ID, and Verification Token" style="border: 1px solid gray;">

3. Copy and keep them for future use.


### Step 4: Enable the Drift Agent

1. Log in to the Kore.ai XO Platform [https://bots.kore.ai/botbuilder](https://bots.kore.ai/botbuilder){:target="_blank"}.
2. Select an App for which you want to configure the Drift agent.
3. Navigate to **App Settings > Integration > Agent Transfer** and click the **Drift**.
 

4. Click the Configurations tab and enter the following credentials for the Drift Agent:

    1. **Access Token**: The access token ID for the Drift, which was copied in step 2.
    2. **Verification Token**: The token ID for the Drift, which was copied in step 3.

        <img src="../images/configuring-the-drift-agent-img7.png" alt="Enter Drift agent credentials" title="Enter Drift agent credentials" style="border: 1px solid gray;">

5. If you want to make Drift the default agent, enable the **Default Agent System for all app channels** option.

    !!! Note
    
        This option is available only when multiple agents are configured for your AI Agent.

6. You can customize the channel mapping by clicking the **Manage** link, as shown below:

    <img src="../images/configuring-the-drift-agent-img8.png" alt="Customizing the channel" title="Customizing the channel" style="border: 1px solid gray;">

7. Click Manage to map the channels you want to use Drift agent for handing over the conversations. To learn more about channel enablement, see [Adding channels to your app](../../../channels/adding-channels-to-your-bot.md){:target="_blank"}.

    <img src="../images/configuring-the-drift-agent-img9.png" alt="Mapping channels to Drift agent" title="MApping channels to Drift agent" style="border: 1px solid gray;">

8. After mapping channels, click **Done**.
9. Click **Save** to enable the Drift agent.
10. Publish the App. For more information, see [Publishing App](../../../deploy/publishing-bot.md){:target="_blank"}.


## Execution

This section helps you verify how the conversations from the Kore.ai XO Platform are being handed over to the Drift agent after enabling it.

To verify the data exchange between Kore.ai’s AI Agent and Drift agent, follow these steps:

1. Open a App for which you have enabled the Drift agent.
2. Create a new **Agent Transfer Node** task. For example, create a **Talk to Live Agent** task with the **LiveChats** node and configure it to use the Drift agent. For more information, see [Agent Transfer Node](../../../automation/use-cases/dialogs/node-types/working-with-the-agent-transfer-node.md){:target="_blank"}.

    <img src="../images/configuring-the-drift-agent-img10.png" alt="New Agent Transfer Node task" title="New Agent Transfer Node task" style="border: 1px solid gray;">

3. Add an email entity node and bot action to capture the email address of an agent.
4. Enter the following script in the Bot Action script:  
    `agentUtils.setMetaInfo("email", context.entities.Entity0001);`

    <img src="../images/configuring-the-drift-agent-img11.png" alt="Bot Action script" title="Bot Action script" style="border: 1px solid gray;">

5. Click the **Talk to Bot** icon to launch the App and enter **Help**.
6. Once you invoke the agent transfer dialog, the Drift Developer Hub receives a notification alert.
7. When a user initiates the chat from the App, it transfers the conversation to the Drift agent and sends a message to the user. Agent receives a notification about this on Drift.
8. Now, the connection between the Drift agent and the user has been established, and the conversation continues.

    <img src="../images/configuring-the-drift-agent-img12.png" alt="Connection established between the Drift agent and the user" title="Connection established between the Drift agent and the user" style="border: 1px solid gray;">