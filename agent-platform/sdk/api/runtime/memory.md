# Memory

Runtime memory management APIs for persistent data storage across user sessions, applications, and conversations.

## Overview

The Memory APIs provide access to persistent storage configured via design-time [MemoryStore](../designtime/memory_store.md) models. Memory operations are scoped and automatically managed based on the current request context.

For conceptual information about memory stores, schemas, and configuration, see the [Memory Stores Guide](../../guide/memory-stores.md).

## MemoryManager

::: agenticai_core.runtime.memory.memory_manager.MemoryManager
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## MemoryStoreManager  

::: agenticai_core.runtime.memory.memory_manager.MemoryStoreManager
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## Usage Examples

### Basic Memory Operations

```python
from agenticai_core.designtime.models.tool import Tool
from agenticai_core.runtime.sessions.request_context import RequestContext

@Tool.register(name="UserProfileManager", description="Manage user profile data")
async def manage_user_profile(action: str, data: dict = None):
    """Comprehensive user profile management with memory."""
    
    ctx = RequestContext()
    memory = ctx.get_memory()
    
    if action == "get_profile":
        # Retrieve user profile
        result = await memory.get_content('user_preferences', {
            'firstname': 1,
            'lastname': 1,
            'email': 1,
            'theme': 1,
            'language': 1
        })
        
        if result.success and result.data:
            return {"success": True, "profile": result.data}
        else:
            return {"success": True, "profile": None}
    
    elif action == "update_profile":
        # Update user profile
        if not data:
            return {"success": False, "error": "No data provided"}
            
        result = await memory.set_content('user_preferences', data)
        
        if result.success:
            return {"success": True, "message": "Profile updated"}
        else:
            return {"success": False, "error": "Update failed"}
    
    elif action == "delete_profile":
        # Delete user profile
        result = await memory.delete_content('user_preferences')
        
        if result.success:
            return {"success": True, "message": "Profile deleted"}
        else:
            return {"success": False, "error": "Deletion failed"}
    
    else:
        return {"success": False, "error": f"Unknown action: {action}"}
```

### Store-Specific Operations

```python
@Tool.register(name="UserDataManager", description="Manage user data with store manager")
async def user_data_manager(user_id: str, data: dict = None):
    """Use specific store manager for user data operations."""
    
    ctx = RequestContext()
    
    try:
        # Get manager for specific store
        async with ctx.get_memory_store_manager('user_data') as store:
            
            if data:
                # Store user data
                result = await store.set(data)
                return {"success": True, "stored": result}
            else:
                # Retrieve user data
                result = await store.get({
                    'profile': 1,
                    'preferences': 1,
                    'history': 1
                })
                return {"success": True, "data": result}
                
    except MemoryAccessError as e:
        return {"success": False, "error": f"Memory access denied: {str(e)}"}
    except Exception as e:
        return {"success": False, "error": f"Operation failed: {str(e)}"}
```

### Multi-Store Operations

```python
@Tool.register(name="ShoppingCartManager", description="Manage shopping cart and preferences")
async def manage_shopping_data(action: str):
    """Manage data across multiple memory stores."""
    
    ctx = RequestContext()
    
    if action == "get_shopping_context":
        # Use MemoryManager for multiple stores
        memory = ctx.get_memory()
        
        # Get user preferences
        prefs_result = await memory.get_content('user_preferences', {
            'firstname': 1,
            'preferred_currency': 1,
            'shipping_address': 1
        })
        
        # Get shopping cart
        cart_result = await memory.get_content('shopping_cart', {
            'items': 1,
            'total': 1,
            'currency': 1
        })
        
        return {
            "success": True,
            "user": prefs_result.data if prefs_result.success else {},
            "cart": cart_result.data if cart_result.success else {"items": [], "total": 0}
        }
        
    elif action == "sync_cart_with_preferences":
        # Use MemoryStoreManager for coordinated operations
        async with ctx.get_memory_store_manager('user_preferences') as prefs_store, \
                   ctx.get_memory_store_manager('shopping_cart') as cart_store:
            
            # Get user currency preference
            prefs = await prefs_store.get({'preferred_currency': 1})
            preferred_currency = prefs.get('preferred_currency', 'USD') if prefs else 'USD'
            
            # Update cart currency
            cart_data = await cart_store.get({'items': 1, 'total': 1})
            if cart_data:
                cart_data['currency'] = preferred_currency
                await cart_store.set(cart_data)
                
                return {"success": True, "currency": preferred_currency}
            
        return {"success": True, "message": "No cart to sync"}
```

## Projection Examples

Projections allow you to retrieve only the fields you need, improving performance:

```python
@Tool.register(name="ProjectionExamples", description="Memory projection examples")
async def projection_examples():
    """Examples of using projections for efficient data retrieval."""
    
    ctx = RequestContext()
    memory = ctx.get_memory()
    
    # Include specific fields only
    user_basic = await memory.get_content('user_profile', {
        'firstname': 1,
        'lastname': 1,
        'email': 1
    })
    
    # Include all fields except sensitive ones  
    user_safe = await memory.get_content('user_profile', {
        'password_hash': 0,
        'ssn': 0
    })
    
    # Get nested fields
    user_address = await memory.get_content('user_profile', {
        'address.street': 1,
        'address.city': 1,
        'address.zipcode': 1
    })
    
    # Array projections
    user_orders = await memory.get_content('user_orders', {
        'orders.date': 1,
        'orders.total': 1,
        'orders.status': 1
    })
    
    return {
        "basic": user_basic.data if user_basic.success else None,
        "safe": user_safe.data if user_safe.success else None,
        "address": user_address.data if user_address.success else None,
        "orders": user_orders.data if user_orders.success else None
    }
```

## Error Handling Patterns

### Graceful Degradation

```python
@Tool.register(name="PersonalizedGreeting", description="Greet user with personalized message")
async def personalized_greeting():
    """Greeting with graceful fallback when memory is unavailable."""
    
    ctx = RequestContext()
    memory = ctx.get_memory()
    
    try:
        # Attempt to get user data
        result = await memory.get_content('user_preferences', {
            'firstname': 1,
            'lastname': 1,
            'preferred_greeting': 1
        })
        
        if result.success and result.data:
            user_data = result.data
            firstname = user_data.get('firstname', 'Guest')
            greeting_style = user_data.get('preferred_greeting', 'formal')
            
            if greeting_style == 'casual':
                return f"Hey {firstname}! 👋"
            else:
                lastname = user_data.get('lastname', '')
                return f"Good day, {firstname} {lastname}!"
        
        # Fallback to generic greeting
        return "Hello! Welcome back!"
        
    except Exception as e:
        # Always provide a response even if memory fails
        return "Hello! How can I assist you today?"
```

### Retry Logic

```python
import asyncio

async def retry_memory_operation(operation_func, max_retries=3, delay=1.0):
    """Retry memory operations with exponential backoff."""
    
    for attempt in range(max_retries):
        try:
            return await operation_func()
        except Exception as e:
            if attempt == max_retries - 1:
                raise  # Re-raise on final attempt
            
            wait_time = delay * (2 ** attempt)  # Exponential backoff
            await asyncio.sleep(wait_time)

# Usage
async def robust_memory_get(memory, store_name, projections):
    return await retry_memory_operation(
        lambda: memory.get_content(store_name, projections)
    )
```

## Performance Considerations

### Projection Optimization

```python
# ✅ Good - Get only needed fields
user_display = await memory.get_content('user_profile', {
    'firstname': 1,
    'lastname': 1,
    'avatar_url': 1
})

# ❌ Avoid - Getting entire large documents
full_profile = await memory.get_content('user_profile', {})  # Gets everything
```

### Batch Operations

```python
async def batch_user_operations(user_updates: list):
    """Efficiently handle multiple user operations."""
    
    ctx = RequestContext()
    
    # Use single store manager for multiple operations
    async with ctx.get_memory_store_manager('user_preferences') as store:
        results = []
        
        for update in user_updates:
            try:
                # Perform operation within same connection
                result = await store.set(update['data'])
                results.append({"success": True, "user_id": update['user_id']})
            except Exception as e:
                results.append({"success": False, "user_id": update['user_id'], "error": str(e)})
        
        return results
```

<hr/>

**Related Resources**

- [RequestContext API](request_context.md) - Parent context for memory access  
- [MemoryStore Design-Time Model](../designtime/memory_store.md) - Store configuration
- [Memory Stores Guide](../../guide/memory-stores.md) - Concepts and configuration
- [Working with Tools Guide](../../guide/working-with-tools.md) - Tool development patterns
- [Runtime Overview](index.md) - Complete runtime API reference
