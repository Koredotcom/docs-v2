# Manage Single Sign On for Account Sign In

The Platform provides users with a default sign-in flow as the standard authentication method. However, for organizations seeking enhanced security and convenience, administrators can enable **Single Sign-On (SSO)** through the **Settings** console.

By activating SSO, users can access their Platform accounts using a single set of secure credentials managed by an external Identity Provider (IDP). This setup streamlines the login process and integrates users into a unified authentication framework.

SSO is a powerful option for organizations looking to balance convenience and security in user authentication. It offers the following key benefits:

* **Secure Access**: It reduces password fatigue and the risk of phishing or weak passwords by focusing on one strong password.
* **Simplified User Management**: Administrators can manage access centrally, making it easier to grant or revoke access across various accounts.
* **Improved User Experience**: Reduces the need for multiple logins into an account.
* **Centralized Access Control**: Admins can monitor and enforce security policies across all applications more efficiently.

<Note>Only account owners and admins can enable/disable SSO from the <b>Settings</b> console.</Note>

The Platform supports SSO for the following protocols and providers:
| <strong>Protocol</strong> | <strong>Provider</strong> |
|:------ |:------ |
| <a href="#saml">SAML</a> | <ul> <li><a href="#okta-configuration">Okta</a></li> <li><a href="#onelogin-configuration">OneLogin</a></li> <li><a href="#other-configuration">Other</a></li> </ul> |
| <a href="#ws-federation">WS-Federation</a> | <ul> <li><a href="#windows-azure-configuration">Windows Azure</a></li> <li><a href="#other-configuration_1">Other</a></li> </ul> |
| <a href="#openid-connect-configuration">OpenID Connect</a> | <ul> <li><a href="#google-configuration">Google account</a></li> </ul> |

## How SSO Works

1. **User Initiates Login**: A user attempts to access his account.
2. **Redirect to IDP**: The Service Provider (SP) redirects the user to an IDP login page for authentication.
3. **User Authenticates**: The user provides their credentials to the IDP.
4. **Authentication Tokens**: If successful, the IDP issues an authentication token.
5. **Token Exchange**: The SP uses this token to grant the user access to the application.
6. **Access Granted**: Once authenticated, the user can access the allowed account(s) without logging in again during the same session.

## Access Single Sign-on

To access the SSO feature, follow the steps below:

1. Log in to your account and click **Autonomous Agents** from the list of modules.
2. Click **Settings** on the top navigation bar.
3. Go to **Security & Control** > **Single Sign On** on the left menu.

   If you’re using this feature for the first time, the following screen appears.

     ![access sso](./images/access-single-sign-on.png "access sso")



If SSO is already configured, the **Single sign-on** setup page is displayed.

## Enable SSO

Depending on your company's security requirements, you can enable SSO for your account users. Enabling SSO includes selecting the protocol and IDP and providing the [parameters](../security-and-control/single-sign-on.md#configuration-parameters) to integrate with the IDP service.

<Info>If you already have the required parameters for Okta, move directly to Step 18.</Info>

### Configuration Parameters

The following parameters should be configured on the Platform based on the protocol and IDP you select:

| <strong>Protocol</strong> | <strong>IDP</strong> | <strong>Parameters</strong> |
|:------ |:------ |:------ |
| SAML | Okta | <ul> <li><strong>Okta single sign-on url</strong>: The SSO endpoint URL for <em>Okta</em> to enable Service Provider initiated SAML flow.</li> <li><strong>Identity provider issuer: </strong>The entity (URL) that provides the user identities, including the ability to authenticate a user.</li> <li><strong>Certificate: </strong>The public certificate stored by the service provider from the IDP is used to validate a user signature. You can add multiple (a maximum of 2) certificates and delete already added invalid certificates. </li> </ul> |
| SAML | Onelogin | <ul> <li><strong>SAML 2.0 endpoint</strong>: The SSO endpoint URL for <em>Onelogin</em> to enable Service Provider-initiated SAML flow.</li> <li><strong>Issuer url</strong>: The same as the <strong>Identity provider issuer </strong>for Okta.</li> <li><strong>X.509 certificate</strong>: The same as the <strong>Certificate</strong> for Okta.</li> </ul> |
| SAML | Other | <ul> <li><strong>Single sign-on url: </strong>The SSO endpoint URL for <em>the IDP</em> to enable Service Provider initiated SAML flow.</li> <li><strong>Issuer url: </strong>The same as the <strong>Identity provider issuer </strong>for Okta.</li> <li><strong>Certificate: </strong>The same as the <strong>Certificate</strong> for Okta.</li> </ul> |
| WS-Federation | Windows Azure | <ul> <li><strong>Azure AD sign-on end point url</strong>: The URL that the Platform sends sign-on and sign-off requests using <em>Azure</em>. The response for the authentication is sent to the <strong>Reply URL</strong> defined in your <em>Azure</em> Active Directory configuration settings.</li> <li><strong>Azure AD federation metadata document</strong>: The URL for the federation metadata document used for authentication with <em>Azure</em> Active Directory.</li> </ul> |
| WS-Federation | Other | <ul> <li><strong>AD sign-on end point url: </strong>The same as <strong>Azure AD sign-on end point url </strong>for Windows Azure.</li> <li><strong>AD federation metadata document url</strong>: The same as <strong>Azure AD federation metadata document for </strong>Windows Azure.</li> </ul> |
| OpenID Connect | Google | No additional configuration is required. Your users will be authenticated based on their valid Google credentials. |

### Steps to Enable SSO

To enable SSO on the **Settings** console, follow the steps below:

1. Access the **Single sign on** page.
2. If no SSO is enabled, click **Enable SSO**.
3. If SSO is already enabled for a provider, click the **Enable SSO** tab and do one of the following:

    * Change and save the existing [parameters](../security-and-control/single-sign-on.md#configuration-parameters) for the enabled SSO provider.
    * Disable the enabled SSO and set up a new configuration.
    * Select a different protocol/provider and complete the configuration.

4. Select the required protocol and SP. The default selections are **SAML** and **Okta**.
5. Configure the [parameters](../security-and-control/single-sign-on.md#configuration-parameters) for one of the following SSO protocols and providers:

<ul><li><b>SAML</b>: <a href="#okta-configuration">Okta</a>, <a href="#onelogin-configuration">Onelogin</a>, or <a href="#other-configuration">Other</a>. <a href="#saml">Learn more</a>.</li>
<li><b>WS-Federation</b>: <a href="#windows-azure-configuration">Windows Azure</a> or <a href="#other-configuration">Other</a>. <a href="#ws-federation">Learn more</a>.</li>
<li><b>OpenId connect</b>: <a href="#google-configuration">Google</a>. <a href="#openid-connect-configuration">Learn more</a></li></ul>

9. Click <b>Save</b>.

A success message is displayed once the SSO setup is complete along with the timestamp of when you enabled SSO.

## SAML

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

<Note>If you already have the required parameters for Okta, move directly to Step 18.</Note>

4. Login to the <a href="https://developer.okta.com/login/">Okta developer portal</a>.
5. On the dashboard, click <b>Applications</b> on the left menu.
6. Click <b>Create App Integration</b>.

7. In the <b>Create a new app integration</b> window, select <b>SAML 2.0</b> and click <b>Next</b>.

![create a new app integration](./images/create-a-new-app-integration.png "create a new app integration")
8. On the <b>Create SAML Integration</b> page, provide the <b>App Name</b> under <b>General Settings</b>, and click <b>Next</b>.

![create saml integration](./images/create-saml-integration.png "create saml integration")
9. Copy the following values from the Platform’s SSO setup page and paste them into Okta under <b>Configure SAML</b>:
10. <b>ACS url for SP initiated SAML flow</b>: Paste into <i>Single sign-on URL</i>.
11. <b>ACS url for IDP initiated SAML flow</b>: Paste into <i>Audience URI (SP Entity ID)</i>.

| <strong>Okta Parameter</strong> | <strong>Description</strong> |
|:------ |:------ |
| <strong>Single sign-on URL</strong> | The location where the SAML assertion is sent with an HTTP POST. This is often called the SAML Assertion Consumer Service (ACS) URL for your application. |
| <strong>Audience URI (SP Entity ID)</strong> | The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application. |

10. Click <b>Next</b>.
11. Click <b>Finish</b> under <b>Feedback</b> on Okta’s <b>Create SAML Integration</b> page.
12. Once the app is created, go to the <b>Sign On</b> tab and click <b>View Setup Instructions</b>.
13. On the <b>How to Configure SAML 2.0 for <app-name> Application</b> page, do the following from Okta into the Platform:
14. Copy the <b>Identity Provider Single Sign-On URL</b> value and paste it into the <b>Okta Single Sign-On URL</b>.
15. Copy the <b>Identity Provider Issuer</b> value into the <b>Identity provider issuer</b>.
16. Go to <b>Sign On</b> > <b>SAML Signing Certificates</b> on your Okta app.
17. Click <b>Download certificate</b> under <b>Actions</b> for the required certificate.

![download certificate](./images/download-certificate-saml.png "download certificate")
18. Once the certificate is downloaded, open it in Notepad and copy the data between the <b>BEGIN CERTIFICATE</b> header and <b>END CERTIFICATE</b> footer.

![okta certificate](./images/okta-certificate-notepad.png "okta certificate")
19. Paste the value into the <b>Certificate</b> field on the Platform’s SSO setup page.

<Note>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.</Note>

18. Click <b>Save</b>.
Once SSO for Okta is complete, the system will redirect to the <b>Okta Sign in</b> page for the Platform account authentication.

### Onelogin Configuration

OneLogin's Single Sign-On (SSO) solution simplifies user access by enabling a single login for multiple applications across platforms, improving workflow efficiency. It enhances security with advanced multi-factor authentication (MFA), password-less options, and machine learning-based risk assessments that are compliant with security standards like GDPR and HIPAA.

To configure SSO using SAML and Onelogin, follow the steps below:

1. Go to **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **SAML** for **Sign-on protocol** and **Onelogin** for **SSO provider**.
4. Login into the [Onelogin developer portal](https://app.onelogin.com/login).
5. Go to **Applications** > **Add Apps** to access your app.

![onelogin add app](./images/onelogin-add-app.png "onelogin add app")



<ul><li>To learn how to <b>add a new app</b>, click <a href="https://onelogin.service-now.com/support?id=kb_article&sys_id=9bf39e0047ccbd509d8dfd1f536d431c&kb_category=e9866930db185340d5505eea4b9619b7#manage-add">here</a>.</li>
<li>To learn how to <b>configure apps</b>, click <a href="https://onelogin.service-now.com/support?id=kb_article&sys_id=9bf39e0047ccbd509d8dfd1f536d431c&kb_category=e9866930db185340d5505eea4b9619b7#config">here</a>.</li></ul>

6. Search for your Platform app and click <b>Enter</b>.
7. Click your app to view the <b>Add App</b> page. Optionally, change the display name or the icons displayed to your users in the <i>OneLogin</i> portal, and then click <b>SAVE</b>. The Platform app has been added to your company apps for <i>OneLogin</i> and is listed on the app page.
8. Copy the following values from <b>SSO</b> > <b>Enable SAML2.0</b> on Onelogin and paste them into the relevant fields on the Platform’s SSO setup page:
9. <b>OneLogin SAML 2.0 Endpoint (HTTP)</b>: Paste into <b>SAML 2.0 endpoint</b>.
10. <b>OneLogin Issuer URL</b>: Paste into <b>Issuer URL</b>.
11. In the <b>OneLogin X.509 Certificate</b> field, click <b>View Details</b>. The <b>Standard Strength Certificate (2048-bit)</b> page is displayed.

![one login view details](./images/onelogin-view-details.png "one login view details")
12. In the <b>X.509 Certificate</b> section, copy the certificate data and then paste it into the <b>X.509 Certificate</b> field on the Platform’s SSO setup page.

<Note>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.</Note>

11. Copy the following field values from the Platform’s SSO setup page into the relevant fields in Onelogin:
12. ACS URL for SP Initiated SAML Flow.
13. ACS URL for IDP Initiated SAML Flow.
14. Click <b>Save</b> on the Platform and Onelogin.

Once SSO for Onelogin is complete, the system redirects to the **Onelogin Sign in** page for the the Platform account authentication.

### Other Configuration

To configure and enable SSO using SAML for other IDPs of your choice, follow the steps below:

1. Go to the Platform’s **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **SAML** for **Sign-on protocol** and **Other** for **SSO provider**.
4. Fetch the necessary SSO configuration parameters listed in [this](../security-and-control/single-sign-on.md#configuration-parameters) table from your app's **Settings** page within the IDP developer portal. 
5. Paste them into the relevant fields on the Platform’s SSO setup page.

To add a new certificate, click **+Add new**.

<Note>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.</Note>

6. Copy and paste <b>ACS url for SP initiated SAML flow</b> and <b>ACS url for IDP initiated SAML flow</b> values from the Platform into the relevant app fields within the IDP’s developer portal.
7. Click <b>Save</b>.

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


   ![copy idp url](./images/copy-idp-url.png "copy idp url")



6. Paste this value into the **Azure AD sign-on end point url** field on the Platform’s SSO setup page.
7. Copy and paste [this](https://login.microsoftonline.com/common/FederationMetadata/2007-06/FederationMetadata.xml) URL link into the **Azure AD federation metadata document** field on the Platform’s SSO setup page.
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

<Note>No further configuration is needed. Users will be authenticated using their Google account’s username and password.</Note>

## Disable SSO

Disabling SSO resets the protocol and provider selections you made when SSO was enabled. This removes the current configuration and reverts your account to the default sign-in flow. SSO-based account access using the configured provider is disabled with this feature.

However, you can still view the previously configured SSO parameters for a specific protocol and provider by clicking the **Enable SSO** tab.

## Steps to Disable SSO

1. [Access](../security-and-control/single-sign-on.md#access-single-sign-on) the **Single sign on** page.
2. Click the **Disable SSO** tab.
3. In the confirmation window, click **Yes**.

You can enable SSO again by clicking the **Enable SSO** button.

## Exclude Users from the SSO Requirement

The **Manage Users** feature on the **Single Sign-On** page allows the account owner to exclude specific users from the mandatory SSO flow. This enables selected users to access their Platform account through either the default sign-in flow or SSO service, which is helpful in the following situations:

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
2. Type and add an email address or select from the dropdown in the **Manage Users** textbox. You can add multiple users by entering an email address and pressing Tab.
3. Click <b>Save</b>.

A success message is displayed, and the SSO sign-in is made optional for the user.

### Sign-In Flow for the Excluded User

During sign-in, the following screen is displayed for the excluded user. 

![screen for excluded user](./images/screen-for-excluded-user.png "screen for excluded user")



When the user clicks **Continue**, one of the following happens:

When **SSO is enabled**, the following page is displayed.

![login with sso](./images/login-with-sso.png "login with sso")



The user can do one of the following:

* Click **Continue** to log in using the configured SSO provider service's sign-in page.

* Click “**Having trouble logging in with SSO?**” to sign in using the default option (email and password, Google, Windows, etc.) set during Platform sign-up.

When **SSO is disabled**, the user is taken through the default sign-in flow (email and password, Google, Windows, etc.).

## Default Sign-in Flow 

As a Platform admin, you can enable Single Sign-On (SSO) using a third-party provider. However, if your SSO security system fails or you forget your SSO credentials for your IDP, you can log into the Platform using either email sign-in or your default SSO provider. 

<hr/> 

**Related resource**

* [Settings Console](../../administration/overview.md)- Learn more about other the Platform's admin features.
