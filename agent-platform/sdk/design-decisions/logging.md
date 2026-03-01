# Logging System Documentation

## Overview

The logging system in the workspace provides a structured way to log messages at different severity levels (debug, info, warning, error) and track them through the platform. The system is built on top of a client-server architecture where tools can log messages that are then processed and displayed by the platform.

## Logger Implementation

### Basic Usage

To use the logger in your tools, follow these steps:

1. Import the Logger class:

```python
from agenticai_core.runtime.sessions.request_context import Logger
```

2. Initialize the logger with a name for your tool:
```python
logger = Logger('YourToolName')
```

3. Use the logger methods to log messages:
```python
await logger.debug("Debug message")
await logger.info("Info message")
await logger.warning("Warning message")
await logger.error("Error message")
```

1. Use the logger methods to log messages:

   ```python
   await logger.debug("Debug message")
   await logger.info("Info message")
   await logger.warning("Warning message")
   await logger.error("Error message")
   ```

### Log Message Structure

Each log message is automatically structured with the following fields:

```json
{
    "timestamp": "ISO-8601 formatted UTC timestamp",
    "sessionId": "Unique session identifier",
    "userId": "User identifier",
    "message": "Your log message content"
}
```

The logger automatically includes:

- Current UTC timestamp
- Session ID from the request context
- User ID from the request context
- Your log message

### Example Implementation

Here's a complete example of using the logger in a tool:

```python
from agenticai_core.designtime.models.tool import Tool
from agenticai_core.runtime.sessions.request_context import Logger

@Tool.register(name="ExampleTool", description="Example tool with logging")
async def example_tool(param1: str):
    logger = Logger('ExampleTool')
    
    # Log the start of execution
    await logger.info(f"########## ExampleTool Called ############# ARGS: {param1}")
    
    # Log debug information
    await logger.debug(f"Processing parameter: {param1}")
    
    # Your tool logic here
    
    # Log the result
    await logger.info("Tool execution completed successfully")
    
    return "Result"
```

## Log Levels

The logger supports four severity levels:

1. **DEBUG**: Detailed information for debugging purposes
   - Use for detailed diagnostic information
   - Example: Variable values, function entry/exit points

2. **INFO**: General information about program execution
   - Use for tracking normal program flow
   - Example: Tool execution start/end, successful operations

3. **WARNING**: Warning messages for potentially problematic situations
   - Use for situations that don't prevent execution but might need attention
   - Example: Deprecated feature usage, performance issues

4. **ERROR**: Error messages for serious problems
   - Use for errors that prevent normal operation
   - Example: Failed operations, invalid inputs

## Platform Integration

### Raw SSE Client Implementation

For direct SSE handling without MCP, you can use the EventSource API:

```typescript
const eventSource = new EventSource(
    'http://your-server:8080/notifications/message',
    { withCredentials: true }
);

eventSource.addEventListener('notification/message', (event) => {
    const log = JSON.parse(event.data);
    console.log(`[${log.logger}] ${log.level}: ${log.message}`);
});

eventSource.onerror = (error) => {
    console.error('SSE connection error:', error);
    eventSource.close();
};
```

### MCP Client Implementation

For MCP-based applications, use the MCP client's built-in logging callback:

```typescript
import { ClientSession } from 'mcp';

async function logger(params: LoggingMessageNotificationParams) {
    params.logger = params.logger || 'Server';
    console.log(`[${params.logger}] ${params.level}: ${params.data}`);
}

// Initialize MCP client with logging
const session = new ClientSession(streams[0], streams[1], {
    logging_callback: logger
});
```

The MCP client approach provides:

1. Built-in session management
2. Automatic reconnection handling
3. Structured logging interface
4. Integration with MCP's event system

### Log Processing

The platform should:

1. **Receive Logs**: Capture logs through the SSE connection
2. **Format Logs**: Structure logs with:
   - Timestamp (ISO-8601 UTC format)
   - Logger name
   - Log level
   - Message content
   - Context information:
     - Session ID
     - User ID
     - Request ID
3. **Store Logs**: Persist logs for later analysis
4. **Display Logs**: Show logs in a user-friendly interface
5. **Filter Logs**: Allow filtering by:
   - Log level
   - Logger name
   - Time range
   - Session ID
   - User ID
   - Request ID
   - Message content

## Best Practices

1. **Meaningful Logger Names**
   - Use descriptive names that identify the tool or component
   - Example: 'GreetTool', 'MultiplyMatricesTool'

2. **Structured Logging**
   - Include relevant context in log messages
   - Use consistent formatting
   - Add request IDs and session IDs when available
   - Leverage the built-in context information (sessionId, userId)

3. **Appropriate Log Levels**
   - Use DEBUG for detailed troubleshooting
   - Use INFO for normal operation tracking
   - Use WARNING for potential issues
   - Use ERROR for actual problems

4. **Context Information**
   - Log relevant parameters and state
   - Include request context when available
   - Add stack traces for errors
   - Use the built-in context fields for correlation

## Open Questions

### Langchain MCP Adapters

The question of whether Langchain MCP adapters can be used for logger callback functions is still open. Two approaches are possible:

1. **SSE Event Listener (Current Implementation)**
   - Pros:
     - Direct integration with existing SSE infrastructure
     - Real-time log processing
     - Simple implementation
     - Built-in context tracking (sessionId, userId)
   - Cons:
     - Additional event handling complexity
     - Potential performance impact

2. **Langchain MCP Adapters**
   - Pros:
     - Better integration with Langchain ecosystem
     - More structured approach
     - Potential for better performance
   - Cons:
     - Requires additional implementation
     - May need to modify existing code
     - Need to handle context tracking separately

The current implementation uses SSE event listeners, but exploring Langchain MCP adapters could provide a more integrated solution. This would require further investigation and testing to determine the best approach.

## Future Improvements

1. **Log Aggregation**
   - Implement centralized log collection
   - Add log correlation across services
   - Enhance context tracking

2. **Log Analysis**
   - Add log pattern detection
   - Implement automated alerting
   - Add correlation analysis using sessionId and userId

3. **Performance Optimization**
   - Add log batching
   - Implement log compression
   - Optimize context tracking

4. **Security**
   - Add log encryption
   - Implement access control for logs
   - Add audit logging for sensitive operations
