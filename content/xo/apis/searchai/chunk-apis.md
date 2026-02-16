--8<-- "includes/searchai-api-back-link.md"

# Chunks APIs

## Get Chunks By Condition

This API returns the complete list of chunks that satisfy the given condition in the request body. 

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
   <td>&lt;host_url>/api/public/bot/:botId/chunk/list
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
   <td>Chunk Management
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
   <td>Bot ID
   </td>
   <td>Provide your application ID here. 
   </td>
   <td>Yes
   </td>
  </tr>
</table>

## **Request Parameters**


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
   <td>filters
   </td>
   <td>This field is used to set the filters for selecting the chunks. Filters contains 
<ul>

<li>Conditions: This is an array of conditions where each condition is a set of operands, which are applied on the conditions and the conditions to be applied.  </li>

<li>Operand: The operand to be applied on all the conditions in the array. 

<p>
For instance, if the value of the filter field is set as shown below, then a logical OR operation is performed on the chunks using source name field, another logical OR is performed on chunks using the Record Title, and then an AND operation is performed on chunks filtered by above two conditions to further filter the result set. 
<code>
  "conditions": [
    {
      "operand": "or",
      "conditions": [
        {
          "key": "sourceName",
          "op": "equals",
          "value": "https://www.blogs.kore.com/"

        },
         {
          "key": "sourceName",
          "op": "equals",
          "value": "www.kore.com"
        }
      ]
    },
    {
      "operand": "or",

      "conditions": [
        {
          "key": "recordTitle",
          "op": "equals",
          "value": "FAQs"
        },
         {
          "key": "recordTitle",
          "op": "equals",
          "value": "Frequently Asked Questions"
        }
      ]
    }
  ],
  "operand": "and"
}</code></li>
</ul>
   </td>
   <td>No. If no filters are provided, all the chunks are returned. 
   </td>
  </tr>
  <tr>
   <td><strong>enableFilters</strong>
   </td>
   <td>Set this to true if the filter field is to be applied to the chunks in response.  
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong><code>nextCursor</code></strong>
   </td>
   <td>Cursor are used for cursor based pagination. When cursor is not passed in the API, the first set of results are returned in the API. The response of the API returns the cursor value to be sent in the next API request to fetch the next set of results.  Use the value in the response to set this cursor in the subsequent request. 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong><code>prevCursor</code></strong>
   </td>
   <td>Cursor are used for cursor based pagination. When cursor is not passed in the API, the first set of results are returned in the API. The response of the API returns the cursor value to be sent in the next API request to fetch the next set of results. Use the value of the cursor in the previous request. 
   </td>
   <td>No
   </td>
  </tr>
</table>



## **Sample Response**


```
"count": 888,
   "chunks": [
       {
           "_id": "chk-fffb8f28-29c2-4afe-8d2c-9379dad4446c",
           "chunkTitle": "",
           "chunkText": "191 agreement of trial balance. Only the total of the trial balance would be short by Rs. 100. But if posting is not done in one of the accounts, this will affect the agreement of trial balance.    b) Errors of Commission Errors of commission take place when some transactions are incorrectly recorded in the books of accounts. Such errors include errors on account of wrong balancing of an account, wrong posting, wrong totalling, wrong carry forwards, etc. For example, if a sum of Rs. 255    received from John is credited to his account as Rs. 525, this is an error of commission.",
           "sourceType": "file",
           "sourceName": "Default Directory",
           "extractionMethod": "text",
           "chunkType": "Text",
           "chunkContent": "chunkText : 191    agreement of trial balance. Only the total of the trial balance would be    short by Rs. 100. But if posting is not done in one of the accounts, this    will affect the agreement of trial balance.    b) Errors of Commission    Errors of commission take place when some transactions are    incorrectly recorded in the books of accounts. Such errors include errors    on account of wrong balancing of an account, wrong posting, wrong    totalling, wrong carry forwards, etc. For example, if chunkTitle :  sourceName : Default Directory",
           "chunkId": "chk-fffb8f28-29c2-4afe-8d2c-9379dad4446c",
           "sourceUrl": "https://qa1-uxo.kore.ai:443/api/getMediaStream/findly/f-e7e04183-c53a-5013-9f93-f77f438aa7f9.pdf?n=4272962592&s=IkFHSDh1L3MxejB0OHU0MFg0MEVPV3AwSXRQZy9rbUhOOHh3RGdKaVpCSVk9Ig$$",
           "pageNumber": 191,
           "recordTitle": "accounts.pdf",
           "recordUrl": "https://qa1-uxo.kore.ai:443/api/getMediaStream/findly/f-e7e04183-c53a-5013-9f93-f77f438aa7f9.pdf?n=4272962592&s=IkFHSDh1L3MxejB0OHU0MFg0MEVPV3AwSXRQZy9rbUhOOHh3RGdKaVpCSVk9Ig$$#page=191",
           "docId": "fc-4de878cb-01a6-5557-a7a7-78992b743b77",
           "searchIndexId": "sidx-f9413800-94f8-51e0-b3d6-7d1b8187d6f6",
           "sourceId": "fs-4181a831-ef7b-5bb6-8adb-937be72ce275",
           "createdOn": "2024-11-19T13:45:45.914Z",
           "extractionStrategy": "Default Strategy",
           "fileType": "pdf",
           "chunkMeta": {}
       }
    ],
   "hasMore": true,
   "inOffsetPagination": true,
   "nextCursor": "eyJzZWFyY2hBZnRlciI6ImNoay1jMTFjZGMwZi05MmUwLTQzYTgtODc5OS1kZjAwZjA0MzExNDUiLCJza2lwIjoxMCwibGltaXQiOjEwLCJwcmV2Q3Vyc29yIjoiIn0=",
   "prevCursor": null

}
```



## Update Chunks

This API is used to update a given chunk. The parameters provided in the request body are updated. If a parameter is missing, the value of that parameter in the chunk, remains same. 


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
   <td>&lt;host_url>/api/public/bot/:botId/chunk/:chunkId
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
   <td>Chunk Management
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
   <td>Bot ID
   </td>
   <td>Provide your application ID here. 
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>ChunkID
   </td>
   <td>Provide the unique ID of the chunk to be updated.
   </td>
   <td>Yes
   </td>
  </tr>
</table>



## **Request Parameters**

It is mandatory to pass the whole of this chunk info in the request body.  The field names should match as in the example below. 

## **Sample Request**


```
 "chunkText": "text",
  "chunkTitle": "title1",
  "pageNumber": "1",
  "recordTitle": "recordTitle",
  "recordUrl": "recordUrl",
  "sourceUrl": "sourceUrl",
  "chunkMeta": {}
}
```


## **Sample Response**

```json
{
    "indexPipelineId": "fip-8e8d41c7-e1c3-5f73-b764-09327de66de7_vector",
    "status_code": 200,
    "status_msg": "Documents updated successfully",
    "updated_documents": 1
}
```

