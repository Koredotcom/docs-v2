# Configure Google Console

This guide walks you through creating a Google Cloud service account with the required permissions for integration. Complete these steps in the Google Cloud Console and Google Admin Console before configuring the service account.

## Prerequisites

* Access to the[ Google Cloud Console](https://console.cloud.google.com/iam-admin/serviceaccounts).
* Access to the[ Google Admin Console](https://admin.google.com).
* Google Cloud administrator permissions to create service accounts and manage IAM.
* Google Workspace administrator permissions to configure domain-wide delegation.


## Access Service Accounts

1. Log in to the[ Google Cloud Console](https://console.cloud.google.com/iam-admin/serviceaccounts).
2. Select an existing project or create a new project if you haven't already.
3. Navigate to **IAM & Admin** > **Service Accounts**.


## Create New Service Account

1. Click **Create Service Account** in the toolbar.
2. Enter a descriptive **Service Account Name**.
3. Enter an optional **Service Account Description** to identify the account's purpose.
4. Click **Create and Continue**.
5. Skip the optional grant access steps and click **Done**.

Google Cloud creates the service account and displays it in the service accounts list.


## Generate Service Account Key

The service account key provides authentication credentials used to access Google Workspace APIs.


### Create JSON Key File

1. Locate the service account you just created in the service accounts list.
2. Click the **three-dot menu** (Actions) next to the service account.
3. Select **Manage Keys** from the menu.
4. Click **Add Key** > **Create New Key**.
5. Select **JSON** as the key type.
6. Click **Create**.

Google Cloud generates the key and automatically downloads a JSON file to your computer. Store this file securely.


### Extract Required Credentials

Open the downloaded JSON key file and locate the following values:

* **Client Email** -- The service account email address (example: `service-account@project-id.iam.gserviceaccount.com`).
* **Private Key** -- The complete private key string, including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` markers.
* **Client ID** -- The unique identifier for this service account (you'll use this in the next section).

!!! note

    Keep this JSON file secure. Anyone with access to this file can authenticate as this service account.


## Configure Domain-Wide Delegation

Domain-wide delegation grants the service account permission to access user data across your Google Workspace organization.


### Enable API Access in Google Admin Console

1. Log in to the[ Google Admin Console](https://admin.google.com).
2. Navigate to **Security** > **API Controls** > **Domain-wide Delegation**.
3. Click **Add New** in the Domain-wide Delegation section.

### Add Service Account Client

1. Enter the **Client ID** from your service account JSON file in the **Client ID** field.
2. Add the required **OAuth Scopes** in the **OAuth Scopes** field. Enter each scope as a comma-separated list:
    * `https://www.googleapis.com/auth/admin.directory.user.readonly`
    * `https://www.googleapis.com/auth/admin.directory.group.readonly`
    * `https://www.googleapis.com/auth/admin.directory.orgunit.readonly`
    * `https://www.googleapis.com/auth/admin.directory.domain.readonly`
3. Click **Authorize**.

Google Workspace grants the service account domain-wide access with the specified scopes.

!!! note

    Refer to the [Google Workspace API documentation](https://developers.google.com/workspace) for additional scopes based on your integration requirements.

## Retrieve Admin Email

The platform requires a Google Workspace administrator email address to impersonate when making API calls.

Identify a Google Workspace administrator account in your organization and note the email address. This email wont appear in the JSON key file and must be obtained separately from your Google Workspace admin list.


## Next Steps

You now have all the credentials required to configure the Google service account:

* **Account Name** -- A descriptive name.
* **Client Email** -- Service account email from the JSON key file.
* **Admin Email** -- Google Workspace administrator email address.
* **Private Key** -- Complete private key string from the JSON key file (including BEGIN and END markers).

Return to the platform and enter these credentials in the Google service account configuration form. Refer to the [Service Account](./service-accounts.md) guide for detailed instructions.
