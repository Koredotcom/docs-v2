# Configuring the Confluence Action

The XO Platform lets you easily connect with your Confluence instance to create, and view pages or blogs on the Confluence space. [Learn more about Confluence](https://support.atlassian.com/confluence-cloud/resources/){:target="_blank"}.

This article explains how to authorize and enable the **Confluence** action and install the pre-built template.


## Authorizations Supported

The Kore.ai XO Platform supports OAuth v2.0 authentication to allow a Confluence integration to exchange data. For more information, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}. 

The Kore.ai XO Platform supports the following authorization types for the Confluence integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Confluence app to access an access token at runtime.

!!! note

    The Confluence integration can be authorized only for the Developer and the Enterprise editions. You cannot authorize Confluence’s Trial edition. To learn more about Confluence, see [Confluence documentation](https://support.atlassian.com/confluence-cloud/docs/configure-confluence-cloud/){:target="_blank"}.

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



## Step 1: Enable the Confluence Action

**Prerequisites**:

Before enabling the Confluence actions, complete the following prerequisites:

* Create a developer account in Atlassian and note down login credentials.
* Create an OAuth app in Atlassian and grant permission to write:confluence-content offline_access. See [Confluence Documentation](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/#overview){:target="_blank"} for more information
* Copy the Client ID, Client Secret Key, Authorization URL, and Callback URL and keep them ready to enable the Confluence integration.

**Steps to enable the Confluence action:**

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Confluence** action.  


### Pre-authorize the Integration

**OAuth**

You can authorize the integration using developer credentials. The developer authorization lets you authorize the integration with the preconfigured Kore.ai app or use the custom authorization profile to let a developer configure the integration.

Steps to authorize a Confluence action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Confluence** action.
2. In the **Configurations** dialog, select the **Authorization** tab.
3. Enter the following details:

    * **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **OAuth** option.  
    <img src="../images/confluence-action-img2.png" alt="Authorization Type-OAuth" title="Authorization Type-OAuth" style="border: 1px solid gray;zoom:50%;"/>  
          
        
    **System Authorization**

    Pre-authorize Confluence integration with the necessary authorization credentials to obtain the token to access external services.

      * Select the **System** card to enable Kore.ai’s preconfigured Confluence app and click **Authorize**.  
      <img src="../images/confluence-action-img3.png" alt="System card" title="System card" style="border: 1px solid gray;zoom:50%;"/>  
        
      * Once you click **Authorize**, you are redirected to [https://auth.atlassian.com/authorize](https://auth.atlassian.com/authorize){:target="_blank"}.
      * Enter your developer account credentials to connect with your Confluence Account successfully.
      * Click the **Allow Access** button to use Kore.ai’s app to fetch the access token to complete the authorization.

    
    **Custom Authorization**

    Create your custom authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Confluence app for authorization.

      * Select **Custom** to enable the custom authorization profile.
      * Click the **Select Authorization** drop-down and select the **Create New** option.  
      <img src="../images/confluence-action-img4.png" alt="Create new Custom authorization" title="Create new Custom authorization" style="border: 1px solid gray;zoom:50%;"/>

      * Select the type of authorization mechanism. For example, select the OAuth v2 option. To create custom OAuth profiles, read the [Setting Up Authorization Using OAuth v2](../../../dev-tools/bot-authorization/setting-up-authorization-using-oauth-v2.md){:target="_blank"} article.
      * Enter the following authentication credentials for the OAuth v2 mechanism:

          * Call back URL
          * Identity Provider Name
          * Client ID
          * Client Secret
          * Authorization URL
          * Token Request URL
          * Scope
          * Refresh Token URL  
      <img src="../images/confluence-action-img5.png" alt="Authorization credentials" title="Authorization credentials" style="border: 1px solid gray;zoom:50%;"/>

      * Click **Save Auth** to save Authorization Profile.Select the new **Authorization Profile** you created to enable integration.  
      <img src="../images/confluence-action-img6.png" alt="Save auth" title="Save auth" style="border: 1px solid gray;zoom:50%;"/>

4. Once you click **Authorize**, you are redirected to [https://auth.atlassian.com/authorize](https://auth.atlassian.com/authorize){:target="_blank"}.
5. Enter login credentials to connect with your Confluence Account successfully.
6. Click the **Allow Access** button if prompted to let your custom app fetch the access token to complete the authorization.
7. Once the authorization is successful, you will see a success message.
8. Click **Save**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/confluence-action-img7.png" alt="Save authorization" title="Save authorization" style="border: 1px solid gray;zoom:50%;"/>

    !!! note

        The Confluence action is moved from _Available_ to _Configured_ region.

9. You can also click the **Skip for Now** button to install the Dialog Task templates later. To learn how to use action templates, read the [Using the Confluence Action Templates](configuring-the-confluence-action.md){:target="_blank"} article.


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Confluence app to access an access token at runtime. You can also use the custom authorization profile to fetch the access token based on user credentials.

Steps to authorize a Confluence action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Confluence** action.
2. In the Configurations dialog, select the **Authorization** tab.
3. Enter the following details:
    * **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **OAuth** option.  
    <img src="../images/confluence-action-img8.png" alt="Allow Users to Authorize the Integration-OAuth" title="Allow Users to Authorize the Integration-OAuth" style="border: 1px solid gray;zoom:50%;"/>


    **System Authorization**

    The end user has to provide credentials during the conversation to authorize users for Confluence integration to obtain the access token.
    
    * Select the **System** card to enable Kore.ai’s preconfigured Confluence app.
    * Once you click the **Enable** button, a link is sent to the end user to authorize the integration.
    * Click the link and enter the login credentials to allow the user to authorize the integration.

    **Custom Authorization**

    Create your custom authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Confluence app for authorization.

    * Select Custom to **enable** the custom authorization profile.
    * Click the **Select Authorization** drop-down and select the **Create New** option. Follow the instructions in the **Custom Authorization** section.
    * You can also select an existing authorization profile as shown below:  
    <img src="../images/confluence-action-img9.png" alt="Select existing authorization profile" title="Select existing authorization profile" style="border: 1px solid gray;zoom:50%;"/>

    * Click the **Enable** button. The users will see the authorize option during the runtime.


## Step 2: Install the Confluence Action Templates

Once you have configured a Confluence integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/confluence-action-img10.png" alt="Explore Templates" title="Explore Templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button for a template to begin the installation.  
<img src="../images/confluence-action-img11.png" alt="Begin template installation" title="Begin template installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, the associated dialog task is auto-created and displayed on the Dialogs page. Click **Go to Dialog** or go to **Automation AI** > **Use Cases** > **Dialogs**.

4. To start using the templates, see [Using Confluence Templates.](using-the-confluence-action-templates.md){:target="_blank"}