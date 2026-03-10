# Authentication Settings

Authentication Settings lets administrators configure how users sign in to the Platform. You can enable Single Sign-On (SSO) to authenticate users through your organization's identity provider, and Multi-Factor Authentication (MFA) to add a second layer of verification for email/password sign-ins.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Only account owners and admins can configure Authentication Settings.</p></div>

## How SSO and MFA Work Together

The Platform supports two authentication paths, and MFA scope adjusts automatically based on which path is active:

| **Authentication State** | **Who Signs In Via Email/Password** | **MFA Managed By** |
|---------------------------|-------------------------------------|--------------------|
| SSO Disabled              | All users                          | Platform (applies organization-wide) |
| SSO Enabled               | SSO-excluded users only             | Platform (applies to excluded users only); the Identity Provider (IdP) manages all other users' MFA |

### Access Authentication Settings

1. Log in to your account and click **Settings** on the top navigation bar.
2. In the left menu, go to **Security & Control** > **Authentication Settings**.

The page is divided into two sections: 

* Single Sign-On (SSO) Configuration
* Multi-Factor Authentication (MFA).

## Single Sign-On (SSO)

SSO allows users to access their Platform accounts using credentials managed by an external IdP. Once authenticated with the IdP, users can access the Platform without a separate login.

**Key benefits:**

* **Secure Access** — Reduces password fatigue and the risk of phishing or weak passwords.
* **Simplified User Management** — Centrally grant or revoke access across all users.
* **Improved User Experience** — Eliminates repeated logins within the same session.
* **Centralized Access Control** — Enforce and monitor security policies across all applications from one place.

**Supported SSO Protocols and Providers**

| **Protocol**       | **Providers**                          |
|---------------------|----------------------------------------|
| [SAML 2.0](#saml-20)           | Okta, OneLogin, Other Provider          |
| [WS-Federation](#ws-federation)      | Windows Azure, Other Provider           |
| [OpenID Connect ](#other-configuration-1)    | Google                                  |

### How SSO Works

1. A user attempts to access their Platform account.
2. The Service Provider (SP) redirects the user to the IdP login page.
3. The user provides their credentials to the IdP.
4. On successful authentication, the IdP issues an authentication token.
5. The SP uses the token to grant the user access.
6. The user can access all permitted accounts for the remainder of the session without needing to log in again.

### SSO Status

The **SSO Status** toggle at the top of the SSO Configuration section controls whether SSO is active for your organization.

| **Toggle State**          | **Behavior**                                                                |
|----------------------------|------------------------------------------------------------------------------|
| SSO Disabled (default)     | All users authenticate via email and password. The SSO Protocol, Identity Provider, and SSO-Excluded Users sections are hidden. |
| SSO Enabled                | Users authenticate through the configured identity provider. The SSO Protocol, Identity Provider, and SSO-Excluded Users sections appear. |

### Enable SSO

1. Go to **Security & Control** > **Authentication Settings**.
2. Under **SSO Status**, toggle **SSO Enabled**.
3. Under **SSO Protocol**, select one of the following: SAML 2.0, WS-Federation, or OpenID Connect
4. Under **Identity Provider**, select your provider: Okta, OneLogin, or Other Provider.
5. Configure the [parameters](#configuration-parameters) for your selected protocol and provider.
6. Add at least one SSO-excluded user (see [SSO-Excluded Users](#sso-excluded-users)).
7. Select **Save**.

### Disable SSO

Disabling SSO collapses the SSO Protocol, Identity Provider, and SSO-Excluded Users sections, and reverts all users to email/password authentication. The MFA section updates automatically to reflect organization-wide scope.

**Steps:**

1. Go to **Security & Control** > **Authentication Settings**.
2. Under **SSO Status**, toggle off **SSO Enabled** (it will show **SSO Disabled**).
3. In the confirmation dialog, select **Yes** to confirm.

**Note:** Previously configured SSO parameters are retained and visible if you re-enable SSO.

### SSO-Excluded Users

When SSO is enabled, all users must sign in through the configured IdP by default. Use this section to designate specific users who can bypass SSO and sign in via email/password instead — useful when the SSO provider is unavailable, misconfigured, or the certificate has expired.

**Note:** The account owner is excluded by default. It is strongly recommended to exclude at least one additional admin user as a fallback.

### Add an Excluded User

1. Enter a valid email address in the **Add User Email** field.
2. Click **Add User**. The user appears as a chip in the **Excluded Users** list.
3. Click **Save**.

**Sign-In Flow for Excluded Users**

Excluded users can sign in via email/password even when SSO is enabled. If MFA is configured, they are prompted to complete verification before access is granted.


### Configuration Parameters

The following parameters should be configured on the Platform based on the protocol and IDP you select:

<table>
  <tr>
   <td><strong>Protocol</strong>
   </td>
   <td><strong>Provider</strong>
   </td>
   <td><strong>Parameters</strong>
   </td>
  </tr>
  <tr>
   <td>SAML
   </td>
   <td>Okta
   </td>
   <td>
<ul>

<li><strong>Okta single sign-on url</strong>: The SSO endpoint URL for <em>Okta</em> to enable Service Provider initiated SAML flow.</li>

<li><strong>Identity provider issuer: </strong>The entity (URL) that provides the user identities, including the ability to authenticate a user.</li>

<li><strong>Certificate: </strong>The public certificate stored by the service provider from the IDP is used to validate a user signature. You can add multiple (a maximum of 2) certificates and delete already added invalid certificates. </li>
</ul>
   </td>
  </tr>
  <tr>
   <td>SAML
   </td>
   <td>Onelogin
   </td>
   <td>
<ul>

<li><strong>SAML 2.0 endpoint</strong>: The SSO endpoint URL for <em>Onelogin</em> to enable Service Provider-initiated SAML flow.</li>

<li><strong>Issuer url</strong>: The same as the <strong>Identity provider issuer </strong>for Okta.</li>

<li><strong>X.509 certificate</strong>: The same as the <strong>Certificate</strong> for Okta.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>SAML
   </td>
   <td>Other
   </td>
   <td>
<ul>

<li><strong>Single sign-on url: </strong>The SSO endpoint URL for <em>the IDP</em> to enable Service Provider initiated SAML flow.</li>

<li><strong>Issuer url: </strong>The same as the <strong>Identity provider issuer </strong>for Okta.</li>

<li><strong>Certificate: </strong>The same as the <strong>Certificate</strong> for Okta.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>WS-Federation
   </td>
   <td>Windows Azure
   </td>
   <td>
<ul>

<li><strong>Azure AD sign-on end point url</strong>:  The URL that the Platform sends sign-on and sign-off requests using <em>Azure</em>. The response for the authentication is sent to the <strong>Reply URL</strong> defined in your <em>Azure</em> Active Directory configuration settings.</li>

<li><strong>Azure AD federation metadata document</strong>: The URL for the federation metadata document used for authentication with <em>Azure</em> Active Directory.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>WS-Federation
   </td>
   <td>Other
   </td>
   <td>
<ul>

<li><strong>AD sign-on end point url: </strong>The same as <strong>Azure AD sign-on end point url </strong>for Windows Azure.</li>

<li><strong>AD federation metadata document url</strong>: The same as <strong>Azure AD federation metadata document for </strong>Windows Azure.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>OpenID Connect
   </td>
   <td>Google
   </td>
   <td>
No additional configuration is required. Your users will be authenticated based on their valid Google credentials.
   </td>
  </tr>
</table>

**Note:** Multiple certificates: When multiple certificates are added, the system uses the most recently added one. If that certificate is invalid, it automatically falls back to the next available certificate.

## Multi-Factor Authentication (MFA)

MFA adds a second layer of verification during sign-in for users who authenticate via email/password. The Platform supports the following MFA methods: Email Verification, Authenticator App (TOTP), and SMS.

### Enable MFA

1. Go to Security & Control > Authentication Settings.
2. Under MFA Status, toggle MFA Required.
3. Under Allowed MFA Methods, select the methods to enable — Email Verification, Authenticator App, or SMS.
4. Click Save.

### Disable MFA

1. Under MFA Status, toggle off MFA Required (it will show MFA Disabled).
2. Click Save.

### MFA for Users (First Login)

When MFA is enabled and a user signs in for the first time:

1. The user enters their email address and password.
2. The Platform prompts the user to set up an MFA method.
3. On subsequent logins, the user is prompted to enter their MFA verification code.
4. On successful verification, access is granted.

## SSO Protocol Reference

### SAML 2.0

Security Assertion Markup Language (SAML) is a protocol for web-based SSO that uses secure tokens instead of passwords. It allows IDPs and SPs to operate separately. When a user logs into a SAML-enabled app, the service provider requests authorization from the IDP, which authenticates the user and grants access to the application.

### How SAML works

SAML SSO works by transferring the user’s identity from one place (the IDP) to another (the SP) through an exchange of digitally signed XML documents.

When a user logs into a system that acts as an IDP and tries to access his Platform account, the following happens:

1. The user accesses the remote app on the IDP portal using the sign-on endpoint URL, and the application loads.
2. The application identifies the user’s origin (by application subdomain, user IP address, or similar) and redirects the user back to the IDP, asking for authentication. This is the authentication request.
3. The user either has an existing active browser session with the IDP or establishes one by logging into the IDP.
4. The IDP builds the authentication response in an XML document containing the user’s username or email address, signs it using an X.509 certificate, and posts this information to the SP.
5. The SP, which already knows the IDP and has a certificate fingerprint, retrieves the authentication response and validates it using the certificate fingerprint.
6. The user's identity is established, and the user is provided with the Platform account access.

### Okta Configuration

Okta's Single Sign-On (SSO) offers a seamless user experience by enabling one login for multiple applications across different platforms. It enhances security through multi-factor authentication (MFA), zero-trust architecture, and password-less options. 

Okta's scalable and customizable platform reduces IT overhead, improves productivity, and supports compliance with governance standards like GDPR and HIPAA. 

To configure SSO using SAML and Okta, follow the steps below:

1. Go to the **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **SAML** for **Sign-on protocol** and **Okta** for **SSO provider**.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If you already have the required parameters for Okta, move directly to Step 18.</p></div>

<ol start="4"><li>Login to the <a href="https://developer.okta.com/login/" target="_blank">Okta developer portal</a>.</li>
<li>On the dashboard, click <b>Applications</b> on the left menu.</li>
<li>Click <b>Create App Integration</b>.</li>
<img src="../images/okta-create-app-integration.png" alt="okta create app integration" title="okta create app integration" style="border: 1px solid gray; zoom:75%;"></ol>

<ol start="7"><li>In the <b>Create a new app integration</b> window, select <b>SAML 2.0</b> and click <b>Next</b>.
<img src="../images/create-a-new-app-integration.png" alt="create a new app integration" title="create a new app integration" style="border: 1px solid gray; zoom:75%;"></li>
<li>On the <b>Create SAML Integration</b> page, provide the <b>App Name</b> under <b>General Settings</b>, and click <b>Next</b>.
<img src="../images/create-saml-integration.png" alt="create saml integration" title="create saml integration" style="border: 1px solid gray; zoom:75%;"></li>
<li>Copy the following values from the Platform’s SSO setup page and paste them into Okta under <b>Configure SAML</b>:</li>
<ul><li><b>ACS url for SP initiated SAML flow</b>: Paste into <i>Single sign-on URL</i>.</li>
<li><b>ACS url for IDP initiated SAML flow</b>: Paste into <i>Audience URI (SP Entity ID)</i>.</li></ul></ol>

<table>
  <tr>
   <td>
<strong>Okta Parameter</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Single sign-on URL</strong>
   </td>
   <td>The location where the SAML assertion is sent with an HTTP POST. This is often called the SAML Assertion Consumer Service (ACS) URL for your application.
   </td>
  </tr>
  <tr>
   <td><strong>Audience URI (SP Entity ID)</strong>
   </td>
   <td>The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application.
   </td>
  </tr>
</table>

<ol start="10"><li>Click <b>Next</b>.</li>
<li>Click <b>Finish</b> under <b>Feedback</b> on Okta’s <b>Create SAML Integration</b> page.</li>
<li>Once the app is created, go to the <b>Sign On</b> tab and click <b>View Setup Instructions</b>.</li>
<li>On the <b>How to Configure SAML 2.0 for <app-name> Application</b> page, do the following from Okta into the Platform:</li>
<ul><li>Copy the <b>Identity Provider Single Sign-On URL</b> value and paste it into the <b>Okta Single Sign-On URL</b>.</li>
<li>Copy the <b>Identity Provider Issuer</b> value into the <b>Identity provider issuer</b>.</li></ul>
<li>Go to <b>Sign On</b> > <b>SAML Signing Certificates</b> on your Okta app.</li>
<li>Click <b>Download certificate</b> under <b>Actions</b> for the required certificate.
<img src="../images/download-certificate-saml.png" alt="download certificate" title="download certificate" style="border: 1px solid gray; zoom:75%;"></li>
<li>Once the certificate is downloaded, open it in Notepad and copy the data between the <b>BEGIN CERTIFICATE</b> header and <b>END CERTIFICATE</b> footer.
<img src="../images/okta-certificate-notepad.png" alt="okta certificate" title="okta certificate" style="border: 1px solid gray; zoom:75%;"></li>
<li>Paste the value into the <b>Certificate</b> field on the Platform’s SSO setup page.</li>
To add a new certificate, click <b>+ Add new</b>.</ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.</p></div>

<ol start="18"><li>Click <b>Save</b>.
Once SSO for Okta is complete, the system will redirect to the <b>Okta Sign in</b> page for the Platform account authentication.</li></ol>

### Onelogin Configuration

OneLogin's Single Sign-On (SSO) solution simplifies user access by enabling a single login for multiple applications across platforms, improving workflow efficiency. It enhances security with advanced multi-factor authentication (MFA), password-less options, and machine learning-based risk assessments that are compliant with security standards like GDPR and HIPAA.

To configure SSO using SAML and Onelogin, follow the steps below:

1. Go to **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **SAML** for **Sign-on protocol** and **Onelogin** for **SSO provider**.
4. Login into the [Onelogin developer portal](https://app.onelogin.com/login){:target="_blank"}.
5. Go to **Applications** > **Add Apps** to access your app.
<img src="../images/onelogin-add-app.png" alt="onelogin add app" title="onelogin add app" style="border: 1px solid gray; zoom:75%;">

<ul><li>To learn how to <b>add a new app</b>, click <a href="https://onelogin.service-now.com/support?id=kb_article&sys_id=9bf39e0047ccbd509d8dfd1f536d431c&kb_category=e9866930db185340d5505eea4b9619b7#manage-add" target="_blank">here</a>.</li>
<li>To learn how to <b>configure apps</b>, click <a href="https://onelogin.service-now.com/support?id=kb_article&sys_id=9bf39e0047ccbd509d8dfd1f536d431c&kb_category=e9866930db185340d5505eea4b9619b7#config" target="_blank">here</a>.</li></ul>

<ol start="6"><li>Search for your Platform app and click <b>Enter</b>.</li>
<li>Click your app to view the <b>Add App</b> page. Optionally, change the display name or the icons displayed to your users in the <i>OneLogin</i> portal, and then click <b>SAVE</b>. The Platform app has been added to your company apps for <i>OneLogin</i> and is listed on the app page.</li>
<li>Copy the following values from <b>SSO</b> > <b>Enable SAML2.0</b> on Onelogin and paste them into the relevant fields on the Platform’s SSO setup page:</li>
    <ul><li><b>OneLogin SAML 2.0 Endpoint (HTTP)</b>: Paste into <b>SAML 2.0 endpoint</b>.</li>
    <li><b>OneLogin Issuer URL</b>: Paste into <b>Issuer URL</b>.</li></ul>

<li>In the <b>OneLogin X.509 Certificate</b> field, click <b>View Details</b>. The <b>Standard Strength Certificate (2048-bit)</b> page is displayed.
<img src="../images/onelogin-view-details.png" alt="one login view details" title="one login view details" style="border: 1px solid gray; zoom:75%;"></li>
<li>In the <b>X.509 Certificate</b> section, copy the certificate data and then paste it into the <b>X.509 Certificate</b> field on the Platform’s SSO setup page.</li>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Copy data after the <b>BEGIN CERTIFICATE</b> header and before the <b>END CERTIFICATE</b> footer.</p></div>

To add a new certificate, click <b>+Add new</b>.
<img src="../images/add-new-x-509-certificate.png" alt="add new x 509 certificate" title="add new x 509 certificate" style="border: 1px solid gray; zoom:75%;"></ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.</p></div>

<ol start="11"><li>Copy the following field values from the Platform’s SSO setup page into the relevant fields in Onelogin:</li>

<ul><li>ACS URL for SP Initiated SAML Flow.</li>
<li>ACS URL for IDP Initiated SAML Flow.</li></ul>

<li>Click <b>Save</b> on the Platform and Onelogin.</li></ol>

Once SSO for Onelogin is complete, the system redirects to the **Onelogin Sign in** page for the the Platform account authentication.

### Other Configuration

To configure and enable SSO using SAML for other IDPs of your choice, follow the steps below:

1. Go to the Platform’s **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **SAML** for **Sign-on protocol** and **Other** for **SSO provider**.
4. Fetch the necessary SSO configuration parameters listed in [this](../security-and-control/single-sign-on.md#configuration-parameters){:target="_blank"} table from your app's **Settings** page within the IDP developer portal. 
5. Paste them into the relevant fields on the Platform’s SSO setup page.

To add a new certificate, click **+Add new**.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.
</p></div>

<ol start="6"><li>Copy and paste <b>ACS url for SP initiated SAML flow</b> and <b>ACS url for IDP initiated SAML flow</b> values from the Platform into the relevant app fields within the IDP’s developer portal.</li>
<li>Click <b>Save</b>.</li></ol>

## WS-Federation

**WS-Federation** (Web Services Federation) is a protocol used for federated identity management. It allows the secure sharing of identity information across different security domains or systems. It enables Single Sign-On (SSO) by allowing users to authenticate with a trusted IDP and access services across different organizations or platforms without logging in multiple times.

### How WS-Federation Works

When a user logs into a system that acts as an IDP and tries to access his Platform account, the following happens:

1. The relying party redirects the user to the IDP for authentication.
2. The IDP authenticates the user through credentials or another authentication mechanism.
3. **Security Token Issued**: Once authenticated, the IDP issues a security token containing the user’s identity and claims.
4. **Token Sent to Relying Party**: The token is sent back to the relying party, which validates it.
5. **Access Granted**: The user is granted access to the requested service based on the verified token.

### Windows Azure Configuration

Azure AD Federation with WS-Federation offers seamless SSO integration with Microsoft services, advanced security features like MFA and conditional access, and centralized user management. It supports flexible authentication protocols, scales with organizational growth, and ensures high availability for an enhanced user experience.

To configure SSO using WS-Federation and Windows Azure, follow the steps below:

1. Go to the Platform’s **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **WS-Federation** for **Sign-on protocol** and **Windows Azure** to **Configure SSO for WS-Federation**.
4. Open **Server Manager** on the computer running AD FS, then choose **AD FS** > **Tools** > **AD FS Management**.
5. Copy **IdP URL** from your IdP metadata (FederationMetadata.xml). You can find your ADFS Federation Metadata file URL on the AD FS server through **ADFS Management** in **ADFS** > **Service** > **Endpoints** > **Metadata**. It should look like this:

   <img src="../images/copy-idp-url.png" alt="copy idp url" title="copy idp url"  style="border: 1px solid gray; zoom:75%;">

6. Paste this value into the **Azure AD sign-on end point url** field on the Platform’s SSO setup page.
7. Copy and paste [this](https://login.microsoftonline.com/common/FederationMetadata/2007-06/FederationMetadata.xml){:target="_blank"} URL link into the **Azure AD federation metadata document** field on the Platform’s SSO setup page.
8. Click **Save**.

### Other Configuration

To configure and enable SSO using WS-Federation and other IDPs of your choice, follow the steps below:

1. Go to the Platform’s **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **WS-Federation** for **Sign-on protocol** and **Other** to **Configure SSO for WS-Federation**.
4. Copy and paste the SSO endpoint URL from the IDP’s portal into **AD sign-on end point url** on the Platform’s SSO setup page.
5. Then, copy and paste the URL for the WS-Federation metadata document from the IDP’s portal into the **AD federation metadata document url** on the Platform’s SSO setup page.
6. Click **Save**.

## OpenID Connect Configuration

**OpenID Connect** (OIDC) is an authentication layer built on top of the OAuth 2.0 framework that enables Single Sign-On (SSO) by providing a standardized way for applications to authenticate users and obtain user identity information. The Platform currently supports Sign in with Google for this protocol.

### How OpenID Connect Works

When a user logs into a system that acts as an IDP and tries to access his Platform account, the following happens:

1. The application redirects the user to the IDP for authentication.
2. The user logs in at the IDP portal.
3. IDP redirects the user back with an authorization code.
4. The application exchanges the code for ID and access tokens.
5. The application validates tokens and grants access.
6. Users can access other integrated applications without re-authenticating.

### Google Configuration

To configure SSO using OpenId Connect and Google, follow the steps below:

1. Go to the Platform’s **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **OpenId Connect** for **Sign-on protocol** and **Sign in with Google** to **Configure SSO for OpenId connect**.
4. Click **Save**.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>No further configuration is needed. Users will be authenticated using their Google account’s username and password.</p></div>

**Related resource**

* [Settings Console](../../administration/overview.md){:target="_blank"}- Learn more about other the Platform's admin features.