# **Aha! Connector**

<span style="text-decoration:underline;">Specifications</span>


<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Content Supported
   </td>
   <td>Ideas, Features
   </td>
  </tr>
  <tr>
   <td>RACL Support
   </td>
   <td>Yes
   </td>
  </tr>
    <tr>
   <td>Automatic Permission Entities Resolution </td>
   <td>Yes </td>
  </tr>
  <tr>
   <td>Content Filtering
   </td>
   <td>No
   </td>
  </tr>
</table>



## Authorization Support

Aha connector interacts with Aha! via the REST APIs. To enable this communication, two types of authentication is supported:

1. Using API Key
2. OAuth Authentication 

## Generate API Key 

1. Sign in to Aha!
1. Access the **Settings** icon on the top right and click **Personal**. 
1. Go to the **Developer** page. 
1. On the **API Key** tab, click **Generate API Key**. Provide a name for the key. Save the generated key to configure the connector in Search AI. 

## Generate OAuth Credentials 

1. Sign in to Aha!
1. Access the **Settings** icon on the top right and click **Personal**. 
1. Go to the **Developer** page.
1. Go to the **OAuth Applications** tab and click on **Register OAuth application**. 
1. Enter the name for the oauth app and enter the Redirect URI. The Redirect URI should be one of the following based on your region or deployment. 
    * JP Region Callback URL:  [https://jp-bots-idp.kore.ai/workflows/callback](https://jp-bots-idp.kore.ai/workflows/callback)
    * DE Region Callback URL: [https://de-bots-idp.kore.ai/workflows/callback](https://de-bots-idp.kore.ai/workflows/callback)
    * Prod Callback URL: [https://idp.kore.com/workflows/callback](https://idp.kore.com/workflows/callback)
This generates the client credentials. Save them to configure the Search AI connector. 


## Configure Aha Connector in Search AI

Go to the **Authorization page** of the Aha! Connector, enter the following configuration fields and select **Connect**. 

* **Name** - Unique name for the connector.
* **Authorization Type** - Select your preferred Authorization Type. 
    * If **API Key** is selected as the auth type, provide the API Key generated in the Aha application. 
    * If Authorization Type is set to **OAuth**, set Grant Type to Authorization Code and then provide your client credentials generated in the Aha application. 


## Ingesting Content

Once the authorization process is complete and the connector is configured, the next step is to ingest content and make it searchable.

1. Go to the **Configuration** tab.  
2. Select **Sync now** to perform an immediate sync operation with OneDrive.  
3. (Optional) **Schedule a sync** to run at a future time.  

Upon sync, Search AI ingests details from the **Ideas** and the **Features** in the Aha! application. 

The **type** field in the ingested content indicates whether the data is related to an idea or a feature.


## RACL Support

In Aha, **Features** are accessible to all workspace and project users.
When a feature is ingested into SearchAI, the `sys_racl` field is populated with the **Project ID** of the project the feature belongs to.

SearchAI supports automatic resolution of permission entities for Aha features. It identifies the users who have access to the project and automatically associates them with the corresponding Project ID permission entity in SearchAI.

**Access Control for Ideas**

In Aha, ideas can belong to a project in a workspace, or to both a project in the workspace and an idea portal. The **Visibility for Ideas in Portal** determines how access is managed.

* **Not visible**: The idea is visible only to project users.`sys_racl` is set to the **Project ID**.

* **Visible to creator**: The idea is visible only to the creator in the portal, but it remains visible to all workspace members. `sys_racl` is set to the Project ID and the creator email ID.

* **Visible to all**: The idea is visible to everyone. `sys_racl` is set to *.

* **Visible to employees**: The idea is accessible to both project users and idea portal users.
`sys_racl` contains the **ProjectID** and the **ideaPortalID**.

* **Private idea portal**: If the idea portal is **Private**, the idea is visible to workspace members and to users added to the portal. `sys_racl` is set to the **ProjectID** and the **ideaPortalID**.
