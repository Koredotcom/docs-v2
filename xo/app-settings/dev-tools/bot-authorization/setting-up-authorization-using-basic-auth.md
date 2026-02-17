[:octicons-arrow-left-24: Back to Authorization ](bot-authentication.md)

# Setting Up Authorization using Basic Auth

When basic authorization is used for a task, the XO Platform automatically prompts the user for login credentials to access the web application or web service, as shown in the following illustration.

<img src="../images/basic-auth-img1.png" alt="Login" title="Login" style="border: 1px solid gray;zoom:50%;"/>

After the end-user is authorized, the settings are saved using the following naming syntax:

```
{{ First Name }} {{ Last Name }} {{ App Name }} {{ Account # }} {{ Sequence # }}
```

For example, John Smith’s Twitter Account #1.

The XO Platform can access the web application or web service for all future task requests using this account. In addition, the end-user can reuse the account for other tasks for the same AI Agent.

You need to have an account with the external application which you want to authorize the XO Platform for.


## Configuring Basic Authorization

To define Basic Authorization for your assistant, follow these steps:

1. Open the AI Agent for which you want to configure the Basic Authorization profile.
2. From the left menus, click **App Settings**, then select **Dev Tools > Authorization Profiles**.
3. Click **New** to open the **New Authorization Mechanism** dialog.  
<img src="../images/basic-auth-img2.png" alt="New Auth mechanism - Add" title="New Auth mechanism - Add" style="border: 1px solid gray;zoom:50%;"/>

4. In the **Authorization Type** drop-down list, select **Basic Auth**.
5. In the **Name** field, enter the name for your **Basic Auth** type.  
<img src="../images/basic-auth-img3.png" alt="Auth Name and Type" title="Auth Name and Type" style="border: 1px solid gray;zoom:50%;"/>

6. Enter the **Description** for the profile and select the API endpoint **Method**. You can select either **GET** or **POST** method.  
<img src="../images/basic-auth-img4.png" alt="Description and Endpoint Method" title="Description and Endpoint Method" style="border: 1px solid gray;zoom:50%;"/>

    !!! Note
        
        By default, the GET method is selected for the existing apps.

7. Click **Save**.


## Defining Tenancy

If required, in the **Subdomain** section, select **Yes** if the base URL for a web application or user interface uses a tenant name in the URL. For example, platform is the tenant organization for a web service that uses subdomain-based tenants, such as `www.platform.example.com.`


In the following example configuration, the tenancy URL contains the {tenant} organization placeholder.

<img src="../images/basic-auth-img5.png" alt="Defining Tenancy" title="Defining Tenancy" style="border: 1px solid gray;zoom:50%;"/>


## Adding Form Fields 

If the default username and password fields do not meet your needs for authorization input, you can add custom fields displayed to the end-user by adding authorization IDP form fields. You can use these form fields. For example, if PIN code is required in the authorization process, in addition to the **Username** and **Password** form fields.

<img src="../images/basic-auth-img6.png" alt="Adding Form Fields" title="Adding Form Fields" style="border: 1px solid gray;zoom:50%;"/>


## Defining Configuration Fields

The following table describes the fields used to define an authorization IDP form field.

<table border="1">
  <tr>
   <td><strong>FIELD NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Field Title
   </td>
   <td>Specify the name of the field displayed to the end-user in the authorization dialog.
   </td>
  </tr>
  <tr>
   <td>Field Key
   </td>
   <td>The value that represents the end-user input value to the authorizing service.
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
   <td>When <strong>Advanced Options</strong> is selected, select if the end-user must define this field to complete the authorization.
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
   <td>When <strong>Advanced Options</strong> is selected, specify if the authorization field should be visible, hidden, or displayed as read-only.
   </td>
  </tr>
</table>



## Adding Authorization Fields

By default, authorization fields are configured as part of the header of the request message. If your request requires additional authorization fields or the expected authorization is not part of the header, for example, social security number or PIN, click **Add Authorization Fields** and then define the required fields.

<img src="../images/basic-auth-img7.png" alt="Adding Authorization Fields" title="Adding Authorization Fields" style="border: 1px solid gray;zoom:50%;"/>

1. In the **Field Type** field, you can select one of the following depending on where in the request message and the type of authorization fields that are required.
    * **Header**: The AI Agent looks for the authorization fields in the request header.
    * **Payload**: The AI Agent looks for the authorization fields in the request body content.
    * **Query String**: The AI Agent looks for the authorization fields as a query in the request body.
    * **Path Param**: The AI Agent looks for the authorization fields in the request URL path.

2. In the **Field Key** field, enter the name of the field for the selected **Field Type**.
3. In the **Field Value** field, enter the value for the **Field Key** specified.
4. Click **Done**. The new authorization field is added in the **Authorization Fields** section.


## Authorization Check URL

In the **Authorization Check URL** field, optionally define a URL that can be used to test the authorization settings from the XO Platform before you deploy the assistant with the authorization mechanism. You can use dynamic fields, path parameter fields, query fields, and so forth, to define the test URL.

For example, `https://platform.example.com/sap/opu/odata/sap/{{authfield1}}/?$format=json` or `https://{tenant}.service-now.com/api/now/v1/table/incident`.

For more information, see [Using Session and Context Variables in Tasks](../../../automation/use-cases/using-session-and-context-variables.md){:target="_blank"}.

Click **Save** to save the authorization settings and close the **New Authorization Mechanism** dialog.

## Testing the Authorization 

Once you save the authorization settings, you can test your authorization definition when you click **Test** from the Authorization Profile page.

<img src="../images/basic-auth-img8.png" alt="Auth profile - Test" title="Auth profile - Test" style="border: 1px solid gray;zoom:50%;"/>

To configure testing for Basic Auth, please follow the steps below:

1. In the **Auth Check URL** field, verify or enter the URL to test the authorization configuration.
2. If your assistant uses subdomains, the **Tenancy** field is displayed and you must specify the tenant.
3. Enter your **User Name** and **Password** for the web service.
4. Select the content type expected for the URL in the **Content-Type** field.
5. Select the **Method** for testing the URL, You can select either the **GET** or **POST** method .
6. Click **Test** to begin the authorization test.

<img src="../images/basic-auth-img9.png" alt="Testing the Authorization" title="Testing the Authorization" style="border: 1px solid gray;zoom:50%;"/>

When the validation of authorization is complete, the **Test Authorization** dialog closes and you can see the results of the validation, either success or failure.

If the authorization fails, the _Auth Test Failed_ message is displayed along with the **Headers** and **Response** tabs.

<img src="../images/basic-auth-img10.png" alt="Auth test failed" title="Auth test failed" style="border: 1px solid gray;zoom:50%;"/>