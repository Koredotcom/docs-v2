# WS-Federation Configuration

WS-Federation is a protocol that enables identity federation across different security realms, allowing users to authenticate once and access multiple applications. This configuration is commonly used with Active Directory Federation Services (ADFS) and provides enterprise-grade security for organizations using Windows-based identity infrastructure.

<img src="../images/wsfc_overview.png" alt="open-id-connect" title="open-id-connect" style="border: 1px solid gray; zoom:80%;"/>

## Getting Started

Setting up WS-Federation authentication is straightforward and takes just a few configuration steps. Follow this quick setup process to enable secure access for your organization.

1. Navigate to **Admin Console > Security > Single Sign-On**.
2. Turn on the toggle **Enable SSO**.
3. In the **Select a suitable Sign-On Protocol** section, select **WS-Federation**.
4. In the **Configure** section, select your identity provider and configure the settings.

## Identity Provider Configurations

Choose from the supported identity providers or use a custom WS-Federation configuration. Each provider offers specific features and integration capabilities to match your security requirements.

### Windows Azure Configuration

Windows Azure Active Directory (now Microsoft Entra ID) provides comprehensive identity federation capabilities with seamless integration for Azure-based organizations. Configure these essential fields to establish secure communication between Azure and AI for Work.

<img src="../images/wsfc_azure.png" alt="open-id-connect" title="open-id-connect" style="border: 1px solid gray; zoom:80%;"/>

#### Configuration Fields

<table>
  <tr>
   <td>Field
   </td>
   <td>Description
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Azure AD Sign-On Endpoint URL
   </td>
   <td>The URL that platform must use for sign-on and sign-off/out requests using Azure. This is the WS-Federation passive endpoint. (e.g., https://login.microsoftonline.com/&lt;tenant-id>/wsfed)
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Azure AD Federation Metadata Document
   </td>
   <td>The URL for the federation metadata document used for authentication with Azure Active Directory. This XML document contains configuration details and certificates. (e.g., https://login.microsoftonline.com/&lt;tenant-id>/FederationMetadata/2007-06/FederationMetadata.xml)
   </td>
   <td>Yes
   </td>
  </tr>
</table>

#### Configuration Steps

1. **Select Identity Provider**:
    * In the **Configure** section, select **Windows Azure**.
2. **Configure Required Fields**:
    * Enter the **Azure AD Sign-On Endpoint URL**.
    * Enter the **Azure AD Federation Metadata Document** URL.
3. **Save Configuration**:
    * Click **Save**.
    * The *Identity Provider information successfully updated* message is displayed at the top of the page.

#### Setting up Windows Azure for SSO

To set up the application in your Microsoft Entra ID (formerly Azure AD) environment using WS-Federation, you need to register a relying party trust and configure federation settings.

**Prerequisites**: You must have Microsoft Entra ID administrator privileges and have already selected Windows Azure as a WS-Federation provider in the Admin Console.

**Steps to configure Windows Azure**:

1. **Access Azure Portal**:
    * Log in to [Azure Portal](https://portal.azure.com/).
    * Navigate to **Microsoft Entra ID**.
2. **Locate Federation Endpoints**:
    * Go to **App registrations > Endpoints**.
    * Note the following endpoints:
        * **Federation metadata document** URL
        * **WS-Federation sign-on endpoint** URL
3. **Configure Enterprise Application**:
    * Navigate to **Enterprise applications > New application**.
    * Select **Create your own application**.
    * Choose **Integrate any other application you don't find in the gallery**.
    * Enter the application name.
    * Click **Create**.
4. **Set Up Single Sign-On**:
    * In the application overview, go to **Single sign-on**.
    * Select **WS-Fed** as the single sign-on method.
    * Configure the following:
        * **Identifier (Entity ID)**: Provided by the application
        * **Reply URL**: Provided by the application
        * **Sign-on URL**: Your application's instance URL
5. **Configure User Assignment**:
    * Go to **Users and groups**.
    * Click **Add user/group**.
    * Select users or groups that should have access to the application.
    * Click **Assign**.
6. **Copy Configuration Details**:
    * From the endpoints page, copy the following to the application:
        * **WS-Federation Sign-On Endpoint** → **Azure AD Sign-On Endpoint URL**
        * **Federation Metadata Document** URL → **Azure AD Federation Metadata Document**
7. **Test Configuration**:
    * Verify that the metadata document URL is accessible.
    * Ensure all users assigned to the application can authenticate.
8. **Save** the configuration.

### Other (Generic WS-Federation Provider)

Use this option for any WS-Federation compliant identity provider not specifically listed above, including on-premises Active Directory Federation Services (ADFS) deployments. This flexible configuration supports custom enterprise identity solutions and third-party WS-Federation providers.

<img src="../images/wsfc_others.png" alt="open-id-connect" title="open-id-connect" style="border: 1px solid gray; zoom:80%;"/>


#### Configuration Fields

<table>
  <tr>
   <td>Field
   </td>
   <td>Description
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>AD Sign-On Endpoint URL
   </td>
   <td>The URL that application must use for sign-on and sign-off/out requests using the WS-Federation identity provider. This is the WS-Federation passive endpoint. (e.g., <code>https://adfs.yourcompany.com/adfs/ls/</code>)
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>AD Federation Metadata Document URL
   </td>
   <td>The URL for the federation metadata document used for authentication with Active Directory. This XML document contains configuration details and certificates. (e.g., <code>https://adfs.yourcompany.com/FederationMetadata/2007-06/FederationMetadata.xml</code>)
   </td>
   <td>Yes
   </td>
  </tr>
</table>

#### Configuration Steps

1. **Select Identity Provider**:
    * In the **Configure** section, select **Other**.
2. **Configure Required Fields**:
    * Enter the **AD Sign-On Endpoint URL**.
    * Enter the **AD Federation Metadata Document URL**.
3. **Save Configuration**:
    * Click **Save**.
    * The *Identity Provider information successfully updated* message is displayed at the top of the page.

#### Setting up ADFS for SSO

To set up the application with Active Directory Federation Services (ADFS), you need to add a relying party trust and configure claim rules.

**Prerequisites**: You must have ADFS administrator access and have already selected Other as a WS-Federation provider in the Admin Console.

**Steps to configure ADFS**:

1. **Open ADFS Management Console**:
    * Log in to your ADFS server.
    * Open **ADFS Management** from Server Manager or Administrative Tools.
2. **Add Relying Party Trust**:
    * Right-click **Relying Party Trusts** and select **Add Relying Party Trust**.
    * Click **Start** in the wizard.
    * Select **Enter data about the relying party manually**.
    * Click **Next**.
3. **Configure Display Name**:
    * Enter the display name.
    * Optionally add notes about the application.
    * Click **Next**.
4. **Select Profile**:
    * Choose **AD FS profile**.
    * Click **Next**.
5. **Configure Certificate**:
    * Skip the certificate configuration (unless you have specific requirements).
    * Click **Next**.
6. **Configure URLs**:
    * Check **Enable support for the WS-Federation Passive protocol**.
    * Enter the **Relying party WS-Federation Passive protocol URL** (provided by the application).
    * Click **Next**.
7. **Add Relying Party Trust Identifier**:
    * Enter the relying party trust identifier (provided by the application).
    * Click **Add**.
    * Click **Next**.
8. **Configure Multi-factor Authentication**:
    * Select your preferred MFA setting.
    * Click **Next**.
9. **Choose Issuance Authorization Rules**:
    * Select **Permit all users to access this relying party**.
    * Click **Next**.
10. **Review Settings**:
    * Review all configuration settings.
    * Check **Open the Edit Claim Rules dialog**.
    * Click **Close**.
11. **Configure Claim Rules**:
    * In the **Edit Claim Rules** dialog, click **Add Rule**.
    * Select **Send LDAP Attributes as Claims**.
    * Configure the following mappings:
        * **E-Mail-Addresses** → **E-Mail Address**
        * **Given-Name** → **Given Name**
        * **Surname** → **Surname**
        * **User-Principal-Name** → **UPN**
    * Click **Finish**.
12. **Add Name ID Claim**:
    * Click **Add Rule** again.
    * Select **Transform an Incoming Claim**.
    * Configure:
        * **Incoming claim type**: E-Mail Address
        * **Outgoing claim type**: Name ID
        * **Outgoing name ID format**: Email
    * Click **Finish** and **OK**.
13. **Locate Federation Endpoints**:
    * In ADFS Management, go to **Service > Endpoints**.
    * Note the following:
        * **WS-Federation Passive Endpoint**: `/adfs/ls/`
        * **Federation Metadata URL**: `/FederationMetadata/2007-06/FederationMetadata.xml`
14. **Copy Configuration Details**:
    * Copy the following to the application:
        * Full WS-Federation endpoint URL → **AD Sign-On Endpoint URL**
        * Full federation metadata URL → **AD Federation Metadata Document URL**
15. **Test Metadata Accessibility**:
    * Open the federation metadata URL in a browser.
    * Verify that the XML document loads correctly.
    * Ensure it's accessible from the network where the application is hosted.
16. **Save** the configuration in the application.