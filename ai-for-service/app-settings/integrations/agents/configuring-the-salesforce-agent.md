# Configuring the Salesforce Agent

Salesforce is used for various needs of different teams in an organization, such as marketing, sales, commerce, service, and IT work as one from anywhere using the chat module. The Platform’s Salesforce Agent integration allows you to seamlessly hand off the AI Agent conversations to your live agents on Salesforce.

Use the configuration steps below as general guidelines to enable the Salesforce Agent integration. You may notice minor differences based on the version of Salesforce you are using.


## Overview

Kore.ai’s agent serves as the central point of interaction for the users. TheAI Agent facilitates communication and interaction between the user and the Salesforce agent using the chat module. In addition to its regular capabilities, the AI Agent acts as an intermediary between the users and the Salesforce agents to hand over conversations seamlessly. The AI Agent also allows you to integrate with the Salesforce platform.

## Configuration

The Platform supports the following Salesforce integration methods for agent transfer:


* **Live Chat (Legacy)**: This method enables agent transfer using Salesforce’s traditional live chat interface. It suits users with existing Live Chat setups and offers real-time messaging between AI Agent and human agents.
* **Messaging for In-App and Web (MIAW)**: This is Salesforce’s latest messaging service, built for seamless and persistent conversations across in-app and web channels. MIAW offers an enhanced customer experience and is the default option for new integrations.



Before configuring a Salesforce agent, users must be enabled with the **Service Cloud User** license to ensure all options are displaying for them in the customize section of the left navigation.

### Configure Live Chat

To configure the Salesforce agent, follow these steps:

#### Step1: Set Up a Salesforce Live Agent

Set up a Salesforce Live Agent to receive messages.

1. Log in to your Salesforce account.
2. From the main menu on the top, navigate to **Setup > Customize > Chat Agent > Settings**.

    !!! Note
    
        Make sure you switch to the Classic view; the Live Agent settings do not come up under the Lightning Experience view. For detailed instructions on setting up Live Agent, visit:[https://help.salesforce.com/s/articleView?language=en_US&id=live_agent_intro.htm](https://help.salesforce.com/s/articleView?language=en_US&id=live_agent_intro.htm){:target="_blank"}

3. Find the Live Agent section under **Build > Customize > Chat > Chat Agent Configurations**.

    <img src="../images/configuring-the-salesforce-agent-img1.png" alt="Live Agent section" title="Live Agent section" style="border: 1px solid gray;zoom:80%;"/>

4. To add a new Live Agent configuration, click the **New** button.
5. In the New Live Agent Configuration form, you can enter the details for the new configuration, such as the name and description.
6. Once you have entered the required details, click the Save button to save the new Live Agent configuration.

    <img src="../images/configuring-the-salesforce-agent-img2.png" alt="Save Live Agent configuration" title="Save Live Agent configuration" style="border: 1px solid gray;zoom:80%;"/>


#### Step 2: Retrieve the Live Agent URL/API Endpoint

To retrieve the live agent URL/API endpoint, follow the steps:

1. From the main menu on the top, navigate to **Setup > Customize > Chats > Chat Sessions > Deployments**.

    <img src="../images/configuring-the-salesforce-agent-img3.png" alt="Navigate to Deployments" title="Navigate to Deployments" style="border: 1px solid gray;zoom:80%;"/>

2. In the Chat Deployments page, you will see a list of all the configured Live Agent deployments.
3. To get the Live Agent URL/API endpoint, click the name of the Live Agent deployment that you want to use.
4. In the Deployment Code region, you will find the Live Agent URL/API endpoint in the **Code** field as shown below:

    <img src="../images/configuring-the-salesforce-agent-img4.png" alt="Deployment Code region" title="Deployment Code region" style="border: 1px solid gray;zoom:80%;"/>


#### Step 3: Retrieve the Organization ID

To retrieve the Organization ID, follow these steps:

1. From the main menu on the top, navigate to **Administer > Company Settings > Company Information**.

    <img src="../images/configuring-the-salesforce-agent-img5.png" alt="Company information" title="Company information" style="border: 1px solid gray;zoom:80%;"/>

2. In the Company Information page, you will see a list of details about your organization.
3. To retrieve the Organization ID, search for the **Salesforce.com Organization ID** field.

    <img src="../images/configuring-the-salesforce-agent-img6.png" alt="Salesforce.com Organization ID" title="Salesforce.com Organization ID" style="border: 1px solid gray;zoom:80%;"/>

    !!! Note
    
        The Organization ID is a unique identifier for your Salesforce organization.

4. Copy and keep it for future use.


#### Step 4: Retrieve the Deployment ID

To retrieve the Deployment ID, follow these steps:

1. From the main menu on the top, navigate to **Setup > Customize > Chats > Chat Sessions > Deployments**.

    <img src="../images/configuring-the-salesforce-agent-img7.png" alt="Chat Sessions - Deployments" title="Chat Sessions - Deployments" style="border: 1px solid gray;zoom:80%;"/>

2. In the Chat Deployments page, you will see a list of all the configured Live Agent deployments.
3. In the Deployment Code region, you will find the **Deployment ID** in the **Code** field as shown below:

    <img src="../images/configuring-the-salesforce-agent-img8.png" alt="Deployment ID" title="Deployment ID" style="border: 1px solid gray;zoom:80%;"/>

4. Copy and keep it for future use.


#### Step 5: Retrieve the Button ID

To retrieve the Button ID, follow these steps:

1. Go to **Customize > Chats Chat Sessions > Chat Buttons & Invitations** page, and click the button that you want to use for this integration.
2. In the Chat Deployments page, you will see a list of all the configured Live Agent deployments.
3. In the Deployment Code region, you will find the **Deployment ID** in the **Code** field as shown below:

    <img src="../images/configuring-the-salesforce-agent-img9.png" alt="Button ID" title="Button ID" style="border: 1px solid gray;zoom:80%;"/>

    The Button ID is the string of characters after the last slash / in the URL. For example: [https://meya-dev-ed.my.salesforce.com/5731I000000PL9G](https://meya-dev-ed.my.salesforce.com/5731I000000PL9G){:target="_blank"}

4. Copy and save it for future use.


#### Step 6: Enable the Salesforce Agent

1. Log in to the Platform [https://bots.kore.ai/botbuilder](https://bots.kore.ai/botbuilder){:target="_blank"}.
2. Select an AI Agent for which you want to configure the Salesforce agent.
3. Navigate to **App Settings** > **Integrations** > **Agent Transfer** > **Chat** and click the **Salesforce**.

   

4. Click the Configurations tab and enter the following credentials for the Salesforce Agent:
    1. **Live Agent URL**: The live agent URL endpoint for the Salesforce, copied before.
    2. **Organization ID**: The Organization ID for the Salesforce, copied before.
    3. **Deployment ID**: The Deployment ID for the Salesforce, copied before.
    4. **Button ID**: The Button ID for the Salesforce, copied before.

    <img src="../images/configuring-the-salesforce-agent-img11.png" alt="Agent credentials" title="Agent credentials" style="border: 1px solid gray;zoom:80%;"/>

6. If you want to make Salesforce the default agent, enable the **Default Agent System for all bot channels** option.

    !!! Note
    
        This option is available only when multiple agents are configured for your AI Agent.


8. Click **Manage** to map the channels you want to use Salesforce agent for handing over the conversations. To learn more about channel enablement, see [Adding channels to your app](../../../channels/adding-channels-to-your-bot.md){:target="_blank"}.

    <img src="../images/configuring-the-salesforce-agent-img13.png" alt="Map channels to use SF agent" title="Map channels to use SF agent" style="border: 1px solid gray;zoom:80%;"/>

9. After mapping channels, click **Done**.
10. Click **Save** to enable the Salesforce agent.
11. Publish the App. For more information, see [Publishing App](../../../deploy/publishing-bot.md){:target="_blank"}.


#### Execution

This section helps you verify how the conversations from the Platform are being handed over to the Salesforce agent after enabling it.

To verify the data exchange between Kore.ai’s agent and Salesforce agent, follow these steps:

1. Go to the Salesforce Chat Console and launch the Live Agent that you created in **Step 1**.

    !!! Note
    
        The Salesforce Chat Console URL is unique for your region and company. Contact your Salesforce System Administrator to find your Chat Console URL.

2. In the Salesforce Classic Chat view, click the **Apps** icon and select the **App Launcher** option.

    <img src="../images/configuring-the-salesforce-agent-img14.png" alt="App Launcher" title="App Launcher" style="border: 1px solid gray;zoom:80%;"/>

3. In the App Launcher page, click the **Live Agent** to open the chat console as shown below:

    <img src="../images/configuring-the-salesforce-agent-img15.png" alt="Open chat console" title="Open chat console" style="border: 1px solid gray;zoom:80%;"/>

4. Open an AI Agent for which you have enabled the Salesforce agent.
5. Create a new **Agent Transfer Node** task. For example, create a **Talk to Live Agent** task with the **LiveChats** node and configure it to use the Salesforce agent. For more information, see [Agent Transfer Node](../../../automation/use-cases/dialogs/node-types/working-with-the-agent-transfer-node.md){:target="_blank"}.

    <img src="../images/configuring-the-salesforce-agent-img16.png" alt="New Agent Transfer Node task" title="New Agent Transfer Node task" style="border: 1px solid gray;zoom:80%;"/>

6. Click the **Talk to Bot** icon to launch the AI Agent and enter **Help**.
7. Once you invoke the agent transfer dialog, the Salesforce Chat Console receives a notification alert.
8. When a user initiates the chat from the AI Agent, it transfers the conversation to the Salesforce agent and sends a message to the user. Agent receives a notification about this on Salesforce.
9. Now, the connection between the Salesforce agent and the user has been established, and the conversation continues.  
<img src="../images/configuring-the-salesforce-agent-img17.png" alt="Connection established between SF agent and user" title="Connection established between SF agent and user" style="border: 1px solid gray;zoom:80%;"/>







### Configure Messaging for In-App and Web (MIAW)

To configure the Salesforce agent, follow these steps:


#### Step 1: Publish a Deployment

Create a custom client deployment that can be referenced in public REST API endpoints.


1. Complete the steps in [Prepare a Salesforce Org for Messaging for In-App and Web:](https://help.salesforce.com/s/articleView?id=service.miaw_prepare_org_1.htm&type=5)
    1. Configure Omni-Channel.
    2. Create an Omni-Channel flow to route messages.
    3. Create a Messaging for In-App and Web channels on the Messaging Settings page.
    4. Configure the Service Console to support messaging.
2. From Setup, in the Quick Find box, enter Embedded Service Deployments and select Embedded Service Deployments.
3. Click New Deployment.
4. Select Messaging for In-App and Web, and then click Next.
5. Click Custom Client, and then click Next.
6. Name your Embedded Service deployment, and customize the API name if desired.
7. Select the Messaging for In-App and Web channels that you created earlier. If you haven’t created one yet, go to the Messaging Settings page and do so.
8. Save your work.
9. Create and publish your new deployment, which takes a few minutes. Don’t navigate away from the page until it’s complete.



#### Step 2: Retrieve Organization ID, Organization Base URL, and Developer Name


1. Log in to your Salesforce account.
2. Click your profile icon in the top-right corner, then select Setup.
3. In the Quick Find search bar on the left panel, type Embedded Service Deployments and select it. Select the Messaging Channel and then select Code Snippet.  <img src="../images/miaw-embedded-system.png" alt="Connection established between SF agent and user" title="Connection established between SF agent and user" style="border: 1px solid gray;zoom:80%;"/>

4. From the Code Snippet, copy Organization ID, Organization Base URL, and Developer Name.  <img src="../images/miaw-code-snippet.png" alt="Connection established between SF agent and user" title="Connection established between SF agent and user" style="border: 1px solid gray;zoom:80%;"/>



#### Step 3: Enable the Salesforce Agent

1. Log in to the Platform [https://bots.kore.ai/botbuilder](https://bots.kore.ai/botbuilder){:target="_blank"}.
2. Select an AI Agent for which you want to configure the Salesforce agent.
3. Navigate to **App Settings** > **Integrations** > **Agent Transfer** > **Chat** and click the **Salesforce**.

   

4. On the Configurations tab, select **Messaging for In-App and Web(MIAW)** and enter the following credentials for the Salesforce Agent:
    * **Organization ID**: The Organization ID for Salesforce, copied before.
    * **Organization Base URL**: The Deployment ID for Salesforce, copied before.
    * **Developer Name**: The Salesforce developers, copied before.  
    <img src="../images/miaw-metadata9.png" alt="Agent credentials" title="Agent credentials" style="border: 1px solid gray;zoom:80%;"/>

6. If you want to make Salesforce the default agent, enable the **Default Agent System for all bot channels** option.

    !!! Note
    
        This option is available only when multiple agents are configured for your AI Agent.


8. Click **Manage** to map the channels you want to use Salesforce agent for handing over the conversations. To learn more about channel enablement, see [Adding channels to your bot](../../../channels/adding-channels-to-your-bot.md){:target="_blank"}.

    <img src="../images/miaw-map.png" alt="Map channels to use SF agent" title="Map channels to use SF agent" style="border: 1px solid gray;zoom:80%;"/>

9. After mapping channels, click **Done**.
10. Click **Save** to enable the Salesforce agent.
11. Publish the App. For more information, see [Publishing App](../../../deploy/publishing-bot.md){:target="_blank"}.

## Additional Capabilities


The Salesforce MIAW Agent Integration supports agent name display, real-time read receipts, automatic inactivity timeouts, UI-based configuration of standard responses and stop words, and metadata transfer for context. These enhancements improve the agent experience, streamline session handling, and simplify configuration through the Salesforce interface.

### Internal Agent Transfer and Conference Handling

The Platform offers seamless agent transfers and conferencing capabilities within Salesforce MIAW. These features ensure uninterrupted customer support sessions, smooth agent transitions, and real-time updates for end-users. 
 
* **Session Continuity**: The chat session lifecycle is decoupled from individual agent disconnections, ensuring the session remains active as long as at least one agent or the customer is engaged.  
* **Seamless Transitions**: The Platform utilizes Salesforce Server-Sent Events (SSE) to handle agent transfers, joins, and exits during transfer and conference scenarios, enabling smooth handoffs between agents.  
* **Transparent Communication**: Customers receive clear, real-time system messages during agent transfers and conferences, keeping them informed about the status of their support session.

### Display of Agent Name

Salesforce automatically displays the human agent’s name in the chat once they join the conversation.


### Read Receipts

The Salesforce and the Platform show real-time read receipts for both agent and user messages. Salesforce triggers the agent-to-user read receipts through events.


### Inactivity Session Closure

The Salesforce Integration allows you to configure automatic session end after a specified duration of user inactivity. For more information on configuration, refer to [Automatically Mark Messaging Sessions Inactive](https://help.salesforce.com/s/articleView?id=release-notes.rn_miaw_automatic_inactive.htm&release=244&type=5).


### Configurable Standard Responses

Salesforce enables the full configuration of system messages displayed to end-users during agent handoffs and live chat sessions, including wait time alerts, agent join messages, and session closure prompts. For more information on configuration, refer to [Auto-Response Components](https://help.salesforce.com/s/articleView?id=service.messaging_components_auto_response.htm&type=5).


### Conversation Stop Word Configuration

The Salesforce Integration enables end-users to end live agent sessions using a keyword configured in the Salesforce console. This helps reduce agent occupancy when the session is no longer actively needed. For more information on configuration, refer to [Customize the Messaging](https://help.salesforce.com/s/articleView?id=service.messaging_consent_status.htm&type=5).

### Salesforce MIAW Conversation ID

The platform now exposes the Salesforce MIAW conversation ID in the bot user context during agent transfer. This enables Message, Script, and Call Flow nodes, as well as external integrations, to access the active MIAW conversation identifier at runtime for tracking, correlation, and conditional logic.

The conversation ID is available at the following context path: `context.session.BotUserSession.agentHandoffMeta.conversationId`



### Pass Metadata or User Information to the Salesforce Agent System

The platform automatically transfer comprehensive user context to Salesforce agents during handoffs, including usernames, case IDs, and other details. You can customize which metadata gets passed by configuring the script node before agent transfer. This seamless context sharing provides agents with complete conversation visibility, eliminating the need for users to repeat information and accelerating issue resolution.

Sample Script:

``` json
let miawMetaInfo = {};
miawMetaInfo.preChatInfo = {
"Pincode": "50xxxx",
"City": "Hyderabad",
"Country": "India"
};
context.session.BotUserSession.miawMetaInfo = miawMetaInfo;
```

Follow the steps to transfer the metadata and populate it on the Salesforce dashboard:

* [Step 1: Configure Salesforce Agent in AI for Service](#step-1-configure-salesforce-agent-in-ai-for-service)

* [Step 2: Update Messaging Session Object In Salesforce](#step-2-update-messaging-session-object-in-salesforce)

* [Step 3: Map Custom Parameter In Salesforce](#step-3-map-custom-parameter-in-salesforce)

* [Step 4: Add Pre-Chat Field in Embedded Service Deployment in Salesforce](#step-4-add-pre-chat-field-in-embedded-service-deployment-in-salesforce)

* [Step 5: Create a Flow to Update Messaging Session in Salesforce](#step-5-create-a-flow-to-update-messaging-session-in-salesforce)





#### Step 1: Configure Salesforce Agent in AI for Service

Follow these steps: 



1. Log in to Platform and navigate to App Settings > Integrations > Agent Transfer > Chat > Salesforce.
2. On the Configurations tab, select **Messaging for In-App and Web(MIAW)** and enter the following credentials for the Salesforce Agent:
    * **Organization ID**: The Organization ID for Salesforce, copied before.
    * **Organization Base URL**: The Deployment ID for Salesforce, copied before.

        !!! note

            If your base URL is `example.my.salesforce.com`, enter it as `https://example.my.salesforce-srct.com`.

    * **Developer Name**: The developer's name, copied before.  
    <img src="../images/miaw-metadata9.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>


3. Click Save.
4. Go to the Dialogflow and insert a Script Node before the Agent Transfer Node.
5. Use the sample script to configure the metadata to be transferred in the key-value pair. 



#### Step 2: Update Messaging Session Object In Salesforce

Follow these steps: 



1. Log in to the Salesforce account.
2. Navigate to Object Manager > Messaging Session > Fields & Relationships.
3. Click New to create a custom field.
4. Select the Data Type and click Next.
5. Enter the Field Label, Length, and Field Name values. Click Next.  
<img src="../images/miaw-metadata7.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>

6. Check the Visibility and Ready-only check boxes as required. Click Next.  
<img src="../images/miaw-metadata6.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>
7. Click Save. Ensure to create a custom field for each field of metainfo.  
<img src="../images/miaw-metadata8.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>



#### Step 3:  Map Custom Parameter In Salesforce

Follow these steps: 



1. Navigate to Feature Settings > Service > Messaging > Messaging Settings.
2. Locate and click on the Messaging Channel on which you want to map the custom parameter, for example, CustomClientTest.  
<img src="../images/miaw-metadata2.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>

3. In the Custom Parameter, click New map parameter.
4. Enter Parameter Name, Parameter API Name, Channel Variable Name, Data Type, and Maximum Length. Click Save.  
<img src="../images/miaw-metadata3.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>


5. In Parameter Mappings, click New to add your custom parameter to the flow or agent task.
6. Enter the Parameter and Flow Variable Name. Click Save.  
<img src="../images/miaw-metadata10.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>

7. Scroll to the top and click Active.


#### Step 4: Add Pre-Chat Field in Embedded Service Deployment in Salesforce

Follow these steps: 



1. Navigate to Feature Settings > Service > Embedded Service > Embedded Service Deployments. The Embedded Service Deployment Settings page is displayed.
2. Click the Messaging Channel and click Edit Pre-Chat.  
<img src="../images/miaw-metadata12.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>

3. In the Visible Pre-Chat Fields section, click Add. Select the field type to add the created field, which is available in the Hidden Pre-Chat Fields section.  
<img src="../images/miaw-metadata1.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>

4. Select the Field Type and Channel Variable Name. Click Save.  
<img src="../images/miaw-metadata5.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>

5. Once the field is added in the Visible Pre-Chat Fields section, you can optionally mark it as required. Scroll down and click Save.
6. Click Publish in the top right corner.


#### Step 5: Create a Flow to Update Messaging Session in Salesforce

Follow these steps: 


1. Navigate to Process Automation > Flows.
2. Select the configured flow for the Messaging Channel, or create and configure a new one. 
   <img src="../images/miaw-metadata11.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>

3. In the Toolbox, click New Resource. Select the Resource Type, API Name, Data Type, and Availability Flow. Click Done.

    !!! note

        Ensure the flow variable matches the API name of your custom Messaging Session field. This enables seamless metadata transfer from the Platform to Salesforce, providing agents with complete context. 

4. Click Update Records and set the field values for the messaging session records.  
<img src="../images/miaw-metadata4.png" alt="Salesforce" title="Salesforce Metadata" style="border: 1px solid gray;zoom:80%;"/>

5. Save the updated record as a New version and then click Activate.