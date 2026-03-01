# App Variable

::: agenticai_core.designtime.models.app_variable.AppVariable
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## Usage Examples

### Basic Variable

```python
from agenticai_core.designtime.models.app_variable import AppVariable

# Simple configuration variable
app_var = AppVariable(
    name="APP_VERSION",
    is_secured=False,
    value="1.0.0",
    namespaces=["default"]
)
```

### Environment Variables

```python
# Database connection URL
db_url = AppVariable(
    name="DATABASE_URL",
    is_secured=True,
    hint="PostgreSQL database connection string",
    value="$env.DATABASE_URL",  # References environment variable
    namespaces=["production", "staging"]
)

# API base URL
api_url = AppVariable(
    name="API_BASE_URL", 
    is_secured=False,
    hint="Base URL for external API service",
    value="https://api.example.com",
    namespaces=["default"]
)
```

### Secured Variables

```python
# API key (secured)
api_key = AppVariable(
    name="EXTERNAL_API_KEY",
    is_secured=True,
    hint="API key for third-party service authentication",
    value="$env.API_KEY",
    namespaces=["production"]
)

# Database password (secured)
db_password = AppVariable(
    name="DB_PASSWORD",
    is_secured=True,
    hint="Database connection password",
    value="$env.DATABASE_PASSWORD", 
    namespaces=["production", "staging"]
)
```

## Variable Value Patterns

### Literal Values

```python
# Direct string values
app_name = AppVariable(
    name="APPLICATION_NAME",
    is_secured=False,
    value="My AI Application",
    namespaces=["default"]
)

# Configuration flags
debug_mode = AppVariable(
    name="DEBUG_ENABLED",
    is_secured=False, 
    value="false",
    namespaces=["production"]
)
```

### Environment Variable References

```python
# Using $env.VARIABLE_NAME pattern
port = AppVariable(
    name="SERVER_PORT",
    is_secured=False,
    value="$env.PORT",
    namespaces=["default"]
)

# Simple $env_value pattern (generic environment reference)
generic_env = AppVariable(
    name="GENERIC_CONFIG",
    is_secured=False,
    value="$env_value",
    namespaces=["default"]
)
```

## Namespace Scoping

### Environment-Specific Variables

```python
# Production-only variable
prod_db = AppVariable(
    name="PROD_DATABASE_URL",
    is_secured=True,
    value="$env.PROD_DB_URL",
    namespaces=["production"]
)

# Development-only variable  
dev_debug = AppVariable(
    name="DEV_DEBUG_LEVEL",
    is_secured=False,
    value="verbose",
    namespaces=["development"]
)

# Multi-environment variable
shared_api = AppVariable(
    name="SHARED_API_URL",
    is_secured=False,
    value="https://shared-api.example.com",
    namespaces=["production", "staging", "development"]
)
```

### Global Variables

```python
# Global variable (available in all namespaces)
global_config = AppVariable(
    name="GLOBAL_TIMEOUT", 
    is_secured=False,
    value="30000",
    namespaces=[]  # Empty list = global
)
```

## Security Best Practices

### Secured Variables

```python
# Always mark sensitive data as secured
secrets = [
    AppVariable(
        name="JWT_SECRET",
        is_secured=True,  # Marks as sensitive
        hint="Secret key for JWT token signing",
        value="$env.JWT_SECRET_KEY",
        namespaces=["production"]
    ),
    AppVariable(
        name="ENCRYPTION_KEY",
        is_secured=True,
        hint="AES encryption key for data protection", 
        value="$env.ENCRYPTION_KEY",
        namespaces=["production", "staging"]
    )
]
```

### Non-Secured Variables

```python
# Public configuration that's safe to expose
public_configs = [
    AppVariable(
        name="API_VERSION",
        is_secured=False,  # Safe to expose
        value="v2",
        namespaces=["default"]
    ),
    AppVariable(
        name="MAX_RETRY_ATTEMPTS",
        is_secured=False,
        value="3", 
        namespaces=["default"]
    )
]
```

## Integration with Tools and Agents

Variables can be referenced in tool code and agent configurations:

```python
# In tool code, variables are accessible via $env or env syntax
tool_code = """
const apiUrl = $env.API_BASE_URL;
const apiKey = env.API_KEY;

// Use variables in tool logic
const response = await fetch(`${apiUrl}/data`, {
    headers: { 'Authorization': `Bearer ${apiKey}` }
});
"""

# Variables that tools might need
tool_variables = [
    AppVariable(
        name="API_BASE_URL",
        is_secured=False,
        value="https://api.example.com",
        namespaces=["default"]
    ),
    AppVariable(
        name="API_KEY", 
        is_secured=True,
        value="$env.SERVICE_API_KEY",
        namespaces=["production"]
    )
]
```

## Complete Application Example

```python
from agenticai_core.designtime.models.app_namespace import AppNamespace
from agenticai_core.designtime.models.app_variable import AppVariable

# Define namespaces
namespaces = [
    AppNamespace(name="default"),
    AppNamespace(name="production", description="Production environment"),
    AppNamespace(name="development", description="Development environment")
]

# Define variables
variables = [
    # Global variables
    AppVariable(
        name="APP_NAME",
        is_secured=False,
        value="Banking Assistant",
        namespaces=[]  # Global
    ),
    
    # Environment-specific variables
    AppVariable(
        name="DATABASE_URL",
        is_secured=True,
        hint="Primary database connection",
        value="$env.DATABASE_URL",
        namespaces=["production"]
    ),
    
    AppVariable(
        name="DEV_DATABASE_URL", 
        is_secured=False,
        hint="Development database connection",
        value="postgresql://localhost:5432/devdb",
        namespaces=["development"]
    ),
    
    # Feature flags
    AppVariable(
        name="ENABLE_ANALYTICS",
        is_secured=False,
        value="true",
        namespaces=["production", "development"]
    )
]
```

## Serialization

```python
# To dict
variable_dict = api_key.to_dict()
# {
#     "name": "API_KEY",
#     "isSecured": true,
#     "hint": "External service API key",
#     "value": "$env.API_KEY", 
#     "namespaces": ["production"]
# }

# From dict
variable = AppVariable.from_dict({
    "name": "CONFIG_VAR",
    "isSecured": false,
    "value": "some_value",
    "namespaces": ["default"]
})

# To/from JSON
json_str = variable.to_json()
variable = AppVariable.from_json(json_str) 
```

## Related Models

- [App Namespace](app_namespace.md) - Namespaces scope variables to specific contexts
- [App](app.md) - Applications contain both namespaces and variables  
- [Tool](tool.md) - Tools can reference variables in their code
- [Agent](agent.md) - Agents may use variables in their configurations

