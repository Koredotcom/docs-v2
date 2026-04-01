# Bigtincan Connector

Bigtincan is a cloud-based sales enablement and training platform used by organisations to deliver and manage learning content, including courses and presentations. You can configure Search AI to connect to Bigtincan to enable users to fetch query results using the content from training courses.

## Specifications

| Specification | Details |
|---------------|---------|
| Repository type | Cloud |
| Supported content | Training Courses |
| Content filtering | No |
| RACL support | Yes |

## Authorization Support

Search AI supports **Username** and **Password-based** authentication for communicating with Bigtincan. Authentication is established using a **Login Directory**, **Username**, and **Password** associated with your Bigtincan account.

## Integration Steps

To configure Bigtincan as a content source, complete the following steps.

* Configure the Bigtincan connector in Search AI
* Set up Permissions
* Configure Content Scope
* Schedule Sync

## Step 1: Configure the Bigtincan Connector in Search AI

Go to Connectors under the Sources page and select Bigtincan. On the Authorization tab, enter the following details and click Connect.

* Name — Unique name for the connector.
* Login Directory — The login directory associated with your Bigtincan account (for example, Citrix).
* Username — The username used to log in to Bigtincan.
* Password — The password associated with your Bigtincan account.

Once successfully authenticated, the status shows as Connected.

## Step 2: Set Up Permissions

Go to the Permissions tab to configure access control for the ingested content. The following options are available.
* Same users as in the source system (Restricted Access) — Automatically applies the same permissions from Bigtincan, ensuring secure and seamless access to ingested content.
* Everyone (Public Access) — All users are granted full access to the ingested content, overriding any previous restrictions in the connector.

!!!note
    To enforce restrictions across all connectors in your workspace, contact support. Once enabled, these settings become locked and can only be changed via a support ticket.

## Step 3: Configure Content Scope

Go to the Content Scope tab under Connector Setup to define the scope of content ingestion.

* All content — Ingests all available content from the selected object types without applying any filters.

## Step 4: Sync Content

After configuring the connector, go to Schedule Sync to initiate and manage content synchronization.

* Use the Sync button for an immediate, on-demand sync.
* Enable Schedule Sync to set up automated, recurring syncs.

The Schedule Sync table displays a log of all sync activity with the following details.

| Field        | Description                                                   |
|--------------|---------------------------------------------------------------|
| Sync Scope   | The scope of the sync (for example, Full Sync).               |
| Sync Type    | Indicates whether the sync was On-Demand or Scheduled.        |
| Sync Status  | The result of the sync (for example, Successful).             |
| Triggered By | The user who initiated the sync.                              |
| Started On   | The date and time the sync started.                           |
| Completed On | The date and time the sync completed.                         |

## Content Ingestion

Once the sync is complete, go to the Content tab to review the ingested content. The tab displays the count of files that are Successful, Failed, and Skipped, along with the total number of Accessible Files. Each ingested course entry shows its Title, Size, and Last Updated timestamp.

Search AI ingests training courses from Bigtincan. The following key fields are extracted and indexed.

* `title` — The name of the course or presentation, mapped from the course listing.
* `content` — The textual body of the course, including slide or presentation text, made available for search operations.
* `doc_id` — A unique identifier for the ingested course document, derived from the `PresentationId` field in the source payload.
* `doc_source_type` — Identifies the source of the content; defaults to course if not specified in the source.
* `doc_created_on` / doc_updated_on — Timestamps capturing when the course was created and last updated in Bigtincan.
* `url` — The URL pointing to the course in Bigtincan, if available.

Key metadata fields such as `ContentType`, `EnrollmentType`, `FolderId`, and `PresentationId` are captured from the source payload and stored as metadata. Separate file attachments aren't ingested.

## RACL Support

Search AI supports permission-aware search for Bigtincan content when RACL is enabled. The sys_racl field is used to associate content with authorized users, ensuring that only permitted users can access specific training courses in search results.

Since Bigtincan does not support automatic permission sync, the sys_racl field is populated manually via the Search AI API. You can set this field to control who can access each ingested course.

* When set to ["*"], the content is accessible to all users (public access).
* When set to specific user identifiers (such as email IDs or user IDs), access is restricted to only those users.

For example, if a course is published with public access, Search AI sets the sys_racl field to a wildcard, making it accessible to all users. When access is restricted to specific users, their identifiers are listed explicitly.

```json
"sys_racl": [
     "*"    // Wildcard — course is accessible to all users (public access)
]
```
When permissions are manually configured via the API for restricted access, it looks like:

```json
"sys_racl": [
    "user@example.com",    // User-specific access — restricted to this user only
    "user2@example.com"    // Additional user with access to this course
]
```

!!!note
    To restrict access to specific users, update the sys_racl field via the API with the appropriate user identifiers after ingestion.