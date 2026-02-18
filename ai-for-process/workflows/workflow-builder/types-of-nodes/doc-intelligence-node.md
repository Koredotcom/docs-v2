# Doc Intelligence Node - Automate Data Extraction

The Doc Intelligence Node enables document analysis and information extraction within workflows. It allows workflows to analyze documents using AI engines such as Docling, OpenAI, Anthropic, or Azure. Users can configure the node to process files from a static URL or workflow context variable, select the appropriate engine, and define engine-specific options to extract structured data or insights.

This capability is useful for workflows that involve invoices, receipts, identity documents, contracts, or other documents that require automated extraction and downstream processing.

## Key Capabilities

* **Engine selection**: Choose between Docling, OpenAI, Anthropic, or Azure to process the document with the AI engine best suited for your use case.
* **File input flexibility**: Input can be a static URL or a dynamic workflow context variable, allowing seamless integration with upstream steps.
* **Async processing**: Executes document processing asynchronously, allowing workflows to continue without waiting for the extraction to finish (engine support may vary).
* **Structured data extraction**: For engines that support structured output, the node can generate structured data automatically for downstream consumption.

## Common Use Cases

* **Invoice and receipt processing**: Automatically extract key fields including amounts, dates, and vendor information from financial documents.
* **Identity document verification**: Extract structured data from IDs, passports, or business cards to automate validation steps.
* **Contract analysis**: Identify key clauses, dates, or parties in contracts for automated tracking or review.
* **Compliance checks**: Ensure sensitive documents are correctly analyzed, and key information is captured for auditing.

## How it Works

The Doc Intelligence Node acts as an automated document-processing point within a workflow. When a workflow reaches this node, the selected AI engine analyzes the document and extracts relevant information or structured data. The node processes the document using the selected engine and returns extracted text or structured data. Workflow execution continues based on the node’s configuration and engine capabilities.

The extracted information is then made available for downstream workflow steps, enabling automation of decision-making, data entry, or reporting. Built-in error handling and engine configuration checks ensure that the node functions reliably and provides traceability into the processing results.

<img src="../images/doc_node_how_it_works.png" alt="Doc Intelligence node" title="Doc Intelligence node" style="border: 1px solid gray; zoom:80%;"/>

This allows workflows to seamlessly incorporate document intelligence, turning unstructured documents into actionable data with minimal manual intervention.

## Add and Configure a Doc Intelligence Node

The Doc Intelligence Node allows you to integrate automated document processing into your workflow. Use this procedure to add the node to your canvas and configure its properties.

**Before you begin**

* Open your workflow and add the Doc node to the workflow canvas. [Learn more about adding nodes](../manage-flow-nodes.md#add-nodes)
* Ensure that at least one AI engine (Docling, OpenAI, Anthropic, or Azure) is configured in your workspace if you plan to use it for processing.

**Steps to configure a Doc Intelligence node:**

Begin by opening the Doc node’s properties panel and giving it a clear, descriptive name, such as InvoiceProcessing or IDExtraction, then follow the steps below:

### 1. Provide File Input

* Enter the **File URL** in the input field. You can use either:
    * A static URL
    * A workflow context variable to pass the document dynamically from upstream steps.

### 2. Select Engine

* Choose the AI engine for processing: **Docling**, **OpenAI**, **Anthropic**, or **Azure**.
* Engine-specific configuration options appear based on your selection.
* If the selected engine is not configured, the system prompts you to set it up and redirects you to the appropriate configuration page.

<img src="../images/doc_node_panel.png" alt="Doc node panel" title="Doc node panel" style="border: 1px solid gray; zoom:80%;"/>

### 3. Configure Engine Settings

Configure engine-specific options to control how the document is processed. 

Options include Async execution, which processes the document in the background without blocking the workflow, and Structured data extraction, which generates machine-readable outputs for downstream nodes.

| Engine                     | Default settings                              | Notes |
|----------------------------|-----------------------------------------------|-------|
| **Docling**                | Async enabled        | The model dropdown shows all configured Docling connections. |
| **OpenAI**                 | Async enabled        | Only configured OpenAI models are listed.<br>Model timeout: 30–360 sec (default 300). |
| **Anthropic**              | Async enabled        | Only configured Anthropic models are listed.<br>Model timeout: 30–360 sec (default 300). |
| **Azure Doc Intelligence** | Async enabled, structured data always enabled | Prebuilt models are available by default. |

<img src="../images/doc_node_config.png" alt="Doc node panel" title="Doc node panel" style="border: 1px solid gray; zoom:80%;"/>

For information about supported file types, file size limits, and available models by engine, see [Engine support and limits](../types-of-nodes/doc-intelligence-node.md#engine-support-and-limits).


### 4. Test the Flow

Run the flow and verify the flow behaves as expected and fix any errors.

The Debug panel displays logs, extracted text, structured data, and metadata based on your node configuration.

<img src="../images/debug_panel.png" alt="Doc node panel" title="Doc node panel" style="border: 1px solid gray; zoom:80%;"/>

## Access the Node’s Output

The Doc Intelligence Node output is stored in the workflow context for downstream nodes.

Use the syntax: `{{context.steps.DocNodeName.output}}`

Output may include:

* Extracted text
* Structured data (if enabled)
* Page or document metadata


## Engine Support and Limits

This section describes the supported file types, models, and size limits for each engine used in the Doc Intelligence node.

### Supported file types and size limits

| Engine                     | Supported file types     | Max file size         |
|---------------------------|---------------------------|------------------------|
| **Azure Document Intelligence** | PDF, DOCX, PPTX            | 50 MB                 |
| **OpenAI**                | PDF only                   | 512 MB                |
| **Anthropic Claude**      | PDF only                   | 32 MB                 |
| **Docling**               | PDF, DOCX, PPTX            | 100 MB (extendable)   |


###  Supported models and configurations

| Engine                       | Default model                   | Available models                                                                 | Configuration                        |
|------------------------------|----------------------------------|----------------------------------------------------------------------------------|--------------------------------------|
| **Azure Document Intelligence** | prebuilt-layout                 | Azure prebuilt models                                                            | Not configurable                     |
| **OpenAI**                   | gpt-4o-mini                      | gpt-4o, gpt-4o-mini, gpt-4.1                                                     | Temperature (0–2), max_tokens        |
| **Anthropic Claude**         | claude-3-5-sonnet-20241022       | claude-sonnet-4-20250514, claude-3-5-sonnet-20241022                            | Temperature (0–1), max_tokens        |
| **Docling**                  | Service-based                    | No model selection                                                               | Service-managed                      |







