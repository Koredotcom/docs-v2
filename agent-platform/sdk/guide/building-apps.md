# Building Applications

A comprehensive guide to building multi-agent AI applications with AgenticAI Core SDK.

## Overview

Building an application with AgenticAI Core involves three main phases:

1. **Design** - Define your application structure
2. **Configure** - Set up agents, tools, and resources
3. **Deploy** - Start and run your application

## Step-by-Step Guide

### 1. Define Your Application

Start by creating an `App` instance:

```python
from agenticai_core.designtime.models import App, OrchestratorType

app = App(
    name="Customer Service Bot",
    description="Multi-agent customer service application",
    orchestrationType=OrchestratorType.CUSTOM_SUPERVISOR
)
```

### 2. Create Agents

Define the agents that will handle different aspects of your application:

```python
from agenticai_core.designtime.models import Agent
from agenticai_core.designtime.models.llm_model import LlmModel, LlmModelConfig
from agenticai_core.designtime.models.prompt import Prompt

support_agent = Agent(
    name="SupportAgent",
    description="Handles general support queries",
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
        system="You are a helpful support agent.",
        custom="Assist customers with their inquiries."
    )
)
```

### 3. Define Tools

Create tools that agents can use:

```python
from agenticai_core.designtime.models.tool import Tool

@Tool.register(
    name="search_knowledge_base",
    description="Search the knowledge base for information"
)
def search_knowledge_base(query: str) -> dict:
    # Your implementation
    results = perform_search(query)
    return {"results": results}

@Tool.register(
    name="create_ticket",
    description="Create a support ticket"
)
def create_ticket(title: str, description: str) -> dict:
    # Your implementation
    ticket_id = create_support_ticket(title, description)
    return {"ticket_id": ticket_id, "status": "created"}
```

### 4. Set Up Memory Stores

Configure persistent storage:

```python
from agenticai_core.designtime.models.memory_store import (
    MemoryStore, Namespace, NamespaceType,
    RetentionPolicy, RetentionPeriod, Scope
)

conversation_memory = MemoryStore(
    name="Conversation History",
    technical_name="conversationHistory",
    type="hotpath",
    description="Stores conversation messages",
    schema_definition={
        "type": "object",
        "properties": {
            "messages": {"type": "array"},
            "context": {"type": "object"}
        }
    },
    strict_schema=False,
    namespaces=[
        Namespace(
            name="session_id",
            type=NamespaceType.DYNAMIC,
            value="{session_id}",
            description="Session identifier"
        )
    ],
    scope=Scope.SESSION_LEVEL,
    retention_policy=RetentionPolicy(
        type=RetentionPeriod.SESSION,
        value=1
    )
)
```

### 5. Configure Advanced Features

Set up application-wide settings:

```python
from agenticai_core.designtime.models.app_configuration import (
    AppConfigurations, FillerMessages, FillerMessageMode, StaticConfig
)

config = AppConfigurations(
    streaming=True,
    attachments={
        "enabled": True,
        "maxFileCount": 5,
        "maxFileSize": 10
    },
    filler_messages=FillerMessages(
        enabled=True,
        initial_delay=1000,
        interval_duration=2000,
        max_message_count=3,
        mode=FillerMessageMode.STATIC,
        static_config=StaticConfig(
            messages=[
                {"type": "text", "value": "Processing your request..."},
                {"type": "text", "value": "Searching for information..."},
                {"type": "text", "value": "Almost there..."}
            ]
        )
    )
)
```

### 6. Assemble Your Application

Bring all components together:

```python
app = App(
    name="Customer Service Bot",
    description="Multi-agent customer service application",
    orchestrationType=OrchestratorType.CUSTOM_SUPERVISOR,
    agents=[support_agent, billing_agent, technical_agent],
    memory_stores=[conversation_memory, user_preferences],
    configurations=config
)
```

### 7. Implement Custom Orchestrator

Create orchestration logic:

```python
from agenticai_core.runtime.agents.abstract_orchestrator import AbstractOrchestrator

class CustomerServiceOrchestrator(AbstractOrchestrator):
    def __init__(self, agents):
        super().__init__(name="CustomerServiceOrchestrator", agents=agents)
    
    def route(self, request):
        """Route requests to appropriate agents."""
        user_message = request.get("message", "").lower()
        
        # Simple routing logic
        if "billing" in user_message or "payment" in user_message:
            return "BillingAgent"
        elif "technical" in user_message or "error" in user_message:
            return "TechnicalAgent"
        else:
            return "SupportAgent"
```

### 8. Start Your Application

Launch the MCP server:

```python
from agenticai_core.designtime.models.tool import ToolsRegistry

if __name__ == "__main__":
    app.start(
        orchestrator_cls=CustomerServiceOrchestrator,
        host="0.0.0.0",
        port=8080
    )
```

## Complete Example

```python
from agenticai_core.designtime.models import App, Agent, OrchestratorType
from agenticai_core.designtime.models.llm_model import LlmModel, LlmModelConfig
from agenticai_core.designtime.models.prompt import Prompt
from agenticai_core.designtime.models.tool import Tool, ToolsRegistry
from agenticai_core.runtime.agents.abstract_orchestrator import AbstractOrchestrator

# 1. Register tools
@Tool.register(name="search", description="Search knowledge base")
def search(query: str):
    return {"results": []}

# 2. Create agents
agent = Agent(
    name="Assistant",
    description="General purpose assistant",
    role="WORKER",
    sub_type="REACT",
    type="AUTONOMOUS",
    llm_model=LlmModel(
        model="gpt-4o",
        provider="Open AI",
        connection_name="Default",
        modelConfig=LlmModelConfig(temperature=0.7, max_tokens=1600)
    ),
    prompt=Prompt(
        system="You are a helpful assistant.",
        custom="Help users with their questions."
    )
)

# 3. Create app
app = App(
    name="My App",
    description="AI Assistant Application",
    orchestrationType=OrchestratorType.CUSTOM_SUPERVISOR,
    agents=[agent]
)

# 4. Create orchestrator
class MyOrchestrator(AbstractOrchestrator):
    def __init__(self, agents):
        super().__init__(name="MyOrchestrator", agents=agents)

# 5. Start
if __name__ == "__main__":
    app.start(
        orchestrator_cls=MyOrchestrator,
        port=8080
    )
```

## Best Practices

### Agent Design

- Keep agents focused on specific domains
- Provide clear, detailed descriptions
- Include comprehensive prompts with examples

### Tool Design

- Make tools atomic and single-purpose
- Provide detailed descriptions for LLM understanding
- Handle errors gracefully with meaningful messages

### Memory Management

- Use appropriate scopes for different data types
- Set sensible retention policies
- Define clear schemas for strict validation

### Orchestration

- Implement robust routing logic
- Handle edge cases gracefully
- Maintain conversation context

## Next Steps

- [Creating Agents](creating-agents.md) - Deep dive into agent configuration
- [Working with Tools](working-with-tools.md) - Advanced tool patterns
- [Memory Stores](memory-stores.md) - Memory management guide
- [Custom Orchestration](orchestration.md) - Advanced orchestration

<hr/>

**Related Resources**

- 📖 [API Reference](../api/index.md)

<!--
- 💬 [GitHub Discussions]
-->
