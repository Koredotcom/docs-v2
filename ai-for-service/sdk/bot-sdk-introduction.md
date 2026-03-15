# Bot SDKs

Kore.ai offers Bots SDKs as a set of platform-specific client libraries that provide a quick and convenient way to get the Platform capability into custom applications and provide you with more control over the bots you build.

With just a few lines of code, you can embed our Platforms widget into your applications to enable end-users to interact with their applications using Natural Language Processing.

Using our BotKit SDK that resides on your servers and enables interaction between the user and the Platform, you can intercept and customize messages and influence the conversation flow.

## Platform-Specific Bot SDKs

Bot SDKs are available for the following platforms:

* **Bots Web SDK**: The Bots Web SDK contains HTML5 and JavaScript libraries that you can integrate with web applications and hybrid mobile apps. The SDK is available in our GitHub repository at [https://github.com/Koredotcom/web-kore-sdk](https://github.com/Koredotcom/web-kore-sdk). For more information, check the [Readme file](https://github.com/Koredotcom/web-kore-sdk/blob/master/README.md#koreai-web-sdk-for-developers) in the repository.

* **Bots Native iOS SDK**: The Bots Native iOS SDK contains native iOS libraries that you can integrate with native iOS mobile applications. The SDK is available in our GitHub repository at [https://github.com/Koredotcom/iOS-kore-sdk](https://github.com/Koredotcom/iOS-kore-sdk). For more information, check the [Readme file](https://github.com/Koredotcom/iOS-kore-sdk/blob/master/README.md#kore-bot-sdk-for-ios-developers) in the repository. 

* **Bots Native Android SDK**: The Bots Native Android SDK contains native Android libraries that you can integrate with native Android mobile applications. The SDK is available in our GitHub repository at [https://github.com/Koredotcom/android-kore-sdk](https://github.com/Koredotcom/android-kore-sdk). For more information, check the [Readme file](https://github.com/Koredotcom/android-kore-sdk/blob/master/README.md#koreai-android-sdk-for-developers) in the repository. 


* **Bots React Native SDK**:  The React Native SDK contains libraries and tools that you can integrate with React Native mobile applications for iOS and Android. The SDK is available in our GitHub repository at [https://github.com/Koredotcom/react-native-botsdk](https://github.com/Koredotcom/react-native-botsdk). For more information, check the [Readme file](https://github.com/Koredotcom/react-native-botsdk/blob/a3958dadeda529723f5efe7a2241130ce17d1a2e/README.md) in the repository.

* **Bots Flutter SDK**: The Flutter SDK contains libraries and tools that you can integrate with Flutter mobile applications for iOS and Android. The SDK is available in our GitHub repository at [https://github.com/DocsInternal-Kore/KoreBotFlutterPlugin](https://github.com/DocsInternal-Kore/KoreBotFlutterPlugin). For more information, check the [Readme file](https://github.com/DocsInternal-Kore/KoreBotFlutterPlugin/blob/006bb54d3439e9fd83300daf71b15941cce3b8cc/README.md) in the repository.

!!! note

    In Github, you can select a version-specific branch from the top-left corner.


To get started with Bot SDKs, you must have an application to embed the SDK into, host a JWT generation web service, and register your app in the Platform. For more information, see [SDK Security](sdk-security.md).

You can also try out our tutorial using a sample bots, a test application, and configuring your local host server for JWT generation. For more information, see the [Web SDK Tutorial](./tutorials/web-sdk.md).

## BotKit SDK

The BotKit SDK enables you to define precise control of your bots’s interactions. For example, if you have an bots used to book a flight, it may take some time after a user request,s and available taxis can be displayed. Using an asynchronous call, while the user waits for a response, you can display a message such as _Looking for your flight_. The asynchronous     response request enables the Platform to process other requests and will post the response to the user when it becomes available. There are a variety of BotKit SDK events that you can capture, and control the bot using functions.

To learn more about the BotKit SDK, see [Using the BotKit SDK](using-the-botkit-sdk.md).

With v. 7.2 of the Platform, the Widget SDK has also been included in the BotKit SDK. To learn more about the Widget SDK, see [Using the Widget SDK](./tutorials/widget-sdk.md).
