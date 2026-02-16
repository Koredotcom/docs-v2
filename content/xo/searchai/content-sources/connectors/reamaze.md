# Re:amaze Connector 

Re:amaze is a comprehensive customer support and helpdesk platform designed to streamline communication and enhance customer engagement. You can use the Search AI connector for Re:amaze to ingest and index content from your Re:amaze account, enabling efficient and seamless search capabilities across your support resources like help articles.

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
   <td>Articles
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


To enable integration between Search AI and Re:amaze and ingestion of content from the Re:amaze account, 

* Generate an API Token in Re:amaze that grants programmatic access to the Re:amaze data on behalf of the user. 
* Configure the Re:amaze Connector in Search AI


## Generate API Token

1. Go to **Settings** within the Re:amaze account.
2. Click **API Token** under the **Developer** section.
3. Click on **Generate New Token** to generate a unique token.

This token is used to access content from the Re:amaze application via its APIs. 

## Configure Re:amaze Connector in Search AI

Go to the **Authorization page** of the Re:amaze Connector, enter the following configuration fields, and click **Connect**. 

* **Name**: Unique name for the connector.
* **Brand Name**: Domain name of the brand corresponding to which data is to be ingested. Each Re:amaze account may contain one or more brands, and each brand's host domain can be found on the Brand Settings Page. 
* **Email**: Email id of the user account. 
* **API Key**: This is the API Token generated above. 


## Ingesting Content

After successfully connecting the Search AI connector to the Re:amaze account, go to the **Configuration **tab and set up content synchronization. For immediate sync, use the **Sync Now** option and the **Schedule Sync** option to set up a scheduler to sync the content in the future. 

Upon sync, Search AI ingests details from the **articles** into the Search AI application. Details like the topic of the article, author of the article, etc, are captured as metadata. 


## RACL Support

Currently, the status of an article is used to manage the accessibility of the article. 

* **Published**: Articles with this status are publicly available, and their `sys_racl` field is set to `*`.
* **Draft, Unlisted, or Internal**: Access to these articles is restricted to the author and brand users. In these cases, the `sys_racl` field includes the email address of the author and the brand name. To grant access to all users of a specific brand, use the **Permission Entity APIs** to add the desired users to the corresponding brand name.