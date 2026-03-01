# Multi-Agent Workflow Example

An example of coordinating multiple agents to handle complex workflows.

## Overview

This example demonstrates a customer service application with multiple specialized agents:

- **SupportAgent** - Handles general inquiries
- **BillingAgent** - Manages payments and billing
- **TechnicalAgent** - Resolves technical issues

## Application Architecture

```mermaid
graph TB
    User[User] --> Orchestrator[Customer Service Orchestrator]
    Orchestrator --> Support[Support Agent]
    Orchestrator --> Billing[Billing Agent]
    Orchestrator --> Technical[Technical Agent]
    Support --> Tools1[Knowledge Base<br/>Ticket Creation]
    Billing --> Tools2[Payment Processing<br/>Invoice Generation]
    Technical --> Tools3[System Diagnostics<br/>Issue Resolution]
```

## Implementation

### 1. Define Specialized Agents

```python
from agenticai_core.designtime.models.agent import Agent
from agenticai_core.designtime.models.llm_model import LlmModel, LlmModelConfig
from agenticai_core.designtime.models.prompt import Prompt

# Support Agent
support_agent = Agent(
    name="SupportAgent",
    description="Handles general customer support inquiries",
    role="WORKER",
    sub_type="REACT",
    type="AUTONOMOUS",
    llm_model=LlmModel(
        model="gpt-4o",
        provider="Open AI",
        modelConfig=LlmModelConfig(temperature=0.7, max_tokens=1600)
    ),
    prompt=Prompt(
        system="You are a helpful customer support agent.",
        custom="Assist with general inquiries and create tickets when needed."
    ),
    tools=[
        Tool(name="search_knowledge", type="KNOWLEDGE"),
        Tool(name="create_ticket", type="MCP")
    ]
)

# Billing Agent
billing_agent = Agent(
    name="BillingAgent",
    description="Manages billing, payments, and invoices",
    role="WORKER",
    sub_type="REACT",
    type="AUTONOMOUS",
    llm_model=LlmModel(
        model="gpt-4o",
        provider="Open AI",
        modelConfig=LlmModelConfig(temperature=0.3, max_tokens=1200)
    ),
    prompt=Prompt(
        system="You are a billing specialist.",
        custom="Handle payments, invoices, and billing inquiries.",
        instructions=["Always confirm payment amounts", "Verify account details"]
    ),
    tools=[
        Tool(name="process_payment", type="MCP"),
        Tool(name="generate_invoice", type="MCP")
    ]
)

# Technical Agent
technical_agent = Agent(
    name="TechnicalAgent",
    description="Resolves technical issues and system problems",
    role="WORKER",
    sub_type="REACT",
    type="AUTONOMOUS",
    llm_model=LlmModel(
        model="gpt-4o",
        provider="Open AI",
        modelConfig=LlmModelConfig(temperature=0.5, max_tokens=2000)
    ),
    prompt=Prompt(
        system="You are a technical support specialist.",
        custom="Diagnose and resolve technical issues.",
        instructions=["Gather diagnostic information", "Provide step-by-step solutions"]
    ),
    tools=[
        Tool(name="run_diagnostics", type="MCP"),
        Tool(name="reset_system", type="MCP")
    ]
)
```

### 2. Create Multi-Agent Orchestrator

```python
from agenticai_core.runtime.agents.abstract_orchestrator import AbstractOrchestrator
from agenticai_core.runtime.message_item import MessageItem, ToolCall, ErrorMessage
from typing import List, Optional

class CustomerServiceOrchestrator(AbstractOrchestrator):
    """Orchestrates multiple customer service agents."""

    def __init__(self, agents, **kwargs):
        super().__init__(agents=agents, **kwargs)
        
        # Define routing keywords
        self.routing_map = {
            "billing": ["billing", "payment", "invoice", "charge", "refund"],
            "technical": ["technical", "error", "not working", "broken", "fix"],
            "support": ["help", "question", "how to", "information"]
        }

    async def _handle_message(self, conversation: List[MessageItem]) -> MessageItem:
        """Route messages to appropriate specialized agents."""
        last_message = conversation[-1]
        
        try:
            if last_message.role == 'user':
                # Analyze user query
                agent = self._route_by_intent(last_message)
                
                if agent:
                    return ToolCall(
                        tool_name=agent.name,
                        message=last_message.content,
                        thought=f"Routing to {agent.name}",
                        reason=f"Query matches {agent.name} expertise"
                    )
                else:
                    return ToolCall(
                        tool_name="route_to_user",
                        message="I can help with billing, technical issues, or general support. What do you need assistance with?",
                        thought="Unclear intent, requesting clarification"
                    )
            
            elif last_message.role == 'tool':
                # Check if agent needs follow-up
                if self._needs_escalation(last_message):
                    # Escalate to another agent
                    next_agent = self._select_escalation_agent(last_message)
                    return ToolCall(
                        tool_name=next_agent.name,
                        message=f"Escalated from previous agent: {last_message.content}",
                        thought="Escalating to specialized agent"
                    )
                else:
                    # Return results to user
                    return ToolCall(
                        tool_name="route_to_user",
                        message=last_message.content,
                        thought="Task completed successfully"
                    )
            
            return ErrorMessage(error=RuntimeError(f"Unsupported role: {last_message.role}"))
            
        except Exception as e:
            return ErrorMessage(error=e)
    
    def _route_by_intent(self, message: MessageItem) -> Optional[object]:
        """Route based on detected intent."""
        content = message.content.lower()
        
        # Check keywords for each category
        for category, keywords in self.routing_map.items():
            if any(kw in content for kw in keywords):
                # Find corresponding agent
                for agent in self._agents:
                    if category in agent.name.lower():
                        return agent
        
        # Default to support agent
        for agent in self._agents:
            if "support" in agent.name.lower():
                return agent
        
        return self._agents[0] if self._agents else None
    
    def _needs_escalation(self, message: MessageItem) -> bool:
        """Check if response needs escalation."""
        content = message.content.lower()
        return any(indicator in content for indicator in [
            "escalate", "complex", "unable to", "need specialist"
        ])
    
    def _select_escalation_agent(self, message: MessageItem):
        """Select agent for escalation."""
        # Logic to select appropriate escalation agent
        for agent in self._agents:
            if "technical" in agent.name.lower():
                return agent
        return self._agents[0]
```

### 3. Build Application

```python
from agenticai_core.designtime.models.app import App, OrchestratorType

app = App(
    name="Customer Service Bot",
    description="Multi-agent customer service application",
    orchestrationType=OrchestratorType.CUSTOM_SUPERVISOR,
    agents=[support_agent, billing_agent, technical_agent],
    memory_stores=[account_memory],
    ai_model=LlmModel(
        model="gpt-4o",
        provider="Open AI",
        modelConfig=LlmModelConfig(temperature=0.5)
    ),
    prompt=Prompt(
        system="You are a customer service supervisor.",
        custom="Route requests to specialized agents."
    )
)
```

### 4. Start Application

```python
# main.py
from agenticai_core.designtime.models.tool import ToolsRegistry
from src.orchestrator.customer_service_orchestrator import CustomerServiceOrchestrator

if __name__ == "__main__":
    app.start(
        orchestrator_cls=CustomerServiceOrchestrator,
        custom_tools=ToolsRegistry,
        host="0.0.0.0",
        port=8080
    )
```

## Workflow Examples

### Example 1: Billing Query

```
User: "I need to pay my invoice"
  ↓
Orchestrator: Routes to BillingAgent (keywords: "pay", "invoice")
  ↓
BillingAgent: Processes payment request
  ↓
Orchestrator: Returns result to user
```

### Example 2: Technical Issue with Escalation

```
User: "The app is not working"
  ↓
Orchestrator: Routes to SupportAgent (general inquiry)
  ↓
SupportAgent: Determines it's complex, requests escalation
  ↓
Orchestrator: Routes to TechnicalAgent
  ↓
TechnicalAgent: Runs diagnostics and provides solution
  ↓
Orchestrator: Returns result to user
```

### Example 3: Multi-Intent Query

```
User: "What's my balance and pay this invoice"
  ↓
Orchestrator: Identifies two intents
  ↓
First: Routes to FinanceAssist for balance
  ↓
Then: Routes to BillingAgent for payment
  ↓
Orchestrator: Combines results and returns to user
```

## Testing

```bash
# Start locally
python run.py start

# Test with MCP client
uv run client.py

# Deploy and test
python run.py package -o customer-service
python run.py config -u prod
python run.py deploy -f bin/customer-service/application.kar
python run.py publish -a <appId> -n prod
python run.py test
```

## Best Practices

1. **Agent Specialization** - Keep each agent focused on specific tasks
2. **Clear Routing** - Implement clear routing logic with fallbacks
3. **Escalation Paths** - Define when and how to escalate
4. **Memory Usage** - Share data via memory stores
5. **Error Handling** - Handle failures gracefully at each level

<hr/>

**Related Resources**

- [Custom Orchestration](../guide/orchestration.md)
- [Creating Agents](../guide/creating-agents.md)
- [Building Applications](../guide/building-apps.md)
