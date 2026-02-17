# Alert Task – OAuth v2

We have seen how an [Alert task](../use-cases/alert-tasks.md) can be set up in the Platform. In this article, we will see how alert task authorization can be set up using the OAuth v2.

## How it Works 

1. The platform application redirects the user to a login dialog at the web application.
2. The user authenticates.
3. The web application redirects the user back to the platform application with an access token.
4. The platform application validates the access token.
5. The access token allows the platform application to access a protected resource at the provider, on behalf of the user.

## General Setup

OAuth v2 is the new version of the open protocol to allow secure authorization in a simple and standard method from web, mobile, and desktop applications. To use oAuth v2, you must first register an account with the web application as you will need the log-in credentials for that application to configure the settings for the Authorization Mechanism.

To begin your configuration, follow the steps below:

1. Select the AI Agent you want to work with.
2. Go to **Build > Conversation Skills > Alert Tasks**. 
3. Select the task you want to work with. 
4. Click the **API Request** tab within the Alert Task.
5. Expand the **Authorization** section and click **Create New** to configure a new authorization.
<img src="../images/create-new-authorization.png" alt="create new authorization" title="create new authorization" style="border: 1px solid gray; zoom:75%;"> 

6. Next, the **New Authorization Mechanism** window opens, as shown in the illustration below.
<img src="../images/new-oauth-mechanism.png" alt="new oauth mechanism" title="new oauth mechanism" style="border: 1px solid gray; zoom:75%;">

To configure OAuth1 for your Alert Task, please configure each section mentioned below. 

## Form Fields

To configure oAuth v2, define the fields described in the following table.

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
   <td>Set to oAuth v2.
   </td>
  </tr>
  <tr>
   <td>Callback URL
   </td>
   <td>The URL used by the web application or web service to redirect the end-user after end-user authorization is complete. This value, https://idp.kore.ai/workflows/callback/ is provided as a read-only value by the platform application when you define oAuth v2 settings.
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
   <td>The ID of the platform client.
   </td>
  </tr>
  <tr>
   <td>Client Secret Key
   </td>
   <td>The value provided as the platform application authentication based on the Client ID to the web application.
   </td>
  </tr>
  <tr>
   <td>Authorization URL
   </td>
   <td>The URL used to obtain end-user authorization for the platform application to access the web application or web service using the access token. This field is required.
   </td>
  </tr>
  <tr>
   <td>Token Request URL
   </td>
   <td>The URL used by the platform application to obtain an unauthorized request token. A request token is a value used by the platform application to obtain authorization from the end-user to obtain an access token. After end-user authorization, an access token can be requested by the platform application. This field is required.
   </td>
  </tr>
  <tr>
   <td>Scope
   </td>
   <td>If the web service requires additional values for authorization, add one or more Key/Value pairs. For example, some App web services support using a scope key using read-only, write, or both as the value.
   </td>
  </tr>
  <tr>
   <td>Refresh Token URL
   </td>
   <td>Add the refresh token URL that you want to use for this authentication.
   </td>
  </tr>
  <tr>
   <td>Auth Error Status Code
   </td>
   <td>When there is an error in authentication, use this field to provide a status code for the particular error.
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>Provide a description for your Alert Task authentication. 
   </td>
  </tr>
</table>

## Tenancy

If required, in the **Subdomain** section, select **Yes** if the base URL for a web application or user interface uses a tenant name in the URL. For example, platform is the tenant organization for a web service that uses subdomain-based tenants, such as `www.platform.example.com.`


In the following example configuration, the tenancy URL contains the {tenant} organization placeholder.
<img src="../images/set-tenancy.png" alt="set tenancy" title="set tenancy" style="border: 1px solid gray; zoom:75%;">

## Additional Fields

1. Click **+ Add Additional Fields** to open the **Additional Fields** window, and then enter one or more key/value pairs that represent additional authorization input fields if required as shown in the following illustration.
<img src="../images/add-form-fields-v2.png" alt="add form fields" title="add form fields" style="border: 1px solid gray; zoom:75%;"> 

2. Specify the following fields:
    * **Field Key**: The name of the custom field to specify for authorization.
    * **Value**: The value of the custom field to specify for the authorization.
    * Click **Add** to save the **Additional Field**.
3. To add more **Additional Fields**, click **Add** in the **Additional Fields** section.

## Authorization Fields

By default, authorization fields are configured as part of the header of the task request message. If your task request requires additional authorization fields or the expected authorization is not part of the header, for example, a verification code,

1. Click **+ Add Authorization Field** and then define the fields as shown in the following illustration.

    <img src="../images/add-auth-field-v2.png" alt="add auth fields" title="add auth fields" style="border: 1px solid gray; zoom:75%;"> 

2. In the **Field Type** field, you can select one of the following depending on where in the task request message and the type of authorization fields that are required.
    * **Header**: The AI Agent expects the authorization fields as part of the header of the request.
    * **Payload**: The AI Agent expects the authorization fields as part of the content of the body of the request.
    * **Query String**: The AI Agent expects the authorization fields as a query in the body of the request.
    * **Path Param**: The AI Agent expects the authorization fields as part of the URL path for the request.
3. In the **Field Key** field, enter the name of the field for the selected **Field Type**.
4. In the **Field Value** field, enter the value for the **Field Key** specified.
5. Click **Add**. The new authorization field is added in the **Authorization Fields** section.
6. To add additional authorization fields, click **Add** in the **Authorization Fields** section.
7. Click **Save Auth** to save the authorization settings and close the **New Authorization Mechanism** dialog.

## Testing

After you save the authorization, you can test it using the **Authorization** page.

1. Click **Test Authorization** before continuing to develop the remaining steps of your task.

    <img src="../images/click-test-auth-v2.png" alt="click test authorization" title="click test authorization" style="border: 1px solid gray; zoom:75%;"> 

2. After you click **Test Authorization**, the test is executed using the authentication token URLs and the **Client ID** and **Client Secret Key**. If the tenancy was defined, the **Test Authorization** window is displayed as shown in the following illustration.

    <img src="../images/test-auth-parameters.png" alt="test auth parameters" title="test auth parameters" style="border: 1px solid gray; zoom:75%;"> 

3. Click **Test** to begin the authorization test. When the validation of authentication is complete, the **Test Authorization** window is closed and the results of the validation, either success or failure, is displayed to the immediate right of the **Test Authorization** button. If the authorization fails, the _Auth Test Failed_ message is displayed along with the **Headers** and **Response** tabs as shown in the following illustration.

    <img src="../images/configure-test-authorization.png" alt="auth fails message" title="auth fails message" style="border: 1px solid gray; zoom:75%;">