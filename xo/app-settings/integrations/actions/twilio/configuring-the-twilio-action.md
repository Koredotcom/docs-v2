# Configuring the Twilio Action

The XO Platform lets you easily connect the Twilio Verify to send SMS, start verification and check verification. Click the [Twilio Verify](https://www.twilio.com/){:target="_blank"} link to know more.

This article explains how to authorize and enable the **Twilio Verify** action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports basic authentication to allow Twilio Verify integration to exchange data. For more information, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.

The Kore.ai XO Platform supports the following authorization types for the Twilio Verify integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Twilio Verify app to access an access token at runtime. To learn more about Twilio Verify account types, see [Twilio Verify documentation](https://www.twilio.com/docs/sms){:target="_blank"}.


## Step 1: Enable the Twilio Verify Action

**Prerequisites**:

Before enabling the Twilio Verify action, complete the following prerequisites:

* If you don’t have Twilio Verify account credentials, create a developer account in Twilio Verify and note down login credentials. Use the [Twilio Verify Documentation](https://www.twilio.com/docs/sms){:target="_blank"} for more information.
* Copy the Account SID and Auth Token values of your Twilio account and keep them for future use to enable the integration.

Steps to enable the Twilio Verify action:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Twilio Verify** action.  



### Pre-authorize the Integration

**Basic Auth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with preconfigured Kore.ai’s app with the Basic Auth option.

Steps to authorize a Twilio Verify action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Twilio Verify** action in the **Available Actions** region.
3. In the Configurations dialog, select the **Authorization** tab.
4. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **Basic Auth** option.  
    <img src="../images/twilio-action-img2.png" alt="Auth type - Basic auth" title="Auth type - Basic auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **Account SSID** – The account ssid code of your Twilio Verify account.
    3. **Auth Token** – The authorization token of your Twilio Verify account.  
    <img src="../images/twilio-action-img3.png" alt="Account SSID and Auth Token" title="Account SSID and Auth Token" style="border: 1px solid gray;zoom:50%;"/>

5. Click **Enable**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/twilio-action-img4.png" alt="Integration successful" title="Integration successful" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    The Twilio Verify action is moved from _Available_ to _Configured_ region.


### Allow the End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Twilio Verify app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize a Twilio Verify action at a user level:



1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Twilio Verify** action in the **Available Actions** region.
3. In the **Configurations** dialog, select the **Authorization** tab.
4. Enter the following details:
    1. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **Basic Auth** option.
    2. Follow below steps to create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Twilio Verify app for authorization.
    3. Click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/twilio-action-img5.png" alt="Create new authorization" title="Create new authorization" style="border: 1px solid gray;zoom:50%;"/>

    4. Select the type of authorization mechanism. For example, select the Basic Auth option. To create Basic Auth profiles, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.
    5. Enter the following authentication credentials for the Basic Auth mechanism:
        * _Name_ – Enter the name for the Basic Auth profile.
        * Select _Yes; some tasks will have tenancy URLs, and the user must provide the URLs to authenticate successfully_.
        * _Base URL_ – Enter the base tenant URL for the Twilio Verify instance.
        * _Authorization Check URL_ – Enter the authorization check URL for your Twilio Verify instance.
        * _Description_ – Enter the description of the basic authentication profile.

    6. Click **Save Auth** to save the authorization profile.  
    <img src="../images/twilio-action-img6.png" alt="Save authorization profile" title="Save authorization profile" style="border: 1px solid gray;zoom:50%;"/>

5. Select the new Authorization Profile, which you created to complete integration.
6. Click **Enable**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/twilio-action-img7.png" alt="Integration Successful" title="Integration Successful" style="border: 1px solid gray;zoom:50%;"/>

## Step 2: Install the Twilio Verify Action Templates

Once you have configured a Twilio Verify integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/twilio-action-img8.png" alt="Explore Templates" title="Explore Templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/twilio-action-img9.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. Once all templates are installed, a dialog task for each template is auto-created.  
<img src="../images/twilio-action-img10.png" alt="A dialog task for each installed template is auto-created" title="A dialog task for each installed template is auto-created" style="border: 1px solid gray;zoom:50%;"/>

5. You can also select the desired dialog task from the templates and click **Proceed**. For example, select the Send SMS task.  
<img src="../images/twilio-action-img11.png" alt="Select the desired dialog task from the templates and Proceed" title="Select the desired dialog task from the templates and Proceed" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click **Proceed**, the dialog task is auto-created, and the canvas opens with all required entity nodes, service nodes, and message scripts.  
<img src="../images/twilio-action-img12.png" alt="Dialog task is auto-created, and the canvas opens" title="Dialog task is auto-created, and the canvas opens" style="border: 1px solid gray;zoom:50%;"/>
