# Quick Start

Build and deploy your first multi-agent AI application using the AgenticAI Workspace.

## Complete Development Workflow

This guide walks you through the full lifecycle from development to deployment within the workspace.

## Prerequisites

Complete the [Installation](installation.md) steps first:

- ✅ Cloned the workspace repository
- ✅ Ran `.setup.sh` to create `.venv` and install dependencies
- ✅ Configured platform access and API key
- ✅ Created `.env/dev` configuration file

## Workspace Overview

After installation, your workspace structure is:

```
workspace/
├── .venv/              # Virtual environment (created by setup)
├── lib/                # Pre-installed libraries
├── src/
│   ├── tools/          # Your custom tools go here
│   ├── orchestrator/   # Your orchestrators go here
│   └── app.py          # Your app definition goes here
├── .env/               # Environment configs you create
│   └── dev
├── run.py              # CLI entry point
└── .setup.sh           # Setup script
```

## Step 1: Configure Environment Variables

Create `.env/dev`:

```bash
# workspace/.env/dev
KORE_HOST=https://agent-platform.kore.ai
APP_API_KEY=your_api_key_from_platform
TRACING_ENABLED=True
```

## Step 2: Define Custom Tools

Edit or create `workspace/src/tools/banking_tools.py`:

```python
from agenticai_core.designtime.models.tool import Tool
from agenticai_core.runtime.sessions.request_context import RequestContext, Logger

@Tool.register(name="Get_Balance", description="Get account balance")
async def get_balance(account_id: str) -> dict:
    """Get account balance with logging."""
    logger = Logger('GetBalance')
    context = RequestContext()
    
    await logger.info(f"Fetching balance for account: {account_id}")
    
    # Your implementation here
    result = {"account_id": account_id, "balance": 1000, "currency": "USD"}
    
    await logger.info(f"Balance retrieved successfully")
    return result

@Tool.register(name="Transfer_Funds", description="Transfer funds between accounts")
async def transfer_funds(from_account: str, to_account: str, amount: float) -> dict:
    """Transfer funds with validation and logging."""
    logger = Logger('TransferFunds')
    
    await logger.info(f"Transfer: ${amount} from {from_account} to {to_account}")
    
    # Your implementation here
    result = {
        "success": True,
        "transaction_id": "TXN123",
        "amount": amount
    }
    
    await logger.info("Transfer completed successfully")
    return result
```

## Step 3: Create Custom Orchestrator

Edit or create `workspace/src/orchestrator/banking_orchestrator.py`:

```python
from agenticai_core.runtime.agents.abstract_orchestrator import AbstractOrchestrator
from agenticai_core.runtime.message_item import MessageItem, ToolCall, ErrorMessage
from typing import List

class BankingOrchestrator(AbstractOrchestrator):
    """Simple orchestrator for banking application."""

    def __init__(self, agents, **kwargs):
        super().__init__(name="BankingOrchestrator", agents=agents, **kwargs)

    async def _handle_message(self, conversation: List[MessageItem]) -> MessageItem:
        """Route messages to agents."""
        last_message = conversation[-1]
        
        try:
            if last_message.role == 'user':
                # Route to banking agent
                return ToolCall(
                    tool_name="BankingAgent",
                    message=last_message.content,
                    thought="Routing to banking agent"
                )
            
            elif last_message.role == 'tool':
                # Return response to user
                return ToolCall(
                    tool_name="route_to_user",
                    message=last_message.content,
                    thought="Task completed"
                )
            
            return ErrorMessage(error=RuntimeError("Invalid role"))
        except Exception as e:
            return ErrorMessage(error=e)
```

## Step 4: Define Application

Edit or create `workspace/src/app.py`:

```python
from agenticai_core.designtime.models.app import App, OrchestratorType
from agenticai_core.designtime.models.agent import Agent
from agenticai_core.designtime.models.llm_model import LlmModel, LlmModelConfig
from agenticai_core.designtime.models.prompt import Prompt
from agenticai_core.designtime.models.tool import Tool

def create_app():
    """Create and configure the banking application."""
    
    # Configure LLM
    llm_model = LlmModel(
        model="gpt-4o-mini",
        provider="Open AI",
        connection_name="Default Connection",
        max_timeout="60 Secs",
        max_iterations="25",
        modelConfig=LlmModelConfig(
            temperature=0.7,
            max_tokens=1600
        )
    )
    
    # Define agent
    banking_agent = Agent(
        name="BankingAgent",
        description="Handles account inquiries and transactions",
        role="WORKER",
        sub_type="REACT",
        type="AUTONOMOUS",
        llm_model=llm_model,
        prompt=Prompt(
            system="You are a helpful banking assistant.",
            custom="Help users check balances and transfer funds."
        ),
        tools=[
            Tool(name="Get_Balance", type="MCP", description="Get account balance"),
            Tool(name="Transfer_Funds", type="MCP", description="Transfer funds")
        ]
    )
    
    # Create application
    app = App(
        name="Banking Assistant",
        description="Personal banking assistant application",
        orchestrationType=OrchestratorType.CUSTOM_SUPERVISOR,
        agents=[banking_agent]
    )
    
    return app
```

## Step 5: Update App Entry Point

The workspace already includes `run.py` which provides the CLI. You just need to ensure your `src/app.py` has a `create_app()` function and `start()` function:

```python
# workspace/src/app.py
from agenticai_core.designtime.models.tool import ToolsRegistry
from src.orchestrator.banking_orchestrator import BankingOrchestrator

def start(host='0.0.0.0', port=8080, app=None):
    """Start the application server."""
    if not app:
        app = create_app()
    
    app.start(
        orchestrator_cls=BankingOrchestrator,
        host=host,
        port=port
    )
```

!!! info "run.py CLI"
    The workspace `run.py` is a thin wrapper that calls the centralized CLI from `agenticai_core.cli.runner`. It automatically imports from `src.app` module.

## Step 6: Local Testing

### Start the Application

```bash
# Make sure you're in the workspace directory and .venv is activated
cd workspace
source .venv/bin/activate

# Start the application using CLI
python run.py start -H localhost -P 8080
```

### Test with MCP Client

In a separate terminal:

```bash
# Install and run MCP client
uv run client.py
```

The MCP client allows you to:

- Discover available tools
- Execute tool calls
- Test agent responses
- Debug orchestrator routing

## Step 7: Package for Deployment

Create a deployable package:

```bash
# Create KAR package
python run.py package -o banking-app
```

This creates:

- `bin/banking-app/application.kar` - Deployable archive (<1MB)
- `bin/banking-app/application.config.json` - Configuration file

Verify package size:

```bash
ls -lh bin/banking-app/application.kar
# Should be under 1MB
```

## Step 8: Deploy to Platform

### Deploy Application

```bash
# Set environment config
python run.py config -u dev

# Deploy the application
python run.py deploy -f bin/banking-app/application.kar
```

This will:

- Upload the KAR archive to the platform
- Return `appId` and `streamId` - **save these for testing**

### Create Environment

```bash
# Create app environment
python run.py publish -a <appId> -n development -d "Development environment"
```

## Step 9: Test Deployment

### End-to-End Testing

```bash
# Test the deployed application
python run.py test
```

### Check Status

```bash
# Monitor environment status
python run.py status -a <appId> -n development
```

## Complete Workspace Structure

Here's what you've created in the workspace:

```
workspace/
├── .venv/                            # Virtual environment (from setup)
├── lib/                              # Pre-installed wheels (from workspace)
│   ├── agenticai_core-0.1.0-py3-none-any.whl
│   └── kore_api-1.0.0-py3-none-any.whl
├── .env/
│   └── dev                           # Your environment config
├── src/
│   ├── tools/
│   │   └── banking_tools.py          # Your custom tools
│   ├── orchestrator/
│   │   └── banking_orchestrator.py   # Your orchestrator
│   └── app.py                        # Your app definition
├── bin/                              # Generated by package command
│   └── banking-app/
│       ├── application.kar
│       └── application.config.json
├── requirements.txt                  # Workspace dependencies
├── run.py                            # CLI wrapper (from workspace)
└── .setup.sh                         # Setup script (from workspace)
```

## Development Workflow Summary

```mermaid
graph LR
    A[1. Clone<br/>Workspace] --> B[2. Run<br/>Setup]
    B --> C[3. Develop<br/>Tools]
    C --> D[4. Test<br/>Locally]
    D --> E[5. Package]
    E --> F[6. Deploy]
    F --> G[7. Test E2E]
    G --> H[8. Monitor]
```

### 1. Clone Workspace

- Clone workspace repository
- Navigate to workspace directory

### 2. Run Setup

- Execute `.setup.sh`
- Creates `.venv` and installs dependencies
- Configure `.env/dev` file

### 3. Develop

- Write custom tools in `src/tools/`
- Create orchestrator in `src/orchestrator/`
- Define application in `src/app.py`

### 4. Test Locally

- `python run.py start`
- Test with MCP client (`uv run client.py`)
- Debug and iterate

### 5. Package

- `python run.py package -o myApp`
- Verify size (<1MB) and contents

### 6. Deploy

- `python run.py config -u dev`
- `python run.py deploy -f bin/myApp/application.kar`
- Create environment: `python run.py publish -a <appId> -n dev`

### 7. Test End-to-End

- `python run.py test`
- Verify deployed functionality

### 8. Monitor

- Check status: `python run.py status -a <appId> -n dev`
- Review logs and traces
- Monitor performance

## CLI Commands Reference

For detailed CLI command documentation, see [CLI Reference](../cli/index.md).

Quick commands for workspace development:

```bash
# Activate virtual environment first
source .venv/bin/activate

# Local development
python run.py start -H localhost -P 8080

# Create package
python run.py package -o myProject

# Set config and deploy
python run.py config -u dev
python run.py deploy -f bin/myProject/application.kar

# Create and test environment
python run.py publish -a <appId> -n dev
python run.py test
```

## Tips for Success

!!! tip "Virtual Environment"
    Always use `.venv` as your virtual environment directory name to avoid bloated packages.

!!! tip "Save IDs"
    Save the `appId` and `streamId` from the deploy command output - you'll need them for testing.

!!! tip "Test Locally First"
    Always test with MCP client locally before deploying to catch issues early.

!!! tip "Package Size"
    Target package size: <1MB (ideally a few hundred KB). If larger, check contents with `unzip -l bin/myProject/application.kar`

!!! tip "Environment Configs"
    Use separate .env files for dev/staging/prod to manage different platform endpoints and credentials.

## Troubleshooting

### Package Too Large

```bash
# Check if virtual env is included
unzip -l bin/myProject/application.kar | grep -E "(venv|env/|.venv)"

# Solution: Rename virtual env to .venv
```

### Deployment Fails

```bash
# Verify environment variables
python -c "import os; print(os.getenv('KORE_HOST'), os.getenv('APP_API_KEY'))"

# Set config and deploy
python run.py config -u dev
python run.py deploy -f bin/myProject/application.kar
```

### Tool Not Found

```bash
# Ensure tools are imported in src/app.py:
from src.tools import banking_tools  # This registers the tools via @Tool.register

# Or ensure tool files are in src/tools/ and properly structured
```

## Next Steps

- [:octicons-arrow-right-24: Core Concepts](concepts.md) - Understand the framework
- [:octicons-arrow-right-24: Building Apps](../guide/building-apps.md) - Detailed guide
- [:octicons-arrow-right-24: Working with Tools](../guide/working-with-tools.md) - Advanced tool patterns
- [:octicons-arrow-right-24: Custom Orchestration](../guide/orchestration.md) - Orchestration guide
- [:octicons-arrow-right-24: API Reference](../api/index.md) - Full API documentation
