# Agentic App Interface

The Overview section provides a structured summary of your app with linked agents, tools, and knowledge bases, organized into four main sections for improved navigation and usability.

Key Highlights

* **App Summary** displays essential app details with an **Edit** option for configuration changes.
* **The Agents** section shows the autonomous agents of the app. The list shows up to three agents with icons, names, descriptions, and linked tools.
* **The Tools** section lists the tools associated with the agents in the Agentic app.
* **The Knowledge** section displays knowledge bases associated with the Agentic app.
* All sections use **"Load more"** functionality instead of traditional pagination.

<img src="../images/overview.png" alt="Overview" title="Overview" style="zoom:70%; border: 1px solid gray;">

## Agent Listing Page

The **Agent Listing Page** displays all agents associated with the Agentic app as individual cards, providing clear visibility into each agent's connected tools and configuration status. It shows the total number of agents in the app.

[Learn more about how to create an agent](../create-agent.md).

Key Highlights

* Each agent card shows the connected tools with identifiable icons.
* Highlights **proxy agents** with an external icon and hover tooltips revealing connected apps.
* Agents needing LLM configuration show a **Configure LLM** button for quick setup.
* Displays the total agent count in the page header, with **Explore Marketplace** and **New Agent** options always visible.

<img src="../images/agents-listing-page.png" alt="Agent Listing Page" title="Agent Listing Page" style="zoom:70%; border: 1px solid gray;">

## Tools Listing Page

The **Tools listing page** provides a structured view of available tools with clear visibility into their types, statuses, and linked agents. It shows the total number of tools in the app.

[Learn more about Tools](../tools/overview.md).

Key Highlights

* Displays total count categorized under **Workflow**, **Code**, and **MCP.**
* Displays the **Workflow tool status** as **Draft** or **Deployed.**
* Lists up to five linked agents per tool, with **a 'Load** **more'** option for additional agents.
* Provide empty-state CTAs: **Import** and **New Tool** for Workflow tools, **New Tool** for Code tools, **Import** and **Link Tool** for MCP tools.
* **Import Tool** and **New Tool** CTAs are located at the top right for easy access.

<img src="../images/tools-listing-page.png" alt="Tools Listing Page" title="Tools Listing Page" style="zoom:70%; border: 1px solid gray;">

## Knowledge Listing Page

The **Knowledge listing page** provides a structured view of all knowledge bases, offering clear visibility into their count, linked agents, and accessibility from a unified section.

[Learn more about Knowledge](../knowledge/overview.md).

Key Highlights

* Displays the **total number of knowledge bases** in the section header.
* Maintains a **dedicated section** separate from other tool types, ensuring clarity and consistency in navigation.
* Shows clear empty-state actions to guide first-time users: **Create from Scratch** and **Create from Existing Sources**.
* Ensures knowledge bases are easily discoverable and manageable, with consistent formatting and layout aligned with other listing sections.

<img src="../images/knowledge-listing-page.png" alt="Knowledge Listing Page" title="Knowledge Listing Page" style="zoom:70%; border: 1px solid gray;">