--8<-- "includes/searchai-api-back-link.md"

# Permission Entity APIs

## Get Permission Entities

This API lists all the permission entities associated with a connector. 

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
   <td>&lt;host_url>/api/public/bot/:botId/connector/:connectorId/permission-entities
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
   <td>Permission Entity Management
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
   <td>Connector ID
   </td>
   <td>Unique ID of the connector for which permission entities are requested.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Skip
   </td>
   <td>No of records to skip from the beginning of the response
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Limit
   </td>
   <td>Maximum number of records to return in the response
   </td>
   <td>No
   </td>
  </tr>
</table>

### Response Parameters

<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>Entity Id
   </td>
   <td>Unique identifier of the field used to create Permission entity. 
   </td>
  </tr>
  <tr>
   <td>name
   </td>
   <td>Name of the entity field as in the source. 
   </td>
  </tr>
  <tr>
   <td>meta
   </td>
   <td>Meta information about the entity. 
   </td>
  </tr>
  <tr>
   <td>userIds
   </td>
   <td>Array of users associated with the permission entity
   </td>
  </tr>
  <tr>
   <td>sourceType
   </td>
   <td>Source of the entity. This field indicates the content source for which the permission entity was created. For instance, if the given permission entity corresponds to a google user group, the value of the field would be googleDrive. 
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>Type of entity. This field indicates the type of user  permission to which the permission entity corresponds. For instance, if the permission entity corresponds to the user criteria in ServiceNow, the value of the field would be userCriteria. 
   </td>
  </tr>
</table>

### Sample Response

```
[
    {
        "_id": "fpe-82e99097-7532-506b-af42-363cbe5bb59c",
        "entityId": "john.doe@example.com",
        "meta": {},
        "name": "John",
        "userIds": [],
        "sourceType": "googleDrive",
        "type": "googleGroup"
    },
    {
        "_id": "fpe-5963cdfb-8401-5b90-8115-4c7624057733",
        "entityId": "2ftst48234234jf-ef",
        "meta": {},
        "name": "dev",
        "userIds": [],
        "sourceType": "serviceNow",
        "type": "usercriteria"
    }
]
```

## Get Permission Entity by ID

This API returns the details of the request permission entity. It lists the users associated with the permission entity. 


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
   <td>&lt;host_url>/api/public/bot/:botId/connector/:connectorId/permission-entities/:entityId
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
   <td>Permission Entity Management
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
   <td>Connector ID
   </td>
   <td>Unique ID of the connector for which permission entities are requested.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Entity Id
   </td>
   <td>Unique Id of the Permission Entity 
   </td>
   <td>Yes
   </td>
  </tr>
</table>

### Sample Response

```
{
    "_id": "fpe-82e99097-7532-506b-af42-363cbe5bb59c",
    "entityId": "john.doe@example.com",
    "meta": {},
    "name": "John",
    "userIds": [],
    "sourceType": "googleDrive",
    "type": "googleGroup"
}
```  

## Update Permission Entity by ID

This API is used to associate users to a Permission Entity. You can add new users to the entity using this API.


<table>
  <tr>
   <td>Method
   </td>
   <td>PUT
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td>&lt;host_url>/api/public/bot/:botId/connector/:connectorId/permission-entities/:entityId
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
   <td>Permission Entity Management
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
   <td>Stream ID
   </td>
   <td>Provide your application ID here. 
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Connector ID
   </td>
   <td>Unique ID of the connector for which permission entities is to be updated.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Entity Id
   </td>
   <td>Unique Id of the Permission Entity
   </td>
   <td>Yes
   </td>
  </tr>
</table>



### Sample Request Body

To associate a user with a permission entity, use the following as the request body. 

```
{
"userList":["john@example.com"]
}
```

## Delete Users from Permission Entity by ID

This API removes a user already associated with the permission entity. 


<table>
  <tr>
   <td>Method
   </td>
   <td>DELETE
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td>&lt;host_url>/api/public/bot/:botId/connector/:connectorId/permission-entities/:entityId
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
   <td>Permission Entity Management
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
   <td>Stream ID
   </td>
   <td>Provide your application ID here. 
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Connector ID
   </td>
   <td>Unique ID of the connector for which permission entities is to be updated.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Entity Id
   </td>
   <td>Unique ID of the Permission Entity 
   </td>
   <td>Yes
   </td>
  </tr>
</table>

### Sample Request Body

To delete a user from a permission entity, use the following as the request body. 

```
{
    "userList":["john@example.com"]
}
```

