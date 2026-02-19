# Configuring the ServiceNow Action

The XO Platform lets you easily connect the ServiceNow integration to create, view, update, search and delete incidents. You can also create, view, update, search and delete requests using the pre-built templates. Click the [ServiceNow](https://www.servicenow.com/) link to know more. 

This article explains how to authorize and enable the **ServiceNow** action and install the pre-built templates.

!!! note

    ServiceNow Actions Integration is supported for the ServiceNow cloud versions (Tokyo, Utah, and Vancouver) but not for on-premises instances.

## Authorizations Supported

The Kore.ai XO Platform supports only basic authentication to allow a ServiceNow integration to exchange data. For more information, see [App Authorization Overview](../../../dev-tools/bot-authorization/bot-authentication.md). 

The Kore.ai XO Platform supports the following authorization types for the ServiceNow integration:

* **Pre-Authorize the Integration** – To make the integration process smoother for developers and customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token. 
* **Allow Users to Authorize the Integration** – This method requires the end user to provide credentials during the conversation for authorization. This authorization process involves requesting permission for Kore.ai’s ServiceNow app to access an access token at runtime. To learn more about ServiceNow account types, see [ServiceNow documentation](https://docs.servicenow.com/en-US/bundle/tokyo-servicenow-platform/page/administer/subscription-management/reference/types-subscription.html){:target="_blank"}.

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



## Step 1: Enable the ServiceNow Action 

**Prerequisites**:

Before enabling the ServiceNow action, complete the following prerequisites:

* If you already have ServiceNow account credentials, then enter it.  Otherwise, create a developer account in the ServiceNow and note down login credentials. Use the [ServiceNow Developer Instance Documentation](https://developer.servicenow.com/dev.do#!/learn/learning-plans/rome/new_to_servicenow/app_store_learnv2_buildmyfirstapp_rome_personal_developer_instances) for more information.
* Copy the User sub domain, username/email and password of your ServiceNow account and keep them ready to enable the integration.

Steps to enable the ServiceNow action:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **ServiceNow** action.  


### Pre-authorize the Integration

**Basic OAuth**

You can authorize the integration using your credentials. The developer authorization lets you authorize the integration with preconfigured Kore.ai’s app with the Basic OAuth option. 

Steps to authorize a ServiceNow action using developer credentials:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **ServiceNow** action in the **Available Actions** region.
3. In the **Configurations** dialog, select the **Authorization** tab 
4. Enter the following details:
    1. **Authorization Type** – Select the **Pre-authorize the Integration** option, and then select the **_Basic Auth_** option.  
    <img src="../images/servicenow-action-img2.png" alt="Authorization type - Basic auth" title="Authorization type - Basic auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **User Sub Domain** – The instance name of the ServiceNow account.
    3. **Username or Email** – The username or email of the ServiceNow account.
    4. **Password** – The password of the ServiceNow account.
    
5. Click **Enable**. When you configure the action for the first time, the **Integration Successful**  pop-up is displayed.  
<img src="../images/servicenow-action-img3.png" alt="Integration successful" title="Integration successful" style="border: 1px solid gray;zoom:50%;"/>


### Allow End User to Authorize

You can authorize the integration at a user level with their login credentials. The user authorization process involves requesting permission for Kore.ai’s ServiceNow app to access an access token at runtime. You can also use the basic auth profile to let a user configure the integration at runtime. 

Steps to authorize a ServiceNow action at a user level:

1. Go to **App Settings** > **Integrations** > **Actions**.
2. Select the **ServiceNow** action in the **Available Actions** region.
3. In the Configurations dialog, select the **Authorization** tab.
4. Select the type of authorization mechanism. For example, select the **Basic Auth** option. To create Basic Auth profiles, see [App Authorization Overview ](../../../dev-tools/bot-authorization/bot-authentication.md).  
<img src="../images/servicenow-action-img4.png" alt="Auth mechanism -- Basic auth" title="Auth mechanism -- Basic auth" style="border: 1px solid gray;zoom:50%;"/>

5. Create your own authorization profile to obtain an access token and use it to complete integration without using Kore.ai’s ServiceNow app for authorization.
    1. Click the **Select Authorization** drop-down and select the **Create New** option.  
    <img src="../images/servicenow-action-img5.png" alt="Create new auth" title="Create new auth" style="border: 1px solid gray;zoom:50%;"/>

    2. **Authorization Type** – Select the **Allow Users to Authorize the Integration** option, and then select the **_Basic Auth_** option.
    3. Enter the following authentication credentials for the Basic Auth mechanism:
        * **Name** – Enter the name for the Basic Auth profile.
        * Select the _Yes, some tasks will have tenancy URLs and the user will need to provide that to successfully authenticate_ option.
        * **Base URL** – Enter the base tenant URL for ServiceNow instance.
        * **Authorization Check URL** – Enter the authorization check URL for your ServiceNow instance.
        * **Description** – Enter the description of the basic authentication profile.  
        <img src="../images/servicenow-action-img6.png" alt="Auth credentials" title="Auth credentials" style="border: 1px solid gray;zoom:50%;"/>

    4. Click **Save Auth** to save authorization profile.

6. Select the new **Authorization Profile**, which you created to complete integration.  
<img src="../images/servicenow-action-img7.png" alt="Select Auth profile" title="Select Auth profile" style="border: 1px solid gray;zoom:50%;"/>

7. Click **Enable**. When you configure the action for the first time, the **Integration Successful**  pop-up is displayed.


## Step 2: Install the ServiceNow Action Templates

Once you have configured a ServiceNow integration, you can explore and install action templates.

Steps to install action templates:

1. On the Integration Successful dialog, click the **Explore Templates** button to view the templates.  
<img src="../images/servicenow-action-img8.png" alt="Explore templates" title="Explore templates" style="border: 1px solid gray;zoom:50%;"/>

2. In the Integration Templates dialog, click the **Install** button to begin the installation.  
<img src="../images/servicenow-action-img9.png" alt="Begin installation" title="Begin installation" style="border: 1px solid gray;zoom:50%;"/>

3. Once the template is installed, click the **Go to Dialog** button to view the dialog task.
4. Once all templates are installed, a dialog task for each template is auto-created.  
<img src="../images/servicenow-action-img10.png" alt="Dialog tasks for each template" title="Dialog tasks for each template" style="border: 1px solid gray;zoom:50%;"/>

5. You can also select the desired dialog task from the templates and click **Proceed**. For example, select the **Create an Incident** task.  
<img src="../images/servicenow-action-img11.png" alt="Select desired dialog task and proceed" title="Select desired dialog task and proceed" style="border: 1px solid gray;zoom:50%;"/>

6. Once you click **Proceed**, the dialog task is auto-created and the canvas opens with all required entity nodes, service nodes, and message scripts.