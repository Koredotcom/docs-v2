# Memory Store

::: agenticai_core.designtime.models.memory_store.MemoryStore
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## Supporting Classes

### Namespace

::: agenticai_core.designtime.models.memory_store.Namespace
    options:
      show_root_heading: true
      show_source: false

### RetentionPolicy

::: agenticai_core.designtime.models.memory_store.RetentionPolicy
    options:
      show_root_heading: true
      show_source: false

### Enumerations

#### Scope

::: agenticai_core.designtime.models.memory_store.Scope
    options:
      show_root_heading: true

#### RetentionPeriod

::: agenticai_core.designtime.models.memory_store.RetentionPeriod
    options:
      show_root_heading: true

#### NamespaceType

::: agenticai_core.designtime.models.memory_store.NamespaceType
    options:
      show_root_heading: true

## MemoryRegistry

::: agenticai_core.designtime.models.memory_store.MemoryRegistry
    options:
      show_root_heading: false

Global registry for memory stores defined in the application.

## Usage Examples

### Creating a Session-Scoped Memory Store

```python
from agenticai_core.designtime.models.memory_store import (
    MemoryStore, Namespace, NamespaceType, 
    RetentionPolicy, RetentionPeriod, Scope
)

memory_store = MemoryStore(
    name="Account Information",
    technical_name="accountInfo",
    type="hotpath",
    description="Stores user account balances and details",
    schema_definition={
        "type": "object",
        "properties": {
            "accounts": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "account_id": {"type": "string"},
                        "balance": {"type": "number"},
                        "currency": {"type": "string"}
                    }
                }
            },
            "last_updated": {"type": "string"}
        }
    },
    strict_schema=False,
    namespaces=[
        Namespace(
            name="session_id",
            type=NamespaceType.DYNAMIC,
            value="{session_id}",
            description="Session identifier"
        )
    ],
    scope=Scope.SESSION_LEVEL,
    retention_policy=RetentionPolicy(
        type=RetentionPeriod.SESSION,
        value=1
    )
)
```

### User-Specific Memory Store

```python
user_preferences = MemoryStore(
    name="User Preferences",
    technical_name="userPrefs",
    type="persistent",
    description="User preference and settings",
    schema_definition={
        "type": "object",
        "properties": {
            "theme": {"type": "string"},
            "language": {"type": "string"},
            "notifications": {"type": "boolean"}
        }
    },
    strict_schema=True,
    namespaces=[
        Namespace(
            name="user_id",
            type=NamespaceType.DYNAMIC,
            value="{user_id}",
            description="User identifier"
        )
    ],
    scope=Scope.USER_SPECIFIC,
    retention_policy=RetentionPolicy(
        type=RetentionPeriod.MONTH,
        value=6
    )
)
```

### Application-Wide Memory Store

```python
app_config = MemoryStore(
    name="Application Configuration",
    technical_name="appConfig",
    type="global",
    description="Shared configuration across all users",
    schema_definition={
        "type": "object",
        "properties": {
            "feature_flags": {"type": "object"},
            "api_endpoints": {"type": "object"}
        }
    },
    strict_schema=False,
    namespaces=[
        Namespace(
            name="app_version",
            type=NamespaceType.STATIC,
            value="v1.0",
            description="Application version"
        )
    ],
    scope=Scope.APPLICATION_WIDE,
    retention_policy=RetentionPolicy(
        type=RetentionPeriod.DAY,
        value=30
    )
)
```

### Multiple Namespaces

```python
memory_store = MemoryStore(
    name="Conversation History",
    technical_name="conversationHistory",
    type="hotpath",
    description="Stores conversation messages",
    schema_definition={"type": "object"},
    strict_schema=False,
    namespaces=[
        Namespace(
            name="user_id",
            type=NamespaceType.DYNAMIC,
            value="{user_id}",
            description="User identifier"
        ),
        Namespace(
            name="session_id",
            type=NamespaceType.DYNAMIC,
            value="{session_id}",
            description="Session identifier"
        ),
        Namespace(
            name="environment",
            type=NamespaceType.STATIC,
            value="production",
            description="Deployment environment"
        )
    ],
    scope=Scope.SESSION_LEVEL,
    retention_policy=RetentionPolicy(
        type=RetentionPeriod.DAY,
        value=7
    )
)
```

### Registering Memory Stores

```python
from agenticai_core.designtime.models.memory_store import MemoryRegistry

# Register memory store
MemoryRegistry['accountInfo'] = memory_store

# Access in runtime
memory_store = MemoryRegistry.get('accountInfo')
```

## Schema Definition

Memory stores use JSON Schema for data validation:

```python
schema = {
    "type": "object",
    "properties": {
        "user_data": {
            "type": "object",
            "properties": {
                "name": {"type": "string"},
                "email": {"type": "string", "format": "email"},
                "age": {"type": "integer", "minimum": 0}
            },
            "required": ["name", "email"]
        },
        "preferences": {
            "type": "array",
            "items": {"type": "string"}
        }
    }
}
```

## Retention Policies

### Session-Based

Data is deleted when the session ends:

```python
RetentionPolicy(type=RetentionPeriod.SESSION, value=1)
```

### Time-Based

Data is deleted after a specified time:

```python
# 7 days
RetentionPolicy(type=RetentionPeriod.DAY, value=7)

# 2 weeks
RetentionPolicy(type=RetentionPeriod.WEEK, value=2)

# 6 months
RetentionPolicy(type=RetentionPeriod.MONTH, value=6)
```

## Best Practices

1. **Schema Design**: Define clear schemas for strict type safety
2. **Namespace Strategy**: Use appropriate namespaces for data isolation
3. **Retention Policy**: Choose retention based on data sensitivity
4. **Scope Selection**: Match scope to data access patterns
5. **Technical Names**: Use consistent, descriptive technical names

## Related Models

- [App](app.md) - Applications define memory stores
- [Agent](agent.md) - Agents access memory stores via prompts

