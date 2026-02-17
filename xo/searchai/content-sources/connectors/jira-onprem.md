# Jira On-Premise Connector

Jira is typically used for issue tracking and agile project management, enabling teams to plan, track, and coordinate tasks through customizable workflows.

Search AI enables easy integration with Jira server to ingest, index, and search through the **Work Items**. This ensures efficient search and retrieval, improving accessibility to content from JIRA.

**<span style="text-decoration:underline;">JIRA Connector Specifications</span>**

<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>On Prem
   </td>
  </tr>
  <tr>
   <td>Supported Content Type
   </td>
   <td>Work Items
   </td>
  </tr>
  <tr>
   <td>Access Control Support 
   </td>
   <td>Yes
   </td>
  </tr>
    <tr>
   <td>Automatic Permission Entities Resolution </td>
   <td>Yes </td>
  </tr>
  <tr>
   <td>Content Filtering Support
   </td>
   <td>Yes
   </td>
  </tr>
</table>


## Prerequisites

* An Atlassian account with *admin* access. This account will be used to fetch content and find the access permissions for the indexed content. Search AI uses basic auth mechanism to communicate with the Jira application.
<!--
## Set up Jira

Search AI interacts with the Jira server through the APIs. To enable Search AI to interact with the Jira server, it needs a **Personal Access Token**. Follow the instructions in this [documentation](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html) for step-by-step instructions. 

While generating the Access Token Key, enable the following scopes to allow Search AI to access relevant information from JIRA. 



* read:application-role:jira
* read:comment:jira
* read:comment.property:jira
* read:group:jira
* read:issue-details:jira
* read:issue-type-hierarchy:jira
* read:issue-type:jira
* read:jira-work
* read:jql:jira
* read:project-category:jira
* read:project-role:jira
* read:project-version:jira
* read:project.component:jira
* read:project.property:jira
* read:project:jira
* read:user:jira
-->

## Configure Jira Connector in SearchAI 

Go to the *Connectors* page and add the *Jira Server Connector*. Provide the following details to configure the connector. 

* Name - Provide a unique name for the connector.  
* Username - Username of the account.
* Password - Password of the account.  
* Domain - The URL of your Jira application instance.


## Content Ingestion

Ingested content from Jira into Search AI includes the following object type: **Work Items**. For work Items, the following fields are ingested into the Search AI application. 

* title: the summary or title of the work item
* content: the full description of the work item
* url: direct link to the work item in Jira
* doc_created_by_name: name of the user who created the work item. 
* doc_created_on: timestamp when the work item was created (UTC)
* doc_updated_on: timestamp of the latest update to the work item (UTC)
* doc_source_type: indicates the type of content.
* priority: work item priority (High, Medium, Low, etc.) 
* status: work item status like open, close, etc
* assignee: username of the person currently assigned to the work item
* reporter_name: name of the user who reported the work item
* comments: all comments on the work item concatenated into one field along with the commentator name. 
* issueType: type of work item (Bug, Task, Story)
* resource_type:  type of work item
* project_name: name of the Jira project

**Note:**

* All timestamps are stored in UTC.
* Work Item comments are concatenated together as comments. Individual comment metadata is not indexed.


## Content Filtering

Jira Server Connector provides standard and advanced filters for indexable content, enabling users to select a specific set of searchable content. 

To ingest all the content from the Jira server account, go to the Manage Content page and select Ingest All content. To do selective ingestion, select Ingest Filtered Content and click the Configure link.  

There are two types of filters - **Standard Filters and Advanced Filters.**

![alt_text](images/jiraonprem/standard-filter.png "image_tooltip")


**Standard Filters**

Use **Standard filters** to ingest selected objects from specific projects. You can select one or more projects.  Once a project is selected, all items of the selected object type within that project will be ingested.

You can also define a **date range** for ingestion using the built-in calendar selector. This allows you to limit the data to a specific time frame based on your requirements.


**Advanced Filters**

Advanced Filters allow more granular control by letting you define **field-based rules**. Currently, since only Work Items are supported for the Jira server connector, you can only define rules for work items. For example, you can configure filters to ingest only specific types of work items from a particular project.



![alt_text](images/jiraonprem/advanced-filters.png "image_tooltip")


Select Work Items fields in the parameter list, provide the operator and values to set the conditions for filtering. You can also add new fields if there are custom fields in your server implementation. Note that when providing custom fields, the field name should match the field name for the selected object in your Jira instance. 

**Filter Precedence & Scope**

* **Advanced Filters override Standard Filters** whenever their criteria conflict. For instance, if one project is selected in the Standard Filter and an Advanced filter is set up using the project key for another project, the project in the Advanced filter will be applied. 

By using Standard Filters and Advanced Filters, you can ensure that the precise set of Jira content you need is ingested into Search AI.


## Access Control

SearchAI supports access control for content ingested from Jira accounts in different ways. 

**Work Items**

* In Jira, each work item is linked to a specific project through a unique **Project ID**.
* This **Project ID** is stored in the **RACL field** of the chunks related to the content ingested from Jira.
* To associate users with a Project ID, use the **Permission Entity APIs**. Users added to the corresponding Permission Entities gain access to the work items associated with those projects.