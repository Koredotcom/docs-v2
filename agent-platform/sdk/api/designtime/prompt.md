# Prompt

::: agenticai_core.designtime.models.prompt.Prompt
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## Usage Examples

### Basic Prompt Configuration

```python
from agenticai_core.designtime.models.prompt import Prompt

prompt = Prompt(
    system="You are a helpful assistant.",
    custom="You assist users with banking operations."
)
```

### With Instructions

```python
prompt = Prompt(
    system="You are a banking assistant.",
    custom="You help customers manage accounts and transactions.",
    instructions=[
        "Never ask for passwords or PINs",
        "Always confirm transaction amounts",
        "Be professional and courteous",
        "Provide clear explanations"
    ]
)
```

### Complex Agent Prompt

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
    You have access to the following customer information:
    {{memory.accountInfo.accounts}}
    
    Use this information to provide quick responses without invoking tools
    for basic queries.
    """,
    instructions=[
        """### Security Protocols
        - Never ask for or store passwords, PINs, CVV numbers, or OTPs
        - If a request seems suspicious or fraudulent, politely decline""",
        
        """### Speaking Style
        - Use natural, conversational language
        - Keep responses concise and to the point
        - Provide key information first, then offer details"""
    ]
)
```

### Orchestrator Prompt

```python
supervisor_prompt = Prompt(
    system="You are a helpful assistant.",
    custom="""You are acting as an AI Supervisor for the application 
    "{{app_name}}". Here's a brief description:
    
    <app_description>
    {{app_description}}
    </app_description>
    
    You manage a team of workers and route requests appropriately.
    
    ### Rules:
    1. **Small-talk**: Route to user with appropriate response
    2. **Direct Routing**: Match requests to workers by expertise
    3. **Follow-up Context**: Route responses to the same worker
    4. **Route to user**: When request is unrelated or response is complete
    5. **Multi-Intent Queries**: Break into individual requests
    """
)
```

## Template Variables

Prompts support template variables that are resolved at runtime:

| Variable | Description |
|----------|-------------|
| `{{app_name}}` | Application name |
| `{{app_description}}` | Application description |
| `{{agent_name}}` | Current agent name |
| `{{memory.store_name.field}}` | Access memory store data |
| `{{session_id}}` | Current session identifier |

## Best Practices

### 1. Clear Role Definition

Start with a clear role definition in the system or custom prompt.

### 2. Structured Instructions

Use instructions for rules and guidelines that should stand out.

### 3. Context Injection

Use template variables to inject dynamic context like memory store data.

### 4. Security Guidelines

Always include security protocols in instructions for sensitive applications.

### 5. Speaking Style

For voice agents, include specific instructions about tone and response format.

## Related Models

- [Agent](agent.md) - Agents use prompts to define their behavior
- [App](app.md) - Applications can have orchestrator prompts

