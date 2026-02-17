[:octicons-arrow-left-24: Back to Authorization ](bot-authentication.md)

# Setting Up Authorization using oAuth v2 password grant

OAuth v2 is the new version of the open protocol to allow secure authorization in a standardized manner from web, mobile, and desktop applications. 

To use this authorization method, you must first register an account with the web application as you will need the log-in credentials for that application to configure the settings for the Authorization Mechanism.


## How oAuth v2 Password Grant Type Works

The oAuth v2 Password grant type authorization method allows apps to exchange a user’s credentials for an access token. 



1. The Platform redirects the user to a login dialog at the web application.
2. The user authenticates.
3. The web application redirects the user back to the XO Platform with an access token.
4. The Platform validates the access token.
5. The access token allows the XO Platform to access a protected resource at the provider, on behalf of the user.


## Configuring oAuth v2 Using Password Grant Type

To define Authorization for your assistant, using oAuth v2 password grant, please follow these steps:

1. Open the assistant for which you want to configure an Authorization profile.
2. From the left menu, click **App Settings**, then select **Dev Tools > Authorization Profiles**.
3. Click **New** to open the **New Authorization Mechanism** dialog.  
<img src="../images/basic-auth-img2.png" alt="Auth profile - Add" title="Auth profile - Add" style="border: 1px solid gray;zoom:80%;"/>

4. In the **Authorization Type** drop-down list, select **oAuth v2 password grant type**.
5. Enter a **Name** for your authorization, then define the fields to enable it.  
<img src="../images/oauth-v2-password-grant-img2.png" alt="Define fields to enable auth" title="Define fields to enable auth" style="border: 1px solid gray;zoom:80%;"/>

The illustration and sections below show an overview of the needed configurations.


## Defining Tenancy

If required, in the **Subdomain** section, select **Yes** if the base URL for a web application or user interface uses a tenant name in the URL. For example, platform is the tenant organization for a web service that uses subdomain-based tenants, such as `www.platform.example.com.`


In the following example configuration, the tenancy URL contains the {tenant} organization placeholder.

<img src="../images/oauth-v2-password-grant-img3.png" alt="Defining Tenancy" title="Defining Tenancy" style="border: 1px solid gray;zoom:80%;"/>

## Adding Form Fields

If, for example, the default username and password fields do not meet your needs for authorization input, you can add custom fields displayed to the end-user by adding authorization IDP form fields. You can use these form fields, for example, if PIN code is required in the authorization process.

To add fields on the authorization form, click **Add Form Fields**, then configure the necessary parameters for each field. The following table describes the fields used to define an authorization form field.


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
   <td>Specify the name of the field displayed to the end-user in the authorization dialog.
   </td>
  </tr>
  <tr>
   <td>Field Key
   </td>
   <td>The value represents the end-user input value to the authorizing service.
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

<img src="../images/oauth-v2-password-grant-img4.png" alt="Adding form fields" title="Adding form fields" style="border: 1px solid gray;zoom:80%;"/>


## Adding Authorization Fields

By default, authorization fields are configured as part of the header of the request message. If your request requires additional authorization fields or the expected authorization is not part of the header, for example, social security number or PIN, click **Add** **Authorization Fields** and then define the fields as shown in the following illustration.

<img src="../images/oauth-v2-password-grant-img5.png" alt="Adding authorization fields" title="Adding authorization fields" style="border: 1px solid gray;zoom:80%;"/>


1. In the **Field Type** field, you can select one of the following depending on where in the request message and the type of authorization fields that are required.
    * **Header** – The assistant expects the authorization fields as part of the header of the request.
    * **Payload** – The assistant expects the authorization fields as part of the content of the body of the request.
    * **Query String** – The assistant expects the authorization fields as a query in the body of the request.
    * **Path Param** – The assistant expects the authorization fields as part of the URL path for the request.

2. In the **Field Key** field, enter the name of the field for the selected **Field Type**.
3. In the **Field Value** field, enter the value for the **Field Key** specified.
4. Click **Done**. The new authorization field is added in the **Authorization Fields** section.


## Defining the Token URLs

In the **Token URL** field, optionally define a URL that can be used to test the authorization settings from XO Platform before you deploy the AI Agent with the authorization mechanism. You can use dynamic fields, path parameter fields, query fields, and so forth, to define the test URL, for example,

http://{tenant}.example.com/test/{{tokenId}}

In the **Token URL Method** field, select the HTTP request method type for the **Token URL**. One of **PUT, POST, PATCH, DELETE**, and **GET**.

In the **Token URL Content Type** field, select the content type expected from the **Token URL**. One of: **JSON, RSS, XML, URL Encoded JSON, CSV, Text, Twitter Encoded JSON, Multipart/Form-data,Multipart/Related**, or **Oracle ADF**.

In the **Refresh Token URL**, enter the refresh token URL if required. 

For situations when there may be authentication errors, enter the **Auth Error Status Code**.


## Access using the Connector

In the **Access Using a Connector** section, select **Yes** to enable access for AI Agent using the Kore.ai Connector agent. If your domain does not have any active Kore.ai Connectors defined, a warning message is displayed to contact the Admin Console System Administrator.

Click **Save Auth** to save the authorization settings and close the **New Authorization Mechanism** dialog.


## Testing the Authorization 

After you save the authorization, you can test your authorization definition when you click **Test** from the Authorization Profile page. 

<img src="../images/oauth-v2-password-grant-img6.png" alt="Testing the authorization" title="Testing the authorization" style="border: 1px solid gray;zoom:80%;"/>

When you click **Test**, the **Test Authorization** dialog is displayed and populated with the URL you specified in the **Authorization Check URL** section. Click **Test** to begin the authorization test. 

<img src="../images/oauth-v2-password-grant-img7.png" alt="Test authorization dialog" title="Test authorization dialog" style="border: 1px solid gray;zoom:80%;"/>


When the validation of authorization is complete, the **Test Authorization** dialog is closed and the results of the validation, either success or failure, is displayed to the immediate right of the **Test** button. If the authorization fails, the _Auth Test Failed_ message is displayed along with the **Headers** and **Response** tabs as shown in the following illustration.

<img src="../images/oauth-v2-password-grant-img8.png" alt="Test result" title="Test result" style="border: 1px solid gray;zoom:80%;"/>