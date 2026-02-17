# Configuring the OpenAI Action

The XO Platform lets you easily connect with OpenAI to generate answers to your queries and extract skills from documents.

This article explains how to authorize and enable the **OpenAI** action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports basic authentication to allow OpenAI integration to exchange data. For more information, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.

The Kore.ai XO Platform supports the following authorization types for the OpenAI integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s OpenAI app to access an access token at runtime. To learn more about OpenAI account types, see [OpenAI documentation](https://platform.openai.com/docs/api-reference/authentication){:target="_blank"}.


## Step 1: Enable the OpenAI Action

**Prerequisites**:

Before enabling the OpenAI action, complete the following prerequisites:

* If you already have OpenAI account credentials, then enter them.  Otherwise, create a developer account in the OpenAI and note down login credentials. Use the [OpenAI Documentation](https://platform.openai.com/docs/api-reference/introduction){:target="_blank"} for more information.
* Copy the API Key of your OpenAI account and keep it for future use to enable the integration.

Steps to enable the OpenAI action:


1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **OpenAI** action.  


### Pre-authorize the Integration

**Basic Auth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with preconfigured Kore.ai app with the Basic Auth option.

Steps to authorize an OpenAI action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **OpenAI** action in the **Available Actions** region.
3. In the **Configurations** dialog, select the **Authorization** tab.
4. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **Basic Auth** option.
    2. **API Key** – The secret API key of your OpenAI account.  
    <img src="../images/open-ai-action-img2.png" alt="Auth Type and API Key" title="Auth type and API key" style="border: 1px solid gray;zoom:50%;"/>

    !!! note

        The Platform uses the configured API Key to authorize and generate the suggestions from OpenAI.

5. Click **Enable**. When you configure the action for the first time, the **Integration Successful**  pop-up is displayed.  
<img src="../images/open-ai-action-img3.png" alt="Enable integration" title="Enable integration" style="border: 1px solid gray;zoom:50%;"/>

!!! note

     You will notice the OpenAI action is moved from _Available_ to _Configured_ region.


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s OpenAI app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize an OpenAI action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **OpenAI** action in the **Available Actions** region.
3. In the Configurations dialog, select the **Authorization** tab
4. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **Basic Auth** option.  
<img src="../images/open-ai-action-img4.png" alt="Auth type - Basic Auth" title="Auth type - Basic Auth" style="border: 1px solid gray;zoom:50%;"/>

5. Create your own authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s OpenAI app for authorization.

    * Click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/open-ai-action-img5.png" alt="Create new Auth" title="Create new Auth" style="border: 1px solid gray;zoom:50%;"/>

    * Select the type of authorization mechanism. For example, select the **API Key** option. To create Basic Auth profiles, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.  
    <img src="../images/open-ai-action-img6.png" alt="Auth mechanism - API Key" title="Auth mechanism - API Key" style="border: 1px solid gray;zoom:50%;"/>

    * Enter the following authentication credentials for the Basic Auth mechanism:
        * _Name_ – Enter the name for the Basic Auth profile.
        * Select the _Yes, some tasks will have tenancy URLs, and the user will need to provide that to successfully authenticate_ option.
        * _Base URL_ – Enter the base tenant URL for OpenAI instance.
        * _Authorization Check URL_ – Enter the authorization check URL for your OpenAI instance.
        * _Description_ – Enter the description of the basic authentication profile.

    * Click **Save Auth** to save authorization profile.  
    <img src="../images/open-ai-action-img7.png" alt="Save auth profile" title="Save auth profile" style="border: 1px solid gray;zoom:50%;"/>

5. Select the new **Authorization Profile,** which you created to complete integration.  
<img src="../images/open-ai-action-img8.png" alt="Select auth profile to complete integration" title="Select auth profile to complete integration" style="border: 1px solid gray;zoom:50%;"/>

2. Click **Enable**. When you configure the action for the first time, the **Integration Successful**  pop-up is displayed.


## Step 2: Install the OpenAI Action Templates

Once you have configured an OpenAI integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/open-ai-action-img9.png" alt="Explore Templates" title="Explore Templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/open-ai-action-img10.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. Once all templates are installed, a dialog task for each template is auto-created.  
<img src="../images/open-ai-action-img11.png" alt="Dialog task for each template" title="Dialog task for each template" style="border: 1px solid gray;zoom:50%;"/>

5. You can also select the desired dialog task from the templates and click **Proceed**. For example, select the **Extract Skills from the resume** task.  
<img src="../images/open-ai-action-img12.png" alt="Select desired task from template" title="Select desired task from template" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click **Proceed**, the dialog task is auto-created, and the canvas opens with all required entity nodes, service nodes, and message scripts.  
<img src="../images/open-ai-action-img13.png" alt="dialog task is auto-created" title="dialog task is auto-created" style="border: 1px solid gray;zoom:50%;"/>
