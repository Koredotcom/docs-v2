# Work - Agentic Search

Work - Agentic Search transforms how you interact with enterprise data by providing an intelligent search and orchestration layer across your organization's knowledge sources. Platform now delivers improved source attribution, comprehensive citations, and native document generation capabilities, including PDF and PowerPoint exports.

This guide walks you through the complete setup process, from initial application creation through production deployment. You'll configure the agentic architecture, integrate with your existing tools, and validate the deployment to ensure seamless operation within your environment.

## Prerequisites

Before you begin the configuration process, ensure you have access to the following:

* Admin credentials for the Agent Platform.
* OpenAI or Azure OpenAI API credentials.
* Platform admin panel access with appropriate permissions.
* Active session tokens for MCP tool authentication.

## Creating Agentic Application

Before creating the Agentic Search application, you must first configure a model in the Agent Platform. The Agentic Search operates as an agentic application within the Agent Platform. 

To download the pre-configured base application package.

1.  Click the download link provided by your administrator to obtain the base app export.
2. Save the downloaded file to an accessible location on your system.

You'll start by importing a pre-configured base application that provides the foundational architecture.

1. Open **Agent Platform** → **Create App.**
2. Select **Import Existing App**.
3. Upload the base app provided by your administrator.
<img src="../images/work-agent-home.png" alt="work-agent-home" title="work-agent-home" style="border: 1px solid gray; zoom:70%;">

The import process establishes your working environment with the core components already in place. You'll customize these components in the subsequent steps to match your organization's specific requirements and tool ecosystem.

## Configure Language Models

Agentic Search relies on advanced language models to power its intelligent routing and response generation. You'll configure these models for both the supervisor agent and the data assistant agent.

Access the Models section within your application and initiate the model addition process. The platform supports both OpenAI and Azure OpenAI configurations, giving you flexibility based on your organization's infrastructure and compliance requirements.

1. Navigate to **Models** > **Add Model**.
2. Add your OpenAI or Azure OpenAI models.
3. Open **Supervisor** and select your preferred model.
4. Open **Data Assistant Agent** and select a model.

You can use the same model for both agents or select different models based on your performance requirements.

## Set Up MCP Tools

MCP tools enable Agentic Search to connect with your enterprise systems. The configuration establishes secure connections using session-based authentication.

### Create the MCP Tool

First, retrieve the Server URL from your environment.

1. Log into the Platform and go to **Admin Hub** > **Assistant Configuration**.
2. Select **MCP Server** > **Default Server**.
3. Copy the Server URL displayed.
<img src="../images/work-agent-url.png" alt="work-agent-url" title="work-agent-url" style="border: 1px solid gray; zoom:70%;">

Now, create the MCP tool in the Agent Platform.

1. Go to **Tools** > **MCP Tools** > **Create Tool**.
2. Paste the Server URL you copied from the platform.
3. Add the authentication header:
    * Key: `auth`
    * Value: `{{memory.sessionMeta.metadata.aiForWork.sessionToken}}`
4. Save the tool configuration.
<img src="../images/work-agent-tool.png" alt="work-agent-tool" title="work-agent-tool" style="border: 1px solid gray; zoom:70%;">

### Enable Tool Integrations

After saving your MCP tool configuration, you'll enable specific tool integrations through the Tool Selection interface. Agentic Search supports various productivity tools, including Google Workspace connectors for contact lookup, email management, and calendar operations. 

1. Navigate to **Tools** → **Tool Selection**.
2. Enable the following tools:
    * Google Connector tools (Contact Lookup, Send Email, Read Emails, Calendar).
    * Outlook tools (if your organization uses Outlook).
    * Active Search Apps (based on your tenant configuration).
<img src="../images/work-agent-select-tools.png" alt="work-agent-select-tools" title="work-agent-select-tools" style="border: 1px solid gray; zoom:70%;">

## Configure Agent Workflow

The agent architecture determines how Agentic Search processes and routes queries. Your configuration approach depends on the number of search applications your organization maintains.

### Multiple Search Apps

Organizations with multiple search applications benefit from the Query Hub pattern. The Query Hub agent acts as an intelligent router, analyzing incoming queries and directing them to the appropriate specialized search application. Keep the Query Hub in your configuration and ensure all search apps connect to it, creating a centralized orchestration point.

1. Retain **Query Hub** in your configuration.
2. Add all search apps to Query Hub.
3. Configure search app descriptions in Knowledge Source settings.

### Single Search App

If your organization operates a single search application, the Query Hub introduces unnecessary complexity. Remove it from your configuration so queries flow directly to your search application for processing.

If you have only one search application, remove the Query Hub to simplify the workflow.

1. Delete **Query Hub** from your configuration.
2. Allow queries to flow directly to your search application.


### Configure Data Assistant

The Data Assistant agent requires access to all configured tools. Open its configuration and add the tools you enabled in the previous step. This gives the agent the capabilities it needs to retrieve information, send communications, and perform actions across your integrated systems.

1. Open the **Data Assistant** agent.
2. Add all enabled tools to this agent.
3. Ensure the agent has access to all necessary integrations.


## Create and Deploy Version

With your application configured, you'll create a deployable version and establish an environment for production use. The versioning system allows you to maintain multiple configurations and roll back if needed.

1. Go to **Deployment** → **Versions** → **+ New Version**.
<img src="../images/work-agent-new-version.png" alt="work-agent-version" title="work-agent-version" style="border: 1px solid gray; zoom:70%;">

2. Save the version to capture your current configuration.
<img src="../images/work-agent-version.png" alt="work-agent-version" title="work-agent-version" style="border: 1px solid gray; zoom:70%;">

1. Navigate to **Deployment** → **Environments** → **+ New Environment**.
<img src="../images/work-agent-environment.png" alt="work-agent-environment" title="work-agent-environment" style="border: 1px solid gray; zoom:70%;">

2. Deploy your version to the new environment.


## Generate API Credentials

Create the API credentials that the Platform uses to communicate with your deployment.

1. Copy the **deployment cURL** from your environment.
2. Go to **API Scoping** → **+ New API Scope**.
<img src="../images/work-agent-new-api-scope.png" alt="work-agent-api-scope" title="work-agent-api-scope" style="border: 1px solid gray; zoom:70%;">

3. Fill in the required fields.
<img src="../images/work-agent-api-scope.png" alt="work-agent-api-scope" title="work-agent-api-scope" style="border: 1px solid gray; zoom:70%;">

3. Navigate to **API Keys → Create Key** using your scope.
<img src="../images/work-agent-key.png" alt="work-agent-key" title="work-agent-key" style="border: 1px solid gray; zoom:70%;">

4. Replace the placeholder API key in the cURL with your generated key.

Keep this updated cURL command ready for the next step.


## Register with AI for Work

The final configuration step connects your deployed Agentic Search instance to the Platform, making it available to users through the search interface.

1. Log into the Platform and access **Knowledge Sources** > **Agentic Apps**.
2. Enter a name and description for your application.
3. Paste your updated cURL command.
4. Locate the streaming configuration and change:
    * From: `"stream": {"enable": false}`
    * To: `"stream": {"enable": true}`
   <img src="../images/work-agent-agentic-app.png" alt="work-agent-agentic-app" title="work-agent-agentic-app" style="border: 1px solid gray; zoom:70%;"> 

5. Before saving, you must update the streaming configuration.
6. Inside the **Add Agentic App Source** window, scroll to the JSON body and modify. This activates real-time token-level streaming so users can see responses as they generate.
<img src="../images/work-agent-agentic-app-source.png" alt="work-agent-agentic-app-source" title="work-agent-agentic-app-source" style="border: 1px solid gray; zoom:70%;">

1. Click **Save.**

Enabling streaming provides a real-time response display for a better user experience.


## Validate Your Deployment

With everything configured and deployed, validate that Agentic Search functions correctly end-to-end.

In platform, navigate to the Work tab's search interface. Submit a test query that should trigger your configured agents and tools. The system should process your query and return relevant results.


1. Open **AI for Work** → **Search Bar (Work tab)**.
2. Submit a test query.
3. Verify the results appear correctly.
4. Check **Agent Platform** → **Traces** to review the execution flow.
<img src="../images/work-agent-trace.png" alt="work-agent-trace" title="work-agent-trace" style="border: 1px solid gray; zoom:70%;">

The traces show how your query moved through the agent architecture, which tools were invoked, and how the response was generated. Use this diagnostic view to troubleshoot any issues.

## Customize Agent Behavior

Fine-tune how Agentic Search interprets queries and formats responses by modifying agent prompts.

You can adjust behavior through:

* **Supervisor prompt**: Controls high-level routing logic and workflow decisions.
* **Agent instructions**: Defines specific behaviors for individual agents.

Access these settings in the Agent Platform and edit the prompts based on your requirements. Changes take effect when you deploy your next version.


## Agent Configuration and Prompting Guidelines

Use the following guidelines to ensure Agentic Search operates within its intended scope, produces reliable results, and delivers a consistent user experience.


* **Define Clear Agent Scope and Purpose**: Clearly state the purpose of each agent and explicitly restrict it to Agentic Search–related responses. In the agent instructions, prohibit the use of general AI knowledge or information that does not originate from the configured search applications. This prevents unintended or misleading responses. 
* **Enforce Mandatory Source Citations**: Configure agents to include source citations in every response. Citations ensure that answers remain grounded in the underlying search applications and improve trust, traceability, and auditability of the results. 
* **Specify Out-of-Scope Query Handling**: Define how agents should respond to queries that fall outside the supported knowledge domain. Agents must clearly acknowledge limitations and inform users when requested information is unavailable, rather than attempting to infer or generate answers. 
* **Write Comprehensive Search Application Descriptions**: In **Enterprise Knowledge Source settings** in the Platform, provide detailed descriptions for each search application. Include:
    * The application’s purpose
    * The data sources it covers
    * Explicit scope boundaries
* **Validate Scope Compliance Through Testing**: After configuration, test the system using intentionally out-of-scope and edge-case queries. Verify that agents adhere to defined boundaries and dont revert to general knowledge when relevant search results are unavailable.
* **Structure Prompts for Clarity and Priority**: Organize prompts using structured formats to improve readability and instruction priority.
    * Use XML-style tags (for example, `<section>...</section>`) to separate logical blocks.
    * Apply Markdown elements such as headings (`#`), emphasis (`*italic*`, `**bold**`), and blockquotes (`>`) to highlight important instructions.
* **Handle Edge Cases in Supervisor and Agent Prompts**: Define explicit logic in the **Supervisor prompt** to control:
    * Response formatting.
    * Data volume passed from agents.
    * Aggregation or filtering of agent outputs.
* **Use Dynamic Context Placeholders in Prompts**: Incorporate supported placeholders to provide real-time user and session context during query execution. These variables improve response relevance and personalization without expanding the agent’s scope. 
Supported placeholders include: 
     ```text
  
     {{memory.sessionMeta.metadata.firstName}}        // User first name
     {{memory.sessionMeta.metadata.lastName}}    // User last name
     {{memory.sessionMeta.metadata.email}}       // User email
     {{memory.sessionMeta.metadata.timezone}}    // User timezone
     {{memory.sessionMeta.metadata.customData.entrKnwAgnAppMeta.userProfile}}      // User profile
     {{memory.sessionMeta.metadata.customData.entrKnwAgnAppMeta.currentDateAndTime}}  // Current date and time
     
     ```
