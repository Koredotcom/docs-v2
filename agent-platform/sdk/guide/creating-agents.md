# Creating Agents

Learn how to create and configure AI agents in the AgenticAI Core SDK.

## Overview

Agents are the core building blocks of your application. Each agent is an autonomous entity with:

- Specific role and responsibilities
- LLM configuration for decision-making
- Tools to perform actions
- Prompts that define behavior

## Agent Types

### Autonomous Agents

AI-powered agents with LLM decision-making:

```python
from agenticai_core.designtime.models.agent import Agent
from agenticai_core.designtime.models.llm_model import LlmModel, LlmModelConfig
from agenticai_core.designtime.models.prompt import Prompt

agent = Agent(
    name="FinanceAssist",
    description="Banking assistant for account management",
    role="WORKER",
    sub_type="REACT",
    type="AUTONOMOUS",
    llm_model=LlmModel(
        model="gpt-4o",
        provider="Open AI",
        connection_name="Default Connection",
        modelConfig=LlmModelConfig(
            temperature=0.7,
            max_tokens=1600
        )
    ),
    prompt=Prompt(
        system="You are a helpful banking assistant.",
        custom="Assist with account inquiries and transactions."
    )
)
```

### Proxy Agents

Delegate to external systems:

```python
agent = Agent(
    name="ExternalService",
    description="Integrates with external API",
    role="WORKER",
    sub_type="PROXY",
    type="AUTONOMOUS",
    llm_model=...,
    prompt=...
)
```

## Agent Sub-Types

### REACT (ReAct Pattern)

Reasoning + Acting pattern where the agent iteratively:


1. Reasons about the task
2. Selects an action (tool)
3. Observes the result
4. Continues until complete

```python
agent = Agent(
    name="ReactAgent",
    sub_type="REACT",
    ...
)
```


**Best for:**

- General purpose tasks
- Interactive problem-solving
- Tool-heavy workflows


## Agent Roles

### WORKER

Executes specific tasks delegated by the orchestrator:

```python
agent = Agent(
    name="BillingWorker",
    role="WORKER",
    description="Handles billing and payment tasks",
    ...
)
```

### SUPERVISOR

Coordinates other agents (typically the orchestrator):

```python
agent = Agent(
    name="Supervisor",
    role="SUPERVISOR",
    description="Routes requests to appropriate workers",
    ...
)
```

## Adding Tools to Agents

### Using Builder Pattern

```python
from agenticai_core.designtime.models.agent import AgentBuilder
from agenticai_core.designtime.models.tool import Tool

# Define tools
tool1 = Tool(name="GetBalance", type="toolLibrary", ...)
tool2 = Tool(name="Transfer", type="toolLibrary", ...)

# Build agent with tools
agent_config = AgentBuilder() \
    .set_name("BankingAgent") \
    .set_description("Banking operations agent") \
    .set_role("WORKER") \
    .set_sub_type("REACT") \
    .set_type("AUTONOMOUS") \
    .set_llm_model(llm_model) \
    .set_prompt(prompt) \
    .set_tool(tool1) \
    .set_tool(tool2) \
    .build()

agent = Agent(**agent_config)
```

### Direct Assignment

```python
agent = Agent(
    name="BankingAgent",
    tools=[tool1, tool2, tool3],
    ...
)
```

## Configuring Agent Prompts

### Basic Prompt

```python
prompt = Prompt(
    system="You are a helpful assistant.",
    custom="You help with banking operations."
)
```

### With Instructions

```python
prompt = Prompt(
    system="You are a banking assistant.",
    custom="""You help customers manage accounts and transactions.
    
    ## Your Capabilities
    - Check account balances
    - Process transactions
    - Answer policy questions
    """,
    instructions=[
        "Never ask for passwords or PINs",
        "Always confirm transaction amounts",
        "Be professional and courteous"
    ]
)
```

### With Memory Context

```python
prompt = Prompt(
    system="You are a helpful assistant.",
    custom="""You have access to customer information:
    
    <AccountInfo>
    {{memory.accountInfo.accounts}}
    </AccountInfo>
    
    Use this to provide quick responses without invoking tools.
    """
)
```

## Agent Icon Configuration

```python
from agenticai_core.designtime.models.icon import Icon

agent = Agent(
    name="FinanceAssist",
    icon=Icon(
        name="avatar3",
        color="#D9D6FE",
        type="human"
    ),
    ...
)
```

## Real-Time Configuration

Enable voice/audio capabilities:

```python
agent = Agent(
    name="VoiceAgent",
    is_real_time_enabled=True,
    ...
)
```

## Agent Metadata

Add custom metadata:

```python
agent = Agent(
    name="CustomAgent",
    metadata={
        "versionInfo": "Draft version",
        "customField": "value"
    },
    ...
)
```

## Converting to AgentMeta

For orchestrator registration:

```python
# Convert full Agent to lightweight AgentMeta
agent_meta = agent.to_agent_meta()

# Use in orchestrator
app_agents = [agent.to_agent_meta() for agent in agents]
orchestrator = CustomOrchestrator(agents=app_agents)
```

## Best Practices

1. **Naming**
    - Use descriptive names that reflect the agent's purpose
    - Keep names concise but meaningful

2. **Descriptions**
    - Provide detailed capability descriptions
    - Help the orchestrator understand when to use the agent
    - Include limitations and constraints

3. **LLM Configuration**
    - Match temperature to task type
    - Set appropriate token limits
    - Consider cost vs. quality

4. **Prompts**
    - Be specific about the agent's role
    - Include relevant context
    - Provide clear guidelines
    - Use memory template variables

5. **Tools**
    - Only include relevant tools
    - Avoid tool overload
    - Ensure tools align with agent's purpose

6. **Testing**
    - Test agents individually
    - Verify tool integration
    - Check memory access
    - Validate prompt effectiveness

<hr/>

**Related Resources**

- [Agent API Reference](../api/designtime/agent.md)
- [Working with Tools](working-with-tools.md)
- [Prompts & LLM Config](prompts-llm.md)
- [Building Applications](building-apps.md)
