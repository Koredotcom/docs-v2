# Configuring the Stripe Action

The XO Platform lets you easily connect the Stripe integration and APIs to accept payments, send payouts, and manage the Stripe payment to complete payment-related tasks.

This article explains how to authorize and enable the **Stripe** action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports basic authentication to allow Stripe integration to exchange data. For more information, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.

The Kore.ai XO Platform supports the following authorization types for the Stripe integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Stripe app to access an access token at runtime. To learn more about Stripe account types, see [Stripe Documentation](https://stripe.com/docs){:target="_blank"}.


## Step 1: Enable the Stripe Action

**Prerequisites**:

Before enabling the Stripe action, complete the following prerequisites:

* If you don’t have Stripe account credentials, create a developer account in Stripe and note down login credentials. Use the [Stripe Documentation](https://stripe.com/docs){:target="_blank"} for more information.
* Copy the API Key of your Stripe account and keep it for future use to enable the integration.

Steps to enable the Stripe action:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Stripe** action.  



### Pre-authorize the Integration

**Basic Auth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with preconfigured Kore.ai’s app with the **Basic Auth** option.

Steps to authorize a Stripe action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Stripe** action in the Available Actions region.
3. In the **Configurations** dialog, select the **Authorization** tab.
4. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **Basic Auth** option.  
    <img src="../images/stripe-action-img2.png" alt="Auth type - Basic auth" title="Auth type - Basic auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **API Key** – The secret API key of your Stripe account.

5. Click **Enable**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/stripe-action-img3.png" alt="Integration successful" title="Integration Successful" style="border: 1px solid gray;zoom:50%;"/>

!!! note

    The Stripe action is moved from _Available_ to _Configured_ region.


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Stripe app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize a Stripe action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Stripe** action in the Available Actions region.
3. In the Configurations dialog, select the **Authorization** tab.
4. Enter the following details:
    1. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **Basic Auth** option.
    2. Create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Stripe app for authorization. To create a profile, click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/stripe-action-img4.png" alt="Create new auth" title="Create new auth" style="border: 1px solid gray;zoom:50%;"/>

    3. Select the type of authorization mechanism. For example, select the **Basic Auth** option. To create Basic Auth profiles, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.
    4. Enter the following authentication credentials for the Basic Auth mechanism:
        * _Name_ – Enter the name for the Basic Auth profile.
        * Select _No_ for the tenancy URLs option.
        * _Base URL_ – Enter the base tenant URL for the Stripe instance.
        * _Authorization Check URL_ – Enter the authorization check URL for your Stripe instance.
        * _Description_ – Enter the description of the basic authentication profile.

        <img src="../images/stripe-action-img5.png" alt="Auth credentials" title="Auth credentials" style="border: 1px solid gray;zoom:50%;"/>

    5. Click **Save Auth** to save the authorization profile.

5. Select the new **Authorization Profile**, which you created to complete integration.  
<img src="../images/stripe-action-img6.png" alt="Select auth profile to complete integration" title="Select auth profile to complete integration" style="border: 1px solid gray;zoom:50%;"/>

6. Click **Enable**. When you configure the action for the first time, the **Integration Successful** pop-up is displayed.


## Step 2: Install the Stripe Action Templates

Once you have configured a Stripe integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/stripe-action-img7.png" alt="Explore Templates" title="Explore Templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/stripe-action-img8.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. Once all templates are installed, a dialog task for each template is auto-created.  
<img src="../images/stripe-action-img9.png" alt="Dialog task for each template" title="EDialog task for each template" style="border: 1px solid gray;zoom:50%;"/>

5. Select the desired dialog task from the templates and click **Proceed**. For example, select the Create Customer task.  
<img src="../images/stripe-action-img10.png" alt="Select desired dialog task and proceed" title="Select desired dialog task and proceed" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click Proceed, the dialog task is auto-created, and the canvas opens with all required entity nodes, service nodes, and message scripts.  
<img src="../images/stripe-action-img11.png" alt="Dialog task canvas" title="Dialog task canvas" style="border: 1px solid gray;zoom:50%;"/>
