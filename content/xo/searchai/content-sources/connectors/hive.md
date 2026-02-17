# Hive Connector 

**Hive** is a project management and collaboration tool designed to help teams efficiently organize tasks, projects, and workflows. The Hive Connector allows for the seamless integration of **Hive Actions** into the Search AI application, facilitating easy search operations on these actions.

**<span style="text-decoration:underline;">Hive Connector Specifications</span>**


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
   <td>Actions and Sub-Actions
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
   <td>Yes
   </td>
  </tr>
</table>



## Prerequisites 

* Hive Account
* API Key


## Generate API Key on Hive

Search AI interacts with Hive via APIs. To authorize the Search AI API requests, generate an API key in the Hive application. To create an API Key, follow the steps listed below.

1. Go to Edit profile on the Hive application. 
1. Go to API Info and copy the API Key and workspace ID. 


## Configure Hive Connector in Search AI

On the **Auth** page of the connector, enter the following details and click **Connect**.

1. **Name**- Unique name of the connector
1. **API Key** - The API Key generated in Hive. 
1. **Workspace ID**- Workspace ID for which actions are to be ingested. 


## Content Ingestion

Search AI supports the ingestion of Actions from designated projects within your Workspace. It also includes any sub-actions that may exist under the main Actions. 

To start content ingestion,

1. Navigate to the **Configuration** tab of the connector and select the **Sync Specific Content**. 
1. Click **configure**, and then select the projects to ingest actions from. Currently, only actions within a project are ingested. Actions from sub-projects aren't ingested.
1. To ingest content from both a project and its sub-projects, select all relevant projects within the hierarchy.
1. Click **Save**. 
1. Click **Sync Now** to start the ingestion process immediately. Alternatively, schedule sync at regular intervals using the scheduler.

You can view the ingested content under the **Content** tab. 

Each Action and Sub Action in Hive is ingested as a separate individual document in Search AI. For each action, the description, comments, status, priority, deadline, milestones, assignees, and checked date are added to the content field of the ingested document. Other details are captured as metadata. 


## RACL Support

* SearchAI supports access control for content ingested from Hive.
* In Hive, each action is associated with a project and can have specific roles assigned, such as creator, follower, or assignee. SearchAI adds all users in these roles to the sys_racl field for the ingested content.
* SearchAI also supports automatic resolution of permission entities for Hive content. It identifies users who have access to the associated project and automatically associates them with the corresponding permission entities in SearchAI. Manual mapping through APIs is not required.

Permission entities are determined based on the project type and sharing type, as shown below:

<table>
  <tr>
   <td>Type of Project
   </td>
   <td>Sharing Type
   </td>
   <td>sys_racl (added as permission entities)
   </td>
  </tr>
  <tr>
   <td>Public
   </td>
   <td>Everyone
   </td>
   <td>Workspace ID
   </td>
  </tr>
  <tr>
   <td>Public
   </td>
   <td>Custom
   </td>
   <td>projectID, Workspace ID
   </td>
  </tr>
  <tr>
   <td>Private
   </td>
   <td>Everyone 
   </td>
   <td>Workspace ID
   </td>
  </tr>
  <tr>
   <td>Private
   </td>
   <td>Custom 
   </td>
   <td>projectID
   </td>
  </tr>
  <tr>
   <td>Private
   </td>
   <td>Me
   </td>
   <td>projectID
   </td>
  </tr>
</table>


!!!note
    Client mode is not supported via Search AI. 