# Airtable Connector

Airtable combines the functionality of a spreadsheet and a database, making it a powerful tool for organizing and managing structured data. Using the Airtable connector, you can easily ingest data from Airtable into your SearchAI application and make it searchable. 

<span style="text-decoration:underline;">Specifications</span>


<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Supported Content Type
   </td>
   <td>Tables
   </td>
  </tr>
  <tr>
   <td>Content Filtering Support
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>RACL Support 
   </td>
   <td>Yes
   </td>
  </tr>
</table>



## Authorization Support

SearchAI supports authentication using **personal access tokens** and **OAuth access tokens** for integration with Airtable. 


## Airtable Configuration 

To enable communication between Airtable and SearchAI, generate the access tokens required for authentication. 

**Personal Access Token**

If you are using personal access tokens, log in to the [Builder Hub](https://airtable.com/create/tokens) of your Airtable setup and 

[create a new PAT](https://support.airtable.com/docs/creating-personal-access-tokens). Add the following scopes to the PAT. 

* data.records:read
* data.recordComments:read
* schema.bases:read

**OAuth 2.0** 

If you are using OAuth 2.0 for authentication, 

1. [Register a new integration](https://airtable.com/create/oauth) for SearchAI.   
1. Set OAuth Redirect URL to one of the following, depending on your region or deployment. 
    * JP Region Callback URL: [https://jp-bots-idp.kore.ai/workflows/callback](https://jp-bots-idp.kore.ai/workflows/callback)
    * DE Region Callback URL: [https://de-bots-idp.kore.ai/workflows/callback](https://de-bots-idp.kore.ai/workflows/callback)
    * Prod Callback URL: [https://idp.kore.com/workflows/callback](https://idp.kore.com/workflows/callback)
1. When client ID is generated, click on Generate Client Secret. 
1. Enable the following permissions. 
    * data.records:read
    * data.recordComments:read
    * schema.bases:read

Refer to[ this](https://airtable.com/developers/web/guides/oauth-integrations) for step-by-step instructions on how to register. This registration will generate a client id and client secret. Copy the same for configuring the Airtable connector in Search AI. 


## Airtable Connector Configuration in Search AI

Provide the following fields while configuring the Airtable connector in Search AI. 

**Name**: Unique name for the connector

**Authorization Type**: Select Personal Access Token or OAuth 2.0 as required. Refer to the above section to learn more about how to generate the authentication information for both of these types. 

* If PAT is selected as the auth type, provide the **personal access token.** 
* If OAuth 2.0 is selected as the auth type, provide the **client ID and the client secret**. 

There are some other optional fields that are used to map the Airtable content to the ingested content. Currently, Search AI supports only the standard fields. Hence, it is not mandatory to provide the other fields. 

## RACL Support

For all the content ingested from Airtable, the access is controlled by the **tableId** field of the table to which the content belongs. This field is available in the `sys_racl` field as a permission entity. Use the permission entity APIs to associate users to this permission entity so that they can access the related content. 
