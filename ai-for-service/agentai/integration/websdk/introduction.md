# Agent AI Web SDK v3.13.1

Agent AI Web SDK provides a versatile and customizable solution for integrating AI Agent functionalities into web applications. Built using JavaScript, Preact, and SCSS, this SDK enables seamless interaction, real-time event handling, and UI customization for an enhanced user experience.

## Prerequisites

Before using the SDK, generate the following identifiers:

* **Client ID**
* **Bot ID**
* **Client Secret**

To generate the above identifiers, follow these steps:

1. Navigate to the [AgentAssist Configuration](https://agentassist.kore.ai/){:target="_blank"} page.
2. Open the **Automations** section.
3. Create a new app or import an existing one.
4. Once the app is created or imported, its details are displayed under the **Channels** section of the **Configuration** page.

Generate a JWT **(JSON Web Token)** using the above identifiers.

<img src="../images/web-sdk01.png" alt="web-sdk-channel" title="web-sdk-channel" style="border: 1px solid gray; zoom:100%;"> 

## Getting Started

There are two ways to integrate the SDK into your project:

* Installation via CDN
* Installation via NPM

### Installation via CDN

Include the SDK directly in your HTML via a CDN:

```
<script src="https://cdn.jsdelivr.net/npm/@koreai/agentai-web-sdk@1.0.0/dist/umd/agentai-web-sdk-umd.min.js"></script>
   <script>
       var AAConfig = AAWindow.AAConfig;
       var AAWindow = AAWindow.AAWindow;
       var aaWindowInstance = new AAWindow();
       var config = {
	connectionDetails: {
               domainUrl: "<DOMAIN_URL>",
               token: "<TOKEN>",
               botId: "XXXX",
               botName: "<BOT_NAME>",
               conversationId: "XXXX",
               interactiveLanguage: "en",
               customData: {},
               userName: "<User Name>",
               channel: "chat",
	   sessionId: 0,
 	   summaryEnabled: "true",
	}
        };
       aaWindowInstance.show(config);
   </script>
```



### Installation via NPM

To install the SDK via NPM, use the following command

```
npm install --save @kore/agentai-web-sdk
```

Initialize the SDK in your project

```
import { AAConfig, AAWindow } from '@kore/agentai-web-sdk';
   const aaWindowInstance = new AAWindow();
   const config = { ...AAConfig };
   config.connectionDetails = {
       domainUrl: "<DOMAIN_URL>",
       token: "<YOUR_TOKEN>",
       botId: "XXXX",
       botName: "<BOT_NAME>",
       conversationId: "XXXX",
       interactiveLanguage: "en",
       customData: {},
       userName: "<USER_NAME>",
       channel: "chat",
       sessionId: "sessionId"
   }
```



