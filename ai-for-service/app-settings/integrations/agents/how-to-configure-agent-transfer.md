# Configuring Custom Agent Integration

The Kore.ai XO Platform offers a Custom Integration using the BotKit to configure agent transfer integrations for any system.



Custom Agent Transfer Integration refers to the process of integrating a custom-built agent (such as a AI Agent) into a larger system or workflow. This typically involves connecting the agent to external APIs or databases and configuring it to interact with other systems or users in a specific way. The custom integration allows the custom agent to seamlessly interact with other components of the system and to provide a more complete and efficient solution for the end user.

This post provides the configuration steps to enable the Custom Agent integration. Use the configurations provided below as general guidelines as there could be some differences based on the version of the Intercom that you are using.

The source code for the Agent Transfer is available at Kore.ai GitHub repo: [https://github.com/Koredotcom/BotKit](https://github.com/Koredotcom/BotKit){:target="_blank"}.


## Overview

Let’s understand how the custom agent can be integrated and how it can improve business processes by providing a more efficient and seamless user experience.


## Prerequisites

* A fully functional AI Agent (we will be using a Banking App).
* Download BotKit SDK from [Kore’s GitHub](https://github.com/Koredotcom/BotKit){:target="_blank"}.
* Download and Install the Node.js(version 10 or above). The BotKit SDK requires node.js to run on the same server where the SDK is installed.
    1. Go to `https://nodejs.org/en/download/` and select your OS as a .pkg file type for Mac and .msi file type for Windows.
    2. In a Terminal window, run the `node -v` command to verify installation and version, for example, v6.10.2.

* A test callback server application. We will be using NGROK from [https://dl.equinox.io/ngrok/ngrok/stable](https://dl.equinox.io/ngrok/ngrok/stable){:target="_blank"} to simulate the callback server application. Following are the steps to install NGROK:
    1. Open [https://dl.equinox.io/ngrok/ngrok/stable](https://dl.equinox.io/ngrok/ngrok/stable){:target="_blank"}.
    2. Download and install the ngrok file for your operating system.
        * To download NGROK on Windows:
            1. Download the zip file for your Windows machine 32-bit or 64-bit.
            2. Unzip and run the `ngrok.exe` file to install ngrok.
        
        * To download NGROK on mac:
            1. Press <code><em>Command+Space</em></code>, type <strong>Terminal</strong>, and press <strong>enter/return</strong> key.
            2. Run in Terminal app:
            
                <code>ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" &lt; /dev/null 2> /dev/null</code> and press <strong>enter/return</strong> key.

                If the screen prompts you to enter a password, enter your Mac’s user password to continue. When you type the password, it won’t be displayed on the screen, but the system would accept it. So just type your password and press ENTER/RETURN key. Then wait for the command to finish.
            3. Run <code>brew cask install ngrok</code>.

* A live agent software. We will be using [LiveChatInc.com](https://www.livechatinc.com/){:target="_blank"}. You can use your LiveChat subscription or set up a free 30-day trial account at LiveChatInc.com by entering your business email in the <strong>Start using LiveChat now! </strong>Sign up and create an account.


## Design and Configuration

1. As an App developer, open Kore.ai App Builder – [https://bots.kore.ai/botbuilder](https://bots.kore.ai/botbuilder){:target="_blank"}.
2. Select the App for which Agent Transfer needs to be configured.
3. Open or create a dialog task (_Support Call Back)_ and add an **Agent transfer** node.  

    <img src="../images/configure agent-transfer-img1-at-node.png" alt="Add Agent Transfer node" title="Add Agent Transfer node" style="border: 1px solid gray;zoom:50%;"/>

4. Enter a _Name (LiveChat)_ and _Description_ and **Save**.
5. You will see a message ‘_SDK is not currently configured/Subscribed. Please go to API Extensions to configure the SDK._’. For now ignore this message as we will see how to configure SDK later in this article.
6. From the App Builder screen, go to **App Settings > Integration > Agent Transfer > Custom (BotKit)**.
7. In the **App Name** section, select an existing app from the list or use the Create App option to create a new app.
    
    !!! Note
    
        The **App ID**, **Client ID** and **Client Secret** keys.  
        **RS256 and RS512** JWT signing algorithms are **not supported** for Custom BotKit or Botkit.

8. Enter the Callback URL of your application to be invoked by BotKIt SDK events. Since we are using NGROK we will show how to obtain the callback URL:
    1. In a **Terminal** Window, start _ngrok_ to monitor port 8003 using the following command: `ngrok http 8003`.
    2. Copy ngrok forwarding URL. It will be in the format – `https://XXXXXXaa.ngrok.io`.

        <img src="../images/configure agent-transfer-img2-ngrok.png" alt="NGROK" title="NGROK" style="border: 1px solid gray;zoom:50%;"/>

    3. Use this forwarding URL as the call-back URL and save.

        !!! Note
            
            The forwarding URL changes whenever the ngrok is restarted. Make sure you make the changes to the callback URL every time ngrok is restarted.

9. The agent transfer is configured at the dialog level. You can open the dialog task and open the agent transfer node to see that the configuration is saved, as shown below. You can select the Events required ([see below for details](#events)).

    <img src="../images/configure agent-transfer-img3-at-node-config.png" alt="agent transfer node configuration" title="agent transfer node configuration" style="border: 1px solid gray;zoom:50%;"/>

10. Install any live agent software e.g. Livechat, Liveperson, Concentrix, Vayusphere, etc., depending on your enterprise requirement and license availability. Since we are using LiveChat, we will should you how to obtain the license details needed for Agent Transfer:
    1. Sign in to your LiveChat account.
    2. Go to **Settings** from the left navigation and select the **chat link**.
    3. Copy the URL and note the **license code**. If the URL is `https://lc.chat/now/104xx297/` and then the license code is `104xx297`.

11. Open the downloaded **BotKit SDK folder** and do the following:
    1. Edit `livechatapi.js:`
        1. Give the respective appId and appName of your App, which you have copied earlier.
        2. This JS file contains 3 APIs of Kore – Initialization, Send Message and Get Message. If required, any new APIs written for human agent transfer should be put in here.

            Example: If connection closing is required, then close connection API written needs to go into livechatapi.js.

            <img src="../images/configure agent-transfer-img4-at-livechatapi.png" alt="Live chat" title="Live chat" style="border: 1px solid gray;zoom:50%;"/>

    2. Edit `config.json`.
        1. Client ID and Client Secret key, respective server ports running, and liveagent license of the third-party server goes here.
        2. Client Id, Client Secret can be copied from Events and Extensions – Agent Transfer.
        3. ngrok forwarding url can be copied from ngrok running instance. It is the call-back URL. This should be the URL entry.
        4. Liveagentlicense is the code given in the chatlink of livechat.
    
            <img src="../images/configure agent-transfer-img5-at-configjson.png" alt="config.json" title="config.json" style="border: 1px solid gray;zoom:50%;"/>

    3. Edit `LiveChat.js`.
        1. Give the respective appId and appName of your app, which you have copied earlier, and save.

            <img src="../images/configure agent-transfer-img6-at-livechat.png" alt="LiveChat.js" title="LiveChat.js" style="border: 1px solid gray;zoom:50%;"/>

    4. Edit app.js.
        8. Add the following line `sdk.registerBot(require('./LiveChat.js'))`.
        9. Delete any existing sdk.registerBot statements, if not needed.

            <img src="../images/configure agent-transfer-img7-at-appjs.png" alt="app.js" title="app.js" style="border: 1px solid gray;zoom:50%;"/>


## Execution

1. Open a terminal window and run the BotKit SDK by entering the command:
    `node app.js`.

2. Please make sure to install all the missing modules to run the server successfully without any errors as shown below.
    For example, if error “_method url-template, node-schedule are missing”_ is shown, then install the above modules using the command.
    `npm install &lt;module-name>` for windows and `sudo npm install &lt;module-name>` for mac.

3. ngrok and node.js server will be running in different terminals.
4. When a user initiates the chat from the app, the app transfers the call to an agent and sends a message to the user.

    <img src="../images/configure agent-transfer-img8-at-chat1.png" alt="chat initiation" title="chat initiation" style="border: 1px solid gray;zoom:50%;"/>

5. Agent receives a notification about this on the livechat.

    <img src="../images/configure agent-transfer-img9-at-chat2.png" alt="agent receives chat notification" title="agent receives chat notification" style="border: 1px solid gray;zoom:50%;"/>

6. Now, the connection between the agent and the user has been established, and the conversation continues.

    <img src="../images/configure agent-transfer-img10-at-chat3.png" alt="connection established and conversation continues" title="connection established and conversation continues" style="border: 1px solid gray;zoom:50%;"/>


## Events

!!! Note

    The events and methods required for sending messages from User, app, and transferring to Agent are outlined in LiveChat.JS.

1. _on_user_message_ event is triggered when a user sends a message. This message is sent to the app using the sendBotMessage method.
2. _on_bot_message_ is triggered when app sends a message. This message is sent to the user using the SendUserMessage method.
3. _on_agent_transfer_ event is triggered when the service agentTransfer node is triggered in app. This event connects to the agent using the connectToAgent method, which internally calls the initChat API.
4. _gethistory_ method gives the chat history of the user with the app to the transferred agent.
5. _scheduleJob_ is run for every 5 secs, and it polls for the pending messages from the Agent, which internally calls the getPendingMessages.
6. _getPendingMessages_ gets all the pending messages from Agent and delivers it to the User.
7. _chat_closed_ gets triggered when the agent closes the chat with the user.