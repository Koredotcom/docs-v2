# Design Decisions and Technical Documentation

This directory contains technical documentation about the AgenticAI Core SDK architecture, design decisions, and internal implementation details.

**Target Audience**: Core developers, maintainers, and contributors

## Documents

### Architecture Documentation

- **[architecture.md](architecture.md)** - Complete system architecture overview
  - System overview and component breakdown
  - Agentic-Core library structure
  - Workspace development environment
  - Dockerized gVisor image details
  - Platform integration
  - Deployment workflow
  - Developer test tooling

### Class Diagrams

- **[designtime_class_diagram.md](designtime_class_diagram.md)** - Design-time models UML
  - App, Agent, Tool, LlmModel, Prompt, Icon classes
  - Entity relationships and composition
  - Includes diagram: `assets/designtime_class_diagram-1.svg`

- **[runtime_class_diagram.md](runtime_class_diagram.md)** - Runtime components UML
  - AbstractAgent, Runtime, AgentMessage classes
  - Message protocol (MessageItem, ToolCall, ErrorMessage)
  - Request/Response flow
  - Includes diagram: `assets/runtime_class_diagram-1.svg`

### Sequence and Interaction Diagrams

- **[sequence.mermaid](sequence.mermaid)** - Sequence diagram source
  - Agent request/response flow
  - SVG output: `assets/sequence.svg`

- **[component_interaction.mmd](component_interaction.mmd)** - Component interaction diagram
  - System component relationships
  - SVG output: `assets/component_interaction.svg`

### Feature Documentation

- **[logging.md](logging.md)** - Logging system design
  - Logger implementation
  - Structured logging format
  - Platform integration
  - SSE event handling
  - Best practices

- **[memory_store_guide.md](memory_store_guide.md)** - Memory store system
  - Memory store configuration
  - Runtime usage patterns
  - Scope management
  - Retention policies
  - Best practices

### Assets

  - `component_interaction.svg` - Component interaction diagram
  - `design_time_classes-1.svg` - Design-time class diagram
  - `designtime_class_diagram-1.svg` - Design-time UML diagram
  - `runtime_class_diagram-1.svg` - Runtime UML diagram
  - `sequence.svg` - Sequence diagram

## Purpose

These documents are maintained for:

1. **Internal Reference** - Understanding system architecture and design choices
2. **Onboarding** - Help new developers understand the codebase
3. **Decision Tracking** - Document why certain architectural choices were made
4. **Maintenance** - Support ongoing development and refactoring

## Related Documentation

### User-Facing Documentation

For user-facing documentation, see:

- [Getting Started Guide](../getting-started/installation.md)
- [API Reference](../api/index.md)
- [User Guides](../guide/building-apps.md)
- [Examples](../examples/banking-assistant.md)

### Contributing

For contribution guidelines, see:

- [Contributing Guide](../contributing.md)

## Maintenance

These documents should be updated when:

- Major architectural changes are made
- New components are added to the system
- Design decisions are made that affect the overall architecture
- Class structures are significantly modified
