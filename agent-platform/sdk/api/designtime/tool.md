# Tool

::: agenticai_core.designtime.models.tool.Tool
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## ToolMeta

::: agenticai_core.designtime.models.tool.ToolMeta
    options:
      show_root_heading: true
      show_source: false

## ToolBuilder

::: agenticai_core.designtime.models.tool.ToolBuilder
    options:
      show_root_heading: true
      show_source: false
      show_if_no_docstring: true
      show_signature: true
      show_signature_annotations: true
      filters:
        - "!^_"  # Hide private methods but show public ones

## ToolsRegistry

::: agenticai_core.designtime.models.tool.ToolsRegistry
    options:
      show_root_heading: false

Global registry for custom tools registered using the `@Tool.register` decorator.

## Usage Examples

### Registering Custom Tools

```python
from agenticai_core.designtime.models.tool import Tool, ToolsRegistry

@Tool.register(name="get_weather", description="Get current weather")
def get_weather(location: str):
    # Implementation here
    return {"temp": 72, "condition": "sunny"}

@Tool.register(name="calculate", description="Perform calculations")
def calculator(expression: str):
    return eval(expression)

# Tools are now in ToolsRegistry and automatically available
app.start(orchestrator_cls=MyOrchestrator)
```

### Creating Inline Tools

```python
tool = Tool(
    name="Get_AccountInfo",
    description="Gets the account information for the user",
    type="inlineTool",
    code_type="javascript",
    func="""
    const account = await fetchAccount(userId);
    return account;
    """,
    return_direct=False
)
```

### Creating Tool Library Tools

```python
tool = Tool(
    name="Transfer_Funds",
    description="Transfers funds between accounts",
    type="toolLibrary",
    properties=[
        {
            "property": "from_account",
            "type": "string",
            "required": True,
            "description": "Source account ID"
        },
        {
            "property": "to_account",
            "type": "string",
            "required": True,
            "description": "Destination account ID"
        },
        {
            "property": "amount",
            "type": "number",
            "required": True,
            "description": "Amount to transfer"
        }
    ]
)
```

### Using Builder Pattern

```python
from agenticai_core.designtime.models.tool import ToolBuilder

tool_dict = ToolBuilder() \
    .set_name("Get_AccountInfo") \
    .set_description("Gets account information") \
    .set_type("inlineTool") \
    .set_code_type("javascript") \
    .set_func("return await getAccount();") \
    .set_return_direct(False) \
    .build()

tool = Tool(**tool_dict)
```

### Converting Tool to ToolMeta

```python
# Convert full Tool to lightweight ToolMeta for serialization
tool_meta = ToolMeta.from_tool(tool)

# ToolMeta contains only name, type, description, and id
print(tool_meta.name)  # "Get_AccountInfo"
print(tool_meta.type)  # "inlineTool"
```

## Tool Types

### inlineTool

Custom code that executes within the agent runtime. Supports JavaScript and Python.

### toolLibrary

Pre-built tools from the platform's tool library (e.g., API connectors, database queries).

### KNOWLEDGE

Knowledge base or RAG (Retrieval-Augmented Generation) tools for semantic search.

### MCP

Model Context Protocol tools registered using the `@Tool.register` decorator.

### customTool

User-defined tools with custom logic.

## Related Models

- [Agent](agent.md) - Agents use tools to perform actions
- [App](app.md) - Tools are registered at the application level

