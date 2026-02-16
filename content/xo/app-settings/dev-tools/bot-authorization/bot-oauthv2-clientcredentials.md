[:octicons-arrow-left-24: Back to Authorization ](bot-authentication.md)

# Setting Up Authorization using OAuth v2 client credentials

OAuth v2 is the new version of the open protocol to allow secure authorization via a standard method from web, mobile, and desktop applications.

To use oAuth v2, you must first register an account with the web application as you will need the sign in credentials for that application to configure the settings for the Authorization Mechanism.

The Client Credentials grant type is used when applications request an access token to access their own resources, not on behalf of a user.


## Configuring oAuth v2 Using Client Credentials

To configure this authorization method for your assistant, follow these steps:

1. Open the assistant for which you want to configure an Authorization profile.

2. From the left menu, click **App Settings**, then select **Dev Tools > Authorization Profiles**.  
<img src="../images/basic-auth-img2.png" alt="Auth profiles - Add" title="Auth profiles - Add" style="border: 1px solid gray;zoom:80%;"/>

3. Click **New**. The **New Authorization Mechanism** dialog opens.  
<img src="../images/new-auth.png" alt="Auth profiles - Add" title="Auth profiles - Add" style="border: 1px solid gray;zoom:80%;"/>

4. In the **Authorization Type** drop-down list, select **oauth v2 client credentials**.
5. In the **Name** field, enter the name for your authorization.

The following illustration shows the **oAuth v2** fields that you must define to enable authorization for your assistant.

<img src="../images/oauth-v2-clientcredentials-img2.png" alt="Fields to define for enabling auth" title="Fields to define for enabling auth" style="border: 1px solid gray;zoom:80%;"/>


Please define the fields as explained in the following table:

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
   <td>Set to oAuth v2 Client Credentials.
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
   <td>The ID of the Kore.ai client. The Platform accepts a maximum length of 255 characters.
   </td>
  </tr>
  <tr>
   <td>Client Secret Key
   </td>
   <td>The value provided as the Kore.ai application authentication based on the Client ID to the web application. The XO Platform accepts a maximum length of 255 characters.
   </td>
  </tr>
  <tr>
   <td>Token Request URL
   </td>
   <td>The URL used by the Kore.ai application to obtain an unauthorized request token. A request token is a value used by the Kore.ai application to obtain authorization from the end-user to obtain an access token. The XO Platform accepts a valid URL with a maximum length of 3000 characters. After end-user authorization, an access token can be requested by the Kore.ai application. This field is required.
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



## Authorization Fields

By default, authorization fields are configured as part of the header of the task request message. If your task request requires additional authorization fields or the expected authorization is not part of the header, for example, a verification code, click **+ Add Authorization Field** and then define the fields as shown in the following illustration. 

<img src="../images/oauth-v2-clientcredentials-img3.png" alt="Authorization fields" title="Authorization fields" style="border: 1px solid gray;zoom:80%;"/>

1. In the **Field Type** field, you can select one of the following depending on where in the task request message and the type of authorization fields that are required.
    * **Header** – The AI Agent expects the authorization fields as part of the header of the request.
    * **Payload** – The AI Agent expects the authorization fields as part of the content of the body of the request.
    * **Query String** – The AI Agent expects the authorization fields as a query in the body of the request.
    * **Path Param** – The AI Agent expects the authorization fields as part of the URL path for the request.

2. In the **Field Key** field, enter the name of the field for the selected **Field Type**.
3. In the **Field Value** field, enter the value for the **Field Key** specified.
4. Click **Done**. The new authorization field is added in the **Authorization Fields** section.


## Testing the Authorization

After you save the authentication, you can test your authorization definition on the **Authentication** page when you click **Test** before continuing to develop the remaining steps of your task. When you click **Test**, the test is executed using the authentication token URLs and the **Client ID** and **Client Secret Key**. If tenancy was defined, the **Test Authorization** dialog is displayed.

Click **Test** to begin the authorization test.  
<img src="../images/oauth-v2-clientcredentials-img4.png" alt="Testing the auth" title="Testing the auth" style="border: 1px solid gray;zoom:80%;"/>


When the validation of authorization is complete, the results of the validation, either success or failure, are displayed. If the authorization fails, the _Auth Test Failed_ message is displayed along with the **Headers** and **Response**.