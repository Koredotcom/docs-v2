# Teamwork Connector

**Teamwork** is a project management and collaboration platform that helps teams manage tasks, projects, and communication efficiently. It offers tools for task assignment, time tracking, file sharing, and milestone tracking to streamline team productivity.

**Search AI** enables the ingestion of tasks from Teamwork, allowing users to easily search them. 

**<span style="text-decoration:underline;">Teamwork Connector Specifications</span>**


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
   <td><strong>Tasks</strong>
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



## Connector Configuration

Search AI connects with Teamwork through its APIs. 

### Generate OAuth2 Credentials

* Sign to the[ developer portal](https://developer.teamwork.com/). For example: [https://{yourTeamworkURL}.com/developer](https://{yourTeamworkURL}.com/developer)
* Create an app and provide its details. 
    * Name - The name of your app, which will show on your apps consent screen.
    * Icon - Icon shown to users during authentication and installation.
    * Description - Provide a brief description of the purpose of the app.
    * Product - Select the Teamwork app. 
    * Redirect URLs - Provide one of the following URLs depending on the Search AI deployment in use. 
        * JP Region Callback URLs: `https://jp-bots-idp.kore.ai/workflows/callback`
        * DE Region Callback URLs: `https://de-bots-idp.kore.ai/workflows/callback`
        * Prod Callback URLs: `https://idp.kore.com/workflows/callback`
*  Click Create. 
* Once the app is created, you will find the client credentials required to configure the connector in Search AI on the **Credentials** tab. 


### Teamwork Connector Configuration in Search AI

On the Authentication page of the connector, provide the following information. 

* Name - Unique name for the connector. 
* Authorization Type - Teamwork supports OAuth 2.0. 
* Grant Type - Set this to Authorization Code
* Client ID and Client Secret - Use the credentials generated in the Teamwork app. 
* Domain - Provide the Teamwork domain from where the content is to be ingested. If the complete domain is like [https://&lt;your-specific-teamname>.teamwork.com](https://{yourTeamworkURL}.com/developer), enter “[&lt;your-specific-team-name>](https://{yourTeamworkURL}.com/developer)”.
* Click **Connect**. This initiates the authentication process. 

## Content Ingestion

Search AI currently supports the ingestion of **Tasks** from the **Teamwork** application.

Upon ingestion, the content is captured in **JSON format** and includes the following key fields:

* **Title**: Name of the task
* **Content**: Task description and assignee details
* **URL**: Direct link to the task in Teamwork
* **Project Name**: The project to which the task belongs
* **Start Date** and **Due Date**: Captures the task’s scheduled timeline

You can view the complete set of fields in the Content page. 


## RACL Support

The **Teamwork Connector** supports Restricted Access Control Lists (RACL) to manage user-specific access to ingested content.

* When restricted access is enabled, the connector stores the **Project ID** as the value of the `sys_racl` field for all ingested tasks. 
* The `sys_racl` field is a permission entity and determines who can access the task data.
* Use the **Permission Entity APIs** to associate users with the appropriate **Project IDs** stored in the `sys_racl` field. 
