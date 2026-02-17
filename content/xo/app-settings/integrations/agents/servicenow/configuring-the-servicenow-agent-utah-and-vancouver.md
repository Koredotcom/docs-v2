# Configuring the ServiceNow Agent – Utah and Higher versions

ServiceNow helps you build digital workflows on a single, unified platform. The Platform’s ServiceNow Agent integration allows you to seamlessly hand off the AI Agent  conversations to your live agents on ServiceNow. 

This post provides the configuration steps to enable the ServiceNow Agent integration for **Utah**, **Vancouver**, and higher versions of the ServiceNow system. Use the configurations provided below as general guidelines, as there could be some differences based on the release and the specific version of the ServiceNow that you are using.


## Overview

The AI Agent serves as the central point of interaction for the users. In addition to its regular capabilities, the AI Agent acts as a proxy or intermediary between the users and the ServiceNow agents to hand over conversations seamlessly. The AI Agent also allows you to integrate with the ServiceNow platform. The AI Agent facilitates communication and interaction between the user and the ServiceNow agent using the chat module.


## Configuration

Complete the following steps to configure the ServiceNow agent for **Utah** and higher versions: 

* [Step 1: Retrieve the ServiceNow Instance URL](#step-1-retrieve-the-servicenow-instance-url)
* [Step 2: Enable the ServiceNow Agent](#step-2-enable-the-servicenow-agent)
* [Step 3 : Install required plugins](#step-3-install-the-required-plugins)
* [Step 4: Assign Roles to the Consumer Service Support Group](#step-4-assign-agent-roles-to-the-consumer-service-support-group)
* [Step 5. Update the Webhook Endpoint and enable the Integration](#step-5-update-the-webhook-endpoint-and-enable-the-integration)
* [Step 6: Testing Configuration](#step-6-testing-configuration)


### Step 1: Retrieve the ServiceNow Instance URL

1. Log in to your ServiceNow account with admin user credentials. The ServiceNow account will have a unique URL for each developer instance in their Service Management or App Engine Studio, for example: `https://devXXX67.service-now.com`.
2. Copy the Instance ID from the URL and paste it into the **Configurations** tab of the ServiceNow Agent  page. Refer to step 2.


### Step 2: Enable the ServiceNow Agent

1. Log in to the Platform.
2. Select an AI Agent  for which you want to configure the ServiceNow agent. 
3. Navigate to **App Settings** > **Integrations** > **Agent Transfer** and click the **ServiceNow**.


4. On the **Configurations** tab, select your preferred authentication option (Basic vs. OAuth) and then provide the details as explained in the options below.

    **Option 1: Basic Auth** – Enter the ServiceNow Instance Credentials

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img2.png" alt="Basic Auth" title="Basic Auth" style="border: 1px solid gray;zoom=60%;">

    1. Select the **Agent Chat (Supported for Utah and higher versions)** option.
    2. Select the **Basic Auth** option for enabling ServiceNow Agent with the Basic Authentication.
    3. **Instance URL**: The company’s URL where the ServiceNow instance is hosted, for example, `https://devXXX67.service-now.com`.
    4. **User Name**: The username of your ServiceNow account.
    5. **Password**: The password of your ServiceNow account.
    6. **Queue ID**: The unique queue identification number.
    7. **Webhook URL**: The web URL for custom application function callbacks.

    **Option 2**: **OAuth with Refresh Token**- Follow the instructions in this [ServiceNow Documentation](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0778194){:target="_blank"} to generate a refresh token.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img3.png" alt="OAuth with Refresh Token" title="OAuth with Refresh Token" style="border: 1px solid gray;zoom=60%;">

    1. Select the **Agent Chat (Supported for Utah and higher versions)** option.
    2. Select the **OAuth with Refresh Token** option for enabling ServiceNow Agent with the Refresh Token Authentication.
    3. **Instance URL**: The company’s URL where the ServiceNow instance is hosted, for example, `https://devXXX67.service-now.com`.
    4. **Client ID**: The client ID of your ServiceNow application copied in Step 2.
    5. **Client Secret**: The client secret of your ServiceNow application copied in Step 2.
    6. **Refresh Token**: The unique refresh token that you generated in Step 2.
    7. **Webhook URL**: The web URL for custom application function callbacks.

5. Click **Authorize** to authenticate and allow the platform to handover conversations to ServiceNow agent.
6. If you want to make ServiceNow as the default agent, enable the **Default Agent System for all AI Agent channels** option.

    !!! Note
    
        This option is enabled only when you have multiple agents configured for your App.

7. You can customize the channel mapping by clicking the **Configure** link as shown below:

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img4.png" alt="Customize the channel mapping" title="Customize the channel mapping" style="border: 1px solid gray;zoom=60%;">

9. Once you click **Configure**, you can map the channels for which you want to use ServiceNow agent to  hand over the conversations. 

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img5.png" alt="Map channels with ServiceNow agent" title="Map channels with ServiceNow agent" style="border: 1px solid gray;zoom=60%;">

    For example, if you have configured a Genesys chat integration, Intercom and ServiceNow agents. You can make one of them as default and map channels to agent systems. In this case, the Web Client and WebHook are mapped to Genesys and Intercom. Slack is mapped to the default ServiceNow agent. To learn more about channel enablement, see [Adding channels to your App](../../../../channels/adding-channels-to-your-bot.md){:target="_blank"}.

10. After mapping channels, click **Done**.
11. Click **Save** to enable the ServiceNow agent.
12. Publish the App. For more information, see [Publishing App](../../../../deploy/publishing-bot.md){:target="_blank"}.


### Step 3: Install the required plugins

1. Log in to the ServiceNow Developer instance with Admin User Credentials.
2. To create an application, search and select the **System Definition** under **Plugins** from the left menu.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img6.png" alt="System Definition - Plugins" title="System Definition - Plugins" style="border: 1px solid gray;zoom=60%;">

3. Search and install the following plugins:

    1. Omni-experience Standard Feature Set

        <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img7.png" alt="Omni-experience Standard Feature Set" title="Omni-experience Standard Feature Set" style="border: 1px solid gray;zoom=60%;">

    2. Advanced Work Assignment

        <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img8.png" alt="Advanced Work Assignment" title="Advanced Work Assignment" style="border: 1px solid gray;zoom=60%;">

    3. Customer Service Management

        <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img9.png" alt="Customer Service Management" title="Customer Service Management" style="border: 1px solid gray;zoom=60%;">

    4. Glide Virtual Agent

        <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img10.png" alt="Glide Virtual Agent" title="Glide Virtual Agent" style="border: 1px solid gray;zoom=60%;">

    5. Virtual Agent API

        <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img11.png" alt="Virtual Agent API" title="Virtual Agent API" style="border: 1px solid gray;zoom=60%;">

4. Verify that all required plugins are installed with the required permissions.


### Step 4: Assign Agent roles to the Consumer Service Support Group

1. Log in to the ServiceNow Developer instance with Admin User Credentials.
2. To create an application, search and select the **Advanced Work Assignment** under **Management > Groups** from the left menu.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img12.png" alt="Groups" title="Groups" style="border: 1px solid gray;zoom=60%;">

3. Select the **Consumer Service Support** group and navigate to the group details screen.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img13.png" alt="Group details" title="Group details" style="border: 1px solid gray;zoom=60%;">

4. Select the **Roles** tab and click the **Edit** button to navigate to the roles screen.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img14.png" alt="Navigate to Roles screen" title="Navigate to Roles screen" style="border: 1px solid gray;zoom=60%;">

5. In the **Roles** collection, Search for **awa_agent** and  **agent_workspace_user** roles, assign them to the Consumer Service support, and save them.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img15.png" alt="assign roles to Consumer Service support" title="assign roles to Consumer Service support" style="border: 1px solid gray;zoom=60%;">

6. Navigate back to the group details screen, select the **Group Members** tab, click the edit button, and navigate to the **Edit Members** screen.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img16.png" alt="Edit members" title="Edit members" style="border: 1px solid gray;zoom=60%;">

7. In the **Users Collection**, Search for the required user. For example, select **Abel Tuter** user, assign it to the Consumer Service support, and click **Save**.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img17.png" alt="Assign user to Consumer Service support" title="Assign user to Consumer Service support" style="border: 1px solid gray;zoom=60%;">

8. Navigate back to the group details screen and click **Update**.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img18.png" alt="Group details - Update" title="Group details - Update" style="border: 1px solid gray;zoom=60%;">


### Step 5. Update the Webhook Endpoint and enable the Integration

1. Log in to the ServiceNow Instance  
2. Select **All** menu and navigate to **System Web Services > Outbound > REST messages**.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img19.png" alt="REST message" title="REST message" style="border: 1px solid gray;zoom=60%;">

3. Select the **VABot to Bot** from the list to the VABot to Bot details.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img20.png" alt="VABot to Bot" title="VABot to Bot" style="border: 1px solid gray;zoom=60%;">

4. Edit the VABot to Bot details, Copy the **Webhook URL** from the **Configuration** tab of ServiceNow Agent page, and paste it into the **EndPoint** field on the **VABot to Bot** edit details.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img21.png" alt="Endpoint - WebHook URL" title="Endpoint - WebHook URL" style="border: 1px solid gray;zoom=60%;">

5. Scroll down and select the **HTTP** methods, update the same **Webhook URL** for the **postMessage** and click **Update**.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img22.png" alt="HTTP Method - postMessage - WebHook URL" title="HTTP Method - postMessage - WebHook URL" style="border: 1px solid gray;zoom=60%;">

6. Enable the ServiceNow Agent Integration by clicking the **Save** button.


### Step 6: Testing Configuration

This section helps you verify how the conversations from the Platform are handed over to the ServiceNow agent after enabling it. 

To verify the data exchange between AI Agent and ServiceNow agent, follow these steps:

1. Open an AI Agent for which you have enabled the ServiceNow agent.
2. Create a new Agent Transfer Node task. For example, create a _Platform Agent_ task with the _UserAgent_ node and configure it to use the ServiceNow agent. For more information, see [Agent Transfer Node](../../../../automation/use-cases/dialogs/node-types/working-with-the-agent-transfer-node.md){:target="_blank"}.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img23.png" alt="new Agent Transfer Node task" title="new Agent Transfer Node task" style="border: 1px solid gray;zoom=60%;">

3. Click the **Talk to Bot** icon to launch the andAI Agent enter **Help**.
4. Log in to the ServiceNow Instance, select the **Impersonate User** from the **Profile** option as shown:

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img24.png" alt="Impersonate user" title="Impersonate user" style="border: 1px solid gray;zoom=60%;">

5. Enter the Username that you created. For example, select the _Abel Tuter_ username.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img25.png" alt="Enter user name" title="Enter user name" style="border: 1px solid gray;zoom=60%;">

6. Select **All** and navigate to **Workspace Experience > Workspaces > Agent Workspace Home**.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img26.png" alt="Agent Workspace Home" title="Agent Workspace Home" style="border: 1px solid gray;zoom=60%;">

7. In the Agent Workspace page, select **Inbox** and set the **Status** to **Available**.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img27.png" alt="Status - Available" title="Status - Available" style="border: 1px solid gray;zoom=60%;">

8. When a user initiates the chat from the App it transfers the conversation to the ServiceNow agent and sends a message to the user.
9. Agent receives a notification about this on ServiceNow.
10. Now, the connection between the ServiceNow agent and the user has been established, and the conversation continues.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img28.png" alt="Connection established between user and ServiceNow agent" title="Connection established between user and ServiceNow agent" style="border: 1px solid gray;zoom=60%;">


## Additional Capabilities


### Pass User Information to the ServiceNow Agent System

By default, when the Platform transfers an end user’s conversation to the ServiceNow Agent System, the end user appears as a Guest in the agent system.

You can pass on the user information from the Platform to the agent system using the “ServiceNowMetaData” object. You can set the values in the “ServiceNowMetaData” object using the “agentUtils.setMetaInfo” function in the context from all the places where you can define a javascript.

Subsequently, you can use the passed values to make required changes in the ServiceNow Agent System to populate the username in the agent chat.

**Steps**: 

1. Configure Message Authentication for inbound communication in your ServiceNow instance as explained here – [https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/administer/virtual-agent/task/set-up-message-auth-va-api.html](https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/administer/virtual-agent/task/set-up-message-auth-va-api.html){:target="_blank"}. 
2. Before the agent transfer node is executed, you must set the meta info (userId, emailId, and the static token generated in the previous step) in the context in a specific format.

    For example:

    1. The app can collect the Servicenow UserId and Servicenow EmailId from the users as part of the entity nodes.

        <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img29.png" alt="Servicenow UserId and Servicenow EmailId" title="Servicenow UserId and Servicenow EmailId" style="border: 1px solid gray;zoom=60%;"> 

    2. Then, in the script node, you can add the “ServiceNowMetaData” object and set it in the context using the “agentUtils.setMetaInfo” in-built function.
        
        A sample script that can be added in the Script node:  

        ```
            let metaData = {
            "payloadFields" : {
                "userId" : context.entities.UserID,  // ServiceNow user Id; it can be a dynamic or static value.
                "emailId" : context.entities.UserEmail  // ServiceNow user email; it can be a dynamic or static value.
            },
            "headerFields" : {
                "token" : "Token_generated_in_ServiceNow_Instance"
            }
        }

        agentUtils.setMetaInfo("ServiceNowMetaData", JSON.stringify(metaData))
        ```

        !!! Note
        
            By default, the context object may not include information such as user ID, email address, etc. You should explicitly capture the required details that need to be populated in the ServiceNow Agent System. Also, if the “ServiceNowMetaData” object is not defined, values are not included in the context object shared with the ServiceNow Agent System.


### Route User Messages to Different Agent Groups by ‘streamId’

The Platform sends ‘streamId’ as a context variable in the request payload sent to ServiceNow. To route user messages to different agent groups by ‘streamId’ in the ServiceNow Agent System, you can define a Work Item Routing Condition in the Queue using the ‘streamId’ context variable.

Steps to access the ‘streamId’ while defining the Work Item routing condition:

1. Go to the **Conversational Interfaces Home** and then create a new context variable with the name – streamId.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img30.png" alt="New context variable streamId" title="New context variable streamId" style="border: 1px solid gray;zoom=60%;">

2. Define a Work item routing condition in the Queue using the ‘streamId’ context variable, as shown in the screenshot below.

    <img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img31.png" alt="Work item routing condition using streamId" title="Work item routing condition using streamId" style="border: 1px solid gray;zoom=60%;"> 

3. You must configure the Work item routing condition based on the ‘streamId’ in each queue. For example, if the routing condition of queue 1 has a condition on ‘streamId’, but in queue 2, no condition is defined on ‘streamId’, both queues qualify for this work item. Therefore, to avoid this situation, ensure that the Work item routing conditions are defined in all the queues, as explained in the previous step.

For more information on the Work item routing condition and queue, see the following links and sample screenshots from the ServiceNow product documentation.

[ServiceNow Documentation > Create a work item queue](https://docs.servicenow.com/bundle/tokyo-servicenow-platform/page/administer/advanced-work-assignment/task/awa-create-queue.html){:target="_blank"}:


<img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img32.png" alt="Create a work item queue" title="Create a work item queue" style="border: 1px solid gray;zoom=60%;">

[ServiceNow Documentation > Virtual Agent Bot Integration API](https://developer.servicenow.com/dev.do#!/reference/api/tokyo/rest/bot-api){:target="_blank"}:

<img src="../images/configuring-the-servicenow-agent-utah-and-vancouver-img33.png" alt="Virtual Agent Bot Integration API" title="Virtual Agent Bot Integration API" style="border: 1px solid gray;zoom=60%;">








### Enable Attachment Sharing with Live Agents

Follow these steps:

1. Log in to your ServiceNow account with admin user credentials.
2. Go to **System Properties** > **sys_cs_provider_application.list** > **Configure** > **Form Layout**.
3. In the **Trusted Media Domains** field, enter the domain you want to send and receive the attachments.
<img src="../images/sn-at.png" alt="Attachment Sharing" title="Attachment Sharing" style="border: 1px solid gray;zoom=60%;">

!!! note

    This feature currently supports only the Utah and Vancouver versions.


### Agent Transfer Status

The platform now records the status of the agent transfer in both Debug Logs and Analytics. This information helps to analyze whether the agent transfer is successful or not. Thus, it facilitates improved tracking and troubleshooting of transfer-related issues.

### Failed Agent Transfer Notification

The platform now displays a default, non-editable message to users when a ServiceNow agent transfer fails due to agent unavailability, improving user clarity and reducing the need for repeated transfer attempts.

Default message: *No agents are available to handle your request. Please try again later*.