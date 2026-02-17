--8<-- "includes/searchai-api-back-link.md"

# Ingest Data API

This API allows you to ingest and index data into the SearchAI application. You can directly ingest structured data as chunk fields using the API,  ingest an uploaded document, or use this API to perform incremental web crawling to web sources that already exist in the application. 

## Ingesting Documents

* To ingest content from a file, use the **Upload File API** to upload your file to the application.
* After uploading, include the `fileId` from the **Upload File API** response in the **Ingest API** to process the file content.
* This API supports upload of files in the following formats: PDF, docx, ppt or txt. If any other type of file is uploaded for ingestion, the API throws error. 

## Ingesting Structured Data

* To ingest structured data, add the content to the body of the request object in the API. Ensure that the data corresponds to the **Chunk Fields** listed in the table below.
* **File Structure**: The JSON file must adhere to a specific structure for SearchAI to interpret the data correctly:
    * The **file name** is used as the `recordTitle`.
    * The JSON file must consist of an **array of objects**, where each object represents a chunk of data.
    * The fields in each chunk must correspond to the chunk fields listed in the table below.

## Crawling Web Pages

* This API can be used for incremental web crawling. It adds the ingested content corresponding to an existing web source in Search AI. 
    * The sourceName in the API must match the Source Title for the web domain added in Search AI. 
    * Set the sourceType as “web”.
    * Provide the URLs of the pages to be crawled in the URLs array under the documents field. 
* The web crawl uses the crawl configuration for the source set in Search AI.
* If an existing URL is provided,  it is crawled again. If a new URL is provided, it is crawled if the crawl configuration permits. 


## API Specifications

<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/bot/:botId/ingest-data</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td><code>application/json</code>
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><code>auth: {{JWT Token}}</code>
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>Ingest data</li>
</ul>
   </td>
  </tr>
</table>



## Query Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Required
   </td>
   <td>The environment URL. For example, <code>https://platform.example.org</code>
   </td>
  </tr>
  <tr>
   <td>Bot ID
   </td>
   <td>Required
   </td>
   <td>Unique Identifier of your application. Bot ID corresponds to the appID for your application. To view your App ID, go to the <strong>Dev Tools </strong>under <strong>App Settings. </strong>You can view the AppID under the API scopes.
   </td>
  </tr>
</table>



## Request Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>sourceName
   </td>
   <td>Yes
   </td>
   <td>SourceName is mandatory. If the given name does not exist then a new source is created automatically.
   </td>
  </tr>
  <tr>
   <td>sourceType
   </td>
   <td>Yes
   </td>
   <td>This can take the following values:
<ul>

<li>“json” - to upload structured data in the form of chunk fields , sent via the request object. When sourceType is json, even if file ID is present it's ignored.</li>

<li>“file” - to upload documents based on file ID. When sourceType is file only file ID is considered. If chunk payload is present it is ignored. </li>
<li>“web” - to crawl web pages using the URLs provided in the payload. </li>
</ul>
   </td>
  </tr>
  <tr>
    <td>documents</td>
   <td>Yes</td>
   <td>
   <p>Depending upon the value of the sourceType, this field can be used for:</p>
<ol>
<li>Passing the chunks fields in JSON format..</li>
<li>Passing the details of the file uploaded for ingestion.&nbsp;</li>
<li>Passing the web URLs to be crawled.</li>
</ol>
<ul>
<li>When sourceType is `json`, use documents to pass structured content directly in the request. Each document object can include a <em>title</em>and a <em>chunks</em>array. Each item in the chunks array must map exactly to the configured chunk fields (for example, <em>chunkText</em><em>, </em><em>chunkTitle</em><em>, </em><em>recordUrl</em>).</li>
<li>When sourceType is `<em>web</em>`, use documents to provide web URLs to be crawled. Each document object must contain a urls array with one or more web page URLs. The system crawls all provided URLs according to the source's crawl configuration. Previously crawled URLs are re-crawled, and new URLs are crawled if permitted by the source settings.</li>
<li>When sourceType is &lsquo;<em>file</em>`, use documents to reference uploaded files using their <em>fileId</em>. Each object in the documents array represents a single file and must include a valid <em>fileId</em>. Supported fields for each document object include:
<ul>
<li><em>fileId</em> (required): Unique identifier of the uploaded file.</li>
<li><em>fileName</em>(optional): Name of the file for reference or display purposes.</li>
<li><em>permissions</em>(optional): Defines access control for the file.
<ul>
<li><em>allowedUsers</em>: List of user identifiers allowed to access the content.</li>
<li><em>allowedGroups</em>: List of groups whose members are allowed to access the content. These groups are saved as permission entities.&nbsp;</li>
</ul>
</li>
<li><em>category</em>(optional): Logical grouping or classification for the file. This is added as metadata of the file.&nbsp;</li>
<li><em>priority</em>(optional): Indicates content priority (for example, high, medium, low). This field does not affect the ingestion process in Search AI. If the priority is set, this field is available as metadata of the content.</li>
</ul>
</li>
</ul>

   </td>
  </tr>
</table>

### Sample Request - Ingesting Chunks directly

**For ingesting chunks directly, use the following format.**

```json
“sourceName”: “Abc”,  
“sourceType” : “json”,
"documents": [
    {
      "title": "Cybersecurity",
      "chunks": [
        {
          "chunkText": "Cybersecurity is the practice of protecting systems,    networks, and programs from digital attacks. With the rise of cyber threats like ransomware and data breaches, cybersecurity has become a critical concern for businesses and governments worldwide.",
          "recordUrl": "https://www.example.com/cybersecurity",
          "chunkTitle": "The Importance of Cybersecurity"
        }
      ]
```

Note that the fields inside the chunks object should correspond to the chunk fields. To view the chunk fields, refer to the **Chunk Browser**. 


### Sample Request - Incremental Web Crawl

**For crawling web pages, use the following format.**

```json
{
  “sourceName”: “myWebDomain”,  
  “sourceType” : “web”,
  "documents": [

    {

      "urls": ["https://example.com/docs/", "https://example.com/product-guide/","https://example.com/user-guide/"]

    }

  ]
}
```
where, urls contains the list of urls to be crawled.

Note that the URLs field should point to the list of URLs that need to be crawled. If a URL is already crawled, it is crawled again. If a URL is new, it is crawled if the crawl configuration of the source permits. 


### Sample Request - Ingesting Content from Files

**For ingesting content from a file, pass the following information in this field.**

```json
{
“sourceName”: “Abc”, 
“sourceType”: “file”,
“documents”: [
      {
         "fileId": "f12455",
         "permissions": {
	   "allowedUsers": ["john@example.com", "jane@example.com"],
                "allowedGroups": ["Engineering", "Management"]
           },
      }
  ]

}
```

where, fileId is the unique identifier of the uploaded file.

Use the [Upload File API](../automation/upload-file.md) to upload the file to the application. This API returns the fileId in response. Pass that fileId in the Ingest API to ingest and index the contents of the file. 
