
# How to Share Metadata from AI for Service to Agent Platform

When users interact with your AI for Service (XO), valuable contextual information is collected throughout the conversation, such as user preferences, channel details, order information, and session data. The metadata sharing feature allows you to pass this context from AI for Service to the Agent Platform, enabling agents to access this information for more intelligent reasoning, personalized responses, and enhanced tool execution. 


## Common Use Cases


* Pass customer tier/status for priority handling.
* Share channel information for channel-specific responses.
* Transfer user preferences for personalized interactions.
* Include session context for continuity.


## How It Works

Developers can define and expose XO variables as metadata, which are then made accessible to agents during runtime.

**Prerequisites**



* Ensure the required variable is defined in AI for Service. For details, see [Using Variables](../app-settings/variables/using-bot-variables.md).
* Ensure an Agentic app is created in the Agent Platform. For steps, see [Create an Agentic App](https://docs.kore.ai/agent-platform/ai-agents/agentic-apps/create-app/).
* Ensure the Agentic app is integrated with AI for Service using the Automation node. To configure, see [Full Autonomy](../flows/node-types/automation.md#full-autonomy).


### Step 1: Create or Use Existing Variables

Create or utilize existing variables in the context object within script nodes or other logic in AI for Service to capture runtime data. (For example,
`context.userInfo.name`, or `context.channel.type`).



<img src="../images/metadata1.png" alt="Metadata" title="Metadata" style="border: 1px solid gray; zoom:80%;"/>



### Step 2: Configure Metadata in Automation Node

In the Automation Node’s metadata section, declare the variables that should be passed as metadata to the Agent Platform.



1. In AI for Service, go to **Flow & Channels** > **Automation Routing** > **Routing Modes**.
2. For any welcome flow (Chat or Voice), select **More options** (three dots), then click **Automation Settings**. The Automation Node Settings are displayed.
3. Ensure that Full Autonomy, Agentic App, and the environment are selected.
4. In the Metadata configuration section, add your variables as *key-value* pairs:
    1. Click **+ Add** and then enter the details - add a logical name for the key (for example, `name`) and ‘XO variable path’ as the value (for example, `context.userInfo.name`). The changes are auto-saved.  
    <img src="../images/metadata2.png" alt="Metadata" title="Metadata" style="border: 1px solid gray; zoom:80%;"/>
  


### Step 3: Access Metadata in Agent Platform

The metadata passed from AI for Service is automatically stored in the agent’s memory under the ‘sessionMeta’ store and the ‘metadata’ object. You can access the metadata from agent prompts, supervisor prompts, and code tools.


Metadata can be accessed from agent and supervisor prompts as follows.

```
{{memory.sessionMeta.metadata.keyname}}
```


You can also use these variables in the Code Tools. See [Memory Stores in Agentic Apps](https://docs.kore.ai/agent-platform/ai-agents/agentic-apps/memory-stores/). 

Examples:



* **Agent Prompt**: 
`The customer's current order is {{memory.sessionMeta.metadata.ordernumber}}`.
* **Supervisor Prompt**: 
`Assist the agent based on customer tier: {{memory.sessionMeta.metadata.customerTier}}.
`

<img src="../images/metadata3.png" alt="Metadata" title="Metadata" style="border: 1px solid gray; zoom:80%;"/>


## Review Metadata in Traces for Debugging

During execution, these variables are injected into the memory store and are visible in the **Traces tab**, enabling easy validation and debugging.



1. Initiate a test conversation from AI for Service, adding metadata.
2. Navigate to the relevant Session/Trace in the Agent Platform.
3. Validate if the memory variables are resolved.
4. Validate that the correct values are being passed.  
<img src="../images/metadata4.png" alt="Metadata" title="Metadata" style="border: 1px solid gray; zoom:80%;"/>
