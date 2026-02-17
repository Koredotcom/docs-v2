--8<-- "includes/searchai-api-back-link.md"

# Connector APIs

## Get Connectors

This API returns the list of connectors configured for an application. For each connector, it provides the basic details like name and type of connector, record count in the connector, etc.


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
   <td>&lt;host_url>/api/public/bot/:botId/connectors
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
   <td>Permission Entity
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
   <td>skip
   </td>
   <td>Number of records to skip from the beginning (used for pagination)
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>limit
   </td>
   <td>Number of records to fetch in a single call (used for pagination)
   </td>
   <td>No
   </td>
  </tr>
</table>



## **Sample Response**


```json
 {
    "connectors": [
        {
            "_id": "fcon-73d16e4a-282a-5c41-9ca7-8aec4dd04c63",
            "name": "myConnector",
            "type": "json",
            "createdBy": "john.doe@example.com",
            "isActive": true,
            "sourceId": "fs-cf813bb4-xxxxxxxx-bf25-604c528f9782",
            "resourceid": "findlyConnectors",
            "recordsCount": 1,
            "size": 1
        }
    ],
    "hasMore": false
}

```

