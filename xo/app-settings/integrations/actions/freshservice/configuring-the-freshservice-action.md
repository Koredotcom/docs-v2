# Configuring the Freshservice ITSM Action

The XO Platform lets you easily connect the Freshservice integration to allow you to create, view, update, and delete tickets in the system to manage your IT services. Click the [Freshservice](https://www.freshworks.com/freshservice/){:target="_blank"} link to learn more.

This document explains the **Freshservice** configuration steps to enable, authorize, configure, and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports basic authentication to allow Freshservice integration to exchange data. For more information, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.

The Kore.ai XO Platform supports the following authorization types for the Freshservice integration:



* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Freshservice app to access an access token at runtime. To learn more about Freshservice account types, see [Freshservice Documentation](https://community.freshworks.com/product-updates?filters%5BproductArea%5D%5B0%5D=Freshservice){:target="_blank"}.


## Step 1: Enable the Freshservice Action

**Prerequisites**:

Before enabling the Freshservice action, complete the following prerequisites:



* If you don’t have Freshservice account credentials, create an account in Freshservice and note down login credentials. For more information, see [Freshservice Documentation](https://www.freshworks.com/freshservice/product-updates/){:target="_blank"}.
* Copy the API Key and Domain name of your Freshservice account and keep them for future use to enable the integration.

Steps to enable the Freshservice action:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Freshservice** action.  



### Pre-authorize the Integration

**Basic Auth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with preconfigured Kore.ai’s app with the **Basic Auth** option.

Steps to authorize a Freshservice action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Freshservice** action.
2. In the **Configurations** dialog, select the **Authorization** tab.
3. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **Basic Auth** option.  
    <img src="../images/freshservice-action-img2.png" alt="Auth type - Basic auth" title="Auth type - Basic auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **User Sub Domain** – The domain name of the Freshservice account.
    3. **API Key** – The secret API key of your Freshservice account.

4. Click **Enable**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/freshservice-action-img3.png" alt="Enable integration" title="Enable integration" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    The Freshservice action is moved from Available to Configured region.


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Freshservice app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize a Freshservice action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Freshservice** action.
2. In the Configurations dialog, select the **Authorization** tab.
3. Enter the following details:
    1. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **Basic Auth** option.
    2. Create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Freshservice app for authorization. To create a profile, click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/freshservice-action-img4.png" alt="Create new auth profile" title="Create new auth profile" style="border: 1px solid gray;zoom:50%;"/>

    3. Select the type of authorization mechanism. For example, select the **Basic Auth** option. To create Basic Auth profiles, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.  
    <img src="../images/freshservice-action-img5.png" alt="Auth mechanism type" title="Auth mechanism type" style="border: 1px solid gray;zoom:50%;"/>

    4. Enter the following authentication credentials for the Basic Auth mechanism:
        * _Name_ – Enter the name for the Basic Auth profile.
        * Select _Yes; some tasks will have tenancy URLs, and the user must provide the URLs to authenticate successfully_.
        * _Base URL_ – Enter the base tenant URL for the Freshservice instance.
        * _Authorization Check URL_ – Enter the authorization check URL for your Freshservice instance.
        * _Description_ – Enter the description of the basic authentication profile.

    5. Click **Save Auth** to save the authorization profile.  
    <img src="../images/freshservice-action-img6.png" alt="Save auth" title="Save auth" style="border: 1px solid gray;zoom:50%;"/>

    6. Select the new **Authorization Profile**, which you created to complete integration.

4. Click **Enable**. When you configure the action for the first time, the **Integration Successful** pop-up is displayed.  
<img src="../images/freshservice-action-img7.png" alt="Enable integration" title="Enable integration" style="border: 1px solid gray;zoom:50%;"/>


## Step 2: Install the Freshservice Action Templates

Once you have configured a Freshservice integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/freshservice-action-img8.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/freshservice-action-img9.png" alt="Begin template installation" title="Begin template installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. Once all templates are installed, a dialog task for each template is auto-created.  
<img src="../images/freshservice-action-img10.png" alt="Dialog tasks auto created" title="Dialog tasks auto created" style="border: 1px solid gray;zoom:50%;"/>

5. Select the desired dialog task from the templates and click **Proceed**. For example, select the **Create a Ticket** task.  
<img src="../images/freshservice-action-img11-tem-img2.png" alt="Select dialog task and proceed" title="Select dialog task and proceed" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click Proceed, the dialog task is auto-created, and the canvas opens with all required entity nodes, service nodes, and message scripts.  
<img src="../images/freshservice-action-img12.png" alt="Dialog task canvas" title="Dialog task canvas" style="border: 1px solid gray;zoom:50%;"/>
