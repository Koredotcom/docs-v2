# Wrike Connector

Wrike is a task management and collaboration platform that helps teams plan, track, and manage work efficiently. It allows users to create tasks, set deadlines, assign responsibilities, and monitor project progress. SearchAI ingests tasks from Wrike and enables seamless search across them. This helps users quickly find task details, updates, and assignments.

<span style="text-decoration:underline;">Wrike Connector Specifications</span>


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
   <td>Tasks
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

Search AI interacts with Wrike using the APIs. Wrike uses the OAuth 2.0 protocol for API authorization. To enable this communication, it is required to register and set up a OAuth client app in the Wrike application. The application is assigned a unique Client ID and Client Secret, which is needed to configure the Wrike connector in Search AI. 


## Register Client App in Wrike

Follow the steps listed below to create an app. 


1. Go to API Apps section under [Apps & Integrations](https://www.wrike.com/frontend/apps/index.html#/api).
1. Enter the App name and click Create new. 
1. This generates a client id and secret for the app. 
1. Add one of the following REdirect URI based on your region or deployment. 
    * JP Region Callback URL: `https://jp-bots-idp.kore.ai/workflows/callback`
    * DE Region Callback URL: `https://de-bots-idp.kore.ai/workflows/callback`
    * Prod Callback URL: `https://idp.kore.com/workflows/callback`
1. The client credentials generated above are used to identify the app and are used during connector configuration in Search AI. 


## Configure Wrike Connector in Search AI


* Go to the Wrike Connector, enter the following details under the **Authorization** tab and click **Connect**. 
    * Name: Enter a unique name for the connector. 
    * Authorization Type: Set it to OAuth 2.0
    * Grant Type: Set it to Authorization Code. 
    * Client ID: Credentials generated for the OAuth app in Wrike. 
    * Client Secret: Credentials generated for the OAuth app in Wrike.


## Content Ingestion

The content field in the ingested document includes descriptions, status updates, comments, sub-tasks, and priority levels for a task. Additional information such as the project to which the task belongs, the assignee, the task creator, and the creation and update dates are captured in individual fields within the ingested document. 

If there are any sub-tasks associated with a task, those will also be included in the ingestion process. 

In the case that custom fields are implemented in the Wrike account, all relevant fields are ingested in both the `raw_data` field and the csf field of the ingested document. The document workbench can then be used to extract the necessary information from these fields appropriately.


## RACL Support

Tasks are organized by Spaces or Projects under an Organization. Each Task can be assigned permissions at the User level or at the Group level. 

**User Level Permissions**: For each Task, the email ID of the following set of users are added to the `sys_racl` field in the ingested content. 



* Task Assignees: Users directly assigned to a task
* Task Authors: Users who created the task
* Task Followers: Users following the task
* Shared Users: Users with whom the task has been shared explicitly. 

**Group Level Permissions**: Tasks can also be shared to groups. In this case, the `sys_racl` field contains the GroupID. Use Permission Entity APIs to associate users to this entity. 
