# Tracer

Distributed tracing for monitoring agent and tool execution using Langfuse integration.

## Tracer Class

::: agenticai_core.runtime.trace._langfuse_tracer.Tracer
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## Configuration

### Environment Variables

The tracer is automatically configured from environment variables loaded during initialization:

```bash
# .env/dev or .env/prod
LANGFUSE_PUBLIC_KEY=pk_lf_...
LANGFUSE_SECRET_KEY=sk_lf_...
LANGFUSE_HOST=https://cloud.langfuse.com
TRACING_ENABLED=true
```

### Tracing Configuration Location

By default, tracing configuration is loaded from:

1. `.env/default` - Base configuration
2. `.env/.langfuse` - Langfuse-specific settings (configurable via `TRACING_CONFIG` env var)

## Usage Examples

### Basic Tool Tracing

```python
from agenticai_core.runtime.trace._langfuse_tracer import Tracer
from agenticai_core.designtime.models.tool import Tool

# Create tracer instance
tracer = Tracer()

@Tool.register(name="get_balance", description="Get account balance")
@tracer.observe(span_name="Tool:get_balance", kind="Tool")
async def get_balance(account_id: str) -> dict:
    """Get account balance with tracing."""
    # Your tool implementation
    balance = await fetch_balance_from_db(account_id)
    return {"account_id": account_id, "balance": balance, "currency": "USD"}

@Tool.register(name="transfer_funds", description="Transfer funds between accounts")
@tracer.observe(span_name="Tool:transfer_funds", kind="Tool", 
               metadata={"operation_type": "financial"})
async def transfer_funds(from_account: str, to_account: str, amount: float) -> dict:
    """Transfer funds with detailed tracing metadata."""
    # Your implementation
    result = await process_transfer(from_account, to_account, amount)
    return {"success": True, "transaction_id": result.id, "amount": amount}
```

### Agent Tracing

```python
from agenticai_core.runtime.agents.abstract_orchestrator import AbstractOrchestrator

class BankingOrchestrator(AbstractOrchestrator):
    
    def __init__(self, agents, **kwargs):
        super().__init__(name="BankingOrchestrator", agents=agents, **kwargs)
        self.tracer = Tracer()

    @tracer.observe(span_name="Orchestrator:handle_message", kind="Orchestrator")
    async def _handle_message(self, conversation: List[MessageItem]) -> MessageItem:
        """Handle incoming messages with tracing."""
        last_message = conversation[-1]
        
        try:
            # Your orchestration logic
            response = await self.route_to_agent(last_message)
            return response
        except Exception as e:
            # Exception will be automatically captured in the span
            raise

    @tracer.observe(span_name="Orchestrator:route_message", kind="Orchestrator",
                   metadata={"version": "1.0"})
    async def route_to_agent(self, message):
        """Route message to appropriate agent."""
        # Routing logic
        return routed_response
```

### Custom Function Tracing

```python
tracer = Tracer()

@tracer.observe(span_name="Database:user_lookup", kind="span")
async def lookup_user_data(user_id: str):
    """Trace database operations."""
    # Database query
    return user_data

@tracer.observe(span_name="API:external_call", kind="span",
               metadata={"service": "payment_gateway", "version": "v2"})
async def call_payment_api(payment_data: dict):
    """Trace external API calls."""
    # External API call
    return api_response

# Works with sync functions too
@tracer.observe(span_name="Validation:input", kind="span")
def validate_input(data: dict) -> bool:
    """Trace synchronous validation."""
    # Validation logic
    return is_valid
```

## Span Naming Conventions

Use consistent naming patterns for better trace organization:

```python
# Tools
@tracer.observe(span_name="Tool:get_balance", kind="Tool")
@tracer.observe(span_name="Tool:transfer_funds", kind="Tool")
@tracer.observe(span_name="Tool:send_notification", kind="Tool")

# Agents
@tracer.observe(span_name="Agent:banking_assistant", kind="Agent")
@tracer.observe(span_name="Agent:fraud_detector", kind="Agent")

# Orchestrators  
@tracer.observe(span_name="Orchestrator:supervisor", kind="Orchestrator")
@tracer.observe(span_name="Orchestrator:workflow_manager", kind="Orchestrator")

# Custom operations
@tracer.observe(span_name="Database:query_user", kind="span")
@tracer.observe(span_name="API:fetch_rates", kind="span")
@tracer.observe(span_name="ML:sentiment_analysis", kind="span")
```

## Metadata Examples

Add contextual information to spans for better observability:

```python
# Operation metadata
@tracer.observe(span_name="Tool:process_payment", kind="Tool",
               metadata={"payment_method": "credit_card", "merchant": "acme_corp"})

# Version tracking
@tracer.observe(span_name="Agent:assistant", kind="Agent",
               metadata={"model_version": "gpt-4o", "agent_version": "2.1"})

# Feature flags
@tracer.observe(span_name="Tool:enhanced_search", kind="Tool",
               metadata={"feature_flag": "semantic_search", "enabled": True})

# Performance tracking
@tracer.observe(span_name="Database:bulk_insert", kind="span",
               metadata={"batch_size": 1000, "table": "transactions"})
```

## Automatic Context Capture

The tracer automatically captures and includes:

### Request Context

- **User ID**: Current user identifier
- **Session ID**: Current session identifier  
- **App ID**: Application identifier
- **Trace ID**: Distributed trace identifier
- **Request ID**: Individual request identifier

### Function Information  

- **Function arguments**: Input parameters (serialized safely)
- **Function return values**: Output data (serialized safely)
- **Execution time**: Automatic timing
- **Success/failure status**: Exception handling

### Example Span Output

```json
{
  "trace_id": "abc123...",
  "span_id": "def456...", 
  "name": "Tool:get_balance",
  "kind": "Tool",
  "input": {
    "args": ["account_123"],
    "kwargs": {}
  },
  "output": {
    "account_id": "account_123",
    "balance": 1500.00,
    "currency": "USD"
  },
  "metadata": {
    "userId": "u-a4aefd67-f592-509c-b045-4d924de52e76",
    "sessionId": "s-054fc1f2-066d-4419-bb87-bd436d11a650",
    "appId": "app-banking-demo",
    "operation_type": "financial"
  },
  "start_time": "2024-12-09T10:30:45.123Z",
  "end_time": "2024-12-09T10:30:45.456Z",
  "duration_ms": 333
}
```

## Error Handling and Debugging

### Exception Tracing

Exceptions are automatically captured and recorded:

```python
@tracer.observe(span_name="Tool:risky_operation", kind="Tool")
async def risky_operation(data: dict):
    """Operation that might fail."""
    try:
        # Risky operation
        result = await external_service.process(data)
        return result
    except ValidationError as e:
        # Exception automatically recorded in span with full context
        raise  # Re-raise to maintain normal error handling
    except TimeoutError as e:
        # Multiple exception types captured
        raise
```

### Debug Tracing

Enable detailed tracing for debugging:

```bash
# Enable debug output
TRACING_ENABLED=true
```

Debug output includes:
```
🔄 [ASYNC FUNCTION] Starting span for: get_balance (module: banking_tools)
🔍 [TRACER] Setting span attributes for: get_balance
🔍 [TRACER] Got context values: userId=u-123..., sessionId=s-456...
🔍 [TRACER] Serialized input payload
🔍 [TRACER] Updating span with user_id and session_id...
✅ [TRACER] Successfully set all span attributes for: get_balance
```

## Performance Considerations

### Span Overhead

- Minimal performance impact (<1ms per span)
- Automatic batching of span data
- Async transmission to Langfuse

### Best Practices

1. **Selective Tracing**: Don't trace every function
   ```python
   # Good - trace business logic
   @tracer.observe(span_name="Tool:process_order", kind="Tool")
   
   # Avoid - tracing utility functions
   # @tracer.observe(span_name="Util:format_date", kind="span")  # Skip
   ```

2. **Meaningful Names**: Use descriptive span names
   ```python
   # Good
   @tracer.observe(span_name="Tool:validate_credit_card", kind="Tool")
   
   # Poor
   @tracer.observe(span_name="tool1", kind="Tool")
   ```

3. **Structured Metadata**: Add context that helps debugging
   ```python
   @tracer.observe(span_name="Tool:search", kind="Tool",
                  metadata={"search_type": "semantic", "index": "products"})
   ```


## Monitoring and Analytics

### Viewing Traces

Access your application traces through the Platform analytics dashboard. For detailed information on viewing and analyzing traces, sessions, and generations, see the [Application Analytics documentation](../../../ai-agents/agentic-apps/app-analytics.md).

The platform provides:

- **Traces**: Complete lifecycle view of individual requests with timeline details
- **Sessions**: Continuous user interactions consisting of multiple connected traces  
- **Generations**: Specific LLM responses with token usage and cost analysis


## Troubleshooting

### Tracing Not Working

1. **Check Environment Variables**:
   ```bash
   python -c "import os; print('TRACING_ENABLED:', os.getenv('TRACING_ENABLED')); print('LANGFUSE_HOST:', os.getenv('LANGFUSE_HOST'))"
   ```

2. **Verify Configuration Loading**:
   ```python
   # Should see debug output when tracer initializes
   from agenticai_core.runtime.trace._langfuse_tracer import Tracer
   tracer = Tracer()  # Check console output
   ```

3. **Test Span Creation**:
   ```python
   @tracer.observe(span_name="Test:simple", kind="span")
   def test_function():
       return "test"
   
   result = test_function()  # Should see debug output
   ```

### Performance Issues

1. **Reduce Span Volume**: Trace only business-critical operations
2. **Optimize Metadata**: Avoid large objects in metadata
3. **Check Network**: Verify Langfuse connectivity

### Missing Context

1. **RequestContext Availability**: Ensure tracing happens within MCP request context
2. **Environment Setup**: Verify `.env` files are properly loaded
3. **Import Order**: Import tracer after environment setup

## Best Practices Summary

1. **Use Semantic Names**: Follow `Type:operation` pattern
2. **Add Meaningful Metadata**: Include context for debugging
3. **Trace Business Logic**: Focus on tools, agents, orchestrators
4. **Handle Errors Gracefully**: Let tracer capture exceptions automatically  
5. **Monitor Performance**: Regular check of span overhead
6. **Organize by Environment**: Separate tracing configs for dev/staging/prod

<hr/>

**Related Resources**

- [Logger API](logger.md) - Structured logging with tracer integration patterns
- [RequestContext API](request_context.md) - Session context and environment variables
- [Runtime Overview](index.md) - Complete runtime API reference  
- [Working with Tools Guide](../../guide/working-with-tools.md) - Tool development patterns
