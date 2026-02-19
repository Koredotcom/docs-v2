# Content Browser

The Content Browser provides a tool to observe the extracted chunks from the source data. It gives insights into the output from the extraction process and enables you to take subsequent actions like editing and rectifying the chunks. This not only allows you to view and verify the extracted chunks but also allows you to edit them, enabling you to work with answers that best serve your specific goals and requirements.

When new content is added to the application, auto-training of the application with the new content is automatically initiated, generating corresponding chunks. If existing content is updated, the chunks related to that content are deleted and recreated.

## Key capabilities

* **Observation and Verification:** You can use the Browser to inspect and verify the extracted chunks. This step is crucial for ensuring the correctness of the extraction process, the accuracy of the chunks generated, and to ensure that no data is lost during extraction.
* **Editing of Chunks**: You can edit the chunk information directly within the browser interface. This capability can help you add any missed information, edit inaccurate information, or enrich the extracted information.

Go to the **Browse** section under the **Index** tab to view the chunks. The chunks browser displays chunks from all the data ingested into the application. 

![View Chunks](images/browser-home.png "View Chunks")

If the chunk contains one or more images or tables, a preview of these is also shown in the chunk summary. You can click on the preview to enlarge the image or table and view it at its full size. If there are multiple images, a carousel is displayed to allow easy navigation through them.

![Chunk Preview](images/preview.png "Preview Chunks")

## View Chunk Details

Click the **Details** icon to view the details of a chunk. 

![Chunk Viewer](images/chunk-details.png "Chunk Viewer")

* **Document Title**: Title of the document/page in the source from where the chunk is extracted.
* **Chunk Title**: Title given to the chunk 
* **Chunk Text**: Content of the chunk
* **Chunk ID**: Unique identifier of the chunk.
* **Page Number**: Page number in the source file from where the chunk is extracted, if applicable. 
* **Source Title**: Name of the source of the chunk in the application. 
* **Source**: The source type of the content like web pages, files or connectors.  
* **Extraction Strategy**: Strategy used for extracting the chunk. .
* **Edited on:** Date of the last update to the chunk, if applicable.
* **Source URL**: URL of the source from where the chunk is extracted, if applicable. 
* **Page Number**: Page number in the source file from where the chunk is extracted, if applicable. 

The Chunk Viewer also provides the following options:

**View JSON**: This can be used to view the contents of the chunk in JSON format. It lists all the properties that store information about the chunk.  

![Chunk Viewer](images/json-view.png "Chunk Viewer")

## Edit Chunks

The Chunk Viewer also allows you to edit and update the title and text of the chunk. This gives you the ability to enhance the chunk for effective answers.

![Update Chunks](images/update-chunk.png "Update Chunks")

You can also edit the chunk text from the browser home page using the Edit option. 

![Update Chunks](images/edit-chunk.png "Update Chunks")

Make changes to the text as required and click **Save**. 

![Update Chunks](images/save-edited-chunk.png "Update Chunks")

!!!note
    When a document is updated, all its chunks are deleted and recreated. As a result, any changes made to the edited chunk are lost during the synchronization process if the content is updated. 
    
## Search and Filter Chunks

You can also use the chunk browser to search for specific chunks using any of the properties of the chunks like chunkTitle, chunkText, source, etc. Use the **search bar** at the top to search for chunks.

![Search Chunks](images/search-chunk.png "Search Chunks")

The **Filter option** offers you an advanced search capability that can be used to find chunks based on various chunk properties like source types, extraction strategy, content, etc. You can use one or more of these fields to find the corresponding chunks. For example, to search for all the chunks from a particular content source, “Kore blogs”, containing the words “virtual assistant”, you can set up a filter as shown below. 

![Filter Chunks](images/filter-chunks.png "Filter Chunks")
