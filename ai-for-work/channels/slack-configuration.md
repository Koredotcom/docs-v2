# Slack Integration - Configuration

This document provides detailed step-by-step instructions to integrate AI for Work platform with Slack. Follow these steps sequentially to ensure proper deployment and functionality.


## Step 1: Configure App Display Settings

Define how your app appears to users in Slack.

1. Log in to the **Admin Console**.
2. Navigate to **Channels** → **Slack**.
<img src="../images/slack-1.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

3. Open the **Configuration** page.

**Customize App Name**: Enter a name that users will see when they interact with the app in Slack. Choose a name that clearly identifies the app's purpose within your organization.

**Customize App Description**: Provide a description that explains what users can do with the app. This description appears in the app's About section within Slack.

<img src="../images/slack-2.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

!!! note
    * You can modify these values to match your organization's terminology and branding.
    * If you change the app name or description after deployment, you must generate a new manifest and update your Slack app configuration in the Developer Portal.

## Step 2: Generate App Manifest

Create the Slack app manifest that contains all necessary configuration details.

1. In the **Configuration** page, click **Get Manifest**.
2. The platform generates a manifest code containing your app configuration.
3. Copy the entire manifest code to your clipboard.
<img src="../images/slack-3.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;"> 

The manifest includes all the permissions, features, and settings required for the Slack app to function properly.

## Step 3: Create an App in Slack Developer Portal

Use the generated manifest to create your Slack application.

**Access Slack Developer Portal**

1. Navigate to the[ Slack Developer Portal](https://api.slack.com/apps/).
2. Sign in with your Slack workspace credentials.
3. Click **Your Apps** to view existing applications.
<img src="../images/slack-4.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

**Create New App**

1. Click **Create New App** (or **Create an App** if this is your first application).
2. In the app creation dialog, select **From a manifest**.
3. From the **Slack Workspace** dropdown, select the workspace where you want to deploy the app.
<img src="../images/slack-5.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

**Paste Manifest**

1. In the manifest input field, paste the manifest code you copied from the Platform.
2. Click **Next** to proceed.
3. Review the app configuration and permissions that appear on the screen.
4. Click **Create** to finalize app creation.

Your Slack app is now created and ready for credential configuration.

## Step 4: Configure App Credentials

Copy the app credentials from Slack Developer Portal and provide them to the platform.

**Retrieve Credentials from Slack**

1. In the Slack Developer Portal, the created app opens automatically.
2. Navigate to **Basic Information** in the left sidebar.
3. Scroll to the **App Credentials** section.
4. Copy the following values:
    * **Client ID**.
    * **Client Secret**.
    * **Signing Secret**.
    
    <img src="../images/slack-6.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

**Configure Credentials in AI for Work**

1. Return to the Admin Console.
2. In the **App Credentials** page, paste the copied values:
    * **Client ID**. Paste the Client ID from Slack.
    * **Client Secret**. Paste the Client Secret from Slack.
    * **Signing Secret**. Paste the Signing Secret from Slack.
3. Click **Authorize**.
<img src="../images/slack-7.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

**Authorization Process**

When you click **Authorize**, Slack displays a permission request page asking you to authorize the Platform to access your workspace.

1. Review the requested permissions.
2. Click **Allow** to authorize the connection.

Upon successful authorization, you receive a confirmation message, and the system immediately deploys the app to your Slack workspace. The app becomes visible to all users in the workspace who have onboarded to the Platform.

## Step 5: Customize Welcome Experience

Configure the introduction message and sample prompts that users see when they first interact with the app.

**Access Welcome Experience Configuration**


1. In the Admin Console, navigate to the **Welcome Experience** page.
2. This page displays the default welcome message and sample prompts.
<img src="../images/slack-8.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

**Configure Welcome Message**: Edit the welcome message that greets users when they open the app. This message should introduce the app's capabilities and encourage users to start interacting.

**Configure Sample Prompts**: Add up to four sample prompts that users can click to quickly start a conversation. For each prompt, configure:

* **Display Message**. The text you show to users in Slack (what they see as the prompt button).
* **Actual Query**. The complete query you send to the Platform when users click the prompt.

**Save and Update**

1. After you customize the welcome experience, click **Save and Update**.
2. The system immediately reflects the updated welcome message and prompts in the Slack app for all users.

!!!note

    You can update the welcome experience at any time. Changes take effect immediately and apply to all users.

## Step 6: App Icon Customization (Optional)

While you configure the app name and description, you must upload the app icon directly to the Slack Developer Portal.

1. In the Slack Developer Portal, navigate to **Basic Information**.
2. Scroll to the **Display Information** section.
3. Click **Upload** next to the **App Icon**.
4. Select an image file that represents your organization.
5. Customize the **Background Color** if you desire.
6. Click **Save Changes**. 

<img src="../images/slack-9.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

## User Access Management

Only users who have onboarded can successfully interact with the Slack app. Before you deploy the Slack integration, ensure you complete the following for all intended users.

1. Invite users to the platform.
2. Successfully onboard users with appropriate access permissions.
3. Confirm users exist in both the platform and the target Slack workspace.

Users who are part of the Slack workspace but haven't onboarded to the platform will see the app in Slack. However, when they attempt to send a message, they receive the following error message stating that they dont have access to the Platform.


## Current Limitations 

**Single Workspace Deployment**

* You can only deploy apps to one Slack workspace (the workspace you select during app creation).
* Multi-workspace deployment requires you to create separate app instances for each workspace.

**Standalone App Only**

* The app functions exclusively as a direct messaging interface.
* Adding the app to channels isn't currently functional.
* Mentions in public or private channels wont trigger responses.

This integration enables seamless access to the Platform capabilities within Slack, providing users with powerful AI assistance without leaving their collaboration environment. The app-based architecture ensures secure communication while maintaining compliance with organizational security policies.
