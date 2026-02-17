# Egnyte Connector 

Egnyte is a versatile content collaboration and data management platform designed to streamline file sharing, enhance team collaboration, and ensure data governance. You can use the Search AI connector for Egnyte to ingest and index content from your Egnyte account, enabling efficient and seamless search capabilities across your shared resources in Egnyte.

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
   <td>Files in the formats .doc, .docx, .ppt, .pptx, .pdf, .txt
   </td>
  </tr>
  <tr>
   <td>RACL Support
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Content Filtering
   </td>
   <td>No
   </td>
  </tr>
</table>


To enable integration between Search AI and Egnyte ,

* Register the Search AI app as an OAuth client of the Egnyte account and generate client credentials. 
* Configure the Egnyte Connector in Search AI


## Register Search AI as OAuth client in Egnyte

1. Go to the [Egnyte Developer Portal](https://developers.egnyte.com/).
2. [Register](https://developers.egnyte.com/member/register) a new client app to enable communication between the Egnyte account and the Search AI connector. Enter the basic details of the app. 
    1. Set the platform as a Web App and Type as a Publicly Available Application. 
    2. Use one of the following as the Registered OAuth Redirect URI. 
        * JP Region Callback URL: `https://jp-bots-idp.kore.ai/workflows/callback`
        * DE Region Callback URL: `https://de-bots-idp.kore.ai/workflows/callback`
        * Prod Callback URL: `https://idp.kore.com/workflows/callback`
3. Ensure that a key is generated for Connect API. 
4. Click *Register* to generate the key and secret. 


## Configure Egnyte Connector in Search AI

Go to the *Authorization page* of the connector, enter the following configuration fields, and click **Connect**. 

* *Name*- Unique name for the connector.
* *Authorization Type*- Set this to OAuth 2.0.
* *Grant Type* - Only the Authorization Code grant type is supported. 
* *Client ID* - Provide the key generated above.
* *Client Secret* - Provide the secret generated above.
* *Host URL* - Provide the domain URL from which the content will be ingested, such as `https://domain.egnyte.com`.

Click **Connect**. This initiates the authentication process and requests for user login and consent to confirm the connection. 


## Ingesting Content

After successfully connecting the Search AI connector to the Egnyte account, go to the **Configuration** tab and set up content synchronization. For immediate sync, use the **Sync Now** option and the **Schedule Sync** option to set up a scheduler to sync the content in the future. 

Upon sync, Search AI ingests **files** from the **Egnyte account** into the Search AI application. 

Files from all the shared folders are ingested into the application, but files from the private folder in the account are not ingested. The folder information of a file is available as a meta field. 


## RACL Support

Search AI currently supports permissions at the folder level only. This means any user or group with access to a folder can access all files within that folder. File-level permissions and file sharing through links are not yet supported. 

In cases of nested folders, the permissions for a file are inherited from the immediate parent folder. These permissions are reflected in the `sys_racl` field in Search AI.

* **Individual Users**: For users with folder access, the `sys_racl` field for files in the folder includes their email addresses.
* **User Groups**: For groups granted folder access, the `sys_racl` field contains the group ID.
* **Administrators**: Administrators always have access to all files by default, and their permissions are explicitly listed in the `sys_racl` field.

For instance, if a folder can be accessed by a specific user and a specific user group, the `sys_racl` field in the files within the folder will be something like this. 

```
"sys_racl": [
         "john.smith@example.com",
	   "b141b80a-7406-4c85-1e9435e699",
         "admin-group"
        ]
```

