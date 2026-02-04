# Index Configuration Guide

Configure and manage the Search AI index, including content extraction, transformation, workbench processing, and content browsing.


## Overview

The Index Configuration in Search AI encompasses the complete data processing pipeline that transforms raw content into searchable, high-quality chunks optimized for answer generation. This pipeline consists of three main phases:

1. **Extraction** – Breaking down source content into manageable chunks using various extraction strategies
2. **Transformation** – Enriching and refining extracted content through configurable processing stages
3. **Indexing** – Storing processed chunks with vector embeddings for efficient retrieval


## Content Extraction

Content extraction segments ingested data into smaller chunks to organize and efficiently retrieve relevant information for answer generation. The application supports various extraction strategies that can be customized based on content format, structure, and answer requirements.

### Extraction Strategies

#### Text Extraction Model

Combines NLP and machine learning techniques based on tokenization, where text is segmented into smaller units.

**Configuration Options:**
- **Chunk Size (Pages):** Treats every page as a single chunk
- **Chunk Size (Tokens):** Prepares chunks using:
  - **Tokens:** Maximum tokens per chunk (up to 5000)
  - **Chunk Overlap:** Number of tokens overlapping between consecutive chunks

#### Layout Aware Extraction

Extracts data by considering content layout and structure, improving precision for documents with tables, graphs, and charts.

**Configuration:**
- **General Template:** Extracts content from complex PDFs and DOCX files including tables and images
- Uses OCR technology, layout detection models, and layout awareness rules

#### Advanced HTML Extraction

Designed specifically for extracting data from HTML files, including tables, images, and textual content. Videos are included in chunks but transcripts are not extracted.

**Configuration Templates:**
- **General:** Identifies different components and classes within HTML documents
- **Token-Based:** Generates chunks based on token size (100-1000 tokens)

> **Note:** Documents with content shorter than 60 characters are skipped when using the General template.

#### Markdown Extraction

Transforms each page of a source document into structured Markdown format before processing. Effective for preserving semantic structure.

**Supported formats:** PDF files (uploaded directly or via connectors)

#### Image-Based Document Extraction

Handles complex PDFs with non-textual layouts such as forms, tables, or visually rich content. Each page is converted to an image and processed using VDR embedding models.

**Supported formats:** PDF files

> **Note:** Requires image-based embedding model selection in Vector Configuration. Answer generation not supported by Kore XO GPT with this strategy.

#### Custom Extraction

Enables integration with third-party services for custom content processing.

**Configuration:**
- **Endpoint:** URL for sending content (POST endpoint)
- **Concurrency:** Maximum API calls per second
- **Headers:** Additional request headers
- **Request Body:** Content fields to send to the service

### Default Extraction Strategies

| Content Source | Content Type | Extraction Strategy |
|---------------|--------------|---------------------|
| WebPages | HTML | Advanced HTML Extraction |
| Documents | pdf, doc, docx | Markdown Extraction |
| Documents | pptx, txt | Text Extraction |
| Connectors | pdf, doc, docx, html, aspx | Markdown Extraction |
| Connectors | pptx, txt | Text Extraction |
| Connectors | json | JSON Extraction |

### Managing Extraction Strategies

**Adding a Strategy:**
1. Navigate to **Index > Extract**
2. Click **+Add Strategy**
3. Configure:
   - **Strategy Name:** Unique identifier
   - **Define Source:** Select data sources and content types using filters
   - **Extraction Model:** Choose the extraction method
   - Configure model-specific settings

**Multiple Strategies:** When multiple strategies exist, they apply based on sequence order. Higher-priority strategies process content first.

**Managing Strategies:**
- **Enable/Disable:** Toggle from the strategy page
- **Delete:** Use the Delete button (does not affect existing chunks)
- **Reorder:** Drag and drop to change sequence


## Content Transformation

Content transformation refines extracted text into high-quality data after the extraction phase. This enrichment process addresses incomplete metadata, formatting inconsistencies, and missing context to improve search and retrieval effectiveness.

### Benefits

- **Improved Data Quality:** Fix errors, standardize fields, add contextual information
- **Enhanced Control:** Adapt enrichment to specific business needs
- **Bulk Transformation:** Apply rules to all applicable content simultaneously

### Transformation Stages

#### Field Mapping Stage

Adds, updates, or deletes specific fields from input content. Useful for ensuring uniformity across pages.

**Configuration:**
- **Name:** Unique stage identifier
- **Condition:** Rules for selecting content (Basic or Script mode)
  - Field Name, Operator, Value
- **Outcome:** Actions to perform:
  - **Set:** Sets value for target field
  - **Delete:** Removes target field
  - **Copy:** Copies value between fields

#### Custom Script Stage

Implements custom JavaScript transformations for specific business needs.

**Configuration:**
- **Condition:** Painless script for content selection
- **Outcome:** Painless script defining transformations

**Example - Count pages:**
```javascript
int temp_total_pages = 0;
if(ctx.file_content_obj != null){
    for (def item: ctx.file_content_obj) {
        if (item!="") {
            temp_total_pages = temp_total_pages+1;
        }
    }
}
ctx.total_pages = temp_total_pages;
```

#### Exclude Documents Stage

Filters out unnecessary or irrelevant content before ingestion.

**Configuration:**
- **Field:** Document field for condition (e.g., creation date, file type)
- **Operator:** Comparison operator (greater than, less than, equals)
- **Value:** Comparison value

**Benefits:**
- Reduces unnecessary chunk generation
- Improves search accuracy
- Enhances indexing efficiency

#### API Stage

Invokes external APIs to modify, enrich, or analyze content during transformation.

**Configuration:**
- **Endpoint:** POST endpoint URL (supports dynamic fields with `{{field_name}}`)
- **Headers:** Key-value pairs for authentication
- **Request Body:** Content to send (use `{{field_name}}` for dynamic values)

**Testing:** Click **Test** to validate configuration and map response fields to Search AI schema.

> **Note:** Only POST APIs and Sync APIs are currently supported.

#### LLM Stage

Leverages external LLMs to refine, update, or enrich content (summarization, readability improvements, context addition).

**Prerequisites:**
1. Set up required LLM in Models Library
2. Create custom prompt for 'Transform Documents with LLM'
3. Enable the feature in Gen AI features page

**Configuration:**
- **LLM:** Select the language model
- **Prompt:** Select the custom prompt
- **Target Field:** Field for storing enriched content

### Stage Availability by Extraction Strategy

| Strategy | Field Mapping | Custom Script | Exclude Documents | API Stage | LLM Stage |
|----------|--------------|---------------|-------------------|-----------|-----------|
| Text Extraction | Yes | Yes | Yes | Yes | Yes |
| Advanced HTML Extraction | Yes | Yes | Yes | Yes | Yes |
| Layout Aware Extraction | NA | NA | NA | NA | NA |
| Markdown Extraction | NA | NA | NA | NA | NA |
| Image-based Document Extraction | NA | NA | NA | NA | NA |

### Managing Transformation Stages

**Adding a Stage:**
1. Navigate to **Index > Enrich** (or Transform page)
2. Click **+New Stage**
3. Select stage type and configure
4. Click **Save**

**Stage Operations:**
- **Enable/Disable:** Use ellipsis menu or status toggle
- **Delete:** Permanently removes the stage
- **Reorder:** Drag and drop to change sequence


## Workbench

The Workbench is a tool for processing and enhancing ingested content through a series of configurable stages. Each stage performs specific data transformations before passing content to the next stage.

### Key Features

- **Pipeline Processing:** Sequential stage execution
- **Custom Transformation:** Customizable stages per business needs
- **Simulation Capabilities:** Built-in testing before deployment
- **Flexible Sequencing:** Design efficient processing workflows

### Supported Stages

| Stage Type | Purpose |
|------------|---------|
| Field Mapping | Map document fields to target fields based on conditions |
| Custom Script | Run custom scripts on input data |
| Exclude Document | Exclude documents from indexing based on conditions |
| API Stage | Connect with third-party services for dynamic updates |
| LLM Stage | Leverage external LLMs for content enrichment |

### Adding Workbench Stages

1. Navigate to **Index > Enrich**
2. Click **+New Stage**
3. Select stage type
4. Configure:
   - Unique stage name
   - Condition(s) for content selection
   - Outcome(s) defining transformations
5. Click **Save**

### Stage Management

**Ordering:** Data processes through stages sequentially. Use drag-and-drop to reorder.

**Enable/Disable:** Toggle stages on/off without deleting. Disabled stages are skipped during processing.

**Deleting:** Permanently removes the stage from the Workbench.


## Workbench Simulator

The Workbench includes a built-in simulator for testing stage behavior before deployment.

### Features

- Test and verify individual stage outputs
- Test cumulative effects of multiple stages
- Works with any data source type

### Running a Simulation

1. Click **Simulate** button on the Workbench page
2. Select stage(s) to test
3. Choose number of documents for testing
4. View results in JSON format in the Chunk Viewer

**Key Points:**
- Simulator shows changes from all stages in sequence order
- Testing from a specific stage shows cumulative transformations up to that point
- Temporarily disable other stages to test individual stage behavior
- Errors during transformation appear in the `simulate_errors` object

> **Tip:** Use the Workbench Simulator frequently during configuration to catch errors early.


## Content Browser

The Content Browser provides tools to observe, verify, and edit extracted chunks from source data.

### Key Capabilities

- **Observation and Verification:** Inspect and verify extracted chunks for accuracy
- **Editing of Chunks:** Modify chunk information directly within the browser

### Viewing Chunks

Navigate to **Index > Browse** to view all chunks. Each chunk displays:
- Preview (including images and tables)
- Summary information

Click **Details** to view:
- **Document Title:** Source document/page title
- **Chunk Title:** Title assigned to the chunk
- **Chunk Text:** Content of the chunk
- **Chunk ID:** Unique identifier
- **Page Number:** Source page (if applicable)
- **Source Title:** Name of the source in the application
- **Source:** Content type (web pages, files, connectors)
- **Extraction Strategy:** Strategy used for extraction
- **Edited on:** Last update date (if applicable)
- **Source URL:** Source URL (if applicable)

**View JSON:** Displays chunk contents in JSON format with all properties.

### Editing Chunks

1. Click the **Details** icon on a chunk
2. Modify title and/or text
3. Click **Save**

Alternatively, use the **Edit** option directly from the browser home page.

> **Note:** When documents are updated, all related chunks are deleted and recreated, losing manual edits.

### Search and Filter

**Search:** Use the search bar to find chunks by properties (chunkTitle, chunkText, source, etc.)

**Filter:** Advanced search using multiple chunk properties:
- Source types
- Extraction strategy
- Content keywords
- And more

**Example:** Find all chunks from "Kore blogs" containing "virtual assistant":
- Set Source Name = "Kore blogs"
- AND chunkText contains "virtual assistant"


## Vector Configuration

Vector Configuration manages how extracted and transformed chunks are converted into vector embeddings for efficient semantic search and retrieval. This includes:

- **Embedding Model Selection:** Choose appropriate embedding models
- **Image-based Embedding:** Enable for image-based document extraction
- **Indexing Parameters:** Configure vector storage settings

> **Note:** When using Image-Based Document Extraction, select an image-based embedding model in Vector Configuration for proper indexing.


## Best Practices

### Extraction Strategy Selection
- Match strategy to content type and structure
- Consider expected query complexity when setting chunk sizes
- Use Layout Aware for documents with tables and charts

### Transformation Pipeline Design
- Order stages logically (e.g., exclude before enrichment)
- Use simulation frequently during development
- Keep transformations focused and modular

### Content Quality
- Review chunks in Content Browser after processing
- Edit chunks only when necessary (edits lost on content updates)
- Use filters to identify problematic chunks

### Testing and Validation
- Simulate all stages before training
- Test with representative sample documents
- Verify cumulative effects of multiple stages



## Processing Workflow Summary

```
1. Content Ingestion
   └── Sources: Websites, Documents, Connectors

2. Extraction Phase
   └── Apply extraction strategy based on content type
   └── Generate initial chunks

3. Transformation Phase (Document Workbench)
   └── Stage 1 → Stage 2 → Stage N
   └── Each stage processes and passes to next

4. Enrichment Phase (Workbench)
   └── Additional processing stages
   └── Field mapping, scripts, API calls, LLM enrichment

5. Indexing Phase
   └── Vector embedding generation
   └── Storage in vector database

6. Verification
   └── Content Browser review
   └── Manual edits if needed
```


## Related Resources

- [Content Sources Documentation](https://docs.kore.ai/xo/searchai/content-sources/introduction/)
- [Answer Generation](https://docs.kore.ai/xo/searchai/answer-generation/)
- [Retrieval Strategies](https://docs.kore.ai/xo/searchai/retrieval/)
- [GenAI Tools - Models Library](https://docs.kore.ai/xo/generative-ai-tools/models-library/)
