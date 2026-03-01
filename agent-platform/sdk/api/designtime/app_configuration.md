# App Configuration

::: agenticai_core.designtime.models.app_configuration.AppConfigurations
    options:
      show_root_heading: true
      show_source: false
      members_order: source

## FillerMessages

::: agenticai_core.designtime.models.app_configuration.FillerMessages
    options:
      show_root_heading: true
      show_source: false

## StaticConfig

::: agenticai_core.designtime.models.app_configuration.StaticConfig
    options:
      show_root_heading: true
      show_source: false

## DynamicConfig

::: agenticai_core.designtime.models.app_configuration.DynamicConfig
    options:
      show_root_heading: true
      show_source: false

## Enumerations

### FillerMessageMode

::: agenticai_core.designtime.models.app_configuration.FillerMessageMode
    options:
      show_root_heading: true

## Builder Classes

### AppConfigurationsBuilder

::: agenticai_core.designtime.models.app_configuration.AppConfigurationsBuilder
    options:
      show_root_heading: true
      show_source: false
      members_order: source
      show_if_no_docstring: true
      show_signature: true
      show_signature_annotations: true
      filters:
        - "!^_"  # Hide private methods but show public ones

### FillerMessagesBuilder

::: agenticai_core.designtime.models.app_configuration.FillerMessagesBuilder
    options:
      show_root_heading: true
      show_source: false
      members_order: source
      show_if_no_docstring: true
      show_signature: true
      show_signature_annotations: true
      filters:
        - "!^_"  # Hide private methods but show public ones

### StaticConfigBuilder

::: agenticai_core.designtime.models.app_configuration.StaticConfigBuilder
    options:
      show_root_heading: true
      show_source: false
      members_order: source
      show_if_no_docstring: true
      show_signature: true
      show_signature_annotations: true
      filters:
        - "!^_"  # Hide private methods but show public ones

### DynamicConfigBuilder

::: agenticai_core.designtime.models.app_configuration.DynamicConfigBuilder
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

### Basic Configuration

```python
from agenticai_core.designtime.models.app_configuration import AppConfigurations

config = AppConfigurations(
    streaming=True,
    attachments={
        "enabled": True,
        "maxFileCount": 10,
        "maxFileSize": 5,
        "maxTokens": 10000
    },
    external_agent={"enabled": False}
)
```

### Static Filler Messages

```python
from agenticai_core.designtime.models.app_configuration import (
    AppConfigurations, FillerMessages, FillerMessageMode, StaticConfig
)

filler = FillerMessages(
    enabled=True,
    initial_delay=1000,
    interval_duration=2000,
    max_message_count=4,
    mode=FillerMessageMode.STATIC,
    static_config=StaticConfig(
        messages=[
            {"type": "text", "value": "Processing your request..."},
            {"type": "text", "value": "Almost there..."},
            {"type": "text", "value": "Just a moment more..."}
        ]
    )
)

config = AppConfigurations(
    streaming=True,
    filler_messages=filler
)
```

### Dynamic Filler Messages

```python
from agenticai_core.designtime.models.app_configuration import (
    FillerMessages, FillerMessageMode, DynamicConfig
)
from agenticai_core.designtime.models.llm_model import LlmModel, LlmModelConfig

filler = FillerMessages(
    enabled=True,
    initial_delay=1000,
    interval_duration=2000,
    max_message_count=4,
    mode=FillerMessageMode.DYNAMIC,
    dynamic_config=DynamicConfig(
        llm_model=LlmModel(
            provider="Anthropic",
            model="claude-3-5-sonnet-20240620",
            connection_name="Default Connection",
            modelConfig=LlmModelConfig(
                temperature=1.0,
                top_p=0.7,
                top_k=5,
                max_tokens=1024
            )
        ),
        llm_timeout="1s",
        context_window=50
    )
)
```

### Complete Configuration with All Features

```python
config = AppConfigurations(
    streaming=True,
    attachments={
        "enabled": True,
        "maxFileCount": 10,
        "maxFileSize": 5,  # MB
        "maxTokens": 10000,
        "supportedTypes": [".pdf", ".docx", ".txt", ".jpg", ".png"]
    },
    external_agent={
        "enabled": True,
        "endpoint": "https://api.example.com/agent",
        "timeout": 30
    },
    filler_messages=FillerMessages(
        enabled=True,
        initial_delay=1000,
        interval_duration=2000,
        max_message_count=4,
        mode=FillerMessageMode.DYNAMIC,
        dynamic_config=DynamicConfig(...)
    )
)
```

### Using Builder Pattern

```python
from agenticai_core.designtime.models.app_configuration import (
    AppConfigurationsBuilder, FillerMessagesBuilder, StaticConfigBuilder
)

# Build static config
static_config_dict = StaticConfigBuilder() \
    .add_message({"type": "text", "value": "Processing..."}) \
    .add_message({"type": "text", "value": "Almost done..."}) \
    .build()

static_config = StaticConfig(**static_config_dict)

# Build filler messages
filler_dict = FillerMessagesBuilder() \
    .set_enabled(True) \
    .set_initial_delay(1000) \
    .set_interval_duration(2000) \
    .set_max_message_count(4) \
    .set_mode(FillerMessageMode.STATIC) \
    .set_static_config(static_config) \
    .build()

filler = FillerMessages(**filler_dict)

# Build app configuration
config_dict = AppConfigurationsBuilder() \
    .set_streaming(True) \
    .set_attachments({"enabled": True}) \
    .set_filler_messages(filler) \
    .build()

config = AppConfigurations(**config_dict)
```

## Feature Details

### Streaming

Enable token-by-token streaming of LLM responses for better user experience.

### Attachments

Configure file upload capabilities:

- Maximum file count per request
- Maximum file size in MB
- Maximum tokens to extract from files
- Supported file types

### External Agent

Integrate with external agent systems via HTTP endpoints.

### Filler Messages

Show contextual messages while agents process requests:

- **Static**: Pre-defined messages shown in sequence
- **Dynamic**: AI-generated messages based on conversation context

## Related Models

- [App](app.md) - Applications use these configurations
- [LlmModel](llm_model.md) - Used for dynamic filler messages
