# Configuring the Freshdesk Action

The XO Platform lets you easily connect the Freshdesk integration to create, view, update, search and delete tickets. Click the [Freshdesk](https://www.freshworks.com/freshdesk/){:target="_blank"} link to learn more.

This article explains how to authorize and enable the **Freshdesk** action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports basic authentication to allow Freshdesk integration to exchange data. For more information, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.

The Kore.ai XO Platform supports the following authorization types for the Freshdesk integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Freshdesk app to access an access token at runtime. To learn more about Freshdesk account types, see [Freshdesk Documentation](https://www.freshworks.com/freshdesk/resources/){:target="_blank"}.


## Step 1: Enable the Freshdesk Action

**Prerequisites**:

Before enabling the Freshdesk action, complete the following prerequisites:

* If you don’t have Freshdesk account credentials, create a developer account in Freshdesk and note down login credentials. Use the [Freshdesk Documentation](https://www.freshworks.com/freshdesk/resources/){:target="_blank"} for more information.
* Copy the API Key and Domain name of your Freshdesk account and keep them for future use to enable the integration.

Steps to enable the Freshdesk action:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Freshdesk** action.  



### Pre-authorize the Integration

**Basic Auth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with preconfigured Kore.ai’s app with the **Basic Auth** option.

Steps to authorize a Freshdesk action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Freshdesk** action in the Available Actions region.
3. In the **Configurations** dialog, select the **Authorization** tab.
4. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **Basic Auth** option.  
    <img src="../images/freshdesk-action-img2.png" alt="Auth Type-Basic auth" title="Auth Type-Basic auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **User Sub Domain** – The domain name of the Freshdesk account.
    3. **API Key** – The secret API key of your Freshdesk account.
5. Click **Enable**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/freshdesk-action-img3.png" alt="Enable integration" title="Enable integration" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    The Freshdesk action is moved from _Available_ to _Configured_ region.


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Freshdesk app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize a Freshdesk action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Freshdesk** action.
2. In the Configurations dialog, select the **Authorization** tab.
3. Enter the following details:
    1. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **Basic Auth** option.
    2. Create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Freshdesk app for authorization. To create a profile, click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/freshdesk-action-img4.png" alt="Create new auth profile" title="Create new auth profile" style="border: 1px solid gray;zoom:50%;"/>

    3. Select the type of authorization mechanism. For example, select the **Basic Auth** option. To create Basic Auth profiles, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.
    4. Enter the following authentication credentials for the Basic Auth mechanism:
        * _Name_ – Enter the name for the Basic Auth profile.
        * Select _No_ for the tenancy URLs option.
        * _Base URL_ – Enter the base tenant URL for the Freshdesk instance.
        * _Authorization Check URL_ – Enter the authorization check URL for your Freshdesk instance.
        * _Description_ – Enter the description of the basic authentication profile.  
        <img src="../images/freshdesk-action-img5.png" alt="Auth credentials" title="Auth credentials" style="border: 1px solid gray;zoom:50%;"/>

    5. Click **Save Auth** to save the authorization profile.  
    <img src="../images/freshdesk-action-img6.png" alt="Save auth" title="Save auth" style="border: 1px solid gray;zoom:50%;"/>

    6. Select the new **Authorization Profile**, which you created to complete integration.

4. Click **Enable**. When you configure the action for the first time, the **Integration Successful** pop-up is displayed.  
<img src="../images/freshdesk-action-img7.png" alt="Enable integration" title="Enable integration" style="border: 1px solid gray;zoom:50%;"/>


## Step 2: Install the Freshdesk Action Templates

Once you have configured a Freshdesk integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/freshdesk-action-img8.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/freshdesk-action-img9.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. Once all templates are installed, a dialog task for each template is auto-created.
5. Select the desired dialog task from the templates and click **Proceed**. For example, select the **Create a Ticket** task.  
<img src="../images/freshdesk-action-img10-tem-img2.png" alt="Select dialog task and proceed" title="Select dialog task and proceed" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click Proceed, the dialog task is auto-created, and the canvas opens with all required entity nodes, service nodes, and message scripts.  
<img src="../images/freshdesk-action-img11.png" alt="Dialog task canvas opens" title="Dialog task canvas opens" style="border: 1px solid gray;zoom:50%;"/>
