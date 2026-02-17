# Agent Transfer Integrations

Agent Transfer allows you to configure the most popular integrations to hand over conversations seamlessly without the need to use BotKit. These agent transfer integrations are hosted by the Platform, and there is no need to host any custom BotKit.

Agent transfer refers to the process of handing over a customer’s conversation from one agent to another within an AI Agent Platform. This is typically done when the current agent is unable to assist the customer with their issue or request, or if the customer requests to speak with a different agent.

**Agent Transfer** integrations are available under the **App Settings > Integration** menu. You can enable any integration by providing the required configurations. You can also enable multiple agent integrations as per your business requirement. For example, if you have a Custom integration, that is, BotKit, and an integration with Genesys chat. You can make one of them as default and map channels to agent systems.

You can also find these configurations as part of the Agent Transfer node. The Platform hands over the conversation to an agent during the dialog execution when the conversation reaches the agent node.

Agent Transfer node now allows you to define the IVR properties required to hand off the call back to the IVR system. Instead of using entity or message nodes to define the transfer tags, you can now configure them as part of the agent node. This ensures that the agent hand-offs on the IVR channel are tracked appropriately for containment purposes.

## Configure Agent Transfer in Voice Gateway

The **Agent Transfer** feature in Voice Gateway enables seamless transfer of live calls from an AI Agent or IVR to a human agent. Supervisors can transfer calls to internal agents within their contact center or to external agents outside your organization’s network. Use this feature when a customer’s query requires human assistance or escalation.

**Overview**

Voice Gateway supports agent transfers using **SIP signaling methods** such as **SIP INVITE** and **SIP REFER**. Administrators can configure the system to transfer calls to:

* **Internal agents** – within the same contact center or PBX system.  
* **External agents** – via phone number or SIP endpoint.  

Voice Gateway also provides configuration options to manage:
  
* Fallback behavior when SIP REFER fails with specific error codes (4xx, 5xx, or 6xx).  
* Handling call flow in **Experience Designer** when a transfer fails.  

1. Supported Transfer Types

    **Transfer to Internal Agent**

    Transfers a call from the **Caller ↔ AI Agent** session to an internal agent within the same network.

    * **SIP Method Supported:** SIP INVITE  
    * **Example Use Case:** The AI Agent escalates a customer call to a live support agent within the contact center.  

    **Transfer to External Agent**

    Transfers a call from the **Caller ↔ Bot** session to an external agent (for example, remote agents, vendor support, or partners).

    * **SIP Methods Supported:** SIP INVITE, SIP REFER, and SIP BYE.  
    * **Channel Options:**  
        * **Phone Number:** Dial the agent’s PSTN or mobile number.  
        * **SIP Endpoint:** Connect using a SIP URI or endpoint.  

2. Configure Agent Transfer Settings

    Steps to configure Agent Transfer settings at the application level.

    1. Go to **Settings > Integrations > Agent Transfer**.  
        <img src="../images/agent-transfer-tab.png" alt="Agent Transfer Tab" title="Agent Transfer Tab" style="border: 1px solid gray; zoom:70%;">
    2. Select **Voice**.  
    3. Choose one of the following options:  
        * **Custom Phone Number**  
        * **SIP Transfer**  
        * **IVR**  
    4. Click the desired option and open the **Configuration** tab.  
        <img src="../images/configurations.png" alt="Configuration" title="Configuration" style="border: 1px solid gray; zoom:70%;">
    5. Click **Save**.

!!! note

    These settings apply to all flows where the **Agent Transfer Node** is configured. To customize transfers based on call flow, use [AgentUtils](../../../flows/node-types/utils.md#agent-utils).

3. Configure Fallback for Failed Transfers

    You can define fallback behavior when a SIP REFER request fails with specific error codes.

    **Supported Error Codes**

    * **4xx:** Client errors (for example, Bad Request, Forbidden)  
    * **5xx:** Server errors (for example, Service Unavailable)  

    **Fallback Options**

    * Redirect the call to a specific node (for example, **Apology** or **Retry** node).  
    * Play an error message for the caller.  
    * End the call gracefully with a user-friendly message.  

    To Configure Fallback in Experience Flow

    1. Open **Experience Designer**.  
    2. Select the flow where you want to add the Agent Transfer logic.  
    3. Click **+ Add Node** → **Agent Transfer**.  
    4. Configure the following parameters:  
        * **Transfer Target:** Internal or External Agent.  
        * **SIP Method:** INVITE or REFER.  
        * **Destination:** SIP URI or phone number.  
    5. In the **Error Prompt** section, configure:  
        * **Message Type:** Define the message to play when the transfer fails.  
            <img src="../images/message-type.png" alt="Message Type" title="Message Type" style="border: 1px solid gray; zoom:70%;">
        * **Go To Node:** Select the node to route the call to after failure (for example, **Retry** or **Escalation**). 
            <img src="../images/go-to-node.png" alt="Go to Node" title="Go to Node" style="border: 1px solid gray; zoom:70%;"> 
    6. Click **Publish** to save and apply the configuration.  

4. Example Use Case

    **Scenario:**  
    A caller contacts the voice AI Agent for a billing inquiry. When the AI Agent detects that the issue requires human assistance, it triggers an **Agent Transfer Node** that routes the call to an internal billing human agent.

    If the transfer fails (for example, the agent is unavailable or SIP REFER returns a 5xx error), the call moves to a fallback node that plays the message:

    “_All our agents are currently busy. Please try again later._”

5. Best Practices

    * Always configure fallback nodes to ensure reliability  
    * Test transfers across different SIP networks for compatibility  
    * Use descriptive node names, such as **Agent_Transfer_Internal** or **Agent_Transfer_External**, to simplify debugging.  

## Supported Agent Transfers

Pre-built agent transfer integrations with contact center or agent desktop systems like Genesys or Salesforce are configured based on your channel configurations.

The platform supports the following agent transfer integrations.

<table border="1"> <tr> <td><strong>Agent Transfer</strong> </td> <td><strong>Descriptions</strong> </td> <td><strong>Doc Link</strong> </td> </tr> <tr> <td>Custom </td> <td>The BotKit SDK agent provided by the AI for Service. </td> <td><a href="../how-to-configure-agent-transfer/" target="_blank">Learn more</a> </td> </tr> <tr> <td>Drift </td> <td>The Drift agent transfer for marketing and sales teams to connect with customers easily through the Drift conversation chat module. </td> <td><a href="../configuring-the-drift-agent/" target="_blank">Learn more</a> </td> </tr> <tr> <td>Genesys </td> <td>The Genesys agent transfer for Voice, Web and VoIP telephony networks. </td> <td><a href="../configuring-the-genesys-agent/" target="_blank">Learn more</a> </td> </tr> <tr> <td>Intercom </td> <td>The Intercom agent transfer for Customer Communications Platform. </td> <td><a href="../configuring-the-intercom-agent/" target="_blank">Learn more</a> </td> </tr> <tr> <td>NiceInContact </td> <td>The NiceInContact agent transfer for Nice Customer Experience Platform. </td> <td><a href="../configuring-the-niceincontact/" target="_blank">Learn more</a> </td> </tr> <tr> <td>Salesforce </td> <td>The Salesforce agent transfer is used by different teams in an organization, such as marketing, sales, commerce, service, and IT work as one from anywhere using the chat module. </td> <td><a href="../configuring-the-salesforce-agent/" target="_blank">Learn more</a> </td> </tr> <tr> <td>ServiceNow (Tokyo and Lower versions) </td> <td>The ServiceNow agent (Tokyo and Lower versions) transfer for digital workflows on a single, unified platform. </td> <td><a href="../servicenow/configuring-the-servicenow-agent/" target="_blank">Learn more</a> </td> </tr> <tr> <td>ServiceNow (Utah and Higher versions) </td> <td>The ServiceNow agent (Utah and Higher versions) transfer for digital workflows on a single, unified platform. </td> <td><a href="../servicenow/configuring-the-servicenow-agent-utah-and-vancouver/" target="_blank">Learn more</a> </td> </tr> <tr> <td>Unblu </td> <td>The Unblu agent transfer for a conversational platform to perform financial services. </td> <td><a href="../adding-the-unblu-channel/" target="_blank">Learn more</a> </td> </tr> </table>

## Limitations

The following limitations apply to all supported agent transfers and the Platform integration:

* Currently, the attachments are only supported for ServiceNow and Genesys integration.
* The platform does not provide a built-in option for end-users to end a live agent chat, except when using Salesforce integration.

## Deleting an Agent Transfer Integration

You can delete an external agent transfer integration that is configured but no longer in use. Deleting an agent transfer integration will remove the agent system from the _Configured_ list and you cannot use that agent. You can configure the removed agent again from the _Available_ list.

**Important Notes**:

* When you delete the default Agent Transfer integration for the channels, the Platform will ask for the confirmation if you wish to use the other configured agent as the default agent system.
* If you delete the only Agent Transfer integration that was configured, all configurations are removed from the agent transfer node in all dialog tasks where this agent node is added.

Steps to delete a configured agent transfer integration:

1. To delete a configured Agent Transfer integration, go to **App Settings > Integration > Agent Transfer > Configured** hover over it in the **Configured** list and click the **Delete** icon.

    <img src="../images/agent-transfer-integrations-img1-delete-agent.png" alt="Delete agent" title="Delete agent" style="border: 1px solid gray;zoom:80%;">

    !!! Warning

        Once an action is Deleted, all configurations related to that particular agent transfer integration are deleted. You will be prompted to confirm if you want to use the default Agent Transfer integration that is configured.

2. Click **Proceed** to delete.

    <img src="../images/agent-transfer-integrations-img2-delete-agent-confirmation.png" alt="Delete agent" title="Delete agent" style="border: 1px solid gray;zoom:80%;">

## User-Bot Chat Transcript Link to Live Agents

When the platform transfers a user conversation to a live agent, the agent receives a link to view the conversation the user had with the app before the transfer. This provides context for what the user might expect from the live agent. This link can be accessed 10 times.

!!! note

    Links generated after the v11.4.1 release can be accessed 10 times.

## User-Bot Chat Conversation Summary to Live Agents

When the platform transfers a user to a live agent, it sends an AI-generated summary of the user-app conversation directly to the agent window, along with the chat history link. This helps agents quickly understand the conversation context before interacting with the user.

By default, the feature is disabled. To enable, go to the dialog task and open the agent transfer node. In the Instance Properties panel, enable the Conversation Summary toggle for that node. Ensure that GenAI - [Conversation Summarization](../../../generative-ai-tools/genai-features.md) feature is enabled.

!!! note

    The Conversation Summary applies to each agent transfer node. If the same Agent Transfer node is used in multiple dialogs, you need to configure the summary individually for each instance.

## Attachment Sharing with Live Agent

Users can now send files to agents during conversations. This enhances communication and facilitates the resolution of issues more efficiently. This feature is currently available only for [ServiceNow](./servicenow/configuring-the-servicenow-agent-utah-and-vancouver.md) and [Genesys](configuring-the-genesys-agent.md) agent integration.

The user and agent can share multiple files, each up to 25 MB in size, in over 22 file formats. The user and agent can download attachments up to five times within forty-eight hours of sharing.

!!! note

    Currently, ServiceNow and Genesys integration supports attachment sharing only through the WebSDK channel.

### Supported File Formats

The AI Agent supports sharing the following file formats.

| Category   | ServiceNow File Formats   | Genesys File Formats     |
|--------------|---------|------------|
| Document Formats    | .pdf, .doc, .docx, .txt, .xml    | .pdf, .doc, .docx, .txt |
| Spreadsheet Formats | .xls, .xlsx, .csv                | .xls, .xlsx, .csv |
| Presentation Formats| .ppt, .pptx                      | .ppt, .pptx  |
| Image Formats  | .jpg, .jpeg, .png, .gif  | .jpg, .jpeg, .png, .gif, .bmp, .tif |
| Archive Formats     | .zip, .rar   | .zip  |
| Audio Formats       | .mp3, .wav   | NA     |
| Video Formats       | .mp4, .avi    | NA    |
| Web Formats         | .html, .htm | .htm, .html  |

### Enable Attachment Sharing

To enable attachment sharing for Tokyo, see [Enable Attachment Sharing with Live Agent](../agents/servicenow/configuring-the-servicenow-agent.md#enable-attachment-sharing-with-live-agents).

To enable attachment sharing for Utah and Vancouver, see [Enable Attachment Sharing with Live Agent](../agents/servicenow/configuring-the-servicenow-agent-utah-and-vancouver.md#enable-attachment-sharing-with-live-agents).

## Read Receipts

The Platform now supports WhatsApp Cloud API read receipts, allowing end users to see message status indicators (delivered and read) across both bot and agent conversations. This feature is automatically available for all existing and new WhatsApp Cloud API integrations.
