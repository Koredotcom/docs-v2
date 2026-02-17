--8<-- "includes/searchai-api-back-link.md"

# RACL Resolver APIs

When Access Control is enabled for content ingested from a specific connector, SearchAI requires user identity information to be included in the Search API request. This identity data is used to determine the user's access rights and ensure the appropriate content is returned. The RACL Resolver APIs manage the fields that handle the transmission of identity information within the Search API, ensuring secure and accurate access resolution.

## Get RACL Resolver

This API returns the fields that are used for mapping the identity information in the Search API (advancedSearch). 

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
   <td>&lt;host_url>/api/public/bot/:botId/racl-resolver
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

* Bot ID: Provide your application ID here. 

## Update RACL Resolver

This API is used to update the field used to pass user identity information in the Search API. 

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
   <td>&lt;host_url>/api/public/bot/:botId/racl-resolver
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

* Bot ID: Provide your application ID here. 


### Request Parameters

* source: this field can take one of the following values.
    * body - when the user identity is passed to the API using a field in the request body of the search API. 
    * header - when the user identity is passed to the API using a field in the request header of the search API. 
* userMapping - field name that is used to pass the identity information. 


### Sample Request Payload

Below is a sample request object that indicates that the user identity is passed using a field name "customData.userIdentity" in the request body of the Search API. 
```
{

    "source":"body",
    "userMapping": "customData.userIdentity"
}
```

## Delete RACL Resolver

This API is used to delete the racl resolver fields. 


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
   <td>&lt;host_url>/api/public/bot/:botId/racl-resolver
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

* Bot ID: Provide your application ID here. 