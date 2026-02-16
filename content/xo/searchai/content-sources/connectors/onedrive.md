# OneDrive Connector

Configure the OneDrive connector if you're using OneDrive to manage your content and want to make your existing content searchable with SearchAI. Configuring OneDrive as a content source requires:

* **Registering a multi-tenant app in Azure Platform**
* **Configuration of the OneDrive connector in SearchAI**

<table>
  <tr>
   <td>
Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Extractive Model for Answer Generation
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Generative Model for Answer Generation
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Supported Content Type
   </td>
   <td>Extractive Answers - .pdf, pages/articles(.aspx), .html, .xhtml.
   Generative Answers - pages/articles (.aspx), .doc, .docx, .ppt, .pptx, .html, .xhtml, .txt, .pdf
   </td>
  </tr>
  <tr>
   <td>Access Control Support 
   </td>
   <td>Yes
   </td>
  </tr>
    <tr>
   <td>Automatic Permission Entities Resolution </td>
   <td>Yes </td>
  </tr>
</table>


## Authorization Support

Search AI uses **OAuth 2.0 Authorization Code Grant Type** mechanism for integration with OneDrive.

## Registering a multi-tenant app in Azure Portal

App registrations are required to access resources programmatically. Registering an app establishes trust between the SearchAI application and the Microsoft identity platform.

**Register an app in Azure**

1. Sign in to the [Azure Portal](https://portal.azure.com/#home) and go to *Azure Active Directory*.
1. Select *App Registrations* > *New Registration*.
1. Enter the app name.
1. Under *Supported account types*, select *Accounts in any organizational directory (multi-tenant)*.
1. Enter the Redirect URL. Use the appropriate URL for your region or deployment:
    * JP Region Callback URL: `https://jp-bots-idp.kore.ai/workflows/callback`
    * DE Region Callback URL: `https://de-bots-idp.kore.ai/workflows/callback`
    * Prod Callback URL: `https://idp.kore.com/workflows/callback`
1. Select *Register*.

The registration generates a **Client ID** and **Tenant ID**. Save both values from the Overview page.

**Create a client secret**

1. In the app, go to **Certificates & secrets**.
1. Select **New client secret**.
1. Enter a description, set the expiration to 24 months, and select **Add**.
1. Copy and save the client secret value. You cannot view it again after leaving the page.

**Configure API permissions**

1. Go to **API permissions** > **Add a permission**.
1. Select **Microsoft Graph** > **Delegated permissions**.
1. Add the following permissions:
    * `Files.Read`
    * `Files.Read.All`
    * `Offline_access`
1. Select **Grant admin consent** to apply the permissions.

Use the Client ID, Client secret, and Tenant ID generated above to configure the OneDrive connector in SearchAI.

For more information, see [how to register an app in Entra](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app).


## Configure the OneDrive connector

1. Go to the **Connectors** page and add **OneDrive connector**.  
2. On the **Authorization** page, set the authentication mechanism to **OAuth 2.0** and the grant type to **Authorization code**.  
3. Enter the **Client ID**, **Tenant ID**, and **Client secret** that you generated during app registration in the Azure portal.  
4. Select **Connect**.  

The connector is now authenticated and enables SearchAI to interact with OneDrive for content ingestion.

## Content Ingestion

Once the authorization process is complete and the connector is configured, the next step is to ingest content and make it searchable.

1. Go to the **Configuration** tab.  
2. Select **Sync now** to perform an immediate sync operation with OneDrive.  
3. (Optional) **Schedule a sync** to run at a future time.  

A sync operation ingests content from OneDrive. The content is chunked and indexed according to the configuration of the SearchAI application.

- During the first sync, all supported content is ingested.  
- During subsequent syncs, only updated content is ingested. The chunks corresponding to updated content are deleted and recreated.  

All supported files under **My files** and **Shared files** are ingested into SearchAI. Content inside folders is also ingested.  

![Drive Home](images/onedrive/onedrive.png "Drive Home")

The following screenshot shows content ingested after a sync operation through the OneDrive connector:  

![Content](images/onedrive/content.png "Content")


## Access Control

SearchAI supports access control for content ingested from OneDrive accounts.

To configure access control, go to the **Permissions and Security** tab in the OneDrive Connector and set the access as required.

OneDrive content access is determined by the permissions defined in the source system. SearchAI provides two options for managing access:

* **Permission Aware**: When this option is enabled, the connector retrieves the access information from OneDrive during ingestion. This information is stored in the `sys_racl` field of the ingested content. Each entry in the `sys_racl` field represents a permission entity.
SearchAI supports automatic resolution of these permission entities. It identifies the users who have access to the corresponding file or folder in OneDrive and automatically associates them with the correct permission entities in SearchAI.
    
* **Public Access**: When this option is selected, the `sys_racl` field is set to *. The ingested content becomes accessible to all SearchAI users, regardless of the permissions in OneDrive.

### Understanding Permissions in OneDrive

By default, when a file or folder is created in OneDrive, it is private, and only the **owner** of the file can access it. The files and folders can be shared with other team members using the Share option in OneDrive, which can be used to share it with one or more internal or external users or user groups.

![Access](images/onedrive/shareaccess.png "Access")

It can also be shared as a link as follows. 

![Access](images/onedrive/sharelink.png "Access")

### Handling Permissions in Search AI Connector

* The owner of the file is automatically added to the `sys_racl` field of the content. 
* The users to which the file is shared are also added directly to the `sys_racl` field of the content. 
* The user groups to which the file is shared are added as permission entities to the `sys_racl` field. Corresponding users( part of the user groups) must be added manually using the Permission Entity APIs. 
* If the link is shared to a domain, the users of the given domain are automatically identified using the domain name.

For instance, if Charles is the owner of a file and he shared it with a user group ‘[test@example.com]’ and an external user ‘[xyz@other-example.com], the `sys_racl` field would be like:


```
"sys_racl": [
    "E083437f-d330-4ad7-8a02-87018187be46", //permission entity id corresponding to the user group.
    "charles@example.com", //owner of the file
    "xyz@other-example.com"
]
```

If Charles also allowed all the employees of his organization to access the file, the `sys_racl` field would be as shown below. 

```json
"sys_racl": [
  "example.com",
  "e083437f-d330-4ad7-8a02-87018187be46",//permission entity id corresponding to the user group.
  "charles@example.com", //owner of the file
  "xyz@other-example.com"
]
```

