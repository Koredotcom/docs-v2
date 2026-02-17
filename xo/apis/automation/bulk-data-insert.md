--8<-- "includes/automationai-api-back-link.md"

# Data Insert (Bulk) API

Used to insert bulk data into Data Table.


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
   <td><code>https://{{host}}/api/public/tables/{{tableName}}/bulk</code>
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
<br>
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>App Access</strong>
   </td>
   <td>Write access to the Data Table from the Data Definition in DaaS.
<br>
For more information, see <a href="../../../administration/data/data-table/">app assignment for accessing the data in a table </a>and <a href="../../../administration/data/data-as-service">Data as a Service </a>articles.
   </td>
  </tr>
</table>

## Path Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Environment URL, for example, <code>https://platform.kore.ai</code>
   </td>
  </tr>
  <tr>
   <td>tableName
   </td>
   <td>Name of the table to insert bulk data
   </td>
  </tr>
</table>


 


## Sample Request


```json
curl -X POST 'https://{{host}}/api/public/tables/{{tableName}}/bulk' \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json' \
  -d '{
      "data": [
         {
          "First_Name": "Jane",
          "Last_Name": "Smith",
          "Gender": "female",
          "Number": 263
         },
         { 
           "First_Name": "Mike", 
           "Last_Name": "Mike", 
           "Gender": "male", 
           "Number": 234 
         }
       ]
     }'
```


 


## Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>data
   </td>
   <td>Array of objects with the column_name: value pairing
<br>
<code>"data": [</code>
<br>
<code>    {</code>
<br>
<code>        "&lt;col1_name>": "&lt;value1>",</code>
<br>
<code>        "&lt;col2_name>": "&lt;value2>",</code>
<br>
<code>      },</code>
<br>
<code>     { </code>
<br>
<code>         "&lt;col1_name>": "&lt;value1>", </code>
<br>
<code>         "&lt;col2_name>": "&lt;value2>", </code>
<br>
<code>      }</code>
<br>
<code>   ]</code>
   </td>
  </tr>
</table>

!!! note

    The maximum payload size is 50 MB. One way to ensure that the payload size is within the permitted limit is to paste the entire payload in a JSON file and check its size before running the API.
 


## Sample Response


```json
{
"records": [
  {
    "First_Name": "Jane",
    "Last_Name": "Smith",
    "Gender": "female",
    "Number": 263,
    "Updated_On": "2020-03-28T07:02:09.652Z",
    "Created_On": "2020-03-28T07:02:09.652Z",
    "Updated_By": "st-98e05480-0257-5e35-b6d2-66a323834f9d",
    "Created_By": "st-98e05480-0257-5e35-b6d2-66a323834f9d",
    "sys_Id": "sys-545dae21-8675-5a95-9c1b-a223bc6f4bc8",
    "_id": "27eh4823jh43246jnn2455h34"
  },
  { "First_Name": "Mike", 
    "Last_Name": "Mike", 
    "Gender": "male", 
    "Number": 234, 
    "Updated_On": "2020-03-28T07:02:09.652Z", 
    "Created_On": "2020-03-28T07:02:09.652Z", 
    "Updated_By": "st-98e05480-0257-5e35-b6d2-66a323834f9d", 
    "Created_By": "st-98e05480-0257-5e35-b6d2-66a323834f9d", 
    "sys_Id": "sys-545dae21-8675-5a95-9c1b-a223bc6f4bc8",
    "_id": "27eh4823jh43246jnn2455h34" 
   }
 ]
}
```