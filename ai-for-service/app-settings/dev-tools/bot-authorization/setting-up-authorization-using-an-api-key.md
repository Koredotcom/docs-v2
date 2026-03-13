[:octicons-arrow-left-24: Back to Authorization ](bot-authentication.md)

# Setting Up Authorization using an API Key

An API key can act as both a unique identifier and a secret token for identification as well as authorization to provide a set of access rights on the associated API. Instead of prompting the end-user for both a username and password for access, the user is prompted only for an API key when configuring the assistant.

To use the API Key **Authorization Type**, you must first register an account with the web application and then generate an API Key for that application to configure the settings for the Kore.ai authorization mechanism.


## Configuring API Key Authorization

To define Authorization for your assistant, using an API Key, follow these steps:

1. Open the assistant for which you want to configure an Authorization profile.
2. From the left menus, click **App Settings**, then select **Dev Tools > Authorization Profiles**.
3. Click **New** to open the **New Authorization Mechanism** dialog. 
<img src="../images/basic-auth-img2.png" alt="Auth profiles - Add" title="Auth profiles - Add" style="border: 1px solid gray;zoom:80%;"/>

4. In the **Authorization Type** drop-down list, select **Api Key**.  
<img src="../images/api-key-img2.png" alt="Auth type - API Key" title="Auth type - API Key" style="border: 1px solid gray;zoom:80%;"/>

## Defining Tenancy

If required, in the **Subdomain** section, select **Yes** if the base URL for a web application or user interface uses a tenant name in the URL.

For example, platform is the tenant organization for a web service that uses subdomain-based tenants, such as `www.platform.example.com.`



## Adding Form Fields

If, for example, the default username and password fields do not meet your needs, you can add new fields displayed to the end-user by adding authorization IDP form fields. To add fields on the authorization form, click **Add Form Fields**.

The following table describes the fields used to define an authorization IDP form field.


<table border="1">
  <tr>
   <td><strong>FIELD NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Title of Field
   </td>
   <td>Specify the name of the field displayed to the end-user in the authentication dialog.
   </td>
  </tr>
  <tr>
   <td>Field Key
   </td>
   <td>The value represents the end-user input value to the authenticating service.
   </td>
  </tr>
  <tr>
   <td>Help Hint
   </td>
   <td>The help text displayed in the field to describe what should be entered into the field.
   </td>
  </tr>
  <tr>
   <td>Field Type
   </td>
   <td>When <strong>Advanced Options</strong> is selected, specify the type of field displayed in the end-user interface to collect the user input assigned as the value for the <strong>Field Key</strong>, one of:
<ul>

<li><strong>Textbox</strong>

<li><strong>Password</strong>
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Mandatory
   </td>
   <td>When <strong>Advanced Options</strong> is selected, select if the end-user must define this field to complete authentication.
   </td>
  </tr>
  <tr>
   <td>Data Type
   </td>
   <td>When <strong>Advanced Options</strong> is selected, specify the type of data expected as input from the end-user, for example, <strong>String</strong>.
   </td>
  </tr>
  <tr>
   <td>Visibility
   </td>
   <td>When <strong>Advanced Options</strong> is selected, specify if the authentication field should be visible, hidden, or displayed as read-only.
   </td>
  </tr>
</table>

<img src="../images/api-key-img3.png" alt="Adding Form Fields" title="Adding Form Fields" style="border: 1px solid gray;zoom:80%;"/>


## Adding Authorization Fields

By default, authorization fields are configured as part of the header of the request message. If your request needs additional authorization fields or the expected authorization is not part of the header, for example, social security number or PIN, click **Add** in the **Authorization Fields** section and then define the fields as shown in the following illustration.

<img src="../images/api-key-img4.png" alt="Adding Authorization fields" title="Adding Authorization fields" style="border: 1px solid gray;zoom:80%;"/>


1. In the **Field Type** field, you can select one of the following depending on where in the request message and the type of authorization fields that are required.
    * **Header**: The assistant expects the authorization fields as part of the header of the request.
    * **Payload**: The assistant expects the authorization fields as part of the content of the body of the request.
    * **Query String**: The assistant expects the authorization fields as a query in the body of the request.
    * **Path Param**: The assistant expects the authorization fields as part of the URL path for the request.

2. In the **Field Key** field, enter the name of the field for the selected **Field Type**.
3. In the **Field Value** field, enter the value for the **Field Key** specified.
4. Click **Add**. The new authorization field is added in the **Authorization Fields** section.

To add additional authorization fields, click **Add** in the **Authorization Fields** section.


## Authorization Check URL

In the **Authorization Check URL** field, optionally define a URL that can be used to test the authentication settings from the Platform before you deploy the AI Agent with the authorization mechanism. You can use dynamic fields, path parameter fields, query fields, and so forth, to define the test URL, for example,

[https://platform.example.com/sap/opu/odata/sap/{{authfield1}}/?$format=json](https://platform.example.com/sap/opu/odata/sap/%7B%7Bauthfield1%7D%7D/?$format=json)


## Access Using a Connector

In the **Access Using a Connector** section, select **Yes** to enable access for Kore.ai assistants using the Kore.ai Connector agent. If your domain does not have any active Kore.ai Connectors defined, a warning message is displayed to contact the Admin Console system administrator.

Click **Save** to save the authorization settings and close the **New Authorization Mechanism** dialog.


## Testing the Authorization

After you save the authentication, you can test your authorization definition when you click **Test** from the Authorization Profile page.

<img src="../images/api-key-img5.png" alt="Testing the auth" title="Testing the auth" style="border: 1px solid gray;zoom:80%;"/>


When you click **Test**, the **Test Authorization** dialog is displayed.

<img src="../images/api-key-img6.png" alt="Test Authorization dialog" title="Test Authorization dialog" style="border: 1px solid gray;zoom:80%;"/>

**To configure the Test Authorization – API Key**

1. In the **Auth Check URL** field, verify or enter the URL to test the authentication configuration.
2. If your assistant uses subdomains, the **Tenancy** field is displayed and you must specify the tenant.
3. Enter the API key for the application in the **API Key** field.
4. Select the content type expected for the URL in the **Content-Type** field.
5. For testing the URL, the **Method** field is read-only and set to **GET**.
6. Click **Test** to begin the authorization test.

When the validation of authentication is complete, the **Test Authorization** dialog is closed and the result of the validation, either success or failure, is displayed. If the authorization fails, the _Auth Test Failed_ message is displayed along with the **Headers** and **Response** tabs as shown in the following illustration.

<img src="../images/api-key-img7.png" alt="Auth test failed" title="Auth test failed" style="border: 1px solid gray;zoom:80%;"/>