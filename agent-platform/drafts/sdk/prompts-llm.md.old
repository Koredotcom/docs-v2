# Prompts & LLM Configuration

Learn how to configure prompts and LLM settings for your agents.

## LLM Model Configuration

### Basic Configuration

```python
from agenticai_core.designtime.models.llm_model import LlmModel, LlmModelConfig

llm = LlmModel(
    model="gpt-4o",
    provider="Open AI",
    connection_name="Default Connection",
    max_timeout="60 Secs",
    max_iterations="25",
    modelConfig=LlmModelConfig(
        temperature=0.7,
        max_tokens=1600,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )
)
```

### Supported Providers

#### OpenAI

```python
llm = LlmModel(
    model="gpt-4o",
    provider="Open AI",
    connection_name="OpenAI Connection",
    modelConfig=LlmModelConfig(
        temperature=0.7,
        max_tokens=1600,
        frequency_penalty=0.0,
        presence_penalty=0.0,
        top_p=1.0
    )
)
```

#### Anthropic (Claude)

```python
llm = LlmModel(
    model="claude-3-5-sonnet-20240620",
    provider="Anthropic",
    connection_name="Anthropic Connection",
    modelConfig=LlmModelConfig(
        temperature=1.0,
        max_tokens=1024,
        top_p=0.7,
        top_k=5  # Anthropic-specific
    )
)
```

#### Azure OpenAI

```python
llm = LlmModel(
    model="gpt-4",
    provider="Azure OpenAI",
    connection_name="Azure Connection",
    modelConfig=LlmModelConfig(
        temperature=0.8,
        max_tokens=2048
    )
)
```

### Using Builder Pattern

```python
from agenticai_core.designtime.models.llm_model import (
    LlmModelBuilder, LlmModelConfigBuilder
)

# Build config
config_dict = LlmModelConfigBuilder() \
    .set_temperature(0.7) \
    .set_max_tokens(1600) \
    .set_top_p(0.9) \
    .build()

config = LlmModelConfig(**config_dict)

# Build model
llm_dict = LlmModelBuilder() \
    .set_model("gpt-4o") \
    .set_provider("Open AI") \
    .set_connection_name("Default") \
    .set_model_config(config) \
    .build()

llm = LlmModel(**llm_dict)
```

## LLM Parameters

### Temperature (0.0 - 2.0)

Controls randomness in generation:

- **0.0 - 0.3**: Deterministic, focused (good for factual tasks)
- **0.4 - 0.7**: Balanced creativity and consistency
- **0.8 - 1.5**: Creative, diverse responses
- **1.6 - 2.0**: Highly random (experimental)

```python
# Factual task
config = LlmModelConfig(temperature=0.1)

# Balanced
config = LlmModelConfig(temperature=0.7)

# Creative
config = LlmModelConfig(temperature=1.2)
```

### Max Tokens

Maximum tokens to generate:

```python
config = LlmModelConfig(
    max_tokens=1600  # Moderate response length
)
```

**Guidelines:**

- Short answers: 500-1000
- Detailed responses: 1000-2000
- Long-form content: 2000-4000

### Top P (0.0 - 1.0)

Nucleus sampling parameter:

- **0.1 - 0.5**: Very focused sampling
- **0.6 - 0.9**: Balanced diversity
- **0.95 - 1.0**: Maximum diversity

```python
config = LlmModelConfig(top_p=0.9)
```

### Penalties (-2.0 to 2.0)

Reduce repetition:

```python
config = LlmModelConfig(
    frequency_penalty=0.5,  # Penalize frequent tokens
    presence_penalty=0.3    # Encourage topic diversity
)
```

## Prompt Configuration

### System Prompt

Base role definition:

```python
from agenticai_core.designtime.models.prompt import Prompt

prompt = Prompt(
    system="You are a helpful assistant."
)
```

### Custom Prompt

Detailed instructions and context:

```python
prompt = Prompt(
    system="You are a helpful assistant.",
    custom="""You are an intelligent banking assistant designed to help 
    customers manage their financial needs efficiently and securely.
    
    ## Your Capabilities
    - Check account balances
    - Process transactions
    - Answer banking policy questions
    - Provide loan information
    
    ## Customer Context
    You have access to:
    {{memory.accountInfo.accounts}}
    
    Use this information for quick responses.
    """
)
```

### With Instructions

Structured guidelines:

```python
prompt = Prompt(
    system="You are a banking assistant.",
    custom="Help customers with account management.",
    instructions=[
        """### Security Protocols
        - Never ask for passwords, PINs, or CVV numbers
        - If request seems suspicious, politely decline""",
        
        """### Speaking Style
        - Use natural, conversational language
        - Keep responses concise
        - Provide key information first""",
        
        """### Handling Requests
        1. Greet the customer warmly
        2. Identify their need
        3. Execute the request efficiently
        4. Summarize and ask if anything else needed"""
    ]
)
```

## Template Variables

Prompts support runtime variable substitution:

| Variable | Description |
|----------|-------------|
| `{{app_name}}` | Application name |
| `{{app_description}}` | Application description |
| `{{agent_name}}` | Current agent name |
| `{{memory.store.field}}` | Access memory store data |
| `{{session_id}}` | Current session identifier |

### Example with Templates

```python
prompt = Prompt(
    custom="""You are acting as {{agent_name}} for the application "{{app_name}}".
    
    Application Description:
    {{app_description}}
    
    Customer Account Information:
    {{memory.accountInfo.accounts}}
    
    Use the above context to provide quick, accurate responses.
    """
)
```

## Orchestrator Prompts

For supervisor/orchestrator agents:

```python
supervisor_prompt = Prompt(
    system="You are a helpful assistant.",
    custom="""You are an AI Supervisor for "{{app_name}}".
    
    ### Your Team
    You manage multiple workers:
    - BillingAgent: Handles payments and billing
    - SupportAgent: General customer support
    - TechnicalAgent: Technical issues
    
    ### Routing Rules
    1. **Small-talk**: Route to user with friendly response
    2. **Direct Routing**: Match requests to worker expertise
    3. **Follow-up**: Route responses to same worker
    4. **Route to user**: When unrelated or complete
    5. **Multi-Intent**: Break into sequential requests
    """
)
```

## Best Practices

### 1. Clear Role Definition

Start with a clear role:

```python
prompt = Prompt(
    system="You are a helpful assistant.",
    custom="You are a banking assistant specializing in account management..."
)
```

### 2. Structured Instructions

Use instructions for important rules:

```python
prompt = Prompt(
    instructions=[
        "### Rule 1\nNever ask for sensitive information",
        "### Rule 2\nAlways confirm before executing transactions"
    ]
)
```

### 3. Context Injection

Use template variables for dynamic context:

```python
custom="""
Customer Context:
{{memory.accountInfo.accounts}}

Session: {{session_id}}
"""
```

### 4. Security Guidelines

Always include for sensitive apps:

```python
instructions=[
    """### Security
    - Never ask for passwords, PINs, CVV, or OTPs
    - Verify unusual requests
    - Escalate suspicious activity"""
]
```

### 5. Voice Agent Considerations

For voice/audio agents:

```python
instructions=[
    """### Speaking Style
    - Use natural, conversational language
    - Avoid markdown formatting
    - Speak numbers clearly
    - Use pauses with commas
    - Keep responses concise"""
]
```

## Configuration Tips

### Task-Specific Settings

**Factual Tasks:**

```python
LlmModelConfig(
    temperature=0.1,  # Low for consistency
    max_tokens=800
)
```

**Creative Tasks:**

```python
LlmModelConfig(
    temperature=1.0,  # Higher for creativity
    max_tokens=2000
)
```

**Balanced:**

```python
LlmModelConfig(
    temperature=0.7,
    max_tokens=1600,
    top_p=0.9
)
```

### Cost Optimization

- Use smaller models for simple tasks
- Set appropriate max_tokens
- Configure max_iterations to limit tool calls
- Set reasonable timeouts

### Quality Optimization

- Use latest model versions
- Increase max_tokens for detailed responses
- Lower temperature for consistency
- Increase max_iterations for complex workflows

## Related Documentation

- [LLM Model API Reference](../api/designtime/llm_model.md)
- [Prompt API Reference](../api/designtime/prompt.md)
- [Agent API Reference](../api/designtime/agent.md)
- [Creating Agents](creating-agents.md)
