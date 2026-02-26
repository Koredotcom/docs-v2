# Integration with Third-party Services

The **Integrations** feature connects your Platform account to third-party services, streamlining access to external tools and automating workflows. Once connected, you can use these integrations from the Tool Flow canvas to build high-quality AI applications. [Learn more](../../ai-agents/tools/tool-flows/types-of-nodes/integration-node.md) about the **Integration** node.

The Platform supports 120+ integrations with different authorization types. To enable secure access, create a connection using third-party authentication to verify users. The main authentication methods are:

* **API**: Authenticate by passing a token (usually in headers or query parameters). Used for API Key or Access Token integrations.
* **OAuth2**: Uses the OAuth2 industry-standard authorization framework to grant limited access to resources on a service without sharing passwords. The auth method uses the following concepts:
    * **Access Token**: A temporary token that the app uses to access the user’s resources.
    * **Scopes**: Specific permissions attached to the token. For example, a token may have a 'read email' scope, which allows an app to access your email data, or a 'write files' scope, which allows it to upload or edit files.
    * **Expires**: Tokens often have a time limit to increase security, meaning they become invalid after a set time period.
    * **Refresh Token**: Allows the app to obtain a new access token when the old one expires. No need to log in again.
* **Bearer**: Use a bearer token in the request header, usually within an OAuth2 workflow, to access protected resources. The server validates the token before granting access.
* **Basic Auth**: Authenticate using username and password in the request header. Credentials are sent with each request. Supported for ServiceNow, Freshdesk, Snowflake, Amplitude, and Mixpanel integrations.

<Note><ul><li>Other authentication methods for certain integrations include: <b>Basic</b>, <b>Basic with JWT</b>, <b>OAuth1</b>, and <b>custom authentication</b> defined by the service provider.</li>
<li>Some providers may support <b>multiple authentication methods</b>, allowing flexibility based on your integration needs.</li></ul></Note>

## Access Integrations

To access the feature, follow the steps below:

1. Log into the the Platform and select **Autonomous Agents** under modules.
2. Select **Settings** > **Integrations**.

    ![access integrations](./images/access-integrations.png "access integrations")



## Key Features

The features supported on the **Integrations** page include:

* **All Integrations and Connected Tabs**
  
    Select the **All Integrations** tab to see available integrations grouped by category. You can add a connection to these integrations using a supported authentication method, such as API, OAuth2, Bearer Token, or Basic Auth. AI-based integrations you can connect to include [AWS S3 Bucket](../integrations/integrate-with-s3-bucket.md), [Weight & Biases](../integrations/integrate-with-wandb.md), and [Hugging Face](../integrations/enable-hugging-face.md). The category you select filters which integrations are shown in this list.

     Once you configure and connect to a third-party service, that integration appears in the **Connected** section and is no longer visible in the **All Integrations** list. If you delete the connection, the integration will return to the **All Integrations** list, allowing you to reconnect in the future.

     ![all integrations](./images/all-integrations-tab.png "all integrations")



* **Search Integration**: Enter the name in the **Search** field for full or partial matches.

![search integration](./images/search-integration.png "search integration")



* **Category Dropdown List**: The Platform supports multiple categories based on the purpose of the integration, such as AI and Machine Learning, Marketing and Social Media, E-commerce, and more. Select the relevant category or categories in the list and click **Apply** to view the corresponding integrations.

![change category](./images/select-category-of-integration.png "change category")




* **Authorization Dropdown List**: The available types for authentication methods are API, OAuth2, Bearer, and Basic Auth. Refer to the introduction of this article for more details. Select the required option(s) and click **Apply** to view the relevant integrations.

![select auth](./images/select-category-integration.png "select auth")



* **List View**: Click this icon to view the available integration options as a list with the following information:
    * **Connection Name**: The service provider’s name.
    * **Description**: A brief description of the purpose or type of integration.
    * **Type**: The authorization method.<img src="../images/list-view.png" alt="list view" title="list view" style="border: 1px solid gray; zoom:75%;"/>

* **Tile View**: This is the default view. Click this icon to view all the integrations as individual cards.

![tile view](./images/tile-view.png "tile view")



## Supported Integrations

The following third-party integrations are available on the Platform:

| <strong>INTEGRATION</strong> | <strong>DESCRIPTION</strong> | <strong>SUPPORTED ACTIONS</strong> | <strong>SUPPORTED AUTHORIZATION TYPE(S)</strong> |
|:------ |:------ |:------ |:------ |
| Acculynx | Using the AccuLynx API, data can be seamlessly exchanged between AccuLynx and other applications for greater efficiency and productivity. | 8 | API |
| Active_campaign | ActiveCampaign provides APIs for marketing automation, customer relationship management (CRM), and email marketing. | 7 | API |
| Affinity | CRM focused on relationship intelligence, with other tools and systems. This allows for data synchronization, workflow automation, and the sharing of relationship insights across different platforms. | 20 | API |
| Agencyzoom | AgencyZoom is for the P&C insurance agent that is looking to increase sales, boost retention, and analyze agency & producer performance. | 99 | <ul> <li> API</li> <li>BASIC WITH JWT</li> </ul> |
| Ahrefs | Ahrefs is an SEO and marketing platform offering site audits, keyword research, content analysis, and competitive insights to improve search rankings and drive organic traffic. | 40 | API |
| Airtable | Airtable is a low‒code platform that helps build next generation apps. Move beyond rigid tools, and implement your critical data, and re-imagine workflows with AI. | 17 | <ul> <li> OAUTH2</li> <li>BEARER</li> <li>API</li> </ul> |
| Amplitude | Amplitude Inc. is an American publicly trading company that develops digital analytics software. | 16 | BASIC |
| Apaleo | API-first property management platform empowering hotel & apartment groups to create the ultimate experience for guests & staff. | 29 | OAUTH2 |
| Apollo | Apollo is a CRM tool that allows you to manage your contacts, leads, and opportunities. | 17 | API |
| Asana | Tool to help teams organize, track, and manage their work. | 15 | OAUTH2 |
| Attio | Attio is a fully customizable workspace for your team's relationships and workflows. | 56 | OAUTH2 |
| AWS S3 Bucket | Connect to your users' AWS S3 bucket set. | 1 | API |
| Bamboohr | BambooHR is an American technology company that provides human resources software as a service. | 159 | API |
| Bill | Integration with Bill.com API. | 221 | BILLCOM AUTH |
| Bitbucket | Bitbucket is a Git-based code hosting and collaboration platform supporting private and public repositories, enabling teams to manage and review code through pull requests and integrations. | 15 | OAUTH2 |
| Blackboard | Anthology Adopt powered by Pendo allows institutions to gain insights on Blackboard Learn usage and take action through in-app messages, digital walkthrough guides, and tooltips. | 314 | OAUTH2 |
| Bolna | Create conversational voice agents using Bolna AI to enhance interactions, streamline operations, and automate support. | 15 | API |
| Borneo | Borneo is a data security and privacy platform designed for sensitive data discovery and remediation. | 154 | <ul> <li> API</li> <li>OAUTH2</li> </ul> |
| Box | Cloud content management and file sharing service for businesses. | 273 | OAUTH2 |
| Brevo | Brevo (formerly Sendinblue) delivers email marketing, SMS campaigns, and marketing automation solutions, empowering businesses to nurture leads, engage audiences, and drive conversions. | 221 | API |
| Browserbase_tool | A browsing app that gets a URL, reads its contents, and returns it. | 1 | API |
| Bugbug | BugBug is a modern browser-based app for software testers, developers, or product managers in need of quick & reliable <em>test automation</em>. | 4 | API |
| Cal | Cal simplifies meeting coordination by providing shareable booking pages, calendar syncing, and availability management to streamline the scheduling process. | 142 | <ul> <li> API</li> <li>CALCOM AUTH</li> </ul> |
| Calendly | Calendly is an appointment scheduling tool that automates meeting invitations, availability checks, and reminders, helping individuals and teams avoid email back-and-forth. | 41 | OAUTH2 |
| Canva | The Canvas API provides programmatic access to various learning management features of the Canvas platform, including courses, users, enrollments, grades, and more. It supports OAuth2 for secure authentication and authorization. | 32 | OAUTH2 |
| Canvas | A web-based learning management system, or LMS used by learning institutions, educators, and students to access and manage online course learning materials and communicate about skill development and learning achievement. | 79 | <ul> <li>OAUTH2</li> <li>API</li> </ul> |
| Clickup | ClickUp unifies tasks, docs, goals, and chat in a single platform, allowing teams to plan, organize, and collaborate across projects with customizable workflows. | 126 | <ul> <li> OAUTH2</li> <li>API</li> </ul> |
| codeinterpreter | CodeInterpreter extends Python-based coding environments with integrated data analysis, enabling developers to run scripts, visualize results, and prototype solutions inside supported platform. | 4 | API |
| Coinbase | Coinbase provides APIs for cryptocurrency trading and management. | 6 | API |
| Composio | Composio enables AI Agents and LLMs to authenticate and integrate with various tools via function calling. | 12 | API |
| Composio_search | Composio Search is an all-in-one tool for searching and scraping the web. | 12 | API |
| Confluence | A tool for team collaboration and knowledge management. | 190 | OAUTH2 |
| Contentful | Contentful provides a content platform with APIs for managing and delivering content to apps and websites. | 3 | <ul> <li> OAUTH2</li> <li>API</li> </ul> |
| Crustdata | CrustData is an AI-powered data intelligence platform that provides real-time company and people data via APIs and webhooks, empowering B2B sales teams, AI SDRs, and investors to act on live signals. | 14 | API |
| Coda | Collaborative workspace platform that transforms documents into powerful tools for team productivity and project management | 97 | API |
| Dialpad | Cloud-based communication platform used for business interactions, providing features like voice calls, video meetings, messaging, and collaboration. | 192 | <ul> <li>OAUTH2</li> <li>API</li> </ul> |
| Discord | An instant messaging and VoIP social platform. | 169 | <ul> <li>OAUTH2</li> <li>BEARER</li> </ul> |
| Discordbot | Discordbot refers to automated programs on Discord servers, performing tasks like moderation, music playback, and user engagement to enhance community interactions. | 169 | <ul> <li>OAUTH2</li> <li>BEARER</li> </ul> |
| Docusign | DocuSign provides eSignature and digital agreement solutions, enabling businesses to send, sign, track, and manage documents electronically. | 342 | OAUTH2 |
| Dropbox | Dropbox is a file hosting service that offers cloud storage, file synchronization, personal cloud, and client software. | 9 | OAUTH2 |
| Dynamics365 | Dynamics 365 from Microsoft combines CRM, ERP, and productivity apps to streamline sales, marketing, customer service, and operations in one integrated platform. | 16 | OAUTH2 |
| Elevenlabs | Create natural AI voices instantly in any language - perfect for video creators, developers, and businesses. | 59 | API |
| Entelligence | Entelligence leverages artificial intelligence to provide insights, recommendations, and predictive analytics for businesses seeking data-driven decision-making capabilities. | 2 | API |
| Exa | The Exa class extends the base Tool class to interact with the Exa Search service, offering actions like Search, Similarlink, and Answer. These actions enable querying, finding similar links, and generating answers from search results. Currently, no triggers are defined, but they can be added as needed to enhance functionality. | 4 | API |
| Excel | Connect to Excel to create and manage spreadsheets. | 25 | OAUTH2 |
| Figma | A collaborative interface design tool. | 44 | <ul> <li>OAUTH2</li> <li>API</li> </ul> |
| Firecrawl | Firecrawl automates web crawling and data extraction, enabling organizations to gather content, index sites, and gain insights from online sources at scale. | 7 | API |
| Fireflies | Fireflies.ai helps your team transcribe, summarize, search, and analyze voice conversations. | 10 | API |
| Flutterwave | Flutterwave provides APIs for making and receiving payments in various currencies and countries. | 2 | API |
| Foursquare | Search for places and place recommendations from the Foursquare Places database. | 5 | API |
| Freshdesk | A customer support platform that provides help desk support with all the smart automation to get things done faster. | 7 | BASIC |
| Gmail | Connect to Gmail to send and manage emails. | 21 | <ul> <li> OAUTH2</li> <li>BEARER</li> </ul> |
| Gong | Gong is a platform for video meetings, call recording, and team collaboration. | 54 | API |
| Google_maps | Google Maps is a web mapping platform and consumer application offering satellite imagery, aerial photography, street maps, 360° interactive panoramic views of streets, real-time traffic conditions, and route planning for traveling by foot, car, bike, air, and public transportation. | 4 | <ul> <li> OAUTH2</li> <li>API</li> </ul> |
| Googleads | Connect to Google Ads to manage and create campaigns. | 4 | OAUTH2 |
| Googlebigquery | Connect to BigQuery to query BigData. | 1 | GOOGLE SERVICE ACCOUNT |
| Googlecalendar | Google Calendar is a time-management and scheduling calendar service developed by Google. | 12 | <ul> <li>OAUTH2</li> <li>BEARER</li> </ul> |
| Googledocs | Connect to Google Docs to perform various document-related actions. | 5 | <ul> <li>OAUTH2</li> <li>BEARER</li> </ul> |
| Googledrive | Connect to Google Drive account. | 10 | <ul> <li>OAUTH2</li> <li>BEARER</li> </ul> |
| Googlemeet | Google Meet is a video conferencing tool developed by Google. | 5 | OAUTH2 |
| Googlephotos | Google Photos is a photo and video storage service that is part of the Google Drive office suite. | 12 | OAUTH2 |
| Googlesheets | Google Sheets is a web-based spreadsheet program that is part of the Google Drive office suite. | 9 | OAUTH2 |
| Googlesuper | Google Super App combines all Google services including Drive, Calendar, Gmail, Sheets, Analytics, Ads, and more, providing a unified platform for seamless integration and management of your digital life. | 93 | <ul> <li>API </li> <li>OAUTH2</li> <li>BEARER</li> </ul> |
| Googletasks | Google Tasks provides a simple to-do list and task management system integrated into Gmail and Google Calendar for quick and easy tracking. | 11 | OAUTH2 |
| Gorgias | Integration for Gorgias, focusing on e-commerce enhancements. | 32 | OAUTH2 |
| Github | GitHub is a code hosting platform for version control and collaboration, offering Git-based repository management, issue tracking, and continuous integration features. | 908 | OAUTH2 |
| Hackernews | Cybersecurity news platform, delivering real-time updates, threat intelligence, data breach reports, expert analysis, and more. | 6 | API |
| Heygen | HeyGen is an innovative video platform that harnesses the power of generative AI to streamline your video creation process. | 35 | API |
| Hubspot | HubSpot is an inbound marketing, sales, and customer service platform integrating CRM, email automation, and analytics to facilitate lead nurturing and seamless customer experiences. | 229 | <ul> <li>OAUTH2</li> <li>BEARER</li> </ul> |
| Hugging Face | Connect to your users' Hugging face setup. | 1 | API |
| Intercom | A messaging platform that allows businesses to communicate with prospective and existing customers within their app, on their website, through social media, or via email. | 43 | OAUTH2 |
| Jira | Jira API tool. | 544 | <ul> <li> OAUTH2</li> <li>API</li> </ul> |
| Jungle Scout | Jungle Scout assists Amazon sellers with product research, sales estimates, and competitive insights to optimize inventory, pricing, and listing strategies. | 6 | API |
| Klaviyo | Klaviyo is a data-driven email and SMS marketing platform that allows e-commerce brands to deliver targeted messages, track conversions, and scale customer relationships. | 231 | <ul> <li> API</li> <li>OAUTH2</li> </ul> |
| Kommo | Kommo CRM (formerly amoCRM) integration tool for managing customer relationships, sales pipelines, and business processes. This tool enables the automation of various CRM operations. | 15 | OAUTH2 |
| Linear | Connect to Linear to create and manage issues, list projects, teams, and more. | 15 | <ul> <li> OAUTH2</li> <li>API</li> </ul> |
| Linkedin | Connect to Linked to send and manage emails. | 4 | OAUTH2 |
| Linkhut | Linkhut is a platform that allows users to save, organize, and share links. | 2 | OAUTH2 |
| Linkup | Search the Web for Relevant Results (RAG Use Case). | 1 | API |
| Listennotes | The best podcast search engine. | 26 | API |
| Lmnt | LMNT is an API for text-to-speech and voice cloning. | 7 | API |
| Mailchimp | Mailchimp is an email marketing and automation platform providing campaign templates, audience segmentation, and performance analytics to drive engagement and conversions. | 271 | OAUTH2 |
| Mem0 | Mem0 assists with AI-driven note-taking, knowledge recall, and productivity tools, allowing users to organize, search, and generate content from stored information. | 43 | API |
| Metaads | Meta Ads Marketing API Integration This tool provides access to Meta's Marketing API for managing ad campaigns, ad sets, ads, and custom audiences, as well as retrieving insights and analytics. | 16 | <ul> <li> OAUTH2</li> <li>API</li> </ul> |
| Microsoft_clarity | Microsoft Clarity is a free, easy-to-use tool that captures how real people use your site. <p> | 1 | BEARER |
| Microsoft_teams | Connect to Microsoft Teams to manage channels. | 13 | OAUTH2 |
| Mixpanel | Mixpanel is an analytics platform that helps companies measure user engagement and retention. <p> | 19 | BASIC |
| Monday | Monday is a cloud-based work operating system where teams create workflow apps in minutes to run their processes, projects, and everyday work. | 21 | OAUTH2 |
| Neon | Postgres, on a serverless platform designed to help you build reliable and scalable applications faster. | 69 | API |
| Notion | Notion centralizes notes, docs, wikis, and tasks in a unified workspace, letting teams build custom workflows for collaboration and knowledge management. | 23 | <ul> <li> OAUTH2</li> <li>API</li> </ul> |
| One_drive | OneDrive is Microsoft’s cloud storage solution enabling users to store, sync, and share files across devices, offering offline access, real-time collaboration, and enterprise-grade security. | 7 | OAUTH2 |
| Onepage | API for enriching user and company data, providing endpoints for token validation and generic search. | 2 | API |
| Open_sea | OpenSea is the world's first and largest NFT marketplace for NFTs and crypto collectibles. | 22 | API |
| Outlook | Outlook is Microsoft’s email and calendaring platform integrating contacts, tasks, and scheduling, enabling users to manage communications and events in a unified workspace. | 22 | OAUTH2 |
| Pagerduty | Integrate PagerDuty to manage incidents, schedules, and alerts directly from your application. | 357 | <ul> <li> OAUTH2</li> <li>API</li> </ul> |
| Perplexityai | The Perplexity tool interfaces with Perplexity AI's search service, offering advanced natural language processing for sophisticated searches. The PerplexityAISearch action allows for: - Query execution with AI models tailored to various search tasks. - Search customization through parameters affecting content generation. - Domain filtering to enhance search precision. - Real-time response streaming for dynamic applications. This action is highly configurable for a tailored search experience, suitable for a wide range of AI-driven applications. | 1 | API |
| Peopledatalabs | PeopleDataLabs provides B2B data enrichment and identity resolution, empowering organizations to build enriched user profiles and validate customer information. | 14 | API |
| Pipedrive | Pipedrive is a sales management tool built around pipeline visualization, lead tracking, activity reminders, and automation to keep deals progressing. | 275 | <ul> <li> OAUTH2</li> <li>BEARER</li> </ul> |
| Placekey | Placekey provides APIs for generating unique identifiers for physical places, enabling easy data matching and entity resolution. | 2 | API |
| Posthog | PostHog is an open-source product analytics platform tracking user interactions and behaviors to help teams refine features, improve funnels, and reduce churn. | 358 | API |
| Quickbooks | Quickbooks is a cloud-based accounting software that helps you manage your finances, track your income and expenses, and get insights into your business. | 13 | OAUTH2 |
| Ramp | Ramp is a comprehensive finance platform designed to help you manage your finances, track your income and expenses, and get insights into your business. The Ramp API provides developers with the tools to interact with the platform programmatically. | 8 | OAUTH2 |
| Recallai | Recall.ai provides a single API for meeting bots on every platform like Zoom, Google Meet, Microsoft Teams and more. | 8 | API |
| Reddit | Connect to Reddit to post and comment. | 9 | OAUTH2 |
| Resend | Connect to Resend to send emails. | 18 | API |
| Retellai | RetellAI captures calls and transcripts, enabling businesses to analyze conversations, extract insights, and enhance customer interactions in one centralized platform. | 10 | API |
| Rocketlane | Rocketlane specializes in customer onboarding and project delivery, providing shared workspaces, milestones, and status tracking to streamline implementations. | 6 | API |
| Salesforce | Salesforce is a leading CRM platform integrating sales, service, marketing, and analytics to build customer relationships and drive business growth. | 32 | OAUTH2 |
| Search AI | Connect to your users' Search AI setup. | 1 | API |
| Semanticscholar | Semantic Scholar is an AI-powered academic search engine that helps researchers discover and understand scientific literature. | 14 | API |
| Semrush | Semrush is a popular SEO tool suite that specializes in keyword research, competitor analysis, and Google Ad campaign optimization. | 36 | API |
| Sendgrid | SendGrid is a cloud-based email delivery platform providing transactional and marketing email services, with APIs for integration, analytics, and scalability. | 375 | API |
| Sentry | Integrate Sentry to manage your error tracking and monitoring. | 178 | BEARER |
| Serpapi | SerpApi provides a real-time API for structured search engine results, allowing developers to scrape, parse, and analyze SERP data for SEO and research. | 10 | API |
| Servicenow | Servicenow provides IT Service Management Transform service management to boost productivity and maximize ROI. | 5 | BASIC |
| Share_point | SharePoint is a Microsoft platform for document management and intranets, enabling teams to collaborate, store, and organize content securely and effectively. | 6 | OAUTH2 |
| Shortcut | Shortcut aligns product development work with company objectives so teams can execute with a shared purpose. | 122 | API |
| Shopify | A leading global commerce platform that allows anyone to sell online and in person. | 26 | <ul> <li> API</li> <li>OAUTH2</li> </ul> |
| Slack | Slack is a channel-based messaging platform. With Slack, people can work together more effectively, connect all their software tools and services, and find the information they need to do their best work — all within a secure, enterprise-grade environment. | 174 | <ul> <li> OAUTH2</li> <li>BEARER</li> </ul> |
| slackbot | Slackbot automates responses and reminders within Slack, assisting with tasks like onboarding, FAQs, and notifications to streamline team productivity. | 174 | <ul> <li> OAUTH2</li> <li>BEARER</li> </ul> |
| Snowflake | Connect to Snowflake to run queries. | 4 | BASIC |
| Stripe | Stripe is a payment processor that allows you to accept payments online. | 19 | API |
| Supabase | Supabase is an open-source backend-as-a-service providing a Postgres database, authentication, storage, and real-time subscription APIs for building modern applications. | 77 | <ul> <li> OAUTH2</li> <li>API</li> </ul> |
| Tavily | Tavily provides advanced search capabilities with various options including image inclusion, raw content, and domain filtering. | 1 | API |
| Textrazor | TextRazor offers state-of-the-art natural language processing tools, enabling advanced text analysis and understanding through their API. | 1 | API |
| Text_to_pdf | Convert text to PDF file. | 1 | API |
| Tinyurl | TinyURL provides APIs for shortening long URLs into compact, branded links and tracking link analytics. | 1 | API |
| Todoist | Todoist is a productivity app that helps manage tasks and projects. | 4 | OAUTH2 |
| Trello | A web-based, kanban-style, list-making application. | 323 | <ul> <li>OAUTH</li> <li>BEARER</li> </ul> |
| Twitter | Twitter, Inc. was an American social media company based in San Francisco, California, which operated and was named for its flagship social media network before its rebranding as X. | 72 | OAUTH2 |
| Twitter_media | Twitter Media focuses on multimedia tools and features within Twitter, allowing brands to leverage rich content for marketing campaigns | 1 | OAUTH |
| Typefully | Integrate Typefully to streamline and manage your AI-powered content creation. | 5 | API |
| Weathermap | WeatherMap provides visual weather data, forecasts, and mappings, helping users understand climate patterns or track severe weather conditions. | 1 | API |
| Weight & Biases | Connect to your users' Weights & Biases setup. | 1 | API |
| Whatsapp | Enables interaction with customers through the WhatsApp Business API for messaging and automation. | 5 | API |
| Workiom | Workiom provides APIs for automating workflows, integrating with various tools, and building custom applications. | 3 | API |
| Yousearch | YouSearch is a search engine or search tool that enables users to find relevant information, possibly with enhanced filtering or privacy-focused features. | 1 | API |
| Youtube | Youtube actions to interact with the app. | 11 | OAUTH2 |
| Zenrows | Connect to ZenRows to effortlessly scrape and extract web data, process it, and manage it using the powerful ZenRows API. | 1 | API |
| Zendesk | Zendesk is a customer service and sales platform that helps businesses manage customer communication and support. | 11 | OAUTH2 |
| Zoom | Zoom is a video conferencing and online meeting platform featuring breakout rooms, screen sharing, and integrations with various enterprise tools. | 172 | OAUTH2 |
| Zoominfo | ZoomInfo is a multi-platform operating system that revenue teams use to deliver business growth. | 14 | BASIC WITH JWT |
| Zoho | Zoho actions to interact with their CRM. | 6 | OAUTH2 |


## Add a Connection to Set Up Integration

To add a connection and configure an integration, follow the steps below:

<Note>You can also add a connection directly from the <b>Integration node</b> on the Tool Flow canvas. <a href="../../../ai-agents/tools/tool-flows/types-of-nodes/integration-node/">Learn more</a>.</Note>

1. [Access](../integrations/about-integrations.md#access-integrations) **Integrations**.
2. The next steps depend on whether you are setting up a connection for the first time or want to use an existing connection. <br />
    **Case 1**: For a first-time connection, follow these steps:
    
    * (Optional) In the **All Integrations** tab, select the **Category** and **Authorization** from the respective lists to filter the integration options.
    * Click the required integration from the [available options](./about-integrations.md#supported-integrations).

     **Case 2**: To select an existing/connected provider, click the **Connected** tab, and click the required provider.

3. Click **Add Connection** on the next page or the integrations listing page.

![add connection](./images/add-new-conn.png "add connection")




![connected integration](./images/connected-integration-add.png "connected integration")



4. The Configuration window is displayed, where you must enter the following information:
    * **Connection Name**: A unique name to identify the integration.
    * **Authorization Details** 
        * Configure the required authorization details in this section to securely connect to the tool and access external services. A provider may support more than one auth type. In this case, you must select the authentication type you want to set up for the integration, such as *OAuth2*, *Bearer Token*, *Basic Auth*, or *API*.

        <Note>You are allowed to select only one auth type for a connection.</Note>

        * The **Pre-authorize the integration** option is auto-selected, indicating that you must provide authentication credentials to interact with the tool or service. You can select the preferred authentication method, such as *OAuth2*, *Bearer*, or *Basic Auth*, from the available options to configure the credentials. 

        * Based on the selected authorization method, the relevant configuration fields automatically appear under each corresponding authorization type.

        **OAuth2**

        * Provide the connection name and select the configured **Auth Profile** in the **Custom** for authentication by the integration. [Learn more](../security-and-control/authorization-profile.md#add-authorization-profile) about adding an auth profile to your account.
        * **Custom auth**: Allows you to use a tailored authentication process, set up in the Platform, to connect to a service. This is an alternative to using any standard authentication flows like API or OAuth2 provided by the service.
        * Once an Auth Profile is selected, all its credentials are fetched and automatically populate the corresponding fields such as **Redirect URL**, **Scopes**, **Base URL**, and more.
        * No need to re-authenticate unless the authorization profile is deleted from your account.
        * Connecting to a provider with a deleted auth profile results in an error.
        * Deleted auth profiles no longer display in the **Custom** window during configuration
        * Click **Authorize** to test the integration for the selected Auth profile.

        ![click authorize](./images/click-authorize.png "click authorize")



        **Bearer Token**

        * When you select this auth type, you must enter the bearer token along with related information such as the *Base URL*, *API Key*, *Bot Token*, or other relevant credentials.
        * The required fields depend on the bearer authentication framework supported by the selected service provider.
        * Retrieve these values from the provider’s Admin console > **Settings** section.
        * Click **Test** to validate the connection. A success message is displayed once the connection is set up.

        ![test oauth](./images/click-test-oauth.png "test oauth")



        **API**

        * When you select this type, you must enter the **API Key** or **Access Token** for the service provider. 
        * Additional field inputs may be required based on the specific parameters needed to configure the provider.
        * Retrieve these values from the Admin console > **Settings** of your provider’s site.
        * Click **Test** to validate the connection.  A success message is displayed once the connection is set up.

        ![test validation](./images/test-validation.png "test validation")



      <Note>For other Authentication types, such as OAuth1, retrieve the required values from the admin console of your account on the provider’s site to configure the integration.</Note>

      **Basic Auth**

      * When you select this auth type, you must provide the required configuration values. For example, an **Amplitude** project requires an *API key* and *API secret*.
      * Retrieve these values from the Admin console > **Settings** of your provider’s site.
      * Click **Test** to validate the connection. A success message is displayed once the connection is set up.


         ![test validation for basic auth](./images/basic-auth-set-up.png "test validation for basic auth")




<ol start="5"><li>Click <b>Save</b> after successfully testing the connection.</li>
<Note>The <b>Save</b> button will not appear until all required inputs have been provided.</Note></ol>

A success message appears after setup.

You will be redirected to the following page, where all the connections for the provider are listed.

![integration summary](./images/integration-summary.png "integration summary")



### Manage Connection Errors

* During or after setting up a connection, errors may occur due to invalid credentials when [adding a connection](../../settings/integrations/about-integrations.md#add-a-connection-to-set-up-integration). 

* **View the error**
    * Navigate to the **Connected** section.
    * Select the connection.
    * Click the **Play** icon to test the connection.
    * Hover over the **warning sign**, which will display the reason for the issue.

    ![hover over error icon](./images/hover-over-error-connection.png "hover over error icon")



    You can also click **Edit**, go to the configuration window, and click **Test** to view the error.
      

    ![view error](./images/view-connection-error.png "view error")



* **Resolve the error**
    * Use the **Edit** functionality to provide the correct credentials in the configuration window.
    * Click **Test** to validate the connection.
    * Click **Save**.

## Manage Connected Integrations

You can view, edit, delete, and perform additional actions with connected integrations to your account in the **Connected** section.

![click connected tab](./images/click-connected-tab.png "click connected tab")



### View Summary

Once you click the integration in the **Connected** section, the list of configured connections is displayed with the following information:

* **Connection Name**: The unique name provided during the connection setup.
* **Added By**: The name of the admin/account user who added the connection.
* **Authorization Details**: *Pre-authorize* is displayed.
* **Integration Type**: API, OAuth2, Bearer, Basic Auth, etc., based on the type used.
* **Added on**: The date when the connection was added.
* **Action**: Allows you to test the connection or enable/disable it.


  ![view summary](./images/view-summary.png "view summary")



### Edit Integration

To edit the configuration for a connection, follow the steps below:

<Note>You cannot modify the connection name.</Note>

1. [Access](../integrations/about-integrations.md#access-integrations) **Integrations** → Click **Connected** → Select a connection.
2. For the connection, click the **Ellipses** icon → Select **Edit**.

![select edit integration](./images/select-edit-int.png "select edit integration")



3. In the configuration window, modify the required fields in the **Authorization Details** section.
4. (Optional) Click **Test** to validate the connection.
5. Click **Save**.
     

     ![save edited integration](./images/save-edited-integration.png "save edited integration")



A success message is displayed once the connection is updated.

### Delete Integration

To delete an integration, follow the steps below:

1. [Access](../integrations/about-integrations.md#access-integrations) **Integrations** → Click **Connected** → Select a connection.
2. Click the **Ellipses** icon → Select **Delete**.

   ![select delete](./images/select-delete-integration.png "select delete")



3. Click **Delete**.

  <Danger>This action is irreversible and will remove all associations of the connection from the the Platform.</Danger>

  ![delete connection](./images/delete-connection.png "delete connection")



  A success message appears, and the connection is removed from the system.

### Test Connection

To test a configured connection, follow the steps below:

1. [Access](../integrations/about-integrations.md#access-integrations) **Integrations** → Click **Connected** → Select a connection.
2. Click **Play** for the connection.

   ![test action](./images/action-play-icon.png "test action")



The connection is validated in the background, and any errors are highlighted with a **warning** icon. [Learn more](../integrations/about-integrations.md#manage-connection-errors) about managing errors.


![manage error](./images/manage-integration-error.png "manage error")



If there are no errors, a success message is displayed when the connection is established.

### Enable or Disable Connection

Enabling a connection makes it available for **user authentication** with the service provider. It also becomes accessible for use in the **Integration node** on the Tool Flow canvas. 

Use the toggle switch to enable (default setting) or disable the connection as needed.

![enable integration](./images/enable-integration.png "enable integration")


