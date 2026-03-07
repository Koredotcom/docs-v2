# AgenticAI SDK Architecture Documentation

This document outlines the architecture of our Agentic AI SDK, detailing the components, their interactions, and dependencies.

The SDK provides not only provides the flexibility to configure or develop an app programmatically into out platform.
It also enables customization on top of our existing capabilities.

`Target Audience:` core developers and maintainers.

## System Overview

The Agentic AI operations and processes can be categorized into configuration (design-time) and runtime phases.

- **Configuration Phase**: developers develop their app, agents, tools etc and custom behaviors.
- **Runtime Phase**: Where agents are deployed and execute their functions

The SDK eco-system consists of following (major) components:

1. Agentic-Core (Library)
2. Workspace
3. Build scripts and process to dockerize Gvisor Image
4. Platform Integration


## 1. Agentic-Core (Configuration + Runtime Library + Platform API client)

A foundational library for configuration (design) and the runtime needs.

### Configuration

- Entity Model implementations that provides builder pattern for configuring the entities.
    - The builder classes help capture the entity relationship and provide intuitive way to build these entities using any autocomplete editor.
    - Supports configuration of:
        - Apps with custom orchestrators
        - Agents with specific roles and capabilities
        - Tools with various implementations
        - LLM models with configurable parameters

### Runtime Components

- Runtime interfaces for custom components like abstract_orchestrator
- Runtime classes to parse request / response objects that contain and encapsulate agentic conversations.
- Implements an SSE (Server-Sent Events) transport server for real-time communication.
    - The MCP server is tightly coupled with the application instance — it starts and stops alongside the app.
    - Running the app (for example, via `app.start()`) automatically starts the MCP server as part of the lifecycle.
- Implements a rest client to perform operations on platform (to be integrated with workspace CLI).


### Agentic-Core Structure

```
├── dist
│   ├── agenticai_core-0.1.0-py3-none-any.whl               -- binary distrubution of this library
│   └── agenticai_core-0.1.0.tar.gz
├── docs
│   ├── architecture.md                                     -- documention
│   ├── assets/
├── pyproject.toml
├── README.md
├── requirements.txt
├── setup.sh
├── src
│   └── agenticai_core
│       ├── api
│       │   └── kore_client.py                              -- a rest client to create artifacts & perform CI/CD operations on platform
│       ├── designtime
│       │   ├── __init__.py
│       │   └── models
│       │       ├── agent.py
│       │       ├── app.py
│       │       ├── icon.py
│       │       ├── __init__.py
│       │       ├── llm_model.py
│       │       ├── prompt.py
│       │       └── tool.py
│       ├── __init__.py
│       └── runtime
│           ├── agents
│           │   ├── agent_message.py
│           │   ├── agent_request.py
│           │   ├── agent_response.py
│           │   ├── agent_runtime.py                        -- implements the server for regsitering & calling custom orchestrators and tools
│           │   ├── abstract_agent.py                       -- base class that any agent must implement
│           │   └── abstract_orchestrator.py                -- base class that any custom orchestrator must implement
│           ├── __init__.py
│           └── message_item.py
└── wheels
    └── kore_api-1.0.0-py3-none-any.whl                     -- depenency binary for implementing kore_client
```


## 2. Workspace (Dev CLI + Custom Logic)

- Provides a skeleton workspace to help developers quickly bootstrap new projects.
- Includes example code to demonstrate usage patterns and integrations:
    - `Application` configuration templates.
    - Sample `custom orchestrator` logic.
    - Sample `custom tool` implementations.
- Supports environment-specific configuration management for flexible deployment across dev, staging, and production.
- Offers a developer `CLI` to streamline common tasks

### CLI Commands:

```bash

usage: run.py [-h] {config,package,start,test,deploy,publish,status,undeploy} ...

CLI tool to manage agentic entities creation

positional arguments:
  {config,package,start,test,deploy,publish,status,undeploy}
    config              Select which .env config file to use as default
    package             Create a deployable package (.kar) for your app
    start               Start the app
    test                Test your deployment end to end
    deploy              Deploy the app
    publish             Create a new environment for your app
    status              Fetch Status for your app environment
    undeploy            Undeploy the app

options:
  -h, --help            show this help message and exit
```


| Command    | Description |
|------------|-------------|
| `config -u <name>`  | Selects which .env config file to use as default |
| `package -o <name>`  | Generates a serialized json `application.config.json`, bundles source code into a `.kar` package. |
| `start`    | Starts up the MCP server with registered agents (custom orchestrator) & tools (custom tools). |
| `test`     | Tests the deployed app |
| `deploy -f <kar>`   | Creates resources on the platform and kicks off the package deployment using gvisor service |
| `publish -a <appId> -n <name>`   | Creates an environment for the deployed app |
| `status -a <appId> -n <name>`   | Checks status of an app environment |
| `undeploy -f <path>` | Undeploys the app environment |

Implements other supporting commands & subcommands for configuration management etc.

### Workspace Structure

```
├── bin
│   ├── application.config.json                         -- serialzed json
│   └── myproject.kar                                   -- the archive of the source code
├── .env
│   ├── dev                                             -- environment variables for dev-agent env
│   └── local                                           -- environment variables for local env
├── lib                                                 -- wheel files that are core dependencies for workspace
│   ├── agenticai_core-0.1.0-py3-none-any.whl
│   └── kore_api-1.0.0-py3-none-any.whl
├── README.md
├── requirements.txt                                    -- To include dependencies
├── run.py                                              -- CLI interface
└── src
    ├── app.py                                          -- app configuration and setup
    ├── functions
    │   └── __init__.py
    ├── __init__.py
    ├── orchestrator
    │   ├── __init__.py
    │   └── round_robin_orchestrator.py                 -- an example of custom orchestrator
    └── tools
        ├── add.py                                      -- example of a tool implementation
        ├── greet.py                                    -- example of a tool implementation
        └── __init__.py
```


## 3. Dockerized gVisor Image

- Provides a containerized gVisor-based environment for running the Workspace application securely in user space.
- Built using a custom `Dockerfile` that:
  - Installs gVisor (runsc) as the runtime
  - Sets up Python 3.10.15 environment
  - Configures a dedicated Platform user
  - Sets up necessary system capabilities
- Includes:
  - `main.py`: Entry script that triggers `runsc` and the app
  - `config.json`: OCI runtime configuration for `runsc`
  - `requirements.txt`: Python dependencies
- The image prepares a runtime virtual environment with all necessary dependencies pre-installed for the Workspace
- At container startup, the Workspace codebase is mounted into `rootfs`, allowing it to run within gVisor's secure user space isolation model
- Uses gVisor's security features for process isolation and system call filtering


## 4. Platform Integration

The Platform manages app deployment and its lifecycle through a unified API interface and provides integration with the MCP server.

### Public API

The platform exposes a unified deployment API that combines three operations:

1. **Upload**
   - Handles two file uploads:
     - `appSpec`: Binary of serialized application configuration (`application.config.json`)
     - `archiveSpec`: KAR archive containing the application code (`<archive>.kar`)
   - Validates file formats and contents
   - Stores files in platform storage

2. **Validate**
   - Verifies application configuration
   - Checks dependencies and requirements
   - Validates custom tools and orchestrators

3. **Import**
   - Creates platform resources
   - Sets up runtime environment
   - Configures access controls

### Platform APIs {#platform-apis}:

| Endpoint                      | Purpose                       |
|-------------------------------|-------------------------------|
| `POST **/deploy/`             | Unified deployment endpoint that orchestrates upload, validate, and import operations |
| `POST **/undeploy/`           | Un-deploys the app            |
| `POST **/execute/`            | Endpoint to interact with the app     |

### MCP Client Integration

The platform implements an MCP client using the LangGraph framework to:

- Connect with the MCP server
- Handle tool discovery
- Manage tool execution
- Process agent responses
- Maintain conversation state

### Gvisor Service

The gvisor service manages the container lifecycle in Kubernetes.

Key Responsibilities:

- Deployment
- Container provisioning in Kubernetes
- Health monitoring

## Deployment Workflow

1. **Development Phase**
   - Developer uses Workspace to create entity definitions and relationships (design time)
   - Developer implements custom orchestrators and tools within Workspace (runtime code)
   - Local testing using MCP client for tool discovery and execution
   - Environment configuration setup (.env files for dev/staging/prod)

2. **Packaging Phase**
   - Developer packages the project with `package` command using the workspace CLI
   - Generates `application.config.json` in the `bin` directory
   - Creates a KAR package containing all necessary files
   - Excludes unnecessary files (`.venv`, `__pycache__`, etc.)

3. **Deployment Phase**
   - Developer deploys the package with `deploy` command
   - Platform creates all design-time artifacts from the serialized json and KAR package
   - Platform initiates package deployment using gvisor service
   - Gvisor service provisions container in Kubernetes
   - Bootstraps the MCP server on the gvisor and returns the service endpoint

4. **Runtime Phase**
   - User interacts with App through Platform
   - Platform connects with the MCP server
   - Creates a session and performs tool discovery
   - Executes tool calls based on user interactions

5. **Monitoring and Maintenance**
   - Application health monitoring
   - Performance optimization
   - Regular updates and maintenance
   - Logging and debugging support

## Developer Test Tooling (Local): Python Client (MCP)

The AgenticAI platform provides an MCP (Message Control Protocol) client for local testing and development. This client allows you to interact with your application in real-time, test tool discovery, and verify tool calls.

### Features

- Real-time message processing
- Tool discovery and listing
- Interactive testing interface
- Tool call visualization
- Agent response handling
- Error handling and reporting

### Setup and Usage

1. **Environment Setup**
   - Install dependencies using uv package manager
   - Create virtual environment
   - Install required packages (mcp, httpx)
   - Install local agentic-core dependency

2. **Testing Workflow**
   - Start the server in one terminal
   - Start the client in another terminal
   - Verify connection and available tools
   - Test tool calls and monitor responses
   - Debug issues using server and client logs

---

**Note**: This documentation reflects the current design. Components and interactions may evolve as the system develops.

## `TO DOs`

- Track Deployment Status and provision an API for the CLI:
    ```
    archived | → deployment in progress → deployed
                         ↘ (optional) → deployment failed -> |
                         "Service Running" ?
                         Killed.

    Status -> { status }

    ```
- Logging in the Workspace:
    Any logs should be sent to the platform for debugging purposes.

