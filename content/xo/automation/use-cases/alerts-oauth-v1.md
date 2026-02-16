# Alert Task – OAuth v1

We have seen how an [Alert task](../use-cases/alert-tasks.md) can be set up in the Platform. In this article , we will see how authorization for the alert tasks can be set up using the OAuth v1.

## How it Works 

1. The Kore.ai application obtains an unauthorized request token from a web application. The Kore.ai application redirects the user to a login dialog at the web application.
2. The user authorizes the request token, associating it with their account. The web application redirects the user back to the Kore.ai application.
3. The Kore.ai application exchanges the request token for an access token.
4. The access token allows the Kore.ai application to access a protected resource at the provider, on behalf of the user.

## General Setup

OAuth is an open protocol to allow secure authorization in a simple and standard method from web, mobile, and desktop applications. To use OAuth, you must first register an account with the web application you want to authorize, as you will need the log-in credentials for that application in order to configure the settings for the authorization mechanism.

To begin your configuration, follow the steps below:

1. Select the App you want to work with.
2. Go to **Build** > **Conversation Skills** > **Alert Tasks**. 
3. Select the task you want to work with. 
4. Click the **API Request** tab within the Alert Task.
5. Expand the **Authorization** section and click **Create New** to configure a new authorization.
<img src="../images/create-new-authorization.png" alt="create new authorization" title="create new authorization" style="border: 1px solid gray; zoom:75%;"> 

6. Next, the **New Authorization Mechanism** window opens, as shown in the illustration below.
<img src="../images/new-oauth-mechanism.png" alt="new oauth mechanism" title="new oauth mechanism" style="border: 1px solid gray; zoom:75%;">

To define Oauth v1 as your authorization method, please select it from the **Authorization Type** field, then configure the following areas:

## Form Fields

To define oAuth v1, define the fields described in the following table.

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>FIELD NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Authorization Type
   </td>
   <td>Set to oAuth v1.
   </td>
  </tr>
  <tr>
   <td>Callback URL
   </td>
   <td>The URL used by the web application or web service to redirect the end-user after end-user authorization is complete. This value, https://idp.kore.ai/workflows/callback/,  is provided as a read-only value by the Kore.ai application when you define oAuth v1 settings.
   </td>
  </tr>
  <tr>
   <td>Identity Provider Name
   </td>
   <td>The name of the web application or web service, for example, <em>Twitter</em>. This field is required.
   </td>
  </tr>
  <tr>
   <td>Consumer Key
   </td>
   <td>The value provided as the Kore.ai application identification to the web application. This field is required.
   </td>
  </tr>
  <tr>
   <td>Consumer Secret
   </td>
   <td>The secret value provided by the Kore.ai application to establish ownership of the <strong>Consumer Key</strong>. This field is required.
   </td>
  </tr>
  <tr>
   <td>Request Token Link
   </td>
   <td>The URL used by the Kore.ai application to obtain an unauthorized request token. A request token is the value used by the Kore.ai application to obtain authorization from the end-user to obtain an access token. For example, https://{tenant}.example.com/oauth/request_token. After end-user authorization, an access token can be requested by the Kore.ai application. This field is required.
   </td>
  </tr>
  <tr>
   <td>Access Token Link
   </td>
   <td>The URL used to exchange the end-user authorized request token for an access token. The access token is the value used by the Kore.ai application to gain access to the web application or web service on behalf of the end-user, instead of using the end-users log on credentials. For example, https://{tenant}.example.com/oauth/access_token. This field is required.
   </td>
  </tr>
  <tr>
   <td>User Authorization Link
   </td>
   <td>The URL used to obtain end-user authorization for the Kore.ai application to access the web application or web service using the access token. For example, https://{tenant}.example.com/oauth/authorize. This field is required.
   </td>
  </tr>
  <tr>
   <td>Refresh Token URL
   </td>
   <td>This is a URjL that lets the XO Platform get new access tokens without asking the user to log in again.
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>:Enter a description for your authorization task. 
   </td>
  </tr>
</table>

## Tenancy

If required, in the **Subdomain** section, select **Yes** if the base URL for a web application or user interface uses a tenant name in the URL.

For example, platform is the tenant organization for a web service that uses subdomain-based tenants, such as `www.platform.example.com.` 

In the following example configuration, the tenancy URL contains the {tenant} organization placeholder.
<img src="../images/set-tenancy.png" alt="set tenancy" title="set tenancy" style="border: 1px solid gray; zoom:75%;">

## Additional Fields

1. Click **+ Add Additional Fields** to open the **Additional Fields** window, and then enter one or more key/value pairs that represent additional authorization input fields if required as shown in the following illustration.
<img src="../images/add-additional-fields.png" alt="add additional fields" title="add additional fields" style="border: 1px solid gray; zoom:75%;">

2. Specify the following fields:
    * **Field Key** – The name of the custom field to specify for authorization.
    * **Field Value** – The value of the custom field to specify for the authorization.
3. Click **Add** to save the **Additional Field**.
4. To add more **Additional Fields**, click **Add** in the **Additional Fields** section.

## Authorization Fields

By default, authorization fields are configured as part of the header of the task request message. If your task request requires additional authorization fields or the expected authorization is not part of the header, for example, a verification code.

To add authorization fields:

1. Click **+ Add Authorization Field** and then define the fields as shown in the following illustration.
<img src="../images/add-auth-field.png" alt="add auth field" title="add auth field" style="border: 1px solid gray; zoom:75%;">

2. In the **Field Type** field, you can select one of the following depending on where in the task request message and the type of authorization fields that are required.
    * **Header** – The AI Agent expects the authorization fields as part of the header of the request.
    * **Payload** – The AI Agent expects the authorization fields as part of the content of the body of the request.
    * **Query String** – The AI Agent expects the authorization fields as a query in the body of the request.
    * **Path Param** – The AI Agent expects the authorization fields as part of the URL path for the request.
3. In the **Field Key** field, enter the name of the field for the selected **Field Type**.
4. In the **Field Value** field, enter the value for the **Field Key** specified.
5. Click **Add**. The new authorization field is added in the **Authorization Fields** section.

6. Click **Save** **Auth** to save the authorization settings and close the **New Authorization Mechanism** dialog.

## Testing

After you save the authorization, you can test your authorization definition on the **Authorization** page.

1. Click **Test Authorization** before continuing to develop the remain steps of your task.
<img src="../images/click-test-auth-v2.png" alt="click test auth" title="click test auth" style="border: 1px solid gray; zoom:75%;">

2. When you click **Test Authorization**, the test is executed using the authentication token URLs and the **Consumer Key** and **Consumer Token**. If the tenancy was defined, the **Test Authorization** dialog is displayed as shown in the following illustration.<img src="../images/test-authorization-yes.png" alt="test authorization" title="test authorization" style="border: 1px solid gray; zoom:75%;">

3. Click **Test** to begin the authorization test. When the validation of authentication is complete, the **Test Authorization** window is closed and the results of the validation, either success or failure, is displayed to the immediate right of the **Test Authorization** button. If the authorization fails, the _Auth Test Failed_ message is displayed along with the **Headers** and **Response** tabs as shown in the following illustration.  
<img src="../images/configure-test-authorization.png" alt="auth fails message" title="auth fails message" style="border: 1px solid gray; zoom:75%;">
