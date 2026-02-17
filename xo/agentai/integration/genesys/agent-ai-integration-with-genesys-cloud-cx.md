# Agent AI Integration with Genesys Cloud CX

Integration of Agent AI in Genesys is a significant enhancement to our solution. Previously limited to a single AI Agent and a department-specific approach, the solution has now been upgraded to support multiple bots and a queue-based functionality. This enhancement enables Genesys Cloud CX to offer a more flexible and scalable solution for businesses seeking to leverage AI to improve agent efficiency and customer satisfaction across multiple departments.

!!! note

    This integration process also works for Genesys Desktop App.

## Definitions 

| **Section/Group** | **Key** | **Definition** | **Reference** |
|--------------------|---------|---------------|---------------|
| Generate Oauth ID to enable Kore Services to Connect with Genesys<br>+<br>Create an Interaction Widget in Genesys for Agent AI | <span id="AAI">Agent AI URL</span> | The domain of the Agent AI. | - If it is legacy Agent AI, URL is [https://agentassist.kore.ai](https://agentassist.kore.ai){:target="_blank"}<br>- If it is UXO, URL is [https://platform.kore.ai](https://platform.kore.ai){:target="_blank"}<br>- If it is on-prem, the URL is the origin where your Agent AI is hosted. |
|  | Client App | To use any Kore AI Agent SDKs, a client app must be created to get the authentication credentials to communicate between the Kore AI Agent and Agent AI.<br>**Note:** Only the default Client App is supported. | [https://docs.kore.ai/xo/channels/add-web-mobile-client/adding-the-webmobile-client-channel](../../../channels/add-web-mobile-client.md){:target="_blank"} |
| Create an Interaction Widget in Genesys for Agent AI | Custom Data / x_passthru_metadata | Use this to pass information to Kore AI Agent. |  |
| Capture AI Agent Information in Kore Data Table | Secure Custom Data / KvpConfig | Use this to pass sensitive information to Kore AI Agent. | [https://docs.kore.ai/xo/sdk/sdk-security/json-web-encryption-jwe](../../../sdk/sdk-security.md#json-web-encryption-jwe){:target="_blank"} |
| Create an Interaction Widget in Genesys for Agent AI | Interaction Widget | The Interaction Widget is utilized for displaying the Agent AI iframe within the Genesys Agent Desktop. | [https://help.mypurecloud.com/articles/set-up-an-interaction-widget-integration](https://help.mypurecloud.com/articles/set-up-an-interaction-widget-integration){:target="_blank"} |
| Create an Interaction Widget in Genesys for Agent AI | Interaction Widget URL params | - **“multibot=true”** represents usage of new version of Agent AI integration that supports agent specific AI Agent<br>- **“x_metadata”** – URL-encoded JSON containing data required by Kore Middleware service<br>- **“x_passthru_metadata”** – Optional, can be JWE/JWT/base64/URL-encoded JSON stored as custom data | **x_metadata** JSON object structure:<br>`{`<br>`"datatable":{`<br>`"name":<datatable name>,`<br>`"token":<jwt token>,`<br>`"qDelimiter":<Paste the special character used in the queue name>`<br>`}}` |
| Capture AI Agent Information in Kore Data Table | BotId | A unique identifier assigned to an AI Agent. | Agent AI > Flows & Channels > Digital > Web/Mobile Client > JWT App Details |
| Capture AI Agent Information in Kore Data Table | ClientId | An identifier provided to a client application. | Agent AI > Flows & Channels > Digital > Web/Mobile Client > JWT App Details |
| Capture AI Agent Information in Kore Data Table | ClientSecret | A secret key or password associated with the ClientId. | Agent AI > Flows & Channels > Digital > Web/Mobile Client > JWT App Details |
| Capture AI Agent Information in Kore Data Table | AgentAssistWidgetURL | URL that points to the Agent AI widget.<br>For example: `https://agentassist.kore.ai/koreagentassist-sdk-v3/UI/agentassist-iframe.html` | Agent AI > Flows & Channels > Digital > Web/Mobile Client > JWT App Details |
| Capture AI Agent Information in Kore Data Table | AudiohookEnabled | A setting or flag indicating whether Kore audio processing is enabled for the AI Agent. | **true** if Kore audio processing should be enabled, otherwise **false**. |
| Capture AI Agent Information in Kore Data Table | QueueIdentifier | A unique identifier in the Data Table to fetch AI Agent details at run time. |  |
| Capture AI Agent Information in Kore Data Table | KvpConfig | The KVPs (Key value pairs) to be included in SecureCustomData. JSON object containing the necessary keys and xpath (paths to locate the value in Genesys Conversation API result JSON object). [Genesys API Explorer](https://developer.genesys.cloud/devapps/api-explorer#get-api-v2-conversations--conversationId){:target="_blank"}<br>**Note:** Optional column. Required when you wish to send secure custom data to Agent AI. | **Sample:**<br>`{`<br>`"queueName": "participants[0].queueName",`<br>`"callStatus": "participants[0].calls[0].state"`<br>`}` |
| Capture AI Agent Information in Kore Data Table | JWEPublicKey | Public key assigned to the Client App. | Agent AI > Flows & Channels > Digital > Web/Mobile Client > JWT App Details |
| Capture AI Agent Information in Kore Data Table | RSPrivatePem | The Private Key that corresponds to the Public Key supplied during the creation of a Client App using the RS256 or RS512 algorithm. | **RSPrivatePemKey** is an optional column and is required when the **algorithm** used is **RS256** or **RS512**.<br>(Not supported / Will be supported in future releases) |
| Capture AI Agent Information in Kore Data Table | Algorithm | Algorithm assigned to the Client App. | Currently, “HS256” algorithm is the only supported value. So, the **algorithm** value will always be **HS256**. |
| Install Audiohook for Voice Streaming | Kore Voice Gateway (KVG) | For SaaS in US region, value is `savg-webserver.kore.ai`.<br>For on-prem, refer to corresponding host. |  |

## Architecture Diagrams

**Chat**

<img src="../kore-data-table/architecture-diagram-chat-1.png" alt="architecture-diagram-chat" title="architecture-diagram-chat" style="border: 1px solid gray; zoom:80%;">

**Voice**

<img src="../kore-data-table/architecture-diagram-voice-2.png" alt="architecture-diagram-voice" title="architecture-diagram-voice" style="border: 1px solid gray; zoom:80%;">

## Interaction Sequence 

<img src="../kore-data-table/interaction-sequence-3.png" alt="interaction-sequence" title="interaction-sequence" style="border: 1px solid gray; zoom:80%;">

This document provides detailed, step-by-step instructions for setting up the integration of the Agent AI widget in the Genesys environment.

## Activities on Kore Platform

* [Capture AI Agent information in Kore Data Table](#capture-ai-agent-information) 
* [Access Custom Data and Secure Custom Data in AI Agent](#access-custom-data-and-secure-custom-data-in-ai-agent)

## Activities on Genesys Cloud

* [Generate Oauth ID to enable Kore Services to Connect with Genesys](#generate-oauth-id-to-enable-kore-services-to-connect-with-genesys)
* [Create an Interaction Widget in Genesys for Agent AI](#create-an-interaction-widget-in-genesys-for-agent-ai)
* [Provide Interaction Widget Access to Agents](#provide-interaction-widget-access-to-agents)
* [Create a Queue in Genesys](#create-a-queue-in-genesys)

## Chat Setup

* [Create/Update Architect Inbound Message Flow in Genesys for the Agent Queue](#createupdate-architect-inbound-message-flow-in-genesys-for-the-agent-queue)
* [Create Messenger Configuration](#create-messenger-configuration)
* [Create Messenger Deployment](#create-messenger-deployment)
* [Steps to start a Chat Request Simulation](#steps-to-start-a-chat-request-simulation)

## Voice Setup

* [(Optional) Install Audiohook for Voice Streaming](#optional-install-audiohook-for-voice-streaming)
* [Create/Update an Architect Inbound Call Flow in Genesys for the Agent Queue](#createupdate-architect-inbound-call-flow-in-genesys-for-the-agent-queue)
* [Steps to start a Voice Request Simulation](#steps-to-start-a-voice-request-simulation)

## Prerequisites

* Genesys Administrator having access to Genesys Cloud account with Admin rights.
* Kore Administrator having access to [Kore.ai](https://platform.kore.ai){:target="_blank"} Agent AI instance.

## Capture AI Agent Information

### Genesys Data Table

This step involves creating a Genesys Data Table with Agent AI bot details. 

!!! note

    The configuration data is stored directly in the Custom Fields of the Data Table, not in a Data Table row. A single Data Table represents a configuration of AgentAssist. In other words, the Default Values of the Custom Fields contain the necessary configuration data to load the AgentAssist widget.  

1. Sign in to **Genesys Cloud**.
2. Go to **Admin** > **Architect** > **Data Tables**. 
    <img src="../images/architect-data-tables.png" alt="architect-data-tables" title="architect-data-tables" style="border: 1px solid gray; zoom:80%;">   

3. Create a new Data Table by clicking the **+ Add** button, as highlighted on the following screenshot:   
    <img src="../images/add-data-table.png" alt="add-data-table" title="add-data-table" style="border: 1px solid gray; zoom:80%;">   

4. Provide a relevant name, such as KoreaiAA-configuration, and then click **Save**.  
    <img src="../images/create-data-table.png" alt="create-data-table" title="create-data-table" style="border: 1px solid gray; zoom:80%;">  

    !!! note

        **Reference Key** label must be set to “agentAssist”. This is the value used by the Interaction Widget to load the configuration data.  

    5. Click the 'pencil' icon to edit a data table.  
        <img src="../images/pencil-icon.png" alt="pencil-icon" title="pencil-icon" style="border: 1px solid gray; zoom:80%;">   

        !!! note 
            Do not click on the data table name.  

5. Click the **Add Field** button under **Custom Fields** to create five custom fields to provide the AgentAssist configuration. Set the data type for all custom fields as **String** while adding.  
    <img src="../images/custom-fields-add-field.png" alt="custom-fields-add-field" title="custom-fields-add-field" style="border: 1px solid gray; zoom:80%;">  

    <img src="../images/add-field-string.png" alt="add-field-string" title="add-field-string" style="border: 1px solid gray; zoom:80%;">   

6. Add the custom fields with Bot details.  
    <img src="../images/bot-details.png" alt="bot-details" title="bot-details" style="border: 1px solid gray; zoom:80%;">  

7. Follow the below conventions for other custom fields. Use the exact names, including upper/lower case.  

These values are found in the **Agent AI** > **Flows & Channels** > **Channels** > **Digital** > **Web/Mobile Client** > **JWT App Details** section. 

|                      |                                         |
|----------------------|-----------------------------------------|
| **Field Label**          | **Default Value**                           |
| AgentAssist URL      | <a href="#AAI">Agent AI URL</a>                            |
| Bot Id               | `st-8cb94691-xxxx-xxxx-xxxx-xxxxxxxx`     |
| Client Id            | `cs-b60f544d-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |
| Client Secret        | &lt;secret-key from AgentAssist>        |
| is Audiohook Enabled | true / false                            | 

!!! notes

    1. All the custom fields should be of the **string** type.
    2. If the **is Audiohook Enabled** option is false, the application tries to utilize the Genesys native transcriptions using the Transcriptions API.  

To change the values, you must click the gray box surrounding each Custom Field, not directly on the text box.  
<img src="../images/enable-audiohook.png" alt="enable-audiohook" title="enable-audiohook" style="border: 1px solid gray; zoom:80%;">   

### Third-Party Configuration 

[Third-Party Configuration](./../../configuration/third-party-configuration.md){:target="_blank"} is used to map Agent AI bots to specific queues. Within this configuration, you can define the bot's language, custom data configuration, or secure custom data configuration. 

For example, if you want to associate Agent AI Bot1 with Queue1, and Agent AI Bot2 with Queue2, you need to:  

* Create a record in Third Party Configuration for Agent AI Bot1, setting the Queue Identifier as Queue1.
* Create a record in Third Party Configuration for Agent AI Bot2, setting the Queue Identifier as Queue2.

This setup ensures that the correct Agent AI widget renders for conversations routed through the defined queues.

!!! notes

    * Custom Data is currently not supported.
    * One queue can not be mapped to multiple Agent AI bots.

Refer to [this doc](./../../configuration/third-party-configuration.md){:target="_blank"} for instructions on creating records in Third-Party Configuration for an Agent AI Bot. 

**Example**: 

You have a queue named **Chat_Skill** that handles incoming chat requests, and you want the Agent AI widget to render to this queue. You must create the following details of the Third-Party Configuration record in your Agent AI account: 

<img src="../images/create-record.png" alt="create-record" title="create-record" style="border: 1px solid gray; zoom:80%;"> 

<img src="../images/add-value.png" alt="add-value" title="add-value" style="border: 1px solid gray; zoom:80%;">  

!!! note

    The **Values** should be **base64 encoded**.

<img src="../images/third-party-configuration.png" alt="third-party-configuration" title="third-party-configuration" style="border: 1px solid gray; zoom:80%;">  

!!! note

    Ensure the **Third Party Configuration** setting is enabled in **Widget Settings** > **Agent AI General Settings**.  

### Kore Data Table 

Data Tables are used to store agent queue-specific AI Agent credentials. Each record of the Kore Data Table represents a unique Genesys agent queue and its corresponding AI Agent definitions. 

If a single AI Agent is used for several queues, create a record and insert the queue names, separated by commas, as the value for the QueueIdentifier, along with the AI Agent details.

Kore.ai matches the third-party queue name with the "QueueIdentifier" credential name in its AI Agent credentials to render the appropriate AI Agent.

* AI Agent credentials are fetched based on Genesys desktop queue names. If the Genesys queue name is of the “&lt;QUEUEIDENTIFIER>&lt;QDELIMITER>XXXXX” format, for example “ALPHAINC_CUSTOMERSERVICE_16092024,” then:
* QueueIdentifier = **ALPHAINC** and <span id="qdl">qDelimiter</span> = “**_**”.
* Update the QueueIdentifier in the Kore datatable.
* Update the qDelimiter in the [Create an Interaction Widget in Genesys for Agent AI](#create-an-interaction-widget-in-genesys-for-agent-ai) section.

!!! note

    Multiple records with different AI Agent credentials shouldn't be entered into the Kore Data Table for a single QueueIdentifier.

### How to create a New Data Table

1. Sign in to Kore.ai [XO Platform](https://platform.kore.ai){:target="_blank"}.
2. Click **Data** > **Data Tables**. 
3. Click **New Table**.  
<img src="../kore-data-table/new-table-4.png" alt="new-table" title="new-table" style="border: 1px solid gray; zoom:80%;">

4. Enter the following details in the **New Table** page:
    1. **Name** of the Data Table (any alphanumeric name).
    2. **Description** of the Data Table.
    3. **Columns** to be included in the Data Table. Click the “tick” mark to add multiple columns.  
    <img src="../kore-data-table/multiple-columns-5.png" alt="multiple-columns" title="multiple-columns" style="border: 1px solid gray; zoom:80%;">  
    
        Add the following **case-sensitive** columns with type “string”:

        **Mandatory Columns**:

        * QueueIdentifier (unique identifier for the table)
        * BotId
        * ClientId
        * ClientSecret
        * AgentAssistWidgetURL
        * AudiohookEnabled
        * JWEPublicKey

        **Optional Columns**:

        * KvpConfig
        * Algorithm (HS256)
        * RSPrivatePem (Ignore/Not Supported)
        * isAgentAISDK 

    4. **Indexes** for the table. 
        * **Index Name** for reference.
        * **Is Unique** flag to define if the index is expected to contain unique values. (Enable “‘is Unique.”)
        * **Column & Sort Order** – List of columns to be included in the index; you can select multiple columns and specify the sort order (ascending or descending) for each of the selected columns. (Select QueueIdentifier with ascending order.)  
        <img src="../kore-data-table/queue-finder-6.png" alt="queue-finder" title="queue-finder" style="border: 1px solid gray; zoom:80%;">
        
    5. **AI Agent Assignments** (not applicable).
    6. **App Assignments** to let apps access data in this table.
        1. Select any app from the displayed list, or click **Create New App** and enter your app name:  
        <img src="../kore-data-table/create-new-app-7.png" alt="create-new-app" title="create-new-app" style="border: 1px solid gray; zoom:80%;">

        2. Select the **Read**, **Write**, and **Delete** permissions, as required.  

            !!! note
                You can also create new apps by clicking **Data** > **Apps** > **New App** in the home page:   

            <img src="../kore-data-table/apps-new-app-8.png" alt="apps-new-app" title="apps-new-app" style="border: 1px solid gray; zoom:80%;">

    7. **Process Assignments** (not applicable).
5. Click **Create** to create the new data table.  
<img src="../kore-data-table/create-new-data-table-9.png" alt="create-new-data-table" title="create-new-data-table" style="border: 1px solid gray; zoom:80%;">

### Insert data into Data Table

Set up necessary permissions and app assignments and insert AI Agent-specific data into the Data Table.

1. Sign in to Kore.ai [XO Platform](https://platform.kore.ai){:target="_blank"}.
2. Click **Data** > **Apps**.
3. Select the **App** with “write” access to the Data Table where you want to add information.  
<img src="../kore-data-table/app-write-access-10.png" alt="app-write-access" title="app-write-access" style="border: 1px solid gray; zoom:80%;">  

4. Copy **Client ID** and **Client Secret** of the App. 
5. Create a JWT Token using the **Client ID** and **Client Secret** by following this [doc](./../../../apis/automation/api-introduction.md#generating-the-jwt-token){:target="_blank"}.
6. Insert the following data into the Data Table by following this [doc](./../../../apis/automation/data-insert.md){:target="_blank"}. Use the JWT Token created in the previous step.

    **API Body Payload Structure**:
    ```
    {
        "data": {
            "QueueIdentifier": <Unique QueueIdentifier>,
            "BotId": <Kore BotId>,
            "ClientId": <Kore ClientId>,
            "ClientSecret": <Kore ClientSecret>,
            "AudiohookEnabled": "true" / "false",
            "AgentAssistWidgetURL": <Kore Agent AI Widget URL>,
            "KvpConfig": <KVPs of SecureCustomData>,
            "JWEPublicKey": <Public Key assigned to Client App>,
            "Algorithm": "HS256"
        }
    }
    ```

    !!! notes

        * For a single queue, the QueueIdentifier value contains one queue name (for example, “Kore”). For multiple queues, it includes all the queue names separated by commas (for example, “Kore, KoreSupport”).
        * JWEPublicKey and KvpConfig value should be a stringified JSON object. 

**Single Queue Example**  
<img src="../kore-data-table/single-queue-example-11.png" alt="single-queue-example" title="single-queue-example" style="border: 1px solid gray; zoom:80%;"> 

**Multiple Queues Example**  
<img src="../kore-data-table/multiple-queues-example-12.png" alt="multiple-queues-example" title="multiple-queues-example" style="border: 1px solid gray; zoom:80%;">

## **Generate Oauth ID to enable Kore Services to Connect with Genesys**

**Steps to get Genesys OAuth ID**:  

1. Sign in to **Genesys Cloud**.
2. Go to **Admin** > **Integrations** > **OAuth**.  
    <img src="../kore-data-table/single-queue-example-13.png" alt="single-queue-example" title="single-queue-example" style="border: 1px solid gray; zoom:80%;">  
3. Click **Add Client**. 
4. Enter the **app name**, **description**, and **token duration** in the **App Name**, **Description**, and **Token Duration** fields. 
5. Select **Token Implicit Grant (Browser)** in the **Grant Types** section.  
    <img src="../kore-data-table/token-implicit-grant-14.png" alt="token-implicit-grant" title="token-implicit-grant" style="border: 1px solid gray; zoom:80%;"> 
6. Add {<a href="#AAI">[Agent AI URL]</a>}/koreaiaa-genesys/ in the **Authorized redirect URIs** field. 
7. Add the following list of scopes in the **Scope** section: 
    * conversations
    * conversations:readonly
    * integrations
    * integrations:readonly
    * messaging
    * messaging-platform
    * messaging-platform:readonly
    * messaging:readonly
    * notifications
    * user-basic-info
    * web-chat
    * web-chat:readonly

<img src="../kore-data-table/authorized-redirect-uris-15.png" alt="authorized-redirect-uris" title="authorized-redirect-uris" style="border: 1px solid gray; zoom:80%;">

After saving the configuration, you get the **Client Id** of the created OAuth client. Copy the ID and have it available for 
[the next step](#create-an-interaction-widget-in-genesys-for-agent-ai).

## **Create an Interaction Widget in Genesys for Agent AI**

Create a new Interaction Widget. This widget is hosted in the Genesys agent desktop and provides the Agent AI solution features to agents.

**Steps to create an Interaction Widget**: 

1. Sign in to **Genesys Cloud**. 

2. Click **Admin** > **Integrations**.  
3. If you have not created an Interaction Widget for Agent AI, install a new **Interaction Widget** by clicking the **Integrations** tab on the right side of the page.  
    <img src="../kore-data-table/genesys-cloud-integrations-16.png" alt="genesys-cloud-integrations" title="genesys-cloud-integrations" style="border: 1px solid gray; zoom:80%;">

    <img src="../kore-data-table/interaction-widget-17.png" alt="interaction-widget" title="interaction-widget" style="border: 1px solid gray; zoom:80%;">

4. Name the **Interaction Widget** with a meaningful name, such as KoreaiAA Interaction Widget.
5. Open the **Interaction Widget** by clicking the name. 
6. Go to the **Configuration** tab of the Interaction Widget.  
<img src="../kore-data-table/interaction-widget-configuration-18.png" alt="interaction-widget-configuration" title="interaction-widget-configuration" style="border: 1px solid gray; zoom:80%;">

7. In the **Application URL** field, enter the following structure:  
```{[Agent AI URL](https://platform.kore.ai)}[/koreaiaa-genesys/?conversationid={{gcConversationId}}&lang={{gcLangTag}}&environment={{gcHostOrigin}}&genesysid=](https://agentassist.kore.ai/koreaiaa-genesys/?conversationid={{gcConversationId}}&lang={{gcLangTag}}&environment={{gcHostOrigin}}&genesysid=)&lt;genesys-oauth-Id>&x_passthru_metadata=&lt;Token>&showWidget=true/false&sendEventsToVG=true/false.``` 

    !!! notes

        * x_passthru_metadata is an optional query parameter. This is required when you wish to pass custom data to Agent AI.
        * showWidget: Determines whether the Agent AI widget should be displayed during agent transitions.
            * Set to **true** to display the widget for Agent 1, if Agent 1 exits and Agent 2 takes over the conversation.
            * Set to **false** if you do not want the widget to be displayed during these transitions.
        * sendEventsToVG: Determines whether events should be sent to KVG to pause or resume transcriptions when a call is placed on hold or resumed. This helps reduce Automatic Speech Recognition (ASR) costs by avoiding transcription of hold music from Genesys.
            * Set to **true** to enable the new Audiohook flow for transcriptions, which uses the configurations provided under the Advanced Settings.
            * Set to **false** to continue using the old Audiohook flow for transcriptions. 

Add the following parameters to the Application URL based on the approach used for storing bot details.

**Kore Data Table**: **&multibot=true&x_metadata=&lt;?x=%7B%22datatable%22%xxxxx>**
The “x_metadata” value equals the URL-encoded string of JSON object.  

**Third Party Configuration**: **&accountId=&lt;bot-account-id>**  
You can fetch the accountId from the **Agent AI > Flows & Channels > Digital > Web/Mobile Client > JWT App Details** page.


The “`x_metadata`” value equals the `URL`-`encoded string` of the JSON object. 

1. For the **oauthId** value, use the **OAuth ID** from the [Generate Oauth ID](#generate-oauth-id-to-enable-kore-services-to-connect-with-genesys) section. 

2. Build **x_metadata**: 

    1. Sign in to [Kore XO Platform](https://platform.kore.ai){:target="_blank"}. 
    2. Click **Data** > **Data Tables,** and copy the **Data Table** name:  
        <img src="../kore-data-table/copy-data-table-name-19.png" alt="copy-data-table-name" title="copy-data-table-name" style="border: 1px solid gray; zoom:80%;">  
    3. Click **Apps**, and click one of the app names that has “read” access:  
        <img src="../kore-data-table/click-apps-read-access-20.png" alt="click-apps-read-access" title="click-apps-read-access" style="border: 1px solid gray; zoom:80%;"> 
    4. Copy the **Client ID** and **Client Secret** values.  
        <img src="../kore-data-table/client-id-client-secret-values-21.png" alt="client-id-client-secret-values" title="client-id-client-secret-values" style="border:1px solid gray; zoom:80%;">

    5. Create a **JWT Token** using the **Client ID** and **Client Secret** by following this [doc](./../../../apis/automation/api-introduction.md#generating-the-jwt-token). 

    6. Generate a **JSON object** with the specified structure, and then convert it into a URL-encoded string:

        ```
        {
                       "datatable": {
                            "name": <paste datatable name>,
                            "token": <paste token created in previous step>,
                            "qDelimiter": <Paste the special character used in the queue name to distinguish the QueueIdentifier from the remaining part of the queue name>
                        }
        }
        Website for url encoding - urlencoder
        ```
            Reference:  
            <img src="../kore-data-table/java-script-demo-22.png" alt="java-script-demo" title="java-script-demo" style="border: 1px solid gray; zoom:80%;">

    7. Copy the URL-encoded string and paste it against the **x_metadata** value. 

8. Allow all permissions in **iFrame Sandbox Options** and **iFrame Feature/Permission Policy**: 
 
**iFrame Sandbox Options**: allow-forms,allow-modals,allow-popups,allow-presentation,allow-same-origin,allow-scripts,allow-downloads. 

**iFrame Feature/Permission Policy**: camera,microphone,geolocation,clipboard-write,display-capture,fullscreen. 

**Communication Type Filtering**: chat and call.

## Provide Interaction Widget access to agents

To view the Interaction Widget, agents must have the following accesses:

### Group Membership

An Interaction Widget uses Group Membership to determine who can view it on the agent desktop.

1. Use an existing Group, if your agents are already part of it. Otherwise, create a new Group for Agent AI permission.
2. Name the Group as **KoreAA-Agents** or similar to distinguish it.  
3. Add any agent to allow them to use the Agent AI functionality. You can utilize more than one Group, if required.
4. Go back to the **Integrations** section and open the **Interaction Widget** created in the [Create an interaction widget](#create-an-interaction-widget-in-genesys-for-agent-ai) section. 
5. On the **Configuration** tab, add access using the Group you identified or created for Agent AI in the Group Filtering option.  
You may also utilize Queue Filtering (optional).  
<img src="../kore-data-table/group-filtering-23.png" alt="group-filtering" title="group-filtering" style="border: 1px solid gray; zoom:80%;">

### Custom Role/Permission

 In addition to the basic agent role, add a new role as given below:

1. Sign in to **Genesys Cloud**.
2. Go to **Admin** > **People & Permissions** > **Roles / Permissions**. 
3. Click **Add Role** to create a new role.
4. Give a distinctive name to the role; for example, KoreaiAA Agent.
5. On the **Permission** tab, search for **Conversation** > **Transcription** > **View**, and add (select the box):  

    !!! note

        The Conversation permission is available only in the CX3 license.
6. Once finished, the **Assigned Permissions** view should look like this:  
<img src="../kore-data-table/assigned-permissions-24.png" alt="assigned-permissions" title="assigned-permissions" style="border: 1px solid gray; zoom:80%;">

7. Once the role is created, click the **three dots** at the right end of the **Permission role,** and select **Change Membership**. Add the appropriate agents to the role.

## Create a Queue in Genesys

1. Sign in to [Genesys Pure Cloud](https://apps.mypurecloud.com/){:target="_blank"}.
2. Go to **Admin** > **Contact Center** > **Queues**, or enter “queues” in the **search** bar under the **Admin** section and press the **Enter** key.
3. Click **Create Queue**. An empty page to create a new queue appears on the right side of the page.  
<img src="../kore-data-table/create-queue-25.png" alt="create-queue" title="create-queue" style="border: 1px solid gray; zoom:80%;">

4. Enter/select the following details in the **Create Queue** page:
    * **Name**: Enter a unique name for the new queue.
    * **Division**: Select a division in which you want to place this queue. 
    * **Copy settings and members from (Optional)**: Select an existing queue name, if you want to copy the settings and members from it.
    * **Peer Id** (optional) : Enter a unique ID that can be used to identify the queue from an external platform.  
    <img src="../kore-data-table/peer-id-26.png" alt="peer-id" title="peer-id" style="border: 1px solid gray; zoom:80%;">

5. Click **Save**.

### Enabling the Audio Monitoring toggle

To stream audio to third-party services, follow the below steps:

1. Sign in to [Genesys Pure Cloud](https://apps.mypurecloud.com/){:target="_blank"}.
2. Go to **Admin > Contact Center >** **Queues**, or enter “queues” in the **search** bar under the **Admin** section and press the **Enter** key.
3. Click the intended queue name.
4. Click the **Voice** tab. 
5. Enable the **Audio Monitoring** toggle.  
<img src="../kore-data-table/audio-monitoring-toggle-27.png" alt="audio-monitoring-toggle" title="audio-monitoring-toggle" style="border: 1px solid gray; zoom:80%;">

    **Audio Monitoring**: Voice settings on a Queue now have an additional **Audio Monitoring** option, separate from **Voice Transcription**. This allows granularity in what you turn on. The Audio Monitoring will be enabled in the queue, if Audiohook Monitor is enabled by the organization.

## **Chat Setup**

### Create/Update Architect Inbound Message Flow in Genesys for the Agent Queue

This step is essential for managing incoming messages to the Genesys platform. When a chat is initiated from the [web chat messenger](https://developer.genesys.cloud/devapps/web-chat-messenger){:target="_blank"}, it first gets directed to this inbound message flow.

#### Steps to create a chat architect flow

1. Sign in to [Genesys Cloud](https://apps.mypurecloud.com/directory/#/login-oauth){:target="_blank"}.
2. Go to **Admin** > **Architect** > **Architect**.
3. Click the **three dots** next to **Flows: Inbound Call**, and select **Inbound Message**.  
    <img src="../kore-data-table/inbound-message-28.png" alt="inbound-message" title="inbound-message" style="border: 1px solid gray; zoom:80%;">  
4. Click the **+Add** button to create an **Inbound Message Flow**.  
    <img src="../kore-data-table/create-inbound-message-flow-29.png" alt="create-inbound-message-flow" title="create-inbound-message-flow" style="border: 1px solid gray; zoom:80%;">  
5. Click **Create Flow**. The final architect flow looks like the following screenshot:  
<img src="../kore-data-table/create-flow-30.png" alt="create-flow" title="create-flow" style="border: 1px solid gray; zoom:80%;">

6. Click **Publish**.

### Create Messenger Configuration

Before using web messaging, you must configure it in Genesys Cloud. To configure Web or Mobile Messaging in your organization, follow these steps:

1. Sign in to [Genesys Cloud](https://apps.mypurecloud.com/){:target="_blank"}.
2. Go to **Admin** > **Message** > **Messenger Configurations**.  
3. Click **New Configuration**.  
    <img src="../kore-data-table/messenger-new-configuration-31.png" alt="messenger-new-configuration" title="messenger-new-configuration" style="border: 1px solid gray; zoom:80%;">  
4. Enter a name and description.  
    <img src="../kore-data-table/messenger-configuration-name-description-32.png" alt="messenger-configuration-name-description" title="messenger-configuration-name-description" style="border: 1px solid gray; zoom:80%;">

5. Click the **Appearance** tab and complete the following information:

    * Under **Select your Supported Languages**, click the **Select language(s)** list and choose the languages that you want to support in the Messenger interface.

        !!! note

            The same language should be configured in the **Kore AI Agent**.  

        <img src="../kore-data-table/select-supported-languages-33.png" alt="select-supported-languages" title="select-supported-languages" style="border: 1px solid gray; zoom:80%;"> 

    * Under **Select Default Language**, click the **Select language** list and choose the default language.  
    <img src="../kore-data-table/default-language-34.png" alt="default-language" title="default-language" style="border: 1px solid gray; zoom:80%;">

    * Adjust the other settings according to your preferences.

6. Click the **Apps** tab and complete the following steps: 
    * Under **Clear Conversation**, turn on the toggle button. This is required for the **Agent AI Conversation Summary** feature to work.  
        <img src="../kore-data-table/clear-conversation-toggle-35.png" alt="clear-conversation-toggle" title="clear-conversation-toggle" style="border: 1px solid gray; zoom:80%;">

    * Adjust the other settings according to your preferences.

7. Click **Save New Version** to create a new version.

### Create Messenger Deployment

To deploy the Messenger snippet to your website, follow these steps:

1. Sign in to [Genesys Cloud](https://apps.mypurecloud.com/){:target="_blank"}.
2. Go to **Admin** > **Message** > **Messenger Deployment**. 
3. Click **New Deployment**.  
    <img src="../kore-data-table/new-messenger-deployment-36.png" alt="new-messenger-deployment" title="new-messenger-deployment" style="border: 1px solid gray; zoom:80%;">  
4. Enter a name and description.  
    <img src="../kore-data-table/messenger-deployment-details-37.png" alt="messenger-deployment-details" title="messenger-deployment-details" style="border: 1px solid gray; zoom:80%;"> 

5. Under **Select your Configuration**, click **Select Configuration** to select a version of a Messenger configuration created in the previous step to assign to this deployment.
    * In the **Assignment** pane, navigate to the Messenger configuration you want to assign to the configuration, and click the name of the Messenger configuration.
    * Select the version that you want to assign.
    * Click **Save**. 

6. Under **Restrict domain access**, determine whether to allow all domains or restrict the domains on which you want to deploy the snippet.  
    * To allow all domains, select the **Allow all domains** option. Use this option for testing and development purposes.
    * To restrict domains, enter a domain and click **Add Domain**. You can add multiple domains to the list. Restrict domains to prevent unauthorized usage of your snippet from unknown domains. If you restrict a domain, Messenger does not run on that website and rejects API requests from that domain. 

7. Under **Select your Architect Flow**, select the inbound message flow created in the previous steps.
8. Click **Save.** The **Messenger Deployments** page now displays the snippet and the deployment key.
9. Copy the Messenger snippet and deploy the Messenger snippet to your website.
    * If you are building a custom Messenger, copy the deployment key. 

        !!! note
        
            Once the above mentioned website page loads, the messenger window appears.  

        <img src="../kore-data-table/messenger-window-38.png" alt="messenger-window" title="messenger-window" style="border: 1px solid gray; zoom:80%;">

## **(Optional) Install Audiohook for Voice Streaming**

The final step is to install Audiohook for voice streaming, if using Kore-managed Transcriptions.

1. Sign in to **[Genesys Cloud](https://apps.mypurecloud.com/){:target="_blank"}**.
2. Go to **Admin** > **Integrations** > **Integrations**.  
3. Enter “audiohook” in the search bar.  
    <img src="../kore-data-table/audiohook-39.png" alt="audiohook" title="audiohook" style="border: 1px solid gray; zoom:80%;">

    Audiohook integration requires specific configuration values to support Agent AI configuration. 

4. Install a new audiohook app by clicking the **Integrations** button on the top-right corner.  
    <img src="../kore-data-table/audiohook-monitor-40.png" alt="audiohook-monitor" title="audiohook-monitor" style="border: 1px solid gray; zoom:80%;">  
5. Open the **Audiohook**, and go to the **Configuration** tab.  
    <img src="../kore-data-table/audiohook-configuration-41.png" alt="audiohook-configuration" title="audiohook-configuration" style="border: 1px solid gray; zoom:80%;">

    1. **Channel** value should be both.
    2. The **Connection URI** format should be similar to 
    wss://{**Kore Voice Gateway(KVG)**}[/audiosocket/genesys/?sipuri=xxx&token=xxx&botId=xxx&accountId=xxx&agentassist=true]. 

        !!! notes

            * Add “multiBot=true” parameter to it, if you want to use multiple Agent AI bots with different queues.
            * Configure SIP of any of the bots inserted in the Data Table.
            * Kore Voice Gateway(KVG) host name to be referred from the corresponding environment being used at Saas or on-prem.  

6. Follow these steps to get the **Connection URL**: 
    1. Go to **Agent AI** > **Flows & Channels** > **Voice Gateway** > **SIP Numbers** > **Configure SIP Trunk**.
    2. Select **Agent AI** in the **Product Selection** section.
    3. Select **GENESYS Audiohook** in the **Select the SIP Trunk connection method** dropdown list.
    4. Click the **Copy** button against the autogenerated **Connection URL** field. 
        <img src="../kore-data-table/configure-sip-trunk-42.png" alt="configure-sip-trunk" title="configure-sip-trunk" style="border: 1px solid gray; zoom:80%;">  
 
8. Add the following details in the **Advanced** tab: 

    ```
    {
      "environment": <genesys-environment(For example: mypurecloud.com)>,
      "oauthClientId": <genesys-oauth-id>,
      "koreDomainURL": <Agent AI URL>,
      "oauthClientSecret": <genesys-oauth-secret>,
      "sendEventsToVG": true,
      "botId": <Bot-ClientID>,
      "token": <JWT-token-created-in-previous-step-using-Bot-ClientID-and-ClientSecret>
    }
    ```
    !!! note

        Create an OAuth using the **Client Credentials** grant type, and use the resulting **Client ID** and **Client Secret** for configuration.  

    <img src="../images/advanced-configurations.png" alt="advanced-configurations" title="advanced-configurations" style="border: 1px solid gray; zoom:80%;">  

9. Add credentials in the **Credentials** tab. 
10. Use the **ClientID** and **ClientSecret** of the AI Agent you have used while configuring the Audiohook. These credentials are used to validate the audio stream signature by Kore.  
<img src="../kore-data-table/audiohook-credentials-44.png" alt="audiohook-credentials" title="audiohook-credentials" style="border: 1px solid gray; zoom:80%;">

11. Click **Save**.

## Create/Update Architect Inbound Call Flow in Genesys for the Agent Queue

When a call comes to a Genesys number, it passes through an architect flow. If you do not have an ACD architect flow for the queue, create one by following this section.

#### Steps to create a call architect flow

1. Sign in to [Genesys Cloud](https://apps.mypurecloud.com/){:target="_blank"}.
2. Go to **Admin** > **Architect** > **Architect**.  
<img src="../kore-data-table/genesys-architect-45.png" alt="genesys-architect" title="genesys-architect" style="border: 1px solid gray; zoom:80%;">  
3. Click the **+Add** button to create an **Inbound Call** **Flow**.  
<img src="../kore-data-table/create-inbound-call-flow-46.png" alt="create-inbound-call-flow" title="create-inbound-call-flow" style="border: 1px solid gray; zoom:80%;">  
4. Click **Create Flow**. The final architect flow looks like the following screenshot:  
<img src="../kore-data-table/final-architect-flow-47.png" alt="final-architect-flow" title="final-architect-flow" style="border: 1px solid gray; zoom:80%;">

    !!! notes

        * Inside the **Transfer to ACD** node, select the **queue name** where you want to transfer the call.
        * The **Transcription node** is optional, if you have already enabled Voice Transcription and Audio Monitoring in the queue level voice configuration.
        * Architect flow is required as a mandatory step, as it directs the incoming call to the Genesys agent desktop.

## Access Custom Data and Secure Custom Data in AI Agent

Custom Data and Secure Custom Data can be accessed in Welcome Events in Agent AI configuration page and in Dialog Tasks in Agent AI automation page.

Custom Data can be accessed as {{context.session.UserContext.customData.internalMetaData.<key>}}.

Follow [this doc](./../../agent-experience/access-custom-data-in-agent-ai.md){:target="_blank"} for the detailed steps on how to access Custom Data.

Secure Custom Data can be accessed as {{context.session.UserContext.secureCustomData.<key>}}.

Follow the same steps of [this doc](./../../agent-experience/access-custom-data-in-agent-ai.md){:target="_blank"} for the detailed information on how to access Secure Custom Data, with the exception of the path being {{context.session.UserContext.secureCustomData.&lt;key>}}.

!!! note

    If a URL-encoded JSON is provided in the “x_passthru_metadata”, you must use the JavaScript option in the Message node. Then, parse the value of *context.session.UserContext.customData.internalMetaData* before accessing its content.

**Example**:

var cd = JSON.parse(context.sessiinternalMetaDataon.UserContext.customData.internalMetaData);

print(cd.&lt;key>);

## Post Installation Setup

### Steps to start a Chat Request Simulation

1. Sign in to [Genesys Developer Applications](https://developer.genesys.cloud/devapps/web-chat-messenger){:target="_blank"}.  

    !!! note

        To start chat simulation, you must have access to the Genesys Developer portal (an account with Genesys).  

    <img src="../kore-data-table/chat-simulation-48.png" alt="chat-simulation" title="chat-simulation" style="border: 1px solid gray; zoom:80%;"> 

2. Click **Web Messenger**, select the **Deployments**, and then click **Start Chat** to initiate the chat request.  
    <img src="../kore-data-table/chat-simulation-web-messenger-49.png" alt="chat-simulation-web-messenger" title="chat-simulation-web-messenger" style="border: 1px solid gray; zoom:80%;">  

3. Enter a message on the **Message Us** window, and then click the **Send** icon.  
    <img src="../kore-data-table/chat-simulation-message-use-50.png" alt="chat-simulation-message-use" title="chat-simulation-message-use" style="border: 1px solid gray; zoom:80%;"> 

4. Turn on the **On Queue** toggle on the top-right corner of the page.
5. A new chat notification appears on the **Genesys Agent Desktop**. Accept the conversation by clicking the **Answer** button on the left panel. 
6. Select the **Interaction Widget** icon to view the Agent AI widget.  
<img src="../kore-data-table/interaction-widget-icon-chat-51.png" alt="interaction-widget-icon-chat" title="interaction-widget-icon-chat" style="border: 1px solid gray; zoom:80%;">

### Steps to start a Voice Request Simulation

1. In **Call Routing**, assign the **Architect flow** created in **[Step-4](#steps-to-create-a-call-architect-flow)** to a Genesys Phone Number.  
    <img src="../kore-data-table/create-call-route-53.png" alt="call-routing" title="call-routing" style="border: 1px solid gray; zoom:80%;">  

    <img src="../kore-data-table/create-call-route-53.png" alt="create-call-route" title="create-call-route" style="border: 1px solid gray; zoom:80%;">

2. Initiate a call using this Genesys Phone Number.
3. A new call notification appears on the Genesys Agent Desktop. Accept the conversation by clicking the **Answer** button on the left panel.
4. Select the **Interaction Widget** icon to view the Agent AI widget.  
<img src="../kore-data-table/call-interaction-details-54.png" alt="call-interaction-details" title="call-interaction-details" style="border: 1px solid gray; zoom:80%;"> 

## Set default contextual panel to Kore Agent AI Interaction Widget

To streamline call handling and improve efficiency, the Agent AI widget can now be embedded as the primary contextual panel interaction widget.

To enable this:

1. Sign in to **[Genesys Cloud](https://apps.mypurecloud.com/){:target="_blank"}**.
2. Click **Admin**.
3. Click **Panel Manager** under the **Contact Center** section. This opens the **Default Contextual Panel**.
4. Select the interaction widget name in both **Voice** and **Web Messaging** field dropdown lists (refer to step-4 of [Create an Interaction Widget in Genesys for Agent AI](#create-an-interaction-widget-in-genesys-for-agent-ai)).
5. Click **Save**.  
<img src="../kore-data-table/default-contextual-panel-55.png" alt="free text" title="free text" style="border: 1px solid gray; zoom:80%;">

    !!! note

        Reload the Genesys Agent Desktop before testing this latest change.

## Support for Agent Transfer

The Agent AI widget supports both Cold and Warm Transfers:

* **Cold Transfer**: A cold transfer occurs when one agent hands over a conversation to another, applicable across Voice, Chat, and Email channels. A new conversation summary is generated for the receiving agent and added to Agent-1’s **Assist** tab, along with feedback options. Agent-2 can modify the summary feedback for Voice and Email channels.
* **Warm Transfer**: A warm transfer is like a conference call between two agents, applicable to Voice and Chat channels. During the transfer, Agent-2 can modify the Summary Feedback. However, the **Run**, **Override**, **Send**, **Copy**, **Terminate**, **Restart**, and **List View** buttons remain disabled until Agent-1 disconnects from the call. 

## Switch to Agent AI SDK (Optional)

You can embed the Agent AI widget into the Genesys desktop using the Web SDK. To do this, update the following configurations: 

### Kore Data Table Change 

1. Go to the **Kore Data Table**.
2. Click on the name of the Data Table.
3. Add a new column to the existing data table as **isAgentAISDK** and data type as **string**.  
    <img src="../images/new-column.png" alt="new-column" title="new-column" style="border: 1px solid gray; zoom:80%;">  

4. Click **Create**/**Update** (for existing table configuration).

### Insert/update data into Data Table

For first time users, use the POST API and for existing users, use the PUT API to insert this new field into the Kore Data Table.

**API Body Payload Structure**:

```
    {
        "data": {
            "QueueIdentifier": <Unique QueueIdentifier>,
            "BotId": <Kore BotId>,
            "ClientId": <Kore ClientId>,
            "ClientSecret": <Kore ClientSecret>,
            "AudiohookEnabled": "true" / "false",
            "AgentAssistWidgetURL": <Kore Agent AI Widget URL>,
            "KvpConfig": <KVPs of SecureCustomData>,
            "JWEPublicKey": <Public Key assigned to Client App>,
            "Algorithm": "HS256",
           "isAgentAISDK": "True"
        }
    }
```

## XO 11 Configuration Notes

For the configured App, ensure at least one Dialog Task has been configured for Agent AI use.
<img src="../images/dialog-settings-page-25.png" alt="dialog-settings-page" title="dialog-settings-page" style="border: 1px solid gray; zoom:80%;">

**Where to find configuration settings**

You can find the necessary information in **Flows & Channels** > **Digital** > **Web/Mobile Client**.
<img src="../images/jwt-app-details-26.png" alt="jwt-app-details" title="jwt-app-details" style="border: 1px solid gray; zoom:80%;">
