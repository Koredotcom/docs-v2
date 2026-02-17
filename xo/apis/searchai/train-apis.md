--8<-- "includes/searchai-api-back-link.md"

# Train APIs

## Initiate Training API

This API is used to train the Search AI application. You can use it to train the application with all the ingested content or with specific content. Note that this initiates the training process, which may take a while depending on the amount of content for which the training has to be done. To check the status of the training process, use the Training Status API.


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
   <td>&lt;host_url>/api/public/bot/:botId/train
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
   <td>Train
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
   <td>contentIds
   </td>
   <td>Array of Unique IDs of the content with which the application is to be trained. If this field isn't provided, the application is trained with all the available content. 
   </td>
   <td>No
   </td>
  </tr>
</table>

### Sample Request

```json
{
    "contentIds": ["fc-3f8d7001-6480-528a-9158-9d9791555726"]
}
```

### Sample Response

The response includes an `_id` field that serves as a unique identifier. You can use this ID to check the training status through the Training Status API.

The `status` field indicates the current state of the training process.

The `opType` field specifies whether the training was initiated manually by the user or automatically by Search AI.


```json
{
   "_id": "fjg-a9ee651e-ab49-54e6-899c-35d0fbadba0f",
   "opType": "Manual",
   "searchIndexId": "sidx-6fee87f7-7817-577d-88c5-ee5d9f560327",
   "extractionSourceId": null,
   "contentId": [],
   "status": "running",
   "executionLog": {
       "extraction": {
           "jobId": "fj-52c36b29-d462-5e05-b942-aaa6675971e4",
           "type": "EXTRACTION",
           "status": "running"
       }
   },
   "isHide": false,
   "createdBy": "u-33eb7a56-3406-5a16-9e6a-bf14a785c25c",
   "lModBy": "u-33eb7a56-3406-5a16-9e6a-bf14a785c25c",
   "lMod": "2024-10-14T10:37:05.013Z",
   "createdOn": "2024-10-14T10:37:05.013Z",
   "__v": 0
}
```

## Get Train Status API

This API is used to find the status of the training process.


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
   <td>&lt;host_url>/api/public/bot/:botId/job-group/jobId
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
   <td>Answer Generation
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
   <td>Job Group ID
   </td>
   <td>Provide the unique ID generated during the initiation of the training process
   </td>
   <td>Yes
   </td>
  </tr>
</table>



### Sample Request

```
curl --location 'https://your-domain.com/api/public/bot/st-c6cxxxxxxxx-553e-bd8f-a490389b3222/job-group/fjg-ba81546b-3b57-xxxx-xxxx-9b890eebbf13' \
--header 'Accept: application/json, text/plain, /' \
--header 'Connection: keep-alive' \
--header 'Content-Type: application/json;charset=UTF-8' \
--header 'auth: <your-auth-key>'
```

### Sample Response

* The `status` field in the response shows the current status of the training. It can take the following values:
    * success 
    * in progress
    * failed
* The `opType` field indicates whether the training was initiated automatically by Search AI or manually.

```json
{
   "_id": "fjg-ba81546b-3b57-5116-a78d-9b890eebbf13",
   "opType": "Auto",
   "searchIndexId": "sidx-03dd1dc4-c077-568d-b0c1-b67cc194592b",
   "extractionSourceId": "fs-27cf487f-34df-5810-a3b4-3adbfe55261a",
   "contentId": [],
   "status": "success",
   "executionLog": {
       "parsing": {
           "jobId": "fj-5b00d294-aace-5682-a218-cd7db7b9848f",
           "type": "PARSING",
           "status": "success",
           "errMsg": "",
           "timeTook": 215
       },
       "extraction": {
           "jobId": "fj-64d846f9-687c-55d1-bca7-5ed01b9a96b9",
           "type": "EXTRACTION",
           "status": "success",
           "errMsg": "",
           "timeTook": 196
       },
       "indexing": {
           "jobId": "fj-e110d0a4-a99d-5449-bb11-f5fbca8dfd31",
           "type": "INDEXING",
           "status": "success",
           "timeTook": 2827
       }
   },
   "isHide": false,
   "createdBy": "u-d762cdc1-55a0-5cef-8e2d-90a8ff1e5dc5",
   "lModBy": "u-d762cdc1-55a0-5cef-8e2d-90a8ff1e5dc5",
   "trackEventLogs": true,
   "lMod": "2025-10-21T13:43:31.315Z",
   "createdOn": "2025-10-21T13:43:28.441Z",
   "__v": 0
}
```