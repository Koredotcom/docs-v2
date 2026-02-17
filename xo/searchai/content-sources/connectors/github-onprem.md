# GitHub On-Premise Connector


GitHub is a widely used platform for version control and collaboration, enabling developers to host, manage, and track changes in code repositories. With the GitHub connector in SearchAI, you can ingest and index content related to issues, pull requests, Files, pages and commit messages from GitHub repositories, making it easily searchable.

The connector supports multiple authentication profiles, allowing you to configure and index content from one or more GitHub organizations simultaneously. This streamlines access to critical information across repositories.


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
   <td>Issues, Pull Requests, README files
   </td>
  </tr>
  <tr>
   <td><strong>RACL Support</strong>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Automatic Resolution of Permission Entities</strong>
   </td>
   <td>No
   </td>
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

## Prerequisites

* Set up auth on Github 
* Whitelist Search AI domain in GitHub On-Prem instance. 

## Authorization Support

Search AI supports two types of authentication for communication with GitHub.

1. Using **Personal Access Token**
2. **OAuth 2.0 authentication**

Each authentication profile corresponds to a GitHub organization and requires owner or administrator permissions to ensure proper access to repositories and metadata.

## GitHub Configuration 

Using a Personal Access Token (PAT):

1. Go to the [Developer Settings](https://github.com/settings/tokens) in your GitHub account.
2. Generate a token with the following permissions:
    * repo
    * read:org

Using OAuth 2.0:

1. Register a new [OAuth authentication](https://github.com/settings/developers) in GitHub.
1. Provide the basic details.
1. Use one of the following callback URLs based on your region:

    * JP Region Callback URL: [https://jp-bots-idp.kore.ai/workflows/callback](https://jp-bots-idp.kore.ai/workflows/callback)
    * DE Region Callback URL: [https://de-bots-idp.kore.ai/workflows/callback](https://de-bots-idp.kore.ai/workflows/callback)
    * Prod Callback URL: [https://idp.kore.com/workflows/callback](https://idp.kore.com/workflows/callback)

This will generate client credentials. [Use the device flow](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#device-flow) and client credentials to manually create an access token using an API client tool (for example, Postman).

## GitHub Connector Configuration in Search AI

Provide the following fields when configuring the GitHub connector

1. **Name**: Unique identifier for the connector.
2. **Owner Name**: GitHub organization or user account that owns the repositories.
3. **Authorization Type**: Select the type of authorization. 
    1. Personal Access Token (APIKey): If you select this authentication type, provide the generated token. 
    2. OAuth 2.0: If you select this auth type, provide the client credentials generated above. 
4. **Host Domain**: URL of the GitHub domain. 

Click **Connect** to authenticate the credentials.

## Managing Multiple Authentication Profiles

The GitHub On-Prem connector allows you to add and manage multiple authentication profiles, each representing a different GitHub organization.

### Adding Authentication Profiles:

* Add profiles from the connector UI. The dropdown shows connection status: Connected or Not Connected.
* During initial setup, you can't navigate to other tabs until authentication succeeds.
* Once authenticated, a pop-up lets you sync with default settings or customize before syncing.

![The illustration shows the connector setup in search ai.](images/github/connector-setup.png "image_tooltip")

### Profile-Specific and Shared Settings

* Each profile maintains its own filters, repository selections, and content rules.
* Shared settings across all profiles include:
    * Permissions Content (combined content, duplicates removed)
    * Sync schedule

## Content Ingestion

1. Go to **Manage Content**. Select the object type to ingest: Issues, Pull Requests, Pages, Files, Commit Messages.
2. Choose ingestion mode:
    * Ingest All Content → syncs all content.
    * Ingest Filtered Content → configure filters

**Standard Filter**
Use a standard filter to select the repositories the connector should ingest content from. The list displays all accessible repositories. Select the required repositories and click **Add Selection**.

**Advanced Filters**

Advanced filters provide additional options for selective content ingestion. Developers can configure these filters by using properties specific to each content type. The connector ingests only the content that meets both the standard and advanced filter criteria.

During ingestion, the connector captures the following fields for each content type:

  * doc_source_type: Identifies the content type in the ingested JSON.
  * repository_id and repository_name: Record the repository details.
  * url: Stores the object link.
  * creation and update timestamps: Capture metadata related to content lifecycle.

For Issues, the connector also captures additional fields, including the issue status, comments, reporter, assignee, reactions, closure date, closure by, labels, and other relevant fields, which are stored in the corresponding fields.

**Sync Logic**

The connector synchronizes content across multiple authentication profiles as follows:

  * Full fetch during syncs: Each sync (manual or scheduled) performs a full fetch of all accessible content from GitHub for each profile. The connector compares the fetched content with indexed content and ingests only new or updated items into the Search AI index.
  * Manual syncs: When you select Sync, only the chosen profile is synchronized.
  * Scheduled syncs: All profiles are synchronized in sequence, from the most recently added to the oldest.
  * Stopping syncs: To stop synchronization for a profile, disconnect or delete that profile.
  * Disconnected profiles: If a profile’s authentication becomes disconnected, previously ingested content remains available. The content is retained until you manually trigger a sync for that profile or delete/disable the profile.
  * Deleted profiles: When a profile is deleted, all associated content is removed unless it has already been synchronized through another profile.

**Conflict Handling**

If two authentication profiles apply different field mappings to the same document, the most recent sync takes precedence. The document in the index always reflects the field mapping generated by the latest sync event.

## RACL Support

Search AI supports access control for content ingested from GitHub accounts. 

For all content ingested from GitHub repositories, Search AI sets the `repository ID` as the `sys_racl` field. The system stores this value as a permission entity, so use the *Permission Entity APIs* to associate users with the permission entity that corresponds to the repository ID, enabling access to the content. 