# Microsoft Teams and Copilot Integration - Configuration 

This document provides detailed step-by-step instructions for implementing AI for Work integration with Microsoft Teams. Follow these phases sequentially to ensure proper deployment and functionality.

## Step-by-Step Implementation Guide

### Phase 1: Initial Setup and Webhook Configuration

**Objective:** Establish communication between AI for Work and Azure Bot Service.

1. Log in to the **Admin Console**.
2. Navigate to **Channels** > **Microsoft Teams and Copilot**.
3. Copy and save the **Webhook URL**, to use in Azure Bot configuration later.

### Phase 2: Azure Bot Service Creation

Create and configure the Azure Bot that serves as the communication bridge.

**Create Azure Bot Resource**

1. Sign in to the **Azure Portal**.
2. Click **+ Create a resource** → Search for **Azure Bot**.
3. Select **Azure Bot** and configure the following: 

    * **Bot Handle**: Choose a unique name.
    * **Subscription**: Select your active subscription.
    * **Resource Group**: Create or reuse an existing group.
    * **Pricing Tier**: Select based on expected usage.
    * **App Type**: Select **Multi-Tenant** or **Single-Tenant** based on organizational needs.

**Configure Bot Resource**

1. After deployment completes, click **Go to resource** and navigate to **Configuration** in the left sidebar.
2. Paste the webhook URL copied from the AI for Work platform into the **Messaging endpoint** field and click **Apply** to save the configuration.


### Phase 3: Authentication and Security Setup

This phase varies based on your chosen App Type (MultiTenant vs SingleTenant).

**For MultiTenant Applications**

**Generate Client Secret**

1. In **Configuration**, click **Manage Password** next to the Microsoft App ID.
<img src="../images/teams_1.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

2. Go to **Certificates & secrets** → **+ New client secret**.
<img src="../images/teams_2.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

1. Enter description and expiry → **Add**.
2. Copy the **Value** of the client secret (App Password).
3. Record the **Microsoft App ID** and **App Password** for the Platform configuration.

**For Single-Tenant Applications**

Follow the steps for Multi-Tenant setup. Also, note the Tenant ID for the Platform configuration.

### Phase 4: Enable Microsoft Teams Channel Integration

Configure the bot to communicate with Microsoft Teams and enable Copilot integration.

1. Navigate to **Channels** in the bot resource menu and locate the **Available Channels** section.
2. Select the **Microsoft Teams** channel and **M365 Extensions** channel (required for Copilot integration), review channel information, and select **Save**.
<img src="../images/teams_3.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

!!!note

    The Web Chat channel isn't supported for this integration, so keep it disabled.

### Phase 5: Proactive Notifications Setup

Enable the bot to send proactive notifications to users, which is essential for AI-driven interactions.

**Create App Registration for Notifications**

1. In the Azure Portal, navigate to **App registrations** and select **+ New registration**.
2. Register New Application:
    * **Name**: Provide a descriptive name (for example, Platform-Microsoft Teams-Notifications).
    * **Supported account types**: Choose based on organizational requirements.
    * **Redirect URI**: Leave blank for this use case.
3. Select **Register.**

<img src="../images/teams_4.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

**Add Microsoft Graph Permissions**

1. In the app registration, navigate to **API permissions** and select **Add a permission**.
<img src="../images/teams_5.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

2. Select **Microsoft Graph** → **Application permissions.**

    **Required Permissions**: Add the following permissions for full functionality:

    * `MS TeamsAppInstallation.ReadForUser.All`
    * `MS TeamsAppInstallation.ReadWriteSelfForUser.All`
    * `MS TeamsAppInstallation.ReadWriteForUser.All`
    * `User.Read.All`
    * `AppCatalog.Read.All`
  
3.  Grant **Admin Consent.**
4.  Generate a **Client Secret** and note down **App ID**, **Directory (Tenant) ID**
5.  Configure these values in AI for Work under **Microsoft Teams & Copilot Channel Settings**.
6.  Generate a **JWT token** for secure communication.


### Phase 6: Configure AI for Work Platform

Provide Azure Bot credentials to the Platform to establish secure communication.

**Access Platform Configuration:**

1. Navigate to the Admin Console.
2. Locate **Channels** on the left pane.
3. Select **Microsoft Teams and Copilot**.
4. Feed the following credentials under the **Configuration**:
     * **Microsoft App Tenant ID**: (SingleTenant only) The tenant ID from the bot's app registration.
    * **Microsoft App ID**: The App ID from your Azure Bot resource.
    * **App Password**: The client secret from the bot's app registration.
    <img src="../images/teams_6.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

    * **App ID of the Microsoft Teams App**:  The additional app credentials for sending the Proactive Notifications.
    * **Application (Client) ID**: From the notifications app registration.
    * **Client Secret**: From the notifications app registration.
    * **Delivery (Tenant) ID**: From the notifications app registration.
    <img src="../images/teams_7.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

**Customization Options**

By default, the Microsoft Teams app appears with the name **AI for Work**, the standard logo, and the default description. Administrators can customize the application before publishing to Microsoft Teams:

* **App Name** – Choose a custom display name for Microsoft Teams.
* **Logo** – Upload an organization-specific logo.
* **Description** – Provide a tailored description that reflects organizational context.

**Copilot Enablement**

During configuration, you are prompted to **Enable Copilot Integration**. We recommended you to enable this option so that Teams users can access the Platform features using Copilot.


### Phase 7: Microsoft Teams Application Deployment

Deploy the the Platform app to Microsoft Teams for user access.

**Generate Application Manifest**

**Download Manifest**: Upon configuring credentials in the Platform, generate and download the Microsoft Teams application manifest file. This manifest file contains all the necessary configurations for integrating with Microsoft Teams.

<img src="../images/teams_8.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

**Upload to Microsoft Teams Admin Center**

**Prerequisites Verification**: Ensure you have **Upload Custom App** permissions in the Microsoft Teams Admin Center. Verify organizational policies allow custom app installations.

1. Sign in to[ Microsoft Teams Admin Center](https://admin.teams.microsoft.com/)<span style="text-decoration:underline;">.</span>
2. Navigate to **Microsoft Teams apps** → **Manage apps.**
3. Click **Upload new app**.
<img src="../images/teams_9.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

1. Select the downloaded manifest file from the Platform.
2. Wait for upload and validation to complete.

**Configure App Permissions and Policies**

**App Approval**: Review the uploaded application details and configure app permission policies as needed. Set up app setup policies for automatic installation (optional).

After uploading, configure app permission and setup policies.

### Phase 8: User Access Configuration Options in AI for Work

You can decide how to distribute the Platform app in Microsoft Teams:

* **Add App for All Users** (Recommended)

    * Automatically adds the Platform app for all employees in the organization.
    * All users receive a notification in Microsoft Teams and a **welcome message** when the app is added.

!!!note

    Users must also be provisioned in the **Account Hub** of the Platform to access the app.

* **Let Users Add App Themselves**

    * The is available in the Microsoft Teams App Marketplace.
    * Users need to **search for the app** in Microsoft Teams and add it manually.
    * No automatic notifications or installations occur. 

!!!note

    Users must be present in the **Account Hub** to use the app.

* **Add App for Selected Users or User Groups**

    * Assigns the app only to specific users or security groups.
    * Selected users are automatically notified in Microsoft Teams and receive the welcome message.
    * Other users must find and install the app manually from the Marketplace. 

!!!note

    Selected users must also exist in the **Account Hub** for access.  
    
## Troubleshooting Guide

**Bot Not Responding in Microsoft Teams**

* Verify the webhook URL is correctly configured in Azure Bot.
* Check that the Microsoft Teams channel is enabled and saved.
* Validate client secrets haven't expired.

**Authentication Failures**

* Confirm all required API permissions are granted with admin consent.
* Verify client secrets are copied correctly (Value, not Secret ID).
* Check tenant ID matches between configurations.

**Manifest Upload Failures**

* Ensure you have proper permissions in the Microsoft Teams Admin Center.
* Verify the manifest file is not corrupted during download.
* Check organizational policies to allow custom app uploads.

**Proactive Notifications Not Working**

* Verify all required Microsoft Graph permissions are granted.
* Verify that the notification app registration client secret is valid.
* Ensure JWT token generation is working correctly.


This integration enables seamless access to the Platform capabilities within Microsoft Teams, providing users with powerful AI assistance without leaving their collaborative environment. The bot-based architecture ensures secure, scalable communication while maintaining compliance with organizational security policies.

Regular maintenance of credentials and permissions, along with proper monitoring, ensures continued reliable operation of the integration.
