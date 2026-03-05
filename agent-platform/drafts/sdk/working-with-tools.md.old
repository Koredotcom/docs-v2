# Working with Tools

Learn how to create and use tools in the AgenticAI Core SDK.

## Overview

Tools are functions that agents can invoke to perform specific operations. The SDK supports multiple types of tools with different implementation approaches.

## Tool Types

### 1. Custom Tools (MCP)

Create Python functions using the `@Tool.register` decorator:

```python
from agenticai_core.designtime.models.tool import Tool
from agenticai_core.runtime.sessions.request_context import RequestContext, Logger

@Tool.register(name="AddNumbers", description="Add two numbers together")
async def add(x: int, y: int) -> int:
    """Add two numbers and return the result."""
    logger = Logger('AddTool')
    request = RequestContext()
    
    await logger.info(f"Add operation: {x} + {y}")
    result = x + y
    await logger.info(f"Result: {result}")
    
    return result
```

**Key Features:**

- Automatic registration to `ToolsRegistry`
- Access to request context
- Logging and tracing support
- Type-safe parameters

### 2. Inline Tools

Define tools directly in configuration with JavaScript code:

```python
from agenticai_core.designtime.models.tool import Tool, ToolBuilder

tool_config = ToolBuilder() \
    .set_name("InlineTool") \
    .set_code_type("javascript") \
    .set_type("inline") \
    .set_description("Inline JavaScript tool") \
    .set_func("return 'Hello World'") \
    .build()

tool = Tool(**tool_config)
```

### 3. Tool Library

Reference pre-built platform tools:

```python
tool = Tool(
    name="Transfer_Funds",
    description="Transfer funds between accounts",
    type="toolLibrary"
)
```

### 4. Knowledge Tools

Access knowledge bases and RAG systems:

```python
tool = Tool(
    name="Banking_Knowledge",
    description="Search banking policies and procedures",
    type="KNOWLEDGE"
)
```

## Using Request Context

Access request information in your tools:

```python
from agenticai_core.runtime.sessions.request_context import RequestContext

@Tool.register()
async def my_tool(param: str):
    context = RequestContext()
    
    # Get request metadata
    request_id = context.request_id
    headers = context.headers
    
    # Available headers:
    app_id = headers.get('appId')
    user_id = headers.get('userId')
    session_id = headers.get('sessionId')
    env_id = headers.get('envId')
    trace_id = headers.get('trace_id')
    
    # Access memory
    memory = context.get_memory()
    
    return result
```

## Memory Operations in Tools

Store and retrieve data:

```python
@Tool.register(description="Save user preferences")
async def save_preferences(theme: str, language: str):
    context = RequestContext()
    memory = context.get_memory()
    
    # Save data
    result = await memory.set_content('user_prefs', {
        'theme': theme,
        'language': language
    })
    
    if result.success:
        return "Preferences saved"
    else:
        return "Failed to save preferences"

@Tool.register(description="Get user greeting")
async def get_greeting():
    context = RequestContext()
    memory = context.get_memory()
    
    # Read with projection
    result = await memory.get_content('user_prefs', {
        'theme': 1,
        'language': 1
    })
    
    if result.success and result.data:
        theme = result.data.get('theme', 'light')
        language = result.data.get('language', 'en')
        return f"Hello! Theme: {theme}, Language: {language}"
    
    return "Hello! Please set your preferences first."
```

## Logging in Tools

Add structured logging:

```python
from agenticai_core.runtime.sessions.request_context import Logger

@Tool.register()
async def example_tool(param: str):
    logger = Logger('ExampleTool')
    
    await logger.info(f"Tool called with: {param}")
    await logger.debug("Processing...")
    
    try:
        result = process(param)
        await logger.info("Completed successfully")
        return result
    except Exception as e:
        await logger.error(f"Failed: {str(e)}")
        raise
```

**Log Levels:**

- `DEBUG`: Detailed diagnostic information
- `INFO`: General information about execution
- `WARNING`: Potentially problematic situations
- `ERROR`: Serious problems

## Distributed Tracing

Monitor tool execution:

```python
from agenticai_core.runtime.trace._langfuse_tracer import Tracer

tracer = Tracer()

@Tool.register(description="Calculator tool")
@tracer.observe(span_name="Tool:calculator", kind="Tool")
async def calculator(operation: str, x: str, y: str):
    """Perform calculations with tracing."""
    logger = Logger('Calculator')
    
    await logger.info(f"Operation: {operation}")
    
    num_x = float(x)
    num_y = float(y)
    
    if operation == "add":
        result = num_x + num_y
    elif operation == "multiply":
        result = num_x * num_y
    else:
        raise ValueError(f"Unsupported: {operation}")
    
    return str(result)
```

## Using Tools with Agents

Add tools to agents during configuration:

```python
from agenticai_core.designtime.models.agent import AgentBuilder
from agenticai_core.designtime.models.tool import Tool, ToolsRegistry

# Define custom tools
@Tool.register(name="GetBalance")
async def get_balance(account_id: str):
    return {"balance": 1000}

# Create inline tool
inline_tool = Tool(name="ProcessData", type="inline", ...)

# Add to agent
agent_config = AgentBuilder() \
    .set_name("BankingAgent") \
    .set_tools([inline_tool]) \
    .build()

# Tools are automatically registered via @Tool.register decorator

app.start(
    orchestrator_cls=CustomOrchestrator,

    port=8080
)
```

## Best Practices

1. **Tool Design**
    - Keep tools focused and single-purpose
    - Provide clear, detailed descriptions
    - Use meaningful parameter names
    - Include proper error handling

2. **Logging**
    - Log tool entry and exit
    - Include parameter values
    - Log errors with context
    - Use appropriate log levels

3. **Memory Operations**
    - Always check `result.success`
    - Provide fallback values
    - Use projections for efficiency
    - Handle missing data gracefully

4. **Error Handling**
    - Catch and log exceptions
    - Provide meaningful error messages
    - Return appropriate error responses
    - Don't expose sensitive information

5. **Performance**
    - Keep tools lightweight
    - Avoid blocking operations
    - Use async/await properly
    - Monitor execution times

<hr/>

**Related Resources**

- [Tool API Reference](../api/designtime/tool.md)
- [Memory Stores Guide](memory-stores.md)
- [Building Applications](building-apps.md)
