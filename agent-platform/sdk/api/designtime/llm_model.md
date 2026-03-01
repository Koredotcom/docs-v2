# LLM Model

::: agenticai_core.designtime.models.llm_model.LlmModel
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## LlmModelConfig

::: agenticai_core.designtime.models.llm_model.LlmModelConfig
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## LlmModelBuilder

::: agenticai_core.designtime.models.llm_model.LlmModelBuilder
    options:
      show_root_heading: true
      show_source: false
      members_order: source
      show_if_no_docstring: true
      show_signature: true
      show_signature_annotations: true
      filters:
        - "!^_"  # Hide private methods but show public ones

## LlmModelConfigBuilder

::: agenticai_core.designtime.models.llm_model.LlmModelConfigBuilder
    options:
      show_root_heading: true
      show_source: false
      members_order: source
      show_if_no_docstring: true
      show_signature: true
      show_signature_annotations: true
      filters:
        - "!^_"  # Hide private methods but show public ones

## Usage Examples

### Creating LLM Configuration

```python
from agenticai_core.designtime.models.llm_model import LlmModel, LlmModelConfig

# Create model configuration
config = LlmModelConfig(
    temperature=0.7,
    max_tokens=1600,
    top_p=1.0,
    frequency_penalty=0.0,
    presence_penalty=0.0
)

# Create LLM model
llm = LlmModel(
    model="gpt-4o",
    provider="Open AI",
    connection_name="Default Connection",
    max_timeout="60 Secs",
    max_iterations="25",
    modelConfig=config
)
```

### Using Builder Pattern

```python
from agenticai_core.designtime.models.llm_model import (
    LlmModelBuilder, LlmModelConfigBuilder, LlmModelConfig
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
    .set_connection_name("Default Connection") \
    .set_max_timeout("60 Secs") \
    .set_max_iterations("25") \
    .set_model_config(config) \
    .build()

llm = LlmModel(**llm_dict)
```

### Provider-Specific Examples

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
        top_k=5  # Anthropic-specific parameter
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

## Parameter Guidelines

### Temperature (0.0 - 2.0)

- **0.0 - 0.3**: Deterministic, focused responses (good for factual tasks)
- **0.4 - 0.7**: Balanced creativity and consistency
- **0.8 - 1.5**: Creative, diverse responses
- **1.6 - 2.0**: Highly random (experimental)

### Top P (0.0 - 1.0)

- **0.1 - 0.5**: Very focused sampling
- **0.6 - 0.9**: Balanced diversity
- **0.95 - 1.0**: Maximum diversity

### Max Tokens

- Set based on expected response length
- Consider context window limits of the model

## Related Models

- [Agent](agent.md) - Agents use LLM models for decision-making
- [App](app.md) - Applications can have default LLM configurations
