# Microsoft Teams Connector

Microsoft Teams (MS Teams) is a collaboration and communication platform typically used in remote and hybrid work environments to streamline communication. 

Search AI allows the ingestion of content in the MS Teams channels for easy searchability. 

**<span style="text-decoration:underline;">MS Teams Connector Specifications</span>**

<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Content Supported
   </td>
   <td>Conversations from Public, Private, and Shared Channels
   </td>
  </tr>
  <tr>
   <td>RACL Support
   </td>
   <td>Yes
   </td>
  </tr>
    <tr>
   <td>Automatic Permission Entities Resolution </td>
   <td>Yes </td>
  </tr>
  <tr>
   <td>Content Filtering
   </td>
   <td>No
   </td>
  </tr>
</table>

## Connector Configuration

Search AI interacts with MS Teams through its APIs. Registering Search AI as an OAuth app in the Microsoft Entra ID is required to enable this communication. Follow the steps listed below to register the app. 

### Prerequisites

* Azure account with Admin rights. 

### Register an application

1. Sign in to the [Microsoft Entra Admin Center](https://entra.microsoft.com/){:target="_blank"}.
1. Navigate to **App registrations** and click **New Registration**.
1. Enter a **Name** and choose an appropriate **Supported account type**.
1. Enter the **Redirect URI** as one of the following, depending on your region and deployment. 
    * JP Region Callback URL: `https://jp-bots-idp.kore.ai/workflows/callback
    * DE Region Callback URL: `https://de-bots-idp.kore.ai/workflows/callback`
    * Prod Callback URL: `https://idp.kore.com/workflows/callback`
1. Click **Register** to create the app. A client ID is generated. 
1. Go to **Certificates & secrets** and click **New Client Secret**. 
1. Copy the client ID, client secret, and tenant ID. Use these parameters to configure the connector in Search AI. 


## Configuring MS Teams Connector in Search AI

Go to the **Connectors** home page in Search AI. Click on **Add Connector** and select MS Teams. Provide the following details in the **Authorization** tab and click **Connect** to set up the connection. 

* **Name**: Provide a unique name for the connector. 
* **Authorization Type**: Currently, OAuth 2.0 is used as the auth mechanism. 
* **Grant Type**: Set the Grant type to Authorization Code. 
* **Client ID**: Client credentials generated above.
* **Client Secret**: Client credentials generated above.
* **Tenant ID**: Tenant ID for your Microsoft account. 

*Note:*

*To access the conversations in the channels, Search AI requires access to the following set of permissions.*

* *Group.Read.All*
* *Team.ReadBasic.All*
* *ChannelMessage.Read.All*
* *offline_access*
* *Channel.ReadBasic.All*
* *ChannelMember.Read.All*
* *TeamMember.Read.All*
* *User.Read.All*


## Content Ingestion

After successfully connecting the Search AI connector to the MS Teams app, go to the **Configuration** tab and set up content synchronization. For immediate sync, use the **Sync Now** option and the **Schedule Sync** option to set up a scheduler to sync the content in the future. 

Upon sync, Search AI ingests **conversations from the MS Teams channels for the past 90 days**. 

When ingesting chat messages in an MS Teams channel, it is important to differentiate between direct messages and thread messages.

**Thread Messages**: Messages that are part of a thread are concatenated during ingestion. This process helps preserve the context of the ongoing conversation, ensuring that the flow of dialogue is maintained for better clarity.

**Direct Messages**: In the case of direct messages in a channel, two or more consecutive messages may be concatenated based on their similarity score. This method is useful in retaining relevant context within the ingested content. At the most, three consecutive messages in a channel can be concatenated. 

The content field of each ingested data contains the time of the chat message, the author of the message, the channel name along with the textual message. If the message contains an attachment, the attachment’s name and URL are also captured as part of the content field.

Sample Content field:


```json
"content": "In the searchai-dev channel, at 2024-12-26T13:20:07.170Z, john.smith messaged: The latest build is available for testing. Please find the release notes attached. This includes an attachment with the file name: release-notes.pdf and its URL: https://microsoft.com/files-pri/T082AFBJX27-F088SA71R4G/download/release-notes.pdf"
```


Other details of the ingested messages are captured as metadata in the respective fields or as metadata, including the reactions and mentions in a message. When two or more messages are concatenated, the URL has the link to the first message.  

This process ensures that the ingested content is comprehensive and retains key information for accurate and contextual search results.

To view the ingested content, go to the **Content** tab. 


## RACL Support

SearchAI automatically resolves permission entities for chat messages ingested from different channel types, using the appropriate identifier—team ID or channel ID—based on the channel’s access model. This ensures that access control aligns with each channel’s visibility settings, without requiring manual mapping.

* **Public Channels**: All team members can access public channels. The `sys_racl` field stores the team ID to reflect open access. 
* **Private Channels**: Restricted to specific members, private channels use the channel ID in `sys_racl` to enforce limited visibility.
* **Shared Channels:** Designed for cross-team collaboration, shared channels also use the team ID to manage access.