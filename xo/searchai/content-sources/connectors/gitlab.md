# GitLab connector

GitLab is a DevOps platform used for version control, CI/CD, and collaborative software development. It is also used for issue tracking and management. To search through the issues tracked by the GitLab account, use Search AI.  

Search AI is an efficient tool that allows users to locate specific **issues** quickly, saving time.

<span style="text-decoration:underline;">Specifications</span>


<table>
  <tr>
   <td><strong>Type of Repository </strong>
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td><strong>Supported Content</strong>
   </td>
   <td>Issues 
   </td>
  </tr>
  <tr>
   <td><strong>RACL Support</strong>
   </td>
   <td>Yes 
   </td>
  </tr>
  <tr>
   <td><strong>Content Filtering</strong>
   </td>
   <td>No
   </td>
  </tr>
</table>



## Authorization Support

Search AI interacts with the GitLab using APIs. It supports the following types of authorizations. 

* OAuth 2.0
* Using Personal Access Tokens. 


## Prerequisites - Set up GitLab

Sign in to the GitLab account. Depending on the type of authorization required, please perform one of the following actions.

* Generate [Personal Access Token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
    * Go to the Profile on the top left side of the page. Click on Edit Profile. 
    * Go to the Access Tokens page from the left navigation menu. 
    * Click on Add new token. 
    * Select the **read_api **scope and create the token.  
* Generate [OAuth client credentials](https://docs.gitlab.com/ee/integration/oauth_provider.html). 
    * Go to the [Applications page](https://gitlab.com/-/user_settings/applications) under the User Profile. 
    * Create a new app for Search AI integration. 
    * Provide one of the following as the redirect URL. 
        * JP Region Callback URL: `https://jp-bots-idp.kore.ai/workflows/callback`
        * DE Region Callback URL: `https://de-bots-idp.kore.ai/workflows/callback`
        * Prod Callback URL: `https://idp.kore.com/workflows/callback`
    * Select the scope as 
        * Read_api
    * This generates a application ID and client secret.
    * Use these credentials and generate an access token and refresh token using an API client tool Postman. Refer to[ this page ](https://docs.gitlab.com/ee/api/oauth2.html#authorization-code-flow)for details. 


## Configure Search AI

Create a new connector for GitLab in Search AI and provide the following configuration fields. 

* Name - Provide a unique name for the connector.  
* Authorization Type - Provide the API token generated above. If the Auth type is set to Private Token, provide the Personal Access Token here. If the auth type is set to OAuth 2.0, enter the client credentials and access tokens. 

There are some other optional fields that are used to map the GitLab content to the ingested content. Currently, Search AI supports only the default fields. Hence, it is not mandatory to provide the other fields. 

Click **Connect** to sync the content from GitLab. 


## RACL Support

For the GitLab connector, all the ingested content is associated with the project to which it belongs. Hence, `sys_racl` field is also set to **projectId**. A permission entity is created corresponding to each projectID. Use the Permission Entity APIs to associate users with this permission entity to enable access to the content.