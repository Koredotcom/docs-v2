# Configuring the Salesforce CRM Action

The XO Platform lets you easily integrate with [Salesforce CRM](https://www.salesforce.com/in/?ir=1){blank":target="_} to power your conversations to create leads, opportunities, and other functions.

**Watch a Short Video on Salesforce Integrations Actions**

<iframe title="vimeo-player" src="https://player.vimeo.com/video/761445731?h=4082a8bdfe" width="640" height="360" frameborder="0"    allowfullscreen></iframe>

This article explains how to authorize and enable the **Salesforce CRM** action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports OAuth 2.0 authentication to allow a Salesforce integration to exchange data. For more information, see [Setting Up Authorization Using OAuth v2](../../../dev-tools/bot-authorization/setting-up-authorization-using-oauth-v2.md){:target="_blank"} article. 

The Kore.ai XO Platform supports the following authorization types for the Salesforce CRM integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token. 
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Salesforce app to access an access token at runtime.

!!! note

    The Salesforce CRM integration can be authorized only for the _Developer_ and _Enterprise_ editions because Rest API integration is enabled for these editions. You cannot authorize Salesforce’s _Trial_ edition. To learn more about Salesforce account types, see [Salesforce documentation](https://help.salesforce.com/s/articleView?id=sf.accounts.htm&type=5){:target="_blank"}.


<table border="1">
  <tr>
   <td><strong>Authorization Type</strong>
   </td>
   <td><strong>OAuth – System</strong>
   </td>
   <td><strong>OAuth – Custom</strong>
   </td>
  </tr>
  <tr>
   <td>Pre-authorize the Integration
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Allow Users to Authorize the Integration
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
</table>



## Step 1: Enable the Salesforce CRM Action 

**Prerequisites**:

Before enabling the Salesforce CRM actions, complete the following prerequisites:

* Create a developer account in the Salesforce CRM and note down login credentials. Use the [Salesforce CRM’s Help Center](https://help.salesforce.com/s/){:target="_blank"} for more information.
* Copy the Client ID, Client Secret Key, Authorization URL, and Call back URL and keep them ready to enable the Salesforce CRM integration.

Steps to enable the Salesforce action:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Salesforce** action.  



### Pre-authorize the Integration

**OAuth**

You can authorize the integration using developer credentials. The developer authorization lets you authorize the integration with preconfigured Kore.ai’s app or use the custom authorization profile to let a developer configure the integration. 

Steps to authorize a Salesforce action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Salesforce** action in the **Available Actions** region.
3. In the **Configurations** dialog, select the **Authorization** tab 
4. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **_OAuth_** option.  
<img src="../images/salesforce-action-img2.png" alt="Auth type - OAuth" title="Auth type - OAuth" style="border: 1px solid gray;zoom:50%;"/>

    **System Authorization**


    Pre-authorize Salesforce CRM integration with the necessary authorization credentials to obtain the token to access external services.

    * Select the **System** card to enable the Kore.ai’s preconfigured Salesforce app and click **Authorize**.  
    <img src="../images/salesforce-action-img3.png" alt="Kore.ai’s preconfigured Salesforce app" title="Kore.ai’s preconfigured Salesforce app" style="border: 1px solid gray;zoom:50%;"/>

    * Once you click **Authorize**, you are redirected to “login.salesforce.com”
    * Enter your developer account credentials to successfully connect with your Salesforce Account
    * Click the **Allow Access** button to use Kore.ai’s app to fetch the access token to complete the authorization.


    **Custom Authorization**

    Create your own custom authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Salesforce app for authorization.

    * Select the **Custom** to enable the custom authorization profile.
    * Click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/salesforce-action-img4.png" alt="Create new auth" title="Create new auth" style="border: 1px solid gray;zoom:50%;"/>

    * Select the type of authorization mechanism. For example, select the **OAuth v2** option. To create custom OAuth profiles, see [Setting Up Authorization Using OAuth v2](../../../dev-tools/bot-authorization/setting-up-authorization-using-oauth-v2.md){:target="_blank"}.  
    <img src="../images/salesforce-action-img5.png" alt="Auth mechanism - OAuth V2" title="Auth mechanism - OAuth V2" style="border: 1px solid gray;zoom:50%;"/>

    * Enter the following authentication credentials for the OAuth v2 mechanism:
        * Call back URL
        * Identity Provider Name
        * Client ID
        * Client Secret
        * Authorization URL
        * Token Request URL
        * Scope
        * Refresh Token URL

        <img src="../images/salesforce-action-img6.png" alt="Auth credentials" title="Auth credentials" style="border: 1px solid gray;zoom:50%;"/>

    * Click **Save Auth** to save Authorization Profile
    * Select the new **Authorization Profile,** which you created to enable integration
    * Once click **Authorize**, you are navigated to “login.salesforce.com”  
    <img src="../images/salesforce-action-img7.png" alt="Authorize" title="Authorize" style="border: 1px solid gray;zoom:50%;"/>

    * Enter login credentials to successfully connect with your Salesforce Account
    * Click the **Allow Access** button if prompted to let your custom app fetch the access token to complete the authorization.
    * Once the authorization is successful, you will see a success message.
    * Click **Enable**. When you configure the action for the first time, the **Integration Successful**  pop-up is displayed.  
    <img src="../images/salesforce-action-img8.png" alt="Integration successful" title="Integration successful" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    You will notice the Salesforce action is moved from _Available_ to _Configured_ region.


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Salesforce app to access an access token at runtime. You can also use the custom authorization profile to fetch the access token based on user credentials. 

Steps to authorize a Salesforce action at a user level:



1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Salesforce** action in the **Available Actions** region.
3. In the Configurations dialog, select the **Authorization** tab 
4. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select **_OAuth_** option.  
<img src="../images/salesforce-action-img9.png" alt="Auth type - OAuth" title="Auth type - OAuth" style="border: 1px solid gray;zoom:50%;"/>

    **System Authorization**

    The end user has to provide credentials during the conversation to authorize users for Salesforce CRM integration to obtain the access token.

    * Select the **System** card to enable the Kore.ai’s preconfigured Salesforce app.  
    <img src="../images/salesforce-action-img10.png" alt="Kore.ai’s preconfigured Salesforce app" title="Kore.ai’s preconfigured Salesforce app" style="border: 1px solid gray;zoom:50%;"/>

    * Once you click the **Enable** button, a link is sent to the end user to authorize integration.
    * Click on the link and enter the login credentials to allow the user to authorize the integration.


    **Custom Authorization**

    Create your own custom authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Salesforce app for authorization.

    * Select the **Custom** to enable the custom authorization profile.
    * Click the **Select Authorization** drop-down and select the **Create New** option. Follow the instructions in the [Custom Authorization ](#pre-authorize-the-integration)section.
    * You can also select an existing authorization profile as shown below:  
    <img src="../images/salesforce-action-img11.png" alt="Select an existing authorization profile" title="Select an existing authorization profile" style="border: 1px solid gray;zoom:50%;"/>

    * Once you click the **Enable** button, the user will see the authorize option during the runtime execution.  
    <img src="../images/salesforce-action-img12.png" alt="Enable" title="Enable" style="border: 1px solid gray;zoom:50%;"/>


## Step 2: Install the Salesforce Action Templates

Once you have configured a Salesforce CRM Integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/salesforce-action-img13.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/salesforce-action-img14.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to open the dialog task.
4. Once all templates are installed, a dialog task for each template is auto-created.  
<img src="../images/salesforce-action-img15.png" alt="Dialog tasks for each template" title="Dialog tasks for each template" style="border: 1px solid gray;zoom:50%;"/>

5. You can also select the desired dialog task from the templates and click **Proceed**. For example, select the **Create a Lead** task.  
<img src="../images/salesforce-action-img16.png" alt="Select desired dialog task and proceed" title="Select desired dialog task and proceed" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click **Proceed**, the dialog task is auto-created and the canvas opens with all required entity nodes, service nodes, and message scripts.