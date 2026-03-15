# SDK Configuration

To enable your Platform bots to communicate between your application servers and the Platform servers, you need to create and register an app in the Platform App Builder that specifies the callback URL for your application and generates the **Client ID** and the **Client Secret** authentication tokens required for secure communications between your application and any Bots in your developer account.

This topic describes how to create an app and generate registration credentials when using the Platform SDK.

To access webhooks and messages in Dialog tasks, you need to subscribe to an app for your bots. All messages from the bots and user are sent to the SDK as message events. When a Webhook node is defined in a Dialog task, the Webhook event is sent to the SDK at runtime. You must install, host, and configure the Platform SDK in your network to allow communications between the bots event messages and webhooks, and your application.

## To create an app

1. Navigate to **Settings > Dev Tools > BotKit**.

    <img src="../images/sdk-config-img1-app-kit-page.png" alt="BotKit page" title="BotKit page" style="border:1px solid gray;zoom:70%;">

2. On the BotKit page, click the **Add** button next to the **JWT App** drop-down list. The **Create JWT App** dialog opens.
    1. In the **JWT App** field, enter the name of the app registration, for example, TestApp.
    2. From the **JWT Signing Algorithms Used For Client App Authentication** dropdown, select a signing algorithm (preferably **HS256** or **HS512**) and then click **Next**.
    
    <img src="../images/sdk-config-img2-create-jwt-app.png" alt="Create JWT App" title="Create JWT App" style="border:1px solid gray;zoom:70%;">

3. The **App Created Successfully** message appears along with the **Client ID** and the **Client Secret**. Click **Done.**

    <img src="../images/sdk-config-img3-jwt-app-client-id-secret.png" alt="Client ID and Client Secret" title="Client ID and Client Secret" style="border:1px solid gray;zoom:70%;">

4. The following fields appear:
   
    1. The names of **App** and **VA**.
    2. The **Client ID** and **Client Secret**.
    3. The **Callback URL** field. Enter the URL for the application to which you want the Platform to push data. For example, `https://koremessenger.com/postURL`.
    4. The **Events** section. Select one or more of:
        1. **OnMessage** – Triggers an event when a message from a user is received.
        2. **OnHookNode** – Triggers an event when a WebHook node is encountered in the Dialog task flow.
        3. **onEvent** – Triggers an event every time a Dialog or FAQ is finished.
        4. **onAlert** – Triggers an event when the user receives an alert message.
        5. **onVariableUpdate** – Triggers an event when the bots is published

    <img src="../images/sdk-config-img4-jwt-app-fields.png" alt="App details" title="App details" style="border:1px solid gray;zoom:70%;">

5. Click **Save**.

The new app registration, along with details, is displayed in the **BotKit** section when you select the app name from the **JWT App** dropdown.
