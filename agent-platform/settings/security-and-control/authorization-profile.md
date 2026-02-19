# Secure Account Access Using Authorization Profiles

The Platform offers a secure and streamlined way to manage authorization when integrating with external web services. By configuring **Authorization (Auth) Profiles**, users can enforce access control policies while ensuring data privacy and regulatory compliance.

Whether connecting to external or commercial models via custom APIs or integrating tools through the AI or API node, the platform provides a structured framework to handle user authorization. This simplifies security configurations, strengthens access control, and enables smooth identity verification across various services.

Key capabilities of managing Auth Profiles on the Platform include:

* **Defining Authorization Rules**
Specify auth methods and requirements, such as passwords, token fields, and custom authorization parameters.
* **Securing Access**
Ensure only authorized users or systems can connect to external services, protecting sensitive data from unauthorized access.
* **Profile Reusability** 
Reuse Auth Profiles across multiple integrations and endpoints for consistency, reduced configuration effort, and streamlined maintenance.
* **Connection Testing and Validation**
Verify that identity and authorization tokens are correctly passed to external services, ensuring the integration is secure and functional.

## Access Authorization Profile

To access the feature, follow the steps below:

1. Log in to your account and click **Autonomous Agents** from the list of modules.
2. Click **Settings** on the top navigation bar.
3. Click **Security & Control** -> **Authorization profile** on the left navigation menu.

## Supported Auth Models

You can enable a single auth profile or create custom profiles tailored for accessing third-party web services. These profiles support the following authorization types:


### OAuth V2

OAuth 2.0 (OAuth2) is a standard authorization framework that enables applications to obtain limited, secure, and token-based access to a user’s account on an HTTP service, such as Google, Facebook, or GitHub without exposing the user's credentials. It supports multiple grant types, uses scopes for permissions, and enables long-term access with refresh tokens, making it ideal for API authentication.

**Key Features**

* **Secure, Token-Based Authorization** – Grants access without sharing user credentials, using short-lived access tokens. 

* **Multiple Authorization Flows** – Supports different grant types (e.g., Authorization Code, Client Credentials) for various use cases. 

* **Scope-Based Access Control** – Users can grant apps limited permissions (e.g., read-only access). 

* **Refresh Token Support** –  Enables seamless re-authorization without requiring user login. 

* **Third-Party & Scalable Integration** – Widely adopted for API authentication, allowing secure third-party access (e.g., "*Sign in with Google*").

### OAuth V2 Client Credential

The Client Credentials flow is one of the OAuth 2.0 authorization grant types. It is primarily used in Machine-to-Machine (M2M) scenarios, where an application needs to access resources or perform operations on its own behalf — without user interaction.

**How it Works**

1. The client application authenticates with the Authorization Server by presenting its client ID and client secret.

2. Upon successful authentication, the Authorization Server issues an access token.

3. The client uses this token to authenticate API requests to the Resource Server.

**Key Features**

* **Client Credentials**: This flow uses the client's unique identifier (client ID) and a secret (client secret) to authenticate the application with the authorization server. 
* **No User Interaction**: Unlike flows involving user authorization (e.g., authorization code flow), the client credentials flow doesn't require the user to log in or grant permissions. 
* **Machine-to-Machine (M2M) Communication**: This flow is ideal for scenarios where one application needs to access resources owned by another application, such as microservices or server-to-server communication. 
* **Resource Access**: The client uses the acquired access token to interact with the resource server and access protected resources. 
* **Access Token**: The authorization server issues an access token, a short-lived credential that allows the client to access specific resources. 

## Add Authorization Profile

To add a new Auth profile, you must first set up the required auth fields with the steps below: 

1. [Navigate](../security-and-control/authorization-profile.md#access-authorization-profile) to the **Authorization Profile** feature.
2. Click **Create Authorization Profile** if this is your first auth profile.
<img src="../images/click-create-auth-profile.png" alt="create auth profile" title="create auth profile" style="border: 1px solid gray; zoom:75%;">  

Otherwise, click **Add new auth**.
<img src="../images/add-new-auth-profile.png" alt="add new auth profile" title="add new auth profile" style="border: 1px solid gray; zoom:75%;">  

<ol start="3"><li>In the <b>New Authorization Mechanism</b> dialog, select the required option for <b>Authorization Type</b>.</li> 
<img src="../images/select-oauthv2.png" alt="select oauth v2" title="select oauth v2" style="border: 1px solid gray; zoom:75%;"></ol>  
<ol start="4"><li>In the <b>Identity Provider Name</b> field, enter a name for the authorization type, which is mandatory.
<img src="../images/identity-provider.png" alt="identity provider" title="identity provider" style="border: 1px solid gray; zoom:75%;"/></li>
<li>Provide the values for the mandatory authorization fields. For details, refer to the <a href="#define-authorization-fields">Define Authorization Fields</a> section. 

If the mandatory fields are left blank, validation error messages appear, as shown below.

<img src="../images/form-validation-errors.png" alt="validation errors" title="validation errors" style="border: 1px solid gray; zoom:75%;"/></li>
<li>(Optional) Click <b>+ Add Additional Field</b> to add additional fields for authorization. See the <a href="#add-additional-field">Add Additional Field</a> section.</li></ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If the default <b>Username</b> and <b>Password</b> fields do not meet your authorization requirements, you can add <b>custom fields</b> using additional fields or authorization IDP form fields to the authorization process. For example, if a <b>PIN code</b> is required in addition to the standard login fields, you can include it as an extra input for the end user.</p>
</div>
    
<ol start="7"><li>(Optional step to be executed only when you select <b><i>OAuth V2</i></b> as the Authorization type) Click <b>+ Add Authorization Field</b> to add additional auth fields to your profile. This is required For more information, see the <a href="#add-authorization-field">Add Authorization Field</a> section.</li>
<li>Click <b>Save new Auth</b>.</li>
<img src="../images/save-new-auth.png" alt="save new auth" title="save new auth" style="border: 1px solid gray; zoom:75%;"></ol>

A success message is displayed, and the new auth profile is added to the **Authorization Profile** page.

## Define Authorization Fields

To configure the OAuth2 profile, define the fields described in the table below:

 <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>Except for <b>Scope</b>, <b>Description</b>, <b>Refresh Token URL</b>, <b>Additional fields</b>, <b>Authorization fields</b>, and <b>Auth Error Status Code</b>, all the fields are mandatory.</p>
    </div>

<table>
  <tr>
   <td>FIELD NAME
   </td>
   <td>DESCRIPTION
   </td>
   <td>MANDATE
   </td>
   <td>AUTH TYPE</td>
  </tr>
  <tr>
   <td><strong>Authorization Type</strong>
   </td>
   <td>Select an option from the dropdown. <i>OAuth V2</i> and <i>OAuth v2 Client Credential</i> are currently supported.
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Identity Provider Name</strong>
   </td>
   <td>The name of the identity provider or service, for example, <em>Okta.</em>
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>Enter a description for your auth profile.
   </td>
   <td>Optional
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Callback URL</strong>
   </td>
   <td>The endpoint in an OAuth 2.0 flow where the authorization server redirects the user after they grant or deny permission. It is used to return the authorization code or access token to the client application. The default URL is provided in the form. 
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Client ID</strong>
   </td>
   <td>
    A unique identifier assigned that helps the authorization server recognize the application making authorization or API access requests. It helps in the following:
<ul>

<li>Used in <strong>OAuth flows</strong> to obtain access tokens</li>

<li>Helps in tracking and logging API requests</li>

<li>Ensures security by linking requests to a registered client.</li>
</ul>
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Client Secret</strong>
   </td>
   <td>
    A confidential key assigned to an application to authenticate its identity when requesting access tokens from the authorization server, ensuring secure and authorized API access.
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Authorization URL</strong>
   </td>
   <td>
    The endpoint where users are redirected to authenticate and grant permissions to an application before it can access protected resources on their behalf. Example: <code>https://auth.example.com/oauth/authorize</code>
   </td>
   <td>Required
   </td>
   <td>OAuth V2</td>
  </tr>
  <tr>
   <td><strong>Subdomain(aka tenancy URL)</strong>
   </td>
   <td>
    A unique URL assigned to a specific tenant (organization, customer, or user group) within a multi-tenant system. It is used to differentiate and isolate data, authorization, and access for each tenant. You must select one of the following options based on your auth profile:
<ul>

<li>No, this tool and all of its tasks do not have tenancy URLs.</li>

<li>Yes, some tasks will have tenancy URLs and the user will need to provide that to successfully authenticate.</li>
</ul>
   </td>
   <td>Required
   </td>
   <td>OAuth V2</td>
  </tr>
  <tr>
   <td><strong>Token request URL</strong>
   </td>
   <td>
    The endpoint where a client application exchanges an <strong>authorization code</strong> or <strong>refresh token</strong> for an <strong>access token</strong>. This token allows the client to authenticate API requests on behalf of the user.
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Scope</strong>
   </td>
   <td>
    Defines the level of access that a client application is requesting from the resource owner (user). It specifies what <strong>actions</strong> the application is allowed to perform and what <strong>resources</strong> it can access.  
Example: <code>read_profile</code>.
   </td>
   <td>Optional
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Additional Fields</strong>
   </td>
   <td>
    Refer <a href="#add-additional-field">here</a>.
   </td>
   <td>Optional
   </td>
   <td>OAuth V2</td>
  </tr>
  <tr>
   <td><strong>Authorization Fields</strong>
   </td>
   <td>
    Refer <a href="#add-authorization-field">here</a>.</td>
   <td>Optional
   </td>
   <td>OAuth V2</td>
  </tr>
  <tr>
   <td><strong>Refresh token URL</strong>
   </td>
   <td>
    The endpoint where a client application sends a request to obtain a new <strong>access token</strong> using a <strong>refresh token</strong> (whenever the access token expires). Example: <code>https://auth.example.com/oauth/access</code>

<p><strong>Note</strong>: When the <strong>Refresh Token URL</strong> or refresh token expires, the following happens:
<ul>

<li>The auth profile starts failing everywhere it is used.</li>

<li>The user will receive an email to reconfigure a new URL or refresh token to ensure continuous and uninterrupted service.</li>
</ul></p>
   </td>
   <td>Optional
   </td>
   <td>OAuth V2</td>
  </tr>
  <tr>
   <td><strong>Auth Error Status Code</strong>
   </td>
   <td>
    When authorization fails in OAuth 2.0, the server returns an HTTP status code along with an error message to indicate the issue.
   </td>
   <td>Optional
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
</table>

## Add Additional Field

These fields are used to collect additional authorization details from end users and allow you to incorporate extra security measures, such as a PIN code, device ID, or other parameters, alongside the standard credentials for *OAuth V2*. By customizing the authorization input fields, you can enhance security and align the authorization process with your specific business or compliance needs.


To add additional fields, follow the steps below:

1. Click **+ Add Additional Field** in the **New Authorization Mechanism** window and enter one or more key-value pairs.

    <img src="../images/add-additional-field-click.png" alt="add additional field" title="add additional field" style="border: 1px solid gray; zoom:75%;">

2. Add values for the following fields:

<table>
  <tr>
   <td>PARAMETER
   </td>
   <td>DESCRIPTION
   </td>
   <td>REQUIRED/OPTIONAL
   </td>
   <td>EXAMPLE
   </td>
  </tr>
  <tr>
   <td><strong>Field Key</strong>
   </td>
   <td>The name of the additional field. 
   </td>
   <td>Required
   </td>
   <td>Pin code
   </td>
  </tr>
  <tr>
   <td><strong>Field Value</strong>
   </td>
   <td>The value for the additional field.
   </td>
   <td>Required
   </td>
   <td>2344567
   </td>
  </tr>
</table>

<ol start="3"><li>Click <b>Done</b>.</li></ol>

The new custom field is added to the Additional Fields list, where you can edit or delete it.

## Add Authorization Field

Authorization fields are data fields used in API requests to verify the identity of a user, system, or application and determine their permissions to access resources. These fields ensure authorization and access control in APIs, particularly for token-based authorization in the Platform.


To add auth fields, follow the steps below:

1. Click **+ Add Authorization Field** in the **New Authorization Mechanism** window and enter one or more key/value pairs.
<img src="../images/add-auth-field-new.png" alt="add new auth field" title="add new auth field" style="border: 1px solid gray; zoom:75%;">

2. Add values for the following fields:

<table>
  <tr>
   <td>
<strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>Field Type
   </td>
   <td>Defines how authorization data is sent and verified in an API request within the Platform for token-based authorization. The supported types include:
<ul>

<li><strong>Header</strong>: Used to send authorization credentials, such as API tokens.</li>

<li><strong>Payload</strong>: Used in <code>POST</code> or <code>PUT</code> requests, sending credentials in the request body.</li>

<li><strong>Query String</strong><em>:</em> Credentials are passed in the URL.</li>

<li><strong>Path Param</strong>: Credentials or tokens are included in the URL path.</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Field Key
   </td>
   <td>The name of the auth field. Example: <em>Profile_id.</em>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Field Value
   </td>
   <td>The value of the auth field. Example: <em>123_xyz</em>.
   </td>
   <td>Optional
   </td>
  </tr>
</table>


<ol start="3"><li>Click <b>Done</b>.</li></ol>

<img src="../images/auth-field-form.png" alt="auth field form" title="auth field form" style="border: 1px solid gray; zoom:75%;">  

The new field is added to the Authorization Fields list.  You can edit or delete this custom field.
<img src="../images/new-auth-field-listing.png" alt="new auth field" title="new auth field" style="border: 1px solid gray; zoom:75%;">


## Authorization Profile Summary

Each authorization you add to your account is displayed in the **Authorization Profile** window with the following options:

* **Name**: The name you provide to the Auth profile you create.
* **Authorization Type**: The method/type set for the Auth Profile. Currently, only **oauth v2** is available.
* **Test auth**: Click the **Test** button corresponding to a configured profile to check if it establishes a connection with an external service based on the configured profile.
* **Status**: Displays **Configured** or **Not Configured** based on the configuration status.
    
<img src="../images/auth-profile-summary.png" alt="auth profile summary" title="auth profile summary" style="border: 1px solid gray; zoom:75%;">  

## Test the Auth Profile

The **Test** button is enabled when you provide all the fields in the **New authorization mechanism** window. To validate the connection using the configured mechanism, click **Test**.

A new window appears where the Platform tries to establish a connection with the external service through the configured auth profile.

A successful connection is shown below:

<img src="../images/successful-oauth-connection.png" alt="successful connection" title="successful connection" style="border: 1px solid gray; zoom:50%;">  

If the connection fails, edit the auth profile with the correct information and test the connection again. 

## Manage Auth Profile

You can either edit the configured values of an auth profile or delete it from the system.

### Edit

1. Click the **Ellipses** icon for an Auth profile on the **Authorization Profile** page. 
2. Click **Edit**.
<img src="../images/edit-auth-profile.png" alt="edit auth profile" title="edit auth profile" style="border: 1px solid gray; zoom:75%;">  

3. Modify the required fields in the **Update authorization mechanism** window.
4. Click **Update new auth**.

   A success message appears when the auth profile information is updated.

<div class="admonition note">
<p class="admonition-title">Important</p>
<p>The <b>Authorization Type</b> and <b>Name</b> fields cannot be edited, but all other parameters can be modified.</p>
</div>

### Delete

To delete an Auth profile, follow the steps below:

1. Click the **Ellipses** icon and select **Delete**.
<img src="../images/delete-auth-profile.png" alt="delete auth profile" title="delete auth profile" style="border: 1px solid gray; zoom:75%;">  

2. Click **Delete** in the confirmation window.

   A success message is displayed, and the profile is removed from the **Authorization profile** page.

<div class="admonition warning">
<p class="admonition-title">Caution</p>
<p>Deleted profiles cannot be recovered. Proceed with caution.</p>
</div>
