--8<-- "includes/searchai-api-back-link.md"

# Content APIs

## Get Content By ID

This API returns the content requested.


<table>
  <tr>
   <td>Method
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td>&lt;host_url>/api/public/bot/:botId/content/contentId
   </td>
  </tr>
  <tr>
   <td>Content-Type
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td>Authorization
   </td>
   <td>auth: &lt;JWT Token>
   </td>
  </tr>
  <tr>
   <td>API Scope
   </td>
   <td>Document Management
   </td>
  </tr>
</table>

### Query Parameters

<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Mandatory
   </td>
  </tr>
  <tr>
   <td>Bot ID
   </td>
   <td>Provide your application ID here. 
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>ContentID
   </td>
   <td>Unique ID of the content to be retrieved. This is returned as doc_id in the response of the advancedSearch API. You can also find this identifier in the Chunk Browser labeled as "docId" or in the JSON view of the ingested content, where it appears as "_id."
   </td>
   <td>Yes
   </td>
  </tr>
</table>



### Sample Response

```json
 {
    "_id": "fc-26d474d1-2aa7-50cf-984d-e719a4884792",
    "searchIndexId": "sidx-cdd15c7a-47d5-5839-80ee-e4f418489f70",
    "streamId": "st-7561b874-2114-5b8f-8086-ea69007b5f53",
    "createdBy": "u-4d04030a-93f3-5cba-a07b-1a5b20a7e9a9",
    "createdOn": "2024-03-06T12:08:39.719Z",
    "lMod": "2024-11-18T07:33:35.000Z",
    "extractionType": "jira",
    "extractionSourceId": "fs-5c651c22-eb9f-5bb7-ad51-84de1df15639",
    "jobId": "fj-fecfb47b-eea8-5419-aadb-ad8552c0a7e5",
    "_source": {
        "meta_data": {
            "assignee": "John",
            "projectId": "10000",
            "issueType": "Task",
            "projectName": "Searchassist_Test",
            "issueStatus": "To Do",
            "comments": " Continue Working on it.. Give the Latest Update ",
            "reporter": "Jacob",
            "ticketId": "ST-2"
        },
        "sys_racl": [
            "10000"
        ],
        "sys_content_type": "jira",
        "sys_source_name": "Jira COnnector",
        "sourceType": "jira",
        "raw_data": "...",
        "base_url": "",
        "title": "Debugging Request",
        "content": "Debugging Request Request for debugging in the Staging setup\nAssignee: John\nProject ID: 10000\nIssue Type: Task\nProject Name: My Project\nIssue Status: To Do\nReporter: Jacob\nComments:  Continue Working on it.. Give the Latest Update ",
        "url": "https://myprojectjira.atlassian.net/browse/xx-2",
        "type": "Task",
        "comments": " Please Update the status."
    },
    "connectorId": "fcon-c13cc009-be5f-50d8-b903-941f88f7b3b7",
    "externalSourceId": "sidx-cdd15c7a-47d5-5839-80ee-e4f418489f70_ST-2",
    "updatedOn": "2024-09-09T10:32:27.394Z",
    "__v": 0
}
```

## Delete Content

This API deletes specific content from the SearchAI application. Deleting the content also deletes the corresponding chunks from the application. 


<table>
  <tr>
   <td>Method
   </td>
   <td>DELETE
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td>&lt;host_url>/api/public/bot/:botId/content
   </td>
  </tr>
  <tr>
   <td>Content-Type
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td>Authorization
   </td>
   <td>auth: &lt;JWT Token>
   </td>
  </tr>
  <tr>
   <td>API Scope
   </td>
   <td>Document Management
   </td>
  </tr>
</table>



### Query Parameters


<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Mandatory
   </td>
  </tr>
  <tr>
   <td>Bot ID
   </td>
   <td>Provide your application ID here. 
   </td>
   <td>Yes
   </td>
  </tr>
</table>



### Request Parameters


<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Mandatory
   </td>
  </tr>
  <tr>
   <td>docIDs
   </td>
   <td>Array of identifiers of the records to be deleted from the application. Please note that this id is available as doc_id and starts with “d-”.Use this field for structured data/chunks.
   </td>
   <td>Yes
   </td>
  </tr>
</table>


**Sample Request**


```json
{
    "docIds":["fc-dafe0d2b-cb65-5f74-8f42-e0d4855e20ee","fc-dafe0d2b-cb65-5f74-8f42-e0d4855e20edd"]
}
```



### Response Parameters


<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td><code>deletedCount</code>
   </td>
   <td>Count of the number of records deleted successfully. 
   </td>
  </tr>
</table>



## Get Content by Condition

This API is used to fetch specific content from the SearchAI application based on a given condition.

<table>
  <tr>
   <td>Method
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td>&lt;host_url>/api/public/bot/:botId/content-by-cond
   </td>
  </tr>
  <tr>
   <td>Content-Type
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td>Authorization
   </td>
   <td>auth: &lt;JWT Token>
   </td>
  </tr>
  <tr>
   <td>API Scope
   </td>
   <td>Document Management
   </td>
  </tr>
</table>



### Query Parameters

<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Mandatory
   </td>
  </tr>
  <tr>
   <td>Bot ID
   </td>
   <td>Provide your application ID here. 
   </td>
   <td>Yes
   </td>
  </tr>
</table>

### Request Parameters

<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Mandatory
   </td>
  </tr>
  <tr>
   <td>query
   </td>
   <td>This contains all the fields on which filters are to be applied. It can have one or more fields. If there are more than one fields, a logical AND operation is performed on the results produced by the filters. 
<p>
For example, if 
<p>
<code>“query”:{</code>
<p>
<code> "sys_content_type": "file",</code>
<p>
}, all the file type of content is returned in the response. 
<p>
Similarly, if 
<p>
<code>“query”:{</code>
<p>
<code> "sys_content_type": "file",</code>
<p>
<code> "title": "my file"</code>
<p>
}, all the files with title equal to ‘my file’ are returned in the response. 
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>nextCursor
   </td>
   <td>This field is used for cursor based pagination. The first time API request is made without this field. It returns the first set of data. The response of the API includes a cursor value that should be passed in the next request. The cursor identifies a specific item in the dataset, which serves as the starting point for the next page of results. Use the cursor value as provided in the previous response object. When the field nextCursor set as null, it indicates the end of result set.
   </td>
   <td>No
   </td>
  </tr>
</table>

### Sample Request

```json
{
  "query": {  //title and sys_content_type fields
       "title": "title of the file",
       "sys_content_type": "file"
   }
}
```

### Sample Response

```json
{
    "data": [
        {
            "_id": "fc-d19666d5-234b-587c-a197-40efa2ec9d3d",
            "searchIndexId": "sidx-d8d728ad-1ddd-57f0-aa98-895efa328898",
            "streamId": "st-86b7aeda-c010-504d-ac5e-f01df1407ec6",
            "createdBy": "u-1e066081-f25d-5b7b-99d5-1b873ea50b09",
            "lModBy": "u-1e066081-f25d-5b7b-99d5-1b873ea50b09",
            "createdOn": "2025-11-04T05:37:21.694Z",
            "lMod": "2025-11-04T05:37:21.000Z",
            "extractionType": "file",
            "extractionSourceId": "fs-9a3feb4e-d97f-5bfc-84cd-c999f62dc6fa",
            "jobId": "fj-75b384de-e38c-5b85-b152-6d45aa5a042d",
            "_meta": {
                "state": "approved",
                "isDeleted": false,
                "contentSource": "file",
                "size": 1322647,
                "updateAvailable": false,
                "recordsCount": 4,
                "file_url": "https://host/api/getMediaStream/findly/f-c65e029e-e553-59bd-83e2-0b230ba88deb.pdf?n=5029663591&s=IklCTXJhUUE2REprdElBbi83Q2VPdnV3Q3FkZ3Z2cGRXbzYyUVFIY2k5eFE9Ig$$"
            },
            "_source": {
                "file_title": "Company.ai_Conversational_AI_Solutions_Brief.pdf",
                "file_content": <file content>,
                "file_content_type": "application/pdf",
                "file_url": "https://host/api/getMediaStream/findly/f-c65e029e-e553-59bd-83e2-0b230ba88deb.pdf?n=5029663591&s=IklCTXJhUUE2REprdElBbi83Q2VPdnV3Q3FkZ3Z2cGRXbzYyUVFIY2k5eFE9Ig$$",
                "file_image_url": "https:/staging-smartassist.Company.ai/searchassist/assets/images/directory/fileuploadTypes/pdf.svg",
                "file_preview": ... <preview text>,
                "sys_racl": [
                    "*"
                ],
                "sys_content_type": "file",
                "sys_source_name": "Default Directory",
                "file_content_obj": [
                    {
                        "page_text": <page-text>,
                        "page_no": 1,
                        "page_url": "https://host/api/getMediaStream/findly/f-c65e029e-e553-59bd-83e2-0b230ba88deb.pdf?n=5029663591&s=IklCTXJhUUE2REprdElBbi83Q2VPdnV3Q3FkZ3Z2cGRXbzYyUVFIY2k5eFE9Ig$$#page=1"
                    },
                    {
                        "page_text": <page-text>,
                        "page_no": 2,
                        "page_url": "https://host/api/getMediaStream/findly/f-c65e029e-e553-59bd-83e2-0b230ba88deb.pdf?n=5029663591&s=IklCTXJhUUE2REprdElBbi83Q2VPdnV3Q3FkZ3Z2cGRXbzYyUVFIY2k5eFE9Ig$$#page=2"
                    },
                    {
                        "page_text":<page-text>,
                        "page_no": 3,
                        "page_url": "https://host/api/getMediaStream/findly/f-c65e029e-e553-59bd-83e2-0b230ba88deb.pdf?n=5029663591&s=IklCTXJhUUE2REprdElBbi83Q2VPdnV3Q3FkZ3Z2cGRXbzYyUVFIY2k5eFE9Ig$$#page=3"
                    },
                    {
                        "page_text": <page-text>,
                        "page_no": 4,
                        "page_url": "https://host/api/getMediaStream/findly/f-c65e029e-e553-59bd-83e2-0b230ba88deb.pdf?n=5029663591&s=IklCTXJhUUE2REprdElBbi83Q2VPdnV3Q3FkZ3Z2cGRXbzYyUVFIY2k5eFE9Ig$$#page=4"
                    }
                ],
                "type": "application/pdf",
                "sys_file_type": "pdf"
            },
            "__v": 0
        }
    ],
    "nextCursor": null,
    "prevCursor": "fc-d19666d5-234b-587c-a197-40efa2ec9d3d"
}
```
