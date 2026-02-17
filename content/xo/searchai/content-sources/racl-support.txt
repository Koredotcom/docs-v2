# RACL Support

RACL is a method for managing access to resources based on user roles within an organization. It ensures that users can only view responses and access documents relevant to their assigned roles—helping maintain data security, confidentiality, and compliance with organizational policies.

## RACL In Search AI

SearchAI enforces access control by ensuring users receive answers only from content they're authorized to view.

Each file or knowledge base article includes user access permissions. During data ingestion, SearchAI retrieves this information from the third-party app and stores it in the indexed content alongside other metadata. When a user submits a query, SearchAI identifies all content the user can access and selects the best-matching answer from that subset.

Access control in SearchAI follows the flow in the following illustration: 

![Overview](images/connectors/racl/overview1.png "RACL overview")

Query responses can vary based on the user's access. For example:

* User A has access to policy documents.
* User B can only view FAQs.

If both users request a policy description:

* User A receives a response sourced from the policy document (assuming it best matches the query).
* User B receives a response sourced from the FAQs (assuming it's the next best match).
The content of each response will differ based on the source document.

To support validation and troubleshooting, SearchAI includes a **Document Access Viewer** in the UI. This feature provides document-level visibility into which users or entities can access specific content, helping administrators confirm permission enforcement before testing or deployment.

## RACL Implementation in SearchAI

**Ingestion and Indexing**

During the ingestion process, SearchAI imports the permissions (list of users, user groups, or user criteria- depending on the specific connector) that define who can access a particular file or article, along with the content and metadata. This access information is stored within the indexed content. Specifically, it's stored in the `sys_racl` field with every chunk.

**Access Control Logic**

When a user submits a query to the app, results are displayed only if the user’s identity is listed in the `sys_racl` field of the content from which the results are derived.

For example: Consider a Google Drive file owned by John and shared with Smitha and Abby. In this case, the `sys_racl` field will contain the identities of all three users. As a result, any answers generated from this file is accessible only to John, Smitha, and Abby.

Due to variations in the nature of permissions and scopes across different connectors, distinct sets of permissions are used to fetch this information from the content. When a specific content contains information about a group of users, a **Permission Entity** is created corresponding to it and populated in the `sys_racl` field for the content. For more specific details on how the `sys_racl` field is populated for a connector, refer to the documentation of the respective connector.

### Step 1: Retrieving and Storing Access Information

When RACL is enabled, the connector fetches document permissions along with its content from the source using the APIs provided by the source or the third-party app (for example: Google Drive).  The type of permissions depends on the supported mechanism in the backend app. For specific details, refer to the documentation of the respective connector.

The permissions retrieved from the document are stored in the `sys_racl` field in the **Answer Index**.

The permissions for an item can be broadly categorized into the following types:

1. **Individual permissions**: The content (file, knowledge article, etc.) directly specifies the list of user identities that can access it ( for example, user1@example.com, user2@example.com, etc). In this case, user identities are retrieved and stored in the racl field of the indexed content as shown below.

    ```json
    "sys_racl": [
     "abraham.lincoln@example.com",
     "bernard.laboy@example.com"
     ],
    
    ```

2. **Group Permissions**- The content specifies a group of users or a criterion that defines who can access it (for example, devteam@example.com). When the access information retrieved from the content refers to group permissions, SearchAI uses Permission Entities. A unique permission entity is created for each group or user criterion associated with the content. For example, if a Google Drive file is accessible to two individuals, “john.doe@example.com”, “smitha.joseph@example.com”, and to all the members of the group “testteam@example.com”, SearchAI will fetch the access list and store it in the indexed content. In this case, the first two entries correspond to the users, and the third corresponds to the permission entity created for the group. 

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

    ![Group Permissions](images/connectors/racl/group-permissions.png "Group Permissions")

    Similarly, if a ServiceNow article gives access to two user criteria, SearchAI will create two permission entities corresponding to the user criteria. The article’s manager and owners will also be granted access. Hence, the sys_racl field will be something like this: the first two entries are for the permission entities, and the next two are for the article’s owners and managers.        

    ```json
    "sys_racl": [
     "25431493ff4221009b20ffffffffffe0",
     "29b4e0c9873023000e3dd61e36cb0b42",
     "abraham.lincoln@example.com",
     "bernard.laboy@example.com"
    ]
    ```

    !!! note
    
    * The content and format of the permission entity may vary across connectors.
    * For some connectors, Search AI also retrieves individual users associated with a group or user criterion and automatically links them to the corresponding permission entity. Refer to connector-specific documentation for details.
    ![View permissions groups](images/connectors/racl/view-permissions-groups.png "RACL permissions")

3. **Public Access**: Where the content has no specific permissions associated with it and is accessible to all. In this case, no access control is required. The racl fields in the indexed content are set to *, as shown below. Any file indexed in this way will be accessible to all the users.
![Public Access](images/connectors/racl/public-access.png "public-access")

#### View Permission Information

To view and verify the user permissions in the Answer Index, go to the **Browse page**, open the JSON view of a chunk corresponding to the file, and verify the contents of the `sys_racl` field. 

![Chunk Viewer](images/connectors/racl/chunk-viewer.png "Chunk Viewer")

### Step 2: Verifying user identities

When a user sends a query, SearchAI uses the user identity information and finds answers from the accessible content only. 

The user identity is matched against the racl fields in the chunks. In case, the user belongs to a group and the group is a permission entity for the content, SearchAI needs additional information about the association of the user with the corresponding permission entity. Refer to the [Handling Group Identities](https://docs.kore.ai/searchassist/manage-content-sources/racl-overview/#Resolving_user_identity) section below.  

* **Passing User Identities in Search APIs**

    When the user interacts with SearchAI via APIs(Answer Generation API), the user must send the identity information along with other fields in the request object. The user can't access restricted content unless the identity information is passed.


    SearchAI allows passing user identity through both the request header as well as the request body in the API. The system admin configures this. Contact your system admin to learn about the variable name and format for passing the user identity information in the search APIs. 


    For instance, if the user identity information is mapped to a field named ‘useremail’ sent as part of Request Headers, invoke the `advancedSearch` API accordingly. 


    ```
    curl --location --request POST 'https://my-xo.domain.ai/api/public/stream/st-670f1a12-9xxxxxx5c3f/advancedSearch?useremail=myemail@example.com' \
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

    When using an SDK to perform a search using the SearchAI application, you can embed the user identity information into the SDK code so that the application can identify the user and perform access checks as needed. 

### Step 3: Resolving user identity

When access to content is defined using user groups or user criteria (rather than individual users), SearchAI creates a Permission Entity to represent that group in the indexed content. This entity is stored in the sys_racl field but does't contain individual user details.

To enforce access control at query time, SearchAI must resolve which individual users belong to each Permission Entity.

For example, if a file is accessible only to employees in the HR department, SearchAI indexes the file with a Permission Entity representing that department and does't have information about the individual users associated with the department. However, at query time, it must know which specific users (for example: jane.doe@example.com, john.smith@example.com) are in the HR department to determine access.

In such a case, SearchAI needs additional information to determine the association between the users and the groups. 

**Automatic Permission Entity Resolution**

For some connectors, SearchAI can automatically resolve permission entities into individual user identities by:

* Fetching user group/user criterion membership data from the source system.
* Maintaining up-to-date mappings internally.

Refer to connector-specific documentation to see if automatic permission entity resolution is supported.

**Manual Resolution via APIs**

For other connectors, this must be manually done with the help of Permission Entity APIs. Permission Entity APIs can be used to manage the user-to-permission entity associations. Learn more about [Permission Entity APIs here](../../apis/searchai/permission-entity-apis.md). Refer to connector-specific documentation to learn about the support of automatic permission entity resolution.

## Alerts & Issues

SearchAI includes a dedicated **Alerts & Issues** tab to help administrators identify and troubleshoot sync-related problems across connectors. This view surfaces:

* API failures during sync
* Warnings such as rate-limit hits
* Status indicators like “Partial Success” for incomplete group syncs

The tab improves visibility into sync health and simplifies issue resolution across both content and permission pipelines.

![Alerts & Issues](images/connectors/racl/alerts-issues.png "Alerts & Issues")

## Set up 

RACL supports content ingested through connectors only. 

### Enabling RACL

To enable RACL for a connector:

1. Go to the **Permissions** page of the specific connector.
2. Select the **Restricted Access** option.

This enables SearchAI to read and apply user-specific access permissions from the third-party application.

![Permissions](connectors/images/permissions.png "Permissions")

### Updating RACL permissions

**From Public Access to Restricted Access**

When RACL is enabled, i.e., the access is changed from Public Access to Restricted access, **manually initiate a sync** from the connector. This ensures the connector fetches and indexes the latest permission data. If an automatic sync with the connector is scheduled for the future, updated permissions take effect after the **next sync** activity.

**From Restricted Access to Public Access**

When the access is changed from Restricted  Access to Public Access, the connector automatically disables the RACL feature and makes the content publicly available. Sync operation is't required in this case. 


### RACL Scheduler

Access permissions to documents often change more frequently than the content itself. To ensure these changes are reflected automatically, use the RACL scheduler, which operates independently from the content scheduler.

Permission syncs are now logged separately from content syncs. A new **Sync Scope** column identifies RACL-specific syncs as **Permission Sync**, improving traceability and simplifying troubleshooting.

To configure the RACL scheduler:

* Open the Permissions section of the connector.
* Enable the Permissions Sync Scheduled option.
* Set the desired time and frequency for syncing access control information.

If the RACL scheduler is disabled, permission updates will occur during content syncs.


## Tailored Solutions for your RACL Requirements

To achieve complete RACL functionality and ensure seamless integration with your application, additional configuration and setup may be
necessary. Connect with our experts to facilitate a smooth implementation.


[Talk to an Expert](https://kore.ai/contact-us/)
