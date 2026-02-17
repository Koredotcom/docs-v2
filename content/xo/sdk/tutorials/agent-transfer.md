
# BotKit SDK Tutorial – Agent Transfer

This tutorial is an end-to-end walkthrough for setting up and running an instance of the Kore.ai BotKit SDK which is a collection of libraries that you can use for more control of the messages and webhook events for Kore.ai assistants for your web service. For this tutorial, you will use the sample assistant called _Airlines Travel Planning_ that you can install as a new assistant, import a dialog task for agent transfer, generate authentication tokens, test the assistant using _ngrok_ as a test callback server, and access the agent transfer to a live agent using _LiveChat_.

!!!note
    This tutorial may require a newer version of BotSDK files. If the downloaded BotKit SDK files do not contain LiveChat.js and LiveChatAPI.js files, contact support.

## Prerequisites

To complete this tutorial, you will have to set up and configure the following prerequisites:

* **LiveChat account** – Subscribe to or set up a free 30-day trial. You will need the license number from the _LiveChat_ account to configure the BotKit SDK settings for this tutorial.
* **Install and run ngrok** as your test callback server. The test callback server application, _ngrok_, is used to simulate your callback server application.
* **Install _node.js_ on your computer** – The BotKit SDK requires _node.js_ (version 10 or above) to communicate between your server and the Kore.ai XO Platform.

To get your _LiveChat_ license code for your BotKit SDK configuration:

1. Log into your LiveChat account and click the **Settings** icon on the left navigation bar.
2. You will be taken to the _Website Channel Settings_ page and you will find the **License ID** right underneath the area that lets you _Install LiveChat Code Manually_, as illustrated below.
![alt_text](images/livechat-settings.png "LiveChat Settings")

!!!note
    Make sure url-template and node-schedule modules (and any other modules as referenced in js file related to LiveChat) are installed on your computer.

### Installing and running _ngrok_

To download the test callback server application, click [https://ngrok.com/download](https://ngrok.com/download), and then download and install the _ngrok_ file for your operating system.

In a **Terminal** Window, start _ngrok_ to monitor port 8003 using the following command:

```json
ngrok http 8003
```

![alt_text](images/ngrok-status.png "ngrok status")

Copy the https **Forwarding URL** as shown in the previous illustration, for example, `https://1b47f1d2.ngrok.io`. Leave the terminal window open and _ngrok_ running.

### Installing node.js

The BotKit SDK requires _node.js_ (version 10 or above) to run on the same server where the SDK is installed. Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/), and then select your OS as a .pkg file type for Mac and .msi file type for Windows.

In a **Terminal** window, run the `node -v` command to verify installation and version, for example, `v6.10.2`as shown in the following illustration.

![alt_text](images/nodejs-status.png "nodejs status")

## Installing and Configuring Your Assistant

With the prerequisites installed and running, you are ready to install the _Airlines Travel Planning_ assistant and then import the _Agent Transfer_ dialog task into it. In this section, you will:

1. Install the _Travel Planning_ assistant
2. Create a Dialog Task with an Agent Transfer node
3. Create an App Registration
4. Generate Security Credentials
5. Install and Configure the BotKit SDK – config.json, LiveChat.js, and LiveChatAPI.js files

### Installing the Airlines Travel Planning Assistant

Kore.ai provides ready to use sample assistants that you can install into your instance of XO Platform. For this tutorial, you will need to install the _Airlines Travel Planning_ assistant.

To install the Airlines Travel Planning assistant

1. Log on to XO Platform, and then click **New Bot > Start from the Store**.
2. Point to **Airlines Travel Planning**, and then click **Install**. The Airlines _Airlines Travel Planning_KORE NAME_Instance# The installed successful_ message is displayed and the sample assistant is added to the left-hand navigation menu.

Once the sample assistant is installed, create an **_Agent Transfer_** dialog task. Learn more about the [Dialog Builder](../../automation/use-cases/dialogs/using-the-dialog-builder-tool.md) and with the [Agent Transfer node](../../automation/use-cases/dialogs/node-types/working-with-the-agent-transfer-node.md).

### Registering Your App and Generating Client Credentials

To register your BotKit SDK with the Kore.ai XO Platform, you will need to create an app registration, and then generate security credentials used to securely communicate between the SDK installed on your server platform and the Kore.ai XO Platform.

**Creating an App Registration**

1. In the XO Platform, go to **Build > Integrations > BotKit**.
  !!!note:
    RS256 and RS512 JWT signing algorithms are not supported for Custom BotKit or Botkit.
2. Click the **Add** button next to the **App name** drop-down list.
3. Enter a name for the app and then click Next.
4. The Client ID and Client Secret details appear. Click **Done**.
5. In the **Callback URL** field, enter the URL for your application that you copied from the **Forwarding URL** from the _ngrok_ application that you installed and ran as part of the prerequisites, for example,  `https://1bXXXXd2.ngrok.io`.
  !!!note
    Each running instance of ngrok will generate a session unique URL. You need to update the Callback URL field if you stop and restart ngrok._**
6. In the **Events** section, select:
    * **OnMessage** – An event is triggered when a message from a user is received.
    * **OnAgentTransferNode** – An event is triggered when an Agent Transfer node is encountered in the dialog task flow.
7. Click **Create Credentials**. The new app registration along with client credentials are displayed in the **SDK Configuration** section.
8. Click **Save**. The _Successfully subscribed_ message is displayed.

To configure the BotKit SDK settings, you will need to:

* Copy the **Client ID**, for example, `cs-6e5eb411-XXXX-XXXX-9ba2-ccc748d4f719`.
* View, and then copy the **Client Secret**, for example, `dTTmuTOgs8SOXXXXXXXXouE0EPy28fXojOJWedOEF6s=`.

## Publishing the Assistant

A developer can use any installed assistant immediately for testing as it is available to the owner on save. If you only want to run and test this assistant for this tutorial, you can skip to the next section, _Installing and Configuring the BotKit SDK_.

To enable the assistant for other users, you must publish it so the Admin can approve and deploy the assistant for other users. For more information, see [Publishing an Assistant](../../deploy/publishing-bot.md).

After you publish an assistant in XO Platform, an Admin must complete one of the following deployments tasks in the Admin Console depending on whether your assistant’s **Target Audience** is set to **Enterprise Users** or the **General Public**.

* **For Enterprise Users:**
    1. In the Admin Console, in the **Bots Management** module, on the **Enterprise Bots** page, click the **Ellipses** icon for the _Agent Transfer_ assistant that you want to deploy, and then click **Manage bot tasks**. The **Manage Bot Tasks** dialog is displayed.
    2. Expand the _Bot Tasks_ field to view the available and deployed tasks.
    3. Select all tasks of the assistant and then click **Confirm**.
    4. In the **Manage bots tasks** dialog, click **Confirm**. The _Bot status changed successfully_ message is displayed.
    5. On the **Enterprise Bots** page, click the **Ellipses** icon for the _Agent Transfer_ bot that you want to assign enterprise users to, and then click **Bot & task assignments**. The **Bot & task assignments** dialog is displayed.
    6. Assign the assistant to the selected users in the enterprise.

* **For General Public Users:**
    1. In the Admin Console, in the **Bots Management** module, on the **Consumer Bots** page, click the **Ellipses** icon for the _Agent Transfer_ assistant that you want to deploy, and then click **Manage bot tasks**. The **Manage Bot Tasks** dialog is displayed.
    2. Expand the _Bot Tasks_ field to view the available and deployed tasks.
    3. Select all tasks of the bot and then click **Confirm**. The _Bot status changed successfully_ message is displayed.

### Installing and Configuring the BotKit SDK

You need to download and then decompress the BotKit SDK from [https://github.com/Koredotcom/BotKit](https://github.com/Koredotcom/BotKit). Be sure to download the latest version that contains the [LiveChat.js ](https://github.com/Koredotcom/BotKit/blob/master/LiveChat.js)files.

!!!note
    This tutorial may require a newer version of BotSDK files. If the downloaded BotKit SDK files do not contain LiveChat.js and LiveChatAPI.js files, contact Kore.ai Support.

**Edit _config.json_**

In your BotKit SDK folder, you will need to edit the config.json file that contains the connection information to your callback server. For this tutorial, you are using _ngrok_, along with the security credentials generated when you created the app registration for the _Airlines Travel Planning_ assistant, and adding a new line to config.json file that contains the license key for your _LiveChat_ agent application.

Modify the default config.json file for the following parameters as follows:

* `url` – Add this parameter with the **Forwarding URL** from _ngrok_
* `apikey` – Update parameter using **Client Secret**
* `appId` – Update parameter using **Client ID**
* `liveagentlicense` – Add this parameter with license key from LiveChat **Chat URL** as shown in the following example.

```json
{
  "server": {
    "port": 8003
  },
  "app": {
    "apiPrefix": "",
    "url": "< ngrok Forwarding URL >"
  },
  "credentials": {
    "apikey": "< Client Secret from XO Platform >",
    "appId": "< Client ID from XO Platform >"
  },
  "redis": {
    "options": {
      "host": "localhost",
      "port": 6379
    },
    "available": false
  },
  "examples": {
    "mockServicesHost": "https://localhost:8004"
  },
  "liveagentlicense": "< LiveChat License Key >"
}
```

The following code is an example of a fully defined sample config.json file:

```json
{
  "server": {
    "port": 8003
  },
  "app": {
    "apiPrefix": "",
    "url": "https://1b47f1d2.ngrok.io"
  },
  "credentials": {
    "apikey": "dTTmuTOgs8SOCwXXXXXXXXE0EPy28fXojOJWedOEF6s=",
    "appId": "cs-6e5eb411-XXXX-XXXX-9ba2-ccc748d4f719"
  },
  "redis": {
    "options": {
      "host": "localhost",
      "port": 6379
    },
    "available": false
  },
  "examples": {
    "mockServicesHost": "https://localhost:8004"
  },
  "liveagentlicense": "89XXX15"
}
```

#### LiveChat.js and LiveChatAPI.js

The[LiveChat.js](https://github.com/Koredotcom/BotKit/blob/master/LiveChat.js) and [LiveChatAPI.js](https://github.com/Koredotcom/BotKit/blob/master/LiveChatAPI.js) files in the BotKit SDK contain the JavaScript that controls the seamless transfer from the dialog task in the assistant to an agent application. For this tutorial, you will configure the dialog transfer using _LiveChat_ with the following information:

In XO Platform, select the _Airlines Travel Planning_ assistant, and then on the **Configurations** tab, click the **Expand** icon for the **General Settings** section. The **General Settings** section is displayed. Copy the:

* **Bot Name** – The name of the assistant on the XO Platform, for example, _Airlines Travel Planning_KORE ADMIN_10_.
* **Bot ID** – The XO Platform system has a unique ID for the assistant, for example, _st-26cfae3a-XXXX-XXXX-991a-376b7fe579d5_.

In both the LiveChat.js and LiveChatAPI.js, update and save the following case-sensitive variables with the settings from your assistant’s instance:

`var botId` = “&lt; **_Bot ID_** >”;

`var botName` = “&lt; **_Bot Name >_**“;

For example:

```javascript
var botId = "st-26cfae3a-XXXX-XXXX-991a-376b7fe579d5";
var botName = "Airlines Travel Planning_KORE ADMIN_10";
```

## Starting the BotKit SDK Application

To start using the _Airlines Travel Planning_ assistant with Agent Transfer using the BotKit SDK, _node.js_ must be installed and _ngrok_ running listening on port 8003.

**To start BotKit SDK**

In a **Terminal** window, navigate to your BotKit SDK folder, and then enter the following command:

```javascript
node app.js
```

When node.js is running, you should get the following response:

```json
app listening at https://:::8003
```

## Testing the BotKit SDK Bot

To test your assistant, you need the following:

* _ngrok_ running – Command = `ngrok http 8003`
* _node.js_ running – Command = `node app.js`
* _LiveChat_ – Logged in and web **Chat** page open
* XO Platform – Start _Talk to the Bot_ by clicking the following icon on the bottom right corner of any XO Platform page:

After the Agent Transfer dialog is started, messages are exchanged between _LiveChat_ and the BotKit SDK.

## Next Steps

To use the Kore.ai assistant in your application, you would need to configure the BotKit SDK and register your application with **CallBack URL** to point to your company application server instead of _ngrok_. And of course, to share the assistant with other users, the Enterprise Admin for your company would need to approve the assistant, and then deploy it to those users after you publish.