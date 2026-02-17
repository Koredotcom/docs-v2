[:octicons-arrow-left-24: Back to Authorization ](bot-authentication.md)

# Setting Up Authorization using OAuth v1

OAuth v1 is an open protocol to allow secure authorization in a simple and standardized method from web, mobile, and desktop applications.

To use OAuth v1, you must first register an account with the web application, as you will need the login credentials for that application to configure the settings for the authorization mechanism.


## How OAuth v1 Works

OAuth v1 authorization works as follows:

1. The XO Platform obtains an unauthorized request token from the web application.
2. The XO Platform redirects the user to a login dialog at the web application.
3. The user authorizes the request token, associating it with their account.
4. The web application redirects the user back to the XO Platform.  
<img src="../images/basic-auth-img2.png" alt="Auth profile - Add" title="Auth profile - Add" style="border: 1px solid gray;zoom:80%;"/>

5. The XO Platform exchanges the request token for an access token.
6. The access token allows the XO Platform to access a protected resource at the provider, on behalf of the user.  
<img src="../images/oauth-v1-img2.png" alt="New auth mechanism details" title="New auth mechanism details" style="border: 1px solid gray;zoom:80%;"/>


## Configuring oAuth v1 Authorization

To define authorization for your assistant, follow these steps:

1. Open the assistant for which you want to configure an Authorization profile.
2. From the left menus, click **App Settings**, then select **Dev Tools > Authorization Profiles**.
3. Click **New** to open the **New Authorization Mechanism** dialog.
4. In the **Authorization Type** drop-down list, select **oAuth v1**.
5. The following illustration is an example of the **oAuth v1** authorization type fields that you must define to enable a customized authorization for your assistant.


## Defining Configuration Fields

To define oAuth v1, configure the fields described in the following table.


<table border="1">
  <tr>
   <td><strong>FIELD NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Authorization Type
   </td>
   <td>Set to <strong>oAuth v1</strong>.
   </td>
  </tr>
  <tr>
   <td>Callback URL
   </td>
   <td>The URL used by the web application or web service to redirect the end-user after end-user authorization is complete. This value, https://idp.kore.ai/workflows/callback/,  is provided as a read-only value by the XO Platform when you define oAuth v1 settings.
   </td>
  </tr>
  <tr>
   <td>Identity Provider Name
   </td>
   <td>The name of the web application or web service, for example, <em>Twitter</em>. This field is required. This is the name under which the authorization profile will be displayed within the XO Platform.
   </td>
  </tr>
  <tr>
   <td>Consumer Key
   </td>
   <td>The value provided as the XO Platform identification to the web application. This field is required.
   </td>
  </tr>
  <tr>
   <td>Consumer Secret
   </td>
   <td>The secret value provided by the XO Platform to establish ownership of the <strong>Consumer Key</strong>. This field is required.
   </td>
  </tr>
  <tr>
   <td>Request Token Link
   </td>
   <td>The URL used by the XO Platform to obtain an unauthorized request token. The request token is a value used by the XO Platform to obtain authorization from the end-user to obtain an access token. For example, https://{tenant}.example.com/oauth/request_token. After end-user authorization, an access token can be requested by the XO Platform. This field is required.
   </td>
  </tr>
  <tr>
   <td>Access Token Link
   </td>
   <td>The URL used to exchange the end-user authorized request token for an access token. The access token is the value used by the XO Platform to gain access to the web application or web service on behalf of the end-user, instead of using the end-user credentials. For example, https://{tenant}.example.com/oauth/access_token. This field is required.
   </td>
  </tr>
  <tr>
   <td>User Authorization Link
   </td>
   <td>This is the URL used to obtain end-user authorization for the XO Platform to access the web application or web service using the access token. This field is required. You can use dynamic fields, path parameter fields, query fields, and so forth, to define the Authorization URL, for example,
<br>
     https://platform.example.com/sap/opu/odata/sap/{{authfield1}}/?$format=json
<br>
or
<br>
https://{tenant}.service-now.com/api/now/v1/table/incident
<br>
</a>
   </td>
  </tr>
  <tr>
   <td>Access Using a Connector
   </td>
   <td>Select <strong>Yes</strong> to enable access for AI Agent using the Kore.ai Connector agent. This option is only visible if a Kore.ai Connector agent is configured and enabled in your enterprise on-premises network.
   </td>
  </tr>
  <tr>
   <td>Refresh Token URL
   </td>
   <td>This is a URL that lets the XO Platform get new access tokens without asking the user to log in again.
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>Enter a description for your authorization task. 
   </td>
  </tr>
</table>

For more information, see [Using Session and Context Variables](../../../automation/use-cases/using-session-and-context-variables.md).

## Defining Tenancy

If required, in the **Subdomain** section, select **Yes** if the base URL for a web application or user interface uses a tenant name in the URL.
For example, platform is the tenant organization for a web service that uses subdomain-based tenants, such as `www.platform.example.com.`


In the following example configuration, the tenancy URL contains the {tenant} organization placeholder.

<img src="../images/oauth-v1-img3.png" alt="Defining tenancy" title="Defining tenancy" style="border: 1px solid gray;zoom:80%;"/>


## Adding Additional Fields

Click **Add Additional Fields** to open the **Additional Fields** dialog and then enter one or more key/value pairs that represent additional authorization input fields.

If, for example, the default username and password fields do not meet your needs for authorization input, you can add custom fields as key/value pairs that are displayed to the end-user by adding **Additional Fields**. You can use these fields, for example, if a PIN code is required in the authorization process, in addition to the **Username** and **Password** fields.

**Additional Fields** are added as shown in the following illustration.

<img src="../images/oauth-v1-img4.png" alt="Additional fields"" title="Additional fields" style="border: 1px solid gray;zoom:80%;"/>

Specify the following fields:

* **Field Key**: The name of the custom field to specify for authorization.
* **Field Value**: The value for the custom field to specify for authorization.
* Click **Done** to save the **Additional Field**.


## Adding Authorization Fields

By default, no authorization fields are configured as part of the header of the request message. If your request requires authorization fields or the expected authorization is not part of the header, for example, social security number or PIN, click **Add Authorization Fields** and then define the fields as shown in the following illustration.

<img src="../images/oauth-v1-img5.png" alt="Adding auth fields" title="Adding auth fields" style="border: 1px solid gray;zoom:80%;"/>

1. In the **Field Type** field, you can select one of the following depending on where in the request message and the type of authorization fields that are required.
    * **Header**: The assistant expects the authorization fields as part of the header of the request.
    * **Payload**: The assistant expects the authorization fields as part of the content of the body of the request.
    * **Query String**: The assistant expects the authorization fields as a query in the body of the request.
    * **Path Param**: The assistant expects the authorization fields as part of the URL path for the request.

2. In the **Field Key** field, enter the name of the field for the selected **Field Type**.
3. In the **Field Value** field, enter the value for the **Field Key** specified.
4. Click **Done**. The new authorization field is added in the **Authorization Fields** section.


## Testing the Authorization

After you save the authorization, you can test it on the **Authorization** page when you click **Test** before continuing to develop the remaining steps of your assistant. When you click **Test**, the test is executed using the **authorization token URLs** and the **Consumer Key** and **Consumer Token**. If the tenancy was defined, the **Test Authorization** dialog is displayed. 

<img src="../images/oauth-v1-img6.png" alt="Test authorization dialog" title="Test authorization dialog" style="border: 1px solid gray;zoom:80%;"/>

Click **Test** to begin the authorization test. 

When the validation of authorization is complete, the **Test Authorization** dialog is closed and the results of the validation, either success or failure, is displayed. If the authorization fails, the _Auth Test Failed_ message is displayed along with the **Headers** and **Response** tabs.

<img src="../images/oauth-v1-img7.png" alt="Auth Test Failed" title="Auth Test Failed" style="border: 1px solid gray;zoom:80%;"/>