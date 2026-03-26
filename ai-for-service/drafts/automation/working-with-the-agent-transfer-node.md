# Agent Transfer Node

The Agent Transfer Node transfers the communications from the AI Agent to a live agent. You can use the Agent Transfer node in a conditional dialog flow to move a user to a conversation with a live agent. For example,when  the AI Agent cannot identify the user intent, or when tone analysis indicates the user is not satisfied with the communication, or on manual request by a user.

When a user is transferred using the Agent Transfer node, the dialog task ends and the agent controls the remaining portion of the conversation. 

The Agent Transfer node is managed as an Integration, using API. This means that once the Agent Transfer node triggers within the Dialog Task, the integration is initiated and the conversation is transferred to your helpdesk, where an agent can take it over

In this article you will learn how to implement the Agent Transfer node in your Dialog Tasks. 


## Register an App

To configure an Agent Transfer node in your dialog task, you need to create an app and generate registration credentials using the Kore.ai SDK. These credentials are required to exchange messages between your application and the Kore.ai XO Platform.

Follow the below steps to register your Agent Transfer app:

1. Go to **App Settings > Integrations > Agent Transfer** in **Automation AI**.
2. On the Agent Transfer page, click the **Custom (BotKit)** tile.

    <img src="../images/agent-transfer-node-img1-custom-botkit.png" alt="Custom (BotKit) to create app" title="Custom (BotKit) to create app" style="border:1px solid gray; zoom:60%;">
    
3. Click **Add** next to the **App Name** drop-down list.

    <img src="../images/add-app.png" alt="Add app" title="Add app" style="border:1px solid gray; zoom:60%;">

3. On the **Create Client App** window, enter the app name in the **Name** field. For example, _Agent Transfer_.

    !!! Note
    
        RS256 and RS512 JWT signing algorithms are not supported for Custom BotKit or Botkit.

4. Click **Next**. The **Client ID** and **Client Secret** are generated.
5. In the **Callback URL** field, enter the URL for the application that you want Kore.ai to push data to. For example, [https://koremessenger.com/postURL](https://koremessenger.com/postURL).

    !!! Note
    
        The registration app you create is based on the **Callback URL** applicable to all tasks for the AI Agent. While each task can have unique SDK configurations, the Callback URL is the same. Create separate AI Agents for separate application Callback URLs for live agent transfers.

6. Under the **PII Data** section, define how _sensitive information_ should be handled. If there is a need to share unmasked data when an agent session is in progress, even when [PII redaction is enabled](../../../../app-settings/advanced-settings/pii-data-masking.md){:target="_blank"}, select the **Do not mask and send original data to Agent BotKit**. Else, go with the default setting of **Mask and send sensitive data to Agent BotKit**.
7. Under the **Access Using a Connector** section, indicate if your URL is behind a firewall and a _Connector_ has to be used.
8. Click **Save**.

    <img src="../images/save-new-app.png" alt="Save new app" title="Save new app" style="border:1px solid gray; zoom:60%;">


For details on managing  the API integration, please see the following articles:

1. [Enabling Agent Transfer API](../../../../apis/automation/enabling-agent-transfer-api.md){:target="_blank"}
2. [Configuring Agent Transfer](../../../../app-settings/integrations/agents/how-to-configure-agent-transfer.md){:target="_blank"}
3. [BotKit SDK Tutorial – Agent Transfer](../../../../sdk/tutorials/agent-transfer.md){:target="_blank"}


## Set Up the Agent Transfer Node

Setting up an Agent Transfer node in a dialog task involves the following steps:

1. Select the AI Agent you want to work with.
2. Open the dialog task to add the Agent Transfer node to.
3. Click the **+** icon next to the node under which you want to add the Agent Transfer node.Select **Agent Transfer > New Agent Transfer Node**. Alternatively, use drag and drop to add the node from the left side nodes panel.
4. On the Agent Transfer window, by default, the **Component Properties** tab is displayed.

    <img src="../images/agent-transfer-node-component-properties.png" alt="Agent Transfer node" title="Agent Transfer node" style="border:1px solid gray; zoom:60%;">


### Component Properties

1. Enter a **Name** and **Display Name** for the node. For example, _LiveAgent_.
2. In the **Containment Type** section, choose the following options:
    1. **Mark as Agent Transfer** –  To hand-off conversations to an agent when the AI Agent is configured to transfer the conversation session to an agent transfer integration or custom integration. Indicates that the conversation was transferred to a live agent using the Agent Transfer node in the Dialog Flow. [Learn more](../../../../app-settings/integrations/agents/agent-transfer-integrations.md){:target="_blank"}.
    2. **Mark as Self Service** – To mark conversations as self-service when the session reaches this node. Indicates that the conversation (initiated by the user) with an AI Agent was successfully completed or informs that AI Agent is not trained to handle a user’s request. [Learn more](../../../../analytics/overview/conversations-history.md#conversations-history-dashboard){:target="_blank"}.

        <img src="../images/agent-transfer-node-component-properties-panel.png" alt="Agent Transfer node-Component properties" title="Agent Transfer node-Component properties" style="border:1px solid gray; zoom:60%;">

3. In the **Chat Settings** section, click the **View Config** link to view agent transfer settings for each agent transfer integration that are configured.

    <img src="../images/agent-transfer-node-chat-settings.png" alt="Agent Transfer node-Chat settings" title="Agent Transfer node-Chat settings" style="border:1px solid gray; zoom:60%;">

4. In the **View Config** page, you can view the agent configuration details.
5. Click **Close** to return to the Agent Transfer Node settings page.
6. In the **Voice Settings** section, click the **Configure** link to configure the IVR Channel Voice Call Properties. [Learn more](../../../../automation/use-cases/dialogs/node-types/voice-call-properties.md){:target="_blank"}.

    <img src="../images/agent-transfer-ivr-settings.png" alt="Agent Transfer node-Chat settings-IVR" title="Agent Transfer node-Chat settings-IVR" style="border:1px solid gray; zoom:60%;">

7. In the **Variable Namespaces** section, associate the Variable Namespaces to execute this node and its transitions. This option is visible only when the Variable Namespace is enabled for the AI Agent. You can go with the task level settings or customize it for this node. For more information, refer to [Managing Namespace](../../../../app-settings/managing-namespace.md){:target="_blank"}.

!!! Note

    Any changes in this tab will affect all instances of the node within all dialog tasks that invoke it. Proceed with caution.


### Instance Properties

This is where you can configure the instance specific fields for this agent transfer node. These are applicable only for this instance and will not affect this agent transfer node being used in any other dialog.

For Agent Transfer node instances, you can configure tags to build custom profiles of your AI Agents conversations. Read more about [Custom Tags](../../../../analytics/automation/custom-dashboard/custom-meta-tags.md){:target="_blank"}.

<img src="../images/agent-transfer-node-instance-properties.png" alt="Agent Transfer node-Instance properties" title="Agent Transfer node-Instance properties" style="border:1px solid gray; zoom:60%;">