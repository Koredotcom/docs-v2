# Confluence Server

If you use Confluence Server to store knowledge content, the Search AI Confluence Server Connector lets you securely index, filter, and search your Confluence data with expanded coverage and improved indexing controls. The connector provides enhanced ingestion capabilities, space-based filters, advanced filtering, and webhook-based real-time synchronization.

<span style="text-decoration:underline;">Specifications</span>

<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>On-Premise
   </td>
  </tr>
  <tr>
   <td>Content Supported
   </td>
   <td>Knowledge Articles, Spaces, Blogs, and Comments
   </td>
  </tr>
  <tr>
   <td>RACL Support
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Content Filtering Support
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Webhook Support 
   </td>
   <td>Yes
   </td>
  </tr>
</table>

## Authorization Support for Confluence Server

The connector provides two authorization mechanisms:

* Basic Authentication
* OAuth 2.0
* Header Based Authorization

For more information on auth types, refer to [this](../connectors.md). 

**Basic Authentication**

When you use basic authentication, no server‑side configuration is required. Go to step 2 to configure the connector in Search AI.

**OAuth 2.0**

1. Register Search AI as an OAuth client in Confluence Server.
2. Configure the connector with the generated OAuth credentials.

**Header Based Authorization**

Configure the required authorization headers (for example: Authorization: Bearer <token> or X-API-Key) within the Search AI connector settings.
Ensure the external application or system you are connecting to is configured to accept and validate these specific headers. Go to step 2 to configure the connector in Search AI.

## Step 1: Register the Search AI app in the Confluence Server

* **OAuth 2.0** requires creating an incoming link under **application links** in the Confluence Server.
* During setup, use the **Redirect URL** for your region:

| Region   | Redirect URL                                     |
| -------- | ------------------------------------------------ |
| **JP**   | `https://jp-bots-idp.kore.ai/workflows/callback` |
| **DE**   | `https://de-bots-idp.kore.ai/workflows/callback` |
| **Prod** | `https://idp.kore.com/workflows/callback`        |

After creating the link, you will receive:

* Client ID
* Client Secret

These values are required in Search AI. For more information, refer to [this](https://confluence.atlassian.com/doc/configure-an-incoming-link-1115674733.html). 

**Deletion Handling**

SearchAI uses Confluence webhook notifications to manage deletion events. When configured, these callbacks automatically remove deleted content (pages and blog posts) from the SearchAI index.  

This ensures search results remain accurate and reduces indexing time and system load.

Configure a Confluence Webhook for SearchAI
Perform the following steps in your Confluence server to set up the webhook:

1. Go to Settings > General configuration.  
2. In the search field, type Webhook. From the left navigation under Configuration, select Webhooks.  
3. Click Create webhook.  
4. Enter the details:  Name, URL, Secret
5. Click Test connection to verify Confluence can reach the endpoint.  
6. From the Events dropdown, select blog_removed, page_removed, etc  
7. Ensure Active is selected, then click Save. 


## Step 2: Configure the Confluence (Server) Connector

In Search AI:

1. Go to **Connectors**.
1. Choose **Confluence (Server)**.
1. Under **Authentication**, enter the required fields.
    * Authorization Type: Basic or OAuth 2.0
    * Grant Type: Enter the Grant type for OAuth 2.0-based authentication. For Confluence Data Center, Search AI supports two types: Authorization Code grant type and Client Credentials grant type. For more details, refer to [this](../connectors.md).
    * For Basic Auth, provide the connector name, username, password, and Confluence Data Center host URL.
    * For OAuth 2.0 Authentication, enter the connector name, Client ID, Client Secret (as generated in the previous step), and Confluence Data Center base URL and domain name.
    * Header Based Authorization fields: Header, Token, and Host URL. Click Connect to initiate authorization.
1. **Real-Time Sync**: Toggle to enable/disable automatic syncing of content changes in real-time using source notifications.
1. **Webhook Client Secret**: Generated automatically (with option to regenerate).
1. **Webhook URL**: Copy the provided webhook URL for configuration in Confluence.
1. Click **Connect** to initiate authorization.

!!! note
    Webhook sync updates document entities only. Associated users and permissions within those entities must be synchronized through the regular incremental or manual sync.

## Webhook Configuration for Real-Time Sync

SearchAI uses Confluence webhook notifications to manage real-time content updates and deletion events. When configured, these callbacks automatically sync content changes and remove deleted content (pages and blog posts) from the SearchAI index.

This ensures search results remain accurate, reduces indexing time, and minimizes system load.

**Configure a Confluence Webhook for SearchAI**

Perform the following steps in your Confluence server to set up the webhook:

1. Go to Settings > General configuration.
2. In the search field, type Webhook. From the left navigation under Configuration, select Webhooks.
3. Click Create webhook.
4. Enter the following details:
    * Name: SearchAI Webhook Sync
    * URL: <webhook_endpoint_url> (This will be provided in the Search AI connector configuration)
    * Secret: <webhook_secret_token> (This will be displayed in the Search AI connector Authentication configuration)
5. Click Test connection to verify Confluence can reach the endpoint.
6. From the Events dropdown, select the following subscribed events: page_created, page_updated, page_removed (or page_deleted), blog_created, blog_updated, blog_removed (or blog_deleted).
7. Ensure **Active** is selected, then click **Save**.

### Content Ingestion

Go to the **Manage Content** tab in the Confluence Data Center connector in Search AI to define how much content should be ingested. You can choose between two modes:<br>

 * **Ingest all content**: Syncs all available content from Confluence.<br>
 * **Ingest filtered content**: Lets you specify only the content you want to sync.

To configure filtered ingestion:

1. Select **Ingest filtered content** and click **Edit configuration** to open the **Ingestion Filters** page.
2. Click **Browse & Select**, then mark the spaces or content types you want to sync.
3. Use the search box to quickly locate spaces, check or uncheck items to include or exclude, and click **View More** to load additional spaces.
4. Save the configuration.

**Real-Time Sync via Webhooks:**

When Real-Time Sync is enabled and Search AI receives a webhook POST from Confluence, content updates are processed automatically:

* **Create/Update**: For events like `page_created`, `page_updated`, `blog_created`, or `blog_updated`, the document is created or updated in the Search AI index.
* **Delete**: For events like `page_removed`, `page_deleted`, `blog_removed`, or `blog_deleted`, the corresponding content is removed from the index.

![Content Synchronization](images/confluenceserver/content-synchronization.png "Content Synchronization")

### Incremental Sync

The Confluence Server connector supports incremental synchronization to ensure efficient content updates. During each sync cycle, only newly created or modified Pages, Blogs, Spaces, and Comments are fetched and updated in SearchAI.

### Content Filters

The connector allows you to set up rules to selectively ingest content from the application. To define such rules, select **Sync Specific Content and** click on the **Configure** link. The following page allows you to define rules for selecting the content. Each rule can be defined using a parameter, operator, and its values. 

![Content Filters](images/confluenceserver/content-filters.png "Content Filters")

The Parameter field can take one of the following values. You can also add other CQL fields defined for your Confluence content. The following parameters now apply to Pages, Spaces, Blogs, and Comments. Refer to the complete list of supported fields [here](https://developer.atlassian.com/cloud/confluence/cql-fields/).

* Ancestor: Affects the direct child pages/content and descendants of the given content IDs as value. 
* Content: Affects the content defined using content ID only. 
* Created: Affects the content with the given creation date. It takes Date as values in the following format “yyyy/mm/dd hh:mm”, “yyyy-mm-dd hh:mm”, “yyyy/mm/dd”, “yyyy-MM-dd”. 
* Creator: Affects the content created by the User account IDs provided as values. 
* Label: Affects the content by its label. 
* Parent: Affects the content under a given parent. Parent-child evaluation now applies to Pages, Blogs, and threaded Comments. 
* ID: Affects the content based on its content ID. 
* Space: Affects the content based on the space that it's available in. Applicable to Pages, Blogs, and Comments.
* Title: Define the rule using the title of the pages or blogs.
* User: Define the rule using userId 

The Operator field can take different values depending upon the parameter selected like equals to, not equals to, contains, etc. 

The value field is used for providing the value as per the parameter.

For instance, you can choose all the pages and sub-pages under a given ancestor using the following rule. 

![Content Filters](images/confluenceserver/example1.png "Content Filters")

Similarly, to selectively ingest only the pages created or modified after Jan 1, 2024, you can configure the rule as shown below. 

![Content Filters](images/confluenceserver/example1.png "Content Filters")

Note:

* You can define more than one condition to choose different types of content from the connector using the OR operator.
* Every rule can have one or more conditions to select a subset of content using the AND operator. For example, to ingest the latest content created after Jan 1, 2024 and having the word ‘SearchAI’ in its title, define the rule as:

![Content Filters](images/confluenceserver/example3.png "Content Filters")

### Access Control

SearchAI supports access control for content ingested using the **Confluence Server**. To enable access control on the content, go to the **Permissions and Security** tab and select **Permission Aware** access.

* **Permission Aware** honors the permissions of a user in Confluence Server. Users can only view search results for content they're permitted to access within the Confluence instance.

* **Public Access** overrides native Confluence permissions, making all ingested content visible to all users in SearchAI regardless of actual access in Confluence.

#### Prerequisites

Access control in SearchAI relies on associating users with their unique identity—typically an email address. Ensure the account used for ingestion has adequate access to:

* Read page-level and space-level permissions

* Retrieve user and group details (using API tokens with appropriate access)

This may require an admin account or permissions that allow access to user directories in Confluence.

#### Permission Sets in Confluence Server

Confluence Server supports a two-level permission model:

**Space Permissions**

Each space defines its own set of permissions, managed by space administrators. These permissions control who can view, edit, or administer the content in that space. SearchAI requires at least **view** access to ingest and apply access control correctly.

**Blog Restrictions**

Blog posts inherit permissions from their parent space but can also have their own view or edit restrictions.
Blog permissions follow the same model as page permissions in Confluence.
For blog posts, the Blog Post ID must be set in the sys_racl field.
Permissions inherited from the parent space apply unless overridden by blog-specific restrictions.

**Page Restrictions**

Pages may inherit permissions from their parent space but can also have their own **view** or **edit** restrictions. If a page is restricted to specific users or groups, these settings override inherited space permissions.

#### Handling Confluence Server Permissions in SearchAI

* **Individual Access**: Users added directly to a space or specific page are included in the `sys_racl` field of the ingested document. These are typically represented by user email addresses or usernames, depending on your Confluence setup.

* **Group Access**: When you grant access to groups (for example, `confluence-users` or `engineering-team`), SearchAI creates **Permission Entities** based on group identifiers. These entities are stored in the `sys_racl` field. To ensure correct access, use the **Permission Entity APIs** to associate users with the appropriate group or entity in SearchAI.

#### Limitation

* **Anonymous Access**: SearchAI does **not support anonymous access** to content. If a page is publicly viewable in Confluence (for example, not requiring login), that page will **not be searchable** unless explicitly shared with known users or groups.
* **Webhook Sync**: SearchAI doesn't support user synchronization through webhooks. Entities for each document/object will be updated through webhook, but associated users within those entities won't be updated through webhook sync. User permissions must be synchronized through the regular incremental or manual sync process.
