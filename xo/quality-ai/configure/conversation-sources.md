# Conversation Sources

The Conversation Sources section in Quality AI lets users configure and manage voice and chat conversation sources from multiple platforms in a single interface. It supports data ingestion from Contact Center AI (CCAI), Agent AI, and Quality AI Express. This centralized approach simplifies conversation ingestion, tracking, routing, and analysis while supporting key metadata for accurate insights.

You can assign agents to Agent AI and Quality AI Express queues directly through UI-based agent–queue mapping, eliminating the need to rely solely on public APIs. The interface lets you enable or disable sources and view and manage queues, including queue name, queue ID, system-generated ID, and assigned agents. You can also add or edit queues. The Add Queue dialog simplifies queue creation by allowing agent assignment through a searchable list.

## Access Conversation Sources

Navigate to **Quality AI** > **CONFIGURE** > **Conversation Sources**.   
<img src="../conversation-sources/conversation-sources.png" alt="Conversation Sources" title="Conversation Sources" style="border: 1px solid gray; zoom:80%;"/>

## Supported Conversation Sources

Quality AI supports three conversation sources, each designed for specific deployment scenarios and organizational needs:

### Contact Center AI (CCAI)

CCAI integrates and ingests real-time conversation data from the CCAI platform.

* **Integration Method**: Direct API connection

* **Data Processing**: Real-time 

* **Configuration Requirements**: None (automatic integration) 

* **Use Case**: Organizations using Kore.ai's native contact center solutions. 

    !!! note

        * If the CCAI source is disabled, the system does not process incoming interactions from CCAI on third-party desktops.

        * CCAI queues do not support agent-queue mapping through UI. Queue configuration and agent assignment continue to follow existing CCAI workflows and APIs.

### Agent AI

Agent AI supports human-agent interactions enhanced by AI augmentation.

* **Integration Method**: Structured data feeds. 

* **Data Processing**: Real-time with metadata validation. 

* **Configuration Requirements**: Add queues with Agent Queue names and Queue IDs. 

* **Use Case**: Organizations with human agents supported by AI assistance.

    !!! note

        * If the Agent AI source is disabled, the system does not process incoming interactions from Agent AI on third-party desktops. 
        
        * Include agent email IDs and queue IDs during integration.

### Quality AI Express

Quality AI Express imports interactions such as service records, chat logs, and emails from external sources using [AWS S3 Connectors](../connectors/aws-s3-connector-setup-guide.md), bypassing CCAI as the ingestion path.

* **Integration Method**: Amazon Web Services (AWS) S3 Connectors

* **Data Processing**: Batch file processing

* **Configuration Requirements**: Add queues with agent queue names and queue IDs

* **Supported Data Types**:

    * Customer service records

    * Chat logs

    * Email interactions

    * Audio recordings

    * Structured metadata files 

    * **Use Case**: Organizations using third-party Contact Center as a Service (CCaaS) platforms.

    !!! note

        Connectors act as the primary bridge for importing conversations into Quality AI through AWS S3 file transfers.

## Configuration Requirements

### Prerequisites

Before you configure Conversation Sources:

* Assign appropriate user permissions.

* Verify required metadata structures exist.

* Confirm integration endpoints are available.

### Quality AI Express Setup

Complete these steps before activating **Quality AI Express**:

* Clear all active **Playbook** metrics from evaluated form queues.

* Clear all active **Dialog Task** metrics from evaluated form queues.

If you skip these steps, the system blocks activation and displays a warning.      
<img src="../conversation-sources/enable-quality-ai-express-setup.png" alt="Express Setup" title="Express Setup" style="border: 1px solid gray; zoom:80%;"/>

**AWS S3 Configuration**:

* Configure S3 bucket access.

* Set up file transfer protocols.

* Define data format specifications.

* Establish processing schedules.

### Conversation Sources Interface

The main interface displays all enabled conversation sources and their queues.

* **Enable/Disable Toggles**: Start or stop ingestion for each source.

* **Queue List**: Displays existing queues with the following columns:

    * **Name**: Queue name for easy identification.

    * **Queue ID**: User-assigned identifier for the queue.

    * **System Generated Queue ID**: Unique system-generated identifier.

    * **Agents**: Number of assigned agents.

* **Actions**: Edit or delete queues.

* **Add Queue**: Add new queues and assign agents.   
<img src="../conversation-sources/connectors.png" alt="Connectors" title="Connectors" style="border: 1px solid gray; zoom:80%;"/>

    !!! note

        * When you enable **Quality AI Express**, the system displays **Connectors** in the Quality AI left navigation panel. 

        * Agent assignments made through public APIs may take time to reflect in the Conversation Sources UI. Refresh or re-sync queues to view updated mappings.
    
### Queue Management

Configure queues for Agent AI and Quality AI Express sources to route conversations correctly.

#### Add Queue

To map agents to a new queue:

1. Navigate to **Quality AI** > **CONFIGURE** > **Conversation Sources**.   

1. Turn on **Agent AI** or **Quality AI Express**, or both sources.

1. Select **Add Queue** and enter the following details:   
<img src="../conversation-sources/add-queue.png" alt="Add Queue" title="Add Queue" style="border: 1px solid gray; zoom:80%;"/>

    * **Name**: Enter a descriptive queue name.

    * **Queue ID**: Provide a unique identifier for the queue.

    * **System Generated Queue ID**: A system-generated Queue ID for internal tracking.

    * **Agents**: Assign agents to the queue using the searchable list. 

1. Select **Save** to start or update conversation ingestion for the queue.    
<img src="../conversation-sources/add-queue-agent.png" alt="Agent Queue Details" title="Agent Queue Details" style="border: 1px solid gray; zoom:80%;"/>    

#### Conversation Agent–Queue Mapping

This describes the agent-to-queue mapping for both Quality AI Express queues and Agent AI queues. Using the UI, agents can map directly to Express queues, and the system successfully saves the configuration.

To enable interaction evaluation and Kore score validation, you can attach each mapped queue to the relevant evaluation form. This setup validates scheduled interactions ingested via S3, Public APIs, and Agent AI queues.

The system displays interactions only when all the following conditions apply:

* The queue maps to an evaluation form.

* The agent maps to the queue using the UI.

* The supervisor or agent viewing the data belongs to the same queue.

If any of these conditions fail, the system doesn't display the interactions.   
    
!!! note

    * Agent-to-queue mapping through the UI applies only to Agent AI and Quality AI Express sources. 
        
    * Contact Center AI (CCAI) queue configuration, routing, and agent assignment remain unchanged.

    * You can assign agents created through platform-level user administration and public APIs. 

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

#### Conversation Sources Warnings

* **CCAI**: Disabling stops processing CCAI interactions.

* **Agent AI**: Disabling stops processing Agent AI interactions.

* **Quality AI Express**: Disabling blocks file-based ingestion.

## Access Control

### User Permissions

**Auto QA Access Required**:

* Enable/disable Quality AI Express.

* Save configuration settings.

* Modify source parameters.

**Limited Access Users**:

* View-only interface (non-editable).

* Can't save configurations.

**Agent-Level Access**:

* Toggle source enable/disable.

* Can't save settings.

When you disable **Conversation Sources** > **Quality AI Express**, the system hides the following CCAI feature metrics:

* Compare functionality

* Contact Center Efficiency

* Agent Efficacy

    * CSAT

* Agent Performance Monitor

    * Agent Occupancy

    * Playbook Adherence

* Customer Experience

    * Average Wait Time

    * NPS Score

* Interaction Details

    * Dispositions

