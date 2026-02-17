# Using Single Sign-On (SSO)

Single Sign-On (SSO) enables easy access to AI for Work using your existing identity provider. With SSO, your users can log on once, for example, to your company account, and when accessing the platform, the system can automatically use the same login credentials.

<img src="../images/sso_overview.png" alt="open-id-connect" title="open-id-connect" style="border: 1px solid gray; zoom:80%;">

## Supported Sign-On Protocols

Administrators can configure Single Sign-On (SSO) authentication using one of the following sign-on protocols or methods:

* **OpenID Connect (OIDC)** - A modern authentication protocol built on OAuth 2.0, providing simple identity verification and user profile information exchange.
* **Security Assertion Markup Language (SAML)** - A standard protocol for web browser Single Sign-On using secure tokens, eliminating passwords through cryptography and digital signatures.
* **WS-Federation** - A protocol that enables identity federation across different security realms, commonly used with Active Directory Federation Services.

## Enabling Single Sign-On

Depending on the security required for your company, you can enable or disable Single Sign-On (SSO) for users accessing the platform.

To enable SSO:

1. Navigate to **Admin Console > Security > Single Sign-On**.
2. Turn on the toggle **Enable SSO**.
3. Select your preferred sign-on protocol.
4. Configure the protocol-specific settings.

**Next Steps**

Choose the appropriate protocol for your organization and refer to the detailed configuration guide:

* [OpenID Connect Configuration](../security/oidc.md)
* [SAML Configuration](../security/saml.md)
* [WS-Federation Configuration](../security/wsfc.md)