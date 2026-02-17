# Dropbox Connector

If you are using Dropbox to store and manage your content, you can easily search through that content using the Dropbox connector provided by Search AI. 

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
   <td>Dropbox API v2
   </td>
  </tr>
  <tr>
   <td>Generative Model for Answers
   </td>
   <td>.doc, .docx, .ppt, .pptx, .pdf, .txt, .html 
   Note: Password-protected files in any format are not supported
   </td>
  </tr>
</table>

## Authorization Support 

Search AI supports **OAuth 2.0 Authorization Code Grant Type** mechanism for Dropbox. To configure the Dropbox Connector:

* Configure an application in your Dropbox account with appropriate permissions.
* Configure the Dropbox connector in the Search AI application.


## Step 1: Configure an application in the Dropbox Account

To create an application in the Dropbox account, sign in to the [Dropbox Developer Portal](https://www.dropbox.com/developers/apps). Create a new app. On the Create app widget, under Choose an API, select Scoped access and select the type of access you need. 

![alt_text](images/dropbox/create-app.png "Create App")


Provide a name for the application, review the terms and conditions, and click Create app. Next, configure the application and enable appropriate permissions. Go to the Permissions tab or click on  Scoped App. 

![App permissions](images/dropbox/app-permissions.png "App permissions")

Enable the following minimum permissions. 

* files.content.read
* sharing.read

![Permissions](images/dropbox/permissions-types.png "Permissions")


Set the Redirect URIs under the Settings tab to one of the following URLs depending upon your region or deployment.

* JP Region Callback URL: `https://jp-bots-idp.kore.ai/workflows/callback`
* DE Region Callback URL: `https://de-bots-idp.kore.ai/workflows/callback`
* Prod Callback URL: `https://idp.kore.com/workflows/callback`

![Redirect URL](images/dropbox/redirect-url.png "Redirect URI")


Save the **App key** and **App secret** displayed on this page. These credentials are required for the configuration of the Dropbox connector in the Search AI application. 

![App credentials](images/dropbox/app-credentials.png "App Credentials")

## Step 2: Configuring the Dropbox connector in the Search AI application

To complete the integration, log in to your Search AI application. Go to the **Connectors** under the **Sources** and select **Dropbox** connector. Provide the following config parameters on the **Authorization** tab and click **Connect**. 

* Name – Unique name for the connector 
* Authorization Type - Set to OAuth 2.0
* Grant Type - Set to Authorization Code.
* Client ID – App key from the Dropbox application settings.
* Client Secret – App secret from the Dropbox application settings.

After a successful connection, go to the **Configuration** tab and click **Sync Now**.
