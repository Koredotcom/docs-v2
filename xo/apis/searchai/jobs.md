--8<-- "includes/searchai-api-back-link.md"

# Jobs API

This API is used to get the details of a job. The response of this API varies as per the type of the job. 


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
   <td>&lt;host_url>/api/public/bot/&lt;AppID/search/jobs/&lt;JobID>
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


## **Query Parameters**

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
   <td>AppID
   </td>
   <td>Provide your application ID here. 
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>JobID
   </td>
   <td>Unique identifier for a job
   </td>
   <td>Yes
   </td>
  </tr>
</table>

## **Sample Response**

This is a sample response generated for a job initiated to export analytics data to a file. The response includes the URL of the file which has the exported data. 


```json
{
    "_id": "fj-9a39a625-xxxx-xxxx-xxxx-5e8853d41060",
    "hidden": false,
    "read": false,
    "status": "SUCCESS",
    "percentageDone": 100,
    "title": "Exporting Analytics Data - JSON",
    "message": "ANALYTICS DATA JSON Export is Completed",
    "lMod": "2025-02-03T10:38:23.000Z",
    "startedAt": "2025-02-03T10:38:23.395Z",
    "timedOut": false,
    "jobType": "DATA_EXPORT",
    "streamId": "st-1715923c-xxxx-xxxx-xxxx-14920ded9b91",
    "searchIndexId": "sidx-05d139f8-abca-50ec-84f5-2f29855aba5b",
    "fileInfo": {
        "ext": "json",
        "fileId": "67a09c9f3e6fdef7c0992935",
        "fileName": "analytics_data_1738579103410",
        "fileUrl": "https://staging-xo.domain.com:443/api/getMediaStream/findly/f-fd43fdc2-0118-58d8-9c3e-c47259c1d7aa.json?n=3985948310&s=Ii9iZEF2dXBYUEt0OGlIUStBSFJLMUV3WmlDeW5oZGJHamFFVWh2UnhpckU9Ig$$"
    },
    "createdBy": "u-4d04030a-93f3-5cba-a07b-1a5b20a7e9a9",
    "directoryInfo": null,
    "opType": "Manual",
    "extractionSourceId": null,
    "contentId": [],
    "error": [],
    "parentJobId": null,
    "createdOn": "2025-02-03T10:38:23.396Z",
    "__v": 0,
    "store": {
        "urlParams": "&clientfilename=analytics_data_1738579103410.json&batchtesting=true"
    }
}
```

