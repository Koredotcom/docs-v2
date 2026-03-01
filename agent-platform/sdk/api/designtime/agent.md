# Agent

::: agenticai_core.designtime.models.agent.Agent
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## AgentMeta

::: agenticai_core.designtime.models.agent.AgentMeta
    options:
      show_root_heading: true
      show_source: false

## AgentConfig

::: agenticai_core.designtime.models.agent.AgentConfig
    options:
      show_root_heading: true
      show_source: false

## AgentBuilder

::: agenticai_core.designtime.models.agent.AgentBuilder
    options:
      show_root_heading: true
      show_source: false
      show_if_no_docstring: true
      show_signature: true
      show_signature_annotations: true
      filters:
        - "!^_"  # Hide private methods but show public ones

## Supporting Classes

### Communication

::: agenticai_core.designtime.models.agent.Communication
    options:
      show_root_heading: true

### AgentSubType

::: agenticai_core.designtime.models.agent.AgentSubType
    options:
      show_root_heading: true

### AgentType

::: agenticai_core.designtime.models.agent.AgentType
    options:
      show_root_heading: true

### AgentRole

::: agenticai_core.designtime.models.agent.AgentRole
    options:
      show_root_heading: true

### CommunicationType

::: agenticai_core.designtime.models.agent.CommunicationType
    options:
      show_root_heading: true

### Endpoint

::: agenticai_core.designtime.models.agent.Endpoint
    options:
      show_root_heading: true

### ResponseRoutingMode

::: agenticai_core.designtime.models.agent.ResponseRoutingMode
    options:
      show_root_heading: true

## Usage Examples

### Creating a Basic Agent

```python
from agenticai_core.designtime.models.agent import Agent, AgentRole, AgentSubType, AgentType
from agenticai_core.designtime.models.llm_model import LlmModel, LlmModelConfig
from agenticai_core.designtime.models.prompt import Prompt
from agenticai_core.designtime.models.tool import Tool

agent = Agent(
    name="FinanceAssist",
    description="Banking assistant for account management",
    role=AgentRole.WORKER,
    sub_type=AgentSubType.REACT,
    type=AgentType.AUTONOMOUS,
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
    ),
    tools=[
        Tool(name="Get_Balance", type="inlineTool", ...)
    ]
)
```

### Using Builder Pattern

```python
from agenticai_core.designtime.models.agent import AgentBuilder, AgentRole, AgentSubType, AgentType

agent_dict = AgentBuilder() \
    .set_name("CustomerService") \
    .set_description("Customer service agent") \
    .set_role(AgentRole.WORKER) \
    .set_sub_type(AgentSubType.REACT) \
    .set_type(AgentType.AUTONOMOUS) \
    .set_llm_model(llm_model) \
    .set_prompt(prompt) \
    .set_tools([tool1, tool2]) \
    .build()

agent = Agent(**agent_dict)
```

### Converting to AgentMeta

```python
# Convert full Agent to lightweight AgentMeta
agent_meta = agent.to_agent_meta()

# Use in orchestrator registration
app_agents = [agent.to_agent_meta() for agent in agents]
```

## Related Models

- [LlmModel](llm_model.md) - Configure the agent's LLM
- [Prompt](prompt.md) - Define agent behavior with prompts
- [Tool](tool.md) - Add capabilities to agents
- [Icon](icon.md) - Visual identification
