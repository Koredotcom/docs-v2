---
name: Koreai
description: Use when building, deploying, and managing AI-powered agentic applications. Reach for this skill when creating multi-agent systems, configuring orchestration patterns, building tools and workflows, integrating knowledge sources, or deploying agents to production environments.
metadata:
    mintlify-proj: koreai
    version: "1.0"
---

# KorAI Agent Platform Skill

## Product Summary

The KorAI Agent Platform is an enterprise solution for building, deploying, and managing autonomous AI agents at scale. It enables you to create intelligent agents with defined scopes, instructions, tools, and knowledge sources—then orchestrate them to handle complex workflows. The platform supports three orchestration patterns (Single Agent, Supervisor, Adaptive Network), visual workflow builders, code-based tools, RAG-powered knowledge integration, and multi-stage deployment across environments.

**Key files and concepts:**
- **Agentic Apps**: Top-level container holding agents, tools, and orchestration
- **Agents**: Specialized AI workers with scope, instructions, tools, and knowledge
- **Tools**: Workflow (visual), Code (Python/JavaScript), or MCP (Model Context Protocol) integrations
- **Orchestrator**: Central coordinator managing agent selection and multi-agent workflows
- **Environments**: Isolated deployment targets (draft, staging, production)

**Primary docs**: https://koreai.mintlify.app/agent-platform

---

## When to Use

Reach for this skill when:

- **Building agents**: Creating new agents from scratch, configuring scope/instructions, assigning tools and knowledge
- **Designing workflows**: Building multi-step processes with visual workflow tools, connecting nodes, handling conditions and loops
- **Orchestrating multi-agent systems**: Choosing between Single Agent, Supervisor, or Adaptive Network patterns; configuring agent delegation
- **Integrating tools**: Creating workflow tools, code tools, or MCP-based integrations; configuring tool calling and parameters
- **Connecting knowledge**: Setting up Search AI applications, configuring RAG retrieval, linking documents or external sources
- **Deploying and managing**: Creating app versions, deploying to environments, managing API keys, rolling back deployments
- **Testing and validation**: Running simulations, testing agent responses, evaluating performance, configuring guardrails
- **Troubleshooting**: Diagnosing agent behavior, debugging tool execution, checking deployment status

---

## Quick Reference

### Orchestration Patterns

| Pattern | When to Use | Execution | Latency |
|---------|------------|-----------|---------|
| **Single Agent** | Simple, focused domains; one primary capability | Sequential | Lowest |
| **Supervisor** | Complex tasks; parallel agent coordination; centralized control | Parallel | Medium |
| **Adaptive Network** | Sequential hand-offs; dynamic routing; agents decide delegation | Sequential | Variable |

### Tool Types

| Type | Use When | Example |
|------|----------|---------|
| **Workflow Tool** | Visual, no-code, well-defined processes | Order lookup → API call → format response |
| **Code Tool** | Custom logic, calculations, complex transformations | Python/JavaScript function for shipping cost |
| **MCP Tool** | Remote functions via Model Context Protocol | Enterprise CRM or inventory system |

### Agent Components

| Component | Purpose | Example |
|-----------|---------|---------|
| **Scope** | Defines what tasks the agent handles | "Handles billing inquiries and refunds" |
| **Instructions** | Behavioral guidelines and response patterns | "Verify identity before discussing billing" |
| **Tools** | Actions the agent can invoke | get_payment_status, process_refund |
| **Knowledge** | Information sources for RAG retrieval | FAQs, pricing docs, policies |

### Deployment Lifecycle

```
Develop → Create Version → Create Environment → Deploy → Access
  (draft)    (snapshot)      (isolated target)  (release)  (URL/API)
```

### Node Types in Workflow Tools

**Control**: Start, End, Condition, Loop  
**Action**: API, Function, Integration, Human  
**AI**: Text-to-Text, Text-to-Image, Audio-to-Text, Image-to-Text, DocSearch

---

## Decision Guidance

### When to Use Single Agent vs Supervisor vs Adaptive Network

| Scenario | Pattern | Why |
|----------|---------|-----|
| One agent handles all customer service requests | Single Agent | No coordination overhead; lowest latency |
| Billing, orders, and support agents work in parallel on same request | Supervisor | Centralized orchestrator decomposes task; parallel execution |
| HR → IT → Finance agents hand off sequentially during onboarding | Adaptive Network | Natural sequential flow; agents autonomously decide handoff |
| Simple Q&A with no tool calling | Single Agent | Minimal complexity; fast response |
| Complex request requiring multiple specialists in parallel | Supervisor | Orchestrator coordinates; faster overall response |
| Multi-step process where each step requires different expertise | Adaptive Network | Agents route based on context; no central bottleneck |

### When to Use Workflow Tool vs Code Tool vs MCP Tool

| Scenario | Tool Type | Why |
|----------|-----------|-----|
| Non-developer needs to build order lookup flow | Workflow Tool | Visual builder; no coding required |
| Complex calculation or data transformation | Code Tool | Custom logic; full control |
| Integrating with enterprise CRM or inventory system | MCP Tool | Standardized protocol; shared toolset |
| Multi-step process with conditions and loops | Workflow Tool | Visual traceability; easier debugging |
| Dynamic processing based on runtime data | Code Tool | Flexible; handles edge cases |
| Reusable integration across multiple apps | MCP Tool | Centralized; single source of truth |

### When to Deploy to Staging vs Production

| Scenario | Environment | Why |
|----------|-------------|-----|
| Testing new agent behavior before release | Staging | Isolated; doesn't affect users |
| Validating tool integrations and knowledge sources | Staging | Safe testing; rollback if needed |
| Releasing tested, stable version to users | Production | Live; monitored; accessible to end users |
| Experimenting with new orchestration pattern | Draft | Development; no external access |

---

## Workflow

### Building an Agent from Scratch

1. **Create an Agentic App** (if not already created)
   - Navigate to Agent Platform → Create App
   - Choose to start from scratch or import existing
   - Configure LLM and basic settings

2. **Create the Agent**
   - Open app → Agents section → + New Agent → Create from Scratch
   - Define profile: name, description, AI model, context window

3. **Configure Agent Definition**
   - Write scope: what tasks the agent handles
   - Write instructions: behavioral guidelines, constraints, response format
   - Use clear role definition, scope boundaries, constraints, and examples

4. **Add Tools**
   - Tools → + Add Tool
   - Choose: Create new or Import existing
   - Configure name, description, and parameters
   - Ensure descriptions are clear for LLM tool selection

5. **Connect Knowledge**
   - Knowledge → + Connect Knowledge
   - Select existing Search AI app or create new one
   - Verify knowledge sources are indexed and searchable

6. **Test the Agent**
   - Click Test in agent toolbar
   - Run conversations covering happy path, edge cases, boundary cases, error cases
   - Verify tool calling and knowledge retrieval

7. **Deploy**
   - Save agent configuration
   - Run Diagnostics to validate dependencies
   - Publish app to make agent live

### Building a Workflow Tool

1. **Create the Tool**
   - Tools → + New Tool → Workflow Tool
   - Enter name and description

2. **Define Input Parameters**
   - Click Manage I/O → Input tab
   - Add variables: name, type, mandatory flag, default value
   - Support types: Text, Number, Boolean, Remote file, Enum, JSON

3. **Design the Flow**
   - Drag nodes onto canvas: Start, API, Function, Condition, End
   - Connect nodes sequentially or in parallel (max 10 branches per node)
   - Configure each node with inputs, outputs, and logic

4. **Configure Nodes**
   - **API Node**: URL, method, headers, query params, body
   - **Function Node**: JavaScript/Python transformation logic
   - **Condition Node**: Boolean expressions for branching
   - **Loop Node**: Iterate over collections

5. **Define Output**
   - Manage I/O → Output tab
   - Add output variables: name and type
   - Assign values in End node using context syntax

6. **Test the Flow**
   - Click Run flow → provide sample inputs
   - Review debug log for each node's execution
   - Check output and error handling

7. **Deploy**
   - Create Version → New Version (immutable snapshot)
   - Versions → Deploy to activate endpoint
   - Generate API keys for external access

### Deploying an App to Production

1. **Prepare for Deployment**
   - Run Diagnostics to validate all agents, tools, knowledge
   - Test key user flows in simulator
   - Verify guardrails and PII protection configured
   - Check API keys generated

2. **Create App Version**
   - Versions → + New Version
   - Select agent and tool versions to include
   - Enter name and description
   - Review configuration before creating

3. **Create Environment**
   - Environments → + New Environment
   - Enter name, description, select app version
   - Click Create

4. **Deploy Version to Environment**
   - Select version from dropdown
   - Select target environment (staging or production)
   - Click Deploy

5. **Access the Deployed App**
   - **Web Widget**: Copy embed code from Environments → Embed Code tab
   - **API**: Use cURL script or construct POST request to /execute endpoint
   - **API Keys**: Generate and manage in Deploy → API Keys

6. **Monitor and Rollback**
   - Track deployments in Deploy → History
   - If issues arise, select previous version and click Rollback
   - Review analytics and logs for performance

---

## Common Gotchas

- **Agent scope too broad**: Agents should specialize in specific domains. Overly broad scopes confuse the orchestrator and reduce accuracy. Define clear boundaries.

- **Tool descriptions unclear**: LLMs use tool descriptions to decide when to call tools. Vague descriptions lead to incorrect tool selection. Write specific, action-oriented descriptions.

- **Missing knowledge sources**: Agents without connected knowledge will hallucinate answers. Always link relevant Search AI apps or documents.

- **Workflow nodes not connected**: All nodes must connect to Start and End. Stray nodes won't execute. Use Auto Arrange to visualize the flow.

- **Backward loops in workflows**: Connecting a node to an earlier node creates logic cycles, which are blocked. Redesign the flow to move forward only.

- **Context window too small**: If agents forget conversation history, increase context window (default 50, max 200 messages).

- **Deploying without testing**: Always run Diagnostics and test in simulator before deploying to production. Catch errors early.

- **API keys exposed in code**: Never commit API keys to repositories. Use environment variables and secure vaults.

- **Parallel branches exceeding 10**: Workflow tools support max 10 parallel branches from a single node. Consolidate or redesign.

- **Tool timeout misconfiguration**: Sync tools timeout at 180s (configurable 60–300s). Async tools can wait indefinitely. Match timeout to expected execution time.

- **Guardrails not enabled**: PII detection, jailbreak detection, and toxicity scanning are optional. Enable them before production to prevent unsafe outputs.

- **Version not deployed**: Creating a version doesn't activate it. You must explicitly Deploy the version to an environment to make it live.

---

## Verification Checklist

Before submitting agent or app changes:

- [ ] **Agent Configuration**
  - [ ] Scope clearly defines what the agent handles
  - [ ] Instructions include role, guidelines, constraints, and response format
  - [ ] All required tools are added and descriptions are clear
  - [ ] Knowledge sources are connected and indexed
  - [ ] Agent tested with happy path, edge cases, and error scenarios

- [ ] **Tools**
  - [ ] Tool name and description are clear and specific
  - [ ] Input parameters are defined with types and defaults
  - [ ] Output parameters match expected return values
  - [ ] API endpoints, credentials, and timeouts are configured
  - [ ] Tool tested with sample inputs and error cases

- [ ] **Orchestration**
  - [ ] Correct pattern selected (Single Agent, Supervisor, Adaptive Network)
  - [ ] Behavioral instructions set at orchestrator level
  - [ ] Agent delegation rules configured (if Adaptive Network)
  - [ ] Model and voice settings configured

- [ ] **Knowledge**
  - [ ] Search AI app created and indexed
  - [ ] Content sources connected and verified
  - [ ] Retrieval configuration tested with sample queries
  - [ ] Answer generation prompts configured

- [ ] **Deployment**
  - [ ] Diagnostics run with no errors
  - [ ] App version created with correct agent/tool versions
  - [ ] Environment created with appropriate name
  - [ ] Version deployed to target environment
  - [ ] API keys generated and stored securely
  - [ ] Web widget or API endpoint tested

- [ ] **Safety & Compliance**
  - [ ] Guardrails enabled (PII detection, jailbreak, toxicity)
  - [ ] PII patterns configured if handling sensitive data
  - [ ] Rate limits set if needed
  - [ ] Audit logs reviewed for access control

---

## Resources

**Comprehensive navigation**: https://koreai.mintlify.app/llms.txt

**Critical documentation pages**:
1. [Agent Platform Overview](https://koreai.mintlify.app/agent-platform) — Architecture, components, and how the platform works
2. [Create an Agent](https://koreai.mintlify.app/agent-platform/agents/create-an-agent) — Step-by-step guide to agent creation, configuration, and testing
3. [Workflow Tools](https://koreai.mintlify.app/agent-platform/tools/workflow) — Visual tool builder, node types, flow design, and deployment

---

> For additional documentation and navigation, see: https://koreai.mintlify.app/llms.txt
