# Unified Schema for Connector Content

Search AI utilizes a Unified Schema to standardize data ingestion from diverse content sources, including enterprise applications, files, and webpages. This schema defines a consistent structure that allows data from different formats and systems to be interpreted and utilized uniformly for search operations.

When content is ingested via connectors, data from various fields across different applications is automatically mapped to the most relevant fields in the unified schema. This ensures that Search AI maintains a consistent representation of content, regardless of the source.

The Unified Schema has a predefined set of fields, also referred to as **Document Fields**,  to store the content and metadata of the ingested content. During ingestion, data from the source application is automatically assigned to the most relevant unified schema field. Users can override default mappings using the **Field Mapping** option in the connector configuration. The schema can also be extended to accommodate new custom fields.

The following are the default fields of the Unified Schema.  

!!!note 
    Note that some of the fields in the list are system fields and can't be updated. 

<table>
  <tr>
   <td>Document Fields   </td>
   <td>Description   </td>
   <td>Is System Field  </td>
  </tr>
  <tr>
   <td>access_level
   </td>
   <td>Defines the visibility or permission level associated with the document.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>archived_at
   </td>
   <td>Timestamp indicating when the document or record was archived.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>assignee
   </td>
   <td>Identifier of the user or entity responsible for the document, task, or record. 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>assignee_email
   </td>
   <td>Email address of the user assigned to the document
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>assignee_name
   </td>
   <td>Display name of the assignee
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>blockedAcl
   </td>
   <td>A list of users or groups explicitly restricted from accessing the document.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>branch
   </td>
   <td>Represents the branch, version, or division of content, particularly in systems that support branching (For example, code repositories, knowledge bases)
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>category
   </td>
   <td>Classification label used to group similar documents or content types
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>channel_id
   </td>
   <td>Unique identifier for the communication channel from where the document originates. 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>checksum
   </td>
   <td>A unique hash value generated for the document content.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>chunkType
   </td>
   <td>Type of chunk.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>closedOn
   </td>
   <td>Timestamp indicating when the item (For example, issue, task, or conversation) was closed.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>comment_count
   </td>
   <td>Total number of comments associated with the item.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>comments
   </td>
   <td>List or collection of user comments related to the item
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>commit_id
   </td>
   <td>Unique identifier of the commit associated with the item.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>company_id
   </td>
   <td>Unique identifier for the company or organization.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>company_name
   </td>
   <td>Name of the company associated with the record.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>contact_id
   </td>
   <td>Unique identifier for the contact person.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>contact_name
   </td>
   <td>Name of the contact person.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>content
   </td>
   <td>Main textual or structured content of the record (for example, body of a document, note, or comment).
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>contentId
   </td>
   <td>Unique identifier of the content entity.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>conversation_id
   </td>
   <td>Unique identifier of the conversation or thread.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>createdBy
   </td>
   <td>User ID or name of the person who created the item.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>createdOn
   </td>
   <td>Timestamp when the item was created.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>deleted_at
   </td>
   <td>Timestamp when the item was deleted (if soft-deleted).
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_created_by
   </td>
   <td>Identifier or name of the user who created the document.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_created_by_email
   </td>
   <td>Email address of the document creator.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_created_by_id
   </td>
   <td>Unique ID of the document creator.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_created_by_name
   </td>
   <td>Full name of the document creator.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_created_on
   </td>
   <td>Timestamp when the document was created.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_id
   </td>
   <td>Timestamp when the document was created.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_path
   </td>
   <td>File path or storage path of the document.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_source_type
   </td>
   <td>Type of source from which the document was ingested.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_updated_by
   </td>
   <td>Identifier or name of the user who last updated the document.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_updated_by_email
   </td>
   <td>Email address of the user who updated the document.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_updated_by_id
   </td>
   <td>Unique ID of the user who last updated the document.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>doc_updated_on
   </td>
   <td>Timestamp when the document was last updated.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>downvote_count
   </td>
   <td>Number of down votes received by the item (for example, post, comment, or answer).
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>due_date
   </td>
   <td>The due date or deadline associated with the task or item.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>extractionMethod
   </td>
   <td>Method used to extract data from the source.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>extractionStrategy
   </td>
   <td>Strategy or approach followed for data extraction
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>file_content
   </td>
   <td>Actual text or encoded content of the file.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>file_image_url
   </td>
   <td>URL to the preview image of the file.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>file_preview
   </td>
   <td>Short summary or visual preview of the file content.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>file_title
   </td>
   <td>Title or display name of the file.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>file_url
   </td>
   <td>Direct URL link to access or download the file.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>html
   </td>
   <td>Raw HTML version of the document or page content.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>issueType
   </td>
   <td>Type or category of issue.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>keywords
   </td>
   <td>List of keywords or tags extracted or assigned to the content.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>labels
   </td>
   <td>Labels or classifications applied to the item 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>language
   </td>
   <td>Language in which the content is written 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>lastSyncAt
   </td>
   <td>Timestamp of the most recent synchronization with the source system.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>location
   </td>
   <td>Physical or virtual location associated with the record
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>mentioned_users
   </td>
   <td>List of users mentioned or tagged within the content.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>message_type
   </td>
   <td>Type of message
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>mime_type
   </td>
   <td>MIME type of the file or document
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>object_created_by_email
   </td>
   <td>Email address of the user who created the object.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>object_created_by_id
   </td>
   <td>ID of the user who created the object.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>object_created_by_name
   </td>
   <td>Name of the user who created the object.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>object_created_on
   </td>
   <td>Timestamp when the object was created.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>object_type
   </td>
   <td>Type of object 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>organization_id
   </td>
   <td>Unique identifier for the organization.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>organization_name
   </td>
   <td>Name of the organization associated with the record.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>owner_email
   </td>
   <td>Email address of the item owner or assignee.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>owner_id
   </td>
   <td>Unique ID of the item owner or assignee
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>owner_name
   </td>
   <td>Full name of the item owner or assignee.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>page_body
   </td>
   <td>Text content or body of an HTML page
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>page_count
   </td>
   <td>Number of pages in the document from which the content is ingested.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>page_html
   </td>
   <td>Page content in HTML format.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>page_image_url
   </td>
   <td>URL for the page image or thumbnail
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>page_preview
   </td>
   <td>Short preview of the page content.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>page_title
   </td>
   <td>Title of the page.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>page_number
   </td>
   <td>Page number of the content
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>page_url
   </td>
   <td>URL of the page or web resource.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>parent_url
   </td>
   <td>URL of the parent document or source from which this page is derived.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>parent_name
   </td>
   <td>Name of the parent entity.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>priority
   </td>
   <td>Priority level of the item. 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>project_description
   </td>
   <td>Description or summary of the project.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>project_id
   </td>
   <td>Unique identifier for the project.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>project_name
   </td>
   <td>Name of the project.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>project_owner_email
   </td>
   <td>Email address of the project owner
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>project_owner_id
   </td>
   <td>ID of the project owner.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>project_owner_name
   </td>
   <td>Name of the project owner.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>project_status
   </td>
   <td>Current status of the project.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>projectName
   </td>
   <td>Name of the project.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>published_at
   </td>
   <td>Timestamp when the item or content was published.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>reporter
   </td>
   <td>Identifier or name of the person who reported the issue.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>reporter_email
   </td>
   <td>Email address of the reporter.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>reporter_name
   </td>
   <td>Full name of the reporter.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>repository_id
   </td>
   <td>Unique ID of the code or content repository
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>repository_name
   </td>
   <td>Name of the repository.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>resource_type
   </td>
   <td>Type of resource 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>share_count
   </td>
   <td>Number of times the item has been shared
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>size
   </td>
   <td>File size or data volume 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>sprint
   </td>
   <td>Sprint or iteration to which the item belongs
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>Current status of the item
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>sys_file_type
   </td>
   <td>System-defined file type classification
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>sys_racl
   </td>
   <td>Role-based Access Control List defining permissions for the resource.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>sourceType
   </td>
   <td>Type of content source: web crawl, file upload, or connector.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>sys_source_name
   </td>
   <td>Name of the system or connector from which the item originated.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>tags
   </td>
   <td>Tags associated with the record for categorization or search.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>thread_id
   </td>
   <td>Unique identifier of the thread or discussion chain.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>title
   </td>
   <td>Title or name of the item.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>updatedBy
   </td>
   <td>Identifier or name of the user who last updated the record.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>updatedOn
   </td>
   <td>Timestamp when the record was last updated.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>url
   </td>
   <td>Link to access the resource or item.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>upvote_count
   </td>
   <td>Number of up votes received by the item.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>view_count
   </td>
   <td>Number of times the item has been viewed.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>visibility
   </td>
   <td>Access level of the item .
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>workspace_id
   </td>
   <td>Unique identifier for the workspace or environment.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>workspace_name
   </td>
   <td>Name of the workspace associated with the item.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



## Custom Fields in Schema

Search AI allows the extension of the Unified Schema by adding up to 50 custom fields, enabling users to include additional data from third-party applications as searchable content. This flexibility ensures that unique business requirements and specialized metadata can be accommodated seamlessly. 

Custom fields can also be used in the workbench, where users can map any value to them. For example, they can send the ingested content to an LLM and ask to summarize, and then store the summarized values in the custom field.

### Adding a New Field 

To add a new custom field, 

* Click on the Manage Schema button on the Manage Content page in the connector. 
* Click on +New Field button.
* Enter the following fields:
    * Display Name -  The user-friendly name for the field (for display in UI only).
    * Data Type - Type of value of the field. This can be a string or array . 
    * Field Name  -  This is the technical name of the field. This name is used as a reference in the scripts in the document workbench or in the post-processor script for field mapping in connectors. For array-type fields, use cfa1 to cfa5, and for string-type fields, use cfs1 to 45. 
    * Description -  A brief description of the intended use of the field. 


### Field Mapping 

By default, the fields ingested from a connector are automatically mapped to the most appropriate fields in the unified schema. But this can be customized for specific business requirements. 

For example, assume an organization uses a Google Drive connector to ingest documents into Search AI. By default, the Google Drive field createdTime is mapped to the unified schema field createdOn. However, if the org wants to display the last modified user information in search results. To achieve this, the field mapping can be updated to include the Google Drive field lastModifyingUser.displayName, mapping it to the unified schema field updatedBy.

**Implementing Field Mapping**

After an initial sync with a connector, you can view the payload of the response and use it to map the fields as required with the post-processor script.

* Go to the Field Mapping tab under Manage Content. 
* The source payload shows the actual response from the connector. The mandatory fields required by Search AI are listed on the right pane. 
* Use the source payload and post-processor scripts to map fields from the source applications to the fields of the unified schema. A default script is presented for each connector, which shows how the fields are mapped for the connector by default.  ![Field Mapping](images/field-mapping.png "Field Mapping")

For instance, if the source payload is as follows and you need to map the createdAt field to the doc_created_on field in the unified schema, add the following line to the script.

**Source Payload**

```json
{
    "incidents": {
        "title": "I : System Outages duplicates ----",
        "content": "System Outages , Impact Start Date : 2025-04-04T12:14:32.419Z, Impact End Date : Mon May 12 2025 10:12:25 GMT+0000 (Coordinated Universal Time), Responders : User : John Doe , Actions : ",
        "type": "incident",
        "id": "79d68c5a-762f-4c0a-b412-49a6d75b92b0",
        "tinyId": "5",
        "status": "open",
        "labels": [
            "System Outages"
        ],
        "createdAt": "2025-04-04T12:14:32.419Z",
        "updatedAt": "2025-04-04T12:14:49.526Z",
        "priority": "P3",
        "responders": "User: John Doe, ",
        "actions": [],
        "impactStartDate": "2025-04-04T12:14:32.419Z",
        "impactEndDate": "2025-05-12T10:12:25.985Z"
    }
}
```

**Script Updates**

```json
context.doc_created_on  = context?.raw_json?.createdAt;
```


If a connector supports multiple objects, the source payload displays a concatenated set of fields for all those objects. When mapping fields from two or more supported objects to custom fields, create separate custom fields for each object,as shown below. Even though the records for these objects are distinct, the field mapping section is currently set up to configure them together.

For instance, if a connector supports incidents and alerts, and the titles of these are to be assigned to custom fields, use separate custom fields. 


```json
context.cfs1 = context?.raw_json?.incidentTitle;
Context.cfs2 = context?.raw_json?.alertTitle;
```

