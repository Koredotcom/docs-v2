# Configuring the DHL Action

The Kore.ai XO Platform lets you easily connect your DHL instance to find information regarding DHL Locations and Track Shipments.

This document explains how to authorize and enable the DHL action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports basic authentication to allow DHL integration to exchange data. For more information, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.

The Kore.ai XO Platform supports the following authorization types for the DHL integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s DHL app to access an access token at runtime. To learn more about DHL account types, see [DHL Documentation](https://developer.dhl.com/documentation){:target="_blank"}.


## Enable the DHL Action

**Prerequisites**:

Before enabling the DHL action, complete the following prerequisites:

* If you don’t have DHL account credentials, create an account in the DHL Developer console and note down the login credentials. See [DHL Documentation](https://developer.dhl.com/documentation){:target="_blank"} for more information.
* Create a custom app for a store on the DHL admin page.
* Copy your DHL account’s API Key and keep it for future use.


### Pre-authorize the Integration

**Basic Auth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with preconfigured Kore.ai’s app with the **Basic Auth** option.

Steps to authorize a DHL action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **DHL** from the list of **Available actions**.  


3. In the **Configurations** dialog, select the **Authorization** tab.
4. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **Basic Auth** option.  
    <img src="../images/dhl-action-img2.png" alt="Auth type-Basic Auth" title="Auth type-Basic Auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **API Key** – The secret API key of your DHL account.
5. Click **Enable**. When you configure the action for the first time, the Integration Successful pop-up is displayed.

    !!! note

        The DHL action is moved from _Available_ to _Configured_ region.

6. You can also click the **Skip for Now** button to install the Dialog Task templates later. To learn how to use action templates, read the [Using the DHL action templates](using-the-dhl-action-templates.md){:target="_blank"} article.  
<img src="../images/dhl-action-img4.png" alt="Skip for now" title="Skip for now" style="border: 1px solid gray;zoom:50%;"/>

### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s DHL app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize a DHL action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **DHL** action.
2. In the Configurations dialog, select the **Authorization** tab.
3. Enter the following details:
    1. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **Basic Auth** option.
    2. Create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s DHL app for authorization. To create a profile, click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/dhl-action-img5.png" alt="Create new auth profile" title="Create new auth profile" style="border: 1px solid gray;zoom:50%;"/>

    3. Select the type of authorization mechanism. For example, select the **API Key** option. To create Basic Auth profiles, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.  
    <img src="../images/dhl-action-img6.png" alt="Auth mechanism" title="Auth mechanism" style="border: 1px solid gray;zoom:50%;"/>

    4. Enter the following authentication credentials for the Basic Auth mechanism:
        * **Name** – Enter the name for the Basic Auth profile.
        * Select **Yes**; some tasks will have tenancy URLs, and the user must provide the URLs to authenticate successfully.
        * **Base URL** – Enter the base tenant URL for the DHL instance.
        * **Authorization Check URL** – Enter the authorization check URL for your DHL instance.
        * **Description** – Enter the description of the basic authentication profile.  
        <img src="../images/dhl-action-img7.png" alt="Auth credentials" title="Auth credentials" style="border: 1px solid gray;zoom:50%;"/>

        * Click **Save Auth** to save the authorization profile.
        * Select the new **Authorization Profile**, which you created to complete integration.
4. Click **Enable**. When you configure the action for the first time, the **Integration Successful** pop-up is displayed.


## Step 2: Install the DHL Action Templates

Once you have configured the Google Maps integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/dhl-action-img8.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/dhl-action-img9.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, the associated dialog task is auto-created and displayed on the Dialogs page. Click **Go to Dialog** or go to **Automation AI** > **Use Cases** > **Dialogs**.

4. To start using the templates, see [Using DHL Templates.](using-the-dhl-action-templates.md){:target="_blank"}