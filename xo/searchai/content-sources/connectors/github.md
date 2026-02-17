# GitHub Connector

GitHub is a widely used platform for version control and collaboration, enabling developers to host, manage, and track changes in code repositories. With the GitHub connector in SearchAI, you can ingest and index **content related to issues, pull requests, and README files** from GitHub repositories, making it easily searchable. This connector allows you to configure and index content from one or multiple repositories simultaneously, streamlining access to critical information.

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
   <td>Automatic Permission Entities Resolution </td>
   <td>Yes </td>
  </tr>
  <tr>
   <td><strong>Content Filtering</strong>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td colspan="2" >Note: Searching through attachments not supported.
   </td>
  </tr>
</table>



## Authorization Support

Search AI supports two types of authentication for communication with GitHub.

1. Using **Personal Access Token**
2. **OAuth 2.0 authentication**


## Prerequisites - GitHub Configuration 

**Personal Access Token**

1. In your GitHub account, go to [Developer Settings](https://github.com/settings/tokens){:target="_blank"} > Personal Access Tokens.
1. Under Fine-grained tokens, click **Generate new token** and enter the following details:
    * **Resource owner**: Select your **organization**.
    * **Repository access**: Choose **All repositories**.
1. Assign the required permissions and save.

![alt_text](images/github/permissions.png "Permissions")


**OAuth authentication**

1. Register a new [OAuth application](https://github.com/settings/developers) in GitHub.
2. Enter the basic details of the app.
3. Use one of the following as the callback URLs, depending on your region or deployment:

   * JP Region Callback URL: [https://jp-bots-idp.kore.ai/workflows/callback](https://jp-bots-idp.kore.ai/workflows/callback)
   * DE Region Callback URL: [https://de-bots-idp.kore.ai/workflows/callback](https://de-bots-idp.kore.ai/workflows/callback)
   * Prod Callback URL: [https://idp.kore.com/workflows/callback](https://idp.kore.com/workflows/callback)

4. Generates a client ID and Client Secret.
5. Use the [device flow](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#device-flow) and client credentials to manually create an access token using an API client tool, such as Postman. 


## GitHub Connector Configuration in Search AI

Configure the GitHub connector in Search AI. Enter the following fields for authentication with the GitHub application. 

1. **Name**: Unique identifier for the connector. 
2. **Authorization Type**: Select the type of authorization. 
    1. Personal Access Token (APIKey): If this authentication type is selected, provide the generated token. 
    2. OAuth 2.0: If this auth type is selected, provide the client credentials generated above. 

1. Click **Connect** to authenticate. 


## Content Ingestion

1. In Manage Content, select the **Object** type that you want to ingest: Issues, Pull Requests, and Readme files from GitHub repositories. 

1. To ingest all content of the selected object types, choose **Ingest All Content** and click **Sync**.

1. To ingest selectively, choose **Ingest Filtered Content** and configure **Standard Filters**.

**Standard Filter**

Use a standard filter to select the repositories from which content is to be ingested. All the repositories accessible are listed here. Select the required repositories and click Add Selection. 

Upon ingestion, the connector ingests the following fields for different types of content. The kind of content is identified by `doc_source_type` in the ingested JSON. For each type of content, the repositories to which they belong are captured using the repository_id and repository_name fields. The URL field contains the link to the specific object. Other fields, such as create and update dates, are captured in their respective fields. 

For Issues, additional information, such as the status of the issue, comments, reporter, assignee, reactions, closure date, closure by, labels, and other fields, is also captured and stored in the corresponding fields. 

For Pull Requests (PRs), additional details regarding the commits linked to the PR are included as part of the content field within the ingested document. Furthermore, the associated project, PR visibility, and the assigned reviewers are captured in their respective fields in the ingested data.


## RACL Support

* In GitHub, each piece of content (such as an issue, pull request, or README file) is linked to a specific repository through a unique repository ID.
* When this content is ingested into Search AI, the repository ID is stored in the RACL field of the chunks related to the ingested content.
* These repository IDs are the permission entities that control access.
* Search AI automatically identifies users who have access to the given repository in GitHub and associates them with the corresponding repository ID permission entity in Search AI.

