# Enterprise Knowledge

Enterprise Knowledge represents a **Search AI** app, **Agentic** App, or **Amazon Q** Index application provisioned for every enterprise  workspace. It serves as a fallback response repository, ensuring the system can generate responses by searching enterprise data when no specific agents align with the user's intent. Enterprise Knowledge enhances response accuracy and relevance by retrieving content from various sources and generating contextual responses based on that information. The system automatically makes it available to users when no custom or specific agents handle a user query.

## Key Features

* **Fallback Search Response**: It activates when no specific agent matches the user's query, ensuring the system can still provide useful responses.
* **Multiple Data Sources**: It retrieves information from various sources, including webpages, local files, third-party knowledge systems, and structured data, and combines them for a holistic response.

!!!note
    Enterprise Knowledge is only available in enterprise workspaces. Users in standard or other workspace  wont have access to this feature.

## How Does Enterprise Knowledge Work?

The **Enterprise Knowledge** is meant for generic use rather than a specific intent.

* When a user asks a question, the system first checks if any specific agent (an action agent, an agentic flow with multiple agents or a specialized retrieval agent) is relevant to handle that query.
* If the system finds no specific agent for the query, Enterprise Knowledge activates automatically.
* The Enterprise Knowledge searches through its configured content sources and retrieves the most relevant information related to the query.
* Once the system retrieves relevant content, it generates a coherent and contextual response. Users receive this response along with all matching search results for their query.

## Enterprise Knowledge Configuration

Configure enterprise knowledge sources that activate when no agent triggers. Set up and manage sources using **Search AI** app, **Agentic App**, or **Amazon Q**. Enterprise Knowledge operates per workspace - each enterprise workspace maintains its own separate knowledge configuration.

* [Configure Search AI](../custom-agents/connect-search-ai.md)
* [Configure Agentic App](../custom-agents/connect-agentic-app.md)
* [Configure Amazon Q](../custom-agents/connect-amazon-q.md)

!!! note
     * Configured sources become available to all the users within the selected workspace.
     * For restricted access, choose the specific workspace that matches the user access requirements.


<img src="../images/enterprise_knowledge_1.png" alt="Details and Purpose" title="Details and Purpose" style="border: 1px solid gray; zoom:70%;">


!!! note
     * Maximum Sources: Up to 5 sources can be created.
     * Active Source: Only 1 source can be active at any time.
     * Configuration Types: Choose between Search AI app, Agentic App, or Amazon Q (not multiple simultaneously).


## Managing Knowledge Sources

Access the Enterprise Knowledge configuration through **Enterprise Knowledge** > **Configure** to view all configured sources and their current status.

<img src="../images/enterprise_knowledge_2.png" alt="Details and Purpose" title="Details and Purpose" style="border: 1px solid gray; zoom:70%;">

### Source Operations

**Activating Sources** Only one source can be active at any time. To switch active knowledge sources, click the three dots next to any inactive source and select **Set Active**. The system automatically deactivates the previous source when the new one is activated.

**Editing Configurations** Update knowledge source settings by clicking the three dots and selecting **Edit**. This allows modifying parameters, updating content references, or adjusting response behaviors without creating a new source.

**Removing Sources** Delete outdated or unused sources by selecting **Delete** from the three dots menu. This action is permanent and cannot be reversed.
