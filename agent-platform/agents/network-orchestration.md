# Implementing the Adaptive Network Orchestration Pattern

[Learn about what's Adaptive Network pattern and how it works.](adaptive-network.md)

Implementing the Network Pattern in an Agentic app requires:

1. Orchestration Setup in the Agentic App.
2. Configuring Delegation & Fallback Rules for the Agents.

### 1. Selecting the Orchestration Pattern for the Agentic App

1. Navigate to the Orchestrator page of the app.  
2. Then, select an *Initial Agent*. The Initial Agent is the entry point for all queries and tasks. Every request is first routed to this agent, which evaluates the input before handing it off to the appropriate specialized agent. 
![Orchestrator](images/orchestrator-page.png "App Orchestrator")


### 2. Configuring Delegation and Fallback Rules for the Agents 

In an Agentic app that uses the Network orchestration pattern, each agent has a dedicated Delegation Section to define routing rules for smooth handoffs and uninterrupted workflows.

![Delegation Rules](images/network/delegation-page.png "Delegation Rules")

Configure the delegation rules for all the agents in the app: 

1. **Direct Responses**: Toggle Direct Responses to control how the current agent interacts with users
    * Enabled: The agent can send responses directly to the user.
    * Disabled: The agent passes responses to another agent for analysis and reply.
2. **Task Delegation**: Configure rules for handing off tasks to specialized agents
    * Click *Add Delegation*. 
    * From the *Delegate To* list, select the agent you want to route tasks to.
    * Define the condition under which the handoff should occur. 
    
    Add all the delegation rules in this section that the given agent can use for routing. 
    
    For example, the following agent can delegate tasks to three specialized agents—Finance Assistant, HR Assistant, and IT Assistant, depending on the nature of the task.  ![Delegation Rules](images/network/example.png "Delegation Rules")

    **Note**: When an event is selected as the delegation rule, subsequent request handling depends on the event configuration. For example, if an agent handoff event is set up to escalate to a human agent through AI for Service, the delegation will trigger that specific behavior.

## Passing Information Between Agents

When the control passes from one agent to another, the application saves the data, including the context info, summary, and pending tasks, to the `sessionMeta` memory under the `delegationContext` field. The next agent can use this field to get the required information. 

Additionally, the agents can also use custom memory stores to save information as required. This ensures that task-specific data is easily shared during handoffs.
