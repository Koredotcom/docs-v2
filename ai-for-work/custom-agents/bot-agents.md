---
title: Bot Agents
description: Administrators create bot agents for users using the
---

Administrators create bot agents for users using the bot agent builder, significantly improving overall efficiency. Workflows designed on the AI for Service Platform integrate seamlessly, allowing actions to execute directly when a workflow triggers, eliminating the need for other platforms.

For complex workflows involving multiple system integrations and logic, users build bots using the AI for Service Platform. Users trigger these bots through conversations using the UI or NLP intent, streamlining the entire process.

For example, consider a Fund Transfer Bot Agent. By creating this bot on the AI for Service Platform, automate fund transfers to clients' designated accounts, capturing key details such as client names, account information, and transfer amounts. Once integrated with your organization's systems, the bot allows seamless conversational interactions, simplifying fund transfer operations.

Create a new agent or import an existing one.

- [Import existing Bot Agent](#import-existing-bot-agent)
- [Create a Bot Agent](#create-a-bot-agent)
    - [Step 1: Details and Purpose](#step-1-details-and-purpose)
    - [Step 2: Add Bot](#step-2-add-bot)
    - [Step 3: Appearance and Behavior](#step-3-appearance-and-behavior)
    - [Step 4: Publish](#step-4-publish)
- [User Interaction](#user-interaction)

## Import existing Bot Agent

To import an existing Bot Agent:

1. Click the **Import Agent** button located in the upper-right
    corner.

    ![Admin Console](./images/import_bot.png "Admin Console")



2. Select the .ZIP file of the existing
    agent.

    ![Admin Console](./images/import_bot-agent.png "Admin Console")



3. Click **Import** to complete the process. The imported agent appears on
    the Bot Agents page.

## Create a Bot Agent

Create a new Bot agent to assist users in completing various tasks by utilizing the Bot created using the AI for Service Platform. [Learn more](https://docs.kore.ai/xo/getting-started/building-a-virtual-assistant/).

To create a new Bot Agent, follow these steps:

1. In the **Admin Console**, click **AI Agents** from the left pane, and then select **Bot Agents**. Displays a list of available bot agents.

    ![Admin Console](./images/bot-agent.png "Admin Console")



2. On the Bot Agents page, click **+Create Agent**.

    ![Admin Console](./images/create-agent.png "Admin Console")



3. You must link your Bot built on the AI for Service Platform and create a webhook channel. [Learn more](https://docs.kore.ai/xo/channels/add-webhook-channel/).

To create a webhook channel on the Bot and complete the integration process, follow these steps:

1. Log in to the AI for Service Platform. Open the virtual assistant or the bot that you want to add the channels to. Navigate to **Deploy** > **Channels** > **Add More** > **Webhook**.

1. Select your required app from the **Webhook** dialog.

    ![Admin Console](./images/webhook_select_app.png "Admin Console")



1. Copy the **Bot client ID** and **Bot secret ID** to use in the platform to complete the integration.

    ![Admin Console](./images/webhook_botID.png "Admin Console")



1. Under the **Configured Channels** section, click the name of the bot you have created and want to integrate, enables the channel.

<Note> Create a new client app for your app by providing the JWT tokens generated using the **Post URL** and **Access tokens** available in the **Add bot agents** dialog in the **Add Bot** section.</Note>

The **Prompt Agent creation** wizard will take you through the following steps:

#### Step 1: Details and Purpose

Provide a suitable and unique name for the agent and describe its purpose. Defining the agent's purpose enables it to accurately recognize its capabilities and effectively utilize them to respond to user queries aligned with the specified intent. Clearly outline the specific use cases for which you designed the agent.

![Admin Console](./images/detail-purpose.png "Admin Console")



#### Step 2: Add Bot

The Add Bot feature enables seamless integration of a bot created on the platform with your system. To establish this connection, ensure you enable the webhook channel on the bot. Once activated, follow the integration steps to complete the process:

1. In the **Add Bot** enter the following:

     a. **Post URL**: Populates the field with the necessary endpoint.

     b. **Access Token**: Populates the field with the necessary endpoint.

     c. **Webhook URL**: Enter the URL from the Bot Webhook dialog. For detailed information about webhooks, [Learn more](https://docs.kore.ai/xo/channels/add-webhook-channel/).

     ![Admin Console](./images/add-bot.png "Admin Console")



     d. **Bot client ID** : Enter the client identifier retrieved from the Bot Webhook dialog.

     e. **Bot secret ID**: Enter the secret identifier retrieved from the Bot Webhook dialog.

2. Click **Connect account** to move to the next step.

#### Step 3: Appearance and Behavior

The **Appearance and Behavior** section displays sample queries to test the agent’s behavior.

1. Click **+Add Query** to input additional test queries.
2. Enable **Allow End User Notification** toggle to enable notification configuration and agent trigger setup, For detailed instructions, refer [Notifications](../custom-agents/notify-api.md).
3. Enable **Clear End-User Chat History** toggle to automatically delete the agent's chat history for end users after a specified period.
4. Once validated, click **Publish** to move to the final step.

#### Step 4: Publish

Publish your agent and define access permissions and enablement.

**Specify publishing details**:

* **Publish To**: Define access permissions:
    * **Everyone in the Account**: Make the agent available to all users.
    * **Limited Users**: Grant access to specific workspace users or groups added in the publish settings of the workspace.
* **Enablement Type**: Configure how users interact with the agent:
    * **Always Enabled**: The agent remains active and cannot be disabled.
    * **Users Choice**: Users enable or disable the agent as needed.

<Note> The publishing options are defined in the Workspace settings. For additional information, [Workspace](../Administration/workspace.md).</Note>

View this agent in the **Agents list** on the **Agents** page.

<Note> On the Agents list page, click the three dots icon next to the agent's name and publish the agent later if necessary.</Note>


## User Interaction

Interacting with the bot agent simplifies communication and task execution. Users initiate a conversation by typing a command. The bot responds promptly, guiding users through the required steps. For example, if performing a task like a fund transfer, users simply need to engage with the bot by providing key details such as the client's name, account information, and transfer amount. Once you complete the task, the bot provides a confirmation or status update.


![Admin Console](./images/user-interaction_1.png "Admin Console")




![Admin Console](./images/user-interaction_2.png "Admin Console")



**Related Resources**

* See [Alert API](./alert-task.md) to integrate conversation hold and resume functionality within AI for Service Bots.
* See [Notify API](./notify-api.md) to send interactive notifications to the users.
