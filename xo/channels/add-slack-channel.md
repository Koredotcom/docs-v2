--8<-- "includes/digital-channels-back-link.md"

# Adding the Slack Channel

To set up the Slack channel on the Platform and interact with an AI Agent using a Slack account, you must associate the AI Agent with a Slack app.

The Slack channel integration supports Direct Messaging (DM) and Channel (group) conversations via the Platform. When an AI Agent is added to a channel (group) within the Slack organization space, any member can start a group conversation using \@mentions to talk to a specific AI Agent.

The Platform offers native support for threaded conversations in the Slack channel. Users can initiate a new thread from any message within a Slack channel or direct message group and continue a conversation with the AI Agent. The Platform leverages Slack’s **Threads** to enable one-on-one conversations without losing the conversation context.

Additionally, the Platform allows developers to configure how the Slack channel integration should handle DM and group conversations. It can automatically create a new thread whenever a user \@mentions the  AI Agent in a Slack channel. This configuration flexibility gives developers control over the Threads feature.



!!! note

    To use Slack <b>Threads</b> for your AI Agent deployed on the Slack Channel, add the Bot token Scope <code>chat:write.public</code> to the existing Slack app under <b>OAuth & Permissions</b> > <b>Scopes</b> > <b>Bot Token Scopes</b>. [Learn more](#step-2-set-redirect-url-and-scopes)

**Prerequisites**

To enable this integration, you must already have a _Slack_ account and be a member of a _Slack_ organization space.

**Channel Setup Summary**

To set up Slack as a channel, the developer should associate the AI Agent with a Slack app, set up an app user, and enable interactive components for this app. The important steps include:

1. [Create an App on Slack](#step-1-create-an-app-on-slack).
2. [Set Redirect URL and Scopes](#step-2-set-redirect-url-and-scopes).
3. [Install the App](#step-3-install-the-app).
4. [Enable Interactivity](#step-4-enable-interactivity).
5. [Enable Events](#step-5-enable-events).
6. [Enable Interactions from the Message Tab](#step-6-enable-interactions-from-the-messages-tab).
7. [Configure App Credentials](#step-7-configure-app-credentials).
8. [Manage Distribution](#step-8-manage-distribution).
9. [Enable the Channel on the Platform](#step-9-enable-the-channel).

## Step 1: Create an App on Slack

1. In the Platform, select the assistant to which you want to add the Slack Channel.
2. Go to **Deploy** > **Channels** > **Slack**, and open the **Configuration** tab.
3. In a new browser tab, [Login](https://api.slack.com/) to the Slack developer portal and go to the **Your Apps** section [here](https://api.slack.com/apps). If this is your first app, click **Create an App**. If you already have some apps, then click **Create New App**.
<img src="../images/slack-create-app.png" alt="create an app" title="create an app" style="border: 1px solid gray; zoom:65%;">

4. You will now be asked to choose how you’d like to configure your app’s scopes and settings. Select **From Scratch**.
5. On the **Create a Slack App** window, enter the **App Name** and select a team from the Development Slack Team drop-down list. Use your assistant’s name as the App Name.
<img src="../images/create-a-slack-app.png" alt="create a slack app" title="create a slack app" style="border: 1px solid gray; zoom:65%;"> 

6. After you enter the required information, click **Create App**. Slack will now create a new app and you are redirected to the **Basic Information** section of the new app.

## Step 2: Set Redirect URL and Scopes

1. Click **OAuth & Permissions** on the left menu and click **Add New Redirect URL** on the resulting page.
2. On the Platform, copy the Redirect URL provided in the **Configurations** section of the Slack channel window and paste it in the **Redirect URLs** field of the **OAuth Tokens & Redirect URLs** page.
3. Click **Add**, and then click **Save URLs**.
<img src="../images/set-redirect-url-and-scopes.png" alt="set redirect url" title="set redirect url" style="border: 1px solid gray; zoom:65%;"> 
 
4. Proceed to **Scopes** > **Bot Token Scopes** section.
5. Add <code><em>incoming-webhook</em></code>, <code><em>chat:write</em></code>, and <code><em>chat:write.public</em></code> scopes.
6. If you would like your users to send attachments to your app, then select the <em><code>files:write</em></code> scope.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>To allow users to send attachments to the AI Agent, select the <code>files:write</code> scope.</li>
<li>To send Proactive Notifications to users on Slack, select the <code>users:read</code>, <code>users:read.email</code>, and <code>team:read</code> scopes.</li></ul></p>
</div>

<img src="../images/bot-token-scopes.png" alt="bot token scopes" title="bot token scopes" style="border: 1px solid gray; zoom:65%;">

## Step 3: Install the App

1. Navigate to **OAuth & Permissions** > **OAuth Tokens & Redirect URLs**, and click **Install App to Workspace**. Choose the required Workspace and complete the process.
<img src="../images/install-app-to-workspace.png" alt="install app to workspace" title="install app to workspace" style="border: 1px solid gray; zoom:65%;">

2. _(Optional)_ To send Proactive Notifications to your users on Slack, copy the **Bot User OAuth Token** from the **OAuth Tokens for Your Team** section and provide it in the Slack Channel **Configurations** section on the Platform.
<img src="../images/oauth-tokens-for-workspace.png" alt="oauth tokens for workspace" title="oauth tokens for workspace" style="border: 1px solid gray; zoom:65%;">

## Step 4: Enable Interactivity

1. Navigate to **Interactivity & Shortcuts** and enable **Interactivity**.
2. On the Platform, copy the **Webhook URL** from the Slack channel’s **Configurations** tab and enter it in the **Request URL** field on Slack.

    <div class="admonition warning">
    <p class="admonition-title">Important</p>
    <p>The Webhook URL now includes the <b><i>streamid</i></b> in the API request to identify the  AI Agent being accessed. When an incoming request is qualified with this identifier, it helps with traceability, troubleshooting, and remediation at the network level during anomalies like malicious calls or unusual app activity.</p>
    </div>

<ol start="3"><li>Click <b>Save Changes</b>.</li>

<img src="../images/interactivity-and-shortcuts.png" alt="interactivity and shortcuts" title="interactivity and shortcuts" style="border: 1px solid gray; zoom:65%;"></ol>

## Step 5: Enable Events

1. Navigate to **Event Subscriptions** and activate the **Enable Events** option.
2. On the Platform, copy the _Webhook URL_ from the Slack channel’s _Configurations_ section and paste it in the **Request URL** field in the **Enable Subscriptions** section.
3. In the **Subscribe to Bot Events** section, add <code><em>app_mention</em></code>, and <code><em>message.im</em></code> events.
4. Click <strong>Save Changes</strong>.

<img src="../images/events-and-subscriptions.png" alt="events subscriptions" title="events subscriptions" style="border: 1px solid gray; zoom:65%;">

## Step 6: Enable Interactions from the Messages tab

1. Navigate to the **App Home** section and under **Show tabs**. enable the **Messages Tab**.
2. Enable **Allow users to send Slash commands and messages from the messages tab**. This allows users to directly interact with the app from the **Messages** section.
<img src="../images/enable-interactions.png" alt="enable interactions" title="enable interactions" style="border: 1px solid gray; zoom:65%;">

## Step 7: Configure App Credentials

1. Navigate to **Basic Information** and scroll down to the **App Credentials** section.
2. Copy the values for **Client ID**, **Client Secret**, and **Verification Token** fields and provide them in the **Configurations** section of the Slack Channel on the Platform.
<img src="../images/app-credentials-configuration.png" alt="app credentials configuration" title="app credentials configuration" style="border: 1px solid gray; zoom:65%;">

## Step 8: Manage Distribution

To enable the public distribution of your app on Slack, do the following:

1. Navigate to **Manage Distribution** and click **Remove Hard Coded Information**.
2. Select **I’ve reviewed and removed any hard-coded information** and click **Activate Public Distribution.**.

  <img src="../images/manage-distribution.png" alt="manage distribution" title="manage distribution" style="border: 1px solid gray; zoom:65%;">

## Step 9: Enable the Channel

To enable Slack on the Platform, follow the steps below:

1. Navigate to **Channels** > **Slack**, and click the **Configurations** tab.
2. Copy the below information and use it to define the app properties on Slack:

<ul><li>App Name</li>
<li>Redirect URL</li>
<li>Webhook URL</li>

<img src="../images/slack-configurations-uxo.png" alt="slack configuration" title="slack configuration" style="border: 1px solid gray; zoom:65%;"></ul>

<ol start="3"><li>Copy and paste the following information from the Slack app:</li></ol>

<ul><li>Client ID</li>
<li>Client Secret</li>
<li>Verification Token</li></ul>

<ol start="4"><li>Click <b>Authorize</b>.</li>

<img src="../images/authorize-client-id-client-secret.png" alt="authorize client credentials" title="authorize client credentials" style="border: 1px solid gray; zoom:65%;"></ol>

<ol start="5"><li>In the <b>Customize Slack Channel’s Conversations</b> section, select one of the following options to define the conversation behavior of the AI Agent in a Slack channel when the user \@mentions the AI Agent:</li>
<ul><li><b>Continue the conversation with the  AI Agent in the channel</b>: This is the default selection. It maintains the current behavior for DM and group messages. However, if a user intentionally starts a thread with the  AI Agent, the conversation will continue within that thread.</li>
<li><b>Create a new thread for every user message(\@mentioned to the AI Agent) in the channel</b>: For every user message that is \@mentioned to the AI Agent in the channel (both DM and Channel conversations), the Platform does the following:</li>
    <ul><li>Creates a new thread and replies to the user message in the thread.</li>
    <li>Treats each conversation thread as a separate session whenever it is created in the channel, maintaining context isolation.</li>
    <li>Treats each conversation thread as a new user conversation whenever it is created for Slack DM.</li></ul>

<img src="../images/customize-slack-conversations.png" alt="customize slack conversation" title="customize slack conversation" style="border: 1px solid gray; zoom:65%;"></ul>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>All the consecutive interactions between the user and the AI Agent happen in the same thread irrespective of the option you select.</li>
<li>The existing apps default to the first option, ensuring zero disruptions to current deployments.</li></ul></p>
</div>

<li>(Optional) Enable <b>Proactive Notifications</b> to send notifications from your Process Apps to your AI Agent users via Slack. Please refer to Step 3.

<img src="../images/proactive-notifications.png" alt="proactive notifications" title="proactive notifications" style="border: 1px solid gray; zoom:65%;"></li>
 
Once enabled, select the required Process Apps from the list for your AI Agent, and click <b>Authorize</b>.</ol>

<ol start="7"><li>Under <b>Enable Channel</b>, select <b>Yes</b> and click <b>Save</b> to enable the Slack channel.
<img src="../images/enable-slack-channel.png" alt="enable slack channel" title="enable slack channel" style="border: 1px solid gray; zoom:65%;"></li></ol>

The Slack channel is added successfully. In Slack, it is optional to submit your app to the Slack App Directory.

After the channel is enabled and all configurations are verified, you can optionally publish the assistant to make it available for end-users, with the new channel. [Learn more](../deploy/publishing-bot.md).


