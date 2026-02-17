# Pass Contextual Data from AI for Service to Agent Platform

This document explains how to share contextual variables such as channel information, user preferences, etc. from the AI for Service with the Platform. This enables AI agents to reason more effectively, enrich prompts, and execute tools more efficiently, leading to more personalized conversations and a seamless transition from AI for Service to the Platform.


## How It Works

The Platform supports **metadata injection** via a structured memory model. Developers can define variables and expose them as metadata in the Automation Node in AI for Service, which is then made available in the agent’s memory during runtime. This allows seamless context sharing across the platforms.


## Step 1: Pass variables from the AI for Service app

1. Go to the Automation Node in the experience flows. 
2. Go to the Full Autonomy Settings. 
3. Under Metadata, add the variables that you need to pass to the Platform as key-value pairs. You can pass static or dynamic information using context variables through the Metadata key-value pairs. 

Example: Pass the user’s name to the Platform for personalization of conversations:

```json
key: <name> 
value: <context.userInfo.name>
```

## Step 2: Access Metadata in Agent Platform

The metadata passed from AI for Service is automatically stored in the system memory, specifically in the *sessionMeta* field. You can then access this metadata from both the agent and supervisor prompts, as well as code tools. 

To use this metadata in the agent and supervisor prompts, use


```json
{{memory.sessionMeta.metadata.<key>}}
```

To use this metadata in code tools, refer to [this guide](../memory-stores.md#accessing-memory-stores-from-code-tools). 
