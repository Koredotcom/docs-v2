# Alert Task – OAuth v2 Password Grant Type

We have seen how an [Alert task](../use-cases/alert-tasks.md) can be set up in the Platform. In this article , we will see how authorization for the alert tasks can be set up using the OAuth v2 with password grant.

## General Setup

OAuth v2 is the new version of the open protocol to allow secure authorization in a simple and standard method from web, mobile, and desktop applications. To use oAuth v2, you must first register an account with the web application as you will need the log-in credentials for that application to configure the settings for the Authorization Mechanism.

To begin your configuration, follow the steps below:

1. Select the App you want to work with.
2. Go to **Build** > **Conversation Skills** > **Alert Tasks**. 
3. Select the task you want to work with. 
4. Click the **API Request** tab within the Alert Task.
5. Expand the **Authorization** section and click **Create New** to configure a new authorization.
<img src="../images/create-new-authorization.png" alt="create new authorization" title="create new authorization" style="border: 1px solid gray; zoom:75%;"> 

6. Next, the **New Authorization Mechanism** window opens, as shown in the illustration below.  
<img src="../images/new-auth-mechanism-password.png" alt="new auth mechanism" title="new auth mechanism" style="border: 1px solid gray; zoom:75%;">

To define a custom authorization, select **oAuth v2 password grant** in the **Authorization Type** field. Then specify a **Name** for the authorization to be displayed in the XO Platform  user interface. Next, configure each section as follows:

## Tenancy

If required, in the **Subdomain** section, select **Yes** if the base URL for a web application or user interface uses a tenant name in the URL. For example, platform is the tenant organization for a web service that uses subdomain-based tenants, such as `www.platform.example.com.`


In the following example configuration, the tenancy URL contains the {tenant} organization placeholder.

<img src="../images/set-tenancy.png" alt="set tenancy" title="set tenancy" style="border: 1px solid gray; zoom:75%;">

## Form Fields

If the default username and password fields do not meet your needs, you can add new fields displayed to the end-user by adding authorization form fields. To add fields on the authorization form, click **+ Add Form Field**.

The following illustration is an example of a definition to add a password field to the authorization dialog.

<img src="../images/add-password-field.png" alt="add password field" title="add password field" style="border: 1px solid gray; zoom:75%;">

The following table describes the fields used to define an authorization IDP form field.

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>FIELD NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Field Title
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

## Authorization Fields

By default, authorization fields are configured as part of the header of the task request message. If your task request requires additional authorization fields or the expected authorization is not part of the header, for example, social security number or PIN, click **+ Add Authorization Field** and then define the fields as shown in the following illustration.
<img src="../images/auth-fields-oauth.png" alt="auth fields oauth" title="auth fields oauth" style="border: 1px solid gray; zoom:75%;">

1. In the **Field Type** field, you can select one of the following depending on where in the task request message and the type of authorization fields that are required.
    * **Header** – The AI Agent expects the authorization fields as part of the header of the request.
    * **Payload** – The AI Agent expects the authorization fields as part of the content of the body of the request.
    * **Query String** – The AI Agent expects the authorization fields as a query in the body of the request.
    * **Path Param** – The AI Agent expects the authorization fields as part of the URL path for the request.
2. In the **Field Key** field, enter the name of the field for the selected **Field Type**.
3. In the **Field Value** field, enter the value for the **Field Key** specified.
4. Click **Done**. The new authorization field is added in the **Authorization Fields** section.
5. To add additional authorization fields, click **Add** in the **Authorization Fields** section.

## Token URL

To define the token URL, follow the below steps:

1. In the **Token URL** field, optionally define a URL that can be used to test the authentication settings from the XO Platform  before you deploy the task with the authorization mechanism. You can use dynamic fields, path parameter fields, query fields, and so forth, to define the test URL, for example, 
<code>http://{tenant}.example.com/test/{{tokenId}}</code>

2. In the **Token URL Method** field, select the HTTP request method type for the **Token URL**. One of **PUT**, **POST**, **PATCH**, **DELETE,** and **GET**.
3. In the **Token URL Content Type** field, select the content type expected from the **Token URL**. One of: **JSON, RSS, XML, URL Encoded JSON, CSV, Text, Twitter Encoded JSON, Multipart/Form-data,Multipart/Related**, or **Oracle ADF**.
4. In the **Refresh Token URL**, enter the refresh token URL if required. 
5. For situations when there may be authentication errors, enter the **Auth Error Status Code**.
6. Click **Save Auth** to save the authorization settings and close the **New Authorization Mechanism** dialog.

## Testing

To test your authorization, follow the below steps:

1. After you save the authentication, if you have defined an **Authorization URL** for your new authorization type, you can test your authorization definition on the **Authorization** page when you click **Test Authorization** before continuing to develop the remaining steps of your task.
<img src="../images/click-test-authorization.png" alt="click test auth" title="click test auth" style="border: 1px solid gray; zoom:75%;">

2. After you click **Test Authorization**, the **Test Authorization** window is displayed and populated with the URL you specified in the **Authorization Check URL** section, as shown in the following illustration.

    <img src="../images/test-auth-url.png" alt="test auth url" title="test auth url" style="border: 1px solid gray; zoom:75%;">

3. Click **Test** to begin the authorization test. When the validation of authentication is complete, the **Test Authorization** window is closed and the results of the validation, either success or failure, is displayed to the immediate right of the **Test Authorization** button. If the authorization fails, the _Auth Test Failed_ message is displayed along with the **Headers** and **Response** tabs as shown in the following illustration. 
<img src="../images/configure-test-authorization.png" alt="auth fails message" title="auth fails message" style="border: 1px solid gray; zoom:75%;">
