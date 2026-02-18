# Manage Single Sign On for Account Sign In

AI for Process provides users with a default sign-in flow as the standard authentication method. However, for organizations seeking enhanced security and convenience, administrators can enable **Single Sign-On (SSO)** through the **Settings** console.

By activating SSO, users can access their AI for Process accounts using a single set of secure credentials managed by an external Identity Provider (IDP). This setup streamlines the login process and integrates users into a unified authentication framework.

SSO is a powerful option for organizations looking to balance convenience and security in user authentication. It offers the following key benefits:

* **Secure Access**: It reduces password fatigue and the risk of phishing or weak passwords by focusing on one strong password.
* **Simplified User Management**: Administrators can manage access centrally, making it easier to grant or revoke access across various accounts.
* **Improved User Experience**: Reduces the need for multiple logins into an account.
* **Centralized Access Control**: Admins can monitor and enforce security policies across all applications more efficiently.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Only account owners and admins can enable/disable SSO from the <b>Settings</b> console.</p></div>

AI for Process supports SSO for the following protocols and providers:
<table>
  <tr>
   <td><strong>Protocol</strong>
   </td>
   <td><strong>Provider</strong>
   </td>
  </tr>
  <tr>
   <td>
<a href="#saml" target="_blank">SAML</a>
   </td>
   <td>
<ul>
<li><a href="#okta-configuration" target="_blank">Okta</a></li>
<li><a href="#onelogin-configuration" target="_blank">OneLogin</a></li>
<li><a href="#other-configuration" target="_blank">Other</a></li>
</ul>
   </td>
  </tr>
  <tr>
   <td><a href="#ws-federation" target="_blank">WS-Federation</a>
   </td>
   <td>
<ul>
<li><a href="#windows-azure-configuration" target="_blank">Windows Azure</a></li>
<li><a href="#other-configuration_1" target="_blank">Other</a></li>
</ul>
   </td>
  </tr>
  <tr>
   <td><a href="#openid-connect-configuration" target="_blank">OpenID Connect</a>
   </td>
   <td>
<ul>
<li><a href="#google-configuration" target="_blank">Google account</a></li>
</ul>
   </td>
  </tr>
</table>

## How SSO Works

1. **User Initiates Login**: A user attempts to access his AI for Process account.
2. **Redirect to IDP**: The Service Provider (SP) redirects the user to an IDP login page for authentication.
3. **User Authenticates**: The user provides their credentials to the IDP.
4. **Authentication Tokens**: If successful, the IDP issues an authentication token.
5. **Token Exchange**: The SP uses this token to grant the user access to the application.
6. **Access Granted**: Once authenticated, the user can access the allowed AI for Process account(s) without logging in again during the same session.

## Access Single Sign-on

To access the SSO feature, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings" style="border: 1px solid gray; zoom:75%;">

2. Go to **Security & Control** > **Single Sign On** on the left menu.

If you’re using this feature for the first time, the following screen appears.

<img src="../images/access-single-sign-on.png" alt="access sso" title="access sso" style="border: 1px solid gray; zoom:75%;">

If SSO is already configured, the **Single sign-on** setup page is displayed, as shown below.

<img src="../images/sso-set-up.png" alt="sso setup" title="sso setup" style="border: 1px solid gray; zoom:75%;">

## Enable SSO

Depending on your company's security requirements, you can enable SSO for your AI for Process account users. Enabling SSO includes selecting the protocol and IDP and providing the [parameters](../security-and-control/single-sign-on.md#configuration-parameters) to integrate with the IDP service.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>If you already have the required parameters for Okta, move directly to Step 18.</p></div>

### Configuration Parameters

The following parameters should be configured on AI for Process based on the protocol and IDP you select:

<table>
  <tr>
   <td><strong>Protocol</strong>
   </td>
   <td><strong>IDP</strong>
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

<li><strong>Azure AD sign-on end point url</strong>:  The URL that AI for Process sends sign-on and sign-off requests using <em>Azure</em>. The response for the authentication is sent to the <strong>Reply URL</strong> defined in your <em>Azure</em> Active Directory configuration settings.</li>

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

### Steps to Enable SSO

To enable SSO on the **Settings** console, follow the steps below:

1. Access the **Single sign on** page.
2. If no SSO is enabled, click **Enable SSO**.
<img src="../images/enable-sso.png" alt="enable sso" title="enable sso" style="border: 1px solid gray; zoom:75%;">

3. If SSO is already enabled for a provider, click the **Enable SSO** tab and do one of the following:

* Change and save the existing [parameters](../security-and-control/single-sign-on.md#configuration-parameters) for the enabled SSO provider.
* Disable the enabled SSO and set up a new configuration.
* Select a different protocol/provider and complete the configuration.

4. Select the required protocol and SP. The default selections are **SAML** and **Okta**.
5. Configure the [parameters](../security-and-control/single-sign-on.md#configuration-parameters) for one of the following SSO protocols and providers:

<ul><li><b>SAML</b>: <a href="#okta-configuration" target="_blank">Okta</a>, <a href="#onelogin-configuration" target="_blank">Onelogin</a>, or <a href="#other-configuration" target="_blank">Other</a>. <a href="#saml" target="_blank">Learn more</a>.</li>
<li><b>WS-Federation</b>: <a href="#windows-azure-configuration" target="_blank">Windows Azure</a> or <a href="#other-configuration" target="_blank">Other</a>. <a href="#ws-federation" target="_blank">Learn more</a>.</li>
<li><b>OpenId connect</b>: <a href="#google-configuration" target="_blank">Google</a>. <a [Learn more](#openid-connect-configuration) target="_blank"></a>.</li></ul>

<ol start="9"><li>Click <b>Save</b>.</li></ol>

A success message is displayed once the SSO setup is complete.
<img src="../images/sso-configuration-updated-successfully.png" alt="sso updated successfully message" title="sso updated successfully message" style="border: 1px solid gray; zoom:75%;">

Additionally, the timestamp of when you enabled SSO is displayed as shown below:
<img src="../images/sso-timestamp.png" alt="sso timestamp" title="sso timestamp" style="border: 1px solid gray; zoom:75%;">

## SAML

Security Assertion Markup Language (SAML) is a protocol for web-based SSO that uses secure tokens instead of passwords. It allows IDPs and SPs to operate separately. When a user logs into a SAML-enabled app, the service provider requests authorization from the IDP, which authenticates the user and grants access to the application.

### How SAML works

SAML SSO works by transferring the user’s identity from one place (the IDP) to another (the SP) through an exchange of digitally signed XML documents.

When a user logs into a system that acts as an IDP and tries to access his AI for Process account, the following happens:

1. The user accesses the remote app on the IDP portal using the sign-on endpoint URL, and the application loads.
2. The application identifies the user’s origin (by application subdomain, user IP address, or similar) and redirects the user back to the IDP, asking for authentication. This is the authentication request.
3. The user either has an existing active browser session with the IDP or establishes one by logging into the IDP.
4. The IDP builds the authentication response in an XML document containing the user’s username or email address, signs it using an X.509 certificate, and posts this information to the SP.
5. The SP, which already knows the IDP and has a certificate fingerprint, retrieves the authentication response and validates it using the certificate fingerprint.
6. The user's identity is established, and the user is provided with the AI for Process account access.

### Okta Configuration

Okta's Single Sign-On (SSO) offers a seamless user experience by enabling one login for multiple applications across different platforms. It enhances security through multi-factor authentication (MFA), zero-trust architecture, and password-less options. 

Okta's scalable and customizable platform reduces IT overhead, improves productivity, and supports compliance with governance standards like GDPR and HIPAA. 

To configure SSO using SAML and Okta, follow the steps below:

1. Go to AI for Process’ **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **SAML** for **Sign-on protocol** and **Okta** for **SSO provider**.
<img src="../images/saml-okta-selection.png" alt="saml-okta-selection" title="saml-okta-selection" style="border: 1px solid gray; zoom:75%;">

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
<li>Copy the following values from AI for Process’ SSO setup page and paste them into Okta under <b>Configure SAML</b>:</li>
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
<li>On the <b>How to Configure SAML 2.0 for <app-name> Application</b> page, do the following from Okta into AI for Process:</li>
<ul><li>Copy the <b>Identity Provider Single Sign-On URL</b> value and paste it into the <b>Okta Single Sign-On URL</b>.</li>
<li>Copy the <b>Identity Provider Issuer</b> value into the <b>Identity provider issuer</b>.</li>
    <img src="../images/copy-Identity-Provider-Issuer.png" alt="copy identity provider issuer" title="copy identity provider issuer" style="border: 1px solid gray; zoom:75%;"></ul>
<li>Go to <b>Sign On</b> > <b>SAML Signing Certificates</b> on your Okta app.</li>
<li>Click <b>Download certificate</b> under <b>Actions</b> for the required certificate.
<img src="../images/download-certificate-saml.png" alt="download certificate" title="download certificate" style="border: 1px solid gray; zoom:75%;"></li>
<li>Once the certificate is downloaded, open it in Notepad and copy the data between the <b>BEGIN CERTIFICATE</b> header and <b>END CERTIFICATE</b> footer.
<img src="../images/okta-certificate-notepad.png" alt="okta certificate" title="okta certificate" style="border: 1px solid gray; zoom:75%;"></li>
<li>Paste the value into the <b>Certificate</b> field on AI for Process’ SSO setup page.
<img src="../images/paste-okta-certificate.png" alt="paste okta certificate" title="paste okta certificate" style="border: 1px solid gray; zoom:75%;"></li>

To add a new certificate, click <b>+ Add new</b>.</ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.</p></div>

<ol start="18"><li>Click <b>Save</b>.
Once SSO for Okta is complete, the system will redirect to the <b>Okta Sign in</b> page for AI for Process account authentication.</li>
<img src="../images/okta-sign-in-page.png" alt="okta sign in page" title="okta sign in page" style="border: 1px solid gray; zoom:75%;"></ol>

### Onelogin Configuration

OneLogin's Single Sign-On (SSO) solution simplifies user access by enabling a single login for multiple applications across platforms, improving workflow efficiency. It enhances security with advanced multi-factor authentication (MFA), password-less options, and machine learning-based risk assessments that are compliant with security standards like GDPR and HIPAA.

To configure SSO using SAML and Onelogin, follow the steps below:

1. Go to AI for Process’ **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **SAML** for **Sign-on protocol** and **Onelogin** for **SSO provider**.
4. Login into the [Onelogin developer portal](https://app.onelogin.com/login).
5. Go to **Applications** > **Add Apps** to access your app.
<img src="../images/onelogin-add-app.png" alt="onelogin add app" title="onelogin add app" style="border: 1px solid gray; zoom:75%;">

<ul><li>To learn how to <b>add a new app</b>, click <a href="https://onelogin.service-now.com/support?id=kb_article&sys_id=9bf39e0047ccbd509d8dfd1f536d431c&kb_category=e9866930db185340d5505eea4b9619b7#manage-add" target="_blank">here</a>.</li>
<li>To learn how to <b>configure apps</b>, click <a href="https://onelogin.service-now.com/support?id=kb_article&sys_id=9bf39e0047ccbd509d8dfd1f536d431c&kb_category=e9866930db185340d5505eea4b9619b7#config" target="_blank">here</a>.</li></ul>

<ol start="6"><li>Search for your AI for Process app and click <b>Enter</b>.</li>
<li>Click your app to view the <b>Add App</b> page. Optionally, change the display name or the icons displayed to your users in the <i>OneLogin</i> portal, and then click <b>SAVE</b>. The AI for Process app has been added to your company apps for <i>OneLogin</i> and is listed on the app page.</li>
<li>Copy the following values from <b>SSO</b> > <b>Enable SAML2.0</b> on Onelogin and paste them into the relevant fields on AI for Process’ SSO setup page:</li>
    <ul><li><b>OneLogin SAML 2.0 Endpoint (HTTP)</b>: Paste into <b>SAML 2.0 endpoint</b>.</li>
    <li><b>OneLogin Issuer URL</b>: Paste into <b>Issuer URL</b>.</li>
    <img src="../images/paste-onelogin-issuer-url.png" alt="paste one login issuer url" title="paste one login issuer url" style="border: 1px solid gray; zoom:75%;"></ul>

<li>In the <b>OneLogin X.509 Certificate</b> field, click <b>View Details</b>. The <b>Standard Strength Certificate (2048-bit)</b> page is displayed.
<img src="../images/onelogin-view-details.png" alt="one login view details" title="one login view details" style="border: 1px solid gray; zoom:75%;"></li>
<li>In the <b>X.509 Certificate</b> section, copy the certificate data and then paste it into the <b>X.509 Certificate</b> field on AI for Process’ SSO setup page.</li>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Copy data after the <b>BEGIN CERTIFICATE</b> header and before the <b>END CERTIFICATE</b> footer.</p></div>

To add a new certificate, click <b>+Add new</b>.
<img src="../images/add-new-x-509-certificate.png" alt="add new x 509 certificate" title="add new x 509 certificate" style="border: 1px solid gray; zoom:75%;"></ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.</p></div>

<ol start="11"><li>Copy the following field values from AI for Process’ SSO setup page into the relevant fields in Onelogin:</li>

<ul><li>ACS URL for SP Initiated SAML Flow.</li>
<li>ACS URL for IDP Initiated SAML Flow.</li>
<img src="../images/copy-acs-urls.png" alt="copy acs urls" title="copy acs urls" style="border: 1px solid gray; zoom:75%;"></ul>

<li>Click <b>Save</b> on AI for Process and Onelogin.</li></ol>

Once SSO for Onelogin is complete, the system redirects to the **Onelogin Sign in** page for AI for Process account authentication.

<img src="../images/onelogin-sign-in-page.png" alt="one login sign in page" title="one login sign in page" style="border: 1px solid gray; zoom:75%;">

### Other Configuration

To configure and enable SSO using SAML for other IDPs of your choice, follow the steps below:

1. Go to AI for Process’ **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **SAML** for **Sign-on protocol** and **Other** for **SSO provider**.
<img src="../images/other-sso-provider.png" alt="other sso provider" title="other sso provider" style="border: 1px solid gray; zoom:75%;">

4. Fetch the necessary SSO configuration parameters listed in [this](../security-and-control/single-sign-on.md#configuration-parameters) table from your app's **Settings** page within the IDP developer portal. 
5. Paste them into the relevant fields on AI for Process’ SSO setup page.

To add a new certificate, click **+Add new**.
<img src="../images/paste-parameters-other-configuration.png" alt="paste parameters for other provider" title="paste parameters for other provider" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.
</p></div>

<ol start="6"><li>Copy and paste <b>ACS url for SP initiated SAML flow</b> and <b>ACS url for IDP initiated SAML flow</b> values from AI for Process into the relevant app fields within the IDP’s developer portal.</li>
<li>Click <b>Save</b>.</li></ol>

## WS-Federation

**WS-Federation** (Web Services Federation) is a protocol used for federated identity management. It allows the secure sharing of identity information across different security domains or systems. It enables Single Sign-On (SSO) by allowing users to authenticate with a trusted IDP and access services across different organizations or platforms without logging in multiple times.

### How WS-Federation Works

When a user logs into a system that acts as an IDP and tries to access his AI for Process account, the following happens:

1. The relying party redirects the user to the IDP for authentication.
2. The IDP authenticates the user through credentials or another authentication mechanism.
3. **Security Token Issued**: Once authenticated, the IDP issues a security token containing the user’s identity and claims.
4. **Token Sent to Relying Party**: The token is sent back to the relying party, which validates it.
5. **Access Granted**: The user is granted access to the requested service based on the verified token.

### Windows Azure Configuration

Azure AD Federation with WS-Federation offers seamless SSO integration with Microsoft services, advanced security features like MFA and conditional access, and centralized user management. It supports flexible authentication protocols, scales with organizational growth, and ensures high availability for an enhanced user experience.

To configure SSO using WS-Federation and Windows Azure, follow the steps below:

1. Go to AI for Process’ **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **WS-Federation** for **Sign-on protocol** and **Windows Azure** to **Configure SSO for WS-Federation**.
4. Open **Server Manager** on the computer running AD FS, then choose **AD FS** > **Workflows** > **AD FS Management**.
5. Copy **IdP URL** from your IdP metadata (FederationMetadata.xml). You can find your ADFS Federation Metadata file URL on the AD FS server through **ADFS Management** in **ADFS** > **Service** > **Endpoints** > **Metadata**. It should look like this:
<img src="../images/copy-idp-url.png" alt="copy idp url" title="copy idp url"  style="border: 1px solid gray; zoom:75%;">

6. Paste this value into the **Azure AD sign-on end point url** field on AI for Process' SSO setup page.
7. Copy and paste [this](https://login.microsoftonline.com/common/FederationMetadata/2007-06/FederationMetadata.xml) URL link into the **Azure AD federation metadata document** field on AI for Process' SSO setup page.
<img src="../images/paste-azure-parameters.png" alt="paste azure parameters" title="paste azure parameters"  style="border: 1px solid gray; zoom:75%;">

8. Click **Save**.

### Other Configuration

To configure and enable SSO using WS-Federation and other IDPs of your choice, follow the steps below:

1. Go to AI for Process’s **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **WS-Federation** for **Sign-on protocol** and **Other** to **Configure SSO for WS-Federation**.
4. Copy and paste the SSO endpoint URL from the IDP’s portal into **AD sign-on end point url** on AI for Process' SSO setup page.
5. Then, copy and paste the URL for the WS-Federation metadata document from the IDP’s portal into the **AD federation metadata document url** on AI for Process' SSO setup page.
<img src="../images/paste-ws-federation-data.png" alt="paste ws federation data" title="paste ws federation data"  style="border: 1px solid gray; zoom:75%;">

6. Click **Save**.

## OpenID Connect Configuration

**OpenID Connect** (OIDC) is an authentication layer built on top of the OAuth 2.0 framework that enables Single Sign-On (SSO) by providing a standardized way for applications to authenticate users and obtain user identity information. AI for Process currently supports Sign in with Google for this protocol.

### How OpenID Connect Works

When a user logs into a system that acts as an IDP and tries to access his AI for Process account, the following happens:

1. The application redirects the user to the IDP for authentication.
2. The user logs in at the IDP portal.
3. IDP redirects the user back with an authorization code.
4. The application exchanges the code for ID and access tokens.
5. The application validates tokens and grants access.
6. Users can access other integrated applications without re-authenticating.

### Google Configuration

To configure SSO using OpenId Connect and Google, follow the steps below:

1. Go to AI for Process’s **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **OpenId Connect** for **Sign-on protocol** and **Sign in with Google** to **Configure SSO for OpenId connect**.
<img src="../images/sign-in-with-google.png" alt="sign in with google" title="sign in with google"  style="border: 1px solid gray; zoom:75%;">

4. Click **Save**.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>No further configuration is needed. Users will be authenticated using their Google account’s username and password.</p></div>

## Disable SSO

Disabling SSO resets the protocol and provider selections you made when SSO was enabled. This removes the current configuration and reverts your account to the default sign-in flow. SSO-based account access using the configured provider is disabled with this feature.

However, you can still view the previously configured SSO parameters for a specific protocol and provider by clicking the **Enable SSO** tab.

## Steps to Disable SSO

1. [Access](../security-and-control/single-sign-on.md#access-single-sign-on) the **Single sign on** page.
2. Click the **Disable SSO** tab.
<img src="../images/click-disable-sso.png" alt="click disable sso" title="click disable sso" style="border: 1px solid gray; zoom:75%;">

3. In the **Disable SSO** confirmation window, click **Yes**.
<img src="../images/disable-sso-screen.png" alt="disable sso screen" title="disable sso screen" style="border: 1px solid gray; zoom:75%;">

The following screen is displayed after SSO is disabled.
<img src="../images/enable-sso-screen.png" alt="enable sso screen" title="enable sso screen" style="border: 1px solid gray; zoom:75%;">

## Exclude Users from the SSO Requirement

The **Manage Users** feature on the **Single Sign-On** page allows the account owner to exclude specific users from the mandatory SSO flow. This enables selected users to access their AI for Process account through either the default sign-in flow or SSO service, which is helpful in the following situations:

* An error occurs during the SSO provider configuration, and the system prevents the user from logging in.
* The user wants to bypass log-in via the configured SSO provider.
* Technical issues arise with the SSO provider.
* The SSO configuration profile has expired.
* Business policy changes at the provider prevent the configured SSO from functioning.

**Key Considerations**

* By default, the account owner is excluded from the SSO requirement and can choose between the SSO flow or the default sign-in flow during login. Additionally, it is recommended to exclude at least one more account user.
* Excluded users can instantly switch to another account without signing in through SSO, if SSO is enabled.
* For users who are not excluded:
* If SSO is enabled for the account, they must sign in via SSO.
* If SSO is disabled, they can switch accounts directly without additional sign-in.

**Steps**

To exclude a user from the SSO requirement, follow the steps below:

1. [Navigate](../security-and-control/single-sign-on.md#access-single-sign-on) to the **Single Sign-on** page.
2. Type and add an email address or select from the dropdown in the **Manage Users** textbox.
<img src="../images/manage-users-sso.png" alt="manage sso users" title="manage sso users" style="border: 1px solid gray; zoom:75%;">

You can add multiple users to the list, as shown below:
<img src="../images/add-multiple-users-to-exclude.png" alt="exclude multiple users" title="exclude multiple users" style="border: 1px solid gray; zoom:75%;">

<ol start="3"><li>Click <b>Save</b>.</li></ol>

A success message is displayed, and the SSO sign-in is made optional for the user.

### Sign-In Flow for the Excluded User

During sign-in, the following screen is displayed for the excluded user. 
<img src="../images/screen-for-excluded-user.png" alt="screen for excluded user" title="screen for excluded user" style="border: 1px solid gray; zoom:75%;">

When the user clicks **Continue**, one of the following happens:

When **SSO is enabled**, the following page is displayed.
<img src="../images/login-with-sso.png" alt="login with sso" title="login with sso" style="border: 1px solid gray; zoom:75%;">

The user can do one of the following:

* Click **Continue** to log in using the configured SSO provider service's sign-in page, for example, OKTA, as shown below:

<img src="../images/connect-to-okta.png" alt="connect to okta" title="connect to okta" style="border: 1px solid gray; zoom:75%;">

* Click “**Having trouble logging in with SSO?**” to sign in using the default option (email and password, Google, Windows, etc.) set during AI for Process sign-up.

When **SSO is disabled**, the user is taken through the default sign-in flow (email and password, Google, Windows, etc.).

## Default Sign-in Flow 

As a AI for Process admin, you can enable Single Sign-On (SSO) using a third-party provider. However, if your SSO security system fails or you forget your SSO credentials for your IDP, you can log into AI for Process using either email sign-in or your default SSO provider. 

## Related Information

* [Settings Console](../overview.md)- Learn more about other AI for Process admin features.
