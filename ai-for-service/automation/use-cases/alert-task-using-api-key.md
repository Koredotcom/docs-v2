# Alert Task – Authorization using API Key

We have seen how an [Alert task](../use-cases/alert-tasks.md) can be set up in the Platform. In this section, we will see how to configure API authorization.

## API Key Setup Overview

An API key can act as both a unique identifier and a secret token for identification as well as authentication to provide a set of access rights on the associated API. Instead of prompting the end-user for both a username and password for access, the user is prompted only for an API key when configuring the task. 

To use the API Key **Authorization Type**, you must first register an account with the web application you want to work with, and then generate an API Key for that application.

To authorize an API key, follow the steps below:

1. Go to **Alert Tasks** and create or select the task you want to work with. 
2. Under _API Request_, expand **Authorization**.
3. Select the **Authorization Provider**. If none is available, create it by clicking on **Create New**.<img src="../images/authorize-an-ap-key.png" alt="authorize an api key" title="authorize an api key" style="border: 1px solid gray; zoom:75%;">

4. Ensure that your selected Authorization Type is **API Key**. Below is an illustration of the fields that you will need to provide information for in order to authorize the API.
<img src="../images/auth-type-api-key.png" alt="auth type api key" title="auth type api key" style="border: 1px solid gray; zoom:75%;">

5. **Name your API** to get started, then let us go through these fields in detail.

## Tenancy

If required, in the **Subdomain** section, select **Yes** if the base URL for a web application or user interface uses a tenant name in the URL.For example, platform is the tenant organization for a web service that uses subdomain-based tenants, such as `www.platform.example.com.`


In the following example configuration, the tenancy URL contains the {tenant} organization placeholder, where **Tenant** including the braces represents the tenant name.
<img src="../images/set-tenancy.png" alt="set tenancy" title="set tenancy" style="border: 1px solid gray; zoom:75%;">

## Form Fields

If the default username and password fields do not meet your needs, you can add new fields displayed to the end-user by adding authorization form fields,  for example, if a PIN code is required in the authentication process, in addition to the Username and Password form fields.

To add fields on the authorization form, click **+ Add Form Field**.

The following illustration is an example of a definition to add a password field to the authorization dialog.
<img src="../images/add-password-field-api.png" alt="add password field" title="add password field" style="border: 1px solid gray; zoom:75%;">

The following table describes the fields used to define an authorization IDP form field.

<table border="1.5">
  <tr bgcolor="#ECECEC">
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

## Authorization Fields

By default, authorization fields are configured as part of the header of the task request message. If your task request requires additional authorization fields or the expected authorization is not part of the header, for example, social security number or PIN,

1. Click **+ Add Authorization Field** and then define the fields as shown in the following illustration.

    <img src="../images/add-auth-field-api-key.png" alt="add authorization field" title="add authorization field" style="border: 1px solid gray; zoom:75%;"> 

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

After you save the authentication, if you have defined an **Authorization Check URL** for your new authorization type, you can test your authorization definition on the **Authentication** tab when you click **Test Authorization** before continuing to develop the remaining steps of your task.
<img src="../images/click-test-auth-v2.png" alt="click test authorization" title="click test authorization" style="border: 1px solid gray; zoom:75%;">

After you click **Test Authorization**, the **Test Authorization** window is displayed and populated with the URL you specified in the **Authorization Check URL** section, as shown in the following illustration.

  <img src="../images/test-auth-window-api-key.png" alt="test auth window" title="test auth window" style="border: 1px solid gray; zoom:75%;">

To configure the **Test Authorization API Key**, follow the steps below:

1. In the **Auth Check URL** field, verify or enter the URL to test the authentication configuration.
2. If your AI Agent uses subdomains, the **Tenancy** field is displayed and you must specify the tenant.
3. Enter the API key for the application in the **API Key** field.
4. Select the content type expected for the URL in the **Content-Type** field.
5. For testing the URL, the **Method** field is read-only and set to **GET**.
6. Click **Test** to begin the authorization test.

When the authentication validation is complete, the **Test Authorization** dialog is closed and the results of the validation, either success or failure, are displayed to the immediate right of the **Test Authorization** button. If the authorization fails, the _Auth Test Failed_ message is displayed along with the **Headers** and **Response** tabs as shown in the following illustration.
<img src="../images/configure-test-authorization.png" alt="auth fails message" title="auth fails message" style="border: 1px solid gray; zoom:75%;">

