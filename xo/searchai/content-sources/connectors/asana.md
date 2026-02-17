# **Asana Connector**

To search through the projects and tasks in your Asana application, configure the following connector in Search AI. This integration allows for a streamlined and efficient search experience. 

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
   <td>Projects
<p>
Tasks

Note that sub-tasks and attachments are not supported. 
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

Admin account with access to the required projects and tasks. 

## Authorization Support

Search AI supports the **OAuth 2.0 authorization code grant type** to access the content on Asana. 


## Asana OAuth Client Set Up

This requires creating a client application on the Asana application. Follow the steps listed below to create the app. 

1. Go to the [Asana developer console](https://app.asana.com/). 
2. Create a new app and enter the basic details.  
3. Go to the OAuth page and enter the Redirect URL. Depending upon your region or the deployment, you can use one of the following URLs as the Redirect URL.
 
 * JP Region Callback URL: `https://jp-bots-idp.kore.ai/workflows/callback`
 * DE Region Callback URL: `https://de-bots-idp.kore.ai/workflows/callback`
 * Prod Callback URL: `https://idp.kore.com/workflows/callback`

4. Copy the client credentials for the app. These credentials are used to configure the Asana connector in Search AI.
5. Go to the Manage Distribution page and set the distribution method to ‘Any Workspace’ and select **Changes**. 


Refer to[ this page](https://developers.asana.com/docs/oauth#register-an-application) for detailed instructions. 


## Search AI Connector Configuration

Provide the following details to configure the Asana connector. 

1. Name - Unique name for the connector.
1. Authorization Type - Set it to OAuth 2.0
1. Grant Type - Authorization Code
1. Client ID - ID of the client credentials generated for the OAuth application. 
1. Client Secret - Client secret generated for the OAuth application. 

Click **Connect** and use the Asana credentials to grant access to the Search AI application to access content from the application. 


## Ingesting Content

After the Search AI connector is successfully connected to the Asana application, go to the **Configuration** tab and set up content synchronization. For immediate sync, use the **Sync Now** option and the **Schedule Sync** option to set up a scheduler to sync the content at a future time. 


## Ingested Content Format

Asana Connector currently ingests only **Projects** and the **Tasks** associated with the projects into the Search AI application. 

1. For Projects, the following fields are fetched and added to the **content** field of the ingested content. 
    * Project Description
    * Project Owner
    * Completed
1. For Tasks, the following fields are provided in the **content** field of the ingested content.
    * Task Description
    * Project
    * Completed
    * Comments

Note that subtasks and attachments to the tasks are not included in the ingested content. `raw_data` field of the ingested content includes more information about the ingested content. 


## RACL Support

Currently, Search AI supports fetching projects and their associated tasks from Asana. 

For public **projects**, the `sys_racl` field is populated with the workspace or organization id and for private projects, the `sys_racl` field is populated with the project id. 

For **task** data ingested in the Search AI application, the `sys_racl` field is populated with one or more project IDs that the task is associated with. If any of those projects is a public project, the `sys_racl` field for the task is set to organization ID. 

To associate users to the project ID or the workspace ID, use the [Permission Entity APIs. ](../../../apis/searchai/permission-entity-apis.md)
