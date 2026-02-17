# Configuring the JIRA Action

The XO Platform lets you easily connect the JIRA integration to create, view, update and delete issues. Click the [JIRA](https://www.atlassian.com/software/jira){:target="_blank"} link to learn more.

This article explains how to authorize and enable the **JIRA** action and install the pre-built templates.

## Authorizations Supported

The Kore.ai XO Platform supports basic authentication to allow a JIRA integration to exchange data. For more information, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}. 

The Kore.ai XO Platform supports the following authorization types for the JIRA integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s JIRA app to access an access token at runtime.

!!! note

    The JIRA integration can be authorized only for the Developer and the Enterprise editions. You cannot authorize JIRA’s Trial edition. To learn more about JIRA account types, see [JIRA documentation](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/#overview){:target="_blank"}.

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


## Step 1: Enable the JIRA Action

**Prerequisites**:

Before enabling the JIRA actions, complete the following prerequisites:

* Create a [developer account](https://developer.atlassian.com/){:target="_blank"} in JIRA and note down login credentials. Use the [JIRA Help Center](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/#overview){:target="_blank"} for more information.
* Copy the Client ID, Client Secret Key, Authorization URL, and Call back URL and keep them ready to enable the JIRA integration.

Steps to enable the JIRA action:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Once you click the **Actions** menu, all integrations are shown in the **Available** region. Select the **JIRA** action.  


### Pre-authorize the Integration

**OAuth**

You can authorize the integration using developer credentials. The developer authorization lets you authorize the integration with the preconfigured Kore.ai’s app or use the custom authorization profile to let a developer configure the integration.

Steps to authorize a JIRA action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **JIRA** action.
2. In the **Configurations** dialog, select the **Authorization** tab.
3. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **OAuth** option.  
<img src="../images/jira-action-img2.png" alt="Authorization Type-OAuth" title="Authorization Type-OAuth" style="border: 1px solid gray;zoom:50%;"/>

    **System Authorization**
    
    Pre-authorize JIRA integration with the necessary authorization credentials to obtain the token to access external services.
    
      * Select the **System** card to enable the Kore.ai’s preconfigured JIRA app and click **Authorize**.  
      <img src="../images/jira-action-img3.png" alt="System card" title="System card" style="border: 1px solid gray;zoom:50%;"/>

      * Once you click **Authorize**, you are redirected to [https://developer.atlassian.com/console/](https://developer.atlassian.com/console/){:target="_blank"}.
      * Enter your developer account credentials to connect with your JIRA Account successfully.
      * Click the **Allow Access** button to use Kore.ai’s app to fetch the access token to complete the authorization.

    **Custom Authorization**

    Create your custom authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s JIRA app for authorization.

      * Select **Custom** to enable the custom authorization profile.
      * Click the **Select Authorization** drop-down and select the **Create New** option.  
      <img src="../images/jira-action-img4.png" alt="Create new auth" title="Create new auth" style="border: 1px solid gray;zoom:50%;"/>

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

        <img src="../images/jira-action-img5.png" alt="Authorization credentials" title="Authorization credentials" style="border: 1px solid gray;zoom:50%;"/> 

4. Click **Save Auth** to save Authorization Profile.
5. Select the new **Authorization Profile**, which you created to enable integration.  
<img src="../images/jira-action-img6.png" alt="Authorization profile" title="Authorization profile" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click **Authorize**, you are redirected to [https://developer.atlassian.com/console/](https://developer.atlassian.com/console/){:target="_blank"}.
7. Enter login credentials to connect with your JIRA Account successfully.
8. Click the **Allow Access** button if prompted to let your custom app fetch the access token to complete the authorization.
9. Once the authorization is successful, you will see a success message.
10. Click **Enable**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/jira-action-img7.png" alt="Enable integration" title="Enable integration" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    The JIRA action is moved from _Available_ to _Configured_ region.


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s JIRA app to access an access token at runtime. You can also use the custom authorization profile to fetch the access token based on user credentials.

Steps to authorize a JIRA action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **JIRA** action.
2. In the Configurations dialog, select the **Authorization** tab.
3. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select **OAuth** option.  
<img src="../images/jira-action-img8.png" alt="Authorization Type-OAuth" title="Authorization Type-OAuth" style="border: 1px solid gray;zoom:50%;"/>

    **System Authorization**
    
    The end user has to provide credentials during the conversation to authorize users for JIRA integration to obtain the access token.
    
    1. Select the **System** card to enable the Kore.ai’s preconfigured JIRA app.  
    <img src="../images/jira-action-img9.png" alt="System card" title="System card" style="border: 1px solid gray;zoom:50%;"/>

    2. Once you click the **Enable** button, a link is sent to the end user to authorize the integration.
    3. Click the link and enter the login credentials to allow the user to authorize the integration.


    **Custom Authorization**
    
    Create your custom authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s JIRA app for authorization.

    1. Select Custom to **enable** the custom authorization profile.
    2. Click the **Select Authorization** drop-down and select the **Create New** option. Follow the instructions in the **Custom Authorization** section.
    3. You can also select an existing authorization profile as shown below:  
    <img src="../images/jira-action-img10.png" alt="Select existing auth profile" title="Select existing auth profile" style="border: 1px solid gray;zoom:50%;"/>

4. Click the **Enable** button. The users will see the authorize option during the runtime.


## Step 2: Install the Jira Action Templates

Once you have configured a JIRA integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/jira-action-img11.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/jira-action-img12.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. Once all templates are installed, a dialog task for each template is auto-created.  
<img src="../images/jira-action-img13.png" alt="Dialog task for each installed template" title="Dialog task for each installed template" style="border: 1px solid gray;zoom:50%;"/>

5. Select the desired dialog task from the templates and click **Proceed**. For example, select the Update an Issue task.  
<img src="../images/jira-action-img14-tem-img2.png" alt="Select desired dialog rask" title="Select desired dialog task" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click Proceed, the dialog task is auto-created, and the canvas opens with all required entity nodes, service nodes, and message scripts.