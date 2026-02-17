--8<-- "includes/automationai-api-back-link.md"

# Query Data (View) API

Used to get data from Table View.


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
   <td><code>https://{{host}}/api/public/views/{{viewName}}/query?sys_limit={{limit_value}}&sys_offset={{offset_value}}</code>
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
   <td>Read access to the Data Table from the Data Definition in DaaS.
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
   <td>viewName
   </td>
   <td>The table view from which to fetch data.
   </td>
  </tr>
  <tr>
   <td>sys_limit
   </td>
   <td>The maximum number of records to be fetched.
   </td>
  </tr>
  <tr>
   <td>sys_offset
   </td>
   <td>The number of records to be skipped from the beginning of the results dataset.
   </td>
  </tr>
</table>


## Sample Request


```json
curl -X POST 'https://{{host}}/api/public/views/{{viewName}}/query?sys_limit=4&sys_offset=0' \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json' \
  -d '{
      "query":{
 	"expressions": [
        	{"field": "firstName", "operand": "=", "value": "Jane"},
		{"field": "lastName", "operand": "=", "value": "Doe"}
		],
		"operator": "or"
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
   <td>Filter criteria identifying the rows to be fetched
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
</table>

## Sample Response


```json
{
    "metaInfo": [
        {
            "name": "gender",
            "type": "string"
        },
        {
            "name": "lastName",
            "type": "string"
        }
    ],
    "queryResult": [
        {
            "age": male,
            "last_name":tony,
        }
    ]
}
```