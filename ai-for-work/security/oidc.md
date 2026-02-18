# OpenID Connect (OIDC)

OpenID Connect (OIDC) is a modern authentication protocol built on OAuth 2.0 that provides simple identity verification and enables applications to obtain basic profile information about users. This configuration allows seamless integration with popular identity providers like Google and Microsoft Azure.

<img src="../images/oidc_overview.png" alt="open-id-connect" title="open-id-connect" style="border: 1px solid gray; zoom:80%;"/>

## Getting Started

Setting up OpenID Connect authentication is straightforward and takes just a few configuration steps. Follow this quick setup process to enable secure access for your organization.

1. Navigate to **Admin Console > Security > Single Sign-On**.
2. Turn on the toggle **Enable SSO**.
3. In the **Select a suitable Sign-On Protocol** section, select **OpenID Connect**.
4. In the **Configure** section, select your identity provider and configure the settings.

## Identity Provider Configurations

Choose from the supported identity providers. Each provider offers specific features and integration capabilities to match your security requirements.

### Google Configuration

Google's OpenID Connect implementation provides enterprise-grade authentication with seamless integration for G Suite domains. Configure these essential fields to establish secure communication between Google and AI for Work.

<img src="../images/oidc_overview_2.png" alt="open-id-connect" title="open-id-connect" style="border: 1px solid gray; zoom:80%;"/>

#### Configuration Steps

1. **Select Identity Provider**:
    * In the **Configure** section, select **Sign in with Google**.
2. **Enable Service Account**:
    * Turn on the toggle **Configure service account for your G-Suite domain**.
3. **Configure Required Fields**:

<table>
  <tr>
   <td>
<strong>Field</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Required</strong>
   </td>
  </tr>
  <tr>
   <td>Client Email
   </td>
   <td>The service account email address from your Google Cloud project is used for authentication
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Admin Email
   </td>
   <td>The G Suite administrator email address that has permissions to manage user access.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Private Key
   </td>
   <td>The private key from your Google service account credentials is used to sign authentication requests.
   </td>
   <td>Yes
   </td>
  </tr>
</table>

4. **Save Configuration**:
    * Click **Save**.
    * The *Identity Provider information successfully updated* message is displayed at the top of the page.

#### Setting up Google for AI for Work SSO

To set up the application in your Google Workspace environment, you need to create a service account and configure domain-wide delegation.

**Prerequisites**: You must have Google Workspace administrator privileges and have already selected Google as an OpenID Connect provider in the Admin Console.

**Steps to configure Google**:

1. **Create Service Account**:
    * Log in to[Google Cloud Console](https://console.cloud.google.com/).
    * Navigate to **IAM & Admin > Service Accounts**.
    * Click **Create Service Account**.
    * Provide a service account name and description.
    * Click **Create and Continue**.
2. **Generate Private Key**:
    * In the service accounts list, click on the newly created service account.
    * Go to the **Keys** tab.
    * Click **Add Key > Create new key**.
    * Select **JSON** format.
    * Click **Create** to download the key file.
3. **Enable Domain-Wide Delegation**:
    * In the service account details, check **Enable Google Workspace Domain-wide Delegation**.
    * Click **Save**.
    * Note the **Client ID** for the next steps.
4. **Configure G Suite Admin Console**:
    * Log in to[Google Admin Console](https://admin.google.com/).
    * Go to **Security > API Controls > Domain-wide Delegation**.
    * Click **Add new**.
    * Enter the **Client ID** from the service account.
    * Add required OAuth scopes (e.g., `https://www.googleapis.com/auth/admin.directory.user.readonly`).
    * Click **Authorize**.
5. **Copy Configuration Details**:
    * From the downloaded JSON key file, copy the following to the platform:
        * **client_email** → **Client Email** field
        * **private_key** → **Private Key** field
    * Enter your G Suite admin email in the **Admin Email** field.
6. **Save** the configuration.

### Microsoft Azure Configuration

Microsoft Azure Active Directory (now Microsoft Entra ID) provides comprehensive identity and access management with robust security features. This configuration enables secure authentication for your organization's users.

<img src="../images/oidc_overview_3.png" alt="open-id-connect" title="open-id-connect" style="border: 1px solid gray; zoom:80%;"/>

#### Configuration Steps

1.  **Select Identity Provider**:

    -   In the **Configure** section, select **Microsoft Azure**.

2.  **Configure Custom Application**:

    -   **Use Your Microsoft Entra ID App for SSO Login**: Instead of approving the default system-provided app in Microsoft Admin, you can create and configure your own app. Once set up, this app will be used for SSO login for users in your account.
    
    -   **Redirect URL**: The system displays the Redirect URL required for creating your Microsoft Entra ID App. Copy this URL using the copy icon and use it when configuring your app in the Microsoft Azure portal.

3.  **Save Configuration**:

    -   Click **Save**.

    -   The *Identity Provider information successfully updated* message is displayed at the top of the page.

#### Setting up Microsoft Azure for AI for Work SSO

To set up the application in your Microsoft Entra ID (formerly Azure AD) environment, you need to register an application and configure authentication settings.

**Prerequisites**: You must have Microsoft Entra ID administrator privileges and have already selected Microsoft Azure as an OpenID Connect provider in the Admin Console.

**Steps to configure Microsoft Azure**:

1. **Register Application in Microsoft Entra ID**:
    * Log in to [Azure Portal](https://portal.azure.com/).
    * Navigate to **Microsoft Entra ID > App registrations**.
    * Click **New registration**.
    * Provide an application name.
    * Select the appropriate supported account types.
    * Configure the redirect URI.
    * Click **Register**.
2. **Configure Authentication**:
    * In the registered app, go to **Authentication**.
    * Add the redirect URI provided by the platform.
    * Configure token configuration settings as required.
    * Enable **ID tokens** under the Implicit grant and hybrid flows.
    * Click **Save**.
3. **Create Client Secret**:
    * Go to **Certificates & secrets**.
    * Click **New client secret**.
    * Add a description and select an expiration period.
    * Click **Add**.
    * Copy the secret value immediately (it will only be shown once).
4. **Configure API Permissions**:
    * Go to **API permissions**.
    * Click **Add a permission**.
    * Select **Microsoft Graph**.
    * Add required permissions (User.Read, email, openid, profile).
    * Click **Grant admin consent** for your organization.
5. **Copy Configuration Details**:
    * From the app overview page, note the following:
        * **Application (client) ID**
        * **Directory (tenant) ID**
    * Copy these values along with the client secret to configure in the platform.
6. **Complete Configuration**: Create and Register App in Microsoft Entra ID.
7. **Save** the configuration.
