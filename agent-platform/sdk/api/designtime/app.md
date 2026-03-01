# App

::: agenticai_core.designtime.models.app.App
    options:
      show_root_heading: true
      show_source: false
      members_order: source
      filters:
        - "!^_"  # Hide private methods
        - "!^save$"  # Hide save method (internal use only via CLI)
        - "!^start$"  # Hide start method (documented in Runtime APIs)

## OrchestratorType

::: agenticai_core.designtime.models.app.OrchestratorType
    options:
      show_root_heading: true
      show_source: false

## AppBuilder

::: agenticai_core.designtime.models.app.AppBuilder
    options:
      show_root_heading: true
      show_source: false
      members_order: source
      show_if_no_docstring: true
      show_signature: true
      show_signature_annotations: true
      filters:
        - "!^_"  # Hide private methods

## Usage Examples

### Creating an Application

```python
from agenticai_core.designtime.models.app import App, OrchestratorType
from agenticai_core.designtime.models.agent import Agent
from agenticai_core.designtime.models.llm_model import LlmModel, LlmModelConfig

# Create an application
app = App(
    name="Personal Banker",
    description="Banking assistant application",
    orchestrationType=OrchestratorType.CUSTOM_SUPERVISOR,
    ai_model=LlmModel(
        model="gpt-4o",
        provider="Open AI",
        connection_name="Default Connection",
        modelConfig=LlmModelConfig(temperature=0.7, max_tokens=1600)
    ),
    agents=[
        Agent(name="FinanceAssist", ...)
    ]
)
```

!!! info "Starting the Application"
    To start and run your application, see the [Runtime APIs](../runtime/index.md) documentation for the `app.start()` method and CLI commands.

### Using Builder Pattern

```python
from agenticai_core.designtime.models.app import AppBuilder

app_dict = AppBuilder() \
    .set_name("My Banking App") \
    .set_description("Comprehensive banking services") \
    .set_orchestrator_type(OrchestratorType.CUSTOM_SUPERVISOR) \
    .set_agents([agent1, agent2]) \
    .set_memory_stores([memory_store]) \
    .build()

app = App(**app_dict)
```

## Related Models

- [Agent](agent.md) - Configure agents for your application
- [MemoryStore](memory_store.md) - Set up persistent storage
- [AppConfiguration](app_configuration.md) - Configure advanced features
