# Configuring the Azure OpenAI Action

The XO Platform lets you easily connect with the Azure OpenAI instance to find answers to your general queries. The Platform supports all common actions on Azure with ready-to-use pre-built dialog templates.

This article explains how to authorize and enable the **Azure OpenAI** action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform supports basic authentication, allowing Azure OpenAI integration to exchange data. For more information, read the [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.

The Kore.ai XO Platform supports the following authorization types for the Azure OpenAI integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Azure OpenAI app to access an access token at runtime. To learn more about Azure OpenAI account types, see [Azure OpenAI Service](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service){:target="_blank"}.


## Step 1: Create an Azure OpenAI App

**Prerequisites**:

Before enabling the Azure OpenAI action, complete the following prerequisites:

* If you don’t have Azure OpenAI account credentials, create a developer account in Azure OpenAI and note down login credentials. Use the [Azure OpenAI Service Documentation](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/overview){:target="_blank"} for more information.
* Copy the _API Key_, _User Sub Domain_, and _Deployment ID_ values and keep them for future use to enable the integration.

Create an Azure OpenAI Service app and configure it on the Kore.ai XO Platform to establish a communication channel between Azure OpenAI and the Kore.ai XO Platform.

Steps to create an Azure OpenAI service:

1. Log in to the [Azure portal](https://portal.azure.com/){:target="_blank"}, and search for Azure OpenAI from the portal menu.  
<img src="../images/configure-azure-img1-azure-openai-app.png" alt="Login to Azure portal" title="Login to Azure portal" style="border: 1px solid gray;zoom:50%;"/>

2. On the Cognitive Services Azure OpenAI page, click **Create**.
<img src="../images/configure-azure-img2-azure-create.png" alt="Cognitive Services Azure OpenAI" title="Cognitive Services Azure OpenAI" style="border: 1px solid gray;zoom:50%;"/>

3. Fill in the following required details:
    1. Select an existing **Resource Group** or create a new one.
    2. Select the **Region**. For example, select the _South Central US_ region.
    3. Enter the **Name** of the Azure OpenAI service. For example, enter _PlatformIntegration_.
    4. Select the **Pricing Tier** option. For example, select the _Standard_ option.  
    <img src="../images/configure-azure-img3-create-azure-app.png" alt="Create Azure OpenAI service - provide required details" title="Create Azure OpenAI service - provide required details" style="border: 1px solid gray;zoom:50%;"/>

4. Click **Next** and then click **Review + Submit**.
5. Once the Validation Passed message appears, click **Create**.  
<img src="../images/configure-azure-img4-create-app.png" alt="Create Azure OpenAI app" title="Create Azure OpenAI app" style="border: 1px solid gray;zoom:50%;"/>

6. The Azure OpenAI service is now initialized and deployed in the portal with an endpoint URL and API Keys. Click **Go to Resource** to view the app details.  
<img src="../images/configure-azure-img5-go-to-resource.png" alt="View app details" title="View app details" style="border: 1px solid gray;zoom:50%;"/>

7. In the Overview page, copy the **User Domain Name** as shown below.  
<img src="../images/configure-azure-img6-azure-user-domain.png" alt="Copy User Domain name" title="Copy User Domain name" style="border: 1px solid gray;zoom:50%;"/>

8. In the Left Navigation Pane, select the **Keys and Endpoints** menu and click **Show Keys**, and then copy the **API Key** as shown below.  
<img src="../images/configure-azure-img7-azure-api-key.png" alt="Copy API Key" title="Copy API Key" style="border: 1px solid gray;zoom:50%;"/>

9. In the Left Navigation Pane, select **Model Deployments** and create a new deployment. For example, enter the model name as _PlatformDeploy_ and select the Model as _text-davinci-001_. Click **Save**.  
<img src="../images/configure-azure-img8-azure-deploy-model.png" alt="Select Model and Save" title="Select Model and Save" style="border: 1px solid gray;zoom:50%;"/>

10. Copy the **Model Name** of the newly created deployment as shown below.  
<img src="../images/configure-azure-img9-azure-deploy-model1.png" alt="Copy model name" title="Copy model name" style="border: 1px solid gray;zoom:50%;"/>

11. You can also copy the Azure OpenAI service credentials from the **Azure OpenAI Studio > Playground > GPT- 3 > View Code**, as shown below.  
<img src="../images/configure-azure-img10-azure-chatgpt-playground.png" alt="Copy Azure OpenAI service credentials" title="Copy Azure OpenAI service credentials" style="border: 1px solid gray;zoom:50%;"/>


## Step 2: Enable the Azure OpenAI Action

Once you have created an Azure OpenAI service and copied the required credentials, you can enable the integration.

Steps to enable the Azure OpenAI action:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Azure OpenAI** action.  



### Pre-authorize the Integration

**Basic Auth**: You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with the preconfigured Kore.ai app with the Basic Auth option.

Steps to authorize the Azure OpenAI action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Azure OpenAI** action.
2. In the Configurations dialog, select the **Authorization** tab.
3. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **Basic Auth** option.  
    <img src="../images/configure-azure-img12-azure-openai-config-change.png" alt="Authorization Type-Basic Auth" title="Authorization Type-Basic Auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **API Key** – The secret API key of your Azure OpenAI service, which you copied in Step 1.

        !!! note

            The Platform uses the configured API Key to authorize and generate the suggestions from OpenAI.

    3. **User Sub Domain** – The domain name of the Azure OpenAI service, which you copied in Step 1.
    4. **Deployment ID** – The deployment ID/model name of the Azure OpenAI service, which you copied in Step 1.

        !!! note

            You can enter the deployment ID for _ChatGPT-3_ or _ChatGPT-3.5_ model to configure the GPT model for the Azure Open AI integration

4. Click **Enable**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/configure-azure-img13-azure-action6.png" alt="Enable Integration" title="Enable Integration" style="border: 1px solid gray;zoom:50%;"/>  

!!! note

    The Azure OpenAI action is moved from Available to Configured region.


### Allow the End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Azure OpenAI app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize an Azure OpenAI action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions** and select the **Azure OpenAI** action in the **Available Actions** region.
2. In the **Configurations** dialog, select the **Authorization** tab.
3. Enter the following details:
    1. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **Basic Auth** option.
    2. Create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Azure OpenAI app for authorization.
    3. Click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/configure-azure-img14-azure-action2.png" alt="Create new authorization" title="Create new authorization" style="border: 1px solid gray;zoom:50%;"/>

    4. Select the type of authorization mechanism. For example, select the API Key option.  
    <img src="../images/configure-azure-img15-open-ai-api-key1-1.png" alt="Select authorization mechanism" title="Select authorization mechanism" style="border: 1px solid gray;zoom:50%;"/>  
      
        To create Basic Auth profiles, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.

    5. Enter the following authentication credentials for the Basic Auth mechanism:
        * _Name_ – Enter the name for the Basic Auth profile.
        * Select _Yes; some tasks will have tenancy URLs, and the user must provide the URLs to authenticate successfully_.
        * _Base URL_ – Enter the base tenant URL for the Azure OpenAI instance.
        * _Authorization Check URL_ – Enter the authorization check URL for your Azure OpenAI instance.
        * _Description_ – Enter the description of the basic authentication profile.

    6. Click **Save Auth** to save the authorization profile.  
    <img src="../images/configure-azure-img16-azure-action3.png" alt="Save Authorization" title="Save authorization" style="border: 1px solid gray;zoom:50%;"/>

    7. Select the new Authorization Profile you created to complete integration.

4. Click **Enable**. When you configure the action for the first time, the Integration Successful pop-up is displayed.  
<img src="../images/configure-azure-img17-azure-action5.png" alt="Enable integration" title="Enable integration" style="border: 1px solid gray;zoom:50%;"/>


## Step 3: Install the Azure OpenAI Action Templates

Once you have configured an Azure OpenAI integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the Explore Templates button to view the templates.  
<img src="../images/configure-azure-img18-azure-action6.png" alt="Explore Templates" title="Explore Templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/configure-azure-img19-azure-action7.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>



3. Once the template is installed, the associated dialog task is auto-created and displayed on the Dialogs page. Click **Go to Dialog** or go to **Automation AI** > **Use Cases** > **Dialogs**.

4. To start using the templates, see [Using Azure OpenAI Templates.](using-the-azure-openai-action-templates.md){:target="_blank"}
