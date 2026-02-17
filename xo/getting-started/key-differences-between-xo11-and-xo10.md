---
hide:
  - feedback
  - toc  
---
# Key Differences Between AI for Service (XO) v11 and v10

Key differences are summarized below.

## Key Navigation Changes

**Ease of Access to All Products and Services**

* A new guided onboarding journey helps you create your first app in record time. To start the journey, click **Create New** on the home page and follow the guided steps to create the app.  
<img src="../images/xo-platform-homepage.png" alt="New unified XO Platform" title="New unified XO Platform" style="border: 1px solid gray; zoom:70%;">   

* During the onboarding process, the OpenAI credential provided by Kore.ai is used to enable access to AI features, such as app name suggestions, alternate question suggestions, generating agent use cases, etc.

* A new "Setup guide" feature has been introduced to facilitate faster app building for platform users. It offers a guided, step-by-step process that provides a comprehensive overview of all features in XO. Once the setup guide is completed, it will be moved to the help section under the header for future reference.  
<img src="../images/xo-platform-setupguide.png" alt="Setup Guide" title="Setup Guide" style="border: 1px solid gray; zoom:70%;">   

* Apps created using the Guided Onboarding journey will be automatically published with the WebSDK channel enabled. However, the apps created through the Custom Journey will not be published automatically.

* The Product Switcher at the top of the left navigation lets you effortlessly switch between different products on the XO Platform.  
<img src="../images/xo-platform-productswitcher.png" alt="Product Switcher" title="Product Switcher" style="border: 1px solid gray; zoom:70%;">

* The Left Navigation Menu shows options for the selected product and feature(s). In top-down order, product-specific options are shown first, and related products or features are shown at the bottom.  
<img src="../images/ntp(21).png" alt="The Left Navigation Menu" title="The Left Navigation Menu" style="border: 1px solid gray; zoom:70%;">

## Bots Replaced with Apps

A Bot is now replaced with an App. Each App can have four products, with common modules kept separate.  
<img src="../images/xo-platform-apps.png" alt="Apps" title="Apps" style="border: 1px solid gray; zoom:70%;">  

## Welcome Events Replaced with Welcome Flows

 * Earlier, incoming conversations were handled by events such as OnConnect/Welcome events. These events are now replaced with Flows. Flows are designed to replace the Welcome or OnConnect Message, Trigger a Dialog Task, or Run a Script. In XO v11, Flows are the ones that receive the conversation. We can define the user experience using Start Flows. By creating and linking a Start flow to a channel users will experience what you have defined in the flow.  
 Also, the Experience Flows are now split into 3 variants:
    * Start Flows
    * Exit Flows
    * Conditional Flows

 <img src="../images/xo-platform-welcomeflow.png" alt="Welcome flow" title="Welcome flow" style="border: 1px solid gray; zoom:70%;">

 * The dialog builder now has a new "Return to Flow" option. This option allows the conversation to return to the Flow after completing an Automation node and continue executing the next connected nodes in the Flow. This option is in addition to the existing "Not connected" and "End of dialog" options.  
 <img src="../images/return-to-flow.png" alt="Return to flow" title="Return to flow" style="border: 1px solid gray; zoom:70%;">
  
 * The new flow builder supports JavaScript, Templates, and VXML (IVR channels).

 * Default Flows are introduced for both Chat and Voice functionalities. You can test any Chat using the RTM channel for simulation, and any Voice using the SBC channel for simulation.

 * In XO v11, Agent Transfer is a placeholder that needs to be defined in the Flow builder. The agent skills specified in the Agent Transfer node of the Dialog Builder will be added to the agent skills defined in the corresponding node of the Flow builder.

## Streamlined Automation: Conversational Input and Run Automation Nodes Merged, Deflect to Chat Deprecated

Conversational Input and Run Automation Nodes are now combined into a single "Automation" node. The Automation Node passes the conversation to the NLP engine for processing. Platform users can either:

* Prompt users with a message and use their response to trigger an NLP task, or
* Predefine the Dialog Task to be triggered within the Automation Node.

The Agent Transfer node must be added within the Automation Node. Also, the "Deflect to Chat" feature has been deprecated in this release.  
<img src="../images/xo-platform-contact-center-Automation.png" alt="Dialog Builder" title="Dialog Builder" style="border: 1px solid gray; zoom:70%;">

## Dialog Builder Upgrade

* XO v11 has an all-new super intuitive dialog builder.  
<img src="../images/xo-platform-Dialogbuilder.png" alt="Dialog Builder" title="Dialog Builder" style="border: 1px solid gray; zoom:70%;">

* The "Train" button appears whenever changes are made to the Dialogs, FAQs, and Training page (including utterances, patterns, traits, etc.); and while adding sources in Search AI.  
<img src="../images/xo-platform-train.png" alt="Train" title="Train" style="border: 1px solid gray; zoom:70%;">

* Use Cases are no longer available  in the Agent AI or Contact Center AI modules. They are merged into Dialog Tasks in Automation AI. When creating a dialog, users can select if the dialog is meant for agent, customer or both, by turning on a toggle.

## Talk to Bot Moved to Header

Talk to Bot has been renamed to **Test**. Users can Test Voice or Digital Conversation using Talk to Bot. Also, users can now see the current state of your conversation in the Talk-to-Bot (Test/Resume/Stop).  
<img src="../images/Talk-to-bot.png" alt="Talk to bot" title="Talk to bot" style="border: 1px solid gray; zoom:70%;">  
<img src="../images/xo-platform-test.png" alt="Test" title="Test" style="border: 1px solid gray; zoom:70%;">
   
## Create Dialog Enhanced with Generative AI

You can now use Gen AI to create a dialog from scratch. You can also install pre-built Integration Templates directly from the all-new Marketplace as Dialog Tasks.  
<img src="../images/xo-platform-createdialog.png" alt="Create Dialog" title="Create Dialog" style="border: 1px solid gray; zoom:70%;">

## Bot Configurations Moved to App Settings

All the configurations applicable across the app have been moved to a separate menu item - App Settings.    
<img src="../images/xo-platform-appsetting.png" alt="App Setting" title="App Setting" style="border: 1px solid gray; zoom:70%;">

## Shared LLM & Generative Settings for All Products

All the LLM integrations can be managed in one place in an app and used across the products on the Platform. For example, Agent Response Rephrasing applies to both Contact Center AI and Agent AI.
[Learn more](../generative-ai-tools/introduction.md)  
<img src="../images/ais-llm.png" alt="LLM & GenerativeAI" title="LLM & GenerativeAI" style="border: 1px solid gray; zoom:70%;">

## Global User Management

User Management is now applicable across the modules, app level. You can set permissions, manage agent-related Permissions, Create a new Role, and Assign a role to a new or existing user. You can also assign a role to User groups (but the creation of User Groups is still on the Admin Console page). [Learn more](../getting-started/whats-new-in-xo-platform.md)  
<img src="../images/xo-platform-manageuser.png" alt="User Management" title="User Management" style="border: 1px solid gray; zoom:70%;">

## App Level Publishing and Version Management

Be it Publishing Dialogs or Flows, everything is now done in one place. The Platform supports all variants of publishing (partial, full), version control, and Import and export in one centralized place.  
<img src="../images/xo-platform-deploy.png" alt="Deploy" title="Deploy" style="border: 1px solid gray; zoom:70%;">

## Reorganized Analytics

The Analytics module is logically regrouped to address various audience needs. A session starts from Channel through Flows, can go to Automation AI, and then transfer to Agent. The module offers unified analytics across all conversations.  
<img src="../images/xo-platform-analytics.png" alt="Analytics" title="Analytics" style="border: 1px solid gray; zoom:70%;">

## Automation vs. Search (Answers) Fallback Behavior

We have a new setting where users can configure where every user utterance should go first: Automation AI or Search AI (Answers) to get the response.  
<img src="../images/xo-platform-fallback-behaviour.png" alt="Fallback Behavior" title="Fallback Behavior" style="border: 1px solid gray; zoom:70%;">

## New Marketplace

The New Marketplace is available inside the App (previously, it was on the bot's homepage). The Marketplace empowers you to enhance your AI Agent's capabilities by seamlessly integrating third-party systems. With pre-built integrations across various domains, you can extend your assistant's functionality effortlessly. The Marketplace streamlines the integration process by providing pre-configured actions and dialogue tasks, saving you valuable development time and effort. Additionally, you can leverage the expertly designed, pre-built dialogue templates tailored for each integration, allowing you to incorporate rich conversational flows with minimal setup. 
<img src="../images/xo-platform-marketplace.png" alt="Marketplace" title="Marketplace" style="border: 1px solid gray; zoom:70%;">

Also, the Marketplace offers pre-built dialogue templates for each integration. These templates are expertly designed by Kore, leveraging the available APIs from the integrated system. When a user installs a template, it is added as a dialogue task to the agents use case section, enabling users to create rich and engaging conversational experiences with minimal effort.  
<img src="../images/xo-platform-marketplace 2.png" alt="Marketplace" title="Marketplace" style="border: 1px solid gray; zoom:70%;">

## New Billing Page

Billing has been updated in v11 to accommodate various price offerings. For Automation AI, the billing session is defined as 15 minutes of interaction. For Contact Center AI, billing is based on the number of agent seats. You can start with a trial plan for either Automation AI or Contact Center AI, then subscribe to additional products as needed.  
The platform offers different plans, and you can choose the plan for each product individually. However, if you want Enterprise offerings, you must choose enterprise plans for all the products.  
<img src="../images/xo-platform-billingpage.png" alt="Billing Page" title="Billing Page" style="border: 1px solid gray; zoom:70%;">

## Other Changes

* Languages are now at the App level. Users can add a language globally and access it inside a specific module. For example, a New Agent language assignment is only done if it is added globally at the App level.
* Dev tools offer all the developer-related menus, such as BotKit, API scopes, Auth profiles, etc., across the products.
* Now you can customize the WebSDK to align with your brand identity, including options such as color schemes, fonts, logos, headers, homepage design, etc.
* Standard account users won't have access to the Knowledge Graph feature but can still define FAQs by adding questions and answers. Enterprise account users will have access to the Knowledge Graph, allowing them to add tags, graphs, and other elements, similar to the functionality in XO v11.
* Data Tables are available for all existing Standard and Enterprise accounts, as well as new Enterprise accounts. However, new Standard account users created in v11 will not have access to the Data Tables feature.
* The ASR and TTS configurations provided in the Kore Voice Gateway are designed as default settings. Platform users have the option to customize them on a per-flow if required.
* Process Apps are discontinued.

<hr>

##### Related Links

* [What's New in AI for Service (XO v11)](./whats-new-in-xo-platform.md)
* [Migration Path for Existing Customers - Upgrade Journey](../getting-started/migration-path-xo10-to-xo11.md)
