# Configuring the HubSpot Action

The XO Platform lets you easily connect the HubSpot integration to create, view, update, search and delete deals. You can also create, view, update, search and delete contacts using the pre-built templates. Click the [HubSpot](https://www.hubspot.com/?__hstc=59894770.e90bc57a4e2025da994552ad13bbab05.1699003492940.1700224472376.1700227712599.57&__hssc=59894770.6.1700227712599&__hsfp=4271746649){:target="_blank"} link to know more. 

This article explains how to authorize and enable the **HubSpot** action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports OAuth 2.0 authentication to allow a HubSpot integration to exchange data. For more information, see [Setting Up Authorization Using OAuth v2](../../../dev-tools/bot-authorization/setting-up-authorization-using-oauth-v2.md){:target="_blank"} article. 

The Kore.ai XO Platform supports the following authorization types for the HubSpot CRM integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token. 
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s HubSpot app to access an access token at runtime.

<table border="1">
  <tr>
   <td>
<strong>Authorization Type</strong>
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



## Step 1: Enable the HubSpot CRM Action 

**Prerequisites**:

Before enabling the HubSpot CRM actions, complete the following prerequisites:

* Create a developer account in the HubSpot CRM and note down login credentials. Use the [HubSpot Developer Center](https://developers.hubspot.com/docs/api/creating-an-app?__hstc=59894770.e90bc57a4e2025da994552ad13bbab05.1699003492940.1700224472376.1700227712599.57&__hssc=59894770.6.1700227712599&__hsfp=4271746649){:target="_blank"} for more information.
* Copy the Client ID and Client Secret key values and keep them for future use to enable the integration.

Steps to enable the HubSpot action:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. In the **Available** section, select the **HubSpot**.  


### Pre-authorize the Integration

**OAuth**

You can authorize the integration using developer credentials. The developer authorization lets you authorize the integration with preconfigured Kore.ai’s app or use the custom authorization profile to let a developer configure the integration. 

Steps to authorize a HubSpot action using developer credentials:

* Go to **App Settings** > **Integrations** > **Actions**
* Select the **HubSpot** action in the **Available Actions** region.
* In the **Configurations** dialog, select the **Authorization** tab 
* Enter the following details:

    **System Authorization**  
      
    Pre-authorize HubSpot CRM integration with the necessary authorization credentials to obtain the token to access external services.

    * **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **_OAuth_** option.  
    <img src="../images/hubspot-integration-img2.png" alt="Auth type-OAuth" title="Auth type-OAuth" style="border: 1px solid gray;zoom:50%;"/>

    * Select the **System** card to enable the Kore.ai’s preconfigured HubSpot app and click **Authorize**.  
    <img src="../images/hubspot-integration-img3.png" alt="Authorize Kore.ai’s preconfigured HubSpot app" title="Authorize Kore.ai’s preconfigured HubSpot app" style="border: 1px solid gray;zoom:50%;"/>

    * Once you click **Authorize**, you are redirected to “login.hubspot.com”
    * Enter your developer account credentials to successfully connect with your HubSpot Account.  
    <img src="../images/hubspot-integration-img4-img8.png" alt="Connect to developer account" title="Connect to developer account" style="border: 1px solid gray;zoom:50%;"/>

    * Select a HubSpot account and click Choose Account. The Authorization completed successfully message is displayed.
    * Click the **Enable** button to use Kore.ai’s app to fetch the access token to complete the authorization.

    **Custom Authorization**

    Create your own custom authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s HubSpot app for authorization.

    * Select the **Custom** to enable the custom authorization profile.
    * Click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/hubspot-integration-img5.png" alt="Create new auth" title="Create new auth" style="border: 1px solid gray;zoom:50%;"/>

    * Select the type of authorization mechanism. For example, select the **OAuth v2** option. To create custom OAuth profiles, see [Setting Up Authorization Using OAuth v2](../../../dev-tools/bot-authorization/setting-up-authorization-using-oauth-v2.md){:target="_blank"}.  
    <img src="../images/hubspot-integration-img6.png" alt="Select auth mechanism" title="Select auth mechanism" style="border: 1px solid gray;zoom:50%;"/>

    * Enter the following authentication credentials for the OAuth v2 mechanism:
        * Call back URL
        * Identity Provider Name
        * Client ID
        * Client Secret
        * Authorization URL
        * Token Request URL
        * Scope
        * Refresh Token URL

        <img src="../images/hubspot-integration-img7.png" alt="Enter auth credentials" title="Enter auth credentials" style="border: 1px solid gray;zoom:50%;"/>

    * Click **Save Auth** to save Authorization Profile.
    * Select the new **Authorization Profile,** which you created to enable integration
    * Once click **Authorize**, you are navigated to “login.hubspot.com”
    * Enter your developer account credentials to successfully connect with your Hubspot Account.  
    <img src="../images/hubspot-integration-img4-img8.png" alt="Connect to developer account" title="Connect to developer account" style="border: 1px solid gray;zoom:50%;"/>  

    * Select a HubSpot account and click **Choose Account**. The Authorization completed successfully message is displayed.
    * Click **Enable**. When you configure the action for the first time, the **Integration Successful**  pop-up is displayed.  
    <img src="../images/hubspot-integration-img9.png" alt="Enable integration" title="Enable integration" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    You will notice the HubSpot action is moved from _Available_ to _Configured_ region.


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s HubSpot app to access an access token at runtime. You can also use the custom authorization profile to let a user configure the integration at runtime. 

Steps to authorize a HubSpot action at a user level:



1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **HubSpot** action in the **Available Actions** region.
3. In the Configurations dialog, select the **Authorization** tab 
4. Enter the following details: 

    **System Authorization**

    The end user has to provide credentials during the conversation to authorize users for HubSpot CRM integration to obtain the access token.
    
    1. Select the **System** card to enable the Kore.ai’s preconfigured HubSpot app.
    2. Once you click the **Enable** button, a link is sent to the end user to authorize integration.  
    <img src="../images/hubspot-integration-img10.png" alt="Enable integration-authorization link sent to user" title="Enable integration-authorization link sent to user" style="border: 1px solid gray;zoom:50%;"/>

    3. Click on the link and enter the login credentials to allow the user to authorize the integration.

    **Custom Authorization**

    Create your own custom authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s HubSpot app for authorization.

    1. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select **_OAuth_** option.
    2. Select the **Custom** to enable the custom authorization profile.
    3. Click the **Select Authorization** drop-down and select the **Create New** option. Follow the instructions in the **Custom Authorization** section.  
    <img src="../images/hubspot-integration-img11.png" alt="Create new authorization" title="Create new authorization" style="border: 1px solid gray;zoom:50%;"/>

    4. You can also select an existing authorization profile as shown below:  
    <img src="../images/hubspot-integration-img12.png" alt="Select existing auth profile" title="Select existing auth profile" style="border: 1px solid gray;zoom:50%;"/>

    8. Once you click the **Enable** button, the user will see the authorize option during the runtime execution.


## Step 2: Install the HubSpot Action Templates

Once you have configured a HubSpot CRM Integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/hubspot-integration-img9.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/hubspot-integration-img14.png" alt="Begin template installation" title="Begin template installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, the associated dialog task is auto-created and displayed on the Dialogs page.  Click **Go to Dialog** or go to **Automation AI** > **Use Cases** > **Dialogs**.

4. To start using the templates, see [Using HubSpot Templates.](using-the-hubspot-action-templates.md){:target="_blank"}  



