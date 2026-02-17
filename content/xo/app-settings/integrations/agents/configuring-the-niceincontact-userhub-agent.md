# Configuring the NiceInContact (User Hub) Agent

NiceInContact CXone virtual agent (user) hub simplifies the deployment of AI Agent and human agents for customer self-service. Kore.ai XO Platform’s NiceInContact Agent integration allows you to seamlessly hand off the AI Agent conversations to your live agents on Nice Chat.

Use the configuration steps below as general guidelines to enable the NiceInContact User Hub integration. You may notice minor differences based on the version of the NiceInContact User Hub you are using.


## Overview

Kore.ai’s agent serves as the central point of interaction for the users. The AI Agent facilitates communication and interaction between the user and the NiceInContact User Hub. In addition to its regular capabilities, the AI Agent acts as a proxy or intermediary between the users and the NiceInContact agents to hand over conversations seamlessly. The AI Agent also allows you to integrate with the NiceInContact platform.


## Configuration

To configure the NiceInContact User Hub agent, follow the instructions below.


### Step 1: Generate Access Details for NiceInContact User Hub Account

Steps to generate access details:

1. Log in to [https://login.incontact.com/](https://login.incontact.com/){:target="_blank"} with your NiceInContact credentials.
2. Generate AccessKeyId and AccessKeySecret from the User Profile to send a token request. To learn how to generate the access key and secret, read [NiceInContact Generate Access Key Documentation](https://help.nice-incontact.com/content/admin/security/manageaccesskeys.htm?tocpath=Admin%7CAdmin%7CRoles%20and%20Security%7C_____3){:target="_blank"}.

    !!! Note
    
        These access details can be generated in the CXone interface on the Employees Page for the User Hub.

3. Copy the **Access Key** and **Access Secret** for future use.


### Step 2: Register an App and Retrieve a Client ID and Secret

To retrieve the client ID and client secret, you must register your application.

Steps to register the app:

1. Log in to [https://login.incontact.com/](https://login.incontact.com/){:target="_blank"} with your NiceInContact credentials.
2. To register an app for Nice In Contact User Hub, follow the instructions in the [Application Registration Documentation](https://developer.niceincontact.com/Documentation/ApplicationRegistration?Length=13){:target="_blank"}.
3. To register your application, go to the **Application Registration** page on the developer portal. Provide the following specific information:
    1. Tenancy of the application: _Single Tenant_
    2. Authentication method: _client_secret_basic_
    3. CXone ACD API scopes required: _PatronApi_
    4. Type of application being registered: Back-end

4. Once you register your application, you will receive a **client_id** and **client_secret**.
5. Once the API app is registered, copy the Client ID and Client Secret and keep it for future use.


### Step 3: Create a Point of Contact

Create the point of contact and assign the skill and campaign to handover conversations.

Steps to create a point of contact:

1. Follow the instructions in the [Set Up Chat Documentation](https://help.nice-incontact.com/content/acd/channels/chat/setupchat.htm){:target="_blank"} and create a point of contact.
2. Select the **Chat** in the Media Type field.
3. Enter **Name**, select **Skills** and **Script**, and then click **Create Point of Contact**.
4. Copy the Point of Contact key and keep it for future use.


### Step 4: Enable the NiceInContact Agent

To enable the NiceInContact, follow these steps:

1. Log in to the Kore.ai XO Platform [https://bots.kore.ai/botbuilder](https://bots.kore.ai/botbuilder){:target="_blank"}.
2. Select an AI Agent for which you want to configure the NiceInContact agent.
3. Navigate to **App Settings** > **Integrations** > **Agent Transfer** and click the **Nice In Contact(UserHub)**..



4. Click the **Configurations** tab and enter the following credentials for the NiceInContact Agent:
    1. **Application Client ID**: The client Id of the API application you copied earlier (in Step 2).
    2. **Application Client Secret**: The secret of the API application you copied earlier (in Step 2).
    3. **Access Key**: The access key Id for the NiceInContact User Hub account you copied earlier (in Step 1).
    4. **Access Secret**: The access secret for the NiceInContact User Hub account you copied earlier (in Step 1).
    5. **Point Of Contact**: The POC ID for the NiceInContact you copied earlier (in Step 3).

    <img src="../images/configuring-the-niceincontact-userhub-img2.png" alt="NiceInContact Agent credentials" title="NiceInContact Agent credentials" style="border: 1px solid gray;">

6. If you want to make NiceInContact the default agent, enable the Default Agent System for all app channels option.

    <img src="../images/configuring-the-niceincontact-userhub-img3.png" alt="Making NiceInContact the default agent" title="Making NiceInContact the default agent" style="border: 1px solid gray;">

    !!! Note
    
        This option is available only when multiple agents are configured for your AI Agent.

7. You can customize the channel mapping by clicking the Manage link.
8. Click Manage to map the channels you want to use to the Nice InContact User Hub agent for handing over the conversations. To learn more about channel enablement, see [Adding channels to your app](../../../channels/adding-channels-to-your-bot.md){:target="_blank"}.
9. After mapping channels, click **Done**.

    <img src="../images/configuring-the-niceincontact-userhub-img4.png" alt="Mapping channels" title="Mapping channels" style="border: 1px solid gray;">

10. Click **Save** to enable the NiceInContact agent.
11. Publish the App. For more information, see [Publishing App](../../../deploy/publishing-bot.md){:target="_blank"}.


## Execution

This section helps you verify how the conversations from the Kore.ai XO Platform are being handed over to the NiceInContact UserHub agent after enabling it.

Steps to verify the data exchange between Kore.ai’s agent and NiceInContact User Hub agent:

1. Log in to [https://login.incontact.com/](https://login.incontact.com/){:target="_blank"} with the user credentials that you created in Step 1.
2. Navigate to **Applications > Max** to launch the Chat console.

    <img src="../images/configuring-the-niceincontact-userhub-img5.png" alt="Launch chat console" title="Launch chat console" style="border: 1px solid gray;">

3. In the NiceInChat console, change the status from **Unavailable** to **Available**.

    <img src="../images/configuring-the-niceincontact-userhub-img6.png" alt="Change status to Available" title="Change status to Available" style="border: 1px solid gray;">

4. Click **Connect** to start exchanging the conversation from the Kore.ai XO platform and the NiceInContact User Hub.

    <img src="../images/configuring-the-niceincontact-userhub-img7.png" alt="Start conversation" title="Start conversation" style="border: 1px solid gray;">

5. Open an AI Agent for which you have enabled the NiceInContact User Hub agent.
6. Create a new Agent Transfer Node task. For example, create a Talk to Live Agent task with the LiveChats node and configure it to use the Nice agent. For more information, see [Agent Transfer Node](../../../automation/use-cases/dialogs/node-types/working-with-the-agent-transfer-node.md){:target="_blank"}.

    <img src="../images/configuring-the-niceincontact-userhub-img8.png" alt="New Agent Transfer Node task" title="New Agent Transfer Node task" style="border: 1px solid gray;">

7. Click the **Talk to Bot** icon at the bottom of the page to launch the AI Agent and enter **Help**.
8. Once you invoke the agent transfer dialog, the NiceInContact Chat receives a notification alert.
9. When a user initiates the chat from the AI Agent, it transfers the conversation to the NiceInContact UserHub agent and sends a message to the user. Agent receives a notification about this on NiceInContact.
10. Now, the connection between the NiceInContact UserHub agent and the user has been established, and the conversation continues.

    <img src="../images/configuring-the-niceincontact-userhub-img9.png" alt="Connection established NiceInContact UserHub agent and the user" title="Connection established NiceInContact UserHub agent and the user" style="border: 1px solid gray;">