# Best Practices for Data Ingestion

The most crucial step in building a RAG solution is to ensure the correct data is ingested and available in the system. **Search AI** supports various **data sources**, including:

* Files
* Web pages
* Third-party applications via connectors

Supported content types and formats vary across these sources.


## Files

Search AI supports document ingestion in the following formats:

✅ **PDF, DOCX, PPTX, and TXT**

Refer to the guidelines below for the optimum ingestion of content from documents. 


### **Document Quality & Structure**

For optimal processing and search accuracy, documents should:



* Be **system-generated** (digitally created) rather than scanned or handwritten.
* Maintain a **consistent layout** across all pages.
* Be **unencrypted and free of password protection** to enable processing.
* Use **shorter, well-structured content** to improve search precision.
* Avoid unnecessary elements like headers, footers, and metadata that do not contribute to content relevance.


### **Formatting & Layout Considerations**



* **Single-column documents** provide the highest retrieval accuracy.
* **Multi-column layouts** may reduce search precision and require fine-tuning.
* Documents should have **clear section headers and logical content organization** for improved readability and search effectiveness.


### **Content & File Restrictions**

To prevent data loss and ensure optimal retrieval:



* **Avoid Compressed PDFs**, which can cause data distortion.
* **Avoid Multi-page tables**, as they are challenging to process accurately.
* **Avoid Inconsistent formatting**, such as switching between single-column and multi-column layouts within the same document.
* **Avoid Scanned or heavily formatted files**, which may not be processed effectively.


### **Media & Table Handling**

Search AI supports image and table extraction using a **layout-aware model**, but **only text is extracted by default**. To improve retrieval accuracy:



* **Provide text descriptions** for any key information in images.
* **Include contextual summaries** before or after tables and images.
* **Label images and tables with meaningful titles** for easier indexing and searchability.
* **Update extraction strategies** when working with documents containing significant visual elements.


## Webpages/HTML Content


### **Optimizing Web Page Structure**



* **Follow schema.org rules** to standardize metadata and improve content extraction.
* If **schema.org is not used**, ensure **consistent logic** is applied for structuring headings, subheadings, and content. This enables using the document workbench for custom processing of content. 
* Websites using standard HTML tags (like, &lt;h1>, &lt;h2>, &lt;p>, &lt;img>, &lt;table>) provide the best results.


### **Handling Non-Standard Web Content**



* Custom **CSS-based structures** may cause processing issues and require fine-tuning.
* **Override default processing** using **Document Workbench** to define custom extraction rules for non-standard layouts.


## Connector Integrations


### Relevance & Filtering



* **Ingest only relevant data** to align with the specific use case.
* Utilize **advanced filters** to ingest valuable content for search and retrieval selectively.
* Avoid pulling in **entire datasets** from a connector, as unnecessary content can introduce noise and require additional fine-tuning.


### **Performance Considerations**



* **Limit ingestion frequency** to avoid excessive data processing and system overload.
* **Monitor ingestion logs and adjust configurations** based on search performance and user feedback.
* **Use incremental updates** instead of full re-ingestion to optimize system efficiency.