# Configuring the Google Maps Action

The Kore.ai XO Platform lets you easily connect with Google Maps to find information regarding accurate Locations and places.

This document explains how to authorize and enable the Google Maps action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports basic authentication to allow Google Maps integration to exchange data. For more information, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.

The Kore.ai XO Platform supports the following authorization types for the Google Maps integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Google Maps app to access an access token at runtime. To learn more about Google Maps account types, see [Google Maps Documentation](https://developers.google.com/maps/documentation){:target="_blank"}.


## Enable the Google Maps Action

**Prerequisites**:

Before enabling the Google Maps action, complete the following prerequisites:

* Create a custom app for a store on the Google Maps admin page.
* If you don’t have Google Maps account credentials, create an account in Google Maps and note down the login credentials. For more information, see [Google Maps Documentation](https://developers.google.com/maps/documentation){:target="_blank"} for more information.
* Copy your Google Maps account’s API Key and keep it for future use.


### Pre-authorize the Integration

**Basic Auth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with preconfigured Kore.ai’s app with the **Basic Auth** option.

Steps to authorize a Google Maps action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Google Maps** from the list of **Available actions**.  


3. In the **Configurations** dialog, select the **Authorization** tab.
4. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **Basic Auth** option.  
    <img src="../images/google-maps-action-img2.png" alt="Auth type - Basic auth" title="Auth type - Basic auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **API Key** – The secret API key of your Google Maps account.


5. Click **Enable**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/google-maps-action-img3.png" alt="Enable integration" title="Enable integration" style="border: 1px solid gray;zoom:50%;"/>

    !!! note

        The Google Maps action is moved from Available to Configured region.

6. You can also click the **Skip for Now** button to install the Dialog Task templates later. To learn how to use action templates, read the [Using the Google Maps action templates](using-the-google-maps-action-templates.md){:target="_blank"} article.  
<img src="../images/google-maps-action-img4.png" alt="Skip for now" title="Skip for now" style="border: 1px solid gray;zoom:50%;"/>


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Google Maps app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize a Google Maps action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Google Maps** action.
2. In the Configurations dialog, select the **Authorization** tab.
3. Enter the following details:
    1. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **Basic Auth** option.
    2. Create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Google Maps app for authorization. To create a profile, click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/google-maps-action-img5.png" alt="Create new auth" title="Create new auth" style="border: 1px solid gray;zoom:50%;"/>

    3. Select the type of authorization mechanism. For example, select the **API Key** option. To create Basic Auth profiles, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.  
    <img src="../images/google-maps-action-img6.png" alt="Auth mechanism-API key" title="Auth mechanism-API key" style="border: 1px solid gray;zoom:50%;"/>

    4. Enter the following authentication credentials for the Basic Auth mechanism:
        * **Name** – Enter the name for the Basic Auth profile.
        * Select **Yes**; some tasks will have tenancy URLs, and the user must provide the URLs to authenticate successfully.
        * **Base URL** – Enter the base tenant URL for the Google Maps instance.
        * **Authorization Check URL** – Enter the authorization check URL for your Google Maps instance.
        * **Description** – Enter the description of the basic authentication profile.  
        <img src="../images/google-maps-action-img7.png" alt="Auth credentials" title="Auth credentials" style="border: 1px solid gray;zoom:50%;"/>

    5. Click **Save Auth** to save the authorization profile.
    6. Select the new **Authorization Profile**, which you created to complete integration.

4. Click **Enable**. When you configure the action for the first time, the **Integration Successful** pop-up is displayed.


## Step 2: Install the Google Maps Action Templates

Once you have configured the Google Maps integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/google-maps-action-img8.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/google-maps-action-img9.png" alt="Begin template installation" title="Begin template installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. A dialog task is automatically created for each installed template.  
<img src="../images/google-maps-action-img10.png" alt="Dialog tasks created for each installed template" title="Dialog tasks created for each installed template" style="border: 1px solid gray;zoom:50%;"/>

5. Alternatively, you can create a new dialog task and select the Google Maps integration to select the dialog task from the templates and click **Proceed**. For example, select the **Get location by coordinates** task.  
<img src="../images/google-maps-action-img11-tem-img2.png" alt="Create new dialog and integrate template" title="Create new dialog and integrate template" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click **Proceed**, the dialog task is auto-created, and the canvas opens with all required entity nodes, service nodes, and message scripts.  
<img src="../images/google-maps-action-img12-tem-img4.png" alt="Dialog task canvas" title="Dialog task canvas" style="border: 1px solid gray;zoom:50%;"/>
