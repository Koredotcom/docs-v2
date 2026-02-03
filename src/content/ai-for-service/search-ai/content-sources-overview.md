# Content Sources

Content Sources enable Search AI to ingest data from websites, documents, and third-party applications—creating a unified knowledge base for generating accurate answers.

---

## Source Types

Search AI supports three content source types. Each source type has its own configuration options and is managed separately in the **Content** section.

### Websites

Crawl and index web pages from any public or authenticated website.

**Key capabilities:**
- Multiple crawl sources: URL, sitemap upload, or URL list
- Configurable crawl depth (1-10 levels) and URL limits (up to 10,000)
- JavaScript rendering for dynamic content
- Authentication support for restricted pages
- Include/exclude rules for selective crawling
- Scheduled recrawling for content updates

**→ [Configure Web Crawl](web-crawl/)**

---

### Documents

Upload and index files directly to Search AI.

**Supported formats:** PDF, DOCX, PPTX, TXT, HTML, CSV, JSON, and more

**Key capabilities:**
- Drag-and-drop file upload
- Bulk upload support
- Automatic text extraction
- Structured data ingestion via JSON connector

**→ [Upload Documents](directory/)**

---

### Connectors

Integrate with 60+ third-party applications to ingest content automatically.

**Key capabilities:**
- Pre-built connectors for popular platforms
- OAuth and API-based authentication
- Scheduled synchronization
- Field mapping customization
- Role-based access control (RACL) support

#### Popular Connectors

| Category | Connectors |
|----------|------------|
| Knowledge & Wikis | [Confluence Cloud](connectors/confluence-cloud/), [Confluence Data Center](connectors/confluence-server/), [Notion](connectors/notion/), [Guru](connectors/guru/), [Slab](connectors/slab/) |
| File Storage | [SharePoint](connectors/sharepoint/), [Google Drive](connectors/googledrive/), [OneDrive](connectors/onedrive/), [Dropbox](connectors/dropbox/), [Box](connectors/box/) |
| Service & Support | [ServiceNow](connectors/servicenow/), [Zendesk](connectors/zendesk/), [Freshdesk](connectors/freshdesk/), [Freshservice](connectors/freshservice/), [Salesforce](connectors/salesforce/) |
| Project Management | [Jira](connectors/jira/), [Asana](connectors/asana/), [Monday](connectors/monday/), [Trello](connectors/trello/), [ClickUp](connectors/clickup/) |
| Developer Tools | [GitHub](connectors/github/), [GitLab](connectors/gitlab/), [BitBucket](connectors/bitbucket/), [Confluence](connectors/confluence-cloud/) |
| Communication | [Slack](connectors/slack/), [MS Teams](connectors/msteams/), [Zoom](connectors/zoom/) |

**→ [View All Connectors](connectors/connector-directory/)** | **→ [About Connectors](connectors/)**

#### Custom Integration

For applications without a pre-built connector, use the Custom Connector to integrate via REST APIs.

**→ [Custom Connector Setup](connectors/custom-connector/)**

---

## Access Control (RACL)

Search AI supports Role-based Access Control Lists (RACL) to ensure users only see content they're authorized to access. When enabled, permissions from source applications are synchronized automatically.

**→ [RACL Overview](racl-support/)**

---

## Managing Content

### View Sources

Go to **Content** in Search AI to see all configured sources organized by type (Websites, Documents, Connectors).

### Add a Source

1. Navigate to the appropriate section (Websites, Documents, or Connectors)
2. Click the add button (+)
3. Complete the configuration wizard
4. Save and initiate sync/crawl

### Sync & Recrawl

- **Manual sync**: Trigger immediately from any source's configuration page
- **Scheduled sync**: Set automatic intervals (hourly, daily, weekly) to keep content current
- **Selective recrawl**: For websites, recrawl specific pages without reprocessing the entire source

### Delete a Source

Removing a source deletes all indexed content from that source. This action cannot be undone.

---

## Automatic Training

When content is ingested, Search AI automatically initiates training to create the answer index. The extraction strategy configured in [Content Extraction](../content-extraction/extraction/) determines how content is chunked and indexed.

---

## Quick Reference

| Task | Location |
|------|----------|
| Add a website | Content > Websites > +Web Crawl |
| Upload files | Content > Documents > +Upload |
| Connect an app | Content > Connectors > Select connector |
| View indexed content | Index > Content Browser |
| Configure extraction | Index > Extraction |
| Test answers | Configuration > Testing |

---

## Related

- [Content Extraction](../content-extraction/extraction/) — Configure chunking strategies
- [Content Browser](../chunk-browser/) — View and manage indexed chunks
- [Workbench](../workbench/introduction/) — Transform content during ingestion
- [Vector Configuration](../index-configuration/) — Configure embedding models
