# Custom Orchestration

Learn how to implement custom orchestration logic for multi-agent coordination in the AgenticAI Core SDK.

## Overview

The orchestrator acts as the traffic director between the platform and your agents. It determines which agent handles each conversation turn and manages the flow of information.

## Message Handling Protocol

### Incoming Messages

The orchestrator receives:

- **User Query** (`MessageItem` with `role='user'`) - When a user sends a message
- **Agent Response** (`MessageItem` with `role='tool'`) - When an agent completes its task

### Outgoing Messages

The orchestrator must return:

- **ToolCall** - Specifies the next agent to invoke
  - `tool_name`: Which agent to invoke (or "route_to_user")
  - `message`: **The actual content sent to the agent/user** ⭐
  - `input`, `thought`, `reason`: Additional context
- **ErrorMessage** - When routing fails

### Special Agent: route_to_user

- Built-in agent that acts as the user proxy
- Use to present final answers or seek clarification
- When routing to `route_to_user`, the `message` field is what the user sees

## Creating a Custom Orchestrator

### Basic Structure

```python
from agenticai_core.designtime.models.agent import AgentMeta
from agenticai_core.runtime.agents.abstract_orchestrator import AbstractOrchestrator
from agenticai_core.runtime.message_item import MessageItem, ToolCall, ErrorMessage
from typing import List, Optional

class CustomOrchestrator(AbstractOrchestrator):
    """Custom orchestrator with keyword-based routing."""

    def __init__(
        self,
        agents: List[AgentMeta],
        name: str = "custom",
        description: str = "Custom keyword-based orchestrator"
    ):
        super().__init__(name=name, agents=agents, description=description)

    async def _handle_message(self, conversation: List[MessageItem]) -> MessageItem:
        """
        Override this method to implement your orchestration logic.
        
        Protocol:
        - Incoming: MessageItem with role='user' or role='tool'
        - Outgoing: ToolCall (next agent) or ErrorMessage (failure)
        """
        last_message = conversation[-1]
        
        try:
            # Handle user query
            if last_message.role == 'user':
                selected_agent = self._select_agent(last_message)
                
                if selected_agent:
                    return ToolCall(
                        tool_name=selected_agent.name,
                        message=last_message.content,
                        thought=f"Routing to {selected_agent.name}",
                        reason="Query matches agent capabilities"
                    )
                else:
                    return ToolCall(
                        tool_name="route_to_user",
                        message="I'm not sure how to help. Could you rephrase?",
                        thought="No suitable agent found"
                    )
            
            # Handle agent response
            elif last_message.role == 'tool':
                if self._is_complete(last_message):
                    return ToolCall(
                        tool_name="route_to_user",
                        message=f"Here are the results: {last_message.content}",
                        thought="Task completed successfully"
                    )
                else:
                    # Route to another agent for follow-up
                    next_agent = self._get_next_agent(last_message)
                    return ToolCall(
                        tool_name=next_agent.name,
                        message=f"Continue with: {last_message.content}"
                    )
            
            return ErrorMessage(error=RuntimeError(f"Unsupported role: {last_message.role}"))
            
        except Exception as e:
            return ErrorMessage(error=e)
    
    def _select_agent(self, message: MessageItem) -> Optional[AgentMeta]:
        """Select agent based on message content."""
        # Your selection logic here
        return self._agents[0] if self._agents else None
    
    def _is_complete(self, message: MessageItem) -> bool:
        """Check if task is complete."""
        content = message.content.lower()
        return any(indicator in content for indicator in [
            "completed", "finished", "done"
        ])
```

## Routing Strategies

### 1. Keyword-Based Routing

```python
class KeywordOrchestrator(AbstractOrchestrator):
    def __init__(self, agents, **kwargs):
        super().__init__(agents=agents, **kwargs)
        self.keywords = {
            "calculator": ["calculate", "math", "add", "multiply"],
            "weather": ["weather", "temperature", "forecast"],
            "translator": ["translate", "language"]
        }
    
    def _select_agent(self, message: MessageItem) -> Optional[AgentMeta]:
        content = message.content.lower()
        
        for agent_type, keywords in self.keywords.items():
            if any(kw in content for kw in keywords):
                for agent in self._agents:
                    if agent_type in agent.name.lower():
                        return agent
        
        return self._agents[0] if self._agents else None
```

### 2. Round-Robin Routing

```python
class RoundRobinOrchestrator(AbstractOrchestrator):
    def __init__(self, agents, **kwargs):
        super().__init__(agents=agents, **kwargs)
        self.current_index = 0
    
    def _select_agent(self, message: MessageItem) -> Optional[AgentMeta]:
        if not self._agents:
            return None
        
        agent = self._agents[self.current_index]
        self.current_index = (self.current_index + 1) % len(self._agents)
        return agent
```

### 3. Task-Based Routing

```python
class TaskOrchestrator(AbstractOrchestrator):
    def __init__(self, agents, **kwargs):
        super().__init__(agents=agents, **kwargs)
        self.task_map = {
            "data_analysis": "AnalystAgent",
            "customer_support": "SupportAgent",
            "billing": "BillingAgent"
        }
    
    def _select_agent(self, message: MessageItem) -> Optional[AgentMeta]:
        # Analyze message to determine task type
        task_type = self._identify_task(message)
        agent_name = self.task_map.get(task_type)
        
        if agent_name:
            for agent in self._agents:
                if agent.name == agent_name:
                    return agent
        
        return None
```

## Using Memory in Orchestrators

Track orchestration state:

```python
from agenticai_core.runtime.sessions.request_context import RequestContext

class StatefulOrchestrator(AbstractOrchestrator):
    async def _handle_message(self, conversation: List[MessageItem]) -> MessageItem:
        context = RequestContext()
        memory = context.get_memory()
        
        # Get orchestration state
        state = await memory.get_content('orchestrator_state', {
            'last_agent': 1,
            'task_count': 1
        })
        
        # Your routing logic
        selected_agent = self._select_agent(conversation[-1])
        
        # Update state
        if state.success and state.data:
            await memory.set_content('orchestrator_state', {
                'last_agent': selected_agent.name,
                'task_count': state.data.get('task_count', 0) + 1
            })
        
        return ToolCall(
            tool_name=selected_agent.name,
            message=conversation[-1].content
        )
```

## Adding Tracing

Monitor orchestration flow:

```python
from agenticai_core.runtime.trace._langfuse_tracer import Tracer

tracer = Tracer()

class TracedOrchestrator(AbstractOrchestrator):
    @tracer.observe(span_name="Orchestrator._handle_message", kind="Orchestrator")
    async def _handle_message(self, conversation: List[MessageItem]) -> MessageItem:
        """Handle message with distributed tracing."""
        last_message = conversation[-1]
        
        if last_message.role == 'user':
            selected_agent = self._select_agent(last_message)
            
            return ToolCall(
                tool_name=selected_agent.name,
                message=last_message.content,
                thought=f"Routing to {selected_agent.name}"
            )
        
        # Handle other cases...
    
    @tracer.observe(metadata={"operation": "agent_selection"})
    def _select_agent(self, message: MessageItem):
        """Agent selection with tracing."""
        # Selection logic
        return self._agents[0]
```

## Common Orchestration Flows

### 1. User → Agent → User

```python
# User query → select agent → agent processes → return to user
role='user' → route to agent → role='tool' → route_to_user
```

### 2. User → Agent → Agent → User

```python
# Chain multiple agents before returning
role='user' → Agent1 → Agent2 → route_to_user
```

### 3. User → User

```python
# Direct clarification request
role='user' → route_to_user (no suitable agent)
```

## Using Custom Orchestrator

Register with your application:

```python
from src.orchestrator.custom_orchestrator import CustomOrchestrator
from src.tools import Tools

app.start(
    orchestrator_cls=CustomOrchestrator,
    host="0.0.0.0",
    port=8080
)
```

## Best Practices

1. **Message Field**
    - `message` is the most important field - it contains what gets sent
    - For agents: include the task/question to process
    - For route_to_user: include the response to show the user

2. **Error Handling**
    - Handle both success and error cases
    - Return ErrorMessage for routing failures
    - Implement fallback routing (route_to_user)

3. **Logging**
    - Use `thought` and `reason` for debugging
    - Log routing decisions
    - Track agent performance

4. **State Management**
    - Use memory stores for orchestrator state
    - Track conversation context
    - Maintain agent selection history

5. **Performance**
    - Keep routing logic lightweight
    - Avoid blocking operations
    - Monitor routing latency
    - Use tracing for optimization

<hr/>

**Related Resources**

<!--
- [Custom Orchestrators in workspace](https://github.com/agenticai/workspace)
-->

- [Building Applications](building-apps.md)
- [Memory Stores Guide](memory-stores.md)
