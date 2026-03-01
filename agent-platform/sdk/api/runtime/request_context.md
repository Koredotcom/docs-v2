# RequestContext

Runtime context management for tools and orchestrators within the AgenticAI platform.

!!! important "CRITICAL: Initialize Inside Tools & Orchestrators Only"
    **`RequestContext` MUST be initialized inside your tool/orchestrator methods, never at module level!**

!!! success " CORRECT Usage"
    Initialize `RequestContext` inside your tool or orchestrator function:
    
    ```python
    @Tool.register(name="my_tool", description="...")
    async def my_tool():
        ctx = RequestContext()  # ✅ Inside the tool function
        # Access context safely here
        user_id = ctx.context.get('userId')
        return {"success": True}
    
    # Works in orchestrators too
    class MyOrchestrator(AbstractOrchestrator):
        async def _handle_message(self, conversation):
            ctx = RequestContext()  # ✅ Inside the method
            # Use context here
    ```

!!! failure "WRONG Usage - This WILL FAIL"
    Never initialize `RequestContext` at module level:
    
    ```python
    # ❌ WRONG - No request context available yet
    ctx = RequestContext()  # This will crash!
    
    @Tool.register(name="my_tool", description="...")
    async def my_tool():
        # Using ctx here will cause errors
        user_id = ctx.context.get('userId')  # RuntimeError!
    ```

!!! info "Why This Matters"
    `RequestContext` depends on active HTTP request headers (`x-request-context`) that only exist during request processing, not when Python imports your module.

## RequestContext

::: agenticai_core.runtime.sessions.request_context.RequestContext
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## Quick Reference

| Property/Method | Type | Purpose |
|-----------------|------|---------|
| **`ctx.request_id`** | `str` | Unique identifier for current request |
| **`ctx.context`** | `dict` | Request context data (`userId`, `sessionId`, `appId`) |
| **`ctx.host`** | `str` | Platform host URL |
| **`ctx.get_memory()`** | [`MemoryManager`](memory.md) | Access memory operations |
| **`ctx.get_memory_store_manager(name)`** | [`MemoryStoreManager`](memory.md) | Access specific memory store |
| **`await ctx.get_environment_variables()`** | [`EnvironmentVariables`](environment_variables.md) | Access environment configuration |

## Basic Usage

```python
from agenticai_core.runtime.sessions.request_context import RequestContext

@Tool.register(name="example_tool", description="Example tool with context")
async def example_tool():
    # ✅ CORRECT: Initialize context inside the tool
    ctx = RequestContext()
    
    # Access request information
    user_id = ctx.context.get('userId')
    session_id = ctx.context.get('sessionId')
    app_id = ctx.context.get('appId')
    
    return {
        "user_id": user_id,
        "session_id": session_id,
        "app_id": app_id
    }
```


## Usage Example

```python
from agenticai_core.runtime.sessions.request_context import RequestContext

@Tool.register(name="demo_tool", description="RequestContext demo")
async def demo_tool():
    # Initialize context
    ctx = RequestContext()
    
    # Access request information
    user_id = ctx.context.get('userId')
    session_id = ctx.context.get('sessionId')
    
    # Access runtime services through context
    env = await ctx.get_environment_variables()
    memory = ctx.get_memory()
    
    return {
        "user_id": user_id,
        "session_id": session_id,
        "services_available": True
    }
```

For detailed usage patterns, see:

- **[EnvironmentVariables](environment_variables.md)** - Environment variable access patterns
- **[Memory](memory.md)** - Memory operations and examples

<hr/>

**Related Resources**

- [Logger API](logger.md) - Structured logging with session context
- [Tracer API](tracer.md) - Distributed tracing integration
- [Memory Stores Guide](../../guide/memory-stores.md) - Memory store concepts and configuration
- [Working with Tools Guide](../../guide/working-with-tools.md) - Tool development patterns
- [Runtime Overview](index.md) - Complete runtime API reference
