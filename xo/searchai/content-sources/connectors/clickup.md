# ClickUp Connector

ClickUp is an application designed for organizing, tracking, and collaborating on work. Its task management feature allows users to create tasks, set priorities, assign deadlines, and monitor progress. SearchAI facilitates the ingestion of these **tasks **and enables quick, efficient searches across them. This helps users easily find task updates, assignments, and project details.

**<span style="text-decoration:underline;">ClickUp Connector Specifications</span>**


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
   <td>Tasks and Sub-Tasks
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

Search AI uses ClickUp APIs to communicate with it. For authentication in the APIs, generate an API Token. Refer to the steps listed below to create an API Token. 



1. Go to the Workspace Settings. 
2. Under Settings, go to the Apps page. 
3. Find your API Token on this page. If it is unavailable, click on **Generate** to create a new one.

Please note that this Personal API Token provides access to all the workspaces the user has permission to access.


## ClickUp Connector Configuration in Search AI

On the **Auth** page of the connector, provide the following details and click **Connect**.



* **Name**- Unique name of the connector.
* **Authorization Type**- Set it to APIKey
* **API Key** - The API Key generated in ClickUp. 


## Content Ingestion

Upon successful sync, the connector ingests Tasks and their details from the ClickUp application.  

Task description along with its metadata like status, priority, start date, due date, project name, folder, etc., are ingested. If there are any checklists or sub-tasks related to the main task, they will also be included in the task document. Additionally, if there are any attachments, their names and URLs will be provided. However, the content of the attachments will not be ingested.


## RACL Support

For each task, currently, the `sys_racl` field is populated with the folderID of the folder that it belongs to. If the task is directly under a space, the `sys_racl` is set to *. 

FolderID is used as a permission entity. Use the permission entity APIs to associate users with the entity(folderID). 
