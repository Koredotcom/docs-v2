# Configuring the NiceInContact

NiceInContact is a customer experience (CX) platform. It helps companies and consumers create an end-to-end CX approach, combining digital entry points, prepared agents, and a complete performance suite. Kore.ai XO Platform’s NiceInContact Agent integration allows you to seamlessly hand off the AI Agent conversations to your live agents on Nice Chat.

Use the configuration steps below as general guidelines to enable the NiceInContact Agent integration. You may notice minor differences based on the version of the NiceInContact you are using.


## Overview

Kore.ai’s agent serves as the central point of interaction for the users. The AI Agent facilitates communication and interaction between the user and the NiceInContact agent. In addition to its regular capabilities, the AI Agent acts as a proxy or intermediary between the users and the NiceInContact agents to hand over conversations seamlessly. The AI Agent also allows you to integrate with the NiceInContact platform.


## Configuration

To configure the NiceInContact agent, follow the instructions in the sections below.


### Step 1: Create a User in NiceInContact

To create a user, follow these steps:

1. Log in to [https://login.incontact.com/](https://login.incontact.com/){:target="_blank"} with your NiceInContact credentials.
2. Click the **Create New** link under the **Admin > Users** menu and select the **Single User** option.

    <img src="../images/configuring-the-niceincontact-img1.png" alt="Create new user" title="Create new user" style="border: 1px solid gray;">

3. Enter the following user details:
    1. First Name
    2. Last Name
    3. Email
    4. Username

    <img src="../images/configuring-the-niceincontact-img2.png" alt="Enter user details" title="Enter user details" style="border: 1px solid gray;">

4. Click **Save and Continue**.
5. Remember the username and password for future use.


### Step 2: Register an App and Retrieve an API Token

To retrieve an API token, you must register your application. Follow these steps to register the app and retrieve the API access token:

1. Log in to [https://login.incontact.com/](https://login.incontact.com/){:target="_blank"} with your NiceInContact credentials.
2. In the NiceInContact Central website, under the **ACD > ACD Configuration > API Applications** menu and click **Create New**.
3. Enter the **Vendor Name** and an **Application Name** to register your application.
4. Enter the Vendor Name as _PlatformIntegration_ and a relevant Application Name as _PlatformInt_.
5. Under API scope, select only the **PatronApi** scope.

    <img src="../images/configuring-the-niceincontact-img3.png" alt="API Scope - PatronApi" title="API Scope - PatronApi" style="border: 1px solid gray;">

6. Click **Create API Application**.
7. Once the API app is created, copy the **Application Secret** and keep it for future use.


### Step 3: Create a Point of Contact

To create a point of contact, follow these steps:

1. From the main menu on the left, navigate to **ACD > Contact > Point of Contact** and click **Create New** and select the **Single Point of Contact** option.

    <img src="../images/configuring-the-niceincontact-img4.png" alt="Create Single Point of Contact" title="Create Single Point of Contact" style="border: 1px solid gray;">

2. Select the **Chat** in the Media Type field.
3. Enter **Name** and select the **Skills** and **Script**, and then click **Create Point of Contact**.
4. Copy the Point of Contact key and keep it for future use.

    <img src="../images/configuring-the-niceincontact-img5.png" alt="Preserve the Point of Contact key" title="Preserve the Point of Contact key" style="border: 1px solid gray;">


### Step 4: Enable the NiceInContact Agent

To enable the NiceInContact, follow these steps:

1. Log in to the Kore.ai XO Platform [https://bots.kore.ai/botbuilder](https://bots.kore.ai/botbuilder){:target="_blank"}.
2. Select an AI Agent for which you want to configure the NiceInContact agent.
3. Navigate to **App Settings** > **Integrations** > **Agent Transfer** and click the **NiceInContact**.

    

4. Click the **Configurations** tab and enter the following credentials for the NiceInContact Agent:
    1. **Application Name**: The name of the API application.
    2. **Vendor Name**: The name of the vendor that you entered in the application.
    3. **Access Token**: The secret ID for the NiceInContact, which was copied in step 2.
    4. **Point Of Contact**: The POC ID for the NiceInContact, which was copied in step 3.

5. If you want to make NiceInContact the default agent, enable the **Default Agent System for all app channels** option.

    <img src="../images/configuring-the-niceincontact-img7.png" alt="Make NiceInContact the default agent" title="Make NiceInContact the default agent" style="border: 1px solid gray;">

    !!! Note
    
        This option is available only when multiple agents are configured for your AI Agent.

6. You can customize the channel mapping by clicking the Manage link, as shown below:

    <img src="../images/configuring-the-niceincontact-img8.png" alt="Customizing channel mapping" title="Customizing Channel mapping" style="border: 1px solid gray;">

7. Click Manage to map the channels you want to use to the NiceInContact agent for handing over the conversations. To learn more about channel enablement, see [Adding channels to your app](../../../channels/adding-channels-to-your-bot.md){:target="_blank"}.
8. After mapping channels, click **Done**.

    <img src="../images/configuring-the-niceincontact-img9.png" alt="Customizing channel mapping - Done" title="Customizing Channel mapping - Done" style="border: 1px solid gray;">

9. Click **Save** to enable the NiceInContact agent.
10. Publish the App. For more information, see [Publishing App](../../../deploy/publishing-bot.md){:target="_blank"}.


## Execution

This section helps you verify how the conversations from the Kore.ai XO Platform are being handed over to the NiceInContact agent after enabling it.

To verify the data exchange between Kore.ai’s agent and NiceInContact agent, follow these steps:

1. Log in to [https://login.incontact.com/](https://login.incontact.com/){:target="_blank"} with user credentials which you created in Step 1.
2. Navigate to **Applications > Max** to launch the Chat console.

    <img src="../images/configuring-the-niceincontact-img10.png" alt="Launch chat console" title="Launch chat console" style="border: 1px solid gray;">

3. In the NiceInChat console, change the status from **Unavailable** to **Available**.

    <img src="../images/configuring-the-niceincontact-img11.png" alt="Change status to Available" title="Change status to Available" style="border: 1px solid gray;">

4. Click **Connect** to start exchanging the conversation from Kore.ai XO platform and NiceInContact.

    <img src="../images/configuring-the-niceincontact-img12.png" alt="Start conversation" title="Start conversation" style="border: 1px solid gray;">

5. Open an AI Agent for which you have enabled the NiceInContact agent.
6. Create a new Agent Transfer Node task. For example, create a Talk to Live Agent task with the LiveChats node and configure it to use the Nice agent. For more information, see [Agent Transfer Node](../../../automation/use-cases/dialogs/node-types/working-with-the-agent-transfer-node.md){:target="_blank"}.

    <img src="../images/configuring-the-niceincontact-img13.png" alt="Create new Agent Transfer Node task" title="Create new Agent Transfer Node task" style="border: 1px solid gray;">

7. Click the **Talk to Bot** icon to launch the app and enter **Help**.
8. Once you invoke the agent transfer dialog, the NiceInContact Chat receives a notification alert.
9. When a user initiates the chat from the app, it transfers the conversation to the NiceInContact agent and sends a message to the user. Agent receives a notification about this on NiceInContact.
10. Now, the connection between the NiceInContact agent and the user has been established, and the conversation continues.

    <img src="../images/configuring-the-niceincontact-img14.png" alt="Connection established between NiceInContact agent and user" title="Connection established between NiceInContact agent and user" style="border: 1px solid gray;">