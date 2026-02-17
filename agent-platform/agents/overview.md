# AI Agents

**Agents in an Agentic App** are specialized entities that autonomously perform tasks or actions aligned with specific goals. They function as self-contained units of intelligence, equipped with the knowledge and resources necessary to address a wide range of scenarios effectively.

!!!abstract "Example"
    In an HR assistant app, agents can be configured as follows. 
    
    * Leave Management Agent: Manages everything related to viewing or applying for leave 
    * Policy Enquiry Agent: Handles all the employee queries related to company policies.
    * Employee Directory Agent: Provides employee information. 

An Agent perceives the environment, processes information, and takes actions to achieve specific goals. The main tasks of an agent are shown below.


![Agent Operations](images/agent-tasks.png "Agentic App Anatomy")

## Key Components of an Agent

Each agent is characterized by its description, scope, and instructions, which help the orchestrator route user requests to the most suitable agent. The agent leverages available tools and knowledge sources to respond to user queries and utilizes LLM capabilities to interact with users, extract relevant entities, and execute the required actions.
 

* Description and Scope: Describe the role and responsibilities of the agent. They allow the orchestrator to route user requests to appropriate agents in the app. The scope sets the context for what an agent needs to accomplish.
* Instructions: Instructions guide an agent’s behavior and decision-making.
* Tools: Actions are the core tasks an agent can perform. These actions rely on tools that enable agents to take actions such as talking to external APIs or running database queries.
* Knowledge: Knowledge helps Agents retrieve information from knowledge bases to answer questions and complete tasks effectively.
* LLMs: Agents use LLMs to understand the intent and interpret user queries, interact and engage with users, identify required entities to complete a task, design the workflow to execute a series of actions, and support decision-making when needed.
 

## Key Features of an Agent  

* **Unique Core Functions**: Each agent is assigned a distinct set of core functions tailored to its specific purpose. These functions define the agent's capabilities and the scope of tasks it can handle, ensuring that it remains focused and efficient in addressing its designated objectives.
* **Defined Objectives and Responsibilities**: Agents operate within the boundaries of clearly outlined objectives and responsibilities. These objectives serve as guiding principles, ensuring the agent prioritizes tasks that align with the system's overarching goals or the user’s requests.
* **Equipped with Tools and Knowledge**: To enable action-taking, agents are provisioned with specialized tools, resources, and domain-specific knowledge. Depending on the tasks they're expected to perform, this could include access to APIs, external databases, computational resources, or pre-trained models.
* **Autonomy and Adaptability**: Agents are designed to act autonomously, interpreting input, analyzing situations, and deciding the best course of action. Their adaptability allows them to respond dynamically to changing conditions or unexpected challenges in pursuit of their goals.

<hr/> 

**Related Resources**

* [Create an Agentic App](./agentic-apps/create-app.md)
* [Set up AI Agents](./create-agent.md)
* [Configure Tools for Agents](./tools/overview.md)
