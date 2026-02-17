# Service Account Configuration

AI for Work integrates with external identity providers through service accounts. These accounts authenticate the application and grant access to user directories, groups, and organizational data. You can configure multiple service accounts and designate one as the default for system-wide operations.

<img src="../images/service-account.png" alt="service-account" title="service-account" style="border: 1px solid gray; zoom:80%;">


## Supported Service Account Types

The platform supports three identity provider types:

* **Google**: Connects to Google Workspace for user and group management.
* **Microsoft Azure**: Integrates with Azure Active Directory for organizational data access.
* **LDAP**: Links to on-premises directory services.

Each service account type requires specific credentials obtained from the respective platform. Refer to the platform-specific setup guides before configuring accounts.


## Add a New Service Account

Navigate to the **Service Account** under **Connections**. The system displays options for all supported service account types. Click the type of service account you want to configure. The platform displays a form with fields specific to that provider.


### Configure Google Service Account

Before configuring Google, complete the setup process in Google Cloud Console and Google Admin Console. Refer to the [Google Cloud Setup Guide](./google-cloud-service-accounts.md) for detailed instructions.

Enter the following information in the form:

* **Account Name**: Enter a descriptive name to identify this service account.
* **Client Email**: Paste the service account email from your Google Cloud JSON key file.
* **Admin Email**: Enter the Google Workspace administrator email address.
* **Private Key**: Paste the complete private key from your JSON key file (includes the BEGIN and END markers).

Click **Save** to create the service account connection.


### Configure Microsoft Azure Service Account

Before configuring Azure, complete the app registration and permission setup in the Azure Portal. Refer to the [Microsoft Azure Setup Guide](./azure-service-accounts.md) for detailed instructions.

Enter the following information in the form:

* **Account Name**: Enter a descriptive name to identify this service account.
* **Client ID**:Paste the Application (Client) ID from your Azure app registration.
* **Tenant ID**:Paste the Directory (Tenant) ID from your Azure app registration.
* **Client Secret**:Paste the client secret value you copied when creating the secret in Azure.

Click **Save** to create the service account connection.


### Configure LDAP Service Account

LDAP service accounts connect the platform to on-premises directory services. Enter the following information in the form:

* **Account Name**: Enter a descriptive name to identify this service account.
* **URL**: Enter your LDAP server URL.
* **Base DN**: Enter the base distinguished name for directory searches.
* **Authentication Type**: Select your LDAP authentication method from the dropdown.
* **Person Filter**: Enter the LDAP filter to identify user objects.
* **Group Filter**: Enter the LDAP filter to identify group objects.

Click **Save** to create the service account connection.


## Manage Service Accounts

The platform displays all configured service accounts in a list. Each account includes a **three-dot menu** that provides access to management options.

### Edit Service Account Details

Update the configuration of an existing service account:

1. Click the **three-dot menu** next to the service account you want to modify.
2. Select **Edit** from the menu.
3. Update the configuration fields as needed.
4. Click **Save** to apply your changes.

The system validates your credentials and updates the service account configuration.


### Set Default Service Account

The platform uses the default service account for specific features, including user suggestions when inviting users to the account or workspace. The system suggests users who aren't part of the account but belong to the organization's Active Directory. Only one service account can be set as the default at a time.

To designate a service account as default:

1. Click the **three-dot menu** next to the service account.
2. Select **Set as Default.**

The system marks this account as the default and uses it for all relevant operations.

### Delete Service Account

Remove a service account:

1. Click the **three-dot menu** next to the service account.
2. Select **Delete.**
3. Confirm the deletion when prompted.

!!! note

    Platform prevents deletion of service accounts that link to active user enrollment. If you attempt to delete a linked account, the system displays a warning message explaining the restriction.
