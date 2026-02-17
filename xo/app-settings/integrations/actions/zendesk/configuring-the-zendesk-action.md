# Configuring the Zendesk Action

The XO Platform lets you easily connect with your Zendesk instance to create, view, update, search, and delete tickets using the pre-built templates. [Learn more about Zendesk](https://developer.zendesk.com/documentation/){:target="_blank"}.

This article explains how to authorize and enable the **Zendesk** action and install the pre-built templates.


## Authorizations Supported

The Kore.ai XO Platform allows you to integrate with Zendesk using basic authorization. For more information, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.

The Kore.ai XO Platform supports the following authorization types for the Zendesk integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s Zendesk app to access an access token at runtime. To learn more about Zendesk account types, see [Zendesk documentation](https://developer.zendesk.com/documentation/){:target="_blank"}.

<table border="1">
  <tr>
   <td>
<strong>Authorization Type</strong>
   </td>
   <td><strong>Basic OAuth</strong>
   </td>
  </tr>
  <tr>
   <td>Pre-authorize the Integration
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Allow Users to Authorize the Integration
   </td>
   <td>Yes
   </td>
  </tr>
</table>



## Step 1: Enable the Zendesk Action 

**Prerequisites**:

Before enabling the Zendesk action, complete the following prerequisites:

* If you already have Zendesk account credentials, then enter it. Otherwise, create a developer account in Zendesk and note down login credentials. Use the [Zendesk Developer Documentation](https://developer.zendesk.com/documentation/){:target="_blank"} for more information.
* Copy the User sub domain, username/email, password, and API token of your Zendesk account and keep them ready to enable the integration.

Steps to enable the Zendesk action:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Zendesk** action.  



### Pre-authorize the Integration

**Basic OAuth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with the preconfigured Kore.ai app with the Basic OAuth option.

Steps to authorize a Zendesk action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **Zendesk** action in the **Available** region.
3. In the **Configurations** dialog, select the **Authorization** tab 
4. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **_Basic Auth_** option.  
    <img src="../images/zendesk-action-img2.png" alt="Auth type - Basic auth" title="Auth type - Basic auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **User Sub Domain** – The instance name of the Zendesk account.
    3. **Username or Email** – The username or email of the Zendesk account.
    
        !!! note

            You must enter **/token** after the email address to authenticate the Zendesk account. For example, `john@example.com/token`.

    4. **API Token** – The password token of the Zendesk account.  
    <img src="../images/zendesk-action-img3.png" alt="Details to authorize the integration" title="Details to authorize the integration" style="border: 1px solid gray;zoom:50%;"/>

    5. Click **Save**. When you configure the action for the first time, the **Integration Successful**  pop-up is displayed.  
    <img src="../images/zendesk-action-img4.png" alt="Integration successful" title="Integration successful" style="border: 1px solid gray;zoom:50%;"/> 

        !!! note

            The Zendesk action is moved from _Available_ to _Configured_ region.

    6. You can also click the **Skip for Now** button to install the Dialog Task templates later. To learn how to use action templates, read the [Using the Zendesk action templates](using-the-zendesk-action-templates.md){:target="_blank"} article.  
    <img src="../images/zendesk-action-img5.png" alt="Skip for now" title="Skip for now" style="border: 1px solid gray;zoom:50%;"/>  


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s Zendesk app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime.

Steps to authorize a Zendesk action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions**..
2. Select the **Zendesk** action in the **Available Actions** region.
3. In the Configurations dialog, select the **Authorization** tab.
4. Enter the following details:
    1. Select the type of authorization mechanism. For example, select the **Basic Auth** option. To create Basic Auth profiles, see [App Authorization Overview ](../../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"}.
    2. Create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s Zendesk app for authorization.
        1. Click the **Select Authorization** drop-down and select the **Create New** option  
        <img src="../images/zendesk-action-img6.png" alt="Create new auth" title="Create new auth" style="border: 1px solid gray;zoom:50%;"/>

        2. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **_Basic Auth_** option.
        3. Enter the following authentication credentials for the Basic Auth mechanism:
            * **Name** – Enter the name for the Basic Auth profile.
            * Select the option – **Yes**, some tasks will have tenancy URLs and the user will need to provide that to successfully authenticate.
            * **Base URL** – Enter the base tenant URL for Zendesk instance.
            * **Authorization Check URL** – Enter the authorization check URL for your Zendesk instance.
            * **Description** – Enter the description of the basic authentication profile.  
            <img src="../images/zendesk-action-img7.png" alt="Authentication credentials" title="Authentication credentials" style="border: 1px solid gray;zoom:50%;"/>

        4.  Click **Save Auth** to save authorization profile.

    3. Select the new **Authorization Profile** which you created to complete integration.
     
5. Click **Save**. When you configure the action for the first time, the **Integration Successful**  pop-up is displayed.

## Step 2: Install the Zendesk Action Templates

Once you have configured a Zendesk integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/zendesk-action-img8.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/zendesk-action-img9.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. Once all templates are installed, a dialog task for each template is auto-created.  
<img src="../images/zendesk-action-img10.png" alt="Dialog tasks for each installed template are auto-created" title="Dialog tasks for each installed template are auto-created" style="border: 1px solid gray;zoom:50%;"/>

5. You can also select the desired dialog task from the templates and click **Proceed**. For example, select the **Create a Ticket** task.  
<img src="../images/zendesk-action-img11.png" alt="Select the desired dialog task from the templates and Proceed" title="Select the desired dialog task from the templates and Proceed" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click **Proceed**, the dialog task is auto-created and the canvas opens with all required entity nodes, service nodes, and message scripts.  
<img src="../images/zendesk-action-img12.png" alt="Dialog task is auto-created and the canvas opens" title="Dialog task is auto-created and the canvas opens" style="border: 1px solid gray;zoom:50%;"/>
