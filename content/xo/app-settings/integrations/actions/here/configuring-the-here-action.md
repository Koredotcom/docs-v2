# Configuring the Here Action

The Kore.ai XO Platform lets you easily connect with your Here instance to find locations by text. [Learn more about Here](https://www.here.com/){:target="_blank"}.

This document explains how to authorize and enable the Here action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports API key authentication to allow Here integration to exchange data. For more information, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.

The Kore.ai XO Platform supports the following authorization types for the Here integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Here app to access an access token at runtime. To learn more about Here, see [Here Documentation](https://developer.here.com/documentation/identity-access-management/dev_guide/topics/plat-using-apikeys.html){:target="_blank"}.


## Enable the Here Action

**Prerequisites**

Before enabling the Here action, complete the following prerequisites:

* If you don’t have Here account credentials, create an account in the Here Developer console and note down the login credentials. See [Here Documentation](https://developer.here.com/documentation/identity-access-management/dev_guide/topics/plat-using-apikeys.html){:target="_blank"} for more information.
* Create a custom app on the Here admin page.
* Copy your Here account’s personal access token and keep it for future use.


### Pre-authorize the Integration

**Basic Auth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with the preconfigured Kore.ai app with the **Basic Auth** option.

Steps to authorize an Here action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Here** from the list of **Available** actions.  


3. In the **Configurations** dialog, select the **Authorization** tab.
4. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **Basic Auth** option.  
    <img src="../images/here-action-img2.png" alt="Auth type-Basic auth" title="Auth type-Basic auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **API Key** – Enter the API key of your Here account.  
    <img src="../images/here-action-img3.png" alt="API key for Here account" title="API key for Here account" style="border: 1px solid gray;zoom:50%;"/>

5. Click **Save**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/here-action-img4.png" alt="Save integration" title="Save integration" style="border: 1px solid gray;zoom:50%;"/>

    !!! note

        The Here action is moved from _Available_ to _Configured_ region on the Actions page.

6. You can also click the **Skip for Now** button to install the Dialog Task templates later. To learn how to use action templates, read the [Using the Here action templates](using-here-action-templates.md){:target="_blank"} article.  
<img src="../images/here-action-img5.png" alt="Skip for now" title="Skip for now" style="border: 1px solid gray;zoom:50%;"/>


### Allow End Users to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Here app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize an Here action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Here** action.
2. In the Configurations dialog, select the **Authorization** tab.
3. Enter the following details:
    1. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **Basic Auth** option.
    2. Create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Here app for authorization. To create a profile, click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/here-action-img6.png" alt="Create new auth" title="Create new auth" style="border: 1px solid gray;zoom:50%;"/>

    3. Select the type of authorization mechanism. For example, select the **API Key** option. To create Basic Auth profiles, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.  
    <img src="../images/here-action-img7.png" alt="Auth mechanism" title="Auth mechanism" style="border: 1px solid gray;zoom:50%;"/>

    4. Enter the following authentication credentials for the Basic Auth mechanism:
        1. **Name** – Enter the name for the Basic Auth profile.
        2. Select **Yes**; some tasks will have tenancy URLs, and the user must provide the URLs to authenticate successfully.
        3. **Base URL** – Enter the base tenant URL for the Here instance.
        4. **Authorization Check URL** – Enter the authorization check URL for your Here instance.
        5. **Description** – Enter the description of the basic authentication profile.  
        <img src="../images/here-action-img8.png" alt="Auth credentials" title="Auth credentials" style="border: 1px solid gray;zoom:50%;"/>

    5. Click **Save Auth** to save the authorization profile.
    6. Select the new **Authorization Profile**, which you created to complete integration.

4. Click **Save**. When you configure the action for the first time, the **Integration Successful** pop-up is displayed.


## Step 2: Install the Here Action Templates

Once you have configured the Here integration, you can explore and install action templates.

Steps to install action templates:



1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/here-action-img9.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button for a template to begin the installation.  
<img src="../images/here-action-img10.png" alt="Begin template installation" title="Begin template installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. A dialog task is automatically created for each installed template.
5. Alternatively, you can create a new dialog task and select the Here integration to select the dialog task from the templates and click **Proceed**. For example, select the **Get Location** task.  
<img src="../images/here-action-img11-tem-img2.png" alt="Create new dialog task and integrate template" title="Create new dialog task and integrate template" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click **Proceed**, the dialog task is auto-created, and the canvas opens with all required entity nodes, service nodes, and message scripts.  
<img src="../images/here-action-img12-tem-img4.png" alt="Dialog task canvas" title="Dialog task canvas" style="border: 1px solid gray;zoom:50%;"/>
