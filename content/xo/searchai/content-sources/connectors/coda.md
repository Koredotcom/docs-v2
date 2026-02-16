# Coda Connector

If you are using Coda to store important information required for team collaboration, use the Coda Connector in Search AI to easily find answers from the content in Coda. In **Coda**, content is organized into **Folders** and **Docs**. Search AI supports 

<span style="text-decoration:underline;">Specifications</span>


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
   <td>Pages and Docs
   </td>
  </tr>
  <tr>
   <td>RACL Support
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Content Filtering
   </td>
   <td>No
   </td>
  </tr>
</table>



## Auth Support

Search AI integrates with Coda via REST APIs. To authenticate with the Coda APIs, Search AI requires an API token and the base URL to access the API endpoints. 


## Generate an API Token

1. SIgn in to your[ Coda account](https://coda.io).
1. Go to your **Account Settings**:
    * Click on your profile picture in the top-right corner.
    * Select **API Tokens** from the menu.
1. Click **Generate API Token**.
    * Provide a name for the token (e.g., "My App Access").
    * Click Generate. 
1. Copy the token. 


## Steps to Configure Coda Connector in Search AI

Go to the **Authorization page** of the Coda Connector, enter the following configuration fields, and click **Connect**. 

* **Name** - Unique name for the connector**.**
* **SAS Token** - API token required by Search AI to access the resources programmatically. 


## Ingesting Content

After the Search AI connector is successfully connected to the Coda application, go to the **Configuration** tab and set up content synchronization. For immediate sync, use the **Sync Now** option and the **Schedule Sync** option to set up a scheduler to sync the content in the future. 


## Ingested Content Format

Coda Connector ingests all the pages from different folders accessible to the account used for configuration. For each page, it ingests the textual content and stores in the content field of ingested data. 

Note that currently, Search AI does not support ingesting content from any kind of tables or media elements in the pages. 


## RACL Support

The `sys_racl` field in the ingested documents stores the email IDs of the document owner and the users with whom the document is directly shared. Note that content in public files or files shared via a link with the workspace users will not be accessible to the users through Search AI.
