# Monday Connector

Monday is a work operating system used to plan, track, and manage workflows, projects, and team collaboration. It features customizable boards that allow users to manage workflows, assign tasks, and visualize progress across projects.

SearchAI enables ingesting content from **items within boards** on Monday, making them searchable and enhancing accessibility.

<span style="text-decoration:underline;">Specifications</span>


<table>
  <tr>
   <td><strong>Type of Repository </strong>
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td><strong>Supported Content Type</strong>
   </td>
   <td> Items on a board
   </td>
  </tr>
  <tr>
   <td><strong>RACL Support</strong>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Content Filtering Support </strong>
   </td>
   <td>No
   </td>
  </tr>
</table>



## Authorization Support 

Search AI supports interaction with Monday using both the **Monday API token** and the **OAuth 2.0** authentication mechanism. 

## Monday Configuration

### Generate Monday API Token

* Click on the profile pic in the top right corner. 
* Go to the *Administration* page. Click on *Connections* and go to the *API* tab. Click *Generate* to generate a new token. Copy the token. 
* Alternatively, go to the *Developers* page and click on *My Access Tokens*. It shows the access token. Copy the token.  

Refer to [this](https://developer.monday.com/api-reference/docs/authentication) for more details. 


### Generate OAuth Credentials

* Click on the profile pic in the top right corner.
* Go to the *Developer Center*. On *My Apps* page, click on *Create App* to create a new app.
* Go to the app's *OAuth* page. Enable the following scopes for the app. 
    * boards:read
    * users:read
* Go to the *Redirect URL* tab on the same page and enter one of the following URLs depending upon your AI for Service platform deployment. Click Save. 
    * JP Region Callback URLs: `https://jp-bots-idp.kore.ai/workflows/callback`
    * DE Region Callback URLs: `https://de-bots-idp.kore.ai/workflows/callback`
    * Prod Callback URLs: `https://idp.kore.com/workflows/callback`
* From the *Basic Information* page for the app, copy the client credentials. 

Refer to [this ](https://developer.monday.com/apps/docs/oauth)for more details. 


### Monday Connector Configuration in Search AI

Enter the following fields while configuring the Monday connector in Search AI. 

1. *Name*: Unique identifier for the connector. 
2. *Authorization Type*: Select Personal Access Token or OAuth 2.0. Personal Access Token here refers to the user’s global API token. For OAuth 2.0, provide the client credentials. 

The following properties on the page are used to map the content from the Monday application to SearchAI application. The default properties are mapped to the corresponding fields in Search AI. Update the fields if for custom implementations.

## RACL Support

Access control is implemented for the Monday Connector in Search AI using the *BoardID* of the board. For every item in the board, the `sys_racl `field contains the board ID as a permission entity. To associate users with this permission entity, use the [Permission Entity APIs](../../../apis/searchai/permission-entity-apis.md). 
