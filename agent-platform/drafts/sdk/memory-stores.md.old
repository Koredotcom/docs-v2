# Memory Stores Guide

Learn how to configure and use memory stores for persistent data in the AgenticAI Core SDK.

## Overview

Memory stores provide persistent data storage across different scopes (user, application, or session). They enable your applications to maintain state and remember information between interactions.

## Design-Time Configuration

### Basic Setup

Define memory stores during application configuration:

```python
from agenticai_core.designtime.models.memory_store import (
    MemoryStore, Namespace, NamespaceType,
    RetentionPolicy, RetentionPeriod, Scope
)

user_preferences = MemoryStore(
    name="User Preferences",
    technical_name="user_preferences",
    type="hotpath",
    description="Stores user-specific preferences",
    schema_definition={
        "type": "object",
        "properties": {
            "firstname": {"type": "string"},
            "lastname": {"type": "string"},
            "theme": {"type": "string"},
            "language": {"type": "string"}
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
    scope=Scope.USER_SPECIFIC,
    retention_policy=RetentionPolicy(
        type=RetentionPeriod.MONTH,
        value=6
    )
)
```

### Add to Application

```python
from agenticai_core.designtime.models.app import AppBuilder

app_config = AppBuilder() \
    .set_name("My App") \
    .set_memory_store(user_preferences) \
    .build()

app = App(**app_config)
```

## Memory Store Scopes

### USER_SPECIFIC

Data unique to each user (recommended for most use cases):

```python
MemoryStore(
    name="User Data",
    scope=Scope.USER_SPECIFIC,
    ...
)
```

### APPLICATION_WIDE

Global data shared across all users:

```python
MemoryStore(
    name="App Config",
    scope=Scope.APPLICATION_WIDE,
    ...
)
```

### SESSION_LEVEL

Temporary session data cleared when session ends:

```python
MemoryStore(
    name="Session Cache",
    scope=Scope.SESSION_LEVEL,
    ...
)
```

## Retention Policies

### Session-Based

Data cleared when session ends:

```python
RetentionPolicy(
    type=RetentionPeriod.SESSION,
    value=1
)
```

### Time-Based

Data retained for specified duration:

```python
# 7 days
RetentionPolicy(type=RetentionPeriod.DAY, value=7)

# 2 weeks
RetentionPolicy(type=RetentionPeriod.WEEK, value=2)

# 6 months
RetentionPolicy(type=RetentionPeriod.MONTH, value=6)
```

## Runtime Usage in Tools

### Set Content

Save data to memory store:

```python
from agenticai_core.designtime.models.tool import Tool
from agenticai_core.runtime.sessions.request_context import RequestContext

@Tool.register(description="Save user preferences")
async def save_preferences(firstname: str, lastname: str, theme: str = "light"):
    context = RequestContext()
    memory = context.get_memory()
    
    user_data = {
        "firstname": firstname,
        "lastname": lastname,
        "theme": theme
    }
    
    result = await memory.set_content('user_preferences', user_data)
    
    if result.success:
        return f"Preferences saved for {firstname} {lastname}"
    else:
        return "Failed to save preferences"
```

### Get Content

Retrieve data with projections:

```python
@Tool.register(description="Get user greeting")
async def get_greeting():
    context = RequestContext()
    memory = context.get_memory()
    
    # Read with projections (1 = include field)
    result = await memory.get_content('user_preferences', {
        'firstname': 1,
        'lastname': 1,
        'theme': 1
    })
    
    if result.success and result.data:
        firstname = result.data.get('firstname', 'Guest')
        lastname = result.data.get('lastname', '')
        theme = result.data.get('theme', 'light')
        
        greeting = f"Hello {firstname} {lastname}!"
        if theme == 'dark':
            greeting += " 🌙"
        else:
            greeting += " ☀️"
        
        return greeting
    
    return "Hello Guest! Please set your preferences first."
```

### Delete Content

Clear data from memory store:

```python
@Tool.register(description="Clear user data")
async def clear_data():
    context = RequestContext()
    memory = context.get_memory()
    
    result = await memory.delete_content('user_preferences')
    
    if result.success:
        return "Data cleared successfully"
    else:
        return "Failed to clear data"
```

## Schema Definition

Use JSON Schema for validation:

```python
schema_definition = {
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

## Namespaces

Partition data based on different dimensions:

### Dynamic Namespaces

```python
Namespace(
    name="session_id",
    type=NamespaceType.DYNAMIC,
    value="{session_id}",
    description="Session identifier"
)

Namespace(
    name="user_id",
    type=NamespaceType.DYNAMIC,
    value="{user_id}",
    description="User identifier"
)
```

### Static Namespaces

```python
Namespace(
    name="app_version",
    type=NamespaceType.STATIC,
    value="v1.0",
    description="Application version"
)
```

### Multiple Namespaces

```python
memory_store = MemoryStore(
    name="Conversation History",
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
    ...
)
```

## Best Practices

1. **Schema Design**
    - Define clear, specific schemas
    - Use `strict_schema=True` for production
    - Include required fields
    - Validate data types

2. **Scope Selection**
    - Use `USER_SPECIFIC` for personal data
    - Use `APPLICATION_WIDE` for shared resources
    - Use `SESSION_LEVEL` for temporary data

3. **Retention Policies**
    - Choose appropriate periods
    - Consider data privacy requirements
    - Clean up old data regularly

4. **Error Handling**
    - Always check `result.success`
    - Provide fallback values
    - Log errors appropriately
    - Handle missing data gracefully

5. **Performance**
    - Use projections to retrieve only needed fields
    - Minimize operations in critical paths
    - Cache frequently accessed data
    - Monitor memory usage

6. **Security**
    - Don't store sensitive data unencrypted
    - Use appropriate scopes for data isolation
    - Set reasonable retention policies
    - Validate data before storage


<hr/>

**Related Resources**

- [Memory Store API Reference](../api/designtime/memory_store.md)
- [Working with Tools](working-with-tools.md)
- [Building Applications](building-apps.md)
