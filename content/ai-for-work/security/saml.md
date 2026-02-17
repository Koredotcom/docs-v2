# SAML

Security Assertion Markup Language (SAML) is a standard protocol for web browser Single Sign-On (SSO) using secure tokens. SAML eliminates passwords and uses standard cryptography and digital signatures to pass secure sign-in tokens from an identity provider to a SaaS application.

SAML provides a solution to allow your identity provider and service provider to exist separately. When a user logs into a SAML-enabled application, the service provider requests authorization from the appropriate identity provider. The identity provider authenticates the user's credentials and then returns the authorization for the user to the service provider, allowing the user to access the application.

<img src="../images/saml.png" alt="saml" title="saml" style="border: 1px solid gray; zoom:80%;">

## Getting Started

Setting up SAML authentication is straightforward and takes just a few configuration steps. Follow this quick setup process to enable secure access for your organization.

1. Navigate to **Admin Console > Security > Single Sign-On**.
2. Turn on the toggle **Enable SSO**.
3. In the **Select a suitable Sign-On Protocol** section, select **SAML**.
4. In the **Configure** section, select your identity provider and configure the settings.

## Identity Provider Configurations

Choose from the supported identity providers or use a custom SAML configuration. Each provider offers specific features and integration capabilities to match the security requirements.

### Okta Configuration

Okta provides enterprise-grade identity management with robust security features and seamless user experience. This configuration enables both Service Provider and Identity Provider initiated authentication flows.

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Required</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Okta Single Sign-On URL</strong>
   </td>
   <td>The SSO URL for Okta to enable Service Provider-initiated SAML flow.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Identity Provider Issuer</strong>
   </td>
   <td>The entity that provides user identities, including the ability to authenticate users.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Certificate</strong>
   </td>
   <td>The public certificate stored by the service provider from the identity provider is used to validate user signatures. You can add multiple certificates (max 2). The platform uses the latest certificate for authorization; if invalid, it falls back to the older certificate.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>ACS URL for SP-Initiated SAML Flow</strong>
   </td>
   <td>The redirect URL for Service Provider-initiated SAML flow (automatically generated).
   </td>
   <td>Read only
   </td>
  </tr>
  <tr>
   <td><strong>ACS URL for IDP Initiated SAML Flow</strong>
   </td>
   <td>The account-specific URL for Identity Provider-initiated SAML flow (automatically generated).
   </td>
   <td>Read only
   </td>
  </tr>
</table>

**Setting up Okta for SSO**

To set up the application in your Okta environment, you need to create and configure the application, configure SAML settings, and transfer authentication details.

**Prerequisites**: You must have already selected Okta as a SAML provider in the Admin Console.

**Steps to configure Okta**:

1. **Log in to Okta** and navigate to the Admin dashboard.
2. **Add Application**:
    * Go to **Applications > Add Application > Create Application**.
    * Provide an **App name** and click **Next**.
3. **Configure SAML Settings**:
    * In **Configure SAML**, provide the **Single Sign-On URL** from the platform:
        * Log in to Admin Console.
        * Go to **Security > Single Sign-On.**
        * After enabling SAML and selecting Okta.
        * Copy the **ACS URL for SP-Initiated SAML Flow.**
    * For on-premise accounts:
        * Use `https://idproxy-dev.<platform>.com/authorize/callback` as the Single Sign-On URL.
        * Use `https://idproxy-dev.<platform>.com` as the Audience URL.
    * Configure **Attribute statements** (e.g., emailId, firstName) as required.
4. **Complete Configuration**:
    * For the **ACS URL for IDP Initiated SAML Flow**, check "Use this Recipient URL and Destination URL".
    * Enter the **Audience URI** as the ACS URL for SP-Initiated SAML Flow.
    * Click **Finish.**
5. **Copy Configuration Details**:
    * Go to **Sign On** tab > **Settings** > **View Setup Instructions.**
    * Copy the following:
        * **Identity Provider Single Sign-On URL** → **Okta Single Sign-On URL**
        * **Identity Provider Issuer** → **Identity Provider Issuer**
        * **X.509 Certificate** → **Certificate** field
6. **Save** the configuration.

### OneLogin Configuration

OneLogin offers a comprehensive identity platform with advanced user provisioning and access management capabilities. Configure these essential fields to establish secure communication between OneLogin and AI for Work.

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Required</strong>
   </td>
  </tr>
  <tr>
   <td><strong>SAML 2.0 Endpoint</strong>
   </td>
   <td>The HTTP SSO endpoint for OneLogin to enable Service Provider-initiated SAML flow. (e.g., <code>https://app.onelogin.com/trust/saml2/http-post/sso/358111</code>)
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Issuer URL</strong>
   </td>
   <td>The URL for the OneLogin issuer. (e.g., <code>https://app.onelogin.com/saml/metadata/358111</code>)
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>X.509 Certificate</strong>
   </td>
   <td>The public certificate from OneLogin is used to validate user signatures. You can add multiple certificates (max 2).
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>ACS URL for SP-Initiated SAML Flow</strong>
   </td>
   <td>The redirect URL for Service Provider-initiated SAML flow (automatically generated).
   </td>
   <td>Read only
   </td>
  </tr>
  <tr>
   <td><strong>ACS URL for IDP Initiated SAML Flow</strong>
   </td>
   <td>The account-specific URL for Identity Provider-initiated SAML flow (automatically generated).
   </td>
   <td>Read only
   </td>
  </tr>
</table>

**Setting up OneLogin for SSO**

To set up the application in your OneLogin environment, you need to create and configure the application, configure SAML settings, and transfer authentication details. 

1. **Configure SSO Settings**:
    * Go to the **SSO** tab
    * Copy the following:
        * **OneLogin SAML 2.0 Endpoint (HTTP)** → **SAML 2.0 Endpoint**
        * **OneLogin Issuer URL** → **Issuer URL**
2. **Copy Certificate**:
    * Click **View Details** for the X.509 Certificate.
    * Copy only the certificate data (exclude headers and footers).
    * Paste into platform's **X.509 Certificate** field.
3. **Save** the configuration.


### Bitium Configuration

Bitium specializes in cloud-based identity and access management with a focus on simplicity and security. These configuration parameters establish the trust relationship between Bitium and AI for Work for seamless authentication.

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Required</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Single Sign-On URL</strong>
   </td>
   <td>The HTTP SSO endpoint for Bitium to enable Service Provider-initiated SAML flow. (e.g., <code>https://www.bitium.com/7655</code>)
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Issuer URL</strong>
   </td>
   <td>The URL for the Bitium issuer. (e.g., <code>https://bitium.com/7655/saml/82456/metadata.xml</code>)
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Certificate</strong>
   </td>
   <td>The public certificate from Bitium used tis o validate user signatures. You can add multiple certificates (max 2).
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>ACS URL for SP-Initiated SAML Flow</strong>
   </td>
   <td>The redirect URL for Service Provider-initiated SAML flow (automatically generated).
   </td>
   <td>Read only
   </td>
  </tr>
  <tr>
   <td><strong>ACS URL for IDP Initiated SAML Flow</strong>
   </td>
   <td>The account-specific URL for Identity Provider-initiated SAML flow (automatically generated).
   </td>
   <td>Read only
   </td>
  </tr>
</table>

**Setting up Bitium for SSO**

To set up the application in your Bitium environment, you need to create and configure the application, configure SAML settings, and transfer authentication details.

1. **Configure SAML Authentication**:
    * Go to **Manage Organization > Manage Apps > App.**
    * On the **Single Sign-On** tab, select **SAML Authentication.**
    * Copy the following:
        * **Bitium Login URL** → **Single Sign-On URL**
        * **Bitium Logout URL** → **Issuer URL**
        * **X.509 Certificate** → **Certificate** field
2. **Save** the configuration.

### Other (Generic SAML Provider)

Use this option for any SAML 2.0 compliant identity provider not specifically listed above. This flexible configuration supports custom enterprise identity solutions and third-party SAML providers.


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Required</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Single Sign-On URL</strong>
   </td>
   <td>The HTTP SSO endpoint enables Service Provider-initiated SAML flow.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Issuer URL</strong>
   </td>
   <td>The URL for the identity provider issuer.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Certificate</strong>
   </td>
   <td>The public certificate from your identity provider is used to validate user signatures. You can add multiple certificates (max 2).
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>ACS URL for SP-Initiated SAML Flow</strong>
   </td>
   <td>The redirect URL for Service Provider-initiated SAML flow (automatically generated).
   </td>
   <td>Read only
   </td>
  </tr>
  <tr>
   <td><strong>ACS URL for IDP Initiated SAML Flow</strong>
   </td>
   <td>The account-specific URL for Identity Provider-initiated SAML flow (automatically generated).
   </td>
   <td>Read only
   </td>
  </tr>
</table>

