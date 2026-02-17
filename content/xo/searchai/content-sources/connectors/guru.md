
# Guru Connector

Guru is a knowledge management platform that helps teams capture, organize, and share information through Cards. Search AI enhances this by ingesting **Guru Cards**, making them easily searchable and retrievable within the Search AI platform.

<span style="text-decoration:underline;">Guru Connector Specifications</span>


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
   <td>Cards
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



## Prerequisites

Search AI Connector uses Guru APIs to access the resources on the application and ingest the required content. To authenticate these API requests, a user token is required to be generated on the Guru application. 


## Generate User Token

To generate a user token, follow the below steps.

* Go to the [Apps & Integrations](https://app.getguru.com/manage/integrations/apps) page under the **Manage** menu.
* Click on the [API Access](https://app.getguru.com/settings/integrations/api-access) tab to manage your tokens.
* Generate an API token by selecting Generate User Token and entering your name.


## Configure Guru Connector in Search AI

Go to the Connectors home page in Search AI. Select Guru Connector. Provide the following details in the **Authorization** tab and click **Connect** to set up the connection. 

* **Name**: Unique name for the connector. 
* **User Email**: Enter the email address of the user account from which ingestion is to be done. 
* **User Password**: Enter the User Token generated above. 


## Content Ingestion

Upon successful synchronization, the connector ingests the **Cards** from all the spaces in the workspace. 

For each card, it ingests the card's content along with its metadata like creation date, update date, URL, comments, project to which it belongs, workspace to which it belongs, etc. 


## RACL Support

A Guru card can have the following privacy levels. The `sys_racl` field is populated according to the privacy level of a card. 


<table>
  <tr>
   <td>Privacy Level
   </td>
   <td>Definition
   </td>
   <td>sys_racl
   </td>
  </tr>
  <tr>
   <td>Public
   </td>
   <td>Anyone with the link can view this entire Card. No sign in is required.
   </td>
   <td>*
   </td>
  </tr>
  <tr>
   <td>Restricted
   </td>
   <td>Only selected Guru users added to the card can access it. 
   </td>
   <td>Email Ids of the users added to the card. 
   </td>
  </tr>
  <tr>
   <td>Your Guru teammates
   </td>
   <td>All Guru users with access to the Card's Collection can view the card.
   </td>
   <td>TeamID (permission entity)
   </td>
  </tr>
</table>

