# Configuring the Shopify Action

The Kore.ai XO Platform lets you easily connect your Shopify Shop instance to find information regarding Customers, Products, and Orders.

This document explains how to authorize and enable the Shopify action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports basic authentication to allow Shopify integration to exchange data. For more information, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.

The Kore.ai XO Platform supports the following authorization types for the Shopify integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Shopify app to access an access token at runtime. To learn more about Shopify account types, see [Shopify Documentation](https://www.shopify.com/in/blog/topics/guides){:target="_blank"}.


## Step 1: Enable the Shopify Action

**Prerequisites**:

Before enabling the Shopify action, complete the following prerequisites:



* Create a custom app for a store in the Shopify admin page.
* Authenticate the custom app by installing the app.
* Generate API credentials and the necessary API access tokens. Refer this link for more information related to custom apps:- [Shopify custom apps](https://help.shopify.com/en/manual/apps/app-types/custom-apps){:target="_blank"}.
* Configure the app with the following scopes to perform the actions provided by the Kore.ai XO platform.
    * `read_orders`
    * `read_products`
    * `read_customers`

* Provide the **Admin API access token** and **Domain** provided by Shopify in Kore.ai Pre-authorize the Integration.
* If you don’t have Shopify account credentials, create a developer account in Shopify and note down login credentials. Use the [Shopify Documentation](https://www.shopify.com/in/blog/topics/guides){:target="_blank"} for more information.
* Copy your Shopify account’s API Key and Domain name and keep it for future use.


### Pre-authorize the Integration

**Basic Auth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with preconfigured Kore.ai’s app with the **Basic Auth** option.

Steps to authorize a Shopify action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Shopify** action in the Available Actions.  

3. In the **Configurations** dialog, select the **Authorization** tab.
4. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **Basic Auth** option.  
    <img src="../images/shopify-action-img2.png" alt="Auth type - Basic auth" title="Auth type - Basic auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **User Sub Domain** – The domain name of the Shopify account.
    3. **API Key** – The secret API key of your Shopify account.

5. Click **Enable**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/shopify-action-img3.png" alt="Integration successful" title="Integration successful" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    The Shopify action is moved from _Available_ to _Configured_ region.


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Shopify app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize a Shopify action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Shopify** action.
2. In the Configurations dialog, select the **Authorization** tab.
3. Enter the following details:

    1. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **Basic Auth** option.
    2. Create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Shopify app for authorization. To create a profile, click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/shopify-action-img4.png" alt="Create new authorization" title="Create new authorization" style="border: 1px solid gray;zoom:50%;"/>

    3. Select the type of authorization mechanism. For example, select the **API Key** option. To create Basic Auth profiles, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.
    4. Enter the following authentication credentials for the Basic Auth mechanism:
        * **Name** – Enter the name for the Basic Auth profile.
        * Select **Yes** for the tenancy URLs option.
        * **Base URL** – Enter the base tenant URL for the Shopify instance.
        * **Authorization Check URL** – Enter the authorization check URL for your Shopify instance.
        * **Description** – Enter the description of the basic authentication profile.
        * Click **Save Auth** to save the authorization profile.  
        <img src="../images/shopify-action-img5.png" alt="Auth profile" title="Auth profile" style="border: 1px solid gray;zoom:50%;"/>

4. Select the new **Authorization Profile**, which you created to complete integration.
5. Click **Enable**. When you configure the action for the first time, the **Integration Successful** pop-up is displayed.


## Step 2: Install the Shopify Action Templates

Once you have configured a Shopify integration, you can explore and install action templates.

Steps to install action templates:



1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/shopify-action-img6.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

    You can also click the **Skip for Now** button to install the Dialog Task templates later.  
    <img src="../images/shopify-action-img7.png" alt="Skip for now" title="Skip for now" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/shopify-action-img8.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. Once all templates are installed, a dialog task for each template is auto-created.
5. Select the desired dialog task from the templates and click **Proceed**. For example, select the **Get products by name** task.  
<img src="../images/shopify-action-img9.png" alt="Select desired dialog task and proceed" title="Select desired dialog task and proceed" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click Proceed, the dialog task is auto-created, and the canvas opens with all required entity nodes, service nodes, and message scripts.  
<img src="../images/shopify-action-img10.png" alt="Canvas for dialog task" title="Canvas for dialog task" style="border: 1px solid gray;zoom:50%;"/>
