# App Namespace

::: agenticai_core.designtime.models.app_namespace.AppNamespace
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## Usage Examples

### Default Namespace

```python
from agenticai_core.designtime.models.app_namespace import AppNamespace

# Create a default namespace
default_ns = AppNamespace(name="default")
```

### Functional Namespaces

```python
# Authentication-related namespace
auth_ns = AppNamespace(
    name="authentication",
    description="Variables related to user authentication and authorization"
)

# Database-related namespace
db_ns = AppNamespace(
    name="database", 
    description="Database connection and configuration variables"
)

# API service namespace
api_ns = AppNamespace(
    name="api_service",
    description="Variables for external API integrations and configurations"
)
```

### Feature-Based Namespaces

```python
# Feature-specific namespace
analytics_ns = AppNamespace(
    name="analytics_feature",
    description="Variables specific to analytics feature development"
)

# Service-specific namespace
auth_ns = AppNamespace(
    name="authentication_service",
    description="Variables for authentication and authorization services"
)
```

## Common Namespace Patterns

**Important Note**: Namespaces are for logical/functional groupings, NOT environments. The platform handles environment resolution (dev, staging, production) automatically based on deployment context.

### Functional Namespaces

```python
functional_namespaces = [
    AppNamespace(name="authentication", description="User authentication and authorization"),
    AppNamespace(name="database", description="Database connections and queries"),
    AppNamespace(name="api_service", description="External API integrations"),
    AppNamespace(name="analytics", description="Analytics and reporting features")
]
```

### Service Namespaces

```python
services = [
    AppNamespace(name="database", description="Database connection settings"),
    AppNamespace(name="api_gateway", description="API gateway configurations"),
    AppNamespace(name="messaging", description="Message queue and notification settings"),
    AppNamespace(name="storage", description="File and object storage settings")
]
```

### Feature Namespaces

```python
features = [
    AppNamespace(name="user_management", description="User account and profile features"),
    AppNamespace(name="payment_processing", description="Payment and billing features"),
    AppNamespace(name="analytics", description="Analytics and reporting features"),
    AppNamespace(name="notifications", description="Email and push notification features")
]
```

## Integration with App Variables

Namespaces are used to scope [App Variables](app_variable.md) to specific functional contexts:

```python
from agenticai_core.designtime.models.app_variable import AppVariable

# Create functional namespaces
auth_ns = AppNamespace(name="authentication")
db_ns = AppNamespace(name="database")

# Create variables scoped to specific namespaces
jwt_secret = AppVariable(
    name="JWT_SECRET_KEY",
    is_secured=True,
    value="$env.JWT_SECRET_KEY",
    namespaces=["authentication"]  # Only available in authentication namespace
)

db_pool_size = AppVariable(
    name="DATABASE_POOL_SIZE",
    is_secured=False,
    value="10",
    namespaces=["database"]  # Only available in database namespace
)

# Global variable (available in all namespaces)
app_name = AppVariable(
    name="APP_NAME", 
    is_secured=False,
    value="My Application",
    namespaces=[]  # Empty list means global
)
```

## Serialization

```python
# To dict
namespace_dict = prod_ns.to_dict()
# {"name": "production", "description": "Production environment"}

# From dict
namespace = AppNamespace.from_dict({
    "name": "staging",
    "description": "Staging environment namespace"
})

# To/from JSON
json_str = namespace.to_json()
namespace = AppNamespace.from_json(json_str)
```

## Best Practices

### Naming Conventions

- Use lowercase with underscores: `user_management`, `api_service`
- Be descriptive but concise: `authentication` not `auth_and_user_security_config`
- Focus on functional areas, not environments: `database` not `prod_db`
- Use consistent patterns across your application

### Organization Strategies

```python
# Feature-based approach (recommended)
namespaces = [
    AppNamespace(name="authentication"),
    AppNamespace(name="user_management"), 
    AppNamespace(name="payment_processing")
]

# Service-based approach  
namespaces = [
    AppNamespace(name="database"),
    AppNamespace(name="api_service"),
    AppNamespace(name="messaging")
]

# Domain-driven approach
namespaces = [
    AppNamespace(name="default"),
    AppNamespace(name="customer_domain"),
    AppNamespace(name="order_domain"),
    AppNamespace(name="inventory_domain")
]
```

### Default Namespace

Always include a "default" namespace for common variables:

```python
default_ns = AppNamespace(
    name="default",
    description="Default namespace for common application variables"
)
```

### Environment Resolution

**Important**: Environments (development, staging, production) are automatically resolved by the platform based on deployment context. Do NOT create namespaces for environments. Instead, use logical/functional namespaces and let the platform handle environment-specific variable resolution.

```python
# ❌ WRONG: Don't create environment-based namespaces
wrong_namespaces = [
    AppNamespace(name="development"),
    AppNamespace(name="production")
]

# ✅ CORRECT: Create logical/functional namespaces
correct_namespaces = [
    AppNamespace(name="authentication"),
    AppNamespace(name="database"),
    AppNamespace(name="api_service")
]
```

## Related Models

- [App Variable](app_variable.md) - Variables are scoped to namespaces
- [App](app.md) - Applications contain both namespaces and variables
- [App Configuration](app_configuration.md) - Configuration settings may reference namespaced variables

