[:octicons-arrow-left-24: Back to Authorization ](bot-authentication.md)

# Setting Up the Kerberos SPNEGO Authorization Profile




The XO Platform offers Kerberos SPNEGO-based authentication mechanism for enterprise users to use Kerberos authentication flow to securely connect with their internal applications using Kerberos SPNEGO security protocol.

The Kerberos-SPNEGO authentication process includes multiple steps to establish a secure connection between a client and a server using the SPNEGO negotiation mechanism and the Kerberos authentication protocol. The combination of SPNEGO and Kerberos ensures a secure and efficient authentication process to enable clients to access sensitive data securely.

The Kerberos SPNEGO auth profile can be configured from the following XO Platform settings:

* [Service Node](../../../automation/use-cases/dialogs/node-types/working-with-the-service-node.md){:target="_blank"}
* [Configurations > Authorization Profile](bot-authentication.md){:target="_blank"}
* [Generative AI & LLM > Custom LLM Integrations](../../../generative-ai-tools/configure-llm-integration.md#custom-llm-integration){:target="_blank"}


## Configuring Kerberos SPNEGO Authorization

Steps to configure the Authorization for your assistant with Kerberos-SPNEGO auth profile:

1. Open the AI Agent for which you want to configure the Authorization profile.
2. Select the **Build** tab from the top menu.
3. From the left-side vertical menus, click **Configurations > Authorization Profiles**.
4. Click **New** to open the **New Authorization Mechanism** dialog.  
    <img src="../images/basic-auth-img2.png" alt="New Authorization Mechanism - Add" title="New Authorization Mechanism - Add" style="border: 1px solid gray; zoom: 60%;">

5. In the **Authorization Type** drop-down list, select the **Kerberos-SPNEGO** option.  
    <img src="../images/kerberos-img2.png" alt="Authorization Type - Kerberos-SPNEGO" title="Authorization Type - Kerberos-SPNEGO" style="border: 1px solid gray; zoom: 60%;">

6. In the **Name** field, enter a name for the authorization type.  
    <img src="../images/kerberos-img3.png" alt="Authorization Name" title="Authorization Name" style="border: 1px solid gray; zoom: 60%;">

7. Define the required Kerberos Authorization fields. For more information, see the [Defining Authorization Fields](#defining-authorization-fields) section.
8. (optional) Click **+ Add Authorization** **Field** to add additional fields for Kerberos authorization. For more information, see the [Adding Authorization Fields](#adding-authorization-fields) section.
9. Click **Save Auth**.  
    <img src="../images/kerberos-img4.png" alt="Save Auth" title="Save Auth" style="border: 1px solid gray; zoom: 60%;">


## Defining Authorization Fields

To configure the Kerberos SPNEGO authorization profile, define the fields described in the following table.


<table border="1">
  <tr>
   <td><strong>FIELD NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>Required or Optional</strong>
   </td>
  </tr>
  <tr>
   <td>Authorization Type
   </td>
   <td>Set to Kerberos SPNEGO
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Name
   </td>
   <td>The name of the authorization profile or service, for example, <em>Kerberos Profile</em>. 
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Service Principal URL
   </td>
   <td>The URL to access the Kerberos service and initiate the authentication process.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Authorization Check URL
   </td>
   <td>This is the URL used to obtain end-user authorization for the XO Platform to access the web application or web service using the access token. The XO Platform accepts a valid URL with a maximum length of 3000 characters. This field is required. You can use dynamic fields, path parameter fields, query fields, and so forth, to define the Authorization URL, for example,
    <br>
     https://platform.example.com/sap/opu/odata/sap/{{authfield1}}/?$format=json
    <br>
    or
    <br>
    https://{tenant}.service-now.com/api/now/v1/table/incident
    <br>
   
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Authorization Fields
   </td>
   <td>The authorization fields for the token bearer.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td>Refresh Token URL
   </td>
   <td>Enter a Refresh Token URL, if required, for cases when the authentication token expires and has to be refreshed. The XO Platform accepts a valid URL with a maximum length of 3000 characters.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>Enter a description for your authorization.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td>Authentication Types
   </td>
   <td>App designers can set this setting to modify the Kerberos authentication behavior.
    <br>
    Choose one of the following Authentication Types:
    <ul>
    <li><strong>Mutual </strong>– By default, this option is selected. The <strong>Mutual </strong>authentication ensures that both the client and the server authenticate each other during the Kerberos SPNEGO authentication process.
    <li><strong>Delegate </strong>– The delegate option is also known as delegation or credential delegation. It means the client can pass its Kerberos credentials to the service. The service can then use these credentials to authenticate to other services on behalf of the client.
    </li>
    </ul>
   </td>
   <td>Required
   </td>
  </tr>
</table>

For more information, see [Using Session and Context Variables](../../../automation/use-cases/using-session-and-context-variables.md).

## Adding Authorization Fields

Click +**Add Authorization Field** and then enter one or more key/value pairs that represent additional authorization input fields.

If, for example, the default username and password fields do not meet your needs for authorization input, you can add custom fields as key/value pairs that are displayed to the end-user by adding **Additional Fields**. You can use these fields, for example, if a PIN code is required in the authorization process, in addition to the **Username** and **Password** fields.

**Authorization Fields** are added, as shown in the following illustration.  
<img src="../images/kerberos-img5.png" alt="Authorization fields added" title="Authorization fields added" style="border: 1px solid gray; zoom: 60%;">

Specify the following fields:

* **Field Type** –  The type of the custom field. Field type can be _Header_, _Payload_, _Query String,_ or _Path Param_.
* **Field Key** – The name of the custom field.
* **Value** – The value of the custom field.

Click **Done** to save the **Additional Field**.


## Testing the Authorization

After you save the authentication, you can test your authorization definition on the **Authentication** page when you click **Test** before continuing to develop the remaining steps of your task. 

Steps to test the Kerberos Auth Profile:

1. Click on the **Test** button in the Kerberos Auth Profile row to begin the authorization test.  
    <img src="../images/kerberos-img6.png" alt="begin the authorization test" title="begin the authorization test" style="border: 1px solid gray; zoom: 60%;">

2. In the Test Authorization window, select the Content-Type and Method field values and click **Test**.  
    <img src="../images/kerberos-img7.png" alt="select the Content-Type and Method field values and click Test" title="select the Content-Type and Method field values and click Test" style="border: 1px solid gray; zoom: 60%;">

3. When the validation of authentication is complete, the **Test Authorization** dialog is closed, and the results of the validation, either success or failure, is displayed to the immediate right of the **Test Authorization** button. If the authorization fails, the _Auth Test Failed_ message is displayed along with the **Headers** and **Response** tabs.