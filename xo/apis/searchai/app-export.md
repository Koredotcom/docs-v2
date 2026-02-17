# App Export API

The SearchAssist App Export API enables developers to programmatically export search application configurations. The export is handled as an asynchronous process and involves two steps:

1. Initiate Export - Submit an export request with required features.
2. Poll Job Status - Check export status and download the configuration file when the job is successfully completed. 


## Initiate App Export

Creates an asynchronous export job for the search application configuration in the uploaded file. Only the features listed in the API request are exported from the application. 


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
   <td>{HOST_NAME}/api/public/bot/{botId}/search/app-export
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
   <td>Search AI Export
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
   <td>features
   </td>
   <td>List of features to export. This field takes an array. The array can have one or more of the following features. <strong>Available Features:</strong>
<ul>

<li><code>chunkStages</code> - Chunk processing stages configuration.</li>

<li><code>advancedConfig</code> - Advanced settings.</li>

<li><code>businessRules</code> - Business logic rules.</li>

<li><code>searchResultsConfig</code> - Search results configuration.</li>

<li><code>answerConfig</code> - Answer generation settings.</li>

<li><code>answerRetrievals</code> - Answer retrieval configuration.

<p>
Note: Pass an empty array to export all available features.</li>
</ul>
   </td>
   <td>Yes
   </td>
  </tr>
</table>



### Sample Request



```
curl --location 'https://<home-name>/api/public/bot/st-3d7ffe93-c384-5d09-918c-c8438baef80d/search/app-export' \
--header 'auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJxxxxxxxxxxxxxxxxTAyMDJiMDA4LTIzMmQtNWI5MS1hNGQ5LTBlNDhhOGMwOGVmZiJ9.DU3ciUDYa77WV7106S60_M2k2lpKZDeMUUg0t6aqt78' \
--header 'Content-Type: application/json' \
--data '{
answerConfig, 
answerRetrievals 
}
```


  


### Sample Response


```
{ 
"status": "success",
"jobId": "fj-ebc95cc6-d05f-59c8-8254-6ac08a3fb73d"
}
```



<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>string
   </td>
   <td>Current status of the request.
   </td>
  </tr>
  <tr>
   <td>jobId
   </td>
   <td>string
   </td>
   <td>Unique job identifier. Use it to poll for the status of the job.
   </td>
  </tr>
</table>



## View Job Status

This API returns the status of the job along with some debugging information. If the job is completed successfully, it also returns the URL of the file with exported configuration information. 

[Refer to this to learn more about how to invoke the API. ](jobs.md)

### Sample Request


```
curl -X GET 'https://<host-name>i/api/public/bot/st-3d7ffe93-c3xx-xxxx-918c-c8438baef80d/search/app-export/jobs/fj-15ebc532-5e8c-5e85-bf5b-f3ef0aa10e21' \
  --header 'auth: eyJhbGciOiJIUzI1NiIxxxxxxxxxxxxxxxxxxxVCJ9.eyJhcHBJZCI6ImNzLTAyMDJiMDA4LTIzMmQtNWI5MS1hNGQ5LTBlNDhhOGMwOGVmZiJ9.DU3ciUDYa77WV7106S60_M2k2lpKZDeMUUg0t6aqt78' \
  --header 'Content-Type: application/json'
```



### Sample Response

The response includes status of the export of each individual module.


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

