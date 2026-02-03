# Content Sources

Content Sources enable Search AI to ingest data from websites, documents, and third-party applications, creating a unified knowledge base for generating accurate answers. When content is ingested, Search AI automatically initiates training to create the answer index using configured extraction strategies.


## Websites

Crawl and index web pages from any public or authenticated website. Navigate to **Content > Websites** to manage web sources.

### Adding a Web Crawler

Click **+Web Crawl** and configure the following:

| Field | Description |
|-------|-------------|
| **Source Title** | Unique name for the web source |
| **Description** | Information about the source and its purpose |
| **Crawl Source** | URL, Upload Sitemap (CSV), or Upload URL (CSV) |
| **Crawl Depth** | Levels to traverse (1–10, default: 5) |
| **Max URL Limit** | Maximum URLs to crawl (1–10,000, default: 10) |

### Advanced Crawl Options

| Option | Purpose |
|--------|---------|
| **Use Cookies** | Crawl pages requiring cookie acceptance |
| **JavaScript Rendered** | Capture dynamically rendered content (set crawl delay for full rendering) |
| **Crawl Beyond Sitemap** | Include URLs not listed in the sitemap |
| **Respect robots.txt** | Honor crawler directives in robots.txt |
| **Automatic Cleaning** | Remove headers, footers, and head tags before ingestion |
| **Retain Original** | Ingest complete HTML content for custom transformation via Workbench |

### URL Filtering

Control which pages are crawled using rules:

- **Crawl everything** — All discovered URLs
- **Crawl everything except** — Block URLs matching specified conditions
- **Crawl only specific URLs** — Allow only URLs matching specified conditions

Conditions include: equals, not equal, contains, does not contain, begins with, ends with.

### Authentication

Search AI supports two authentication methods for protected websites:

**Basic HTTP Authentication**
- Username/email and password
- Optional authorization fields (headers, payload, query string, path parameters)
- Authentication URL (may differ from source URL)
- Test type: Text Presence, Redirection, or Status Code

**Form-based Authentication**
- Form fields with key, type, and value
- Session maintained after initial authentication
- Same test options as Basic Auth

### Managing Web Sources

| Action | How To |
|--------|--------|
| **View crawled pages** | Go to source > **Pages** tab (shows Successful, Failed, Skipped) |
| **View execution logs** | Go to source > **Executions** tab |
| **Recrawl entire source** | Click **Recrawl** action or use Re-Crawl button on configuration page |
| **Recrawl specific page** | Pages tab > Actions > Recrawl |
| **Schedule recrawl** | Set date, time, and frequency in crawl configuration |
| **Delete source** | Click Delete action (removes all indexed content) |

### Troubleshooting

| Issue | Potential Causes | Resolution |
|-------|------------------|------------|
| **Crawl failure** | Permissions, credentials, invalid URL, domain not whitelisted | Verify access, credentials, and URL format |
| **Crawl succeeds but no indexing** | JS-rendered pages, incorrect include/exclude rules, undiscoverable pages | Enable JavaScript Rendered, check rules, verify sitemap |
| **Crawl takes too long** | Large content volume, JS pages returning no content | Adjust max URLs, enable JavaScript Rendered |



## Documents

Upload and index files directly to Search AI. Navigate to **Content > Documents** to manage uploaded files.

### Supported Formats

PDF, DOCX, PPT, TXT (scanned PDFs and password-protected files not supported)

### Upload Options

| Method | Description |
|--------|-------------|
| **File** | Upload one or more files to an existing directory |
| **URL** | Upload a file from a remote URL with title and description |
| **Directory** | Upload a complete folder from local device |

### Upload Limits

| Limit | Default Value |
|-------|---------------|
| File size | 15 MB maximum per file |
| Batch upload | 40 files at once |
| Directory upload | 20 files maximum |

Contact support to increase these limits.

### Managing Documents

- **View files**: Click any directory to see its files with type and page count
- **View file details**: Click a file for preview, metadata, and JSON view
- **Delete file**: Actions > Delete (from directory or file details page)
- **Delete directory**: Actions > Delete (removes directory and all files)
- **Search**: Use search bar on Directory page or within directory details



## Connectors

Pre-built integrations for 60+ third-party applications. Navigate to **Content > Connectors** to configure integrations.

### Connector Setup Workflow

1. **Authentication** — Provide OAuth credentials, API keys, or tokens
2. **Ingestion** — Select content types and apply filters
3. **Field Mapping** — Align source fields with Search AI schema (optional)
4. **Permissions** — Configure RACL settings

### Configuration Options

**Content Types**: Most connectors support multiple content types (pages, articles, tasks, tickets, documents). Select which types to ingest under the Ingestion section.

**Filters**: Some connectors support selective ingestion by timeframe, category, user assignment, or other criteria.

**Field Mapping**: Customize how source fields map to Search AI's schema using custom scripts for data transformation.

### Sync Operations

| Type | Description |
|------|-------------|
| **Manual sync** | Click **Sync Now** on Configuration tab |
| **Scheduled sync** | Set automatic intervals (files >15MB are skipped) |
| **Permission sync** | Separate scheduler for RACL updates |

### Managing Connectors

- **Enable/Disable**: Toggle connector without deleting data (disables sync temporarily)
- **View content**: Content tab lists ingested items with URLs and timestamps
- **Remove connector**: Connection Settings > Remove this content source (deletes all indexed data)

### Custom Connector

For applications without a pre-built connector, the Custom Connector uses REST APIs via a middleware service.

**Setup Steps**:
1. Download the reference implementation from Search AI
2. Configure `config.json` with application details and content fields
3. Set authentication in `.env` file
4. Host the service and configure endpoint in Search AI
5. Add headers (Authorization required for default implementation)

The service processes content in batches of 30 documents. RACL support available via `sys_racl` field in config.

### JSON Connector

Upload structured data in JSON format for indexing.

- Upload up to 10 files at once
- Maximum 15 MB per file
- Add to existing source or create new



## Supported Connectors

| Category | Connectors |
|----------|------------|
| **Knowledge & Wikis** | Confluence Cloud, Confluence Data Center, Notion, Guru, Slab, Oracle Knowledge |
| **File Storage** | SharePoint, Google Drive, OneDrive, Dropbox, Box, Amazon S3, Azure Storage, Egnyte |
| **Service & Support** | ServiceNow, Zendesk, Freshdesk, Freshservice, Salesforce, HelpScout, Front, Re:amaze |
| **Project Management** | Jira, Jira On-Prem, Asana, Monday, Trello, ClickUp, Wrike, Teamwork, Shortcut, Hive |
| **Developer Tools** | GitHub, GitHub On-Prem, GitLab, BitBucket, Jenkins, JFrog, TestRail |
| **Communication** | Slack, MS Teams, Zoom, Zulip |
| **CRM & Business** | HubSpot, Zoho, Shopify, Workday |
| **Other** | Aha, Airtable, Axero, Coda, Datadog, DotCMS, Figma, LumApps, Miro, OpsGenie, PagerDuty, WordPress, xMatters, YouTrack, Zeplin |

For applications not listed, use the Custom Connector or contact Kore.ai.



## Role-based Access Control (RACL)

RACL ensures users only see content they're authorized to access by synchronizing permissions from source applications.

### How RACL Works

1. **Ingestion**: Search AI imports permissions (users, groups, criteria) along with content
2. **Storage**: Access information stored in the `sys_racl` field of each chunk
3. **Access Control**: Only users whose identities appear in `sys_racl` can view answers from that content

### Configuring RACL

Go to **Permissions** page of the connector and select:

| Option | Behavior |
|--------|----------|
| **Same users as in source** | Syncs permissions from source application (Restricted Access) |
| **Everyone (Public Access)** | Content accessible to all Search AI users (sets `sys_racl` to `*`) |

### Permission Entities

Permission entities represent groups or user criteria from source applications. Search AI handles these in two ways:

**Automatic Resolution** (supported by some connectors):
- Fetches group membership data from source
- Maintains up-to-date user-group mappings
- Associates users with permission entities automatically

**Manual Resolution** (other connectors):
- Use Permission Entity APIs to manage user associations
- Required for connectors without automatic resolution support

### Verifying Permissions

1. Go to **Content** page
2. Open JSON view for any file
3. Check the `sys_racl` field contents

The same information appears in individual chunks via Content Browser.

### Permission Sync Scheduling

Access permissions often change more frequently than content. Configure separate sync schedules:

1. Open **Permissions** section of connector
2. Enable **Permissions Sync Scheduled**
3. Set time and frequency

The Sync Scope column shows "Permission Sync" for RACL-specific operations.

### RACL Limitations

- Supported for connector content only (not websites or uploaded documents)
- Switching from Restricted to Public Access automatically disables RACL



## Quick Reference

| Task | Location |
|------|----------|
| Add website | Content > Websites > +Web Crawl |
| Upload files | Content > Documents > Upload |
| Add connector | Content > Connectors > Select connector |
| View indexed content | Index > Content Browser |
| Configure extraction | Index > Extraction |
| Test answers | Configuration > Testing |



## Related Topics

- [Content Extraction](../content-extraction/extraction/) — Configure chunking strategies
- [Content Browser](../chunk-browser/) — View and manage indexed chunks
- [Workbench](../workbench/introduction/) — Transform content during ingestion
- [Vector Configuration](../index-configuration/) — Configure embedding models

