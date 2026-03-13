# Actions

The Kore.ai XO Platform offers pre-built integrations with popular business applications to exchange data. You can configure and enable actions for Service Now, Salesforce, Zendesk, Hubspot, and others. Each of these integrations provides a full conversation flow definition, a low-code interface for API integration, and pre-built response mapping and create dialog tasks with pre-built templates without need to worry about developer assistance.

**Watch a Short Video on System Integrations**

<iframe title="vimeo-player" src="https://player.vimeo.com/video/715550596?h=5d9e151d44" width="640" height="360" frameborder="0"    allowfullscreen></iframe>


## Steps to use the actions or pre-built integrations

1. Enable the Developer or a User to do a single-click authorization.
2. Enable an integration to exchange data between two systems during the dialog task execution.
3. Enable an integration and create the dialog tasks using the preconfigured templates supported by the integration.

The **Actions** module is available under the **App Settings** > **Integrations** menu.


## Actions Enablement

By default, your AI Agent will not exchange data with any integration unless you authorize one or more actions through which it can communicate. You can enable an integration and perform actions in a third-party system. 


## Authorization Types

The Kore.ai XO Platform supports OAuth 2.0, Basic, and API key based authentication to allow an integration to exchange data.


### OAuth v2 Authentication

OAuth v2 is the new version of the open protocol to allow secure authorization via a standard method from web, mobile, and desktop applications. To learn how OAuth v2 authentication works, read the [Setting Up Authorization using OAuth v2](../../dev-tools/bot-authorization/setting-up-authorization-using-oauth-v2.md){:target="_blank"} article.


### Basic HTTP Authentication

HTTP Basic Auth is a simple method that creates a username and password style authentication for HTTP requests. This technique uses a header called Authorization, with a base64 encoded representation of the username and password. For more information, read the [App Authorization Overview](../../dev-tools/bot-authorization/bot-authentication.md){:target="_blank"} article.


### API Key

Identification and authorization token generated or provided by a web application or web service used to identify the incoming application request, and in some cases, also provides authentication for secure access. For more information, read the [Setting Up Authorization using an API Key](../../dev-tools/bot-authorization/setting-up-authorization-using-an-api-key.md){:target="_blank"} article. 

Actions can be authorized based on the authorization profiles that are supported by the third-party  integrations.  Users can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation.

!!! note

    An email notification is sent to all the app developers when the authorization token expires for any of the Prebuilt Action Integrations in the App. The notification requests the app developer to reauthorize. The integration moves to an error state as soon as the token expires. The service call fails during the run time, upon expiry of authorization token and an error message, "Something went wrong" is displayed to the end-user.

The email template which is sent to the app developer upon token expiry is as follows:  
<img src="../images/actions-img1.png" alt="Email Template" title="Email Template" style="border: 1px solid gray;zoom:50%;"/>


## Available Actions and How to Configure Them

The available Actions/Integrations are listed in the table below. Go to **App Settings > Integrations > Actions** and click the **Action** you want to configure in the Kore.ai XO platform. The page with Instructions and Configuration settings will slide out. For step-by-step instructions on how to configure an action, click the Learn more link for the action in the table below.









| **Actions** | **Descriptions** | **Supported Templates** | **Authorization Type** | **More Information** |
| --- | --- | --- | --- | --- |
| Asana | Integrates with Asana instance to find information regarding projects, users, and tasks. | 5   | Basic Auth | [Learn more](./asana/configuring-the-asana-action.md){:target="_blank"} |
| Azure OpenAi | Integrates with Azure OpenAI instance to find answers to your general queries. | 1   | Basic Auth | [Learn more](./azure-open-ai/configuring-the-azure-openai-action.md){:target="_blank"} |
| BambooHR | Integrates with BambooHR software for small and medium businesses and those who work in them. | 7   | Basic Auth | [Learn more](./bamboo-hr/configuring-the-bamboohr-action.md){:target="_blank"} |
| Bitly | Integrates with Bitly instance to shorten any long URLs. | 1  | Basic Auth | [Learn more](./bitly/configuring-the-bitly-action.md){:target="_blank"} |
| Confluence | Integrates with Confluence instance to create, and view pages or blogs on the Confluence space. | 1   | Basic Auth | [Learn more](./confluence/configuring-the-confluence-action.md){:target="_blank"} |
| DHL | Integrates with DHL system to find information regarding DHL Locations and Track Shipments. | 2   | Basic Auth | [Learn more](./dhl/configuring-the-dhl-action.md){:target="_blank"} |
| Freshdesk | Integrates with Freshdesk to create, view, update, search and delete tickets. | 6   | Basic Auth | [Learn more](../actions/freshdesk/configuring-the-freshdesk-action.md){:target="_blank"} |
| Freshservice ITSM | Integrates with Freshservice ITSM to create, view, update, search and delete tickets. | 6   | Basic Auth | [Learn more](./freshservice/configuring-the-freshservice-action.md){:target="_blank"} |
| Google Maps | Integrates with Google Maps to find information regarding accurate Locations and places. | 2   | Basic Auth | [Learn more](./google-maps/configuring-the-google-maps-action.md){:target="_blank"} |
| Here | Integrates with Here instance to find locations by text. | 1   | Basic Auth | [Learn more](./here/configuring-the-here-action.md){:target="_blank"} |
| HubSpot | Integrates with HubSpot CRM to customize the lead details through an AI Agent. | 10  | Dev OAuth and OAuth | [Learn more](./hubspot/configuring-the-hubspot-action.md){:target="_blank"} |
| JIRA | Integrates with JIRA to create, view, update and delete issues. | 5   | Basic Auth | [Learn more](./jira/configuring-the-jira-action.md){:target="_blank"} |
| Microsoft Graph | Integrates with Microsoft Graph to create, view, and update events and to-do lists, and send emails to users. | 5   | Basic Auth | [Learn more](./microsoft-graph/configuring-the-microsoft-graph-action.md){:target="_blank"} |
| OpenAI | Integrates with OpenAI ChatGPT to generate answers from context and extract skills from the resume through an AI Agent. | 2   | API Key OAuth | [Learn more](./open-ai/configuring-the-openai-action.md){:target="_blank"} |
| Salesforce CRM | Integrates with Salesforce CRM to power your conversations to create Leads / Opportunities and other functions. | 7   | Dev OAuth and OAuth | [Learn more](./salesforce/configuring-the-salesforce-crm-action.md){:target="_blank"} |
| Shopify | Integrates with Shopify Shop instance to find information regarding Customers, Products, and Orders. | 6   | Basic OAuth | [Learn more](./shopify/configuring-the-shopify-action.md){:target="_blank"} |
| ServiceNow | Integrates with ServiceNow to build the digital workflows on a single, unified platform. | 10  | Basic OAuth | [Learn more](./servicenow/configuring-the-servicenow-action.md){:target="_blank"} |
| Stripe | Integrates with Stripe to accept payments, send payouts, and manage the payment to complete payment-related tasks. | 5   | Basic OAuth | [Learn more](./stripe/configuring-the-stripe-action.md){:target="_blank"} |
| Twilio Verify | Integrates with Twilio Verify to send SMS, start verification and check verification. | 3   | Basic OAuth | [Learn more](./twilio/configuring-the-twilio-action.md){:target="_blank"} |
| Zendesk | Integrates with Zendesk instance to create ticket, view all tickets, search tickets with IDs and search ticket with keywords. | 5   | Basic OAuth | [Learn more](./zendesk/configuring-the-zendesk-action.md){:target="_blank"} |


## Disabling or Deleting Actions/Integrations

You can disable or delete an external integration that you configured earlier. This is useful in case you want to switch to another integration and are no longer using the configured integration.


### Disabling an Integration/Action

Disabling the integration action will change its status from enabled to disabled, but the authorization configurations associated with it will remain the same.

**Steps to disable an integration.**

1. Go to **App Settings** > **Integrations** > **Actions**.
2. To **disable** the integration, hover over it and click the **Settings** icon in the top right corner.
2. If the action/integration is enabled, you will have the option to **Disable** it, and vice versa.  
<img src="../images/actions-img2-integrations_disable.png" alt="Disable integration" title="Disable integration" style="border: 1px solid gray;zoom:50%;"/>

3. Once you Disable an action, the authorization configurations related to that particular action are disabled with no changes.
4. The service node status changes from **Integration Service** to **Custom Service**.  
<img src="../images/actions-img3-integrations_disable1.png" alt="Node status change" title="Node status change" style="border: 1px solid gray;zoom:50%;"/>

5. If you need to enable a previously disabled action, you can do so by hovering over it in the actions list and clicking on the Settings icon located in the top right corner as shown in the figure below.  
<img src="../images/actions-img4-integrations_disable2.png" alt="Re-enable integration" title="Re-enable integration" style="border: 1px solid gray;zoom:50%;"/>

6. You will be redirected to re-authorize the action with your external integration account credentials. For more information related to how to authorize an integration action, see Authorization article.


### Deleting an Integration/Action

You can delete an external integration that is no longer in use.

**Steps to delete an integration:**

1. Go to **App Settings** > **Integrations** > **Actions**.
2. To **delete** the integration, hover over it and click the **Settings** icon in the top right corner.
2. Choose the option to **Delete** the action/integration.  
<img src="../images/actions-img5-integrations_delete.png" alt="Delete integration" title="Delete integration" style="border: 1px solid gray;zoom:50%;"/>

!!! Warning

    Deletion is permanent and cannot be undone. You are asked to confirm your choice, so make sure this is exactly what you want to do. Once an action is **Deleted**, all authorization configurations related to that particular integration are deleted.



## More Like This

* [Kore.ai Integrations Framework Guide](https://info.kore.ai/hubfs/1.%20Kore.ai%20Resources/XO%20Platform/Documents/Technical%20Documents%20v9.0/Kore.ai%20XO%20Platform%20Integration%20Capabilities_Sep%202022.pdf){:target="_blank"}
* [Configure Salesforce Integrations Actions](https://vimeo.com/761445731){:target="_blank"} (Video: 3m15s)