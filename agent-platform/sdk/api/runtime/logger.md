# Logger

Structured logging with automatic session context inclusion for tools and orchestrators.

## Logger Class

::: agenticai_core.runtime.sessions.request_context.Logger
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## Basic Usage

```python
from agenticai_core.runtime.sessions.request_context import Logger

@Tool.register(name="my_tool", description="Tool with logging")
async def my_tool(operation: str):
    logger = Logger('MyTool')
    
    await logger.info(f"Starting operation: {operation}")
    
    try:
        # Your tool logic here
        result = {"success": True, "data": "processed"}
        await logger.info("Operation completed successfully")
        return result
        
    except Exception as e:
        await logger.error(f"Operation failed: {str(e)}")
        raise
```

### With RequestContext

```python
from agenticai_core.runtime.sessions.request_context import RequestContext, Logger

@Tool.register(name="integrated_tool", description="Tool with shared context")
async def integrated_tool():
    # Create shared context
    ctx = RequestContext()
    logger = Logger('IntegratedTool', request_context=ctx)
    
    # Access environment and memory through same context
    env = await ctx.get_environment_variables()
    memory = ctx.get_memory()
    
    await logger.info("Tool execution completed")
    return {"success": True}
```

## Log Levels

```python
logger = Logger('MyTool')

await logger.debug("Detailed diagnostic information")
await logger.info("General operational information")  
await logger.warning("Potential issue requiring attention")
await logger.error("Error affecting functionality")
```

## Best Practices

1. **Use descriptive logger names**: `Logger('UserAuthTool')` instead of `Logger('Tool')`
2. **Include context**: `f"Processing payment: amount=${amount}, user={user_id}"`
3. **Don't log sensitive data**: Sanitize or redact passwords, API keys, tokens
4. **Use appropriate levels**: Debug for diagnostics, info for operations, warning/error for issues

## Troubleshooting

### Common Issues

1. **Logger Not Capturing Session Context**:
   ```python
   # ✅ Ensure Logger is created within request context
   ctx = RequestContext()
   logger = Logger('MyTool', request_context=ctx)
   ```

2. **Missing Log Output**:
   ```python
   # Check if async/await is used correctly
   await logger.info("Message")  # ✅ Correct
   logger.info("Message")        # ❌ Missing await
   ```

3. **Performance Issues with Logging**:
   ```python
   # Avoid expensive operations in log messages
   # Use conditional logging for debug messages
   if debug_enabled:
       await logger.debug(expensive_debug_info())
   ```

<hr/>

**Related Resources**

- [RequestContext API](request_context.md) - Session context and environment variables
- [Tracer API](tracer.md) - Distributed tracing and monitoring
- [Working with Tools Guide](../../guide/working-with-tools.md) - Tool development patterns
- [Runtime Overview](index.md) - Complete runtime API reference
