# Configuring the ServiceNow Agent – Tokyo and Lower versions

ServiceNow helps you build digital workflows on a single, unified platform. The Platform’s ServiceNow Agent integration allows you to seamlessly hand off the AI Agent  conversations to your live agents on ServiceNow. 

This post provides the configuration steps to enable the ServiceNow Agent integration in the **Tokyo** version. Use the configurations provided below as general guidelines, as there could be some differences based on the release and the specific version of the ServiceNow that you are using.


## Overview

The AI Agent serves as the central point of interaction for the users. In addition to its regular capabilities, the AI Agent acts as a proxy or intermediary between the users and the ServiceNow agents to hand over conversations seamlessly. The AI Agent also allows you to integrate with the ServiceNow platform. The AI Agent facilitates communication and interaction between the user and the ServiceNow agent using the chat module.


## Configuration

Complete the following steps to configure the ServiceNow agent for **Tokyo** and lower versions: 

* [Step 1: Retrieve the ServiceNow Instance URL](#step-1-retrieve-the-servicenow-instance-url)
* [Step 2 : Create a New Queue](#step-2-create-a-new-queue)
* [Step 3: Enable the ServiceNow Agent](#step-3-enable-the-servicenow-agent)
* [Step 4 : Switch to UI16 Theme](#step-4-switch-to-ui16-theme)
* [Step 5: Install required plugins](#step-5-install-the-required-plugins)
* [Step 6: Create a user with agent_admin role](#step-6-create-a-user-with-agent_admin-role)
* [Step 7: Create a group and add the user created to the group](#step-7-create-a-group-and-add-the-user-created-to-the-group)
* [Step 8: Define the Host URL in the REST Message in ServiceNow](#step-8-define-the-host-url-in-the-rest-message-in-servicenow)
* [Step 9: Define Outbound REST Message Requests in ServiceNow](#step-9-define-outbound-rest-message-requests-in-servicenow)
* [Step 10: Define Outbound REST Business Rules in ServiceNow](#step-10-define-outbound-rest-business-rules-in-servicenow)
* [Step 11: Testing Configuration](#step-11-testing-configuration)


### Step 1: Retrieve the ServiceNow Instance URL

1. Log in to your ServiceNow account with admin user credentials. The ServiceNow account will have a unique URL for each developer instance in their Service Management or App Engine Studio, for example: `https://devXXX67.service-now.com`.
2. Copy the Instance ID from the URL and paste it into the **Configurations** tab of the ServiceNow Agent  page. Refer to step 3.


### Step 2: Create a New Queue

1. Log in to your ServiceNow account.
2. From the main menu on the left, search and select **Queues** under **Connect > Support Administration** and click on the **New** button.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img1.png" alt="Create new queue" title="Create new queue" style="border: 1px solid gray;zoom:80%;"/>

3. In the Queue dialog, enter the following queue details:
    1. **Name** of the queue.
    2. Select Consumer Service Support in the **Assignment group** field.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img2.png" alt="Queue details" title="Queue details" style="border: 1px solid gray;zoom:80%;"/>

4. Click the **New** button in the **Chat Queue Entries** section and assign the chat queue entry to a user as shown below:

    <img src="../images/configuring-the-servicenow-agent-tokyo-img3.png" alt="Assign chat queue entry to  user" title="Assign chat queue entry to  user" style="border: 1px solid gray;zoom:80%;"/>

5. Click **Submit** to save the chat queue entry details.
6. Click **Submit** again to save the queue details.
7. Copy the ID from the **Queue ID** field.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img4.png" alt="Queue ID" title="Queue ID" style="border: 1px solid gray;zoom:80%;"/>


### Step 3: Enable the ServiceNow Agent

1. Log in to the Platform.
2. Select an AI Agent for which you want to configure the ServiceNow agent. 
3. Navigate to **App Settings** > **Integrations** > **Agent Transfer** and click the **ServiceNow**.



4. On the **Configurations** tab, select your preferred authentication option (Basic vs. OAuth) and then provide the details as explained in the options below:
    
    **Option1: Basic Auth** – Enter the ServiceNow Instance credentials

    <img src="../images/configuring-the-servicenow-agent-tokyo-img6.png" alt="Basic Auth" title="Basic Auth" style="border: 1px solid gray;zoom:50%;">

    1. Select the **Connect Support (Supported for Tokyo and lower versions)** option.
    2. Select the **Basic Auth** option for enabling ServiceNow Agent with the Basic Authentication.
    3. **Instance URL**: The company’s URL where the ServiceNow instance is hosted. For example, the instance URL is in this format: `https://devXXX67.service-now.com`.
    4. **User Name**: The username of your ServiceNow account.
    5. **Password**: The password of your ServiceNow account.
    6. **Queue ID**: The unique queue identification number.
    7. **Webhook URL**: The web URL for custom application function callbacks.

    **Option 2**: **OAuth with Refresh Token** – Follow the instructions in this [ServiceNow Documentation](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0778194){:target="_blank"} to generate a refresh token.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img7.png" alt="OAuth with Refresh Token" title="OAuth with Refresh Token" style="border: 1px solid gray;zoom:50%;">

    1. Select the **Connect Support (Supported for Tokyo and lower versions)** option.
    2. Select the **OAuth with Refresh Token** option for enabling ServiceNow Agent with the Refresh Token Authentication.
    3. **Instance URL**: The company’s URL where the ServiceNow instance is hosted. For example, the instance URL is in this format: `https://devXXX67.service-now.com`.
    4. **Client ID**: The client ID of your ServiceNow application copied in Step 8.
    5. **Client Secret**: The client secret of your ServiceNow application copied in Step 8.
    6. **Refresh Token**: The unique refresh token that you generated in Step 8.
    7. **Webhook URL**: The web URL for custom application function callbacks.

5. Click **Authorize** to authenticate and allow the platform to handover conversations to ServiceNow agent.
6. If you want to make ServiceNow as the default agent, enable the **Default Agent System for all app channels** option.

    !!! Note
    
        This option is enabled only when you have multiple agents configured for your AI Agent.

7. You can customize the channel mapping by clicking the **Configure** link as shown below:

    <img src="../images/configuring-the-servicenow-agent-tokyo-img8.png" alt="Customize channel mapping" title="Customize channel mapping" style="border: 1px solid gray;zoom:80%;"/>

9. Once you click **Configure**, you can map the channels for which you want to use ServiceNow agent to  hand over the conversations. 

    <img src="../images/configuring-the-servicenow-agent-tokyo-img9.png" alt="Map channels to use ServiceNow agent" title="Map channels to use ServiceNow agent" style="border: 1px solid gray;zoom:80%;"/>

    For example, if you have configured a Genesys chat integration, Intercom and ServiceNow agents. You can make one of them as default and map channels to agent systems. In this case, the Web Client and WebHook are mapped to Genesys and Intercom. Slack is mapped to the default ServiceNow agent. To learn more about channel enablement, see [Adding channels to your app](../../../../channels/adding-channels-to-your-bot.md){:target="_blank"}.

10. After mapping channels, click **Done**.
11. Click **Save** to enable the ServiceNow agent.
12. Publish the App. For more information, see [Publishing App](../../../../deploy/publishing-bot.md){:target="_blank"}.


### Step 4: Switch to UI16 theme

1. Log in to your ServiceNow account with admin user credentials. The ServiceNow account will have a unique URL for each developer instance in their Service Management or App Engine Studio, for example: `https://devXXX67.service-now.com`.
2. Select the **All** menu, search for the **System Properties** filter, and click **New**.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img10.png" alt="System Properties" title="System Properties" style="border: 1px solid gray;zoom:80%;"/>

3. Enter the **glide.ui.polaris.on_off_user_pref_enabled** property, select the type as **true|false**, and click **Submit**.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img11.png" alt="glide.ui.polaris.on_off_user_pref_enabled property and type" title="glide.ui.polaris.on_off_user_pref_enabled property and type" style="border: 1px solid gray;zoom:80%;"/>

    !!! Note
    
        This property provides an option for the user to toggle between “Next experience and UI16” and classic experience.

4. Click on the **System Admin** profile and select the **Preferences** menu.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img12.png" alt="Preferences" title="Preferences" style="border: 1px solid gray;zoom:80%;"/>

5. Turn on the **Turn off Next experience** toggle.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img13.png" alt="Turn off Next experience" title="Turn off Next experience" style="border: 1px solid gray;zoom:80%;"/>

6. The App Engine Studio view switches from Next Experience to UI 16 theme.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img14.png" alt="Next experience - UI 16" title="Next experience - UI 16" style="border: 1px solid gray;zoom:80%;"/>


### Step 5: Install the required plugins

1. Log in to the ServiceNow Developer instance with Admin User Credentials.
2. To create an application, search and select the **System Definition** under **Plugins** from the left menu.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img15.png" alt="Plugins - System Definition" title="Plugins - System Definition" style="border: 1px solid gray;zoom:80%;"/>

3. Search for the **Consumer Service Portal** plugin and install it.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img16.png" alt="Install Consumer Service Portal plugin" title="Install Consumer Service Portal plugin" style="border: 1px solid gray;zoom:80%;"/>

4. After the successful installation, a new Connect support menu item appears in the left navigation bar.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img17.png" alt="new Connect support menu item" title="new Connect support menu item" style="border: 1px solid gray;zoom:80%;"/>


### Step 6: Create a user with agent_admin role

1. Log in to the ServiceNow instance with the admin user credentials.
2. Navigate to **User Administration > Users > New**.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img18.png" alt="Users - New" title="Users - New" style="border: 1px solid gray;zoom:80%;"/>

3. Fill in the details to create a user and click **Submit**.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img19.png" alt="Provide new user's details" title="Provide new user's details" style="border: 1px solid gray;zoom:80%;"/>

4. Select the **Roles** tab and click the **Edit** button to navigate to the roles screen.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img20.png" alt="Roles" title="Roles" style="border: 1px solid gray;zoom:80%;"/>

5. Search for the **agent_admin** role and add it to the user.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img21.png" alt="Add agent_admin role to the user" title="Add agent_admin role to the user" style="border: 1px solid gray;zoom:80%;"/>

6. Click **Save**.


### Step 7: Create a group and add the user created to the group

1. Create a group if you don’t have a group or use an existing group in ServiceNow.
2. Navigate to **User Administration > Groups**.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img22.png" alt="User Administration - Groups" title="User Administration - Groups" style="border: 1px solid gray;zoom:80%;"/>

3. Click **New**.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img23.png" alt="Groups - New" title="Groups - New" style="border: 1px solid gray;zoom:80%;"/>

4. To create a new group, fill in the appropriate details and click **Submit**.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img24.png" alt="Provide details and submit" title="Provide details and submit" style="border: 1px solid gray;zoom:80%;"/>

5. Edit the group created above. Scroll down to the **Group Members** tab and click **Edit**.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img25.png" alt="Edit group" title="Edit group" style="border: 1px solid gray;zoom:80%;"/>

6. Select the agent created in the previous step and add it to the current group.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img26.png" alt="Add the new agent to the group" title="Add the new agent to the group" style="border: 1px solid gray;zoom:80%;"/>

7. Click **Save**.


### Step 8: Define the Host URL in the REST Message in ServiceNow

1. Log in to your ServiceNow account. The ServiceNow account will have a unique URL for each developer instance in their Service Management or App Engine Studio, for example, `https://devXXX67.service-now.com` .
2. Go to **System Web Services > Outbound > REST Messages** from the left menu.
3. In the REST Messages page, click the **New** button to create a new REST Message.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img27.png" alt="REST Messages - New" title="REST Messages - New" style="border: 1px solid gray;zoom:80%;"/>

4. Copy the **WebHook URL** from the Platform AI Agent configuration page and paste it into the **Endpoint URL** field.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img28.png" alt="Endpoint URL" title="Endpoint URL " style="border: 1px solid gray;zoom:80%;"/>

5. Click **Save** to save the new REST message.

    !!! Note
    
        You can also see a list of all the REST Messages that have been configured.


### Step 9: Define Outbound REST Message Requests in ServiceNow

1. To define REST Outbound Message, navigate to **System Web Services > Outbound > REST Messages** in the left menu.
2. Select the REST Messages for which you want to define the Outbound message from the list of REST Messages. For example, search and select the _Platform – Agent Integrations_ message.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img29.png" alt="" title=" " style="border: 1px solid gray;zoom:80%;"/>

3. In the REST Message form, you can enter the API details, such as the name, endpoint URL as Callback URL from the **Configurations** page, and HTTP method.

    !!! Note
    
        This will be the endpoint through which ServiceNow will send Agent’s messages to the user.

4. To define the HTTP header, click the **HTTP Request** tab and select the **Add New Row** button.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img30.png" alt="HTTP Request - Add new row" title="HTTP Request - Add new row" style="border: 1px solid gray;zoom:80%;"/>

5. In the new row, add the HTTP Header as shown below:

    1. **HTTP Header**: Name: Content-Type, Value: application/json
    2. **Method**: Add the _POST_ method and paste the Webhook URL that you copied from the **Configurations** tab in the Endpoint field.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img31.png" alt="HTTP Request - Add header" title="HTTP Request - Add header" style="border: 1px solid gray;zoom:80%;"/>

6. Once you have entered the required details, click the **Update** button to save the REST Message.


### Step 10: Define Outbound REST Business Rules in ServiceNow

1. To define an Outbound rule, search and select the **Business Rules** under **System Definition** from the left menu.
2. Click the **New** button to configure the **Business Rule**.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img32.png" alt="Business Rule - New" title="Business Rule - New" style="border: 1px solid gray;zoom:80%;"/>

3. Enter the following business rule details:
    1. **Name** and select the **live_message** table from the **Table** drop-down.
    2. Select the Active and Advanced check boxes.
    3. Click the **When to run** tab, and select **after** from the **When** drop-down, and select the **Insert** checkbox.
    4. Add **Filter conditions** to execute this Business rule if created by is not an AI Agent_interface.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img33.png" alt="Add filter conditions" title="Add filter conditions" style="border: 1px solid gray;zoom:80%;"/>

4. Click the **Advanced** tab, add the code below and click **Submit**:

```
    var request;
    request = new sn_ws.RESTMessageV2('Platform - Agent Integrations', 'Platform - Agent Integrations');
    request.setRequestBody("{\"group\":\""+current.group+"\","formatted_message\":\""+GlideStringUtil.escapeForHomePage(current.formatted_message)+"\","sys_created_by\":\""+current.sys_created_by+"\",\"last_message\":\""+current.last_message+"\","sys_id\":\""+current.sys_id+"\"}");
    request.setRequestHeader("Content-Type", "application/json");
    var response = request.execute();

```
!!! note

    The code is optional. It is recommended to use the code when you face any issues during execution. This rule executes the API configured in REST Message.


### Step 11: Testing Configuration

This section helps you verify how the conversations from the Platform are handed over to the ServiceNow agent after enabling it. 

To verify the data exchange between the Platform AI Agent and ServiceNow agent, follow these steps:

1. Open an AI Agent for which you have enabled the ServiceNow agent.
2. Create a new Agent Transfer Node task. For example, create a _Platform Agent_ task with the _UserAgent_ node and configure it to use the ServiceNow agent. For more information, see [Agent Transfer Node](../../../../automation/use-cases/dialogs/node-types/working-with-the-agent-transfer-node.md){:target="_blank"}.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img34.png" alt="new Agent Transfer Node task" title="new Agent Transfer Node task" style="border: 1px solid gray;zoom:80%;"/>

3. Click the **Talk to Bot** icon to launch the AI Agent and enter **Help**.
4. Log in to the ServiceNow Instance, select the **Impersonate User** from the **Profile** option as shown:

    <img src="../images/configuring-the-servicenow-agent-tokyo-img35.png" alt="Profile - Impersonate user" title="Profile - Impersonate user" style="border: 1px solid gray;zoom:80%;"/>

5. Enter the Username that you created. For example, select the _Abel Tuter_ username.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img36.png" alt="Provide Username" title="Provide Username" style="border: 1px solid gray;zoom:80%;"/>

6. Select **All** and navigate to **Workspace Experience > Workspaces > Agent Workspace Home**.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img37.png" alt="Agent Workspace Home" title="Agent Workspace Home" style="border: 1px solid gray;zoom:80%;"/>

7. In the Agent Workspace page, select **Inbox** and set the **Status** to **Available**.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img38.png" alt="Set inbox status to Available" title="Set inbox status to Available" style="border: 1px solid gray;zoom:80%;"/>

8. When a user initiates the chat from the AI Agent, it transfers the conversation to the ServiceNow agent and sends a message to the user.
9. Agent receives a notification about this on ServiceNow.
10. Now, the connection between the ServiceNow agent and the user has been established, and the conversation continues.

    <img src="../images/configuring-the-servicenow-agent-tokyo-img39.png" alt="Connection established between Servicenow agent and user" title="Connection established between Servicenow agent and user" style="border: 1px solid gray;zoom:80%;"/>




### Enable Attachment Sharing with Live Agents

Follow these steps:

1. Log in to your ServiceNow account with admin user credentials.
2. Go to **System Properties** > **sys_cs_provider_application.list** > **Configure** > **Form Layout**.
3. In the **Trusted Media Domains** field, enter the domain you want to send and receive the attachments.
<img src="../images/sn-at.png" alt="Attachment Sharing" title="Attachment Sharing" style="border: 1px solid gray;zoom=60%;">

!!! note

    This feature currently supports only Tokyo versions.


### Agent Transfer Status

The platform now records the status of the agent transfer in both Debug Logs and Analytics. This information helps to analyze whether the agent transfer is successful or not. Thus, it facilitates improved tracking and troubleshooting of transfer-related issues.

### Failed Agent Transfer Notification

The platform now displays a default, non-editable message to users when a ServiceNow agent transfer fails due to agent unavailability, improving user clarity and reducing the need for repeated transfer attempts.

Default message: *No agents are available to handle your request. Please try again later*.