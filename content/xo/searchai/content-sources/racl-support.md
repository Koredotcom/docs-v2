# RACL Support

RACL refers to the method of controlling access to specific resources or information based on the roles of individual users within the organization. Through RACL, the enterprise search application can ensure that users only see answers and access documents or information relevant to their organizational roles. This helps maintain data security, confidentiality, and compliance with organizational policies and regulations.

## RACL In Search AI

Search AI enforces access control by ensuring users receive answers only from content they're authorized to view.

Each file or knowledge base article includes user access permissions. During data ingestion, Search AI retrieves this information from the third-party app and stores it in the indexed content alongside other metadata. When a user submits a query, Search AI identifies all content the user can access and selects the best-matching answer from that subset.

Access control in Search AI follows the flow in the following illustration: 

![Overview](images/connectors/racl/overview1.png "RACL overview")

Query responses can vary based on the user's access. For example:

* User A has access to policy documents.
* User B can only view FAQs.

If both users request a policy description:

* User A receives a response sourced from the policy document (assuming it best matches the query).
* User B receives a response sourced from the FAQs (assuming it's the next best match).
The content of each response would differ based on the source document.


## RACL Implementation in Search AI

**Ingestion and Indexing**: During the ingestion process, Search AI imports the permissions (list of users, user groups, or user criteria- depending on the specific connector) that define who can access a particular file or article, along with the content and metadata. Search AI stores this access information within the indexed content. Specifically, it's stored in the `sys_racl` field with every chunk.

**Access Control Logic**: Only users whose identities appear in the sys_racl field of the content used to generate answers can view the results when they submit a query to the app.

For example: Consider a Google Drive file owned by John and shared with Casey and Abby. In this case, the `sys_racl` field would contain the identities of all three users. As a result, only John, Casey, and Abby can view the answers generated from this file.

Because permission models and scopes vary across connectors, each connector uses a distinct set of permissions to fetch access information from the content. When specific content includes information about a user group, the system creates a corresponding Permission Entity and adds it to the content’s sys_racl field. For connector-specific details on how Search AI populates the `sys_racl` field, refer to the documentation of that connector.

### Step 1: Retrieving and Storing Access Information

The connector fetches document permissions along with its content from the source using the APIs provided by the source or the third-party app (for example: Google Drive). The type of permissions depends on the supported mechanism in the third-party application. For specific details, refer to the documentation of the respective connector.

The connector stores the permissions retrieved from the document in the `sys_racl` field of the ingested content.

The permissions for an item are of the following types:

1. **Individual permissions**: The content (file or knowledge article) directly specifies the list of user identities that can access it ( for example, `user1@example.com`, `user2@example.com`). In this case, Search AI retrieves and stores user identities in the racl field of the indexed content as shown below.

    ```json
    "sys_racl": [
     "abraham.lincoln@example.com",
     "bernard.laboy@example.com"
     ],
    
    ```

2. **Group Permissions**- The content specifies a group of users or a criterion that defines who can access it (for example, `devteam@example.com`). When the access information retrieved from the content refers to group permissions, Search AI uses Permission Entities. A unique permission entity is created for each group or user criterion associated with the content. For example, if a Google Drive file is accessible to two individuals, `john.doe@example.com`, `smitha.joseph@example.com`, and to all the members of the group `testteam@example.com`, Search AI would fetch the access list and store it in the indexed content. In this case, the first two entries correspond to the users, and the third corresponds to the permission entity created for the group. 

    ```json
    "sourceId": "fs-18107a80-7bf7-57d9-9a8f-96835bdbffad",
    "recordTitle": "Apple.pdf",
    "pageNumber": 8,
    "docId": "fc-c874e889-623f-5bc9-b592-59e7ce93c64e",
    "recordUrl": "https://drive.google.com/file/d/16vygQOBSrEnapKYwzUCrDSX-CrKPn_Ixg/view?usp=drivesdk#page=8",
    "searchIndexId": "sid=3c882ad9-600d-5ab3-ad0b-67d8a3af3d95",
    
    "sourceAcl": [
        "john.doe@example.com",
        "smitha.joseph@example.com",
        "testteam@example.com"
    ],
    
    "chunkType": "text",
    "chunkId": "chk-e94xxxxxxxxxxx-55-4aac-9e57-69977c61feec",
    "createdOn": "2024-06-13T10:15:33.679195022",
    "chunkContent": "recordTitle : Apple.pdf; chunkText : The document provides an overview of emerging technologies adopted by enterprises in 2025, including advancements in edge computing, container orchestration, and AI-powered monitoring tools. It summarizes performance evaluations conducted across various cloud providers such as Azure, AWS, and Google Cloud, focusing on scalability and data governance. The analysis also covers recent partnerships between enterprises and startups to enhance automation, improve developer experience, and streamline infrastructure provisioning."
    ```
    
  Similarly, if a ServiceNow article gives access to two user criteria, Search AI creates two permission entities corresponding to the user criteria. The article’s manager and owners are also granted access. Hence, the sys_racl field would be something like this: the first two entries are for the permission entities, and the next two are for the article’s owners and managers.

    ```json
    "sys_racl": [
     "25431493ff4221009b20ffffffffffe0",
     "29b4e0c9873023000e3dd61e36cb0b42",
     "abraham.lincoln@example.com",
     "bernard.laboy@example.com"
    ]
    ```

Note:

* The content and format of the permission entity may vary across connectors.
* For some connectors, Search AI also retrieves individual users associated with a group or user criterion and automatically links them to the corresponding permission entity. Refer to connector-specific documentation for details.

3. **Public Access**: When content has no specific permissions and is accessible to everyone, the connector sets the racl fields in the indexed content to *, as shown below. Any file indexed this way becomes accessible to all users.

![Public Access](images/connectors/racl/public-access.png "public-access")

#### View Permission Information

To view and verify the user permissions in the ingested content, go to the Content page and open the JSON view corresponding to the file, and verify the contents of the `sys_racl` field. The same information is also available in individual chunks created from the ingested content. Verify the `sys_racl` field for a chunk in the Chunk Viewer. 

![Chunk Viewer](images/connectors/racl/chunk-viewer.png "Chunk Viewer")


<!--The individual permission entities and users are listed under the Permissions page. Group tab lists the permission entities created corresponding to all the user groups having access to the ingested content and the Users tab lists all the individual users or entities having access to the ingested content. ![View permissions groups](images/connectors/racl/view-permissions-groups.png "RACL permissions")-->

### Step 2: Verifying user identities

When a user sends a query, Search AI uses the user identity information and finds answers from the accessible content only. 

It matches the user identity against the racl fields in the chunks. In case, the user belongs to a group and the group is a permission entity for the content, Search AI needs additional information about the association of the user with the corresponding permission entity. Refer to the [Handling Group Identities](#step-3-resolving-user-identity) section below.  

* **Passing User Identities in Search APIs**

    When the user interacts with Search AI via APIs(Answer Generation API), the user must send the identity information along with other fields in the request object. If the identity information isn't passed in the apis, the user can't access restricted content.


    Search AI allows passing user identity through both the request header as well as the request body in the API. The system admin configures this. Contact your system admin to learn about the variable name and format for passing the user identity information in the search APIs. 


    For instance, if you map the user identity to a field named `useremail` in the Request Headers, invoke the `advancedSearch API` accordingly. 


    ```
    curl --location --request POST 'https://<domain>.ai/api/public/stream/st-670f1a12-9xxxxxx5c3f/advancedSearch?useremail=myemail@example.com' \
    --header 'Content-Type: application/json' \
    --header 'integration-service: general' \
    --header 'service-host: https://solutions-pilot.domain.ai/api/1.1/public/tables/' \
    --header 'datatable: pushnotificationstable-dev' \
    --header 'Auth: eyJhbGciOiJIUzxxxxxxxxxxxxxxxxxxxxxxZ9GbULGdQaPQ' \
    --data-raw '{
      "query":"AI regulations"
    }'
    ```


* **Passing User Identities from SDK**

    When using an SDK to perform a search using the Search AI application, you can embed the user identity information into the SDK code so that the application can identify the user and perform access checks as needed. 

### Step 3: Resolving user identity

If the third party application uses user groups or user criteria (rather than individual users) to store access information, Search AI creates a Permission Entity to represent that group in the indexed content. It stores this entity in the sys_racl field but does't contain individual user details.

To enforce access control at query time, Search AI must resolve which individual users belong to each Permission Entity.

For example, if a file is accessible only to employees in the HR department, Search AI indexes the file with a Permission Entity representing that department and does't have information about the individual users associated with the department. However, at query time, it must know which specific users (for example: `jane.doe@example.com`, `john.smith@example.com`) are in the HR department to determine access.

In such a case, Search AI needs additional information to determine the association between the users and the groups. 

**Automatic Permission Entity Resolution**

For specific connectors, Search AI automatically resolves permission entities into individual user identities. This process involves:

* Fetching group membership data from the source system.
* Maintaining up-to-date internal mappings between groups and their members.

This means that a permission entity created for a group is automatically associated with the users of the group. Therefore, the administrators don't need to associate users with the group manually.  

<table>
  <tr>
   <td rowspan="8" >
<ul>

<li>Gdrive</li>

<li>Jira</li>

<li>Sharepoint</li>

<li>Trello</li>

<li>miro</li>

<li>lumapps</li>

<li>Workday</li>

<li>OneDrive</li>

<li>ReAmaze</li>

<li>Bit bucket</li>
</ul>
   </td>
   <td rowspan="8" >
<ul>

<li>Youtrack</li>

<li>Zulip</li>

<li>box</li>

<li>Shortcut</li>

<li>Zeplin</li>

<li>HelpScout</li>

<li>Slack</li>

<li>Hubspot</li>

<li>PagerDuty</li>
</ul>
   </td>
   <td rowspan="8" >
<ul>

<li>Zendesk</li>

<li>Ms Teams</li>

<li>Salesforce</li>

<li>hive</li>

<li>Github</li>

<li>Aha</li>

<li>JIRA On-Prem</li>

<li>XMatters SaaS</li>

<li>Guru</li>
</ul>
   </td>
   <td rowspan="8" >
<ul>

<li>ServiceNow</li>

<li>Confluence Server</li>

<li>JFrog Artifactory On-Prem</li>

<li>JFrog Artifactory Cloud</li>

<li>Confluence cloud</li>

<li>asana</li>

<li>Zoom</li>

<li>Fresh Desk</li>
</ul>
   </td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
</table>


Refer to the specific connector’s documentation to determine whether it supports automatic permission entity resolution.

**Manual Resolution via APIs**

For other connectors, this must be manually done with the help of Permission Entity APIs. These APIs let you manage the user-to-permission entity associations. Learn more about [Permission Entity APIs here](../../apis/searchai/permission-entity-apis.md). Refer to connector-specific documentation to learn about the support of automatic permission entity resolution.


## Set up 

RACL supports content ingested through connectors only. 

### Enabling RACL

To enable RACL for a connector:

1. Go to the **Permissions** page of the specific connector.
2. Select the **Restricted Access** option.

This enables Search AI to read and apply user-specific access permissions from the third-party application.

![Permissions](connectors/images/permissions.png "Permissions")

If the connector supports Automatic Permission Entity Resolution, an additional checkbox is available to enable automatic resolution.

### Updating RACL permissions

**From Public Access to Restricted Access**

When you enable RACL, that is, changing the access from Public Access to Restricted access, manually initiate a sync from the connector. This ensures the connector fetches and indexes the latest permission data. If you schedule an automatic sync with the connector for a future time, the updated permissions take effect after the next sync activity.

**From Restricted Access to Public Access**

When you change the access from Restricted  Access to Public Access, the connector automatically disables the RACL feature and makes the content publicly available. Sync operation is't required in this case. 


### RACL Scheduler

Access permissions to documents often change more frequently than the content itself. To ensure that these changes reflect automatically, use the RACL scheduler, which operates independently from the content scheduler.

You can also set up permission syncs separately from the content syncs. The **Sync Scope** column identifies RACL-specific syncs as **Permission Sync**, improving traceability and simplifying troubleshooting.

To configure the RACL scheduler:

* Open the Permissions section of the connector.
* Enable the Permissions Sync Scheduled option.
* Set the desired time and frequency for syncing access control information.

If you disable the RACL scheduler, the system updates permissions during content syncs.

<!-----
### Alerts & Issues

SearchAI includes a dedicated **Alerts & Issues** tab to help administrators identify and troubleshoot sync-related problems across connectors. This view provides insights into the following types of issues.

* API failures during sync.
* Status indicators like “Partial Success” for incomplete group syncs.

The tab improves visibility into sync health and simplifies issue resolution across both content and permission pipelines.

![Alerts & Issues](images/connectors/racl/alerts-issues.png "Alerts & Issues")
----->

## Tailored Solutions for your RACL Requirements

To achieve complete RACL functionality and ensure seamless integration with your application, additional configuration and setup may be
necessary. Connect with our experts to facilitate a smooth implementation.


[Talk with an Expert](https://kore.ai/contact-us/)