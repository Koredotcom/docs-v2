# EnvironmentVariables

Environment variable accessor for AgenticAI applications with attribute-style access.

## EnvironmentVariables

::: agenticai_core.runtime.sessions.request_context.EnvironmentVariables
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## Usage Examples

### Basic Access Patterns

```python
from agenticai_core.runtime.sessions.request_context import RequestContext

@Tool.register(name="config_tool", description="Tool accessing environment variables")
async def config_tool():
    ctx = RequestContext()
    
    # Get all environment variables
    env = await ctx.get_environment_variables()
    
    # Direct attribute access (raises AttributeError if not found)
    api_url = env.API_BASE_URL
    secret_key = env.SECRET_KEY
    
    # Safe access with defaults
    timeout = env.get('TIMEOUT', '30')
    retry_count = int(env.get('RETRY_COUNT', '3'))
    
    # Check existence
    if 'DEBUG_MODE' in env:
        debug_enabled = env.DEBUG_MODE.lower() == 'true'
    
    return {
        "api_url": api_url,
        "timeout": int(timeout),
        "debug_enabled": debug_enabled
    }
```

### Listing Available Variables

```python
@Tool.register(name="list_env_vars", description="List environment variables")
async def list_env_vars():
    ctx = RequestContext()
    env = await ctx.get_environment_variables()
    
    variables = {}
    for var_name in env.keys():
        # Don't expose sensitive values
        if 'key' in var_name.lower() or 'secret' in var_name.lower():
            variables[var_name] = "[REDACTED]"
        else:
            variables[var_name] = env.get(var_name)
    
    return {"variables": variables}
```

### Configuration Patterns

```python
@Tool.register(name="service_config", description="Service configuration from environment")
async def service_config():
    ctx = RequestContext()
    env = await ctx.get_environment_variables()
    
    # Build service configuration from environment variables
    config = {
        "database": {
            "host": env.get('DB_HOST', 'localhost'),
            "port": int(env.get('DB_PORT', '5432')),
            "name": env.get('DB_NAME', 'myapp'),
        },
        "api": {
            "timeout": int(env.get('API_TIMEOUT', '30')),
            "retries": int(env.get('API_RETRIES', '3')),
            "base_url": env.get('API_BASE_URL', 'https://api.example.com')
        },
        "features": {
            "debug_mode": env.get('DEBUG_MODE', 'false').lower() == 'true',
            "logging_enabled": env.get('LOGGING_ENABLED', 'true').lower() == 'true'
        }
    }
    
    return {"config": config}
```

## Error Handling

### Handling Missing Variables

```python
@Tool.register(name="robust_config", description="Configuration with error handling")
async def robust_config():
    ctx = RequestContext()
    
    try:
        env = await ctx.get_environment_variables()
        
        # Handle required variables
        try:
            api_key = env.REQUIRED_API_KEY
        except AttributeError:
            return {"error": "Missing required environment variable: REQUIRED_API_KEY"}
        
        # Use optional variables with defaults
        timeout = int(env.get('TIMEOUT', '30'))
        
        return {
            "success": True,
            "config": {
                "api_key_set": bool(api_key),
                "timeout": timeout
            }
        }
        
    except Exception as e:
        return {"success": False, "error": f"Environment error: {str(e)}"}
```

## Best Practices

### 1. Cache Environment Variables

```python
@Tool.register(name="efficient_config", description="Cache environment variables")
async def efficient_config():
    ctx = RequestContext()
    
    # Get environment variables once
    env = await ctx.get_environment_variables()
    
    # Use multiple times without re-fetching
    api_endpoint = env.API_ENDPOINT
    api_key = env.API_KEY
    timeout = int(env.get('TIMEOUT', '30'))
    
    return {"endpoint": api_endpoint, "timeout": timeout}
```

### 2. Handle Sensitive Data

```python
@Tool.register(name="secure_config", description="Secure handling of environment variables")
async def secure_config():
    ctx = RequestContext()
    env = await ctx.get_environment_variables()
    
    # Never log sensitive variables
    config = {}
    for var_name in env.keys():
        if any(sensitive in var_name.lower() 
               for sensitive in ['key', 'secret', 'password', 'token']):
            config[var_name] = "[REDACTED]"
        else:
            config[var_name] = env.get(var_name)
    
    return {"config": config}
```

### 3. Type Conversion

```python
@Tool.register(name="typed_config", description="Type-safe environment variable access")
async def typed_config():
    ctx = RequestContext()
    env = await ctx.get_environment_variables()
    
    config = {
        # String values
        "api_url": env.get('API_URL', 'https://api.example.com'),
        
        # Integer values
        "port": int(env.get('PORT', '8080')),
        "timeout": int(env.get('TIMEOUT', '30')),
        
        # Boolean values
        "debug": env.get('DEBUG', 'false').lower() == 'true',
        "ssl_verify": env.get('SSL_VERIFY', 'true').lower() == 'true',
        
        # List values (comma-separated)
        "allowed_hosts": env.get('ALLOWED_HOSTS', 'localhost').split(',')
    }
    
    return {"config": config}
```

<hr/>

**Related Resources**

- [RequestContext API](request_context.md) - Parent context class
- [Memory API](memory.md) - Memory management operations
- [Runtime Overview](index.md) - Complete runtime API reference
- [Working with Tools Guide](../../guide/working-with-tools.md) - Tool development patterns
