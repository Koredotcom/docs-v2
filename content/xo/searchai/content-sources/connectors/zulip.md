# Zulip Connector

**Zulip** is a team communication platform that organizes conversations using **topic-based** threading within **streams or channels**, ensuring structured and efficient discussions. Search AI enables message ingestion, making search fast and efficient across all conversations. 

<span style="text-decoration:underline;">Zulip Connector Specifications</span>


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
   <td>Messages inside Topics in Channels
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



## Prerequisites

Search AI establishes communication and fetches relevant content from Zulip through its APIs. An API Key is required to authenticate these API requests from Search AI. 


## Generate API Key in Zulip

1. Click on your **profile picture** (top right corner).
2. Go to Personal Settings.
3. Go to the API Key section on the Account and Privacy page and generate your API Key. 


## Configure the Zulip Connector in Search AI

Go to the Connectors home page in Search AI. Select Zulip Connector. Provide the following details in the **Authorization** tab and click **Connect** to set up the connection. 

* Name: Unique name for the connector. 
* API Key: API Key generated above. 
* Host URL: Host URL for the organization in Zulip.
* Email ID: Email address used for generating API Key in Zulip. 


## Content Ingestion

Search AI ingests messages on different topics from streams or channels. At every sync operation, it currently ingests content for the past 30 days. Any existing content in the connector older than this timeframe is automatically deleted from the Search AI app. 

Depending upon the size of a message, up to three messages can be concatenated in a single ingested document. The content field in each doc mentions the channel, topic, and message text along with the message's author. Additional information about the content is ingested in separate fields in the document. 


## RACL Support

SearchAI supports access control for content ingested from Zulip accounts at the channel level. Access is determined by the type of stream.

### Access Control for Zulip Streams

In Zulip, each message is linked to a specific stream, which can be **public**, **private**, or **web-public**.

When this content is ingested into SearchAI, the corresponding stream identifier is stored in the `sys_racl` field of the chunks related to the ingested content. These identifiers act as permission entities that control access:

* **Public Channels**: The `sys_racl` field is set to the organization name.

* **Private Channels**: The `sys_racl` field is set to the channel ID.

* **Web-public Channels**: The `sys_racl` field is set to *.

SearchAI supports automatic resolution of permission entities for Zulip streams. It automatically identifies users who have access to the given stream and associates them with the corresponding permission entity in SearchAI.

Manual permission entity mapping through APIs is not required.