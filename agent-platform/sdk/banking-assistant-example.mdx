# Banking Assistant Example

A complete example of building a banking assistant application with multiple agents, tools, and memory stores.

## Overview

This example demonstrates how to build a production-ready banking assistant with:

- Multiple specialized agents
- Custom tools for banking operations
- Memory stores for account data
- Custom orchestration logic
- Logging and tracing

## Complete Implementation

### 1. Define Custom Tools

```python
# src/tools/banking_tools.py
from agenticai_core.designtime.models.tool import Tool
from agenticai_core.runtime.sessions.request_context import RequestContext, Logger

@Tool.register(name="Get_Balance", description="Get account balance")
async def get_balance(account_id: str) -> dict:
    """Get the balance for a specific account."""
    logger = Logger('GetBalance')
    context = RequestContext()
    memory = context.get_memory()
    
    await logger.info(f"Fetching balance for account: {account_id}")
    
    # Get from memory store
    result = await memory.get_content('accountInfo', {
        'accounts': 1
    })
    
    if result.success and result.data:
        accounts = result.data.get('accounts', [])
        for account in accounts:
            if account.get('account_id') == account_id:
                await logger.info(f"Balance found: {account.get('balance')}")
                return {
                    "account_id": account_id,
                    "balance": account.get('balance'),
                    "currency": account.get('currency', 'USD')
                }
    
    await logger.warning(f"Account not found: {account_id}")
    return {"error": "Account not found"}

@Tool.register(name="Transfer_Funds", description="Transfer funds between accounts")
async def transfer_funds(from_account: str, to_account: str, amount: float) -> dict:
    """Transfer funds from one account to another."""
    logger = Logger('TransferFunds')
    
    await logger.info(f"Transfer: {amount} from {from_account} to {to_account}")
    
    try:
        # Implement transfer logic
        # For demo, just return success
        await logger.info("Transfer completed successfully")
        return {
            "success": True,
            "transaction_id": "TXN123456",
            "amount": amount,
            "from_account": from_account,
            "to_account": to_account
        }
    except Exception as e:
        await logger.error(f"Transfer failed: {str(e)}")
        raise
```

### 2. Define Memory Stores

```python
from agenticai_core.designtime.models.memory_store import (
    MemoryStore, Namespace, NamespaceType,
    RetentionPolicy, RetentionPeriod, Scope
)

account_memory = MemoryStore(
    name="Account Information",
    technical_name="accountInfo",
    type="hotpath",
    description="Stores user account balances and details",
    schema_definition={
        "type": "object",
        "properties": {
            "accounts": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "account_id": {"type": "string"},
                        "account_type": {"type": "string"},
                        "balance": {"type": "number"},
                        "currency": {"type": "string"}
                    }
                }
            },
            "last_updated": {"type": "string"}
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

### 3. Create Agents

```python
from agenticai_core.designtime.models.agent import Agent
from agenticai_core.designtime.models.llm_model import LlmModel, LlmModelConfig
from agenticai_core.designtime.models.prompt import Prompt
from agenticai_core.designtime.models.tool import Tool

finance_agent = Agent(
    name="FinanceAssist",
    description="Banking assistant for account management and transactions",
    role="WORKER",
    sub_type="REACT",
    type="AUTONOMOUS",
    llm_model=LlmModel(
        model="gpt-4o",
        provider="Open AI",
        connection_name="Default Connection",
        max_timeout="60 Secs",
        max_iterations="25",
        modelConfig=LlmModelConfig(
            temperature=0.7,
            max_tokens=1600,
            top_p=1.0
        )
    ),
    prompt=Prompt(
        system="You are a helpful assistant.",
        custom="""You are an intelligent banking assistant.
        
        ## Customer Context
        Account Information:
        {{memory.accountInfo.accounts}}
        
        ## Your Capabilities
        - Check account balances
        - Transfer funds
        - Answer banking questions
        """,
        instructions=[
            """### Security
            - Never ask for passwords or PINs
            - Always confirm transaction amounts""",
            
            """### Response Style
            - Be professional and courteous
            - Keep responses concise
            - Confirm actions before executing"""
        ]
    ),
    tools=[
        Tool(name="Get_Balance", type="MCP", description="Get account balance"),
        Tool(name="Transfer_Funds", type="MCP", description="Transfer funds")
    ]
)
```

### 4. Create Custom Orchestrator

```python
# src/orchestrator/banking_orchestrator.py
from agenticai_core.runtime.agents.abstract_orchestrator import AbstractOrchestrator
from agenticai_core.runtime.message_item import MessageItem, ToolCall, ErrorMessage
from typing import List, Optional

class BankingOrchestrator(AbstractOrchestrator):
    """Orchestrator for banking assistant application."""

    def __init__(self, agents, **kwargs):
        super().__init__(agents=agents, **kwargs)

    async def _handle_message(self, conversation: List[MessageItem]) -> MessageItem:
        """Route messages to appropriate agents."""
        last_message = conversation[-1]
        
        try:
            if last_message.role == 'user':
                # Route user queries
                content = last_message.content.lower()
                
                # Simple keyword-based routing
                if "balance" in content or "account" in content:
                    return ToolCall(
                        tool_name="FinanceAssist",
                        message=last_message.content,
                        thought="User asking about account information",
                        reason="Keywords match account services"
                    )
                elif "transfer" in content or "send" in content:
                    return ToolCall(
                        tool_name="FinanceAssist",
                        message=last_message.content,
                        thought="User wants to transfer funds",
                        reason="Keywords match transfer services"
                    )
                else:
                    # Default to main agent
                    return ToolCall(
                        tool_name="FinanceAssist",
                        message=last_message.content,
                        thought="General banking query"
                    )
            
            elif last_message.role == 'tool':
                # Agent completed - return to user
                return ToolCall(
                    tool_name="route_to_user",
                    message=last_message.content,
                    thought="Agent completed task"
                )
            
            return ErrorMessage(error=RuntimeError(f"Unsupported role: {last_message.role}"))
            
        except Exception as e:
            return ErrorMessage(error=e)
```

### 5. Build Application

```python
from agenticai_core.designtime.models.app import App, OrchestratorType

app = App(
    name="Personal Banker",
    description="Banking assistant for account management",
    orchestrationType=OrchestratorType.CUSTOM_SUPERVISOR,
    agents=[finance_agent],
    memory_stores=[account_memory],
    ai_model=LlmModel(...)  # Orchestrator model
)
```

### 6. Start Application

```python
# main.py
from agenticai_core.designtime.models.tool import ToolsRegistry
from src.orchestrator.banking_orchestrator import BankingOrchestrator

if __name__ == "__main__":
    app.start(
        orchestrator_cls=BankingOrchestrator,
        custom_tools=ToolsRegistry,
        host="0.0.0.0",
        port=8080
    )
```

## Testing the Application

### Local Testing

```bash
# Start the application
python main.py

# In another terminal, use MCP client
uv run client.py
```

### Deploy and Test

```bash
# Create package
python run.py package -o banking-app

# Set config and deploy
python run.py config -u prod
python run.py deploy -f bin/banking-app/application.kar

# Create environment
python run.py publish -a <appId> -n prod

# Test
python run.py test
```

## Complete Example Structure

```
banking-app/
├── src/
│   ├── tools/
│   │   └── banking_tools.py
│   ├── orchestrator/
│   │   └── banking_orchestrator.py
│   └── app.py
├── .env/
│   ├── dev
│   ├── staging
│   └── prod
├── requirements.txt
├── main.py
└── run.py
```

## Key Takeaways

1. **Modular Design** - Separate tools, agents, and orchestration
2. **Memory Integration** - Use memory stores for persistent data
3. **Comprehensive Logging** - Track all operations
4. **Error Handling** - Graceful failure handling
5. **Security** - Never request sensitive information
6. **Testing** - Test locally before deploying

<hr/>

**Related Resources**

- [Building Applications](../guide/building-apps.md)
- [Working with Tools](../guide/working-with-tools.md)
- [Memory Stores](../guide/memory-stores.md)
- [Custom Orchestration](../guide/orchestration.md)
