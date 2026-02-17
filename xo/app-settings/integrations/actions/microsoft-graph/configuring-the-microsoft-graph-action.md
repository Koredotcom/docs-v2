# Configuring the Microsoft Graph Action

You can use Microsoft Graph to create, view, and update events and to-do lists, and send emails to users. Click the [Microsoft Graph](https://azure.microsoft.com/en-us/get-started/azure-portal){:target="_blank"} link to learn more. .

This article explains how to enable, authorize, configure, and install the Microsoft Graph pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports basic authentication to allow a Microsoft Graph integration to exchange data. For more information, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}. 
The Kore.ai XO Platform supports the following authorization types for the Microsoft Graph integration:

* **Pre-Authorize the Integration**: To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token..
* **Allow Users to Authorize the Integration**: This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Microsoft Graph app to access an access token at runtime.

!!! note

    The Microsoft Graph integration can be authorized only for the Developer and the Enterprise editions. You cannot authorize Microsoft Graph’s Trial edition. To learn more about Microsoft Graph account types, see [Microsoft Graph documentation](https://developer.microsoft.com/en-us/graph/graph-explorer){:target="_blank"}.

<table border="1">
  <tr>
   <td>
<strong>Authorization Type</strong>
   </td>
   <td><strong>Basic OAuth</strong>
   </td>
  </tr>
  <tr>
   <td>Pre-authorize the Integration
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Allow Users to Authorize the Integration
   </td>
   <td>Yes
   </td>
  </tr>
</table>



## Step 1: Enable the Microsoft Graph Action

**Prerequisites**:

Before enabling the Microsoft Graph actions, complete the following prerequisites:

* Create a developer account in Microsoft Graph and note down login credentials. Use the [Microsoft Graph Documentation](https://developer.microsoft.com/en-us/graph/graph-explorer){:target="_blank"} for more information.
* Copy the Client ID, Client Secret Key, Authorization URL, and Call back URL and keep them ready to enable the Microsoft Graph integration.

Steps to enable the Microsoft Graph action:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. In the **Available** region, select the **Microsoft Graph** action.  



### Pre-authorize the Integration

**OAuth**

You can authorize the integration using developer credentials. The developer authorization lets you authorize the integration with the preconfigured Kore.ai’s app or use the custom authorization profile to allow a developer to configure the integration.

Steps to authorize a Microsoft Graph action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Microsoft Graph** action.
2. In the **Configurations** dialog, select the **Authorization** tab.
3. **Authorization Type**: Select the **Pre-authorize the Integration** option, and then select the **OAuth** option.  
<img src="../images/ms-graph-action-img2.png" alt="Authorization type-OAuth" title="Authorization type-OAuth" style="border: 1px solid gray;zoom:50%;"/>

    **System Authorization**

    Pre-authorize Microsoft Graph integration with the necessary authorization credentials to obtain the token to access external services.

    * Select the **System** card to enable the Kore.ai’s preconfigured Microsoft Graph app and click **Authorize**.  
    <img src="../images/ms-graph-action-img3.png" alt="Enable the Kore.ai’s preconfigured Microsoft Graph app" title="Enable the Kore.ai’s preconfigured Microsoft Graph app" style="border: 1px solid gray;zoom:50%;"/>  

    * Once you click **Authorize**, you are redirected to [https://login.microsoftonline.com/](https://login.microsoftonline.com/){:target="_blank"}.
    * Enter your developer account credentials to successfully connect with your Microsoft Graph Account.
    * Click the **Allow Access** button to use Kore.ai’s app to fetch the access token to complete the authorization.


    **Custom Authorization**

    Create your custom authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Microsoft Graph app for authorization.

    * Select **Custom** to enable the custom authorization profile.
    * Click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/ms-graph-action-img4.png" alt="Create new authorization" title="Create new authorization" style="border: 1px solid gray;zoom:50%;"/>

    * Select the type of authorization mechanism. For example, select the OAuth v2 option. To create custom OAuth profiles, read the [Setting Up Authorization Using OAuth v2](../../../dev-tools/bot-authorization/setting-up-authorization-using-oauth-v2.md){:target="_blank"} article.  
    <img src="../images/ms-graph-action-img5.png" alt="Auth mechanism type" title="Auth mechanism type" style="border: 1px solid gray;zoom:50%;"/>

    * Enter the following authentication credentials for the OAuth v2 mechanism:
        * **Call back URL**: The call back URL of the Kore.ai XO Platform.
        * **Identity Provider Name**: The name of your custom authorization profile.
        * **Client ID**: The client ID of the Microsoft App that you created in the Azure Portal.
        * **Client Secret Key**: The client secret value of the Microsoft App that you can generate in the Azure portal.
        * **Authorization URL**: The authorization URL of the Microsoft Azure Portal.
        * **Token Request URL**: The token request URL of the Microsoft Azure Portal.
        * **Scope**: You must enter this scope value:
            ```
            email Mail.ReadWrite Mail.Send offline_access openid profile User.Read Tasks.ReadWrite Calendars.ReadWrite MailboxSettings.Read
            ```
        
        * **Refresh Token URL**: The refresh token URL of the Microsoft Azure Portal.  

          To register an Azure App, read the [Adding the Microsoft Teams Channel](../../../../channels/add-microsoft-teams-channel.md{:target="_blank"} article.

        <img src="../images/ms-graph-action-img6.png" alt="Auth credentials" title="Auth credentials" style="border: 1px solid gray;zoom:50%;"/>

4. Click **Save Auth** to save Authorization Profile.
5. Select the new **Authorization Profile**, which you created to enable integration.  
<img src="../images/ms-graph-action-img7.png" alt="Select auth profile to enable integration" title="Select auth profile to enable integration" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click Authorize, you are redirected to [https://login.microsoftonline.com/](https://login.microsoftonline.com/){:target="_blank"}.
7. Enter login credentials to connect with your Microsoft Graph Account.
8. Click the **Allow Access** button if prompted to let your custom app fetch the access token to complete the authorization.
9. Once the authorization is successful, you will see a success message.
10. Click **Enable**. When you configure the action for the first time, the **Integration Successful** pop-up is displayed.  
<img src="../images/ms-graph-action-img8.png" alt="Integration enabled" title="Integration enabled" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    The Microsoft Graph action is moved from _Available_ to _Configured_ region.


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Microsoft Graph app to access an access token at runtime. You can also use the custom authorization profile to fetch the access token based on user credentials.

Steps to authorize a Microsoft Graph action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions**, and select the **Microsoft Graph** action.
2. In the Configurations dialog, select the **Authorization** tab.
3. **Authorization Type**: Select the **Allow Users to Authorize the Integration** option, and then select **OAuth** option.  
<img src="../images/ms-graph-action-img9.png" alt="Auth type - OAuth" title="Auth type - OAuth" style="border: 1px solid gray;zoom:50%;"/>

    **System Authorization**

    The end user has to provide credentials during the conversation to authorize users for Microsoft Graph integration to obtain the access token.

    * Select the **System** card to enable the Kore.ai’s preconfigured Microsoft Graph app.  
    <img src="../images/ms-graph-action-img10.png" alt="Enable the Kore.ai’s preconfigured Microsoft Graph" title="Enable the Kore.ai’s preconfigured Microsoft Graph" style="border: 1px solid gray;zoom:50%;"/>

    * Once you click the **Enable** button, a link is sent to the end user to authorize the integration.
    * Click the link and enter the login credentials to allow the user to authorize the integration

    **Custom Authorization**

    Create your custom authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Microsoft Graph app for authorization.
    
    * Select **Custom** to enable the custom authorization profile.
    * Click the **Select Authorization** drop-down and select the **Create New** option. Follow the instructions in the **Custom Authorization** section.
    * You can also select an existing authorization profile as shown below:  
    <img src="../images/ms-graph-action-img11.png" alt="Existing auth profile" title="Existing auth profile" style="border: 1px solid gray;zoom:50%;"/>

    * Click the **Enable** button. The users will see the authorize option during the runtime.


## Step 2: Install the Microsoft Graph Action Templates

Once you have configured a Microsoft Graph Integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/ms-graph-action-img12.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/ms-graph-action-img13.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. Once all templates are installed, a dialog task for each template is auto-created.  
<img src="../images/ms-graph-action-img14.png" alt="Dialog task for each template" title="Dialog task for each template" style="border: 1px solid gray;zoom:50%;"/>

5. Select the desired dialog task from the templates and click **Proceed**. For example, select the List All Events task.  
<img src="../images/ms-graph-action-img15.png" alt="Select desired dialog task" title="Select desired dialog task" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click Proceed, the dialog task is auto-created, and the canvas opens with all required entity nodes, service nodes, and message scripts.  
<img src="../images/ms-graph-action-img16.png" alt="Canvas" title="Canvas" style="border: 1px solid gray;zoom:50%;"/>
