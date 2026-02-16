# Slack Connector

Slack is a widely used communication and collaboration platform designed to enhance team productivity and virtual collaboration. It serves as a centralized app for messaging and file sharing, enabling teams to stay connected and work efficiently.

Slack can be easily integrated with Search AI to search through conversations in **private and public channels in Slack** using the Slack Connector. The Slack Connector enables seamless integration between the Slack workspace and Search AI, allowing teams to search, retrieve, and analyze conversations, files, and other shared content efficiently. This ensures a comprehensive search experience and optimized team productivity.


## Why Use the SearchAI Connector for Slack?

1. Comprehensive Search Across Channels: Seamlessly search messages, files, and conversations across public and private Slack channels, ensuring no important detail is missed.
2. Enhanced Productivity: Saves time by quickly surfacing relevant messages, files, and discussions without the need to manually sift through channels.
3. Permission-Based Access: Users can only access the content they're authorized to view.
4. Direct Links to Context: Provides citations and direct links to Slack threads or messages, making it easy to dive into the original context.

<span style="text-decoration:underline;">Specifications</span>

<table>
  <tr>
   <td> <b>Type of Repository </b>
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td><b>Content Supported</b>
   </td>
   <td>Conversations from Public and Private Slack Channels
   </td>
  </tr>
  <tr>
   <td><b>RACL Support</b>
   </td>
   <td>Yes
   </td>
  </tr>
    <tr>
   <td><strong>Automatic Permission Entities Resolution</strong></td>
   <td>Yes </td>
  </tr>
  <tr>
   <td><b>Content Filtering</b>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td colspan="2" >Note: Searching through attachments not supported.
   </td>
  </tr>
</table>

## Slack Connector Configuration

Search AI interacts with Slack through its APIs. To enable this communication, follow the steps listed below. 

1. Create a new app in Slack. 
    * Go to the [Apps page on Slack](https://api.slack.com/apps) and create a new app. 
    * Enter the App Name and select the Workspace from which the content is to be ingested. 
    * Select Create App. This creates the app. 
2. Set up Redirect URLs.
    * Go to the OAuth & Permissions page for the app and set one of the following as the Redirect URL, depending on your region or deployment. 
        1. JP Region Callback URL: `https://jp-bots-idp.kore.ai/workflows/callback`
        2. DE Region Callback URL: `https://de-bots-idp.kore.ai/workflows/callback`
        3. Prod Callback URL: `https://idp.kore.com/workflows/callback`
3. For *OAuth authentication*, 
    * Go to the App details and select Basic Information. This page provides the App credentials, including the client ID and client Secret. These credentials are used to generate Bot-level Tokens through the APIs. 
    * Note that Search AI can ingest content only from Slack channels(public or private) where the OAuth app is invited as a member. To do so, invite the app to interact with users in any public or private Slack channel using the **/invite @&lt;app-name>** command in any channel. Alternatively, click the channel name, go to the **Integrations** tab, select the **Add Apps** link, and select the **OAuth app.** 
4. For authentication using User Tokens, 
    * On the OAuth & Permissions page for the app, under User Token Scopes, add the following scopes. This enables the app to access the required content from Slack. 
        * channels:history
        * channels:read
        * groups:history
        * groups:read
        * im:history
        * im:read
        * mpim:read
        * mpim:history
        * users:read
        * users:read.email
        * Team:read
    * Next, go to the Install App page and install the app to the required workspace. This generates a User OAuth Token. Copy this token for configuration in Search AI Slack Connector Configuration.
    * Note that the app requires the following read access to fetch the content from Slack Channels.
        * Content and Info about Channels & Conversations
        * Content and Info about your Workspace


## Configuring Slack Connector in Search AI

* Go to the Connectors home page in Search AI. Click Add Connector, then select Slack. Provide the following details on the Authentication page, then click Connect to set up the connection. 
    * **Name**: Provide a unique name for the connector. 
    * **Authorization Type**: Select OAuth 2.0 or User Token. 
        * For OAuth 2.0, set the Grant type to Authorization Code and provide the client credentials (Client ID and Secret, generated for the Slack app).  
        * For User Token, provide the  User OAuth Token generated for the app. 


## Content Ingestion

After successfully connecting the Search AI connector to the Slack app, set up content synchronization. For immediate sync, use the Sync option. Alternatively, go to the Schedule Sync page to set up a scheduler to sync the content in the future. 

Upon sync, Search AI ingests conversations from the past 6 months in Slack channels by default. If an advanced filter is set up, content is fetched according to the timelines in the filter. 

When messages from a Slack channel are ingested into SearchAI, two or more consecutive messages may be grouped together based on their context and size. Each ingested message always includes the following details in the content field:


* **Channel’s Name:** The name of the channel where the message was sent. 
* **Sender's Name**: The name of the person who sent the message.
* **Timestamp**: The exact date and time when the message was sent.
* The **textual content** of the message.  

**Sample Content**

```json
"content": "In the dev channel, at 2024-12-26T13:20:07.170Z, john.smith messaged: The latest build is available for testing. Please find the release notes attached. This includes an attachment with the file name: release-notes.pdf and its URL: https://files.slack.com/files-pri/T082AFBJX27-F088SA71R4G/download/release-notes.pdf"
```


Other details of the ingested messages are captured as metadata in the respective fields or as metadata. This ensures that the ingested content is comprehensive and retains key information for accurate and contextual search results.

Go to the **Content** tab to view the ingested content. 

<!-----



Conversion time: 0.485 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs™ to Markdown version 2.0β1
* Wed Dec 03 2025 22:15:20 GMT-0800 (PST)
* Source doc: Slack Connector
* This is a partial selection. Check to make sure intra-doc links work.
----->



## Content Filters

The Slack connector supports content filtering before ingestion, allowing you to control which messages and files are imported into the application.


#### Filter Options

You can configure the Slack connector to ingest content based on:

* Channel type - Ingest only from public channels, private channels, or all available channels.
* Specific channels - Select one or more Slack channels to include.
* Date range - Ingest content within a defined time window.

**Selecting Content Type**

Go to the Manage Content page and under the Object type, select the type of content to be ingested from Slack. 

* Content from all the public channels only 
* Content from all the private channels only
* All the available content. 

**Standard Filters**

Use Standard Filters to restrict ingestion from specific channels.

* Select Ingest Filtered Content and click Configure.
* On the Standard tab, click Browse and Select to view all available Slack channels.
* Choose the channels you want to ingest content from.
* Click Add Selection and then Save.

 Only the content from the selected channels is ingested with this. 

**Advanced Filters**

Use Advanced Filters to control ingestion based on message dates.

* From: Start date for ingestion.
* To: End date for ingestion.
    * If To date isn't provided, content is ingested up to the current date.
    * If neither From nor To dates are provided, the system automatically ingests content from the past 6 months.


## RACL Support

* **Public Channels**: 
For content ingested from public channels, the `sys_racl` field is automatically populated with the workspace ID. This ensures that the content remains accessible to all users within the workspace, consistent with Slack’s open access model for public channels.
* **Private Channels**: 
For content ingested from private channels, the `sys_racl` field is automatically resolved to the channel ID. This enforces restricted access, aligning with Slack’s policy that only invited members can view content in private channels.

SearchAI now supports automatic resolution of permission entities, streamlining ingestion and ensuring that content permissions accurately reflect Slack’s native access controls.
