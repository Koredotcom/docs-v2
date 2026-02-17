--8<-- "includes/automationai-api-back-link.md"

# Data Update API

Used to update data into Data Table.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>PUT
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/tables/{{tableName}}</code>
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
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>App Access</strong>
   </td>
   <td>Read and Write access to the Data Table from the Data Definition in DaaS.
<p>
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
   <td>Name of the table to update data
   </td>
  </tr>
</table>


 


## Sample Request


```json
curl -X PUT \
  https://{{host}}/api/public/tables/{{tableName}} \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json' \
  -d '{
      "query":{
 	"expressions": [
        	{"field": "firstName", "operand": "=", "value": "Jane"},
		{"field": "lastName", "operand": "=", "value": "Doe"}
		],
		"operator": "and"
	   },
      "data": {
        "First_Name": "Jane",
        "Last_Name": "Smith",
        "Number": 3453
    }
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
   <td>query
   </td>
   <td>Filter criteria identifying the row to be updated
<p>
<code> "query":{</code>
<p>
<code>	"expressions": [</code>
<p>
<code>	   {"field": "&lt;col1_name>", "operand": "=/!=/&lt;/>", "value": "&lt;value1>"},</code>
<p>
<code>	   {"field": "&lt;col2_name>", "operand": "=/!=/&lt;/>", "value": "&lt;value2>"}</code>
<p>
<code>	],</code>
<p>
<code>	"operator": "and/or"</code>
<p>
<code>	   }</code>
   </td>
  </tr>
  <tr>
   <td>data
   </td>
   <td>Object with the column_name: value pairing for the columns to be updated
<p>
<code>"data": {</code>
<p>
<code>        "&lt;col1_name>": "&lt;value1>",</code>
<p>
<code>        "&lt;col2_name>": "&lt;value2>",</code>
<p>
<code>   }</code>
   </td>
  </tr>
</table>


## Sample Response

```json
{
   "nModified": 1
}
```