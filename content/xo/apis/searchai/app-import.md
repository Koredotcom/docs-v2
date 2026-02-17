# App Import

Use this API to import an existing Search AI app configuration from a JSON file.



* The import process overwrites existing configurations for the modules present in the file.
* If a specific module configuration isn't included in the uploaded file, the current configuration for that module remains unchanged.
* Import is executed as an asynchronous job.


## Import Workflow



* Upload the configuration file using the Upload File API.
* Initiate the import process using the uploaded file. 
* Track the import status using the Job Status API


## Step 1:  Upload Config File

Upload the app configuration file in JSON format for import.

**Guidelines**

* Upload the file as `multipart/form-data`
* Ensure
    * `fileContext` = `findly`
    * `fileExtension` = `json`


### Sample Request


```
curl --location --request POST 'https://host/api/public/uploadfile' \
--header 'auth: xxxxxxxxxxxxxxxxxxxxxxxxxxx.eyJhcHBJZCI6ImNzLTMwYThkZDU1LTM5ODItNTQwNi04MDc2LTU0MzFjZjk0OTg3YSJ9.5CEkHiHBxJMPHs8Tw3R3VOYMcVY-r2I7-lZseiaZKcY' \
--form 'file=@"/C://searchConfig.json"' \
--form 'fileContext="findly"' \
--form 'fileExtension="json"'
```



### Sample Response


```
{
   "fileId": "692d7d03d8dcf09cff781d67",
   "hash": "43e6c123a88511965203aa4e87fe38b563a04df1",
   "fileName": "f-7c1f4767-416c-5c6c-af6d-928b28978312"
}
```



## Step 2:  Initiate App Import

Creates an asynchronous import job to apply configurations from the uploaded file to the specified Search AI app.



* Uses the `fileId` returned by the Upload File API.
* Overwrites existing configurations for the modules specified in the API. Other modules stay as it is. 
* Returns a `jobId` that can be used to track import progress.

<table>
  <tr>
   <td>
<strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td>{HOST_NAME}/api/public/bot/{botId}/search/app-import
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
   <td><code>auth: {{JWT}}</code>
<p>
See <a href="http://../api-introduction/#generating-the-jwt-token"">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>Search AI Import
   </td>
  </tr>
</table>



### Query Parameters


<table>
  <tr>
   <td><strong>Parameters</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Mandatory</strong>
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
   <td>fileId
   </td>
   <td>Unique identifier of the uploaded file.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>features
   </td>
   <td>List of features to import. This field takes an array. The array can have one or more of the following features. 
<ul>

<li><code>chunkStages</code> - Chunk processing stages configuration.</li>

<li><code>advancedConfig</code> - Advanced settings.</li>

<li><code>businessRules</code> - Business logic rules.</li>

<li><code>searchResultsConfig</code> - Search results configuration.</li>

<li><code>answerConfig</code> - Answer generation settings.</li>

<li><code>answerRetrievals</code> - Answer retrieval configuration.</li>
</ul>
<p>
Note:
<ol><li> Pass an empty array <code>[]</code> to import all available features in the file.</li>
<li> If the features key isn't included in request parameters, all the modules available in the file are imported. </li>
</ol>
   </td>
   <td>No
   </td>
  </tr>
</table>



### Sample Request \



```
curl --location 'https://host/api/public/bot/st-f86b483d-1b39-5861-9926-fb1a6e54af17/search/app-import' \
--header 'auth: eyJhbGciOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx9.eyJhcHBJZCI6ImNzLWU4N2ViZTk4LWM5MGYtNTY5NS1hZTdlLTc2NWIxNDVkNTgxYyJ9.NQhe2JJcvAcaIuyCCeQ063RU4Fu3n4bj-wHbWx87Qbo' \
--header 'Content-Type: application/json' \
--data '{
    "fileId": "692d7d03d8dcf09cff781d67",
    "features": []
}'
```


 


### Sample Response


```
{
   "status": "success",
   "jobId": "fj-ebc95cc6-d05f-59c8-8254-6ac08a3fb73d"
}
```



## Step 3: Find the status of the job

Use the Jobs API to monitor the status of the import job. On success, the response includes per-module import status.


### Sample request


```
curl -X GET 'https://host/api/public/bot/st-3d7ffe93-c384-5d09-918c-c8438baef80d/search/app-export/jobs/fj-ebc95cc6-d05f-59c8-8254-6ac08a3fb73d' \
  --header 'auth: eyJhbGciOiJIUzI1xxxxxxxxxxxxxxxxxxxxxxxxZCI6ImNzLTAyMDJiMDA4LTIzMmQtNWI5MS1hNGQ5LTBlNDhhOGMwOGVmZiJ9.DU3ciUDYa77WV7106S60_M2k2lpKZDeMUUg0t6aqt78' \
  --header 'Content-Type: application/json'
```



### Sample Response


```
{
   "_id": "fj-b504b6bd-39d1-5c7d-af7f-a2696db1fe3e",
   "status": "SUCCESS",
   "createdOn": "2025-11-21T11:58:27.913Z",
   "searchIndexId": "sidx-9731bc5d-2b92-5587-ad80-56bf0c01f844",
   "fileInfo": {
       "fileId": "692053e43fe5d5ffd46dfbb6",
       "fileName": "searchConfig",
       "fileUrl": "http://host/api/internal/getMediaStream/findly/f-2a69ebb2-f23c-501f-8ad6-00b1428d49f4.json?e=1763726608&n=828371577&s=IjJLRTl5b3IyTXJlbTRuY3NNaGprdFczUDd2YThDN2R1cGN2eDA4bUsxU009Ig%24%24",
       "externalFileURL": "http://host/api/getMediaStream/findly/f-2a69ebb2-f23c-501f-8ad6-00b1428d49f4.json?n=5725151853&s=ImhRMjVpU0ozYklwRHVpbXh0NGdOYmR0bnhOaG1YRVlaZWJZWTlrZmJLVWM9Ig%24%24"
   },
   "validation": [
       {
           "feature": "chunkStages",
           "status": "success"
       },
       {
           "feature": "advancedConfig",
           "status": "success"
       },
       {
           "feature": "businessRules",
           "status": "success"
       },
       {
           "feature": "answerConfig",
           "status": "success"
       },
       {
           "feature": "answerRetrievals",
           "status": "success"
       }
   ]
}
```

