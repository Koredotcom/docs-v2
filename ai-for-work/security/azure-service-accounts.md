# Configure Microsoft Azure 

This guide walks you through creating an Azure app registration with the required permissions for integration. Complete these steps in the Azure Portal before configuring the service account.

## Prerequisites

* Access to the [Azure Portal](https://portal.azure.com/#home).
* Azure Active Directory administrator permissions to create app registrations and grant admin consent.
* Permissions to create client secrets.

## Access App Registrations

1. Log in to the[ Azure Portal](https://portal.azure.com/#home).
2. Type **App Registrations** in the search bar at the top of the page.
3. Select **App Registrations** from the search results.
<img src="../images/microsoft-azure-access-app.png" alt="microsoft-azure-access-app" title="microsoft-azure-access-app" style="border: 1px solid gray; zoom:80%;"/>

### Register New Application

1. Click **New Registration** in the toolbar.
2. Enter a descriptive **Application Name**.
<img src="../images/microsoft-azure-register-app.png" alt="microsoft-azure-register-app" title="microsoft-azure-register-app" style="border: 1px solid gray; zoom:80%;"/>

1. Select the appropriate **Tenant Type**:
    * **Single tenant**: Only users in your organization can access this application.
    * **Multi-tenant**: Users from multiple organizations can access this application.
2. Click **Register**.

Azure creates the app registration and displays the Overview page.

## Configure Microsoft Graph API Permissions

The app registration requires specific Microsoft Graph permissions to access user directories, groups, and organizational data.

### Add Application Permissions

1. Click **API Permissions** in the left sidebar.
2. Click **Add a Permission** in the main panel.
3. Select **Microsoft Graph** from the right sidebar.
<img src="../images/microsoft-azure-graph.png" alt="microsoft-azure-graph" title="microsoft-azure-graph" style="border: 1px solid gray; zoom:80%;"/>

1. Click **Application Permissions** (not Delegated permissions).
<img src="../images/microsoft-azure-permissions.png" alt="microsoft-azure-permissions" title="microsoft-azure-permissions" style="border: 1px solid gray; zoom:80%;"/>

### Select Required Permissions

Add the following permissions by searching for each one and checking its checkbox:

| **Scopes** | **Purpose** | **Required** |
|------------|-------------|--------------|
| **User.Read.All** | The application reads user profile attributes (name, email, job title, department) to identify users referenced in groups and audit logs. | **Yes** --- the application cannot resolve user identities without this scope. |
| **Group.Read.All** | The application reads group metadata (ID, name, email) and resolves group references found in audit logs. | **Yes** --- the application needs this to identify groups that are affected by membership changes. |
| **Directory.Read.All** | The application traverses directory relationships (e.g., manager lookup) in read-only mode to ensure reliable directory queries in large tenants. | **Yes** --- the application requires this for consistent directory reads across environments. |
| **AuditLog.Read.All** | The application reads directory audit logs to detect group membership changes (users added to or removed from groups). This enables incremental sync without scanning the full directory. | **Yes** --- the application cannot detect group membership changes without this scope. |
| **People.Read.All** | Organizational users search for people by name using the Microsoft Graph People API (/people). | **Optional** --- only required if the application enables people search functionality. |
| **GroupMember.Read.All** | The application directly enumerates group members using group membership APIs. | **Optional** --- Group.Read.All covers this functionality and does not expand access. |
| **User.ReadBasic.All** | The application retrieves basic user identity fields (display name, email, ID). | **Optional** --- redundant when User.Read.All is granted; included only for compatibility. |

After selecting all permissions, click **Add Permissions** at the bottom of the panel.

### Grant Administrator Consent

Application permissions require administrator consent before they take effect.

1. Click **Grant Admin Consent for [Your Organization]** in the API permissions page.
2. Review the permissions in the confirmation dialog.
3. Click **Yes** to grant consent.

Azure marks all permissions with a green checkmark, indicating admin consent is granted successfully.

## Retrieve Authentication Credentials

The platform requires three pieces of information from your app registration: Client ID, Tenant ID, and Client Secret.

**Copy Client ID and Tenant ID**

1. Click **Overview** in the left sidebar (if not already on the Overview page).
2. Locate the **Application (client) ID** field.
3. Click the copy icon next to the ID to copy it to your clipboard.
4. Store this value securely, you'll enter it as the **Client ID.**
5. Locate the **Directory (tenant) ID** field.
6. Click the copy icon next to the ID to copy it to your clipboard.
7. Store this value securely, you'll enter it as the **Tenant ID.**

## Create Client Secret

Client secrets authenticate the platform when accessing Microsoft Graph APIs.

**Generate New Secret**

1. Click **Certificates & Secrets** in the left sidebar.
2. Click the **Client Secrets** tab.
3. Click **New Client Secret**.
4. Enter a **Description** for the secret. 
<img src="../images/microsoft-azure-description.png" alt="microsoft-azure-description" title="microsoft-azure-description" style="border: 1px solid gray; zoom:80%;"/>

1. Select an **Expiration Period**:
    * **90 days (3 months)**: Highest security, requires frequent rotation.
    * **180 days (6 months)**: Balanced security and maintenance.
    * **365 days (12 months)**: Lower maintenance, requires careful monitoring.
    * **Custom**: Set a specific expiration date.
2. Click **Add**.

Azure generates the secret and displays it in the client secrets list.

**Copy Secret Value**

!!! note
    
     Azure displays the secret value only once at creation. If you lose the secret value, you must create a new client secret and update the configuration.

1. Locate the **Value** column in the client secrets list.
2. Click the copy icon next to the secret value.
3. Store this value securely, you'll enter it as the **Client Secret**.

## Set Expiration Reminders

Client secrets expire based on the period you selected. Set calendar reminders to rotate secrets before they expire to prevent service disruptions.

**Recommended reminder schedule**:

* **30 days before expiration**:  Begin planning secret rotation.
* **7 days before expiration**: Create a new secret and test in the non-production environment.
* **2 days before expiration**: Update production configuration with the new secret.

## Next Steps

You now have all the credentials required to configure the Microsoft Azure service account:

* **Client ID**: Application (client) ID from the Overview page.
* **Tenant ID**: Directory (tenant) ID from the Overview page.
* **Client Secret**: Secret value you copied when creating the client secret.
Return to the platform and enter these credentials in the Microsoft Azure service account configuration form. Refer to the [Service Account](./service-accounts.md) guide for detailed instructions.
