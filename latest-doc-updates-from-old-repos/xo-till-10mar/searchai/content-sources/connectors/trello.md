# Trello Connector

Trello is a project management and collaboration tool that utilizes **boards** and **cards** to organize tasks, projects, and workflows. Integrating **Search AI** with Trello enhances the accessibility of the content, making project management and team collaboration more streamlined and effective.

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
   <td>Cards and Boards
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


## Authorization Support

Trello connector interacts with Trello via the REST APIs. To enable this communication, it is required to generate an API key and Token on Trello. 

## Generate API Key and Token on Trello

1. Create a [Trello Power-Up](https://trello.com/power-ups/admin). 
2. Generate a [new API Key for the power-up](https://developer.atlassian.com/cloud/trello/guides/power-ups/managing-power-ups/#generating-an-api-key). Ensure the Search AI host URL is added to the **Allowed origins**.
3. Generate [API Token](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/#authorizing-a-client). This uses the Trello account to grant access to Search AI application. 
4. Save the API Key and Token. This is required to configure the corresponding connector in Search AI. 

## Configure Trello Connector in Search AI

Go to the **Authorization page** of the Trello Connector, provide the following configuration fields, and click **Connect**.


* **Name**- Unique name for the connector.
* **Authorization Type**- Set this to Token. 
* **Grant Type**- Set this to Token. 
* **Access Key**- Provide the API Key here. 
* **Access Token**- Provide the API Token here.  

## Ingesting Content

After successfully connecting the Search AI connector to the Trello account, go to the **Configuration** tab and set up content synchronization. For immediate sync, use the **Sync Now** option and the **Schedule Sync** option to set up a scheduler to sync the content in the future. 

Upon sync, Search AI ingests details from the **boards** and the **cards** into the Search AI application. 

The **type** field in the ingested content suggests whether the data is related to a board or a card. For both cards and boards, the content field includes description, due date, author, and comments on the cards. The card details also have a field ‘board’ under meta fields that indicates the board to which it belongs. 

## RACL Support

SearchAI supports access control for content ingested from Trello based on the visibility and membership of boards and cards.

Access Control for Trello Boards and Cards

* In Trello, each card is associated with a specific board, and each board has a defined visibility level (such as Private, Workspace, Public, or Organization).
* When this content is ingested into SearchAI, the board ID is stored in the `sys_racl` field of the chunks related to the board and its cards.
* These board IDs serve as permission entities that control access to the content.
* SearchAI supports automatic resolution of permission entities for Trello content. It automatically identifies users who have access to the board in Trello and associates them with the corresponding board ID in SearchAI.

!!! note

    Boards with Organization visibility are not currently supported by the Trello connector. Content from such boards will not be ingested.  
