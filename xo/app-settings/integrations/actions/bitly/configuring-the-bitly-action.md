# Configuring the Bitly Action

The Kore.ai XO Platform lets you easily connect with your Bitly instance to shorten any long URLs. [Learn more about Bitly](https://bitly.com/){:target="_blank"}.

This document explains how to authorize and enable the Bitly action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports API key authentication to allow Bitly integration to exchange data. For more information, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.

The Kore.ai XO Platform supports the following authorization types for the Bitly integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Bitly app to access an access token at runtime. To learn more about Bitly, see [Bitly Documentation](https://dev.bitly.com/docs/getting-started/authentication/){:target="_blank"}.


## Enable the Bitly Action

**Prerequisites**

Before enabling the Bitly action, complete the following prerequisites:

* If you don’t have Bitly account credentials, create an account in the [Bitly Developer](https://dev.bitly.com/){:target="_blank"} console and note down the login credentials. See [Bitly Documentation](https://dev.bitly.com/docs/getting-started/authentication/){:target="_blank"} for more information.
* Create a custom app on the Bitly admin page.
* Copy your Bitly account’s personal access token and keep it for future use.


### Pre-authorize the Integration

**Basic Auth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with the preconfigured Kore.ai app with the **Basic Auth** option.

Steps to authorize an Bitly action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Bitly** from the list of **Available** actions.  


3. In the **Configurations** dialog, select the **Authorization** tab.
4. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **Basic Auth** option.  
    <img src="../images/bitly-action-img2.png" alt="Auth type-Basic Auth" title="Auth type-Basic auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **Personal Access Token** – Enter the access token of your Bitly account.  
    <img src="../images/bitly-action-img3.png" alt="Enter access token" title="Enter access token" style="border: 1px solid gray;zoom:50%;"/>

    3. Click **Save**. When you configure the action for the first time, the Integration Successful pop-up is displayed.

        !!! note

            The Bitly action is moved from _Available_ to _Configured_ region on the Actions page.

5. You can also click the **Skip for Now** button to install the Dialog Task templates later. To learn how to use action templates, read the [Using the Bitly action templates](using-the-bitly-action-template.md){:target="_blank"} article.  
<img src="../images/bitly-action-img5.png" alt="Skip for now" title="Skip for now" style="border: 1px solid gray;zoom:50%;"/>  


### Allow End Users to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Bitly app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize an Bitly action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Bitly** action.
2. In the Configurations dialog, select the **Authorization** tab.
3. Enter the following details:
    1. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **Basic Auth** option.  
    <img src="../images/bitly-action-img6.png" alt="Auth type" title="Auth type" style="border: 1px solid gray;zoom:50%;"/>

    2. Create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Bitly app for authorization. To create a profile, click the **Select Authorization** drop-down and select the **Create New** option.
    3. Select the type of authorization mechanism. For example, select the **API Key** option. To create Basic Auth profiles, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.  
    <img src="../images/bitly-action-img7.png" alt="Auth mechanism-API key" title="Auth mechanism-API key" style="border: 1px solid gray;zoom:50%;"/>

    4. Enter the following authentication credentials for the Basic Auth mechanism:
        1. **Name** – Enter the name for the Basic Auth profile.
        2. Select **Yes**; some tasks will have tenancy URLs, and the user must provide the URLs to authenticate successfully.
        3. **Base URL** – Enter the base tenant URL for the Bitly instance.
        4. **Authorization Check URL** – Enter the authorization check URL for your Bitly instance.
        5. **Description** – Enter the description of the basic authentication profile.  
        <img src="../images/bitly-action-img8.png" alt="Basic auth credentials" title="Basic auth credentials" style="border: 1px solid gray;zoom:50%;"/>

        6. Click **Save Auth** to save the authorization profile.
        7. Select the new **Authorization Profile**, which you created to complete integration.
4. Click **Save**. When you configure the action for the first time, the **Integration Successful** pop-up is displayed.


## Step 2: Install the Bitly Action Templates

Once you have configured the Bitly integration, you can explore and install action templates.

Steps to install action templates:



1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/bitly-action-img9.png" alt="Explore Templates" title="Explore Templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button for a template to begin the installation.  
<img src="../images/bitly-action-img10.png" alt="Install Template" title="Install Template" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, the associated dialog task is auto-created and displayed on the Dialogs page. Click **Go to Dialog** or go to **Automation AI** > **Use Cases** > **Dialogs**.

4. To start using the templates, see [Using Bitly Action Templates.](using-the-bitly-action-template.md){:target="_blank"}