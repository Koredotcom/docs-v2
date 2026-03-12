# Integration with Third-party Services

The **Integrations** feature connects your AI for Process account to third-party services, streamlining access to external workflows and automating workflows. Once connected, you can use these integrations from the workflow canvas to build high-quality AI applications. [Learn more](../../workflows/workflow-builder/types-of-nodes/integration-node.md) about the **Integration** node.

The AI for Process supports 120+ integrations with different authorization types. To enable secure access, create a connection using third-party authentication to verify users. The main authentication methods are:

* **API**: Authenticate by passing a token (usually in headers or query parameters). Used for API Key or Access Token integrations.
* **OAuth2**: Uses the OAuth2 industry-standard authorization framework to grant limited access to resources on a service without sharing passwords. The auth method uses the following concepts:
    * **Access Token**: A temporary token that the app uses to access the user’s resources.
    * **Scopes**: Specific permissions attached to the token. For example, a token may have a 'read email' scope, which allows an app to access your email data, or a 'write files' scope, which allows it to upload or edit files.
    * **Expires**: Tokens often have a time limit to increase security, meaning they become invalid after a set time period.
    * **Refresh Token**: Allows the app to obtain a new access token when the old one expires. No need to log in again.
* **Bearer**: Use a bearer token in the request header, usually within an OAuth2 workflow, to access protected resources. The server validates the token before granting access.
* **Basic Auth**: Authenticate using username and password in the request header. Credentials are sent with each request. Supported for ServiceNow, Freshdesk, Snowflake, Amplitude, and Mixpanel integrations.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>Other authentication methods for certain integrations include: <b>Basic</b>, <b>Basic with JWT</b>, <b>OAuth1</b>, and <b>custom authentication</b> defined by the service provider.</li>
<li>Some providers may support <b>multiple authentication methods</b>, allowing flexibility based on your integration needs.</li></ul></p>
</div>

## Access Integrations

To access the feature, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. On the left navigation menu → Click **Integrations**.
    
## Key Features

The features supported on the **Integrations** page include:

* **All Integrations and Connected Tabs**
  
    Click the **All Integrations** tab to see available integrations grouped by category. You can add a connection to these integrations using a supported authentication method, such as API, OAuth2, Bearer Token, or Basic Auth. AI-based integrations you can connect to include [AWS S3 Bucket](../integrations/integrate-with-s3-bucket.md), [Weight & Biases](../integrations/integrate-with-wandb.md), and [Hugging Face](../integrations/enable-hugging-face.md). The category you select filters which integrations are shown in this list.

     Once you configure and connect to a third-party service, that integration appears in the **Connected** section and is no longer visible in the **All Integrations** list. If you delete the connection, the integration will return to the **All Integrations** list, allowing you to reconnect in the future.
     <img src="../images/all-integrations-tab.png" alt="all integrations" title="all integrations"/>

* **Search Integration**: Enter the name in the **Search** field for full or partial matches.
<img src="../images/search-integration.png" alt="search integration" title="search integration"/>

* **Category Dropdown List**: The AI for Process supports multiple categories based on the purpose of the integration, such as AI and Machine Learning, Marketing and Social Media, E-commerce, and more. Select the relevant category or categories in the list and click **Apply** to view the corresponding integrations.
<img src="../images/select-category-of-integration.png" alt="change category" title="change category"/>


* **Authorization Dropdown List**: The available types for authentication methods are API, OAuth2, Bearer, and Basic Auth. Refer to the introduction of this article for more details. Select the required option(s) and click **Apply** to view the relevant integrations.
<img src="../images/select-category-integration.png" alt="select auth" title="select auth"/>

* **List View**: Click this icon to view the available integration options as a list with the following information:
    * **Connection Name**: The service provider’s name.
    * **Description**: A brief description of the purpose or type of integration.
    * **Type**: The authorization method.<img src="../images/list-view.png" alt="list view" title="list view"/>

* **Tile View**: This is the default view. Click this icon to view all the integrations as individual cards.
<img src="../images/tile-view.png" alt="tile view" title="tile view"/>

## Supported Integrations

The following third-party integrations are available on the AI for Process:

<table>
  <tr>
   <td><strong>INTEGRATION</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>SUPPORTED ACTIONS</strong>
   </td>
   <td><strong>SUPPORTED AUTHORIZATION TYPE(S)</strong>
   </td>
  </tr>
  <tr>
   <td>Acculynx
   </td>
   <td>Using the AccuLynx API, data can be seamlessly exchanged between AccuLynx and other applications for greater efficiency and productivity.
   </td>
   <td> 8
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Active_campaign
   </td>
   <td>ActiveCampaign provides APIs for marketing automation, customer relationship management (CRM), and email marketing.
   </td>
   <td> 7
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Affinity
   </td>
   <td>CRM focused on relationship intelligence, with other workflows and systems. This allows for data synchronization, workflow automation, and the sharing of relationship insights across different platforms. 
   </td>
   <td>20
   </td>
   <td>API
   </td>
  </tr>
  <tr>
   <td>Agencyzoom
   </td>
   <td>AgencyZoom is for the P&C insurance agent that is looking to increase sales, boost retention, and analyze agency & producer performance.
   </td>
   <td> 99
   </td>
   <td>
<ul>

<li> API</li>

<li>BASIC WITH JWT</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Ahrefs
   </td>
   <td>Ahrefs is an SEO and marketing platform offering site audits, keyword research, content analysis, and competitive insights to improve search rankings and drive organic traffic.
   </td>
   <td> 40
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Airtable
   </td>
   <td>Airtable is a low‒code platform that helps build next generation apps. Move beyond rigid workflows, and implement your critical data, and re-imagine workflows with AI.
   </td>
   <td> 17
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>BEARER</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Amplitude
   </td>
   <td>Amplitude Inc. is an American publicly trading company that develops digital analytics software.
   </td>
   <td> 16
   </td>
   <td> BASIC
   </td>
  </tr>
  <tr>
   <td>Apaleo
   </td>
   <td>API-first property management platform empowering hotel & apartment groups to create the ultimate experience for guests & staff.
   </td>
   <td>29
   </td>
   <td>OAUTH2
   </td>
  </tr>
  <tr>
   <td>Apollo
   </td>
   <td>Apollo is a CRM workflow that allows you to manage your contacts, leads, and opportunities.
   </td>
   <td> 17
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Asana
   </td>
   <td>workflow to help teams organize, track, and manage their work.
   </td>
   <td> 15
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Attio
   </td>
   <td>Attio is a fully customizable workspace for your team's relationships and workflows.
   </td>
   <td> 56
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>AWS S3 Bucket
   </td>
   <td> Connect to your users' AWS S3 bucket set.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Bamboohr
   </td>
   <td>BambooHR is an American technology company that provides human resources software as a service.
   </td>
   <td> 159
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Bill
   </td>
   <td>Integration with Bill.com API.
   </td>
   <td> 221
   </td>
   <td> BILLCOM AUTH
   </td>
  </tr>
  <tr>
   <td>Bitbucket
   </td>
   <td>Bitbucket is a Git-based code hosting and collaboration platform supporting private and public repositories, enabling teams to manage and review code through pull requests and integrations.
   </td>
   <td> 15
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Blackboard
   </td>
   <td>Anthology Adopt powered by Pendo allows institutions to gain insights on Blackboard Learn usage and take action through in-app messages, digital walkthrough guides, and tooltips.
   </td>
   <td> 314
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Bolna
   </td>
   <td>Create conversational voice agents using Bolna AI to enhance interactions, streamline operations, and automate support.
   </td>
   <td> 15
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Borneo
   </td>
   <td>Borneo is a data security and privacy platform designed for sensitive data discovery and remediation.
   </td>
   <td> 154
   </td>
   <td>
<ul>

<li> API</li>

<li>OAUTH2</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Box
   </td>
   <td>Cloud content management and file sharing service for businesses.
   </td>
   <td> 273
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Brevo
   </td>
   <td>Brevo (formerly Sendinblue) delivers email marketing, SMS campaigns, and marketing automation solutions, empowering businesses to nurture leads, engage audiences, and drive conversions.
   </td>
   <td> 221
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Browserbase_workflow
   </td>
   <td>A browsing app that gets a URL, reads its contents, and returns it.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Bugbug
   </td>
   <td>BugBug is a modern browser-based app for software testers, developers, or product managers in need of quick & reliable <em>test automation</em>.
   </td>
   <td> 4
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Cal
   </td>
   <td>Cal simplifies meeting coordination by providing shareable booking pages, calendar syncing, and availability management to streamline the scheduling process.
   </td>
   <td> 142
   </td>
   <td>
<ul>

<li> API</li>

<li>CALCOM AUTH</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Calendly
   </td>
   <td>Calendly is an appointment scheduling workflow that automates meeting invitations, availability checks, and reminders, helping individuals and teams avoid email back-and-forth.
   </td>
   <td> 41
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Canva
   </td>
   <td>The Canvas API provides programmatic access to various learning management features of the Canvas platform, including courses, users, enrollments, grades, and more. It supports OAuth2 for secure authentication and authorization.
   </td>
   <td> 32
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Canvas
   </td>
   <td>A web-based learning management system, or LMS used by learning institutions, educators, and students to access and manage online course learning materials and communicate about skill development and learning achievement.
   </td>
   <td>79
   </td>
   <td>
<ul>

<li>OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Clickup
   </td>
   <td>ClickUp unifies tasks, docs, goals, and chat in a single platform, allowing teams to plan, organize, and collaborate across projects with customizable workflows.
   </td>
   <td> 126
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>codeinterpreter
   </td>
   <td>CodeInterpreter extends Python-based coding environments with integrated data analysis, enabling developers to run scripts, visualize results, and prototype solutions inside supported platform.
   </td>
   <td> 4
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Coinbase
   </td>
   <td>Coinbase provides APIs for cryptocurrency trading and management.
   </td>
   <td> 6
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Composio
   </td>
   <td>Composio enables AI Agents and LLMs to authenticate and integrate with various workflows via function calling.
   </td>
   <td> 12
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Composio_search
   </td>
   <td>Composio Search is an all-in-one workflow for searching and scraping the web.
   </td>
   <td> 12
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Confluence
   </td>
   <td>A workflow for team collaboration and knowledge management.
   </td>
   <td> 190
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Contentful
   </td>
   <td>Contentful provides a content platform with APIs for managing and delivering content to apps and websites.
   </td>
   <td> 3
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Crustdata
   </td>
   <td>CrustData is an AI-powered data intelligence platform that provides real-time company and people data via APIs and webhooks, empowering B2B sales teams, AI SDRs, and investors to act on live signals.
   </td>
   <td> 14
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Coda
   </td>
   <td>Collaborative workspace platform that transforms documents into powerful workflows for team productivity and project management
   </td>
   <td> 97
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Dialpad
   </td>
   <td>Cloud-based communication platform used for business interactions, providing features like voice calls, video meetings, messaging, and collaboration. 
   </td>
   <td>192
   </td>
   <td>
<ul>

<li>OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Discord
   </td>
   <td>An instant messaging and VoIP social platform.
   </td>
   <td> 169
   </td>
   <td>
<ul>

<li>OAUTH2</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Discordbot
   </td>
   <td>Discordbot refers to automated programs on Discord servers, performing tasks like moderation, music playback, and user engagement to enhance community interactions.
   </td>
   <td> 169
   </td>
   <td>
<ul>

<li>OAUTH2</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Docusign
   </td>
   <td>DocuSign provides eSignature and digital agreement solutions, enabling businesses to send, sign, track, and manage documents electronically.
   </td>
   <td> 342
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Dropbox
   </td>
   <td>Dropbox is a file hosting service that offers cloud storage, file synchronization, personal cloud, and client software.
   </td>
   <td> 9
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Dynamics365
   </td>
   <td>Dynamics 365 from Microsoft combines CRM, ERP, and productivity apps to streamline sales, marketing, customer service, and operations in one integrated platform.
   </td>
   <td> 16
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Elevenlabs
   </td>
   <td>Create natural AI voices instantly in any language - perfect for video creators, developers, and businesses.
   </td>
   <td> 59
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Entelligence
   </td>
   <td>Entelligence leverages artificial intelligence to provide insights, recommendations, and predictive analytics for businesses seeking data-driven decision-making capabilities.
   </td>
   <td> 2
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Exa
   </td>
   <td>The Exa class extends the base workflow class to interact with the Exa Search service, offering actions like Search, Similarlink, and Answer. These actions enable querying, finding similar links, and generating answers from search results. Currently, no triggers are defined, but they can be added as needed to enhance functionality.
   </td>
   <td> 4
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Excel
   </td>
   <td>Connect to Excel to create and manage spreadsheets.
   </td>
   <td> 25
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Figma
   </td>
   <td>A collaborative interface design workflow.
   </td>
   <td> 44
   </td>
   <td>
<ul>

<li>OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Firecrawl
   </td>
   <td>Firecrawl automates web crawling and data extraction, enabling organizations to gather content, index sites, and gain insights from online sources at scale.
   </td>
   <td> 7
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Fireflies
   </td>
   <td>Fireflies.ai helps your team transcribe, summarize, search, and analyze voice conversations.
   </td>
   <td> 10
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Flutterwave
   </td>
   <td>Flutterwave provides APIs for making and receiving payments in various currencies and countries.
   </td>
   <td> 2
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Foursquare
   </td>
   <td>Search for places and place recommendations from the Foursquare Places database.
   </td>
   <td> 5
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Freshdesk
   </td>
   <td>A customer support platform that provides help desk support with all the smart automation to get things done faster.
   </td>
   <td> 7
   </td>
   <td> BASIC
   </td>
  </tr>
  <tr>
   <td>Gmail
   </td>
   <td>Connect to Gmail to send and manage emails.
   </td>
   <td> 21
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Gong
   </td>
   <td>Gong is a platform for video meetings, call recording, and team collaboration.
   </td>
   <td> 54
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Google_maps
   </td>
   <td>Google Maps is a web mapping platform and consumer application offering satellite imagery, aerial photography, street maps, 360° interactive panoramic views of streets, real-time traffic conditions, and route planning for traveling by foot, car, bike, air, and public transportation.
   </td>
   <td> 4
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Googleads
   </td>
   <td>Connect to Google Ads to manage and create campaigns.
   </td>
   <td> 4
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Googlebigquery
   </td>
   <td>Connect to BigQuery to query BigData.
   </td>
   <td> 1
   </td>
   <td> GOOGLE SERVICE ACCOUNT
   </td>
  </tr>
  <tr>
   <td>Googlecalendar
   </td>
   <td>Google Calendar is a time-management and scheduling calendar service developed by Google.
   </td>
   <td> 12
   </td>
   <td>
<ul>

<li>OAUTH2</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Googledocs
   </td>
   <td>Connect to Google Docs to perform various document-related actions.
   </td>
   <td> 5
   </td>
   <td>
<ul>

<li>OAUTH2</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Googledrive
   </td>
   <td>Connect to Google Drive account.
   </td>
   <td> 10
   </td>
   <td>
<ul>

<li>OAUTH2</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Googlemeet
   </td>
   <td>Google Meet is a video conferencing workflow developed by Google.
   </td>
   <td> 5
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Googlephotos
   </td>
   <td>Google Photos is a photo and video storage service that is part of the Google Drive office suite.
   </td>
   <td> 12
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Googlesheets
   </td>
   <td>Google Sheets is a web-based spreadsheet program that is part of the Google Drive office suite.
   </td>
   <td> 9
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Googlesuper
   </td>
   <td>Google Super App combines all Google services including Drive, Calendar, Gmail, Sheets, Analytics, Ads, and more, providing a unified platform for seamless integration and management of your digital life.
   </td>
   <td> 93
   </td>
   <td>
<ul>

<li>API </li>

<li>OAUTH2</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Googletasks
   </td>
   <td>Google Tasks provides a simple to-do list and task management system integrated into Gmail and Google Calendar for quick and easy tracking.
   </td>
   <td> 11
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Gorgias
   </td>
   <td>Integration for Gorgias, focusing on e-commerce enhancements.
   </td>
   <td> 32
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Github
   </td>
   <td>GitHub is a code hosting platform for version control and collaboration, offering Git-based repository management, issue tracking, and continuous integration features.
   </td>
   <td> 908
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Hackernews
   </td>
   <td>Cybersecurity news platform, delivering real-time updates, threat intelligence, data breach reports, expert analysis, and more.
   </td>
   <td>6
   </td>
   <td>API
   </td>
  </tr>
  <tr>
   <td>Heygen
   </td>
   <td>HeyGen is an innovative video platform that harnesses the power of generative AI to streamline your video creation process.
   </td>
   <td> 35
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Hubspot
   </td>
   <td>HubSpot is an inbound marketing, sales, and customer service platform integrating CRM, email automation, and analytics to facilitate lead nurturing and seamless customer experiences.
   </td>
   <td> 229
   </td>
   <td>
<ul>

<li>OAUTH2</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Hugging Face
   </td>
   <td>Connect to your users' Hugging face setup.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Intercom
   </td>
   <td>A messaging platform that allows businesses to communicate with prospective and existing customers within their app, on their website, through social media, or via email.
   </td>
   <td> 43
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Jira
   </td>
   <td>Jira API workflow.
   </td>
   <td> 544
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Junglescout
   </td>
   <td>Jungle Scout assists Amazon sellers with product research, sales estimates, and competitive insights to optimize inventory, pricing, and listing strategies.
   </td>
   <td> 6
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Klaviyo
   </td>
   <td>Klaviyo is a data-driven email and SMS marketing platform that allows e-commerce brands to deliver targeted messages, track conversions, and scale customer relationships.
   </td>
   <td> 231
   </td>
   <td>
<ul>

<li> API</li>

<li>OAUTH2</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Kommo
   </td>
   <td>Kommo CRM (formerly amoCRM) integration workflow for managing customer relationships, sales pipelines, and business processes. This workflow enables the automation of various CRM operations.
   </td>
   <td> 15
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Linear
   </td>
   <td>Connect to Linear to create and manage issues, list projects, teams, and more.
   </td>
   <td> 15
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Linkedin
   </td>
   <td>Connect to Linked to send and manage emails.
   </td>
   <td> 4
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Linkhut
   </td>
   <td>Linkhut is a platform that allows users to save, organize, and share links.
   </td>
   <td> 2
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Linkup
   </td>
   <td>Search the Web for Relevant Results (RAG Use Case).
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Listennotes
   </td>
   <td>The best podcast search engine.
   </td>
   <td> 26
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Lmnt
   </td>
   <td>LMNT is an API for text-to-speech and voice cloning.
   </td>
   <td> 7
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Mailchimp
   </td>
   <td>Mailchimp is an email marketing and automation platform providing campaign templates, audience segmentation, and performance analytics to drive engagement and conversions.
   </td>
   <td> 271
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Mem0
   </td>
   <td>Mem0 assists with AI-driven note-taking, knowledge recall, and productivity workflows, allowing users to organize, search, and generate content from stored information.
   </td>
   <td> 43
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Metaads
   </td>
   <td>Meta Ads Marketing API Integration This workflow provides access to Meta's Marketing API for managing ad campaigns, ad sets, ads, and custom audiences, as well as retrieving insights and analytics.
   </td>
   <td> 16
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Microsoft_clarity
   </td>
   <td>Microsoft Clarity is a free, easy-to-use workflow that captures how real people use your site.
<p>
 
   </td>
   <td> 1
   </td>
   <td> BEARER
   </td>
  </tr>
  <tr>
   <td>Microsoft_teams
   </td>
   <td>Connect to Microsoft Teams to manage channels.
   </td>
   <td> 13
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Mixpanel
   </td>
   <td>Mixpanel is an analytics platform that helps companies measure user engagement and retention.
<p>
 
   </td>
   <td> 19
   </td>
   <td> BASIC
   </td>
  </tr>
  <tr>
   <td>Monday
   </td>
   <td>Monday is a cloud-based work operating system where teams create workflow apps in minutes to run their processes, projects, and everyday work.
   </td>
   <td> 21
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Neon
   </td>
   <td>Postgres, on a serverless platform designed to help you build reliable and scalable applications faster.
   </td>
   <td> 69
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Notion
   </td>
   <td>Notion centralizes notes, docs, wikis, and tasks in a unified workspace, letting teams build custom workflows for collaboration and knowledge management.
   </td>
   <td> 23
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>One_drive
   </td>
   <td>OneDrive is Microsoft’s cloud storage solution enabling users to store, sync, and share files across devices, offering offline access, real-time collaboration, and enterprise-grade security.
   </td>
   <td> 7
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Onepage
   </td>
   <td>API for enriching user and company data, providing endpoints for token validation and generic search.
   </td>
   <td> 2
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Open_sea
   </td>
   <td>OpenSea is the world's first and largest NFT marketplace for NFTs and crypto collectibles.
   </td>
   <td> 22
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Outlook
   </td>
   <td>Outlook is Microsoft’s email and calendaring platform integrating contacts, tasks, and scheduling, enabling users to manage communications and events in a unified workspace.
   </td>
   <td> 22
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Pagerduty
   </td>
   <td>Integrate PagerDuty to manage incidents, schedules, and alerts directly from your application.
   </td>
   <td> 357
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Perplexityai
   </td>
   <td>The Perplexity workflow interfaces with Perplexity AI's search service, offering advanced natural language processing for sophisticated searches. The PerplexityAISearch action allows for: - Query execution with AI models tailored to various search tasks. - Search customization through parameters affecting content generation. - Domain filtering to enhance search precision. - Real-time response streaming for dynamic applications. This action is highly configurable for a tailored search experience, suitable for a wide range of AI-driven applications.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Peopledatalabs
   </td>
   <td>PeopleDataLabs provides B2B data enrichment and identity resolution, empowering organizations to build enriched user profiles and validate customer information.
   </td>
   <td> 14
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Pipedrive
   </td>
   <td>Pipedrive is a sales management workflow built around pipeline visualization, lead tracking, activity reminders, and automation to keep deals progressing.
   </td>
   <td> 275
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Placekey
   </td>
   <td>Placekey provides APIs for generating unique identifiers for physical places, enabling easy data matching and entity resolution.
   </td>
   <td> 2
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>PostHog
   </td>
   <td>PostHog is an open-source product analytics platform tracking user interactions and behaviors to help teams refine features, improve funnels, and reduce churn.
   </td>
   <td> 358
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Quickbooks
   </td>
   <td>Quickbooks is a cloud-based accounting software that helps you manage your finances, track your income and expenses, and get insights into your business.
   </td>
   <td> 13
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Ramp
   </td>
   <td>Ramp is a comprehensive finance platform designed to help you manage your finances, track your income and expenses, and get insights into your business. The Ramp API provides developers with the workflows to interact with the platform programmatically.
   </td>
   <td> 8
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Recallai
   </td>
   <td>Recall.ai provides a single API for meeting bots on every platform like Zoom, Google Meet, Microsoft Teams and more.
   </td>
   <td> 8
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Reddit
   </td>
   <td>Connect to Reddit to post and comment.
   </td>
   <td> 9
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Resend
   </td>
   <td>Connect to Resend to send emails.
   </td>
   <td> 18
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Retellai
   </td>
   <td>RetellAI captures calls and transcripts, enabling businesses to analyze conversations, extract insights, and enhance customer interactions in one centralized platform.
   </td>
   <td> 10
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Rocketlane
   </td>
   <td>Rocketlane specializes in customer onboarding and project delivery, providing shared workspaces, milestones, and status tracking to streamline implementations.
   </td>
   <td> 6
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Salesforce
   </td>
   <td>Salesforce is a leading CRM platform integrating sales, service, marketing, and analytics to build customer relationships and drive business growth.
   </td>
   <td> 32
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Search AI
   </td>
   <td>Connect to your users' SearchAssist setup.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Semanticscholar
   </td>
   <td>Semantic Scholar is an AI-powered academic search engine that helps researchers discover and understand scientific literature.
   </td>
   <td> 14
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Semrush
   </td>
   <td>Semrush is a popular SEO workflow suite that specializes in keyword research, competitor analysis, and Google Ad campaign optimization.
   </td>
   <td> 36
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Sendgrid
   </td>
   <td>SendGrid is a cloud-based email delivery platform providing transactional and marketing email services, with APIs for integration, analytics, and scalability.
   </td>
   <td> 375
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Sentry
   </td>
   <td>Integrate Sentry to manage your error tracking and monitoring.
   </td>
   <td> 178
   </td>
   <td> BEARER
   </td>
  </tr>
  <tr>
   <td>Serpapi
   </td>
   <td>SerpApi provides a real-time API for structured search engine results, allowing developers to scrape, parse, and analyze SERP data for SEO and research.
   </td>
   <td> 10
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Servicenow
   </td>
   <td>Servicenow provides IT Service Management Transform service management to boost productivity and maximize ROI.
   </td>
   <td> 5
   </td>
   <td> BASIC
   </td>
  </tr>
  <tr>
   <td>Share_point
   </td>
   <td>SharePoint is a Microsoft platform for document management and intranets, enabling teams to collaborate, store, and organize content securely and effectively.
   </td>
   <td> 6
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Shortcut
   </td>
   <td>Shortcut aligns product development work with company objectives so teams can execute with a shared purpose.
   </td>
   <td> 122
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Shopify
   </td>
   <td>A leading global commerce platform that allows anyone to sell online and in person.
   </td>
   <td> 26
   </td>
   <td>
<ul>

<li> API</li>

<li>OAUTH2</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Slack
   </td>
   <td>Slack is a channel-based messaging platform. With Slack, people can work together more effectively, connect all their software workflows and services, and find the information they need to do their best work — all within a secure, enterprise-grade environment.
   </td>
   <td> 174
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>slackbot
   </td>
   <td>Slackbot automates responses and reminders within Slack, assisting with tasks like onboarding, FAQs, and notifications to streamline team productivity.
   </td>
   <td> 174
   </td>
   <td>
<ul>

<li>  OAUTH2</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Snowflake
   </td>
   <td>Connect to Snowflake to run queries.
   </td>
   <td> 4
   </td>
   <td> BASIC
   </td>
  </tr>
  <tr>
   <td>Stripe
   </td>
   <td>Stripe is a payment processor that allows you to accept payments online.
   </td>
   <td> 19
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Supabase
   </td>
   <td>Supabase is an open-source backend-as-a-service providing a Postgres database, authentication, storage, and real-time subscription APIs for building modern applications.
   </td>
   <td> 77
   </td>
   <td>
<ul>

<li> OAUTH2</li>

<li>API</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Tavily
   </td>
   <td>Tavily provides advanced search capabilities with various options including image inclusion, raw content, and domain filtering.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Textrazor
   </td>
   <td>TextRazor offers state-of-the-art natural language processing workflows, enabling advanced text analysis and understanding through their API.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Text_to_pdf
   </td>
   <td>Convert text to PDF file.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Tinyurl
   </td>
   <td>TinyURL provides APIs for shortening long URLs into compact, branded links and tracking link analytics.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Todoist
   </td>
   <td>Todoist is a productivity app that helps manage tasks and projects.
   </td>
   <td> 4
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Trello
   </td>
   <td>A web-based, kanban-style, list-making application.
   </td>
   <td> 323
   </td>
   <td>
<ul>

<li>OAUTH</li>

<li>BEARER</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Twitter
   </td>
   <td>Twitter, Inc. was an American social media company based in San Francisco, California, which operated and was named for its flagship social media network before its rebranding as X.
   </td>
   <td> 72
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Twitter_media
   </td>
   <td>Twitter Media focuses on multimedia workflows and features within Twitter, allowing brands to leverage rich content for marketing campaigns
   </td>
   <td> 1
   </td>
   <td> OAUTH
   </td>
  </tr>
  <tr>
   <td>Typefully
   </td>
   <td>Integrate Typefully to streamline and manage your AI-powered content creation.
   </td>
   <td> 5
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Weathermap
   </td>
   <td>WeatherMap provides visual weather data, forecasts, and mappings, helping users understand climate patterns or track severe weather conditions.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Weight & Biases
   </td>
   <td>Connect to your users' Weights & Biases setup.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Whatsapp
   </td>
   <td>Enables interaction with customers through the WhatsApp Business API for messaging and automation.
   </td>
   <td> 5
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Workiom
   </td>
   <td>Workiom provides APIs for automating workflows, integrating with various workflows, and building custom applications.
   </td>
   <td> 3
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Yousearch
   </td>
   <td>YouSearch is a search engine or search workflow that enables users to find relevant information, possibly with enhanced filtering or privacy-focused features.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Youtube
   </td>
   <td>Youtube actions to interact with the app.
   </td>
   <td> 11
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Zenrows
   </td>
   <td>Connect to ZenRows to effortlessly scrape and extract web data, process it, and manage it using the powerful ZenRows API.
   </td>
   <td> 1
   </td>
   <td> API
   </td>
  </tr>
  <tr>
   <td>Zendesk
   </td>
   <td>Zendesk is a customer service and sales platform that helps businesses manage customer communication and support.
   </td>
   <td> 11
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Zoom
   </td>
   <td>Zoom is a video conferencing and online meeting platform featuring breakout rooms, screen sharing, and integrations with various enterprise workflows.
   </td>
   <td> 172
   </td>
   <td> OAUTH2
   </td>
  </tr>
  <tr>
   <td>Zoominfo
   </td>
   <td>ZoomInfo is a multi-platform operating system that revenue teams use to deliver business growth.
   </td>
   <td> 14
   </td>
   <td> BASIC WITH JWT
   </td>
  </tr>
  <tr>
   <td>Zoho
   </td>
   <td>Zoho actions to interact with their CRM.
   </td>
   <td> 6
   </td>
   <td> OAUTH2
   </td>
  </tr>
</table>


## Add a Connection to Set Up Integration

To add a connection and configure an integration, follow the steps below:

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You can also add a connection directly from the <b>Integration node</b> on the Workflow canvas. [Learn more](../../workflows/workflow-builder/types-of-nodes/integration-node.md).</p>
</div>

1. [Access](../integrations/about-integrations.md#access-integrations) **Integrations**.
2. The next steps depend on whether you are setting up a connection for the first time or want to use an existing connection.
    **Case 1**: For a first-time connection, follow these steps:
    
    * (Optional) In the **All Integrations** tab, select the **Category** and **Authorization** from the respective lists to filter the integration options.
    * Click the required integration from the [available options](./about-integrations.md#supported-integrations).

     **Case 2**: To select an existing/connected provider, click the **Connected** tab, and click the required provider.

3. Click **Add Connection** on the next page or the integrations listing page.

<img src="../images/add-new-conn.png" alt="add connection" title="add connection"/>
<img src="../images/connected-integration-add.png" alt="connected integration" title="connected integration"/>

4. The Configuration window is displayed, where you must enter the following information:
    * **Connection Name**: A unique name to identify the integration.
    * **Authorization Details** 
        * Configure the required authorization details in this section to securely connect to the workflow and access external services. A provider may support more than one auth type. In this case, you must select the authentication type you want to set up for the integration, such as *OAuth2*, *Bearer Token*, *Basic Auth*, or *API*.

        <div class="admonition note">
        <p class="admonition-title">Note</p>
        <p>You are allowed to select only one auth type for a connection.</p>
        </div>

        * The **Pre-authorize the integration** option is auto-selected, indicating that you must provide authentication credentials to interact with the workflow or service. You can select the preferred authentication method, such as *OAuth2*, *Bearer*, or *Basic Auth*, from the available options to configure the credentials. 

        * Based on the selected authorization method, the relevant configuration fields automatically appear under each corresponding authorization type.

        **OAuth2**

        * Provide the connection name and select the configured **Auth Profile** in the **Custom** for authentication by the integration. [Learn more](../security-and-control/authorization-profile.md#add-authorization-profile) about adding an auth profile to your account.
        * **Custom auth**: Allows you to use a tailored authentication process, set up in the AI for Process, to connect to a service. This is an alternative to using any standard authentication flows like API or OAuth2 provided by the service.
        * Once an Auth Profile is selected, all its credentials are fetched and automatically populate the corresponding fields such as **Redirect URL**, **Scopes**, **Base URL**, and more.
        * No need to re-authenticate unless the authorization profile is deleted from your account.
        * Connecting to a provider with a deleted auth profile results in an error.
        * Deleted auth profiles no longer display in the **Custom** window during configuration
        * Click **Authorize** to test the integration for the selected Auth profile.
        <img src="../images/click-authorize.png" alt="click authorize" title="click authorize"/>

        **Bearer Token**

        * When you select this auth type, you must enter the bearer token along with related information such as the *Base URL*, *API Key*, *Bot Token*, or other relevant credentials.
        * The required fields depend on the bearer authentication framework supported by the selected service provider.
        * Retrieve these values from the provider’s Admin console > **Settings** section.
        * Click **Test** to validate the connection. A success message is displayed once the connection is set up.
        <img src="../images/click-test-oauth.png" alt="test oauth" title="test oauth"/>

        **API**

        * When you select this type, you must enter the **API Key** or **Access Token** for the service provider. 
        * Additional field inputs may be required based on the specific parameters needed to configure the provider.
        * Retrieve these values from the Admin console > **Settings** of your provider’s site.
        * Click **Test** to validate the connection.  A success message is displayed once the connection is set up.
        <img src="../images/test-validation.png" alt="test validation" title="test validation"/>

      <div class="admonition note">
      <p class="admonition-title">Note</p>
      <p>For other Authentication types, such as OAuth1, retrieve the required values from the admin console of your account on the provider’s site to configure the integration.</p>
      </div>

      **Basic Auth**

      * When you select this auth type, you must provide the required configuration values. For example, an **Amplitude** project requires an *API key* and *API secret*.
      * Retrieve these values from the Admin console > **Settings** of your provider’s site.
      * Click **Test** to validate the connection. A success message is displayed once the connection is set up.

         <img src="../images/basic-auth-set-up.png" alt="test validation for basic auth" title="test validation for basic auth"/>


<ol start="5"><li>Click <b>Save</b> after successfully testing the connection.</li>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The <b>Save</b> button will not appear until all required inputs have been provided.</p>
</div></ol>

A success message appears after setup.

You will be redirected to the following page, where all the connections for the provider are listed.
<img src="../images/established-integration-aip.png" alt="integration summary" title="integration summary"/>

### Manage Connection Errors

* During or after setting up a connection, errors may occur due to invalid credentials when [adding a connection](../../settings/integrations/about-integrations.md#add-a-connection-to-set-up-integration). 

* **View the error**
    * Navigate to the **Connected** section.
    * Select the connection.
    * Click the **Play** icon to test the connection.
    * Hover over the **warning sign**, which will display the reason for the issue.
    <img src="../images/hover-over-error-connection.png" alt="hover over error icon" title="hover over error icon" />

    You can also click **Edit**, go to the configuration window, and click **Test** to view the error.
      
    <img src="../images/view-connection-error.png" alt="view error" title="view error"/>

* **Resolve the error**
    * Use the **Edit** functionality to provide the correct credentials in the configuration window.
    * Click **Test** to validate the connection.
    * Click **Save**.

## Manage Connected Integrations

You can view, edit, delete, and perform additional actions with connected integrations to your account in the **Connected** section.
<img src="../images/click-connected-tab.png" alt="click connected tab" title="click connected tab"/>

### View Summary

Once you click the integration in the **Connected** section, the list of configured connections is displayed with the following information:

* **Connection Name**: The unique name provided during the connection setup.
* **Added By**: The name of the admin/account user who added the connection.
* **Authorization Details**: *Pre-authorize* is displayed.
* **Integration Type**: API, OAuth2, Bearer, Basic Auth, etc., based on the type used.
* **Added on**: The date when the connection was added.
* **Action**: Allows you to test the connection or enable/disable it.

  <img src="../images/view-summary.png" alt="view summary" title="view summary"/>

### Edit Integration

To edit the configuration for a connection, follow the steps below:

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You cannot modify the connection name.</p>
</div>

1. [Access](../integrations/about-integrations.md#access-integrations) **Integrations** → Click **Connected** → Select a connection.
2. For the connection, click the **Ellipses** icon → Select **Edit**.
<img src="../images/select-edit-int.png" alt="select edit integration" title="select edit integration"/>

3. In the configuration window, modify the required fields in the **Authorization Details** section.
4. (Optional) Click **Test** to validate the connection.
5. Click **Save**.
     
     <img src="../images/save-edited-integration.png" alt="save edited integration" title="save edited integration"/>

A success message is displayed once the connection is updated.

### Delete Integration

To delete an integration, follow the steps below:

1. [Access](../integrations/about-integrations.md#access-integrations) **Integrations** → Click **Connected** → Select a connection.
2. Click the **Ellipses** icon → Select **Delete**.
   <img src="../images/select-delete-integration.png" alt="select delete" title="select delete"/>

3. Click **Delete**.

  <div class="admonition warning">
  <p class="admonition-title">Caution</p>
  <p>This action is irreversible and will remove all associations of the connection from the AI for Process.</p></div>
  <img src="../images/delete-connection.png" alt="delete connection" title="delete connection"/>

  A success message appears, and the connection is removed from the system.

### Test Connection

To test a configured connection, follow the steps below:

1. [Access](../integrations/about-integrations.md#access-integrations) **Integrations** → Click **Connected** → Select a connection.
2. Click **Play** for the connection.
   <img src="../images/action-play-icon.png" alt="test action" title="test action"/>

The connection is validated in the background, and any errors are highlighted with a **warning** icon. [Learn more](../integrations/about-integrations.md#manage-connection-errors) about managing errors.

<img src="../images/manage-integration-error.png" alt="manage error" title="manage error"/>

If there are no errors, a success message is displayed when the connection is established.

### Enable or Disable Connection

Enabling a connection makes it available for **user authentication** with the service provider. It also becomes accessible for use in the **Integration node** on the workflow canvas. 

Use the toggle switch to enable (default setting) or disable the connection as needed.
<img src="../images/enable-integration.png" alt="enable integration" title="enable integration"/>

# Active Directory: Configuring Automatic User Data Synchronization

By configuring Active Directory (AD) import, you can seamlessly bring your organizational user information into the Settings console and keep it in sync with a single source of truth. This bulk import eliminates the need for email invitations or manual user info file imports, making the process more efficient. 

Moreover, the automatic synchronization (auto sync) feature ensures that Settings always has the most up-to-date user information, even reflecting deleted and modified records in the AD.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>An AD professional with the necessary technical expertise should handle the auto sync process.</p>
</div>

**Key Steps for Configuring AD Import**

1. [Set up the Connection](./active-directory.md#step-1-set-up-the-connection): Connect the **Settings** Console to your organization's AD to enable data import.
2. [Select and Import the Organizational Units (OUs)](./active-directory.md#step-2-import-organization-units): Choose specific OUs or all OUs from which to import key user information.
3. [Specify User Attributes and Configure Rules for Selective Import from AD](./active-directory.md#step-3-specify-user-attributes-and-configure-rules-for-selective-import-from-ad): Define desired user attributes (profile fields) that need to be imported from your active directory. Configure the inclusion and exclusion rules to control the information you need.
4. [Schedule Automatic AD Sync](./active-directory.md#step-4-schedule-automatic-ad-sync): Set up automatic or periodic sync schedules to keep user data current and reflect any changes or deletions from AD.

## Steps to Configure AD Sync 

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. On the **Users** dashboard, click the **Configure Directory** button in the **Configure sync with directory** section.
<img src="../images/configure-directory-button.png" alt="configure directory" title="configure directory"/>

3. Complete the setup by following the steps below in the **Configure Directory** window:

<div class="admonition note">
<p class="admonition-title">Note</p>
<ul><li>The left panel gives you complete control over the configuration process. Completed steps are marked by a check, and steps in progress are indicated by a dot, offering a clear and intuitive visual guide.</li>
<li>To complete the configuration, perform each step in order without skipping any.</li></ul>
</div>

### Step 1: Set up the Connection

1. Configure the AD connection by providing the following mandatory fields:

<ul><li><b>Host Name</b>: The domain's hostname or IP address where AD services run.</li>
<li><b>Server Port</b>: The network port number used by the domain host to communicate over the network.</li>
<li><b>Base DN</b>: The server location for users and groups in a domain.</li>
<li><b>User ID</b>: The identity used to log into the AD.</li>
<li><b>Password</b>: The password used to log into the AD.</li>
<li><b>(Optional) SSL</b>: Enable this option to secure communications over the web, particularly for services and applications that interact with AD via HTTPS.</li>
<img src="../images/configure-ad-connection.png" alt="configure ad connection" title="configure ad connection"/></ul>

<ol start="2"><li>Click <b>Next</b> to confirm the credentials before proceeding. If validation errors occur, they will be displayed on the screen so you can correct them before continuing.</li></ol>

### Step 2: Import Organization Units

Follow the steps below to configure and import user data from key organizational units such as Sales, Finance, or Operations in your AD:

1. Select one of the following options based on your requirements:

<ul><li><b>Import all organization units</b>: Imports user information from all the organization units.</li>
<li><b>Do not import organization units</b>: Do not import user information from any organization units in the AD.</li>
<li><b>Import only the following organization units</b>: Imports user information only from the organization unit you select.</li></ul>

<ol start="2"><li>Click <b>Next</b> to proceed to user profile fields mapping.
<img src="../images/org-units.png" alt="manage org units" title="manage org units"/></li></ol>

### Step 3: Specify User Attributes and Configure Rules for Selective Import from AD

In this configuration step, you can do the following:

* Define the LDAP user attributes (profile fields) to be imported from the AD.
* Establish inclusion and exclusion rules to filter data and import the necessary information. **Inclusion rules** define which user data to include in auto sync or import, focusing on relevant users who meet certain conditions. **Exclusion rules** determine which user data to exclude from the AD import.

To define both default (pre-defined) and custom fields during setup, follow the steps below:

1. (Optional) Select **Import users from active directory** to fetch the user default fields from the AD.
2. Click the **User Attributes** tab and select the value from the dropdown to map the field from the AD to the user attribute for all the fields under **Default Fields**.
<img src="../images/default-fields.png" alt="default fields" title="default fields"/>

3. (Optional) In addition to the default fields, you can add custom fields for your user profile information and map them to a corresponding field in the AD. To add a custom field mapping, follow the steps below:

<ul><li>Click <b>Add Field</b> in the <b>Custom Fields</b> section.</li>
<li>Enter the custom field you want to map to your user profile in the <b>Custom field name</b> textbox.</li>
<li>Enter the corresponding AD field in the <b>Field from Active Directory</b> textbox.</li>
<li>(Optional) Click the <b>tag</b> icon to set the custom field as the primary field. However, to delete this field, you must first remove the primary field tag.</li>
<li>Click <b>Next</b> to complete user profile fields' mapping and proceed.</li>
<img src="../images/custom-field-management.png" alt="manage custom field" title="manage custom field"/>
</ul>

To remove a field, click the **Delete** icon as shown below.

<img src="../images/delete-custom-field.png" alt="delete custom field" title="delete custom field"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Deleting a custom field is allowed only if you have added multiple fields.</p>
</div>

<ol start="4"><li>Next, define the rules and sync criteria to import specific users from your AD server. To do this, click the <b>Manage Inclusion & Exclusion Rules</b> tab.</li>
<li>Under <b>Inclusion Rules</b>, you can sync specific users from your AD Server by defining criteria or filters using profile parameters. Enter the rule expression using the user profile parameters in the <b>Rule Definition</b> textbox according to the LDAP filter syntax mentioned <a href="https://social.technet.microsoft.com/wiki/contents/articles/5392.active-directory-ldap-syntax-filters.aspx" >here</a>.</li>
<img src="../images/manage-rules.png" alt="manage rules" title="manage rules"/></ol>

<ol start="6"><li>(Optional) An <b>Exclusion Rule</b> includes the <b>AD/LDAP field</b>, <b>Match Type</b>, and <b>Value</b>. You must set <b>Match Type</b> for one of the following options:</li></ol>

* **Exact Match**: The user profile AD field must exactly match the **Value** field you specify. For example, if **Employee Vertical** must precisely match “Sales,” use this option.
* **Partial Match**: The user profile AD field can partially match or include the **Value** field you specify. For instance, if **Employee Vertical** should match part of “Product Sales” (such as “Product” or “Sales”), choose this option.
* **Multiple Matches**: The user profile AD field must match all the values you set in the **Value** field. For example, if **Employee Vertical** should match both “Product Sales” and “Service Sales,” select this option.

**Steps to Set Exclusion Rules**

To set an **Exclusion Rules**, follow the steps below:

1. Click **+Add exclusion** to add a new rule entry.
2. Select the entry to enable the exclusion rule.
3. Click **Next** to proceed. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>All mandatory fields must be filled in before you can proceed to the next step.Deleting a custom field is allowed only if you have added multiple fields.</p>
</div>

<img src="../images/add-exclusion.png" alt="add exclusion" title="add exclusion"/>

To delete a rule, hover over the entry and click the **Delete** icon.

<img src="../images/delete-rule.png" alt="delete rule" title="delete rule"/>

### Step 4: Schedule Automatic AD Sync

To finish configuring your directory, schedule auto sync for your AD. Enabling auto sync is **_optional_** but highly recommended to keep your AD data on AI for Process up-to-date. 

Auto sync will ensure that any changes in AD, such as user additions or deletions, are automatically reflected on AI for Process.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When Auto Sync is disabled, you must manually initiate AD sync by clicking the <b>Sync Now</b> button under <b>Configure Sync with Directory</b>.</p>
</div>

To enable and configure auto sync, follow the steps below:

1. Click the **Enable auto-sync** toggle.
<img src="../images/enable-auto-sync.png" alt="enable auto sync" title="enable auto sync"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You can run AD-Sync anytime by choosing the run now option on the settings page.</p>
</div>

<ol start="2"><li>Select the following sync fields:</li></ol>

* **Sync Frequency**: Select from _daily,_ _weekly_, _monthly_, or _other _sync periods. The default selection is _Daily_.
* **Sync Start**: Click the Calendar icon and choose a date from the widget to start the AD sync. The default selection is the current date. 
* **Time**: According to the selected sync frequency, select when the AD sync should occur. The default setting is 12:00 PM.

<div class="admonition note">
<p class="admonition-title">Note</p>
<ul><li>You can select only one date from the calendar for weekly and monthly syncs.</li>
<li>You can schedule the sync only with a future date and time from the default selections.</li></ul>
</div>

**Daily**

Selecting the Daily option means user data from AD synchronizes everyday starting from the date specified for **Start Sync** and continuing for the duration of the AD connection.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The default selection for <b>Start Sync</b> is the current date, which you can change.</p>
</div>

For example, the data syncs daily from 10 June 2024 at 12:00 PM.

<img src="../images/daily-schedule.png" alt="daily schedule" title="daily schedule"/>

**Weekly**

Selecting the **Weekly** option means user data from AD synchronizes on the selected day every week (**Repeat On** option), starting from the date you set for Start Sync and continuing for the duration of the AD connection.

For example, the data syncs every Thursday from 10 June 2024, at 12:00 PM.

<img src="../images/weekly-schedule.png" alt="weekly schedule" title="weekly schedule"/>

**Monthly**

Selecting **monthly** triggers synchronizes user data from the AD on the designated day of each month, starting from the specified **Start Sync** date and continuing throughout the duration of the AD connection.

For example, the data syncs on the 15th of each month, starting from 10 June 2024, at 12:00 PM.

<img src="../images/monthly-schedule.png" alt="monthly schedule" title="monthly schedule"/>

**Other**

Select **Other** to schedule AD syncs at intervals different from Daily, Weekly, or Monthly. This option allows you to schedule syncs that repeat after a specified number of days/weeks. The periodic sync occurs at the specified time starting from the selected start date.

For example, the data sync repeats every 60 days or weeks, starting 10 June 2024 at 12:00 PM.

<img src="../images/other-schedule.png" alt="other schedule" title="other schedule"/>

<ol start="3"><li>Click <b>Save</b>.</li>
<img src="../images/save-schedule.png" alt="save schedule" title="save schedule"/>
</ol>

If auto sync is disabled, clicking **Save** only saves the AD sync configuration. Enabling auto-sync saves the configuration and initiates syncing at the scheduled date and time.

When you set up AD sync for the first time, the following options appear under **Configure sync with directory**:

* **Sync now**: Performs an ad hoc AD sync. Select this option if you do not want to perform a scheduled sync.
* **Sync History**: Displays the history of AD syncs, including the comprehensive summary of the following:
  * **Date and Time**: Timestamp indicating when the sync occurred.
  * **By**: Identification of the individual who initiated the sync.
  * The number of **successful** and **failed** user records that got synced.
  <img src="../images/sync-history.png" alt="sync history" title="sync history"/>

* **Manage directory sync**: Displays the **Configure Directory** window where you can edit the existing configurations.
* **Reset**: Resets the AD sync configurations but retains the last sync data on AI for Process.
* **Sync Status**: This information summary displays the date of last sync, the total number of users and organization units synchronized, and any errors/issues encountered during the process. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Even if auto sync is turned off, you can click on the <b>Change</b> link in the sync status to access and schedule an auto sync on the configuration page.</p>
</div>

<img src="../images/configure-sync-with-directory.png" alt="configure sync with directory" title="configure sync with directory"/>

### Sync Status Email Notifications

For a **successful** sync, you will receive the following email:    

<img src="../images/success-sync.png" alt="success sync" title="success sync"/>

For a **failed** sync, you will receive the following email:    

<img src="../images/failed-sync.png" alt="failed sync" title="failed sync"/>

An alternative way to add users to your account (without using AD sync) is to invite them via email. 

To learn more about other administrator features on the **Settings** Console, click [here](../../../settings/overview.md).

# Manage Scopes and Keys for API Apps

AI for Process introduces **API scopes** in the **Settings** console, moving from unrestricted management API keys to more secure, scoped API key-based application management.

Users can select specific scopes for managing workflows, models, and guardrails. This allows for the creation of internal applications with restricted access to only the necessary API endpoints. By limiting API access, this feature reduces security risks, allowing administrators to generate multiple API keys and ensure secure, controlled access for authorized personnel.

**Important Considerations for API Keys**

* **Scope-restricted access**: API keys grant access exclusively to their assigned scopes.
* **Unauthorized access**: Any attempt to access unassigned scopes is automatically rejected.
* **Multiple keys per app**: You can generate multiple API keys for a single app.
* **One key per app**: An API key cannot be shared across multiple apps.
* **Immutable keys**: API keys can be deleted, but cannot be modified after they are created.
* **Copy-once policy**: For security reasons, each API key can only be copied once.

Users can rename an app, modify its selected scopes, or delete the app as needed. Once the admin defines or updates the API scopes, the changes are applied platform-wide, ensuring consistent and controlled access to the APIs wherever they are used. 

For more information on roles and permissions for API-scoped apps, please refer [here](../user-management/role-management.md#module-wise-permissions-and-access-levels).


## Use Case: Scoped API Access for Banking Departments

A bank automates workflows and integrates various internal systems across different departments, including **Risk & Compliance**, **Customer Support**, and **Marketing**. This requires access to APIs with different scopes.

* **Risk & Compliance Department**: This team requires access only to models and workflows for generating reports from transaction logs and audit trails. The admin creates a scoped app that grants access to workflows and models. This prevents the team from accidentally accessing unrelated customer information available for guardrails. 

* **Customer Support Department**: Support agents require access to monitoring AI customer interactions, but should not have access to risk and compliance workflows or model management. A scoped app ensures support teams stay within their operational boundaries.

By using API-scoped apps and API keys, the bank minimizes the risk of data exposure while maintaining security, ensuring compliance, and strictly regulating access to authorized system users.


## Supported API Scopes

The following API scopes are available for this feature.

<table>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Deploy workflow
   </td>
   <td>Deploy a specific workflow into an environment. It allows the user to control the deployment process either synchronously or asynchronously. [Learn more](../../workflows/deploy-a-workflow.md).
   </td>
  </tr>
  <tr>
   <td>Undeploy workflow
   </td>
   <td>Undeploy a workflow that is deployed in an environment.
   </td>
  </tr>
  <tr>
   <td>Deploy Model
   </td>
   <td>Deploy an open-source or fine-tuned model in the <strong><em>Ready to Deploy</em></strong> state.
   </td>
  </tr>
  <tr>
   <td>Undeploy Model
   </td>
   <td>Undeploy a model from the environment.
   </td>
  </tr>
  <tr>
   <td>Import Model
   </td>
   <td> Import a model in chunks into the AI for Process environment.
   </td>
  </tr>
  <tr>
   <td>Import workflow
   </td>
   <td>Import a new workflow into the system.
   </td>
  </tr>
  <tr>
   <td>Export Model
   </td>
   <td>Export a trained AI model from the system.
   </td>
  </tr>
  <tr>
   <td>Export workflow
   </td>
   <td>Export a workflow's configuration and associated data.
   </td>
  </tr>
  <tr>
   <td>Deploy Guardrails
   </td>
   <td>Deploy pre-defined <strong>guardrails</strong> to enhance security, compliance, and content moderation in AI interactions.
   </td>
  </tr>
  <tr>
   <td>Undeploy Guardrails
   </td>
   <td>Remove the previously deployed guardrails that regulate AI interactions.
   </td>
  </tr>
</table>

## Access API Scopes

To access this feature, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. Click **Security & Control** > **API Scopes** on the left navigation menu.

## Implement API Scoping

The key steps to implement API scoping include:

1. [Create an API app and assign scopes](../security-and-control/api-scopes.md#create-an-api-application): API-scoped apps have limited and specific permissions tied only to the API endpoints they need. Creating an API-scoped app enables you to restrict permissions, enhance security, better control and monitor access, and tailor the app specifically to meet the integration’s needs.
2. [Create one or more API Keys to access the app](../security-and-control/api-scopes.md#create-an-api-key): API keys for scoped apps provide secure, manageable, and auditable access control tailored to the app’s needs, making access and usage safer and easier to track.


### Create an API Application

To create an app, follow the steps below:

1. [Access](../security-and-control/api-scopes.md#access-api-scopes) **API Scopes**.
2. Click **Create an API App** or **Create an App**.
   <img src="../images/create-an-api-app.png" alt="create api app" title="create api app"/>

3. Click **Untitled app** and provide the app name.
    <img src="../images/provide-app-name.png" alt="provide app name" title="provide app name"/>

4. Select the required scopes from the list.
    <img src="../images/scopes-selection.png" alt="select scopes" title="select scopes"/>
 
5. Click **Next**. 


    A success message is displayed, and the following window is displayed. Follow the steps in the [next section](../security-and-control/api-scopes.md#create-an-api-key) to complete the process.

     <img src="../images/api-app-creation-success.png" alt="success app creation" title="success app creation"/>

### Create an API Key

This step is necessary to complete the app creation process. To create an API Key, follow the steps below:

1. Click **Create API Key**.
2. In the **Create new API key** dialog, provide a name and click **Generate Key**.
    <img src="../images/generate-your-new-api-key.png" alt="generate new api key" title="generate new api key"/>

3. Once the key is successfully generated, click **Copy and Close** to copy the API key.
   <img src="../images/create-new-api-key-window.png" alt="create new api key" title="create new api key"/>


A success message is displayed once the key is copied.

<div class="admonition note">
<p class="admonition-title">Important information on API Keys</p>
<p>For security reasons, the API key is only shown once and is not stored or displayed again. Copy and save it in a secure location for future reference.</p>
<p><b>What Happens If You Lose It?</b></p>
<p>You’ll need to revoke the old key and <b>generate a new one</b>. This could disrupt services if the key is in use.</p>
</div>   
 
The API key is listed for the app, as shown below.
<img src="../images/api-keys-list-for-apps.png" alt="api keys list" title="api keys list"/>

<ol start="4"><li>Click <b>Done</b></li>. 

The summary on the app displays the following information:

<ul><li><b>Name</b>: The API app name.</li>
<li><b>Scopes</b>: The selected API scopes.</li>
<li><b>Created by</b>: The name of the user who created the app.</li>
<li><b>Created on</b>: The date when the app was created.</li>
<img src="../images/api-apps-list.png" alt="apps list" title="apps list"/></ul></ol> 

## Manage API App and Key

You can edit or delete an API app, including its name and scopes. However, you cannot edit an API key; you can only delete it.       

### Edit App and Delete API Key

To edit an API app, follow the steps below:

1. Hover over and click the **Edit** icon for the required app.
    <img src="../images/hover-edit-api-scopes.png" alt="access edit icon" title="access edit icon"/>

2. In the App’s configuration window, do the following:

    * To change the app name, click and modify the title.
    * To change the scopes, click the **API Scopes** tab and select/unselect the listed scopes.
        <img src="../images/edit-api-app-name.png" alt="change api config" title="change api config"/>
         
    * To delete an API key, follow the steps below:
         * Click the **API Keys** tab.
         * Hover over and click the **Delete** icon for the required key.
           <img src="../images/hover-delete-api-key.png" alt="access delete icon" title="access delete icon"/>

         * Click **Delete** in the confirmation window.
            
            <img src="../images/del-api-key.png" alt="delete api keys" title="delete api keys"/>
            
            <div class="admonition warning">
            <p class="admonition-title">Caution</p>
            <p>The key you are deleting will no longer function if it is in use. You must generate a new key.</p>
             </div>

            The deleted key is removed from the app in the **API Keys** section and is no longer associated with the app.  

<ol start="3"><li>Click <b>Save</b>.</li>

A success message is displayed once the app is edited. The changes are updated in the summary page.

<img src="../images/edit-success-message-api-app.png" alt="edit success message" title="edit success message"/></ol>

### Delete App

To delete an API app, follow the steps below:

1. Hover over and click the **Delete** icon for the required app.
   <img src="../images/delete-api-app-icon.png" alt="access delete" title="access delete"/>

2. Click **Delete** in the confirmation window.

      <img src="../images/delete-api-app.png" alt="delete api app" title="delete api app"/>

A success message is displayed, and the app is removed from the list.

# Audit Logs - Track Account-level User Actions and Events

AI for Process' comprehensive **Audit Logs** on the **Settings** console provides full visibility into user actions and system interactions, tracking logins, role changes, and model updates through dynamic time-stamped logs and tracking capabilities.

This empowers admins to ensure compliance with internal policies and regulations, while proactively mitigating risks like data privacy breaches and algorithmic bias. 

Each log entry includes the following to provide actionable insights on account and workflow-level activities:

- Event name and category.
- The user who performed the action.
- Date and time of the event.
- Detailed description of the action.

<img src="../images/audit-logs-metadata.png" alt="audit logs metadata" title="audit logs metadata"/>

The event metadata provides business users with actionable insights, helping them in efficiently identifying patterns in user activities within their accounts. It also aids in detecting anomalies, spotting unauthorized usage, and enhancing overall account security.

You can specify a **current** or **past period** to view the logs and have complete visibility into the activities and modifications in your account. [Learn more](./audit-logs.md#steps-to-set-time-range-for-audit-logs).

Additionally, you can set **custom filters** based on a specific category, event, or user value to view only the required audit logs. [Learn more](./audit-logs.md#steps-to-add-a-custom-filter).

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>The <b>IP Address</b> is fetched from the user’s current network.</li>
<li><b>User ID</b>, <b>Role ID</b>, <b>Model ID</b>, <b>Workflow ID</b>, <b>Guardrail ID</b>, <b>Integration ID</b>, and <b>Experiment ID</b> pertain to the unique identifier associated with the module’s entity in the system.</li></ul></p></div>

## Account-Level Audit Logs

<div class="admonition warning">
<p class="admonition-title">Universal Metadata</p>
<p>The <b>User ID</b> and <b>IP Address</b> are shown for audit log entries across all modules, in addition to module and category-specific metadata listed in the table below.</p></div>

<table>
    <tr>
   <td colspan="3" align="center"><strong>Category</strong>: Login/Logout
   </td>
  </tr>
  <tr>
   <td colspan="3" ><b>Metadata</b>: <strong><i>Email ID</i></strong> is displayed for all the category events below.
   </td>
  </tr>
    <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Login
   </td>
   <td>Tracks the account login activity.
   </td>
   <td>
<ul>
<li>Login method
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Logout
   </td>
   <td>Tracks the account logout activity.
   </td>
   <td align="center">
    -
   </td>
  </tr>
  </table>

  <table>
  <tr>
     <td colspan="3" align="center"><strong>Category</strong>: Roles
   </td>
   </tr>
  <tr>
   <td colspan="3"><b>Metadata</b>: <strong><i>Role ID</i></strong> is displayed for all the category events below, except <em>Role Changed</em>.
   </td>
  </tr>
      <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
          <td>Role edited
   </td>
   <td>Tracks the edits done to a custom role.
   </td>
   <td align="center">
    -
   </td>
  </tr>
  <tr>
   <td>Role created
   </td>
   <td>Tracks the creation of custom roles.
   </td>
   <td rowspan="2" >
<ul>
<li>Role Type
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Role deleted
   </td>
   <td>Tracks the deletion of custom roles.
   </td>
  </tr>
  <tr>
   <td>Role changed
   </td>
   <td>Tracks the role changes made for member users. This also includes role  changes for multiple users (bulk change).
   </td>
   <td align="center">
    -
   </td>
  </tr>
  </table>

  <table>
  <tr>
     <td colspan="3" align="center"><strong>Category</strong>: App API Key
   </td>
   </tr>
  <tr>
   <td colspan="3"><b>Metadata</b>: <b>IP address</b> and <b>User Id</b> are displayed for all the events.
   </td>
  </tr>
      <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
          <td>App API Key created
   </td>
   <td>Tracks the creation of an App API key.
   </td>
   <td rowspan="2" align="center">
    -
   </td>
  </tr>
  <tr>
   <td>App API key deleted
   </td>
   <td>Tracks the deletion of an App API key.
   </td>
  </tr>
  </table>

  <table>
  <tr>
     <td colspan="3" align="center"><strong>Category</strong>: API App
   </td>
   </tr>
  <tr>
   <td colspan="3"><b>Metadata</b>: <b>App id</b>, <b>IP address</b> and <b>User Id</b> are displayed for all the events.
   </td>
  </tr>
      <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>API App created
   </td>
   <td>Tracks the creation of an API app.
   </td>
   <td rowspan="3" align="center">
    -
   </td>
  </tr>
  <tr>
   <td>API App deleted
   </td>
   <td>Tracks the deletion of an API app.
   </td>
  </tr>
    <tr>
   <td>API App updated
   </td>
   <td>Tracks the updates/changes of an API app.
   </td>
  </tr>
  </table>

  <table>
  <tr>
     <td colspan="3" align="center"><strong>Category</strong>: Integrations
   </td>
   </tr>
  <tr>
  <td colspan="3"><b>Metadata</b>: <b><i>IP Address</i></b>, <b><i>Integration Name</i></b>, <b><i>Integration ID</i></b>, <b><i>Integration Type</i></b>, and <b><i>User ID</i></b> are displayed for all the category events below.</td></tr>
        <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Integration added
   </td>
   <td>Tracks integrations added to the account.
   </td>
   <td rowspan="4" align="center">-</td>
   </tr>
  <tr>
   <td>Integration deleted
   </td>
   <td>Tracks integration deletions in the account.
   </td>
  </tr>
    <tr>
   <td>Integration disabled
   </td>
   <td>Tracks the disabling of an integration in the account.
   </td>
  </tr>
      <tr>
   <td>Integration edited
   </td>
   <td>Tracks the modification of an integration’s configuration data in the account.</td>
  </tr>
  </table>

  <table>
  <tr>
     <td colspan="3" align="center"><strong>Category</strong>: Models
   </td>
   </tr>
  <tr>
   <td colspan="3">
   <p><b>Metadata</b>:</p>
<ul>
<li><b><i>IP Address</i></b>, <b><i>User ID</i></b>, <strong><i>Model ID</i></strong> and <strong><i>Model Name</i></strong> are displayed for all the <em>Model</em> category events.
<li><strong><i>Model Type</i></strong> is displayed for <i>Model Added</i>, <em>Model Deleted</em>, <em>API Key created</em>, <em>API Key deleted</em>, <em>Model Fine-tuning</em>, <em>Model Deployed</em>, and <em>Model Undeployed </em>events.
<li><strong><i>Hardware Type</i></strong> is displayed for <em>Model fine-tuning</em>, <em>Model Deployed</em>, and <em>Model Undeployed</em> events.
</li>
</ul>
   </td>
  </tr>
   <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Model added</td>
   <td>Tracks the addition of models to the account.
   </td>
   <td rowspan="2">
   <ul><li>For open-source and fine-tuned models, the <i>Deployment Name</i> is displayed.</li>
   <li>For commercial models, the <i>Connection Name</i> is displayed.</li></ul>
   </td>
  </tr>
  <tr>
   <td>Model deleted
   </td>
   <td>Tracks the deletion of models from the account.
   </td>
  </tr>
  <tr>
   <td>API Key created
   </td>
   <td>Tracks the creation of an API key for a model in the account.
   </td>
   <td rowspan="2" align="center">
   -
   </td>
  </tr>
  <tr>
   <td>API Key deleted
   </td>
   <td>Tracks the deletion of an API key for a model.
   </td>
  </tr>
  <tr>
   <td>Model fine-tuning
   </td>
   <td>Tracks the fine-tuning process for models done.
   </td>
   <td>
<ul>
<li>Training method

<li>No. of epochs

<li>Batch size

<li>Learning rate

<li>Training dataset

<li>Test dataset

<li>Weights and Biases.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Model deployed
   </td>
   <td>Tracks the open-source model deployments in the account.
   </td>
   <td>
<ul>

<li>Temperature

<li>Max length

<li>Top p

<li>Top k

<li>Stop Sequence

<li>Inference batch size

<li>Min Replicas

<li>Max Replicas

<li>Scale up Delay

<li>Scale down Delay
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Model undeployed
   </td>
   <td>Tracks the open-source model undeployments in the account.
   </td>
   <td>
<ul>

<li> Hours of usage

<li> Temperature

<li>Max length

<li>Top p

<li>Top k

<li> Stop sequence

<li>Inference batch size

<li>Min replicas

<li>Max replicas

<li>Scale up delay

<li>Scale down delay

</li>
</ul>
   </td>
  </tr>
  </table>

  <table>
  <tr>
     <td colspan="3" align="center"><strong>Category</strong>: Workflows
   </td>
   </tr>
  <tr>
   <td colspan="3"><b>Metadata</b>: <strong><i>Workflow ID</i></strong> and <strong><i>Workflow Name</i></strong> are displayed for all the category events below.
   </td>
  </tr>
     <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Workflow created
   </td>
   <td>Tracks the creation of a workflow in the account.
   </td>
   <td align="center">
   -
   </td>
  </tr>
  <tr>
   <td>Workflow deleted
   </td>
   <td>Tracks the deletion of a workflow in the account.
   </td>
   <td>
<ul>

<li>Model ID

<li>Model Name

<li>Model Type
</li>
</ul>
   </td>
  </tr>
  </table>
<table>
  <tr>
     <td colspan="3" align="center"><strong>Category</strong>: Workflows Flow Management: Integration Node</td>
   </tr>
  <tr>
   <td colspan="3"><b>Metadata</b>: <b>User ID</b>, <b>IP Address</b>, <b>Agent ID</b>, <b>Node name</b>, <b>Node ID</b>, and <b>Node Type</b> are displayed for all the category events below.
   </td>
  </tr>
     <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Connection added
   </td>
   <td>Tracks the creation of a connection for an integration node.</td>
   <td align="center" rowspan="5">
   -
   </td>
  </tr>
  <tr>
   <td>Connection Modified
   </td>
   <td>Tracks the change of the selected connection for an integration node.</td>
  </tr>
    <tr>
   <td>Action Added
   </td>
   <td>Tracks the addition of an action for the selected connection and its configuration.</td>
  </tr>
      <tr>
   <td>Action Changed
   </td>
   <td>Tracks the change of the selected action.</td>
  </tr>
   <tr>
   <td>Action Edited
   </td>
   <td>Tracks the modification of action parameters for the defined action.</td>
  </tr>
  </table>
  <table>
    <tr>
     <td colspan="3" align="center"><strong>Category</strong>: Users Management
   </td>
   </tr>
      <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>User invited
   </td>
   <td>Tracks the invitation of new users to the account.
   </td>
   <td>
<ul>
<li>Added User IDs
<li>Role Name

<li>Role ID
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>User deleted
   </td>
   <td>Tracks the deletion of existing users from the account.
   </td>
   <td>
<ul>
<li>Removed User IDs
</li>
</ul>
   </td>
  </tr>
  </table>

  <table>
      <tr>
     <td colspan="3" align="center"><strong>Category</strong>: Prompts
   </td>
   </tr>
  <tr>
   <td colspan="3">
   <p><b>Metadata</b>:</p>
<ul>
<li><strong><i>Prompt ID</i></strong> is displayed for all the <em>Prompts </em>category events.
<li><strong><i>Prompt Name</i></strong> is displayed for <em>Prompt created</em>, <em>Versions Committed</em>, <em>Versions Restored</em>, <em>Prompt Shared</em>, <em>Endpoint Copied</em>, and <em>API Key Created </em>category events.
</li>
</ul>
   </td>
  </tr>
   <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Prompt created
   </td>
   <td>Tracks the creation of a prompt.
   </td>
   <td rowspan="2" align="center">
   -
   </td>
  </tr>
  <tr>
   <td>Prompt deleted
   </td>
   <td>Tracks the deletion of a prompt.
   </td>
  </tr>
  <tr>
   <td>Versions committed
   </td>
   <td>Tracks the prompt versions committed.
   </td>
   <td rowspan="2">
<ul>
<li>Version Name
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Version Restored
   </td>
   <td>Tracks the prompt version restored.
   </td>
  </tr>
  <tr>
   <td>Prompt Shared
   </td>
   <td>Tracks the prompts shared with other users.
   </td>
   <td rowspan="4" align="center">
   -
   </td>
  </tr>
  <tr>
   <td>Endpoint Copied
   </td>
   <td>Tracks the prompt endpoint copy done.
   </td>
  </tr>
    <tr>
   <td>Endpoint Consumed
   </td>
   <td>Tracks the prompt endpoint that was consumed externally.
   </td>
  </tr>
  <tr>
   <td>API Key Created
   </td>
   <td>Tracks the API key creation for the prompt endpoint.
   </td>
  </tr>
  <tr>
   <td>Generated Test Data
   </td>
   <td>Tracks the generation of test data.
   </td>
   <td rowspan="2" >
<ul>

<li>Model name

<li>Model ID

<li>Tokens Consumed
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Generated Prompt
   </td>
   <td>Tracks the prompt generation done by the account user.
   </td>
  </tr>
  </table>

  <table>
      <tr>
     <td colspan="3" align="center"><strong>Category</strong>: Dataset
   </td>
   </tr>
   <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Dataset uploaded
   </td>
   <td>Tracks the dataset uploads in the account.
   </td>
   <td>
<ul>
<li>File type(extension)
</li>
</ul>
   </td>
  </tr>
  </table>

   <table>
   <tr>
   <td colspan="3" align="center"><strong>Category</strong>: Manage Custom Scripts
   </td>
   </tr>
   <tr>
   <td colspan="3">
   <b>Metadata</b>: <b><i>user ID</i></b>, <b><i>user name</i></b>, <b><i>IP Address</i></b>, and <b><i>custom script name</i></b> are displayed for all the category events below.
   </td>
  </tr>
  <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Custom script saved as draft
   </td>
   <td>Tracks the custom script saved as a draft.
   </td>
   <td align="center">
    -
   </td>
  </tr>
  <tr>
   <td>Custom script deployed
   </td>
   <td>Tracks the custom script deployment.
   </td>
   <td align="center"> -
   </td>
  </tr>
    <tr>
   <td>Custom script undeployed
   </td>
   <td>Tracks the custom script undeployment.
   </td>
   <td align="center"> -
   </td>
  </tr>
      <tr>
   <td>Custom script re-deployed
   </td>
   <td>Tracks the custom script redeployment.
   </td>
   <td align="center"> -
   </td>
  </tr>
   <tr>
   <td>Custom script deleted
   </td>
   <td>Tracks the custom script deletion.
   </td>
   <td align="center"> -
   </td>
  </tr>
     <tr>
   <td>Custom script exported
   </td>
   <td>Tracks the custom script export.
   </td>
   <td align="center"> -
   </td>
  </tr>
  </table>

  <table>
     <tr>
     <td colspan="3" align="center"><strong>Category</strong>: Guardrails
   </td>
   </tr>
   <tr>
   <td colspan="3">
   <b>Metadata</b>: <strong><i>Guardrail Name</i></strong>, <strong><i>Guardrail ID</i></strong>, and <strong><i>Hardware Type</i></strong> are displayed for all the category events below.
   </td>
  </tr>
  <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Guardrails deployed
   </td>
   <td>Tracks the guardrails deployment in the account.
   </td>
   <td align="center">
    -
   </td>
  </tr>
  <tr>
   <td>Guardrails undeployed
   </td>
   <td>Tracks the guardrails undeployment in the account.
   </td>
   <td>
<ul>

<li>Time of Usage
</li>
</ul>
   </td>
  </tr>
</table>

<table>
     <tr>
     <td colspan="3" align="center"><strong>Category</strong>: Script
   </td>
   </tr>
   <tr>
   <td colspan="3">
   <b>Metadata</b>: <b><i>user ID</i></b>, <b><i>user name</i></b>, <b><i>IP address</i></b>,<b><i> Agent ID</b></i>, <b><i>node name</b></i>, <b><i>node ID</i></b>, and <b><i>node type</b></i> are displayed for all the category events below.
   </td>
  </tr>
  <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Write Code
   </td>
   <td>Tracks the user's selection to write a custom script.
   </td>
   <td align="center">
    -
   </td>
  </tr>
  <tr>
   <td>Custom Function</td>
   <td>Tracks the user's selection to execute a custom function.</td>
   <td align="center">-
   </td>
  </tr>
</table>

<table>
     <tr>
     <td colspan="3" align="center"><strong>Category</strong>: OCR
   </td>
   </tr>
   <tr>
   <td colspan="3">
   <b>Metadata</b>: All events record relevant user and system metadata, including user ID, user name (where applicable), IP address, connection name, connection ID, deployment name, and hardware type.
   </td>
  </tr>
  <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>OCR deployed
   </td>
   <td>Tracks the deployment of OCR models.
   </td>
   <td align="center">
    -
   </td>
  </tr>
  <tr>
   <td>OCR undeployed</td>
   <td>Tracks the undeployment of OCR models.</td>
   <td align="center">-
   </td>
  </tr>
    </tr>
  <tr>
   <td>OCR saved as draft</td>
   <td>Tracks when an OCR deployment is saved as a draft.</td>
   <td align="center">-
   </td>
  </tr>
    </tr>
  <tr>
   <td>Azure Doc Intelligence account added</td>
   <td>Tracks the addition of an Azure Doc Intelligence account.</td>
   <td align="center">-
   </td>
  </tr>
    </tr>
  <tr>
   <td>Azure Doc Intelligence account deleted</td>
   <td>Tracks the deletion of an Azure Doc Intelligence account.</td>
   <td align="center">-
   </td>
  </tr>

</table>





## Workflow-Level Audit Logs

<div class="admonition warning">
<p class="admonition-title">Universal Metadata</p>
<p>The <b>User ID</b>, <b>IP Address</b>, and <b>Workflow ID</b> are shown for audit log entries across all modules, in addition to module and category-specific metadata listed in the table below.</p></div>

<table>
  <tr>
   <td colspan="3" align="center"><strong>Category</strong>: User Management
   </td>
  </tr>
  <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Role Changed
   </td>
   <td>Tracks the change of a workflow role for an account user by a user.
   </td>
   <td rowspan="3" align="center">-
   </td>
  </tr>
  <tr>
   <td>Invited users
   </td>
   <td>Tracks the invitation of one or more users to the account at the workflow level.
   </td>
  </tr>
  <tr>
   <td>Removed Users
   </td>
   <td>Tracks the removal of one or more users from the account at the workflow level.
   </td>
  </tr>
  </table>
  <table>
  <tr>
   <td colspan="4" align="center"><strong>Category</strong>: Workflow Management
   </td>
  </tr>
  <tr>
   <td colspan="4" ><strong>workflow version</strong>,<strong> API mode</strong>,<strong> sync/async</strong>, and<strong> URL </strong>are displayed for all the category events below.
<p style="text-align: center">
<strong> </strong>
   </td>
  </tr>
  <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td colspan="3"><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Workflow Deployed</td>
   <td>Tracks the workflow deployments in the account.</td>
   <td rowspan="2" align="center">-</td>
  </tr>
  <tr>
   <td>Workflow Undeployed
   </td>
   <td>Tracks the workflow undeployments in the account.
   </td>
  </tr>
  <tr>
   <td colspan="4" ><strong>Version ID</strong> is displayed for all the category events below.
   </td>
  </tr>
  <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td colspan="2" ><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Version Created
   </td>
   <td>Tracks the workflow version creation.
   </td>
   <td rowspan="8" colspan="2" align="center">-
   </td>
  </tr>
  <tr>
   <td>Version Deleted
   </td>
   <td>Tracks the workflow version deletion.
   </td>
  </tr>
  <tr>
   <td>API Key created
<p>
 
   </td>
   <td>Tracks the workflow API Key creation.
   </td>
  </tr>
  <tr>
   <td>API Key deleted
   </td>
   <td>Tracks the workflow API Key deletion.
   </td>
  </tr>
  <tr>
   <td>workflow description updated
<p>
 
   </td>
   <td>Tracks the workflow description update done.
   </td>
  </tr>
  <tr>
   <td>workflow name updated
<p>
 
   </td>
   <td>Tracks the workflow name update done.
   </td>
  </tr>
  <tr>
   <td>workflow exported
<p>
 
   </td>
   <td>Tracks the workflow export done.
   </td>
  </tr>
  <tr>
   <td>API sync timeout updated
   </td>
   <td>Tracks the synchronous time update.
   </td>
  </tr>
  <tr>
  </tr>
  <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
   </tr>
  <tr>
   <td>API async enabled
<p>
 
   </td>
   <td>Tracks the enabling of the asynchronous mode.
   </td>
   <td rowspan="2" colspan="2" align="center"> <ul><li>URL</li> <li>Access token</li> <li>timeout: yes/no</li>
   <li>timeout value (if yes)</li></ul>
   </td>
  </tr>
  <tr>
   <td>API async updated
<p>
    </td>
   <td>Tracks the update of the asynchronous mode configurations.
   </td>
     </tr>
  <tr>
   <td>API async disabled
<p>
    </td>
   <td>Tracks the disabling of the asynchronous mode.
   </td>
      <td rowspan="4" colspan="2" align="center">-
   </td>
  </tr>
  <tr>
   <td>Environment variable added
<p>
 
   </td>
   <td>Tracks the addition of an environment variable.
   </td>
  </tr>
  <tr>
   <td>Environment variable deleted
<p>
 
   </td>
   <td>Tracks the deletion of an environment variable.
   </td>
  </tr>
  <tr>
   <td>Environment variable edited
   </td>
   <td>Tracks the modification of an environment variable.
   </td>
  </tr>
  </table>
  <table>
  <tr>
   <td colspan="4" align="center"><strong>Category</strong>: Guardrails
   </td>
  </tr>
  <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Input scanner added
   </td>
   <td>Tracks the addition of an input scanner.
   </td>
   <td rowspan="6" colspan="2" align="center">-
   </td>
  </tr>
  <tr>
   <td>Input scanner edited
   </td>
   <td>Tracks the modification of an input scanner.
   </td>
  </tr>
  <tr>
   <td>Input scanner removed
   </td>
   <td>Tracks the deletion of an input scanner.
   </td>
  </tr>
  <tr>
   <td>Output scanner added
   </td>
   <td>Tracks the addition of an output scanner.
   </td>
  </tr>
  <tr>
   <td>Output scanner edited
   </td>
   <td>Tracks the modification of an output scanner.
   </td>
  </tr>
  <tr>
   <td>Output scanner removed</td>
   <td>Tracks the deletion of an output scanner.
   </td>
  </tr>
  </table>

<table>
     <tr>
     <td colspan="3" align="center"><strong>Category</strong>: OCR
   </td>
   </tr>
   <tr>
   <td colspan="3">
   <b>Metadata</b>: All workflow node events record relevant user and system metadata, including user ID, IP address, Agent ID, node name, node ID, and node type.
   </td>
  </tr>
  <tr>
   <td><strong>Event</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Additional Metadata</strong>
   </td>
  </tr>
  <tr>
   <td>Node name edited
   </td>
   <td>Tracks when a node’s name is edited.
   </td>
   <td align="center">
    -
   </td>
  </tr>
  <tr>
   <td>Node deleted</td>
   <td>Tracks  when a node is deleted.</td>
   <td align="center">-
   </td>
  </tr>
    </tr>
  <tr>
   <td>Description added</td>
   <td>Tracks when a description is added to a node.</td>
   <td align="center">-
   </td>
  </tr>
    </tr>
  <tr>
   <td>Description edited</td>
   <td>Tracks when a node’s description is modified.</td>
   <td align="center">-
   </td>
  </tr>
    </tr>
  <tr>
   <td>Engine added</td>
   <td>Tracks when an engine is added to a node.</td>
   <td align="center">-
   </td>
  </tr>
  <tr>
   <td>Engine edited</td>
   <td>Tracks when a node's engine is modified.</td>
   <td align="center">-
   </td>
  </tr>
    <tr>
   <td>Connection added</td>
   <td>Tracks when a connection is added to a node.</td>
   <td align="center">-
   </td>
  </tr>
    <tr>
   <td>Connection modified</td>
   <td>Tracks when a node’s connection is modified.</td>
   <td align="center">-
   </td>
  </tr>
    <tr>
   <td>Base URL edited</td>
   <td>Tracks  when the Base URL of a node is modified.</td>
   <td align="center">-
   </td>
  </tr>
</table>



## Access Audit Logs

To access and view audit logs, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. Click **Monitoring** > **Audit Logs** on the left menu.
   
## Dashboard Information

The **Audit Logs** dashboard displays the following information to collectively provide a comprehensive overview of activities within your AI for Process account:

* **Event Name:** Describes the specific event or action that occurred.
* **Category:** Identifies the module or entity affected by the event.
* **User Name:** Specifies the name of the user who performed the action or triggered the event.
* **Date and Time:** Represents when the event occurred.
* **Description:** Provides detailed information about what was done.
<img src="../images/audit-logs-dashboard.png" alt="audit logs dashboard" title="audit logs dashboard"/>

## Filter Audit Logs

You can narrow down the information displayed in your account's audit logs by applying custom filters. 

These filters allow you to select specific categories, events, or users and then apply operators like **Is** **Equal To** or **Is Not Equal To** to specify the desired value. 

This customization helps you focus on relevant audit logs, making it easier to track or investigate specific actions or users within your account.

### Steps to Add a Custom Filter

1. [Navigate](./audit-logs.md#access-audit-logs) to **Audit Logs**.
2. Click the **Filter** icon.
3. Click **+Add Filter**.
<img src="../images/add-filter-audit-logs.png" alt="add filter" title="audit logs"/>

4. In the **Filter By** window, select the required option from the dropdown list for **Select Column**, **Select Operator**, and **Enter Value**.
<img src="../images/select-filter-from-dropdown.png" alt="select filter" title="select filter"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When you use "<b>Is Equal To</b>," the audit logs only show entries that match the specified value. Conversely, when you use "<b>Is Not Equal To</b>," the logs display all entries except those that match the specified value.</p></div>

For example, applying the filter <b>Event Is Equal To Role Created</b>, as shown below, displays only the logs for the role creation event.

<img src="../images/example-filter.png" alt="example filter" title="example filter"/>

To view the logs for all the events except role creation, you must set the filter as follows:

<img src="../images/view-all-logs.png" alt="view all logs" title="view all logs"/>

<ol start="5"><li>Click <b>Apply</b>.</li></ol>

All the log entries relevant to the applied filter(s) are displayed, as shown below.
<img src="../images/log-entries.png" alt="log entries" title="log entries"/>

To clear the filter settings, click **Clear All**.

<img src="../images/clear-all-filters.png" alt="clear all filters" title="clear all filters"/>

The number of filters you have applied is displayed on the **Filter** icon.
<img src="../images/applied-filters.png" alt="applied filters" title="applied filters"/>

### Add Multiple Filters

You can enhance your audit log visibility by adding multiple filters. This capability allows you to specify detailed criteria such as specific categories, events, or users, enabling you to obtain fine-grained results. 

By combining filters, you can precisely focus on and analyze the audit log entries that are most relevant to your requirements.

When adding multiple filters to refine your audit log queries, you can use the **AND** or **OR** operators in multiple filtering steps effectively. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Consistency in operator usage is required for each filtering step. This means you need to use either the AND operator or the OR operator throughout all criteria.

Both operators can't be used together.</p></div>

<img src="../images/operators-mutually-exclusive.png" alt="mutually exclusive operators" title="mutually exclusive operators"/>

Using the AND operator ensures that all specified conditions must be met for an entry to be included in the results. 

On the other hand, using the OR operator broadens the criteria, allowing entries that meet any of the specified conditions to be included. These operators provide flexibility in tailoring your audit log views.

#### Steps to Add Multiple Filters

1. Follow **Steps 1 to 3** mentioned [here](./audit-logs.md#steps-to-add-a-custom-filter).
2. Select the **AND/OR** operator tab in the **Filter by** window.

    <img src="../images/filter-operators.png" alt="filter operators" title="filter operators"/>

3. Follow **Steps 4 to 5** mentioned [here](./audit-logs.md#steps-to-add-a-custom-filter).

The matched log entries are displayed in the dashboard. 

## Time-based Audit Logs

You can view and monitor audit logs within a specific period with the time selection feature. This capability allows you to focus on audit log entries that occurred within a defined time-frame, and track changes.

Time selection is available for past and current time periods, including the ones listed below:

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><b>Last 30 Days</b> is the default selection, which displays logs for the past 30 days from the current date.</p></div>

* **All Time**: Displays logs since the time the account was created.
* **Today**: Includes audit logs generated on the current day.
* **Yesterday**:  Includes audit logs generated on the previous day.
* **This Week**: Displays logs for all the days in the current week.
* **This Month**: Displays logs for all the days in the current month.
* **Last Month**: Displays logs for all the days in the previous month.
* **Last 30 Days**: Displays logs for the past 30 days from the current date, if events’ data exists.
* **Last 90 Days**: Displays logs for the past 90 days from the current date.
* **This Year**: Displays logs for all the days in the current year.
* **Last Year**: Displays logs for all the days in the past year.

### Steps to Set Time Range for Audit Logs

1. [Navigate](./audit-logs.md#access-audit-logs) to the **Audit Logs** dashboard.
2. Click the time selection button (displays **Last 30 Days**).
<img src="../images/click-time-selection.png" alt="time selection" title="time selection"/>

3. Select the required period on the left panel, or select a specific date, month or year on the calendar widget (the current day is the default selection).
4. Click **Apply**.
<img src="../images/apply-changes.png" alt="apply changes" title="apply changes"/>

The audit logs for events that occurred within the selected time period are displayed. 

### Key Considerations and Tips

The time range is automatically selected on the calendar widget once you select the period. Also, the date range is displayed at the bottom of the widget.

<img src="../images/time-range-display.png" alt="time range display" title="time range display"/>

You can select a specific month or year from the relevant dropdown list and switch to different months by clicking the **forward/backward** arrows.

<img src="../images/forward-back-arrows.png" alt="pagination arrows" title="pagination arrows"/>

To set a specific date as the start date for viewing audit logs, click on the desired date in the widget. 

By default, the current day will be set as the end date. This feature allows you to easily customize the period for which you want to monitor and analyze audit logs.

<img src="../images/custom-start-date.png" alt="custom start date" title="custom start date"/>

## Export Audit Logs

The **Export** feature helps prepare and export [account-level audit logs](./audit-logs.md#account-level-audit-logs) into a *.csv* file. The audit logs data for the following columns is downloaded. [Learn more](./audit-logs.md#dashboard-information).

* Date and Time
* Event Name
* Event Category
* Description
* User/App Name
* **IP Address**: The user's network IP address linked to the specific event.

Exporting audit logs offers the following benefits:

* **Detailed Analysis**: CSV format allows you to perform in-depth analysis of log data to identify patterns or anomalies over time, while supporting transparency and accountability.
* **Easy Sharing and Reporting**: CSV files of audit logs are easy to share with other stakeholders or integrate them into reporting workflows.
* **Compliance and Record-Keeping**: Having a documented trail in a standardized format is useful for compliance and regulatory audits, ensuring data is readily available when needed.
* **Automation and Integration**: CSVs can be imported into other workflows or systems, enabling automation and integration into workflows for continuous monitoring and alerts.

To export audit logs, follow the steps below:

1. [Navigate](./audit-logs.md#access-audit-logs) to the **Audit Logs** dashboard.
2. Click the **Export** icon next to the **Filter By** icon.
<img src="../images/export-audit-logs.png" alt="export audit logs" title="export audit logs"/>

A success message is displayed once the file is downloaded. The file can be found in the configured location in your system.

The downloaded *.CSV* file is automatically named as <code><em>Account_Audit_Logs</em></code>. The schema of the output file is shown below.

<img src="../images/csv-file-export-audit-logs.png" alt="csv file example" title="csv file example"/>

AI for Process’ Audit Logs promotes transparency and accountability in AI operations, helping build trust internally and externally. 

You can confidently scale AI initiatives with event-based user activity logs to manage compliance and ensure responsible use of generative AI.

## Related Information

* [Settings Console](../overview.md)- Learn more about other AI for Process admin features.
* [Users Management](../user-management/overview.md)- Manage users linked to your account.
* [Role Management](../user-management/role-management.md)- View and manage system and custom roles for your account.
* [Workflow Flow Change Logs](../../workflows/workflow-builder/workflow-canvas-change-log.md)- Track, audit, and review changes made to a workflow.





# Secure Account Access Using Authorization Profiles

AI for Process offers a secure and streamlined way to manage authorization when integrating with external web services. By configuring **Authorization (Auth) Profiles**, users can enforce access control policies while ensuring data privacy and regulatory compliance.

Whether connecting to external or commercial models via custom APIs or integrating workflows through the AI or API node, the platform provides a structured framework to handle user authorization. This simplifies security configurations, strengthens access control, and enables smooth identity verification across various services.

Key capabilities of managing Auth Profiles on AI for Process include:



* **Defining Authorization Rules**
Specify auth methods and requirements, such as passwords, token fields, and custom authorization parameters.
* **Securing Access**
Ensure only authorized users or systems can connect to external services, protecting sensitive data from unauthorized access.
* **Profile Reusability** 
Reuse Auth Profiles across multiple integrations and endpoints for consistency, reduced configuration effort, and streamlined maintenance.
* **Connection Testing and Validation**
Verify that identity and authorization tokens are correctly passed to external services, ensuring the integration is secure and functional.

## Access Authorization Profile

To access the feature, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. Click **Security & Control** > **Authorization profile** on the left navigation menu.

## Supported Auth Models

You can enable a single auth profile or create custom profiles tailored for accessing third-party web services. These profiles support the following authorization types:


### OAuth V2

OAuth 2.0 (OAuth2) is a standard authorization framework that enables applications to obtain limited, secure, and token-based access to a user’s account on an HTTP service, such as Google, Facebook, or GitHub without exposing the user's credentials. It supports multiple grant types, uses scopes for permissions, and enables long-term access with refresh tokens, making it ideal for API authentication.

**Key Features**

* **Secure, Token-Based Authorization** – Grants access without sharing user credentials, using short-lived access tokens. 

* **Multiple Authorization Flows** – Supports different grant types (e.g., Authorization Code, Client Credentials) for various use cases. 

* **Scope-Based Access Control** – Users can grant apps limited permissions (e.g., read-only access). 

* **Refresh Token Support** –  Enables seamless re-authorization without requiring user login. 

* **Third-Party & Scalable Integration** – Widely adopted for API authentication, allowing secure third-party access (e.g., "*Sign in with Google*").

### OAuth V2 Client Credential

The Client Credentials flow is one of the OAuth 2.0 authorization grant types. It is primarily used in Machine-to-Machine (M2M) scenarios, where an application needs to access resources or perform operations on its own behalf — without user interaction.

**How it Works**

1. The client application authenticates with the Authorization Server by presenting its client ID and client secret.

2. Upon successful authentication, the Authorization Server issues an access token.

3. The client uses this token to authenticate API requests to the Resource Server.

**Key Features**

* **Client Credentials**: This flow uses the client's unique identifier (client ID) and a secret (client secret) to authenticate the application with the authorization server. 
* **No User Interaction**: Unlike flows involving user authorization (e.g., authorization code flow), the client credentials flow doesn't require the user to log in or grant permissions. 
* **Machine-to-Machine (M2M) Communication**: This flow is ideal for scenarios where one application needs to access resources owned by another application, such as microservices or server-to-server communication. 
* **Resource Access**: The client uses the acquired access token to interact with the resource server and access protected resources. 
* **Access Token**: The authorization server issues an access token, a short-lived credential that allows the client to access specific resources. 

## Add Authorization Profile

To add a new Auth profile, you must first set up the required auth fields with the steps below: 

1. [Navigate](../security-and-control/authorization-profile.md#access-authorization-profile) to the **Authorization Profile** feature.
2. Click **Create Authorization Profile** if this is your first auth profile.
<img src="../images/click-create-auth-profile.png" alt="create auth profile" title="create auth profile"/>  

Otherwise, click **Add new auth**.
<img src="../images/add-new-auth-profile.png" alt="add new auth profile" title="add new auth profile"/>  

<ol start="3"><li>In the <b>New Authorization Mechanism</b> dialog, select the required option for <b>Authorization Type</b>.</li> 
<img src="../images/select-oauthv2.png" alt="select oauth v2" title="select oauth v2"/></ol>  
<ol start="4"><li>In the <b>Identity Provider Name</b> field, enter a name for the authorization type, which is mandatory.
<img src="../images/identity-provider.png" alt="identity provider" title="identity provider"/></li>
<li>Provide the values for the mandatory authorization fields. For details, refer to the <a href="#define-authorization-fields" >Define Authorization Fields</a> section. 

If the mandatory fields are left blank, validation error messages appear, as shown below.

<img src="../images/form-validation-errors.png" alt="validation errors" title="validation errors"/></li>
<li>(Optional) Click <b>+ Add Additional Field</b> to add additional fields for authorization. See the <a href="#add-additional-field" >Add Additional Field</a> section.</li></ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If the default <b>Username</b> and <b>Password</b> fields do not meet your authorization requirements, you can add <b>custom fields</b> using additional fields or authorization IDP form fields to the authorization process. For example, if a <b>PIN code</b> is required in addition to the standard login fields, you can include it as an extra input for the end user.</p>
</div>
    
<ol start="7"><li>(Optional step to be executed only when you select <b><i>OAuth V2</i></b> as the Authorization type) Click <b>+ Add Authorization Field</b> to add additional auth fields to your profile. This is required For more information, see the <a href="#add-authorization-field" >Add Authorization Field</a> section.</li>
<li>Click <b>Save new Auth</b>.</li>
<img src="../images/save-new-auth.png" alt="save new auth" title="save new auth"/></ol>

A success message is displayed, and the new auth profile is added to the **Authorization Profile** page.

## Define Authorization Fields

To configure the OAuth2 profile, define the fields described in the table below:

 <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>Except for <b>Scope</b>, <b>Description</b>, <b>Refresh Token URL</b>, <b>Additional fields</b>, <b>Authorization fields</b>, and <b>Auth Error Status Code</b>, all the fields are mandatory.</p>
    </div>

<table>
  <tr>
   <td>FIELD NAME
   </td>
   <td>DESCRIPTION
   </td>
   <td>MANDATE
   </td>
   <td>AUTH TYPE</td>
  </tr>
  <tr>
   <td><strong>Authorization Type</strong>
   </td>
   <td>Select an option from the dropdown. <i>OAuth V2</i> and <i>OAuth v2 Client Credential</i> are currently supported.
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Identity Provider Name</strong>
   </td>
   <td>The name of the identity provider or service, for example, <em>Okta.</em>
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>Enter a description for your auth profile.
   </td>
   <td>Optional
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Callback URL</strong>
   </td>
   <td>The endpoint in an OAuth 2.0 flow where the authorization server redirects the user after they grant or deny permission. It is used to return the authorization code or access token to the client application. The default URL is provided in the form. 
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Client ID</strong>
   </td>
   <td>
    A unique identifier assigned that helps the authorization server recognize the application making authorization or API access requests. It helps in the following:
<ul>

<li>Used in <strong>OAuth flows</strong> to obtain access tokens</li>

<li>Helps in tracking and logging API requests</li>

<li>Ensures security by linking requests to a registered client.</li>
</ul>
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Client Secret</strong>
   </td>
   <td>
    A confidential key assigned to an application to authenticate its identity when requesting access tokens from the authorization server, ensuring secure and authorized API access.
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Authorization URL</strong>
   </td>
   <td>
    The endpoint where users are redirected to authenticate and grant permissions to an application before it can access protected resources on their behalf. Example: <code>https://auth.networks.com/oauth/authorize</code>
   </td>
   <td>Required
   </td>
   <td>OAuth V2</td>
  </tr>
  <tr>
   <td><strong>Subdomain(aka tenancy URL)</strong>
   </td>
   <td>
    A unique URL assigned to a specific tenant (organization, customer, or user group) within a multi-tenant system. It is used to differentiate and isolate data, authorization, and access for each tenant. You must select one of the following options based on your auth profile:
<ul>

<li>No, this workflow and all of its tasks do not have tenancy URLs.</li>

<li>Yes, some tasks will have tenancy URLs and the user will need to provide that to successfully authenticate.</li>
</ul>
   </td>
   <td>Required
   </td>
   <td>OAuth V2</td>
  </tr>
  <tr>
   <td><strong>Token request URL</strong>
   </td>
   <td>
    The endpoint where a client application exchanges an <strong>authorization code</strong> or <strong>refresh token</strong> for an <strong>access token</strong>. This token allows the client to authenticate API requests on behalf of the user.
   </td>
   <td>Required
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Scope</strong>
   </td>
   <td>
    Defines the level of access that a client application is requesting from the resource owner (user). It specifies what <strong>actions</strong> the application is allowed to perform and what <strong>resources</strong> it can access.  
Example: <code>read_profile</code>.
   </td>
   <td>Optional
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
  <tr>
   <td><strong>Additional Fields</strong>
   </td>
   <td>
    Refer <a href="#add-additional-field" >here</a>.
   </td>
   <td>Optional
   </td>
   <td>OAuth V2</td>
  </tr>
  <tr>
   <td><strong>Authorization Fields</strong>
   </td>
   <td>
    Refer <a href="#add-authorization-field" >here</a>.</td>
   <td>Optional
   </td>
   <td>OAuth V2</td>
  </tr>
  <tr>
   <td><strong>Refresh token URL</strong>
   </td>
   <td>
    The endpoint where a client application sends a request to obtain a new <strong>access token</strong> using a <strong>refresh token</strong> (whenever the access token expires). Example: <code>https://auth.networks.com/oauth/access</code>

<p><strong>Note</strong>: When the <strong>Refresh Token URL</strong> or refresh token expires, the following happens:
<ul>

<li>The auth profile starts failing everywhere it is used.</li>

<li>The user will receive an email to reconfigure a new URL or refresh token to ensure continuous and uninterrupted service.</li>
</ul></p>
   </td>
   <td>Optional
   </td>
   <td>OAuth V2</td>
  </tr>
  <tr>
   <td><strong>Auth Error Status Code</strong>
   </td>
   <td>
    When authorization fails in OAuth 2.0, the server returns an HTTP status code along with an error message to indicate the issue.
   </td>
   <td>Optional
   </td>
   <td>OAuth V2 and OAuth v2 Client Credential</td>
  </tr>
</table>

## Add Additional Field

These fields are used to collect additional authorization details from end users and allow you to incorporate extra security measures, such as a PIN code, device ID, or other parameters, alongside the standard credentials for *OAuth V2*. By customizing the authorization input fields, you can enhance security and align the authorization process with your specific business or compliance needs.


To add additional fields, follow the steps below:

1. Click **+ Add Additional Field** in the **New Authorization Mechanism** window and enter one or more key-value pairs.

    <img src="../images/add-additional-field-click.png" alt="add additional field" title="add additional field"/>

2. Add values for the following fields:

<table>
  <tr>
   <td>PARAMETER
   </td>
   <td>DESCRIPTION
   </td>
   <td>REQUIRED/OPTIONAL
   </td>
   <td>EXAMPLE
   </td>
  </tr>
  <tr>
   <td><strong>Field Key</strong>
   </td>
   <td>The name of the additional field. 
   </td>
   <td>Required
   </td>
   <td>Pin code
   </td>
  </tr>
  <tr>
   <td><strong>Field Value</strong>
   </td>
   <td>The value for the additional field.
   </td>
   <td>Required
   </td>
   <td>2344567
   </td>
  </tr>
</table>

<ol start="3"><li>Click <b>Done</b>.</li>
    <img src="../images/add-additional-field-form.png" alt="add additional field form" title="add additional field form"/></ol>

The new field is added to the additional fields list. You can edit or delete this custom field.
<img src="../images/new-additional-field.png" alt="new additional field" title="new additional field"/>

## Add Authorization Field

Authorization fields are data fields used in API requests to verify the identity of a user, system, or application and determine their permissions to access resources. These fields ensure authorization and access control in APIs, particularly for token-based authorization in AI for Process.


To add auth fields, follow the steps below:

1. Click **+ Add Authorization Field** in the **New Authorization Mechanism** window and enter one or more key/value pairs.
<img src="../images/add-auth-field-new.png" alt="add new auth field" title="add new auth field"/>

2. Add values for the following fields:

<table>
  <tr>
   <td>
<strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>Field Type
   </td>
   <td>Defines how authorization data is sent and verified in an API request within AI for Process for token-based authorization. The supported types include:
<ul>

<li><strong>Header</strong>: Used to send authorization credentials, such as API tokens.</li>

<li><strong>Payload</strong>: Used in <code>POST</code> or <code>PUT</code> requests, sending credentials in the request body.</li>

<li><strong>Query String</strong><em>:</em> Credentials are passed in the URL.</li>

<li><strong>Path Param</strong>: Credentials or tokens are included in the URL path.</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Field Key
   </td>
   <td>The name of the auth field. Example: <em>Profile_id.</em>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Field Value
   </td>
   <td>The value of the auth field. Example: <em>123_xyz</em>.
   </td>
   <td>Optional
   </td>
  </tr>
</table>


<ol start="3"><li>Click <b>Done</b>.</li></ol>

<img src="../images/auth-field-form.png" alt="auth field form" title="auth field form"/>  

The new field is added to the Authorization Fields list.  You can edit or delete this custom field.
<img src="../images/new-auth-field-listing.png" alt="new auth field" title="new auth field"/>


## Authorization Profile Summary

Each authorization you add to your account is displayed in the **Authorization Profile** window with the following options:

* **Name**: The name you provide to the Auth profile you create.
* **Authorization Type**: The method/type set for the Auth Profile. Currently, only **oauth v2** is available.
* **Test auth**: Click the **Test** button corresponding to a configured profile to check if it establishes a connection with an external service based on the configured profile.
* **Status**: Displays **Configured** or **Not Configured** based on the configuration status.
    
<img src="../images/auth-profile-summary.png" alt="auth profile summary" title="auth profile summary"/>  

## Test the Auth Profile

The **Test** button is enabled when you provide all the fields in the **New authorization mechanism** window. To validate the connection using the configured mechanism, click **Test**.

A new window appears where AI for Process tries to establish a connection with the external service through the configured auth profile.

A successful connection is shown below:

<img src="../images/successful-oauth-connection.png" alt="successful connection" title="successful connection"/>  

If the connection fails, edit the auth profile with the correct information and test the connection again. 

## Manage Auth Profile

You can either edit the configured values of an auth profile or delete it from the system.

### Edit

1. Click the **Ellipses** icon for an Auth profile on the **Authorization Profile** page. 
2. Click **Edit**.
<img src="../images/edit-auth-profile.png" alt="edit auth profile" title="edit auth profile"/>  

3. Modify the required fields in the **Update authorization mechanism** window.
4. Click **Update new auth**.
<img src="../images/update-new-auth.png" alt="update new auth" title="update new auth"/>  

<div class="admonition note">
<p class="admonition-title">Important</p>
<p>The <b>Authorization Type</b> and <b>Name</b> fields cannot be edited, but all other parameters can be modified.</p>
</div>

A success message appears when the auth profile information is updated.

### Delete

To delete an Auth profile, follow the steps below:

1. Click the **Ellipses** icon and select **Delete**.
<img src="../images/delete-auth-profile.png" alt="delete auth profile" title="delete auth profile"/>  

2. Click **Delete** in the following window.

    <img src="../images/confirm-deletion.png" alt="confirm delete auth profile" title="confirm delete auth profile"/>  

A success message is displayed, and the profile is removed from the **Authorization profile** page.

<div class="admonition warning">
<p class="admonition-title">Caution</p>
<p>Deleted profiles cannot be recovered. Proceed with caution.</p>
</div>

# Manage Account Billing and Usage

The Billing section helps you monitor and analyze your AI for Process expenses through detailed usage metrics and cost breakdowns. You can track computational costs across workflows, models, guardrails, OCR models, and custom script deployments to make data-driven decisions about your resource utilization.

## Accessing Usage Information

Steps to access the Usage page:

1. Log in to AI for Process and click **Settings**.
2. On the left navigation pane, click **Billing** > **Usage**.  
<img src="../images/ocr_billing_new.png" alt="Usage page" title="Usage page"/>

The Usage page displays the following tabs:

* **Overview**: Provides a high-level summary of your resource consumption including:
    * **Workflow runs**: Shows current workflow run usage against your total allocation.
    * **Credits**: Displays the number of credits consumed out of the total available credits, along with the corresponding percentage. A dynamic pie chart visually represents this data, showing the distribution of total credits, including usage by models, guardrails, OCR models, and custom script deployments. Each metric is color-coded and identified through a legend for easy reference. Hover over the chart to view the actual values for each usage type.
    * **Usage trend**: Visual representation of workflow runs, model credits, custom scripts, and OCR credits consumption over time.

Click the "*three-dots*" icon to view and select from the following options:

* **Workflows**: Shows all workflow activities and their operational status.
* **Models**: Shows the computational costs linked to specific models.
* **Guardrails**: Shows overall guardrail statistics and credit consumption costs.
* **Custom Scripts**: Gives a comprehensive view of all the deployed custom scripts’ statistics, including the credits usage trends.
* **OCR**: Displays OCR model deployments and their credit consumption, helping you track document-processing usage.
* **Browser Automation**: Shows the credits consumption and usage trend for browser automation experiment pod deployments.
    
    <img src="../images/usage-expanded-view.png" alt="Usage expanded list" title="Usage expanded list"/>

## Best Practices

* Regularly monitor your usage trends to optimize resource allocation.
* Review workflows, models, guardrails, OCR, and custom scripts to identify cost-saving opportunities.
* Refer to the hardware profile and the credits consumption chart [here](../manage-custom-scripts/custom-scripts.md#step-3-resource-allocation) before deploying custom scripts.
* Track guardrail deployment duration to manage hardware costs effectively.

!!! note

    Use the Calendar bar on all the tabs to search by the number of days using pre-defined date filters—24 hours, 7 days, 30 days, or 90 days. You can also use the Custom option to specify your preferred date range.

## Usage Overview

The **Overview** tab summarizes expenses and usage patterns across your workflows, models, guardrails, OCR, and custom scripts. The following usage information is displayed on the tab:

* **Runs**: This field indicates the usage of workflow runs, showing the proportion of capacity consumed compared to the total available runs. For example, if 45 out of 10,000 available workflow runs have been utilized, indicating that 0.45% of the total capacity has been consumed.
* **Credits**: This field displays the total credit usage, showing the proportion of credits used across models, guardrails, OCR, and custom scripts compared to the total available credits. It also includes the credits used to host guardrails. For example, if 212 credits have been used out of a total allocation of 300 credits, indicating that 70.72% of your available model credits have been utilized.
* **Usage trend**: This visual representation shows workflow runs, models, guardrails, OCR, and custom script credits consumed over time. Use the calendar feature to view changes over a defined timeline, such as daily, weekly, monthly, or any custom date range.

## Workflows Usage

The **Workflows** tab displays a comprehensive list of workflows associated with the account. It includes only those workflows that have been deployed at least once; it does not include ‘In development’ workflows.  

The following usage information is displayed on the tab:

* **Total workflows**: The total number of workflows in the account.
* **Total runs**: The total number of runs by all the workflows.
* **Workflow name**: The name assigned to the workflow.
* **Runs**: The number of times the workflow was inferred. 
* **Owner Name**: The name of the user who created the workflow.
* **Last active on**: The date when the workflow was last active.
* **Status**: The workflow's status - Deployed, Undeployed, or Deleted.

    <img src="../images/workflow_usage.png" alt="Billing Tools tab" title="Billing Tools tab"/>


## Models Usage

The **Models** tab displays a comprehensive list of open-source and fine-tuning models in the account and the computational cost of storing, fine-tuning, and hosting each model.

<img src="../images/models-usage.png" alt="Billing Models tab" title="Billing Models tab"/>

If there are multiple deployments of the same model, the usage data is displayed for each deployment in the drill-down view. [Learn more](./billing-and-usage.md#viewing-deployment-level-information).

The following usage metrics summarize data for all the deployments:

* **Total models**: The total number of models in the account.
* **Total credits**: The total credits used by all the models (including all the deployments).
* **Fine-tuning credits**: The number of credits used for fine-tuning the models. The number of credits are based on factors like the size of the training data, the model complexity, the number of training epochs, the type of hardware used, and other parameters.
* **Hosting credits**: The total number of credits used to cover the cost of deploying and hosting models on GPUs.
When you deploy a model on powerful GPUs, each GPU instance is considered a "replica", which requires the allocation of hosting credits. For example, if your model runs on one A100 GPU, that counts as one replica and consumes a specific amount of hosting credits. If demand increases and you need to deploy a second A100 GPU to handle additional user requests, you will now have two replicas and be charged for both, requiring twice the number of hosting credits.

The following information is displayed for each model record:

* **Model name**: The name of the model.
* **Type**: The type of model used: Fine-tuned or Base.
* **Credits used**: The credits consumed by the deployment.
* **Last deployed on**: The date when the model was last deployed.

### Viewing Deployment-level Information

Click each Model record to view a detailed record of all its deployments with the following information:

The following information is displayed:

* **Name**: The name given to the deployment.
* **Type**: The type of deployment.
* **Credits used**: The credits consumed by the deployment.
* **Last updated on**: The date when the deployment was last done.
* **Status**: The current deployment status: *Deployed*, *Undeployed*, or *Deleted*.

    <img src="../images/models-usage-drill-down.png" alt="drill down view" title="drill down view"/>

## Guardrails Usage

The **Guardrails** tab displays the list of guardrails used and the charges related to their usage. Each guardrail includes details about the hardware it was deployed on and the associated costs. The guardrails are charged based on the hardware used.

The guardrail usage is deducted from the Model credits shown in the Overview tab, indicating that the available credits for the model will decrease based on the cost of using the guardrails.

 <img src="../images/guardrails-tab.png" alt="Guardrails tab" title="Guardrails tab"/>

The following usage information is displayed on the Guardrails tab:

* **Total guardrails**: The total number of guardrails used in the account.
* **Total credits**: The total credits used by the guardrails.
* **Time**: The total duration for which all the guardrails were deployed.
* **Name**: The name of the guardrail/scanner.
* **Credits**: The credits used to deploy the guardrail.
* **Time**: The duration for which the guardrail was deployed.
* **Last deployed on**: The date the guardrail was last deployed.
* **Status**: The status of the guardrail: Deployed or Undeployed.

### Viewing Detailed Guardrail Information

Clicking each row on the Guardrail tab opens a panel on the right that displays detailed information about the hardware on which it was deployed and the charges for each guardrail deployment.

* Credits for the guardrails consumption will be deducted from the allocated credits.
* If the account credits fall below the lowest threshold, new deployments for guardrail models are disabled.
* If the low credit limit is reached during an active deployment, the deployment will continue and proceed into negative credits. 
* However, once the negative credit limit is crossed, the deployment will stop and display the following failure message: "*You've used all your available credits. Please add more credits to your account to continue.*"
* The credits are continually deducted from the account, while the negative credits are adjusted in the next billing cycle.
* If no credits exist, the following happens:
     * Further deployments are disabled. 
     * All ongoing deployments are disrupted once the negative credit limit is reached, and the message “*You've used all your available credits. Please add more credits to your account to continue.*” appears.

      <img src="../images/guardrails_right_panel.png" alt="Guardrails detailed information" title="Guardrails detailed information"/>


The following information is displayed:

* The name of the guardrail
* **Hardware**: The type of CPUs used, the number of CPUs used, the duration for which the CPUs are being used, and the number of credits used.
* **Total**: The total number of credits used for the hardware.

### Email Notifications

Billing and credit calculation data for Guardrails is sent via email, notifying users about credit usage, negative threshold breaches, and potential deployment interruptions.

## Custom Scripts Usage

The **Custom Scripts** tab displays the list of custom scripts added to your account, along with the credits consumed for their deployment. Each custom script entry displays the language and version of the script, the credits used, the latest date of script usage (when it was active), and its [status](../manage-custom-scripts//custom-scripts.md#information-on-script-deployment-statuses). The **Total Scripts** and the **Hosting Credits** available in the account are also displayed as key metrics on the page. The custom scripts are charged for each deployment and hardware profile used.

* Credits for script consumption are deducted from the allocated credits (**Overview** tab) based on the table mentioned [here](../manage-custom-scripts/custom-scripts.md#step-3-resource-allocation).
* If account credits are insufficient, new deployments are disabled via the script wizard.
* If the low credit limit is reached during an active deployment, the deployment will continue and proceed into negative credit.

    * However, once the negative credit limit is crossed, the deployment will stop and display the following failure message: "*You've used all your available credits. Please add more credits to your account to continue.*"
    * The credits are continually deducted from the account, while the negative credits are adjusted in the next billing cycle.

* If no credits exist, the following happens:

    * Projects can only be imported as drafts.
    *  Users will not be able to deploy imported projects. Deployment actions get disabled for the scripts.
    *  If the negative credit limit is crossed during deployment, the process will be stopped, and a failure message will be displayed.

       <img src="../images/cs-usage-data.png" alt="cs usage data" title="cs usage data"/>

The following usage information is displayed:

* **Total Scripts**: The total number of scripts added and managed in the account.
* **Hosting Credits**: The total number of credits used by the scripts.
* **Script name**: The name of the script.
* **Language(Version)**: The language and version of the script.
* **Credits used**: The credits consumed by the script for hardware and other resources.
* **Last active on**: The latest date when the script was actively used.
* **Status**: The deployment status of the script. [Learn more](../manage-custom-scripts/custom-scripts.md#information-on-script-deployment-statuses).


### Viewing Detailed Script Information

Clicking each row on the **Custom scripts** tab opens a panel on the right that displays detailed information about the script’s hosting parameters, including:

* **Hosting infrastructure**: The hardware configurations (vCPUs and memory) used by the script.
* Hosting time in hours and minutes.
* Credits consumed by the components. Refer to the table [here](../manage-custom-scripts/custom-scripts.md#step-3-resource-allocation) for pricing.
* **Total** which represents the aggregate of all the credit components (when multiple components are involved).

    <img src="../images/custom-script-usage.png" alt="cs usage" title="cs usage"/>

### Email Notifications

Billing and credit calculation emails for custom scripts notify users about credit usage, negative credits threshold breaches, and deployment or undeployment events. Deployment notifications also include the API endpoint access details.


## OCR Usage

The **OCR** tab provides a unified view of all OCR-related credit usage across your workspace, allowing you to do the following:

* Review a list of OCR model deployments
* See how many credits each deployment consumed
* Check deployment status and usage history

   <img src="../images/ocr_billing_details.png" alt="OCR billing" title="OCR billing"/>

### Viewing Detailed OCR Information

Clicking a row in the **OCR** tab opens a panel on the right that provides detailed information about the selected OCR deployment, including:

* **Hosting infrastructure:** The compute resources used by the deployment (for example, model configuration or allocated hardware).
* **Hosting time:** Total time the deployment has been active, shown in hours and minutes.
* **Credits consumed:** The number of OCR credits used by the deployment.
* **Total:** The aggregated credit usage across all contributing components for that deployment.

    <img src="../images/ocr_billing_detailed.png" alt="OCR billing" title="OCR billing"/>

## Browser Automation Usage

The **Browser Automation** tab provides a unified view of browser-automation credit usage across your workspace, allowing you to do the following:

* Review a list of pod deployments for browser automation scripts
* See deployment-level credits consumption
* Check deployment status and usage history

    <img src="../images/browser-automation-usage.png" alt="browser automation usage" title="browser automation usage"/>

### Viewing Detailed Browser Automation Information

Clicking a row in the **Browser Automation** tab opens a right-side panel that displays detailed information about the selected OCR deployment, including:

* **Hosting infrastructure:** The compute resources or allocated hardware used by the deployment.
* **Hosting time:** Total time the deployment has been active, shown in hours and minutes.
* **Credits consumed:** The number of browser automation credits used by the deployment.
* **Total:** The aggregated credit usage across all contributing components for that deployment.

    <img src="../images/browser_automation_billing_detailed.png" alt="browser automation detailed billing" title="browser automation detailed billing"/>

# Deploy, Execute, and Manage Custom Scripts for workflow Automation

The AI for Process now allows admins to import, deploy, and manage custom scripts directly from the **Settings** console. 

A powerful script deployment wizard enables users to easily upload, configure, and deploy custom scripts in isolated containers. By leveraging container isolation, this feature enhances security while providing flexibility in configuring runtime and scaling settings.

Once deployed, these scripts can be run via the [API node’s](../../workflows/workflow-builder/types-of-nodes/api-node.md) endpoint when building the workflow. Additionally, the custom scripts can be embedded in the [Function node]() of the workflow automation flow and executed when the node flow is run.


On the **Manage Custom Scripts** page, admins can upload a complete script project file, including all definitions and logic, without writing any code in the function node. This allows them to seamlessly port their code or project from a local system into the product and start using it immediately.

You can import a custom script with reusable functions and invoke it from anywhere within the platform using a secure API key at the endpoint. This adds flexibility and offers the following benefits to the workflows' automation flow:

* **Task Automation**: Automate repetitive or complex tasks that would otherwise require manual intervention. 

* **Secure API Integration**: Integrate custom scripts into the apps using API endpoints and secure authentication. 

* **Customization**: Implement custom logic or workflows tailored to unique business needs. 

* **Data Processing**: Transform, filter, or validate data in a way that aligns with specific operational requirements. 

* **Error Handling**: Create tailored error-checking and fallback mechanisms beyond standard system behavior. 


You can import a script by uploading the file in one of the supported formats, validating it, configuring runtime settings and system resources, and deploying scripts after reviewing errors. 

The key steps in managing custom scripts are:

1. [Access the script deployment wizard](../manage-custom-scripts/custom-scripts.md#access-script-deployment-wizard).
2. [Import and Configure a script](../manage-custom-scripts/custom-scripts.md#import-and-deploy-a-custom-script) by following these steps:

    * [Step 1: Add general details, upload the script file, and validate the script file for errors](../manage-custom-scripts/custom-scripts.md#step-1-general-details).
    * [Step 2: Configure the runtime settings for the script to execute successfully.](../manage-custom-scripts/custom-scripts.md#step-2-runtime-settings).
    * [Step 3: Define resource allocations, including the limitations for hardware, memory, and scaling parameters.](../manage-custom-scripts/custom-scripts.md#step-3-resource-allocation).
    * [Step 4: Review configuration details and deploy the script.](../manage-custom-scripts/custom-scripts.md#step-4-review-the-provided-details).

3. [View deployed scripts and their statuses](../manage-custom-scripts/custom-scripts.md#view-deployed-scripts-and-their-statuses).
4. Manage script deployment [overview](../manage-custom-scripts/custom-scripts.md#script-overview), [history](../manage-custom-scripts/custom-scripts.md#deployment-history),  [endpoint](../manage-custom-scripts/custom-scripts.md#endpoint), and [API](../manage-custom-scripts/custom-scripts.md#api-keys).

## Access Script Deployment Wizard

To access the custom scripts wizard, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. Click **Manage Custom Scripts** on the left menu.
   
## Import and Deploy a Custom Script

To import and add a custom script, follow the steps below:

1. [Access](../manage-custom-scripts/custom-scripts.md#access-script-deployment-wizard) the script deployment wizard.
2. Click **+ Import** or **+ Import new**.
<img src="../images/import-options.png" alt="import options" title="import options"/>
 
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>To complete the configuration, perform each step in order without skipping any.</p>
</div>

### Step 1: General Details

In the **General Details** window, follow these steps:

1. Add a **Script name**.
2. Add a **Description** to define the purpose and capabilities of your custom script.
3. Select **Base Language** (the language in which the script is imported and executed) and **Language Version**. The available options are **JavaScript 20.19.0** and **Python 3.10.15**. More versions will be supported soon.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The default version is auto-selected when you select the language.</p>
</div>

<ol start="4"><li>To upload the script, click <b>Choose File</b> under <b>Project File</b>, then select the file from your local system.</li></ol>

<div class="admonition note">
<p class="admonition-title">Important Considerations</p>
<p><ul><li>Supported file formats include <code>.zip</code>, <code>.gz</code>, and <code>.tar</code>.</li>
<li>The max file size is 1 GB. Larger files will result in a validation error.</li>
<li>Click <b>Validate</b> to check the file for errors.</li>
<img src="../images/validate-file.png" alt="validate file" title="validate file"/></ul>
</p>
</div>

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The uploaded file must match the recommended project structure. Click <b>Download sample project</b> to access the <i>.zip</i> folder of the script definitions and follow its structure when uploading your file.</li>
<li>The structure is different for different base languages. Ensure that the correct file structure is followed for the chosen language.</li>
<li>The file naming convention should be followed to avoid any errors.</li>
<img src="../images/file-naming-convention.png" alt="file naming convention error" title="file naming convention error"/></ul>
</p>
</div>

**Key Considerations for File Validations**:

* Validation checks confirm if the file matches the sample project structure.
* Errors during validation are displayed via messages.
* The list of validations includes the following:
      
    * Adherence to the sample file’s structure and the allowed file format.
    * The main file shouldn’t be empty
    * 1 GB is the limit for the project file upload

If there are no errors, the system proceeds to the next page, **Runtime Settings**. If errors or warnings are present, you must resolve them before proceeding.

**Custom Script Requirements and Guidelines**

To ensure your custom script runs correctly within the platform, follow these guidelines:

**Main Entry Point Required**

Your project must include a `main.py` (for Python) or `main.js` (for JavaScript) at the root directory of the archive file. This file serves as the main entrypoint for the service. Only the functions defined in this file will be exposed for execution via API endpoints or workflow integrations.

**Support for Modular Code**

You can organize your code across multiple files for better structure and maintainability. However, keep in mind that only functions in `main.py`/`main.js` will be exposed. Additional files can be used for helper functions or reusable logic, which can be imported into the main file.

**Custom Dependencies (Optional)**

If your code depends on specific packages, include a `requirements.txt` (for Python) or `package.json` (for JavaScript) file at the root directory in your project. These are optional, only include them if your code has external dependencies.

**Use Relative Imports**

When importing between files in your project, make sure to use relative imports. Refer to the provided sample files for examples.


**Use of Environment Variables**

Access environment variables in your scripts as follows:

**Python**: <p><code>import os</code></p>
             <p><code>os.getenv('<key_name>')</code></p>

**JavaScript**: 

`process.env.<key_name>`

### Step 2: Runtime Settings

Configure **Runtime variables** (environment variables and execution timeout) to control how your script runs, stores configuration data, and stops executing. The key steps include:

1. Enter the **Key** and the **Value** to declare **environment variables** as key-value pairs that are accessible from your function.
2. (Optional) Click **+ Add** to add additional key-value pairs, and the **Delete** icon to remove.
<img src="../images/click-add-key.png" alt="add key value" title="add key value"/> 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The following default environment variables are available:
<ul><li><b>UPLOADS_DIR</b>: Read-only access to all files uploaded via the Public APIs. Use this to access data that was submitted to your account.</li>
<li><b>WORKSPACE_DIR</b>: Read-write directory for your function's file operations. Any data your function needs to store or modify will be saved here.</li>
<li>Both directories are accessible only while your container is deployed. Once undeployed, these storage locations will no longer be available.</li></ul></p>
</div>

<ol start="3"><li>Define the <b>Execution timeout</b> in seconds. The allowed range is <b>30 to 600 seconds</b>.</li>
<p><b>Why Script Timeout?</b></p>
<ul><li><b>Prevents resource overuse</b>: Stops long-running or infinite-loop scripts from consuming excessive memory or CPU.</li>
<li><b>Ensures responsiveness</b>: Keeps systems responsive by limiting how long a task can delay other operations.</li>
<li><b>Supports fail-safe mechanisms</b>: If a script fails to complete in time, the timeout can trigger error handling or retries.</li></ul>
<li>Click <b>Next</b>.</li>
<img src="../images/runtime-settings.png" alt="runtime settings" title="runtime settings"/></ol>

### Step 3: Resource Allocation

On this page, you define scaling parameters (minimum and maximum replicas) and hardware requirements to ensure the script performs optimally under varying loads and to customize the deployment. The key steps include:

1. Set limits for auto-scaling to ensure optimal performance by defining the following **Scaling parameters**:
    * **Min and Max Replicas**: Defines the minimum and maximum number of pods per service that can be created for the service to handle increased load. 

       <div class="admonition note">
       <p class="admonition-title">Note</p>
       <p><ul><li>The allowed range for both parameters is between 1 and 10.</li>
       <li>The default value is 1.</li></ul></p>
       </div>

     * **Min replica** should be lower than or equal to the **Max Replica**.
     * **Average Compute Utilization**: A metric based on which scaling of the service happens. Indicates average compute utilization in percentage per pod. The **default value is 75**, and the **allowed range is between 1 and 100**. This metric is disabled when **Min replica** and **Max replica** are the same.
     * Select the required **hardware** for the deployment. The unit is **No. of vCPUs with memory**. The profiles are virtualized for standardization. The available profiles are listed below:

         <table>

  <tr>
   <td><strong>Hardware configuration</strong>
   </td>
   <td><strong>Actual CPU Core and Memory Available</strong>
   </td>
   <td><strong>Credits per Hour</strong>
   </td>
  </tr>
  <tr>
   <td>2 vCPUs with 8GB memory
   </td>
   <td>1.5 vCPUs with 6.5GB memory
   </td>
      <td>0.144
   </td>
  </tr>
  <tr>
   <td>4 vCPUs with 16GB memory
   </td>
   <td>3.5 vCPUs with 13.5GB memory
   </td>
      <td>0.288
   </td>
  </tr>
  <tr>
   <td>1 vCPU with 2GB memory
   </td>
   <td>0.7 vCPUs with 1.1GB memory
   </td>
      <td>0.07698
   </td>
  </tr>
  <tr>
   <td>2 vCPUs with 4GB memory
   </td>
   <td>1.5 vCPUs with 2.5GB memory
   </td>
      <td>0.15396
   </td>
  </tr>
  <tr>
   <td>4 vCPUs with 8GB memory
   </td>
   <td>3.5 vCPUs with 6GB memory
   </td>
      <td>0.30792
   </td>
  </tr>
</table>

<ol start="2"><li>Click <b>Next</b>.</li>
<img src="../images/resource-allocation.png" alt="resource allocation" title="resource allocation"/></ol>


### Step 4: Review the Provided Details

The next step is to review all the configuration details before deploying the script. 

1. Review each section- [General Details](../manage-custom-scripts/custom-scripts.md#step-1-general-details), [Runtime Settings](../manage-custom-scripts/custom-scripts.md#step-2-runtime-settings), and  [Resource Allocation](../manage-custom-scripts/custom-scripts.md#step-3-resource-allocation) to ensure all information is accurate. You can return to any section to modify the configured values if needed.
2. Read all the **Terms and Conditions**, and select **Accept** to enable deployment.
3. (Optional) Click **Save as Draft** to save a copy and deploy it later. A success message is displayed, and the label “*Draft*” is displayed for the script. 
<img src="../images/saved-as-draft.png" alt="saved as draft" title="saved as draft"/>

4. Click **Deploy**.
<img src="../images/click-deploy-terms.png" alt="deploy terms" title="deploy terms"/>

The following message is displayed when the script deployment progresses, and the status changes to “*Deploying*”.
<img src="../images/initiated-deployment.png" alt="initiated deployment" title="initiated deployment"/>
 
Once the script is deployed successfully, a success message is displayed, and the status changes to “*Deployed*”. 

**Email Notification**

After a custom script is deployed, a confirmation email with the subject line "*Custom script deployed successfully - API Endpoint Available*" is sent to the admin. The following information  for the account is also displayed:

* Credits remaining for the account 

* Total allocation

   <img src="../images/deployment-email.png" alt="deployed success" title="deployed success"/>

## View Deployed Scripts and their Statuses

Once a script is deployed or saved as a draft, a table listing all scripts and their statuses becomes available on the **Manage Custom Scripts** page. This allows users to monitor deployment progress and take necessary actions as follows:

**Search Script**

Enter the script name in the **search field** to retrieve a matching entry from the list.
<img src="../images/search-script.png" alt="search script" title="search script"/>

**View Summary**

The summary table displays the following fields:

* **Script Name**: The name provided by the user.
* **Status**: The current deployment status of the script.
   <img src="../images/deployment-statuses.png" alt="all statuses" title="all statuses"/>

* **Added by**: The user who added the custom script.
* **Updated on**: The timestamp when an action (deployment, re-deployment, or undeployment) was done on the script.
* **Action**: Perform actions on the script like undeploy, delete, or export. Refer [here](../manage-custom-scripts/custom-scripts.md#actions) for more information.

### Information on Script Deployment Statuses

The following table illustrates the various statuses and the actions that can be performed from the Overview, Deployment History, Endpoint, and API Keys pages.

<table>
  <tr>
   <td rowspan="2" >
    <strong>Status</strong>
<p>
   </td>
   <td rowspan="2" >
    <strong>Description</strong>
   </td>
   <td colspan="5" >
    <strong>Actions you can perform </strong>
   </td>
  </tr>
  <tr>
   <td>
<strong>Overview</strong>
   </td>
   <td><strong>Deployment history</strong>
   </td>
   <td><strong>Endpoint</strong>
   </td>
   <td><strong>API</strong>
<p>
<strong>keys</strong>
   </td>
   <td><strong>Re-deployment</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Draft</strong>
   </td>
   <td>The draft copy of the custom script that you can modify and deploy later.
   </td>
   <td>
<ul>

<li>Export</li>

<li>Delete</li>

<li>Deploy</li>
</ul>
   </td>
   <td>Deploy Custom Script
   </td>
   <td>Deploy Custom Script
   </td>
   <td>Create a New API Key
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Deploying</strong>
   </td>
   <td>The script is being deployed. A success message is displayed once the deployment completes successfully. If the deployment fails, a failure message is shown.
   </td>
   <td>
<ul>

<li>Export</li>

<li>Delete</li>
</ul>
   </td>
   <td>Rename deployment version
   </td>
   <td>Endpoint not activated
   </td>
   <td>
    ·    Create API keys
<p>
 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Ready to Deploy</strong>
   </td>
   <td>The script is set up and ready to deploy.
   </td>
   <td>
<ul>

<li>Export</li>

<li>Delete</li>

<li>Deploy</li>
</ul>
   </td>
   <td>Rename deployment version
   </td>
   <td>Endpoint not activated
   </td>
   <td>
    ·   Create API keys
<p>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Deployed</strong>
   </td>
   <td>The deployed custom script.
   </td>
   <td>
<ul>

<li>Redeploy</li>

<li>Undeploy</li>

<li>Export</li>
</ul>
   </td>
   <td>
<ul>

<li>View configuration and deployment details.</li>

<li>Rename deployment version</li>
</ul>
   </td>
   <td>
<ul>

<li>Redeploy script</li>

<li>View dedicated endpoint code (CURL, JS, and Python).</li>

<li>Copy script code.</li>
</ul>
   </td>
   <td>
<ul>

<li>Create API keys</li>

<li>Manage API keys</li>
</ul>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Deployment failed</strong>
   </td>
   <td>The script deployment failed
   </td>
   <td>
<ul>

<li>Deploy</li>

<li>Delete</li>

<li>Export</li>
</ul>
   </td>
   <td>
<ul>

<li>View configuration and deployment details except duration.</li>

<li>Rename deployment version.</li>
</ul>
   </td>
   <td>The endpoint is not activated since the script is not deployed.
   </td>
   <td>
    Create API keys
<p>   
   </td>
   <td>Yes
   </td>
  </tr>
</table>

**Key Considerations**

* Every time an action is taken for a script, the **Updated on** field captures the latest timestamp.
* Hover over a "*Deployment failed*" status to view the error tooltip explaining the reason for failure.
<img src="../images/hover-over-failed-status.png" alt="failed status" title="failed status"/> 

### Actions

In addition to deploy, the following actions can be performed on a custom script based on its deployment status.

#### Export

Downloads the *.Zip* folder of the project to the user’s local system. To export, follow the steps below on the **Manage Custom Scripts** page:

1. Click the **Ellipses** icon under **Actions**. Then, click **Export**.
<img src="../images/access-export.png" alt="access export" title="access export"/>

   Alternatively, click the deployed script entry and select **Export** on the **Overview** page.
   <img src="../images/click-export-script.png" alt="export script" title="export script"/>

To see when **Export** is available, please refer to the table [here](../manage-custom-scripts/custom-scripts.md#information-on-script-deployment-statuses).

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>You can view the status of the export while it is in progress, upon completion, or if it fails.</li>
<li>You can cancel an export in progress.</li></ul></p>
</div>

#### Undeploy the Script

This action lets you undeploy the script from all its deployed locations on the platform.

<div class="admonition note">
<p class="admonition-title">Key Considerations</p>
<p><ul><li>An undeployed script can be redeployed. <a href="#redeploy-script" >Learn more</a>.</li>
<li>Once a script is redeployed, its data and configurations are restored. You can edit the script name and other parameters in the <a href="#import-and-deploy-a-custom-script" >deployment flow</a>.</li>
<li>The message “<i>No custom scripts deployed yet</i>” is displayed for the <b>Function</b> node if there are no deployed scripts.</li>
<li>A script does not appear in the <b>Script</b> dropdown list for the <b>Function</b> node if it is not deployed.</li>
</ul></p></div>


To undeploy, follow the steps below on the **Manage Custom Scripts** page:

1. Click the **Ellipses** icon under **Actions**. Then, click **Undeploy**.
<img src="../images/access-undeploy.png" alt="access undeploy" title="access undeploy"/>

   You can also select a script entry and click **Proceed to Undeploy** on its **Overview** page. 

   <img src="../images/proceed-to-undeploy.png" alt="proceed to undeploy" title="proceed to undeploy"/>

<ol start="2"><li>Click <b>Undeploy</b> in the confirmation window.</li>
<img src="../images/undeploy-script-confirmation.png" alt="undeploy script confirm" title="undeploy script confirm"/></ol>

A success message is displayed, and the script’s status changes to <b>Ready to Deploy</b>.</li>
<img src="../images/ready-to-deploy-success.png" alt="ready to deploy" title="ready to deploy"/>


To see when **undeploy** is available, please refer to the table [here](../manage-custom-scripts/custom-scripts.md#information-on-script-deployment-statuses). 

**Email Notification**

After a custom script is undeployed, a confirmation email with the subject line "*Your custom script has been undeployed successfully*" is sent to the admin. The following information  for the account is also displayed:

* Credits remaining for the account 

* Total allocation

   <img src="../images/undeploy-email.png" alt="undeployed success" title="undeployed success"/>

#### Delete Script

This action permanently deletes a deployed script, including its configurations and definitions, from the system.

<div class="admonition note">
<p class="admonition-title">Important</p>
<p><ul><li>You cannot delete a deployed script.</li>
<li>Once a script is deleted, its data and configurations cannot be restored.</li></ul></p>
</div>

To delete, follow the steps below on the **Manage Custom Scripts** page:

1. Click the **Ellipses** icon under **Actions**. Then, click **Delete**.
<img src="../images/access-delete.png" alt="access delete" title="access delete"/>  

   Alternatively, select a script entry and click **Proceed to Delete** on its **Overview** page.
   <img src="../images/proceed-to-delete-script.png" alt="proceed to delete" title="proceed to delete"/>  

<ol start="2"><li>Click <b>Delete</b> in the confirmation window.</li> 
<img src="../images/delete-the-script.png" alt="delete the script" title="delete the script"/></ol>

A success message is displayed, and the script is permanently removed. 

To see when **delete** is available, please refer to the table [here](../manage-custom-scripts/custom-scripts.md#information-on-script-deployment-statuses).


#### Redeploy Script

This action lets you redeploy a script by editing the description, project file, runtime settings, and resource allocation (except name, base language, and version number) in the **Import Custom Script** flow mentioned [here](../manage-custom-scripts/custom-scripts.md#import-and-deploy-a-custom-script). Redeploy is only available for the “**Deployed**” status.

To re-deploy, select the script with the “**Deployed**” status, and click **Re-deploy** in the **Overview** page. 
<img src="../images/click-deployed-script.png" alt="deployed script" title="deployed script"/>  

<img src="../images/re-deploy-script.png" alt="redeploy script" title="redeploy script"/>  

The system redirects to the following page.

<img src="../images/general-details-page.png" alt="general details page" title="general details page"/>  
 
After redeployment, the **Overview** page is updated with the latest deployment information. 

## Script Overview

The configuration details of the latest deployed version of a script can be viewed on the **Overview** page. To view this page, click the required script on the **Manage Custom Scripts** page. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You can view this page for all the statuses of a deployed script.</p>
</div>

The information available on this page includes the configurations you have set for the following:

* Script name and the assigned status
* [General Details](../manage-custom-scripts/custom-scripts.md#step-1-general-details) 
* [Runtime Settings](../manage-custom-scripts/custom-scripts.md#step-2-runtime-settings) 
* [Resource Allocation](../manage-custom-scripts/custom-scripts.md#step-3-resource-allocation) 

The [actions](../manage-custom-scripts/custom-scripts.md#actions) you can perform on the script on the **Overview** page depend on the assigned status. See the table [here](../manage-custom-scripts/custom-scripts.md#information-on-script-deployment-statuses) for more details.

<img src="../images/overview-script-deployment.png" alt="overview" title="overview"/>  

Refer [here](../manage-custom-scripts/custom-scripts.md#import-and-deploy-a-custom-script) to import and deploy a custom script.

## Deployment History

The **Deployment History** page helps view key information about the script’s previous and current deployments or undeployments. It helps track actions performed on the script, its version history, and deployment statuses.

**Key Considerations**

* Deployment history information is only available for the statuses “**Deployed**,” “**Deployment Failed**,” “**Deploying**,” and “**Ready to Deploy**.”  
* For the “**Draft**” status, the following window is displayed.

     <img src="../images/draft-action.png" alt="draft action" title="draft action"/>  

Click **Deploy custom script** and follow the steps for 
[import and deploy](../manage-custom-scripts/custom-scripts.md#import-and-deploy-a-custom-script).

* Information about un-deployment is displayed only when the status is '**Ready to Deploy**', indicating that the script is currently undeployed.
* Hover over a failed status to view the reason.
<img src="../images/view-failure-reason.png" alt="deployment failure" title="deployment failure"/> 


The following script deployment or un-deployment details are displayed:

* Deployment name and version (the first version starts with v1). The version is auto-generated and appended to the script name. You can edit this name if required.
* A green **Check** icon for the latest running deployment. This icon does not appear for failed deployments or undeployed scripts.
* An **Edit** icon to edit the script name.
<img src="../images/green-check-icon.png" alt="deployment details" title="deployment details"/> 

To edit the deployed/undeployed script’s name, click the **Edit** icon. In the following window, enter the new name and click **Confirm**.

<img src="../images/rename-dep-version.png" alt="rename deployment version" title="rename deployment version"/> 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Please follow the suggested naming convention to avoid errors.</p>
</div>

<img src="../images/naming-convention.png" alt="naming convention" title="naming convention"/> 

A success message is displayed, and the deployment name is changed. 

* **Deployed on**: The timestamp of the latest deployment/un-deployment.
* **Duration**: The duration of the deployment. Shows “-” for all statuses except “**Deployed**.”
* **Deployed by**: The system user who deployed/undeployed the version.

To view the detailed deployment/undeployment summary, click the **Expand** arrow. 

<img src="../images/expand-deployment-history.png" alt="deployment history expansion" title="deployment history expansion"/> 

The following information, configured by the user during the [import and deploy ](../manage-custom-scripts/custom-scripts.md#import-and-deploy-a-custom-script) or [un-deploy](../manage-custom-scripts/custom-scripts.md#undeploy-the-script) step, is displayed:

* [General Details](../manage-custom-scripts/custom-scripts.md#step-1-general-details) 
* [Runtime Settings](../manage-custom-scripts/custom-scripts.md#step-2-runtime-settings) 
* [Resource Allocation](../manage-custom-scripts/custom-scripts.md#step-3-resource-allocation) 

Additionally, the following details are available:

* **Deployed by**: Name of the user who deployed/undeployed the script. 

* **Start Time**: Date and time when the deployment or un-deployment started. 

* **End Time**: Date and time when the deployment or un-deployment ended. 

* **Time Taken to Deploy**: Total duration between the start and end times. 

* **Status**: Final status of the deployment/un-deployment (Success or Failed).
<img src="../images/deployment-history-screen.png" alt="deployment history" title="deployment history"/>  

### Statuses and Deployment Details

Deployment history information is displayed based on the status as follows:

**Deployed**

<img src="../images/deployment-success.png" alt="deployment success" title="deployment success"/>  


**Deployment Failed**

<img src="../images/deployment-failed.png" alt="deployment failed" title="deployment failed"/> 

**Ready to Deploy**

<img src="../images/success-status-deployment.png" alt="ready to deploy status" title="ready to deploy status"/>  

**Deploying**

<img src="../images/deploying-status.png" alt="deploying status" title="deploying status"/>  

## Endpoint

The **Endpoint** page displays code viewers of the activated endpoint for the deployed script in different formats. This allows users to easily copy the code in their preferred format and integrate it into their applications. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The code is view-only and cannot be edited.</p>
</div>

The available formats include:

* **cURL**: Displays the API endpoint information for the script.
<img src="../images/curl-endpoint.png" alt="curl code" title="curl code"/>  
 
* **JavaScript**: Displays the payload JSON code in JS format.
<img src="../images/java-endpoint.png" alt="java code" title="java code"/>   

* **Python**: Displays the payload JSON code in Python format.
<img src="../images/python-endpoint.png" alt="python code" title="python code"/>   

Clicking **Copy** copies the selected endpoint format to the clipboard, allowing you to paste it into your applications or code editors. A success message confirms the copy action. 

<img src="../images/copy-endpoint-icon.png" alt="copy endpoint icon" title="copy endpoint icon"/>   

For the statuses '*Deploying*,' '*Deployment Failed*,' and '*Ready to Deploy*,' the page displays the following message along with an option to **deploy** the script. 

<img src="../images/not-deployed-error.png" alt="not deployed error" title="not deployed error"/>   
 
To [deploy the script](../manage-custom-scripts/custom-scripts.md#import-and-deploy-a-custom-script) and activate the endpoint (obtain the code), click **Deploy**. 

## API Keys

AI for Process provides secure access to deployed scripts through authenticated requests. You must create an API key to manage access to a deployed script’s endpoint across the platform. 
 
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You can create API keys for a script regardless of its <a href="#view-deployed-scripts-and-their-statuses" >deployment status</a>. The keys can be used once the script is successfully deployed.</p>
</div>

### Create an API Key

To add an API secret key, follow these steps: 

1. Navigate to the **API Keys** page.
2. Click **Create a New API Key** or **Create New Key**.
   <img src="../images/create-a-new-api-key.png" alt="create a new api key" title="create a new api key"/>  
   <img src="../images/click-create-new-key.png" alt="create new key" title="create new key"/>  
 
3. Enter a unique name for the key. By default, “**Secret Key**” is displayed, which you can change.
4. Click **Generate Key**.
   
   <img src="../images/generate-secret-key.png" alt="generate secret key" title="generate secret key"/>

<ol start="5"><li>Click <b>Copy and Close</b>.</li>   
<img src="../images/create-new-api-copy.png" alt="create new api copy" title="create new api copy"/></ol>  
 
<div class="admonition note">
<p class="admonition-title">Important</p>
<p><ul><li>Your secret API key is shown only once when generated. Save the key in a safe location. Do not share it or expose it in browsers or other client-side code.</li>
<li>If you lose a secret key, a new one must be generated.</li></ul></p>
</div>

A success message is displayed once the API key is generated. The added API Key is listed on the page.

<img src="../images/api-key-success-message.png" alt="api key success message" title="api key success message"/>  

### Delete an API Key

To delete an API key, follow the steps below:

1. On the **API Keys** page, hover over the required key.
2. Click the **Delete** icon.
<img src="../images/api-delete-icon.png" alt="click delete" title="click delete"/>  

3. Click **Delete** in the confirmation window.

       <img src="../images/delete-api-key.png" alt="delete api key" title="delete api key"/>  

A success message is displayed, and the API key is removed from the list. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>A deleted API key becomes invalid and can no longer be used to access the script on the platform.</p>
</div>

### Search API Key

To look up a specific API key, type the name (partial or full) in the **Search** field.
<img src="../images/api-keys-list.png" alt="api keys list" title="api keys list"/>  

## Example: Use Custom Script via the API Node Endpoint

To add a deployed custom script via the endpoint into the API node, follow the steps below:

1. Click **Define Request** in the API node configuration window.
<img src="../images/define-request.png" alt="define request" title="define request"/>  

2. Enter or select the following details in the **Edit Request** dialog box: 

    * Select the request type from the list.
    * Copy the cURL from the [Endpoint section](../manage-custom-scripts/custom-scripts.md#endpoint) of the custom script wizard.
    <img src="../images/copy-endpoint.png" alt="copy endpoint" title="copy endpoint"/> 

    * Paste it in the text field of the **Edit Request** page.
    <img src="../images/curl-edit-request.png" alt="curl link" title="curl link"/> 

    * In the **Auth Profiles** section, select the required option from the list of configured profiles to enable user authentication for the node. [Learn more](../security-and-control/authorization-profile.md) about Auth Profiles. 
    
    If authentication isn't required, select **None** (the default option).

    * In the **Headers** tab, specify the Key and Value pair details. For example, **Key**: *Content-Type* **Value**: *application/json*.
    * The **Body** tab is displayed for all request types except GET. Select the body content type from the drop-down list:
        * **application/x-www-form-urlencoded**: Allows file uploads through HTTP POST requests. Add key/value pairs encoded by the platform.
        * **application/json**: Transmits data between servers and web applications using JSON format without processing.
        * **application/xml**: Sends XML payload for SOAP services using POST methods, with the option to include node values.
        * **Custom**: Allows sending request payload in non-standard formats, such as for handling blogs or custom variables.
    * Click the **Test** button at the top-right corner of the dialog. The API response is displayed on the **Response** tab.
    * Click **Save** at the top-right corner of the dialog.

    Please refer to the [API node](../../workflows/workflow-builder/types-of-nodes/api-node.md) for more information.

    ## Related Links
    
    * **Settings Console** - [Learn more](../../settings/overview.md) about other AI for Process admin features.
    * **API Node** - [Learn more](../../workflows/workflow-builder/types-of-nodes/api-node.md) about configuring the API node via endpoint.



# Enable Hugging Face

AI for Process seamlessly integrates with the Hugging Face platform, allowing you to incorporate cutting-edge text generation and text-to-text generation models. Any publicly available Hugging Face model can be swiftly deployed via AI for Process with minimal effort. To utilize private or exclusive Hugging Face models, you can effortlessly establish a connection by supplying your Hugging Face access tokens. This facilitates AI for Process in unleashing the complete capabilities of your Hugging Face account, regardless of whether you possess public or private assets.

**To integrate with your hugging face account, follow these steps**:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. Click **Integrations** on the left menu.
3. Click the **Hugging Face** option from the list of Integrations. The Hugging Face section is expanded.

    <img src="../images/add-hugging-face-connection.png" alt="Add Hugging Face Connection" title="Add Hugging Face Connection"/>

4. Click **Add connection**. The **Hugging Face** dialog is displayed.

    <img src="../images/hugging-face-connection.png" alt="Hugging Face Connection" title="Hugging Face Connection"/>

5. Enter the following details in the dialog to create a connection:
    * Provide a **Connection name**.
    * Enter an **Access token** which is a unique identifier associated with your Hugging Face account.

6. Click **Confirm** to create a connection.

## Testing your connection to Hugging Face

You can test your connection after you provide the details to verify the accuracy of the details.

**To test your connection, follow these steps**:

1. Click the **Test** button on the **Hugging Face** dialog.

    <img src="../images/test-hugging-face-connection.png" alt="Test Hugging Face Connection" title="Test Hugging Face Connection"/>

    Once the connection is tested, you will receive feedback information.

1. If the connection is successful, you can click **Confirm** and complete the connection process.
2. If the connection fails, you can verify the details entered or cancel the set-up process.
3. You can test the connection by clicking the **Play** button on the connections list.

    <img src="../images/play-button-hugging-face.png" alt="Play Button Hugging Face" title="Play Button Hugging Face"/>

    !!! note

        If the connection fails a red icon is displayed corresponding to the name of the connection on the Connections list.


1. Hover over the connection name and click the three dots icon corresponding to the **Connection name**. The list of options is displayed. Click **Edit** to modify the connection details and **Delete** to delete the connection.

     <img src="../images/manage-hugging-face-connection.png" alt="Manage Hugging Face Connection" title="Manage Hugging Face Connection"/>

    !!! note

        * Once the Hugging Face connection is completed, you can see your connection name in the drop-down box while selecting and deploying an Open-source model.  For more information about selecting and deploying, see [Select and Deploy an Open-Source Model](../../models/open-source-models/select-and-deploy-an-open-source-model.md).

        * If you delete the Hugging Face connection used for the model's deployment, the system will ask you to select a new connection on redeployment. 



﻿# Integrate with S3 Bucket

The S3 Storage Integration functionality broadens AI for Process' capabilities by enabling connectivity with your AWS S3 account. It empowers you to import files from S3 and leverage them in developing high-quality AI applications for enterprises.

**To integrate with your S3 account, follow these steps**:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. Click **Integrations** on the left menu.

3. Click the **AWS S3 bucket** option from the list of Integrations. The AWS S3 bucket section is expanded.

    <img src="../images/add-s3-connection.png" alt="Add S3 Connection" title="Add S3 Connection"/>

4. Click **Add connection**. The **AWS S3 bucket** dialog is displayed.

    <img src="../images/aws-s3-bucket-connection.png" alt="AWS S3 Bucket Connection" title="AWS S3 Bucket Connection"/>

5. Enter the following details in the dialog to create a connection:
    * Provide a **Connection name**.
    * Enter an **Access key** which is a unique identifier associated with your AWS account.
    * Enter a **Secret key** which is a confidential key paired with the Access Key ID.
    * Enter a **Bucket name** which is configured in the S3 console.
6. Click **Confirm** to create a connection.


## Testing your connection to S3

You can test your connection after you provide the details to verify the accuracy of the details.

**To test your connection, follow these steps**:

1. Click the Test button on the **AWS S3 bucket** dialog.

    Once the connection is tested, you will receive feedback information.

1. If the connection is successful, you can click **Confirm** and complete the connection process.
2. If the connection fails, you can verify the details entered or cancel the set-up process.
3. From the connections table, you can test the connection by clicking the **Play** button.

    !!! note

        If the connection fails a red icon is displayed corresponding to the name of the connection on the Connections list.


## How to use files from the connected S3 Buckets in the Workflow Builder

Once a connection is created and the integration of S3 Bucket is successful you can use the files in the Flow builder canvas.

**To use the files in the Workflow builder, follow these steps**:

1. Create an **Input variable** with type **Remote File**. 

2. Add an API node and point to the remote file in the API node using the URL field. 

    The file content will be available in the context object. You can access the file content in any other nodes using the context object.


﻿# Integrate with Weights and Biases

Connecting with Weights and Biases (WandB) allows users to link to the platform, ensuring that the fine-tuning data associated with the model being refined in AI for Process is seamlessly transmitted to the WandB console for additional analytics.

**To integrate with your Weights and Biases (WandB) account, follow these steps**:


1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. Click **Integrations** on the left menu.

3. Click the **Weights & Biases** option from the list of Integrations. The Weights & Biases section is expanded.

    <img src="../images/add-w&b-connection.png" alt="Add W&B Connection" title="Add W&B Connection"/>

1. Click **Add connection**. The **Weights & Biases** dialog is displayed.

    <img src="../images/wandb-connection.png" alt="WandB Connection" title="WandB Connection"/>

1. Enter the following details in the dialog to create a connection:
    * Provide a **Connection name**.
    * Enter an **API key** which is a unique identifier associated with your WandB account.
1. Click **Confirm** to create a connection.


## Testing your connection to Weights & Biases

You can test your connection after you provide the details to verify the accuracy of the details.

**To test your connection, follow these steps**:

1. Click the **Test** button on the **Weights & Biases** dialog.

    <img src="../images/test-wandb-connection.png" alt="Test WandB Connection" title="Test WandB Connection"/>

    Once the connection is tested, you will receive feedback information.

1. If the connection is successful, you can click **Confirm** and complete the connection process.
2. If the connection fails, you can verify the details entered or cancel the set-up process.
3. You can test the connection by clicking the **Play** button on the connections list.

    <img src="../images/play-button-wandb.png" alt="Play Button WandB" title="Play Button WandB"/>

    !!! note

        If the connection fails a red icon is displayed corresponding to the name of the connection on the Connections list.


1. Hover over the connection name and click the three dots icon corresponding to the **Connection name**. The list of options is displayed. Click **Edit** to modify the connection details and **Delete** to delete the connection.

    <img src="../images/manage-wandb-connection.png" alt="Manage WandB Connection" title="Manage WandB Connection"/>


!!! note

    Once the WandB connection is completed, you can see your connection name in the drop-down box in the **Create a fine-tuned model** wizard in the **Weights and Biases** section.  For more information about the fine-tuning wizard, see [Create a Fine-Tuned Model](../../models/fine-tune-models/create-a-fine-tuned-model.md).



# Invite a User to Your Account

As an account owner, you can invite new users into your organization and collaborate with them.

To invite a user, follow the steps below:

1. Click **Settings** on the top navigation bar.
2. Click **Users Management** > **Users** > **Add New User**.
    <img src="../images/add-new-user-aip.png" alt="invite user" title="invite user"/>

3. Click **Invite**.
4. Enter a valid email address of the user you want to invite. 

<ol start="5"><li>Select a role from the dropdown to define the user’s access to modules and features.
   <img src="../images/role-drop-down.png" alt="role selection" title="role selection"/></li>
 
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>System-defined and custom roles available in the inviter’s account can be assigned. <a href="../role-management/" >Learn more</a> about roles and permissions.</p></div></ol>

<ol start="6"><li>To invite multiple users, click <b>+ Add another member</b>. Then, follow steps 4 and 5.

   To remove an invitation row, click the <b>Delete</b> icon.

   <img src="../images/delete-email-row.png" alt="delete email row" title="delete email row"/></li></ol>

**Key Information On Adding Email Addresses**

Please note the following when adding an email address:

* The **Email address** field should not be empty.
* The system does not accept a space in front, between, or after the mail ID.
* Enter a valid email address, including a domain (e.g., <code>[john@doe.com](mailto:john@doe.com)</code>), which must be provided. 

    <img src="../images/valid-email-address.png" alt="valid email address error" title="valid email address error"/></ol>

* Double-check the recipient’s email address before sending the invite.
* Duplicate invitations are not allowed. The system displays: “*This email has already been added*."
    
    <img src="../images/duplicate-invitation.png" alt="duplicate invitation" title="duplicate invitation"/>

<ol start="7"><li>Click <b>Send invitation(s)</b>. As you add or remove invites, the displayed count of invited persons updates accordingly.
<img src="../images/send-invitation-to-member.png" alt="send invitation" title="send invitation"/></li></ol>

You’ll see a success message when the invite is sent. If it fails, check the highlighted email addresses and try again.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>Users receive an email invitation to join your account, which expires 15 days after it is sent.</li>
<li>Until the recipient accepts your invitation to join, the user status is set to <b><i>Inactive</i></b>. Once the invitation is accepted, the status changes to <b><i>Active</i></b>.</li></ul></p></div>







# Manage Data

The Data module allows you to store datasets in the application, eliminating the need to upload files repeatedly when testing prompts or fine-tuning models. It supports CSV, JSON, and JSONL file formats without additional formatting requirements.

## Upload a Dataset

You can upload a dataset of your choice in CSV, JSON, or JSONL format.

Steps to upload a dataset:

1. Log in → In AI for Process Modules top menu → Click **Data**.
   <img src="../images/navigate-to-data-module.png" alt="Navigate to Data Module" title="Navigate to Data Module"/>
   
3. Click **Upload dataset** and select your file. The uploaded file will appear on the Data page.

    !!! note

        Files uploaded in Prompts Studio or Models fine-tuning wizard are automatically saved in the Data tab for future use.


## Download or Delete a Dataset

You can download or delete the dataset if it’s no longer used on the platform. Deleting a dataset used in Playground experiments may cause errors.

* Click the three dots icon in the last column, and choose **Download** or **Delete** as required.  
<img src="../images/download-or-delete-datasets.png" alt="Navigate to Data Module" title="Navigate to Data Module"/>



# Manage OCR Models 

The Manage OCR Models page is the central place to configure and maintain the document-processing engines used across your workflows. Engines such as **Docling** and **Azure Doc Intelligence** power the Doc Intelligence Node, enabling text extraction, layout understanding, and (when supported) structured data output.

Use this page to enable engines, deploy models, and keep your OCR capabilities up to date.

## Configure Docling Models

Docling models provide AI-powered document extraction, including text, layout, and structured data.

Select the Docling tab to deploy new models or manage existing deployments. Docling must be configured here before it appears as an available engine inside the Doc Intelligence Node. You can have multiple deployments of docking models.

### Deploy a New Docling Model

Follow these steps to configure and deploy a new Docling model:

1. Go to **Settings → Manage Models → OCR**.
2. Click **Deploy a Model** to open the deployment panel.
3. **General Details**:
    * Enter a unique deployment name and an optional description.
    * English ('en') is auto-selected by default. You can select one more additional language for better model performance.
4. **Resource allocation:** Configure the deployment resources:
    * Minimum replicas
    * Maximum replicas
    * Auto-scaling threshold
    * Hardware type
5. Verify all the configuration details.
6. Accept the terms and conditions and click **Deploy** to start the deployment process.

Once deployment is complete, the model appears in the Deployed list and becomes available for use in the Doc Intelligence Node.

<img src="../images/ocr_manage_docling.png" alt="manage OCR" title="manage OCR"/>

### Manage Existing Deployments

You can view and manage Docling deployments by clicking any deployment row to open its details.

**Overview:** Shows the current deployment status and key configuration details such as deployment name, selected language, scaling parameters, and allocated hardware resources.

<img src="../images/ocr_overview.png" alt="overview" title="overview"/>

**Deployment history:** Lists all past and current deployment versions for a model, along with status, timestamps, and ownership. Expanding a deployment entry reveals configuration and lifecycle details, including deployment and undeployment events, helping you audit configuration changes and track deployment activity over time.

<img src="../images/ocr_deployment_history.png" alt="deployment history" title="deployment history"/>

**Configurations:** Allows you to manage the deployment lifecycle:

* **Undeploy** an active deployment. Once undeployed, the model is no longer available to workflows.
* **Delete** an undeployed configuration. Deletion is disabled while a deployment is active and becomes available only after the deployment is undeployed.

<img src="../images/ocr_configurations.png" alt="Docling configurations" title="Docling configurations"/>


## Configure Azure Doc Models

The Azure Doc Intelligence page lets you connect external Azure document-processing models for use inside the Doc Intelligence Node. You can add multiple Azure connections, manage them, and control which ones are active for your workflows.

Azure must be configured here before it appears as an engine option in the Doc Intelligence Node.

### Add a New Azure Doc Model

You can add multiple Azure Doc Intelligence connections to your workspace and switch between them as needed.

Follow these steps to add an external Azure Doc Intelligence connection:

1. Go to **Settings → Manage Models → OCR → Azure doc**.
2. Click **Add a Connection** to open the connection panel.
3. Enter the required details:
    * **Connection Name** (must be unique)
    * **Base URL**
    * **API Key**
4. The system validates the API key and checks for duplicate names.
5. After validation succeeds, click **Save**.

A confirmation message appears, and the model is added to the list of available Azure connections.

### Manage Existing Connections

You can enable, disable, or delete Azure connections directly from the list using the available actions.

* **Enable or Disable a Connection**: Toggle the switch next to a connection to instantly enable or disable it.
* **Delete a Connection**: Click the delete icon, then confirm the action to permanently remove the connection.

<img src="../images/ocr_manage_azuredoc.png" alt="manage OCR" title="manage OCR"/>

# Account Limits and Notifications

When users create an account with AI for Process, they receive free credits - 75 model credits and 10,000 workflow runs by default. The model credits are used for model inference and setting guardrails, while workflow runs are consumed when inferring workflows. Once the free credits are fully exhausted, users will no longer be able to perform these actions. To continue using AI for Process’s services after the free credits are exhausted, users must add credits to their account by contacting AI for Process support.

## Exhaustion alerts for Model Credits and workflow Runs

AI for Process provides multiple alerts and warning notifications to inform users when their credits are running low or have expired. These notifications are crucial for:

* Helping users monitor their credit usage.
* Allowing proactive management to prevent service disruptions.
* Reminding users to add credits in advance to ensure uninterrupted access to AI for Process' features.

### Notification Methods

**Banner Alerts:** A banner appears at the top of the page to inform users of their usage status. The alert banners are displayed at 20%, 50%, 70%, 80%, and 90% exhaustion of model credits and workflow runs, giving users ample notice to take action. These banners ensure users are aware of low credits/runs in real time.

Banners will appear at the top of the page in the following cases:  

* Free credits expired: Users will see a fixed top banner prompting them to upgrade their plan.
* Model credits/workflow runs expired: Users will see a fixed top banner prompting them to upgrade or top up their current plan.  
* Model credits/workflow runs low: Users will see a removable banner encouraging them to top up or upgrade their plan.

For example, *“Your model credits and workflow runs are low, and fine-tuning is disabled. Please contact AI for Process Support for uninterrupted service.”*

**Email Notifications:** The system automatically sends email notifications to users when their credit levels fall below a specified threshold, including warnings for both model credits and workflow runs. Emails will be sent at 50%, 70%, 80%, and 90% exhaustion of model credits and workflow runs, giving users ample notice to take action. These emails include instructions on the next steps to resolve the issue, such as adding more credits by contacting AI for Process support.

For example, *“This is to inform you that your model credits are getting low. You cannot start a new model fine-tuning job unless you have more than 25 model credits. To ensure uninterrupted service, kindly top up your plan with more model credits or contact AI for Process Support.”*

!!! note

    Billing usage is tracked and displayed on the Billing Usage page. This page displays workflow runs and model credit consumption, allowing users to easily track and adjust their usage as necessary.
    
## Credit Usage Summary

Users can easily track their usage and know when to take action. A **Clock** icon on the top right of the page visually represents credit usage. Click to view the following usage summary information:

* The unique **Account ID** for the user or account. Click the **Copy** icon to copy and share this ID with the backend team for further debugging an issue in the account.
* **Credits**: The *Total allocation* and *remaining credits* available in the account for the usage of models, guardrails, and custom scripts.
* **workflow Runs**: The *Total allocation* and *remaining workflow runs* available in the account for the usage of the workflows automation flow.
  <img src="../images/account-id-display.png" alt="account id" title="account id"/>

To view detailed information on billing and usage, click **Manage billing**. [Learn more](../billing/billing-and-usage.md). 


As credits are consumed, the dynamic pie chart indicates how much of the available credits have been used. The icon's color dynamically changes based on your credit usage, providing a clear visual indicator of your remaining balance.

* **Green (Good Balance)**: The icon is mostly or fully green, indicating that more than 75% of credits are available and the user has a healthy credit balance.
* **Yellow/Orange (Moderate Usage)**: As credits are used, the icon turns yellow or orange, indicating that 25% - 75% of credits remain and that the user is using a moderate amount of credits.
* **Red (Low Credits)**: The icon turns red when less than 25% of credits remain, warning the user to add credits soon to avoid disruption.
* **Triangle Icon (Credits Exhausted)**: When credits are fully depleted, the icon changes to a triangle (associated with a warning), indicating that no credits are left. Users must add credits to resume services like model deployments or workflow runs.

For help with adding credits or managing your account, [contact](https://kore.ai/support/) AI for Process Support.


# Models Performance Analytics

The **Model Analytics Dashboard** is a comprehensive analysis and monitoring solution that provides unified performance tracking for [fine-tuned](../../../models/fine-tune-models/create-a-fine-tuned-model.md), [open-source](../../../models/open-source-models/configure-your-open-source-model.md), and [external models](../../../models/external-models/add-an-external-model-using-easy-integration.md) in your account. The dashboard measures and visualizes key performance indicators for the selected period, including:

* Model latency and response times
* Request success and failure rates
* Model scaling patterns and usage
* Credit consumption for deployments and fine-tuning

**Key Features**

* **Interactive graphs and widgets** with real-time data updates.
* **Global Timeline Filters** for account-wide performance analysis of the selected model type. [Learn more](../analytics/model-analytics-dashboard.md#global-timeline-filters).
* **Detailed Performance Filters** for model-specific metrics. [Learn more](../analytics/model-analytics-dashboard.md#model-performance-filters).
* **Expandable analytics widgets** for in-depth data exploration. [Learn more](../analytics/model-analytics-dashboard.md#expanded-widget-view).
* **Hover-enabled data points** for instant metric insights.
* Support for both hourly and daily performance trends.
* Dashboard **Refresh capability** to update the latest data on the dashboard.
<img src="../images/model-analytics-dashboard-refresh.png" alt="dashboard refresh" title="dashboard refresh"/>

* Widget-wise **Tooltip support** to get quick summaries of the monitored metrics.
* Ability to analyze model deployment and fine-tuning data based on the credit usage summary. 
* Indication of maximum replicas autoscaling threshold based on usage subscription for the account.

**Best Practices**

* Track latency and request statuses for all or specific models within a chosen category and period to make data-driven decisions.
* Analyze credit consumption for deployment and fine-tuning requests and the total number of models deployed and fine-tuned in your account.
* Apply time-based filters at both global and widget levels for focused and accurate analysis.
* Compare model performance over time by analyzing successful versus failed requests and identifying failure patterns.
* Decide on model scaling and usage based on the max replicas limit set for your account.

## Navigate to the Model Analytics Dashboard

To access the **Model Analytics** dashboard, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. On the left menu, select **Monitoring** > **Analytics**.
3. Click the **Model Analytics** tab on the right-hand side screen.

The system loads the **Model Analytics** dashboard with data for the last 7 days, which is the default time range selection. You can select the required period to generate data.

## Key Performance Metrics

### Account-Level Metrics

The following metrics summarize the **credit usage** and **counts** for [fine-tuned](../../../models/fine-tune-models/create-a-fine-tuned-model.md), [open-source](../../../models/open-source-models/select-and-deploy-an-open-source-model.md), and [external models](../../../models/external-models/add-an-external-model-using-easy-integration.md) at the account level:

* **Credits consumed in deployment**: It shows the number of credits deducted from your account when deploying the model(s).
* **Credits consumed in fine-tuning**: It shows the number of credits deducted from your account when fine-tuning the model(s).
* **Number of Deployed Models**: The number of models deployed in your account.
* **Number of Fine-tuned models**: The count of the models fine-tuned in your account.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Hover over the "<b><i>i</i></b>" icon to view the information summary for the metric.</p>
</div>

<img src="../images/hover-over-icon.png" alt="hover over icon" title="hover over icon"/>

To generate and view the required model analytics data, use the **Global Timeline Filters**. [Learn more](../analytics/model-analytics-dashboard.md#global-timeline-filters).

### Model-specific Metrics

The following metrics help analyze the performance of the selected open-source/fine-tuned model and version in your account during the selected period:

* **Model Latency**: It shows the model version’s latency for each request when selecting a 24-hour or 7-day period. The average daily latency is displayed for date ranges longer than 7 days. [Learn more](../analytics/model-analytics-dashboard.md#model-latency).
* **Requests**: Depicts the success and failure trends of the requests the selected model version executes. Additionally, the widget displays the **total requests** and the **Avg. credits per request** (total credits consumed by the model / the total requests it receives). The graph depicts requests executed per day when you select a date range. For 24 hours, an hourly graph is shown. [Learn more](../analytics/model-analytics-dashboard.md#requests).
* **Model Scaling and Usage**: It shows the number of model replicas and hardware used to scale up or down during deployment. [Learn more](../analytics/model-analytics-dashboard.md#model-scaling-and-usage).

For **External Models**, the following performance metrics appear on the dashboard for the selected period:

* **Tokens**: Displays a bar chart depicting the number of input tokens provided to the model and the number of output tokens generated by the model. Please refer to Point 10 [here](../../../models/external-models/add-an-external-model-using-api-integration.md#add-an-external-model).
* **Model Latency**: It shows the model version’s latency for each request when selecting a 24-hour or 7-day period. The average daily latency is displayed for date ranges longer than 7 days. [Learn more](../analytics/model-analytics-dashboard.md#model-latency).
* **Requests**: Depicts the success and failure trends of the requests the selected model version executes. Additionally, the widget displays the **total requests** the model executes. The graph depicts requests executed per day when you select a date range. For 24 hours, an hourly graph is shown. [Learn more](../analytics/model-analytics-dashboard.md#requests).

To view the required data, use the [Global Timeline Filters](../analytics/model-analytics-dashboard.md#global-timeline-filters) and [Model Performance Filters](../analytics/model-analytics-dashboard.md#model-performance-filters). 

## Global Timeline Filters

Use the options on the top panel to generate account-level and model-level data for a specific period. [Learn more](../analytics/workflows-analytics-dashboard.md#global-timeline-filters).

## Model Performance Filters

The following widget-level filters apply exclusively to model-specific metrics, providing real-time analytics when used with a [Global Timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters). The available filters depend on the selected  model type.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If multiple deployments exist for the same model name, they are listed along with their respective deployment timestamps.</p></div>

**Fine-tuned and Open-source Models**

* **Select Model (Model Name)**: Select the deployed model from the list to see the associated analytics data.
* **Select Deployment**: Choose the model’s deployment name from the list.
* **Select Filter (version)**: Choose the model’s deployment version from the list to view the associated data.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p><ul><li>If no versions exist for a model, the dropdown list is empty.</li>
    <li> By default, data for all model versions is displayed unless a specific version is selected.</li></ul></p></div>

    <img src="../images/fine-tuned-model-filters.png" alt="model name and version filter" title="model name and version filter"/>

**External Models**

* **Select Model (Model Name)**: Select the deployed model from the list to see the associated analytics data.
* **Select Connection**: Select the third-party service connection name for the external model.

    <img src="../images/external-model-filters.png" alt="model name and version filter" title="model name and version filter"/>

## How it Works

1. Select the required date/date range in the [Global Timeline Filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters).
2. Select the tab for the required model type, like *Fine-tuned*, *Open-source*, or *External*.
3. For Fine-tuned or Open-source models, choose the *model name* and optionally the *deployment name* and *version*. Alternatively, for External Models, select the *model name* and *connection name* from the dropdown lists.
4. The widgets display an hourly graph for 24 hours per day and a daily graph for the respective metrics for a date range.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The widget shows data only for the duration that the model was deployed in your account. For instance, if Model A was active for 4 days last week and undeployed for the next 3 days, selecting a 7-day view will display data solely for those 4 active days and the associated request times.</li>
<li>The graph will show curves only when requests are processed by the model. If no requests are processed during an hour or day, no data points will appear.</li></ul></p></div>

## Model Performance Data Widgets

The **Model Analytics** dashboard displays the widgets given below to represent the [model-specific performance](../analytics/model-analytics-dashboard.md#model-specific-metrics) metrics. The graphs update automatically when a different model deployment version is selected.

### Model Latency

This widget is available for **Fine-tuned**, **Open-source**, and **External** models. It features a line graph illustrating the selected model version’s latency during the selected period in the [Global Timeline Filter](../analytics/model-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Latency** in milliseconds, and the X-axis indicates the **Date**. 

**Key Features**

* A blue line graph represents the **Latency** if the selected period is 24 hours or 7 days. The **Average Latency** graph is displayed when you select a date range above 7 days.
* The **Latency** (Y-axis) automatically scales according to the requests the model executes for the selected period.
* Hover over a data point on the line graph to view the latency for a specific request when selecting a 24-hour or 7-day period or the average latency for a specific date and time when using a longer date range. For example, you can check the latency for an individual request in the last 24 hours or the average latency (aggregated for all requests per day) on January 16, 2024, at 11:35 AM.

<img src="../images/hover-over-info.png" alt="hover over info" title="hover over info"/>

**Best Practices**

You can do the following to analyze model performance:

* **Latency Tracking and Trend Analysis**: Tracking latency over various periods offers valuable insights into performance trends, helping to identify peak usage and low-efficiency times. This helps further fine-tune your model for improved performance. 
* **Real-Time Monitoring and Comparative Analysis**: The widget enables real-time performance tracking and comparison of the deployed model versions, allowing you to quickly respond to sudden latency spikes and identify the best-performing option.
* **Track Credits Usage**: Track credit usage for model deployment and fine-tuning, based on average latency over time, to optimize resource allocation and manage costs efficiently.

### Requests

This widget is available for **Fine-tuned**, **Open-source**, and **External** models. It features two dynamic graphs illustrating successful and failed requests executed by the model during the selected period in the [Global Timeline Filter](../analytics/model-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Number of Requests**, and the X-axis indicates the selected **Date**.

**Key Features**

* Successful runs are displayed in green, and failed runs are shown in red.
* The **Number of Requests** (Y-axis) automatically scales to accommodate increased requests across different date selections.
* Hover over a data point on the success and failure line graphs to view the number of successful or failed requests at that specific date and time, as well as the total number of successful or failed requests executed by the model for the selected duration. For example, you can check the request counts at 11:25 AM on January 16, 2024. Additionally, the total number of successful or failed requests between January 1 and January 31 is displayed.
* **Total Requests** represents the total of successful and failed requests executed by the model during the selected period.
* **Avg. credits per request**: The value is calculated by dividing the total number of credits consumed by the model by the total number of responses generated by the model for the requests it processed.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Avg. credits per request is not displayed for external models.</p></div>

<img src="../images/requests-hover-info.png" alt="requests hover info" title="requests hover info"/>

**Best Practices**

You can do the following to analyze the model’s performance:

* **Performance Tracking**: By viewing successful and failed requests, you can monitor the model’s performance, identifying how often the model responds successfully versus when they fail for the same or different dates.
* **Trend Analysis**: Tracking requests across different periods provides insights into performance trends, identifying peak and low-performance periods.
* **Real-Time Monitoring**: The widget allows you to monitor model performance in real time, enabling quick responses to sudden spikes in failures or performance drops.
* **Comparative Assessment**: Evaluate the performance of different model versions to determine the most effective option.

### Model Scaling and Usage

This widget is available for **Fine-tuned** and **Open-source** models. It features a step graph illustrating the usage and scaling, meaning the number of replicas with a specific hardware configuration deployed for the selected model version in the [Model Performance Filter](../analytics/model-analytics-dashboard.md#model-performance-filters) and the period in the [Global Timeline Filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Number of Replicas**, and the X-axis indicates the selected **Date**.

**Key Features**

* A blue step graph represents the **Number of Replicas** for the specified hardware configuration deployed in your account. It shows when fewer, more, or the same number of model replicas are deployed to generate responses.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>"<b>Multiple Hardware</b>" is displayed when replicas with more than one hardware configuration are deployed across a date range.</p></div>


* The Y-axis automatically adjusts based on the increase in the deployed replicas during the selected period.
* Each upward step in the graph represents the generation of additional model replicas, continuing until deployment is complete (indicated by the Max Replicas line). The downward steps show the undeployment of replicas.
* Hover over a data point on the step graph to view the timestamp, deployment version name, number of replicas, and hardware configuration deployed at that point by the model version. For example, you can check the replicas and hardware usage on January 16, 2024, at 11:35 AM for the last 30 days.

<img src="../images/model-scaling-hover-info.png" alt="model scaling hover info" title="model scaling hover info"/>

#### Maximum Replicas Limit for a Single-Day Selection

The **Model Scaling and Usage** widget displays the graph with the Y axis set up to the maximum number of replicas configured during the model deployment. This limit is indicated by a red line. 

<img src="../images/max-replicas.png" alt="max replicas" title="max replicas"/> 

**Best Practices**

* **Usage and Scaling Monitoring**: Track replica deployments over a specific period to identify spikes in usage, optimize hardware consumption, and manage credit usage effectively.
* **Resource Optimization**: Visualizing deployment trends helps spot inefficiencies, enabling you to fine-tune replica usage for greater efficiency.
* **Replica Limit Tracking**: This analysis lets you monitor scaling in relation to your account's replica limits, ensuring you stay within subscription thresholds.
* **Troubleshooting**: Analyzing deployment patterns can reveal issues or bottlenecks in your model, helping you quickly detect and resolve performance problems.
* **Trend Analysis**: Comparing replica deployments over time enables you to identify performance patterns, making it easier to make informed, data-driven decisions for scaling and optimization.

### Tokens

This widget is available exclusively for external models. It displays bar graphs showing the input tokens sent to the selected provider’s model for processing requests and the output tokens generated during the period selected using the [Global Timeline Filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Number of Tokens** (in *K* or thousands), and the X-axis indicates the selected **Date**.

**Key Features**

* A stacked bar graph illustrates the output and input tokens in two different shades, representing them as parts of the total number of tokens allocated to the model. This graph compares the number of output tokens generated and the input tokens provided to the model.
* The Y-axis automatically adjusts to reflect the increase in the number of tokens processed by the model.
* The widget displays the total sum of input and output tokens, as shown below.

<img src="../images/input-output-tokens.png" alt="input output tokens" title="input output tokens"/>

* Hover over a data point on the graph to view the timestamp and the input and output tokens processed at that point by the model version. For example, you can check the input and output token counts on January 16, 2024, at 11:35 AM for the last 30 days.
<img src="../images/tokens-hover-info.png" alt="tokens hover info" title="tokens hover info"/>

**Best Practices**

* **Performance Evaluation**: Understanding token counts helps assess the model's efficiency in processing input and generating output, i.e., fewer input tokens and higher output tokens.
* **Resource Management**: By tracking token usage, you can optimize credit consumption associated with tokens.
* **Model Tuning**: Analyzing input and output tokens can provide insights for fine-tuning the model and improving its accuracy and response relevance.
* **Identifying Bottlenecks**: Monitoring token counts helps proactively identify and troubleshoot potential bottlenecks in the model's processing pipeline.
* **Usage Trends**: Tracking token counts over time can reveal usage patterns, helping to forecast and adjust model deployments.
* **Scalability Insights**: Understanding token counts can guide scaling decisions, ensuring the model can handle varying loads effectively.

## Expanded Widget View

You can expand any widget on the **Model Analytics Dashboard** for a drill-down view of the analytics trends. Each expanded view enables you to apply widget-level filters, offering a focused analysis of model performance for that widget.

The widget-level filters include the following:

* [Global Timeline Filters](../analytics/workflows-analytics-dashboard.md#global-timeline-filters) for all the model types.

* [Model Performance Filters](../analytics/model-analytics-dashboard.md#model-performance-filters) for Open-source and Fine-tuned models.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>Changes made to the filters in the expanded view of a widget do not affect the main dashboard or the global filters.</li>
<li>Hover over the required data point to view widget analytics data.</li></ul></p></div>

To expand a widget, hover over the top-right corner of the widget and click the **Double-arrow** icon.

<img src="../images/model-latency-info.png" alt="model latency expand arrow" title="model latency expand arrow"/>

The expanded views of all the widgets are shown below:

**Model Latency**

<img src="../images/model-latency-time-filter.png" alt="model latency time filter" title="model latency time filter"/>

**Requests**

<img src="../images/requests-expanded-view.png" alt="requests expanded view" title="requests expanded view"/>

**Model Scaling and Usage**

<img src="../images/model-scaling-and-usage-expanded-view.png" alt="model scaling expanded view" title="model scaling expanded view"/>

**Tokens**

<img src="../images/tokens-expanded-view.png" alt="tokens expanded view" title="tokens expanded view"/>

With intuitive data visualization and dynamic filtering capabilities, the **Model Analysis Dashboard** enables data-driven decisions for model optimization, resource allocation, and performance monitoring.

## Related Links

* **Settings Console** - [Learn more](../../overview.md) about other AI for Process admin features.
* **Monitoring: Audit Logs** - [Learn more](../audit-logs.md) about tracking activities and events in your account.
* **Monitoring: Workflows Analytics Dashboard** - [Learn more](../analytics/workflows-analytics-dashboard.md) about getting actionable insights into workflows’ performance.



# Model Traces - Analyze Run-level Performance

The **Model Traces** feature offers a comprehensive view of model performance across runs, enabling tracking of request-level data and key metrics. With features for filtering, searching, and exporting data, it supports precise analysis and troubleshooting, ensuring optimal performance and efficient resource usage. These insights help proactively address issues, supporting informed decision-making and streamlined operations.

## Benefits

Monitoring open-source, fine-tuned, commercial, or custom API models offers the following benefits:

* **Detailed Analysis**: Model Tracing allows an in-depth analysis of the model’s performance across all handled requests, enabling review of inputs, generated outputs, and associated run-based metadata.
* **Optimization**: Regular monitoring helps track key metrics like total requests, failure rates, response times, input, output, and credit consumption to ensure optimal model performance over time.
* **Cost Management**: Monitoring total requests and consumed credits (Host Credits) enables analysis of failure trends, consumption spikes, and alignment with expected outcomes, providing improved cost visibility and control.
* **Scalability**: Usage data from monitored runs reveals performance patterns for improved model scalability.
* **Compliance and Security**: Tracking models across multiple requests helps ensure that input and output data handling is secure, ethical, and regulated.
* **Troubleshooting and Maintenance**: Tracking errors and failures across runs using request metadata and JSON code helps identify and troubleshoot issues, inefficiency, and interruptions.

## Key Features

* **Column Filters** enable you to view specific records by setting a column value or combining multiple filters using AND/OR operators. [Learn more](./model-traces.md#filter-model-traces-by-columns).
* **Time-based filters** provide a comprehensive view of the selected model's performance across runs for a specific past date or date range. [Learn more](./model-traces.md#time-based-filters).
* **Search** lets you look up a specific run(s) of a model using the *Request ID* and other *String* type column values.
* Hovering over specific metrics displays a tooltip that provides additional information about the metric's purpose and significance.
* When selecting a date range filter, you can obtain **hourly performance analysis** for a model on a specific day or review **daily performance trends**.
* Click the **Visibility Filter** icon shown below to add or remove the selected column(s) from the table view of records. Turn on the toggle to add a column and turn it off to remove it.
<img src="../images/visibility-icon.png" alt="visibility icon" title="visibility icon"/>
* Successful requests are marked with a **green check icon**, while failed requests are marked with a **red alert icon**.
<img src="../images/success-failed-requests.png" alt="success and failed requests" title="success and failed requests"/>

* Export the model traces dataset for your model into a CSV file for further analysis, editing, and debugging.
* The **Metrics Summary** showcases the key performance metrics of the selected model across all executed runs. [Learn more](./model-traces.md#performance-metrics-summary).
* The **table view** summarizes key metadata for successful and failed runs of the selected model, offering quick insights and the ability to monitor run-specific response times, analyze input and output, view failed runs in detail, and verify whether credit consumption aligns with usage. 
* Click the **Sort** filter in the **Executed on** column to view the data in ascending or descending order by execution date.
<img src="../images/model-traces-sort.png" alt="model traces sort" title="model traces sort"/>

* Click on each model traces record in the table to view the input, output, and key metadata. [Learn more](./model-traces.md#traces-input-output-and-metadata).

## Best Practices

* Track the **Total Requests** versus **Hosting Credits** for fine-tuned and open-source models created, deployed, and monitored on AI for Process to optimize usage.
* Analyze successful versus failed runs to compare model performance over time and identify failure patterns using failure rates for all model types.
* Identify model runs with low or high response times using P90 and P99 thresholds and isolate under-performing runs for further investigation.
* Apply time-based and record filters for focused and accurate analysis.
* Analyze the input for each request, the output generated by the model, the response time, and the source or module from which the request originated. This analysis supports performance insights, error diagnosis, source identification, and optimization of usage and user experience.
* View, copy, and edit input and output text or JSON code to enhance understanding and facilitate troubleshooting of the model run.
* Perform model tracing using run-specific metadata, including the base model used, response time, input and output token counts, request source information, and the name of the account user who executed the run.

## Access Model Traces 

To access the **Model Traces**, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. On the left menu, select **Monitoring** > **Model Traces**.
3. If this is your first time accessing the feature, select the desired model from the dropdown menu shown below.
    <img src="../images/get-started-model-traces.png" alt="get started with model traces" title="get started with model traces"/>

The system loads the **Model Traces** feature with data for the last 30 days, which is the default time range selection. 

If you have used the feature before, the data from your previous model selection is loaded for 30 days (the default selection).
<img src="../images/preload-model-traces-data.png" alt="preload model traces data" title="preload model traces data"/>

## Model Traces Information

**Model Traces** offers a centralized view of run-level insights for the selected model deployed in your account. It displays information across multiple deployments. For open-source and fine-tuned models, you can filter data by deployment name, while for external models, data is shown based on the connection name.

The key features for customizing the model traces data include:

* **Model Name Filter**: Required for selecting and viewing information specific to the model you want to monitor.
    * For open-source and fine-tuned models, you can select from different deployment names, including the versions for the model. 
      <img src="../images/traces-os.png" alt="model name filter" title="model name filter"/>

    * For commercial models, you can select the default connection linked to the model.
       <img src="../images/traces-external.png" alt="external filter" title="external filter"/>  

* **Time Selection Filter**: Required to analyze model traces data for a specific time-frame in the past. [Learn more](./model-traces.md#time-based-filters).
* **Filter By Option**: An optional multi-field, multi-level filter for targeted analysis. [Learn more](./model-traces.md#filter-model-traces-by-columns).
* **Visibility Filter**: Add or remove columns from the UI to display only relevant data. To set the filter, click the **Eye** icon, enable the field to view its data, and disable it otherwise.
<img src="../images/visibility-filter.png" alt="visibility filters" title="visibility filters"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>By default, all the columns are visible in the table.</li>
<li>You can adjust visibility for 8 columns in open-source and fine-tuned models and 7 columns for other model types.</li>
<li>The <b>Deployment Type</b> filter is available only for open-source and fine-tuned models, not for external or custom API types.</li></ul></p></div>

<ul><li><b>Export Data</b>: Click <b>Export</b> to generate a <i>CSV</i> file of your model traces records based on the selected date range and filters. Note that all eight columns in the table are prepared and exported, irrespective of the applied visibility filter.</li>
<img src="../images/click-export.png" alt="export" title="export"/></ul>

The progress status is displayed in the UI when preparing and exporting data.
<img src="../images/export-progress-status.png" alt="export progress" title="export progress"/>

Once the file is downloaded, the following message is displayed.
<img src="../images/export-model-traces-success.png" alt="export success" title="export success"/>

If any error occurs during the export process, the following message is displayed:
<img src="../images/export-failed-notification.png" alt="export error" title="export error"/>

Below is a sample of the export schema file. The file name is automatically saved in the format <code>modelname_traces_data</code>, such as <code>GPT4_traces_data</code>.
<img src="../images/export-schema.png" alt="export schema" title="export schema"/>

<div class="admonition note">
<p class="admonition-title">Key Considerations</p>
<p><ul><li>Each user’s export process is implemented separately, ensuring that one user's cancellations or adjustments do not interfere with another user’s export pipeline.</li>
<li>Users can cancel an ongoing export operation, if required.</li></ul></p></div>

* **Search**: You can locate specific model traces records on the UI by entering the run's *Request* *ID* in the **Search** textbox. The system returns matching results, as shown below.
<img src="../images/search-record-model-traces.png" alt="search model traces record" title="search model traces record"/>

* **Model Performance Metrics Summary**: Summarizes key metrics to help quickly analyze the model’s performance. [Learn more](./model-traces.md#performance-metrics-summary).
* **Model Traces**: The table displays all runs executed by the model since its configuration, sorted by execution date from the latest to the oldest records. It includes data from the initial execution onward—whether deployed (for open-source and fine-tuned models) or integrated (for external models). The table includes the following metrics:
    * **Status**: An icon indicating the success or failure of the run is displayed. See point 7 [here](./model-traces.md#key-features).
    * **Request ID**: The unique identifier used for the run record. 
    * **Response Time**: The time taken by the model to respond to a request.
    * **Deployment Version**: The model version deployed in your account. 
    * **Source Type**: The source type that initiated the request. 
    * **Source**: The source name from where the request was initiated.

Please refer to the table [here](./model-traces.md#steps-to-add-a-custom-filter) for more information on the above metrics.

* **Executed on**: The run execution timestamp, with records displayed from latest to oldest by date.
* **Input**: Displays the input text provided for the run execution.
* **Output**: Displays the output text generated or response after the run.

To view the detailed trace information, click the required record.
<img src="../images/detailed-trace-information.png" alt="click traces record" title="click traces record"/>

## Performance Metrics Summary

The UI summarizes key metrics for the selected period, offering actionable insights into the deployed model’s performance. 

* **Total Requests**: The total number of requests/runs serviced by the model since its deployment in your account. The metric reflects an LLM model's processing speed and efficiency, helping identify performance issues and optimize responsiveness.
* **Response Time**: P90 and P99 response times show the thresholds below which 90% and 99% of responses fall, indicating model consistency. Lower values reflect reliable speed, while higher values suggest performance issues. For example,
    * If a model's P90 is 100 seconds, it means that 99% of the requests are completed within 100 seconds.
    * If a model's P99 is 100 seconds, it means that 99% of the requests are completed within 100 seconds.
* **Failure Rate**: Indicates the number of requests/runs that failed with an error code or were not serviced by the model out of the total requests sent since deployment. For example, if 5 requests failed out of 100, the failure rate displayed is 5%.
* **Hosting Credits**: Displays the credits consumed in your account by the deployed model based on its usage.  This metric allows for a comparison of credit consumption against actual model usage.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Hosting Credits apply only to AI for Process’ open-source and fine-tuned models and are not displayed for external models.</p></div>

<img src="../images/hosting-credits.png" alt="hosting credits" title="hosting credits"/>

## Time-based Filters

Use the time selection filter to view and monitor model traces across runs within a specific period. This allows you to focus on requests within a set time-frame to track changes or perform targeted debugging.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li><b>Last 30 Days</b> is the default selection, which displays data for the past 30 days from the current date.</li>
<li>Data is displayed only if requests/runs were executed by the selected model during the selected period.</li></ul></p></div>

Time selection is available for the past and current period, including the ones listed below:

<ul><li><b>All Time</b>: Displays the runs' data since the time the account was created.</li>
<li><b>Today</b>: Includes data generated on the current day.</li>
<li><b>Today</b>: Includes data generated on the current day.</li>
<li><b>Yesterday</b>: Includes data generated on the previous day.</li>
<li><b>This Week</b>: Displays data for all the days in the current week.</li>
<li><b>This Month</b>: Displays data for all the days in the current month.</li>
<li><b>Last Month</b>: Displays data for all the days in the previous month.</li>
<li><b>Last 30 Days</b>: Displays data for the past 30 days from the current date.</li>
<li><b>Last 90 Days</b>: Displays logs for the past 90 days from the current date.</li>
<li><b>This Year</b>: Displays logs for all the days in the current year.</li>
<li><b>Last Year</b>: Displays logs for all the days in the past year.</li></ul>

### Steps to Set Time Range for Model Traces

1. [Navigate](../analytics/model-traces.md#access-model-traces) to the **Model Traces** feature.
2. Click the time selection button (displays **Last 30 Days**).
<img src="../images/time-selection-button.png" alt="time selection button" title="time selection button"/>

3. Select the required period on the left panel, or select a specific date, month, or year on the calendar widget (the current day is the default selection).
4. Click **Apply**.
<img src="../images/select-and-apply.png" alt="select date" title="select date"/>

The relevant model traces' data is displayed for the selected period.

### Key Considerations and Tips

The date range is automatically selected on the calendar widget once you select the period and displayed at the bottom of the widget.
<img src="../images/date-range-display.png" alt="date range display" title="date range display"/>

You can select a specific month or year from the relevant dropdown list and switch to different months by clicking the **forward/backward** arrows.
<img src="../images/calendar-widget.png" alt="calendar widget" title="calendar widget"/>

To set a specific past date as the start date, click on the desired date in the widget.

By default, the current day will be set as the end date. This feature allows you to easily customize the period you want to monitor and analyze model traces.
<img src="../images/default-calendar-selection.png" alt="default selection" title="default selection"/>

## Filter Model Traces by Columns

You can narrow down the information displayed for model traces by applying **custom column filters**. This functionality is similar to **Filter** in the Audit Logs feature. [Learn more](../audit-logs.md#filter-audit-logs).

These filters allow you to select specific column values, compare the chosen or entered values, and apply logical operators across columns for multi-level filtering, providing targeted, custom data on the UI.

Filter customization streamlines tracking and debugging of model runs at a detailed level, enhancing user experience.

### Steps to Add a Custom Filter

1. [Navigate](./model-traces.md#access-model-traces) to the **Model Traces** feature.
2. Click the **Filter** icon.
3. Click **+ Add Filter**.
<img src="../images/click-add-filter.png" alt="add filter" title="add filter"/>

4. In the **Filter By** window, select the required option from the **Select** **Column**, **Operator**, and **Value** dropdown lists. For specific column filters, you must enter the value manually.
<img src="../images/filter-selection-model-traces.png" alt="filter selection" title="filter selection"/>

The table below summarizes the available columns along with their supported operators and values. 

<table>
  <tr>
   <td>
<strong>Column Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Comparison Operator</strong>
   </td>
   <td><strong>Input Type for Value</strong>
   </td>
   <td><strong>Value Options</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="2" ><strong>Status</strong>
   </td>
   <td rowspan="2" >Indicates the status of the model’s executed run. 
   </td>
   <td>Is Equals To
   </td>
   <td rowspan="2" >List Selection
   </td>
   <td rowspan="2" >
<ul>
<li><strong>Failed</strong>: Indicates failed runs.</li>
<li><strong>Success</strong>: Indicates successful runs.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Is Not Equals To
   </td>
  </tr>
  <tr>
   <td rowspan="3" ><strong>Request ID</strong>
   </td>
   <td rowspan="3" >The unique ID associated with the model run/request.
   </td>
   <td>Is Equals To
   </td>
   <td rowspan="3" >Enter manually
   </td>
   <td rowspan="3" >Any value
   </td>
  </tr>
  <tr>
   <td>Is Not Equals To
   </td>
  </tr>
  <tr>
   <td>Contains
   </td>
  </tr>
  <tr>
   <td rowspan="6" ><strong>Response Time</strong>
   </td>
   <td rowspan="6" >The response time of the model for the executed request.
   </td>
   <td>Is Equals To
   </td>
   <td rowspan="6" >Enter manually
   </td>
   <td rowspan="6" >Enter the numeric values for minutes,  seconds, and milliseconds in the m:s:ms format.
   </td>
  </tr>
  <tr>
   <td>Is Not Equals To
   </td>
   </tr>
  <tr>
   <td>Is Greater Than
   </td>
  </tr>
  <tr>
   <td>Is Less Than
   </td>
  </tr>
  <tr>
   <td>Is Greater Than Equals To
   </td>
  </tr>
  <tr>
   <td>Is Less Than Equals To
   </td>
  </tr>
  <tr>
   <td rowspan="3" ><strong>Deployment Version</strong>
   </td>
   <td rowspan="3" >The version of the model deployed for the specific run.
   </td>
   <td>Is Equals To
   </td>
   <td rowspan="3" >Enter manually
   </td>
   <td rowspan="3" >Any value
   </td>
  </tr>
  <tr>
   <td>Is Not Equals To
   </td>
  </tr>
  <tr>
   <td>Contains
   </td>
  </tr>
  <tr>
   <td rowspan="3" ><strong>Source Type</strong>
   </td>
   <td rowspan="3" >The source type from which the run request was sent to the model.
   </td>
   <td>Is Equals To
   </td>
   <td rowspan="3" >List Selection
   </td>
   <td rowspan="3" >
<ul>

<li><strong>Workflow</strong>: The request was sent to the model from a workflow. [Learn more](../../../workflows/overview.md).</li>

<li><strong>Prompts</strong>: The request was sent to the model from a Prompt experiment. <a href="../../../../prompts/using-prompt-studio/" >Learn more</a>.</li>

<li><strong>API Key</strong>: The request was sent to the (open-source) model using an API key. <a href="../../../../models/open-source-models/generate-an-api-key-open-source/" >Learn more</a>.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Is Not Equals To
   </td>
  </tr>
  <tr>
   <td>Contains
   </td>
  </tr>
  <tr>
   <td rowspan="3" ><strong>Source</strong>
   </td>
   <td rowspan="3" >The source from which the model received the run request.
   </td>
   <td>Is Equals To
   </td>
   <td rowspan="3" >List Selection
   </td>
   <td rowspan="3" >Custom value(s) set by the user.
   </td>
  </tr>
  <tr>
   <td>Is Not Equals To
   </td>
  </tr>
  <tr>
   <td>Contains
   </td>
  </tr>
</table>

<ol start="5"><li>Click <b>Apply</b>.</li>
<img src="../images/apply-filter-model-traces.png" alt="apply filter" title="apply filter"/></ol>

The UI displays all the relevant model traces' records that align with the applied filter(s). The number of filters you have applied is displayed on the **Filter** icon.
<img src="../images/number-of-filters.png" alt="number of filters" title="number of filters"/>

To clear the filter settings, click **Clear All**.

<img src="../images/clear-all-link.png" alt="clear all" title="clear all"/>

### Add Multiple Filters

Adding multiple filter levels enhances model trace visibility on the UI. You can combine column, operator, and value filters using the AND/OR operators for targeted data, allowing you to focus on the model trace entries most relevant to your needs. [Learn more](../audit-logs.md#add-multiple-filters).

**Important**

* AND/OR operators cannot be combined in multiple filtering steps to set filter criteria, ensuring consistent operator usage for each filtering step.
* Using the AND operator ensures that all specified conditions must be met for an entry to be included in the results.
* On the other hand, using the OR operator broadens the criteria, allowing entries that meet any of the specified conditions to be included. These operators provide flexibility in tailoring your model traces data.
* Click the **Delete** icon to delete a filter criteria step.
<img src="../images/delete-filter-icon.png" alt="delete filter" title="delete filter"/>

#### Steps to Add Multiple Filters

1. Follow **Steps 1 to 3** mentioned [here](./model-traces.md#steps-to-add-a-custom-filter).
2. Select the **AND/OR** operator tab in the **Filter by** window.

    <img src="../images/select-operator-filter.png" alt="select operator" title="select operator"/>

3. Follow **Steps 4 to 5** mentioned [here](./model-traces.md#steps-to-add-a-custom-filter).

The matched model traces entries are displayed in the UI.

## Traces: Input, Output and Metadata

Clicking on a run/request record on the UI opens the detailed **Traces** window displaying the Request ID and the following information:

### Input and Output Panels

* The **Input** panel displays the request (text) provided to the model using input tokens to execute the request.
* The **Output** panel displays the text output or response generated by the model using output tokens after the run execution.

**Key Considerations**

* Plain text is the default display format.
* Enabling JSON mode allows you to access the JSON view of the input in the editor. This view provides the complete response/request payload sent to the model, including additional keys and details not visible in plain text format.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>The model name shown in the code editor includes the deployment version for open-source and fine-tuned models, and the connection name for externally hosted models.</p></div>

* The text and JSON code cannot be modified in the editor.
<img src="../images/json-editor-model-traces.png" alt="json editor" title="json editor"/>

* Click the **Copy** icon to copy the text or code and paste it into your preferred editor for debugging or troubleshooting.
<img src="../images/copy-input.png" alt="copy input" title="copy input"/>

* The key metadata related to the processed request is shown in a separate panel, discussed in the next section.

### Metadata Panel

The following model run metadata helps analyze the model’s performance.

**For Fine-tuned and Open-source Models**

* **Request ID**: Unique identifier for the specific model request.
* **Base model**: The Platform-hosted or imported model that executes the request.
* **Deployment name**: The deployment name of the model.
* **Deployment version**: Version of the model deployed for the run.
* **Response time**: Time taken by the model to generate a response.
* **Input tokens**: Number of tokens in the request input.
* **Output tokens**: Number of tokens in the model’s response.
* **Executed on**: Date and time when the run was executed.
* **Source type**: Type of source that sent the request.
* **Source**: Specific origin of the request.
* **User ID**: Identifier for the user who initiated the request.

    <img src="../images/os-metadata.png" alt="metadata" title="metadata"/>

**For External models**

In addition to the above metadata (excluding *Deployment name* and *Deployment version*), the following information is displayed:

* **Connection name**: The deployed connection name for the model.

    <img src="../images/external-metadata.png" alt="external model metadata" title="external model metadata"/>

**Model Traces** empowers users to identify time-based trends, troubleshoot issues, and make informed decisions by offering detailed and targeted insights into run-based metrics. This capability ensures that organizations uphold high efficiency, reliability, and compliance standards in their model deployments.

## Related Information

* [Settings Console](../overview.md)- Learn more about other AI for Process admin features.
* [Monitoring: Model Analytics Dashboard](../analytics/model-analytics-dashboard.md)- Get actionable insights into model-specific metrics and optimize performance.
* [Monitoring: Audit Logs](../audit-logs.md)- Track activities and events in your account.
* [Billing](../../billing/billing-and-usage.md)- Manage resource consumption for workflows, set limits, and track usage trends.



# Monitoring Custom Script Runs and Logs

**Monitoring Custom Scripts** provides comprehensive visibility into custom script performance on the AI for Process. It tracks executions across API nodes, Function nodes, and API calls for the selected period, enabling users to view run-level data, analyze logs, and monitor key metrics. Advanced filtering and search capabilities support precise analysis, effective troubleshooting, and proactive issue resolution.

**Key Benefits**

* **Detailed Performance Analysis**: Examine script performance across all executions with run metadata, input/output logs, and log-level details.
* **Usage Tracking**: Detect patterns in script usage and outcomes across multiple runs.
* **Performance Optimization**: Monitor key metrics to ensure optimal script performance.
* **Cost Control**: Analyze failure trends and consumption patterns for improved cost visibility.
* **Efficient Troubleshooting**: Identify and resolve issues using error tracking and detailed log information.


## Key Features

**Search and Filter Capabilities**

* **Column Filters**: View specific records by setting column values or combining filters with logical operators. [Learn more](../monitoring/monitoring-custom-scripts.md#columns-filtering).
* **Time-based filters** Analyze script performance for specific dates or date ranges. [Learn more](../monitoring/monitoring-custom-scripts.md#time-based-filtering).
* **Search Functionality** Look up script runs using Run ID and other searchable column fields.

**UI Features**

* **Tooltips**: Hover over metrics for additional information.
   <img src="../images/hover-over-metrics.png" alt="hover over metrics" title="hover over metrics"/>

* **ID Copying**: Click the copy icon when hovering over *Run ID* or *Log ID*. 
   <img src="../images/copy-run-id.png" alt="copy run id" title="copy run id"/>

* **Performance Analysis**: View hourly data for specific days or daily trends over time.
* **Script Selection**: Switch between scripts using the dropdown menu.
   <img src="../images/current-script-selection.png" alt="current selection" title="current selection"/>

* **Status Indicators**:
    * Green labels for successful runs.
    * Red labels for failed runs.
    * "*In Progress*" for currently deploying scripts

        <img src="../images/in-progress-deployments.png" alt="in progress" title="in progress"/>

* **Navigation**: Use arrow buttons or keyboard shortcuts (<code>K</code> for previous, <code>J</code> for next) to navigate records.
    <img src="../images/keyboard-shortcuts.png" alt="keyboard shortcuts" title="keyboard shortcuts"/>

* Click on each script run record to see the record-level view of the log based on the **Run ID**. [Learn more](../monitoring/monitoring-custom-scripts.md#record-view).
* Click the **Logs** tab to view metrics and summary information on each run-based log recorded for the script.
* Log visibility depends on how the script is configured by the developer:
    * Failure runs **can generate logs if logging is implemented correctly**. 

    * For **in-progress** runs, logs using **default logging** appear only after the run completes. 

    * With the **custom <code>korelogger</code> library**, logs populate in real-time, with support for structured log levels (e.g., info, debug, error), making it ideal for live monitoring and debugging.

* Export runs and logs as a dataset in .csv format, based on the applied filters and selected date range for further analysis, editing, and debugging.


## Best Practices

* A script you want to analyze must be consumed either via API calls or through the execution of the API/Function node.
* Identify script runs with low or high response times and the overall P90 and P99 thresholds to isolate underperforming runs for further investigation.
* Analyze the source and source type of a script run to determine the cause for failure, delayed response time, and other performance issues.
* Analyze the input and output for each script run (identified by **Run ID**) using Log data like *Log ID*, *Log level*, *Log message*, and *Timestamp*.
* **Total Runs**, **Response Time** (P90 and P99), and **Failure Rate** for all script executions help uncover performance insights, diagnose errors, and optimize script usage.
* Use the input and output code editors available in the record view to analyze and troubleshoot the script run logs.
* Perform script tracing using the record view for a specific run. [Learn more](../monitoring/monitoring-custom-scripts.md#record-view).


## Access Monitoring Custom Scripts

To access the feature, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. On the left menu, select **Monitoring** > **Custom scripts**.
3. For first-time access, select a script from the dropdown menu.
    
    <img src="../images/select-script.png" alt="select script" title="select script"/>

**Key Considerations** 

* At least one custom script must be deployed and executed via API call or API/Function node.
* If no custom script has been deployed and executed, or if it has been deployed but not yet executed, the following message is displayed. 
    
      <img src="../images/no-data-to-display.png" alt="no data" title="no data"/>

* If a previously deployed and executed script is undeployed, only the existing run-level and log data remain accessible. No new runs or logs will be generated unless the script is redeployed and executed again. 
 

The system loads the **Monitoring custom scripts** feature with data for the last week (from the current date), which is the default time range selection.

You can select the required date/date range to view the relevant data.

<img src="../images/one-week-default.png" alt="default calendar selection" title="default calendar selection"/>

## Custom Scripts Monitoring Information

This feature provides a centralized view of actionable insights into run-level and log-level details of the selected script that has been deployed and executed in your account. There are two sections to enable detailed analysis of each run and the associated execution logs:

* **All Runs:** Shows data for all script runs, including status, deployed version, response time, function, source, and more.
* **Logs:** Displays log details for the functions executed within the script, including input, output, errors, informational messages, and debug data.


### Customize Data View

The key features for customizing the data in the page include:

* **Script Name Filter**: Use this to select and view data for a specific script you want to monitor. You can also choose another deployed and executed script from the list to view its metrics and logs.
* **Time Selection Filter**: Required to analyze script runs data for a specific period in the past or current day. [Learn more](../monitoring/monitoring-custom-scripts.md#time-based-filtering).
* **Filter By Option**: An optional multi-field, multi-level filter for targeted analysis of runs and logs. [Learn more](../monitoring/monitoring-custom-scripts.md#columns-filtering).

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>In the <b>All Runs</b> section, all column fields except <b>Executed On</b> can be used as filters.</li>
<li>In the <b>Logs</b> section, all column fields except <i>Timestamp</i> can be used as filters.</li></ul></p></div>

### All Runs Section

It displays performance metrics and run-level metadata to analyze the script’s performance.

#### Performance Metrics Summary

* **Total Runs**: Total executions since deployment, indicating usage and billing.
* **Response Time**:  The P90 and P99 response times indicate the thresholds below which 90% and 99% of responses fall, respectively, indicating script consistency. Lower values reflect reliable speed, while higher values suggest performance issues. For example,
    * If a script's P90 is 100 seconds, it means that 90% of the runs are completed within 100 seconds or less.
    * If a script’s P99 is 100 seconds, it means that 99% of the runs are completed within 100 seconds.
* **Failure Rate**: Indicates the number of script runs that failed with an error code out of the total runs executed since deployment. For example, 1 failure in 3 runs = 33.33%.

    <img src="../images/failure-rate.png" alt="failure rate" title="failure rate"/>


#### Run-level Metadata

This section displays a dynamic table with the following data indicating the run-level performance of the script. 

<table>
  <tr>
   <td><strong>Column Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Run ID</strong>
   </td>
   <td>Unique identifier for the script run.</td>
  </tr>
  <tr>
   <td><strong>Status</strong>
   </td>
   <td>Success, Failed, or In Progress.
   </td>
  </tr>
  <tr>
   <td><strong>Deployment Version</strong>
   </td>
   <td>Version number (increments with each deployment).
   </td>
  </tr>
  <tr>
   <td><strong>Response Time</strong>
   </td>
   <td>Execution duration (empty for failed/in-progress runs).
   </td>
  </tr>
  <tr>
   <td><strong>Function</strong>
   </td>
   <td>Executed function name.
   </td>
  </tr>
  <tr>
   <td><strong>Executed on</strong>
   </td>
   <td>Date and time of execution.
   </td>
  </tr>
  <tr>
   <td><strong>Source Type</strong>
   </td>
   <td>Workflow or API (from endpoint).
   </td>
  </tr>
  <tr>
   <td><strong>Source</strong>
   </td>
   <td>Name of the triggering source.</td>
  </tr>
</table>

### Logs Section

It provides insights into script execution through captured logs.


#### Performance Metrics Summary

The UI summarizes key metrics for the selected period, offering actionable insights into the logs captured during the script execution.

* **Total Logs**: The total number of logs recorded during the script’s execution.
   <img src="../images/total-logs.png" alt="total logs" title="total logs"/>


The **Total Logs** metric helps determine:

* **Script activity level** – how many actions or events were logged during execution? 

* **Debugging depth** – more logs can indicate detailed logging, which helps with debugging. 

* **Execution complexity** – a high number of logs may suggest the script performs multiple operations or involves several functions. 

* **Error visibility** – helps assess whether sufficient logging is available to trace issues or monitor script behavior effectively.


#### Log-level Metadata

This section displays a dynamic table with the following log-level data:


<table>
  <tr>
   <td><strong>Column</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Log ID</strong>
   </td>
   <td>Unique log identifier.</td>
  </tr>
  <tr>
   <td ><strong>Log level</strong>
   </td>
   <td>Stdout, Stderr, Info, Debug, Warning, or Error. <a href="#enhanced-logging-for-gvisor-monitoring" >Learn more</a> about the supported logging options for the gVisor service.</td>
  </tr>
  <tr>
   <td><strong>Log Message</strong>
   </td>
   <td>Recorded message for specific actions.</td>
  </tr>
  <tr>
   <td><strong>Timestamp</strong>
   </td>
   <td>Date and time of log entry.</td>
  </tr>
  </table>

## Time-based Filtering

Use the time selection dropdown (displayed as "Custom") at the top-right of the page to view and monitor script runs/logs within a specific past period or the current day. This allows you to focus on specific runs to track changes or perform targeted debugging.
<img src="../images/time-selection-dropdown.png" alt="time selection" title="time selection"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Data is displayed only if the selected script’s runs were executed during the selected period.</p></div>

[Learn more](../monitoring/audit-logs.md#time-based-audit-logs) about the calendar widget.

## Columns Filtering

You can narrow down the information displayed for custom script runs and logs by applying **custom column filters**. This functionality is similar to the **Filter** in the Audit Logs feature. [Learn more](../monitoring/audit-logs.md#filter-audit-logs). 

Additionally, the filter for custom scripts includes the **contains** operator, which matches results that include a specific keyword or value you enter. For example, the following image depicts checking if the **Log message** contains the string “*Adding*.”  
 
<img src="../images/contains-adding.png" alt="contains adding" title="contains adding"/>


These filters allow you to select specific column values, compare the chosen or entered values, and apply logical operators across columns for multi-level filtering, providing targeted, custom data on the UI.

Filter customization streamlines tracking and debugging of script runs at a detailed level, enhancing the user experience.


### Steps to Add a Custom Filter

1. Select the **All runs** or **Logs** tab based on the data you want to filter.
2. Click the **Filter** icon on the top right.
3. Click **+ Add Filter**.
    
    <img src="../images/access-filter.png" alt="access filter" title="access filter"/>

5. In the **Filter By** window, select column, operator, and enter values.
   <img src="../images/choosing-filter.png" alt="choosing filter" title="choosing filter"/>
 
    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>You can enter multiple values in the <b>Enter Value</b> field by pressing the <i>Tab</i> key after each entry. The system will filter data based on all the entered values. </p></div>

    <img src="../images/apply-multiple-filters.png" alt="multiple filters" title="multiple filters"/>

<ol start="6"><li>Click <b>Apply</b>.</li></ol>

The UI displays all the relevant run and log records that align with the applied filter(s). The number of filters you have applied is displayed on the **Filter** icon.

<img src="../images/filter-count.png" alt="filter" title="filter"/>

### Multiple Filters

Users can combine filters using AND/OR operators for multi-level filtering. Note that AND/OR operators cannot be mixed in the same filter set. [Learn more](../monitoring/audit-logs.md#add-multiple-filters) about using multiple filters.

## Record View

The record view offers log-specific insights at the script run level after each execution, enabling faster debugging, better traceability, and more effective optimization of custom scripts.

**Key Features**

* **Focused Debugging**: Script execution logs help effectively isolate and troubleshoot issues.
* **Detailed Visibility**: Shows input, output, and log-level metadata, allowing in-depth analysis of what happened during the run.
* **Structured Layout**: Displays data in a clear and organized format, often with expandable sections in the JSON editors to facilitate easy inspection of values.
* **Actionable insights**:

    * Failures or performance bottlenecks.
    * Unexpected inputs or outputs.
    * Misconfigured logic or API responses.

* **Enhanced Usability**: With features such as keyboard navigation (e.g., J/K to switch records), copy-to-clipboard, expand/collapse, and scroll, users can efficiently explore logs.

### Steps to Access Record View

1. In the **All Runs** section, click the record you want to view.
2. The record view page is displayed with the following information: 

    * Run ID
    * Log-specific information, including the *Log ID*, *Log level*, *Log message*, and *timestamp*. [Learn more](../monitoring/monitoring-custom-scripts.md#log-level-metadata).
    * JSON editors that display the script’s input and the function’s output, respectively. 
    * Navigation buttons.

       <img src="../images/record-view.png" alt="record view" title="record view"/>

## Enhanced Logging for gVisor Monitoring

The AI for Process offers two convenient logging options to help you effectively capture and monitor logs for your custom scripts: using default logging functions or a custom logging library (*korelogger*).

**Key Considerations**

* When using **default logging** (e.g., `print()` in Python or `console.log()` in JavaScript), logs appear in the **Logs** section only after the script execution completes (success or failure).
* **Custom logging** with the `korelogger` library enables real-time log streaming where logs are populated in the table as they're generated.
* We recommend using `korelogger` for its log-level control and immediate log visibility, which significantly improves monitoring and debugging efficiency.


### Option 1: Standard Logging (Simple Setup)

This method uses default logging functions such as:

* `print()` in Python 

* `console.log()` in JavaScript 


Logs generated using this method are captured and displayed under `stdout` during script execution. 

An example script and its output in Python are given below:


```
def check_print_function():
    print("Checking print function...")
    print("Print function is working!")
return
```

The output is captured in `stdout` as follows:

```
Checking print function...
Print function is working!
```

### Option 2: Advanced Logging with Korelogger (Recommended for Monitoring)

The `korelogger` library is provided to users to enable detailed trace capture, supporting enhanced script monitoring and observability.

Additionally, the same logs are also captured in stdout in the following format: 

```
<LOG_LEVEL> :: <LOG_MESSAGE>
```

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The above log format can be modified as required.</p></div>

A sample script and its output, which uses the `korelogger` library in Python, are given below:

**Script**

```
import korelogger
def call_openai_chat(prompt):
    korelogger.debug("Debug log using korelogger")
    korelogger.info("Info log using korelogger")
    korelogger.warning("Warning log using korelogger")
    korelogger.error("Error log using korelogger")
    return
```

**Output captured in** `stdout`

```
DEBUG :: Debug log using korelogger
INFO :: Info log using korelogger
WARNING :: Warning log using korelogger
ERROR :: Error log using korelogger
```

**Log traces are pushed in the following format:**

```
{
    "name": "gvisor_info_log",
    "context": {
        "trace_id": "0x3453665abxxxxxxxxxxxxxxxxxxxxxxx",
        "span_id": "0x7e3xxxxxxxxxxxx",
        "trace_state": "[]"
    },
    "kind": "SpanKind.INTERNAL",
    "parent_id": null,
    "start_time": "2025-05-14T06:07:27.238927Z",
    "end_time": "2025-05-14T06:07:27.238966Z",
    "status": {
        "status_code": "UNSET"
    },
    "attributes": {
        "traceparent": "00-abxxxxxxxxxxxxxxxxxxxxxxxxxx0-12345xxxxxxxxxxxf-01",
        "run_id": "run_12345",
        "deployment_id": "deploy_67890",
        "source": "api_call",
        "source_type": "test",
        "log.message": "Using korelogger to log",
        "log.level": "INFO",
        "log.trace_id": "00-abcdef12345xxxxxxxxxxxxxxxxxxxx0-12345xxxxxxxxxxf-01",
        "log.meta.msg": "Using korelogger to log",
        "log.meta.pid": "41",
        "log.meta.logid": "4XXXXXX5-5XX0-4XX6-bXX8-4XXXXXXXXXX6"
    },
    "events": [],
    "links": [],
    "resource": {
        "attributes": {
            "service.name": "gvisor-py-normal",
            "service.instance.id": "4XXXXXX1-9XX9-4XXb-9XXc-aXXXXXXXXXX1",
            "deployment.environment": "rnd-xxx.example.com"
        },
        "schema_url": ""
    }
}
```


Each log entry is organized using the following identifying markers for tracking and filtering:

* **traceparent** - Links related operations together.
* **run_id** - Identifies each script execution.
* **deployment_id** - Tracks which version of your script ran.
* **source** - Shows where the log came from.
* **source_type** - Categorizes the type of source.

Log messages and levels are available as `log.message` and <code>log.level</code> in the attributes field.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The structure of the attributes field can be modified as required.</p></div>


## Export Runs and Logs Data

Exporting **All Runs** and **Logs** data for the selected custom script downloads a `.csv` file in the configured schema, reflecting the selected date range and applied column filters. To export the dataset, follow the steps below:

1. Select the **All Runs** or **Logs** tab.
2. Click the **Ellipses** button, and select **Export** in the top-right corner.
3. A *CSV* file containing records of all runs or logs for the selected script is downloaded to the configured system location.

Once the data is exported, the following message is displayed.
<img src="../images/export-flow.png" alt="export flow" title="export flow"/> 

If any error occurs during the export process, the following message is displayed: 

<img src="../images/export-err.png" alt="export error" title="export error"/>

The file name is automatically saved in the following formats:

* **Runs Data**: `<scriptname>_runs_data`. Example: Qbalance_runs_data.
* **Logs data**: `<scriptname>_logs_data`. Example: Qbalance_logs_data.

The export schema files include the dashboard data organized in the following format.

**Runs**

<img src="../images/runs-schema.png" alt="runs schema" title="runs schema"/>

**Logs**

<img src="../images/logs-schema.png" alt="logs schema" title="logs schema"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Each user’s export process is implemented separately, ensuring that one user's cancellations or adjustments do not interfere with another user’s export pipeline.</p></div>





# Overview on Account Users, Roles, and Active Directory

The **Users Management** module is crucial for handling user-related activities within your organization. This module provides capabilities for the following:

- **Managing Users**: Add users to your account, assign a default user role, view user status, unlock a locked user, and delete one or more user from your account. [Learn more](../user-management/users.md).
- **Managing Roles, and Permissions**: Assign and configure roles, set module-wise account/workflow permissions, and manage user access efficiently. [Learn more](./role-management.md).
- **Active Directory (AD) Synchronization (Sync)**: Integrate and synchronize your AD with organizational user data. [Learn more](./settings/active-directory.md).
- **Configuring User Profile Fields**: Set visibility and modification rules for user profile fields specific to your domain. [Learn more](./settings/active-directory.md#step-3-specify-user-attributes-and-configure-rules-for-selective-import-from-ad).
- **Email Notifications**: Configure email notifications for users depending on whether they joined your account by invitation or through AD sync. [Learn more](./settings/active-directory.md#sync-status-email-notifications).

This [Users](./users.md) page provides detailed instructions and guidelines on various capabilities available within the **Users Management** module for administering user-related operations, such as the following:

- Role and permissions management for different modules. [Learn more](./role-management.md).
- AD sync and user profile configuration. [Learn more](./settings/active-directory.md#active-directory-configuring-automatic-user-data-synchronization).

**Users Management** streamlines user administration and enhances operational efficiency. 

It also supports various administrative features influenced by the roles and permissions assigned at the account or workflow level. This includes actions you can perform on both external and existing users:

- **System Roles**: Pre-defined roles with default permissions for basic system functionality. [Learn more](./role-management.md#manage-system-roles).
- **Custom Roles**: User-defined roles tailored to specific needs with customized access definitions for module-wise permissions. [Learn more](./role-management.md#manage-custom-roles).

For example, a *Master Admin* role is assigned by default to the account owner. Similarly, a *Workflow Admin* role is assigned to a user who creates a workflow and has complete control over it.

**Users Management** operates on two distinct levels discussed [here](../../settings/overview.md#levels-of-users-management).

Once you invite a user or import users data, you can change their roles, assign/unassign permissions, delete users. and do more using the [Roles Management](../../settings/user-management/role-management.md) and [Users](./users.md) features on the **Settings** console.

## Related Information

* **Settings Console** - [Learn more](../../settings/overview.md) about other admin features.
* **Role Management** - [Learn more](../user-management/role-management.md) about managing default and custom roles in your account.
* **Monitoring: Audit Logs** - [Learn more](../monitoring/audit-logs.md) about tracking events and user activity in your account.

# Analyze Account-level Performance

The **Monitoring** module in AI for Process tracks events, actions, and changes across your account and linked users. It provides visibility into activities for modules such as roles, integrations, models, workflows, users, datasets, guardrails, and playground. The monitoring system helps maintain your AI for Process account's security, compliance, and operational efficiency.

<p><b>Best Practices</b></p>

- Regularly review audit logs, performance metrics for workflows and models, and model run analytics for security and compliance.
- Use filters to focus on specific events or users.
- Utilize time-based filtering for targeted analysis.

Monitoring supports the following features:

1. **Audit Logs**: From logins to model deployments, the enhanced Audit Logs dashboard ensures you stay secure and compliant with detailed, time-stamped logs. [Learn more](./audit-logs.md).
2. **Workflow Analytics Dashboard**: Empowers admins to make informed decisions on workflows deployed in their account, and ensure their peak performance by analyzing real-time performance metrics. [Learn more](./analytics/workflows-analytics-dashboard.md).
3. **Model Analytics Dashboard**: Enables account owners to track the performance of models deployed in their account . [Learn more](./analytics/model-analytics-dashboard.md).
4. **Model Traces**: Displays run-level performance metrics and metadata for models deployed in your account. [Learn more](./analytics/model-traces.md).
5. **Custom Scripts**: Enables admins to track the scripts deployed internally and externally on the AI for Process at the run and logs levels. Default and Korelogger-based enhanced logging helps debug and troubleshoot script issues efficiently. [Learn more](./monitoring-custom-scripts.md).



# Settings Console for Account Admins

AI for Process' **Settings** console is a centralized management interface that provides administrators with the workflows and functionalities to configure, monitor, and manage AI for Process’ system configurations to manage the following:

1. [Users](../settings/user-management/users.md)
2. [Roles and permissions](../settings/user-management/role-management.md)
3. [Automated synchronization](../settings/user-management/settings/active-directory.md#step-4-schedule-automatic-ad-sync) of user data from Enterprise AD, plus configuration of user profile fields and email notifications.
4. [Integrations](../settings/integrations/about-integrations.md) 
5. [Manage Custom Scripts](../settings/manage-custom-scripts/custom-scripts.md)
6. [Monitoring](../settings/monitoring/overview.md): [Audit Logs](../settings/monitoring/audit-logs.md), [Workflows Analytics Dashboard](../settings/monitoring/analytics/workflows-analytics-dashboard.md), [Model Analytics Dashboard](../settings/monitoring/analytics/model-analytics-dashboard.md), [Model Traces](../settings/monitoring/analytics/model-traces.md), and [Monitoring Custom Scripts](../settings/monitoring/monitoring-custom-scripts.md).
7. Security and Control: [Single Sign On](../settings/security-and-control/single-sign-on.md), [Authorization Profile](../settings/security-and-control/authorization-profile.md), and [API Scopes](../settings/security-and-control/api-scopes.md).

## Levels of Users Management 

The **Settings** Console provides administrators comprehensive control and visibility on the user management features available at the following levels, facilitating proactive and improved management.

* **Account level**: At the account level, administrators can manage users, their roles, and permissions throughout the entire AI for Process account. This includes tasks such as inviting users, establishing automatic data synchronization from the enterprise Active Directory (AD), and setting up access controls for modules including workflow creation, model management (including access, deployment, and export), integrations, user management, audit logs, security controls, model guardrails, and others.

* **Workflow level**: User management within the AI for Process is focused on workflow management, emphasizing individual workflow deployments and configurations. Each workflow's owner has the authority to invite individual users, customize their permissions and access levels, and manage tasks such as creating and deleting workflows, assigning roles, overseeing deployments, configuring guardrails, and managing API apps and keys.

This post describes how to access the **Settings** Console and summarizes the modules and features available.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Only users included as <b>Admin</b> in the system with the required permissions can access the <b>Settings</b> Console.</p>
</div>

## Actions You Can Perform on the Settings Console

The modules and the capabilities supported on the <b>Settings</b> Console include the following:

**Users**

* Add a new user to your account and assign a system role to them via email invitation or user information file import.
* View and track the summary of counts for total, active, inactive, and locked users.
* View the details of all the users linked to your account like Name, Email ID, Account Role, and Status.
* Select and delete one or more users from your account.
* Unlock the locked users.
* Reassign a default or custom role to a user.

[Learn more](../settings/user-management/users.md) about this feature.

**Roles and Permissions**

* View system-generated roles for <b>account</b> and <b>workflow</b> role types.
* Duplicate the roles and make custom changes.
* View the enabled/disabled access controls for various modules and permissions for system roles.
* Add new custom roles for workflow and account types, enable/disable access, and set access controls (full, view, custom, and no access) for various modules and permissions assigned to the roles. 

[Learn more](../settings/user-management/role-management.md) about this feature.

**Settings**

[Sync and import key user information](../settings/user-management/settings/active-directory.md) from your organization's AD by doing the following: 

* Configuring the connection to your AD.
* Importing user data from all or specific organization units.
* Selecting and managing default AD user fields, or adding custom fields, and defining inclusion and exclusion rules for data import and sync.
* Configuring AD auto sync schedules to ensure user data on AI for Process remains up-to-date.

Additionally, you can do the following:

* View sync history and reports to monitor successful and failed AD syncs.
* Manage the ability to view and edit default and custom user data fields.
* Configure how joining requests from new users are handled, including automatic approval options.
* Choose whether users should receive email notifications upon being added to your account via email invitation or AD sync.

[Learn more](../settings/user-management/settings/active-directory.md) about this feature.

**Integrations**

Connect to third-party services using prebuilt, secure, and configurable integrations. These connections can be used to access the linked services via the [Integration node](../workflows/workflow-builder/types-of-nodes/integration-node.md) in the workflows automation flow. [Learn more](../settings/integrations/about-integrations.md).

**Manage Custom Scripts**

Use the script wizard in the **Settings**  console to upload a script definition file in the supported format, configure it, and import a custom script. Once configured, you can deploy the script to make it available for use across the platform.

You can also:

- Un-deploy, export, or delete a script as needed.

- Re-deploy the script after updates or changes.

- Use the script in multiple locations across the AI for Process, such as in the **Function node** of a workflow automation flow.

Other capabilities include:

- View configuration and deployment details in the script's Overview page.

- Track deployment history and monitor version changes.

- Check deployment status and take actions like re-deploying, exporting, or deleting.

- Create and manage API keys to securely access the script’s API endpoint.

- View and copy endpoint code for use in external systems or integrations.

- Select and execute the script from the Function node when building automation flows.

**Guardrails**

Deploy and undeploy guardrail models to apply scanners to prompt input and output text across all workflows. 

**Monitoring**

- Track the audit logs of all user activities within your account and quickly troubleshoot issues with real-time event tracking. [Learn more](../settings/monitoring/audit-logs.md).
- Review workflow performance metrics and take informed decisions on the **Workflows Analytics** dashboard. [Learn more](../settings/monitoring/analytics/workflows-analytics-dashboard.md).

* Review, track, and fine tune model performance using model-specific metrics. [Learn more](../settings/monitoring/analytics/model-analytics-dashboard.md).
* Track and monitor run-level metrics and metadata for each model execution to determine the best and worst performers. [Learn more](../settings/monitoring/analytics/model-traces.md).
* Track custom script executions across runs and logs for deployments (endpoints), Function nodes, and API nodes. The **All Runs** section shows performance metrics (response times, failure rates) and execution details, while the **Logs** section provides runtime debugging information. Administrators can filter by date, search for runs or logs, and copy IDs to identify and resolve script issues efficiently. [Learn more](../settings/monitoring/monitoring-custom-scripts.md).

**Security and Control**

- Enable or disable **Single Sign-On (SSO)** for your account and other users to streamline authentication and enhance password security. [Learn more](../settings/security-and-control/single-sign-on.md).
- Set up authorization profiles that enable your workflows, models, and AI agents to access external web services securely. [Learn more](../settings/security-and-control/authorization-profile.md).
- Create and manage API-scoped apps and keys to securely authenticate and authorize access to specific endpoints based on selected scopes. [Learn more](../settings/security-and-control/api-scopes.md).

## Access Settings Console

To access the **Settings** Console on AI for Process, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

   The system redirects to the **Users** page under **Users Management**.

   <img src="../images/access-settings-menu-aip.png" alt="access settings menu" title="access settings menu"/>

## Modules and Features

The following modules and features are supported on the **Settings** Console:

<table>
  <tr>
   <td><strong>Module</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Features</strong>
   </td>
  </tr>
  <tr>
   <td><a href="../../settings/user-management/overview/" >Users Management</a></td>
   <td><p>Helps add, remove, and manage admin, member, and viewer users, roles, and permissions for accounts, workflows, and models.</p>
<p>Manage user settings for AD sync, profile visibility and configuration, and email notifications to users.</p></td>
<td><p><a href="../../settings/user-management/users/" >Users</a></p>
<ul>
<li>All users across your enterprise network accounts are listed here.</li> 
<li>A summarized view of the total invited users, active, inactive, and locked users is displayed.</li>
<li>The user listing with information on all the users across the AI for Process accounts is displayed with the Name, Email ID, Account Role, and Status is displayed. The account owner is highlighted.</li>
<li>You can add a new user by sending bulk or individual email invites. Alternatively,  import the user information file directly to the console.</li>
<li>Set user role when sending the email invite to one of the following:
<ul>
<li>Master Admin</li>
<li>Admin</li>
<li>Member</li>
<li>Viewer</li>
<li>Custom roles</li>
</li>
<li>Select one or multiple users to change access permissions or delete a user.</li>
<li>Click a user entry to manage their profile, models, and workflows, including modifying and deleting roles within each model or workflow. A model or workflow can be added for a specific role.</li></ul></ul>
<p><a href="../../settings/user-management/role-management/" >Role Management</a></p>
<ul>
<li>A summarized view of the total roles available in the system and the number of system and custom roles are displayed.</li>
<li>View, assign, and reassign system/ default or custom roles. <strong>You can't edit or delete system roles.</strong></li>
<li>Create a copy or duplicate of a system role as a custom role and manage its permissions and access levels.</li>
<li>Add, delete, edit permissions’ access for, and duplicate custom roles.</li>
<li>For workflow and account role types, assign/unassign permissions and set access levels for various module aspects like workflows, models, prompts, billing, integrations, guardrails, security and control settings, and user management tasks.</li>
</ul>

<p><a href="../../settings/user-management/settings/active-directory/" >Settings</a></p>
<ul>
<li><strong>Active Directory</strong>: Configure sync with your organization's AD to import user information for the required organization units to AI for Process seamlessly. Enable automatic data sync between the AD and AI for Process daily, weekly, or monthly.</li>
<li><strong>User Settings</strong>: Set up the visibility of user profile information across AI for Process. Select profile fields and allow edits by the end user.
</li>
<li><strong>Email Notifications</strong>: Select if and when the users should receive email notifications when they're added to your account.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><a href="../../settings/integrations/about-integrations/" >Integrations</a></td>
   <td>Manage 130+ pre-built integrations for third-party services in one place.</td>
   <td>
<ul>
<li>Create and configure secure connections across multiple categories like marketing, AI, sales, and more.</li>
<li>Pre-authorize the connection using the required auth method.</li>
<li>Add authorization credentials to secure the connection when users interact with the workflow.</li>
<li>Use the configured connection in the <a href="../../workflow-builder/types-of-nodes/integration-node.md" >Integration node</a> to seamlessly access third-party services while building the workflow.</li>
</ul>
   </td>
  </tr>
  <tr>
   <tr>
   <td><a href="../../settings/manage-custom-scripts/custom-scripts/" >Manage Custom Scripts</a></td>
   <td>Import custom scripts with reusable functions that can be invoked from anywhere in the platform using isolated container capabilities.</td>
   <td>
<ul>
<li>Import a custom script by configuring its general details, uploading the script file in the allowed format, and providing the runtime settings, and resource allocation (hardware and memory) details.</li>
<li>Review and deploy the custom script into the platform.</li>
<li>Perform actions like re-deploy, delete, export and more on the deployed scripts based on the current status.</li>
<li>View and manage the Overview, Deployment history, Endpoint, and API Keys pages for the script.</li>
<li>Select and execute the configured custom script through the <a href="../../workflow-builder/types-of-nodes/function-node/" >Function node</a> of the workflows flow.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>[Manage Guardrails](../workflows/guardrails/manage-guardrails.md)</td>
   <td>Deploy models to make them available for anomaly scanners in all the workflows. 
   </td>
   <td>
<ul>
<li><strong>Anonymize</strong>: Prevents the exposure of sensitive information in documents, emails, messages, or any other text data in prompts using techniques like redaction, Pseudonymization, and generalization.
</li>
<li><strong>Ban Topics</strong>: Restricts sensitive and controversial topics like religion or corporate politics in prompts to maintain content moderation, enforce community guidelines, and ensure compliance with organizational policies.</li>
<li><strong>Prompt Injection</strong>: Guards against attacks where malicious input is crafted to influence the behavior of a language model, causing it to generate harmful, misleading, or unintended responses using input sanitization, context control, role-based access, instruction clarity, and more.</li>
<li><strong>Toxicity</strong>: Set up mechanisms to detect and manage toxic content, such as harmful, offensive, or abusive language. Implement warnings, content removal, or user-banning actions to prevent the dissemination of harmful content and maintain a safe and positive user environment.</li>
<li><strong>Bias Detection</strong>: Ensure fairness and equality by AI workflows towards users through output evaluation for systematic prejudices or pre-defined biases and behavior and automatic neutralization of responses.</li>
<li><strong>Relevance</strong>: Ensure that prompt outputs are accurate to the input context, meet the user’s intent, and satisfy their query or need. The scanner provides a confidence score to indicate the degree of context relevance.
</li>
</ul>
 </td>
  </tr>
  <tr>
   <td><a href="../../settings/monitoring/audit-logs/" >Monitoring - Audit Logs</a></td>
   <td>Gain complete visibility into all account activities and efficiently troubleshoot issues by tracking real-time account and workflow-level event logs.</td>
   <td><ul><li>Select the date range and view periodic, event-based logs related to the following categories:</li>
   <ul><li>Login/Logout</li>
   <li>Roles</li>
   <li>Integrations</li>
   <li>Models</li>
   <li>workflows</li>
   <li>Users Management</li>
   <li>Prompts</li>
   <li>Dataset</li>
   <li>Guardrails</li></ul>
   <li>Set one or more levels of custom filters to view only specific audit logs.</li>
   <li>Search for the required audit log from the listed entries.</li></ul></td>
  </tr>
    <tr>
   <td><a href="../../settings/monitoring/analytics/workflows-analytics-dashboard/" >Monitoring - Workflows Analytics Dashboard</a></td>
   <td>Get actionable insights into successful and failed workflow runs, average workflow response time, and drill down into nodes execution data to enable informed decisions on workflow deployments, optimize their performance, and accelerate system efficiency.</td>
   <td><ul><li>Select a single date or date range to view periodic workflow performance metrics.</li>
   <li>Make performance comparison between different workflow versions.</li>
   <li>Keep track of failed execution runs and investigate the reason for the same.</li>
   <li>Monitor the average response times of workflows for various requests.</li>
   <li>Monitor node executions across different types and ensure workflow flow runs stay within your account's rate limits.</li>
   <li>Optimize workflow performance with real-time metrics.</li></ul></td>
  </tr>
      <tr>
   <td><a href="../../settings/monitoring/analytics/model-analytics-dashboard/" >Monitoring - Model Analytics Dashboard</a></td>
   <td>Review and monitor key performance indicators for open-source, fine-tuned, and external models deployed in your account to ensure regulatory and ethical compliance, as well as optimal performance.</td>
      <td><ul><li>Select a single date or date range to view specific, time-based model performance metrics.</li>
<li>Analyze credit consumption for deployment and fine-tuning requests, and monitor model replica generation within subscription limits to ensure optimal usage.</li>
   <li>Compare successful versus failed requests over time and identify failure patterns.</li>
   <li>Explore latency, requests, token generation, and scaling metrics through dedicated, expandable widgets.</li>
   <li>Optimize model performance with access to real-time metrics.</li></ul></td>
  </tr>
        <tr>
   <td><a href="../../settings/monitoring/analytics/model-traces/" >Monitoring - Model Traces</a></td>
   <td>Review and monitor key performance indicators for each run executed by different versions of the open-source, fine-tuned, and external models deployed in your account to ensure regulatory and ethical compliance, as well as optimal performance.</td>
      <td><ul><li>Select a single date or date range to view specific, time-based run performance metrics.</li>
      <li>Analyze failed runs by exporting performance metrics into a <i>csv</i> file and identify failure patterns.</li>
<li>Analyze hosting credits vs each successful/failed run to ensure optimal usage.</li>
   <li>Identify and isolate model runs with low response times for further investigation.</li>
   <li>Analyze requests, model outputs, response times, and sources to gain performance insights, diagnose errors, and optimize usage and experience.</li></ul></td>
  </tr>
          <tr>
   <td><a href="../../settings/monitoring/monitoring-custom-scripts/" >Monitoring - Custom Scripts</a></td>
   <td>Review and monitor key performance indicators for each internal or external script run that's executed on AI for Process via API endpoint, or Function/API node. View and trace default and Korelogger-based execution logs from input and output editors, as configured in your script. Apply time-based and column filters to get a custom view of run-level and log-specific metrics and metadata.</td>
      <td><ul><li>Select a single date or date range to view specific, time-based script performance metrics.</li>
      <li>Analyze failed runs and identify failure patterns.</li>
<li>Analyze each successful/failed run to ensure optimal usage.</li>
   <li>Identify and isolate script runs with low response times for further investigation.</li>
   <li>Analyze log-level data and troubleshoot script issues based on various log level and record-level metrics.</li></ul></td>
  </tr>
   <tr>
   <td><a href="../../settings/security-and-control/single-sign-on/" >Security and Control - Single Sign On</a></td>
   <td>By centralizing authentication for your enterprise account users, SSO enhances user convenience and strengthens security through streamlined password management. SSO helps improve efficiency, reduce password fatigue, and safeguard sensitive information.</td>
      <td><ul><li>Configure and enable SSO for the available IdP providers.</li>
<li>Disable SSO for the required account users.</li>
<li>Exclude specific users from the SSO requirement to provide an alternative way to access their accounts.</li></ul></td>
  </tr>
     <tr>
   <td><a href="../../settings/security-and-control/authorization-profile/" >Security and Control - Authorization Profile</a></td>
   <td>Allows users to configure authorization profiles using the <b>OAuth2</b> industry standard. With auth profiles, users can efficiently manage and reuse authentication and permission settings across the AI for Process, eliminating the need to create new authentication mechanisms each time secure access is required.</td>
      <td><ul><li>Set up new authorization field for your authorization profiles.</li>
<li>Configure the required auth parameters, including additional auth fields.</li>
<li>Edit or delete existing auth profiles.</li></ul></td>
  </tr>
  <tr>
   <td><a href="../../settings/security-and-control/api-scopes/" >Security and Control - API Scopes</a></td>
   <td>Create and manage API-scoped apps, assign API keys, and select scopes to control access to specific endpoints. Restrict access to authorized users and prevent unauthorized use across the AI for Process.</td>
      <td><ul><li>Create an API app.</li>
      <li>Select the required API scopes while configuring the app.</li>
<li>Generate one or more API keys to provide secure access for authorized users.</li>
<li>Copy API keys for use or delete them when no longer needed.</li>
<li>Edit or delete the app as required.</li></ul></td>
  </tr>
</table>


# Manage Roles, Permissions and Access Levels

AI for Process’ **Role Management** feature in the **Settings** console helps implement Role-based Access Control (RBAC) for account, workflow, and agentic app features on the platform. 

Thus, the roles can be classified based on the role types. [Learn more](./role-management.md#role-types).

When you invite or add a user to your account, you must assign a [default role](./role-management.md#system-defined-roles) to them to define their [module-wise permissions and access levels](./role-management.md#module-wise-permissions-and-access-levels). You can later [reassign a different role](./role-management.md#reassign-an-alternative-role-to-active-users) to the user, including a [default/system-defined](./role-management.md#system-defined-roles) or [custom](./role-management.md#custom-roles) role. [Learn more](../user-management/overview.md) about **Users Management**.

**Key Points**

1. **App Owner**: When you create an Agentic App, you automatically become the app owner and are assigned this role which provides administrative access on all features and configurations across the Platform.

2. **Master Admin Role**

    * When you create an account, you automatically become the account owner and are assigned the **Master Admin** role. [Learn more](./role-management.md#system-defined-roles).

    * As the Master Admin, you have the highest level of access, allowing you to create, modify, and delete permissions for custom roles and manage users in your account.

3. **Assigning Roles**

    * Once a user joins your account, assign them a role based on their responsibilities and job functions. By default, the **Viewer** role is assigned to new users joining your account, providing the minimum level of account access required. [Learn more](./role-management.md#system-defined-roles). This role can be changed later in the **Settings** console. [Learn more](./role-management.md#reassign-an-alternative-role-to-active-users).

4. **Default and Custom Roles**

    * Each role comes with specific permissions and access levels to determine what features the user can access, modify, or manage. [Learn more](./role-management.md#module-wise-permissions-and-access-levels). 

    AI for Process supports the following roles in the **Settings** console:

    * **Default Role**: A system-generated role with internally defined set of permissions and access levels. [Learn more](./role-management.md#system-defined-roles).

    * **Custom Role**: Allows you to customize permissions and access levels for your users. [Learn more](./role-management.md#custom-roles).

5. **Role Management Benefits**

    * Enables better control over user actions in your account.
    * Facilitates updating roles when job functions or responsibilities change.
    * Ensures prompt revocation of access when a user leaves the organization or no longer requires access.

## Roles and Modules

The modules for which permissions and access levels can be defined for a role include the following:

* Agentic Apps
* workflows
* Models
* Prompts
* Data
* Evaluations/Evaluators
* Settings including Integrations, User Management, Security and Control, Monitoring, Guardrails, and Billing.

**workflow Level**

To learn more about permissions and access levels around features, click [here](./role-management.md#module-wise-permissions-and-access-levels).

Access to module-level permissions can either be disabled (no access) or enabled with **Full**, **Custom**, or **View** privileges. [Learn more](./role-management.md#access-levels).

### Roles

A Role groups users according to their job functions, streamlining permission management. 

*Example*

A **Master Admin** has complete control over the account's core functionalities such as models, workflows, integrations, users, etc.

A **tool admin** has complete control over the core functionalities of workflows, such as deployment, configuration, sharing, deletion, monitoring, etc.

An **App Admin** has full access to almost all the core Platform features relating to Agentic Apps.

AI for Process supports the following roles:

#### System-defined Roles

Also called **Default** roles, these are inbuilt in the system at the agentic app, account and workflow levels defined in the system. The scopes, permissions, and access levels for these roles are preset based on what users commonly require and **cannot be modified** in the application. Also, system roles cannot be deleted.

To modify a user's scope and permissions, you must add a [custom](./role-management.md#custom-roles) agentic app/account/workflow-type role. [Learn more](./role-management.md#add-a-role).

System-defined, system-generated, or default roles provide baseline control over the core features and functionalities and streamline the user management process for administrators. 

For example, The **Admin** role typically has full access to all workflow/account features and functionalities within the system. Administrators have the highest privileges and can manage other users, configure settings, and perform administrative tasks.

The following table summarizes the scope for different system roles supported for Account, workflow, and Agentic App types:

<table>
  <tr>
   <td colspan="2" ><strong>Account</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Role</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Master Admin</strong>
   </td>
   <td>Users have complete control over workflow and model management, and access to all the core features and functionalities of the Settings console.</td>
  </tr>
  <tr>
   <td><strong>Admin</strong>
   </td>
   <td>Users have access to all the permissions except model deletion, billing, and connectors.
   </td>
  </tr>
  <tr>
   <td><strong>Member</strong>
   </td>
   <td>Users can create workflows, add external models, and modify only specific integrations.</td>
  </tr>
  <tr>
   <td><strong>Viewer</strong>
   </td>
   <td>Users can only view the modules across the platform.
   </td>
  </tr>
</table>

<table>
  <tr>
   <td colspan="2" ><strong>workflow</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Role</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>tool admin</strong>
   </td>
   <td>Users have complete control over workflow management, versioning, sharing, deployment, deletion, configuration, monitoring, and API key creation.
   </td>
  </tr>
  <tr>
   <td><strong>tool manager</strong>
   </td>
   <td>Users have access to all the permissions except for workflow deletion.
   </td>
  </tr>
  <tr>
   <td><strong>tool editor</strong>
   </td>
   <td>Users can create new versions and deploy, monitor, and export workflows.
   </td>
  </tr>
  <tr>
   <td><strong>tool viewer</strong>
   </td>
   <td>Users can only view the node details and generate output in the workflow.
   </td>
  </tr>
    <tr>
   <td colspan="2" ><strong>App</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Role</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>App Owner</strong>
   </td>
   <td>Users have complete administrative access across all Platform features and configurations. This user cannot be removed from the system, and can manage all other roles.
   </td>
  </tr>
    <tr>
   <td><strong>App Admin</strong>
   </td>
   <td>Users have full administrative access across most system features of Agentic Apps. This user has privileges similar to the owner. The app admins can modify all the other roles except the permissions of the app owner.</td>
  </tr>
  <tr>
   <td><strong>App Developer</strong>
   </td>
   <td>Users have full access to core development features of Agentic Apps including configurations, workflows, guardrails, and data. There is limited access to the admin features.
   </td>
  </tr>
    <tr>
   <td><strong>App Viewer</strong>
   </td>
   <td>Users have basic view-only access to specific and essential features of Agentic Apps including configurations, workflows, guardrails, and simulation capabilities.
   </td>
  </tr>
      <tr>
   <td><strong>App Tester</strong>
   </td>
   <td>Users have view-only access to most system features of Agentic Apps allowing them to observe and test agents and analytics. The user cannot write or modify the production features.
   </td>
  </tr>
</table>

#### Custom Roles 

The admin can assign only **Account** and **Workflow** role types to custom roles. The scopes, permissions, and access levels can be custom-configured. Custom user roles allow for more fine-grained control over what actions different users can perform for at the account and workflow levels.

Organizations can tailor access levels to their specific needs and organizational structure. This customization helps assign only the required permissions to specific users and improve security through role-based access. 

For example, a custom role, “_Banking workflow Conversation Moderator_,” can be customized for full access to a workflow guardrail configuration permission and no access to create and deploy a workflow.

#### Key Considerations

* After creating a custom role, it will appear in the dropdown menu of the email invitation template. You can then select and assign this role to the user you invite to your account.
<img src="../images/custom-role-listing.png" alt="custom role listing" title="custom role listing"/>

* You cannot delete a custom role if it is currently assigned to active users or included in an email invitation. The system displays an error message, as shown in the screenshot below.
<img src="../images/error-custom-role.png" alt="error custom role deletion" title="error custom role deletion"/>

To proceed, you must first unassign the role or assign an alternative role to these users, and then you can delete the custom role.

### Permissions

A **Permission** is a specific action or a set of actions the user can perform for a module i.e., **Admin**, **Workflow**, or **Evaluation** based on the defined access level (*Full*, *Edit*, or *View*), assigned role type (*Account*, *workflows*, or *Agentic Apps*) and role category (*Admin*, or *workflows*). An example includes the system providing *full* access to *create a workflow version* to the *tool admin* role of the *workflow* role type.

### Access Levels

The **Settings** console supports two types of access: “_Yes_” indicates the user role has access to a module’s permission, and “_No_” means the user has no access. When the system/custom user role has access, the extent/level of access at the account or workflow level is defined by the following presets: 

* **View**: The user can only view the module feature but does not have the permission to edit or delete it.
* **Custom**: The user can view, add, and edit the module data, but not delete it.
* **Full**: The user can view, add, edit, and delete the module data. 
* **No Access**: The user cannot access the module's features.

[Learn more](./role-management.md#module-wise-permissions-and-access-levels) about Module-wise permissions and access levels.

### Role Types 

A **Role Type** defines the module-wise scope and access level for the defined permissions and associated actions.

Roles are auto-assigned by the system based on the following Role Types. Please refer to [this](./role-management.md#system-defined-roles) table for more information on the roles.

* **Account**:  Users invited to the account must be assigned an Account role (default or custom). The role type manages access to users, integrations, and security permissions.
* **Workflow**:  When a user is invited to a workflow, they receive a workflow role. The role type manages access to workflow configurations and deployments.
* **App**: When a user is invited to the AI for Process at the agentic app level, they are assigned this role. This role type manages access to the core features,  configurations, and deployments of autonomous AI applications (agentic apps) that handle specialized business tasks and processes. The admin must assign this role type to any user with whom they intend to share an agentic app.

**Account Role**

* The user who creates an AI for Process account is assigned the *Master Admin* role by default.
* The *Master Admin* can assign other account roles to users added to their account.

**workflow Role**

* The user who creates a workflow is assigned the *tool admin* role by default.
* The *tool admin* can assign other workflow roles to users they invite to their workflow.

**App Role**

* The user who creates an agentic app is assigned the *App Owner* role by default.
* The *App Owner* can assign other Agentic App roles to users who have access to their agentic apps.

### Module-wise Permissions and Access Levels

The following table summarizes the module-wise permissions and access levels for default admin, workflow, and evaluation roles.

<b>Admin Role</b>

<table>
  <tr bgcolor="#ECECEC">
   <td rowspan="3" ><strong>Module</strong>
   </td>
   <td rowspan="3" ><strong>Permission</strong>
   </td>
   <td colspan="4" ><strong>Default Admin Role</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Master Admin</strong>
   </td>
   <td><strong>Admin</strong>
   </td>
   <td><strong>Member</strong>
   </td>
   <td><strong>Viewer</strong>
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="4" ><strong>Access Level</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="2"><strong>workflows</strong>
<p>
<strong> </strong>
   </td>
   <td>Create a workflow
   </td>
   <td>Yes
<p>
 
   </td>
   <td>Yes
<p>
 
   </td>
   <td>Yes
<p>
 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
     <td>Workflow Import
   </td>
   <td>Yes
<p>
 
   </td>
   <td>Yes
<p>
 
   </td>
   <td>Yes
<p>
 
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td rowspan="9" ><strong>Models</strong>
   </td>
   <td>Access to Model (“View” is the default access for a custom role)
   </td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Add an external model
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Create a custom model and perform fine tuning
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Add open-source model
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Manage Deployment - deploy/undeploy/redeploy
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Create or Delete an API Key for a model
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Export Model
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Delete Model
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Model Configuration
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td rowspan="5" ><strong>Prompts</strong>
   </td>
   <td>Access to a Prompt
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Create an Experiment
<p>
 
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Access to Settings</strong> (Only if the settings permission is 'Yes' the user will see all the permissions)
   </td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>Custom
   </td>
   <td>No Access
   </td>
  </tr>
  <tr>
   <td><strong>Access to guardrails at the account level</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
    <tr>
   <td><strong>Access to Integrations</strong> (“Full” is the default access)
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td rowspan="6" ><strong>Integrations</strong>
   </td>
   <td>Access
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Delete an Integration
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Test an Integration
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Update an Integration
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Create an Integration
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>Disable an Integration
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td rowspan="11" ><strong>Users Management</strong>
   </td>
   <td>Access
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>No access
   </td>
   <td>No access
   </td>
  </tr>
  <tr>
   <td>Invite User (via email or import)
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Bulk Import Users via files
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Assign/revoke system roles to users & manage profile and status
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Groups
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Enrolment
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Directory Sync to enroll users
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Manage Workflow Roles (Create and edit Custom roles), assign/revoke users
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Manage Admin Roles (Create and edit Custom roles), assign/revoke users
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Remove Users
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td><strong>Manage User Settings (profile fields): </strong>Users with the permissions to manage user settings can bulk change permissions.
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td rowspan="5"><strong>Security and Control</strong>
   </td>
   <td>Access
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No</td>
   <td>No</td>
  </tr>
  <tr>
   <td>Create API App
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Delete API App
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Update API App
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>Create or Delete an API Key
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><b>Monitoring</b>
   </td>
   <td>All actions</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
<p>
   </td>
  </tr>
  <tr>
   <td><b>Billing: Plans, invoice, subscribe & unsubscribe, token usage</b>
   </td>
   <td>All actions</td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><b>Workflow Management</b>
   </td>
   <td>All actions</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td rowspan="5"><strong>Evaluations</strong>
   </td>
   <td>Access</td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Create projects
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Create Global Evaluators.</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Delete Global Evaluators
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Edit Global Evaluators</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
   <tr>
   <td rowspan="8"><strong>Manage Custom Scripts</strong>
   </td>
   <td>Access</td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Import New Custom Script
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Deploy/Re-deploy custom script</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Undeploy Custom Script
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Delete Custom Script</td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Export Project</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  <td>No</td>
   </tr>
     <tr>
   <td>Overview and Other Details</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  <td>Yes</td>
   </tr>
       <tr>
   <td>Create/Delete an API Key</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  <td>No
   </td>
   </tr>
  </table>

<b>Workflow Role</b>

<table>
  <tr bgcolor="#ECECEC">
   <td rowspan="3" ><strong>Module</strong>
   </td>
   <td rowspan="3" ><strong>Permission</strong>
   </td>
   <td colspan="4" ><strong>Default workflow Role</strong>
   </td>
  </tr>
  <tr>
   <td><strong>tool admin</strong>
   </td>
   <td><strong>tool manager</strong>
   </td>
   <td><strong>tool editor</strong>
   </td>
   <td><strong>tool viewer</strong>
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="4" ><strong>Access Level</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="10" ><strong>workflows</strong>
   </td>
   <td><strong>Access to workflow </strong>(“Custom” is the default access for a custom role)
   </td>
   <td>Full
   </td>
   <td>Custom
   </td>
   <td>Custom
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Create a workflow Version
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Import as a Version
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Share workflows/ Unshare workflows/ Assign workflow Roles/ Remove users
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Delete workflow
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Export workflow
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Monitoring Trace of a workflow
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Editing Workflow</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>workflow configurations
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Create/Delete an API Key
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Deployment</strong>
   </td>
   <td>Manage Deployment - deploy/undeploy/redeploy
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Guardrails</strong>
   </td>
   <td>Manage Guardrails Configuration
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Monitoring</strong>
   </td>
   <td>Audit Log
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
</table>


<b>App Role - Agentic Apps</b>

<table>
  <tr bgcolor="#ECECEC">
   <td rowspan="3" ><strong>Permission</strong>
   </td>
   <td colspan="5" align="center"><strong>Default App Role</strong>
   </td>
  </tr>
  <tr>
   <td><strong>App Owner</strong>
   </td>
   <td><strong>App Admin</strong>
   </td>
   <td><strong>App Developer</strong>
   </td>
   <td><strong>App Tester</strong>
   </td>
   <td><strong>App Viewer</strong>
   </td>
  </tr>
  <tr bgcolor="#ECECEC">
   <td colspan="5" align="center"><strong>Access Level</strong>
   </td>
  </tr>
  <tr>
   <td>App Configuration
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Agents
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Code workflows
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Simulate
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Analytics
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Environments
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>API Keys
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Audit Logs
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>View
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Guardrails
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Sharing & Permissions
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Versions
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>workflows Library
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>View
   </td>
  </tr>
  <tr>
   <td>Export workflow
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>Full
   </td>
   <td>View
   </td>
   <td>No
   </td>
  </tr>
</table>



<table>
  <tr bgcolor="#ECECEC">
   <td rowspan="3" ><strong>Module</strong>
   </td>
   <td rowspan="3" ><strong>Permission</strong>
   </td>
   <td colspan="5" align="center"><strong>Default Role</strong>
   </td>
  </tr>
  <tr>
   <td><strong>App Owner</strong>
   </td>
   <td><strong>App Admin</strong>
   </td>
   <td><strong>App Developer</strong>
   </td>
   <td><strong>App Tester</strong>
   </td>
   <td><strong>App Viewer</strong>
   </td>
  </tr>
  <tr>
   <td colspan="5" bgcolor="#ECECEC" align="center"><strong>Access</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="2" >App Configurations
   </td>
   <td>View Profile, View Config, view app versions
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Edit Profile, Edit Config, Import App version, Delete App version
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Agents
   </td>
   <td>View Agent
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Add Agent, Edit Agent, Link workflows, Unlink workflows, Restore Agent Version, Restore App Version, Create Agent Version
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td rowspan="2" >workflows
   </td>
   <td>View workflow
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Add workflow, Edit workflow, Create In-line workflow, Edit Inline workflow, Delete Inline workflow
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Simulate
   </td>
   <td>Test
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Analytics
   </td>
   <td>View Sessions, Traces, Generations
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Environments
   </td>
   <td>View Environment
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Create Environment, Delete Environment, Deploy Version
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td rowspan="2" >API Keys
   </td>
   <td>View List
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Add Key
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Audit Logs
   </td>
   <td>View Logs
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Guardrails
   </td>
   <td>View Guardrails
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Add Guardrails, Edit Guardrails
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Sharing & Permissions
   </td>
   <td>View Users
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Add Users, Update Role
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
</table>

<b>Evaluation Role</b>

<table>
  <tr bgcolor="#ECECEC">
   <td><strong>Permission</strong>
   </td>
   <td><strong>Full</strong>
   </td>
      <td><strong>Edit</strong>
   </td>
      <td><strong>View</strong>
   </td>
  </tr>
  <tr>
   <td>Edit a project.</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Share a project.</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>User management - invite/delete users from project</td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>Delete a project.</td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Create/delete custom evaluators</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Create/rename evaluations</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
      <tr>
   <td>Delete Evaluations</td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Run an Evaluation</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Add, edit and delete evaluator columns and run evaluation</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Create a custom evaluator</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>Save as a global evaluator</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>Export evaluation</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>Automate evaluation</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>Import rows</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>Add, edit and delete evaluator columns and run evaluation</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>Add production data(model traces)</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>Run a prompt</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
    <tr>
   <td>Table options(user specific)</td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  </table>

### Role Management Dashboard

The **Role Management** Dashboard displays key information related to system and custom roles and their permissions available on the AI for Process.

To access the dashboard, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. In the **Users Management** section on the left menu, click **Role Management**.

The **Role Management** dashboard displays the following:

1. The summary of counts for the following:

    * **Total Roles**: The total count of system and custom roles in the system.
    * **System Roles**: The count of the pre-defined, system-generated user roles.
    * **Custom Roles**: The count of the user roles created and configured by the system admin.
    <img src="../images/summary-of-counts.png" alt="summary of counts" title="summary of counts"/>

2. A Table view of the following system and custom role details:

    * **Role**: The name of the system-generated role or the custom role you have created.
    * **Role Type**: The role type defines its scope, including **Account**, **Workflow**, and **Agentic App**.
    * **Description**: This is the description of the role. System roles are pre-defined, while you must provide custom role descriptions. Hover over the description text to view the entire description.
    * **Created by**: For system-generated roles, _System_ is displayed. For custom roles, the name of the user who created the role is displayed, as shown in the image below. This user can be the account owner or another user in the admin’s account.
    <img src="../images/custom-and-system-roles.png" alt="custom and system roles" title="custom and system roles"/>

    * **Last Updated On**: The local time and date when the custom role was last updated are displayed. This information does not appear for system roles, as they cannot be modified.

### Search a Role

To look up a system or custom role, follow the steps below:

1. [Navigate](../user-management/role-management.md#role-management-dashboard) to the **Role Management** dashboard.
2. Click the **Search** text field.
3. Enter the role you want to search for. All the matching results are displayed.
<img src="../images/search-role.png" alt="search role" title="search role"/>

   If no results are found, the following message is displayed.
   <img src="../images/no-results-found.png" alt="no results found" title="no results found"/>

### Manage System Roles

You can perform the following actions on the [system-generated roles](./role-management.md#system-defined-roles).

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>System roles cannot be created, modified, or deleted since the role and its permissions are pre-defined in the system. However, they can be duplicated as <b>Custom Roles</b> and modified.</p>
</div>

#### View Role Information

To view the details of a [system-defined role](./role-management.md#system-defined-roles), follow the steps below.

1. [Navigate](../user-management/role-management.md#role-management-dashboard) to the **Role Management** dashboard,
2. Click the **Ellipses** icon for a system role.
3. Select **View**.
<img src="../images/click-view.png" alt="select view" title="select view"/>

The following information is displayed:

* Role Title along with Role Type.
* Role Name
* Role Description
* Configuration panel to enable/disable access and set access levels for the listed permissions at the account/workflow level. Click [here](./role-management.md#module-wise-permissions-and-access-levels) to see the module-wise permissions and access levels for different roles.
<img src="../images/module-wise-permissions-new.png" alt="module-wise permissions" title="module-wise permissions"/>

#### Duplicate System Role

If you want to add a custom role by copying the scope and permissions of a system role, you can use the Duplicate functionality. This feature automatically duplicates the system role, copying its name, role type, and permission/access configurations, and creates it as a custom role. You can then modify, delete, or duplicate this custom role to create multiple copies and add module-wise permissions/access for each.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>The changes you make to the duplicate role do not apply to the original system role.</li>
<li>The Last Updated On value is displayed for duplicate roles and shows the date and time when the duplicate was created.</li></ul></p>
</div>

**Steps to Create a Duplicate Role**

To duplicate a system role, follow the steps below:

1. [Navigate](../user-management/role-management.md#role-management-dashboard) to the **Role Management** dashboard.
2. Click the **Ellipses** icon for a system role.
3. Select **Duplicate**.
<img src="../images/select-duplicate.png" alt="select duplicate" title="select duplicate"/>

The duplicate custom role displays the system role name followed by a suffix “**_copy_**,” as shown below. You can edit the name if required.
<img src="../images/duplicate-role.png" alt="duplicate role" title="duplicate role"/>

### Manage Custom Roles

[Custom roles](../user-management/role-management.md#custom-roles) can be edited, deleted, or duplicated on the Settings console. They help customize a set of [permissions](../user-management/role-management.md#permissions) and set [access levels](../user-management/role-management.md#access-levels) according to enterprise's requirements.

#### Add a Role

To add a custom role, follow the steps below:


1. [Navigate](../user-management/role-management.md#role-management-dashboard) to **Role Management** on the **Settings** console.
2. Click **Add New Role**.
<img src="../images/add-new-role.png" alt="add new role" title="add new role"/>

3. Follow the steps below in the **New Role** window:

    * Enter **Role Name** (should be unique) & **Role Description**.
    <img src="../images/enter-role-name-and-description.png" alt="enter role name and description" title="enter role name and description"/>
    * Select the **Role Type** from the dropdown.
    <img src="../images/select-role-type.png" alt="select role type" title="select role type"/>
    * Follow the steps below if you select **Role Type** as **_Account_**.
        * Enable/select the access level for module-wise permissions in the **Enable/Disable workflow access** section. [Learn more](../user-management/role-management.md#module-wise-permissions-and-access-levels) about module-wise permissions and access levels you can configure for a custom role.
        * If you select *Custom*, Select the checkbox to enable the permissions (set to _Yes_) or unselect to disable (set to _No_) for the following:

            * Create and Import workflow
            * Create agentic apps
            * Models
                * Add External models
                * Fine-tune a model
                * Delete a model
                * Manage Deployment - deploy/undeploy
                * Create an API key for a model
                * Export model
            * Prompts
            * Settings
                * Integrations
                  * Weights and Biases
                  * Hugging Face
                  * S3 Bucket
               * User Management
                  * Invite user
                  * Bulk import users
                  * Assign roles to users
                  * Directory Sync
                  * Manage admin roles
                  * Manage workflow roles
                  * Remove users
                  * Manage user settings
            * Security and Control Settings
            * Manage Guardrail Models
            * Monitoring
            * Billing

          <img src="../images/enable-permissions.png" alt="enable permissions" title="enable permissions"/>       

       * Select the access level for **Models**, **Settings**, **Integrations**, and **User Management** from the following options:
        * **Full**: The users can access all the module permissions (view & edit).
        * **Custom**: The users can select only the required permissions for the module to customize the role.
        * **View**: The users can only view the configured module permissions.
        * **No Access**: The user cannot view/customize the module permissions.
            
**Important Considerations**

* First, select the access level for **Models** to enable its permissions.
<img src="../images/select-access-for-models.png" alt="set models access" title="set models access"/>

    Missing this step automatically disables the permissions.

* Selecting **_Full_** automatically selects all the module permissions.
<img src="../images/select-full-auto-select.png" alt="full auto select" title="full auto select"/>

* Selecting **_Custom_** allows you to enable only the required module permissions.  <img src="../images/select-custom-access.png" alt="select custom access" title="select custom access"/>

* Selecting **_View_** and **_No Access_** disables permissions selection.
<img src="../images/select-view-and-no-access.png" alt="select view and no access" title="select view and no access"/>       

* Selecting **_Full_** for **Settings** automatically sets the access levels of **Integrations** and **User Management** to **_Full_**.

<img src="../images/select-full-access.png" alt="select full access" title="select full access"/>

Additionally, it automatically enables all the permissions for the following modules:

   * Integrations (View is always enabled by default as it is the minimum required permission).
   * User Management
   * Security and Control Settings
   * Manage Guardrail Models
   * Monitoring
   * Billing

* Selecting **_No Access_** for **Settings** automatically sets the access levels of **Integrations** to **_View_** and **User Management** to **_No Access_**.
<img src="../images/select-no-access.png" alt="no access" title="no access"/>

Additionally, it disables all the permissions for the following modules:

   * Integrations (The **View** permission is always enabled by default).
   * User Management
   * Security and Control Settings
   * Manage Guardrail Models
   * Monitoring
   * Billing
  
Selecting **_Custom_** for **Settings** automatically sets the **Integrations** and **User Management** access levels to **_Custom_** where you can select or unselect the listed permissions based on your requirement for the following modules:

* Integrations
* User Management
* Security and Control Settings
* Manage Guardrail Models
* Monitoring
* Billing

<img src="../images/select-custom.png" alt="select custom" title="select custom"/>

You can change **_Custom_** to **_Full_** or **_View_** for **Integrations** and **_Full_** or **_No Access_** for **User Management**.


If you select **Role Type** as **_workflow_**, follow the steps below:

* Select **_Custom_**, **_View_**, or **_Full_** for **Access**. [Learn more](../user-management/role-management.md#access-levels). 

**_Custom_** is the default selection.
<img src="../images/access-options.png" alt="access options" title="access options"/>
                     
* Set up the workflow permissions as follows in the **Enable/Disable workflow access** section:
* If you select **_View_** for **Access**, all the permissions are automatically disabled.
* If you select **_Full_** for **Access**, all the permissions are automatically enabled.
* If you select **_Custom_** for **Access**, you can select the required workflow permissions to enable them and customize the role.                 

4. Click **Create**.

The new custom role is created and listed on the **Role Management** dashboard.

<img src="../images/list-new-custom-role.png" alt="list new custom role" title="list new custom role"/>

#### Edit a Custom Role

You can modify the role name, description, and access levels for account type or workflow type roles’ permissions on the Settings console.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>The system does not allow changing the <b>Role Type</b> once it is set. You must create a new custom role to assign a different role type.</li>
<li>When a custom role is updated, it changes the permissions for the assigned users.</li></ul></p>
</div>

To update a role, follow the steps below:

1. [Navigate](../user-management/role-management.md#role-management-dashboard) to the **Role Management** dashboard on the **Settings** console.
2. Click the **Ellipses** icon for the custom role you want to modify.
3. Select **Edit**.
<img src="../images/edit-role.png" alt="edit role" title="edit role"/>

4. Edit the required values for the following In the **Update Role** window:

    * Role Name
    * Role Description
    * Access: Select either *Custom*, *Full*, or *View*.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You cannot reset the access levels for module-wise Permissions in the <b>Enable/disable workflow access</b> section.</p>
</div> 

<ol start="5"><li>Click <b>Update</b>.</li>
<img src="../images/update-role-window.png" alt="update role window" title="update role window"/></ol>

A success message is displayed upon completing the role edit, and the updated role details appear on the dashboard.

<img src="../images/role-updated-message.png" alt="role updated message" title="role updated message"/>

#### Delete a Custom Role

You can delete a custom role if you want to permanently remove it from the system and unassign it from users.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You can only delete one role at a time. Bulk delete is not supported.</p>
</div> 

**Prerequisite**

Before you delete a role, ensure that the custom role is not assigned to any active users. If the role is assigned, do one of the following:

* Reassign an alternative role to the active users. [Learn more](../user-management/role-management.md#reassign-an-alternative-role-to-active-users).

* Remove Inactive users to whom this role is assigned.

To delete a role, follow the steps below:

1. [Navigate](../user-management/role-management.md#role-management-dashboard) to the **Role Management** dashboard on the **Settings** console.
2. Click the **Ellipses** icon for the custom role you want to delete.
3. Select **Delete**.
<img src="../images/select-delete-role.png" alt="select delete role" title="select delete role"/>

4. Click **Confirm** in the **Delete Role** confirmation window.
<img src="../images/delete-role-confirm.png" alt="confirm delete role" title="confirm delete role"/>

A success message is displayed, and the role is deleted from the **Role Management** dashboard.

#### Role Deletion Error and Workaround 

The **Settings** console allows you to delete only unassigned roles. If a role is assigned to active/inactive users during deletion, the following error message is displayed.
<img src="../images/role-deletion-error.png" alt="role deletion error" title="role deletion error"/>

You must perform one of the following workarounds.

##### Reassign an Alternative Role to Active Users

1. [Navigate](../user-management/role-management.md#role-management-dashboard) to **Users Management** > **Users** on the **Settings** Console.
2. Click the **Account Role** entry for the user.
3. Select the role you want to reassign.
<img src="../images/select-role-to-reassign.png" alt="reassign role" title="reassign role"/>

Once you reassign the role for the user, go to the **Role Management** dashboard and delete the role using the steps mentioned [here](../user-management/role-management.md#delete-a-custom-role).

The role is deleted successfully from the **Role Management** dashboard and the count for custom roles is updated (decreased).
<img src="../images/custom-role-deleted.png" alt="custom role deleted" title="custom role deleted"/>

##### Delete Assigned Users

[Navigate](../user-management/role-management.md#role-management-dashboard) to the **Users Management** dashboard and follow the steps mentioned in the **Delete Users** section to delete all the assigned users individually or in bulk. Once the user is deleted, go to the **Role Management** dashboard and [delete](../user-management/role-management.md#delete-a-custom-role) the required custom role.

Deleting the assigned users removes their association with the role you want to delete.

#### Duplicate a Custom Role

Like a system role, you can duplicate a custom role, which copies the name, role type, and configurations for permissions and access. Follow the steps mentioned [here](../user-management/role-management.md#duplicate-system-role) to complete the process for a custom role.
<img src="../images/duplicate-custom-role.png" alt="duplicate custom role" title="duplicate custom role"/>

## Related Information

* **Settings Console** - [Learn more](../overview.md) about other AI for Process admin features.
* **Users Management** - [Learn more](../user-management/users.md) about managing users in your account.
* **Monitoring: Audit Logs** - [Learn more](../monitoring/audit-logs.md) about tracking events and user activity in your account.

# Manage Single Sign On for Account Sign In

AI for Process provides users with a default sign-in flow as the standard authentication method. However, for organizations seeking enhanced security and convenience, administrators can enable **Single Sign-On (SSO)** through the **Settings** console.

By activating SSO, users can access their AI for Process accounts using a single set of secure credentials managed by an external Identity Provider (IDP). This setup streamlines the login process and integrates users into a unified authentication framework.

SSO is a powerful option for organizations looking to balance convenience and security in user authentication. It offers the following key benefits:

* **Secure Access**: It reduces password fatigue and the risk of phishing or weak passwords by focusing on one strong password.
* **Simplified User Management**: Administrators can manage access centrally, making it easier to grant or revoke access across various accounts.
* **Improved User Experience**: Reduces the need for multiple logins into an account.
* **Centralized Access Control**: Admins can monitor and enforce security policies across all applications more efficiently.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Only account owners and admins can enable/disable SSO from the <b>Settings</b> console.</p></div>

AI for Process supports SSO for the following protocols and providers:
<table>
  <tr>
   <td><strong>Protocol</strong>
   </td>
   <td><strong>Provider</strong>
   </td>
  </tr>
  <tr>
   <td>
<a href="#saml" >SAML</a>
   </td>
   <td>
<ul>
<li><a href="#okta-configuration" >Okta</a></li>
<li><a href="#onelogin-configuration" >OneLogin</a></li>
<li><a href="#other-configuration" >Other</a></li>
</ul>
   </td>
  </tr>
  <tr>
   <td><a href="#ws-federation" >WS-Federation</a>
   </td>
   <td>
<ul>
<li><a href="#windows-azure-configuration" >Windows Azure</a></li>
<li><a href="#other-configuration_1" >Other</a></li>
</ul>
   </td>
  </tr>
  <tr>
   <td><a href="#openid-connect-configuration" >OpenID Connect</a>
   </td>
   <td>
<ul>
<li><a href="#google-configuration" >Google account</a></li>
</ul>
   </td>
  </tr>
</table>

## How SSO Works

1. **User Initiates Login**: A user attempts to access his AI for Process account.
2. **Redirect to IDP**: The Service Provider (SP) redirects the user to an IDP login page for authentication.
3. **User Authenticates**: The user provides their credentials to the IDP.
4. **Authentication Tokens**: If successful, the IDP issues an authentication token.
5. **Token Exchange**: The SP uses this token to grant the user access to the application.
6. **Access Granted**: Once authenticated, the user can access the allowed AI for Process account(s) without logging in again during the same session.

## Access Single Sign-on

To access the SSO feature, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. Go to **Security & Control** > **Single Sign On** on the left menu.

If you’re using this feature for the first time, the following screen appears.

<img src="../images/access-single-sign-on.png" alt="access sso" title="access sso"/>

If SSO is already configured, the **Single sign-on** setup page is displayed, as shown below.

<img src="../images/sso-set-up.png" alt="sso setup" title="sso setup"/>

## Enable SSO

Depending on your company's security requirements, you can enable SSO for your AI for Process account users. Enabling SSO includes selecting the protocol and IDP and providing the [parameters](../security-and-control/single-sign-on.md#configuration-parameters) to integrate with the IDP service.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>If you already have the required parameters for Okta, move directly to Step 18.</p></div>

### Configuration Parameters

The following parameters should be configured on AI for Process based on the protocol and IDP you select:

<table>
  <tr>
   <td><strong>Protocol</strong>
   </td>
   <td><strong>IDP</strong>
   </td>
   <td><strong>Parameters</strong>
   </td>
  </tr>
  <tr>
   <td>SAML
   </td>
   <td>Okta
   </td>
   <td>
<ul>

<li><strong>Okta single sign-on url</strong>: The SSO endpoint URL for <em>Okta</em> to enable Service Provider initiated SAML flow.</li>

<li><strong>Identity provider issuer: </strong>The entity (URL) that provides the user identities, including the ability to authenticate a user.</li>

<li><strong>Certificate: </strong>The public certificate stored by the service provider from the IDP is used to validate a user signature. You can add multiple (a maximum of 2) certificates and delete already added invalid certificates. </li>
</ul>
   </td>
  </tr>
  <tr>
   <td>SAML
   </td>
   <td>Onelogin
   </td>
   <td>
<ul>

<li><strong>SAML 2.0 endpoint</strong>: The SSO endpoint URL for <em>Onelogin</em> to enable Service Provider-initiated SAML flow.</li>

<li><strong>Issuer url</strong>: The same as the <strong>Identity provider issuer </strong>for Okta.</li>

<li><strong>X.509 certificate</strong>: The same as the <strong>Certificate</strong> for Okta.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>SAML
   </td>
   <td>Other
   </td>
   <td>
<ul>

<li><strong>Single sign-on url: </strong>The SSO endpoint URL for <em>the IDP</em> to enable Service Provider initiated SAML flow.</li>

<li><strong>Issuer url: </strong>The same as the <strong>Identity provider issuer </strong>for Okta.</li>

<li><strong>Certificate: </strong>The same as the <strong>Certificate</strong> for Okta.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>WS-Federation
   </td>
   <td>Windows Azure
   </td>
   <td>
<ul>

<li><strong>Azure AD sign-on end point url</strong>:  The URL that AI for Process sends sign-on and sign-off requests using <em>Azure</em>. The response for the authentication is sent to the <strong>Reply URL</strong> defined in your <em>Azure</em> Active Directory configuration settings.</li>

<li><strong>Azure AD federation metadata document</strong>: The URL for the federation metadata document used for authentication with <em>Azure</em> Active Directory.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>WS-Federation
   </td>
   <td>Other
   </td>
   <td>
<ul>

<li><strong>AD sign-on end point url: </strong>The same as <strong>Azure AD sign-on end point url </strong>for Windows Azure.</li>

<li><strong>AD federation metadata document url</strong>: The same as <strong>Azure AD federation metadata document for </strong>Windows Azure.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>OpenID Connect
   </td>
   <td>Google
   </td>
   <td>
No additional configuration is required. Your users will be authenticated based on their valid Google credentials.
   </td>
  </tr>
</table>

### Steps to Enable SSO

To enable SSO on the **Settings** console, follow the steps below:

1. Access the **Single sign on** page.
2. If no SSO is enabled, click **Enable SSO**.
<img src="../images/enable-sso.png" alt="enable sso" title="enable sso"/>

3. If SSO is already enabled for a provider, click the **Enable SSO** tab and do one of the following:

* Change and save the existing [parameters](../security-and-control/single-sign-on.md#configuration-parameters) for the enabled SSO provider.
* Disable the enabled SSO and set up a new configuration.
* Select a different protocol/provider and complete the configuration.

4. Select the required protocol and SP. The default selections are **SAML** and **Okta**.
5. Configure the [parameters](../security-and-control/single-sign-on.md#configuration-parameters) for one of the following SSO protocols and providers:

<ul><li><b>SAML</b>: <a href="#okta-configuration" >Okta</a>, <a href="#onelogin-configuration" >Onelogin</a>, or <a href="#other-configuration" >Other</a>. <a href="#saml" >Learn more</a>.</li>
<li><b>WS-Federation</b>: <a href="#windows-azure-configuration" >Windows Azure</a> or <a href="#other-configuration" >Other</a>. <a href="#ws-federation" >Learn more</a>.</li>
<li><b>OpenId connect</b>: <a href="#google-configuration" >Google</a>. <a [Learn more](#openid-connect-configuration) ></a>.</li></ul>

<ol start="9"><li>Click <b>Save</b>.</li></ol>

A success message is displayed once the SSO setup is complete.
<img src="../images/sso-configuration-updated-successfully.png" alt="sso updated successfully message" title="sso updated successfully message"/>

Additionally, the timestamp of when you enabled SSO is displayed as shown below:
<img src="../images/sso-timestamp.png" alt="sso timestamp" title="sso timestamp"/>

## SAML

Security Assertion Markup Language (SAML) is a protocol for web-based SSO that uses secure tokens instead of passwords. It allows IDPs and SPs to operate separately. When a user logs into a SAML-enabled app, the service provider requests authorization from the IDP, which authenticates the user and grants access to the application.

### How SAML works

SAML SSO works by transferring the user’s identity from one place (the IDP) to another (the SP) through an exchange of digitally signed XML documents.

When a user logs into a system that acts as an IDP and tries to access his AI for Process account, the following happens:

1. The user accesses the remote app on the IDP portal using the sign-on endpoint URL, and the application loads.
2. The application identifies the user’s origin (by application subdomain, user IP address, or similar) and redirects the user back to the IDP, asking for authentication. This is the authentication request.
3. The user either has an existing active browser session with the IDP or establishes one by logging into the IDP.
4. The IDP builds the authentication response in an XML document containing the user’s username or email address, signs it using an X.509 certificate, and posts this information to the SP.
5. The SP, which already knows the IDP and has a certificate fingerprint, retrieves the authentication response and validates it using the certificate fingerprint.
6. The user's identity is established, and the user is provided with the AI for Process account access.

### Okta Configuration

Okta's Single Sign-On (SSO) offers a seamless user experience by enabling one login for multiple applications across different platforms. It enhances security through multi-factor authentication (MFA), zero-trust architecture, and password-less options. 

Okta's scalable and customizable platform reduces IT overhead, improves productivity, and supports compliance with governance standards like GDPR and HIPAA. 

To configure SSO using SAML and Okta, follow the steps below:

1. Go to AI for Process’ **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **SAML** for **Sign-on protocol** and **Okta** for **SSO provider**.
<img src="../images/saml-okta-selection.png" alt="saml-okta-selection" title="saml-okta-selection"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If you already have the required parameters for Okta, move directly to Step 18.</p></div>

<ol start="4"><li>Login to the <a href="https://developer.okta.com/login/" >Okta developer portal</a>.</li>
<li>On the dashboard, click <b>Applications</b> on the left menu.</li>
<li>Click <b>Create App Integration</b>.</li>
<img src="../images/okta-create-app-integration.png" alt="okta create app integration" title="okta create app integration"/></ol>

<ol start="7"><li>In the <b>Create a new app integration</b> window, select <b>SAML 2.0</b> and click <b>Next</b>.
<img src="../images/create-a-new-app-integration.png" alt="create a new app integration" title="create a new app integration"/></li>
<li>On the <b>Create SAML Integration</b> page, provide the <b>App Name</b> under <b>General Settings</b>, and click <b>Next</b>.
<img src="../images/create-saml-integration.png" alt="create saml integration" title="create saml integration"/></li>
<li>Copy the following values from AI for Process’ SSO setup page and paste them into Okta under <b>Configure SAML</b>:</li>
<ul><li><b>ACS url for SP initiated SAML flow</b>: Paste into <i>Single sign-on URL</i>.</li>
<li><b>ACS url for IDP initiated SAML flow</b>: Paste into <i>Audience URI (SP Entity ID)</i>.</li></ul></ol>

<table>
  <tr>
   <td>
<strong>Okta Parameter</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Single sign-on URL</strong>
   </td>
   <td>The location where the SAML assertion is sent with an HTTP POST. This is often called the SAML Assertion Consumer Service (ACS) URL for your application.
   </td>
  </tr>
  <tr>
   <td><strong>Audience URI (SP Entity ID)</strong>
   </td>
   <td>The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application.
   </td>
  </tr>
</table>

<ol start="10"><li>Click <b>Next</b>.</li>
<li>Click <b>Finish</b> under <b>Feedback</b> on Okta’s <b>Create SAML Integration</b> page.</li>
<li>Once the app is created, go to the <b>Sign On</b> tab and click <b>View Setup Instructions</b>.</li>
<li>On the <b>How to Configure SAML 2.0 for <app-name> Application</b> page, do the following from Okta into AI for Process:</li>
<ul><li>Copy the <b>Identity Provider Single Sign-On URL</b> value and paste it into the <b>Okta Single Sign-On URL</b>.</li>
<li>Copy the <b>Identity Provider Issuer</b> value into the <b>Identity provider issuer</b>.</li>
    <img src="../images/copy-Identity-Provider-Issuer.png" alt="copy identity provider issuer" title="copy identity provider issuer"/></ul>
<li>Go to <b>Sign On</b> > <b>SAML Signing Certificates</b> on your Okta app.</li>
<li>Click <b>Download certificate</b> under <b>Actions</b> for the required certificate.
<img src="../images/download-certificate-saml.png" alt="download certificate" title="download certificate"/></li>
<li>Once the certificate is downloaded, open it in Notepad and copy the data between the <b>BEGIN CERTIFICATE</b> header and <b>END CERTIFICATE</b> footer.
<img src="../images/okta-certificate-notepad.png" alt="okta certificate" title="okta certificate"/></li>
<li>Paste the value into the <b>Certificate</b> field on AI for Process’ SSO setup page.
<img src="../images/paste-okta-certificate.png" alt="paste okta certificate" title="paste okta certificate"/></li>

To add a new certificate, click <b>+ Add new</b>.</ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.</p></div>

<ol start="18"><li>Click <b>Save</b>.
Once SSO for Okta is complete, the system will redirect to the <b>Okta Sign in</b> page for AI for Process account authentication.</li>
<img src="../images/okta-sign-in-page.png" alt="okta sign in page" title="okta sign in page"/></ol>

### Onelogin Configuration

OneLogin's Single Sign-On (SSO) solution simplifies user access by enabling a single login for multiple applications across platforms, improving workflow efficiency. It enhances security with advanced multi-factor authentication (MFA), password-less options, and machine learning-based risk assessments that are compliant with security standards like GDPR and HIPAA.

To configure SSO using SAML and Onelogin, follow the steps below:

1. Go to AI for Process’ **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **SAML** for **Sign-on protocol** and **Onelogin** for **SSO provider**.
4. Login into the [Onelogin developer portal](https://app.onelogin.com/login).
5. Go to **Applications** > **Add Apps** to access your app.
<img src="../images/onelogin-add-app.png" alt="onelogin add app" title="onelogin add app"/>

<ul><li>To learn how to <b>add a new app</b>, click <a href="https://onelogin.service-now.com/support?id=kb_article&sys_id=9bf39e0047ccbd509d8dfd1f536d431c&kb_category=e9866930db185340d5505eea4b9619b7#manage-add" >here</a>.</li>
<li>To learn how to <b>configure apps</b>, click <a href="https://onelogin.service-now.com/support?id=kb_article&sys_id=9bf39e0047ccbd509d8dfd1f536d431c&kb_category=e9866930db185340d5505eea4b9619b7#config" >here</a>.</li></ul>

<ol start="6"><li>Search for your AI for Process app and click <b>Enter</b>.</li>
<li>Click your app to view the <b>Add App</b> page. Optionally, change the display name or the icons displayed to your users in the <i>OneLogin</i> portal, and then click <b>SAVE</b>. The AI for Process app has been added to your company apps for <i>OneLogin</i> and is listed on the app page.</li>
<li>Copy the following values from <b>SSO</b> > <b>Enable SAML2.0</b> on Onelogin and paste them into the relevant fields on AI for Process’ SSO setup page:</li>
    <ul><li><b>OneLogin SAML 2.0 Endpoint (HTTP)</b>: Paste into <b>SAML 2.0 endpoint</b>.</li>
    <li><b>OneLogin Issuer URL</b>: Paste into <b>Issuer URL</b>.</li>
    <img src="../images/paste-onelogin-issuer-url.png" alt="paste one login issuer url" title="paste one login issuer url"/></ul>

<li>In the <b>OneLogin X.509 Certificate</b> field, click <b>View Details</b>. The <b>Standard Strength Certificate (2048-bit)</b> page is displayed.
<img src="../images/onelogin-view-details.png" alt="one login view details" title="one login view details"/></li>
<li>In the <b>X.509 Certificate</b> section, copy the certificate data and then paste it into the <b>X.509 Certificate</b> field on AI for Process’ SSO setup page.</li>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Copy data after the <b>BEGIN CERTIFICATE</b> header and before the <b>END CERTIFICATE</b> footer.</p></div>

To add a new certificate, click <b>+Add new</b>.
<img src="../images/add-new-x-509-certificate.png" alt="add new x 509 certificate" title="add new x 509 certificate"/></ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.</p></div>

<ol start="11"><li>Copy the following field values from AI for Process’ SSO setup page into the relevant fields in Onelogin:</li>

<ul><li>ACS URL for SP Initiated SAML Flow.</li>
<li>ACS URL for IDP Initiated SAML Flow.</li>
<img src="../images/copy-acs-urls.png" alt="copy acs urls" title="copy acs urls"/></ul>

<li>Click <b>Save</b> on AI for Process and Onelogin.</li></ol>

Once SSO for Onelogin is complete, the system redirects to the **Onelogin Sign in** page for AI for Process account authentication.

<img src="../images/onelogin-sign-in-page.png" alt="one login sign in page" title="one login sign in page"/>

### Other Configuration

To configure and enable SSO using SAML for other IDPs of your choice, follow the steps below:

1. Go to AI for Process’ **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **SAML** for **Sign-on protocol** and **Other** for **SSO provider**.
<img src="../images/other-sso-provider.png" alt="other sso provider" title="other sso provider"/>

4. Fetch the necessary SSO configuration parameters listed in [this](../security-and-control/single-sign-on.md#configuration-parameters) table from your app's **Settings** page within the IDP developer portal. 
5. Paste them into the relevant fields on AI for Process’ SSO setup page.

To add a new certificate, click **+Add new**.
<img src="../images/paste-parameters-other-configuration.png" alt="paste parameters for other provider" title="paste parameters for other provider"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When multiple certificates are provided, the system uses the latest one. If the latest certificate is invalid, it automatically switches to other available certificates.
</p></div>

<ol start="6"><li>Copy and paste <b>ACS url for SP initiated SAML flow</b> and <b>ACS url for IDP initiated SAML flow</b> values from AI for Process into the relevant app fields within the IDP’s developer portal.</li>
<li>Click <b>Save</b>.</li></ol>

## WS-Federation

**WS-Federation** (Web Services Federation) is a protocol used for federated identity management. It allows the secure sharing of identity information across different security domains or systems. It enables Single Sign-On (SSO) by allowing users to authenticate with a trusted IDP and access services across different organizations or platforms without logging in multiple times.

### How WS-Federation Works

When a user logs into a system that acts as an IDP and tries to access his AI for Process account, the following happens:

1. The relying party redirects the user to the IDP for authentication.
2. The IDP authenticates the user through credentials or another authentication mechanism.
3. **Security Token Issued**: Once authenticated, the IDP issues a security token containing the user’s identity and claims.
4. **Token Sent to Relying Party**: The token is sent back to the relying party, which validates it.
5. **Access Granted**: The user is granted access to the requested service based on the verified token.

### Windows Azure Configuration

Azure AD Federation with WS-Federation offers seamless SSO integration with Microsoft services, advanced security features like MFA and conditional access, and centralized user management. It supports flexible authentication protocols, scales with organizational growth, and ensures high availability for an enhanced user experience.

To configure SSO using WS-Federation and Windows Azure, follow the steps below:

1. Go to AI for Process’ **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **WS-Federation** for **Sign-on protocol** and **Windows Azure** to **Configure SSO for WS-Federation**.
4. Open **Server Manager** on the computer running AD FS, then choose **AD FS** > **Workflows** > **AD FS Management**.
5. Copy **IdP URL** from your IdP metadata (FederationMetadata.xml). You can find your ADFS Federation Metadata file URL on the AD FS server through **ADFS Management** in **ADFS** > **Service** > **Endpoints** > **Metadata**. It should look like this:
<img src="../images/copy-idp-url.png" alt="copy idp url" title="copy idp url" />

6. Paste this value into the **Azure AD sign-on end point url** field on AI for Process' SSO setup page.
7. Copy and paste [this](https://login.microsoftonline.com/common/FederationMetadata/2007-06/FederationMetadata.xml) URL link into the **Azure AD federation metadata document** field on AI for Process' SSO setup page.
<img src="../images/paste-azure-parameters.png" alt="paste azure parameters" title="paste azure parameters" />

8. Click **Save**.

### Other Configuration

To configure and enable SSO using WS-Federation and other IDPs of your choice, follow the steps below:

1. Go to AI for Process’s **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **WS-Federation** for **Sign-on protocol** and **Other** to **Configure SSO for WS-Federation**.
4. Copy and paste the SSO endpoint URL from the IDP’s portal into **AD sign-on end point url** on AI for Process' SSO setup page.
5. Then, copy and paste the URL for the WS-Federation metadata document from the IDP’s portal into the **AD federation metadata document url** on AI for Process' SSO setup page.
<img src="../images/paste-ws-federation-data.png" alt="paste ws federation data" title="paste ws federation data" />

6. Click **Save**.

## OpenID Connect Configuration

**OpenID Connect** (OIDC) is an authentication layer built on top of the OAuth 2.0 framework that enables Single Sign-On (SSO) by providing a standardized way for applications to authenticate users and obtain user identity information. AI for Process currently supports Sign in with Google for this protocol.

### How OpenID Connect Works

When a user logs into a system that acts as an IDP and tries to access his AI for Process account, the following happens:

1. The application redirects the user to the IDP for authentication.
2. The user logs in at the IDP portal.
3. IDP redirects the user back with an authorization code.
4. The application exchanges the code for ID and access tokens.
5. The application validates tokens and grants access.
6. Users can access other integrated applications without re-authenticating.

### Google Configuration

To configure SSO using OpenId Connect and Google, follow the steps below:

1. Go to AI for Process’s **Single sign-on** page.
2. Select the **Enable SSO** tab.
3. Select **OpenId Connect** for **Sign-on protocol** and **Sign in with Google** to **Configure SSO for OpenId connect**.
<img src="../images/sign-in-with-google.png" alt="sign in with google" title="sign in with google" />

4. Click **Save**.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>No further configuration is needed. Users will be authenticated using their Google account’s username and password.</p></div>

## Disable SSO

Disabling SSO resets the protocol and provider selections you made when SSO was enabled. This removes the current configuration and reverts your account to the default sign-in flow. SSO-based account access using the configured provider is disabled with this feature.

However, you can still view the previously configured SSO parameters for a specific protocol and provider by clicking the **Enable SSO** tab.

## Steps to Disable SSO

1. [Access](../security-and-control/single-sign-on.md#access-single-sign-on) the **Single sign on** page.
2. Click the **Disable SSO** tab.
<img src="../images/click-disable-sso.png" alt="click disable sso" title="click disable sso"/>

3. In the **Disable SSO** confirmation window, click **Yes**.
<img src="../images/disable-sso-screen.png" alt="disable sso screen" title="disable sso screen"/>

The following screen is displayed after SSO is disabled.
<img src="../images/enable-sso-screen.png" alt="enable sso screen" title="enable sso screen"/>

## Exclude Users from the SSO Requirement

The **Manage Users** feature on the **Single Sign-On** page allows the account owner to exclude specific users from the mandatory SSO flow. This enables selected users to access their AI for Process account through either the default sign-in flow or SSO service, which is helpful in the following situations:

* An error occurs during the SSO provider configuration, and the system prevents the user from logging in.
* The user wants to bypass log-in via the configured SSO provider.
* Technical issues arise with the SSO provider.
* The SSO configuration profile has expired.
* Business policy changes at the provider prevent the configured SSO from functioning.

**Key Considerations**

* By default, the account owner is excluded from the SSO requirement and can choose between the SSO flow or the default sign-in flow during login. Additionally, it is recommended to exclude at least one more account user.
* Excluded users can instantly switch to another account without signing in through SSO, if SSO is enabled.
* For users who are not excluded:
* If SSO is enabled for the account, they must sign in via SSO.
* If SSO is disabled, they can switch accounts directly without additional sign-in.

**Steps**

To exclude a user from the SSO requirement, follow the steps below:

1. [Navigate](../security-and-control/single-sign-on.md#access-single-sign-on) to the **Single Sign-on** page.
2. Type and add an email address or select from the dropdown in the **Manage Users** textbox.
<img src="../images/manage-users-sso.png" alt="manage sso users" title="manage sso users"/>

You can add multiple users to the list, as shown below:
<img src="../images/add-multiple-users-to-exclude.png" alt="exclude multiple users" title="exclude multiple users"/>

<ol start="3"><li>Click <b>Save</b>.</li></ol>

A success message is displayed, and the SSO sign-in is made optional for the user.

### Sign-In Flow for the Excluded User

During sign-in, the following screen is displayed for the excluded user. 
<img src="../images/screen-for-excluded-user.png" alt="screen for excluded user" title="screen for excluded user"/>

When the user clicks **Continue**, one of the following happens:

When **SSO is enabled**, the following page is displayed.
<img src="../images/login-with-sso.png" alt="login with sso" title="login with sso"/>

The user can do one of the following:

* Click **Continue** to log in using the configured SSO provider service's sign-in page, for example, OKTA, as shown below:

<img src="../images/connect-to-okta.png" alt="connect to okta" title="connect to okta"/>

* Click “**Having trouble logging in with SSO?**” to sign in using the default option (email and password, Google, Windows, etc.) set during AI for Process sign-up.

When **SSO is disabled**, the user is taken through the default sign-in flow (email and password, Google, Windows, etc.).

## Default Sign-in Flow 

As a AI for Process admin, you can enable Single Sign-On (SSO) using a third-party provider. However, if your SSO security system fails or you forget your SSO credentials for your IDP, you can log into AI for Process using either email sign-in or your default SSO provider. 

## Related Information

* [Settings Console](../overview.md)- Learn more about other AI for Process admin features.


# Invite and Manage Account Users

The **Users** feature simplifies account administration through centralized workflows for inviting, importing, and managing users. The workflows work together to streamline user administration and ensure efficient collaboration, access control, and status monitoring.

**Key Features**

* **User Invitation**: Easily invite individual users or groups via email.
* **Invitation Management**: Resend invitations for users who haven't yet joined.
* **Bulk Import**: Add multiple users efficiently by uploading CSV or TXT files.
* **Active Directory Sync**: Synchronize user data directly from your organization's Active Directory.
* **Role Management**: Assign and reassign user roles to control access and permissions.
* **Status Tracking**: Monitor user statuses (active, inactive, locked) from a centralized dashboard.
* **Account Unlocking**: Quickly unlock user accounts that have been locked due to failed login attempts.
* **User Search**: Easily find specific users using the search functionality.
* **User Deletion**: Remove individual or multiple users from your AI for Process account as needed.

**Best Practices**

* Regularly review and update user roles.
* Use bulk import to add multiple users efficiently.
* Monitor the locked users and inactive invitations.
* Maintain users for effective account management.

## Users Dashboard

The dashboard displays user counts by status:

* **Active**: Users with active accounts who can interact with other AI for Process users.
* **Inactive**: Users invited by the admin but who have yet to join or accept the invitation.
* **Locked**: Users who have exceeded 5 failed login attempts and their accounts have been locked.

<img src="../images/users-count.png" alt="users count" title="users count"/>

It also shows detailed user information, including name, email, role, and status. For information on default system roles, click [here](../user-management/role-management.md#system-defined-roles).

## Add a New User

The **Settings** Console provides two ways to add a new user to the system:

* Email invitation
* Import _.txt_ or _.csv_ file with user information in the pre-defined format.

### Invite (Email Invitation)

See [Invite a User](../user-management/invite-a-user.md) to learn how to add a user to your account via email invitation.

### Import (Bulk Import)

The import feature allows administrators to add multiple users at once using .txt or .csv files. To ensure compatibility, download the sample CSV file, add your user details to this file, and upload the file.

**Key Considerations**

* Valid file types are _.txt_ or _.csv_. No other file types are allowed.
* The file must contain the required user information, such as name, email ID, and status, to create a user profile in your AI for Process account.
* Each row should contain information for ONE user.
* You can use accepted delimiters like Comma (","), Pipe ("|"), Semi-Colon (";"), and Tab in the file.
* The first row in the file should be the field name used to identify the user data.
* "*" indicates mandatory fields in the sample file. Please ensure mandatory fields are provided.
* The **User Status** indicates the user’s status after import, and the corresponding actions are taken for *New*, *Update*, and *Delete* statuses.
* Entries with invalid email formats, missing domain name, or wrong email IDs are ignored during import.
* Once an entry in the file is validated, an email request is sent out to the user to activate their account.
* If a user is already active (joined admin’s account), the email invitation is not sent.

#### Import User Data File

The steps mentioned below, allow you to import users' data from a designated file into AI for Process.

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. On the **Users** dashboard, click **Add New User**, and select **Import**.
   <img src="../images/add-new-user-aip.png" alt="add user" title="add user"/>

3. Perform one of the following actions on the **Import Users** page:

* Click **Upload File**, then select and upload the user info file from your system.
<img src="../images/click-upload-file.png" alt="click upload file" title="click upload file"/>

* Drag and drop the file from your system into the **Upload File** window.

**Key Suggestions**

* Click and download the sample ._csv_ file for reference.

    <img src="../images/click-download-sample-file.png" alt="download sample file" title="download sample file"/>

* The fields are pre-defined in the sample file, and the data requirements are shown below:
<img src="../images/pre-defined-fields.png" alt="pre-defined fields" title="pre-defined fields"/>

* Ensure the column names and field mandates match your uploaded file and the sample file. Any mismatch results in an error, as shown in the screenshot below.
<img src="../images/mismatch-error.png" alt="fields mismatch error" title="fields mismatch error"/>

4. A preview window displays the file’s data with a file uploaded success message. Click **Continue** to import the file.
<img src="../images/success-import.png" alt="click settings" title="click settings"/>

5. Click **Continue** once the import is complete, and the following message appears.
<img src="../images/import-completed.png" alt="import completed" title="import completed"/>

6. The system validates the file for errors. If the user data contains errors, a window is displayed showing the import status and the reason for the errors.
<img src="../images/failed-import-entries.png" alt="failed import entries" title="failed import entries"/>

Correct the highlighted values based on the reason, and upload the file again. Then, follow **Steps 4 and 5** above.

The file takes a few minutes to import. You can see the progress in the dialog window. When completed, the following message is displayed.

<img src="../images/file-imported-successfully.png" alt="file imported successfully" title="file imported successfully"/>

Click **OK** to see the imported users on the dashboard. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The imported users are assigned the <b>Viewer</b> system role by default, which you can change. <a href="../role-management/#system-defined-roles" >Learn more</a>.</p> 
</div>

<img src="../images/imported-entries.png" alt="imported entries" title="imported entries"/>

You can see the success/failed import status on the dashboard as highlighted below:

<img src="../images/success-failed-import-status.png" alt="success and failed import status" title="success and failed import status"/>

**Failed Import** 

The following message is displayed if the user data in the uploaded file fails to import:

<img src="../images/failed-import-message.png" alt="failed import message" title="failed import message"/>

You can identify which user data failed to import, review the actions completed by the user, and understand the reason for the failure. 

Once you know the cause, you can retry importing the corrected user data.

**Cancel Import**

The system cancels the import for data that fails due to validation errors, such as an incorrect email address. A window is displayed showing the import status and reason after the import is canceled.
<img src="../images/import-canceled.png" alt="import canceled" title="import canceled"/>

#### Import History

Click **Import History** in the **Import Users** window to view and analyze the import history of users in your account.
<img src="../images/click-import-history.png" alt="click import history" title="click import history"/>

The following window is displayed with the import date and time, the importing user, and the summary of successful and failed imports.
<img src="../images/import-history.png" alt="import history" title="import history"/>

## Delete a User/Bulk Delete

The **Delete** feature removes a user you’re managing from your AI for Process account.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>Only users included as Admin in the system with the required permissions can access the <b>Settings</b> Console.</p>
<p><ul><li>Deleting a user revokes their access and removes their data from your account. However, the user can still access their personal account on AI for Process. To rejoin your account, you must invite them again via email.</li>
<li>You cannot delete users if they have created and manage workflows in your account. The user must first remove all active workflows before they can be deleted.</li></ul></p></div>

**Steps to delete a user**

1. Click **Users Management** > **Users** on the left menu to access the **Users** dashboard.
2. Hover over the user entry you want to delete.
3. Click the **Delete** icon.
<img src="../images/single-delete.png" alt="single delete" title="single delete"/>

**Updated Screen**

<img src="../images/single-delete-result.png" alt="single delete result" title="single delete result"/>

**Bulk Delete**

1. Select the required users, and click the **Delete** icon at the bottom of the screen to delete multiple users in the list.
<img src="../images/click-delete-icon.png" alt="click delete icon" title="click delete icon"/>

2. Click **Remove** in the **Remove users** window.

    <img src="../images/click-remove.png" alt="click remove" title="click remove"/>

When a user's account and role assignments are permanently deleted, the user is removed from the list, and the **Total Users** and **Active Users** counts on the dashboard are updated accordingly.

**Updated Screen**

<img src="../images/bulk-delete-result.png" alt="bulk delete result" title="bulk delete result"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Using <b>Delete</b> removes the user permanently.</p>
</div>

## Search User 

Use the search field to find users by name:

1. Navigate to the **Users** dashboard.
2. Click the **Search** text field.
3. Enter the user’s **name** you want to search.

All the matching results are displayed. 

<img src="../images/all-matching-results.png" alt="matching results" title="matching results"/>

The following message is displayed if the user does not exist.
<img src="../images/user-does-not-exist.png" alt="user does not exist" title="user does not exist"/>

## Unlock a Locked User

Locked users cannot access their accounts without unlocking them on the **Settings** console. 

**Steps to unlock a locked user**

1. Navigate to **Settings** > **Users Management** > **Users** page.
2. Hover over the user entry with the status highlighted as “**_Locked_**.” 
3. Click the **Unlock** button.
<img src="../images/click-unlock.png" alt="click unlock" title="click unlock"/>

4. Click **Confirm** in the confirmation dialog.

The user’s account is unlocked successfully, and the status changes to _Active_.

## Change User Role

On the **Users** dashboard, you can change the account-level role for one or more users. Only the role allowed for the user type (admin or account) can be assigned. 

Changing the user role automatically assigns the designated permissions and access levels defined in the system.

To change a user’s role, follow the steps mentioned [here](../user-management/role-management.md#reassign-an-alternative-role-to-active-users).

### Bulk Role Change

You can change and assign the same role to multiple users. However, to assign different roles, individual role changes must be made, as discussed in the previous section.

To perform bulk role change, follow the steps below:

1. Select the required users on the **Users** dashboard.
2. Click the **Role** dropdown and select the required option in the bottom pane.
<img src="../images/select-for-role-change.png" alt="select for role change" title="select for role change"/>

The role is updated for the selected users.
<img src="../images/bulk-role-changed.png" alt="select for role change" title="select for role change"/>

## Related Information

* **Settings Console** - [Learn more](../overview.md) about other AI for Process admin features.
* **Role Management** - [Learn more](../user-management/role-management.md) about managing default and custom roles in your account.
* **Monitoring: Audit Logs** - [Learn more](../monitoring/audit-logs.md) about tracking events and user activity in your account.






# Workflows Performance Analytics

The **Workflows Analytics Dashboard** offers a unified and comprehensive workflow for tracking and analyzing the performance of the deployed workflows and their specific versions within your account.

It provides valuable insights into metrics such as successful or failed workflow runs, **Average Response Times (ART)** to requests, and event-based node executions for all node types. [Learn more](../../../workflows/workflow-builder/manage-flow-nodes.md) about managing nodes in a workflow.

Key metrics are displayed intuitively using visually engaging graphs and dynamic widgets, which update based on the selected filters. 

**Key Features**

* **Global timeline Filters** provide a comprehensive view of performance across all workflows in your account. [Learn more](../analytics/workflows-analytics-dashboard.md#global-timeline-filters).

* **Workflow Performance Filters** offer a detailed analysis of individual runs, response times, and node executions during the selected period for the selected workflow and version. [Learn more](../analytics/workflows-analytics-dashboard.md#workflow-performance-filters).

* An **expanded view of analytics widgets** include filters to customize data display. [Learn more](../analytics/workflows-analytics-dashboard.md#expanded-widget-view).
* Hovering over a data point on the **dynamic and interactive line graph** reveals the real-time information for that specific period, providing a focused view of workflow performance.
* You can obtain **hourly performance analysis** for a workflow on a specific day or review **daily performance trends** when selecting a date range filter.
* Click the **Refresh icon** shown below to ensure you have the latest dashboard data available to make informed decisions.
<img src="../images/refresh-icon.png" alt="refresh icon" title="refresh icon"/>

* The dashboard offers **Tooltip** support for each widget to get quick summaries of the monitored metrics.
* You can analyze nodes execution data for a workflow based on the **rate limit** subscription for your account. Learn more.

**Best Practices**

* Make data-driven decisions by tracking runs and response times for all and specific workflows in the selected period.
* Analyze event-based node executions to track node types, execution frequency, and total events processed.
* Apply time-based filters at both global and widget levels for focused and accurate analysis.
* Compare workflow performance over time by analyzing successful versus failed runs, and identifying failure patterns.
* Prioritize node execution based on rate limits subscription for your account.

## Access the Workflows Analytics Dashboard

To access the **Workflows Analytics** dashboard, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings"/>

2. On the left menu, select **Monitoring** > **Analytics**.
3. Click the **Workflows Analytics** tab on the right-hand side screen.

The system loads the **Workflows Analytics** dashboard with data for the last 7 days, which is the **default time range selection**. You can select the required period to generate data.

## Key Performance Metrics

The **Workflows Analytics** Dashboard supports the following account and workflow-specific metrics to provide actionable insights.

### Account-Level Metrics

The following metrics summarize the counts for workflows, runs, and node executions at your account level:

* **Number of workflows**: The total number of workflows deployed within your account during the selected period. This includes workflows and all their versions managed by all the users of your account. 

    To view data for a specific workflow and its version deployed in your account, use the **Workflows Performance** filters. [Learn more](../analytics/workflows-analytics-dashboard.md#workflow-performance-filters).

* **Number of runs**: The total count of success and failure workflow runs or node executions completed by all deployed workflows in your account during the specified period. 

For detailed statistics on each status for the selected date/date range, see the **workflow Runs** widget. [Learn more](../analytics/workflows-analytics-dashboard.md#workflow-runs).

* **Number of times nodes are executed**: The event-driven execution counts for different node types during a workflow run. 

For detailed statistics on the total events and the runs executed by each node, see the **Nodes Execution** widget. [Learn more](../analytics/workflows-analytics-dashboard.md#nodes-execution).

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Hover over the "<b><i>i</i></b>" icon to view the information summary for the metric.</p></div>

<img src="../images/info-icon.png" alt="info icon" title="info icon"/>

To generate and view the required Workflows Analytics data, use the **Global Timeline Filters**. [Learn more](../analytics/workflows-analytics-dashboard.md#global-timeline-filters).

### Workflow-specific Metrics

The following metrics help analyze the performance of the selected workflow and version in your account during the selected period:

* **Workflow Runs**: Depicts the success and failure trends of the workflow runs the selected workflow version executes.
* **Avg. Workflow Response Time**: Displays the selected workflow version’s ART to the requests received during the selected period.
* **Nodes Execution**: Displays the event-based node execution graph for all the node types on a single day or across the selected date range. **Nodes are executed up to the rate limit threshold subscription for your account**.

To view the required data, use the [Global Timeline Filters](./workflows-analytics-dashboard.md#global-timeline-filters) and [Workflow Performance Filters](./workflows-analytics-dashboard.md#workflow-performance-filters). 

## Global Timeline Filters

To generate account-level and workflow-level data for a specific period, use the following options on the top panel:

* **24 hours**: Displays workflow data for all the hours in the past day.
* **7 days**: Displays workflow data for all the days in the past week.
* **30 days**: Displays workflow data for all the days in the past month.
* **90 days**: Displays workflow data for all the days in the past three months.
* **Custom**: Allows you to select a custom day or date range from the following calendar widget to view workflow data. Once you select the required period, click **Apply** to see the relevant data.
<img src="../images/global-timeline-filters.png" alt="global timeline filters" title="global timeline filters"/>

<div class="admonition note">
<p class="admonition-title">Key Considerations</p>
<p><ul><li>You can select only the current and past dates and not a future date.</li>
<li>You can view past data only up to one year from the current date.</li></ul></p></div>

**Single Date**

To select a single day, click the required date on the widget.
<img src="../images/single-date.png" alt="single date" title="single date"/>

**Date Range**

To select a custom date range, select the start and end dates on the widget.
<img src="../images/date-range.png" alt="date range" title="date range"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>Only consecutive dates can be selected for a date range. For example, alternate or random date selections aren't allowed.</li>
<li>Multiple date range selections aren't supported.</li></ul></p></div>

The other options you can select include:

* **This Month**: Displays data for the current month. For example, if today is 20 September, the data from 1 September to 20 September is displayed.
<img src="../images/this-month.png" alt="this month" title="this month"/>

* **Last Month**: Displays data for the past month. For example, if this month is September, the data from 1 August to 31 August is displayed.
<img src="../images/last-month.png" alt="last month" title="last month"/>

* **This Year**: Displays data for the current year. For example, if today is 20 September 2024, the data from 1 January 2024 to 20 September is displayed.
<img src="../images/this-year.png" alt="this year" title="this year"/>

* **Last Year**: Displays data for the previous year from 1 January 2023 to 31 December 2023.
<img src="../images/last-year.png" alt="last year" title="last year"/>

## Workflow Performance Filters

The following widget-level filters apply exclusively to [workflow-specific metrics](../analytics/workflows-analytics-dashboard.md#workflow-specific-metrics), providing real-time analytics when used with a [Global Timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters). 

* **Workflow Name**: Select the deployed workflow from the list to see the associated analytics data.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If two workflows with the same name are deployed at different times, they appear in the list with their respective deployment timestamps.</p></div>

<ul><li><b>workflow Version</b>: Choose the deployed workflow’s version from the list. If your account contains multiple versions of the same workflow, this feature provides targeted data for a specific version, such as testing or production.</li></ul>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If no versions exist for a workflow, the dropdown list is empty. By default, data for all workflow versions is displayed unless a specific version is selected.</p></div>

## Workflow Performance Data Widgets

The **Workflows Analytics** dashboard displays the widgets mentioned below to represent the [Workflow-specific performance metrics](../analytics/workflows-analytics-dashboard.md#workflow-specific-metrics). The graphs update automatically when a different workflow version is selected.

### How it Works

1. Select the required date/range in the [global timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters).
2. Select the **workflow Name** and (optional) **workflow Version**.
3. The widgets display an hourly graph for 24 hours on a single day and a daily graph for the respective metrics for a date range.

### workflow Runs

This widget features two dynamic graphs illustrating successful and failed requests executed by the workflow during the selected period in the [global timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Total Number of Requests**, while the X-axis indicates the **Date**. 

**Key Features**

* Successful runs are displayed in green, while failed runs are shown in red.
* The **Total Number of Requests** (Y-axis) automatically scales to accommodate runs executed across different date selections.
* Hover over a data point on the success and failure line graphs to view the counts for Total Requests and the successful and failed requests executed by the workflow at that specific date and time. For example, you can check the successful and unsuccessful request executions at 11:25 AM on January 16, 2024.
<img src="../images/tooltip-feature.png" alt="tooltip feature" title="tooltip feature"/>

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The widget shows data only for the duration that the workflow was deployed in your account. For instance, if workflow A was active for 4 days last week and undeployed for the next 3 days, selecting a 7-day view will display data solely for those 4 active days and the associated request times.</li>
<li>The graph will show curves only when requests are processed by the workflow. If no requests are processed during an hour or day, no data points will appear.</li></ul></p></div>

**Best Practices**

You can do the following to analyze workflow performance:

* **Performance Tracking**: By viewing successful and failed requests, you can monitor the workflow’s performance, identifying how often the workflow completes tasks successfully versus when they fail for the same or different dates.
* **Trend Analysis**: Tracking workflow runs across different periods provides insights into performance trends, identifying peak and low performance periods.
* **Real-Time Monitoring**: The widget allows you to monitor workflow performance in real-time, enabling quick responses to sudden spikes in failures or performance drops.
* **Comparative Assessment**: Evaluate the performance of different workflow versions to determine the most effective option.

### Avg. Workflow Response Time

This widget features a line graph illustrating the ART taken by the workflow version to execute each request during the selected period in the [global timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters). The Y-axis represents the **Avg. Response Time**, while the X-axis indicates the **Date**. 

**Key Features**

* A blue line graph represents the Average Response Time (ART) values for the selected period. If a single day is selected, the graph displays hourly ART values, while selecting a date range represents daily ART values.
* The **Avg. Response Time** (Y-axis) automatically scales to accommodate real-time response times per request.

**Best Practices**

You can do the following to analyze workflow performance:

**Single Day**

* View the average workflow response time for each hourly request within a day. For instance, if the workflow executes 100 requests between 12 PM and 1 PM, each with its own response time, the average of these values is represented by the graph line. Hover over the corresponding data point on the graph to view the ART for a specific hour. The tooltip shows the selected date & time, ART for the hour, and the no.of requests processed during that hour.
* View the overall ART, which is the total of the ART for all hours combined during the selected day.

<img src="../images/overall-art.png" alt="overall art" title="overall art"/>

**Date Range**

* View the ART of a workflow for requests processed daily over the specified date range. For example, if you select the date range between September 1 and September 30, the ART for each day is combined to show the graph line. Hover over the corresponding data point on the graph to see the ART for a specific date and time. The tooltip shows the selected date, ART for the day, and the no.of requests processed on that date.

* View the overall ART, which is the total of the ART for all days in the selected date range.
<img src="../images/overall-art-for-date-range.png" alt="overall art for date range" title="overall art for date range"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The system calculates the ART for all requests within each hour (hourly ART). It then combines the hourly ART for all hours daily to determine the Daily ART. Finally, the Daily ART values for the selected date range are aggregated to compute the overall ART.</p></div>

**Generic**

* **Performance Evaluation**: ART helps assess how quickly the workflow responds to requests during different periods, giving insights into overall efficiency.
* **Bottleneck Identification**: Sudden spikes in ART can highlight delays or inefficiencies, allowing for targeted troubleshooting.
* **Optimization**: Monitoring ART over time helps identify areas for improvement, leading to faster response times and optimized workflows.
* **Trend Analysis**: Tracking ART across different periods helps uncover patterns in workflow performance, providing data-driven opportunities for enhancement.
* **Comparative Assessment**: Evaluate the performance of different workflow versions to assess their response times to requests.

### Nodes Execution

This widget displays a line graph showing the number of nodes (including all node types) executed for each event run during a workflow for the selected workflow version and period (as selected in the [Global timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters)). The Y-axis represents the **Number of Nodes Executed**, while the X-axis shows the **Date**.

**Rate Limit**

The **Nodes Execution** widget displays a graph up to your account's maximum subscribed rate limit, indicated by a red line. For example, if your subscription allows 8,000 node executions, the graph will show data for a maximum of 8,000 nodes during the selected period. Once this limit is reached, an error message will appear, notifying you that the threshold has been reached and no further node executions can occur.

<img src="../images/nodes-execution-rate-limit.png" alt="rate limit" title="rate limit"/>

**Key Features**

<ul><li>A blue line graph represents the node executions for the selected period. If a single day is selected, the graph displays hourly node executions, while selecting a date range represents daily node executions.</li>
<li>The <b>Number of Nodes Executed</b> (Y-axis) is fixed and accommodates the maximum rate limit subscription.</li>
<li>A red line highlights the maximum rate limit.</li>
<li>Hover over the required data point on the graph to view the following information:</li></ul>
<ul><li><b>Total Events</b>: The number of node executions for the following nodes:</li></ul>

   * Start Node
   * [AI Node](../../../workflows/workflow-builder/types-of-nodes/ai-node.md)
   * [Function Node](../../../workflows/workflow-builder/types-of-nodes/function-node.md)
   * [Condition Node](../../../workflows/workflow-builder/types-of-nodes/condition-node.md)
   * [API Node](../../../workflows/workflow-builder/types-of-nodes/api-node.md)
   * [DocSearch Node](../../../workflows/workflow-builder/types-of-nodes/docsearch-node.md)
   * [End Node](../../../workflows/workflow-builder/types-of-nodes/end-node.md)

<p><b>Best Practices</b></p>

* **Performance Monitoring**: Track the number of nodes executed during each workflow, allowing you to assess the workflow's overall performance.
* **Resource Optimization**: Visualizing node execution trends can help you identify inefficient workflows or overused nodes, optimize resources, and enhance efficiency.
* **Rate Limit Tracking**: The analysis allows you to monitor node execution in relation to your account’s rate limits, helping you stay within subscription thresholds.
* **Troubleshooting**: Nodes execution patterns can highlight potential issues or bottlenecks in your workflows, making it easier to detect and resolve problems.
* **Trend Analysis**: By comparing node executions over time, you can identify performance trends and make data-driven decisions to improve workflow and response times.

## Expanded Widget View

You can expand any widget on the **Workflows Analytics Dashboard** for a drill down view of analytics trends. Each expanded view enables you to apply widget-level filters, offering a focused analysis of workflow performance for that widget.

The widget-level filters include the following:

* [Global timeline filter](../analytics/workflows-analytics-dashboard.md#global-timeline-filters)
* [Workflow Performance Filters](../analytics/workflows-analytics-dashboard.md#workflow-performance-filters)

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>Changes made to the filters in the expanded view of a widget don't affect the main dashboard or the global filters.</li>
<li>Hover over the required data point to view widget analytics data.</li></ul></p></div>

To expand a widget, hover over the top-right corner of the widget, and click the **Double-arrow** icon.

<img src="../images/expand-widget-icon.png" alt="expand widget" title="expand widget"/>

The expanded views of all the widgets are shown below:

**Workflow Runs**

<img src="../images/agent-runs-expanded-view.png" alt="workflow runs expanded view" title="workflow runs expanded view"/>

**Avg. Workflow Response Time**

<img src="../images/avg-art-expanded-view.png" alt="average art expanded view" title="average art expanded view"/>

**Nodes Execution**

<img src="../images/nodes-execution-expanded-view.png" alt="nodes execution expanded view" title="nodes execution expanded view"/>

The **Workflows Analysis Dashboard** offers actionable and customized insights on the workflow performance metrics for various features in your account. 

## Related Information

* [Settings Console](../../overview.md)- Learn more about other workflow admin features.
* [Workflow Change Logs](../../../workflows/workflow-builder/workflow-canvas-change-log.md)- Track, audit, and review changes made to a workflow's flow.
* [Billing](../../billing/billing-and-usage.md)- Manage resource consumption for workflows, set limits, and track usage trends.
* [Monitoring: Audit Logs](../audit-logs.md)- Track activities and events in your account.
* [Monitoring: Model Analytics Dashboard](../analytics/model-analytics-dashboard.md)- Get actionable insights into model-specific metrics and optimize performance.

# Workspace 

A *workspace* represents a logical grouping of workflows, and configurations, typically organized by teams or projects. Workspaces bring organization and structure to how workflows are grouped and accessed. It determines **what workflows and data are accessible**, **what actions are allowed**, and **which configurations apply** based on the currently selected workspace.

By default, when a new account is created, a default workspace is created and assigned. When a new workflow is created, it's automatically associated with the workspace. 

## Points to Note

* Every workflow is tied to a specific workspace. It can't be moved or accessed across workspaces. Use import/export to move workflows across workspaces).
* All configurations, including AI Model configurations, settings, auth profiles, and permissions, are maintained separately for each workspace.

The current workspace is displayed at the top right corner in the platform UI. 

<!--
![alt_text](images/home.png "Workspace")
-->

## Switching between Workspaces

Clicking the workspace name opens a drop-down list of all accessible workspaces.

<!-- ![alt_text](images/switcher.png "image_tooltip") -->


Click on **Browse all Workspaces** to view the complete list of workspaces. On switching between workspaces, 

* The workflows are refreshed to show the ones from the new workspace. 
* Permissions are also based on the user's role in the new workspace. 
* Settings, models, prompts, inbox and data reflect workspace-specific configurations. 

**Features of Workspace Switcher**

* Default workspace: Users can mark any workspace as their default. This workspace will automatically load when logging into a new session.
* Search and Browse Workspaces: Easily locate workspaces using the search bar or browse through the full list using pagination controls. 
* Request access to inaccessible workspaces: My Workspaces tab lists the workspaces that the user has access to, and inaccessible ones are listed under Other Workspaces. Users can directly request access to a workspace from this list.
* User Role: The workspace switcher indicates the total number of members in the workspace and the user’s role in the workspace. In the workspace list view, each workspace entry indicates the owner, helping users understand workspace ownership clearly.

    