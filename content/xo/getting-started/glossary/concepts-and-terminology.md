# Platform Concepts and Terminology

This glossary lists the key terms and concepts related to the Platform.

!!! note

      "AI Agent", "Agent" and "Bot" refer to the same concept and are used interchangeably throughout this glossary.


## A

**Action task**: Action tasks collect, modify, and post information in systems of record, such as scheduling an appointment, searching for a product, or updating critical information.

**Administration & analytics**: the Platform provides enterprise grade visibility and control of all enterprise bots, user groups, and security, as well as a commitment to compliance in even the most highly regulated areas, including healthcare and financial services.

**Alert task**: Alert tasks Bots poll the system for user requested updates in real-time, to deliver timely, relevant, and personalized information to customers and employees directly from enterprise systems.

**API**: An API, or Application Programming Interface, is a set of definitions, protocols, and tools for building software. It helps developers by essentially providing the building blocks for a program.

**Artificial Intelligence (AI)**: AI is the development of computer systems that are able to perform tasks that normally require human-like intelligence, such as decision making, speech recognition and understanding, translation between languages, and more.  

**Auto-NLP**: A term we use to describe our synonym-based approach to natural language processing. It allows agents to communicate and understand intent variations right out of the gate, thus being speech enabled “automatically”.

**Automatic Message Formatting**: The pre-programmed responses for tasks built into the Platform NL engines.

**Automated Speech Recognition (ASR)**: Our Platform can integrate an Automated Speech Recognition Engine to enable bots to process voice-driven interactions and communicate outside of traditional text-based interfaces.

**Amazon Web Services (AWS)**: A subsidiary of Amazon.com which provides on-demand cloud computing platforms to people and enterprises.

		

	

	

		

			


## B

**Bots (also see _Chatbot_ and _AI Agent_)**: Short for a computer program that acts as an intelligent intermediary between people, digital systems, and Internet-enabled things.

**Bot Builder Tool**: A web-based Bot Builder, part of the Platform, that allows enterprises to customize agent use cases, channels, tasks, security, and more. It also provides a framework in which developers can design, test, and deploy agents in a consistent process at scale.

**Bot context**: User or task information that is captured at the bot level and can be used in context with some or all of the users of that bot.

		

	

	

		

			


## C

**Channel**: A channel is another word for any of the various communication platforms where an agent can be implemented, such as SMS, email, mobile apps, websites, messaging apps and more. With the Platform, you can design agent tasks once, and deploy across channels simply by checking a box. You can also differentiate cross-channel experiences by altering message responses or leveraging channel-specific UI elements, such as  date selectors, carousels, and more.

**Chatbot**: Short for a computer program that acts as an intelligent intermediary between people, digital systems, and Internet-enabled things. 

**Chat logs**: Histories of all recorded human-to-bot interactions.

**Cisco Spark**: Cisco’s all-in-one communication platform, which is also a supported channel for bots and an integration partner for agent development.

**Cloud (or Cloud computing)**: Internet-based computing that provides shared computer processing resources and data to computers and other devices, on demand.

**Cloud Connector**: Provides an agent that runs behind your enterprise firewall that acts as a bridge to facilitate secure data exchanges between on-prem systems and Kore.ai’s cloud based infrastructure.

**Component Reusability**: The ability for developers to use components they’ve already built in the Bot Builder, such as APIs, synonyms, tasks, etc. and apply them to other bots.

**Context (see also, Bot Context, Enterprise Context, Session Context, User Context)** : The information that an agent pulls from a conversation with a user that it can leverage when performing tasks. Contextual data can vary in importance, utility, and lifespan.

**Conversational Commerce**: A term coined by Chris Messina in 2016, which is another way of describing how digital economies will be driven by text and voice based interfaces and experiences.

**Conversational UI**: Another way of describing text and voice-based interfaces, which don’t require graphical elements for use, such as Amazon’s Alexa or Apple’s Siri.

**Cognitive Services (aka Conversational and Cognitive Services)**: A collection of separate APIs, SDKs, and services (that run on a cloud infrastructure like Azure) which developers can use to build intelligence into apps and/or to construct an agent that can leverage AI capabilities. Unlike a platform, charge is typically separate for each service and each bot created.

		

	

	

		

			


## D

**Data retention**: The continued storage of an organization’s data for compliance or business matters.

**Deep learning**: An area of Machine Learning that is based on learning data representations as opposed to task specific algorithms.

**Deployment**: The process of publishing a bot to a communication channel where it will be engaged by users.

**Dialog task**: Dialog tasks are advanced tasks that developers design with logic-driven business processes and pre-established workflows. Bots key off the primary request intent to accomplish the task at hand, then go above and beyond to execute sub-intents and additional workflows. This way, agents can handle complex multi-turn conversational experiences that replicate the natural back and forth exchanges people have every day.

**Dialog Builder**: The Dialog Builder gives designers and developers the flexibility to manipulate the entire dialog process of a bot interaction and string together complex workflows in a GUI-based tool.

		

	

	

		

			


## E

**E-commerce**: Any monetary transaction conducted on the internet.

**E-discovery**: Any process in which electronic data is sought, located, secured, and searched with the intent of legal use. The Platform supports e-discovery.

**Email**: A supported communication channel for bots.

**Encryption**: The process of converting information or data into a code, especially to prevent unauthorized access.

**End-to-end**: A way of describing the Platform which signifies that it includes all the component features to take enterprises from the very beginning of the agent development process, through deployment and management.

**Enterprise analytics**: The central dashboard within the Platform where[ administrators can get visibility into key metrics, pull detailed reports, and track bot usage](https://kore.ai/platform/enterprise-features/integration/) (i.e. number of executed tasks, most popular channels, most active users, user enrollment, etc.)

**Enterprise bots store**: A bot store that an enterprise sets up for a select group of users to access any custom built bots. The Store is where you can find prebuilt bot templates which you can use for different business scenarios.

**Enterprise-grade**: A way of describing all of the [components and capabilities of the Platform](https://kore.ai/platform/enterprise-features/integration/) that are specifically designed to match the highest enterprise standards, including administration, analytics, security, compliance, and more.

**Enterprise context**: Information that represents company-wide rules and standards that apply to all users and agents, such as a company travel policy, or expense limits.

**Entity**: Entities are the necessary fields, data, or words for a agent to complete the user’s request: be that a date, a time, a location, a description or any number of things. With the required entities in hand, the agent can reach out to the web service and get the specific data or perform the action as per the user intent. For example, to book a flight, the agent needs the source and destination city along with the travel date. In this example, the user utterance “Book me a flight to Orlando for next Sunday”, “_Orlando_” and “_next Sunday_” are entities. For more information about parameters and user input, refer to the particular task type parameters and fields.


<table>
  <tr>
   <td><strong>SAMPLE UTTERANCE</strong>
   </td>
   <td><strong>INTENT</strong>
   </td>
   <td><strong>ENTITY</strong>
   </td>
  </tr>
  <tr>
   <td>Book me a flight to Orlando
   </td>
   <td>Book flight
   </td>
   <td>City: Orlando
   </td>
  </tr>
  <tr>
   <td>Schedule a meeting with Bill this Sunday
   </td>
   <td>Schedule a meeting
   </td>
   <td>Person name: Bill
<p>
Date: April 22, 2018
   </td>
  </tr>
  <tr>
   <td>Add two bottles of red wine to the cart
   </td>
   <td>Add to cart
   </td>
   <td>Item: Red Wine
<p>
Count: Two
   </td>
  </tr>
</table>


 

**Entity extraction**: This is the process by which the NL engine identifies words from a user’s utterance to ensure all available fields match the task at hand. If the agent needs an entity to complete the task after initial extraction, it will prompt the user for it.

		

	

	

		

			


## F

**Facebook Messenger**: A supported channel for agents built on the Platform, primarily used when companies build bots for end customers.

**FAQ**: One of the primary data source agents use, along with the Knowledge Graph, to pull information to complete knowledge tasks. 

**Framework**: A framework is a structure that provides some basic building blocks and generic functionality for building agents (like ML/ NLP or a Dialog Builder), but requires additional user-written code or other third-party services (to match the functionality of an actual platform). Frameworks often are composed of piecemeal components from different vendors.

**Fundamental Meaning**: Fundamental Meaning is an approach to NLP that’s all about understanding words themselves. Each user utterance is broken down word-for-word to search for intent (what the user is asking the agent to do) and entities (the necessary data needed to complete a task). [Learn more about this approach and the NL engine.](https://kore.ai/platform/design-and-build/natural-language-processing/)

		

	

	

		

			


## G

**Glip**: A [supported channel](https://kore.ai/bots-platform/channels/) for agents built on the Platform.

**Graphic User Interface (GUI)**: A visual way of interacting with an app or system, usually consisting of  buttons, images, windows, icons, menu forms, and more.

		

	

	

		

			


## H

**Hosting**: Hosting refers to storing and allowing access to the Platform. Enterprises have the choice to host on-prem or in the cloud via AWS.

		

	

	

		

			


## I

**Information and Communication Technologies (ICT)**: ICT refers to technologies that provide access to information through telecommunications. It is similar to Information Technology (IT), but focuses primarily on communication technologies. This includes the Internet, wireless networks, cell phones, and other communication media.

**Information task**: Information tasks lookup data or pull reports based on specific parameters and quickly return easy-to-consume results that are convenient for users. These reports are formatted and organized based on user preferences, applicable filters, and they can be downloaded for later use. For example, an agent can provide a sales manager with a report detailing the top 10 sales reps last year by region, organized from most to least sales.

**Interface**: A shared boundary across which two or more separate components of a computer system exchange information.

**Intelligence (see also Platform Intelligence)**: All the capabilities provided to developers who use the Platform to create AI-powered agents including how to use contextual data, memory, NLP, machine learning (both supervised and unsupervised), sentiment analysis, and more.

**Intent**: A few essential words in the utterance that describe what the user wants the agent to do. It is usually a combination of a verb and a noun. For example, in _“Book me a flight to Orlando for next Sunday”_, the intent is _Book me a flight_.

**Intent recognition**: The process by which the NL engine analyzes the structure of a user’s command to identify each word by meaning, position, conjugation, capitalization, plurality, and other factors to correctly match the user’s intent to the task at hand.

**Interaction**: Any text-based or spoken communication between a human and an agent.

		

	

	

		

			


## J

**Javascript**: A programming language that is dynamic and supports object-oriented, imperative, and functional programming styles.

		

	

	

		

			


## K

**Knowledge task** / **Knowledge Graph**: Knowledge tasks take user questions and query a predefined set of information to rapidly find the right answers, such as business hours of operation or specific policy questions.

**Kore.ai**: Kore.ai is a software development company, founded in 2014 in Orlando, FL to help enterprises build and use conversational, agents for a variety of use cases. Learn more about [Kore.ai](https://www.kore.ai/about-us).

		

	

	

		

			


## **L**

**Live agent handoff**: An agents ability to [seamlessly take a conversation from any channel and bring in a human agent](https://www.youtube.com/watch?v=ye9ahAWIzFs&feature=youtu.be). This function is especially useful for areas such as service, support and ITSM.

**Learning**: Learning is about how [agents](https://blog.kore.ai/a-complete-guide-to-chatbots) recognize new intents and entities, answer questions correctly, and identify the important aspects of a user utterance. Learning can be manual or automatic. And, like humans, agents need to know when they are wrong and what the right action, response, or answer should be.

**Location Services**: Location services identify a user’s physical location and can be used to build location dependent tasks for greater accuracy.

**Logic programming**: A type of programming which is largely based on formal logic and is the building block for complex agent dialogs and workflows.

		

	

	

		

			


## M

**Machine Learning**: Using algorithms, patterns, and training data, machine learning allows computers to find hidden insights without being explicitly programmed. Learn more about the way Kore.ai uses machine learning for natural language enablement.

**Managed Services Provider (MSP)**: Most often an IT provider that manages and assumes responsibility for providing a defined set of services to its clients either proactively or as the MSP determines that services are needed. They typically offer a range of services such as network maintenance, hardware repair, help-desk, email management, and anything else that requires a day-to-day administrator to keep running. They may need to purchase technology from a third-party provider, a cost which is bundled with their services and passed on to their end customer. MSPs operate on longer-term annual or multi-year contracts, and the tenure of their relationship is open-ended.

**Memory**: Agents can remember actions, data, and contextual details to maintain conversation continuity and take helpful actions. The developer can designate how long the bot remembers information as either short term or long term memory.

**Message Broker**: The Platform component that consumes all user inputs and system outputs, standardizes for a common messaging paradigm, and redirects to the appropriate endpoints.

**Message Store**: The Platform component that stores messages between users, bots, and systems and automatically logs and categorizes message successes and failures.

**Microsoft Teams**: A [supported channel](https://kore.ai/bots-platform/channels/) for agents built on the Platform.

**Middleware**: the Platform Middleware contains the Message Broker, Message Store, and built-in encryption to create a flawless conversational experience by ensuring messages are received, secured, and exchanged in real time.

**Mobile SDKs**: A set of software development tools that allow developers to create applications for a variety of mobile devices. Mobile SDKs are also a supported channel for bots.

**Multi-layer authentication**: A method of access control in which the user must provide several separate authentication factors before being granted access to data. The Platform supports multi-layer authentication for bot access.

**Multiple intents**: When a user gives a complex request to an agent which requires the bot to process and prioritize two or more intents at once.

		

	

	

		

			


## N

**Natural Language (NL)**: The method by which users can talk to systems in everyday language like text and speech, rather than programming language.

**Natural Language Processing (NLP)**: The process by which an agent or any other system understands and processes requests in common language, rather than programming language. NLP is typically enabled via machine learning, but Kore.ai uses a multi-engine  approach which includes intent recognition and entity extraction. NLP enables an agent to identify the user intents; extract useful information from their utterances and map the data(entities) to the relevant tasks. The Platform uses a unique NLP strategy. It combines Fundamental Meaning, Machine Learning and Knowledge Graph Engines for optimal conversational accuracy. Agents built on the Platform can understand and process:



* Multi-sentence messages
* Multiple intents
* Contextual references
* Patterns and idiomatic sentences, and more.

**Natural Language Training**: The processes in which you refine a agents ability to understand and process NL requests, and test accordingly. It can be done by adding synonyms to the agents vocabulary via the Bot Builder, or by training with complete utterances via machine learning. You can learn more about how to train a bot by watching [How To Build A VA In 5 Minutes](https://www.youtube.com/watch?v=-pM527eEBZ8&t=27s).

**Natural Language Understanding (NLU)**: Natural Language Understanding is part of Natural Language Processing and refers to the agents ability to process user utterances, identify their meaning and integrate them with existing training data.

**Neural networks**: A computer system modeled on the human brain and nervous system.

**Node**: A node is where different points of a dialog or workflow intersect. The Dialog Builder has multiple node types so developers can steer the human-to-bot conversation in different directions, including intent nodes, service nodes, message nodes, confirmation nodes, webhook nodes, and JavaScript nodes.

		

	

	

		

			


## O

**Omni-channel (deployment)**: The process of building one agent that is “channel agnostic” (meaning the bot can be implemented in any channel), and deploying it to the communication channels of your choice. Omni-channel bots can be accessed in more than one place and can carry conversation context across channels.

		

	

	

		

			


## P

**Patterns**: Patterns are word combinations that indicate a certain intent or entity.

**Pause & resume**: An approach for situations when an agent receives a task request while in the process of completing an initial request. The bot can then pause one request, complete the more immediate task, and circle back to resume the request it previously put on hold.

**Platform architecture**: A visual descriptor of the various Platform features and how they interact with one another.

**Pilot**: The stage after proof of concept where an agents tasks are published and the bot is deployed to a select group of users for testing.

**Proof-of-concept (POC)**: The stage where an agent use cases are determined and tasks are built to prove the viability of initial use cases.

**Public bots store**: A bot store that an enterprise sets up with custom bots that can be made available for public users, as opposed to an enterprise bot store which only makes bots available to a select group of enterprise users.

**Publish**: The process by which tasks are developed, completed, and put into use. Unpublished tasks will not be available for test users, but are still available for configuration within Bot Builder.

		

	

	

		

			


## R

**Response formatting**: The process by which a developer customizes the responses a bot will give during an interaction. Responses can be formatted to be natural language only, or include GUI elements such as buttons, forms, images, etc.

**Robotic Processing Automation (RPA)**: A tool for automating manual, time-consuming, complex, rule-based workflows and functions for back-end IT administrative work. While it may sound similar to AI-based agents, we explain all the nuances and differences in our whitepaper, Robotic Process Automation Software Robots & Chatbots: What’s Different, What’s Similar, and What’s Next?

		

	

	

		

			


## S

**SAP Solutions**: Bots built by Kore.ai to specifically integrate with SAP’s most popular systems, such as SuccessFactors, Concur, S/4Hana, SAP Hybris, and more.

**Sentiment analysis**: Beyond completing tasks, agents built with the Platform can understand a user’s mood throughout a conversation. Our NLP engine scores sentiment based on connotation, word placement, and modifiers. Developers can use these scores to trigger custom flows to improve bot-to-user communication, or bring in human agents as needed.

**Service call**: Service calls are used to make API requests to third-party web services to push, pull, or manipulate data. The web service unpacks the request and converts it to a command that the application or system can understand in order to complete the task or return the needed data. The Platform then receives that message and unpacks it in order to obtain the results of the request. The Platform supports the use of API services to make REST, SOAP, or ODATA requests.

**Session**: The period of time from when a user engages a bot, to when they disengage.

**Session context**: Information specified by a user that is the primary context for a bot to keep in mind during a session.


**Slack**: A [supported channel](https://kore.ai/bots-platform/channels/) for agents built on the Platform.

**SMS**: A [supported channel](https://kore.ai/bots-platform/channels/) for agents built on the Platform.

**Software Development Kit (also see Mobile SDK, Web SDK)**: Tools or resources that help developers create websites and apps and customize elements of the UI.

**Storyboard**: A primary feature within the Platform that allows developers to visualize and manage the agent design process through FAQs, Dialog Tasks, and Mock Conversation Scenes.

**Structured data**: Information with a high degree of organization that is easily searchable when placed in a database.

**Supervised learning for NL**: Through the Bot Builder tool, developers and admins can support supervised learning and evaluate all interaction logs, easily change NL settings for failed scenarios, and use the learnings to retrain the bot for better conversations. Developers can also leverage chat logs to build predictive models and use the outcomes to further define additional proactive alerts, suggested actions, or automated workflows. Developers have input variables (X) and an output variable (Y), and use an algorithm to learn the mapping function from the input to the output Y=f(X). Here, the agent developer acts as a teacher and has virtually full control over what the agent learns. This means that the algorithm makes predictions based on the training data provided. The agent creator or developer can manually correct these predictions by flagging the findings as correct or incorrect. Since the agent developer already knows what the agent should understand, learning can be stopped as soon as the developer decides or when the model reaches an acceptable level of performance and maturity.

**Synonyms**: Word variations for intents or entities that developers can add to a agents synonym library to give it a wider and more accurate range of natural language understanding.

		

	

	

		

			


## T

**Tasks**: The different types of simple and complex “jobs” a developer designates the agent to perform. An agent can perform 5 types of tasks: alerts, actions, information, knowledge, and dialog tasks. For example, for a travel agent, task names are to book tickets, find hotels, provide weather forecasts etc. that cater to different user intents. Once the agent understands the intent, it is ready to perform a task, such as reaching out to a web service, extracting the current weather conditions report, parsing that response, and then delivering the data to the user.

**Testing**: The step-by-step processes of testing request chaining, intent and sub intent recognition and entity extraction, conversation flows, and more.

**Training data**: The amount of data, usually in the form of utterances, that is fed to a bot in order to train it for the purpose of identifying intents and entities, so that the agent may complete the tasks required by users.

**Twitter**: A [supported channel](https://kore.ai/bots-platform/channels/) for Agents.

		

	

	

		

			


## U

**Use case**: The various ways agents can be applied for employee and customer facing tasks. [Check out our Top 30 defined use cases for chatbots.](https://info.kore.ai/ebook-gen-top-30-use-cases)

**User context**: Individual user information or preferences that can be shared by all enterprise bots the user will interact with, for example, a home address, payment information, etc.

**User experience (UX)**: The overall experience of a person using a product, like a website or mobile application. It’s usually gauged by how easy or enjoyable something is to use.

**User interface (UI)**: The means by which the user and a computer system interact.


**Unstructured data**: Unstructured data and documents, in this instance, refers to sources that are typically text-heavy and free-flowing. Such documents or data can still contain dates, numbers, and facts, but they lack a pre-defined data model or structure and overall consistency. The Platform supports semantic search against unstructured data and the training of bots from unstructured documents.

**Unsupervised learning for NL**: Unsupervised learning for NL can be applied to expand the language capabilities of your agent, without human intervention. Unlike unsupervised models in which agents learn from any input, good or bad, the Platform enables agents to automatically increase their vocabulary only when the agent successfully recognizes the intent and extracts the entities of a human’s request to complete a task.

**Utterance**: Anything that a user says to the agent is an utterance. For example, if the user types _“_Book me a flight to Orlando for next Sunday_”_, the entire sentence is considered as the user’s utterance.

		

	

	

		

			


## V

**Value Added Reseller (VAR)**: A value-added reseller offers third party software and hardware to the end user at a markup, along with some combination of procurement consulting, configuration, and customization services. They generate revenues through a combination of flat-rate fees per license, and billable hours, but their engagement is finite.

**Variables, Context, and Session Data**: When developers create and define tasks, they can access the following:



* Session variables provided by the Platform.
* Custom variables that they define.
* The context that defines the scope of the variable.

For example, some API requests require you to set session variables before executing the task, or a dialog task component needs to access a session variable to transit to the next node. Dialog tasks can also access the context object with additional system variables. These session and context variables allow you to persist and store data. For example, a user’s home address for e-commerce, transportation, and home delivery-focused services is used by the agent when executing a task. The Platform supports session variables that are used when defining tasks in sections using JavaScript. Session variables depend on the context or scope in which they are used. For example, enterprise-level, agent-level, user-level, and session-level.

**AI Agent**: An AI Agent, also called a **_Bot_** or **_Chatbot_**, acts as an intelligent intermediary between people, digital systems, and internet-enabled things. Using machine learning, natural language processing, and other forms of advanced software, agents can handle complex human conversations, learn from past interactions, and improve responses over time.

		

	

	

		

			


## W

**Web SDK**: A software development kit that allows developers to customize websites, also a supported channel for bots.

**Winning Intent**: When the agent receives a user utterance, it will attempt to detect potential intents, then score them by the probability that they represent what the user wants. The intent that scores the highest is the one that the agent responds to and is called a Winning Intent.

**Workplace by Facebook**: A [supported channel](https://kore.ai/bots-platform/channels/) for agents built on the Platform, and an integration partner for agent development.


## X

**Platform**: An enterprise-grade agent development platform offered as a SaaS, by Kore.ai, which gives enterprises every component necessary to design, train, deploy, analyze and manage AI-rich AI Agents.
