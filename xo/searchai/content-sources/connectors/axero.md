# Axero Connector

Axero is a digital workplace and intranet platform that enables organizations to manage knowledge, communication, and collaboration through spaces, wikis, discussions, documents, and other content types. The Axero Connector for Search AI enables seamless ingestion of this content into Search AI applications.

**<span style="text-decoration:underline;">Specifications</span>**

<table>
  <tr>
   <td><strong>Type of Repository</strong>
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td><strong>Supported Content</strong>
   </td>
   <td>
<ul>

<li>Pages (CMS Pages)</li>

<li>Wiki</li>

<li>Discussions (Forums)</li>

<li>Documents (Files)</li>

<li>Articles</li>

<li>Announcements</li>

<li>Blogs</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>RACL Support</strong>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Automatic Permission Entities Resolution</strong>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Content Filtering</strong>
   </td>
   <td>Yes
   </td>
  </tr>
</table>



## Prerequisites

* Ensure that the Axero developer account used to generate the API key has access to all the content and resources that the connector must retrieve from the Axero account. 


## Generate an API Key in Axero

1. Log in to your Axero account.
2. Go to My Account and select Preferences.
3. In the left navigation, click My REST API Key.
4. Click Create to generate a new API key.
5. Copy the generated key for use in Search AI.


## Configure Search AI Axero Connector

1. In Search AI, navigate to Connectors and select the Axero connector.
2. On the Authentication page, provide the following details:
    * Name: A unique name for the connector.
    * API Key: The Axero API key generated in the previous step.
    * Host URL: The base URL of your Axero domain.


## Content Ingestion

After authentication and a successful sync, the Axero connector ingests the following content types into the application:

* Pages (CMS Pages)
* Wiki
* Discussions (Forums)
* Documents (Files)
* Articles
* Announcements
* Blogs

Each ingested record includes metadata describing the source and structure of the content:

* `doc_source_type` indicates the Axero content type for the record.
* `content` contains the extracted text or body of the content item. Except for files and annoucements, this field also has the summary of the content. 
* Metadata fields such as `doc_created_by`, `doc_created_on`, `doc_updated_by`, and `doc_updated_on` capture authorship and timestamps.
* The comments associated with a content item are also present in the comments fields.
* The connector maps Categories and tags, when available, to their corresponding JSON fields for improved classification and retrieval.


## Access Control

Most Axero content items belong to a Space, which determines their visibility. The connector applies access control as follows:

* The connector sets the `sys_racl` field to the Space ID associated with the content item.
* For content not assigned to any space,  it sets `sys_racl` to `root`.

The connector also performs automatic permission entity resolution:

* It identifies the users who have access to each space.
* It automatically maps space-level permissions to individual users.

This eliminates the need for developers to associate users with permission entities manually during ingestion.

## Content Filters

The Search AI Axero Connector supports selective ingestion through configurable content filters. On the Manage Content page, you can choose the Axero content types to ingest using the dropdown menu. This selection applies consistently across both Standard and Advanced filters.

* Standard Filters: Select one or more Spaces for the connector to ingest content from. The connector includes only content associated with the chosen spaces in the sync.
* Advanced Filters: Filter content based on its last updated date. Specify a timeframe to ingest only items updated within that window.