[:octicons-arrow-left-24: Back to Authorization ](bot-authentication.md)

# Setting Up Authorization using OAuth v2

OAuth v2 is the new version of the open protocol to allow secure authorization via a standard method from web, mobile, and desktop applications.

To use oAuth v2, you must first register an account with the web application as you will need the sign in credentials for that application to configure the settings for the Authorization Mechanism.


## How OAuth v2 Works

OAuth v2 authorization works as follows:

1. The XO Platform redirects the user to a login dialog at the web application.
2. The user authenticates.
3. The web application redirects the user back to the XO Platform with an access token.
4. The XO Platform validates the access token.
5. The access token allows the XO Platform to access a protected resource at the provider, on behalf of the user.


## Configuring OAuth v2 Authorization

To define Authorization for your assistant, using oAuth v2, follow these steps:

1. Open the assistant for which you want to configure an Authorization profile.
2. From the left menu, click **App Settings**, then select **Dev Tools > Authorization Profiles**.
3. Click **New** to open the **New Authorization Mechanism** dialog.  
<img src="../images/basic-auth-img2.png" alt="Auth profile - Add" title="Auth profile - Add" style="border: 1px solid gray;zoom:80%;"/>

4. In the **Authorization Type** drop-down list, select **oauth v2**.
5. In the **Name** field, enter the name for your authorization.

The following illustration shows the **oAuth v2** fields that you must define to enable authorization for your assistant.  
<img src="../images/oauth-v2-img2.png" alt="OAuth V2 fields to define" title="OAuth V2 fields to define" style="border: 1px solid gray;zoom:80%;"/>


## Defining Configuration Fields

To configure oAuth v2, define the fields described in the following table.

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
   <td>Set to oAuth v2.
   </td>
  </tr>
  <tr>
   <td>Callback Link
   </td>
   <td>The URL used by the web application or web service to redirect the end-user after end-user authorization is complete. This value, https://idp.kore.ai/workflows/callback/ is provided as a read-only value by the XO Platform when you define oAuth v2 settings.
   </td>
  </tr>
  <tr>
   <td>Identity Provider Name
   </td>
   <td>The name of the web application or web service, for example, <em>Asana</em>. This field is required.
   </td>
  </tr>
  <tr>
   <td>Client ID
   </td>
   <td>The ID of the Kore.ai client. The XO Platform accepts a maximum length of 255 characters.
   </td>
  </tr>
  <tr>
   <td>Client Secret Key
   </td>
   <td>The value provided as the XO Platform authentication based on the Client ID to the web application. The XO platform accepts a maximum length of 255 characters.
   </td>
  </tr>
  <tr>
   <td>Authorization URL
   </td>
   <td>This is the URL used to obtain end-user authorization for the XO Platform to access the web application or web service using the access token. The XO Platform accepts a valid URL with a maximum length of 3000 characters. This field is required. You can use dynamic fields, path parameter fields, query fields, and so forth, to define the Authorization URL, for example,
<br>
     https://platform.example.com/sap/opu/odata/sap/{{authfield1}}/?$format=json
<br>
or
<br>
https://{tenant}.service-now.com/api/now/v1/table/incident  

</a>.
   </td>
  </tr>
  <tr>
   <td>Access Using a Connector
   </td>
   <td>Select <strong>Yes</strong> to enable access for AI Agent using the Kore.ai Connector agent. This option is only visible if a Kore.ai Connector agent is configured and enabled in your enterprise on-premises network.
   </td>
  </tr>
  <tr>
   <td>Token Request URL
   </td>
   <td>The URL used by the XO Platform to obtain an unauthorized request token. A request token is a value used by the XO Platform to obtain authorization from the end-user to obtain an access token. The XO Platform accepts a valid URL with a maximum length of 3000 characters. After end-user authorization, an access token can be requested by the Kore.ai application. This field is required.
   </td>
  </tr>
  <tr>
   <td>Scope
   </td>
   <td>If the web service requires additional values for authorization, add one or more Key/Value pairs. For example, some web services support using a scope key using read-only, write, or both as the value.
   </td>
  </tr>
  <tr>
   <td>Refresh Token URL
   </td>
   <td>Enter a Refresh Token URL, if required, for cases when the authentication token expires and has to be refreshed. The XO Platform accepts a valid URL with a maximum length of 3000 characters.
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>Enter a description for your authorization.
   </td>
  </tr>
</table>

For more information, see [Using Session and Context Variables](../../../automation/use-cases/using-session-and-context-variables.md).


## Defining Tenancy

If required, in the **Subdomain** section, select **Yes** if the base URL for a web application or user interface that uses a tenant name in the URL. 

For example, platform is the tenant organization for a web service that uses subdomain-based tenants, such as `www.platform.example.com.`

In the following example configuration, the tenancy URL contains the {tenant} organization placeholder.

<img src="../images/oauth-v2-img3.png" alt="Tenancy URL - Tenant organization placeholder" title="Tenancy URL - Tenant organization placeholder" style="border: 1px solid gray;zoom:80%;"/>


## Adding Additional Fields

Click **Add Additional Fields** and then enter one or more key/value pairs that represent additional authorization input fields.

If, for example, the default username and password fields do not meet your needs for authorization input, you can add custom fields as key/value pairs that are displayed to the end-user by adding **Additional Fields**. You can use these fields, for example, if a PIN code is required in the authorization process, in addition to the **Username** and **Password** fields.

**Additional Fields** are added as shown in the following illustration.

<img src="../images/oauth-v2-img4.png" alt="Additional fields" title="Additional fields" style="border: 1px solid gray;zoom:80%;"/>

Specify the following fields:

* **Field Key**: The name of the custom field to specify for authorization.
* **Value**: The value of the custom field to specify for the authorization.

Click **Done** to save the **Additional Field**.


## Adding Authorization Fields

By default, no authorization fields are configured as part of the header of the request message. If your request requires authorization fields or the expected authorization is not part of the header, for example, social security number or PIN, click **Add Authorization Fields** and then define the fields as shown in the following illustration.

<img src="../images/oauth-v2-img5.png" alt="Authorization fields" title="Authorization fields" style="border: 1px solid gray;zoom:80%;"/>


1. In the **Field Type** field, you can select one of the following depending on where in the request message and the type of authorization fields that are required.
    * **Header**: The assistant expects the authorization fields as part of the header of the request.
    * **Payload**: The assistant expects the authorization fields as part of the content of the body of the request.
    * **Query String**: The assistant expects the authorization fields as a query in the body of the request.
    * **Path Param**: The assistant expects the authorization fields as part of the URL path for the request.

2. In the **Field Key** field, enter the name of the field for the selected **Field Type**.
3. In the **Field Value** field, enter the value for the **Field Key** specified.
4. Click **Done**. The new authorization field is added in the **Authorization Fields** section.


## Testing the Authorization

After you save the authentication, you can test your authorization definition on the **Authentication** page when you click **Test** before continuing to develop the remaining steps of your task. When you click **Test**, the test is executed using the authentication token URLs and the **Client ID** and **Client Secret Key**. If tenancy was defined, the **Test Authorization** dialog is displayed.

<img src="../images/oauth-v2-img6.png" alt="Testing the Authorization" title="Testing the Authorization" style="border: 1px solid gray;zoom:80%;"/>


Click **Test** to begin the authorization test. 

<img src="../images/oauth-v2-img7.png" alt="Test result" title="Test result" style="border: 1px solid gray;zoom:80%;"/>


When the validation of authentication is complete, the **Test Authorization** dialog is closed and the results of the validation, either success or failure, is displayed to the immediate right of the **Test Authorization** button. If the authorization fails, the _Auth Test Failed_ message is displayed along with the **Headers** and **Response** tabs as shown in the following illustration.
