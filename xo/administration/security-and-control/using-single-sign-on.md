# Using Single Sign-On

On the Admin Console **Single Sign-On** page, in the **Security & Control** module of the Admin Console, you can configure Single Sign-On (SSO) authentication for your AI for Service managed users using the following:

* OpenID Connect (OIDC)   
* Security Assertion Markup Language (SAML)
* WS-Federation sign-on protocol

SSO enables easy access to the AI for Service application using your existing identity provider. With SSO, your users can log on once, for example, to your company account, and when accessing their AI for Service application, the same login credentials can be used automatically by the system.

For example, using the _WS-Federation_ sign-on protocol, you can enable a user to sign on to the AI for Service application using Microsoft® Active Directory® server credentials.

The following illustration shows the **Single Sign-On** page in the Admin Console **Security & Control** module.

<img src="../images/using-single-sign-on-img1.png" alt="Security & Control - Single Sign-on" title="Security & Control - Single Sign-on" style="border: 1px solid gray;zoom:70%;"/>


## Enable or Disable SSO

Depending on the security required for your company, you can enable or disable Single Sign-On (SSO) for users accessing the AI for Service application.

When you disable SSO or when the SSO authentication validity period expires, users must create and log on using their credentials. If no account specific password policies have been defined, then default AI for Service password policies are automatically enabled for the users.

**To enable Single Sign-On**

* In the **Security & Control** module, on the **Single Sign On** page, click **Enable SSO**.

**To disable Single Sign-On**

* In the **Security & Control** module, on the **Single Sign On** page, click **Disable SSO**, and then configure user password policies.


## OIDC

Complete the steps in the following procedure to configure SSO using OIDC in the **Security & Control** module of the Admin Console. AI for Service also supports WS-Federation and SAML Connect protocols.

1. In the **Security & Control** module on the **Single Sign On** page in the Admin Console, click **Enable SSO**.
2. In the **Select suitable Sign-On Protocol** section, select **OpenID Connect**.
3. In the **Configure SSO for OpenID Connect** section, select an identity provider, for example, **Sign in with Google**.
4. Click **Create**.

## WS-Federation

Complete the steps in the following procedure to configure Single Sign-On (SSO) using the WS-Federation protocol in the **Security & Control** module of the Admin Console.



1. In the **Security & Control** module on the **Single Sign On** page in the Admin Console, click **Enable SSO**.
2. In the **Select suitable Sign-On Protocol** section, select **WS-Federation**.
3. In the **Configure SSO for WS-Federation** section, select an identity provider, and then define the settings for:
    1. **Windows Azure®**
        * **Azure AD Sign-On End Point URL** – The URL that AI for Service sends sign on and sign off requests using _Azure_. The response for the authentication is sent to the **Reply URL** defined in your _Azure_ Active Directory configuration settings.
        * **Azure AD Federation Metadata Document** – The URL for the federation metadata document used for authentication with _Azure_ Active Directory.
    2. **Other** – Generic WS-Federation identity provider configuration, other than Azure
        * **AD Sign-On End Point URL** – The URL that AI for Service sends sign on and sign off requests using your WS-Federation identity provider.
        * **AD Federation Metadata Document URL** – The URL for the WS-Federation metadata document used for authentication with Active Directory.

4. In the administrative console for your Single Sign-On provider, you will also need to define the URLs that are used to exchange data between AI for Service and your SSO provider. While the URL names may vary by SSO provider, you will need to define these URLs:
    1. **SAML 2.0**
        * **LDAP Attribute:** nameId
        * **Claim Attribute:** uri

    2. **SAML 1.1**
        * **LDAP Attribute:** nameId
        * **Claim Attribute:** emailAddress

    3. **Assertion Consumer Service (ACS) URL** or **Callback URL** as [https://idp.kore.com/authorize/callback](https://idp.kore.com/authorize/callback?__hstc=59894770.e90bc57a4e2025da994552ad13bbab05.1699003492940.1701937564529.1701950143315.124&__hssc=59894770.1.1701950143315&__hsfp=4271746649){:target="_blank"}.
    
5. In addition to authentication values, you must pass the email address of the user as an LDAP attribute from Active Directory when using ADFS. For more information, [see Attributes for ADFS](#attributes-for-adfs).
6. Click **Create**.


## SAML

Security Assertion Markup Language (SAML) is a standard protocol for web browser Single Sign-On (SSO) using secure tokens. SAML completely eliminates all passwords and instead uses standard cryptography and digital signatures to pass a secure sign-in token from an identity provider to a SaaS application.

SAML provides a solution to allow your identity provider and service providers to exist separately from each other. When a user logs into a SAML-enabled application, the service provider requests authorization from the appropriate identity provider. The identity provider authenticates the user’s credentials and then returns the authorization for the user to the service provider, and the user is now able to use the application.


### How SAML works

SAML SSO works by transferring the user’s identity from one place (the identity provider) to another (the service provider). This is done through an exchange of digitally signed XML documents.

Consider the following scenario: A user is logged into a system that acts as an identity provider. The user wants to log in to a remote application, such as a support or accounting application (the service provider). The following happens:



1. The user accesses the remote application using a link on an intranet, a bookmark, or similar and the application loads.
2. The application identifies the user’s origin (by application subdomain, user IP address, or similar) and redirects the user back to the identity provider, asking for authentication. This is the authentication request.
3. The user either has an existing active browser session with the identity provider or establishes one by logging into the identity provider.
4. The identity provider builds the authentication response in the form of an XML-document containing the user’s username or email address, signs it using an X.509 certificate, and posts this information to the service provider.
5. The service provider, which already knows the identity provider and has a certificate fingerprint, retrieves the authentication response and validates it using the certificate fingerprint.
6. The identity of the user is established and the user is provided with app access.


### AI for Service Implementation

There are two ways SAML can be used within Platform:



* For developer authentication to access the App Builder,
* For user authentication to access the Bot.


#### Use case 1: App Builder authentication.

Enterprises can set up access to the App Builder tool using the enterprise SSO. Bot developers and admins can log into App Builder using SSO done by the enterprise identity provider.

**SSO flow from AI for Service Platform**: The following is the flow within the AI for Service once SSO is configured using SAML:

1. The client makes a call to Kore app server (using the login URL) with user details to get identity provider info (SAML).
2. Kore app server initiates a handshake request with the Kore idproxy server.
3. Kore idproxy server initiates a request to the identity provider (SAML) with user details.
4. On successful authentication, the identity provider (SAML) returns an assertion response to the Kore idproxy server.
5. Upon verifying the response from the identity provider, Kore idproxy server initiates a request to the Kore app server.
6. On successful authentication of the token from Kore idproxy server, Kore app server grants access to the user.

Refer below [to configure SSO using SAML](#configuring-sso-using-saml)


#### Use case 2: End-user authentication

In this scenario, the bot chat interface is embedded on the customer portal or Mobile app that requires user authentication via SSO.  
The Bot access is automatically limited to authenticated users.  If the task requires API invocation that requires SSO based authentication the developer can follow the below steps

* On the client, developer needs to retrieve SSO token of the logged in user and pass it to the bot using the **_secureCustomPayload_** parameter in the Bot SDK API.
* In the dialog task, Bot developer can write custom logic to read this token and add it as API headers for secure API calls made using service node or webhook node.

The token information on the client varies depending upon the SSO provider and the payload, accordingly the developer would need to write custom logic.


### Configuring SSO using SAML

Complete the following steps to configure Single Sign-On (SSO) using Security Assertion Markup Language (SAML) protocol in the Admin Console. AI for Service also supports WS-Federation and OpenID Connect (OIDC) protocols.


### OKTA Configuration

1. In the **Security & Control** module on the **Single Sign On** page in the Admin Console, click **Enable SSO**.
2. In the **Select a suitable Sign-On Protocol** section, select **SAML**.
3. In the **Configure SSO for SAML** section, select an identity provider, and then define the settings for one of:
    1. **Okta Single Sign-On URL** – The SSO URL for _Okta_ this is to enable Service Provider initiated SAML flow.
    2. **Identity Provider Issuer** – The entity that provides the user identities including the ability to authenticate a user.
    3. **Certificate** – The public certificate stored by the service provider from the identity provider used to validate a user signature. You can add multiple (max of 2) certificates, delete already added invalid certificates, platform will use the latest certificate for authorization, in case it is invalid then the older certificate would be used.
    4. **ACS URL for SP Initiated SAML Flow** – This is the redirect URL for Service Provided initiated SAML flow.
    5. **ACS URL for IDP Initiated SAML Flow** – This is the account-specific URL for Identity Provided initiated SAML flow.
    6. **SAML Attribute Mapping** – Enable this option to map SAML Attributes with AI for Service Group Names or Admin Roles Names. 
    Once enabled, you can:
        * define how the SAML attributes should be mapped with AI for Service attributes:
            1. Full Sync – Every time the user signs in, the platform will update the user’s Group and Role assignments based on the SAML Attributes present in the response. All existing assignments will be removed. Only the new group or role assignments as available in the SAML response will be assigned
            2. Inclusion Only – Every time the user signs in, the platform will only assign the new group or roles available in the SAML response. All existing assignments will be retained. New assignments will be added as available in the SAML responses

        * define one or more mapping pairs. Each pair includes
            1. SAML Attribute Name – Name of the SAML attribute as available in the SAML response
            2. SAML Attribute Value – Value associated with the SAML attribute
            3. Attribute Type – Refers to the type of mapping to be associated i.e. Group Name or Role Name
                * Group Name – Refers to any of the user groups defined in the AI for Service account
                * Role Name – Refers to the following
                * Admin Roles defined in the AI for Service account
                * App Builder Access
                * New Bot Creation
                * Manage Data Tables and Views

            4. AI for Service Attribute – Refers to either Group Name or Role Name. The list should include the following:
                * List of all Admin Roles
                * App Builder Access
                * New Bot Creation
                * Manage Data Tables and Views
                
    7. **Exclude RequestedAuthnContext in request** - Enable this option to remove RequestedAuthnContext from SAML authentication requests. 
    
        


#### Okta for AI for Service SSO

To configure Single Sign-On in _Okta_ for AI for Service, you must first add the AI for Service app to your _Okta_ account, and then copy URLs and the security certificate from _Okta_ into your AI for Service account. This topic describes how to add the AI for Service app to your _Okta_ account, and then access the URLs and certificate needed for the AI for Service configuration for SSO using _Okta_.

To complete this procedure, you must have already selected _Okta_ as a SAML provider on the **Single Sign On** page in the Admin Console.

#### To add the AI for Service app to Okta

1. Log on to _Okta_.
2. On the **Home** page, click **Admin**. The **Dashboard** page is displayed.
3. On the top navigation bar, click **Applications**. The **Applications** page is displayed.
4. Click **Add Application**. The **Add Application** page is displayed.
5. Click **Create application**
6. In the **General settings**, provide an _App name_ and click **Next**.
7. In **Configure SAML**, provide the _Single SignOn URL._ To obtain this:
    1. Login to Admin Console
    2. Navigate to **Security & Control** -> **Single Sign on page**
    3. Enable **SAML** and select **Okta** as the identity provider.
    4. Locate the **ACS URL for SP Initiated SAML Flow field**.
        This field contains the required Single Sign-On URL.
    5. For on-prem accounts, the ACS URL for SP Initiated SAML Flow is displayed as [_https://idproxy-dev.kore.com/authorize/callback_](https://idproxy-dev.kore.com/authorize/callback){:target="_blank"}. This needs to be updated as “single sign on URL” in Okta platform and [_https://idproxy-dev.kore.com_](https://idproxy-dev.kore.com){:target="_blank"} needs to be updated as the “Audience URL”
    6. You can provide the **Attribute statements** like emailId, firstName as per your requirement.

8. To configure **ACS URL for IDP Initiated SAML Flow**, copy and paste the complete URL that get from your admin. In case you are using internal redirection URLs, please reach out to your internal admin/network teams.
To get the **ACS URL for IDP Initiated SAML Flow** URL, check “User this Recipient URL and Destination URL”.
Enter the **Audience URI** field as ACS URL for SP Initiated SAML Flow ([https://idp.kore.com/authorize/callback](https://idp.kore.com/authorize/callback?__hstc=59894770.e90bc57a4e2025da994552ad13bbab05.1699003492940.1701937564529.1701950143315.124&__hssc=59894770.1.1701950143315&__hsfp=4271746649){:target="_blank"}).
    
    !!! Note
            
        This URL is a temporary URL. Once you add the AI for Service app in Okta, this URL changes as per your organizations domain requirements. You must copy the final ACS URL again and paste in the field. For more information, read [How to configure Okta SSO in AI for Service Platform ](https://community.kore.ai/t/sso-how-to-configure-okta-sso-in-kore-ai-xo-platform/2618){:target="_blank"}community post.

9. Click **Finish**.
10. On the **Sign On** tab, in the **Settings** section, click **View Setup Instructions**. The **How to Configure SAML 2.0 for &lt;app-name> Application** page is displayed.
11. Copy the URLs in the:
    1. **Identity Provider Single Sign-On URL** field to the **Okta Single Sign-On URL** field in AI for Service.
    2. **Identity Provider Issuer** field to the AI for Service **Identity provider issuer** field

12. In the Okta **X.509 Certificate** field, copy the certificate data, and then paste the data into the AI for Service **Certificate** text box.
    
    !!! Note
            
        Only data after the **—–BEGIN CERTIFICATE—–** header and before the **—–END CERTIFICATE—-** footer should be copied and pasted into AI for Service.

13. In AI for Service Admin Console, click **Create**. This will complete the integration of Okta login.
To test the configuration, log off the Admin Console, and log on again. The Okta portal should be displayed.

### OneLogin Configuration

**OneLogin** – For more information, refer below, or in the _OneLogin_ documentation, see [Configuring SSO for AI for Service](https://www.onelogin.com/connector/kore){:target="_blank"}.

* **SAML 2.0 Endpoint** – The HTTP SSO endpoint for _OneLogin _to enable Service Provider initiated SAML flow, for example, [https://app.onelogin.com/trust/saml2/http-post/sso/358111](https://app.onelogin.com/trust/saml2/http-post/sso/358111){:target="_blank"}.
* **Issuer URL** – The URL for the _OneLogin_ issuer, for example, [https://app.onelogin.com/saml/metadata/358111](https://app.onelogin.com/saml/metadata/358111){:target="_blank"}.
* **X.509 Certificate** – The public certificate stored by the service provider from the identity provider used to validate a user signature. You can add multiple (max of 2) certificates, delete already added invalid certificates, platform will use the latest certificate for authorization, in case it is invalid then the older certificate would be used.
* **ACS URL for SP Initiated SAML Flow** – This is the redirect URL for Service Provided initiated SAML flow.
* **ACS URL for IDP Initiated SAML Flow** – This is the account-specific URL for Identity Provided initiated SAML flow.
* **SAML Attribute Mapping** – Enable this option to map SAML Attributes with AI for Service Group Names or Admin Roles Names. Once enabled, you can:
    * define how the SAML attributes should be mapped with AI for Service attributes:
        * Full Sync – Every time the user signs in, the platform will update the user’s Group and Role assignments based on the SAML Attributes present in the response. All existing assignments will be removed. Only the new group or role assignments as available in the SAML response will be assigned
        * Inclusion Only – Every time the user signs in, the platform will only assign the new group or roles available in the SAML response. All existing assignments will be retained. New assignments will be added as available in the SAML responses
    
    * define one or more mapping pairs. Each pair includes
        * SAML Attribute Name – Name of the SAML attribute as available in the SAML response
        * SAML Attribute Value – Value associated with the SAML attribute
        * Attribute Type – Refers to the type of mapping to be associated i.e. Group Name or Role Name
            * Group Name – Refers to any of the user groups defined in the AI for Service account
            * Role Name – Refers to the following
            * Admin Roles defined in the AI for Service account
            * App Builder Access
            * New Bot Creation
            * Manage Data Tables and Views
    
        * AI for Service Attribute – Refers to either Group Name or Role Name. The list should include the following:
            * List of all Admin Roles
            * App Builder Access
            * New Bot Creation
            * Manage Data Tables and Views

* **Exclude RequestedAuthnContext in request** - Enable this option to remove RequestedAuthnContext from SAML authentication requests.

#### OneLogin for AI for Service SSO

To configure Single Sign-On in AI for Service using _OneLogin_, you must first add the AI for Service app to your _OneLogin_ account, and then copy URLs and the security certificate from _OneLogin_ into your AI for Service account. This topic describes how to add the AI for Service app to your _OneLogin_ account, and then access the URLs and certificate needed for the AI for Service configuration for SSO using _OneLogin_.

To complete this procedure, you must have already selected _OneLogin_ as a SAML provider on the **Single Sign On** page in the Admin Console.

#### To add the AI for Service app to OneLogin

* Log on to _OneLogin_.
* On the **APPS** menu, click **Add Apps**. The **Find Applications** page is displayed.
* In the **Search** field, enter AI for Service, and then press **Enter**. The AI for Service app for _OneLogin_ is displayed.
* Click the AI for Service app. The **Add AI for Service** page is displayed.
* Optionally, change the display name or the icons displayed to your users in the _OneLogin_ portal, and then click **SAVE**. The AI for Service app is added to your Company apps for _OneLogin_ and the AI for Service app page is displayed.
* On the **SSO** tab, in the **Enable SAML2.0** section, copy the URLs in the:
    * **OneLogin SAML 2.0 Endpoint (HTTP)** field to the AI for Service **SAML 2.0 Endpoint** field
    * **OneLogin Issuer URL** field to the AI for Service **Issuer URL** field

* In the **OneLogin X.509 Certificate** field, click View Details. The **Standard Strength Certificate (2048-bit)** page is displayed.
* In the **X.509 Certificate** section, copy the certificate data, and then paste the data into the AI for Service **X.509 Certificate** text box.
    
    !!!Note
    
        Only data after the **—–BEGIN CERTIFICATE—–** header and before the **—–END CERTIFICATE—-** footer should be copied and pasted into AI for Service.

* In AI for Service Admin Console, click **Create**.

 To test the configuration, log off the Admin Console, and log on again. The **OneLogin** portal should be displayed.

<img src="../images/using-single-sign-on-img4.png" alt="SSO OneLogin" title="SSO OneLogin" style="border: 1px solid gray;zoom:70%;"/>


### Bitium Configuration

* **Single Sign-On URL** – The HTTP SSO endpoint for _Bitium_ to enable Service Provider initiated SAML flow, for example, [https://www.bitium.com/7655](https://www.bitium.com/7655){:target="_blank"}.
* **Issuer URL** – The URL for the _OneLogin_ issuer, for example, [https://bitium.com/7655/saml/82456/metadata.xml](https://bitium.com/7655/saml/82456/metadata.xml){:target="_blank"}.
* **Certificate** – The public certificate stored by the service provider from the identity provider used to validate a user signature. You can add multiple (max of 2) certificates, delete already added invalid certificates, platform will use the latest certificate for authorization, in case it is invalid then the older certificate would be used.
* **ACS URL for SP Initiated SAML Flow** – This is the redirect URL for Service Provided initiated SAML flow.
* **ACS URL for IDP Initiated SAML Flow** – This is the account-specific URL for Identity Provided initiated SAML flow.
* **SAML Attribute Mapping** – Enable this option to map SAML Attributes with AI for Service Group Names or Admin Roles Names. Once enabled, you can:
    * define how the SAML attributes should be mapped with AI for Service attributes:
        * Full Sync – Every time the user signs in, the platform will update the user’s Group and Role assignments based on the SAML Attributes present in the response. All existing assignments will be removed. Only the new group or role assignments as available in the SAML response will be assigned
        * Inclusion Only – Every time the user signs in, the platform will only assign the new group or roles available in the SAML response. All existing assignments will be retained. New assignments will be added as available in the SAML responses

    * define one or more mapping pairs. Each pair includes
        * SAML Attribute Name – Name of the SAML attribute as available in the SAML response
        * SAML Attribute Value – Value associated with the SAML attribute
        * Attribute Type – Refers to the type of mapping to be associated i.e. Group Name or Role Name
            * Group Name – Refers to any of the user groups defined in the AI for Service account
            * Role Name – Refers to the following
            * Admin Roles defined in the AI for Service account
            * App Builder Access
            * New Bot Creation
            * Manage Data Tables and Views

        * AI for Service Attribute – Refers to either Group Name or Role Name. The list should include the following:
            * List of all Admin Roles
            * App Builder Access
            * New Bot Creation
            * Manage Data Tables and Views

* **Exclude RequestedAuthnContext in request -** Enable this option to remove RequestedAuthnContext from SAML authentication requests.

#### AI for Service SSO for Bitium

To configure Single Sign-On in _Bitium_ for AI for Service, you must first add the AI for Service app to your _Bitium_ account, and then copy URLs and the security certificate from _Bitium_ into your AI for Service account. This topic describes how to add the AI for Service app to your _Bitium_ account, and then access the URLs and certificate needed for the AI for Service configuration for SSO using _Bitium_.

To complete this procedure, you must have already selected _Bitium_ as a SAML provider on the **Single Sign On** page in the Admin Console.


**To add the AI for Service app to Bitium**

* Log on to _Bitium_.
* On the **Manage &lt; _Company Name_ >** menu, click **Manage Apps**, then click **Add an App**. The **Add Apps** dialog is displayed.
* In the **Search** field, enter AI for Service, and then press **Enter**. The **Install AI for Service app for _Bitium_**  dialog is displayed.
* On the **Manage Organization** menu, click **Manage Apps**, and then click **AI for Service**.
* On the **Single Sign-On** tab, in the **Select a Single Sign-On Provider** section, select **SAML Authentication**.
* Copy the following URLs from _Bitium_ into the Admin Console _Bitium_ configuration section:
    * **Bitium Login URL** field to the AI for Service **Single Sign-On** field
    * **Bitium Logout URL** field to the AI for Service **Issuer URL** field

* In the Bitium **X.509 Certificate** field, copy the certificate data, and then paste the data into the Admin Console **Certificate** text box.
    
    !!! Note
    
        Only data after the **—–BEGIN CERTIFICATE—–** header and before the **—–END CERTIFICATE—-** footer should be copied and pasted into AI for Service.

* In AI for Service Admin Console, click **Save**.

 To test the configuration, log off the AI for Service Admin Console, and log on again. The Bitium portal should be displayed.

<img src="../images/using-single-sign-on-img5.png" alt="Bitium portal" title="Bitium portal" style="border: 1px solid gray;zoom:70%;"/>

**Other** – Generic SAML identity provider configuration. Select this option if you are not using a AI for Service built-in configuration.

* **Single Sign-On URL** – The URL that AI for Service sends sign on and sign off requests using your WS-Federation identity provider. This is to enable Service Provider initiated SAML flow.
* **Issuer URL** – The URL for the WS-Federation metadata document used for authentication with Active Directory.
* **Certificate** – The public certificate stored by the service provider from the identity provider used to validate a user signature. You can add multiple (max of 2) certificates, delete already added invalid certificates, platform will use the latest certificate for authorization, in case it is invalid then the older certificate would be used.
* **ACS URL for SP Initiated SAML Flow** – This is the redirect URL for Service Provided initiated SAML flow.
* **ACS URL for IDP Initiated SAML Flow** – This is the account-specific URL for Identity Provided initiated SAML flow.
* **SAML Attribute Mapping** – Enable this option to map SAML Attributes with AI for Service Group Names or Admin Roles Names. Once enabled, you can:
    * define how the SAML attributes should be mapped with AI for Service attributes:
        * Full Sync – Every time the user signs in, the platform will update the user’s Group and Role assignments based on the SAML Attributes present in the response. All existing assignments will be removed. Only the new group or role assignments as available in the SAML response will be assigned
        * Inclusion Only – Every time the user signs in, the platform will only assign the new group or roles available in the SAML response. All existing assignments will be retained. New assignments will be added as available in the SAML responses

    * define one or more mapping pairs. Each pair includes
        * SAML Attribute Name – Name of the SAML attribute as available in the SAML response
        * SAML Attribute Value – Value associated with the SAML attribute
        * Attribute Type – Refers to the type of mapping to be associated i.e. Group Name or Role Name
            * Group Name – Refers to any of the user groups defined in the AI for Service account
            * Role Name – Refers to the following
            * Admin Roles defined in the AI for Service account
            * App Builder Access
            * New Bot Creation
            * Manage Data Tables and Views

        * AI for Service Attribute – Refers to either Group Name or Role Name. The list should include the following:
            * List of all Admin Roles
            * App Builder Access
            * New Bot Creation
            * Manage Data Tables and Views

    * In the administrative console for your Single Sign-On provider, you will also need to define the URLs that are used to exchange data between AI for Service and your SSO provider. While the URL names may vary by SSO provider, you will need to define these URLs:
        * **Assertion Consumer Service (ACS) URL** or **Callback URL** as [https://idp.kore.com/authorize/callback.](https://idp.kore.com/authorize/callback?__hstc=59894770.e90bc57a4e2025da994552ad13bbab05.1699003492940.1701937564529.1701950143315.124&__hssc=59894770.1.1701950143315&__hsfp=4271746649){:target="_blank"}
        * In addition to authentication values, you must pass the email address of the user as an LDAP attribute from Active Directory when using ADFS. For more information, see [Attributes for ADFS](#attributes-for-adfs).
        * **Identity URL** or **Sign On URL** as [https://idp.kore.com](https://idp.kore.com/?__hstc=59894770.e90bc57a4e2025da994552ad13bbab05.1699003492940.1701937564529.1701950143315.124&__hssc=59894770.1.1701950143315&__hsfp=4271746649){:target="_blank"}

* Click **Create**.


#### Attributes for ADFS

When you configure Single Sign-On using LDAP for ADFS, in addition to authentication attributes, your third-party SSO provider can send additional attributes to AI for Service through the **Assertion Consumer Service (ACS) URL** or **Callback URL**.

If you are using a built-in AI for Service app for SSO, such as _Windows Azure_ for WS-Federation protocol, or _OneLogin_ for SAML protocol, required attributes are already configured for AI for Service when you add the AI for Service app to your SSO provider admin console.

The following data is an example of attribute data passed to AI for Service in the callback URL.

```
<Attribute Name="FirstName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri" FriendlyName="First Name">
<AttributeValue>Michael</AttributeValue>
</Attribute>
<Attribute Name="LastName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri" FriendlyName="Last Name">
<AttributeValue>Doe</AttributeValue>
</Attribute>
<Attribute Name="DisplayName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri" FriendlyName="Display Name">
<AttributeValue>John Doe</AttributeValue>
</Attribute>
<Attribute Name="EmailAddress" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri" FriendlyName="Email">
<AttributeValue>john.doe@example.com</AttributeValue>
</Attribute>
```

These attributes are optional except for the `EmailAddress`, which is required. The `Email Address` attribute uses the following `nameId` format:

```
SAML 2.0:
NameID Format="urn:oasis:names:tc:SAML:2.0:attrname-format:uri"
SAML 1.1:
NameID Format="urn:oasis:names:tc:SAML:1.1:nameid:format:emailAddress
```

#### Mapping Attributes in ADFS

ADFS is a service provided by Microsoft as a standard role for Windows Server that provides a web login using existing Active Directory credentials. When using SAML or WS-Federation protocols to log on with ADFS, you can pass other values in addition to the authentication values.

The attribute values are defined as **Claim Rules** in the **Relying Party Trust** dialog in the SQL Server admin console. To edit the **Claim Rules**, select the **Relying Party Trusts** folder in **ADFS Management**, and then click **Edit Claim Rules** from the **Actions** sidebar. To add a new rule, click **Add Rule**, and then select the **Send LDAP Attributes** template. Enter the following mapping values:

* **SAML 2.0**
    * **LDAP Attribute:** nameId
    * **Claim Attribute:** uri

* **SAML 1.1**
    * **LDAP Attribute:** nameId
    * **Claim Attribute:** emailAddress


## Logging On Using Your Admin Password Instead of SSO

As an Bots Admin, you can enable Single Sign-On (SSO) using a third-party security system, for example, _Google_. If for some reason, your SSO security system fails, or you forget your SSO log on credentials for your third-party security system, you can still log on to the AI for Service Admin Console and bypass SSO.

A Bots Admin with a custom admin role can only bypass SSO and use their admin password if custom privileges are enabled for at least one module. To log on to the AI for Service Directory Agent, the custom admin must have privileges enabled for **Enrollment – Directory Sync**.

Before you can enable SSO, the Admin must have logged on the Admin Console using the log on credentials provided when signing up. After the Admin configures and enables SSO, you can still access the Admin Console directly at the following URL:

[https://bots.kore.ai/admin](https://bots.kore.ai/admin){:target="_blank"}

The following log on page is displayed and using your Admin password credentials, you can log on to the Admin Console and bypass SSO, if enabled.

<img src="../images/using-single-sign-on-img6.png" alt="Log on to Admin Console" title="Log on to Admin Console" style="border: 1px solid gray;zoom:70%;"/>

If you cannot remember your Admin password, enter your email ID, and then click the **Forgot your password?** link shown in the previous image. An email is sent to your AI for Service email account with instructions on how to reset your Admin password.


## Logging Off

When you are finished with your session with the Admin Console, you should log off the console and close your session to keep your account secure. To log off, click on your user name, and then click **Logout** as shown in the following illustration.

<img src="../images/using-single-sign-on-img7.png" alt="Log off from Admin Console" title="Log off from Admin Console" style="border: 1px solid gray;zoom:70%;"/>

If your Admin Console session is idle for more than 15 minutes, your session is automatically terminated, and the next action in the session window will open the AI for Service web client instead. To start a new session, click the **Admin Console** <img src="../images/using-single-sign-on-img8.png"> icon and log on.
