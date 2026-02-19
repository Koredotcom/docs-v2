# Zeplin Connector

Zeplin is a collaboration tool for designers and developers that allows them to hand off UI designs with specs, assets, and code snippets.

Search AI supports searching through the **Screens** in the Zeplin account.


**<span style="text-decoration:underline;">Zeplin Connector Specifications</span>**


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
   <td>Screens
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

Search AI interacts with Zeplin via APIs. To use the Zeplin API and authenticate requests sent by Search AI, you can use any one of the following auth mechanisms.

* Personal Access Token
* OAuth 2.0 - For using OAuth 2.0, you need to create a new app in Zeplin. Search AI interacts with the application using the app. 


### Generating Personal Access Token

1. Go to the **Profile** page in your account. 
1. Navigate to the [Developer page](https://app.zeplin.io/profile/developer){:target="_blank"}. 
1. Under **Personal access tokens**, select **Create new token**. 
1. Enter a name for the token. 
1. Select **Enable admin access**. 
1. Select **CREATE**. The access token is generated.
1. Copy the token. It will not be visible after you leave the page.


### Creating an OAuth app in Zeplin

1. Go to the **Profile** page in your account. 
1. Navigate to the [Developer page](https://app.zeplin.io/profile/developer){:target="_blank"}.
1. Under **Owned Zeplin apps**, select **Create new app**. 
1. Provide the following details of the app. 
    * Name - Enter a unique, identifiable name for the app. 
    * Summary - Provide a brief description of the purpose of the app. 
    * Website - Provide the website url. 
    * Redirect URIs - Use one of the following URLs based on your region or deployment. 
        * JP Region Callback URL: `https://jp-bots-idp.kore.ai/workflows/callback`
        * DE Region Callback URL: `https://de-bots-idp.kore.ai/workflows/callback`
        * Prod Callback URL: `https://idp.kore.com/workflows/callback`
1. Select **CREATE**. A client ID and client secret are generated. Use these credentials when configuring the Zeplin connector in Search AI. 


### Zeplin Connector Configuration in Search AI

On the **Authorization** tab of the connector, provide the following details.

* Name - Unique name for the connector. 
* Authorization Type - Select API Key or OAuth 2.0 as required. 

When the API Key type of authorization is selected, enter the following fields. 


    * API Key - Enter the Personal access token generated in the Zeplin account. This is required when the authorization type is API Key. 

    When OAuth authentication is selected, enter the following fields. 

    * Grant type - Set this to Authorization Code
    * Client ID - provide the client ID generated in the Zeplin account
    * Client Secret - Provide the client credentials generated for the app. 

Click **Connect** to initiate the authentication. 


## Content Ingestion

After connecting the Zeplin account, go to the **Configuration** tab and select **Sync Now** to start content ingestion. You can also schedule a one-time or recurring sync using the **Scheduler**.

During ingestion, the connector retrieves details of all screens across projects in the connected Zeplin account. Each screen is ingested as a **separate document** in Search AI with the following structure:

* **Title**: Name of the screen
* **URL**: Direct link to the screen in Zeplin
* **Content**: List of users with access to the screen and annotations on the screen. Includes annotation author, type, and creation and update dates.
* **Project**: Name of the project containing the screen
* **Labels**: Tags or labels applied to the screen
* **Comments**: All comments associated with the screen. Includes comment author, text, and creation and update dates. 


## RACL Support

In Zeplin, access to screens is controlled at the project level. Anyone with access to a project automatically has access to all screens within that project.

When this content is ingested into Search AI, the project ID is stored in the `sys_racl` field of the chunks related to the ingested content. These project IDs act as permission entities that control access.

SearchAI supports automatic resolution of permission entities for Zeplin screens. It automatically identifies users who have access to a given project. These users are automatically associated with the corresponding project ID permission entity in SearchAI.
