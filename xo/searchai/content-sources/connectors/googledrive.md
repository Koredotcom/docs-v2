# Google Drive Cloud Storage Connector

By setting up the Google Drive connector in Search AI, you can extend the search capabilities to your Google Drive cloud storage-managed content and provide a seamless experience.

<span style="text-decoration:underline;">Specifications</span>


<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Supported API version
   </td>
   <td>Google Drive API v3
   </td>
  </tr>
  <tr>
   <td>File type Support
   </td>
   <td>.doc, .docx, .ppt, .pptx, .pdf, .txt, .html 
    <p> Note: Password-protected files aren't supported.
   </td>
  </tr>
    <tr>
   <td>RACL Support </td>
   <td>Yes </td>
  </tr>
   <tr>
   <td>Automatic Permission Entities Resolution </td>
   <td>Yes </td>
  </tr>
</table>


Integrating Google Drive as a content source involves:

* Setting up and enabling access to the Google Drive Cloud storage
* Configuring the Google Drive connector in SearchAI


## Step 1: Setting up and enabling access to the Google Drive Cloud storage

Follow the steps listed below to set up and enable access to the content on your Google Drive Cloud storage to the Search AI application. 

1. Login to your[ Google developer console](https://console.cloud.google.com/) and [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project). If you are using an existing project, skip this step.
2. [Find Google Drive API and enable it](https://developers.google.com/workspace/guides/enable-apis) in your Google Cloud project.
3. To enable OAuth 2.0 authentication, [configure OAuth consent](https://developers.google.com/workspace/guides/configure-oauth-consent).
4. In the Google Cloud console, go to Menu > Google Auth platform > Branding. Provide the name of the application, email address, app logo, and developer per contact information.
5. Add the Search AI domain to the Authorized domains. 
6. Set up permissions for the application. Under Data Access, click on _Add or remove scopes_. Select the following scopes for Google Drive API and click on _Update_ at the bottom of the page.
    * …/auth/drive.file
    * …/auth/drive.appdata
    * …/auth/drive 
7. Go to Audience page and set the user type for the application as external. 
8. While you are still in development or testing mode, you can set the publishing status of the application to Testing. In testing mode, only the users added can access the application while in production mode, the application is available publicly to everyone with a Google account. 
![Publishing Status](images/googledrive/publishing-status.png "Publishing Status")
If the publishing status is set to Testing, you can add your test users by clicking on _ADD USERS_ on the same page. 
![Add Users](images/googledrive/add-users.png "Add Users")
9. Navigate to Clients page and create a new client. Enter the _Application type_ as _Web Application_ and give it a name. Add the URL of your  Search AI deployment as _Authorized redirect URIs_ and click _CREATE_. You can use one of the following URLs as per your region.
    * JP Region Callback URL: `https://jp-bots-idp.kore.ai/workflows/callback`
    * DE Region Callback URL: `https://de-bots-idp.kore.ai/workflows/callback`
    * Prod Region Callback URL: `https://idp.kore.com/workflows/callback`
10. This will generate the client ID. Download your credentials. The downloaded file is in JSON format and has *client id and client secret* amongst other fields. 

## Step 2: Configuring the Google Drive connector in SearchAI

1. To configure the Google Drive connector, go to the Connectors under Sources and select Google Drive.
2. Configure the authorization parameters for the connector and click Connect.
    * Name- Unique name for the connector.
    * Authorization Type - Search AI supports *OAuth 2.0 for Google Drive.* Set this field accordingly.
    * Grant Type - Method of obtaining access token in OAuth 2.0 authentication. SearchAI supports Authorization Code Grant Type for Google Drive. Refer to [this for more information on Grant types](../connectors.md).
    * Client ID - The client ID generated after registering SearchAI for OAuth authentication.
    * Client Secret - The secret generated after registering SearchAI for OAuth authentication.  
3. Once the connection is successfully established, to synchronize the content at any time, go to the *Configurations* tab and click *Sync Now.* Go to the *Content* tab to view the content ingested into the application. 

![Content](images/googledrive/content-tab.png "Content")

### Content Ingestion 

After successfully connecting to Google Drive, the next step is to do the Synchronization configuration. This allows the connector to know what content is to be ingested from the drive. To do so, go to the *Configurations* tab and do the following configurations. 

* **Schedule Sync**- Enable this option if you want to set up a scheduler to automatically sync content with Google Drive at regular intervals. When enabled, set the time and frequency of the sync operation. The sync job runs at scheduled intervals in the background and ingests any updated content from the application. 

* **Synchronization** - This field allows you to select the content to be ingested from the drive. You can choose to:
    1. Sync All Content - This option ingests all the data from Google Drive. 
    2. Sync Specific Content - This option allows you to select the content to be ingested into the SearchAI application. Click on the *Configure* option. The following widget allows you to set up rules for filtering content. Set up rules and click *Save and Test*.

![Configuration](images/googledrive/config-tab.png "Configuration")

### Content Filtering Rules

Each rule gives you the option to choose the location on the drive from where the content is to be ingested. It can take the following values:

* **User Drive** includes only the locations owned by the account for which the Google Drive connector is configured. 
* **Shared Drive** includes only the locations shared with the account for which the Google Drive connector is configured. 
* **All Drives** include all the locations from the user drive as well as the shared drive. 
* **User Domain** 

Next, define conditions to choose the content from the selected location. To define a condition, specify a parameter, operator, and the value for the parameter. For example, if you want to ingest all the files in a given folder set up a filter as shown below:

![Example](images/googledrive/example1.png "Example")

You can define conditions based on the following parameters or add your parameters too. Refer to [this](https://developers.google.com/drive/api/guides/ref-search-terms) for more information on the query parameters and the values that the parameters can take. 

* **Folder Id** - Ingest data specifically from one or more folders. Provide the folder IDs as value. To find the folder ID, navigate to your folder in Google Drive, the unique ID that comes after “folder/” in the URL is the folder ID. For example, if the URL is `https://drive.google.com/drive/folders/1dyUEebJaFnWa3Z4nXXXXAXQ7mfUH11g`, then the Folder ID is `1dyUEebJaFnWa3Z4nXXXXAXQ7mfUH11g`.

* **Mime Type** - Ingest a specific type of data. For example, use ‘application/pdf’ to ingest only pdf files from the drive. Supported MIME types include:
    * application/msword
    * application/pdf
    * text/plain
    * application/vnd.google-apps.document
    * application/vnd.google-apps.presentation

* **File Name** - Ingest files with given file names. 

**Points to note**

* You can have any number of rules in a filter. For example, to include all the files from a specific folder and all the files with a keyword in the filename, you can set up a filter as:

![Example](images/googledrive/example2.png "Example")

* You can define more than one condition to a rule to filter specific content. For example, to ingest only PDF files from a given folder, you can set up a filter as:

![Example](images/googledrive/example3.png "Example")

## **Access Control**

RACL is a method of controlling access to specific resources or information based on the roles of individual users within the organization. Refer to this to learn more about how SearchAI handles access control. 

Google Drive Connector allows you to import user permissions and access lists from the GDrive repository along with the content and other metadata for the content and present the answers according to the users’ access rights. For instance, you will only see answers generated from a Google Drive file if you can access that file.


### **Handling Google Drive File Permissions**

SearchAI application supports **file-level** permissions through Google Drive Connector. Search AI supports the following access types in GDrive. 

* **People with access**: SearchAI reads user information for the files and allows users to view them if they have permission to do so. Any user with view or read access to a file can access generated answers.

For instance, if two users have read access to a file, corresponding indexed content will have the user information as shown below.

![People With Access](images/googledrive/racl/example1.png "Example")

Similarly, if the files are accessible to a user and a user group in Google Drive, the corresponding content will have the information as shown below, where [hr-team@example.com](mailto:hr-team@example.com) is the permission entity created corresponding to the group.  

![User Groups](images/googledrive/racl/example2.png "User Groups")

* **Anyone with Link**: This is treated as public access. All the users can access a file with this type of access permission.  

![Anyone with Link](images/googledrive/racl/example3.png "Anyone with Link")

* **Domain Specific Access**: SearchAI supports this type of access and verifies the user identity against the specified domain name.

![Domain level Access](images/googledrive/racl/example4.png "Domain Level Access")


### **Handling User Groups or Domain level access in Google Drive**

When a file access is given to a user group or a domain, the group name or domain name is stored as a Permission Entity in Search AI. In this case, Search AI requires additional information to identify and resolve user identities. You need to associate individual users within the group or the domain to the Permission Entity to enable those users access to the file. 

To correctly associate users with the relevant permission entity, use the Permission Entity APIs.

Example: Suppose a file is shared with a user group, `hr-domain@example.com`. This group is stored as a permission entity within Search AI. If the HR team consists of five members who need access to this file, you should use the[ Permission Entity API](../../../apis/searchai/permission-entity-apis.md) to add the user IDs of these five team members to the corresponding permission entity.


### **Enabling RACL**

You can enable or disable RACL for any content ingested from Google Drive using the following options under the **Permissions and Security** tab. 

* **Permission Aware**: This option maintains the default permissions for users associated with the content in Google Drive. 
* **Public Access**: This option overrides the permissions associated with the content in Google Drive and allows all users to access the content. 

You can configure this while connecting to Google Drive for the first time. To update the permissions at any time, go to the Permissions & Security tab and modify them. The updated permissions apply to the content ingested during the next sync activity. 

![Permissions Config](images/googledrive/racl/permissions.png "RACL Enable")


