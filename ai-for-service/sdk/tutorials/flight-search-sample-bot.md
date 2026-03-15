# BotKit SDK Tutorial – Flight Search Sample Bot

This tutorial is an end-to-end walkthrough for setting up and running an instance of the Kore.ai BotKit SDK, which is a collection of libraries that you can use for more control of the messages and webhook events in Kore.ai assistants for your web service. For this tutorial, you will use the sample Flight Search Assistant that you can install, generate authentication tokens, and then test using _ngrok_ as a test callback server.

## Prerequisites

To complete this tutorial, you will have to setup and configure the following prerequisites:

* **Install and run ngrok** as your test callback server. The test callback server application, _ngrok_, is used to simulate your callback server application.
* **Install _node.js_ on your computer** (version 10 or above) – The BotKit SDK requires _node.js_ to communicate between your server and the Kore.ai XO Platform.

### Installing and running _ngrok_

To download the test callback server application, click [https://ngrok.com/download](https://ngrok.com/download), and then download and install the _ngrok_ file for your operating system.

In a **Terminal** Window, start _ngrok_ to monitor port 8003 using the following command:

```
ngrok http 8003
```
![alt_text](images/ngrok-status.png "ngrok status")


Copy the https **Forwarding URL** as shown in the previous illustration, for example, `https://1b47f1d2.ngrok.io`. Leave the terminal window open and _ngrok_ running.


### Installing node.js

The BotKit SDK requires _node.js_ (version 10 or above) to run on the same server where the SDK is installed. Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/), and then select your OS as a .pkg file type for Mac, and .msi file type for Windows.

In a **Terminal** window, run the `node -v` command to verify installation and version, for example, `v6.10.2`as shown in the following illustration.

![alt_text](images/nodejs-status.png "nodejs status")


## Installing and Configuring Your Assistant

With the prerequisites installed and running, you are ready to install the _Flight Search Sample_ assistant. In this section, you will:

* Install the _Flight Search _assistant
* Create an App Registration
* Generate Security Credentials
* Install and Configure the BotKit SDK – config.json and FindAFlight.js files


### Installing the Flight Search Assistant

Kore.ai provides ready-to-use sample assistants that you can install into your instance of XO Platform. For this tutorial, you will need to install the _Flight Search _Assistant.

**To install the Flight Search assistant:**

1. Log on to XO Platform, and then click **New Bot > Start from the Store**.
2. Find the **Flight Search** assistant and install it.

### Registering Your App and Generating Client Credentials

To register your BotKit SDK with the Kore.ai XO Platform, you will need to create an app registration, and then generate security credentials used to securely communicate between the SDK installed on your server platform and the Kore.ai XO Platform.

**Creating an App Registration**


1. In the XO Platform, go to **Deploy > Integrations > BotKit**.
2. Next to the **App name **drop-down list, click **Add**.
3. Enter a name for the app and then click **Next**.
4. The Client ID and Client Secret details appear. Click **Done**.
5. In the **Callback URL** field, enter the URL for your application that you copied from the **Forwarding URL** from the _ngrok_ application that you installed and ran as part of the prerequisites, for example,  `https://1b47f1d2.ngrok.io`.
!!!note
  Each running instance of ngrok will generate a session unique URL. You will need to update the Callback URL field if you stop and restart ngrok._**
6. In the **Events** section, select **OnHookNode** – An event is triggered when a [Webhook node](../../automation/use-cases/dialogs/node-types/working-with-the-web-hook-node.md) is encountered in the dialog task flow.
7. Click **Save**. The _Successfully subscribed_ message is displayed.

To configure the BotKit SDK settings, you will need to:

* Copy the **Client ID**, for example, `cs-6e5eb411-e592-50d9-9ba2-ccc748d4f719`.
* View, and then copy the **Client Secret**, for example, `dTTmuTOgs8SOCwF/tFizouE0EPy28fXojOJWedOEF6s=`.

## Publishing the Assistant

A developer can use any installed assistant immediately for testing as it is available to the owner on save. If you only want to run and test this assistant for this tutorial, you can skip to the next section, _Installing and Configuring the BotKit SDK_.

To enable the assistant for other users, you must publish it so the Admin can approve and deploy the assistant for users. For more information, see [Publishing Your Assistant](../../deploy/publishing-bot.md).

After you publish an assistant in the XO Platform, an Admin must complete one of the following deployments in the Admin Console depending on whether your assistant’s **Target Audience** is set to **Enterprise Users** (managed users) or **General Public** (unmanaged users):

* **For Enterprise Users**
    1. In the Admin Console, in the **Bots Management** module, on the **Enterprise Bots** page, click the **Ellipses** icon for the _Agent Transfer_ bot that you want to deploy, and then click **Manage bot tasks**. The **Manage Bot Tasks** dialog is displayed.
    2. Expand the **Bot Tasks** field to view the available and deployed tasks.
    3. Select all tasks of the bot and then click **Confirm**.
    4. In the **Manage bot tasks** dialog, click **Confirm**. The _Bot status changed successfully_ message is displayed.
    5. On the **Enterprise Bots** page, click the **Ellipses** icon for the _Flight Search assistant_that you want to assign enterprise users to, and then click **Bot & task assignments**. The **Bot & task assignments** dialog is displayed.
    6. Assign the assistant to the selected users in the enterprise.
* **For General Public Users**
    1. In the Admin Console, in the **Bots Management** module, on the **Consumer Bots** page, click the **Ellipses** icon for the _Agent Transfer_ bot that you want to deploy, and then click **Manage bot tasks**. The **Manage Bot Tasks** dialog is displayed.
    2. Expand the **Bot Tasks** field to view the available and deployed tasks.
    3. Select all tasks of the assistant and then click **Confirm**. The _Bot status changed successfully_ message is displayed.

### Installing and Configuring the BotKit SDK

You will need to download and then decompress the Kore.ai BotKit SDK from [https://github.com/Koredotcom/BotKit](https://github.com/Koredotcom/BotKit). Be sure to download the latest version that contains the LiveChat.js files.

### Editing config.json

In your BotKit SDK folder, you will need to edit the config.json file that contains the connection information to your callback server. For this tutorial, you are using _ngrok_, along with the security credentials generated when you created the app registration for the _Flight Search _assistant, and adding a new line to config.json file that contains the license key for your _LiveChat_ agent application.

Modify the default config.json file for the following parameters as follows:

* `url` – Add this parameter with the **Forwarding URL** field from _ngrok_
* `apikey` – Update parameter using **Client Secret**
* `appId` – Update parameter using **Client ID**

```json
{
"server": {
    "port": 8003
    },
"app": {
    "apiPrefix" : "",
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
"examples" : {
    "mockServicesHost" : "https://localhost:8004"
    }
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
  }
}
```

### FindAFlight.js

The [FindAFlight.js](https://github.com/Koredotcom/BotKit/blob/master/FindAFlight.js) file in the BotKit SDK contains the JavaScript that handles the webhook call for flight information. For this tutorial, you will configure the webhook settings with the following information:

In the XO Platform, select the _Flight Search_ assistant, and then on the **Settings -> Config Settings** section, select the **General Settings** section. The **General Settings** page is displayed. Copy the:

* **Bot Name** – The name of the assistant on the XO Platform, for example, _Flight Search Sample Tutorial_.
* **Bot ID** – The XO Platform system has a unique ID for the assistant, for example, _st-26cfae3a-XXXX-XXXX-991a-376b7fe579d5_.

In the [FindAFlight.js](https://github.com/Koredotcom/BotKit/blob/master/FindAFlight.js) file, update and save the following case-sensitive variables with the settings from your assistant’s instance:

`var botId` = “&lt; **_Bot ID_** >”;

`var botName` = “&lt; **_Bot Name >_**“;

For example:


```javascript
var botId = "st-26cfae3a-XXXX-XXXX-991a-376b7fe579d5";
var botName = "Flight Search Sample Tutorial";
```

## Starting the BotKit SDK Application

To start using the _Flight Search_ assistant using the BotKit SDK, _node.js_ must be installed and _ngrok_ running listening on port 8003.

**To start BotKit SDK**

In a **Terminal** window, navigate to your BotKit SDK folder, and then enter the following command:


```
node app.js
```

When _node.js_ is running, you should get the following response:

```
app listening at https://:::8003
```

## Testing the BotKit SDK Bot

To test your assistant, you need the following:

* _ngrok_ running – Command = `ngrok http 8003`
* _node.js_ running – Command = `node app.js`
* XO Platform – Start _Talk to Bot_ by clicking the following icon on the bottom right corner of any XO Platform page:

After the Flight Search Sample dialog is started, messages are exchanged between the third-party webhook as a web service and the BotKit SDK.

## Next Steps

To use the Kore.ai assistant in your application, you would need to configure the BotKit SDK and register your application with **CallBack URL** to point to your company application server instead of _ngrok_. And of course, to share the assistant with other users, the Enterprise Admin for your company would need to approve and deploy the assistant to those users after you publish.