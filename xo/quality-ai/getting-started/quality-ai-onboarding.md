# Quality AI Onboarding 

Quality AI is an advanced analytics platform that evaluates post-interaction customer conversations to enhance agent performance and improve the overall customer experience.

The Quality AI onboarding guides you through the process, from account access to application setup. It helps quality teams and analysts configure data sources, define evaluation criteria, and apply consistent scoring. This approach reduces manual setup and accelerates access to compliance metrics, quality insights, and performance reports.

After signing up, you select deployment options, configure ingestion sources, and complete the required settings to start scoring and analyzing interactions.

## Before You Start

Make sure you have the following prerequisites:

* Administrator access to your AI for Service (XO Platform) account.

* Admin-level credentials for the workspace.

* Enable Quality AI at the workspace level using the public API.

* A selected deployment mode.

## Conversation Sources

Quality AI supports the following conversation sources:

1. **Standalone (Quality AI Express)**

    * Integrates with any CCaaS platform by using file-based ingestion (for example, AWS S3).

1. **Integrated with Agent AI**

    * Integrates with third-party desktops through Agent AI.

1. **Bundled with CCAI**
    * Integrates with existing systems for real-time, unified analytics.

        !!! note

            You can access Quality AI as a standalone product from the app switcher. You can change or upgrade licenses and conversation sources at any time.

## Onboarding Journey

You can start the Quality AI onboarding journey using any one of the entry points on the XO platform. All options require you to enter an application name and description, but each option creates and guides the application differently. You can add any additional AI-powered products at any time.

### Create a Quality AI Application

Use the following steps to create a Quality AI application in the XO platform:

1. Sign in to the [AI for Service](../../getting-started/accessing-the-platform.md){:target="_blank"} by using **Email** or **SSO** (Google or Office 365). 

1. If you don’t have an account, sign up for a new one. [Learn more](../../getting-started/accessing-the-platform.md){:target="_blank"}.  

1. Choose one of the following options to start a new project or select a product: 

    * On the XO landing page, select the **New App** from the application menu.   
    <img src="../Onboarding/images/navigate-to new-app.png" alt="New App" title="New App" style="border: 1px solid gray; zoom:80%;"/>

        * After you select **+ New App**, the system displays to create your Service App screen.       
        <img src="../Onboarding/images/Quality-ai-new-user.png" alt="Contact us" title="Contact us" style="border: 1px solid gray; zoom:80%;"/>

            !!! note
            
                * Select **New App** from the application dropdown menu to create a new Quality AI application. New App is available from the global app switcher and lets you create a new application at any time, regardless of your current product licenses.

    * On the Get Started screen, select **Create New**.      
    <img src="../Onboarding/images/create-new-app-project.png" alt="Create New App" title="Create New App" style="border: 1px solid gray; zoom:80%;"/>

        !!! note
            
            * Select **Create New** from the **Get Started** screen to manually create a new AI application. You select and enable products, such as Quality AI, during setup. 

    * On the Get Started screen, select **Contact us** or **Try now**.         
    <img src="../Onboarding/images/onboarding-new-users.png" alt="Contact Us" title="Contact Us" style="border: 1px solid gray; zoom:80%;"/>

        !!! note 

            * Select **Contact us** to proceed with sales-assisted onboarding. The system skips Guided Onboarding and opens the Basic Configuration Settings section after license activation.
            
            * Select **Try now** from the **Get Started** screen to start self-service onboarding for Quality AI. The system automatically creates a Quality AI application and launches guided onboarding.

#### Application Details

1. Enter the **App's Name** and a brief **Description**.    
<img src="../Onboarding/images/create-new-app.png" alt="Try Now" title="Try Now" style="border: 1px solid gray; zoom:80%;"/>

1. The system automatically generates a new application.  
<img src="../Onboarding/images/creating-app.png" alt="Try Now" title="Try Now" style="border: 1px solid gray; zoom:80%;"/>

1. After creation, follow the guided setup steps.

### Configure Basic Settings

#### Multilingual Support

Quality AI supports multiple languages. English is the default language.

1. Select agent languages for customer assistance and AI-generated output (Topics, Justifications, QA outcomes).

1. Select a preferred language for reports.   
<img src="../Onboarding/images/choose-language.png" alt="Preferred Language" title="Preferred Language" style="border: 1px solid gray; zoom:80%;"/>

    !!! note

        * The system uses English by default and does not let you edit or remove the default language.

        * To enable Quality AI features for non-English languages, configure an LLM in the GenAI section.

1. Select **+ Add** to move languages to the **Selected Languages** list.  
<img src="../Onboarding/images/add-new-lang.png" alt="Select Language" title="Select Language" style="border: 1px solid gray; zoom:80%;"/>

1. Toggle a language on to **Mark as the Default**.   
<img src="../Onboarding/images/set-default-lang.png" alt="Mark Default Language" title="Mark Default Language" style="border: 1px solid gray; zoom:80%;"/>
    
1. Toggle a language off to remove it from the default list.   

    !!! warning Default Language Removal

        When you remove the default language, the system stops scoring interactions in that language but continues to display AI-generated insights in the default language.

1. Select **Confirm** to save your changes.

### Set up and Manage Conversation Sources

Configure conversation sources based on your deployment type. 

**Standalone or Integrated Deployments**

* Enable **CCAI** or **Agent AI** connections.

* Configure Queue IDs and agent Email ID mappings for **Agent AI**.

**Standalone or Express Deployments**

* Enable **Quality AI Express**.

* Configure file uploads using connectors.

### Queue Configuration

Configure queues for Agent AI and Quality AI Express sources to route conversations correctly. Queue configuration appears only for **Agent AI** or **Quality AI Express** deployments.

#### Add a Queue

1. Enable **Agent AI** or **Quality AI Express** source.

1. Select **Add Queue**.

1. Enter the following details:   
<img src="../Onboarding/images/add-queue.png" alt="Add Queue" title="Add Queue" style="border: 1px solid gray; zoom:80%;"/>

    * **Name**: Enter a descriptive queue name.

    * **Queue ID**: Provide a unique identifier for the queue.

    * **System Generated Queue ID**: Automatically generated for internal tracking.

    * **Agents**: Assign agents to the queue using the searchable list.

    !!! note

        Include unique agent email IDs and Queue IDs from the source system. Duplicate values can cause routing or processing issues.

1. Select **Save** to start or update conversation ingestion.     
<img src="../Onboarding/images/add-queue-agent.png" alt="Agent Queue Details" title="Agent Queue Details" style="border: 1px solid gray; zoom:80%;"/>

#### Conversation Agent–Queue Mapping

This describes the agent-to-queue mapping for both Quality AI Express queues and Agent AI queues. Using the UI, agents can map directly to Express queues, and the system successfully saves the configuration.


To enable interaction evaluation and Kore score validation, you can attach each mapped queue to the relevant evaluation form. This setup validates scheduled interactions ingested via S3, Public APIs, and Agent AI queues.

The system displays interactions only when all the following conditions apply:

* The queue maps to an evaluation form.
* The agent maps to the queue using the UI.
* The supervisor or agent viewing the data belongs to the same queue.

If any of these conditions fail, the system doesn't display the interactions.


### Chat Script Timestamp Format

Chat script timestamp format controls how Quality AI Express parses timestamps in chat conversation files during ingestion. Each chat script includes message-level timestamps. Correct configuration ensures accurate message sequencing, duration calculations, and time-based analytics.

Enables you to configure the timestamp format at the Quality AI Express app level. The selected format applies to all ingested chat files, persists across sessions, and displays consistently in the **Conversation Sources** tab.

**Why Timestamp Format Matters**

* Order messages chronologically.

* Calculate conversation duration and response times.

* Identify hold periods and transfer events.

* Generate time-based analytics and reports.

* Incorrect timestamp parsing causes sequencing errors and inaccurate metrics.

Quality AI supports the following Chat script timestamp formats:

#### Unix Timestamp (Default)

Represents seconds since the Unix epoch. This ingestion process validates start and end times, which can limit flexibility for demo environments and third-party desktop integrations. 

**Format**: Integer or decimal number.

**Examples**: 

* `1735574400` (represents December 30, 2024, 12:00:00 PM UTC)

* `1735574400.523` (includes milliseconds)

#### Offset Timestamp

Represents seconds from the start or end of the conversation. This ingestion process supports message-level offset timestamps without start or end date validation (used only for reporting and filtering). This change applies only to chat ingestion and doesn't affect voice conversation ingestion.

**Format**: Integer or decimal number.

**Examples**: 

* `0` (conversation start)
* `45` (45 seconds into the conversation)
* `120.5` (2 minutes and 0.5 seconds into the conversation)

### Set Application Usage Permissions

Application usage settings control agent access, audit behavior, and usage policies.

#### Agent Access

* View AI-generated emotions and sentiment.

* View GenAI Auto QA justifications. 

* Hide auditor details from agents.

#### Audit Settings

* Enable Speech-based audits 

* Enable Agent AI Playbook audits        
<img src="../Onboarding/images/app-usage-settings.png" alt="App Usage Setting" title="App Usage Setting" style="border: 1px solid gray; zoom:80%;"/> 

    !!! note

        * The system disables access to both **Agent Access** and **Audit Settings** by default. 
        
        * It shows queue configuration only when you select **Agent AI or Quality AI Express**, not **CCAI** alone.

### Go Live with Quality AI

Complete all required configuration steps.

1. After setup, **Quality AI** automatically processes conversations.

1. Use the **Product Switcher** to access **Quality AI**. This screen appears only on first-time login.        
<img src="../Onboarding/images/product-switcher.png" alt="Product Switcher" title="Product Switcher" style="border: 1px solid gray; zoom:80%;"/>   

    !!! note

        * Use the workspace switcher to manage multiple environments. 
        
        * Feature flags control the Quality AI Switcher.

1. Navigate to **Conversation Sources** > **Configure** and enable the required sources for tracking and routing. The Product Switcher icon lets you switch effortlessly between products.       
<img src="../Onboarding/images/conversation-sources.png" alt="Conversation Sources" title="Conversation Sources" style="border: 1px solid gray; zoom:80%;"/> 

### Quality AI Left Navigation

After launch, the left navigation displays:

* **Quality AI** (dashboard and analytics).

* **GenAI** (LLM configuration).

* **Deploy** (deployment and publishing workflows).

* **User Management** (roles and permissions).     
<img src="../Onboarding/images/conversation-sources-left-navigation.png" alt="App Usage Setting" title="App Usage Setting" style="border: 1px solid gray; zoom:80%;"/> 


