# Memory Store Developer Guide

## Overview

Memory stores in AgenticAI provide persistent data storage across different scopes (user, application, or session). This guide will walk you through how to configure memory stores during design-time and consume them in your tools.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Design-Time Configuration](#design-time-configuration)
3. [Runtime Usage in Tools](#runtime-usage-in-tools)
4. [Best Practices](#best-practices)

## Quick Start

### Step 1: Define Your Memory Store

```python
from agenticai_core.designtime.models.memory_store import MemoryStore, Scope, RetentionPolicy

 # Create a memory store for user preferences
user_preferences_store = MemoryStore(
    name="User Preferences",
    technical_name="user_preferences",
    description="Stores user-specific preferences",
    schema_definition={
        "type": "object",
        "properties": {
            "firstname": {"type": "string"},
            "lastname": {"type": "string"},
            "theme": {"type": "string"}
        }
    },
    strict_schema=False,
    scope=Scope.USER_SPECIFIC,
    retention_policy=RetentionPolicy.WEEK
)
```

### Step 2: Add to Your App Configuration

```python
from agenticai_core.designtime.models.app import AppBuilder

app_config = (AppBuilder()
    .set_name("MyApp")
    .set_description("Example app with memory store")
    .set_memory_store(user_preferences_store)
    .build())
```

### Step 3: Use in Your Tools

```python
from agenticai_core.designtime.models.tool import Tool
from agenticai_core.runtime.sessions.request_context import RequestContext, Logger

@Tool.register(name="GreetUser", description="Greet the user with their name")
async def greet_user():
    logger = Logger('GreetUser')
    context = RequestContext()
    
    # Get memory manager
    memory = context.get_memory()
    
    # Retrieve user data
    result = await memory.get_content('user_preferences', {
        'firstname': 1,
        'lastname': 1
    })
    
    if result.success and result.data:
        firstname = result.data.get('firstname', 'Guest')
        lastname = result.data.get('lastname', '')
        return f"Hello {firstname} {lastname}!"
    
    return "Hello Guest!"
```

## Design-Time Configuration

### Memory Store Definition

When creating a memory store, you need to define these key properties:

```python
from agenticai_core.designtime.models.memory_store import MemoryStore, Scope, RetentionPolicy

memory_store = MemoryStore(
    name="Display Name",                    # Human-readable name
    technical_name="store_identifier",      # Used in code to access the store
    description="What this store contains", # Description of the store's purpose
    schema_definition={...},                # JSON Schema for data structure
    strict_schema=True,                     # Whether to enforce schema validation
    scope=Scope.USER_SPECIFIC,              # Access control level
    retention_policy=RetentionPolicy.WEEK   # How long to keep data
)
```

### Schema Definition

The `schema_definition` uses JSON Schema format to define the structure of your data:

```python
 # Simple schema example
schema_definition = {
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "age": {"type": "number"},
        "active": {"type": "boolean"}
    }
}

 # Employee data schema example
employee_schema = {
    "type": "object",
    "properties": {
        "emp_ID": {"type": "number"},
        "firstName": {"type": "string"},
        "lastName": {"type": "string"},
        "preflanguage": {"type": "string"}
    }
}
```

### Scopes

Choose the appropriate scope for your use case:

```python
from agenticai_core.designtime.models.memory_store import Scope

 # User-specific data (recommended for most use cases)
user_store = MemoryStore(
    # ... other properties
    scope=Scope.USER_SPECIFIC  # Data unique to each user
)

 # Application-wide data (shared across all users)
app_store = MemoryStore(
    # ... other properties
    scope=Scope.APPLICATION_WIDE  # Global application data
)

 # Session-level data (temporary, cleared when session ends)
session_store = MemoryStore(
    # ... other properties
    scope=Scope.SESSION_LEVEL  # Temporary session data
)
```

### Retention Policies

Configure how long data should be retained:

```python
from agenticai_core.designtime.models.memory_store import RetentionPolicy

 # Different retention options
day_store = MemoryStore(
    # ... other properties
    retention_policy=RetentionPolicy.DAY  # 24 hours
)

week_store = MemoryStore(
    # ... other properties
    retention_policy=RetentionPolicy.WEEK  # 7 days
)

month_store = MemoryStore(
    # ... other properties
    retention_policy=RetentionPolicy.MONTH  # 30 days
)

session_store = MemoryStore(
    # ... other properties
    retention_policy=RetentionPolicy.SESSION  # Until session ends
)
```

### Adding Multiple Memory Stores

You can add multiple memory stores to your application:

```python
 # Define multiple stores
shopping_cart = MemoryStore(
    name="Shopping Cart",
    technical_name="shopping_cart",
    description="User's shopping cart",
    schema_definition={
        "type": "object",
        "properties": {
            "items": {"type": "array"},
            "total": {"type": "number"}
        }
    },
    strict_schema=True,
    scope=Scope.USER_SPECIFIC,
    retention_policy=RetentionPolicy.SESSION
)

user_preferences = MemoryStore(
    name="User Preferences",
    technical_name="user_preferences",
    description="User preferences",
    schema_definition={
        "type": "object",
        "properties": {
            "theme": {"type": "string"},
            "language": {"type": "string"}
        }
    },
    strict_schema=True,
    scope=Scope.USER_SPECIFIC,
    retention_policy=RetentionPolicy.MONTH
)

 # Add to app configuration
app_config = (AppBuilder()
    .set_name("ECommerceApp")
    .set_description("Shopping application")
    .set_memory_store(shopping_cart)
    .set_memory_store(user_preferences)
    .build())
```

## Runtime Usage in Tools

### Basic Memory Operations

Memory supports the basic CRUD operations.

#### Reading Data from `Memory Store`

```python
 # Get data from memory store
result = await memory.get_content(store_name, projections)
```

#### Writing Data to `Memory Store`

```python
 # Write data to memory store
result = await memory.set_content(store_name, content)
```

#### Deleting `Memory Store`

```python
 # Delete entire content from memory store
result = await memory.delete_content(store_name)
```

### RequestContext Integration

#### Getting Memory Manager

The easiest way to access memory stores in tools is through `RequestContext`:

```python
from agenticai_core.runtime.sessions.request_context import RequestContext

context = RequestContext()

 # Get memory manager (recommended approach)
memory = context.get_memory()

 # Available methods:
await memory.get_content(store_name, projections)
await memory.set_content(store_name, content)
await memory.delete_content(store_name)
```

#### Using Memory Manager

The memory manager provides a simple interface for all memory operations:

```python
@Tool.register(name="GetUserData", description="Get user information using memory manager")
async def get_user_data():
    context = RequestContext()
    memory = context.get_memory()
    
    # Read data from multiple stores
    user_prefs = await memory.get_content('user_preferences', {
        'firstname': 1,
        'lastname': 1,
        'theme': 1
    })
    cart_data = await memory.get_content('shopping_cart', {
        'items': 1,
        'total': 1
    })
    
    return {
        'user': user_prefs.data if user_prefs.success else {"firstname": "Guest", "lastname": "", "theme": "light"},
        'cart': cart_data.data if cart_data.success else {"items": [], "total": 0}
    }
```

#### Alternative: Using MemoryStoreManager

You can also use the memory store manager approach for specific store operations:

```python
@Tool.register(name="GetUserData", description="Get user information using memory store manager")
async def get_user_data():
    context = RequestContext()
    
    # Use memory store manager for memory operations
    async with context.get_memory_store_manager('user_preferences') as prefs, \
               context.get_memory_store_manager('shopping_cart') as cart:

        user_prefs = await prefs.get({ 'firstname': 1, 'lastname': 1, 'theme': 1 })
        cart_data = await cart.get({ 'items': 1, 'total': 1 })
    
    return {
        'user': user_prefs or {"firstname": "Guest", "lastname": "", "theme": "light"},
        'cart': cart_data or {"items": [], "total": 0}
    }
```

## Best Practices

### 1. Schema Design

- Define clear and specific schemas
- Use `strict_schema=True` for production applications
- Keep schemas simple and focused

### 2. Scope Selection

- Use `USER_SPECIFIC` for personal data (recommended for most cases)
- Use `APPLICATION_WIDE` for shared resources and settings
- Use `SESSION_LEVEL` for temporary data that should be cleared

### 3. Retention Policy

- Choose appropriate retention periods based on data sensitivity
- Use `SESSION` for temporary data
- Consider data privacy requirements when setting retention

### 4. Error Handling

- Always handle potential memory access errors
- Log memory operations for debugging
- Provide fallback values when memory operations fail

### 5. Performance

- Use projections to retrieve only needed fields
- Minimize memory store operations
- Clean up unnecessary data

## Conclusion

Memory stores provide a way to persist data in your AgenticAI applications. By following this guide, you can:

1. Configure memory stores during design-time with appropriate schemas, scopes, and retention policies
2. Use memory stores in your tools with proper error handling
3. Use the `get_memory()` API for accessing memory stores
4. Build applications that maintain state across user interactions

Remember to always handle errors gracefully, log important operations, and choose appropriate scopes and retention policies for your use case.
