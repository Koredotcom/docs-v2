# Agent Management

## Agent Status

Agent status allows you to enable or disable an agent without deleting it. Disabled agents remain fully editable but are excluded from runtime execution. The runtime behavior depends on the orchestration pattern used.

**Points to Note**

* Agent status affects runtime behavior only.
* Disabled agents remain fully editable and configurable.
* Re-enabling the agent immediately restores normal routing.


### When an Agent is Disabled in the Supervisor Pattern

* Disabled agents are invisible to the supervisor.
* They're excluded from the available agents list during orchestration. The supervisor doesn't route requests to disabled agents.

### When an Agent is Disabled in the Network Adapter Pattern

* If the initial agent is disabled, the app returns an error to the user.
* If a delegated agent is disabled, the delegation attempt fails. Any agents that are reachable only through the disabled agent are also excluded from the execution flow.

### When an Agent is Disabled in the Single-Agent Apps

* If the only agent in the app is disabled, the app returns an error to the user. 

## Agent Pre-Processor

The Agent Pre-Processor allows developers to run custom scripts before an agent is invoked. These scripts can access system memory and context variables to perform data transformation, validation, context preparation, and state preparation. The configured script runs automatically every time the agent's run is initiated, ensuring consistent preprocessing of the agent’s input state.

!!!note
    Currently, this feature is enabled on request.

### Common Use Cases

Some of the common use cases where agent pre-processor scripts can be useful are listed below.

* Security: content moderation.​
* Validation: Input normalization, schema enforcement, and type validations.​
* Enrichment: Adding user metadata, timestamps, domain tags, etc.
* Customization: Domain-specific prompts, tool filtering, etc.

### Adding a script

Click on *Add Script* to add a new pre-processor script. Write custom scripts in JavaScript or Python. The available keys are listed at the top. Along with these keys, context and memory variables are also accessible within the script. 

* input: The user input under processing.
* task_input: The structured payload or input passed to the agent for this execution.
* agent_prompt: The agent prompt used to guide the behavior and response of the agent. 
* available_tools: Contains metadata about the tools, agents, and events that the agent is allowed to use. The contents vary based on the orchestration pattern configured for the app.

After writing the script, use the *Test Execution* option to verify its behavior. Once the test is complete, click *Create* to save the script. 

Note: There is no execution timeout for the script. Ensure that the script doesn't introduce unnecessary delays. 


### Sample script 

The following example updates the agent prompt with HR-specific guidance and appends a timestamp to the task input.

```
// Read values from the execution context
var prompt = $agent_prompt;
var tools = $available_tools;
var input = $input;
var task_input = $task_input;

// Add HR-specific guidance to the prompt
var updatedPrompt = prompt + "\n\nYou are an HR assistant. Answer concisely and use only verified HR policies.";

// Append timestamp to the task input
var updatedTaskInput = {
    ...task_input,
    timestamp: new Date().toISOString()
};

// Return updated fields to the agent engine
return {
    agent_prompt: updatedPrompt,
    available_tools: [tools[0]],   // Example: restrict to the first tool
    task_input: updatedTaskInput,
    input: input
};
```

## Delete Agent

Click on Delete Agent to permanently delete the agent. Deleting the agent also deletes the associated data.
