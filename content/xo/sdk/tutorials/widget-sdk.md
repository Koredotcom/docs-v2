# Kore.ai Widget SDK Tutorial

This tutorial is an end-to-end walkthrough for setting up and running an instance of the Kore.ai Bots Web SDK to host widgets for presenting information from your bots and enabling interaction with your bots.

## Widget SDK Overview

There are two ways to host the Kore.ai Widget SDK:

* co-host them along with the WebSDK – enable and configure both Web/Mobile Client and Widget SDK channels; or
* independently – enable and configure just the Widget SDK channel.

In this tutorial, we will be listing the instructions for both variations.

## Installing and Running the Kore.ai Widget SDK

This section provides detailed steps on how to run a Kore.ai bot using the Widget SDK and a test application running on your computer's localhost server.

### Pre-requisites

1. To get started, you will need to build a bot with Digital Views to run in the test application [see here for more on Digital Views](../../automation/use-cases/digital-skills/digital-views.md).
2. You need enable the Widget SDK channel for the above bot by either creating a new client app or use an existing client app and define the channel settings. [See here](../../channels/add-widget-sdk-channel.md) for a detailed explanation of the steps.
3. If you want to co-host the Panels & Widgets along with the WebSDK, you need enable the Web/Mobile Client channel for the above bot by either creating a new client app or use an existing client app and define the channel settings. [See here](../tutorials/web-sdk.md) for a detailed explanation of the steps.
4. Publish the bot.
5. From the **Channels -> Configured Channels**, click to open the configured **Widget SDK** channel. From the Configurations tab make a note of the following, we will be using them later in the Widget SDK setup:
    1. Bot Name
    2. Bot ID
    3. Client ID
    4. Client Secret
6. If you want to co-host Panels & Widgets with Web/Mobile SDK, then from the **Channels -> Configured Channels** click to open the configured **Web/Mobile Client** channel. From the Configurations tab make a note of the following, we will be using them later in the Widget SDK setup:
    5. Bot Name
    6. Bot ID
    7. Client ID
    8. Client Secret

Next step would be to download, decompress, install and configure the software packages required for the Widget SDK and a test application to run the bot locally on your localhost server.

Based upon your requirement see the appropriate sections below:

* host Panels individually; or
* co-host Panels with Web SDK.

**Setup to host Panels individually**:

To download the Kore.ai Widget SDK, go to [https://github.com/Koredotcom/web-kore-sdk](https://github.com/Koredotcom/web-kore-sdk), and then click **Download**. Extract all files to the _…/SDKApp/sdk_ folder.

1. Open the _UI_ folder.
2. Locate and open the `kore-widgets-config.js`
3. Configure your `botOptions` with the ‘_Widget SDK_’ channel configurations created in bot builder:
    1. `botOptions.botInfo`
    2. `botOptions.clientId`
    3. `botOptions.clientSecret`
4. Open the `index_widgets.html` file in the browser and see the Panels displayed. You can add this `&lt;div>` element to your website html page to host the Panels there.

**Setup to co-host Panels with Web/Mobile SDK**:

To download the Kore.ai Widget SDK, go to [https://github.com/Koredotcom/web-kore-sdk](https://github.com/Koredotcom/web-kore-sdk), and then click **Download**. Extract all files to the _…/SDKApp/sdk_ folder.

1. Open _UI_ folder.
2. Locate and open the `kore-config.js`
3. Configure your `botOptions` with the ‘_web/mobile client_’ channel configurations created in bot builder
    1. `botOptions.botInfo`
    2. `botOptions.clientId`
    3. `botOptions.clientSecret`
4. Open the `kore-widgets-config.js`
5. Configure your `botOptions` with the ‘_Widget SDK_’ channel configurations created in bot builder
    4. `botOptions.botInfo`
    5. `botOptions.clientId`
    6. `botOptions.clientSecret`
6. Open the `index_widgets_chat.html` file in the browser and see the chat window along with the widgets.