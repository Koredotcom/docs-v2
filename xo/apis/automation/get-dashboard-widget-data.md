--8<-- "includes/automationai-api-back-link.md"

# Get Dashboard Widget Data

To retrieve the data associated with custom widgets and the reports of a bot.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/dashboard/</code>
<code>{{dashboardName}}/widget/{{widgetName}}?startDate={{startDate}}&endDate={{endDate}}&limit={{limit}}</code>
<strong>Note:</strong> A POST API call is now supported to include the additional filters for querying the data. See <a href="../../../analytics/automation/custom-dashboard/create-custom-dashboard-filters/">Custom Dashboard Filters</a> to know more about additional filters.
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
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token.</a>
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Custom Reports

<li>Admin Console: Custom Reports > Custom Reports
</li>
</ul>
   </td>
  </tr>
</table>



## Path Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Required
   </td>
   <td>Environment URL, for example, https://platform.kore.ai
   </td>
  </tr>
  <tr>
   <td>BotID
   </td>
   <td>Required
   </td>
   <td>Bot ID or Stream ID. You can access it from the General Settings page of the bot.
   </td>
  </tr>
</table>


 


## Sample Request for GET call


```json
curl -X GET \
 "https://{{host}}/api/public/bot/{{bot_id}}/dashboard/{{dashboardName}}/widget/{{widgetName}}?startDate={{startDate}}&endDate={{endDate}}" \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json' \
```


**Sample Request for POST call**


```json
curl --location --request POST 'https://{{host}}/api/public/bot/{{bot_id}}/dashboard/{{dashboardName}}/widget/{{widgetName}}?startDate={{startDate}}&endDate={{endDate}}' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \ 
--header 'Content-Type: application/json' \ 
--data-raw 
    '{ "customFilters": [{
       "filterSource": "userType", 
 	   "fieldName": "user", 
  	   "values": [ "newuser" ] 
    }]
    }'
```


 


## Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>dashboardName
   </td>
   <td>Required
   </td>
   <td>Name of the Custom Dashboard containing the required Widget.
   </td>
  </tr>
  <tr>
   <td>widgetName
   </td>
   <td>Required
   </td>
   <td>Name of the Widget whose data needs to be retrieved.
   </td>
  </tr>
  <tr>
   <td>limit
   </td>
   <td>Optional
   </td>
   <td>The number of records to fetch. The maximum applicable limit is 50.
   </td>
  </tr>
  <tr>
   <td>startDate
   </td>
   <td>Required
   </td>
   <td>The start date from which you want to see the changes. Enter the date in ISO date format. For example, March 30, 2020 would be 2020-03-30.
   </td>
  </tr>
  <tr>
   <td>endDate
   </td>
   <td>Required
   </td>
   <td>The end date up to which you want to see the changes. Enter the date in ISO date format. For example, March 30, 2020 would be 2020-03-30.
   </td>
  </tr>
  <tr>
   <td>customFilters:
<p>
filterSource \
fieldName \
values
   </td>
   <td>Required
   </td>
   <td>To understand about the custom dashboard filters, see <a href="../../../analytics/automation/custom-dashboard/create-custom-dashboard-filters/">Create Custom Dashboard Filters</a>.
   </td>
  </tr>
</table>


 


## Sample Response for GET and POST calls


```json
{
    "_id": "wg-xxxx-xxx-xxx-xxx-xxxxx",
    "overlay": [],
    "name": "dasaDSA",
    "type": "table",
    "sqlQuery": {
        "dataSet": "Analytics",
        "select": "metricType",
        "startDate": "2019-08-31T18:30:00.000Z",
        "endDate": "2019-10-01T18:30:00.000Z",
        "botId": "st-xxxxx-xxx-xxx-xxx-xxxxx"
    },
    "dimensions": [
           {
            "fieldName": "metricType",
            "displayName": "metricType",
            "type": "string"
        }
    ],
    "metrics": [],
    "row": [],
    "properties": {},
    "queryResponse": {
        "metaData": {
            "metricType": "string"
        },
        "queryResponse": [
            {
                "metricType": "successintents"
            },
            {
                "metricType": "successtasks"
            },
            {
                "metricType": "successintents"
            },
            {
                "metricType": "successintents"
            },
            {
                "metricType": "successtasks"
            },
            {
                "metricType": "failedintents"
            }
        ]
    }
}
```